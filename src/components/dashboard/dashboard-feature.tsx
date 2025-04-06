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
    "3dk7VQH8KU9fJN5usSiWTiMKK1so1fxsZ3QhZPDHoEhqM2Wis8wNgd2n12aUSVo7AUKbpheDcJ9H3z9QBVA9NtCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtXY8XK7xdBi24Kdd2R1N8A3AcEwrhCYP5GDi3S79YZoQPMApdFD8a195ruoHqpsPbwz2HC7PxQLZrHjyV3U6T2",
  "key1": "3aHUqpA5dxeH6nNmWPJvGm55gm5hqdWcxJ37nDqPziTT5FsGmGkdLFqDD6wy3mSftYA592KpeehjGuYpwDNQM34Y",
  "key2": "5qr5rh6Cmr2F2nt88Yk84rHNtyRKXS1XMjdDadEjUScR8ibcSbZWqbU2ZEjddD1VkS5y4qN9y2bxGeqrNkHgb8NZ",
  "key3": "4RaUrhrYFJbP4eRfsG4Kz1PcWZdgS4yqi4895SHfEe5T3thxp6umxAL2hkvfZanbLgHQ5x5X4WUztQCMpUV89cKG",
  "key4": "4dzuRfnFfnsnj5niaV44cLqKFrUxifwVroJu5se5d9BFPrrQhfhENLHboJ5wAxBJdg85chuVdu8mUh975gmsRBPM",
  "key5": "28ziHbfeKm7U9CMDeBuELGWXnN7QdHgPqZcqkha8eschCPpEbbJKhsxzoUoYSsy2DUB9F7wns3Le4HhLeUNCQdeq",
  "key6": "3sotDQb1kiRbs1XHNcmWexgJVHQ3wCx6Atkc6iAyAv1x4N4HWBfZZErmcmRACUyC4BdgfvHbSX1vxPJYTBNKn124",
  "key7": "3QDb9mmkaYwjcQHuE4442PPtzdZtS6dPramdBptjwFjb4uy53p9rSoNh6drnT3WvFLPecDn4Sf8RfKhJHqmxZcNb",
  "key8": "3ZsgNX34FNUVAa9UNdyecxiLyFiEiheDDQxoZ8RXphbpedyytuD7S8TgbJpRuLB9ej1xqdZcS86znvYQY4Mmd7ny",
  "key9": "594W7j7ntATEBZ2kfgWYuGoy7W2C2bu8bhXbB32SHwVe3K5X82MbxTjGtnMGrE34cL8NxNRCojKgfK1HBmtgQUPM",
  "key10": "Dd88ETTKzP7hnTLHZAzku56vGfmb6dxSKjx69NFMhqnMuFqYK34XNFCVpyxKYhTFuxxC1d23Y1MXSF51gF6ZY9p",
  "key11": "7S8p5HyMS2xoqLTK1X4UhpHkuPyZ48vwm3VwXpwoThG1cxpsTwQh72WTZxJHaM2sAKcsQetCijkYJAa6nNufyqy",
  "key12": "VXvutaU3Gn8uz5RcPohkUHkfygSDmbZkaeHKWLbkRd2yxZ2MBEpFdA2zgnLTgRYMyuQzEi8MeW7EZEe62CJfsK7",
  "key13": "4o8MDsMbmuKTh8ygfsX6xDaAQE9e8xy4CNaX2nDseYiwPxErmTNGXGy2erHEnecbWHkJvLaLAus9co72jDVDASvz",
  "key14": "2mMfxnpNehiw4hgEuCqtRVNFMPB4Jkp68awgwkNjtYiBuARarNzpf7ANQ1htqEgbJe6FZCioTj3gar2xW4LNtp6C",
  "key15": "5GD1g8cZGKvKb5iZFVPnpxHTB3CKkTw7W7vgdG1W2zsb2NQkVdkRLLJTecPPgBCQMc9r7eJ9yfNHbX15vVSGAoWw",
  "key16": "5YP5Ln1AmRR36FmqavmXvrAwmjfWearniWzj5EWuBHNNcEogicam8eEUnLXSYoEskrNu5oBvtQ2Y43t4uKrmkkow",
  "key17": "2mF68fbsoXapJtrsbiEV2ZVJWBzWoEVmHUtcPcurXeMhPiMjCjRjP8MjaN2SBwkKQSu7rdBRqMwMpJTD27XnPF3B",
  "key18": "uc6PFFETbATpcNVcZxGKkzcukLYq94YBA1fLszt8cU4j9E554n6xK4zZvQTQyzJyEVTY1FvJKC3TeZGMxDVSDWc",
  "key19": "3VfBtB796LENz6BFqpnsz3rBaP991rbymGijxxBvmgZcajWRTA5scLHQ1PQDJwxWRMUvZdUa72iVgGwB3o9h7KNu",
  "key20": "37M38aFeeJD4VKvhk7t727T1c41wpiagMf7kCAAinGRJEZ1Fo65jenPrBXyNz49MFDEWVssvEEKJnx6drKJW8uVi",
  "key21": "5o5p8Uphm1sjrUo9KU24JjdnQhkGKFEurX6wM5VbMEDuugdbaBZCZwNeuSsKGupZvicN29WaxhterozYu6imWXcq",
  "key22": "CM4ByAguTLKMA1MiyTWxFsyZyqaQRFi77HtcbutzvRt3eAeAJxwyhqaXY6hkmjW1JqyedCMe3gVpezQAJGMwAGh",
  "key23": "JyoRbnLVanN336Q8W3MSdcsWtiFZALZKPbDB28ypWxp8JdZohpC248pHJfwGLgLKuyJGkEbCu1W2npmeVL95m6x",
  "key24": "3BKFdrKvwXS3WrpwwDdpv5x7YEVS2ox6ZKjYQjLsYu5Q39RwnJHNqgRr5nMi3REH5FM9S1p9v5965MnNzQzwyL5A",
  "key25": "rvMZdN3kDCjKqKTmQ1Pu6ZkeTNk3zWqQEESmPjGGtCuQNaCH4YYas7wwHs523cBisK64445PFXQ5weJ48HYiJAs",
  "key26": "2ZMNhXUQp6khhX3HHf6B2ijdGTXHhYYZ4NXG1tqVG8bX2j6QgJG2fxJvBqT8NgDifxFFon6FBWpf5guqo46jBDNh",
  "key27": "28q2DXtkHieste4AfLgxiAqk2TcPnBFDeKccsyZ981SLNksSUPzQ3pwrSVY4dnywe74FXi6AKMfSJRqHt37rnpJq",
  "key28": "UoBmGArXiJpRtpteZBnn3CkZUicNy3jjWAH7vL4YnBAg8c9rfj8kP8gAX5oMMk8JQ2VZE32HbeYnFMkw44HBups",
  "key29": "k9hXTj3qoqnRdJRYeJU4Hb8jQy16VJSL1yRRet3TA96TcvTm4aMRCFMorsYQgER9haAdWW1BBQe1dfkWFarbkPW",
  "key30": "3CM4EqK4hc54fcQ4v9zzR3fUmkt8fDQgVY5JPYz2vuaPTgKbzcDs1wFPJLproeLa7zc6UFpKPANgdsCLkhjfMRMv"
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
