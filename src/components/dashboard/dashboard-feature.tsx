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
    "4MBgLrB3mTukuoNdbK1MoaMQJScEmMCtrbd4pQ1qj3SnvmsFPDKARk6f1CeMRxSA2Nk6zxo2hoFktbBY5STJiMeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKBmKY8AWSHoxhsNifWZ1MgZNoLCoEo5ieTkFtjjfKo6bMAE696ZKyAtkeMGNsAZjM3FPMu11sPy5GizHr4GiCf",
  "key1": "3zXKnCDPnRWNd1MsU4cK88K93tgEVwN91Mii8gpRusmvug9Q3Lt3TgTypGdRfJFwinS4z4kUXU5CBt9XkGPr2DDe",
  "key2": "3HR9iLgzP6tcvDMNKvgGKCg2PKujo3fbxaaubsQjj5Ekgqfh6hY5htAZFGEQv5JUhTUz4sfqQjVpVNYFuj2usjCo",
  "key3": "sxCRA3NaiBeSdZXr5KAoMe1ry6hiLnBanxqcBYc94GykzEEmXfyUDqTRWTuYi5MUq2SCbJFvX36XT2D3zN4FvCC",
  "key4": "5d2qX9hQtGUEjhiJxDanEyRQfvAn9XZecvZVhQ7RNZi4eepX4Jhc4VAoY4WqyGmD52CUvC5wAFV3W918fNA8vouf",
  "key5": "31R2NrdcvpDaFZQ21PDTgYJ1WK6vpAiDWVDpaQArNYxcP2Uwgue4AkwaMBspt87H3rgK5ecXm1EZU6hpN4LucxJz",
  "key6": "4ozkUksgyW8Cpe8ZJQHgPxQJF3NN6VJb4U7zGDywSptkEtnC8d2pRkvUqapT5hkCXRm3tCstCDWwST6vo2nB1fuz",
  "key7": "59dmrKwt8vMYDrEFkTtseKPwT8g2WJ59ZtkEgA3wbY6VG2bwAiyUtqPCEq6PDTjGNH7LCuc79pbfFjn4jJJVTUva",
  "key8": "5qiRpG2QXsj3aPbpSnp2qdS4pFCz7CTY5zDtvLaf8tYybuHjM7DmHtk2YDt9wBUMUEUcMTGtxp6HVjnpm6QnF3t2",
  "key9": "Hp3DW1dBZE8BMuHkz3XiZRBGB78RzKZJc679F5Htw8NAxhS6Gqh3dqZGppJA23VeJJf383TjUDPpNnb4Nhp6Ydr",
  "key10": "41kGDjRTCtRNYPyMY4twYPhdW7z8ZQbz4RR5d9HW95rLbcS6u1YMhDYiWfEGj3XM9th8kaEFTHE4TmVo82zoYbjZ",
  "key11": "5ZhbrXpLqqBfZC5uEM9GbhVibscBzWacaahst6HeqzTLXQ9qKwaZG87ueJaASYtY21K2u1HbG8SePgfjNGv9D8KP",
  "key12": "7CWwvmQDcRyXW9g3o2nV7uwAzP9vk6PBf2StQ1YiCDCiPSMdnab6jVngmfiTNbTJ6eMjdkaec5jknpwCHNexwrC",
  "key13": "5ne9HasspRWuTxAYbVWNcoRaa5qAmanPeKEUzNEuqf2aUZ2hSEXAMj3FV46FJ8bYJNoTKkjZ4dYM7fU4xbj98BzQ",
  "key14": "2kmVLaNjgWEkzVL4dA365qsYhktiU96QMHvG1LNd6TuquCqfkUHirLW8gEdVQgzX8ivf9PVBiWKvTZp6gU7RKbxK",
  "key15": "mhh1VqRDASpno7Ep59xdnoyNF4BRTzvKhhWkGU7MMGnvpg7hQuYVABJ38fyZBq12DC2eHiSourKxaBFfLe2ExYx",
  "key16": "4dTuMLCmHekmH9YJPmQ4bLgyUSj89LvTJQ5JTkBGCeAHuwUFp5jtjiV99gzqmnEHay3nwdZNpWwspK2Aeu7e2Z3Q",
  "key17": "4Eq4YbT6FKSwQngEXx5M5uv8ovK4zEcrwu7sioHF8Hy6YWbxV1uc5fL2qouwSVqMKxkiz79LSWdTrhCwYLwSjJSL",
  "key18": "mDzGqVjThY5BpvNhi2sKDDANQtzMaoDWUSsSYaFZ5J36YPKYrYEKUxwSUWnMHEQDmVB2XYbjnZYsyyUGmnw4qM3",
  "key19": "pyaEb8bgEEQKvPCKyD2THaowXxVgnFLyo38Z18BMKemMgwNxctuRDxRHjh3bYaBR7ufeRDgsk5vrU2XnGLVi8QZ",
  "key20": "2J4A4aXxZhB6S7nnkS2WzJbBpqT7qeWgyhxWbnuTnHfKmZVaaiuLbRR1ZLT2Q8tdjsah49Ffz3DChY6jST9NP9pC",
  "key21": "4RhYC2NLgAp9gv5MiS63f7EsFhMsyVMHGoVbhxovE2ERqkSLSR8RsK2e7fKURbKn6AuGes7Zj5TBfmoAd8bZvK6W",
  "key22": "4YWZZBfpYxYEdyazHEtAyMDkSu2d3jQ6ZgR4Y2bMG1GGerTS9veTEjhUVDsHKQqc3PX9FNhToWjFVrDdRQ3bb9ub",
  "key23": "5D33k8AvMaKT7qMzjyWyqfa1a5hW1CpydVQNrPDTCntrR7z6uUcr976qd3vMtEsUdFWPr1E1T11McERDcsSUaVTh",
  "key24": "564LqqvjgTdawSFYCThagQ2vXFZZPHBC7TmrVGKiaahJn4pCy2ZtwpAx3nWnynN2E3XyaCfmgDuMcKDRorWGMcWa",
  "key25": "64VgdXtq4tL3zNoyBEeXRbMGWE1p4m1tx1PyTyQH1BdNLCKVA2yNGMP9vQa2cwvqSsQdctc8HzTvoQwUyUezB9Qq",
  "key26": "4TVzdf7s2RSw2NUYzh3uTjecgvgc958QjKbUpFdJynkY9S6BSMwa99R3ovaK9AwJBwWgnNwkGucpTDPJA5tBkqSy",
  "key27": "jXgdvwKu2iErGa7zjnzyqNowtaHxvahWCNx8z46rTQfMxfKjQyNjiMJy6sTHGBQw8dGoFqr56H7t5kpenfnz7yR",
  "key28": "2Sx4j4HwznRfsm6PkoHULkze5QmAz2ZQpV8cHqqzYmFVQugU1eHJFFoW6YVPhvywuDCTMJ6mHLTrwVMvQ9vEKww6",
  "key29": "3N1ai1U2v6YhpPhpecZvnaHehtFNvv5cLCHVh1XRUiQ9csStYK47GuQhNf4cYbHEJVadVp1TNy25tBkW2d2DNG8D",
  "key30": "KBHXTjkE57spL12puZ52Gek7SUB5nAoeY6NvhoQFDvi2oibWXdnPD2rnW8JcfjZAYD65DsFZLFeGbtvaXQSbFh7",
  "key31": "yqSHjjqa8bYE7drPP4QpeVyttki7UBnA1HrXgPPQDmv11FfKDAwkFdAHYqBgPoQzQq55N9YLkP5dSXyXLpHHqEr"
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
