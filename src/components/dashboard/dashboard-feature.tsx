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
    "42oHGw5WY8PmhvdF1hY4ZJnVFF7SMbTw1XCSG9ddEmuFshzDVBMPDMKzPXNyJ54diFfQNb7RC9sp3DomE8KeE3hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYboYjeac2NB7pFHPKwiA1dv6iZAN3aZbAHerd6hJPBZFMQKT5mViHyEKVPodushT98r1V83PhXsgBjzojKzp5a",
  "key1": "3M3waPEZnorNjHjWQHBaLSffweFDq59NmoAF8oxKYGmzJqahejMP1H3JPFL4Asqq7oDZiKepPDiBui22P3u6kpcc",
  "key2": "dASsyjYz35rb2fkxNCbLBaTyKtp6baz2tFFwUV4VLSy4oHg3Ct5MG4mA38K6rXBPnFR47ZiqWHbv5cKGRRNqmDH",
  "key3": "MNDS3GmpMNJBEyQa52XsQ745vDVUV2NJymguLaniZa2ipA4GubV8tB9mhJyhCM8u6TtCBSPtnC1YWKgxFoife3o",
  "key4": "2o3QmwpA7UD9QweviQntgHZnATaZRC4MwmD7V15sdpkwWKbKm58G5bHearTZzDZ4Ya93mMS6XGgMxcePMQYeTrCQ",
  "key5": "39Wtjjzor66hfgTMbVAes83Pokq349ca2A77zMXvoMnqrFNksPNMuXSivwfzqsk4puFa1iTmNEnibqEQCmXb1PB9",
  "key6": "5h9nh5MKha2q6LZZBLXZFHkkD7Tv48Mgd2ejergoXG4p96yAeUZunG77vghz1TSQzjapHzJ1e4vntBmcH7xXrc4C",
  "key7": "5Q2aYky8S8Cx7YgvK6u72NhP1dUdYVGDs5xMtwWymWokJRYuAos4pGdmqKcvnzxgBgGZMgRBVEeUZKrVh2mdtZEJ",
  "key8": "53QJ1acTHi2rtRaoihe4HV3r8of3DHUxbCMw4uBYk2UTm6dPifi7kgiL35EmzCVn7V23MePWXw3xv8QfeaRmMyUE",
  "key9": "4eV3T7NUprLtYkJGNCcuctsUhSkg83g97GtRGbC4yCJbCprCKRzkQbXAuPdA5PMM8z6LqbEGnHTbtqGgJBynZiMv",
  "key10": "jhXHMEkgMJWevog2yiiDXZptHokUxe4D2c8BSjKnCsaPTMT3rWkToU9rx3ncLNi7kQVhuaocMk7mRXqQFDtrdWd",
  "key11": "2jhMwZZBQoXSxHns3ZjJGfkq83bM3z3ETQwQFEHgZSaJHifmVWiYFYUhx3UuzHC1fNogWHMaWorCYiy1YxyCQuGD",
  "key12": "nn9PLfAHpv2P32HeSkPWReM7JkiQmbaopUfxNvhHYZpaSgBk9EjSC9ehKepWyDFL5WRgxsLjyhNDgsBTWLARv8R",
  "key13": "HT627R4qFgirkQqRYBQs8aGRwQhh2gAq2CWFPpoyC9dBwuWboWHEgSGHkyZQ4hPbkNvh73J6H6FreopVANicr8b",
  "key14": "5gopt7f1Wi4h246nV1vTca6x1R9yuzes8EZjVyen5b6xx13j9Hx5PXHbE273W5v3jEBn85QoXxSKYfmvCW55dGdj",
  "key15": "GBrfNqMuYfvzMT1shwLHfhccthwugCq9zzmHvg1RUnXcCU9LtmsQLfjrDboXic8Vrzqx2kA814vU93rNfURTL5i",
  "key16": "2EPSSZCDb83JeiFHnRACRc4auwXFsZPaEEz4iMDLguTS9cT5kgDxTJAXc9BaxyW5wv5E7sM29nqMRc3SpUuiUqpq",
  "key17": "3fBKUSk9V75TdxyXwGrMdu28Afy8ZShPgQVzr1JYfjzN4T4rT82YDintJsN1jv3rTApn3ZveJS8HxCx3rwuvnn7N",
  "key18": "3uuyKFGwfsX2XVhsB7Kk1xvVx13h2QwkcenYuUXAyFXbeu9572WS4MQpMwWrxsc6c3X1WxxVJ7Hi3ZeFNuwuTTGx",
  "key19": "3fmiapouPVVXQU8UNU6F8GvA968MGcZ5BpsHCRS4EDvm7BTo81XeHefXAb3xPivMTQTskYxLpPAe6yN5zz3jsa2f",
  "key20": "45MmtTTTVBAyC63TVKPUvK1uX6PGvCq1HSj83TfDcJsSFiMLkM5Bz9qzgmoEyK1jDiWRhCA99sEDfmQ3uTXTVjo1",
  "key21": "4FdVFmbVovRauMkP8jjPDYTEJCD8nCnaQGwd4KGrNtjq6UtXYaVu7RUtB6yrbEeEvJs6ARvZagoXaBUUeeriSbLz",
  "key22": "SwTNExaWeKKB6P5WKFRihcTSxhwddsUmtZdb1zHY51Yy9vkoeSCrLfpZn1B46MGooHVXdXACPu8aXi8jJyBYeAY",
  "key23": "5uP9nR6k7JyryRM6QLPi4g2Bav2ajdcbGFn8iK6FDPaCx1mkCLyLbQfxjJ4jecW8iycT2DksUXS1NdJc1K7CKdb7",
  "key24": "3thSugc6Lpx3Sfsh7JtQNfN44yMv5DURMgRrRtiuvGEFdhCbrccVxBJaC7G3BzhmUMGd7CvTAb1R3RSkNEifwW4R",
  "key25": "5Zu82qw7X2UpHM5FJaz9VijYd5pH9eJUXYsYdbVcaiQBSfcEf88zyAnmYfsxSjkakngVhnBDSJXoMR1TguraUkyG",
  "key26": "2nRhm2JENghM9y5RZGB8WvjaWtQTugBcJhhMTAqgK7yxsgVLP5nf3hyZT9SMStFJg5YvbL15UUey6zyAhWaQGAr",
  "key27": "3U8oaQRDFLuvGqT7hqpNopxp8wXGPnsyAW8T59uYQF1ARirrxSVNPAj5d3pBfk5TAdHWBxaZEGqtCFk9SRqT2GXo",
  "key28": "SJ8eg6Js59NJREKtqGtHeP6QBqJJpJ52UoC692CrrFL4EQc24DaZm5fp8RAhQksTN4YDSVeDsMyinwzCp2U9MGn",
  "key29": "4GeGiMy4owF6rJqNP1CNzLoBExzqTCJw2zARVu2rFncG5gbf77urUb2LNQP36g1hEfc1b6gYGM14Eb1xLvdkpjDd",
  "key30": "66NiyW5iWUtVZ1uNhbXsfa2ZmifTpBn6EgWdor3uTA2TEFniYn4dEePZ5pLh86tNrZnj2mUFZMdTEZzswfkhn566",
  "key31": "3ZrGPntG4Tb7QJJNEujopXqYujB6kaH4PbKde6nmigKJ11vSpyQY4ahVeZnnQfLy39aVD4mVSVQJKrNHRuTjFHDV",
  "key32": "3f3bHz13e4EX2Sk5TjpU9s2kYPet5fgjPQBDGRkuNoBSjMkeR7o2fr23W2mUgMLMzFLEWk4MF92F9UL3xTXqT4F7",
  "key33": "4uNNrh9729x3SnunvvSmQMTVc3Ki7324xbmVvJD9n6ts1R1Nwqrxoy1yS65etqKhEB6kfoHFnovw6DtvZi8zVNrK",
  "key34": "4uG2bWtdob718G6ALg44vt3tFUXiGotaUkuA1T1uXk3xfd9YydsjYrzqkQgcEogJ9W6DHPdTcfzKH5To43F5umWg"
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
