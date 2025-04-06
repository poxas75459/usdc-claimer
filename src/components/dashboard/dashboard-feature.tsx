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
    "2AYQHim44uoJQhKXFdmkKPzpGUUjDo9BUiqp8obFDf3F1cLwG7xfdu3PTcvhXU6gVP7bGZPZm4yVqMGkk73LCmRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFNk7EdD7GzofCa8cGPXBKmwZZv4d1uf8f7GADG5ETFfYXAebuGF3evRgskN9CvaDPjfFbtExChLVfvy9bMQREa",
  "key1": "4zHf1M74xGozCY4nLVFNqsqebBPq36E2SDuWsZhUZud9GvuRXR5nGY1pSsMKyaRndBZKZKAWMEgmySp9oyPYdJY7",
  "key2": "5iSoDaNb3KR6FUNv2HdNAV9CDiHyg2HC1C6UQRqaBn9LPXp72qdN6rtPvqABsbCW2bSL7hyQXvVk1u53VEaF8CJd",
  "key3": "4FDbp67FMsEMeUEq7SVCwWTqZ15Vg1dZypisQNQWugp1GTgRzpm4iB3xH1cmDudbf3YxtTVvifpXWdYpHWwUjasB",
  "key4": "32uJy8FMGrFCEB5wTkjPoS85KrsHdqCrTaHvVrsohy3sm96cYPyxsx31UoU1Tmu9tPBUjHQu4CV7tPMrEHVy5LYF",
  "key5": "rthH3jBKHdsZyAqRoP7XR6hpB8cZxNSsV5pX8xxhesMMtt9CCCaYRGWKwEj6EkuxrDjJRYY3N16H9ZLPLkGaGzd",
  "key6": "3do5GjyRR1RguBKHLCteCsejMwUASG4guGXBCbqmX2cwUeHtBFDKwXhSoF1t4TqRfKdXvo1y9zead4cBbVcH1Zea",
  "key7": "3tfqm1TP5KhDUjkpFL5g1mmaP4YXF1jv8H2v4XRPRepK9EC8bkrzbS9rjQR4HmFoSXVZKpJLv6U7FTtcCQ8A7zuj",
  "key8": "2VQNez952BezpJpv19Wbx8TRfHye1LGNxMhcSkPccZwcdjDL8eriJ3khbEVLitFyc8B9UmGJWZr254G5oKhh5xdB",
  "key9": "2p3H3giTQmrFPgiu7hKmUBCfK4gMoKzWPVuADsusZzcx9fWhkvepBSa7SmP6ww9iroCoFavYKg3acXQwx1X8RQWA",
  "key10": "4yz3jKVfw9262Sdt2MRkxE9CPKstYP6uvAPCNTrThYBYFJb7RfEnWuQkG9gJSouwxUBAoZY4dmCExTU91XpXrjEz",
  "key11": "5zWAE79Sap3M1Xfs3RVnqDMgcGzpZyeFn52iM6yefcCviCgHBti21Z1ar8Zz9cPjK9TGk6p75rn2o6Lp1FT2kADr",
  "key12": "2jfXgaraBtj9MkUw7WUs9PsMfDGnKoi7AoVNSBaF3mvpxGHiqFphkB6gcaYgZ7oBNSSxmecSYTgKmF99zwshX6oo",
  "key13": "4YAiSoGfvbD9few1jEBZtrLjeHaTpKCJWrQoBkYPGjjkG1hxvmZ6NKaZagGFNoYVakRvvUV7mTUNerFEMXsKnkrd",
  "key14": "bDELWZLhLXSwzK8XP7WT3Z1YHpTGyCbWwhpU6wdY3ZaX55qJAdJGfdbwjjRji6NQZSzmfSKbk7oWQHGU64A9tQX",
  "key15": "YHGXX5ndpcLvCNTgsZYA8jU4MZ4zdxmdqkY26JMqiw3FmJsHxQLJ56y4MBW1R5pDS1o2kuRNNeqoSdmovRrVx2X",
  "key16": "5zFUHb7KuaLNgLCwL8n6pnZw4soxhcFmCMpawti3ssRKWHxqLmbBShVZAQZ3VZPFUkddLuEsGBpEMQgzWcJuqhBn",
  "key17": "C7F53kpBb5tBwhL27JX5fYDtJuG3d2FQiwUw8C2MGKG5niftyobYDmwBY2daWsEzPFbrm1E9woDia3GCcRqgM33",
  "key18": "5jHSrkZuxvCy5LRyVEMjfxgiPr31qxjjFVAcTeiun24hECQuZakeEqiMSmhR1decLEWBXBE6XB33YgjR4an4aRPh",
  "key19": "fYyvJ49GzerjAQoZcWUEurE28PFSpmhuS7XhK5E5oN3mSdSBLy3ks2xMDuFiGHtSNW6Kn8CJEr263crJLGQwcbG",
  "key20": "QaAsne3wCFmHvqNh85P7vrerWGyz3gEoDy8pK12LktuphA4CJWLNL54vSqzkkkT4BD7Kq1hzA6v2vkrB1NY4GYA",
  "key21": "SZG4YyqXFkoPnNfDGzk3Yy8vd9wqLuXho9zNk4zTp2NNnkp14mVnRsQmCcCEhYpe9AFX4Dxhv9BQb1LCb4DW64m",
  "key22": "kT9XWjfFaTtkZFDQCTxwAkVgzG3JKryEY7VBc4GJXT5zHW52TdQirEp2s9GzQrhFr7XeNBZoVKDGoH3BF2zDjdY",
  "key23": "3N5ru5qDN9kij7W5B1ffmnxMwY5Q7UwtPQaA5AB4Wknj1kwpmVLU5urFS1Q6vvXDR7EmBYYQdNRWsw52eny6VZrC",
  "key24": "3ngsS4nZvkg1wts362a1Y9kks8f2VxsrFjaHfeeGYg7MjmUqi1B2sBbSd2sWUhi4rEomdEtwdnLCmtnBaRPuJXQQ",
  "key25": "4uFSeedngEQo1F8ZdA6H9YjJ8MXnL6fsbv9ebBTdyKCGzZqUs5CETjUvX9ekZEEDjaE4VZuvnt1Kza8sjXk6V6NP",
  "key26": "3UD8MjZW3MyX1RrMYueYkfVe9BajZq6wZGmZWwgqLzNRomXkjgjqPTMeZUCvYxiSrKwKTjdfC12VjmsUEXH9dkpF",
  "key27": "sS55WaZf9YdKhYAU7FbRLcpeyTC9UuBZJFeRhdWeJBmxPq1sMiMAGnjpc5sbiPajhGkg9TuL9ugeLqmNCXf7pVg",
  "key28": "4uPmg7NAZnpsKs9rSCXYZWdLmF72WJwsMtTegbgf2c4Zr6kH8AEnYD2aK4BUgQGH2RV8rmdS5FJUVvBmsTU8a8M5",
  "key29": "5VHBroeXiTWvgVsTRu2hFWLscAmdV1HAmsfNkWzkSFzBF4cHa4v1YdWXY3MRfWFD9sbbk8tbYhEGfkhCXbSLovyA",
  "key30": "3YwZwPRYmwwNAnCDhQ9NwKCc82JcR4reXxZ9RvHHBZai7K39k5hxg7aBA8XYBFVN59BPkoyxTpJJvcuhpFWhEyVd",
  "key31": "2q5DUXGb2gdS16jeNFyh2nrQhCtd2DYzrPQEazoYJL89Tf2Y6aigyadVNrBi2ZrQWy5uXQ5nLrvPw9vZ21g1afEo",
  "key32": "8tFBAYFe9fiJ3k1rA3onWMBDz8vG8NsE7xyotEnx1Z1Zguq9DsviUswdLD1tpjDWtbk8KURnd2FTixchYRmveEw",
  "key33": "2naApirpyRAHAgNoYE2WE9TT6ecpG3PeXXyMRopAv4ohzBcob23i9b2HfKEpsouiY3pDrkQEsXiTtnGc6ydqsF7z",
  "key34": "22bxXbdCSzEMH9VV6ciHxiZfCf8q1oNb2Qj7p2JDUBHjknKF5MtyWT4RMV2Cx5jAL3Mm7M1xcbfKv4YQGSt7CVoc",
  "key35": "2oxz3TUQkgX36aa4VNUQvwjMdP8TYGaAKwSJKWwgXhiqFMMotjtfUuhCfSXL4BqMCjCgC27nq915M3hKxtWxn4k6",
  "key36": "VVA4ytt2GTc7H75g6x5NJ46EJECWCN81CEngtVUZmPw1krjcMRb1o5Hqhwbkgu5MRTM6oP4UYGSQTcAGNczRjjj",
  "key37": "5uMTohAywXYrJCq46aASfSNKrQXuFX4ZHgAsy7sVXBPGQmquvuy2Xmnk33HLSBXvBiDSvTQzjDcLgFUzcTECqu83",
  "key38": "89Lj4BjY7fLc3fXB9KurYcXB5NnYHyGXgpS3c1vLWFfxjGzoikT7ETWdznrPD14KxT9QuNhwTf97NaKmrJo7i1c",
  "key39": "47JtY8R4c7ittpfuh1ZjrCtoUdfvfF2p5Jkdx2acvEH3xs4fJCHSvcCVNtaTKe7qLzamq5f9Nq4JtrbShC5ktJdC",
  "key40": "iJe31zrMwApBJL17xFuViDFK6JWaaN4dzpHCW5wkaU7tf3zm4tZtjzNUNEjt1KjtkQahMiZ4UvTbEKe9UAmZZgx",
  "key41": "W4sf3DfsacJeLPeqWpbXQMA3yTf9YiC13cu9MfG7WA9oEzxdwkp3ukEckUJanBeTDXYeGLDJLTTPeAP3RVGzeEs",
  "key42": "3Et3tr9hbzohGo2NHvq49QVBgagkymu3CrhvAx8Lh83G3QEdcXWq1NnDYmeYRg2MhaCZoP38wfr7jC9xUBT3K7o4",
  "key43": "2EBYkPfMBAjrVc2vebY34X8kiuKKSvXxffi4J1vyiqaP63HtREXK5sdP5MpJMswGZfyyjm81P1pMYTfopDeQxE1L",
  "key44": "4zVhyTxv3Q3MM48Yvai7fMpfi5au54PVVErZ9zSiKC5JFReoGsVAYsdqHEFDzGTVJsjM4v1JYwP4QRYAeCqsEWfq",
  "key45": "3UKHFmgzeHvgxqk8HpcjDS2AkAhBv2w4G6mjft8Z47ypRGQE9MQBL8iDieF1X2T5yUfyfkYtNYHAhdTVeguPbheA",
  "key46": "5ZjicznDoh8bpsvdpVE1uYG8gXxipspGQVmk4NLxTugW3PkSX6NWmSu9x3HnVsgd3PTm58iq2fMxxeLA8pUAZp6X",
  "key47": "4JYNwQUbiS17eMHqGNhb71n6jcAThAsbqBVFpL289tPFTabfXsNnGe59ywas1UDMFKSrHzYCe2S4PprcV1GpXzi1"
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
