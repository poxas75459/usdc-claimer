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
    "4w2NNgyJxWp6QdXjfvUWBRds67zLnv3xy7B3KofiQujwbKnDEj8jKoahtyc8ewFmWJEYFZR4CB5LLWwCTuwpY5ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FbJeimY56Xd64HAqHWrWtKtvYFjKhjXdCx7iH4sAsFFRwXLPmhQ1R6wHrXZzv4dkHzTTsPTm7MXm1C67EG6SRmC",
  "key1": "5gFRNuMfHYZsZFj2icWatLwc3qzD3JM17PRK8x8uhJ45CQP2zRsFntNkHE5LEQwC7L4qMhCBCukyjhyqo4G4u5sU",
  "key2": "GDRVJdPPfJp3XmW3chHnnuVn8hoNvEcjceW1Rog9yCvpbjBuzoj35HToh5RPNZf71ovaPSAz2cNRZrFJucX8ccT",
  "key3": "3eCZu2z83MS9DxKn416sFvZ3nwDbjnpHmk8KBMEyEumHzLRsSZBCCBQRJgpycBiE8H1ePWyVvFGtYTdtGPPTc19L",
  "key4": "3XkrX5BrGkLtteuytadGEP9KA3ZT8hSjBZTfB3ZhrHMk27A3Ukwu8sx7KWpnLEMxyURvRMNE6hta5FD7FcenLDMV",
  "key5": "53xVqhRMqZ1QaVsMbCvJkHqkDBtpHgs7QRg5PWpm85ua2qBFYEk3PYh4KRZFT3GR8ySfVzu56v7a9vVJNtr8P947",
  "key6": "2XcYUaCL5LmF5YL8qNNWqFxSQ8yy1fpY2yMe1xKsyD8S6kC7b2r2MFtDJNeFCWbp3YPvo9aEE9aD7BuR8j8NQM3q",
  "key7": "36GAaiV8a7imNcrRMVmu6QsA48864bH4dKK9oqwZPwUqxyE3GYRFnzgb5tRR3SC19GpCQ9evnqozHxoZdaQ5qiXx",
  "key8": "4NThyU5Gevz93kQUR9igLpCL2FYzAmFenHHwsKeJyVCVjNM2Bk9b3ChgAAhkHEB1sa5EX7PgLvFWvcUsvE1fqPJp",
  "key9": "45uLNZcvVy647YaJNkYMD11QaVkNrEDUdbaftnumQrRRFchKVq9qo17S9YrX6vJi84GzgNoED9GZDTnwLLqPRJ9H",
  "key10": "3ZV1bndHwrnMBM51FzS8hPikpY8WKaiGifw4GmwJtvJVzctZ1Zhzy4qjiNt6m7Ew2hGD7MaLzAxF8VHoH1rXoBt3",
  "key11": "3VW5DNP8m3S2mnWiFin1HoST6HCoa7scZbk5QMoTUekPKtmqxLeJgoav9J2hHCVjiajrBX3baM3Nb81GgrEc3SZT",
  "key12": "5ZtdoAUovEKFzAWW1S6yo34ZtmvCNetu5mzUCDLiQ3sCuHxdESkGwQK6uLKo7SW7Mb9Dzpbze7164X3tPGGg48du",
  "key13": "R6MRidzHqaictkfGGU8Z3UwByG4AyyJrEK29UT6rCiHxPfxThsyQsiHD7aZGE6Xj8JRhHP1Yt3s199EGijFfk2u",
  "key14": "4P9hzyhe3g3HcsjwsxCmmagcvkjQaYYr35XQeaBZsu5bEo75Xryjzi7X25TLALrPdnSDLNHr3KT9UJEK1in2gim7",
  "key15": "2fW9DwgG6sj6khZxUTQVRQTfac1EKMxvSpCsHNNVbKHsJeAjdGGodgxCvswmgCQ8ttdD4JYK9MYBkDo8Se4q6kL",
  "key16": "jLtkm7uAFpiX7iV3xHQuPXyfgPqdfJJL3fRr2n96qziDax2vUTjw1HPgCKwF2mtB7uBdtpmyfHMemxDcBpxCVyt",
  "key17": "3VVheTv8yjY6psEPYEBtcfFobgcFetniVEUvXWUn8SnQSqVuoPLVahzT5FgLZusMogSMTwSDTXVcUwpvkSVLKct3",
  "key18": "4po4k24ZEybjQxLdJqk5TFyENuiYPfakvtsyGvjUEJtPtGyUXGykSv4rXqBRW6jddC2ZAKsF5eRst9oZKQRbHDtq",
  "key19": "4otgdFsn4SKcXg7xwL2FBzyfSR7FLrs9TfVaBxT2RAMqkyNC8yLGh8nXW9yS9JcqzFrHSBgirSfuG7u35THx4uni",
  "key20": "DMUrDy8MVLsmG2Z4gV96ERmtw8eoCmWWkxSqVuJ4Vd2ToEbDDEE6HExp5G2ddtZBCQFd4A3M2RUrSgnGZaKSWw5",
  "key21": "5r81X2m2MzSEsU7ZiK2jsPKdmXUVmmMkPw6nGrkjWYR3WmVkgwZ4C1D7dvvDZqMzV8mMoTFMMQzUDqgTYXQmcVMa",
  "key22": "58u2zkxXib7n8XmmdU5MaHvYaHm5NFviKGk1yiu5NgSgFhUP7VRQLQrqFMtMvf7ZXbts4JqBgvK6G4RotqYPPcai",
  "key23": "2g7ztFfn4XNJpyYs9WN7JBAwjvWg54gnutucxNSUKD6Wmc7jPJsJBd63q4AXoDf3Sx9vL2evkKLG2zwgq23RGxsb",
  "key24": "3A1ZY2xGnnT8bJGCPm5ZZs46hDqQUxQGxv3gUM9CrwW9mkKoPYtPGDTWtm3UHFrhHFqoxvZiwikvDAgpd9UYNRkb",
  "key25": "4GdrGjaK3B3GY2bqHNhMSEPsXQttkNPCaWBCV4wjK5h3fzzbpADnSDaLRjmpTPYrjc7R7d7WYQFu2nv52qRYHt8m",
  "key26": "5VMM4Hz6ozY9apnkTe59jTHMp8tkUdArbib35HRG2Vz2vven7SryU98zmAzEjF3QzeXzGhGCEdtYTd5KTZqU2dzL",
  "key27": "sknWzkCp38FcWzuyVGGoebhTh2wYCETCF6SkT3wrakLNpEo4cNJgEPQ5yy9TpaS2HjneoG6N4rUzMgvdhF7WBAt",
  "key28": "2NBDNteLhSQ7ScUj8wqpNQpF5RJBdMFD6bDCAFnpCKuta42Ro5Geb4JYGMYfuHKabn48WBnbtEBUBnkQH2pCzUyY",
  "key29": "2KSF814aVNT53K5ip8HQNKsKYZPHSCymDijfvBgDvpc4Np5gwSHRBt1mjKgYENqzWQpvAEtMGx2wkNGf6mGwDP32",
  "key30": "UEd6fAB1HD3W6BtPytowtZmkS7SR5MBP9MreHjvxx1DbVoa9pmiF6r7hpEZYj36Q6YeQjfKME4zcth481LVEPTf",
  "key31": "2LWwYfS1oZ52E4WRS1yprqZW7DWkWjgraABH8oQ1QDRUprY4BeD2DXQ4j3V1QVPTbW1HV4syitzakkmHwmrbhxhM",
  "key32": "4rxBk2EFZB7hsxyH7mhx3ph94iZmC7TdrQE7qUVbZww4ibvU5FbsghAFkfKCVoGTDGh7b7uwkvcPKxpNahLwqHm",
  "key33": "4hxeFD6WWXBgUTem9A2TMLZuWBjBQTuUsDEbPKhrfVrVmyZCb3r9L234GxPjrv2L1YMUE9sVcPCCnpzFh1PSBEzv",
  "key34": "3rzRNt67ZmZbU5dEWMt4knWu5VC1uJVyYBa6CaHMm4S57v2tsSSUwNfCoMCnr9CMf2SNkkqntudt98iw6HdWacUj",
  "key35": "5inwE4Y5eSdkMmyYjDhsSgRmXeiT7jVT9B5WpYBRA8swTD9stUrtT7guiWnEfnTMCdW3cq2M7o8ye1YQFjtoQ4ih",
  "key36": "4capFu212T3cNCZnF8mvWH5zuXEkJyHXtsHmXex2gSawD9PQqBznUUqYFFQsVMS81cDVnv5N8BfLfthue9pisx3k",
  "key37": "WcjbPisarF2z76EyutQQ5mqAEtTKgGvrXiUnPbfjQSTsw6CAzxgEi32fihiv686iaVPqa6F8ff8VgV5C33kpu2o",
  "key38": "3AVgajEQRbwAQd7KXxd9KzeLbYjc7bMppAk3qty2fYjbZPCB7qRgaGw6BZ8c5jLBVyrmW5fd1vzwq1nfsXM4SdRm",
  "key39": "2fPTxcGzpRmGezn5NALKk4d9wYoPEVxFffiGdPDVhmxH17L3fbnJzzpeiFfXRs2GUm5CGGtHjAJjSU5XiU8wcBMb"
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
