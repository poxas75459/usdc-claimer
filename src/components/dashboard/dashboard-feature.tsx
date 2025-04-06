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
    "5xwz27bx5PvRptdzxn8mMRdEbCwCFRpRfu4eQHncUbGrvBRUSeaUmscMfN3YzfNuQfJ7BTS5ctExdGtygX8yjBSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WVy8Y2fkq9pysN4ymwwn8iCbYD7cGvAckQ9WiBHXKYMF1bnRY58j1hG4sYUvDxnCLaALNjaiT6FfimcQSVuSabR",
  "key1": "2Fu3o3wZRXCxsjdj8KWktC1akkXSUKYmLKPmkcG1TxqMd3wbcTcCJC73xh5EFfW1vY9jC82ncs7JiJCXQRm6az3T",
  "key2": "65TZwMYXKPSLzmeo9RK6XagMhyLuMxtjYjmUsbTVvpjDJoNigNP26UX8XQ23U1mSUqJBRYc6ATsjsDaVxizr6x5s",
  "key3": "4Mej8AFM8BCTqT7cBCoCzubFuBJg8ShcgurWg11w4vWEQPUPdyf4zr2eoJ2BHLFPQSk3UdVnHS1Xj2qnse8xcaLZ",
  "key4": "eAkut4G5ZSpaaHUVfnDqVPpXRGuazEYBtz2zEP18WmkTU9t9LDLAn62sw3cP6WFcTTQueWcfQMRrRYmjGZ5uxHv",
  "key5": "4DxCHF8U9HXxZXVe4n6bE1WvkH2Rf7nYrtjyuwLn52CzAwAMmDwP6PoS7KpVXAkV936nzA8AJUsbhFwLL5yhQFiv",
  "key6": "2ZEgDQpjt4MsgfaoVLfaZsCvEczhuuGyxykwncF8jbLKBjwyGhdct3d59tJVbqbhJs1Pn59js5DKp78pjZxKKMMs",
  "key7": "AwzwsJ7wvMsWJ3VYRVHkbmKZqgZ6685erWRbgphmGe8PxMB6Nep6WSSbnrmDRj6HZF8LVsPyBMdLjCiRBn3x7LK",
  "key8": "5zX83c4SMRURH9zkCKx8wgz4YmcbhFEbs58hKjpfvcgP3HXWfZ47LXaANaZcmeH3bxVR3uhdo6MWTbzoUW2J94ST",
  "key9": "64tcsz6yBB6on7MJLeHkCFJg3kjwGFLgCxHqRH2jCk8UvwvYWyp32vkyt8rhfbBgsLMdRJzS1UHJE145SvScd8Vd",
  "key10": "4r7G3WFdg77JafzaqYSKfbJBt1CH5KhLLhfWkS2Md3LKtfU57nXnaYjkJ1rjvgGwNoeZFosADmnb3kDxmVbTVThT",
  "key11": "2VC6Y1AyYMXZxT5a5p6upTQRaAZwijExi3mbJaBoAwnLNfMPVNShm8J9uh8EJYBKcixnKdSLx26FN72r1txLogro",
  "key12": "222C7bU44VcFKWunD61bvnM1Y2ZnUgh43r6Ai6tKW2PuznhA1vwhE82mivbyr3Te66pJURMsisEDc3z8TYiWyiTF",
  "key13": "26ZRpTRCkLinU1yRWZMYBi3sGm913UZD1rzh1vbxrLgtmhXjqgAhvJ7TdP15P3MDqwCV89HBaFT1PYMx1TnHfoeh",
  "key14": "4pL2ZdEtfuj2GrdhV6xPxcHGBSY1Ah3TMWe4GKeN6V8umdH3Dz4iZmZSSJbGBdqNrurk6P1FKmR5o31h1RZNxVEd",
  "key15": "3pAZoc9r6AkmVEAtdKRZ2bFweEbj96kRqFPxWPv3VWTR9rryZqyba1SThhEudVGebfu1HLqYxykNdN3ycaNcZrBT",
  "key16": "4ojZG5SRfsjQxeW4CtFuk5crPJDKs6rt6hrQfriFNbzLUMhNX6XywtS13ctk73Wbr7qNSxfSd22bpwynQN7DN6SN",
  "key17": "5KvobeeDEcNerzg43iYf6Pb4FegWBbFzRx6nQ3NcXtFcERBVftaoc3a2TAF7svMimj27habF2i3Jasq88WwKKwSG",
  "key18": "3uQvVqK7jXGvvjPxKaqmgCHp1SvzszndzLKaqN7xZNREFUrhd7wp5FGTMiV3xxSuGPdx53UgKf7skgZ4mS9SXo4W",
  "key19": "UsiUtUo99pLYmBajLJFznA4nPd9p3GDe2j7pwARkT65gVRX4dk51SuyznBMicUkwVZ5HpviMBgegSEyN85zRWbU",
  "key20": "5RdSVbe5bDPAUgXgd2BfTTUAfaLKrFVkzZYCWPB2EezfXgdgws1oqc9qHAosL1gTS475RNeoXFGDHBG9ujz9R53Y",
  "key21": "4eGiz3t4nznZcJeeekUsb9MzQBCvPjwyYr51SaFb9T6YBWfK8TCngd4kPcuKk9TcqrNACknHMAXx4Vw3tSGSLFuE",
  "key22": "3X7bg5DSYZBm57pyBGmaxv4Ctn1uquvVnmR94UZZt2U9tfRKsznZCiswvCdaD2SpUFiqqFKFmrPibvVrKPxuMaTd",
  "key23": "2yXjowJ9snhpjaswLPU9mhj7wMvMrMuFdqhfPgi6zt5iQ3vWrjbfjGW7R3J5jGJyRUdkyeCmSRCe3Ao8h9LW9pKo",
  "key24": "3EjajpjqUiFZj6Fzebfunt7wksjTfnaj2USvthd9qndnxFYs86fQHR5uuWWRxdPeFx73tj51RLGzek96eWeH549f",
  "key25": "5ogTuECbxz4xD6PSy37zucKqgkuU1XAFwhxbKtoTypzkxUCEU3crUQiTmbXoLkYTG8iW2MxyYhwd39bqSq2b8GmS",
  "key26": "3ep4nnqpD8GaxyMnDTKcGaBMWAyTVn2ZAgiVS2Zwmtsmy4WnpXTSGNVGLcQaVfbpx9xkLrmjWKqg6A2zn9Q6wqmr",
  "key27": "37VPgsGzQRHxiCvR7cHq8577KscexpyXhvFqKxBJFfqvdum31SDr2hVJksb8KapXtdtoAGX6d6KQYsyReiP6AtgH",
  "key28": "47fiJFyajrojfaud9j5Xt81ETLP4g5pKtpPPP8zfCKmrcMd1K8DtQGksnjT8BiQngnijPrZxqiquUgmiLB8RzhJs",
  "key29": "5K2YUWVddtfXFmAHpgV27BdqZi7uNFXHkLK8SrrsAPyRPTkcQ4PjhMvw1GLBXA6jpydHGa3e1ufPp649ZGrwX6LS",
  "key30": "2fZAx9QfCwgEsUnSGPYqaLdme8kcNepaDcVn7d7Enu18CjoLCDVzymTk9jcnLrLzeYFZVw8krLaWSTDPXRL89HYK",
  "key31": "5ewo1CzhWbsUTfuaCMgUNa1ktyKAWfkKyAoR8kQHWWL45hR6NTdyFmJWAS78kdXTg1ibNLjuJJ7c7vseT2SkC43d",
  "key32": "6qcpqpYHdssvqRZ7kaE99bJmc8DxZvQWN3kMPzdr9XQCWbeaNDpYoF7Cgys1RXsDNGvq1HAJg2esNgszhzkEUYD",
  "key33": "3XiiMy9WUVAbzc1XoDCuumMkobzGM6eg5ggkZ8AKQ7HX4CS5rd5NtwwYPafVwKrh43LphouLxtFvVDMMVyDGLXW5",
  "key34": "3L5GRWn9uj6um7ib99Kg8sZfpLcjd5WCEsR5DjxdoXLqbzXBRJ5CnET4TKo9nuTy2c8jESmQnsuUMcsEYJwAs6jx",
  "key35": "3DSRfLak91ePKexqnSm71PwBPSZf8JzjxoBJnyu44V2ztcKNfPsFXNGHhHjc7gdrjkTGwKUQAkMnW72Stx1rG2EN",
  "key36": "3odCp3N91ivuHt3RKycmEKKBoxTrLa137yYU9QnmmPf9T3eoC8opfLEQQcidUA9RsUd5Fe9fpkJJR9f1Kue4C9sv",
  "key37": "3AcJHFXKehDfcNptBDpUuDkWGE8569YPgueiKkNUoQQ7PUnak6pKpJtsw57nJ8zGL4DTRJgKJyNZh7ik4cJkYr7o"
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
