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
    "3fESGNBraD2MmSTAM7Whvm2UdNxQfePKkvUqJkVNDhWdUWhQ5kpzaRqNbzoqRoFU3VdUcxKa9bvnr5F11piJBpe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67fVJFNrE23Z7TQ6oqyAuTxw86g6RbcGgW1KjbQwUCWiRBQc6H6imTsYgWDsfqGY16gD3RSPSHpkujGGpPkVuK5F",
  "key1": "5f1sskZkwf7cmttpon1ep4wsJBGjrNjt5e7wk99ZDjdisCBQZuzKvGcFKgJALQ1mC8odyUyatxqt2mUr3S2bnx2K",
  "key2": "3SkQsEd927Hd1s9HqV6Zbu6F2jdDjYyYTTjL6nxZ52MacNyRNnoz1wvFdgArwcPdwKbYdvLZbSqXpiL3vZ8wkQWv",
  "key3": "4SKAjJ5MHK6y8R43bWQT9VRjYsNG7cjJq8SkUwsWGhApkZXPNdRQ3eNKjyJdMfeKtGcqAHsrmZATNWB8XWg1DpMZ",
  "key4": "4C3SFQwD3MTLVmNXFvR2fkdGYJUHAdPE2KKRVJNSrUr3UTENjFjXPZpktEcoRLPeh3xjPrSsFVqLHMnbpMqX235s",
  "key5": "MvoFvzUQT5EeFEziShh2LaeEkrBCDjHao4JyibkkjLAwE8o34RMxH4PPrP4uFpTkUcCLzmG3bAFihCy94QrPU3t",
  "key6": "3yuaaqB1kfBVJFQknDmdPx8WWF6atcjvZtsStV9JLhM5PBDjcUjrnMYCyPM14ndrTdrUVp7JrXYkmiSJvwBtghoR",
  "key7": "5EcMN7t7JytWMUHApd23QLF3kmXYBnZBNxX8SV3QkejK686UikRp8WVHtrZC3stybMYS2bR7VE2QdVd7g4n1CM76",
  "key8": "3vDsSLbsabz45BB6kFg3xhKurcQRak4fs5F8TEo5qafkSpP87goVoCG7EKbzjmtjMv3c58dqntgByzgSmABwKL1A",
  "key9": "5dzBt3SmM7mp7kfymMxf58uxHA7g6nEdeceohfqpmtBofMGwKddtCAnRLWoKZXkqw2T8ngjD4DpBir6QYdf6qUXo",
  "key10": "2ZwbhgJGzc91YRji9DF2heq4WxXYV8XGQUv6gfUrkgNUEAYXpAbxsLKqGRPnDTFcfFZdkWGdaXAhtniohN4nWCwc",
  "key11": "26ouQfEsJHZ3JqJAJRKtMMw2Gs457BSfTp5nxTUBro1N28Ed1pYsoRNnWsZeSmn3YzjyVv5xhArqWr4WrLSc23gi",
  "key12": "2y9hDqnSTKYeQGb1FLeamq2pQjLCvVXDZmsJafoDLVvqNf6zJZoZGWrF5a3a12qDwDkS4pUAwGTwRas7Rx1NmzxZ",
  "key13": "5u2nFwfvw3pRfMzTqMwaC8bMdejo1crkNkmtUxnMtzbeek5yebP2c3Y9zCWcGo62FfDBsUXwMKF8tebnM6SkRcJM",
  "key14": "5ezYm37AmFhjaQ3Fk6CKdqtruqfKorbXKb1MJRRNhhfLuquXEF6MCBNmMju9uWkyjN5GkrwfxrTwBFmDaFNHxGiu",
  "key15": "3CKemNCEdTkW5jM2twXHR2QvqaGjb8VL8yZFvxJF37HqvoRJkLVnvWxPdgsHvPQDT7VWhywojhXn6nfdmcfpdUb9",
  "key16": "65GsZUx3hrZKZYzVqojA4jSDatV2kmzNvag5knQG7huYmGsKj7gdMxrXc35QMTTcbcM8st9ovjrn2AdRybPYoEMX",
  "key17": "4CbjPGM9u6hKSLTK7BcTvUhbBxgJG7Pp7Hvv9E8oJeh27nuEgztnMQh7v6gyucJRrp1hXGfeZEjUX7A5eP89XM9R",
  "key18": "3F89Yq5hK217QUtUwA4rCZapYUAYbEh2PZx8VqA2eah5nKK2oT2S9MNjrDY44hXbUgPqbtGCJH1aLhiBHw62vxPS",
  "key19": "8ZxCVpbyEuNGNMtvEDYEdUAC564RHbboiCh2KB2sdNMMbXV8e7j2RftwGdDcvkpnAbDRnkTCpH7MPBsdLs71Et3",
  "key20": "c2R3MTAo6SWEEa3oc7yJz9Y3H5K36JU8sCAYmYdb1VwRTj8rukoF2fQfcJnCL423JyNZorWFVy1ao7oYt4Nye37",
  "key21": "54czXsDwSNgvVpNAuM5LXBBWuRwv3tuNPSmMdnB65PPf2BS76ACw4eh5LvbefinUNM6bxPKwYHS2RxsfK5oMpxem",
  "key22": "3huPw1KgXMYj6ZgFDjQ1BgT6bN1CX4L9QbN4o6Jw2br4GwH6kHr2iU69HkiaDnd9oyW8CCKWMxLbKdbudznpx67E",
  "key23": "2DqkEMMGPT4nevxn5epLe4CCKx23nCKwPxUfFU96FTT9XHgkBwcJFXd4rAS1wRTyJyXrFyqiEHAAjRyixRCP22xC",
  "key24": "42dopSsALNBBCEifAWyfY36ZFRubc7yyFCrpfdAJ2tTyrPyU7u4sZERnW1rQCtSConXMTKkis33N5X5jGoGRUBDy",
  "key25": "2p9fF3TJmc5Ft35YhFmr8z5ioqTdgtDwyQUfX5PZkqDXkvpMCqspPpZykzhgxJTXoRSq4Ty3NhG5nE9ytFH6uqBU",
  "key26": "293rFbpGw3P8SRamy86LY2aRTSKNo8nk8XWCVqWzcQdsNgPihrX2PRVZj1GBNop8BZ5mqd3XjeCqMzwRzWY43TpA",
  "key27": "4TngR8ik1DeAyjQL9yv99NrFN6CD6D7xAEeufM678uAQAMpPJjJgU55BCWG31eVuS9dCreb8uWnxwpVpUNiH1ZLH",
  "key28": "37X8jbk93vxoPh7LWMsPbThSSxcKsogWhWXhkL1Cj9w9ZruEo9p2q6DCkPbcmbHPPX6bDFBBYezpQE6bShm5tdF2",
  "key29": "77oxtkWDGdF5AbePYaiyzEE35znBwMvRxs95yH9BQxvkAnnszidnVT3yPoVTsJREtCSWtdsdCbtGtbu3749SVUt",
  "key30": "4iGAP9sKYsAZhZwi5o8CbF5xHbZb3viGNpB9YCtDT4hUmn25pPkNXmp18M8R6kWqsb6ibXbLCvfF3Lnvqpxwg7Gw",
  "key31": "3Ljvrfaho1K7afLds2QgoPhynoPH8qoR5pbxE631qjZoVZvfWjSuqGi2R9dGT9vDEaTno6bRBKbga3tKmW5yunrj"
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
