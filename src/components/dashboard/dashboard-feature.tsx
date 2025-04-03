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
    "4rTCgzCDVqiXKMefkKZWYpctfMALCt218E6MSbbHquLJ8k3dt2tToCtTbGiRb6PaZx1rfARNNNCXF3MwDFkLcxyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56CzomYCxgc3LKhEDaYyV8mG9bQXxb84fio19AAz8GNrE8FZppa96xNVsN7SF9BoLHixMhgN6Re8Wy58sQpuX9Ln",
  "key1": "NaNJcdr7sA9vAzK2SWKZe5AoFrevhDDaDjTZAgtGEaPGdgCGwBm89oLoS3tMrzFPcvnCnEsbPt64Nf2feKU6eur",
  "key2": "3oVLpPW4aC2oNBs1sNWqvQiJyhhsXomwsPkJkvUTGmN1decPRcCkwF8hmzjmre4Hh2m5VfcrZS5RXKhDdxrE9FsQ",
  "key3": "3CWirCmfJ5ZEtef35NjKSavB85wz3q23GefHCJhemaR6oUcqMH6aKxZndwmfDCAbxjtUxxFmrkRhxCMtyYXpL8LS",
  "key4": "3uW5oWEQjhsY6GKpvW1kfVs79Vf1DVtDbyXUxs1TxDBNQyAcGJsnKDqjawvxa6keLyYmcYW4pwNhJ3zG56itXcfH",
  "key5": "ekZWTdXN6pWZEVY3AV4GF59rcsfEYGxg73v2FrBuDVPiAcrGif9dthKxUhvAY79L9hT4DjZBQJZN2WVtp9toVhp",
  "key6": "eWtCTc6fgkw1rPytVeto56YFqFRpZVifMzTc6g2dtsG3fAokEsrkbDM54rzWHbRpDJ5Bfn1SXFyspKRYvabR9yD",
  "key7": "3Fqed7QFatTAktKT8mU8b4VANutdqoTkAQtZziMBUKLNdpnVRxDohLH6Qt7GCo4ufRm6g5Zg6ey98SNkHhyXTsiR",
  "key8": "2SGLxMHjisM1Yb1xHsQuh7us6MjWBCWYJHprsTyH9bYgLmiYyJ7ZV45UfSVEoDGGtCmLTaUBNYsyZb3phWbndaPE",
  "key9": "41ce6XiT1VQ9NxpLbJQ7ySotifJ95r5DP3Ee4qNpwLgVeKFLAeUDQ4WnUsNnsX26wCigBA4EMTNRSjaGiDQNoSmx",
  "key10": "zx1fePJW8mm3B5Zfkz6Ww3WFctiFbmh4rHmmS3dMtFyyimuvq27FgZDz8rBcYuUHJ25eA8QA7kXJrG4nsFRthZr",
  "key11": "2V9kwWYNYBBdr9FbgH23FX2r4TSVzqHYqGgipXKZ5DTMuPhroygKU1mpToEARr7u775cRSGxTgLPY1BTGLCDFXto",
  "key12": "41jHk16QshvBFoN1axnNhK4XdhZeTEeWbxaCqheBQ7Udvq3t72GjfcZd1t2npLn6Bcg12fQwp4tKFWx1ShvxRvPK",
  "key13": "2wnEbuNrcSea5TBicJNwg7rtqdyjuXXXdKTskYYHdQpNocNH41PXyV8VnS9d38ofzdbCyyc6RuWdH5tDa7af4yb5",
  "key14": "SKPHgiW5znhF3AzdQ2DgYzDY4hcQHhYQavFpeafbU63mPt8d4BuBMgJtgqJECii8jGWg73XgpVjfy5RMCKeJALq",
  "key15": "5x5upeiGbNbNRLDJ3eL4rox4S3ZjzR3pywj3bK2KjXZ2Vr2dVY9e7TLDmq6BjD229K6RdkRxhmjJy8zxAgu4TVLU",
  "key16": "38g3Va9RaKL8SvwE2XKB5PFGzF4se1PMFg7ch5TmGYrH2hFVzKq9A4AUEWzMPLdqmR2Z21qSDyRT7Lq9H2C6GagN",
  "key17": "3PGHN2HidRAukfjTTwt8aTpk7XET24uFnB37rdbb4mMERqcSe9MYXGt6oj3kWEpRZ34gWhGdh1kwbXqz1YRJUpWw",
  "key18": "5cjq573bjJLqmrvuUJecFDrmmvvLqy7WHSMMZwoyMh4iBJkdN574H6EraTaHxv7M22ncGqz8DEdX5HsTnxg8nhfp",
  "key19": "2z4NZi5A9XiYLikQLhSUN783NRu4zc2gu5eQr7ezaTNim2mt21xroK7o1nk87dytuw4JAXTLuJfHwx9pL6kTvRqx",
  "key20": "5cVYjLfgrH5XhyQjun9Li8YR2rPveZ9ZaaxWKmqVWBMX3aYkMRz7MDgjJJ1vc2sgGYEV6nEru9PuiPzSEYtX3Wxw",
  "key21": "5gQLXD67E1D74e7xjEkcE6gFgtCoznqLYRawpwnbYmfZYx5Ekrf57g8eDyjBftADWWn5w37AQsfcYoRo4TWAPC4q",
  "key22": "3NxanJMyjarMz1UC9Rux6Xa9Gq4CVGB8Fr4v9H7tRNZiTY2hg9SrjXXFPApEHWJE9487c7NFERFUdzGd1P6trqP",
  "key23": "41UefsNUNZoBewTVuPCY6H3e24RFXfwzJm8ay19VwmcbYYPoDbEWqg2DKmufR6iiWbUFa5wHyr4dsAeQ2bRc25ud",
  "key24": "22E979kb9PFYyJq14NFhVs7gTrsTSbCJ3CAMh2EE88wCc6y2EPx6QoaYUq5J5ktdCFjwBLgqczYb66LrkA6ny65T",
  "key25": "38BuFPPbTF6uKhpsMbXuxpeMSEXujnPigAsDFctsz57aSACo5A7mSmsAWQ6beGR8YWmAxdV9qTgSwMxaXnkwJ1Ci",
  "key26": "2yTDSXkjtnQYkXis6ZFiwjUhJKR4JKXcnwKzKSKmVtBwQLjfFrHVGHZkwtK7inro6F6sMEYzpfjApLj3JV499PQ",
  "key27": "Fb8iqksD2CAa9qTuxjMJ9uLoz423XgAwc9phgcEm5ST1gZ9T4E6ao49fbvSbBuWdmnUVwRPWfcWi9ceWxnd144P",
  "key28": "4n32KtdV4ETAdrnaAVTjgdFnEiCMk6D8r2DfwtVh4eTemXX61Zhm6BrLPZUJ53zUy7ZbSnjPzE7W1X7R1DuodG32",
  "key29": "3Xsy1jQDsdrMG9uF4Qce8PWiLkQ7giJLBUMJhNpCm47dZXtY426kvqebDDgeDTcoeNXKFNWpQhpbNLp1S8DXyeY6",
  "key30": "4NqtJrLCbNGcrdB623BApr7vVwBJr1nqzq1yxWjeGvN11NBntyq6yxB2iVXLueBPFjCTgXdNuB4m56nVjMCaKhHi",
  "key31": "5tvXTXrreJotQsT86kDhrQ4ko4hKHVqPvWHMx3oh9wJyFDRgKbQSpX1nJDRWiLzP9GEnr5DXo2vr3oS7A31EaPjZ",
  "key32": "2Eze32nxEB6eyVXZsCkAqQmwZEWWHrr7sHqSeBZmwi9LZY7ynWWKDiSqLVSvQLgNRubxPNR1NTpWGKL2rZbd1dDZ",
  "key33": "5pLNiNrDLiJHcsTmX9DaxcjRXrPsLPSNTY6sG1qRS2ewFxp83EhaXDVrATrUth7A6T5TExAP99kTKJLqdGA1evkc",
  "key34": "31UpL1VAGJwGwSfzW9PbYytrJTbsmL52X4Jobgd4ksF8XNiTAVYsQ67tfF985uVrUSAmwCffLvcDmLp53a1WQVNi",
  "key35": "4nKEurLHNCjG266FMHToMBRVWZhKYfZ4EDHWRuSCjsSbk53o6mi7JzDvVbBwj6fb9m4yMarPGLEhKsvj4RDHXxep",
  "key36": "26t1k8oXHQYb5U9PqucQKYs5Gd7Ja3ndpMZKAbr1BiW3HG9VxYMn81cUWGZNjBuRXQ6Pwfv8Kqg49m1LGVcyhAYN",
  "key37": "3LJKPKxvhyhNAu84pGQj7Ukw8QE5Gh9avH1EEUixEV5WTfZyHYNcnPeU1HwzEJ1XTMU6mnErRsYmxevLsvjpNz9W",
  "key38": "2p7C5TgpUGouscvMGa9zB8s49F8XEjEi9gjAP4DkjDJUAkpSGSB9C1rynMad3y7hAo6J6Nxi9fH2sDRrK3sw8VAS",
  "key39": "62qKmUKTXbJNhy94b3Si4Uwh5MsTfsQoLCAG1EgSMJSjFtfaYigiJdBXCZNtNsLKDMa8U8gfSQ3qrFT5hPuin1Vz",
  "key40": "5jmHoYjVw9HfFWU24A4ubyF6BnAcF8CjptSFriZRGL3bhTxKGVKwZ54tSRpbzbWkwHmdnYi5T4BW4B2AkxbZHxSe",
  "key41": "2fUCgG7fEwxvuRCM3QBKKW6yzdmz5Gq8Mt4hUEMUmtwzgQQHDB8hRLf1r7uU5ZZnZjJHxhMS5bsrai4dkVdUXtqC"
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
