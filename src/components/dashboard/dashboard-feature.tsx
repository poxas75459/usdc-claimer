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
    "bdjXHgeRwc7Bg1szyBVW2Z4v8C6sJiwwwKwaFoqwAqNVtH4DTcvTpDkYNBhRnutvA4bE37FZ4KntgbLFyPk5b1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qc6Y5fkaiKjVgjqvkX4oKEUYs14dQhgyA9PvYQETyQCZGBprUC5ZAwSy8n2AAEzetAGTCZ4bo75kcPZsFU9WL32",
  "key1": "2ALkDYeB7MFsgpPiXUthjy3EZ2JdCoM7XRizcQfPXj9xDSeaJeBj3QpjpEKiNBYquf4X2e3vhg45LqRkDZL9qCbs",
  "key2": "zYU86SRuBA5mVTy7k2fkNi75nZh9R3Vywz9ccFZEV9Ju9GHuckU6m7oEHh3PZaQUJhSmyi1iSTVk2pbcQCj7ae8",
  "key3": "4KYSuKGbszCydmJPBXuxQvVgQMYBXqFdNjY92XaLfWnugCihYdwznxkRiXgcGGRc6ytBpzT1ZHEq3DRp8tZbsL9H",
  "key4": "63K5JfjZi6XpMHjt5D3qYZJYjp1iEUfwWDCYvgiZ2kJjmpNmAQpLu1X8L72LuosktsNoqbjNFuriuSFJycDZVSk9",
  "key5": "45dGit2GcFyYtTn2pQXAZvsKbLip5dwp6Z3j4kLicfr41ot7uQNqd3tEA8jjBHRvsrxkuFEiw45yPf9hi6QshV8Y",
  "key6": "3vXdKvaaSvxk8rg4qXCN4bcMf3eTdNtzpVPV1CEQzptrhf4eAgmuGtnUiGtJVftv19pgi7n4V56PbHC8DSgd6NQN",
  "key7": "55CmPDG3pJebcr2xZ1cEM4gHQDfpTySXgH5yx7GGaiMtCp2HbPfhrHbwpHAhAqBrruGFJ4UQFCZLkBPHoaYPrKBv",
  "key8": "584gRBS4tkQmcBpaDbHNP95kmrge8vUr5sSi1QwtVoiMua2Z1x79sTSLDdrNUNWGoMzmMVbYy1k7qMs7EFdd4iQh",
  "key9": "5bL8UueLajw35uUGKWR1wCn4gu9gguhvZWR9dZLhNJEcVgsSk9gr7wmsbbdr4xKbagRgtDDH5tnEqnAb8Q1ou9hh",
  "key10": "5Me8EjepsZFNtrhp2K2KaTcRjBHboKYDsNKaKwWSd9P78MMNrtomc3GxLMnqcLW2PXT7CAAvUBHGed1nsF1EdzHR",
  "key11": "2cpHmV1WW7aMD5iYFNFqSnXmAszHTxXgBc5ajpeNAzBZN8Nn8ouu8H2oZY1kAfLGWxE8s5G5FeCCDEiYEWztRgha",
  "key12": "5jx1oKdz3GeFZkVjhQixgVn972XBgLqGRQiK73F5ZpQNBkK8k29K4SBHfRf7HJJ5Gz7sSp4P13G5LDDETfBA1Sgu",
  "key13": "4j63AosubqKWVuk9gL3hSCGovjqTZPbs6Etj1ka6ewLyeNNM89ouADJsMdwjD95Z9uUoxsHMBygnxne2hieBvJZW",
  "key14": "4jpkjPQ33NVjBNnGX8FtfZgHpsRRQPicth3Be3NvEpDWG6GhoYNcjvtCoajNonTQ3zHKRdDVcZvjp2md77C6C8Vg",
  "key15": "4jVugLYCcmj7UGS67cRissQsU3DV5rceJQD4mv5bwygiZ5eSMVinKs2Wh7qZVsxrBhj36bmAuLhuh9AgCU2gyvoT",
  "key16": "289Zr7vGkYKGQjajvbJZHqq2U21wuZnBLV9m3cB8C8R2LTLttXWb7cej295oSNSyed3ALDXj5BvDchhoENicEPjj",
  "key17": "2iByHwMHWAQpxeyKcRYNtuPnoWLmRNawMsZVKjG6qSKxazn4cNfH5F9usDZP5iWFgJgH1rYbrwmUQHaanaJcu2Nx",
  "key18": "4KgMikymwo3RoKPMxnujv4873y1wm5a1Zn4fVdDNF8uSF1jczTMYBrgjz4MVRBdbh1L44QJaADe9zLqqp4dDnSGf",
  "key19": "2jaqqcmz6DdC8DN1o2do4ysHkiRbuiNhBi4oj5UPH2nmKeb82Dtu5R9ce2PQfZDQbGX9T1X9JNtXibH84MWR746i",
  "key20": "4oU5uTrzM6FwKYKm9NnQ3j3FYUR6Eybowa3KzW6JUiNkZQwk2XmUob6F5pt9tGMzLyEr6eWmdfysS5aK1yRdHqP8",
  "key21": "3VPefALg8MWcjDe11M2fVuwiMhFjBjch1Y7EsVCsEBucD5Yy2z2LUcBuvAGDaszHV8dUeHuxY1Dq6cKrSMJj54NT",
  "key22": "WKtuo9VWxoc7qZ4NYDUPEaFmSq7BkfiCThVAUFSKxqAR8bvFEBBqNXmdPtfQzdLmvvJtPRT2KF871pdsewzrqcK",
  "key23": "2NPLDnTAPtv8Prc3yy7xRzMu7UMS1T7ozdkpKW2xa6Vhrc1XTRiQ6Zw1oMWueAv2z9mVwHeKgkM75X664UsWrSE5",
  "key24": "MiyVn83sJ31tQRS8yjfNcwtAxzsT1dNmGnNe2uo8wF4xewRdkDyTUAUWZPAwS9YkujwyT9U6fHrEWeRPQnUjsja",
  "key25": "2XzSwaGXod6jAkTyqgUsuVL9cQsvTYfbXEazfohJcAvUiGrVXcMokRMSdRTpXQY3MChMgzSB41VAb985qXjmixRc",
  "key26": "629GTNsc4ngp61q12Z5QAzunvoeZo9WuLf9Va8tZu2rMW82gthdDohCttV1QaHeYnr54RuVCwmsKmZCDXSben6W9",
  "key27": "v8DdNFornNtJeQe1prxbgwugAxBA2iPxGpwjJ1nb9uCVVypFUT4JB95H8pawNumdspN3MkFLS9BBrmxhhHCxydq",
  "key28": "5HySjmwnHL2DoDkrM8LSrhB4t24TFRYTwfW39rsSENopJ2WjMTBswvExTB2XKNieEnKmhY6x3StM62HAt3Jn6sgs",
  "key29": "3YheXyceLX7hxqZWTzvYiockugXWE568JFaE8PxuAvakcJUKPD14zumWcyBhtfegQ7WUTtvy9HTAiQFBehZpGbyj",
  "key30": "91aVaPZHZw7tpMkHdnoCJW6zyW8k7RA8twB9hLpb5hqgz6STJeeJ3cMC43D45XUioTYK3SCXgMpWev2jiUCZ5VU",
  "key31": "uSQeWVaXPRLeHN8UNTQxFjJ5eZgRME6uYFttqFwBDwKjNbZt1o7ZhmVKhCWYSasZpGWkCRMXcx2NsrXMjxvzCT1",
  "key32": "2mBj4Nhi2xL52gLAbf9MDfhv24QSDh14xZXfEah3L9AstrXQthbjrVxaDLxRzFdvy9f9VMTpt4BUFryzfc2N3JT7",
  "key33": "4GBmqPM22VeH2gT57nYQeWLqsrN1wzxxGCvQS5BV52uftdNQJQhNx4zTbCvNhMfAJKbTqbfaLtFSaSm54AHD3Dw8",
  "key34": "2Tnub4n8R9HTXXcu2KGjfU3aau7ELd7nBzVoSQX2zrjr1roUdqBAYJnAS7haLXN9PvBfvrUHMN2HYi7rEVYt1Egt",
  "key35": "2XJ6DXU98PrVDDUSXdCZcYotVRJNamx2RCydbNYLcnCY1pNGXsK3EUSNRxSMvVNnZtfxigx9LGKrmMtG5LSSyeA8",
  "key36": "49uPdydgXxw7PDYu59GDDNhjxVsHyNKGDkiJA5U5G53DBfi6vqTHKH84XbZBo9ugbN371bwBWD2ek57fjGs2Qcxo",
  "key37": "34rFjEwJkWwsHLhLUFyTdTiXYuesN4qto7zXZBkW4s3FQceNfE764vPAkUCJfyM1XQwAC5QVehiE54aQGaHLSebZ"
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
