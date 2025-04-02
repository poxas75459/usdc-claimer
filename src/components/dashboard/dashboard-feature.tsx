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
    "3yAfz6H62RxstUJxCWc4HXy3r7GR7TP3R7bdm9RpWV4qUAMVCkHj8tWeTV7RVYAFbY9D7Z11A9gQQj2XkwQ8L4Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K31DL13onYJeVGhvo9Cx9keVg58Mi4wj1dLojepyLfeVawiowvJhbnr9hj6P8EBgwApGi8Dqj4pTr9cnS19MAyU",
  "key1": "5ezVSjbEWPqGGNBCrvx166LfrGYV29Et1vgLLDrCyE42VyR6VnER9Vnb3sJZyGkdGbU5tt9QBusqjvbJnqnK7C8G",
  "key2": "zaxfqL6xDNbfHXyy5o8wY3C7Pjy4vjG6vowuPBasz36EAZuV6gv9aAVSKPN1wZ2o49teYMDW1oQ97CfQu4YkwM8",
  "key3": "5QGDvwPFEPW8TFKbgX3eoQXJ5ALaWsyPxRijie7PiUdxv6g6zoZuZZQD38m3wyPc1YZKhKcSw7eG4vPkQQ9ePNHu",
  "key4": "5KdbREPvx1EZEhNTm8YtcDvUgSna63g4bG67n6VUkLgkSyXcMQLSBY4tpL43Fj1mKRjnVdErtRAMxP3rBM4zRACQ",
  "key5": "4tKBATUaqYMNHnf7NWneavE9zPGPmofTezgpAyMNLZw1JoV7Bt9QcPG5xiVgudwW2XuokT8MCb4FQWHVXmZ94eZQ",
  "key6": "5Txaczsf1nYkcVigyRSGDHgrPRndVhaABQ5ejEirK2LfaKMpbhqmcPaaDHdduKXk1V4kdZYzqRkehLanHUQpkpH7",
  "key7": "5GwC2AkxX2dCyFntCeCdY3j2asT6EPoShH38ZytTcMr26Jvgahm7vhVHPqPhMHrggBdr7TLzHRHKFvcCzBrRxwYw",
  "key8": "3rqpLBLbXZYNqDNRgVPhMJX3DG7dZumGckQ6LNx2ibZGva5wMEfkMEzHxm1CDghf1eGQW2LxddDKVt1TwxmcfuHn",
  "key9": "cANCTC7qPH6rvWWMCnLDKVAPsfkBq4XZ8E6GrFuuhUFhQyf8AF9qnWKdXgNGjn8FQCZgzyKCvxvL4hxWq9kHhuP",
  "key10": "3uyniWnRwPNDtJJcpyCpF9YXZ6mymJ431gGe7KSwM9VrKSSpvBRWF1DzqD2DMqG266zhUmEuNzz3diime7bkF7S7",
  "key11": "5uQL8c5aZrbD9xqRKBfs8smHVX5MaJTH9MkKeQ2xvU1KQyRN9Kpk7YGpCA9KCq5G3gZA6fPA8X5xYNsGmC3ENmHi",
  "key12": "PUuBVY1mN1axExExg3SXXMPjkoyz2z9MQaLUb1N5s9qeDTBSrm7ikpTTSU6TQ4nQcjkuyHRySDeENPmYu2eArDU",
  "key13": "4x8CegoR4DXaqnd5CFJV47m1bRSmDB6HAuTYp7MpaqpwAxnvkSzBmTZo59M9F7fgqBq5L5JeFwc4gmQDNiaFKFhq",
  "key14": "2StnXNdNUDgHJVZ7byYyoVymP6qzmx9morLJjUZEiYNUWZ8MT3yfUk8m6DVSyGrd5UwZEwtK6egJtxcdQB1DEe4k",
  "key15": "4LkSQuKKNVvDknjkw5ZUdQBJcFS4kRn35kZGFdi6fV5DBBiWLF5fCYRYVw2xAbgpZgZphGAJLR99Lami7g7c9xLH",
  "key16": "31JCd8BYZH55y33igZXNxoNdneiQh2NtbcDcxNUwBsNH6e2uqvV7b2bfP24UrVbcnTvaaQ1HDdMXGS8sPEi4BFf4",
  "key17": "82ue3bV8Y4yFmxq8RGBiarepmhSbw66RSFALhGDF6UoBVVmuyqcvk7Dz46MfEh75h411s7tFQuPhJYKKtfgjdxk",
  "key18": "4oHf3cswdZazn1RTCUrSxjmn1MtcNzDYAj1rNAmJ3Yng6gADLZYhCvTXQe19jF9k7L34gyz97XeHJd3S2h3bZ3zH",
  "key19": "K6UWavqKwpxpF8eVQWXNeUrLf9BLU8sL9W9WYTih5piGtaTdXhtDpoNMnNAoFQXAnt2y1RDYuU3jWMXEFvci9vd",
  "key20": "3qMxV9QnnZXiC5mCCbNnCFPL7KEXQTgfJhvpqU4MeW2Fh4wm7xtjSeu7c5T6iTDcRVRskHrfkLim3iR3LXuv5h2o",
  "key21": "65aNKdep7mapyDDzHdBgKxKxCPwUWGsRGhLzkivYmZaBGhadck4AaJUMnp81FPhDvEvzgpifoittcrY9XbgTKYJ7",
  "key22": "4BGcFSUjuLvnCWyFm345x7GWkZafTdmwonnR5JA1DQaz23Fmx4iexRtxffb5ic6aa5nW6kAGRbjQw16zm3XErTuk",
  "key23": "2RDLD8SKwJQv3pRhKTtJVVzgTSRzEpkyMKjHmyPUVYrmKriAnKqZGfNN646K4cWk7JVz6Qz1PKAkkyjmALRMAxiQ",
  "key24": "2GtwHwdH7FhLyrdXJx1kSApPRBLSRpTKcCZb1Zx9iC2Poi6gRyNmQ8GQLTKkwXYtdMcnfg5DRh6TunjU98Eshpxf",
  "key25": "ZmK45aAAfShvdpjVYZc1QwYiMUXcE9HjzNEqsvYwkJBDhj9whawjHrudNjN2CVPnXCgPrLGRjK53K5brexxkft9",
  "key26": "2mntSd6FaRZtDhuQtTHyVxojcxoKgcpGoaW4BUGc3zvv4H1xvhe4KJxWZ7ss3Lo4gLvBezgNjWNRASEXUUiNgE5c",
  "key27": "3BM96bKUMEYRhpPW4fRotzpYi147s31nuLMkAQr3gQsmfxMobVydUyoNkzi2JUMFVPaYwdU26NWiSb5dHRpFfDH9",
  "key28": "48JL6RUBcnp35AofWFXycnHuZ36brLnAu6bWnompCp8NcBJQdeTw3cB4XJvKKUSwdfkyJJqwRr7QnrDTbExcu7ct",
  "key29": "4bthTH9EvPc5Hi1YJ9vS6nAAPbUR315EQ84HK88773GFDWFS2PqXwyDnG34tAAn1A5jTZTUUZpGn4NmYqzipi3FL",
  "key30": "44m9mjdZtMhCBsZtQD688kJ6Wx746n2Ca4qkMUBN7YJazL4yWpc7zK5FubAZSNfsPNDHXyuiNvpEpdZYozToz1AN",
  "key31": "2hGbJ5zQxRtNvKdWw3faRWNFQPL5nByjA94zFFBaJuwETNZ7dXNEpyrAa7D9go26RXStv2PCgafHJgHkmV6qosU9",
  "key32": "3rnejFhdSKbF1yDQUHRjK5R2z6tamjTDjYapeRF1b8JzQWykhbKQhfXjrqeX6KF1QeDzPVB98yyT1nRDLGa2tPVk",
  "key33": "fXcrHtddcegBhxY1dC6zKn13o14Uv9Dhu7o6Tn1VWxiYSq8mHMRn1LYVZ4YMystk2suEMc7jAFH4ZTRd3T23XKF",
  "key34": "2QkwmGrVA2Ldj82FJv7MrQbCY4CcMWE5cMGyyme8JntFcUmcARWvG71uJZBymxAjBC8RiYY6JmLxSqtBE89RyMJN",
  "key35": "5tNfWXryoXi1FQMaSTzjmrQmNTFQfLcrjvpi8VhwBPu6sEuFsC7nnw2XjYPR1j7hzGpyRJP48eggvGPZ3g2BUk8F",
  "key36": "5gBqKzGe4RnUpi7sjYDXavWWEKYehSmNZxohWWRdLSpUEcRhzGKXd5dskLJqTazg5sNh33SJAkmptDNTtZr3H75D",
  "key37": "4eTX4BaLCPcB2fXxJtDrCe1d3dXwz2HvqcxP41fjj3xhsa2NGeWvbK3mtyTcR6bRuqLZYF3uVMFY2vPFYz7qPDUp",
  "key38": "3YuVRTSZiPCxrk59t841NzPzaBPVHbuG8pAMhHQSygjdMPBPoG3hbn1HaVi9fkrYeQbWN8czWaHHdaLdoMLpE3Tp",
  "key39": "iDzapsCrXfS71HqDcDA2PpAAc3jEayqGd4CDMozkwaJZeuUGGXxEHWkWKezFFepieZboB7NWfTi31GKzm1DdZqX",
  "key40": "3jyPjS8jd82wur4z8tQnUTjD4uPmJYRRCTNoLuNVfitZqMryMpNXrNufcgyhAZ6ZcS3XshhShe4fc8zW4c7psR9K",
  "key41": "zWAU6PHtixr1Zaq87eybfNHq56XS8j3BCV6WawHFNFp77ubJ5TX2iYXRESnB9eEk4qEQjW8JPqdMPDYepENJBgX",
  "key42": "ohjc1vvHZwGHE5EuG93bAi1DJP2sGUijuMa9HKYQdBjEiAzZMaUB4nY7x3r5sbewRLDbGUyF6tcoP4erXFJK9jS",
  "key43": "3jkJuS9Z7Abng5tVkSeMzrjV2Rvq6cm9519y41zo5Zaiqof5V7eTEEYTr5cvDTSwwYRsYpQCUHbB8dk8Fiwww5KZ",
  "key44": "5kaCk7gW7R81qTJJsiZZeyjojUmQRop22DJ2ALDu4NRPnVZcmrFMT3gTwymwDv9BX6HSoMjr7K1EhmCapCKruzTW",
  "key45": "4EL5FHmsW1kBK7krmzQ5qDLv9BcC6aJuJwffnFnod2tQWdShh5DxiND4vtfDNAtZWb8iVRu75wT2DseAYmZwuRai",
  "key46": "gKj5nuHp8t2AmKRAL7XmkM9aWtGE1zA5LyruSSHPvSa4NrWjnmAW8mH24QP8RdTBg7aTPREfGcfzrg5sqkJ7zPy",
  "key47": "63SKpApZjjagqN8NKPAUX3XNgp17iLkm91Nsa7U6pDg9LefHzjZsR91Q3kA56zHZh2N1a4EksuW4p8K5JwijKtzb",
  "key48": "5hW4w3CATYo8kxLGM3Z3ZEdW2EP1JTRM71mdZYEe1EdGqBMm9G9VzF4F7nZsvNktVJDJ81AKektRrW7hPTWE77JZ",
  "key49": "4g7QRr4rvDYrx4TBKsaeaWMsixYeABzWdRk8dCrLYTa4adw2y57HAW547nTLCugo5u9rMouuiu9bnkiuH7fVrjTd"
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
