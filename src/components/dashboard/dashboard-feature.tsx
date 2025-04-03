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
    "5RY44xqQsNBVhqRCYh4dd43ZQe7ETwr9wrwzK49ipcdusvRQ2jyoski7Pc2mcB3rzdsuh3gGamXoBvf75J9246c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEKaTLM4zF6hZq1ggst2nEdhytmJkQiZPFch4XjRSuNheqHVqxGULwP7chDBEYX5N1vGjGCxMorkpaZCS9i1pJ6",
  "key1": "29oDfT11USrnKcC3NqgqrMMvCgfA42r4ZqnfDhcH2m89zaYJLPGwv1PXmNTeWVF4DP3CjDJ1Bnepq8tDTVggt4JW",
  "key2": "2f695skmeEzS9awn4J81XZ37fZxRWqmsXqHYWzBvNiVGbg5ddyKRW3a4E1xxLqd9C75Vzoub6xM2EsUmw4YJSgm7",
  "key3": "2XVibDuq9fLzvw45Yb3PYgtTzpVrT9KBbgy4RNyUtpkjSFAfVtjibGwiR9D6c8mkMi6DF4zmXx8RHr1e8ayR4Vfs",
  "key4": "5NMbq6Hp5hdctxjPzJjHZBk1TiqGrESFBhZgBHeLCJpCyfXWKbmT1YVysaPwA1UmqfSMGX3g8afvDmPap1EeH49X",
  "key5": "5McGiwb5xhXh28i4u2yX5mqXAtfXf84ZipSrd8fPVzbjLsPKP1yzLjoiQPVkgUJCywy17yCGDxbi1vvhsr6eLNoi",
  "key6": "4rqQVjUjSukb3v9CJNEWWLBohaDuKzXRYtZ35svTprot78uX95vKvw18gWSBb8CF4pF42CUFVHwftbHqUgP6ZVhk",
  "key7": "4YkrhBz8EBYD6BudyPbVdm6LbFNyPNm29ZibsDCWN2i45ySMzE9334paWqXLiQAegBbtmY6Cd1aNvSiK5r6aB76J",
  "key8": "4EL8aNQJHydakc1cL3Y59f5LjZwXj53Rumq2bsMqjCfRCKNKSA7JKvuQ3dvv1dRo5An8AXryZyqAY1XxbV7KyXy2",
  "key9": "2YPLLK4RCRo9Q47fGgMeZWeWtvkTLpbrFUm7b46gya2pYGEBLAoqajbKXo3z8PHAnDTayvCSjz5bWKq6C3MHRd9D",
  "key10": "5CLoTUS8jGczrkJmSu12ikm4FWhK5yuwA127577PdZWWE4kjRKagD1gb8i6bbPeLZGP8xQm9TtLtwDbcGm7mdqih",
  "key11": "ykAFXGeeYmPkZebDn22NZ9i8GAat8aAUAtBZdQPh21TMyKUZbD67MPveLBKfBLSfVeQuCdLmBYGv23xGFqZNFiW",
  "key12": "VBwvUSCQyKDjm6SEEHgfFejXEyERojbczaMCUy9VRJavvyb2eUB7Sjs5T797rpB2Et5wKijx3A2Z6MGZjJ8aGzX",
  "key13": "5GkUBtGCGVQTbexTT5pAvsMGgh8hLhGziZNzFMYhA6NqXdotx4SvXYvtgfbdKhkUArTYykaKeKwB5mv4hMB6uB7E",
  "key14": "3jXQLTTxkUTxMpPLLBK7BrtzJh5vKui7VPNuYJ2YZE74eURWtVACr42FRDMc7YD8q8c4tuMhwDnNQsj9GqTrkFVG",
  "key15": "4epQ5bTLsTn8dPiiq74RFb4XqvHxGSFZANDqJwm18criqYFTzZMD9Du3LdZfiUg3LzmoM1C7y7iA6wNbe2hA1Yvj",
  "key16": "5f9yzLjYLjrM7MKrx1fLDUuPDvZFKudXmMD17w5iJCBspJqU8czeoiYMtbyiZLqeQyQbhMwy4SFfhquTvAChGkC7",
  "key17": "2sDqQduo1HDGZFMaRv9pB4nmshH8EhkonVg1piPFcbP4JoTMkVT9v92VUsREJcAmxYbCqozxj93bwa8ZrBcKnPgQ",
  "key18": "2SNiw9YcWVnhsxNiefbwvPwGeL76NJx9JhsA4SDs5SkrZdHPTycUYfJky8KwK9pn2UyJf5gm665a9t7wuHXfS4tM",
  "key19": "2DYdDtYasb7dNi5aQFbevGCCEmHxmjBuN6gqYbhaYkofHxaQLRSyHUeFRMcZqLBhQJQvixZrYp9aatqrn2m8SfL7",
  "key20": "63kkqUbdVWjVxrnTyZDFVUYFM864VFz4CxUzqu5TkyV95DfHUZLCUJmbfSAzoV7p4X8g7Ci4j7aynFysduEkQ3Xz",
  "key21": "4Mb9vNXjpyTf4fA5i3MRH5A2JEqeanN1TtVAbMJEJVx8ZJKGUSjAEhQJdUsXDiEex9MxDpP6UUe1HWgF8oh6wBes",
  "key22": "2w6641NKxUe7uaZ8yN1WLWDuSRaCq8Zj1ZYHNh9tzybfALUeLdmRNJ62sWdmvHFX5LKsbGMSbn41GAtEMgmv3GzD",
  "key23": "2Yxfmigwo52QW9AC3pHvuyMLmGgqR8r2JS7eVzcyfjm5NMUfM5mXEzWmuUXn3BYHdWBwNMfqyZvydWrfegU1U6j2",
  "key24": "3HoTPo9RxrTVvhhb2JgNeYMaNTtSKkatsgbkr4sM4zyZGEECNzpKSNPJMiShM7FSsekNJQzwr6bCJ1KpfCUcS8bi",
  "key25": "3bW4JpX9BZGfyjzewajEsFWMmD7Bz1W3YDE2tfKzzHUoopnZXSSHA5qLG5dYKEV4ChHgvycaxZJPbhSEd9JkM89P",
  "key26": "yNXSgfR94LzDCJ5KqFcZvp2x7iriUSwEnx166oGCXsFSWJYtyP43nNAe4Wbge2iUz2BZK1GQ1X8bDCb6y74jfUc",
  "key27": "G94Mx8sPWWJwtzoctYSYv3HwA4ot4CdJwAznCpw5jBcRn5Squf5J2qgK3wEcdkeW8FyUk3uxEnZ46KXKWgWhjMV",
  "key28": "3ByaFuVoNyAWYmF1JGaC9VM5GbgjwyahmcfmCbwLxYYfUhovDLvxFWNZb7MJbswmzkq43YvUdQ4Bjjs5GFDwmLtp",
  "key29": "5EYSwA4Hib82mCrVWKrkUCLGJssNuGwYRuXNHdTWQk5d3u1VQm6XBgFuXi9yLpggAd7v2YesPs6zrwpmPtVxEmg6",
  "key30": "32Ezw9NxVSz12tXL3mhhqLTK9NdqfVaR3wre9PhU31zvLWVBKUTJ838NuRadkmUFA1cdgz7wn6jyHp3KeLxDsNZ5",
  "key31": "2Rbdyxq2yzJAncuE14sfCsQkQAPq45Nwh6RYRpmBVkYEKov65zHxfirQHXYuDTFomgZ28FMdMomcFXian8pkJrMu",
  "key32": "3hUrRA7dUdMSYtjyCbnqrdYiRgKtTGvXXFXj4nEuxbnbkPh3Tfu2QYCfUViQVJ3jRUi6ZEE5Q3Sd5RMr1rmeAQoA",
  "key33": "5vMrRisvextBGBRphy6MAQuRLmU2XKgEMnJaAnHV33KhqNY9Lh2bFH72dAZNb9MrVnnJVK9mBuixnzAHkXBe4FKY",
  "key34": "3NfdHqTrBPRHwRSzH1Cz1DNve1sykw8CVt2LBgTNjzZLrD9MNdGdGwvXTwPp5jXz2nVBLAEygfSJom97hDbLCqw7",
  "key35": "2yUdMfc3ugD3F4UoogZHW9ZyjC2xWwvYdyizPwhon3et7ciBopDgTAT7myizthZmEd56aRzWEka32qwvuPk8qGL1",
  "key36": "5NVxrgZcK83g3NDHcYDLKPds1WyJrBTWmRqz11uoXZQixeVSDkNZmw4CLNPgFL1vKUfs1BSfzcAJNcUNYwcoYhh7",
  "key37": "w5vqouPzDL75Mfj5eUJE4GxKgZFoxazXMSnrFYbkEVw5s4EaSDjfE8tbfv5oMgCLnT1bu3EttZukJXerBmDkQQH",
  "key38": "6UyUjpe9VQwStqhyLUT2QpowF6QuUxYozyv3cb6Cnyr7THMzJ1ACbyFAyZnnSwpd9hvJjJg6RA72CkB9jCUPdpj",
  "key39": "48r3dX1mY5ZWWftGvJrjrzdRBgpSfxsGHh7B7t7Ue8jzXCm1xX6vkRqhFyQ6xwSXGaXVKkzP5HLb5hoL6WHS2MdV",
  "key40": "2GbGmRrWvzUXbKhDECEeTRtnxhpxnAv4F18nJ731UnKZ5jypVJCR5NRnCz254RKdfFWZzcR2VSu9qvA5qJzADeyr"
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
