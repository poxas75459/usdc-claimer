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
    "3cH4GnbPHe9towePuxLpG61kALkvMhxGH3DdvBHtXqRyGoxsiGJW2sheJWDcT2ZAvfWJvqLYiqUfY9g5LQzL1uNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGMhaMgzcsCM1zu8Tq1e2hgBT1AnofyEAhJHGUUbooagmXn8jq76qeoymcoTq8g2mz7q4VEg4sPLj6UqwZTU1gR",
  "key1": "4MVnvKdQvqNNxEwkqEhWCPseMjcN2cCaiDdVb8KdjHErYXhmbFnx8v2bVV5qrh2SoVU6N6utJejGtJJbnZdGd7bS",
  "key2": "2VsvoF3br7Z3fAHXvabRqUSirX9gKmkiEemnYdniGh1gig9PCXjQPxMGRofNQVu2Wb2n6uxATkHGbJHsLHTZfLN3",
  "key3": "5JrgV5KR7r7cJ4C1CCcxeHtihJM3kCaAHioVi7r1VgooGzAtnie9Q4dncpFZ1P6urvRqKqqaidSiLeh7vrsR8sYP",
  "key4": "4aNcKCpTyyt2aYhRW1T31Th7FxYSMYibiovRdne48rQGCqvDbWrMqTq3C99CRmwMU3ewvjMaDR6gwPsSdPK7J83d",
  "key5": "5H3JnLYhmA6xVQSRE3vTA7yr4rTMuDUVQNninVaTKit3QMDYrUFzNnL9R3A7bkGTxmoQzLyp67iReEA36bqrHuXv",
  "key6": "22yALL34tByaeYhPuoSJwMKZc4Zy9jxKAZCs9Svk2Wx16M5UQ12tQsgvRk7xtzvqWtNCRBFTRhMJ9zu7nYtNbcu6",
  "key7": "2CqV9ViM38FpTLfi2jSEgGtUBK539oaP6Xx9FUeESpYdSH1aHUcwfmRSKjQiJ3hDymRs6Bzo1h8Xt1WUDXYyVRuQ",
  "key8": "2g3Wk6oV27yVpgSDnruBP7B6sBx9w6pPkJGui8rLiF7xV3yhzhpjjzu1pv4EJkeRNpSmzCTjFd2nkdXzAcFBVQxo",
  "key9": "2sGoNWwkvWX9p6EAm3i6k45UViUxuqHFekvS8F9v6BKbkqnAHPgiazjudE2eEnGEuoboXf3CPLg7hsGEjrNgr1CF",
  "key10": "4Yfnz7tJKEz7YytiHHxzpiyfFdgEnrehHb9D9Ekb7q9qvby4aWtErCUbzRqc5XCDdeKcEU3rHDMFcVCNJxXE4JPv",
  "key11": "3WSUveBzHT78dZUu9a82SWRdjPU7Uq7bnSGaovxyB1kdQqR2wzVXU5egK4dqkjouayK3Q7ddeY1MRtt5TsFm32Bz",
  "key12": "2enASYJwa4anT64VCreGfYpN7G9gH8zkBEUiaKRiByhui9DLkKhyNXM41ayZdjkPmVRxAJNgJpF48TCR4xwvamGz",
  "key13": "Q8hcDQEdz1kSbWbtgeujjCv9N1Jcr4WftERij1BDugv7CMUYwhQF8xDnPt8V567e4XGhUoVxgq7iar187EL7Zzh",
  "key14": "4evQZsUceyJ7tsE8cWCvxNpsQ8gHUdJCkkkqhRXJJtuKfNV9GpzYVuCGxJge5XkHuxuCcR3tcCBVFFes4fnP2t9k",
  "key15": "2rSQGA78NxdtDtWavvNqvC6xiScUfJ1yFzLxuoC3rLFxT2T5H9ttyr5ZzgZJcKpD7ZjPRtQReVbxMJyTqM6bhjEE",
  "key16": "ERKaptHe8tD3oGW56afNu8qGkSnPj6MfXmkjupXutGkE5mDaX67bTCute4ckjjz6CY7JCb9t5c1kmtYrVEp34KV",
  "key17": "4Dxp7Em1J985DGM9wxQJB3kWqrzZtwBLD6tnqu4a5NVR8mUjd6DpcUXi2gQUWDnBQv63s4NZFbyNUnY2yguwbG13",
  "key18": "q9LG7rdt2Z2XczixLn2KC4Xwb7bBNeja8VHUubtNpoUk6QDsZrB2YUcaFUoEr8t28QiSH89KsEoAYgQbvhYwEAD",
  "key19": "5Lkh9YcUZQCSg7xHg9tztkoSpLYdhSgtrG6tv3L5eJZnnA54nVkdP1vq9vp6Die7QRGBEBKQv8F9L8sx5gZfCCzg",
  "key20": "E4VT4USQAGkT65i3CUwvRFpHJEcwg1EaWQQ9ztFyj1JM4nXNiawBMh55iY7rjuEVYz1MdVVwkqUEDtBMTNgHe8U",
  "key21": "53K3G6rjMa8uos7JSwFdzxRPzSTJkUaP8V3xZZCyz3DvX9JZUEk6w4U7M89evWr2vLZcJJuiCZwwz5EMgx9Pi1qa",
  "key22": "2zt5VkJRnReHerRkPxZEZZNYj1bAGLZg8Qfqo4RDKGYgziBUNNnaGScMibej596kDcEs8fj5HcEZGb6BSYE3z6V4",
  "key23": "4dyJJJe7GS1wJtycqaLq27vZxhKvshhiZi6a4exeu2aLuJLPrCtsHoriRXtDGiPRJkgh8NwazBCS9VR94iP6ZL9g",
  "key24": "T9MJ5inKCirvfBMAoUXysivRqqHKyFuYLNbe5QcaU5kbrhdTx93iyBUrSovsExvNFBLPPR9STSyvHPuxQKL2WRb",
  "key25": "4S3SYRs6gyRgzDoKhG9VefCcQeSA2eVsT3JHdGpDVRp2sofaqxffKfBqGFuFCW48RXS7xfHwTDeW3n7WTUxS8j9J",
  "key26": "2hwvxVSFvNxLoWVX6qzoaEyFMgLDPwAXPM3WAYjbQfy4xn5HG3HUCkpVb3FRNqaYiBCSVQdiFnyz3pnotX9LAvTz",
  "key27": "49VfiMgs3KMZSYbgkgrhWAFpLBMQg4J9dUKxDCT2gam5hbsqmXQGdZvGRudUUKYzK7Xfxh35GexeFWw2zVoetKVH",
  "key28": "5cgMHjm17WD5LYJGcqCegBUCyLbC7HtYbN4Sf2cy2DtrabsTJagABAQMpL9VSCFcCc5QuR8QH2RQ4Ua1RdcuyJEx",
  "key29": "4RieAMFvQCDN5rCZ9BebkpGERcvA1Cqp2ugCJirbhjKESuTrknHEPzbQXpzKbqawhY9Wfwer9NRFXYBKrWEtgT1T",
  "key30": "4vgE8bDkJKsbXyhNpN9DzsSzsVbaed6ZNMuYhTr6GGNH9fh5ymd9g7KCDeBZY19KiQUDijYj2SANkwhwyxwXc893",
  "key31": "3imMKFArTqd448QCdDrshkF4EmeGktbKsRqwoC3cqhkYzjca92SbGF2hCC4HQ6U7xDKyRatrJRxFqUyFQf9YrzN9",
  "key32": "5CHfa3ZxT1rB2kBJbeQgumca3Y1n4cFT9Q73LgkKaU3k5D7BoNDkAPxEFj8Fz9ayLWuBD2zDWfb1y8r8fKX5eEC2",
  "key33": "3WX2UEytfpo1FgYMSR7JeFCKkYCZfrCopzqpfD5ta6Urcqb3eSvDa7QSTDnnTfFUVX1eGZUQkw3kFzAhHvU6FUUn",
  "key34": "mJDGKkt7QQGrseWjrpGgu69qH6tvtKeu1T5Xz1reMyDooYMvK3HPiDGntUeEFs61zkQJ29HdsY3zMwmV1ZUtup3",
  "key35": "KvMfoF8P4STSc8UXSXJxDMeeojwMparncJPRSpJndKzk4zhc9PfNNNNVkMPEECaVVkffUbVRVTrkhoXiRYKSTdw",
  "key36": "44UJoroD5w7j55TQUwXPJPMRU6E8M6fDiVrHk71inWTMRx654gtuBBnsyXURCWGscGaYWUSTLdCGMJ753TDjLVC8"
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
