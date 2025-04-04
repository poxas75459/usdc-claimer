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
    "2Dpgkuqqh9KKr8fjDJbBLfFNGjgXDWwo2gmxWhjScJroYZyUUctqRtNQqnDU2QJRYqdn4FdqKjQcboMvcPKqcGkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9r7rGWxNjm4igAFpwFxgedCP9PMTvzZP6QGBrQj5rxVzTqA3QYujya2YtoH1foBPdvFrppcUkAvao2Uo9XfCc4",
  "key1": "5UTgEipHX1B8qcmygH5kDnUSvN46R24bf7JgjKzUwSxUKhVuScxw2rH5G8Teo9YcSe28eiWkN88QfW5mp956tKko",
  "key2": "2p3yKPfNdTLhiwFKMw7JHDW1cw3dK6MtL8Tf3JwDRDTUjeJYCEvgTt1cF6Wx4ZJQKhiFmATEc2thDgY5GLH2GZTE",
  "key3": "4F9WFnCCRH7Noh5jVms1iKXi1yZSfTYaAMzyYCzsuJRUrraRNQDnwbYAo4Wy3HdPgC2Cs6gZNxhcPu4A5yHJYJzD",
  "key4": "3JuP3mZPn9rzAzJRCJw9vWRGX1pXD5tCJTx4E43re73Ru2ohR9tv4dTcKjYZE1KM5H6SnRaDVWh2i7nXYuwxk8CS",
  "key5": "351Jsppwer1UXpA2poQa2Rb3jabGZtPpbg3J3vQjbewkGmMJw1kW8ys3chxUJXDVCEQWHE87dwvM7NgbRktCWXxy",
  "key6": "xj53Y5j2xEFfbQBXzSqGJ793ThpbLx9XjjkWBd24PbNemMtNcNk5JiAPTxtPt5vkpFfqZcdMPrgJyMdJMJoFVW4",
  "key7": "3PLpNawaBY7xmtVSZKoQLxbiabJjhKtRKqxh3fxmFqN2k4nM3ajy9y3bmFD569wmnqad4UVNXn2xU6w7NPm5JyPC",
  "key8": "3xyTikKUJ1XpkbaFdos4KfR9LVP7GnFTG6gBL9WUXrqxjr2ty47L78eVwHteuJ1wReyzjttnNjBNY4qkYMzSGpvR",
  "key9": "aAM2inaLGiwoAqNB7V79CGdiRDPNzYbmMPYDSmmstTPRCeus8LVPBmgXdwrK1RqVNtmG1Bpru6ujD6m5oWgk2Uu",
  "key10": "4BTvrZMNnKqRF2gS1Qd1cWok9c9eWudqbFBvnvFz2sCKAznbXGRT5ab9toPkfEJEWdyP7CqbnKqsJyhRagr1Z1U",
  "key11": "V7V58ZQ8azb3vssyh9PSitmWwtBWgxaWtsWNSgRUKG6PY3qLYB1yGBuWBp8bx4XpB7MoLPZj1Frz5AGvXD6ZV3p",
  "key12": "4JJM3P2CdeLBcCNWAcebLwVxPzDaj7FXSJBLDsyf6hnZwi2UhStrBqLkAyjwYyuMVHR2EsSus7pSp9ew8WcXQ6BG",
  "key13": "28qKfqZPzXRCD7LPMfCmMKcah2kVDsTN7gLRzPc8EF34J1ifMd2QWcBoMCiXUsShhBb9ieti8yRza92XLy9Y8QPD",
  "key14": "5RQMMh4ZWtgocg64JHsdGife21gzh7cNfS5Ei2jA87Qe4ktUvbwowLkgrFkwyHTr6B3qKhb4e96G32tioBhm2RT5",
  "key15": "3QMvg9SHdJkjnA6XmR8Y1qbYTxaE5AqKfgWjFcEXUvgZxWhdzbbwXi7ZoqLQ4CXCrsRd8XjN57KbV3AfViaDYztD",
  "key16": "66s2TiEADgsK89LiqANGgeWCbAv8KEFp5JwuWSdUxhrBut2TdWyEChaPXzvCekUMye5zcLE5QoqAADZeEgc1ZA92",
  "key17": "26RyqPvAeySt93Lc7jueuUaHGoBBrWik6nksmoo45ttTYmT8TuMGv3bwkkQLwpRbHfAf4TLtaGHRMots6wNaPbP7",
  "key18": "7PxAbUCDi5Bh2LCpZLmfejHLEm1Jfx25KSoCV4fS1RF9Kb8JXpHFsxPWVWstWyzB6bGoKt76XCHm4p8qR7D8HZE",
  "key19": "3Duc3HXmFCUZ2RSMreiie5Qw4KWXxW13bCLYZisxMBDj8r31C3w9oS9TUwxwwmqZmcFDXwAdv3KhxqwV4yaoKYXJ",
  "key20": "2o6xKpL4GnDPPxC5Ahw1FcG5S4Nnsk49DxHJo9ujwe9Dbz5TpA4KhApjZAXJbGuix6ZfXaVR6L7A6BKRnqeNNdFk",
  "key21": "42HmJyV941UtvTdTdL69ApeNXvNUV13RdVdBpD8nU15Y93g62P1s9KQeEF9wxNQBdCJJvuPJ2NXqQWrvZALxVcTU",
  "key22": "V4NNynMGkRDh2A3pmcaJk6EQDRSxgqDL7x6Ho4f6qEBAnjdu53VVbYuC6UQkGQJSrAuHid1rp3KK6cw2CLnzY3H",
  "key23": "2G6R4cQr4zTtGAUBEcfu4PimcJygifZ3zKqKAsRM2TAz9tvQs3WwQRsKGkyEUBzA8jnTtFMqsDD4c8kHVW6KtKTy",
  "key24": "4GLv4X12ewbhBw6gD6bqyLB2aoJDEULkuMkuS8g7mjybLtoMYPWKEvNWsC3ALKjhDpUYiVeehSm3odHVxUwjbMPG",
  "key25": "54coGcWWNHbDsHmwL5hXtogHUoY8Ti9LcteXCu1ResBKVk1NNwEZZWDEo84qpRCnreEuWwV96ZBta1168UmQ3YjZ",
  "key26": "5v1PyV8tz9psoUEZz6AHo261hBTE7BJpWqsaVW8H2Qk44nn2bd6FWjEdFLsPzBbXxvsJ2VP7sFRR8cwYFCF4gmpR",
  "key27": "3yfCXiPBUCR9tC41GpMG9y72AK3UeTWrbsqFAnyN4sNZoxEk2pMCMuiN6Ni2FfHnBj83LLBwXeWHwqS1qaaLogDb",
  "key28": "2EaiCWNA2mPCB2JyAei11WPF5uSSVLC57gsKMiLxLWZWVMYiqrQNN7NNXhNW4eWPRTP2WdwMu6WpWrSF1o6zJJtf",
  "key29": "2BMtkgSquhd3iosAieKK6ZtEURnBhrLSBdKJx3H5kZ3VQQwsj6ynVzbGw8CULNiQpQZzjcCFmugQ8twg15QDQ5vg",
  "key30": "2dKfSFgEWs75kHn5Ck5Ex2tqfEF9gwQr93MD7nAGG2HaLSQuX8CnXBjTtDDGWe2Bt2WrdCuoG4THMwBS81S7eQGB",
  "key31": "5hd1rG8vNQLcczkWvbbeeex2stuz7JD37HEyTSJaF6No8GND9Ck1TKiheok2KURQha2gcZWwEuLyEkpsZrv18RQC",
  "key32": "5pAcHJeKhJBcPBp7dCApdcARFt1XNF8cF7reNLU4PR1wbYvhC63QzBXA8UrLRuDaBTPkryCAM64xyV4v4KRgd59X",
  "key33": "4sJT3P9UaHeLDgoQ6VGyV1mruX8tpBe1toJvSTM7WihQMpMYgwCvYXEDQgj9W9gbYfhhqUB6JSA5A6PB7D5q3PGW",
  "key34": "tZNdDkp4461ZDqm6nc28fJNayDSFSYKFMgFrLTpUZrAA5tHB7xVpML7FukiTeGr7w8okgHvFDVHNr4cngpSePZk",
  "key35": "426cZDeMohTeMXZv3i7jEWVmhGB6sJi1S39Hs5eozmxWwD2SxnRFAqUQrNXKN71SQ4nGHU6MZSQuGtsN1uxGSZ5a",
  "key36": "3Qcredida6JwD1awSdmBhLkCnCxwD1dnTfDpDkf67WJ5fTyCbq5ssy5KBMBq7VrTkiv5ya1LWZ3Xzop2khCLuNzJ",
  "key37": "3zrm6QHxmjMmV73W5dHww1J4HPNjaysfvMxWuG49yCo7QLgMvs8mkvELS36gibVeS3frQQf3icRFny8sQsLoFwX6",
  "key38": "PsFpBbt2L6MKACKiCBsZX5rKc6we8SVPw1EXLL5Hs8HVmaZCwg7bbssZQjTnAZA1sa2jwqoze1hCYZvacExhyv4",
  "key39": "3aPzKzhJ3Toer5kwMctB84fjHcAQhv95jP6d2sWf3HCNoYDzzrZjw4vxhtRe6UwQYEUwizJjhoVHEuCPqHVnAggV",
  "key40": "5tExuybc3beaoLn8bpkpcj5aSp5JpmHtXRoDtmX1a3TyzMjTgqRSepcTXeejwX5sLrJ4TVZbGBstvA9TRAmaz4su",
  "key41": "jphWygBQXSmGoqrfLv7xWC91zRBsu3pbdQbaAp26qqagckpCGaSDQBKyFH6Y5yCYR8wxmQztd1xdCzX9T91uQsW"
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
