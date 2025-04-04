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
    "5BxtH1RDuuXXLqv9ucovfcNkSyTgYdsCJhwtubZ99DTeUvJgUitY5UQ2nMY88Qy7kzCPnDwFXWUUyMaKm46Xwrvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "muF9arsENfvU9oLZsZDT1qmXf45etxWD8EHi2gi4TqVdg5QbJAGTMzXL9pGeBXcqtrHyiU4qM335cUVh9KjwmaD",
  "key1": "3Bs1Wxw3E8ZVnJPHo36a5sfLzDQwqnShd5tw3YAoRtnVSQKKtcoNk71KQ9GAPdQpcxxE7N2sNZecrBwqDuCbg783",
  "key2": "3VLdaxNaaErhgijBR89eGtBBA5NDM3ZEmR5KNMgqpWBUPPUMCrWw1eHvDm9eyxQ6krqJzXpcWoK3Qk69Cva9KBR2",
  "key3": "5hK9y9DVt4ZMnbr8RZFyxgw8HG9qbWCGXebyhfd63EAXXBhf6AVVrkJ8Lfmkz7MouNDZT1LfQRzja9FEJAL5hEb",
  "key4": "4E4qjwTVqwLpvoMqhsn767yyXedRfLfDdgVTjhQ9xKCaxR5NRWmCwnm1qMxth33CHjxLWaDqyzB2diTC9TGZtiRB",
  "key5": "46X7fZa9Jh4TXxeYm8gSh98bpoTXUxF3fmAhCw4iYHiikKnQzD25a5FoZoK8pbzHkbKvtDmZUeEdF9CKu6RCNerk",
  "key6": "4za6WKkeTQsBrXgC2Z7xA7VgPgpYmUQZnLxWtog3jmUkhspxKdEUmkmzewrXxwVUTy9E9mf1FmztcL3DnQMfSHEt",
  "key7": "TqBetp3EoLnaxJWCeXQtTmWrR6frZbFg5bBGF5Z4dzLrvzSdufrTana4FK6qzEww1fMzx1n3P7qCLv72zja7YiE",
  "key8": "2dcfztbxCFMAQAwyhHB2VbGgLZ2q7o63RPEpBLu2zdCpaTpytt6ZiGFq4mnBd96G4uqQZ4VLL93CCg1sjaVVj13f",
  "key9": "31kE861iFwD9r4pFMnhfR2KVckWQ4WfnxX8Bk8q7KJPBqHtXJQAo4Y3mKLwjipLE4a4DaPH8fmZbtdMUA7LNPHtL",
  "key10": "2AyTrXoia22kkX1bvp3ZakoPc67XPHZdyr3gPnV1CLVjfm5pqeLyGiSdBQ9tZ9grZdqhFJQJKJG5ZGN4UyqatXPi",
  "key11": "9u7gNtisRCJkRvaqHztzPuaHJdCo4iR3C24m2QeFy7a8ikQozsGGn3jwW395YoxADcDGvp6okpfu9xsBCRKBQjj",
  "key12": "4qExDNR9VMDRePEaVC3D3TD4htEyBgQGC5A6gDYyBAWpwcmtpAdU6QhXi67gYvMTxKnPpFmvjJLxFZoxaD8Pcrkz",
  "key13": "5CAjVXWEjzbzrk8Y9fW7cyYivdy5a6p29p7Eip1jBVRroQdZXRPZxzbrC8QWbSRYC2rFd8gy19kRLzHhJqB9SuJ5",
  "key14": "5dzASGrYE2XqJbBcbgceHAq4w6eDtknfs9WmXuMmX4F1dMStcmDermuwev83tfssMGChvhNnTLUmgXtYhtCJjQ5f",
  "key15": "2kSdyutELLRduG9usP4f5n1yoq6KesYD14LMget2k6iyZJLDndwd3fFiy1fjJiPxLYSFHcsQTRcSagyP6vstMubo",
  "key16": "3Pmnc4SU3RUAVhMGs5sST4achEzAQW6TWcMmuf3mUiFtLYiXz68p9LFkgAGFqdNJmSeXChe9e7ysU54pMdnN2TSY",
  "key17": "4fqDcHw8RC97GzntT7gXeBu9D6nx3zzampJwdUBAmimG1a99sD1xtskTEAkrf3iPxrZVsQJfNzAz13bPH1eaLpRh",
  "key18": "pVfdTCeRgcGYL72RjZmobE6xsE9Pz1QiEJ31moPqoXZafstwdUM6TfqBKr9DKCVxXbx4NWzdunHMah12UqgXbCY",
  "key19": "3Tej8uonGpBFbjF5oiAupHqdcNpeU5421WkMYrB3UAf6BLcimKrAGwZ8hDErtmBRWSEUGoMGFZE5KRxNFHFfaCSK",
  "key20": "3Jq71LoZcUjxdjc5JvYUfpSKdknxotG7UKnZWqAcu3wKXEV5uRE4TX1s15c8SCMwMfccNqoNqv6s6rWzJSQX1Hob",
  "key21": "4PKQHM8FcS4q22gtLdMPKzxxA5YpkDio2UcDRZkMSPud86ULk7QRPR2nJFgeutgqhYJsnXABBstyhE8hUXrMXzoa",
  "key22": "2rCzvv7y5s7S28vzTBxfzkQ6qu1cDBtcC7eamFyWprSp1Js6pPoHPHKFohvap4jkU7AAnxrL4qsak6m4djvyj2nv",
  "key23": "5pwaGynywJpAiABu91uDpYFuTynTmgFqBEgPeK3siqBvx6i9gKpQpQrRxunEuTDQwQnyUXRiaDn74KLPnK2Yujo4",
  "key24": "2immcanXW7SfouK3NSjNV2ifvyLR4a7QfsdSY1v2PBFVrT6LixVzVrPqqj2Fy1Drbq8xMmmHePjTMo9MQTVt7Cbu",
  "key25": "4ZmRJJPzEKgYFUAgHLTPP5gmfksggonsAaye58kyyEEdLnLe981GQy2LLktoJMwH7Pf6qSW8pRHbZq17oKpJ86P1",
  "key26": "D6oPQWvgzGrDsHNeGKvYqPf2t8xd5naoMeLyAhDDcXLynb5JNjS447tmCX4PDJcrfR2Ew5npdRM2sNrBtCnMAMr",
  "key27": "2QnFpRYYp7GNEGPenkJtbgRfGA579ZPMjfnahJ9XnphQL7hpjXWPdFgRdjARDH5Bc3jYt3D3PJKjxBpzRnw5HziG",
  "key28": "4UTtPzHWsxGJYhVL3RCNZg9EXB5WWb49WrC5QQupBHWCq3ggDSu88karbYjSZxd44QnUssdvt24qNLqBkS2hJ4SQ",
  "key29": "2a5PUU8jRdZBE2rBoGB4mQ6MjV5UxrdGCeuVvYXaACoMN15MAhrNfDpzqXtuJRXckbj2yWEk9FAXqChPY34556vH",
  "key30": "4EMSd3juSDsQMYQYM1nWbpgn7q9N9QKhSfMBBkMNMmGZWqMJpeEdBxiefk2DP39JD9zzi8j1hVZ1UKbAtinvXuCD",
  "key31": "5QAC9iraCwMB9c7hjARZ4oeEPoTurpaFKLH4LwFBSP7W12xNFTgq2BQds7HDuAbktwT6KGkcvHxAG9f9WPUEpwsn",
  "key32": "PjFAQdPsEJ9LwfdxuyvUHw9Zm8TYkeMnfZxwGA71QDgvLvLKKyh2w3bKKeL2nRwJqQqQnQHJeyoRUoxwRCehwic",
  "key33": "2Qrp3Wx8L1VrGt93bGEnbNGYueBrLEZWFeUyHzB4KEYHFBXq9tfJ95DGXSJ11AXxoKCFUKw2TPxE2vJXFweuTFV3",
  "key34": "3HmR9qL1cacMXwjCYZj9BDUUAATfYkZEvs2Et92DL2apMpf8RLqLf1P9CXzK3awS2CBM5bzsfFSL3uW3ExVQsQKH",
  "key35": "511pkSuaW4AsgCh1jnjCyhj9zZmfMVcHLwYecF6tpYUT7YG8wW83AV9bVp35fYHfTFSG1D7k2uVVHrtfB6WTuPxx",
  "key36": "5Wt1cjioD7zbe7e89M2tpjtjRRz3sho6PTSDi9meWbHMPwb89yamqHmX9ahMiXSLTiBw41kY6dPGdbRDjxnfXvDD",
  "key37": "4jBRKppqGPNTASEtP84wYCQEciVNVrZXL5vvfm6moMDQoEzUAbqm6aZfznXqFKbzqgKaL4MHqGQUy3ArQa2cQCXr",
  "key38": "3dCgJzjNNSYsUPMTLMnguxJKH5gZAMWG2HfiyWFFCHBJAovqVzBL5gcQBV5K3JSVW5vt3CeoCQvAoJAPLVRBtFuA",
  "key39": "224uz1ZFji2Ab4AJW2M13AwFWn4Ds8N5PYGp29odHGaUAcjBhgVBKrihCgCQV5Rn5sfsRZQaJ6gwKZiFHrC2eioJ",
  "key40": "4eet9xcpGRnabt6ikeXkSfhqo4iuNQAbYtist3BpAZ3sjtYoV9RAg3nqzTnZNVeXoTUza1xZvy8GuJ4oHzWfZrvM",
  "key41": "QHnxx4EP6kUTqWa3BQsUhWMpuevfSFsMeZhivKqQfw1P9cu7yJr1MEPPCWUQVvcMM1yWorXYX2ropZyPforwBxV",
  "key42": "5NdBkpYx8Zi6qDEKRBtb1xsmDUBeW4A2CzEeG5X2WHq7G4co9ifHkcadXWKn7JrXr9CBqogzkNW8Qqvjx4rQbvcs",
  "key43": "4UVUBHoWb484KPrTosoHgjAJU3N6Nuumq6BTNtmcG1Z7ot7Rs391d8zyQ6Tkzbk2mRoViyYYM8enztJLUFP4ky4v",
  "key44": "2aYPK2KtNNLzKLdEXUBAGf8Zyf9DWYKC35mCegB1oPNZ1bnL2WSnLEcGieQtEkuRKm983gYqaJVQ41px5sMyJGJh",
  "key45": "4GxNR46AeZ2bTNnC7Y1e5PTYJRovwksiUfab3Mi8fAk1DNfB32nbgGFegNixo7mf8mPmTAZL1ut2RWQeSLFSjgsd"
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
