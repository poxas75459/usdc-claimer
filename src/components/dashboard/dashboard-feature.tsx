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
    "4ngNxLEjgDMfjJ65SBzPG4VsjuVXn1xim4C75gdMaxEDqCA6pR7feY4ivBDAU3VUeWfzTTgG7q2PmNDa7dJxrAiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24M9xVVmq8J55jGPcBjSEtsQtFT9wnDYJMtM3EKR83X9yyz9qzgPNhAc1PF5kya2v9iW26W6RcaEAwudL1dh5MsS",
  "key1": "3Qs6BQ5i1uo9XFdKmbd9FdmzQrv1iVWceZ5zptAZhnpzFYWMMFQHjcwfiBGv7iUvsPPWNp6bfHzF9aHQC5J1m4LW",
  "key2": "3tvr8D7u6eKfP86qqGLLVFYrADaMGyHssDBYPZGK6hvQ1sBFKco9jQd6DAVWQDqmDjgFDCjPSyzAnvXkJMHqLaPe",
  "key3": "5GQctQywMXseEByAfVPuxvqxbCmGhMduyHhULszPgVvkx3PGyuzKjf46iwCawRy1hCy54Y8f1LM2jo2t5WGYURJm",
  "key4": "4ZSXyiQpRC9nJwVPme3dFETzkuRzQDpgEGU7JDW9FaYgkMquFB2uS8UEw6wDzwiKRBrukDghpDvgUdAJEABsrsV5",
  "key5": "34BknExaPViJo67ke562Nk3dgMVQhQvorBzvCxbNqmnWGXTuu6qRuPW1s3XeJrqCxEstmwmitdkfjMxncYvAhaMv",
  "key6": "4hpirrEoYKw5GVAHcvKp8CKLGsB1zF6w65DNpPu5khpAAeW5FnFjN5XvKhb91eD2mTqDkLcwWmP3ZRwR37n7a2eg",
  "key7": "2fqwmJ2L5jMZQ1faBSAbgDCL9LKKmwzzScdb7aSLUeJeVULaKmgpnJ5o5FNMJVKRLaFSrFUL8SnNWkgetEXi6Tyj",
  "key8": "2eoxYCscEmcvcXzYkPzvRpbn76PiPF2pbTetkzP3fMETuDjjeLnLnyKqVj6gvTit53hEv8QgdSaVAdfwd5fXrAHf",
  "key9": "3nAaCJq5fVrc1sdcK79VUMwrPoiwCvm73owHnQNNQjQD4V6kJA59LXhvc4tWtFrAkngay9uLcdHTRaTqmLcrN5kC",
  "key10": "2Q6iLx5tRiN6RdiGAZuSPBeXXH7Rsb9nPmbiEe9DHJ39agDAznDvY3NRGUPLos6KVf37odUiXuSP2zjM8vD7n66g",
  "key11": "3oP1PqtFmDbfnVkUmcnVi6hv9ueQ5fFoqPZxPhuqfQjgbYLH5X9W6jaLU9NGpRRJ8WRg3UnsBRnEniwZeXdHPQPn",
  "key12": "5v27NTNfCWCanTp53tMf2SmUoSZFyR5WUQF46MBRyWrPK6oEBfUPM9udWVyyZZwnjduu3JHeYdAo37beGq89vFnh",
  "key13": "3ya8wGS9jQ42epEy17HwsS7f1kZRt9RruyyydWP9UbKyMJgdGFSqfmUHJDQt8jMaVZ1SwxNU4UhycmdRGP8xhS69",
  "key14": "5hYv1yBwY4qb8VhVMMk4ja33bv7SfZCPGnASvoxAMJ8kvBYcG9ZfPZ2TCZcxMjdHHKL8XU3o42CZPUoUdG9octyd",
  "key15": "2HmYQwokJSDTvsv9HFZnpheAqwcQYHDMYwF5uHP7A2GepUHGVZnj1ArxLjGM9U1ukyDjWcZzK3gi4KKaysMaTaWX",
  "key16": "5tH7GR6LgWZ646Mh38LVEBJ9wsiVqjoAZoDiMoUPGsZsBhKVnL2oFwwiuJabee5tbtzgaEJD87gV7nmzR13JvhhE",
  "key17": "3pk8w8oE5fK8qqA7B17TzaP69CawFt1L7WRjXUvd6VCrfiPFzvrsZgj7yV8q8v2Regj6R73SfdDzKzKXXMrbMtkP",
  "key18": "3pqLb4msdy8NbHH28ChZ7tm4ccbQvNjRDfvod88AkTa6mbVtqHyw9syRaJbAwPuhzDndo9d1Dmaauui9kQ1vK6E2",
  "key19": "3osKBPd4fb9WKu51vtFLx1rBtbEBxG26nCopwAFTDvLE3vMk4xCgWz1BVT6axTaycPXKmQ5x4tSQWkbP1R3pZoop",
  "key20": "ktVfkgGpoZxuAYm2BeSQiaJXjh4tvGfU4KFGSoYNxBRFaHcGvRJJwpS25PffHCozQLxAbZ1USUQZJUzzZoEk55a",
  "key21": "38vhjTFGHeN6Rku1m9UeY8HCFkq2kMMrpGvCVddsN8WuKwXFtKLasZDjXVBtF4SM7sQkWPmVwqH5PxxsSKd8QgL9",
  "key22": "rbmP5JCKDZNNuS929ckJrRiA6R3X23V3YDTbyp6XAsvvnBm7ANmvYEnurASFxQ1oEGxTZ2TUwoxUBJDiY4aFysj",
  "key23": "dYwwV3ZdeHorZogjTUckhwiqfbhvMBtn2LxDTWnEpKa3qW8HVvU8a5oneX7GbEjxT32En4BnisfmnQEPZ5Hbxa8",
  "key24": "47kuJV5x5dHhVx1PTbvZKmUpZNFG5SDZMYXDpAzwmmjwMgQ3i3ydepifmoNrRYPpi9HvjJZcbyUBDSkgmy3E2gUU",
  "key25": "RvvnCaVhLUDdBLwdw4bM8KHc8SpEA1XzTepm2Z7Qc9kN7mfGdMQwEnzYSowM5fGRPL64AdXJFjja9xLxD9Zm1T4",
  "key26": "52CoFKJ4zTeNNrNoWRQwEY8AzuE1bbv5tVaoSBhGwAwat4H5vtS7FZeeaMfESbiuDSkRyKy1PJHXsbNZUaFiDXuG",
  "key27": "4Cvp3iH7omBNQrFSa3Nem1RbZsy6KrizENAjBdes28yqzrTod6LFxTKcBPwWYC8TPDMDxcVdkcscwvnZ6n8dSiMz",
  "key28": "5XFviVCrx3P5PDb97twZYTHHeNs6bGECvXaMUSWrhJPkjpE8rnaUM12uBi3FpPEXFyqHkg4HPJ5kProcKEywZVGe",
  "key29": "nvxq7CqDv6cmCBK3epmCz8Zrgkrqg2qhYGd9JfFp3xA2mSGFYbkefHtgMYxuz8cC3SFCk6MsGUN52JoHt85Mudq",
  "key30": "57bEKU5CWEG1tEdC2tAR55FvQRDt6Uqx26kJatCrUz7xPDtoHSonDaXiW5Acy9n3FKgMTTWSWNuBDg1Ek2FkwVuc",
  "key31": "65w2X8Kfedk6yW6HGF1tnZFEMSzvHmgMNvQ8X8Qkt979DwxnCcDK1Enb91qBRQWFacfatGDTnY6db1pJt3j1srPD",
  "key32": "5VgxS1UvWqfqjmeQX8zFbKXa9PGv28c7hw1tocn8vC8NHoHQYD8t1JJaPhBcoQxCX7VGCAbvAQcYNMB2MnNiwmNG",
  "key33": "2zFP5A3SRxJALiAwpPu2sqyyLXXUwwvkMdFYKVBPz3WUFG25fkHgpzn9qVRD7idmv5t9YD7Vt8gkMNtue1Zuxw8b",
  "key34": "3ekANZemovAm1QriMCh5QGsj53FL89v5icU9mFMjCE1gUphxrFvrJbUmhJFDqdSM3jGnfn66s4Rw5LX3a5PxAYW6",
  "key35": "2iP5ADhS9Et3Q3dGVx6bGTr2sz3guZMYaBVUCL2Fqd7hQXhmYKab9eWq9aLADQxkxwVP7CSzHPS1ptGWxLvmYymb",
  "key36": "3wfrMQSayh6kC2WGSQ7wLfjfAoHdpMhPiHaoqmePV7cLwJHY3v3fj45TFc7y21Q82NNJubVAXqGQKuvP7xXW24RM",
  "key37": "5RCAgjFLTodn485f6HWFVpwiFcd99MRq4b39hKcm8fYF2Dis2MKJj5fcASaPBhKr3uqo3AYbeq3EbJnwCc13JSCP"
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
