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
    "5h79uRLK31GwDSdkfE3UTyiko4JskFTc9so3djh5e4BycWiC1J93JrsRF2pcEmY75PtrQAJ14QSLhhgHyHEui6q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58H9v6wsDKg1nf4xrQ8UE8DynJLSfDqrTWF2vcH8jJCofZibeYQMZPeuqdfT52Y5Q9PaoACoT3pYXMAJPLiDHGmu",
  "key1": "3mjsnJovXvqoU9JnZyyS6FZ1ZxVQGeupcsmXmd5EgvoV1bcy9b3YWnhP7oxCmRf6bZAefnQYDodycv1cgFChSdBa",
  "key2": "5hCMAqdqTZGL7Xx9aetDzDRAKsjKBZXCc8cqXBgKJvMSrrRazBGGNWHweB4i7FvbXgKdJAL9PJjgProRwHR5dBuX",
  "key3": "4uNXLpP4q3XgDqDxXXEF2zYDSvHcpyxd1nksCtKWuUu9878f5uhr99Cjdy7zarTXRJYhtvSGXztKE6ub4Uzq287Z",
  "key4": "21Nv8RPeCUSWyc1hNdc5RqkhD3M622mjZCUYin7SfiquirDLYJBpXvaJG55MShVN74GwWo8jw1rs6ekNdh6L1UjY",
  "key5": "55C8gf9HDpAd1iEQneysiZH4X2MEGLnyuzTUN3SuQavd7dzQc6wqAbYE9N4xDe7hwYMtDsSie61cgF4NdY8ynRTV",
  "key6": "2E5yms7Z9PCeiLYZ3U7eDkxXTXnAouF13ToDrtxMv6ZhXAWUUEosbKrSAdaPSmhBFxMkC7MWupy45NoNvBQ2jv7B",
  "key7": "4aggbungTTQ6zr4d3rSXjfChWPVL5WyJy9wXfrHVL8AJdoZSPBq7cKHcC884MKMiCwpnx53eKuDrAvFHVdaLrc4j",
  "key8": "41oQiwMcA1KDEX7yTgaJh9geAiz9sp9k8gBAVBKstHbVa1XLWnCBdmeMPurxPWAKFQCxJ6iccXJuVZsUrWD1nWEo",
  "key9": "4uR2zr7WmMKEv8RtahkbFZY4u7wAKaMvy3uU6sft5Xu3dSuniYYojfDuUzSGFRABQ441VDD55oHEtAq1ps3qnD58",
  "key10": "3QEChVLDC53KmcJj2yPcR4TbHrbuS2iX8pftXkHbwC3yJW51E8ZaF7KhtMxME7grLx4Pc38aQsSSczLyPKzmQE9p",
  "key11": "3LJzzEHjcErqZjGnxxFh39CzC8y7VfirgpqVBxXDbiwL2exzKP2YMZtBRiiTAnqHcKbFyHTFxE3rUAA5nbjirT4Q",
  "key12": "4RgJvoQUgkTJULkTevWNjniHsfLXL47ghAxfjFF3e8biP4CAfWgBRw5jKNrurHPxLPWmstqk8Te5WDHtPoNXcQSE",
  "key13": "5ENtwkPuJqgjFvVXLTccnV1xA47Y9TGCG7V2LYVnzLwW3DYWjPkVw1WBNJTQLZiS8SJJjjCa8iXA7djJieQmtYKL",
  "key14": "5xVf7XTh3msDBMaAr9xTJFybKU1VjJo9X6irUUSfiTCUjC4Uh2TpuM96kSiESPqWdfQViZGQfxmzJm4jQgeNJc3V",
  "key15": "AUnYicmtLtsnLFrW6VFSGk6kbjX1USAeCTVnXMSbvRK9ERWwFknG1NB63uzcJgt7bhw4uSvXTHZVt79YPnsAEwj",
  "key16": "4qJ7fs4TpCQ4hGzC9U2po3XuCfoqMpqP27bizbA3n2V3p9SUZjY3wnm4zrY5Afj8VJvJHprjc5EA4oWTDkaPRPVD",
  "key17": "3Wt46W4hCT5xBKGejhiePD9oPcVYhv9iTDEs6SwdYcdFQvgWENDyhbSA383Kzae8hfDBxSRjs9yjmqX5DQDbGLNY",
  "key18": "5kcNmPbiEKssNdRzhkmRBRSGJ96ieTMUru5KoDKXYXS7uXQUc2eCFQEVmQyqaVAqfEHB9uWk3apgqVemKgQ1VenN",
  "key19": "2W3BT88mNDaPsgdaSz1qEBnQtuu9PtAzLJ5vWpYgjkYjqJJVhGf4m9yfbrrUbBrb1YUWwS9hit8jtmLfoVLSJvKB",
  "key20": "3fiue2dwzBww3XHNwKZEjDPTiDW8EVXdfhMJ32RWCp6DwNHDLksbRfEJtqauzyEzcQNN3MGTV7HWdyrH6XiB8qxV",
  "key21": "XYPQCpAr8EM1vcpfdQhckcn4vHBGt8xwuBsyhVgwfyszA4tv4ziV3yZiFR1arpUfngn6V9MWDncgVvAErzyEij7",
  "key22": "4dLNg95tx57S4NJynEYbs4mietBPiMzPfxU74RB3S5YMHeEhDmGCCsfb9M12p9K4Mz5hCXgCpL7Y3XLiAjwREUTD",
  "key23": "5GRooxLM1A6U3T5Rgmgg7T1QE97rxjCuKMfzk4VSiw79jb48BgiKDhBRCnGZNJBjmfgE6sEP8QtdRwXUPDP759W9",
  "key24": "5NybcXgynyuyxuVFYanhwFtrhxYRuS5P15H63whWsMfwSbTxwoNP46ZRTngfETEuRVKR1vAnKsQL55BYcVwPg2zS",
  "key25": "5DWied1gYZ9PhyJx7SH389LTvETn2zrW4CeLCLc3YLp7dViJZEDfWXKo9jXCUnWDs7XkucdRLj2SAoTRNQcvaYqZ",
  "key26": "2m64o378nCm1NsV1ovHHobQikworGTHnAJCvsN62mfzVZaYqa8DawZ1A8osF2mHxzoViNWWdQNRpGKDWHvGhPzvf",
  "key27": "4zS6MbVcNib51H5BECbiEHfafuLKX5ihLSBZrwN41TEmCK6JbXPCE5VDXL2DpEYYFHR7gHNwtPmRg8ce1W7ZmVnm",
  "key28": "aB4NvTgVSSSkZEwnaZZXUG4ePUffFF941byH2jM5idgF6HyL1mVemwPxrBtCFTzX6kVwGi1MamtQMcy5mVqFZG4",
  "key29": "5UAtpKu4DqN7cK4TJahCQ1zLe3edZBFhEKiKSvcpurVmdSJ4LE8h3Xk4yR7thh2ZKJXePCG2UxMipbCcKrEDM1FG",
  "key30": "61CFmwGubLMB5Azu9KwmXCieovRwwjKQYp4CfqqzStqMVqyUuhZj5veY6WHNLs8xVUbncz5ryyXAVUkm7ErHFtUz",
  "key31": "36j8gbY6Dyohpex2TCm2tyCop7rXp5YrhqzBojWj13S1jrFSaY3187Zqwx78ZkjiZVxh6GEcdWCznnRocmg2HeGN",
  "key32": "iPT4MxPZRg5gDALU1CnGeziA217y4iUJKZhC7tK58W1hxMKGerAjo4VwbUXnGSUSYxhMJNMYn56H5E27UfmCUR1",
  "key33": "4Y89SgMxwnxhXUyc8gkjCV1R1vBKfXdCpWNS6AwjMPiKqXQaamYE9i2w54rcB5Vi9uiwQvXzDuJ1QpCDyGjhQXKh",
  "key34": "4N1g7B5EfWEUpN1Nu2syjWBhM7Kuy8SxWcVg4sViBos2Hpo3X6W6SaZoQUa4Wj48adJFWc7aYQpJLmztosXhTjHp",
  "key35": "RxkSDErZrSwvNbdfvUYM5dardUvvM9aDjxVj7Swr1yRjnmApGnVxUP8jc9f5q2RpMogZi5L7cTYWWxRWkFvXyH7"
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
