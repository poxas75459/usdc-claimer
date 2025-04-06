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
    "4JumqFU5PE2GJJopfNtEo3ZSjV6MYAzUkezoMMz24uADTtw5qqWEoDSdC3EvRMnJNLjpxeURhppuZTbVFoMEBnyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvbMae8itVtXSyuMAGrZYL5WqcUUNHKg8YFwBSnni3MMoqXCdg4tfB7X9hF8TXvMNP7H2BqGhhNkNKPduLcKE4U",
  "key1": "5pDjtMDUZjRsHDfyZaZL3LHXdwviNoJa3toLxjCuxJHPy7PeTUQ8h7NwKUzxQniq74YQVnNWGuGbynxjAW8NVW7x",
  "key2": "5LwU8vhixU8uuofEThWSaFfqx1kP8jLCPUzVqj9A4sUTqvJgMtT69nizPKbVg7xMM2qpyFa4GzkAqaA4QQtgKRsW",
  "key3": "5YcMupFV6v44eBhvRgSrD9G15JaxbHV2kr8Zy4C4hhRMyHcmJyWvfgauetwt2SPTZtGUsCWgXNDBxPPLYZNGBHYJ",
  "key4": "62VheS7SgULrwhVSKRUiR6mQKV1GdEhyfiq8N3Zjm7e3a62v7kPhZLu4nEJqbkijW4FNWZe37xv2ZeHgnRmHhDhe",
  "key5": "V9aUousbzKYavg1tCAy2H7s1PKmQzbEfBYQJ7ro8jo6DR3MWGzxXqSgmC6oJf5tM1y2cCXiPmGDmEXixYNYVxC6",
  "key6": "4BeeCf3x2x42rhY1Rv8wJaW3NHS8H1FWhDvJfsD6ckbKQg2nZo7nTuPkzKfYCfhkdriZdnEND76pu3mqwvo2QaCk",
  "key7": "3tr7U5JrD1orGj8n4e69SEpQzMRdcsY7wVkNeEtbStYkrPZy36fUwaunxXcABLqCy7gT3ewqtM5GvrRRPt6tKn5Q",
  "key8": "Q2FZAPf2ZwcbaGJb9xCi6dmKgdyorFp1tsDDenyXmirXwZzGeqa3kZkLThqGT3xEXYgJf8FX3jbK31jwn4FhXqS",
  "key9": "3kmy8ys1LBhdcv7FZhQXgsWkBiGeV8B6Jy9uchLBZZYPCaM9ZAisycA4VGdV9Eg4UL5YnjRZ6TXW1rYDjKswj3z1",
  "key10": "55Zci6NsPjt15T5oLgzCGu9Z7zddZ23iG2gWkmwJuvvTqAvhKCiz33bDDZj31CeAXd2Fwbi7Tbip7paijda61Gcn",
  "key11": "4iMcRjnsNqDX6WvTb7UJ7WVcFCwNu5Eg8DHYgj99tpZAMwwvhJbq7wQwvWHfjKTruxYVHq2haPg4VAG8pFAZhUdo",
  "key12": "2SyWyMSKaPotfP3Z8xe9NyVQgxtsxeCacSrwGvKGCzKBRmVKytnQZRRksZeSSRLtxRt9wrvoVpp4Zt7tjryaBnRU",
  "key13": "xD42nRg2R723WG6jJkTqdnqJcBWY4eGjUsRCWx1csbebhTtSceaQMF9jBpZEVXCAfijuuVm5KGnPrC2ExroKqjC",
  "key14": "2efVANCfVED2vvCVjMANwEqHdQvJbeUWBdebzgj9N6Si3sP96qhYop8iG5yDELFF2ZLJzNL9auo2XcXb7PRA8qtz",
  "key15": "GspZMsFfiZ1gruBSRrK2tPHWQkuHLWZgXy9kwrqoSuYiHvMJo2nBFaS8JFh4twv1wVkepuosaXAJCQjy81jGvAN",
  "key16": "5ZKiZxG1iUAVah8Dv7wtGjEwcajifMheS9zDN3wjbyJJZCHwNLuSzqiDCWZkZsPgaZgic5UcybBgri4GNMLuHk2y",
  "key17": "5J6uUkEcNUwwdtvkSdGrwaQs1BXGZMYAspfnvLZibmTVptEtT2x9gbQkwCgZgmp1UahxwjBV8mz3fSuAG3NR9ZUD",
  "key18": "zjjsHZ4ueoPGsKRrM1m9ds5iQHzLCwwaLD7UvqE8Zaa2DbjynQ5vk1uqZENj861ZeG3Rb78Y5jfJs3YP7P3b6EM",
  "key19": "2JAP5HjRnnQoVKDT63uFw5CnGJC3zT9nr3BKZQ8EA5YHZhWmVxUntvpqmtfNwH5hfmopmScMRUgfxtBT4RE2QsrH",
  "key20": "5BQcD6NUDPG8zWmgLhs774W8Kohnh9GHeVJp5WtqQZxtreW1hquXD3XQFJPUgj4v2NKetCHeCezyUWRBY7Tquu43",
  "key21": "56WepUWmNqMgbPqi3Sa8WcHvxKxVfNTCj8usPdVmcREXC1zJAMyFLEBDiJKgLrgaYrUBeQxPrVTQjBaiTzhVrpio",
  "key22": "4dtB2Ggwh6M1Q9Y3TFaN9qL9261jNvLANxA3agNAffHme54AchpCKu1p3yfNoYUzSsRahkvDKzzYbZ1GvmcTtJn7",
  "key23": "vZ4tAfv42JzGz3STh85AUBFUyUqMcAtrx6VQED2iWzryLq51JuZd4VnhxEni7WbvdYeY4SyquqLVmzPkJ9uNPtz",
  "key24": "3pCvvaf2amWtrwwTbjebq9S6KV4WqRy86AskQ2YCDRHHXKFYK8NqhEMncy434EHJCTEofxbF2gpN1tdBHGmyuoGf",
  "key25": "enYkcP4HFuZ9MyVnJpjQX9rKTiRNPcFb9gNVqkJfJuaKV72aGPhhwdyAUG8eFATNFCv8Fdb9zauLVYBJzYyZJwk",
  "key26": "5bnBdSeWiZib3UQwXWvuaQBCcFkcq6TyT4F9zteVrEXURFeqHwJr5VNfytKntQLFSfJ3DpE9n8tCFtyZm3UDcmjF",
  "key27": "2uYVGCyVdd2DPXqeMG2bi5h4Y11YJZLZsKzz4GQCzeJtDrsg8URHPhPxFEFaPzMLWndrSMgFVLxnFWmfkecEy8Ce",
  "key28": "5QfZUPDdfYK7JtnajETchrmbAzLbCWNv5SayEaA5akfWaFEX1P1cXcGdRH8FVeBEtdFLoPGDSKPX1miNNSM4q8Bc",
  "key29": "32bHj6WYDXw1zJQvkDZzdRdDJPRjgB7bHHkYhamUeoQzJonfwTzptkeyC5dhZ4eEBR4upbTFb38KEJrezT7SUjbD",
  "key30": "3ciPm7qcZkQ9PC7DtK4juG1wJZXkwsoDmM5tVFdydejAiRcArkbT2ZMsTu5y7VhBkz8SuBxEzaTSYPneKDKf5GBh",
  "key31": "2iJiokqt7wGNJxvDMBpfAuBaxrVLuBrns4NwZTALreqqogDnjigDMdE3ivV3ihJXi8uy9EcK8H8CnodcE2ExsFsn",
  "key32": "2n3feap8jJhEavKgDQPK4RfjLigJB49mgyGL2EM7iPuxG2AwnvKwjBjv9Mrqk7P59gDJe3AtzdYLfmbA4qUwXaRS",
  "key33": "5j66NCaciPPyCKbjEp7jZyfEo8WEbjAQZhFCWssF3CZeRB11UkZkjBFwgUcw4nDvP2TtwPYYga2nFjFZ4k6yE42s",
  "key34": "3mFz6zeZZW8Q9D6743kaY75Mp8jRNjxF4jKzXgQgpnNHStgGmqjW7z2nkPfST8QgQujREnX6UZoQSXuEV6kNmzsX",
  "key35": "vt6T4dzju8PCpr6Qnirp4iFGNPPEQ3ADbw62RXuzVXpA3jWeTSaGece9dbhAFvE86rep9PArgqvm6Dwo6jeUVJr"
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
