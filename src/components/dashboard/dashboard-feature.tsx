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
    "4Xp6t3F1ScFqJD7HVdQoLjGpjFpcvAfZPo1595aPgVbSXXS5tnpYcu1Gcmd8v96E3yNQRvcC5ubvmoBZwKAevL5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QxoMPibE5wUMaNDCabUmFchCzdyi12Nu9s3G83zSMXoscAG8n5j1tai7HedyHcifPaMLqbdUDVLsPjH4Sq2jpJT",
  "key1": "4o6NAGyeQbewqjGtA3VSvZtVivJ3Njq39WYaT69e8NhNq4pBL9UcSfWDoduKM95odWDCkbgH3ikFC2Vvgpu6KAn3",
  "key2": "2T5AJzMeLPQe3bzMXedBFAaRGzjnKYWSfQp9gjJFGCHL3D9GACXEbPXv9tP5QicV1tdfhAUYThid3bf4fGwHphH3",
  "key3": "4JpjpbM5GdSP5EJB1P86rHAdmiDLsPZbKXS4g96mKzWkJx6KabnWrAiDQR6TRShuDs9xwGWW1faHFKxHVayqDpLe",
  "key4": "L5XGJrH29NH6fwcE6EnCtJNHnLGfrKsVzJ7LK2rG8e1wZiXzjbottwpMLZ2DijU4SewdNK9VBn26MZiazqroDbS",
  "key5": "4s3rRt3FLYV8wQBZpjAyoUmkyqogvjfodPLiXMx7hAbvsBbxM9LqDURfPJ3NTcpVYkT4NKSp3uLueS85ifpPW8Rs",
  "key6": "4hruS4VjqP4y8x2YKpZqfLrqSAPZNZDP5EPYkj7hcNv9vBWAkRKkMWLsz3fTs1PmTdbzKbw6ZQZSByb1PAhNTd2i",
  "key7": "5Xcw1chjkB63RATBGqrhquzdGbbRf7j1RRnQdTVdqqWE1eqs3tEtr1oY3mwY1pzW7hvCvmin4o8Yp68xokxf5oCU",
  "key8": "2rS1mmM8Y2WQ925DFhzCkVPmF9P7wNBa1SSskxTHK93k36dM9akqzegkYDU8BG8MfjAaAZYMj4F3Dfe4fY3yXF6b",
  "key9": "52wQ13uJVmgSbxPD3pMGvhfziYegDCEL4eBut3FrZWqFvc1H3xTdaRKjpfXVhvrpBPq3NU6WFEseHP5MDBYdnasN",
  "key10": "4rE8pzoAuv3688yK4DXBErKsk6hTHVJkFmZBnQvfq71B28EypPV3i7LDvEbnrN1Av5VmeXLHL7KwBJEkTQiMvikb",
  "key11": "2PZ9ZjoPD1xjNCqmLRHdXMJ4mP9M8nC7LKGPkzWgMmEv83HG2wtV4QzqmN2JT9JuYRomFy8kCdUhCSkLaPkq3K3u",
  "key12": "3cQvirATrFSBB8kyUjHvJTCC8tec9Ue4KmJ57EpxS151mnzUGffwh95kFWi5Be8j5n23gvcC6Ww8uWRGXALipBtB",
  "key13": "5T68ZSBDJKfoNYRN7MS4brw9ygbZF7zHK1Wp1jJz1v9iGS4xjhYZoGyXZJrE1WU5CF4LgjsjECjC1edcKmnrGv36",
  "key14": "5FawaLerxkbJRdi6nvhaowT6NqpVArgMQbn8Hco94EFGxZ1greHxFZtgwDCM16DwUYsqpQznsgaaBe3AhdhtTKv8",
  "key15": "2AuvNCa4CJiaUqp6FBQSeznjeonZJg2AzESKwHx2tgn4PdxmFyp7uU9sNDLrCSCyR7PU6iAJavaoJMg6zEFTn8Ge",
  "key16": "3A6SZjLiRFLJ2T87UzJnW6WMDKrWJwfaH8goWaHfLAkXqcsbps64NboggJ9TXpgcnrYhxRgZRmRYKrYwjT1oPq1u",
  "key17": "48P4ZDPGtCFNpWK2z7waKYLehVbhwUxrNLPWHLnCBu7aUDgiKZBwpBxjdcZRSsgWHyyTccpXaN7FNe2nw81wreB",
  "key18": "4KZYvQGbqEWXWZQCHNPuaqzeCfY6Vy6GQ1gzNKvaanQPWbF6h5s6gz4jzbYNVauacz3AgsifyyLZpUgSgR4Vi85T",
  "key19": "4AYuTYwoB2zAp7gzj4Fz1N295j5d3FD6K9tBYotRQEeoJKjAhJsHpVsHaGEC6f8WP7KmekqYu6nDRfkdHhH62ZqU",
  "key20": "2bhGx1MjXg3wqK9N6Hq8zE81CHpRZwowbp8cDVSoAeNk63qJZY4StFFM12c1vNRQrEUYX63rKupCsvAkmHUyXe9B",
  "key21": "RXJdoXQDP1X7aJuHXpDxKwSKNXga2GMYkGy8Cq7gCPp5ynbfjmUW2rvgSYChHpdbm17UYpLvKAxckqGRD7rvmPt",
  "key22": "5z27kMG2Q65rL6XaMUs7CF3tVPmGTBiHc8ftxsrASUUJKhj4PSXSgr6xWgsQzXz5NX6KiK88yzdxno2eim2NfyGG",
  "key23": "GXHfv2EesoaeFWLUzWRX9BTdqtLgtzi9irnZGNyjGni9Nox5r9Ya4eiz1Xs2msyhJr8YebLEAhuU1BwdBfrvetk",
  "key24": "5JbEA8pNiDUvwAyU9JiXbWZ5H1w5zNd1TD186yGCd1gM4aNTNJCAfyTRDgVmKvFxTSaGLnfEZATRxZdU7M6sRgWw",
  "key25": "4tSM6KsMo32MGPTZNigZRiFq9cEUauWc8BvtfHn1Md5tzFeiQn8LAQn1jjNQHZNaZNRnhMYEdC8n6WvN1FjjqhEg",
  "key26": "62CbghSgC2d1XsC3B2Y7LPNfXcUsVu7opCAhUqBPLWuqYyn3RQea6bU3qg3uA1joUgjrXpWoV5EYqinXkFwGrFA1",
  "key27": "4ryBMhi8d7YCJRGcWGC2D7Hyi5HvHp6V38mn7DmvCP9pXfa7kX1mt3u7Kbp37XzPrrrcJyb9VaHF3dkbZpbzGy1Z",
  "key28": "pqsGFdNCNVD8VvWhc5z1dgsuVmiXhjLBDVA2M4ses8PJMgu6HBryzuaNudeJCx9gj6xus4UooN2jsa5MAAT1XoQ",
  "key29": "3BJLgMoZiBBUXbaSkbmWzo1rTPxRJdKautQnPFW12CgH8JhUKjZNWiaQLh1Kh9YFSEUFGaNiKisJ2HNb18UJidwU",
  "key30": "NUT2N2EDdaTCzvm2CA2d6L9obWxoQ8SU2aMxNpdKu8RsAXDPG3mJzf2M4nFt9AZAZBjh548YMfSbV4KuwMmbUqS",
  "key31": "4iXW1gRVgeFZX6TMJbCrv5DuGgSD7PvUz3U4XyFuWyoXeoHKoEXEFiFDXBMt5tYLfwgZsbHbJ5y1k4ryV9a9vDzU",
  "key32": "25goPH5kCsnoMFFQVucsN83FAWiKxHZYyMotqZjsd2Urahwbbg5EUjCKuBsnEKz3ZBiSEbX2y6aD1LsyEZSxC5f3",
  "key33": "2Av5gKu6pj1e9ShYsNNpcrXsGyjHMGoq7kCg2NLmuoeorfoVmejmhFRkGQYswWrJTqYbbx1JiS9yHspRnXCsHnoH",
  "key34": "2SzybkaPRqan4vuo6GPwDbt1BJuLZ9qJauQZYtqWJKhcwUrmmMf769fDy7d8SXsRM5oGL77BgsKe3vko9icoHZAS",
  "key35": "25yQyTGfzPdVwtHYVyWRx42z19fR3vkauhkudaH1BpWaYYipv9c1dKvWvRubQPNHLWnHwfrmDNPq5xdEM5FWL8No",
  "key36": "4iMeNFmPYuGnV6tBdu5oPUojpZf2C3A7Z6BxcxsM6TCQxoa5hYLndBBsQwf8iN2pHs7QqxU6TeaoaCka4jVkb4HN"
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
