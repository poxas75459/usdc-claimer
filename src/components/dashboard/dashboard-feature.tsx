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
    "5r5LDDjGsJ9nURD8m7YN7qeyfS6dBhQ3ojVV3rDPE166ZnBZ9CDncPRNhR7GEjtEimzafngEzyxuBxSNEhNTLJDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6Mni1ZNRQkH1KCCnz4nNwe8V5H9WtG1WXyvySQYQdYV7aMDLA2epWNYqst9MeWJ1FxQSnXsKVFdmPihh5RF4wo",
  "key1": "2rHYp4yUSedb8ypw1Dt9xUHqxm2B8qe1piprpqHxH7WTW9DJNjCCvGVdZ41rQu3EUPVkkQCm6GfBtswTdSzF8DMu",
  "key2": "43CrhF9WKLRUsbjCGkFgcU334hRxPM6NSKSPTPjSbBSTxJdmRtG1XG428CXboBZaS1F8ej5ENWudLu79T6EcXLya",
  "key3": "3XGkGGGG9UZhNMjbPHvfPu3XdzLXtG5F4K9bFPg6swLYGWPBdJhtAyrNLJ5Hs5MHUV9WntGTxeasfet7E6FPJpLL",
  "key4": "2S1E8tEL91CbXpDEKKHJSxgRVJwssedZbJvqcYDe3bsw2E28yfScnxXo417Sg2uixoDzW4pEcfjMRchKc3CJDpzx",
  "key5": "2Yy7UhZttD2MRVDMnibbDo8m2eqDnqypPatGSmhnkmHUuZrzQkqsHrjrcweKgQb4YCrdvuwzQfU3YLsUDfCuYLfH",
  "key6": "cr63pPPetVhGwGoetFrCo3Aa2kDzbNvjeKwPymFdz1qDRyjdEiSYKpgPoycrRCTga6v67BF4BeiP5672skvy9aF",
  "key7": "4QPqBxENRPkDjqGxbAHv5jMBT91Wqwp9JKJaXq5roGkGuFuxB3sr2oAwW4511wNyaztTF4nzbbDHaVxyPJyzxTN1",
  "key8": "hRnYcr4oKhrypmiRoAH9rBgcQya6AAMrFT39j6C4A1H8mPCZzx3PKLRacs8KSto2LfZj7bMwLYKeM8wmrA56uzM",
  "key9": "2LsonkKVBVg9Ts1fRhUTsaayQ2QksEdtn7S6DCWRxASAEiXaQfwkkyZqGr9zo392DScxg4SYFQ59WYygRqPxArcA",
  "key10": "3wbLs62DdmHoLfpYQ5N1D3w8P1NRfPz18fCd4GD9gWyCw8PKWExUKcUCRFzzhMbPyYcCpqKHdX43YmHWVur4noKr",
  "key11": "4mhSvBQTcksTfhCwo2nsTpX8qPE3gnguDjxK6ACn9aKGuyjZCacBUt6nZiDePZdFdBwj7pxsM9hhTzqAEnv85C9h",
  "key12": "3hBHdJTXN2FisVakCGv842quQU8mYrLWKqY8Ht1psT95Ub7yHRR9U8AoPoo2z7yXNdWPHYXZvAaC3iaw3C7KbF2Q",
  "key13": "BzqRiAL1mTtWJXASWr1fEQ9aSRZJ6fuDw5SWyNeWa4WVLt7fTsSuE6HQzK9AD6WhuyXvpC4zYJu4ZRQJ3SUKja6",
  "key14": "3kErGY1Y8e6CVZ5TZ1KEpaqhTKvPiLZjSZ4rWThzZkjDEcyRrAFihF7PbsNA2SCr5c1MR4cxh9MXsK6QkVeEJSte",
  "key15": "dSiYiS3FV2xVjBRTKs1rMMpRRaVFG3RaotmLctj7FeNLRnhhdyXrtM75sEPLcbKynTJsqHyUbEseRRzGk5rT8YA",
  "key16": "5F49ETZB8AFmDS6KaU39BSuPK5FsnGJWeUjfztPJHpGv7kjBX7ry6e92KbEGgYiUwroib3HzEQdSCZvP1GwryMoJ",
  "key17": "411ghoys5zRdG5jf92KqJrUq1F81UDoVkdCk1V8LTKadqEa1hRM36RtYSR5HYAm4CAMFsX8FRiwFngRb6AXyT34P",
  "key18": "3TB2XqutU4DGx4eyHBCzw2m4nByFZ3q48rGAgzmFtukTESWBoUW9drQo95qXvoUriaNnygasFFh9YsSrjE7UdXsJ",
  "key19": "39ff3H6Q3AuhqYRgrM6RetP5uyPGRMbwXxBomnVMX5C6rraS75t5YcZASiPNfjKTMXgSHKdRRvHYGKBEg4g185jV",
  "key20": "4i3NtmAa4BEYEzSp14BoBAbVxHKMUfHEHxKARvLRTrc8r2FtniLXfbfWCuDedRgaSUWh87VRPP5SNPjFubEmjRbC",
  "key21": "4XWSLtXP6PYTo69dVHvu4tHSDwf6TRNXuABYsXmYwAStW1gdrohEKZRc4h8q4dXMitaXQaxTpJcnee5v3CuShQJD",
  "key22": "4zRdBjA7r7ekSPSpynwp77AtdSntEVFhy84pwqc4FhTHCPDjgy6CmgD75jSnvq2vsDtWj8qQBjDqM2bboof5Potf",
  "key23": "3zXHmHQ2iyKoJXyiPmZh3XreUVN5xpccchCoihgD9NHQkVDmnbiFCxGrpvkUQbLExFSMtf4wZe1mXJwrLmAUm7dx",
  "key24": "3iHaLn3Yf26uHyLtr8sruSgUi2jXSyKyt13ZFeoxcUWrWgeL1JfBRaXZL3HCPFm3496bs2XWa4kATxBw399WbEmw",
  "key25": "2VJbwpnpndNhjuJaHr7YzrdQWa5FgXJrEMkH6mccUtd43FsuLSffQ8ZH32XLm91zpf6kYEpWyL9MNbbwqgfxmzfS",
  "key26": "3eW41Mx1Sqs4d3khMYgqJBd6BfsDHwWcKUC88z5hiGSt5gxFtSNWoQksiHLM4Qa6VL2xtaPHynfvbvyw1xpi8JfB",
  "key27": "4kx2uDnajE5jCYCRnkr58o4MLtQSqokeBo3wmovo6SFUQgFJj8WUwWpo9jALHqaoo4AY3YteKpjzp3sUZKFDGPZ3",
  "key28": "5BcKyRm6Ty291m5wtiSBTmUrnca3P2kf3P8mMQ4pXwv7qFKZhGomTxZKLNKeQd6yTy9LvRNnbBinukx63qe8wpvT",
  "key29": "4cEDr5Jzg6RQKMp8hyc1tPsEsKrweXFFbgzN7dXrBvvcy9gQxYXiBhYKo6HxNP5twhrwASDyx8MCrJz2KBWmjf2f",
  "key30": "4EzHTjvdBek4KKtqgwgvYjx7PqtJ35k53VkJWpovyD2ZMW6ziGXDHe7g1hWE6XbMWfq3kVEmc3d6kiY6Fujedd6",
  "key31": "2EvoNyWoMX1ESfjT19hxPbebttRugZAcwJHo6Tjy1rj1mJLYwNjgUcLrx5zS4jSYwm3QQs2Qfvq9J7bepNGRyrEs",
  "key32": "3kGzARcsWxDCpNFEPyvgqgsJMGgjtPh71NF6aQzj7iBVzbx5dbBRVjv6bVL7MFyB1KmXJK5CDUj2fdkmi8Sgzzoi",
  "key33": "66C9odUZMQo4wekSNnoz8FAn8M7SszkKTCZivCs6dc9wR5qvKqvvrPKWaYi5bqUzvjiKQwmonYViwUpY6V2Lkmmy",
  "key34": "5U9j6dPaNNzHV43kkEFAJjPHxbqj9UBv8PRYoEWt7mUkz22J9Y5DWXkh3s2gdG2t2pDMLX4YQNcxV2XB2nXveKqZ",
  "key35": "5PMTkzZWwZw4U8ghZeKvuyTwvt1gxyn9Yu4a4RDUV1vcn2tseAvZAz33ukW81ipsdcbCdpxhAdQcSCKsfPftVGxG",
  "key36": "5uiw38aN1EqPK7YsAFNyCyJDzft7qPK4JU9Qd5xoEVjcQ9933RY4RT9W84Q1QbCyzU8XAeqSFkjUSBB6MXQjRZEV",
  "key37": "4PHGc7TmzzbS5h46d9hS9QQUvxgg4tUxYGF3SzYGAFjo5c88hNLsaBnP4amrCzNgZeRuUhurByByTd3GhiWg6DhB",
  "key38": "5XKj3U1WMmyya4kH8YPohuLJ1cUnTvd5goND9ySPqgEjtfPGttPp9VsFxAQKMejRqFNFxH63fWjoJEmUVx2GzyzE",
  "key39": "2Uzo8nup5ZgHNozKydKBa6KYqFR9b9jkTgm3JrGZsuctzRXDBQk4YkupxGC7rqpcxwdLyvFiuSjQ7tE8p1uUc5E6"
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
