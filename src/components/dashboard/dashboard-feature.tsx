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
    "KmWCF2eEhCaQJiN8WQh81xdzrLaqkPWpRzpzVfK1eEjHKBZGfSSL1u3w8cJ44Vs852gLdPLcpLE3nprsUE3s9nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpXZyuULztQ2ugJ3g9Apv4LofUTwAi7xLa9cK3wSJWeWExr36C6BKQdRUd8mhaV3DDV1XRXj7cuicTR4SAdVK7g",
  "key1": "3jmGHGQYaxTY6YLdEqtijJ9ugQAurPhGMvgLedMX8XQozCejUyok9LHVattkokfLy2wKmMCoA2PEe8USu2smJNzM",
  "key2": "5kFfDgL6xZTRLFEY2dRETcMJwvRVoVNWGVF9A7cNmyMqh1MZtRtaQQaB7SP9vPVJuR5YEDJoaAcj7U3UF1CjWoTE",
  "key3": "ngrm3V9XM2NRwzfZ3LDP8oewsupCoaDtFDk4EcVti7LZjRVS6mm6PWpXaEPv9iFVhB3XGEWVAMGexjVoTgwQg5Q",
  "key4": "5VT9TH5wW8AjuE4qHcvWSkTH8A3UME8bhTeQFWq6GGUj4qr1ErVAvAeytfS7rWgiBpb8TQ8xBWqZTka54XUDxn9b",
  "key5": "2kMU5muRNX4Ejeru7qqNLcNzVu8sRNjKuDDKj6qDkDRvfcvyWA5WLd6aUwSceegUaDPt6m7U6YL2XKBtzMWXmjtN",
  "key6": "2XxxzdM5nDwFScnKGgq62MwmMrpEA7aUQi7nJcUDoVja9sJuKCSEJBHt8znLRguFP5oMjwk2epyWshp9N1gxm94F",
  "key7": "6173K4HnKwsMzef6kBNMugku227VdeDpFsQsawK6wKvHAQi8npzLFAhrR3cnLU5A9PJxGAqCnB3QhRyR11py3EMA",
  "key8": "2VZ5kkgYVAqWBmTWW6LNgkAUkFtTsQyb1b23t2rB4Hd3zYma3TLBJkqXEP7VcWLnHavsCdd75Sm9G1NKpnbbxdVc",
  "key9": "3YuPadwmmxt1oKzDE8WbvLi3fNPmJeE4FvxJeDnGzrNaj5ygtPpAUsH1aAMP1TAADyArdUY3ZQRQPpnbRE23PShu",
  "key10": "3n65DeuEB2G8PGXc7bttodLfjNGpuH2SMoGVg3rTCXQBbVVk6S2sjhs5TfjBeWk422m7A4dtEXmmWtrBchTAJU35",
  "key11": "4hERWGpcjhc44TvgqwWc2zy1JoBbYwE1KcUFAMLCyN97fmm1cgjYKkFzerQ282BMJJqTmkENTqLARhCLuqMW2BEc",
  "key12": "3pAmmcHikh8cXSZaFq9vAs2QtekR6ewrLVC4Swv1rdUSPJboZPRmdevgcLsz9NhZ9avCAHivxcvyN9uxmxouQxA9",
  "key13": "2ym9GZbscLkR2VCVMyR12NcTdFwWXwh6eJZGZTWjbhNJXMMGjyjPW685RJUV5Sihviq21eahVrTTW7xgzj6CewzY",
  "key14": "25HT8hkYCdX8ntdqwVjKT1iSBcSygKzYUtnF6ft4HA84wAhgwuG7viF7biFgvAZSBXdnKx5d2mXp6YgwonT5HTzE",
  "key15": "2MXLLd6GPMkYbeVyuvM3FKi6wvxxczXLsmEXSgQAmyH5neNKo8vL82HyHWCyrzM6a9CK9gWKcgJ2fTMemzHpM8Ma",
  "key16": "x291dCppxFiD8M57se1ughEGDs1r5sT4xG1GVfE5VNVa1ZSpgPLGuqq48w2PxpQb8XzQ9dCm6E2RrNGz1aqzAvD",
  "key17": "2ZqmFnwwcA9nb8EEB5XAS3SEyNwQEm7it2MjqbsKLkkhN2zvkLtPpPFY2CaJUB5ceUVKpvqxnho8im1tSJ1Gvdb6",
  "key18": "5RqtzX5StAMqjwvfChXbu8J45NTRMS6oAWj6asTGiLob3pEvSjktGHaAs2mewKaCLCfqW2yfMH48eJjryv5c8FUL",
  "key19": "4SdCxHPUcVvqndSb3JnyboAxJnBTr4cAa5tidXh9gPS4nEMAw4n56H9VuTC2XiiT4EhLbkpjnanhKZBN6zCdbD2u",
  "key20": "3vfJ4WR8XqgUz667NPYwAVqEXPVaDDvF3rmqK7vneS5ySjs6dBwd8aXdv9v8H1smQ2BSsnwihp27RJe3JaAvHw2h",
  "key21": "cvLkXtjU98eo11JEYmNz8GKennCLhfyPWSmwqzvYhnbZMBVtT8y448YYHcU4RDgHBdKSsZeSsDL8u3bZ9wrWRcX",
  "key22": "2HY3QkgEutVXi2mMcuZzakAsGg8kYZtbAvfGahAPgsfEbKWPs8uTYmdZa5Xj485F55LZoYz57MwaemSESUZB5MMG",
  "key23": "5Mj7Bq5zkGDa7Ab9cEi7JY86uKU5yHMGBQXPZdrAb1JhoVVgsUktD2GStWRq8xWGygyvzJaCkYhmLh9NF2sferpe",
  "key24": "2Q5RTy2gJkbS3cj6d1Ze5gEiUU3VawuKQTLcNLMhcRgoopxBMgpoRaRdGvr5UWxG1XbAMYSuhYT4C11gw3HZhdJ5",
  "key25": "31X4srQ9SgAS2Jy9wm5bHFwTTs21W8AeSJAEs9zPvFFNhGjLMxKVgTDcYt1iN2FDnNybeGWjKDdFKz2JHWeJcxEN",
  "key26": "2rsJHV6XGudAvL6hoWvDzVYnvd7ST5UW8tFzFnYtHw1VHX5fBpjGv3yKK7JytThRvy2fSQSDu82eXvL3pi6traJD",
  "key27": "4J4DdAzPWHpXP7ZPqWRfYEPqk7bD4wCrETCo3Dz2fo32KFvTHuy7L9heG4B1vtZjUYttXRQcGCN4DYcAEMCM5Xme",
  "key28": "3btyag29gDFu6Yy2u3HYei1DX9MYDwpHKmssJ1WX3KSLWdpvvfbKhQGb8UTqzQrqAmBmUPAAnGAYNe4YNhHCsyt2",
  "key29": "4Do9oLaNmVCfgbSJ6zpiwZe21SqAJfHnrzKbuL9FtZDzz2NPT8jQVTRH5b5jFtcfQdkS4QobMtyaRhjNNHCinsiP"
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
