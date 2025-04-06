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
    "3bjKQ2c8ZXtvdg875uQL6ywYJKh9NkHXSDWsNb97iLDXZprXnWrNok9tLXbKni2cpXvxL8gewQ8oe77TPNp2wzRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X76Y3MsX9bBZRuN6Lv33JVKuv4TYg99yBETFYqZfGYgJTcwQyHFNfY5YoVKzrdGTZ9E2Y5jNiMFVDCnPbL8yd52",
  "key1": "2tkoN7Z8kj9rkAqso8WmdzQSMwMUBXj3rnLgCRZQLPNySP8A2USbZJA1ACFVKwj2DMPWsJNiAWK4DYDJafenadgQ",
  "key2": "iV3qhuLPKwB1M5QdK9jVVCppqqtGVpHxW5hcRqSqGAy6juigWbskcbeCHgTx7AT2etymCkGUtqKqgYQJG4V6hov",
  "key3": "2MgfpgWwyLiLTf457vkejMhPcF1skGgvCVwc5Hi1kxThv483RRLXAsKKc7kw51cMC58yrfXVMiZPdgLxFiUX9c8F",
  "key4": "4YTmJRq8avhKNLh6c1p7TCAXJDQmeNGWMy8hffJdPoYNhAdeX2sAtRMUCWJ2JVriXDfXCAZj3vwsXKt518DxC6Yg",
  "key5": "23QAeYot1M7BHp2SikQVeqjk3EsGPtiTwBBtuH5NSbrY5F6Sq2ESmAgXh4jRRpTbjn5dEqKWotcYNu3MbJHSHSRX",
  "key6": "3iGMSCih8ZmoUChqtVbmRgDvEgJPDwhaq9SMUGVp1fo18MSPhovK3mnbM8LErbvHjYdJwnLc1DUoTTkSrPSUfXSf",
  "key7": "3wJ1xFaTwj8gd6p2YxG6keYKzJdwcX5Qv7DfNC17HQLyLXYyFEbuAafWtao1SDiKHYPDWzfwFbRo79CMVDUDgMDk",
  "key8": "5iapHJjmtQJVYhKjA3gSUnYPvXixxVFo34VvZJXLVoqCGEwb4aNTFcvsBKjWm9LvQzb5ZmWVy1zymmzHB14ZWE3g",
  "key9": "CG6tUyT8L5K14UrqhsE7a8XRRuBhUgMksnHDVKv3CZKLheXE1Hwkfawk1US8vLY8RbRvo2oV4DRBFF1pSzXY57A",
  "key10": "3Fw5QeCQzTxcU23SyuXdbi9M4Wjvetipdkf9d936UHn9YcaU6xc6KhRte16yY2xuW7baevmc5CKqmboSwayYLo22",
  "key11": "5gf3Rt9PwdcJZXEcDN1VHYz2d64UEGVwMrwLyTwDXyihxMjbMxRJMoMevdTZEAg1NEmNzXcLG8tsYGDJRJMfSe8L",
  "key12": "2Z4tjSKLvb2QXbcGdAK3y2wGesnoWrzwrPif2X2v2x3ivrfECCn9uY5SvZHbP3bCXsxZLUZhTaraqt3jL8gjCX2v",
  "key13": "39Db1gtdhhJiShonuKBLNrrjkWAaW6iy16NQJqsxDXxVEf7uuTpkf6nbAdnQun3oWVh7VKgunBDCSs6zgphHDNSJ",
  "key14": "2UY68319nFMzCqTs6w1tQ1eF9xfCaoMiLQW6oAaeNhsCZEkzwocCHCKyxtrccYcq7cTU9kMqhAvsz4f1xS9FdRGm",
  "key15": "sgwEJsKK1DT3szhfkasTbMCebi8Lnm8TKtyudAPDYacaNRzsgyHHaWex8yvbmSgj4j1mbLtMynXfYmsRHxfxq6U",
  "key16": "pm2UEGEwF9MBjhz77X1fEGkJqosjkY2SBpQTMkj7vFWiwUnCfjHAAa4aPaJv8eZMSxfxu9dPt1xxWn4hHaxGbFn",
  "key17": "3k3fhGkqF1gDoDfN7X5QHvt2eZ5kKTfCFECXA6Qh4kWQ8ZtmKTbFSP71CYW7mEtNJPxhuN7fbEQb4pwx66Y71h58",
  "key18": "2xpqPcfLKZxWeDzqK31ytkbtW7HmSgbFwGz671C9zD8cMd9oUy2cjVSSQTeGGFT6xunyCcGpiYd9fKdzpRchc6pf",
  "key19": "3HgTy9hbrXpEtHfHxqdr95yLLn9tR23GQU6DLaWhndY7hbTgCrirNRyb7ys9XuUi3L8p1xQ63fdXFxKt3HtCcx93",
  "key20": "Z2LfBisudjaXSkqzxNh9fuZpQd1F4LxMgfHtKfihJ3GUxwNh5DjK2DhpvKLtR7aA2VuFkqs9c8UqTFYnqrsZ37S",
  "key21": "67aJCuT4VigZvhXLr1sb8nsYTEz9dypFJDaJmWWpsJhXUCVHkPmvYhGaEwAgtUaEQoqfjkr6qin1j8fALbftq7dw",
  "key22": "29SP5GZSi7vpxrE26i67kwxoDZcWHYtCKW4B8VViuZfg6D7e7QNGmFnPuJMQzRan15SxE4oZppuJLv8VF2Pm5K1n",
  "key23": "5nsKrEbjmmLwGkaYa4vXXKdX5p1JxvUECyaTYMJqdBR3SUvvyf9LXdGUGJj1CdXPEzbJnt8iJqfL2AqNpksygsTC",
  "key24": "dNVxcLxMKCcT9j7XJJtBoQo3Z2pCCrVEvDCebCDz1Ud5Vo9hxDm6unJS8cfGNE1cSz751tKZKyzhnXCgGTGR6wG",
  "key25": "3CvrHxo8D2f46pMZwfCV6dwFvv3QpinRUxSexXcGbcBU1GYY6GA1KeAQydXS4ZE1QSZiGD4VxHfYY7X4rWuhguLa",
  "key26": "42BRVRScrwYtYyyoJgjqaTPGixXgjMZp8XnDAo7doUuKUv41s6mFivQszjW7gbrcU2BhgadUhVDu2ktPSpknMzun",
  "key27": "3XhTUaxwHpAEb3kthDormc1Wi7mmwpfdc19emj9fcAxK1re3bAKEFeRuv6hSmZzUsh5L2cJzbEysPjRhBLBqWCtu",
  "key28": "Vy3VNr1HZ5M5oPHYwnWh86JZfR8R7Thwxt2dgPjRvnX9gT94YHnLzNBQpMZxMYyVfLGWwcHeQdBd8q9b7JMwYSg",
  "key29": "zaBNfv8qXT6kxnNPBMLkMhDhptxWRpPiyw5kNSWZwNmCX49PaFrPNWscsLjiyPxYDp5roQd8yrJjfynLHyfr5wt",
  "key30": "3xstaqg1sLEuP8RCgbUqv8pJ1AwAEApd7pdfcYjZbrM2ansV1jxQXRFZGewRErPXDr9r4e44Bn9EfArdqP3pGhJb",
  "key31": "XFVtxQMuhHmB4PSRCGXFqZphPTNWugMQht4bgqS4PSht1WcDmwQtVn7QhkbjqtHHpo2w9Yhxu2dGDndcpB6ZZ39",
  "key32": "4hnXqtN9PRykBkS876HLAdSY73c7WBLkzANsBPP4xkhaj2vigcBBreQu4sL6aSXNo1g4dvLBnxqUYSE5qiryK3nR",
  "key33": "4MVFjdeXkNd1W5wsGoL6cnLcghh67YXBwbVJooRrxJ2W7AShoudvL6VjMJyy86BNMrY7XfCM1i64cCeHGJgcj1L8",
  "key34": "482gF9fALSDHzkkmEQf3i26kCB8bRCMLtGNRrTzCfEUbuMCFUfYvLvrPWdi4oeMZyaiq142Krzsvgzk8ZVR6Muhb",
  "key35": "4XoJY1BEJypBZc16JDvNKusNfJEzVcqbBscnRsPNeTC2wuXRCz5eYSq6otQ47WM8VsAyh414GUhG6rPT69MgKLAK",
  "key36": "5GGx3HbWM6XQbBegKDCkUtQnfUvexUgAmhcjHnAXswEAB7dSMXuskFfxMAfo214kiXWfHtvfgzsyK16FL1DmjA8Q",
  "key37": "392QribMCeRAumoeUhyDMBtdzCsGYJu1EJGi4pG6WUeU6Fj7G56vVb48N6SKxuuHWbFVL9caeT6uevZNn7pBC38a",
  "key38": "2KSgiSG1nnP7FNPxvufHYPbHzpLE3Nx3cimzMLitwQ7ps4JSj2pMmQj4jWHQ6jzHTLiiFqvp5bTmyHvw7pe4DFdh",
  "key39": "3si2ri1aaYK6tj9TC1mLpFvDDJ8e3w7523kE4yBwbNvUNFYPAZxEpvgJofZzXm9vrJURtuebD2FNpipUZVPXKBcp",
  "key40": "5E8BJRvNuE3UoKPW54VMCmRtTfuMbaHv7M3H7mG92K9V25ij8vbaSb3URxxU8fsekh9fnuAdVwZguRjUC7HN86N9",
  "key41": "62TCMuVkwDGS7QtK4vENbGNMiFe8V96gW13CfjuXjbF3eSgUi7MMBhcphs1F5MaGPLZMeqd2xsHAEPgz3mQXNvAm",
  "key42": "2dmF1XCtUAicTFm8jLMNAfF1Lt8xCbREUhVgu1YKuwrveMDtzcvVpVCDwouRPugCEn2WkwKKfmj3n5viCuBbVVPo"
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
