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
    "5hMwSdbmFUPpQa1VLnFAgYVdSwrrAU6K7xJ9zauk3i2ieJ319k3o4dnKvhPaEwWoqNyK9AA8vaXva8UzDrqU25Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56sFcVJ3xMhojbtwEDu2TbcqX4XUaghJBLxnhazzZv29K5T6uYMDf1cz1Vr6DyVCgZjkZgQfi8VUFpHiCCL7Puve",
  "key1": "5fzjot8XTYYdw9xomCp7avvMfzjDEzgqD63MJubyPDAW2DziZw93Uhkxq5PafGER1cvSiKz8KAd4o4GmhBnEx9rX",
  "key2": "RhzZFbEhsPoeJu46EMAmB5RjRiFmfKChKWzNzjayCjakkeHfVENG67ZZs8RQ1jPTaqAqDqSkUQgSPYEejEhXLtG",
  "key3": "3y3fErbNMu2ub18ecwh8vUW9awBGw4DakKbx5E6UHzVVeTKuwxko5w6gf8ZmzVSKTEWatPGKMEsCpD3vL5STu1wR",
  "key4": "3b8m7GRpywAmc9kYeadDRwYdGNAF6FVdptdpVandGKVnUBfQQqgfvLUeu4xbaiD8ibALxuPLJK6T2iiVjHEhTFqH",
  "key5": "2MmjDEBvMEJWwZYixj4tGsM6uBx2rG6SruXQf5yLmbXJTAyE2Dg12Y7mmwVMpm3EA58po4Zsrr8LFtrzgCWpBUmh",
  "key6": "5VLYjBiHrLAYGkAzdWUj7pnXhsWNoiz2JMxJbaoixwWYRS9qoC45XfGYx2FEMN96uLHkVPwJs2dNy94rYqStLUeX",
  "key7": "5DNh7zi3KSeT7qdpytEPVx6NkfUy32iiHgVuHTGNNmQYLGgDtJyJZy2TJ4DhWKTuyLdrYHVPV9gqmQRPst8TedAL",
  "key8": "4728BW8mmpdGC8FLiQaue88ouijqa8AxTcgkJQrw3vBjmknhZAVH3AdsWcvhDMvkNdZKUe7ybNLFPcJH5F28gP5g",
  "key9": "3ZCuo4GpV8GsdnX5UiWzBtG2Yk4RPEFx9FdFYYKcTAMuFYucjJauQQkUG2QxARxvUtQudRDwZWiKuV8bXrjSRGoy",
  "key10": "2wNjNvQQgRfRQuht5AjY8T8bauKGvFrM74jPS4hR3mrx2dYMzGChzuFwFDS6TNqzScwwozycZSGnGPhNK9dknS2o",
  "key11": "3fTvwBfePrfmyokDuGtphF9aPuwcuieTNVvqk3o8iUHcibVAk1TSUpmS54wiNqarUGXK1qVGsrYxxWzjfbsQ2mAx",
  "key12": "5RT66QBtwRiaf2qTqEzSkRQDjbbxgvyBeJZ55r88nneAGZBCDmogdr26GJZjtHn7L652ZyaFYXoYKpYGELPLboof",
  "key13": "3oVgTpFMrKYtM7FygK2XVnZCkrAE5RMZ6fBdNL4jipW8q9BuEXNhHhSL2o69x12AX3Vedkomds8XQZV8FCEe3hrZ",
  "key14": "4g9Hx6cSBnRSajLGCzKSMraVNfjrLgiufPChM4KxG5f54EWZk7J7irEr4sDGwzrp8agoEqhtMma2TxEUKxC1Zt2b",
  "key15": "21SoCQZLijhSkv4nt7ji6nsx7kLna73HB1zBmcj83KmTbSqK2pPSbKBJspq4EHNjUnt15mTRR9FfjMwVTRskmxfc",
  "key16": "RmxHbrrtME1mxbunxnhxkNSD1K4vw3bYdZUL4EPmwinaVTRZbULQzRHo5ZLhbeUvVUTs9tH5QnE3ECuewTKMfsj",
  "key17": "2ffScjXEsp2Z4JzgX7z7YZVZK4pum4LWytgCdR4jN9s5VYHVTJ5ZnC1zupkkYRJPgzwFhbxUwYQVAvtQy7gmPLui",
  "key18": "24quc1g9ve6yz5CSLakD9p6Jzm3out6FCC5ZoZrvLkVwibYjxFYPBPvWXLvkwTSfdJYcvgJJ7qjJgoY62bFQktQP",
  "key19": "MsMVp6b3ZtDWdjjzcRZuemkTono6G9kcVL4J5hFn94ukpCSHCXLuaTkDMDh1UJb7FAc4y3hgaPLqdD5srDyhoyE",
  "key20": "2WAobHHAbRorzeTyeRUf7yq9BdK8UjE6vk8rb56NXK8LCmq6dSd8HauPW4LzT5odPgUkENEAjzi7k3wsKxivm4RE",
  "key21": "5A7AgYyLgkTZTxdhdKq3v62fKxEFENdnBiJpd2TGnf5WvfoVQKRuiRDj8tJQoymppQGCPnA12mnLqSXURHqK36w7",
  "key22": "4SLniVdcAfvKt5yWKqZTkQgjw1zSxLrxHkLY7iQUTv4jDB4xpPpjeAjb2CCJahTYPWbDEVmJymYvm5NHMZ2cXVxs",
  "key23": "TxGNr76oNkUu763tBwRxZCKJCmr8Kyi2TU5Tj76NzN87yDQ357SxHFK5NdxBoVABhTz1dbPi2mPQEgCy1qdpzvk",
  "key24": "2RcYEuLkQPB1LaqnEpWvVsfL76CPNFmVs4z1upLvPbCCBjRpRbdCKDiV8JcmPzMgAaceEDsPjbmhBESxQ7MBsk7q",
  "key25": "5fm5sAsbDGEa5CZVWtQwBt2FVpcNwLpkxXBnKgBwVRhi1NSvW3NrdsmJ67B5yLBfFJZBivrXXv8oqRBU4CnM2HE8",
  "key26": "3U1EmTa959MkMJ8udbUDaKbXzv4JgwsvnKBeZC9bEN3uh1L1LDBFdhC3GpjvPpSxifijphaz7c4X7ovMwTfwG5VE",
  "key27": "21nb9TBBTE3Mtsb324qnvdvAA4SEVQyJzi8fcMAeXSbdc5dmJaxyocboMT499tefpJcT79BF2XSH3Tr3i3gbWUdp",
  "key28": "4WXhAGp2WfLTPuz6xiVp8TCEoTt8iEFHfqvQ5zHkbHdgeCZhdi8n5V9DpFewdHf6EYh1ewNpkhbJ5NFHrkQMkbYQ"
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
