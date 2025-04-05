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
    "4nxb9G2Pc63orptv5Px3ioKAxzUR4wPq4StH3dLBW2kLUUEJR1kik5n5F82iEsQ5KEPhVn5oK3KqiFrp1vxhhjdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtEPW7UAv7ewesubrC3Xdtk8ErHpks2p462EF57ufK1xeFbgwaH4RY7XEWNgqCWSkjvJpNoZNhjRV4a7ABKhFUy",
  "key1": "5MzqiFy49vWqFpbWftXoXqzytxm58HLezCnGcETgcBSrYUJiA43s7WhNuNEbZDiNBvSLF7gYAZt9xoZScr9qEwag",
  "key2": "4prVc5LpM6VscyLQ7dQhou292DGnk8do7HoTNUQ4idF2kgeDHtrudp9rcweoCZuUwCcwSkdAJYe2r3oqmu3J86WM",
  "key3": "4D5TfH7XmpQHZYzsdJTZDidBekAbupY8qq3XwfYuKbbfhSGnZR5k6wwpJRBaJQQMa5ydzhJuYpgWzKVaaxxcMNp4",
  "key4": "3qC4chRCuqt2uuBub9CnLRhTcSDDw9e9fYmiq2G5ovn3sG79Ruo6EDmHqLty4tAemWkeSkkARrPCnmyXTVmTMa8u",
  "key5": "4LCNu9YsPnmNgQorDms2N7Qw646z2wS8t6XrDgzK8sXVo9CcffLtfsXNUUEqb4d9oVxbhuukG3hJdEnoPixDYpuW",
  "key6": "37ub5DzmiUQg97o6KXR3xqLRXqgcKmwCzwR9pa7LZwBYnh5fkotEfNzqafUsMjo49Zh1KN14sbGwnjrK1VGrucXm",
  "key7": "4gPzgaKSgaxbaxNEtfqnK95FBHAWAzqZ5g4kNfsxx9Vm7BUFfvCYU9gCfWuAZ6tjxFxTwAkQDuKskyyj4v8817su",
  "key8": "5zemezf5S4TKswN59pffAn48SnxuUntJa9ZuSHYJYxuWm6HkQuL9eBsq8G9cci7kxNtXXKwktMGKoq4r6yrYdgvH",
  "key9": "249UK6vtmemeWhGD9JBYbi1U8ha4bwFPhbaieVkhxeAt8PeAxPH3b6Nm5gZkjhqbLYp6rxwVC8mq8xYwYvfWMCFY",
  "key10": "5vpNDTZtgv7QNgCPRW4v6TX6eFQ8coGjJ9HivYEtEmsuzhLDVHWQ1ZpLCt4pPinVEgiutEw9thCpKvD4aKMb8Jzs",
  "key11": "2WxZDDDB3NydyKZ2QQaRDHZZ9ZSPPj5eJrZUf1WofiXLfmXv3tYFykawCz1NvjG7pzSnxAVZ7vkzQY7k4DfEYMSR",
  "key12": "3zCM9e6Ht7Bci4aAZvgnMnMiYRKFkvPJYw77ev89vonwnjcgG5wBDNw9fyHCLhny1u2ep1vrdgxjUYFT3pHdBLq7",
  "key13": "2JHNqZiz21VkUhcdvFRVsvyrrG3Bd2t4iLXbciQR5KjsyUkUncBk1FjDVdFyLVMCJ43n9LCKPApF3cgE6nASvG2M",
  "key14": "5g9bkGGsDryZk96Zq418V2jjJBNjoZMns9unJBDs2vxET2rJv1qnWa9yUf9U8HAREFMKLpvZeofVs2vsh9AwfBKa",
  "key15": "43nf1tPJm83FrGtu3hbkTcbJvWk6oDxRdgKMtQc4cSXXtdgsUqjr7CJdm7aTxTBaQ2HXawdGWNWm3ee3qzVR94t5",
  "key16": "ejP84giPNBFd9mXP6676AHC1D27fWG8Xg1nfs5hebphDP4yaW8vETwweywbWnKebY6VnD77RzzWNQe54Dgp755L",
  "key17": "4gdgGavX1WGViSMgtefdLtP65EGZqfkVQn7Pv2Zj6dRVeVEWeZ4zhqFpWEqvhiFTF3C4XWLpxLP8L1biAsAAqY8W",
  "key18": "2vp1BoP7r5LJ8Cp5NwniJqR7hsMgMx7nnmNXveX1T5DfZuKGUSjvbci32RJtW1rfG4FtorkFP4MsbfmhJSAnzpZu",
  "key19": "2v5aBp1XdFfPVWNg6PY8NW5T3nce985iaAQUWZcMhqN6p1PZyTKqkLgSzYWsuNj7W3Vcc9L6pobx2r4VoRUqfEas",
  "key20": "4zbEsikWdBrmqF7nfnBVXiw3VpwL6HK6TGycrfMmPNdPJfijXQ5sCwvj7iwgA1Fwb841uw18azvqmPMV5am3jsQU",
  "key21": "dG7V89FRcPj5DfP7gpyuNee8cZSe76QnJ5KfguFJgJ1qcqZrdyXYaRyNzg7qiG5kVaiTMTHJwHHPaAtzZwC9WPN",
  "key22": "bXfkusFhaB6WYQV4bJyi6ZJAXJTR8gFEFsBV1jN5xCtp2UGHDd6hXzoknTaNNw1EMRrfyP8uXFe4YCHSMPJ6c2o",
  "key23": "AssknkVdeyoAKD6xqvPxCQVkTNf7E4629iGFPPetYNccfVV7XtU65XfyCiNvGwLAGYNhgSnYSPFuG13iXDmB69W",
  "key24": "3VxJhcpEsvtTL7Hok4g94zuSgUYRSLJazohxMmCcBbpxydj7wdx6cRzGKrtGyb4wnmK5tPFV2FpVERJKuuaxN1fV",
  "key25": "59LmimnhFRNGH9aTPUKqtY5WScfV6ZJXcS9LGXNn4sez19CewL58FsTUxAdKPgu14F9kT9YYaNB32hRvcaT6FQ4w",
  "key26": "4dNDt2YE5esHuof8FdMdNhD1S5AGG88XBeVCYRUQU2NnTFa9SDULLT6PCayGKcKkCtBFbvsBvCdxC2B3KNmv62S8",
  "key27": "5wKwnivzdfvEh9F6Ku36DvCuECPBJcwmucU2U5ejPMeRucnt2kstsa3HH6PurgrzQ9d53pwNy6tqqxXXdVL5ZHPi",
  "key28": "233V667Eyf5zUh5MqEiQNZC84EBMaAsbaKFgEhpWM8ogpnWmf7mKadt9Q65BoRxkCgSMSoDEJTKLSmcGYnSghHK3",
  "key29": "FaUdh4wjd9sHVcM3kexVW3j9sJX2KtZQssXCA2tXCWQrG3vXtfwxCvK8ASman5ciHbztySVA76Fc3HC8RxawCRD"
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
