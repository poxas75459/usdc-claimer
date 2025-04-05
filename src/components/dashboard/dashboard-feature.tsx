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
    "3ZHXFzW9tmg83J8JYikpP1G9DmCCkC74nbQ9tN5dLqNBgUgCHTLj8bphzQiacwoyYPjTsqLC54v8CmGxU8Sk8eoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hsmSmCv6N9TB6N4QzMAqMLEYLHbCRMeTriyZmvQKRjuid5Jzig3a6cFjMGRBfkHSFxUHRqBSdFjdnzeQzeAnLY",
  "key1": "B7JmDhq3nFLFwRuM9ssRJU83YfK2fAWUShEpD58svddpohbqk2wvptneamzD9tTpynf28D4m9NXvyMNmTNPpYU4",
  "key2": "4WMgYSxoKwPJpfLj7UPQQVmvqEySAN8A2EHUahwDayXL3JW8gPSRcDAc7dydxvvupP9ykjcvWCW7D6c8JTyVPBVK",
  "key3": "DzzeEsJg2VC5135bdbZ9mWswAWsYhR2Fxsx2Szw837nbGYGeSq3xjZ63focL2WdGZuConXCfGR83ZVrqR93k7pb",
  "key4": "4kvNAgsa17VkQJmRfeN6pupaVumvourz3xCMHWPYfGKtAEtCY6yocQCXM2E2FMdwFqfg7n2HG9NAfuaRE4XXp9hC",
  "key5": "2t4vkXfEQDHUi5pB1w1y9nXrAYkrsds2vfTYnZmgrvswgQ8V3yMdPUoxVJLVBzJPr961joVaWU4usZLzhy7qvLdd",
  "key6": "931EmxhWLGSkZsvgPTmYGC8H7yQq3Q7deRb6ZTUMAxqBoLCat3bnzNfuky47nNcvaRUdZV8C7GkGaDjtWk9raQe",
  "key7": "2K5GkBu5ZUgjXjQeyxC29rgNa41LG2hgzyBGizLX2GTpkSoALykLmAwvdpECAm1ESwQGSp1htF9oeJdn8Ffq6xY6",
  "key8": "2sdusLCYDhimMXuxwVnAmqqnTv1hkhyyn4cgpyFbtQeUqJ8ygxxAoA4Hk7bT9d6uKnzpbo42K5mXJ81hprVCFXei",
  "key9": "2eKjgXpEqyhVco2npMMniCy4KiQBatkct5EFh2aWHU5FZz1FqvqabXB7BiJoGbdKJwaU42qwZoDcvZAfkp1BFa4U",
  "key10": "34hsXq6fe6GvDhLXmHiKtVY6D2zwC3VjAwZd9sDnyuRxZBWE4pZszQiLCdzC62bSqbg2N6qABdWFW2Hiaxccf25R",
  "key11": "48XKJnfceTBTj5vgbSMsUcK1xuTTiPRjiq4XBab9QMDwBhTkKYRNw1sBtzaFiWJSHgrKbEwFSiDpGtXmBQMqmeyj",
  "key12": "2x5nmyTj5wUZC1qu7CYCh6megs7yk2AETovnRDbMNF3C1fCuimoQoFeQzYCcZRdiKjFf7qz1rDBPs7Hiij8qP9GH",
  "key13": "2WzSEohq4gXDfSGhgJRKA9JMj9dSrY1eyfTqKACv6HhdYiR6abDfP9S9bJVxUT4kyfUTwXz4gFa3z7p2om64E92c",
  "key14": "UxGnTxKTT6mjXzZkv3XEvkRFC1F2PLzGxBdQzpqUyG4JBycDMqyFyyt6uBzt5cLCQp6TCgvbkHT5rvmHruvmpwE",
  "key15": "21WaYxvQ37d7C5mUi9rfhkrxVsTHfWrLhGSrijpuUNTvntATCdWKKTdxKRQXzh2rKFr6ogo2CRAVcoLV6xKnSy5k",
  "key16": "5UkUH1o6R6daKBEJeAtwpL9ETiuG1j2dufshzhaKxbN2B1g1jKqFUrLjsXZcgHqcbuAPwFd91YPx435Xj2pVTdr4",
  "key17": "31Z62aGt35HuE4Ppn3wgWupP1N9e3drpXxPAA1PgX1KZEtmVX6JVb2LcYqSGTKS8T1nA4oMf3j16StJhMTQMLVXa",
  "key18": "2BTZPhQnWJ56tzHfL9pHA5uXN24zPcBNUK9SSYRvi98DVShiXi9DKV76gda9g3niMZWKArwpWirnqudG1soDyDix",
  "key19": "41j5E6LY1JNdDgRoPijQnjQPqPad1Rdkgnm4dYJ9v9ZoDk1KKeegHHtqp3Hcj9SrsMZmULEeCTReQCNMmzHXCjqw",
  "key20": "4NMUhEdrk11NXf9RaNhgSmFMcimmpPKmenE26ZUctFLSQ6BXmFRc1KJ8ufxAmWLYxZCXZ1PEtBy7RPMiXEQT8FAh",
  "key21": "4TGMcVyD6JaFkLusCP68nQHuEVH7VLP4DRzBV25TeMi9stjSSYDxCratMsba95qUnDiAz1CoN3FtBJMFDTeTvfbF",
  "key22": "cR385RWB9p4U9h4CXagstLCLu7w2j4mDYnbCfxX3UVPN7DYuEqLjakP8gnVrRC9wsz5XpGhAjvbMKm25oMPBzBz",
  "key23": "3xnfriPtMpuUqnUfswB3ziMpokpVKYQH8exAuXgNoJyMQvLCArz4ux67x2BkPHX5Tsj7VYtsH5CM9zsExcWd5MKv",
  "key24": "3T97surgv3PyxbhpNonqHX9hpWR8joPtSCPCkvji7LDddL88MsnwdQ4zLTAZ1jnZKFHLkqNfasHZuFHbNVT5FwJo",
  "key25": "4CjCzVeV7VmgbjGWY4DVbMV95uGuDcs2yqDoMCpGE8pQcRFH4i6LihCm3c2Q7uzn16swtcXiPwgTS7K5a9jfQqpF",
  "key26": "48H1dHmS6FxHqZHHYhJvniPmYxS3deWLejwik8Q2eWKr6Vs3134HoUfEmpNAfyWj6PGm7daeoUZPAJZP18FUhGDQ",
  "key27": "4XGzgXs2EqwyH8EqL48FM7tSb6aMaNpd4bM1Uh1SYk6MAKGmajftiRQjEKCu9LbUu9QDE9VSxgiTnPB6a7JdM7Ac",
  "key28": "2UVQUAoV39u9SkS1g6rfZvgPgNgP1mk1cpv6d6z9n1ZgsDSaqLQVfJUf3Lt21GWH7Ni2sTAFN563FMuqZsja3TvE",
  "key29": "4BpPmtj9qDMVyScFX8ranaybuJjsUrkX73gBC5kHiyMovVVS4yGFozrYcGxtDkVGur4hCFu6fc6jQn9HXnXcPxeo",
  "key30": "4LahjfZ1XLALXEQ1eraM6L62bZC1VpV2Y8hPA1TQqsYNGjyj6YB4TKHysoZ6VFHFkVnwJNX2FuPm3JwBrFpGjg5j",
  "key31": "4sPaeb8UAnt1gyU1aAi9ofx6Qzt9BwJwWFY7LUE67ecaM8cSCrUqu79q4LQoKqhtr3wDBKRTprdw3QCvqPM2K87L",
  "key32": "Dm7khHkDKKmj3fgv8M39bjCSGAmLHoXzZYivSR1QZfwK9PmcVpo2PwyTVCMx4bkr9ck2goJ9D2z1zy3kyUcsmcE",
  "key33": "5PzmTNVuphypiQrmbE9gcfWz1mHD79M7rD86e2Hjr3cQgiAP1BcbDzqtMw4kg5cDssCC3qoqKYiZ4VnexZ5BF8BV",
  "key34": "hvq4ti99NfqHstifvvSyfkJA84gwj5P35QqndRiCnQY9xkcvdSfFgnu1ngdwxi66p4iAkP5d74DTB4dEA51tEuq",
  "key35": "2XHa7aPXdkRmm8pzo6LDiGMqBdXKNDmMYuYZq3mhNA1UvDGZGfds2mLJ9TfSKwBn5bP6wLp9PcowAVcAubxZWbME",
  "key36": "2BQzQHK9hmz2aJuJy8WmDuXcjkzQxyf3Mnxr5BwSzsLQuSqGwvzgeKAVAcTq51GhT6iCUsji1U6CKxpDNwMfkoX2",
  "key37": "7daAppUaX1zpRckKyDFuugcL5rzRyGMmS2AvVd6xEaeGUu9J54j6TDNtR54Vi6vSpqjxY7p1Dfz9YwozU75SUx3",
  "key38": "3TGwUNWFWHctJLYGFe7ZDqftoXD5nLh6nVrR4wzwsQVRsjJ6S9rWDiarNdttX21TgiEjBj3qpAGr3GGAZut3EJcw",
  "key39": "4VkHNQrp3e4hUVdXXzyNvWyCwRLBH8cmHn6HqnZ6RjY2X31t49wXYxuB1iaJZSgsRGbL2wvenmWGLdsrZCNYYa9i"
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
