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
    "ssvBvVFu2aUUfdBiXfv2Vs1pAfuYzRqvw3veb3uD5kDrVs4r4QESRzcjRzC9ygDUNnPEFdCsZA8cbgdp5284ZWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gGu9fcUqUJWPaWLZmC1zmBdKzisjKB5Aiira2f17GBo9JksYkw5Eeku8NzDy945qQjQyS3R3V9sdK2TRtuhEZMN",
  "key1": "LaH3tk4JB7PeK7Hgas1ejPs91Kui7f86VJS9quqx6sfY2y2PadFz46WWS3MxmBmqpUK3AWoU6EA2sbNs3VVtfc1",
  "key2": "YmZHrwdPi9hrinwXbzuvF3258nrDnV9monQxRSobb1mnGX1FcVXnDL61HN4G6zb7UNdZPPyEWD4VQ3kiRffRMFD",
  "key3": "5gzzqVjSZ4CEMLnJB4zKFYNUGthG9pAuFTynhN1HY5R2p6SHAgarJcW7cjS6KsXSQ6AVhuS24y6feh3NyLyBnq7h",
  "key4": "2RVFSiizf4oFvQr4umo8u4eFuqFcR6odnyqhQi4BtueAH7VL4ci3vZrYm5YRRyutudiDaGe4s1FUEQBP6wvNYh24",
  "key5": "2cDJyqQe4HYEsy6MSBWuTxKHgG4BaPvSLnjhkhrx9YHsTx8yFVsWLtZdNxpg1JqWvpAxD4XNSPZhDY2dagcNYFyp",
  "key6": "3xJTD2bk5Bg9bMxwvjkPyuCMUuan2JsXzYZPQJg6tCHx1C2fBAjQecAureyJ7vJdwRXj7PH7pnxQwCg5S3pYFpo7",
  "key7": "558Yce6bVqeYvBrn5mizhDTbMRx3vBfiS5sX3V338H9DJKRyjrcHnLjJLGck4UCGre8A56XKVsTLENQVMhxLCFQE",
  "key8": "5DE5onk7K3bFP7S4Dc5JrpazaG1qgjxasMm3qCr2MuBrvaDSv2gt9gBJSWGnP6hLBPgCHNWUN6C9njicJn7GrN8h",
  "key9": "eWaC5HiF5seX3V49nxqZdGvWzR8v857jvy7RAoqzo1ekhzVJvFop632NX7CHJR9Sg4PPzFGY35zznhNwCvzC1EG",
  "key10": "2twqbCVA2M4w5qxmCtiJaFXGDoxPhVQVUmCr1Cig1aEcGVzPXwEXzyZCHGPxvhdgxytsxst4czZZ8rw6wez4TgMi",
  "key11": "3UK7i619ihkYLG6oo9HuaiQNG5arDRaVECpLaQzAkqinUdQzi1pbbv5wm6afXeKvVozaSyGoGM17uNc2z58VGWZx",
  "key12": "3ucaJ1qkNDBCS8DixX4dtfae8swzfBPgUqUrmvmDvD2df4fXsKXMGDq4fzN2iXmZCk6rTsErzWraZPT9dNGy2XVN",
  "key13": "5ZKvP1LN1uj5pGKbQ3rLUotSy7ni6KACTBAo1ogx8Gq57nQdWbEFuauqKMb3S8sGgXawb87rrYXfoMMNFjodgBeu",
  "key14": "4GXFmJ49xGGBrdMRQxL8UQW23sYtyzqFZCAd9VDWW4Ph4uPtRbPB2mZHViEKraMMfDuxsFHuGSAMQXkCYe2dzdxv",
  "key15": "ZgNWLKecaFFoc9w9ucAJwi1KiUMA5Uh8rC6MmkG1iz35RCBm5Xq36u9LBs4nNmpmeSeSTFHiSeubar2zjZ4AjWc",
  "key16": "3MemEiKCHQeZ5cNHWT19sgs4SHXzTjm91DYYuyxSw5Pmac5Gr7heaMsQu7bW7ijeiyC4HsgtNQM8BesjVBNyU5cP",
  "key17": "2qXzDApxPeZrYPcW5VHaeHwoFp1HrRB4oaiBiMZVsHG7uiViP4HXy4eyBbToAxbd25MdFftPYzbgm9x4FvH8Eqwq",
  "key18": "3nLqvzBAuCRHQs7pjD9jhrRezYQGnBG5ePVupoRGeepdj3HRijCWAjFfAmji88CgzBD8VNW6DrJcYVyDshdxiVVg",
  "key19": "3sSAmUBTubX8VwEzotmzc9kM1iSbsUrx5GSV6mEgszXnxy7uQ21mp5g73fUxLcPqkW5Q9zgekspmmC8c1mhv9b9L",
  "key20": "3uyJqKcMHd3jcdp1whLsFBi6AjZmuUMAHktwVrfCt9c4Zsije2gRLRHmocyS28JKYmAejDNfjVfc432T7GVB2d4a",
  "key21": "22aD4F4wpkerpHHeQ3FtC7uo911KwkipY6D8KWUjJq51pJEwWWwPw4EBRLQdKeDStc1ayrSkEVqoFVnx4YUUHVp3",
  "key22": "3hVEkuafjhEp9wmm9d8W5DMi5Coz8pX4KkVF1YJRLf251TY6EVA7f4RmVzKe8MRBikhwbeu1P1aTRTLx7we9KGbD",
  "key23": "4aF91PAsKUWmB3uCTeiqgL8y2hM8vSHmDyjaE3xHcHttySPf6bhwuqJWoSezK9JwHDXnBgwjb5MqkNadDSF5voeP",
  "key24": "3r2jt9BrjfEXqFdsBfYGxtoVhbpwVqgVtgfckCaBeczbjDX6EdYzhUeoT4PD5VSVBy6mMbrzw7EapoyhLxyHtGmp",
  "key25": "4wiVuEAiqRLUW2UFhnT5twsCq5QzL8FCg2UkcPZNSf9P3uMFFLnWF21pdMyKC2bAskuwFAP6ADVzENrdXKypvo3P"
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
