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
    "21LgKhyR5Nw3ULfwN7c5MUwH2mhfmYWTNTXS5qqgW5rcXuAxugisBRa8wZZevXBALN42jamCC6ghdpivM1NTF4mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51iTt4WJxg7NFSjZhGbG7Z6u7WgA4N22cUntxCTfbJpArMH6hc4w6XNg9tY1xvwHMqbE4aY2tifursUkKM8VrEn8",
  "key1": "2xX17cFAMgup3M85X4HRJRnoNJ3xeQuXVQLYBqcTo8ZnXbMqHfLdZeFmvywG47U3cRfTBFjpYrGcP1kzFBVubvPU",
  "key2": "2ME9WRL7k9dQ5KqST57moKLSRdzA1etnLtVWipB59mHJeg4qaME6otdTJWV715d7LNVNg69gQgavc3AZ7XEtoukw",
  "key3": "3ZsUDdrw3gwHa8ZZc61169iERiR1Y91Ds7nK4kzqJmVXsUTivoWCBLW5pLSPpwkS8Y2VjKmUu4zN57hutT8yEEku",
  "key4": "54L1hTicbNrHa1cToRP6eaeGneYx7dwHygdCDnuvMb3y4vPaTg8HwNttLZmpZMsB5M6Rj2PdTQy4dpfu7PG8m7Nh",
  "key5": "3vHpiPV2MfHD2rnpr2TYYayVi26C41CgtcLFvWc1xxh6DAxGRiFBhbhrmTXJ2Stv1rM6NPh8ZoxZxMibBMqCKd9d",
  "key6": "4kLceS5KPu9WnWKxpqhqER8J7z5XSfeahM6Sy7NhKYvVaSrN5zscjuiiuPtkvY3CRX2jZeVzdL6nwbK6z5Ch1wUg",
  "key7": "4Z56Mb98KcuDcxCNFQMr4WCv3W4uq3FbDqxhqiJ3AKFejrpD4WsLchAa547Qn7Ywk6mgAvQ9tXbhgk1T8o1LYYrG",
  "key8": "5XuwBMeds6s5tqWvcjyTQfJnHNDf621JFoXCRnkZcvtTbmEP5iW36cKyhyLBzeMs55a9ujoTzevvGuHAtMLexPGK",
  "key9": "MjSHA92mSML17TUptMbBifuntodUKM4MxoEDQj7KtmDkjkHRCKRfKXeAZYNkjAbJjPxntJUnKFSaEcWKR8aPPmS",
  "key10": "3iwJMP16QzNk9AaFbii9HL2o6t2qkNUsrfqG7bo83gjjqkoxtT81qJjsQj1Ckz238rtxUgVBMtwSpvq7uzAC3X8j",
  "key11": "2i4EKJgwQhmuij96Mftisw8qBT3s6dMcnfjGi9cwF9reyeZqfZd6G2YQgksJRzMob4bobBPjxEL1rD6kDfvnpEnW",
  "key12": "5hs3e2n4upwmvkzwM4YvgLUgWUo1SyQGEH6Y5xZHMJUVxPdJmQBMsoLmHc6dQv9K1A3U959QSbWEMNdDyL8zuLeT",
  "key13": "5F4eSe3Qrw3Dw8WXozqJh6gxznWV6YmfQJ59cLY6cEqf76u7iThmqJbxWuqkHLuDx2Ngz1PMMgERG8ogRo6RKUcf",
  "key14": "3yv83Ho4vTdx7MYv6QskgK4STtJESs39qQExGNg5dSwPvCKTMVXFnCkLhKGfPjpnHQknuWw4kg5ykweVyoL4ZKFE",
  "key15": "37c3nsMrM1n3iUTswWha5r9NzmHYtsNNS92cF9mJxUNQ4HuEHLVnadne4kneQc2xnkPetLksYhzrNngie3CGxqz1",
  "key16": "5hDNShf2tfdtzJAy1GdWSz3go66VGNcFatkGP2w49XC3kcQrCuVNH9vmJxySBHwReNrDosXZVC1nsEXhzuMs6VNR",
  "key17": "3sMZw6rWt1p6PtK7mR6F1yCZJrTT6PNww371GQwE3y1Liupky7V7KPfnPsfyLTwobKL9DjZnvYgmBaeWgn3XF4Cb",
  "key18": "A1YYodt89sfJDhjstDcCnuFPzLBqFrrU9ED496sKT42ixyNa7YzKAEqTZkG6R2Z9t3E9oEPpD7RrTPdpEx62Ljg",
  "key19": "4gbEbwyXnoZrbsGE6mwuunQQc4yG6DRGSnLttX5PKqmMfET1Mw6pB71ghaCZz6fQBdZNBPWNgoqK1VAeNNuNrP2E",
  "key20": "3WdJmCMLHWJRqZK6azu85mwbuvvKSXruaddymYBShxFZUMdbWTGTvzfExncrXLK46ntmu2ULxaSMEwWd2qwCimAz",
  "key21": "6417c1WG3Z37QzUQWbytPKZZY4aNgxNaS4hoSXED2kYsEwDVXg7JUzTx3MtZt2T23n8CUMKz8jDCjDGfPwto279L",
  "key22": "5BHAgwtB4PNCQvxaPBqRRSNBV3j8gj9KQb2EkfazsDLwVp7MC64uqeaB9k3DSBDYSq5KbsZa6L5MrS1gzJsPvNNa",
  "key23": "5EKNVyuc8u6qt2DvPdy7E9XUBKAPz4LfoParYkYmJo6r2v4bxBNb5AUscrbV52rYy6E4PVsNMtW9cJtChkgCAxGF",
  "key24": "5Y1xPuqPNYkCVpJbWqbRHAkURtCBxkbokr6Hs5RBiHTGfqhB8cw9pQkb7xeH1wJLrGWni2FuqTBXfVNCggfAKg8K",
  "key25": "2QP9bay8NvdNyDkGeaCF6UZ6vZTo1tqUT7eLh7jzFwm4SHH5SZuCBPAgo4yHV5fGemvmvJnNqPLfTX6NanCdrxnL",
  "key26": "2QeufotcDbDSxYHP4LZA3ko5yBScF2D6r81UdRTeuZPG7enwh2xqH15E6scH5yt3i3TqXA4rbEryDLq9GFf1CZrt",
  "key27": "48E7CMQrJZeSkKMvWPwD8jbSAYN6Xypdr8B5WjRRVJ432UUEogoM5yddtgMf4XfRc3TCP9a9WQugDcauVqhznUD8",
  "key28": "v5dznhUFpZYit2bRLEP1mcoJC4EEiaTW3KbHdL1VTAz2qL4EXsj8tokGtP88n8frTz2riHCwQoqPXCz3GXyt6Vo",
  "key29": "2Nq85xkPxemNBvNTTZxn5MnzPw6mxSqYR2smg1mcAMdKLvoBRgrMMZrmokTzsdkAW7X7PpWVkovUtcWfHDzuaYNq",
  "key30": "3fR4zLiQR7eHFv6iCtUFrAiLsKT5SWLwc6HJL9urbESW7XpDaHEgbAsykYBJeJhu767PQTbhki92abfckWGHiXeD",
  "key31": "4PiQiSGHzdj5wqbJibJw9ryMdFPmHCmgUs9AdxsU6gGs4ADp7pg3RZ6K9zQyeK4dT7odqqUFvCqjhmtMBsGXxknF",
  "key32": "5YQVkjrPc5jB14ZHDgfTdVBy5WuZZgze4twzmKsno4RPMvedbrZdZ8gYQ8hTCqDGcCx9wzyKeQT4FcBMnPfGqb7w",
  "key33": "5fNMd8L4xzPgqCeB9ks7p4oAZyYVHuZRivwuJ5oFTKTzdSzcgkAhh9cYDG8R7CZAdtUbbmBM7b2Quzyx48jHdxTy",
  "key34": "Fqx9dcFEgsEH3hEmkm1Z284x2vB3igunRLQK6BzAsGmMWzpKznYPkrPqBJEULkzE7x7kxz7Yk9eD7U5BFFiiYDw",
  "key35": "Zds89xQiLWox71GWpeDJKoj6fgi7TePNFgMnAYywEMK8zfAWvjSffB8Cpjey82wUo38dHDvT4zGhDaVD2pLL3F8",
  "key36": "AcXncnHRMeC4F2f359HhzH5avVZdj3fXUMFdFpMFuj8oMWL9taR5JtyEdf7fP4hY6CC8ahUW7ZziMFVnseickH7",
  "key37": "3aYa5Ek9dtZnBxAcdGfCqiLBdwuiZosYJbAARHaJHUFXmvuwB876cAyDkrXpGegDp9YhhHjK54R4txiXSDECMo9w",
  "key38": "RaifLYyZSfZ5FawBnfdNXgLbuxswbwkbGGbiKqcDwcSDmAzFDTsBd6xDEdRCPsmiFygUM4jCq4yZFnvvivsdpKz",
  "key39": "5uhZDTvjj39G9wwqeL1DZBvDbsgQDYAfyZSHcyM3dwVL42LgHAcxR486ruZSqxpfko6bWwh7QD4uFiDJDaatyq57",
  "key40": "5Jd5AntUbTGkqjMkQfa8e39oh6KW2KUJCwy542VYkLdWkfbeQxNvc4JbWYfEU6nuCYPAEKhXpEfqAk6heDqASXym"
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
