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
    "5G17ohxo1wJFnjcZCPKuodzPUiqxjbWDk8ysdDCqcvTzKcHf3HADiwV4X5QoejLw7Mzz3G9HXWk2d7WUxg893x3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pR2wek9HA2QUnemaQ1DboEFN7c6KaNKucx55G5NJYT8TaSMnupziqB3ArTZ7fkbu7wgQbCGMDhp3d7uJzwDp6UD",
  "key1": "cgTLniZ865LjUi3pNYeiyQhE8dLoYGYWjGY21TgXqrq9f1fSoofnEd3AVQKgEjurQFZ5BvT2GQx35mT38ofoH4j",
  "key2": "3vxscnjzzSdMccMuzKJCcY7oDf5AEbPPd6k3msBLmZPGUdFq7uGLzYN6wFiezXwFQcM5Lqz1ib7TLw9c2677BYQm",
  "key3": "FrWm6N3HUfj3CZrCXnuGHsEYCTtDZVDKeFEtkDmuoizjKLrjndvLreLuHVGYrHSqU7ZSkH9z5LwP94DDN1dwZKm",
  "key4": "4gNT4VxKjWSdyKa3h7gK2SBXFKdFB8ipTyhWmzrtpeBbJrpUys7JkYaZ6Q5y3ifPLn7Wdbv6ypcBfL3PXLfWSbnS",
  "key5": "5eJXkNZYNRHmfS4exoBgd7WB4naRhAHBXedpihCHiUoJqGotBiBzfkmmKSCbkwywFn3PnzGtNU892TEcbWaHD4mq",
  "key6": "4nYu6Yq75Dkz1nhdncwx23ZuFMZD33WYDjK8QkkJNUybFSiBDTpUE15p6ujmTVBH6BNvvskwtrQRvqagoCWJukqx",
  "key7": "2Wv1aL3GtmfPckTakiJT4fD1fsKk5ruVK8hBR1UFbaqs18qNbJpesnJCdViVYVDN2L6KHCqqTSwxf7WFG1BuNVvY",
  "key8": "2jth2R4ALj6xgR9BHMNFWEECm2B4XrGeft8AK2kqpvjWSVuk7xMn9vTvXDdbqKZ2Q2WaeE9J3kL3YVv3hWJn6V2R",
  "key9": "3nc7hMPTmNqr7Q14KxFwQmTw5fqnmHGXt9i7UZ4ZwBrfyhBbCVRLq77KhxTWwaj236oZppxxdPBDeoVpjaUS59RL",
  "key10": "5eyAJcX4TLwYDPtcgUn7xnQCgcpBnxZwb2GYKvn41W9bnecN9BJbagAStkJZaJCoYdjTkW4w2WYmMgVwxnXUbr3R",
  "key11": "3NcAKfCDC8ayoH7PAkg1b3ptcj9ViYnEgn16RPmrYwSMoZcjdbNpYGzGdR8fZ5NYBYHrCSjzJy7Px7TifJoL2Yde",
  "key12": "4rgMc3YGsrvZis7uFLZpaGtiZuEaNV8yW4EmbUEdVLSWSJExheQcrnD1VLvXbYo6hm8aSBEwqawhuRTZbQpkUsCP",
  "key13": "35QEtahQrbc3hrkq2Pj5kteUtYWzVw1syK1wKnz2ATHxu7zF5dcocsGiZRZg5XTmXsjS3HrNr6VEU7jxm6d4aAQV",
  "key14": "3kxTsEjKaQW8HyD6bzKXQ5tgZUrK4vznSMKjDG4VPwq3b7Gxt2jAM5uCBeCrKhR2B3Azt7W9Nc6PVQoGKCLYYcRW",
  "key15": "5cHDM4V6iWzvvFCjrNnGdYACh4i922goqvRQv5vJbDpxFDHK2jygnus3cw9rKobvosG3K7Qj7EHCGPvHY6HugxVg",
  "key16": "j4Jdvev9TzBFHGKHifmeLNvnKn5d4JyWU6dSNZKsaHqgM9P7VpT7RMFNaAVzr5KMeDwxwJVdbdti6gBiXEwzAaw",
  "key17": "7SVapEEDYU2c7Ea7TNfCs8DRpwaBSVagvSACrSvEZ1gRzb1qJ738DoKU6ULrwoSFEDx45zyNRe1tbga8tWwN1zB",
  "key18": "62aUiVLyEr1EWadkrnTR5WzXYA7wg4XshXRGTo5oddgKAg7db1fRg9aCmiNJDmiSMHEe2yfuNKrr1386meh7mu6H",
  "key19": "3ZvS74NuHFZViPqdQ835Mb3Yd7vc97z1EsxgvSXViVVR2CVCM8JWQUNWaWkajc62rBT8cLRbLd2UntZLKHtSNq1V",
  "key20": "zhCBEMFA6jVZP463h1LNZzGa21YgpEJXUyaqe275sXtCtCeGJER7hmZ7PP1677BmWFXJk5KZu8swsWBpgKp7hbz",
  "key21": "4YJjkUGmjH4q72FmEV4PAYQF7gnB68W2YzF6BuAF22ZNuz5tVoVkx9vDWftQJudPFxbc2caibbGTMc5tK1QgD4yC",
  "key22": "4w8NHacuZBaMaWjLDFh49DjLGn6h5PAfoNcPkzJoH7Gwmsx7yYMerN4MDhwnHrotRpH5gTNANsXCEkaks5ApUPZC",
  "key23": "43RsFdZhXGD5qhMLgqmgv2N6Q1RpindPcYtJQ3ZsE3VcpE4bPSD4uos96kYaJBwAAmQ7YJZNSYJ2uqMVm1gdcjNR",
  "key24": "4tJREUnbnTd1GSK5kCtfsNjwX8ZG5Hc5SJotjXkybxvgbtkSuMhAWM8jCCivQxD4Vp8SJxBJcNVEpyXP1YFb6f3i",
  "key25": "4JGpmXw5omffwTA7MXTNDKFaEv11chdgLGPJTjRW8ggRcbx7QgKJLvV4HamKrocNxF7uxMzgXQJPGtfS3fGT9CRr",
  "key26": "5G73dVDzoPT2BKNThkxwEjv3Mao7MvfYob8mD71fvavBQ6LcqF52NypNkDyHEQCL5ogFVktGudeQGx8DLPTs2t2J"
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
