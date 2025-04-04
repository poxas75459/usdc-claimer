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
    "37DmPuxKo991mMERvue7bYQLnYZXPhPnaLZXUCct3JuDK3ynENfhh98roEqRr8r7zjWy8wr25NBvPJAtwBLqHZda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaF56ieSiVJw6xE6viNvRY4Z8QYUAEpeTuYHc7FcxJehzLpXWTNz78kfiJi6KaUfcP8PWjugkNNWzzwuWgT5R8a",
  "key1": "5yk3mUETLJsyiGAHMRRnUaqfiuzVrCFvPJ9qm5iH3hXiAWEAVNdadDnFXCyoerCzWaX1TkV9zt6bG8KFvCeFifi8",
  "key2": "4EHJDk9ZAqjZg3e6hQo41KN8cx1R1jpDEWghh5oTGiY7paaaqPs348edRJn6ME9q3BzqqCGPbXToCBmBvz3Ab2YR",
  "key3": "5TchypA2QCSGCjQA1amQwm682Nq6CWKCVw2z46coUFH3N7j7qVZK3E3HDuV7fZzTeDfBwAJJfRMWQkykHuzzLqKu",
  "key4": "gmCSE78yxgp3PFNSGct2vZWePXu5TPzyJShGkTyXkogD69hCwH2VCPq8RYivNKHyhFVJSC3UMz2ooQnJ7UotSUm",
  "key5": "3r7pBs5nQZDcENCWbipSZgW74yXWBcsDi1craJFTaj2Q5vmAaPRgCRpa2MPUBGCa6ZXsFzKfMfk9MpfoRRYMmSuz",
  "key6": "YYFtHAHBSzBQwhm8FssHZqrExUHmqwstW81xy1SNdPMMousLkgrsaNkuchkGfRAF3g58nkbLb4rY2vJyq9JSifn",
  "key7": "3ADrQXUYgwQMcPdbvmqDA6mq9yBeHTFuBT3ZGhdSDnBzzCZthWyyjkXkdwejCL2BeD27zPVcoM6pKpKmgTzYk2aG",
  "key8": "5xToEeVvMTfU1xgLwYZjq59uHDSbsoeN1LtNhAKoQEHWWEhKe1sqjmUg51p9qYyHYX9oZGTLvQThjVQGSjGZKrdq",
  "key9": "oPTT4FBoJhdrWRouP7m4Ya2NN3gTXW7HjuqcZHQ3dJCKzGtcs4M6ddy87bfYzN6BokyK25MgHUra5WPWxktK4KG",
  "key10": "4LFwqUyg2hpyDSAByag7VPXeWf8oFWZVKQ41QW6wWkpoFYM6NbkEvUgUb2HoAUqHAY7SYLLmxjr7CYcPKEGyqaAA",
  "key11": "46KJPyGvXJ1GKk82HM6XCc26fiJ35J8KXQT6Hy7fYoQm13PCxvZqVCGxHw6QB4cCnHR7nsaH1FyktP1BJn9KgVXa",
  "key12": "55FcSQafHBCDTJoqdWSE26sddGtVCzQ7W6EJAqodi1CF36mCcNA4GXij1FVev9yh6wjAD9uWv7tMNmUzZ8ZUgvdB",
  "key13": "2dv42DrEKS4neiQdRjNaBp22mxZ9vmYzDf11LKPcfwTGLzccVzNtLcNeFZUaaRKRLy2gN4YnKyVd6At2FHVS1rf",
  "key14": "vh5JY8CaRVK5fme9DCsTHe3QrfnzJmdDXu6yNrPJaAW1fA88xsuQiU4bDRLMhw5BdKoD2JTWY4vEgjTRBafHEZa",
  "key15": "4JSvVjBZuFpCQgEcNa9htHuZ7DWjkkHnYyLsPG5nx83Z2XWzgYmttTf4T8jijtojdEz2hbENsVjJ45XCe8p3nr9G",
  "key16": "3ouqb4gjPGPAzoNSpitp34tCXdhQubEy9x8g1GQ5szDcVXpzwhqnFfWfwz38iSkUAX21ZRVCPLVppiQEPmtYaGHQ",
  "key17": "4yKmYE4wupBCzQryvAxR8vBbUjm9hkfp4imKjYM67KmUFuCsVm1CkhdeZkWwzzqsxS3AQHhAZXt9qhUz3LTZZUfS",
  "key18": "5tnL4iokyra9J3X5GhcC9z8Uyw9WzfpYb99LD7EUfc9qNv8p2y4mfcWsRETkoEAQXaKgSJu6otXaJsmHAqYrBnJP",
  "key19": "49mpB9iqzCiYtMowrxxAKRgdybvKprnyh9XmSaQLyfzMo7EYKxSSXrQfT3L9s6jMzKVm9JXM2RqYYmEJKyKR8VfM",
  "key20": "2QqAo87E41QtPwJjWfsm3KF2uCT1Ha8jtafhGdxsbnJyAqigx1XrKKxAcwQjHMLBmFLZ3rEFEX8rTb6WtRw5oLKX",
  "key21": "4Ac12VujTqLn5D11Y2ehYvcCdUPF5AnjkAfnaVgAqH7stFfD5z1synnKBaChqEQ9vPf8Q4fCNyQdnPXA2gBkdGnp",
  "key22": "5qWGGA4FgTJPpcTmVGvcH5LK14Rgkq3oJScM6jNam9PnPMJqnNSosLVjox7ujxWgsYdFHreMoyMU9Z5fAdnP2zts",
  "key23": "b3FNd99mtBmMPKqdQC8JrYyzuipfjLLhi5TpY2yaxrfAVn1y5SKhx2nA4KkWYUBZa2wjh4UDG1zhrYHNMW4KLmf",
  "key24": "5xwK83TcaveSTq8QdrhCSQ3aJV7kcQotye132cS8hLJejRCSKUqQJPvGp5X5qpH23YBT2gXahgveASsLFr3DorZx",
  "key25": "5X8JyqV9vUbTp39mPXXzijjVtvZTuCz3wqFwfBsyB78964Qjx6Rcq5ZSd4F6abwEigdKjAYFtwwZmugGDRyAATvJ",
  "key26": "2isN2D5GuH7gqKgWegELkd4oys8BKxZWtTju4PT87rgzwkpqXyPw81CRfPzfPsoKuGWCgTsfTHs9MXdYrDB8jZhw",
  "key27": "4f3JqeLU4W4pat3e2HnPzcs87dHwvTKiBo1YQx7UH5SQdX5hBKwh5kbXLyjCvZG65NEzUHMoCX83imxJzRzfBse5",
  "key28": "3nhErfQF3ZbuZ7ZbHYY3R2dR4TP2yEyqQNYfV1fFYGE9jehNWEY58epGB4Ujo8su1pY9AB5XnL5YTVb2BYfHV6rE",
  "key29": "8DBLTFDHt8BmuTMXgKgqisKDdb5BPW3B356434zw23qsYYYJsauzjq3ks7EzGnedxvoSSsxu6U5zw3u3VW3orbE",
  "key30": "58czV2PoDrUmQzUsNoSCeBEEbgzsjFEwo56xApY1yuf6oFKPUm648YJhNcPgaLYHVB5jxagQtasoFoEVBcVbquYb",
  "key31": "5783CNuoXMXvwW2eHkhkCghdadD7KVc9rTWEkqK172f3TS6ToGzj2KgBpeEDyq7zjFMd4T7oJ5sKFkeZnYFnjzHZ",
  "key32": "hNcgjifb4zfB6mH4AuqkUb14ehg7p3MdT5g35jy1jbstCdF2mL3kv1WaW9EgVPYMwYmDM5iXQvuuoe1EwErDJ1R",
  "key33": "5vUot3wkeXVmkAcaUeNnkoTjgmRysZ2je5YsoVo76TmmTArZrAvBmy13rZVNnxei2emhworwzGG9BeRdGbBPnsSV",
  "key34": "2VVYvhbeaRjogyWv73JEpSngsgCG7Sqr6fF1oQ2xFd1XehEGv5dhWkKjCEx1BEFfWZaqSTqDQRwg3KKBSpxYgKb8",
  "key35": "ySNtyJGdHGi8rkxg7xdRLxZDspfYU8bXuFM9BgVGDEVEMGkHnENpofJVfyAT5NJFV1JANZqdubMZ4qo9U14eohd",
  "key36": "qQ1pHnzw481gY5o4GAmctLtJzHtQiz7F2Hzpx8tmEZvdLMcH6omzUroeY319CrF418pwL9rGgZLvrbBQfSbg7Ct",
  "key37": "5Zd8DqH1XNwFMZxh96Rxwnxg6o3hJw4eaQNvBTfPuUzCZB2RuVRmj4JFRRYdUvWvUGLDocGTjfk6xeiXtrpmB4xh",
  "key38": "4YpejrCqyxbYt1RX9GUn41zFfikqeaxWaP2o3R97mo4hpJF7BkUkH3YCCdkznifdMxDG5gMCrqhXD7MdxnchgKAX",
  "key39": "4E32twZEiqKuJ5WgLb2todA2QGSxFkxEpdk1NQ1Km1MMvfrNJPp1UDRFUhvmjJyKFR4Aji1ghX37Z51h2mksPt3D",
  "key40": "2KxGas7q8opZWPXe4AuTkRdLTwZSCddg5W4HGP8ooAMfHrUVZkwecQa4tbYb5WhtJrxCrvpWgFy1HHY5QPqau6JJ",
  "key41": "3UWf4hqGfGfhB1AD3gHfG8BuswaLpqMvcsWo1BQNrFu2kc539QaXi5QUKW6Ui2nC2SLnrBYZwwYJuNU7giPCEuL7",
  "key42": "2k8WhhH4kmgbzS5wv78aX2yybGNZY9tQH9hbAdFcPSgg9Pn8EiEp9KFbh2CqZ5zi9iFLri3WzAXS4bFt1ABL9eym",
  "key43": "2wCEWaF4RH7mGwMkgNsRZcKbxSb9miKkC8hKCewNnWqk5hrKzKt1QiR1syS8xx76nrs9dMcPo8335RtggEBfTRx4",
  "key44": "4XuWqgJZ8GWqSS3Q6R7BAvRsWE691eBHLRav9rkfakcFVSzazmQQ1XCghXWtzx4tMoQsz8MoEzXfmXzvW2RY1o8X",
  "key45": "4zMskgQ9ad2AD7QgHKs9dNaTVkjoc54tGH4otCakpKoot16tnGsumbcj9Z78ZHnDHLRLh39AY3TqXsGxTp15q8NV",
  "key46": "4AHUS37TEF2drB9aqpe2i2hVJC31K2w4yakog1avpfArXvLRcJP6zKfuTZU1EVVeGGKADTxY2YhqBkSCwhgDnNrD"
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
