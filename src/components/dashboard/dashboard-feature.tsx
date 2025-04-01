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
    "4dojEreFEHTYmHS26qRoMA3vcqMJnvcVS6SGnoX1xLmUxtFwn616d1w59gaUNtBe83SGbSxcy354JddVxvwbtmP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhbkdFvrdpvBGEPSUxhyzLK25iC6GoXQAz2sACoAARjm2KGCv1vNoF4jFKczfBiJa2aHf3EGSFna2Mm6sBCEdfd",
  "key1": "5H6V9HFK5vQwkJy3qeaKe2TrqAajEmmhzvaaABRLU8KjEzCaBvHKuxZ1wsiMq3WZKmXEa887fjS3rTMYL4G6sKfN",
  "key2": "CfEy6CwdcgQ2Bh1dLKnjwNRbufRrqxeQ3dNVADmP9vcedRasqbSyv9axpvAKrJrrjuyY2d8ACnjQAaeyK41Bthq",
  "key3": "42Jbobqgk8pEx9AdHBvJHvNfgdvXpwBQsJojjwaCA1ovsfCbRQJRpeuYknkBa3Y8t5ZhuioN3TzUonWeeU5Foamn",
  "key4": "4tykNSBK9fgJxbhGc81oPzUzx6FTPZ8qRCLZUwxn1cLMPKYLX1DzdwakVprDVe2aMPi5hrj3nBxgYTTtGk3xzN45",
  "key5": "4cReJCuBbKKnFJnkE2K5xCHhMXAUHdNgei4UsTzCTqAW8mbcuTdovWRTJkTF3kGcb5m4ZwitpV74AYXENVLw528T",
  "key6": "4SqcTwZAkMncEjCDMuYgBSDkTptFdUHA87cTZVDhepJwa4QFR2NNzqN3KysEPPkTgj6TNN6yDEjocdC9zBYo3xd2",
  "key7": "5e8S9mHFbm4xiq7qDsrNm79vZwFw1p3ZKJXpg5v3jtEcD6S8vU6aGbLwsEmysD5Arf4ncmvwCBh4YJLjk5Sw5kFT",
  "key8": "4J8LmeUPxYTXq4VhdPxQfja6vGJAZeaUGACXijtUNpCcDkEDVmeMjviwFJp45psfrvAZg7y3T9MCouKTaSRp352s",
  "key9": "Co2MEaQ2KzWtsk1svCkjRTbELRHrCsfYAUQPXGou2hmTcfo3yaoZne9Jmb1e31d3wFtAZuF7tQUB9GxXHPNyZue",
  "key10": "5j7AcukGaAqk4W5vfMS5boUyes1gAinKVZbsho772SrFYqS4LDh4uMDgrTG6q2z5sQ18g3e1iJZbqDHDTe4Bj4z9",
  "key11": "2DjNZCkUYqA4d6YNr6R4GWMt9Uq6AN39QKYY4iVJb4iCPGgThCFptsWKrSqe5dFr45sZXR2AkECnVi9aj4KiS1b5",
  "key12": "5WVDBbvr2a6GQgKvQTiVwnPWcsvLyKfP7JLDniGiP1HxuwaTJvUf3Tu2AwzewGLCqPWLKu8SDPi667WyXeUPdpBq",
  "key13": "5ksPhiEvzWRk14XvCdP6ofkrYC9JAysjCuaty1xmm4iyummVGVvLjzPGPiSMgoR7JwNZAE5jnyTcoyfCVedPfU2y",
  "key14": "46EiRAEVLA97M8vdgDPWv9a4UjWvmdfiv2EEd9mMPN4VMVWvzExPP3Tc2mQ2QNBN1mEXbi7ZiUqK45QdVV5ctEwx",
  "key15": "4QUsjZEVxsHsT23SMX3y4Vh64r2FgqgZpCGCeyoJ9BbCCgHyjadYbCUJYxM8jt597MqFAuXmNDTidU5y7P9u1BrJ",
  "key16": "UWAajLYyDoT3UHRZ2q1VScXAGnWrJ1bozr8SnyFRMUPs2MduW6NvfyQurojn7hKA39Ep3DgjrojifaZ45NxxpNM",
  "key17": "QNtkaomTn7RYnt5aGsuymdMp9u5Fvzb96c699T4fXB3pWeYuX39FF2VGgVgHZybq1uvV7rEyKSDP1GYPuDBeNzo",
  "key18": "4HBkxQHFRrLwCm8bBFQiLaaSYQdjhMAEBhaRAtuApxdtoA93DUvyPNatS36MRoqz9YvFwxpQwEnagRD5iEPva6gm",
  "key19": "5CVZfPidBhEYcfQrB778x5qYKMgxZeNBuWZ1yG8hqoG8R2tXxzzkFGDLgorvpGgmsHnbeXKBnS6beeKDsy9c5tNf",
  "key20": "64oUx1nzo8f4RezjyQAjUAWNAA1fBYA12PsC3VdcUrE8ZuvGaVppdRDD5UyTN5ApwnRubzGs73PzKpWDgq8C6zoZ",
  "key21": "5mimF38T4vJYV4rU6DiNbH7m1xDAJtQjGYPr5PZc3bxr3PtycetLJ9SJfTXWUwr8rbbS3aaJrxuQnzoa1WaAHGAs",
  "key22": "2M7ogPAJqhxfhbSCqSB6HYX4TJdXZ6GVZ5gjXyWz7Ea4htFFRWpzoCJmDKMCufXcArF3Zw5S17he5zuoGY5nKeL7",
  "key23": "62fxpbNoscoFHActbaPH2Dd1YfeLg9RM7e5tArVZUd3eETtL4XshabmAfTr3w8WSUQFHsC4ffRGoekY1Be1HNLX9",
  "key24": "2v3kNkYwY3tSF2fATEpfiLmp635Z4rHYX68zv41frrbtEBDKGXqrCqnNyWR5uhBg7Xd7q3sZk4sTiWXphY6DPFcA",
  "key25": "62w6PfAdpsGB4VFx1mWLkxsA7GpYJ8dZrh2b39xAbuAQRrZMNxy3YGeVPtyEjPN3kRoVycGKdBf6V2wFM47BBWv",
  "key26": "37qXSMifszFLF6rVAUeVvNdvMPipuDqYUuryUcW4qARjbjFJ46bt6V5VuTcUprdQSM9C6RH7bs1Hv3jEogLF2PTS",
  "key27": "DA9B38hdUfYSkRbTn4Db8ZPnURYSQzZaJHBuS9Rmu4J2yzMg2hMqHsXfiezm7MyC5hjjDT4EbnTas4XFLFN4k4y",
  "key28": "5pG9d1Fcin7YHUnJu1zqtQfPUm4Thrtmg3oF41s2edK9fD1aubuagnFUhabzt17PqCKAfXv3eaov6AgR5NGMnEJV",
  "key29": "5V9GnDx7AeYKaE9iTg9zrrVVUfvj1aiD2tfejFkWTVWxgVGfctxSWTMGgbhaaKu7p51J62DnXgkGuUGx6TL6bFXJ",
  "key30": "4cE3Dv7kFPZarQQukS1CiXaBuU98weCZcubEpdhdsve59NzfQL7vxeLmAj4ck4afSVzYqidLNoryFJCPPKUbdAdt",
  "key31": "3N1yjnJXh2M5UCVv4K8wMAPkyFUAgupi3DbHEeXjcdMQCwiu5L85g8uLipNrRpEaGzm79xngGXwFhiXEMZmWQSTr",
  "key32": "35JwgxKESynAJ3iRsYGL1ia7kHJ1bSFXUDEXLyCXatSziwTQWowfSXcaD8SjoYNPcn9A9gXS35e1DcDjFmnGpAb6",
  "key33": "oSxt8s6Njyt55JphpjLEPrb5bMeqskgK2GzQwuwHTQig1kDQemHy6scDf9k63rXdeeLUJZMhBRaNXwiyy1nHfTq",
  "key34": "4LjUrZqupWjUjLnFNpMsETc8R7qhXooK3w7ubZ6FivXSkwfE9yEzv4rKqXCkJVzXhPtLWSXJYQbbWFjLtAFX9yp9",
  "key35": "2Xyaz1ma8UVkBHt5WriBdKJPtyrjSCPzoxmbfseNHLSX4d34kqAqBDSbVLRYdUFk89CXKbPHqQSLbQaxh4DrVqMM",
  "key36": "62nQWdFKeKiRGnBWice8VpAuigCAha1u1ZpsZDhCnEXNqWcLgkrdnFtZetXAjWkbMg9xHzSvj22HKYjKV7dsaHqt",
  "key37": "5Pz384gckP86YegMYPDVgUGTfZ2BYMQgKgHr4kuXVXJepQpcqoUGDMBJpk3BaTGysRMiMUJ8rN9iv6GKM24F518F",
  "key38": "2kfRsm1aTwZd6faFmTAFsufwHRnKBvBRU8VqjcLQ6uNFi1kuLCZdmquYo4HZQJozRhvPtLYAwdnqm9CYV8Qbjusi",
  "key39": "5A66Y6Ui9ULiraJ3zwSUdVviG7jKJsFbYpxSJ2bGfxtH4Lt4vmpc4tzKT9XpSnKYijAJVv4h7CyHBjd57Pwp1tSY",
  "key40": "oTzNZGTWLAmQEMupxqyAhvHqFtZyrVw9RFJdUT593XZSu8Zq9coC5u7QVy2ZfKmSpH924NNXd6443hCZZpQhEP9"
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
