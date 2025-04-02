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
    "454bpZqiEQ9z3Nrnmb7yPqbrsVLRTNfmqPuxwsVATZcvEBqyDYr3YDne8GrchS565kn1oC9ZFg9Xf9ncvh2obPCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357k9SNpTJoqLRxENPvroKdsJaxMDNJHYpiPWRXM4fZREUaHZZaV8JC63Skv9uK8SUggLsBuMDG4shsXUHUVa62U",
  "key1": "2W798Kk9CJVpp1XStGEB67UdvETxvYx3jKCXYh777MUauZZ62wwXop2FBxUYYasszVBeGAjgQG7DfvYLt9mrihEd",
  "key2": "3CUXLVSxeUucnk2t8kd3hcNTMur4zvJtxH6gq8jo1RYC29DLf2P7zJp19Ad7zyohYre1k6PLf5rWy2BiwYGFEQ6D",
  "key3": "5QGuEj5g6Gy5tRKVXq2ps7rafyn2HY7dUwhKFKoPQNAUrtjDiB8YB2AJC3FMJeSqeCt9wcMiXFe1wgrZAVBn78dv",
  "key4": "4oUhRHnfRcJf7V4YvoWzoTYqu3syBpbKpQfKZcr98z1WMnAXmDreeDsqrtpPGxBLeGDZBVWn6BDexHHmxEiLbGrt",
  "key5": "9Daj4Wu7TSx8EtJSseiWZx18zwoFB5bSukXkgown3AEupFWmMffpmcneqy2V8paMJQSxURWDAi8J1BHb3XVq7ea",
  "key6": "4RBoRA4VLBchT3MamrbmFNZavz68erhJA59Sqy1DTa4myG1TWGymzCdfjziq8uWFN6HELu3nKEsaKcptau4baYQN",
  "key7": "5EQK4xTFqixoAqcNtobZSAqVYUZUtefCbFnCw4Q4J4SdEJvRDE3r2hG57TK7NdHGDgTVpingAdvpSqP6cESgPWbM",
  "key8": "4QHkGKwtQCkgCL3nL9xofCSb3F3DzrpEDtEbT8bTptMYnfSCP4BSw9dKu7sxWyzAGVDA6SAJpWHXdz11HenDXQgs",
  "key9": "4yCD4sSERSMbiojaYkk26Ahe22yPR6zXLf4LhAw7cuCY9nLMFaRb6XcdLASPVVTyUULq23GHwtydj14erq5Hh4aP",
  "key10": "5P665FpdeqhmtVWJ4Uo8DrGrVBVuV37c5sYQpgPeU3DHkQMWiJNSDPLYq69mVYm6vuMTfN2kuN6gCyHWnH8jU7AW",
  "key11": "2Yf2fqo3C4Ei6ReViMHG4oWdhJBNrAkSS1xpv6AjuCTywZh8fkMZqJGcHwDxtV3juBSLy5cKuF7U5hvUYFPhJytU",
  "key12": "5eCeWMgxKmyoePfoityMYDyrVNvs2gVqPKLKYWE1qSM8YGk46x7bPhUUdtrLPooPHheUopG1fA67oQM6vgvXL3cP",
  "key13": "gT3EYce9SCNZCJEwehy8kd3kov1kF3BpWGe9VsGs48jaPqGw7mg2Mb42EC3tP2owrwVxe1Hx14N7PMvNrtCKVaq",
  "key14": "5nc6AGjdTpqGUoaJrd7xtcBES1VCpjnLSSKZLuSb6iyPmV8xiTCbSuyjhAaDaoVn4Sng4T4twLwwwrFK72FFupBr",
  "key15": "4kFMUo72PES1hW6GJb4CtDGuwQA8tXSyZvzknGaTYU18X2SKrJVsiLu3qyDpRU5j2AHSuWe64qRFpT9w8BMQBYFU",
  "key16": "2hZxKLBUFcmnD1xuX2ey138ecEfMHDqopoZ9ABFtY6Z5hhG6sqV9hDMhMYSXeVEkewtDtVfHrgRAHRv1HSMiXfbu",
  "key17": "5dG4KxrbL1zwvuASKCsVB6aZGrg3GnXFc4JCkLrZrRM9USXw7L3e5PrbXPGGBKdimwsDVYwMgJvkxDNJESVnyEFa",
  "key18": "57PxdCxJcjtUKuhd81bn9TQBgJmYpvjHPGZu3i6yT4NV2menfxapGJaRbT3y16xV6adDrEpHigoG6AD6CLNXJqsP",
  "key19": "DuVYhSEVzU3q9wSizhrv4vaSBb7gesAn6mBu6FYonxeWt9rq9DLqUk1WWXb1ZzovdszZZEjCpGd7uMPHqnvWP14",
  "key20": "46CNyh26JAnmWGeUV228k37jEaM2TtQZHT6XBZP7dZLPz4ccH3Xk2BvKKADwgfXnQPajc2MEQfUKW4mtxHoEW1ym",
  "key21": "i6Bp52TMc5cEPaDhpmoevmALuJHEJy2JH6XF8xx6CP8nV8RejgTZsgRgviVUbaV7rf8Q2tF5wxvz15trgxUyq7Y",
  "key22": "2vghyahR33bJ2cLjPUj15W5EsBzAPcJ83wdE9RT55LJdSr7JqbCRhWm3zERciUb6akEYM3BjW3TKfMpEt6cjVQRu",
  "key23": "3gY38pituZunRk4fVbgmZLvBCNZ3wimcpLWiuFHwHcsFsXkLJketumRqk9BFBsGR1cTqenhyPhc4ca3oJcM74T7o",
  "key24": "3dbDh2S5gq6fvYZnD6dz3bc5rma6867ZGEyXAJiTXQEVJmVKHaRznUcGWbtEQkFdkMThuV277oLyZ8i3E5tNbkEy",
  "key25": "2m3wNVzAFq67k2F8UXHemcxXMBm828nJ9Z4qPQWsb3xS8zMugLCfSrDE7jfPxnMah7E3EghB5sQXLzTcpMikHohj",
  "key26": "2wt9gn7f5eQF9aMJX2isiv3BiosGVDxupnoi8rxVbjLAa5MK91YM8EijDz8W7DDKimJuJzbeAig2j3GomiST4GGk",
  "key27": "5pH3qDAWYJcQneE1AkkJiZKouJzmEHHVe8X4fbxbay8i7VooHh8gySo3Z2KMiyNwzWERsJCs2ViHcpfxA5Godat2",
  "key28": "2ABRq9J4DgAdfMUQFnrsk22htbgSHTXFBFyZpd58V2NcodhMqW62gJcfosaHq24oDj6DcAJuCHUxaY1isbQ8hKVY",
  "key29": "5HjcLvM9e9CymtJ9CD2tthDqvFqb2LJ6QnEa1zoAkW4dzDqbXRsXb5ZMVEzHGZV8NEYAmpacsJv4EVR5GVNdS64P",
  "key30": "6Xmccp93Mypqaw3h5xkLVxT2aVgf7yHWbMLS3BwD1Dy1cmAZ2pa6gCp1Lyew4xm2caHAZn9y7wkJVJUpSLHUNr3",
  "key31": "3kECDaNxQg8HpcVcYj85z9rp5poo2KnGYtKWgkko5aPqGxCeq53BL45okQPzmwkyPLyCvoPPU7cSpnBFsHqVM4X9",
  "key32": "54ArwD44diDLGgikdwVS3MpT3oLX9YVWLVxsYYWiz8AN1fw4hByKM5NxYiYTZj1udgiXSwndwxTAmnq6nknC2PRT",
  "key33": "gP3Bn2C4qrNpQLXiAjGMaJowQGKtRnuzz7LVqB4S1eFsHjV3dRAY6MTFYCzY4R1HDkcMrzcRHrKRURZg3TGPL6D",
  "key34": "4wnKtEvjqkvy1Hazic3E57SmDDoizBusjkr8inBMbjznRvGffi1BkDtUDoGThLkxKbWqDYhQ1T6mmfpxXbB3U8YH",
  "key35": "3FmWEiyrKT7cbCNV4q5VPALwok8GFeGrJpfgTJzndsvW2uXW8erkq73Q3J8Kqaor5kpozX9R8nxWWGZNAfMhDaXE",
  "key36": "3jonNjTkuNnm2Rxnp78H3hTSMZt26gcKmbVfynp6auxaEnicd6tUMBTY5go7C5GjfjQHQQzXNs1xVSY9MCQddQuR",
  "key37": "5G1D3rFDziJyCN38EM6YiwXk3DCDApjVa9xzrxAWTtKUn1NJuHFjeepS4hz11Qzr5USpmh61Z8nqoQGkZc2ub7AY",
  "key38": "5CBg8ZkMtKEvd1gkcxD3omqBQUfJ3MX99iWESRW8CB3hLweugWiqkzvjZMCF8BoKgvRDqpXNg4U1Etjmhyhv26Zs",
  "key39": "41rcVo2NfHPwkibVGgLndEfz4DsuQDYqJLug4udBfB2nJuf53mJWw7yBiv8XmSkmfb725QwkEEUfLwLcvYtKiKGu"
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
