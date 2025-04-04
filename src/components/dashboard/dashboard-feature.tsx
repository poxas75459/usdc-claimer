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
    "5MMe3ngcfFhmVcNpn6ueWsKucZc9mNzHZYcYR6vm5KNZeEDTowJj5yMcd3iwrrF2UsbANpjjC24iqJVvc1kHDvYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kWtk3AjG88i2dp6o6vU8e2o2KwE5KTYhYp5HjYTRcoFZH91XG3xhUHMjZnJV8CV4UZsozWNTg9bzaFWSvVJq6",
  "key1": "hiQdgnPjNBKQVLmW4eakMw9souVYaepWTGyhAnCAXVALTKxsEPiXnCd33UMGNagTemX2EUYHjFeBkQ3RoCNYzxs",
  "key2": "3xxsTGe27DsmFntXaLKHSwdqp9cEVAHxbkPw8f89NhJ2TvtZRzDwRCfcxVXB8Znwo2GGQrriUY82dsYVdHcuwGkV",
  "key3": "AT5vwpNN6sxrdtcPWFzk4GozcyEAT662suLrLR5KUcCViCD6sWgMfuQ4JPRfy3KMRDFd4ToMpFgJ8anLXijX5Ui",
  "key4": "6xUuK2Wmb5cjF4SLKerDuqP7C4fRgYkcDNARHvB2ztrvwQovdveEymZMLHqcmPYgVFMDjaUbDp46t3cwited6vB",
  "key5": "4281UMdzxjgL2JSqdPW5zpFRLTm1gqzzro3eWgynQWjG25kJ9JQTMFNPHEJUHQzTQQ8UZV3jVQ59JfPPM6JseUNr",
  "key6": "4cbhoVVRemt2Qi8aTG1RfNx1RLZiHmefnuKssKr6sJSXFATW8D9GYsLiK8xCYyaAkpDpKLBGsCRSCX4THPVjcojR",
  "key7": "2oKyKWDyNkzYUrFdWT9QVCbS7XDHTxX87jPfNKq58KTFscr8cNbNPin3xp76PB1hxCrRHZ3ZqTU8i56c8QMtWY1h",
  "key8": "2Co8uiV6CUdVXxXCAkQviGymvSWeFjqkfNQyXvpxNNj684EXTbQuA2z3YEEpLVfbQbp32iQXwdzc4qD7BdTjH5xg",
  "key9": "5G7s1GRqYTBjuZQNtjDGwBGxMhyKbeakXDDh5Ydsxk97VTcHuik4Wwvm3b2RzGMuTkiz24p46k1CeHExvRe73xc1",
  "key10": "4VHZKzYt6Tzkwg26ar53GFBKTgsMPqCwcBtQQGpafr7Gxm6FHK64mZN6rrxL7sS1jSGyXCBqCJXwtjXeAWBgqL7v",
  "key11": "4shw55M7k9uscz4e8RioYe9GKoUXz4vvaQfWu2XPTespTuvhE1SzBgKcGUm8wn2q6o6aQYDe6sBTxvbGgXzAG73j",
  "key12": "47VFkACNCbQyn1FCD2EqV7yE5kjHf23BtgJR6BBUqYt9gY6ec5hg7QCmfzt3vRJL1eLfc8sp7YgbuY9BxaLqacJB",
  "key13": "gK59EdnTd3aSQdXJ7QL9wHiNwnufLK55npjYbAMMGWLFQSpi7o2ncqBX6MXmcxwL8R5vjUzGpSG45fZLMaiuuV7",
  "key14": "heDQCiPppNxS1ay1n7sM7qSiPQgGJ93RxdNHQY4XQ6vZCysYCZSWXDmwU3Fpxiaw1Y9LubVapUrtSX6iDe7FAef",
  "key15": "23pPiSyEnWGbbVYPpjRLDNyoLSqn4EzA6HG4shGQe7sySzqAKX1451PnseGUrs9b6yUZnZeHhv3sa2WU6FNGkg6b",
  "key16": "32MvT9iLqtWqDzmqy9QXvNVsHzp9wsc6oDkJZpYqGWo4aLR1D85gPELuDpDD91Q9YgmX8sq3cnsUwb6CFLQorwmW",
  "key17": "6QQb63d1vV1gNj33VarhwZ1QL1cwMamn4cmue6fHjNmcBik2iH8M1mmcXen1zb96ZRRstmAZWoveLuRKq1ksdhe",
  "key18": "2CLgr4ESoPueun3bixebgDFFyrVSF3sXT5Vn8uYPrLrHvxSCSgPH5Wop7tY3r8mAE8rBsfrsgpBBJTdEBy6jNaXP",
  "key19": "2GAwDtSQuLcDB1vWse6Kh7gZTHNNViueDCkG25UARAD4v165exEhMR9YdRAdmcSzWtPQc9vw8sTTiPmUvJcJb7Ze",
  "key20": "4m4R8iGGj4NsTpAA5KgKyufW2MhkjSvzApEihcptuVJ7yY8Zt71AcPz142q797JbqQGhs4ibUcRZzrsMV1b3oxjP",
  "key21": "5DfcZVURPXKZLwizgTWWvzz66EpS7pfa6fabPqgmHCfBEMzqHeonmBaUbBGS56ZRjUZorC5ZhuWxjH6SAYjMaVur",
  "key22": "3Yi1kN7YmL8jDSn4u19HCMgMeg8XaGrbi5nBL9hWNQqjuLXDqf52kFk5i3tNcLBuVHheQDMSp2727Q5VXFxGwiGw",
  "key23": "3tP2tGaG7ZrCpxqWiRqWZvgdNqbYgeuyE8BzrcDY66vrbyLpSZCKhXgKDXaMMT2g2WwZLUEA2wnQZGyi3muohjgK",
  "key24": "Vj1VFmCn7jHMobaeLybzLn2Mid5SURo1zV9rtJXESmAXwGe4fqw93qKA5uqJFcoWMsBbW1gnE634i1wUy42Xtxd",
  "key25": "2jdbWf2zKwL55Biqr3KewFDdA7tcj6hCdHWFxaEu7WasAvP7HhK18363wKeoXJmSCpS5HRCpTpBsarYnWyJXsXf4",
  "key26": "VDtQusd5JqNkWTLcPqorNM4uHmCwgA3EdAQH7mVRvxuiVZVj7V2y9K7pE7AVJRV7cCnXYVRjpQxgZnoz2bzZ9NU",
  "key27": "2saz64o7pqL5Ljf6KFsfQg7537a1tiyqNPeUTV1dNZNP1vsStRLjmJEDznha8BMAuqfjL8i4ZsFg2Bxeinsm2xYf",
  "key28": "3jqKmbmzwYXxNfJQmJ82ewm9AoPcQnMwUJC9scQ8GH4oNLpB4i2mpgXmamKuw4qMzgDq8VjNqSHhrGoNiUcJe9jf",
  "key29": "37Z7xBvv4haWTpsKtdMp59H1JPBB2rMqxYfxDaMp19PKnbz2C7KXv49E1i7Y66A8JTLwRkALZwpG7K4e7z38i7e6"
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
