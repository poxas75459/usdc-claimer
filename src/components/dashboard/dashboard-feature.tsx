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
    "tUwTRq2HGMpcjQPn1SbKkJx1GU2k66E9gErNPEfqamYT1BHGPUUS3CyHuwCUoMHBh3DrZnWvwBLZrWorNKeAcBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9CjpC2jXyPd2QppVfRybghSUsGQPMBsizunVx9d7G3CUJDebtWsR2jYEtCs3NT2g6yco7qXmRqn88BJNpkRFjYe",
  "key1": "2YbfrPmxfpfuagEBye33t3BrKGgBQVohBG25ZSv2uun73iSW6kSueW4wJgqUsczaejwUT6a12xx15QGMVmho8VQ",
  "key2": "428wzn5aMvYXivpCBnRyWtnsnP5rpF5Sx7KW2DuzXE8BY1QGyzTPXdBCWNMpn6737GBKL8i4Tuz8Epcy1xa6MDjG",
  "key3": "5w4xTuor2wVbKoJiaGbgfuT2oSycBGqezC4YM63w247BYQX5MangbwUDgKVcyrF8K5CyUg4X77r6FZyEtTMejcWT",
  "key4": "khgAgbY32X3m9C6VX6BzoRWrAZqWLcLVHTNpRmoAgiYTJAHgoKuQwh7w7BqkCEMa2WcXD7xkX9LmivvzihgxxtC",
  "key5": "U27cqkWAhHQMSmoXY8DLMmfpTRC5tgcfU8WJYoo4orhk2ceGEcDpuyMyMe2XN78BBp33ofrviCJZYxEe9ni662q",
  "key6": "5CbtWxaZzLXdTS7RSZARiYiFtfgE2tMfrBQqE864zsSLMbmtKhXBApktrjQtzYHHujWdT22LQegSX8eVRkfdcnVg",
  "key7": "2MvWEK33xAdYqgn3yiQnXBXG7uYgojeSj8C4KZVhXo81mbmz9QdD8jU597EaY5FuFaWLS53VqWZ6zckxLdEgoGuh",
  "key8": "2G8P3AN6AgbXBunakFvV7KYthq7DzC91LKAbejZ75wjUu1Kne1msRHoGHFgMBGCTwyoyAqF2ndKMVSZBWRZAWVjc",
  "key9": "3cPfazeKtZDXbrWUoopXjQkihZ3qaRQfbBUtgEvNSW5tiNgbVPHrvi7Z6mXG5sWH4JbsKssp5mwPW9RF9LLR4YXz",
  "key10": "3Eomh19gQh3pX3ZUxze581ckrMhEb3pKoe4eyWHwTmhgDnnXqDBN5DBKvTFqmfT96oCu2W7GWeKLhdq8N4WvcHJc",
  "key11": "2Gy24YftA8wdLTyKbyt53XwZtYwgMsoVCkjmSxAb1a4oRhFWxeNJikCzgwTU5vc86LStAf6ob4y71awx7B5jA3Hc",
  "key12": "RDuUFiUieNvxwxG7fCoKFVzZkonrojQWm46trSd5YRCUYRyYWKYiJzjZ2JU4LNUgrqXRwbL87RqU3ePBszTdEs6",
  "key13": "2rQtBqazMGhQgWB8vAfZdHu81yawQQpqGcqCuWx6jwS3uv9whVg7vwW2hcJQYiUjryncqghfg6qMCRmL8Gmyid6u",
  "key14": "W9LLiRS2JymwycEgxNgn7cpb1k3v8YrNwEUCe6WYBqWFEG9E14hcUWMNYAJJCC4jQNAZyFRkMCBi84ysY5f4Kkh",
  "key15": "jcEcUDrrSW2ir8bsGtZwgx5uDMx6Nr2RcBkfguc8DLDzWJPtEgU7d5TpfUSRkUxsSjwFeEEqN6wovQxpw6PLeD4",
  "key16": "2yBVanxtvJzX2uAykffSGDa5bUQZeDrSbuzKX5bgptJK2wdD6xzx55Kv8tbw49YHDLKK2k9LUUP6Q4LyagpmUAsj",
  "key17": "3un2Pr4wwz3d1aw5bQW2J7AChgcgfHsTZThE94pPTvT7o8W3hZaiX2KTCju1DdvACBVA2esFakmfT4cMjNKne3MF",
  "key18": "2Jb4oNzQcWJhrCU7Gf6bHo5r1nWvp4rWdDV7YxynfTxUz5A9UsRVMHPbG8wywSA1uzUEHTza8bB5wondFBR4bVga",
  "key19": "2nC4MJRuNKxCGYVhwyhLQWEH3Rw9KPzC25uXumEV9NTvL8btm2j9uLotuNxUNs3Wyd2JtMJfbYY9kw7a2RrMRsXQ",
  "key20": "3nHZMUgPQtPZBzQc35JxSrrauonPd7jtP3MXDeJYAAXiVohqFnVqq9wyPU5UsyR4spDFZv8kpn8kZ71VpDczuEiM",
  "key21": "64sZh8rsYmKLa6MtYxaCy8MR3QMxW6ALs5pCun2vj8yn9V9NAvgPbKe41bcdVLuEVPdk4ppV5SQcNdFcingpFLuP",
  "key22": "3wFLy9R9rtTh4b4zC2DBv52FvP2DiZ9Zaj2urngn2MBF2nKHAmmip1prqpbL2BZ8grazpEFbYNbc8RgT29uC5PKA",
  "key23": "2cgNB4Xpijz6AoXqCB4WNP45ticwGZyM7YAism468HZ31PqBgvqheNkZoS1ykfW1E9WcBggrocSYRo6hUMTnif7J",
  "key24": "2aYKAB5f7xzp6wnzV3e26dTpHJFcg4uZBZ6mykPHNq5vbJhVLMy9i2TCvrStuk1atNXJvcYMix5JdbHw9xo9p1Q9",
  "key25": "493NkSykVmpHfgqavrpQEmxh9pnSFrX3YSTm38sx9eTEQtne1fo9n13LDnHBabJh8vV6VbvXf4kBT2pDoiWPr9uY",
  "key26": "5SwmpR76uGBXpshVBaVvKZyCbBEbWjcZbxFW5dze9Rbuf2tbiDW51nXTRwoGMjPc66E5jEPTVGButazo3sDgfsqT",
  "key27": "34ScFCMCkpXKhNXoidqQ4WuvCmed4MsU3TcHyhJMFzv3KawWKJscH9peL4iQ44CXDqHTqVevMNGKoziHLyu7itCZ",
  "key28": "4oo3Z51GBZgFqAJsdtPmdJqNTSDLcQk5PzpRpB1yVpSrVdjVLnRjNuFHK9WNpwNbC4xpiy1YTUC9xLKdT87AhsNk",
  "key29": "3xD2gu4v1vPZS8rxJDUeq1NKNg5HabZypaxpb1b7G7VexngCaF8ckUS8hj7u4qdVihVKJFHijL3zndehxhbBphu",
  "key30": "66Vtj9S7utJfVUFgJzqfDGBpsn8aDrkKmFZoKPjHQPFvo7ui8bcY9BEASFFWeaphNJ8cYrYr6spdwahLK77NtYfk",
  "key31": "477Lc1Sjm4htqz7waw8Tm8sqLeWqTUjTnFQBkAdsYWYBfqcncVwfTvG3dYH8AaG8mVrZgn8TiWEEcdSVhvf5YEe2",
  "key32": "3YCFEQKhz1suMWg8dosJbUtY3z5pPW1Ss8MXh5bMKZU8zFgAjK4Z334h9LxYeLDmb9Ny3yY83d7Xk28D54GUzT6R",
  "key33": "2qFAJuHHDYzW18hpHmw8nztGKFmrWgvNR7zUCAwGJidFMQG9DmmYPeA8pMpuM3BaNEdVxz4fmGRHApr18Cv96owG",
  "key34": "2m1UxtTmULsxbSxMzz89Qa4BT68ZbgRgeabWWqzTQsktCAeTyrkXn2mjprnC7sVvdbaUaTvk9uaYu4epK5z9LdLX",
  "key35": "3NchBUYEzU8A1hLHa2Lnc9PPkRVQkwh7Ng4iKcwEm9Ccuom7o4e77CDPHs5ySMRCreZU6qPCEEmMhetsnKEqm12Z",
  "key36": "256hUSp2aNYefPKqqF66VNvAntPmbxUK3B4tf9n7FgyfLCVi2XUxu59qcfreXuxgUPMrpF3irZiTTPwgmw8e5fJx",
  "key37": "jg8NFgSVmEys9mGyVnDBMCyuks76jonCx6SBThqPr8hgJVrS2EK1WiU1z6DRxaGwRWEXCsus2nKMu37P8iE9n5u",
  "key38": "pCPAwsDuLUHMaNrWgQbEk1wK9Knc6aidJiaovWfZfdu8mxUuDkifRWG3CPYqs7NBhHxxNXj849esejZvBVysbxR",
  "key39": "312txkBXmVcccoM3E7rg5ozWaHKhPDKTQ74G5sJV9CcVqEuwxdzaE5JWpSvPT5qtzTyQY6hKfLwVzEPYXMbMJiQf",
  "key40": "24LLELoSdFQQzNcMNXfHsnQ4r8ndjSgLVknRcDsuSMPvbDEpEr86T133SHCCdyE79ZgujcjENb24VRY8eXRX9BWX",
  "key41": "3MhzzX5C7r2MzTUZfQEmDE5YzXL9iWPAM1jDbnS6ERePSDv9L4URKNsfLSqeabfNs1WPU1iUSez8tQBTnN1S5q9C"
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
