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
    "2miMkgBaCcQQBhNBSTvpwH6VUtJTkRU48sVu7sUXAXBe725oJLSRgEboHfa9Mxfx2EURKpA6bV4rDZq8v9r1rADa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zu3kVdjXySkA5pswSazuQJJWqBPAv4MG2bFstLHovN8mYuvRAZtzoFj6Z8CPBY5aswfUySwSC6wkaHdFDzxBg42",
  "key1": "4EEMfwcaTEepZupRchVHEudBaYpqk1A2NoL9mzykUppQfBi2j2am5CcbNe9hPi9zCnM3Sf8JS8U3hAsRnbDyFnA6",
  "key2": "44n85TuwVFh3fHz1tuKnRiXXC1acwoGBy8GeSZLUtgVcQKCUfRmeEhmGKHb7UGMvGdenCgQ4DyQq87cr2FaCMcBS",
  "key3": "3tCWEBveRMmgzS6L2u1QR9C22wosQmD4n7Aknk6VLN9eAEytn7FJjgNSaG7pDHC7wNMVuNFuNrevbEjry3j68gjC",
  "key4": "2WjHnJnKDCGoRaybatqt9kghTai1XxDdwAnnsV6muC1JXsnZHEX3ECL1gpmwdV9xDMdengz9xAjGuMt4vyV9UZsA",
  "key5": "5Qqptwivka9ub3QvHYtBethSdoaCfwRnb7bhvtCx2F4MKqgwRC7CMfkpiHJHYeQPJdWCj9Kc2iyvyBFny38FJTkU",
  "key6": "4vVUidFVArjvyf2XEyuPmd44c9ryJzNpeathQPDpm6ZJp5UAkVchSmfZ92G4HmXRFFXp4M4TereWKm22v2mw4uyb",
  "key7": "7ugDzrow75UFLb5tA4rq3qCkZ2PoTaWT8Qn5gidzdaq1vrmf4joXD56jmggFHvFTjfDcvxuXxQt6VVDW6pDcCmW",
  "key8": "3oSSUvriMcY8qbTvJvMmGCXKrxE1Pmy9sSwezw8f3zhUJ1fW5V38tTrrhQz4qr9GsxHSeS3QBrMYFxiLfkMRe1VW",
  "key9": "5w42qNbz2gNQQMgMHVDuKZmTgBa4pxgo9j5qc6zCG9SFiLVNPJaXoopQiv1bDbc6ZSmScSNnJrsNNAy8Vj6ArFYu",
  "key10": "qjU53vrtsnnMHACY2boBaQssz2cbEKf82xQuqPKETNsCCy9Nui9PxxBjSiC5176LYwgTEoJsupZMBey2L9HK2N5",
  "key11": "5hTaQKt5CuXBUip67paBy9fkHfvXUEunAovR6JokxRSJ8phciwMK1hR3cZp2Xp5dc3zrvQwqag9yktWpU4qsL5bN",
  "key12": "3wc2rBkN8fjqXnJpToVam7mqKEtUe7QQnM2F6CXDDxFP7JiPWtjVitAMXWy2SswthAyVs6sJW1LEMfuYBbxMBoS7",
  "key13": "2Xid3EMmj2z5cb4qsTuumuZth8nMAT6ZqY7dGQqtCYHLap7Zf7DGVpdC1cHmE77XnFxoCQoXiiApX9QczPcXoVk4",
  "key14": "5t3Bz8ciHb8m7BXMHQU2vjujmGWb5wQn9Ut2kaCjq6cJJVS9L1KsQh4GwP3fABKxN5h6am5ZLrVXxHKTs3EoPb1a",
  "key15": "4JGRGB917XTguBgNuCaq61cnCxAS7ADH7AZDQpD2sU9E1YGuJbMcJG56JZUZ5j861SmhjB9Gj3rRsRrKrz97kVne",
  "key16": "3bWJ6Uuik4WX2FuGpXJ39SoKBmmEJCpRhrfiLMh8Yq7tkwZMmYbqWti6rv8dmcr9D4kG9gcVEctthNWgM9r1i6LJ",
  "key17": "5dkxaaNdcAM9nKh2CcvG9dvUz2FB32xhjKBMvJk3G3HmxYxZqUz6QdtZEZrKmjzWqZTwbrTEfnQNbPk65BjLZzuc",
  "key18": "2sVDEXw5EU2KuaLBRzaHjJnfLPQbRyNGTKEDeDzNqu7isNZD8bGngvUEbTmp3QXbY82WxacV3vPCVoL26FXHjMro",
  "key19": "Jdj8izCCbqBMvbZsif7K2U5mU9JjMe43C6CU2kYZvxAP6e7csjZdCdgTVS8hh6EPf618LUT2GTLxaJDDZQQ4qGm",
  "key20": "ntgbcutXAxhTZ2iWZAD3onSPkWVTuQMSWqoDHDA9Q8z5V9ot3VKZkshiD5cjxjB8LZ2bcAzKu4U3EaKbPinpywo",
  "key21": "43bk1GGsabnGQL6NmxG6vXw6UsEXKdvfqq1Gg8obYwrKWeEeBynjZ8mZXxm8Dt6XhT4TumtVXNmppHSFuYtuGCmk",
  "key22": "5Y39U27aN3uh1SgfpijrQ415b6Sgjq6tC7LsgEmiaVQzvKKdv4ToTSfRDnH56DTe8XrBCGK7noH8krQK1wV3nCmK",
  "key23": "AisvGecYZpE9qeS568TLRokXgK1KJ1tnoVJyfW23Z3aN53aV8UH2bSu1vExzgAyYPWfmaqEFMquMJUDsnsYESgk",
  "key24": "59UupLyikrzGoGHmvhYMUYeX9pLDrsuJKSbcaxWzAk5CQVRCbhjQbyR3L4xG1w79oSTXJ4q5NHQ5sz4hcrSj7zC8",
  "key25": "2D5nxaUbdeG1mFNJqsu4uYred6z5tv6dGTq52wNGFant2BT9TGKQCWyFpErNAC9eAMXNvXsG3XwCod1P6S35ZF9z",
  "key26": "34iuF6CnQP1r5hq13igefBhvhxNBTiCnmSZ3XVJJkqTfYKZEqd5JMLGra3CtW91YicxTTtPnfS7u2Nz9H4LQHvyK",
  "key27": "3bJMLcTFXWu9KWmbx4xsnpahXiC5ZfHheSERRu3pNCfDqrY5LdLACifP8aogqcKnMPx6X6afdGoxiLt5baNgNBD3",
  "key28": "2TCQeaRarrwCGmzP998Pf7WWKC8Fvc1AqFEEc9z2iKo8oXk2VA7idyzJ45Sux56RdLFfpdTXo75QWKRqF1fbgBNJ",
  "key29": "4JNcaiyK2MwY7hsjToQUy7D9tNZUUnjwTJQLvkx6ciN9eiYuk1uhm2uQfrGdZhaNWCDoDzs5kSBRUQ6nWfZYTwra",
  "key30": "2vUvN26nHk6X1V5RdzUcnADd3yfJhpiM8gofbQ89BZSawnsGtocAGwBa1jUssex2QMTKZaG3UFe5FUjiA7uozyFr",
  "key31": "av5728oQPS176KUCSmUje387o8sDYWWkcy4meA3BjNXpmW7gDqVtGfQXZMyt13a6nTCBc6UB8ui5frh7Vz2pprv",
  "key32": "3krAZCQp9iWLzshcUE4e57FhugNViXgdby5qUDkDwUbSYdqRbrVdsimFLAKxTcYiiEN3mAwcv12c5hP1fvFHJEKS",
  "key33": "yoKjPhEGEwL58XoHTjtLQyD2AdEXRqhmK2eaDNYDDWpkrruYGpbJY5ut8kDpJjicxpCGjzHQCtTx7H4sKi8egM5",
  "key34": "49z1a2ettZ1avcuhiGNrqjCMbg7HuMxrHefXcSEhQrg2oXCxTawqFQsnttPxPDGfLzNz2ghXcW89UgjJ3QG4j3bK",
  "key35": "2hXr9WRXm6R596Kx3Gmdcej7nQmhCXoHMXCCqWWtsvk1ekLY7vzLSgJTtNBXPdfcfhdRJBNiDfvWu8jcpfzYQf5Q",
  "key36": "iqMeU5oyy7WwNFJDzTQyRUY2RGec83wHojAnPgDsqU6zvWzaGRY33bcXg8sa1edHFoD3KsCJSs7DyEwQF9bevun",
  "key37": "3u59NnrnbCWNtQnUqkFTM8tEcM2okUEjtDhJXMFMUZgzAWzDmrQ8Lv5gwbMRN8km1HB7QEn6R74G4dJpnVKxGTyG",
  "key38": "pzqxaKMbUNJs7s9J8Ertk2iaieTosKCLoj4h5WvF15NtkUTSEYDPx7Ep7q71He8oeFZ3ihv4NnAswPLeM7YnD2Z",
  "key39": "4o4wLwQnQAWKdxqKiqB96AQtH1945FWZjNvW7kipLqUccxN2B5JNeHdfH3BCwKDSBCjyAyaFPRPKjjPboFn6FbrV",
  "key40": "4nWcb7ddGsmYuH1CaviAWqycyQWSbAVSAxq6JW6zN1wfBja2BzdsCYxh1rHqxXKFC5FQdHVAZYgaFvdoYwFV89nA",
  "key41": "442ZDx3WF8KDmbfQkGKLbjuzxg64zM7rjkFEQNmeuS9ePSaS9mVf2HcZpSQrUSCPF8nMMHPPbZt6pyiNxE8JafLm",
  "key42": "44qeHBEFcKVm1nD9b2rYFLA3AXax9UhWBkitqtvGg88WRaecQRJ5RkFHsVMCs1pS9rmzFEpxyG8goX41AfHQpngw",
  "key43": "y9MbF1GyMTWKByeKvmaux8ANWbbLWHu5te7uwwY8nLoajWF1RZSU7uZjVbz5JFSKgw62FM227cBagzNWPGfDiw8",
  "key44": "2SjnuTPQhqiGGJ86jvxdmMUbuPnRyX4yEvPGEenHTJ3nfaPguzTpRqaG4Sda7JZcTbA9eCCuq6UDrLQaXAGBBCFA",
  "key45": "5JShKKa6aUzboCd6vqvikRuAC9s996m8UjtZtsecQvQDeUUNwnnCZdmThdDaijP9romMDsYm1Csa9kDzpb154RTx",
  "key46": "2CWW2fejXjutnpd69QQrxGQdg2W4aYsYTYj5xdm1Bxi2BMN2jG7yibsHsHJJukJNiyM9dHVsTz2mn7XkqTq8XF8c"
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
