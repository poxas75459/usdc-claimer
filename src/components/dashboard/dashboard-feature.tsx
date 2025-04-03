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
    "5jKdGMoGHxzFmwFtNYzXdd6Qje3js41PBZasb3PgtWX5SatMsvq27zpMCA6qJYTGnCYJ5MdScR8Q8HBFRUQAhrv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUM5MQ9UCKN5gfqHkmzJUuaUsfiGhcW3r6Ck373FMrSdiYfhkHeyWugPVZ26oGDQy1GH4vJREwf7VomEsjcGrAB",
  "key1": "5HxPJxa48BXFNwwRSL61bMjwtGjyufCXeHZ8r35VeFQP7rniauC4T6BK2AAq5FeXDSoQJskfbSxHBnhmnZDR3rnb",
  "key2": "Fn4DyGwZCNTZrgbqodXAm4Tp5zH44PjNKhL7hH5tmxSYP7M5jEK9sTHRGoY7E9aNKkEeGPyqwFXmp9mnizJ9f9Y",
  "key3": "L2EHvnWE9vUdFbSmi2ZAxnTXwoQD4fPKPzydehC6RSGnqzp7rBaahUhPjSSNLUPMabWQ9djFvK2qSFqEv63Gdxs",
  "key4": "5nxU86d83DpvvtfigEmAq4Yw8AECTVBg1HdVQCu3mvufVGupyoqbdneHysoJEWXuo1oFdwY6mATmFDs3aAofcyDH",
  "key5": "4aq9r3XVuaLk9E9XomcfMRmZAeYLKisDFS7hd9wrcxVfvkELUyQyP7MbzXbdupi6xDc1keGbexVcByMfVYPbDQpB",
  "key6": "4CSyfaQwrV6Tp2dHqBh5YyGmCFp8T16GwH9dRTNHM1nKx72pR5w19w2GyLTGj8PtFYQfuPagMw7vtLUd9o2hsDTr",
  "key7": "4SYm4c1D6cqcpsxrhNH4QZY7RwGvAgMVX6b49kUsGWn2W6fV5sSwM33NcRQBUVgeB8XrjdicLMASN6LAvp5D89DN",
  "key8": "5K6VMiF3ZKtxLxNmKFSYiSZZ53gUgr3TLH8tAtx7uxBvWwKQVLESMsu95pK4wgVi1EbVZUkDg5DVgrbUJoT5ZMMe",
  "key9": "5zxXWt3XFVQRu6TJm9vLtZDGTRE6nhe9iiQcZdbkVcbBpUCcMJhAcpEPynNsAotaMZFuEYkABwGZwi9CexfiDWrG",
  "key10": "5HerEvUQA4e6qJARNQTJeMG6kqbJnn7hb9uKk9kXxFJTkdXPmHQRoUnHGk54p8mErVsTh9pzh6WvqFrnFoCrY6an",
  "key11": "2t7hevfJddJM7ofgPQJX4ZaEgeb4XA7NqZzbF1okporJpvBNjCNcEW8CNp3hUfB6piwHZwsqwUS3MvR54n8ontRg",
  "key12": "4xBQZH52iChsTwJdfXJP6K2kG5e94FLN88NVYdLYTDoBbFwuJB8VnmhmJLRFKEddLYGAsJ61LAB1w29BNPRRcryw",
  "key13": "3p49B1rPo8Rnu7xVRGM5QVK8P5eozjwYSUcSvohmG1NupEpsh86Ejf2SZ9auoJzHbp4JnWrgRBTRqcZ7ikPjNCrq",
  "key14": "wDSYuzGsXR5qNA5xeL2X3Z9BmxKiGAZufCZfoT3tpz2Yomm5yXTv2y1WMXKNw6Se3Lq6wgsvjbZ2yfdEgizAcKJ",
  "key15": "c2dDKZ59G42KTC9fUiKGr9RPAgMmUQ28uwCTGWqPQcpQceJzfBxnNTqCcFCHxWrqQmYX4W8P1qNkHfULW1fb4HJ",
  "key16": "5Ju8HsFtD2JhjirrU9VmzsbaDaRBee7fJdGv3ysg9hAd9YHT6KALtrZoGhcCEipWcLWLdETovdxQR25Q7mJepktN",
  "key17": "4kESymDis7e28vJ9QtU3Pdxzrt9Enw1AcTSeHB2bSX5cJy6p7wt477XtBjBwWT7QRjQGxUc3fwtYUTToUxJB1wNQ",
  "key18": "J1d776YBe71kW3dGcxBPjBor3NY4xbihzGYsNYGi6Z1Cte1FXRcrq7nnaSkQ4bTAmYFMAfy3HWqXSShvWp4ASx3",
  "key19": "65nbprfEEe6dnKGdHCQxgWN8qGSCmWsizQaYqq76hsa5kUvZEAcejdQ1GFkijpMmzUmaeqShiGmxi5GtuhcuynxB",
  "key20": "49RLcqoN3KkYFpVtWzPUsaQAGVaz9aipEmuTisbXwEuDkcm29e5d96DYgGF9C58ueHVz5ycugy35xfuBEXLZR5wY",
  "key21": "3oVBN32QYhndEA7LmxzPcLWozLgrAa6b8E2TtGsfMDSvcS5c4nenzit6YjWS1xcFdg5o7tMb3sWtdtDLTyGRa3eZ",
  "key22": "5pq7Hb4ohZ61mto5x6oUovKnoMQJvtTaq4MDZn3QYzAqoEvn8Hxy8Dbnqo8FSYX5aDbNTy2j6eqgrNtBNJovuNYT",
  "key23": "ir213TorHDyxizZMuL7Fder3Hf54UTdnk3GEGfn4gMA53uSZMcEwCyzB6uhF4frVibBnLX37fh7kEUq9CbYpFe5",
  "key24": "wSnd2cSUYk3pdN6UzCxdYrShpFvqQMeWdZNWLJt2jWcNGL6yktM8y5918aF271XoiwoNX29iL5hww5AMb3W6BbL",
  "key25": "5JmCKw3fp3jHu5dJG9a45WAMiWMg9Wz9DmXVPMVBomdTanqCNForLHRG9WC1hEoevo43cRBGJRQeSFdFy9uoX1As",
  "key26": "34W9rzvccxpvL6EgoquUUQtaxjzUES6dzsxuvjFevMK6F3EY6BRsXMWCBoTdMF99sTdKAM99JQrJ2fg7izB4GZmz",
  "key27": "5V2YBGzPoPjhLctC5rxYwgxTJrE2aSbXgk1PkstufQoBhQ2rdRXWZjdJnEX1hS8RaBL4FhkXx9jEyytabEyBvsZr",
  "key28": "4hzphtadxv6sozYmzrJZcr5uBSerH39fhfCzbYwVgSQv6vNxazfSSd8UMt1Y1kdSRJvC9XSM5jZErXLqqHKygWau",
  "key29": "5qf2J7dwheUfeaF16UCV599KEc15v4mMgBUkVSogDKoa6FuGiv9wbEHwWx83BjokjDrXYJgnGqb3mk72geEfdaLf",
  "key30": "5xGooxowfMWRxWDGYKSBnBcLj4j76irdZJoAupixp7xWPNWCUgbebuPeLi1Sk9kdiaThQyFJ5puD5zrCTj2atf9p",
  "key31": "5epSL4HCRMv47d7jFZ3wy4UtP1yEW5JwR8sW9zanivu1SuYT69dNLf6Z1dGavK92fzsHHVchgMYmFgPFxACzCfon",
  "key32": "2VpNb1bhSyqWTZRv9vaZ94ktkmiYwUUuyxUJ7WyeAMAfZ1Yo4C5JFJVCmEwXf8s3rNbPsDQmgjZkx5PRQBHGjnx6",
  "key33": "4EJryzVgmwFNBaWonwJP7eB2eWjr2qp4pSDzt22jpJm5E8fckG2b2XaY1uiTtDh31xjyxG7ikcY6gk8vt7KJPXek",
  "key34": "3vyBiD3FsCDAF6v6czaqWTuAaADC23N9Vzo1P6cokV2ifu884dZuL7xHKubqKhMoYq5fRwofo5VUrmbCDtmkM6RK",
  "key35": "62MCUB6NoLQrxJdXDZEejV2XusjJcFXjyonKk6YzZwtLqkhGDK6DeSRtypxokAwcobwJpT3zs8NDA3DKb2rpu6q9",
  "key36": "AwBzkLDK3CUY65KWDYHdDKJ1Xi1FbmMgyJFSLdVJGcwbokeokdCHi1TBsgomtbmjYnQugHXix5zZnUHBcbPT3oq",
  "key37": "5GywTwhbfKZQnaYUMF8nJ5woyhi7M3SFYT2LHgnHE6s2shRpi5ZvhPmpWXd7xKXugWwx9bZhSyXQfMetkdQDtqBj",
  "key38": "4LVZqSMnkc5rAciHfnbPsriDCoDKdXQch4n7Tqhsb5CDyMDLVcr3e5xrC8GBBQ3yddWs8ZrvqpTiuwcuYSHB2RCF",
  "key39": "4zr6A2HkcjvzaYfPjtmpGwJc9cFNT6oa3GApiEqAv6gCMzpC6S3gzZ2kk7RUyyitbuaatsX9QWUknfVNkyuJgS6w",
  "key40": "LGkKzwtiQWxiv1ZGPr8xJzR7HRRTsU64dUJDSBqBaVrYeBkf34BPDzgdTZAXTzmaaRtSWnCNExnWG1KZNz2SBvq",
  "key41": "XRq4HY8dmo9q3XhbEN9gAZr6pmWWgrV9ZJuW3DBaddBKt9uUv8ZHYV8TXcM85uL5Lmhori6gk5mENh7gWzxevAL",
  "key42": "2p55oTjEEUYEYqoGBPSMmtziLiTpNtJCvjcBmRRxLV37avu7o8Lojufyvr4bpBrXU3UbLyJiK3oNGvRt6DFgzvkp",
  "key43": "5qcJ1UBKxRDDq7CUrDzFcwT3ShH3PsTonG1AEChAq6dznkCbUWafreMQ89P4ExyojDpmTQe6BEcozMYjo5rQzTAM",
  "key44": "2gg155qrfue5NM51e7pE37VuDHFcpdo1BM6CePB7ud58sKJ2Er6pRazHfZo9Zyp74ANMssAWXCBoYJbJF41yP5qq",
  "key45": "43CsoTVfJ8c6GQQzVvpMbYvkw97ytUeXiQQfe3zTryY22jBXPBoPixfz8VCQVMtZanojejcMsMALEzfo5ntvsEF3",
  "key46": "2ozufRXXnpukHPoHU5T2o47UQSj5gvgc95mj3ajFZ2mNu9tBxg41TqtzwQXoPPjD4iagouDBhaPBtpDcwqy7z9Ei",
  "key47": "3BY4fdg6cZ4dB3jdJ8JFZdmNeXvGFL83Ue7rcWZFnNg45ihRTzs79JaAfMCcaEgJfrQ1HtRtbVpKKvup44Po7rL5",
  "key48": "2dMgCZ3rUEwncYPNpFYzdLR3pjwVg6DTmkCCFtDLCUVzGa4a3ZA7unCsQPauh2G2gtrbPBXqmnaxicyfvBxo1TVi",
  "key49": "nVbxoWBpJ1JQDHAKLiyDZGhLswmj3jA4HpsefpDn41zVdNgkRsqBSbDddfXXtP5RUY3zEnzy8TRh54Hrasag3Y7"
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
