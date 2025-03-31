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
    "4oNxFD96QRCJyhtBwSnyBVtd3CT6tHyj1QcJRiCRoj3TSQkTiRHghFc3HodxcPvbRP7QD1ZsRDLghfmMjwoLCUta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DA9SMfZJCgwUZuJd1Pr4GY5r4jAdX6KVEu5qKvsm86v7qKFvRQZNC317e73VWELAExAi6UXixznMHJayrBt9EKa",
  "key1": "5P9WtiSmfd3m5dqHcmirVrFdHPYsS6Ly44kzx9juZuWg9jnqay5i2rmKBBmbpQUzK9P4skPti4H98vxgMTH5dvLw",
  "key2": "3rLEyXbZVR2QYVjgWzGh8K67zvbQhSNZFdKHY1iN4Ti8tKkrJ6Vx6gy4zZMaXAB3PhebH2sA6fPam28jDxW5kR19",
  "key3": "4pnsGKxpMZm1YKntZVe8zADu9yMawn9tmHQNma6Cp38ktvGUUDwLA5eATF9EHsyecHcx8jUM783CQiUcCPpHHUun",
  "key4": "3sqiUyg2kwB24UUybK1QUadWVsA43F1ibodL7kJcnvcYgKGxFNBmDMRMW6VP2SQUDDZH4zqycEZPcsFmY9d1YUmL",
  "key5": "WJbkCw5nJhpf1kTcyZ62kz3tDyY4haDqenHWvsxr2wE8juDVQtoKQPTiv7Ms7Ur5EybjqMtjSf1rs2DqiGYJXqJ",
  "key6": "5RKENTKhTpLycMRi2tnYDwDGYHhhXBsM3Mf8XBsA262gPc3wFHGjfH7wSxnX7oJURed8BomToHP1LWMPFK8aHPH8",
  "key7": "4P3FL7Z8HisYQmeUnESDumhVC5Jiu82zewHtw7fgEH3TZ8CZNePde6Tn7DTceTdQWuHqBT2qhWNY1cfTu6qSMUEi",
  "key8": "4EGRsy5WvPXThz7Z356DoFTqDaZC91sJTDg4UtWTyqEURqBykorTG2jn2FUrrJyzaa5i2JaD54PQuvJGv3Nc5V5v",
  "key9": "3w1SRNb3CDyiE2vpkLWiFWieWUpuSLah3ccQpCqAMCqefZ7r7QaUT5QVj8oHZdsXoTeMor6XnNYwDC4yiGob9BEJ",
  "key10": "5oyUPs5fW3YMT7L62e98LzUH4nfsnKhTBhZwedFvxoTUkZidsSexLVUunqarq6gQJqgRiYj9hXdbmFkyNwYmRgjJ",
  "key11": "37YjgtL8dY1ycKdfu56Hg8HY5r1YdofXm9F12goJQLGLThRtKK8YHrEbb1RATkCN9CgFdLqCbpbEK35ci9GwBZG5",
  "key12": "3YfcvrpWsXmjeNDYkbSguf4iTbp2eon6AN4TTBBg22noSKWPREvCXScJvuPVuNZnxL4fgCm6QnvkGhq8BYR8xqsx",
  "key13": "2SraQiAsN4pxTqyfJVcEwLNbxMnEsyYbxAh6ugEnJpbzZtM4r3LL6XZcMbq5xPok6xhcNXDhDtDXYeVuECLufbta",
  "key14": "K4ozQndRMHo65KpayzVzj2LgK4maKqG5EoH488LxE6irM8z82urNcArN5cLJb1Svo5LJnms4x7ctb8rX7wFbHQ3",
  "key15": "5dY1sa36LXUZgLVVbcco851DP7uHpcVQhgyKAgDad2ptZWqDUUEvm1icpwPZKatPPdZfQpnr6Gsv8eh3vcrsCQeX",
  "key16": "3ENpG7oBz1qdfPfa5iAU8Wm7hVLMJ4N5paQp5UkLdarL9K322rC1v4jN5JzJJe8knXQtAD4XnPyFAtrXUb8xGChq",
  "key17": "2BTwHk8FhLEKzV2GUNz3UgymzUak5LbLXtfA1iSH2KjVD7v3jfXdTQaYB36t1d1MJMsb9MPeB7k4bfHM2K3iHKvV",
  "key18": "279Y6NvKdVWHtPDrubyC5iw3XgbZNCwhtfLLF5YUEh5soB3B4xmpnMTKnin3m9ngAs4zvuYho51s6Uz46jpfCpkb",
  "key19": "2jvvhSs3NfFuwkgbdEmG42VW3S7Zoa8BxYJz8RtbedzyQPhTfHrpf8kTiD4cCc6DD42uMWmgpZhJc39v4u9zWwwZ",
  "key20": "Ko9oG9tQCihMhnLDdo6Qi1CT9C7MFC81naHcv4CCvJ5EGhdyopT4Ndss4YEZC1YqoWKA6q3DrUwy6Q4QcXDZcPD",
  "key21": "Vt6kjQMYJcLVPYniZRrsHeZ1MdZpKR8eX5ir5qrn4fVpSCbrX2Crt5Fe1mKxfMnKuaQdRLq1bkhixVZNaXd4F7S",
  "key22": "5bG3u25U8s1N4iLkPbbNBdza6mWJS8RrwipfVQ5cdEdeufNxVRpUnKLHCKZVrdaMsLczUGhkWwknZV1kUeDrcRU7",
  "key23": "4KYq2LNVQRQHH2tWU4S9qX1DsjYf5RTy95GnLzX4uZmFDtzUTM92qVxLg8genJbiStJvN8yavAvwypjqrdisj37q",
  "key24": "29WkfuqCqrUvs3tG5DvJAsWxrTj5g3hHvpV4gozR2bi9EuVh8Wte5s8htB5Fz29xAMov98fmBpor9inpf6kynhdR",
  "key25": "4sKkThnMJyKfUZQzboHLitegzuXuP6QnpwHcx5997DMtyG57r9UsNmw5NmEeDjynggcByS62UR8tLWhR3LDcLxMG",
  "key26": "4H3JHXKUSgQVN7AGqj1mRxjmwu24c4VzQJFdAZbA9wrML5irapigzjivup7zYHASwsDvr7WXSKiSpWK7zJEsM7gu",
  "key27": "3xGoC8Lrdyskr68LpxicGYJv2dcACRWjE2vjKWAjzdNYoV8rqWJo5ixq7TkE3Wd39povRkSwNJxp5VYvkYSHbDsL",
  "key28": "2yc5PCccxrwGCHoUtNJYxkJQGdQeWLHwrL67XR4x1uUYccLLKEyxQweQF6YgqCwrtJNfw6wP13DJ6WLkK8cFAeCE",
  "key29": "4tVQGWWhrc24a4dnZ4cBAXqEWBQeU8Y2uH6mqssnpzUytx28zRwvCGobSJAmBFXARp8fcyrHsEWr8xd9s8vpeD2b",
  "key30": "3ZRXHdPETXs8nVXQC6ea3VvzJJiMAScYAczWEW9mAEP4xtsB4ET5i5GwYLfArfqfEob7Jv28xcrbaijcbEn6k9aF",
  "key31": "4gPkQp9YUQU3K8tTApHiTPXKButoFubaXMpnA54jhb4kN421RyQ7Yyqwa4BCaq5YaoTTU75ppRtC51RngsYH8EQc",
  "key32": "5hXNNek1xFGfnJRsqzTTHrPjNHGMTeBo8gmCnCjVGwoJPinwQBfpwrvzUxKZFJexJ21qp9gr2WbSdbMYzTWqyzQn",
  "key33": "2X9YkfTZ3vTwMfDwrr8Ta1BdsBQYnVnT74gyhGiQvu8LyhAA93ncyxeZDbtGJex5P4Wr69fXqv89h89ULYNKpRKr",
  "key34": "2ihhg2fsG2k3HAkuC8z3JNCvRojC8y7n9r8s8gPUKdzQRuLqpdP6voxj8tmiUwYG81yjGMvHYxboGrgBk2TJsp4E",
  "key35": "49enSFoFaTTrQmJxzH7PLemnmeTJfAGUKujBuMDUKqvUgHbtyxY3pW2WxF2JJ2LQF7HWnqj6SjJ1ZsyoGtn3uabg",
  "key36": "heLwootqvWGauYxyLNtFwRzcEDWuwPHTo7FFwTtMdj8ej4dBj1wvNP4sGeenWWYexY1rH6gcocLy4VDAmda7dqh",
  "key37": "2ndb4pbMXfPB47Vta4SCqZdveoggDCfvFRBfinBn8aH4d5LacRnd2SMsuUB7z87YCaHETATQrhxkcfZd8k24bVAG",
  "key38": "2e7Zis7psyspCJ98Vn1EPzpqChaadv5zaU88CMJZfSiRv1gu8UaMZFtg2EsQbdyPX8dfLEAj5qHXEj7anPTuV3d4",
  "key39": "5cMcirU2QmcX64RgoxHP3SQLEsVHJ18NxJtpebLrbmW1rUhqpmt4W19NVyNWMmK9NRW3Pq6zYygbcFLjL8VTiitk",
  "key40": "5k3TKS3tDfgUSGjJY7irHv2gKUUBzQkmGXrRYNu4n3pEAY9g2szd7AvB5AWLa1ocKRyGG3uniynbfumzdVYgPfbT",
  "key41": "3rBewJo9Depr9LvfGKWMJbX439UzDDeZorSmMPBC9P6pHVrZVWZDSkFb8zywXiuEDUrEScgfVH7Q3NKu91f5cSUN",
  "key42": "TwZ8NwkbxF2xBoz68XjnuXwBWSSLXZK3iAZatxehGmXnz1f6ZNX88WRbApU7pYtu3zNa8KcGhZsMvhNo3rRwQL3"
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
