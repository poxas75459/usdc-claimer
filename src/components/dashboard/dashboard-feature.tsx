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
    "5qmrzxwh6QU1E1P2cutVL5s8STTLwmcAfW9Ji7RJTZHE8oabfkMJDshXVBDZFK5o5ER1pr5RmjTpJ5WVw6xjtRzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1UuBE4j1GkM9HY5JbqfMSRPkCwMxoKmDEjD6DxttWDSiriQNKZwMk3jUKu5pDpzfLEYUjm55d3aREb9ZJpMan4",
  "key1": "Y1vvz3UbodBes3S5c7nB2jzXgnYxnSQ2CfkHvL9x6vw5AQCb2WyHdv2hxhr2QYjVnXexGELqtJo2SNhWEBzMdAn",
  "key2": "3xQeao5NVK6TTfbiYKuTaNzj61NJXqzCmwTuoSnkXvfy5qtDNpnJM4vKiUYsgKjji5a5tCHdqWVF7taCNkYSy3RU",
  "key3": "4g8SZa6LhrSYkeUqMoPMckVybGZYadx5qoy2m9vMD382MPbWLKLsENRycyLPpJj3aSCrN9wvqAML5qg9MtNumZP",
  "key4": "24cFAXF4iGXhq4mwqbsVwLU9whwW2EfiLmp25fwzBtBkPCsg9sqbrXqHKiDM6nvxocf8MLNoYemaYMPu1WRP6NZL",
  "key5": "5wwH8UfMupe5abzEHeTPGwpnV4qRBoTXUeniWhhfd4KBqjigQfKty4Ks9v2hcdeTos4kCNEsBj7hD68d4Z7oeJ6n",
  "key6": "2JvMcJ7xwQRmuztRRRR2mAGBSGiN2z2urBpppGD3wZHaudvZHHysyzkUyEj6sHGB9o6fA2U65YwWkPxgTpfQwb9U",
  "key7": "VRKbWotSwdvw8GsJ1QfxpHxxEm732gBfHfGLqaPhChbq9exxhr4TNYFY6nYhNkLCKy4jLwZkwYpongXyMLJCWNi",
  "key8": "5HH8Cz9wygvnnnDXsdDMxaUYMrnQMxEywmpCJJiB68scfA2ckamEfN1FvpHQLp4UABMqaPDKcT1A7YrYjX3cYzhY",
  "key9": "RiSW7NSf5ZWYw2FDePCmN55Y7WtMX6PFH2x6MNRszUJGwVmqXkdy3ff5DRSc71XmZYfk71g6hxkATyvDRMxBwL4",
  "key10": "3mjfyCBk8bXWpSS3duQFeraWsTtzDGj38JE4XhVbn2HrbCo8yiozLCeVFpPPUAefbswcUzGUznLr5MSvX2hpEXfS",
  "key11": "3A4BZMoeionZjoaoNnXkoUsdRWWWk32Ypvuhw1pCoRYQ8XpS8VjaxbEp3aXWfEHWeVSthRy7uTMEB8QnSZtbr7qE",
  "key12": "ekRsFkr3AJSXwgskXMhhoAUU4Ljx8RU9pTQeBVomb6bFMKaozM5fzEeGaDrCU6iXXKM6PojD7JK4QDk68FkGBWq",
  "key13": "3DAFPuUXnAj3dvaHu43kCoBS2dJXm7bkUALVofDmU7UuTtnzUtyBapRPcSdCzFDDd44L1mBTFMsZyt2E3Tb2SeqF",
  "key14": "2A5VvkPahJqe89E3J7Pd67uEKSjxxPTfG4j5tBt7j79GKCQfQygzmsmHAg6872UrQR1iNSpfihY5VWW2cuwqnhJn",
  "key15": "5AX5CCiVkLzk7Nqe4XbwfKUexvm9pBSxjy1jUHD2ypeGsETyrTS4ChAhE4KGefr7pb9aKBNwXLELKvpcL3M9agBQ",
  "key16": "3aPt5PVHgJxbwJGq1NEcH66QBUDfNm6kvTeA48gEymYeAkVD2iDWtAp3tsN6CTWvSrL8THipuyCiJE57fZqS6UWv",
  "key17": "55bCQrr1Qc2B8xZ6AZZw2GBGcd8oBKYvdeCAC3amNLqz18BvCGvoyXy4xCpbKpKxTLzsfxTuAckmdWTNXLLRtJks",
  "key18": "2sPeTNpxvgLGawfbucdu1PEEXpyNgdn8QzsQhUr8mZ998yfRzpLWyBZ6R5qQxV16B6erLz9V8Wmkn6N2hkJb8i5C",
  "key19": "cA9ApB7Hd9Y39eNEKZRGhCNwhpLbUrvhw14EE2HTmGSrkUCkT7xDVavcDrJ55o3xC5ExpAGCmXZGH6s89KHgpfH",
  "key20": "fD95LQvwf4ohDV6GwhupawSTuajQzQbwjEWDTynGCoTuiNLn2KvKQhmGfpNNnECNypokcSFjeh1jxzdvhuawWmd",
  "key21": "xTdMDvmAStKJomx9dRsMvjckMDaaPVwrnRYssT2qb4jhsdg96UEThdD7abCcVBCcYTkLMcUTgWv9uJTsvN9jg2T",
  "key22": "3RG6ax4ttkR9cJzGLsbULXHiJeREu1eqoSbZV9fsoeDpZBqZzXJXFBT2MrX6iSm8TxKw6j7WqND8YkHMzHEx3Hnb",
  "key23": "o74EqFBQaEHFgEhETDUjctE82vtwpDbk9bMzUifMMhCNa97pLkESShWRSikdiL6wLA2igDdzSNjp2X2NdMvWZjx",
  "key24": "56dbn7tf2683NL2Qx9m51g27MzfGdtsFupRDZHGhbyyyP5gbkcnhTU3pRWBvCkFadFDWaTMPLV2HjTT2TuAaxXXC",
  "key25": "H1qDkpKohs1u8e7fWaqr3DaGwjpboQAoQuJLbq8GX3ZFx5ZbyZMkygmXQViniBxD5htrH6snLhnhFRQbHgKY7cg",
  "key26": "6cwDpidEfqQCS15FyCgLSE9vS1CjGojDrRddjn1pv8eJQkauDyEDhsKSWxA9eswdxhv9UAGDDzx4Mc6jMif2Fj1",
  "key27": "2ip5p3k16Cgtzh2aTFgtAYsh4d21wYhYK6Vxk9h9u17SaEc7hw6hw7aKL7J5oJLy7Mi5yAmCJVgM565mVVSadRuT",
  "key28": "3CsjekzkM53A5EAa7Rp1cjriUFkmErKH8KQM9graQ1K7LbZL1wreer39Ag9U5z7LwdW8DVTfQRYVrsV6yHu3n4TV",
  "key29": "33qi4u72pNGt246zuFJwH8ZKSv3byySvP9ztP7Jf3pnVbP4MABVPpW9RyHiukQuYmmpYX7W9CWHSnQ7LVToC6zrA",
  "key30": "5X3RgQ2T6nVR5ttbivCLhavDfHA8cULHd3gKSniyuFTH4hFUxDZSpuckMDiMgnTDNMbcvFg7hV2LTgTr8ajz8CuW",
  "key31": "ugYkeiHr9KnEJXd5Q6tLP5yhw5pWEPCTD445Ge1PeUSwWYkFbUHxG3sZ8xjpPpNN3gAQTo4SejJWWdrWEyiTAEC",
  "key32": "DL1FUmLpAjiDrBrj4RqvdYqn2W8TD1ajLjCgvRo4SPgrFhvYkmoQ55129qFgrdQdufVr8JHR1DMh6xiqSV1SMUM"
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
