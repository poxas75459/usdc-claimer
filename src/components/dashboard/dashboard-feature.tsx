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
    "5Z126GR2o3VrJwoMoFHYVN2aJWt8Mf5q2P63RNkjdBoTqPCZ3SftrXHqGV5Eg1nksrUXPwCh13ktG2kfyct286SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pm5kFHnH7ji77AoeRzAGpheD1K5bjtomanH7x7bevTZZTL7wMQXvR23Kq9b4U5kaSREn3gCzqjcuGLFuzXWvVC",
  "key1": "4LWRqVdXkfMUaQ5Rz1MjHF37jbFsGAuhzxR5WudEYcAz9zxTNKPD1PCBxXuaNig4bwqQGKHU3njmHVtW2dEUezte",
  "key2": "5t1WDeWnHMz9RPmohZRz1uaLZehzKhN8bJjJRS1N1KuKoQzrpDqvrzNcsM8LoHAfKcwGDY7UKaBouqKGwG9NcTGe",
  "key3": "5265tFXm3sSHLssxGPNmqDJJbojbgT9hEcmVu39KxoeKsSLKvxE96TfAZoZ2z8SwRBH1xpo2dvmurmTDaNJhyyXA",
  "key4": "4VPBNDzrSNyGBiWWmXnWsqEhcsPdTR4y6LHUeiztKWoUo32UeDhq4CZSmeyiSAUfwLbH6sbsYtkzZ3EJGKR2NpqD",
  "key5": "3ZefefSNh7TZTq84n6h26zJzXHG7skwWxHnY4vzyhgodnMpKa4Gxa9GTmEr3gAYwwg3uJSyG3FDWGxdwKJg88eV3",
  "key6": "4QpHWtJDWqXQLHB5sVVkfwF23TY8LKd51FsFiFhtJnCsms3odhSsnh63ERfC6WkA3h7CUfn7pC6zrLF6qd11qfKz",
  "key7": "HBfLtXGbXLs8k2iQG3b5q9uZ7hcjyk72JEnr8ouVQ1QuZcJgJ5cDtk3U16LEGaMYjkuLVJRYymxgbPHz9TMzwCj",
  "key8": "5tubdA6oPBgFantHSX1gTXtDU647U5YHGA9tYiWDJ99A9o3VuerscDZXAV4WydcXxH82uTNRGK71vBVKf6xYwfbc",
  "key9": "WcGTLigULnmwFN1jsq2YpR9kPNHbGSQV4iCHtQ57dFUyb37gC3cfF7tnirmw8xDW7EdhZF6ewXHhuLzbFkJqM1T",
  "key10": "3EVTTh97vEHYpaDGbp8fH7MQarPsxN2z5T5XabAPUJ2KVkEStXjxBHP3Rx2UcM46TcrD1eRXgcNJZNSTFxRN7gwU",
  "key11": "3RC55KGauapWig9URkqUuVQaHzVNtvVmH5PFy31FPHSsKBpeDWwoj3eSyDYNxLaxbf22hJbDfR9iXnnux1gqfRTx",
  "key12": "5x5gGi29ZHQgSR9aUht6yj26p6h87d9RzsnZrdh5aUL35KrXk3ArzdBQTwXPg7jrkXBFcTMhcLA8QNxcmYyvDMH9",
  "key13": "3V8QxwUiaHTb1ZAdb6KaY5cqy2eFGCVGc32iq2a4tzb7kVG2TEGR6AgqD87sPUg1ur215nRj8hvxbqnvxphTDjsk",
  "key14": "3ZsMx7r4zPGZC3RtRSHNFtAzoWnQoDVcD3sPUNWYRwvH3TsAHe5omVKS6otEtLGKoGnt4FfXzPXNXJzJnBXgdEJs",
  "key15": "3VDnUTohjHqRi6R4xf6ZYDpf6TSL1Y68j2GQrypaD4KGRry8Nk9dE4M9Qe1AGKVssXf2VYbz58dsgTfDnVwXC7Ex",
  "key16": "36pPLUuMDtnMTWS58LCswcp2NrArQoLYq6LMe8S7Bb38ResSZzR1VUP6T5xvBeGXuBgtpayECYzog4r7NSNkeJx5",
  "key17": "4HaBbCQYbxiowWaVv96CSgF9gTiEpCPhJCJJooymghrDryFAAFeFcQsDT7EaVuubtMmd2k9EXCz5ZtA1EzsDb1kz",
  "key18": "5dsfmXBWbubT839fTxUdyQZS2KFc3TEsue6Mgot95673x8e9wQnv1v36auXcALE2o1nR1Y8atQBrpsiTJCcYd3Ah",
  "key19": "UMgwp72mfgZzjUqoxUmRaFHT1is1k1UxpsjCgL7cXnEmLajrjGPMtnfU8pcGMBKF1PLQ114LoTVVqY7Zm82Bsh2",
  "key20": "3nhy4CCPcKj7X9y9qpqEdwJUriB91gS8vbwvMSuNo9Nju5zJTX63RTLvnqSpVsxmHgdsGtqSt77Fk5HwT1X7vgqY",
  "key21": "7UEvw86Z7NSqGNnH1hzhhqCXBqYXiW4vAzjKQkkX7GHCzVzzGMcfr6r8niZMf2LQXY6kgXw2RCuqcPMxj51ydyy",
  "key22": "2V7s1imf3tDmWMDbi9XkbX8WyGGAUS1dr3uSRwA3WSaLVrsofmN5wRAVUrjawdFgshiYGNEUJSmChc7zK5QaoKQp",
  "key23": "5WgjVwbCQ7aJe9akzfgcUKnKqyxeiHa1sHzdP7RzsK57wqdiHEh6NyP2oFa4dnJxraTqCptTEjYKW7EPi4gytCF",
  "key24": "5kqYttp4w2NGJsTFMGmtq1gstnTLu3bJbfm7grXuagGtsshYtNBR1CX7wcMLosvJBodjLR74kkLg53QBSnQFNJx4",
  "key25": "jE2Nni86e9fkqhmjrSQc9gtN5GPg18Fuo9VfHhd5U4sZ7TvbMq6nnfDzysiwqvohN7r8fvDP7u2HqgXLpvpwFZi",
  "key26": "FeZKQXqEX6rGXAwxBsaJviJEiyd27HFvR4rwketvncnqEHF13HiJfgzWYMXKvv3muGqyPmx1Z9eE7XX9h3ZMjTw",
  "key27": "1ShhJ7aqbMUaypuEp7kx8nrpiSC3sVTtaEeXjBMcpdHf4NP41dFpyExeyJJUtrpSPC9Fe276e3XL1qvT8C4NRh7",
  "key28": "pfj9nN7j7Vqj4MyfygxTm3rWt8BqDrYE66bqAS6aXyC4C22qhH7GT3byeK5QKQbonfeRY4TgruMWEJLuwk81a3X",
  "key29": "T4kzufpxuueCTYaaq4U9rG1fEoNgHih7vmPTTT55iNTJBNQ46UWKjpF3SMDSU5HdoRD6o2sBN5EiGu87QV5UDdZ",
  "key30": "wAZ29p5KYcvzyNWHgB1UB43iW1qctkc8pqTuGziEMWG4x4enHXJzquLN49Qo76eEYRZvgTKozJBFEdHQ1obfAFE",
  "key31": "zavQZUfEvR5qE7EvhQVrVdBP3XzoXdmMPArv7kYLDPPJkMnySdW9DtZmHVovLccxD77Y9LBZ186ALqb93dvLs5c",
  "key32": "37ziyx8tFkYAv1WAmihnRdd2RpnJCU3E1CzProaP3ruU8auds6MiEjncJtsjgAKk8aUcvvagsds6Xp1f1586bdaE",
  "key33": "5EcVQvLp43YP1rQ89aoyemFcwemeakDBoHssWD5PcvnjHpoV8rKMSEzcoTDJd9PDnqwBTZKXuzhQbRFEtmkCFNgV",
  "key34": "4hewAdnzRGBjPy1UPjM2WTkgXC6Xif5iV3noJDNgsaZiZmduERkcqFXHaeRagMu6nYNZYMNwHG9u5TV1Tb1fSrvY",
  "key35": "2vR5AcA4pHs9ffMUPdeDqujSyuwH8oVN2nWZga9sXntkGdnxyviL6FU5rqaL2dovKQuhzTVATCdFZ3YQQr5aC9xf",
  "key36": "2k5FNzkmkyPPPE2dDsVAG8QwDYjXE3SRm3Ldf3wTPUFFXvwtuNj8NKysZb1CPVvCDHv933VFjCBjvTiSaySXHrNJ",
  "key37": "Xed4fXyb5nsdYjwJsQ6mBpY9anLmuKwjucXvg6PHGZskeBkWUkbBsKzwAeMsqWgxryHYw4ZKTDZr4VmGeQeK6Ki",
  "key38": "B2JiYX3M6uAdnmcnzyYGYUuZd5rzUmKHLgcPag1UAVcVwBwEEtGnEWNkeAsggnCEgHNt358m9nELGzUuhUgTHk6",
  "key39": "35R3VC45DGbaUF2jBRev1bDnVByYABvQAbBUPBkcfjhk5wRNpnW7cPv1SeWaibeDkrvnKtvnLwboNb1z3u6HmktH"
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
