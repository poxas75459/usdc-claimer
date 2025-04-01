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
    "2QYZtmeLuHhMspYDgK93pKYbX5kcGh2ATmSTy9o38T9CEnhtwYiJV45qxo1ga2x39PD4FRTPzgXmZ4MUQZag2UM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDd3GyVnwroyUiV3uVd1chedbee3m616j7N3FB9BJaPfq6DFPjsQhGrYqrkXx7xtGine92D7pMhbEnTAeQTEdJe",
  "key1": "36FmuviAHd6zUjvqgcahAa5qXAy3Hw7TdwueUk5mRtagT3y3AeL8hRzy8aQCwrJbwSiqMtB2fyHdQT91p2vRdjBC",
  "key2": "2F1XULkznzA3HXJrdoFJk2X2rYR4ZJNWhgDsYZYbov5EaiyVJGV45XRH3oaNA4FGrmSXngTVM3wobGKchXW4uEs7",
  "key3": "8V8SkTrreNkFxLruGXgS2BUowP14QuyVVQGuJmbqCQR2anckGos5xVEAQAUp3Lhset7ri45NyCkBqeDujSaK5ZZ",
  "key4": "2diD63hW6zEnZbfRzMdsDrNdoH2x16CBbWxo6Yjh7MSFUFFTVxSoquZKdyU9nTFNFSFadT3EQgWr9uoeq8zwEFuN",
  "key5": "4pMZpuWvTPMxPJkvaRxNezDxfmUZv7PdkPg6xSoDyrfQGbgVvsLv713mb6N6pXiXgLDtBfJSJKqLm57ePudwkoUV",
  "key6": "2UkaZWA3NeuosdDrpQXLyFj6FH13PMhvq6vBbuMYBnXCndmACBnSXixTp6LLX25NUxFqztsCyMdGy64ftWhoWc3n",
  "key7": "36owrN318jMmDbSyDCQioytfDbBvWDPjxbud5szmFWgThnX11eowinBHVNtyoprXaEJkQGf5CRyBcmed16GMiFc6",
  "key8": "4ACbayaoVB9xnBT46o5JmdSGrS9ZnBDo3pwLLEzirhqnhvU3DTTuz4hVHixdeaxZvgUTZzo6r7kbk7HW195pc3QJ",
  "key9": "2XScn7SU2YxSRSUKc3RB1UqSK8YAv9F4rNTQXoTkYz4ZSm9r1oiwHtHsNGCvK3KLNtU2adxjFTgwTajFrcwgQ8He",
  "key10": "3XcW6coYPDbniFNGMcZY557jJyxewQC7WJSFhVS3TgLJddxuttfLx5BPDhj8stya6vcFS3jFe3Mo6wTVpBVPMpMt",
  "key11": "33hMBVbEkNFS5BTTtJ9mXBox366LQ9ReuRiDG9JackSxXPTEJLqdNbQvo5GMefq4TTYHrRChU5s3FAd2MmxX1GrB",
  "key12": "5nqg1braQjGgAomnjoBCqX5CPqss6Xv1xWGf8DhFUKULDZ7CFJ5eTNbMpzTJDyopQMaX4GyH4BseEwWpucUkNxPJ",
  "key13": "5ATpXNdUgYodaaXM4Ntuz5NP6jSD6BgFoM61FBgSDeQPvxaaWPep5F2RZsEAPw9hRowqzfhFZyUpf3vMzeXd7hhb",
  "key14": "2UhSsfj8whkLcK3xdwqY5K3DF8BD4pytCkSsES37ZjURELoRLNUjVB9LiyovYJ2Hdg849oVqv3GtNvzENL9MeVJU",
  "key15": "65rpU97UC6Yy29veapoQMFt3eH4YGGmHpukSFLQ3Rf4FRcEaJBk1o6T16oKf2WNwTKmycqm7sP2FaWdEU5k46pao",
  "key16": "2NH8RSqpQEjuNUufWCNEp8qFTzDPdCRxyHn9PLPFXpiRkPTAaCmxSLAVzqxmU5Cx3jcgrD2weriJfJKgTCmMudAj",
  "key17": "3NYyUWBed6hFAAKDsRADMrcvfvEzSGREL9NiBdXZ894TgzyQV6bQkyWiy7zghBUY6TpHbX3M3HBKc1z259sxbukF",
  "key18": "2YRLPZATFG4dpcDt1a558w1sUT1ruChn4wM24DaM3EEo3NDG1PRwiHpoEWGEdZ1P2ViLzDu4LTQ5CkHSjFZg3gu7",
  "key19": "27Zdr1t1vbAKN5xVc6HdX6z1MtUbJTz5vN8NLh6X1tWwXYYT6E7sKGxJ7duPiSJugpAVUBN6BWTn6N8QyfmWYYXL",
  "key20": "wUn9XkpD5DbMyZeM69CHrthDuFshzBsEp4VfJu4ujfhmcg8nRRG3JMXKBSYCxJmQcNeZgAoeyZzHfFAgrMD4ivu",
  "key21": "3srMVzh1e47C1Xv9bDNwsWXLpDP14qvHL8rU9AXFLgXRf9QCuEzLWq58CisjoxYmBmmzNdzck5ZZ2mcmgwE7CeA2",
  "key22": "yputQMiVnUiWp2qzSbceUnYd8BnD9C7uowzBFdS48EsK6Vf14qa1A1i1rBcjV7WjXdADtB6cTWWF9TPCWmSYQaR",
  "key23": "fg1euvTtVKD1x1qSaQmLek2VAybVUUdr5MR62kQKBh6LG8CNKE6SnSvTPS5VTp8fjPNBYCAZhMahgit14gKS3Us",
  "key24": "f3wseGQxpeYsTKqXjPW9AYPtyfHAFTrj1Fz3keZMriZezJsS93gGEh2H9wqJ7g3X754wFY7whQgShVFKXKKXkre",
  "key25": "3Q4tYV2gacyENoHUCbYBxFZvErBg8JQTbYrErYGmz2yqPP6Cj8We2Bzu6GuiecUkGL5uNiNEjeVm6kPPjRKXxHU9",
  "key26": "5MNpaYkJqz6GHGNpzP6niRKDA9xDEvERUXtV8smQ3PRBkTRzxdkXGRNcpJi81uQ7vHK6xkRDn5SN1pjByLvLaYNS",
  "key27": "3qCcRM1qEL9XKmfwYuoSHKz4gCX3CsWhHe62aVRCxeHmSRWFC3LQbT12cjCcZxKjkBG6KejumthWfC7dVYe8eXCC",
  "key28": "2zW8J5sWdizXUJcKJS92P5dCCKJfaRH4mK45h1pCuvG7RxsUoHMdY6mKDG3dCy2VVVqSMi51gLBVfY5SCPLYTCsw",
  "key29": "2Wy8ViDcsTNbfCkt7BobZufXtUtF3aTnGo5FJ956kUMG84v5vxe8U92a45X29AKNijdGaX7p6LzosGmX3bGHnwEb",
  "key30": "5G6XLKwQzL3krvYJ7RJEBSMpVtR16zVMQ5hKpppS3iCgMHBQ1HLiNx1isfrFES3XZu18iH68e6MEqw1q6htEo7GF",
  "key31": "2jyuiW916xcgSz7WkuBvxfRyBGGBkSaeeyDNEgHsMhNc7WXmPhnC5osgehEmMafYM1ECLn2XA6Y9aV5hYVS4zyo6",
  "key32": "348DPoLzV6ySWuZHQ8d5kdtVB3nAs3mLYo7P1xkbVnwjderyVx2VenVDDJ2c75ihkbrRU767mJYfWswrxLZcSwEA",
  "key33": "5h8XriaBxrQh4NNJnphwg2U43wE3CJ8WkW1vArKJRFrcsPs5A8o3TzDpAZW9frQNgFP4fXwreTbFAK6pC14WVZfz",
  "key34": "3TQCPeYx5GJ2gFGtKLX7nR2GQGYjqo2V56ATHnPSDn2egpU9KfVu9KmFvofMEQeHv2s5Xx79TVFa4Xa5JhhZJVWE",
  "key35": "FHFKh9Lk3YxnYADLhxM5fBpJVv9XhP37UyCQWmA5hjwaH817PgVBGuCbkgvduPmBJqd26d4uTXrGAAaBURy5QnE",
  "key36": "27xRUYCnvbdPcwhgPuT87TvJYu3zuSdWrkEzkYXE2w5eRoY6pQPFjaCYoYyhk2VzbCRWKaEh9N8NZ2a6jGdFAPmw",
  "key37": "4RgHU2BPH8uwQ12a1HVGgfyjixc3KUxCtzm89SCWWfH3AZ2QYA7q9FXMx93yot1BLegpnzioMBT9FYm1ryfpii1X",
  "key38": "47CJYqjXrqi7rVdw766dqFpB7pZDQYxt7B7SQX4ShXFhDtnE2ktfYypNfYBfDfCGStvC3ykNoeda2A4Rgn85PB11"
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
