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
    "66iioy4LhFSoR4HjrVb9KD8687JKWWxGMUBtY7hR9EMdb1N2RksMG8SZfp98zzfFAGhbVa6FRfJYvHmBJTA1WZeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjZtpH6bd6rWwUthDEs7ecnH7nUpcRMQfQu4ts9J2DoEFqFmuNfEwR8cJM49b4Eke2qxMyDVg2FXV251HcFqoEv",
  "key1": "4KBthBTwGRihsXrt6odkVH8CeCK9By3qcEcZEDt8ybmNeAvC84WqnBToa29RgQb2Ka8jjS7GpqhETKgZTFMcXikT",
  "key2": "3NgFnWibBu8jJZte8GnDD83NazrdoNFzw4DdcXC8vNmLnZP95w1wEA73SC9gxWD41ycQQNxxQQhAZDbPztdHmcv5",
  "key3": "TbsvvY1LiqLyidEKrEKMV2eLcZPCKs8BcSTRp6ECgMRtYnVauWdRByHoem6UaRnme2V5ft6DQBMW34dEMNQjXUt",
  "key4": "2uBCtJwaTcsAevEcryAtfi43xnb9E9zgrh55QveKrSvFzajHazCPMTkTNHk7b6j4LJ4oSzQEPpoFtSgGgkS6WAwm",
  "key5": "2nSZBQiFW28esUBKKV5vcmRnLXHRxKb8j5kwQYgGtF2HPQ8pRMDKSY1nNQ9BfKXp1Vxq66r9reh3nTBB5JtLZd7S",
  "key6": "3b9ho2zdoe9gWRsiE6myiGAakz4rEwfN9nZ6sA4JcDTEE4NMr2GTzjUeuhwgSvSHKQh1oYXVueacjyd7SjDdqn4a",
  "key7": "3NGMqSHVF8Dv2oJHrhqXftoYZgmCJSkDHZsGWjjcvLC859FKMmLnPWYtVLeysTiU79N2v7D13HrME3sL21HmEspp",
  "key8": "5wpFmfXfmnxfCthfh5qeQXD4NJ3YGg3yLAJsLDyNoJMZCdHf4hCY2Mm6ZzipkfKrNwdqq6fUjaBNnZU7QRJVtL28",
  "key9": "587PSWHNaZonQY4KrKypc5NaAL1LCVD2NSfgAmzvhpGX9Xcu5Uc59NaGXKyFkQkWKNuncM82tZgQaa4DxkeerPTy",
  "key10": "3aoC3icoZLNZRbp7wayYdcr9VphqeiF6G1tGMdkWSqMiggh9848JeenRmpTs7GTiDxSBXzaRVNukYjfQYecqa3Kv",
  "key11": "55TZz697QzHzsZWFnpbBdtafiU1F1Hotqqn7KWWX2uC8nLKQxZwHrotPDi867YcDZWCbyEsA45TWR4xzBSPV5ZyU",
  "key12": "4bm7B9S4ADzYd9TcZ5kfAE6eo3VjSxiH3E6cqSPncnagiyJRwkXenBSCfdYiikHKSQJEEqBm2R51FMdALEeJ5mz1",
  "key13": "5SuoPuDHMYBSPQuoUmhdquLUi9WoX8fNXyzW72hHWM6WZLpW5Az6691UdgjLLWPBVptU4rAgXRepqcnisnHKLJRA",
  "key14": "bZY4Uw2M3Y3kRSeY8v66phsU7oc9GXsKXPt6wYT2AYBiVw9QoNLRPWEPiU2S4LeSsab5qZbdSozMViT9Qux9KyW",
  "key15": "5iiuAbQABKNFcnob8vVFU3gnmFyHPdAL5iZXqehgqaiLeVzPaFwv9dG2TBxh5eQ1s49LDHSnsiaYupQNWrkjLW8",
  "key16": "5RfzEdzdkL19gYsN9gGfWJBwft17iujN7MYueX2mY9YgHwatYb4M8gYobVc3GGT66AABHFzeqkNDLXagckjbChPB",
  "key17": "21bxFF1KHXcbTWiNGhiioFmixDEQucDtxFSfuVvJj6yDu1zDfkqRLCH8ynxoXtqQnbdYPeTEp2PT9jr1g4PJwjzh",
  "key18": "2oYeh8jz8UwCCypAkGXx4LZx9NFo9KfGuVqsPM416gfTDUU8S55UThkPawX8LKr916bExf834v5edsc1ML58Vg4G",
  "key19": "658RWimg31HHyqL2oBRx6r8e47ZHpwFUL33DqgkiJaQYTjXyHSiJaFGaxjEYh37ZqYkdPHME8MtNm5t9KeS8RE4L",
  "key20": "4H8D9GuoaqMNFtRYutNxhpxRtchJ9iuLJmYE6c8GnSWuqBUnkRze4Rc6qHAMuK49LQhi7We5YaeQJ9zPyDGXFy4x",
  "key21": "3cCxnkRryDwKMmTUF7HTWWxpG29jyuTi3CcmTQFtXzhs5NTm93a2pmVy4ecFgnDe4EupLvh3UCf5oMXKabQYsNxE",
  "key22": "2QL9jU8B9joispka3HmLe1DD7fjWAkM1xv5M6W8iiW3DTeNDbr4g6DbYnMngBRkj6TqnTqr9D91u4ySzmLSgwxtq",
  "key23": "3xu7QbPGDsYcuCDTrAoqfuZJPJ7pcWt6MTBfPzGWQV3toUYAr5sG1Ciivrft76JwNzE3RMaLppKkkAVs3Cgq2pdx",
  "key24": "53sFuZobYGWFYWqbbxkJaKnKpEuEvY6d2cr4Cu9dDsms52mo8v9k8sy4w5ZicKVp8KnQfRKkzUHeevk88SLEdWDF",
  "key25": "3zrQPQ5MZSMVW9ttoq1N7UCePjLs96j84orihM2sdavWeGvmwyCSGURnzFnU19CfwWWRsNKVUJCDkXohmEsm4usn",
  "key26": "2XAnBL54rdykAmUch3sHMf1GgUPnLHPFMgs5ZozrJ5FDKV6RuvGqQjJWxdnCk6TmWWbsrq62E8EcwsHi6D72uxKR",
  "key27": "2rhb4QixV6BxHPNT6nbhfXJWnLh1c8NWoS5JqvKGj6tDVcaAQ9Xmf42CZK3W55fwnchJb5NsyhNa1r93GVEXtNs",
  "key28": "2K5ueKLFVTbBs7YfNZsJEeQqhViExDcswq1idWSeCqzeGSBVNwAwsNme5EdX8r4QDLnTRF5zw9BKKJc69wVcZC4u",
  "key29": "6GWAxiZyugfyqkHvv3PoaicwA9h85URekUKHtf3frRohj5ztQYoqmWXMxYRHwFNh2AXnkhXp6W8oBYh8ZG8gU6h",
  "key30": "58jHZHPqXo2B1KiJtEXJk6dNQ4e8Lc9HGU9xEwuiLqjzxYads1izesXJYtC7oY4ZGYejvRa6BUJikeETpGavqbDz",
  "key31": "3zqg8M1k3mnsmNbNzHG836u7TDruZbxmkT2uJ3aXABttSioqZor9aUMc9pFv14b23ZjGDBam7sfPd8Ag9dFCC8TM",
  "key32": "3RKxPk4WZL69xpuUvmkM6X5aZJsNT7FnoeHBHmRCzVRj5BtbU54kWbPsKNN7GZnSzK4r2UMkkzp2WnW5YAsoG2e8",
  "key33": "2hPb3TpynWpUXYhRJF3cWUdrM86ttX35fhGnhsE4JhG3BjudiFnhVBHAZa6LS6WuUsBgaMR7gaT9PX5rV3rN6Ee7",
  "key34": "3ueydDyxSKJJzgcQNdBZiERb2ZjjUwj3E7YhgWjufKYcMACdVM65x6urBwGFqLnEtZ6w4z8WLTXCsUqwwnM5Yfef"
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
