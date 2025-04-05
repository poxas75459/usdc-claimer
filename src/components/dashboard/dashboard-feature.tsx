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
    "63bC9129kxGKq7udHGn94oKB48iYpuzVVfECVvneyFi5euEDqzd1hipT12cgkpcoZ7pvVAize4L8bLeX2ZEYStNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fN9aeZYM5JVW7LBRRVBteYxwkAxRzh8eab51s85HF6KyVxWMpCYH2iJCKvpb71VghmEEHTJyjUw7x9ZB1n5eChs",
  "key1": "4vgRXJ74NBZeRzdCf9sQ8UoLdPaKU21rgJmz1iM5W1yvDerYbHgBEbUCvp3ovqntzsX9BDRmQpT8M6JYrvoaDzi6",
  "key2": "5jMMcaAEtxXbNAT2BECZvw4bxWBaNgtx4gDjA6NpJ8o6sqLvsStpMDKSBuzXSqYJu2yHyUUXKCvhr6yLyrbgYSQa",
  "key3": "4W22WgsmBnKc4w2n9mjoWL5Qb1AuUheaVRWaqSTnbYw98Yt7y57Si4ku3tPU8amHcRpPhNRQr1ohhFkVAPQXy1FC",
  "key4": "36WaCoYwU2zcTykYRnZdhBNXsm4WtucjYBsqiCgoYAXmSpGXNoeWhv2QkL756Z8mCMMkKKYtc3iewuNqMv7m3t4M",
  "key5": "4eBQFFaNCMcEw1wesAz9TCNiMXNmzN3Fk4ToNBdJnZbmmoGtkvDXeGoDX9eNAj8AqKXXds7x4fjreV5fN8orMR6W",
  "key6": "3kbeEmQgzKK2fs21mB8EV3gmeboS7Aj2ZKFFMJh3tCv7caKwQQJCKEvAHSeiw6YZLpUGYsVtv3LpkJniExNYGAvy",
  "key7": "3eBUkiqST4TWRXJ7TJAejYZc9xqemWvM45tqYRqsUP3XMrADuhvqPpftxWNsUy6YcvSPz8WjpChQAkgLU1vYNHfk",
  "key8": "3y5iXAEEM43aSMeEFDerhR5niyt9XnfVCZSxqEZtmosTKdNjWzAM8kJbyz3J2dpnmo4FkmM6w8ugaRcqPpfWexW9",
  "key9": "5oHV9Bi2ep3grRxzrWsDjH7ELhJ3aATXVub37T989BkorRxgH1DCsrKTZiW1JJxrLPnzGc8Cyue23dUhax6JNoJR",
  "key10": "4RaxPqjoZwswTSKPxyHErdod7DLtDJeJYGV9mqFjebGJVP38Ei5ta2KkeyDmohYgQWS8siEig6zrrWPZHCdzFiKu",
  "key11": "4mtWni36d2fmMqhZJbkbYb9WHoAYKdnchYa1MNj3KvZXAiKFkfeGSjgNErkN3JUvcbuAFYLcQrNggXD8tfy9BXcu",
  "key12": "4B353x8DUaQJ6SkRCbBiyHdFgSY78x7AZNbx2RWQwHRqbrfT9zVRxKMnhrL3H2f39RMY8jBcm8jcAwMFfEHVMdnX",
  "key13": "1LDqZYSUZR7TnbAKSNZkdrU1F1t57LZM6AkCZg8hcfYbbQEAFSR61uAEHByPwSkTh6PVZiAj7JnHbKYhduHvPSu",
  "key14": "LSjCcyTnLUpRhCKBLMKoq84W42QjJxAktwChcL5eyeVrvEmMATjdAGdxneAyzT8e5tYdTTgSwfBwX9XZqGfb7p2",
  "key15": "5i7mT39yiQdEMUdURr7gxsKiD35bEjcDBvw7HPWoNZA32JHHhHKy9wY2FNuZDrL6i5XexDFaJXDR7aji7xSDYjtD",
  "key16": "Vnx6CkQK8rTLtspQUmNywBXSSaEXzz2DV5upBGWDgr5XcMAbmWifwEGZrto2w12KfNqQ8esYW73kFwGAHTYymGE",
  "key17": "vDmJe7vHWRD514nVgHVkre6sefc6AYGKBGn5YAmUx1BNGnRymhkJJTjJw4SjSjJUSmGR6MnBV47HGBgcQ6JQUhd",
  "key18": "ut98Rb7bkkWEc2irgNqKzHsRbsNYADoYca3zoB85TZJ8B3wR3dYJWjq9RtfrFJhxNB8F7j9FTNBP4PkSRFhEtvp",
  "key19": "uiy3ustscZihrvaWnZkbJ99pRnGkquuWUZGn8Ze3jRw7RYj8296LuRg1u2DsAsJRiDKTHjjh6CKdzuUn2bjwumH",
  "key20": "3b9U2qmUrT1Qg2Mg5A4paQH3Rf8gRcKhUMxEzzSWjKycy3CUvQvjYtBxwEZeKB4uarCyWCjuV14q5tLMjPW9a7rU",
  "key21": "2SvSyYmJmc3yEHGEnEUmWoexjBqCXW1ykEMVk7QBa1gNonkWmGajJMJtXn92AtPEKtMFT8suDf4hxZzJa2eyWcJR",
  "key22": "669uzP3FL2xvhcxXcAuxb8HLmgFU3krX5WDSTQfgGKB4S1U4P6ZET3ASXVbwapPboFtQSubhY9oCtCvcnn6zEYmR",
  "key23": "5npjKQJd6WvZvpRL9PPCdpq61AcCfQq1n916z8w9Pwur33iQmn6ygscAqRPwySHzCC65AhYpRaLXHhoYTmkAZy9h",
  "key24": "5pUy7412ZE597Gm9cuf6qAiufG7YnqV3MWi5HRVQ1xkBjkuHikGe8FFTHms7MzvHoAEh4fAnRvN1VTwzkAbns1K3",
  "key25": "5Xh2wDiuJppbJXD2KnBL85hpNUZkz82BaTfdR3EYZHTHMpzCykjZQkuwEXRRvFZhZFAADVJQzB4cdFKr32tCC4fY",
  "key26": "bt4NemDdgj6UBiZmopBwtYcUpBQToaVXFtkXSa7MgJfApoLwvtgcgqcn7oWvJUH1ovvNBnUKKQcxrZYoQ5BVmgW",
  "key27": "2q5QhABKkcSHL2SAwbE4BPpRpASDtkXtSVLdrMfdVN877w1YjKUUZryHn8da7Xw9UqfE3depmJqgwwCxLXNBX6V1",
  "key28": "3JxQR38LcBRbLt6fDeWJ2DRH95HCB4iyuRwpZ4iFVMLM76st2UMYd39p7vTnj5VvkJ6dDg1NbZLQNXL58gBdmxVX",
  "key29": "V3Qgwqn181WC1BtcftR9gzsQZ1kQ96qdZH824X4LqR5XuZMNqyer73Us5oih2tEuXZFsNoTtVeuFNw2UrJGYgcr",
  "key30": "25dRZjsw1TYry5Wh2phWsrLL6Fj7fqmJUHVGZST2wLUHvGxuufKAnmmzksfYyhozZ38Rc4ewdLFdfNXEuoZKs7tN",
  "key31": "3hUi1u8e7KnVTpexSy5BZ386k8bx9FddNRtEWUh8QnM3gXj49zstrPDQQEgJESYW8fRVaZDvSZFanFfzohoGPcLB",
  "key32": "v317Sh7Jhc9bjoKDoKvdjnr9eAfnEekJrbKaLFmN8XRP6kq9DXTG2W5s86iHNPnUkR64ETEEiqAerbEHbSgTsYe",
  "key33": "3qs8Qeycy3Gs97uidGKJfas3JZAKbf8cgDc8MV8A4QXtPgxV3XBCcQD3KvoHQ2wWY3LvGfEMpPRMyNjxcebsXBVX",
  "key34": "35M2QeWLW4YCmPTdL5dXdmTDRPQ4RVkDYjg2ajXwh6ZEob6D5Wq296hAQCL5WpCtSovveqHEtTS2WhZLhyp42QPX",
  "key35": "AuiffyYyauxuh7jShxGepbUjUq9HGqZ431V3M5ughpRwYc7owdzT3WordoKy7kLsbpXfQAbjf5CBqCD6txneGEX",
  "key36": "64DnruSJr9zByWXR4yhzWwHwGzYsThSLas2iwiENqQ9M9zC4vNRN179NPoSJJJ5vf8FT7ksW6JGojQrL5fzKVwqg"
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
