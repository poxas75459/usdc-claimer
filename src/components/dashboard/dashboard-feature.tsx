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
    "shQEiCcUT9Dgo5tmXzYwNL1kpVk9V3uTQ1efRyf8eBqU7dSZ31Wcvqy8iSuPCVcR7cK81K4yWFAMxy8NgvwPvnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TnrqKyT6aEQ3CSSrafrAMb2yJnE73HTG88KNmRj7b9ENcRzpxNjRuTgqtTi91DdnQqKCoXw7ZoudGi8NYtagbr",
  "key1": "RAD3K83yk8NZYjQtiirjXvvJ1mFBu6XAjGkqrXeDrZQ7acZCnHKue6gi29rhwGtjzW1M5CMv7Dhqj4wkk4MdaJW",
  "key2": "5XLqi39GGgtxstMxMA21cEzHWo7Uve97g3xTqgt97kaN6H52rkT3Tz6HDWbS7kKmze1MeVmuQrpncS53y1z9tHxm",
  "key3": "2p1xGTYqRdbVB8sgJVN9TK9ShpK8tswxRM8WLHGs8AEWaQ67XXdrEt9hejPhypBd5wL183NHB61xfLtnakiARrd2",
  "key4": "5icGH8vtrDphU7sXTqA66479FCT4NKGpSZEHmeuu6ZAbPEKJVXGWDEEBGEUaach3CBWUDtYrUfKQ1qEgJSMEPgPe",
  "key5": "21RJbFH4Yx8hW6QCFCiXnoyizjcoYAVJ2tY659NThNFLPjdcta4zqn2g17Bfuqp75XSVaiY6nwnYF3JB9cWF1J9k",
  "key6": "5a5vfobb7E1Jm7AyotWpqD6Zow3e1quFoA4dA1TQixajri95MLUCNnCAQR5PUMRJen3ZmNvHEXj1AxXcodRTGXsf",
  "key7": "5Q67KrHWbYd837dFKTWspUvtT1BsWoEP9HkNYHj5gNQ9a5r6juXGUSPWZeKeTCrPsZJauYgYz4vqcAuCPhfRaABy",
  "key8": "UitShwfhwEB9SkXvLv8BiRKvADppjZDvnNsE4LET74ocixcCzxPSc3ULK3YVsqTDJZEFp5h2sCqhxUhmwMqcQDX",
  "key9": "2aZieG4jCjj6UccHJgTrBQKVproSseEz31VAX7ba7FhNhUhQTavGngFQ1XJPBFWBifahxd4Sw9UDmk2ojtauShJ2",
  "key10": "5cM7CVVmQwnZ4dvqVefGU4QaoLXKz2Jpx27EzhZ4EZBoukAXALicuRfTWuZFDsbWMRGomsfvypKTTLHvqzC6VHPn",
  "key11": "5hL6VqSjkrHaMmumSmXCPgaVTvuvV25PvXZgF3D1VMyCkyV9cdrFAPQ51gX51ooasmPVghqXAXLYrHzr9XraDcFM",
  "key12": "3zuhurARhtRTNLUfTggYM7KqamVbbWsiAabU88ucNKeE6B1vmoYUvnDaTeQ6h1jtjtpGGRafdYoCyeXHBRyLT4hc",
  "key13": "4qy6AivE4uSsVC8YumKWWSy8iJkWbSupTwF2M7R7g5rxZmhLYSLwwJA3gQHVkgW9xf1NY6wpQxGtExZA9RaNmUJi",
  "key14": "5h6TJ5CGZBT9RsmscMzCtQjjvvmiWvRr8NasRBogPQes81MrT9E5zzRcV78udRSC7NAcgntKBD9thVb8YX9mk6gn",
  "key15": "8TGJ8149ZUoGfLccR7RCRhVYKDQ6JfFJeba11QSjiK33za5xwXtVRaAjsuxuTzWJAsUPtdqDScGEqNVKHuLdeP5",
  "key16": "67GvYQfTyqe8dkDj4veLmG9nBxwjQgK2Yfh6V8DJ4qEJSADBfBc97riDaroer4BMyaduoqZAjbBoJhpZaRY3tx4f",
  "key17": "5K2XHQmegAq4BCaoDKW2BxRXvYazMhGbdPe4v5kNnhqXJi7wtU4TFRXWgLmJh3XbBW25iznVgiXxw6fdDJUvgdWW",
  "key18": "5BKXCu852mLDxqrUjgW8ycLBKSDq5Lfss7mXqB3AtMXsX2VN23fHduPJzwCd9tFLNEE2dtHWYcUsYwc8CyJxSc8a",
  "key19": "5VZBGt3fNcFSDuaFfVKkngNzz9w8yz8VHCbRQKuc697dEiF9bPQfpEnU2MQLVusUFsbygzFxEnRrmU5suYDv1WD5",
  "key20": "gbNSZdPpWMs9PodY9wbPZ7c8DxAU5ZWFJooCu4phVPKzcXKdjMFyKdG4aQ5pvuVno5v65evMeLsvRfdy9mEnvhD",
  "key21": "4S4aLDyhPC1mFyF3EZ463Y9yuhb5zs7F1vi3x4cnSZG8SjQJCePDomt2xMbcKGVASQh4NHMgbnWk2LGbhAhsRbc7",
  "key22": "TLvoRDQyWvYuGfSDLfpdxCiMrkfbs6AYv67qaAJyXx2VrN62dzwPVYQ6gfotGqWtEpUhk1P8JxVFuRgZW4Ggv9B",
  "key23": "3qbV7X7vFXiEuCJbTT27YuoVHxLLa4jUhJTrQx481aex6eqcNceSpN66MU1yZsxucxusvcWabV1jVJrSS3a7viEE",
  "key24": "5VndBmt25jLN72pzknEHX4ost8cRVoymX1pJFeYkSLb5oEju5rKmdcJSuFm8kosoRgekbMexvLgLbBZMGBs3VN9R",
  "key25": "5w9Ez4A1PofSAoq52TgqAtvYAwKh8JHntLjnfhChDoEmAUK4iuh2jHAucMAHA4r2hVpYGiZroo7WogxdLsSz7tB8",
  "key26": "654WC7ZtKP1JRsiFCmP3ZsbA5iDLdyyzEyfdLdkE5xWwJxa4K6KqZzKyjWYXbh5nCz9mhqnbFpKttGmm1q8P9vdc",
  "key27": "4uT5S7XQQDH8fPENn2qRcEbCZTzyWkZqquv4HjggZ99vqq1ftnfsg2DwwrXHxsMkv7oqdp1BqGYNo29KX5Bt7e7g",
  "key28": "Tc9nvpqq3oohCw8yoHwE7QKYMsGD9M8gWxGaSSwV5jfu3iWCiZptEAc7512ZfC56UcsgHzMnpwYBtQzMTo7rqsc",
  "key29": "3ZVcn1wET7PVDHVT9PyXFKYkCbJDqgGQtDJWTdUyBBsUowWyHWfwbArKE6ibgrbvRPLdEpCCLijuotvyyaCAhdRL",
  "key30": "4zhLrRUnkr8HfVWAYSV9JtM7FY8hF9E1wqF8KPPi8fkUxYKbnp9PQH1o1UPRXn9r3ELQMzcjdwkdr6ktJNYpLDM9",
  "key31": "3u3WShsaRmMyCDVzJE27WoS8GhR7QpTGrUCeaBdb2kRZ4UA6jRs8XQ4sDGk3d2PKw1oCuik57aNNki9cGEqtjJXR",
  "key32": "48Xko15MfZv8Ny9XHorzyaD62EatTB5N8Ajnvwad6vUk3PVcLNzedEWicdWU9qXnUYmwzdyDpadEVSBEdJDv928u",
  "key33": "Qg1E7nYQo81Hde5VgePfsHyU8FydB8BcbQqMKTPDCC7BzvazsrRYnzQyFpyyxGHv9tXgPHxup5u37wZ1XRXgSBg",
  "key34": "56eDZXNo8kz3qadAdUTxJrDqhN8duVBNvJkZiawb59uEj2KYuGWzLRNAHtY3gVTqxb9UwF21SoEv6tZM39txE4fy",
  "key35": "3yF4kpDk9bVmSF41uSUvdhxZqtRRjvnj8N6a976EmgGXmPbPuUrbnVwYbC7Hx95retzxVc9pVjUU2r3evEXcAFUe",
  "key36": "2HmmyuyFKkNP6qoE1o1FSnkBopeege92yYU5YpfdHE3kkDawEAhCgU3X38othu8yGWu9eEt5QGdod9xW6fKtKYQM",
  "key37": "4KkP71VxBhRGCjKTMR9j8w1xswF7kYXV85dH6uBdP2sxMpCGirPs7Ey8Bbyh1wrSby7sCLApT5sEQqdrJ7Ftz1Hs",
  "key38": "RJBfET8tuGZchtrh3rvxwUYQSAbBh5sRutpdqu5dpx8q1eSL4aBbNja5GcgjsvmwAeKUzJpCbXJimheaufdKsUB",
  "key39": "5HXDLVZaVLWBTBDnbPKLJeYHGWyF8HycwnXgYUG5Jyurnc3VjUDtF7AED2jyEKWzrc46er6WyVdyX8wbkZBm7pZY",
  "key40": "4MzauF3y74K4gH2bG3s5HVT7KntrRJHH1Wdr13cS2aAS52U2zRo4xCm4QmY7R9XfToBewqBAc4h6W1E3ef1F5kEZ",
  "key41": "Y2pJh15y2gGffoFVZMNDMBsvNzY4892NsiNDARXz7zGU6TCFo4uztaDqxYaFZSeaxPttRfE26CakdAokYoUDQXP",
  "key42": "331h9NiCLaaKZwUsj6yUiTFFCE4WTitCBz8tmoKtTaMohHexM2TwYykF465pfcqfz2QCWKkowQq4ZHoL3oDRQ5g1",
  "key43": "5kRxruTWFq9P68WnD4ux2LyrCDndCjQuVqAGgGAtcomu2rFghuaSwsE9khLPL4rBoLuP2dqC81LUtti4TSKPHxmA",
  "key44": "4WJKjwZ8pxg54bWFgWpBXYHHhb25s4vSHJZANF7kiNa3XKY1pVxhwoqvD9dVjb7TuKTYSYV4gN4q3ytoEjvvjJz7",
  "key45": "zyfh1q2S1RLXkMQX2FtkZYJ6mS9DWvKZTPyn83xGa8UEK6EaQJ9oDL4LLz33wNw7pTyVUozMpffWdQBFHHL4mam",
  "key46": "tftrjXhy2VNiuZEMajm8YZbCp54aARae9K9SuueD5dJzffExLQf3gCq2rMLx5K5Awkgrr5VgGrt4AUjKKAHq5jb",
  "key47": "Jc3VpKwbQdsjsDtjojwnEWHcQU1BaTdigwdGv49pnfEDU1pSVE79eT6549acZL6tyFoo5vDJ5U3eENnH42b8Bgd",
  "key48": "2pYPzgUB7VzmJa5YZFXuPzEKgcqZySLYLACxkkGaLwBJgC3AvfwjYiA2E6fNw8LZ5mUtN3M1N5FEVrxjNNJXeTmv"
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
