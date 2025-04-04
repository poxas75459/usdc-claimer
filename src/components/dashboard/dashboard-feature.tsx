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
    "eANywhK4EcEs88Tk3ubvrjXyF1oyKb5dm3U4WrW13KmjMt4w577T4sV21odu7e9QuS7C3VMsgH5VNo6ApMw5Dqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3sN5F4XSR2uy4xGw4EKAPpq8FtStjWtPjuEc2KzzFFaqjPe8Loag6hgpbPe3rN4LNh3MomMT93JWpAoLZGK9JY",
  "key1": "2r6UA9GGLM8wjViukmjvaUXy5ZxRo41mWN8YMsBXVUNndcigiSMRtptjKgvL1a5E7TSmXjCRvVSxvfTdXfgPDgvx",
  "key2": "666m8aqic8f6CLtAViavaLjMU43khyYRwnjzUdrmHaa5cFnpAoexXPdN5UEWHHUGCBs43JZiiSq23bP7sy2HAFTL",
  "key3": "4DZZitoFtEHjhMhBKaENbbtRrCgAVU675n31XiVrdV4gcwobkUZ4433LCDX1uNzrLVj6dtjGnCNW8aNQ2mGxUVgf",
  "key4": "5TLV2C584Yvrpyh9Rh2zn2LE2VxXiDxHzo2MuT7wPscZ3gdw7hRXp5sqDkiiPR6uA1BqFkND5zZwyp7qr6dDGCTe",
  "key5": "35a28qf57nRoQy2BUVhP52JK1nVuvp2DGf8BWemnHS2yGCC9ssFVUJ1bEjmN4MLnisaGceuo5ftcN7i4aRPXUnwU",
  "key6": "3uvBFpxXeCx7d7aD3kHbQ7Qi6FK7V7zF8JsfatmRFv27dXGwWjpxaEKSjEgyuQ1E8BV9nXLoneyS18SHVL7ayMS",
  "key7": "2iE3NpRYwHbcP1WcKhfgd4GVch5pAkczpJNPhr9StqXyfayKcfqHryZHqcxXckNpAfaDDTZS4QjJCS7ERDeGFA5K",
  "key8": "4wmterTMyUgXUoXpNfwTtptrn3Dw7RYTFFkxwCraUr4NvA3aUzUPfv4shRmZ75jkhECs8Sak87g2Wa3zQfKBgwf7",
  "key9": "5SXmir6PG3mubFa8WFHYMd9VUgTwb4AkZYWS4FvhShEprLXu7oupvS6H4nbagBdbKf4MkZav1JzHshmk6xRtTogB",
  "key10": "3PDWRnNYXqFn8WEQ3R3K92ZHH7vuiSkmRHxSMn1qAxReCuxwaT461NDp7ctNrAVka7c9LtNK3gT6TAcMSQDSYtuQ",
  "key11": "5LzQbvJCf3VFWLHKfRbqQz9DwhKHFeh8cpFByyFk25Us1GRUQrjtZiLQc9iK8d18gkELTZqrNVy4QyX8cqFQGbZb",
  "key12": "3Xdv8Ky7dE4fs19V6idVwJiYn3Bw3Mbu6iZFoKk1U18BBpwsSy5VVpNozdhAU5yEgssivh2DFxfP7rigcaZeCMo4",
  "key13": "uLq1SSb85Z6SBSUkNPxHzzdjzXPpY1X9edomL5d99usBMSVbKSKV5VSmZCdMD9nfp8tRXR1gvyYXVjbNFT1uw5P",
  "key14": "4uupwCqXUfe3toj5HxAS8bmkLktgw4A4kbTkPtqoVcKTTHNMREzMHiNcv1tNNZ881e3K1pvKq3PstgVr8DPoVcmJ",
  "key15": "3W6FLv8TecAwfVBZ4RLKmDpDtM8NrJJKjamAcb9nEejjyEZfMo8mpRMXPhg191p1e256zCVCx1Ah6RQjBwSVGsiT",
  "key16": "4P5W71fBdiXz14FJ6JRFrAra2t2xBBA77NTvzL1au9CLBKBNBQA9ghkgMcJ9H9LCgfxCGijjhRwoSUziTyCjzxdB",
  "key17": "3fCxUM4CkjDGDshLyarWUkKY6UEXGdBHyFUddosxhNwN8bH8AN4NWt1JSFMBemEX1jcjhyHeJ26kqsZsj84Mx6vb",
  "key18": "2grupVK9rNCEbvH7U1wH3Sj1JMdTUG3qmZPZrjBRAgWhk9sdwyY9uXmZR1NQvo49HkYTJekgN6qRgMtCmxp4SMKm",
  "key19": "Xa6AkzH3dPhAr9kzGqNSr1Bd61gen38fbrQ56nrHjmxoYKhnn3wsAKAhdP3m7zMRmSHPs4BtfaXxKaJ5JrEDddG",
  "key20": "2rG5AxmMD9mRBnMCYdHiQx1VWMVZDo829yeJgHPkazow2d2hvhG19TMaEoJrmDcbotWmHwGEawgqB6qzsqZtvx4E",
  "key21": "61mEfVv8FsNQ6aHkfgznEECs15hKWWoNiiVzLjCUiaVXSStfJZHzBE5jZWA5Acbr9UV48jNesM66LFoxHoQjfUsW",
  "key22": "3c7jtrhq8NWsjSx3zju9ffadQoEWZ3bgYDh52ApgFG4nCMBgCEFeX8JR11UrH9kyuUGFM8C3Xw42brmEoKkzLtmp",
  "key23": "rUkXTBvkpJDKYUoszGoSoKT4H4H9DwyxnjcHoVJXPdHhzS3bs5GZFsSkpJhYjgtpo1QbzoM392kAY7wubHoZQuJ",
  "key24": "Hfkbhmpv51i9DWeziQeLbwcHympbQWeBGTWcDzcHzXMBP5pxCzD5851CXPDB2TnJSfdTmxStF74sH49XFzk5ipo",
  "key25": "4tEPQTLyencaSNk2n8g1tAJA99Y6B8vVZbFLGjv36y16zUd2mK3CxhTEftrdJkoy6NHTnj6rNjxm2Sdw7AdBRFZX",
  "key26": "4onpjYQqm5cLw9oitisVMBV83MpRF23AqUxQ4VJbT2FAxgma4wFD1AR7KtzBRvWzNxZTtf5WWtxm1FyZ7rBCKc9P",
  "key27": "56TmCtHp8CAcyHWdPEMYSzdVtdzZ8kTwWFPeofQRhhAuPFLzw4MSxSnYjJ1EZR5DYEqfJtB4pxiiMhQQrhPZ18aY",
  "key28": "3AyqdeqmgZV5TGQG9s6zcLPx3rNQmejAUAVuNb1aKiA6HD4ZDg2xYPNHo3Yz9PM4CbLfbQqR35GdD4b9iipxktQn",
  "key29": "A5eb4ZgWNEdUTy8TRiY7ZLFtNA2w8MKtGebEaFE5DTykUfs8hsw1JxzdHrJvEgk4LPeP9J38oZKrM2TUibE7fxk",
  "key30": "27hRDwPEtxE3sgY1nxZrPmfMAN72bUrEKamuBA1E1t9xRoS7LCG2jwCipLRLdiRnG9x9kFfE9Yiao1LCUQtAneCT",
  "key31": "2UiPinhTEiMs46W5ChSC4sb5Pzm7YteL2HjqsPntJZdJHd73skGzYArFXUSWEHtLHnu7rEG5YHuhmKeQbm34AD7E",
  "key32": "2A9UzX8EgPRVLFY8zVvMZLbgRGtXXvXwB8evMAmCNEMtWnaw6PrGmdA8Jdh4upQbRKPPsm8MN572Gb5mFfZ5cNeE",
  "key33": "183rydZXScBob8jEpsPHemsJxZABjsPX7saaeYmxohz7ckRSEx3p4Dzced76BFkrDhuZ7QSDP2wxyE8AY3FEfX3",
  "key34": "5ZdfrS8U1U3CsX5LjTLJMcgnUyLMRjFmSZWGVvqTsKYAPgg6BZ4rSMtpfmntWu6UKxMjjT9kXeW72XX1WHtEfKD1",
  "key35": "32CrugMEZUsvseWVttYpJiwrzB9t9ePcLu4GNB1UpRGFL8xW3z6AFC7XxzzBJXXK6fYCwY6bKveuWRkSRJQqTZ6P",
  "key36": "2tha65tKV1NWKdEyXsKDrQ2tZs6K373JBw1T2nUvsEBjZSDJ1DWPS2JWRpJ3jws13gGiPwNsxF744WRF3tGve4FW",
  "key37": "5Qk11UWauHgyGfpBo2aPXsPHMdSZk1spZF9Sy6WnoP7v53fyQ2EL3E1r38EUaV8EtJkAZTe5jgtDwopBTri5WGmH",
  "key38": "5qfPNnMheUv7Ag3DD1YhLe3VMPKMxAQ52Sk7BRhgYvZaGd3JNCH9aZpxgsWYGsH7wnKQT3mzXoauK5WTALsiQxPt",
  "key39": "3JgxURDrp6Y76L4YBXtjmfvXARGdjG8B2gKPsknFyBum5W9Nci8EqokkjdnJcsEUQtTUg8aaD3r3RuhiV8X9fZom",
  "key40": "2oTUyxPMo7LFpADFdRnLcTWjow264vDTfMbW18kKsWEGbSvdaawhkBtUVnRfmrtvMyqnaT8euzJgyWo6LJSYL5FB",
  "key41": "2LYxevuoYK9QNCbcPsFDWw4US5A4Sgiuk1ZiSU4dh1U8fBE9kxbH78HXsQwHLHCzesm6WAQftRukXsHCWNd3mxjZ",
  "key42": "5QSkuU3AGaazbdiW5iJwP8ZKHCcDYseZMaoa92DwfzAeiWCC29yRyf4tQW38b4fug8x5c5qtaW3bnhuZm3Jyett3"
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
