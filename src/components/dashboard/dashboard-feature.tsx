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
    "3LgZpb8Ehzh1aiKW5z7MVW2CzVBtqMn9YCsTwsN7BaVNd9TUMSC4C1nrkxs3hVNh2JMWEL63vRRmo5p1G7ptwkjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehDjSnj7PPXkkBY1cRScFU8yGMecT5wAEQVQdqoC7mPcaUqDVTjbU3P7wVR9VP5DxGoNYEbkcHVPMaUTuLDZXqA",
  "key1": "4d2M3S2LkkhZTh8j2sezUdyTNhsMCLbnmYLjxudTjbwZjBjSEwced8Qcd2dcWisWQUfLgGt8xMTWUtzhYzyJbGVe",
  "key2": "5fsHwfEQy8Tw9y55SLrdDTeAKcvyXbmKY2r5SXi5qW72at65y6VownqkwYovy754o3CD4Z3cAh3CQWam6TYDrdMG",
  "key3": "32HcgfUvtUz32LS9V68f8pUcMarTsHeAGimU6BdLkQXqsH6CoJZWAdeJ3n99bE2hhwJsszPaJUBtCkjDuUqTLafc",
  "key4": "5HHM6msWtGxEcuFeDkDkPE5YMsirViSyVpB8n5AgDy6G3VCx5GTGuhtBx8ZAimE1WNWPzfymciGpaj9o4MiFr1nL",
  "key5": "4eyb5kkP4eq27cLsPRWyA8VoSxqPZHCEtgqX8KBaz8gGK95dUDgMRWUPzTDpi6dPkmbzPcFyFN9uM8CgKahR1fHU",
  "key6": "3ScCbfXcTFVS5xu9MTWkaUZf2CG2VpijtLwxBXsQZGUcMTkjBDCTx8JhXeUcFPHDPxMbEJYnhNyPjLmVnHgMj4n5",
  "key7": "3GHBf7qEgUgJceiFT6X6kqd81wQv9aLqWtU9yKugRCPhh5t3mRfcg4jF8ie5VxG8sP31m4EcqvhJNhM1MEfrxco2",
  "key8": "5yU4GSh99PexnJrJbRp19CDWdSVQ8Bs5TYG1TFWbugRh4ENhvBXCZuBGeH26oApoUZ61CRW1ruWhzeaoFJoGEVGJ",
  "key9": "35A5Ftxti9EQXk6szpABpwfMs8iC8uFsiAS8wMUcE1NMBrjENGbu5YDDVvne1dicfK5ug83VTYYVH1zScudx16ko",
  "key10": "25P6hVoBWt4ar5TadGMFpDEe1XM8auoYSDbvqv9HLL9jgyZPxDFdZRzrMSLsFcgPGaS4PrCNF68h4ddTu5n27EBH",
  "key11": "q4zZCLq7rpGMsNLXmFyo7NQnbNCKUoM5rWpACjXfUefGTGY7AoTRkYJ2sdHXo6fosEuVNj9SFACkU5aiWPTQG6B",
  "key12": "3Rc5bu5RSXsiET9JRkzP4cY2Lrkqvo3FzTycPgbGdqiLWT9HR2DvcBDjmzeLdFYbsJSfGUExs5c2c15gv1T64dTZ",
  "key13": "4kBRnWrpddZgJixzy5s94zKUhezmcqRmSqHYxdDhko7jFG3bH9Zi3Y2TQv6ig1kQmcnDQapDcEAZNTWjjK8PRSgz",
  "key14": "4jkeDPnbJqA3Vg2BVbQcyVHB5LXDY1EcguYi4VA4PQzSNWPRcG8feteiqffH3awpHAY82c3HJ3pTwz5DBSNe1ZFV",
  "key15": "4xqB57xS8witPCdZBVvx85xwNJTD5dSvkb8sCuwfN9PLVfx2pLTy4fyV7gAMHeNLiTkzChyL7PRaNP3xsmRv1rHC",
  "key16": "e76nJU9xx8gVLVsQzirf8M7QqxTmQ2nDQmDVhyF8WvwmC3xSCtVq8UBct6uaoJzHDYLJ5LkLDhxEoX2EjiDTy1p",
  "key17": "4vutQy4fNGyrYCJLQ9K6HFi1R1mmfcFC6G2WpvWHirsnHfhYmEkkQiie3YsRhx7zKZxoRq96snycaaidZ9G2QCd7",
  "key18": "3gSewgsecX1qrqCGRLKYgcUhMpbpmYjo5Wv1y9yc19meDT1oBdkuK3TXyXhxf1Lpb4WLrvMEo3oEn5Xfg1y7vhXc",
  "key19": "4wifXBxLzUm6nrGfUkuSuGwkwmJt5jr1GMoWbWG6EmX8WJMUVv3pGzTdfTu9aDqxqKzVntPwyUtnuofs8ekoBBUN",
  "key20": "7f7eGZzipEuhMjLwMkSSAgkyzbsnBY1eoA48zJjweqKaVZhSfDwX6cQTRBasCxvXPjsNcrYYm4HBNTAV8Sx4tGA",
  "key21": "5wRan2LZrt2tqLRyG5c2tzuPcugmPXDRh56PwJDmYxYhCxFF1T5EnzsZMPwA65VYX4ezboKYco4v1cLRZCifsPb9",
  "key22": "4BgwcZDZbQvjSgtxixSj7b9w2jmwKmpSqgF6cawhTwtCSa1HjqndF84fePMFER4VUPt9jchgLNxtzRjamjWD9E1Y",
  "key23": "4xmjg3iWchJjB2LtGDxauDewTBNxaeSUSEHPn57kURYZPwaujJRW4CD5wpPoAHtQaeRfCKbUAKC5gz6u4nZkCWR2",
  "key24": "5A3DBU6ae4NyfVE1tfCe6tycDjZqK1TjgCZCSpBc1XNWYLnugrWjSpET6qAAZfTVBJdDau7nwhEsFXPFdZAo8RFr",
  "key25": "3Yxgg9wptPYLfiFUsf3eyi3JtQMgBizGgdpnjDd4ALzwdpqSF6cNVN6vPcJ9bxcw36LV53QFmRGfexiUfJAHJxr3",
  "key26": "5kyiHTKEowMrRtXUvrU7M55fGKnunguBcfmRxuqeZRR4sFMGyVGn2ZRr4aANAUHT29wWiHBYWcxj9vfLcx5sWNP9",
  "key27": "5om3m6a1WTAyiewGNAXhL4mSY5a9cvJDtSLWLVLeHyjzJwjhPi8kepBBQ3R4Ts9HBuTC6LFDUg4weVeWPB6atdh",
  "key28": "311aESuAk9L5L2PxLp4GXsjej1v2AuXbPW9isEBMAFkqPpp8Haz9L2CGmGbfv2uvCvNdkfUQcziGsUSeKXrKReHq",
  "key29": "3XKiqGwSn3caRjNMYquHvN4kMLxCo6R63Fc4eeKHqGV8kr9rB4sTag82q1pvYFNZAUQVakJa2iEUshg6yc5GoM6n",
  "key30": "RkkLHq8Agvv69erhMApYshD1zzqJ5kC6cwGVcNmMDiwi9SJzeeC5bbsDZ2uZjZmePWFPYeXFzp6sTF255K69p7d",
  "key31": "FgLRjcfU1Bgf51nqNzgvUxCsxB1RjgVJfCEVV32vKvvFBKqTUny5fUZpfWyDMEEYxhhdXzur6Cxi2pRY4YjuY49"
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
