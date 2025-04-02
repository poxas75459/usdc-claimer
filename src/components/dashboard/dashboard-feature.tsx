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
    "ZvBpVzVEMgkocMfA1pWohHHQvb78WwDPqXgoEiKD6pVsq1YWMMH7aXbYagGmA5XhmHWt1Xj2LTSMS8r6YMqhWoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ScCukjQTaAxAnZ3YrmUBmPEKv41mskrfgn33w3X6N7fQUaj87xf6DCm4qwjpU47pkj9rnKNKbxKSPttLNiUjNYh",
  "key1": "5PPe95rg8DbMF7YADChLVxQaRudwQY3uQXNWJHTm955Fgc65xyr2EaZERasPmaeTPLE5jAXDpQAu4kBVyCRgAg5K",
  "key2": "51qi2ewmcZd5K1ufAwSqdPSfTbBe715HxCzo4kbn5bjzwPhRFhTFD2Rmy3qS6vHXJGN8HmNPMWneqBtBvst3r1cF",
  "key3": "4HEEDQ17wKWKvoewKN4ig3kRdMt6x9sEG2oVU8zKZyx5bRhjggbXNnPQ77GHt9JbiiHBqRqxETXhFK7pmFch3Ktc",
  "key4": "a6yyyyCEcPuBJaJ1kRto2MhLyYHTKPF287W4EX6WYqhMQ5FVPr4QrGF58ijBBbQGMkaivYGuU6gZu3uPcV5GByB",
  "key5": "5xkhYuBbWVE14SrPLdaju5t53y9aEntJ66ctnvznyXP2qFbLdSntcaeKCaBJ4gzBR5UBhessqrhZfFAv5fGBqHnv",
  "key6": "3Zo7GRbixiCt1xPHHEskqbvuvg2D48yFaJNkDToj2CSiQfa3Vq7AgAAmKSaJWNXqPAXgS8fyBVjBeshMLks6nkyw",
  "key7": "3CfV1UM3eVVsg9YVZJYKVhhQWYGJzqUAJHug8QnBfJfQVLzqFuw8wHQ9dgt1utDf5yytAe9u2ycoXVAMtZhRHgyC",
  "key8": "5BwMy2JiTj7h6m4p6GVLFyhrkfH4Ybfcz1fV4z4nDyyEazHxFs5EHpFec1Zh9FQUK8gD9LTzNqp9g5632sFcwiBW",
  "key9": "2ee84bVCaXtd46uAtjhUvZLuNNBTtQAjYgAUD1bJrd5vU6FMiLat5vs9zo1h8grQyfDjYkm5piBcN2oF8ih8FPpe",
  "key10": "47ddrwMfr7SGnQL71JDXLiseqocENGcjpNFpxPqEqYgCaW32C7C2CngcExuVcWLTPJLZxU2Y3RirwegE4KD2yVuX",
  "key11": "3RJbxtxrncjquTRf6yuADDuEieW87BB5z9nZi4JJdzDFvoG1DxYPivdcqCwLQC2WkqNE3QsSfV7NysDYo1NM1K2F",
  "key12": "3sTs3RpCzVYG36mCs6Dxk1uHsjfL3onfm3dHaBFBoAwSzThizBmEH2RnLpWK3mfZmagnFg9dyH9AuQ3dPPXpBMSg",
  "key13": "uhKjReDmBqCGW62W9271n51FxqSy3TfhKJ6uMFF5rzvqEJkELkJHSnzarbKM5tit5adk4AUtEQLv4LE1cmfq7Em",
  "key14": "3Aw5V98whZ9ywLTKoB8a3gZgfZZHK2R5CSvbVciDdc1n7FEeuECHsV8gtX6QoKGCL1uQjqTSKoRMeL1JdYmPhcqB",
  "key15": "3z7hWKBBT6s7su1gPTDFnmTkEHdvGFHvUjXjiwsTsjUXRiAUYZqJdcMcurakGkuhcgPXx6sc6W6bSVrTbCt6sDbc",
  "key16": "3R5YQracfmgyLJDrh4cfWQh5ucfQZG2txG8HAZ9U381he197GusAtNyMAbVu5xGv7r9VDiHhPwCEyGzfvFP7LV74",
  "key17": "5wvCxppnKS95nzMCp4WqD81U3FSG5ajTy2A4ypdVUtHWRWm819Gr9Vi2uvWZcvyhsZuc9Bwi6TnJFQ6199u7dVc2",
  "key18": "5sKUDPzZB2A7pzFNtSPEJp1jgfTKCYRkgP9KeSKB1VJtQXn5TVeMPuZRR3aJXbkRWXHKiuvSEaCnFtn3hm6Ga2GR",
  "key19": "5NukLHh4jbV3gyZchGUsrTuFLZ83vRARhs22mUqLxQhZZZ4D5K4sN5anig6KemiyG5kiULquqqNy9kixrX9JvERZ",
  "key20": "mqyZEpSseGfDhGMLvCZ8Gi5sKnDzaCagNP8wc5eavDEXGhxuZAAVbx6WJdi357gqNRg3dM5EaWBtuD5tdb9iRGy",
  "key21": "232P7jf9oiu2ECU2u4CgCnUsJEPGkeXdzNNtSmRXkqiXoHn6LhCGdGTnxEGPHg2jc7xZSFBXP75RMFx7GjUxrAGx",
  "key22": "4FWv8cQeUPcyVm8LQQJesf216Au6vQ4rRpcQShy1R1tf6dJ5DUn7HNigEWtqSMMNYAXy8UqyqSCCnmQhJZT5j3Vw",
  "key23": "2Nx99Ho1Y3DhHqWdcJnT4bBwY1mPcF1fYSrq7rrW5RNY9ay3eqAXXM6X7KcD9sX9g29XwjRYaAs1cZRx2RuHYeaz",
  "key24": "2gqMoMovmBavUksDuBsjBnixuNFNhhPCQ5maDsXxkQNR7ZaqHawU6hAHHTT9zmbL6B3AEeKKXejHDiwNqRARjwmP",
  "key25": "31ShQH5MiieYywucxMb29HWE6JgxQGpo4ozV4WJGpmRyHfMXVuV3o3ZaKN8mfoW6sqNcGoxfDKZaeLRELbLEeuar",
  "key26": "4tmDsWuFcjDigC4Jsqe2BNTfddzobgvZUkC7ELuBHC6czYUhZBtuKsEatpqwU53G6fmKhSDzVTeTmQkzH24Ci4RB",
  "key27": "4grGS5udrG7rvVBVqweuY11iP9g9vVsieJ8SR3Vps2hCKMSQKrnyaQNVf8Xnek6gf2WZvEtFW2WiLMWaUu4uPN98",
  "key28": "3SCNYL1u2fpBQGYe1TpAcb7oA1oGJDAN6eq9f476EGfiMC7FjtjsPXsWfmpcGUvrFJ9UbDp8k7TT7dS75wuqbCP7",
  "key29": "gp4j9Sfk6YVqKq5NsW2Scmqi27AD66RrnQCycU7b9hohZBG9ZjQuohuB5Tm7XzQ4VryULPoiqQ5TsMFcAKXevqj"
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
