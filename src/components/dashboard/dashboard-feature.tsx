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
    "62X1M335cUoN7Veekmp51EZF9LTdRcAUfcdgyw2sFmf8871m6ZyvqxjQgwCyncGQFS1HQ3PrZM7kyaUda7zDsp5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUurfewZpU2SDCJAhhtUeVYe8XpJ8eAiVSkRSyDTkTA6JwxaGbifD47eWZnvFjKehwgxoovSrQWgR3zkiMm7Zcs",
  "key1": "FamzhyDCXmW2NYjroUXgAxuSBvcBujtz9V523qKyYGNW72c7mbq7YeVNcMBReLabMJNWc9v7fPYWb98LjUoabKc",
  "key2": "BMvYmTuDTNyVn1ji31gZwz83jcUqzXFCEH93fh5mNZRDvSbAYi49w6aTjDRm5rmMiZEdRUGcHY8eCfM4tCXnZj4",
  "key3": "5MKu7hoV2WcApCCTvYqu5encHpHcZ23gt4ZkeWiLLqJcRSDvX36Jxqqfr7NpZipi685MdegaaUr1K6PbvXooW2py",
  "key4": "49iJ2WzBXTucM8FHdTznWWWuznLQ7zE94mAeEHaSE4rbZJ3dUDLdcUHrqp8mkEAqb12YCUSgEqfTroHYoaqDvria",
  "key5": "3X4EDjTZ5DYJqTSgRwBcrBg49TkXmcTVbre3r31QVHK9kcsKLs4Mk59HSRPPeLotW8jAhHQQwrHdQwjiY9JAoPjW",
  "key6": "3ncHi6qsTMX5jnfN4BZKhGrRotz7jpYCtP59JVqDaa3JDrHKAYFKUgF3LwLUg8bM3fri3hWWYHBjH8cigbrovDyt",
  "key7": "3whpnw3mNobiX4o1PZdjHcBakYepNKWMuYDiiaUuieFmB8f8mggF6Kb1ep9M6vBpwPSb1db44G27EtQmdNn4aAdT",
  "key8": "X5ETmXWdSEZm1fJL7nkoR9MQLBcyDgmspunH1femuxFQdgnHokPK2afAdERZkEDxV2FzK7M7UyRbkbgPmWCTuW5",
  "key9": "5ToTMfsQYbTXZ2vkYAYUpXQWSsHcB82FxcYtK1TpNvPCz4G7f6wQAr7rWBGFzr8hzAS5PC28RdfWnE5RsLFfSJdw",
  "key10": "3LbwmKzoBYRdyxqi8ZcWJmbKBVATrMRhYEKwMXwPGe1t9Za8McTaHVUHaKwM3SrNYZD9QdMcHWW4snqdbqU9Anx9",
  "key11": "4YKXxKGJ65qy1RtnDXK78co6B6iRdJyYnAHaTrDmoUgWj9RdwqEz41hjgdcUHEYqu16Xqqg9dQssiTRgSRFT4nKE",
  "key12": "3oG1ye2HgYYgcWXusvWwThfyipE2pmhxY1Kw2yze3jMhUa2erkZmF24eKm3VTfib4AzVmrPG2FTBozcUg11bJZu8",
  "key13": "mY6gtKtEfHR4irSsjx2rwKuYp8ipoJUXphLcND2LtCiBWjaRZkhhoUBQ1qN9Nbs2r48kZuBFCRi6QwmMjrDVitP",
  "key14": "4UEeq6LughtH6zSgQY326hUMngwCopUkXzuBHEhNrA7F9Tp1MKFWVC9yDzcfNN1wH58hXXghbtiQUaJ93eoUYH62",
  "key15": "5uLRm9tLrS4Kfzg2HBEXgPzDxiK4HLtjdLtUFjGhRJvqySUDDny2xjrqY7cPKskApPMuKag7xsGC4CoqPBXY4BTq",
  "key16": "KzgraPJdj1rbTFZqQB6oJafX5zQB7Xn5t3a5J7EXqZgmfzNSMNg1KnD4zWtoibLifUnZr2ZWbJwhrxvX2Y3EBZA",
  "key17": "4L9u493XRJp7BSAC4jdmW83CqX2bV85Lg393ov7XrjjzCF7eP5FQW3D8RLUwybZHduM9bYEaL4QmyCuyva741ZGn",
  "key18": "3kvrcj1hgpK4hCqEZDEkxzNSb8eTBzYk4tFKiW9g3Z9K21xxTeAnqvWkbBFHfh7HAAZ23hvH7T5mWy91eRFVeTEk",
  "key19": "5zr6wKua7tknXoBr1mHJPDpJuQWvtMXnAsswAafqMAPQT2JRsvnFLgJ9YbC2gmmuWsjirqYmyhFTUmEfpMQKTs7S",
  "key20": "4539GLuMj7Ac6gpyXuBJhTTrinnnbCtETN3hDs85r16cYXtTM9caGY3WWb28vSymzjZpJpNUc7sEPfH8Wbdq2NmB",
  "key21": "2MBr3MeLZvGmt9r4uZF99rBaeX975g1bZRLzf4DjGDAJ5NfxKXZUzEEgfkDN4XPepcfNg9Ns4NUzceZMifYES9Xj",
  "key22": "5r8TNBPxs3VEBmyZhkqTXeWRBtBVQ6Bg7vaUGkLcr6k5J92qcBCPnbRP7KS36HaFKSj1fUGZdxgUK99VdgoaKuBZ",
  "key23": "56Xk5sPsThnyUvogyHmzQuWiPKmgneVdMTqWux77FWNPmuRAAEjA9DFgGC9wuztUyTFBjD92utysmreQVrXDCfWo",
  "key24": "5kpdUm3XPQiran1NyaB7MyzQRrMn2PzkX2aRMAiELWnu2Envd96KB82wvBhSFM16Fzrwow8WkzuHHP5zx3oWV4fG",
  "key25": "37qTcqDAzXV8giqYM27p3J4kvYc2ebQFzZKSy2wabsHQzWZABTXbbkrXgbmLBFFm44Yy9XF5Lbe3S29BoHJCMKuo",
  "key26": "5X5CHnfPSw41yZ5PSMmapkF17hS8VJwuWwxkTDswTBGbQHM46F8BrrK9qaqbgvzMoTJQX4xLDGt1o2oZ5iSh4wgx",
  "key27": "336xb1gbDHfDqDqW5pmCy5PRXWNebS7GkdYjYi6Lt3TPwbFEAHt1stBdBEdhGRZu4vYNmsVtcKFK8A369D4MUtm",
  "key28": "2tx56sxBja2AxjZ7BqNbeaCtExmXnewe5WSqDvDNXkRUMGSpLUAGrCDaErusGKr2vFeresXqRFyRPM7YcWs6VBKB",
  "key29": "5r7cV9KHKqCiYs7mXU1ffJ5NaAUFdMX72SGZs6NkYZKS44GDryuNNmMJDW62WfKuTdfbDiATmQepYihRBCoVCj3t",
  "key30": "C8WcvRRS5PX9U8xB6u7s7quphLinwUnSKjRoiZpD32URkwa6QvwHnykd3gUgh7CwgHJiCJeTcukA68KitmGZfBm",
  "key31": "4DrwwmGhsutpsrkztvYiXExFouwTaefbabTkJRnTSMx8RXFLD5i9z9nGf5Cn8KaLtZduyERRgrSAFh8kh2w6bUDU",
  "key32": "3DqnnVKuctJ4Sh6TXsrLF9Yd4JAPvkmG9RSNJyByw3JX7pedAtAkQmpuJZvxpJubkBVog1FY9Yorn59ScFaVjS7C",
  "key33": "9ZoXT2TR4HtVJ9k83NjF478WscFJ7JR8zPrkUqBQrhrVQ5RGyMEwpvox2yjBGnzeefVwm3t9qR6Jx1bAQqdqfTb",
  "key34": "3JmUumCUchydbGQ4ZxSHgMFp4JZMDt53UX9CZcUej5f3LdcRHNxEegrrnw74aEfdiqU5qQBVRtnmrqorkGfwZgz3",
  "key35": "3ECQXRb4kViLeZCxFsSnXQqginaeajDddepfXTdckk5AwWHqx6ufopwsfchFZ1iJD9JPG6AVJimzmXkf8gEdpayM",
  "key36": "3DQY2kFDjgTTyBd1uwvqYVCw3rfAKW3bVx3AfLAhFjn7JYegtusAi3TKt18ch5Yu7E3cy15jQPffMWGgBKBVrVMW",
  "key37": "4YEadbN229WUMo33GMhPTaYJDRZxtLkGCnF9UCBEdEvBBPFRuPRLb7CLzDkTsFqo1LuAxMW2bqsu3L2DrRspCn1k",
  "key38": "4cBdTqZyX5VQnfsspnLS9ttxx66st1iTUyQ687aQZm6SEu9igsVuJX7zy7eTApUzP5hyTsqs2vYonUGjKsVUhNLX",
  "key39": "5GtF3c49DMgyGYHWRbdJ2KNUavwJ2LMR7sLDdnoyHQveW2WiCrGqKf3ebZjzSihJ37jE8NvBSvocrJhBkuKWr11C",
  "key40": "4pbnGkqJvJHwPGadJZjcwQrTi81iXvG7wP5cAk7d5GdR5RuxiauPEaQrrqbCV7tQyj42e9cMYLTLZgbYuHeJvWPS",
  "key41": "4Qj42EGSwtAVCgGhqKKQMuh5sasie5xsKRLcWkhycESXsMUFRACMLEbvVnX8CepTk3GJS5C6oDeQbH5TcFXCDa3g",
  "key42": "wkDSNwwzZNmuRZXcRsB9ZMJiBLUjcXctZWBvwqASo7iD1ktvFg4y3L3WmjTM9p85doZUZ6tWATbyPbrcmCwFDFG"
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
