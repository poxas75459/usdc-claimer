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
    "33nS1ZNNRknm3SByjDwA6y8ojsgzcFWAiPftyo1d5YUBGemHNJhZS4jxuoUC17MrSvxeYJKNBJfFz9SSMtdWGwGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxhycQUgn7CSiyTn6BSWHTZkESAj4ZGd4HRLJhmrvXiZAtyN3Q9qH7TceHFnvYBuAkCYsu8e7cbb3jgWELaAe5u",
  "key1": "3watYdQcErd1ySVkaSStshargVtx22jXBFBRC6R7vEoTDHbs1Y6TfBBRtQYe4fnQao641jJE3tTjJBTUcCTNWjQa",
  "key2": "5wuGNW16X4W514kShtKEEd5KBBdxN4JYiJs3PKLaFanxeRf2whGUWSnN6HqqMRXHexBER8cFZccUYWkzrHN1HdYA",
  "key3": "66euRdvRGx5A7pVN4BLMJ4z9xaYtHesGwRfkMERtWoKrvGXyhRu4wT3zrv4zFUtr1MkY2WAVj664jgEZbFTMiZeK",
  "key4": "3QpF13Wjo8CBwnuuweCfPvApaiq9HDrKbah3hv7Y2Vv8S6XrDiuUERzfyNiofPfnr7TW3TE7hemfsTaVWX1QWUzV",
  "key5": "45qWuJKdY5kQk9HiNsB5MgvwGuTuN3DxN5LNbVQHQPE3y5EdvpRzfXg3zq6x3p9GhyT4kGELhU72W3AGff6CRESt",
  "key6": "3DgYKidT41Fhu7UUJwBFGAMRoSZ5MDvinVCPAG2Uoruyv3BAZVcwdk7G3A9iT1oK7x6fDzhqLc2V1B7NKvuV57Lx",
  "key7": "WDKmvWfkN7KxSxJ7zr3V3L38awxzmUCq1qH7TmJs12jEYQgAhaYKYmnnJVpM7jkjWPjLP5HE3vd9fZyxY88KEtw",
  "key8": "3XVVv6Xm2nFbyGJUWgXVZbyEnZQ7KXC8Z4NdzM46wLKwCceWatqpKK2WqQuA1rXVb14xrDfZhdRWS5JWsYXpHw4T",
  "key9": "54qkrKyPoaUyV9EKU9zEnPH4oa42kg2w26Y46FbKnbpayWwVGfWVRZkUCpptt72LyKv7WJsuNVdhQYe2pn4Y2wEe",
  "key10": "EzCckT6pzKyzUsK5FzG5siFyveZJagLLjfKpi81TtePJE6PEB1LsBqokz8QAPLU5rP5jihpG4vR3FcGzSMwN9Jx",
  "key11": "53369jTKsQVMyRZ6q3cK1mCLHafjRadE26VtTFfBxVPc7VScKTkTwrR5e5wCuA97DEbLEvj2SVcDzGcD9roCNYJT",
  "key12": "3vp9dkiF9UMxN2UxVAwbrTQMvnLqmmyM4h134892zJyNRY9TudfoeLkHGSjrStkgYzfFbRCEq8vUPD3NktTnuX6",
  "key13": "4EYiJdhpXBH8PqdUPCTgj9S5rfJZGQZFzZPcuqRhvW1ALtM4EYVw6bJ2LALexrLqz7EFMJEnKZkyHfu2biC3pLUU",
  "key14": "4Mj2JnubQdwUSQ5tmcRnxgUQ6YdmjSKYLqwHycsxAQiSra8uoQnj3Sux259aY8BgQJy91zxqqQxjZ38LcCs5Npzg",
  "key15": "3HnXGbgpAJiR6nHb316GUS587x6mvLj3GEK4VRv1Eb4qm67DERi5wddwkquHxTpNub1GbnNMLgkvorGPnC375bhg",
  "key16": "2dY5YJBeSdMuu4dzDfHXes2sA9h4X3LRWdGMnQnfRKmPqd5SoGnf9c98ShrnVxPtVKB1rVfJc61RgHeWTdwztxF3",
  "key17": "32hgefT4KQKDexfWp1cXapY4WVd6Y75MzkwDTLmrCaZjwhF7zhzHE95hkJnzfnE2ra8ZCnh5niAcD5DziAfXCNC6",
  "key18": "YDuZqmtokRcbt1WqmGrBMVeZFRpCcVwArDWZPYUYAtFi3x6djg4w6Ww7bgMrWwvepbsoGVpcaThQ4tUyW2WhdBK",
  "key19": "67AJFM5WTvmdMPQFTQ6Ec7wv9VJP3chvo4QqoVu9ighScrCSMmXLSpX8N3Qo8W8GANGsGUeHN2SYLbpyN588rwnv",
  "key20": "5RGYE7etctJJCf84mmKVbUwLzFLvsJqBXb4qtBYpmxYQFUykkFHArnNaVmiuzLBNZVEw1bdqQDHVGQ2XmwHUmghq",
  "key21": "52gia1gVGnE1iFR8TPue6CphzQ6FxaMtLbLqMT5Q9HEe27aFyc3ZH2Y2mdfCvAEkHkWqBjHaSMUVzvSrxfmSk1u8",
  "key22": "bm3o4roykCYw1P2AkyBq5QnbSQKJqeTvneJj5UvTTAFLn2CHMEj8qwDy6XB5VrBFXrEhZT2mMN3rVjYTQ8xecMa",
  "key23": "55cv1w9SUKF2zH25gDZnh6Xdj5c4NZbgfZraoYsDog7N43vaS26XDJF4LgDrCHMZ5sNeePzn1uUMDwcFaucabyWh",
  "key24": "NUrbLbNWiNaEisPsNVfhRS84ftJ9V5aYNQBLehLW8ZC4G87f9rosizwcPoPhVqzSftT5HzsPpEuXuGQ2uTtBUiz",
  "key25": "4aUiWzizJKqW1pXmyqQGw38fmMHCfNH4Phvnr9br7pUfQcYkEjp2XTLs3Vptx5xgF7Kn1AoYTzomUYnXDuvFTa7J",
  "key26": "3req5hT3wKrBMC2vUFiJxXvcJPxV4UXSYh3gEMLagdLjmfesaxn3gmzuNRxDyV9SthjTmw4CT7o5BbuH5WG6aA2X",
  "key27": "u2FDoRFiT5zZ1jeXGtE584wSrNC3hYL1p64QwVEGHUerZMY4L4AVootwZZYgS7SRMGt28Vxo6KyC31AHLyecnFt",
  "key28": "32Xsfjp4Wic3V2pXPbTk4iLzyovGhf22NWhfpwmWKpZz6e4AHxgTu7J9BSdvFZGCiX8tn74frX6E4YEE5ppSDFSU",
  "key29": "2KDbhY69qEvJbfG1154SYTGYJo9U1Zpg5TP9X4BJqQAcV7Jib6LmrknsLGqScRkBsN5KyBHAF9PqJwZ8NrPzxkKD",
  "key30": "5p85yhEBB66c7vGVtTZxLqeMLsff6WSUrJUoevAd4Ny6QetB6gTXE1iah6PsEGGESZXuycDcuLQMa7UbmuiVt22X",
  "key31": "2PzjQfNShN879zNCD51neHA3R35bL9QzPQpoqrKRbqcx3KfMjGAsJ3RTLtXBSruZWoVUPbaWLMRB6Np7db8phTQt",
  "key32": "4UpZ8Z4nQViXdHtJeriC2p1Kx4WG5YS4jWyZyJ2Bpby9CxwxCE3nRsjFck7fgQj4MD6xAB8ENMauPmh2fdJtnZaY",
  "key33": "44Pxrbsmh4k3RhvhsJT4QghthyjYMCFrQSjAvHBx8YeS4cTukAkvjhxJQJqyQCMscxxChpJz3x2rB3GVL5moiLNp",
  "key34": "3vq4efNtcvadcRWCcFDxu4sttfgAbFzja3eHb9ZKzZBEEeC5ztGfa4cTErE1ABQTzgSb99HkAjhwsjMWUM3Enq6k",
  "key35": "2zgAMvwerCQJ4ZZisyo6aNfqcQrx6b6k4G4d5SiUbkZxpJdX2hxdBkaSd1vS5BMZKTSQoVXSXr9cktRuB6EphfXW",
  "key36": "5osWzCicciojQ273SX5kDzz7UAxUwsbmFH9dBvu6HxXCmEHF5v1Hy7hq69mNXc8NSWEM7SsSduqHpWjceQ3qR6B5",
  "key37": "4ac8dtAAnmzYoGRP2EsMFz5BDmJp9mjEpCuGBYWKGscjtEtouzZfMkBmDVAYExVqWrgdreTnX9Hxcn4Ltq6d7JYQ",
  "key38": "4K7uRDbajWjt1PJA7ReHyzyjxr4PUA9kBgcKPpcdSmwKHvGhyWjjmXhz9RY1Anw5sbiS2PPKKisQHPJRuLBDfep1",
  "key39": "67GhZGSoLQBzs7hj97zvbCERgKaKGJuEWBTts7e2SAx2633SsVJqyFyPmDff3o55M46tweirpr2tB8EVBTgZFk92",
  "key40": "2VStFFUAW5uDmmbzGEqP61qWBLhtewneJSPkkjWf9ePgk5cVveZ2ycfqYGor1KDQJeah7WJCD7DhAP9tyAcaFujQ"
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
