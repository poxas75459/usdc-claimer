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
    "4jeYbXfHeTrG21hoisEw3bnFPjtM72Bvn76JweHRQk8BP2VeHHu6n5k9u8MHFFaL4xbCaJAU7ttCcmNCXQhDG9ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NnN21ebuYZKg6KpxW5kWuHrHvDmdJCgF3jTkDkPoyNUMW2mT4B3njJgYU3ahtaF9TbvcY4CQqKtabEzqV2znYp5",
  "key1": "5dTyUtFZ1CJ8wfLEGe9rNmimtGn8ecgqm168qrUm7JwgjYenqh6h1YWXSzCeVgK3AUeBdH6xeRV7aRAZLADLsDNx",
  "key2": "3rV8J1t8UtT4fYcy96e7tsqus6q3rzZymUZhFP2R1bvpJiF6UgWcJF3AwAmfyQ4N8Uu6AuFj2SxJzLTztLNW7TUw",
  "key3": "3pmbgvoZ2PYVevBaDPKWzW3BBFSbJjy6b6zE1e923PjUowoeiBirNKLBnertGrxgnHiZYVHF69QdLj2NwL89ibe7",
  "key4": "zf3Edh16ANRg6NZYPLJBBSuLNifdEwqHWKe2SFG1tpp842Anh7MFDrgg7txrmQqYr4QEz2CoJCTgmac2cUzNYaF",
  "key5": "121fF86cbHNeEN5PPWR5cF22mvgDPrVwp5VP8tHNdLzCGKxiY9YsfSFcraPj2edwLBFmEX35DGrqPJCCH5NumGWA",
  "key6": "43MfyBVnBudm5d9xmh3rj1Vm9SkX6q6Yq4Dn1oaZ8geaU5E49XDDKAerydKKHTaxn9iy3vVCWMAmskPHHAsYxcsi",
  "key7": "4wEZoYWR2kmRX4M5e1zwo2o1gSNGB4F49TzYPcSSHPmUQvk4STjssKUvfexSbCjQRJewNJsvWsb4RcGFwMLJL3LH",
  "key8": "58tcaLLf25xaRdxjGw1Eats9y9VaibsArn1dAfC5NpNWrbKCqAFLZdFy5oQcMPwcMzqy5wjf3o47xhpcKr6W37Xb",
  "key9": "3sRbEWxggFFx3zgtMz36ap9VA8i8cGNTmATXD5rSHxW9c4BnndxzhUJweCMF8NM421wG8azvPYuH8FykQSyS3sAn",
  "key10": "3ddDb7LDgKm5Cr9HJU4aaRwjcP8hxyry1cDTu3LMUow3nXqB5eqfgCJ8Vf9drcb5s41t6sXU8Ea4RuzrHKXfFZAV",
  "key11": "4CukfhLCH65xTFtykzauLNRAYf7mw7xjXWXRYPnFCVcsqnJV9ZgX2jopm2Ec4Mr3MLofiGjzbS1LkUucmuLcF3xX",
  "key12": "YHSS166opfXUK8HUrM69uv2fMmyT9pLw4fhtzdBw4zFymi9EFMKPxi383v49neTM1eMmYJfuzL1Uz2UAfBADoGL",
  "key13": "4LnW8mv7QvgNjBcb1WC2nnhyk1V998HBUyQy7FMVSQwQ71aXraFPjBiESHcBFjyarrH5MNxCJ8tEhV7JCqBnzdvb",
  "key14": "m52b9yqH3mMZUMEgVPv5RtKn7rJWxAHLg5PkRnJZSCGtHmfdkQaEZZneDm5JUQ7UTyFVoT1gjGXA7w6Njf7wRsM",
  "key15": "2pBhKTuHnb4Md7QKgsqcgqy9aWZL1ghzYuQJqQwkeuXAYGm3L9pZ5bjEUwGb97nddSyUua9h5LT5UA5ztF3WvDhi",
  "key16": "4YGqNxi8B4FeF3CMZn3TMEfmHco6FHnH7j6ctUN22jLtzrwBaY76iEMEzPokdVbbHh6bLjGoD4S8Axt5B922ZVXq",
  "key17": "5MPcee2SgyLhkQRdrFNDuJtmEnhNpnX1LM9x5by9rexnNpue26BpVV2exXERhhSYDhqXU9VJkEEMuaP2z4QEcgAE",
  "key18": "46VKXFrfC8wzPJcUHq3b66edvhkNqKekpdBEMeyysEmp9ybGsqrrAhBg9noUGjpW7zN27PKkCtTDtMnZqgKL1WAe",
  "key19": "3x2PrBJ33cHaKrDQe3CZ6V1qb17hQDigHsSfVgbh5LHN1kYitkdposxcPTRq6uCmwhmaUPvHfkqitZyUEja85UQ2",
  "key20": "5v6ieU3nfPQhWLJ7DU2DCUTSLpCerPJ8UgntgHvuPFooiNnU4hKLRSsPYfhhy8LqfHbu9YNwvLAppmHi3EYmifsV",
  "key21": "3Stf73Ns6cMnYLZxPboif7rJTzy79pYSeMeAfdAmCpWB9jTXBF1y7ZyTqzPkKwBzsGW4PFDR7y8MDezP5ReTX3Mn",
  "key22": "2Yj2Z59TbvQiuJTeA35T38nEPGpp5SY6b8cTrLUAngBZFtKpMTSvnoxf9foHNgojX3jBVjPndMom5YYLU3xHbNqY",
  "key23": "2HUF3uyBU7FMQQ9wDg3SqAjKX3ddGULDGazozPgDNESm61wvBrJsESqu89HfD5hQLBMDXMcdGUHxN7TupFnx5CRV",
  "key24": "4DADnXpGDMgQXwXkQR82xoAEbrXVo7nGMXkqjkMrLjxmLpujB3x96hJVTyKQk394t3bQ89BqDEfWD4Zmc6Qz4Gp7",
  "key25": "5YNAJTzgEdtaewdyG4ESJKZ4SyFSY7bJ8yNyJdxNKXpntN2uxRKY1NW5ejND7rEqEWyMjGXZg2zVFxEGtadbSUc3",
  "key26": "5NXMRfsHvArR4kaS1WpgmoZ6vVioe4YWigkzpss9oFkm6sEwScXftgoPHHA2s4YSh3QZuaVdpydbbLoiTGYmagJF",
  "key27": "5EMZhdxaUS3hhFnJ5tA71niXDug9PhssTzcJjhjdJGE7LMMttTtGToc3A1SihQCigGGHsxTECjukjUGikMh3hEz9",
  "key28": "zHUbvcySXRQgXAQmh2AjM5AEPwcdFS9oBioHie9cYUVaN7eF79BPze8Gt5AnNuCUsLwYaLNyvJe7CqH6mFGHp6b",
  "key29": "6782pfCkEbGed1wmYrLLzos4oP7WRDScgh8ZdW35rxNPbPoowvj3BkuhhiojKnh46Dko6kzj3k74gaxAAqUgs4Ce",
  "key30": "2E3BdGfQT1PTakpyH899111tYAS5WkZc3nJ1yMPGzeb3PAwJBnw3m3vzRyJ2Dut6VvSnLH1GTAybhAVvEsLDxh92",
  "key31": "2iUBTJLM1LiryC59CkreWYowrvDXWfsBnKHu6Y2t6WUwiT5F4HaUzGhiovSAfT4oiff5EkyWWjX7w6LxzQi6Rfry",
  "key32": "4HUkrdAYCjwkoavkuMJaWz9HTX5ktKuPCXLgECKQrMHAZzEmiHR9E5JLx7SbzXbUZpt2vP7cABseWGwSr5pB1Zmy",
  "key33": "5hUrWR6g8DEEpZvDjBY9hS9pJmnuJ6ipyseAYGHuE6qgJwkvJ2xmim4nY6C7EEG7w7vbEsQbRnTpQzQ7pHcd7uVA",
  "key34": "5S6jr6Fz7ycpMn5XEq11RFoYpkkg2Cdscxt8GL2QpFsQRvAXhVeZthvBsGfCBkdAnXJ2HrZHA6Y1WyXeAX2dw15n",
  "key35": "4jAxaWHB64PN34Q2F4PqaYKb6ebBPpbEdq9bPtSBcQcNBZTgHpubDryJiUsaGy8pkZUXL9j65W8V2w1AKC9oBXgo",
  "key36": "5M7GP2LeAMG3SZvjggqLS8sY9X1CEBYiF21vDzhVwu4ny4Vh8ye7bXtbvphSvzwNeeHiLqbFMKPdCnshYCTnvnGq",
  "key37": "WXuB9ox6FxWQpcFdJJmH7Ai5ugb9CAkR6WPL26jX3cErrbk4BAbFvqiZm3z7bNW5Mz8nLosVAz584qyBRxKNvNW",
  "key38": "3ESnkZkqyYsUAEHms32AwBK43ppqaMHVXB9S4R7HPaEkdnDrXLY4piqt3ZcPuzsQb9b23TyCYNV2fZ4J6unjaj5d",
  "key39": "5ub6T2XKzA3T1g7ZkRhqhCmsfK5nPohaFV2aHUdHXdV3haSXeQYXa8AWF9LAQQmgXduGHDCkbnPzNMWYWghGgKWQ",
  "key40": "um4o8rzb9xGie3GT6k4Rjyuv91X618P8whRM2x3jBAoYqBvoEL3BJnh4T9KmvwGAHmFpTdPLnpNLaSRnr3i1gYv",
  "key41": "4xh5hqP3ti4ZzxMRLZJrKi7zbrVaf55qwqNVMJfSbfLrYpKEFX6e135hxPkmRgAE542jqNJtqtNSCApYQsb6yfL2",
  "key42": "65ZgiWxjVPFh17SdXQtFkdQ2bzWMVPTqBZF2pZCwtWa9vMYXYT2U9mMCgzg3RDJbwvYhZZHedHzaRYt7YkR4a3WT"
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
