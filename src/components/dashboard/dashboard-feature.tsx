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
    "Xk5rmaGHoWrhKQhPAzp4NmrdCaC7kqPfd7SQXdxi9vLTejor9TAYfKbS4xzbS4hp1ezN2TTvRQRuVkjZEyHT42U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUTN3aDrDysUKQCWc2yrfQthsYjzMJnDYZRsg7j9u9DzzqNm5QDdiwC7nR1EdwuqLSjhgNe9YEfTwEwp6UQ99Lo",
  "key1": "5jCCg1cQC2HQJv5UFBhfoMNXxBZz45GTJL7yh15irnRu4vE7ANajEifYH7waAMscGgRDcUi7uKEFDrhNaJiXWzME",
  "key2": "4QcQWZ6gkfDzh3ZdoyAPNy3v1ZdXafezDfY1AaP7p3Sub7GF73N2wQBdAyCJFZyXUyPSoup6As4nGtVUVbgPetWe",
  "key3": "35mjX5JQWkgFBthEefz4RvqvEHjiP5zebRTth1V3nywguG9k9Yy7xS2r5jyvasZUTqqhByPuZRixz1agkdc3T7Sh",
  "key4": "Njwb4VzkusGSw7QUVUNgnGbKmenCeNtKxQAWK1wS4ruyvUScZ6sP4k7cAmoybwC9vDzdrCD47CPTMbE57LjYRXh",
  "key5": "GZCdv1ZD7bv9FWwmiYMwEvziimgqQuNY4UfsdgthxyD5RTkrbvq83v8qaDAVWVFRE5K96nqJfeiLGTKAiHF4jhR",
  "key6": "qhj3JZHonbeadqacTgzHq6KMckFKf96tkHs4qPw4hHR1hBs7puMfAJx7Vhg8VgyZGDXDGaGUSTiDYjAsibtFoee",
  "key7": "LYKUdFBGynWvACfBTERgfCW8iCjmicbqoe1WHy6m5hA2kTNGgGSC8TJq5qXiVxEN7X6KgFAfgsCX2XW3fJmWEZL",
  "key8": "2h4CCKxgiawqq7Py8MqyjTxb4ZrnEnhnamJKB6B1MpKdBiPcYwp9EmGVURJJowuoEeF5c4bq5gHNs4FG2nqQVnqw",
  "key9": "31cf3H3UBSSyKgcyY42Mya2Gh7aoi9sNiyrj2JC5EACu9ejWSy2qmypnB1n8mnqVx8pDgGg2eGmBULHi8kmq2znY",
  "key10": "2E9MhBKEQthNrbbdrJpzJNFrgyfSm27gxz9qVULpNvJtzbqAzPr214VjW4ov5FqUtR4iEwZGHf4j4zTLwHtPmPFY",
  "key11": "4KYAod91NomsSuKJcXWbBKRJqiKC95y81RkCbVT3PUcj2eD6BxWdsXDMbGw3zYGNheSLQ5cPqHhS68RECRA1en3F",
  "key12": "3i6qZcUAT7UcD21zcFXtfTSQGy13chFEJKhHk3JbWrJsGmV18RhQLvLfBUkEUQvppkQViFizB1iSn5xTTvS5XzJx",
  "key13": "4cQHVN8fnDiPMLvW2TuacCwny4KkMaHoNqVgLtqbLzR9JP3si759uNUK6Jt63NJYBCsvNTCptWjsaXSfvnwtJv4m",
  "key14": "5m672cH2ikK544R4tu9yrKLzMrpExRU1HhkSkKbB5uSCtVFFYEs2t8G2DszbwNvSnm3xqBgEsHexgowCM3F5uQwq",
  "key15": "5NZHPa6VsYQA31atxecR9AW9eqL13ckVKGpU522CXNdZFP9TXzG6meN9M1dLaCYLWj16oCXbjHS5i9GDLA8D7CmB",
  "key16": "4L3U6azoo5ZBZd9KUPgq2eMriZvJxT9FcRhAqomu5VwribCtCsdTYPniXaCxUJ6BZAf8CCeTrJMyLrczgCdeRoJy",
  "key17": "tWWBadW8vCwGffHgr4GAXGtxVbpva5qN8RaaLjmSPaxQvt87jp2E11Zbjo9XM9UYcu97f2CGyDMeHi8trT3p17j",
  "key18": "wMd6HuNCEuy4qNG9yAVvmjAqE164JsLTFw6U2KN8Jnh3d6BSH2sHYzYq1Xhyr3BE6s1u4LAtB4z3X8Wudd7pjrF",
  "key19": "5dTzE34cvAoA6adKHVZxT89oqyPhnuw9L81NE1r13KEYjUkPwSCDpvAscPywGFwUDGBQCuXznTnU22WoEAkWgso2",
  "key20": "5d9cCifxU8iRB4dgPieMTjkqetB3ajfxhj54WmTzCPpCNfLEQSnXLU44mnn3UwrrJgKNazhvCzFjKh9oDt9PQgig",
  "key21": "yreg5mb2kXxqzMFtUv2A4cWvZ3Vc9KYNoXM9BHnwevGWAXFavaeryNWx6X9PprsnsFwZaMPDj2ABBnqRUSogPsj",
  "key22": "EhXFTDbMa1NnCtZ1ovqC1ViExhKrq8FWNZCHtDfJGvsu7kEvQiPAtYGSqh3K6CVDJ8wSE1ufrYd9h8aK1q5mdzR",
  "key23": "2EBxXydQB6TvWUiW63j7iRUHns4AnpCNbo8Uo8uRarU3w4BwbbmCMu3LnZJefFkBm6xQzg5tSZ5jLSqgysb6MNP3",
  "key24": "32jRR39yMefhxdyAd2FMuXwjWt9eBGvV3krUaqW2eH7SAQiHYgneAeNPrRSP36K9Wh4dGHw745FqLuiBLLyQYpV4",
  "key25": "4sHayVD5L5u9A1DynABpkvCSfNEUVypDC5HAy24ytiLfH7UD1EnYgjHeZxmiL8p5UkFwEYPNdNgr2TNyW9L3AhhP",
  "key26": "5ChuUwQE4bihMahxSkR9UsR89CyQ6F7PrBd5Gu95wNyC2zp8ZFKZWCxjXzwprJunrFFH94iKhJjrAHo5H7JLaFWg"
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
