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
    "3qcAF9mgMdKyC2Y63xbrz7Nz1mGq7AbqMyb2dkiJaCJhHJBJNf1ikGcDECZ8Toq4HiekttdnRZJy8YMuPqJhQx3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqh6VwYaKEfbKgv8A7XKtZrUCXbZqGV1Mx5Ues7xdssE474PV6casuhEHE7fQqSmFTA4xRfhztD3KUSH7vPdxhS",
  "key1": "32H5MB4hHNWY1axMjCCNCMAff9vhzZLEEsrFr5aaY14qKDK8sDUk3yY7M73k8vnTnymrwUoiMWh3F3VmGtuXVEt4",
  "key2": "2JbHiAJnCEoYhpDLXpbtFgRqFBYmeS94R7rARoyhyAgaqzDEhBjeuJzRcqxMPaqGdMWEgNGM97zDgYw3VeD8mUn1",
  "key3": "632u7ckWkzn5u555659JFzTWFfruWJEfe8YxafquPTVDLF66JiSWuvXbHH3Ns1HZ4wAadoBiUo2UMbknbErFjnWN",
  "key4": "5d3zwPbifYs1L3EW877X3CoQsxTKdCkooEtQtVowh1koe7GXnMoY174cWz6yjipK4d1ApqcGSxMeN91SawQahGZ6",
  "key5": "4mALzASMfBbPVDbM7YEQK4UFwRuARGT8WBwmMw4iRKPPw7y5BQApvXU3s9auH2Q1nKzQm6xcyb2VQkYP7J1hZNQ4",
  "key6": "5Yyzfmqb8gyCtwdg3D6ozJGq5Z6wiZR3TSCzDeLNe1w41DcoM79GWFvGezf9vrjiVbq1HhNsGrQGX8GQLFUYE7Bw",
  "key7": "5TMM7gdwJmW16h4RtesNLJRUQigDhxKFrHnf4G8UncR4wY4EGGbhWAFQrDUVKvosQ9HARGMTVAgbF9iAaRQaENgu",
  "key8": "5CfmwF9FYTBYwNGJvRFREPUB8m2o4wLmpFscuAcdzTNYSuwmPiUsG6vRwMC2gDWBrNC6xud8Cost3YDS4nsNBBMA",
  "key9": "5r2fT8P7Lr8PpsPNwx65dJqw3VCyXbYmtYKCmCsSxMqJq4ZMr4qYgvBBgk85NxmEMR9DBVNuPdBGJDMV4X1RWEMZ",
  "key10": "53sn55ry7NjwxTXpMA1ZMF2e2bS9LZaFhU39uCCcy99Hct1dpfKooGYS4NrRRvfG8jUcsgx6JjAPYaGj7tEh6RU1",
  "key11": "4V28yeppCcMYsyZGswh1hzU5kj6LgHxAaAZM24agrcrCteoWgCjUquTdM4KqycfagGF1eVUEHccT8JriJohE6DFz",
  "key12": "2uQhPH8onHRGX2Zvif6LBQCrSCHTHXf91ZGhYng66npg7hc7zq419SxycRfnpv52WoiLmMgg5ZP1GXvRHwFWWxEA",
  "key13": "4YzXWjhDgLzghWzYSg6JAGsKbasQdfZvStgiFMRmx74HCjhH5jwNE5x3sSHYfJFMWg6WnUdmfLHNmK4mYYCjGFzG",
  "key14": "31r1i2MY79YkdWTXQqSjMctKQBztHntW6P1swRfKWdrj6GEEUkGYHpi7sJnc8iZVediHX2c2pm72DmFkPmNfmiwA",
  "key15": "2RFBnqh383Grfh1ePSw3AKB1TjkQqeX8pUkeKitHR8u4ZtYzuh3ngXbyjW97PGJ6nw4HpZcscAiQuaHv3Z6vSowi",
  "key16": "2Dd7NYmM2TM6jaZHswUXbcLJwQPyXUfkPSJAj7VDU6w1N5o65X2ZLGHKQgXZa3nyS7MJ3KwTJaLGWatPsb2mWTLW",
  "key17": "4rYftunhYJhxRB7sviD4CkbuTw9vC48u9N6TA5sPXJWSgpttHSQ1SsW1Ze2afRoZtwimXTYdMtsACBz4A8gDoM3Q",
  "key18": "dkg8KpHZbwaLuPmZ1VDwgCBLxew8o7GmoeJ7DBd8MbgkvQNeq2rMwt7CunqnsGgSwizWPbwF3iVAugKRSgm5Qbq",
  "key19": "2KSjihgSCMbfgL6Cktyq9Mq25z6q8xBLCxxT8nELHoqAyDGnvWT31FcZa41zFskRHjai1oEftxwzxSZ2pMfWhQCc",
  "key20": "2ZvjDBLSJiqJHbeXrcvLWKYenfwPzHbwpRkEnYD94RYWavxupbvtxnvAM1vC4ZPEe8w8m3JrUCg6pw4m4GqrPWu2",
  "key21": "2BsJTEm5y51wEkF96ZQfjHtQms6vLBrteEdQUJ4jby31SxwE9iUgLBjMMfXMw6G3kz6KVg7qhdwEeaK6uHgqNovA",
  "key22": "2DxWHT2iFtXN3FkTT7bHPVbcYEw3VZB3NdP1dVSVmiSWbim5qXexrZjpRjx5jyyAN9CnodsqwYvtqZw86gPppH82",
  "key23": "4g1vKStMGgwXUSNk4FLHjQdH8KZ7LZz8B8v66nrwSLueWiczvPR22WQ3bgaTN45eGGGdKkFh8Rv83TJWDnKezjVF",
  "key24": "4iyya8tJdVpJX4cS9wxZMTmtVxVfZECWi68bT3eyEFFQ1U5GHAFMhovx6D9JJLtztYtNUm4ND86eVVrsgXVCtgSk",
  "key25": "3gxKZVQGTFgRHBfB7P45kuPi2szMutBkRtSVpiysbU13iNvXCD5dfV7o9FuS37spvBduRbJrn2W7c42yBZTSAHig",
  "key26": "38CHCtzWAVhyBDKYWuk5FvRYKaLGsfyYvUvQDz6mYuSXXV7a2pzE3d7cfpukYP4Vh9mUnbDc8YpSVKsUVyzwU3TV",
  "key27": "2z9jNKhwYukMerqM7VCdXcTf4BEdA4yjSAAqyFnLj88wfF4JibuqwEy1NuTBVKZGaTVBG5YKozsK12KpYkXKeEFu",
  "key28": "5sJ8WR7TSbr13LtjHVzh4HepCRPoBaaAygw7QKWFv8aXaGGQs6qffFXWvqBa4NAVzV5nJzPnfArrScADz5k3jQWz",
  "key29": "56woNyqzsnfBFc4mNaSTUvZesfibn3Ui2X7pn3AHHhoyhHrfw3ojEFHPAnuy8Sdvo8x9HpRrBgxqQ6qcgbycpXVi",
  "key30": "24vXtNnj2sud9wyJJGxbjTvRtbenGMd4iPLh3RJNvSX9hLdmYjxJCMATMKgtPCeKVhxMpwcM64nRLRnhqJvrWbSy",
  "key31": "2tSVnVxB4xsruBEQzUhpM5ZMKTperkYHGSrSDDsv6dtmNecj7sq82RQQzVMy24NNgA6nphG9DbzkF6enrqBU4ETb",
  "key32": "5pFGnNAr24KkMVmKpgQuvykjfsCd4wR3BNDDoRjexa89tvcKxWXqsoTZ7LZXnJ7Q9M9w8b6soS8qWdTDtBfgjqip",
  "key33": "HoEtbiysmPdLw8yqtUftK1uVPFMFVprUgWa4g5p4x92wvJMNqjADA6rqwc8Mq5AyuLd677RvPoThiCPC8qjZsNB",
  "key34": "2eye8k7aiHPnhrksJvZ2TeJYXQxzF4GAEMXZkGR6RVdcHedJhie1cezKJyebBwm1qgWuKfatyeg8LxYDPsvLvbLb",
  "key35": "qaou2KBuH4gUJiPnXZiV3Gfmukr3SJePMSiTpfcZFaiYxZunta1M5bhdtZr5CXkYNBnJrWoEZj5UsqQKTp8gYZD",
  "key36": "kKvjkP2inKfWFqwYaJL496S3cuvw2cAC2mvUo55sYQ1nKxv7dRzDrn9NMtewcBrdjEtUQJLg2P285J2woZfEgP6",
  "key37": "Rm4sFnGgE3pua3vss6hPSMPj36xUZpsFaXrvzNdqM6KQ36tmP5AZY2Fvw7v14XWN74TLdDB1g8taHWEA5UGfm18",
  "key38": "5vTEeNWDJRHuWr1QQBYJii21CB9erUcHehWSXvYoiQiz6ixWW41g2hGqWWGS2DWQUDLorsZWGh7rwsNT5NaVMeWc",
  "key39": "2voz4dgv1sATnFPu499ZY9z9m1rT6L3Eow2ugQAiXmoQMvepCgTRkBfRSq4ak7VbKCv6sYgTkXp9AC73NZjQaaXd"
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
