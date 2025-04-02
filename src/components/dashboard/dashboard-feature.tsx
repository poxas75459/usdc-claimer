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
    "5FoU1zbofWqNbKHtcV3J5PTrsTe5V5Hg4Xyw28TmQNYvWmxPWe9dAgxPdoshV4vAFqg3Pej1kv5mtpxL3ybMQPoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8Ejz4WHVLgYbgGrpxZ8QNxe6JJmf52djc41FmAMXjVCbsmEoWoiiZotK5zX4Jmn72W97WLRfRLTVNZmr9qpQxS",
  "key1": "X2H4evR9qqJYaNGLQziwqfoXojt3nSXMYjQ3Jhnw3K74kQHLpX8C8Z7jyLcsPQg9PhdaE6amzMBKhDFkBiUKC3x",
  "key2": "L26FqUykxjSMEZDPVJnV9hZuoD3W8gizbevg9dLRjQY4R27AG8rT1w7GFbHxq8zzn4YntgWsgrehFrEaerzo9KC",
  "key3": "3ue4qVZ2BPUVqvqtVdp2GwkGQBjcWBWeQfuzK3Xcmac1nW1gqFq1gVSWGbv8LWFXi2dEB4LyS6sDkyjvwVGC9oBF",
  "key4": "53Z7NiGWBUFbKfVG1EbvHgjd9BBEAjqRj2EDfNeKLVGpm7XuGfxM1pWbNm4fE4yRauWGMpM62Dd65MkM4RLrhP3i",
  "key5": "4Y34BatehMjAK8pDNHXjBk1su5viVMiaEMHThcsQdCwCWPz4JYQ26U1ChDdTVFSMTuaJ5hFu63cGfV9Q1axVjAde",
  "key6": "4aZeaa1Z47xuc43JTHdE7QvDqnpPJYwsPuvD7W2fznTyQuqZNA5sxScshE3CUr1eJBPAPt7iDpTiznjt8JkWrJEA",
  "key7": "2UgtQqqCnzGUBCAkdQTED49D845LHb6G15tHdtYibaKx4Vr9PCrBFxdLH2NumRYzK33y8WQF15qddFbfoAgYgg2P",
  "key8": "idLboX9WexL68boEbFEjcvGbU1oryLz4TFRfnQWktFvja5MZ6fQBfMKxYGmJwurd42zZXXMCKagnYR2eXV1vQJc",
  "key9": "4xHHKSzzEE7B8DeyRV7ACtRByPChCPD5godqd5GnhJs7stza7YH7md52tz2JzixAF9E3bxxy1FPWEjbVcgQgK6cY",
  "key10": "4vHKCA8xQcsZt8RzRKcqA9g5tFMsBSoU2AZvooa1YDUnN4ZHZCMfMfpefNVfoPMUJv1iURsvTZKpWvuBuBcTmdFZ",
  "key11": "65RDWNufUHcoaBPrgJkq4m3Gf53wSoAJUQ2dEPE51RnikRJJrXaJ83p4Y5j7dUQofTnKxMuGRrCwGf1tzjS2SqdB",
  "key12": "5RXedZyudAHN7pu5AZeGhNFuGEEfH3QaX1fZKX9MdTacyciepqaAfow9S7X7HjLKL6bayNs9vxebQiMn9JxVng5o",
  "key13": "3asgnKWWByddbbo3cDQ8HECPYw1jcK8QAZmnNu8yS4jm5T4tCLaVehfvGCQ4XwkW5YhG5i8ADr9yk8bpxbGUCjky",
  "key14": "3Jos3kWvHyVujsTDY9Kg37W8CUPCbVup4JkrZq4K67LrJV2L2uJ8AZigZe3tzYmrs5XCAYQXwsR9HSWEBmchHLAS",
  "key15": "58R5DFVYsTfg7G1vMKRdJHJguABtqwQTcXJbYybibtBWuNfNsxtMsSzP14Mubvo6EdqZgStwY8SJ8zjnBkU3fLAY",
  "key16": "3BsNDiZ3ApCNqrLHd4nLPZCgpkczoEHd5pTV1Zg1dmPgP1J5CrihD5xgRu2zmck4QatKR5aBKGZin34uKRc3RT1d",
  "key17": "61wA5h7mQQ9MJFfu1WGm8Ge2mVMXUstjMbfH6zCJfQ8969MpUis6ZxdvayevJGnuQSFqbUBxSMts2nEgreQoq5D2",
  "key18": "63RCtmVnooBa8dZL6dwNqG2d8Wm4C7mw95Mcvs7QrcSV4yJQ9vWYtes9Mf8tsNRJajobkUcRi4pqTQPhrY7ULHZx",
  "key19": "2AFHAPRPAFmCM9CGSopFyNztM7BNwK5ESyNGHik5oQhm1ZuF1mkheCK2t3Q7ALetvQQsW69x5HJmYWqsQApYZTiR",
  "key20": "2coqbMc5Ygk8DMsyMNJ2R6ogYNF9t1DeYXZAeGFCdWE2JaiVr8RpAt9JoutRP1Qi4y9vSQpgCbdV5rvtx9fGEEbQ",
  "key21": "5z2D7nq5caGtpXmPfKN6EGDHcjzgbouFwhGNAmf2iV4r6Db1EvfD7GeuAyYoijVpPGynqszSJA32hUk46seyDm4w",
  "key22": "2XdHSB64msGtEhkN3KcR6R2S4XqT5xQ1EwXkKS9WytTidJNrDmV5zVY1kEgdox5T1Ktuc5SotkV1wN129yvVubav",
  "key23": "3Juz8BEk1NboyyqpyprEvS6ZxnZ1FG4oeVWYjx6Wh992fyygnZiznNzBJPZrMTG9AxM5uDC1RF7cX61QRCT4oaUF",
  "key24": "4aw35NwqYX3UK82enTrdJvP1gnEjgp8Z5sfYvZPdqvD1VfkV1wbSQkjd6tuHeaF6kLkLZEXYRs6XiMiLhAGbz99S",
  "key25": "5Wnip1HeuFqrog5JEiwecBm9itoppgTUQDd5AoVybWXZpuqxFJDPvVPTTEnZL99aSf3rzSB8t78u8Nt6rYTJX7Ly",
  "key26": "58QZsSG5rjrebJ3JMZ3Er4Y6Hn3NkGC6VGtjnKLfdTsbE46CgX356kvrdfuLmJdrV18KQh7yJhDwuJVnxDPsVKar",
  "key27": "4NB2ztNSdR4u9xEH6y3TPuASzYDvSNSqw9fGnzoGxeeS29nATmc9C9LQegL4Nnf6txj6v1CFGFteEnJUGRF34Pcq",
  "key28": "65b4EVdL4cKisbA18wu8PKXhv8QMr9UK4LuZU1RDGoNNqPaLWgm7U2LWfBTqqsSuf1icfUrRHzyAASFT3cE4WSS5",
  "key29": "5LzjEXukXmcyipbG7BfcRMJ85Yt4V5WKEW1rHFJUbDqYM2bGtAEczhDkLH5HXxzUSwGddJ7z3fWkoMTsD3joD5Ud",
  "key30": "2cwiM8x2uHtxmdNxmgZyXHSkmarJTBeTkT3D31N4jUKbnR5zw3tMMKmcehqp2YcjgCCKKtQpBZY4V9Q1N4TdaMR4",
  "key31": "2PZbrqXARKSNJ47skHqDUxQowDaYcixBPs4LaowxruH3GZy8z2a2jZYAQgfCUV8icpkvSX7CJNEE82jiMhWwYiVQ"
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
