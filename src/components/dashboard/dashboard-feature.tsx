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
    "58roDTbYmyF1pmcok7wbtyDQmnSeW9MK43Th8bhtxWxWEZyWpUW1jUFgUYuoeEaTcyMGcn8EVyiQLmeePjashLET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddg9w5U3eGX4sSEQyRWSRoaqQyf7hBQhVTp7DxGXrPtxRqr26y3d7LsL2rjQmcmsDKhAXmZQDMnmnn4hhp48rb7",
  "key1": "5wZkC27oBTMNyUiNtWvftQnkHyEKLzGPRFp7sZLcKt1istEBz39XxiueftmaMd6Dttg9p3H3JFvoACNqugqN61JH",
  "key2": "2Q4K9ivJWVGcBTV1rQ6tc6kYkraGDtyzTA2GtRN4BbMo94qQfifNE8QTdmPnZuVx8sMu1eSJCU3Tn8sEsGJE6xMQ",
  "key3": "3cni8ybLs9pr8szRd88RqNTkGhPoToZZiwLzehxze6JzkJBaLqEYFZgVXF33onyQevnZRt4Kt9fhYoaxLycSVgP4",
  "key4": "4GpRMoTet86irhAZmjsBUQrW8yTWD98qLTehNN9X5KSe8pFmga1SuP4NgDfoq8apSsixK6BNRUAVyruK5kP48sCu",
  "key5": "2TPqCUCTw9y1y7bbJvMeaQCxT5cSms5fDULgJCm9LRoRvGfsjJB1a6GsAVY9Y8GiMgqzXyNbQ3tEZU45vYowxzsa",
  "key6": "2pNrEbQLqygtvScmn4SmgeegDjFUh1ZzSAaLg88wknwCjf7e6wbkndZVTjhqE7BcqMp7jXWjnES7PVWPCqGowTmc",
  "key7": "3wg8LxTZHh4Ue5JLQP83xvi2qPMdadY2Z6jivh5kKDkcRK7BSVUEGc21jefsu52BAVfGufVgKTimsYDvwehCLNK4",
  "key8": "2Gi43MLAoZ31gzXom4qc39PEgsjY13iTNAmbTzC9PUw9zjSZsPoLvMsRKVebmzBesJ4uQTNQmw3VuKhWcDNSEvfh",
  "key9": "5GojRTWucC2bTUijtfL1qX3Y1nQhZZJc8yWD25creNzBf9zYXm9vc2CCvawesyvSPTdrKfc28CcbhpmT42tbwR6f",
  "key10": "2mVgWzzRF2fpALphdg1iFMWGcjYsw84qJbR2Q7Fm9WeHP9ae62m6kj7VRBUEtP39s6orKr76UzRYNRvHHwszBDoJ",
  "key11": "32F99FnCjxahy3jquAMEsUHitAPWG5vqfirZ86wVacnUAdELumadA2Rdw4tvE9sAjBomX4yfeyVy2qMKaPY2Sykh",
  "key12": "24pomXLMbc4H8sa1r8DqBXHXXBEJgQYMakDsgVj8Y9MEEgQewBNd9Lpwtamqq61c47ovEGKJ8UoYyMkpDKGzYSqx",
  "key13": "5PjtNFE9CAhnkxpgKVEek1PuYQYHAAwkxnm6c1F6BM8ecedQ52VZm7UsY3oM6DM2vheMiux9UyJvsVBKHzSi2bxK",
  "key14": "3iy32TUTrmm4RR5eFP9s4J8StHBWTALxHLe7So7H8Zbg1xqdA8Z4LwTQRteKyHhCuRqe5Hkton5sDba4e1hx4oKd",
  "key15": "mwVSgdhQT4KinDPU8hATSE346VJjQZyJqGyn5x6NnCr6KL51X7HpyGzhyBBtUXH6XNLQzgu79P2RxqbiuGShymi",
  "key16": "26YcxfPZ8ShgE23tV9qbQP75sPGKt4fZ2L6w38HJRziMk9G7xjGuFPCBeoHpDVKBVqhSnHvxH1mkubgPLfxoRuRU",
  "key17": "9fY2niB26UAAEnn11SfRzrwCSjKsAjgcaZ7KsA6L3pNXtGZnqvLouQ16qt9QyGjui2CQ2TA9ryVecErKtjJW22t",
  "key18": "4fxSRpx9nEnu6H3K9uBMT1w4Uwv36FZew2gnUTNDJWRd5KjA34EbPssDGGByxvoX7QcJ4HEhosfDTNmdvF4jTzWS",
  "key19": "9TDnp7M4NVdowXajhxLTgqE7ij6FdivNr5nZ4SRd1CcfW385fHqDsMkWB67Yh4NZkna4buLNTBg7DNYBrBXpEGi",
  "key20": "igAPQdLtWi6i3GdavpwdVbPTTJRPfjt7GBt7pLFSuahid55GBzUeS5ZJHAR1cv9isWBQbxCTKqFy6hb6sSJEQhU",
  "key21": "PkCXUEG7Hb3qAzbojGkxk2VGTvTwe1Rv4b8b22sJ2rNXGRRL4rer8vXvFShb5yaVb8zbjaqxXn2AyY7qoWQE3ej",
  "key22": "4BEAyYPzSUTokwhjF1ULMhWASjZxhLrJPj1WZjVaqXxzA8uw9kUGH2cEdRazYpZnbbqrhBh4x2HXUxHXxfyTHwSK",
  "key23": "4knvNJAMT6RgtxxJ7kmdSexizSdfp4enyKSXQAvPwdmtHh5kJzirwUskpBcFPf2XSxmXZVu5A7qt3cg1WmEk3T8W",
  "key24": "2yWamdNWqBvXyS2LmFyYcTsPvyDovcmQCbtd9ChVUANc3mWsCg5mwENtHGN7g9RzMVwpjHBVyUtpYnWfXiATm7gM",
  "key25": "5yEE75muWc2RLJXFHChSKigTDoCddEuap2EoRWniH6fC98UhNSCph6eKWpVbwcXdpEwyxCTypKvVb1Y67MkJByou",
  "key26": "31vpcAvgFG4PFm7fXtmqfyojFUx7Thvzfrfw57rPQ1DG2JhiRC9evYnq5t2osSkRf5vX5Qdm2BUkKNMVaVy6nLn1",
  "key27": "dd966EQsndshEcgF4uRiLPe1b27WGLpTdvymc2zw7LaLfpyThibhqrrpTgfFBiTjTaV2GrUmhrRLErsgbUoakXf",
  "key28": "w5mZB7pie8SV5kZdsf6bVUErDSufgZBCX6gEd32cRnjki8EG9uBb3htYKEyCFpVBGKEAdFti4L2pEx8y22Aj8Q2",
  "key29": "2kMBupjw4uHLWgnMKXWJ7mbAvnqhgLeEyT9sY1zGCMyfxoCFbYbY8Lv1niRz1D2qQJFK6aezYzYTJ8tA8LqsRTfY",
  "key30": "2myj5EeKdmiZWy1UGZKwDhuptmMd2o3xzC8T6YgPy1pGS2EZoQitBPf9KWif3w54BrNRmjUgCGikdtQmZY4YrkFG",
  "key31": "5A9ue9Z3D6svs4WczbdTqvyZADAHGcnr7WNnWaUGTWjhPmscBDVrjgPNR9zt7fMy66cVGMpEE3v8SbwFesxtcCA4",
  "key32": "3ynjh1MeNBZy6Gcv3NqhqEpiegMSM29JPsfH5ittSgtaY97JYxaRr2ReDkxWU6byoQzYeRG5hfR5yJWi57VM85pR"
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
