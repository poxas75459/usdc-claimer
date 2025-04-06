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
    "2tpfAzqjcvvsnr5STSHx45V1WTH5BfTZ4piBct5cfJre9hTR7bLn6WUEqpnF3YAhHLe5acDdTE7etjkVmZypZJCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8AUsj1NaL1tN1U7EYaMsmyxo7qG9BqDL8t8pS6XV5XvbqVaP8L3xFEBaoYKJreSCikJJMqwfwZJWkMJ2kLcdkq",
  "key1": "3MAnjdHLGNwfLSX1E9z1Mb7czshw4n3ufvFYQEY44EJPYu87b5uQM2neKZnNzwBff9FpbDHG2ysMatCWSndqL8Qc",
  "key2": "5ZpeNs8hBtaYMokGDd5FS5TeKkh4tKrj5gpBT9J4cgFyR6nWwSqFWhDbjSfXfLNbPFuSP1shoCDzwuohk1gr3oWj",
  "key3": "59Vt3BnjaZ2NaxeFQxKEBFZ7Rf8cjpUMZvcxfrZXj5G3e3GhAPqhm6v611MnkbrABKcZwUyTX5jTjJ3T9rafetj",
  "key4": "3gCeB1dtpykEX2vkfNheijzaf9LYPmdzMsNUfyEbgFnQbinfHkV9rNuXsUpL5irsDJCDSEdkzqT6AtqUWfqKHTBk",
  "key5": "2VYw7MGiMXZ9BGCi2XRqKmozxw3JzjHm7CfTdrqNYqZqAuyiYjPUyUec2ZbHwwEDqL1yYuUx8NsJtchDsnx9beqz",
  "key6": "baUXTCnkjx39wjZJyaWP1gsTwZrXRT1EH22Fh63LCvwRho9LfnHQQLPvcCHeNvf6uS1vLZKMzg4Ny6uVFPWEfC2",
  "key7": "5Mvcg9NtUCnbUeP4gtHdJjN3dgVWPX6w3kLZ6YhA7LkQvWhPS166cVKERWQYcxrkgbkNtWo64KCKSXmtnejjDnrt",
  "key8": "gyxbktpdHHWH9nMCR9j1TU76heWKqB7RFU9UaJV78nu7NXt8VrC4DY8qaKMz6Sh6QJzuvCYxPBqPMVP6afHW1VU",
  "key9": "5kQuND2s3hGi9ywdJyQwPgaSy3aajmMR3NkAf9t3kV9wmvS6Rbcon83H1M3KQnFmh8WUww7fH47vfYbRW3YFwyyb",
  "key10": "2p6anUbjRoBUymCeZzztnysdWFJC1uEpRYvNwECXrYH7kryz4ZkWg12tVJEkDz7iVa64XLMrr7gqh7oqMGJLxo4X",
  "key11": "5q9dShnLELsA31twhFuRr11wGSL6Wr5tQMouHLi4kr8A7TAC7u3bzfhtFrMNRzG9ruufMfBeoBbVgNbByzVKtUnP",
  "key12": "4ijEAtZxa5FVThjoXUsVeLDFiLHgcuvanNTfEJm2ukLCBCxFE8D927v3SLPSoJsRrihhk4g9enFUgFD9B4JHHFJk",
  "key13": "4EMYE3sbasW3y4pgm7Fisz7QxY3n4qJApRwZb5KLcAW2jBjCs6Md3MMk5sGi6niYoqJeQ4fCmL4Gbfto2D8KbayY",
  "key14": "67jUoHvcgAo4LuNsm2CeLdKcnCTg7Zd3RvcdzHBnyCmnhdDaiiYWcXFvsBTW6ndFotDFkvqbK3VonwQC19Kxoaw1",
  "key15": "4hGK5AXARFkNKLKD3RuCyBi8jrovhGQQ4z8oPjPc9ETQWd2CY1eptvAybuz1B8H4QpgBRZGqGovAjiD6iPzVi52v",
  "key16": "5p8cshNkBMbmstWerh27cx4cvD69fbDBC1UbvzCGh8vjdrapau1uNpDBDCqnEfTYMz1hUrvxNxhBxPX4oPhYFV23",
  "key17": "4ubxviP9G7Zy2Pd9u8zMpWmQLLZttChVQyNFoEEv35N1HeyutsyeRLJngtRPXoA9aJCBnTkamMGdwdByKFB7Fqif",
  "key18": "4yU1pBYQUGGWXJLwJ8ntuJsw4e4uSXp2L8mx1AFQL2TyM9TfRT5ag1ATqEVYebG88MptzJwBt8Kt57dMakGmQcU9",
  "key19": "4oZFQwZhZCvW7iy8FKhA6wJErbuApW5LxwoqCQ4wJq3tmwYx2DEPRHHETqUR97bSNFuBNvk9s1QjNbgoaE5tU3iM",
  "key20": "2gKmLNJ8eMwYMXMhJbBDm1bqeXdfrWLfiaumH8ZizUiFrmQmBxAgXoZfWXJhjMgoi6t4zc4C1p9tWfTgpynAxu3M",
  "key21": "2AK9snMgmznwL5xD6Hng66pgL1ysgwiP6xZxpHtkkzGqg8ZrzgJTFHfjjPWtusHPA4tyoqmyngYKQnRqeGe1ritz",
  "key22": "67AoEB7HwWrVTMZfzsCzxKZnNmNPU7CEUxTPxVQumFzn6EKVY6zf82AhAsfZ9AR8M3pyvJC6iCHhFmMv8CfYabjR",
  "key23": "3ZtkaTSX6E1fZRHra4oAPdxbDhFfp76xmVB65nwCWPfVh1tucGyU1x6S2HPrcVaE5ck63nRXDAHvZGwYuHb2BRz1",
  "key24": "3vcKoCSLhVr2k92kUXSjYjxBaKUcZciUB3ydoiCDnY6oDmeEDS2x3dfBzbCcRJpw7kDvmCvCdBoHTZPCgPbuwqgq",
  "key25": "ixVK1uNPrKETSK82b8XqSTGHz66DijoqXVJKBpqm2GXLdp4iWqJ8GkyhXCsw6TBZrmAnWDy9HteeSH6HStijy2F",
  "key26": "3xpvus3PVULvzdPZ4yhTT5aRZQVyN5oBimPm6mCGbxEaPtyqBrDKETeCdYFm8SohdgbC818TXaGDztEsQUoAEnKr",
  "key27": "24WcExgevJoS4VWyDVmHrEA7VCuJDhUPhW5cYxCfF2WsGEE6rBgV3LRJRw3FwfhSQHebxVxSZcuJ2AVM3Tj1QNcu",
  "key28": "5zWjrhVLNTuWEpojtYkRn2f1AGYADhnmsEZLAHT2AYK8fEmMsyWA4VMR9yx3WHDKa3p5x565iH1kHWu5vnxw12ZG",
  "key29": "5MFfc9sEBnxYux7gpF55ei7ttutnyZPxuDVPA53dx3SVyAYTLzXPrrZ7naTf2sdUHykhzk4xqbtbVTCpJHXGb66o",
  "key30": "5XVoj3ywvZMLB6wuLoLmd9dgCaG3Uc9UL9zxSKWQ3LkiqNk3VYnegPokuZz6Z61gX4nahc8qi2K7ordr4Yoqdk9T",
  "key31": "28seNhvCae5bhhakNVwQYimYgJv2BCxECwCk8VVKH8KAXK6XzBDw5zr2NVZPKjsV38LAFs5NZABrd73x355CzHqQ",
  "key32": "53s5hNUs86Jgwkajnfa2UzQYJn9K5BomNwCpQp6hXUVP2FxzLMUchfcrFeoEmAHiLCUGaNHzuUMmcseubsFRQvyn",
  "key33": "2W68rQYAu9Jy3avrMMmMWCEz5X3ErCMrkcm17Fv6tPuyv7qyCeUXqU6qAPgeaTUKK4oPX7ENrxXqjXW5cQ5TG4JR",
  "key34": "4kpgMAv44bHAuXpK1YzxpS7nmafiT2Q6JAogfMJfyEPGhgMUEcbVnCzcekZ4o4JKa6u8kosSCyrR3HwrzFeKyfxJ"
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
