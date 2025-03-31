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
    "2jChXxbcSKpbosGgpMKPqayLW4PWroAq7pF76hvpxoT8B6ZMfbF6PuEFCYRmDYhRyLqiBvLkweQVBhZzQUEeKmB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aWWKtMdKGLaJLSTd1MxKmNkVWSDvUjdG9S9o1PBM8vZm8kDjsvmmx7D5C65WtveCh56qySdqBLFoui42yDnHZt",
  "key1": "31cBEMiKWNMN8zrQpkQByrYa2gHLjK33VSVozQ5AX9RvnuStkbBKEQhCdxbCc2Nv77Pbsoj5ccQZQCcVEybAhVj7",
  "key2": "4X9P1E9NF9r3sspcdXjGrHDbYJ1eCJyzD7gCFd3Uh5qniK9Lc5kSznAxUvyXLC7pxk4eVtyXXybuvwhMcTo2zMj1",
  "key3": "42iy7qrgE4Tnb3sTVYVbBYKHCL9KnV84YxVReQcQsJPpUqS9rKshC7hpiRmERCUuSWERDTxzsgksUHnYzZ46Frbb",
  "key4": "3QHwJp7W3675XuusbPkG5G4aWsycaqzZpgBWKoW4AvsaRAhJkssX5zSq19x1F6FWLnBeUeCihkTrTdN8HgVbTWWc",
  "key5": "4meFbxkb2RAh7Ldwh2mnFDoGyD9TLmm8aG6DFoTYCXt6qiEiGfsHukN4s5VLSGUcUmnq77tUvfueoNaeQYxr97Y2",
  "key6": "256KiTsAwguQVjDo2bmNuG4EFGwr36CjmZaNx5FZKBDMCKGTToy9iV3jxKYdDYXdcVMoPYPYGzaiHeMR5axqKFfF",
  "key7": "kzEvZuD7s8rGiujtR96gGGEeUQFyqsTNBeRGWQTKBCfHKKK2Vpvmp1ypEXpJU6mgTWRBBKKPE43F3kfaUE7Nbvj",
  "key8": "3HY4rGTd8U7N6tqEEB9azVGjV541ihHBHb8Vr716gaTN3s6waEDe2mDwSm29GsjTSd68bujrWz2mxTK61jkZyoTC",
  "key9": "41wehYEX9sHyBUwjPNcJ71NMhGqmyGVkvZnUjkijHdrxpRdPusxAGwLZzsiA2BxSwXjhasneGiDXxqMEucK1hMWL",
  "key10": "2RcCjdgR7QjCC1NyEJfQM3mhqBWDXDSKZu6ccLPVTdM5z46ucM1bcQ9pPpeMwNRR37o5svTBrDByMxR82ua2WXe6",
  "key11": "4bMsaeCd6Y8NaCqsmgLXAG1VYrvQvQq8f95EKefV1qt1AqHKj7XbVoZTF9Hz6uVg1sGtq1r1DTPaRjK6XS7yxvye",
  "key12": "rgVgtgLDkiPQZYoM8sNVJaxz4r2gbmmdhqL91kv47kFx3W54gAp7wqSge2aMqT8nvn7bic5P79wBXcchJEec2cf",
  "key13": "3VJYCpc55Hm4cGwEKeWacNB2JDrfJDzHMmuURBqB1CjHBB7fhsBvnraBf2NYYTLp3jaENq26eBjYjrgo5RnjnFuK",
  "key14": "5vYjDwRDwtBzkTm36aVjad9eb7toQN1bDYK46hfMtPcK5eV9Un8tuCoZkucwT6ApzsiAiCQWGmgZxBTB7wVuEWAL",
  "key15": "48tgwGCKo4HZc7oMw4jCs6KLNwTSf4A3eLBEUivsc31hgp3KunDvm4CmTA5gpLAf91J6LKwMhDZU7VjjY9SS4YCJ",
  "key16": "5tVrAUjLDMuQSKqLecbxFD5K6TzWYenLHozzFMjMaUSp2NTGKDg6RCE8oDvCygwjP4kSAHWch1Tapy4w7vKX8nhp",
  "key17": "5URW65dBUvPrwt7tg7hx4HiqHJDHDvR6xUYcwYfMjSTupj7tSND3ixPRev8J2Ljjge8i7YntJggQZZKqcoM7Xev1",
  "key18": "qHkbxV2tLnAZXBa1i4q5iDFwB9m45Uawyq9JXrGCHX6NrvTRbihnEQvJoK4GwTnut8NWvWcaBwk59T7jedFBRvj",
  "key19": "5DuJwyf9L1ZeFkXqmmsr7jW7b6edpBo2pasKcpbJ72PPu6C6fQ6TKRAxCWxLM4ocyaFAKngyweGYrgHNS1Q84GK9",
  "key20": "514bXxo4kVvooAUMHn1SHqEHf1TzNNCdnPTfzp8zGdnhWYm7ter3SN1o5PvjbNT2QK4pe2YQqegAgB6ZAArh6rKk",
  "key21": "3exaB2ZhoE4ju4KysTZxoEZc1uEctjbQhpmxH3ZeCcZJkeyM3ftNBJRsZi6eQsMSbfXPS3fiLVZK4DqrxWaZfgSK",
  "key22": "RMV2JTQTqKGE4XkPWasWFVL4E5X3a5PLnnvx3XABuQQnUjBAqBUBHpWDPV8Jktgdcdx5nTzk81rQCHAMz5tawnt",
  "key23": "4mmGwaAKNTpwki2YW6AEDigBWQz1RN7YrMy6DHuXQhNhheKSshBvah338gQQVvnsF4dHtAmByFg2CU9UANx12xRv",
  "key24": "3ppy7wVSEPHnYVvw7JqTvyfyn9fQnNQFhxvzdjtnqRGZaf1YJTk3qc8MAA5gk2PGtNbz8FGs45s5QzY9HuMSAvgA",
  "key25": "5GEeq2iCKBuYoMbRJcqs2X6idnaUboM9XguJmxzrrivD8pbrRNFsSJrjtCAQK5BdZAYXWkRFe7cTLFoHQdDXQysF",
  "key26": "4MP1YL69JEgr3zYU1g2bmKoYTAn26meNX3KzhP3u2kxbz57Fz9ckPzr2M289NDthDpCRFMfm76HqZBDGAiWJSRRx",
  "key27": "2j6cw32BP9QXbxVaLwbmFBEyPvH4Amygi3uFbRoEFpBHvK4fwJJnPTJGh7N6wAk6D8fg1o5BoHkXNxez52EEi79n",
  "key28": "nPnzmuu1LPhaUsQpfzJtyDkXq9hgVePwjd1GiWDN4QMYWRocfRTovUJD9K43r8pp2GkwRmidugA3UTAfmn7xZ1n",
  "key29": "3GkuKqxVX3cGZYJXMySP64tFnXmiTfoYrcBospQszuSmjqXsiijbgJLvfBRsNpetJkEVeD3EgxUNGhdjnfwyjf3A",
  "key30": "22Z3q4rgzMmWK67VzFcLBBZ9x2ti2926vBb6Wis7ts2fSpke3GRKLKa9wBEMibsLsxCk2vvyfvPYU7SxkeA85HRC",
  "key31": "5puFLtbAbdcH7RAiAJ8hA4ojQE6kzWvewTh6DPMT3jabJ8kAF1154WRyx2C9mWq2U7BJnSzn5ysoi8dv1h72HKSd",
  "key32": "7qP2j5FeULcY9R2q8gJoTbtB6VeMocGqEARuUPhwMBahcr8NrXhN1BBnRLAjwJKwfoUeoQr3CVySTbViEuPfwVb",
  "key33": "61NqTAuqEbdcFbrXEDeX3EUMeg2J1MmMpzLYE66XHUuqTd3VCA2jsdBrp6DnpZWaAcfY1z5TN8vrgqRb7Xk9Z67A",
  "key34": "3E4QQfPLvHAEYGM82RiYyk9V99zofn9ryMvvrSTbXYTtfX8EyPz4xMs8oNYFtyZKHddxMY7UR9vzrd6S3C1Rm2gU",
  "key35": "hpx8RcW3fubqBdFyznRLqKCYQCCWfkbZCzpnnAU4PUgaQisJGdMg4MPpte1N6TcVZyG7s633kHRitdu16Wp2ycB",
  "key36": "5dVFCJg1fQgPJwbQTViU6NWomzC7UDZA4WZpPEvRyQTqchAazgXuH9XZryGLsSwJHF2U7M1rbWRJHdP3NSU4YDEQ",
  "key37": "3XQtLnX9JatndcBtBCn6vFsnW1qKzUdRshB7DZz2gdsVanBy5wxsa2ZrYXbx5DxKhXqL5ybHmQLL1Y4HM2d9sX5h",
  "key38": "65zyQwqy7oJu6861Eyhbye7DsuTaNcGLMb1P1LkpvDbmwq2UGp2ihyJvv4z1GQHDmi9crXX4SYd2gpXojtCUwCwv",
  "key39": "2dLYmNmYAJ8hAu5K3uDAcoFy4WyAaoE58jhZh8ccUbWWpY83AMaGSrQPCSfxcCb4ob1d9gB6sBXtcnak55kpkNk2",
  "key40": "5fLDS8RKScrtD783JJVpdto21MbrDbUwF9PSXAUtGPdkzfH97wJZ4bv1fAkpzzYU2sGxujHkWLGJmi3sGCjj6vzB",
  "key41": "57AHRdSmhRMR7diGT4L4XJPMe6qMHM1RXzyiC9aCMA9XBJVvc93WoJRW7R4veJkx4dqXrksDBQwRdmS5bNbNYs2m"
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
