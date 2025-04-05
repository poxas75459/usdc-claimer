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
    "YBzUkQtPkHNLwWJ35LfecitU3hfDJ9apjDWvnh54NrxJiiKqDXnV8CvHxTrAtmC9TEL963UyqBVqxwBQuyxNFVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyTZsw3yP5WSeaUc3RYPT8TjeCwdvCW6nzZUUJygR5xNcH73arxHrCwseiGbR47vb6BUZqEo6trTAfJnPaKJjVS",
  "key1": "2MGwjH2kjR9o1cA618BaZYoWZUsPQerEAjBS6rHDLBQwwj4XR6hD1qhEYX59P7zZmhMzJVBCj18vzJWppjyn7C2",
  "key2": "56SYhsznEkuN21zUrvBXFGQNAC8RMUaetBcgFv7rA6X4yTeBdhqtCPuHrgmQCJr15yBQhJ2H3BosDxiqsExq9BvV",
  "key3": "3e1io4P2MmSfpYoV3omDrCoVu5v9woJGqyr7z8YNPcGNrEB6XVkw57f7RQ6R72Cyxq5TK9cWraKFHbTCeCxYXpgN",
  "key4": "2jywtTZw4QwoacKZHFYsfHuyKYXcoszoLm9diC1GN8VAhKJjN17ZVpduWwF73bivBCFES156qXGmKjoWhA9ZFr7o",
  "key5": "Z3XvrR5kvCzM5THdBo4J1mmVfbquV5igcM1YvtdBoC5vLMkcN6mGSK7WNdMir9hnrcNkqEKfaWpxDMfaDZsp1Tf",
  "key6": "2pgeYb3RUfcpAPYG8boaaAHRFXx2PGf6iNquX7mZsw4E1VJv6HkagccRVzZMuM1h8Biuak3xQS8HfB4CS2RC3H3v",
  "key7": "3WbCmjjj88ynEqd9hN9nBPwYq1Q1B5RbmhZkjeNfj1Nm1ep5A8Rqvzy5zw7H1Ez2JCbGxovi9oEZrDk9QNtK4PEs",
  "key8": "Hu5VnHAR9GUMMX4NSLVqZQwacca5wYMTwyHkv3x1KXpp3gbdQNcbRCM8djRtxwioCyatEjXpHPCx2ATf34stDPo",
  "key9": "3KfDYfejJMASnPfBWup1rrpSPsZoqMrLwrLTDDp53rGRNRpF4AVzGkwuCe5U8wiVKNN3bgaysBTme7j2RqrBn4Yd",
  "key10": "3pCfw1VCzPuD3CDkf5UuKfTLXSKYgYaQ8RjrzcQ2HiFPZHnTGxUaQm3EJQezEnHktVwUcDZcKomBJjZcwQrzCwhg",
  "key11": "t6NGZFAFYkM48Bs9eikRdHfZ6sYGF7NThq6FGEk6fkgQTNdkewTw4N5jxARHFUosCxLwWBEzzFfoK8yjoJBEoFn",
  "key12": "3v2AeZe129BCfAhdEDkvfgYFws46BF8U6aG2hobykMm8udXp3wCDGgNTZg6XDdEJ9StVyj8qMNm7EZcYFGqzBhKb",
  "key13": "3SNohpT76Ap8MzMMg1DLvTTtwNJPjJzgxNDH4SPqJdXa3Sx5eLyuY8t9LkkyvSXaA7JBek31LtTgRAxgwqjxAw3y",
  "key14": "4qLHGDFXKZ4WTD7vhS1SvpK53zcCKidWDpKLpiAJGMY4AQSH4mvfL5VBfwgy2SrzBFZ1aKptkzXxN56TAbfDWTuz",
  "key15": "5NwrLGJ7A62khRwn7CUJAt6cF9E3KT2y1eH3UY5aAp1faywqGtAnt1x96j8rq7SJHCeeCZ6DVunNeQfXHhWxd8av",
  "key16": "3eTgr7tWKFsoorEHKAgcAZhypUg8ubGke3npoNeJGG7bDbD1tnwFpAN46rBw1ee9Rf2wYsBquYNd61naRwFQ3r1E",
  "key17": "2KUQjobinKCkeLZQUMQiwPAV7xewz1zXdD5ekDFm8a4dnHwdXJaAT2MLh8had6gsbT5nwS9k6Msqi8Kf6spwuGLJ",
  "key18": "3wHYGs6uYNHarxTvzTKRVhysesbGftuy2vpmh3SZKX82L2pSVecHsHh9HmHQguxtzah4rZVhxCntnGh1FFJgMP3E",
  "key19": "2SB15oVsiUeXFcQapoKUBn7W6ocsgPwq6Ry1j67zgU7pqCCgcQqAiPY2kqSmxJJEXgBTyU9qKo8i2tUVfXmrH5V2",
  "key20": "p6X9r3ABMoqfQmSkFgrgAyHjwAMeVhcGyVdmGxKd7j698HBTYjDhNodLL1Tr2A8bXYYxu9iAXTgajdEv7B5ab6u",
  "key21": "37pTPdFX7h1pZfzEHaH6sPjfX91xA6qizLwg1NnMQRr8oMTVbe8sv7pQhZCL3jRjc3VBxrvWF83XDwkgFtsSHrZX",
  "key22": "4H4eAanQSLemZFYYJvJ3rEAkaBC1Zwopx8o2hqTPSWk2t6p9giyGHkNnet5uPPoNf5EFSyMtgWF92MRUZ6j5q2m5",
  "key23": "4A1sNmXbky8T7apiLDD6SPNRx2ZR1qAZzjJukPvB2PRciPJimS5JwijrnwvMiy34FnPt4d9pTaBDAoHq5K58ALxn",
  "key24": "3vRx2TMAtKgY871XEWhxsA9pg2wGHb2CYfbGvrcNq6sJzvW3NxR5qDWtCGwgGoJBSxf3aRfj3sUPre9cwTftMMfW",
  "key25": "2wLCczxhyz4ZEDrDP4377tiffS79f2uUTs1nZfw2U2AazGnFgYhu2iDU3xQjQZqSB73SNn2VD57yos8ZhAS792JH",
  "key26": "2VuqHTwFa9hYipfV2dRF3c5UH3sS3NofNZkQvtNUSJ6jPUVixFjUwCwBmENziwucdDAY27kNGNH4p9JpSRMsCZvB",
  "key27": "39dQcGNRTiHM6WbhL2JfRZnkaSxz4v4CHMV6nQdiARhxfPsYagJCgaSYwVFJVrbyXRWGEFy6G35e3YxWffgDtmjg",
  "key28": "5bzCKM1HbSZgTQ8jHfSC5jw3z5kFEXNpfDKHtCMpRBUHmivtFR8qxawHvVQf5iLvNfnYgsnQX1ow1UG7u1YQzkqm",
  "key29": "5mCPagkPLsKnYMDLxUzrFFdEQsHDhqq7o3fYCkfbbyGK6qc5ec5rErWrZ4M2Kr2niB3sWgtQ9hF1UK2KjidemgVn",
  "key30": "5VFTfwAS62BDqeFuBFvDBmKTjLuLifx5dtC594kJXzc5y7MgU1gRZa6DQwfQ6DJAPirURdfUB6XXdqzZRre4zEQZ",
  "key31": "4dYoPMYG3AKfab8yYXHuvkQFgJMuubkuRP7EJDXSuBVEq2UYhK4C3dggSBX5oLLwv7ZbCJhggk5Ej2FjFfncJtro",
  "key32": "h2A4mtr1AtvWaqFbGJULbAGXJj1cq7omR6z8qLBotNikcEPPSDC6gNqFHfN417s3bANoBoK3DBpjACcxuH8BZEX",
  "key33": "2PWYD1VCo1xGJAc9ANPZmGWKNfbv9mhf2J1wVFprAFpXEN3d1fx9ehnBjSvKQ88EzpE2EwZZgwun6a9RoRiNUQvm",
  "key34": "4QLr7mobGfutrwRYFJKSH21QNvgyqTpvjfRt2zqvsEvcnjUbRKBEWGR3F47VRFByvL7vybUsMirZAEAXhPzPf5Hc",
  "key35": "3DUaEeGHMhHhnHyxrUfDemebfM9MxnYZUjwTPmEyj9zYaYypPBKqd57T9x3wyHajz5i51yWLdhtLPtgcBM424xKn",
  "key36": "61jLi9LsJqc5GszsTWiQrfKL4nKEuTc8sqavrhWrwmBQf2fRNLRLfiJxbreDy1aARpjSXMQ2KWo2kDsAuvpzLA1g",
  "key37": "2WrjoMKzBjhXtuZFcKFtbtJ2Bseo3Ddg8iwz9g3KcmhZHPep7ZziZZtxyFTzRpYGbV6cTDDfWKiFcPPQ4Zqs2Ndf",
  "key38": "2JtsLBtiMkyiRaBaGE1f8fornb5U89dM3UbaSqJxpj6dAM6hK9Hi4PAjsR3PEb3W7kg6G3DWwvvyUMgDUsknVTFC",
  "key39": "2H1bvnK2mY5KT6VNECrnYXmuYm1Q5V7b8MoZcBKHf2kU9XgMvXJD1Uxtk9LQRs2X6Faw1x9sUeDEJQV1VwqChRES",
  "key40": "2MeDVHaYebX59yEyUZDH3twUBitAYzxLR2q9vaxM5N12BpxuXdbDaU7oLk1J7TVyYjnaTkZsyZKoCaQKyGRwA7A5",
  "key41": "5gnyMPTB6rKwhETRYpZDrz9e3YACLWT8XyGitooRxhxfwX4k3UFNq7ecQMQB3Bvq7PFCkrTrXsqG6skEGi4rKzZY",
  "key42": "3om4abF5trVFEws6VQJCYo5pWz5qyzyB89VDfS1BfbCri9AazQRNwon1j1crwpV5yEAe16Fq6t356qk1Z5Ao29Dm",
  "key43": "5k5sRHMPfPfwXV31nvjMkjSpADsWA8HNSF2vN3r2yfSEimYnnvhC8pQXhRks2LkgqAtkwtFtrRrueS59pAMRYtws",
  "key44": "46vNJNEM82zTvVbPoYa5s4iZcyUiNdcNdScVff38wyyS9U7hyb72CbwYaTJDJMhyXnCDicuefpomkfhd6aKceccT",
  "key45": "3msMmoJSu44itdmufPBnxrG4CsJVbRcCT89w5XeMdaUBfyjoovjaTiGR9bsVejDPjgUsiQwmLcK3HbLthdjy5Qk6"
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
