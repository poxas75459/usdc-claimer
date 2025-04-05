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
    "3rhHSXzxgVyBWLt53mxMnxJcSvBnbhbBvhPdnzixZaDfvjXyzDwiG4TFwqqvJDPnWCMex4ufWsCK7tdYGoH2cFof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48E49WW4jUQaJA1huEoaMkhPyJRaj8qeFfyRsVo7jQrK7CDTwtfj3dwJSm9YCoSB3hhuV2VvVYw2QEquTBuKnLz9",
  "key1": "2MiF7EbnXvwBKpNcE8tkwVRF8hYthFQKu2Pc356mFGFNbYBAgsWw2ya14sYe4CJ1r3yj5FtwW8aoprT3qpW6KXJG",
  "key2": "23kFhdyDcWajtfSCPJuuMNvo1Tx8o7QbniXTU8JVn23fohCSWnaFxQeKbofnaBTndeYYFiyFobkLanzguV7pRv8g",
  "key3": "5hFQuBsMTqR6mh94yH66zPt1JRKNYK5JyXQC9BusejLKiTTTyAxtod9BGnavDEbBD3ZxJxkpBeyMPUkvCuGUZc2p",
  "key4": "4jLWmcUSQTeHitPA8Wmz9R3UxWN3QY9QSQX1JWqNUyNHN1L3soo29UyvNPJHh6CDNXLnArQUrSB8HPYJEdU6umvw",
  "key5": "4XhR6a9ppQyxVENt7cGL3gYukrxv27EVTaMaMX8N5zL5KtUp8JtjfmdLQiaZXynYBN9sUPNG1MWMheHPk1ne2MRq",
  "key6": "3yzXVXVs5BnQKPxXsRBH223jvx4YNpKXHTzGG8imvbg7bszzSn34yVNs76F8ESk6z1YdqSAmP2Sapsh3ZpHAE74Y",
  "key7": "4MjsChENobFPCj1DUUdQ3BjCrTdBiAaFxbNzyfh9RVmNUHhxNwNtaKDeEXFEQh1nDGoujnnYwMuyKeZBGn9T7aKJ",
  "key8": "4h5Tikub9mXY3MddwiWx21sRexxgu7gaT8DKHWBFxkFsqwW2UERUJPZVdZd54JU2X5pbMawbPqfFcqeuYrJcw3jv",
  "key9": "5szj9gRXcz38HXZPxSfqHbtVKfdv8ce9R46GaRgyRJnEHJMURNGyxVw6HoJP3P7rrmmMUHSs4zFEdem58hrcUyTh",
  "key10": "rk4kc4ETLFoMX6okcGLpDkZZ1EHow4FJhs62mgRSFXPqQzoDgX4xGZ6HUy7xTvF14KYDrSnRR7Lvt8VZdn6bc3C",
  "key11": "J92xYvH4yjUA4uCJjkY8LNKbV2cesrqaLFXH8f9mkdCYgFjLiJSLpcQPVY43hvAmiUqfRrmE9Ak2mZpVtQkvaQ3",
  "key12": "5Y4d6Un86D6RhSp4YQnMuqqZ4VpGaFmkNizYjj89a4DGUh7bs8sGou2rhDkAQiYjyYh3y862dpTzfjTWHjfj4EHx",
  "key13": "V4j2G8kCLJUbcMcJkqHwD1dvbDL4SeSnZYufoHx7FLdZikVRtxLxAw5sPC557vz3bzqpBb8GmS4C4LJghWgEwav",
  "key14": "kJvohk5CTbhQ2PF68cmRgz7PEy7G3zpJjjwW7KiR4Dr3hHiKq1XnoJY93yLEvD6xQFkg4XAzjp1z4MWxLt3p6nH",
  "key15": "5bgHPPvUZFz1UMPCFQkDC3az7MdDkqLuaYA9TJqzwKE7e7XkCYMcw1wd4mRH6MJR4KRoxpTje7A4zSZog61pJVXS",
  "key16": "LNmcVa7UBLwxi7ioZ75apsnNswncF6DxrMskxvoVLjz4XD13MKZpXDbXTgzYH5cqkyg3mfXNwDzsWC1XrtiLHWQ",
  "key17": "354jCavuWc57TdrAKNUjWNVBBykmBLCkQjHmjFAn8Y4hgjaepR5Jct7puxUz5fjWuBhipKExrwF6e38sYobtAN2j",
  "key18": "5RF4iLCJ5HrvF3fvUDFTWC52fau5eGvxDcoYLpD54PGUyw8Fh2puqReRYsqXppVJRFLAK9PuP6w4S6sGFhY3iHVi",
  "key19": "3ErWUDiMWgjyjKQ5PojkiDcPxWoGZKYKZ6KJxEuJ3JwdjPFFKL8K52ueALuYQpaJxEeWXWFurToZ7faMB2m9a8tB",
  "key20": "3csniN5LZZ2wufGSUi1tTxFRbdBKYcvHj1PR5V1AoR95xwAJXPHAgAXWsQ1ZFs1RFx33xpqaLrqgG8rfT7or7oCU",
  "key21": "4CoKFo15rzd19hBiNRHtQZFHwLdUtaGwXT4Pt4FranptvaHqdrbUHLbSZ4f54Ngi1eKAyBNd3QXaaX2sDFs9tkzU",
  "key22": "yuzZ5GJ2YEsnnec2ijkYk9FZjQTBMD312cLkiDyvwstLHk6gKi56eYw3mEfv5zXdxriiWPGk7YipAG1RKh4qbVz",
  "key23": "SoqjMJP6r8GHanMknpBq6VQXjc2SUo3zGWBVkqt3vVbyacBtLo91FmY2J1xFHKepnhidQo9mJZCAQYJpStd7Di2",
  "key24": "3a5tten4wjrPeu6nNkd9QBKHEThhRcj3XHrszkro93WGv9wSPf3FJKHF4brGFFE2deuWBs1VXQD7E17ARypZ75wn",
  "key25": "NxA1TUtmekUn1veJUigWaaNJT662iht5XGQjbkmz2PLofQDpjLjNWMkaL6mBsG5mXZbxUTfhMWFNAArujM2J19f",
  "key26": "4G2UrSgwBMTkFkcsp6hBTcURte8X5X9DEi8PNunnFMVhjrs4EjXnptDj8icT8XZpnZGjcDHnwsvi2vZ5DM9kFman",
  "key27": "5UoxkqrobGkS1A2nv6iBWy7D6pGh4GtWfH2F9fxThasQwsAeeD3oFNWdkMNNbgmKUsotnUSuvXc3X2GS4xBmPiFi",
  "key28": "598At5zhmubNZjpaNT1Hrx4JjByG4AFofjdMwPGuLp7CzJaokBMLkzN5JWtsTgN2AyGXhHKk6XRTyuaXU6bPMVqE",
  "key29": "2kn2f7N62AkKqfVk9QPemVxbx384VVb3D5dv33mpzaBTNHUGvdBEwLLjoXMuoVN7iAmGkVJKGBAhhJdvc9oR2N9G",
  "key30": "2A1QTqSV5yrWWwQAu15n9gJRiE3BZ7X7kJSwEzQfix9XRvzb3GArvoJD8d7LUpMPx6yoDbCup82qZFWt5ieWW9JR",
  "key31": "MEZFE431P9KoW58164q5GTmMBvEWZMMqS7S3N1oji1BnUCaBwDuoBEugptCWTtMxGWj4PvtuSNMy74yg7GMXz8A",
  "key32": "498oXQwepFGkd3gGJ69ZmGCQdcEyf6gab9wFoQT6qaWVpJQLPmeqWWpRQBhcFLLyjJP7iZwXjPP6DDdx1xvgTN3e",
  "key33": "5dXgU9HpvJMm3ZZ26KmVN9mfQoCfh5v4Cqp5AfQchHsEWDmN3R5kAuxQVQ57wC4KYoSDJJLFxFysu9k843GL4em9",
  "key34": "oZgGYdopQVQyMY1Mkmj5LPqd4d6xbJYer5PYr6QT8o3kQqg1stKhEWUh1ArnMiHku7Nqxc87vWPL92ZtyVJfR49",
  "key35": "5BpuQszHF2vAMcyopRkYacmBkxjnHxd3fnLZm3SYAgzejt9QZgptvyue52KB7VB2P2ZK8ZNP9ng7VbwCRHVd67eN",
  "key36": "ph2CSfYALpRRsztAYfN4z7Abz7HFvsMNydamBKGWfoLSVc8ARR9B1KmLzDwvPE731CtmrEZtUa388BCFfh8eUUj",
  "key37": "5TQHoRWNyfzUVTSqUqaaMGy2nWf4bXWNN9bZ6soEJC4kTJfhxMSQ5kzk1CnGcKSXh3u5oiJn3bw6rLMRZxCkDTtk",
  "key38": "wWqvfsScUz3QkAsF6hRSS3UtwfsQFtwi9YxZyC3Rb9qDa9g45UJ9La1TKFBFJprQe3yyuuwa6qRzrcKH5ZK92E4",
  "key39": "2vTqoZ7YfoKzPd1UvvuFn8QSsPxD39emDcTykSn9x7ZZqL1Yjo2dBrmgmh861iN8YhWeEosDQu5v7Ut8a75sP95w",
  "key40": "5C9HQ5oujLSPB71Q8UYSXhnFUb2GWVta8szrn6BhWAqmXxqWNeJFVNFa1Wy2NmFmZAkwxr43krqPAhwVQ3e1Qkx",
  "key41": "4mH4bUothnd6APC8jVxZcvypupX78LZWcoctsHsCeC3aKLCU9p9VeVBFSPnazNpXwBxTYigpgPwoMW1QXSzQq7n4"
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
