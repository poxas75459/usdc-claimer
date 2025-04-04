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
    "xzunDu5couPxxRde1FadpEYtPHwJ5mQnDUyQEQqxoyYnbgGgVKSt5bTyp11Fdr3RiyW1RtrU5DFskTeWk3st8xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1e3kXiRPxeYAJGuMXPqLmmS3kgoFMXEYAp8hf3aUriZAz9NfRQABLpDuaqeJRHA2rSZxX3y3cHf9gh2tJcNBCV",
  "key1": "3a7yifP4AK7N2ZJyZfQ16JaGZ9MZLHwurQwQprmQpmtuFxrQPgceTkhjeirTSEPtjtp3QmPrMQ8cLzhjmU3csZmD",
  "key2": "Dgt6pwuQZNStJh9LtHqCbxoAPj9d6ZEbU3xLSoQuFbphm9kjR3jQm8TxqEwHBFcaTmmpTQCqyUZsV5q8up1gGVC",
  "key3": "57juidqUXSxEzyZ5kSY9SmmAaki6Bx5ruPbAVN36ETnjSWrVpLSDvuzetUKRx4MCCdnVJqtRaA9cLTyd76Nx9Ljv",
  "key4": "33tepqrGtgquuQ37fcoQfeVfyQoJtR6UgFonNG52yo447D9FZj8VVZvBb7bHE9vQeK9xq8hiLFLhg6sSnQjanRaZ",
  "key5": "VM2pC2uZaDyoHnjHM5SSsrZ4f2TAyy9HzjhYarK2GGoHGuEVa9qB2geY3Vi6n6aiKrXB6MQpuKsGHHrYW5Yysd2",
  "key6": "3znYRC8hwgW4PukcdmABVVJjnXC77i9pvfu3LogfMtez3G6DTJi8eBMSN8sEntSp8uyjEBzVG7YF98a5Jwza3Zg9",
  "key7": "4vxqsk5QRuXvLpVtFUzUHCxgFECHpwKVN3siuSdMhfMDYGkM2yAv2gnUTuhKJD4cqtv91BSb1KiHDvyRHpQUVFVL",
  "key8": "4y3ewgM7jSp7VQvXRc3obToz3xduLaBWeAZzP2G35NjisXJZieEKvMaFU7eoxMo2Fz3bd5Hdvb9x5DAc1SeJ5q4k",
  "key9": "47fKtGJVjftXBGXB8SaVHuAd1SRqG74WSk1km2qv7zC8WDuUDnRgWQRNmacZALjovARSd5sMaz1EvX6837PStodc",
  "key10": "2oxotVpS59fL4wAEzaRLEJD2WaR1j9Qq3ybi9f1kuhKVCkuxgeutc6EwShcLUtbNFT57g8KAvVeNGk5qirYoA636",
  "key11": "5bHRV8Qon5enWYTKF4dmax3d7YgnX5Kidf8fD1z94wpFZgxNpNqXZ7VfZonpYQsMgFWfA7FZQgrRUravuXU6NgZT",
  "key12": "2J53f7dHHWm9inJXvw7TFKhk8LbyH66s5WoERqvSYBoxCLZHG7B9Jow8WGwTbRy3fdjsnM5g3Wh4YFahv6jKdDnX",
  "key13": "2AUGCGMrsQHvEgwWNLo628PbVsVYbXZtjw9ozNssXadD8XDggS2KzXk3X6vG16rKRCh1g2LWmonXUNX2e4LyJdo8",
  "key14": "5oADPfELq5LkDGvkfYHbjFDhBEhH3EBqsfgyZvjxGPQg2W8NaS8GAffkEx61RF5za2cYjGFmzqhHNjicnJ5YFZZb",
  "key15": "2YdupYBCf31sH9n4nidtGiu3M2Duxh6C1bSbew7far5NLuan7EhrnyKSswTVM3uGNeiwKFwEH4vRBGPM9AZhvUak",
  "key16": "5mFKTj7uZk45vGktgHg69eEiLE5FfjmnKpHvCcM4kSgkHupLsbRZBaG6PECYXjWs1dMpMJu5xfFXhT64TaH3DhrY",
  "key17": "2ZVDQekkLUuxHeaRr9PMcmotgN9rjqCpQHNVHQ4YCFAaZpDewHNNvbP52JFUujhAXNJm2nuXQb2Gz4tzgSCwE9z7",
  "key18": "4hSw6XNx7tSQPPP4NXJb9NRyEKAVWZdBp3g8ymh8p1udhrZ7d1jGtVFtHitiQ8DXUD5to1Aviq47QWeB1Szr8sCg",
  "key19": "3tXzmMdeJvNPkM1KZRi4s5EHr7DanqX7CjdhaouTJEEMKRdkG9wByxcaSYU5tpnd7Uyz48gfrj6Z5FWJs4i7H4wq",
  "key20": "5hwXD9hbHgmQkg6KHgJJ5VKtu6oWbi5X2bavFmRnXnDsRKU2cEakzv4fjk5qyiAMKnKjfQxKghHANTbhQKjDqkiB",
  "key21": "3EgJRUkPbonYydVYLWdWFjGtNBLHkJxHTo6T4Bajy1Vm3khuJWja2bkiBEPvkayxVtbzEXXRL4vtMWPs2uoHe2aF",
  "key22": "5qLBuR8uprUEmyF7YGMzvudT7qevg6JjHfXnCLZdHhNUPdGXSUM48z22bm4CFRADiKiYZCaUajYjk5uEEX8SELCn",
  "key23": "4wFkNjjyxjHpuzFXwoQeRDNxxJmpLCWzsV38segKYZGBmr9Cgi2QoPtR3N7VBceKm4LaG3JTUa75x3kutk73yyB8",
  "key24": "2Amy2Py7M8ZzSgM4zTpdGLknzLJCdpvrg1jWio7226TbzGq1p6urkNzF84BgLtcdHFoW2Y6r1vTFYTJbHa4obv35",
  "key25": "JdFsnw5B2sX3296JUW5UmY8uxre7czb1MrhuEVTdd3W3aVgn1EUkZYRPXzDM25n3oWitrdwTRim2hvqnUFPQ6m6",
  "key26": "3ydboWLqCYptXEV5kLtyo6X4rAyAL31D3mYa73LqbXiSmtzbwSKpLnv6iKjfvptcAVV8h11QjnMytEddJBecxibC",
  "key27": "2wXcTexES5FSKK1wcEwtbRKLeKYAb7yXjRRGWQnm9i4BCjtWz8fCdkJAiBbW8HTxv7KGo1tcNYHB3cxHwyyu3z1Y",
  "key28": "3ZEVBEJjrP6nQohjCM5aTBotgSLwDuq96vochvsmPvkE2qPs5jrbZW4j4aLmJss2krPvgrXVPycv4976ns6r9Kcs",
  "key29": "2GGJy3KWMRUZfRp1o9vE6aEYgwVsXqo92HXEFk9NbFQTJwo8w22PrAFVzjyDLmG81wxxg3b4BPipnUgQuYG4H2gY",
  "key30": "5WeuS9TyCMU2uYmTScbXxD5WqhMKaT7mPVtRq3uoc53E5Mz2Gu5bXCugJGzceLmhZVTfumNraM8agRv6XGUjr6MR",
  "key31": "5toAFJvUj2JBBD1UYdXE5hWYKQZVKN7XtRJEi1HeALCpghdEsrt8GTQaCbLKQoRMRjrg7zQTkfuopwRrmHoeezeN",
  "key32": "3n7Tgq3BECGZP9wVAN5kJr9n4XMmpa8ULo3Q7sc7fvdcHWZsALPooca4Uwx1HhmfiDz6N3imcQzJtVyxfBSpyURE",
  "key33": "5ddGXqZ25DX4srr8YBiWXZaBvxWLcMngPG5icDmxppLt79w1BsgMpzzYU5ydF9eVfmgDJnAgA25a5JL8jKbNcHxb",
  "key34": "3gWxAKuWzEVNXTMi7kJ2u2MZJLF9m5fzS4KcQSaRYgz43TJ3cJeJ1GeheLafjAjyUEf5UsZsVgJFJHXjEBR4MiJF",
  "key35": "2BMMXWuoUJ5KTeQwndNmWTfpuRbpCv7g9Gzxcu6cSTvkV4rqLt3JmBBUFDXVoeatZoqDtGsvNRFoZBoQipo1GNGX",
  "key36": "4ZKkfv5z6tkDcm573qc7beXPkLpY4A2z2pSkutcR1gDDnVMpgsVQR23HirARRGLzBQEndb3sL7yrJVZnzWUnsBLB",
  "key37": "Qu9xvkLaqDwXcnoi8sBUiKhTfCLcWF2e71XmRtQcnPqCckCAXH4mZRabqb5FadpU41XP9wmidtd9aKarJJPhBKi",
  "key38": "3KGQi7Q76W3NnUcA47ekYK3hEihMVPZ5CPYVZbxPFXipwwAmsnmQRqJikm3DxpA9tprEMRJFtjpSqTg9bRkCz338",
  "key39": "5EY4CMG4EXub14VYNJT6eNWEXN8EG8zLrtK7SqmB7cvkex9NuL9ESfxousYwy6DPXNoHKiSFVGY68rK1YQPM6B4f",
  "key40": "pVcvSgrTjiV4torGtMS3GHSkudwNkpxVTe2J4C6FyCBshY5gLQovZ9hkQnagZPsxueVAzTTMRkS7aCfgydN8JSy"
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
