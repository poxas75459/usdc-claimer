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
    "5yV3w958dCVjDxdKHTjuN5Zv9FViBd5X51aSWwmn9ersHCCx2BbXTbup41EoDfn5ZChMzSxv3hrRzgkqsbH1NAnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWvQ2wpJE1NyBtxvXzPce5wwntfXoUL3pU2KLGyuUSJFyrQKDJKsA8ds1GZEnUg2JtmCYgwXYqoBMCfNk78v9KU",
  "key1": "4gRgqYhz4Wz7zNnpGUh8xTkVrphZaAsmxsW3F9UbhV3s8oUF4X65L7q6GqeowM6KMKtknenquHFBvwZo7Lsagphq",
  "key2": "4sNuWTny94xfEfNcEPx6KUsfLN3SGE1QPWzaupz9JnxvyY9CkNsfS2Jt4oJ2U3R2a7BTMgKfJ8pZCbBpMHeeZWvY",
  "key3": "5EXurFhJTP8GirdXKEEpFayyPGpq8dtuhEcp6rhPtUDJFf4RnCK35RTkYytSLYA9zMqXgmKs28Mmn99UqCxT51bs",
  "key4": "36ZL8tsSK2uvobeFsFA9MP4n2GXHdijm12z61iN5sdnsRvGkVEgxZm9S3gS59g8LCY3cCT5ZxXTv74VPwW9fQePc",
  "key5": "2Jma3RC6bomKommfDqayBUpMmg8NVZCfp7mAsjcbZV9uG4bsBHeyxs1o4y6xjcjnabTCv8e3yKQELpxnMc3v57zS",
  "key6": "4YE3R62G9RoYyVxk5ng2wGjyUmgCR3NSGD9K9rPP13rBAHzM7KGRZM2LexArmG9WSX1GJsc1vwiP3VWeqr7gCL61",
  "key7": "5WC9CYx8kenWHeWt8ramS7f8aekcorvYjDQZ8Ahr8jkgYFRn52LgqHh6EwLKcTr5GqjCuBNc9VrEFWu8JaCpQpmm",
  "key8": "36pH98nACSsTVKh3UYEpw4XQ4dwpjWniUvVvdGVVRLmzxLvWWCoyfizXCwxFPhmTbxNT94RKwqeWmtxcnKNncuAS",
  "key9": "625p2Lxq5D33pdDjitCNm668hquPfnVaKim2Gbx1Rf8YCjuZpNe1TRf6GtDHnfDwSbJ3uVZ3dXRoZKpc9sXUjzH",
  "key10": "4563VMPGDfAn8FeTKxZXidhtM4LX4f4nFLQuNM7rF64ygm9npXFBLHmLzNnHPNMiuezfvfMVo6i6PPPTj7jP24mP",
  "key11": "67KzVGssMy1qjvq2nxS456F7z63ffTHtcj7wr52nuWj2j1TUNGiJTLcdhbWH7Qozdt88vo6LQqRgq2jzDPQCv8tu",
  "key12": "2R8nXbMzYynpTTkxsF9ZRDAerTNULY81yVUvtpUd95yxYJmaNYuMzs8M4vfegBEZXmSx9nTTkb2jDMEhYh1qL1Qg",
  "key13": "Af5Fg6mWzqjrUEZNSjuym9hZi3LrSTGMMinKLz844JXJzkaQ6sgRJEUXioymg7oXEkgeJC4EyEFDMcVRpZsqMbH",
  "key14": "avtSL7PECwxFeqHmGVWUqFLZBXLJE9Wp1ZvLEqq8wN2grcA3RHErkExv5raNuo3pNLBaNz5QWJzWmJvyC9znXej",
  "key15": "5dxWmYkfxyZRKJo7CB1dFFy64Wu4xkKXQPPep3o5ZT2ipZhj5HfCwDDUKd5htNA4nj9gBSFjPUQ5abireJ5GxqqB",
  "key16": "4ewQwmRzS9xLiyvteNhWzjAUuvM5QaJNfRtwiT7zmh5npgQwCwDtSPHEWvJojxoFMdMi8q5AXDQWXgVt7Q9T9xJN",
  "key17": "2m2zadJmyGB2bm9AZe4LKwWKSRGv3X7CARADkVxgLGnjxaGhfstYYLHqgi3dUpDZYdZsULuZzyBBXqini24SxnYV",
  "key18": "Jectk2VuHBsGoqUX5LisZmmovD68rm8Npxvf81GqH2tTv2s3vr6qW6y8Cg7K9BeyTVAMA84hsUERDu8vD5XLUH2",
  "key19": "5EMQibTdcSGCiUTwE4f6nPJ6xRZK3zYjVocnbYoEYHM6TGxq62AZYj1h6Q7W1A3Ndc2exWygfKy3ZruCw99nicFH",
  "key20": "zZKbwDoRtsCacuDFXJ6UgmkDN3e22jV13qt4tCJpcSjm648Ldr3T8pJ87ZB8hW772YyAkRE6UT1q33o6bUK6EhA",
  "key21": "523PkkM6BNmczRZd1ZPnnSYq3eRBSwfPN1fyRPZ3Z1VWQYT8YT1a4f8Hky2SwByK3vAbEHbKg61zq1RVuGZeEo3d",
  "key22": "443idXcpU9qGWjpckqZPYqVeqsCjnJN78NeqtUjo366gPLcNqWoY3YMHAU7PAATPigeagNV4kbFRDaD7WDJfoQQn",
  "key23": "5J9Z1hmXv2cNpH6cTDJCpJRvkiJcaLzL4PSCJND1xKzrFgsUvUqUttGGTs4LXkPspPFS8uFchMgPdxCyvTLhVaGY",
  "key24": "iufwVASJ6phajcNr7jcFXB5t2r6tifbhYFYwZP9D7zxPPNfRQKGmxC8JCKBXwbnzjYy1qzigCSNaNK9uvwocWjG",
  "key25": "NVRyhonNcW59hEJ5eF9XQqNTzqTK4VZzNwxtprKYR8bPH18DbuZGycp82DpeKk4t5rzd7VgUxXLwSQWsc1qTrhW",
  "key26": "3ukwXdzBz2mEVL5TmzLHynjyq1ZF1SqfxnvCj4oJAKPfmdDRX75YBPeuECvJ6a29YqLCxwMA6DCTRfpDGhPZzXTP",
  "key27": "MFMsyvrhQqypZVKGagHkZKAj5kMAPXBqffSHyRHjw2ZxYTbBhNz95UPqrun9jGCLtbY9A8EWKjftuYX6uasZ4Sp",
  "key28": "32Xo6iqDDYBPdb273qsePBVsP7eXHo6tJzxSpYcGKwm3JfXk3Jj4nKqLiya12wGKx7VsGcLeS47XDybJKR1GVCNc",
  "key29": "41kWuiJMJFaniimi5UU54arUAD4VL4Y5nF3nhRyJ9oU82ShL5rtRVBrxcpahnQCeAhXKjZERh8uGZgdFSXsJgEw1",
  "key30": "4eUU754cHtbezYJ5VqFGVkHeW2ZAtieAQtXo36Tqt9mjqDZdt6Zgio696Zj7J4Nui4ULXnH3M5GP2XJDpwVN1CB2"
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
