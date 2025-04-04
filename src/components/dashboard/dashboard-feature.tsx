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
    "3wK84hbjes8dxgwy8cs2NzvCdpN2z7JpsLxV1exDwFDvQWASe34BhWrHQeEda7ijE2PCZE2SAZanKfgbnMDFiFEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWdBZcYyEF8WsFbZwX9uas3CEb4D8u9gP5PMVehhkfD5RGr1GZqHnEPBXHPb2F2iAhMMkJGCtsnw3meR9cnTtnw",
  "key1": "63aqxo3zuX9dakUraqHEK6Li348MFNEaFBmmcJhzv82oLdVbBWHYoSe5AzrDDQpmTw8DitESxo1cduCuWeZ8tGDs",
  "key2": "3x3T6w3at75YxeZuaFcoayeapC7bn1HRvnMjtghJp9sgQrFD2xvDYrKKNYozaVHzjvgBNSM4r7RvQdpCDj7g98yS",
  "key3": "4itExZx8TqFfJCxtaQ3xzaaL2EwKkBuxdBbHed7ZxFTQM5QnAaAkq6tdHmPQM5wyuz1QSA6ZB6C9ECG1ikbSGXbs",
  "key4": "4ApRyx9bSQ1mv6rUdJJ7j6c32of8t2VncNQHTaCc1RaVdpey4QfBsayNBCaHdPgZc9Vxp232ir5Hi8pyUEdHtaBg",
  "key5": "4HDGkz8QRssQCZSyx27wAe3ZwXQY4sKP9HA4PdUHoEsyRU2GfnYgmfhDW2t9bxCtUt1M4zozV8KvB4quk7FchoYi",
  "key6": "UYZumT7x1PoPmsVPyU4M8ypY4Ed6x6NApX5uzXpFNhYqPSuSDMZmLPg9TeWssdxT3DurHHDYyzgxbBfryhjzazw",
  "key7": "yNoh5mFHnRZboBs26g4HhEBfqzhXbLaBgP2NovaqJEkCyBZnHeTLjaZsfRPpRka8gbQc3fde86Zr4YpEyJnUMoe",
  "key8": "C7VoirCyFKaURBXC3HozCDr5mSBKmWZGZ9nxuZYjVULKNDnGXust1TZ5wjwHqVGiW9U1YTomYVUvqw8uyw3mMxF",
  "key9": "2SP5yFMgnNBdJjahqM4KvRdPq29yCFsdGZ8XFRrY9QNyrckx67Wf7ezGp7m41KED1eby9LSKpxj3Ns2RJcmWQcNo",
  "key10": "2Tp3BGVNSzzv2Vn2SDYfBjaRn5jWVsGpcnHqD1RCu7fhpwKcpf36vdZJQKJE8Zn6JtK1hxGRRnGXfqh7p3xLpGPk",
  "key11": "5uQsYbSfpdizLGjYL28uiZnt2SWXHS636P2KYkD1xXdirqPTzbdRpygQdmAfVA3UW9dqHmc23HukMwC4twMmUJXH",
  "key12": "2fYTi9jtRbeXNJHBrAg7YqkiNQe9FW3sCn3WajfXbR6mEWsY2XBQMu6imobUXEVWpY9dyfoia7NCcR3Y3n42FbZZ",
  "key13": "4g1r6kP6HRDD5HGatSnzW8Ek7QKYtf2HXqj66HhBaxdYzpKDw448kRuTW5XnHEwoYqw95W34rUy9VHi7QmnW92YZ",
  "key14": "4BNMKmgCH5GbgrJaozNwEssAujT5QE7kbX6j21YXdxBM6iUApuvPnmyPMeupzJ2ni31wwfsvmtcKS2jiBqDSq51u",
  "key15": "x5SGehTC7g5pPtsuvEvenhN65tdK2PLEJa8Yj7L4UKGCRTVHdMpoxDCPeECetQTkUY4jiM8N3roMQfpgXENM7Mk",
  "key16": "JVxCy3Mp4KWCwYikzA146jQ9ugXWnaKASRz9VKxGzzhR6VnW8cXHR2tGycDaUhRdb6JbQwcaPPhvuDsX22JNJTV",
  "key17": "247w46G1sf41RUWKUARGRcFHUxvoUUhLZRDjXhU5gyWywwF3Dr1GVDEt5MWWMQ6LARTgZawyegAtE9TSLpZn8ftz",
  "key18": "UKKf63yZhUQ6iTbqcduA4uUC4pkPtmzwhzEJMaru4gyg3oPB6R5FvQdX3dy8zAQuKKfrMvHXdpT9toaYn5MH2dp",
  "key19": "5gWPzv53v8CshJafWd51bCmoMi4AffYsmhNN6SSH1YtJyeQMFdk4xtiUkXRaafdQBmBRa88sN8zfc3ACKCWYQ6AP",
  "key20": "5dR4UXH9ia6jdfEzQbaju8mfhmu5GK9Q4ZjDKfs3MASzXbLxA9Wa5qYm3PYsbft4mmpWiQFFoY1ioG8HtYjspESu",
  "key21": "4bZyk9B1mzt8xvUGu8XeCMN32GqJ9HJ8KEg5d2tBSMroJJ65dGq7TefJy6fPg28RVXfkwurxCfhnfZ9XvDEynASr",
  "key22": "39EEzZ8JGkvZUPxQaker2La9eQVjEok8smYw9482uTk9Nmi9b74mgiYaVKrRbi7KZJ6UtR5NDhHvabRNN7YbbrGy",
  "key23": "rfr9C45BQbH9HmQyCgYtmShB7uYDeB66Tgf6KkUY4ADj9oJXdsmMqRCp8QoxsJvYPVqnb7navumocqnbxc5hcmB",
  "key24": "44kAkB94ha7daquQUcXYRhJAPLxjJCYWzJKuV1Su2NJbmfq3yEWeYd4ARfQvfnzpcb3tM8bDLfjKTU54BKZJYVxh",
  "key25": "2kJ4o12LWecBfSdSVL9HSN3x8QQYDW22pEi5fUmAoxNW3AaRyhnnQQyBK9c7PGGA1g863U8KBYhiRTFJdX54QVeP",
  "key26": "4zYDwzMrbajjCRsrTwqNsozsZEE2QLnNYnmoKp6sEdhEUViWKMCUTfGvtHZ8hCd82tcYkfrdqKaVtSK33TuRfjBa",
  "key27": "3JuXtJB56Ha2QaF4ByCRNuWVGZ53pPB6Hk17YS3KYo4wx7tjTBGiPDz23st83FBG5Zy1vEmcM951X6ytca1jcDRJ",
  "key28": "CF6Za9UmGdxAEbknyA1DrRpo6f456TV4oWVU5LvPHa1Er6ZyAqphPFdCiM7sZJysEqypcMtoe6vrPprVegpZcXj",
  "key29": "5moatgRwZCsv5MTsLEq8sWs2P5nCgSKLgjcoLASr9pgNgwvcRcV58kSVmY8dcti26gX4j2qHVRH2UkfsN12NNBCE",
  "key30": "cD9oC9JS3mz3h4oNh1MSYfg4ZQVbvQexztkSGyCEmphS9UCg1qrB2cebEZoPdA8E6cjHaoLHrGKkyNiZnf1gtNr"
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
