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
    "53K5E5ronXEtadK6X2QLcoT6Xwf5b3AbdZP5kN1d3A7ajN4AgDK93o6DourYRwiZLKg9CU9Ug7XiWCHo1a9cXDAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwGAe9ovi1vH6zVToZQFpC7ne1VrFH2S6YjmPnFZJN4Tn7wz89WXjSzovRtoefLXNB43n52DAHrwjn7XPM6xFjV",
  "key1": "3Bm1YY48djwftRpqLHPxGAdCY1swfusSNsxfrV9JpmXXa4zQVXxtv8AFSxy2cVLvHXnNaKurt25zXP6DRF9xAqnr",
  "key2": "5MAy4JLjv1eK6AaEZxb2jEwaubwjpFgB395EpiYPPgwg9BSxre4tQ7Z2g6RDanTx7L6qW21Fj63bLVA6hdx3DADg",
  "key3": "zF79K3LRmx8B4zd6HaMaE4eHVgrcffdmRn97mToeSWqm4ANJzDhQ41pDVMgEGDLFAxvvdnpsPDoUzUpJmep1ExT",
  "key4": "5koeRUbTiSMPBJvWFz5wUUfHp9V1YxgWmkwDT5XSvbZauWXeJWzim8XhJPEg5WruGGcLahgXAsqEaHTrHSQS76pc",
  "key5": "26R7qfwRF1XJMmRRQt9w8ndx4evrtkg7HiTb8DGYZoAsGcfE15LNPgzF96d2YtFFtgwBUwTckFiTQjGqQdhDXct6",
  "key6": "4yGDtLTB8tydivGgbCaMTGF8t2zk5BqebsJQfq8Yk4oF2U7t1obzR6R54fjq7VbDxmgwwjjJfM6jknSSVA3iaF9s",
  "key7": "62FnPW4cBsyxLCxadB12fi4D4eCboF5imDoBU6FLRkYh8LzG6c9NNsSo74MJ91XCGMPzYBNvzBEjMpatHCZ9GZXX",
  "key8": "VzNx7heNR3uCnVAKaKX99zqpwDymf5fqZYHAt8WetMkXs2fmMuAUhikTV6bAuU7xyfyHGEx7jbKVHhXW6eiQ8Be",
  "key9": "36BNu7XUGucG4PG7JEBYqrjZvS2YAKWne9tqptNHRJr2Nw2GGQMMNGnj53e71WcEazs3z7mAxJ9gWwrP2whCGASb",
  "key10": "3RQJuozUDQqR8uhJf9MRPi8ivg7WBbBtFWvT8NC1TAg2LG3TPwfgtJduUFrkuzwy7CF7T6JHkJpBERz1sov8Jtxx",
  "key11": "3NhQbRVLnF9t29AVj2rnaDjNZNhhaA1zuw3u4PKgRstMn5fXdzxAXpG7zgLR6bbJPmUizuHNw6mQqvQCgNH12fLY",
  "key12": "e8ZbAT9EhzjGnnofDVRyT2E2Wtu2Q1q1gnJ7RGgvDv7GWye5w1M3x3929aMFGhzBerxUk6UwjYkueZwGh3Na4xS",
  "key13": "3dTDUvUWJA5zipL63wA5W7Vk3j2X5nW4kQwNJidSGeWqfXYHtb4QUq2Drp9kU1UVUUDVixutAKyjc2nQE8Rr5Kch",
  "key14": "2AogdMaJWsy97i1U1MzGmK5nmdea6Mq76BgVMpT8EWUYFKbDmjAx8mcbCutMUFWkFVbHtseoxwRYki38ivjiw9jc",
  "key15": "5H9D1g3NXWHvRRyPJNN4VN3JsstBXDs5Ym8BcWLyMzwsgu9Upb1yRjgHoaLzYC3FCriAyTqqN6LvCEq6QBFRETuH",
  "key16": "hSQW1HhpK3A5S6r64j2M8UyFvBzre8n7ZMS6ywgcQ2CQAkKdqcgmwFqtVWcStmsXToZAAGeD6NmJZmKyGwePDXn",
  "key17": "42jNZVGbzPx3MNXEF2nghsg457CbvbuWLJGUzU8MnRwVnY2Cwbu9DPF8Y4EHNbAWcPwty3nnBGNmGujXL7uL9Aes",
  "key18": "Uvj94wx84V3CAtvfDoSJ7RWhyF8p7deo8REbSwdnF3S4rULKQtBn5WoJ86AtHc77Gj7UAfexiaegjQppffcbGZn",
  "key19": "5Bsmpdj3rp3C3g3cvt2cZd4H2PpUN8B647QbLffGqA3PJoYnK4pCFd1MjtyuDXAMiFECXLSxK6bN5hyRYnMz18tn",
  "key20": "4JjuhGvbV1bMMnDTQtzH3pXBC7rFNXzae5C3uQV4hrggWSz2QmgMpsJBjdVSsv4UXnXLPTQ7qcKztfjpdD5aRWpJ",
  "key21": "3Zjt8Pg7zGDfapdsAcryUcH8NrBbmyNdXVRHtJisDnWEuVGtVGCaq3jNyF6mcjGUd9iog2YbNzs4Srsaieo215Jv",
  "key22": "5YVrtky5tWZEa8reseKstUXQvvTUng1WDFHKhShVvcrfGeTv4KXswZJ7pXn2FLktBhCZ3NjntZW85mobkQohgYLR",
  "key23": "5ybV2KLmGxAdqCQgt6SeHux9QPCReibZEt2wWQ14Si2FJe6qkyWLVkFctikoxovNYV9BytFxzG5ohJezdJMX8TMU",
  "key24": "4U1RBomE2GhynZegMS4TTxAo2LeRgeB1NfG7teNvSpgG6XLJZUodPBwj37aFGYaTUEVeizS4vYvrCzvnzLadfb1A",
  "key25": "LyuSnzYNJNUPn24s8m4NUmdineGJTkaHBHL6P2Wm7jy9Ze1d8WcZFvAe1babreMwagbhfFvk7Dhu6e9inZNv795",
  "key26": "2opaQFePMsDBayjfGrK996HEHYk2RPj2he9RjaCNM3mwMjjkyb4LzY9tqJxTX5cfMYn1tZc3CzHaEEPHtajGQo88",
  "key27": "2riH9HAHUndKpW8ZV6hGMyFbnMNmufmHfmKfDNX4HWKyi44DaEKe7K41aLmBaMKq9R1ut4rA6ozZFPqjN5EQGcAh",
  "key28": "3WUiK1L9JeHxJQgReKn96AkTbEdBuLkVMv26MxWG7wJWim6fmBUETptowCSKvkk4zr6xrK9UhbXFGYkDHsViqvcT",
  "key29": "62i8ppW4MtMqqJh7sK7H9cAxXhAN7dZX4TJvtN1aKy4yhnmoAditbZHUgHaduD7fbvH1xe8bQGKJHvcjVyNtEthV",
  "key30": "64Hbht4XXuL2a5Lys23swxx6Nfw8CEawsCiCJQweQn7fsdRAsmfDECX7sYta4yGVJsVF6xJ22RhiZ56eopLebePG",
  "key31": "4FNXwk2pFDkefmmoQGH2Uzyivw6P1GAqKA3kryVxhEAZoZWxDUFxHpssZ4XLoEUUoLZK2ydycTuUBAibis3dfUwe",
  "key32": "4tJXL2hfXtazF4nCZwtMKe1pyh8vupRWk19En696gf1SM88JyCXV1zATW8eACF4XH68yvEoE6NRX3ZTfU5ZExijq",
  "key33": "4PXZwjRNow913Qukh3ERabqYuBtyCNX9FBDgk6RpzcaRvKpS2uMcHR2ZvSZL8Jgz2KECAZEGYtcBRQctHceMMBFE",
  "key34": "4YWVTfaWRbiT8BeuAo6F9DnBmEDpXVM2q8nxotXCXjL4fMiiWemdY6WuHzE51Ff8BSkLfupjEK5gCdnGKcEAURoA",
  "key35": "4LC9eYMT3aVNQaMB9Cwk4j1xpaaKRL7rrfjLdv9qoLakLmzFYLaKXF8JyzUdCdFvAoxm8tqk6EMZSLYEdrDA2PHk"
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
