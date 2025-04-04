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
    "3ZPybNpmd5PoVW2cCq2GDRRY7n4CPiWYjfDyvXo4j11o9QhY4UQacCECTz1sYHur5pdP5amRU6zRosQ6PGNtWKef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBJP9JuvAK4BSXXp4UfyPZQft3MKkxp7QYVWHpjnfpZ25q1jnPody2KMQSYWftkcDDUuSbdzJzDpBKkHuJzZtVU",
  "key1": "5AJfPJgBjm2uq51fyZ4MRvjPVbcuTXfy7WXBvLpEQgcKMVec5Wx2rJmRirYH94ScfLGHAyVVHrmBrKcMh3HqRKUJ",
  "key2": "2bG7FjUmL9ptjjzp6grXbjsPuyfBv9EmP6KunkqdxhY6pue1k7torkhuPcgBynDNN3ssMnJECkkUCKDQdGXqaNd8",
  "key3": "28FgkibF1y624kQuK6iugsEjHBnzzntuakUt42H6fXkGZcJeCLMDDSzjwdQoseWEzMmSFoAbw4t9yyjrs2EHjvNv",
  "key4": "498yzJZTv7amoySvgSZoDbbteabb2DUuTnwj4qrqw4iJcKgmww2yoEFLVhfp9WyxpsKrMNn6U4eDazXHpzqatKEr",
  "key5": "256gySGzVtkNWZ3Hr1ZKXT4FAuWbxRg2AvemdZ8Bs79G9VQJ6i4ND2qE5k5f5fQdVwPjS1wHzSuP6nA7uo8c6g3S",
  "key6": "5Psjgug3gfRGB36CzXhQnbTVWuWJQFajUTJNMzD9WM7sggL1gotNFsFf346gvgvfWfFhRA2qRpgagkPuh7FSge6D",
  "key7": "5dyiks8xvBKvsAE3s5CYrV4kMYZYD8Jzj8tCt8y2ZRnBiohaKnM13rMUwoLofcK2nwmHV7EWfAL2mM2vxRhsXHwx",
  "key8": "5R6dxpGEkZtjUrPEMJN2zMRFuiPLTyWcdkoYu2PJ4JrjJEXAbB3tPHHgehgy2wSqp53PnPc2gkwJ8CVBb4QwSfLu",
  "key9": "4HSkZPoxh1bLa6S4iw2FU5HB7bMXgxEUSmW7C1wDXCp4KY2uBiH3CDKnzCZWxPgZ8PFUanjNpW5aDEsCfo1V72r2",
  "key10": "5oBtnaFsazPShXfiGyoEjSF6VHfYdPWXL3iDyxMD92ctfGf3uRQ7RCgmW261DUkUsXwp7HPEiwEUAbQ5BpgqQQwh",
  "key11": "4nNxoCBdXAKnv81QfkujyY27zxrVgaB2PYiPo5sqVfjWyEDcEye9mt1NCMkoJ6BwnqMs26Ukk93djEKARi3QXJ2g",
  "key12": "8LKoU4fQ1nzJbbkq8hfu5ZmhsppzzGHEQb9BtZbXLkoNGu9RSD6ffGixv6U7E5HBNYj9D36t4pSke28pFogQGXu",
  "key13": "4gYAjjjEKLZNtFeEgDdDApgFj8HZyrcpELkx3WRGrQ73c7ThqywTYod1ttVAwSmF6A7MLkn3xLuv5pfn4a7Ct4gp",
  "key14": "2dBoNVajgPBnDCcyyj43KdVZXuCgLF1fTPPS85Qrv7PTxidaN8RgEWpTV6ogHncPXuBBij1k8ZUWbXAp5MJmxxzL",
  "key15": "65AV4uBGmL2bymaFAyt5P6nVJzPfYxy7ffVHuHjssFneHzNx4PorMfyy56xYLhxxAHHsKVe8iJmDd84xNzzSQp6v",
  "key16": "5rr7wnfvmvhSV4pgBfKN1XKmb9TiM2jSJHxrvQ4iLsJ8cDuZ8bwYHzegwtn7axCzsuHupyiGbZ81i6tt4tAuTMzk",
  "key17": "3T6BnAJDw6MoicwaC76szPqt79M31ymdkAmMmFbLWhr9XoMRJeo4RAZ4iP83h2CuX4hj5Z6LZNDt2dnCsxtuzer6",
  "key18": "2YC5iRZXu27MaukHs8me1Gje5GLopCv8csr1vHLFLuRYqhiJYpPLw2gABbTf5CWk5SWJggchngn3Uj8dAgwPCFFa",
  "key19": "m7E2B4DF73SvrDJTWUgJKujahyZmXGagwo2J2ZEHzjimydmNJpp7GQ9qoQs8AEQDqpye2iKGScbvBnHV7WJrKVU",
  "key20": "A9tAgZK2uecMiAK5MMjWcou1T6aE9iney7bWycasUq3VPKTUqvjQsykFfZwZK7bMwi29yfP9c9z8gNgFY6FnaWB",
  "key21": "DZ4UNufLhuUnv3fSwP61NB3P8QkE3WhNpphbMptiWXSTPyia56DFAP96QXbbND62Bbn3dWW1mxn8iv9JpWYY7Qf",
  "key22": "3NdAS2bgPiYxGqKs2kwmEHfqPPiZX3GyZkyXcwTizPyxLu2gnUc2r8UvYRoF4gKU19QPxMzsDC3n5i8krJ9eP6es",
  "key23": "5SYKH2vFTabMgVFsEybD9TPjCBqzPToeVicDLqditNoTQ1BXMHYa5GC5wo495PQp4xJSdMqi2AidpCQwZUmF8MUX",
  "key24": "5oFDfGtMfQyYrJpeYsCVYy8c6PhVUwFGEZqPJ8ssbE5ae4AaQVHr2oPKCi23dhCgwn9mRuGopFNURfBWSadVwMun",
  "key25": "SjD15JQxVhqmbjiQfYkVpMkVygu1GMdMbTxWTMK6cxPYNumZ4Nh6riygJpVcGxjx2iGqCo41PU6ThEqhJ3BnSBJ",
  "key26": "3wyZzTy1r2SjsydhH8vt7jTwhzziiGYuhaxiqpJRTe3jkjt8tCCStW7rSryGGqFNcNJyeAmT4oQsAs9XjMnaK3J2",
  "key27": "3pGEGrSY3VSsm37tN65SG1bkojz6xzvgKmyDWncoT2wE1CX4GAxKDZgoLYe54C3UKLDXEc5VqBA7aikvEs98WJr",
  "key28": "2nfMG3UCLyXkeDFvwUBJvStqdw9Num4Vr2VSzx4jNhFFLx49XcCnGU4gLuyAvGcNdGmoZU9F5kQWCrbFoGL8m6hy"
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
