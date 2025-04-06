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
    "3Q6KqZB2FVE6g3DbcoFpNu2XsadbLkTxhnzwFGUUT9ohxHMj5tPAYrpMM8vch9jUCqUKwcuztCs6VTc11y2zKtNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZpR3Bbz1sbTcAqYGD19DesDDd512FVQXSktg8AVAxgMya33NoT1JhbvCmuUpVbPxZavHqQUa9DSNf8w4MVWmrWu",
  "key1": "5YwtWpotEmfgm6DtYc9JGsutcbprSVeArDr4Kb9hJKDNK3aKV8RJW6msmESXEcdggFADA433fyRWqmynNkeEgfWr",
  "key2": "5Ywa8GmfWiuvdX1aqydQCnqfS4ER39mr5PduVupBH8oWjA7HiJYCecQMSt9X1mzBdo3yNJWh9V5diLcPSD7btyx5",
  "key3": "2ioCcoGEbg4K5g547J5rY4JFFcoR5K6JXVA76CYgVJfS39kzpaS91Wk5tuVNYgZYmciDE1TjvUjVRBQ9ChcfzYjo",
  "key4": "2GTAkVCK1dUCKv4jCzZXWqzcD2YCjZHHRC2JiEWKTjy4cTjaFXFzfUGQ97ZLQYEqzM5h9nisrp58nc5z3faubFq",
  "key5": "3cWUWxc3rCQCaJXiBUTeu2JQ1nTfzAdJyte5a1zEkButJtoB5zQMoXmWLYyBe9MLUcuGeJYiixzekdepxJ1VpcJ7",
  "key6": "3MQE39p5eu9qZcvpSeeHBHsjLcZGn6mVVVgmLkHhBvSNrrUD7BFPu8tNhQT2qvxkWhvDHpDt2cU3fX5wrTK3gkuR",
  "key7": "3RQWDQfwGYyAEtcZ4wwWsB3GTegdyiPNmkg79AanaJwpmUkX1ucoVeK7cGeKo14GzyyDnEMH1ktSF7KBd7nFCti8",
  "key8": "zY77FRnmtYcBfFtHrUqR9cEbJdJe9cjKZk7fZXdsbJopW8nuGcdRrL85b6ziM3PaXnxxqR4eFbSqi2kqechC6FC",
  "key9": "EMZY4vsRUsPxNUz47iRr3cq6ZMkb9DVr5bJGBNkHpqUKxVQs6Z2o39g84rrkWmAkRqx8YuDSma8mpZshie7pWLu",
  "key10": "2eZHo7DaAvLcYoQKDUewN2bPcmpb6ThukB47J27ayQsMtJeYqYoVjVW7j3DZKkVCTs1GcCQKkvMHCBY6DUhwKGYQ",
  "key11": "szx6LPbajzZkyyN4kdBwwWvpZryQ94kTWcbiJqFrm2zwGZMBNoULDDMghEqrAXQq5TDFbAt8vNXvTvDdrVsqVGT",
  "key12": "2NZXKD5G6jRiymjd3dmcyWKggyTkg1THWuAmy1DauzZuBEzDHBbWCun6MVr7yC81pCLLE9kmgYWUmMPr5jPWCDuX",
  "key13": "5FxQMyzPHui9HJtNp6Mk3taSgWiYEujXWsBH6WyrEZtziCUPv1wVsjAQpuugH3eqyhoyMuzrxfxd9BvAHoFFoAtu",
  "key14": "21XLd4Q1SpPnMboXvPRX1rGw69kzhfgbi8pXjtK81tpvjvsiNfC58f2zEdA5Kt9T7WBTAKBMFdFtEfJV2MCrujEb",
  "key15": "2T7QjhXLL7CAJs2vQMMsTumZn5SBYXgKzShTLf3BtKnrr3dW1nyMy7QKugQ8skA3F3Fc3T41c3bNNsvesBJ875Ss",
  "key16": "4gCEVt4HudVExurckgfTpok4ac2c6kEcvQ1UkFDyY3NdVqweqN6sBpxjFUQihEcE4eks7JqNocRshHuVo3dwjKe7",
  "key17": "gAz7sNxjJHqKHHaiguA99ZAXbQQnYaWzaBjXRTMhRMAa3MLbjXjRbddBwZUwiymvBZHjcbS37FGp6nUc1U1K1CB",
  "key18": "5fNf86XZ9MXtDVidi21rZYcRdXbgxeQNtSSXJuNrb373vLr4xVNhoYxuMtY2kb8mtVisobCT3xMt8GWYhEuVtggW",
  "key19": "3gerj84g1VNAdyeq3W3SktL627K8JeqkD6CX14i8FexRMHqEwhtUeXZpCTAU7VM1bBXahZ1kSvfTVBWy4hNVingG",
  "key20": "4HKDEbcJfBFEed1tkeAfrFLLCMtySU8e3zeKm1eTZPAHjW9E2BBzSTTLTGu4iFoL1yGXqHrpmwe1QwByrTx5KYT7",
  "key21": "3K93hubE5fw6L8QZdhs61Y1UFLb3Svc2Aj8Pqja1FBQFgSSoP5mRiQA42AtyBrTdcVvi4sbkqJYij1E2ncX4ekmH",
  "key22": "4zwJpvBghcyNKmLmiBXAq9KfRCXqZ3Rg7Tq1tHQswRFDe734rSrrLtUEmv7CRg89ZY1NrYuGK9oKqiKmw6NG4aLF",
  "key23": "at6dzq41joJQ9YwJugnBq76C2cDzcoXD45z35XDjxwf5vmWacmkcddQ7nprRW882afBEzwdZjS9FjNLG7Qm2bYE",
  "key24": "z7esGyHhc1WskSfvgrUvh5eB19vZJHjuvoVpk1FWc6BJhjELokH4BtKNNCFWKKbHXxeyuu5wX8DzzEvqxbNgros",
  "key25": "469XBzShwFsgsCijEsXDuBNTvKKxRbrsTxxMoV6ieQ82Tkc7zhhtLaDFYeUJApqyzkKu49TQMq8b5FWR6QscxFGJ",
  "key26": "36kFogU3cyYo9XYXcAmDU65PVV2gz9jcTf7ndxdM92krRhD1ydor18SF7ZtKwawCD31TWpgSWFQJrWFGMaTkD98u",
  "key27": "2sy5Va77zBQs7CZSxBcVL2YbNu7SHwVQm6zJGsuVu3VF9iHY3wrGoXUo1fqbeDEzH5QeLqmq1XZ4TjHLQE6eeU2s",
  "key28": "3o9kkSi84aPEPjusPpr5hiYVbANkvPq8dwwR7RJnv5hZHqDLz7PN5ZSxvW9wYCXm712f7QZgHFhm345CoSGTusG9",
  "key29": "5VfZN5uFWM4EstiTxSpQ6Cp8KHFMaLrkuC3PMR55ux3NHABqvrWwmqmtK7TXpL9dpV2SGgqAphuDCkZHJeEZTDiE",
  "key30": "3aPyrCrc1aomUXy9MB6PtiAnAhFWxfjLGRs72CR8JJWHprkzzFEmRcPfe8nd9wFySaz9BwNVqXqtrLc2Ewme3sf2",
  "key31": "4FxtmApPVi2UNZwGqQFTF3FT281pDrhS7yyhB9ZxaR6jQ8jQRHF8NRKJ7DThWTuDKYZXDzV6fnbzurEAWmuTr8jc",
  "key32": "y799bd6imwbvnFcZsK4L1sAkyZNK3rXYS14XY1zth3MUoYus9en8mQo9GkxMUMYjXorAbB7jugmLZMBnRF8yDe3",
  "key33": "4Zsi1vdVMZT89p1EYtnALsPbQ22mhGHzgWVzvRPcEXTobP4jf7PWkKRQhuBDb8k5Ua4JNbU7xxiwipKFcHLMCwTY",
  "key34": "3rMANzcp3PeNpCspM9LgtB4LJZKFcbWQ9HFAZfYxD2C8TKbfaDtNkViMc9KwWSJcr4Ze4qRRRszKfqEH8YxZLFjY",
  "key35": "4WQ1u67Sg1gzaHb6FkoM4fUQ9eZN5Aiq2Cwh5nCZC4BeqWfujNdEpdpdKn4ymQGuB6NygQq3QCzydKrsQWnHDXHM",
  "key36": "3abCkiBm7orB1Uh9g92t15vGEmETaN85TcRtkH2uKmn5uwJbz5nBs1BPCJRzeF6891zdQtzJGhkkLHsWn35i4XPL",
  "key37": "3RaMRVo8ZQrqdT7uM4K1uBvfcHf83aAbFQRHvmeRRotxFi2uczFctmgUXMx3oXSnGkwSnP1tKYFjRMAz5X1dyGGC",
  "key38": "4v9KgiZF6K6U5YzwfRpb4cdEQnzEF18LnT3bbD9k89VWJohr6VKSyWefdVJ7LkL5F4y4RJV9rP97dozs2vZv6gUi"
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
