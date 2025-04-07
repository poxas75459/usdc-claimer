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
    "3iLqiW7Fcuw4Dpup4nEXUhYhoVSqWgKLXqVFQR99dYV8Wi8dt1Qtnnfz1Px5CvNPPyE5StynceL5NCpZUBoWrAAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XxcUKZU4FVzp6eGxiHWihUQPUHAHY9du4FU8dGs4yhuvn1ZKsEjU4nG3hzKf6od68ppZ8fWeHq2LjbU2MCVJsB",
  "key1": "3TEGnZePKpzz7he5jXtrWNerre7Ep9Z48mUt9EuyVMPJy3ckCVZxcAWWCtFCwKnTMp48AX6crcy4tKw47idu4moF",
  "key2": "3oovoymiDch2XRrrnKKcTvHWVK98hsAaJJ8RN14fJMsZ7GAXJWzWA2AG3c26eHTx3rVy4esh8fyg3sCBoLSirShj",
  "key3": "3SMs6uYRZZgU5ZtwvafpJUanPsbEZ3AwYKoxHYLkH5NWFuQPuY138EbnAQbWfnAhLk9RRy7SLjA94GjJ6aWRoJ3w",
  "key4": "5JYS6AUWK1UWuAFpa5GFuDmbFonRr1H2f1sR4NZSMU5E48bXQPtfutokZtHDAxi4MXNXW61mNjobv15yvT6eyAQA",
  "key5": "YPAhTFcgCp5w2FPsiziRHCAAfMb3bJECrZzhjFycmy4Yb16mRzQ7dmc4Aahqhru45agyp6HuQsCWgtFYSKsfbXq",
  "key6": "gC8nwfwhDZkQWvv3V2Zm7MAdNy6UT9mfF2pKBUmxU6zYgc9mN7rdrhJc2bKViZKQHGUcP1f9wKtJBivj4VJW3e4",
  "key7": "3fVHGJ4EPqSBUtMp1dUxtnfDKac2aMoPhyYsTQtGMUkZrL5zkzGSxaijWhJqRK1fDwEu6kZkbcMqbxLtvy9Lz2ZB",
  "key8": "2Fht6mZxqpPA6kZGJLM6bPTEGCSxM1xa9mvieKeEpysW4pZpLgoLzitk3BrV57nccziotixwQ9hCtYh8kGQmmVvw",
  "key9": "2uTAbhdkSgHmKTm9kQgCZvyjUktdCF5EpHP4vZA3GSyxDWjuvyEckyTNx7YMsEMa7BQyxvvwzR2n9wjCH319B93J",
  "key10": "38Tt9qQr6DjXU3rizDFxi8UJGHxWbrGeLseyjjRKstZ1mjNLVn6hxdBxmumgPoPzAnfCh2YVrn8QN3nw3KRWPJn3",
  "key11": "4zdHP77RzRqVbLijJm93DoczsYdJ2nk3VxTj1B1N5mbTzPw6Wq8wyXpZnvGaKpxHQyo3HjQF4SWSx2JzdbhYPuKR",
  "key12": "51NPTWusxBisXNg7LD54FuqBBicUxnwau3QToXJy5rTpCTG1jkU5BY6vst3BWLCpVjwM8n6WMR839ydsvBacvSSj",
  "key13": "55JoDn6wtDdA6z8mDmD1ufqwux2kojiQjLLFVPhA6UUWrDXFKNYrB8B2dkbAvRYs5v3JgFdX7bBx84FxDyX6DA7T",
  "key14": "5x7TZhiJUaZvA5i2D2zyzRAVj1wwPephsBAyKLCnofFsUZ9PThR4GGzAb7JyBbkaRLuyHEYyGZ34D8BSUixJrTr2",
  "key15": "58CMfieCtq1and5j7id2VCrm2T13zVjYdiDraGTMXFRvBbnb2sipteZXVJ5fP4jYeBgM3srgRCCD2csmzFr3v9Fb",
  "key16": "5yGuSE7HfFXodnbQgL3DSrdzZYjePtoprRwSzLAGCN1MEgMZAbVkkrvtyXgTv5JcMJY4xF9p3EnaAFaseVNPTbqD",
  "key17": "aony54hJ1WwonG5VMA2uDZJnTWKijJybnsH6adow1eihwtzG3t9hTz1feFcF6An1w7mjazZWEDMSca3APAm1Gs4",
  "key18": "2FPpEfa5qF2TxGqmoP3zd5kjEUTDgVchCRZjXfYAaqLr7Y9Dw9zAoy4tEvbYXR5ZKWR9LJUUGdBxd9jWvbu2shVz",
  "key19": "2T79L91GB48ooKQ1jYT5civEBarYxKKRemxpVcU3iD2abCtNPHicHfLoCFvKTN79tDYz274viAkrpEyGXjtE4Q2h",
  "key20": "6663nEXeeXNboWaFKByawAKz6gDNhrFYyMmbi9QaXgtYbh9wQJkHBARBFFJdKeGyBk3CdhcETZL49AhaEBxqynTF",
  "key21": "36nfmt8Uc1JJQX5Dc7JmRSBLRE6iZyB3j6evUareCmA5hgf9gpkoXWybmC9eJMDBHrpoEi71wf84DY7ekUYjtMvv",
  "key22": "Saq3NdaijbiDmkg1MgBZXtCu92yMtHoW7T2tw7F6xYj2DMNgHoC5zBzktDzoFkaZmZS8vY1isrEEgyjToRDw2Ag",
  "key23": "v8QSGjFaEd3DyuN6iH5xMaSSWFhPRmNtzH3hJYs3F4WrctkkPmmPz5ZM3AEB9s9huQGVoR4UsmYJk2KjDR1vbim",
  "key24": "2gxJudJFnUQdocRgJBxr9JPFdr8Cg5vvjedej4emxDNSLbrvCmQGPSA4uw3P3AyLSHXYhGJ3VGszhpWJbueZw929",
  "key25": "onEGZ7ato1GW8Arqc8uh6o6XBaAqLApNAkVVnpV8pDnXgHPrEr6ziCioM9fevJYrJ4ShB8PLTuZY292yfsz9HkY",
  "key26": "3KJpdGpBnNv65cANiHQyBo2nryM2NkWG3cKpE8KupWxv3yi6qtT1xe5J6Ux8mShoWVhGHAB5eg1i3f3pEuDRB9D8",
  "key27": "eMcSxucScAzwTB5xxdpVzazsueoxfKFTDE5GdKQg5vQZ2FEMz3x4rbBUka3oeBkEQWR8FcyYZfTZE4RW2ffMKyX",
  "key28": "5ej7Zh8G6S3BC4GVvkyumonqWC15G4AwgSosPDFH1VNvgDSeh55yZNHof4mrjh9fSLwZbTddNxiNDVXZUkaLgP8U",
  "key29": "29fYW35T4AVeun7qPKzct4Sw7HJSA1kMbMVspVs9RdE2N4CPFWrj1rjRpuRTLGUzmdCDVS6BbZoDUZpDgwxdEJkg",
  "key30": "3VGUfqJVQxzLFRqu6vUFBkofwwMLzWSmpb6VwTcUXg5WeiAkt6Dra6Qpu2KQsGamQZpjF4vc85jddcD7B4umaJwE",
  "key31": "5jPpQYogGq72PMdYCxes2TyW8qGSosNQHJe4fDgZwsdbjLFUnEFKLvTSv22szxtss9sEHvFqz3AdbjvTQopKyVF",
  "key32": "5TNj7msc9Da3Yz4kDS2NVjwPDndArQdHyBYAvurT6QSy78BqtRX3ARV1BdBmB3Uahmtv1VePZ9VMDLkXp76gZd6Z",
  "key33": "2qwSnwiX2tkiqkjfchAHQcakSMnYfLzBuU7aLM9WeY8VWgsJf9LpESfiJLN8AAbSXyAKPwhFurYVdqTDz6M2iqxR",
  "key34": "5QdL149qHfnvj2duynnbWU6qRkcUPtAowAwdR714UoVEecy2RARsBVAZvJQBS6VnJieriVeWbP8mjNpmWeA12ajr",
  "key35": "59pJzjpmV162cmCDyaKBj9NmehPbX4gRjNkwfVeRS2VjMkrxaPChry1XDmCqZaULSWMVt1HbYeh7sqDzwW3CyQrT",
  "key36": "2jXEdADxtxJV1momUbsW8meLPXPGdQVtfMFAqNwdgZPtUUMfJSN7ChfRh1XdZfs8d3vjHUZPFSNj3DeF8vxHnU5s"
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
