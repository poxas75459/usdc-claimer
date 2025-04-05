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
    "39qCfEt9ATvGNP1ubp9r4DttTWsFXP82fcXKdqa1whFs1ji7pYTTgqSQZtetmx3gfs1aoESXkYXFdhkKo5XdQFML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2riz6g367hSjLkn3MkoLLj2XsbMnQkL5UVycAYJjVhPDujqKRqcajdPJsP5dgU1xFjuoSAVFXJRszfYe1i5bFbYu",
  "key1": "43xqvGTb28MgQYA7wXtTPTCVkFUV4PDU1N9mTRC2ieuBFkoAu85atnpqYCsytZSAv3XrdbCvHnGXuqSp2KYtW2V9",
  "key2": "4V3m1byZNfPinPWRVGeDxV2iqFVhPK3jS7LuEShMC6aYxiKfervK4HLVM4g2SA5fRjEX7YFh7cF7MLMhVhmqvAp4",
  "key3": "5NspGBf4Eb6snMMmNnwXmDKexW3ipbPUNimTZ6yRAAx5AZTs8X8pWHoyAAdp8aVKhXYXgn8QKCQvmSTyRWjAfWd",
  "key4": "2wtoTxLsNYEUEQSsfTENFD3DBCgcJFk6eYxCExMBkkmutK3hjQtSrPzgzASiJkH3L65p8A6vhnDKaYzEo6JbCW5d",
  "key5": "8RKWntrScid5XypFYEr7KZrjFF19fmqd986q7X6iP8GJL37geZzXG8K4kqxyTwq5Xi5S8X2xrwXeyedZBZaobpz",
  "key6": "3T6zHsv6MB5EH5xXN2C1HUVTd2RdE5qMENXY88KeomUngZDtKZKvTL92UCRo2BCCLrob51MZtWvJTw2GuZ8CUL94",
  "key7": "2p3dmqTcckmXY977V2k6Hw2ejh5uTFUPUYAUPr3yeqW489LzsoCXfUjmukeHirCT29om6NR3ATpEi6Rc6foao9Gd",
  "key8": "51hdmhTEmibr2133jYzFpPQLk5zsycL6QuacXbUGEbe2GEgV2inKxndVRPjGL9gE88HrjJb4pXRfijn4rU6r3z8B",
  "key9": "41ZxEJqbFqbPgZNyS9oyShE97GN5iqbqsnikE68FyFPokTmLVjGdzB7RPYkWtuT2aT6cV5aHXdY53zkfYDTWuXk2",
  "key10": "2Eacacingmyp18TBsSXPy2ZoZGUA1Amr2FgYN9CcYkTa71zeKChbHQACDidnPMZStUCnkmj28zrZvy6aA3mN9QF5",
  "key11": "aeRz9EjpPtKyfwQKSnfzNQaaH7oRpu12327CghRRyqypHLKZvLFfjMePPGnbSAjQej89jUPJcx4QVSp6jQMXfrp",
  "key12": "2mq3sRAyfTgB7zDsTq5fsU1zQ8ht5uJJaCuHZRr9Ntc46W7cKZgWXhvEhSJHWR1qMpx3LJxbSWWnUtErUzJhwYqS",
  "key13": "2fQeeuKyfuPm1QEYSV4AwpfEKbRUm4fkndaiyo8vhPp42BtYsptGi8UZHX7C2y3YY7L6azU7vha4xk11FBhJ128M",
  "key14": "5Qfod8VyxBP6aQ5ACAFA1C4wwEP8gyD2qeyBTYuyNHLQn7EwVfSictwtNTN54VTcUi4TiPpstB9JPbmwcHBbyd7S",
  "key15": "4fUQWMh1QMXi22FQnwGWEG46v3suHyiUSVAsJL5ZftAiatKe2GvuJ3jEyA2Q37ThbpuX2kJ8SNecDNTsGoBk8fiH",
  "key16": "2jqwdpZdKwYzokJdafHwP3k1DtQqxMgSYeULY4q3AEmGy1yymTCETyC9femm1N36hNnSyRAoanWSthXHqPQ3nHWD",
  "key17": "2PEbBwX2PFErYGtLmrWeh4N7SdmSYKEKoawecGxugyvKcfFDKxVCDq7PonqNhYtNRSnewB9W55xjNKmJ7VqUPNor",
  "key18": "4MumUxoviX92fCaA7wjSFGZxfibLnt2jXCcybTMDwJvPZoRYnYyABMC5x8CZ8LmyKu2ALnQbkg6tuvwxpXYojoBm",
  "key19": "5nd4c88K4EhMy4beqkwKULhx36P9QXKtULirk2G3sroT64HvSQeEngsEwf5H9TFCV9RK2BDzUWwcx6N2u9Cfqyhp",
  "key20": "4woF1osDfaDFWkYE6pxaSKtKvX2VfDNuWWfXDGJVMLUk1VVS5LNetgWEH1PMYdSzscMyh96H53nNoYSAKSyfjiGn",
  "key21": "5U1s2dQMm87ppMRx6AR9PBnNfHTs2e3qZzLeio2cvU78ZfrWbpejUb4k72ea6UuuKrPzhHjYgUSkPteBx4YdtDZT",
  "key22": "5qjJEVD1rRK1EUh2Ff7nwQoPbpb1epLTFpCHY2MejNS1kGeek6rbjWAFDVxnMhKxPpsK1YJroGKSmfY18BrjcRdj",
  "key23": "6UmExUz6uM1ykkZiJECg9R1BkTwCzkbtzinbnzCDZMqPA4LHhuKUm7gFh7VLaUfqMMzq5zRWVGfZJEfMwqQ4wUc",
  "key24": "2TbGCpyJMGJsYY34Ko4wMWf6vTxDBL1dXBTLCLBaSdBZeUyh1ZBkJEga4tXYo9Hb9ZeeXWeqPBxLn3i22wezbz5c",
  "key25": "ZUfzDqXw1nvcScL3rvNerqAsgakJcDhDeiw7NsiJX4H3qWFC6Lm9LweZYmJRSGdY4saRYBjw5BWsdVmt198agoT",
  "key26": "4TZC6A2VuwbJj6NbYUJGWtoaf9ArmZFpshTj6tqcJqY15p2mhVRmf8GugJ4spepZB4GCau1PLQkU3PcNe7enVfKd",
  "key27": "5tsXCin4o6rM85JT7WZ46MwjD6jLho8y7bep9Ke3K4FuHc7QSKiMvqtUbqFnzd8g5kdX4c35NY6Gcq2gGpBDtmNk",
  "key28": "27Adi6DdL2gD4oWdAMhuwh59xKq8sY3Wx5zga8Lw8LjQJJ2DYrxgDfAgd3ncS1bgSTzkx2LexNzL9JWvTmCRRpKk",
  "key29": "423TS4xgcojc99cJuyzjV1owe4PSCmjvUYmSM4VnbXoJgnyaLYc1BxPX5tRwSerkwQr6KMPv6qNFDXqwS4VXJaRW",
  "key30": "3BaNvbcLAqamvtndfdiBjQ3v3hACswscNTF9GmZpJmZg4TPxG8UKvQgHEMh4aoFx9bX9SSgzcQDKBq7eYwNapNJL",
  "key31": "TqeD5XKSi6CFRRZAUPv1nR7GniWBQHT2qG7K592uQZbanwaq3tc5mFGfefci3Tb2YdpfwN1RqqvCTnrS3mQ7QW6",
  "key32": "5hrGURx98jhZ5G7ANx6UbepC1NRqdaBhENSFSJEQgxNoLdfoUKmA7RR6huQhBZqFZAeLNDcESQ76UMDGdxnxgtwH",
  "key33": "2M1ynbJSm4k5aUWVv1zFEF2AW4fqmftP1gi7sKpzz1fAZDRu1yfDjY4kgYMzdeGsKNxY5GAzHrLjoaEzGrM9FPMN",
  "key34": "T1g8sSkgDHN5T4xAk2aUy3Sac6QHKTTJA4f28WJqajvFcgvXhJMEMo2mgPcosdg994xisFrM8pcYCffZTsWEggu",
  "key35": "4X8o3a3RHrMnNvEfNKq5BZZn4uk2rsGEaoT98sD3kww3vwYzU2ckbAHnRu7uzzUsXHNKrHryYurxJdyibKMFfrZ1",
  "key36": "3Fec9E5ChFJxqLFMu1LNpteKXXici31C2NpB3EQjJHgi8crSZT4aAn7Yk9RaBV6sNVeLyoRacp2Zodgew9Ji2agg",
  "key37": "5gR5ZguZGfj53jraGKvdmRymYsx7RAgvyKiBQ6MmQsLTjyvRQTt7zAsDpWFySUJHnFdfDHJXXgwNLCQPHDd9r157",
  "key38": "3Aag93NBMMJtesefa3z48YuEpeu9DpGoivPbb6HmDhKejEh3G5DDgnH4f8Kaq2c9i8hL1vBnd8zeNZQiZ6MF2Rmk",
  "key39": "3wBuamb1PU6wRvUu9KpE8x1bxBHTNjz76mBWjBTvMbVELRc2EU87t65Qj2MgWBoU8jMfcykHKgaYjpLhvdhBwMMY",
  "key40": "4h6te7Sz4g1FJ6Wof8ChtHDVdkuBwYFHzhePzYqhEV3Z9bawNS9Sb62heTfikKWonMRCHSGHP6VsbjU1DzdUGTum",
  "key41": "5TRUizms3nDuNEcYDbsFwHjPm2HNFYfT2AYXbTpHjmmRVKTFSWXG2ghXzF3N7nKNitifdq5CSPYp279Boi2BX8Tz"
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
