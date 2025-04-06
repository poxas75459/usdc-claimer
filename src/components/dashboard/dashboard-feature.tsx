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
    "3nueVsqtZStC7Fax2NNG2cJ8p98sFMjkckUfvUsWeF35dXom2ELLQDTDqe3PBM75XqXMxbUeRV4Fi6qznuJUiGzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gnhcYa3CP6SB74ooQ9eE1CkBEDtjEcQAmCouo4bR1qSHNq1YkCtM2nKbo2gxnTBGhHAYtkKcWBXYwQe5rV9UYJ",
  "key1": "3YArLYFb3NGMCeRx1nVRnZnWsnNAUHwp4d8MYKD62sUf4T2xpQduxaqYdwjVkqzpcovRq3SjPic62E4Mxm91m1BL",
  "key2": "3GBtYE6aXjAbcUAA6u145yfiSTaK2SgJ9kfJfA5P8XLWpyuQvyGdZ5afGt15TKH1p5taai6eYm3fwRUTBvnFihkU",
  "key3": "2wSW2nG3pWCUxqVxivLQaGE2fTKDAZhZRvbRGA8fZxNi81BbzGUGzZCzV5T3WLry8nUWcqFKokJhWfxa9FJPkCtm",
  "key4": "4UY4MWJGtFvWwVqA9JPEeiM8WiJdiQ1SEVMEssbTkfFWZ4GR24rfnCJYeshL1b97eM3qToSVdW35nYNGLTKn5LWE",
  "key5": "3y2etVjMzF3DiBpziErHFPDtd5Agc2rWUMGAAfFXyeFVG1a1c56J7a7Tmg16WmbfnboFgGrPg9d1ACuKvY9pfYC1",
  "key6": "4ZKdnt8PykyRyHkwwYuYg43YCcsV7NN4s24G4i4Gi6eG1PJHFvvz6hSQqemqSYhnEHYuuZYmuKFJwcmpuWWUesLg",
  "key7": "5jpP2aAwpsLG9EaCtuihSkcjV7XJuak3Rcu6ib81UFpHx6Wky8wgE5PUEBsYptgMYHpmqeYiRbRQqrVo9xVdSvXW",
  "key8": "tcTcWvGAaSbqxWMMjXc7nm7ZR9sbW9ZxXz76PVemkGs6jvhSEBbeKUsZDC4pReR4sohmJJE7ntAjb9wQZYLFeGZ",
  "key9": "3b3KrWwbVtW8K5mt3dhbbCuf2B2k2G1JmkBqHiWkoFaG6ZEWpthR68Y6Jj9DJVdrDEYdEGgVBK8eF3HVP8FMXuBu",
  "key10": "2Uf6VhbUMN7zWyjk6UcmkyT6EHiW1ij1tGaRLWwsffWp6dd8Gg3eQEbvQJuz9AycvpUSKwv3h8eFiL6goinWMuby",
  "key11": "3f9jLYfkRzSShbLAeXAXTnJfnxHh1ydb2vpvRn5JUjYVEvyNoa9m3dHb7QwfavB1nUMfNCYjm87dyaRpmuwoXeMi",
  "key12": "4t5HoLbuumoumAg1vvcb7iD6ev92cMpK1Cq3EfBez5Nd8hwnB8q1j5YAoyJ2R5JywvNgaTi63fPFhUK7iF3KG3B9",
  "key13": "5ZwdALsVoGjEQCjJDvDmZoT64XUPmCXbWGyEdiiMgio8VVgR2LWCWjuvTjeuwReY6MtS7Snrj49Vfp8RyTbyoGkR",
  "key14": "4gDiasyygmHZ2Rz1HMT2jD5gggTuZZnDSVzS6VFgjiG4k95mVnufvYHZ1fx65EwXP6W5SZMTn1RuPKu7EhscXqTm",
  "key15": "58xWCti7SotEZqeo7MVaXRvczYNML3Mk3xqWovFdifkHhmKmCUYLWeJtsq8PiQqcmerKku8GDwg4L9AudNVNciax",
  "key16": "2rAU9UYthn141kAhQv4Qx4mKiFs6t6fae4ifoasurEBjia92szYivRKiSEswEDSowWJbDWnJQjgSKifFSBBk97B1",
  "key17": "4zRRpfjcGUtkWLvwSV2fxAVKnr8VsBD7yfsuaMFWx9uY2Km3s3PxAYMUTWiQgZxvxTe53a251wApErzQuzhFjzQ9",
  "key18": "3SWMWuPJAF4vFKvs8vzDkZskCoUgjKcZLomsbBX9QsWRj6Fa28iDZkzKMipn2mWcK6kEdeCBE8YWXfWM67M5kLFP",
  "key19": "HxLeYAFnMGirpdWNkabUkvngLYLzE1sZJbzjtH4Rg4ofdkF6WppLV1hRXGP5QEqdiYo72R37hZVtoPD8hQKHYsj",
  "key20": "3vXHfaus7tAGsG53eEpJEyDAKXpeXhRLSvEQtviLEmKYjhdDYWcnQ5P7BbwYRXD1StxxfxQLWPsDrp2xvH37qmEZ",
  "key21": "32745YHrhZUgEK1ChYibQbpLdNXmoVSR8SqroBzMMV58agLd2qZTjKG8ARrqm2DWWhfEWL3ZGd2fXSfKxQVjzKso",
  "key22": "4KxTrspPz5muh6gZC48jB1it6Zkc1YmqTNcHc5Da2fA1YPzqtGRdoXQJZeWaGv4SkAfP69RRPFRddSUuAPMXiwiW",
  "key23": "2vVaRPWZfmN6rxbFQ1eU4VijPtD762AEXvcLZqtgG4PDRRXPExDr4TYzAbB64TMzWLCQX8tvtSftZNufUMnpBTgX",
  "key24": "exJudMD6Lm6XiQ2egP8LYWBaWNyHjWzE5AHdrYLEiFj6imxbsuTi4oJ9KZxXZQprZs8o5161NszuoLgnvdWt6St",
  "key25": "4bBs4LW5zRwGsHTuKMzMfmhEL9DmXEcW6SeL3RMRMCNTPjHoFFvyHGkSzht7nvi7orZW6Euh8SX11nqB8ac4Xdir",
  "key26": "1YG8xzeJsZsM44XXm6MGCSxwMPmbKV8brdXrezsFeX5ndawLNegoGdzbbD8z8X6a8NiqGAaMsUgwvEkgZrbsiz2",
  "key27": "gkRhQZuDcHb5hGiaZ3X8xzw6vL2NNrCyub6mYxa6zBbUfD1peNtTCQtmrMv7eUwb83uti6AaSLWTEifuJJn92yK",
  "key28": "2kyzhwvkMihFwFDjkPjJfu6bqEBeeUn9Fo17KDQiUZmSXQrsEbubsXom68Pek2PKNmh9UaqfsT4acLQVhoJh5SxY",
  "key29": "49tMTE6oUCCXTn1n2T1hvEvhcgwwdXMYWcLuFGoRZNojo4zrzGDCihx5d9zpPvqwEUzLYh1tHWiFEUYFURRSzx8K",
  "key30": "8U8kzn57RFTVxshEdMsRZHQrsGuyJTbD4JtwZw8cK69hJoSWw8xhzhBYF7AgwHj7p3ZgP4FmQAKjHHscbXH281R"
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
