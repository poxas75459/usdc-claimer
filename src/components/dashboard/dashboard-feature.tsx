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
    "VZsfvfMPpPYrwUDTYot73o96bEHtr9maoTRJwCTkSd2RmR3rMaqyYBxMndTzpQbox8jxK3ko1dXqi9jx1R5tnLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAs5Z7HQjtdFwJhPZi1jprseCpjJ5KFp5nbg12Kyy4Dbi536NrRkMycjJyX989y6VQUtqGt6Gf4r6yvnotJWa5H",
  "key1": "4TcT3Mc5FPppQrDoMC3MArAcYV2BzWQdbmshK8UvG9og6aqzuinnk2UK6LmQr91wh5ycq6AaqgVUwmAmEtYLn5ue",
  "key2": "5MP71RnMcmzPrC3Nhq9VsoviWG5EDeXi4XLjHfkdCttj7AtZhUGj4kJEUpf3LdBCHqD1XeMBXzgomzXCJTw859mU",
  "key3": "3JBgsR4RdTueDrDUrubpGtBYmFQuFVd6TARMqv9njYnLMwVQrKq6cfottF8tVXGukU7X8fYdfbXX8ehNhztJtAmK",
  "key4": "LivJ7RajX3QVwBTorYSWzeYS64Zt66mia47NceFgMxGM28fjEUNT3Hw7ZuwAZpY7cT7Yn7AhFhoyGG2vdXX32NP",
  "key5": "63JgRMUBzn3MkV76MkxBZyfa9snjDE5wjkd6dmndpYrQKUVLDkaXQKLxUkdkpJN1sD3WdQw4YzfgQxtCWpVhTaNM",
  "key6": "3bQP78nGkiYyGykqP6mvBEZMi5kc4VAmvCU9iuuGoGgizzNdgL5NFSBfLNjeg2Sc1hSo7ttrg7dtMFdFmsSES4kj",
  "key7": "44ZR4V5sT5JBvrWMtz53bditY6f8ADVCXXgTcmydboDYhyQ9N4mswCET363GgkHok6XzP4SBa5kpGnghsTrB7PzV",
  "key8": "592duv2scr5o73k2xVrjwC2xVxqAyYP2Aghqsq7VkvX3hkuoUU33QYoDJpKxRh15KUmM4eWzXB912oCfipg3pWxN",
  "key9": "4vy6xCVSd7M4dvvouDkDnDeiZmntjYP7XqHzAKrmihrSzzkPofhpkfy6Nm1KtAPGyvLqbkmpgy8A66HtXqZYz6vJ",
  "key10": "28jq2upxnY7PQHhJRX1NmgFnvQoG5m3RPkkaAedHajm6je9WZihnQXjSQNWtaUH9smy8JTmCbzHywC2DFK6Tyw23",
  "key11": "gi4PbScU5VoF3zV8syCp8B19LmrBHh5jbDMTstLCmmgt6k4XSVGpumqUeKYmyicwNmXyvUkfg44yzKoTmwY1kzN",
  "key12": "2Q8Ne4Y2fbvniJYnwSrXuGKciavqBTHVTFCiVYzWQbSZxFnvjG6wyqviV1wZPdyrBpK6YipUnTLnGchWirntR4CM",
  "key13": "3FHp1UyBUUYuLhopESxDXieMdFZgCvLBX1vYxzeGCxUJ2aSazCKdRxxf3BhRwafBjx4EwctkqqoNQ5wdvDXaJKXT",
  "key14": "AVs7XVhrCwi9nbVhhfyZzAfq8o6DkEPwyxgXbaDChJEyCBbRDZio96BU6mxJqsJV3eXpXntU5XBX4MY5mAGa92n",
  "key15": "LnY7svqaPrbB3jgvd45JFAHVeCQTRivVbpnjS1usM6dLznGAjGP1ewNdvrxdWQQcU6nJzBAe3ZyD6f2GpcWktV3",
  "key16": "2rhHF3iN8hHKVTgxgRd98YK8NixunEV4WydMeP7Y4hodHCXhRR4WR6ufbPQPPHSDf9FfhTjpBvEAEM2voPk1HUtL",
  "key17": "2WYPcVfsUiKPcoHVCXLdtTh9qyJz64CxyvYFMFhzmJUvheoisBF3WurzRrg5cGpwPeBrbzYjpJhQwVrMzfW2w8D4",
  "key18": "4Dg4a3aRLhXruQcGKBN5X6ydwmDGoibk6rGRFun4ULzSek1NAsPzbhsrc1evNHgPH9Mp1xbpnuTrwunxmDypptrc",
  "key19": "4vzejPZJ7a38YwUAkdw2tPXwK8FnYoNwmtUnMNXEeqnYLrzwpnNXTe5TmJfn5dyh4QjaRBVULZsWyhZX9RmGvQ1b",
  "key20": "xz38JBbvQHoMdwqbMyHKTuva79skwAEiQS8Kb5x3TzLGVYjMKxbbTt718tLZp6NgyU7oiGsteEuQmBBgqdSUrRT",
  "key21": "5iS1zv55dX2bA7EXT9KfKvadUFRDhGXWBsUK7BACsoBbE7GGZ5SZihWJW58x9Xyi5hvgBriU6NFBCSSKCJcNWzyP",
  "key22": "58DHK3MfuGdtc2dJTKCqSgXekDbh5CuctJkcm6tMntaQshZ4tEwpczxmKX9XmnqpCq2CssUkuTmx5PF855CZKEZw",
  "key23": "47nXgVwTBu547EmtvhEMr3KGWUS5rJNqDnLyuJbd352KrFXCdCiXZRwsj7JfNS2iSMxxVhVN5Ybx574JXMiX47zS",
  "key24": "52kjB8Sxdv29y62gXkdBvFXYgrPGqGkzzwdgYYA4KoTz3cywXcxNHdtErHBvHZyX2ERFgb4F1VhZtUyRq47dQVVC",
  "key25": "2ttfx8FD24ynHhLANdXq3E6j3ayX9vEcfvL8ED1KbPogCjNrqGAfof1N1nosGpCbTGtEwP33q8pM4DT5UFiSoaii",
  "key26": "2wwquHE9CrpQPVB9ej3Rd88GSDTpHw23aLb1faZaZdk6kZAB6aVeULVm37jARNKmTobgfufwdUbr4RgqFivrQCqw",
  "key27": "3vAhc4quRn7b79wMWB4x4UMou5WoyESdsC6u927DHGd4WUzE6mUf4BYAQgGX5BsB1mxc3Vz6VmrdpntR5ExTtZGL",
  "key28": "4NEKpTn5qSKG5RzhRKFvbfiHoKNXGMud6YRSatCX32bSenckBasLB8BsArhwvf3kRwLHpgR2yycCUdN5xR9dcvbQ",
  "key29": "2YCgiYdTjDk2xrD3p9aAiGPdCUPa6zWrd6brEFZvnYZXWbCRz8wXmmkoWXfKTHLmVToqqm3vhYSwdgafNhC6Mdm6",
  "key30": "48aVXRX1EDKBhZLWUqe5xsjyrHvyzaQzP36mLrALkTR87WnjTaXnTrheMeDKBEkmmmHM4c46MciG1r2t6nVo4xwQ",
  "key31": "99UNAwGo1Yw3Frd2KLbsQXVGxPcHB9eXKNtByvb7VATehM9XjwoisFhbKcqNT3hrjUFv9cn2Gt6y57Z8SEk5FFg",
  "key32": "3ukoH8ZqGDoYXRGsTJTaBHvTic4zges62QzKpJ4qpp3cAqZcuwu2yjTtwSnhHwNG57hyPaP9DftoRtEBbBsCRHF8",
  "key33": "4LRFLUMqYS4uaG13pMkY4tFQnRKa7VGg15Dx42MVXmC6GrqknzqWq3aXzfAthg48nQN8ttG3voqHRxBdLjJeHtpt",
  "key34": "3Vx8a3yxb4k3GUqhxbpBAjCcLYwmF4BKsWuEVDA3gpmnuHf9KB4UhtswUx2x9j6Pe9MpDMVNEePDWp8pXAghcc9y",
  "key35": "3qZfnzSbmLUR4hnqRndR9tLA23TxdYNCgNe69j5G2rMVz4mzBGN8tTKhmZvHj4e6ufaaUejxAAksKCpquZFiKriN",
  "key36": "oE5gfPC1xejDvT6TZkXX6SLNofZBTjWtM4ob8hbqmPyS24W1MjLaD2AJKuBJc3DL1pr4dBzGLwM4Dr9C9w9b6g5",
  "key37": "4edSjy5tVj9ebB1bxocR3afSz22sKqxrNA9UPXfeBNuVeKG9C6pYGnVsos6uCWR44K4QMQ1SHV68ETR7McLL4kxg",
  "key38": "2VQuUfXzJ4STtT6DcNhrncpnMmhbQsMiACAL9NA7LUmqcXAhdUXtMksPkVnHRZpNHa36QDm2vBwjT486AfUgxLnk",
  "key39": "5vAoWt7gCyHGnW1LWPJgNXuTewpgQMTuPb5FzgCoM3tkGM6HXZspxuEnwBpLwrvQZGKntBhGQJ9ZFeVkZgM3vtsF",
  "key40": "36CEaCWEXQfP3ucLK6dM6HYzvetEtuFu5vvftEjqUb8hRAzekTk1aUGHKSvLfifopoQqKRfZGXbPDjpcf7ByYzp2",
  "key41": "2F7ujmVtWAcy9hYx8jgHPZ6Nabr9UrS58ejEreUpQGpEqAVL8MVZjUXQvsnhSe21Q7x6JQkQqWAPgt3eSaHvrq4m",
  "key42": "4TxEwZz7Pseykuy3W5whM8nuKcZNSraS3idGh2rjxjDnCa9WbRCLuXTQPQhZWA5ruSEuie5ZEPF9veVWv2H5AGCh"
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
