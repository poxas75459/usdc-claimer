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
    "2JBW9J8XqoELdcSUULFBMtQqrLhZ8C89nu8ZV9BugrYpcudSFTdSkzB4poa563BAcdg6UP2zgPYFdWbCDsHbEBQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uMee1VxW67nKPpZSxoWuzzaCDpAV1TGzxHEeEREeKk26CyCqbYb6Tsv8e3jMA9z5nna1ziXwWqdUCLCd4wf3Swi",
  "key1": "67myAPT9YApwoDTTXSKGAud1W3vvo4RWBeK2HAtE1T3Bwsv4KxRssSw1BpsREqBFSK3MyR3LQqWEQTZAAx2LCjTb",
  "key2": "562chZLB1HbcvXAPvfJjjkRcWfUARWcozUZYGCZwp2t9Y5oFsoo2GaeDF6jPE4YzSnmoJXEYhbZaXZ2hxu8LQJRu",
  "key3": "559nZVp3XZyEhfk9PDxrnKwF98Qx9VCNrzxUiJzwfv1YbFgu7RWcg2x3JcAEfndmTo28zLfrr6EF2jAY6fvx2ipn",
  "key4": "2JMkbncVpnTmaeTKethYsjAzDsNZcYordDbGEEJPP72V6rSrmW7jDMF5yKVbG51jUWBm8xkbrqgyUXA96QzFtWNx",
  "key5": "66JMiHYm5wASqmrWED22cRjc1xPTwHT4Ahwc9wr4SHxeT8Wuj1eGEVFEeaaydeg7U8u1iZSS2VLSa3TVUhBC4ZX1",
  "key6": "5SPaawRSNGkumyRSXHxmdSbxznitE9FdXDqGYSo5RzrGv4wRRpDBVHGMSQPFnRj2mm3p9Bh5Pw2KsdFQhytoEHaz",
  "key7": "45zYA44sLroDxz5ay2HPPmRSsCYwd86KGXJVPURwGMNWr8hF98gbrZqEGJz7rce3oxMUcgDsbSxqXWnpmLtNnmb6",
  "key8": "mVLDkYrnvztPadiUP9AFsCUSi95WBKv2AT4YHfmCBkSPWiD3Vp15auKuvFvS74j8Q1QBExzQvdsXHQv3JSnPgJj",
  "key9": "3LdrJxKWPbTyhXngYiSdfrBfCBNFFUdA9QakNJqAT5E3WTGRj6yf6MsyMyzrpbnWZZEDtnxkjeuWAeLPQQ834BkG",
  "key10": "3VynxCPEXSpnm91agJo96i8Q5nXWoepQBcvGU9LeKyqu3Ub62WD2ZaXxrmtgcVihnhRjzuZPakcJVfoFr6fmaL5J",
  "key11": "3vtznxLttjMt4ZtyUW2EzLFV71bWPUwC4PnGQ2HRMx8pp78nkWauGGzfXAfrPADCK1F5NrH6qZmejjiBRZVJpLQv",
  "key12": "4hQ5cgiE3MjNWzs5CXy8Vy8KxDDj6qBNspcv17CUJ54Nm5MUdFGhjbNUKWqqXkU7DiFRzbPx4vwThEeLnqBLTVtK",
  "key13": "2uj9iTPWXbCnZm48FCpAF2wRpSQ3rcGrDkb35TzYpJ2YJVS5tFGTERaQzUniGzqxi5vKv5cfUYZ3kXuzqQ42KgDP",
  "key14": "4fuqEvGYZ2b4EQbDV41UKBCpKG4RYVDq7t9wQKx6bHzENcv4M7ZoFk2M7N4X1Xq3iaABNsfPkcDNpQUhCt5hMLwh",
  "key15": "2hb9JzsADzCp7JkxLwo5qP9hgCv3XjtonZfAXJ1TfdHCvsY2N3wjtAUhcaJw6NcKv8UbzHAtVraGi18End7HPDj3",
  "key16": "B6NhZtD8MQWorhuhmCjdcdh13iU9eLgy8GUzdMmuiTSS8CDittnojwrNcYgeRUvziGhpPLJNN2a5RyKdGVPbiN9",
  "key17": "3z8XmipeZ9QWZw6EniAj4fGXk3HpEmZu6GLyqUEefbAHMYXMLW1amYYo3E72bUEVom96jaEFLaSxfaJmtfy7uhny",
  "key18": "4r35pEqy9r7FfUmzkNG7NSgQ47gTjB9erG7RfKwvR81GnzUKjQT2o9YX4bBFQhtMrhMdkRG6qrfhzdXSHb91SWUo",
  "key19": "3A8qc1M8Vus6GjMvGfgYdp1ETu5zJcp5kBH7GSQbJJqeXn6wfN6hhABtpdpt6dVtGMaKb49nhUZK8nrqjbWxGQDF",
  "key20": "4md3oih5L3eXoCdUVKiYUR1245hq9DR5KooySVxrgcQBgErJUj3Py7q21EJGqkt9HU9sce7am7R33PTrBELCXjWy",
  "key21": "LWzR2SwBKuxAt8Eg5iq5R4WsTUve5QjRNzSDU4T1WQBdwQAuDRz8M8aDB1GCJm9a2YrgmgvAWfyv67uwzK41aWz",
  "key22": "2iJqaaoH2BKKbjnA2DotZKyTNByzyCqABXTFvCtqheLy1XfAJWUNfudArDNwZxpq5zwpQoiJqqikSugLCuRK2SU4",
  "key23": "2WCeRwMFsaQQynrBKYe5J57gHYi8V6foTCUg7vsVuAct3DxmfQ5HGGTkyMXQQBk8tvNNYE5aEN6qqMvFtMr5s1V1",
  "key24": "3vUhAwv5NBYSkpgNNSxzn65YtCQauYUD6NDTXwgJtZugZs1tAyVFPY7RPxf65TthmFahNGD31Jz2h7yp6Gmex96e",
  "key25": "3aLk8UBHrgdU5rRWks7aCpDeWaGE6Q82KbtRwFgwtaFQHjRTxEHcTZT6yvojxYahZLPP4Azwo387ks3suL7RNJvv",
  "key26": "3W2nsGzhVRh2Bc6o2mwoert949FbWzvaDqNTBzvESmef6oHdnVym7pNFYV31x6hXQPGf2ZFEPmYErUExhuSEff5V",
  "key27": "3tEWMWzr9g8aksJpzK1V1H6KWbJWY3E2KP87e9Ge8yoLotPtA4tPPGVpkYQZ2gfeo5a5mzJjr5MinxWckFrHc9cW",
  "key28": "3gucp4SvHwA665FSyhcqMvq7mY5uBh4WCQDpFV8KuUrhtnFA31QP2sXjNrf9pTeDs2Quh8qLELZivyimPx6Kgm2v",
  "key29": "4gCF8z6Vhw4e6JJZLUr2b8xRWkA5MjsuKFFTfo2FRGNTLyB6jHakUL2bu6PounRzhUSAfvMvHpAHKd7MpYwX8jSv",
  "key30": "2WJnCBJgp1bgx4VoLvYq6h1Ap7cDwsT21frrsd9zV3rt53uU1iAQjN9KWjHS3w9VYgTuRWPALLurAKdijMo2dFPd",
  "key31": "32QpQ3rBCq88kchwQc75Hp2kzM5rQ6cVgBvEv8opsavevEStH7XoBzD3t5refKSKfokREzzrvSuNSnMzT6yahu2z"
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
