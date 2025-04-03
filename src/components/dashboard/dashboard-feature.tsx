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
    "4ZnTZiq8KqYx25hj3bJSZUnZ1SX2CYQvbcftdPQdYhzAcNhoQzykdLoJxsRCV53w1zJ4kkyngSKtwW3Hxtw1xdU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXWGvkZJ5EUatGXndA4T2eUJJUpkWnZjX1G7dz12QLxCzLXETnDSCPiKn7iVYkK2MgmdTo7twfSB3DdMsJgFnZW",
  "key1": "5qWTs4ZHkfTX13eLCa7GJ6FMc3wMVS5WqodLJpdAtfgnBJeMJv6AT3cyLLqePZhgwF1scUBVNqrsCP8SDmdSQmqK",
  "key2": "nB1CxmKZrfQ7aoVGkYZBTf6h2JJmoaJNmgdnRpu5mZuxcMFXAaSrXcdpsycgManBKGQHHiozGFAsuLJbtKdSkja",
  "key3": "4Gn2RfiecnLgBgm5JRTG96F7nndsUY2ffsicgB9c6bwTJGi7MbLBHg6YgH6ZrEXEwkjymthcBMsFMfW8cQQ68WNc",
  "key4": "Qq4sMes7psZuejPbiLLHe3ufcH5GpM2ucCkwVexhtP7MphhPBVBPS49MxUWM5KdXnScnAr6qhSLStNd6gRanULm",
  "key5": "2xzDqVKMz7dfzgiDsKpDVrt6cfm7opoRwkgc1SZ4YNn5geTFquxe2JGQLeAkJLNZTQEBYy31fY4GWugtgAg8S1Mb",
  "key6": "5Fd2A6WGbvG8kUduHkrke3GJtHG4kABU2vD8NagjyQi1dzp9eqcQQsKj8coEae7kCbcvfSXsa3zB3Txo52DA6xci",
  "key7": "45K5rzBTgLQWcHicufokCJgmZpp5DgRzE31qCxYxjSmL14hv6cL6f6HTeNUdDzCkpgJiaWU1pPF7LBY4peh9zFcK",
  "key8": "2mpEiqafFPSAWABTcCupkuqLTwZkAuoacZuCVFDwsERfhsZCEnd7YDgVj99hTQSZLtHtmLyifZVxWAboUExFv5dn",
  "key9": "3hYZmbKeW1ZvYwB8nPPDUC98KLeTM7YyMMZiKLD8emqammta4bop6qwTJjA8U6tGAoD969nCZWXzbTyCqdEtqsPE",
  "key10": "3mw4MZNXRdNUWZcuMjw5mZN3SXbuvvNQKFtzXkxJHMXDbCFtqwknkKzFMH8VudTdkKU2wsWZ8bXUNfy74t8pm3Uw",
  "key11": "33TV7h6GTAas71ojFDoomu6xeE8yMMKT5jDcGMpqGT6HvvVvbfo4Vid6KkxDcD2xdYMuNXixZgcSZ6J4zbCspcoc",
  "key12": "6wQqm14mDEopzkvnoHeC4sP7ATtDk3emtC6WpQZx1qPbMNgT68bez9n22Z8xXmiTZVgnM7xHKfAaLTqgxqxKguE",
  "key13": "2r4vAZzmPzGqxo8erxwSrsXfdeGtT7ZiqvxPvCDML6obsSCVmMBYKL3dF4MCZHY2uef7bTDnqKHF9BFiQkeq4qUd",
  "key14": "4iL95bVKBKruL1zCKP2XZA8f7MR28wxbnb8bN62UufD1cMF45JvxEsXDCMVXRRyKmpeyd7VhPGVM6qT14b9a7qDs",
  "key15": "3gPukfJJLVyPvoMBt47rE5wvANQ27r1TRvrsRGE6Sy3WWa5qLgWMzHWSjARcpsCgsm5HzCVF5GEQEwznmLX4N9d2",
  "key16": "3MabSL9Rb4wh4XZqEfBAg2VFD7JrDtHzfUo6niSHCYJ2NC39UkPusmnB6EqfFnFZF7ZCpSxLFDebnmw6TBJ54RTo",
  "key17": "KfjBNipT6o7kjfUCtkSZGy5exJzDebQcHdBrtoYDQmJxySph6yHMoCvQJtHJmD9VSXUR2m4rX2iDhmg3ugbbJmw",
  "key18": "2ACJ8TFf9qvBUZUkXY4ojf2CRPEpN8pic2UX5ygpHJ6rL2VjwWTHX44Zvi7akDvh9GU3RLdEoFj486eGGLqNyF9r",
  "key19": "4VCEH9cvant48zsGgzqyg2sQrHuWGFDG2PXAN1WTfCC4Nv7hKNArm5jTSujqAaq3aSBpH7BRkmRvfVmmEBWTnf2g",
  "key20": "2tNcjowfxbus4wrNcrRY6KGgndby1feWyRXotHsJKo4sdvEMXwFofZSF1utTRgPgdjkrFjGjdSYwjHaVEdbKzVaa",
  "key21": "5C2AFcjeE1e1BboP8rovaT8nrz3bzxTfoEMwZGNJEEzCQhsUYWVqooAXYMA6YyafEqFu35XsHUirVWYmFPKLjRy5",
  "key22": "5mkqV116Edroy9Mw3avz2C8TngkgUZDCydAu6jLNYigmY461muLpdKTghaDKVCJ1MHTSSMyF6i41JZ2PkDs6dnZH",
  "key23": "9Ny3UaZXdcsSP7EEfzPaaYfy6YgMbruyKgZ7TjJiodnc4wdqLuS2Chxa82p4pdAZR4emTKBimdeZuMCkgrcFbmY",
  "key24": "3MQRBVVaQj8rsbAhrKYotGaJxjnNw1EStCHsJtHGSAqXUBfactTggGMf9vwf4F2JkUZmq9QQxJ3D7vYabuZ2vnze",
  "key25": "5XfYwmNktfvQmwrm8eL1Gmdh27z9RNasJAu512ucYXfgmSe4i46FsbwG5bYnpcWsYVCgBaJmVxn4iGbL1sTkDefu",
  "key26": "3eYZvw4rdi3DUjRfJe5VihaXSoYJFtUVxcvzfWxxD4KFeperePWdrMSmZP5ioWjCWKLt2Kf9roo7Db3zziphJuJe",
  "key27": "fkQdUq8scAnMvRfeJdivTjvfs7DDjaDJTCkmLYtnP7sLQqfHRoridWtiF25xNazMdmtMVjD9ToDcKxSiobZPjV1",
  "key28": "3orc3ivqKqG5ZSMzE5skYGwiPdfBHTrkwscHpDm91kxNaXCAf9pHp2aouPcZTiN3NXxXAS3dMQJ8qKqTDSUv5n5H",
  "key29": "3g1dDRcmUKCnzok9Ha9G8ePauxJanTxsr9cVYV7JocsrxKHAeuu2xLa3D58SDq3kRaGWYq4LPzdradkBgQznvcUJ",
  "key30": "4PBFGqELMDycgyVxcg4u5JA7LnpbCNimo6shcwCQgZwj2zkJ7wAmPAC44NQ1eUvxS3vBxqoMZLpHUcz5ajT9iumm",
  "key31": "oBp5qwwnU4x2UekvZ8vHg9GMJCfM1EP2fVEKcouHVyqztuFvmRVCfmb44paww4s9QvZteGiZ4EMo2S3d839VBFw",
  "key32": "4fgLEtWG4B6HR8CBBjzNHogVqpbAg5PZC2Zqx5Wa8K6bUyUWnLNckR2TRQGBqsaHsCvbSSoKmBwUJjVJJGLCPfMu",
  "key33": "4Tis8u8tYcDbvsWF6wzsYWgsKuLmv5KnY1UWR4ZH1wKBRqSjMKNkRBvQLSTLk8rKAFKxo9eweQ36stGSg8FWZG57",
  "key34": "3vtwF2xk7cDgXEndxVHd9usabDX5ZViuhEnA9UbGdPi6JkG7tdkUAEDUxpQUjQArgvz6tKWvUn6F161sZYbUQvgd",
  "key35": "4ssk7xWU7JemUJC241yjYzDKWPiNM7EyoH9xMKa489invdhfh9HYU1TneRiRgMjq46sxNruXxjc5ZpMgAbxdj8PM",
  "key36": "2KSHCWUBSkn2qS7tYr5aoG5h3B79JErPC5EykqnM4RuQeN5XBN8ju2CynfbJXTbCcFwvWBdykMp8zARFMd1yMKfh",
  "key37": "2KYWH5LbVF5cbSrLc3vNePNuThsR7jodr5pSiCLZ6Nbrpc9jha7EHtBjD3Xb6ttaLzphKogvFbgDJp7GhSQ8ZoLi",
  "key38": "21mqrd5JNCHwTgi2oPqs8ZwPWcTdsr2BozmBnsu7a5HyJayiq746wkqRvxiZoUpssv6b119eZdmR9XUYU7XjHarX",
  "key39": "5aiYSqGAn4ptRomfwj7AcQeyXNGLFrjVDtwDhS4fozeW8b5Ga9HbLuvYg3X3wJATHAcTDtVjARGSfkRnvHcrjnSy",
  "key40": "3WHECxTP6pH5zu9ysyCEprXkRC5e27x1rcAThCGoUmJsdNDAYHCRRQTLKi2pC7vVEsNe1m8L2mcH4srBmpdttWkk"
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
