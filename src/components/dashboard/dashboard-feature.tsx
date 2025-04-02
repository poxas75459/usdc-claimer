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
    "xAe1W42uFWCtD5zDEhMCqAKBSJuKuTGuxPJtmMxZy8w3cy6Ucjjyv1vvPjDnoo5ZYSFZsTYRtr6DLffct4tNVjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrQomoN3RyDpmzcdNNnDaBXHkiPCAigsWLLuHJXtwLqwJZoETPtbdW1HfRd9tTbZucFSgCbAA9tBawqd6Rf3G8Z",
  "key1": "5zonYMsAf49DngnJG62RfPb4HvrU56GiEmFwzYZnKnsCGj9NSd6VYNphcAfi7Mj2ui3sE1mZ7bjiMA9T4GB82zMS",
  "key2": "3BeZRVFMM6n8HzkNMvoBXiKH83xnRzvUYguVVNeqkQUP3vGj3EH2pHBuuNxivJ3T4JGhsfpoGt2UmdpweJyaDXyv",
  "key3": "4fEAqY8h281wQjsQgU5QPBEKYqZTwV5gvGcZVuPkD9L9PVitG8cKe8BuRFpjndWk56rdrHKfyJoJbXMScqjNrQj1",
  "key4": "5fs9uybnrmRQ46bYyS2MSSK2rcBMWydzLcSLQk1uJNouYDgCQenk52RVqNirj4whcUBaTFBzw3YMkTmox5U3iZhb",
  "key5": "2e63aT74xRZqdi8EHoXenUmWqyxLRHZ18Y5pdW7GqurJeKSPkDYcj1my7VpwNEPyUCVBH5fDM3HgojY5AMZFey3p",
  "key6": "5z97yJRkdBuNLMbbau6GCKkh4JCnRZi5qoTgyaotnrSnSsJHA5CyKd2wRgvBXELFskE1JThvFVLtUEZxkPnxzR3D",
  "key7": "2ZHXqKExf6nMygfKX9c1PswCxibwdAMNriVKTGczkVV7Frz8SYaWZy8i9ZiQAbWgFKyi1usHFodD541YovEVBtZ9",
  "key8": "57Q2oDmJf3FmDtbvFjpkEBGAcwknXJuAW9rJop8fjEVpL8nFHTr3b1AjTsSSaqXRnSz2UczyoJVpDkQAAba1GDNC",
  "key9": "3DAQq6p5BsMZd9MuavzHnKq7xHXGguTg879jKors9sYjRzRNc4Q9C5TYCpKfHFzNWj33ARR5YBLXxqrtrtc13MtG",
  "key10": "2g9vN1H11r8mcyxXHQeTTavgXCa2YTsY6p2G3UoZB197JiH6Upv1E2jg7BRpvGTQyiZuHd2RTUkLzgN2c6bRdTJk",
  "key11": "5fhmKM9SxMvRnRWHHZUsGXy1dYdGurGcm4yat3BWrCUkoBBsNJ3krqdEkRW7BdswTwnkzmUNjDyjLzGJPasi8jaW",
  "key12": "2JzWBWa6Ku2DVZ32QRvEvTZmVm3BKvsGTBBPc59bH2ing6r7E8wkWGJx5oet4EwfFjfRdLfADryFmrcQ87QiwqsY",
  "key13": "3WsCj4Xd8WU5KcJaR64DWGxxvRoFtSRwiu61Cgw1wbUCAcE8iuXSoyBBw7dUetMiiwv5c4yMbFebT55xXv4i9rg4",
  "key14": "4Du51N4CX4gfAGLjk5dLA6TVKQN3GAPznVzZHLc1eiXnfouv7YHnfgfNCRZ1szmvqhceugMG38od3TR88RbebtmT",
  "key15": "3JU6xxm1NCzrqmfExKxFuop4yoGdVzuYCGnsGQPxzpsutXqVuxqCxv1Bw4GzDT72UemHb4G71VBVkvaM3X2rJBzz",
  "key16": "5FQ7CZw1zZcLDsjkFG7gA39TgmeY1X5gvDfueavY1P1qmAu2J5SRftVuwrnQbhUxPzzurfceXku9ade6kG5UZ4UL",
  "key17": "3KohujWiysaCFME15zUz7rnpLFQp9eMrG6KPmhC8praq3Y9KcVC1xoSRQs7mfxYeMr7wvJqR1xwNEFx9YCaqfcPU",
  "key18": "44dZNCiJA4sNBCTeee2Go34V4YM9zDY99kyPYjDxNud3Mbe8YFX7kZQuztDtp996ifZBBezMDtwLLwwuh6a2UU8M",
  "key19": "YH79ig8MKtv2isys5hLgXJULm65RkQ6GakFWQ53T3oX1Y5RsWULH43v3TtJ6hgKkpCwbWoyuyE4f7ZcqsrRJznu",
  "key20": "3byjhcz1FaNEd5zCPcZVsgUK9H17zdRASUM2jFEnnf4mvX9CZPSgbsrugQefyJjefWctQEX3XoDM9Rw9RCcTDfVD",
  "key21": "36NUEqi9q6iUX69F7Xrjs6yNoQGakGM8z7vyPyHuLGnCgZzhCUtb1wFe5QZEfB3DszS2YZoAmCJU1bTNzGMmJv4F",
  "key22": "2uv98c4kyZ1fJJU2Gs6HYdrfVLMKy7pbgPQ3U8M2atYuFVPyKVtg5dgEEw4Qedxdcwz5pchTpBBBL8XRdRNSpDE9",
  "key23": "24eMbebaVpVTntA5mhXwuJAzRTnnH8fKW5DDuf8zS51RiaGSwrJzQCyNPkoZcY6EDWTQVtyPgDg6tWs2TZ4iAe3r",
  "key24": "5o3dvvXxxpVqHS8ScDjxfYd4EEzDhrrf87YhB8z88eynGZtzWhJbp7s2qqNUANjDSGZdRPC7sa5wQqR22ZpDRm9g",
  "key25": "45dVLddGMJd5cv5QDnD4K76Ar68mWxSbqLEUyYpwCB5haSP1wLNhy67pAJahan9ufUHc8BP62TRWKpM8xoRFhpst",
  "key26": "rbWF12qq81UHziDDfBHGw6gwrZFQmqX5jMweDYwT5zeKxpmqzncLv3PDQYysvpakPCVjJKumX2FCnN5jzzFHwTa"
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
