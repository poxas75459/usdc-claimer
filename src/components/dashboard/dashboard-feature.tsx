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
    "3a4eL1pr9TPV8B4gdGe3U2rahpdoZBsSYQjSDk56smdXvWknAebhJEByE2d71fTPusJ4QfbCczAMpVxf2FVgx2vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxpR7yQieJ5XuhddgsGLnrBbE8UQQFoDGw5xyDKB7FsJwSiCnT689jVqnAZYWX6kVLLU6aMAmMy9Hx4K5QcF9YA",
  "key1": "5Pw722apBu6CDGw2Vr6u7uiPqMCFNxM6Wd2P6Ay7S3GcWQ9N6iXKjxW3wW4CGkgDK4t5HSSwmDGQ78BqFjEetqyw",
  "key2": "tfu23eGMaScMbScMMLVMTiQyhmtCeHtahDQUSCvHiJfJUVwoCxrFWwviWmHht5KsfHniDq3YMPPVbRNGhbXttFJ",
  "key3": "2Xr9vLrfrP9X8rwxnyoEkhLupJ8tTBAEMKdbbCWSvqSjUaeKPvXiSiw2UXHUP7pNtoA8qF9X1oVfRNhBVLvGCUNS",
  "key4": "5C1f7VBtqU9syZaBKrtGx46hpRYLNbsqoapzjQjRhM9DX8oo8b1A39s2KEcUGTYJxaum1ddrucR934iPAJuZQbBU",
  "key5": "3HMbExSLbjUSL8X8UPNg9P7fTCRoYHtpFsaqjBso66AYcLZAbUQLakGkgugD6jP3fpUyytVAndQSXy2kYN3rASpd",
  "key6": "5xjuauWDD8GzD74hJoQebhdPc7buEXPRykHhRQrLXwGpTFFXJmzmTkNC5d4Q5hcMirGchT7KopDZ4fw79YAA5TBy",
  "key7": "SpD8BRL6zwV4NGav2j6PPPg1C4NvUwz79ncjJBWBHVjnt8d1mfQdG4nhWrMbjc3WHqev7LQ1Kxu8jnfZWiE5QtU",
  "key8": "63M6qXmNzDyFyF629TPagFZ7XaTcizZdQ2UdyYbeV6gLU6FqC1Byfr4m2ePr8guqQHKh3AZ1qxpn5k3YtVnEzrc4",
  "key9": "SwMX78o2mXcfNcpV5m5pxd2x6zPYJ771kj97zJ4MQLLALQXd6XQeoVmAuBRcdk3QM72D8N14qWHnma9aDK9nSiK",
  "key10": "tQY1VvnyazqnzfKaFDDgh6NQL9NGn4KnhygDw9tfJQDa51BFWqHS4ahBYwJ9NinYcBfrg3w8vXwd9tfJSi8uDMK",
  "key11": "A2DXFE8qfuXi1hjZxMCDzbEpmFRakQWuFZQssqi3bf8faeeCL1ANztazmyoY9WHfmcPsRM5rTPx9diCTomNSeiq",
  "key12": "5pY4PvbzzYU1fSeVG7EEPk4qtVVHPk3PtuatMPXmD6rEC45ykQCTNhqj5kvXSc4NPmD6L8wFE5UNzqV6qYRyNosS",
  "key13": "4GuMNkswBYjLDcPsFjpbzXVYT6a6riNVH4Ut56euywCHme2nhFxz3cSSkzAak5BNrTv6uK5pQacqeHbtdbBWsjzp",
  "key14": "5pC9p4wtSZmpQy8VDQxcqeUv3ixQUD7fF9zCix65L93WCfejFpwv49t3StEQwLZZ2rqf5CHMvAXErYCfiJGHJA3n",
  "key15": "5ycpwLcojWuiStYXSL3x9kwTxHcN7uzy4j9sRgaTqRwppG3UaTkwPo9ZwPguywiXXVAyKcxpFyaKMkFZhPdppwgp",
  "key16": "5NCWTainEyUrK6K3B2sUM5nzumaFgzrUmrCVhTA2gzQaUitfsTYnpiWUNCPfRPP2QeDNu2AmWdYRCFuAuvgsjsrH",
  "key17": "4azEcisWGMHJK9bHkNRnwSYofenJ8N4BTHK2kTh7iS4o5Q6E3sTkaarjvFbT2ZWvkqkUodwY55PSv9xVYDMSkWxj",
  "key18": "5mHW9GeyAPCgm1rsQ8jo6bWg4w2WuFMZprN4YYxf1CSGz3uyUQYUdjuMakyUZ4oG2Jr6sMmSTmmP3EQTFkmnWRPk",
  "key19": "9jUC5axB4Znir9j2wrFkmcqB5yEHAmzTwSTGqdVa2EAPcrX2qX8eq8e6knL9yNnsAn869ACkaJvtLBKrNr8z6GM",
  "key20": "29ZSYu8NE6LbRHRfBazBfiM97rPJ1wTLALKRZKsK3RLvuikKgx89k2x81tFUBF2CkEkMEBb5bJWRMtcxJrYrpReR",
  "key21": "21jxxfPTrhje6v4iLey4ogN1VmBeZ2ep2Nsg3gdxwGdu41DykRe8sgZFjr9BixHs9LJarLZ3YTDc3S4UyBy6PQLi",
  "key22": "48oWMXtBGJip1yofarizxSQ5kSUXXvgWAGsK6VYG2Wsnh5EB7fPHrEYSue5a1R2uaEk8BGo1jyvjAwCiVCYsAbu7",
  "key23": "3mFkmRZ28gJH9BpDdqtCKZUNiCf3U94ByaaV8SLJthSbNYqrXbE6dCoofrbNeyaQ1SLwyVktSey8UpdfMqKqqpnp",
  "key24": "5g38X7uaxwUBYHzRGEoCFxnnHEDkfLtyVq8VHY5YNszFiTAey4b5oRBJ9FCHr5M8fv9iVB3gdy3MGZuyAw3qV7iT",
  "key25": "3NpccP7Bhywbzkd56ZGqnXGAD3XtaJoV9MMVaavtDu5pentvPMNj3mNnv9hEhFVSMa5GScqx6421o5TbHRsSGWYJ",
  "key26": "BzwsADphBiVRvW2kcJvTe9njhDH6CmVWempDAi5nxAZFBCvpAeRRgY1jKNn1ewyLsEt57aXZMCQdv2ZW77m3kEr",
  "key27": "2RLX3M726zqxCzat6PTVVgRbiejJW58zS9LxN8sybrBHyQosnMbqshyGmCj7krJmdMHxm8nw5Mr2K1MMwULv9mFn",
  "key28": "2TiXjHWk3Y6E43NSN6Vd8LEC7avMuVmX97Wi5v9jUvnQV77LdHkzeJ3vL6Q1oqmMGBoCtWxBUB5aPuZEXfE8MEQS",
  "key29": "2KZEqWtmmxAySAfMHdVMM6r8X55ney4VerxaX3YEZrW3Zb3szF2PULFXwcDFHbrkuSybkHDRnG2GwwUFaeBArwQ4",
  "key30": "63oYQY3CsRtF8sP1zoxEgkQ3Tsbyp1R9sFJBsRCnAnGJRbnjVRkojXwTt8qhzf4HvvAJsniqEzv5spQywQG66fQ4",
  "key31": "55DMmU9CtXq7yRUeQZbJY2wjcGyU4ebmep9z4DSasuyyEzjqAMEAZiqNBUH9Z62otRdXChadgEHp6gk7XVku6hKS",
  "key32": "45kbbAcaZ8M9Jn2yZGZNb8KUsKvZf81ndksxY6VTL5VaVXH7X31U8efxQzkvY3hh6ng53z6XZsb1x4gn6iWwshQa",
  "key33": "TcWdWN88gtFstmrQ6gXo4bcVyknqctHF3nJs86htWEXAgojakuVtXTPsFC5Dt5Udp9EcTeNEBu1LPU2hVPUHq6X",
  "key34": "3EmLUt4Y8rSuwDFQkVvRee6U7UWz8jDC3APqMcdo24EUGPqeWnvzy77aQqd7AnWYjRbaUs4fp6QcZBahMFw6oou2",
  "key35": "42tPUJoSSiTzcMbiHjkC2gbSahNmCjQzWGF7tKPgsAMB9GZnCz26yoL9yiHwFxfouqSRVSNM5AMkSaEMcLXqyMr",
  "key36": "rPiT1W3bR8dFBbDt838zJk2xVUHHMEigFQ1FgFmvSFQc6BcAh61A6wk7VdMBgDwvXjp6uSR2DZNnutD9BkKw8sm",
  "key37": "pvY8j7M82uke2Ngf76bCLRPbqqW2igqUCcnemSTRWn3QBfKBjrqUHMMN7Z8YYKgMVasSgupvsbBv6BJpRoYdXWW"
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
