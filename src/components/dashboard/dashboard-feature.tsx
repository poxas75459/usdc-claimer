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
    "YqujWGoAGAXV9fqJsmSjiKkEcHH83eSRHd9zJSnrMUr29EcF32gxzSEFMASwFgk6faftUz31y1P7pFX63smJD44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254rNpP5aoLcdxgjeHyp3XAdprcNd7jKTDXpzNtyDyPF4CJV4Z2EyVM7ouQk8tBzSdp4khnwFgzwhSTyg2pg32ck",
  "key1": "zbQB1gqs3w1KNshu2LQXf2MFMv6uD2PT9RBHzvzHzBCK9y9pKUkob93LzbUNyXT5e5oj2CVtc5CM5aJMJ2CJVjj",
  "key2": "5kLFdQ28hRdhmWb4ZxeUgJFQpiat9NxfEL26PS6kK8yzDC1F8bZTUgTKR4Qa8jghp47aJug6PbLvyAAAf4czNLSj",
  "key3": "37KhhSZEV3Tq3C3Zcs76i4ji7UMHsQix16vAmf9JBtnodxujXgi6KL5s4NE994dpPh4BVBWTES52PtwS8D3Njri",
  "key4": "56QboEdenLANKVuYLyvjabCBRCjFyvjkgueZTCwC6pW799hcxgpvjrRWXrrVyCNBFjMRE5XCUvWsadRLFWP9d744",
  "key5": "58GJ2u2SinCS4sM1tz3xYYp4p3GN98YkY57aR8kpUMaaiJAHGQhnYcyARgQh5hFCwM1D6zVxhLvbGDGeyGZqmKAm",
  "key6": "3dTq96Zs5hqjW5SFGwwnwkbeJWQ6BEySnz3uBhEC5hGpHyLSS2JFKSJ3dPvEhHCs6YC9y3XJmjVjgJpbp1Dhsogr",
  "key7": "2811SpuC1iD9Y78YqBCA8g8i5AiGqm1Dsn7sFh9AY6Rix2GYoAJPbCkssfbjwWh2C7bFbGx74PbxmMydJqmLwsyM",
  "key8": "3jgQb6s5VoHnUU2HYm9tXoWSiC9xyZoQiHqo5guWfJP7s5e71zrqTWf8EAnYrv7TSEiauU4EVPAtX2LhTXjyenLP",
  "key9": "2bVfWoMCKU78YHZHiLoDZK9EsxdNkSimNLUT6s7MEs6ZBZuXxvoaEKxN9qKqxzsqeDvrTFw4i7W7jDqyZZntxz3j",
  "key10": "3k9ruUZh3X1ZceQVyrnLnSRSHfRniFuk6H8E7W5GQLxC9QtKShv4SZp46p53yR5qKSacNph1t3DC6ofuXqSKPSLn",
  "key11": "5P6ekeYPcc1otJDWeiDcRAwyhGDdY9PVEpFiFini1CTgz6jYFJE31KytyhwAdcrQk74vqorA6SVn4AcCE4oPeMn",
  "key12": "5BB8Zp7ZRReCxbiTHgSLYUsXsnDdERt4VpgRZZVzP83hTtrPVgU3fcPhYwr8wyUVsb5iNjdcMvrUs2EqthjZZsiS",
  "key13": "4ZjfNF7CbcAaoRtSZuR6meWH7Yu8LSc4dWfKW1rDDQjruhwKXvy2nFvo4FGYhVii5BPQuiJtxdFnYEaPxoyogxS3",
  "key14": "3he4C42o4ztEwmHjJtgErCEPBeL4J56mVD9pJnMtHNhHnGGABeynK2oQqhiYsjfuMCoWNEAu7BX7jm17mW7bB3ok",
  "key15": "3Ypk53ZquUDH9onMjcbvoDYuJkxk6fyWRJwxpowkYePtCswxyGR2KKhdEpPzRoicR4Apd9Jn8nAGQLPvBci2QvbE",
  "key16": "567xqjGejC1CHgoj1oFibRuHStGQf96XLxbZETpE2UtxBcJkFwBXkGeSraw4f5Cce9UrA3t7uvEzjeruw5K1eEdm",
  "key17": "2BgrXwPwcovRHkzMbBBLxwUcfSBcDKPNepgUjWJwk2Nf6hdZAZn5Cgq3EnwLWd2h5UmsNmnSh6FTyyWaunMAVmaJ",
  "key18": "e86SARSJXtJM4BBMW866mbrWXnMddvP1KRkyeSfqFUdPCtQ5fKtAtWx4Bqbmc8XQBgSfP2RMp5TeZYaY3XkGqa6",
  "key19": "4by6kDf86SQ4dxSQ1NAJ2vAiTXDqKWuHk2v2bT4Ae4gfQRpixK8osbNv5mUWvoDvmGxqjC2kbXGALw9aT26gxxrU",
  "key20": "487C9v3AMtkjnyzni3PHv73NoCmC6hnTwxTMR8upXNT5cDPxmJmmPgHUkbxAH45bwBCeNxateoNTpCDBzuLvzPZK",
  "key21": "2qgipwDhGRyEa7ijHkqHscAU7t6AomLQjFCHSStKsmTWk6UbJadRzdvKkpBoQSqZzWYes2WbnzC99XgUwDNDzckX",
  "key22": "3Qy3KqNV3WzofJwxTu78GmGn52gdJTQ8x8eD2txJZxn2beXb9yAdo43jkn5rT7WYKShUX13WPMBd8fgwgneohMTZ",
  "key23": "3Wc9QVzPiq7L9bHRibvSLirnsmU5TnmLLfBdzKV97TuKV24oG5Qj9RFsdPzY1MJxKVqVxVaJ7DATGNVCeHYvu6ze",
  "key24": "3wNgHTNz75Hvd7hCx8qmoy5BPn7KEHiVKVgcQENnXQnhzxqNNnhK8WQvQ62LBGFNtLbJyMbjcZuvGgTQbnosp1Yp",
  "key25": "4iK9gGfqXX9NEM5KQ3UmCBcwAWBcsVHagSJ71hPAQhPd4CaDqXfGrtiWAmDzTM9HTTEoRyvLaojcBET6sxL91kA9",
  "key26": "3Dox1CqCjhcUtkpizTjyMukFbrgZSufuSAJs5qmcnfdTk5zoQgqth5UgKCHD67LTrD2XAFb9g8ABCyqSHXxL6LQJ",
  "key27": "3t65ogBariQYiAf9MS2pUHkCpanBPrW7wKKp4F7MYiFAkqh4PmDkHeY53nCw6TpGVwQa9Fz1YeAsyPPPey98QesF",
  "key28": "3C3yCTsE7G8KUK63vjkbUWLGzJPLaGUd4cj8nA1wSioLMG6VYUmZUD1uVTMGyTXszxcnSoQSR7jqCSpvNZMVLin5",
  "key29": "5bhhBzXzb8BUUorEAnJdgA552idQThQPScHGugqTh9EhkHubQQ4vqkLc2iTCAVMavwVXsMETeikVQvi8oKQWtzDL",
  "key30": "3FQkMZr8BL7uxfDSQgbHqCf1Dv43aZy9ygrYMWqLeoRTagoqbu75HGbjFw9gGBnztvwvXxVmanCqWhC1KRd7Xt8g",
  "key31": "44yXAgJ3DhAxVc4eE83nto5LquexZEn5UPCs4XEHoetLhDBLyB9W7SszHxyDS2m6a6KDfXS5xxSv4JQbSDuySshu",
  "key32": "3gd42fNHW6y88T3EjuDQHEYDsWcc6J5guth21FJdS6ErSmbbg7j6qC7TroGH3H1eSiDdUqeu2nxqsTh28sxsQGAU",
  "key33": "44CYZea6E6PMnc8KVcvBJFoh5FzwfY91tcTcqYW2UDe79dE6TFsyEeWAqbajeWp63eYEDyNYZRMNRxxWEvY3KMJv",
  "key34": "PLynsrkuqbXt7zpdBxmdia7dw5kGXEHRr2vzbEwPqe2KEf9sXpjC93UtZRTvUd4TLMQYUAV2cADK21aQ9MJ1Vfu",
  "key35": "27sHuveKJ63LujcCPXPUQnUcProrS164KbZWtT7tHnT6R9aHz71iniH7iHGvkZFtJJLvR44mzUY1NhACCrKsnvud",
  "key36": "2F3k5LDZDFe143EH3XMQRGGJKC8StzBn5MoafTtAq2EhquxoPTucR8fMvgKr2ULcnKiJbPZVHLAcoMPYmm1gxF8W",
  "key37": "4oW2kUmo5C57YmqwLBHHJaLCzcMJEE9Pk5UcaqZpNpAuB58pfSozmJLVSd96ciM5H5BMPfQgFxmfth22GDho9xpq",
  "key38": "3qxARKk9YE7LQWLcsqFDeGR1kFNjFx6egJf5YQxbXy3YUds3oggxciPJEW9cBJxDLMsyFCM7PcveSRYfw8W9GoRA",
  "key39": "5q3ygFqVrJc2eJhvP5hZTrnzRnoz4s1KkebXNFS4cpcaQN8LnYrH8gyocceGHr9ubwgfqokCs3cimcuSqkaujSoN",
  "key40": "3vbM1kQRnNtXxpngGKB6rjitHNhrQX8gCBAVD71QL7WPiJ35uyYisgyjT2um4TLVq7nC8oeqGrEZ1PQWWP7HkPTG"
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
