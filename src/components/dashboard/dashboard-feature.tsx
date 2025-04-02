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
    "q2RXMB3u9DhhrgSzfxHSWoQumieD3AjRzTHPXvSNAKa2WGuwjizX4qJTJbHMm3qkgKsZP6R3P54moSx5hGjNsDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4jRhpQoi8mM11FryhXQuns7gkfBSgPmx8w1AjXT8mZ77He2Xp5GPD4jR5ES3nUTcnELNC6jN1s7prd2fP5oA3U",
  "key1": "2EZ1UE2qZa9P6acZg2xhSNTnxasmyChKmTqRppS31crLMe1ZmHTXuTLQ3Z4Hydt3yi8W2HCikngWNsF85aguxLuB",
  "key2": "43fPTgUG8g26EYHqAzEgmpcz7R1jm1HV5QnwmmwqMdMiFnibT3xoYp8gFyLEKZyRUGzTr18nJSXh6v4WkrD7dJQL",
  "key3": "2ykcNn8qx5gGxtdnVGzeNYaNiEHjLgGGVKYuFgxBn6CsUhr2kcGi5UuqUowv9dR1rcBEcfp8L48tEBLBmYezCHKd",
  "key4": "2RPdx2Kjei3WdXdzBfgGGomWXLHq9ZAbtjyXPCbp3umKbKqDUG9WC1qxNNDP1kKnXH6iaGYASjcUyWNBDDBTXzjX",
  "key5": "1nBdsLAkJouJ2drYm4RzYFngdtq1ovVPebK9Fo2bgS696QpkiwDMQpZyRXquq9kQhi1GhqSViy5pX4i5wmeacxU",
  "key6": "642y9rPTJtAe3NUdYyzjtFojJZJ98Qnerobqv2yFA4EG4Nqyf92s5zsv5k5NWLLS1zzcay9kbgPbzESPdbx31yCd",
  "key7": "3dFRc9wv9NLHFX9tsyTEz1W3XoXNZ6uuKbvxEvFhwntZsVXWeGXuLDt5Rzc9DE4Cs1R1oaM9fWqk1maw2MKndwH",
  "key8": "2ErJVhS8rduSZaAJc12vvYjxffWVsTtFZfbLm7zd2GehehNhKLV9XizPBafnrNHuzPKph6MDJq1NDBY5XYX1kyty",
  "key9": "38ksPdPFLL5CeKSadxX3AC7i1zRQhuwSzmykaKEvUDKKBneC1X9fS926XxS2fwvr7BYFpaN3cH3iSmV3C5PgBJmP",
  "key10": "2PRzjoui4P9ofafWHmU5w2FNBDQMMQRYpsiNdD2oW2cJTET4UPMWZLL88gCSUqirBs4HKmjbKYmeh32hWuY1HcLD",
  "key11": "4D4efGMStNQvwvqUCw1JRzXD9btqrXEpfkx1VNPpb96K7dGgctr7Tw241dHqY6oUDWmHNwWdhueM2Z7fkQqgNhrG",
  "key12": "fdcEN3uvsve6NA68yYwmTmQm8GKfp4y58sbZy7bGHQRrmj1bmZs6KW7Gb27JBetixBTdKjLR3At6uUKWL64QSpD",
  "key13": "3xDq6JDpXPpdiMY2gyDMUYatuPS6par1doSPuGighhg9E6xMZro2UwU8n352TheeXnaTzrwe25mnCAU5mSMMoZTk",
  "key14": "EwcV6V4Mfg4ECb9mB5R4maDEVMoqVgFochyf6qGWHxeQCybsPYwQdneTtQn1Q6qnt84SHp6BgFPPoDH9iRjaCGo",
  "key15": "3u1D2mTpzKHHJzbXQgHCN1j4c4f5LMyhtWbssLCGSzvyUSQxJgReKXLu1PHtD2WVowsGUigFXRrxNYhZP6mUhv6v",
  "key16": "51tJvbwNPyYKmTmwMbSU9Qv43YH6VWf2byiifHMmvySPZcbRfp7NpgunXEZwjXX4EnnkkEJEtY8vE2SoT5GkALLn",
  "key17": "24ERASQduv8Yg7m7tU91pK9aVxef8D8QJouHzhnQEsg1VYwQaKHYk3dSwpbxD7kmRFMPP36MNjZf99Tuhk1RnMU3",
  "key18": "4nTjshx6LP4uTnUmuXkzU2V7xPQBQqdTFRWq3vZRkxH18hqSw8AtpaqFHy4e7esfuV7MiDtsAiZTRxU97wNQLXYq",
  "key19": "4NL9qGFNQrxNu3eCfPng9ZMwhVcUP9E2km4FUCPB4QUHZw18DT2NKP5DVKLqwkhT5xCaqaTpW1xEBX9aPWv3s2KQ",
  "key20": "3NwR7LVYQrt192EdbJocTko9rLfaAdyYmzdjDpnbHFhv7kEG2H1yuXBmcb1UeFqjDs94s4JP1FyVYN6gZnCrCpvK",
  "key21": "WaPVFYq3g1re3tTr8LCtZzUqmMwSncrgefoyqLthnCkhUKtAhJ1TEjeqsWNSmhVSv7as9h4Veuz81y5XgdQAkNm",
  "key22": "2PgsPJbCpNdtGLZ84PdvRnyNggVo2yHLogqVsCrtbB7JuPGmcs7Pu9TFxdDPRTc4qCt2HMTcDizVg61nod4kDzLf",
  "key23": "3Lf6GvPj5HHG6qoWiYoV4pFuaKz6faya9aYuK2CzcJQKcRG1ZGn2owqV21od9CVVkz7Kds2Ph5L7RuAa5qtdJnKx",
  "key24": "5maMpES9p34uE62hLKnqj2PmRsdZnPC5SuBDwmdLU6TMExVwcfh5LMHDQg5rjEr8qd3La6Rpy64hUixLHWnhC6SC",
  "key25": "53FzH9fgZjsEtUPPhvYhh45uVaxSqMgvyjFEkfqpMKnS1fgA4MZtgX4ynkQpWwSycp3aTsAXbM6TXka2nrRqC4QC",
  "key26": "422UZnp3dqLKHKsRU6Fm4nrgJPueGixZLHF9Y9VjZbSupdJjwsVpNTLwZaqD2FsniWVdLLucTVyqTwNNYYSq8Vxq",
  "key27": "5LkeLu1fcFeWMyVcrvhzCPKoJ1UYBmxFFCPvLXjgJ5BXbT9TrM4DZWMvEYtnWjtj33WnZHG4ekRMHJxnkAwrHpDk",
  "key28": "DWT9pkR9Ze7jhJNr2PYcYrgeFWwJv84bF8qqREPtxC4iAhRv99puzF59DYSFqAjoSgEhZFn8e872oVmmJemGYgD"
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
