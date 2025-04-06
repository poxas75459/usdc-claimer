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
    "5XgrSSizTF3daYn3UuAUn21jbiTaHfxeqeqmqGLM1DNsiKKMnCL7iYxCJQUGxn1TjL6qeNeRaoWmHA9tn3xaF9SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLguhsA3JGqjyWAmqHkYGPPvFp8sG5m3ng6xpmwdGPgczFTCq8zjXf8Dutv7vbXXu1UUdYXZspcHNmnxziKLeEy",
  "key1": "5xVZtcwCseD2kzaLJaNyLkf1Jz54JS8MmCtg3hPBjKNVvpj5P7nhiYMRxG9BsuaYaYqoBS7Ytf6xtQobG1tCgY9K",
  "key2": "3ViXyU7XazNpMZj411vwaRBXR54sDcv1FjhE4BYJDgp4CAc6n8efLcUEkj1UrDiDU7PrFLtRT8Afvk6Z9nXGKQMn",
  "key3": "4Tya9dfRXdqBXoWe9H1bjDaWs2MsaRA4Y8xxkAJA2Khzhd5fh5oXBbYRmUEwtZKYtPEJoTW5p66euv5MjHaoA8UL",
  "key4": "2CnLWKDNpLZnf8xi6V1o8Dq6n69MdPrJcwUUmV9GaCxe8oPpQNoLYuw1dcWyJeiZaFz2jaWnqAyeyKVHTMFLmM5U",
  "key5": "47SZEVo1whYrxSLRkS3LBsuh13uXvzqA1CvEFxKkPD9BGku8kFZ3MwpzHJhA7nTZs8dqsrB53GhXf7RVkFgDpKsE",
  "key6": "3pe261mtBvicsooDaZgddPsRxVh345E6pHRXBpHNFbZCPX7EgK3EBc2p89paNp4WCG7hM4dLEgr6mtGnL4irVzzJ",
  "key7": "5mq5XdHdy1ghh1qxrjmxTMpzV6igbZrxBYdFxjS8XAWhmJUbXWZqw49XZLSrRytf4q9UjhgrYnKzJ5QKFh7HNJjt",
  "key8": "5wP9b2LUPHTNTvzDeydqYT8xYFkKndybZpapf4qtBmvLKNMc775LWfcNk6o6JSKHrTrKgMLKxygf7yW9Moy6yVzf",
  "key9": "5U5Jw55iUtikc5YM56HYFfJjCwuFyFDqbMVhQjXzfc38fKa6fVFKRRVDgEsK1V6FbHY5baf9QZts8wgzPZmAqGZZ",
  "key10": "46n6xGa4dagrRm3wnTk3iwbXY8LMkKNFcFMCBRgUq3Gh7BpMCsU3x1Y4JwCWfjF3uQUxCKuFLpKMp8CKcJLKrxVX",
  "key11": "5RD91saTUsLD8pSW6f5AemCZEmUrVKy6zcDGf7qvRhTr1Y9LovdiDTkJbmjDKCngAZLZZCg6CKycaFP4vvwLoPY7",
  "key12": "52Hdn1DatA1mzg2rHEPNHgS4nLYU8XexXJSLMh3ZLFKChobyTNH1GjnG2edVdcnUZNhEaXXixE5scsUz4oQEWZi4",
  "key13": "3c5eicmy9fLyLHx1VCTFirAUWJy74RvF1ZpahyZQUdH6sFNjvJN44qNXYYHrCG3TcZF9h65iqc3gTDN89UnCSEM2",
  "key14": "4PYEquUmN1jXKCpLpbS5nYHUDrLKsjPLgiXPjqrKnVaF1YrGRwGMwcChLMDtEsWZ4P9ih9dKPTnhtMTY5Vrs4v28",
  "key15": "4fPbwELEAoAoUrACjAiQwhdyBzW52jDSJhVwcLBXgf7TW53JsZY3eBoyFWVepNK9pVaoYpugnHsa9XBgP3hUvZYN",
  "key16": "2NUWV31VNwn8ZRaUfYDu4Gx4JpBf7fASwViT4MC3safSKSusamZCDCkiSMpC4h3DNxhpauGt2feJH4V7cRNAEZXh",
  "key17": "4rzS2r2WUz8bFk8AS34mBYqUtRcttUhSqdCoM44KAA5tGSE81V9Kegz8SRusmM2ZL6BsVARrTUkGvti5Vo1ZdBiB",
  "key18": "4gXth1iU27NWDKk4jPuyb2MYRvYc6w2mCGAcxAU3Eq2aYRrheRDcLF61RJiAgUpLnqfbkooVsFJedyNu9oUo9U8z",
  "key19": "2FAHh6A5PFjYXNGt7gBCE9xPu6BDhU3SsLZUSHWAZ8L95zeaNvVXrSExd3XcxA5Jruh7VDqFX34SoK7p9vKfbgzq",
  "key20": "51kCTP5bW8o8tk5acNMFMTX5TpN82fbtBiNSvshMtZ85DhBphV5pRc78NV6iQwx8xFNcm99KE1ijyjobSTHa2U9x",
  "key21": "3sQr4bwnxbBrVuBbWUnw74caAsB6BPV4kzY36SUEWpywh1G1NbgFUwf5uGAeZ4NJ7TQ4hL1gP662TtwJtb8mQdim",
  "key22": "5nNP7xhD4vcjsqqVE8LR9XDMHdR7z1uYRKwhWY32W77HdCEig4u4oB4CHBdTttfSvWyLnhcnTB9DjyS9cbmSVez9",
  "key23": "4UVnDHPPQYYxCrMq7EtHo9QYxePRsy96PgdhWhkiLT9AZKijeku5YQi77hZr9Vq8VtYHs55ttNLoj27wdqE64w9y",
  "key24": "3tkWREDJPNRaufzZy6o7xmPmNBDYWBfWG9tG88pdthfBB5oyaWM3DXEcVdSevCm7BcSWbRYDayVVrYSCejySvsbP",
  "key25": "3C5dN1ZwWBBsF6RmV6YXCCv9atEBpPVr1bwAApy6JPBGmqoG5Qe6CKmRT2Y1ojWuwN6gH5x1GhecEhra9CXuSTES",
  "key26": "5rHrP9dk9YpMtXvHQUY6vbsgVSTVLDwSWWMnFnJNBAqqb6ijVvGuxg1JCyMSuX3nHWTZ91g3DAZ15tQFqh2zgNeH",
  "key27": "3GY1kQqLhP3xWJuaAkNWAmQ44TiT6vu3c9YJS3swo6zro2kFNLQTRp4s8QCBuqAdC79zp5ikiMKBB7iZ5dUzwNn4"
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
