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
    "3vtGuntkz7SLHAdMTBSuyjA4z447QGVts4oDTmK7R9AtqmL1Nz2JgzS5sgEfCm4dNLRYtPurvXJygN7zZ3hAvTQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAoBRt3vvSy3iEAgKYfw265NtMiNZtWZRYC9R4wZbcfaqEVgV9v8znX7owz18Yr6MZgeEFExbe17ToARrE7PvTD",
  "key1": "3TTD7wCYFuqfH3Gq7tdhrV2p4N1hBv22qWEKLUfcNyKJahpz1xg16e9DUiVDXcGxyoFErZay4ADRUeJ3BQ2Tjj3K",
  "key2": "4DGUk1zjuruBM6tj56ARTsqcrgiVKarKcKuZDpYjgzBb3bdLg1aeS666EQiCc2Egeprcgwb9JHNb53yUgkB8tvnG",
  "key3": "3PeahfH5KFSz1wLMJWcJkSCHXsgdBTJK22QtVFWTvwyyFVcrFzMzGedpcr53n2GsJzDQJSaC8uGVbr2b2euPpT66",
  "key4": "4E1M7sSVYQxz4LUk7rJ2z9z7b3vTMi9DagsgVU6vYssruv68hehMAX1MhTn39AqdAYJJEYz2xL36KPasqCX4mmPQ",
  "key5": "5ehByRTF9HXZrzinjLtdghEhpXhPStFJLMV5Rd5GZWVDPvto4jvge4o7D6dXTnB27fGpaXHtufYA63g3XemAvNDH",
  "key6": "56BvXvzu11pHD2AUWwf47BKqWmU9urNUGHxz3kBTQSdiQuUeNv18MFS8R7fr3FfkWM2yMujRtA4YdZSqarXiBW9f",
  "key7": "5avH8w8MrgyBfsY2RHK8xTsHxpkvB8MbBTHK91ymw5SGBWuSpk2Y2v9v6YYb4Xqs2FJZk5Tpa6RHuarHpCMEwvRZ",
  "key8": "4cMs74etqykyzxBUyyYyBVRUaeYqqT3aETH2PnU3odhviWLvaJP2YUN7UV3LSmcZX6unr7q3azKCgsnD5WDVgnMK",
  "key9": "7sK1xLLpD2PknRwE8J21jsQLfkjzc29pLnhoC6oxdLiE7XCkMY1yHsYCi3U665QipE2ywwfw6NoVQqgzjqc2V2u",
  "key10": "5DghcAQnXLDNvYKeuCwh7UtZnpdxr2Sg9noSX1GrBiZ6thrrR8oUpytY61opLPL6Zw652gS3UmiSQyjcPGYxPYom",
  "key11": "h7BEKkndU9PWHpLcdzwx16iF2fnUoSWDtx6s4SBdC1NxLugFbNAgoyfR4hh6WdFgi1tLisKFqtQPPPAjtGs3vg5",
  "key12": "zNHVyiXnRPTRkVNmYK6Dh5sFhVcioHdYdrbRxxTTT14oemXe9XciemH8GR2V1L8Daqia2msJjnZX49arqHoehii",
  "key13": "5yF8NvqEszjc59QeUj1BDZxBtwzmWUQrsxmR8vFTe7tRuJhopf7jRVsS1iAjCq8BSCqAGdSTrnzwU6KRan3aGYFu",
  "key14": "5e9oeSn9uxm7Ws2hkw8KH83LpiMg5XBM7NhNojncrL7ycaY9cfAhKapMRdrbs5XfYKyWX57JAKcTuhSm2SmmqK31",
  "key15": "255rYEKk5RnFE5kvgEQgahmEJTBzgTkfWfStT24jhypRkYJ3nkNNJp5eRttoAgy3e4MAuHjuuw1V35CcAtaKJwfM",
  "key16": "3K6zX1iKZaTNaBMeQaxLM69xzKa15CVqNwSjpDm7snTQxnA9HLr9uHtjc9cNq6NKrHj2tLGGpDp4pZkjeURy5BP4",
  "key17": "5XUudaugXdnjSrZZyqPWYni8PgYLqsmfvDx4T9tMHunqBGqYMG49xq4aY4xeUgJRLr85YKTdgHXnmCnRL3WfAcqT",
  "key18": "4Ej3DyXJPup9JAnz9b6oiGMLajzZKYHG8xaB4qYVRj5vqJ7k9wWcvmLJh8FJ5Aqacha3ZThbZt6NSYoGbNB7xWFU",
  "key19": "2VvF8tEYJvtaeYHxYfPD4BQTwFNrq8rwf7ySFgXvXPKWugmbL9UUCEfBhJPPnFyt4Sp7bCU1vpMMmiZ53KSsVWK2",
  "key20": "3BpT5X2hddyToGeHzhFiw7hVDcm3AJZ3GqnQksHYaeEiqkQqc18y5Xd4HGP72TBfkoxvsYkaumSo4i6W67gdktsz",
  "key21": "2PNa6v7y2iPqnD3E9g67qCpBpRGuvWPzvirdxji7oZo8n6aTsXJGvfV84MNUy5Y5HqQsFRQ6hjw546jYTVpw1g6D",
  "key22": "4jZAXyNuqGz5z4yd1A5bALkEgnQjxeBER3Qg8DVgRRQRW9bwKsH2FfuEkEzk8YBYkeb3qMYmn7Ba4jzKi1iRTs52",
  "key23": "1QYnw9PgXvEvDYbBvMGsfNUy2bTiG9dSM13ir7ZMGebVrn7QXMmd3QczBWmETiejGSx8iB2yGnpymazSUKvD15Y",
  "key24": "2SPMGYhB7jkBUyCw4YDKcS4cZcspXoT686hHKSw2xynoaL74qEHaDwFBXRVLRHHFc7d1iK3nKK7qPLQ1HetnVLQJ",
  "key25": "BZV49UQYF73AT9h8wnHy1Sr9Ni1E3KWK92yfmSuqJ99xBRKisHrTag8SPKBXSpEEYpM4Rpht3YjGiEJiUvLzKH9",
  "key26": "3AUqTpcoQyRN8MyCCdgVMEwoGbjUD1hBDzUTf5FGH1PfRQeJKZCmw8JFfhmumMDeK8Ew4n7ysy9jQ6MWxCoRaWTh",
  "key27": "5Gf4ojGFmbnM2rdJ5D5LFHrVJGBggw63BVQBeBkx6KfNUb3Nn42p1HGyE3wqKRnwtz6DV7pHTD17uX4sksHrTPF7"
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
