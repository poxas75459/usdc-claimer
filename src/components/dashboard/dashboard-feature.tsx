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
    "3oGbeTGuMvvTLUkomku2SS5JHWRz8EPAqdkcfL3JdJnaQBZtnaj6ZG1jjB5Ef9JwEdyCaxDoCzEU4MiEynQBjtau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQDD2Fe1yUK6tuHZknySpoX4UUb8xkTXuaovRR3iwx2d9UWhjF6YpHee1V6ywEC85KKnRNJFx8K54DfFwXHcjgr",
  "key1": "5D9e5CAn6bNjDSCX7jqUuvKypKqKMijmvawbH8gWV1cqBCdMNv6nBgsLPjX2jnhbe1Epdp3BZND2d2JD6nNiHmvc",
  "key2": "iLEuXwFPDcBm8JD1k6i5pM6TM3ZeWrooV8Ksf5jpCD7BtbuJyuo21va7C76xtvqKnhFRzG6aoxos9UXjAJed3Sj",
  "key3": "36AarxfKJG8k3NyFPpNmoNiKUpEjuihRTYavB6h2MREi8AZFQ95cV7zs1x4a4W1HgYox1kRYh8TDqRzx6QzoFm8j",
  "key4": "2D4nwZQcsaeyToaeHZNB1nz4uYiez2wcNcZYpUWVpkBT7aY91bApYE5KfF5RjvoQvumvJLsHdDhVKnS3NL5fyBwm",
  "key5": "21BbC8Axn81LWKFmfDotFCJptCpDMK3qt5KqZfzM4xYQdEpypqu7R38XoDs4MKC38Z7uc7bZc5WXfLZy6P4yKR25",
  "key6": "2ZMY3P28bwo9S9B1VxrHPM9rMQuBvoJQ32ym8aAD7e8gvLCRBWpnXNtbjJiXBuRSAXvWvfvAF2e8DdRkBcZPyW2q",
  "key7": "rAAFDGUwNLiJU61JvGjUTL5jJ1yqMuJj7QPeLp8DwkzPpyQTQX6krdY5JKpkj3hagreUrfZnYURJf56kpYzYmut",
  "key8": "4fcrYLeHa4Mi5AmTA1g3KKSCz87msAZ6WhSbkFP2H6jhH27AFbRtkMZ6bkzML7VnZmkBCF3AfvbmATv3GCttj5wq",
  "key9": "2kotG8fyvX9nEVQA4EfShiQX4g1Var3EBsWAWeqmdXcxPDk89Wy5YDiekQyf8YhVa8PiPLDJ6MKGh9CqxBqqymqZ",
  "key10": "5FU4hDU7JJRQCGJYAcyVETzt8xS7S6jVsRbn8K47W8f2B7U9g6cpZ8W33BNUeMyqBJVKvKGA7ZUzrgyajPuvKH5f",
  "key11": "25fJek4i42p68Wpeqoz6f14BEX6PcFLnaAmq2xPXXf1M2ijAD64qw11vJgcxJ84HTeSjgjynwe7iBweAKaFRfbvy",
  "key12": "2KwdELUi3xtA6BZ2E1A5oVRm7GwyGNAEJdPAcn9NGKGiXj6Np2KzTbNEimKAAuc9PmotwnPNB5nVvQkMJTgaX1cb",
  "key13": "3ayKxvMwHWfHQuTBMGzqc1a1wM7TBZG3hvTrYvi1ckhz8gveoEkbnnc6aT63RvPhGV2a36yVAuxBf8Up9f4HL439",
  "key14": "47nZ9WN9CZG1JQrE6B1QkWTLxw2cpewmCobdvctJZbFNRwD3w4PG9j9DKNc2eoCjspbxMAogVHhq9SfuVhL61zC3",
  "key15": "4PicBtP2uVeMJrE3fJ229oQG3DPVKXNdRpQokqJghco7j1yxLUq4Mc3TvFR6nu4nBhiwzvN2A3nnzarfT685ipxU",
  "key16": "5Axd6RJcwoZd7if6jAwJsfYeQSctBpGosqsv5ra9KXwoedV21cwAkzC39DAgGR23LUhsR4TGaWznovBTo8PWgyBA",
  "key17": "3MxxzPgHxrEBG1ipwK3dDVaWXymSctJMP4wgNWjXbnbuMzJiyb9N1fvU2yDdr5RR3TYEGqXHBA3DY3Rvo6uuomtZ",
  "key18": "4A3U9WyXGPPuKxsBKiyvb9P1ubQAqqhQJ5eiHsL3o9M4kxZ1jcKNjHHonjGNtWNuMxAzWJj3PnyamXek9rvurTof",
  "key19": "2GeML8WzCiwnBNADTd9hjuCg2unDTvT8hHSp7q3BG3qYjhgo2Vddzi5LNfMNWQZK6PAqg98utuvJkeVe23fKP5Xt",
  "key20": "et9QT9Jsgb8jv121JkjfDpotVzgE9xXxVdyQWFyYu2omJmyZwt9AgrmfsdzBiCXGtSQBuSnTpp9jhcrecLrzWdL",
  "key21": "4w8YmCEZVCEUATJay76MCNm7Tsyn54kzsLPttcjQGZV8RubPWg8fJzfCwNHaA2hfRoyxgSDJ4YNTYV2wDZvnJT7Y",
  "key22": "2PEwTGGwU1LaV7hzbexgekFvgAKqpVbK2Q1ipvnwyu9QGw1swFKSwaCj4yyDynuQyxYviitew5HwRLzf7RNBdjGj",
  "key23": "4zkujbwz7BSuq4NpEvPhcvZfsuWbEWrJXZEmCBS16Lq3YbAcgw1Jh7eGbrp3VqZC42nCzj5LDqJiuX1t84Gi7o5s",
  "key24": "4UF6cckpxYSEyHvK4dTcxVeQBPgQmVTWaM9iPdZCwnE5se1NZWTmknFqB1W38BshLHqPKVadPAqAwH34Yt728dPX",
  "key25": "5oshHjPFRPkNCbH1B6Kz9XnkLo8MKApDuaUNsXCyQcTRLfM7wrcqJiXPpdpHjhJpGL7PZ84eQ1qjHzTciKgQq65n",
  "key26": "45eXd3iTKmGAqHNYmWGmSgBedAzvJDyigyPtGgYz63ivyrMyUEpEPPxZ2BJzEhXKqhGawfsKcbQGhB99sdFGVJS9",
  "key27": "2vsMimPm3aWePVJYjdKssYWuTsPnAQLJmKPeMyyG4R3i9RT7HY87MfdizwvMAvsb8KN5KPhj1AdhY7NqRwP5FhM4",
  "key28": "tYiefSXNFKeP5fuvB7fFXhKo3D98XJURTmzr5KQZgZfxrCRnM8CX7G5CEUXmvddBo4DqegTaYUsa7kokuhhZsYw",
  "key29": "wF9hXVHAvrgAsg8RqZ1Cv3Tak2fP8fuHTBXzhc8XHJKKti9BN7qwLW5tEFdoYGL47NCKyVmDcBWPb2f2Bbb5FtV",
  "key30": "3JeqZyoVprvGkMrZU2y9MC67cjSLvHR7pixEUhS6T6Trc8bs1dyKZBdT4wj1bfxtusG14Mk4UArLtn1EnLZo4YDd",
  "key31": "2SXF7fvuHEshxNfMZmn4n1WcLG4XHsnX5Nc8AMgpjKQJZ4MK9bTxwGLCpxK9Nn6Cwn7gLs7ki14Symx7Ee7aAt3W",
  "key32": "ksseFBua5G9cbSZKCsgAUcFccy3p5kzq8phkeTuafaaTgwzWDXs4fA2tcDLd2p3o3ZcwqAScKJgEZgZESGBJq4e",
  "key33": "2M44s5kUQPcz2JHZuSExUb17soTH4Uwg8DnKSLUMrfyB3az8GrvyneKfhj6RoJceu4zmoZZnv4YoMuxyXMq9LY13",
  "key34": "RZQpzkhw2ewfa1WZWXzR47JnUF2L17a4ZEis1gMfVzkNM4jGKpH5RVfAiYdM3UiVc67cQWL55WXVuSeKeA4bxoF",
  "key35": "4LTVoNX2wBz3jra4bpYw2nxi2mYdubb5ChWDi91BzaxTpbQrfv8AyVLwuGzya8v5sVEMWofgYjVJELynmCdkhVpQ",
  "key36": "2ATWNZwtydcGbiodZKCqa1nsibMigHy1hfSanE9HDBRywFh2Q9ai56RWN92fvdtfQKNywJ88qXE7Vj3vdRuwfjdA"
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
