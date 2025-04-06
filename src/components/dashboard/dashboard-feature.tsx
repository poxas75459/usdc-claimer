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
    "36HaLfnsf5dX2KcNoo3fud51ixoiHrPEpjihf85kDm9ZEwTh8EfdMKXCsZHcQau8sBU2NiNHERoSr1eqb79Pjibe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sWbNYfnqkQGNVRMzjj6cFfyLnKN8oArTg6FzAJpdmwmkGG3FhdjP8QR39Gf86McCHQpPrdTsqQGUxs4c1Kaook",
  "key1": "ees6YJyrTAVZtuDYqQe2adayi7bQZ2o38Jhdw1P2ztHHjUAnDpJbuSBhBhZ65Ut3S44vdp43hzjVKn6XgRccbWn",
  "key2": "MhnAXsMXCWMrxY6Kx22J3xBSXQY4gwn6ChgumqkJWrcgykZ7t1zurpsZZ4atPA61govHe2aVMfrx3Dmp9ELAD1t",
  "key3": "5qWBcbVVWs4m2m5jr6FeyVQvU3A63Xo7tCjD3AhRjDvGUw5tJRk6Aq59uwEAhXsbxghApUuD8etRPdYjSgAu3Bg1",
  "key4": "3NNoFWDUJkYNv1vQrGqDVhAakYtsqLUWxdJQMyiktnwt61d9yE5XF7QE6yebAn6PPfGZKKGosod8w87nZ4h3BDhL",
  "key5": "rRpBozyyyrtxZM2hdTdRdSKBCNZtgaqQHkVQyrhpHsYvJwMrMftXyB7g5Wn8iCUbSFjTqMerc2rJHJjWmcSwqAW",
  "key6": "5qNXMNGszXPHETfqsEspfoMtEAJzfRxX7WQFWdHczPWofWTxHMqT9gVK1rK8hC64bVUF4PyZoBHpjuXLgR2HsMsC",
  "key7": "dTUNuj2xVAhx8hD9oPPYXJEHT6PHLrgrRHRG4BcqEhTzEwbUT7Q5UP6wxWiPjgmxKF7cZcZ7zjEHGYGootW5ZQT",
  "key8": "3Bgpnw6xbJkWJmMF864bBBCkzJ2aNYsZcusLyW4ayeg613eCEnk5xCa8JDVS6EYAy6kxFmsE9MUqyqsqWZRjHBQD",
  "key9": "5j4DPY4u93B1YdXSakPVBGTJdR5Gu2UYLN3VDSk8mM75vzH3iaYQh5nmhB6PzntFnTsaJ1XGrNuCk1L3VMF7W35f",
  "key10": "5bpK78YUEJ4p9W8MDUaw8JYrsHTZ4AjjmadfaJUrjFPweJHeDrVzE3wK2BWvv1ghbUXzvny4FeJKC8XGMck3jYhg",
  "key11": "5jB1tDsKDUJ3kBZy4L2YtiH3en3iWjmTE9S2LsRSgV7uUJmYVbicC4GToNx8R3JHDAwjMamDnpNiJVDhkAeiXr6W",
  "key12": "5rPRxg5morzJqx4QaAnahVqiTcQB4CR33QtApNVkh4vXg83Gybk7M8CPKhmnNjbQ3ZfXLfvRDCK4kikppyNpq7wX",
  "key13": "b2w7DXPVUKDvbxE1GZ3QNbZcJqtezPapQ9BiqcbGMevGHJf6JEqhTubN4RqRnP6yJr4QJaW2ii9kNeZoLcywV6k",
  "key14": "31UAabnkAAUKfvoN9aky4KezkdGb2TeDeTfsdhDX2SXmm5QAwDNW9hrWxEsU1gD5U3RumQrkSU3dzPfWucpVkYqd",
  "key15": "254cmVK54xfsVhBcXgJzhs5DsQoez5fd7p31AKGmBWQMqyNWNGLhD6DhRWGaKwVoZndjpQA1dGretH5qUBuTYEsY",
  "key16": "yHntvhZ2ep4RTwuzT77yW4eNmFn5Pp3RCVo5FqP586oJAxyCjVvKEr8peRyhM9tcgALd7yjeFkMw8UNHx79TNjr",
  "key17": "3ZZW4ApMWbaPZZsdqGzHCJuCU5Qp9qcxvFWQd1NGtHiYim6Mu1gzmx3HbHXBJ2MLYDsY6kiiCWh5gepKKrsfh8f",
  "key18": "4Y2xRrUdsSvwYB3rWdWWUtcL2iz98eqrSxc2ccWBVCFpNjHAaCiNhxA67qpU7XQbeX9uiBUKypHV3t6onV53zpvW",
  "key19": "3cMNf8rz5qseis7kweLwDZarganFbESqwWMY5dPwUBt4zXPhYfg6STNVzioUrbppuw4kzzcnrmcyotJuUqSW3HBV",
  "key20": "445Li3LtryZtFmNXJb7deZaviWCiZNbkJn32NJrYfJE2PWeCERHXZG3DeRecytFPQptJcSF43dSPhWwi81VEZ6UD",
  "key21": "2qan7AcD8nBPwVbreutfY9aZ5LphCH3i39xyquhWcEh1zDqh2nHNo1AsuLnHZWivQWeNF1b3gsU3ZA2vKAzRC6VV",
  "key22": "42RTqW2iRvDH12EXNFxvdg3qXySMvXcji1wxCcU6ZPBHMLttk1iewiKJVAjBBsnGHe8iDH2MnpgtFU5Kn7AhFnmH",
  "key23": "5cwZ4igz8UTyzCaqm11xPoxv7et91RM2q4wQRiQek3uwNT1iUQiQCKfZQ3hEZNdGdyc7N72g82P3mTKufyQ454TN",
  "key24": "2XBcwKN69BjtgUR78vRP3CjWAaACp4Pahq4anUCuFjoBzXJSMMpsm8c2cavVPw47pHjfVzTqyjHfYRAHfm5aLRJt",
  "key25": "wRujGG1n6GkDVcpmu1E3k8w2N5zZwfs7LJkk6J7y86RT7LMpD5EccG1bsATN3xLJ4S7VYj7fq7ZYzAgQrJfZDWw",
  "key26": "24JgvFmjuovTffhZo1RGRm4fhJLcvq7Ezb3mLqERHXugPLXn3zf8Xr36LhHxzdGhEHVpBPxWG5tGjgjv18f545MN",
  "key27": "5QwwoRKxYn7N5dzVhC8ARTZRmQ2hwCKZ1yJL8e4v7Rh3Kgdi5jXYARUvQh3FRemSEXrLE7kxyHzWeceMJBQNTWYP",
  "key28": "42VJTjJQVuC4Zb6r6Lo8PtEHSLifHwNkuJGHwYFQeJ6B4m39Ln6Bnewkbq6me1M5bXhSe1qrmodgybZnhiotEtHS",
  "key29": "4AZ1kvuuNbU7xa7ezEX7j55W5DE6wie5zgK6DvUvv1qnHztX53erqp3xrNBMNsoFCSxoPw2fNfPGK5uuxUsgK2qT",
  "key30": "2Ba4FbUtHPfGhPXnBbLzGFXqRJiLhXwXnTSxRUgVkeCxmgYPAPJBkCWR4eNAbMrBaqwniFUcxKytN2bNyPKeAgpU",
  "key31": "29X5tiugZnqnMhrUmVrWRZ3oQnQpim1npJ5Yw65WKa5N4Pa4ZHq5qEVPxYEq58dZacyipJFsrrMa4cXT67py9y1m",
  "key32": "3dxWxVvbsBDjekhTve985S2RTLfkTroV9dpWJzRWShM1mM49GjAoMdqbPXS9MX8kU8p3Rn1poHWXBw6YVt62wakV",
  "key33": "2Gz8fAyDrJYFbwNGLTvPJDruHQxCqMrR5CN36htzqeZtnvoSKL9tsgqerJJoQ83skdJcWhUnNrJD5APMbRvUWZ1K",
  "key34": "3s4r2u92qJJD9c82fPvUDv72bquUuWVLcfVGKGy8e1Qq2LSJHZwTeuqCkfpYjDY6jxt2eHHFREz5ogwN6tmHwCGi",
  "key35": "5qcamkU8HpwcDCrDQoKPpKfAE45YCMqQRDB3W9ExSiJVTeZZVV7LzaJBTgcLogqTpckufK2hxHMyMTjsKFgkiVzY",
  "key36": "4vkxgLGzgbBdUBR7SU7hEXr39w4oXwPdwLKAQGYP1uJgXjNQwKhyYboL6771i5QweZD6FkdnE7hPmcH56NuLxhaJ",
  "key37": "4tVLFeEvAeMsBA4tWgdXp7MMg1vko8Gu9ssqK7GixojiajVkeBjEJbkNxSxqfVApHwaUJxSNp81XEAfFB6rJtby2",
  "key38": "3xjPM1N3NyNdLGeWn864WXHNqVuBaetZ4WQAsQXqEnJzfrnJQuM9vc4dSDqeYgw6QsNrbGPpGKrg4611omc7Ln1Z",
  "key39": "3p1Ep1JcoBRwexdPNvzGE6XLppWyLZdt6BzgnZzkzzJisDQzYLCBEZ4iQ9zFJ8AaU2icAKBJ428SRBk8Ldg5Edv4",
  "key40": "27shAHodLQHnJirCBk5pZ1qrvhGLfPqKk9zRiCE4MDGzo3EKHUD1aSVCf1Uy39i56RTz7pzRohnwYNagWkRYjsfg"
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
