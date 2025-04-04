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
    "gTxueZ6fo1VGCcVptbyMFqzqrTHyypiVrgPsEMS7ZFTnLtAw3YG2gvgv8hnFa6HvTFMEQFDuZKvhFY2WXxuh6Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ds67T39owzMdQqNP2xeX9QLa8MXDrfQ4FLr3n6oXyjwFgma2fDS3bf5iJkUmixz2EBw5RvNJDy72mbW4exPdojA",
  "key1": "444Pk1CJUQMaH6uXornfTbmjruokgbd3oFiheqeoNPAvGWf4AHDruu8fFBa9BVPDVahrtfrLZZDNL2ots1Lk68jo",
  "key2": "3UHLmiXWjTfJh3c8vsLnvSFFBcU59e6qJdTeZWuA7b6sLk8EeozgCxxJerXFvpnTtjeJTa5xaDe49szToQs1CkA7",
  "key3": "55ENHtaerKzU4pBptpPXLsrPwo8i5iUYPnDJjxgpmCzYdDob7CPC9UF6a7mSzgLiHrqp3UYrUjpNUBRJCegEUB1h",
  "key4": "3A3QGd9p93qCB4z1sAhjSMariAKAuZ61PheGpBPB7UqoT3Cn5aXBb9mLE4iKJzoh7rZfM3CWLhFL1vFF8E8x4Yss",
  "key5": "4phTcWpPTh7GsvMdPZyfv3eAJFJ8A6dbZNqKPBW2nzbhXhfggDRax2a6DjibXYTskmZHcRWWcp2emi5MHaY6ipXz",
  "key6": "441hf3KiYwWor4dT6e9pAMciivyUz3XHAPVN9srQQnVPqwsYsBsJ5jhBr1CBPrMQuSrx7cGoBHvo3Y3SHyrmW4g9",
  "key7": "2tSnQzGQHhGy5kiuZ6uKAzxJ8g7DHLq4VyV5SWLGj6LKNZV7ELsbk5MGLPQaLLRZK5DCGNyunwpNrA1RpvwtipP6",
  "key8": "3VGKap2eoyPRvNAPZB1p177LVQ2gMrF9Ns3oMfN3X1Nwn2dHwxpwxokhkHk9v2qXFC3Z6haRFKSwaVXsBGxgrYSn",
  "key9": "4duHXWszxf839rqGXBDNXUDAPU6oA1ytAZjPczdpxJA7fMV2ZpxV4NePC91Mxiw3bdmbdfBLfFfYf56totJd47Ue",
  "key10": "3wiesAFEsqpv2qVzLCjSdqSFB5ncHqkdAtdUnyHF8s4XvWCZX6gsmETbKFrTJGzgXBvg5sjPES6ppzQr1La8h366",
  "key11": "ejGzPe5A5JmXj9okzFQReAbPGTW6u4eqkdqD1UhEdcvvzke1wCFZmU9MifWQ7fm8bX5uqU8oPC7fKFragQ8pQDe",
  "key12": "4KLntj9Ma78QbK8LBTa7BjonE3qK1aMxrE3iUbVijPTWHdKgCxKrDrK3CemdzExbEfxMjipbBQdGCG6oNZ6yokk2",
  "key13": "27QQB3k2K6FyC1eS9Zg3Sz5qBLskfkxxhRVSUw9YDJqNKKd5m9qw9QymgAbaB6K3LjXBbxzRqeu29PPcJr2Ag1dz",
  "key14": "43tsfMpviyfoPRwn1fQ21FdGVj8N5pFhfAbCir64NJZurqUr4NLq2oM4dKQC5hugxHtkH66yARYs8Xu6rCvPNrDG",
  "key15": "4rY7oN9UPt5sHfsvYDCQiR1W3VfRwNPnp6DZtrqXhaMjQqCcTNqTUz98AhKySdFXMmSRj58JcaP3kp4nC1UKMfU",
  "key16": "5LKt2ovS7qJaif53Qpa9DQfTRrTey7kyWZbP5EsBAPR9kDG8qNwMa6FF6iowDAhxZm1dXziLdwwaXT5XF9EpG7Gw",
  "key17": "2hyM4VsQREf9WpL1aYrZSSRvTstLv2CLsP8iJxWxFB2YPcGZLFKFZPAs9UtNFvmbPTCDXz5UNmbzBeapfD2m9Crp",
  "key18": "4mLXqoHy2JynwFypTKCjxiyo8waiKeVFpFg6DYpbXQ3o1HTRwJ6gbGdJuL3tVXBchTZxWexpAgYEz7YUsgJ26kx7",
  "key19": "65GjzTwR8d2KfvgpG325famAPDKd66DpFzav9EqARftEgjdtUi5sQgkoL48R2bGCLs9D9TXmNy45tkoSFeArXFHB",
  "key20": "2P3RBGB2Bb4nXNiEBHwVpCG4D6C8mmKGdfwQmaDovinfMVAqydgWqJwnfYCwPEHEKKjki768LxnzbURBBbVTsoaY",
  "key21": "3DTN8begwFas38CrqPhYyzkyqZZKDf55kj581oXnvuKnJVh2xZ5hEaeb3GNBJgxA1nuSvFezTkm84YFyp84F2qwZ",
  "key22": "2nyL3RGMwcLxWrRuKbZna7XCeMZ6639A5xpMcUNwaco7rb8y8PCo39yiukcKoPsLFYGV9PAziG7WSM2ei4R47ne8",
  "key23": "3znybJ3TWWUyd5ReuBwKrwNKyHpm7VfiM79F8JarzbwA6VNqqgwG11rgtZZx9a4pz8VtiFJANa58kxPhGEFMPZTG",
  "key24": "2XCPCikpsVh4bJxZwd86htXZgRWJnbeQ4o81SvtQF7BouzDAVVNDFoJLxFfEW1Rp2x8xaxJ35s4BMyMQf3aUpX2o",
  "key25": "3TpMfXrPXcchfGDZoWYbrMtM3QLR9GzY1Mpmn927V1YEZ39vkn1ap9fRU7s1pM1dxLvShGvpegkeigGyCLSaib4",
  "key26": "3SXJpkr2RMJoVQeVfC2BymCDX7oR8Lkn6MZSFyppAdqvwd7Hqn6kHKzKGVcPXifL4NsUnXTx39CxLT4uB3a9MnW",
  "key27": "2iUhDyXzStrCdrz2QW4xjSV7jAUJz7rMnkXgnKPfpoQ6kTvVbXNf78CmiewkvnMbVk85HtFjsiJDWehsW8ohJ1sT",
  "key28": "yq1vXc852GQqx4LBZ2SvvW6VpY2v7WR3B4DYh4VQBfPZqPPdbc8N3oNBda9FJaEwCfE5yCCCdpiiMoD5p9RKuHS",
  "key29": "3jq1wXqotntoNymHALLYoEFHuyqYr6iRn9GgkN8U9Z47Ud3xDw7qSJL6unSbmtprJkEgtRKp2CFAib3mVd3q6pmJ",
  "key30": "Ad8XEicTh4siUspCuBMamvcFCH4d3nxBt3mWToG7ypxEETAGtBG88y4VNrKWn6rjGTsTZHjKaG4VJpUgyaLatuR",
  "key31": "ddYHDAZok5wT5fZTKexMbYe5owvRQ2X4Xv6TNgsx7gLBDRn6dz4kJEfX57GHZqgAxvUnuXqU87prXgBTqtrxftL",
  "key32": "4bjD5SbqNSgSnaGmTPGMySWQF1dcs8v9f9QcFDE7bVvxgdPoeBf4X5ujUNLHZtkyn1Y4qP3FXvFKTFDXq79YBrUP",
  "key33": "6F5Dvp93neGDYDwUJJ4iSTQEuRxFRygVmcZpyc1qSpn7Ds6oMjrwAb3r9BBstn5BhbVDLbvDpAAr8juaeZsJ4ow",
  "key34": "ZVd3GQ7NWMTpNNQD4odSTSV4kg1WMEQ3dZBaZybr1yfCy3FJecQZuMQVTMtQgHU3ufqeTYkXXXXdMzz2hkq1YXF",
  "key35": "5cbLKCqtNUUuE78i3MRMW5BRq8E4VuuFaZETsVxByDb8VtupXbbnb9eYptj5wu5iT76DoD5ZNKu6grrWBMLZ5ohh",
  "key36": "2R659TdVf2ngQd84xTKHJrCKquZUmLC3aPTxEPLVCBt73UwtHmPydmNbNETdreUoB7QWxf9YzGjGWJUSi1F48uc8",
  "key37": "4ToUnwRB2vqVpZ71P7G6wPkvmn7XptKtXntqq3TCHpKxkt5Jt2c1jRC5sLAiiYa6X7uU57aiNSwHh45YbzfyoTVA",
  "key38": "5hkBcmuZzC64443bkK5ny1PBU3ryTW5m2CZVgBocUnf3GW5o8YTV1Mr2SasCa364xgs1zLYWf88GfLjN9X7HzD3g",
  "key39": "5fzp49Br5XYKmzDXCHUs38puNshhdyZBhUZEcSeFz1jeLFiBDpYrC6puM9jRYggEsyuvWszhyHKJrSeNJCeDaons",
  "key40": "338gwbuqQqhPWYnsnHdXRuDJgjwnrKf4kycmTVBKo8Et3aKa3iqRCmcQDQ6JoKJzPsCR5kfjbNsmtMiqkDK8HTmh",
  "key41": "27xr2iq8xRd9qiLChs9N3Euv699KJCB4ATaVd3Jx4nQTnyWJvA4fGdp5CkxaDVQxHSL5yPFuSCM3qJ26CVTzAJjs",
  "key42": "3AKDmPLhyZPp277ZuWgcGakPXjveERSQc2Bgvu3phkat1Epgt7Y1wtHed281mEeMHpZsXVhfFwaDv9ckyDeYsYcJ",
  "key43": "4LFNEwyRgxjFGZv2j9XEdNjDobCoJPXiWHx3ozrVU4B6hLNGvZ4F4V8LVGt7QBW3c6qxcJVMkKqXuXZNnSGSa3ZB",
  "key44": "4aMFDCxrVRY7bwUo2Murq6hgPs391riiQKNDhheJZo9bKt6HgyX5ysun6re8kSX3uByR6NUNrk6HpcauMoBtxxux",
  "key45": "3f9qzFBo5mwRYdTVXDfCiDkdDKdEdepUk18vKJQF6qFkbWroceoDztG4tdVaR9yAKj7gh7iha9XDT8xughN6q93v",
  "key46": "24hfvPmUGyWruP279cccKRQtnpeCsdqjBHNCx7FnuKQGyb3L9g3khfj1fYDVxF3n4CmucrNhB8o5RL135XYdZyh5",
  "key47": "3LYNJhKms9FKhvEYBzjn1bVqKkXUAnGEssf5qWuG5ut554dZEhGQKtFKSnoNFB3HYPwN8HApT1TQS49ArR1XKXHq",
  "key48": "526yXkHPAKZrevgCkMDBvQZVDECSoJ8jniQNCYiTRzVeEkPBHr15jwFWBzWE2gCRLRqghW8doPeakdNc1CcTQoZL"
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
