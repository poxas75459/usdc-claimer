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
    "58SVQrnfJpmffTsZiA5woG4UvUVPNJJMtW9LPpbndVJXdM1exD6ETLhtyKLw2pb3g7dAKGeQRiV3NUjUuXcKTVs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pj5RVDBCbdUZXB9EKfojcTRMcM9aM4Nbpbd7pRRdeC3nA1c68XmPWqWFtdQCjE2JcGbY6xayxWwCocSy2gsy5sd",
  "key1": "4y8t5b1BfgWVXD2dxRKwM17pGaPpZsfxLYvjGCqCZrSTHVkrp3R1Rpakkd95inCaSmpKwZBnFrbi64Fd165jZEsG",
  "key2": "3hetsamt2qfTJz93RfFv7JSbo6JT4tLZgY7hFCGboSneshHFJfW2qrvuMUqnFaS3osz1G1DRMT1cji2kG1cWDnu9",
  "key3": "3wL4qshEtJJZqb7ZPs7u7bTygeGdXT9LaoF8dLznVdXcGgP7GBaRth93617QwpVKbRqyYPLaW2zE3cfvKqrphn9H",
  "key4": "2djL5JACqafig7Y7PvYDG492mQUVN9XVS2ZwAgpu144FHZngMtPUFB8JmXTsat9Ef65i62UEJ1CUXxbBu5KpYUC9",
  "key5": "FzFPwy8f7Y24MPYrxwVrwcnyUhYUhhaDHxZqdUShDVKQ8ej7F253o9GGNpXBuDDw7EsdHAMAwC6KRP8D3yDKuW7",
  "key6": "CHoxv8UNqkBwtA8ce9NGmbMYK3xdTDoUXFauhRmXAWbsM76vGYtvtgxmcLUxdeWLkQhU6tD6oQpBoiog3duVcbi",
  "key7": "4ib39zNBXp43ShxQw4Z7hCphFjnyk2kzpjZf4Wd8rf2eKtjQpd5dJ9WWqQ7bvwGdjwhvtrg7aLJuUPBmDbpERdZD",
  "key8": "3GQcjLmaVR8o6wx8dTYh8Hx4NPTNfuxvoRC2asD6BmiXrmWMMKmTjC2H2M89zv822xzWgZJEv46ipu1ps748vDQq",
  "key9": "D5QnfiKo1iEePYHDv9RJ2ziQM4NVRV3iFtzN8FAApafzkp9nz12qBTB3unPXAdjHijYp8Pxo2E18qTfTrjSqDsF",
  "key10": "UYzTf8Kp4JgTgLk8ogbQ7qEhDG6amCNV57gwQTpKTuK9jzXQijiTT1hLgqUwarqfMzU8vAWNtg2FTYCkqDPsB52",
  "key11": "4n71ecU1t1KeV75QVZMKUkHyePM1UABvdMxdCz55jra14zBytEYf3Muqin2kPoQrAn13FAVy5BsB8fC5FUkBqNxA",
  "key12": "2zkEfsBvPScGwVf5NgetAfHiHUgjRbFx1UcfVciX9znZw5KVDrzz4gCAUzHSyTFEk5b6NzEhB5CqH5hUUdbE5pid",
  "key13": "2ufYfzRMEjzbLfJ57U7SdtoVLWPvFNGEwKF8ttc4u3hKh7nioSA6bjzNhHV211PRC8YbghCoKRxfMBJeAWU5Rh3n",
  "key14": "4Ym8yPHnPwVJSYT5eStcinrwddLC8M4YqTVwpQVGey6CnEMYM2jUu9fE4sKrHyvK71ALULYwg7BnJg6bKNWYTA5U",
  "key15": "H2vF8EbHhZ7bJAiUSJRtGqyqhG4z3QTUvjXg657fWxZx8tzGhVBfNSJPu6EBHL37UpKVcoJiukq5UChs54bBBdf",
  "key16": "5TBDH8mXytq7MJDfzKZ6w68Yi5uxJP4KLyGNNgj9igDpLwgdbQK1WnvSyCYkqkimz6HQ4JNxoYPr312Z7AeCXtK1",
  "key17": "3kQuUxPjEvVocWJZrfzB4R7HryzFBrpvxryM4YSQhyLGwE7dEJaRSSCEyfsvDY6Lb9XraNmUDqoJXWeVuxgbpDkN",
  "key18": "5sDo8FtSyMuciq5tWUHqh8CS8aDUK7cuNcWkfddLKgigKJTBjVrUdb9r73NUpBps4DdDKX4KEzoPWWSED2m4bnmd",
  "key19": "pxRshqQMMd2nfBJ2YsWFKveyRAepZ7abyXszd4g5r8oTK8UfLmTMG1GFuPFeTYxudhqZrRaw5QxPCvXBvRdXoEp",
  "key20": "2ZQ7Khrt47ba4Jrxe3K4WimgazMb661NuuspV67KKs51g4br4Bgz7m1QuSSmFbGEgetTLRhJSmyzoyCZJKRs6gEG",
  "key21": "3asdFxWVuSUg72pSGbU1G6STxqrJDxMmyfmcWeZ4hZxbgBRPeL676EP2oBnBpt8Mt1wfPkyS8ZygQ1jZ4M13n6HK",
  "key22": "JKVGEDRGmxDD42DGyFxgG7ry3FcbAFmJBiqRy9kQvmYff8hcAF4rNSt3E26fFhFfGW1XRuJ3RTNLcLK4EScXmTi",
  "key23": "36egEKqfffsC812yk6ZUk1AcwMyzJwnKVoBLe9WftAGoQDUUBaKB93nG4et52DkdeHSXFeqbsurJGEktMyFCNMz8",
  "key24": "FhYgKESWbXuMbiZ2L5RmWqvoJpYLci3q6gcmMhBEuS21Jn4UdzmmjVQmj9tZHNvgjxTbQCGnhdQ6WLN2w3W33aw",
  "key25": "5FkUUh1rkhPWz236AhoaogFnjZrfpYGkcGMPhH7D9YbSy4mQQAdJcZZzBdPxUCWecACSbDLJ39JpKFwpKv7hiTDH",
  "key26": "2F5o5UYwjUPXsktd8AkNurYaLycMRUCiVRJ25pttEe3WhiCNtDqe6rZdfRnuKpyoZZxaxQAYgTceqFCC7iTCpqkY",
  "key27": "5KVNp8LXjX1f5DrhM6Kdo7rHWeuyZ2LB3jqsNoks5goyQV8mdRwWBnXyaudGjawu4amNsgneFsTtr9Q2EqDuEgxU",
  "key28": "5jrQ2HvA5Bk4ZVnxM3XYEkkz5iDVfV1RwkXAY69LYJshRfX8m2adHPYr6c2yJTho6GnnJfNZEDbG5oNZaFbnRqC6",
  "key29": "2zvaEvP3E8BmmzP9nYCfyiQJy1qSF7LzyBtHdRuXo1JDpKcz7eAQzmiiooyg6wN7aNaecm9yrVUaPk5rjqGYvx3J",
  "key30": "2HYtZta1MRXGKEAqsF1si7EdVFSMeYUgh1qwqfQnrALQGJ7B3fCzznWD91DtERuKhMHDZKwM99XjKVycvenZ2Fh5",
  "key31": "2RMWL8JCmgQMHZLy7EcsSif5atR2iwGmGkr52nPNMEPma3tsrJ2YB6wuMGwi2Fgkkd3R5kabo1xCNzNSzagRXPMi",
  "key32": "93KNqzBRf5KCmyttZNDCazorCagZaQ1VHXfx3Kmc8Kqj1Z1L4tpVYDjzBR5unuaMy3ofLeXd6AfnXLyEd44MCyC",
  "key33": "2tdVNMHwDmYLHi6qLLtWBhj9wfJeo1XaSHAHdgviBdzBcHCGNU4YGQG7iqDBJvrKfj6K3T2K3o8LnGHSmVAKo2QW",
  "key34": "2nBg9XNU8PqwYgDiJnF6NwETRaByF1FAYR5TkS1FoGU4acyMvNgDqoAy496yozthQfDxge7kdaihYVXEg83bLzfT"
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
