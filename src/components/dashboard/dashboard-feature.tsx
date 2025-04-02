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
    "5Fzb8ALR96J5Hav1EgfV5gTBADqooxus6YXVADcXxboLAJRDq5eQXZfUFdMLvjXH2ggJdAAVfz5sYHfkMLim2KcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R1hoNTmzzKZSov3LfxJbsws3d3yGCVwAM3aiCkNkGYPdBXWG8hRi8gpVwe4QBa3kMGQJ5EEqzBMLWLeEdu3SLZH",
  "key1": "xvWsBKLJoGfy7QpjPXYRKgd8hMdsTropyAGX8seeWWagRz515ygGUauqSffwsVceqQwr7mRX2Szfm1TZPUpMBki",
  "key2": "2VuDU5HqoYS4gxSnCwHjk9utiZ82Fxh9yDY77qLc6KrVRTFPwBJBy5Vp5B5Sx7K4fNeMh1dQCYgNnDEh6Q2CV7Q3",
  "key3": "4mPbmgR8YgkYYB46u7u7dtmzPxUNS8PRrWtFivwYHbPSwxNntoxGhR9VmwXPEnWnUPDyhCh3JTD4VFixdduhidPk",
  "key4": "27gpWi1ZiHMf6vMy2QvHnRZ4x4ifi74vWSLfZbTrGXH4q21GvLtLKWQYb8A1E7wjPM2yC3LqC9nUfEh7n6PHfxhJ",
  "key5": "3Lzu8Q58nPtjYDuFVYRHTRXT7Fkiw3ui7x9vHLWVm54pYuxmw45FoLvNxXotVCLfcPCW7dq23Es1cAQnAYFLxzfs",
  "key6": "3Yxq6n4JMSd7SrLFJ76BhusPf21HC4cD7Hnk92D2pGr11nPnBuVNfy64ictn1AiGGrR8LZDXCkzMkwjnQSV4g4nZ",
  "key7": "2ctn89gnhq4oG2jWJFkmgzEqFPhCtNGAGHjJ9nWxqM9prthecVZiMCkRFLzT9YRts37y4ZorrcaSvvBBVrXbaXYD",
  "key8": "3V2Lpbo5RYhuUkL8X4MjwGUuzR1uTi4DoaH3LsSfM4G43NWvfj91NRndi6yDvPnxYa3WaDCx8GjJKa2To44gdSqe",
  "key9": "6184rckCesHFTv2P5miVCFVC5f5L5VowYA8WbRujVEhFWWGLbuWhLyi9zkL6k66oZNXSXfE5QaWSFYGv5vFQkPSB",
  "key10": "5pZjsK4fRYXfSFQF1GevXSx8YKf3L5ynkTqb7wYZf1c3mLhnTwBMvV2y3MhWZx2aAafHaqx5y3fdx3LxMvZ7RW1t",
  "key11": "4zSTma9i8nngravB27g69DteqSen7ogAg2TQF4hrqwc2m6Jf27CNzfVr9B1MmPAyc67VWHJKLFJh9ZpmD6VSUbFP",
  "key12": "1e7d77NU9EEeMHnqqHiu1rp1fAsbZLiRsnT4LNukavtKASwm9LcYzVadhtUJhn5gtgrEzk3PZpZQjr3unAEvFVs",
  "key13": "UG4XwqaEtMptP1aot9PnQR4hKTgFrJd5DP6hsFLrAfjMn12Q8miC2JztEiW43Lg4YzqYJ1LwfwszcCDQcfLdyRm",
  "key14": "5UXSp7aAVXdENtkiy7zkwAYJ5nHXc6gVtfEvMVCma5JumkRG7AfFQhRrS54JmcvgNqGS7yGw8m5MFPxFNRTcBxBw",
  "key15": "3XQ1RaGDi14Fmowq9ZoCacbSVioZGkXLtBdhZCRLdCU2qKiDtjGVwNHJVBuG8FL3An57nBMQ2K4AvTqvsJJDsCAX",
  "key16": "MKvkTFfjcgkP2AVqA5VXqPaTZb2oFMom4FyRpj5TeDHBGu41NU3n8uUCQUxet8Mi1aGvew4YxwtkDyWkbfYZKYD",
  "key17": "4qAwtxi8LLLxUVuFA2A8fuFgU7VtgGeVMe44ysNh6YYRLQZUNv2qTCmE1SEpCS2NQvh8aocyLXbLu9nmevUrXNWz",
  "key18": "4e9watdHVnsU7hAvEEH16S53utU4K1UMRihnVvSHyDUFJro3DG1NYaLtpu9x7NRuf8PTfg2ziC6aKNma2Knr1KVh",
  "key19": "4389w7nTYASuPVbWMQg4kxknXiw6rtF1EFN8bnDt1CQAZ9qAD13o4ZsGuikBiNiURZGrVD76CNyxZXXykRsVgTCk",
  "key20": "4kS6gjSfu3i5h7fjrpTyvBaGz5FRtq382D8orqeH7BbLZe8pdtU6mWNj27rYMvnL7XoxCN5aBG9k5i6TizpwyK47",
  "key21": "2iraQnfottC2oC4fbrxcUSUEcZcDTbXNRcLHgJH9sBNnjm7UF3o7svUzHweEFJSX1fCBnm9qQcA9UhVxkdMAbCPP",
  "key22": "1jyzPY2ZcQY5t5pA2zLXAAr4Ut4FGtjvKQUuwS2ZhqNc6jyYAoxZPvA1briuNJesDkjx6TP2AYe27CsmBhC61Jz",
  "key23": "nP1CZ34GZrzzooJ4tQURPcRDLXGXD8qHXVZKJW6SvZzNCAY6oDuEVLgNSb3G6zpyAA1BnSw2aWa1VAxLGob2Y12",
  "key24": "3R86Q2SDWm2PZyv6PqDfhoCunTsf69eMUpQ2Ut6QrvKweuLrzpEM2Jg5hiJHF1vD5sd2PJH14UURkqyrZX6pJ2D5",
  "key25": "2GyBgcLL7tkdogmTtKvYxqAcACFZdAY74XARppWdxEbnwPeiGaqKy9wMpAFJPYtLfgD7d1RAM3yYUHVUbvimdXj3",
  "key26": "5KDQc1DdzQdD6tF6GJ28QnKu6xhLexqPYgYiQNkeoZ1PjSxJM4c8jj4LFfJk6ddToqc3z9ZmNzmKtKNkaBjrxYF",
  "key27": "2P6KeibHxyse2L3uKiQiJu7TZLsypFChgFNPSG44CzYiNVDpcAzXi1hUiWwhMhyjAG7zk3t94WY5Lyq52yv9S7Vq",
  "key28": "4RP7TCDwe7x62nwKJmUPSw29hD7ceRcQxMjtLRCwzPiyHUCBCP4oPsxtGs8Dybm3uonEnvWxk1JbgRNon7gX7MaB",
  "key29": "3Tki3czgM1Kjt1QCouVP55QWbUAdPqBxg6Xks7XW57B4Bis1EXM8gwaPG2cqwnQNXYJPXvXfpwnQruSArGfc9NCG",
  "key30": "5oSYhcWPCayGUFYw91f9AFpYTCyVdwXtY1pYLH6cw6gZzRMdC6QKBWLCA8y3U1GGhkc2U9K7b2Mi3qaTybyCxvhE",
  "key31": "51kJCzBaJt8idUg6AyxXwvKJiaPM12toxYxCN7nUFAbTpNe3NHWWcxVNXQywhVWg8BZ7KHUw6P3a4mvVFTfyfm8",
  "key32": "28VpVP7TxPA7to7ejgAtXVkn6cwsZm2gZdBTie5W7JQoL8s3Ee4KP7PWCefSwHN7jX6p8w9RhVkQYjdkRmK5Lrax",
  "key33": "3YKWdNS6ve6LTjb4MBwjJBwobbR9Tyeda38Y1upRn5x6kBuMMPk3VZ5dt8u8D7gp329srkBudRTkpgffX3ee44yx",
  "key34": "4A1ypCkScuJeC5inSrJFaTNqZ1TQ31nBStfxPMfVtrzxtJkECXoBEC76DX97sgNUUB8ML1yPK9yM4feJa7s5Tmox",
  "key35": "2MJxKbSn8GVqLEBvdwa6DPSQfrmRtJWnPgwaAMuhcScPq6Zbzhk42wMkexe3B5JGuaM75mDDPqsTUQoyw7hnmpB2",
  "key36": "gBdawrNobJeLm56mrcAL49METTSCmmzw5PEePUmEx8acQoUa7Bq8bDcadnoHfoKoaah5AGG9ag3RR5fv1ggNjg8",
  "key37": "4FwG6amvD1MhWgKXivcyqCHeamdhASZ5VaBR7xSyraUxH7S9s9X9DdmZePuFEbtLvMGmeDmz1V7jLAX4CFXwukph",
  "key38": "57h9bymwmnoF1t6aJhtiaj6apEDsWqaEHtGLqMJUihX3hgWRca5UXu1DbRfweQwSH2n2TZWZkdMUBVFHNFsDEBSN",
  "key39": "2rhgReSDADF9nyPX4CNgjANLXppjzGxJ61Lp3DSGutECVGMrT8Hp5nJggu2CedMjsWXwPjiuYzGD7QmfqTm1VqmR"
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
