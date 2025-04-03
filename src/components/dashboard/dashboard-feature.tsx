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
    "bZ3FCsnr5LDsu16CGY7Gb4edvVkrkHTbY5V1T2jBwHNxhbBsePmLgRb4jQNav1DUaRV5DdTE7s3DUCKjBhamdy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9xpbsFtnzjD4zB7BYUHq7NDuzkyiFpwYR5wzksWQjkdvDy1Gpyxa7p9e7T4XSvRS5gVDE6ZBrqYjv8VyWkw9XC",
  "key1": "2Rt8RosHrWMLMM8pTrir3fA5E4SN2HQXBTqkNdCYUcbarDchsaJ4qjNDqWiLrutyjHiZfNhZyQk1De5pUGg5piJc",
  "key2": "jbUKdJWKSZ8sH8rL9aXDRGzkkb9PkYUTwSCxNFbyD4LgczhVf2XSUrMHAj6bnmneQTSSrERUUcWuHMgV81WvVCM",
  "key3": "2Cp9n4b2sKM2rzdr2WoMMX9wBzpaeKWF9rr1RkWY8zVxoU25FSJ44f2Awpq6Sr2jUKn8aG4shwRWRuuRTLFfEQkp",
  "key4": "4nQQPQsYd6NXPnTLEppQmH3DtpRYqWCYEcwGeJ76xdZnxDrUSRzwkmgvTBT6diwAi879qjzC5kNGMLKyCUJbb93u",
  "key5": "288q1FrVHFevk4hd23nb3CAPXr53vxpui7AG1WEhrAYXEZJiifRuXPYzwP7nugqeftCYNsDUTiXbfYSffs53TBfo",
  "key6": "5cVdfYKooEbx77Ub3Awey3efN3KSL1t8fvx147kh6HWvR7BnqF7MpBU9py4i4QeobvXojY7odtBMTvRHbJHEvwGD",
  "key7": "25YhiABNqyFAkthMreChdu1jrnxefF45G1yPXNqFL5eFrxN5JepHMSsNPvjrdHZCz6umwYXfYxzL6PDTNYfiVMwW",
  "key8": "4TvHsSKxFgNGps85GQJ4V6T33qdHpykRBVA296nB4eLa8RY2gaEYkgQAPtwdoWhge4UXNhT4yqjjeYjZSyZHBPpv",
  "key9": "2idYk54QZXZULcrqPMHoehqe5D1mY4Z88KtnHd2squCimfexVASf9mtG5Kj9ciP6WwMdc12Dfd766n6cnjaSaJJM",
  "key10": "5tkFDpBGdySqMwzJWw4UrH8Cb9kVt3xfBXssQVNXSdm5wG1De5hT1p7Exg1ceWyizCQta6YwUPLEsVhYeiL1U44z",
  "key11": "3NtT1mnypMERjD5V5LKWcvPHemq6yxeyMoL9hm8MsihrdHDNkzGFTq2YGLkhJqFJ2SYQcd29yXHZH5MSptc8gALB",
  "key12": "4prBapRxzX6Qu3vjKCK7j2PTLtTeJsjkVb2JeMNnwzxiqz1wwsVTUn37WPSJsf9vDgRjSZpbj93zZCwggNSqb3od",
  "key13": "2SM6Z3Sgah3yRd218PZQUDooLgrZd2RrgziB5usRNtxdnvkWAaNN3epuLPtGB6Dim3zTLJ5qm7AnWPgqF3jpMRLM",
  "key14": "4XnRmnbRC3mZGJkKowQ7w4NRBaRSBpgLFwZ8bJANc36h3CCvLAtry4GCtCXnJ8kgVPVF2EsWHgAbY2mGwnmX7gmj",
  "key15": "61PSgXNbTrdJJwaj2keoYkhQ6N7btv588mC3DyzoYCn8MrkauB7D6fNV5HWJGof6Fisq2qzQabWptePqu6oq1a4W",
  "key16": "2eBZcszFMAid2vy3fvbgWe6NVfzFQ6f6HFkcjAnHzsxcAcZiHi6gSKkJzK5D6QeCFWrNxwzJFAdkjbLEagQfU2o5",
  "key17": "tfYyJ29FhFT5rifX3AAG4YqYzQbDKifvDGijJTubHZcKu9swhaPmZTs1qYNkr7dC92bEgVLWb4GJLiVEjHqDfT7",
  "key18": "4kWkTE6Pc81NkqUPW1binCHwTcjvozW4kLyoh2FeWjaqZwjot5RpEvGP4jLDrLKiZHydS8tb1DptAREzhsmXfx5f",
  "key19": "2gFiWJ98s6SMUeWy5djyWR4fFuwA4DGzxu77qn6nqaEb8jH1Ju31rBWS93SK4diytmYVpsdsjEpWJaLrx7h6N9R3",
  "key20": "47nwUbQYicyFR2qCTuteSDb8FYYRndxog4yXJPBx5JyNsc5YZAcyFsEk5CcfiA3DFomc1dsL5aKxgTmEc26Aeq9L",
  "key21": "2JC4iJSCWfUX7h5hCqA4TufLSkNMLgugoDcW1vM9G8HMYznofFkW2j9JKopmxvQMDe27MsgrqVfKxfqgZ7t9Potu",
  "key22": "2NHaiNasNAc47c3LffutotYX2kxABtioynCDrvdZVEvK97Dq7DM7fiTUNKA3yU4pCwUMdMSyKm1DB7RFWZ2niyQG",
  "key23": "4iMen4PcWbh12KJfam1kEQwJHhW3qypEQ77iz1q6VYfdFuGzZJ46BQhBjW57qe45Q4HGX1FEDj3jZ8LnwLrcKNsX",
  "key24": "2uKqCEbRwSktgkWjL14a5pWnDY29JSctLpjqaj5y71mVQghWucMbVe6hWi7mQsMqvUNXsgw1THVF672G7zBjdMKW",
  "key25": "9tDuTgqpfZUeUKQefZEKN62wd9DtjuKJ3qFPtwJJc2N34ZdFHSbJzMbahgZWD6s2qBXi7zFFkV9CjEvfF4rhofD",
  "key26": "5HXQqy5JYLHa17qmt67RHHDNgVeqSW4TTBA7XJhcaPy3CaakDP9Phw7pk65Sqn7muhvHi3YH9XyVY3nscdjdndRK",
  "key27": "48UQn9GibQmxcNWX4ZSH5N2oFeyVuTi3XmJD5874NtS7cjRkEQwvCiqCNgVQWXiGpg7hJBra4rgknQswFkKsiYvm",
  "key28": "2684NA3h1cpvLuUFhhRSGHyHyXNs11w6fJXmVqjuRT2auC32S8Wx9kwrrFNu1Re8rgVvWzjkxFpMTwfjBJm8Zkdt",
  "key29": "3nF3HFNzDJKmrhRdtYPgffxKhiXXo2wmsRRs39mBZtkFRmW4qxPQf72LnEPL6tSmixtqcAYc6s7HKDHqBWmdFnEe",
  "key30": "3Qx4LZy5H2WxbDXLMGheM3KqmpxcT4C3ERaB7z59YUeAG2G4qSGqA8sZ4Dd2HP4KNPe3tksmwMKBmAFALdL19BYx",
  "key31": "fRm7u6ZuLTfvM8PVfvQ52hyRhcnndiJPV8YaMD31M1baP8vqwGTnidmQqN9UiHmabisKaUtfqAWVPQyLwbZxERo",
  "key32": "4Tyb2vhFg8kiYv9uvfsQ7nJTJaFqG97wzA2ySLK8oM7aywa3HZNrLCcoY9kdpF5emzRH6B9SBU8vhkHoR6yTusXs",
  "key33": "5vqqt8kposYhC1B55FrmyPMEotYx1z1SzgkXC1jjtKhPpvZMb1EKUSLgSHZA6NiWTb1XGctPQyUnoVEo4mWuA7Xd",
  "key34": "YQE3vdJyJZzoEMrimA5Mg2KQkTmTtaZxi3Vgq2aiRSuzZGzzLYuSwfPLfUeoRuno37bSGiiqqSgxfzsv1aY3vjZ",
  "key35": "4x7JG6hpuLLVf1LhgGucgcc6mF3txyxRjL5mDZLnLhQy3oTQjGoFKDH1vvheoM6MDRziPs8DzJxv6jUSV3Hje9z1",
  "key36": "2s6YA41BCTVwi8FpyaZVU23BV92GUtUmEQB6KBvDapALxqXXP6YWvBuDmvmeMPxXKbWxSkv5Mg6fnfSNF5RpN7jb",
  "key37": "39bBFe39A2EGa6GiZiet7fcMyz3N11XessViGKM1HHWZiEFSuW5EbamLpzPCH3QG8JYapKrxKjrEETctL9BdEN3z",
  "key38": "3Xdbf2oKKtBDCK66nzELswkafy7s5YbHhUoxJnuHe3frngTUmyRiMcARBVbqnP61wobSNRm8hufyMYBUNX9oiS2G"
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
