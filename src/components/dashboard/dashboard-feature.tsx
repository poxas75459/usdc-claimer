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
    "4QgXhKk3yAkGDV86DUVXGpGMEQTyxTRmbigww78X9rwugu3HAXZvgGovRbHyNMifw85iogMtrmhVg311uSvtyAnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ipiUfv4bXW2p2WEWjBGsvc4HJcMvPiXreZNSqhT9ubkGnL3wEt6i6o2cJrnTqBWLhnaAn4SpvfoTsxvEhacFjFT",
  "key1": "5YNbn26E3EgcvDeBCQFSUKNNWs8SGghkNvDccxVdN7FXb3aqtLCz2gWWrbLaqXYpD8ebHq3QK6VfTRP31ULjkwXN",
  "key2": "5tNVt2wUKszS4x2T9VFbkCfivAnZYqt9RtztcGBvvV8R3TcaSic17ZNr3bH3MJ8ufMA7JDVPZ4vRKKAZdrQuLW7g",
  "key3": "2hZehH8aZXQU8jjWyFbvpBpLjTPYUTLV58dFgw231HteQYv8HeLy8EkDMrcNHVPREVfgLLNBtgDoYFvMASFfRdx2",
  "key4": "2mxeobHozDavNeJsbYLvXXCJZPKzUryQDuwu1aEbWWwi2dFLGHFVrdndTFjadSq5S5iPULmwU1xtpdscLU4JJR77",
  "key5": "2tZzRivdU4T2X4gc6LfznTkLPPUhMfZFr64zRhZVVms9JBkgt1iSLayX8ddo4KSurxQPHmW14jKCJ11WVhmLWVdR",
  "key6": "4qQfHt2xdHBy6DGorAtZU31r5JxRJZJvMN7GfXAxEjBAcFgZN9rRBQEBujLvCoQ3JWEc5V3VrmWsMN37TtotUyAG",
  "key7": "3Dj5pfnVgw6Pcn1H8oW4FbnGWxWudh6ZAWcpYj1EB3agnzaJCsjR1AoE77zQCDfzPM3x4nAys9zgvqQh8j5bcSH9",
  "key8": "2tdydXKSnmnCtG3MxcD4YfUKMB17wuQrpsmTF9afXPuhaa3Wse46BERB5BzwgVVsXtEgyJnSgT2WDp5Gt6FHNNqS",
  "key9": "5Smgd7QZAYEQEzpHckSvz3Yn9yqh1eZrNcXv4Mgj9h7YUKptcYFRxgFrekeYMxpK57HmtYsgxUqzLuhyscjZ4RyN",
  "key10": "4CyT6Qsnpht3uM2bGU2CfuciZf5pF6KCPn4RWHFajvHxyJNquYiboqehg5XhacscFM1sJ5yVohAZVm9kUXVE8way",
  "key11": "4WhPafoHt8iWrNjPi3c8aeBQnSmmrK1a5jTvVeJZhC7f4RfmhCfottYrQK21M2uCqTcP8HjiYwo2NUfob6MBkPa5",
  "key12": "47AmBEf7kiiwwgTHYBCoot5vWmzDg7ivHTn9mitXzhXxCRSAtCJdYQmfBxopYYUcwnSCMFoBw9Fo2NgHVnfQs8sy",
  "key13": "3YephGFTdj3Ani8XuBietNPnLeVN8wVXUTmqb48SUrbDyBj8unPSTNQ9ocuALotvD1ha6kBjUy6zjiGAtTRUH8Xy",
  "key14": "scyjqz1jgszoYVzwqqVfEe2hnBER5J2Ujd6ZkDUqMCiZN5G4iprPRLmgvLgLWx5gbEGiB4mWgw3XS48w2NX64FB",
  "key15": "5vJtb7SpyxQcCDntkHGSxXT7MUWSdNBLGh5haykBz77z6XdMWHJpsc74iZRNnJuweF1YAFiWLR6X7AJvfkaD35VA",
  "key16": "4pG2YZsVXLAMScGbbzrxc1ku1i9EEa7Cr3v5jHSNNbNeVogazPi19UCHwbrqTezL2Gt2fJiW4SzWhR6x1zV1BxaZ",
  "key17": "66BQNwZM7e4V1z1u5suL2xp5CGqiDqBMYFcgUf1eY38XRbNnY1L1t28onYEuLuHcmhfpT2vomUUxL46jKrXCwvG3",
  "key18": "4BuioFKoGEBXUvwWdFLytmhTVAF9BbvU9yAo5VrBJ637z1gx3V6AfuFwhTfYyHWDHcHpEYWeGcAi1TcQUsy8GR5b",
  "key19": "3fLdTXDJXzCtxde79kL2h1uf7Xa99MV8M6k9QCJDyYW3tUGqtNc3S1Zt5RhNMGyPRWWHHewpsebmaDUSbjzTSZGC",
  "key20": "4uZHZmbqefbNftxnkL2xrWStYHWF4JvrZ8CsVNuoBi2nGzhRUtdHvj3owztJBsRon1cTwqQYsGAbkDBkMVXY87en",
  "key21": "4xihEHigySWkVT5qoXcR9EN62JFF9wvmrJAiirCb2H9JVfnyMkMfDaE5XMT36AnKsLn3PHvKsBDXXfwuFgJJhZ18",
  "key22": "4UEMsBiGfG9rowMTxBVp3NR47epmVqsieToHraySvoBPKozCmyAB1wQ8mATLEJVybEcxbMwywXeUBBoBSSL14AkZ",
  "key23": "tVLzX9VdzjR2Cyf7edG3BV3SoyH1B3cUAtYu38EcK7JRLf7YgxtWamKmLcYJsvFgfjrC9V91w6mvdizjATSCJKT",
  "key24": "4mgYvtGhjkAiUegirpMNzaRAWLLVnPJeWEF4cC1b4sHipaendcas46ytNkExEkZqJEvnSrmp3Un1B5m11EuXtqCn",
  "key25": "3Y4o9gReLR5Pfe9cwdjMuZuBNS3DLWoHU4Xbd2KQHfLYzWLuoMMHjieAjkFdMFQHUhPXt7BUtCaQZ5wmAaeaMKRr"
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
