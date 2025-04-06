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
    "2pV9Zv4SZ68dnkQZgqxGEXnATnvHGuj2ac7S5VMAmbx5HQLQBK8EqFnFtufk9rcjFvqnZd59BcS14EEHzJh87ZAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qpvwaS4d4yq2pDRBsxEkicqpRNZ77KPMYLTvSGgzSGAcSamb6rQBbLPMJNNC5ZcS5n69VBHsBk7cJxEkuoK56Av",
  "key1": "35cQGPV7waiBHYBaYxb6RLKHFsWpQjYd696dzvFgjnxMvEQoff3R2x2Kbsd4SFtPvpreQMAnns2374uyoZUgmeYj",
  "key2": "3yZvHrL4eCFEXVFDD7nT2uAjFVrfhSYaqPfX2sw4xx9HQGTSzm5QSU781k8AJ5aSo9SKPPe7mibtUxgAadzThCCH",
  "key3": "qYp13V4xR1RYM1363uY3RTVKMjWTj73J3HQWUiSbKdRsMoVpRM4G7p9KF95WrcSjJeE4uPZuYQhcSGVTNSonZ1r",
  "key4": "5KY4FHpAGJRAxDnp8552fDcNdAchjSBKXMnc3QGXtZQE6et5GBrRDuHQFht2M8opQWkKv3rtX6udGXhnR4U4XjRA",
  "key5": "5u1GJX22HQFkvCcQqdGFFxJsTjvEr8sBbXo9DCRNRG1pwgs3xgFjzC2xE1wYdrxjRy5Hph5BiTE9Te6FACUzJood",
  "key6": "2KEghgh1zBi6mMywgVLgWEvUtGNEEtBzdxjYgxsyar77Axu12DoUsihP5HxE6j4aiSMYkL2mxWaZTVjesTezLM8T",
  "key7": "3Z3i9HQ7dQtT1bJpY64EeNiTaaKKahYq5YdL883MPQ3yJ41VqEDmYZ9jbtCu44Wqg38kmGQ5HaxMVBBmJN4zTqnw",
  "key8": "5FMcipgpbf5iN8sDpFb9nqSWnY6o9mkzwReCHzTypUiJuHRzij2ZVuMvYPdTPUNQ5WW8MbBjkgL3gvjwGXBBf7uJ",
  "key9": "3PknYaodXXevMpWwqgAybAP9rgSUxcpieGZ4comLqk4tq8CvYxaiZwwupKBeo776gWa8rhd2cAT1ZsjJnSFiznXo",
  "key10": "2d7eAFEJdxypiREc8npZ5smDXTAam4ehvqKXp4p1RS7DiVyLvtyXcnCXQKUkTXoqsMjsBDiFG39uPd6B7yp1EcgX",
  "key11": "cdvS47kTfoMCKhmDRHdG1atUiZCpKf7UqndXoRvMUHRF6DqZPC9bzKDJq1uyqvVfEvYMjiNyAdeagvRZCzf1sPc",
  "key12": "5qWcD9YZbZmMTBMKThp8xGtm9FfB83PUSYe95Ky7Kv9VaipeQWx7PJTUoB2bwinvU7ydDQVGBxZ1QngNBkNpFF8k",
  "key13": "5jr6uhxHZX758KGgLtazmQ5oV1H91cNbMbtG1eLL3waw25QAAEABCjZQDDWyHk74GQL728QeR7VA2ceyVApZ8ziJ",
  "key14": "uMjj6n4tvQ62bayEP8Jy8hzsTdewpRbpB9hLK6K4pVvoGT7xF5Kv8CdZVmKK6cthGsm7yokSRt4Dis1w7takhVi",
  "key15": "39ETsu8qcojEQMjK3UmcF45aGNtjnJCnD9kq7nVhdLnHk8MvHu1U1EmykQ8w43p3WFjYFZviztSdvXZ6KkywHMjq",
  "key16": "4xWsBQZSoKWtbiUCCKDWkBnDBuPzSpWufgDkXqKRNu9yik3qoF5nCNg3ScMFjMNCykwB54tzrYFiZdNTQqnACzwW",
  "key17": "2CZgMsdgzWeKXh1YEcFSDsyGZk13rsrLHLPmmpG7LFs4a1C5MDHWj2THCdJHovLpHsCKXzpWwGVeHgHN4iUM4YUK",
  "key18": "wWajEeAu5TXLi7hjNVktfbE9fbfu2f8KQ1Chop4eaaPh3TZHmKdtz44ZP6VopraWJWct1EdLedfS5VNo9jmsJjD",
  "key19": "4Fj9bgaJKzpepoQcFgas3kj5qg5BA99NTqQtT1yMBswvtsjjaeZHL27RigggRs4hhLG1oCtJoUhgwhTwHp6fWuN",
  "key20": "Sqg7JXoJ9iTQeuagZqXvHeyBC1nH4iGpuze7WVTJhCfjqWM46BXnk7mdgFkFhp3nmxHd8cs4kxsGgmUfRKosFQV",
  "key21": "2nQWEWz8gpjLPWAcv1vdqqcKmMt5WpbSZNSxnwmPGUzBwiTpguK1xwUn7cHj87wPrvuJ1ck7CdweyKXDjhwztubb",
  "key22": "5ErFPaXipS4F77yWZF28o5edKoEF372jwVmVbDAe99bRibUSUAC1yaKqWbiZSTEyUN3ugYWwxpwPqENtQ1qYWd9c",
  "key23": "fCTKzcVhSVKCFQpKi2itP59199J8CQTDvkEDa8JN4wyMsPG9r1rk8uvkr8wSoeExn1Vy844hjWxV9oJ2UFnHQ8j",
  "key24": "48QQpaWpUGX8Mc9ZQS9yq542oBSVsgiXTs4jLSrvXMRiXj7uXYNxh8rdawQ8iU5meGmFk3wGLeq22o9LncejFqBb",
  "key25": "2nkdeqeQT2NM6VJeCdi6eYJqFLxtU1wU8ZnfEjwDYf8BvU2oUrSeTKotQWLT4ieYV2igSXHQ2Sosya8ExtkRhhvg",
  "key26": "9kbCK987HpwjevYfJ8euVH9yeVrqodcY7kQthhd9JXEq4dNFyoPwTUX6FkTLsJAGiMJTDaZBejXFmjichsTwhLS",
  "key27": "uk2VPQDvxz4awzPdHYMwAJ9KHUsFRdHgws5QhJLNtGgR2Bd8zv8vRJnBszot6xADDQoFdUNaPTE5a39FEogBRSq",
  "key28": "39ki51c44LJzgMq6JPmS3ubczCW4EgrUnWKN6LotAC96XwWypdphuUdVdBhp5SbGeEzu1191yj8zTSHMKHAeem5h",
  "key29": "rHAQktdTwkvxf7DndBXf8inbDHgEohmc5iK6WRTaF9i3owEPhnssCYeLrXGKYSMys8ikyZmwwH28czBePmEzzYu",
  "key30": "5LCJe3C4Ck4D21hYSviYwQYFmvbd21nSeu8SBopdwTpExXNwC7t1MiFB2pyUoP71H1A2EvrVpGcqzBjEJAccCAu4",
  "key31": "3R99sYqbRj4reR89jdB6XegXrcap491XvTV3iSqZY32xf4TkFQjc1VGHh35sMtjHomiHwzmfc11aopoTTxHggQri",
  "key32": "2S8TaFoEUHtWW7GRp2yPP1U4u6coJsCVZhjVX5UtFdWfC34aUxQUPZVqY3jRU2q4KTWVGw7wqVKCw4BtvCkccJuM",
  "key33": "5ztUjrUCTYmTmG18R8AUUzdBXVCAFdTRcTszJgCpLUr1NH6XniKeakgsV6pvLhen27qmnHFKrMBgiSFRtV4JkXcY",
  "key34": "5BJKkC3G8z2DK2NToTwn7CgUozemXYQM74jyTBZqmsHcTQp2BTjvevq8wFzZa9SFn5zuxeMF7HZfZyjt2pukfokm",
  "key35": "4kGLtx8ohdd91Yb3e944WHPQUALRqRtw78kTu2V4g2cx1ZTJCP44u3bwFraEbiQ8CZb8HdZYQbXeodAyywnEkNBr",
  "key36": "2En9ZxpYwXgSwbztNABgfUdQBVxMsBrnAraVMAMaQwVVDabzwq6koA3ywyBZ9fnEkm9mcs28NYa6x5Ky1NUMeg8N",
  "key37": "33ySDsFLGFJEKEJmJbx4poua4WzcsPh3PvDygVVofPkSwprRqTDpZJfdJioDfpE1bgejneFGRRn79gNrfEb66hRs",
  "key38": "62LMeGyx45iZqfsXZUT7HZX2XCP2QAEzpvyYDpKmj3PWqiWkS8B51GV76MKssWPSxVKJ1nU2pTntY5W9Ha4Y5FbV",
  "key39": "2ewsJC41VG3ukUT1iHbiwayckSpNTaMAdNbHKGhrBKqeW9zh1jMMBzWp1ZwSoTHpRPw8votdStLaJKpyhPgRcQVL",
  "key40": "3ZwHuKaZYhMFWnyacNyY8D83KuaGSFWPDWGSouqqxWNuR7ftcw4cL5fZwNhtFe7TDZK3oVsgVfFfeZJrLnLtEjdv",
  "key41": "34kH8ZDHjHw6zbQ8wrnfvH2dPFWhmmUwLRiU2sh7BMZ9btLBZKhn9FYj92QA4wYehL6eNFaCj4YyLDC8J3KaSi31",
  "key42": "54SzuTsin6FVEKtWbZXcgyXhGYLRLcgMjDP7MkAdCFXSK1s6fqxXiecxdNzAnQgxNK3MY8SP1TdNEBbt2BVuDdqz"
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
