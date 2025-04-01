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
    "2awC62nLprNjz4MSMVDCuwmVhKZrpgcuQqh2eHrGD5VFdJDgpe9cHTwZutLA9T82Kf1nZbPHnw6VoPTH6zd5bZGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USLheLCpNZEzXxACxbbENQiDAJ1fjVcXhbD3Xdd5PX6f2yAgKJUmJnch6PCtPWPY7obRsT5PoGCWA6PToJLYScL",
  "key1": "23Y6e9iE4rJoxAd6UmruSNBu6GVDtkYnT8e8JgG6b258p6o7DycbbogiSWiwFhV3wVG2hnH9qdGZUSHx23jjjCyk",
  "key2": "4qRfecyKbgitRpfV5HDqpVXpS4uPyNkbjoFdSPZ8GmLkjpYcAryBsJGxbbf3RGATFaRXsxpxcJkM2H1BspDqFkPR",
  "key3": "3nbT8feDR7emCbF37zaQVppWFcwm17sXXLtiTmiVHwjnpzZFSkEYjQZVHSDoznbZtZ7xsywUNFpdTdnpxP17Za52",
  "key4": "322Mx9ppsW9jMPkWF8osVP1DhYG4BJYxaXL59i8BUBng3v6m4Kv27JsCPKsDQrCbeJw8SzPycbmpPMsX83CJYit5",
  "key5": "2XUVGHX4LA2XgrK65B9aSZpKF7mK1EyhhkRYrvVU8Pf5evhNA3ii4nKA8BAhUAFH11dMV2xZ9ZvJ8NgT3Wdng5VL",
  "key6": "hSShJXbpvfSGKjp83FwEwWkrMCbibWgegwN6iMnGbJ9efXqCb8btoYNjUBFxvrZLzqCapVZaDXYbXHwq4XoaYxa",
  "key7": "4kCPudBniFZKZsNG41gE81yveTvoXrUwfCL571KQHDEQSXFDDYKAnsq2Q6nLgW2UQobXSNAjpF6UrWYcq4fMUJey",
  "key8": "3pP6Z19Y7wqZ2jyiKNhRjh6M9CYsY2h4MXUQZhmVsWsU1nDspW4LmNL4TpdoUmPeSLpHcQktHo5MSF2iJRWW4mCY",
  "key9": "2hDnCQv7iF7jh5zNcSt1Z5zmmS1tbYE1T1nEwniCWxWFtgdauSVWqrf8WBYA2d3VDUTnsczrrJdM7UzyvaXWUpim",
  "key10": "2bM5ps7GfsVMk8cSMgc5xYjuyY6UKhn2gWKL66wyNUsjmqvWf3iuaJaFLMcC6QCTbqgFhi2cK2wb2zWWqJHJXTj1",
  "key11": "58nfyiVbPRUCEwt6Co5hYvVjse7N8tq8gxh4s2W1GXmWJwhSu9ZafNZQ2xU4yeGu81eU95LNMkzZrc6sDh9QibTZ",
  "key12": "3DrofUcTLxV6ptAQjEANugXrJ2AbwSwQLJiATJ39HSwYegWiwBp8LD6PqaczV2yRYvU2CdTS8zx26vmhFEpq7YTt",
  "key13": "67i1Q8fAKEkMu1kkch7CvrVTiiboyh1b4RwUzTYQ5M2DS4EnCtduE3G3SocyUf2xcuQZ9jx3YKzETh781Qcde9SQ",
  "key14": "4yaBNuUR4wc2mp9GBURmCbNnyeSz4DjX2opSheQCAuz1ozf5xWcDgnBuw4tnrGMTrpwUnGZKk5cnCCUDADqhh2cV",
  "key15": "2u8LHsyeKJCsGjvSELEA9H45tu7bHcKeANGbdgKe3zzNT2swAs4Ha1ph4JntqFVSoQdkoFUHX67x2PGQgQyvxfdM",
  "key16": "5sj1bc72U7dUFhPPGT4SYE6nucnDVzTRHGc41uV6xQ4jdXBwYcXb9cj6mPT9JmXPXbH4qWivmhLhhSmsjL6jrP3g",
  "key17": "5iVnAreTzzC487YKmRVxEPBXpViP3nNV6eqMX1H1nsrDjSQrnEen6mQz3AkNEf6zWYhShrZSAYHJKBdW8MLALoQu",
  "key18": "3kfUEfnNTvd4xn7qpGyH9fUm5qNMteqWAniE2MJiQXKLU7PfTEGYWykvVjbPZ1WfQSzC8Pg6cY1dMbEmfhRox3sn",
  "key19": "5zbhRaAKUYA1L1zgFgGoSKBkQcAFVz3oYwQkvrQAxYSfuBE9c21WKY8pQc4fUrjJTPbSDGkwDcjTM92GDzvGyxph",
  "key20": "2S7JWiv9P7GDS2ZcoXnfC5zbJ23W9bYPwyRbohp2HKt1SViBfrd6ZCKdPdvrW8nQRP62zpt98xC9oz9xqAni9nEV",
  "key21": "oyhws4fAJLM8i9RQE6ELDoPgTXmr8e4yPjyqsAV88mrxW3q2dcRCvsrEXCBuobohxAca2ermDEX8FjRS2qQohAz",
  "key22": "4dAqPKMVBFhb7Etnc6jiSDsZRG7fsurij8PK4yhckDURUUCrQBXDpcm5Mf3aGBMeeFGe9MBMTJpwQmfrWHV7RY5Z",
  "key23": "2mQftDo3A6oVw5zV7qZWFjVtQeEmq42Zpyd37nkEZQW3ucWS6yfE1VC8YBRGZBTJm7cmNwYpvgzQGPhR89vivP9c",
  "key24": "23r9xu4oPzMFQm6Q1ZJtz2BFRQetHTfSuZj8weUCFMfu4jneCoxh4FdeT4hUaCXvbse81VEfV6bVQpagmPpCW9oa",
  "key25": "Rxtedi15782pG8LpPaa39xz6ucdL5dxFG3JHGVheq6Nt8ufNxqCNeKG54fuMvro5pPBNG2V7NpnoAhnBSxNskHj",
  "key26": "4G1VBydcPF21mTghwmHwMPJarvFj7GgSBUWPcCkojpz7Ue6LuYkKEHyhVvCs6Ph76B8ByL1Z3qcdfs2s2wX58XRr",
  "key27": "4caCfUS91c8C9ytdte3aUjJLY9XQW2Ck53ZX3RVWzEGmxtd9mDtCVK1VYCPWZz96REGHm9CspRBW1Zb96AiQrQuE",
  "key28": "3vyqJqbf5EoRYAtbCQbvfsomPps85jXMPY68HiuGvt9DmBbf7urqG47c3wrNKS1PBvXzT1Dvf9hrCfUhaWk8Lmc9",
  "key29": "3zfXdi3JUT43YSErvnBSw9Wpufh68aaGWr1kfF8NpaV9HCGf1Xe9jtkkSuLnVBiG8fpYrkgLEddPNzdzJGvsvJV9"
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
