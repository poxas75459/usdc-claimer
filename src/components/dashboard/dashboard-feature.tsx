/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2cm28bJJCXx9FQPiQ7aZH9sk5B25kPXvNvJMAeAhPdnAjmB3A5mo7t7LDnLX4VEKvEULm9nyXgLZeTDivPeGY4NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46YgVR8y9u6gLWoaK3PutF6VAmPiqkhfkuZZ6gohZyd8d2xDWMDzbJHyJxxJhWhhU1mVHpv6kvi8gCb32GXs1xWK",
  "key1": "6UNvT5hdp4R6bb5d8cLgX9XCaKFgyf9xcMruPJUb4DQtLHpn2ryketU5jnRHYRcUdrXEEeD7ZPskCvpG3V3ywB7",
  "key2": "2EpGjhCRgSj6t4eiXLLXbxwE6zQvkKKMUbscuc3fHAxGcg5622YeadGf1h7LtV1tyAXTEAcxRKTQvcGpHLHvq5Ep",
  "key3": "3TPfHvwUXaLcG3q3PPxWEGz86PiKacqjMCQqyoduEGkxrCWHGaX2Kj8aXnTfwCjLtnxZ987T1QWYnMTRaVkBjT8c",
  "key4": "5f9Pu8eFm489Kvbauf635A8rbaKWWxgRLtnJ67Fj4oKfF7c6dkRfMXvi1kmehw4m4wmLLcX6nMKxPEoyMcLL9jVV",
  "key5": "3itNbXuDexjShQWDoUTatXc7oUsbPPyxxCN6bU8bN75LnLAWKiuD2emgWdX8fJiTSDUV2P4d47WGiw2CYXALX4bH",
  "key6": "2oqCa6ikuSs3CFNC2UmPMeXyA2UmuJ6Rs6xtBsRAAc8X7WUGeKEiJ9pMy1z3E2dWL7LFcbBdav76ofSA8vMooDNd",
  "key7": "9pniBrubjCxaJnWBGN8tCsPd4VvvMca8cqtPF638snSihXmnFL4FQd7X4kFxv8pWyYQuN4zWz6rbxVLj19m5zfS",
  "key8": "5mJrFdP5mc4zzjG1XhQjtUqzuF3kfwLukyJiqshGp2HWCo8i1ppVQZPkSp4m8fkJinDAvCYxmcxTvqkYV3tuLFsK",
  "key9": "2sKWZMv8KHhZa6DeS5L3ae6FN34vQxkKkyjVxK1Uzeks1Vy3uSCCzzB28PusGLjxaSU8ZWApfXY5USFvzx5nvM7k",
  "key10": "37TFVCyFVGYXRpHodtfNPiQdGf364GKTm6Lqf3kNmyeq3PhXpLpywaKQc6erNuajqFURRoR4B1izcz4X2E8uivYW",
  "key11": "4px262fqSJsZcLEdUtzuAR6zXSFTttDvYNAXWL5SPJ2AxUHcwfjec4m5LFWcEAq78598LPp8irzcwCy7bkh6jHp1",
  "key12": "gijXssCevZZffXATGcnqB8dvBWPXxaqhvWeaApjoka8Vumc3oGFRoRgcZMGfBUeqBYwoKZK2ydk1NiqjmVXxbad",
  "key13": "4D2xH4zfNqCFosuDkrkzRffrSpfu66L3X1GRuadnH5ZM9Zjz52hzmNCqmFwmV5fuVrLD8vYnJsALngdWAhHTuffN",
  "key14": "62XTLVYkYgENxjaQW8sHKLirwqjNRyeoCSqxpVcyjRFrjcZQ2CaBZmYZkNqZAkvTXPuCaQQWvaT2bBHc4sbQLHah",
  "key15": "vroW8PjBSxnAFsTXYpLF5jXhctGYMQ6seoYnCrd91P2ijLt3MREHixxgp4xvhb7dxD1rHxYTkvVV7VbA1n9A86g",
  "key16": "4A97zRBfbYfmfeE5watXZ2Ud7aRsfbnyi22BkXSXpwkpMWixZF3N5pAwhvvSxNcoPd8ft3ZLvc6xaJfnQed5FnhV",
  "key17": "4SJA6aEJ9aqXBmCNwUPfcBsRmq2EPL5CzZMmDTEAGCAz2mEr6Bmg9T5PVz2AKR5NGh1BoxKH5PFrpF5y9aHWBhGN",
  "key18": "4i5iTJwPpu367JXnvm84wACoaatQwgfuRG6xhxnSVXMwYDaueVnrNgrxKgAgXoWfQwKyAG96KpN2zPERz1kLxyog",
  "key19": "289DvBKDf6rXsWDdirgzrBmuiw4y5p7UBkWTRihf4enCQLsN29YJXQag2vUpu34aLTapiGYuXjsBAD4k7PVLtFvy",
  "key20": "66pEvHVfQSekRFKLymoMh25hCSaKrWx47dchvf5hhZKAQNe54wC6pCbW1DTtTKXgg6UfadWYP3uGgbQQzmQjo91X",
  "key21": "4WJxfAwQC2VmvgRHY59pzZQsoEvY395oJepNXVxoKb5socipB1UKKFUfBTeJnq4gn26o4Kwnckbf27a7zWabfBpk",
  "key22": "4p7pYppZkPAqfV3RbhdoHCSYWsSaDA8iuN1NzEtjKGKke3gkfZVXWt9i5XX3QxvumKxyUiVYJvxjR9U5k7YUW58T",
  "key23": "2MANPJnUn5m1o18wcxprZXNKoDWXLpQLzkdf6ZvRFLZ4LeFXbqUBBNF2pFSudzRxUKakkeYDNU3vpPNcV1m1SFtf",
  "key24": "gRp91bZvTK8x3x3Q6uFRDhooof3CrxrPytea1hYTnX8PSpk1MhghXacnF37ZfCrcBvLPz2t6QCwDP7XigyBoEyu",
  "key25": "FXkrKEhB2fRgq8zPzcsvV9X3LGZnVBHazoQC9Weyr15pBMmAimZdXv9WDw6wCXPWJmeULGUGj6qx68nGa4wdXxP",
  "key26": "4YxBK3rS1YW7XuTwBBThk297czNNn81PwhdMm13odSPsvcFup6aqt8T2Axxyo772KiN3pW1JVLNxpNWTuP7nhqkw",
  "key27": "336q4ZuR8iWSBM6MJTgZJUmB3Nm1UsT6dkaaaP6Ruv4Boq27wte72HJswrnCvWKujL69aTwDUmJmE84NfzMx9rz2",
  "key28": "4XuptNbDEPgaKZmPpkNANtbfmQo4BXyQhwmvyDdTP1b2x7CgBMPy2k3j5Qvb3wch46Xucm9i4Hr2jnLkaK4YvAEG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
