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
    "3TrUrhSLo9zG4rhMfVvyJWkD4v25sRbEKDaMT57zR8o9eetXSnU66N4i1Kxe32TGHqnRScn1h4HNCPpbZmyCWVcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUpQ7pLg3hutqw2nAkp1TrPb6gc7e3JqCzUBB9KzyPjX6FPonzu4acnrNBCKqPXt1JKNKpuLMXSszmxFHdcNXwi",
  "key1": "sA1LmhCyjfpW4VPY7UZsgSXmatGbMwAuCaZmm8DkBVXYQmUqWD4VJWYCkAbTo2zK5bBRAVfpDCwu37bgFaNE85o",
  "key2": "3UHRb3xdvPN8PZUsZVGhRCAmoDtWZp7j2ynWakymubn2jPFcj5Dcb1CRpDdfNF5F6YYd44xzVScfLR1eUbr9YgQQ",
  "key3": "3D47i7Aoom7s3T3snrAwXxEkuHY7uHQdxrCdeCB7VF7D4eEGEor8Nsns6aBu8RiQTK5sL9Soew7uyqFEGgFztGQv",
  "key4": "5dUN5epFB1ZA64hvUntmTvkSUxMKFic8TqYe1keWe5iXcDCfTuAqKfM7AbZQfeF6JpV2BKmwM91oFcmqQgkQ6y9i",
  "key5": "4316XrJpuEsHjXaBkRq1YyuZfv8A48zcKKLAnBf5dakeTszKAPsTVRgHAuUmgaQEbBsH1gXxNkwyjLsK8nSw7KJE",
  "key6": "4g4i1zhDDDCEgHTVR5TE63jxKLqvxExbLNHZ7RiW9fDKHp4Z9xCsozKFwmLDAvQEwdhKjyCwXCZnuh4kjE7taQr8",
  "key7": "2uwzKvpF1EsFPT11LoU1kgm2CzLmjVNEbb6PPT5kqiwMMtUtKfPK3XqDQmoZfSETmfx2xQhAv5xN4H1sP5P6i6Am",
  "key8": "2HsfjbWfHY7kvFD5maUqy9CtBV9DiHPpBwEx8zAFQjsjeAcd3dwue7jXDiq24XcQo7os4MHy6sEg3DSP2FGytr9P",
  "key9": "27CcAX5jeJe98M4ZkxhJ2QCuNX8Wq2JG2XXMTKo2FBwAPdYmNuTNE9RGNsnVxPaC6kNeYx6pSE6xQGRYtTjRuL59",
  "key10": "54ZEUbhQKW6U9tgVopBC8y5bDMrmiMkaLigXE5nJefFWyfmdAaEvRK2GJkEonxX8gi5ZcKw2MDZ4c11KeJvZLF6N",
  "key11": "XkSdYFEUxwaTe6QGjDj6vnAVLD8ZprNwhgzeGmUqa2acFbtjLZLfjvb3wRvma71eRYazBNdw7qKci1qyeiVjni4",
  "key12": "5RZGEHTpD2o12wAcVMZtFJ6PHVxKSJoqZyRYLq3yVjd7WdFFhrH7NThNXAbRWdXwtiHNVMDJMCzKFgV2Z6dC8xPw",
  "key13": "4DgfWt8nqauQ4Ctmm4hogbK6PkmorMnMAbi6CpRxefhrs5qBVVMnkD8TnzU56fwnkYh9tQpVtrYpWMRfFnhxXppQ",
  "key14": "3vTQnrCsc2rzyer4r4dcb6QaYQN7th7kswLmiWyJucHgzj6TCpTA5gXTWv9XSgUo9TvD6f4BjfwtRwG6FwEHKMHD",
  "key15": "SmaqkcfWa5B6zgGE7vygAf7rc6frNXuyyVYpbnVuhGzWJij6szwjGeqKkQxNdZjFxix8owtznDM4MzgRAv2H9Rm",
  "key16": "21aTKcBBrfuhv7voTTtvoewBRbRi7wXpj759AhRBQNB2BabHLVNsPr5AiefntnD7DzzgBYJxcVPoYfqAZ32ykD7z",
  "key17": "66CxRZEfaXXLkFxrwCfTHs2WRoNFTLuS8opKnktzwHgxVRGSNJdSyu1vxS1cLNXTpu2uyM8SLRedKz4tTaio8mEu",
  "key18": "2YvdpYkrG5koWnueHGnUig9ZmfdXFgP5VbGGNi8YATGWig2HaHRhvg9vNsabWFaDyEBEdhNeKcq74YBL7ofaWtkd",
  "key19": "5pf2BM9Hhn9QbmbBidqmBMRxbCqdJ1VuphF22YekJFzvKiwsnYn4QxQb1ZDBo79W4KdndhckC81b7f7SChPoVtKr",
  "key20": "3y2N3oA56H7thzFzBSB4u4a82UGoLPV5gqSTu8eoJtWvgCP9B7vzGEtGSDTz751CdGNj7C6FBigVcacZV9CCspvS",
  "key21": "3mueCu7Q13s9Q6pkmThRWohTBHCXafsXc4ydgZdxhG7VxJLs1QkF8PTcAKfWdEiWtHuE3baGFgZwVKFiKgrzqhsG",
  "key22": "5sEbgZMSyCFfnfbgsnb6GPgfrYMtBmbqen41ich32B7qX2m9RBsf4yohZL5nYtCtagyUuXEJdjzLdGyubkTfYgY4",
  "key23": "nkmnZmfw6zAK8pvhS3FXeNxHeUR3PRRpAVm9uedakEPPaACrhXEDWJy5MTsqmMfATZGKkvAjz7JguGouuRTKVQG",
  "key24": "2gHc7hN334hzcpJEpVHJkZNsnR3kNNfonUUqYUiUYuNzmUvUfFToahTMaVabrvFuBRS1woeY3YNbtk6kAMWuzMtB",
  "key25": "479xPvEWBgtLaxZCvQStspArmbhMkUtUyCTTJnnQPDcS6ukVoDKfzyh6YFWNPS2qg6neuk3UzF5mkBmJ9soCTcNt",
  "key26": "2hUkP5NMekLSMJpaWAXomP3JFgqH8JziyGZmB8M9abRcyN3KiTae9vn6QNMFPFg8U11i32smdTfABmiW85FGeLvU",
  "key27": "466QFeGqyeMTGf1uBVcAZAMkgvuSR7W3DBoYrbk28dNjUwAi89ZsRW4U6q5JBcVVrYjeBYsn8WgJkTMjGCyNRn3W",
  "key28": "29ChfgFXBRF6phzGZjcjhhMKXbywzH3NMtVFRWvxgKBgJGgd7wRzHc64Ni6iKLskQzFp2xaewAqFzcb7DSgRRZcZ",
  "key29": "5Kk9Wr1PJBYJdGD3cWU5DZg2vE3cj3VoGDQiNs9Fk13bt9xQ2WjbjQd8vdShMRUX4xou2qWH6QHBBDhioskN7m7L",
  "key30": "wAEF71Xs1rEj6yR2e1PAyfuvar6jdQhEYSbyrYX5mFfn9RV4LB4jp6Cvrr21F6wpRhWf12f48mzaRnse5cN8x7f",
  "key31": "5ScLtm3rz1HgA9EEi2M1rXuZEJLRnZDZWBgSobqjw1E4gaPDqXh7c3RCW3P35dfqXi7YyayJ47iJXWsuLrKNFP75",
  "key32": "3V2LGM49czmx49m6nGokbKqyPu7shJ8bfbidKYWjYvVXYLhgSXpXbRXXNyHVJ4gk2xoGn5qV3tntd3DW1Y26EfRk",
  "key33": "484vZmqhfz1YUNL2prvhuFncnQ32r7i38BtGapZnMsVgLXf7w977HmyoF3qbP9x9tWpt3AYb4aNom1GnoiipmBmd",
  "key34": "6LM2rz1oKqhTDe6dNPogcLDWXWMRogsct2G8ckcJWRU1sYAALPkkr7tbjEf7CtCZGZG48EYJqWTnhqzGaV93yrM",
  "key35": "JkrfTUcbgyYwZzyyb9umLUZPiaMiL5XYdRQ6nYRu1qAeuEdouY9574jbCq9CGYLExMvW7HJbNwH8d4uv6VZZsrd"
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
