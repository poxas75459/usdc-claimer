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
    "3de4hXZ4D8tCHptGG9xTozeuowEjn445UPUpnayQoYZRZZruxLekBoveRKAVbvfni9DGiaNp4GgDMKtFv2euR2vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itMQ64xzFj2154uQxspk9V7gsqsek4qYeGz39cuK7tbrpgC4CuRT47eH3Q32fjtJYZqvSACKZv2Sqx2PZNeWcK4",
  "key1": "41VUMEXDUUSdSsmB9LiipwrjWWeYZNUCVx7GhxgPe98hb6f7Ey8vg4z1XuiAr6iKicNYScB4ctS3CxHaAykw4gpz",
  "key2": "SznHRcTBNDSqWshLvarrgLhtqRvsanGTQSU2tcb5PTyqvHHw3FpCirbF84WEQEDBtwuBej54vcBNkCVtUZV68Zb",
  "key3": "2dABgAAYSoYUtNfwc17k4a4eZQsjd8kwcyTtNZRSNryHyXDT2JLpf4dnxg84fFw8k53A5YFFk6tybBcreztLHo81",
  "key4": "8iuPRJ32NLSVL1LASn8La2yUfmzLCkZWSKAWRNUVxyJoT4kDLgfiVp3R9qhSQYnVRvFsRq6m2j35yQ7uMtCuxJA",
  "key5": "4m89ZgH3RkM9jMF36WVveyU1i2T7b9yz355bZ6tE7AC7CQY7AQKz2CwZJ9qMFqHE9MR2Se3upVFF28SzPPRP6rLH",
  "key6": "5EYpGdF4bLZr8Vw9XouzihiNXKJkYDSPjzePHPWzuezi8LkKopyxpFw7u33XBUft5EYZbvha8rraX32JEfUQX7X3",
  "key7": "ArP75HyMki2TL57Cx2NPMhyaEMdh43nStsJeJ6TDuHBfbcXksx2Zp53aYcC3uBGLWeAgASiRe6saVwv6k2BLx8E",
  "key8": "u31tUQsBEwdXoRYXqJkJhoLPt7VcFWQ6aGHWULkVutLZbUrqBKcC4MoLPSxaLfX8fEjWkFsHTT4R9cBcHcbPFPc",
  "key9": "32shTPNDon5e1phh9GKBACgzxbVYZ5EBZaa4RxCDKEmqLe6NGmsCwZUbmdrJLhSbuR3jQejtaAFw19MQS3PYpt3Z",
  "key10": "3hX1NrVG4Fzs1pXC8dJT1KRPPsqivfVjeUHGDn4rH3yFsUynF7LF3AZfWSJGTLcy7SETQuNbJWN24omr3uCx6N9w",
  "key11": "365d9ie2yVSrf7nKc6YVo34TSPtLQfzARbUscYD3mmvssuUGeT2FtuvLbC1k6HWozC2qR4WpmN9YGHgnDyGiaQDL",
  "key12": "3LTvrpH5374Md22eB8at7G7UvFaVoxpWTyL36zzPoM9kjwtFXqUwiYi3YCw45BB8JqYHKnJA97tQFFpPFHDNAmvq",
  "key13": "3EEQykWNRUkuHEXKugMq9iF6obhmfm9orBVaAud29CV8VS8bLQewBENCXcpre1aUUxYttH1pwnZG8Ca6pXXVoQNu",
  "key14": "5G8PWUGSwhFo6gPMZEiYyFMiAJVCgX19xD9chfbw3JrKZB48wPTSEWKQqJzLXKDKMo5Q9f1JiD3Dncizf8YZY5Kf",
  "key15": "2bv89GyqXz7L34dYRRiC65suACTayeFrpXCyMiqdx5nGD2ZYBL8NcaoR82i3KgiFFnhUtyXM7JfySbYfuPgwxoKw",
  "key16": "2tEFaKWGRD5f3hHVBgAdF9F6kkv1caQV8qMwfJqcE5xGbjhbD8rkt1bxYpNPc7VajbzFoJXgQk3dHkqcmdRdLvmu",
  "key17": "5kECaBQozxaYapXW4LcN54Jzu36GyckGDSjHgnNnKtYqbDYYhtdEPFyKPC1VCcZzaQQaoTwCqC7KgZ9mxo4Zjk2Q",
  "key18": "5wFn2X1M8PGsvGT9xmd3mTFUuN7Emo1xChAjPEejHHaDZUaepsnpMBet85qHUbbTqWnu8f2fxkGX9A46znLkD5cc",
  "key19": "3ggv2kvP3eHZieEgE4MGCx6czVwpy8jCDa8VAWdGucuRFPRzbEhGxnamioFevSoDCAd2vkhwiQqmVFJcadS3GYMV",
  "key20": "47jxG81N95bpEnVdJqQLDzGkuTFKKApYvPcABhWcenq2ZiLrtyC6N9PFWZv2tCb4UuZmEDtLpomauHedXLupxC1C",
  "key21": "3713qxqsDCK5mPXWfPbf28pX17hmFRdzusUrJn3Pd6PSt3N3Baxj8TV7R8Xd7GYZaRQU7MkNhitohtBwpk8XCNEv",
  "key22": "3QRnRK9ucBdMHK2jeHUvX9q5M5kcgVHRsBbE5HkgSNBaaGxs8yo8UsgudjHgE7a1Zch2AF15JfQSTAQhVzP3rXZk",
  "key23": "2MaMxebakQA7AhNRAsPwsTaFCmqWHfZUaQikRWBW59NRobVyAYRKu2GLALwyWqy14HTejHfknCTqhP634mWe1iYL",
  "key24": "4PAPs3CeNriG3bB71qwxs3S8VqddWieyU6jKYBts2KwxTSEy3eyCgJcShXWwziQoCxJVZ4xA9vGU78KypBKJnSES",
  "key25": "AbQdETFTTeSYsvPoWLdS3v7ebhXYzxTezsf6Xt4caojH2XFPTa3BZLvs2YpPSuDDJnTmWmKve8cpRkcCMdF7gvb",
  "key26": "2yJ6tgcyeFBEt3HzrRpENdv98vBD9KDNz3KAUo7QeEoXHnhVbVPctmHi5pAx1UKaPPLD8oAB7YgC2nEzi9N7GNPJ",
  "key27": "5z3KUPQRZo5C6WydfuNXx84NghcpndRXJBAmiz3FsVqCJkX5iWr6UvMJah4kjs7myejyR8Yh1MLsRrzAL2Km5FYJ",
  "key28": "5Dy3uhYM4b7zQQP2HAjNkUW5LyvPqFzkC3HA9nSNaHMqQmGskjZKjgkyV9vJ4cf57z1Zdf9GKjffoUet9pdbvfmn",
  "key29": "3ohuyGhBw6QRW6n4AyqWKRbT7g35jRtzMvEFMUThjRQRij1jZ8WMiz9QXvsDC99335XGVARmZUQjeDYrsK7oGeQm",
  "key30": "2CLBGFPkwbXiFHin5UrJeh6ce2DcZqvJrPyCJCfFHu1THfaech7ndgEZ9dUU3EEfP47SVpribNwEFym8pSFMBoqX",
  "key31": "ZK74FswfUEjdfzDxt6k1y56FykKXMzd62hbyYMg7QCdgf4VEoa5z3XKJX74w4PPnfW1xfzEcv8SHV821inDLEkw",
  "key32": "6MLxb8f381pMryEMbXdXN6WgKvyPynVjVZU9sX3crc4uSNNQEyomdstHGA9kyvSVwGCcFEC486PkMnjJeo3PMLM",
  "key33": "66u39YKxvAEFfB5fb7WgDUVCwRBy8wNXyTioticsWgXx23sonPgMbUnZA3UFmrmcknwCDsSjaWMCdByCs5rph3WB"
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
