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
    "3matXiX4SBqp7ZSkr8pLuqUPiY6v58ZtZ3D83Y4NgbzmMJYmi8BTc7eSQqw6XogXKiMviw3AvX1tnxGVyN2WQjvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QysCxS5DmVDN9pT8GkKwisAiKeYXheKErA8iA6Q9dnjhFu7BFJe9U3u4ByKSLt1x3ioa9FEJNGequ2xsX9P2cxo",
  "key1": "2BmnxuZYkRR2KsSWN95SmPr1MZ6LZJkcA8pMFKc2nkUQPLpeg179RHy1DwUXtnJrH4Ve2ZqKmLajoDwSYcPq3tpG",
  "key2": "5Tnj7p5hh39iXnXapuKuqoWpUnLvf7A1d3ZNmjjfgdMfQ56T45Vkr6NTZY62iZfW2v5eYdzWb4VSVRxzVRgVgyXq",
  "key3": "3xiE8y5Nbt7HfDtUYSM3vdNQQYFWiXdLyYedY4jvkAuSsHhWrV5XtAw16KdAwHcyUw8frJsjUyb3rWEoBxYw57bq",
  "key4": "5n5caexntmef9MneLYDdFwvSg81tsXKGVtKMGgSGHicXnEhGxjpDBY9XVf4PQXSxj6xRAnXK5FvzjSHUq71iBC2z",
  "key5": "U85DcPGQhGeVPQ9KD18e8nAZUxX4GaVPvBaXB38CdCY139qpYzZZrCT8FeynGLjPubciNxSCwXKCuivjULG3vpi",
  "key6": "4a8p6L4MkPrYbdspYkJnJsbaQKTW3hhi7G52KaQYYk8Lg1gABPA8r6ht5GBHMts3ht7dHXbopiSArCdmhCLk6ioY",
  "key7": "373xBumneiTW42UDLS9We5sj6TAqr4VVSWsxXmJ1MKKJSpR5f5ZF4pYqhUtQmtac2Gx34E95wF464Y6xtedEFRBw",
  "key8": "5swVAprLfzGBh1KACSgv98ArNYNLonTCc86YPFc9u1SU9bwdMiKj7sMNf3eCMTEwDeGKeKgqFkoFYbZkUNstYnK1",
  "key9": "FWGbunHYSCgAgA5onkCD7x7dPH1iuNQNC9ynQKZuk8TrK46d44apDUViV5hPhtVc9aLT9b3mieb8doPPDhuBZpo",
  "key10": "9Brjh6qB9WUGYUz9v6Mkevyyf1g4YxUFmeziQw27JBEt5EyBcHttbkYYvz212L7t6fdxnSNv5q9MEvT6Mq3Mp5s",
  "key11": "59qNXugfS9AEBjdFT9YmGA3QRtT7FvhDWzk43eSc3Eh346rAUf3HPZ38zUgL5rJZk2jYHddPkjiPwP1ZQtpJPBPx",
  "key12": "5cGZNACaWFPF7gydvUNaiF1kAen3JabGhJ3Qjxv1JevCHB9da4xFF8Yn8xAV3eSoWYkvaH8fe8YbyG9qAd2bMh6C",
  "key13": "2CjDMAfmQH8LrD8Hh9aopZyLFRZMzn9hSubAhgu7sxrSR3rL73dwm1BUJ1W1ohbiHLRKFPnYZ6uogvKGozLXivcS",
  "key14": "226jnTgXuLphoQkBSUPVL3XqCqSktDH3m8exPEG2Ltx8D8hG7ve4eo9DBD4dkndxhLx6wdMDhM99oftRZFs8MeKY",
  "key15": "3n35Fp7i2sp9xTSYTmdgQZRqScDiX1iMsr4xfkPwPwKRyZo7p4AjoxCQxW4pogcbzSeWMmGSd1kC5sq7jpkgwoFo",
  "key16": "28UGKhfuMMufHgNxHsTAmj3CyoTEFQHXEDSCmrc5qUztxbyXjTdBfbV8Ak3jZj3utxqEAuvoa3v487qCsNJuMgpU",
  "key17": "5GoXv1v8M75REQa5FL6mCg9LcUkR36caLwNxPR12mApSb1motsyuCCdL6FEm44Tkm15LjYKUwMYGFxRM21GPdUTE",
  "key18": "3X3MXAosUqXuco2hUBtsoZQSV8rFja5Mj5Twu9Eeo4vZZyNFMk4LiFtf1LC5MdeABhaQoZ9xYhPMynARw6NB8vfo",
  "key19": "2cJb85iXowjnihWxBH8HyVZeMBkPUoez8FSAUB6t9fUCxPRJjt9udF2yoigG14YYYFFqRZqFsaPgBaN1HofnYuVS",
  "key20": "51UejDoLphnNqqeCQoavY2RNyu7JHsfoA1QxJ5Y7nqJz33ddL4BSj3JdFJTWeXWPLBLL8wmdi7S3wbsMVVJeNx1t",
  "key21": "22am826f6HuqiH4b6ojtak3ypR2f6xvkGTmQoEGitiV1BwkFE18rPHFPzYQJgEXVJC4NJwg7jcNrjZrBWLQWVpxW",
  "key22": "4TzRruKXGUq1vDkM2vGuh3bLXJ4pt3KGn5tnEQ5T24x7Y8DdTzFAsWe7gTvCnCxNtWQ3NGkw7antRD829hGHwqCS",
  "key23": "xdC3k1bJwcjLvthGmw82QbWEGdYrLTeigPUMXCfbERRo7dSR8aD7p8dgtPyAz9DswGDvoiMeGy9Y4SuhgmngQui",
  "key24": "3NdwV6uYBVhc5huEsHUdmUwSnUvhE9DZctjUQsgVEo7t3J1qcCUgyDdL9KRWCGS4hfBozAnKdCqCN2SHYAtchiGh",
  "key25": "2oi2afR3asFkQvbqyGaUnq3mb22vqBk44yWG1kgkNkkFDQpfPnjwyUMe325veVbBjNnHWJWzdZaSrrr5pTx9cz2a",
  "key26": "2m1VDTAacdNRSJyaT5zZWdmPkFyPiHa25Eba83Ldps3ww6xgMWM5wzw4vdpa2T9qSXAGe86oCJ1uvC2dJfn6TMb3",
  "key27": "332snMeVY1YfixteY51MNCc4cKViqczuKnsRWvabvWQLjir9ny8j7dviPattgmY3wHhbbWVmXUz8dxzuXqgZ5tvj",
  "key28": "3tv8C4yqs2z1Q4NLek1WLRQaeAjVjkNatjtF6tfZxycMtYidBwRmvkPwGhu5tsADHJxCkqqwRRRwhCRxppbmd3yb",
  "key29": "2Spw3vTksLqwUrJu5AEfVryZkjzaGx3RcF4YuanX2VPoRD8jg3RGcxxXw4xvJaGXEqnHLn91F9YheHZXB9ncEr8Z",
  "key30": "7uqrpV6J1qQXGsSjv7DTtkNdSAVu2mDAd3pk1kNvg1hByUcQgV5hNo4pd5ViekiqhVKaAA4Rtaa6z8ecfVjoYeF",
  "key31": "2AyAwU9pjhUscPk8UYRQZjepPUT1K5iV1RCwfcPjaGQ9qrVtup2v6zPrzqW55eapLaqRw2nu6HazmwARPkuD6uFn",
  "key32": "3AX7XcUUauMzKDwT1Bx7GJUAdfWZ57MAnrk8PvGHiYXcZJssBxHg72EDEkXnapXVPDM7UR1huKJCA4NqEkYfAr51",
  "key33": "4iVFK2z6c4jwctXawYJHrVzT5xaNePA1TiiLZhwpWcEYVmPtH5qTJ3uFakiNafnfFi1cCSDpdUSFH1YPMDti9mo3",
  "key34": "5KqzUe1SR2mVRiXGYFgaLr6dfk9B4SuxyQThDjLrS1rKDhsMwVaA1hoRRfBHyF8kPXn9JYGmpDria3ESkBhGnmCs",
  "key35": "2uYkBUf7vkka8M5HD7LobN8KfQkFgGSZxXJKbRgWFGKx6dXQ2qDdmbaVxRnyTftMLqC83yTueNsKHikdp7f3LrWm",
  "key36": "f1gkZdXEQUtELj6Kz3CfoNTuq4moDoESCB23Spd6EQxda5XHiFPdwy1jXMRm35BFTZCfy5ZRCpkBzqVhrTTGGUe",
  "key37": "4jUwy4SB56e9DYw54jQdLFU7dAHRgryC7vvgZdy2UnHNXw8YtdXnyY2Uheu29Anz8CJ2HcCrXjUPhpmXGxin4XXd",
  "key38": "emZrxuDfvoUFkGiqmH7xhRTg8WWNMG4X6C5gUJnLaomZzkCnHLmv4az27T2krbhWN1cc6LXETzPLF52G5Kg5Qzq",
  "key39": "31xKEmbzhToEBxC2Yj7VXkN1VbT3hWepQLS9wuF7VNadMKdsKc3DEhxQXTRGcpEAARPqzYEUYjJRo5KGLGK9UF78",
  "key40": "33WpCFuJ1KUnRoU1j5qGfGVYkcGpjK7fAWxbR8ouqFsN5DFzRfkmzmWmmbRZfP2Sqp5Cqy6GAv7aBTNSg5VJaVzD",
  "key41": "5f2yJ442HjajVkYkwSPz4an61Fkmx7tkcyV5kap4gRCDd24aSjVePYEeE9mCKXg2u3jYnxw7YvQxE8nQtudwh2q5",
  "key42": "RHgo5xpasT6ezNTivxU1GVdLqEvovkTM7VPyZ23Rc4Gx39W49FhjwXsViHZBqJ1JmzhvuTMYXorQYGFEtsBM3KN",
  "key43": "3byVTzhwM5yovF7BZiRvCouxzSYhJc5jCfCre7Ug8EtcG8xTRwrk6dsDody2oxrdFf4M2AyAxQkN66dKjf939Q2p"
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
