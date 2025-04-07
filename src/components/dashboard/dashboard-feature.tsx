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
    "4iQFLTiTvmyRdcJNfDrfGzGyk12HZMjQDnHUDdRyzBhpvFCCS83H9KeGen7iqHxKtomNuX6RQn47X3uAj2BKp3qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkdaaC2ZLTwYtDf3ZS84coEZKmAJBi7hKhpQ6DyNmywCYybs2LkLiZvBpWMee8R3n14tRjpZiZjusTkxiPdbn9t",
  "key1": "3mpt2i6bn2o83kzLyzjw4HyoFBwzU8U26LfBmRBDHpfiEg8kbfkpgGK4dm9efa54s71FDxTLFS5UhoEX8bbsJnFd",
  "key2": "3trHKAzXdDUQNoZ2mYkSUEPKky8gDJYBDQHaAW4jr5Cqr6fjfn4vBzAfGEFaKZr3wkCAUCa73remvG47BTq81R9W",
  "key3": "5YqFsNbY3opmBNzUHgjyp2qj5EFuh2zriM4QVWstbiYQgR88pPnXAfxJGcMrdqSiWPcAMmPVPMsvmo6PzF795X3V",
  "key4": "3JiLT4yPFaBHJX6JLu4FQrWuKzvCiFN7buKZcmEDBayWTry8o1PXYYFCifcs3zcDMDkbuEKUJbtDUULtB8HotJVz",
  "key5": "kPQiBBYxNX2hAXTCarSPykijidETWw3fbJ6bJGvuATsxAXBM32yJz7uBA3RMKHPRf2RiXmrGFW6yCAqbhB1tBmM",
  "key6": "2yBPXwoKYfM9AV74YesvcFb7DmNzZP8hkWc4TpCF8JMgAZNqe9SQPcw2L6P1NNAKazBUCgU5jhSEDsMizX9jmL2E",
  "key7": "4qCA2XTDZoAm8Q8Le9dTDtiXsCA6L4AP9KuRdcXivcFaSw6ip7ji8aYJCrQgcVHyeoFyvfQfbosCQHNdGMp1nuqD",
  "key8": "2aAVjDtBpjhtH3PdG6ugP94cTndg2JNwhawprA851xGVYsWqZzEmi5V8TeV2rVzqPJQWHjcDAAvDHiZp7YmYpGbm",
  "key9": "46RruYP7PMKpJkzeriXWsbdBEHVRUB369m4MXfNzMpDtScTexyygPeTWfM8wiVbUNq8mtjLNLXXjr7waFmpFt8jD",
  "key10": "4WetZBbWEBgH1bbrNLhn2xrMnA1YdZSYC45azbYAohooBDKkEooWh6aMjZBRVHq2YhtRtf2wiEswPiCa3TRd7vtZ",
  "key11": "9uJLMykcu8x1KWsYGk6TXAjaRxMq7z8rLYGJLGzVdxWtYUxF7jYNtvYPWgS46YzYcSWiZVo13H6hMFwWzneFtmV",
  "key12": "5oWotn67pHNTBJf1bCt6QNM46Zp9yF5kC46EyMsbtZXwPpXM1RB86uZChrMJB6S2LPzqVpyF2o21HBBLAPXFMiu7",
  "key13": "ecDRrfakyWCp1n5jiHf9XMM83AKDHhwGDjYNNMA9t9V118LvTAp6fbc1DKiLgYLGUp7eZywr9XArDA4z99USQHV",
  "key14": "2NUb2SP1hniEQ9R1Dgu5Ly28FVomT5vLbJ6HhUkwcpGNyq4mqFWLm5R74NbtxxczMYxSrK4SqD9nfTzd12frTzp4",
  "key15": "4ZMAfBcZmK6tceLgKCsN1Wr5JzARQZaLriBu5GGCU9YfKvPSH724vPU2wRD1A14y8oGcTHrvA1WZmiZrPRZVtpWm",
  "key16": "4VHVoa9tLRsergJLEAxgAMpWQYzSXohs3oBHihspwBxmfRJm6duDczjBSwm8Gy9hdp3zVnHip9iEcjLDmXKzZuXS",
  "key17": "3yT6pm1UeZ2mmRc13jSoUs6sHcZE2p58qmcjWCYdmc56qahZ19iyYsANuknKbT9btyNkecrwt5t3r8wP7iR5Fn9w",
  "key18": "4GzxANyaS5gjNF1zpFS82cTX7RPVoMPGvscjHhyvSAK2SQ1W4AuW88xfpsGsRCTJ4pYAz6wPnZsEb5549Pqob38g",
  "key19": "4VcgWvo1FsyHccR3Qh1rCb55jmKJohCdbhZCLrypoeF97p8urw5uTA7jiBkVRL45W6eVSdVme5y5XwmjBuqXEBaa",
  "key20": "EwWfxnqMX9HieChnJissS3mqwzPJy7k7BdENxoiSL3RL3Z7kxDV8W8GLR56YphKEEXUyRmrvHLBe2gUgpTA39oN",
  "key21": "2wxH3uq4RQyKDdvTCuSAkJcHrp5zRNm78dTps2bsNTwuNghpwyxcTNjtrq4BXQjYRpAtmMGuepMyahdRk78s9ERh",
  "key22": "3LZ9h8NLoDLzukrMQ1i8Trpj2pgdvAeWLXWPYxacGv2ciom9JzQcJ3cy7ntgPsyDdxaT9bVuWbYFRgCX15k5gAcX",
  "key23": "2oSMWG7gYRUgksCSf48GYJAeoKXCMVsHpAnGZCQoL5KvWFE3gp719ALBm8HXS9ZsS8X32pj9moGFV1Lnvuzrifqk",
  "key24": "5cdmBq5b4DXcFSuxsYANqUeiXE4vf64FUm1w5fBd2mjFQWaf6X1p9Zns3NagbQFjK14cw2mZP6HNyJro3gsp9VJu",
  "key25": "WuvAZjqvx5Xq8LyGvLG8b8LjgJGrCUL5wu7wBAAKkwtEnKh417ajNTouidFNCemcQgHz8mj2sD8om7Myjdsgu5h",
  "key26": "QD1Cs2MemrgxwjcsaA4o2FSEyHLS7j1YuxBjMpy3ieAM9MYzH5txdDpaYFZqWDPV7zRGpGTBLDZ1ZfrfepctuVP",
  "key27": "4kmG4n9YpHVzoXrGCzcCZpDvZuwMcvr7Fsv1ouPtM8y5N2sjWakj5t7xCKxchcncMnGyyNiDvTfwpYhqfM1vERRp",
  "key28": "2NdjPk9FipUCtJedBuH5p9YYQ12tqi6PYMirzFzp4P32Px3JjZ96hnKSxMU9VVApmzLM3pct1RJsFNbBS9GY2ioz",
  "key29": "5rNwnL99YQdzGCnwW883CYjBcPAZaPHNTLDbUCoA5Eys8yPJFdUFoUNQyjgThPRdwLA4uWAQADm8UvmMyYQMP3c3",
  "key30": "2gTNW5dyXTXQyZ7gSYheGsX6L4AGpo2DTpi9hirZjvxMhqWnAje3Yu6VpcqhGTNocpahE6SxM9fJyENPha18FcPZ",
  "key31": "5yuyJRytR3xMgqTfRuD9YpnSe8MKubHfaewgwnDrrUK3ZF8TBn9XKQhb3rPjH6W56FQaccKLzoDqb9EzgtwEmuwk",
  "key32": "4HDEZdcguYVQt62hPUa2LDYKofP8QnBo9b6pn2JzfHHvLqEZQDnLVGKURcJYDf7kMRrrJWEa3Mt64hD1AjZ5V2ou",
  "key33": "3UviTwLKxyDrQyQv5ZzBzSxxUsBUbUYzv9fstZm14T8oetbdPouMXHwVbQgjj3ZC91fM3DKq13X9CSsQLJdANJh3",
  "key34": "2u8Ww273dR5McM9XxunxgV1xM5k4ruuPRavGvPEtQ4xYcHPj4N6cCTVSF2Q55dNe2yznjZzG3jLrvCqpVfDp8CQ9",
  "key35": "4BZUpfLbEq9GdVVKQCHNqTueV1t7dhhaJ1MKLJdsnwX5SinS3H5tf7zisL5Ud4aCtdufcaarjaM8PH58PVdyRnKv",
  "key36": "3BVfVHGUVRXcW4V4hWrar8JmCs16ofJdaV9SstYtPyBR4kdF2fKdn8PsKmVaBA2TYUF3w8wEjDH3SX4i3sH59EmD",
  "key37": "2EZARKxWayj1FbCJKSipfyLenV6U1NCUzXwbwB4Mzomk9ea6eK5V5eFdSBcsa1zy7ys2EKx4GXdAoThuFwviVaUM",
  "key38": "4j1zYFq8eHGDfCc4oLiw1jhGznAuLvSr5wo3NJaFYgmEXWqbtqd5Qsh3Yf3U6qFhpvWCFN1CcDPACTMTTo1KrNcx",
  "key39": "2xiutKh7BiVni3Yxh57vEnXL5fcXWZd1ZDnawdfEQSZ2XJxdLbSLNqvKyfiENFjq4cdUyX3T9Py7Yk44U1FPmpFQ",
  "key40": "2YLj3QXGdvX6GVHPtU1cTZcvLxf6fXa7XS55NoFdEcakoWUH2op4cgvZwTtmnDyPaUVd4mY2J3jLbuUvBwzGLZrX",
  "key41": "4yRLASdRiEgd1u8YQANVmi3vFH112BUf9NvtoDYF3XRhkFxoYKNuG2wAWgVbHGYJjxLpw3Xy9YgxQYmy9esSPtHR",
  "key42": "3n82NshmwnpFVy6c1ZKSVXrk97ak26fqHE3U5hdhDF8Z34jXHj9o7PSXjss4Maj3exgjxv7LFjY2YJsTYtqNvoV5",
  "key43": "d1sEW4qM3KmQJnrpK32fwphcMgYo4hFgP8mP1R7BHP1bfoSt75E1TnaqjbHC9hN6oLrhkp2SkpW6kXx1UvmbPWD",
  "key44": "4psao4rsP5GnAbr26ehKYUJriCmwvYPD579TrpLTRs9qWL6AVSAsmEyn4Hm6qRonRrksCpuTGAjctvYQZoAPvYWJ",
  "key45": "65HDr9CdJtV6zgbDhbATPUTa23v8SAxDhideaTBJQ277sZx184DfQbAYwk36k2P9zhv5aBguuZHZGQBnWLw94bUF",
  "key46": "5ZPEsBjnBZjGnHw19CoYkuFyHbbTLin7eEinicE833uznDoa13VF2knFTidxJ9Sn5yhs9aCxCkcESHCTQN1jRaso",
  "key47": "5e5cDvgT5NjbwrsCuy71fX2Te3RvbpmgJc6kYVoWBC1vEzLYPsuneG8tMJdG2XiJtnf3NzvagBiMTYHD9WKnRY98",
  "key48": "wfGZ2WFY1CatDPqrm7EKBuDpoBtCiA3zaUpsK9cwnhWzYZp494Fd9tMTXK6nD4AWmq3qohDhdPQTehqFHc5ssHu"
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
