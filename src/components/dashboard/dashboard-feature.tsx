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
    "2SJLJyuxBTvstPPGJXAyiYkvepjkhHKfynt9GHHDzCxdeeopwL8vBapnezmveQTZqBStEZNear32ZC6Z73Qzvxob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEi7QgiXjRVfHqtXTGJirFgVqpXmCXRkZi3vAwpfVeyLYNFQi78zNo6GcReuJypAdac7rpNpahi997CgtiBaVTD",
  "key1": "2pgztCKWYqCh7d21obqoH33QpJzgN2hs98yigYn363Y4LeWexroDBavBTTSRiXzPK9v5YaViKFCUC3mcn6kPGxPX",
  "key2": "56v55mN1pQeyBMC1g9tzottfA3rnT4VzroWb5UdmszXyoWawREZiG6fV1ToRWhd9G6gWyzFCWGe2zfit6X6vc6we",
  "key3": "jpQV65zwQkoisYWwpMbqZdzicHFDVhaPgjEKrGtkWaKaT6qFbu4qTFYgAh6ptKE2Nqa1Dw5g1MtiCMk9fDToYJ9",
  "key4": "5nA8GFuX5RXrhjZjcCXoFe4AkH5K51ePZXYVCfFtzij37wwRWHqCgqV4qdD39R3iYTUeMG7J7EFLACBKQ7XSGesZ",
  "key5": "388TBAPCeQL6AqJj6Z1HjT9X8yrKgGEfyfbF1bTTKrZhwGniKdKAF2jb3jVLxvmEGehPtyW5qm4S9tUM4goTo4Sp",
  "key6": "GnhfnJmJH44QBynuBS3s243AAsZ6Ht6KCV2pbweGuuAGADYLcnZeyvQxFCWfaP7j5myn1ZDivp71R7juyU6vTds",
  "key7": "4f8QhTU7HRohAwbdSn7BPrHAjFnmQ6jS6NPp2GLg5x2qmGaXnUrstjFaVsJUVhKsreBV238598zyGcTZQ12S4XZL",
  "key8": "5LXWSjbe5D2FYmck2LgqmuwjP7vp5gxzxNVgqrQadanb3WKrjsxigqTqK9md4Kp6mmfwgzjjMJgVCWst526H6o92",
  "key9": "2fQ9GgWpwWTKKe4aXhcdnwJXoWLj9KiuMSNd5eojSVcj79UcVBYtYhjzHzLqP86m4HBDr15sWL9cLKjLV1xEb3oF",
  "key10": "4XTdJapoGx2K7JsjWF6697cuwN2SGyvmXqYJNkceuS17wmbKa7nybPuUqdEkGUp8rSpewyJKJZAQ4QKkR1fGAtQB",
  "key11": "4Cx1TysnhXgbCie2TfN1ACDMGvnAu1D9YSZ7FMe1AU3THE7HGWwB4LfxJPQant21EyV9rehQwGQemZP1fLyJqfd6",
  "key12": "41ePDR2rPa93rgshiBzV4uUPMddNpUb3ADY2u4Yia1ZjYPZgXdeZYVBHh4LFZLNwQes8TSkVY2gC9sRLKrXLeUar",
  "key13": "4RcUEnpYWRAznmz4xxT9dweieg2SrPvUtw1xskXL3usqPagpr8n9yiVPyfDKXQTawSEMHnrpoSa7Kkb6K5aYdhHk",
  "key14": "39UmAX1YhLwyCohNvJzLrzt9UM9Z9pqfMHdAouMCtuw8vL4VxrXpnqWwXLCRbqDZq75Gv3rpeDNMwbGJnRos6Nmr",
  "key15": "3mHhd85KLb7H53VRNMDfpf9rTfAQNszqyGUtY7hu3PGfKo67qY1W61C5HosNwRxuG6xQ729VrGDumNDAV18VAbRF",
  "key16": "64fP7n1uf812n9w4ZNXSvps9CSp43U9V9zsLkJPfk2sM7m8bun4ykw3uk68FcJwKBexWRBkrMPLJHh4MV2bL7YUU",
  "key17": "3TxA71hd9NvLv3Vkzo12nwB7B18ZqKFdYcDt7sQRkWMe1MW8Yxq3m7jey9yb1ycozRgVYh9FHDi8C9knrvLNhcuV",
  "key18": "54dogwtiHVJjJXk9aDRcfo2MHYZhNiKTsZTfjGjceJx86xYakGuukoEzRo4ZJpFa66jKxPpMQfHkNt1PsuSNWXg5",
  "key19": "2e9UohMFWvb9tcCFzqRdg6wJXoiRVjmzUEjFmc5gUaqUKSSia2bsEp37S7TtVETK53apaw9n9cDgmmzU9P8dJNN1",
  "key20": "btvvsZtNnabiS1JQDgVGhbcnYKuLRiepeLDSSZve712CkMH7MxJTPoQUChXVYwCYwAtcLQT8kKEuCWVUdyY9dWS",
  "key21": "9CtmbMeHJy2KCTTUm8kuWZgHCYZknpeyXusx4J3MVo3vRcrEy15nfx6EPwi7Tx3QHqxn51gfbPgh9ucJLe6AaRg",
  "key22": "5TZfxzMw4LTjDgvwRzjUtYjJq6A6aDposzQKRU3Yh7KWdfzamV6vCtEJ7swpxmv7qgz1zfT2tPWMdxzV4prdQthN",
  "key23": "2C98EZUdyy6vx64wNNJAJNEXtckHdKvvBCmxQJod7SJbtq5wezrN2PJrHHF94XUe3okCYK8mP3Z87TTaKn1mioBp",
  "key24": "3HzNYJWYjkKkfuVHt55AbxQCoMobt1BtyRBaCM4Gz1bzS3HL47TNMQss16Q8srGN8mnR2jyX1CjCQcKRiGF55k13",
  "key25": "422DPJCvETvZ6JXVLS5fZEBg9fmLCkjhiZvCfYMRPGWPZieCRGRZuR6TKkXjDPaiQsZsbiNRa8t8DmLbDz2jPTy1",
  "key26": "3Ghp4JBKBZ39RMPM9DaVHiuXPmyxMLPiGLiN2tvVTyGuCLuNEcjk7DEMZotmV4Ws6dEHHTPcw1A2ozQFzsB9f5Ze",
  "key27": "txeLAXVp8ve8taUWg39ba3BM5ern3rTbMb1R51VaD98LNVSmCcxQ381cY578EK3W7xcLptzw4TQNBXXDth3nrTx",
  "key28": "4MYTdH4cba4gA1qkYTqeLqjAf2aSNbwnMxepjffTwdGXo3WeRetYovFLxcH8HhM6JrvvcN33jLW3Qnsk6yLTX2XB",
  "key29": "MTfi2mvdhRyuvaMzvjEpwWpf8VE4o61ifnN2i97awPCJzT4MMS7H4YWQB292xccmr4oT8hBcQvQHV1L4bdENpNU"
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
