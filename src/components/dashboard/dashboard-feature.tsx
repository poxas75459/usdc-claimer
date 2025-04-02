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
    "yeWne3LUWnFNGXzSbXrJyCW3ZFrfQWFpZ6B5hs8p3xQEJbp8YFSvuAi67iPf9651P9GybDhmSgJhYHf1fG6Y37H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfyh2iSMfJEXgPhMC6Vsc8Rm9ftzM9Z8gAczNekeG8PcQHsUNzju5CPavR5ktGYTuhvB5jSQCkojQyvijZ1tZii",
  "key1": "633z8syVmmVaXXkPh152Pgcy2Gshx2Azntq8HyxEwaxD7SZJz1hnk5ycwZsykpy6eTt7BgGi6N2eMFfUd1ZkjqKK",
  "key2": "2LaVkGTTNDPktK2Yii32AHDKuidb5z8NCN2Z9va39iCtxmXpmT8ZPHDhxDreTs1Hn6aF6Lv81CoHsPpyYB9jRfKT",
  "key3": "2xAnh6GAQjiSy6nw9yQWxQJze2CGHvsA4g1gWLrdtgyKjGHH9Mz7VcGGWp866L3p9kx8pQT4nq3noJjZZRmWgsCG",
  "key4": "5txS5ukEMZEZLbsDJtsAeoGJNoAdjCn4F8eytgGbpUcawTmnCTLiLXCmoR2LNUVADFWLSMMq2UFPSnMqkV87jKWB",
  "key5": "4VQCiFiRYrZbn52aaYJdqXpC9SkSbbGb723wU6zLQbVZ5xE4q4Crhqk6ZisZtDXfhmiP8WMamEpmErBrzuR7xrKx",
  "key6": "3y7w9S55SaKjmjo8x9WV42C7XXj3baowHppZJezg3z4X9HCXz4d3TBYGRryDihx9tBPvS2j67cG3nqZWMbKj5gqR",
  "key7": "5d9zdEMoMjBsw6s8XYK7HRyj7HqDoEoGaHfbwieHgyXEreuU2J5RdeD4R2N376Q43BvAMipuGyqqXaM3T33hpeXM",
  "key8": "45KaWpub2sKKL2pT1Pnw5Ar5BZhjxj7Q8GpQKGWmk5YxNMctvJUc7S5No2H7fVzMbmVk2KvhDKA6N1khT8zKbR2a",
  "key9": "3k9jikoywQ4dijoxWjzbhwMaWQpmQ3hDFxcrAYgy3oqvEL5Suv6mpLrtPhSotYqtfNLt6UAEoDz6bJ5W9gpesp4C",
  "key10": "sVkGXyQYVMRsyzkYeutzuwcoiRjY1nViiKiF475377GPrgz3Qg5x2xxXPWrE2qp4S6ixxYWje3noqPqGW1PVGnQ",
  "key11": "5g2V9TJKyQVEdky7W7XJ83sVhJWuwwPsQpTYnyQVj3YXbNcPQEuWnaSZeRuQsAdsmTMZ46waAUaiHYuUXaFd6abF",
  "key12": "5eGeWqQkFUggXKPjKyitR2nwRQtq6kw6T8n6pQ5GhAqVYiA2Hsqs1QvDyeiEpXjLrnxuUjCHEVFWjJFHLS3brrDR",
  "key13": "3q43emxd1uM96mKLRQh36xH2UCkTPMDXKzTbRf5UwPNHs9uqYnKrw9xyNdNRD9mUiPwDPmaE3u2VBL3d2PSRDDRm",
  "key14": "4S3vzbxU3TTv3q1e1YzeMWaEKSMTLsXDJa6xv6swuV14w2qmAp5wHn32o4FUtMd1D1eUvyk3TUbMPyQeL7zybwT7",
  "key15": "42uqSXYtMzMv9VJTuQ43kKJHGxpzjrcCffEmZy8b13TUTehqEA3aB8UQpUPhGa3TZqWs8m5UkMpUn5wX6pT8fH1M",
  "key16": "5hBxZuHjDbLcAdN1zDqnuhWdSek9MpBGS36GLqqWnGwQbh57qznsdncp21meu3iWCa1UNMH2BgPuq1gCnVfApp4v",
  "key17": "3V4GeCvQsz8dMExLVFKPGx1iykH5g4fTo98Y4ZHWBjQAHJqVVE7FMMVBSUjLrjGsnBrD7QsXEvqGqRdL8qLMv41g",
  "key18": "4CxxaYApQX2p7eN84BmN2LF6ZS9dKY3JoKybLXWiT27n5p5prRjWUYn2YLiQD7z61dMXvr6zESkp7Fo1u3TVjdMZ",
  "key19": "2P9PUL6PF4UVqwhTJ8C21pkj2xYXEecGEcuy7bHc7aZoDTsuM4pmgTofhsYW1j1HVGjHnnoRLG6RiXvqtmc1sTHa",
  "key20": "5AZevF1B9SSjowqPcBHFMakPbD9Pv8KnASGuprDRgdxqPxxvS5wJXbdiSMhJDcr35ny2L9ftQJH1ncv8HEksSb5X",
  "key21": "2MPLFq4bNAJwjy2caRvWovnUGvhg8oVo4jBRk7uV8edmwJf3NdNCp1X9psJs6T9vttcq9HfJdU7yxx2jicNDWnmy",
  "key22": "5nyzW2cjmwzsyHwiMZtbZ7YAeE9SPVohrbDxwim2oUhpNVDjJAfMgcZSDY8JN7E8vYwLLLmU5QLYC5oQjs5gBfK",
  "key23": "125pWiviqTKWCNgnHHNE3F6FoWpEtLhoSosbjfaYuCvRkmibYqnHns4kvhJYpUewBxhG1eLWLzEgRjKpv5gn3bvQ",
  "key24": "uGQBSqm4DZ6F1VBNZ973QFxHA3hWX5gkDfEGjZa9VmSii7TnBD9YNunECuPW27Kanoes3HJZWcU7fmRGVwV9jSX",
  "key25": "58BHjNBA7EUWX4QjZwn98phSmh4W1mcfHopBoiH5xTk134WLxvWdy3cUYE4PF8k8ZFaNpDPchyDNKnYzCjwhgHEf",
  "key26": "267XEFSnhr48DwjiuxHkmqjksDwZD4LrPyXVcmHQq9Nbcva3pFhhLhcrvvr8CgGhfRk7pSKaksACsni79wqmSPkV",
  "key27": "4SLBP9p7TQjNinxgApiM5RpfPg5cs1dR9wcp3DBB13TU8dEqs89YqXbWeBAzqgG8k4gaY1ZYJVfyPUTDRz3TXZnU",
  "key28": "5AGuEarQBADXmmaehb799SFncTcVsQpSG3qPZpPneEjzN4cwKiL9zw4jwTTRv9aSzwFFY2dkRYHYFtH3DD8dT65d",
  "key29": "rBxE4sXAz9c7VMtgo6DxnMLLUV4GBvk4ZrRjmgEeCDdbyRK4bGY8e1apjMF6RKNXEb5UaKdrPzNRNummVSpm67j",
  "key30": "5qBttfsvPv36zDUD4aCoQAkuuoyhRgLFd9AY7jMP1tqRy1h8fToGYFa14YcbKn735P2kzmZu9rzzaPLRafMGcXMK",
  "key31": "3Cn5pjZTaaKodtPyMAh4SW3BDKujNz7pV6yHhWDnu3zFKpvUpD5PuUQFKhggiDNbzBJrCD4JCnScU9qmBCatf4jg",
  "key32": "3AS8TfqefnnmQsSuC17UduZdBoDgsYoSdu5QNLkMogc3yYRsGuF9KK6CUC9KcyhrspGcvgedacKVGiWJVxzLSbZU",
  "key33": "XMQ8oDM61aWFJCswRcRVsKpJ8LL5Ez6fZzznFeGKNgX1Y4E1eC72eQHM9RugfSyHM6FK79eXiXVQiuirz1CgmeD",
  "key34": "4ZoFJtvqw7JfvJz6PcWgy9uRMvNGi5qVrWJFBW7Fd7rTEZ2o3RxJLgNXw9kRKU6pBimQw2TwmsRPuxkvFEY1T4zT",
  "key35": "2uRzWWkNSDXV6rn1EoLMJSk4zrnnpnB6bx3KFDEkXyPA8iYxAMwDkBPYxNyQpruehuEsgDkf5xo6HpoJUxpQ2iDv",
  "key36": "56jVEEyVdk27iVqvXZtwtG5nAMR2GtK4EPVeNxU6N431CttcmAdC3VcwSNpYYwib2w9UUvvwnn8gBGDe2bbS66bB",
  "key37": "K44PrxQiX7hsqj4GgqW17rMeYejCd7jmSkh2z8XGih9UHazFmLVRB17ny7heAqRApqU3tv9rJnyThQjpdnypTZS",
  "key38": "4pNeHgta4fJtMbdvtVa83Dcjdu7bogqS3a3GcAMsi5LDWjmAGvZK2niZ6SnVxNnV4zYfJ5LzmrwRHMZPpLhFoWzS",
  "key39": "3ECXxjPbr9A3Xg8u3UvjwrTV9bT8bkWYMK4rDbTS3J69dn4XWdxZjJf2B6cP4DAsC7rAPGKfjPxsbvdEidi9CNXZ",
  "key40": "5RnChjjTohbs62jUqyC2Ts1Wyhyu2JaCRgWvVyzfzsbjNCMArvA7PRMVdmzDbYyFP7cCYhx7B24ZTHompnXqZSQ2",
  "key41": "2L2z4qJi7eFAyHFv9whtoTWpWZFsggj1Lbhhyni1KnCgb67t5AUwtKV9zgvS4FjWLNEc7X7g6ZSuHEaZzRWerPpY",
  "key42": "5j77v7KLK53BFegQcKU3ZPmGWGLfoajKDLR1oKHML2tYyCYrW9GJWzDCJpPuxJhWpULMFNcCCLANiS3yQTsTJwNT",
  "key43": "5tWUsUDEVGGKvTTRPFRa9S1vMnPCi1G56ML4pJqDRMSNAGrYGZFXaSUAQj646U6fqeDgfTKt45eApKA2cM7Cys7a",
  "key44": "5JVPUXBZc6Bn3uGtkSVGaP3Q6UUgHWid7yfu4mYAyjj1WDvdFRWLtJRSjrscY3iHavgLrQQVyfy2YpxJ6BXCSpHn"
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
