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
    "3jeUpW9eNTvnzkyn13oXfGGVG3V6rgE9dTCRTJgudS3k2jsmAiXeMAbKa77ZNes7JgXFU1R6JL2aeVgn3SE4a8iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdRcXYQcXUnXD5ZsL3NmhmUmz19rHtUF1piAas4CfVpYrkCPYLTGLK2G1Jj13FVNfKn4N7ehsR4SmLXemfk9ytX",
  "key1": "3mMg6cnF4AjpuiE3vwRvKVWms3soFQVd9SsB56Z6LEYY5BgAvsYCnFdm82nhBxqfq6SEJdavDGds9bKsCYE5NpgT",
  "key2": "3fMni97cKXH2tuA81zxBapz5FRnzQPBHqeNkApwiwSLoZ8x8NxiV2p5XmgWCBAMJJ6tewoy2YPsbCB2ha3xEnitr",
  "key3": "3oZEnJJ799SyPX5YqacuDaPgpWf63eABnNnsTpy3DBzGmFzsPYxHVNnRb6EbJTb8XFKVXutYFrQ2kp26JSH5VY1w",
  "key4": "5Dc8SFqsYonci31EBftUVsKSgiUdgDu4kqND3EvVZqU8H4H3EKdhPtoY72mpqxFqferU1rjKX5Fs68EcmhdsfZMX",
  "key5": "UZff5qUSsbjxKH9rn3jABkwQPYEbcmkocQMeuTzdv7M35UGiCUp7ukt2f3ebDsJDvGtEJtuJV7ycZ9rQoC4hRAn",
  "key6": "5TU24khxBftZEN2qkShVNFhUUfYnfKM9GXLTPZQyG2AMSFnzcF9nt6FotDtZ1QwiQck4zZgrJ2wHXF5SSFb5DGXP",
  "key7": "59vXw3bRPEQxyQMa6WjDm1XzCymMa2yhS7xAJsJ6cY8tNe624doEXnzxCwFjnJ2dA5Vhfw7eFBySHWKUyjRuJpcB",
  "key8": "CVppQcwTXioh75qMnbFasQQ2qTHpK7M8AaADUonA4o9PGztkbtkw3aR6Qf1gGUSfxa4QdLscwJQiEpWzmrcpy6i",
  "key9": "56puRa3RoANvFujKBvSnpb16dwfpJWGA3DWf7C8jyMz6KMFDf5v93HCtJiKf17jXpDJ8Zx89gLW2qNiQTzbyxMPY",
  "key10": "2tR36PtghUvMP8hUDAqaAQhUS373qoYFDmhfCkRjAdpeNaL9FX95xtJjyRXStpZrerfhDtqeRNgerxh9fMQR8Eeu",
  "key11": "5f6SEtQ2cEmr35HYnDQuiSdXqeSmK1eWsNCL7cGNATNNBMwfk7ftG7UgRYCJ4gSnHdiDAnZxJ8ij4yYFmLDnJetj",
  "key12": "3n2yJyNioXb3JGhiJq9LqKzNxd1PNoQrUeaHyiYZ53pDZGunaHiAKB4r1e6aMajRMr2RkQETY42fhDX2f7R5C9Sd",
  "key13": "233aZ6mBtaKUSwNGFuX9CEgx7Pw9C21pYYRsgb8DufTTcbpTP1ZGLye6MWy9wBTfQqFzkLgMx6xEY8DSTZZgJz9K",
  "key14": "31TyWTbuT4wTZxLKWBnYTgByT3fi8h9R1LZ16FJos2burV1BR8RnmUqvW79xBuitYRLXRyQhk1o55MAtgj9wRtQE",
  "key15": "eZ1n1Hw3SahQJA4SgAFZ6jbvE8mHu1LsYFRPynnVurgbcm6FApqjW2BxeXDxQgb6KVrKibbKFT6C3foVJDB7RBH",
  "key16": "vE854ZpWPMzyYJ6jL3XrLzQY9oDsSVLsMpEtujTPniEHXbE5uoFBRZcarc9M6hn6muuu4atE2acP2fzjGmZnaZ8",
  "key17": "5B6fvsa9Mbzr2CrZFH17jj6WE8MZRxYcSSrH1QMhrN3Dt3UuaZmezbZ28v19TvPJc36yx7qYrAjqFUzh3RiWzu1r",
  "key18": "57uVNQHtS9fAS9AGFokhtJh5PzjcFRwfHArb2qcSfNyQvw6rkAbEiiN3QsjGaa36rqg533G7SJTAysqYzb2LxBeW",
  "key19": "3aNTdA69p7Gf3Z83EaCtkoGQqcD21C2QUET2RFCVf3vJ6DDkvkXn4NLPpcGapG9NnQZsD134q5Eneg8qTYmctp6i",
  "key20": "3FdRMZHyCoWe1ACPQkGSzL9z76GYDH2gJV2XuinbX1B2Aayy4dTdYjPt9QDvuGwzYQPDDBzzvGeAwtPZ6gYs1mNN",
  "key21": "fVP8FwxUEri9LBEPit6kSTfCyG1wd1iN1JYdMamxm6Brn8AGFCGu9mEaPEC5GByXpRYZBRvhcoHyYYBKLT3g89q",
  "key22": "499wSYe2owWEEubSJRbr3Rz758sZ4ggas4ruYtRcPr79jdw8xzktPQ9ksqjNyoeFUqvt2zSq43Z8sohUVbFgB4Hy",
  "key23": "2QNMyV7nj7k5eazSasuanxp3uaAzApCtoQUFa53f2gWxnDcbXCjipJAG9rgMwPgu1JGkpGv5q2zX375MY19iLD2h",
  "key24": "2Y2ZmZNciQfTG9nppx2wofs9BXYsYQZY8AUnps1DfqkswUw9iWZ7jEf48eQFiYQAGuxKMsUPS3moYTPKqMrT5qLf",
  "key25": "tjpqEk8zKUjDVRpPQiwuoCiLS7x1avuRi6ZZrhCpujzFC7z16qK5dwvBbL2TMCVRm4fJdJA2jThk4iRXiiZ2Xop",
  "key26": "336nYsjdXjJjrMaB7xtfDfGiRfoVnBUqjdQETGuffjL6rEm27Zf7dDmzTACgr256QsPNd1rhWZA6nz8ZyPrqUygs",
  "key27": "4Ct6Pq6KXAc6SWsEHMai62BiWfjc3VY2pPojpRSwrYhjKqFWCnGGGFjMC7m64U7MPLdjzFc9unqZRkkd65ztXzTs",
  "key28": "4nFMKE5URYT4mqhsLehHMSc976sv5Vg1AwH6XrK5otofzbMdgzNo6adyf1hkb5Cax98Nyic8rN1DxQmrLLic7aB9",
  "key29": "5RxMRhHE7LSYCazZM7fSzx659vnpezc2b9iU5PEQfK4GKv6B7UahpmJWff7B7dEFzTfXC4u2fbsy5GAC8NKm8dxj",
  "key30": "9TU1ngAEhYuyLTYYKLbosLcZL4eDVresTWRhqrXJfhi8asfh513tcmkgH2mhJgRHVxhxmN8U8gDAJZeS9CvUmnN",
  "key31": "5c7XfT5A4636YmDwLJQvKejCmddTjub1oe5wtn6L8MCUU6kWk9mqaTgdYwS1yrbBoteYXLdMz5Pu4anYcXb1pPfH",
  "key32": "47PSMMWrAPJyZJE989QZprqNPn4zhqDWWSXosFYyxciLp2cYqXYc88wFq3SJoHcp8hrG8oXEcnSKNr425DCmX7f3",
  "key33": "bgMMm535N9Y6idBNfP4MXVTZTp2kditjQcnZ86yUgpBTK1ZFb7PTyFXCuRAoEfVCNyNSt5L3VcnKFCEwAKQJ3ex",
  "key34": "36FkcxXAhyVPLZHSUDEdzyVtpArSozp1Uqyw3bUfdvYfqgW1xGwPeS5prYDe8dRm5Efn2RzQceTzudQ94VZG5t35",
  "key35": "3VFmAxb29ckwoRGuo3PLke67uejJSbBJsUYd2jWAdmnf793hxt891p6nhnUC3MwFT5XqSzJaH1948k7dbgk1DiWf",
  "key36": "45xv21nguRj1fv7oJxoYGLWXEzNETpw3KAS9FdETp12qK3mB6Td5DpP4TKri7ZVzAz9Z41uwvVtqv49x1zJj1XZ9",
  "key37": "2Bpy1rxKmFGmztGbUiKLLCEUg5wbqenBsoXLwKNcgcyfmkLFYTv6vCNqMP4UGFHo6WDjiabo6b2Nv1CvL2gu3hHS",
  "key38": "kEPwFvqtJsQfhuK48AxSyGja4EMJFxqMqaevmYgMSyYTDh4j3UdLvryNUE5tcDpiYcxjYPTRaRZg6BWsdUujXva",
  "key39": "3DKjKVFj5zMDkV46ss7nFQGPFH2X6xakfbF5dv5mSsUHytTtrNrHAV3EqxJpHPbhW23dCoDQdDFnnMK7dRVpHyyo",
  "key40": "64WcGxupJPT35P6JnGrAKSQWznr81JHqf1y7WdXP5T44TNDWrR19wrccm5sTCeHmfnsYLJF2foJ6d3Dgrk1kmHkk",
  "key41": "3ayT5LtqdobYQE6cK6RTHW3GkEH9CcCdKXjntizXzy4sVp8DZS64JCJSoM5cw1Yjj2BD6nqVCdTNPkJUUeCVBcCw",
  "key42": "5nPoZvCpAvDWm5C5Nhkq1BmzjTh5ytAR7L91CGT56CYgU2W2HGhFq5V5oPF82ppBwqzJt8SvtrRsvYn8s46TeVc9",
  "key43": "NGEstXfFEEoBxja6dJ7wfn5MzvowvPAUMjgybDJxcEz7KMkU55aoAZewovfQWoPzyZq3n29bLGwrDcaRwefXHNM"
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
