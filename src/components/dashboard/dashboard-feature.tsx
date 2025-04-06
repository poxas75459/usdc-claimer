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
    "35aUefJ4HSP5ZzbYGVNGafoXHp7vn574ywMhebFHJ8x79RSJ9xVFz62Ao1ZiyjJWctmh9bFGwY37nmiQRd97EXJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRqL4VJ6uMYZLp5iRcfTL7KNvaeZPbmQkpheRPPQNYd5wSqWdys7wXZ1PYP38SJGMXGiT8TyJLzRzKUYUdmnptb",
  "key1": "3gBAJRsMjnu74VHq9CLrbfK3b5mmMrzduXptEtVLpnGvyqzu2zMEWhVsEY6mN3Cvmv8VX2Q4mXPmwcMxU91NAbdn",
  "key2": "2cndpqo2Q7WJmD79QhDb6HEQCnFW3ehsiTLHoTB3533372Z8uvE8xGThi5w5SrUK5pvC8t5G2vj9rRYfV2Z4cA2a",
  "key3": "bM9WFzGQEC2EV8XGR6Xu1krECoVKyQhwGwUXv66tATUzC1Z7ycurURnTfeiUUmG5phmrFho418hcUAichCyN4nq",
  "key4": "5eymes3jDXFHWXfo2ryPZ4jxHEBqJsWGJf4vnnUDxhcmVuNW1DjnfopL1aeAcKuiX3njS6x96Esxh6zvawYgrFnR",
  "key5": "2gzEHhczKygA4ngkrTwKKrxiARseZDBLeAEQYYuadBWSZWmDUjjrJvAoBEVyVaEhrGfJRtx8kFDpqvsWpwVBYRVW",
  "key6": "3VPdEWTWgFFR3tXaKkveUz1wLSPfJtskEb4cmxaFR3WY7EzRYHhRbVJicEmiJ8xpAz5Q8SLWy8ySMkQqPDusXM7x",
  "key7": "9Y69ApcjaFNAfHwVZpaFAWHqhUkgn2K5nggoBj3RJXp3WAxFWVHoZY2H3aQY1Ls2evGKPiYGEZm8roi9g9tDiq5",
  "key8": "3aeF83roxgwzgsgQo5Dw41fNyHyVnhKH9QtRttFRhE56cAv2oeGxSacUbKg4s4F2Pd3HtQsSTjZhoRKaXPpk8ghX",
  "key9": "22DuKRqUQpeKZ5Re11jTrJbnyMJm1XK7Jf2mVqrvxX8UbLWHAU73RHYJLC1ZQ2zyD9JuT2qT9PwaNu3vzMCnnycN",
  "key10": "wKsee7ZfsqXkyQpavLGGXNvN3XQEs2DKr3y6BvTcdvhfvn4Xayqb8odsv4tckmAQnMHFR9qq9WPpUK5ruyh19YG",
  "key11": "4uProu5qSos1tu5AyJLgJp6mgA7vkVYmAeH24aURmiU53uYTjAYQkYMGAniyqDzuVSHQdKxjmACajmszzAURWEsD",
  "key12": "4kHN3DQgbXRQmcJKwQqfHN9C5Wq5jok5E7MhwjhS5oXeDfWbhCxxLRXJKLpt6gav12HcSemCWDiUad7hZTwpMwMj",
  "key13": "uoUBwH2ShvuCdnAfh9qsDc7enCTcsoYup573zjXrG1EumbJBhryEMG92HY2HDa5UqpZyfjnVJJsUEMk9Z4uy1Yh",
  "key14": "2wnbHRduPAgVpC6Fgcnums4Ceacf5LCLoqV8isHoMGCKJ2AhGrsGp3nonXevneEGruj86LWPADb4nuZKBZ8zGCHJ",
  "key15": "4H5kHjEoiWrRPLd4jc5g1t5XXE2janZ2viRCFrNbKHjvG8SXsepajotfgG5vNURzu7YwSau5wcmYqsGvJJTUu6Xh",
  "key16": "4BuaAJaXMKJqfYxS8DnQyGCG5dwyPqkbA8xSKxn424XBS8hdk5pLxFn4iZFku1NVvjkYY91rRtE7MuKLCMgoEC7W",
  "key17": "2ojkBLvbNUVViLcpVf3MyMdCqCQ6a6dXkzDqJnTKZdcDmRTrecp8ZGzZpDw3qjpVCZwaz1jUzBKZ71sLeQKXDmh9",
  "key18": "3FTb6XE9VomPCRaDS1QGutpweNmVoApiUChWC1nxLccucbfzRjj88j7bmPuaSpszHfUEThVHgySeT1GHiV1V4Go5",
  "key19": "21TvGFRBti6S37NTSTqbZWM3W27mYMzcUWH1gHec3bAmmHDW6ceW46iDZ9apixMw6Gf59S5v6Q2WeJmM429aQG9u",
  "key20": "4bh2EhXs7TB55edSezoSKVmMteD9A97u4oEtx79wyAryKb8a9M3vfzRux1KgcNtaSoyv6fyYDPW3ZE5CyAcg6C7m",
  "key21": "2V4iPRn1LCpAAE56Uw8SpyFCyvf87iSPacF3gKeg5HThU7m2LTjPTYH5aWVbpmSopxzzV5YBcD2xqB8iCuHE2Gg1",
  "key22": "3J1seU6dZqFgEjayqii56V39AmS4KZZ1tuHd8u2EtisZe3cjuPh4QYmvx4HrrYwxFo1unh443cMkhr11yGgY9o4d",
  "key23": "5mo39fGsrpaUDEngF132t2jrUzspoWHM1YSmnUq1BtJ3ekrZvjEPLptYPLsUkuHzjWzCQh37fNX5wfs5drU9vusM",
  "key24": "51iVVsR6QbofbDqDXuoKGMWMnxfvfmQFABLhrkyF42pnVSjipR8mZC24xHopYfEGw786zkRdyUCKLH3JbcoQfFQR",
  "key25": "5bqJ6T3GRZ1PMyWh3EePo54AwwfYpWbmZp5oAH8wH9garkhVq1YDqAtCFhfHMq8kH53v1nq2uJy5STwLzcnyEsnd",
  "key26": "4qjoZ5RdhJg9qBeh991M4Za2btSR7cU6fy5g4yA6Cxm3GdqS3aeqTS2kZC9tjFM9wLTGKBocmiPxiuPUQc3gY9Mr",
  "key27": "57vwAZnvnuHBPTNaF9GcRx3fDVdDLcvNYeftRXbj3TKtXToWTpFBERXT4cbWiRQhk9ZM6J9hzT4xwDHGvD6JoQhi",
  "key28": "5TdKDgfh3jDPwFdndb7Y96K5xNoW6eVeVamNeUa45AwQnTkp5KiTH8Hewu5GhgV6t2GntGmAJsEbkvdQUPmaD9tT",
  "key29": "259c3biXSYVw861rgSnY4Tz4G82xgzGz47bsXjqnYgD71YCgGKJEcMrYDqfaaxQ35pGe1poG54k7izkh67hwxfVe",
  "key30": "4hsxmyEZRemHsSVd4eWUUczeDpUe8yXe6VJMTgkG3HuWNqbLafUVZTPiqe1y6vXiZac65yUDAKKUW8S62pKQ64Dj",
  "key31": "3C6pyNcRZjBTggbeL8oTn7AHLfzZJN1Xi4P3iGn7HcGe5VqKrtf3MyFJwEYdVNoScCQ5S7aVF9ErRNvx8hD87ooD",
  "key32": "4FKeMV4sBUxGUPSHEn3i7Z8Fb23qBgUwUpMTKx4RQDhuixsU2xkRWrMFi6KB9nqwxpRVtDSvaEPnhVcqd4R85tSy",
  "key33": "2CNToMtCzY8Nmd9vCGyqBM7CtribMGCUprP57QT7fqGjJ1GK8AB71ecTuepxHsFTN4PVZ15dtwnvLmDskWhZXx3H",
  "key34": "3ovN3bsqunFkq9ziK2wbTEnq2yDQoyGGD8dCCvunwiyFP5eKUSizDquPmdqmhutz1C3rsspUsvuwGGekCFE4SJK3",
  "key35": "29F2km5yi4BbXTUqRPPiVt3ebL3DRNkZpePhQbm5nnBd3eiBHfddzPe6g6X1RYTJEArub3BGigWEJuwq3FDLakQq",
  "key36": "2qaGrTwrn4BwMLB1s5oa8KTJvY8Hm7kCdda23WCvKWEfTWHu6sE1s7NUrb4UEuuVidGckHF2LuFa2ch6hP5PHMoZ",
  "key37": "2Ta2BnYARdtom5KUouPb8RbrVXc1cKL6didkHXRBgX5Mi6T7Lq7m4s2FFvuE9LYkCZw4Zd5VgGRZQi2kjsaZ82nr",
  "key38": "44Rtc6jivheWoQpgehcFsDGy82NmeRAAYci9v7u6GasLR128yJ4n6NA1UznSUpzSpDHJJAL6dXbX7oEUGevU8Fuh"
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
