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
    "4hThJzDUKrfgMg7pi6BoQWrG1m8FoRgbogwRSqgAzrNWKtn7i7eKBZYos6iUQ4GHK4JsyYddPyQcS4n2K4Bz7XQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RRdqKLGZkY87LVMo8bMks2cdfST3Xvi1MY5n3UtKwK7BNZgD7FbGuD8cNi8oF9hqmv8Gx6USSHaL3S45ZcZ44c",
  "key1": "h277BhUXmFoGM885tSirjCPejZdi3XfafYEDziBXBvnqcUmFAXKSaPtH9rDGjseaoev9n7ZUkNudygFV1HqATg6",
  "key2": "XFaCWKvceLSUwKWCUyRgvnB2ZLWRKx51ooyBXUSTTKuYQobZ95bwUBx6g2F64ZgW7mE6kh8WJ6fzrL2F8N1ddRv",
  "key3": "4GkWsJyRfYN7Jr2uuy6uRkzcc3H3RVcGbkjeG1LeVhVCCQqSahVL8vtkEyDw8LvLwy8DGQCFbBxkMexHRsKhg2fS",
  "key4": "5gUNNnE4XPvzwg1bTnEJypy3FnRzk6GK5JUeJU8AVA1kk31PCSf9hcznYhZeb4A6sNdnh1m5GE4ZmsFGx3P3fa8K",
  "key5": "3xQh3NPoAxXD6kkpdB21aW8csLvU3Wo6uTHMTHqU6EWQZmBhTGGk1w5sGzi3WdsJdJNeKNUGXADoTejc8YMsj4uV",
  "key6": "2ybq5ptiZYgpVE7uC8Ti9f6KH7kBgsPcxC8WGarhRf8c5sgPNPJpPLnKmk4Pz81GiLuqXBvarJzE9iHkrS3zgyi",
  "key7": "45YpBF17hJD9jBZfuCyQCicjemrk2zBawdgH6osdQ59bzTriZVKZJ9t4fMQF9hJ2YnMpn8ynXSHqxb3zpKe8HMsF",
  "key8": "4XLXkToSHbJRNCXewjjAs2S4eVEfN7G2wibpK6Grcp3iqzSgTKcR8xNqYZ5wqq63NVT45SuXiK6hz5t4YP8w5Jia",
  "key9": "2md37bojSV8yFbXEJRy7EC4eg7eE8f8HcnSq28KE9s4ARLpwxa7AbkbydXiQLBhuUxJhAaQR4B4vR5Rb7NFBKyH",
  "key10": "2dLhDSnj3ydhp84B4FWB1FkQMaa28d5RkUF7Ys8Vu9XRM6mWkKQgwCiBjzvrd2QUNLEbEkZdsKtHnLdseQdSBaT8",
  "key11": "3Rh6UtjUVzWhPVuND1MftRzFGiRhH3prLW3CBD3C6hHpzEejpoiPmmeS32uZkTJaj2i6ekxFiWYYDNKpKvLSoyZj",
  "key12": "33dSGT4Bmg1hB6XHeP3KtPoJbJoxnUkknu8CM1ypUA1pHt8C5131BLxBHyWY7W2kiMjwgf7RuRqEZu2mUQsXgdbd",
  "key13": "4V7HuUGQHeymvpWwSDEa8tZzDqGYvRUdvou2CEK4Uc6LwrUvrgJCHU937rJxGmqP27N8Pe23XTnkkJ37jBPhpST6",
  "key14": "3KqM5J2AkoBkuRtbT5YL5yNQNAaq1niyK5R6kf1mAjpEsSxP3soS7b4784MWoSj7ijqFREwj3gjGzjipyVxTRRJp",
  "key15": "5oqJ3PAr5zreN6YHawJRBzmrPKEaucwT5cjvcXZcQyqK3ZeSAwZvkUyHznaWp5jFw9PHqY8dn4XU2CS8s2kBLWCU",
  "key16": "NYdJpMbD6fNZfKzY4VGq9Vb89APahVdnomGdd8ZDPE9mnq7kSn7FzvbHLmTpbjsBXqJi2mULhjNqG82XpyFMvU3",
  "key17": "2AfAHHNmqpRdypmsJfg7KdnSYiVKfcHP1mnVmnaRY3q3XKVm9xR97LEtZghbZxMbUTMCxQffWuedQCKKXRYnXZf2",
  "key18": "5tzPFJXZaFimswZhGSN1Tqq7J7VcjceJCzQTvrfQ6zMbgQxsriHWEmopLbiSfCpPs2799rUTXJdd8RhLFNCpBdaR",
  "key19": "5jmd1B2n6bmrnRPByu93QT53iWFDGjc6XpreUp2gw82cDurEsDgE5UaZW6sUU28pbmiadxdxJUj6oj7xHrRM2aMY",
  "key20": "4PNqb59Qj3p5S8M3kkrh2bDR6aeTw2VotHiQRF6AcxADTMn3nrS4J5PBMe7JVmdFk8d77N7bvusYh61qVgPbvUQ4",
  "key21": "3NKNA4V18CurcZSsi2JXwxG2aPzGy2eQ7bmFkQL8n1ruwyQBsH5YCE8eThp2nsZ61r5g3rxPbB35YPaJKsMmBao9",
  "key22": "2VtJpAnFSX1W5re8VqFvTDRX4tfofg5wfkRFgCrzSJZGc1HDTd8ArBtSFTVjCFn15osZ2ieY5s7JCUjJ9UZqQKhG",
  "key23": "yej1AQXvaaJAbybU56dYAVm6HD5p8j2uGC3HavTqNQ8ZFmbEurWZANP2THxXmJLoVCQhER7pDMrXT8Ur2nCdhmV",
  "key24": "4B7MWUyWmqkkUzStHqkBFtxG43zszTnpMTxDaEpSMSL127dL8cSbHeZXWgU3y2d7d3UcUhQeMqbTfwjuQ2qq4WHT",
  "key25": "4DiV42WEHr8SryZhnKnDTdC8EXNQrZrJMMDoKBX1XBC2KYJ3NVRVMSyy7vJobAMiE6DGPAUC8dAhxeFEH1dLeaP5",
  "key26": "4LoovKRLzpzWeKkrE2nFebwndFPTecthE5vHnD6VKrb4pThyX8PEby9waUtakkGg4GFoC4AP5Fo6iui7MMJkB4tN",
  "key27": "3qtcxhUHqsAwQrQL3rbJxUcmt9c6ps2yzGbiRgFNCYLdAsGS4hUWmrT5Dvh6MRsSSvdqbyLLf4kr7PXUY8DbTrTM",
  "key28": "2JxQnE4RDH88ZU561ZmkAeVUH88HMXeeFZ9AcxR42vem2QhpGMNWDS7cKUNvLViAExdJDs5wZ3B8WtpqpNrRiXr5",
  "key29": "48Xqw7pWbfjRseY4fqa6R38asq7v4YVTRaBSXa8s49qxyDmfZsXpZjjq4f2evxG4KcyXnaDGVfCrYh6EHdJ9SrPL",
  "key30": "58WujCwapR3Xi1PXrPGFdqLLY4589hHcxH3msJK7dUYVDfFdGthMFgf4byduzVerCJfv7yKb3ch4TzMVbjMiiWx3"
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
