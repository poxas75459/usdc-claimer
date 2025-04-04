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
    "2MApn2nKRZF2bAFYH4MPWJQperAzhkypuTaA6g9PcsdoDEKF3tw1c8xKESabeoXfF467uZ9yhBBj6JkFYQdoysjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6KbuJBgQHoEcSgF5yEWbshL9VhDfHAYUMphGFN4riwAojB6AxZ22s7CS1oZ9VhYELMKz1bGtp9VHLspJBuMzDE",
  "key1": "5rLjXwaEAAMGzcfoNQVg9xU1a6FBpoVriF4RfMhR1mD27gshKiAhcgKybkxtdfyB55L34GU1fiSDFKN91T2CENE9",
  "key2": "4jL64kDGJ5tc7Vncm9x5UEsHnpeZkCyLMxRjgfWQCn2A3X7XZRRTvrtgH282Y6xzGef1Q287iyS5kA25W4b6pw22",
  "key3": "4CrTsJRxmVZ8cC1dZBYvDw9LB1L7L9YAvB4cyaWhcKTCCRStDqRHgsEDYLZTPi8BQXmwG5RWAD2sUxM28viJXiqE",
  "key4": "F5Fkf2tHxdDiJwRxxukHq94ZZkwWy3WvBiKrzgkWMjoH6mvuNfUvGoLkUng8o2dHqESS4QHvMo6YJDZd8WnrTR7",
  "key5": "2VbyY4ijDZEajr8PSM1NPEmBD3tq6cPsQDqrviLfjzodtp2MfH23vrRwfbNxZWL8anVwHSMVH5rKTcYgRSQfE7ss",
  "key6": "jwYZrFRfYfpReApo3V5W1hB4SiqnBfKqRZBwPwUyPbVKjyEsNdXQu3KKFV2cEz5TaCAouwx8iDC9NreDjuvXum1",
  "key7": "2RGmgD8jbH6wgQdkA69uLJ1BxTbiV7TLgTwaPc2Vs9sw1G2v9j6nEqrjAHVrFYu5A1rZzrDVADtZ143eKojo7vsK",
  "key8": "74A2BxJgJpKovGc7yG1poaxj8a6dMQhtgpZivYmqJCxtWs2inc7De3qZe3vfs5Eyzxrxe6P1HHXvhben9yNcHUz",
  "key9": "2b8Ao5UMjWmEUfaT7y4N8iiCmFkL3eApAhuUjgT5hudUqNuKUnkXPHjpPQajTHgA8qTfxCusLNmeuMi44zpZ9oxy",
  "key10": "464wn3QSWcvi9u57SMyFptwJw2M9JyBoyiq3XEGYqtWyo4yLjogbHNQwNpfNyBjiRqu16WrRHFNU42qxPMbA6TzF",
  "key11": "58XKrXaGXTFb4bjx8dPieQrrNhf9dL1Ga9ec6a9MsHBrm24T1UGkAHz71x1SjCXLoUSw8g1PhR7zheYcHScGQGeg",
  "key12": "Ws7CZm8Bb1Ejm2Dn7Y1haDhuAwGdwkFvhbapRmf7YodQ2UTEqrYiQsGorDMvSthgcGmwb2jh8quRucy2aWnrcUt",
  "key13": "2igqs5E85QdoGfcjy3qMs2rNrstyo6SXp9GmrHoXkYc9gMinc7e5v6TXcms3SyiqZ7n1nPSgGyZ9H1uyEUMQxsZj",
  "key14": "SiUHGMxSQ8Nwfd2w9fnak8eqQ7oD75mtLTW2eMLzTQJsBspiSf9Qq5xymnjs9cgKCAAsYCH9AYvKM5SP2iDXAui",
  "key15": "4hJp6f13rhnAYV7qwEEtgNUSghwxpJuf41ScPoj73gYKwhVS4ex8SbEKJHJ1r9jtMFXhexk5GgvJW2BYp947ez4J",
  "key16": "3kt6ieaMLhqC7RrJewNRqKBbmGfTopHF85SPBue3tHdkvJWaECSq3xjaze4WJtTb72sREAEm4vvvTu8hNptDQFUF",
  "key17": "62GidERAPHYDaaSpVKNwo1bJPGydg91ga3NvbuScwx4DE5i17VfUyiKBzwULJg177Y5wzPzXLmVcm74YzzgZLSpw",
  "key18": "3nzp8xErYhzSKVVYuDCAe9LR2jkLeSgbfZxPixn447fahLXS4vQ25nM4GmENx5DkKdLFD8xKF8XveBTBitGf395X",
  "key19": "3imbwuzSHBmz4KSvusq2QuVWysakqzo88Pm6HjdC5A6aCtsrZf2nDPvEZQ4FcTShj1rqhV5aqwgNFGe4NiFFiBJp",
  "key20": "2JsR8gnWeAf1jzNjWTMSk5XyYAmgBQnwTZrj3d28ZcDHHufuYNgeyNqhuc7pDnCYLcZBtQPRFaKSZWT31hf4xifD",
  "key21": "4YPexuzAN6ptoVJ9TFyjCnnTnFVWWGC2QkLREXZWgvXQDhht8WJgPExQcfKPJzT9DizXhR9hKyDqww3neX8wTJW1",
  "key22": "2MoVrHWHUf5Z6v9wiKcgpJzqofJnmbmUja5sW9nHdFAHTkkriKQ58UZog5pQNrQr55pERG6TDBfkk7icWK9jbCfE",
  "key23": "3y3voMFxq1pcxAKCFGdn4bqYnYyvdJh8NSixrLqmoH6BWc22tKzrtZrDpnQPRKGHbCwJ4ux35LdC6renUKfxyizy",
  "key24": "3FmzDhZytK2rmT5TVBajC4hBcrMaqimPVH5R2stD34rVQTGNd8bGVfWLZpYYaHacnx4ptUzp7MMGTFUAfe3vXyga",
  "key25": "4mRw6ojwEqjqhC8u6uLwuDVZttTTu9qvXxf9G8WcbPxmB8U7EeFpai6NGQNcM9pA7SU4epCYZ2iczArQ53L56wXH",
  "key26": "2VNH4s7bfBVchQ7w5BcagbUNfbAoH7srBHAuhkJkTURXeo8PkB9AdCqWvKTKUyALonH2dM3poezi1bvjskBYsaS7",
  "key27": "3e3XnY2gQQyTHPz1WUjphNLVc2PGjasBbKCG1ZFmaajhaAmmaYkq7rRE5KJ4th548QHamaeY57X4cr6Vjh83etQo",
  "key28": "cAS2UMmtbXH4P6shCHFWc1iUWB853zagsYaZz8ZJR9JNyfnLSYEVcP8q14QuXec2PiFU3mhpBWtiQBGQjCqG9qu",
  "key29": "5ScMkVoHh51GXamhFNsb2hxuZJoVcybw7znceJkWwAtFak2tuNpr2mBvSaS1NzzVwcFqhotTb4K25QAmibnqNa9J",
  "key30": "2HvuG73WX2EdRg2nbyvr37ke2gpshc2ceAhBRUduQhQvh2DqHT1BCCMLayBjvzAGbwNH4PuHEJQ2R4eLaDQn6n6b",
  "key31": "5rhbzWktvprgUeo78SxabjwDhGzvcfJbXSCaqEd7HiBoAp8cEr2tBXqsLfKwKaqtqVAzQCvS2EBUZkSuqGyKu2Kt",
  "key32": "3uekSiYL9a7GD3FTPJmoSb8xjryYk18eiuBEw6bKMFp5EFamXeyzuRhz73enm8saYEr3A72bcETpoX1oyMHSJXGA",
  "key33": "4G8EgLhKXgfYAsFgtSkQyxF1oP1mhz6WBfKxFrhBLERug6MGoDjLJTv9Rbrbafnk79rzAfe5B6zBjCk4PLr5isMb",
  "key34": "3sUYxJ7Acao8Fmy6yFFk5bckHjXET2b6apWZ4tN28KzzGf5mg6ntE2JkK34twBkVMjyqwm9TvvNF8dwVPRhVUw7W",
  "key35": "5dV71YyLjxt8QSNMKcC4Po9bcNxATrAwZ3hx8r2UEm7zhaerxpX6jbDaspEokqWA59E7CtktztkYD1ou6niHXhpu",
  "key36": "wbx9UmpEonzSTqB7QA92KG86vRY5F6KtSUbv1S4jVawTrA6nrs5iv8pi4LjnkvC4nKZk3R4LeqjphtCk9c4KgmC",
  "key37": "5HL7zTkvLpPKCrNRdASWkJSVaeTK7tPg2UE3UxhKqFzuSFJmBQbaHPm8sqSxPrpz8JUNQTi7N6gY3NvtyvHB2QTb",
  "key38": "58NiyT1dtJpKsXBV7S18wDqteUBDt9TaBPmwd1f53Q1qhy2eBrQgLr5hGRFbNS61AtFBHPk9wgkCYkTRQBh79ywB",
  "key39": "4FCff6VcdF5YjUULiULyTYRyQvFqzQ4ZPpzCCuJLbPLpUAtW4zifrxRkbQwMJgK4xqYHEKb7G1uwVUQHR17cJ33z",
  "key40": "56ESvq8EVVBW8QRJ9B9eLjMahpyPpJA6FmacWLQMrgsCQ5ksEQRhfbzwZE2MSyEnZtfb7NWv4bkcHtu8b9DiFUvK",
  "key41": "4g1iHJthRjQG4obb7AxWraijarn6H2z8JZwQGYcaRjz9sX3ShPde3cjXZ3KnF255vr35hDxHiWmpcQiGbC9J5Vwg",
  "key42": "b8DNv1eq7Nvj5aKmzZP4tSSUgSqL2Ui9ZTduM6BRiqQHM9BwGMGZNfy7Jxwck6AhGzioUcfqVUoPXMcMsSdo639",
  "key43": "Ry6G5wSZqGCcB8PM84xYtHKGjxXgxeuQXQFqZjra4DCvrYZuhLZnqTv7x6m62JRs1yLrb1YELZmiiDQm1Li55Lq",
  "key44": "5WFsSnoZtx6HGrv3j1F6cQANp2Lva5RjoKgWSyWeQMhHW5fxsvUEs8JpqptFYMVb5ANMMRe5iZpNFsrNtvpzmMqp",
  "key45": "4nVko4Mu29yBqDPDnobtiGUPiBYbX28k6L6ZcY84crM5Lff1WYpPan5cThd3DapyzPio7FAPtuD9m6BfDdhXtiSo",
  "key46": "62oWDAVmDkNmqyFRh8pDNuyEGwADAjgicEhDtG8ps8zzj4txnVLceFhHzuhtqHQxZ1NF4A5LrkREEAzLGSZpG4LQ"
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
