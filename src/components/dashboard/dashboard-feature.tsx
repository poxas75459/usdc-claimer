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
    "X1DB2xBhtmYFkX2GzuYac4ULN8rUQSNTTvWx1xtPAKWJNzHN2kjcmZFkjbTbPy494LmURnf6n8NeDF5VDVkbX5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NxE3ADEyyW7vzWFHLbuLqqKhkJZXVsFb7WuukG7tkVCqCXyxvFiQFqAz2V2Z7Kj7HqHYzUnwjq9zrBisHsvao31",
  "key1": "3bUC4eGcwCD4vxt4xhfLRKyxrojgA63gUcBZtYYdRz8qMBoZtZvwPbc2GnXk98jGTWUo1nHXawY4fJtKsgEACJ8u",
  "key2": "52Krwga41y4x6BWHUGRHstoKA66zFoyvvbJfmLFhxYBwwkpAjUbgQQwbUKBrRb32z3Nh6RL8MeshYKB1AxVmPkii",
  "key3": "67h6mx6J9YVa5Myh2uW8Fy7myD21VyqPxstoqy19oEYYufUg2oTUcDmVY8eaQpbmkA75kn3CRccKkmCdVHtroJzT",
  "key4": "2MttRwXqf76mKNUnUdfaPbKHgwp8X9azKKaQDNnuWqTCPns5wsAMysEnoVetFyPFrsGTs4kKWSnrHqX1ADpUJ9qn",
  "key5": "VZ9D6ZvyW6GX6vTNifAQ3HG7fmd96aqhp8yZPqk9uubWd4Vv5kaSFhGh58oGV8k3t3mgQt2xHXEpsciYEoUwyfA",
  "key6": "4CmgcHE5NwrSD4zp9JcoPYLys3VwsaijQJLCXPDa8ER2cmV6Vs5ppVecDszjJhWvPR4cjZBNh8fHX4YVVt7W5M2h",
  "key7": "pNXoKHEeFeEsEF4CsaXGuT6kk17kRvheY8fRFbJpWpJ6sgaBbC88SDCc6wtz7wfG1MjomjoBmZiz6j8hf1Yfdw8",
  "key8": "3HKTVTeVCErMwpHeyR9bu85m4YCtUuqcwFwDqzm622sjHMqTnhY5JoYW9SRJQFsJug814k9F8iGXyLRDdn5pSudx",
  "key9": "2oiyrZmaMgr4wbU33fnGhbxvY2YmM3ES4TMxFCdXMvkw6NBodHDdjp4hmvLTMkNMDQ2kRcnmFRz3V3k5xDjPKWV6",
  "key10": "2QdH9MMLev1Qeuah2xPJXG974ECY15KLh3Zxz1DuxBXKnToNciFkxosTV1edQEn7iYwH11iD6B9AghH769oP1gyA",
  "key11": "2yRsFR68QhtZ6d5kHXEb2YhxVi8rCzuDxjpk8Rr8A1tSungZMrwqKFmsSgaBtxBp6gb6Dy9unDEUd3koAMHzzAH1",
  "key12": "AjcmKRBdTpixhG9WzPAjiQvEhaf5ZPg5Yrc55pT16spwGwnKjP4eg6ZxH8r5eirEVeejwwsuKsZUVYiYGHvscoM",
  "key13": "5L2YH2ksS1jB9khV7w1hwPUV6Vu3cdi8567CNBdV29xkQSYwWts48MDjvxxqbGBz5coQmLD5ZAjbeDZCEtRxEfaX",
  "key14": "2JXgDFGUfctAZJLyq8MN9C6hKXDpaccoQGwmjAD2WoLBTyCWN8P93wVSQiPDjAeFN8iAhP8Cxg3oUnTTmwkwjLP4",
  "key15": "3QqXjsAxvLdcYJuZKdYhzMDsMwtwJnAbLSrBMdP6NS8AwHiW23ziPdU5YHPnW2PVwpUydZWYMVY3Npx832FnFnyB",
  "key16": "3BJ1kpGoLAgYzRcFsSUFToKadZ29su9NRuRxXReC79vyS8f3rQEc3fWH5FZ118z5gWxc3Gspqmpm96RMn6vGA7un",
  "key17": "3SomK9ctPfKzJYANiigAgAaSDa7juxMt2xo7dww8VVHJDM739PVyadyLuyjK4Cs8qpEs9fMYZ7FCob4oJAW9nLTh",
  "key18": "8h5FzQZJEievhopCJNwgMycXsdTU2eQ9Smi3XojFG1Koy75NZ9bZ7yPUBk5foWPhuw75NKGDs5Xq9SWkNbhyXiD",
  "key19": "4NM5K3k5KDa6rQD5pt4AYB5PJw2XTwC27BP29SUGmvk75Drjfpy8uxy76PobWSAkNRv2b4gP2niGU5Do54X1PM5R",
  "key20": "3qwdLLgyDD7bAEYJ4TGg4njGcxpup1vgapiawo7XYAsy3js2cCUnMmnHYkkJV76ZgqSNhwWJ3u3cDcPMgB8ei2a8",
  "key21": "43P7KeMebJJ51ttibqnDcFC8hEEBebeB9WxxYLPaGKktbbMZiuVCahP7jawm1emc7SHCKdjt1ycqHQMHxMFrLNhX",
  "key22": "j9kVgbK9zNPwtXjgrVuQDsCTnWEFRRuUHqDMC5nSqd1jMas6nBLxwqyrovCLCTogUo5G1aybuLRsTzeqrP6XP9X",
  "key23": "3KJzDk4aAGWS98fk5FkLDq11jJXZW54UL8ygjMYJTgLeRtW5Lm75jpv6k3pNGAxJ5qmPACuAwzqWCFtM9sjTGCqq",
  "key24": "4nQcnkxrohSdRjTR2gE2Zx6Vwej6VXm1QDJi6dq1EwYDd3iP1p8GZtcUTECMPYvTaeBFm83XBxP5WcfbqrEZN6PV",
  "key25": "5A2cFL4eXtzHiPcZya8JxPRgD3SmsW7dujoAH77mfqCg6y5zskDpZqCJdhwFJ1EtEmuCvP215wPumJvsr2xmcoRg",
  "key26": "3YKctQHykNufN2zo3LJPeNwNr7z6pLmx7vWuPAq9EakVNqDT8Wq8pPgbC5oPiPCCaUsD81EZEAz4YCVRcY6FhkJD",
  "key27": "48fa2eURQWBKRGgNSFhdUtxKSe2s99i3NZ6Sp8QNX6PC15ft7G7dko7Tp2w5PGet6qRnJgeBYF4Kr7u3oRJa37pe",
  "key28": "BtWHLF3FsetFTqFSSC9pqf4BF7ZYYngnhZPuMYTLQYY8UD3J5rFHz1i9NBAbkdn6Mn6uBE1HpFMaikhigNnGoCj",
  "key29": "4yhrKviqGsN9Xn3hiX8tiya4R8v9uh3R3Mi2akBMNK3CRZ7MzKMg2GjgKa5HGRrgenKMo31pUgayLr2N9G8vE5eh",
  "key30": "5HJhuCYxNSWZ6VJjU9NbwR1PNjj4jkH8wGZMLvc1FTX8Ln9sGLPhFMvgdqgx4ZehpSyAudhBW9PG5a9ND154Qnwq",
  "key31": "3moe4FsApsvqfWXsozQTRbPmhZNcFB1knny7juxVNUedoVkpxJziYFMCamBdCmy2EHZejwJfF7VkT2qrP54vrv2G",
  "key32": "4s9HrsCfJmhvTnuFhXr3uHrDHXcQ4favQTVtPCMvjwxmggMmtfcAPAo46GMuVwSeUSY2xoVjrTA2TtFbhUaPjK2Z",
  "key33": "4t5gnKmFs3Ewq6HD1Twnj6x5TdD6a9Rwca9BqaykQspiUKBqcrm6kVnaFr9RV5de23s7hc1QcEkHTUGgZqhuteBq",
  "key34": "5nw8ncSqwCDABhRhzbAuEByXxpifLPr56CePLdwVnxAwrsBkS3cCjpQSJJ7SG3DPkr6QMMzLziwaX4QF4UfC1FWe",
  "key35": "4dKy56S2EyTtwkQojeZqeSBBfCEJbcC2wk3R4yhBys23WKG3zvTuKbrJxwnQdLThELidY7rZLmkjQMaoBBMZ97dT",
  "key36": "45FxhR45Wd1gtMX42k8Fw4T1kurkFD5XYLC3rLrB8eZLwkhowf4bhpS9JG39oq1FbjViaaAjZErq3xa625vVeVya",
  "key37": "2JjqRBq8bHV41RLDoQhSB1ebWHhR2kZDdbTm1wRtZ7VqJYW4j77Ki244xEpeiPeni4Whw51d2to9eU1HcoKEgXGc",
  "key38": "2H3d3Y1DSVQDUatyVuGzn1jdvxKBGPSf6YBVBEsPgrh8NBP4u1PnQnmSga9SU1KAfZr1vAkLGgJWkoB5q8Rs8LAi",
  "key39": "5LvCCmTNw8yCuLNd74krYe9QrBm4fRdZiBDUaZkbtH82TeCC4KNn4J8pNSV7uHZexBrryKDTb3SakgLGA5EHs2FJ",
  "key40": "22gjGGqdgX3C5d69JiRJJQYBszXFftevnpPYaEexfWZLFSPP8m3zpBYxQJCDtgayzAroWQfwoz9uoPTx8s9Bn3U8",
  "key41": "554JyEDw7GuG3F3Q2nKSX5jTwzyu1F5RKKBVg9NwhCe2pXkvuJGbsqenXLS53ghtRjHGSJytYDeYMF6XTtqPjHPw"
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
