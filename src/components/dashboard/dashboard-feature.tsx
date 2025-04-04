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
    "3sodLtpHowpFJWNNLrnUjZATx7KXHufuDW1WqdKJz6s1MiNzswvitpL98iqbPfYMU8rkFpTvP9GbZKJxweGGkA6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHMo7NKT8QMe4Mzb4e43vHF2TG7de9Et3AeEGrn8y99FY5wh2sAHr46hCGmbpjYAPRi724yB1YDFjzVdMF45npp",
  "key1": "3AvYdmw1WNwxXYvrVmiz5ko4nhqKtEu14Gs1pTNTYP2E94g5xp5wzsnsUka9G5mS3XDhbQeRCng4fYYofECNtcdx",
  "key2": "tDRHcTsihaTBnVm5Zj38dLayEgCSJ6VL1xstLFFoJhcExrn8J3sk8qrMWhAckExGTX5EmPgiXa4quyrfbQUvRC5",
  "key3": "nzzhzrNBZrpSdr7DSZVh43Ck5zAwjQsoMGXjoq3pWzrTMs416JYkQdGdNyFdzdrCw1g9awY12zPPRNe2dWkoGQq",
  "key4": "3bcyMqLys7eF1RkvdB2TAcocUTfPHAKERjUNPwQJZwTN9T4vW1apSh8vJtBfDoMJmR8bHbLY7RTnS1PixNttxiXf",
  "key5": "4uP8RyihsuvaB6Rpw2aCkSpvpZyKQNLw3XPryHyXjPTQCSNJWbAzETRwvzww82bWSB7J9afhbwjo2Bdd5YiPD1Q9",
  "key6": "5qoEwHDCL4x1mbhavbjKNPXoKdwz43LCjMovQpApyCgyDRLhBBZCDAA9GesjrfWNzLqzrg8rpyQKKgPAdtS3BJs3",
  "key7": "29wUBXfEitHN152T3YUs5FBi7D5XxPummyenYpscD7TNtyzTYnZWH2dQkp4jsc7tvaeCCrHrHzprUpuHT9Mv3A5m",
  "key8": "xpAeXSbxVrB72SeJzz28GwPhurDSeWQEdtp62BBzWWgNT5ZxPcUErseLQzoTheiDc5Cprdfaip4GAVR7asdhUrG",
  "key9": "2FhQ4LvWw8jqnYRsRyzYVqRRNCufbWf1kuXhRghCBZnDqJkvigZvAdDDNF61agNPTEndw7w5wXiVef5ZFmhXnUBS",
  "key10": "4HZFiePjBE3pVMs8557wfVmr74MRKjJqF6SRjWGn3YBpfzWm8vNgbmH96H64gTvrQeisRh8NfFESGvNpCE5v5enB",
  "key11": "2c64yn2rkMygMZMYtTEpRN4P9r6hszQkaRHWN8sm16iYBg6yrnrZCQwGBYQ4y9XEpZFHMczqA3oEpUE9YFHp89VN",
  "key12": "e3SmDgFuZu5h2qg78BuCRKwGCHQK6W1yppRv7T4iu78UEPukPi4G3VP1hvj3c1GDw9bYMMWdFnjW6ixovTEWoFV",
  "key13": "3iw2Vdh87ePKMrgw8jL5YPcxHA8BYVxKpLaGhy1hUBQEEmbGH85yNjDQj7wAnx5jbwrt6tyUjeGq7Mg1dK8bxmML",
  "key14": "2uiDT4vyGXPaa46de8TF4hq2WebZDpsX3M2H6ttiANnuV85s1hC3Njycv5qigDTicKtGtiyfAc8A7g9uK9wwLiHJ",
  "key15": "3Hd4ihyaA7rug44rtRPXExeG1fCKJQaxGECbRZjxytTY7YuntkKn2u5LNrZSRGM4etUYRANWPRrAVFw6LemgVk1F",
  "key16": "5BVMSv6Wa1kb83pdHYKzBL2uQNP4HgqXAtj5WdEnAPEW5XzbEptUxEoqhN446YwQRa5yEdPJRj5ZH9CtGNUaRTCM",
  "key17": "K8EhVu7LMPsYuwFcZPKrGke6tFazepzWPnR2habpUmKVWcp5NaP9A9L1AURXbd2i4zYzwmRKAhvUSjqK4KUYKqN",
  "key18": "23ppr34WPWrvBkYnZjJmxyCLtf5Zjb1WRFqpQEKomaiMCbZeJtQvowHyibDrPL2eDDueHTLW6dVWXmbmDtqWfWUk",
  "key19": "3Xyt8WkoLHVkHfMSSLB64gmd1Y5zeBjCcRd3UZAZzwhoiHJZH712r6xhRxs2AkttvbHcN7pTbdBmNAG1CAsfCngG",
  "key20": "23kNY7bfEf2JiDiKA45xcnimhSoDqCnEZnNzb1FCpZSajjMTRDk6G84XGMjE5zrEfGoeHH1doc5EnqHGJACA34K1",
  "key21": "43a6CMm186RmxyYXEhZYbW7HgygxkEPttin5hffDXutymnNMAj1XiKrjQuQoa8wVCg1BfpBjxTdRJhnibozE2Rv7",
  "key22": "5ZNt72yXjkgAD1W3vdYAQ7jFBMRuecuSRdSztwyBsCqNFQLsNVufNpcYFny4q5BikF7JdtyAD6ZPZWDf1m5PBkdz",
  "key23": "36JLhQCN98TfYLnx6d8T6PMb7ksaxa36QhrhMPhrohKG6dDt6iArGFzycF9BduF9i3vU7ffUTT8QsR7T9pbNFnw5",
  "key24": "2wdhqBLbeQoJv5LJanjpDfgLKLYfLaVWyCLVnbWx9Arf4Xzjmg52dLX2QSfjxyQqEycY6cs7vFKrWDMRJTokmb7B",
  "key25": "4NddbypbTV2TiRz1A3joyo1ZSUKZeYdqYEQeWKE7d8cwnoxX1teSD8hY8Hq6MeHtru7jk6bH2d1jD4zxuntrEaon",
  "key26": "4LkpJiwBRvUEZZ4VyQ9QbkNZPjPiP9EL5juBmJT7qJ8npGKvQ8yakANGhucpB9hwtw9ZXLDXyD9zUK7uCoSc4QDL",
  "key27": "2YrG6Hi4peNCHYn7cQP9tLrYzE5Cy943GJHHFxm8L18585m8tKMbvuti73EFpUwuA8vETtKNokJ2TjfvWRw13YEe",
  "key28": "2GKDB8MdySY62H6geQ8Vxedq1QWAGEk26QbTGZLjC4YZdVcNwy2Sxp72fjxRShpzDgP5YaK2qXR5HqoHfE3ZXAcj",
  "key29": "5ddga6XCkq1fcVNWhw8X7Q1KEyiZcTWm4v8NBsTeta82XaHPMZyrpYgG3StfH8Cz2Y4boHcoNKA1FnhQXTyf1zGP",
  "key30": "2romfQd7x3E11sFEp5qxj86KPSS4qmc4bTnBWNBMvD5Y7HLHe7ESVn2de9yikkCgCZarB4x6FYiUoXpNVKuy5aP2",
  "key31": "4ue8Z9i1TGQkx2N3FEA3CpkZtBVmEKVqQapw5XFaqDSHK5JB4rVDZukWZVxcxFFAGZdXe3Ck62gLd7UbvwgyeMpo",
  "key32": "5jnAKHXTVYikVFSt7ceJd6dhud7Xzrtz5HL3MqJRm1J6uzRGxkvMC88aJZqtMwBktfbofQGSZnmWisCizpnqwsj9",
  "key33": "3W2RysS66kipk6ynybstiWqkAvJ1gHSr9Y8CdLzSd4A7ytjU96yUevPgvnF76hVtrB5Yy38JDgPonRx1ZnEqbJYJ",
  "key34": "5Ks3QtyLZuj5NJsa1aNZKpYLkmCFQAzPdPogS4fSBrHkp2M3nCecrSijuMkbidFhQAwZ6nZRSbFMWKYQ1Y4TPc4c",
  "key35": "4HdLG7uwZJkqrkBjoqci3eYLDtSk3ZSgTBW22z7agzDGwnLQWG2WX3wHYCM4UEust6GBhrGTRH5q4ftijiMVy298",
  "key36": "3sZFYq9x5SP7aud2HTYSSGzwqrVumWG5tytmqjQf4yiUF68owsSmPG9qrUFy1gHgptp8CNUBS5pji7yi9ULCqAY3",
  "key37": "2jTMzJYNsbR8DVerGiKAsjipgwm2j2cnR8TKA8t5VDgDdpgLyJkv144trgXbK5bvUeBJ2zmSBx27vrLSkvhydVJe",
  "key38": "9FKxv2MAiaGCYXH9atHxvokW3TtWYe44rgsCmWmLEeeSr7wKANyyM9frEeRiRa5uDWZiFLgkyBDQAtGRR49YGJd"
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
