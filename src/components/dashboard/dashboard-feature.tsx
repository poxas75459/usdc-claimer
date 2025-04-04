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
    "2ViEefjvucK37j5DUeJaJqoDCtqzpUbDwwPYLKsr15RTtxz4FT1RzYDTdn3HfLY4h2DkwvsKUhiWujK3sRjTKPKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X849s8ZwCCtDartaZowsszpVVh6j826tgM8vTcLjdcYrMLioTHfvkE72nKyrpDpikVM9M4Hk1mevHevsMr7k5ab",
  "key1": "2uXsULDABD2YVeYwfShoH8igE3rQLkEg4YTxnSdeA7wkUMi2EkfqDtkFBBJJYJabrMX8Le4LGeEGGn1oa86BQAX3",
  "key2": "5wTwVc2y6uNadxMtUEF5B93Zw9oMtXXVmjVQVW4seAetEU8gRexrtesr83YfMnRKsCWfxTM1eL3gQs6nutPo5ASe",
  "key3": "2MX8Rkwotex1JX2vkN9qabMHATeXt1xh5QYZXdMUfSF1qZrC7iwGKRsVyJYA3wtevYeUG2dGM4LTZT116k5ycFvc",
  "key4": "5GyzkfXJvotXm9W91kkMgbUvoSxAQXMiwVuFZ5ZXb8iQq7ttMeZAxuSoMS7DfwMjfotJaR6VxhJHu4WnYtkWRNta",
  "key5": "3dZmFZSdmWZ4XVaVx1NGfRg2NUvnvjsAW5WjXhe6RdPTV8XzaXKATmViKPPdHBjL5vwGV5RyVnQ9zKyg8aWRgoC1",
  "key6": "DGs4yxQVBjyUtfmjA3nbALF8J6endgx6b5vdf8Ujjvuy326q31rPSZD5fVsVHaRjq2FQGobvDyBmhB3vJytF9dZ",
  "key7": "2ybVcDasjh4ZtZTkTXV5eczhDwEYLU6X3NwKnzuG6GUjfhGwM9tHjmyPAH5XpgUobFwKE4dDZZJLZedHdoALDRRM",
  "key8": "29zqMPfqQXzL9zzBZvWmXkxn9Mbm6AHsNqGe6R6fqn7sptY9VBw7BusVWTCdvGTVUsMFCYyrxmQoTx5cucL7BdyA",
  "key9": "LBjVgnWywRPfX6sxMHHewbceYPmzyMyLtwUrsPqm7gFNiY6XFaUsnqydDB1kgfKngoj26vmWtDYyTYfBaPo5eun",
  "key10": "2Xi1HKH5QjLWX9LNbXXF12m3ADuChJHJDKbSsfQphGbsvZu78qckHqqNYypMAWNWYMpky2g7Xqc8B4hkDfyE3s7R",
  "key11": "3bqQSNo9TbgFux2KEaLm1CZbMx9NdbzDYoxdHDCWnsuiVCngCXi1dz3yzP29oSZ1J6XWc1ukVk215mYEr7MZJf6L",
  "key12": "3qHdvEyraaZPBfDTDY9sjtYaQ5HmiDnhFfdUwmjGS9GxY5z52qSdiEUqLKDqmqyKfC6UzSqwbTtkn1pA6DwUmHut",
  "key13": "2LD3Kh9hThEQjbPQddAKJFyoht3GkqbvXEdsjxB2gfq4AFdA8KTNdfG3wLVezFKRcHhqLk93arAodqvezCavGvU6",
  "key14": "29oCPjFo1gwHp46twQXH89zVLB5AKzMvdDTPCwSqbaKEbcmLMBB1vEnNmnGdY2NXaE1N3xaZMzmnuNxL35MYbX3F",
  "key15": "cBiDB2jg4Xv5spYLne3prJcfrDqXnop2PiTphLpVhHVgSSzyN8WqyQEzJNybRCMXW3THmhHrARr8qiCUJUqEixX",
  "key16": "3k2sj8e1kdcH5S2DHifLequr3gVbhMPAs9qkwCyjde2S7jJ7QgqsqN7vLLGVE9kChMBAjM8nyi6ifJN1Z98oNirP",
  "key17": "4JeM4UzQe6hpWtHBLyW4SxRTrs93u5znThTPqR366XjR4HrAEBRegvfBLSnJNRCDbv3UmtXMoGxzjZBYHH6wr66x",
  "key18": "VqNgWcxt51FoABEbxWA6AEjxDCqhZybbEN3bsQfgF3pH6fWhMaZvAp6HyYwWXGSAkcoTcBAdQWwDoJGfNi2rV91",
  "key19": "27z5D9wihhn2BWtVJr91BL92tUZp7JBcKRNTDJfrE78QWnsCgcSS5DufrRZJCLk3mqStuHt83LY7ZZQw8hrkP4MW",
  "key20": "2FALgbyJs9X3cmbb6pokhErEYch7cQveDxcYJoyZ2Xb9yr2MYB7W7hyCicojK2We3m1hcm66nqG7idCYkkLL8iMR",
  "key21": "4j6PJy49yRppVm3anyL6ENncw1FC8XNmCUSVn6ayaeUbEStM95iTVi6KYLcUJ6pqRBeDho9NSo96b1kCWgPUdDyc",
  "key22": "3roSZeL8pkTpaDRTUpSEVfCS9kNo7mskf2Kh6XUtHFr6GJGcXYWcQH3jNiYPmowvXd9Jw3bVdcjkjL5RuMGbSb57",
  "key23": "2KaFDGjKSb3wUVnsrJn8JamHiuKmzUotS6VsxLp9k4TZANE8xGN2UQkEyRGAoXdV6t3oE17P76UdTHg8J7zZDv6y",
  "key24": "4Z6wvoZwdyJhY4zhGD2ZBVr7vPjmsmdssYMarTkjcvtmm7xEZFpWTNPcXk5QzqShtChzUDjz4ALZ8ruWcm7TbSuL",
  "key25": "2gMLWfv56DDRUayGx57Gz4Nf4YyncftQ4Fccn3UMSji8UzYPEpYNRuP8H36wGvCHnKNaqqv2Sabhb5ctv1snDxjp",
  "key26": "3fUuzmpiGRSwH3YaEGbmGxjTyNzBh5y5CsVU5tH3cpjMxZ1Ni3cCkzV4AX9rKSnNHH9gUpnMRscXb6fdhrLrfXaz",
  "key27": "3b7cgqqt2RN6C2ph86YrmWgbkiQcDGxuiKzWrjMq2zPvBNaWFHdAJaHfJ8CGRxcPZt731kYER1GhkL2pehK7jZa",
  "key28": "5QbahkiwPojXwyTUxL5JygHDtb2KUM4VPZbdLSzhdUYDRkrMPTt7mr6BZC1FSKRwtiTy54Lfopxf8TmKiLeGMz4N",
  "key29": "4vFxWAg7neEG57D8yHaQ4xJTmnbHRKSsvustNKj7C5kHk5Rp4QNbCPuNxJbTiCgWoUBCzXDbLPWifiu4XkXP5VEA",
  "key30": "2Rrf5DMVKRw57X1LaUt54C5hCvNqyKngNPgTet1j7ScJttTUHs6FYs2VYCFpazWUZom4fs3E8VDcyZN4APhZrSvM",
  "key31": "4wQnNAEqW6fYXW2T4a2VDmrgJshsEDN1P7ekhWCe2QMY2XU82sVsxX67dewpxhwuLNCbUmXgB5jdRpwGH9TuKQ5U",
  "key32": "3mkvnEJFyZLeEDSABtSirmeoqVgHrxUPc61LgcWKdCN2kgVrfU6ZGPnvBpTERHMR6aKeobrUGiDW4L3tGXgCWpUW",
  "key33": "2WSKqBFMGwAfpZvn9AxPVwM1kBWE1sEzTb7YAbsb3V2Xxv4pudNsKqj7juzm5eFTcZNJJ2FDYhF3Do2vu9SwSfNg",
  "key34": "3EPE8bAPXvdLU7F43tjz88oUBu3Wpn3q78Xv1HGxiGv4UPNBACZBtrTcYhrT1avQqRrhDJ2EtDKVLwW3T1tDeP78",
  "key35": "21jKR8kvd64T2JkRV6ZnDVZBP3CYRhLk8VNezPYXhujeBpJX42CR4NvF9jzW3xifZ2kAJS6WVBrnvKUMoMhdiYJb",
  "key36": "2GrEq2kFeD9knFg9W1ogJ6tRoBs6E3FDzxjfTqZPGx7sXjL6hjrpUTzKFAj9Z9Z9EZLG5hh8Z26bvwzaMNQvGdER",
  "key37": "61MrVwkwLRuSb5DaAdxkPMMseVebqUCT8ZE9MdxNTRsUen3vSQU6Pro9Dt9f4Mnx2jRotBoTAW3aj6MhrNR32WWa",
  "key38": "2PjcNkMpiwrYJvEWqSi1XsAJ6bFnbUGgGqNQJbfL28Ztzph384Ecd3FJRht8kCnitEzs5RBvKpGDxXsn97vjSfuV",
  "key39": "4E25trJRbodwG2LZi4rsW7HK4R37ahRnweJwxWtKokXxq2aHe5frV15CphMKjhKGWj3PPbz1EqYtDzToeuDd84fD"
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
