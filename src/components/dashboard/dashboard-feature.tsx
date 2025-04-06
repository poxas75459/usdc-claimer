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
    "4xdpi36KNLNQQGkydCxmrun6TvVANC7BAA7x9kapRKsoWptoUqdT7nYLvN3iooujbWMh3jdNntcVBarhN1NFch9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AuntsbMKUMGDvMS6f9VFRBAyA9DdtDzig9x8SNPJTHR2cYtXGS5wanFavGsVJ3vqzyc4cdrhwGNmUZCFxcJMYZD",
  "key1": "2EykEj994G52LnVLJGsqjqbER78uXsf3r5ZamoYKLGvJqpy6RgWekCcp9MRQgjXHnoVQ1eeoA6cvw4cKCDBKrTRY",
  "key2": "4BbuwZtY2QmEx72NzMPSmhGjpQeXdAfMhBjFPF1syTtyyRXgHsYdX5TLcDg1xr4d3mrTEbid3owuaoxdQBpXAY1S",
  "key3": "5HdKjP9YyrHQZ9taeZ28GuvH7uoyRCqMkz6VR37Ac2ddhjt9d4bK6PWJy7S7meQAa2ejgvvbBGowhQJJBhajLueA",
  "key4": "4QNC3uEh1bU3D1Bc9zGwxstoNCN4NComVcAWR8ubZyBgahdJDgPxeeEiQYsopymn4aNpEaFJav3nCrpjDY17Wxqj",
  "key5": "2QPKgyMtbnfRiYH74Mvag8JyFV73XSMUr9n4AW3im64WuHHsfyxqcKqfQKGqgauBFTWrP5iQ833AFWRmBYDdGh6Y",
  "key6": "5VZjW9x9MqKvhguNk4JZQjmEpZRmvtWiPFiYWUjjDCbkHVCSz3y9FMkQxua6jDXTULV3h25ACB9KmAoRFgxFBP89",
  "key7": "4MqXzn8VJnYLdZuU7k6ukQUKrkk83c9NB5CL5fX5bbF27978F5PmEwUiPZxBjgE3j5sZaUrgmPrt5Gji5j4mJpmt",
  "key8": "5Lzd8HSKz6PmBKn9TrmWaksQH7cwqGESUS1RpzB4Cze5G82jNCkFfckgbSGvLayNP33uKzhSVNe9CyxmG5mueXnW",
  "key9": "inh22K4G5QeHeWhoDfRnP3yWfpWWEwGbmrXvSHuS97vDgDUURTSf8p8rQDhTqdvv4DQcZjX2rmUVGdpJNJGkrxc",
  "key10": "u9dKZJFdoaPPZJW3ztteTjKRYBmXWUZeLitcFQPb4pMCKarqGmNDeeQnjh9i7VsveeeHafZiSzKUbXsHpTNrseP",
  "key11": "29P7LvwE48xW9G4y4nLQrSET3MvxanQYHZwFpEHuX66FYbKTwMYQNgRBvjJAqoPsprdWTfgCuCH6Dx1qb5q5qtT9",
  "key12": "AatQpFPdV6CiYRSLaWBZCGbqygGye896e7mVwpsLv9PTQ7cJxyWhTfB74GqPH6zMoQpVhn5u42bneBHL9xh8nB6",
  "key13": "h7y27jfczTBU3LgABxa6ccHVSHgSpFfL7byXZBQricF4wZYaC2YmBV1c2JbAhZtXoEqyT41RmeBwD8eLtn6SKWc",
  "key14": "43sRdVhnvzwVaugc5bESHpmMJRKvJ8s9e7TRxihgR46KtXzHimw4S6v8DhDYHqzqcYZoV7DhW8oV2XdFxLCX4uid",
  "key15": "2LGNrr51R8tt6yiEGUAKMSokX9bE7AoxudyWk9wUrDMU6ep3maTFY4oQMKWR51NufC5xQDHx3efsscULcfRowcGk",
  "key16": "63arQuD2kWXAHty3xJFcX6uX9Ucuh4kvArvySnJWXDazcgJ4zLotUk5Ts8hpZRMFxpXg2y5dtZwmn5ibNAGEq6iQ",
  "key17": "5A7cV7Xf3LYE3Fio4vAWeoksE47J99XSvsQxiuwMokRLiQbFKeCMqrZzaNsqWz2RuQu2Bd4q6vYNdUoqQTc9LH1d",
  "key18": "41tdJv3crMqGCUjiA1vnUJHnu48HvtmtcrJZM7F8xEreLaMnaNf6GJcBxsyeUKiBFuh392soeSJ4DYYogVziH6xW",
  "key19": "2HMwCcoAvGYABMLqTuKtbgG4kKrsbY8awRtM69CaQ6ZgWeD4NZ7UdYW3rXX6aemdUcoYNkhULTJXp5odzYWinAS9",
  "key20": "61hMYtbg1eqwkkuw3DwhuepW7QTrazcSiYCBzovjXs4RABxc16tS3gjzK8qKdroQGDGfz4CrjxzmspgHKYpuvxZn",
  "key21": "5CcrPNj1PTuqKumZ1zzSgfzTwSWp7Da3iKuDrNomQ38mKdjVfN3BX92NtgHNKtWaADYN4GCmR4CSpeYsfTDkWFnM",
  "key22": "2QiVLqy9NKn6WHeF8WKfqwumpHnETkZdGyCKstKhQjNDJQ7BLTvuvhjPdGMrgrQCqP2izaUB2pnxX2fpbNcBPc8n",
  "key23": "7BqzntBJEq5CgqhuWBWYyX3aB34EGZds7Peq5RqZLpToSgF4ko6ekDv2HRbjpYMq9esrd7SN5pcRbUuCnBvQvjK",
  "key24": "5zCXgHcKRjuFHYZASUAoiXnbf7fHdaSG3PTCyJ5LTTxYDMhLttwb9WnZc9w6r4mFDsGhBXWXVUBy37YRfmYW65EQ",
  "key25": "2eJmBo92wzcL3NWP7EvxNpDWQbDwrg9d1jF6xE4ewk4ZN4iyXq1rm3WAM76rvaobnbmzQCk4r2Ysv3bFB4WrEGs3",
  "key26": "3z9UWDjFV3f1AtKaWP8Uwn1ExXFhUTYvAdhwgfdY6JV1jKBoeksdm6N7NMkKSzjSCy1ZHDTKhQPxVSkN7NW6zLzX",
  "key27": "3yj7XSiMTqwFcXmjUhks2MENyd1ZknygtARYXcbddmyCViibLxGEN5JdrHG45nCSgcD7zrU9eg4Vutwy5nyJELtb",
  "key28": "4VHXHb3KQ4nzPRWR6oBSaV6NX17c1XFbZpF1f3Bq2ywPEZRBLZL1ZDyFkWaTNHUo9fL4YFH6moSAbmofMd258er7",
  "key29": "4iWwb2vs6AfKWBUCtXzZqQNUzLKvpwm8cqvdSqjNo4xoZpN1c7fAub5wQdxz7Miyd7kpn9xZJWyV6pvTtMLxoP95",
  "key30": "UKX9jEjYkuCwTKwNfHesrnxdFNRpBLnZdaZTdwDvSU26bfskXupM9j5zjoqMC7jcUpk1K5Br2DDeaEKSgfwpR46",
  "key31": "5jJW51nijVmoTUoFeAXjtFRB7VDzHi2egLBwgGKvc6Sx5dGarpiwqYrFwN1ZagtFbsACsJ3hUkbgVQ5V7jXExKgk",
  "key32": "2MyQog7kmy6z8XRWuxS4n6QUSrTxtqyxiTbp6RWywfqHzi7DWpWsUj9PMxdPFBygnCrhvArAaPZ2PwEnfBu5A5GZ",
  "key33": "NfjWSnv88zdUbEZvRfCA9Q2VouLVEHvStb8wbrGR9EReVjxCj88X9MR8kuiVoQvkdanxpx2S7mrtCitQcCBpC6R",
  "key34": "2p3zapTsW32EETpqQopdSmYitCssBT3LBNY8BzBxnsqMq3iRCS2RLe4JFiUdC5UvD98hF6i9AW59eRjC9jhvsdee",
  "key35": "5coqBVUHLtpP5ZXcH4CeWfpnFwpH73pgdvFov9H4V5sFtCtD7Ubn5RAQkfFasRtzpjM25bX6cYtZQN6A5hZNLuJN",
  "key36": "4a9YaQaJUnaP7gpbhXqrdfVSiRtWssBdUEN2GhL5s3BuaJMpnofNdnskbzo7qXVZ1d7Ron27bDK2UT2w2ifc2Q6y",
  "key37": "2nzo6sEE5aQa2TmKj3kZYVPWnnm6ZpWYaVcAcNgiMVCSBgywz51ZuPceEzA6yLKEUphYnCZKbVpPbsB5vftpwukJ",
  "key38": "5rqr8zsFzjjD2d5M1UPQFvRW7hzj6Zxm3TYrT5VnEUoXoHRZfUDvehHV34ZC4ahspvNdNKVyEmD98fFX9JAK3Lph",
  "key39": "3Qzm9HZSvWYHrVwQwG73ueLjKiRWiQ5Sj8zusDLGFJtspwSqZst45CLbm6X37nJQxJD6wmHsp2aBJDodMaRJC5Hw",
  "key40": "WWztwVj83q2s6zNTrGHsfEBZqFdNa41Bd9sJovpMbyXAwgB9ufuexuioxqgPcavVStMPvd5UR7HLQBi7HRosMpo",
  "key41": "39EXW74TyXkf9iij9E6gwm7Jk7cUGZnu3qqrdYL4Zxn2GVsArbgo48xtqwpdJJaHhE35EnNzD9q2PNjMAaMpDXPg",
  "key42": "4Kk69U9aqYS9JRMgPXnEoewk9TVuSiLyUWt5Bbfbare4fgxwdRPWk9vYzJSbhw9BY6WNbdMhBre4H279VCPevpdR",
  "key43": "5AuBz4JumRccaMQr7A9pVwMwwsGPgzMq48q5peTKk5CzQHFQyhHVaJCEtqbYtnZqKUn6h6e7g6t5GtPXr58ntj3h",
  "key44": "3TLbynbegzb3eWXjoJnCn6fZiV5cPaF1a9t3YzU1TdqsioQxB2iTx2W8YUmEwBiRHf6MiH74nTAqrxyZes4srWFo"
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
