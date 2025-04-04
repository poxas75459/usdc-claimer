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
    "3uHeyC1JUqHpxcJbzoFt7Uk9K2LHMu3TEgpV7RLRnAUsoUeViKGgZ1cZt63fYJ6RHMzyXTszFUY3jjNtBMLBSPTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmGbVVyvBWBGrT9Cx4vAiiY4KsYGWRAEsGXFQSFEr1tzZZ2igoHBbpdPEa6K5vcppsrp8W8Ha7uyPgxu57BSM3e",
  "key1": "4QTxeTfCe4mh4gpLmZewrcG4ccJjeHszsqd58XDpawJj186Qvhg2BegFkqDDuqeg4zuKkLBsy3Z16fR5nSJhy9PB",
  "key2": "3EY3iUy935iFx8TT1PKEfDnP7b6mwQvF2qAwFHaVwedCdLTjxn7WjJtAPVkvZL2CUg7qc1YrEpeik7MuvQykfMq1",
  "key3": "2oDwzyLuGm5nkR4H1EPHuHsxewFhXcF7SR4beiZPzT32T5ER37F4TauUXq76bxGiR8Y13woXMhfL1CH4vAN44wxw",
  "key4": "58ikpy79w8aY6Br9yxsyDLsYSFY2d9vFFbQdSwYg6d99yqisR9ZGsaEC3LEsKJY7eTBhPXoZfdZzQRUyB6qg3Ygd",
  "key5": "56oF9DnDpqcpNZaBiC9aKxzY4UaxXz8SewLqhG8LPh8Fj6EuhdLBW5UJ5J3FPjHTaag2swDxwtfAJqTFSmdgdN65",
  "key6": "3n86cFtkcTQqHGwTbuZBxZdofCXxdEm2fxxM3ndTTFxFHDHVFsokNXfUSmppLWFo42X8ZpY8HwH72HLke7FWVYkw",
  "key7": "X1d66akNatfo5NiPLDBnMPkFCGF1sg6dSr7Uon6cLRB6XexZMp4o9KJSUzhbUyTF4rdns2E9MbHP4kAhzxdYUBF",
  "key8": "4ga3AiftCjNCVVUG9o5kvfwjSg2yuq9eKM9JxrH2KHB5MtXxNNSCHhcxK2gp6hfKyxaHYLtDjk4vrKmEJs8a9xRe",
  "key9": "69VyhVh3XR8xtrp2gGA4tvkEh2JEoixfsQyEDnqa6py1RR28UnDfeEgAdD4Yaz8e6PzAexTTjcb1ZN9kG9rVago",
  "key10": "4RiJP4HpY1T4hREg5GNN6qg4So9f4faGDn1Y4KCUn5RBakbVkavit8sWVSDNn5paR1XKrye6fsQGuB1BXwsrhCJe",
  "key11": "59ubDeK1wsbVpi3x26Y1VbNDmTMDiW5peuMqJb2Ed4LU1qatgWauVXZaC8wGHGUqCBb6XhregNfvUmtUEgQEpjpx",
  "key12": "2iv3Ky3nq15VJNXhaCnkacbnCrwTg2hdENKobjEguH3PHKcaQUost9A1YHgVRqnsw6hmCn2bzQtdWtVDwqzzZz17",
  "key13": "5kRmjCpPUxBRZFbtRjgWq1WjBqwLPXWurNaKu71FJU3c2dGMc5fpmiwmNEmZYfta5URppZkjkQQumwhZynT1BX9w",
  "key14": "3mCcFJheBJxGvYMbdTBirrwqDSSbhv5qPvpgUr2SN1cc3BJFNDi39sk4sTgJEZKe4PXKY3RYpnjjY2L3qGL7Az4C",
  "key15": "hqdEi5iRGF27CvQkpQ8G2EXVxejpRAhMhnYBkYmATCHAmEz4J5FKxTLEBpWtXyJjenC3vP9X1ya9A83K1Wykib9",
  "key16": "3c737meLX8K7z5RsDMwujkjRZ9y3ViGwBJ7xbskhkjU4fzpDxST5Abwjb4RB9xW57Lv9rt8rk2yvQRfR8HtWSoWY",
  "key17": "2dqfS2bZnA1LrRVaDY9XJcvEaAYMujwegQDJ1HAxwocECFvaJPHZLsgFHJ7M9KfrcvjE4emyNQPqPUDcfZywgSiV",
  "key18": "4xaejouKLbHdrfoPfobCF4U2WXSTZ9deNbofTZ8k5mJFgyNTnR4HAa7KFipsL8VKZEEPnrojaTEx2cXWPL6Ht3nk",
  "key19": "2xuHDnyQMfbQCRYM6nyR5MsJVpLNgMGsRmyb1SdEZSYNTxJVW6S9WgTfwhAyLtvwqHgADAfQSxLScjx5zrktNKz8",
  "key20": "4TkAriGw5dEaEwwM4EEmbxd8AWZTSzhspRzSHcdgUmX6L568xVkKQvwLkwvLX9qnfuQcWvyCzVDigqdwB2XtEDas",
  "key21": "5ry5LKSvhtXejJFSrQ7a5AVeaAiHea9ibRxMPGPJo3T1Rwqd174Ab9vTVs9J3JX3vPE6QKDWFH5RVzGTise7EVfZ",
  "key22": "FwFXWk3nVFMHVTPf7Vwdsnysy29jvk2eeWusFSP1Wsbk3wB2yab5oidzRkTmgfMVE16VoiTya6dYj4qWxNLxJeC",
  "key23": "4JCTiCFbXdkk7fusyD5t7Y4GFmRh9mmYz5gbQMJvTGkwKQ4QgQVmuepV9CoWgyKBY15qmM9jcPzsQa7qhySNeW2L",
  "key24": "NQfLRrKZ5rPzpBCCEUQBTHn9EBz4ED1GLDFboRzZyQ9mnUkdbbnHSe6yh4ymCL1eTmyXar1kZGFPfB8HHQXQgA7",
  "key25": "4kAChtacKKUWZg8DmY77epSveTqXSpkFj43a9AJ93qwrJtooeADUmPnbRtsGR1uRCBibMmBUSqzYDekvxZgpM9Q6",
  "key26": "5Kn2yRBnA9k1ZUWiao8xxhB6MS6SkpUAjzZTx6WjH6idy8KUeoxPbQBKa4rDWMQCcStEXqWXAxLuqn7RPvEvnWMo",
  "key27": "4pGDK2YPUfHyWzxaoxPkRhNRQHmSDTCDuj1wNAZWb7zdAGWoaFEgJEa1oGqqTj8oiwZoGqmg4HQwz2dBXgu5dHmG",
  "key28": "5tEs65iVQG2kME2mA95zBHnxHt9nGm7BZYRsNfKqUYBqasu2J3vpnXAhZnBnvRV8Gz4eesRHdgZb6QouKsi6La4f",
  "key29": "GX5vDvocM2UNxSyxbmtgraPMisScm7vw7HP6ZxwoDBrLVWQZ2iJtE9vJmgKDDbBytn1ggqHYTBSG2wbiHCiFDag",
  "key30": "3dUArNYMzwAExF7d9anfQUeN66HTrj1Sf9NWpz5aBJYZjw3njLTPJrREboEmnUeou5cnympuSC2rAsxsT4zLzH3H",
  "key31": "3mpJ3dTZgYTRdH9fGsN8isbVNreep9UzMuGDhBZ7MYcnM2g9afbPuKXhCVkJFfuLEFF8gdjUuo55GYcp1ceKEZCY",
  "key32": "4i6NPX4wHyTAVxJjrZuS8iNhwLjq94fMxSTafx2gaveFy3g9SyU1v6NKCYCskY8BjHxS8wwxLzWsTSFb6yexysQa",
  "key33": "4gXz4zm5dnAxubcfx8dcVGrAM6dUM3h4SYgXGCrPF6wpLeJdKffBWYkTVLz9G9VLtCqqDiYbd8fmxsxkYpDbqX6P",
  "key34": "51HHHmYZHZS8DgnmG7AP2p2wqozCskjrhiKXkKoXSyYsMRsZc84CmgwboFpAcHCQBe8GBQAM13tyq2NU9UgRsVzS",
  "key35": "2MoG5LFMcRH3yhfE9BxMP5bt97SzxMGKgL6LJTqgNX52uycqhWcfgKNu9oi8r6rNjWMShxS82UmJ7CdEtzEQu8ZK",
  "key36": "F2C4oMSnTpsJtRZLvXtUw15vP23NnStDQzxEY828VEmAmT6wsm6vqgT4LPUM6Z5biTgohZeCimA3Y4iqUqdLUKi",
  "key37": "3pivDjP5SygCDFTzTWBampjXCZVAbYZL3Lc3CWGEmQNaXVxgiYvHNa1DzGUgcSxaqJV5mc8CLNjFU3gsfZFh3V1x",
  "key38": "46ad7SZZYYVA5pQZTCyVn81CXnQ9TixA8GAX89qhT9w7n2scnmSDh846TVNyY9dXShjMcCjzLqVFHS56vpZFcQTG",
  "key39": "xNVyjB4LBwDEBdK7DkwHgCvCH1QzvQs6J6Xcz6fFbYah6i7Bmnf6UQud9YWS6h1NVHkNgSsvENFVpCgjFwpePfm",
  "key40": "2ebC5AiSafFgUoRKdiR7CJ3RfwvKKPKNqeSQgm7762dgv7zcksogjnNQxDhTJKiZVhyUvbn8YyW99esgECTCe3HA",
  "key41": "4np2c4bHhdG5VxLYiZmDKdWqJp98cpymdyo7DLGie4Nc8yj5qb5N7UCMSemKEiwnj4LxPYC3P7GW3RtgbCRskRcL",
  "key42": "EYyMJYF1rKyfk1WjXUvWsHBD5W9AU4nmByAeBkjxe62xngUL2wUoa6tV1DaotxcURxbJs2g4EjgJx4spyB16cqA",
  "key43": "45jBxcJ4Bak4UDm39ZpzQri5b3LyvF9kPZrcB1x5urCpg6PsG8DLLxiyzKKzHEgmDrkJZt31mTgmpSLzDEArMvMH",
  "key44": "35YUTNsxYQsPdA8bKYjivsmpeaVJUbgS3ZyTMwJ4XK6yQEtwUQsiA9S7Nxt675vJBx93dtFW2cEvg2nrz4pK7u8P",
  "key45": "NWZZLNNPZMb8wj3hH73rR7qRziGsRmJdzpVnGjUQzA1Sv4HwgsUcY3typurvmDX25Tc9ZNmnNAhfZ52ogMdN3hz"
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
