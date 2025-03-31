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
    "3P1fnYW6GgRdzUYxZ8f6etQpWRdPiucbPcAn2oz3ZJYpoGfQe3sSt9yUV1w4cT646rynFVL3UHKpfX9kM12dhjeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPF5WHR3j14bnE7EAc29qCp25NB3Mc9eZjC6AAjL7FQANciTDwYdCK7x8VstFV6dZqpiEG67u2fX3WVhfF9VaRD",
  "key1": "2pZKK2drUmCyEb1uCUut6ww16SXoi1V8uw2tLe1nSYJDsed35Ej2bujvSHTyys7uZBPFpf3RNsS7jqEocbHnw4hE",
  "key2": "24A2k7yeRV3c3uQHaraviLpukdrTUB5SwfmEJjHmvA82CZaNNXwfS5xcvc3X6NbuqKUSY3DijoFmrw9yNmmiwkTr",
  "key3": "2E4mikbZnvMPHHPq11AdLDAiEn1XZSdooNw8C4Ug1Zm7Qk48iV989diseJV2qxBUhAz7zsTUYxWm8exKjGVSdgPg",
  "key4": "QfWbnbsK5zEo8XT2i8oYKUZHizKYb9HoTSYyb2zSWmjDhJ8rTTEHLn7SstVRXSYpL54qc93CDmKb9dfv5UPreb1",
  "key5": "25MU7JuGbqnAB5zfy2cLUJNp3qXgEX1W5QgHi4hibufXVdivwQNbkEE4HnW6aSN4VTDzZD7qh7nkrL1L6Fp5e9kP",
  "key6": "4ANEU24uUDkifRcU8Ppfj7dUwEDo2pv9YgTNbNAuExyHMt4n2mdhTaid6ktWXFhhGHBZSEP31Psx2qvLCrVk5gw5",
  "key7": "UayBhDWBNTq2M6JFs2ksx7QBy6mJSzsPxm6LxVZRqQetX3rBiobiiH6F3m7XgNd2pdmPU84ZX2hvzGEkvzrfBK6",
  "key8": "5jiFqH4qzsg3VuF6HDUMBMC9hrAzpndw2QUiLsWAtX6mhiQW6XwTfoReAuqzwhHDvA7GjjEiWrj75ZCMtc9vBaTD",
  "key9": "29sC3mHzwJ1YxPBehwqbwu7Hudb6n2EJQ2co6WmFtb22meKAAfTHSXP1LqZ4Zkx3jUVS81PiVEmuVjpwSGYb7K4S",
  "key10": "5DcQC96DgC1uRHW6RmVX3A7zzC7X4XqVZQZn316xWWEE7cozASk4LpJFjWTa8BFYxc28H4EqZS6pWyUsN4h4oiwv",
  "key11": "2h71fxTNBBGVzi3sVd3cdrpvsgUnDrKWUoxg6yW4L9tsjXiadN6uvy2uYjrzP4nHyZdUzJzRNVW3vU834XZFPacn",
  "key12": "5YkqEcoUU9afGBTH1tyDADfAp3fvfis631ybFthK5CBKCKXz3Axp46h7zwfBN8n1782GmS1YCP9J1YtshgTeg1UN",
  "key13": "5nmP7MGRRqUPFm3c83qNML8pQrqVT7JBnJD1m7uPDtbwDkanhXS3m3NydBAaCuae2pv5VTQtsQeK46hsA1RieBux",
  "key14": "43HRqSygvvrhfbiMX99QNVex4pgnSAxZ9fLsUptATQ7N5XiuMbk42Dj35voQTojpYq1wTEAPmMRRVNwBbBaa2Gnq",
  "key15": "4mBMR1wXQ7S31VqcvyhKosrgHwx19BAZ3b92qkCRkmTqz52GGrxFkHhjrhu4SuSQSeJP58PtT1iD7t65YT3tyHri",
  "key16": "5RBVRc4ctkkWnX6biNe37orwg95ZgG1vBddNLhWrojMXtJy3HTRCEZ7GwZkNMbiz76ci7yEKYGgR2y6VYRAiTY3Z",
  "key17": "2jr4oU1QeTmx8Z2GY7k3jRoCG3BnARaxBNp3DpySSJ9PLb6su7bqwQW3Jai5Pnck6NKuibRfzEfKPqDUhn5iHSSG",
  "key18": "2ukmeP9dHEYH7dS8CsDicbT9dPhDLFAwnsaTjmuxqgX96xKwp1ftC5ubeVA93gWMyjvP2oRcwMX3fmq4cnWgDs8W",
  "key19": "4rUDz1wAq99soPoKk9v3XJ9C9F5Lh5JapqKSCKruKkx6qkuvR83hsZ6o4q3TcZC8tJj9cDyzPB5tXyWRq77UNpGB",
  "key20": "njFPkkUdJsBTLie9V7vtbnqCEj3xrkk2QCkX8ASxYvk81L78GtcCACSQ1PgFX7uDntzH94tmHSBXWw6pp5CUwty",
  "key21": "SEFH5UsTEscF6agGZucJvYGyLhWqLPHXcakjfGCcJDWaHkyQpXaskudUqJxMeRtVH45zMeRb8LUC7SSmgshACoK",
  "key22": "2GympJkwXAJyvBYQdcJcSCTKwig7N8VDos5VojxVdmpakHMrdXNXNoYzPUBYM9fDixekrjd79gZqv5ikMF97tdmP",
  "key23": "4Zkp8SoU1CN7J63apCcX3G6zwVc7zJUikAcxhkBGxnAq2qkjQHGkCrSGDzZzGjMLaTV4d21rA1krMcqTi2z3c1Lw",
  "key24": "pLvkqhS1Rw2z5YRLBxGRutYDor12DUABLjUMHF8VFYnAvjyoLUUVFDZU19ZDYvekGcVUzaS5gMMQBAo1SCeBXh4",
  "key25": "4WxWcWM5RCMtDAJPdMATnbAYfxbA6zDLUNbZFPTnmNxEDiGQnLz6vXpggsTEpWZssshs4VZGUct7tmxF1mkjNV1y",
  "key26": "kud8WneWJfVvBbyAp1Gc8Hs2vwFXAR267AnVMfQxwUbHwRE2bSKYjcWhMB36bYA2i5ic8AcnGwtHJhUEfSpYMe2",
  "key27": "2rhwRWm71ERLeNXuFzbDicGnnxo2sf2cFk2L3ukWMtc3ovigRyuqpyLFnuBDpz4W8s6vxaeYJTJZ3CombMGch7Dg",
  "key28": "5pUndG3e2irUfwunuegtArURHZsRJzpn5PaQftCrPYpsMPxnsg2gT8F7qA2tnbbaX7gVZfbSumiYwGmUnpyxM55J",
  "key29": "39u6pSgZnU8CX7abTWUeAJriB8R7isP4pgkPpwPhtoucmZjpynBzCBBydAqMF9BfWVnNb8zd9XZiNKNKBFNUXUAJ",
  "key30": "2kTZEpd13zraUQ3Rgm6cjMGVXUpf3B8gdRtxGjSC2cNUGaMaLJTabLzLLTFifm3CBHv2RiY74jugnTTdm5RrwXt4",
  "key31": "23kfFX5Wi2ekLCwVWU2N4gwo2X2tx6etQYSUXyP3VVd7dguuAwLQXNoLzpEkHKTf6zFq9SGHqvZwzgZ5i2aKW3gm",
  "key32": "2WnyGcmC1gGsni3GYCZo58sou9PCkY9tnF3nrBZzZHBZkKd24SBrNEG4q3f5EKE5Mi8u3LHi4W72G1mohqRYVfv7",
  "key33": "51CgRvX5apxXZtBriuNbc5DhWhLtTSo3xJygvVyWcGsmGrQcHD7R194EnnPYC5PsmVr2q4zgfa9voM1E1K4Kbxse"
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
