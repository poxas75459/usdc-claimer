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
    "39Eh795egLx2ZQw8jPYDXXwmXLHppw7sn9gBAXRskV4V5MwZ8Dj9GHEbJiXxwvytML2LTJTdhij9Yj3WMY6EpjV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDKMnBYro825guukFuSQGYU3JYWHt47y4yn1A3sAXHo42HRFE2YJgJGhBdLDnrJMA1PUzHGo8ypYE2xAV5b3L39",
  "key1": "wg7MF7NG2J2SBTJyFXMs4QnkkPc2tpd856NjfBGdD7HxwQf1i4XtfEjELKQSwZRH6Z9BLugnTCg6dftd3L9UxZn",
  "key2": "2jfEAPM3zVRUQJ5N7onjm6TqSw1Xy7MAgJrE852wA4ujCswHX9UhiWWUS3AnDMsffZRT2Hnh5SZb7o1ETLCZiUff",
  "key3": "2J3m91NPevwEEKHnvcSZy1pLvgnDuM2SEEPDUcX9tjd4ZuEicUSwdhUbeimiVD3JDfGddCZoAriTmiwtbZGgXYcD",
  "key4": "4JJheAyhD4atnQ3o7VicXoanWUW6U41icXkVrTcofZtETM9VcWzDYC1Dty1zKewEkG7zNNfSJg4XYVuznkAiUuHW",
  "key5": "5o6crkLQyTYXXN4CQBj8bW8S3JD2kPoWS9pNsbGnKZJngEdEMkzk8U4DeHYx6vymkwhtUPTmPESfqoTfqtgWQdeX",
  "key6": "4zpy53sA3WbZMTqNgjCQynYsRSNfNc4j48k98riE9HendYJrMUH34gHwkbwqgC2R2baAuaumyva4wgYE8xrYAVFT",
  "key7": "3dJB7o8waA9kTng9u7wa2kas39utLwvivdKAXRC7DwkouNgnMihCbwW7JihRcAYAnVdfiDJUECeufFC2N8uAVkMm",
  "key8": "412doDyZKLRG9xgPtc3cBRYRXhwnHFYoPFPQ4qjfhcv5mxSeMgSQRizKPUNRH8qi86UKa6tXJdMbgWKyh199J3SC",
  "key9": "Fs629wawaA9e16rKCz4H52BTry8ak4TN8NohHgS4q2hTsDqr5m3ULWip392XBaESj9aHKgev4us175cokSgp1fs",
  "key10": "4oPsVKhBmfx2FM7URp9ak9H1hAVL3hBiJSnUiffjZpdewQ8zixnznDDsewE5jTXQa58kDT4JxZBPwwcRKXr1Rb77",
  "key11": "4wEJNBiEDN7Rh2EJXj2dgh7kUvpx7zWTJvcGKEPRLetomQgwuGS4pZKdWbBh3q5FRfyBaDGrVGLeUiFeqM833zK8",
  "key12": "3wVxbUQF1SBS6MVotAWb4e1d2WuBnqzVe6KeiXTAngVQ4am143AYZAhoAu396srE41mG6vapygSocYWAnVSiDCvr",
  "key13": "Ey73t5dFPzSGS66Y89ZPc3Y2pp579o4EwpXyBhBf92CaKkJL4ppMF72mZ2QyBxZRUbMDNnZoyMFeysZ2k5zeDv1",
  "key14": "4HTKi1Fx1TkRJboCZJTqCzaNY4NiovFJPddmpZdpb795vMjFEMruS87FYCthhyRyEQrWZRkXU2i6e3B1JRoDPh6Y",
  "key15": "3jvDwtaV47ktGPvVYgvpskk4HCbVbsrbN7seANFM9rMuAEevFoW3CQFTxiWowuNGorbiiEk5gnvbWb3PWA1StAzz",
  "key16": "2Z93MsQ6NpiRJmUdvdLakmkLovDLUrFy9BZFGXj3sAzkV4KC2Lm2gGoR2t2QZyrL8snDVMjX2TkNmSRJLSgss4AW",
  "key17": "55aUNP1bzUbgm2icUDWQRqSbLYULZdKKRUpZE4TgKfaESVbexgcYucUy4pj6pR9YwK3JYcAY6QgaSVD6FFxnbZuL",
  "key18": "2UxYrUet37SRS8mcBXXvTEzVKgMtezRzvDSQCqZzYUL4BXo2Ba5J5G9XuhQ7Hx3jx4MwD8zvdgAoveQehr7nT3R9",
  "key19": "3JSCBdaPw4huokjwiu27Fff8oH9vKAvcouBQapxACBKYtdi8wZLDgearpzdY5cwaX7eje6Pjzq5g9LNTdZJp1nZ2",
  "key20": "2LyCmskYwNc1mZxygd6nrW7Av4WdtZNPEXg3e7CQP1JVrxfmWk4h5AexD9FsR52zmxJD2aa1PbY8MLTHCTvkjcfY",
  "key21": "bhcwJ5gGvPnnVnQRux5QzuNzJYuXAK2hcmHFNbgHXeJpsRrB9X2hYpud54C5pcD9ztihDSBbyq8Jak5ZMVU3wtk",
  "key22": "3ZUfYfq1XJKfmfjDDKjcQvCVSy7uW3FdPi3ww23k9hRXUcmzaFjEFFgJDuEbUHz2ByXHxYmUsTyhhfdyTiMc1XFN",
  "key23": "5KkE2rYsbVMsQpvm22JsRW8Qg2kMUs9kgGMBa4nsmPFjsc5LxMPinoDYFqdNG8Yxp1YSGUkSeGV1Q877k4zo769f",
  "key24": "5AkeUedRyfANr1UXPtazARyYjBKCtzDTpNa1YG1zttgh5bQHpaRJ9vs7LKdJXfaoqNeXrhLuPBx46ZohNqUdC5b",
  "key25": "xyde2dEWhsZULbXadevoQ59n9yykDqmXzRMwLXBw7ghfCPHS2zbkSmsFsnLBEXSnSWabFFFWUzJPMhRaXMkjSdQ",
  "key26": "4HPUFDL8ct45cbrkgBv6G51GjV5uvypVtGFieVAy5SUugCjEjo2XdTzWhbm5QDSpw7hRdtr5wwcGsxVop5DNx9KX",
  "key27": "4S6RmzxPV7Jg1xH3j8KPrdUsFfj83ccRrp3xUL7SCXwAxjswGA4GpyHHUEnEwiJUzLic5q4QsS2vFWfbSpsMYhPm",
  "key28": "3baR6LFcQPhcbm2pjRigVtPseYEKjh8QJKVgn4Bb7ZX5iDGHG4x1yW7L5rPrWeif8Rnur9XmLDPw9pShmL62u5kx",
  "key29": "6dPdPQtwGaLhoNeBHbsChAQUUEAjZnmf1sGG7UN3Tb6onUa9vsJmb84RWmMBVxB6mBwatBh1FKb1GJpbHfFynLj",
  "key30": "xQnxwnfxLX3MnaaL41KqmuaeH9LpycLoqFjy2oQKEFkewV83JQNjwEHkhC4EgbsDQzaxY3z8t56eqmGHEhvzTMX",
  "key31": "3MQYbYK7jPLiprmxBAE2P1e23B9QXMxiJC7wWeBMZY6VDeJUZpgANRVzLxe9KxhkQKTa18UbHp75NizJnjxvYAEK",
  "key32": "4t5fSrK8YoXX88RQQCZUc4Ano7FDibRsKZBCkzhC1vvGDhYNsZNFVcpqmTJTx8KkbUEaeMKb3rBZBM2x3fLTSUEi",
  "key33": "5mBqBdrLdYDTKk5cX9omMGJWr3YggpJKrB8H5Wq9aM89pGiCef8rT2rjDDYpxNyxjnbSbBsgzkKdXJ515Yv8G2nG",
  "key34": "gLosiFK6RC6AMPGqBCbV7GYy7rtf16yUWAJMBfqjTVerLZsnXabxPeGegJE7JVG9x6ovwkmBPh9Z2Wsoj8PGjHr",
  "key35": "D6V7dzeRtNFbFxH4qJBxS2fN5HmLU6wXeDdbjgCWjri9Po9quBj5s4qKXicCAddUYGMiPq62wjaLZuFqsWHVruA",
  "key36": "4SQ9ULGcyG7nzqYobgxNF73ocBggiENKoTSGVzX6xwvBEMDg3MxozR9yPAyxQ4dwgh8o4BdoMEeyanbLfviH4rd6",
  "key37": "3aKiP7DaFuutiuHx8PApMdcCznfwYZK4k5jisbfCSNaNL4ND4G5eMNB9VSkPkqLANP7Re6voKFU6MJzKkffPQ53X",
  "key38": "3iGpB9xEijmmJXLuohhna22aQ2GPuUDUrv9v9h6K4o5ngiY9vAUG1NoVCf3A47s9gyDLmUETFuMN6iE4EfAARami",
  "key39": "4k82zbKVfv478bWhqtSM9KcrLY42otbq4Vey4QBpQ8SHmhHfs3jX51wP8UzBkifUJyejFrTGmVjmGBgTKAU9B66a",
  "key40": "3gxk7yww9FtkGEuUGcNf8As5AtuCqNYYyn9DsGYHqNZ5VMwwLq5ECKqUv75UhUanUBfnv6H2GWQdjidc4erEHwSZ",
  "key41": "57VekdXfkwf7gxSZaSanzNgaVZPsGxyUzBLerbaMgLphvg7yntpkgMofZR9YFEcHW5L7GyJcSnRSpv8msLe4rRqn",
  "key42": "39MbDeKCcJgk8s2GQJZwjuEaztqqKW8B9wXZeyWeoFUbikyZkemCBJa4kY5Y1UGeF7qHH4mwukRsLJaD1HDxfVw",
  "key43": "6c5fgvDqSbJQTUpEpLGr69MEWk9ZdEsdnzZJpxYGaR45cBCMqKR5tGPuCDBghnM9caM9ppjFWKomWhbDwsByaLb",
  "key44": "4fZYFGyknZA3TDU6Znpkr6UYD28PGyoTkmTeH2zu5H6YX7mZ42jvHUB24sQfhy6dUGUh8PhBDfWLoLQUAJQ38o8V"
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
