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
    "42fnwppw9myyEem9VBDrZ78iQYd29ebiN2Y4YCrdDNd6PZgecYKeMJw3oPrxZAmzLNnS5wHxzKtye5qskTU9DtZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCdgzAQ9wsVX3wHDVGo4MrykiuAzJU2SnwuoYggXgJAejbGNneeD2ELf9KNcSMNikPw5zmzvLua4RscCz7K9gCC",
  "key1": "ZZo3FnzSYdeCByCUCVAsEaTSpUXYJFCyD8EoHqmqKVvvrxA7JdUTBMHbHByphV3H4pVsfT21cHwdyYWSXq3yx5y",
  "key2": "5y4SL9fmoNJAgHWKg7uYPvUbqucS5QSHq5pm8rFF4VocLS82rdP9nSK7u3pUKXs4rgvPMRYCvabCRvY7KeYpEab9",
  "key3": "4zevHtXQinC9BSGFLYX2SuobFe98WVceeeYWK8gntxm8cyGYHYzCkHtxVRjtSk4fZmhYmEgzqYBuLzxHfPmoMwLc",
  "key4": "4ZDrFsAUSoLmtY1tQeR66te9eYJMafs1oJvBQhoUX5FvNZmNncTt2EWTL3HPERVsmxcJAn57KELRCzj7RGnmCJKT",
  "key5": "5Ybj9u4ggkNqVUi3ufnLNKKP6WsB9ti5kMQK2Q42YGx77QmphiZR6QY6vvyEgCUqiscrqn43kQ1jqyrGSET79JzQ",
  "key6": "3wqDyxA1oUT47dH5KHnMwzkbAYVfhQyAfDmDeWguf71hEnkf8ZAsNmRY7kj29kYqM7UZG5aG1AzZoQBxkgjdz7D6",
  "key7": "5goTpspCDZJPFrBtW9imA9YdX3Z5gNStpoYNyPcZMTrxncuL42ixMUqFP9kH8ciG4CqThAjhn39T6rPhuRKgpEiT",
  "key8": "2FmmMk3dGoxjSuioL2E7beG7Yy9XYUzvRF2XzZB9rNvUCAW6KTJ3KADxmC8kbqeuh2ehUgVEqjjMArr8HBKCtwVL",
  "key9": "36s5USNWTc85bysZB55a5PsXGupCCF4c86Me7UXMmW74jsR5RYhHAZ9DkD5VGNXei7uem4dXgzZ9yD9F1uQVNx99",
  "key10": "372wgZPc2sB9afAxcbieViPPVwfQG2NeHSX9P4WLdoxCewauUSNDZWAqaVHzTeq8qU5NK5R9nuBFMHvx85P2udA3",
  "key11": "2ADLEgCGZpwr5MMkTZktYDiYCX6gmN5Nfv3q6YobE7iy6JxVcEfiCiH5s3jUNgMuwC2N1FpF1TKPVJidFQEz5WWB",
  "key12": "5qbeLY6ArPsoyDqgAdn3nAC99HHXzqWGMjeHpZSrinvjdrywe74NcB3oy2ue6bTe5p337zbCwiuW4n8qhY4TCKYg",
  "key13": "3n4CT2mXruRhBRZAS4Ld9TBvygyaChzoN9Kbc157iYJ3igKoWGNfiEKcP3Zon59jnisji3Qb9xCYEnw7E87fm1NW",
  "key14": "53Yt3j1GdUXeEAJAhgLzQXXrZjqyyeRyk3iLCq6yLmBz6QNWkzAMgAtgiZnvZUFNCB1ANhumumr8Jfy38QzLJuhe",
  "key15": "3ed4MJejDscnukMrvyFh8He7DgC66WZVLcjgqzDXkezo8AYngGeUcVMJtPqA3C7edcmBTeSCda9NuDhFgou7TFad",
  "key16": "51QuBcDdtCGC9pt7z4xMiDNVkQZmPYFwZxQvRAGZoELFQNDYuXE9JNNDpyBzHXbKhsdHeA4kEMsCoPptECYgGmLe",
  "key17": "2nM8TmJzwp6ohs8GUcqoW8CB7beC9fqsCRaZBQNYz5q9kuoL7jFQap2LmVStesqkcvHA9VaxKr3FQGxku5FqADKh",
  "key18": "8GW9wxdkfC6tr2sR1dzaptrbAqgr2eVDvCnUiUTatgtJzyuKdaF2E1fggNwHFnnm9b6XULHN35jTysE1fMWBzDN",
  "key19": "3HMmrvMKmxifXxXZW9eRU4RKwZmQJkpRnpJ9gQ8cGz1mDiqkyadJSjZqJxKKkhjqjcGoKge6yYgMuaJ1GEkwxCvP",
  "key20": "2siBxLYn7yfcdwwJaXd1R7rP3LyFkvmaaqzGkVbZD3SsfuNJ71P6DnGFvMiJUioZkxyZ8RzDG3NingJ6roTVfJJ5",
  "key21": "3vf6dRm6Zx81WHngjok3n6CPr5hfVeioVCQWiJzkmFyoB8YTfBsSEsbG6p9nQehKEogmVzKk781DmYEPf7jE4pCL",
  "key22": "4E8eqJDdcZGsunDm1dQFfvUeXk1AWAxxAQTvHcdG48PjRXNS51NNx1SPRnjdbkLH6UZnS9t1FDrSboNaL2kAwz37",
  "key23": "7FiF7oC3HJq7Cesg5Cr5xfTVdAAbyuXpFzFpeYUj57W9rTia73JpfPcWc8vTVy9XEZXQUfnYyHrm9qZUqH3iMvt",
  "key24": "7WWwo3uQtNN1qLxu9eBscJpvRf6zZEoF8dGru6HxC3rZkTL7Q6e71BQRDdjaukqLHcwbx4L37vXtPR4hXKjSc25",
  "key25": "349sKi8PJZ1zPGY9tx9PTqzsSgktW8DjCN9XgDqMzHUtdj4raKrBz4haCAUrdnQUhYuh3ey82Kki7A7Rrim4ajQU",
  "key26": "eWPKSFnZj9Dmf4rvHddihsjbHv8ygqiELrYWHVEGeofKBtHySM3b5zg2G4zGxURirdvFLje1kEqWhkcdmRS3fNb",
  "key27": "VBgobYquE13JWGeeTGXznsWqmXdPECHhqZhSgYrfiAzvTpjFyuHKU9CTMsHYwEHXyXgkBWZ6RgpUnubAou84ww1",
  "key28": "61JLvpHVourFdniuUujrMLaHoJq3uxYuAjAudSh5uoMHwhWMzAQQ54a5Ja2NXtg3W3BkhyN7Lm6ucjQ8mj7vhdjp",
  "key29": "4vFCPTxpWsSmBohrosmMGTJMTHT57QP7ufNHhuWcB7uZJ2tmPDHi6EHjBqci1BA9B4EEw4S6PHmvQRxoTKAduP89",
  "key30": "49oYweESdvtWPcVvjuaeVumEGb4USZx9gHG5otu5bzXJHywBeChsM5iFfqp9JgrYGD6NvF6Mf37kaGn8VqgjzrtJ",
  "key31": "4Qp8APPVSsLiw6eo75uksUrGUeVMt13FvuqYuyC9ubSzy8aBebWNtzgrQ75duKikToKhouqsu8u3N6X2efpfF83G",
  "key32": "QjekHqSV9W8nqezHXhTjSS1TDqyGJx82jFJ4UKEGx7yjaJAFzB3d9PQB3qWPbzrGPEFw6A7ecCNmcYfi8ySukME",
  "key33": "38ttfvJgkvNx4CJTXaQmSVH3qaCrLyBFSfmgn6ZSULvxdpMm5YbDE4p6SVvfViLx7WSsfv1VVDQWT9iiDwWAeb5o",
  "key34": "3TgRYMBjHdGMwNipMXLtFbY3DAtcZmgR4BqaehmVmfzHTythDikN24ijCeSa5NCA75GuhnerZaeHr1U3QdNmfA9d",
  "key35": "3Q3bBBCKvyGUbGiWkmbriUMYjwBTSxCH5bq9Jv9i2qFrFxbRbFACQkRsf5onWQo1JkvYTitnKoqfS1bwmG4zAie1",
  "key36": "5JerRJoM53sGGYf91oswMhWqKvf5UK2ewRNrqKLp6N5J7VzpD89izRrxbzsHMBCVf1YQFSU8FneNU13UKfiMJUN6",
  "key37": "353GUq81b72Fd4KTrkqwAjxSBGSBRKQf9GCUHhDmTxn4u7rddo6owZw6RZbQtV5V8ohS8fejQw6nBLhuGXLCFU1K",
  "key38": "5nuFfiKmJzJYKiGrAH75uBV1sE7DAqhvMCeuUmHHRW3Y7UTwc79kBX5LVpzRqFLnVG7NfjSB6kAXKxaiVM5ottUk",
  "key39": "5Vh7U2YmEGw5QUpD8rSLWHBHNJSaSczQaP1iy95uqm7KYjGr5ZefGwRZKqN8LjKz6mZ8Tc6jrg4aK8uHzwRoXtRE"
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
