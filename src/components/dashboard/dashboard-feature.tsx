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
    "3AG8RKumaiyai9sgXzm7b73MNotJs1dhxq6qhEBokypj8ghgafFoScTDN4u77FErUgrsWp7VFe5M3X5CLtF8q6Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RF3MBg5qn5Yas8YHaikPSM7ZiASbAbnThAeBGgfiGeuYmEfF2K7YAZiyerPsvQQD6mE7VXkj8xgsQs5ZEZYx3Kj",
  "key1": "5ZjWJfDRCNAvTVXYDMfBHLeZuZKK3u41X86hY6sX5WP5UeQjbEWgV7szBDs2U2EV89gzey4Liy819hqkXbxnkV47",
  "key2": "2qBGCMphKEpktm1QUuUnLJDG3UP5cCxJ7poZ5wqqdefjpD84yh8DVd48Xsf6swdf5H8h6u4HDMf9mAGw9Qkg8NXW",
  "key3": "4PvyvS2jHJwua9ePBDMGDJE4Y8jZj6jPU8VejTfeKvdcwVdjnRnbQoW7KR88wRc3NnGT9Wt4MBVx82gpgAziGJQo",
  "key4": "RNAckCnz3KybhDXbc66rEquk4KfxpsEQjkVwQDUd8ADxYx8SXX1WTjz9dPQY8hKc4RcXnLtWQYCvgD1qcVTgahE",
  "key5": "2Tc4Rx45mbwxoVAxbBZ7GeWGpk2tB1bQM3XCAeCJroSH1ME5fWznnXGxHXKVsjh1baQQxyiXFuzTntu5m5VEasEW",
  "key6": "4ajWYQW5DufpRQRS27Gr7am3ZHN9kXVgAqcQiFYwvsg9YridfSYRXtEMpxaqPCPiCEXyZ34zHqgYeFrTSfSB99bX",
  "key7": "2crtsiC4uTZvmsGP2sBmseWLVPikeXQM3qBsjtvBfKguFkYz5L1f1kJx8sYKr4v22SjUtseKrC9zMYmB7DJgs3WR",
  "key8": "23qPbsrrzfVUEnyxEkvU7uFMpQ8LRU1gciJ1nAAs4fP6wpzmBUwpgjyLzz9q7gobwYUiQNXaJdkhFcHgNigR7Ra4",
  "key9": "4E9mPJxrGRYqpnB2KrfRzAPanFrisSDpXPfHVrgyZYQ2frAFsXnFpttT46bHqWCtXsv3NFX1fNA2m37sjGbLCs8",
  "key10": "2qeMHxsF7EPiKtF7AnECWAGVeSLqM65SToey4sDRC19ACXDu2LCMYUbiYnmVR9S8CvzkZuyWYAVUPtJaRUF6aqBs",
  "key11": "3WAocRRhfKbSoNztx2gWE2yx6pQeCV7sX8sfF3NEwny8vZtNwHNq6MKwAqPn3fi1wb7NjVNhtXj5zgUdsHfus8Bm",
  "key12": "57oc6UizuGsLk4VxKMPUxJMqbV3JoiakNfndSpV5efS5RPyYR3UwJ6gd87bkyvexF7jLv2Edb56gehC1muN6M3BN",
  "key13": "4y7YBj64ighhuXJ9wWuwbredB69sBk5qpYDHFKJ2s2wtYFsgJnsF9UE6H4961r7VpBzZq2StbbXoTpx5V6xGSDkY",
  "key14": "36V3j44qZtjiJYE8EXyKAXKPhXhQ9QDWztS9LuzRFJpuJM38bg9A5Cqrf7XBvqCre4nZMpcCiWbUCmiaNKC2Wffq",
  "key15": "4LJSLFVANYe2ZbW64HJitzXuL2njkt4QnJNfenVDp8md6K33AXhqC5ZzqQ2BB1NuqRPLaicBT47oiZ1fXbzAZmiL",
  "key16": "3kspMniJTSSLJeY5WYkRMrrXMTdeLCni7TT736XN8DE2i9SREk878DC1z7VHBPJMaKh96dNixN4ucsMaYu6TAQXp",
  "key17": "5tb2GNv3QJgLTukhzDAMVPmhgJG6TvP1yftNtiZNbrLRKfr16zHAgh1UwhNqZUAwMZAb4yQytYZdgvAbJqyxEYPq",
  "key18": "5vy1NMWPQ4ijzmTazyJm71138SSY33k36FnvxffjTPHa1ZAyhciWLCdqYopugBnZvChDK3NuY81KPHFpu9skmcb9",
  "key19": "2p5rJtvfzi1Wy3SUcrpvGipc156434bHoARVcPUQGXfWugkkYZx2zTqqwGxAH3uMANZnYwqJLSPejFTULGpBtoFv",
  "key20": "5tXSidrYYkDj3jp3nAvGqhmWMvv57jnVxPbjftkyJvpAfVSYztjN1TDigjYrTp12692rK8uCfGFmwkZjaf7nLPDi",
  "key21": "7bSNkLYPKhppdxfGSQUVVrEkp9zz8oBrswY42ehzvnEPL3FxarXjVeJzinqRmTwE1PCmhwQND46GGQ2pQe1gFYW",
  "key22": "dUuJZzfdiLJprme8TugoMHufutV3tvmbbaGGp4eVzgxLiDe33emFfcMrUDDEPw8Cy9LTypf9KjVFoyL8RAKU7Wy",
  "key23": "3as6uTWGc72eQ7kbFTD5JuR8NsChY862t6n4ofFWdnJXEnrq9g4v1UBPhq1E3yAUBGKaK1box4unpCGbzi3cf3VU",
  "key24": "5nm9HHhe84yAEc123Esu1ekCokPf7MEvJ7siwciF5BaYQmCHL5NdbQdSXqwPyKGe9wQTpKMCd81kR8Ts2kboFfVc",
  "key25": "6kgat8HGHpyoGGeuGiJe1cVKHN2UWS2KnBX85RLvvRLr2YLRrUA6EZ7BJiN7atdWHcDce4hLo5Ab2qtAyy9mSau",
  "key26": "w5b9qyBAcX8yVR2po725FBSKY33y1HHGk1s3Es28euXYqJvoMRu8nq3Qb3omTAtwGgh27Z7AjZkjU2xz6CH4Mp8",
  "key27": "4dhMuxjQTBLThX3iq2EHUQ2u9giizWz91rMBZ9m9AXDzsjPovFr7hZgPBVZM4bt1vjWBQzzQaYnayKDyZQQiXrL1",
  "key28": "2k5Mvg8wY3frsVpEZ1dy9Rm3tZbJCcYWmQAGdpFp3CLvG5C9cVC74cigAkP8289od9ZinmhnoX95KQYFjmWFJYrV",
  "key29": "2K31xxrLRgojTSBy9W1M6GmdJ4qgyPS7m1H6QWxj236T3P9Np78XZiPHuJhBygkgBuoGxmWNeNmD3dvkVk9Ffj1N",
  "key30": "2XPMywBfSztoHa2KhYoU3rUiWfaincBHnWzgxGFHfhMsSZJ76PkEZWA3muQ9v66hDW1bnoQY3v6nYVpE3i2UYpmh",
  "key31": "32oXHdL3a1mrzHnPBRjuwKYz2XBjmXEifq2yQvwadHqeDTrNCGxoPWAiHhx17xsAZ4FSwrqLfDMEiKsyFhdS74Fr",
  "key32": "JGemKAgc3aHGFhezEqwnrmkv6Sp5Pehb6bnniQLcinHbLpRsoTEGgoeyigLxHDFfQ5bcmj7CLZ3gFAYpcnGvUUt",
  "key33": "2jD6VmNGF9hwGL3u9SeUbnFgaykykyGLK6EGbVe9KJdVtCv2RWxQwtKrCaCtmQgsvYUNoTGK5Mg2uwUq4HT4jP7Q",
  "key34": "2PKSeRhYwAkcZ2vjn5qSAq2jvKWr23mop2jawnSwfQUNN4CibL14H2UHrMgZ5iFRHpnshdAA5bVLcJWK7uWowvds"
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
