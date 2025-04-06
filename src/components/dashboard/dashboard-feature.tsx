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
    "2sAtSsxwDLB4pQv4KSsxGzyKWcND77t3Z8ua678WrJ3YKk7XCnwEPbZMKUP77NvAuAQAdgtCSbZuGviYQWyVTREa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4AXRaZhpK1UNkYopbAqZ3Mks2tinPGBnQiNpjEefCV8Qg6Pceja6F4h3AjxgCSqAtyTqmZY9mTLTKUREPdqdWE",
  "key1": "5hFH2kMf3E9DZmQ4mgkfL3ZZv2SxJZCpQVi6QgboWmiZdYxtRm7PcscHxbXYGpwrnJni8eu4iDjPnbHDMgRvQAVK",
  "key2": "5LKQEda4PxcKzNR35UxgQEXZzkzuAtV1RjvUyEodwJrH5fMsytkcn39cuqzdeuVV8LTLrgvYTuhR8iojvVwmtv3C",
  "key3": "4RQXr4p6oYG43LqaoDdzeLUr3BK7eUJf4tgtuBimbtXSD82yFdFxJ3uY9Lvv14LsyFpHaUFjDaf8qhnS6oLK8gjZ",
  "key4": "2KDkGCMUrYQPd88URHdn6TJnoAoBbCXhRjXgAxUnKzkEBMcUnxvLMnnNvg5mVwx5AzoySQgKn5uoBCriayQMHcSM",
  "key5": "5wD4yZxkr8qG5vxmaF4BJQ6wBmAP6WghDmwygFCNQBnaQL9pcwSz7KiRG3dZFjAkbUr9AbjW5AeaqPvP6GnPSo9G",
  "key6": "x1Z1oE7U6SRFZX89DgZc73gusjjRvZGj7w7g7PGdp9duWVm4Y6L5brw3kJsBbSVQ65NJWbdQ7dSZoz3tpEEatvk",
  "key7": "4g39dGAt2MB7R81iwQfTS7tKms3DMxZd1mm4yfdkMefZcU9ohj62ZJdLm8dMGhVQ6y9AUDm5cJ3naK1iVPZMeJSs",
  "key8": "2ViAALJAuQ6tTtGYK6Nvo3cAojJKnHLG581MVcCevq5vG71q3xhxH2QjyaFsRYihVcBUwLvoWmEgKsd1Bg3sCZzy",
  "key9": "4K1CMJ35wB3sGtSmHFRX9LeHXVV3BqEmsuEg8JmKiMihzAXQGFjcGt9bRJeDNJpYfv5Q4HT2iaCddnsWAfjbZdyK",
  "key10": "5RMMJ5H5gXE7ZDHWd6emQxz3cUpzjKmtcGM6KjXRJSEBCPygNqgxWSjGQdphBBdNctEoFeZYhaeyCMC8xKnnKL4C",
  "key11": "5FcH4pQurLKCDJZ5eTxSh5odJQkPmEzg2KvXS5UrbE1PXiBymjZ5oWow9cJLwZUv5ceue9iRkmpdfFbbSYDgrdVU",
  "key12": "7wKZP6i95CZPDemXgiLLcyRwZsh1Y9n9Zx9Q1y6SY3DkYa3uvN4ZWqfMmeEfqY9rbvi3zrhhx5ysfbgEU4tpp9k",
  "key13": "1f8xKACg3WoSvkkkUmYSgd2T2zNuKt8tDQ7ynmULTohSgYVeuJb2A8JSMum6NmoGucMBVn2cHTexHCxAHjALcGX",
  "key14": "2XZKCE6WtoxkESikomaC6iKsJgAVFLPD5wHh6vYhhty16ZWhEFn6YvZtTotjmpCpma7XcsfYVgwrFX3ZZCwiYtYZ",
  "key15": "2PgxTh3hC36NvhtHdYpBbXwtqitESdLoHWXJow8HzFyJR38BCeB4hqh67G2HyKnJMi7jk1Bh49XFMAMTg7Mwh4fk",
  "key16": "3EaLqKgeLrH7iyiTtwNLRDzGhuxC1PwCkF4nFGQSCuq3pFgAzn5Ko3bF8pP67n2pBBB8s1XnZfbSzs5xLdCfxszm",
  "key17": "5UphT3J4eAJ6yifdDdGuARx1k9gE8KPVvUC5SrT8Yr9KusFfUuu1Jseh8J2pVoDLWBXXTo69j93rGaUe1pjdkwpB",
  "key18": "5pkeY4vagqt7duaEwR4hGDPqGUnrYLgXEyvxvqaN9TJiW4TbM8DuvBrZTzmyyGp2ZZbPCPtNA3A5shgB1cLCb1LX",
  "key19": "3ovbLxa8rotUfeVc36waVKbFXXHAaF6xcrCpRatDCisB53Y3oVBuor7jEDKpHutvonCcZCcBdm9FEiUfSZEYYdoc",
  "key20": "56o84LhrSoyvnjByLKuZygSqcugj3f745ceNf5WYnK1Tekz7PqPq7HBxDowxJ44s4geDq8QdZ7V4cE43vNTkzzaH",
  "key21": "GXDtgruNpbaNkcUD1ibx38s5UehpiwFs9MGRebUcoWPdDzmpfxetaXjGxATjLkGbUyhyLtwn8octDX19GGtfeYc",
  "key22": "37QPiL3YZqen1Lv6CaerfU6LVfbRgMj1UwPn3pTEQp8kdjmcfQmmjX3NfTtAqND7HyRzB55hzLmusGDHoX4Lmn1U",
  "key23": "38o6cBkhkRtSxwhqXH5ys8FWep1etMEH5Hzf9ZUTA1eMBs5JuXt2GyqmisbuHUVKdHZxy42Cop3XVSXyFuJA2ghL",
  "key24": "eVYdYfMYV7dbi1SEc2YUu1iAVFHr1uNYXVRH2p5Rwdpd3mvbJW7WnUNkMrPsb89fL6aTc1vfS2qRyS7weqLFeUa",
  "key25": "wXLSz42ASouf1aoyJFtNgkwmgeNG1ZqTNEZH34GbCJC5fB81v3SmPevUvN1sN6t6QciCx85JJYcCorYRvs3BDBG",
  "key26": "3eXV5aUEkMrrQGeGnFZTPe17ny2dYk9m2J91imQ9YmXpX93FudmKo7fWSA4nEL4yS8feo3xwFhFpBDTkDZU61bsp",
  "key27": "2YYKPjeHL2SQhtXXidmNesLcF5kstxgy3cFvUdCHD5P73hJst44qS3mjeMskhJ1LqWu6NX8zWoSisY2Vy8GoDSxr",
  "key28": "5F2SjwT3MCyXupC3Jpv8KvXFV9RP4sNNyXmowJVp1Qb9mwN5X8uop1Gd8LDCSW2f3PvzL4HyAoKktdGAikVLrUV2",
  "key29": "2ptXDqWj9WoEAxPCJhdWRp8ajQYshqb91qDCDKp4F8XUqP2BboSks6tPMbfDNa2FbZp72EkiKLmQTdvwmaCcZAZW",
  "key30": "DkwQmbfxTJnvzRct2y5h82NS9BhRLEcVXp1C91YcriD9JCH1roWt4VH4kJHaYVDdughctVgXMB4iCCDrSsvEMSm",
  "key31": "2mcGp4LCeZoiL2Kjsd9dZJxTWbngszwCDZdMbGTxxbTVbVwdeuek2vrXLexRHvjRRCjcnFZRtxLy3dmtMLWjCYk5",
  "key32": "5NK28a9SDbkPySyg9Wk5cjAGRkRYNBgmZk3NcjWu7bPUX1zg3db7n3fTYHW63y1qUVEfvGFD4U2THCvsQFY3u3gi",
  "key33": "3Wz1Cj7KSbBX2JCYFbakuby9jdgXSGctDY35zfHApkeXE5s6YvFaJW79ToxbKV3XYeqUChXCTu6MAP2rQWB1XoSk",
  "key34": "655Naw5aVUsJPk9HWcbSaWEF5WwUpHsFBuZvn6Ye3w9tB5HPy977pLJtiTnb7enabnSsnE6urdQr3Eys5PojzvsB",
  "key35": "Dhp5vmy8r5PJRXS8BpcgJcgCTU9qKejGLAGWqYvJ1dK8ASCJhxvXDNrRo3ks3EK7mzEJR4sCPX1gSxW6qiJFnQr",
  "key36": "vqEsu9cJNBonWuEzPkHPCviNFTYZGAosDKrPUQCMrwpQBXMtSk8Y7vr7UGo9S4eeoy1oiVPsehhe6rsawexpYjo",
  "key37": "3AhaxJiTmwgfB7CBWveMGgCGN7RrUFUh3P1r3yEupnMjPFNapuaUZULGpHYhN77z65d7ZjFvZDALrEaKFmuzU6xe",
  "key38": "5MfwXPPkrgCvbYvvMrVbjMAWAT2gfUXESZX9Cyp5rdKFJuDY4rhhR9mN5CBuK57ohJHMyMfhmZMHagpgfTkifFU7",
  "key39": "2fM9bAqbia5jsSmf1aguSbk29BVFyUhJXtVohE5iNGJCEZ7jnhYrNehYyDpDF7w6qvDHAm2e7MeREbMe8BP7mQfm",
  "key40": "5GPzxSBcvie8F1HdBNPFzPa51qUKDEyHsGUyVnCKXMMJvqi4AtiNG1tEj2kkwkeWG7aTm3AtLm5TXQvzNXqQusvY",
  "key41": "uazjdSJBvSZi7U888D8x25Ad9KApi5koV7u86pwMDz3v7rNKGSw6F5NzBXDGjEpz7FvvKy9hmU4W58pAcn1EHfb",
  "key42": "48PpNaPEH64NqkzDZAroUiNGTBBcUSj9KT66CeQbrSedi9dYjA4h4aWHf1ADfhNSMBFrUXDZuH7a8eR295nJCwAx",
  "key43": "5uE5j1wMqMJrbzVA5iJkgkVi53X19sRhetk8vJnpN4DCe5jr1kG1bt5F1HhAXjGGigkhDpjrR9kriXddpTkxCG3U"
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
