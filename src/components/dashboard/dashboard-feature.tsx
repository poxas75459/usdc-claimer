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
    "uXFuENXfHNw9nMRkju3duKbUmL2SUNfMd4b7fhWYnTDXwPNFJgfR8MGHw5KUNSSp3WVizsDY5EtJxSxeMfjXDsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpc8KMcsrh5p1iLynrJMx7B2C2MqQw1192QTPJBYDaJKFgoEer7qV46Ey19EQe6Gc1rD6Q5zM1Td9ytvEVrrSWK",
  "key1": "3zgpzdDiRMvGpKYn52eLReKqXfmYGEbiYEr6K337iwYt6oSEo7vUPXAmjy2v8vbGRKB3pZyhDaE5vy2ZQNmdMivi",
  "key2": "31WsMowaVE4cFMyaxFUzZkwWxb5bW3Sz1amQBbRW3yr89ayszgVQ1RkQDRhEJC95KpPwq3r1MqrmNdKXSRJZ1CrG",
  "key3": "3S3cApV119N8HVGTkxP3yvmHTycXBqjG6uqWnYJZpmEZbhf3f3LhH7WBzJMGqWNqgHL9cnT4SHPbnGrDf7v7eh2z",
  "key4": "3Ah6kdFpTBxzHnCGMpAXpiXP38277HNCSTvsPvrmNQ6BHMmnreDFtK14tVAF3gzhLSa79ar511B9oCJfYmWneWEF",
  "key5": "pviMjCVs6HhoUTgqj88B9iQCujdrfWjgouzmFoKSwJHKhxm3k3HGpZkG34JVqbMwxnCCQ2B71VwfuXWDjHe4zKC",
  "key6": "4xQoJyasBQRQv52i2sAxujJHCBhd1hT3brChiWmEwF3DYBqFjicXPqKfjeUsC3uW89zWLG4Yi3SwZmd566ZD45YM",
  "key7": "ycfabpMhv7UpsE843qD9oVuzuaM2yKfRgXq1QgAbnxGVBqDuCXsLxzXMimTr3zQJBr5QBaoNoPKJSbDfQ3cgPnc",
  "key8": "2KGAXt8pG5DZrxYiWRAWAx6eZD31HNDhqoCfdb1yWTNGzmHqm7PAfYEq8VzckZyNWtZVv162gj8mw7LuctgV9rDS",
  "key9": "3Qe7X3osRC8bpE4SD8zm7NuB9MMjVs2zhdUgWd2M3C89Azpduardgo6DLycgSWmLcqEyYo4AoVN1bx5dn3mfBfda",
  "key10": "4dhCYCfwYWrs37hiG2Goz4M9mD6ypDAoE6kC4AsEG3uwHQ24yyu2yDN4zmXphcF2EaqEHzyUUQkqVyTCs6YRai9K",
  "key11": "ZTwqswA6wvw7wKFcH1rYyfwHw9FgxNnFEu8aqXM6V8bhoJix1Uqir2utZmicYovJ59adMrRTVb89LKbXNqhha3c",
  "key12": "3MQoaW9iWENuvgwA1AiZCeHBhQzN316ZYKkycBEbch5dG5qFvZ1UKKYPEHAxxJS7HLd3tnAw5gD9eY5EE63boTaB",
  "key13": "2TRxzuLwxMPPUvGKV5hLnucZnME9syJjA8hLGUwuHrFvLfjrF5wNk5SGHLcvmcCM4BLhGbnkJJVJz9U4ytTpwMrz",
  "key14": "4584GmUL7Nd3ADXTda1vGFKqG8wBexKDSewV4RB6WxUqxybU22y4mRLikb1MJyrWbCxU1TNnithsVkAfgwYP5wMh",
  "key15": "2NYLF8EWx12CaGurSzw1KgwDKakTPVg9DpfJRPWFqgXf576CwCtwukyinK8L8iMEKcTbXwP3XChf3RGkvbpLDLeE",
  "key16": "4ayDMhMLWfxpGwKcV7yVPJ9Pgx8THNCPk7xKfiKNwxNveuQqQTUEscsaSAHFA5B3a8EEwKX77eV1RzgMXksXewvP",
  "key17": "dJjrWGoaEjYa6S81rsCWLwLSXdHrQCsEMpTwCj69UEoPNgfeYPUo5pE6kzpS2NbGKHT96Vuisb2L89LyPvMMFWW",
  "key18": "54EuvfGLLf2t9akEkhEbT8Af6y8kZmJSWM1hzhYYcSz9FE3UR5ewuUs6Ea1NPvcLTYBm7kaiXWDqMmBs4Yn3Fa1z",
  "key19": "5131VopjbvpFqWKekcSyKCHyHnFUeoE5oxmUjJ6AgVY2XMJ6JzWAKdGXmDYLEXBTjrSnv5NgS1ivy8BEYTBECjiw",
  "key20": "RZbXv47FsqNo64Xo6khaP4JkDCy5xUUcJdVNxEDbcLc2funsJd2NvQ916ACQ4DpgFztM3K1j2wR4Hn27eVSY4EV",
  "key21": "5Q6doJJdE3j3W17roxgK9pXRSv9b31sMXZe2cirP9hWsyBq8BnTQqxZB14pXM3deHyKczjysPaA7icfLg9gkmQhC",
  "key22": "15E2yoXaHwBZeXH2pJT3xfEW7Khiqb3SeuWDi1729wtZrGtq4wZnGotApf4rkAAK2oRLuv22wwuD1w2Uynigbnx",
  "key23": "3CU7WRVJYVpb1nntHUcKAZFhNe6WD5xonXFnmeFvnVjBEyjbFdwkJNnbAjGsskA4Mxsoq9UniSDLWw1EFESiquiB",
  "key24": "4h6oXi56yF3vS1pihk4zPrP6WQKgbX9Ew6QaRZeh7J1fGVXF5v1YC9yJ3uKtiJYWGFMhLmNt1U35CBBa1Lyvei8P",
  "key25": "TiZdxB5JJbuBtR328L5Wbw8GBJn81xz7aw57GoVguVZ2taocfcUHAtiro6d4VeLbXPRW3wLgsZRYuKb5Ak8jej4",
  "key26": "394TTvJNyEw7gR76cxLgubzvKCQ6XZDvWoWFkRe9iVwHHHs3Wb5kBoa3edY9dJFgoTP5ZGMmBNfjd9skxg5vd8yR",
  "key27": "4EcgMEx8YHc8obJUBM4NXGYpgRdwZFVWSUrNnd6Hog437TQjeFGLQcLg39bHTzbiDEZJmoMKh3uLrvLkxzKhw5MC",
  "key28": "fk94S5chggnt4dwCKMKTdLkkDE2UeJG7tPGuk876NNy7EbHxKzjCRsXaadAiNvNgodBZsoafmfaKDsVuJKnkFJX",
  "key29": "2qinGZ5k484RoB5vGobuPj5ykZ47UqEqW4YC2zirRvg7s891agBQKQGo5M4Vrewu2ueVKo19kLv3AhRPzgZTobeQ",
  "key30": "52bye4kHsU1r2pTY6HwgBWVmzhC9H1CzhekDYLNcMj5c3TSYwmF1APHADHXyibnwNhXsHMs2Bk4PYoVSEJyixWHv",
  "key31": "4q7RhfjJ5ty2vrKeDBsrzZaSGo6sTSaFegFmaxa8bJNkjUrvHcrQwZmGsqGeuQLj4sLqvQvmKM5t8yJth9jruzbe",
  "key32": "eoifMY6ht8mmAQwAZr3GGvYqrVsXx3FeuZmK5aDQ4NDJdC1Frj9JJvEZ1Tc9hmv2RMBtHStX64Hbky4Lf9grYDZ",
  "key33": "5oCahf88GcY4j5dkuWHsfjRroQUQDVnT8b8rVseozQU3zxqcLvhfP1KQNR8mHntKBgCPRbQQUAp73fDe9mSSQuJi",
  "key34": "xDMhSS8bZcEvt7RBYBeko7RSeGbQ6GiHbwPGYZ2fK8gy9t3SsU8pBPqQVfoZcM1EJbSaADo6UCtUST2AqUDvm9z",
  "key35": "4xiPDBuAoZiHuusuDzmsWzcjZ7Q6DMpYpSy5LS1j1yC65PuTtsZs3xPunrrRqy1TRUWNAVcLLcisFcuxCCcQSney",
  "key36": "2r9wU996twU3wvMqaVZrBK5TSdm8tnvRUNWXFnsM6uLfqxsQ3UJ3Ga7iZxrF4nmn8PDBbgEVe6t8Kd26psrEpZTC",
  "key37": "48gMRWBChB67SDigBQgbDspVWwLi2YWLPxkxkjqsdUWemx2yRLCfQL8HbrbGBQMdmrnPXP7bgAovRZtq1bQXEzqS",
  "key38": "5xHhdEeCCams1oyZq3GpG7NJFBLwdwTrAWQmvJnM6S3nuU9oMiY7gzoqV5yaETni27eVT29XwTuwf7ovBrNJU1cE",
  "key39": "Lyuvh4te8E2XRHtCyijHDit3N9cMngnfecQYUkb8jJhCXyTi1gTiwQBpGxDC6MmzBwVWsV8LTX65GGmeBt2fPEF",
  "key40": "kRRzY8481V51QJ8S2LKUZx7ZHhhjDxwRrt8DhRrZoQwHs26VNKWxhTot6E6QuzrDAX7npkFbZHdtQ1BVqyPJ5Z4",
  "key41": "LsENb8hJyQWTSMVZVxv66nE8mfqictq3eriV4rowiRjKyWBtAtTjuffDZBGiJqYs1yEpKGAGZT8kmtvogCLNoyN",
  "key42": "2ijwQm8WsJmGU7RhmEhFHwyt2Z8DMa2ZUhK4sF9ZTr8ntJ6CmMncRkRmPiUo5jcdHiiCEyhEu3eTxDWtNFeCAZKx"
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
