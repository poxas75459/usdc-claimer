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
    "2ynYFzDjmur8d8YZCo8wahv3WDacMpMNuXUPaoA1gbxCu4vxF3kMGELjjYHN36uajjAnGN85UYA69nHXaAtBnY2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jtbqNPFh5LZgSFUSyUPz2oQ4Ngjx8kZc2WgyqTzSfBKVWBpLaWm1ooNM7CPGiAnotP88v9dL3BW3VJP568SDztR",
  "key1": "3YncLkAm3K1eKBLMESziVod3wc2X7vr49XZsA4KsmsdKSt9WTnRv9QhHgWZntUH5jtuDkBNLEXmF5XXr3S5QoGfF",
  "key2": "4vtK2hDW3YbfKBjkLNKgiQJkdsMP1Y2taVhcsa7jYVawT9eY2HYwetfPN3SAi7r3hhVSxVghHeXoWFi9zgZ8rPam",
  "key3": "65vDyXQztWnWqfM9JM46vzuFRysqRQZYUuGmu7FNfNMcMTJnwfZEJkj8UEmDed68p8vAQ8QnGT6PjfL4aoBmhTBM",
  "key4": "54uqXVs3h3C7zcWdzRinun95QKCdW7AM9oXnFwYZRy1UTh5ydyKwsVAmFY2s6D7GnnS3mFBjUtC3aVMEX1engHW1",
  "key5": "23kh1eJNKMaDQbxPGkG2BMJgsajQ8N9vGxkKcW9kvpwt76uotVxbpV1D19pwwrxaCad4zvuXCCwCMjtwfiSETFV3",
  "key6": "343vXHm85KKA6EBhGjBzSk1t56xdgeHhha1qPp1LozXgG9FHbRK2P4XcVDwJqxtbzJ9A6ovsAwYYDaf7mGN32gKh",
  "key7": "2DJSZTjK9bCDHUQ1oNS7H8DBFCy34Z4LFToed8YmVjzyJNxq9j4LnNJrSzM4THLaBPZuxaG6gY2ccKxXa6skSJq2",
  "key8": "5Gx4G7tPMoMX2a8Z6YJ3Ti1hB2B5NfX4kXCGj4dfr5XgXCCB3SYJaLkd3QBcxrPaZzzFrGi7D9sZYEiYNaYvZxxj",
  "key9": "2vbbZAkZcjmhCf7T56GJcFQNq4oHbx7JAzjHpBu6ZiFJxpE2UdoxDxfnoFCEpbZ2nhkuJVKSMs23f5YUsGD7QXSK",
  "key10": "5RUbuhz4Gu6TmtNC7M6sKLxqFaBBNgno7LMix7XacnsYTMbXptMmRUxwz2LUhMEy4A9F23rbKG4EerNRCE5iAzeg",
  "key11": "48fJ4Q3TNF7so75vw439h1Xi7P5mibD1WKidH2SZgH3VyB1SW5SEMuwZ18Nso3JNMXTXojoRGF9H6zTPRVxxf1ff",
  "key12": "5iQmQ5CoPAzwVTxkPpNJZicvcobgFUXrtYzadsScRMBJkk79G2S13oW8H62hhdkwR5BznfmNTAno4rcUDwFm4ZLC",
  "key13": "4ev2aJk6MpckpwCiQzGHEzGq47XsbShBrJrVdUaSKyRN1CK84eXQRALctKQAN5tu6ZooRBoG4ky9sjsy6XYVapix",
  "key14": "5wAU5qKWooypUnBJQgFT8zwptCvDFvWXtMaLxz82w2SsyQn6JaTvPTmRVASuxBtdHNDn4bTVKRPVWS68cc6ypgYg",
  "key15": "2YZPmB54L17REJdgFaJfzFfcBw1LzSSRRCzeX2Pf4E2nRk6TJPmXNt5rN2dGeRf5okRZWgaK2noaKihJd9Tcobnf",
  "key16": "4iKrfi1whsNHcgc31TPkUqUEAWgfRazWtjF2ivtGD7oMZ8KewDjn61gwH1NSUAoFtTBRYKRiVqxvmGYEFvwuHghY",
  "key17": "2nW8zH4dYRrNf4kSCERcWSee6dhvhHazkyjLjZJSKsuvvknQvVqfBs3v6ck6EAHQpaiE3VkQE2Lc6FwSbahi65Nx",
  "key18": "53U6khZAto85kiq6zYAX6mzgHRzt1ZWR5KzcpuRjMuLP1D7vWCERL2zA43228LpDETFbvm4hEQ5QMzDUuoLu7LAo",
  "key19": "3ZnHcMDaw5dX6XpdHsVH5dEc5YaaAUQTwjhX5g5GYw9fW2M5CEurPizovgJchjgnqXvpX2Unsw1hPnndP674jY7x",
  "key20": "37osMoVj4hsSPhwG8gP5SyBF4cdX6QVXmFciqH4hn4SNNT6Un5V6pGpggjmgfTNBv6iL4je5dFqWayjh6D326kVg",
  "key21": "57NJSvM2aQz4u5MabiK2KMuA7w8PBaAboXUx5Q369F54kDuyhbW5ipYivSPEscgwon2rp9wPxCtx2oLU9fFW56sF",
  "key22": "62U1h7GGo81nYQCiXPMFtEtqRSsPdPkY4PRwXgJR6Bht8omU65Vec4QyYMxt468fU2uiHAzKoYWxjkn9fQqV3uXr",
  "key23": "5GdXycMDWwJXq3M6iM9rHMYqvsUqjXT6jyFuLCgbUpjHUNF5vtsBYi7xhvovgJK9yoMQ6xVrA5BEbqQHbAKVcpCR",
  "key24": "32siTvbLDxDNPqhucVsoSWsB2ien2dLEgfzcYxiM9WPePLH8CesJHy2Uy9mjboevAf8pyzwjEZwi7CF2FBEXxte6",
  "key25": "39MpRzdV3Nx4HzuhtrEPkzcefoLCg1U6vTAZayDRPvtoMeP4dN7HvSV5NwpCzjoqzALumZkZxMqAd5TSVb5oTrdV",
  "key26": "2gJ7p9kcWVgS8StaGtztjgForou3pqWuVXatNMoGUqPL4DLZLM4NWrscMRFEQZHBv57cNAfVUPN48G311in6FeXU",
  "key27": "GMx9y7C4GuNyt3ZR2oW5XhAHrTPVRiEGhjW1iBkMEVRbdvKGFHyiskm2ch1hRW56EjqpQGR1T8W1b3pdRWeYsp4",
  "key28": "3L8Hu9ASFkvDnrAV8etuwvqBmoYbpaEVbyKiqUi15cywF6qADiDHiMp9gAYWP4q1B6MhugUzgGxgeayLfRDzRNvY",
  "key29": "4USJCLq5fKiyQVpw7gd2vp4Smcyp1MW3MmZowSDiG39aXxfMogRDTbmfxveNi2pqG7no8BeECEwGE92icDAgquno",
  "key30": "gn5UTpsWViBHiC9BDWxmbBkZLtHGaKuABBb7PyHXLzM54vNa8qNySh73AtkQU76oWJnquf82AxBZ2yUeGcvus5m",
  "key31": "3yBKSftSYs8d55dexhYkWpvvnejiCS39RZS2ejV99vUruvZKJxQUuuUGw5T4osmWe6vHhRHv4w1AwMGKZdZfdkCU",
  "key32": "2FU2TkY2xSjcKGg9KYBYcrUucqqXGHx5muK8kHzEKP6hEs6aYArwxGdHwVirG6Jx4nnZSYch5L7P794yYeukr2SE",
  "key33": "bGx3iWvUDrCJxjzhdhGcuVnmWqt6AgGqyANpZpK4MhRXXkSFCJ12xE8Z5BSWzRzqHKPJnyUsvgENoeot3pTd1dE",
  "key34": "4nYpuyKM4AJNGXNhmdb4J53JuerFSNaFTkbH6WZqvjHkdNG8YcdV4QPLeU6AMrGDMbtwkauEQqAFbeboykCEouVG",
  "key35": "4SCUcLc3wrWuVW5itmWZvaCfK7J4mgVMJoWGaBijswxrqSP4VzSyBBDGigG5qB2PanXVDrVAHmJDMjEhqjxpgDBb",
  "key36": "2cWR5vYHNh4JyL4zQyixLemGcmhMiWQTRTepBWAjTGAdgyovSxAUtTWuw1hSnEQigsGrvdXdtepAZAcR6bgGZYqx",
  "key37": "3Bx8BoPVA2wBawDLpCsK3awJx6NCmSZeiGCGT9iUKs8ZKGTWAP73DkdtbLwpL1evVNPN3gQSXwskCi8PwHk43rNf",
  "key38": "5mByDA9i7qL2h1naWeAdpGNGBhVPJrrNDuDbALQrYAEvz9uVP2wV9H6xZtNMuRdxsQFAd7VENLcFRnhkFf3gwwv6",
  "key39": "5jLYMoZiNhCHTyGE44wMpGujs9xR1pHH9WD6SoUdMfmmiiZde22BzqegNeXerrUeACWrTj9gaE6D6t1SJi7oDDjC",
  "key40": "4umPkqd7qTe7rZAdrvaJn8U4d1oYp7ugVWhqHyP7MQnWnwS5fMzSWZPiWDvjJnw8boMqpkHV2wJk1mb8zQCgdNyC"
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
