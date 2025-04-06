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
    "vn4DrcMY71aXz8bBbemqeQ3nkV7pyqfwdtX6GnakLy9iH3bPs9WU1Wf1EgSi56ALrJAJXQsE2Rtj6PvRVPgdWhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPtGLDoZapq4XWKkKbUQ2DpXiAGqEAWTHLHQXm67pVNaXDUaPpYqWE1nRMp4GBC7PyBqgniK5aqMGeSzo9Q5ivX",
  "key1": "5PbMZZRwA6SyUdT4QhNxcGBuFFnqPqQThTkyqezb9GEWkxGqNF1Mgc3bqWDegW9aitCHQiX74yopnynk2wad3sDB",
  "key2": "4s9opXutKqM3UG81vu4gLH8GuBBsuSF8AXnpNF2jJWDkDu6HS3Nu8h1tyuncbxskhkQQmxReeEYKChqBi6Kecf2X",
  "key3": "5QD9zoMrdVGtjjinfUWeaMApUxDzVjPaHuCvdU9miwk98nupEkeahSEDR27sBjUJ3SLfQJvkjEuGbsqomEksqKBC",
  "key4": "5KFPWtr7HoRUuCmxyPyWibfsR82hGN5AvBDh2MhXFBfbUPxjyzdGNkUHccFXdcua5Wan1cAaXrDCWCGcvchaGyKp",
  "key5": "fDTgryxiMrca7TpambP8jAhDzPytLQp1w1FzFrn9544BbvzqNoBJh5Ym6GbYdhGgCuoeryvPP8x4wwywoFQFLQp",
  "key6": "4Dbp8x6is1CmRpupYpcTs3X8v2ypvUr8JzXusfPyX8RCFzXSDd66sC2MzfxUXZWUXTbHfPgb22V8MQFpFWfGhMf2",
  "key7": "5yvozYE7ybmnRbSUh7tZXXprkxdQiqih13HzsYR88RaMfHQUnMmEtxrtdhSAfccUAU6sSbNcGL5ADguK6XQzSgwt",
  "key8": "4SVM7NtAHdgiJXmvNQh2F1oiCHGQksQdXRw2yd1bmJsNipx8WcKGw2Z4Sb8NvUMZ8R4i3D32bJsH7hMvwkZFEDyL",
  "key9": "44o3Yxbc5enstZvK9F721fH6usXftUdxBEhXiBhgaL54dRkmWKt3a7JWZZG3tQYM4vhFufwJdR1iW3JmfG7oUCc4",
  "key10": "2TFpWro9RLyMeDekk7G3Ff1hpn9EUvkDTYEzu9suCBNEwLaSdq1qKmsSVukJ7r79meaC84XJjffGxwQ3v1GCA9JH",
  "key11": "5z7873aqZq4aXMB3MQvr7tG4g8mwaYCbNKh8v1mJXtwvcCrEDg9YKU7461sUC49enVkL1UgUMXvE3Squbdzra9Y4",
  "key12": "MxQedjiJ2YUb762yiySTSgPV2KVTP448V2B6e9Ykgt8yPFFFbAgvktD7E9RKw7ceZJvCtwwXxs4hCzC2UoHKcXA",
  "key13": "4VvPDPsarBPSGBzPGnbz7pR5UszRQcGU8jMkqhtRG3SWbwJnJqgVKpA9vKh2oyqwXfT7ixXMvaQucehKyJy6zuac",
  "key14": "4N8TUN3otC2G8HKpoHR1ZF6c8r8stRutZqGSxnU4azsSKoDLn8yddNhC6xZ3ARTtcTgAxVou1tSXce9B2F2bz5EK",
  "key15": "4bodrBamEpHekdQRgX4uwzXUoW9iw38xVtLMgSBDfuU99nMwZL63JBTPtmyfCRvnGYTGNBRPNC8eSRffG9bmiNpc",
  "key16": "r9Fkdy1sR7QYhv7JKkWKJjMzCiCScs98149kpahJF326r8261LwLPs1vqb2ZwNT65XuRqNiHFeiaRZ1K1A4B13s",
  "key17": "31rt4yZRN6i7ThssmJ24UC64fsJuicGMsN5rbYwWoWcvxfywLv1nGe3GqG6byRg3zyj6xQ5qbqno2u5pnHrQhsLP",
  "key18": "5z2S4jpJ2aFN8ysUfewgfipWaB6SU6Eoa2kbRNhebmsdBge9T5ADy64VuvrDdkmfGG8teMsodJKU1D4aJG9hubvL",
  "key19": "2eQbNAoG1kTUzQLgX9bXKMhNrZWjTkdyHf3SV8LXV13WYVrRzvyfKjfup1gh82FsPoN6mRH6eQL4dxF5gPRfkcB2",
  "key20": "22Kd8QV7kokPYgAMw1viwYCCNKFv2DNqSF1XVHBmCHuAa8ovHLVmH45mqnWvjEcfBoWfA3xD1MHigqmXj2VE1pxs",
  "key21": "5EwPKPuF88MjQ5qPnbodwfa52ArVfsVU1goevb7YPzsSzKFDwdH2gfFs9ivVyBzCdpQREhUM6gg2mPexf3TsBcTH",
  "key22": "JcBP79v4vBuXZmLFGggfNNneJihm1w16hmaAg8ZyVNFjR8HV38G8ud2bqdHhU51BczMqMBHeUkuRR6ktrB9jLtK",
  "key23": "65Ek899jUS3Y923x369qm9YrsdWrd7NRjovXCwfLGFv44HbzSPMVNyyNeA4XNMkkicq6vGDzP8k8rqzA3ATbfafE",
  "key24": "5kbSv1ptGgLGd26sUFSoHktz54yEtSPdhmeVLBnipZTrZS5prxQN9WRgChBP2zpMh6WYdTwHiXufmxrFXBDxFpWQ",
  "key25": "3E72Dsw7vo51d3M82pMrswnuQ3wQbWsfrHwXhU8gvpZuzUe32KuHvnWz5KoTowwt6E19KuEynpTfXGjd17JtBfbL",
  "key26": "3YxJHxCeMbfQLmMc9aYgBpzAFe5Es2qQ6Xr9LsUHKZamxapXRAbUN7fUTDG9wKM7LDg5gK2beRib4CMy7RJUNhuU",
  "key27": "4NiPP1xCFjgpk99bunmfvsZHCSK9BHqzhdRZQYzEsCPyCgVRuifJJjzc1re39aTbPpa4ZVFFM7otqkRepTUL2PPQ",
  "key28": "4LKiq6B47Q7bvURRzkn7t9fxnNtDVKTJAKKpsGz2Wemn1hp6uNJyG3HC2qLzw2z4VSmpUjFuMdN5Aw6wKbycoTLB",
  "key29": "4fmVJuV8fgWEkYUthLMG6vifLUNmY8hZqKWj4bptEBXuqnFynEQjBhrcPY3iRyMk5izYi9wVHnz6wBkMGeSVVxmj",
  "key30": "4Kj5qRm9c9WgVCUW7GKH4HZuQYQ36WXeFpguXyvfGcvC2qUjrVcX7n22BZerYC2rCfEsWJot1y1fFWJC1CEn1Ku7",
  "key31": "4qwcnBYBGqXEy9NYW465Fb7s16GSsvdTbGsGWVbab2jVYsEepe41e2CuPi9iqPrixPmiF3nicdrBncRTL3iU6oF5",
  "key32": "42G56bZnvk3A1pY79zuQNG7g5zjcG2XNBhTU8MAdgysbHnXzjv6FRBncPPEoSSLvU7pmW4WsZFZBBr4dhUnaHQVb",
  "key33": "AHLMRJ2xzY5gBjj9R8Qs7mKxEQq1fM77MgqFuQDZTKCSqb767LCCzJEKgwd96kRgmYp4jmCfcg5TYdoHBSp16Zy",
  "key34": "2X8JhbCvj6cYa2y4LmniYnppbFnfuGq9rgsRhVMHCw26YLmqSjscKBAZoA8YZjfX3uhtJnuB8LwKUNFNkKEx2mDL",
  "key35": "qPVnPPULJyM7hdLJHxr2oAUmdbRYpnLmae6UAWMmAPp8jJ4aDTGgYWBnWK8bxAbzL3dkacL65evXzjNj4xpduWA",
  "key36": "5bHPhBJeCuCSDfDN8RVc5jPefq4GFFBgYQ5nHQ1eLFkSZ4qohF5hqC7zy2KrniL8tSjhV2nnxcFUaJTYVt7NG4z8",
  "key37": "61U1ffN69mZfHVQUmkm4EjhvCj6DyAE7vfkJ2LFB4os1WPdhCLd3q4VhxMQZt9oGkq8TMhCyRzEK1wcXDPsz1YP6",
  "key38": "NQsBRJV3dYhP6EbCiuATGpVCKnWaBhuiNMggW7jKuhgbiJryrzBXiYtnraYEzMYro5jbgwiuqHezoJpNr8h1WHs",
  "key39": "3PrtgXxBa2uDhzXu7NZHXmdGRgSdSYVeRgqFsQXTYc365ezQupSFdgQNyBNzfyipdBg6LE4AMweQheE52WBdymVU",
  "key40": "4YVACi12SUfzKzbpFQBBxrZJQGLafxpRrMBZJ8CHjmgiR2FJ8PpD4xAvpyDLDyCmFnJzB9FZD7wLXq1E7zKt9v8a"
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
