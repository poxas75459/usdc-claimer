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
    "4wSAEMUBD76FfvNpWk1kVqPJAnQzBipM11UmKDws2SWbAhBEicsisJHF9rFTMxsLKTN7o5ZuenBEFras64fu6NbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rmkjy7i3iFPYGAPreJJG6VfSjDNw7rPaZ4aDx1U8MiDTHX9BMLo3PxdiAFVUGyYL1vznpYCH9wy18nEoLye4ic6",
  "key1": "2Xao5DuKTxXaESW99NvMns5k23ZGbavozSTgjeE8prVY3eEqFfsdG5ruBdXzyJ5JVNzci3an7iCWgeKwni94yKaV",
  "key2": "4zruGFrdMEtLmxKCp8iqGk5kqFKVPJkDmJTE1EoEsoG5wpMeF9fg3nvS6opiZrjBWS5K4EihWSZUeYQ7BhBEeJ43",
  "key3": "3TKfskTPcy2iaqyUX4T5PMtCWbWJ7Kqm3hPAsd1MjXB9QELrdnb1dFdgWsdzisdjR8gbDFXBqcCmDH2R8u4LRwvh",
  "key4": "4YNxgBqnBfLU1fws6oCwJ77jGhCxb8d4D8oSewFgxk68csN7v2yjvPAG3ArPXyDHKXvneTS8jJCZ3SRc7uvdE8Fv",
  "key5": "5Fzy5sYyj6Jz7AGnkwSJXe6SMtbgbRTKvYnq7WuvsspESMC3AoHejBixpZZdKamThBTRZ9jQTBWyhYmZ7EsK7oEe",
  "key6": "5GXPe1XL7BoZchTXaCo4MJcFqFyJvAcmSsMJsuDb8zcgukRvVn8Rp3WZnuXDpEPmeTxySx3EDDvjeyf4aYbb3DKV",
  "key7": "2K1YsGq2zm4JAEXkZkF5gD1EUPNxzcafKQaPFc8qMx2nmuKc1zijjMDPLGYvdDs1nszWyyzFwBJSBV8Rvny4AqAq",
  "key8": "4Ghw6yiZXj19SAYP3BiezQZQ1yJHmbxFBnii3V2j415qmHevdjVXMP6a4DHSffE7wMk5pesMz2uTH8c65arabVj2",
  "key9": "5qcgPXC64dgPuPLeoAmpc86PnMYtCGRb2ZMpQFKu9Ltjefcrun3FRnUeGES6DaqCG5nrDjuGLm2PkCfUzP5c8kG7",
  "key10": "3Qp6J9Td1iZzkAvRJhr6VWRcRHKuwvKyw78mYv1H4fbTpXR5j7ifhjGtrP7vEv5mKeQtV7BUDiWxbeF8oTZEGS1b",
  "key11": "2iXk7Uxa22LSFbYnDALLRnLC8moUoUTKL45BnaHTmtdsNz2ms6NZVtyqWiTLoSWeabP8YSDwTVYph5su2WTVy5Fj",
  "key12": "2WHEHgqqwSXLWNgv2JFRQXk8L9vhM5TqVQTbuTLyroiN6yyDuzwKbWHDa6W5aRVENEwPLipcfXn4DU12wAPSGw3s",
  "key13": "5F7JmiVy9LUvR1PdHd7gvKLrKaTvi1jLJcxCtjXhaonpJjW9CqwNk8yqhhjPVeiBLhH99rz2L3Wo83t2jsyuqte1",
  "key14": "4tmwQHhxyJsWDYPg7baYRLjacLLYwNcYjo7TrQ8TYdk7SL27WzqxdQAAqdKUvmTFvds3igWuXCrfUhzzPk26Jwk1",
  "key15": "5DoiTuyJr3kVcMZVuqTCEJFYH7xdQdwVMv5fsTxPaH6D6HikmjZZJJ1JHZHMKYunLkmFmcZVGzdzG6rdhnEeRGoV",
  "key16": "4CRdQAQGLsSURTLQv9bwhFh77qwZXhMBcZnAnWv6CsL6v8HYwC76fLpC6FMVA1RKsduzZF3RKi26yBNvq81x993W",
  "key17": "AdbLmAb4PnXdu897JYHbnNwPpAxTD4HnJFkVumh4S7ZEZPcqQmEEa5kpQHp761GKigD9EV94NCZScZQxPKzspBn",
  "key18": "5X6WreFCHzvtyPfCkFdJc3g6sughWESxcC1bgqE9q3rUz4hfQX93SsinANH2Jxd6roAFW2uJyKdWUb1uXtoCju1W",
  "key19": "3Zvfpc1Q1kRrZEKsVE3KvRpLjEHFJPjnELDupmPGnNXzuCrmWWLMNeXhWy8WVDjdKY7uT7S3iFkL56vvCDaMFMTv",
  "key20": "EYZ8Vmzfw6wiQgikrpxvuwGaistz2rLuY7Wn2x8jdDXmM8VRrkjGM3Y8RLr6WQbtbu9YWVvysfviJ32MFEpb94e",
  "key21": "4Z5Wj1HtwwKKbsmtGu8xMA2rg66A1N6gjuGY5ThPfwNFRYNRh374JDzxVt1zVrFsJeAnHp5bS4WAeinFppQCi2t6",
  "key22": "3PiNT5nVgibaYJkSoPSChtBTyYzXu36qqvGypsjw9ZGo3op2eZ26XzPLtuEDEVBR2MfDcqsT6XB3UwoBp8m7fWGo",
  "key23": "2oBLPfudRjb5KFa7qBBNTjagqg72jRmvDWzxzG53JrLpuYyBFwRscWHHwX8AxnsX4SFGW4GqceZgjKpdk1JoYECs",
  "key24": "5pnCtmenuEC9u4nL5PcQMAynBz1tmPWQkfCActMP2LHyBhbYHCcqtouEyR8pRvnhScw5Rf8Eby6n2MwBDsxxg9nu",
  "key25": "4pxGee1FfRCQofaskmmas5TUQ62hnNLn3TmLVR31zWVbjTXoJoVpXu3b8BDCjZhkAFAoh2d4xHSNWgaZC51jPGC5",
  "key26": "3iauUfvR7DU9bboAxuMhqNVefM8DPknqAH46RBvYmBsgBNKut4RfaGr5prvrj9BZtbJ4qELfmpaC1ibSkgJBvFyL",
  "key27": "45V1qRe6zzv8PwL7vpj4ogYPNqT78maBAfLyrry6qbkE42HFDZHc8wHrQy8P27TPPFNqiKCGQFFKbtgqQQauko3K",
  "key28": "3tAhH5Gxwj6WQ3gCvVekJ2AwMWx3eZpGD6iRoADJhmAdbPg2q6EiKvbyxwsYiRuAHpU1Fu4TS9VmWeUaDtnPEe52",
  "key29": "isSdYcVL4shu8ZxhcAdBr5vfBZ62m7EAngfq739oU8N1U3xqsjTYX8tixCj4VkPjQxKjiQU9YtMysLHr2YMz8wK",
  "key30": "4QBq6Z1PGRmYaexQPCHcfCmYSrVs4mnxLVvmcH6SLJzvdMFq8Nw2zz3mTGpsD6saUVL5n5at9r7PT2FpL4skh6NN",
  "key31": "3SSZiEtYhjPW4vQTty8Zs9gNgaKo7U41L1ebjukCRE14rNbHuEPprJgc5H5fBj7tL2BeNh4QvftM93SfSJpdGaeM",
  "key32": "5FjwR82Yy1bnswUbZu8FJxd2yPG6NeYSLgyNGNfSU6AYp2vC5MZKAzfnxav4Ck6vDzEDYGmBxf8ZkQgJMC24ZiV8",
  "key33": "5MdDcw1abhghu2d7he8uLoCbFSM7rSEBJbssaKyAMFirvNorh2Ah5yZMd7cHoM4hu1QuBYUcK4GY43YfCE2qmHEU",
  "key34": "31S4CyJhM3HNFGEEryVGWb7D4mvZFFANsLCEEoiLX3DmVxzSGj5RZqRc2YmS9ZzmVGcYzmJvMxFsTc71aZoVoHu8",
  "key35": "2rb7gtBWXNgJ6PoCrHdqWyBvcghp7CUAxFG8X6HjbRHhW6ehouQt4ZBmmJpQE6b2SaawacRcKLY4ziMoSSTc5NuL",
  "key36": "3e3KaHQoyK5KwLZccHkDmiNHoFDWYrRnJJTxrAL8884WyDpU87yVDM9y1eCxwFhARj5UCR95u6P7EVRmZe83fRFq",
  "key37": "4CbS5tbuj5RRhm3KjdTEvtu3Lht1At5zGwJYn1CtunJ4XCg2akh2geHu3DHoi5Htk1kJJHhToRkWvjY4oMvPryL6",
  "key38": "mjx8YTTEqDt769v66y8SbPNcerREDMurjc2RpnzUho5Qcmgs34KbKk7cy2SvX8t1vXeNKpBh2JSLkHxXcEuiGXW",
  "key39": "2rJ8FobVrt8cbGcQykWg7rKYCHkn7gLMJhb4BSh3ckeaFAiWstqnJkj92tZi4oyFd4hAA3JKWZ5DcNNwxvzGwUvE",
  "key40": "47yUubUbZc4R4SE4Doh5EWDbsDbDTLhQz3NC6Q961Jqk52bMvRKL6WqSwvRzhBJdo6tujgdwW3gAJ4LXYrcB1LbB"
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
