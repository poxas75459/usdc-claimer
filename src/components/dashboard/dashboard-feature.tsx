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
    "4383VxztVCsXWkhWF5VCvowbgksKW8ADGm7SDwJV23JhsaZQyJPVF7eJRxSKKkHGGZF4Z2fe1vzEWX3qD7DsNauc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5LTggTiTtMbok3MqQF61vhYnTWysRQUUfDdqGaaWjyGoRgTyqrEPxb9oQZuLn1n6PKpb4Coh4yNae8xxeXQfDa",
  "key1": "4EpNWybR1ZFNC3YFBfjjPLizrMJ7KtgQKfSuGU51W2NfCHfVUrXqJcfKdup9hytjeUtNBKBu8CPgQ21EZd9s1Kux",
  "key2": "3MEjKtxmCbHQRMUPLAsVbPwBfvW1MuHPnwHgzCA39wupWLPbVCtdjHf69fNyuPkFLvvESmUP1ZBAgZtBaN6xHSVp",
  "key3": "5RdYz8pU7MG6z9hhGEhBmgLvS2iL8CfN281nsv9xWiCFWdjBKSk7AaFY16mwaZHEAjbHPBQeUJzNnXM4Eqi4sb34",
  "key4": "2ptjdtyohf71Q2hyjRkxHyJTcam84k8iorGwwWyDbYJwsuGgWzfnybEUtrQAJgxMrZMndcQHNmrzH4R1xe1eMdqZ",
  "key5": "3guEHCfDY7enrrDqB9ZgVLVNcGBbEt37XApuZFDCVSWwYSd7Lb2hg9nd7mVZLLDDQYMNcLJKjhp8mL6QDpzaw7Sh",
  "key6": "5fdecGDeBS8QUxh2is3LuzF1YmfZKtoXViQzCSuJGKttpoZve1kP2Q4SBpA7zAVgt1MJf8G9p9SuEt83QR75qjV",
  "key7": "yRismtUNwbhTkRuHfyFgWJ4HZ2nWbuy6ucYrjqNtjMnGxPWZdoQLaDEs6tRqfYEnpVMsUKmgoiR2ZxDhn4nSd4z",
  "key8": "dBbd9oxvxjnKsguLkpNn4guRjbPpbG7TcTj8W4dSc6RdVNAqgKNStZVy5pgTzXKS6GspE7QRfiJH7pz18EH2JG6",
  "key9": "4cWrXXJEyzCRBBTPMLCkei3ScF9sUyBK5mc74Q7Rwzm9i6xFToyMULqKYFvGxNggZKgXxBGbYkGWXDXBwBGJxW3Z",
  "key10": "3V4TBGxcBbYpBsicfzR2WN11FNMmLTPPXVxP4ECbfaSwWmbu9e4rEoP9xa33GMsEQjht3jjsXGKCDAS5XzZi4iTu",
  "key11": "2MTzYaPDrosiSQJqqyh4pAThGG1AEUzduYH3pS7cTA53FzUF2so48KQ3jibWHRoBgoSKozPFTGuDGV6ifdCnfkdJ",
  "key12": "3kebpmZAPrVuJu9xK6GPZw3u1MSipt9dk7t3pT5TMaBGzQcdzDCQnrjtsRyou6by7nGqJzxfZCh6UXeb6DRntJvS",
  "key13": "44o5AoKCdD8ntfNPQprYsSzGaKfqS4Rk9yevNVPrUAeWaVTwMSHNimk9rRhPbu2yVxNJcQTcfucrMMeubGpdA2rC",
  "key14": "2pchXkU64CLD5LDeWvki14KrD164sCHzWUn6tbiX7L2sf4uPgHLnDCYS1w9WJwQ39jGL5nYgbHzcVSFhB1RiU5oS",
  "key15": "VzVEotjZcCRvJ7WK2NN5HigZ5suRvVjgWVcDF6f2wdKUmbi7WyZfavsYcaoEUVtg7Fs6veDrTSPu8fADzpucdKu",
  "key16": "5B9trhgiqf52fZ7kkZxdBH7KeXHBNBaw3b3FENsUMVTHwhjG6A8PVBf3cmf82ewvdGac1YKtDtfRmQYf1feUWVgN",
  "key17": "VLpeHha4rw8qLHnxZKS7fVN6GcpUCbwJ31u9VDdzXisaehjJDux1cB2cufpwbW2cEDCxPo7p8HTPXwEKWN8hjyN",
  "key18": "2EmuXmocFefH1W5MjMZ9T8CtRkRBrvQDAQGpgADGzUCUNMbX2QxHYkMtFi76EBqcHnHnNWT1zmNLZomvoH7hKAXz",
  "key19": "QVjJgZSXgc2wGjba7RroddssUmDp4Mf5gLNBVFCBu93qCvXPZgFLbG3qzJxYAzxBPVrWci28NYSL1Wr3eHnxeR3",
  "key20": "crUEAy1FRQ5ZaDWiQBi3hbmG7ouQaj2kDy8Um78dQAfMFKWfxd8T4QmbajCBBKKedaUSsCafPUGfpGHkAzZk7Va",
  "key21": "MpCuSjfVARYH736D1tgByuZke7nx2P3dpA5EqsgnN4Fy56PDQmxT9jwWq9cTXrayUE47qMKhXuBBqxGDVeqMrFe",
  "key22": "5Zyi8UuJy7DmATg1UVdvVKsXB9x8pWL7mpExK1gJhwXJMSJSA6WfbtVouhtfajLXM1FQQatLiraWsbfWtb9N3pT1",
  "key23": "QRRvHiCE1KtDEzSNWrbX69vpmNbqyzgBEWNU45ar17XjeQwaHVH78wUPjN5LynYr2Ux8okTG4duz8ip7JXSaeUj",
  "key24": "2VGkoHTnSE2P7zvZemK6LcnuYe37pyEWSAsS2pj6nYhZVvPLyDXFYbwrjWPEGQLU4hxmabzYDtSAt7nnuCsUp3Hx",
  "key25": "2zbSZL85rPWJLuj8j4jeHi6AbA3NpyC31q4LKz5LDBJxfs9qTvX3ZDmhtZqpraqujU6t6XTrbuZdVwK6mzALkt85",
  "key26": "46BdGPz8T3ZxiN6n6TZAxk4puhLfru9kTJUtfSBgANPaYxPLJx3PUvjnvJPMFFruhQ6PmpVSzmSY4M5AY432XZcw",
  "key27": "8zQSQPk4d4U9W7vNUx9Edp2BiutPAWTohGBKeknRBHtdqm9f3W5sZ71yGbBEez9Vej2E2pBFF3QghUEvraZnsEH",
  "key28": "2UQDRGLTvUc7aEkN5cC6gnkSR5FCoUTkcmG7kL96WxByCtsbTtTb269SkK5wdxbGCicMyCB3i3JsSmwLkPE5NRAW",
  "key29": "4G2e72x1moCMHAvFmovEQNQkGiUstBP7SA7NmkZMRZtWiUHKcMaYMMHVXUSoAGn9cXUUngLZ8GmpK97MTycS996R",
  "key30": "g7o1x8C3d9ohTRAbF7PpuPdZfN7UUHH6bBseWFYyGyPpw6FnZNiHMYyFEiJLPLckMGkMSHdUZNsE2mwVxYM9jza"
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
