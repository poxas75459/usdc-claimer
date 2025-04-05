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
    "4eZ7r8hRAo9ZKxTnSSTqXz8YG6ffV65Q2jsKT8qD57XDhWqmtWoXc3d7214C969ZDnHj17Uu7MwwuEmgc1xHDgVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMwuSFCBUzWUz8VcFWYZNXWtJbXNnrRSzPyV9bWTvxXyDk8e6QAGfCN9qyyi9dwoSug1Pz667T21xWV27c9d1eq",
  "key1": "Md1XDiPkcqZK9T5CKNfzarURHYrtecSBNpAdasB4HphRQJbQAELJc6MAReQVhKsxECcC7QwwR3uNeXvL5tWaYUz",
  "key2": "3cnTAS8L3QGfo7T8rLu3pDSyD7x5WzYAbzyjW2t27FGf7BziAbkQQXpMi4gFdUgUB1RjPnPnfeRaCxAEm8CDc3mA",
  "key3": "4ZYibnGDyNLaaczcJFzsqia3umEXcoCEBMiHTdajSS63sh6UbPXMgptN1fBf7du7UJombDGsDTrt82b2xdC27pBM",
  "key4": "5CvUA413VSW85qAnKwUU1hEK6hKVncr64UhZfQsHfzHDnwEsnF3BGisSqT8hvtNM2Yx1VuJp6uktMNvz4QcLDgW5",
  "key5": "5fZFy7x6anJQYm6ByebDPAJmMLsjUjqAekreDkUVgMfL5Fh3bPKvRXD3ybLMfrSG1NxzAHJK7jw1Hk1MqFFBFzVj",
  "key6": "49wvKRr1j6ypWtf86Fp3qyp1WHDCCvSqwFVJD4gTzPFLmB72yb7f4tKaiKeKN5akktwpkFCczSGLzq8TkUUmcfdV",
  "key7": "3p2EghWjAZwPd3a3Eux5zHFfWCEPnBT5q2gMWSS9dNdks36TiaBoE2Ki7w456Rqx3XveMJvAhe4QUKKeW7NAWFpd",
  "key8": "5XYLmnJykmaUr9TH5mytyR91ZBoCWivGbhHkT9bSA4fcLut1iumiyTyythgB9wrZ2WPVYEExVBgmYA5ZaisU2aW",
  "key9": "2z6iyt2azfSrZRJK8ffNo74BTAeKP6iYC2G4iho5m5pPdnkLVQa2DisxdHq7mv4LvriuYxxZyh1LsAsKZFtfjNVk",
  "key10": "41YhxJ7BY2nCXmYRZh2RNp8nHzMm3GAAn7wsgvJRZMNVLh5x4wMwWpU8UHL3dfDVn7bwgXJmqf74LLAFhwbbLS79",
  "key11": "2magf5RRfe2wL3nAtVUeTL2VXp7A7ofGQQd4ZUggZU3g3spfBmkKTadDCK4D1VgtjLnUuaix2djpj6WLfjqKiB8e",
  "key12": "5WMK1drh538FwxogCD9RFynD4rK4RfcVHBMMbedt9Gam2C9ifQYoYmwcNWG9FReyTdFmrstturheXzXEJSTuf7o8",
  "key13": "HAr5pYFHoJEYwbT35kqf7D3ARm9J82ZM1DQpJ62LnZpWUS6AvNBvyfuxfYcMDEPN65a2SaXWucXbCpMTB23Feu8",
  "key14": "2Ci3qY7F4aFiwMf55LeKYS88sBoqCQCi9X477Yg2EJvKMEMQGmEEoeLfJiSqftRWFv4MQj9tfgeASvSTZ2A2Qa4x",
  "key15": "BvmEwpZy13Q9qK3kbQxMiZ2nLKMAdDHR5aR5tUnAawAyfyQYhUu3UFtudbfbDH2JT5kYpqf6wHYu5juJs2GUMm6",
  "key16": "aEDLpqUALLjcT5mZrMscdJUNueVgbSHnGGrnz8NpQtBeMfEp4wUYoCNN52fLRrewuhYSH6xFCprnfH9Zov8TRcP",
  "key17": "4eqgKy1GSWGEAWnSUAtaM84SgTT7CXX8JPcxgNe2GLESmTPLNGQ8i815JGQYjZxUYFYugF3AmVqiymfKUDFUrciN",
  "key18": "Ecy1jCPdZT1XQs2Ruw4wfr77Rzuu8WyqSe5PH5pj8k46EZZBEehie4phXQTvxSjMK1EjPwm4mgZobMed4TGmcfH",
  "key19": "4iDs24JJnsCGV1vKkfyitsnB23ESC2GidbsBQwzwBYAVZaA2WRdFcFNjBedZQvP6qp2eLWWgCv138PRrSzvK1UJL",
  "key20": "4pyJ7SPB5AhwP7xg9oh2nScvXNVusmY8QrqXMQCXniP7dejH4RUtZaTUzjHdkTU3Khe9YGuMVi55ykzaWKvWZH5Q",
  "key21": "LSQH3U4B4hnHbBJi986cCPYBu7B1UJHY5mYWF4mbVauyx9iXk85DHME6UJC6VUXwpr5f6XworrbeKSUuiRCdhma",
  "key22": "43U8uc7wEWaFbHN89WLSvDVDdkWxB9Vt34vYZEqy3Sot8ZTgP1jgUpjf5b7fCjc9x797mQr8Mpw2qgf6LZ8mcsxZ",
  "key23": "2cRXChAgc29Xnb7VwLvjEKGUJxG2ob4q29gz6rDWdn7u4GNcY3KopHtvpcqHpb6enJuCUYTyBVuVV4UPadN7BFL3",
  "key24": "38tXjaRbXC1FhAcrWhbMjpAsHZsLeHoicQaxw8xbocb9QUCLHGqRs411AUrtmBf9SCKPv7kicA347yzL3vy17rpz",
  "key25": "WaArqvLepWqzEkjpPhvCCN7TEVt9KfPejGg4ak2NsaX8voFWaLoqsQ7189azSMmfZBT17XDdt4eLnCU8dMjM6An",
  "key26": "2MDnm55nEHrDtmYBY1YafBtVtTdZVtui34vEEzFF8FoPs3ZosGHT9PFcG54heDddP2owZfRLsZwM1LSX1NvtdugZ",
  "key27": "2PsafwsEuq2XT7SS8YRcZEyDvuc99g1ZC4vruFuWaUhrDW7wzKPDuMeKKYThgrGuP9D2vFXKAbLmFEqgY8xKS2kx",
  "key28": "2P3RcQrUid5hAHvLR2W1tuV1oizRZ3jeA79AvGFJpGmyzZKbQmTc2kErt1qoS5KTEgYjDkJrDmo4QfoCzLX23Zmu",
  "key29": "2Rndn36bKHwVTyfwUuNWGYNAm46YivakB6WLbzkkabXJAx4U9afQgTyMWhZ5TUZjTTYBtdTPqpgZ3Y1bhZQJcgB",
  "key30": "3amvhgaiS5oPC7B8M6TQyhBdVfjVY1NfUtDc9U7TNSJs8Y3n3StjxWLb63xrXETCTfjc9A2zrQ9esi6Z7SdesPp4",
  "key31": "51kKB44puXFJ2UAjne3yEBdz67uwe4G28T86bcoHpLWFv4b6FdAJ8pKswxNjS5xgcS48zUVoVKeZUhmq4gjdLFyH",
  "key32": "5Bw6hjf87t3dJPiz7jnpuSkT7b5gFdy8RpeDTaVszU6kyBTzze8o6Br6PmDPQ5RuABUdVjKdzX8gRmC5qkxRGzsN",
  "key33": "ADDJ6AcW2meDbUxeSffEWWa2rnhMLYowe3LDd1u36QXQ41t6PiDQMhAEVxcu5msRE91KjRgqGkLra14V97pPNY5",
  "key34": "38vQegTbbNQ8Vu4zzpXUHZmVFhKBayULhzQWPkQo3TaNuXgDHQNDHWEiziHurHBRhYTDTTZ8XV5zDHaWiur3c5RZ",
  "key35": "4mp8rtYos2MPqsKyg7mbUnXy4m13E5XD6K4VimyoByog5hD5nVEZEg9TetUbaMBRaAWasYJt3SSfngVmW6urLBH1",
  "key36": "54EnkucG22rNd4MnDRagL6Gwa9krfepdzWYELk4AnrZU9ARrTkykUTrLnLKiWy4HCPFN8xbcRSXeRqrwDrcBtoqd",
  "key37": "2tfttYJEAqNKEA4r7VQdZP81hPrcfmdRvu8fGxS722Xh7ERwCbsuLn32TDhsr8QBxRTdjLHWecCpBESqm4mAFSgU",
  "key38": "5RAchTAv8PJ5hm7WwQGfbsvtLCJ8EjcpXhQazHdcDnLbEySxYxNekpn4FiF78xgL86eASer8fcccwmSZ1oCBd85X",
  "key39": "hfnAVuqo5M25XEsmgSbqq8Ncp86MuY555VwZyJ5Ld53QHAkGeegDXkFLsrCeJxgjFqsPKKZxwpSTX3GfZJT54Nw",
  "key40": "3WqjAJro1XANcG8ev7FcD5TYgLRrssS1yTKQG5qFSSwDoUXBpSBFYrxapZH7Jd9uxdQrX4emzDtD8oxZTSQPscgL",
  "key41": "H5FXNLEtfCCaZui72YQewTTQNXUzZCiYAGB5H8zp3ADyeY2daMr1sY1N6r9aR4S54aGTVE4fsZPY6BA9LRgapeq",
  "key42": "42AAkTajJdQgSnZRuFZpcbBftBHhgnggpryTDB1RKPD834BSZqow2hBWT8nq4v4EyaHmc3NVjmxCFLazXF57QSDG",
  "key43": "2xHsn1uGG8PaY3BjChJQi57E7VMifzmXDXB7sfsHvr4ax2sFdRzf6aSvYpe71UsF39VXiJgGeEN5SQ1aiCsLfaJG",
  "key44": "2KaaGqR8RPtiFPuhMaRDuYDQhLBxZYf9M5irF87UgMywP7dEZmEi69LVqd7eRbyg46CnzcMoiVn3PNzTGTo7FPVN",
  "key45": "4QqSX8yMuZyTMBqsrZ4davAGceYKQcNxuXwXTUY2vSSRNp9851CompLC3trKmSm53SMAyGYb8nQvgWsst8RbDXi6",
  "key46": "3neRgJiNesD8X9XyfrXtHd6p3byadVAJGR2sgaDXkXaFmJuvhNyhFis2V1oSn9FVsAgQgh5Qdmeniu1beZMjs9wL",
  "key47": "5t77XrrCkP9xfhbDXchyMLvz9Pq5yzEwNJj3ASuroxwoZAx4b4H5zz2AnNdtj8g1ia87enZotNsVqYXZacskj31n",
  "key48": "2KtM26XWQ1JhY6LbHbCbQnTorqSqHUHbqJnayvgBu8mGL2MQ2RWBG4Ze5LwD39UiVi4xWDVW5Fg3oFvKb9ctRTQ",
  "key49": "4GKngSRsavy88PbAYWSL4QWekucaTUayvEqhmVTNqXQfhZSdmFKKNHz4ns3SDEgjpD4xVVcauZTe3gyxX8gxKDHz"
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
