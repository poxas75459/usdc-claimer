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
    "3XyoPwsVmFEn91qfdQYfyetUVgvpPQ5VFyqn2Ko9p9Bx7xGtvCBmb95P6v7QjGc3TPZwivHkou1xbWAsvrAeqT1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VzcTaCzg7gHnQLgFsZb7pbzcyHLMQrZBS4uZkJkUxGbLeJjbTsyq6Dha3FNBDzW5KEAHk78594QqbEC73H6jnZT",
  "key1": "3GV2vjbhYw8BKgB6V7PoDTHaiNTTiwo5Q9tmiWz7diuTa4gskTYSEBbfdkfWChmzjU6hEANdKmSZLkfJ331xfu3E",
  "key2": "75DvRvfgnsineUc9qZdg2G6Pn2eZpk76x9vzJUB8veZwuE5uD7YmX3bpJG4FaQ2bMux2NhSt4LbtrLxrXS6Z6fF",
  "key3": "2GSSGrZoHpaB3GHHXMACEiMAK7fTGG75YVe4XeSSbGPd67cAySd17oypZepEDiLecHf4mYwXbEGVbcr1VMyF23sL",
  "key4": "5HKhe9w7vocsqMVe8wDtb5zHaBP8y1LATuaRfGSKfzDPg45z9Wu1PKgop3qYDBvd5n8vRTK21CbthYnoWWwyP6Yi",
  "key5": "3sLDQrVj6eSxFEe8XxefhsBxnHrcazFqAcsETCBp8j9kjiNkL8g5mgvfZgkDjtHEPxQfB9pLUYbYPebH6bHnxHwN",
  "key6": "5DidcdUq7syV3Qoi2y6RY4rWMzfHMJMfpWjPzo9nhLGpqn1yusLUGeZW47nS6wAD8sMwnkzwNz697QdAXZffniKZ",
  "key7": "5pvLxWNu9xX1hLfx4DGZ2Bqs9uxXTeU1F5wSUgc8BoMhwNeYEfmbWkDXCnvW37ngb6w6RiKLo1rfmELxR4i4tj8q",
  "key8": "5bBqpWSnpBQ1Fd2g5h2hc4joXQAcVAXnrZgt9GGVLUUwmDEUTsLUVCddJZfeKSztig13HbHfGkfek657gEgqJBrz",
  "key9": "7mNKuzU42YkeUjp7QFmDKznM7G9GDsJ6ufSWoHBLwZaHoMBazWkHsfbH7QcMVYG4N8UQHZRZKj1G5yADj33vd1W",
  "key10": "5d2bb925GtVWxEBLFry8SZmstyqC3vTrTcfm83QRvVE2DjQMUqNTVC8cwAQbsKCrxKcRXwEqgE3zxxtb3M4XELAV",
  "key11": "5DvBs5gP8CSHzMkFDghu5tCH8g4WcXpd1SNJnKTTKBeNFfg5iGxgYnaYPVY1YZ2fvNsmyZuwJBwBQoP6nE522TWr",
  "key12": "4hHx4Rv3NAYASv8k4PvFqDTKiiMFjDoFcnXSL27TunX8TQLaVR8QzUkxiCXSnDRxtZ9FUvPEhMAvjBSq7VB99kFW",
  "key13": "484wzxEN9X6gWNmWf4UYWc13pmekc8fMUEp1A37WDwqpAQyxwradubAC1MDxXFLv1xJDyPo3F7fqG4EsyEeYRWUU",
  "key14": "3JFsnMEx3NejN81mhPqwCPyHMRfDn6dAT5hRsUH4aHs7XKZBtRMuhqKTY6psGUKaKLzNxxY2aR1dJhwZnJ7vzEJh",
  "key15": "5dGnF3xAHPanaahDNckfN1snPUdzoGp9zkTL48ZG1j4b4hDqMXuGC5TUGrb8GWuLUwZQg3ZTNs293FmfaSbu3PP1",
  "key16": "4i3bDWw6kfhGcaG8vwbddC8JWKXPEhv1Cq6S7CQrBdtXFUJ9QhMJPQEreSVrwD9CNUrKPCm1VUmHirD7stRRFiJC",
  "key17": "4AAfnGqkmkYbbUr5HFWetC6j91mBh4zmgFC7zrvoTc2a25nfCZNJ9npg6js2kYBagvYBQL5DekVMKLYrn4iWffJP",
  "key18": "3cJDXr5t5x1GHef5khbNrVZGs8mm8m2ZuuprwJuEgmge1E82a47JAFhZi2n4X26QpU4BMa3uWWPs5gHED2AS4kzq",
  "key19": "cgL2n3uQhnXEEapvd9iHMX6hFBCciQTMEsPTAWuyyJBpXFNGXFsVaSuhtDdXHBHN9Lnkj7RepHdsMGZ2ZCLSVKP",
  "key20": "9L8KSHRagdGKFEWYCY4n6y2xqC4LkeLuAH1f7csmgPcngJ5SMiQ9H6MmSFQ6BXaj39t44p5j5Rp1WPVt24UR8U5",
  "key21": "5ifJWRcKALTMWmPhjLMRgQv3nWhyBvbZKzQiTHcEby6oFQKFrtbpQvfi9jyU5icCmy8WMhjMNQocnyjzpHPcaN6D",
  "key22": "2EfFrPTSxKJUptQdqjXpKd672c7857jRCLn7SqHVPPye54jHdwMGRHTQ3RUQGbdWr1Z7Bv1Z3ZxbBT9eW6Tu9oXE",
  "key23": "2nEMf8kGwSfUSmtodqobzUUgpo328bfJicoU4fxo89PbQ8s9c2RpuaACiNGEDpmDL5Yebop4vHiTGqv7V3tizXPF",
  "key24": "3jxq3F2h6XW5VLQBJS6S24gBb7TECkwdEZnhBL6tKxYT4fn6V9VwDXBMhmd1kSj4jV1njLgpWpQCcaSE4ozxSKgk",
  "key25": "5BqW7P5ca8zmehLxvPPrskk9KNurBv4QpRtaza7rb3dQ5Rjy245Qr6znFghBsnWkDo6D6Rwr7vKveJhPNxhxzf5w",
  "key26": "vs4cj3xccN8zbc4gf5weGYaDENBKfzhf9vK6FeWTvMXUho9H5WomWrkMMJcF6DNcP4GLFzG7DkQXhJ3q7ScpK4c",
  "key27": "4VQyFDyqRKuGzjmYhEeAtr2c8Qc2wRThv8zkJxmBMMQeMYfpSHj93Hz4dJ8qhzmkV74J1U5Y6i4NaNarQAf6bR4e",
  "key28": "2jqxz35rmwq6ZVPtqzgUPsL7n9Y6QjNkuaz9DpyQMq6t29R53jfns2iJLnrhygyBoivAiDYEimBuPtTqwLsxvfxr",
  "key29": "3kPjnSY6AfdP18yMNSamSvGVSzfUF8Dp57Cvqtvb6eTJbF1TR31FbytBcYXGiZBrkUPgrYm6LsWLusCWeNoxvq4E",
  "key30": "3b5RZMtqzSeybL3jo7kNmzrnHs4dGPuEUKZszopw7SoWJ8p1HCvZ6ynLpehxoXEp8GLFXs7mu5iM4YJxh1xw13Fd",
  "key31": "3w9zpgywZpzjB82FTvLJ4hZuVurA5hu1axe2jM2cK7kvLoHEJHVYpQRKTfBu7wzjHPCujqvBi6Tc7nin1ow486Rs",
  "key32": "2ogyCctki1q5G6cgR1xpZ4h35WyeHqVn9m19wDskR8n4mgM2q2UaFsEDw1hb75mo8DoRpDQmfXBRHMvF8aNz28AB",
  "key33": "37tJigYnbc5zRvc8nAt86frxFadSg1JNxUX4sEs7kmudVQDxWJkiwKfmj6TZRNcr4begtFALi2wn2X9u1qEMY9jn",
  "key34": "oHSD5AsHMab7wCPCbcjj38mNTSbd38wBcdCfEvCeCHhRNCyjPJnTd7MURdn3dPW2GTsHXAhrKmbaSax9vfLsmBB",
  "key35": "2HoHQCrRsvBiFeP4RdfuDcAEFZcd2LeoVyeytfx6v6gBdqWj7jiMQkXwTZZNCiDaiN7nXuKbUzu1EJkAFMFUxqCw",
  "key36": "2dZAGC9UaM9Pqo6VpuJnVPnTT8RyeKvLukqSzHfUhGoJwPvz1x88jeoP3ZTNqA74hNhmJ9Na5v6CVs57yxhM3Vkh",
  "key37": "EGNgzqKgp2pgXxByQzHwcufJNWda5EKyNguBqY5kG6YnhDWaApvxXMGcXFWziuqEBrTJ2da1bk2mAWVsccoEWp1",
  "key38": "2hHsJWw27KCDtMeMMaR1FPftEXVgbEkWWtkPeN2q6aGE19JLCwemxT1joEFcJuhGXj4FuMz3aVqAZAWegNniLzkX",
  "key39": "bNkrCtJX9DArnLgEXgWAtahWZJiGy4QBAnZbxvhDN5gJgxNMLBuEHC3EbCXB1PWQvYdvFPP2w9SWsn7ztHfZdvi",
  "key40": "4BScJ5L1m8w12RFH2g6fJGjMqv4nB7S9HXqe5ew6MvyaTEN6DhwEWzjnyPuuT4so9gtVibMEf3ZVq6avf9iZ17Us",
  "key41": "1dGFMhC7QFEKp6rofTBsHAENZ6Ykt9DCgqXShb1ykHHTd9xDsfbNFnKvbe1sNbZCNnTU8MXYsrssmmWDGt8wpNd",
  "key42": "4udRrqBYYgB9uxE3qyb8peV1FDya6uiC97QyxTc2kLNNB1RYmACFnnnd3DyLJrSYbEorRUxPy2nP4GCBfLSu7B4j",
  "key43": "5Z8Ddvn5BQuHvNu1uP4wdaEPC8wE8QzXhrzcP3V6nsHSBpP9AJwJyAb56ELMhWQj7du3Uf5zej7rcrEbZVt8q48s",
  "key44": "4FJXUUFKUgNmKqBCGS7jh7qjWNidHtPj1xqrNMASHa8m9rEqUvBNoBL9bK3S9JFfoPtDB4Rcj79QiqYcszoNSeHU",
  "key45": "2gik1aG4a7fZBTbWmoAxnCawVWJB2f5T2mmasABKYwMZ24PZuZBsgoNcfpGajD73zGhBj1ci5sKLSfy1fFv4vgFv",
  "key46": "VCMG4Mzs4CkDE26GfSVVoFVwPtuEbNnTgbD7Kfz1druf3XAPpVzoZXzByL51HemorVxqVB3vL9ALsAH65dvPCAT",
  "key47": "4nmEdD3EcnVdCJDYYZCeywmm72LHk9p5ADKwsBy8p5DZ1ZGbEqLDF2BJaEoopnjHL2FGYxzTwN4HVx6P7YD11vms",
  "key48": "5HMjMUaY7g4ePC1WZsnsneBPZQUh7Pixd3LjTZGmc6UnjnMeSwnBUrwfxjrWMoQPiqgn4UA9KxV2Y5XUt2DUf4FY"
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
