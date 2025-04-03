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
    "4jxZWfsuR1jsWLEguFpzSBEBN3BnUXXCDwYkZqUiTUjEh6zBjQteeWUsr8teC6Zvm91kJzamLS5VTUoUpPBYhve2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKtRmjuUGp2zmB6R9U5f3X8XeSFfND79QWFqBB73mD6kUTPm939BmrqinhYrDBoLJqvjnN43U9TPMKPfHdy4qtH",
  "key1": "4pZoVe6Z58gUt1uHpytCvMpWYNf3nDmTgVbb9htEEALLx7Ge3nKvy5ajgVhEjkwF49rrqKSSkBAskNR8e2o9i1FR",
  "key2": "2RVdrvjNPaL7y8EumKuAAKmjMXhvUCupC4xS3fuTD9THat3TjTTpyaw8ZZYNb3XGh99fMhYYLBN6YEZngkDnuL8b",
  "key3": "9mZZuLDX2QLVERR7mHUoU4fMpDUxtUB6DGnqEG15C72k4TYKhGUdcrZBGvS1gcbzC8NdkoZoKVi8bapaPypU5no",
  "key4": "tpSqwkeFdHHKyZtLxWLCqNiVmLvxTAfQXg2RHX3TNUsRRmZwkH18QXrteLYmkkPpGse2tgVH2L3UjkiaZSiSohT",
  "key5": "2yGLu7mgRSgWod9bzp7hec7hGEMQQ23dDpG5EU7VHeTsAedbLnFay1RNYXmiejGmtor82YRD9Mi6BizhmWepMJwp",
  "key6": "5pZXNjzHiQkZ8doYSNiDvSJMbLNrCcK9be6kWw6S4TSFfoXQwNBz7PbaLvHBCTFqxS6eeLarUynHDqtpQCupEW63",
  "key7": "S9XhnAguhsSfLhgdsgrmHHNHU3qHpzU7mF5NDcJitkin4UwFu79ruNXMZr8y3zddKWxw9QpHeZLn7UBwDuMMkPQ",
  "key8": "yXnSJ1JC57AwPRqmNof7YQtqGJ6cw8tERsTDB3wKExN2LPk75tf4DajmNZWdNnnqAT7yZR665P1wtuMqLB4c8Mg",
  "key9": "5Rp7FFLEsu5p7FnGJYWMQET1bev8c783MHNStP6Fd6TV7176weRoLgmhDVWM577kSQ2r6WNcvRNcz2CVSMxdUndj",
  "key10": "2Ljb8oTkFo9iMNYLy4eYjgLjnT5BtYtFCUUQhR838RxBU4rxYZbGaqz2W6KHhTH28RpiPNVsn4cLhCcEHYvtoRt2",
  "key11": "T1Wva1Kqq4MV3TWC92yJ1SdNGoP6RowMBmwE6e3MxUrAVLEpDpfCq3uHgkuddjXoeGTCPgughDtwADo5p1Cu2et",
  "key12": "59oh1fEZ6Dyo2V2us5df9qkV7xEXaVz8yppZWPZbbtqAv4BnvRBw8CC7LQV6FvBPxqqiHdwhr1im1Kf8uNSPnyPJ",
  "key13": "4xR6BGatmR9eKEMqYMmjph1pcbWM9UZRxQRuvoADGBtrvYL9NJWDo4HdUzosRvdwXAdKQZKyPbGWaAcMtmW1eZeR",
  "key14": "5q7RQ56wFKVPDPGBgaVXyXPuxdLCKH2Airqb8Jt7ztVtGSMdZU6bWBuy2p6dSpvYgpqBNPGkaei3RnX8ZuA4zLEo",
  "key15": "4x7hZFmdF4wLUMeyPa7wRFjpctEBTXiYjaFvHa4XmNEnvvNsrxKH5zR13J8CjPdYdTBfuig7NKps1238nHbzTGPy",
  "key16": "5GX4n2y51eLur1yBTBK8dNeYWLdqr9fAX6StXahyKGyRJ5LHpqJJ8BBPKLHoZVsDLs23ryiZihneCa4rXsD3C9AD",
  "key17": "5m9rzfDdLFAq8njQNq5AcqarJLDGHzcs3sFZY9x1GrVwGSJZSnLh19HmbsVMFS2tLqfnGGjNQda9xBAMdQw3Fb4g",
  "key18": "5m8bf32KkHZtfuMe6AexNrcTLAXkPn7YskuKpu5GLpTAHoK7KYtyhk24ToeGUJUu5duZSDd3888m6P9qwPKYbZdX",
  "key19": "2Dn36UeHKKufMvgY1Z2hJQ9MWHpRoQyCgmYbhghXqJ8tmJYgd5tJeFVAeyRKbqLXW5i8TUam27rYZWNaSqHbDYPd",
  "key20": "59ud98cMmvfED4ZRTU16cpWTEpXxJeUwHMeD5mq45ZqPjxPbtGNR3j86jCbeDkV3fHbAMNvGQi4VMZWKYpASq68o",
  "key21": "2FVYp1o3cjL5SoGkHLM2BXjF7XVzdYyifE7YGjvdB6RkBK5uyTRne9D6eCLakd1RQbBW32SbkTCLrQ9Mb2hmUChn",
  "key22": "63wZdihDyVbvPG8BgtnQF5FZE9ULJVphepWrCiXNY1yTwFmrKSAsSSgdXdX4TNw6RuVSADSiUKBXtnMX6iWM337T",
  "key23": "36JHQjAQKP2jNamvHfctf3CLKsTcFaBxZ63kSeZNxkbDZi5nTVwkHUFkVx4UfsghRiJ2u6VTCDzXX6WxEUiCfYyu",
  "key24": "4FNatp1G3EkgwtQEyguqu4Z1tGPuh54DmzuSYW7VfmCx6JC4TVtsexfbWd1me1SiuwsB489zJ6dU95RJzaYfjNMd",
  "key25": "3vaGcQbou14WPxBLaTS7yGgX9njDKnUMccLsuAizkyngoyRBiik5UmxvGVTvRxAthwoc6AehZApyn4Bpwj8jAHgE"
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
