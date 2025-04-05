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
    "5bEdyoYvCoikatsHqNq6zdg9ZKifBJsHp7vWgmjbU2oYy26XQJev2WyS9fCJEZQvhRB9a5VysVNcPJD6wZubHHiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXrWE83Amixtrciw27Ay6xhNT3EYahVNHKMWnhsbNp6KWd7wtkhnR8PLd2fQwTP6hKtdtUU9tedYmCdSQnc1AHw",
  "key1": "4GDyen4N5D9VH4ZsQNpHNWmVsLbUCp1dTKXMP7mdfQBMQGJ4VKjr8PEr3dUgidyDuPr88pgTjYExmY2M5jY5F7np",
  "key2": "326ufhyUQ3TTnusFe6MNVMn2Hdc354hfj5NzBBv6P8e75hzgj8XcLgp7pf1fivjfFS2ETkXuoKNAAEbctK5i949M",
  "key3": "4nc1qDXR6XLXqSgdUbvWtYeTeVNmvg25Akor9EBQXWiHCj35r5mLjryqkXJ2VXm7oq7SAz5ZqrhwUo4fougZEqGb",
  "key4": "5vFhqt5Rp1ggnn1ZsJDsYzpZzrozkNrHtgib8qxquQtn5cxxto2JBpXUMqi24xJPTv5CybzrWeKeMSB3fQRJESsW",
  "key5": "4o9tux8wNoP7aVsS5wj1615UZbvTkmuvrTy3zJnkFM8FrhXBVJ95uSNxiTRSwPBVi2NtDRSvSVYX6rmptZmuWtc7",
  "key6": "3omUZYHGQfjWTsS4Dr3w1upYKDCzUs1J9jdJ1P4kNWCHtY5GXTuiffeYCoH4idfUQauzWCb5c5CQBgMwvNuqv61V",
  "key7": "4x5tihxwyjzfBJFBDjazU68rfPSLXSednCxTk9sn2b9zkjQ9Koqe7xThJKdQMqPtmAe2v6D4uJZG6P9VtVBDxpw9",
  "key8": "4XfGKH3Z9jUNGJxmX6TsR2NUYL62q4m4uDCStqccfNBqMP8fMWCdPfJ9YQjwLcE1C1jonPKaS6XmVGtSwzVxHWn6",
  "key9": "2Kenbw1sw4uYQnWcGo4xQdU4b43U37d7Bto2UW9CBGZ26gYRT6cQixqeUQwnTjYkvFXynR2qE8ieAxtov3ptcGa3",
  "key10": "45dkp2oPqWikbKBmKMBTRScPCUV6reeTwKis7ywxo4Nipj6p9evCCL8iqGpf6Qhn7oXCCRaHhJu1r25ANabQxgFY",
  "key11": "2m8ydDJgsA1wpWCjzw9iuH3jkTww7chBjj3v8tPSnvN95wNrpPbFodkPyVCo5sQ5dCZsD6ysRAqNtj2Qc28Ud5QX",
  "key12": "RFd9w6hBHpb3zXBzUuX2nnFvutgfkSp6MsMzJ2ncc6d2LCz5t839bszLtFHQHd3MX3AgrtbzMntHNVjfbxZasXr",
  "key13": "2rP8dBouHTas1RELWr12E3gH9scJRtBYidbj2JqmtbYTQYVHLcDEJf5fsqwaoStGsnw4p6PPUodyggXSH2QqA8bn",
  "key14": "2pbuDGr3u9DqXTK9nKGvfR5xntErqjC9jX458D3F5tsvErTp4uAKferA4eJE2pvV8w4U8gG1oVdaMzbt93SLgLS8",
  "key15": "gamSGLhuPeprBGwT5m5Q1PuXcenVrjQxPP1aW1DBEVXBj8Z4b9UYmunGXorvLweL2xTo1qnfQDjVUqzndAcTuiN",
  "key16": "3ic8FA8xohzMu3VHEJurL9rBhPcqWVwQVgzPjraB37MBHWkjPAvsurx3V2Jo8jfgrPiEzR1qCAMUsMwcmsjXHm41",
  "key17": "3xjAZAosZbceLyXmz52HGGFu5fuzQxrxgdN6312NEN2mZTfXqzCf4B5Xqkc5GeDxpjBTB2BMbyuiTnUyexDsE37J",
  "key18": "4r9CpLohPh9KGnTHUkqX4W5wprq1J9ZBXUDXUCKwifjdMVtomWEovnHAgX6kZtY69VNiwXjkYvL2VZ99VjvpKikX",
  "key19": "34k8RqCG85G6TdpU6DT8CqPAfXhG2N81T3RJZkgcQnC9MfuEoDP9EKrCZQVEnE1ER8co9ARTmbwbuXxv3vEDmAUU",
  "key20": "2wnUx2MEfJjubzgB32Tb871eE5AdJXSCrJMvAJ2C13JhUh5AFzWBUXrgS1Z4QJ9TLZUKytyB9WqVerVXH4MHMozp",
  "key21": "3fjztGtcujc2jtHetdrF6pmZsLniVGYwZQdAmkSmj6Vfgb3q1JYBQoWzY3LWRAefeai1nTQvzfj6dBdyBojHa1GN",
  "key22": "4sLazZgeHjBwQgPzmnAG2UDwh5taDshEaEVX8TJnC9XcZf12QTctFH5HqpaAZ838wqRXsaCUnySzm9rKBaCHjvSE",
  "key23": "5zcnB1QqHLi7DNqcs6hBMXshrpmQgnzXcQ1d2smF3GqpR1fhs4H6sL5Ub87aRq5JDwWHXdiQYjafy8SLiuUbp1V",
  "key24": "4fE8yPZhmsAjpXzLECw31PYmJ3FNAw5SAbQRUpaucyHUaUNe4BpxCUo3FRyijz8iCPutHmsr1PCm5xdm2sRxJ8rg",
  "key25": "2rPiv73RgdyFxKkdpm4e1qtzd71Cgc332jUZ1pGcKJrVrX7ULJi8e6wSqzPaokfTErjG2RrKJqFEzN4TbW7K3Szg",
  "key26": "3w271cMuzDTQvvVzNMkyLYHfDe1FfKn3tPqNsaKk9kwBnv16TQNa7pgEGhMyQKGimSRbxb5nhgNuZhaFX6xg2w7c",
  "key27": "H6tnjSjzauaF7XefG6kxxZAyFYS8repph8tUTxkm1WTTRdj22hHJ2fE7FoBsU83wTCxjJeLhW3BXdQV9qKpo7VN",
  "key28": "5HmqEQJohE7Bqdpkfmeor2BDYJMYJ9j68kxruwfaNgSBD25rZBLVAo1Y2aarmqA9G4ef34qXw5dkhpuuL2JndkDu",
  "key29": "3cbnksdBezmud82hWKzvU7MF6wgNue8zbo27s5aVWUpVzkttP8QNMS4x88vmaVsL7EapoNzE9oqc1exkeWFR55MZ",
  "key30": "8Y54bEi7Snd5Gh1Z9sJoQiJPwHFE96ZkxXrozwoSdknHGZWEv26HEScKxaEzaVXjmBTaZJEs6j6N1eMCqRf5tMB",
  "key31": "vyn84s4QZKookykMXMSVCHw9jxQArnwT8bKxbUBvGVWWFBhxJ1SPKJyaa94KUhgrT5M7GcEsCiwcKr9mmHxqv59",
  "key32": "2rpP6f8WJggpRU1Gr55d3gfDqeui5qDgrt7JA9qks5LXvGFfmSnW8cdUqUm3mhyNNPFnXcPS33fXxu6hBRADYQ1U"
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
