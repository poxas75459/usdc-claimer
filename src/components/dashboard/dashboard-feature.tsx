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
    "5U2Lz8MjZij1pu1jmvB3kbWuTzjpUUT8AQSfL36CDnUhCdpuMfDixeFec9Ejna4esYYdg7i3rwTE9BattZcvRDdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXSTvknCSuuWgWJZcFCPpkF6prX9XwEeicdCH5gP75114FL4Num6q7oPYFK7PFWVX7Y92CrX86riZd5yEvYSCx3",
  "key1": "4Z4VdFRAjTex93cu2PmsgXaHPoThUhCpSNJSp1MeNxL71RjX1RJsQ3ySaodRTUw2ZetSzfxyg4gmJ5BRPF1YRS81",
  "key2": "2fcU9JZLcaxeG1fZk3V4JtCwpkhZ749SnFCvaAtYHYty7L85jCVkFm9CJ2hPhJmXZQwxqSqMZewpiZBUgwdeP88o",
  "key3": "679BBs71aVKcgzzDCZHpsPs1svJzqnnpoXaPM1k99P8MhTAz3v9W6aZ6TU1jCvaBYu5DmgyGy2bo8qU9kKoeURa5",
  "key4": "3VnqEEMnrjxKM2a42rjuDiZmsfb4FhtaemPNsqHBTqcB1rPz9MEDsmPUmXBvktgZk2Nzit7x8XiNZs4iRnKC45cn",
  "key5": "2R9HhxuUuBZFbn4GEFbpfz5HC5f9QabM1yTBx4WYcWXBdimvxksRDPcuCWB8bykNDXmyWRfN2T25RfyYz7WyKpsC",
  "key6": "2Ajnsk69Du5UwkE6b2V2339orKsDbnDGqY6atkABvyKZaYdx1NRwJ4STG5AXPBJUoVHuFYq74P5Kews2iwSMWvaz",
  "key7": "4cskeYpYzBX5q9g9Y5DuWiguN9uSccW5Ki88RMFpdneD2duZ5uvkK2MpUhKEpJU1P9J3sDzza3foVdE5AWY4iczQ",
  "key8": "3jPhQjMg7Gd9k1GBsnJ3dUeBRVpmtsNjmZFKDtTWRFidfbkdJubhE4DUPhZZyLpPz77Q4EZKwnaNFpTqCYSwQqNf",
  "key9": "2XcWgwG6Hgi6JJdcHg2w8DZa6SDsUYSWXhXB7R6jzPnrWonk7hFV62RSDMrLZTKX8tGuaTbRZJDLZ2vYHbhYZDj1",
  "key10": "3vqbqYVCqfHdjnj6uD6hZwjoxmGJwCdSmDyxdyhqDNRAVLKTGV8Q5A1Y8oa8K6JyfB73yQEeq8h8zKRKFGWXzivn",
  "key11": "4VFcwNJNt7uTLgM1c1i5FnCug5YmTMxWvewggcPGSYtrEt7cca5rLvsc7wBq7oeoUd6puFeMRSSVdoVCYtGuUSZj",
  "key12": "5ix8trPKWQmAZqxJSRSjzyYxd6h32Cd7himtfgJKLoSV1MXWQALMAg5DTNao3Hq3kHkFv5VZ3mFYPM52Uk9NjHbc",
  "key13": "5F5dF7ZWw7LhJgsE92eGodqCTsDFK4EawHsJMmbNem8WUCGTk89jLYUVjHNGrVmNSRBJaWm1CU1gmk8cihVjeiuW",
  "key14": "5C152bo5pBCxQez5hn3UwU2thxCiNhsj8az6GzUdQBYJ63SdCb5kuWKvzgWrFuBhrmFUZKCa7AM2t1RXGPn8Pq3t",
  "key15": "2dh8f2SKrzvdT5tfjoaW91YNk2AkYYJEBegayaU4dtRB4KHTwmFkVQf1ipHb1ufF2Wf8ekZZK67EyE9C8jCeNYk2",
  "key16": "51VaFHV68ctro6NWPeoNNXmGTVfP54dwzSATmceguLvzie6iXmsTdmUjPqtMt8BqWYhpZPRN1f1J8Cebz5DRrY5m",
  "key17": "3fSHCuRkMzV2DruBpirzDnymjk4h4G9Lxe1oPtGNXW1QLJym38kdmRi5RAkcCpXRXx299EJqF9zdwm3vRwWMFk24",
  "key18": "5paFr8XomDwMAfzET8zbvZkiPScGcUVom4Yp6Ta5LEN7YXKksZA39gKcnbcKYA3nd95euFFDb84np2MjJigS6Bxz",
  "key19": "2GPMeuKfqGCyrsdkq82FcB2WyefrzPstcTZsiYmqJ5CuuF5drMmcemae2h96z7L7TDbmMBEZ23sjjR62XhBDEjkh",
  "key20": "3E9wHSs1uDHCuKdNDYPXoZnpTWp82SvagsdPPoe1LRZwShP3eUgBq5Ab6nnQsvyNzsseGf3PFp4V3iXN3JZBZJ2v",
  "key21": "4Mz1NaymKKyqxMXnMjdMnWDpqDeHSF12YPDi5wQCNgSLW4GxwFfXSqtXteBCPz2XnTXmfn761KH5rPvMKaFjyYBZ",
  "key22": "5VuPUDRemufVwCqFM9zNjFu5zviBVuDQJs6p3ZBDpzzmMJ6q2jkt2ZwxsnLRr3WpDoghEgnSD3PC9nhcGtNmr8GW",
  "key23": "2SE3R8JZjuFefqXNQhaiuPma8ZcAwrEBs9f4K7CrMWEnmyRxs6SyWUiGiCot7rd8LHAZ4sM5hvQQhv5HQiTQv32Q",
  "key24": "4SzFXYAAUZXLBxup1ZpuUsEGbaJShkYXmTqLyM4ZPNxkGWZXRdaXikfbCm24h3X1YgUbhqPFsNXAH3RSggC8vXcP",
  "key25": "5oMSZdoGtqidLgHR1KwxfPjf9W8LqBMTgocSKtTp5UWn5JhYwBSG8Egcc95P8Aqbr4E2XtCUWYQwS5iaKFB8qoiG",
  "key26": "Q51UTDzADKkEgBuSuPV4tGLghJSrpJBu1ti9szaDku5mmKWjtZrHYutqxyrNNZx1iojteBHs3GWLCSCQbW7X63q",
  "key27": "53TLNBc9e9TCw36wa4VbdgHHFxUpTtD6ZKCtHTBduCt9VgC7JNuxcZxSGSPVELZ46spNia7xtshg4b7gygQ3eAJC",
  "key28": "4uqqa9ZorwWfeMmw48hNcnFi56wp1p1LoXPJ7sfUYM4sDwV1Qtz6YcQ6PfFKHye9CJeYxQAxoze3967qEfr8rWmX",
  "key29": "2Z8p4CHjxy4HrA2feGMwf2vkwFWJStTHh9eVPR3xRb5r811eqF6PmJs4ahjySdGS6BYUg2KJjpEjMZrmp2iTggeB",
  "key30": "45sBQ6ecaxJ4V9tab3QN9iq6gaKN5GJBCxCf3nqgKdcNavNUnkU3z1PTBD99K9oqSt8BRQp8orNzWbms12urmGHM",
  "key31": "55vHDyvePgp5RnT4agvE6Cpd2LiScBhWag3coFm8fnX41ieDF7xvyDZbnscdsjwRKRdhHYQLhMZivehtYVTmTGq8",
  "key32": "5DCToJsS3RW5YuyaKti7CVwWzSJMZLh1K5ofmkDohVkVEV4gc1orpteTE9zCsvo6goazsieNDuZkUf8b9BMPKDrP",
  "key33": "4JCwR8qb22Y3oZc3dm6GVo9izxPwmH5fd3FZfSfWyCA5Sm9pqeJ9deriDKE99Ut1FiJXPRSLo1Mst51iRZSzhzg1",
  "key34": "Y6KrzrN3dmFFwLnUCA67yHjcPyeDDhAfLHd4sgz8jp7BwG6cX1tLShbLMTHm8FLubCYjtNjWqvmmQVYtBHDJ4Q3",
  "key35": "2LeXtrynwKbV4VNwiZrADRYZ7uWkxjGL63y7muDfAggpcYT72PVXs1bXLXRZQREQSKPy9eGBLvoNvttqRtGzS1sQ",
  "key36": "4Df5KZb1M9juLwg6pMpLkJfkCdH4mdj4upEYMLmN6VsfTV4sTK1nqAShXwaG3unSKguBdHLi6anURpdJwzXHa3uP",
  "key37": "25MZ1jZ7AUicYhH3pkZDmaoPyGbvRUTbRd7TheNikSwegyvnedWgg1fCWcZKzJwdoMTyYnFCHL65aG198zpEiyma",
  "key38": "2mbg7TR6fNBWn4RSPaiPEKdpSi5jwFNa39f155CgJsBWqB1vVVeKFrYLkFsaZKtaKv8Pg5YKcPM4qmjJkY1GqZAn",
  "key39": "3JJ9Sao1R4PnK2zHNTF5tjzQiHqVHz3Hnbk7GFEYbDvnW54tP5WCjXwm3b1iXTVVoph3AQJykdYD9tuN1q1QJRNq",
  "key40": "2df2Ymq2XqhBGJ2ecAy2n2ebvjHyLdFo5Bebr8Bhdw7vSPXEJJhMQrkMLGLmy4W14hWSMP2EZgSq6Rm5qQY2cXhW",
  "key41": "3itEJzjDoC3cXyjtFRN9YQY8ZgeamB9tG8BJVLZN6HRTWPtVjfQgUqPg1FMcomMNbzHUyWDMJxFGQJknL8VorAng",
  "key42": "2eA8uACmu738Ef63TLuimaEX61QUGM4cnXxjixEhrUEUPro9XWxRMrDs4rbb4BmPQqBX8vAD4pmN776WchAUGFDw",
  "key43": "FRADdfhW31rNfdHMjw2kmUTY25DZ7XUAWQevM1VizckgrUAZZiBpv1cQz3ofeuo47QGf2GMiiDwadJLEhUiYmEq",
  "key44": "3x15djMPexBW9CMLxiv8Zzg3LDrTN4PqSbcQbggtnaSCyo83dA7g43XFiZdZ7fzBkQLSJwLqpsYvcqLRZKzhh8FD",
  "key45": "2CSjjsZ1aZ8b9gLKu5RhquQFS6MNTW4gGxSCCAsZn52uGzysBJUVFMWc52rAkcqboDyW1KsuNHaL96CQbUZuzamy",
  "key46": "EXqF74QoiM7QFgJUruiXzLf3EtnskcFgF46X7meQTsbbLgBA3925cRZZPw9dmcCj5Kb4cciAeVyxRJhaf5WUhcR",
  "key47": "GJeHNc3gLQ3dzqQyvozFuyRzLVKMQRradGgc8KqzfD49cYDT5a3iigc5BaCiU1jk6Nz38vtm79Hr1a4Zv13iBfT",
  "key48": "4Ppd5Ks9QPHWGmgTwG3Qe12xNnUeBBcNKEEB2RBEXvF85dCiiYHDoMLmNx3Z6QdZ6z5GD9QSHBTVaHoXZLabUXMo",
  "key49": "66zPQ8wuY8D1YQ1UBWrK7vk9H3f9V5EVz7Nj88aH7RvB49zNSa6M6YuawAb1LD8CPNEMUYnuHzDe3A9JL434Gx21"
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
