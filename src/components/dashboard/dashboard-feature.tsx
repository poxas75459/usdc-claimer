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
    "4UKFL6sdirce8trNG8aMv7tzuCRY7o9npvMkF3T7BmhECzD6qKA4TCjHrznbU4A3J6McGmRvhjmfLSUSrp8Bxyr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aTtRkouVFRwmCufc8fURNh5h16iMrS7iaDYkiNfNaRUTwyuintAb6fPAAAQNyFBwNWchTyMn41Babm4BDNrLHew",
  "key1": "2wsKp1Ku9N8CN9oE1e8QxuA5n6ZbUxQthZsqhYCgRCSovPFcxkcDZWgCSTQSE5JRNjcHxYhcmjFSSpKdpk2mUcrc",
  "key2": "5zEdA59W7vVGRcBUqFUT27qMNPgqK99HJd8GCACFgFELrB6JrawvnhQ3aN1174mvpUe2vzeuJ1eUc2av5hT9kzNu",
  "key3": "sirfn7BiGpf5SfhxjuwmygPPDhUwruXJvzXQEyJpCjdMZnPD5UJabEoWjnKjEGEVoQnE44s584uRj7HbG7TgsEb",
  "key4": "3yzu3KXg8fN72nPmWSSK4hSMF5QGxypyEnXU8gPdwKNNXaM4EnraZbjPjJE4bM9QiuSKb3R4dJ94T7JAdKf5zWgN",
  "key5": "77aQMAbp32Gyh2ZkewoJGgdw4StwkZYzL1hgx7itYBRBp9cjxjsh3H6BiY2KUQeKCWHjXsX9aCeLb8n1fjrdX63",
  "key6": "5QcSJNYsTmXcEH8hv4ZP9BjYs8u964Yrnjj2ssvkemfu9ZJbCmPkPEBVvt4tTCWRTwtTBKFAZuZXr7WXTEUtnEzn",
  "key7": "2JNwbqhhQACzWKUF7G7RqbadsRTgzK28cwuqMh6HhB4tHbNRHYK5hbLBtGEjFpF4fmrqSErhxn9egaaf5sPH1a6q",
  "key8": "4w6CXQyHNwzfFRGiiJHoJBfQqBgtnkcziZEZMu5Lt5kGqoQbBqRfuDP3Bd8HgzKMb5bZ4qTMb1QcgywtdJPXQFm",
  "key9": "38Um44Avy1kp2SsxtUp8TQaKZF8ag6NG3JrueAyiRx8iwNxkNaWSFwrTPDW4LUjiy8i6Yqyhg4j9i6ws9HHjhuq3",
  "key10": "44d1EVZZwiD9fMHkBDkMQKor8TavQHEq8wAPTTh4zmtkhJK9egxyEK3hWR6kMjoak4ucJ2GGzLJH6Mt2JkKGaDNv",
  "key11": "VdJ6woLzxvb49cHTxD37ZABnfsuNDDc3VNEoimq1DG4RcXAP5JjxuHVfABdZ1j38HHY2g7D3ifecgj1DUNWurTR",
  "key12": "MQSbmTDB1LL81avtAT1cTQ4tqjPhoT6o9zcjua72iZBYenEcearWR5YZM2ZVfKNXTs5BLhjGAz7Fj74SmSeu7ih",
  "key13": "4R6xB1JhbijtGMnCFwriNumCM7juxGBGnsEv9XySxb8uc7hbhxv1fELSoWMtaejmdZMau8q1ybiFMQik4ASCUafT",
  "key14": "2pvu67VEqWvZPajyQpb65CHUevAbtbXPmbxqMGL2KZBCDaMeka8cExnT7H2DJDMSgpbTkqcgVnzbmfkBd9WkJuLF",
  "key15": "4YAaHwcC2sQ2mP6JoTmmp8ovL6yRcqjxCWjMxp6Vkwz83wWDqcmRrHaqnidjBHYciSMRXYoAcJydR7f2ABFx2KcE",
  "key16": "UuQ7RJNDREVs3K5gTLuiZTcoLp9XJVPXpp4FEyYxTKxx6YEoooB14e61kgMq5MRoiciXLowED6QCBU2u928n5W2",
  "key17": "48gDs4nrUYuA2uYWVqKTUYyBzcGBqWv2JwWoY4RP1XsKUBHQ61Bt79WwqVSLqksY4n9b3QYw8Brg7KzMV3uvUgmU",
  "key18": "5VaZvhNAH246Vs5FYcVQKKh6HxVrG2qFzdUjC9no8Rz1i6Hv2mWDGcAVJETUVBqQ2Zo2hDmw1jC89wVcdzicRCVg",
  "key19": "3V55sfVXGest3cZqn4XsuJvBqHu8zoUFM8yWwizSWxrM85c8xzRzNWViLBpxpSQ7DNN6dkK8K2o6UHiJJm1zVz1S",
  "key20": "2heb7WABc8jWZ5QTjGuZjUWFvu6NP1mnhLS8MReafeHAP2ezfddWjtVMaWnWdMxuKAtUcsMfkH8pDwnGDc4WoASb",
  "key21": "22M4CvsyDkGMrpaX23ZUWSmpcXBuxnvPbxcQJZx6Zh3vL2aNRVxJWJ74MkPNRJFoZew8WfECsn1rXBQToo1fCHur",
  "key22": "cMnYKNj4yENRR3rZLDsq8rP8NwdQ6LVvLLez1KNs4Ewyjb6vUAJUMwA6MkpAk62VQmjYaZ7MosubHEAHJZ1gh24",
  "key23": "2NpXRKLqDEAiNPRGu747X6nNjmxt48kPBosD8QnU5yNnxrSdekiGwKTENECNqf4fJnBLi2p7454B9vdvVMxjGp7U",
  "key24": "4gtxGbKPYg8QbcZjFtTDFVTJDiAYD4grGMsVsmFvLU7bFqTAy2dDT273Ukp78zHUESFfwUn4iVJ2i4mBgcnctQiE",
  "key25": "ETRB2ieRE1RZVsWrgVQzh1v7VEDCozr4wjqbdHvKAWPXRrFYeh2MSghvU6Cuf3NSZfTGogczuSJxEZWwpC5Kfa2",
  "key26": "5J8JmgnzWjUR4yeqFJdG5XYqiZ2Fxcf3t7HiFjQSnexKaVMbjGhr5fFCshayXyYdadadr376cNitcnt4qJkYMKm1",
  "key27": "gCLAF5LHLdnyB4brAVaEjwE3FC8H5VqX5eGsHWjxGdu3cFXXyVTHeXBVhrFVaeHcMf19D7LmZSc8a6HqXR5GeTN",
  "key28": "4s2pMWfeGPaKcqngBRp8mxsAknjEnxU7v4Xsxq6MKhAeRM4mrZFbSqJnFkDN8qdmCsuZB87svectfXEhYTj5VeSa",
  "key29": "31RJcWBNJrVJFcQqF1mKW4Xx65tLZBetH3XYpufdYE8Ys5fHJwrxzLWUZG9m7DnSGthKaWQZFo3kvA9mJqeZP7Bt",
  "key30": "27yHnXoABDSus7KCA4Bc3hGSqsiJAeXyMH9y6hqrzaBSYh7iJzjvDSzuEzqsy7wW65kS3gx5WvqG6LfjeR1duAEv",
  "key31": "5ZvCRmSmvfx9SUSBjjAKAPAJzhFz9cHkn6EiJvNDMLQsnb6NF2U8181wspW276u98iMY4ixwStNy7RXVVYqeKHkW",
  "key32": "5p3dyqiqyiba1ehV53Lt7xxwgsJqhEScJw3raeMwATfGAuhGFkD7kcLvZPeSy1TdmpJVYp73V2Jq1iYA81FiKCHd",
  "key33": "4txQRpjiL5MbiWpeW9f5hSsbq9WLzj7HdRdrc4eNQQ3Dh9fjeb9G7NrbbvD32ZGFpxNqjfvRVS8iDvt6kLRY6Mpo",
  "key34": "23CD4x2sm5VMAELZBcH5ovuGH7QjV6U2Kj88U5VmGGh4GfeLprZkW1MBqpc3rgLjY4tFydV5mpqz2uJisu5FmyRS",
  "key35": "5sK5KaG4dWQUypTeVDtpt1y2UAFknHW61p21ccbGVLUc9zfFxLFNMePrg9BhGvtCWLffMR5UrBdozZ179bcFhp7B",
  "key36": "2DW25TCXgoijiZCEwEubSoy4zYuSosfHtBHCzFoDJq39989SbN5KZa5vp6skYtHKBK24EL3fR7jsVD68YKaS19gr",
  "key37": "61ahZAsYKTABkhBi7juPrzFX29QBYZChFPz9uM7wRbXDXSRQw8xu5vEq9AidK3aDPtS1aAqHn2u2GbhaGf1KHX3N",
  "key38": "5BXyiycZCZCP1eXyEh9gpUGzSNGr1PzLDEbthT9KWTEtFDmhd1ZSMJtxDykT9jdkDR4LHQoKpK3mNTiGTwheR1mh",
  "key39": "36TNvdsRbHz1bHdbSDmJXqc41XQZD46ZeC6PMVJogHHJY7Jpi2Pq3vgMFVXFpZ6EopfQ92CjfPJBseWWdGPYkwsZ",
  "key40": "4RTLMMRanZuCUoYypmJCMGH7rLLkrzopQWVin1wxgCUe4RV5hroLVbH5cDVSpRfZGpZWzKzqZNQjuxUJ7Up7ZUVm",
  "key41": "2rnQwGCYUFc5LN8bktH997nUTi7SUREF6xZwHkpF6vEt8rdAMoBqQsTtVHPofTS2uhJnuAyzt762MKcBwrTdVStX",
  "key42": "3SHn12RQnx5HTTBEWpWYV28rYYey98n3AXdDF7Yzh7sj6sCB8Sx2rZmKDWY5saS48h8XvFeBjgQRZLtTro6siCw2",
  "key43": "2sHgUx3GRFv8hu9Ain61fdTxV8t4FpgPVARAB53bu2rUWeHZAeLQjFFD6tdu1Ci2juJAW1Hk2V3HbDUaaCoDEFRk",
  "key44": "dCN8nEUjpBbbiRBrGWGbHMx2KF7vsaCraXA8DpxgYSqxrPcUKRqbraMkZzioA728mVWTwE1UruZit6QGNXPCRCB",
  "key45": "ARRn7pmmr7mmhNTQcyWpeRZ9PUiLd3EMxYMLYsyfLTQCNfZk8Rd8MzgnNuq6S9SgpxHRfQCukmYetGYfapQCK5r",
  "key46": "5AdMFSRzFPwZ5tbkdFAVRZbUVQi6WiMRnLJu16Kfz8Crt7oFTK812h44RCFSi4WstxagBFSD6McT8TYdK8wBQW46",
  "key47": "2v14AxfZZqzuSErX1KKidgPzu41aEY3uvm81cwQrR6q3Ahx8R7bHjbPBBjHjQpDm3AmYGmhxdkxvfHUxinsMWgrV"
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
