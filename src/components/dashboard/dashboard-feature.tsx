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
    "2m4mHhwJMLgSbcEGHFbWXoqA1TaaEU3EYT6Vt7zTNb4S1iuvPhByPojvtjckoGAijY9Rv9pPRc5t75PjsAxEuide"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dJwBKmzzWerh3DCwXP2hoBc51Dpco2BcocRNkbM1aGExXXdG6PgQa3T7CduwuHf23PGz8ondimd1Vh5TnWS8rqe",
  "key1": "3Ap5jDsQDCJvRLXp9BePBfijiXsLG9CLGi7mgAvmYoppSnKqWn7pjrrDSYdAdcKKW4nYWUVjAfGuaT8iZjhYoKJG",
  "key2": "5YZ5YAAvakGL51Xys61kdYhEffN7WN9cNLWo3H9hiB5f8mbZNjHxYreHrGFvfB5PfYUmvVmqYgf3HzAD8J4X1mtN",
  "key3": "59MjGDj44qU12YmtEbk4T3fq2PSturJc2nrC3QeTkgG33nAAzUiJgSUWEuYRy5JsmXojEhDDqd1PvgQHRApq9CfP",
  "key4": "3TMcy8CEdA32ZLQqdfCLTKYWi5pw92Z6VUrKjUm9RqxD5aqJG3Jz67myepiELnLFMnHLJKzncZW1V5Q6nMDNaEwn",
  "key5": "59Xxmr6YLpu4mQ2LjjAN6SHF6bjHZggafeJveNpANuTvNRXZYEjMg5dkCuY3x1DNfDiH7xSADqQTR2t7dxJZx72t",
  "key6": "2mJkejsjzyjjCDhtQozJoW5zFoXHRxqzto7NUuPqs5BVRiH3a6CYBm7YXgmnYRHVtUA5sXL3iJaLvmzTmwSBqo1r",
  "key7": "5w7o1vMh6xyHXwhDewH9TDPiLqsPtZm2yUpZjKd5csLpk5nCxCiwysRgXLeZUVWoeDZQA8LiwmDD9J4gk8YW5jRS",
  "key8": "68UpKkCFNdyEJXdTiqwhgUvEGJhuftLe9UpN7e5Ch65nTbt4ojHMQPnj8ME8m1p6fYNUuzECdjbwsV51ZtXBiNf",
  "key9": "Eq7skkuRPA1LUzbVCiEbs3PJt2XFgeDrxmPmzcAKtyC1CqJP3dRacSEpGCKeHBcPw8j5d1UrjN6fwewQNkLkdnX",
  "key10": "672HAkP6jSKFo5ESRfqtk1Sp5ZKufhvv6cDgK88fx4AHM7eU4AkmXUUfdaWrTACBsRfhYR6bUwzKg53JWUaPrFMK",
  "key11": "2ETexWBnVf8ZQg69udegEM16q47ubyuQyDwggSLM9QFABa6EvgMysL3WgAwwaC8TX2YM3u2XBNfuJCcNTJzqvLkg",
  "key12": "62g2kS8DThFjjC5pdFG6qDmnPDfCSriTrLxe2sSnKT4nw5GYBDXGeyvHTxtKoFyg9SXvXS3euxH9CgqWVRKGTP3q",
  "key13": "3oUjvWbw7V1afkUYwE6DPRjgSFHsAjmeeK9PygMLQZLEUPMPpoduSSfW9Df7xmYVSf6jhNFy4UCHJ7yj6GqFWUhK",
  "key14": "318KTbhRe5kwfcvx2BVHSwdWxbgytbWZDs1jeyBEZkK5ypNpb7QRC16ZoRi9WiYKeBNhLCKP1xvuf9aeXSbSXYU9",
  "key15": "3FvuCih7xFo7XUauDJNihJqxjmCcxjEjpuApUtURNxGUoRs9xmwofjN4afHHXGLyEeTPYXMpgdWAAi3o3sgerKac",
  "key16": "5ci1ZGS2HDnebLTCRQU7EFd9XkUmmpTtUxZCQMcEn8HEtEqa3v1Yb67M2V5MAKLcAPZTDiQqTdVeq2SLWYhPvAQG",
  "key17": "4foC5M9EsT4zqEPvLrpqiwnyiRk5NjgJAWgkSPP3coBKD2vEq4EJpZZKSXPfzQkfdqAxTgKqhCmEBCUa1kVwUrss",
  "key18": "2fqXPCidCU9mFMNf8hH4RJEyL5v6vCdbvVyEcH21nMa4YoHPddKEdAf5kDKJhREbkdEzAokxMe7LGu7q2vSbtzts",
  "key19": "5Bf6Ge2N5WmaPX8YVkWB4rys1FvAwqQVRVLEFEi5ZBzQDfUpcFRYVq3fECCMg4cRfnb4FrAduR2idTFcYTaHNuwA",
  "key20": "246yFC555h1xAdRWBRcMmc8EXUoxyCAfjb4M7ioeZK9GwPEmmqp5CFDa49jP7mnHJRHuFBF9bWCRnbV1n5498woA",
  "key21": "4sEjencVWThHXMo6TcKCfyfGYqnfvF2dC2QamhFnC18uhnHMnVf15UTQEh94sirp7WbwZFw3Rhyjff5Wh9DZAc5b",
  "key22": "4ck6yozv2ZmAC7DPe7BRKPtzBf5ECVhA3TvKNH4kqf1BTCCe3DBTZHccToJH43YSsoETusBUwjnaDovNeLUp4tme",
  "key23": "5xfDrxuaToFSpig5pyQ3U22uBUfRmQtjoG2AaqtUuYJtSLDFgT8XRL1AejNCQeQnzwz5k259jetW8QvhGyphViZa",
  "key24": "2kCCgspq5bZQxoZhAotzbiDmRpoweVRcdsVj43AAabT5Jo25es9fMibk4FjMkS1HpunPmPmS2JuDRoP93HPpb9MF",
  "key25": "4iZGAhMTvWq9hS5tyM5RWUQU63CNyafsibozHjpyZj5egP7uz1gu3JVJGxEBY7Vt3UC5WbMazJtwp6RH3TNYaEaj",
  "key26": "5BvT3wLJx94RhQi6FQpCSNrHz7zRCCH8YA8oBbh99VFACVffetsipF1BuT8hjE1V7npBDtfo1AUxjVuMLfqVpTvw"
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
