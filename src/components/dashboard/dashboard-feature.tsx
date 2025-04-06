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
    "2FgcNHQxy7MmGJurA1VhifF9u3W7JahUKbwJitRsab4etWumqGq22veDj7n3nvuEbg5rqF9a7CyfDXRbBJ7DVJpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgPNLK9R5Bsn2sCPsD2NnbUuwsGXnSbQWSJNwQN5aKtUn9fVNVt78T76nPx3cMLqKiVoKusgcx47ZAFLxYJrKGu",
  "key1": "46v34qbM1WmckmcJKoNjfzPVitSENudPzctXmDGKMZFyooot1UqT8SrFLzExof2X2ge9Civ4CZris9W8X7uVbdn5",
  "key2": "4gW1eixhTmX171cCqFME3cxcXdfgnNZYzkdGii62E8sbjBMZ7h3HM2raCBTQ77LWnLaSEXjTXKbSN2bpdbSkhaLF",
  "key3": "4bnY4479GLCP2y3cZ8hFK4DBK7Dq5SBK2Q5Ndf1dMeuSQd3nFJHkNLDnzEr5fkcmNmtpo3hqV2hUNtywgz4MMqfR",
  "key4": "3hVFWK9qgvuqRiuBw63wxxLVUvWTUT8NuwUCQFMvrQKHsYpW5Nb4ekdTGXuR9oisqoR3Q3Tw9TSiWw9nkNk2avj3",
  "key5": "5nTbJggH2ST4BVnvNAwmjj4qfAfH1poMgvc2vmwZdH7Zev3DQT2jV3PZfupMXvrUBWRJnWPe8Jf8QrkdMckWQysK",
  "key6": "2NUHxrYHUGf7YVjbKNxhTi52oVj86XZfR83GZRFHCFtxToDZC1cuhSkLioci2Z1i6pk8gTfSCbpmZK3SxGm34YxH",
  "key7": "5jYJwEeAs9NsTgTpMKLL9cfdXW1PXQXXkPz2Pp3P8pn8Xpe9gBwXD4EtLck6wLiqauGmL8UKYAaQZB7xZyVBTrmD",
  "key8": "4YXuqgXVSw3AfEbFY5eQSo6GXB4LUuyFpuoViQHaVPb2nftfWuYoieAD7VfBLRv7Hs9y7LWxxpUAHBNNoTj3fq8x",
  "key9": "53E87HYBwCLxXtWrrV9kskE8y3HLXjcJLTyJ5Bv2qtauQWV7WA7amdxeYDdc6chCZo5UNncFSBUn2JVci1BheJif",
  "key10": "5JZkzcroJvFrsKSpazmL9ioMuZqpUy44i3Kzv8Fp612LorAydMg4jsi7USw8Kov7XjTg6noyKmj6bNkYkkT7F42T",
  "key11": "3ugMVHBa9qxAY5v5HDFCE9L8Ah5xZLWSkc6utDtgc1g24gpdvyfmAorjEmjy4pSnyQmCfc8nHoxB5t3LdUs2fVRk",
  "key12": "4VGMDSDirqsPhM4xdMMiAswPXK4NWTJxy15q5u4zMs24aq8bqfYLF4w9odiHdZZ2MpR9H1Pf4wCmrerW7yVqBzMU",
  "key13": "2axpHzB1HnuhsXe8eoMu6morUrZ1cwhkpzhtDK3JeJfHg8iiQAUGtS9FfwedYgQEDoGpvEWZbTbSRRVsdK4wc3Kx",
  "key14": "RrryiYxABq56SXx4jEFQWcvpNKVR5Dx717nnPASyZLEku47dThi4Zbm7aXCX4z28UeRXfzJM4ZnzQVH9NXSfgyF",
  "key15": "3MYVdsnQLdPfTvr5oHwBTMaUjTwiY4s1stCJkDd4G4zeUtz6XuzFg8RfvKxURm7SZnnuTvKkLYEL14WZnZstFChh",
  "key16": "4pJb5rcFQHWZ2Y4NmrXYZBjYncaz7uAfnSgKvQvRd9GdUE2G6gVnMbZ5q3g27GrSLwxwzuqyPa4Gjr4xRNkk3Jya",
  "key17": "5RZK3YecH53YmWnNzBdEgQ7WzoNN3BbDkUgeThUKDGmyavLH4mxPRVDDtZ2GEsQ5g5oSNP7iKB6XCtsz1qiXs7co",
  "key18": "4XiRwNcLTkEAsh7FiME8sY9WxT5eJbutChbcuz3jcwY3qU8aTCA1Qjpr5dPpZC39wSuQ5BESF3skMfNrjWPG2vy4",
  "key19": "23vUD9ANEAQZfY2oKbp7DC4bY2H7qeEc9BQNKGLfaFxtpL8K1oFfdtd7Jwe8BU1NPLNT9sCBBpzsUHkUq69hqsxU",
  "key20": "PaPF9Xdg55LMaVEs9JCkSRyLWzQ53jUQbtiVcfFbixwYWC9qbjskSMja3ZWfT8naKZ18uaPAnH6jxuZAcBUsHPE",
  "key21": "3gBR3bUHwgDMHiRhWjhyB7wBM5htzKTZcKE64Q3yY72PSRcreQFYmpeSWJzCsXn7a3PoNnPzMkzeuXP6qDX6FkH",
  "key22": "4yjJPccFQS6nefXdxj13NMgcj9emPWEvATZpt3EBuxZxJ8uHRVdQY7fbRv2QyR9eVrnaaiALp75xiPwqX2bEJTvQ",
  "key23": "3ffKpfs3bVriqyYiibRCdk58fdf15wSdmfuWVwJmj58HAmSoQx9UiwhZR7ryg9dg1FwnrXeZiqryK3zbo3k3cvvi",
  "key24": "ZzzrA2pomhMKTHRFWC9AeL7uBYcz6H74tJbNf8sqg9BwGXsMRbK4cXe9GTWuosqCy2shjnhQXHXhTcjNY3H3d6Z",
  "key25": "3BWkKaa8BgNApjd6pyFw55eqqph6uZC1wUQnbfPgSSTh6Y3zBbzVEp11GQAgYrVSbRWd51o1x236m1pa5qrFkkQN",
  "key26": "kMCtH5ZUG9JDasWR2e9SYVzSEuHwphNTbLvH2D4SiSkMVm2pFucRtzK3YpeiwVNdGz1Ai5hTBmckoV4y81VtYxJ",
  "key27": "2QxGJWFv3pqrQZd55D2ej4wD5s7TnVzacymetHQpZGgGQP3LaUenBGRoCDoN228RCxkNi4bstm56SiZds7edCXzQ",
  "key28": "4bQEzVjiZfWFSxg5YiqFaVeRwc2SFWxWQHsy2NgJzYEhX5FSM4mjTzxR6RaaXUnoWRTixEfWGhYQnh7jtqCuQrkq",
  "key29": "wXoHnP2jucL37tnf5JjgwC8daNuzgwcZfYDsWv7rm5yCMomDBSupnETbkKz6Qhq8aykz6C3bpyTKMQzkHRRkvor",
  "key30": "XZov888Pfmp3a6Q1hmbz7W7UG6E8yi1KAe66g8p2p1r5Z2WakEodWfigN6sWzSAYTPXZeAc1DiQ6aBXseFbzcxv",
  "key31": "3jqhd1A3ixEQjnXcVPoJ8JsbCwPsW1nczpS45BMTD4wkFchbo8Xdyf4HTpcTTTLH2xZRa2QxWM962y9rSwWpHeBY",
  "key32": "5f4Wv7Wwun2eWTLkkaV8owvatWanExqBrDqREbeNS4MyYyfVbEMLfLxh1eLZcdgV2maXFiikeRYeoUGCJ6Q4eLUQ",
  "key33": "3mNeDwdM63S7sHSbdJVuptQTfB3QF85VADfbi7hthCWKfvqQ5r9UcBfdA4VXchj3uf9TvtyxktHroZ4G9XUvKSGu",
  "key34": "4wMgyd1mJcrhDm9rLMNVhk2KzR6HJyCshvUShEBPZUBuwLa4ZNx3gx5JpXzuKLGKYKQf6wm9cyHKtZ86LedNzmSS",
  "key35": "yaMvopZH7ZcdRWPYhFPSw8pX6bsjiLmtChjpjY8enVEbJEGzp5qgX7xHD4eJfy2ygts6gfDQeWopLsBUnzzaZ74",
  "key36": "iDY9G1y95n64Rw5XoZ4z2YaegVhBA3k6KP29Sq9oJumqsH5g7Rh9azAriU5zTiwj9AvkyCZzYxjtJSvnx685pVF",
  "key37": "4L4oZufVqtSnYzuXL5ddCqjpVuGtJET4eBobeXgwB43ymm4cSH24Go4HPVwTf833Mt5eTr12bdq1Bf1Fsk6RKdZt",
  "key38": "5KuZ1CwRUGpmFk4etgxYG1PuwY64wYzxFaU4DtbRzfZSRWYFnGNpTP5wcvrmBayAvTfeZYqKyw8KjxAv7o51YjcW",
  "key39": "3UvPv7sGm4mEcFchxxVXLVcQFF4eqUy3mkeLroRpgc4xivuHUrKgv4UmqCHDgBk3NcTkErwtgAHzV1uVgQXYoj5y",
  "key40": "4UuKZEUR2xYGcMsSHow5UAQkFhjZrhTsajdv1kaCGSeUWNWoqmq8cJvFTpmpmUjkSyPcTbtYMr6GaN89Pz8SwLLD",
  "key41": "3C7grp2HcaoQ7TYAh7jXRXb5grfdX6HeRwhqpybUPAAwssB2QKfKvNqxKFBacr1k2u7DiisAVqQnvdM5tKZqvLWX",
  "key42": "58THo3cVMr2Tr46UTgYdLqHc6z6Bt946EtkhqUy5JNAaDYEJyRtHMVgqMnj3iMNBPrQw1EH7bPQJBYYVEHPoWfFW"
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
