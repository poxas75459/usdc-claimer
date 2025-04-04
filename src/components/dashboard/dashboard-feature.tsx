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
    "GBbEcEeFaNy81y921DcXxkVDABEFdYjF5nipPUCqa16o2b6xdE7L5kbuNrTGmMnaeHK4ydHSoTeP74U37ihNNvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXSa4GG6wGJxNZebmZLF9PacBXba7G4ZehPdc3gi9MsAMxKu8E3Mw54NERwNQELnP71Cu6Cd652Emd3tXurRnt4",
  "key1": "rh9s4Riv8AXiPkh2VeEmVTNAU348AFxdGtx59WCykfxnGhaQ1WLKqqLC36kVKwJH4T1a3Kt5756ETXdxf96r5rN",
  "key2": "wg2cEjcerLEsuNnB6LfAY2HPgfv89ueqEEBPF9EAWztssQC67P9kLXhkeXk4XETJoLjjuVA5HJaGZjctUj7hyyD",
  "key3": "3Aq6FT2TsMV8K2BxftC1qZDCt8rqezeguTe9cMWFoEMW6CCevMrimYTqQWaHdr2aq6GVteYf4yMeb1JuvenR6fx",
  "key4": "yZmEZs6eUAZmCxJoSVoUux8h1JFrmuupRcYoVW4Ahe5x15Wqo5UqcUhzJaSjLb8JqNUMHrHEKJREach8HvXCaco",
  "key5": "3Kh5VXBescmbKRk9vBa3ZEurrqMQBdhdRB4yCDt5BJmG1sVzWMY2DtTQTdnq7nRi68RK3fFahtvvwTnuu69MyQ6q",
  "key6": "5LR5UrRtApGDpxyiapiK1FJVBXCXhef2FnbxUzdEWvNueYvVzvHZnv9W6RD3vbmXZteDmAQJP2ZWTAVd9GZUCsEB",
  "key7": "2RfKFj8wD6GUa1BEMmKLkaosnNbzb7ezb9QwmF2xJMpup1qT6TgTzedkcxBG7TaoSyCwht35UDgs2EUsHdrXLGBN",
  "key8": "5K2GBJeeS6it9KpTkRXY8Qnj4ccE9utdHz3x2QgChEgqrA4MxSxhdxyNWY5CcRSbj1tL1yPTzMxYGiu5fTC8SYW",
  "key9": "4559cXNezVxevbwg9qZDYJdmGxomJUoGC1TpPQ3Hdna4fin9jGrQfuZx2DdrsFKUYpc6fkt1MnJdNm1s9BbWkfZw",
  "key10": "33YuqxpKM4LSoWLQbnPhQssYpPfrtJEgFPu8p7NamiRjQDFQqWUZFNdJuhRx1V97Y2fqCYaKXoVLiUmdwL5pqQRZ",
  "key11": "3pLmcPo3tcqGKGSa25YY3q4bf7WJgwddb4qjd1kS3Bt89sdnjuboqTs2HK91KxDGfzdtTiRC7ASgFvBCTrEjRxui",
  "key12": "piMLhKu1LoHcdrC2XvJVCmSdX1mzjJbTSLf9itDRkfXi9FDCBKczmhXAgHSxBwCku5K5MBfpr2XMUcHrzuCGu7V",
  "key13": "4Ks1yBpveHoytRv7HoZU6uDDjLpbjyB1H8Te3uQ9bH31HABK1aQGjiSC3cPbaKp7pKUhK5JWYW4X5dAoxmbrSXAi",
  "key14": "4eiyTnQ2T9K9fM5fnZhjz5qnJxNSN85mJEsgYQePUBa4shQ1syZ6N35iAbXkBsCrB4AYZiDTcXX6yj3fSGLwUqHx",
  "key15": "3o4obEYFPM71H4mfkqo13U9LGx8aiSoYdTtyRZNmsFfsKjR1Ph6egdbrBBAujYYr2oEE65JR3q8ovyd3PTBZ1Ham",
  "key16": "W8aNosMEtLP9xdFUQbnxAcZAin7SziqNhsUzHrxYr4YTR6jCpKMyw6txzmew6AbJPFzPFH1fYPc8e2Z8DtV91aS",
  "key17": "SDBTEsT9oDXikzAXZo6W9xyZ1yK92dN1Y3rsXPccA1jxMh56YB7o7E7GQmVG5xCYuasaHaW4qLpuxyA76t9hppC",
  "key18": "3qKCtjNTqadR7fv3mGsBTecLQAiH77Ewy9eBLCt15H87GSfVQMEattTNf9tvhpzRCaNj9NRzW6AhMSFNB3SJYRBy",
  "key19": "4WrtzCrbxcGreBAxuxhy3AmnYMUz9Wz67PJ6b1Zt9H4Rtpixi8vHf61fzCTngrgFDnRSSb1pZEYpb1YNzLszcRmF",
  "key20": "3S3Kc7ySxVHBrWbiBp5BJjvvoBcikwM3KF7NUJ9a7849cQ9W6gi7NqoRT3ofWpxySQHniPqR8RR3k7tpwtk7tvJo",
  "key21": "3aWuAAwyKmrdqd3xFbekHA43iwGceCNW1cQehktZt3e9E8GXYNUdJNrTY3nXx8tgJk9behqpc8qtxAp5ozrz6SVB",
  "key22": "2Fuv5qa4mx6C23QuvcR9VHT8tfkL4D5Bvrsz9Pk6ndv5BS4aEgRLJQdUyHt3SPL8Guh9BrJ33xHBsuvo3FsRrQeP",
  "key23": "3KcKrLRWY6YX4HVhsJoMtBiwEZuHMazgTwf6m72U63Dyx3SHP4BVAAuwfWc9dgz8JGioFguP4u2RdtcLWm66dVm8",
  "key24": "TR4wVXDLwUPLEJobfebty6Zekwqh9LTBs5DYN6vdnR2nTEfuNesCE1Ws9ySubnoTuqnJpojzUxvcTveZBwFFBMS",
  "key25": "ZURQ8pEnuvydLhs6tw6N8tCKAoNoeaLays9wSqLcrv8skE44H7LZUMhezMRmNjZTNBZoxdNN71ZCxPuTco6Yw4Z",
  "key26": "j6iy5QgRobghtpJT28Mvq6rRe6KHE2Vyno1vFzyMLk1htT1uQnydWpZNqB1yUfxkYRJkeCFTMKKSuSzPwpHhxkf",
  "key27": "4KzddRUbAnfjAdpgpyrrZnVtgBAoNgqQT2U6MMWuaMVwMsWtDSRL5KPrTwodqUxzyAxjiHdPFnfC1wo46hwo381Y",
  "key28": "2ESz2d8TFbPfwwq3tamZyBhwq9KdSVhmUoapXcvTtMq96pEUiGG2DNpfYdweEFCqYykV1gGdLYo2LBF7ZMdfEBj7",
  "key29": "4CMRf4CMpQ74qXuwZAHfvJ9bPgBqQPpDMws4aQZ9iYuGNZP5GtBs3eQvZzyqoYibRY4GsDUyVNkXDVYgVyePinB2",
  "key30": "57WDLxc2CEBqs9Xc7LLg2qFqDz1HZy8EFU9QppphLBkTm8v9wrDchbq7PtCqzt9nhcujgduXs8Kkw3c9RPtDdtbx"
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
