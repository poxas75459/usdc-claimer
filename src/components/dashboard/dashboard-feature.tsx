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
    "5q9UTkK4wsCqzJm7v1kAgMhUb7Dx2NRYcJBL3Ty5LC3f36b5FaCcNichoVrsqC5CYg62wD9pLLwt9CYiFJAhMHjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNdhsn3He27XH635wKDXksnPW7d2jQoXpK1eqf9TpAbzV3o5GwxLAmLB7AYBzm1eX2Ah8BuMmpokfsGfAWNkhGo",
  "key1": "38t1bGiD1VVF1mocwpH7VYkYgFMQrsmnBgmaLf42b6oXiACxHD3Dx6D5d58ME3qJ42LMK8gKGFXhJ5aYB5gVy1gL",
  "key2": "3vmtrg6wjoU8W8i37B66jcsaUX9qVRW3Jin2BomnaDaKVjqpcTrqqgaYnRAkZk36GnNSjZUFJg7g2KhBBkZmBA6a",
  "key3": "2Fs6Lq2JvowJuCDoHisqCXE8Xh7SCxuXj5hwrH6Fomx8oajNjnuMCj8eGYZxYV2daysZVTjNn69dEEPUSqE83VuS",
  "key4": "5DXCdhqrxgFYsdgUmGicK9Qek1CrhSxYTei4s2E233ToeFAgh1EE1ytp5QCPLLD8jwKTj9bpxp4vfKGDcPckemi5",
  "key5": "2wXJG4C66npD8w7Eo9N1bHv2X6MK5eTBANZsgDkiJGSbLa64a5ULXt9UEpVXChnD8pD2bj6MfvmQiD5gMsQ2tdK4",
  "key6": "thc3qUcfszKHpJWgvPqNi2rNgW3Gz2q9m2pnSxL7njjssfUfQ4MZxSwF5T1H64uc6Z19g7w59qqFb4cwThnwYD5",
  "key7": "7PYmwo2LavTRqiMZecvBe2s6K7ecgAMXXB4WUqZhfAz3hJT1qEoaMkfvf93BMzKWVMpHo6g6vmXBwJDWXG5BVLi",
  "key8": "5tqvVYUbAvCxses4xtKn4oH2KJvioTksLB8gzVHjiJxQQ9nGxHMdNm6hQHo3k8MSXJwc4Ad6pzLrVBdMhoueHhxE",
  "key9": "4EF9Jz1GkJNvnFJCvpeRN8DZNfcXgfkEMY6gm3txuu9Lu1nWVTcQPtJc5rPG1UgSw3GmAUrkn5y7NLsU18Wp9kfR",
  "key10": "3Vg3rCbGjwje5vWVdRfftKX4HwZSavjtcu2m8oa2tNGu2CmGGdFDvV8N33sXqPbTfX7BDhxHqEMEPyyejNJrUzjT",
  "key11": "4CfVhJHdaYVTndLHyCs8KNPoeBXh6PRjHHaikN2TZuJtz3ETfKDiLvRk9ML1L8EcwjcyjJ2XZKcKTvCTkJK94s1N",
  "key12": "GVoGqtbCPsDLuNkDiLKdgL3UGbDdJvLcsj5iX1RHzuyuGQHZZyyeFpWNzi5WrkW4wVxhDjSqxkWh9ZVXrVhmMwU",
  "key13": "3SY7gGaSZeupmqZ56TvqXCRsCsCq1YJezi3mWHo8qoGthZ3LG7U9Jvp8QGrxYFPiqSaicCbPBky6BFEfqxWYAJfK",
  "key14": "vvM9TTBCQJjz5EM1MPKrN9F68H3GG2M3urVjSNoRqadprNoTbbioaEmtwxRQZRU6zmS55uG9zikXCsigeSbLJMx",
  "key15": "Jiz6nY8ggFJF4vxDgU2P9XxdX777i6dhKJg1ZBqQ4Cqju1g69cXRDnKK25SJXx6aGizKHN4ximw5EpreaPu8Reb",
  "key16": "49VnjRW1CpKZURu49ygzMxj2xVR2Xnd1f1sXZtKmH3756Ua1cwDLCwJQdN1B993sirufcgBiV5KJBXSBdBjRL8jZ",
  "key17": "3tsPCPWHubfRGC6bW3SEdeqR8PybZgyKfrXa78v5fepvV3N8cwY54Rd2S5SiRbicrfUUNjM7KYv8a92q8qNj9Cvd",
  "key18": "3hJMnEevgfNSrQ3eRvCnby1xkMGJoy9ZtSmQbGYbsxWc7JigvwLGVimGB4fvp9Q7x6EkpbjXXyNQe5sRieQf7ojC",
  "key19": "2pzUnLf2aoqiMs2M8dfzHMFpotYhYAUrU2gZHtctuzSwXuntSntkv62ZkEu7tH2KJxTQAYqdm5GvCJWosjdc8cJW",
  "key20": "2RQCnhxbeRKuKn5hE1XZo5ECUjMLFPkbKR9rM7PfyCMLHxBQQ565qgMEAfTUQQYFEuMj8Lg8tW4v3WDZnyFtehsF",
  "key21": "4ztThowtwRNCU5xFQcFYvic4fj9Aw4CCC1YYEV5kv1swdTgdrpPraFmM3xwiUockkXjopSiYHbrKK8QpV3nxDFYe",
  "key22": "3Jodjs8aLF5JFnGYyo8b1FFWE6uifMdHVSuX14UCSq37K39VQd3QKWkrpbFxo4kmRHUnaeZkE5sheRaYxJq4XWnA",
  "key23": "2apD9HYUqKMKkgz9G3vYcPzpJ8qJb8ZYJQfHzb1PzQL1W6uod7Y5jBeCS73L3MBnESES8c47dEawjFzpobSD1kQv",
  "key24": "9e1SQf7i5T5QbnVqXLBsXjfEDtJyVG2Fa7Cb7iEkgB5iJXZUnPeJHzwhT5XusAfAREAwGi8GfVeiyRZGhBxS3Bs",
  "key25": "5BF8xwCDGmMQwMZ8JhnYDQ5b59wgHQ16rSjbsNkUS35eUeuV8bJ8Wd5NUyWJnn2vHR7QUnvryNEmTeTFnJwnEnnn",
  "key26": "3b8iaZ4j3XEXPHibMsefg1BWSGU6jgSoj2vCyXVTnhLRWWQ9CASXhrSVyJKZzTZ4pMbhTpCZDx9ZBJrRdRGggi5j",
  "key27": "4TTfMd72B3moJC3JvaNXsqpmnXfm3u3NX6n98pNkM8oRByFLAW3AdLmfoR6sEuoafpGh1CEXAeFaZaivS4mj9gzs",
  "key28": "242EtjVj2WVkS56xAXP7RBbG5ddqt5vqLVoKHXa6sYkcASWn4kuQZ2hg3Kzs6GNnjojy8n9LNJBYkRfkpXvZuw83",
  "key29": "5EWtTdQrHrfRSLnnMYsFpahWy7MoUFJpr2RKHSGxpTJKCJ6b1mKqqCGfgtNnMKa5rnsyWoy6nfKnwnsZsxayPzsY",
  "key30": "3EeYnUJJ8bJgkHuK9zpyyfwqWKzf5sBK2iN5fapuFx2zuEN4HsGa8QkPeodib4LseNgPvoqQXnkY8vhiPXqzzFj4",
  "key31": "ELsPYBYJnXsXxis4uBT9tozq8EJW1AqbfhR6L81wSpUX8SCPFBvtC9s3TUAJH8XBbhaM2nij5civnLy4bttG3j1",
  "key32": "4F3acUtt8yTGzPjtphN8fKqG2iAz3JQG8j2hpz1v6ArBoJEYFaC1exGqcfgaT5NefSiacQqQ1Xrqam4f2Mw2xuNB",
  "key33": "5HoVMr2qhD4WNPU7ZquKheBDDmhP1NXbmvhLZv2uFAgZWd2u46GTbdcHiqgz5NgAZSwS4xvZSooGef6XoPYvwSg2",
  "key34": "4RQs73TJ4VdCnsHFDchyynS4Pk2VyE5ZWPSNryBLJT3yVbLFx6rG5HbaSkS3LFAEECE2b9AWjNYjLixEzxVxVQpN",
  "key35": "25Mk1R4bVMEC42H4UZhca32rMwH454Bwa2EtqX6Eus2AnePMuJc1JQG8ekbrN8fagomL6Foi1bgQnvTnD5vWGjmb",
  "key36": "2AAU2ENrE7F6rpMpebVu3qRL6VJsqcNJq9siX4usBd3sNp6vHCunzKPLetU4FaY5hpKKZtYKpXcBKa93K7HoxQLR",
  "key37": "5desFevidsaWKXP66ghvosGAKRm5TPFVL4MVqDXCpjDhTRMvRmetNUbVxqj5uNcPtNTEbSSW4pg9UsSWM5CxBGig",
  "key38": "3Z4cwTFNJ8Gup9oXcn5jidLpBvrrxAqd9iejRbVes8sCmwdnZi6Gwmvzj3k2KX3o8AdBGLVfB8MFgfNV48G3N9jU",
  "key39": "2VqrievEzn5yasBkjD3BLzc6CsQveDJijibyCUCxHR9Nds9QfbCmTG9eqTjVSzZrGRpTByemdckyV9XiETWfdrcL",
  "key40": "5xFGNQL94GX3r8tzPDj5VJwyzgxx5jFeGtYbfoYfG8shbgPiLAypKEuBBJb443niDp4oE7Sqmy7KsNk2JxxHsVKP",
  "key41": "cXHkUi7EXQU2FLW4Mb2A2CB791cQDg8GTT5F6o6Rpp3CWkKiyfkmptqmRKqWEHX17rNojJRzxy1zuiPyXYYD8wn",
  "key42": "5vuegrvfDnqEs9Q7tT3MhTEJBwtBrTRdphcoCcrPvhtZweyuSNX7kt36hyXJtD3yQcR9KFKBE1tmpnazcymcyigQ",
  "key43": "5KuDje2LNbcSHw8KYaAnZCwTBK1WGtLfK3G9Cdy4k5a4X9qtT2c9nnLn8he96xnPVJUo6BXxuaL5uTmMxuHFZgcu",
  "key44": "gLaY87xqzyjp6Ft8rCpFfxPQyg5B9iKimkgYufiLpiYixEaT6SJMJHQEVcHdBJvYYzhdCTC37mLTwsLN7Ad8AfM"
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
