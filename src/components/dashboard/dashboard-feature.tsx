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
    "2UwdH7MfbiUF3d5XzVxnC7vWmQwn7DnrxDem9mZ7PREtBEGGbEVp8Hpf2SyP67BrwFvK8x2oN1kiAYT1a2i6ZSug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2zjsMPvPjMQfUuJQ5GUYZ5AFg53nPxrAjJWgBHa44CJ5uRbTaUUqEEjyNnpnsX7tgJHScwLCaKRchv3fkw2DoF",
  "key1": "41xHvaRhVgsMoqFBgLAHD4SG5c5gkY8ZtSXCKyZE6m6kPuFXsGm66shW6tXh7989AfxLum4K93q2zYHZYW9yxe7C",
  "key2": "2P1HFLF6W5dFaPr5DdKJYMTYnyn4JbvqGxLu3JyEfvabC3DoF6kFWRbRtmSLTxqQoSmBPo7WQxxxRMv37iTw5omL",
  "key3": "5UyambvLxu4sWAaTa9VQ5ZfELpoCfGC7GAWSgS34xUDXFH3PkPLyc1aLUj6eGdob7p6GVnLpi7m9DRWSdFnuYuJ6",
  "key4": "4iFkYqhGggTqeDegNF9ZeBQ3EgRLvQzF8nGG4xNk92MJALzbeRvuBmpaXrFEHFq234pVq1HGHXfLwsT9DgtFizWq",
  "key5": "2rV4PkDbQbEfN1U5acorE4s3pohV6YPaqjDonR8PJKTUKzcF53C5gTG6t291cReN1ivwDc4mUSTViJkDGxPJjzac",
  "key6": "5xuNMWPk171MtAzH3keQ6FyxuntEuzSWCctdQ8MViAehf3PaCsQiHrv4gUEQFaGqq5nLrpsKjMeMTN9YPYWgkRqH",
  "key7": "4xg7WizQirHNZ1zRaq2aufKeRwiYUP7j51qvWMSUJe296c2iFRvnmE9RvwooUURFxPosVAYZb2VgUYdYEA15WWQ5",
  "key8": "4PdbJa4hy4ezZVuQGNKiEMhpyaSKDeFirdDhaHTPqFiVZjWvt2EfGDAXxkjiXyZjXVdKVU3PaLVvtYdHhoVpPPSQ",
  "key9": "3rcTTSoZwEawaaAbndypYg9Pd31owxiPxahm3HSQpdoDW9eqvBEeajjjHBjDwLLcFaDJSikiZwJDt9tAfKg8LaCN",
  "key10": "4xr6kKBnX55ht4b1BJEyVNK68sYaZMfibMxR7D9wLvgw7jaWzL21987kCjVyLbJxCPSPSvrCrdRJHYXbZbfKa9SH",
  "key11": "xezdkotb29qF8RdU7Ly6FSykcGgBxXxc31X3pMzcDEzSZeP4aEu7AtW8kGTh1ZgHXH9pdig4Vyu2pjav53dLtJn",
  "key12": "Nvg4V5bsFb7pm7soMSwiEgrgrn3RtL5Aod73iJcQ63noQXdkf1guDS6gUXe3NLgTi1f8ioQ7VaxsucnABbTkQnE",
  "key13": "4xKPwqYKxQDQbhhg2m5Fkup32b5EN5xq3gHaZD1KnVS8csovqnaP7SVibEuSJizyMwRStugtnJ4SdCPRF9opRFV3",
  "key14": "3gSK3rCWmQNKZieWk9qz1X3PpuhufgVUFkXow3URV5J3wv1zDkhNpSEs55TZ2SvhQUsFDeaJP34BPstABvNS7Hz7",
  "key15": "31cLNLg3B6VKRv1FcspQiuMLVzSRx5YnFGsPfh3FBAxaYXm83HfddipGLr7HWHJGVLiWXgzksS8RL4DVqeitZso2",
  "key16": "41jz2JfRMG3SMVTR9g2gkgHk1qTMNtDiwRGiZQC6E68odrzFEU7QSMcTSpT1WZvBHGejPGzGwyaBXaVk15oEyL6m",
  "key17": "4ghJpECSDSCDRzKXUCVCMNSK4nXDCwEDmeRwRuMAnEYSRsRX64yxuV2gvW66MAzsCx85idFyYxd2dPgCdiLUUrfS",
  "key18": "65nymmTukGFC3kxqw4WW5kqQV3t5c8c2ndoe8jSnGj1YemjPxcGStMdgqvAHk5YW3HWdfPWxDwTGkTb4U8pRZgBg",
  "key19": "UF52svKPfQbtM9DCv9gcAnv8nLuromjyABru8mQXJqhCQ7CKFtJtEEDYXED6diCzpLofXXqmeQFK3t4eN25qjHC",
  "key20": "2eP41PG4PnpRXeKshc7CjF1WkqGvawzGdpLWCs3ehyAx1AiysKXSzeE1fT3ff8TDX9vpnAxTTYsDonBAXTnj12ft",
  "key21": "3Jkdgh4eVg3KGACAw2H8iqEaFxNUFKjqBndzVWuF7Ze1yRNnNDqTJwdGq7XmKWFuvYvYYAV9P6RSKbGia4s2Q3sF",
  "key22": "2aHB8UAVXnegqGpYFcCBvyWCrzd3pUzau82MdRxnXdYwME1bhkFaMTCPM1rYQ2HWxVD4G9E2fJsUZfKxTJozwXAi",
  "key23": "2HPtn44wAry8SwzCauTLqDeePNN4RGwMxitekpHn52JeRXn4GzzTPvzemXiYB3Rc7oamH83D5BYiu7yXtQZWDgPh",
  "key24": "q8vpw3njxa89ohU4rE2LShLed2UE6MDLGx9wPKMPmHgqCgwLjR5JZ6rBgKxU4uRSitwnWzhC95APJwfgeYw3b9Q",
  "key25": "xCE6bXLeJi5AtSuTNmiPH6WoxSJ5BKGR3WrCCpU7MNVVq1GR2QvL42dtUKmXq9aWGPsTL1vY4pjNermEu6D2o4K",
  "key26": "2DorUYwqyvNwrCFdN8dLMgpEuH8Cf4JBxzhJCkFF12Y6jZjnuiVyUeyXxiK1eHGn6h8rfR5QYRJBQfc5MCnKyNa2",
  "key27": "4XpRzSE4rVF5eDjrmnPQEswxgs3Su5gZ6P4dQhCWmpBAhhgQkXQ35E1347C2CZ3uZneMyoEVG6wuvLHCDMRdpbTJ",
  "key28": "5JPDq1U9UZ1n6gqSLrDbsuctJQUpe3QdfjAKnx1okMHqtpzitkM3MLdDE9zqCzo4owpPicHNBDDwxnNFeN8MLcyW",
  "key29": "4cvsqkDdZ6UjepLkkEPAR5zv67VHoeaxinjrG4L4y5PQ7d3XWjxTWrvWftvMJj7bTuL3bvfJKaR65LdJ4Um1Qfqm",
  "key30": "4ojuDHLVJyu2tvb1hsDzn2CAMiysVJiXJTq6KCJDzgyZCUhhu4pbmz9QdEzHGF7AdxER7jQ3xRZpWbMhFzcAXJk2",
  "key31": "88ynr17Y5JsuJeZszs37NLqrCmpFTfukF9DnryidX1BfX94rbGgXEfCcpExerqtPhCj3piZX2k8jWDctZfuNSY2",
  "key32": "5Fg2Q7qAhNMmNdVhxB7kafEKzwhefTuhioAHLoBU2iPLa4LXByRkZtyGBEMJNmxNFa1e3Lpy1vnyPFeNmj6cLyWm",
  "key33": "2JcRKMV1J3iqqLzo9vRDTukQ61uNj5kxtYyMWKA4aWC2NgKXWAwBqifbXbS4zPtdVNzZbmqbUrsKMDwevvyqWM6i",
  "key34": "28tdYPtcttcEJoh78tnuPHXjc5bU9P6PnCYUWFiHWVepjd5xuUW9oACDyLWWSsSB7KRADfHk2bNFCUGCdRoGKpyR",
  "key35": "3GzVMWqdLq7FmWyU5A3Vkh5dBsi7yspzmKFsrmM7gQNc9s9hreZdeoShyaPHbscExfFbQ3spF3R1qmutSthWJqAX",
  "key36": "5rJtXJzv8yV6WJTB7rh8Gs3yEKAauTxvTqcPTgiqTa5KFi7zu7rjk6HoVrsKFcexuLmvRJ71tB4ejeMju95uGQYX",
  "key37": "3nsdbdhbPwLUbECeounEbPNoHCeqV49CcD7W9BAVM6WoEkD4utrx6pNcuMWC9APauHdb62V7AZRtZgj8jkBXt1xc",
  "key38": "33RxMMjVobtb93dbFiKDKrQEPDSRvYKY3oG6jjwLjzWTu4YunCVNUZnqK7bTjM1uC2N6B6Tn2M1WmcwWQLVfBNCs",
  "key39": "64Vto2ZaNdsoSWXQLC72nUcxu23dJcNyJdknmkT59ijbjD8zn5WvLB6cNpbwgSzxzFUy2XzkY9ZxDKZ99yFfzgSU",
  "key40": "2PfiRLiUBa67Fx5hTzbSDpKaWPxc7bz9qqCCNL5JoYHcavb9hyaic7aeqEWsUZm5bv72hzaUpzgq6dMcY3FX3zwX",
  "key41": "2km5spXi2ULTA2hUuf2FihA7BJZX78XMTo9rzKTVzFUJ4UVMEDNh5fvvv3Acf4UXPJ5k2o1RsPPTnuJ2cekKvHrk",
  "key42": "57YUd95y1rMi2uDv4zdbpDvoaJpbELSS6bSiqc87Y73PXxLjJNK7CAbPGZswEhAqz9uVPbDpwFydH5w6b8PxnARp",
  "key43": "2LFxAbL7Q5rQKgaV42frvcxF3jt1LCvtWquN95CbS82UBpsRocRbF5Lu2uCYxCUh9pX8vtttC7xtGVbzPyM82kJo",
  "key44": "257u555EnoZvZohxwRHnJpYxRyKcLoD8ak3A3VysWT8VwSQ6fhAQWT7DAWuusi2fa3fX1mRe4Pvr6xhdcxvRLZXA",
  "key45": "Ji66SX8irZTaTxZDRXYNkQfc6mQkpJNpzpB2Cq1EJFhEzZVoWobuPqBLTQkG3KB83HDjWxJFMmHi4h48gXX8BV7",
  "key46": "2q51dSPnebSM9Yd3BfnYAeKMSepchf7g9gursg8yzVUrCqYc885EpVawE3HofnH51uyeofy3UtGmSFmKqQfjXC8P",
  "key47": "3jaq19kT97V8GSwrs7ScFBuUorzN8a73CSutNSQmdknEZmuLc3bE8tvBh8Zyu4KpeSezpgEMzSSyBKN58xZqNmzt",
  "key48": "igX8w4apFP1Yg2M6gMcjBDmGjx5DzJfzmWaNnEKMkxZGt6VCCqWeHVYTZtiGd4ExijfNEYmwiW6fEKUdXmdqwxe",
  "key49": "ErPCKdsqqoiHYZJ3HV6cCeFBWpJdRkZyvLVhGqvTT7bBGJcaEHrNibhL9czvHSmVZ1GizTEtRzVZ5inCVSuAEsi"
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
