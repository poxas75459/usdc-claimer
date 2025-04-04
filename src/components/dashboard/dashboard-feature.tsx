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
    "2dhMmkLzx8J25F4gfE7uvYFi8DU6NxCFrmxfiZ7AsqKxCYTyb4CwLT63TjaxLvodSv4mqKdpYYPn4bCmoNYWW5UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1GpA7Lh1NN13jxuBwu4DHEpmFXncZJqnMWbSdoL9xaZ7pBUDzyfa1b1bgxE1BerKLjynGQG8vD5wVt5sjkTcfm",
  "key1": "5XAjf1vPexnp2hS8gijgCXXnQSY7cnhTUmMP44i5UBBq7wFnFs17iBsCgtoebfRKLkXBdeAnTeAu34jzAh3phcEa",
  "key2": "5bTzo1Fu3kAEZWcGN1CEQJ7Eoyv5e6GWJeT6eq4LeempY3XhKuSvUNaiWb6oYG1FY1sWD6jRRwsAVLBBv2qf6FLj",
  "key3": "2fyNinMfMYkgaEz4ihwEF5KbjzSij8Shvi6LYo87Z8vzBkwqAJHuP2CLowhx5gGwAiXMdj9bYeekrxQHaKZG6yD3",
  "key4": "5qRrRDsinrt8xzfVsRRVuZAbtM5AczRvLJaxuT1aDVLVLVJkoFVptusC2ErNbdWCHcq5gMS2MHJth84whWsT8BhQ",
  "key5": "26M3oSCJqnUQLnW8kJcjJ4iuxf1Sg6i1k1khVmD2V3MR4XhAT6BXFzWgxVDyMs8YNSgfzEL9bBJb94FCX6XLt4sL",
  "key6": "3ZP3vPCV3JrSa3xkEPiZjrvJcP1StNJmcrpzLF3FVEf8ZCundszoEPcw5xWzPfZH7xmM97HAgAmXr25CRHMYt4pi",
  "key7": "2w4qAKnHWuUfkyej422T9MtmGZ2w9GN7DQCAhnHn3q8DqRYwq4cmGkWhgxEjEzq5GrbqenoqHHX9cgyhXNS9XoXN",
  "key8": "rmuVcyDh5ZW21KPs7LxSxgMN6L31tqoxihmpf7HdwEpcvvdv3urEG1sBngbkGbGxMU5ZZQV19aCfbeGfNiHNPhn",
  "key9": "347S2u4y4DvefMVvEwP1HoKz91ZXyA7BGJP6Wgqfx7k8UGPyRsjxoEN4XjS2kJ1P4duZS5ta36MXzTyzvPEPppxa",
  "key10": "pSRT75Wsouf3VGHAobCiDf2CAAMz7kaUWqm7E4c4JtAnViFQqY6T9FVQrschgxYDbDTqmrKBuYDiGA2Pi2Ui75k",
  "key11": "4Hf8WoAC3NJrR6D2j7uX7MCfr8CpzqGPmePBF44aRojHjdNbEeXrAFVQLJZWkcqyUKCfcicrrLAd4YKNdQutnR7X",
  "key12": "3xR7NsQoHRqpgreETqMeBVtG5mmwDbkuc7NzESB7QmomgJMhNQjqctzzHNFcFiR4wF3GMBQNVDNY3AaJgUHgbdyT",
  "key13": "3ysAqNrZ1FxpTRwWyvmGFM9uNQCZDrFBwqPXWhYqjWBsWL4GvNqzkMqLsCQrv8aQy7epbuFiWpA1dJei1iCU8GMb",
  "key14": "2ukeLsAag72qXsjZhuhG8HNn1aevJSEUa6UC1XU9SzT8o4KjA8AoaSM9g7CeZpwWign7rc4mn2MASwAovEPXdEeS",
  "key15": "3hr5Z6AigPQeJNeu8Z9qKGUmBeNE4U377Kztt2zF71i6qHpkFTSQYkRHsNimcUfAyXXC9scEa5VfUVkZaSX7gHpf",
  "key16": "rknLgMb5SUugU3zww7y6QWqXsFcq2JTsQR85KZFDJjuX6YFuCKH39seukvp2DcXaarucpo6CsWCdLvMjupUVpLX",
  "key17": "3EW26duudiSz2oKcBnmv2PcfsruEcXEuEKMJi6dYqVUaTfyKWtYGMJKztMUpjZe1WmYc6YC2HuW7njUZbvyTBubC",
  "key18": "5nu6recCh3uJ8hcZNDeWWwNi8Fi8Zx2hVd8wjrGKQXNuKRkx8fK2PAqViAmpghjj5Rt3nMPBLtzzkeqpdJSvmhU2",
  "key19": "2E395HxkMmV5rZ5xUWGstoje9ST58zRm9BEqfJDs3TgM8igSFwhkRzrsdDhHeaKtKGYK3pXpQs11phis53JH7xtA",
  "key20": "545CtuHQe9CrFkNz4169FMrZyt267yxhencigZBhXtNRHhM1YHtDKkd7HtNhT95CgooeDMcCkNx8SsEEZkXtt3uy",
  "key21": "2HxjfJZNvXiHiB4WLB4c4ZzrwrPZh3rCgUHa1SedMhDCnKVBeRCtvSoLwFVXhkP2ezjUoNFekTG2S478YmBx4gDi",
  "key22": "5zU2jJUmhSFQh5aVn6NYKnWbSUH67cgMpZascZEKVNe2NHu78NBTypsMnpH6NB2MhZ3UuphDntf5iTx6dSs8pxbB",
  "key23": "29BzmydTXfXk18YPFipZuZRiofKYCGsZofbMvGvjqnMtPFbQ888S8nwuvHr1zpN8L76a3DNSrjWzp3pGW5CijXGs",
  "key24": "5Qw5vThBkJb4cEkGcqw1KzWguZmhY5WL4bHqqsh7Hr1j4knoeak5Dn1xhxhwTifdqPyqZ4sM62RD5q1dazE78FqQ",
  "key25": "3yrLFbWraZbSg5sTYyLkvR5rnsbBNT5jj9j6dZdwqNp1j9s3aDoRoGov5fcX9MGiC82U6WoZNfeVbzprx9r7b4fZ",
  "key26": "5Q33n3eG1sC3Q1h5233FhsCrM2mdjEd1e5AK4pbXE3RkQTwG3nCkvxm34YsiTPUvzg9TNbttqqyYChHNQAcYyKaC",
  "key27": "5u8Y5pgjqfv5BZtLtr3bsXq17jATJ1xfW1jtrVFMY3qykefE6seAKufs5m1TutXbenNJa6hMNYWgPvR7ygsGkVM7",
  "key28": "5qn1qoz1EXEn3qYvJJtofLMk3jPGhV2VHvRnQxkNdwDFVAqy9jsUozCiMvpVNrHcF1CvfdkETfKpRcTB8NikyavW",
  "key29": "5GpiXNdevDZXTZjY2xFSctbcCndbHnRHLcmg6AbwTvbmgpzS2XyEsAD2pVZdvq7Y7cXV6TZdiXjVGzeRhrKedHVb",
  "key30": "uyym3xJWBwSfJfSAJTWpRpu2ufBEDL98fX5N59paH87jNEK1uonKCGdhXdW8QZXSL8YBkEu6cXkwjqy7shoAefN",
  "key31": "3coViELEbhzLdiTwt8j3n4TQk1RkE8UNjS4ngUHjgHDhMt972oyZRo4xEQdu2MZW1puQZA2e7kYvUck2kGqvUV5N",
  "key32": "24CoVgnJsZ1d9KyYFVJG5SApRxUmSoXGouEzRHqccc1Abbitr57o2JHJasLDkLzHFxw8g6sKiRWRagZH6nwPRJj9",
  "key33": "6vsXYqPhSC7tfWxViNTo7Tf951M31scPn6ieHNEoMvxHwqmiJFCFSKosRwAqsfqcxJaD68pQPNUJte11EuF3Mmz",
  "key34": "5Gnebjs58mpMUPP7bPX6DMcKRJriMHA6NEAQeFbnDcDfQrG1RgyL3AvgD9M8dhCyv8nBHU5wi4GuNjX8t3fbacwe",
  "key35": "3ktyt35RuQM4t9H7oajUhDv8ePPxQGm3mxuQCTrqJzuNFLz433dVEq71i6GBFeyKvGdLDAorpK4TVN1PHDeZT9DS",
  "key36": "bTF43ah8GpgPx9jRkwMXb6UwoubTZxpMVVjGvVTkTGtQj7w7ocsKzKbZDfRvQY3AANGN3DAEDiXYKSBqVjfJDWB",
  "key37": "45CuSdZw1qojdCpnN4GyhL72H46qcH1xNTD7eug19kgkj5L838aKRVSbE9WfMmypeesSS46D6SeH7KmueAbC3P81",
  "key38": "3VMnqA2aR6C3b53mZukHJwxZ73CQCcp7jmW7852Kvz9kwnK6yBnto5LszXT46LmPwAQ58Qyn3faL1r17cAUfu39F",
  "key39": "2UuWcM3rT2BX8KAMjgNQpuzcBndmspk3k5PjcphAjjh1YujptuKnF56xvA5vaoDZMKBYoGPBvEXegUBXPvW5aEi8",
  "key40": "4BZAFJ3UBoCNQ8t488E5w6HJmV3mFtyreocYkfaLyCJMCcCscEbMckH3p5MTuEFgwm6UMhw3a1a3SWXAhyDRrS11",
  "key41": "oS5ufDSxaYzNchShQAb9Kk6jALWHzAkCULn12Lxwe8d8RTDqNKJ4CNV75c5LrFu52EMENbhxVLhZ2gpa14kHSmU",
  "key42": "juF5VrcT8rfxZwU82zLURDKuZmiWreW8HqL9pUjH1KewHJ6cL4NAQJE7nredgx6Hi3czyZad8hDYTMZjzt55iqq",
  "key43": "5LSpvGbHaMPh6st6GvPF1eH6CqQXXsLb43J3n1pLoZe2JHsZWgT7bbv7pc4BGv3cYEWbNAcszfyDhKRMqbKfr8AH",
  "key44": "2VRnUxHM8ZUmDXTc8A755Qj42xYbaMBkSXt7FSKbDcRsFV61B7kweym97skZHPohiAjs2jQUUDm6rzxD84PM8FeT",
  "key45": "4Yntdefefvq2y4JfS14rx83RCCppMK127gnAZYGFehDk8H691TmN5iaxRzbGcB49nDMmg32uvWXMLNsaxvchGNBc",
  "key46": "nVrpRWFDRKf1Gx78E64fqXK2EG2i8k5Tu3D6nQwkctorw3vsvexksKUo9inxQUKcKfujm3nPAUT5499UC8kTMTg"
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
