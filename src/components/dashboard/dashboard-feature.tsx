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
    "2LZxpFH6TyfSLqpwF4yir9ybcydyoX6xupK8uLKQe9hXcteYJNRbcfouupARbPrLKop7Dobv7EoitHbPV6kYCQU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPCmZ7hYqAWKWgZ5pCpy8SuyBf3KGuiWVfgVNUGeWjZt7qaC5eDx6PVD6aSUUYVNLtws1icFnKebTkqHb4awR2Y",
  "key1": "5UKbT6gMaRQZBVk1gRuRTTbCpzv7m69hUQSMqGDMtyECwKvBvz4rz1ta3NCg3yCJLtKSWyNAUnD8iRiASHWvFZTP",
  "key2": "34uQH42zgHAFdng72z1jopHi9Kc64g9SzXLKvMCmCXKtwL5yPxRATUWx1TAFZBMwpxxKSCZZFCwXEHxXgh8CQTPx",
  "key3": "2FANNnWknyNSqNMDo9uwJ7RVVKYcByUUw6gzxwdNgLiL5DtNKBR8JJJZEQKKUnByopgZSY9e7X8QZN6PoZNm5dEh",
  "key4": "3EQ7Gwu81pbmNRqcHm7mytfx2ihrF6VwmC29efyEaUzdGQoRfdXGGhg8C2cZKAwUxVsVsXFRiiYSsMWXbsjUoMxe",
  "key5": "2vYvHYnRvxRFFr7Yjcq9UMX8U9vWZqfCQgmvLppE2pNzspgwnwVxEsyXzZu91nRAkKDoHJPizhfzyqsnPYYEPVaC",
  "key6": "iSiCENQ7Zc7ennjMeWoUxGKvVpy64MBX5v8AcBGp5BwsFaP12c5pxZqjyrjsHtz5PN6v4chC6VvxEbfiSeFpRye",
  "key7": "25h7n5gGxDk2xYSebV8zRAcKTyy27u73fe2rfVXrFWbKL4LAAbaVktxeHHcVYwcWySTW6Sfc87iDsZSjbpgsAMKE",
  "key8": "2YTGSG5WN4Z1WXB1vKmYbzzzwqMY7DzxQB5nxa72kBXSBYa1o425rY5myxD49R3tx61iLF1bvrkbGFz4Xm4G4dyN",
  "key9": "4JzVWcziteTsX9dzrVdaV6uLzHzCtpW4biXoV1JUdyWrpN5nR4r61VFUEfktdwbPFTZ2uMvWawXBFNQg8PQW7H42",
  "key10": "3Q3SPjZC2m9eGCtnpSHmRVTWVC4TYAdxJau1WhzBuvwVaqArc4MZJyAhnEafyP7b6SmiUaoEQ2MFk9XFzgzWCjF",
  "key11": "38mnoeRtx1nrM5UHbZ2Hg62DVCGRTW8pk93ch3jMxiJZD5ffeSK22Szf4ddM2pLzrgkHoozHMu4qedsxhsDsWNCo",
  "key12": "4NGJ6FdwUibSU7Rk5D9FbeDpz1cGvTAktLjWHb7JEPd83dt8SjWEmiSSBxUYGTuCoBZYGYBF1vDiGoeBdTpmjxnS",
  "key13": "2d4Xqdw6UyFbhRVYxMbCiyj9dVPJGighLdierLL5jhUaTHE3PNCnv7dGm2f4X2XcazQ56XdjhPXC8BaRSPhtP9j3",
  "key14": "2h6bNv99Ka4XbHaZn7u5VcUa7KiDmvk1j69guxTxpJXHAR1snk1qCQqbEvnKcM2o2WA3Y1m3c2xPrxPtmB8ZzaUS",
  "key15": "4XV8PYmBnxL8NnJ7FT7Tp4ZvvRE1VmJCseEeUFL3ogr1rj7DE6E2w31GPb3vcGU5WbAYWPSTapfYfTcT48mhe6L",
  "key16": "3DWbhYEZ4rLZHdQw2f2spw88TGs6enYAP1yPAMikbnJHVrDSMqnH8uamjiRBC7LpasmeCmeva3hFTfjoQ66oDac5",
  "key17": "44hUfW3tTk1fpExoYrVyeUsUwozNwnWPpeANkeqaLaaGwDHazBYHegR5N1fA9nYAXSqFoKRoTfu1b3WFiTXDU8YE",
  "key18": "21kbqMFtHhrnuH7kcs6h5N7p3CmebvYyLTgPg2dMffHCY8C7b95YWh5vJmVRJX3RtuCbE7f5KMViWXr5iB36rbR4",
  "key19": "4kt4k5CDPqohtHA5tvXDBsbRmMCX9sJwzKVZp986hESfmFZxpzyQ1yEaWuzsJYmZbHfZiApPTEDQw7QhX7VHkc4S",
  "key20": "2zG87bEMif8gZY9LAnqfwDkSHbGHHbKL8nSsUXNfrAGtywRwXXm2TnpYBtPiFRMg41mAVK8CwVDXpWBxKDvjenev",
  "key21": "3JN7Bkr362UPJXohom8aw7g8q5TCfAMBFG1CqxCgbkL7whF8UA2bcYv7XFjJj5anXku4dxx6ucnCGGJ8HnYKqvr9",
  "key22": "5tfL759pdFamskmnxS5YssbuvZ4sghoTnj7kcXKj65nVdskTUBdXbbrAmXKPUYuZbvvQn6VRYqtdD3xn7hYWLdX7",
  "key23": "5XuuqPyPtai29MudpQAWDxTq8yrP3FaUfFy6H6v2UfxwMLf1gmbWSbRELjR36VCSC4PXgR2qeSNAgSS7CoJsi3d2",
  "key24": "5apyGugppfTy9XspyjLTw5dTzTGdPbg3FWAQ7yfAHbBVdJbk1rP9XPgUSHPrRd3WWeVHfT14wWFseryJsF2bcv6G",
  "key25": "4sQN1XUQHEiuQh329rgaV8qGuCrBjNAbmLLHWdCayW1uizyhPtUd1DSnb2G4oT77BsUegpDZa3emSLDFb381F1uQ",
  "key26": "4r8BSkn1zwTW2wDccAHUXuWtTowsosEKdz7LZjhTvKFPCEbn1vHAmfSWwUjMdraXNkeSt2KEAUVRJpLKe13WQBvL",
  "key27": "5DZ8JaWQ7CLExJZKn9zGJJNucns1dq9amFUg8cwiWGXZS4Yfp5D2H69nZ94Wt1X4UvhyvYKCNVcCWYKGkkKgK1Wm",
  "key28": "3cedWwLdnbKYYCzkzyBEdmpELsVLJZ3oeaDWcUYLQhTmP7sYbyyg6CJo8ep3i4uirWJ7Labk8f1ucfUFPgEekw5E",
  "key29": "25YuGbT4af79nvejQs6sfiwijdYbGuLCdFSiErhQ8LDuz58MZN11mmXZhtxSV4EYaWTz7a7gc4zk5NxG8BEHkDTo",
  "key30": "3gNYPYAeYKbTNt6imTC1BCk7dEqxS5JSGCm9cfpefEUpC2Eeryq9mSb12UhcUeAhbPetB3k51rvz3xfi5FQhhh2u",
  "key31": "4ZSfY8svcA9MpSW5Z8EgceBhhj9LwrrCt31BoNNbU5QWqwP3zqyizJAC7DjyDTBPvA3ay3pkTKi3pMvTSWYWeZZC",
  "key32": "4TuAfTu7dC7jZKSW7F4uCDy5dGb5Qwfe5bfniFcQQFBzbTnrjoSXFgymHKqPtRYvAAR7qmS1UYSnJvqKax25fCTV",
  "key33": "4Efg94P92hsNED1qo2JsNf3dWSxMzWB9UCchZudRSkd41Y9CNuGQ4qvffwej3viDhxk3cgXcqbzv9nDJ4SzMZbUe",
  "key34": "58ZywoV8BPPFdbHmVUfvJ74wyZrLxu9W9CiJEJwennLfPfN7oKKd2zGXz4aRmoWt36UXhB7QQm4Fv45q6UhSFfWr",
  "key35": "4eD2U48XnsSGnXAkbTNuSTWz6rYWFjveDro5iQYnhgtRNEvqwAQRL6ekMaLqJAx8KZokuCo7aasykAwapDhq1Avs",
  "key36": "5tcsb9GwdDKo97nEphCTwzHUy7waWagrkCtoowiPJWEQp49rdTc8LPuri8BC9y9Dhv3dt1jjBoXa71GJRWm4Evuo",
  "key37": "tVGFHukzs9Rrcw48WGhQFKFgRdL48YHAV2k755352yXmf8JkjCYB4fHUGq5EQ3p5toWLagtUuwJEXhh2GMoyf36",
  "key38": "3zKupMT4WyQbx1H5Uwtx8Hi8x9PtuP691anKS4YSJN6aboamx1jnurpWLBRtCvH7nacbSTbk1pLB2eAcgNqgST3r",
  "key39": "5TtoVfqWyXS9SRSZKQthdxgCMLLsjJa6vtD1V5sUCk7CBWxTHXJ1JWtZj3Cbnp5QhK8W5xmk2T4e2zHFTJcoByj2",
  "key40": "4deDkyaD8BddFrUtU1e3Z65crmYwzV75uih3pPmXZHcJ6zUe6S6Q172aiptnguynGH8H5pEKgvtUAYMvQKaRWpMs",
  "key41": "2aRqo2dYSYGUHpMWE8cwKQ9X51VALxgNgUpbqMF1K6nUcvUowUnf6FyFeKmimdBLqYNPY3hv5zPk5L8jYxEaxwpv",
  "key42": "2TC1duHUDLNPobmE9vtkhuzkiwaJd3oCzmm51A25ofmBKuyJZ75P3w9SPnVCz3qyUjjCqhvunzEjRg1LJj9pJhPP",
  "key43": "1HpiDsQarXXAsVmZMokUxxMaRcLL6RTijMZdorhRcx29T79wF4UucnpkrQvZNkkjjRkPuqY7PGyc1N7A2qWvV7Z",
  "key44": "CQK6ePrjcjEXskFtAgWArSfHVuykP6gfXgkbKnbvumhKSgpy5niErJpGJXhEfyAaXbG4Xko1DgCZY542UNEDBmt"
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
