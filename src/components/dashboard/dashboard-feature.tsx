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
    "4whxz1JUVnDW26nzKHxAzFxSDWpLd9ChQGiqSJWRhrqmFT9yVUzhnRg7xgBikRpm9XWuqGj1PBogkWQBvg5zctug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KH2CYzXeuWrTRPRkuSXPezCgX3RWTdkD7oP8yDscG8fhq3uZNMBb8rXG6xH54EAeEN2jwb5sFgN8Fzenc9rt1FY",
  "key1": "2RcLp45NSKVjwDHfFmsJo7Hb9KiU5Aeg4pU5bS5BTtDYCbgotEuE4JwN7H8MQuKpVMAwYKVutUexdhQeq8sma494",
  "key2": "2Noam7Rz9LnS1PiivxLMSpp6yZD1NEFVvUVWkUjt48zSfZjBxQkYZ12mwALi3x2MtyJ9EyXEfGrhFwQM5BziQdVX",
  "key3": "2EGaG1VBysSSVWxAJ6NFNjgkFFpqD7nhvHbUNpf14AbdPMJq3G72t95N6sAsZaXRCKahn5vvQYjxxzQQD2qi7Dbb",
  "key4": "5Uyjr5Hfrn6LX9ZNFiVF5syvWr2Svf1eTGCHVc75Ax7yWgkUPi31echpESrcMEgwex36TGAFTCC64Yo4b3AFGonT",
  "key5": "3sGyaUgnnG6Hm6zYEb74qPpqisM1wYtGpySwYmdZ2sRcKRYipadmgCFGHNnjBSWoXjDu9aejVKd9d2hoRGWoYJ2P",
  "key6": "2xDxrgiRC1QfGh1GwoDg6ikNm5TijiwkQzPUxdAp82V5UA7GVWUCT9jW75Vd3f1iFDMWUEPY7wh4B6sZ2vGpr1eT",
  "key7": "5L9P1LEwNdRmKqB2A2QuJmbT7WTarTCbHBq5WLMg9yk4zH4cAM6wNQBA6FU6LW22bCHHDCbfCghzMCGCUtKYYHg6",
  "key8": "4cTHBufp1R95QAZz7819iNy8fqLMWYr6U2cH228d6SYZkateBHkfKw8aPDDToJv5UpKYHHyYAAGS1rRWMfU4YqXj",
  "key9": "4SqEYbHJ1Fh5MhBJLxTc9L3JjcPyLgNDMpMRCxws5h3rRn799d8mGca86BitfeaBVMKxUJudc3FpgsLwzyiFcndJ",
  "key10": "3gXo2e4wKZKXMr4pHzjM3Y9DYcfUjPQ3Wzqj9XB1MsJ3Br1nne1DCj6YmN61Q9bYTVmABHBADA2z5hnYDNpfHBN2",
  "key11": "55rdW4iVQhycXnZBuqN3ewXMt5q8HdEsuevRYbtHP7Cc41CbzjnShfFEtfcM4xSRZx2ACgV4Lyghyfb8zHBrgUFD",
  "key12": "3arMX8umdSkZUsAvDF4MuvnpUv8o5FTNqSUVBLQbsz7VHNtAN8BeMVj6FsCZ3PhKRjeAqnGM1jrDBsX3HZk3xv5E",
  "key13": "8aZh9BJGahcMPCj7sRsW5uaWoXY8YyDiCKjLR2YdVF3WKJJ4QYqsXnQwJiseUgw9hzaxcHQ7EUzaHGHGS7f2N1N",
  "key14": "3nvvbfy9SgGKfzHvWMRET9ukCtGXwXZREjdPfqJfTTmYSbKcWUT47kYHK5WeRR5Ck2UrPuBJmuuKPC2FoaYJB9KR",
  "key15": "vj2gZKGAbBbTduNAppK5nHocRg71EkFMvxMBYFv2yjiWNpw8j7iJ7NtQKxEPzjghLHFz3JJqkAhR76giPVMm66Z",
  "key16": "mj3oWY8tBcmyRMspG3ZHKzBtxUEdoTkNMpFvXXAKNme77vCNJB7gjMK7FStdqFwfQkTmETZSBuxhG7ScGD1VdCz",
  "key17": "64uaguHYGEcS9xhmGaCdeGCSn3U1RiStYiz9LhbVk2wjs9sLUWbaVYLsxyEBGMJNgB7DAtnXPGw7gNaGnP4mSA2F",
  "key18": "3veCtDKp72j4poxLxf7iHgVLvpjK1u9RyCEEZCVSgey9Ej17m2EQDNC7TWb7pSs3wpBPgxmHHHv9zPBL586q7GdC",
  "key19": "Yw1nAcoTkusu3ebmwLAkZ9iNpxU2rzep6VTeg3DPdTBZ9XxRRxHFuk63BHFUAvgNQ8K6kepa1J3DfhYZzmwkJtd",
  "key20": "4mjLt6BsbUzALPskwzkGSnnMmRwu22SMQAqEdZaDpexfHnLW8j5pMe7xt65DE8hQR9PNMWYv7RUTzhgRuX56PMyy",
  "key21": "3T1e6durgcftzGg5rEhA6NzcFL2HvrhdVDMdZuo4oak8Sx5gt4dea9TrA5o2V6PWQQM4KELqZoFWqvwHvXtdfpes",
  "key22": "2Fg322MSQkqXPkDdTsTe7nSQCGLPVVUEPKBZ2nxjYvqaEySoWzeK2cm2RZsnBK6icxzXvrFEWexLBo5R1Vj2AMAs",
  "key23": "BPLvjRNoUu9NhTr8dX7ckavMsgFrTmUkTwbmv93vXNEnYYRSgPECjXJQZfU96RhynddVnfZ9htqzgAPRRnRuT6t",
  "key24": "4hE9amDguk5juzfgMaTxK57ivxf8GTXJAvAPhQVbJZBwBnCSPiQkvwEJVF6ScELL8jc56v64rCwzKdcGpakKXZhB",
  "key25": "2KKVVCxETrWPZzZFhrjDnpzdLtPLtLGNmTGjo8SuHrzUuqQ8fyd4odWBigKKiiSaFNx6u8svJ7aB13aAvXtY3UeF",
  "key26": "4afaJZUV95N1BE4nKUEBzhPB1fE9HKqFRHm7C9yEXM2Sy1ygEi9qk6GBQVXHnJAEZadRfB73R8BthmYxbEcpvAFQ",
  "key27": "5f5kELVJ4t7WURFXcNd8RtFNHDch9uGLfgA4Qdo417QBiqYEHcFyjEJFiptdsuEM3QJKbQ2sU1cQkyi34QGNJeDc",
  "key28": "2uaRjiTqbHNuuTgBWLqZZFDYKU3VVyMy9djEnXCp8Q7XQPGXB3BQ74pVhh7LrDNZ8E3Jwa6rBuGbRDExhkWFLmDU",
  "key29": "3p1QokaCx4ygQQCzT1wqht2LfCm49hBh9KUopPYmsvr9Emu5XyZVp61BbEphhvUqbhCRbQSMzAwDdyhDJ3Kbr7Fh",
  "key30": "1259mMTNDhRPKoRjcnb5SKSXJyNNMkWnQ8L1cE83a1ZZCC1N42GCGppaVJEbmbqz8FgQGdF59Cj6nJAHoXiw5waq",
  "key31": "3qd4u2i7e4a4uX9CSkSxwCBxWi5RxtmS5NE6wvYE9Ui7cAoQenhxK1TjBNNChMjSByZK3oCGA4ZMLK7BfT41KeK5",
  "key32": "33kMzAc3utK7xDQDHoQipp7ynaW9sTHwo8ZrhvQkoPQdRxxb1yGfk1VwhcDdfZkWRe6s91hR9Y5Pz1YJKWpavi6t",
  "key33": "oZVzXUFr7JgVgvi8BBnLrGFT5UEtCMZARg8ApEk4Fgr3JimSo7VnF6U1NTfKHaymZEVgrbJ5WcJDe69LHaBDTWk",
  "key34": "4AX5EXQJPYMTvEvqKxiyWafawkeiHdCsoAZSxWyoLZcuErdDZCFMJPADB5UaZ1bSkvCE5K2GAhoEmJaBfM8qPgyr",
  "key35": "2r2LcezHf3aQujKLjzdGPqwaKG3XhdZLnyv83zxxkVwPUNuu4T8352Z5WYDZA3NiqJAvtNPEK93RSsy2rMDtBT6J",
  "key36": "2e4jsSeKUhX3cnKBVtha6SJcA12KDMhgoRKPrjmjYP4pTwQAmuxqqNs8h9jLsitWwxJV7jJ8mj2BY7NDmHqYm7K8",
  "key37": "WHW55pcTA2EzXTcoCWunsJdFTVAfRY2m9WMQoDPxsVkMaZGk3QNbPSxdzZS7inA7NUir8jTHCEVEKEdnUwLRx45",
  "key38": "44WihNtJ8nkdagNkbUnLagbULsSkuWGhcXY3VQvdJE2FbViQCQziBssFktV7k9Z6etjfDkAKjT15bkvpnA2jRuVi",
  "key39": "5gHqbWk5pnCn4kaCx716Bac9E3fp9Ae6uP2coXPQAXTbjNCvUEnLP9uDTgVm9sevsWboXRuN5er9YKYYB6nm9rUu",
  "key40": "3mymtYPxqNx61zP2tfzoJzAvUMvgKSfuQWnnWu9zusZ1WrZ5LxcUmTTucYz7T7NszwxQPCPYnE925RtsFfmG61NG",
  "key41": "44XSvZTsssqyfB59FqQXb4u8JVcmDi3VJnWM1qkfZ7hmgEGWTGZPnUdKSgKiqTPcp9EToHGdsudnDkwVsHP7xgPN",
  "key42": "z9iuSnW6zGpbU8reVZtB6UDgvpWKDtLpnUkUFGPatsVCpjL3m2wKhXtDaKc2cd8C8zEAqYSs7FnR1VKEMHwpkc2",
  "key43": "2WftX6FPWCTCfBgDEsNHWTwwPcXxq4ty67CuhMZdH6ZZKJdHgaoCegwnUZZDCYy4VAxtdS9fmjNn9Z6uNDBR9JLz",
  "key44": "2xCaWHA5NB53sAAAJEW8vcznEdzHRYiyiiY9LyudDZPLJBoz5sLeNAxRrUwZ81oWeDrtrGYmC8eitZEvMpvkR4GE",
  "key45": "4uc822nNdgh7F4dwnzhd5YRQjBQcsoJGu1v2TDkc9o8h6ihDno9DzMj58G7shJ1iMMUNC6iDVS5YppWRoEqYA4fD"
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
