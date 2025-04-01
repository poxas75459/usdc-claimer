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
    "3YLZ23kKZaVNmJcv78Xmk8JZY6KeF7xKttyGdTqdGuTP5ErxcUMWPMj9KrU3RA1igKEwYFn1AaPi5HbaMFSfvmuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VzZQuHr9FA19KBS9onCPStqSsXeAwegdxTJF5BqpefhYRUevtmpcbR5ahaAJpsAp2BsBjZphACrwC986rRsApB3",
  "key1": "2tT8uWpC5RVM1Gpq6XEr32Du4hQ6t1FoqGGN1QUny2CpL6CX6tapTLtPAu7e8E8iNwSqFGcnVAftpaSNzrWC79zd",
  "key2": "5u3sQT1hFwc9tdh7fCDp7VF5yC9GdJei5ALHnTQYR9gdhTMrQY9vWu4zf8VpAv394x1eMcEcz7WE5Z9UPPegiSJP",
  "key3": "66hTimafvRo2eCNNe8nvkJ5QLcRLw3yRoHE6WmThKJrw9j28cFCB9agjEsXcPqEDfHiBQFAW4YkeFMpikCVNmNsC",
  "key4": "1TPaNTZzamsgtGBxKtHX2a4FKLexyEXkJHPzrf6b4292JDuvKHyzn4SDhMvatEemaHXRfPjJcnQk9Xq1WVedxg8",
  "key5": "2rkXWmHrZGdrTc5AW9v9FdUiKYPt2NxM6T4kaT4DKvQhHqQHbD6pHqsXy8A1YCjkRig2W1UAsCZogbuHSu326VuR",
  "key6": "4VWgD1vYwM3sAnD9eDcg4di1XKELBfbbnn56vyT11EmonPhx7y2heqi8DDdxoptBj521E4nSaowe7L3yvcYSSYaw",
  "key7": "249UyHa6JZscfEeG35R1CDqHjXPsBco9nVtWpPNHpJZEXEfCMRChUujNfXnv8xMBwJCisP9YJoci6X2hUorE8eA6",
  "key8": "2i49Nob3dj1ELBXkHFnj4QtCaGLAAG3rkFvwgd6nxbu2uGXLf42a2K9zSyLFNpJwonu6KJkvfdsvBy8CTCWpnwdB",
  "key9": "4zbFczfhNHvdxTrXZv7jVuNBNiVVuprYEgC8AwyM6QUS1rwAQaJUzM8qVR6LqQ6UXezgqdfpJ3oXrrJ3ZkkMFpeB",
  "key10": "2Dkkgdz24dvMVHPinBRWHQg1NjsG4BDRszES8LAF24KeCsD5XPce7prHqXEpSsVirghVRyRHW75bG9exw8Bk8hth",
  "key11": "2djPd8NH5vsAGKwVUj9AUMQbC8Ap1nwedm8H7J3bjq89ccHJXwd3JejbbS9rWPhANvtbGN3X4KWyTFYPMzRBUr5y",
  "key12": "3UnFr7ueVtJhkPZv5ZCQuTBV3nCakbzAQXwcNhZBUqJ3fT3FKRDA8JSZu41vYKzSvoFNKUEVspJXLxnKkSu2yrWR",
  "key13": "2xGoHDPJYDotcKtVAZRzYn467souJMU7PDoKTJe5c8QT57sQRDVE1v5KqXstQH8cMPgF2AET8XVZgLkSE9Eaobpz",
  "key14": "5KvyYHpQuZ5XYcv2YNLZqCqYXaN7d5zqarnNpL6dYBKuGzZWcZiVoea3CHjsSRRz9BGUVF1FPrcqhcp3JE4ipkQ",
  "key15": "5zxt9TUZdxYfq5W3niMeUzpzaaKB1z6Xy8hLaWBuAbEkWY8geBqS6Un13buHUQFNGM6UhqMPrTGRvKHBpCBoGdjc",
  "key16": "2divKVvVdwAYi43iW8XBudxWdx4AhjhpPH6LePT9BcvC8dVkWZ72G7uthSJMRS2jX6k2dBQwrbvSWpZGs6VruRNh",
  "key17": "31f5QMqjNK7Ti3zCvZ9eZmUqvjHCYoygf3L9KkPhoSiQgL16RSSdkCjW6p7yGPv5acRHw8QUisBp9Dk8vxW7n4EP",
  "key18": "22xsFPpLL4xWk9Pi82J6zb2ocsi9Zh2n4gFkPdL5AEnVduMdKBjSZRyvScoHZSENdgVHGhSrQuH1KuYGWXkMsud4",
  "key19": "5ruWVaj3VJpPaxc1pNQmsYdgQZEVQNDjDmh1XRC4fAizzjymqtYeouaWxqUVZdCj8TVZzmv3cXaxgU2BiPEi29GY",
  "key20": "37ehFHgFBFd9hD7QxMYSGGgj3zoiRMpbhUAKrFZrYTmc2FyfchYgoqrUq3G5muoH5A6srNQfTrVFpht5iJKfZAhk",
  "key21": "5k1xGhxLBa8vtnUaKtUUt647BJWcbCB2gzsgGirXyBkb86oN45VL5V71ULgKcTHkY2VKLHz68X1uHJCGviQf7uTZ",
  "key22": "2BdbmzB8CbXXb1STU5ASPdXeZrzoqMvu1bWPivBizJkuhnkNpcjQ5JcRj1YXeAaqtD6d3QRjuFnZxwC3uUpVD42k",
  "key23": "3YPv29WvWiWYWkFYEXnQvfEET57HqoHWvLHNpT9NLK5Sco2hVCbk1cYm2yo1RxyuWPPx2p5z1owpeyoL1KisZvHq",
  "key24": "jeVUKTKSsaVjAHHKRA2njCFVoKyjEJjMCiRAPCSGExHUcPWkkkmjzL3LyxgeKDDZ8qcZoNh8prKsrmgky5JHG6R",
  "key25": "5dEPkPfD1tgJEgshAg8isdrosR2mML416nqDvnyj8sNcFCsKjYK6HMKuVyRMZ9eJAxp3jr3BVbvW9DDqotEqbE21",
  "key26": "4QLQgUH2ycHEQgxuGW7EpB7xRuf985pPsbwLrGwFrJEuW3XMthKjfgjsQFPMxeJcNGerxFcUKdzs37DEA162qwiz",
  "key27": "46rzup9u6BgmWnMFp37GvsskcCE8gfsMczkfuMSExRwqHwhyFUxJhGzAjfaipULSCKvwp1qSa1CTuC8jSCLh5mo2",
  "key28": "2HtneKM7SBgyJkcEgXq87zUbSzMoSwXPKqkCapezSRBmcfmdXw4fAcd4UskerybN9X4PNAhaspzUdWdfsndciJi7",
  "key29": "4ZRc9L3TDX3Toaub5rPXuNgnG7SQBY8G3JqqCbhu7LGut2ucpfv6mitCRgpZfSVi6vFn4coC2TA53ScxgU8CyVw4",
  "key30": "4QXU75pMuq1Gz5CmxAiJNX5UxVER3ARrZisJis217fNBKM4wr87728FKFVajQtq8ez9xqaBKzx9PwrrXdMKbGUUg",
  "key31": "4CtNmKDyU78pR4TGNhrazm3zCHpPbMPwTRzXmeAhM9m1DFxUQHkuyyY1v1KC9DbsDsRgDK1u8PitiJwrGHKGzX49",
  "key32": "RMWBctNg6ByZX1jXQCf7ktag5EGyJGKo2S5i5oL4b5ne6FDN9RgqY1YJZeTobHimYc14jK9My6E6FDu8n7kSTm9",
  "key33": "3JJ7AeU8pm7LtW4UgnU5RAzXj2vzzasLpHAjskdtNGWQmpRYtyjz6CQL2YemmfG7MeNBxobQiQiLExTiDWny9ZPe",
  "key34": "eRRC75zks3yfYF1kr4HJaYqzDVaMetsSrwveqvu9eswfMm71BeSMYLBAgg3i5EvEa7vtLAhRxkbkD2PJ9siWGxK",
  "key35": "6S4TexygnpicLK6FJUsj8RAhFcsWVLRxcLHLPXkZoTTePhh4rd5Ux1GpPQvn3NFc42C4e2ZYdCNDZXUwzJeM4aF",
  "key36": "TVEXPZPBn8cTcuRiwUMa1UgTxabivWbsEVvvj7Es3yS7DJNcdkB9Qaufm8iRg4MKTLh182CkSysVmScJwWcx1fL",
  "key37": "4xbcFKX4fdroTWqA5VnH8UK3HdSTeFwSK9Hx7osuxzsBWSXdUwxrBbmTxcKS5itRSfjEWrB4YRqibgYX5kJqNFqW",
  "key38": "5cZMHXLZpEjx2myh6m5oGshBgcTsm89mScwnpmx8QGyigwkSDMQyWiro3k6RYyUaPLC46nHvUeqHUycJxkKn9xgK"
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
