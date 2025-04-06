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
    "5cKfqVc9MkV6drcVDAq6gjpJBFJAbsST7MjDqYNx6TyWQ3BJLL33WiR2xx1hSthC7ByEj5P5PSCcbFLu8Rc5W4yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XECUgghgTpgrxzepfchNzZhm5jDXSVTNLbVxXuXbCosbLdfPB7r8sNWrcFPwznwQvEXnEBWVEDCjJZ1Y1V2QEDf",
  "key1": "59NqH6MRQbZHhULCdk9RUaJDfCVKShwFwzG1BgokAo7WFLgrgLHbxSfVC3gZPFehap8L4W7FhyXZD8XJWAs4MnAt",
  "key2": "2kVGvBDGzHmDcyHBnP4vXS7GCh8yBeycE3Xh2ddPDK8AwcpWG7pDy7y1suDCTZyX5cCQQ6yQkV55LkpewAXYxcu7",
  "key3": "2RjsKrwcr3rtA32dH62N5oAjc2ajKhSLnabUj2zFhe5pGz43TmvwvsTQ8CZ9RyVhxcPHi3xRkuexkoG4KqsYRFnB",
  "key4": "4JkCuJB3dnJqL5vzTs6EHmaMUXYUkNu6KudoRNncFbNq3QepUoGEStqPf7nXoAkHdhdYLXhFUPZihFXtGUgeDWsR",
  "key5": "3npmr4sgEe4NXyk9EiC7ge6s2ijBjnmCzVnWRCye5Udevg9K5NR41kY1d9eFBBQSQV3ez26bnyqMEij71txCyTqu",
  "key6": "3X5L96Xh9hvAS75A7LtTh9ncvPL9t4qMFWGSuHKvL4nDwZYfgi8GQogRPs9X6stG526P9aP5g6aBdvUH99D27wZZ",
  "key7": "44kw6r75rYWwH1auvw4H1VpuMciG5S2EMQiR7jRSGRCWriZJJCUfM97ANYX5WFF4RWMcki47eqA5gVUEe71R6Kfx",
  "key8": "2zUQ571F5hjTAEkgGFEJWXZKWNV2xkKw45sWLt54jYTbkbrm7vrAv8LCGdGxMmeoUBRjjGRY4o6VknJxm9KERTgq",
  "key9": "5PuFtBH7mrbJUkGSHwKc8J9mioPjSVJJz2ZdXvhQdErufas8ZTtQFwQGeshdZzxHxf99RLXH36TN45i84vjVNTVJ",
  "key10": "4AKVVna6prrFy7PKqHM9d8e6moWhLMSxwyZYZ7SzQQ71ZnWJEHoCqyN6zFYvLHb5TRKBbW26r2yN8kxNcq2qBoDZ",
  "key11": "474WbvH5hvtX7iAFB4Mqfb8q7oY6XNMnrAWQT2QcTQiVqr6Yr9Ny3epeECsXFBVm8cUXijvKQjrWTqQpKuRz57av",
  "key12": "4W7wrwYm8zKdqqg22c8erbAKjGJAMSBKq7Dxtdw7t3rg6y6dBXTchGWoctcnoXLWfABBa8j3YN1qBmxqeeCaoW3U",
  "key13": "5z9pMXVbDXPLScaWyN1iF1zcFjwine8KqVYXqB4SjzjSgeoFL8eEEJAB6NNj4LxNWEDFFgTHpteZVwtgfUHzwtro",
  "key14": "5srZ3kCL8eVxKiR2gb7okTBLiuDthH3yqomFoQXUiFsS9a2sUkG2DWUwgCzaRfscFynrow6jNm5Zo79C1REA4B1A",
  "key15": "3oEQWrFtZYok6ez7bdMRudKFm6PfHjvycHXVFEvHSZ4fpWA8fXLTrEmVERra2Wvu1vXXqZsSqKaS1KEG4Zz7V6RT",
  "key16": "4za5RBh9UktMMe2KWbKrBWsg9EPZARfvty2eq79iU21DiE6Fj1JzUHChVCp4zxriy5yW9dGu6hL5EC4CV122X6Vg",
  "key17": "456hGrF5NAEikMPrqK9ZkpXVNYB38wZBi988oj3iBk5BcCbMYb1EectXWkJVTmKFeW9q15mkd2dNAuWnpjumxE8y",
  "key18": "rxmZJWeQ4DNLRB5vS7iqCF8CCLdNiuaddhKjxzXa8vtqYCW7SmGXM5htuRjFLNGaWgqivqzkzT3ExkptAd9kSxL",
  "key19": "iLQ9WWi5NYs4XdU15nexCuPoMRpAUWJe9Eun735NxMheRiaj7JN8ymKpm3kaPHrUQQgi1b1JfXQEaaxFGpH9Ywq",
  "key20": "3MG9XRkuEzavcAaXEAAKofgEQnwtFvBkHqnxuUGUjdj4e6xpPh8Pqedowyu23xn242aYbpKrhKo8NQrBDnU2foxE",
  "key21": "62K8xyK6ZJb1gAqebrSMM58vWY4yXFAKaJrAv9foummwfWmgvgtF5J3WC2keRn66c9MomwyMqeV8TnrePWnhtyGb",
  "key22": "4Tk8fuKAr9Hik67dZteopu1AN7wP7XaciKxm1QAMrNSZSMv43EXkkBGTV5rLnwh6nqEcsC5bZ7Sor5NkjT4MDavB",
  "key23": "PnrTNARgkpWgpiCokqH414Pn97PDVTdpwWhMjvWhANAsVtenk1hfF7z9ptkaWkbzeJrdFzS4NuH5e6BB8RWoAmK",
  "key24": "3nLZXnpDxvgfp6uezawVuK76LBy7oHUH84qeybMnSqupHKyV7KA6jNo3CAvbJYy9J5moYhERALReXch2fLrAWsaF",
  "key25": "jTZvXYPi7a4Fphp1gKxWNuUBfS3CAwkYQe6n4DyRMQb6YvAqourRwxDADiiLy1HNiJFz5htgSCFtrYU6oXxvRe7",
  "key26": "a6D2f7cb3Y6iWC7AiDg4DFVDZUBJ9nzh4ByPB74uHWZsdy2b9TSbBQB5Hf6ipjjRGB8F3dTvMpxUEFmMb5TG1YE"
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
