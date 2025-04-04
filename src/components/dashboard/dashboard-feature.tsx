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
    "BvSzKa7CHf9xeYgzn63BuEXMzEcqqsKkRfNSQ5f2FzjQQkZm2mjpbZxAFWCnuYimoAAPvNMgrCsM78F5onPrwFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DMF4XHZKkuinpE4pEJoaNVJ9h3CJQbbVzCbZtomdL5bi6icCrGaLEQHH9aNCwrhjZWHworwDZ15a4DNzvangsbr",
  "key1": "2WXvbpQWw4qgqWKhtcFvhQSc82eoVGDLm7UfcqmJqMyY38EFREzXdC15dRDRno3N9RxdH7fnDuoGHz7X113YJjbg",
  "key2": "2NK5tFNMkkeAugA8n6kng7tBj4QERw2sdgTueCTqKtiv9u9pJ3jEXDfLy69qx49qDGCZuCeRqFrf6ihwdQuGxAZa",
  "key3": "3ZxhUh1ho3igHuXggXiALR3gtyv7EZFE1BWJGMwKhbBTU6wwJ4y6N6P5fpmzzuULiKk4TqqwnzDHyM8KxCnJV7p6",
  "key4": "2m63QNm8DCTiukrEMZNajc9sF6rxEPLjE66gfn7nQNBpPLDPU6u6NoB8enj4kTYkYbauQvwNzfNP88GKeomTLXK",
  "key5": "5rhRobXKtq6mKnD3ktbm5uN7VeUeyD2Fy6LhsNetpsJ5M1RUVR6pkDU6BgjHroK1JSt8SMSh3Vp8quqkdmZgam5e",
  "key6": "xqM6s2XXJ6Ndy6S8Uj15X5Hvio3CxWse3jx6a78nWEmhVzf7jofUwPrb9NASHzpNkthbe7TCcmfDCKUih4zejTH",
  "key7": "3g9stBievSe42h5e8fNrB4z4BfqNGkJzC9byawA9dWXMkd1b7YaYZk6hSyv9yL7UEDxxLfHPG2QNh2opmqmGWSie",
  "key8": "29LdvBYsbLKZmLnxByPJQdPPgkj8nK2JkhzeRBzXu5g98ypiPx475vdzp7uiR8M2TjU9rb1QzwkWYs193ej3eMnD",
  "key9": "33sUiMGDjRbdgPbb88m7WXniCkRey6hfP4ZMfwrNs6a3sXfsV1t1GfVLh3Wk2PVRh51VTzQtBpzJKFnurmUCS4r",
  "key10": "4WcKEJHta924Ss512DkHaZMCT83cAByonTc8w4U7j1v4Mc5kCjNDuGy2HfyzCdWvMBvNgZJmffu7w1NVjkTH3jaB",
  "key11": "3w4Yc5X34LH1FRyBzyLkYRmwbKKvShUmXoyG4PHqynqEKhq39iQgR6VwAXfH5p2eK6gF9XN6WGWtNThfaVySSYkX",
  "key12": "27Eo9eBeosspSy9bYcaL4LV5pdE1WQKEBtuNBPTzmTNvLZkN9LzY1fpeffp6Tx6LufkHmhpCj3jWVpKD24BuBekr",
  "key13": "q9iU7xUTYE6AYe4PMHx7xyxrp2bfhwDv16f95ro7GXRNFWc5nauvMM2qeqtHGnUBkyz7sLEdaC2nFGzz1Y9GcHc",
  "key14": "5TiYfpPdu3bTLJUtmqwA7qhThyezjgbd4PKWzxMXUFyWCht1vueyWDtbVimP6R6Dmqs3yowH7WpZ7ng1cyyh7cXL",
  "key15": "547enDTCt7PBJZ6yKXZBbfUWT5i2iLqU27WDHPPBFGzeLok2gwz5UZnEPK4e8eyQHzfjVBPUpdDWDC3Ky5itKNcV",
  "key16": "23Vz6VVs6Xenyeubs3FHWaNAzNfLVfa2RF5XGWthC3rCxL9qP8JdY594gZSLFDDevXPHytWySPiEvKkGjoNr9a5g",
  "key17": "4xEN3hmnbK45frHfmz7ud1RgM9oRRviVCMgTFZMJBnWDzsHBhmeo8o4eEA3yWh7rAtWJB959DJETANTB6undpgMX",
  "key18": "phMhG36mVhFYZdE6nwgxvthoHWK9WRa8EFYSPGM8Joh8dkFZnPoxuiP5mBnKPVSQndbSqHCkw8TRPMrwAKMy2rT",
  "key19": "5RtR5wy68zmprCc4KgRUviDnGyfUWvhReLZxrK4NthfNqzbxKuxdL9Tw73AMF6EtwCJ6xLYj2oDLc61JmJ1RAeRA",
  "key20": "ZWzS1b4gx1H1i5GmMvYzm237cj4UaZinsaAjANYdZ58ioitaMejXjGGJVCMaSVt9igSA8zNsjcoKFQdED1fro59",
  "key21": "4HFRt2TPcqqrgkL8xcGjd7p7D1qt9sdwAacuHDDLHWeuC9azBzq3gBUKnGNpd1HmghVuQCLPai1UGsUt5Zny6Ft4",
  "key22": "2c9x578ak1KPLREAdRkjEq7ecPmK8GvrbMGRZybcSTGDesRK5M2go78Nn6GwxhUwP37K3tE44sTCPF1r9GD9AkFM",
  "key23": "krhQXH2r2bKiZvHPezt4n4Mpj7WNrPVURbNinLUa8pKK2JSGbmGGWDHqYk9VH7yb1zr7w9omJ2i8fFoPM2eXENS",
  "key24": "2TtNnfVAeFaxktUHHDGtYZNcVZrZJpM5ULJrhucfs5giERHHR1JQAqWbgvphJQmicMQrzZBMH9qFvZBsJ5TpgTmW",
  "key25": "58K5UdxVugoba12NgxLQQVG6XrTfSaA1mobwKKfZNFe8SCnkiVdRz5LP37xn2jaRsmcVPKYCv7b8zujkQW3fTZzp",
  "key26": "59f9adjijNkMuX1y3metZcNR1mKGAxba5GFrChxNdAHgmXqzd51LdTohBj7Rm5hKEXG2azrbxB8ngyYhPWnpbV6k",
  "key27": "2t7C3EQYHrzdxv45e7ozHtKo2WZdczkqwBLJiMSKLNKnqpFW7Vg8j4WDhw5Q8sDxuMkvh9A71u1SVTt7o75jYRAT",
  "key28": "67Frw3nGcMLBu7qsJL1qLiZ8rTaZFKReWJcn6u7oUYMd2S2d5Hj7ddpucyuTXyqBSSmNKNN3UABvYtJ8b6aW8FVA",
  "key29": "4FKFhCePh51GQh4nndAGPNbiACy19H8QMB2Gc2X8mBREENRvufbmC4B9wo8gCz3SmHHU4pmU3kiorBBPGyggYatL",
  "key30": "3TjDe6nvct9SbZsZ9hyqXcRAhENxFVKG8RgS7vwrCyMLdypXEymu2iQV4anhPMCyHymGTWi4CCP1dDKUFfsXzm2P",
  "key31": "zVhmthzLUaztqu3QcH5WRVM2bNqhp9gXqDwzHNLKHrKAxHdvrxW7gzAdRqZhFXEbWvpgeiKnPyaGN3G5U1Z6uRJ",
  "key32": "54UtiWUeRyUtNhyWYvBVYHNxTYxz8ZiQEbBtPftxHwQS2HhjiLHbwr6QP9Wyabu8SAFQgLJN2W9Cmi4mRDViheXn",
  "key33": "4TxFyPFucYK86tHj42GxCZ88Bk9sygHguorWuHVBZTjtREkbBVvgW62H5eSsdtTxEk8Lcc8KQ54K754KtumpGnCo",
  "key34": "vsbUE1NVV6SXF1vXmVfGpyoaBD2LhTxYJpHFVcXzSZUB4amwrTeoJ6mx3aaX5gDdWoDLi5vJhpUAQS2vEYwxNqk",
  "key35": "4Kae892Vzd2R6BXWbx1Y6LW83bobvHQYuR5o54Zmm6NmziXvEC5WBuiroAzxascjccYXSrf7HDiejZ3yhTkABdVp",
  "key36": "3X9ey2pvu5oaWyzr7R8udSrytYBfSPParrU5rerjHmryxLEd4KxF7j8ytJiw8Axx53yFDtF6c12YeqsDBd5wTFTW",
  "key37": "464vA5XGduCvDc5z2YVpT1XQL1wBk72SHQetfCtZTM8UH3QaFY4hr3jWQUqAnTLt3TXhAMhPszsEgcBhrgN3CUZs",
  "key38": "4DfXUJRkH4cYFztbsAbD1mWv5E9sPDanQ5b3KKHo4XnNJy2arFuymTh6HpnUSor9ZsuU3p8XsojqxE987P9MP3hi",
  "key39": "33BGJxKkUAgpK5Pu1tJWgDfUcDkCsFkZuyFQ8VdGox9YhspCHPUpmJp79wWPTtsPKSiQjbo1cRKPs2tNSSSPjMX6",
  "key40": "3EkknAjwE5nktWy4v7es9VEbVvXySNe6gnB6KTPJhe975Nz3DzfY7BCCdiHkDX3fZntPDAnpcQG2D2Ay8P1LE5mo",
  "key41": "4JnzEyDCWpiTvNsUo9oodx6NZ9uut1V4gTgpYYjpn4Y8dQrCLC8BABJqnRQRPfVDKiM5zWWhVH8HAyy6VgGbyxH9",
  "key42": "hpGv1E3BK4CUazECUcthmRf3yvpXNY1ARdXaoPShafu2F5TWKQLVtvjid82oDZrH96ySvAiBf4NFKPz2jRTNpca",
  "key43": "4Yp5YQT1bc7YUY1rbZvWjvgfD3LPPRJo5ga3h5Pjn4a8jm7vec86h4XN1q2TQBnGZ5gvRNb4zyALvbMegJbyEyFG",
  "key44": "4oyish5CJj4f2qhUGyxynDnMnQhCpftBpGoA9aircMKep3g2R4ywXBQ68o9KLsHEAwZQz9BxbBF4BrHd6QRsBujT",
  "key45": "nmnwmUF47CU4RfrJTASNXDDhMzPDcq2Ro25s5iRt86w7qKsRUBXmP8wGfBMhxVMsqE691XQqk3NtwLh68i9Emf5",
  "key46": "3QeQxFsduFxBfyfqWBiW6L5hMgjkEbCWvrxLZusBPJi9uQtcPu8GoJAa53yTJgxCN7gpzGVZjNAogs7GNEr18kH3"
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
