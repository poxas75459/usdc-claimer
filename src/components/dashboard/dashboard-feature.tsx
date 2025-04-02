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
    "8kXeY5yyB1Ff9DXFViaerV1t28EQwPUQr4G3696ei8bUQMRmboT5Uw5vFKV9MaGBW4XMKshCVEUZQ4jdsXQPKRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxnnkZtTW9P54Y2jzGBuA5ewLho9WWtSTEr9iJzxw6diDymFMUpEkR7zG4ynLcFA3TVsKGYQQuY9G3h89ypFm6i",
  "key1": "9QeCTUGzTDkzVYDfZZoQjCrb9b5yAJzK2vXeXA64aP71uXSSMfHLiNTgB2yq1LpPMHdRzXRe6DB4mbUVZajv5B7",
  "key2": "2W26pAHRb3VfwPTsjWTmYSiWPNd3xUrwnjWoW6YoefZwS2GbcSG7wqRKwwYRCsgcv7gUcB2WnDFVzY1ZFkqdGZtm",
  "key3": "4EtFdETvkTVPj2LMMufWvcizxC5TWV6V7pECuadpYrrtwfbXy9nFTAkupVoE1Z7n3HKxgdGdged7aC6SVcdZpNuF",
  "key4": "4cfeuNyuHqDXr5UQZYHCjSVB3vJi2Qu6rema27PvDZ3j67Skp7dB65Xoj2UGAk22AFxnR9msr4ztCumk2WEaZFPs",
  "key5": "3ePLnaW8qokjwUhe3HiCyA8PKmEpHrJSccTDFLHziRQYVwtworzBt9a9znknt2UQxD5LyHLQwuJLRN5ycujeRizJ",
  "key6": "58qucmoE2Hx7ReaovmpyZkgGstKzkWbdbUikiAtE3e7LNJazTEHugyp8phucQvnPWwZspZD4k9GZHhEZK7RXKjv3",
  "key7": "81h9xTw6iF3P6zKtfK7TZVE3ePb3rMoN4fP7QvBmjEWaGuaWgKF2Si85ac5KL2Py1eedNoG51K7Xx8nokegUejk",
  "key8": "3mTQkPfZSnoQrxsrsvuatkBjd8GKvEFaDxw3wcxVKt6Swd1dxhEsM5Mwjm5NKPdr5duuWYuLum662G1F4Qkeh8Wr",
  "key9": "4kh6ENuHM6Rk2kuTPBu7eSytQUVhXm44vXcYEzHF9SoCxTmXSc7aUBWNJtwNQ2MPB6aUQCv1dev2iLUnQJqemCzr",
  "key10": "2YQAzqvCnnNzVgqoqQmNGpVdYaL9gFA4gN8BKnYfmWwV68UmnZMe4A7fJ7hGUqmQhm1ihjJZsBQTAHjQV3rKqVhp",
  "key11": "pa7x89CixCJbX8s4xAKWeyt5WYKM2aZTnceFqhJaWHGJGebkFNzSeM6wW4esQRWhs11ArfasYRGLUjxSDUdHLQm",
  "key12": "4giiUJnN4AGMaRJqLgJkdBGucBKVq8mNMzLSUYxg8XheswGNXBLVYBQSxnEoKvj856j1yk8Y7Z5H4NkZFyTS86M",
  "key13": "2DLmDKWoJ4tPeUo7XFBs8Kb3BmnWZownwK8uzU6n91XAKd7WNaysqqNbpHfv2dYpd1j8VFE92yE7gBDU8QmG2nuv",
  "key14": "2Q8VPCoNSdiwKAqpPR7Qunfzr4nABL37Dp9g6acue6yYQmrxMEKeVsvKMjxYm9mj1h78cTkZc73aX38rKuBk7ykz",
  "key15": "2BAYaSPtuPuLXyeGyJBNfybFJMuyZNDzWhV61DRYobCDo4nhNFpLuyncRJLSj3jAmYdQdDqzKudgb5SxtAFYpRvJ",
  "key16": "Dzws4eDwQ1x2xjSJx83cWQ1vcTy7XdLDqd6xLq9pSQHa4aUG4uf1NHLsS5Lzotm2faqjMsTK8KBcfEN1MPWQUnf",
  "key17": "36CgLMfpUCcXYp4UNwie5W1qEWKc6ZF8orqpCff98UZATiw1zb73zd4QeQNHNUjNdUxFyq3vQ3Tz5PiNZ3CE5EFi",
  "key18": "3QwFqb1vccim9fnruoUToHFWorFPG9UpVczqE6mj5gPhFWzB6ru7uBerjkZXxXNdNzM3dzXL8jiQ3MoaY8BVhmqY",
  "key19": "2jLrtZq9YJLLBToVQmvfLT2zoe7ZYLGvgYvjVHV1awkZCDDa3TEMMqUUE8ZaDSqJXJph6YeGLsdqWuK7mMaZbMdG",
  "key20": "48wcTHyeioNGYb114Ef9KZDeffLZz3DY8bPKCVxLHYT3d2n8WXKjmciV9FudJqSj7ptYsmGedG5LTFqs24yrViH3",
  "key21": "4SPpGuAEES4LnVqzB2x9BfcA2onDL6VstdktGVcMfwH3CHUwA5Dj8awGsHWQCASo7HLJvyRxexvzKSJHVG2kziHy",
  "key22": "37xeEWtuUCBu6oyZrKAuMLnyG2JA9XaGau8Hu6ndd4CfHUKNJEpkpgAUvscjHFGQxBxQRkUFbjDxU8wLfBvcWUQw",
  "key23": "5Pd3e96QnnULivftEZ57NaET778wPGKkqcgvPHFPUj97fAYp8KSC5LeAdwyKFYmaXkb69jSvc5a3Wjiff1KZywFA",
  "key24": "sdCQfKFHoeiqghaoixjGYhFtnYNURjsDtzT1RFeT4FXj6R576uWcQiRPKb1toXWGtiGfdawJ2L8BZMeEUv1Rzp1",
  "key25": "5JxhrWJctpXMBhZHXhYttuP4r8WdbkU7T9eiqPHp5pk93sRXmHSyBFmfbkGnwwcjzGdkuoRxEizNiKYtHLEKPrRV",
  "key26": "5PeeBaZjF8DaTRCEWbFU2w5GuQ68djUC3eV7uM6r9TaZPdHzfgzk7dp1dP3z99N1ZiMaUGVMMSviAGdLuTGyWA9z",
  "key27": "3frivhffArs9ey9ron7bmq9LewJbSaAS7FaFM15wcQYgBtsXLNnVRMqPtHwFpSnWst56rdrbBk7duH5GMvrGvKKR",
  "key28": "612aFvgLYkQL69ENdi6r4uxX6u9TF2TCvLmg2SHNsXFwKDSwtXmcigvfDQCqEHkpLpxhaoevvGpU8QNHbNdXAnHU",
  "key29": "vsgBt2BAzcmoeKVosoeRjES74VLdnCQJkBujyPu2kQcuLv4zKHeKfwHNk4kJrFw3z6v2ZUwNDRZ6atvatva4bmR",
  "key30": "HYaKHFBhp2BMHjP8ufgFEz1CwN71gBhuQUBYfenrAeSmEaN5iFRkqYW1YMsDKXNa6XqHUsHcuhLMMPLQT7AVgqK",
  "key31": "4YbpqqeT3Tabvsuu9HWXz3eM5q4HvTXGbMwspFJ93o12ZbU7mK8enMFTV3RPYLBvq8ktuHNQsALDQee3sqaptZTZ",
  "key32": "aFBM91KKcWuTkFNShXyPHRAGc8qRMxuFa4qMeJV4jztk7eT97iwCF9JUXEW4H4DaSFyDxhuAnyWA2RjQ6Ep8LJB",
  "key33": "86NrDfGNLeB15KrBA4pkbHHyToZCeCXn8A9yWUxeqrK9qjE6TE7FQYQ8J4vwMVx5kANaM5a3ssZDoh9cXFvmRxJ",
  "key34": "3J8k9sRBM6n1sN5NZAxngg4dAyeujkMZCGeL6GuNg38zJ1rdiXSX9hqPj4F4Gof8JAJmNegFvRDFiAJKMfgpteD2",
  "key35": "32ss1h1jgMdCzoLNX9QARrX2aVntLxKMwALZi197WLPE68pybCTp8c7EasNV3iKtunNi31wLmKgnUdBQJDZDQJqz",
  "key36": "3Ydrwfzu2oxPtWJKuWUn66Jyyxid4HkyK8XJmwz86TCz5RXF4rVGYvdaLn9G9kz6andSmMq5fP1GXpUyD6vohYNB",
  "key37": "4BHW4JAs1gAgViicUz4MfM9itrA6C6sv94Kd4zfZLJ1F4B2g3DzetxtaR1Quhyeqgzua97fttXSeStyiqykFMWAn",
  "key38": "3tUwQjr6Dh3oNQcKRsYLxYYkSnXoXubRhQxz1sincsbnFt3MPrz6A3cxR78pd9ciYu5gV6L4zvShZ11U3CkEWWW9",
  "key39": "4RVCjj6MPhU9DqsJ4cmKfXwm4ML1yhDwcfPVrGpmGoXvTzyyBBrwtv8rGMBUj2eoHpYpubec9VHdFKSUj5LASpqi",
  "key40": "2q6nr7yB9W8UxCavPEriDDXjqftbiu4YwjGHifGhj4fhYUCWs9tLTjA9kQeCd9Kk4fYgKRrUEFpoJoUffJtuKNx4",
  "key41": "3d2W1Y2aKPqwcwSA8eCyqUM8AWg2cs8raDfACHhGW4xrADcm4Jcbd6npVD5rbEgTWio1gRQgUWPyoGEGdbJGeSDS",
  "key42": "L2FQ7owLupmCMh1Z4BXyK1UiK4NFSFVwVSFUq7pF82oVZH9G6Zk5JHSfmGf31UHRir4LLG6KbocWmuqWDfrQ77C",
  "key43": "2kPVfEXYAHeNnLjUvuSCXi2UKQ4MLGyutVpK8WQCUAqqgCLR2FYt8ezCW4CPhN3GoddT1kcUqUpbJsNKejFPQm3N",
  "key44": "MEwzu8YVGoUpafnVU3yi7rUwEBmtpp818sih5VgdcMD8fNveTqTSawaTuBNXE5b8aCKZQibQtna6junNdTMvL52",
  "key45": "5aHMd8hLpronvjpQyJXmKgHXPYbsc2AgK3NmSrsRy9Hwh9VuHmqRrJEuKFso1xNZEp9VveLspR5kPA6UhXvxt81g"
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
