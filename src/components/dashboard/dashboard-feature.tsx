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
    "F65iG25x6c53pP5BniwbveZJ2yWD5Leu1Jj7sH2ijKMnjQM6dpKdmpRup7csKVKSa272HaWP2agu2xhaRraX14t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAJyGkoCEqHschMYr6dek4qKzS7LeDtmFo37RcPwUnpbwfK3EwGEgPRLshak4ozTLdHRMztxRdKATobSJGARoDM",
  "key1": "4hBa8VFL6BjXreD9mTRrzKztZkHP2auFhu24oDizfK37kE6CpWignR9or6FJmFGgRBFsehSbhfvK7mBXDbUbhrcn",
  "key2": "ZcScCf3pobaUByTGJnYnZbFF5zrJVxLASzW5Lo36D9EHWAj4nXacQ5LJiXt5bnaqt4BAiMDZRkF62VEdMwLaRV8",
  "key3": "4ktufByrmxM1cLZHFoXYkcrGqLuZMzh94S2gXpYLEr4uTgCCQGmNn4fAHiLReafJX1dnTgKoN2JhNYrohbgM9U4u",
  "key4": "J8RSFj9TSnCnDP4kn4EvKMxTVDYGgCU9gvfNPNFnGemcKE9YVb4bfPiHM2eiXTJhn1zoHMgACeH4jY7TvePTgct",
  "key5": "53swp5E3KKGMxSdvMuWiCULtb3qegCTgvmsZ4Se5kuSPjw4xaZZxVY4hT5Z1D4DFPbMvuxc7rodpwHkjGUzWFUjx",
  "key6": "EKcf2evqGAUmBKDcfCi2XH6R4tuX82kdbPG3pGpK5bDhY84foMjoLwxGBupnFBJsB6v9pam9XPRnfpfW2FRP2CD",
  "key7": "2P1tR51tsc2vg8ugryXLgCbanPRGew4unExGYGhE4AznfHKU3djdJDtZLWe6NEYPSb1D2EtgQWFbXCQKBiPyYH1U",
  "key8": "3TSwNi221PABnbcHgFjgmSjdKGqxieFCxfEg7oTTuPCpx1S3fZx69Fb8DpmARzjCRN42a7rBicLPiSmPvqr8DFjh",
  "key9": "3h5Yaq85a9V4NVDdx1NB3vHJ2mqRXjF3T5jrBbve6ySNWopPikNJDYtVfK5HLggTMwK4k5ZugTdqYaLxEXBMqhFa",
  "key10": "3Wa5EvJ8dQom6WWKzkWNELCeHEhferNaZhpH49esSXTGbn7NSMzbZjiBJRysXX3D4212HWbem8aKQ2vERkgPyfXt",
  "key11": "2An6Suq2WCQ72CUdysQPBRxHvoyains41RhFMsJcgWDkQ7dauXff7MbRza4dYUUiTN4czG2o8c6veVrQhdCJC1fa",
  "key12": "2GChnhvWmjgCAWyR2KoYSCybJMEhhfC4hMFU5Q1xuapYGocMj6UfGnKCG4HTvMyS6GiJvCAVnZ8cS1xEhqgzpMxj",
  "key13": "j9QrbC5p2jfMSB2AzpR5dYcxskXVyhsgMcpRXaz5D8yJgSVMywGJy6hCK7X1AoTJcy1Au7zB4fiF7ceYUNX8FXK",
  "key14": "4pBCGNAF8AV2freepvSva62AYMKimRW2nrgLj5c7m3sswR7NoFrgtYm4QB3jq2T2TEKweqPqxGx46TFi8325Jur3",
  "key15": "TcMCx9uqQjrX2xinMwYhzmLUgmYkaYj3hzp5uzuTVZy3BbcQeiK1sewuz3FSnA8E8vd7izvSQffFcFgGN6eyVpk",
  "key16": "2BixtacGMuf94by5hkz747TQQswWLzi95pPJckSQ2q9qTDDHDaHq1gKu3WAcLrkKVLiyTquDrQMCb6BqdyAjUnCj",
  "key17": "4XSEYwKt8N2CxUGmcsPJPBecEBP3n6w12ASG6wn1pyKuyfHxCNZGakqRFhDWTe43SKbfg9aatnGxt9e5wZbo5agr",
  "key18": "uKFzXvBTuZdFChw1nMvh5mTxHpBXPKi3yLyArgHZhWRErUdmWYufGxYs5L8s1v58s1b98mhPX7NrTiy38QsoYrk",
  "key19": "3Dp2sTzpkdT7mk2BzdKbxzKJ6EF2HUPXjgkKnNxk4jcqjPe6tus1F39U87S7c8ab19R9H8j2cygXcRpR6N88V5AZ",
  "key20": "2CeqfQT9Nh2yMLn4aPTLcHHQDsNmgEfNc72DYrfQk7cL5T712bZVc1CFhsokBwXAqChygFiXm69BevVtdEzRrmbg",
  "key21": "4uMJuBuobKQCMi8kKVoPJrGFiiCpqwA9VN3QeMfzPth3WtCQb4sZJ3vuxWSHwPv243jK3TKh8dZEsuskTXD6EkJX",
  "key22": "2pCi4swRHsb9a9hmQjtZgN6zMfjdMFbdAg7jpeCBB77eMum92bTGELDzctMMvyMvJSpvd46sA1N4bgcoyDpqytz1",
  "key23": "4Y3v8rmmV4hga492vGFyUWKwzJxpCWmpXXfeNDRRgskPXJ8SCQCiEk8LrdJRaAytdRNrav3PQyNmRverf8WX4NEM",
  "key24": "3iFqJ8B7Ked9tNNyUoecT73P5TVaFLKAyjWffVzqogTE5omJozeoyxtK3qQPRdDi24DjLWq2ViQ2JfADQwBtEPjd",
  "key25": "CXQ58d4jaftJ8yA2JtbF1fvr72VP463BndKjh3mGXvZLVVuhdiMjs3nX35Vc4FXbW5xAG9ygDB6Pm7zgRMZaGHg",
  "key26": "4jKsKdkRdraHn478RxdrFstEubdFpNAUkJZCevPL9vyf9EPMigzN2C9YT7mzCmfrQmBjaxnQP83UBrkBPyFSWVzZ",
  "key27": "2aY9mrLcLopSKFc6MMbybTWzVy984m3zP99urn9ZNng2TCWe1XcFUujVGwGLQVkDHbG3rvtWPk9UD4EAPQxx8ow5",
  "key28": "4uwTcr38EHrwsKpHtKgKLRBeQrwPu5z4YytT8Tcr8aqSRna8uD7PS1cFhVBEwfKpz5hRJuMBZ4jNjGL72Aeh3h4s",
  "key29": "5rejCXm59NC4DWJ8H939yGEtYLGzMcFyrzqEnS33yv5H74saRzUXKAjBAhBLMMRK38fTEYtzxL3bDL4YiQL1Qvdz",
  "key30": "5TBn4gteBMfL7wKrDWQBkzRPhJUB8TPwJ76Pk5cWih5canDYVNx5ss6jmHyPbrVZW448MnMEeTRiSyUMVjEYQPAY",
  "key31": "61ejxeAceXmr72PcvpeaSscgoNqwsDtE14BEgrN9t2Hagcx8nDvs8igB2FRK4jtJ6t2fVBroDwra7BfQu6pLGf32",
  "key32": "5jFSSkjX5LKDQemZmnz2KciVR2iTtxKLESWiJNqrCYSQVwj64kJkkS6pYni6Wym83w5nmkgL6xXTASUWju7VQRZh",
  "key33": "3tZH7USG71jtyQmoVA5hxGGJF4F3rqLXtySdkzxpz3L3wmywp1Zc74AEUAAZAzH9VXzQ46m5xUrktYhZVZB1hyd6",
  "key34": "3dSfaHmXor6yTcS7fhSFuQaYsEhZFqg3dA8qsMNSrr1yiFUrx2TPHKDVt2SciUrxi3D9xDutojDgSfmhVqD5b1LH",
  "key35": "3SFLrbA7SPs3u9cbL9ERPCcNU9GVFLmRu7W4LQZd3CceiHNchgsbQqpTgdF8FNnKyyeBU1jJGDxjJUz27CpaS82K",
  "key36": "2QyBi8eMe7wnqWz2Nf7pAKpsxWdmfBS5DH28ZE9MKwo6gENeaQoiU7wHpYKfHBcmkqMdCFaVZFAS9JzVrRUskoHj"
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
