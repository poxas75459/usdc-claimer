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
    "2ppFrBrzh9oAXPX5GrTE7zaNDopbKoDM8PhppaaENdb4J2Td6UL2c95d34BfpTvVY37c74M7mGdSr38YQHHH8Dy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26U5ExgMvRKRJSPw7Qvdv1fJKxCs2r8oeiuXryJMYqLsac9yBaKb7LrnvPqcskUwG2bVmtgrVyLE3YuUR61TeZwM",
  "key1": "yUpASGtZFfmHqtZeWxjCxofxVQzN5enxG2bGC5U88kmrMcCgFN7BYpWQZ3G2eKFyqdkPk8zUoqcZKNbLDfp61HR",
  "key2": "2DFrN1BVWBKN22qnDdbMmCF1Yjf3BTaDpsZNwMsqvVMWzLf21uEQpKhwKn4Fc9wNzH8cpD1iLJZaYfRzTtZBgbjF",
  "key3": "iL1y3kaMjjonMBMMWZekeMnhW2pHbQGjEP9z2uGA3zcqY73iZeNLcjvP92YYRy1Y5fG9QvR6HTzaCCaXyaCPVMn",
  "key4": "PEYcGgGyFwhJoVE1cf53kwGwVyxKyJkx8am4xfs9VYRWbrMHKKdWPAP6UAtTm1vmNDQeJmq6tXQEYGruBGfNoo1",
  "key5": "3irwydjf8SLaLxQPJKS4VhstAftDYozZoLNJjny1aVTDLQeJTERC3rvvRWmDoj2caxx2GjEALqZKXagxLyPBuWwi",
  "key6": "3tRTJt9e67n33GZEett6ZHdbS5bxzXa9q58bV3XMe7n72PddDpZCvh2mkr9tU3y3CbYjayfoywS4jhQj9BLWDBkD",
  "key7": "45ehLhiQiEDYVmHQNzPRgFrw4fQzEeDyYxgi7EeXVvucujN2jcUzENbSrUwqgDUifDyaJyfcgWn63YMho6FfThFD",
  "key8": "3Tqkyofw5SWHR3zAD3BPSFNXwYjtkWhYuDfEuH9s9J7hy6ECEB48ZxTki8QprhX34qFyqLh1Pn4RdhymDHTmFKGH",
  "key9": "3qakQsNQNTfgDVLhL84jh7ZjoC4zbUpPSAYd1uDZzyFuaVjGk2iky6sn591N19qnZtHphDwv62GmXwUNhks8phVi",
  "key10": "YxWnf1iDB14d6xFs2aGM2scGujZyKP54Yqfv88KpYQCPEqSZfT6FMkrtLvesdrkuXuVENSJ9aDZ2LrSjRwTTYP1",
  "key11": "43APoyFdT82QBGyjBvh5RuJ8ZdsEsBDi823iHZiu2j821jn5Buki8ST41Xyr1EgdV5dUhWw6t9mXYba2B1e56gWv",
  "key12": "HduKcDUAXTVyBG21UjPn7DLypnCVk3hJ5AJg2mL2RDyo1tbBrKHiG528qh8Acuv16fy9eUJg79gwSTC24eaXWqx",
  "key13": "44cKZDKH6U2uTnusdqf8VQALNo4JmBt5EPAGSVVr8wHsi9yQuX5wuiGjXib69S2gvyM7qLmYWMMnPavnYvceyVow",
  "key14": "5EKtYTPb1jqtmwgbWqt1gPxezBNuTuqGRqebie123nX7ceHnuVqZYSuGUee1RpP2PsJc4H9R4GoaRjg4DyidqEBp",
  "key15": "2oGdBb7kRzb9Yyauzt8EXaBkhXrbCYSX62XbfDgw7SzETN3mRjV2mXYJDVF6DYWmTyxehZumBh5Wiqi6ivhi7ARA",
  "key16": "3PxAr58GpDzdMmoWygvfCdafkwSEfgDFwD4sCYSoidc36SN4fZ26vBPywCChsxLYGFrQkqgB3szKRdMfQi7E2bE1",
  "key17": "4HEYt7qfW1TyqLA59RugHvaVuUUoSMxKbP4n94nL4rj9BWgkuZV3VnW2K1xMtPjVybjQn9chokPrcxDZsuyKVvA5",
  "key18": "3ogEwyW7jovq2o7thjDs3uaxMANhF8QiwUYxm9NyAoZsNudmTzkqb2sYcVPnqTFNZ5xfZUeMeg767fvGXWk6dciX",
  "key19": "GdMf5tZx1U4t3tUHJRrk8aQV34M7LFRSAEzzLAGo6YBbe4shCurJhcZSoQSkreKzDu7rmWMBguHHyDKfg5U3ocR",
  "key20": "chGxpSuaws5tZVJLjRkqiFQZiGqoeabw8LCVSWDWDbxzAyDnuS8B3ZnweUqmHWsX5S7eBw7ambrzAzmC3f6GAaC",
  "key21": "2mqia37M83mmFDF3SrDLAkEvCDiQ1LzqeLUeS8uJw5kGmKpn9G2fsER72Q5D7bwuBMK6QCZBTuvbzmwiGiSc1KUC",
  "key22": "5BdRjEnggXrQtsC8KwL3MiKsZNt6fo1hYTbxQ7nBuud1oaKhSFESF3svR2ReiHGBQYeaifZMw6LrNGUp8BiTCrR1",
  "key23": "5eeEwkj7ENMS3jbsDJerYtowmPC7mZpNKJMgDtF2m8B1HFns3izYbTvLDKB6fz79GKbAQH2kDUVT4CwySs1xto42",
  "key24": "WpZU3hZDS6Y7Hb9U2bEL4PzwtAzKAFATpf9w6KijB485kk9qpVRKuC1waD4TQDk3ZBTfSLWS7uq5BGKFgGF7yus",
  "key25": "2auwdY3aikZPJFddZ9Y3k6swgUKhRLQCn98uQGDrv4vaJCTJwKjz5AtQea6airCxq2iVzAKu2ZyivxFJTKzAvcRy",
  "key26": "4kyCx8MTywaBbRD5j4SnufxXofpEGj2AAQSLQJA9uz3PGR5MmzcfCULr3uygrZRW3sjPnngp16zvBGHFvWCcuhpu",
  "key27": "4RUNAoZs8VvEbRF24k82uyo42HsdyiMPRWoBXZFoMa2SvUNFDc2MSnzcyXUATQ6FksAr3uvuJw5mhDfZgXzCH4vW",
  "key28": "2znnqCsgQvobBeKmwk4u8sJMBVuvQW2X8Er6RBUk1owEvbUWxLevgJ9rUUtzUxRkJATZB8ZqjZHmMNWD4pJkZ7o9",
  "key29": "3dMZxJWWyipxt1oJFXBD4Aqmi88sC5kbErt54RCj8GigC67gwkSRq1ZkhhTPWguVsmiNcixogdb1QDCh46NKqkNK",
  "key30": "3srciZVdLEbARDw7u3kMkiwHPHYxjq466voCGF6ksTYMN3xDSNQQmKF6LkVhP3RzaEwDZUjh895U1i3ep5hoAEqH",
  "key31": "66PjauVWVcmu1cA4LB1biRMGtvnqb2ZVYKYVbdfVtjKoovAKp58zAmZw21ziLuQreaniQgP2QiGkH8QL66dpDJzY",
  "key32": "2oLEpF6dmWJH7GTkzov5v24X4hYgikZQgdDSyHGiAKXv3HRTgbAQeqVmA8RPJehi1MxHpBRRRduV6YpnKJduAJGm",
  "key33": "3L2XnoEtLz6ajF3MAc99UhwKBBvTcubJG1LYFWr2WYTSxjwTcyPH7JsoM1ac3gtik7yNbvRCz116pnAcKGQBpHK7",
  "key34": "4RVJsdU7g1F1uhGuHaMaawm7VPceJhHf148ocukVbkiF3vxPTsN7BgFb4RdUZPLemHoM5JrRHMUfic8QnFDrLiCG",
  "key35": "qSvYKpSzGVa3iLCiCTQ9geHGvsxUsyR3qBgjMyV217f87rBmdNh4F4PY4JVrxG8FjWgRvJN2JnZxVwb23oZTbF5",
  "key36": "37mXBHKq7vyz8UpgwCWkQmGkHBUbtCdu2899pmXvxMCMnGF2tDmVTLkW5G6XnLC8HLBQq2n6cCwL7HCK3V93eJeP",
  "key37": "3gmMU8Dq7GXcaPkuB6VftB7KVctkBL7LNF9bDSkNV1sAHQshAoVmEWn1stUxieQ1hGL6QaCntec9SD86ZLWMdoTo"
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
