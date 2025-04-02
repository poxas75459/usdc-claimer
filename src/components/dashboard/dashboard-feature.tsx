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
    "wVVPmVknfxMFToERjEUcWHdorMcz8maVDmCM6Sys7P7LxyL5G2xUAt4XQ4DGJxSBhUhC4B5cHQfJqN1nqZDf44S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EaAPZ4qnLCTUS4ajJVNLu9aVcknyWhtjREGE79dqy39ht6nmjjvAGZ83hkufxjFnsQA93fJ1LeSXnveqAu3Ugoh",
  "key1": "4B6TKKEHjLgfENtB2HWCyQcqics9Jfg1R7auuwdcBfyhbaCzP3AqContwjjn9xg2WZPwJz74e3mgG2BzaB8MdaUz",
  "key2": "iCngy5TgwJUbYzGRynSUnt6DGmcP7mXc6xErViNsYVt3sUBnBK8VeufUm7xsjfpTxXcQrm5GRj7cAEoZqP7tM2z",
  "key3": "5QZQE2ea9fzM3g9akXb2nFNmkeKEUw5CtyPvG732LZcdxZyDhKMQPy4Q7hG7o9AadGg1iEXebaaE7QgnveuJuajs",
  "key4": "3hohvJrJeqPfLD1T54n6MQSx2ju9HNz2Vz1cd771ZXHuDqSbu3Lv8kVeB95FNwDsMkQ86p7tsExWDvhxbDbwMFKz",
  "key5": "5u8ip69TyEAozHF2zBYEVqVn5xd1dgKHFemDfVWJzTDmCeJYJZyiZsWDpyvbntsWz1SyuobgWdCuYSf8qm8vZpRi",
  "key6": "5dMvirc7jVYbnRWvmL1TV17ieHJ6WkYWRLsGQNKvFH6VW4jfguuxsC7Pp3BUq3aJxrc6488WuGta9CGRUFRmSHmv",
  "key7": "dnqpZFVQvHDZKCQefWYkHebtzJ1gxanE6spvVyQ5FrtGoUGFEvY6nBRHRyihHiAWMxGVBkUbKjvBndsFBBfLfg1",
  "key8": "3fum3ANT4mvd4aCruXuZxbRbipwfBTiBpsfTRLKiVu468Tm6LFpeVjzmGJ37HFmpAUSBbZ7BdzPxyZjRXosXDfB7",
  "key9": "2qBjN9R4LfNn8L5imSWMuLDFJvH9vHvsfYjEX8mFBsG8s9nmySWrnMKaeXxrpaNJbxEsT4EVhYiUdjTbKRkHXrpH",
  "key10": "3mogK5hMwmeDxQJdXJimm1TB5eETbjRR58UzBWX2ePvNyFiUAt1GnVfZUoTMJ6iXqC1LPmN4qjSEy9UQoWGXzyb",
  "key11": "4CXMW8XfFTc8jhstfW6xRmrRCrqX9zTtTkGEr7TXWn2VcYDGMXPrUgxYRdaLSyUxMcecqFYC4YH6zRnNDu7qY28y",
  "key12": "8cwNeEcJ8pNwZK52wpiKFHuopNkH7QGV3PDKweN1eSgM7XveRymZXprmkT7koFrJrpzYRFAwe5dYNhBwshnAYpr",
  "key13": "35Qxyu6ZxCPwjNuh7kNxBPyrCmKTvDPBtdwzMSve5BnHHtwD6Hi3Gfk95pLJDULHe1hfg7teyccdKsgHoLn1e24T",
  "key14": "hcMpvsp93ccdVfRUik16g1gJTBb92uK6GRJkd7GhWbFtbF5TENeVspoBHPMcbSjktwYh5mc8SyHVuodebQX5noV",
  "key15": "yHrmjoYRxa657KKLW2EQgVhpvRNZ19YY3q1NdkLdNmGB26rHLdoFJ2Xj88PPKxbLUJ9gfPXdfdvBfekJRpcTHr7",
  "key16": "53AqZZx6mQ4BBzCEvPMcH8RVx3YhWZBM1K18DhNHYeXRHuxUdiniuKA5vGzkXVykbqrF8RbeNYb4EpWcQv1Kwgs1",
  "key17": "RwLSC4sEreXtsMNpkfDBta3z9ai1R17ts5RBHj8y2oiUvmN1BGDS2qEkFDoVAzhkeQ9BfkCzHEX8WBTnRuxMYnF",
  "key18": "34zExbdrSjdvCsDup8xbWiXN9Q1Zp9BpZH5U44aEnCzMBBrBKhHXozjtn4zLuPBZxZ9VoKDdSwZbcKGtuMm5LUjM",
  "key19": "znhTjNb8CK7ifvrP9VmDsgPhWRMSJiiUeqYBpJbesibQMXbGY3DFPEmuYxpLF7vDDrGjkwGJFiZnMCLt6ne44RQ",
  "key20": "3gCMNBDKXVp3htRxJ4ffTnKNc4vVd7b2Lc9cH67s1HLHZBE7b4nouMFGNP8ce3pwMxEM8p1WJooRbX3gJzZbpJgs",
  "key21": "3neeqeDVAp9znsdLNW5tRbGLAErdjKSPKQUUw4anPKjEzF6et1fEZ6sx5t3U4TQXwE4jYxE4AtAxcApwDUwJFupo",
  "key22": "2LqNo2CwoRNDkP4h6MFYGcFhfanyw5hzPKRWC432Wj2ZqF1AcXnE187prxAieqGBdH5TtGR9qTxGYy9a5prV3rom",
  "key23": "2Ro6cah1f4hAhvnwx3mJTAgWvde8T2sANL77vpRFmwqk3HQHf7xcmCKvfk5cYZ9BcAW89q5ZuoPALMFa9MQgvidD",
  "key24": "5w6JAVifds1haGrQN6dK2ZeBfjUuTEmUi7iZzGXHZLZMKd2RSVi8gfWRemGvu2yj1FB5TWG1HXSjgPXyeEmDD3pc",
  "key25": "hADL6ZxD78c9oFDVFGZjwPtetoFQhBVwfJCCdQtfnrT5RSofS4xfw23UDeiLVhHboromYKBGYH4N58oJPLJu1h3",
  "key26": "3GVqQrQ7b13q4kCAsBCppcgZnkKaDG8jYj8fFiGEpsKETDMFGTXKhMVjj2zDhMCT5PZgJGYDJF5HCg4yjTN7sefF",
  "key27": "5DuYxGnqWnfoamuG73jNRFUVXceiNcTTaxAm63HK7TygpuzGBQhwZ8t7C1xEz6CLWv47yS31d3isG4mME6536Gon",
  "key28": "BgziSVj4mogESZqs6oiUo5Ri3B5czpkZ9SPhbjEQBA8g9qmgNtwywjoKjXL6Bpvki6XXVmvGpbu3Q3VYuXKSExa",
  "key29": "2DZMvVDYXSPYRqbqiz5oh44XgaudJHEGAKeapamha6st3DwmybAX4aCNBggfqDMh5vBu2tC2WiJyFYfB5FD6fRzR",
  "key30": "5yfvj6UhFQNr5TcFpDcQTXrCaQHmJgYJPPdNAHs4AaeUdRLvi34snUUS8RY29UXth1FWL6XLZNzyNrjRHCZvKcLH",
  "key31": "3qCQD41Hc11cimMsbKSdDCXhvJF5XaKZyEB5NHdDbL8didWU1BSWQ3mkxjG9pWrfxRE5Sa2HjW64oCj2kBhCf6St",
  "key32": "5Q2YL8gqP7a1rE21wvah4pefa1zWiGz4C3Cbs6B8Ga8qr9ajXdjDKZB7G5UwknAaSbUzGqkgt5g4APxDDrBVzVWR",
  "key33": "4SyoLaapnoCn33pgGyGthP7LEj64F6kmF2zAKGp6tDhBBj1KS6jKtwz7riPHpRdpHgdvYzj6GqiTLpUqzYWriCAZ",
  "key34": "4jcNAj86zrW6ByBLWB2Hh5MhJegFiD7RR1d2NkqDUBPxcTc7hTefB2uzytJnUS5byuuHSTZZ7MvH1akDciHtVctT",
  "key35": "3Kd7TXfJbQuYG9VQF92y4PHnecZ3bXHjfgJZKtLyg7YvzYHeUK1gwoS7TyzwF7qi6po7boRftn1ywbJenGc2FiYN",
  "key36": "5wCdoSyH2HfLwq8YYhdT4fnHxhv7xwM731MxTm788p587FjqxrkTi8AV4MYN8o8YFdbZ1byYiohjoBBepAp2iNL4",
  "key37": "LSZzuhnRgEMhf76xeDrM3vKiRTCwo4ZdrRtLpHKGxjsTzcggLbaWKcVZZya6FfiniqPSjfxdk2A7M1cy8ojMS3M",
  "key38": "2h8LJ2YodAtPkuZQFYrukACt5Jxh7emECHBFujqMMR5XZwrmz2JMsUDxxtHyxj5iWcvHxYmt2CXq69hVHB3bR3r3",
  "key39": "2X8jRpbUTsofDi2YHAka8jYBxK5JbQP4bWu5yECWdy141hbkRDCKXnZ1qpRUYGXCg9W2fmfmiUymYCZMYyrgNNb8",
  "key40": "2B3CfPQGhxKH7ur8nB77X1rfqBaeByNAmCdVAiW6L4EcYYYsxczt8LXkEdbzz3b4KZK6U3jefXc8b1rZfJwtLPrj"
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
