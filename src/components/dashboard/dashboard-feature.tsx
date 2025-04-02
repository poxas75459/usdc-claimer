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
    "2WFqr8rCfmbKvVXov9Uwr3iXnpmXbXyPJMg7fQdMSr86fRLF8qPHRH2faTBJq59ujdZagUkYjPuNaTh5arYhXrCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFSBdL1X95b7eXNywXTUv9kRMoQMtbhFzrz8PxW27QYveomPynXgCXnieJ6RtATk6hSWaHfSN9ZXtebgwTY8wWe",
  "key1": "SHQeSoyJnLEJR75UyBnb7NdcvSM4RDshVuYTE18D93UZkq2VHDYySjMzze7oBjPxtSiwanexo1TukTPxLq3cd5E",
  "key2": "3BHQnXYg7KxPMLq4oTbwkkM86FYWfE24z71wqcczyGrrSYeAQ4NKW6RFLRo1XWsnFWW2Vqr6SZP8KtZw8pE32fpM",
  "key3": "2KKHxYXCtmNWEdahqq3KkfFLahKBvymu9YaASAWc8JGCwp2RiABUYUBcGjWaDtzWXo1YKLN5DrhbvbLLfznVdrv2",
  "key4": "3Ae9Eq1knA9QT8dWkNruGEMRL34N7iAkmYx4N788ZJw2DUhDgD2QoCEcAZUFKgCAfei7hcnJ29CmvD8TXtLsu3kx",
  "key5": "3z4GYjccq3DGGo3Ye8jyokZKijNk9zk9o6tXnuniZXadLri6qupuRsH4cALpWBoxm7BxNXfpiFy1noNb7XXztud3",
  "key6": "Q4s4HxSkNBCx3DMJvxNNizRZFgcJMtfQgSY5RLYyJhLkdgvoX3Hb6hoPGfXe7koNUG6jiWQPXMXFMn5pcf7ihFB",
  "key7": "ZDUT8bAi8hx5YcAkmyq6YesVAokhebNWYCkNCcZvEFu4hnBJHz28Hp63k7K5bswdwsAqAL1M4NnR2nofdgQr2qL",
  "key8": "3MwXmNMdFhqsGowwqQv11rB3e2zQYMLqqVjozY9zyFdxY4xc6Nfqrh9VudzB712c7oybttbBai5LgugaQ3hbcsS8",
  "key9": "5iUBGNhi9iqMTnVY9aMsMGzdZ5mJJXT3g6qxqe1f8LqdLeabXdqD8eUftqadRNPGbHPVLYw3hJp4qkYXd44zrDNE",
  "key10": "5bQqKGQjaQtLRkSoGrmdgZb4gudunvwvPrLVpsUNdnXFb7XFe5BeC97WyNiCh9523vTy4MjjnJTmCYdBd1R1bxRc",
  "key11": "3MjY6iP4EmrAjU8jufidVV6kLSafyKWnJcsXkQRQZ8MWfXdCALc8QYwuNQ4bbGs2vduBRobaVvmmzMtpAP5Jgy6e",
  "key12": "PCL828bxcz2NNmaRKtyBqwJSAWHxXuRtqdPLL7qhMUdyLH2pAScXmjC3e8CmJLM2PNw2XieWKHpuHJopwp6X5jF",
  "key13": "2J1cyefaYRLYV5yMpSaamd6KdaTCZzBjAC5nYGis548TDgAhct8o58sR9xDsQ9M66QRvgsxNLYNkevKZY9cTHiNb",
  "key14": "3Cq1WqXxWLHRLWeesipZHB39pDFqWq1U1V57atfiKDgWCWXAKZvTJVzapsJPgPAnyZRxLodcrfxfrYMWx6SPiFcr",
  "key15": "3DHCPEmixaCEMbVGWDQGNBaCuqHfbsRbKixpp5V6nLApvjQo9Y4Lv33fJNYF127j3G9oYNYEqErTUCxbL1v7mTF",
  "key16": "56dV8fnny68xMSd5x23urKWMVfZByaQgTFgRpUMP54SyqGjqo4BDUPXuYQfVdgqArmB9xMwEfA7wVd5y2PtDDUiM",
  "key17": "3uD2brruhBTptUunRsv3aqTM9zwRuGmDMag2MePTriWma57VG8qjFV9Gh8CbSwTAoxf9MuTwF1dxiPUWWWKLoutK",
  "key18": "3xWdCJozog9f8F6wHzqvqyEkNvu4e93hMBobpbFEYB5v9qfwdUuFHBkX5HdYbMSfWC1UqKiPXN2bt6cn6RL6gm4d",
  "key19": "2Sr9tR4iDPanK5M34uejvPbSbbG3yxMdAnTKiE3tvadZfuxPdyKcgxTUwxwqRceTkSRaBUn5vBNaKaKYu7om5cog",
  "key20": "121EyW15YPa2uY2h37pCAi5Rbgp9s1g9PvhJ2gmhJ9PZzNJkXtqPFA3uTyJnjEnAKDkafLsCCCQVCzwZ5Mt54yMj",
  "key21": "4v7Tyv7u2wcSFfd7ZXM2bZ1kYnDjzZRGjA8WBA76p8BxHQKAVVZQLzYPv4aBxz6eMdgVxeJNNjBBYn35ZB51QWzm",
  "key22": "42Giq75ZJjfvNayfhcGTQEid432pLK8ur79nDnKVwfQpZNfVGmZ99mWCPksVuBsAnd3r7AcHC8oyFPzDJVvap16s",
  "key23": "4h74tiBN6uF95PfCX7MTuVW1y85rXE4EWCfohSpUtUBjxGsp97JqcTc8iDQL5GEWSfeT86RP214WUrcfMQiK7USK",
  "key24": "54Viyqf1aTozqje73ndRSA7s3vy1W5YZJQiCywwWTNr4fAutfJ6fY6TitQgUmbR5LwwyBMF9fLFwPUuiHQzyiqzw",
  "key25": "aTchc3uYVnxNr7CweUrxJpGj5Hwudt9ToZZk7GCz2NW4hGjtAJjSowTeFk2p6FgHRpsFAD25sdApKWjc41hW4NS",
  "key26": "67B1Go4N26iUEhgzr8aq45tNexnrdwZq6ABq7XeU7cQqzXnvSvfe8oB6FEAgnEQuUrzwdZxFVwmrMrGT4SNCpufJ",
  "key27": "LPaENQ1eL68P6JZV5czcK66y6VqLUsQt2DeE3UzZwxMm9T2oNDMLiGDfHtHtn4M2QFvuTtJjcxtUm5Jc4S7E1ER",
  "key28": "2tj77veLQ5izQDvSdsZLU2mSxqQJ5McB5WYzwqd75vnVU2fcUMDXeCBvWSFnQyJBs9Jo2B31G6hXZLgzbqbPzXpm",
  "key29": "2t1cF1Gq9CzND5ytAZT1nNf41WNCfeGtUEu6HGCvMvBQH3xUWDf33x9KpXQgedrRss7NJ3MrRpW1xk51M7BhSL9w",
  "key30": "4uWWcZQFUzSUySaojwS9xJtrA3Jq7Lbv49LPzcm9JkXhqna1pPgRJcucpK2k8nbguMUBUYJS6RYVRscvEZ8qfBfz",
  "key31": "4L2Xvt1rE3pPVi3nBednUL9WMGzQdC5wXuSizxTGLCmaJ6bDAa4VtZrbkjWNys6fhxAeFwKJjhd2zVtHNFmyPG6n",
  "key32": "56C6AdkK5F9rkFx8czxhTzeYjC1Sy1f2eN9PbWmqaT9aqSCZxpdvWimSgjdnH8hKdVEWzY5H4RKSGLiv4LkuxqaE",
  "key33": "2gPXPE2U8HEwYt7cxDvHRoSXmy3jfrsQPVBgJ9rDZQZJa6moXJMvfghaUYft4A4oe8w3HMTDEaR8gAbC6SWiB7KN",
  "key34": "3S4wQcEHDznnLeTatFJMHjeo3DtYeEpXPC9L7QfJqqzwB9jZtfa7oyu4K54hkJZmUyNwjZysTWWbMbnEAW5mcZo",
  "key35": "2qkunuTLYYiyw9AJy8daWpt3nmZgzgqGQh4422QbrrgVPh3eXMbsWj1NixBJZ6WWLigqBtUfqXFY1HyPQMnpwXPT",
  "key36": "PYaP1qro16wjgCTV6oAHE1AaQUkjNwS5TN6ieZhu89LxkNyyaG4e3qtogrEBXRdbbbRCrxKe7UzJcVWT4CmWp6g",
  "key37": "3JHNKdkGpiLVDih9EnQLRrooeWA5bKtnQRj5H5A5XUn3E88vR8vydoKU8rj5ByEZuPhZ7BNfKqn6mSWoRVybTUrY",
  "key38": "4tbcgQvUUZ6SVLib9BhCVXL5YikpNJZv1YN99D6gvv1aBaT3HB7nCZ3hit22Zy8bg3LfS7Uy59FeZQeV6zxuVG1Z",
  "key39": "dudjTeFrwtuHSdGyYEesyzbTbTmusfQgSUwvb5AvjZ6Bico7XsP6o2uWU1vocVrFMqsMKCe3ap7iGRMaUSSaFM7",
  "key40": "33G9oBokp4RnnRjkLrJfS7tc7Fs5LWjddg9Bh6XxJmosSusEoPo8oavFd3feoemQqrvnRJRF2jUeZkiFiJ4wZdN9",
  "key41": "4kWa8PAuxvCNkvG3qK6oqYXgKqDX2GTJ7iPuUa7U5pyQJFq13r5PSiqsWFC7fN88imzyCSJX23n734iPF1cVAKv7",
  "key42": "62HdGUDB7v1QCnSvPz7pDaUF2Q6mMumKdz32PR6XiCXkC2NsEFgVEpPADH9GJ7cxJftR7EYuivndcaosDCmFaHED",
  "key43": "2qeU7R57HShZh5bmYoqb9y1aPqEhkR7rnLDrcCbnN9GzkcmmzsAB9ArEiPSNjk1iMnkhM9a3RT3wPnZNMZjMvgbX",
  "key44": "47SPa9FBLC8mJayugMz1Wio9ixWEiHCsziLTsydR4gXLrNtMLTDzTiWrSCjqiRQW45TpS7zSPM7oFz4sVDwuti46",
  "key45": "4BXBbgZE6gmDH2Hs2fnCfas5Fk8vGLSMg9cbeq63pvoj2MW73Mk8W9Rv8gFTLjFHzJkccS6VDwq3o8FNYvMFoXqF"
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
