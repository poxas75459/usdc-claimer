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
    "5VFkK558dFZ58FwetAnUm35fNs2KycSRaHb8pLyWwSuCeGWCeWPkcVKL2yYKLLJdcuRBqGT2yhxLixFEQn2kSaVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C1P1ZRL23QMNTFZBJ9PYg9VWgBwkVjqmdcrXmPWA7JY6k5UN2SbrZ4LqYndtnsci43zETjxnSNdWgfQGUgTn4aP",
  "key1": "2vri9LyZVL4rTBiHZWgqBUTxNh49sndr8rhdRUCqGJZoM1gm2VwrFs7ggBXWehSswdDsb9XiwA44TqVrxmZi7662",
  "key2": "34qy1Gq1EkWmjPWrW6xfb3PP6SgAAuVeJ1RMQab5zywft1cny8JKNARJAGYwpHLFKE8NnAdF5EUHkAbM9Xh2mwuc",
  "key3": "yAMR2nNuMvwWrV2o6KooNxeuDcWgERcHLX1pV7UikMv6goG1ukcYBnYUcjCSSZFTnuaEJkrJVkqNXQAYW6hTiJa",
  "key4": "7Aj48VU5bRvCgJTqQ8BmfHPH5jjcUwwzHLjbykcJ68BJkuoSREcR9CiP1PoXo6EWhL66hmnSFKTVpuw7U3AMVfZ",
  "key5": "5E428LTeW2Rbz58yNXpH9gfqZeJWF8XDDrnwmhy18dSMRCC18pdRZYTWrd3xciX6uVeRzBijmbw4VCrU6qEnhieF",
  "key6": "5WRw7ezrB7ew7YSxW2NY9iWNwNQx55mYAhLCnsjYS6gzdriwubu2q7x1rMFPAU9DMkKJ2VyiSSGdruiVSJ8LphKU",
  "key7": "46ZkvnNCtvyqQMtsbB5Uw9VdxXMt9rGCwgJmtpZXTeTRj1Ztwr5dAA4sc91jgppouhYgGKSuphaVj5HyG2TrvR9L",
  "key8": "krNc7LQXM52QTT1WNNYqPT55Q5Jg93Cos9PJi8WhoyiWDTTCceViQvBuU88nytZ7qZsECvLSTgrxKW98kituE1K",
  "key9": "3CYw1qsjtN8VrsN2gU9vDXFm7SvnGEALcE3rgmcd4yCn6ioTaHUhLyX1rgjaSB2uRNKicnvdsbbYWEEbCJycPwSF",
  "key10": "W9TBTcXRKB4jd44C4czSynhf1K26r6XrpZ5kuCEyLBrVdvnHPpMuDQjHRt7Qn1c8YBSzAc4W3QZ9GDRG6ngZjyR",
  "key11": "DPo2tTLanMqfTeCFC46KMutVww1zhy6h4vgWLh7LDXH5s28s8zx12za4Yq38YH4kKtyVPiLgNs1WgaS3yky3wSq",
  "key12": "2HfocENcQzbSeKS3FUAHjwuzAQWupxuoQeLx1tn7MJ5NLqaLzAxkMBx9P1zgoDa5tVh6mTcBvNpJG7bc1pESMsKf",
  "key13": "HDZeNdNPtB6q7rwBucUgsTVPau2n37988Typ9MLAFwySEm3VrrhjpyJe2LeBbafJHbY8hW6iWXEYMDnQe6YbEmV",
  "key14": "2r8E3YZXqPbkV7JpipgPAyTwHQCLH2qLMhZuiVivEqKnk5PXisSEA2ZQuxdeW2wC3RzSB58MBHBBSe9RTu1Pvxgi",
  "key15": "2RuFmsgpTxwkctUiz5u8oLSEZRNfW4TkCaBZCfv719B7CrhDorf5VPG1YY5UnYZNfSctJi5ZFgHe4rvH6wiFYTqa",
  "key16": "na3MnJZX8AmwKraRt7aJeyS9MvGgCmM5fnsvHqi1QfrAYS475Y8AkpMjyccv8mAJvabtJwz1iSU6wkiZdEV3eKN",
  "key17": "5UnGmLHLfpHCTFLUDnA99ybTCki6GRhR5aQ93XvLTikGG2wHVQPS7iHiGwESxhx8HWqXnx7SpzmHHf632mx7akiR",
  "key18": "5ihBwdiuoWoh4WLboi9B3kTDkQuaiRZZz1zeMxfLghYnAQdsUTuJ3PBzgBiupsYNMnVBrqmAdr8CTMLp9PUK5utX",
  "key19": "5So8G3LMN5F3LYkAxBJ8qMs5hqyWzPT7rC5vwS3LezfzUeLE2FnAXgGSTjqQ817S9TH6ufXBCmhqkV5HhaY2j5jv",
  "key20": "5mHpVKGmsMiFKAW3XhERHd8LVKDyXN2hWFCUNW3BMZMWPP8MSpwPV8xJe2XhSRpG9LwBZyZh4XDJqm6qMVdxTic3",
  "key21": "2uRpWwaM4emf2izQUnJgXGZYRJuxw3ExFdfxWNFwrSEDkRVdXUqw6Gb3PNeSiM8RaT18HCnFuqQg9YHrqyvxrozN",
  "key22": "v2nEV1djFzS3LpJq3Rw7gQpEgnAVpdHcjsJvZ4EUdvjnr5BRmEaa5rDyJSpWAAGx5oGXFyXY7tLiAHZDAymuHy4",
  "key23": "4mAyFg7JQTYP3T4NRyVkeXrbe2X6D4J6fkHCU6u1cNjCWHTfUH6fF74UHQQsyPQGHcPdiRg7Y9yZH2beraLwQDGM",
  "key24": "2Z2fcdViWq4vG7wxeW4VyUKhZEHxUtLxz7A4xj5UUPzuH2b8DS2299hSQfMVYNqy1WH6PfxDrEH24ghKg53wtqio",
  "key25": "3K8eA4bDLbu3F4nrmiaP2nM5k3PMuzkkdbjEscUXyLZWdTwe7Yd2q1BUCsJr9mBk7mAcUtDa2KbS8zbGvRt5NS1",
  "key26": "3Us1SrQvAfDAJJ8sggJiZdRQZxVjaVy6yHwD1GZJDtprBZjmgWYXXpuFD7Zf2xYfpZA7x64WM85XSFe8w9bmuYLg",
  "key27": "3TSQ7CPFcvBQGH344GNQZddGn2RnA1yma6y4wqYKBh4yKfyY4dVWc6HuaQCELzFV2jXtXhndYhXj4e3TWhDEekdM",
  "key28": "4hGoxUa3d14pLsXH96ZTswysVgZCp12dakj7m9v2Mjt622q2CXURmzQXP2sskVtPbDj5KNPViwxn9fSk4CJVXAhf",
  "key29": "4g5CL2xTAvjdoSkmUzCkGs21u3NYas8LRrehj7UHsebsGEKmPr8tvCXKtAwbMHyv8eFNuSmfNowQxoPCwvayuhHa",
  "key30": "4TcKkzVCYGTUqK87EzDQxFVM7xgB93s8sBSbPJWc5yAVd8KJW59FppYaZCpJpZHGQdiQPXiwFDdU82rqbEtzaiUY",
  "key31": "4B7oQxyZHSDv5VtcFcsLE5D3Ld9jKwYgLra2Shg7PRc1pWbPyqpwVykRfF5sZanE7cxceAy7viGtBeTYPLokvj57",
  "key32": "4FZi9ckj4Lj9Dp669hrcGyXFQJAfDqrsJXPgVhgq9CWdq9zWEt7RFP5ADQMgXzrpTTTd8apWG7wA26fe2SzrZpdr",
  "key33": "5ArTxBTifuBxoagQRTFHMCETEtsa8eH3TtyNvGa4vgCtrQwFxguSaUJM8nQYvoZccLfBpyBpVcNDB4QBErAr3LBh",
  "key34": "5MjXR41i5y1K2hxv3M962zydr851KHXZoYgciEzzXWwqc29zr1unNA3BWHrV96yBr3JuW3ZnJwzakfdCUcfcCWFR",
  "key35": "2bSGYojBQ9vDHd3iKmDM31m5fRVBbnhwqSomBpyzHpWCGz81waN3P74HKPiS7A6p5eP4gQsCi15z93LWsNWEa13H",
  "key36": "2ccBC5jvEj1geUimVYwzbDPW3bNDq2mjwBVzMcpaHaKdjDMGa6udKdeuB6us7mDB6ehGSEPr5eT83RjsZT4ATVTf",
  "key37": "42QTeTq5HaUsgJnrn8SZMdHcoDwBifECmnUKVntmjaghvczmzBy4vByVGorHGMrURjjaScSTRs3MUhffeXPZ9kfM",
  "key38": "2QjsESCYWp3mi1tMubYyAHAu9L7F9xvbtbdrrTYTesgJjfZdha1XVcxp6QjADAWE76iVgYBhkeDdfjyXsosWqD9P",
  "key39": "3q4ChiGYjYEL6SBEEj1N9UwtJn7pBJu6UndS4NrUhbiSxNygFJP5KQcdznXvtaADeBs3HXwdW8AadxfMJv6dLvon",
  "key40": "bApoFtjofbRvkLdRHam84j3MzxzjxZnkjSbcxiejY6VhxerAaPi9qXV89BHWFyZqiyom65EE1oFFvVJ8CfHai3Y",
  "key41": "3R2Dwgy42G1iucefiJVJvYNNtC82v4M5uqofBR711LiEk3riTnE9v46h7JJS2BV5cUqsYGVZxmP8xHcUnBwPgef2",
  "key42": "3i8mQBvVSBaPdHwX2H9Bf3AD9GfUYmtSj2VY6rxt7uGJ94PypKb91yWtLg3gv7ubLbQtMDtsrCgV8CxgtHDU13CG"
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
