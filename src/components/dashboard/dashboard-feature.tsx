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
    "3566uAetm7oMUcxx74BXcEECEpcm8Q6nayMWxSZwU6KX2NM8ZasSc9JCirwp7fQSgqHMfCeJLUKXR2zB9iLjsogC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEiMEjfY97H9u8L5HgXRq2mBL18RG2pEdEGE3FFjFusoFAuZ4ZVzK2JsXKhXgwLxWWGVASU1rZ3zrKHjom5cNYx",
  "key1": "3rcJYdvsNasVsd8noF9ahK61emyqBLsAK2BwvBDnKj7hopahnbr1AL15YBMMAzi1AGZxePDA4tPJL35fA6uTHrJY",
  "key2": "2SxXKWBLezumjEkTQG1YWVuqn2zEywnsALVs8uANxFiUQ2cfHZY8SGFycB3QdrYKWdDDtsWvSrfQ13A97dNhVLEN",
  "key3": "3j1QWmAq2t3nR2idWSv9MmXjE8g57zM9HnKySsbsLKKtA2Ti4u9hbb14bEvs24KLj2WkqoJLknorzrGRvEoaK7qm",
  "key4": "4WgUDGyBzZQtaMkJDn8tFtbhvWaYKHdbjakAuLZj7yrbxye9LN712cjQEUEXMoyPtBFctdAZukxuaELkGGGsUKAe",
  "key5": "4B8cuz6KJQzCLMydU9Jg2a6NXcsY6PWv6SKdnCxT6YQFY4wYxtak4vuDmhEPmew2zYzRX5DzePMj4tPomjbcz4xt",
  "key6": "GWErEjRWbQbNPGoUq5BW1uL2yd3LRnYaSm1meVmpfgGaQ2dzratAQvuuxVXhdUqustZckwjRWAxqCaUWhsLCH5e",
  "key7": "dA91d6HHAGi9kCgGr5V3GA92gLAkExVy6jzR36Qm4ARCWDpi6cuSRRGvhu9iwwW48eN5t6LodCtNoQa9NvuoU1Y",
  "key8": "5qVweschdsFGZuXpp5bayk3NZraR1q9qYWCbfs4WWALwaHMuwtJYiPcDh6tupXFbunZn5Bx6faS6jL7KurmRSLMn",
  "key9": "64CYsHhb9Xmays91kpKJpiXSgHwYmupD8a3b7HXbrJPejMQ34NKAYQ48GouPEa7eZNNUYq8D2zeEL9Aq5VQmeu7t",
  "key10": "2iopCtVD8RP3L9B82ZfZ5DBKDLNHS47NFTPrAHsUQUrDBY1sGxj9XYXKVawmwAQgM2dxt4P1Ma1YU2iyfAGUSPAp",
  "key11": "5Qs4MGVtti45zqw5Z1WpA2Q9FdE2AjzxzzGtuHzu5212XykgnJjV6uMjDkGgfxjwUewVPDChyFXihxQRnDkQQrVs",
  "key12": "4o35pbW2gZfdDA39LL4EpoSEoSqC1c5TYSkUbK85rRA2xdpc7pyiV7Nuf3xYvypzsPSKcvZLt9gwQ2nPaAobPJnv",
  "key13": "5PeJcgC7wtCEZDLoufuS3MVrZ3b1CEt2mSP4dGUgvqLzermmbjswJ8yRjS5GTC9qvG8eUaPYMhpngoFLRvozEyyZ",
  "key14": "4BNntT2oZ9HbfKMBr8B952wduLFoouH5MrsWmjVZUscFKUfVsaT3Uv4M4PoeWjt6BR9VujxhWEChLj1LZ4FuxTnA",
  "key15": "3orKaniZBuxjsLjGTzPzc4BGXLCTsLm6jcfr5YPpBNoLeJQ3CFRqFNcTryoPzBKEPB8N6M2Tq6zYixG7bGbwBeDJ",
  "key16": "2uGnLgDJX1E9fBbsQQVybGXHfjDKsHsPZgfnfUFr8cSw6ox3EECv7EQXZX7fCZMsoQZgVChahmknFXm6j9U5Grf1",
  "key17": "2tUgd6bPBw62eWVvTKLFALY9ojmLfgyzgPcQVtYUmFyy7Bv2wvoMKFfhmctjhkHz8aaGc4VkPFnSS91YtmBZoovM",
  "key18": "2AGThjNyqUwxx2t8cgg26J4GXSH4ALHJUfv5LdVrnJhm3KWWiiv3nFJWiVhZynBwhVs1h8USjH3A2DgN68fGukHC",
  "key19": "2sDYvsXMxGLeqJBkyUPoNEUZ6fig1kytothdJxTccMrvr9EPRGCPb3FpFH49tR4TSrwQynzQqVTJCwuw2JMdH4qs",
  "key20": "AKwG5ddLft8uuGTcHUvNAG7xzFHBjCEAX69ttV2R354SDjGQRHUxFLAg6i65zAMKTbsohVYUvTs6GHepQy79xSG",
  "key21": "4pQb8kriyPdLxRZAXqgLNU3Ph6Bemtva3SKioWuVRVNEW4gGX5SHHKusTnaYHMP8H7tTf3ibsybcMjNsgH9p2urC",
  "key22": "5iZ2xiN72JqhxHCxRN285D7oqf863zFPZ4N2ZFN2WJ5y7X2wo6UDNsEzS9J5y1CUeyy3eGB5XoUR6mBDEzy5meLi",
  "key23": "bQCEufr3APWZ9tDXBifyKJgSqrkC4BRwewgU78AmAFXVZsgfvh9kuBn7CnwbuF35enBAgz5UJ9zJH2RN6Dba1rb",
  "key24": "vxuciamtV37jRYiqayz7EoeFzQqCPQbYaoAMK47DypfkCHMx7ASAn6bHADGYKYGWzeoPusVGx1WYiDRDyEaQWNa",
  "key25": "4u5WK8SDQq4dBGMsXAa3E2KqLT7YAES4yeUMPA8gQsfyuTCtYwbDA3og8Sebo2PEL4KvK4xuKqbkDgfU6m46x4Vw",
  "key26": "JpKmvmWGZ8nB8kxCB9j9dM4yEfbojpMDktF44At6sShgduNY6GtHKiW2yBmHhsw65UydmedoHBVqb7dbHF5b7ET",
  "key27": "2WWabrA8hvAEGCH4cUxwVyku6MvJhfj4sBGPkTwYWrBBkq6qAcrG7sszsiDZkjAMYbjTh73TeBUsoN6gKFRSRiSY",
  "key28": "5wDHL2rvJVhKW6Jvy7sMGxk5YBtVeYd7ausFX5y2PSfg32YHQqdExPzEdw9n2oVqqEbVGf6CJYoGDYJjAnzuqNsQ",
  "key29": "5MKshwc8SGFnjrv6xWAGejXMZCLymhttqawBVvVVzgDNxMK2JBrRCHMech9axyVbsfYK5hXNvLrSkT3V6uvTf3Vb",
  "key30": "5K1nMZNu5MLhaXsaMFSJ1oHDcZ8u3uKoE5ZKRpBQoLg7BHZSRziZdEiFDR726wha5PCCeQrfQyu3gBjWNqxsinPB",
  "key31": "5x8c7tidc7busTfjs5fD93zGa1eFWaohRDoWiP9BDqD8JsmcKVPijWpMdNzzFvSjBzfPG8SQY66JVtaooc9GH5cT",
  "key32": "NmxVSQXeVKMcY4z11faCW5uJTauGpwZUK4Rxn7D9HjHYtvStMGxFzS3mqS3u5oe6g4b1umnyTYCn3JVKMmXv5F3",
  "key33": "3fxTnGFJTga4J981QtXNMkA4n6AWrQRv2qBZBHADHouMRJfHw3995Ci2xUKhWmaxVeyyEGtssRPENh2MfKfRn8vJ",
  "key34": "2jq5JNjWxCf47Dt891nDmPBMudqSdFUn9TyGZk2ZLL8cr1LBF4CZydFLbaJX9Gq79AdXvtNKFGKGgWi9JdrBEK7E",
  "key35": "3xdKepsAcwAzDP2z6USc2eUVmtmQuKxHe4FqWsxBTSyoz6Mgz1FVpJQb2KcPHT8RycLxXoEfYk4foL193kbgzuhz",
  "key36": "4gWEXaFg2wWHLkDTNEwvLPnvCk2YDeEZ8rTCR5zttCYnWMs3193gu74sKgYpZDcRbqUQFhRRNRvGGbf4pdWKnHnB",
  "key37": "3nupVn5NiUzbC43q1CuvbcKeFbrn6vcVzp657yTM932NbvM8dy7Mqny3jLkBKyS52XfP63ugcgA5D1CZ8bvqywjb",
  "key38": "2SiDz91iQuE4CF4iaMD7jUMWiQ7WB9DSaiMR2qMUhu4nsM2Q8XWycJsBRCnYKcTcRKVo3xt2tzaKUphq4BDaWDSq",
  "key39": "3N23hgbJpk5SY2bSPL1uHNWSpEN3X9s2WoRnamtSyzM26sA8Nhgmtajwf79fhFxsBh6wj34mKQXbJ9X6TQjDyKSM",
  "key40": "59ThQr4ZcpSZrdMPpSzn6Ce1XPwmEmQnJRe6PQuTPhbmfg6h6Vt59turuXhbugRuPHEDGioXu1aB8HdJsKEbgKFL",
  "key41": "4wRrgnxTjugiT6jE7wgwrH9vST7FMhDPpQU6YrhXGa8XDz2jai8Udk6ShjWYrM8DuwQULVbxSH2bBqy5xn4zDnUt",
  "key42": "2pkgnCwtQ9NhG8DbB5haamMdRxhGdN1d53SKdqT9gBxRiNkG9zH8wHK9F1rJgHyXAt4ydVtrvB2uvdCbRoiXrQZj",
  "key43": "5M8y6W222Xp382vZCa8N3YpdxneaWhE7u4rYMJ2ZnyYQHgTpw8yyYsGUQ8F2GvvcKtkwdqX8PkukJNfV3kpRvw3T",
  "key44": "4o5kxLJjbBnUt82W3LWwdTXQbKUfjJ6Z3rovWMtQjrdTvSKLSzHv99Wy2hLQVZ2vwS2KUEN1MEALxCwppH2C8egm",
  "key45": "3di4t2BxnYwYhwHS8hm6yENvUz7psatPVZ19SL3cMSQ9PSyr8w5qTdk9ew8kpLZfMKrw5Qnk2N28woFQ6RBkBbFE",
  "key46": "2ffbTCtGvHhksv7CyapaDDGSLgkrgPauo6VmMnBuVMmniwS9bTQcATN3j8dvNxpHcDfvviRiDDrroXQ12N8KZA39"
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
