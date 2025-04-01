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
    "2Q3sErebpQpeQNqhq5Zt2LFkQEM8dT3yiMTBZCRJ23pGwYhWDHzdJ83TGZvefkqydfmE6BKr3QTDcTvrEDQ1yaZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqySB6RmZoBmGjPwBZUQa8Hfi9rj1tgtNaYvjxyQva7EXCoboZL2m1aPorqMcte6ucC9TK3Do6wjR8p7AT1v4YC",
  "key1": "2P797WdUDbKVni2NTqC64vRVWPUWJWHzUuetTCrbBJhzJwvw7FoZHs95EygyobaTHeaThqE9H9i3QbyaumyYBgzC",
  "key2": "3SkECgwuD6ALUQRx3smPoxx7VuMjrEisUkf9zby2bBnAzqPyywyWUuY7vRD5FgxNhGSHwhwrLuNjgdyVQEvgSvBF",
  "key3": "5W1azbmk63asDvPu93Yv3EsMtqfGsWDwQWQGeRwcENviaesRgiBARBDgP3dD88VrD8YbJob9KGeB6QQ5yHyj2fdM",
  "key4": "25q9CjuzjPZbZams3vy3ryBfavSsn5VV1nchs6vuCUXnwAmNf2U3nqMKpgP7PGtQ1FjgCVbcPcDWNyVgK2j88GaC",
  "key5": "2dT4bQ8yTFDyWKXGVN3ZWK3UmgPqSNnfS1wuHjhQw3WmRctmxdZHLqvLV2EDAoDACCBBDXeaWG9Hhj7m4eeFNsrV",
  "key6": "4w7UcDMWzCG31yqjAQX1qGi4xTH7J71Sxshbkte5gZbTvKiSfeWYapDuSeeX6iftfH4uoJJpyFfzRJcVrHq74CnN",
  "key7": "54kjUqPM42bFEHHtQ268nXt2zjDRvToqjoXd3NphxZSHCf8hFELagU4Bin6DzWsnmvgQkt98Ed2RfCpYAZnKg1FJ",
  "key8": "5nUt8w2hjukcNR7KB6CEMEh7bxxwFa2UneX18LoeZrnDs1taTGxosa77qb4NzFSYFSDqeTcrzt9HY3aAqtUwLoLP",
  "key9": "8c7LPUFCXLdPfM7vSLfoA6ovHFdCwUuf7M5bLGJtL1r2jUbpPVd5grgSrK8qbsPhiHT7XRnUVpYHk8dbbU4GyW1",
  "key10": "23Udu7TnofDVmNnNYWyRd8D8QeJR2JZnBiCB12eqRGp3XnANuT3KYgPmPzkjwHi2JCRe4R8wwekqao8g2nkjrm9A",
  "key11": "4MnkvrvidH2mfHntup9fhiKhbK5fWXYPn26HW8ke5Q61CsnCZN8oBifpE17yZSh2xGmvdsNDZhZ3DxuxzK5CtYX3",
  "key12": "HY1VLBe9z4NNq2vw4iizMU7Y8qydwmLkog7n8zRgS9cQW6HyYR46fBwvSHcczei2r4vXW1zPZgJkEu6UHxZkrjA",
  "key13": "E3WuCZpqd6LfapcXQyWP3MRq4hoHp3oERHUQVXkyuWqhSXF1JyoKL8eKjnVm2nF4RLenfFuU7sewRWHft6ej4kA",
  "key14": "3TGh8qW6yY59fxhp5FZfP7yu77r3t6bmoe2ZJF5Qc5NfRrcizh2rvYLSemS2NgTbDwXxUQF7e91dGG2TCp9aWa66",
  "key15": "3Qr4z4PgnnsvG7fpiG2rEEn8eoxXbHiN8u2vrS7nRegiwcJcAaqE8wwj2yw2RM3ackWfWm68RwaFjybAuAw6Tc21",
  "key16": "3APohaD9bXSHSZpjWcdbUsESMrgdnUjWkihdWLsSJj3czVfe7uHwfLEH2juzdrhxppePBLYUQ8LEuDDhjMR1efDn",
  "key17": "2Pdvq6L18rKG9fa3VJ94pGt1Sd5faj8uVrBWRB4tPLTLQjJqHkd5kVxT97zvyqo7cSeLUaq5toQXG4c4DCdQnBjg",
  "key18": "5xb6Sk83tgSYaw2vRrDYxkYufHNW7W5as6MMmg32bSGB1HrEEUnaAzn7nZvrFhrqRpABYcErCL8qm4jFD1Cqqyzs",
  "key19": "4gSGa77hP8Hg2r1mqKYi4EkPRmiAqwFJniyuPD7cTjmKKfJ93TQzyLTB9JKes73CfVDfYQZt5Tsg8jBKm4LL1K4E",
  "key20": "2BhWwhPyxX4NF7pAX7BxPiPh2F8NxyXFWQwBuaih7Ht4zWLLTzqAups52wEdgo28jKp7PE4SiMVFZNmpUpsQvLDd",
  "key21": "2nhWsukYvexhqyPXHY1BDbqeyaUAKwbCxecsyxukpL2vzyQrKShH3B8oLCASeBQVYV3bAU86CoU62vBzUMNXYhmb",
  "key22": "4xYni1rkzmGULco23Xv8ghD25cHBpmC5xzhYio1HEp3iMqqz2oiPusi6QGkxqdgfjKQmRVg6vaZEWcj9aAdXxFgD",
  "key23": "29UYzxT83XTGXGTccS1K5vdCTLVbbzeEZw1Ex5hkVNR7AoxhPo3Gdyhcb9AjKePdxU2LQHKj6yuF4dgbSUNpuNyZ",
  "key24": "3PyskmAAHqAmRvPdnjCewsdeb2cjm73tC7LTiW5gbNzgaZGaPSzn1Nokt5WbrugELRHdT3FRAAK2dLT5nTc82hgG",
  "key25": "43ja3uRqoc5xHRJCZKHDDaX7GP3Zu5z2bDErTNJPtUCUzbiPVZhUWC2EJaYUp5WKSf7fYNx4SXyvDXMrhXYhYgvV",
  "key26": "295eSGMkLeo188Zyd4PgDPkERnNahD8hoAx89PgU2FpZTyzFY8MkWXQfGeVNrJcch1iAzjAXB7p8ijdCXaS58NyS",
  "key27": "3xMrSoEYRv1DsAUb9yeA8FYGtZK6i6aHRQWWFecKURSon8x7JbWV1ZXif9JediLh9Nhp7QnEJj6wW5r2yvd7WHsi",
  "key28": "4PRx3BQskacKyTz8GNp7R95pDvWpjkD9N7gmYCozEF8u79g7ZpzdFdmhK4HNdRKkrAKcihFiLny8fEbRXHTmT5Du",
  "key29": "5H5wyqYVL1yp8GxPXuR2BCvb38NR9GVjeQQrv3ep7ts5QMGFpVr8675JYZhLZJa4ZfZGEYpe1XPRQKXsWkYXtQV2",
  "key30": "3sJBGjaFTKA6dx7JoMMghQ7ur7YVJeaLMUsXxT4wjCPWaq52zmnG7GSh3ALwFv4jYGgY61zpD3oG3zeNEaD1kmyK",
  "key31": "257FBK8rr6sSARsJAmaCTtigv4QCSkrXMxjVRuvmEccqGNF86j9Bu86N84MVVU7BDELpQzratMwdtdyDAEFytLsR",
  "key32": "U5rL6dAjtsnYBsdfpSnB681AvFJ8LGfAEKV5VPjEhBZtxDZMLk2en8scbEhvnHoWadHwhKdse2HUZQqXwRW11nQ",
  "key33": "4rNW6mP4DxGcVwqXXdvq8b6g6HZa7B25fXFNtyfe4bBKpxudYZheSHVGFftjrXwxYWDPAX7CYRJ4FeD3bNWSLPnv",
  "key34": "5EaK1vAEgmJQXrVpRHzF2SWWNkuj9d5VRgLYihbwWx4UuppRz27EVbBg1ckbScEqTzdQr6exwQReZAczC7y42jTd",
  "key35": "2gWEeFxnek5CZiWZCUPMfL3W1SReKAkEyruX7APJfh8o9MxXcayQjYJCdrXZ2SrosatVZeH645w3zKhvivmeziKb",
  "key36": "dDyzBiDixiTXosZFaUqca3oeJ6udxScwieofH8gf15YJi51hAXXmX9mHokE1NtJ4k5SS3NgJ7XpXRkuvkge9JAG",
  "key37": "BvVzRytC7mnxajdn7kwEB8r4ighzPoe68Hbde8dDzho1dZiytuygQgEorrbFF2XjjjRHbWQ7iCBGrpZNy2k2SYV",
  "key38": "4nb74Lg5LwJXExNifFeVTUjGrRY28pVxh8ERXtUE1pgdQiXrz2HGmbgQFzzEcoCzh5eDErG49FHt6MQPQgnKPyiB",
  "key39": "3ZVgGQg2RxGxXCaz5yjyNQxkbNhgG6kiAX5LDwnA21yJu1yBhp7EWGZfzW8iqZxA8qn5bAbWmVeAR2KPcFat7Av5",
  "key40": "5nRro6ZJ3N3mmErxTRWXUT2XbNgt5pXGp6eeviE6mxNQ1hXtFpaBMZfn2Rt43wFbFTewdNJCSdE35Q3qDyNYUWW6",
  "key41": "5DJwZzEugxPkh1ata3UN2ivDMUoeDtZ5BDvpe1hxegPYPmLr8KDi4yugraD1t98BW8bZvK1NvLDPcrB7WjGvQg5n",
  "key42": "3jyRz5PeG8WYqzAdeLiGHDNwxbpPs6FtXFDPYsoPtPDbkcn1ELWAQ7LGwLPzkmmj94w1fW6qvZXUmMpM8W1LXfvs",
  "key43": "4eQohS5nRdqKeqsg1QuYjjCDos8Vs4wa6b5LKuMusRAVo4Czhk4ztsg4JZGv394efcCGvm1GpVUaa2nRHntGwPpQ",
  "key44": "2xDVMTGLsrZSgLiWXjjvDZyQgXFJvDtfi6pzBLkabZZh9JEy4MS8w7q97AXuLdYbqsCZ5TukfZ7gESdForobgfot",
  "key45": "2YoorDvxfs2meyB8fxxchSocSm8adv6KDQKXBSRxD5FJ4MTnXzkCgKUT83WaaQsgN8ZS4fhnincTWfpkCj4RVbbr"
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
