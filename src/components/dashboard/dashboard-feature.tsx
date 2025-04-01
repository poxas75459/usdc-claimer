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
    "5od3sR47iHeDucvX7KrUsFqsa9FPyf1626HriU6vQShbtjp8F3PCzBdpDpSv5Hps5ZFLnF4yCpeBZNuow98H2bHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WXaJfTm3dQaaim39StjV5bd3AV49RoSwzvD6U76a9KithruU29CqurkpqdSCo3Fm4N3kMweyMsGKZGTrnS2vNQk",
  "key1": "4XZbFghoKArJ78vTfrWgjhJQNV395NN7AXY6bkwu9ncTVTpRGwgnKePn7vRUU57n1q7Bb9p3YbnvNpKizAAJKHA2",
  "key2": "3kkiSwpWdvVG331UjrzWacBVMMy9zNFHDjv6qdSNPfAkzMdkWcRTW3gPxg8wqWTwY3s8BM65rromWHtPUrkmhdw5",
  "key3": "66q49NMWDddwzqFSmbL4dA4YT9KMw2mjTynvMDFtDQZYiqkRtT2gn8nbqstoUK62kBAJJXwZJeadLbjr4sf65U7X",
  "key4": "2qgQQpypQ7TCWV7SxBAuAQ3xCex2KNhy4Vpfjigy6hfniMZHThq8ZSFwYziUQkw2ERjz1ySbj8KnPtrtRLjnkXR3",
  "key5": "RpeDntN6YXJeEJiy4z2JyJ63CmMztH5Z6HZmxhHryQC7GtuuXxhjyGG3oXCUkSFYYMyQigTzHTgfnbGPDDc5JH3",
  "key6": "5fjQG8t1zkz9wfPcuKEuv6337J8RFXhNUbg4PbuCkhAH9Ww5piTw3f6zhhvvzAveuLa1efPhWyFi5ympwTceMtBX",
  "key7": "1G2em7qqGFYJ1YZzskukGU8Ej1yksTG1wozury7uFWiqWoGW5EdAPTY27G83sMup7UpogW9TFKE9R2wV7TByijS",
  "key8": "3QCrydzweroz3w6KDzwZd5H2b2rTnLyXFnHgA6cakrAzzTeXJWF9tZkYJzexhjDz1L8btAyBY2jMziEYMRCD8CTS",
  "key9": "4LsPLxJKdX6exbPkXC8TLnbHf5iXbyzzjDqDPiWKxrjwGCRtPn1jNpw6K3pUSaJaUsiZafPGaTHeki6RC9U2fZT6",
  "key10": "3EoBbFzrPfEHMWqEeLdCjYm24a6VHhywSjtS3buDekvvxNF4DyPQUsQWk4kGgYXytAB4Muf9oGse5h8TE1KyTuQj",
  "key11": "ecyzMNhQEhGPGufqFTXyhb8Ve8eUN8ozL1b9igUjMTqLbwJPBwd3Cp2RdKHK7HPxdmANCdjH1ZeYTH95546aHXZ",
  "key12": "2MEUZcBZeNWizG3yYkbvonHB5271MP1NZAMAnQQKJ5JfmK5zn4ER2xFt2dd7eJCd7BSyYYMpf3r1RJ9jZUdGWCfr",
  "key13": "wksxwLwPdZvnD49kpdwekiNLSPYLZKFvscxZ4ydJ7LLZZrQYRbFpdfyfuQToxqnjdioar3YU5Ceowe31tEUDFfG",
  "key14": "4gc4bCVMwf6DpmnVvDtNTPJDN2cBHnHBZC5R3Z2nSbasnGedHFPRQ4zRSpXWjaigLREWvCh73tG2u6V9ArKxBfWR",
  "key15": "414KiQrtMuU3NjFLZrjw8vjDtNS8m4nFsKsEXGCE6TPhH6QJqfF4xmh2ikptjFQNP3TShLpEh343S9Xjrvdwr1Ev",
  "key16": "23LWoqrwK2orU2CHGGkfCCuJhkAjARf1sPo4sHwQaWQb2yzrnZU9Afz9CEzHYb5gtzLvekz6MByWPiB6AVgmaPfH",
  "key17": "2upCMAsp4NwFJ15NuBsPt8Tto3h8ZnJWvipbX4tGJUSBm35Xxwpc1Qro2ngGBZfyFfrihTBqmf7RAb1xTYtQSzxd",
  "key18": "27xzFcJzBhK8vebjPmEzLYLdn1u2524PwmopTfgmML2LyFPxaQ6YJ6qWgdUJEVPzgQzieeMf8FYjuPBej4xF8hZD",
  "key19": "2q1TTgoHNucXWBm12jsVZrpKWwYyBUqZA16xAgZTUA8oHdiztKr7q1XA4MRupusNxb1AQ6CGYsGMNnK7jdXwS18f",
  "key20": "4hobv21sCvSrz1QcP872XrdFmkzBFq4HxPo5wSu2skWgbjVtMwYHSv7sneYS6LHjWK83xFRW74XyBMPn4gxxhvjS",
  "key21": "3SNq1j12JaWzNR4jgojtT92QSHMbEky6wXtVh9xpD6Mqc863vj5932fcSW43jq6P5KKfuHqCmr7ceLa9fZoap2iB",
  "key22": "29bF3HYxzCtXdatbxyxL5jXqXgvE1x82yJQgABAWqrKprtHfjyxZvF9P5XSMszToKMphWKKMsHJ91wHodGzSWzYi",
  "key23": "2YYnTdte6kMJQGAT6aiNDWBwVta3jQFpgcfjDssiuVhDaZRM7ctMCD2tzdyVV4y6tcRnRCv2rk72FdiRxMKANtF",
  "key24": "2SP7NQ2gPR1ufugspUgAvggRu1sopWpvEuKiCcAwU12rhRcc8YRjLtBHHG9oigJYJdSixJQG5UtgoAbfQyfPf4Jz",
  "key25": "561JDBJknE9WdvR84zMd7ThBKDDBnegEo92MDU2wgGSpn5CGwNXkR61yj2rTF8jP2zJByZWPQF6hQPnnwuDWL5q3",
  "key26": "3KF2VvjJBrCzz4FyJFaoWFJvnj1zKQJ8zovpFED971w5D1JTarnz6EJYSVK5kwMSk8HMpxZNF1AWc5GrfDLhuwBR",
  "key27": "qiCiwngWhmariC1wzW4zNWon1ggKwFkC1whvnU6FWNC6XqnrYRrABckAVCc42LtfSP21f1sxLXsP9bbu4qySEkG",
  "key28": "5xUxxNiE5Qv5HCqN56rbvM5WcTb45VCgJGbyYbvrEWsbjvLE8CYTJeHwNY7PbduEp3hzfQjMUeijrNxtPmYgyYut",
  "key29": "5qkjhuG62AQYueVP7Tt8TuWHxvmJyfSk9bx6457PfwiHBQbU1rbUYLo28vL9qXuF2ynVTyCwQFrk2BG6DTbD4pb6",
  "key30": "DcFo5MFvndSDYN59MqtDpuY7PntZ5o92c66ghsTSSpnagk9hjf5SfeuouPJduDDW6nHtNXESNq714ikVhw1Yk8T",
  "key31": "NWttHWdXxm2ewDsVf3yGqU3FjZYaY3fVGsEPQT1xCS9Sm4ZMEH1or4wxaDkeghYWL8zYaqxU1jwze3B8KZuTgYV",
  "key32": "3FkpQoWzggcUMY1bsjPtBZtm4fThVFG4uCzqXgMJDuKnA9vrv5MArdWD2HeCAMFhu46KKXTiYVVctMGKfr8noiZ5",
  "key33": "5Nv5jCsJAZUPCEm3bSS9Np4xUew7RkJ7t2HD9z8EWUNwkZXmXMCXouZXdqtN3CRoVuwDBU7VtnJJTRHVxNyVPd5V",
  "key34": "gHmbBJ3nohkDqchWQ3evSxYaeao9TaTkgB4AAPWtn8uMtNaQSNRQaC6oTMry7urzUwe71njVzcHdBhbbFVdwgbk",
  "key35": "5zjDhmJHrQ4kZPcMrGCKjWe1ywvJQuajDJ5xBa1swBHEEW4JgzneGgCcyYXsQH9JYJkDP7Yc37dHYx1EepxZhYNc",
  "key36": "2cQ73eZGihr1XRZypb56fwoaJwZLAy7uZkiRUPPiMt5cGxWDd3AG7ctwna7mKWt9KTBQ8MtBuQbBmQt1mAtyr5yr",
  "key37": "5m2cJYm4jqsAAZaiyue4LWaKy7r2aTkSMuX2qu1SqVG1N2rn8ZYpcSJWWtot457GGfBrciuJUbwa1Rw5ekMdathx",
  "key38": "4RrFyHoEQQqCKxK5maHq8Es3Yfuh7cqaddMZsUVk89N47GbTfcSeRgPnCQyPpDcm1Ef5QEx6r6e8b41pRMJB9org",
  "key39": "2qo8zHhvgwBVUU3stptbfzgwXTRtbiSXETta9KTQ8TaDtse5reLKZihQUZA53Da8tcDYcUjPK3wkFCzMJLVJx1bk",
  "key40": "3DxtLZXasVZX5xWnc8VcPXkKkxYkKnTR4tFTwhyCnmkcrdxNe5YZ895JtroCBjf78nFbhUhgwUWrgDzUPrepLxfp",
  "key41": "1qUMY4DQ6Uw9Z6Wdi93iRrSJaFBuhLdaSV6mQh3apS7c94zfPgwG55fBqQHMEEJ3mvpgdFx1PARD3PE1X4MQcp2",
  "key42": "3D9opY8amFTYHH6ca39pwQwpbLa6U6FMkwSciQH9KzZvLz1UKF6PJuPYy1okLLEBnYzN4SEwhbtAxr2BjZg5F8cb",
  "key43": "4pbNgzn8Xi981CvSP9zfqwteK39QH2V1yFuEUySfi5wJMiix8br4yB74iY6YQhZQ5Wt424iy4143pZmUcTyKowMw",
  "key44": "4oErS7KUt1dcJHmQ84qBdBndMoktmAmwMPLzud6dGp8pi6DkRk5zTHDZGC2PAiNG2WhhMpKi3CV5QTNTLYPzXXBo",
  "key45": "MgQqGqxdvdooAmRquAMA5PECz1jQBFMgoLGfSX5HhDMFmebS8mAfR73xw7kro4YkiwvYXDe2hpdxN8JGeuiKaTt",
  "key46": "58Ha2tMgUFuuDMS2A6DS39ifUEkwhHPC3SehSBLCirPp6YzHSXx6cR5bsjnQausfXAeyqzFgUQR7E48idLBGHbEM",
  "key47": "387GpGPUmgpmijs2XUCFVabgbTmbTr4wdgTcqZcF48F3qYTTadvzgvy9Aogvu1vB9QJrZNfyqCeDu7qJ9hDzga7M",
  "key48": "3bamjK8cUiT8Aeh4bYUhwThbGxAoDpZQntJ8Qu7QQBNCFBUHynTZNHjQDjj6vDmnM87P3hzBmdBU3sfT1LiqzbE2",
  "key49": "2UaQMsD1MUXXa2YNqBfKLXX74k13NhPiAUEtPNQPBf3tdxMBY4dn8cjy1yszXHSRLYqgLzGLq4q6CQvYWqiZkS96"
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
