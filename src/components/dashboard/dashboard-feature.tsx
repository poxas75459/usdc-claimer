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
    "QQaUeYfE1c55Eq3yChUYhwL5n62TUSFmBJXDZwxwKLHEW5R5agjJMG6unwEY4ZqKq5AtfsTRMDXdeZWDYsRxVRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RD9MB7GkSxiizJsn1u1AvB6kkLcQWwRUAtKb9v2z1rqoryUSDiLQBUFcCVBHVTn7dR19g7hsfVCy4W2v6Jq9XE",
  "key1": "4GaQsJkFZwSbzAcQvAGn2MAGQWARiSVZmPVwubszmu7GDNW69RU2QFzMnCs8nzorpASyZTvhvxaC4zeX731dPJ9g",
  "key2": "4BsoKswW5HKeyjrNZSvg2CKiWAtM5vmZc7NTneFG1U99Y667Dr2nMnu7gP8XCtydkjzBTn4MgHQ548D884m7Zhuk",
  "key3": "4cb7nb7ML8pTyDLb8LGrcH7mFpN5pB4RiqNwBVN3YQU37aN6dJov8seM4Dxb1cgZ9DkYgjoDECjMUxHVZnsL7dLq",
  "key4": "5GgmFXJbCtgeNpADUsNCgWZg3io89cpuKwwC6MMBiL861uvBJ1QRbwBkB1PB1uvmJxoVRQNa2EvmXuycbh9JhtpD",
  "key5": "337PXFVvD8k8u1kwewQfeogWKvkQUyRLhxQW18mVtUES9kuDDCg6HdDhpXBKKUfqhKFZnrwCyCiyDBudpX8mg35L",
  "key6": "358EbKPjUbvUA3xtCYUCaESR4NAVNWfmd9ASFTojXGVgcTakETFxC4x1PVXVdcoAHUCfYqpcmKyv9Q8B7KjgRiA6",
  "key7": "3Tg6t9ot9ZMy3oRKP9nBd4CPP1bNwvbs2kSaUE5zpLifxPBtNXNUtvmkzt92hiuq1Uim5CN3hz9Ymhd3iVpEYfme",
  "key8": "4ecZag6mYZ4aRM6LwNEobYYvEG8G1yKVGbSMzSDfu2KpP6uxvjBjSmEunjia5DriK1x7rPmzFeEwFiXHFHZ9Gmo9",
  "key9": "5zp7brANrxMH7TPP4enEAdJBpELDRNFqSz69W6jru2bRwjHtgeWsQ3SGnA4KZcE8w4ajTVo1zKVV4xCnSLerDjT",
  "key10": "38ymPPiQKyjm4Ehci5zNR7CvziFaC1TuDkTypn41b7zKgwoKfYV7mAbZiJi3o1oJxE4QHdkUByE2UTWQrjaBFPHC",
  "key11": "24QCFWN77BVjMVPoyw3Eamsjfid4HowLhgRxd5JYU25KCieLYPBrNDVNcg3uKTgnU4vpTpUJHDeBWFzeXbJ4494y",
  "key12": "4hFZEJEdbdeP7EpYZjZsTdKSfH3TugCamvSvW6x8G9scwwtUo7w7t5Za8RTRJcawA7h4FMLyjnAJyD5tZWLn2imu",
  "key13": "5Cu7K1qUFU5JFNDL3NSBwSwbUsfwnkhNPkQ4usB32Nb86GehuiEZH6thMs6DsYw4xLZzHtYahBeoxGYLEJZYTJnq",
  "key14": "4cefxVyFTZXt9LHM9PTaQSjmdsUPfFCjvGkXAETpGvfECvHhJkMVdThU9pZFB4kGRHLHLH4p9YjA4Grk3Pov5sCq",
  "key15": "7dPs2VcaNahbNrzyEQ4XQ6qpGJjK7jppcjYrxheKZBT5a4Vs1YHEwfUZ1HxufQRp9i9NTH3G7hdcPLZEJVyHKsy",
  "key16": "43Zaoa6regmaF9sT313vf9yU8Snx6A6rKZ5k3RfhjXjQxzcidMrPTB4LaJDwCGNgEUnfRzDN6cwKanvhykFD8c9L",
  "key17": "4Gu2AH6j8hHjiYCvK3DPthyGeMg7wMZbouC3sHM1BDoqjozLjNSje1iNuKbNpxNbupqoVYDVaoqALrm6ynjPaXzs",
  "key18": "4Cop6FKWNJERMDzyc2rBeR7ctmY5Ri46VCn397pYyPKuUf69kHF1b9p8Q6596f3ktbjUmHkXi46kyaXWtm3vYme8",
  "key19": "5rhkqefSFL1GKeoHywEC6csdFvX7rSWqwPs3PR6bJMbAnUqw39ARqU4XSNavGhXNADdiWeHbAxBBYzTzmnaZEBk4",
  "key20": "91MPWsUWcDb3WJoQ1RNMFKssKbrmKhGedwWVwx3E4nxFYT4KUAK39VENycn5fmg8XUZiHMJcecYKQRn5tCU5AyP",
  "key21": "ybw8DQo2uzEDCFppY79Xnt1Uu7wDMsjte2uDX6ZkYX7jS1aKuh3c9cQLrSo8oZEuxkK3wkn8bokgJrtzGKqa9Ss",
  "key22": "4EjzntwmDguuWnKwLmaxgRv6ETzHoZt1FP8bPi9wnUei9wiuLzAM5FMitwRpKAC3mTC3u35a71Uwo8SSZ42TApsa",
  "key23": "2jDsD7Ww3ArTVuU2WFcMNuLPJotdBqWofcQ4Gdof1eTGJQHgetpX4gaMhW1HdUtPYdzrcDB81Vqu7PCLrRvBLYD2",
  "key24": "3dDNRw6wGW4YG99AntmLETqjMAEp4NRUMgYZn3ms2F99kQ4XDsRByQ64RjKGaHFkHkWoADcPfQRuFYV5iyiEhGdA",
  "key25": "5h12mrWWNhXcvY2yRe7oXNGMznbRMPHMtyFMHo523puZwS8FUkMpnGCvbU17UwZrrukG6AsTBMSDRQju7Nq7QXRC",
  "key26": "2RtpCSAjCooRRBLhy1Pf5TqNv19LURZwhqAb5pyyPndzas8V5HBZH9hKKnSHgYKjgDNq3g2HjF53BeVZMWsLqC81",
  "key27": "5Guo7THyW4KnGyZFzWz3DvUPoCEzi7CGo7SFwmc24bYAk3qjbkM4xbcGDABD57RD6MJeSXhKmYFnN9W8kwMhfGTo",
  "key28": "47MU8iwsJpCuxUUNZ2SzwG1CyuJ3HetVCzygog4RbtuCgzaXhcpUrq4njJa2EWPbPjsCCHRAeJfZeajaJNamfwFP",
  "key29": "3CdhC35uk7BS96Sntcyd9GnYNvFs1f4VSEVxRM51VvXFxSX8AqvVoSSbrPSbA8xZsE7YeiVNkeNetecWTmCg9jcH",
  "key30": "UgTwuS9cErxnCnHA4RAV1jXFT8VnvhJaPGTEQFzBigVqqoUZ31V3MWXyN5LQukbxD3eNyf36FzhpFJ8VBtHAvow"
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
