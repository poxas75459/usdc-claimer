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
    "2A8uXPNYmx8yTnGUGCQjPa9c6KkfbdFHUxZ4smUaVEsuf9gTXnGkoRwT7Yqh4dKo3evNHAHXmZ46AG2c64omfJts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h3CF4KYcWNxPW9XZ7d44PwWttbTRDmGzbt3cLr3ddchPwsVkAEpuZbMCXGJjtGPuDTrYvZzEAQ5yGgMMwe1s2z6",
  "key1": "5y8LdV99ZFmBCdLHNfUxCyRzFTAAHndYaxagEfzsooBpQsRr9aGvj9VxCJCsjmyaA8XCcQB3yMGYRHcuoAc9c9DF",
  "key2": "4W9YbpFfGh5AzT5Mh4ZEGpSX8h2ct92RincoGb3Azy7MnAiEg93zREdrAXQAZWVgepzqQenTxkByFq4ueaMmXCtz",
  "key3": "3Pc5cG4zXQMSB7PHmNLjAbgq4yXqpQU23MFo2Sj4K28McQa9p15WbLFwqLGTh3URmgcT3kW4NRLytPF8pqg68qCD",
  "key4": "iWfx8nRtHwxWQnpufvjZ9hGJvew54Pw2DeArKML7WNzEfNhA7tkJL1Q4JkhcdDo8SyRCEK9rdt4qRWah6pNPcsS",
  "key5": "4mrCFVHFTd8FyAuftyhRiLQqrJHU9VzToQ8tbqdRBfJbCqTPc1F76ipjQcpNwVpS1717Jg2KEcJsUmRQrLXgN8jm",
  "key6": "5vL6VPVKnN6AMEWuBHDwb5oJpv8eUYz9KeqjcZJsMXYMbZ3fSJ2yXcBJSSvQJa9179AwTZvvYUrMkEqg83GLmyRD",
  "key7": "2TQPqxUQGAUDYGnnHQhe5Unw3u4HxoRwehoEXzv1DUGc4XR8aJCP9Ks4PsDDv66P8FSqrYKwrMBKekCakJE8LSdv",
  "key8": "5QnnZxrUKAbKEnEP4UyGSXTezzMk9t3raxevD6F5PuHdUq2aNPBvfRKw2Eur6QNUhjGTF7kdQ7we5KRgKyA5NLFW",
  "key9": "2YywdVeCAZxcfuWuukNyBLGWW8eWxgRVZEDkxrbQintqDj6F4oj6YCBwbnXb9Cr4oYcFCbvJMD9VuuT98oYjk4VU",
  "key10": "5MbE2BZG3GCiG34DLK3Mb2zj6fZZ5GGBNwRMTewZ5NYHHzBjYK7UHYpjuZCRDxbWM8s5PgwLQPvXsFG55eRCmKS",
  "key11": "2ASfC3zUEMUzHkBiaAesC6LFwpNv4kECFPwmnhBMeKzaEbk2nHF7DoHLs2dmhWUTQtkgrLZn78eSZvQHZhGpWLCh",
  "key12": "48VQMCCrdQ1iFxcAsFVJx8x4r7KcneuRKLCsa1pCfXeUYKidRK4eBpjhVgVJYmZvSKCdJg6Tek9k7oGGJuDjg6WG",
  "key13": "3iK8U6QcU6rbyUatrH5TW9KRBhWpzziRHo632usKMk8PLc3LhAdBjUxgDbcyUfFCeoYxDJ1ayCQb2n1Ncox5K7Bf",
  "key14": "5pJ2pFRvvWu4PAo6jyi5BsJrrsm9kUgCBCdxB8mZsgNbGRAHewAwf6pnmmT9VoResfPBjgdpJrfD8Ew4BkVP7ryB",
  "key15": "4giZUmArVbY72Z6B77oK1rN8jsUjkWQdwSaP87cB4zvFEgaumD229iBbpbbwYtaLbdGnKYVscRYXsDN1EVSMZ5du",
  "key16": "679684gh5gFZcUmXE9Sa1WwqnZDiHgw4ZLTCjz3nWAFZBRBNnPQdsfnojuZjqEg3hSunJ8kNUsnJiV5Sj6haCX1z",
  "key17": "3gsVrFwtSdwAPpBqCADsuWT349ZNw6thnrELRQotGVDiV6mheZH4uB1mB6EdPrjfEoZxp15o3TEDgQ742R5yy7Ce",
  "key18": "j5SSV3KYiqejiCPENr19PnArUsUKo8tar8RDWK9u7qViW2FV4bQLeiqAbZqDnjZZj2EdzT5LE5Mhwx1mb1fRiWR",
  "key19": "GkevFkpQsPabdoGQju4eK1GdjtdBaPdrw9ysW9uyGbftCwRY2Uy2Tmx6CCVRPCFXrPCG82sBjPS3uHAVWRh4abw",
  "key20": "3GhCpGwBwkxUWX6yF9FNNuTd3FLT64fsfqTLru3xK4E7YYaS6e5tS7muSc7ccnwiUj7MJagM7wUpn4NVmL7h3zM7",
  "key21": "2yYhRfzvrMn5UKMNdDkAdLr8RhyVxMxjqtbutLytP6vrQmrPNM3JxP7MjCxXrPgc9XzgKjBvtTFs2zrkRfs2j64g",
  "key22": "2CKSY2nP9SfhdUxu83kL2Zr2hFabWjwrkw5WsBWkdnu6PdJQtUcrRwR6aiXWritAiyrWejxE36fZuJyYKRboS8f6",
  "key23": "36JurSHRDfkC53aHgDZbCJdqJta6xLRQCvWWB2LQUMwmU7DyS3xbjpgDjgriPaB7fNcvPyFepctMMkhroKBhgeau",
  "key24": "4ofpJdhnXJaFbCwTv2vvTyKTqTyWBe2QdaKsZ8CscQi9UGWGkX86qD43vL2Wop7n8R42TfgNnr3JwtdTiBCfkCoR",
  "key25": "3QUJNB4MDeAhgZPJA6ApxSB2pQVLMWcBHme1s9HBS3n4fLVGveUfdqorC7JSxnULSAhPb3858fFqfbRt6oPn1aft",
  "key26": "YhbqdTxar3voRoL8sbyP4bb9F81Qhs6kAvkZLXJatBVkTD3rehNvp4yD3J5xUBG3nYNYie5myorLfH2js2wBxAe",
  "key27": "3WPAJzX78bo3W3oSkL1vEZjSH8Z432nPgKyb18AvsZiESJt4JZ8cjwkKbU3j2YLe5VLrZdqbQqDtdPbbQkmztRSL",
  "key28": "4Po3zf9yCKa8sgNsRjAMjwwAbcRs6ow6TSt71GWjHNoj6ao4LqWfTdVStJ3YRBPk3PRQSkKyKcqBWrxQabyxamJz",
  "key29": "46aKfapZSHmKLGehchRAAbxK69wHBZPtEmdQjRBL4VXhAscrv5L1nwEvMFAGSTwh63WDoKrkVTdvv5Esx3B6DBF1",
  "key30": "2UsFyqbC4uKycnAZfhYDpEYfpmpC59s2cQXXDG3wTVnZbzLEYo89ZPU5yNDaKWJgmvULfUr8Ac8MjBomVG1ZyutM",
  "key31": "3dwU9oB6BCk9PbEq8d21YPywzi416izxBxuCCUqZAixxBw5Pdwqi2k3SgSgiNMjoLfekSdb4usfwdqfhFe3wxGvy",
  "key32": "3co1Tg82yF7Skzh8KcJeVYMUEo4cUCrFWgc4hcsTgyGsB8ePPDu3EqaJ2bXdyJ5gm4L2YgmpwjUXjR5oJgHksNrs",
  "key33": "29bHtgZXKvYK78j1qUjA2Us8TL3p6gcotLfTUFcqScPMpTMdyRNWpNkUgYj5R9cJNeGw8EUG1XVed9ekFK7XhB87",
  "key34": "3hDQzTGTJZSrWmw2ShFubRxQwNmcUz6UwMwFPo35h4ZqsZNArQ6ZsnWrz9VPMswjxDK1wQX543Z2AwgaWBBFcVjf"
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
