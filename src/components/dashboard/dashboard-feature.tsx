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
    "54krpjabcAXAhDvCNJKkno2yRcAurvahSQvYAEKYBpwaPzxgBaHBTw5sB8DjKsGFcst71MHTMn6d7ob3ZNKWBK2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCtxRrBdJxhYvzVB3ryzfYpqMYewGDus5EKmFB7TpduwosWFM9yKUpo7Cm476Qqr78bog2FJbSNd9iWmam9PNUM",
  "key1": "3ZtuNRRAyZ4q3EWpzwHz7D3mDE26GpFTYwJppenTPWF3hCuiDZHpbq8kzKrHFQHwbSXCCVDMVuvYaSz4ryki4ADM",
  "key2": "2RJvrmRDhKK32yJn9jMLsrUvQVhUZpLny7cVfEbf3D3zYFVt1ikZ4qmB7Ubimy3MyjzU7iMHEXdAa33BjBx19t5T",
  "key3": "3DQN7DEMCz4jocLRFhAhD3N7zgRWr653n3zMj6kqDGRYdaNp5ohWZW88KEL68p2N77FSPDeQHqM48gzPSq5UACTj",
  "key4": "3SRiYBLU2W84gPgLtwteYC1qi6vgcjorZf8q3CEdGRqq7CrW9W88Btb2Ehe4bKuHgizVS9Gnc1MGJEt2ivG6cCV2",
  "key5": "3dM9qrFiyaBV7aEcFhx7pDpuQbyQkPNnp4oYwkykokVh87bYzcDNQf8F3M7tHN9aYRK47CB7E1eVmo6TcojdmCvP",
  "key6": "4kCCjc5qtvVFNmu9yGTgajy9dLVV6BPh4xETipw26oKEbYS5zYLav9GNVvVhu8eiHyCBe3Da7ChHpYJ4uckREF3C",
  "key7": "PxjAftVCJeSTPeiQfzMtn9ZUDwh4rJWbiwcmHG5mvMWQPgSLdWnnAkK1j5joETMsUmHFJNSJSLbo8RpoGzcrucs",
  "key8": "2mvGJFag9ybKUitZGVFTKGAEAEr13CZWWywVcCpk2VHz2mitWcqRor4TBefgFwqqK6thKXqxKoXKKDtWT52QQWnY",
  "key9": "4ixcZCqujHPw5cad66AWVc5V9ov7MqbdjBLyVVc3JfBqGc7zbCXjnT2eyEgju4GgrHurLHXXQh3S2RJrWNqpx2PX",
  "key10": "2X7Rm21enJqv5L2pYcjn1PtkanECE7iZCiknxjz7kyJfH1kRYSnauxwuM4ZDtvn9mzZ2wKniW4WqGgdfBkqD8sL1",
  "key11": "uGNtgkWbAPab24KCi1JJY1wLoj4iMU2358AS9LhroMVnBFoGbwfQybrThjxtMffyNfGQ2RDs3N6AdBigh3LUm4h",
  "key12": "vKreKmSKrJyKGTumbWkuN2F9dcY4BfzP6xbeMfLQdejvRTQE53dZiNB7dgzyTKqbcotWvYGusaZoX9f3kRiTmLB",
  "key13": "3X4MKspa7nZTAiC4MCgyJbeV1wcD2TKsVTfWpsrrxUvbqxPZ6oEg5HreovJh6U93nve3jAMJL1qLogUkq52zt67Z",
  "key14": "3cTtSbo1TESvNFFKzQf3UXSMZhnu6DzNpreyhUsi3TYyjtnSYEEZaKJncUMmz8epv7oyYCYaTJRCRnE5YHLpADr2",
  "key15": "58QHgqiDcjoz4BH8YxGm6hjFvqhQDgHMXWw4foiS6k2xQdhAMB5t8SYqfLo6ZCaydU4c7QoixAQJGpsaBZUEugoL",
  "key16": "66qjiA3nUy672hd3rzXmtyawjM9VwLafWULVeZpwGuD6GVyrxModo7VSDrV19hYPyVbv5a252DqbjHwxomdo8paF",
  "key17": "56Fo3Y63ixNBinUNJV3FbPFLdYnVehY61QyxRvh5bEVxdgxgGC9Pn2ayKGRPcHFBxVnS18bo66eoTdN765FZmrST",
  "key18": "3bg6mTJPfBhg614LhG6KYpbmoyLMcWpKPCUfS6CX13HYMm557xSEPXPvLq78GVhsWse6iT8affq3mkqhFWJv7Wnv",
  "key19": "4P8YQyhhcQL4VNZkZ9pH7LDL4u3EbKs2gr5kQiRcP7wLvjx9Xvb7EkG3tzyZrksqWgsZzszno25dk4iQFTdaot8G",
  "key20": "4Loaqp4iE8xc5WGJt2k6RRbkxwejguBRd5UajYDixmZTvQKTvB1YMkorsrXgqGZQW12yzVUbuQDM1nX1TsadhVcy",
  "key21": "j58giDk5hNa2ycS99eAB6FpuiNmSRqLpf3jJCMCNsCCicmHpWzEyFTELp9dDKc1kRs5a1BM8Esc2Lnc6FzSXCBg",
  "key22": "4vymCXqUegVqTQFQSH9wHhFfh3bvgmcF6y3DviqT4Q5qJXFeQnP1h7XKgTJQkf5wqhxLG8Fr7knDcnRxpodAghda",
  "key23": "5RcS6rh2ZCoiaApTfUvz3yMLSi3AeELZRVUhQgV9QF7VEcZ3CtsdepV9XCLhZCFuTtnqtxzk2RjrkGupLCSDr2Ja",
  "key24": "57iE16J462hSeTumYFzCAbWGD1HCfnRJRPMeEsRbFpjHn6HWAUS4HYexwPLgMVDESk8Rx4XnSGzBSRXspNAzq87X",
  "key25": "3FkqejZVFXgQbYXSFErpEQLU4HAXeDjgX99DszwwE7S1cNJfdS5RAMNAwdNKEEecSttowr6Wv67dkn9155NZhknZ",
  "key26": "3iqDwAaYCckdgaCRguhLu4UCjEgd2LfLg3qSqJxQ4aniWv6V9kP1Af4NZZ2s9XHBsCZjN3ntbhHVRvx1iVE3r6eq",
  "key27": "HoE1C1qJSu1YjG79b979csHXx6cdSRBRqLu45WjYGYhwC3Vr3ReedBUXom3pYapmV7xK2yGsxwQPhwcctSyHUVG",
  "key28": "4s738VEHdyvVmsTd7NHAJsuTwdUW7p2Aeh8f7eDmGs194hc2ntXMxm3t4xXP42y3Zhs4esXqeu4YwtqFKTUTtXtR",
  "key29": "N7cja6qBVu5wHTV1kX456JtkherZ17tucdKKyUB28PH76VaCEt5p4YQpQotA43S3nrZTX4nso15AycRC4apT5Ur",
  "key30": "5dpBWWTzES3boB6gh2MFMenn6vAtEe8wt7YPriJ6dKWcMcq78En6X7oWHCMhbqDyR9Pc9u2PRcmQZZwypJSByvV8",
  "key31": "4UFJAVysUsYpfsHwpqMVNfTJebZv6wscsQwPTZ24vMLsqTcC8EjVdayYNP5FSrMAwAHAjqepXTbKY8Gk3pCSPKKW",
  "key32": "4miTk7PUnPsBeBkAD5hcUE9zQMBXzPSxrRaWvNS8NUbGrUk6zCRDUkmvt3K5bGrPsSNwF5rTdRX5iciS1ZzbN5Cn",
  "key33": "2KmHwRdEX781eCrzp8DV8MUUuXuEREBB9YDR4iKmveCNoEHSaUitRDcHbvz34vMCRX38zmkMquvPMhD2ZYCzaQQ6",
  "key34": "2VV6bmFPRjpHKojmEayBzyYp4KqbqWUwHJi54Dod2T46ijVgMS3Eqoi9iRqTSVPaNKrW1QpX6MXBSXXZfPVXS7xX",
  "key35": "4eRZ3xqNEaeMwTbw2gCKTzmsqPV2a5Fd5QiuBnZVoWXYq9o2GKgAseXS5DN9BzR5Ar4SjrTdzHor93ayjYxXbYVV",
  "key36": "DRHxtRyFmxubBPXHDdmixGTAej5n9r99QRpvuJ6vsNLoL9SRkrFjUNVtCnkqNjTWWCJbqwvEtoFBQHYVC2pfnzH",
  "key37": "EW5g7JZ9VUniafaf4skEjeJwtqP1vd1PFG12cQ5db5k9A8FhXDeiy9gfsvDxUAYrX9Hfumpc8de8QUyqaqnhJmw",
  "key38": "5mysGJyQ4taU79sqNPeZazh4CHZGTWJq8DNajrPyjuNHnCp9qKLuxCMF8g1XSptzoqLP5vEiRf6dmKjQnk58kR77",
  "key39": "49gWSxxhGiJkHfQ9WFmAzecQd2W1KT84ZeBsfpwuV7eMUrYGxTanfzCUFc6xQVuoGS5pNkzT9B1nYFLPQJYZQXbY",
  "key40": "3uisAJAyZdVba5qNjFBf4zCXE5qHiLjjxKUrZeeGhdC6rSoueSScy6NdVehk3vHPAhijybNV67hCmJ8VHdnFuACq",
  "key41": "2UCuZhk7SoP3K2CVohUCVyCDt6aK3VxsMG9RU2hirr99c5UQxDu9nYJF8ubQWmiiDynK5mG9avdF6uWjKR5n3TVC",
  "key42": "xVZAbqkLcQkf6DzCptvTsuHENbB4WiPanPBC9DPiQGjpRUkMbtFQC7MECZiByQJDAcjNqK9sCFqYG7DrgfoCCMk",
  "key43": "w54ho6ineh64A6EBzsgLb8K4iBpUWqrsnjasaqpQSmZE1ShczsP1scSX1BFsGgnFAWnPZopNtTR3y6EDutk7XGM",
  "key44": "BsFnWUWEC5biH39eW5Zi7VZ5f9pykzPvcyCtFLodpQobg555ifMGPN3xqMEjyfyTqxRBZg7USefVhxyohXojyjs",
  "key45": "2ftcv48VAQw6dAV5RoVGhZxJYhB9rqmPecFzrqgBprRYHY2UhSbbSJnJX1XbuPEq9xML3BiZrxy5aatRRNurx4vf",
  "key46": "23hXpYhy5LMH4DhmAeJWwthCaH1AtiJiNNkDMyZDZubr8mjbg8oQNgvoj5Cse5vC5QAnCusmN4rkFfTpQ68wfZtJ"
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
