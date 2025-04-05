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
    "3e3Bd8ETaHdeuCr9cjwjUTbxzYEZahzHJmR8T3EFotTXwKTuFtJioWUJXUoMJyBwMpZaaThwfhWzzB7UodUzfhLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKepQgvNpJvesmNjtTPaHBcpwb6iqvNAzBdACteSU1ZkprtdZyPCcqZ7XeLxG5dRTaxuM6DxoNd53JY9XTzsNzh",
  "key1": "5QUVqH42zXC5AeuVeeCnFN86ZKkbEBNYvrNRh73vRY4gpAc8WRMLwuFZFqLfjDQBXXqTkWgXa9aK3pqWDvpj4vJU",
  "key2": "y9FftN8jbU2SVwZeVKm98nvcELwysf9bU91d1YL4H8hPKSsUJ72a75YETGxnEyGzfMGstF8U3hPfhpxcyTxuN6g",
  "key3": "2Z5dpu88vahVYpFymv6nvLmy2CamestX4id1S56qTC1BpxUkW6rxw9WK8sksGVL8JDvuEDYDB3AAoKDzhdhbmMgM",
  "key4": "2ZE64cvizKKwVSCxN9kBKayqbkpyLEp6AEDCfcMSyvVxMY5a8aSsr6kdaWZxveeN9zV6V19tRdvV4hbQUsQvumZ8",
  "key5": "51VWFyyo7AwnszX91GmKdsfckHoJuYTixHpp1GrLi6xD83kPF22PyoVgVFhdeekcdk5EWPhJ9oZUuP9gpDXZeoTR",
  "key6": "3Ao3TvcFjP5bGpz6FunqvKwZcpzd5sC183GDTrQNqa221nVYS55AW6sWLPFRDHMG67gS7uXKqeU98Eu6ELfNVrd3",
  "key7": "2WAFp1FqmmXgT7NR82UGdzK1qJX1jeZWb1L1v3LbNTDyyS5KuMtDCtuCwwdS6kRHv5tgD1tSCpZ9jU8nmgXpFght",
  "key8": "2drMoAhJtP9L1jENucuf42eJ3BFsC86bpyRttz55u5Cciwe8N37AgdJHwjfmH8XZmuhRQFUk1oV9b9LJu3sDmPzX",
  "key9": "2TSWMJgQNAUGrU4VXsGZWMxeuS5ffZRYEbo1Ms3WMK9PTXhtWWE8JM2QtagP9pmQajoZ5irB76tWvUx4SUJdVuF7",
  "key10": "qtGjBKbErroqQBGcgHeiXD9MYEdY61PYm8dFHLy88dKGeHMQdqS52rHMJfJzix2dqiDyn7vN2Foy9Fx5x3CBM7D",
  "key11": "544xDnpNrYSPKFgvrsz7fm344Yhn7XDHgej6aRaDKctBNyHPHFAeEDtGW8aupwuisBBRxiFhVA4o7paes2i3g6aF",
  "key12": "5dhsGpMRkDe4UySxKqcvWiSpYN5Vc7J4dKqXVqPyK1hQnX37DLxuSQU2oap8dACDERQS818vDtCw1HJJZm16zbKW",
  "key13": "5CFCbk4uQVb7TfmrvgwDTTkqconQhDrwmFW9Tx5GoUSDHocnYx6E1AdicWQ2Ju1RkYFNJFLBiFAHe28SRphzAXhd",
  "key14": "4h4KSZNocjqHMX5HifZeW6ezm4nfjHcwABPUi51h9Tu1HqNru6HTHMo7fv92u9tZmg3V8KUrkpB14UVzneAcbb7R",
  "key15": "4rgmLpqxci9cBDPyrN2vuWpQ5B6M34cR4QSJsm5jNS8kLrYkwWeqRboseco8fjFGGPNWhynhvj4iqJakKnZYHxxz",
  "key16": "3ShDjEhn9BYS8By3hoaiTYnh2yUakNBDWDBs4msPosgWvALSgkdcB2go7Dit2KPR9PceQyNweqAfxrbeqBX8Uog9",
  "key17": "UJ2GbMPSZfot6w7wh8fBSJFr2eQqBg9dHwsqf8iDzpiiFLxVoBCSrqoAF6wfzMsDVkC7QK7N3Wtq22Q5gVXLFLP",
  "key18": "4Tnz3rZxmeaigfX9B53cfTgrPKDom7JknLD6UELLV89iouQpEt2xGtJMhT3W5PAizbt5Kjvjs7t5qh4spJEzCnfr",
  "key19": "3DVuGUBXk1qK5axba28Pp9PKHcZTwBmRDf75V2Sx8hqp9QsufvfPjJpcbRdk39Qc4hp4uMFxxgUJJKbf4iBsKXbr",
  "key20": "5DyYVebacb6hhKyYHRFRACeSbgXvZbrxkL2sajuUVb97Dyy8B2UmgM9MeHq6GcHxB28idHGpzcu7XQerqtYnYQ6B",
  "key21": "4JZ9eXjqgjyog2fhgejKbS18k4gcrRcHv1pfbX499pZErwSvvUMqHy5h6P5tUEwGeuXDDPJbyaEiN29ry2EYgX9s",
  "key22": "2pZFJa4H7vpNiiRr87Q3E3ANJFCccV5yStR4fBxqubvs3yLtG9KCrUmBXp4eJC5nDtjXckKMCZxQ6k9JHky4kZRX",
  "key23": "VFHM2A3K6Wp9T4KzGtwX4Fs7P2zqEes9Ti2xpo5a25z7gVE1ro4d7DnurGcrQHeH1sU7tXUzfzw7MM7zxJ1mcpa",
  "key24": "3Z36SJZ6VP2VnahV5HwF4i6VNgj5mNz73vyiA6c8vVSjzPyGAKF6D1R8xLtQg4F9KdXTCuhUXqXZPLVqpsh3xrwu",
  "key25": "31iEjPJ1USo9joPw62Mg7vKqobbxYE8wuT3BFn5T99hmpoFYFrR4CAHMgYMcCFHA6E8WyVYGDRNxMhxtc4GHg7vr",
  "key26": "25XqcPzXhqCpRaY6NCrpC965LMFen2QRSVvhEVtuxsxat78Rw5EP2qwQvxnt8SDuuaAFqQzJHZq4nTHbLpo7hsPM",
  "key27": "2Ydix5FitQf4CV8nFbb5BmuLxT69aNva2wPZjPuozPz4hCWvDTwf8FXvZC7GkA1mLBfr1TeVTLn5xXSf4sNsYGuG",
  "key28": "HG9KJLJfTBPJfygRPpT8wBtjc9FeJYnV4xqUCDRLHzXhZC2j1C1xbhWe9zWdxvtYYazChGXns7yXBo2FjidfLHv",
  "key29": "YcPc2ibPkXvF2LboJxwaAYrm2Q6PMLqQ6TqNbPZTB9nySEx6ULnmJiMF4CY8Akiet1F7Z1aypxVPVr4K5Nym6Hj",
  "key30": "2xN2SP4eppyFmvkcAFpwnDv7VULjPhZbnLNxkvruXy4FsPxgptteyargziEsiyevkSZH7X71mJDphwfSjDL8fAi4",
  "key31": "3JUWnjnBaYvEA5wUeaCt3koUR4FbjYtWCRKV2nsbBWJCrZiJ3A4SeZxeSj1CwpbzkAPzWySSh5oeDvH6pT9YnWsB",
  "key32": "5TVLCCYnScf2KKaNgcteVgEnUkByrKLyai4F59UftQwCF6iiqWHxtYzzPak6iJorXyipSX574aeiMJzYRnVAfK2K",
  "key33": "2UoPbBxCVjMcGmoZE8wuYXCqPD8eaagSQg2Vh1WDommdK5usGhD6en9suaCbK6JF3ffBeZuaT9JdvZMH5eKs8V38",
  "key34": "2byc5aYSLbSRiLNaTYUeGCYVg9bBQiXBBGJzHeH7u4QWcnybytqnmAir5FxkLLEwH5D1WnrPxKofaCR38QArbcFr",
  "key35": "4tfqfzk6jPDt7e11NPuyTwrmRVKRBjYLQZV3jDXgKpDjTFrwuM7Aq9HjhvYjwLTK1umdhmKnK72BYA4XNx1f1cEe",
  "key36": "4fHZBnDTbTighZKUNfrpUHUmJYygiyxKEAv3Up74uz4gtmuQaJ7T52XhPHnzg9Y6YgDP5Va5D7nPpujDH6nokbKx",
  "key37": "DAzDsdMwpdrukTwoBUEgnXaJdpvU4o949T4CB3Ki1Pi9b7Rro7dMA96BXdhFqVdMRiUrhirkwYryt2GjMPFyHpP",
  "key38": "9q9wpiXjqt353JsPtw9zhp8Axwcezxgs6TKWAv1smFkKugkHGLNy4mPmdCu6L2Z7ofMA7PLtSp4PvyLfBzirzQf",
  "key39": "4fFVCDoTX9mySsZKdCEA5FqRFG3Vby6X41YPBmkAaBtxFPytppyjLNBXMfFb4UGbNRGHfPxW6EoZgkAjnRYRxWdA"
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
