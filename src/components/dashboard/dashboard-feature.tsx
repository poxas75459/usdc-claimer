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
    "28fSEiuiWddrfSABenE8prPaZb3zX2GSVbmWMrY1xNwKkqqx3jmjLccrxrTg8XrPnSTusS39zp6BFpHv3JFh135w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YeJ9fsDbHy4u5imjAbNWM56V41X1CK31aVe5NT6Qhb9KerPcHjkkXepSaCCzmjkLeqg1pi7UT4PXYWwgT5mh23d",
  "key1": "22PyKtyozYjKEvENZvZg8Ax5Mi8cuBhmJ1qpEyCapcBNiNAtVDwT8fN6oP7DgU1MyRRqJpMPBRyZFhgXqLJWi6bd",
  "key2": "2ZZRRQrfmGc7DEfKmXwFttWRPwcxCmLCj9uRfPowBTfQpbnH9eFGcM8NVQgUg2SZXeskXtC5WiCEYhQJGusH27ir",
  "key3": "2xmyAfXk8Ld7KE4hyb82nkVKMmasXMcvqtgFf72Qcy6FJCWwQXSCf26m89ajPV1Saauqz2wH8cLHLAvEM6dojA75",
  "key4": "5jbMN6s7CNphxrMMmEpR88ZQucBUSwKhJhqXMn9iDD4SEe4rg6H29CQkF9jq7gjcnsA8HMDZZFPod2enQdFsDjQN",
  "key5": "2w8aqQ9Q8cGfDm3FeryLuG6BC7PuDsaFnCSJBMTsHDgW4Aoj2fMq8tfbyeM9kRUUqkB52h4vnAtZCDG2oU2K6KUQ",
  "key6": "1j4Cu25FBYDWhEDhkjzMdRsrcvkvH6nmcBdneAZEwjBR54eDRTmruRzRuTeRTD5AUh7tqxBbd3G7cGp83xA1ZE7",
  "key7": "51LhU7aSYMCU329F3cbbinxriBHsgCziX4Sj99TJebL8dmLjpXdcK6gxf8Di1kp4ehDqNgRB3G83irJ92MJ6zrqA",
  "key8": "2Km3ugTxPaAkoywRhMecWzPVV4yM129wqZHiMdrUaRCECWo4Z6z9pTZXXfSwtXdpZtrrF6xk24hNHhQYfUPUFGmj",
  "key9": "5uAZJzBpeTpihQ8zvphAp3eR9dRatq4QNTrxBiGUp6z6XPyppbG13Dn76Sxhw43nQe4RYEiXvjEqpNNqiKGQUpnz",
  "key10": "345GguJ64AE8FyJ9jAobYbHMfYB1JyaQeQe22cW4twr132YaMiNGh3HbUyCyi1rKT6t6BxZzUpsHL58TzqrvfqEs",
  "key11": "678z3j691Xvzwst4cuXfbHVgbXbiGBDL5L98Q9H5EJfLvwctCL6W11sRc41hEkjky1ct2uyd8zDG71FdsjicUMEB",
  "key12": "3V8mQsAQP2yzDSLfZnzvdqZgMCzhozQVFzurJzWH1qZ93aFPZDKMjbchDvkprzwJrVm4EogMH72CpA1KuQf88EdL",
  "key13": "k93pKTzCW3Z4mZevrrFaxxBejjpkgwLgGvsSChQVfcFBFSM5sPYc2FbYN53D97kpCQwoTpGznq96s9LYxfEUKqH",
  "key14": "5KK85gBXbABXU65o869P8r9yy8TJVmrxavZCLAyB44JZz47sMPNRhkUEtMPXo9sY3rHd9tzyjCD85Avt18sY7cNh",
  "key15": "5sKQvCqjtRSLmL3gZhwL7yweTwNGboCW3S4jtLLYW9r5X87gT85hcc4QwhZuPoM57PJmqTirz64ECNNx1qJ7fpUC",
  "key16": "FKhA6iqLf9S8dpnjoJVeEEuTfRpXK8USHzTC8emTZkbwAPMG6L9fMMajkBkBsUJ2mHe3Z3hMBkhtvuhwGPNi5ee",
  "key17": "9sHaWEGYxwwe2VNkMwFZ58vW9F2HgX3u8ck2FbTfuPB5Fwq3oUNkcKZWnCJR1Rdw22wvKgShbYoye48r8kqaf7U",
  "key18": "2WGTTQpFyfKKPvrcuD6ZuopHpm3AeZvQLFGcPRLHJY17WWDSrrjWHQkNbWqzJNxWntAs4wficjEcoE3ajdSpU6up",
  "key19": "4sihdzzMMx34p4gxU71skSsNyQLdmQytHSw5EfcXRPC8YmDLvFGWxXAoSKrCi2pJLbmtG18NYJo9QZyNL71udGZq",
  "key20": "4GZQfB5NanSA6MSSwEAB4vazrmG16vHEZ9VEwrYki1aNutbQ84DqdE7kZpxXdwhLGzkK99bLpRwdUHpAs5TqTURg",
  "key21": "CqU8HFFMgxTQ9uddeiotHkDKBUmjPVYN9mLVBtWg2jhjpRPUUVoqLbBb5HqGSJCtZnDwdsqr3yA1sEuprMaGvY8",
  "key22": "3RdLgMHG5sudxCsVHBpk6z7sqcipusA9K2VvneTgPnmwYZSs7oCXzJsoVb786MWpdFD8XCCqPTK862znkEJmYYm5",
  "key23": "ahXSEgHAxYqzKArAqh1NUHgcqHhaSiVkVX96oz39oiyfk1MTey55Ym28c2bih2f6rGt2HmYv8Nw33GD7vdoZUCe",
  "key24": "258GcmNdU4LWhC4udrBF1uA2Wiss6xQd78tsLcq25WkPE79wL16Kf5GKXvvtVXD6dKJdpZvtE2LM71NN6jXyfdFh",
  "key25": "GBjnPayJWMipCC7L6ThV8UGPK7RK73j1fhq8yuXKubHYUrEE2XJRuXiyHNMBsYMZCkvmdM3nLhhAdxaJbhpoRv3",
  "key26": "3iF3SzB22GVbNK9xMzDihqkLneEjsy18UaeqtbVHbkT8oPQAnt8jhVR68aSdDrTX4YrHefHHqijRekdfJdvhai8E",
  "key27": "4KKcwEptHUW8xZ5Az1xbpK7yrrCn3UNThxr6xuBvhb52tgJ2SkW3UkETK5AtiBmBancHYVjaKvYm9zeTSoFvUZ5v",
  "key28": "4Y4A32uZTo5Vs5SCkDbHksu3MG5D6V1kfTMxw8UCmtRst9zT5KFraGoRhosh32zk8gaJ4ukyUbbS45tZXAsXEyxf",
  "key29": "4RnZW7f4MhoCVV3g6h7hN76kNAhBiw9r24WDca3u82Wx8h5uujVCCEzt7QJs9eSzy1si7rgCtTP8a1URF5KfPbhJ",
  "key30": "45QmFFgPZvWsKq7fHoUn3URmCdna7HzpcYYFgXALx4ZBBWoXMGGmmUFWnJTZ9QD1Mm2Kai6vkocBWa6FK7jeYUKs",
  "key31": "pKxAtjYhyr5DZMJWjQi2gZEUUzAbTJGTY8xowPJkF9eeVTMryJnUZHLfDCZ2JPJ4MDv9rdHS8ppRr8Fp8iWhhpH",
  "key32": "4g2327uTSrdzMAZoWWtNhZ65CXWU1TVs4DV1PHrFNibEZ32crbLA3ZyJJg7in9nqw1tJjgMBJkxV7jruvfDSq1uT",
  "key33": "5Ev4FRuetNjvtACmX7z1iKdAQPDFpZdox5ctG6KgfMBfb18BiNCTx7ZREfn6pBiMnqzqygyN2CLTzkLda9F2mPqR",
  "key34": "jY8yqb1tk62qZ484UskTRch7WiVF9FfHiGrBibFLkMJFvbag15QzW4gD4wNBEPAuRm6EDJQbauXs6jMKLTXKzWJ",
  "key35": "kV1bVMhQTndxLArF7hXkrFRtYnBwVSQjqetLNuWD7UpkhjpVPkMHif2T1st5ByFezT9rSJe44BvyeDD9R396sY7",
  "key36": "358CMEjj4LFp5HFxjtoU1RCCN9kJBdqrDmFM3m2kL6o2QRkJ2oBardZi3E8R46GfbHnqTfZhHSAkc4RKLpmndN24",
  "key37": "5aXEvkfLuUVSsZo78sxM73gXBuUhyp94eg4zk1yy7nniGp5U7vRXV9dpMGCdtQ932PuwwyD8UcMtyMsT21ActbUG",
  "key38": "fxqxMbzcYpcJ8uDVx8E8rbgHNZ9KKQrThZZvbATnQiWhk82t6XUq46jicgXMo6BpjmGyJ1iqvjk4qPC6qryjy3L",
  "key39": "NcZpSZRsYZ3v1PJ5KmRvJRMiBVVHgKU1VU8nPMtKHHkvkzZaY63J2C74jo7AuJUokr8fr94NtPi9vkEr8mb23pE",
  "key40": "4RTRVcRysTyZWgj8dC2J29QfPem4rJUPy9mzRB8e1NqAF74HmeZVfWR9C1a2gKyzdBx1FZRp5EBMWN1TiZ2NkqYv",
  "key41": "45Euv49y2GAPTmH6kz9x5i8cfre2NuPbe3NNn5bRAUjWmbVcLGPzE49DopoA5NxwaPFkQAcCMUqiY4i4uGipcDTT",
  "key42": "4hT9tGGHH8Jzw6MqbxZm5Mz5esvzuavkD4oqRxBNjX97cRoobxFJx2QvEJHXeuZDzt3RAbaYvPAqLj4Qh4p3ocX2",
  "key43": "4cf5JP3hk51pevgjSKrNRf4BfL3mxGpNi6yqACDtKoLS7SgsBVkX1yRyeZC5oWiJAsWK4L5JWadKDqWTNLUab8or",
  "key44": "32T4tc9VeSvKNgTNnpXu3L7QKMs5ktjF26jTxbZfteCqFutVimmCYvBDUGnA8oowUg4xjqapkqHAWpcZSyWYHieN",
  "key45": "2GgwkcY2LRveuGSRtJ4XSwWJwyPxr6LdoLS7z4du1o9a7T9wXFRc9Hqv5bKs6C5oef4fSuYtQpnrsV8SXTZvmPFK",
  "key46": "4wZemsEqCBbTJ4sxCeZPXTiSHB519jhKTkpXRwngfbdEy2CuWHyLnAZ7AH3XLqzgaCMSZGpBo7BPC1T9WwwZc3yQ"
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
