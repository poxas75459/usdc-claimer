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
    "aH6GqAPhd7YsVHhEqtdpxUaCchtBq6bq9DtzpmjyKbKuPR3eKB8FGKLYMZfC2BRKYqeFACRmjnopGoDit8QnXAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "weVJDBQYvswuQkdLLq4mMmguynaQE2e59kLM5xeUUqpQpP1qeGAdma3UvhaDvysRbLLZnxfnSEjiqqGRnGB2Kuv",
  "key1": "4g8WSH8D5MgtcENQ2hhKpBcebDTzVzpjj5wU2m71Mzp5KwV16Jtxajey6U58ZbGv7jP7U8pq2B2U6J64JdaYyZ3k",
  "key2": "4r8mG9jLfJzNLAZE56vcsEZDoYKNxWSSS3TQTMwy8qgCa8oaiGuyDagYtoea1uaSYhHzmW76ozcTqEk8hYTzhLR3",
  "key3": "5NxQwg9PT6sCCsyHpD8WpC77efvg7jtYTaRLhnxEaEFtAmMyeUEQ4XQj9XnKJkr8tBEubCGEopC3YFZEQzYmv3Mu",
  "key4": "65bfJYMLvob9USTd75vfFpxgg4Gw3om9QrDhAds7R3VJkbN872Ypzb2p5SVvJVqS8d5R6NzUNE3DfreriQ8UWjZA",
  "key5": "4zbbh9yjLKXLLooc2bXq8fXmVpddzqcm5RSSHtAt76ssb92taKy8RSZU96aSBWEAGJBtz8xCiVobQWNtCuW3CXKd",
  "key6": "5bFYkkmFMnKo8Fzinj4nwaZJVNBXfu5VGZtVwyQdo4jQazPuzhTkYEtsnJL1eGVN4kgEUrN57mJ3EppaQLjUAhpb",
  "key7": "525oUhzPkyz4ZpuNy4YeSZ25Dep4i8YW5gjUQLnNHjKK372cnjBSs1WcePR39bHhdkkiHK1EZ7xCmHJjn9dF7Dmo",
  "key8": "4XW2ogVmazgjK3ayChcMkNqKnUAdbYjhVagpaZxTTpYrbMWeALYvAJfxEe3vT7qAsyvtFS42JtAxbjFxZwmC93C1",
  "key9": "4noRCfNzFdxr3sHUzCDiVpm3KocigTjS4YQyZPbChbxRfTxn2Kvc4qqVvisU9V3hAGKhwpDRjNDeMERgnen2hneV",
  "key10": "4QLk2xa3fN5y7WZHSjkLcHd7Q8wE5cxuweUBPwgLc42qk2kYWD9xR2owTiYaWbbNLYngHoqvBCq5jSDdL6jQYDjh",
  "key11": "QCE6b8TcQx2PdFv4qgGwQUuApGCPcj9Mrw8ybyEvVaPgbxFfd59ceuzaaEiKhbVnP5uXnB33zawCGn53EZNF5jL",
  "key12": "2EK56rnjL4nzCCkMYq6hq27Puh1Nqjcmakj9Di6VXPnq4czwXbvFJeh1jHh8VLjDs4N9JWiwvroyuFUUpGAxRqSw",
  "key13": "2KxKPC8MJwbKiajwMUnZLK3dRxUmBzYVh2wkLgxgKqQHXawq38wTNp7rFeRBw6tAu6PM6KxyYfNx8pkn9cpYLwxc",
  "key14": "3KQb9dRWwXG5iy5JTbXvweu17FN5mYiL4jbanzM7oPGqeekZ2o6gozXBJzsCYvtwwE4DKxXsBuSir3ztHKmhsvQQ",
  "key15": "4P1bwaPdiMF8kHxhM9sq9E9AZSmDLFM7w1CYoDhdwBnDwgAd6sm6be7EcNC1H3MmU6p3xxQD4fwVXa1Qk4WMRxyF",
  "key16": "2bTufpt2uTYzhVVD9oA22yGZ4azNimthqfcfSLJHyTf6DFAu7foxVKXZR2knQWQDsBuvdkDeN22XewAshJMK5gd9",
  "key17": "HLPAQEmCqJWVdPqMPsSuvGFhtxFTfk1JNJJTzQh9JrYCK96KxYgQsQLqu6RavwNeHESSiHeDdzNz34Q7pDKx32x",
  "key18": "VhrPhn2kjDkJ6bZCn6cwtmmvxmy8HG3JBNFyBvJHMtUVB6NuWa7hC3RvnjNBHpoLYgkHrjHC9t9U3CqUKCg9J64",
  "key19": "4WaziB7YEK86LA8yHq92Ctt2zwVDV3sUWHTKh5MsvPd7XdQhjyUv61BhWAvQQJz2RQuRhUH6ZyDjJPFnh5qLPEio",
  "key20": "zXnhDkzXx8PHWJoP7fuGZQQaoVhXMYmjS3B5Pp112T92cbBoDnnT9V64JjekZD2kwM6aV8huzgdc6vhX4qYJk5C",
  "key21": "MPWEBfVRZbg2bNTQx63H9e1R844GTWX6t9qkkTKwWdLauJqdX6qimXpvy1ySFjj3rTUVRygjZY2p9KTZFXcrFta",
  "key22": "Fn6iSbV4mcvqGMRSksXiKLtqRHuPNom3kXg2s8bePVMwd1WBNWBH4YMpNfguqYL9LFr3Kjz9VVWbdh2Rqdg3ufN",
  "key23": "36pJfQPKmqGLZtsMk4mYEV9zeNTZkpNMefREsCCNc82kY3NabzCb8vh2Z7fYuzYLXbNwhHW3RxMAVZBFL3KSmzGT",
  "key24": "4LZNy9BJj9UF93mnwCpvVSoqhE2cip6wqMMrYhxRAXLtTAFh6FxTgLEj8UnWsqyYtzFPWbopLKtZDMTi5mWVCxW7",
  "key25": "5hogBX1xFnCR9Du5X3sEbTTDerMcGZWkvVeaUCSEV8ipGSaHfcp7Wn1XXPodZDFPceMDygfZuyzwhytrETD3MzoE",
  "key26": "4uuRj1M9TFaZmmp7ik7a4TUn822WWa3QK2Gcy77jsWjEihWKzGZPmGusu1T4dj9urQjybMb2ascUL72Szb7Kqkaz",
  "key27": "FV2TH6QuisJcDGqP8BintY8kAxsp5CcG8jrUyrddMqG9aa4hy6PBmCU3Y3yxZZSdcfAUTY3Vy81haFZaKtC1Dfk",
  "key28": "5KiyCQnz5SbjynQtq4BJ3fPCuusn2e3Nusb4Y5V5xCL1D9DewfXuZrVrNeuobRjH16UCEzwpnw7iRd86p9wL1ehE",
  "key29": "Le9fdJiaNzaLsUABr2WErzgSUZUDufHNnVStW5wuDpaCcYEVFYWNSXJVBfvGzM6648MUKeuLEC7ZGjwBHLVPrZT",
  "key30": "3uzEBcCDhVtFgxWRnEFYyXTSn8WhRZhmAPtdcoLibuceQNuHUbDVkWncQMF35sXgbaxqJAY3dvPgPu7S1AXb5oLt",
  "key31": "2ZE62xR5aVYJYmGiTEK4Jk78PfJk1Tm8CdiAdvV4UaeH54gJcDpm2iFQBvYenRqSuWhegVWixwjJC9WFKTXMbPUQ",
  "key32": "2iuw6eBN2ZhXscEQHVMfFJfbetMtmjDxK5XZYt4rUpqaMfCoh1UUMsUe5RkwXhgYCPEK32gSdTijnuc1QASRf4rr",
  "key33": "BEpspT69m5UR8j1aevakNZjxcqqLYMHNbai5qgNmW2AxpcEPtfzGQDtZqzazMRQw7eFC4nep3qw9yMmdi3hsujS",
  "key34": "2yAVJmz2SV1SKcuc9Fpxxikw5SRrtaxkhUqMj6fgn2ARS3u23co9CzBnTM86K4AnnBDbko7ex27thWiJm5ozCR7S",
  "key35": "2pvvumCp7F8isQW7NRPg2W8UC9LxXpUez5XWM9h53gfrDo8hcK4vdtrREteMUT7rYXgDiiKLWeKJJoH2Q1azac1e",
  "key36": "5dPYHM3ixRcZToi5vJjcLLfmxZ9fguiqDywx9uKCijDPT9AkJoVHqTQ3zUMQ45W6FU6R1ZLtJZLreCGreg7zR5sv",
  "key37": "2aqioefWMBsqZLo4hrYLdEVmLyyEGdS4W4hHYGSwbuQdGq387FHH9DKrUTFQNj2MnThmXrYtdJGDy7oFfiXv2NWV",
  "key38": "zGKPTk7whLfCdiWGbNUG4MnRkeZUKimCj83mnWUQbr3booeW6G4a6dZy8nqr3QhqwbFwZTU4zxBLeyPtCexyCaW",
  "key39": "5mWeu9WPbpWMs9ii42xMTUEcFtYaGDntAkEEN7yU2GUJ3Tz95ing81beCY3daTqujAdMLGR8974sNsZgHcP1xsV6",
  "key40": "3syDsGtnSMaL3CDdR3BHz7CbPnQoa5uT6CdBtx9BHggT5QUaWJDpMZ8EeewnFtLmS12K5puE7KWGe8niSL9ayyMp"
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
