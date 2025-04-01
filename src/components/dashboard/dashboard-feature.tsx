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
    "3XZUwvkYp4RCAwaZNQXZZuY2j2YeTPDyVAD6ZtoBaeLGcVeDMT62TMVLHDPA7Xok1KLJMsNJKqKNdeBm1zpCcC7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vETCqNeK5aw9hGgvkAKYqN3hMLbxxBxtJ72x2jcf73Ujbc8q5vC5L4ivxznXLsXQGWieAgJvLMqS1Rruss4ivKm",
  "key1": "29FMKpdcPKn36exvX4wXBRsH9yaKGxi63wZd4yr4aR661kMTEYQe8JtnzRvFGqtfUx8r91YMq2xYGK67Hb7Gjt1d",
  "key2": "55Tpak9oHFmTSPUbyZh5Q59konYufqbUXwtALNqo1KdYcmzsDscsXrtsK6LtHdp3BEU7m78Lp7roh81perdCBYy1",
  "key3": "5oZnG3JCGsehLNa7PpemDSZ4hd8bH22ramhfmzf91GwS6mXFoDRHCTmg92WbEWgWAwDjTdfTCcGbPXus4cbhyuNY",
  "key4": "4kFVw2hFUrmpKZmTWjY8GM5WPy5Tj1ixfKwwXaWZ3o1oYhSZsjGV4cxJkT2aJawZXZN54ypptLTBNT24LCaW3jKR",
  "key5": "2qrT1i2yZbzwvg2ABDrzzpdn9C4cTfnY5coovG4C9caLooBBT2YyD8VLqWk7vHkt7irW1pcUTUhzpNf95D5iQzaV",
  "key6": "424W9zRTJ5A24sRZR4DCM5rUSVTEPHjXydNv1MC6nKaktrgh7rWkES1cjpEU7iHFb7NQqESDmFuMyvszfbdLpsFw",
  "key7": "3yqnqxdGy9uvSmuyaV4XSVBzoEJ3SKNY3AwSWss7gst9JgghAGAcwM3XwcdTFQPzcjzzQk1n9UL8tDmY5tkpE6n5",
  "key8": "4zrAjb2wo1vpKGRfAbPDEUEkiNWZbqhH2X4J8PYfqCTA5zTe8KZyHzX2DRuTyAhUHG48RHEfqc2MwFF6RUnWX7rA",
  "key9": "2zTm3pGArb7H3J4c7MiisNp4UZUCU3F8ngMA8kxk7tgeh5cpx2PiDUfs9uosJvtNEyg3FUYBos4phaq7321eVqey",
  "key10": "3YYvRm2qQ8rqPTr4PRzVsrp9ayer2BeZvvjBheVrtg1iSYWhhpyFfeJTX7YzVvnXyRibFu12G6ArUiPjXsxfdkxj",
  "key11": "Zav6WZxkHVP4Z1AFs8wxboSRFVP9Ga6xvDfDiSFv4aBQh3bRzLKwcvKFbJeue2pe7DSvVAm7LbMQPx1qBT7MCAB",
  "key12": "xqZBA7woBztm3Y47RTYau3MN6XmuiGusv6u2cmrASGC6dWdkaHH3WQbzNYXKkbm6rQq867dReEneD4WYQX9xYmk",
  "key13": "5FKxaowzT88rAYmyxLsSdGN7WSNpsg3KbKPayZ5sAXESErYKydtmUEqsMa3yLMeacgEeKu78v9mpE81LpBCaiRHc",
  "key14": "SQqBDjFJJsTieEapZkgivAqKced9r1pytBcoXcdkgxHvzMLGT2eTM7mzTN3DRXTg99jKyq9U1BpwFa9Lm5EorUu",
  "key15": "4m5JPDkqW5vmLKV5r7qca6tqTUTQkwqcUNT4dpcApEdYoMHJa6iE5pLG1LMtZNchpNFvxEbC2VoqJ86DKYjHzB2J",
  "key16": "3E1eQDnEVsUjNjZBo8btXdV14BMfCZkCvRLpmDyopeVudppheTr8z9cCnmmEAv7wUr5wfbZ3Vz4vfn82N9kNsTfK",
  "key17": "3vN5bGETerSscvQ3o6kbmc59fPQoCiUikhn3RiQzL2P97HdB7fK5rcxDMc4yYrB8f7VnsNwqQMbGM6ET2i2jJCAg",
  "key18": "3mpDVvakMUUk8LX3VxHhe2ycMYo153wfw4yyMTpbd3ucY11uEoWncRC3fmnTGLrj4uAEXKzDdnx8Qavtt79hReE8",
  "key19": "5A3ahgWz4MoW8yriWr7ryfWFX2RNezcNA6xSEUWXDBZCDvFevUFt3VvicUfPhNtrSBLFiotTwu6gzAuExo2215os",
  "key20": "5xqo56d45J9TCxzidw5H3Pk8Et4YTCMV1MiwXUePN12bL8pxEGJE8YXh91xpeMGYz1LeGThQT4oZJJa8Py2o1EtZ",
  "key21": "2hp47zgomuruMRV3UmNiASzpJaAo4J5XNkNWp3rJ7LAP7V3FTWhsLZkYjTcTJPS2g1LAhjDqWakpsPhVC4YDNrV",
  "key22": "T2fZ4VGJpXDPAoKLAFjX1HZEjMiYv1AmMyUMRQ1CL5Eh7bdRgg1AcG5BHeeWso4QVtsQygUR78VvuhHHXkEH3pA",
  "key23": "2MPE7DjQHBzVmB6LTNMnd4mNELruSpY7rTWvWi7oxPdP12z3PSALAUuU1pnTmmMUtQE7JNZWErcgxQY53sVrKHZ7",
  "key24": "5PxZia33QAjKy23Z92hN9CuxDrz4h8LMdC2JhZszxCtQhQJy3tRu7qTCbXmDSPAmiBAGy3j9j4LgHLyx89BA4daG"
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
