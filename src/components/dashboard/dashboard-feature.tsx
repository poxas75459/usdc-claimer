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
    "nyoetPoWH8x78gQwPqfAdJ46cWeJE86w75WFnQd97XELvYDegVAJd8LYcJhwQpK1GiiRoCpfAhJ8A5ZqFw3Ysug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gBAofssU7FNLvXoGg64Y5uq9yYEmx9c5kQdvxYiE7sijaigutfFJJcpgNnGM2ABNKhA3zjFzg6GLJeKZ62CQacL",
  "key1": "GhXs2NQACV7UJTGg9GccxAN6sbKe6QDTt5B1GgrKXwDfQ6WcG7wx9QVg2FEsHZVw6HEmT37pmLrysohzVRewG7W",
  "key2": "56uGrZBBYyoVo3cHzyVnK8X8t7F86yzV6tmfoaKDDvMtSfG9CKsaNgVmcuPDR4UJb6fXQ9dYXYdfFnDcRipbpcVx",
  "key3": "27jAcYDLvqmH5akANwA34eUQdPBQGq88R9x7MabtFh62esspLPgeLxNGy8pUdAdajvtprdzffG4ujfwxwxhYKzHS",
  "key4": "4pMxmWYMM1i5RAkvUUg7Zx1tYoEgLA3Vb55AEmGYHsmViEFFxevrm79Y2hmADF1Speaatc2fbGrtHqTLkP71r8KU",
  "key5": "5jAqAZyRYfu1DXgPYmzG7kCTSiFe6muYBGVf3yQ3tCt3x1wNsj6MYjyCCs32V699VJeTaCNo6WKQWYARkDyw7eyv",
  "key6": "25hd861CcQpkncM9nN18dYdyoivLaxJu8bhiChjGYGUPd7vgPn4DfTDDMG6XmHnFky23veqwVkYkoxbBSDW1v4FS",
  "key7": "64eXjvF8zSviQJmV9JvkbXSdTBtLL5Qg9rTudLkLbcVMqMrFcDVi57xzADzsKysYxiTnVCKAtUTSvgYfqkiifJ9b",
  "key8": "5T4oHppoX4tjAgMTdygoHpLUvVeDmVorRQVrFpZz1snkAyZ1JeBSeKLd39QoYbpGKwUA4z7vS7KuG7pLSDGMjTQx",
  "key9": "3rMiyghTXx7aQF9WMZCbDHek16e99mGZzGc5JDgDN4iRULuggJHhtYRtzqYSSDsXiV3VgBNzNxacrHbkSPHt3pwC",
  "key10": "4DJBiqUtb9g9VXK3pynyVzzjX4FYNW5etCN1n3eFT21jzfEFkMtwpGw5xD39omfv8QhNbMRCXGuYMLrSUYaLvLW2",
  "key11": "63hmHrhWD7NbUW2mfmnyUkMAKB3wvRLJ3EPAaZnKdGFzs5kfqdJmPUfJoxc3xdKHBQD5QPNk2kqyUSGze7vVq7tK",
  "key12": "2VDyNSA2GLzwTGfVJvi4Kj5DbG7i1tDVMGquQWkEE9KT5tQ8pEthoL7d4denB17JtnztqpHKx862DWCj6fqhgMD6",
  "key13": "4WLnRS8M22hUaDphp5yoKgfCVR8uivzu6MkcdEvDzNaWcYD444M3U9dEndZ2ik9w9NAfKBQPX86DWqkFa7uSh3gX",
  "key14": "34yFqZkzxisvv69HeTcWYGNo4NymX6LaWM9A8AzzcgSQn9w7gTbFpzBLrgcxSYwWsMsWQTg2cvPmEuVGoQGVnMY9",
  "key15": "4u5mnnWwwJbtnbd7kPbSRhNtGE9L5ppxDPvJTaJ47R7F1SuDjhYeMGfXN6ynPBenDQsQn5KHfTzdUJL2L4BbPAyj",
  "key16": "W7F5mHDMehUB1kfBX1UmCKgkzxV2WwNXUFDnExAs9Uz7NA3zb1ABvEX2mqreVVx1GvBbPfkJwDssDZwfMRCQQg2",
  "key17": "4PoGsi5t2XrujQ9bb3xQ3VNWDjCaNdHt6RMReyvsT2bFLPJXxLsJh2drAzod5D7wJysfm5Cx4VP9LhGeKf3vz2EW",
  "key18": "5jzVoynvPNU6YHUMZu1k39FJNQXEhoPfWZdpzZspyuBSJJghaTfJ9JmmRc2Pok11tJYJbT8fGJnEW8yN5wgAgcRG",
  "key19": "57TcRLzrchmiLSy23v8Hp6opHgNQh5fpEJisZfS3jSUe8rvkYd1CFW18jC27k739ZuEMv3eD2bLduGwhgBCjuEMR",
  "key20": "2z56jqWNfjM2sN785HXb7xroSR9NK2qDHZoaqo18F3hnzhk8xqRjb2E2jzhC2LuMspxA8HRCL1iobd6UVSGAvb6e",
  "key21": "62YCk19u8qK6UddLTZX1ocDrPe1Qgzv3gmfBwWjsz1sS9hpUPDhqNnQXUapuXKjDedn8YkcxP6hJ4UetAsLtcgSi",
  "key22": "65YEsuj6cHxQJ6M3BmwNswVCGhyiXAy7o5rVGiN8ZV2wSBU3yTXHHRSiP86S3TRAeQwRNTQQVNsAuxZLV6L9MHfU",
  "key23": "48w6j3WBfQCcArsZcWuGu6DkWiwXxd6oc3uA2xHTpeyDtLBFVZfRZkrc1AWz7BfrV8oNP5YGfg3kRoXnE2urovnY",
  "key24": "3xiCvnGow8WGk25Vs9oNQB7juyGj7jsaXPpFhuLCiDzXZAdH87vxBqR2W4npv3C9WhGgv8ec8UuNAewGhKaoBuBR",
  "key25": "5PrNbnd22LLqyXcRffedFwSdVgEVzmfQyJYeCwqtdumVNa5H9436VhUoVjsobadz7BMkzwdCfzvN9Lw5JXUTckVd",
  "key26": "35BWxcpDxYx9rbXRibTCB7KgQZuoF4dWqhRLbkpGftxT5NjYux4gCtxrmDeKtA623PkA12vz9WdVShHQ9xNc5V2z",
  "key27": "2NKpBdqTqessmaQPVWao4dUedPEeCDu56Q4Ha2g3mxxZ6vwULSNMKUt48piVQx3toAMg5UV87bFPpdkLw1uW388K",
  "key28": "2SJpk3PJKc3j2qSUZzAv8v36Z3qXPNZ8wiuz577obd2fDTnRxNtnepJEzocVeXYCynnBb3tucLwnSynAJGUiswKS",
  "key29": "2xf2YbL22o1VhpLh7YG2xqTxcKoRvRhaUopwM1dUPVuFWtA9cFRFPVYHqamuTtthDrojgeZuDT2CEUqubJzVbwxp",
  "key30": "8wsWYeSMLFUxf6FuNTCrV21SDvXnoUMP2xiqmSAdHt3CXpajFKz8AbaVHek9wiKfFo9Nf4ffAbTurpAcCChjg7i",
  "key31": "SFjQYCoK6pn7onusN6WZq7zNdacVtFaRMt5aEzdtPH8EM8aSEbKHAMctKazHhKAEH2FykWag8b6sx3Rqg8YK3WM",
  "key32": "mYgSaZgxdGEKQ42QXjQXZAsoJCbVr9B6vUF6F1pNo27f1uz3haKV4vH9UJR5DSqt6qqaQTSoGYz96PrPUyy8aHY",
  "key33": "6TQ758HnZYpdeRygCrR1uxHtcApvehTPEWd5QexJm6C4e4JK4FiTWPHEbsB5bg8tx5eky67PXHK6C9iRow2p3vL",
  "key34": "2RqZ4SA5T3nJ9KHt51F2nvH2FvxjfKmgTUrEWJhaiBxSy3n2ZvhXPKMdnGwj7AtdjjSgroubJYH4WweyNiaRobQ5",
  "key35": "2VdLAxVbeET8QeiBW1ZiMa4pRchUBgL1js9zVeCGXdY7oKKwcpLBoRjENUzhwsuByU55m7tgaEH3sp9e1Ju1PAZM",
  "key36": "qGHyebytEee6RSgfp8PQNWXz1HGNVoPkxwRotKCeKeHm2MFmJQcfzpHuThsTmP4FMA8Ea6AY3PXr6qQEYYg1FH6",
  "key37": "32HyHAPZmVCVGbX483cN1hVnpVXAB1nDjBsxR6kKnHS77zHWdQXGeRThwgNkgCHsDE3aG7YLgiS4EaJm7SaG1rTo",
  "key38": "2vDVEXBbZXUCUQvK3MzUDoMXsWbAQKk1CkBu3E1JgaqBpQwaY1fxT9W7AZXPSgd7Z35g7WCM4Fqc77v2anYon6DZ",
  "key39": "CxEbACTV54oDqv9C5QmKqoZtSmssRK4KrxcYtUtYBLGedabUDHCNzcy9jiExmXqTgu6Z44W2tDz3os66onJLobn",
  "key40": "3y81SYUXB88CeF5fDoqmzS3fQp5CVeCghvLQ1KTStERpnu69oPfjNWLMbcTq47CN6VK6FMebUbNiiuMt8pGM1xeL",
  "key41": "mFcVdtsRgtyv6H6PLagFUvxSrZ6XaNP1diunkUUDVMhKM5JoQU143GtPfnEsR26LsHYtqwqkUFynWFAbEL1kPPt",
  "key42": "5c66pW1goXcMUFUFzndWhH5n35vjMMzwSCYjpvy61HFXqGwL1BocFPxDi45ywEP2aUddgmV2bium2jdwBTWtdfxs",
  "key43": "3h1nb8sdECHsr5CtFLNYLY6YpWpJGfRD4D5EMYsciHEy6XPWpuXkb56NjMNZe9dRNUUd5K2J7UKBpTais3ebnuJG",
  "key44": "43hfH1fgcvE72kAgfW151xgPWk6PyNSueGmZ64hWTLKHAdNfKCMBGASyYRN2z1tbE84CfLtkwaVXgum6q1LG7VHo",
  "key45": "iMrLvB3GC2ej87di2dWkPmFA3VGBYn2VgFtA19kefvNz9X1KuieduLJhrdkMTG4qeTdj8LcG6JKvZCbYZJreDKz",
  "key46": "2bkf8zXDCd7vYW2j7W5YK7jYMwy87h1B3TuTkoMXLmY13ZxsJyhY38xpJCFoJnYm6vUn276iE8VjFE4D3M7WwEDF",
  "key47": "2Ky35GB3tqsDwoKnrUc583Pe8dhShUy18VGzuZNJQJe2YeSV7GZrU3JJS7iVg7GK2TJTDquYqRn9WLF8CeoCQAg"
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
