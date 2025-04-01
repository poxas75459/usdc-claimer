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
    "4ndXvRe3UhstqW4QdDhNECp87PJUb5Hth5TgajbiArFtCsa5NhNsDF24gX7Uy3Pso4vBdP1eThZ3fZxgvUvJ6JoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vr58XFLBmo8bRhSZkXth5CY2q572E4Umm8REcboDfftoRyjuL5iUj6A7J8Wu6yXo1YXnhHiue4SkWAUKZzjJswN",
  "key1": "4P1NCX5aTZzuqWWnid92qLMfJ1VapjFqKkx3J8thiU9kxDDFaabv6RimffPdJDJKHwT2Fw1M4NdExsvrmqXsndyu",
  "key2": "65pT1yFhgLNuuHBMDGe9mmLdNQKGHfNTQf9kAigxJ2MrMHLngVshhiVTyKWVBKu2kXrZTrQEfNu8GHoXPUiUPvvP",
  "key3": "4WN4zd8SK2qvx7EvbunRbLUUgtnucBXd8NbSgRZo7rrEpEt7N4RuCFkaSurg5aZahvbD5VuVSjKTPsqY7V45ZWRV",
  "key4": "3HQHZfJNktG3aZJScDZ11RYpexJ6oQeeUgcds3gMnCacmWN666aT2rAAcUG2CqTAwNGSXhho2qi4yePWVVEDZBQZ",
  "key5": "2ZLem4oBkKcGNZxRZroKqmUeUiGfghnyNonuT17EkW8jEYMPJfZTJ8kDCY5DMSv7aP38nAN3if9imCXUBuVuC3nS",
  "key6": "42dVdPwV28NbsRP4Qy6oymCFjWYuW3DgqcifniY9BiTcLjiUdKd2wgAJwh3CAxfv84vnij4LmPccZ4n6S1uPjRJV",
  "key7": "2AYfYKafjPMDBwxYQq1f5B2XJVqs16aeKAyRuYA9dMeusMh2EHkcTA2ZSYNN7QFN6TewkKz1pF6eK2qP7NedTHeW",
  "key8": "5PbxSmJEPgmpzuq3go64qNZMMYvGCSJn2WLA6qTnATfwu7g2ngPdQqCGBWpf6xGkAnqLQrfXjgdnFP6An8dxrdfX",
  "key9": "2WSHrU8FQyXk7CNoiyFtj6YeCJqXgmcZaJ4ooEdUX7XcPjemDYoogKK7kvDDaXYXtmyLVWDqLq5A1VJJmK331oNZ",
  "key10": "5CHP6ixskcYKUHJao6ktJti9j89VxZR1pogpLGgWJ5AUwXJY2sBDJwkqMPFjZNbqQkVLJVTJn1ctZ7Zhfgbzdv2Y",
  "key11": "2JaRZ26FmgMjYorMwv66ytHxzMxgZ75Ez7pLT1XhpGDvjXSV9aZeox73HE2Mt6kG83BER6Q8pokvxgU9Hfu2j7fV",
  "key12": "Gvh8TfNGrovTJkZtQLuLcDi9qjdiMjFJdATNRfpzLkH4R43GZmmtDKiFi7qn2PNB4EQH5zAu7Mb3KNzjGDvJomQ",
  "key13": "4aBfmbBQhc1dDU5nTd58tkgiuzKkDL1y8MWZAMHgbjLANT5Lz6VELsZhVQsHzajGa84Qu2XZpYsEJo6vc3E2ZdHt",
  "key14": "5icqFMcVMGpB4Pq1DX7hZ4sf1ACqXXeWP9Vh9pmFEj6ijzS9EdRdshPuZJ8HmvrEf6nwobceSiUMyjAusWWx2DEw",
  "key15": "4Rb3k84Zx8v6ptQu3sbk5tbNQaJ5hvtX7YmLZjrXxifJzufBz4MhvX5jh6MhoHeAcqiK9sDD5aT2jQkwd6QKyHKq",
  "key16": "25YgqLkzLjKpScwo1VjpdSqdMaWLpQshrbwFkGmnLdDaM8TXmxewhUyNscUx1tWUqJigGEcMQSGuoExRBkHTorUe",
  "key17": "4M4fDSZv44vjD3Qzeqc6Lv23couNAc6Jcup1CbyfbazJoMhoU1xNXCWE5gYLjvkzNssyn6zYfiBvjFooLPdb6o5J",
  "key18": "3LBwZdTFvuGhijugahRYE6h2F9URgMZKJ6nAXEEB427VNiqCZeo9YidZLwDP7DveYxWNgKLtLMxke8vrD3ftZh74",
  "key19": "923LbR8hd24JsP6EgvSKb3a1nNFpuVusv1MdagrfWjy26mbji8S1eLYH3fy4svEzJ5wTRKef7r5sUh17CHuF6QS",
  "key20": "4T1wEKkJh8HWhwtXiahB2CExXhCNuhvfF1cRf7fnCPYB9Vsq8bK849gaLHAiRsruXzvCbTpax67ScN4Z7DdArV64",
  "key21": "3GXzH2TXsUk7WquYXDt7FzyFCNk9imRzvAZXUD8ZDQxUQd3XgY737m2bW42MWDiJfFoVTcsN79W1gQz4ojVod4eT",
  "key22": "2DNSMpMZnuMq13329W3KY4tCNZkeyNiPoaGjJzYcmHkV5mVLxjwa4MfttzkBdjhaUkw7Zvb4y3xzp94n2Vqebsx9",
  "key23": "5VGiutAppeBwSH8JQFMjXwwg9keQifNcVMC2E3ECRLXtUNczSQmGpTTEykhYgTbW8J8eQwe62eoSg5GGAmeXTYf4",
  "key24": "3dY1FLL19nQpKqXvb1nbZT7S29f5Wom9sMYCzdiWoBphwhmECYzLjamkQBHukyweqjm9UK4TcRpm59aeYgfs2QnA",
  "key25": "3Dz8Bu27Bz8gzi8Rf6CYnTY1WEs9xgtzPM7Kvjsy9kQLz781pfZ9sMPgB5XoSihA1qSRB2CU8u7oVhWtsvdAEe89",
  "key26": "5Gy9SrMTXVijyCMVNwyn373Tdbu261ncsbRsH47GK2nWLyzf5vAj6CD6296zsSW6CBkwjSdkNBxbPNtsBNFfYT6v",
  "key27": "61gsrTiKQwTk1TLWRvZysVnJTP8juHLFdF5upFZTcF1HR6n97kpGsvTuxBA9eqTDXt7XqGMWdiyBXThZDTjvrxhD",
  "key28": "Ea3VbNGtYTSCYprnrb48macELLxRuv2b6GYoT2UiTZkDF7zx32M9g1XWuLP9GGyBkXdk5qUm5b5fusD4FdnX19F",
  "key29": "3h1e5xuyiz1kwr9E4vTATWa6kKKEzBhWaeVHn9cVNX7GANDAyQMZJe4Z7kcsXcLyCsJ2eo88NqCobUwaovxhpR3V",
  "key30": "4bwVDCs4MFXCiGnwb5HAY1rQD4K4jq2Jbg38G5xtEGkYuNHAqkBszHik7noNx6m3egD4Ti7ZGjgXeG5nUgiExvos",
  "key31": "4TBWD7Qn4X3kSbtEXy51E8UrAy2gDuF92vRNiMBbNDa1CZQwJMbuz2nfveV2bHfo664qxnFeo9sNRQMAFDYRBSf2",
  "key32": "4mUULTgedREuntzYU3GHwktMgSGBsjy2kpaVS2G2aV2gJWp5akrdxPauq9kzpY3T6no5jegkJx33M56LGCJ3HLgH",
  "key33": "4WUsu6E2v9NzstjXid2F4KPSTQfw6Rq2bHrz5oYAqqomoKpf5fxurbPB1sErh2ajv8HdiqJgumMfoc1uTeXYpFcs",
  "key34": "5iAyD7F9gL9X1EM13jSEpEZitftwxT2iU7yUoz49ndKqEVJar59AXWQoRv2rvksjAfVmE88bgv5LhQG7BMzY7Dt7",
  "key35": "5cJ9KdeBTkYDoW3uGMheQ9G3U5hE1mjYSKAuieUFWSBdToULKe2HtdraTVF126zSVqSC3fTaXb1CG5YoXzH7oWhc",
  "key36": "3kuJcAtFxaCNoDg6Ca16orv211jVFvB3UHhgWTmih7ocFd6GQNzidyD9BLxDKiS2MdJTjzWvEmqUGjXAGSpbPooa",
  "key37": "jjT2j4b6pNJEAAMPK91LsnNbC1G3rWRAmHCgVNMVavsVQFLdBHFDT9nmTnoZs2XxK8AQsAAxMqbxKvikxxBoi3V",
  "key38": "5bFBi6TimsyE51UJ57fGEtyHVzLLTqyaigfC3WFAb1M5dJeG7WUE7m9i9dinu5M1FweH6AbXgcG17YVoczQNA4Jm",
  "key39": "2F9C5iXD3Z8qA6gmUjahfBgM4zpzNEA6gGXExwjZXGo3qbnqxaZQ2ssKUJyMnVgTcYCABqGSgYUaXZa5ssJrAQbt",
  "key40": "2GeMvikx6WD44MUKZEkBkommffhEv7ozaCrqJf8AYZwxUFs19Yhbj3KxVMJ5hWWuGAujh6sFqD5rXm45rqQYn9FJ",
  "key41": "67iSEjFyWG73PkwZzc5n8L2SbJqJ4MzAyvhtfksMJXQsSEMn66xVCc37xbQeAsH3Xp42DesvMdJdA9mZSm4wvEbv",
  "key42": "31TegU5SKS2uqqcRAzhBGA8GpyMkWxKh9SLkp5udjdm56vKY1qkA2njPjv7wPJzBX7HAaRHoWy1JtrX7a2G1eHCL",
  "key43": "3AZgrPtnsQUz7miihZJ9rgGZGKouZ6acNPF9HVvFEWHe4weKobDU9G3kLhoF9PVKBqGR1G4DmqkmAxej9HiaCut3",
  "key44": "dj429vsVvPH7TH9nMcH8R12jLMB6b7hb7XvS9sf56fi57mGtDnCZbi8VnUz5dLxQSSK1p1T65SguYaeyv9CdjQa",
  "key45": "3qLZS7AaAQS9wzbUHduzY73bUgfmCu7Uh2Xn6ZCQF2Sqd4dBqnVhrVZbT7dPggAeunLLQZB3VuCYc2MHJheE4puu",
  "key46": "2wMShYHxdgnedAxnrsFhAERMbfqSWqwUUA6pgfeA7bxxFP9abHAcPEowo7FUtG5utf5voWuZvs9pY9p6WaRL2wjK"
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
