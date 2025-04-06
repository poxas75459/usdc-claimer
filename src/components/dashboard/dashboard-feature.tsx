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
    "5EtE4x8PebBe3ehmEkzys2MUQMZrQm9PqHZNDwuLpHUSz7VHYcSwWhshnGx2wh7rBeFaStsk7eB7QF9nqesM6QzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhJeCcG6eWfckmjjRW3YjUox8QXXbYFDHr3e2TpN3NV15k7uZXKgzXRCAEYyxkAbkv8F8ULA7fgRrw38vm4pEnw",
  "key1": "jRD7UNHS7pAojZVeX1ssxF3zMFiRp5qKncAc9G1AkQgSQaANhEtdcrethC93uUjn5qF2DvXstALgKKuNRZj65wV",
  "key2": "2Q9pxWgywYi2oT4RBQgH5zDaSdk7SBbXTWczjfFRHVekcJgitAr5SHLQb5JfxpjPNK15AiASLGBnEdmtbPPjU9pb",
  "key3": "TFnXwL4EUyUH178e9ErwSq7dSV2fF3AjMM573NrutswJHzxj8iFdSCpiuXT8cJGxnXxshcibRundTbS96sfYkta",
  "key4": "4GT13qhe9QmtDoZtGKnjgyzShRArVWbvrTPndS3CFQNHFiNtscW6StaPChBeXJzGPnasAQN1s2yKQhBrcbgJWFCi",
  "key5": "58wNEXNyJbZqiqZb8E2eLiUJNyeejScE1UZdK3d2N7SX3o3Uuo8uxY8uAWbSSp1yigJuHHCU2LCQEaHBnmEa9z6B",
  "key6": "2TLmQRd1Mte3JNABqCpueUKYyon6tnhhkrYu13DhndPNNqkxm29i5hfCtneLBmBWUygYiK6CT5E3Y5XvQMRX7x2j",
  "key7": "3f1D7UDLZyqxhdCRtMmpN1yQ4fFH16TakHgrYBwy9AQmTThFhXkoa5Ww58XgvUuyeBrFvwuHAYR1kaRb4GcWBS6y",
  "key8": "3eW4NdxRjTpv4FHjVPTp2kyxmqgQaj3KmYghJebkTuRkV4Ek7hu7NhW5JSVpuvbCtGHgeJtFekYxcftn93jDsyES",
  "key9": "2YkozJ1j4fgsuVbVqdAiFUG4KTd6XEz5uJaLPX4tq1HFrqjWnP741YGNarLFybnbzFGFDBZG2AAuiohYBRMrRhek",
  "key10": "3L6271hkT6ixrpiHKi7Xov8c3kX525BRFjPbYiJAWYwPj88ddXU6cCLawE1uGf1mCApXccuGfaP11U8Y3KAbEQia",
  "key11": "4sjpcGbkmMChZfgJzjjyB97EUUW6hzdBz2Ew7FeLRfuSmYXtGXxa8NzLFPMyebBcLBcq7avmHx8HMADEHfboSFKG",
  "key12": "w6Hzx1Esd1qgdRWY8XDtpLs9Npo9EUCKgzSp8gqawGgVVT24Mmxt6htRvCZgWHKdmUkWeo7uZEyxCGs87oB8BUv",
  "key13": "55TSvXYpjMdZo9v54R6WZGz84KadFSxpaKSx72ZDFYBui2BSP9UuDYZPNFipXvUKCjWoSbNKuLMKVw8Lax8VNfhw",
  "key14": "c1cvwnoSVBmu9tDNhQzUUoVduvWjRUq9VzVzUA2ZzBHuKgu8Hw6LeSRG846p1NJn1sVizi7RKWU6KqxSF7ngqfo",
  "key15": "5MJW2vF1uR9KEq1A6wwjUZ3wt7CMk7tf4BDdKuDL1Q5ud4gHgwb1i4rotiU3rqurQfetaRSLioKEHFxH8oBYBBR9",
  "key16": "4Z4Ea2fEUmdp1rNCuELDGXHdff16YKoMrcCbJGGqLrZaij1876D9PHSfWnqhCbqxSWwEAorykLQKChiDpRUJS1Mi",
  "key17": "xwutaQE6PoB9MNq37aTsam5NcYWqEyDCadyycHx9vd3G7WP8tDS8zi85SzaznDZBHCe4WP4cNMAsJMJMyLAfSaF",
  "key18": "3ibGnErTHejPfFd7EtFhwCfaVhW3tjXzYLr1RR7ruow8xqhj5LYRQQAioUg3BttLC5ogdRL7r8e3DJxzxCWbqqc6",
  "key19": "4x8hvwDESY3BF4m7Mie3Mxh6skmWM92tSj5yvuNNrVArku1WwyWfdxDCGLJfJCk9PfCQvGcbi8NLY9vYcRjdq9vS",
  "key20": "5YbkBQVDyvcnNnNAeUknkJcQ9H3iDj8ACLKuBaPuwqX4G3wWX9AE6eD4VG3Dovub4ujZHAaUibYkdksRcTrMbbhG",
  "key21": "4EfYRtyVYNbe1iyKxHE8Dnse5FT2HJDyf5L4LGoe3jBJfKmGC6YX63eeQqqqApXmdH3kmKAKk8bYvEATUa9B2uAd",
  "key22": "iLxfLcMFa5WLibFrNfwGDv8UUA39nqR6SCuPpkapbWNgWHtRc2Fc6PQL3kmPNuMZh5Fe8hg5LqJwV3L8x4yAi47",
  "key23": "fKskpK4Dree2zD6C6H1VKQRFXufCT9GrVPeaKzk5Xr2rSGuzYMdTRr3FYyVizEjrzPxUm5vU1SBbqzKVtpLMpcv",
  "key24": "4kqhwGmUpvFnszVkvxL7MDTePN45DypjA2QEG6XX5ZbeH3JPGX5KQCHRuH1F8TKZMgosdWC7sVBdDH6UacBy3zFB",
  "key25": "4KSi28pwFBvTkmBmrxf6KYaugHSz9J4F93REgj2KjYzSRD4SjiWckih93twGhzrhQr4u6Y1hh9MaxaxsCMRVG1Er",
  "key26": "44XJw7vQz3pwom998q8tMvjZWdUGjjAZWXcj9V7cA9SyJ6XQaAEs5aDHQnhqmFTZ4nbhZFLhJTH2WuytefBAoS8h",
  "key27": "5pSn3WxcwMmhmdfCUx66dCT7rzXAErHeUKCBq39jgp6LwDb9PoKSjcBYGTjijjG3s41ExVSe3xMKbeCXV4nM8qLq",
  "key28": "2vyUBH1gCBWEVQ8ZJsCCPkEfDhUF3SFQANVCfuZftd1uU9iZsdYhkAhgYms4ponKGa1VEHTsZHb2VG2qXUSmVtqS",
  "key29": "3xzMpmkwtPqvXmof42zGDpnVn7ovewQkWBQ2P5WL9EtyYvJpNsKARN7XHKw9Htt6G1Ce4aRJVvv8ftVxghUZnSvi",
  "key30": "3nUZR3JrKt9NoiuZxGT7Gq4DtZGMVWDuDTtBnVjL2Nm4tZwwFWopgTuYwVqSLX1m6XmibK3F4JdkfK879tpuYrPg",
  "key31": "iW7zhS4YhShVWMxk3jbLynwhxJ1ondiLgBVS7Gw15hMs3j2AKDWavP3kFv9RQMytCfpTVQyc4XV6yX3XEyRY4rR",
  "key32": "3x5TyLPNzyZ8MkNWmswSr6FgeUaRHCjxhDMkh41FaevtfnpnJ7PVLu6NxLfYYsYdcdFBanN5MCZxzKCtr5W4gG7d",
  "key33": "5eu5UJms7tVhfgN6i9ksT5rm4wVb551hrRGQS28fx5Cq4aJ8cKxe7GiDKXoB3RgA13g96M7SSvokUTtQW6qaLkd",
  "key34": "4Mi8v5Yc6Yr8aUj65TK5iQoXUAqeFqbAuQFwocsF8tCzuUqzRAGwm3gifdNEdJ7KeCHpUB6UggJk1gfWXdGpZXZy",
  "key35": "37mDxsoL6tG5cMfhX1PVCNmVgFxuhpgVLHp4mASrQJXuKrHC6MzV1Y9QKdRXMrKQuADNzCseASmTZ4QMtKPRMCJc",
  "key36": "4MaxM7hr3xxagEX8dJdsVkTdkgEPqdqP58Kg3wm9hsQwi9YnPJWsnaLjM9gzQRkXXuD9uZAYuAqTzgFeT9b2ts2e",
  "key37": "4DnNMHQKSVF13Tu1WQ67H9Atnq5G85S9kttf6Zcu2wqSAVGEUN4riSm5HVS1SKNHY2mUGsQJqmoVx2JV79sg3enR",
  "key38": "3EDVhjCMSqrHvv1k84wBYkmKZ4PFhbi1Nag6fELqmK9X2T89WGsrYUnhzQpgAUtcua8qjuSpCPjjFcVjLZZezFHg",
  "key39": "3qexaz8phcykKjPxfEcdTJduPF4u9f5QcL2DhRum61p26gj8PWiqgUTRdWBxNba1rxFRQxtR1aWeiSYfAcaVGM2T",
  "key40": "4t3ZKYpikZh7hH3C3V67U1dWa4g12hMLDK8dUuJmD5vtCLyXcjM6YJvgowMmRdpKrD91VrWv9mgyZCTVQ1u5BU5P",
  "key41": "2CBd1Pd59H49JVqK5dUgUHvxc1HvKPb3Wf9G8p39xLbfAmZ2PyBkqsssLi8ngH9R2bPCt7TMnvnMV2FA3eHLDTko",
  "key42": "3GdV5dQcrWWxtoSp7PkgPxUN6uqHjx2xBCbPc4nTGXrmccVd3aYH9tHDBTf9CNRcgq86Yrmbhuoz6DXdn9c2NXFe"
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
