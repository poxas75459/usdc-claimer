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
    "J9hG4Hk7hHqwedcoxmtgYxkg4s73rx4ULrGjpjqVKjE76zbP35pXEbZd4x3qKhAxEqcV1HoiHDn93kfMxov9yE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4XZcz45XAiVZjYbxnoR37y8EBhCnvJMETX8vz9S7z4BBiG7dynYacJsTHx8q8eufJCHKxoXK5x4g5b48GGzEqM",
  "key1": "3P3caurnGjyuBCGQssaxM8pVM8toNXqNoKTYjsWrixFXNq9J31TmKEEFTCNDWjXgnVPDDqJJsvBJV88yD96hVmRm",
  "key2": "3LpEM3dWMfFDorejrfj4RHZqXTwLH7JNqetoqkLTHoxvscTB3XD2b2Gfnq5T3jDmSVWm57Ff8k1gBuvTCfaaRxEp",
  "key3": "5wjdPvyqyE4q3G2N6Zzsj2VAzSdZvWrFTNdJoh52qfwQkvCuNxpXAJk1nfojNvL6YHeMPso55ARFvTh7yaSjXWTT",
  "key4": "3rFYBoSvCW7dBAmFrxNWyAt2rJkyBqNM9hcXj7UTfoFyixHBKFV5yTJczyUDdLYRHSK1Y5X7feioSzLbiDdHcG99",
  "key5": "2YizGDczSU6mpDhcXQ6zmS6VDq2HVHXaCEpaFtFx2G1ZBn5Dje2QgFexZDe1bmtdJuPvdQamDwBBYwTWu1d4pvNm",
  "key6": "4WMJDgtYDrdDLmPmAtbFkQ78s3HHWn7SH9QKtEG5VQ1BtTKVCzfuBGzq48MvXFWxRNcRjjJRnmZLwijJMjfkC6rk",
  "key7": "4LHdfbX1kwWeEBnZ8PkfL5q1Jduq8ppGSXiXBzd49zjHh4ozwTSgxU9f97j6nvZGy7mgyMkMS4fmtc9uZiovsk1J",
  "key8": "4dQNjEfbLpQXZuRktqkC5RjV9k29nAsWzjfHUYYoDHPz3Q8hW1z2GotSbqfpMLzM2JFoAAxXZzu7RtdGebB4wC5r",
  "key9": "Qoj9xKRhDKu6ZNVwCmSJPT85vb6zTEzs9NnbRWiMyZ6bnLytDHz2axqGvrBEAJjpSQLkMPCs4C759eqaoP4LZFU",
  "key10": "35RZ1gp2x2Kyt1HaEJXyQsBH9AezZXKBVT6byaNLhwUVQwAzzFWcX7TNswKQf9aNFgaau3sBU4CUajDZnzqS3ZDD",
  "key11": "UUGT871c5CrXrDmiQG7thV3BCrQZukC1VVaimubXn5tB4cvmYTzMtd5e2yxNAt8tNWbSsXZYGiKiY12iTxkDoNh",
  "key12": "XVoy75sAdLoLHMNc4t2ES1fUgtYqcdmZX9yoY4UYFCt6DSEAAE7zsLaTHj8LuJe8ViTsfUBjc8ExE7xQmE9WDn6",
  "key13": "5r5qdXeaep6YJCuSKahBEJJBhYNNMZCQ7ciE3sStmYvxu86RjZEPjTVLPNDc7pfSxUMvgByPQgoHGGtZmsbMPack",
  "key14": "3KboWsEm9YpXJD5EW6GpfQ1kpA2EEtD4QRez13bz92VogVZGwzge5i3gL4XeSAPEk8bh9uA6PETxjJZR4CmhQLwC",
  "key15": "3GZDVBnpXw8MgeRSbcmXGCFRvCRiKdbDztxdXy2pTQrDbshoPsfRr7pRx94wB2Ant58VckRCXtXDcr2xPZ3d7tSe",
  "key16": "436D6H7yL7iyev2WuhWQ5zroxJH6sGsfXGQsNmHKLob3TytexvKR8iVwTi8wKM3EKXZL7K6yXSmwyL5J5387GSjT",
  "key17": "LHZzvJHxU8ovW9Tu9u8FxUAEwcHy2tbu5Crvu5RQsPEvhvCiE4xk1wNc66GJgrgbBkyhZZyDn59qFPkf5Hf3dk3",
  "key18": "Tt6caV3okSKmgEgwxQPDyuzgXh2BWcxpoPXehYDG7HvS9WNRWAS58pXwra5npSGPf3dzXGWPmoNCgky6HvWTMZQ",
  "key19": "3agz1GWWUwzuiS2moTuSYVwJekYM1S1eGyC3swBN2aJdEJQhsXqf66VT1BgVkMsqumxBHZexZBy6QYrZqCKXBRBX",
  "key20": "4wnDKTMB2Nr7NLrf68DbH6B4nARGeBXdU3vdn6XAeGebi2ivGY5qEVD468B2PR7iPy6t4W2uHcDzpU3VSgKU4jf9",
  "key21": "4JQC4ow6V67GYnZN4mghuvTsXYbUzxMvxwHjUVgjY946V4peSDSZJi5ysyH74eDXiFwAkWrMJVQ5nePxpPPyje9D",
  "key22": "3v4gLF8nrdauu9grFmehgYEZ3WiJTcJoiSy2if8LwFahR9V6zQUW35knhm9kiweABQsfqb8DA6DvGW4NJYKA4MP7",
  "key23": "2vf8DvYXtMRk2MeFKftizMrRkWHBbSGZv8L4CHHspcrr3p9sdpDyQ9DWN45SNnceUKByo6aCpZfqLF4minos6UJh",
  "key24": "3d77G4fZgxpfN64SVCEE7hQ34B7CL5dhzsLHoQBMEbgQwreDQhrFcnZbUDohC7uxm4myxyPupvrt4qVsyEqAfyBz",
  "key25": "4d2dBL12NwyGzT471ucZy5EzwTGRBs2Fh1umeC5trsP51Z2Ctzq7oE2shosThjUDKKBAGgNfcdfR9Ae4CTKCotf4",
  "key26": "4EEXuE236oj3YcsQNCYc2pVjjxhLYjw1k5Z2MQPndBzvY3NPVHKJtiDRWNt4MAwGRJrkwXbJMRbzJB2XFLMX5fU4",
  "key27": "52nXrBHv8psZ76eVfcJnW3gMZbRE3tVgWvHed4Th5jbe694vsBiUo2sxuN2VU9Zj5rrGR5mEUjL4JZE4JxGEVh5J",
  "key28": "4NoLSHuPHP4kyUFMeYQ6RPefoLjpTkC8HsL4TBaxz5L8DoQSUSdshiwvf5dyFaCqwiHFoL4sxf5VrbmwiUuLQPAn",
  "key29": "383dgwBHoaebBZVC9ZqF6tLhHvinik9fj9HmxVwWUeQ4iMveWsvYqFwV95ZJhBSuaAwzaXEvxhUmUK6spkLX4zzL",
  "key30": "3oKtmzRdCvjU22MBzUKuHq6NEW7HYQtk6m9QPbFosYfS44emeGjb7uxBetBSBwddGjU1JxX1CT8jegHA9hgh8Kwx",
  "key31": "4GVpwzbTKkfNgD2gb9v97kB4eJ25DXEnTbU5sVpAvVSsUSwL3bPdk7ohawkwPHp9Hve1wBZ2HRGehCPMdLacmTpm",
  "key32": "3sLoCCUif3tEWrDLbPoMtt4JsXyw9FcCVKxBNvgZvGVEU6E2vpVUEoKkd7RzCm2yTUCXbAAZnNPafuzLDA36oXND",
  "key33": "2L44M2erkFubBRTn9UdRo1dUGdupCccL9dyfzhe6fzqjbqq9o4UpbsaFWNGKjRwr2yB3Pztz7HSLSye7t8YwLLfx",
  "key34": "2Uk33ANDtM7KqTKe7NmxQjBbnw3DLZeBenF5VBCLp2G5GBprM1Ux7fcCCd3aWsFV9Uweob9ZVFNuesRNtS5UyVgz",
  "key35": "4XrQPup9ZE59EHyUYFubqK2wpxyQnktc4y1Hw4xm9bvTFCktD8h2GWUcArfXCo9CF6gGqxMznC4XSG61YM25kaGx",
  "key36": "NKsgmRNJCsTBvdhmNZwWcJ46FH19x6h613cfKqdUs411MZQu2hmHTP5mrFxF9jc4yoZqRpiq4nBdYScJCZourMy",
  "key37": "Wv5ebwWe85KFvgvA7RbM6ajvxMLZ3ajo4Lr7RraRAb17EX4i8WC4ZpE5r5kAbVz9KVKftGBDbNbZVTcHGNsTQAh",
  "key38": "2HY2ecEsYNt7p7mAysByWeRSGq3Cb3fHkVYTB646bqqLyh8WoWXYPumzxpF6AZKyxY3kpjcKNMchTgXpxXS8LDKS",
  "key39": "3UPbY5LhvneR7wRqcwrjmQu8xLaBKLbaCT7cdNEu8jxYiu7mm2Kiehjzc9Cc2wbFZREnhHpHjjck4Mp5mPh4vwvA",
  "key40": "4XwK8NSzuvfYCstQPpauiMM9gK9Yb151zSc2NC7uCgDnAqMA114urY2bJZha7oSeortNR3sczpdJGz5sTWY7EFc1",
  "key41": "35RHtd54Gq3tys4LPStM3HfQsqMwrkDFDN78Ltnf7MbxaLg2uupHpwuVQrJ1xYDjVgo5gUq7FAx3Fbh4eBgmvLV4",
  "key42": "j8nBubZg2uk7u18aRzFXjTB4dv9JFx4fyG63jGZa7rWZxoAuEytxq5googKwAeBcxdj7W6C2MB9zZrdD3tc7K4j",
  "key43": "CPdW4aA7TeazwkPAZGSHzBksH8hwNLKkx1paH1kN9VffkaxkypSb5jYpqg5My4PHADZpbo2mrNW1fensHx4WrV9",
  "key44": "3s553VRTsTaXk8SsaE4guLDzncAWiGHQS368VtAxAEPRphgEjnr5BychM5HBCZnN14mWMssuXxHKgEK45PhenPnP",
  "key45": "53t2M7dFaSr6TCd1s8qAcDPx8CWfhKLsncLpWs7okQkw85TET51JExKRBUbzGZvPwsvdMfahH649KMj4WPQW2rv5"
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
