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
    "2Lzjj4qaNesLjycXeuUfREBYqMYbeDeHKaPSfqSEmJVTJc7hnMWmAdVjiBoEMofS71TegmzhiyufAf6LysDEV9Hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1pyPzDLkyHkFmRqdjBXbj3DXzi2H8JvsLpc2Szv5XA6wBjQdLVMpKuutjPTrqF41RPdQzDCarWEc1sW9rdSAay",
  "key1": "2EAqyE2dxwJ966mA87spHwykqnyTH2BDv2qzsxmfVDhEFHQ4VETxHKCYrkWVUScjPSC3y3WxZY1ZTrZwySJaWFiN",
  "key2": "3qGMYJQJkNFrmNkqFkeErCm3fWaDN9etHgHanCMqNzHTiwnE8kLTRB3WJ9YPqRpPLVFqyWHqgJm8yP2mcxTqa34T",
  "key3": "2vHPcmWoxiHVtPkymshzmKpNDGSwrgpPdUudw2qKADWoUyvuPUeTCCekbZeRhtSAeFMcz7p49vKY1ps9H1KYwFQK",
  "key4": "4CrBfYYe7APTEpv4GnLzvf3bax4vx8N1s6hUddvJhiXKzLruN85mcAKv23cHXSqTRm5XhBYyxHjSY7p2yP2R2XUp",
  "key5": "4naUbfG568wXN9J25nczPZ36uwjKnmGCbhxnDk3zmy7Stzn2x98vGuGR6iJ4CvrGkwJZBHp1abSeVB6NH7Jpgvxt",
  "key6": "2joFgAWiLKUW1HpnTZcWqSHfhoGw2LWqmVW6aW8FRPmaCFYs2x4MUaR31a8jo66ouoZTcnSFS6EuW7wXC2pnS6Nu",
  "key7": "4AuL5cwamJB3r2Et4Awacp4dZ8WU2EJntHXUUZbxbBK93f8sD3DLKaeh5GkQuHd21iX6nd2PV5MxtQwoNkgPbtqV",
  "key8": "2UAUR1oPMDVks8SQvQwrhvx6RxXU7TPhi8cHWHd7juFXj2Ty9Wh1qWs5jEP9Ahq8jMMZ9hf4G9p5abAAhMo6n2M5",
  "key9": "3fePTLz8eVKbmrGHMUDX6DxcizJK9UcJQ4zHrMmNwmWTjNrEJLi8LYPy5L89qWcJULRugbbZo9hzStm6Zto57tHK",
  "key10": "3jjzF4TzN8cfF2konXo4idBcwriXQkBhUUJodB3wUjTN9w5Qib8NxvQeXM59RgqK91NhqR4NhFfisLTjyCrrsoET",
  "key11": "4H6aUqs2aodFtxyY3YXqkUEyzqCtdFSyvjWgpKYuwK4aFy1u5ZUTFf8BwUULRkQXP6ndPCRQtBwTXN3NmuzRLvw2",
  "key12": "27Wu5mGZi2VFGCXCrgyVX2UGWG7TLUQVyUGbKsRofMBhXF4jn6N9zQpsJ64eT9G6aW5hfTdSq4dQ5MwRxM4Tz5zA",
  "key13": "5YVMaXWupAFBcDZANNX2vvFGNHYQKyVTCsrVqd3WPQ5eyMnQfsZ2hu7rdGvMit2h9jxJVJJtDcXWi5gd4sfEXSMv",
  "key14": "2qQzgkBpWaKYHKwAtxJzNCaoih6AT6SacP6VqoXoS5y8esuLFuEdthL5YrfZvx4bJRYf1pgSUMM5uGkFqtJbfctK",
  "key15": "4vPkKA8VSg996xtq6qopevh88aciPV1EKeqTCyXuBEcF2eydpe7cG4bfk6ZJC4Grd59wyERzwcqSYd5ZxbSW5EYY",
  "key16": "5tYzVDEdXqyGDscnp2pM2eHP9wz5atFU5ZDB8p48SdSYPXZDVFt3cNBZ31jgdM85b3xFwcT8BdDAyj1nGCdmNyup",
  "key17": "3XtyhnCvMGTKRUSyREdCfi5gsBv53aBZRorosUWu1yX31ZTFV6TCjcNs6ZM1bLj4aMygrLDE1Jbt5nohUWtrC8c2",
  "key18": "5rkdAygVLjKhdd3vR2P7TVdEWGF2iGGPcFVdi4sAPMR5niEt5BqXarUzTcmj3XARnE3tndZwg2vLpmUGTPGn7rei",
  "key19": "4YddhMELfbnLcYwahe2QCcF6gf3xJ5poTKafhh2RcD7BzX8tGNU7kqwecetrZVQFthRX9HAHTmskL2uw2N5TD3BX",
  "key20": "3319GSznRxysDgwb5RnzALYreGbupLVafoGek7MwCsvZEqnaZxa3F4vEJW7X7HEwgZiYmFvigRRchaNBHxHQjMK6",
  "key21": "2z45ybjHQCUkikDLaXLsPy4LbQxAXJyTRrS8NA1rFKG3eAiaKJFNsXSuBYGVxchRGsy8X8NqvauT7vZ8bPQuDepi",
  "key22": "2vzmxucGyXezsDpRdDghm75CtVaiv72t43jZLx29pVK9qo41Kr7AmryC71yEmDJezMRcgB5CY5AJHYM2NqXnUkXm",
  "key23": "2SJcZNc1YXJZgH9VZKrgvEqt6e1qmn6V4C4UccLRRDDSMyYbDfhPmBKCDU1Wnir3JJQgRyF3ZsULuDSE7DzR9t1v",
  "key24": "63XRGyFdif86q6qec7qjfW2p8B3TmBmEp2dsqPWdkS9RtQBJbSnBeiBbgAgBCi8SmKHaBoFWpPckE1sACZZDnb2N",
  "key25": "3ysqpZc9W1dUYwUyn6dEpqLzmhGzQjjfd3hSCKEC4n5g5sQULaEW8eUBGhuAJbMzDtgccLNUx851kemf58FRbpgF",
  "key26": "3fVmebpHpPdbWqsroTTTqzYb4YK8sW6KHEz7oQkLrM5iHkdg1HPCneXtowmxR37kRVp55xj5HTh1PbwQtdSS3aFF",
  "key27": "2qTLypxop6DzZcjXNH7aJPwy1tePrZt5qkQmtA3XHDiahuE4AoMjNS34aWdKjrZzGGY2DFamzBT4QzCLudQvDiDu",
  "key28": "3MhnuzsW8qJL8DqSPqWv2kKYivYEppxbmoomcFKxRpZ1LKkCYo1g8nRgGCGvsmyTJMVYuRfH4AS4LBNtrPA3W8Dn",
  "key29": "5fuJ9WkgVaRS1adq9maK4JJoJyy9gJS66BEvkN9zkEEKZhK443fc7xT5Kh7vWQg14mwR9oC4xFeEcdKpGnhYirPV",
  "key30": "55aze3hKH7p3vZCkHWSFMByRSmz3tHUjFihMKuMGoPs81bEyeFGr6hTTixykeBwB8nYGiJJncFKSV7EUyUWzR9mM",
  "key31": "4D3j6WR1cdXRdyCVpz4ixKG1zPisH1aKZJJqc5zvYR2BqXnXBz2MgNQDK9GJZX12ndri8hjsphY8bupVsacJA3HR",
  "key32": "5q7BkxRA944yThSJ56pkcZmXnbi168UugW9gcdbDMK8USfCAHXk5wjJx8SF9SDTNhtCWKYP5RBdJiHPP9DQYUpw2",
  "key33": "21XQkbw5kWLoed6UiPmKFBFSTR1GUL7sLhcdkRDDbq7QYUc98GJmi7HKU7KZWi9Zj9yRoAjTE1oYiDdJA8Zxi6kq",
  "key34": "5KeDmGam9Ez7Nx52wwMyTNUQmczqcvyEnpQ4L3oHkVd2mZZRtV6VeiK4TeDqU63sgzLaXLmf1VM1GkKnPtN7qJ1E",
  "key35": "9JwnnewdBqfN5JNodusBfCkUDQ5tGZfaiZusVRK3LxxbbkWxbXwfYpyUdNmZyY3jSSVrfFaWu3ZByWgqLvrKxhx",
  "key36": "4JGbQrKEb2YyrLeJuZntw3DTg5jupgeDKtwyBPzCbeqYUg4LBFWkSM9UKsBfG6x5HJGBQtrdLsJWWJdHXz8oqFji",
  "key37": "45axqebqR8kFh629a7DUHpSedMt9gNFVk9GckWZVm6Pcg5Yz6ha52k5HmsvSj7pJ4HH2b3Q7ok7GM4gX2p1dqpRg",
  "key38": "5FDgHVCs5V2CoHvKjUgykkagndNjQtFez2FCWZUTTfczmGewZzcs3NzDsLYoPBcSy2Gg6oMyUdjZuxA4vvfhSKAB",
  "key39": "4NARHZAwA8r2mi1oiLcrUNR2ghwTkDBnA6ZxTH2Ne29tjdGBGgj9Hv9eMxQ6PzEEXwz213m7zgm8NSUKwBLfXb88",
  "key40": "52wGH985K1AMw1kks2jCJ49hBQJ3H5shhghWt1WMZspC7o1mxFhJ99WLwb3vagxNJtnMqryqLEWXSPRmUXJvXEjL",
  "key41": "5YnZAZvxnnA9wh7rEFQZ7KY9AZYtRLKQWazP3mjgs3cuSWdCjRcPw1Gd6nBeF59TjetSxXB9FyuvSsnpJRBzfasD",
  "key42": "xqs3bbertwXdZACkFVh3g6ki58fWF3w3bBa88tbdEebWrjN8o2NKdwNGMZ6ib9J4fqmSRYyTvVLvVyqdqXJmGGB",
  "key43": "63WKGYoqUcdGRJepSWVoiUF5cDN2UPN5HxW9X8kVHxPRHzVY3GK7HTSE5tuARfzn98pGBHhmp8Fi88bjBJyzZLXP",
  "key44": "5VXHTfGwZYKnc79vbxAxmX3HqnFVok2cVKvVB2DN3JM5tnstvPjF5ZwFYEaVx5NUX9qbMGtTVur61CKv1YxJ4Fa5",
  "key45": "3oBEkCh6rkobj19FzwSw3cy3o517q7HwXR17RHKJ7nEobPy7PbLGo6PcpqaZFGhrdCPoYwnnchJaQAA1GVhWUKGQ",
  "key46": "2Cpiah8i7iCHZ4G7EUGZTCUgdMbbuLHNXFvfKWG8jzGuA4yqWnVUgtv8k6Cvk6TtzrKLTjWq1RTdNMAaHCytP4wu"
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
