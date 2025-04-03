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
    "tMd2uYKzTgz6Ph4HbMpxRNKMntizuLrTGvmascrjpMafFTSe7gcRyVdT2CAb2bRapVNbRH4ZKQEbu3HMCwDTXyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuxHZcW459L6myCgZ1oKXEU8uTRtaGBvEhEQrmg97dW7kvTQvvJ5YGFfFBRoAg7JuSr9efETxvCe7VYoi2Jt3FY",
  "key1": "3S7p8pQEQztFJxLMWwt5yHacGdJ9gU2jbgPEzik4fAoY3DpCgLmfc5u4UpRLykj6DDg8tPjCaFVzrjBtXqvcjEmi",
  "key2": "2t6MRm6t85Lt9W7cvmJsDQee77d2ZpqSvvJUdMYgefFbb6yAQiVKRzCMSLdxmsvioRexHxFH8ubXbPmCkbEN7S2z",
  "key3": "288eWqwWDniXsY9Uv7KBtpoh5rzi89Y1UcWkErowKguJbfC7VumT3SPUbDDuGaYQMPcSBLkDPGJLFQ48RzmBztu7",
  "key4": "W86GUDUHU89g7VwJxNYw8oDakeB1AXgyHSPEx8shJQW28XAKUckszJCpr3aGMdea7hnnL9wRvrmcUZ3w1Q6TYif",
  "key5": "32wXN1jrfjyevg6drmGUdbHTgTHgVNE42oYjHjUYGL8Fxs4wo9opTzNj366YrAdnJTzDG92MZSDmC4um7jFkxE4G",
  "key6": "2BC7MawB2BuUFA8B2Jgn2K3845UDai4abMBobJBxjbNP8geNnZLRGKgiZkaaqsJUJ43ooFUzkzU4UpA8kXypEL4s",
  "key7": "4GdhmEdH7x46WP9UXYeH4akPhbHLChCA1BgoDXqjkg6oh1kQQYR8yF9o7a7DZ9Ut6Xj18qEXXwSftZKk5zttVoE4",
  "key8": "2VnNqxDTjsdifD1VbpTZReY2iBWmtxTyRBV1rJrRMUTaToxStit4xeNpidmBk5YChSLVGKhjY6NQ2wsjPEDhDGwj",
  "key9": "4Vgr37dcCS982jZq8thLDnaidhL4xjzoxc4BB9cKPxASMMEcELcK9sSHhLY1vCjcR9gCGuhzeg9n6JxgssYe9FoM",
  "key10": "2CTWdpj4YhaohVq1E61HZfwbioi1QhZ3de5DRh5KHTD7iSS4ukXXPjAfoTAuCd5V8Q5e5zzoEsu3Ru4M7g1AkdZH",
  "key11": "4LzHrhNjauggge7Hh7dgRGDoFiDkN9twzBAd8F7NcE5XzQtWw2mF46nz6BjmkCNMEawEDnGKmpDNyvzT48KRbHNm",
  "key12": "3A5tkHomE2B5AxAvf9GdTAh1YfrzrqRGR88mpqHUybkjE78XxGXH3xJ1GsQwnq4MBPN94LAR9nVb9iwv8tbzbzSR",
  "key13": "3t9EwaMKDT5HnR2G7eueggJ9UKuW85itEV2peSX2CrwT1LHn7ENJkoaxH9ptuNJtMCZqz8YbfwPM6M4c9sTEdwRL",
  "key14": "QsQj2VDSgG7a47xWtbyBEqBDvnF9sbqFUz7zT8545utDGHrtckshck9c5bthpdV254ZTJFu3FtmgUhBHrv4pVHU",
  "key15": "5zDW1KPF6WkGQyMxj3scHqmeervUSMeejbbDnYYVFtFURatSbhjVb5jnVktkGnVVxBrm9pBeGgFdNW1pT9qWADC8",
  "key16": "2hqPFByj8UG5GAvPmz11bM6GZNqqjorJsyJAhYsg6SPoKQPFNcHFdrE6KN2yznWcCgJVnL2As6x1G8zYnjnNLqrg",
  "key17": "3Wm1J4Zg83hw6GmznB7NAc5oBuDdTeChfZaz2GnejiZxXqLWk5SunZK9D3F2eo6bCReVBfmLDN8dLuGsvUohhWVR",
  "key18": "58pkdU1tk65QDkAXtn984vtib6o8sYqtC4DcPmBi6WaegGebhyK9uBhKb98fcv1SbguqPpV9dvprcWR13EcKrx1S",
  "key19": "3kwvzFS8QoiM9EXr5pMd5JdRUNZrgzjY8mX2PPdn1EPJnaSsBbe5bYaciJqKZMYuqRbVmDYqVXw3ppXbo5q55wHD",
  "key20": "2YgCTarMaqDU6XWyC1sjwXjjMBNS195rWNPFjUqDPQBbUHPYg1tMBokzf5PqzLDaHrKAVUMF8c9j1h6FxmqpsBr7",
  "key21": "4ioHSS29S4djoQc4G27XKHs7t3fpP1W7uXCm8M8RZ1rQPfz8tcsTLyKH3dRbr2En1cHtgBuZa5estHzL4Cyj8W6y",
  "key22": "3BZ9kN6kaehSJBH1fR2VZ2PLXaxnw1ZvbatWupRwBYWDLTDuA8VY4H9Lpz3HXM1j81vwMdAGaA3AB6A6u2jtnuFh",
  "key23": "MwritoGMhBXYMvsN2kGmgxGSU6yz4RZ9AMr79sWToMvvH3YJXVJxNm9vBz7vkNgoDdy5kMztrHTLawva7mcQTfh",
  "key24": "5jJVconQFbQ47aWCNVo1DDkGPa5YpY9t2om17mjVzLfFUVZdvNYX2S4GYRSQJie8k2wNfwvmHsqHqiRgeH7wSrfk",
  "key25": "4TRJzfW1n3wYRdwDQUo4eyYZrRBMN73otvptjGtkaKCASThfn86NKJVierVzJB39EB5buKGS2xebhsnehAWTuF3U",
  "key26": "4vGr3Vy5mGQGmKwW35Q6hF7RxYBgij4FaPQxAtYaf2AVHpE7Hw2ZQV6qtDxciy6mD7dGGNq7yz6kSDtrzmbUe7Bx",
  "key27": "2H3mEeV5gZqZyHHqGnE7FwXfUjUyeF5bYWRwPt3RoaB7eqY7dXdprXbDyzvNKaLrVrEFNfCkoqp5tJkNCocrPjSm",
  "key28": "3XbTESrFdfrWjyQZTNFRxWUiKtnPiTcZy22YFuJtKwBFVtSWtTfnNVGoa2kZ4WpNHxbLxHShz6wr4KVJFABuDGDZ",
  "key29": "56DJKtYc7vXX6GA2fwP4gjfNyBjiwzuvGjtXminoMsGzSaNkkjBK9jjj13BkySHeY7GRJVQGUM3f82tAvik3ei4Y",
  "key30": "3dB8YLMHahFjSY9C9y9YDrmB4AJEmmLu3UsRRi5jcsUbvFviGXxHXfRongKE9qAaySdq5xK9mqLTaxbqNQfeYe4N",
  "key31": "4bbSGei1RcHp3aXr8VTbA38akBs5N8b6tTDyrgpbrXLxUBat5ngVgoqH5r2x1HoS2Wn3Xzdwjd4VJwU3LmuPxZPb",
  "key32": "5GZeynpVHfcc6dXRnoxpFNLCwH6DmZCwofdi7fww4wpUERtXc65Qhf64WmYcenXhLnd78EEZHiDAdFmtWLRJab39",
  "key33": "26efGxi3gCwm1uhA3X9rfHfxFciqyFz6bAE7ZFKx9bxv3yKvWz8PdCWvpopaDPxVef6yC5gpPGqr8Qkxcr939aFC",
  "key34": "4tXGvF8hrhEwYFv8o7fD4YTKbLU2kWmKxEQMXqoDNgBRy3MgkPA3Q2zZQM6K3mNCL5JYQmby6tNbMhcgEgA6BeX5",
  "key35": "59UgVJ43MqEBkEuAABDzuY8Rr7DwR2GwPagEYr61URVi9rg7Mr6MBMGP7xZ8bTJDRRc56TdZYiimw51AaDKPcZT3",
  "key36": "HVLoJmB4Y8LVW7sXG9VscX9y1FLk6KJDYTUbtckC2cjpTnbHe6TGAreHzZ7zbX2ayiZ7t1ZVdaz2uedrCTJMYGv",
  "key37": "TBvuWQZHxxkrzHk1F1NizHfQCxDVbyzw7tTjsBAC1Ck7thvtETMesW4V5XQWu6PBKFvU86LnnikiS2mcM8cLzU6",
  "key38": "3ZyXjwVNBYmFFCVC7FkF1xnoMp6hUW43fK9GMxoLs1HLX3DLsfgCv2Aeb9SLjZJcDN2zEEVD5Hrc7oJVCC15sfNB",
  "key39": "3nCe9w1MsM5PNxFEkpnyrF78651phTT6H3eqhRsnoMWBDLRSjdMPfUzJFQEgB7hAApF9hoqQ9vkE63Kov871ZfAe"
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
