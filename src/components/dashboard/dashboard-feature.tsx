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
    "aM9qxRQSGUPK9229sSPj4oGEYbJNyk5PkAiYwTsJCdFYvZD18gy3XtmtkoT271ytVej4J8tbb9g93gvHC6p9r4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Luo559s92VGXwNeXuEED7zFFRJf4SknUUJVu5yyZkA6yUNS1pEBFx1uueHLaQPrt3SK6DiS5mFXVp9gC4Zc3SYk",
  "key1": "4hXvMTggjnjxPt6BuYHjqorGVyZuLCRi5vWVFP6DhMfn8bXSmH57SpbqoAmcmywQxVFVkAttKZbf3F8gGtLtrRFh",
  "key2": "4u2gqsa9TKVzmxnmmufZ4RDiTgpkP2u1Ef8VgfDkCNtqyiQnxF8YdzP3rpM727Ztbj4qB28S4ynrhwtpaKA1WauX",
  "key3": "3jJvbixWF7MFmDQj2fz9h6pQ8VHkPLjuArFZjH1fEuWzzLD4STHVfrdRRWiJ8kJh5YiKGzaB2oLf6c2qSbMrq6Kh",
  "key4": "4CGv4vzGsWAUEmCVaur5tz49XGWo5BtjJcMWWNgRL37XoxeuDdDuhbCkAc7zsvGHawP4S1jvaMUWunhAuJsCDMeW",
  "key5": "uXL8mK3HHzib1cz273rvhuZfwqB9V3X6QmSzNBuHP3VYpQJF5FFGCqSW3YEWfrFP8jCfoTZ3GEEVhgYnkjZQQPe",
  "key6": "5VVKj9hgvL1M6rTAS5YBaqmpkCf9qogKVt4YAQ3268PxRgPYByb9JteTgLJkSdnZdzhE3CoJYbtmJnGJZoS1CRN",
  "key7": "38wLZudX2Pw1M96RT2e4R9iVdNj31ehTR9k7uuetX9MVrBaJmfHeCh1Quh5FHrcgBGw4ydeQm4pRuQFTi4juESay",
  "key8": "5XaHBzEyGeA9sEY1KRZJLoxTchJebU7xeHAW6VQBdNdrw6oJrqxNXFrFbaefQB3kNVTHxb6feCxmHVzwoBomT4bG",
  "key9": "3d24YUWK2oT7gUd5q8QYMqwuKEzdttqQi6hMTXuPk43wtzW1etXxztzcGLZqj9K3f7toTvYZ8oezKhYj6T45KE9L",
  "key10": "2NWcC1UpQeiunBaeQfHw74Q14SV6apd1da5ocpLMPjdshaav6UfS4sky9FCUmpbN7MrQBttat2zHBoDrRKgvxHvL",
  "key11": "5TyaYL9nxDHJmEUtXNmNaDbD5TY5s1aLsVKBh76p9vjoYtJNhMeUz9WkzA36ab8Nxwweqwcpiukim3LRJKSLmXRz",
  "key12": "3FUxhAHh5GXeJGN6MmmkY8JR8pJAQSoJthtTodCmKHFT7YQr1gU6MMuLweYeWxG9TqZVxs8sqpxLda1Y6TELnKzU",
  "key13": "RQZxQZfFtGizmQjymep82XZS9JZVpfZ9dwkDTG6zGHKSZsXBMQgejs7cjLK87PQMaQ4ynDXiNQgaQSuVHf7qXPd",
  "key14": "5iHdQL7nBjcRyZBVZrR8SoMoWcvVgJ9M5akn4KEZ4Nt3qLBKUWXc459s6CezHFxNLLSEBBcGnxc1ifjTXc1UsVos",
  "key15": "5NenLNVhqrUpmsPGPVYxPD3zrygS9m4nEAgwXC5ZLWYqH6Wnarg7PD6a2d8iNGXT6ERGNZHChdgZpHLyEuLcShFU",
  "key16": "iHe7LeoC4ynDBQTpX64EvfU9pisGUw1yPBVQXrvNtm3NWEgCKKHmAQGHJDABwsw7SPvUC2RTtDerC3moFwTDxgo",
  "key17": "25G1FdnRr1ix14nNS2ThMJ2tD9j1npxJyJ3eLg6Tz595UFcVNqZwaszMstcwiA15QxeRwjWH6A8ACDsAjg4hBbqp",
  "key18": "yHxV6MZWaqZXyAgHNgcsfoPVgCxo7tBUfZXAZFp7Cm65AAyoGNzjLaFpJx4fc75PPvXntsigEnn367nFVJ8PKaB",
  "key19": "A4dVuP6X6sGFToevQmPVchdHQyUg36FN91qsUsxg63hD1DwiVy43AdV7iYmdL3caEGLgJyg7udqC6YDT4w7t48v",
  "key20": "444wYQs3xh27zWnrVzFV5jcnuMyT8eQ3yDTesPZqQ4TKfPHWy2v1toPeggG2K9ngdGy1kPBzRGBQzTweFA2YjR8G",
  "key21": "2eEr7F4uRXEqLVFRWC4Ehtwr3TYGJfaRopGb2ugheXxU1JAeyLWDH1JDSVFDWZLuW7yc3oFBerwZhsfzCxaCD4CZ",
  "key22": "362B6oVMP6znVfhXfb8rDYeYsMrJ2qFPAUUbrvUANunKR3hRomhDkH6jYE9JmkWNZoZUdEzXtoc3wzWrHq6CwTt5",
  "key23": "2sV8gXZA8sr6EvXPmx8thKA3j43GqJ8a6nM6qy6SZgQSD5APKo5nQyrPb181Hux5EUsyMjqX2GUHacLLForMBnY8",
  "key24": "5zKRMASSXnsbZXWBwrLWdKxthYGHJSfGYoVifez1YBRGbEbhXMnteu8HvYJYyNXQjeBS4QbwU2CwZXTk2vXUb4N1",
  "key25": "5Hz8nwaMFCGQfy7ScMziHn2b9K6NbkUzzJWVF7zJD8jdpGAyrtERC43956GoU4ypDLHXfBR2e1iK8uguiv8dFopv",
  "key26": "aWCWMSHeLD5k4Z7thYTR3r6vPu97kj5yEVLfJvsRmfAcWktpHKi4Apyxv99CsU3uXdphbApExAPkFWt2X7TQhJL",
  "key27": "4ZqZwCtoLJVcAkMohNstPzBKBbN5iV6DNrYXZMpHzuSECNGinSo42o2AvEqZVKVhPGikDXZJ5LtowYcZf3Cqxakv",
  "key28": "4yYfAH38bKkmePVdVEByy8vwvUFdNq9iEqvJZ5WiTTYEhNRZ2tysK3rFKQi8kADNrH5BGo9g1ZqWwzEUXN96sH6Z",
  "key29": "3LG86j3fohNK8ecfmNXHzs6u1DJdo4bCsC12yUHfr1RZ6686BCa8UQuVJ8uzscLgtZjnPyBjSyZDAqYhdZCNJDA6",
  "key30": "25HsiT3Np74owPGHZnsZ4nyTgPdY8QtDpgjTd7ZKp9ygynwSqvXpLJVbUVV4TKBXEreW7wdTjeAyXZykS676GyzL",
  "key31": "yNi7Yf4ccN6JVs4bjRvQcr7gspZ6iMhxpEXT43MHRr9BvZt4Z5piPcL4YmWQdiHPT3a1AbRjUgmUzjXpmXB9v2p",
  "key32": "JN9MRkx4E4Mr1pqQB1sHKZihCG78cHapvAhrpQWd5bVgZp8gDELXj99cM7dyFKfWD5qQmYqRmbYqNw5x3BEmubV",
  "key33": "3cwzu31FPDL5mtAs9fLYcR2toimNYF2N8MzyGREeL64by1rfqTcUh4hhqP3ByDvmHvZvij63UWXCbTgpzH84FYp2",
  "key34": "65qwRh9imXY9aUJtkfrmh7FYu1EmXjncGrd99UsHheZPk1amDXaJuX5KTeue89L6TkBpSZbR7BgpL25n3RtcX3xA",
  "key35": "DAB2vqPRGyi98gxwut8gF9KMyNNgatfN74FkJ32chaMrR27rFG9k5VtyHQcYyuxjewJUy2jWeh3mn3oNFrEcStY",
  "key36": "2mBKaG33i3aNsUaYQq3tRNjE4jPqdUFFbYtjpsJHdqzGmAznjaASGYY5vhSK3nhHFBgJ2BtpXUkCZwAxp4H7KKSY",
  "key37": "4bo2r8DbG8Mqtfv6kYTbPNkwCKmEsomBCUVovddKXPt5ED1Rfhx1ANPHtNZtwK4xPbbV6uWreo8tXtLD2GkDbUmE",
  "key38": "BXS4zRZYbRwSfKaSX36ch53uocYDQf4TKMo1VWe9cd5MNcLHid4yHQ6obkWkvzqtrzcJGGVXVBJw1qZvsNdKicy",
  "key39": "24R769PJeqU6bvmpHtyYfowUk3b8BGtu6x2sFvGSv6keWdcY96dveRq9tV2eWmv2BVbwfmPrB9p1th4fmnKn6vGt",
  "key40": "kWfwJRs5nyRjGZcLycvGrpCi37pJxxbpeQ5dcqN4eZrgANcryYDyuq79zxsvpn5pQN7MoxHy1w4hwXZCYKm7D6W",
  "key41": "FTp2cargdoVK92Xmvk6YM4J88cRxDLRVGDh4uk54jeqSRSLGaA2t5uvL7r7M79RBiNhJAhA8pYbUEBusUu72YHA"
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
