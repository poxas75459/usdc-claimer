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
    "62BUQ95U5SzsAsinR3tMWP55YBV8E89zxDnWbn9Dgj1eCfEV6vkS1cbyppLT3zLThPsDY6ghEGLmtU5Bm1s3yG4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXsGXioMT5efHsRybbH3EugQDYBPXNrQP1GEp9eM9aizo6HPUPK38eBxh3g12xMU6Ev58QKWPai98Mh8dcZ8gw6",
  "key1": "4gJvJ1uuMm9CA4XSbXtBc6fTSexxyNsXEEofh66JMz4kiyR5pQQp1tSqAk8ttX2pB3SW8KWPJakvGueRUg9oPcRZ",
  "key2": "2h7w11BYGdpJ4EW7ymJiRVgA9u864SznQ7bjpkjR6cQefhoxEWZADAd5urGanVJYGK8mxhZQAwyUF8Lt1YrM61Rb",
  "key3": "4UVUeajZdpfwCosnPdsNcYyBSiMsdiUgp4tAYZhAYNbs6S17WZtS1nJ1F4H19aWwkJztR3zV916i8unfHWDmcGea",
  "key4": "5xpqzgoWCNiqsqWCLnpVX9xPB2pLEhvBWkXqLTQDeF57oKfGNoGqDqZx7EWiDcEv1KBUFwio75A2Qz4PQ3kgkorS",
  "key5": "32UvbJp78y3fRFV1mBxHL2e3FEyvtvn3ah4HA3rmwZ1ag41cTGor65tBaWDdivTEKKKNpiBKzZSJF2jxtdu1Xwsw",
  "key6": "aQYG1Mo7YkGdoAx7PsgwTYsRHMGJC8PiRxu4CtQkkGjAXLFYqDbXBxdQCCi3rL7JcQrWkHRL2ZgCUPtBK1PkLLE",
  "key7": "5bfm7vHw2LahVb8KPzapXoA6cC3r2Beks3mQramN4zXRHgiVDVCTXKA1vdZyuEhXAK6Gp8RZ2hLuo31uTwGheSJV",
  "key8": "3R4MnSj2BuddpobDfihALW1dmCFwUHdXpA2Un3Wakt4YiifSNFmDCAPCmmSyVJHfeZqRoxX8frxudZWF6V6kHUNF",
  "key9": "5cNeDDUwRUEoRbVe77tjrGKHnTBhVdvxizcPDszfMknB19qb2LQ2hYoQZWrQfWY9oqfd7DxczoZokWYuEoobSewr",
  "key10": "3aG59EkpBb2PDpqUfSkT2kLyFE3RTF6sMFJaLg5U6grQPs3CvRu5qAuMnmiSyRWDKC5G98jWeus1SVRqFFbJZLkw",
  "key11": "5ZLLMCVHSCwMGoUFTPbHXBPNJ5zQRa8AbQhT5aW6Vtiodb3LJosAHZ7CCf7xvNLfpHFEmsYsVMfyPnjJsbbNHS5b",
  "key12": "5AiP2HjZWsWSkpbV9hogkv3EqPsu63oiqhUP4e48Zi3SSza5sP3wcwarTYfooiw6eUriZqYs9KfFFxXUc7a21xx1",
  "key13": "uVfkZ53Gbk11X631VjSWBfiDNBtk3pQjXyp72HqzAyBoSnre3trCLP4NFKGmfUQUDUQMUVjuLeFr5CB9d99i5qs",
  "key14": "3k8JLS1Ux6UHUsyojh1vNuHR4caPh4VnCmgqXBskJqqsvX3h6fmgDuZ46ET374bZmUL8SJe8DsSAuS6qPS2A8SPK",
  "key15": "aDwnVPYPdTtdyt9TePoYyeriwnJH4vf7mk1YRcCoMFamTpDMvYgaP2EByt9vQ39vb2nJqoqjgN6zJDDHXKDmars",
  "key16": "2BzW2JvsRzh4qtivH8xuEADnSAWCZW5KShYkB8mc2GE1ypwb5FLMcnzwD3ntT7zcAjtofsD166EqucnqFXV2sU6a",
  "key17": "dFb5AciL2XdguvbWVZ2pEodzS2r5wj8MuSUywZZAQ1KAxKn1hzFyqXuGyJdHQQzaUUmzyz9JaTkWMYNRG8je6Ss",
  "key18": "2AL2arLjr9w8WivnMuYTYqXScHxVjoMbQNgZ51xeWYMuXP2BQGnWGDBktP8eAhyFSuvZGt4s35G5AbfNQY5Tfib2",
  "key19": "44qSXAhfdDhQsZHcQ8Z9eQpFbx8EXHwhNfcnbhazWF5wZSWfoJvQnbxtCg7pTsL2uCLd2uxaBpPnffnQCHjP8Yi4",
  "key20": "4ex8t69MQb8vvDT3a8vj7L4cUmJrrkntGBr2NVr4eUTW6EvxMrAbK4tWzYQjXS6u9jSFJRRDrJaDgt64wS9wTZoh",
  "key21": "4TRCxLtku18zTBscdWS3eKm1Y1F7mrhB45sxLJ3jXrhjBRkgnkVKBVmmfifMSUsNAqrTYMVi6yiMZCwnWVuFShR9",
  "key22": "5QQxVdrqJcqwnp8KJccGdJrKxa7xmTcht46vadNpsP3YV7kH5LNHm391Hw78YxzyfK7NALXMtG8z6zhBS3fygusm",
  "key23": "4YbG7EA3wsMF2QBkEALakLskwxBcAxcSvQh3a6vrhC4qSkLfZQiEyA9JZgm3dt6dHQXPHnDYcTDNquhCw4cqrTJd",
  "key24": "3GVTBjs3UDq5Vz4r8dwhthF3UPXaCW96RLedP59AiqwasHBRAH5nNevkZWE39auYrsjEQ44PyzhDEkkqGDR4r2Jr",
  "key25": "WUeHV7tAYG6vwBeUPNC2zm7oHrq1MLsyKRJUySA7WdcixJEmjBVnK9BAPiXJMQVT2e34euyJ2BFZbj2j5SCCVGu",
  "key26": "ttWqvriYtqtWJEgxgQz1ta7bZuJzABWxDRddejrLH6mAzQF4LsGwB6Yy3LTTWjRVM1aJspVsCm9MmVCdzQidjYh"
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
