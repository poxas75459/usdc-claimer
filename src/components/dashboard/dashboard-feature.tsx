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
    "49mKfHhqdHv7qzQrVVRUofQDqdh6t8rjNNCbciXTvGk7hLnGdxKEUhjcL41keNHUAb9DDJG5Zp7CtfMXir5NGzZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qnNDCiorfYtGj2t4ciWdmw7FyStVpASpSeCbUmGVqSLGy1NPGBevvf9pow86f9N7Cqjou48rTtvp4UxFuqwSULx",
  "key1": "5w86Dx8q7BMXVhHP3H6tBrESkh7HVBREdhKGKHzbfqju44CxDiuXumkztLgqi7xbDyaNmNtgaDXobGz9jfqChwkq",
  "key2": "3V429VsPL1DEHKjfUPCzFZ2cjKzvVgbTMWKJaTVaXN3izUYrqQauNdFjYAVB6w1gAs897FHRpZ97Yn9CsCAV35LQ",
  "key3": "5CLA5Zft6AjuXZqciEZrw3UKLcynx8QJxRPsf7dhAK1rc36QG57gJXgupCb8tbW9tgtNKsXBfiNJy866EqzASKh3",
  "key4": "PsaCB12CyCU5KW2spDM1hMUnmpxeUiKsdRJuDMmHiU4m3BqZZNyxYMd9HEbJy1DzwibLq71Szqonixmsgdafbkw",
  "key5": "T7EpN7B9s3Q22HKw3BVCmJvwFjAF8irrfZ6Eb6TWUNBBfF7FdUNoi3YxxUstxwpyoPFnNpauUquqnR8nUsYjmTM",
  "key6": "aKXMVyTNU8QnoD4E4TrvZgq6irSdDNaP7YrPFragd6hoU6UB2S1sS9fihGe5h6MV6o79zctsZ6nCKbQPXnBgLwL",
  "key7": "3AQ3wwHmgdX4yKHm4CX12DgBgdErJRYHtWJdsFKHF1Pe6x2YjabJKvLT4hG9nsRj76PxWJMnGkmDWa8ayvktLPcT",
  "key8": "4FgcfbftnHx4X4MoGNhMD2wBiqV8GgF3t6YD7qGFYxdubzDQyMEcUYMVvfaa4riP5KnttDdosRegVNfejBK4Ug4W",
  "key9": "2pVBDMv2vvppcLSPZKZgqBLsxaqBNsLfZRAWXuNrtzMWs9C2o6XwLXN9UaPZFA1CmVoR2Dixm4cNShot9ZU8LrBz",
  "key10": "3hd9vXZXoh6k8Wy7DghgNePrK28Z94LkZaxYrHXN7RKdCpVXJXq2Kjy3KHnMGpZsLgqfekhsRMjwMqFZ8iLmhehn",
  "key11": "4jqniUX7HxCqoe8JHK4YSVYXV8wzKwAAbaY3puvJWdUwCgBuaYMrupcTgyCQrVuUiM6ga76CebjmJLQSveYrmH4U",
  "key12": "YQwURxeYiJ8Nn4fZ4LkUb1qtDrvv1Ev3v6bCimpyoTZX2x1WZZP2q4rE5zqb7DDG3sbNWVQyNLwTE34KE6RYXee",
  "key13": "4mAhxKnd9ypbdmRrJ64yi1veBdPEDYJG7x1ns1cYCrnmY3tfQ831i7FEjFgzVqScrcPMWuJKFCCtUU7sNHsNMynV",
  "key14": "5zaFuh8Qu7DyR7RNXZPmnnFTueViMGJZzFJuHAsLA1smQuCAd5QkjsFM6M7nHugwsTYA8CkLDSDvdPsx8K6Dj1L5",
  "key15": "28KGMvorkChuHXVGcvDfizyZjv9zJdnmy6xLjybNHSScS9rbfyiSmTUAQvGXkGbDk4ubLoK9cQhoddEGcWBEimvp",
  "key16": "3sZzFAB5mAgNCXNBayNd5Rjn8p6wGVcRw1r8TmgD6BtgNKbSEzyPMGyfwFWpST5WUsbKfy1bxNTTT1P8cWwpgSpR",
  "key17": "4Dsc93PyJH394eqH9erYtuXWDr6fRE2mD9pxQ4SqT6xKPhQAxqEsBfBz2gPSKfVvVB5fJYaTZA1dyMgM5GzcmPib",
  "key18": "22wxobsqTYZ2JXhf3HfsV8AhF7PERsTsFDKac1iDgeo8BDKkseDJt3xAkyoQFif9dpHwiGELLKuG5NKtvQAX17jN",
  "key19": "pQ7u5tUQrwTdQwg5vUJSRotodN8jEJGWJ7TiHhpxdoqPFBi5roRRehHz5SxiZVB6LWEYZt3qdkeJeRf7Xg74uJ1",
  "key20": "54pjnXRustwGeoLS68Z38vaQfLZrmzGn8w7B5SmZV13yxAAKQ4xTREXkvHuzaDbZ3A4oY5pzMU79Kx5p9i6Agp2P",
  "key21": "jMhwTBmLJeVo1Lv68HfFBooyUPjKmaDhdqyuQH8NbrC46x9zuWveQ95b5P4PFQkpwMJp9kepV1sfA7FJdBHJEQs",
  "key22": "x54zy32GeR5gbSs3neak3F5R75DpNLfTVapCQ35z2CG5xNnSnKazaR6Z6JNTp4bSFcThaERCTmRfh8FmU57suHF",
  "key23": "3keBXQ7QMvwZEf4JTKPiiqfWB5QAdbAvKUjA1AKf3NYx2UvwwURVnRb21V6p51FaCrCyCj33a3KK3xyfARNY1rtV",
  "key24": "zYaV2cxkP4is18HPnevjvAGHupGxPXDNEkpvG9uxDd5soRYDFFWymZ4pAiQZtKAKgqWPosec1x9iPFVQSCL4E68",
  "key25": "5mZ6Di8oPuWvYpBq9TiqVnafySe11sw7YJSKTkfYAUX6AfzV5Nyqa1AFB2wwKHC74TMFG9ZwSfzE2vufTDqndGBB",
  "key26": "4j73rfEjzZUi9YdomZSenoyJmAyu8GXFP2cNXCKnGuBRBPxdjuGKekAs1fbmqyUcWdZxZm4EyZd2U3kETqasQjoE",
  "key27": "3FTtajym6x4Q7nGWLHVWgX7VAfVW7iafpnqMzC75gPqRRo9pTnJYBCC4oSFmhwBeKXvhXAwBCWPZuWarQMdRWAEv"
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
