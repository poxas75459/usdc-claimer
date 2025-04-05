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
    "5MLiAJYnsXErDWpCcCfRVP8YrBxwbz65EAB8egUMJhCuNX4wLCoXLcVQcW1aoQiJpdpodTJK1KvnYP8957Drsjmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiJ3zgsjPrWY6VB37oQaVWMxzCqx2Sy8TB4NVCmvdNCBDERrnhEXyLjLMaNDup9wzibDb4pg7xhyWBvrtHpLgTt",
  "key1": "2eLir7wjX5me2nJgoKQZh2YKafwQABWZ7PhoUfSejH3XE1XZFBKcAP6MFxWjUxCALpuWuZLUjiBBrA95qMcVixg1",
  "key2": "24RVvvWuXjkXnsSE4qeUUcHMBX9vkx2mdxCrs3rzZzMaXZUZopTPUAZg8oWNqt8kb1nh4VNp4FkireovvWAdQxXL",
  "key3": "54rnmugLaYmHArPZq68cXEQXUgNJAKXVZNjH8t747kkiRwtbE7ZDbzzX5ESfwdnmjGJbx1LzkCFK1CcooHCBAheC",
  "key4": "451QbRvLmhQ1TKfExNw2VAGNSEPhk2AV6EDW9aBvGTkRPsiqy68ARCKu2P7kW3mZ1NH1ZrQG1R7PkZQsbTTeXx6w",
  "key5": "5pKVoeTAq818A4Xz1GaQU1AW9b8MEwSDpD332HobVnojgEBWUSoqk2EV9afoxrBsvazQdC5vwEyCko8gkT2oMir",
  "key6": "5oV9za7ddVPQvkhEgx8ZYNKQEYuYEokhiTbMuhafkoWXMt7ZWh2dn3FGLKc9ymffyJGUDrBzdNprmWPjZnLpfsR4",
  "key7": "47gcozw4pQxuF9GxJTedLGDgF3uEUKBze7V95jTD8da15royNcaxkUq4zwnhp43TFkRD62C6zacko7QDB8sENtZY",
  "key8": "4v2nSF7XKNUbhhoMncU2wUMe4qDaj4zqJiGe5RF8SMHZDvGw4VvGT3t9iNaBm89YPfttCDWsJEsx2nZ2uv6G7771",
  "key9": "1yPtF7Z1BkyfwJM3xWUiKFuoiSZtMuMzsepTQTs4qNQVH9W3CTFjdEnynUxa1cEAvZX4ox1FTWXU3om1RbUUiM9",
  "key10": "5DFGXcrtJs5cv14gTtmkWLmN1tchbtTPawnjJevw8uwNgXj7vY4oX6kPENrWL3ZmRCdxFR93FpGBZXCiQX3AiYu9",
  "key11": "5fyoFDKZMuSwYbhJRb5xtbLUdBqy87gvbqsjntenGtQZXKej2jNZpqsWmJaM9XPPYKDwTauEhx6L7D9LMSRQuMtF",
  "key12": "3oVmvvhpTdQwfgudHcFdaZ2FwGyEifGBrQkgeEHBkaxHQhpAB55nta4pBnfdhZLLA5uExntWKVUtuhZjWWZhjog7",
  "key13": "2ujZ9VncnP7LnAnGjhu2ai8AmgvZM4fCoECoR5vXY9u96BUF5E2E9iAz8ieLfJqzenCVd9fKUukBjQuDGJdAfvNW",
  "key14": "63wSZx4E2evwsATwMJEfkhm1Q2GmDQbeHoKDTnbBq5aMgCGaEyqayxauKmZoLZeEmZQWfchjy8JB57NZG937jorq",
  "key15": "43cJnMnN9DTbWqzjZmCkUnap3WgaiwUnSyYAMTwqnqkm5Uj6JEAQowGENrhrAZyQqjJrc2zQLU8VYuw9iPtD9shG",
  "key16": "dZarmi38RKpPyva56W4CGiGGkSSPpts2ZmoTSMJv2YWBiUdqUMTeQViLUW7GmF2N3YiVtkAuQ14nUPtvCuvyjki",
  "key17": "WGpkBhaWivKLV2cbcZehcvMkgFWdLSE87DQum8f8mxLk5VNTK6U8ZBUq8yTTdamx4dMXYgpmVjDCxsYnCysX8p8",
  "key18": "5DGRqeiJqMkqozqxwAZmG9WmxtKRVB3UhJEo1FtvTmC3Rtsia76RGSAVUZ2ekmZpzBXuSjNL2YacxaeFER9spUea",
  "key19": "46SJHmBo534HVjPGNDYnJxfogy9He5ZVjMHTXrGaMcMECDVAtWVewvPNwYyC3ecyecTxptkwwYLbxjVSCVFxAbbq",
  "key20": "3AMC3U46d1Mne1W9ZHUWHc1WtSBcpTbzmrQorEwK6VZtfrzDcTZmR6jEUCtFc6VtFQwH8rfeJpq6s4eERMq78hUe",
  "key21": "5UgdksJm5tSqsyzNmFabawzqrJJDwUr583fLwPdBzePUTxTKa2u8dx48GJN6Z6FyJ8zd16BJ5feqLsiRJqbb98X3",
  "key22": "4ip2VZN8myrjJctpbLPkoBhrK5EQg81YqX9WnW6rvsL15GvrR7t3jfMN9zcKbLXEBZFjkamA85JGtKk2Jrzrqf3G",
  "key23": "62rFfEgk96posEKzMqg9iwyEuZMNPveGxhPoZmKd1C8WPzYa1r7ogBY2HcM3qJmgxQsamkHLNerDGHMgo9LkAFcr",
  "key24": "3d1JPHXn2meqeEYUbXvqfYfgorTd9ot9iDL5EsmjYWrVr9QXEGEwiNbMmb4iiWZBexkKTsptCLWXetEZfMvAU9Ee",
  "key25": "3KwtLbEuHhgg6VpRxFdpaaQMxDS9SjUZL4xrD73KwPipd8mpiwFqqMrsKVUhxna4FNCMakdhgHdJzDJt8zgkWwC1",
  "key26": "2cCZugFpYPTVCpYB3mG92ETSefrzkE43VLMBPnr5E3Q5PRX4JtwyH6E43Wh1kYKoYc3mAc4QPi9G7oSgsWZd5eR7",
  "key27": "4FWSC7tNhDqU26qWWmGNatYQgafzYYMBwzKDo1K17jwkzyrEy4M2SkeVvttobPPB2XrJZGAYG1MLntGGWkzKyB79",
  "key28": "43VVkCjCsvaiwsB42n3A1tG2b3cWXuBqb4d6gkCrRgs3tpAGvUXCbkSyG6s9FMfCWZDiLLLncoy5jiMa9suExfTS",
  "key29": "31Z84gfXqHiWSRsjoshirBdvgSWVJPyxGM9i2daJoUAZqJvGYgJygWd6WFUtKshmps1TNec8CjiXW7jR4bLsNMZw",
  "key30": "2RBQhePT9VicZLrnoLZKdaCKBNTYCuwrTGRYn4ip6RpdeDXu4mLs4shzBYdvk1nMmK84gRKF1CQj4SR9sD7Zvuee",
  "key31": "5NCRRarPH18fA2MQiJspPJECmMLkmbsnbAJM8MfQUoBAmhKrZ3fz9ps747v9AfVrVgx8a3r91UwZeNvr2kfq7zos",
  "key32": "EjwxKbRcCqhHQojxbqXA1gnNCUWgjMdiMtFCH2WmN4duRqDNas1LbzQdayTM2YdiD9VDhvuiDZZ4r4UuFvFQumq",
  "key33": "4oYJr7gDtuyWQgfWWGZpThscgxH1D8G8Z7qmpKMVJevDW7vmfgZ6HG7BjJnfvxoabBbfHW2g5ScdpKv6PTBqLemE",
  "key34": "5x9Mn8PjdSWYxqRrszXUsJ6gmJ6GZWDPCuyNSgncnnQd13QG31ibza36kvDPjiV22QTSnnZCBn8TN9itk1ffSUTq"
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
