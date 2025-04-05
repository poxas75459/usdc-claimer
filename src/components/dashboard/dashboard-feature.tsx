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
    "3pAamfmmeTdE4aMSP6bk2FU1WRFL9RAGyVTicmgVrAXyjXGmAWKNwRXqDjWGs2aqQ3QTBrCFdM5bvhmDy4THPRrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qGzAMAQGEkMJJgzyPLo7TZKQpWKV7JeNwLxgaDHorNZGfiivA7GvL8W9DZcSzNNB9qfJq2JeiLngrpu3BodSFx2",
  "key1": "3NrxkLF4WCN9HT5jGHBDTFQNvDQMoNCgf1XFAxNsrhWDQLnD3EV6tLjhUUTd4zgJLy7k7qj6i65MUHjX3CBgtVta",
  "key2": "56rF4yGam3rkqs1G2wAZL1jMP9RdiV8teV6KDLzZPyEZCxztE9Wej3d8YMp3rWYqq51R7gwdK1B7J1Qzk7WxmF7G",
  "key3": "4QwDsmjcRnAqrMzYFxVAonqNQQe5LZ7kM3tfMyv3W6hCqrogS1KSg3CVQS5Geqd7du7ivm5gw5rrxwfZWieo83B1",
  "key4": "5pADZQj1MLVvqMDeVFSXS4BNhdCD5QgjBv1KPqPSFRcSkTBQqbnmkZP5rMqzqC3s54eWA7zhbvJWPbrM9myNrzxv",
  "key5": "45NfhDBdDLM9RcroyxCdnNLUs2VH5rjCTUdyhmchGARWtGGYUzhDdsYoonZjoxU5m4rCgqTqaTdGpQcp5Cackub6",
  "key6": "59BmM3stBktjRQzhvVXn3QjLgEk2K6cunvKX7puCzQ8LuCueZopRqTuJ1JaUk34uZckJsmMkmmZUJjZ2wa74rSM4",
  "key7": "48eABcv9RHzfMUBEWtySaSZTkztLxV7svhBgeXpTcXM2KTBJCcuhoU5MqhMVShp28vpc7NREN6JyjsVGB6dfQ2DF",
  "key8": "3W5iXkr25pn1TUJppoAuPFETT4i5JZFy2F4LJxrQ4YxXkPerruekH3cwiSR89oPjZFiCjzDTXrsexFXRL73hpE5z",
  "key9": "2QTvDNQRCNDKhMTytkmxv9eLF3jA6MSp1ajPzCP3qqVTPjpjNQeRwKUzrer4iCo8PDehf2r7abYFJi9M5wyuocQw",
  "key10": "jaoX4CwGQK2nm9BLYdA38DiNNmE2qrypspDWtQ3yhpgkUTvhHF6X84uU5wcF4MF4mwTDx28Jbj8F2f7kMhvX9AH",
  "key11": "4dzB9zLBh1yJeDzLZzKSx5WZF96yRXuar9KkmypNwrcmzWuPhY7g5uX5Zau5Kg3DNs8AQdqDqi2vF6GukXxonMWr",
  "key12": "4UDbhvNAZrK6isrpJeVoKe5scftPGtyW55k8rAnxnZ5zvsQMt1Jf4jNj6fbYRqWP4F311QHFR2Uf1MME3YkXWzLp",
  "key13": "5xFTZDoVxbiTSmQrh4nWTrxWnwY1Rf8L8GxTSzNneiRA5DQxWhxswk2PupkVnuarQdPCLdiC2Ps3DzfA6atQ4ysp",
  "key14": "3dZ2AzAWMaR4Tdd3HJMa4g4EhmiGQpmtkMa9VsRJ14kjLFoFAA7kzoQF6VPsefsC1eq89MATAeF4qVmbEFG74Eyk",
  "key15": "2WTpkW8stgYwYpVaFv7u4uDdMGh21LAZd6Y79KN7h5Za6PFpj2Bue9rTaKJZoRn5AhoLmdxcMdMpmPijYYda2SZ3",
  "key16": "5jguGgbMzHnDErEkrpL5xr7dSkiH9GTd1RARBnCX8cmHhyvqU9fjSgNLyLd9PibiHFAgnR4DuZmtE68ZDEZ4GNtq",
  "key17": "5HAGnawWqTGEa3FBKQbkaoVyMsb1WzW9ig1ePBgQgpuSexYpkJy5M5UeY2uajHoHz7E8enjQ3z9iC7B4RQaQBQkK",
  "key18": "4VQeKZVT2Xw6yEA7PbPv2kBh8QTVkWbgmmxZEakpum6U7cHWjaxF2x3R2DnJENfNyz4TrmLtCknpXyMJYUWvcpGr",
  "key19": "3gQf2qz82Ma95sdanFk1tVG8VM8GihWzH3p9mMCf9MPUJ3jBao3pjznuGmB5VWuhGC6NaSA1Tzp53KBXWELfRiaV",
  "key20": "54DKewHnj9Z2ESzmksk8y8XatLFkgT8dnqNJ27ePYAa5N6jvPSXYFdDYYgUgdmH9msZR9XPK5wEqVNULeMFS6B95",
  "key21": "62sMQ66MP3rkHBWCDJP52FQEYfzjNB27Qp2vMhn717VUjiR4JP662RyCk5cax5zoZeGQoN8pjMJUmjyQipin5y9t",
  "key22": "rmYVEhBNWd5Jzbb4htw1AFosRJPp4EDo5x1SytkPS8wqkxAyQCNVWixQn2K9oRC9U3z3rXMU63SGtGamcCBUpz1",
  "key23": "3CgdH7L6v3FFzTHCKrVchbKgponsXDt7fHQ34A8aK1dRzizUs3MhfTkNTrm2H24UVYBghD2fPgmfaqKreHxdoSNy",
  "key24": "2y6PWeynMT4PEjzUryBojykxe3CsDDXZ5ubczrF6kDJyKUxCADj89i7Vn2KqJJJFfMAVZTEsTHgpjk7TmKyCKWRo",
  "key25": "2ujFp9jXHL75U9yWA1sQ5XmG2BevhiMhNFxbJMMyke4fh7FaxUT5mkuzc9DX5eNRFima6Z3CgzgV1AYg4s8wQEP3",
  "key26": "5uutCJrCzNZtLLAofZsSfNUT5Us3DGYbHWGxu3ucYwn9ejaQKH9qLpdHNRggtpQxS6kYcUmnbDYgYzrXnK7wufPV",
  "key27": "2rU9SCd43BdygRC9bjJrvTo7e7BcuX3wiSs88RNxLVdbffFbKcaa4fH32bNn1nQS26bhtZmu6Hhv9kXJXzf69mAe",
  "key28": "4DVLjtimtcSUNQp98sA6qfcBpNLHEq1T7HU59cT2GcuJEoK84AhPzKKGK23oJ8fGnwbCmQRCHbHFg9BBZPgbcJfD",
  "key29": "5CFTp2jvxx7Gi2hcpsMBriaBmrKijbanzUrsiodm2YtDPdjYt2VH41qx8tBL6CKxL6wZUTLk3kXcsMsCi12PvtXq",
  "key30": "38Boeu5JayFynHZsqptVr2EA9rFA5UPy5ZzmmEyDe2GCKHPRZaaMb6VLhnoTWeB26zE1XPJ6zd9ajHRhQcRFFw2C",
  "key31": "2zsdfQKdtwRrbCQbAdLKNm8icu7BHNd8HvzJpRAFR1VWVbEokdLDYZEdPW6GawVRSt1JTtvq7XUykS41f2P9zDp1",
  "key32": "4UGdp2pazaSACM8Vawv7kps5C47KqhcuTnorPveEKAzRbih954YowFtgpqJBEFZYhdvV7MT6Tj3zrxyJvDpS1tAD",
  "key33": "CEgA1sXXZmXdEYBQuZpMzS3KcfSFLzcsR3wZXVq8KE1JdzJvHXxJqrjXrpP3grKvbeSd6qMKd7ULNh3dGXpyxqR",
  "key34": "jybNN718BKaLBCuS9xUfFQ4EPKihfzypUSggEQvaiTnq1dqvajPZQWemDjmGeUo1KNXqiyfkKjGKjP2b43byTwi",
  "key35": "4e4LrirJz2qJUGs47MbzyGQSsFpLidXwYZy8DJdKKihR2cKrsamNXPJNL7F6CkYE4ZV4SFL4cPyjPosPjQQHTtyp",
  "key36": "5XiESNVbz8sHi3hUap8PRk8w5TiutDdVQ5Cj9CEgU7SYcN5FWr43iUHS7pPFAqXfpPHfToYZWSMsUuRMS1LkuCgg",
  "key37": "ANbpxFShUsoqi5gtx9opQ6LEXvE1U4Th7xYSFZ6Y72kzXmeX9WYtD5QYG6u48xzSiwpq4xXUnmQdoGCpzF2arWn",
  "key38": "ALmmLSkJVkUWirTyKeRftCViaj1TbCSy2YMXiuBN3oBPRnwLWG3WCUbEUD15NTyb5gunNe5JZEpG2zSueCKP5CJ",
  "key39": "4hPgCU19pfH6UV3DAfXZmVCbsb4WrA2Wiv4KsZPAa5bWxKVdXi7JW523w2YYGy18L2znry134Htf5Ww8fG2C1g5f",
  "key40": "2XQpLRVBicE9jWrwFxmwZf7iQy4XH31myTbBSskkVzSNoapXR1zJQFFriHdHa2KPV1KQ6yCSukQjwL85TC7157Nr",
  "key41": "4J22sT6ghaDwRfX4mroSuhzTQNXYmhy9mjD8ewoNP2mPfmqNuEkRNEAiqs4QxpH7kLkwVx2XRps7BxESpiZsNPKV",
  "key42": "5bmS6YXT2eHPtFNcgSw6Cw9pddDv8r82HNagubybQ19JTQkE7oj1nbbTmWtz9p4bQ7Rm25poAtZDjNwSwmprrryD",
  "key43": "4gwpQN37Gkob8AqvM1QGcj2HEAZZWYprpr97SbtdvZyoz2cf7dD8PJVDVCYjp5iXEYfcDmGxAff1CdHqyezxLWZz",
  "key44": "3SguM1ueRwBoBvmUU2v3uV52jd2sYWZS6xWi2prgZZSqVk81DedREX4CK6tpr3B7WvmjytNyNYLakfiBWaxAF3hG",
  "key45": "4JR1fPMdGFHtCWWi3FVaHiskCe7Dea6n4w4BEwbj3kRkVcjaHyGG2P5AG3V8u1AenLvYg9VUxjMfQ1M4qURYt5an",
  "key46": "5VWD7ELVcvmyWUwGfxFkot12yjoSoUfRBQAbwTVNxoo4AHKPCGQFMWQKLPf1mDLb83DfgeHHs4AscFqPJnk46wWA",
  "key47": "3WWXZhg2cZgPjeEUKcX5eHwr4CyPNstcJY9XRj61R85NDZ1JeXEZWX5G6zfbhbxfayF8ehxwZ5Q2ZMjhqNGB9CyB",
  "key48": "4doN1bZaZZooQZwTqcV1nS1tiXbyv7an1AqAN2MKsfcwxkBeWUgjBkJWfiMBdmDNmJCUugjcF1uo4q27Y1HDxCib",
  "key49": "CEPzJJWpsQTicKMJSoFJUj78wAoQjSAAMeVgyNmp4CErGjwniRq6gdNiSKF7ZvyPjTsJkWa1ZHVDsM5RC81hwkv"
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
