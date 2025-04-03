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
    "2am6CdvSCLiuEkipvXTycqLxzN98FKrNxasic5sznG9vzr7xQQaVf2H8X5rHWvuycxdvuQtmCqZ5QUvnwUMkp2Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qJsD5SMZm9wYSNXJoqEzoc3668kJNbWK85hQDjBm9n5SYKiD17vC3VnQhFvKs7DgN94ZHVscyknerBkkAvssuq",
  "key1": "4eRG16Y4Vp1tnZUzyTiK1HdgucnSWc25EGY38roNx4K3bx4pa2NnUmEYfG6ZCuu9bHYPWC2KUjFk9HxQSeLHJfy",
  "key2": "4JBonBL475cK6vqZcGKp4hYkiu9RuhBHQxYX5d36YVRUZjXWnUhVKmJc27ZssPZ8oJEbokK6utgfnymiz5yr1hKh",
  "key3": "45eoec6iLQ3QpBhKtb6ToXZxCe3w1toKDJ5jJbUVkt1T5AJm3wruM3beU1XuW87mvVmTq3YoKSUg2xV9mKP39bBV",
  "key4": "4Yhg6gPjXPVLa4SM7sQ15KV98SvmJL2W5fTYr8XTAEh6k1JHoVL2AXFhRsUGaeGTUZpMYiF1K3kk5qRPQGZXNH1V",
  "key5": "2pUJsFi5kz2ixKUSiH8NV2Qt128wKgyexiUZ2DYXd6NQ54kjq3Rv2bo5RWgCM1GWBDyy1c5omroEps95GEZjvTLy",
  "key6": "4mmhUigAEcrAEgeD6q2VUPnCPstUk8xJYM2Kwxn7UZ7t3UqC5afo72KNHQPbrMCMdwxa5va7ju7qx7uufTjJHnHL",
  "key7": "3bzjNChCXyVmyfpt2kX53KDTd3UkbwKURfjSY5YhrLH14mGfRUwHukizKsJedgjEC1XvYzuSGDKEMV8kzCQp6pca",
  "key8": "4UbjnWjTuzHs9i2QH9HYqY8sKkuPp24Lm9Dd1V8h3op1z1w6f7NM6fqnj2M6LvoHPBAjaGJd1ChzJPiGQ1MX1CDb",
  "key9": "3fg2wSEkySTavKwM3g6nMqUq8FPf4sLxdv35ouo96WY5GrheQvJ4TFo72KVeCRVdG3dRL5wwniXdwHcMBwvJy3eQ",
  "key10": "5fshm4f7jmFNXAoqEXwAJktpZgZwcXk541hQugqdXUs5r4HxdHsmH2aoCmfEcHe71YFiZxjHjpMWGErs2QDKyBwU",
  "key11": "YsJJp9KV8dKwUh8kCQjiHdfXfeh16Wegn3ukV7ygyuB6gakiax612vKnqzSTiic7wbkfswbVEkxf2Zz5BQeeUzu",
  "key12": "H3oEXZGgdMoKNVuS9aiRXyrQpBkHc7SPjjVgmbU8BN1edgb5Ym5C3e3NQk3uWBEQjMWSQE3nDiZ8cBAM2bTCeaV",
  "key13": "4JYEgT5hZ4XnnFQvMwzwzvXC7eBi2ZdqDNJih4EWrXtjjAb55uVBYyaeavfuYG7F3x5xt5F5oz4QiJcdz6gBX4jP",
  "key14": "Q2wJiEQiFrq1f3V3Hv3qdM8Yw6nFDU6HHWU8ZGVMka8ipv4yaY9eSqdUrCXEx3RNC8kMmitf8yURBPj5cqPPGbr",
  "key15": "3rggXNjfxnwGxcXQYsPQ5TSpyKwDb9qE4Eah523bTUErwdVEhsqSsZoJt7E7kks3wvYceqnphrcEHp53LqBtJ5iB",
  "key16": "37htsKb9ohaHg6v7YWmrpWsyafb9SZe8QPNFfKz6sUZacrFYax1thCiPd1Wk8djKTcbJNfHTsUTGwhBQqtZf5SmL",
  "key17": "hvHCMBDGFvsBxPbJExnkoi4TpsNN5mMtAS283UpyQPHMdzae5rubj989Jf5VGfNjVnTAvM2FSQ6CPRu8NeMw8Le",
  "key18": "6553nEfdnVB4SVzTeUfeeGuovsmdq6zwhNmPST8ejuYBKijpAKfDkEdZhFBhvMSFB3qFtZQXvLUZXMUfqsbybcp3",
  "key19": "ub5dKx4keUJcdtZmiFrCp3NZHTBChmZd5TTJ1awTFBBzMQNxuLfXgiCj9x8CtRwGQQbSPUGQJhkLUbRLZXmTW5N",
  "key20": "2qpRHwFgLStZq1ghSzjKYhKB8Z7AEtFxLYRnstMPQgqnSt1KNbfEav7gWTLQRqLaB9kELREWUhahwebpkcXajw1s",
  "key21": "2Pp4oUZZtwu41Rqq48uY5fQY9odGGLdttcLAYLdA5xs3wsQ62ESvPn17JPbEusibZsAnxp84VL5UNZygM5gTVcH6",
  "key22": "32sdLUCY9gKLGcLNaqvN6CFhzEufeDt38WbcjqXAHGv8QZRMZpYufgzZmgTN5cz2sc4PhP5d5eM7uyKodACincx9",
  "key23": "54XPEk6qH9C74BFacBrLugehrqnhtA2gVY4y8UN66QtjDTUnbkFzpgmNLE6DqBDjHSBPvKSM8yNCUf4DqzpVD79q",
  "key24": "27w4zKDYBTNBuDakMnnJFD2BJ3irzZFKzLN5gzYu937YAPnmAk2f8pE2g2YgvA5WnLqjKxHLQirhzPQk7SGFSqbK",
  "key25": "551L7icQXBEbhYFyQjEfMz3XbxXpgy2r1SdYiLCde4QqhfnNXAhdDKYxuQkcZ5dv3wA6FA2eF5mJ9em4pMV9m2sc",
  "key26": "pdpjyse3NBMYrBsvqXDhcjhzkwhKEhXRr3QzEz7YfW3oEU6Ap2jCuMpNaiewbRyaTmto3PgHxcBNm72Bk7fwTRg",
  "key27": "5LLH5ajLuhnorS6rRAGBhPZGSHgm957dHHHtob6CvqAAUM7FaMcMwTG94SH2hTh1GqbsAFpFSpusgStU5AE33p5Z",
  "key28": "4B3DzztftuosYjx72ZCuLoCuUDTvK3Gxax7aikzJWZacfQjbUejkqfjgT8sG1yRFCmeQH5ss5P29CeKHp9XXXYyp",
  "key29": "3sRB6rDK2KepkHgNVCrMemngGwsCCbBqk7JGqZm6cFSzgPBNPyMTsE5qSZXcWPTe8noTmkra8qk82dherrCru4sr",
  "key30": "2iJbpu7dd3YhPmawndpiF457V6FRwjUUrg46EsY7gEGnJ7AThK4mpT6vrjL6yXxd31pVVx4aWsYXsKa4eAvTA5XV",
  "key31": "WjNrfiUHMD9QwwECoGyCPB1rJakwHBhEgEt7qsF7tD8Fh3ngnH6ijK64seQGnVQgApmsMpvpXe7BMzh2fgPki2b",
  "key32": "552KYQKr8pmRN4D9XQEd3Y1NYtrXoQCSP5vyCswk9A76U2cCNXKZwpiFbCAQoMUw2pCCrToBZxUVGUmckC7fd3V2",
  "key33": "5Wsg7XXwHCysGVNCHfgsm5nuerHwc576U8GHns978xw5BnRoVfex9G3CMffPBEkwQVxbNsVvYFeU3f9i8KYuPMqw",
  "key34": "28FirsFtCJs555LHgoyGQRjURY4p5cTry9jAGn1rf54Tpmea9zeEU3Cz7WpGjQupJod7f6TPM52UawfHPE2WbD2t",
  "key35": "2Vz7tXCXXMHs8oc1trjvc661tyKPEHrJpv2HKwdCFyKVZ4BCJ3wA9XGfYfLYbBY8Caj8QiAEiRNwfkL2Jz6QzFzi",
  "key36": "Mcarz4Q4GmWsFopkqdUXHGBWRJw5wCGBjwQmCNkWXvtXwMYQmbv9Hzv12pYU9Jg3ApHeUcoiFsRnDvm6KSWum6A",
  "key37": "27ERrqS4oDX9ZAPV2KftEyWDRXRuiNBV2pZVzxxcLT1AqsmzFAhLesDhqypmXJghfEdGd54peYuFjTkbTr4PeLqm"
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
