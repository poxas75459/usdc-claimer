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
    "4xANkBB5ey5NnPCzWzabLKc7yS7RBiw8JeqrbqUP2eQXT1ieL3ZjMtEjMwn7Ja6znbh7NJcQqUgpXqiSbSVDb9qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zW2xHTeqnykJc3ZKtPZQ2gHws4m5C2XLsTZvMDqMNqF82eD6PRDxhamNtaLear9s1dnHf5JPN7HmKCNNVTjK5N7",
  "key1": "2f8GH8cHmucHDBNAmJ244ae4A6Q4u6RjtqiRZah7mT6L1gXPPfUkGYJxaE8nGcMANpYiscgjYKbSDXG23nTRrPCC",
  "key2": "5D5ZXFasiUhdkJyykFhNimcrpTB7wPQJ7rTh1SEdkyrNjMsywk51fpvJYto9bhBfu6FeAM1cNzYxmHoZn5jkrNgP",
  "key3": "4e6SdZHEwjgSZnugJdMfekrJU4N72gr2DjJXkKfyPQ8wu1gVM9sePmLAEdcG77Er7wtWwCqGcZpE33Q7Lcpz3iwg",
  "key4": "LQmgctRH4Jhepq9iveg6f98cvW2CGnbK7Yf1oZe131LyP9Ujd24u9RHBC7nFqY2dk3vSPaCTronvrr8fjwXjSCh",
  "key5": "61Grzk5H7aM3Fk3XH3gVENcqchdqnpuGAhuoEWPvY3gBfyTssUG5GXiAwBeTLuk2WiYhVN2wEhTxvtx9CbK7JH64",
  "key6": "3NHL3SCLeyGKW4e2d6k9Bgagrs2FZfEAM7p4Pppg6QmyeeRVZAuCaBYCfQ661EQXCfjMSkhRvZwA3eMA2oXypGUM",
  "key7": "Xrg3vmtD2TyMopY2nji2r9poDpskPNEqWNBfGFMuUUwLEgz4bPzjSjxqoYKFtwMqcdSFqFgXAJBiSnqrGmHaQSL",
  "key8": "5wBwcBPy4GnSiB8RzFNitC3su9peJoovRWhPsTyx2oCGigrHkhrx44hzPqV9Ao9UcbBZDC6M2KBANiVVVgbXpTYY",
  "key9": "ULMPF9LBmc6aihED69dkSzJHJ8v9k9RBPgPckbddXcjPEGXQTT98j9A5gCN7xNHSEWupeSjWcEUtDUcBREtPsnJ",
  "key10": "54RTnTUv87TcHdmQKh9XcQqjknB4NaLd4kHmHoL3u3MpWikPfLFZrT8Qph5nne1MZ1TfksE9sDaDBgAsrvRsrY8X",
  "key11": "3QzXRkWHSAvJULxkYfcwyZRSvBZQdeK6ZcEKMDq2MnHhfHWvAynQ7viQSJUYe5g5fQgucjY1pwS55hMzDPLd3Anm",
  "key12": "GqJCaPCfbCcYZMQgTmxpd9eMv9pdvPzrs6wS9VuBdq43T8zh3o1XUBGfsP7ZuTL83xQG8bjZkg3Uat6qiAL2XkM",
  "key13": "4dpahRnoJLz5s4RYSKJzmFqTha9FXuuofna2tqZLVfhTwFL7rDKJsjravXG6dvjGLeDzCgbiCq27f82bmymiGPJv",
  "key14": "7kW3bzadxGNxMNQa2TPP1tdFDvG6FUGHDkSn5gZcpkSsdj7EQ6kNa4UkUBV4hRTe36xjzYKxg7QbbbgfHy7ufbR",
  "key15": "rmZhjasj6QnUUoxnEPKmALjvJAm1aPG2tfUTvZ4yDnYqgBD3Zc4WVRgRkhHPbcBFtgtjunm8ne641pWSyV2ftVW",
  "key16": "4GKZiqTwfoFEcTgirdFnkYN968XA4aRWb5spcrFSM4nLmPxtDAJ8LJ1PByPYzP449un3wivz3qbmyrtDGceANMJW",
  "key17": "2E3ZLJMYKDzxoQqqiuZV3GNxVTp1pPs1rE2vwZqH1vFni5qLbHyYFfByGHbK8BvQeofii9mYzgy7pfLx5ipEuGJE",
  "key18": "5DB14huohi9aYZQhi8QLvbhRer9mBvhgMdiXEZLGNWKz9AP2ns2AWjHZoYt4J9Uj6CD5ujkp6ARJjzyNKztirW9L",
  "key19": "3R1rhh6K7J4UwYxaxvCatDW7izf46KdNB6DMx2SD3m5xkCB1gR12n7VaZ53rjrhsr2rgTH4mbh5ynvnnZuc3mYyV",
  "key20": "4MBgfsDUHbv4EYo1iBVzMzhMJYhdT8o4dfyHceX6wLYVtFjnHzy8C9snFcVhfevKLPkdiwDCX8FSoHwm2xoRFuYa",
  "key21": "5K9WC3cfQ8o4DU2wfwmivVu55y4UQfn566tge6YegHdNDRipQYDAojNzuzdCvSGAQvQkktQff1vWqr24wL62U4MV",
  "key22": "4iGA9cySBXD8fyyB9CEJikB7qxZHhLbg6R2MHmW4Ni6NdFfXa1vVVVhb2k9eN3NSinjwWAHM5cK57hk5Y6PAfF2n",
  "key23": "3JXfYV1EQuCDT58XVGT8k52gMvCsaFZCVK2mCt3ke8N4hipMgMR2hqar3AHp8XKGh4JM1fVJe4hEHWn8gs1EX1tt",
  "key24": "4KRy2qJyMTrXZBLd3bkoDWkt8hsA5iJuSfBDWrGPuPCFVmoQeSpJJh6dozuXqccuibaUFK1y7x11dhaUuxJihGP2"
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
