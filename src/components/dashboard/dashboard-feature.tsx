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
    "5ydGoP4z6sNESnsXJoA2yYYJSZejppyDBNbACrWLUhR8iVHCaXd32zkvuf6jbx8Z4V1mfCpep1qzJZ51iyHc7GCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b5UAYkYnee6PAEpYNcwf5YMJ1i6Xtbst6hZcJMwQtTpECt1TVqEKZUJaYXR77DQukXVFCF3PYDU2n2iXDvoreQi",
  "key1": "X15P8aLSD5YVuJdT5gDnhKhiepoRwbjMDtJvBo8ihYm2WuLDwprTi8vAM55YwzrfEb8N3WGmGd4GvgtteQVSgU8",
  "key2": "2Mvnjk3dJX1MKvZ8sdo4KkRoLFzPgNTEeT4d1eYLSFfh3i5zP1nqja7sEx7DUh8PfSpmqmxZmcLCaZ7jtLGXv89M",
  "key3": "3JC3Ld1XRN1uEeZv6EJqUGHhRj4r2478SmutXadUxJqkrEDUiMX8rGLsHjhasQwSWKUEVpFFoiy3HZxSNR5cCS9y",
  "key4": "5PFEBRgCCepbtqiz3CCvrM7C7Fw4r9PjcEgDQ13T6yKADkFLf6ZSepX5Hczg1cCuoaDqJuGeCjsBypbueFG6txuC",
  "key5": "4tfwawBivRxVAy629SnPNBm1jv13TjcsYp6kPKw2ey6AXt9QudvELJkvSb258F8JRvXaW9dBWDw2pf1kfe1WhJhG",
  "key6": "27oj4DqqGsvp5CS3ZHk1MYWaAsxqsNsMW4dTD5uPUVktxNYruGmzWV8LPQV7XZnyyor6a8BxQGXyYFTsohZ4k7uZ",
  "key7": "4wvsW3KPEo2UXDY439Mc7YrpqVWNCQzNPTCzu41mBw7xJu3k2Jy1xe6MfU9R6ME5XJ6Eh5wt8KCNmQsEkDcNRJF6",
  "key8": "5ijK2EVmDPwp4RaousQ33ErSJyC1Hjv3HV9fhZ2k7PHQamvEEU8qCriP3bc1WYEJ1j5FK31qwGR7F6W2L3R9tEyP",
  "key9": "37TYLmnfT5YU5fTP232nsePFKZH5wUm355BKzL56T3MFq5EBYF5xX8fpBjdeCJvoRWeocyhryXAFwREP52udUFRT",
  "key10": "2y2UUjDTvVqrN3utCoAQbVPKSMkgVFzhG3ndvWcXHbfzjc2NuREFWrgaCRv2jKBnfEaPNgT5hKdazEyVSjXi45t6",
  "key11": "YSVHCYDsXL5wtYai57rEwCfTUSzJZFWtg4Ba7svGvYxnfHyZQaPMx35oKef35BN9g9W91h7ndSJH4xEYFGZJ86h",
  "key12": "2W2dVD5gyAhD71qMevYfTTf7dLADkG3gxCLQMaRNgg6B7A1v4sPwywUd26xmDuVA3WHcDkhZFP1fxo63mVN1c1JQ",
  "key13": "7babCnhuSTL2HXcAxvMKyB2ZVWz4aQBsXiBQYGz99HrufDNwEFX4xtLzXLr1eUKmkbheHRUQ4jYVuGz3PRDCqeo",
  "key14": "4vDBZtiLZBatX5YRGE2BP6aCPVvuLkaiUVfVF6CNeRZW6TEwJjWfjY8jmjYfmZkcDUVsMVFPLgfd7bgRxzVVJW49",
  "key15": "mvnaiwkg7v5paSiWaVyoeKkNekqibAMk8X5Lm14nXXjCp9yad3QPATqRtPZ8WffSbC2ujVqF6fyty42AXZP81gJ",
  "key16": "4EmeHgh8sFGLdC5qerMhPXkjqKaHHqLb9wRqvKFwhJSjNaUhPsSUKDWstNjnwyV1mDuy1MC38jowdafv4goBabFG",
  "key17": "4MunDcqZwpLsgx1JV9PbALNCD3JB71cNpGUe4QBUcms32LGkiLvX7FVysK3vPi1ECRrPGGKAX9mMkvrg1LDUtXNd",
  "key18": "5Rziira2cuKUhaUxzWmZiKMc1mZ5jkZchyvxkhBzdT7Zkay9gnsWRGoUCeRxxqqKDGbyFGxpipckVXwxhiXWbJwi",
  "key19": "2ye1gYVRQ8XWGA2u7QtJrB7u3iQCnK1wr6QCGi1FsYD5XDUsNmoaeQZuAiprGusgNkjFgX1g1NJR5ZBnYx7HtH98",
  "key20": "5ZmzA6cZicPHEKfHZULKim4bpGMU23xJK1SGmndxbXjP7JtwWN42C4MXkWqZDS1Q4TbrkuvYmCcjxLEf14WNs1dX",
  "key21": "5L8p66EFiLcVUVMnvh4aCmrZSCwyqUPWWmbDjwNd2doJawFQ6akuNJ39MSWfZzc4hn4U2mMjhx7LiRZEbp2wFs9Z",
  "key22": "MuLiW66fszaMwJvqBVsmF7seZito4bLQJ6qF3bWeyMFP5R2xnLwfuKjxwGTKMdZGMxra61oMHanP4rzLFC39p8M",
  "key23": "5Nyo7nVi6QsWJnAHguRERAMKCQCZgGCXRTB8EJnoFTGyMra5sAP1oESF5jxtrJKJxTR4EJK3WBGi7wtsjx5i6Mnd",
  "key24": "4tkFyqQSWZwZd1wRktC3i7ZcZSc1cjNGYpmyvnajUNWtBQMR4dyeRfbAcmpbYvWUeGJST1eyE7Nr3J1wzWsBrbxu",
  "key25": "65h8tQcXVFrcSStbBTXwWQyBm11bU7sUSawVB1CPM6rfadsL3TXr2rAQkpLD3mkCdivJtzSgA6cAc2nrmwMEWNPd",
  "key26": "uHQSy28BhHGtV1awoqoB8cuMtaVLRSNvqz5EHmsCUY1cixZ8U6EFBMjiTujz4kiDURgnSkqXmbkDTwyH5jjmgge",
  "key27": "3suZEy7YMEY6NyEscCTPKroAcshf2bLwW4xHecHAssLYCPDTGpEegDj5sUuhDzAopUcuSv4sMHuLf1g3pNdD8zUJ",
  "key28": "3tMLKW7QGP1k57YnC3Xmmgx8hLRT1pg7MXJ8ENxSup1ZCsZMEy2bGjedEH1GAR2HF9qGLuZ4bjUasujcygH7Ej8S",
  "key29": "3y4tcVuLqzoEC7u51XiAo6dDqJkBqwynDFK2xzcV5XaPKC7hp6Fka6pL5ayqjMtqbk4b1hxWTGxxtnyXkhXqGzEK",
  "key30": "3sqRL56wwiyXjDi8gJgntrcjDLKynVKdw8ft76Sz58CqRAwtXuPonHD6DoX9SJWX92WxLFq2LYHv7fNJEcYVRQPd",
  "key31": "3LNzuVMTC1rkp5yz9wWY6nLQN5KR8JTRUNFq5c8FgD67ZYuw9Bkbb1SPFZQ7trmqux8pya1MgAE9PnxPfrqAme9z",
  "key32": "JNNEKLsf1VaLP2KmTb6DPkdXcA65akBrUVmPVvucpgrdEWcwEzep7Vbnh1tz8mTYrfddFyM6uUkELwf8NM1Di9u",
  "key33": "2sjR7RJW48y9c1mZF7qAViwvwYbt6TxmCsxJUMJGn2sEroP6TDco9wVoaPBLehvfFVUHEXqAR8WtgLn72qKMpPVy",
  "key34": "4CHb6Mh7A1GSvzDZuAXSQz1omKZidau3ABNKiH84zeNYizCbgzV1YYckRLPJmFtj6JyNozFFyTbBAL3sS1XB2Hfb",
  "key35": "2S8ZNhVJUYjauPZyCXqH3yBo9153N9kZWBNZT9VeTVNRG2DQK8QBTRcA8nBf9XV1ULA3W1ZQ2Wpz4x6KfdNsrZpP",
  "key36": "55amidc5VKd87Gue7s7aZxn6TVcBLnatZpEWywMcytGESdYdd5ArLT7c9uJufawb1PLx9mzUfKuehw478nxBdJ69",
  "key37": "hPVAfuN5YEugGzUHrUSPvUwpk8E134LaRt29HeiJa2HUDi93pzj9eT75acurFP2oMHYCh6hbPjADmcuNJtuLXyX",
  "key38": "3Ds9cnn3D91Ecdd6eAcxjwpLhBb8Jb5ASkx4jn2eWAudi3kPQjfAyURNfaGGb3WgAFi6UgsDSGDdHjtE1226mGBK",
  "key39": "4n4xKgfwDPtQXLDdBBHX5TWYgXqYMyg7TNRNtHT1SLdyUa8jYAof74nYKgz2ZYQNjKdgqj6tFr7dzy3Bvh2PWrPm",
  "key40": "5bcRjJGnpLeWittRg4RBrf8iXa7p5xGquGc4RGue2rZwkU938t7ey8Jrr8gfNgrmjHMREdXpTR4528ZbL2jRyvZJ",
  "key41": "uNU3a4DJXCCbnTpBrJp5Tyo7WqriJgEdpDD6jsk2WuQUhmBYFnxSB3RZUJNqeoKKZuAkTBuzXbbVdVwehQVE6mx",
  "key42": "3u6XQxEezyz9zhDujqhtabYAg9kF8x559JNUFJSfMkZkNB3ssFWfi9wDMrVr1MyNWziGC7viayMiuiXBq1WnJnLh",
  "key43": "3twyqiVu3QqgCT9mB8tNhRdtTHm2dSU2EyrdZEfappmA5SHD6x2L61SjahcKFBkzZZoAkDXfSkGD43C95Fb4EfCm",
  "key44": "5nweaozxa3vjfuKyxNT287YwLeA2AWDDncvq6g3Xx5ZBsG1rDugJUuyU9KBKZF3PWQ8dXdsmKUUGLKgyYbxVH1No",
  "key45": "R6sqNV386KbGBNbocToEg2b773FiEYCSSFtmAwzPf1mcRVQK1dvTjwCQLprxLNk6JsJCi1kwReonneAgAfAoToH",
  "key46": "2Riia17XuSdxt2seGbZX2MVVDsnnbwBUN44BepP78Y5ZiDE449F8hFrvy9GmdN2vNdv1ZwZ4CaYSekwsvjxEMVcA",
  "key47": "2MDyd9mLSLjg8nAF9Md3FLZiQq2RHg6FkcNh93bkVbBrNKL3Hnqbp6d3UsCtoFDbd5KwGrsTffZsLSeiQxuqfu9a",
  "key48": "26SnU2uqyThznLFb329C5ybLJCAFkpbDs2sY67WCGVNhacDoBHwWHsajWaYDFtSSyfCHWdAFx9wHTD5WpP71qxY4",
  "key49": "5qTQ19jacKEKj7WjchMe8xPnKSfNSJU6dwaa7TZBfSSiDfSsbLZbNMhSUKTuNVVkQdbiCqZor88Agp3MvdobSPUz"
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
