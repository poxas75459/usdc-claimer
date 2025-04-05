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
    "2543aVLLgpsNCXqKSKEVw2SFjCd9hGrEDxy4XYKUvDkCc9cBgHtf36Gusv49e8JuGzV76taoQrUz5MXdj7brk7r4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ny8f73hCeKR1JNWa61vDK1qaQA4vnMxApeXXP1ueDxCeWsQQ96AWxHrXypSJpp4Cv6mCMLa4uTgSBUWD8rxnCHJ",
  "key1": "JWpFq5Abfyu8sAMB7S3gGfK4DdV8q5kcJphojKSmdhiMrE5jd6vRzeLq2QEE93wemfe2n8By3mffx7cX3265MLf",
  "key2": "53y8LVfjv51bwn6iL3eBbKXQY9ryUF8hVzmqAP4ZxzQJrt79cTzXyXn6P5azHUmk6J8vgbn2zViT3vYtyDifMBBm",
  "key3": "5ZWhchru4uWKatRtjCjr3MVvPBCWdXr17SnVRYJBg59jj14hC8auUmmfUyj7AQvTMGgjCmmkZvWrMyzjdR4DUhiF",
  "key4": "XAQpAiQFLJWbJUjPdmDevCs83iKmPsRXaj1QfxRLPZ3G645MnSESVbULv1kds136DRjp1D6zHvzmL9HdXXXkZRp",
  "key5": "F8brenXGCDo6cyc8PAP9kQGVXpHn6qQ72irm7yrg2nZ3RXefh27CKkwUzTTRQwQHLk9KaA75Re4CtcZN2ph7oDx",
  "key6": "5NY6NnUjRtimGgHXfzhBNSjeosXLKYd64Ldo4TkaQhoc32QK9nud3bDU2hDKXnYCnU6UQiq72onjq8VJGXMseb5A",
  "key7": "2F79h6j1CXjT2AHnRpzLZAnjJT4V5sBC7wyFxgHSy8o9kazVNFaM3fGr27LuK5qpFKr8gHS1LxHYuYCBypnY59ff",
  "key8": "3z4g9AcWUCaStVbTiyhAgT89yoXPx6iYHPA69ae9PhyikhjEQaRKF5zgAtS9okHbstkjYbH5q1Gon39eSaL6vFQ9",
  "key9": "h7bZmGG3NoYgjd1UNWRkxjUMyPgPkrNkrKgRvkSx4nQg8aHBd6SjL8oM73GpY4MtpHBw1L182pybqoQAwbutYJB",
  "key10": "4w7NHpRFJidjwiYTLFPAfZm8JS1Xw8bdg7xintxq3BkyEW2fivZTapVeTzypnCRsjtVqzYEWsAwsB35V2aFGzq57",
  "key11": "32YNPM3Ah6Wyn1we6EGsZWguj26gP7hWkisPT7uWa5PZBeKS4z7snWaZ3PtETYgJkTcRnpTmG6VCdir4S39uPwq9",
  "key12": "rr1GGEL7iQHQwD4ryTZAyU4wpyBe78oUmp4wQwDWFEm5JNxkeayiozncGJ5WzGxanjHgJQ1VXuUPfqg3BNptvyh",
  "key13": "5sVwrG3ghHm7ayBTdiGw5b9rAKh5dUYQeFMHv1dzJc5YN6ffr2FYfGzAEc8aPCYtPBtghQgGLDNPKf3m2wc3j5TX",
  "key14": "5WpAXkMmN8cjdb4VRtSs1TFQD1z3dXaUMGvtGRAPG3VooduDou3kezVrhqQVsKorvs6VxkwyTy7yfJDbBmtGVe94",
  "key15": "kh5oYfAvFo4nUSNgsXHVX7oy8ghcs27y8yG6tsEuUswFUHt3AwmbKuZrqg1MAZdmKx8aJBS8cXFoPrJ9Gebisfg",
  "key16": "3Cn62wAQVsQFjR1u8u22KcwF43Gwkq6bZzFjdd1npttc8WYwoY94251Y1C5CWdmQunQtUQrFSZMzQWBfY4EbBGFc",
  "key17": "Uay3659C7gQvSEPr7NeDZ1afQatJ27x9zkxKtvkiWXWNFm3rcbUtWuyc1qSjuj979B3T33btTM458CRRgH9KLpW",
  "key18": "3n84ogfroebDQ28AbPK8rrRYQVwKMm3hEhgJ3zwm5JacofFR1w8YMBguzZFYQaqWc7EgyF3v1kRwPNyMcypq7ezL",
  "key19": "5dA3X4JEfL8Ayzgd1XoAeed3MHVnpZszxDH6JiHVn2KharSGEKku7Zq5CAQ99LLWESjSLGcQPips2oWdjntmVJGr",
  "key20": "4dErZrajTjXdwQgJfqDzcvZGDzQdh7Te8myoMditH81reznD957AtXZ8TLwswEbXNAb68eseM3tsqsthM4hCr9Y6",
  "key21": "46KFHbpT6cQ8fd1r4c3XzpVjknDWo6U6Gn5v24NKjuvjkJcj2PZZy3NdJM4rWA1yRXxEpUnKronYZh1a4L9jVeUe",
  "key22": "eytUiPEj3F85tBXZoCL9C7MAHeGsrmX8KZhC9GSo6Wcnyyerr6E5cotVFnwCqxy5JjA2P34QBZh9FVi1khWssL1",
  "key23": "3yxSLDXLNEuitKhnp5a42Zqfqs7GRD76C6wPW4xWV8J8Xd9iPWfceSvYd9YHdT6DwvfGAw4qYJueLy3i1TwfKuYn",
  "key24": "5tUaY9j6Rtp7XtAbkBnDbpTeqKWNohgWZCnsoMsUcvmLEGAj2K6w5K8qyncc86vzoVtNxygK6xXmGU38iE12okDR",
  "key25": "5yf5G4fti3eLD521e2Cx6q9EpzKvTFgtj4W4R3fmQN8aS7gxaNQijXFyUt8suS4Hz4asmzgxWnVPtxj3iomC8Zjg",
  "key26": "5hx1mdh6iXwdrcy15yodoAnuq35BiA7q28Ni3bJUeac2ukYpL9Lx5k5VszMe4AzFHUkGFEE1wNDeTfEeedfB2RK9",
  "key27": "5nVut3uHtGjtaLXEuvgfzpoPm4CNT5QNszuLzDpvFSy13d8zH4dbgTonTAewa8Ft5GLvAFPK9Kt3mzxhiFnzuLR7",
  "key28": "AcUZw5oyEB4SF2wWbD3c7HKa1j8uaQnApS64UrsZiWrhAhAZKiEmE7AzhdGcKqXDMR3YFNmmeXAsn1p3oi52Vbg",
  "key29": "4VfSREfqpvitvXfTgPu33oWLj6cr8foQGTtpRdiih1bwGyHaFpDnqgCw3SAFbsUoX4aoyxzf3MuQeyF8YTVFZsj5",
  "key30": "4HCX6cH68dz9kTEV2CFAxGDVEo8dZqEacpJmfmgz2KEHcFoExMmXVVFGQ9bmPoXTbmH8u4akv8dELw74YTMfydjW",
  "key31": "3h94ags4Wpra8d2b8c21snRZW6gZNZzniTZ3vc3GLvPH6ENGAQZCZi2SXHWQvg2gsPCDai2cG76pbdwsSe8TNCm8",
  "key32": "G6tyf3wNskdEpQBmsJtXikxqNJVcQL1svh5HFUYMG2qr5TNhhcFgArnrEPKu3TBMMabGL2QBtwerkRuTn83TVmD",
  "key33": "2nkXrwkmGMYNefDgpfZsHrYsCM4JRLV9vb5NEgRSD7ZjVKiCWpWxNfbn72Z2432rC1ymPXPo5uYmrDxnMKC5okNs"
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
