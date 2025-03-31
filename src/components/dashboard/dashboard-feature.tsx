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
    "44PYvo4S1BZKX8hSVC1NMWUU8TwiGSJFwphfWJceRcTPKdEpPC3c3FxWBLgSEwqcJNA7HMvHLbPDTHizD4zz5uPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4isofcbwjtYauY5BtLb23Yx3mMntVbZ1jBqZjwAR5bPBAR2rLMAKuzZJwebF5EYfBJe8WKD9r484CaqrnAwHe2ZR",
  "key1": "4XZCFdx7u1ot8yzcQuXvQdi74pGqDLzmq8UqZDX4XXJe67YRWdU5fokBUHzDtwL7XTh2r7i8BRh4w3WHwMQctu3m",
  "key2": "3ArBc7zSN3F1qCs7roQyHdMkBR8hhfKbB4Ptew3yth1z5HvGZbXvQLDSxMhpmFf8J5CtuP3pJww1xwUrJ4sJcUC2",
  "key3": "25hVu7dGE33bY5vboWHqSjn6K8mU3h6yZq2n51wsAAef7QnsJ75hBVmPms2LaGbwqwEU6CrwY2ZHsnPw6bViw5T2",
  "key4": "2J8v2w75wBS9vvBJgq45xqnmp7AF54konC3rjF1twsx43D7eDnujokmad4zvQByPXGwnp2uBZUyDkfqnRVnHwD5Q",
  "key5": "2gP6t4xjokZWSjLKqLGQozbujAqtuVc3PMuyPmkf1BQLLMpi1p7LHhvUbbZxmH1chwWD5ZXjDawELEbNh4n45f8e",
  "key6": "2BWYzwLULFdnpgicbCgAAFTs3kdBadHQv7exvQaQzx2oBhhhz1LAnDiaZJe5tGDcm4GXFTuKGdBFqLgKhvnBkeJ1",
  "key7": "5hE5oUdF2BkbtHEgbZ6wRjumA1pYPXUx8B5goaeVpy9hiFssLQjU3Vd3Tn5G71JQ5ysrJHxGeePKGkJDKUsHsmz",
  "key8": "5FQQhEPGEFLghVF64ay7fUdXJydh5i9mxQDkLdpahbAYqAv8FvyAnnG5ioVHa2ci1cPEUdRV8s9JG7iFZ9GUSEeZ",
  "key9": "3US7qw82EpVW32iqhu3ismBxaLNZ3tNpfsQcgjw184BiAXo8YNtYfD2tCbPfL1455iKZWvYBNmet7SFF32A7cgqS",
  "key10": "5wygW9uXG431s9Keoofh9EnexbiRvtYNNPk7NSYoiNoYC4AoUXEotMcf1L3RDu9HV4V9c84VEHidfGoycCJcFUsD",
  "key11": "46Z84kPfrCpfugwmNqLh79wvgmLJsWmNw8JMiE78JsoEMjwnuTzVaXcko8DgocpqK6uTA9cbPvxup9mVYd7atAK8",
  "key12": "ZssBFYcop13myvNGguHBuzq6aSQy6r6wL74jNmnwnqszoK9jtSVgiHHk1vErZuAsPEyXdpKBNAhPfMNCKijnNA7",
  "key13": "2UPGtcVRnD8tge2bvp6iFePRcFx6i4kWNnhD97RtPVtkyytAGNYZRAsXVifSQSiXM8EKPkqYT7T64fL7p18BWaX8",
  "key14": "3PXzWXTnYqL4M4jzGz3sHnGK5ojeYS9JQX5N3Tg1AscE3UKovJBkevZUpHLqAcq7n94xS8eQk9ECFN6kGczc2SeN",
  "key15": "5hHTazAUFwz3HAPrUXQ9RNfz9JEkmA6aJCfkGcKN5DEFVhZspwtDnmmgovRWsm1B8AEBhG3skbZmCRcMrg1mHJWB",
  "key16": "2vs5zYzkBUEFaoXmgD4sTbp5YzSZikouf6aJQUWf94NbwZmvgjpbkMFXMsNj714nh3Zir5ybweZdUiGeKicPPtdr",
  "key17": "3gdnwz1akCnMwerMZ4sAdoaCwRb3anGYgXQisUibtbtfhvK14rjF2ffGvSj6DwEDRXa58FjkYcfYg3yjMaqw7zUo",
  "key18": "66hFLLFHUVMWfzJS1YiRf3XZA77aXiLYGVRhRxASqN4AhEQ4kfoNZSykCWD8512s4YKAWpaZ6B4P8Yw5LsBQKTak",
  "key19": "4fAPyZK6aKvfCbkGTj6j3z373nxxdB4WhvRVtNWxD3YSzsLpw5Lf1tQdhfdZA1wwp8VnzLfhTdaWuVgz2PR7jkQ3",
  "key20": "42bNL64wRd2F3rFCqcDNcDX1e3Acm3kQw5Wxwzb1CpBm15ogk1Xuysg4cwP1CS5QHVAQpFG5D7z3rPJDXeKSpp29",
  "key21": "3pCzL8dC9HfXEX34Yfr1cPykV2LDJXGsUF32PbpFt9GBnVqrDCvgR3cZHXfJrKaHch9pCKtWTyUT7r6mFxMCKzBC",
  "key22": "3AgVcBkjNJkth8MWoMC2DR2JFTerWd1Waggm8eTodsQ2rcnURnjmuVfuPkB3YUNyLo22T1A2G9RVLaZ7VFC64zhg",
  "key23": "5Xc7KtHsWcCoMFzBfjXnM8jNNifQ7znYRZNras6Wgvdtb2RiwxDQyTSMGHhM5sBkBwGVzPquJVintdhPcohyYdsp",
  "key24": "32uPnhFkb7vTX2diJpUgUUt9MibmyLcfq61xb8LnDmWGhTEx3JDMzqqcJg18evh7TPsYC8a2ysRnHn4RMFYBAaHE",
  "key25": "voc64axWvD8i1U9cAmbnECVSCX7qqG2ZdKgyJAct1b6hsLMpej25Qv4oLeSLPF3qYiB7hbN4kFsasoEL8eXFHhj",
  "key26": "248PZWxQHB6PiUHSF3nZBKvcM56G9Mnud82WT8mtwn3b6YZsoADRh3DhQ1AFUVD5ZGLPccgJYV1MfNSWugFjRizH"
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
