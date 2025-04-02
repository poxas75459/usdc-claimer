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
    "Nkj6EuBpVaQBxUDDC9tJvn3dohEpN8MRfmoEr6ct9Tx6FmZmfZUhaTPVoup11f14A5AsW7NMpMC3S1AF1A1yE73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K7ZSBVRn6DsgsQ5mVfDC2T4etniNtCpwiz7Ad6qMo5wiEz5fM8C6itARB4uqScP7MrqttRbafzHPuzLp6RxEpDf",
  "key1": "1XYsegvvEu9QCMMiLy1Z9w4DnUbmL7SYFPi2sCwiDEMfpFHomgSiovXApUwRP2iLkqj7U5Qo6LPcb3fwekku8kW",
  "key2": "5DhiY2pyYkHnNUXvkz5wURapN17Y2SjkpVAZgDKousUnCuxX3woCLhbcYhrxDHfLC8ufG19pz8tUqPYDtxLN9jx2",
  "key3": "XJWs38vSb1qvHXXjGJRVNKXBNCi9n8b9XXnJ3Sp9yQtQ5HrVeF4RmFXEvw7kp8PTrEHfS5EPpneuyx6g4wXEqWi",
  "key4": "3gMJxm93upcWLP7JieyCPJ2Ek4opP6GAeZ58TtCy26QipDYgewhPtZzyLL3HZ9kQK4GAxCzwJ7niXuwYXedgarrL",
  "key5": "8dp8kMLbsYMBpMssu6s9x3XfUBcMd6Yhi7nai1Nk1jf2qJPvzacec4UPCYBMoVF15ZrQgqWvs137RQ7tR2tMB4k",
  "key6": "34SD8PiZJcoH8F6fhFRBEQoMZFcdFmC1SAcnT7g1WhjKui6s6ZMGsnC5EmjDkGEM7cDxKdohjcX8sJfTmiqfTc2c",
  "key7": "4urbAK69EDjKH3w7dtBsxxjp1sytFgNGMPVcPNXzthdwtYHJcTHAbyfE4c5eUNAaARC9oUBA9KpnZyozeeTPFspw",
  "key8": "5aVBcdr2rnwFYSmyA8ZaqzpEMCc1xXj9KZj2cGRzFvoTD3kWKkREFabnvUoEAQe9TZoCNFktq7xLW7VDfeujrrEF",
  "key9": "5cAqrt856hgvigZ3bY7a2g1AyuXbXgssd5SKTkrztseXs2ZKLfxJ443LR8FbGEXcgF1s5XhbKc3E65krxtdebdAB",
  "key10": "xhMjj2qVZJvZwMu8ifXet1pgECymTb2Vi8eeFZQJ1TjbZm1oGWknGVMyo88YUK5FiiUbbxs9K9ebYPCV4M3ZMrZ",
  "key11": "4de4sHmXBGSUdPBNFd74Vdo4NLVJ7WFbuA6yWrYzE2g2tJTBUmTcrQrpeQsvSTHMZHffMCcUiy7oNmn6Rq9Ut4d6",
  "key12": "4tSVRpxHMMvHCeaxwTtd3TL2LrbpVCcbi2goHxW5P7E4DoC15fVQeEmC6WCJ3CFBLswNWF97HiqPKi5GErF8Jk3u",
  "key13": "3HhZV1pUkuEJMdq7tu3BSCWwLXCtvcNbX8wssf6pFfAbziML2639pJuxEkXVguZBDnLaE4sgwt2PCyvBVfXaGxXx",
  "key14": "5C9vs1y937NNAgYHG3fLX9mf9RvnAi1ZLGMidY6k5EJ29c6yMWANBrHcMqBZSxnKZ2iYLY3fcWGg9Nm6KQZpAYnv",
  "key15": "3eGrcksmYpLKDs9scEWrGQVEeETuwZWgVrWEJe5aQo72h1AZsKYFmB4yJN534iTiPaGvV5tYxnwEZMZtPW1VqaCq",
  "key16": "5gg9HGCvfUMQJMW5wNsXNj4ykDcoFAkKCnRFnAHG8L2MF5yXPXYNZQvW7MP2ANXWckPv619ry37QHHqgD3Kc9u3W",
  "key17": "26jTdwpYGsFzKXafoDboi7gDLcf86NeGQKbCdSv86g6uYs4aGuVhSb5jBFPukxbs9zx1n758AVG5zaNYH98Whg6z",
  "key18": "hSfx46WiaMBZAWbEA1FnXHr6gkbrcHDCvBGY4Nbv3ct4Z46R3MW64PFCiHuiuEx1ZMZUdTni7nsUc5CcPuJCpL1",
  "key19": "5En85aiGB6My36gskixEEteognVdXqR96UUX9oqtbDryso5S5tismoiQq7KE26YNUgTbvBKBijNGKo1Y1Z53m2gp",
  "key20": "3AzGj28JFUYGo3VuodSuxxuJALsrpixhmPzue4QrGTf1p96qcaxeYWAwN3GnWD1A7uVWjiVQgs75P7q1cjMdf4pt",
  "key21": "5Rm6XNbmqKUMDkLnSYGLn6aAgCVSLdiExdLkPGsbqGHZ8iP7ApcDaZtMY68wW7AQbXEmVJhCQvTRRdVoEpMyu4yd",
  "key22": "5hMHi5EwSac9bjiimwGGQFETZSLu4qyKmCtPWjZoM6d8jpw4DBCoSC9Er1c3ns2mPTSDGf6be7BpUCFRz1yfSHDr",
  "key23": "51ywepY4YCi7rDZsJQChTjrj3c5D8kGqx3PNgtyd8HKLddoYMABQExceFySKKRNQdkppU3bP14P5VGvbxrDZc512",
  "key24": "2NUSUZgkcNGyJtiDKTjjsRJFNKRrqGo3xZrpSnBNBbWCz3uTKhtWvdAfaTSWxWcQCGpLwE3fQeR5H6b277WRjcBr",
  "key25": "eCA5EdarKKkMA36S4eipq29i6xDnMiWtcoUFwUXyC4KQEkpEpP6hmyZfkVcrBLUKPREGwxMmqD75GMo8P1hJp7y",
  "key26": "4QLEgzvCxEYy189xFfwBuXQF4TUWx9vN3QpibMjuYX4rHMxTY11W4yFZoKpGeysUJnmMtwddC4EB72dNg3vkU8xn",
  "key27": "3g4AjENMu7vC8YuvRwNs74eSB3aJVUybaJ8rqepVB8ajtnmLaQWm9JqKhEipd7gABH9Jg22RwG2UU1Vct7KYG8G3",
  "key28": "31EaDRGTKd2zXJBkFsKK2ttvUJ4K5SXuXgvDUK1WfemYVrrd88KpRyndmXuu49vdiGJQ9mxoWCV6ZDYcVMF8Sax2",
  "key29": "3QmQ6FZYnBomqRHJYz1oepZTxPURcyGgMLxoVyWZCkBMfbtiyYxUVzTQsoqtuB46iFbWRFpTjqwrH7MBacZoSGeH",
  "key30": "5UCZ5TYvqPGtW1uNsxWWkoCZ6gEq3AyxHXnDvsvzxQPdgCh8tBVgkpTgDN87rUW54VvAaJiJMQ1T74XSy778zRqp",
  "key31": "45XCpmcwKnhZ9d7sNSJCqhDdHinm3gLijXJzEq1cm32XqiwHFkTjJ2EuBBmS4fwb4dXeyNP1dTVRcwvGxJtAgrrh",
  "key32": "5qN3JCBnzcQuxCN4YmHv6gF5A6jM43k3TVHGXMkSsjnG7kw9bMMb5kp78Z3P698cfzeSR8ABTo5k2iz8FnuDr4FF",
  "key33": "4EWwgQ69nzpLdEdL2y6t9LCobBeg2jKrGbyZH6x63QP7wiXPQdE6pQ5osiqC5iwK966CzetwUst5dxbRUHqoZ97v",
  "key34": "622wZ8bw9MquRpy7bUZh68ABNuE8b3zutzPfhLRJ1kgby69GjGVCFMDUiKB3XKiDbRP6GrHpLZWRbJb8ogy7gBpQ",
  "key35": "TE1m8txw6WnkF5etgqMZ2xCWiZW4HiKZAcscsXYrGq7xJnjVtZXdKL1KvnyfHv7r5o5Kr23Sn16S9TC4SpznwQM",
  "key36": "2xVnNuVFSmafLpobJsmPfzNbNwqJM46xWX63FcmgeFrLAubM2BzNNhz26nNvhYkr3D3vSu9CPRTAPuPsMwYHVqX5",
  "key37": "3KzbPY1SaVWNsPa1Ly2ChcuTDxQRuodRj5SHxiK1iU1LV3pecALL696ry33ea9xtyWTGg4nCZ6TCQTtGiNFi2Pqs",
  "key38": "4PB4JQXCe7SeEYWZqgX7nzDjJYDhQyWHSHUpezNvFnR4wm2EhDuUgdz8BsmELDqaf3K3Vki5r5VCfzmBgWd8TEtp"
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
