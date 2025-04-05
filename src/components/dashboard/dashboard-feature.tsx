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
    "Cdxop2uQjhNatRMwDMdoE1jFFLS6p9UtRPg8MFBBcfVowJfcE6Bru29yiidfPMefZZnW7ynzKVxSQcRke3TFV7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Su8cgpA7ckHeFoaDHhjwT9DCt6BEVSkChPiQ3usMoMwoXrSPEcS8UavWegrMfGTygtZbGYx3S8kJYmUzEYKTStL",
  "key1": "9qDZNwdNMHASYoPgXDet8oGFjvAA5urcGNzDTXAqa1CBZ7oQNGo6vnEFNJ5RDChY4mfVD2Yr8aNxEPQsTBRrxNj",
  "key2": "5ftxrazdGDTBZtZ2MnNuaKLddozNSTryKLbZSnTL9w4Gn8PZEQ8UUR2HJhgvac8ToXqsjbrWtZ57JWUHoTLveNBc",
  "key3": "22gzd4L3iTpRPh4cdJGFv1vBtLs1T5XEkt9jcbgUMc62es5WPgTPanoSb9Gy9BpM5ApcuHQCVY1b9ymtxWN8C3xz",
  "key4": "bERXZYToGBpDZMdgrzbRevUd7ws6ntM9GvRUX3gKJpwMeNtz5wASGB7XCekdqVRE3CXkz3NJ2PBBrcYnGTyzBcZ",
  "key5": "4cMXDt9ChYXacbisK7542vESNAeaDnsQDHpjeyWu2Bm4vWejnNYegdd3qKS2S74LNnMGG5cAAT961Fz3DYtsm7MA",
  "key6": "4PN5BPtzSbHjYAmZBsgKuKzsBRwytFocN5aVJjMgrJA1A9UcHfFTRkn4AapUJPFLyUTHVqBfqeUWVaYBwi5obbK4",
  "key7": "5xunQyH6DvWxze19GEzURb52bJ5zLvz7p3PRBvVdN7PbAz4ELrKxmzTAiCmiqG3d2gewumSZ7FaYpxjcaKUfhxpi",
  "key8": "XukFPH84FRpZ5tdJzvfTsYqw2UJWoi1Mh6THGBquf6S7z4jX2HgNe2pkHTZH35fG3kuzkB3beiVYgppavXEQ3Uz",
  "key9": "5SdfhZx5tcf6SBeRHVpBTaKoNfo3tTTgHzEVnVZkfGS4fLkwGLZGGDo1CUnJqrEB5amrdGVLFevSCN29FZmB2AAW",
  "key10": "4ogiaHAFQUQEEbPHBRoaJfB3VDenGSYgLDgL2NSD6EZqV65gTzew6ZTaSr4DUn9abGbBdKrW4iFx93TN1d6Zni1N",
  "key11": "2a3xPBcJafPXYGYjMaskXUG2JH1L53NjeP3s5nNQ3q6vHXXMU2KzG2oGKWU8i8UqUcrM3UV2Jpduqy6ssYSN4oaL",
  "key12": "5QXGBghnfyB15Yb8gtAMU8RU8FpSojaAmb4sfKWMgYxE9sFF18JUGsHEVQR3nLfmBthEwhCZyVZELn6NvZB6yHCC",
  "key13": "2wPTZtiZmVWBBVVmaVGDzdGjWd9toTjCSZ2L1huM9XzZMd7edzZxcSm39CzAsWppCnjVX2P295P3nQfkVeqmA1uZ",
  "key14": "36cegVtnHf78CrCYDHbWYEzLA8GRkKmX2bxhM1XpGsx8VGX4v2hkp56bSRyQN8zX8FTeefVmn9cVDjw7nohyppe8",
  "key15": "26VmAZVxMwCBPxHQKcetdaaGb6AfNVaZpvjFjzuVnRh2367zMzodeUYSQC2yvkYwPWFzMj3cM5ZL4gYYeWrvg4gJ",
  "key16": "4u26WFM7o53bMKvDYAYwPHFWz2Pv1gLToXx4hDLdDqLUEuYTXPYEnzLJDHrvJR229VVKPmGRT2C91qg6gr6wMhys",
  "key17": "5B4CPUQRzNaAaEqvezgvQcMhiUVKczYsfwPbvMMFtfzJ1kfULAHTTcBX5cMRMJXnmfZde6r3hTyWQVQhrF1UzBZH",
  "key18": "3xJJvndmPzy5yhkaN6Sak3agK7QrdJwLpjyzYGsSCkiu8BAEYEWYThqmefdRu2Xs1d3G2aHP9KBcVfYdiTcy9UBQ",
  "key19": "oLL6Vy3MwxFCCFwdyirFe79tr2aRerEvQCN8HPrbBwJpCr4QKtHzNV3mvBrZe15nGBHDdFfzr3YNwZqXUgAh9nz",
  "key20": "N5BRbtFwvh4SroKMnU98zJFZ5pSVAvfFbmunDo53Gmr87gksbEasCt9bAbEWnwPe75k75qKcdngr6Wwv2tNtdGY",
  "key21": "2szcitJjNMtL6QDPj7tpL65QHr8fxGdNiWXwrP6Zxm1B7wy7hGgKQfE3uQAJosmqg1QmWe9tRZPyrueDEXcnCTYq",
  "key22": "3MLNiGEhRKM4BKgZnxctBXSaVjhnMkdCm49rKuU5vsDhRpyLjAFmZatA1JUSo79dH4XPjTe6pXJuAjtqZUp9J3x3",
  "key23": "21YkY1hQh4oqyLmT41sfrqSKwCXLNYJUfEBUQwJ92nHjtBa2n8uX3hPZTMx34e48p4kFaigF3b5UkJALgqeeNoMm",
  "key24": "27y6dNBL6kxyk4LVTyimsazjeNVX25AtgbPzgxaDCAnJ3GLk9TV8hRAdFvcMqBVW6wtvPrAdxPwGt29PkiYPEGEr",
  "key25": "5PkpdDDbp6vZfNzACnuaQwbt829W8UviYDSAyWpLiccyLfSrjMbhtVUSNdzJAnNKvSdkW1ajudsQrzzccTxKQSjZ",
  "key26": "5gdb68UapnNmihVEvdMA3Va6eUg5AUZSbnYhkMJJGUsgQdx6n7ZPo8hsxt6UnUehrZ9tfQXtjUL9qtUMZePvYcKy",
  "key27": "2msEJk2ApNBgDjELejzpwAdYYkwAj6N9uzPdqW6n47Up7ipDXNykxXFQDkXEqKkjQ3AeyZZuyPb9S9qovLhcRX25",
  "key28": "FahoevsLQN7vgficPT7vKkyRwHdZrNTUQBWAQwXaHAmWMCa6SKhcZVuetbwfaKcjqujkRPUPjeok9vMeD4NZnSJ",
  "key29": "3Rj5zp3X3vRTqiftQu7csjQ1WSEwk3Yuw1HMWZWPyyjUC6UnXdpsuCiXEfbKwAMkA9XqVS11q2YUkaXce9hvTJBy",
  "key30": "4EpMkptH3ZtaUCv87EoeV67JHdZEmFvWUhzm5FkSWootPURDz6JvTFFSWAc9u3GTyczk86FwpcMvTrvbzXJENF1q",
  "key31": "3MwEDaqHnCAP7TZ4ES2uERAFQ5DEEkiT7UmmTmEGSBKgVGJxK34U5AhrM6g7KvudjCgtpr6SnXu6cE2hfk5ctucA",
  "key32": "L9qg9Y95SYPkfuL3CHcBL2vFgh6Z5CmVbZktdDosjdvZDCmVvWbPn4ZQk8Rpti6Wnkkp7ANJvp82hgELzd9wHwW",
  "key33": "2HVGs3wcCDdKHH6FRU5VXQp4ZqsE8Pkxc5vRWLavcd15pSJARugJ67LtxzDWcJ2jDK1QZh4rSumuG3tkRRYVWx7r",
  "key34": "7fbUD91DyfdadHnNtCAauLgjexKHJfjTp6XMHAFP3LJNdo6EpwyjJ2CDmKRSABpYLDnYoxa5Ffzh8JAH3PC8DMy",
  "key35": "3mjWJndgCFk1Sxk4uHigAcf61NFJrmYoW4VD7ZvzzA24vq9rUEvvzwWpAfAWNjue1vxVVxw3HD95EwewU8F9GcEV",
  "key36": "3d9uiyGNia9mZC6RnfcydqviJC4k3RBNV3VKgbtrCCjCr7HrHdiXVUHmPyZxJ8iQdK3zLJBqpHowe8M9vCoMEu6S",
  "key37": "2M2w8akD6EKxaBLxqZaGYp9BN4yWyu1iL6kZ9r675eqGGUZdyAt18C577MXYexEnYC8Sc6dABMiNA4ka6QrsntpX"
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
