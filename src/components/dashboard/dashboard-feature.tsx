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
    "5hGDP6rjAADR6GT9mgi5UxKPhpwoDiy1udgxE9C64B19YCyTED4YiWtwyzvJpnALom4xsMyNnSNLNZvYgNrT44JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAdF8CgsR1NCcdbw76gx8JVKGA5GSXVBaMjvfaNYFEDaSfDHJGBnuTSvXwpxgUNSVRE5FEz4V2eMQY4Hiz23cjx",
  "key1": "3xn3f7yoqdeGXzNjgaTadhym3mqfB2d6TFSyYdH1Zzts8b9L7baYwLaNU6gyx47nxpvgPtD62M3tEZxDZq4NeCuF",
  "key2": "twBq7VcCChRDPqyGAi7j7vrJT3FUnELwujUBmna8FmBPHvgYPR8hXazUrLAog18tSn5rVmSFXwBLSGYXwYUNtsw",
  "key3": "3fH8zhi8dxZYnfwc77W1JkqFkevtd4zGqatbRZhn9tbXhChGP2WFtiGsEJCTjjGQWo35pL2YPSKhfdiV4C3qRosT",
  "key4": "5p4LHXkbjy78ynTxeik9tjdz8cn2oTRh6mbK2PeeC9XTYtmVhtFZXHuHkV2EPJwnvbz7E3bGuuBEQYAAA5efnoNj",
  "key5": "352LtrPeLZB1GzDng1AP4mgbFFKsNjq9wnV8k7PFBHndfnC8jTgZApkjhVLx4iJjbsrgmL4jQsxUzJrBwHucpHEY",
  "key6": "oTUHjA7inB6DVvNh13aMwQoJyAhKmACxiPpBDGRrCk1xuDbcMu4KjtCFAXdoH9nhSo9FUmyFVoqMrNSDjgEVJT2",
  "key7": "4onj54kJRqu7RvygzKbQg26f2HMqLeTtLof5PS61qJyvQB7koh9tNfjTEv6cHjvMiG75BWTCBCwrRbRbrS9b9k7e",
  "key8": "3hFzzh3eLnKB3z4cekTdQo691ZZkqsCUNH9CCw55nUc6qh5YKYKHwpFo9Z6F7DMCjGSGUv1f53B3nRdaDsux5QR4",
  "key9": "62iPwzKq8LVnYm3Eqvzx1AU4iwVaPgY8C9oyo9hcWJMsbLNUnfSYXum3s3nR6TqpNrko6WTVkDtEiFQTjWmwopeM",
  "key10": "BRPV4iZGARC2ndzDzRCSbzyPrTwXHaBQSDtsjsGkYje5UBnJVBCrY8razdPKPm93rAyb4CMnRZkLaMZ4FNYbxxG",
  "key11": "21HCgHpgDbvJ9jwwWdBzQmRBMZ5yGMn1aoZc4Be433p8cW1U6Uoi2M47w2tmoUZEcvoMpNr5gREH5bRKCeuiMydt",
  "key12": "iBpWbLTZd2iYVv4dbbZhNtoM1MK13RfoffFDkXsmJcMnuEg6kqRsJW6G62XqJ4bnNRa73k4LBaFdYNdUnnXjfMP",
  "key13": "uPp93sG334tyNWAqY45cNDV4YNu9hTpaQUFcmKnvtJ5mVoWWsjaGJGiK475YzTk3u61oEx77gJTrCiVW5j8Ld17",
  "key14": "3sGbrRTHN7S8ctHFKMsoKbMmDgCqgJrdTFgvszVNMiNEVtiajCZyvvQ3DLuGMzFqAbZFAXaXxuhjsGkNMFscSngj",
  "key15": "QbrBGjbqU9dbkvtNkXb8xT4xaWDNAY1dwTM7rSNL3wg2a3MVzPNYFZrfVyY8bx37Xfnj9cWzxyJxK7AD4ooTZBB",
  "key16": "3dNEPhcHLNMyrHB2Kf9WYUaQSimpxE48RvmSovZyP1c9qCjdGGpmytJ5vmbP66cNkVXPCtP7cVy8tmFwSrSybB6F",
  "key17": "22iodt4QLFSW6VkgGHkXvJgcpuNadtqjtHWUnVbzBx3UqF8LaTMp3iT1rCDLicGG1V7UmeNxMj64yg5z4UdthdWf",
  "key18": "bZTkGXQNrsw3amyyFbVYBuy14CC5pE6mbS4yAdNi241QhrPEBSLyu1CdhWCGe2GHJfoQTeUCJ9F5TajPHGFikBk",
  "key19": "3faQQwsuXRMY292fbUeTw5zXQ4guCXCgfvKX5BsUNEYM5uf11RTQ2rFZxWaxLD25jCzyvwEcxFGzcyc1pV4VWzHL",
  "key20": "5dyQ4LCd81TJtrgtETPWy6rGzp6ekgUt56F4M7Nv2hjBmfUxpHCZzGxfhXwj1J1HrcchDH9av8LmyCRQXDGmGVt",
  "key21": "33Cxprqz4qgTQJqYT7DFpUiuz1RwFKCRnbVj7XmbpwT2apdsoqP9uhHr4pXZ8JDNCDDYckSRo1nyw38isiJTcV7b",
  "key22": "4YbYm85kZv9TFRK1W7y2NAwSbKhYbg6GtFgTW7fBcrvjdZ2vFac18MowJ3YHRpzfJVcW96QYQ5Sa9EH7uSU8Jwg2",
  "key23": "4j8RDEYzoPwKWB78YQcjXtbRqSme36RRFKLtaxXG5CBseTEEMqgq5WgmY3MWdsXcFQ7Z9HR4gum7x6jcDqvbF8Tw",
  "key24": "FsfPNieBtqToCGzP69jmSGzMsbm7EYZbMjzZ5CvFnjGfL3btowfBk6kut3RRFQ17sv83EFuLEoTPKxxRFkMcL3y",
  "key25": "4CSWEfkdt6AiftULLdG3d15y1tqrozN24GVnxiB7Gzt3G6iNrdz5311pAjCwNdUQw1qnZdLBv67JLA7sZxVanpzQ",
  "key26": "bXwCxPorfhiA6eGBGoEUoiQ6Fi5MPmdGQrmTVRMq14NzAZw3V8NNPVWXdfDLYHFXsLiKiGDrYhAxLSNFSUw6djj",
  "key27": "3kpYebxhr2DgTeae3QAteoYFpmkEynMiWv4aMbVhspe9g9s7jeR7xw7hgy59EMkC3V93WE3rPRqXFDoLTFnuWvJR",
  "key28": "3tjAiKuTZZx26Gwu2ucsz3VWDzQnRTvrETp9v2xJcgEqQZjChwL98sAKiMFBpn1ugfWJUvYkGnQkpxYN1VQaF1wW",
  "key29": "5QUcLEHn34MUgbLpahRoqKuVoECXJVmbzoWXhtXLZswDApddYev2EZf3u5NLkGfMu4zoY18vZ2hKeLUS4TfnsbVX"
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
