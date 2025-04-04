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
    "3qvdFgH7y5NXaPys7DFEu1b6Mau9gVX8B42sSHFbe5Dhq219EyHdwaY6tm9NB5LrLDtRMtJxLUvtcNhDmBQw8ojt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHSjjfNEx4hGu7MY1Ymtyi8YhLLBGHkqQJtoLgFEEJF3cryVzrKrJ5hTGEBSzJ1B7B9QYopZwc5YBFW54aFr7oq",
  "key1": "5ntpnTgRDyDQGuDBVxgrQxBc9HL5CNztBtbZpC6NgmhFvnU7151WNY3mhnRLQY14Ue8SmmoKEQc3nkAFa1nj9H54",
  "key2": "3Z949Rwp4QtbyTeK5fh7XMhYtE7eDZ3ab8yuaNUNZFbJSeun4z8iEN71ykdiuzcEv7FssuFQSP11Taj3L3GYuRcQ",
  "key3": "2MRptpvrw23NVUFkV8DQXKezeRz3SkcN5GTND6dGaC8EN1m12Hkek9EQD5E7vBD2vbCZxEzk34YZVRtF1fNfkpvJ",
  "key4": "3QddgwDjK48NR3vuxifuRA4zJaV4mzL9a63ux8whDFdt9KpE1rVvBb9p94Q9fp6WZW9ukWKJ9scK3NjK3HSgzNaZ",
  "key5": "3Hp8zkctcJWT8s3TeGuW5HMCNo1SMa4bzjPLqfoXWVhfeaJJ9qU9qaNkB8fS1MWHvwcrEvyy59p48fHE2Q4cJVKG",
  "key6": "hFUkQ5Cbs2UCWTA6YCABDL4YcHzpFadWTwHSeLQ8zkrCRurxGRGm5YVbEyQSihgXNN1DRMgN3jPW1ZUGmG7pqgK",
  "key7": "44P3cwNdqd66rpXiri26fJzrbPxg1yGLsanwwBwdpLyAczxhYrFSVJE7qmejiCi2qbeRoySx7SPbRCd56Xnfoc7R",
  "key8": "DB68R4yq5WkMrAMnhtAFrPTJdmDvk8pqLS3UhcJfvAFnXWZmuHRnPQTfE8tsBZu83H1J8s1xp9oaHbn4LYE3Gcr",
  "key9": "4VbAk83HMBxzjzZj1oQi6VaWiJBBcm7KPrYXXz4MYmVxEj3AVVjwF4q7Tr4CQS2bhsnbwFDCBQegtVFmWr63CUAM",
  "key10": "aEW2EMKQPGR15pwL5XjDEaAnaxtHcoSLaoYmnK8pdpXexAXHeYSNCd2c8jhNFtLMUvGxE7m7u2mhTYmvK5tChAY",
  "key11": "4JZyHXbN7C41WMLyjfmZ5zSAhwwCCzBJVCBWNbwLwrMDsXRqdBSqrgjMpKWbAoYhuhJMcPdTgNgu5U64xwL3iZtJ",
  "key12": "7ma8YB7FvzH7Rf5yR3qCA4SuW5vSNEdWENYrftcsqXjkfvmn8rHgHQJ7Sdu93EnskchbfLFhC66rc4gCbigQNao",
  "key13": "228nGPL1fcbQYN92iyMMDPtSgc1ZSx3UuHasAhU7JWRw2RE16zecE7qHEUyNPFRuBqz5irtNpdSPYgEbM56zoXjF",
  "key14": "23b45nmVsPQxnEZPwhFYHU2FUyHojV2kx29U2p2yZNR1U18RbxFMabJ4piYponbGdJiF5GsyoQhs52z7b2aSz1M9",
  "key15": "2poFwYgmcaZZ6mSE5CYtTrPMZiAe3pzcWujnLryhtRoUVtzxgGLRi6kZBi7CJMCXHKjsEwDP3JLbtAVrVK64NTNu",
  "key16": "3HUJw9pizcAer8dsE9aXqRZqU6iPu6yZpmjTqavAk5XtXysaiXVve6UJCUPsDTHtyJb7QzsB3fgfoxFHovzAh4fn",
  "key17": "58UyTedYik5vgD8BNrUnmp8tQT1FACqr1kMrLbxgEzA3hRUjHfnT5X6ULYnybofk1KrhN3neAzEdwZZyXQKDj5oW",
  "key18": "D5zHPhhZgnzdBRzGVbJt4y9b7EupmYgGy5iHnCnFReorHZSnrZT2qvJYm4ScZ1pVSNf4Xc8X7fTx5r7RbVyDYgN",
  "key19": "3LZHYYRNMabJyUwubFVmr3vnscm7sbiEndNNuzeLvBwbn663zWZNqSJZbwzdje5Q2c9WoLAnEAnBdELo3KWEeXJ3",
  "key20": "2S3BgxBmgRFx2MyiSg8LxM9TuuiqBLoyEJrYiqGL5GXXU21D7FQKYeB6oS7FxBrAGRiNenmHLuffMCjXsfGeg3yC",
  "key21": "5fPecmTNK818ksAPgTT681fFkhMM1aRg16xtGCw3ZSobQ9NaHsYgo9c1GwEeBUJwyryHGnVwSjZQoS4DJbppi5hw",
  "key22": "PxCHfbMdzSiPgQT765zGiz5RbbNNRZUEJP55roBfWNMssQFeTi4hRzVZcct5zN5FxuaP8c9za1e5hSuUSNKZ7Ro",
  "key23": "3oGEWboxpbpW8gSCo71pJsNTC3o8vNrr3hatCwaAnMYu5WnUxQkSZLpxS81apFuZcHLEDHkiC2aFES6BC29BN9qJ",
  "key24": "5g2h2Ai7aGZN2TKFFERqwzR3q9MP4JT3VQkouKTSwkDLPWVQ5CKz7pqmcheDbuKGd2vpmSS4qh4ogVHwzbkdhbb4",
  "key25": "3JnUP8nq86fshpqtcjEgU1vSXkhXETPu58y8ehG7mJxJfg31xudcAXzV23HwooN9PFzmb7gSHyB7x32BuLHq4jyj",
  "key26": "2W3kUwTX9AYiGCRCPd7PfeLTBV2iPzydKQ1BFkTWoZKNoznRcemCJbMJnTforscAkrnGBh1Xa6rviTgaVjGtDm8K",
  "key27": "84k3kzRMm1CmHAFvLVuvXAZXXHUs3rpCCHyWRhcMy6e4soWttvLmnpbYPzrxgCM4mfWbTDwZNaxvUWM4JRZLoeS",
  "key28": "2PXrHzWFx35E2psviT2kyRgQsWPLqrLs7gHGzefDp2PVAVAFtT2gCT26FsMHFwrPDBYAhVXmRJEvsByr7oTMagii",
  "key29": "jc3LaThDAeBCLiMnn5JzzrRBfWVkZ3teCDWN3NTkRGMFE9GVUDYgSnfesx9x8BrXQwfbDmxMpr3CYX2hJopWgxk",
  "key30": "3e48oQKcgnw2dV9z1HsduYRK2D7XrEYhrcH96GTc679bPFSUWSJPcMZREKfETzdRy82kojVjcdq9SQ8ctfZFK33",
  "key31": "2R6xb3pqEv1i4JzLjUJnJC6w7hyw8PZStV2RJWYTLUVEATz3oDwrUao1p63KrcASKaNUtSFSu69qpwhbMUGTqtUW",
  "key32": "43m7whcvfUeqgcERySAe1qJBibnYQH2Sscaw3T6CWZHQ9HjDJDRBGv81C7DR2uTi9ViuNEeGqG1eHU3kDpFcfB8k",
  "key33": "286GDEBFFDZuMnauC99ZwCwSyRbKNLrBCWLLZFKVEExfdntZ1oDKEA9P5kJ4Wv93vDZR6hJ8KNSVStqKaaan9fbG",
  "key34": "4kb7ghw1yfRRCpiv8BSC4aL7XphG15vQD4j3QHsx2Thb6UQjcbcsHcMTF8gmkAiRzi4hAfpbsJjQdpksWgMhCK4",
  "key35": "KocYX1CejWvG3jbgmN5PPfneGjQdbCsD6TQ6proF5iUPEGCERyeGDHdciFSj4HNxgpiDHJ5rdhzPCgixedUuHiN",
  "key36": "5Yu2hyxYnKnat2ddQshAfdWujRb9V1Kk8nLgkaTRAACUVehL7uZzwNdCbD13dTrvWJjdKNpKkE4GeF9k6UmWo85F",
  "key37": "2FnfzsEeEy8bTzA8UwARiFxoKDPLjf4aprXdDhAAr8wRJcyQrcYuxtS75yDm6v4nMjrPkwm6Afn9tR885GKKRkYT",
  "key38": "4aAHWSMc14wEqJ1vxUaEAjCjbSLMDx76tYDSABQtbUnARGtnikGboDa4gnr5kZthXc7k5jLHk1NJ9SDuW2NxXcZ",
  "key39": "3E49557aM4v5Ag8bGuUefHGAUGyU8iBPghnKb1wm74MZatUrw3CsWe9TKaH9JQnjhudtEJumuu8jwfbSkQg6XUEL",
  "key40": "2AEfWo4JWeXnmZYfbt6JygaGDXonQ94NrC6RBauX7C4hLcKZp3PBMikQR5eSfXsD1g6mjHr3DRsCxLiVCtP8rqev",
  "key41": "3p7rX8BiMQDnqMVSK8Vr7gGiXPTw3uaJec2P3dGm4sdfobLhL1ooVQiqai7SrUSxE9SH2ig65WZzXDh4uN4TgewX",
  "key42": "3x9aJNw59oEERuPzrKCGWoiMQ7yTcmgpVXsEqtLJj97SfNdFtMhXggubLNpJbpdaHvhzdX6kXdnKWECZxW9vmmtB",
  "key43": "3uCBkH8n6WZs6vmTZKZvqUSUn41wQywumFVWX2krXmnibEXTDLvVbccfct9yta8TkkBMdGsoiVuJ1qbK5heM6u8j",
  "key44": "4C4cxDZ8s4ajnbaxg2NrKR9Q4mRPLGsKbsQx5rpmCGgbZBmLHQpEDUM17YW6soLsyhsnqbRiZNMhRcK4Tk7vv4Lx",
  "key45": "5Fq3KsKDGwLqyhxhnJeYo6552ZUsEX5u9ZAsrtvqmoE49gfyTsv8W2y9ihHzt8cPSqGUofPj3riqor11BSKE2SwN",
  "key46": "63ygeY4AD3YxfkBegLAHu5g7W6zGGqMPKvcc4Ld5ctQGD5pkADVhZUoBqGTYDZguEiN6mG8EQaY74MiUa63muiH5",
  "key47": "5LQZvMvAPxyco9do92uJVaSvoP6B8Vfx3aQPm84H4LjAtPvbPdC22VcNLNDaBQnYLRxg9mb43NXEW2vuhfrneh92"
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
