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
    "32VjpHmTvu2vhgzsSHSZ1R67GdjEjdoFDMyR5sAhaRN6SV3S7a4FqSawiBgfxex8H9UzyaAGz4J6jwfwFNhRrMgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qurKRHe9BwMC5h8t7ccFXymwxVnsvYRehomqu5CABAHnhtDVdWzwn729ZcVars1J77iLZZsyChBL9Cdr15PN3LB",
  "key1": "3i9typU34GNWCVxCjWMBHLLDd8Z1sP9dF6tcARwrRtw6zncAvgr47Egc2MRMhvA2wD8DWAaswU45yYKDuXLcpWhb",
  "key2": "5SgtwyyzYkdkbkcaV2SE824C8cR8jgCaDnRUG61JK7wQVdcC4tNN485119XdvUBKKBakF3Kr3Mr7JD2sL4iGeS8S",
  "key3": "26VksFfTdefT2PFMd92FhNbDsSjMCUwpTu4NnandtcZf7NLaKLVjEkJ7njgfENYAULEQ6FT7HBu9EJnu6USYJfQE",
  "key4": "5xaCo6sAW58XDSVnox9WqGp6L4n428K4FSdZ9ccNUsqKxcV1i2M757RSVuPttS8z4E8wUL8Qrkg4NbYG4asjriWs",
  "key5": "313qjRC3TAPRFcSojgzMdAwkxWm6YHUit6oQMK42G75wUiaDoVjaYdd4LfmJoKUADbxHhYpbST116po6qQYCSQPS",
  "key6": "3vaYUjvHDCQxpnNUP4FtwcWJCbGSfgBRHK4rwnBoCg7uyPu9beNKCTSdaJqFox2KgoyZa6aUAqHRzGzDBRcVoW1t",
  "key7": "xTLzzMmJaw3jZKpqNgKPKFPBGedzFnCvNFx89L8aTVZ5cVdZUDMgPzKr9sZw6qtbsLrqna7TSKeFT1yBASWnTf5",
  "key8": "dBs6eLVu1Ty7iUEPLqQq1DEd9CPmtCXgxG6JaYiUojFGnPgov3dh5ngtKcnas6hrTUegnxbdUfxrNwjXVJHdt7i",
  "key9": "DhWePi1NA4Xa6oJxDjshhGm3gPB38Aq5dPKHsNz2TRhB65E34GgsZrYAXe6L32kYQk9VQKdd2bWjJCUCVa63nfJ",
  "key10": "5zaVMkdNg9kfPnGNkFNpTzCEghFo4oALiW6oFYuebmiDmEMUXw5DBSwQebxKaBBszmFeiFUJaVZ1xebgo5JVw5Mm",
  "key11": "3TDdNW8rivnojgbKRbCTxM8BgAqm4kVCUZLZJRENhu3SbRofnYMu92Pj9B6iAxa8CD4qSj5EeMvm87YinKAXkSSn",
  "key12": "4PY6f9ECb8vU9eQAczxQguvqmDGR192DxMQSMcNrMk2nkzzasdwZMofujczCNA4k81Cvxkx4inFDRuJNvezMLH2V",
  "key13": "5KL39Xn66ytMrzgfcejdNtKLp5STuzGuCrEJ1niyFmtKq9Y8Tb87pa2DSubJ4Sn2meqZKgajRJstNF8Msgi5n3Do",
  "key14": "4BSg9wyGdc6xE8ore87scN7VqQRLsZgDQyAcmxfeWPFfJ1i6cXXkhsqHkTw84binSTc2efJeC1DSQBav8q53oHsj",
  "key15": "4KtncVpJ5Gfpp6g8jm6Z5xqNbHJpRyePGMZHU6VBe8MN3aQzYCHtkc2GM9fkaA9uAwKdirPdPbfZ3C8uvexD3uqC",
  "key16": "3WsEzvNyztuCyrwA8uaWNTtTS9vFYQ2QzfbAv31zeNamHygdDe41K49BVVfysnk8tjNRNHJReLHGuwKSVNdVRJ6F",
  "key17": "4zoVQKxBa1i1bxZRb4Xpnm1vZp84VmnVznQZmgzcuoufGMzkTFzVdTTrmWe11MtPttUzwsTsXg5MqwLNVeqTfvR5",
  "key18": "4PZPAxYSUR6oH88pZUpvYAUr5J5ZMfBP1pUPyHSG6aEpEb8YBU1Y14KPhgQvPzaKDs9p97Cz3BKvE8UiEaiZ1cTC",
  "key19": "4i3MmuUypuKR9g7Pkia7xYWUTdJj4mB9PDnesBbSZUuDS2gN2zMydJKqoRLPvzHKS8Z51B9QoBX7sD4Qf8t4KPZM",
  "key20": "3ZxbV9jFMD5DHVifScEZ6e3tJWcLK5WUgsr4TExTPN6XLnxdW83Z4y3Gimy21aiND4XtqFKRJbqkxANT33uSSJPZ",
  "key21": "5aXLCLJWJ6p9HzBop11E1ecrfqZiQrzpDE4LSzazDiYLhUBzfizj3ykJyUpC2UbPexCnVnLPHaNQs3qVMgwqWYhy",
  "key22": "4dUYcZvXEX6m7gzDU38f36dr9Z7kYpijUrQGXp3dXxiiLDL2eRgg9PXpAnCLUyxUMYmaP4Ud6CnULTBeppaVcrav",
  "key23": "5utPbzVTrdaE2fr2JAHExHyjYgjyiaKQiNwV4ikggafLfBxh63APbfWTmtgUtvpXNqQ98Lt5kddJEFFReiGyAnJ",
  "key24": "4HzfnZf7EHNCVHztyr74P6zFcrA9PeBEdTUw7E7jUTSErnxQfoJG7Jd9pFGzhLbJSWrNtM9dvShXFwkAJYtMDYAD",
  "key25": "2d8oVuwXiFC4KnKkjDLYciJVdumXs96a6HwKdrVX5tkvRPf31mx1fJXhgBRR3ZHNTtS2wYhLenA2uHjiPzRawKrY",
  "key26": "4HxyxzofW1mLnNRk19sYWAcHrvcyupmFKiHmEVmMgiZD54Vc2zF9ReLR6XY2aTVnKnE14PfQ62njredNSSWYKKkN",
  "key27": "5XaZvxxmg1FNrctoYJjxiiHfGi5tCrQQtsrPPussQZ5QCz9936b4bQ2NcfTkL7hdGvEsC1D1AyMUUD5s9wY8Sxz2",
  "key28": "2td4VdYVcJkgZY2n4QwVy21kxJ51Cz9c8iLf9F43z1iwLMY3jvSd7GajfHg8cZDoANsULK2ADGUCStZavSgUtVx8",
  "key29": "5f1pftX8KHwGHy5hj87GYgpstnxvfVQNMMpqyGQwW8gpL7YHtK456ggGkDCP28PL31u2ZTg2S72qgvmJZHCUs4Ru",
  "key30": "YyU47Kmf5BtrZhDhH1uR2ix1K8xEXqdSspHRfW2SCYbvWWtHUrGbLouNTj7hE2N8X9rCmWpe6UvTbeDZku5G1x6",
  "key31": "3HJYL3MRyjMkcwJvHc3kMikdCCr4ukfg5s6Eodux6wpaCqPRWskL1RLNoCFux5b6eYAzi8d7gbuFCXLowvyPufWK",
  "key32": "3CVd2RcBKrwRA7YMc8Um3nhsDmkbur2Xhukc8pJXygwH3fgbPohcUTyxWBe6DELM8HfSVESoeh3vvgkm5jWmxzWc",
  "key33": "4Xo59ozZ3PJqKY7jXiozSpFQjou4nQVkdttCHqXJv56rmeNZxtSgtVVXuSp1KzBu2KRqVgCDGG9LEhVnt4FMg4SL",
  "key34": "2H3FReubDPhLGWMksugV3nH9gVzgVyZsStc2daQfTpaDtE4oPjrmRPeaj6uno6FMviayHwX6kVYJsd3HrNcGnFMd",
  "key35": "4EiSE35VGLoTFveZX3roN7EwsDFmp3DKHm2uueQHagi5gWjDKJU3ykoPaaYp4VcDRE1jtszT9f8f2ixaWyQco3Dk",
  "key36": "24AYGyLX1eyEuZsp8mzarYf2SE2TJeGMpXn1NgU71pFXnojxRaRvJzzpNuQ1zhcMR7TeMhbL8TmcmoDxKAAinEwh",
  "key37": "3jwmcWdx4f5yf9gDH68xUzsHk54AvZg8wmoQmU7yJG8QfWE4rmdKtvogoxcDxmZ62THS9m9gVQPV54LGRJT2bdT5",
  "key38": "7FyBnB3QxLn5ZbteivYAq24ubHnKhVh9pEEyYV7i8j3gHvSDbi9vieo3jbCMZcu46CR2iwANfQr4RWmR3YBT4dQ",
  "key39": "355snCtDx1CrRbiNUWaz7tSqDPnPBupFVwxBXW3YvyNRbUaoCm6MbBC9jTu8b5kCa2xmtB3ftk4CiimE34VR7Uxc",
  "key40": "2Tm2vvjJNmHtc7mMg6FX5xHdw11yJ2CLWHcUbNKTuXQ38H1wu7w6bNQ22n1i4H1yZMvR5MjNv8DDLd56hwtuSctW",
  "key41": "5HDzFNm6RtL2VKYBEzJyb9bZkeMu9jWMhmBmvybu1G6sdBydUeY9V7HR5ZeheiFSR3DLzKZZzkskoV634Q6gJTac",
  "key42": "5yt6D6quqsSin5abH4cXyWX1UTfvy2xocz3BBhkdYP5qPxevVvPprcgbFNq44ay6vkyjyU65zf8ShCXUobjRbzmU",
  "key43": "VnpEXj8Adf6TwYH89yQCo66VfcFUcrFjFFeN2uC5XJdSy2xjG8sNppLfyAhurZ4QTskxMwd3j1hxU1L48ggvrh8",
  "key44": "5yT3vH3KbJdfpZx4PoaRMZBDcN2q8fi68z9XaofFRYvSBRafPKRr6MtTEj4jfYzDbao7kj7kiL2HCUpA9tVx3w3n",
  "key45": "5tNma4xQMafG4KurXx4DnvNj41mX1udZ3LST8pef2LNpjhr2vkAguvxcRQS542L8d7G7TRgwBy8QJcAxWPRdkrFg",
  "key46": "2fJxvndHPP2us9kNAKyMvaMQnVMyj59VtBAzyAXHBxUFNjnDjEe3P9jwJPdR3ne1p55EgeVxxKyFLBXPCcu6wruF"
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
