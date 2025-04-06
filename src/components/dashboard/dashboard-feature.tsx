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
    "4Q1anKQTMxbuBBt6saPcnBamAN1GXdXkAGE5DggVhpnVnJezET5DPTLUCff7BtVUdPFdQyEepWzjPrmGS83sAMJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDf5Nk5av1tevacRbGDQ6NuVLxGevkiwfUd7KgM4wpESV7bdJT8Gcq9tZur1ve39kT1R9BnVmza8B74w2kufKBz",
  "key1": "4p1gJV5EwzQVeac8zuZyGLXoBJFft6denp5yhj8tqv7YKFF8Vs8HJo6aPszbfqFq6VdAKfkTdSzSHKDFQPGHGchz",
  "key2": "4qi9da9Wtu2Po5PYGoV5hxvMQt8M16y8sY1a91SJGrSWBNEfsDw3rqGU3K4DqHuWQWLw9Pqd4pxezvfEZH7Kgbsb",
  "key3": "2D2xDogXid9BR9cCT2RP4E31byX64hd91VdjAhwAkx4uTvPZGuBApdSGDjR2V2uNv2wT4WaRy8JnfJAo4vn3VGtC",
  "key4": "4Hun7nX8LbPxwNA7XibwJ4SeUCyx3HPWQZWveGbi8781PoT8CNqFjDDzfmSjRu2s8bn4iMRDjvMLnbsDQ3DWWFQd",
  "key5": "4icPiWy9wapK4MWpzKUMX83NmAckadVbYY1gJtiaySkuiC1tPwiRSWxWLsjtbP8PNRJZPJdhVkCUnudvVqYqdKE5",
  "key6": "56G4h1qLbNntdPLxvDWFQMX9MfPsbhdafBKERBVPoSmJUFwxpiKk9oG9UbtbZcq94TApiRSir9Xt4BAmgFY9jiys",
  "key7": "5YWcg4vNdGKUB3chQDWCzmzWKAyRGmCkvhwCfCfrVPWYu8D5pGoUc9HSwQmNUevQh8JXPtv4nYBEqhXEUsDRXpBw",
  "key8": "3sNJq4VGRdhk9NrPpTMD9xkzC1UAjajtvJhZFBp8EWaW8gV75sYX991fjnEVLfhLh4z97TkDnikk6KWKwtvJ9iLp",
  "key9": "32XYM9VE2gnYGno5sMdgr7ewj9DxNBtud6ReKmyNpy9oitg2gCUDxX5SkoGvy48ShiugbwkhgZJ9CtSobBJyVtdx",
  "key10": "4fXAUpeKkGuf8WSBEZobkeHm4GQfqs2qJ7Sz5xGgEotJ2RyfdeFi7CNohjq3uSLTSDHM411heYDSU6ckkWHoenYx",
  "key11": "2t1dV7LrsGPUHCcJHKwiey6kQjoT95yeQ1hV5ccAhYEZgYKfi52GRsofCbSANnk8TmthPGbUMffH6pnth71z9dPb",
  "key12": "4mKpPGqM5qPzb1gibGRT9xDiy7Eq1wh69S13gfsh8hYpLJ87YhhGraG1WbobpTnjav9eXZwTF9D4VaKbBrQrdHa5",
  "key13": "4L3v9SptiqdY543qTKz113gK7WvpRvPK393479Hp3NYSAddFw6ghtjTZBYWGn3sk6ukNMLVff7L6FuoKEk15xohm",
  "key14": "3h6gwcH2UGUPP16C1nR92K4P1fFGijzA8khmC9tRYWUWoVrD8zoeqm6Uz5P7uERKRtSfakyciMKehdMmVSAV5xFb",
  "key15": "5F5q3ukx2b23ndfF7jCZGNon9RFJWqg7jHTbPPZzHuvLg4tceop1VyE2QrmfxPmnJAhCyb7GmkEFXcuGrwzxg21D",
  "key16": "LohwvZo9UtsQBhjDPnW4NuAJPsg9EeW3kT8Vva5wu1uVJNozysWvfMYSG8QrgZuACXsNoQqm2aYL8xWVnwAJWry",
  "key17": "3GGvNmNkWzDTXab88vteQCqpHiGRe3PjRgDX7GPHEsF4waLUpQGrwiGwZyS6SZJgiiT2aZCGVDMDGTorgSSWfAsH",
  "key18": "y3vDriNxMa772JPYc7BZhvnj1nHoBcfDdH3mRyKs2mEezhkZVBuiMuuhFuDgJaNFGvEJHkMwCfPcPEnjPsXJGK8",
  "key19": "4vZtKRa3WbMRXkwPmN8d1EE3C93ctAvRK1zRa5dVKgvrEyeRn52vhhaNi2t3d7KwauS1Wdrybjxvr6tx1fGuk95B",
  "key20": "5854ep49FbxdVa6uv91nyUs5f3Q8L3T3fKgLsiSuaYsoknSf1Cza9UTHuqY5CtGJycRziTuJ45gVLGZ4jKE4J4LY",
  "key21": "539q2VyfgP3b33ncxQwgSP2pSCKXqEghMgAcKLBiXRwbSrrehpeKVPekngD8KqzFaKKtbZ9caXXr9pXxS7aY8HDJ",
  "key22": "nRZAfZgeCpnbsdMzw3E4uFD6ejPTeLLBVcsV8wVr84zPPsBN8iQfM5e6VokciNtpnvHGQeeQkbLfoQH4QMawpQX",
  "key23": "2XD4kvGGNV5QToTgA9azuE6NxyRTbLQycc9cbKXqJbC2fQztJVFx2S5QMndc3TLyzkt8NPfeqnG8LFD85eabQwb7",
  "key24": "iZRtcDyAG9fG2JCH4zbE7FpCfDhbSBeSkomHvcri4CPQeRWtcuhPCnNSfUm1J39XiTgoE5TaGJC8qgZtag74aDR"
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
