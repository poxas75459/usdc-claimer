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
    "YQbo5p2BrmVhS71MwSzuDBFw7LFJ27kwk4KR89LNeDkccDhsDKRtzymuKfnoak3iFbvUbPuy5c8bVoD1KQXQHMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Zv72awhzmg28Mtwf758hbW2SCsW7Eb5MR26pfwM8H2MM1ESCzh8UQXSxP9szBMa6EBwgvyVUQHfPZQdugkcmsc",
  "key1": "5ZbJF7sLJWmivYSZ1v1X6fY3nGYZRsywtvLhsA42WwJUrN4Bnjb3MGGmTdfxmEA3344pUShdBycy4wcbs64dDHxT",
  "key2": "5w87K6cKbAYNxe7E4SWzkyX1Vhs9WLdvPdPhjWkNqSmeQ1UJC8DTqje76exaoAXdWG15p4uMMs3wGpxkBfoiKz1R",
  "key3": "2hfF6ioVRtM7QvTUmyDjSrxv1DudQ3x2sJtpS452xoJ53jfvqrLJBQKmac3YZzEe6MUc6z6kxkQrMTWn7Fhnimo9",
  "key4": "4yCLAU1WhcHxa2Ct9DCcNvn2Fii684Ww77omyZ7WvwN2G8Eqdnx31rkxth8NiDUYjdWZYYWE7D8PLy2WFaUo46HS",
  "key5": "64PJxn2yHsgQpyBcCPRYLdU28NRRQe7QPYqVMd48T2CMgPaJGYYwuAggPu1x26sihFBwb9s1W63k4HeJtGoMYS39",
  "key6": "4AaryLHVGfnbQ4qG6EMCv7eYfHMtuhzc1GzqNdzW1f4gSjGLoioSXxH1FciDrnRiFizsXnMTo6Wy4FdFbXVkrEZF",
  "key7": "38eTSYNMUg4tYjt1rKf4FnpHcMfhbVo8BqpMHg2R6QgHVdcuDPMWsuX5zpaXm2DVGz4PunoRq6GiBqxHXR4KephA",
  "key8": "msMVG1A1nt1cPm9FjctPUA4EycHUUygJqW5smUQEvvWRqPEG2Zg3KTSiB5J22T2zEt7hBVxWQmM1sA58hz1m1EE",
  "key9": "234W9V6ELebk3DMGNQqQ33xbMrkbKCRneKsAAmbixoXEsN8p1q3hQtwmdwy2TF1r1ApKUGihLQAvFJLr8wZAQ7Zp",
  "key10": "gV2pD7srvQM2HnNdphJDir2cJmGR72WknvkWqNdTDxeFGL2wdZrnDu3xW8tmzfuFbmFteYKJyUUFJqnsrtJMaG7",
  "key11": "3EtvwXppEQjUSdbrfqrLi2UGur3XjVSGuprVvuZc16TjcHZe52iA3urcY5Vam2QJPBR9KvkFSWQ86EMs4xHFyuG1",
  "key12": "KKLo2PqAvw59eLxJcCYZS4cDMErrQni6mC2eo4SdTdvNPzECX2aGCCWZv9D5fwv4S7H6kyd4b8rg5VoU4wC36Dp",
  "key13": "2mpxB79dzHhc47GNyfRaMGgb3pTijCJNi9TxGKnW2b54jjPeLqNbc7ugXUYrUCb6sYghU7ZjJ2R2FU3C4ajhv2gL",
  "key14": "4VBLm5cfzzyBFf2TZQRtmTqktq39VrJUGRUHXTJM2UyEXzGGki54azLw2x8QqpRv2KHdxoKKgzkLRvwoUDS3vD8c",
  "key15": "3q3dMBQSWotFZw1bkUJCcT4ePG1wkattZ1T62zjJqmcqd2kBpv61kuiF1SMkYyhvhx9A19N6MVpJyJhzgMgj1efC",
  "key16": "2yFTHtD97BRHorYxyDducqDCqeabHLujFvDFJjq4YshbWbVjUMVrVGjFod8s6zKqCeEn2n5u3U9scWDnZG71v4Ck",
  "key17": "59UrvzCijsmBJ6A9nXwZb4Ub7aTDvAgmyzcdfdMeW1LgurUCz1rA3unWNfQnGCz4G7F4VtiMkWXgK6yJVioQUSNc",
  "key18": "F7W4HoANkots5852b18b3DZNpbHvTvebFmbfigZYZEN3jJVyhWAUXzkJUeXkgbTMGgsfJotgYE1Q69eZQbYJ9Wz",
  "key19": "2UNL9WVg9ftXdoHiWrzFpmB5GbHA8ZJVR6Ve3nfzMUJUf6NXvCA3f4piE6R6kZsUnZXtSWrMFpeyVLcBcHu1ZSU3",
  "key20": "e3eDK4Fv5QHSM7csCcqPbvZJMMDmSs8THpTTDcuAS43adhk7EAHbrjAXUzRP36nnFbpDeeEipwEdpz3UQ17ZV5Q",
  "key21": "3zw1YzYCQrgb5RmtWmaj7DwZXHcxCWgVdqAcquM7oiPxRDb8dEp8Ye9C93eFVFVvGLKGuKZDw4jqNQejWaRLY5sS",
  "key22": "4FRq7dnnQsspYMhQGSbeFNoD9hYxBfTyMo9ADw4TBB9kbHxEbUr1BcofrH639MXrV64oehjfAcSdyi5Dd8xAmkB9",
  "key23": "4NkzScMEUX8FaR1LhN3MDuDgi9okzR8AH2YV6xacPAwtmdijJcAwpSPi4s2d9GUg4NJq8qMEGHBFvozAFppfhMPK",
  "key24": "7fNm1cVRjvmCmLeadqBFRwEEtvr3AsaMtvaH85usmVu7RPtYBwnk7DbYJrnj1441Hroi4CVPfra9nWcM27d9HBR"
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
