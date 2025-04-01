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
    "4HiVAvE89KEn8RAJxvVJZmJRz7Lico8kBs9785rPKjx5m2b3cUgq9WnNU3V45Z6BuL3yrELjzu3WPYiugukUfoH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62EwL11AUpBQXAzdC7o6ABsUGEUvp3wDbiHsd4JVmFUQvxuUBj6mniKEaV23E5eRK5AqJc216h6dmWedUza6NycK",
  "key1": "5vMEfGESgSPSukr5X88pcpXEB9RFz36Lm43jRM457MKmr5qyTdjcYV9yPGBnuCGYPqYKf6XM4Qh9YnXGrmcEByEP",
  "key2": "38tAvygXd6peZWBUdgXj2JMXhFB8mEqD4ao6ZjjzkmTk1iMBQCjuqUoTKEYH9uSMDP8RQHVP3w4bVLCx2cJienzt",
  "key3": "2JBgVnqMuePnDhq3u23haKCJCgPRHUXwNZZ4f9cTGqBdnvb1YgfcxBwTnfdDHHsRtohhLLPsfKHTak2Sk1ppqDYD",
  "key4": "2tABvLiKK16vRVxzdAh2yXtrZWkk7nJ9MKP6E4FdYZ3PCBRfT3aryTfLn3A2bBX4vVCY74zbDu1U92hPBS7ejph",
  "key5": "64fK7j9w4NTRWswsAG5GMg4ZUgZXr52UbMiNgpvnHP4T7C34LWHCh9YtXvMb5hasEXiszqmGUv21QWf81Qi1XLGN",
  "key6": "zSW6FTrWomjWqxX8jHLtfSiSR9NNZq7sHd6Qb8fRQKQDrsRGorxcD7eDTX1wFmyUuZ8Nvo7PuWwNar5tD6Zsx3A",
  "key7": "QjziLfTyGMced9zvJeZGAoBfHckH59EbifgMUFSfxCPGsYD7mjcpDzxWntUxsVHZHK8FxyyP4SwTHsnVzz8gJiB",
  "key8": "5RvUM6LtCXqDgE4vsbJ18MVV4XZy9ToqFTY3dg3nfrMCvnPKiniJnCpPLGMQnjncosNL91AzEvDqcKApBYzQE215",
  "key9": "JZQ2MSGDqzQ1PZohVgeEg11EK9jkCJvoDmowUzEeCGXnPmkUN35jLoeYCReRsdzVNavGSHBPmULDnuoqnPENNuQ",
  "key10": "4eRkMge37Uq4YmmpEKGR37X1oR4nTF4KtrAYm8nYSw83hvXSDSa1dpYGT1ggbpV8oLaRWViBk5HV2gZa6im1w3yA",
  "key11": "21QN8dvSuSHFasacsAGnTrmvXPu3b7cniFvwmHeg5EtYsu6nTQrcQMSdDmjZWS23MGJqxFpzSZYrqogKBbvDJjHY",
  "key12": "YeBp12cRcrXZSAN4bMGufs3g3J59u2cUGE8quKJMhqAVGc3L1YEF8bqX2dh8JJqf7ibe4c1n8hQde31WhY3Zh8i",
  "key13": "62f4XuAaxXWmfdnW2aPAR2Wv33st7cLWS8qsJicLqeJXi5iyCpozqxWAoAiSAuVB6jLr9BfHp5vxT1oTdwTcDNQQ",
  "key14": "2dbdJczmFj92k7f1RX7hZNw4aqtZhrFYH6Mfe7jGtEp5DddHTmSyBoykPgQyYVUuSsAtV88swK3ayYEcT41Sk214",
  "key15": "M9pvhqxrjnBu6xFPgczMad9RcBbdu5wMWWKRNEuLZSAdemE1Po4uWBZSh1dYdudcD3H8oJ5exfN4bk3HiqYGmvj",
  "key16": "5bk396AAmRSkGurWjogjmhK1jDC8797D2Jtc2p16mG4wm7bRtnwXV3VBk1CcvzCpGz3fzhjrECYWZwyBFyjbCiUb",
  "key17": "612EwttP7DtWrx9wxkmESQKF22pG94a2DPXBYAaq6SXXynBD6PYnFqSoQYDNZ9jtoEZUMhdzp2JtFztYoAM42vaV",
  "key18": "2NeYppJoU47Nv1doCRRvY2wmzL3wZouB32X8GAc4MbXZ8aQbKdzAin5zSkoR3LyPFaB2iRBDPjfywKXF6TJXBv6F",
  "key19": "3i4yF1R2FScxADfB8T9pgmFAMjbbhzYZncUFNhLNuk8mq5RByQKJ4afMrfDjqTdY6dg3sT2gE62K9qQa5EwRnbC7",
  "key20": "58uUUeX1452xWyf7dDuwQhoSYtTruvP9L9ue5AKVVaHEbMSC5wxnfkNfAhByAJP1hdqGMNCN9LjDs2xRonrrNNxg",
  "key21": "cB8AsoK6crJjrGcxaZo4nodv74StpmHFE3vRXNYmfcv9DLwYVb4Dd6jfv2BZmgfzZwYWEJ1tfswj2nkWZuw9Yyo",
  "key22": "3UXA8YbLt7463BP3PS9DFzX99T3Ju61KarJ5rHA4Ce9XWHBWpdQuVLZ2Pkhwd7p4T6pwvEN8niF5ABWi1qmMex8a",
  "key23": "2At894jSnCbTp6kqXLbTmJE2kFkbnvraNREBD2PX21okZWG2y9HbzMGasn8dsuTeH2j9exaTXDnECMCrJx11ZPic",
  "key24": "DSFAvYAycuvySbGuhVUm3FCywXKzXJqd5hC4mShq8iWtucVyvn3NMyqWDbCbTdB3GjszTkimTYwPvDN9LTdxsw4",
  "key25": "5QE7J2FCcL6yCcv1aqS77nqq5WeFEkUrn1nDBfNx1iaHstq55J7jJ3RJuCyyDDLD98L43CvafXTkrd8WwX98SJhS",
  "key26": "4dd6GMRDXVm3N3xnMUuaism9Xyzxmbj5coTqE72aY2wqZViqmzvPz59YR68oBGwMu5o5xeoJcgzor7NGLdKWF9uj",
  "key27": "3A4jurR8FqZrzbvH8RaQQkRknqxXr7mMCr7U5vnxNZtkbmnnR6BJGpFMunCMf7yfFTiaBxRuXmBhGUFkMvDtnZ9M",
  "key28": "B6zHWbc1fozrdE9HjYQrTWhB72qBDGhDTZTCGxwsMrqq9SxF81BREs8VPMq6yHZ8QZwioc8VXi34PG1iKZfjckB",
  "key29": "3habdy4GdTLtrmcmkrqAaw5pnYV23ZfsCc94kPCvyvNxyzS64SfAUDkv3mhHu57DiNqjq1qSSFGgAqnCNnthxENq",
  "key30": "4upPhsVkQZGecNcCnKy5ngSTx6C587MnKVo6356eFGh1biPRtbU4GKUzpg4ShodZniAGNptw4gnWBnayHTxAQ4P7",
  "key31": "2g3vczgH7Edy7b1RFmD4tmJPsMpSk8dWuHQFT7JaPQNxxzdKrB5BQLNngCusZjHWiSUkA7HheesfnKKiRKd2ExcT",
  "key32": "2jaxRK5FC1Pw8Bf8NhrRadza63C14f3hwButPWqHvANSucjVLmtJcGmtqD3k3ih27QvrHcAaCwvJRSkUT36ebGEw",
  "key33": "28ttj39UdheWSden7nj2FnX8HRg6iYBveZEEpFod3v3mXJhrdiJ6ENYCpSVt1icjCLbgn4RsVcrttr17XU772Tgi",
  "key34": "39gt6df1yTz6Y7kNmrF3ZmFFoZJ6H4rqvKNPNLmFzGB2CSpY5V9cxuHkhE15NUfARarh5wfUJJADL547R6BiYq3b",
  "key35": "64BrNrbm71VtbTt5fgzHCrGUCCAs3RuiuLQP9QTCAfYWZR2XmGfKkNEzrArtUtenWLMGUFpTGyjJpggCFDutSYee"
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
