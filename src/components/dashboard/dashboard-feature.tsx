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
    "5EJWv5w5Pyf3wbVpg9bfjkLVPoSpnU3GEpA4VGz34nERPZRfNmyZcSSdms1eYmgEzNLGE7KUC1B8q95cum7sohiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nzepy55L7GVVJHaET8XxaP54FtyDcKsDDi2nEQNnQamwuVANckErmL7DsRYrHoqGNhQ8ZVtEhG4iANUSc8bjfMY",
  "key1": "3MyNFVMHE83u8Yhz5StVTZrNt4tiN4cqVTLap3MVmkU3L9CRXuk247Acs9VFmztht2ENfas3EfF76SadB2au63z2",
  "key2": "3L3KSqWzJ1WE5bX5gXo67iHUbuHNFua2erz88qQNSDSLAy96XQ3WhwR2h2wgn1A84BNLwXLsKpk5EYAB9gjGGgwe",
  "key3": "yuQxQha2dUfBDbekSveMvLcE2NHjgG5GEi3iMdFFgtyhYteEB3RA8tJKFiByMa5AD1UUuK6hfuy3TDnbFq5wjuK",
  "key4": "5hVM67UpKH7BpLXKcPw6GR6NApDt1sKVu5iYXUqUgfRgYuBHFfnFasUJJ64CyEDtqMWCqv494hiPnHxoEY4Prjwp",
  "key5": "2pF6hvN76hrvKcZjqRaG1NbUwxTEMNW3pFRgKJ2G8JDYrTb3cTqFNjatyc4cgLxWarhNuH5mQuZTH7rqjerh3cZ9",
  "key6": "2Rks64GLmA6jNXqoTK77jknuyUDRYz75hsWaaWLvgGrXSCT7W2YwKUfa2YRJViLrmDYvVhjVByjc8EbRcfj1fZXL",
  "key7": "45zaaeNMuqg4WMmLwLLcH58HgX25kbsrGPKAiaspaE24X8oQdkF6HZLXih7j8iac3taZt4hfWmsfTCRrc2Fe27fX",
  "key8": "n41xcBqwvJeVQGuMzkvts6SuHb2DmUWqV6LLem3Wwwo28MEBStiYiSj3ZRwZCxw7qdsrkiGwZoB5bgmwgFYm1hv",
  "key9": "AGaFSVXo93cFga9EmFxaV15ngYGWuoYvDJqMW6MX26P2dm4o9pGgU1343hMdVfSxTNqv8Y2d1BtLjP6rsz9SHkH",
  "key10": "5Hd3jzMJEiVsxj8hL5UMgJ2jUecHYZrJkPD3c39m5yjCpbna45pZ7krKNXAxetVa5AAda6AAZ77GNew51wMQrBN3",
  "key11": "2wYc3qRQ7y7VGX9A7pvJttRj6NLqtVN9oFXfsPkHDfkHUrQUJAWFs8t6zAPhQBJd1qaA4zVfxNc5oV846DjQTJpJ",
  "key12": "2uFJpA6J5YpCNSQ6HkMbppz5ersGJns6bjrXgUysZWntw5DE8UsnGjnE7fkSpn9v4S1DYkCz8JH6Fkm23FcMpdR1",
  "key13": "4RPxqGxvJfB5gtcekfL84kyteUoS5LpRP96sAKWYybNvNi1j6K9YduZfCcHwodeNeFwm34iQDhcybwe7dLpVjwb3",
  "key14": "v1ZE92oeYFv2KCxfeaVn553CYxC8mS5iobeajestG8UMF1LdYdB7wLn8hNBgbatCJtS1coBFxMtCz2Mk7tX6ngQ",
  "key15": "JVGEQFv7PNN31gZ7QsE6nBZ46a1UxM3YHtdP1UUjR3uebmt7PczJwKSCJTb51VRm6nccCKasJ4gpGoupMigF8wY",
  "key16": "4YM2YJ6Jf5EDL84q9UNDAz8BZKcsHvRwKB6Wumk1tg6G2i3a8JdHVV7St3VFgkj16GDjG7RoxtdwrWhsMLMeV4tc",
  "key17": "uyVNr5LqcBCv5kDAfRVGVVU3GgjHkfqASNJ7jHeEStRAQbzeGr6TXuM62m8HagTa1ptahEuswmLU1nxe8HEDfAH",
  "key18": "Ec61VNjtZZmjzhC7UNsRyB7j2DYHhnpUrfRJHF7EBpxNY38KYG6sc1dcxGCXmPfmnrtFU6wXT7odmCAuoXzvFyk",
  "key19": "4r257w3BhweodsLQZcsMuR6FSKJxGqBhVfJcxscbHypZU453jTg2sMQAMGTZfHCdXgkdTFJmvUVrf9fcnceu5zye",
  "key20": "2m7qyf6U89jTrdomD8m5dCZDU2LGkmYzQxX5VUcLQYX6KxfmqnF9ErtoGSxEWveFPZqAHV1a1uJ9n3Lj1JgmyFjf",
  "key21": "2mmHHawxvzSCg91qFjJoPdEt3cmJgVY8NZmTixRdbReGHvvPU72VhsdwG1kGrh2ewjgSmx248YXPNzp65LjTr4HB",
  "key22": "5GzyECy2K7wFRZiwzmanwz3PP1aERsqwkADa8gtmrSPnVqskpuL3Yq5ZGrV7derEMRZx3SmUXoH9SsMxHzAZCx6P",
  "key23": "4yaudTaWrmcVBhw2JY2AQNEam2vJRPSKtjzbXyxT6R4RaAx2GhP3MvftqZC7UwPSnBLSF6PNJMFWBNKMLejDwuSs",
  "key24": "2wUgiQyYqPHGFhTXGEwpC5GLe1VSPnujA75Z2UQgm4a9pQRUyjZFUghtU3JUpN4EjGm9WnzBw8T78jsajRoA3MaW",
  "key25": "aKjSXuDnKXK7cJjcnR5GcUerKrUs2pZ9DZ7dAxnTYnqKpddknX7mo9gTxy9h8Qcm8ze3MQ46voyzR6LvhrhZWRV",
  "key26": "29F7UmvSkZKUAndYfCHmuaxz45bPrvedzbpjnyZdgrgXfg9mDxERumKcJSc8amTsBCRzokL4qEPyB16itg2Arm6X",
  "key27": "65HJ3DyXdwDyW6VajmnZAVuUgSHS5M5TrXy5E1hGevNS3a4h7kFW2QjRhbDSuikKTyGM4fCKz8jk3Gppc1x4RvWc",
  "key28": "28CTq3X77cHe52qsY3xnhtVfFJahHaeLosw2Mywf3Nh8o8uKB6kv8KZm5A8FyBRFVsyMUgvv5rsKTMHaMZjpzxxk",
  "key29": "3FpZ4LmZeUgPJtXnx2yUhKjkWEBi32LUBkTNfMv7xigprxJ9j7PVU5FcedG5Q18wHbJaNSkHbXu2oMzpDZwbVsrC",
  "key30": "2w9epxPPgBgxxGLXCtaCYkeyYijcE7DjBy1rsAZsRh8jPyrzPGfxVBXXbbMcQfP7aefWKwDy3arfspyzwXCRBf6w",
  "key31": "54Jjf7VAPwQJj1o7jufbyGWprEbP4BwHAQc28d7swSvYCq8NgCm5FewSvBzXZMLok6mqYsGBq5XPmyWWKdbZCCRQ",
  "key32": "2jna1hLJ4z17VjgYrngFw2jr1hfaZVeFRocTBj7Y4JPrMC4tsiMzbS4M2w3cLkezmn9wE4418qQSLXrh6Q3zYFLh",
  "key33": "XgrT1J1aN6Sab2DVMgLxUNG3DYEGeCTSZDvW6qSYv5J2opWN92cbBFaY14mqJG52qFEpaeqfZF6EABUzq9DUJje",
  "key34": "3L5ZGC4cvUTG1Er42zmUBEZcJYQoo1by56ogZ1yKRGrQudsDXSp8wmEMcFjuaRqrkEBu9y6PGVoYS6zU6gdk3gPY",
  "key35": "3Zg34ZBr7bLHG1L7NfBTaUnHXVTSkaCokv2praDVhm9gAxDKUaMD8kfaF7hDw58wVouc2JcZZdyLd682dGhwbxzd",
  "key36": "5FSXvhWjx5WCkU2czcWoenmnkp7tHep6D33Bs6ct85gEJouvCqQWbfxL7fFVAFcEN1hYLpzg2JtnDf8inhJXgVtt",
  "key37": "21WJKWErf2J46YCUarCHtnLpD7PGTvkvAXSPrCRvaZfGQ792i4zpmVDKpTuJYVHjPcKXN47bKikHiBihW3MArmG9",
  "key38": "SMMCvtkVQd8gUXdgzWWUk4LAciMXbmQxQpQ5oQ6ztj7sDSUDVpfYWL46XngCoWAjWsbBc46RmvPMxNzuQyTFp4y",
  "key39": "2wzggHCV7EftK6yNMEANuhW5zsWpSqaEFpf1GcKyxLDCnTpS6h1uw3kzQdFK4qyKczziGfxFJkgg2Ymkont2mxeh",
  "key40": "PcNbj66HYZdv1MTVDQxvpJ2UD527HmkVpzsCqy9qRynADSYXxBgpsGb58YsGgUjH1LpUU8TNpv61CJDeFmWqeKz",
  "key41": "2433zJYR9w197t7ADmXwGkkYDVtCmT8AinJpC5LyFZon5CM3YnYo6Kjq87rDhfWRcgD9L8jdzPgZMdHchfAzv75a",
  "key42": "3dK4B6Us2Kw4ByqaLdFVdKTfqYMG2rGLMRTmKkMgXa3P2E6AdhGoiuzebeu9NS86XEsnrFXMr4SwPGo6CBnd7EFv"
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
