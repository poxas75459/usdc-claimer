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
    "566qGyjoa861Td7DmaGbNgkdFBhoFqKw7mUkTDZfPjAQFJy7bsKKDZM4iyVNeBVGdUaba4jF2oom5Yd2fVdVDhRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBkuWW9PmRDZPDQo8M4eFPqKxebRwLp3yY7XmSsdqTnWUvosFyL2HPBbCi32sm6HabxFKcabM2WqACJng6PcgCU",
  "key1": "35qvdhT7dqmq8tbb2pZvgkdE4pgqHymMgsq2Bnte9QBQkDymSnp59KxWyEXzUBU5EMWvhPRmWoJTJ5jdAcdJSru8",
  "key2": "5cnUNoEi1XNaQgSTkKWt1WxtyXnaJHxBvGFgkSd9VPeP6vnbjepd1B8yQZYp9QTquFu9uve8QmL2444RrEaP8PK8",
  "key3": "2YdLm2MjM3CrYwr5i8tvAaV27TsSFuwYafKD3BpVQy1MBF3t22yFu7wwUi7fLiaQg9a37DhxsyEsfYCPpPqFR8ot",
  "key4": "2jqTNTiv8kNPCqQVzQR7QHh6q6jWxF8uCKcDUBcvGWNUqUs62HZFtrx6uYNwuRPNHdW3pgevvm92wwsZnTA61dPD",
  "key5": "42PK8vyfE5enqS97FzAjZ1ugbjcLqCdXAPQ6NwUVpG6br5RnMH1eTfpG3h1Gokt4kNGHjPbXdn4aAqTmqYFFrJpE",
  "key6": "3Kexr7aR1VZd5wiS3ppUCi9zAWinbyAmmZx8EhYaWUQmZ1XNSMhHfMo1siZATLpQ6Tk6nXMYFVocXCbiHS6PwoPh",
  "key7": "3WLVoWcANAsWzM9fxU2Krc6zdFbSfhit37MXUBsNqhXK54hR3YG9n7hz5kniA6TWRLyukmJgD5gxne7NvnJZTnPF",
  "key8": "5aeHARYBiBeeExMiRMoQLbd94zvV9YvaPshksty8Dr4RH8UDdzBvHC8NgfUS6rk7owLurWGQeSYMWheyZarjGNdu",
  "key9": "4XnTP2ZdmytLtX7jmvwwrWVUeAFsmN61erhipdozKt4h18aqC69iWbXtw8gBFe2BTSTNy2jDi1GCFe5fyGTwFRcw",
  "key10": "2xnXGzX2TL3NxoWLW3TTobPf6rocE7hiHypyD1byNVYYzBMfPmMZqTZLVCLjMzPFkrN3QnA5kvenqPfSxtatZUCh",
  "key11": "5CCdQVtG5iFJFK27hmJL8VaUMLg1iTeSEQFRdUcypwv5cwpTPNoaApv6D7jA9cPX3STRjyTrJVSN237aom4LADfN",
  "key12": "5moqGhR5C1e38npgBJL836e2VeHTFzW8vVDUvduWst9qsKPTxn8hFxyFpynYikgtRciyXYnGgTKNY2RcYHLDz3NK",
  "key13": "9djGcxnh8C8kFBQYDeBNB7koEMn9MkWuxdAd2zed3PymqSF3YijTjwYVRaG85VkTUDj8Q1BxDQ1QV1rDZXwH61n",
  "key14": "3ss6WdkXtaCYaVdSy2v47vZrmXT6iSMinDibCFsAdckm1xDM1kNGZx9rYQ7pfNnyYf2iWEcScgB56iGEytSmSgA6",
  "key15": "4QCByTGSjZE9t7vYpNmh2BpbRmSJQTpkEgHXuHAKqWiQaUneZf5LxdgmBtDPRGxi488Bv7Ewe6ewTzWRZciYJ9sT",
  "key16": "JkoZ2zpZT1a33UcdMD9yzE9cBq1kXj25CCNcgYL5jDNrgWtVLd16Auu4vTihGcTD1dEUozhuUxWsQuB9LkQkwAT",
  "key17": "2BwqfNnnDdxqKiHUK7PkDnPjRXqk58TGUtqCAoqkXFbGHYYd1CDYEziPSs7XKuWqCUg48H5WezsE5rpZzstkw4U4",
  "key18": "48nNenWLzf8JzsJRJnnAzNbZnBznVzGfijDaz1XAepBcmwR4tC1287pJvEbE2Q9upGpfiBmSQe118P2uZHzXi4XT",
  "key19": "QzRnqsAcVk4HbqHKfoJEeYTFm2RndmircJk9fZ5gVhN5QCf21Tcbiu2yFnANqH4Vg82JC9sfTr12vERtSi3npaF",
  "key20": "WXfLNxe85p5ZVTpmyTrGokwRmcBcLH7ZQcDjSS96GazT5F9x9KRS9k2V6BtBsBkWNCkZPaQpJLV7BMhWihkW4AF",
  "key21": "5DgMxCwdewRYg6GBYquQKJ9egfWGzEUVNK14URRsVUN7PA6ym4CcUqEgHs9idjfp1RLFeF3QR4LEdjFeyFNzhbqD",
  "key22": "2qsB7PMKEEqFz53K8G29jZfnjqP5eaNgJuPEzk6nbsaYGQKd6MQygcxGVeNQYZA8ipCnm9vTuoG4VjjMvjkjy3CQ",
  "key23": "4JQLomefR5WBPD2R2jrJXuuaJBMb2mkJ2rhkySRuUMHZDbUu1MrHGR6Yv5Ftkz6wXTH6ECmLr5KuzWuQHFWwEhYr",
  "key24": "CofMJwEMYu2heDAjq4DFUCShxVNQYkZbdscSWGPxn7MLqM5yxvwykhxfqrPN49QZSmMWZ8wdM8UxTrFD8Ns861X",
  "key25": "3nWCzcADtaExdBz7EHoxR5CfhKj7Z7xfB3n1XqMDRBzFvXPQ4HpnknsCpcCWDREqLRZzH2fH3P2KLbgSrTA839VE",
  "key26": "2hmrQA5QBoWjycBsYGQw8aSiaS6S9AqxWmDB7ZMYaAMk3hVpPnuSopEcKg24XbF8YHaCg6ZthaVCXXgTXgzhhAPt",
  "key27": "456G7MEBSY9R7cfLmKzwZsTpQ3ocqP8SDono22sxsdLouLG49LAmsSVZbJFxG67HorxTo2Hbr74idTZCbfC3urqg",
  "key28": "3xbbz3QER7WxZEGS6fL64Uc19f26CJtR4qZkXfFHfPgC2EbKiSmtMbzygZeGmJZUPruD4j4pkP7UdHzgC3NgyiuU",
  "key29": "4SrNzyzfvuDtBh63J6kDWqnHXXV82rGnpmoVbUeegQE8LmpVam4Ga3Uv9AuWC2uRjU7dRx4QgM3psvyAnC3u7WjL",
  "key30": "5tgtZYCciiMYCnSkSPsn8p3zEgMFZ7ozTL5jvkVW4nCRR4LqUmHUV6jLf3Sr1n2JNc84TuQReV8vZ1gBUtFyXSuC",
  "key31": "J7YDjLBNJdN8TYPkby6o9TGYVpjkXgkbU43QChR5r1WA9u2sNBtxqzoa89RF59p85aJDLXU4Jvpor8DyMvbbYEg",
  "key32": "3gEjdckPcWQovkzu5FJUhtdVon2pYAqPFUY9aK12S2zUrf8HJBQaKa2jbMFnYvsLYwGmrcqAgyjwcrEuh9kmrPde",
  "key33": "2Mmdrf3A74Neeixm18RBRPWr7kiLXUReyUMaLvjwJX7jnbjuRJPM8WJAigcnWB4MuHPwDdDRZaFXSySq9bTW5qbq",
  "key34": "2cFMZEs8WJuMtDgwXrSsyRR91BKmdraEGnUEjmreBxCptePTdmhzZPxoJ95ajqMere5V8htXYtBNdWNYtWM9EzzT",
  "key35": "44KP6LzVJi1ZHt2bPevfQLknqjUyQGTQ94Q69ZtRqSz5BrtA4cn2wdBuE16hc3pMQ31YQVMZsJSAagkspcrL8WGA",
  "key36": "4J9nx9RqaN3MmvspRScwXCubW8tBrTGmv7pLCp19KfcVjSMo4ocqJYq1ZMBS4GovjeqsP2gy6Kmqo5VGugFJio26",
  "key37": "4nU4MVAD3hrrd1KeAgCEg5AXFJrF4Tpg5CHfxPmxYgdoCZYJRBQkp5cyBFS81FLiKEq5T4QddUJ9x28ZhvMBJNNb",
  "key38": "3mZtWeUzcehcgTQCnFVDFiKZLy7C1v46pxjpRUshpHUQq6Egpfkuv5JwME5UWZsSSoL5iwV4pmoyFZFwUFo3wMiW",
  "key39": "5gSC5F38PnTMwWsTm7TFrRLrFM3JfyFCCE6J3f4HMVStNU3YcwguEQamismkwXQxXgeY8jurjrYxLCxLzSSiANFV",
  "key40": "5UgTfa9wbpyRwUy5HJvfeEk6F4mTY9ZZHdrjYSZjDRBQFS5aHmGqosXD3zqbVuSVtymiTWYC6htmb2MBXhESYchq",
  "key41": "bpa3agnnpa3Kr5Ez2xphsk11shQhjNTHDcCPR5HPzV5htPeTCs3tu8T3Azw9B8EykwJaw1qASFTfccSeQaPtfah"
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
