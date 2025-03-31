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
    "UdXH9WFetFvjYzk3aRqsSZcNKipuJx4gpw1Qcf8Ncey4rTChL8cmZMbK2ggL8EsQGBAfoEUCFpQJdiFit9VM4Ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGt9vYMzxRAjnGxmFYqvYK66jcwJjmqkJ44qFnFa1o6xvHnGCPtN86UyJwsxtVaoVPS4WULvSzERDCV6bcvCNKZ",
  "key1": "4WA1iFDjx9pdQE8CrhAcoiTyVKAFBoeQ5HGLDnZkFB17fKFDEsGq4j8ZHqp1dHnMoYTurUv1n73DQid2mVaLAea9",
  "key2": "3nHCNLVJK6hEvJjZr9W9BQL4CXWGhnDVa8724NZrdk9nFjVRy7dzMuaVBrk7EPxNvCzoE15aj17rPmEXuHed7vij",
  "key3": "4PRBCJqq18HpddqMMGveAKvvdzZx3YvsKNXdrKcX5MUkMF4XUEJKv2YH23GydKH3fiviMx2ie7ksxNrcnYFHELJY",
  "key4": "3nazJf1NGgyhBcgbrxWB6r1k3oBcXTGFnFP7cJXZwk7pRWEJcavX4Nsx1una9uuTZn1nWKFk3YExpdVBUrNbuDje",
  "key5": "3a2zqjhULrGcyAYLaGYxRqbFVQzPxLmqEPheFVMw4PtTijpZf589D1vsPAu2KLKhZhUCto7pamaVtySdbcnPZ8Qc",
  "key6": "2PJbfnaSeL8Bwu1eU61EkgFtebCuydEWoMGE88zJk4rQiYSZH9g7sNboT56ZMD8YFiBZ46pBLxrz2zvBN38igBb2",
  "key7": "3MKccdySNh81THTofb9n66qFRXJeaiy9WfVB8P5eYmfajunPpsps4p8pdSwoBaHkcqq7qEfZwTmjkJMUmdPPjU6d",
  "key8": "2rNea6xKdM7Jm6CjQWiCQ8PskGQNTQiRK7G53g5Z8tHtcTQQJVNvvZxCAyWVpUuP6C518tE5teHJPwiSxDndV7up",
  "key9": "4sqz5szhKb3F97XXC7Arrfd8fkGfq4BahA1hMBy7eXrFzQcmGfgPwSC63mZGtGtvDC1nngWipGApzVu6GbotLeqp",
  "key10": "2VujJviBAyeiWqPJh7Co6hoTM7chqgPYaGcTCtVTXvLg6tbHrywhioPj9Paf6x9jJovniW5uQANJn7rnRmFoZecT",
  "key11": "4spuPasrqtWu8KnF9kkG3Lz2JutPCvR7XMxDfhfHtGBkZaBNZVxwi5PmFetPRA1AzFkhdgnMjwgsHoBRFXYpbU7V",
  "key12": "39DGjTP6JQQ9zyiH5WzCiAtdm1NvDXhgwMzCv79YjG9ZbaJKDjLAxN9ETR4iVExYVGukvWxpnC7nmAXZwBcy2VDU",
  "key13": "4JZLJ9uAgCwjstH2QxBfTKBFKbzhtZ31ucFTk195XKcKJ6HnMnmfEXbAT4eFu6cvsz29hyZeLh9Lxpxg6ugZ6Tac",
  "key14": "4XTk4WTdWLZk9KYkKUFVoCXRv7KfhdugPhCCMHbDtMd12W6dfWhUZqacXZDAGuY58xGnDtjchRdZo2VNfww6Wc5S",
  "key15": "nipd6mEr17JNH6BuxeGZvscotTgN4WDFxGKSNmXTgeMnkozk6LYb3wKSAvpgCnGrcvjRZYwSseA1JAzc8bwJVM9",
  "key16": "4Q2eAfKEiAEbT5ioT4rEdvkQmE9139huKvw1c5qzHQX6bokeLVm2w8WjoCmupAfxyWvcazoAEFho2eUSX3R7Z18x",
  "key17": "26qpZHNE4ZrWtF7J8u2QdFT2NnC2c4aghgSfQCpUmRYzAeCtsKrUQLLGG7TEjQVWzrU7vZ1x6NX7GMyY7jsM55bv",
  "key18": "23EyKmcy23GrW7e4qKr4cNvFZYts68fN4Z9rsCzmiNEiEZuo6BsogKm9ZL3GaEgcSx6oMQ1hxaxmsZeXvqbjXgDf",
  "key19": "WDaoGfNCnuSMycHH7PVCahdH6mXBjQWER6rPHWgKtdWMPU8UghqDdTfx9coyUCpSaeyD8taMknhVEC3QqDP6QLQ",
  "key20": "2M6WZuuU2WSyV47ow1vDWXo7AXxiHiccV4bkN37aFEmo63KfMePEoe4mE1Te8kyFxdyPpWWAUGTG4fnyy2sy48CB",
  "key21": "2dNFiBX4Hfk9HyFrB6UKGUr4AyaG6orrXk51jrfsGDBDPppQzxczwtgyktGgDemUf9F71WPjCHsAALZvpDA9TXzk",
  "key22": "3WFgZsyg817tyYpm13BezmBurRvrC3waCgyvrpeGVxNtX6ixqo96WAVttGzb6Fkg6UK3iFrJWnrq16Knr5NRVuUK",
  "key23": "2CpzEFdp7FM6MueWSfAdmgJeHpa3cx4yeCr5PPWNp9ZFNpZHCvvRDZbsDmdA1fEcRARHpbKfb28tLKxiWBfrpDbZ",
  "key24": "DiAHcKz8tJLGtADSAAkCEhe37aACKzqLDHxw2vEGyKtdqCCNRnE8DZBLaFq5ru8gYfHRP2s5KjyqBgnCawe7qUY",
  "key25": "5f6W2PqqBsgZMEeBSfe6k6yLPtaGTTgZ11pmvuCfg2maGMG9FRAAZ4Cv96qVzQxZJ1tFCCkNeAeoTVUYFtei2z4v",
  "key26": "3b9FEf799ZMb8VAv7BD5WvfJH4brrz5jDGtnwdSWycN51L6nMUbCF651a95a4NjLCyhZD8CqzQaU8dpDfmdJt2Dy",
  "key27": "2ENwvmjcqGU64T7xHAmGUMRQs1y37Df6S61DuDF2PSCjBf38zQBz5m1qbLHtb5wghBx5Q1nMaPoFHcB2cMcebpLk",
  "key28": "4YsMaSKSLCG33egrm4jXi5jLkw4NQQY85wZ9yNLuXCGATrC3AtqBocQVL9U6Dbz1unAkCXCXQAVfbBzVUx2EFd7u",
  "key29": "3b4SjiP4bEJV518SMroCd79xv1Ubo3Ak4zAUukXHTXR241v7Fxx5ka5g29guChwZeCa5XMkMX49r3mdvSSxHiqJv",
  "key30": "2341BZCJAPgmgXmkLxPzUj7gnZtG7iNpcdzm2FnzcqmaWii1gr1GE9RupggQwqUFHXr4G3DrNfLZwTSr7QKaygXH",
  "key31": "4Dx7cch7mSFRWozhW4Yy4EG1FyyNnf1h7wSJM5L5QGQqXvQ7Qfpqjzpudp2dZ6VCt61a7P5Y5MfMsGpqPRhQT6Wa",
  "key32": "4pMe4QHJnxJFdMWJxeWtipuWPoMWBw6dW3xJms2GLtE6HTs9MiEzqqWgVVGMWQfSSXGhgpAzKz22eDvLVTw9uncX",
  "key33": "GFjCY5jazZKtTHH1NQTLtN9exda8GfmA7HMkUPhoTrpa5y8LynDDnPSUTUQ65FLuYVc2fMtoY5acApLEGNM3esb",
  "key34": "2sZyiRDecVdX78Pi1t4wXmsJuLGDFTn4UZuHN1SovZBHCUFeX3wv8MPz88uxp5jiNVoSAFxjNJLMgYjEu3ReHi2Z",
  "key35": "5kXpfHu1snJM5KyK97LN8CJiDXwyGRKLCg4xgyRtCwenK4Yb2SZma1Y9UVh3NoWk3uKSJnmABdveAs2yJDaer9N4",
  "key36": "xqqWwPjkVsgkvchWXtubdNn4otPaeWsiKUNSk5s3j5Eag6L7w1bAU7LoqmxcpSXtYVXm69GpR7UKq9pLW7WwGeP",
  "key37": "5hWRcYtK5ohNZxZS3tsomPwQtxunDmro6FW1C3tEv9sNiEFiidyEHGztbz1FceWDTANkZ5Yavz2xiuyskZ1DoGJb",
  "key38": "122gsKJcZSCdLxNpkhaq8ok4kkaNBEffw97NQHVKume6VZiUVrKGWRSTS6Q39hawJHaTqpGJ94AkP5GihhiF1hXh",
  "key39": "53tiVz5qxmk7Dh1hBsEyp9aAgm5MC1C7aDrMAMBCBKSohD2UJeyxR3EXyjxCzrkZYdhjJPrgPu87JZwgUywf2qAg",
  "key40": "27MiqiVaWVK5TRJASQ4gxPYNoJoxEX4y8L6YRwmVxnD7FVCCB5vCZinQnM4CxXayLvGKHB85Tu4pG8EVzGT2pfUz",
  "key41": "2vuzh1ZaPApBw1LdqAHBEguNBn2SaRRPD8T5PKMKqRyd2mirs4DmzA7ikJUTWeNCbcQCXTnpZUc87fhMLXn7vDBW",
  "key42": "aXKsFdS1MzJ8RbxX1uxPLnLFV5m6q3P3PWJEbmf8BGsQrxdcN5o965PXeTkyDuPJGo68eRq1P2kQssEdVZ7zopG",
  "key43": "2CpyujQATEjyLPSPPLkD5icvxXdr7KQoAmGkzfS82QDpyTQgLP3NGpbkotiJXpkmyjbMr5k5QeJfmrkesn4EaiGP"
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
