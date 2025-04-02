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
    "64v8KSrpdWPwZ5LUZBbtqy3g2CH35vDSGK4TtAZ3uLHoz5ghq9VPDvcVzae3CW7ByXE1nLmDLtfiLHT1EyjPxnzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZevbdNrBgyGnQzcVzXMJ4GevNoSF35GQ98ujc2vCPUAwEYJJfctj4nzTTGGoSkVmMCF84cupUW2asG7zqNCHA8e",
  "key1": "3gqpxBjUY7eWWV13TbT1D1q151VjVHXKPhpfAWGK7xhqqms8v1f4MavjMxEgPw6GatqCc9PUHAvYyvZELyt3BkRs",
  "key2": "9bvmG7Nogu49D2d5W1w6PAEXRq4GaxpYWKmcDGQuYfb5gNgGJzzusaUKAS8t8csy2EJUqk1Kw9rtYxLZ4gbrFQn",
  "key3": "49EoSJ6RLhAceEdZd261opxoStFVbycU6RtZma8MtUKqJRFHt251P9AMcU56aDVnGP1aiZb5UBh6hQ8s1StyBNAE",
  "key4": "2YgwCFUqVEc5cBdZKk5uRuVKbc6U87bx5VvTaDFsKN8wwQbTFeRQ23f8cVjkr4wNTwDsNu68uLdXrYWF6QWZK7gK",
  "key5": "3QP7D9svU5hR9iMd33bUkqFxR6cQsqg7FCGaL6cAfw4rapz7nUznuBNSFa6AhhAykGG6WsxZjHKBxi5aaErxEBcp",
  "key6": "4JK7r4TV1qx9wh9gGPixm6SN5wxn5PvCu4wkyjZKcnFBVtMHoM2tckt6BbF7p4QiiQNtNdTLQwJLVKXVgZeku4ev",
  "key7": "L5HgfFeDfzKcB2jp3AsMnWifWUYUntA5NWBkV71GamVsQBe8L3PaTZeDU1H3NekQcUVyk4YZuZZe1JMBasFsUcR",
  "key8": "2uNe9LwNirddEVkpUfJkPD595AEHmEqhKoQAhjbjeecNxvKhuxkxMj1QWW3GLwBRR5GAQ5BFVXffhwWXfbqbogzb",
  "key9": "5d32LZAPvGJbS7ZehMHQpC3R2ic9ayZEvhWzBeJP8TkHyU8i48xti4naKJQeG2bQkeSu1ZRgH97DuniifomcWyw1",
  "key10": "5CAH5sMKVRpS7q7UxFd1ht47zpd5YDLLndr49YKzAyuhy5B1xuxGuF7v4VkBZ528WGEmJbhhg69TTfhZjEgynXRX",
  "key11": "5cCtnygEvxzw1J7hyrcMnJP6NKCntqzdCTgHzMU2HEswjiJGzgoNPp2cbeuu2FaVczhjUVKDuAxqneuyPjEdckTe",
  "key12": "WmhXnqJEqpuGpkKuEQsCC9LFomggZjFfXK61k7B2QLNDPYcmin9aTaKLzN9GHiFKjGcXrJ7DyooDP5MBLJPSAfg",
  "key13": "k7CNandXeELom8wmdhbm35fD6ki2c1Deyuk4VHqoFF9YFzfyrHHjALypnjUh6smppUar6YHUYMsQqhsv1wufocv",
  "key14": "2wC7chNovkbTwr18pXa8hnviELjYZ3mGPDbw9hEu5sK6nA4VatLQ2VxkEHYk5DCNMv3qHz6UwX7Auys8Xd1HuNhq",
  "key15": "2xfCMGC9sBYC4vjHcqXPfZK54w7KoPQWeFCyeN4v4zsEGBrNhPsKX4JySDs8owsMxVyWaXgJmhuUTh7xscD1xxga",
  "key16": "8atYiXHVGQSh6okhQkhnh7ZBJrobPJJ8d7pQ6CF595MVUDhCzY74F84y9Eq5CDeSwSBud7qsn8zn7JSarHXgNGd",
  "key17": "h9YYZzsAgH2Hi5FYzditq57MJonoDvJ2uqKBy5ZX4x4hi5rCgSdb52ry3wYcFptfREpubacUagVfsMuVR2evLLR",
  "key18": "Kv8u2vTUs4b68uykroJqgS1ecEdD8PvMftz3CBYEdV3uYnANfnudw3Dqkr8d3AVGNcQ3uhRLqvSPTRs2KrjSis4",
  "key19": "oh7jtSpHGZsrb8mcVZTEhdpfnMMJC9KeduQXQWpRkqLrW3uXgWZ4iYdbE3RsC9EwYwU9R84AyknddUikcyNVjcq",
  "key20": "21kiWXvWMy5gNyp5gS9MiRGFq2wMbGNqgyk6GfLVHRPe5RwN3iykCcG81etQJuzs5Sd4qPZknLL9PQNJR5BpfiAk",
  "key21": "3qAfZyor8NgVboucAawKfAW4GPri4Vyj7DpWH7F87e7bbWX1DmxP2ifsMLsEPQLb8ixDzjRN4MyTmuNDYgYDVTAZ",
  "key22": "EyoUuShX71XNRAKDDCbBL8iDADuK8R3gpwzKJ7k7ptrhqNUhUxFe8wpGLaNQvRPG7nbkqNLsu18AZUCZVvqange",
  "key23": "442SCfNPtkyMKJxLftVavVMDJ7FWdnRwNAsXBE2LATEedubD2MMmnXUfEMcPdgFPKiJssEgw3utxsoxYGjM5yuTJ",
  "key24": "4xNKFyZh6CTrEK7zRqD8JjufAQoCoNumFUgqkpmZHMJaDF89T7wDrw1AFCXFd4Z5Z4pJvpbLyceWu1kBiwDA13JM",
  "key25": "3hWYU9zKEai49sL8fuTqNKHYGcWx22vTfUMiy3j3EgWM1kotkmEu94K4XKo13jp7PuEXiG96S3Mso1PjXqZYQp3W",
  "key26": "5N9z68GmbxRKwiv8opRPzbtDCeGEjuSL1F64QvRAheVYibSXkbPxA2feWZvvyueGgboCCrTUjh2n3xpCCaLPSHp"
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
