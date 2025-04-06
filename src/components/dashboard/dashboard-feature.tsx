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
    "265aehgXV8cwNXgFL4y3pPpLAT8vCBYpufTpk2ADVEhT5DTRKFQXsXXdWKzA6WWL9QaiVZnH7bZksSeA2shD7Vpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8hWts6u3P4Y16MDJH2NqzvZ5oSHdFqiX8sWecaatsgDhFd7T8JcC5TfcZyX5VrCAVGXGz5TFZYfhaJyM3LoDoE",
  "key1": "623rB8qoNB6qVQa819nrpQfgChhjqMyBemEdsrDgnHUTahSKRAGCdnA1HZiNzsh66zqXzZwD8BS3WQ4WeCSfHfD5",
  "key2": "54zxSSw6vMUYQDeJE8j5ZmTWtjumMxtk2WQ877aXvEeZWg9i46kGhXyyViRX6uJSAooZCrPQMw8Tn7Z3MFKFPR8R",
  "key3": "41yZRvKrLfmVSgK7YwvxzhFsDansxuZYJWEy5iCijk8yQfJFJxixDeVfjvUi7sC4S3BXYoc8cQdMD2CM3VTVHnza",
  "key4": "2pZcmFRxMFuMjdS436wadNJB5q9aYL9txCpMmthW4eSJDxitx2FBiWxrHNeFEzvUVLjE5g89xsaBph9aCYod1EYD",
  "key5": "5hRX8bBa7eQHHnkKpCXYHLfQTneCyZPFBG8eW5A3UpMAQH853CT69rvxoRC4mMR46sASN33MYWcnPvmR28gJf1Fr",
  "key6": "4Cxte2Ti9cuH5XKtTudjgFscpWz2Eki59CXkFicwzapQBTMVTBAmbh7kBfNGvQW11wKWrPk8KFbsaeH4KJNeHwJZ",
  "key7": "523PC2E5XfohiQ6CvzhMfLTtyPGL7qGtv8PjD2JRgEb3pDmcKbDony85KrQU3LjnGCSnHzbySJ4FNNoZNK8mLUi6",
  "key8": "5s3coNhpfHJnNUwm22RsgsKtPrtAFjNoCtx4T3Ms7aybYpD49XK33zL2FKoSaH2paumXf5y55Wh2zqVGfNW31Uh6",
  "key9": "cmTamS4yhXgQTUcexYY2knCSW7kRtQeJZ1sRWEYzfZhbahEchBut4r6McBi4FshkcYQPKMXAUmj4bw8m1YSycXR",
  "key10": "3bfFZwroe5mwudxEcZvtqjBmgkcxLfJ1z7niXUZN5bgtaq6ARJgfqdeQPzJ1SYDk7bnGm9Ynokm9kHpb6ckqZdNW",
  "key11": "o3Baak66FYqD9qHdRvC1N44Q97hRuH91qtG24m13Vses4MYnFy7CeW2fkcBuCEt4nimbteNSxhPQWJEdXkVkSCw",
  "key12": "553bYRARebdNQ2iAusPbAfVPbHeBJ59sGvEYDw51VsCBseEkZFYUUkmtdQY44kFhWRzQ2fvuus5AZbmzRbgAn6aJ",
  "key13": "37yDXhuwgHK8UvqJrqSvxoPbjFf7MmSYWNWNbcNaYDHCv6rh88p66poQL5DFcVhnb2N47BX5cMAveX7i57DHab2j",
  "key14": "9TbXBVzVZcGQPE77yE7hDLHH4TrhWormR4gxELUCgwWYHC3dzUpPRLVwKhCh3jp8dV9dbkq8EHnu2SmpjZjJSsg",
  "key15": "4B5QTwuSkrzTeWT7noDKZtfdZcWJdM13wttyyPSWcFrWmEQ27x3bfVtBpFdB9cNP632sxsVizojpB1Z7PqEjD2wg",
  "key16": "39MRBWSRVp12zhHpdQmEoXg1mv4m2sE12onCpje4hmZXMQzQyQ29FzYSDYoJn5dbS8FPguKzVpVZfEmuMfA7VDYD",
  "key17": "4Z2yxAgwHkLcYPRQF6Vf8GjGmQs2JcoAbPXa6EoxSvAXRpNHS7wgXngyuijADWWqReCQTVp5wSN3R7hZKNUtP93E",
  "key18": "hW2RqcMxq4vzA7xMHboj2jjhKZSgKCxNKJ9SGhVxDSuq4GgHJ1UXxScTrqZhxh9J5EH4iszpA7Nbnwi8TjXGR6u",
  "key19": "2UkKuBC779nH8WPpXeLu8UNvD4jfanBRrckZGjUVfMuBmQ2X7oJidXqt9PddeFLSfQ1FLhCvkxgKAYVnbXTJEcxQ",
  "key20": "3zcBdMEkUnDxVjN9M8BCgP14zay6it9jVtK9GdqJ6mumAvJnAfxeqaJpqRSLdFY5AJyYPg5zs2qDjjo5xFpfwksB",
  "key21": "3k6ZkmknhoUYB9JrYvy9VH9UznBKXteip4vZUrH1NsPH3i1f2VVb358ga4diFdS1GuDqfrHfwwB8hNn9pwyY1vRD",
  "key22": "4NdJPCXzZXg5PBXLGd4CG9XtvH3HMbievaYaq9aXduqHMhaVf7sFRoxrCRjmzjKAaPgAGKFymQrCAJTTS9kvHGUU",
  "key23": "2GLpGJE3AE6azQjjpe6to7Fp4TMo68JvWQ1Uu5bspFdf1jdxF3fe7DThiKtsyvCBNGL4J59VYVuU6xfJ31cVz6fw",
  "key24": "4dWXT5taJmuomFLs4AqRiUmw4VpKFDpPAp1nSq1mD4oq7KcrvBAfZGrKmFuvRq4K7wjznATQRBQMm1fwdBqaocW7",
  "key25": "5WWk9wqVYmW8kokp1535BY2DzcTeqCzRSyuH9wGtjoWPcAbUmaynLhqwxbAnVi6Y4PV6Tbfb1HyTrCPckYJBxTyS",
  "key26": "3ZJH7Hq6RgndkADF9pQAgg6E1mRdA5XMQDbCYtyz8yvytJaJq38NbPNMiC4VRZD4wWvVaiFMBVfxW5uji238N3dF",
  "key27": "4Mno5bHhR2P2MZNLMRBDSoAKE3UAJh3hinc95bqZ8Mwb4c46WXcKVSVq4q8cNZFtge6ZNX49g1GXkmctYanRU9E",
  "key28": "3P4oMBqT33oZTH4iywEN2rhB6oGzweZyaVDiQfjfmc1rfNtgZvqKFDvRFKGCEuaexV1SdWnghJFLVbGMjsb1QW6b",
  "key29": "YZVNkL3BzDKeaLxCjeQY5KUPGNinLFqMRRem697pJfqAq3nSZ8w6cTrANdNy71jTe9uG2cyzkPZisxcgnVne8vp",
  "key30": "2z2pfSRTV5N5BBTXR9Rxg5dH2wz688RiLVzCHQDuD5XCJqLXJx64mDeEdamVSGYcswtwqiPsn66vSF1SUfadxRDg",
  "key31": "2sAdfjw7uuhyDV2NFcpbWo2Y9HjeL6oxwrWhLAKpPEe2ngHMfCb8JvCjFzZWsEaaoAVh53S9FH3tsLQP43W3AX6b",
  "key32": "5eCGTdqZxonF7mB32qtxyTBiXPJHMmhUtTNQJffGEjzkVKwYDzfhvkPbFE5pNNp48hBRqm13DyrhmiCJpCidm4bj",
  "key33": "5Eed6Z8Ws3rF2vriha4CyWGfM85wupiiYtj3PwgyMcRbmMnmpnP5ELqDSzS8N58PUwYhm8M4kKjR2jbANZDpdN8Y",
  "key34": "4bKEvozfq6ieTUZKfppKfBVZdpa6Sjz9Bu66X4uRK7uStX8ZPxjpJ4Qccidn3hNShz7xc7243GihBFHBYWoqHcYR",
  "key35": "5yqYwuFLoiUZtt4j8uxeLkWpTCmyeXawR8w7DtEfXCTRQH2TE3uBFXX3qohsLSFiCE8Xir1nRDGp2NZFcGFqedPP",
  "key36": "5Ek4dMrgVAqSqxQpvWCkn1KbawSHL1iS3d3Tv8k1m6HaQd62Mor3noTJvJ2L27FX3H8MVwqWtB6Dg9VmEUEJKs9x"
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
