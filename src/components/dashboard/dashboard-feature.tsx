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
    "2TZKyA8vPHd3xWQCoehfGYcrEBB4Fpqqhoqt7pyfsv3jVMXQMhVpEnvfzd3goNr1W9NKo5XYhdV3M3ekhpf9aQqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lpfbk7cvm9WSWq4Hi9HvkVWH3nW11XWa4kYbpaogeZVZcikheYpPdGyaxUdQKJvvQY6g35UQSegAdo28rAvTgsH",
  "key1": "n7EqeqkunpTKxnGEqZZjV4MzZgdcsnBMaLxMjX9mHtAqbXzxwSqCenhDDq828puPPfFoh1tAZrX8Z2SRzEsaLvR",
  "key2": "3YUZPfy1AawWWL9Qht2nbMFp5djoSpZPcS3qW6b7LWi8mVbPADcr5x5hQ5umHJC1bPRK6rKLoVuhoEymXdPWYuzn",
  "key3": "5vxh1SkL5diCh3hDFazj7LZXcNRYnQudJC2qmQrcr2JUZEpjiRsefe1ZvoBHcpBaCzPb5hvvqEMiYkreziW42bKw",
  "key4": "365bQ4jJa4Nv32yKhmr7JUAetEWnqj2kCBoe4NqYLymne5sNUo6JbRJaF1jNNNbiyjmNp3qetK6ADAPQrXeGQMiL",
  "key5": "7odhZh8Sp9bMhkbbtE1ZTvVKG8Us4fgP2DXRu5Uox3KK97EXGcdPm5FSxsWcJ39Spe1trd5qHGpCRnP4AZC767B",
  "key6": "5ayof3pfqaY4h8wsuezRch4fjeEoi36y1GnzZcoFWCWr2pLpqxXYWgkr6jhqi8kNdZtYntyYzEWKoKhPurpa12dm",
  "key7": "34vJsBSYcDF8BFyvQQC6a8CcMbRxUTfLYMfohMYdZWF5yymc6gumuojBQpjRYfUJBBzhYuEeZ3Rk6X147Bv7Dxe9",
  "key8": "2hyHVCcCccNQfnJcfh7BKFhfcXuT15zz1qqKWoYRNagATGz7Sx8cnRAdVFHzGvf39LNkqwsJfGNrR9LUixeBGLS8",
  "key9": "4WtNUKUnxP8jnY5aLy1Wkcr4BK4sSs2jQ4N7zmbV8zmhmDuAYSJyACtzbZ5kTQg4RrVEdhj8tcM2vb5frNeMpkEH",
  "key10": "33rs2h9AgmRE5odGx9Zcc7KeE4jsP1HTpVcrDQjNv2zuoo5E91WTyvd6K9FgwZM8oXrJp8TDJ1TVdPUJ3DeFt7xq",
  "key11": "5Kh8knrfaJkZjkXk9pkQ9CMCQ9RF2SuoEr39e6wjCquFHjJPfuGbmcFC7QZvtgXHtZ5BmQSSEaPchcJen7q5taW9",
  "key12": "53tfqpC6nWBP5o3VR3iysSSwArJBSVHrXPbu5HrQurrdRCbSY8eWTYaWrdWWoJiuyTpx3DQTNgBW9VZ4FRuRz3ei",
  "key13": "3YZuBMsvNN2oK8u4WxjHNXL6SrjZkqCYAp4dWEZDYq5cRhY1rFG9oVBnQtbgknikZZuZS4pUFpWE3SDhLXzhji5b",
  "key14": "5mBmDmzpvc12yL4ZvcfxRCNi5e2f9grG2DoYqAhuC8U37L32icf6F5RcMmNMBr1DMVmznPjXK9tMB2YtGphbX1y4",
  "key15": "3bZKmgwwVAQgRKsJHEKrh82CRNp3F53ag58xmBK53F9rnxKuyp8c53VEZr8jAPjmeLrUNr8Tw9Bk1av15XWnBtv",
  "key16": "5Bqhx7QMiFJhCEE9u66F36W3HgesptowrHMZ4tYGyMiCFXNWkwamVGbKr9wgTePKBmZYxkYcJxdwwzi5YDtR9aTA",
  "key17": "5x2yXmYtdhr8SDHXKGFBdWSALjKPCr7Fdx4ga2dAGQBmq5s3MTCBHrFpDJC64pPuChz4ZKXxm7nN1QSG4fp8XP5b",
  "key18": "4TK4ELscC8sXkvg7H1wddZzdWjEKfcbdbv4TnVUeZHbrMFtse3sA9vGZUsmAntckBpn2Lt8DNp2xF2obYp2uK9KD",
  "key19": "5hrMvzGT2wSEtUqbFoVBcZwrfEh7MFnuA1rNzYnFoRsJZMMygjh1vbmr5PyqUu8K1eFPbKBnrvTsyyvi6wVfXxax",
  "key20": "4nNzvHXexKVhNwFvkRw1xMdtWM5itdYUCh6SQ3493f2iSxCJkbmvppQHBB6FfcSLR67aK9QdnJ15PxaDhSHsPz39",
  "key21": "4V7Y53fKJRh7PYLYDgHA9qd8Fn2Vi1yGo3w8pXYmaRnAycsYtmcKsJGojkVGi22T4dzgYgkfHd8vYCbLKQ53A8p7",
  "key22": "27GESrFB73T2ujnomCNZndLXmtSJhLMaqvrdDhgG73h4tRA8otVUayDmmnEtbdr6kryovJJGdhaGiQ6tCj4NEuuT",
  "key23": "3YfUzMPYQmEx6zSsKLvu73tS8BFxHCEdmpTeFRsxoETS6marQfqJV8Q2hhFjn1JKEXDoepKCjbs8P9czkC8HenU8",
  "key24": "5tGYwx1JmDENxRVhgsXFB7rFiwwbb2LBmFZqspkv4JY3ygpya5Rx6tptqsF4bTxo96HNCnAryB9m6PCmoRPGAkj1",
  "key25": "33M3bjRSV9MzqHW7kq3GNp8P2iNX6oZNCkUhLQckDA98BrswrpGDCsWWGLJj7gXE5Kq497DcQZC6tytEUbCW7R1x",
  "key26": "29QMybJyFZ1S5GWHTZuVmaLHcxz9pERjKWajm2rWJ4xQHxCZLhVRS9Rw8eBiZ2WjkCasPyRfhpjYUZbqyPuxsoiy",
  "key27": "41sbgNNLaPWqyAk575TTskYmqRcJZ71JeKhDtm5sC6YS5VwiJcRoNNfno1hHLnSJfBrNoXmTU6yEviMrD3wW3xaa",
  "key28": "uWJwv7Fq9X9jFznXwzQTSwaqknK1UWhBv4PiXvBsk75WXJXVkprvAUT8gPVwoKoPqbjjmuzKC3pNcAXmGC7YBL5",
  "key29": "521AL4cXY5S5hSXHtVbbFdAyDxv4vmyzBLARsUoVPx2Gd5Fc93JN5Agad88EKq4qujwJP3oe2tjz3UvH5SH4mvFQ",
  "key30": "3bMDaCNSg2iokbWD76nt881AJJqP91TEJnyYA1jJWxTPfpNcDJo7vanzCKURH3rRD8E5upVzeR7N1mCjmbjMupsM",
  "key31": "4pAdGj2ALYVuYL3kLVncPacXD7dnNYEFk6htyLxHnR1apzKw8v7A7Mp7LyCsg5RAiChfYddZ11hhKinPAnQ2GCY5",
  "key32": "5R1xDBX5ENzsqqwovkjMVd7tBQuG2jUF29kFxJ4S2vjrZrWUQB7UnMJPuAM4RPb68eRAwfsfaXVBDmQraXbGmTFX",
  "key33": "3L13kPt9dLyRFzEvdrvU3Nt8H5eWyMA9UvK21C6XaPwJ1cu1usrokYCfgGX4U6TpsjRdC3ovUjcwYFXWmvr1tVUQ",
  "key34": "6Nia4Dxkib2EhLH9AWyLU7JpFe6kCPdhKR2CGJXVVAmkird9hXQ7SZ9j3HAm5JHfhz1p3UFHxfPZ9VpTrhWEqAn",
  "key35": "4gFy2DCYhznpBTHWKa34vW72fXwk68Ludxc3aUEz9Vv85aQmrAzunUvFvLnrYSqZNXCav2mHJAW48YL6YqhEB1Rj",
  "key36": "4jgBEXZR15mMbvd8GBzJQxyBGA6m66tquTtcwH2r9FT8gjMh3hu4KVjULE9za3vCjKVBuoZgA6RqSCz5HX2Yv82r",
  "key37": "53Mwrg3bp5agv9wZENMXFsoBXdPesLjEDo6LzgNUYChCh6dnP1R6tv7zmbPLdqShMfdxWMrimBWv6aEqen6ynPeN",
  "key38": "39eJsjvD3DpcTrFeBTmDsnq4mrK4x2vbSocaoMTBKZwohk9kMqDDzhn7RfvE3zE1AgEX73gcbnj9mdhj44hPTom5",
  "key39": "4LqyYQvLcmKT7ZmaBjgUAxiLduFmmFSV21qUXs1Csc46A176crZkFkxzCFwqZAxKGLAfa2xFQ54xbJr5upwk1Jfh",
  "key40": "5Y2T6YBpCWrGxaJu2ZDqHPQmNAgVXxeNFb2rz36As9ht6yjEVmb2kaENk58fjYyB2gWDXdXM4tK7ZYDWAn6fcHYa",
  "key41": "5s9WEPfnQivKHkXRibpoNHhS1TSwdLcJN8krs7WQfMDtLHdfwXgovLjY7J9uLtGT4MngbJswE5BA68CSScJB8CYE",
  "key42": "3LCWGX64p2pAu3YmhuYQDQpRH2aMpxm1UShms2eLaQhew5DyC3Sa8cHSUKBwzPabf4PhM8oogZFr7XVYLbU3WV88",
  "key43": "4UUiyymKYDTmExjBYVcotKQCSgdu3X9HNv5kAh19ow1LkEroHJgeuhkckVBkyTzcgb26yHDxR4YavttFDmYtnxVY"
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
