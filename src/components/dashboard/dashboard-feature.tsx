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
    "4dankQtg1a2WcqkN37W97uKXaEEEkG4RbgqpoyHtcMAZ8mdmTS6cHJ3pqmTqgN9qFow4YTa1VjiaLNytJhcGiTc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KnEJ4f8V95hj959oTDkRCAHZWRM2rhi2CYmHvA5BXggJbw96jaKjku99JQ4nXqusLMBUb29WU5XAsRhiwgTHAz",
  "key1": "3UcJRDi6EafP3UwBrbUm2v3HNWZpBTNq21NNL7gxgkeNmhSCThbZvgtgFSqyituzB1pgdYJZ3R6kQLvxhGM8H1JT",
  "key2": "3AB5RHG7Z7jszRPy6vcDnymhzpqBPnrECknm79prdNBbCMxSdNbE1isWRBaMeGGumvpFWMuJEgNJCodcexkyJSXy",
  "key3": "oRxkhYa4QZju7iPo3f9qFWbk47uo4vvJxcVDgEwCj5Mvh6M7jRsiTELPFB1gmxbdZcLzFnPvd6MTEqp4T9fjZD6",
  "key4": "2DvxCm3qbK4DxKC85a98dsRZ345THhxFtnggq9AbaWExrKXmj1WTL7EiekaqcAiMbTirxHmgQbezxezphz3WMVmB",
  "key5": "5gUgFVwUkf1xcwaE6ocbRdrwBe6RYovBMGMi9KjvZvmHEHf7aVwDj7Jp5W91ryBQkQbooAoY9Aaub1gnn6PW4ATA",
  "key6": "5zmNrEtoxzXdL265ohVAmrDBS4XYy22VEkNzRL9xXbz38ndbkjexuCkvxKZtb9H6robbD3ndB3BKfzeWBHX9WnJE",
  "key7": "MfShfDfJYo4SKxTFN7R8Q8bac5S3pxPFpaSP29Aq8J6t262PRzwzvDXvxU5mUutk6yrFJg2ZpDpDb7tqjdYjJHk",
  "key8": "DmL5nGG5SdCspsua5FYZAbjkrjamV4kJdMLebf5EtXYhLs8XhgCcJVxwndfjDk1syDxTxKVpf5Umx5UqSAJGVLL",
  "key9": "2BVfsckLgpATgTrsuM8Eg9rVVt87DE4St7gXESbdxwrRqB63qmsKuaJm2C4Azctqk3sQoe5Xp1PrBCpREqVFWTvK",
  "key10": "3Kb2zkhGn8xxRCyZrSVQ5V867mfr8Gk6BJkmHbi72zrPPPnuSDTqD5WwdKE6QYmhXMywSiVRtqhz3v8jeuVjffFx",
  "key11": "37XWSgrmrBZEh1iCBmuZo2iXAYjtrK5yWPEG6NRE1ML58DgnQiEu5jzypVjRLthBqgNnNBaTtvfdMqXsqCJ2uNas",
  "key12": "4iqevrxCKJAfsSF2PZdPxaiGozGyirdgbyRA4a4oe7YGABRSe9jYEWM8r9E5PTLp5DZQTRHwKSgew2fccuRcBooL",
  "key13": "fRCHymMEL7RbkZYc4VFpqNSNHJ1zgC4E2gSRn2wk6ipigXBjtfGzcFafNCoYYtNjd4DD4uuWU267BGeDtQ5E7kD",
  "key14": "4xJXrkQhrsuKr7Uzxv87qnueCUGP9ACRMgKFYVVSKz31fnK3kunZBANA5FsWAYxHRGC9tpN1H99BLFeonQhRgqhV",
  "key15": "3FshpDNaa8ikQYVVB1eDeH6s6tAhvMbHZ2co8EHPmDCHPWcL3o7c55JeeCyYsBjDtS8DfdQgdRtj7QfNdT9xXDB",
  "key16": "cmSx8yhtyvSPDW74nJgr4STJaH9iop9xokaTeBmxkb5Z1T6C45TPEnGN68GoBAUwjN23q3t6num6hjUvNBYjZwD",
  "key17": "4m6rysc8bU8WFict6EyEsb343DBvoxwem1m27KcwwSGP7JE4ViT2QehV49diigZe4Se5n3zj7PHCZ9ePc5DXd4ea",
  "key18": "5L2DjxTG89EnwWHr26Y9TjhTcLVwUPPKHp6H6FLVQUrMPE7xf1xsc9ViVvZUY1iNXtzpTPN3TQjQtG3csua2x36z",
  "key19": "3fEE3K4C4cgYvohNZJ3MGFuRq42v2DEHV8ryyRQHthni5keNrtnQ6bKFvwpJ2VK6rrKjjWSQzPKr4iyKDFxLb169",
  "key20": "1himsYAjTTpQJKEcNzdqcWVfAGb8jX2q2L4b3epA2jKvsL2c2J5MqeCpehf5vJ3QLREyicTVxr63X2FUacoP3Su",
  "key21": "2f1GFA8PDRVxHVewUK4FBWJiY9XnxTDKsBU8nepLmPe78Mnh51Z2bgzoPZbsrPUpKEou9kroUfoYYgJFoT8FCHyF",
  "key22": "3dEiqHHSDsdk3HGL8nGkDVsXnDLZofA79YiTcCv3ioaa6xYqyt8fajGYX8XMFfYXhaYYnnrnoM6mk7KPhSinastP",
  "key23": "32EiTdwoCE6MJ5imFyCWQVdpFiELk5e9GWosSqiqMnwJqqw6ec1vvizon5oQMxj9M4UUDdLUQtbDxvNG2frYebNu",
  "key24": "4vY3rEpfSTc7BGga1hyUP6Z15iwqvAgCoWMFM8kKFAt6ov7QqFdyo4PAfXUrQM4Hu4E32y4vcgcS8hQTVbFBY2PN",
  "key25": "2LU7jGh1o45DDkR7YhTy7QT3mTsvapmBePkuQAoBpRpSLUvJ3BWKxwNAJSkbuDZjjJxYTTR7DFZQXx8sd5qz6LbX",
  "key26": "3ivaWsdj4Qeae8H1xpt5YkUm1tdHG1AtyYMenVes7WjJube15bYtSdKf9kBthDKW1bcY5QKcKCjLGn3ShGzjf4qh",
  "key27": "3pWyTQCB1Z6Rc69AaVTNj2jT5NBUJZP9eoAH6d5u5PHdaF7JDmVGabnDYsmHd3khzBDyVe1Wk2CWYP5Ajiw4ShhA",
  "key28": "3kE8HcvTWewSqceyBmWt89n8AERMczUt4wPjktZ2SpSJUqhvEFLEnW2taw9gAPmtZ4YZG2XBbmZ8Zu6UhFB9sVeE",
  "key29": "5YbnKB2oghrTfWkTJPyfuLEZh9Ssuj9twCXLwycm5UhBFw5xjf2wgDjW8Sus4JyfgM7vSNdqxV9XEURz6qfjzUVt",
  "key30": "a4wFXeMBcLD5WVEfZE1kFkvDDyzUFJR4GgJRxT6aFCRBZ9Wcxk3ryWGbX66jYv2QhJFqS8EtBsySmsjYfsfFSBq",
  "key31": "4N932woBhedX1oiHoN5GJXH9nddoB6jiRUbKr8UvX5kpkKJYkFYrXYfBpJyU7so6dzk1jS2w83ZJ7atLScLCvNRc",
  "key32": "24gZXC45hJo6vmzXQf41XwdQbwgwFxZ7p7yjrz1TJZY6BFE56J2oSTcXCaE2fEhr8hTDLygGQQesWC4K28cJ7EQR",
  "key33": "26fmxV5SnNczSDFZ6amrHgtKYhky5T67BfBRJUrrDWQ3b96FytEK899zDXMn7AvMNdxVtXXJQiu38sXYL78VhFiE",
  "key34": "2Pewdhis84U9JFrDmjsas7Fnx4XvdBDsdDCKVQRVLdWkfZFJbXut7vGQA9VyUrJ5BDGMB8J6rmvxXTUbMz5v3g8s",
  "key35": "4Xuk2f6KhGrt5URbFyvwzxWhAF7Rn55UveMSC3ZwZiwr19yEimVX5KFZ95WMPzbncJ2ZwftXbiUhybmmzVNbQhb7",
  "key36": "toori3616rRbfz72kYVCUmZC2nd3gbvMKA6WEu2gFNDbdaBRLTKjF9vDcRuaH2UrxWgiRBKZ9Pm947ESVvQgxZY",
  "key37": "4eELEpx8kYV5PuZFycK9QAo9cCAEh1JmiPW2Q1N1qLzyLFZ29NGpncrBnzbErjNZS2ovWkmXeZC979ohn3wrsYaG"
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
