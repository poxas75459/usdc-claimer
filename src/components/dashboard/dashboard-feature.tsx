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
    "3eZspUh5JsBaqLuingF8V8cxcmWcYWTtgMxQb9DWq1uTrmEkemQdRbZgC2ZueTJJbrYXFAf9zcVTf9wqs5D5iciR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttkxhpoYKoWpuPX258AX6wHhQMSCa1cmpUR3YbSLbWY16CeJc66Be9b3FPZXHxXnNhDtUgexdHkpXp6wU2REGAG",
  "key1": "4L9LtYYEADxVbU5LZxZB639JbEvExksWX7FVhxbD345BKyBKEJCbNjvofojyFXS2zWu9K2iZePzkAiPNjpHCpxes",
  "key2": "3mKx4B1ZGgPmZ1pGS4Vy5fK8cg4h8UYrnZ45TrNRCtArM9uqjSiQRbHYbxMWJ2a4ExCgw7XAFcZXA25DkAXb2muZ",
  "key3": "xJSssyFfPpu5aHX2KeC6MfkmuCogAYLwP2SM2qzHJMgpxkAs2PqmpcMyupsW22L5LZaJ8XGhkruH8J6SXQ9fsp4",
  "key4": "2EVu1QG2RhDHMX3TmTnyXtE7hRCHmt259eYTMU6cZEEdZDrE8D2U69nKyVzz8jS3nogY4f8zyZuj2s33s7wYfRx1",
  "key5": "41kPinwaCWGz4RpDy21Uw1fm4aZZegMytAusEafqZTKucjGoV92QHDGmiYz3EsLmpbiGQ6CmEY2Ce4UrPyhXna4d",
  "key6": "3YV97fogMwmEdYUf2jr33TRZ1c7Pu96TzXoA1BTRfgkjVPLY3q4AaKUkmHGRcKcJZibZjBptB6sYutF3Lk8Ue9ng",
  "key7": "4DRhAt2uaqPq6WdKFX14AE4KM1dTXWwdQbnwEJEUbohfFCgmbLk3pHZxD1zauZEBMvL44Fot8PR32hotGmEVEseN",
  "key8": "2d2ejq3cnDiHc8CGfiuMputk5eJ3kLvigP4HUvGeuQH2C1v9fzq2F4cCmzRW8ARjzAY7U9RvVxbSAVqEF1nT27PG",
  "key9": "3XMBUKEdJDeizdkHm2QXhMUJU34pR5R5k7kQyX1j8vZzD449RYKggAfTxHk1w879JgEb3ZSSvuyi4dVEvJCDTnSo",
  "key10": "3srAT4NoYZcqz4C7qTjGRBERS4dE3KMQqeGNMWjzZ1iKyyHVKhcutei4RSwxfbfycpEKTGrM4jT4UCVqzY8DZEoF",
  "key11": "2K6JZEnLGiRUMja5svvhP3oXJc7RkTp2PrwViA8PQC6CxNpV2oYsYuv8mcXfWF5JbaLiRfkF7ueG3dDUr5YsJDxa",
  "key12": "XXr9zY6GKyNFU8QLLEK3JEbbALifL6LbbZBYD76qjRs9HYXmN8dnBugqAWqMQQdZLpX8HKvsKpgSsFRsaUUPogG",
  "key13": "2MEWvNhBiERRNBNnHUUaJL24AW1tnamy9c7QhKRZt5rkRGGawtpEXRCLnS5z3KJcNgxn5icSxf5i1BECPnpv8RKS",
  "key14": "5CiQDNSsxxj1fbRkVVZ8LvGVXuZsCvUHMFVWSoqH2JAnAmpsKTesnq4fMnuMpmYUe6ACT5EaCeBDqUP1kfFaQUhQ",
  "key15": "5YhWMhPub6Bqv4g2BsSsZpT3AFy48xzkqwTG3NiDM9mWTMLSjWiw2kwpM7da3GiCC69fXYJrmKLfK67fCtENQdNp",
  "key16": "3gStZMvNFzcFKkJJd3r83xdxB9GqqizQ8SEETuy1R693H8qWuvKES4LjD8Vxfn8zVPNXebh7VkyhaH9JNRKas1kY",
  "key17": "5HhSEpX1U7NmuRt496o5Y4jopySkKCwexwrdASqV1mjX8bAkpoGjE8hryL7MtxbuEgLuSzGnvZLm5WtWaxQ1ujTq",
  "key18": "2EgtpvSbzDmHgf69BDZbtTVfgKNwzNZSNGZ2wQVV2a5f9yu6kcsMc3MKSd5bxKupCeecvyERrCv4qj3MBg7qcWCY",
  "key19": "bbcYgZTW8T2DfhSXy3jA9SxnE6CRQA1fDx6n31S5RSaAF8s57iDyXPZiXC5a7gZ23JZUpD3AfhVc6PzbE9NDyhL",
  "key20": "5USjR7HVGLEw51oCGDPSkaESJe9tRHff8eP4bLBX1KFdrQJSyfFNZGdawnC2kYtZoGp8RpZ9EJ9uBwd7NUz7DorG",
  "key21": "2Ha9eZg65EvGKn9jP5yFijzSvqt4mRu865Du3FNEoxXePiKgchtzFbgPCoYmq7yXCDNonVB8C6numMn7vPc6oNSH",
  "key22": "2Nsugm5hSC46ASipZ5nFLnugaBZR2iLR3McnjQmSe7gSfb11bWR1sHg6kjmbpgUx19toLujMbU9VBePPJqji4Hsz",
  "key23": "4DXw2KvVCMtmhvNuatk7HnjKQcvNT6YXJAERuersSEeUfJSow4yAh7YGgkJzsMQcjkhSrf8C1WAftKnorDpESLJp",
  "key24": "2LZcYoiwzx3sHCfmLuZckaTXSVMda49tN6hDF73Locj7Vriar1USZGMB2GNQn7CAtAW2ZrYXawB3s7SKknJ44EXg",
  "key25": "4u9eKLdzPtEP3vBx4KvrmFMntRGx3y5QwWWVA7nmZfByXLkomkQKPJ96Gvu2mEenFprEgwLsRe7NCqpPUrDouGPE",
  "key26": "3moC6hkhiMAhAAjJS7pj4L9To821AoANwabsswRFdH6XyasR8Q1CEkAHFm15aAncQGBy2neJJSZpLh9Csa84dpTb",
  "key27": "5zxJYAau7UR4QsqKtgo9EAPopittiUuHzoGyf1ga9uD8pMjBFQZQTNczCZz5AWmMmG3frSR3B5wedWJMF8GPMN6p",
  "key28": "24CVsgbPd1Y1R2Z4yoHsc9f7HLKGm8GhRtXaU3CHkXKRzq58GtXTs1giWrBuGLfrZ5VSrECn2UBgt9BtBPoS4qGS",
  "key29": "3E8zwya4DEoozpFH9bdi6jiEzJ1fWbbE9P3Bgd5CECTwcZpLBS7yDBY33x2e4HBYD3PhMLowsZf64UPje6i1oJkG",
  "key30": "3x4bVsyajKBBW8TVT7z9VQMNRThLVRyeZRBjg7Juy6qkxPvBDfmVd9EeBVxmJ35c9CQbaookBGQawvjFCwroVuAh",
  "key31": "4YjcoEYHrwVFtdupPz3Kw5SAKbRfkzd28rkTSdauA9UEDHbX5ZXQm5wyiL7zhkpHJEacTLW5aNKPsoFyoUU1PfFF",
  "key32": "2z1qwRbei9D18CJibGF99b6y1NBizfztjGdvGpA1r7dRihUFeChxXYB38epSJ5zqzXXd71i8CgDHLYF7VQbtHTSL",
  "key33": "3e9cv7Vf2pRFDWYx3mTpKnraJoCUbr5LwW7oq49Giy2BnQ3nKtjcom3zLzHNeLZUaCExgZSWRCjKmGyvgd5jxksX",
  "key34": "5tQNNDHXpXDyND8szQjiYDBpCh8qZVmoViY3EpnHD8CSvDq8L5gcNgcrd6AyGsxctW4UR4FFDU9Tb4jPYAvXmPbY",
  "key35": "5v985fns6gN3GD3egdZN59bb4PUqb7M3hXVacJ2K3rDym1r8cwHAykK1crfVdPU7f6H9Xh6rRZHEUhvr2xoGEfNg",
  "key36": "5RegKSUTZhRaYW6nVqy7X7dJ4Vgp3xzmvdCeWZ2Qvy5SDcNbDzdkrkFff7pM8w5DzkZq9uNqDFbJqbKmXGq2BjpL",
  "key37": "4oSzc9saSGDbvYBqw2KkVVAixDnPqMvrbcQkkaQDYpJkhMqMYmtwumDoBhPLmctyXmH57fpjMCVU8WKbYoUGQjoF",
  "key38": "3Ysys5znnDmVzakoxiTME8V3Pg3JF9TKkryZcuXcWovP9ZxYJirZPcxoUxwpZrxhn1Xqg3rkYdbFVsqjQ5nLxVYq",
  "key39": "4pGfvbTZ9C5bmPxQGti8vvnWZRQ3yuHxGdBb7uUwm5WDpkPhPnRsxtgxnTGkpMtshjbifPtt797R3aZ352zcJFqP",
  "key40": "3kqXXBUxtWnCYBNkrBwoQJDQNhrj6APK6piD4Ya1Hi1qkxHv44BrELKrfcb78PammAC8iVMYZpPWZ2wRARN2mUen",
  "key41": "5vDvb9tgcgBs8DLrWVLpW6GkshHN3Me2xdvKBfN6RK7GfovTbKZZ67d6EXZiPKCgeNPV3jqp9rXfYQuZXvJfRRaQ",
  "key42": "KTTqp2wQvgQk8bB6yMNURniazivz8G1n9aKU52qeRmTWhpCz9qZ2xPUyVn71eu91ADCmMzFbbcScuxudkSQshdy",
  "key43": "2KJ2PgYjcDVEfC9GGFE3gmiRQtGYEzrQURMGFucuS5PTYzHFSH3pySJ9Zh4fJfKYXE914xn2t7XzMLKtncYbD14T",
  "key44": "64H7AsLv8xhKT9cM5W4YzCZGr5rEDyHbALJ73M6whiotUYE4Nf1wsg8VWfBEy91Un2y9Gu7QzESuRcWg2xmDMasc"
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
