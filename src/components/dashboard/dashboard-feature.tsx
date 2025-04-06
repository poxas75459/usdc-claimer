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
    "2jvVLgs4Ck6FaRDbprawvdNeUm4uCEwN1meJV4eoSSsNu3EBSrRydfZbq71Y6p89xmHQ8BktKCcLG5KijyBBGzns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYTZS41jTnseh6hY1191daT5oGQauutUMHbUcKJN4XF7bXkwo1fFtbkbQqEEXufwqHTeqKTAQLbRaWdgJeUCM5o",
  "key1": "4wJuxArdpAMHf4UYjCQhHc9Nf86QZwgbzwn7XLGD2sKMfHqHzAjaoCzgdS7ahgTKLxfb1wNmTbPF2T3LAHVq2TTx",
  "key2": "3kyGkEQrSH5BaqqJzYeojAwgnmNUraJLqBdzUyu3nwdqicL8XdNfhp9dwaUVFCdZpiTnLJstienyznptqdA6qrjd",
  "key3": "2MYV5sRGWF2nRWhEPM38x4U6CyVjvDDt7sz5HAQkyqJCiUum3djsG8R7yHudHPYwhrMbND39Ymq3QSgjHvVFG6sg",
  "key4": "2qjJfWsdSyRQxqAPCM6sLetgFVnENb1MFQs677k26LW5JQ4BBLBuYNRdvWcha1ZMBznRLmL4BB9PxAKHSvQqTXac",
  "key5": "2Umf2MVS8jEoTmWMiPFXXf8r8gTsDB4MhR4EVdoptHTNmPcABozAt3eXAWGWTDpF6RToDiFgC4iLLS4BfyyNiitu",
  "key6": "4XoMMPutmTGCRv1Dzbh4eC15JsqrqmFFJ8ioyMap26gdW1s7s19vTvH3AJo1n96inhHzxkE19kBNE3M8ENu5LtV8",
  "key7": "2JPKjyWtt9w9tJNRRfucPrpidNg4eVcX8XBuogoK8JGkyG8rG6NohCyJF4yXzbmdps9UzVVmXcQ1zkUWxM4GFgmc",
  "key8": "5LeYfM2CUijHQkDygEmm7yKje6zBtLwkY64eVznyqbdDtijKMD44S1mAZZv9ydg1v7T8o28UtVNTmrChVvPkbAVP",
  "key9": "3cgybieazEL88SYcqR4iyYzVBnW9STqdu2SUZHkUhWtZDXGtV6dkrNw7mUfVN6aScDx2NHve4X59L415Up3x59FQ",
  "key10": "3hR6cupeRm37AUfASJjLdi6NgnGuEwP6rYVc88nP3vQuJ4kgzDGgMHibj6o2sYVWR1wzbhBXqeTWj7HGWkTjDb2b",
  "key11": "coPAZ1n1RUY6wRPAijwa3zLuwsFUfdug2JwHakoJ99YpmG6AZFtKJuqAhV2ufLhb8Xnzh1GFGDcpVd9JpDstSeb",
  "key12": "55cAfwFPRefuDFsY2aqgkTSbdsvBwpK6KkFx3NvRzLYTAUfoaGVzTiMRU7p3aQAiPBrYu4P9B1CpgbFMiT5mstDs",
  "key13": "3rFukg9fydZhk5FFXM5xqrRE5NWGxRYzAYQWemMWxnDDBCdtP8YSWyP3vWSMgebF6rLVyY7L3eWZn6uGgvEgfUbw",
  "key14": "2k4CgiXzbpXP5fSqS5FJBDcyXcp5uhaSu5LLTcPRhgVGPFf2AJPCuASQ62qfZuSnEKxzC7pGMQQn9BsTWXwoFXEE",
  "key15": "3YeNQZHNKebpoPQiuExt1W3ToXUGgGmUi7MqjLaR6rC3wGyLe9RKcu5hh1pR2C1bXhM5xH94NKA64pE3us57nsxX",
  "key16": "63VzRoWe3WXhzRQsknQCsbf1t2kf4TQAqsR1WjgRDX7C3bhze9sGRYtgvnKEXWoY59VNRungpMXV6wWJ3NY61yCA",
  "key17": "usyLmzzjvCV7RQbyBntdooDg52JUzug1vY4Sz2qSoP8m1qrQeUrgcX2qKXnT4DLMpbQbQyHR9RxmYaMMduLQvPv",
  "key18": "2RZEXKmVvKKFtvTYNWGqJkanYGf47BnVKWzi6TMXSuWsaHXfeKyCJRbxPcA7wB1H45rc36hE1V18eoKqW9J1ui8G",
  "key19": "2ru3CHY74tHsETgxTHX7GqvYHxqDNpFy7GBRpq75HCyHc9CDmKTUEWHokeikMizJFdPAMp6mDzZehnRDjusGSs2S",
  "key20": "25WJpNCeS3ByKcg9i229i3g7z8Xx3b2pUsQjgZEFue2uxA9nKDEcd5hL34LcpGPfG3V7jHr2z58kj1DddNC9FYiF",
  "key21": "3J9Ke2tNQo6F6LMSYiq5JpC4sdUG3BoRs2aBjFWa4qZHrWkCuECR5frwA3Sio54h4zGTnBLf872zxaBsuHFSgEgj",
  "key22": "66pYS6AVWW53ya41qb6qLuncYz6kXRoJUKPi2LJWvjmjzjUWDPmdbWmLdCVVuRwWRD6Ng15K9kAuvoHH4KgEUT91",
  "key23": "Yxd8kEtRwD8La2jcvdpooVHPPQvSW8z2wRoRAhbakmnf9irCioKjJNbf6EaL6QP4vmAZCfMbpvK8cSRWx2W8mJJ",
  "key24": "527eV88WfzFvrZ4a8zH6d3zsY7YQWvRJFzzRBW4vrHTKy1AA7DStbdS4AWNqHJgUTbfnh3WHbdpUX6HXgE9p8vu4",
  "key25": "V1Hbka9m9DSUtTBDXZRW5fnLohfS8RxALBtXKoamJUJSnKSkQeTNoP6AaePx2xto5DeE32DL7Gf27xkZaQVBqJU",
  "key26": "4YST8TD6eYppN5b1CyHyuzmYdWvBXnSTLjmjHaqYvew9c2Q8H5oz9TebvdajyS2Jwz9bGHiY7vpZ3y3FCqHbAAxA"
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
