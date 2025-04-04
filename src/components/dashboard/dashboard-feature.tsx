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
    "3Mu4Kbnv92iwSLaAizQriF3wjbq5t9PhtKEVSh3GkZ1HdsRuAPzM4uyCx6KpHsaWnMTqCgKqce2cMkrunnuTLroP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHiedPvx8swDAKJXXiV6YYc3knZVCYy3MVnojVkMHbk1U7L1Esfs7iEjvUCBZRujit2ekVGzcjuYYjg5SFvhVeT",
  "key1": "maEBxA3VutMskGGjq4a8k6uRDCdnRB2AX937kyBb5Wr9Kna3RwnAqzkK6sLMKSq1hDdhJe1Sjj4zzV7akwUfgFK",
  "key2": "2zyV4HuwzmtEGYHKFcMr3fWNBopqaVavVba9qEMQ29BbtVsn7HEvUfkTYQmX69SVMXmm9tJd3bQvZEoKFb5TQUDc",
  "key3": "33ZYacq6ZKw8tBGbEC5PRQ49qctsPChMhbCKeuxiumjmyUyDpnoCuESCyXXZCBZFVtGDtaDWmnBqcphoHQnCruuh",
  "key4": "oWZcmsJ9DmP1hEKocH4SBN3YYJVeP79MGCU13cBLyEmXMZD9JAjVijNHSg4RJD9wqoKjWZGcgxg5gFU6PYcEV3D",
  "key5": "5Vy9miVptQwrEnfd6zpUYtbqMdpUtCGAP44vAPgHmtKncWKumdhCQGQjja41zbRfhkpovADpxwstkwAtULXnddyg",
  "key6": "4dLuaWRUHaQz46KhB1BVY7pjofFYtMgUQGDYrSbUanfiQZcNVph5gSMUtgx5QdTYDhUuvSQt9JQeH2gF32qLzKUM",
  "key7": "zKM3jucMKzmU2LfoLEyczKVuXAdwpuaC3UfRdR4DPuM36rxTjqqNgjc7fDgcvZTiTbUqx2KFk8pQQpvx77obCoQ",
  "key8": "2nbuPLTuR5zgfmNvvL6FEtBQjM22LAeQW6GGSrtccgQ45KyzonwqvMAs5zuREUhGhRwmzm4X2FB4WwGQ5JNWWt9",
  "key9": "WDoBgv4Cr3oPpSZGxmqWVnmuSC91KmNA8ceq8aSQhhQ7voVBEjkFQj5pVLMAFh79vRYGCz825AuuNm2Mr7Lpdr9",
  "key10": "3PCt4BTuXHiEmqymv3ShfPDwZJcmKchEPrK8XTzo2V4HkeLBknJ2V5JN2jLXvU1t81kJ2TGRnNfJaVPM8s5jVfrs",
  "key11": "2TzYH4ikyNm59Rnq7PuSC7YhiysEB25NXLogRScpDz5AgpyCsfzh9vDCaXLf2UderuMNinat83e6jJXBsCE3Y7RE",
  "key12": "3BCWT2iPmUP2RZqGvxb47YJkqwDBnMBDLnF2duiN9dS8GKcBsdyogAaPLeEB5LK5GywUnUfqkBUKTcVPCDhsCv2Z",
  "key13": "597Xe12J8478AupzNxCkpnfRiBGMRr9PikaBwBhVTZHzcWM8pLdx4pCvRDmd2EvqPaXinXbMUtTKjjacdYdJLtpD",
  "key14": "2Px4bGmXNMa9SoAkxKfMvnQ4yWmVGhtBECvHTDnFZfuS8GqRpUPDrCeVxCWYv4xgjjUg6Mr7KogAEKpGvx2bsSTR",
  "key15": "598vsnwE8w4ooksaA6nrSAWwQPb4n57WYHYT4rNtgELvQQN24HBjo4kAGifu5Fp1zMKWYhxndNXrPKjdS5SxPa7e",
  "key16": "KmAkhDAxrK7smrENAkMV7fsK7vchPLxn1Yyvokxodio7TkmDs2HgUyoaWuExo2uuXv3eVCxgjUTYmdtVPoKVsCj",
  "key17": "5jjyscAiiAaCW1M3MxjKxJUxUBtFNEFz5hCZA3JgdFJZhTPRaN38XA6JkEyqNPfGrYygQhshDYA6K1961WWjeRFC",
  "key18": "bmGbDmqQ2imehdVRzvZwv6iPWGw6Y7VCnJswXECawSZbjw1jU2bns9RysoCxKm6zLH7X96mmXgoocLys6L136W9",
  "key19": "5zFWHLFsVen8LuKUAbPNLiUfwuZu7jRtRp34JiFLvcnhTXEpuQMSejhPqoDvt2ysvE4y5FpxzG496v8tXMdn1D8R",
  "key20": "4aN3oxiS9dWifx1JYmcHdS8j6TikcGuZyhS76SrMU3cNnzM49RWnFtbiLhrtifnxVefQFwk2FNopqdGbju5z1k5w",
  "key21": "3c6gVCDyscJ3o7Qi65hSeeX6iQ5i6x94UY5F2Sov9LHUCbnYWnNrfLtdTaHnAtV22qD3wqUgE63GoHVKq5iwMuHK",
  "key22": "2WsxUKnARxoQykT5XcgRu1zEMWCxueqRnSZbQR9sFwXwVaun1gtzpqWLN1rkB2E4KL4gBBBwKL5Qg4Aq4dmgEGVE",
  "key23": "43QmU4unq3HyYg7nHkysDAaMB5M8mtZttY2zLEvQRDuGM9PuMBC5Vg2GjELq3Vimsbaw844VW32X4iFWG3abneJQ",
  "key24": "4SjaQCpCBX5RJfDafhhi8TvjWeqzqahLasZZqQnechYwrfBYW8fpNoqHzJwnaRFZqQUyTGFjHqtHmnBZAjtMmT5h",
  "key25": "5wGFWdqoQpz8QvsfvJJwXj7LFfHJDvenfmSQBcxvVjLof7GvX7bTHciXWLQ1SYU4oVeS5R9SpaGRKKTS9nAECA28",
  "key26": "2Toxpejyt1UaeCNs4F8ec4E8TGFqbbVg6p4yYFw4SmvAK1Ua8jGePdvYazvcVr5N4gKaeasMaKHNo93cHdSnTkNv",
  "key27": "5EvbuviARw8c2pYNcSdKzkdFh4dAZex6nbo2b7oBFocCHfKPTf4RzY9bqdHKAZcyqzpHWQRvWH43JZRztRh74Cgt"
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
