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
    "63YBLEmXLZYkDyf3SWNiizdLsX2WxJtbikfcz8mMQViqtgZer1EJbuUDLH4gmX9uW8ofQVwLeCxERqiotXHqys7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrgRgzdDCH8NuDAtvvtHAvXVj4CPk7NAB7Cj1DE3JuCGsFDGU93F5rUBEK85hrBk7xVyURbLLF1LDVLnngnmDUR",
  "key1": "4zY6FvDHUxDUmAwFH2eCBVkAorBtTjgwqpPm1V5DryiqT9TZ3SicHvetBnMXydUVpJcPsPriHi4e1BNZ2XrKyggK",
  "key2": "4dp7ufw6zDPTLh5ipwGr8M4yRsXDzzbd1fZan6TcpSVh4zejcmTV6mTLNGNnVCQUEs6XWiPJxYAFoenDBHvCXAdz",
  "key3": "4A3XrRDLBsNjWbvZhbwV59jG8PEcNZpqTpbZa7hvCxXRZzt7ai8h2mMDcGrRi3DFfAqQKM4t3ETnbkE6R1F6YF2J",
  "key4": "3egnPe5MTtQHyzCzj7P5mzdwMAhiZK5GDBLfQXd4Udw3nXmvM6zLMCuxjpkhawqM86Cav48Mky83gsNxWrfdY9c9",
  "key5": "5pzXUfNNYcNzifWwoW5WhKhtCZL8vtPA3tDyfh2YbeFiVT9Gv8VxzGk2cGNRUz2Sf5166DDhw2gzmK83Cv8RggZc",
  "key6": "53t1fgd6nJxcvztf9KiBDK2p3cq8K16uVdnSmb7E8QqkbMqR1To4qnc4mZ4XSLRfejvmEeLJ6u1cAZpQqZrz1aSL",
  "key7": "4P1okTJ6CPZzu5CGb5PufsgP3atH2nETeDhDHnWFH6Mz7zeS5Awywg8ucig7HodHCkgc3JVg2HRw8ekjteEAbvZV",
  "key8": "3oCvjPNj9dVjT7uER2kzHqtJokixLCFwVqJh7JaeDJ1ggz1tr2YfT17g9QXxj9H87xaJKaTXMSqKeu2c2V4EHJVF",
  "key9": "55SDsgqnnFMxXZHnSE2dwRvXSPPzsBe5cwnjwLuUnZnwqAoDizfJKrfwnRAE2o4PzEkZLHxoj7MgW6AACrgeQ1ZL",
  "key10": "p7fM7prLw94HbR4eiP1WFRu2V1jGbME3us5QvzRrod59msAVRYnWWSqPEefecSkzPjm2Q9s3Q1cYNx6ReFvidDo",
  "key11": "5UuN9PmGEs9wKoY4rEPqEFJgHqMFSrYEkqtYiSQM97iNBBXhtspVoxJNAWkvGKqpgZApWtQqPvcwM47c6DU3ZAnu",
  "key12": "4cegkJP6uy7qWRpBzbjud4xcZnqCW3df5f3UuwZGwy6Xky63ftWSQ7YwoRnBDSefxhAsy5WwAYUNJSu8oZqp28Ti",
  "key13": "5tE8Jf1qxLJAKY1Ucu8WFqKwD7qixPyCqK3bP6jUSxVps9gSdGcGi9Aur7Z2HX2RCf2UfvnmaUN5Mxf3S3LBgyhB",
  "key14": "32E3xJhEud44a9a4Av2apzNN9ypmrue9o84jLTG7qyCubcC8ZcPwXi6aYGouPMQRup5TAESn5LmNjbJbGu1hYsJC",
  "key15": "2uoiV9WTiGgh2QqvDjxNHgByNYYNyBxkQKBZYWHf4q98X6B9KFGRboWtdMbPakc3o3GqpAsq4UEnbB6fZLnMok1P",
  "key16": "Atx7nsApeiKrWiap1o8uiu9yZT7BxjRCkMkYShLZVBoVz1mg6Dk2BeHkJZJ65bBVbR4P5rsLidZUd7oYpvE1ho8",
  "key17": "4bkU6wYFPk5Tj74z7yoLARuqZqGUA8TnF5nQTxUcTysGVwdNYueQcgfcrmbD2uWDky2bpc56AULuuNuHTWYb6rL1",
  "key18": "cZobKME9XiUWK2BAB8roS5KMZj9GmnWtxfwaF584H6HwoPECDb7oE3ogftD3eh2rnwyGKxJL75Xzow6X1pVVmqu",
  "key19": "2n3Wog7Yp6399eV1qxw9nk3YAsKj6U56JjYD19wXgvAgWXkBRPKez9zqMaGVhwcvDYYKsP9Hpxa1CTAxZCeovUNP",
  "key20": "3in2aEhHBpejBw4fRgnN2SefNF4BAkGVuxoJuMTDMhxKj8wYbscve3Erhb8tpKi2KVjfe6EGrvBDJgYvaqz9XEj1",
  "key21": "2W3o8gkbto5f6tLK59cSvFCydbFeixRyYtWxZzZ1sAKzd2eB8e9LrdFtvLAQF7NhgyvYyb9Goy5Y23F4gnnUYWiM",
  "key22": "NZzhiWyBDKnWGMdmbBjbEVzqtdjWAQyfi35PMmuin1pWaHqJZNubQZ7Jj9TvmTcqxZfGUHtGLQYiUKjTFfJjVyR",
  "key23": "5ERu52d1RdwrEh6dW9mphStWKDYwoTT6KCcKaXKepzn7wr6j4L5oKwMfd8UWQCcGRcSGWUufm18LvZmaNMZeEQGv",
  "key24": "49boqEqcuSXwJdZ6TrQ3VaVJJA14z32jpex3Uu5qDJLMymx8aBbhjMTbV2Ha8Lx6BDvS1PUT834LjBxeSGn4D5wt",
  "key25": "3ohFELXjvh1GSb2WKMyna5aYpixxH8YZgRYYGgymT61HuM7jjFMkJaeTPrYqGaUDYHwdXCBkDjUvvQehFj7zcUss",
  "key26": "22njpesjSc5zT5FncepcHMkK5EUDtrFFB2KPePWAY2Ht7g1mcCgDrZq3gB5WvY7ZWmWaZQcXrs4xsa3FREaioh1F",
  "key27": "4hHSB2U5rqGJNTaxY2kyLm1ZZ3sCHjGuH5xfV7wnFtkaaPVNjdVobBJRw7PDKVmZC4ePiDYCX4Ufs3BHkScZh1xh",
  "key28": "2k3xu4CfPZRYv7yTmPLfNuUmqd6k7m9XuskoN1tiuvNzMC2g9HqtBA6vNFgN6XYejBhBd15nHuY9k7T3xKkugAJ8",
  "key29": "53ttd8btEnzq4Qs9ZEjxz5V28q6KdWcSaYhvA6u5Nuwkv1adeKKymjtwP3pqkJ3AHdcTsg7Evdh5iyqVmdu52qBS",
  "key30": "3bsukMKrbHtqAGwA3TK7E2CNvaCHANymjQaGM9T3suQJh2NmYT2Lc2CD7BE8dNRDUvN2p68rTmX7JujEJm3rX3DV",
  "key31": "E9RwFoR2fbxpWRhPQ67DbZcq4n9q61rBCz9VXikzYT6nX88pQ752ByXsTZyPPDZqA38c983jnRQuMTkdzgDr41S",
  "key32": "2dxSoNnbFWVXvVquRthFmRxbbWE8HZVE78KZEnTsPxQo1RXQ5cqQboRZtbZzmCBhp5uDLM8RtARjHFi6unyvSP6p",
  "key33": "47DzEkJ5qL8Sqc6Pj9gSs7CYe4FJHtP9ZAcQGGnPUf1FVgpGmTibt8RTDRm6rKb5gS7TfBsEwREqubxxexPsUUym",
  "key34": "2EXZnbqtNuBS6zy1PxPaao8nNaVspB9gqaTFTxQLWeSTmp84MEqCZdCHRtd3iAEUqpNGdod78WernX719B9wYLTY",
  "key35": "5R3XzKEceTpiQTxJtHaQi9trjmXkKizqKvM9jRq6evuh4bkg2b6evYyyZVuvQKuAXGDwXpYuS24BE4HZEgkhS6fW",
  "key36": "4Tcyg6RxiZYZey7zZeJ6STpqtBsX1XPih11M7VSA4K2o32bNHhss9SePJTbdMNv4SDC21pDaZzrbjckGXsvDxUU5",
  "key37": "2AXBrpKPDKZZJaJcJavV4GLJLfrahC55YGC43uvPr4A1MzzYTVekL2gKFy8RwBiHyRnxTNicc4NeN9NAwv28ScJL",
  "key38": "2uNzsVjKDjiUFNDnU5DyqbLRhZmWC9Xw89GbUW9ZDcVUHhHX5LSVQvxBncs1a1nirt1eLkvFhEHkG57Z9pwC1sGX",
  "key39": "SgBUJdfnWEQrfyDiQNoLWAG6u7Sdd9SRRaeCwyJBv5cHzKwnkf5sJhzFjjfqvibCHJ2jAXnK2ajxc5PQpJNoinK",
  "key40": "27bNdZvTy6HTFrzSebomojFLvLJ16zsvCRQQEP7nNEWhVWJemvMf7x5MdCewSn6bmXZA3CrRJ4YaotCmSYb4PuEf"
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
