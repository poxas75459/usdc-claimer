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
    "31zcxNwXPS3VBU7MNDch8z8gaCeNcbQ6UUqwW3MwSPaCFsaPbW5WZVu8bJRyR9aGh6NjEm5sem3KBqJP28kcFbp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nc6UoGMx6aZgS8M6SYUACnDyVc9Zg7nqXbPcfDuPvvnwaoLEFgBDKwdxitcus4XZewdJ5X8RwyBTQaztrd1PSGw",
  "key1": "2k28NK68wouxDYZsv3VYjwecD3X51qSiVhbX2F4p9RytJWPtWoG67KgVCCxRRfw5wdxvSDhZtBqcs2b3T177hB6q",
  "key2": "4MK2gavFHAYM7BVubNEexCFBxhE2DRBQZ9MCz6Habg6JoWR1Zqm4V9eYirH8768PZiWsJsu88UVnnQzgHivvPcfD",
  "key3": "3vBxDQc1ameVpU1N1HZdTfhmDaJuAJuY8BVBUyQjHmkshqKJqEoTQV4p1qmY1g5Gb47e3T9Z9Cv93kmfuEAPYKBF",
  "key4": "5HRbMLbmZi93TJCAjzsMe4UoVQEKrSRW8gZVsJv8huXVaHsbUpya4kxkge7qyw3Tt4CWBC3XxjqUMMCBNoeREJwj",
  "key5": "2ySXwAWsGStZXaTzwidUmewYfXbUCMXBtyNmVxkPuAfLduM4HeP2e61jX9PmX79tHnir2RLSjQiAdz3KxkJ1wjRQ",
  "key6": "5t5fvAy5Qc8d2f1dFwoyf1CpX4sQyKBDXCSuebPHuSAhCskKEhgk4xkBpf4VQhYpX5S41NYMwFhqxe2DsJW8Qv7p",
  "key7": "GyDxFyj397Tc97wfCrpej1ZitSQtmMvRVvw141zJmqa3HoNykvAQFEto2K2rFTpqpBYTJYaTQpagTy6k1cGRUCM",
  "key8": "FyZiuX6dL2FGygkvd1o1uFcUQYivxGPGBw4FzjDx8Uv8WQU8g7EhZH418RLH651UE6kQowNpuwMMhyEdG2y1Cqw",
  "key9": "gLYxdPKMXRKTcrf9spFFPgHAZ8RZLp3J4hydTY2s1pL4uZEWPQps7TTiGcwouhnNYYhXVyj1n4u3HvYsvnp6yLQ",
  "key10": "2Ni1cTyHuzc8cRezS9Yooxg362WcDTSkHhUU4yHJTX5Z9H73mf1C1u5wK1hMe664fqk65Rb2KK9WHJqPMKtvogAp",
  "key11": "agfM9b35tHXnjgt8y37v189asut3a6raHsAfeEajNe2boxdkz24wmRkubL6jDWW8nQoTNvWPMRdSqBhHTTWh977",
  "key12": "562oryMKbMMUjQjkZLodW9Ah1uPCkU7eXEChKCSz7hwauwdHMFfMijC2tDd5FSRk5hnmwKAYALuCuAyGv28ZpsV6",
  "key13": "vVoikRJk41C5SctwJWUstfn8noRpTUyGrrixfapLwLuEm1BMfuEkrdwJScByqM4eTw6zEan1LXGXKfWytxNsNfm",
  "key14": "3KHv67acanCvLkWwmXq9yGx3BEknyEwR7b4QdqAbxCZvEY3tGc5pbsLCyZyJuL4U3i4n7SvU9M7UPR68rkVwV5b1",
  "key15": "5AWxhAnedhZSaC5i7J6CGNoDgVMQNhQv8tEuyaQpcSYXxdagS3hyW6QdHDUL2vRgrKCn4vGM1Fxrkj4xUySGsNG8",
  "key16": "2mo3huyVZVLtJiEGR3kcRrJziVCKk6EpPWa4zWfoqwqUUCT9MJWb9rvxkCoJRjDoyqLXRnKkZJixwEUVi4x9QSm",
  "key17": "ygNhMHPNcoX9BBMKcuk2UgV4NDds4r4hS8RQ3DPnof1kio1TKnsEsG7FFQCW1w9HpLmVtY67dE6AT3a159225b1",
  "key18": "5zzvnhjVeB4xHhcuG3LyYhTdaWwiJzuikRRiTNqCZEGXqnP9TNvRd6kP6h3C6w6g7vpGNjDVDvbMWs2UEtFLWHyW",
  "key19": "61F6r9xLDfLaJD4PeYe4vrP9znc8b3n1C9jkFaCEY1wuvqrrCy9MbDgJecqReMZSruVPY2QHWietir446deLQ8BN",
  "key20": "4GZfKFv9XcKcRCitWX7g77iX5AHwtih6s1228NaBYdV6t88AxL1CEjqqooteuxHvWxSirQYEMfyXJGoRhwdEiH5d",
  "key21": "6ECtFPMVWiofM7Z8tFmf7phKUz49y4nf1jgLhcawCh67bhUrMDxKjVXy7FTxir8w6W7FJrjm8BXvqm3JQBXVxNS",
  "key22": "49huqqdmPQ35MFcsSgrSU5HPWPYwYZkyNJDoAWvg4fw86j8R7WA8w2hquBvtjNJ4ubZ5DN8bvJoz6fmNkDhwyqyi",
  "key23": "57FenmGfs9Dhp5bTfGeDnmJxCWJ8jpUWSNhHUasLHMBqqnnHajskmKroc88TZwJZKSYBvTadcWwHCeCZd5CaPEyp",
  "key24": "59mEWts5ggzP2hiXJWdBQZwKABZ1MJA8jF4XqLq1eW4R85TLWD9PxKNEkZhwnMg67jsCYQqLGP7eMW37aSs84azf",
  "key25": "3rmceZHfywzJvtwfZPH7GRhcj2PQRBJdGpQJBsND7daMNXpUbxtNd4ZdBfLNipe7r9yjTMZcF4unbSuysWdifrNZ",
  "key26": "3Z8bKYLkQ2nVdBZUL3ZE2k2S4Y52FUc5uE8VvoQPWCqaf3MSLaf3K8K3tsCYzkKtEXnR7WvLYnaJ8V6HXKP15F79",
  "key27": "FKQUTcNu3KkxWHhJorAxyTKkB5pZtCsuLSxF6wq9M1odNZw8DR5JWUMLbQrwCL1nXWQJNNxLCZDTjsyugw9FhYD",
  "key28": "4b2kzEDoFQCn8cbWx5ppnuEB6HD1Ug8yGDnnEZePx3qjWJY5qYzgxPLepkk5Lp7SKzfgJRPFsJTF3mKxSLspJjtA",
  "key29": "9pcJBXJRjqTNz6q92WDvmyRY4gU5kffj3jJwVDKXURWFvqNZVEYFJGMW2t4kBmyp3fhPgwqSRfcXfCv5jqnwiQ4",
  "key30": "3BYrA2XHw3P8ZQhUivJiYNPjdNr5kH5s9HVhbqqHpBNtZRDYNKx38zXSAbLUDNxDXk6D9pvrrazyyW3WVNniX2WL",
  "key31": "5b8CnWJJzehcRCf5Zx1nhzLrhVg1EYQAidkTMaGwoNAwZunvfYino5zVRfvm6Q1S6BcRz61oftR9Pq1EwEhMhbAz",
  "key32": "2uFyFXw6HLzzHXRBqvm4GgYT4y4hTts8qYkY1MwxAJmf7u3NTxxiVLnUyJjkQNN97MKXQhJV3p13tD7PNUQ3bx5z",
  "key33": "4Kxp65P8k2pKmxVCQeuDemqs7as7mzu2WUkyRPdzrLeGj4Jbb21Qha1TXYFhd5HoKVoqvzSETWeWhn5B3xvjRpdv",
  "key34": "2cyq6i65MbhRgpapfwZiBHC9ibd4gN7zBodWkGqcooWKbK6xLKvL9kYayPN1gX7eynXAAeoiAnsoyf9hbwj8k9dy",
  "key35": "2DEAorb8XQNCNWF8rHg6qqB1pS9axTuS2Bhd2uFVrvwfVYCCAhm8ZZ81Ww6oT4KL7FUaFLERsscjWjoM33DXdYNd"
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
