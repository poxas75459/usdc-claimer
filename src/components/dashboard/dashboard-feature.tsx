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
    "3tk976PgYJAiBsnEn2g3pSZ73vLJxf7SpzZC379mZRBCZbeQmYu97MhtajEtFch3VbJSugsPEU8p33jhopF7adS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BAbqiZwS19BYeUK1WLHJZj3zf9bUZjJDB7MjFovfc2oZJam2BBSLpcg4UYtEEJK6EWufGnwo9SWuVGm9XFkHZXc",
  "key1": "3mRm66VoHKvM4euZ9RPTHKQeYHme7uJ6QvMtYtRsoEBKs6Jovt13vVXGvQM8CUJLQhSHEu82nY4rR6kLVoPgBdCa",
  "key2": "3vVZPiXdNghwfGyJtodWzdXRCApHZLqM8Hc1afjm3y411aU2nVZcuYqGiQevb4KwAVvqrpYhPKSaA6CftViUmah2",
  "key3": "58a366PYmpV6FdsrsMLYQLajfUGaqG2RPwJxTDXMx1sESh9SuSoMoPEuqnzoiSWPDJhwekiko4mEv7j4QvsrFMnf",
  "key4": "4e3fYyMHbcGq6DTyceyBUFzmgnb3GTnybz4HrgimbZNVkD6kxfkPCPJ9R859ycbC6EfqATFcRNmnGQvwDuK3JgqB",
  "key5": "45QRNYiNJVQZ6k8GyckJ3R8xHETKp4wJVKMK7ccSKnfoAwqpgcQRTe5GdU1C2LxPSDzWRFsABfykPNDjgbwPTDWV",
  "key6": "66fKJVrZT24vKUAyVs4RZ1kX97BqsxCQzGVo8DeZN9xWwjEnXFGfDh8Se84iLWB4HVQFznkbzrJbEzRFg7mgkbsA",
  "key7": "2SaG6UWHwXSMEdcsDceJqTV6LivDvScP8QkgJLUeRUFCd3WgT7DrdhX4t3QdqxRPGshtNSutNSvQsGbAiC98J1nW",
  "key8": "2MPYeQDN7tt1jkt43vvg8aX9srzHpRxmMq3ZuU6iZdVaFKXgLi2qkvvTFuMP4Kpmi5QMTRLY6j3knyG1ZbjmWTqY",
  "key9": "5HwadmNoyh997tNLV1mzrBGnKzpySVMK92CGmJRMunMpjZqe8pjMNyzhFnDLS8o5P3LF5Ht5LjH2JvqkGYksGha7",
  "key10": "4VijnVpDpGE8dcmHwwjrmCauEJ5sNNMJKFdEvoET4JNk19GVg3deWHvmEJAx9wo6SWH6vP66dbBJRZJV3eiDDtFt",
  "key11": "2CM3miZ3dCvizBtCYg5pV31hqyRFBafQUC485PwbE5XLVx6vGGtJA5hgbvh6o2raguyQyR939AU2kCFRQZyWeHYJ",
  "key12": "39M6hMSFUSdYcSswKsissQzMncdUrNKGydXQAW6QUQRL7idmbiYYEmrdtLdhcAp5EtxtZu2ZbhLppYrnkgkkvayb",
  "key13": "5d3BrCEFgje4bjK3pXnZmHB2aRH7J4EnGPLJ5jTWn1sTFm78a8ng96txthmRdtRocjMKpNjPeJ9Mr41ktVmw2Mj5",
  "key14": "5jvhp5uMZxan62gvX3J5AkKEHBwaSVQ9x7vmNEGwy5WMKKwWHNQUS76otipEqXCZ2unM1ELzVTopbnw3f6sybaww",
  "key15": "2ZZxjaZAmoeMK3WVZ592juC1XBpCy66zvpPdXkmRjwzS3w3EpTNzUDPVq3AQ3tkrAkSh5T37tQqH3iF5Ridfe9c6",
  "key16": "5hHtZGLQsokxwXXfabJ6c1x1vzfoQwqLpz8z4nscUf2SKsNv9P1C1cUTTUtqGtDkemLN9JdbmXqLNKaxzmqnnar3",
  "key17": "4J1TsDNFz9oRMCabRvLyhABuFK6P8vBQM8RQbBjTU5HEqv4RxvM1CuPgs1vBnZsJjV3QF2vqEsAtAj1n6cBbao5q",
  "key18": "4Pir6TQtqWXnzCXEjhZCxHMJP46AGjy3TjZB3rZPRCXXdw2jSqeK1Rq9i3HuRzv9pfK4buL661ZHAkotj2NGMC8t",
  "key19": "4wfE4AWoU1zNpqn4ToZurrifHYELWeaqSpiTPj1qVan5gSyjSY9mcZexsdopdtPPfcwG9xoXXg3r9yVqyEJBUQBo",
  "key20": "pBG15c8CvhaGMtZbz1JNPSn4fwn6hgmaRnPcqEzitFK39X9m6j6SiZNJ8R1VvpE4Wnzn8BpbEfZNUNvWEW6QvsP",
  "key21": "4f5LNFMVoGWA6SrHHFEc425TdoA7kCmqz1mUadeJ89s7Jd62XUKjJKweRE8VtRC1vrjW3ZFEwpsaE3XduXexjNAz",
  "key22": "LjcqPbb3Ju6k1qLHywyprYQLVWvLiy1SKdeG9MS8tXBiR5ELwDMXKULQaYQvpcaQYTmynA1qraRXcZgkki8ZXD3",
  "key23": "2e2HAAhqRnnaRDeLfHosdX4vyUee4yR12eSUM1qMZrvsUGMbM975dzGHSZkB1MVDcdQT3T2MKmNeZmJ4siVxVQ1Y",
  "key24": "4rm9VyAE1ewG2qooacqfJJU2mhuu9nU7zVFg6FPxB37D4jP7udPyDsdao46szgsW2Uv7Vey44xGYtmQk3Qbp4ogx",
  "key25": "i3SJ69wQfbAVW6sX6Hf56QXrKbft9z5QUrdYt8EApWwdmPadNPKV3fz4Bwug5pL5L8WkLYWb6w8cMv1dP57yh9y",
  "key26": "2MGPGgHJMKNHmRabamG9ZB1kk7ePnWaBK9Q8Zuw2QjECshgrxUpBQGCktX7xgs7b7jYsmKnrBj2oi2JtVdt7xVsJ",
  "key27": "2Vz5v7G7nci5Q1zUpu6e9UGXVtJjUKPZp342vAjQSMMrSYhB3GFp2vEeu7e7V12Lh2RzsZd8EXdzfX8WUMWPjrqV",
  "key28": "5KG1PhuuSHniM4ZfzrW9nDKBPFt8J9qB3vT4kArdAFEkqDF58zcaTw6vzEviqMB3jzwftgHg31mL6yabjWMMMUEc",
  "key29": "4v7j2BkS9Y4KE2rntTbqsmzLJUt8kAF3z6d44JiCCbAmhtHHVpyvYxq4jEMKn2bowqbCWU1rAzw52u8LJmAkTmKG",
  "key30": "2SPyFrqU7z6XaASqt6GJELhnJ5R14W82oANPsE6919LdAvUx8ztMDmg6G2GBmvC86JAAgxYyqkqpiZNPyvNJGoGo",
  "key31": "4SwCno14VMQ7i3BRqYc22oQ9eLh3RypAFiP3eAjfx2nKRpARDcZ5GprpUVAGRtArQzk4XTzdbQN2X3tSaAE1NS4G",
  "key32": "4BQmsyu41Jbk6Ha6yHmg1gUcbCvTSZ61HYeMiU8peyy2doEzVAk29euZB4WVM1XNvvsXyaWQyXc1wYVgr9o1cLga",
  "key33": "26ptouR4DGog3hmQqrUCad3ZivNoFvQf87i9iZjdfZwsidZ9hi9ikmfuGszTaEbUqcQNttXcU1dutYGC2mDTSsdV",
  "key34": "4C4Rk4oqGconZtnQxeV12PEat1ohxYBfCZiSzicpb5DxTvcw54wddDJsH3BgTqxD3vv9sz4LJmKj5FFNfoo4iuGR",
  "key35": "3oEyGrwmLK2W6yjMJZ5BeKTJK3xZjQCHrmBwiqi7ds3GYeMQuHQGAVEuw9QgFHkt4eKXfgdRDbLEERGWN9M3ossv",
  "key36": "82UiHaU744n5SfY7wdfe2tBtvmXigFDuRPo2MFMKvCcpSBkB2NrP98A4S3qHyMH1xhfvQUXEFQzHhTE9NEmbqta",
  "key37": "9NWpkDUJbnLCk84u1BCPbJWnrgBqznGCfJB39a9ZutGr5Rsukp4oJxb1bZ2hc6dAPGBe8rYARc6sr8sZGEbuQQw",
  "key38": "4dxA5Kc9JyKc99RW332dZrHPS7CV6V3jz5ep6TTVGnDkVqJptk7jEnr3RnnrDPKzPNKp3R5JeAF5uK983xzbA4uG",
  "key39": "4uZTCCwzSfH6FkVLeoV9PKMcXFSGkDyspsoMZ4B6VUBoN5imF8tExDUWz6Eb9e9UbqRYbHcLobsXzNsNvxiGEKFr",
  "key40": "zLjc8V3KM2YppmKVAUSe522wZELDsxsNAszPa5weD1EpgKHAviSX3bUvoptUDimComJ1Z4h1d9bXVzanGr8NdqE"
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
