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
    "2GuEEmrsowPagcSr5GUGUpB7ZQ73V1STHjoETuAD3SbrThs7h1QmZQ4PfruZ8hPRmMEgoov5Dq31HNYhS9ypzgeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhosfi4z7WgdrU83k2dK4qtuwc4J48vJiBZB9kdSM9jbxNDbUqCrM2bLzXgL8BUrCKJBThTMF7VXR6GnE3q6vkC",
  "key1": "4nC8cz4xzot9s1o4pE69eV9LdkWKa89QnvLX93jKDLz65MHMPwFHjBsEA92yoxQdvVJktyFBjYY4oN7Cs9veG5Jm",
  "key2": "ZiYAnXnDscQLEbwe9tqMQtLQs5bgUPwC26crWNFaQhNEWHERuBkzrsPqgGYW7qPScXopQ5iDfQksRyLjEJsWgfF",
  "key3": "3cb73ymHhi88BxYyxLxoimdtn1UQc2K3WG3raHWTXCDhLut5vZYqFUb5zi6YtYdbX6Wc2sceNgaeh77njmV1vcf8",
  "key4": "2U3RuBNarj3BsAzs8MHKVhRdYzjgPdB8sMAsruGPhwAtWQrzpCBoAGK4qZd2NmEipp7V6BjNydQT6F3gX2q5Pwo2",
  "key5": "5gV5NKjipajKwUer6HEvCu9TxD9vdfSM9Hz7dxq2xLuuXxwUH13s7zpDry6o6tizutUrCPSLriBJTEBtkWHJnY33",
  "key6": "tvLCL5buUH3teuDxg23ZiSrMLZMCZW4HtCq9G2etFr3cPFK9Nf5xAtqoYgB4phwbkvPK7FK5FZ59ae88xwtnFmA",
  "key7": "3idcXtktyHgUm672e6bETt4Px11rrJVYXWNwDUkg53Qm7wRcW3fSZQrFHUpxettjupRrSakxW717wDvyY7hUnZvZ",
  "key8": "T8C3VK3AWgJak3ZLCt9vBF3KwvZrf1A35w8JjYJ5YGj2eUjaTot4XAmTTR5RquFyuAiLTRJtRKsGtZN7L1SZZ1f",
  "key9": "579czBoJa5gefiAMud5NjLXfAFLJfxKK9TY57NX3caxrDupeBxQTmSqhnugfb6kFFDiXSAn2K6H5jrTYNoqFmMgq",
  "key10": "5NpfdsEg1s8CsuFqy7ANtTcUJ2Xt7sGDQhTpNjcHFjs8hAbehQEhCeXrBpBG9yHE9YaPuEGQSsPdK6Yc7GDVeCxH",
  "key11": "2YJdsTVgTf6SBgFZbSdVEGPQR6xLZfJynyHdpHXnnbb5qwAFuzaYKQUeXnG7yvpFV7ABJKhY8QS2o1jZaKiBCXz5",
  "key12": "4pTf3mb1vaRaqoPRxEcSmvgx62cLvDqensehLW5d1yks3dkT1nuBuyuzm4St32tLTSgkXVudoDeFd6pL5gYJHk5",
  "key13": "56ZLSbwu77cVGiwswRVgdd4uXH4RDufPzZpbYtZECadVmGNpCAAHEtPCc59D6TKAJC8TkucuY59THpzZa1eTzevC",
  "key14": "46k6cAg2hd9iNqFy4Gc4F4iHTUMXfoGPpb728x1JxwBaKV4SURCRm5vWBKMYQTbZ3sfnNWmJy23wPRVWXecCb77w",
  "key15": "9BvrT1NQr8sG1V7XY938oUUrgKP8eYfjEs3hAbPBnuk6KVUQ1AarahLdrPSm8SwYuq9y8kFDVu3Geycckhz8yyV",
  "key16": "3c2yxpeaXkkrFrFEWSiAX5v842aPpB8PXnUuttzc1ftYahxZwGXRSfnpSABJsCuaGU68eJXHEdrMJuQevbCpFucS",
  "key17": "G8YquDpD48yTUZ42qj6qXqvUttbtXBYzh6jcJYXAEzQyeVAZubMFbQc5Yj5pyMCDx7S5wkjDSzBfDp9rW83Uicx",
  "key18": "5Uwb1VJowJcfqN8N5C8BNPgoPVP5u9rwJjM7w185LJMs1SQK41sCRiA6Jofwb4ggMgbkuyKweBLm9AZsviHNJw5W",
  "key19": "2gkjrFMipWCgsaPnFtTehd2aXhwmio7y1wVPLDRNmSfVsUw2ThhA4oHEnwX6dMf1qjYBP2xoSnP4YLixEhydNYKm",
  "key20": "3WUo5T5W8Z2a26DTcwH84TtSw6GeiuNfcncXPfPcJT5HczFew1DtzEZmCjWe1ibPKgWaH4sddKroQN2pdiQnb1Pt",
  "key21": "2i7DNxRDZsK9SWghs9fXK1TGYNRmuJFdhVYSuLCyDqU4zFVjjLBiy84ymF5tU86TkwxtfxutW8KjXZhYFzLfh4oa",
  "key22": "5oq5yhWfoWozoqKuQxvH3W6EatfEkHfKf66yZp2hwNsJR1vKT7yrY1rKuokqGGMWtgdd6xE1DZSrxFsbDLHhH4Dj",
  "key23": "4256ZAkoLr7XRSqkNWmZkNV8GALB4MbLJnGPgCKwKWS2kfuc4a7EbbykPKzZSUzxZoYJY4b8k8oW5Y9hafWhwjXq",
  "key24": "5FV2jDkXDMfZHAgfcBZMcDURhwzJzDRPSNa9QpvA95P8Yew7oQUjYSZorwULPujxji5sJkjGoE3WFPCDEBeXGesV",
  "key25": "5u8FNrQUAZpWXHH1mJwzrCewn62eg86Hx8M2DSqBguirj3QC9S64vuNTQZ2NNXopEN9iAUhqN3ZpMboDHx1VnqwW",
  "key26": "4nt3PPGDv8v1uqxpLhL7mcLhicDEGnhFfzhba7tzfj69bjyaTtLBsGKnyuqTDvKHbvzZiReYAhoRSRBMiH8w4W1q",
  "key27": "2uKfi5imSJLF2sCQR86V1YftQ777d2HqbQnmVXxRT8tJ6xFJNeRzDnckn6dFSNSNx91qUhtXdrMK5JsAQFtxQ4Hf",
  "key28": "2YDEHeZGTqXDSpV6XLbfcfCUgeUtvFTUFPnUWnMh2Bv4EwzQ1DkQEdDd6g14o9gE9HxZdDDWf2dYQv27DeZvrbVd",
  "key29": "2vh1oWwNyQ4YiEKV9SogAyQEiaj7xLBxwCgijCqnbAQn2zdS2fTdE689x8y48WdPXHF9at3duRuEFvu2Eh6rStc9",
  "key30": "5CFvd6GWDw6rBmrGMsnwHCTrUFXToVkNqUS15YBweLYQnogpRgwkvSGgC7v9NNe86NpncjHCsczC4BzDmxeRmhFk",
  "key31": "4YnysjwWdnXNKwEf2pkZBRU3fLghevHpkwyrEtCd4Fe8dfCmpqFypEoqGFdj2AjgJZUKaEAWLJeJ1xXLgyWcsfv3",
  "key32": "5QoyiD5MCTFgRCUYTZntxnKoU4fPkBBZ5ir2KQKJgNvemkiyGCp2UPhAhQWVuPnqt3haPeApaJDFcPjVukFFLU6H",
  "key33": "3e8XzhzJgXFF9qCPM9DRGWTFWv7WfeGDtb4jvUYfjjLrhVQetertEVQonLJHpnn1udUjjmbsYjcaZUQiuX62YsBJ",
  "key34": "4UmJSpU4F8oBzGG6qNcn6mNXSEVEnGX5vRrbFprZsUBwfaHhRvgbTHhW6nt1yA7fJtx9QpcWQogRjiZeYoJEVSAj",
  "key35": "5GprqCNkTd9kzkcgarA6zXYBJQjraVqo5YuRvBnMZywjSbckZDbgS1Nb2wYEg2CMiUizFCBy8MmMqD5cdsfbN5xM",
  "key36": "27E7jQ4XnLf8rzESDiKLWHYAzsTWv8QDQvY2umsTY7yPeb6NA1LGSYTbMC73docKofA9C1eWeWRUmD1698FSF8Nv",
  "key37": "4HYThWQB2o7CWyT5ZReHeDt9geeFuXUHM2BrvztU8REeSDexknd3QFKWDNrnWywvpKTYFpJe35DZAE56QjVFygVb",
  "key38": "UU1EKPHk4ZqQTo7W9efqNs4cj7ybtMvbnhbw6Jc852aszTNpiNxiGrXkfM7BGECJzBokP3tAPRdP22egn7KfzVn",
  "key39": "tWSyUtzvdvgLxg8G8Es955ZYDe8QKiUothfAiQ1W2KZExbwyqP6WUxmBgz7wobhS4aVTJfCPmyM49M22yokP1eU",
  "key40": "4Gq3xgbrsQGaNjCSJnt5kZUoqFJLNrDe5ZetzdaCBzULMyFMDwnjhu8K2d9erPwhU3SbYsbQovzsycNpHAqogFtF",
  "key41": "mCz9nTpnMRCj3a28r9meVvK5uZGPGLwavrUGQ8Xdw1wX637pdnTxs1JhX8F1kvEhg7TB6QP46k4pVeopSivbnng"
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
