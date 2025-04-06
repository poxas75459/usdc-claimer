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
    "3ZR8LuGgx3Hh2pfhtgE22FcwYnv1vosEqcucLLz3o3MstWGmCqvpTojwWFaBbMGmXGgdCWmVjSv62uKYpeimFaSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fDrux8k6hq4NzMWzBm6i4AuaoKYHbQqWxRPgoWsewrPAiALfF4dWMyjfmWwBQDjPKedfQQQ9WWjcTtKHUXW5GLM",
  "key1": "4oq8SSS2qogmPEDfpkoadSZxciXoe44Kkw53ywvwopo2VDSfmsc667t2uDmtfS55o7XwhLVwja3oDKw51ga4EsDC",
  "key2": "42g77f4sM36XpHDaTQH7efqKZM2tu1TN6vSMCLxL9Y9FPV6taPk1D5SoJgP1JyNnBZzfHYs5mZ2jhaFE3ztFkxEB",
  "key3": "4GXBgDbLn2DRYpcd9nNkviJmYC4HdCakX9E1gPqrh1nqYd5v7LYtUKZxRoKNrgS6J94UQskjN9JMncfFzAu7knL2",
  "key4": "51P6Mpgiy6D3QmRLkX6zDVBHFFrJJb7ThHaJCEwU1wtMxB8yQ69WYEmdB9SSdwvsZuqkrV81tr5GvA3HL1xV8EgQ",
  "key5": "2qF5Vs9j9NS3147zq4ZLf9hRtqzVcVjAnTYHSCe3gGdyCEFNkfKA5tgGS18V5FrhtXZRHTNz2fTJ4VUcbA4KpwHL",
  "key6": "4etrZ5wyZDmPpnThJ6K9L2N15P82HVPEQjNrjHSc3MngWWnMemEronG7HNCiJoYGG4MJskozKUAYaDPJn5o77gd7",
  "key7": "38AWVZhaaTqV9wXggXbFVdZsovKS4EuW8hPnB8yYrFho1GcQxsDbsWcVKfCtHJy6z6WECxKB164MCc8479zyDkZ6",
  "key8": "5FHzpiqSLeHv4MKoT7wZADn28n1qXqYGKKt2F8oJMsKG4uz2jXQbHCdPbVgJQUNyhRxWET4C1addV6pFtvWCbT76",
  "key9": "4xETjjZjA1JuA3wLZJxe7bWCsW2satfXxK2Ea65Kauquc9nKGgsHgjR1vaJscQDYHruFasKXLv3ySnwpLADWjH8n",
  "key10": "2efzAFnb6QsPiG1Gk6LeTB28ZJymD5HQBfM7xQkiiq4xsPvPm6Mj7Wp3e66gpKjnqYUxvPFuNLSsgpsFV3dgCG9X",
  "key11": "ywCLVbtCE6W5CrjqNsUm8YUYQfBeFaFsv2jmv3pRox5SK8Zvsbz69g7Rs8GdMUv8uqpSKGCGekuEjuv341cN9we",
  "key12": "65GFNZ386QTGv5VDAKYRBc1VXwzwNiLjAonP1mmV9dw7UZPjPTwKsRFBvGmx6Nif84jdDcd39aoLgvfMPt2o3Dv3",
  "key13": "3kKdLEYgGNrGUK8VGuDXHQwTJjhNnco49EWq1WMMgZXREGvh1qmu1HQnJ4oMp3kZh7WV3knaYtrc9XuaR5BX2yMP",
  "key14": "2d99929mpKEGX6FjMeEd949DogUwg8vPrnSXGFdb7YTuHA2tRdX6o8ndzip8KXDJmLynL9yGhUN6qfDXeLv84Krc",
  "key15": "2CFBvYwgcP2YiPPzea5AKYThw7cpYPRfTJPhisGh71ZeBFr5FztBSw8BFt3QM6EaGdNvEeznM1EcA92Mj6mSVpXy",
  "key16": "34mi2jQDUSQNZWoNYBgx1mJNKcHUyvaCNMQMqZ4TzSuF3Vk5XjSqoC1V8bZicwyyrKXLrL3tuxBJfYgxGgx8dUWJ",
  "key17": "eaVVm51gL1x4KPinMtDycgUF716DKx6iBnkejioK5Gn5bBsTCHF1aWvf1wi3R2HWPUKL4daTrWCRZFXKsrWM2bz",
  "key18": "3kZxvjW5Yz2NztEoDuGfHTiKWEndESNWmmNhKjYduG3DrUyASU8aVvtTkyh9AMHuubnegfAg3ycrVBMkyP5gXx57",
  "key19": "3jvU8Z98RpHiUv4neg4FjqYQs1cP5KW3n1dAdKcZBWj3Z571LN4EqisH8eYv2af7c9UupWXhn44dwdXAau8z9wkX",
  "key20": "5w8hAWJkkjhNCkEcTXM2KfFc6uVhoA9Ns5UyHxScbTdNMMFoJ6RFdSH451fVYxMNdbRtCrU4WTn91f3TE8wJFNZS",
  "key21": "3BV4uW8NkZp9Sf9XHRzn6rukVgKKNxNYGMWaivaaGZDXgd23SXebUP8YQBTiJkeFZyN5QdcbcN7HoPV8mBkUD7Ps",
  "key22": "5PBwTxNbKtJ6BwhVzek3j2RwhAkAJsRf4Hyv6LV2A3QRkqS49DuPfLC8rzkACCtCK9YMZfE6bub2oGxVbmaX7EsA",
  "key23": "4uLbxbq6piwzoky2g2i2kDoUSRbNFK2ew5ZvPzHDkbVNhbzf8xr2YQ3qBFJUeeGv2goHRsBQ6u23fNc4vdSuGShr",
  "key24": "5LaNZsVQJaWzK2iFxLsr9r8tjg5kuyhLAqvibnQTDD3W53fsGYrxXgoerYdoL6C4MAVjGb4eAiVbVzgYZPKmkPtJ",
  "key25": "5Cqng99roJrcjB1oewnpeGzg4TPaBKxhrRFRCtqaocAeAzphD7XPEho93MeKTE9E5J8kh7F7UoQGndLu2SCvgDMb",
  "key26": "4ksjK2qgTTFFqiM54obkau2h1uD6tmyAXy35i4QfbNMJMvEXtshBTou92JrKgsKtuggAbk2wPpZckT74fT9rjUnb",
  "key27": "5JqMm4x3FkDKimZda3r7ncK5zLfete9PqmTgxFe8YEu1NUFQEP8TTYdXZc6o2RcyWJ74Tr8gZA8FVpP3n1XRbJhw",
  "key28": "4W3BeXEhzx7N89HX7SsQboJkGLwmpUTW3NJiNHvHNmdsjgEe3Ed9suYthNKc9ZqcZqKSkWeuXQPNJeAeDHHSSoue",
  "key29": "4zcDwu9KmNvFsFRLtKVzN75FNJuY6nGRRdqZbWw9n6TX3dbQysUgtJtLgkSSGYsaktRQLwdZpCuYqXuuhaqXXRJY",
  "key30": "3h1oWPWXWUeVKaEvJnoLKBJpjEMtic2X8i8UA2ajc19maEnSMgf94QGxE1VTSi5AEx153mZw2pvTHpHPRLjzV1Zh",
  "key31": "63nySNSD9mqYY32yyJTPyt7MkGw8eZzqM7dh1UqZrHn14WmDaEWQSCs9ddmDzpTULWpcVfHsJ8ASyJ3WvMv2Svv9",
  "key32": "53ig6f2hEvQ5LVM574HUF1J6VMnpBZzaV4jYSVR2yTEZpiAXBaKv8iyEwnXHV1L1keKXZkknLNm6MxFNzQ2Gri8e"
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
