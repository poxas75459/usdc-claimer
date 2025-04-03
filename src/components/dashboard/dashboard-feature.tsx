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
    "2As5f9qaW71GeFEwv1xdwi7ZsLSFsZMf12E2jM38T8jbaLJUskPZZwkmkWaXwyManF9n3UpY3dBKSh4wZRMy1YMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EefDkWQiBRgs5ZHyvcNEpDfp84wKaXP63TiqQotYoZWohWYKNx6FuDMTPdJaW8EEWLbHW7LEmR4zvykNwpHMWx",
  "key1": "2buqVGqb4Cq8vP3QpVLhuPumoL4mLnn6Y434uAYM3V5XMjKo3DvE8eDsKCSE4BYkCob9rnoUL7aGY6yCWSCt1EUj",
  "key2": "fMExW1cPAJwZahbm9Mgm4qqKz8UQfn54dXnTo8uPmN9P7mXiWdEbZ7czJTowYmJhYbvGX5LeGzhp3Qvws1NghZc",
  "key3": "29YEvbMyiWhMZJf9rNfvFZpeQUnNSGPdRBempeK4D9bQznCyuboYiyiMmBNhHA4Jbxxoq5CJBFLhqQUHAyfHkbNL",
  "key4": "3aq11v8wDwv2JnV3kQN7F2AgxuS2QbVXSzx5Pk7HP1abTET93ps5wgmEDDJGGGG1k5YcKPYzYmBV99kPJ4GKrFYa",
  "key5": "5U99PwepbqWADQCxFP5LVPRZM4hrzmk7TFoF7pTbAQWfAPrrEM1G9LEtp3JGHJqyYDHqQDPWxePouZKEKtQBx35n",
  "key6": "2b6TsWrbLakcpntDdygvoZxixx8rdYw5Uv8KWBZUroDp97JTNX5aAesMDKH63yx2BVDYPjNYmE3Snh8277Z8kUsu",
  "key7": "4H7mGohi6G3Y96nWwpchoP98QB64ddrReCKm5cqZFvDcSxuGkA9aNaE6HsVJuENHGeq83HrqNp9cv2YmUnAZabKJ",
  "key8": "3tsSD2yWeBQTeB38aHQ61EZELSdbdbDAZZq4JLpx4VBFoPx4a7ErQHobmX9a1ZTNgFScF7rdULrfg9gxzj7ZBs6z",
  "key9": "49ChxobgmuqUAtWGwztY3BBjG6TMeGYF2PjzdAfkFHazMyjLukqn4CYpBH6RJoYWji23JVLcJKfYyjRaoDdM84fV",
  "key10": "5mkD8RMxxtWHiKuAkYfGWHMG4PFKbHQRbofZRDatQmsX1Wrvm87hEirdDTHrtwsjUam34VozXQdLnGXWCXAWmmva",
  "key11": "62Ub2X6RUHgatrG9vLBwXjnrW4iCATVXf8Euy6AfrBXznQkiyDKDbmM3qZk9VJEz8nkePnKbd4uzKMc8a4wmiZ9U",
  "key12": "3nELNQriDjU6FdzEGLcfuSNQJeptMYk8PzJP16GuiU8Pqyerthahj16zQ9vF6CXoWSLNeLupXbSvTyV6oxqhvDXZ",
  "key13": "4NQaHtS8dku1arcotFyWARjA6cUmdujEjZ2z1X9WZhxHqYwCM5jGEbYgRY7nWMLpN98P3ZrZiDAuodHgQP8vZg2W",
  "key14": "EDBkG6RGBJnjCCtyhmCqkrJuJ1pQpByYZjnzTHoNDJjd4kHBsJApYjD6jv4UXY4szYx3BfgJyCP8yvMaMCotEkH",
  "key15": "4mV9XALoWRgQLZhcDCzbHrXkwxXV2V8zGjfiE3UdZh2nn5rW83KuNwL2S8waxEEbY8UskMpzTkBcfbJyPsBgQADo",
  "key16": "5qxduN6jq8y2FRh9X3XfcqmCq4HyWp5u5ua4VGMyHL5CxGK3yTyVZ3pBBEU28U16UDPJRy6c1YKYX5zwfD5z88H2",
  "key17": "241oeX8zprBRewDmxKn4kBHw7rK1xrEMcL6vvsUwPFUQF1e935d1omgAx9oLp6CZrEU8cLBPDxbgJ5SLXoW3e4Q4",
  "key18": "4uxvoGdtY9JdRxCVvKug3GKsCMCyAjUb5DECyNj5YLhwpXATFgr3yLbScc9PcthyuD9oiYR1X2X3tiMSmZLdhykF",
  "key19": "2F5dP6rTwuXPP4N3w3AhdhP3KbixWMwUFLtVtAgTXX1X2QT4bJAYXHhXs8muQUXxcKv6pCBix873ia8bNXxCaP9H",
  "key20": "3goKXhpy6Fmmfkuq1JF8tbz7Ax3fiRNWxW9eBaGNKojr5R5WVRCNrbdBTKJv7H9hypgGy85guoRk7ySYdchV8QsU",
  "key21": "2ZBChpSg5BGDvvcPDAFoECUSbPrNFs4W9StH1jxq1QGxSCv47mWNHjnWNtfiWBDaWKibiXaHZFa5tVyychWXkLwE",
  "key22": "3mDieGDUD19Ao1DWyvHPaToifLZbcT7xJoBWqTCfSnbaTCARA3QpY2VZwvWUWJeyXjzNE73qadwC6dyDKkwi9uHB",
  "key23": "5M7hBzssF6SY2enLisFLMLnT9dTYNrNjKua4wdGN7PFEWZSjxNnJGxP4LvMrkQj9TVkF3jA28LCDNzvd5Nme5zFF",
  "key24": "3Yif7hGzypFT88aZxUaYkjXTy9HFvaQJcR4oigdK2kRFegiw99vH5BgMT48eV8QtQP1yDmpyjHtigC1DnirRLiuC",
  "key25": "5ytYwNwXxDLbcYTULoTQgAe7ijHL3A73tzRQSbixehetd9UKy3VqAMVkcEUFWk9aj6JwSs4kEoWQ7ZpXsjsj8mkf",
  "key26": "Jc1WFJpKGdCpiD8kijVdNRnDttFDcK9AZQTnZrbke5jJWnnLgp2PwvW6uvFNXLWATrTLWxhabK9xhdu8SJgNAEC",
  "key27": "uQZLdTzCy8AtkwGhcf9hTzcNVDXSAce2bFmmCVxtfBnwWXnUxnJP2c5VvGqntRE5x3ht4HAhMHcz5nVQD7MN2nJ",
  "key28": "3B2o6DwdFSZF7xQaEf2t83aQBPHhqCY79GEdxhZa98JVL4dmSzTd7wu1G327sKBSu8dwcVSeBX5p9xuC2dFQgCo3",
  "key29": "3soSeEx2biwGn4Zi31icFzBeeFbtPSAqme3BnwbqZetgJbXmayyakTY8UwgGrfnyiWW7JF745D1QNBFaJNtubG7X",
  "key30": "u2fKYa6NQsiWm1caRwMcYS5WgnjP96scduCqtBb5Dy5Z84i6tDWN29UTN69BQQwvWzyc3UfueZaHFEGx4LPrHfz",
  "key31": "2UgmWyHsQqkMTUGF2HY7t7rMuHnE7T8B1G9LqicfXUN1JLBnjvHskJEqmoVshfSRakq18r95APggi8t4DUr9nXnm",
  "key32": "2fXriqgzruoAKT6ktgeGPAv9JfnGSgjWZpfd5FxYzp2EpeDzY8EztA63nFebHR2tRNA6K9cVi2Q5KMyk7WzfHJEd",
  "key33": "2UCcctQZPzPYuzx7SSAF4jLGkM56D8wwKpG7fve9YPC5TkCSEfZKUAmcAvEZseeZ9R6cazHEbrDqDYpYkUVxKt3g",
  "key34": "44DBdgpHczFpKtjdLaEhRXBdnNRWRWg2VjkJtdo6pFJYvp7etCRQD2GZxsaVZY19FyKn2JZMrPAGptP7FP5GEzYq",
  "key35": "3fS7YZoGQqk2bpWpsEivB4hKHE2sN1MDZh6HwX7c93pqpNJjMZxWkJcxTm6eHLqsQkD22Q2zVR5yX7QDLV9KJ232",
  "key36": "3ccEfFJJHVm32FWGXnBBPcvt7tuaAzxr2yYUrpkxRsMRP83C111n1rY4PPWWGNoism7ttLQ9rCEbp75y6ZxbEbzg",
  "key37": "E6VbaJmQEcsKZfvo61teiLsDLQj8DuQUhQABC27xoWg5Cc1N6BjCn1MjCBumB6as4zP21ZzyLeDpLCYBxTmANXZ",
  "key38": "62LXRXaD26QpGRGS33oeseZSXjKTiy1y2zDEBXmdbLG48VrEC19Vqr5NHYQWS4ZRWjz7p4i54WjwtXA95qjk4KPg"
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
