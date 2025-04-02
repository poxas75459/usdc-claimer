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
    "3BbGNyMQ1b3X6neQJCwrVCoV4GAvnVK2eoKvuEakUSLrU4cMv1b27Tbep7ESzD4j3yhtzpzg2as5WLWPPMeZnrix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5Se43z9pU78JpEqpKRC4dh8VVZnoAsPXJS5x46yM5FHqSGe26vVDEg8iV6degBmMvqRkmdPi2qgPsWT4aoqLS6",
  "key1": "5ncmnjeV9uuRdNQ1pHE57wLt6w1RLwutqziAsg9CgwcnckBDpaMHfJxiHZwYeZiENUgYdjVEZvnoX7e8rdTdaF7m",
  "key2": "2LBnp6c3QxJ4GDeiaJJx6Yo5F1k8b7xzzdA4uxKLmyzTPJR2QLxG2FWak6EDx5aKnGdAxpsDY5cVH3ofS3nJJQfK",
  "key3": "3x5gQG2y2v87S7GPcAGD7R6G7ssDbx5tNrrnyULqky732fjXKCk4yeXr8KrmJAk3aJ4shAFUcSjeZPZjJY8i5xwn",
  "key4": "32wUjjuZTqyGdp8WM2t3NeXovE92zZ6n9umknhyrs8ZWBKw2rz5gADWkBRAoaqBXbat5uGCwHgf5Wbzv1XCio6qG",
  "key5": "4pW6D1xwAAeF1HeshhxE771TqidXW1o28UtnfHH6HoTZqYknBhz18dFMxmmCYwWq61pS9MM1aKnZUrXrvCc3tTWb",
  "key6": "3CpQW6BFEU93V9ZpuivdYCwcspbTyQhRFLamy3CBtoaJPgCW2JuQqSETBdTi32P4qQtQLb9kgeNChTzuSHy9FrWX",
  "key7": "4TkRvKfD9pz5pvBfdJPsGdQa1Qu7XrFBPjnnLQ8bg9LZbmPimfzsPsWWoh5QkRorfbHSCZC2PUxsYHYbKUyMQ7CH",
  "key8": "4rQffJ68mfNafE4tq4ZxxizHXiJvyoPnS13Wr3bPmqRB8xwAUJAQyz9bkyiESY7KrA9DAKMJ3gjvoB5i8HkAHBdq",
  "key9": "2C4rzDXjsAKGygnXLKmonKjVm5r7CXTsHvo2iDmbNWA2hjiWB2UfQAwV6LsbTz4iBrWfoDMEhKXpueL95FNUcMiu",
  "key10": "5pakxnNZ3qMP7yNCnyARtV652XJSk1c5zjHm1vNn1EKNigRMcxU6NaZt8NFbLiRYK5cNYtuaDAecpHHEHdzFMmvC",
  "key11": "EBPDqj5PazbsBaCXkdDZyZ1MeENqAJrvhmXqYHD68VH5iMV6WyUuMFe8J6zsaJWHURZrJ98rtmwPVWkLTBkyFGN",
  "key12": "3adcqWYV9i8G6jfXZJFkNijvFDNVzqNQ8UipNXg8nnpApuBXmNx3Qv9qdeQkS5c7e3FByj2fCZd5D5hAy2mVZ7z",
  "key13": "3FYvkCnMDFiAADGEkvfRVkeB3WE6Gs7esNkde2CiAsVA7bsjAzUCbfNDRS7r4HrcnoyHLt7ydBvxgamHZCmtzkhj",
  "key14": "PcuoenE6Rczmfxr2a6BWet24FS8QknZGkU8joDkVzja2bEr87fgV8SrABkYLdvZxKx591PphrHw9KbWbshhDjPM",
  "key15": "t1YygKg16u6J6BQx1Q8RMFbeFXA7eGChqxdr6Sw8baHw1iTKkPWVbCJVTLPP8AkpHf1pYr4mGU2wXUPdjK4QW2n",
  "key16": "3bg8gahMLdrfTY5mSc2z1dKPFKvw5MsRYiw1mZ7o7THcxspv1MVx1THsy7Q3NiLwSqfbN61kx7JJU5UXmuMAfTnm",
  "key17": "2eq7tzsV3F3juv6aXJ3xeZjzbmT4ZMjfEtn2Yzvrurn8kRURfeUhQMU8374vqzt3hb42ZrPTB9qBEiB8fwnFR7U5",
  "key18": "5rxDXDtCvCFXcPCsV9CEvFiSxHp7mDFjFQsQRAmnx3P1kzeDhFRRXaGdDpn9QsJTHLTbaNSp9bHJaG5U9mhmoMTn",
  "key19": "2wmR2KiKTCPABhhPrmGCkmyjP7BQMXeq9VTR8ksJh7ckVhHbfPxedNyX1HBzBH4sCdxNYJn6VeDARbhyJvQoZjb4",
  "key20": "5BRZ328FK2VDpZz1revz1ivRn6qxPhMRQp9VX1ve5d7vybs5MpZeccrxWEr7zMscvtgSBvSE7eexmiQB3RRcor7M",
  "key21": "5NJdMBaX9C1FhcQKpZTAm9zYdLKEjqoHEiwLTjtKsS3jMmRzGys2CyD3WtmLFR3Wxny9ix2dzt1NEcRZcSbvtP3N",
  "key22": "5iiWws1BbezFv6Jfy51KWfqWJN14zKv8rgzvjdnf2SRvikGYyyY5nsAss92gBgi2vcBQd8h4HGsHJkPM1LE4AmoD",
  "key23": "5N9nn2ZoCsXj52ZaSxXVX4aB3pND5EKb9nbyP3xEa76tg3Tq4xJLWRb3LE5nAp1TwGwCWEoJYVKTDTzzQjK6vGgC",
  "key24": "2xqbidjyiDKXxCCGjjQzEeFznKchGbpjrbr7VdkXpEwgTpcpWvQ6F29GY6MUXZxBrQQTgkinXoDgkTyJ1LDkQwUi",
  "key25": "4KfYjxGRETgPPzQB6cHoCHhwwaob2oFGTBES63G9aZiXFShH5NZAXo7pKpCZhixNDPjQE9fNSByUKhxwcBVURBQm",
  "key26": "3LbRNv7TD6T6DQ9twveoFdLDXyU7XPA4mtE1qm1QC6ZD4ULzauuHdNu1XTFLM1qJoiHhe7AQNdBPuyi2ogXLGyfN",
  "key27": "LVc14w67LW7Y9giQ6u8r88e6uyN8YE9Yd38EozZTGAsFyWJrpMBnGLgZsfPGeE5ArvbEqrbhxVBiapgnG1bfV7v",
  "key28": "2R8dj1TAPuyqibFLqQKNRmhhQed8WNMgkQ8YicF2kGq6nkwTsyvjQHMHjikvHRNA9G5gxgyUq23z2Kw9bsnJZxRv",
  "key29": "2rxDtke1V22pxMVuFrAUtPaLH8LNUH2ayC5mfieHrGAwwjeprqbTdJ8iT5ag2bsRGS6EZhX6yEwkbQzcid3QHpjp",
  "key30": "4BdNuYYdjPaDBZXnuVjM2xjp5pGr1uVPWRpiWB8Y9sJ6ED1gqSDyw8DPKzCbFnwM1VVwd97WMf5gphJQsjHKnbnu",
  "key31": "RrQtpEhwP9HFhp8dCTqVUHeLpmAhnWkQ1Qcp8mQbKfYSZyAuHkNyNWu2K8znC8ZDeDLbnpE1EsDM1PXzttr9Ay2",
  "key32": "4UhVSvN6K5aXZBQ4ZQ4ah7kbAsfkMv2YxU92hDLHCj2tRjwQcKzr7P3Us7uBpRXA4Bivshw159jQvCtAJBEjPrrS",
  "key33": "2SjcxAy9mott7KmSHfGWqHj4Qup6FU8efDiK1Jo6dg1CzKE3s5SrrvsM5a8LoitT47xdhidFiY4Y6W3Sw7WDkk2Y",
  "key34": "65LRFCZt8kSdqn6zRtARRzf3xDXW7X6TgYyeeiGxyWuGPfuShuTkGx9sFvQLJgJK8bAWNcmsrUMrLEqonLGLeZtC"
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
