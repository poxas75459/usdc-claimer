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
    "41b1XFWZR4kStktsPzNpmgWnbtADs4bpDbtNZnGbQshTGAwrvkQFN33ywULNWwWgwtukcnGdxYjNHQvV1uakaa2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGPpd35yKk7p7fjtQhdyRv5DJ8cFDpzwz2oSKLK32U13u4WcLJHEcxsTg9x4Kb6CEkugoe9EzndSLHakMSuT5qx",
  "key1": "52tHQ8AjpxkUoeT8X1a5GQHU7x3zgtPz1Ckx6a7yBrHQjBKbjHvxD7YFU3cLKSCgN1FhNShytaWed2k5AskA9wLC",
  "key2": "2aCFS48UkLRQ4tAQAubyzhYE7Fk8bF4PqSkmVJ9HsmmZsLjdHuvcbcDfd6N3VMEFv6hxh7UAjkFcfQNzKdVdwsa",
  "key3": "5biNfxjNiDTqivTE1a9pGCVBEvxRuEMaw5RFzcL94s3Rtag92FBcd57dJbX1n2KbBBb5wmdNzTndSjeMdo5xkiLb",
  "key4": "5FW2wtZjGUkBHki6ni2hK4z2aPoJUhbydS4LDtgfw6Vp1bHkgydNsysjUZAET91h6U9FbS5xbBjQaC4iSDswRuqo",
  "key5": "2pwCSS1HFcqXdAJvH1WM6WywqZLPSYvATge39tucDXnhQ2DtrtfneDxE8cc38kgHMMhXZ95Dn6KVsG49hvTg3Aon",
  "key6": "5q2rZjFER7NT1FwKWDYkSXLw1ZUjwePKkR2H5kdMBzgqu6jk8Yjps9x7kRbXJsayeenV5AR7BjU5edZvow9stY4c",
  "key7": "3PPjs6KwnYLyzUbxsimjiKhkErLGzcyp1sTw79jq9x5b1kcskE61qk9PL478oHmYqtEdzztSpwXcdDXEeUvXvJCe",
  "key8": "2Y3xtyBxELcDsXG27mAt8B83C6VTju5MUBeGZLha9voNR6pjp1XCxdukC54kXojJysi1RuMCDtac4M9vqdRZEx3Q",
  "key9": "3R5NNBick6Jge7N6C5EdryiUnX5fHDDo4GuZxWDXUgbqsp9HGJ77Jic5tUtary4m45oc7fgBW3dnnsMo9bTPiJW",
  "key10": "5cxUVkoxzG4UawLYpTaPejKTnLosWAoKD5Fb8wJdQw86LxLKwktdpUDzpEdL5wpznBYX3orMwaYtJgVy4xBen4K4",
  "key11": "321caHukNeHTJWw76yfGpmPowVuAGWKeFV3HzChTLiHUq4UVt7k4T4TFQ8JNMsqL5Egkiiz65tJPA1481x4MTSm3",
  "key12": "2npweua4VZDio5whJ5NFAMZnxSLZtj8Mab6ozjDDk6z7rHYaprC7ibW5C7ZcWoBPgU8AXQv9o8exDTFD5bM9XKgF",
  "key13": "38Kw4UbGhex8E4CzJp6P6W26Fnp4tUy5z2aAKSYt3v7orij97pt1Le5RS4djCcEhVekAiWBeovLsnWtAx9CCT1Hs",
  "key14": "4ngPTM6doV8Q9uhE7ffp7dcy4pjXZ1aRZCgnbamxwVm4Rn2kLF4DWS2NtdNU7tPf48BcPif2zhUmDoEMhQ1vAome",
  "key15": "4t68Bo4YQcJmwuhvnL216cJs8mDYtry1a43TArPJk6k8kkREuzHNP3DxWpmZTFQswLJkbSy11GadHoVRddQLusop",
  "key16": "4cSzSXyG9jkpZXRiU6qvwXj7VLK2ec63kp5eki3huySp9LSbp3LKY5YCJFd5D4Bs3SThTD7SHznxAeKQy7b8ac3E",
  "key17": "4PFGEKZSKgZ5Tia34Th3xSb9qZXfxApAWusF7zbmp7EibziQsNTez9LPjoJcC6FY4KoutZPQ49ostT59nJ3LQ2DK",
  "key18": "3NtG5wHo8nLEzQDyq61JQz3ZJpcLK7JMDCmmGeW9eHonZuQpoSpPdZWUeUnHYEnkbLqpNiAEP1MKNUjtsT15hDew",
  "key19": "MvXLQExmS4ASAvEhuWhYm2F1NkkLBtnzHSJNqzm5Yx1nLGvtYJnpp7zcYvTkmhCjSUVdhwBQ5XRZwJS9zZerZTF",
  "key20": "4ABWeFQezNu8SSMngXyW451JtpZATVBiRSR83NPyntVRCYsHAJWHkPRpsHKfFMubKJuEY6NDdf5ebG7yFuBt4Wrr",
  "key21": "56sprGdXNBSAdFDEbbfVkavNeRLZyrFp8FEjuTVK6ZREL9xd1kA8KdqUsU8piWGApiyH64bBKSrpEG4ZGBmHycPf",
  "key22": "62hW9b2MiMGDngo1UbUbFqPwE7U4rjcWnFFkdVPNEEtkkZ82JDCYL4xJGcEjqU7wr75ftigQpzUzuhQ5xAs4Eysi",
  "key23": "5oFaKYhxoDn2aYHCeKf2RBGyggzcyXgtgnRwFb45S48WP12pSP6G728oWLu2nGNw83F6P7P62UYXxjVFQxMb6gqS",
  "key24": "3B4JTN659icY5PCj8i2aG9kvRZUwGo2rJTFfZyU7LZgVgPTxuzurpYcVYuP9K5E6BJRKPNYKMbkCmF5wPS9Rd9zi",
  "key25": "4YU2p7WQdiz6NYBoyQ3vgYFefkogWmdfbna33MbdhMMnsMheUpKwALJcRzfMdeMdQmFg8RfEBapCDsZed54znBjo",
  "key26": "4bdrCPUpNT7cfWNayYCWaVAVHmrWo9JSie13N5GYq4xdkcH1xzgVD3P8y4eNfKYsrcDcGnHQGtdxFK9jYGMoz4hB",
  "key27": "35py6KquDkkqCJCGKRSPCaSpZvYCikqnZop9N8vXST6wDbhueb9wF9oFDTpnEz7fznK3f3H4SvdiPQHREptpqY3b",
  "key28": "2gL8V5DCGh6c6TkcVTnhCVdG6ruYdw7P7oTP19NZKpvPpG6DZHD1GjWbcBdSqYKXC6Dsq6h6sgnYjoYyEFJ8YEJ1",
  "key29": "32RyEjHTZQdf7zC5VFWtfjYf9sDor3EiwzTo1o8HQVGT2TAdvkYt4oqM8FVj2psVj4P2HWb5GBK8pLfZGnD8uXqY",
  "key30": "4P9UweWWyBmruUWVAduU2i6GSwTBacQAmMRerqKv4bcv412ZjyhNYG8tsV4d1qWgadPKnfoWL36ELbuXuL2whELt",
  "key31": "5MJu5t5NSrfKC7nDCB7qyDYeaqBEoeDSdYJ6Hx4AEGvxrXYNyEWEMSnXGGJFjYrfq1ydtmv7ZjirtaGYgWyCWCZF",
  "key32": "jCvFrYZvK5JZJ9J4aywBZrtoiGieztp5kRtN7SuG9eKbTp6DXSjxuRikEmxBRHgFB5ZLTuYcguVwiVnfi56ihf9",
  "key33": "4YT6nRUbkKfjAhhWoXDrfbiSfBYyAFJoAcLgud1hAZpkDgN2Xh3GobosJyDbUgQbo2Rptd5WeErdG7iSDshigdKf",
  "key34": "Sd39kyD4tVwikjLoy632Amk8TJ6CTHeLzgP6rmatNfsEq61UzKCpswonmUip16hxm769Cg9P8GsKDSJXeHka2MS",
  "key35": "47qYRyodjzwV63ahWUPZa2n1CZ2gCP8BLjyDNYNGoFVC5nk7AUSNjKaURtRrrj34V4LgfiQur21obeLYimuqBtgE",
  "key36": "5HvQ7EKX6y7ayTS8dT8frUxcnBnj4hLDRJ2hzRYSyuWb8t7TPaTvKzoAvxtHJLCFmj9rmb8EMFrQfC5ABp4kPz6k",
  "key37": "5WtNnLWChRvQVvv71mAxLwauetow7QKAK6gN8xLusnj6Diwtiyf2kQE2EKNHnAkDuDpLoXJfE95Zc9gbuUERmWyQ",
  "key38": "5auRCjYCKe6zG9LG3C7hzetF621BDSRbY2ruGUGShBy2iN9Wfqe3fHXW2Ex4LfmiVwA87wZ83bHqbfDdsP8oPiZ8",
  "key39": "4QbnaNWmnyvNSw2DdsLUuiShgwPbTS6NBVr4mKQn4NNbeqs8atouAXabipXti8W6eKaRuXPvtcFiKZJsnVRVwDvr",
  "key40": "Ux7XJExQT2Ged4RBphtE1FhCpSZZJudw2hjzv8oaXjP7zo2gchxrzjzXSbRJ4ZUViiMUQpKmJ9599sNePcRURma",
  "key41": "Ja7UMapdDkWq34cVoJtesW5rUQizyNRpVkgL58PqPSBBCzkFqqVUHATbgpY3hpe1DbSYK91HgHR8iWoKcFBc5F5",
  "key42": "44PdVPkvkMBQGBpfiSN5L8xUX9pLQ4rDnCXCFgCeJgNa9YichSLN6oQxCQ2uc3NNbUKPLJV7iFY8eMHoQKvfE28m"
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
