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
    "63pEiqFCbuz3coNcNPYuFt9VjJSUHu4ENvZrjBZHFXb8iKpiETtX2K6FYQaCFUVvQ4HvUSGr8xh4bF1c8FxWbESL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFK2JZATFKw4pKJyjPXa7zTqds3vxhSp87E16yCZrbLuS2TfVYYR9Cih8g2635uZzu9cmGmN5wBYfWjJKDtrvGS",
  "key1": "43sjBWEBW2qv7j5hjdDAMevRtV853BGGMfE4acxN8S1Pfs1GQfuzFnDAiJ8SoiXWRcHDzwoyKtLWah1e4KkDneEq",
  "key2": "4DAK41pZVzy8nXhFf7aRn3ihvBdvJWE2ri99oJ8QRcGwdaw2ov2g5zjuaXpfJPkQcD1muvxPury6okXXTRc4gX7f",
  "key3": "4Z2eYsFJKsfosB9RF9oN8eUYek3QYrSc6o6TWVFbxfkgtFuqPctuPFxfg1kYK7rNUdoXLJUZzYU3vcNnDzQdnJJe",
  "key4": "2hk2QGjjicmqsdX6oyC8sin2g7j2L5rw432YJB6hgUwERA1xFWK6Pwf2GhMVkRCmygMef4ascwqcV3jWbwTVM6QR",
  "key5": "3ukgabfdGfqTXqyV2MuxH1h5XELu16vyaw4a1W8n46dKuEnukkQc6ZfybVbPWHu25DpVahvj4tf9CrXvrL2S3NgA",
  "key6": "4JyFpyXqY73VKpYxdzzu7rdRJvF3Ltce89bQMzQJJFNBcVC43uJ4J2U6xQ3j6Pjw9U6FLCv2vQnuA8CEEFRcmv7N",
  "key7": "4H7uQBqVzRK43EFWtpn1c254RBMeuLpKieLrW9eh76ofVBkEoD2zH5M455hstcpRQBrgZRqZA9RTnaxaLV8ZFm7F",
  "key8": "2DanjztHEg3FWYRZkt6its3XFF2VeDbxkYXNrpEdBK9513sbEWD9cKZeEjnruL1mHcDe45KbstGWij2Pe2kVNrCP",
  "key9": "2ReCZVCLjfGstBomLTTLc62VxfuZNG16Y4hGsAXK8s3KxxFBwvzLRS7Ec5bkN9HTbv3Vizj6zj7SjKPwshDsYuoL",
  "key10": "4sdfLRxPccopf8vtJxU7Stix74EwWW4kQBqCA7NGBVJcg9YuC7V2GkhxkaxYESu4woFwwSaCHk2SNNLsZ32JsMK",
  "key11": "5dZEwqeXLbREW8FzyRCa8KniDrvBmzyJ4JxEEWfj2AZZjPDn5DV4H1ATWSxdxuKZsVqh1divArTbVKX4iAHdi2VC",
  "key12": "6jsrcGn1qAQtrFg5iUsxJuNfAbhKz1gEjGe7dY14MzRCCeFakTooyPtM11DEVrHdda3z1Tz9ai8vqxzqudhJb4d",
  "key13": "UAjR95Vcar8hrWfKEVxjBKYz8HTfX7N9pmpGg7bdqWqSAX49thBMtSfSnVf84Ho6PCFycnpBby7BXq9bxjLUksu",
  "key14": "3KAqX8yTY7Jw8gNekF2uUXs3v97VtiqqAqsdyM3XVfaa1NdyC1bVPL6er3eEV5KkwrP5fGrKeBMFUtw8hdj3wZT7",
  "key15": "2uBpWKVU5KhWP3Spp2tZwk8NqR7QyUC1XqAi4ZKkmuNng4Q49SyqDmKRpJLoyKzUeMd44iTy4pv9GoEyTfauaMTb",
  "key16": "5aw3cAgVDXMT1Z3pEqpDowVpLt5HDbL9jRkVWuddRNoH7fiF2VGLQc9MFBWXU1qnW56sL6sETLMZSECdNQywuPta",
  "key17": "3CWKZiL6H4DdZrCgmVAfYXXqFjW45qNVzEuzmBBRX1qxJRG9Hb8VyC1DRvGfv4343WzqXmAse6ofJY7xMbpmiF7n",
  "key18": "21mX6zUBxRUeJPpGuYCjb5b2owQerzqB3bDvyHSZ14ttH9fv57bNMb6SBU42rePguENVJjPb8xTNsabAZtUegsZM",
  "key19": "4Fqb7Tfj9B3pbj1Sni9fivvrsFt95a211WpRDYWnds3y56teZJhDX6MbsAYr2sxyK8jNDns6L8U5FBewcwWCqkMs",
  "key20": "5feTtmZoNSZ4fcSzcN8WFyB2eZ7wjsCnsCUoCyHhcBeMc2QG5thkg67aK2y7FebLVZBozNKMXZ5XDyji8jJgyYhw",
  "key21": "4CAQ5d9dQYMJZZ3xSYiiWUJXkh59Pa5BCnMuzbrSV1AtcvJNnp8GvNxUbv344eEXFBKLAYomenwN6MBM2Zjbm7sN",
  "key22": "4VZqhiMpv87JPRCYStHzsbpDwmoJi7NRUU5UG9T4z7ePkWsDg9zwSKKwYwoM9veAQi5cZfD2qaqtJpk3emRr4C62",
  "key23": "5575oN5eafrJ5tVVk1wDV5MmDh1szr4nmXBFrKkjPG2gjJyY77ax36yLLVDhhZy1MumQ8ndbrmCk7gH9nSbUjhy",
  "key24": "2cJYHqVFiRfxC5tck8x6zyYkMfxseJ3d226sSStaDZcMNPWnToesvjqrWyByHASwahg5TsEXg4PWYxdSs6jubrCx",
  "key25": "ZYtjNymqUvN8QtRhxgqys5oUdEZyUNGwaJY2vCUts2F2rRvq65TuS5fThRuU3Somx3VpQ92PzLa9fWwaLzaK8bW",
  "key26": "4oDMmhWsVMaF8zY6kVcmoPGraUXsd51kRontEuYgPLndB7BydjVNgh75Q2F8ffp5VB8ZDy9CxrLgw75yoi2Epxep",
  "key27": "RxHBcnKBkvzaSB5DDgGw4aaCcE7fkZGTZBqtfMu66fjvwZHr3qm4fUz19SAU39NebbG44fTKMMWHwE6xDMm81Yw",
  "key28": "4EYo48zmrBmbgT5Rut3zmLTpPwBV5UXC9WdkhSKCaiMNtR921gpwWW8yANrxab6ByPgpRiuUNi22TaDdEXib8Mgz",
  "key29": "3eNTf5MQA9kYBZuEdcbREBacEUB95ycSjbwSAhYsHGVqauTtPguioVqUVV9HqtF8Tgm9HJmPAsVDoMzUSBobnFDm",
  "key30": "5RfcCHaUsn54LFMT61qCcm9fbo15ckz2Bp5G6Z1reYsyscghcrbBWoP3awmXy7FzkhDDoTxucFU8tLpHnEQ6niPm",
  "key31": "AbUM13SuMxxspo13FQwZQjhRkq4Z3fiW67kWUYZWUyW9sKGomiHd3PiRsqHA2he5bfXoYbJwRMHWb48wHq6BXXH",
  "key32": "56vq2CPAqTMjHh89HTsweEuQub7hC7t4TJYza9stm94ow7xrWZB6LZ2ahUGCdmwDw99Ww5TDUXhGDqZebaRFtD1r",
  "key33": "2wKLdmiB9MHrkg5YhLCaDMsoCr4UfSitwdSbuoS9rTig2SWg4BZcgnDHxwTXbrywkbev3zS7WC4ujUG2qz7J7RZq",
  "key34": "5PmjL34ibSEPTEV7f46E77xfNgnEbZxeC3GHWFyFWfen1C1mDqhVAiYJ1YzW6FM9jpviiUkJFRQZdbgpFzHfcfRr",
  "key35": "3zDRH48MkjhKEUMxzSEyRtH94XMqZGkGv61ybHWDYanVxHLWLBF8h2ieXyfEa3gMwZ8j4EEqa3JCcCR9ma8HwYS3",
  "key36": "427dngXAJg347Ud1Fokn5599RpHbUUGY7VALjMyn5CmoPNeFw3aMRucKSYBVa81ATyPNcS1mrzwwJdbXVZvgv4sT",
  "key37": "TiQ6Mfcky8yr3qbqvh9cjN4rhLX6rR1PVWW5x6sB6T9FZdo5j2csxvemdZ7ANWr5ir7fdNj4R4kBYMdh3qAQ6fF",
  "key38": "3KUrrseUgFVdZPWy8eJ6MTbGJo6oFpcUBvcuF7RzKeXwCYDUAt8BiSGLU3zCrbLtZcfYydDNp1SQUWG2rXPiHDvk"
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
