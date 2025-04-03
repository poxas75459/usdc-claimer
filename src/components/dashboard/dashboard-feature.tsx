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
    "48HZ8srx2E7orS8ys1FgSXFFp8zU55rPC8CGXAnkhy4DkpsZ5Z4UqHVhDoeBUTdictLfEnH4nRcfUXgq83Q91grq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5gzqB1mWed3JgBYdaGtgzPJ3poanVfXuco2Eu4wqzvEHxXQ3csmVqQww3NcRhACuuRs3nGL7oAMVKE4hRkCAsL",
  "key1": "3RWBL6s44eATC5UuChdYtEPtAvbjwMYShBnonEUD2HqPK1CV24QJcNEpy5rsr3HYpSqhL9Xb3Pk6bWHQT4db4BsY",
  "key2": "2LB5id8iCK7U6JhrYYmm6eL6uyYXKc29BdTax51ArNjjyguhVoxU5rXFQHpBirc329yrLYzLeC8J6JuHA7HoLFMo",
  "key3": "4mnJjo7c52zRBZbcq4jdM1swGstxqJVWveKSxK276aevadHqtCLMJD4K3oki7amTuUV5NbcRmkNVsNyAnuNQ9a3",
  "key4": "uFMuwyFC4ZWge7ZYRxtzR4HrJnfwxHYxihf6h6XomroQnbt793tzDVmCdAk4Hb66N3CV2t4txKrMx7g3p5SWLHg",
  "key5": "5ADfop1FCoesVunLvtNRWBkFwfsozNKbUR7sDQGzihVHwFD6MFbEPtmSJBh4GWcNEpJ6D6AC5TkaMJ2BbHpy4RT",
  "key6": "Ym9R98dgHnqgVTviKgFmqrbvb5Nvj5Q3dQyEB6bpGevgrhsGbDvvMHVRmpBzFv8wx4AMCHWyKnkRS7QoJv9Kj8g",
  "key7": "2dVfZApJ7AiQFgjtm68EmRaMS5mXg39nadBU84oYo3fjyFuFzEikTGLLmAy9qPkPbMEmV1XM6ZVeqw3QgCJJcF6g",
  "key8": "5SEwU6nuDCQb3k2wXmkGZNnmNzShyVTg6s1UYqiU28RT3MHkCLrKaXX1n2WyjazNnfvZsYJY89kseKoPZsz3cfaA",
  "key9": "2aTWdTgLKLtfg8h9tUajTt6epJZjSPBtaiEBTjnKgP9HyCXn5rtspDd3BQUMnGp1F8EerTgmd7FypmRkjZKUQ1K4",
  "key10": "sX162R25ippnxPgc1feSJXUpUeszvkpEYJZt4hN3f8cc5BnxyUcYPBb1P6WmAmfZqWmMdYYdefuGNMgSxFP9Z5F",
  "key11": "MWrE5AQ26SvnRaovGuHpyn2uUkGdQNSHXEqZsr3i8JtV1AYvmBXXMxHd2JpGz7gk3zU88YkoyxcHkUG4PGXabdU",
  "key12": "n3EZchSoPgyJawhXKTan12Zt7XS2ACruu5QjKSyo1Bzu6RK7naBFvY9tWMHayMHMhuTyBdCn6K7FcBFTYFTqCnv",
  "key13": "4wcpi5ftu8RF4FC4s2BsaV67dQYmKgYnDvctq4sHukE5VNSTyuhj8XpkFzoMEtafb3HP3vCdfCYXcSyYjo3hNGQh",
  "key14": "24VngA5R4w1f7DMNfx5KDjQENH8gX7cg4MEVYyYLuUpuP7EeSQgKcjJP3EadV4xrvx4d1faN8ztkFMe3q8UQHH2k",
  "key15": "345s8TZbCqQUz4CqbUTRKqb5g2Kss3FGFTue1fHmkFSC6obNgr5XJyS13bGHQJnyiXrbiyWjKx6i1wMzNekKmMx3",
  "key16": "39gG133zUAXega5Jjm6X1jv2iVZR5SFxH5ecz3EUBFUE9Xp7xUsWSYDvPC9zDpsSmdMNRrbLzHTzhbrdYqPupM9u",
  "key17": "2VUmXeLK4ddJYhxA7umGaJBr4kVVAJHv6VFuM9chQZrE4LwrjJWWu2PmLYq4bpAh62UnAszmawi9YoDJfKNsphbE",
  "key18": "63V294hQSQUenCNEAG9rvesJezedGu5NuLFF2erbhDVPnHevNA1uv4xjrRdiwLkehh74kHPAxTwyQR78yvetSnAn",
  "key19": "MFiHQiA6igAcVpdinAu2HeWiH67LGime9gPxvthtCFEU1ic9qJDyim1EZAWvRBgSBLYsXxNhrJYA7ndjS4M4zpZ",
  "key20": "3bc73Eega7nTVYeGni6PGMhp7zN9YFPnJ5ydiCu5EKxLZcztCjzncyD2jivwurFA4igo2K7aNcihZTAe7E4e2eJ1",
  "key21": "5CBZSi5NAsNmoSLTdGWg3AnwYpxFygwch9GYFQz1zN5mdttei1oFx2SdzTx65ttxgrspABuiDqPwAAQDZrKVswyY",
  "key22": "52tJpGdwVs6Xb1Zyf7hyczwDo8NaCsDhErAcPjFtYp5D4wtFjHFkPJskAQAMdZqUV48susCrkPHbYcMymfQ39XKU",
  "key23": "4BQtKgempALdy28oC85JepkrW5xJBvEizC3W4N1wj6JvLE7A8k1vWgmCJg4Jhc3JYHoTJXanTRVwFnngtXgF2A14",
  "key24": "2uC2ztoJJd8B8t4k1M7B71pod4rV2r4LF6MEG3seMGvXpHheczn35WA4NdT8Uxnj3oupgnBuiUhrAmftbeKq238a",
  "key25": "2JMQ7SWMk2WzvUp8N6E9gVQ76xxuEtbAE2zTWaQ1FZUDR4X2FyeAe9SBur4UUn87nM92AUSj3ucvffaQ9mZ3gDq5",
  "key26": "419LqMrSWGbwSVmF5AfHe7gXhrr3F18uy1thbrNN76bcc2AWLaNAtwdvNU66gwUV6dwEbj3kw9XmEuuTm4XDmyZd",
  "key27": "5ZN6NQ1cQNu7mbgTawVj7VykmV2xqNBixZuKLB4ET7Yu5gwFw1cfWLRNCoKukwfGzQGxUxicczwrgGiCwPQ8eUCy",
  "key28": "2S9A3PYUW5Hbno5PXH15mzzTituiiYR4hBBA7Cz8SWebt9bhLU4eYusTyatWfpiELyT69NMa5ZsSBbpfWjsgyBAi",
  "key29": "2MKGjVHi2x64yoANPZCPojjD54FxDUrQRakETFkMzXx3sYKaRd4u2NqBkJQ6X9QBPQwGcyZ9J1YBUJQ9eFUGBeD",
  "key30": "5BifnkLZJyaGUx1yYZqZJqkPNYB2aTngxa6xMqc1yyYGu2rT5aX2fpQ7JPYwxBJBCRPbJFwJMctepT5Nic4ceFAp"
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
