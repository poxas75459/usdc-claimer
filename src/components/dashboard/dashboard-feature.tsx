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
    "4zi2kuqpw5Q8jQfCj35jNSSQMHb16RKouSK41tqAcV7woGmNCAVs3RLdxHrcC7TQYjWoY3xCqGcDat8DV3XdFpYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sng5UnHm78sXFztTedRykxURsWsf79EoXQk7jDzuqsg7HxAX9ofq8Q4CCAsaWKHXrWnDyezs4nhxKW9ZVngjnE9",
  "key1": "3T3q2xY73qqRj7J4rYZoTy3bpUjehVRN2AXAcgbRSvFbRYs87Y6f97LFbRUx5PHkPzYSsnh1KJWu7GzvZBVDpxCT",
  "key2": "4ftkDThTbRhPHBZZupukbkj89kBHnFoR5ShKFcc5w5jTDVUGng1uefhb2CuGjEUcf39X9eya8W8t4scQL5puovMe",
  "key3": "3CZRid45MFtTXu3rHQZUWk7xuEmGSEJkVzRtuE7NG6MSStXQF6z6PqQddHKgjCUERRk6ENpQj7gu971gtknZvoxh",
  "key4": "4LoLT7W3VXiqztLKoq27MvE2FQ4AkqaLBffG4cVEGuupMqCP4iHmGXwRk9heKbjRvp8fTMzBffP3taZK4rL3zsBC",
  "key5": "3HbVR8kkoMNGN8ZVwHvuqsdk43iGctci4UWLC7haQmEvaX9wd2CtfBedezvREPiYGNFhnwPhqzJ3as8qTjkd4PhV",
  "key6": "2LGM4xAxWiynTJrzZyL9UBwwCoddBqFZj39yoxjKBuRa2S15NEvwANzt7L6MvCxc7iutCysLQ7rDv58N9J3wM7AQ",
  "key7": "53fXw1bBnLwVkw1ojXxZ8pMzVbFEGopoDwBVSDKjKeNi2unPRsNy2qe9nEP4gsrZZGayab52uM4WgkrMfkz54dX2",
  "key8": "WNSpNjJwZyowpb9m2vQ4C8fuXDwhJ29uFYdRjDU9fzQ1DDyZXWejXexVqwoJnpHpu1hvxQc1m1YmLMbsenUFbGc",
  "key9": "51Bej3deoEJQUDtii3JgWbFA57PDHz9jfhTKdkStVPKFwiyWSL6ycrQcEbPuiPgm2mPT1ueeVCuymeiL1cuStYgc",
  "key10": "3hcXAqDYLxf42yjSbhrhNvW4gmiteg1CBqnmzwDCu4NGp8FbQzaNmSWMkkXbCLuqHeqdHmGJZV89YccvL9TCcJT6",
  "key11": "Dp3iQRM1VK2YikS7GGouuUgq2D6eJDgET1ApUG5SnitG1BMrzSHGSpookJoTC7kUSHay2DgQVV8hFoBsbp3fiWS",
  "key12": "3QeE7odDCBsygp6b8u1etaV13q44QZFmchAvHoWuQufnvCsRFiSwzmqH1wh5EfoiuyLzYCmJpnuc2N3wDc3WXKGQ",
  "key13": "45m4AEic3jzcXoQkeiBxpBCn4MNkawSVm71DH4wMWqiGTWhSvfWiffH1EzLZdmsmMiAjnUVtBz5urRShRUUG124u",
  "key14": "26aYNdCLfeMpHu88teEvoNnF7PxBwSXUKxQ9M3etSoT4RKWAa6qMM3C4JCudAFN5FaPsvs8DpSL9zgjG8Kzx6o4v",
  "key15": "3aMBdPEmB46yMy6q5zXKUW7zHUkyK9xZJfhmikRy8VSkac4FXfqGx8M1sJaExkYpzadHWcWX6v75w7mWbBeS5gPN",
  "key16": "3bpYZv2sg2HqMRYTX2xcAdnmdDpfe9mdgobENH31CJnfjxAYTkFZRt3XyZZVbkeNXihSPRHi481qEXu4iDHUBRwh",
  "key17": "3XbGbjhjBkVFyKnzqz8u1iKEqc92DkFvqmT5cHj48PSfovs3FZcsScBTPvmCyPtoug7dUhsJ5QtWwoxaHzbtFx16",
  "key18": "2mHZiLKHFBZXS9udSmFyijHXkJSqEULgHsXoBTd7tFNnqawUnBwC5LDDuE17zEjC8TGTBcEccWXVkGC5xdnrxNjb",
  "key19": "yCn2uQ53Z6u3MDs764whT51wMtWjDVjuPHeU6SawHnFZMAcv12Chp6YJZYe9V6vfnRXRcarL2d63cFhG2QZrCV2",
  "key20": "2G8arJ9v9WyLDHko5CkjbTs42fEzpJJEMRJ8d8sxRSqkPipDYEyPBGm253qc7v1ufcf7h3agLeRdXQpxDg6vP4cg",
  "key21": "KS3zaH44D89KQ211q3tmPz6qvjTu8XwFzhTPTvwEJEzqAZ8V7YQkvWKDhsX2521DmPC7UPiix9CTtihqnh2raDR",
  "key22": "5o3LqL9BJdNZyHCr96dwmHusrcQC9EFNvxLZKJid477r7xwB55WBdCmQ9qPRBKZH91pVqRyne8jitqHzv4hRwW5P",
  "key23": "5qCtXSdrJ988UfHSHYoeEACzyp6pJAET3vxxXHeeGFBwvEi9NSDgycG6EFb3EaGRwkDR93f9ySdd5ikFr1mxrx3L",
  "key24": "W1Lso8riwyk5H6yd2Bt9SJrzLaCaKKMX7cL5qQDwk2tH725YfwTcaPexMACi9PPuSqoYHFE9QbFU6N2Hu4NYwys",
  "key25": "4C2KTGot995bm9GcfNTnSG3mQHtcZKzurf95our1bQtiBvYzWKcxGN16gGrne9Er7e6mhi3x5eacSNWoZZZyeBTk",
  "key26": "24FxxXrTutSzrCAbfywvE1YntrKeTU58vfowYHpcd2ZuYC85u2nUoEonmETo1xXXMAuZFjNqVWYsf34M7CDEHU5G",
  "key27": "2C8JkY84LLUArxRtPUnc3TDj9nYFFHF8zoiS6BwSCijdYHvRW2rptT6XSDw1hfMRC3iJcVooKFTcMfS9rQpvnhKY",
  "key28": "MqtX19UGW99rLWrhhYyED2igBSJDGWmNN65ZAVQQsy6rH7H8Z3VEumoJQQ4MrLECqKbj72aADiQjoKVuiNf33bC",
  "key29": "2QBiCXbViQjDcovZ6QGrRuDDiC9KSi2gLtkuwJpa9LTLWhYefVHgj5yxtmxRXw89MLhT6SpPBTTSAWN9DNjv69wA",
  "key30": "5ipZ3v8jyaA91UCHqZ34CSDNP3oKtnV6Q2Q3YgUNd1Su7pC5dqnsXagsLJNDjvszno5aDToSJoQr2i1DXymDVfi7",
  "key31": "25SPUKdPiyJmfDq879QVi5nSiDvVjDGt8rFHNPo8KQQSqjtfGjnyeCjwNaRK9JE7bpXWsnBqzy8RgqsLT6RNa1Kc",
  "key32": "2fqrSChUrUPp6Kg5K5bvWQ4YnLd2QdoHKPFXkouQdo2kJdqLMnQ3sxqLhU7vf6dNGABao8gS3GjsXv8x5JZrZN15",
  "key33": "4wnez3fiJS1QMj4zN74ZZvFbZ7qQWCTrDeDbo4qcXJtWrvkeknd37NhZ9YRLpTJK88NhM4gtWdEYrAauBXvXvcwU",
  "key34": "2Fvm2S9np2rjsW8t73S4m1wuZ9MtaucPznTwfAcZ2VG6CHa6iHz287jbofDL1LHPxH8pGwbsbqUiNPT7E5L5zrWp"
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
