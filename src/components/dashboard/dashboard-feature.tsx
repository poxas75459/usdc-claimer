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
    "2Tv3JmDZCnBZDj4sqUYSvNZ1y9YTX9VKcXwD37ahuTwSbxXPTRRwc8rpupv72fr7QXnm4DBugAAU4nNjkG2woQjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1jyUUPJkEaTEyEuKkmYBBbUaHZabFRZYmSj3kV6EqkHkJmisLmUwsw4MUpdmpwGnnyPckovipFHLnyCrVncrAQ",
  "key1": "2YNhUd5EBs9oyd1o9B1CSxWTDLXqVaCzjo8wcpb7kapJ4mqeS6TDhjijrCH5wabiM9AuXJUNLnUZSBwgCziKwkQs",
  "key2": "2ojiKCTpaFFtK2FDFhsknjX2pnyhsJ6nmKwmREsu8KeM3abVZi6whriLQsFnVgA7NdoTbDrwW8XLTCm87zzx3CHy",
  "key3": "5jUfSYv35hPy2sjEnJfKrZmYitMo7e4sQES49WPnXs3EJEdtyAwaD1bBC6rocDTSLWgfa2nPoC2r2PV2GWwCcef6",
  "key4": "4KSwkPSKUc1Brnhp7u3MG7MWwARoRyTNeXgMg6PXoJq23tB2NJMUM5KJjdDcFCiemn3ZFeheDN4tbiuWxGkibdA7",
  "key5": "u5zYemNrnMpKh7YBykKJdJwnb2zBi4KgqaXcEbgFhLZGzH32BW8mvqFXCwQsYbGnWXcW7QdefcavkmGeuCJt22e",
  "key6": "Tt1N17QQaGfhHrzgnohxuCCsGB2c8dabGwKV3HrLcsKESGJvbyDqA1hHgLR618QHnwuSK98kWoM3HFzCSk7oJNd",
  "key7": "4VJFjEEq9qDgFPxtAvpY7RdkuM1Gv1eiEv3ANJf5WFPicmunD5R9FjtxbCtKAvtxwXMpVMYBob4swXCG6Ebgzykn",
  "key8": "iipumeQG72XSxn4BjEenmpEQLzQfd4m4cfMuptVMnnFWkam7U67pqVvLg4CPp9FPkmJqp71ech2NssQeWuigaVo",
  "key9": "sP53ZB9V8vV6y1F4p8ppDR4KynYEqZgcBRvDXQJbDvXY1qgpnFP36ufiXCYJx8UqCmBweWr23Mv5Q7rVUt64t2R",
  "key10": "P3MQkM7jKmoGdpCwk6qyJbfdvN2kJZ6axmxWtqtsRxjjS6Th3Sjy22C2jVH4835eU8aouvioPFSy7QmFGmxUrnU",
  "key11": "38qZ1EREshkWJkPf3xzgHpeY3YCqvKUsPdep5oQCTAEPHC5g2kzJsQ88NZbGjedFKRZQBQfjSFBETwZHfGdJywh7",
  "key12": "245iHgZ6zATEiMFabHFQekHsQ12D8orHqfWKYHLPjLc1hPgmUHyHyPCDfgu7QfXEfKYzb27nUpaJAJBt8vumwZLt",
  "key13": "5CYsfMR7cCtvi2UujKp84fMgGkNqFX59mR3mKB4JSFmjQ7yRF5vDzkwhNKP1W5uTB1Bqykbmzj758yqKVhRXwKHt",
  "key14": "4zRHbwfXWhZoGzdkA1k2kioFDJNhiufk53SQjc77Z1d4YCbmF91Qr2hp6T1gpvfFwv8b5cgEtR3s6QcWCHYWU9CX",
  "key15": "3QFyTDtncByozvxEhvv9VKZbZicL7JErdiNbKqcDDGVBENnUR6kBF14d6HecwoYHkTHwcGqPF7Bv5DboeCfNSYZB",
  "key16": "2qpFnbENCtG736rH3qFGr5GV9PP4TNWNwveCTJCKecd4DE5wekH2yZNDzb22ZQZ6UzvjtExtSYXCz7pBubCLKuqQ",
  "key17": "3cvyKqEQwg2UYQ2HuCFhkzsHvh3GqdDMDH9f3MdyKe3zrUoTaEovM3cettN11bKw9P6UtAcsjVQZmdRMyc5pGgtm",
  "key18": "4VzVJLQgb3qZ91oL7rTHGQBXkRmyydmPxFiwyrbsXRogDRtBbWosZPyGckvSyTy1T2zvrDSYq5vRB3HKzZcJt1hm",
  "key19": "y1p2hmSmD8QqrycChXCiy3t3oDEKHDUvkwyxj6gBhX8UTYcLKzxyMhtsntQ6Q5nFbAz44PrNgChAbXCp9f8cGrn",
  "key20": "5ZQ5yLvCdmiLTMd1iZmk9JQhPDWumdgQxLaSjw9dvV8fQQ2BGYtbG2EEVvhaUG3gbkYNo9kTeCcth2RQKeiPAbFE",
  "key21": "5xcBXP3pVN8Dbuu7R3JfcZ7eB1x9iZXpFUWfmSbL1GzvmDaFY82DNVHupfHHsE5wxp7zhhETDKWgGHNYhxmSveR7",
  "key22": "3LkqhYuiuuBv7xTGPn8FJagepKw3FAAhX5msWJvrc91kFMQayN3aPfNubmkMbQvJn2SMLqjNmLQ6UMkNFooVFizq",
  "key23": "3K5Z1bXuJ9QNfKWYVu749gPYppJC4aYw4auAXrwSdZbku9XdVxL5WqvXeMGM9iRhyQiGWakDkVi24tx91eBj7H1w",
  "key24": "349vAP65JZ7NJGhAGreJnrGhHz3Fw9YRX76SxCpPvj54MDKNvMgY5Ef5eu1Ngdv5UJPLECXd7x2gdZbpso8kBBDz",
  "key25": "5dBRpyFQLakg579rHD7drKt4wUGS14Y8Abm1LmJjPmvGEvK1G8vHnvSXuLNFdBv6VwyhzaXjYJx2mdAp1qv5MPxj",
  "key26": "3TpB2DPAm1B7zE4AQpnJ3czXGFMAtXKSYQyMacC9u9VdU4wtpG2VUXixb5cZhW3KLr3eNA99ouKkBBtY1tEVjEbt",
  "key27": "cMfe4NE81n8VfFNnmXqKMTneYehPspZe3z7hZvBqV6MiAoo4jKAxPRCcHVX2T3tv1Wy6ftQ6VEGCkoWuTuNW8Ek",
  "key28": "4XEv5AdpvtKHV8sRHifrrXRs1ho1231EcMWkMdWtR6jBJnaENxbTrBLCNTRdS76boxYFbQq8SVrwuYruX2eu1KMa",
  "key29": "25DPHKU58FBuJMkjW79pXBq2xrxaj4czp1zKL53YCUTm8MLvXueg5faHweLyRx9nBVhEGdDZ52ZnqvgvPknFB6cw",
  "key30": "4SCZ3skLBoSQp8y3sxQrfzj6inSMd7PgZafZYVkADZtZDLURi7vCdRUnUuwyqL9Z3iWC9MgCuhC5zw14gRLfTtSU",
  "key31": "2DN8gBTWA3Dt6Bf7vUvvYXu6HvmUvkq5vcskNxh7yVwLxZjx9vYHHyaan5ycYiCCoUsVyZdHXuiJpKBKZzVS1wwY",
  "key32": "372MC2ohzkjrUNcka2kY9L9kap5D2cjNcKSUN7ZcbQmJ9Ge6qCTM6gFhYbR83KkGbNedomx8L8xp4CgikoftiQMh",
  "key33": "3m9cabokf4JZvhZQZ8ve5KqtfzKPqyT1XNK5eCPtnhQA5NuHEM3izcLj6CHr7RcuNEF7WfEWiXsW42itWvn2kGd2",
  "key34": "2LLDnLmW6QBAJQ8mUV3GcgHwZMR46nGLddkpyezDeykgNv86wNx9Ke3JHzRy1DWTWHpRmf8ZUpBeST1gmUmhQJvG",
  "key35": "8MbjDmMFE2WifrGzCPpmSsD6meGWpwMNcs4LZLLX8thZo2SMP1qY1Lp4DZicFdNAWBxoYjjKwo7zWqBFt2Xoi6i",
  "key36": "4vHD2c17fgqT6fRzjJrNb98xSRUtooRH2kWxSpTKEpWNrzUCSeYiCaBzRVaPgsDUCUnr51xJv4fMgNfuSZBrVCc3",
  "key37": "2YGumUoqxuxZaqHMTSET3SGxKVP78FRjeGfBLZNtB13Xp1QWK58dW4i6u5C3UqKqmr5Vv8SmLNHhrBQHdAdW8JyF",
  "key38": "4eeVhv5GsbiUZVzpGHNwKXNZZSjM1ScfHxwpTp4i8pGcfpGU76rDM5vKZTiFmcEjAVSd7QNfqZrfcJq9gQXRenDa",
  "key39": "4NTdcmWo995kv6SEbBn4eDV3CWm4as31WJpM6DqQv7U4LuywTCXVNHXCpGKhxGq4ybioAuAo1mikmGcqCoJty877"
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
