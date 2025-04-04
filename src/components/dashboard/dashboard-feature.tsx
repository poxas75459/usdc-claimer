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
    "4bibqaCcNtAskyt1vpN2tYwANBJs4b94bNgZxQWTKsZasApU1d7K3SBki7dLDLAbRdPchdahNLEfPV5bdibxhcpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652ncMP9wKAkbSRwx7mgE94aELTZ3HVHd2JAcGHAquZyVHV9uLxDnn5U6SRh2QTK3ikT3N6uLN6RY1uACovowXj4",
  "key1": "5WtDaabVGSHTupXX1UNn9BfAK6Jw5egh81mHLErWbH4xY7kXeZnJYU5RC9xwcuxMRfssfp8YLNzfZ1BN6w3SjLEm",
  "key2": "5wRk7sH59uj5q8W5pEqb6kA9AX1XpCUybCCdUwHUgnRdb5sajd33SssU4Wi2cgiFttvZJPi2nRtFhxwxPhWWM2md",
  "key3": "2GfEwRhYYtS3UoYMtGkqxPJD6gpWjvHbZk1wbCzysTARJFdi9VzBTsBCbJATSqKG5Fcrz3gPoyjNmcxMXFGpndBj",
  "key4": "5RRYpu4H3yVQLYXd5cjPsPH35TG4t1VepeE22csLuN6hzLH5VigyoQR6TYQwzewGHkhUBEYpHWAqDAmy5bicJGPH",
  "key5": "2aCjhXwTPZpRNYSL8QuMgdDAFELAQvN6QMBcPBXoVfgqLXSLasVR4Zs4mQV52rBTShFXtrhEpCAZCfnNxCmFuFBj",
  "key6": "2Qoqf48E4Pj3WvwAS6ivKGqpjszZzrLoFTuGbsnvhrnXQPNf2kzTj8f5WWrKeXqo9G8E26oX7rvF8APiMi7SMv6",
  "key7": "5damVwf431K8gLAVb2XdjzURFuaPcn8kvjb1ce7z3S1Y2x3kuNzfpryfnvLNvRtKB1NPsRAd9VQNejZJcGpWJfq9",
  "key8": "UxcRyVpCW921aqAPgq6oFfb9ExW9WtZTmnB2vaTHoqvYHFeuf7EVXbXXvnTjSSWjBvTjyibEtTxofTzGVwYiEcw",
  "key9": "yoiDxGmDpXcpJ2Nj6HphGMVgcojgDCWLPaUrbH7J5w4ZLzmv1YzaFjqxBYmJukuY9Q8q74WQhyMZodSVtUQXGt3",
  "key10": "2HEY6DE4eKe57z3pdHw5YokS37fG65kAm5b1ZuN4NHSHjjoFKan7p98fdiNLLhkZkz1quSXQiThbWzs5PZYk9SXE",
  "key11": "41hjmX8hmUqwy75dktLTzGbsPMYn9poh6GNmk9sVz3HutuwKzydnVGVSPSjiVRPCoWnyguZxSM5Pwx8ZzAbXuVAZ",
  "key12": "1EzmSEpZpBUwNXibLbDGC7MYqx1HMvFgt1HNd6qkVhheBwrhzZuzHAJEhUroQ2y2E4pmdZjbwnDCjNKSWqaofSK",
  "key13": "2ABt1rSsWf2FjXu8NEt5RoTYc594cGowhuzkxqGnCrWPKwhnFHCA4wGJ2rbdWujKj6ds7joBLtLmasPih3QMCHys",
  "key14": "4vVa2UMN17QQhK9v7Vsw32tP11yzcjp7aAB1RABpY5g5nf3CxGybdm9H724D3GPyC11dPx5cwZ4PJVwykdH2TApP",
  "key15": "2XtdPBmPVbokFTjVaaHN9DMkApKfEqxB5h43i5qT7R2sSKUoRB4EAB9FCwhRhF8WVzxcrqSFmbK2ozzjBFcbk568",
  "key16": "4gqtebbjrqKpR2iZP6BrZuQRu1QuVSpU1hKJiLipwqNhbZMn4Zyj6ctpVgbsN9sV7NHJwBDg5XC4aKnvZhdpTF9n",
  "key17": "2WK9iD3XsGFZbhCkZvE9yGQQB8YjTNwoWVditt264t35svp21ba31cH1L1r9kqNtvCWC4dTVsdSV8g3x6Jua6FPP",
  "key18": "2LHkoUxdAcqvU8UyvLJFkE7MY5hS4kZLC4v6ovRUHabozNaansPTFLF2cLRqH1MNiqmccNruYgxr1oQjCHLz8HiU",
  "key19": "5o5f4vTt1FxP3ZsJiPnqgqs2eHem2tMCXoFihjWeNqt1w9qU6CTrhuVh1CRrApH1AhcZzQsEJXqxcaLyMTVo2QNz",
  "key20": "3BZzQTAecsYQiL5AaSv3kSQ3beBT4vLk98esmsLqiS4nPs2vQDmRt1n8z9dCc27XyxXMZy48CoCYALjBLcHsHmrS",
  "key21": "5vyhKvrAm5Um6ScGZg5bjeeE2tj7LWcic4SBJ95zpm6eXdQWkQSWPjwm5kRJXvdRLRamywJpG5cUnn9ktxrUGvKY",
  "key22": "4h26KaWqfszZu8Kcu7BsKmARSpPdq7YfB7NhKkpL2VZ3JNcpYRVMC9wWTKV6ZPcmEyUM2zcgWc7bjuRoicwtFHKY",
  "key23": "3dVHUP534YNg68nokF3MtUVy9xB7gyHemsgTwEQuRxasrdSpveK49ZXPDAbkRZcQV8gjEm7BcxDmSottUf8CGbCH",
  "key24": "2chmvs2BKv5QQ2rRbJiteT8u1ZyXUgpfSbsZ3vXg8zg1WsP7XSu7SAA3nmVNJ3YrnVFf6zLpYgC73MvRSdvZB2fd",
  "key25": "3Fu6WGttf3FLpeCpDEobUTAxhWv7QU5P5NCt5ARfgbMe56pDdoMLqJz9oFqNmCSCfc93SHtNQrqWpBkCiftNFDbt",
  "key26": "5zsS7pTVNmRzQg2GPF3N6r2ii7vVRVHpr8jduWjRw9mUbMNhEJRxVZVQZ4L8DLaXvvj4iHq7pXNGaJBdxJdXfXwh",
  "key27": "4SKwaeaeZbCwxmmdZPsmqoe9fshZxYphktHPAcTuFaghWpxi3CPBbHWLnYzigv3ruf1hB4X6Qdx9AFNrMJtzrwoS",
  "key28": "5C39y1soNf97FvnWTGgAGzGg5nP5ANRnSkBE3AWtXPHgx3MRDYrSVqn7pFdhmPdCTqGyoz4zuLC3hVbTAWBVDPR6",
  "key29": "5RkzuJsxHgGRSkGUVtdkQXRpp3JadGd6JPtkTvNH5PzaQhtKh7HJtJFYU9prA4sWqEocvmDVJNgXYkdPQxZgvjhL",
  "key30": "2iuRBte9UyUyXacFPm2cg2pHCrcckpvfYXppdeCT3MTxQGLJHCdznL5TojV3nYfvAp4CUESgYbsDh3a8oc8sddBV"
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
