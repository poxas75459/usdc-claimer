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
    "22nH5ipdZC1NTdVYV9SFbX1z3f6i9fGhSeMJfHyeN3zoWVqCSYuePC4B7CgdthkpUyFKdnvMREHJXmMLDVauMYpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KoTjhmFPTKbEzcygMa6Zzbr7BJZsS7yoWVcJqSc2Vj6e66tiWGPERjZCGmF9htRjbdFX3WYmSaN8sMVDBqX2r8o",
  "key1": "SJfmorBTcCcpZkZ3SpsXRaaffH75LDZfqqvXemz96JrPy9yjg4p2qr7ooFWDHUUr996aKPjFzinEUeF1e1igrxB",
  "key2": "CrmEfhmiCdRgE1zGoShSeascHyu7qW3DrsVDzgiqTZdK4oZJPS54t6TPSarX15deqbQw5srj3xKSmnJ8HLW2PQA",
  "key3": "4yxWuLhCCuhZ52un4JtFJE419XMFNfp6FrBYuY9MSoPUTV9rMT2PPbWWsGGzrXsWk2PgtrqV4sxPF8tVUZyWgMkS",
  "key4": "3KxgZk1ViD2MDKJUCeuhF7Qkv8cf63HLzWgeQ9Lqw9k1wAkTGnZEPdAMS6xrJ7uQ6kBZDM5byvedfpTrniWw5F5J",
  "key5": "5662X6AXrx1X6dbLhsKd5mm1r6pnR8ztZW2GSfNvLnutrC2pii7ZaVmnK1qBSVDciBKgC9Lu4abuE1WbZQ1Beh4K",
  "key6": "3BCF1zmTKoP4K5ek2vMJHMJCfdmbhzye4s4VqmXJ92JKD9BqcxQMEEjmxZaXUCTC6akyLcN4JYxLjE7mTQwif3sy",
  "key7": "5Pc8CaPQYEAUfu6DkGJ1nH9n48f6ckKvdUW9UzdERWEn1fijPHxYcFjdJNbyKWLfLx2hZi3gwUKECAST9TJ6Qfaf",
  "key8": "33KLFdxsxkwsrCtqG4Y2G6tJiF5sibxMcaf2a4bA3vpyj4oV2wqgJLCiHUmcaw9m1ccKAmjBMRXV5T4i4iRo1LvH",
  "key9": "35tqrQVKPKjYVoXi8rM78kVJdUyZ9hcPTHeNcQZMdu2M1g3cm3hpekM6DHoQ54LfXvk7sW8jcAEN9tCRe2r8zUFH",
  "key10": "3w8pyAHrfWmocqwCvf1Tv1MbqhQj1oSwpztMR7oRU1RQUgf6oMYNwss3NGJHuJxg5m6bA1Y2aV1Wu2buv3x12u5U",
  "key11": "21KVP8FMcrUkNvEXL3CcXUReJTPoYdgCpsehgR7ojM1CZ8T6j7rbiZz3JHqasayBct6XHDwk7vypBp7fWB9UBB7N",
  "key12": "2ym2zSS4XVF3aEBtu19KzmbHKibYX3Quc1ehrAjQZ2da8wqcqpxKpufsningbFNfZcRukqmiVhdyYdnMKror4hPd",
  "key13": "uSiW2Am8bDTCvxHjiWHcW7iMdzs1ScoUnoZpbE73Zi3PdivpXva9uAtgqTXKsw7ghcusNDnG5SKWg9hvS1325Y2",
  "key14": "XUAaBxbCUtpVCUtjKt2KCXroQLhQhfTb5Thokbmp9hvCFa4HuK3uf5urzpKrtsPHEbJdPQBFs9m1bZZEQpawZgn",
  "key15": "5u62S5BreSjFQSELN71sbEQyxPw9qmPrKmGmvEyJXwQmEDGkA6PD55aXZPcVRfMpHzR5DyWqYSBSzNBL74WDHUn3",
  "key16": "3FH7xX9QCiLHB8tUgzzWhiNA9xgW3ZNKCBHzNN1G2i9ghthJKJ2QBwmYZH64BEj2PGFCfivzLk18fMvVBkEVgDoq",
  "key17": "2hCtgpbq5LoS59n3Q2aHzupskH3Mhbn3J221bPadadJt15ZfY29jtC7HFUPr6VXm4dkgwp3DsqKWJaxGRvNAR7CR",
  "key18": "23s4G5X2KtRvUqa7TB7gtdKeQRGLafAxu4SatYJivVZdsjpkhNFTxcJXc3CH2GYbnGtxLdKNmyYd24fB8cw3MKsk",
  "key19": "4CjMJDFG7KLtjkTEUDkD7joVNKB22pPq2NGpyCCpYKxmtvryCrBBPE66fmWySwwwWz9e3cSwtaCVswKqdcZkjh1h",
  "key20": "31JuBFCfzqWqbQYfPoVqfBrKBZL4c5TLn2quwq8Wy4gfg7LdsGcaJCeTQHSR3HxB9pxEusBvaZ5GdfNxyabzNBVh",
  "key21": "i9abXmpHmLgVBx5dVg6SeXVGWhmDpxVqS5bojoJ2t7yxjKiS8bYdXNDGKn9pDk27TTUqzXGPwVZ57qRUTPdGhw3",
  "key22": "3jioysEs3BiXhKoNKv1hXkCfHmFCMGZscQKKipTj9g7TyPp14J5JQC2PXDuuatX2PVt52Ub3WEsAu3PTpc7piFNh",
  "key23": "uquw7AQoJXHmBVzRfv7wWv5mLSY3htkDEqqnbzNohftWxyozPV2yTNcgFLbCnGcENfKzNnanPnuzGVxRWRuaZH8",
  "key24": "TcfXAKQu7YSrCLLWDAEtwJiB9J4VPU4EDA4CgudHPpBQdaZwapcNivn9do62hu9ZQixW9Tvd7XS43AMqDwxShXu",
  "key25": "55QZ6qEGRwZVxsueKuig4ipTjsyuz51yNf65vYxMKkayTvhMek4ZBPSjDrjRWdZCwV8dLTsn7hqTxkx86mhgNjcw",
  "key26": "24VkQJ8NNqEVVZNxwVi5tARZUmDFBzQVpKGuGDGGTLzkeDdFcZDRAD3eYtWJEbJPhbus2KTuVixiaji8JJtvhMt5",
  "key27": "36XSwm35WbHD2q39BwaUizfZAMjRdLPCNmMQYsTVsj5WGSx1CWY1fd7Yw5G1sZ99WfSMZtX5PRgGHPmWdkMNFQaR",
  "key28": "LotELHN6qhGaC2i4c1zq5zZtfG4Z2QyoZ8zTuL4ThNv58oZDBHpLTpNKwkC9k8w8qQuUKpu6LWVkrkggyp3f58S",
  "key29": "3c7YNvU2HsQSVAzLaG4z7tXJM9hFKoqhPieTEdtdFEHS35rz6XUTJ1d4NL8xNbXLevPZuSB1dsxL5Ca4TeYPP5Nz",
  "key30": "2NtVhdJJ7zS7oZcW5jxCSf5fHxy5YvDm2oVQn5HN5jzV9fSb1UMxgvSSvLKbfndrhTask46ibYiFr4ZPWWkhEGGj",
  "key31": "4NpPRMHo4itVVXwq3NsDzfnvQ1vLGeG354xjs2Hg7qKRdNdsBZbnXiYBXExqkw9PpKBs4V2stK5DaG5YE1oBnY8x",
  "key32": "bH3K6Z9aFZ8vrLpCEpLqoWAjhf7S7VeAihGiYZm9VCf2K6mNY7mTcwriPYdBJUB4rn1bQ7gpt7hMLbxrbviZyrj"
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
