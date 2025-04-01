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
    "y4hjpAPMBjYWUQCYgP4EWuTT92gdwZGJVnwzJSFVAhA37A55n7sMGuUxox2HNncwM7BgteN1W11f3oKyxS1qCYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TKSS9fQ3st28GEkxE4qy4kePbqvymFgRtFefKm8Fw5oY1yZpKpedVcbHZDJGy2PbWPLrfAKRMPtZYfcJYn5ZuX3",
  "key1": "3K8xb9rWoeKeApS5814tHg1oRCxhipsAx2VrUr5FbsJzod32nkbVPpGm1caVzHAAZz9KRaLqoZnqHT5nREV9YXLD",
  "key2": "5Pmya3fsDxYbaFdttUnPGfsmp4AovTe51EgyXLuXoXfnqePhRNRj8GFWUmEeuzz9eseadwK6EZwPo8wJQMbnnWXF",
  "key3": "3LZ4XJ3ZMsgkQTvW3pPpng3WsytTTZztYUv4MjRnhp5jyaPcNGqmyf5KcY933wVqNBaVcWCTU4MNwR7V1w8iTRXh",
  "key4": "5EQFsmZGGwZjjgYm21QcrLgpgudn9kNtgAANVZecGLBC3mvgBCiuHLGQJgapqXRRipF1Z5LRANSJVmsqGkrrueMG",
  "key5": "46zXQTQNG2UpYXkLLbC9UNEvHNqrkdTkjJF2j6w2yMq6m4rVpHxJeDhvJPWCftNyfeP528Dff2mavENrUc7WiA6f",
  "key6": "45nffyGH1C1JpCddZqFTjLj6trVpGhHR8f2KXTA2qigwJBtXRtwPzPpmTgXeGiYtHXdxURnpbpnR6LuBnGFD79y2",
  "key7": "13bV6ZEzUXLiXBjzgG4wZ7iaNrMUazswwdYYxsYDqjNrkANfwiJWFC8Cww71vrEkCpy5q1zpcwfJsttVp5xDxUN",
  "key8": "38g3kFJG6m9UgzVqWX1Yt7vXwYaWuBGD52sK4LZFuHSp9NAujieppUQQhQvCbndrBPkmhgT9dtQyHUU6Pu5N2mg6",
  "key9": "4U4EJB8cETwEZYybKxChXsErxMEX4kYGs39AEMVXUQsnbAr2u1o9ShaMatEYhsNwG94WG2fEGnH7V3N4ELFcvA83",
  "key10": "4USG2imrwzgJqmQxm3Wi87eWCWGLaJJU7vAk8kFom5y7YMessPweBCJ689SdsH8X5frMG7DKThSW8g4pBzdk3XUn",
  "key11": "4Jz73VS8ABrLJJBsNt38b9xBrNTEAhqthNeMAmWUAxfqoUxgbJrGYJ1DVEDA7hxdPmpZTebPb4J84nxmczUmURPv",
  "key12": "3gone5Nt3KhjVPSdEyWCQgeJ2CLNq1fL3pxX7UALQgmVAndBXZyGGvhYdUGobD5mmAUV6qfNbGNKxYbfHuJ14dXH",
  "key13": "5tWJSR6qrhDwkjSnYLkY2BePAE3VDVRmgidgJvQWTEgPK8toqHchyQesYEVJX5QZ8mfdDKcjbzfDWJ2mn41k12Rb",
  "key14": "8N1c4oK8LwNEDoLxVyNy4P9fnNDB1qGycWxtAq8cTfGVt4SqgSN6yqgTmZBqQJPNe3mGwJBPFc9fSSCKQn9wSAX",
  "key15": "4JGsWrpBAYu5LPbdLoVsPG1n3NYqfFAsGnkoiujxpp3kZZveV693stX3isTmWymXUgjabacoEk5cWTwqPao2qEWs",
  "key16": "2yALAdykksnbvaaxx2kBSTaWEF78adrrwP8ZDbUW4bHxBGTWTnY3mUt4ZqoozjbAyfTv6W97tSeHt4KK4RiSSfJT",
  "key17": "3M675nfEEaEH4QBrp8TFBwUwc4mvCmvU18WYymyBncVvDVi6FrLDvmQiJ2DqhswPycLEJkjyET6mMJE9aoPNPon4",
  "key18": "2nH649j8hUULH1pDvZzv3UE2eZHJRVHcsyCLVX6k2TdH1C11bx31ryf4QivDfoJdKYQwkndmBEu8931JSf1zNp1B",
  "key19": "KBShDX7MZt1sMSZ2xGdQTg43ov5Z8Ujk7uVR7qti14mt4A12u5L9YEdisuYPBUb34hjtsZKDBV1FQowoFATZr73",
  "key20": "56hfsrw5mLRxDAsoBSVh1MoZAbsV6R7hVAZ7FiwZYY7HKzWyZP5P6cwP7An9rnN1xrEja3kqNrCsNNGv49HRWpvy",
  "key21": "rJyHTRR6GNJxhn3eH4HpgSdP77iCBo8k4eoM4zo2YgzD4vxdvV1v3V6dqHrRsDw8kPkH5tPJRJ9E8zWctHHBqAy",
  "key22": "53sAHuAUvKuCVg5WRg9D53744iGe2zcdo3a1m4Pmoim7AERotHSQbx2DehTyQxvKyc7dQfAkkE3x9niP1Kbiph6J",
  "key23": "4DtRzM5V1dqxAevLdefkxbu1kQPe95PGSsirMHEscxXcdDsrWgrUs1Ln4naY9PyhcvyMiSktjGBWhunorfPjbUUV",
  "key24": "4uE64PHNk5tyqHsNYG9RAtmu3a33wyWEQVy4iCSJmJXaNLvG4NPX8Bhx8FchUM41NNfdhvPfP5Zo3vRDWfWX37kU",
  "key25": "32KrAuKs6DBiPykPqLix2n6qhEMG2MgJkGSnMDZaKcP7cSNwT9ip4xqSLcWXhL2RwuBkCvWT7KaxYHG7mQN15Azx",
  "key26": "325SuK8X2hmjv4g1gfmEdpqcDyjA3PbZV7ZA2NgswepQ1WZio7TYBEbrMA3jJTRc8JPPVTa9od5aRFveC91gXK4X",
  "key27": "38Kwfv7gbaNQioEeDYPgEhVSzrwqxtbSKEEUmLsZHu7pbTKnXtvfz3YreA4KJWisefubRhaY8a2j3Mgnd5oNFrGV",
  "key28": "5JtsARf7owWgWC6HpPHbKV9qZBdmfgPByukbbFzMewnwLPLp9cR3WAwoSr3Hp7GYDUCHSoXCwHk3rwqxQ2VGdieT",
  "key29": "3x8WQKbts8vftsuna2xoby982DGK3nmPSecKz5PFXrgNqzevv66eXjXsyApYNY6FUtu1W3mveo7FYuqqU81MhVVc",
  "key30": "5CfLQA33GUtd18DudU7KdE2M1NfktLr3RgjmGn7AWzY78d6gDpscNeLsM5tW2jFKEf1nyeoBuEjqmdNdpis23ziV",
  "key31": "3WyrRfoYXiSdrSSLCdRVmdFQisUPxWriZBgsurqv8bEjE4us9KjkFJtPUwqP1KzjoRbEavGX8LmVorxNwpfqSggh",
  "key32": "4tVyDG8P7FZFbcxsV38Scv4MckPbJFRteCi4uEBJxSC7PEbFUhQP51HeqgMiJchkdyLvapnuuwfwtG2R4dDnQmfa",
  "key33": "vgEAVg9SWUFmAixL7ZsS55vqLkxeZGePucQvpKgnJ1bNPrrX656qtpuX6qsp6e4coiRKFPzRFt5Mg14Q3LmLt5o",
  "key34": "2DYUSq1Va6BkGEjKZm8vrbgg6vb9VAiHqLX9Qd9tVTqk7Ad5EDqE2auc1z11W21hWyW7SQhMndi21F8LieBiDKAg",
  "key35": "3HS4HFNFz2R1Mz4XrZ42rFf4pQUvAZPEotYzHWG8AA8E6bwunw3UKvDAtqfVREt1TvFErRwj91SLCabFxrjVAnam"
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
