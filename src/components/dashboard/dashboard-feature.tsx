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
    "dxVv9Az6uVZgt88XjiHrrH5taF5vEkHrZ3wfMuU8jbkb13FWSDuxExy9K3HVC7Eqs9HC53HQHmnsbhSPmpj22EJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMxUU8UDWvQ5Vhuk8kSeEeupduUPKBgiJdBgcZtr48Vu8v6uj3rNrLVbNJuDbvw7vFAK52FSkNGjNE5LnXfgd13",
  "key1": "2AWNHhRqGo2HQ9woHL2yyeHQXYtRHLQ9kA4skFse27vuXhA7gyEyZ1UQpAUJcYWUvxuxTrVuCgFHt1apWxS48BVj",
  "key2": "34pxf5pbgm1k28BRDdJRg7TYE57nFYpQ8cAquiMFw65fq4R6Dxaj36icyEHT5qMpX4TXUDmYvxxGMSrxRZCgSF9z",
  "key3": "4k74ZB7GdcFZbjBxBnzrxXoXwNsGDjeyuccf1MBRE5j5AGP4scJpsWBP7X3Cdr2A5kyW5X1ykjRDPrmJjpbKVPaa",
  "key4": "4C5KxCVYp2nMJpvk4WhD1xRBrXS8SexeAEEqxQ8ndmo1v65JCBnLNhMSbpKPoMJEkmvDHr3Paqdy4zCvF7eq4uXx",
  "key5": "2g1JfBLBReLQnwk9bWn8JpobbW2mMAMb8gq1KUVRSdh4WfrE5nD2QNsoqRkjz8hp2Gr3Y5txz9WSxWK1AvNd4eiE",
  "key6": "5TeYSHqrDKZawYqhzDjCd6vSFa7pi8BxYyjajr83U1sA714Ah1NjxRNuFeW1eQxGnoxcc1WXtTr7ir3amXj4qWbU",
  "key7": "8thQtfkdjeA2pKGjtXtPHeLEtsXs8di6w7RYhjaXKduhzKkXKPknA69sTUik1f61ZPmgPFcnNnzaPirpwW9qDxv",
  "key8": "2yQqUwxqwm5HTNCnMKmNoZdc5W1avsj5hyr7cEL5ZRGQ2aCBWqHK5tu33A8tRtYDGXk3xXQJdomzpjd3FqHMBa5A",
  "key9": "3KrC4HJT2qSyXgkmrN72aSrksvyJGT2mfQ7qyCGHQN5JyQNnowM3SafNS32dZJYBNPx82nXci25vqf89agVdCFVR",
  "key10": "5wwivPeGvmtRXPBXJL94wyYpYuECnDbuACpTwgPuq8xz1v4QYp1SPWnzvWyuUDjBrnUWSG5YJr2eYK2BmekCLvRt",
  "key11": "2RRfWid16KHici5vvRFWmAqF3xgYW3Pmj4XVa9Csw38jPkeARQkGMbP1BDQdi17UQ6sournJAL76idVWMKS9XtzJ",
  "key12": "3bFG11sRvZFXdcjzZw8pBbcFmRBGC3pwsHvbK5oYWkGAYGHFWGmLeduZDzA5i6UnbMMvUXoDspjJFR8zW8BFrotQ",
  "key13": "hARFmGXLRApmH5GFU6F8AoA9xrRc4AH8Pn3LbFhsWAiLLr6tyBEAayXTzHw5AEqtgc234iXhQ9XswbqfQjbiC1U",
  "key14": "4PoeQSJ917tC6E1sgVUoMwAjSJNkE4JUrXdY6ow6NV2J2mvzsNFiR7XaaHwoHiC3nr6LnkApSD2rMmFiG6pcKapg",
  "key15": "4jnUQpu148niFkQTuERvNtzgzAi8G3TcWyq57Lqx9dqTRj5SsJkGKTUYaVfbyC63p2ECsaSM9wc19tasVavR5orr",
  "key16": "5Th5CHd2qzoM9C7B7ii4ZizVJZyquvXaaNREZJEG8UPqv2SVnszzLFBTWjoEyjMHez9BPPyWiWk5JwkVfEy8PxU9",
  "key17": "48EcV2o61cJ1BxDbdqM3vPEcRG57KzUMyF6xYtPDjvF1UdEwojHQXM2b9ryGMzjhNL12peQ5SdzNx6rhQvJpuqaF",
  "key18": "3uZ4mS7Q8fyCqdVTZFycW8nuq4wTV2epdVY325queniaASHa3f2Dns3NVMAry3E3x7kikUp9TwMwSC1c8SDpDNiB",
  "key19": "2sTgrigeWE97w2RZWyhi4bpaA6q9k6tpTEhYJRLNABBxR9kwPanUFLEVuqSQ5nGowSSyJvUUgneHT1zcCNtFGojj",
  "key20": "5yzA4QzCsd1KrHPy8umT5THUEt5YVhRo9i7SCQNyWQGgSaZTm46aDNAFvgsXdARHUBNadytyPoABSQ5tcBTbKET5",
  "key21": "4FBFJmwu5u9KK17uYNNowAVCyZ6oqZmR4YWQ4fCpVEWHMDu6uCvXiQ18qzEyfaSYmujG93Jhq9Eyw4d6ksDuWzBF",
  "key22": "2SbbM2nHjBVt6MtyXQitc3iPYZyASAn8ixZLFbYg7JMGimGbmGuUy9qHVzVeDvhqYb9KG22EDZJwq6rKzduPCXoq",
  "key23": "3NgQixEgKXWzn7XL1pPeUw8Zijq4TmzQLdWtCwabM7ojmRRv7cbxLpRyGca7dreBK8mfeYAiNKTSy7NYH3AztJ7K",
  "key24": "51BpKDM4ZbUExkchA2QxS37XjxihkmHcg1rFvzQe4hmhxCoXYnhxwQcpHuhnr3hEwdXB32whRkmMXyG1fhdbmBEK",
  "key25": "5RyXLjZ8t8vePqE24XH88EgKibpBk14gtaFtfe4NiVXkrzDbno8xH7VgBvm1m6NpnkDyJaCJDg3we3aGcuESEzoe",
  "key26": "4ck1V2DF1ASRkeHhbY89bEFKF1AaUsb4AzFuReh4Zm72Wh8jFtAXJ5UqJyhjcPw1T6rGaNQapCaLjsoQ4s2EGRyB",
  "key27": "2cx3n71nNg73ACMJAieeQVazQeARLSQ3zFWDDtvAxzdUkWbSW7NCEi1eGQJF3eq6rk5F27DySXvwEPidUSjVACdx",
  "key28": "4dMavqfoS7keCGVviJQSTNQ1qKKhkzWVw8zP3nbLSASV48oVwKCBW4RZcXfVg6LFdJVPWa5nEs3T1QeyiB81pTAS",
  "key29": "3RhgWfPPDok5FmZNnDunSwrfX4B67ZMyfYZVfzvfK35NjRgfq6UxicGtdExNCHQL8Y18zZtfuAnnhkZy6GLS17Ri",
  "key30": "3gZRexv5kT2hNdc1YL44fvUEmmgCyWUVR6bcaSHi3jXggF7khQZSJfLyTwfu7VrphFrU8uLri97YS75r1F5KP1NU",
  "key31": "5NFRC9XxmjFSirL7BeHGkSBhge3Yrdr4Kk3kAaevkTVu8JZPmFow9YMxpcSYrhZxTPgbtFyq9fwnADwAzNfT44UE",
  "key32": "5ASTarJXM68AtHQP826MNmgk8jdtzDyVXqju5QbqDcc8tJktiRngjJCbuneMGjAmGVjzaEYLswk7ufCDfYYy8ggE",
  "key33": "2A7woE9WZc7KnUnAymQW6GeG3vTS9FbzhkbVFQaSpCoSVeodemaRcfdeixvJ8iuDjR27dYZC72pNXMzMFTzY1B3Y"
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
