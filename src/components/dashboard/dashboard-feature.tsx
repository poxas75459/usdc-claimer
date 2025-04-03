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
    "3F6vHDLfqKupHtwnJupBWNTChXPZFvTKfPZTQvhQiDnF2jS2CUaAkQNV9Wn5EK5J4w2kKmNzbmgBurddY93iK6ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QzgQgvw1W2Kcwoe3sKkFqKoHC3U5ppkAWv5rcAgwj2b87TvXBFeHKKGzipeYxrfs8w648gJrWm69VCVD5S6RMAo",
  "key1": "3pHzE8T2nSyXsiuSQwf4msNQBuJFZuPPuasfkTSqUwdjjQPPQraSyWuw8kEHVsUtUu4cZAeFFN7rZUqNztwkbgEP",
  "key2": "7kM6gAgWGxb3EkpiMnq3cDbSMAg58equni4QNZoCqCWZ56LtWWR7kVzorTdEEgW7H53ZsVMPX3E2859AzhbqbVV",
  "key3": "3rptirjqjhwPbW6dVXQT1fu93nQrMVoydhTxhREMABNbFgyv2rcav2LJMb9zJesSnRTMU1E4Sni9bwKEeuEyEKQH",
  "key4": "4MVRzLqMZxQRpd6fBWB8adNhzmH8U6Rb51m2rz65w9nYVZMQyRwtwy8v4JzfiFiRfqiVDXgebq992hC7BCKkdYFS",
  "key5": "Ez3cMYPHsKQfCa4Y4f4N5zqYkeii3oYs3uuMyXFMvWMmEiA2efRFsDoxVZm33Gx6NmsC5fSn8xahiGEkrFM5ghR",
  "key6": "5brZXXKRgfV4fzSmtdVRZSjvsJaDvaf8tUkSF83kij5mV4vVTJmh9AnWxfwJ9p4oMM9p6gRWr4MPvQAadHZEcm3p",
  "key7": "2bAAQRmWRrL9oCB41F4hvBCwqLLhEkx9RsL99UwesH1m728bk2BGzuAkvLJ4DPHJ9iyXFkej4opZseXGZQVR1ZWf",
  "key8": "kT2xiS7ZrGVsaU9s3Z26fZQfzPxFDJTq3eh1mHCYXxc38BgDdWEc8A4nDKwYNFhmvShtW7qqEiN15gLzpzAJQbq",
  "key9": "ZQCHwTtfHp1wCMdLTKCuraXB4qSnDxHyH9R9xHua8miJQu4wAiUMQCJNb59eKZyWJ9qY2UeXnYbhWBL5Kuf4Yvj",
  "key10": "2m5bEnwNtPWvDx5L57XVbyCr2afwKSJZTcJ6uCFkVrfkENZLFeYjDBUQnnWxqGTGLuh4TzgnPe7m4rMfocbX3VX9",
  "key11": "39HNvzgbX4Vz4T1R1dU9iVZxEp3KBAKwagwVGtWoqR2Me6cSiS9UM3BN9sSKFqaoRmHnJiFmYsjNZjuH8gS37aJp",
  "key12": "2tE7aFmHWqRdRWBHA1eyyg2XwPMX5Jq56KL63zuHxoVPvvi35Qt8E3xDG42yF2insUnqWQacKhuxk9SMRzD73kbU",
  "key13": "3ZGPDC2gakFmMWFaPZySukwUwbNZhwGu3CacnJG6rPaCqLWyvyXkbmjqcfqVywUoAexS5odanqg82FfiJ7F3TwH1",
  "key14": "5onNQePSWWrR2sXtgnHnmS66ebqpr8zDvp4cALncYR8V5DQuMnnYHbUnER6Fh5Hu2zt8WM67aUuvNAC4bnXRohGd",
  "key15": "3MJGmhLjFZQADzkkmeWEziVGPb5hg6gu664od4NM6NXThbzJfaqUx6TeELXeamufy8UYXTNjZ4YV7Lot634kxcm5",
  "key16": "278TDRfRXQCU9q9DKYwSaeyEUFWiFgYNpmtrTYrPctAGeWr3p52Gk1BCdGcCPs9ns8GYGuHsnMQjPR2LBxkgTFkF",
  "key17": "4sskJEukyis1eJkx8dTWJMAs295sA5UWJzUPUXw5prN5pdtVd4xxmK4x8sThxve37ckHDRXzAu3QzZKCp7knEvZu",
  "key18": "4BA26AdZgC57ZgnPMPHc7Ja1Hvd5L33yToqtARGDeqGDeZR815dvkZ2DTypDWvpccd7WWgFFgemwJgzcdND1f48u",
  "key19": "2JddUGyBSsVFCc9VZPYGciVdp8PvaVxLsipHxivQ9GjR8CJ6eqFu5547PmfE2ik2LsB8CKy7WCovXkXPjvYjteo1",
  "key20": "52Ck2xC78nLsSunp8VDjQqGVo3hd7ZgN7pfuBdzRJMoik1NGTcPn6ncZ6D5wPs6SM9nSWrZtvKDxRG4nNfdY1iEH",
  "key21": "2htiGSzJGqMAkeviDk2rP8pjPCi5R3PdD87TVc5TJuuttjiVmRioDLHmyx8sB48tRAvoAYwAKUWPV8GtDh4wVkcK",
  "key22": "44f5AGJPawKeqsyiv68AYcJ5htuTdJsi1PYviznLJuERFVeyWywPULxa3tcRq4xbRA7ZT9jhCzfC7WcvoK3oBu8J",
  "key23": "3XhCHRHKczs1Fs7D1sZCr5HgJv7cZALpsEgjHYz2tWeNdMdiwaYitNW2wZme6h5wsHJuGamM2KjDokrsqkfkBfWq",
  "key24": "dwzx5UvpuZ3W43mZNYFMtzZEA65rjtqb2RdgEgq3ttqNQbrwmoQAdyNxDJUCF3Q5tVrdc2fXPLFBnrFBPGQLSC4",
  "key25": "299FRMdwR8WvFyYLDFzkQhRGYaiBNHchuP1m7qUNB9De4FrhbEcEBcwSWTohpX5wJ8Mv3B7d44y4A9omXbKkpRFf",
  "key26": "5e8ZsV6KnhcRCkR46Wd53gq8jEqih8afymYHne1b1W4AK8zedZuYZ4HkTUF4pZqjW1mDKNTJ313yioeznBzHiBB9",
  "key27": "2RoX3pG7s68YxkLM7ehX3ERoFctCx95JhVDtGe84hX7PqyBijYZU9VReCm63vgWRC774g4qUwtrrHvSSyav3HAxc",
  "key28": "2rNfyohENB8GaU4NVPjY7uCHF49bTV2FKdCRsjGaw75uiTozC9S8itKdWEgdNNQcnodgMKXXTqh6zkraZbr3Tvd7",
  "key29": "3g4nFtB2ZmGC4Sqrq3sTEjkKdaAkqZgX1EGQZRrnnbe3Ke6TXU25CpwfBPdM29uUGjsxivqqK1pmirtgGtyptUFi",
  "key30": "AQQwnS3EQEiShg99w73Fwj5vRQoYEyYRrT6EPSRW3Rtmu6h3k88c79xpFTk3GbAg9qidADjG5T98Nd7BwUscziZ",
  "key31": "2Zw5v4Ys9CYeWxFTS3bYNjoZQ84dEWLmbdM1A5saYfTNKcNsqw6YkTHuMxBPvXhnXXV5jz9DHEZV3fX9CZnvc2zo",
  "key32": "5Y4WTJSBPEyJoEUQJm9E4dUrS14YintMA36Szti3denhD8irkaqJU8LQ3Wmob1KmeChTnqWPavYC4XWF1iHQwHB6",
  "key33": "2rsRmuhot6dN77RxtNPEdximCXgK7Q8BNhMGgvKYK2GR2UkryAvPckZh13gXMzSCBTFrDHhehGyud3gbvBiimdZL",
  "key34": "dmgMAiyetkwjN9vihJXYWShFHvVBqLjUPxJmgtBJcCpQ9cA2a5DDsCVQ1PnAHyn4oN4vfkdPgD36kUeQLm4jYGZ",
  "key35": "3z8qCWt35LCr9vzcoYaFoAPMqjqJ3KVaoL8C6egEr5dFhjqkR9YQR3jdf677kT9A9TckRf742gSQDwhtnLJGSX5u",
  "key36": "2mNsbSo7o1gPHVHRMHiCLA64iQGSbXs9Akf8VVXK3Fx6NCXWBK28MUnzSW9ViTe8hxdzyi8qMp3fZvYaENExQ8yv",
  "key37": "2T5hMu41cWRse9jpbTKeRpMubD4nSTa5rXB3arsWiqSeer99SydZVNob1AeytDo2AwxmYXcwAbgTfcZUWjPZiNSM",
  "key38": "2xbSqqVbXsGJFqbyaapGCsbnAQ9yTtRaBcKHBHxWKQozK9jCbN5LjrdYc2F2yDVeThh7EWeQQHwfdmhhtJYPgUp4"
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
