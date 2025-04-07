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
    "2o8h7P6vrV4R4Txc4q73Gu626h5tkEhFQ1gQ2o8wQQGTZ17gQ8upf4rNVipoow3Y5BSW3zTh95U9VQrmyzK1ZJJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rus5inrLRFDvWxCgfo5JnkwpoH1dLtMXPTKs8ZKxxAyFnTzYHzjNuBAXLKy8bSeyHjGXgdGs7gh6jsLemMc8wvg",
  "key1": "21gR1BqfMpThVJLrMLPpaSgv2ru8i2kFpALNsZTjkkxfwSwkexWDKWMNbVSY1W1AwuT7YKG5wEAE2exMT2xvN2gY",
  "key2": "31pCaeUb8omj3U6cELbgQ4eydkAfoDDaqPD4Cd2ww71FTK8AjGCi7vDPWpT5GcpJCx2BngRQ6SdVvh4dBdL7yKXm",
  "key3": "4Xm4ZFpod8qE574wUMEHXa15WRPDJUSQYTsgTuWVnwPQWNMFHMAg5tLq7oADT831PG4FxU8TfFpgrsFurG5kKpM3",
  "key4": "uHeDVp9iQE4c2M3NHa4c4B1nYjnWyda4YWmNud65CGPudRXAt8ptpZ9VNFtC89XxYa8UwWhC7UhH9LNLwhyk78s",
  "key5": "2bUSgdMLV83R4AvRqVcb9rkQ9fCWfj2KxGJUwqDkTPmf2VhF8Y7C2n6nwFqwqBfUfHoU4TrCpYygpfi1WQkCWE4y",
  "key6": "2yq2HGpPx7CjMGbVTH3kxzfRWPTSLxY5coDNvbhWHSTGjEzq2VqSxh4xNfBFBPGwPQGiubcuh2URqC8KF26wE71w",
  "key7": "3vKhSfhLK1umtcNQRXrNcT47ZTdfPFBsDyBd2qfw6NcMw5oGDDsZHDMcmiHxHo8eCbeE6FUv3F1hRaVCRiYeLF28",
  "key8": "h6zWLH458Vw4vnmnqkceih3hRBpjvAMKHRWD7sLpUwRPg1zp6HNzFmFu9L9cCD59DWzriqnqxYvbevvwxcXb6P2",
  "key9": "56v838sDRMzLEpFP1b38ohb9S6JRmamzEU7HsepVLD9o3MJ5UwnFqmiCZi9eR7a6DKeYZP5q3pMoEnXgejegtUmp",
  "key10": "z2ZUPNHavX7mnJqqnnSUxMXRvWcznnZBF7Jyt6MAHGLoTrAKrSL57iycCjtBEEeA4ybTnv9WBCBb6jSwDSzsYmk",
  "key11": "nKV2GoQzozD4gncBAkuVhsAQ1dAfF3goeSVhEmk4bq7k8DNFTNQjQB1FtRTJbq3GzKX9i1fm55rPEc9BJr9ELqE",
  "key12": "YonU4kPPWGkgHjYbXAs6AscdxTWpsChrD6p66Jz97PSpGQjfRdrRd5j7phSPyxftBmhMFwjGx7egex3H4JDkoAn",
  "key13": "2cbZf29oWVHVMTwPU16aoc2J9tkNGUn1DJdsVkvtG7nvX1ZRaUyHywn71GQieEEVBAdnZHAMkj8YTUPggX4Z25Nh",
  "key14": "2FDJuQU9AnR1NXEw4LhoTnzNAseoRQzUqTjX6NhiPfYQrf9DUMoTGnn9tzGHZ2AdbDYKbJ7HW8C1MRchx1H7XTcg",
  "key15": "2Pg9WLv1m4gsyxeFsunpARsALC351R7nWwSPqb3vEPkJgMrCEaBiv63nm1zatr9HRw6dSeYQv8CEi33mNHjm1ZAw",
  "key16": "hJ3L8JKSMXQxfhBRaRNE1fZGod2cXPAt9yiBomPsQNYWn5dnYXCVNDo2SFSgv6NpJJBc3JYkZtKJjSJDvPgm3oT",
  "key17": "3jSrTzkiTYw68W5dD46Qnbs2PextKmnnqst1gy5ZEZpbXJrucWU9mbWvnVbvQdRmCJRntfZEhpFdet7Y2HYgt7A3",
  "key18": "5VorcnfG57uhvEdLA3fLWeYsd7WE76YQy1dZY37evNEKUrNbBZ9GNkEexnz61qCZQkNuUnq2Ra8FDcQcu38QaSZD",
  "key19": "4HSaZ1nKJmStXneKaKWZL1F3RKsGiUhsZRVswjPnJkyXEP4zj1UAPRkMNQde27ZupcVoNBqzknBgnG83URTsjU2w",
  "key20": "4BJj4ujjgcKhR2yxxdtQPRBuLm1KV4YKMoPoKy22JB4QogLa3tH4RedE83nvcF6wtXiapzuu9UVtfVhxa4vUTqK4",
  "key21": "isRSoiLh53Xt6yUQkhRiK7sgn36SvazHgoj1hYR4TGjFPWY3vmvDZY8oeYJTMiCx1wPEMYVyCDwCL2GgDQtA9qE",
  "key22": "2yrFjcGWS4mnpzGH23AAVqKRTjhtSqnQCWsiqXQNMddhf5Mw6NhjiGpMSKp6riYmBRFmCfeaZPsrcYvbFPQcDa19",
  "key23": "5qYVwfGrM7rq3yuA63uqfELLVqrVsKX5sRQ2wBPBjCg55k82oQFHAMbK5D3Z6LzyWM35pGDgbKFxWxLW378TDGne",
  "key24": "QThcu58Dd83nN12UEnUANaTKH3sh9uxW9UaD61CHvq4oiXVwhnx6Pv1Vi9Ub62mbCEpqUKaN2qyYEhsYXNeH3Fd",
  "key25": "5L1TsRJuhx184cjLTNg6EjLM2FRQYotA4yMZ4cNStBiWg7oUftfHBG4BGQU4D8He5ZLuCNKv4ouqFFtEN2mtKjyU",
  "key26": "2JHAJvHajUPHKCjMdNT4w8Zj53Fhb8sq9zM5cuNSxRMNzSoWSQiGiDrPpjvKab92fFHmXgPYoGbLbXQVBbfbURxs",
  "key27": "KsZhfrXhFQtMA6DQQkP2VgfoqjZnZnc98LnGzAJx7uNNRTfPp461foEFPm8zzix2J2vsF1UruPvZQtRFw5uPa49",
  "key28": "5YBwbkksyj1m2P4Up3MVMnqTxZgWryJ5rKMeJteNiUzcz8skbCe9VVpNftmqYhYuX1XecqqCqF3Hj1HPE95cYbuy",
  "key29": "67AAYej4ZwWzHVhx6XGn3mSCxRyb7KX86mMcfb67sCs7vyyUpD9KEERTrna4Di9gB9sZuWNrTaa7JfUZFf1oBroE",
  "key30": "4PSsy6QNwx2haZWE6nAFQuEniUiBjgo1S5g1wSZjuH2pvNnz6Hj8rogVdMz2g6ac31uTbMLHqeQ7Fwbj4R1s2C7j",
  "key31": "5fQAKqXWUWhnWhsry2pj6ptHhTpTRGcD4EHfp5gRbx2o3xCsJMsBPqokn7f1Vt18oVe1H8WRWcMwJZLC2qC2a8tp",
  "key32": "4wRkmJi5KKr7vyRhnzjJ4JimgXPMFCYhriJwZCQnd3zxKmFTdoThowfT3PuUF31yTzhNjKRPVGBGx9K7PuSNwF4A",
  "key33": "5RdAn86QDK2zrXcmabBC2C9cVHBTxYunwAURq7df5zwYC3MBcetSckCQ4GvPQV94MEcRE23XEYu9DWVkEXknvyCK",
  "key34": "3GYXau8VZcsMEEgRLC347k2ptsHjaZvv2Ki8iw8n9y42h8g8be5vD6Ut4xeGxvKdk7PF1wYxgSddehSS3uPKqJUL",
  "key35": "3ND5PXLVHPrcucWeZjaN8CCEfyjAcipChvezAXVzxicKzzEnnHHBJTnbbGLFX7BoKqEsqi7g8MQnJfz7PvUFEEys",
  "key36": "URMz2Z8CN6cxsK4p3Zg3FPv9HqM9hmXqqGgoyjDxLhrChnhGxzZrwP4aCYDaiyesFkDD43F8R1e9kv2A7zDT7ho",
  "key37": "2pdKcYKdcuRAduKJ7jGoAKjU1HG2PPVcLXhPUq1SAh45CFRZtYNopZ3VT8LV3Lkiajws7NHWQze3TeWgc6cikRTr",
  "key38": "5wWQ25KEoWkxq32DcpVg1vzyzHLCPWdjhBCnVbbf94yNEgakLgFSiFvMXuaaAN5HxsgKtCE3zicTxGrPrkCcgecK",
  "key39": "g2Y6JL49TjLKp6Ya9mRiEc3Uj17GLfbYpdTraX5apTU2prCrP7PdqJAvWrZvghwMBKtK2jmFHe97f8CjNLFBXCc",
  "key40": "34vB2GWLUUiXwCAuRUi9tZQUBC2YB3GuCEEPheUQmhA2wQPoXWFQpchDotnrMD2GWBfRio1rL3GCxvRHVsgzhFo2",
  "key41": "4sjGLhaZ3XiA234aHEPZX3P7FkDHMkzwxcs2NNiAYhxfMegJr3zc1MPa2si31mfK7QS5qEhdQNin2hyftBtykjTZ"
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
