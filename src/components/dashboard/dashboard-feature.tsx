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
    "5cB2LPqGLKpwwb7ZQhsvX21QRxr7G7hgtrP5hp7qFDQaKMnyQHEpNhXSCs7dKorMHDScsv34PyYZtwkBJaPxP9N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477xSaX9HoHmbieCUYdC3x2zPF5RSygHKgDM9WRTxaZNmHVq43TDsKpXQh4J8HZ3eFDJPEzSS2tbnFigGPMFUs6V",
  "key1": "3m4shLmE7dj4GTh5a8srmAHBJA7av5ZwLt8uQXZ9HVjKjJ1MmBsS9VnoyFDXs91922X7WFf3bDs3zrseMf7sd2sC",
  "key2": "2f7rxzF7ri1RJ9XR3WAKEneZp6jvvYErQoQWBkNR64y5xKoPC3t2nKr32z6oyLNHsasrBVTHnvfSBuqcBVYJczoT",
  "key3": "5przBEdeoZDsbihoWd1eSAngFYytwQ7G9iJQWBWttdHnoTKT6SAVxUSZirA1R8m87GAowtpcd5WF971vXumKFpRe",
  "key4": "2crC3mHBaG55xNZkXw1i8DfuCzc2BL7NXwi9E1wxcTNBq6RvTaVPkvezUH5WjRSK6wsRq34dMadCTrrAGob2XJ1",
  "key5": "2vRS3DZ5rwMVr2oLUCLpTsvwwDjFQjTtcBkeNxUGnGdmxb8RLJoYQsokoxjPXX1MmBzJTZiL9uEv49Fw6HDdcp8b",
  "key6": "2Gr65WiLX4M2poFn8mqWXUi2tLZAHRsiTW6BY9jFZe8eif5uBK8pUYJ3TSpoK2BBuHygxBntrb9bfs2dy8CaH6FW",
  "key7": "5indSFo3CrH8jnmDDgAxpNn411AGHdqMggAJWpniaoDvVmsiMud1xmRXXkqWGD3J8fabyGeDVtTCJV4EjiJkbuTC",
  "key8": "2gmuovEYrw2BpwaJeD32eQqQ8TJ8MovDHQrw8x63Sj6xETPYJieLMvqgaT5WLaK7UTbotBGPT5gG7fAtR8A1v5M5",
  "key9": "5Wta2h78ZbaXXi4BGW9yWTwuFEhwcyE28WSwwYcMC7idzuRDY2PM6k9YwRHGGLzwULBifpp15GaqcBhdedRpNC6x",
  "key10": "42bTLwqTcBtGfEakokG6L98M2uoBmZ2vrdDU66bRarpX9yFP218DpcNmkDb2FfpYqoWmy9hr1FtogXRcjwWRL95W",
  "key11": "62ssGDFun3B6SLxGjrSbaT2L5sQddQREpVFC9ymh7doQmifxZKMCxiTvvZ72KWQLKMVEE72cRyXRfdQUBRN99hRP",
  "key12": "4iu5v4PABdxES2tV1u9RuVLMdrz4oAcJZ1q2LWud78sai6o7jLpcVggQb7BVycq9GL6fFtAoFAG9KAx3YqSecLwd",
  "key13": "638JHsckErhVsgDqLePobJeRrnowcY6YSicrSVaf3LmKMEbE9LBhfkdoTA9PLZ3e1K4N68PMDVQdhKQzupCCKCH",
  "key14": "3DtUgs7fPYkKF6aCpbydpp8q48HaCURrHt9PaGnd2K2hDdeeL8QxyBQqbLsSaxQbKToZPeTXCCmSdJDnGVry3sYv",
  "key15": "TznLDpkfXhhYgJKu2rMVUCKogm1ZUdXSE99N24eEzawDTTJfBDNE6Vz63PwBtfLLhraiWdNy86JZXmVALAncif2",
  "key16": "51Ucpi1rcDHNybnTnaaga19n2HfVYaxvMbkVg3LqatDw1ZJmLu81KtWu2avkFH36fNShcKh4kmQtT7rDogmAqgn",
  "key17": "54h3YQLA4Fik7uGXWuaxi3BEdPftvWniNgzF3oGDBcaVMmzTbc4e6Kwm3ZQYKQ4RKBp3HFGe1mNTWJW4mqs7XKKr",
  "key18": "R8Jj8ajTE8RXxBU31VA7om7hy4iMuE8356cr9m1Zm8vW5JM8BNSBRP7wg3mEwq41DzQHsmys4gyqpTjSTh6GyWn",
  "key19": "2zWJT4WC1fKK9axuGDgT6Pgoz6jhKYTJ1eMMPT7nHYU6Yf8zT2vKXzrYRecSuUJTefs2whTMxyG9SzPX6GMN7Eh9",
  "key20": "4TvBqSqKUNAiEPiaRnT6JTEtKftHv8Nt2kJ7TgHCja3cBuPmfdnRYE2rDMNFT7vrUqiSuzc73SpGayFGrouF24ob",
  "key21": "5AW7suGcfeqnmKn34fDgyFCxj1RcXPsagiBMFQupnjy1PcDdZuNWmQjz6Nu6EorRAAREAHUyMFD9Yzn6vfUEXo8f",
  "key22": "5H6nyRQpRjto4wBkJd8GZVAb1RjNDBCtdnAXevaJZG3ZAquCdYSUTkuh6Uq1Tq61VvykJo92Hm39fy9HL28ByP4i",
  "key23": "2CAZcDkj9aefb5Y7DAHv2ZJcgoFf3znZyLRkshSteSJHrZuDJFBg1hmwZBagoL83cfQEpk26rnoopq8tJ9NXT6GQ",
  "key24": "48sVWDgv3CxhDmwfASwga3dsHx1KcfP4A6GArcDMcEQGnSa9AtsQpE2AtSxHXDKRQ38Ke6Nn5XpVQavhN7kY9TkJ"
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
