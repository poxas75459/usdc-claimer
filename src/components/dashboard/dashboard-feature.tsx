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
    "MD5Ss7g72Va6BSxCmSCELAZpoPqxXEF1bmHTeqo8feGxuqsWXVp7dd4G1zt1MR9LBtr2bQxbrm4vkW8V6VVt6Dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RxCNXgV3AN7bG7UXwZSWqGVcjGzQTqf1J7x9EEA23vjroBNNswWWiAdiLEUwrFj2i2PikYmHzxfVtkfiYUgRyo",
  "key1": "3M9hYy7rs8fUnsi411x96muC1sGXhLm51MRX67cdNTdMqZTrQGVWfzZ3pa8kvWPctpQXgkgJWkg2zzRJdbK2NFU2",
  "key2": "2BLwBn2y96YExCGSk7k3d1K6ry9X3HLwYuj79ECTA9ejBLrF3CXTLGA8PDFgBjnCmEqixWb5ZB43Krf5ypC5J2CK",
  "key3": "LPWVwZY1CmBkQu9nUiVjU2YfJ6edoDzybuETYE4er112nCZjRGbYsudYNdky6xUuv3XRXq6A6cwXdC71h49UuJS",
  "key4": "q3HA7QqEqe1vGfmv5i7XpQEbQ4ZsDLBYkYNaz69z1KwyoG9S2KZNwBVJSqf4bjbvQRfKbeehVyRUry9hSEwksd5",
  "key5": "5tcDz9PGA7nZxKBrV1K9eF9xbPPQ4BEyLUbTd93yy7n5RSq8uMKNFd9DxgRDFUC9DoRrbqjj3eJpD9SRJecFNPkA",
  "key6": "3Cg63nEPZUmDtk92rQrQYTtifmSm3UrCYuxVi8PsmpP2UaapoesG78vZBjjaN8P4eZwdfkL5hkfqWgnfRkxkvXbH",
  "key7": "31yiDpeaVoMAeaNjhXpfi6rUT6LvrgYm6AC3PUKr4GXQDYyz3F2RGyo1S6B39D3qyKM4h7nbmmXi26zhvmnuy2og",
  "key8": "2Q1capzqhfU6sgK8sBK7awTeVYiBEg8bcwe4B2ujBw65GMRoBLKhHAGdBUT1MdaCF5vEsGEghoVU4DChEhwTW6b1",
  "key9": "61J8rKbdSsok9F3BGvyppjEmqxDUJEmV3TPTp3CxvjcMShhoBNWayJ7ku889eZ7GG5ZCaG9oRXeCXG337TJ42fjf",
  "key10": "5JYnJJPKpFssMXyNZFE3poyV28baL2hRnMMVGewEpcL3DKwth5i6iHuQaUvUDm1jzxR4DV6zPS5tRwMzq3b8rDJ",
  "key11": "5Q1kQpJoztg7pm9iv9o36o5QrJwdvMJTQFB5pAgybUYbu1Fhtp8aEepZp5iAjCWmNcEq5Sn5hgBbueUs2A4y4hoF",
  "key12": "3ZUAz17hyHvhpNXQR7rnjUVEXt9R6rzE84SJgtYsfnPntLNSXCYn3Fa77mqGBRa5sqz6KVU1h8ZsHWMWX6Kiskbj",
  "key13": "B1ueV7g1Eeco1JegmnzK191C3oiC3f1s25MrRJbrJG4vozrNZ6H8o683y3zT1mQ7MtFE3DLBGXp5nprYZqv8tmL",
  "key14": "5SB2rZB394UevLrLx27Ak2VE8TxSx2dQGx5EhfERMxVWioLfgDSVET1S4wSvqBiMW3CN77Zu8n9KrNpWKRc1g8rr",
  "key15": "4DqkDpEsAKjmd6DAujr9tNZMmMxe8RLexQDHn3a32aM8dAqo6WmxFnqJaBv4mqRQy3XCyZqCi5Wkq4S4cziAYHfX",
  "key16": "WkCTRYbA9Rxk8W1FF2pAx1sqBSFXGxdaT1g6oXEvvYtnP8b5NPSS4q2iczCyJ2q7jrqWgQnDC7w7GHdSLBvmX5s",
  "key17": "V1VVy6xJ3n1myY3BDPrvyMk8HjuJgjbMdCWtN6j7J8CFENoC9kva8n45xNGUrbYgDLtbjmCLhsrz4Y625SXWV9Z",
  "key18": "Kb5SPGFpncrv8dC5ZSavBg6qhpFxsADXzWYznBaQKEZ2M9G6QCBWW57UQY4UYrcLXvVJcRZmQpZmEqHrPwKetB3",
  "key19": "3cwymphwSCGt5StbfKhsPkAxMy3tcWVjq8cxmXm593WAmR1dsQmqvbcyXPLGtzgu7swNZHjmvQjocTRR1ps3jpX9",
  "key20": "5EamyuDZ5YR4zwxTaRRAXMCnTCQhx9MTwh5oqXzU58vgHQcXDNe5ERw1WD4d6t1Gopo2AsuHd9QM291rs4oNzbHn",
  "key21": "545oQJv4bgDgq9CRYTCcC8X9rTzWZFt2eSLEZSeCrZC98RX9a8wEB2it91iHeNsoYwFh1FGQba3MGnQ5KYaDEXBk",
  "key22": "4vBrzqrYFX4jemduhqQvEcYBywDhdfqBXdSTxAf888ndg7X5ZQsArN7goRrcCZGqJqdJjHsZnvEXokBBVFXJnKNA",
  "key23": "4CqY58n6vWv7F98zvTSsushVZVKG7gfgu4YtMZeqz9QyGtE2ddB6XTpBUEFWqaXhXdxvKvk9VfqTKtYZEHygi4Uc",
  "key24": "3mcu2iHGQe9wvihjjS47tS1L2sJjK9RZZedPg3Jqw7Trurzs2XwWJB7tR91NyhDH4sErwqy4MXWJxVKGZ2YvtTjQ",
  "key25": "2N7spfueqavdxy1SYXvG1ZydmZUFHhKKH8m7omYCZDNRvaQ2DXFZsfuLnqXNGHYh4YS1EJxeAySq4rR3dHAn6w6g",
  "key26": "3ZQjKWvacGHKVzuXL6F1WiB8wUoh6FzkYmPaGVuRVvRwm56P59sTyKjpEGLiVYC1zThDUBJ1JASFKKS5dL71eEko",
  "key27": "5Rtjd5JdHMGW6L6iyXdXf8nb5svFmkpQXCgcyHHmQdaiZiGxFjSHJqidWfHw8PHmejWSqSDnVPQHwaeM5gaKKBL1",
  "key28": "5GfxhZdGstf6LWaxoJ3FUbw8m5mJaUMyikyyjD7BGUmkzRiDqyHV3bSoGhHUmeBvjfwhB3tRGM9HCBLGEqgY57w8",
  "key29": "3Ex1hweNwa6bxJSh9JJALvrpeTaWedPbaiWD31ScQFP7DSJxYRVDqbRVQaENNFLpQfg2Rs7XTop8k9KgNh1wZB6j",
  "key30": "3J2rcmKuUjUeEkd672F7HPUgEXoFnERzVmBEtf16tArYopvfkK6evMYvgnD6tGpQ72BqMRAUF4ghf98XbTzCV6PV",
  "key31": "4rRM93VMvQUqTLEnBFH3yb8zgkE2yTw5F4HEvLqRssdqqZApySVPRsoLcuuHFuVhMi2Kr7Miqnwr4BTDUDvyGNpH",
  "key32": "5Ri5zbTChHWy6nZimiLNAk8zUNLDgNodLzHyjoXRb6Nof7H1BuCufUuqXwBQwE272i1BHqMMCPUFjkyaHY7hvQc6",
  "key33": "5wh5Wb3mAqB3zTgRAtXaN3zmUSVb4jqsG5eSpq3C9gaSNhsAHUGkeEz2h1PE7zVvxqJJGxBrN5ETRXTqUpuueF4z",
  "key34": "2jwtmykTZKVLaEY84r7hW9tYkxMWZuxn5uQrCxfZoQvV1FoSQkN91DBFqyp6996bXcPubTyKTCm785jYpEK7QDP9",
  "key35": "2XEuaEUhDugpGF9YrT465TH9VaDa2mVAuDXYFLB6c8kDu8v165dPrTWPr6R7RD3uLdCeJZ4TjKK5x48k4MwkmS86",
  "key36": "3rZwzSRbbWKLLaeBnTqYA5Pjp6BveocNorUe6pNB1by2pDS3j9XuGXcHG13Aky8TeGQgbTZ2gkHE43X4J7Mx5dbC",
  "key37": "eKKKYMzKc3qh7wxJKz2bH5sueNwzUur6KWZfVZ8fkbc8fMvk9zKy5TgjgHsv5HnZmT94StraYxGpJ86e1fUFxUr",
  "key38": "omDiqXt7XhtvCJvUei6SB3TnhV39m3MzoKAJfN2d6WGach6BDtZaQDsNujKQHqDG1JW41yo2mU9ML3Ajfv3gVgH"
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
