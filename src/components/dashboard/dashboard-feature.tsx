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
    "2g4uC4hnTH5pXjWWpEnU4VY3p8syCXXApws45b6pcgYPdWnaJ4YqMKGqQ7bzaAuF52TdyxrMpjdky7pHNB2GUw5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uju1JobQgoZrQuxGBdkpNPBoJ85pwJjeXw3VCxCaa5u6LkFx45bTNXrkSbX4XFUAsEwoV757dEjShaFktPnBia4",
  "key1": "4t5GtTsoqTxajCV4ayZQNosFzf1HuwcqjffypjMjLou8wTiPt7jg8ncs2LKrP357dqtganQWrBv3oW5tdGPX1VEY",
  "key2": "3zaFCqTnvLcrkPxaB195eN517Mfi2A7LmjnjLqEZKAY2Cvz5NzphfVu6AtiALNoK9iUav4qacnQgwHVpnxNh8jUn",
  "key3": "4YLvdwfkC3AwGoGhnSRu8o7DnTVpUTnHyiMtjtxaAJgvDoTtunj74RhPbjmMbFCAhdYWBRX5zAmxJBKqV2CDf91b",
  "key4": "3pDWEpS9gqBjmRPncCqdZf2mPbZZ1kxiTerBAwn4YpLKNz9o2WbDPDXhn8DdMtBDhTjkw7hBFzhyRyFyvJFEFSJg",
  "key5": "gg5yus4ZFXBjBhxScAsxXNHyJGjYgrEapcawthQgKiF4VP9LagThAWv44rGELrocEkMDSrRwq65GWXe4fMaDMse",
  "key6": "4y8T3kGDQSW61oRJiVtMYzaHZswgXuysWa7Hd1BzmKsF83BFpJQqa1LwAf6p8UczFfV12KWF5gyawTS34gnVz4ZG",
  "key7": "3wkXCKzk63hGbr9AgKLFYHW8GV4ZBESPbbs4V4hwfVUY96snKqMUNFk1qwpD4CgFmH9En7Z8D1KUfQx13CxHDwxC",
  "key8": "2zfTdGKepLmdK2ECzzqM7XHAe72DQqZxzSSJeavPDp9xPmhBgL5jdUgTHYu2TdzYHEECuuLdmkiMwkgABzwinBSz",
  "key9": "61gxNkP3QMkVUTrzk2y9H3vBrQRnQ9bJAM6Up3kACFB4sxM841evByBC94jRrcF8V9P4B7SttyeD1T36viHnAP7G",
  "key10": "2NJTgajyfmWhKg9dGE95PrgEpMwNcZSLLUUbiVTDCHkqNhvf4CnieAKnBMuJUM3t8g8Y9kMJdGSaFmeC5tcVwXfX",
  "key11": "5CKhfSYm8NH6kf8g3a7XUKLrrkA7RgcUaLyrgowYTk8xuC6sDtYqmrdkCffGqgtgCj14pzUgK93MhkKir4D6jmj8",
  "key12": "3VqmehJWeyhJsZVQmJne3nzoDygg3fUaRg9v9nGyz7azCg3CkQt3dsfLYjfW44KgeFN2BmXvabS67x9k8ajR5G5U",
  "key13": "2AAEqCY488FcUQDjHF3iPpoR2qKM6nv7QupFBirmoPQctrA7HXaK5ceLFb4Bjx8Eax83y5ejDQYbQYoULzRgKmR5",
  "key14": "4duk7LzNFV7jxc4s3oAGNwcrBCzQhziEBB1GgsghrmDPfxFBMD64k8ijhAJQP61PsmSNNhNVhCgkRKTf9Zuu1W9S",
  "key15": "3FNNjrctFgbZoLDEWFaBFXj4QFEuHr67ZH39fKMEWMZJM1kNJAiRRDGxtiwT3M97ANrRHysbZ5AZjA5cmv8qCGb1",
  "key16": "4R9BQjDo2Ag88ZKo5BW6DNJuWCDAc6xeijEfY7Tu8K8GmGJynyezWuQxLiTRxGohMEvofgPW84ah6CDQ8zyVhCJi",
  "key17": "59RdEmGHp9yahQP3seViUShDHD8zMhFFz6egDFdeXRVnHeK3bLQrueuxoGrZHEdJZunYXSWtP11kYf1AMCFbiLiC",
  "key18": "4FNBGo7bz8zXpuRkzJWMfCmn9CeHe9AXr1BAWBBf4mtvHa7SVKt4VX9Nmhqqj6pZJaHkuE2cME1e6hdZ2udHcHvL",
  "key19": "2Dn85GExHsL8x8ZrJokG7Lf1Xf9tx7pHQ2dynCEoQBbZeCVAVMJh49fjfH8kd2j7WRgK1ZYrGSRBe8PcoEhHExRc",
  "key20": "3ugXxfmrFmMkN3VVo6GV7YkyZLG5WCrFwcApM1wvxF8xqDA4361DhH4dfeCw1y7fjuUzr1BRLREAV27sgnx6cpWr",
  "key21": "45EDX1eMtZNjTJ4VABpsCDYbxoFeteGYwzUkRPhYYKDsf56WaNYctyMRNXtkjcyUiUPYZmZ9WzG11EaTDB17XTUb",
  "key22": "NnyKrpFs6fopBMF3jmL3s9BXCD8SdEvgeGqhuTAsFSDxKxsFgyE6jnYnYgEFnzq4SbACXjMb4Z8SrJpLiAmQSxM",
  "key23": "V5kXevPHLQEqBjmr6vvbvHQzLCuuKwfVZgj7qU1i4fQXXjzuU2yNk2rzWUPNrqi24uMVYvbVYWKW7TTmxYyKfkZ",
  "key24": "4fjVx5KdWaiPoziF9cmwd1oezP9s2ZLn6kNesebpbRCBQpZL9qBRx6ZQAx9oyr7YThaMCZJYnn8Ngx3tx4dWStMx",
  "key25": "4eczrcTMM9LVxBmHCxka6HiPhTpSHi32yNpGHFXwVeWWDy1RZvpVkwsFMGHyYgGZ8h2WCcT6Ts9bBuiHE3pZC5u",
  "key26": "2RTWg2HoVpToY9CrmnYxEHPBuQkvDrh7TQCiw7dB6PXuTmT6qopZRx4eVgBZJxkKRcR5o4tq9zQ11NW69NY7A1XF",
  "key27": "4sNkBBKgPtkaTpmp21BQjXFQvJVsa32Y5dpyPr9UCHwewCmoBvHQN8tHt17cEg7ZN3HFtsdQ6yU884nqEnFW8vGv",
  "key28": "32YLxcWbE9zKtADSP48KhLLRvF6eFiqpfuf22UteXcFnVNkxZ4cUHHBRr1kEVL3tznDqVsbsWVSUQpAKFKUtLgt8",
  "key29": "Q17GMUzv7bRm6WquwZ6AkFuHxt9n2TTznxAsfU4YRMMcvGqN9vqc1hKCDzjR7wgnQwQiqvyMeSRViDsXBke63xa",
  "key30": "2HKUyafBeTHwASXZUrUia9KwckjeKwjVbRp6fa6iwA9HNWNkjyr27VWcrBfDVttsNh6nWcqERCf2k8E7VGGVtR61",
  "key31": "4odqooVySZKP3y2Pi98N4xpfZF7AAiRkMoZisVtyotYpyrA55iYnJdurFAGNSE8E6YRK1GKy8aVjXagLDGz5GC7f",
  "key32": "8UTXE8NSiwiQoi8n6DGcb4ofHHm2v2Qh6PULT38VvpSyVJYxK1Ti3aWX5vgWcBWJbdfqZHVymbRXPCETw7QyF4F",
  "key33": "5xpkv33L2Ycv4RF9VRJdfEpfHJAgGSoQdKvRdxQyvT1bPSXo4rYn4pvKq8RVXjHErG6PdpNBkuBHqjnpvy7PaY3r",
  "key34": "3iKGdK6enR9nWDvyChcegDiDLE2R2gRihaboUQkQ5T5a9vvbu56hNoqag4cyUjuyuuToQcno9JmEt98m27XC6Ycb"
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
