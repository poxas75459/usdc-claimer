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
    "3zD4jUJQSjzp3iXtrMq9LWhspWSCmG1uw37UASThLWfQQMpVmzg2wBkmNWzNxpksUwURx3fUD9nmQfYX6V8hVcSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEFN9vcoaxRKntnZeR6CD6NyDmAVU2VPRbrs4AXrq2EQsKpUPuE419fF96mbbSvDcDwCAss8RWHwPWMWSDLjD2C",
  "key1": "3LnaA5qr2jdsVVVYHtiUmGQd713vjhpiDLbkAUWeP4T5GcvCD7fjE1KPUL2hZPpzUXCZxbzyjPXiffgSZVXrkbaG",
  "key2": "46p13HCj5h9GKfRmgzmMX59ZEUdu5fXY5aikp8DMA3MgXgcWuq1ck5wAnCSsMHqNK6ZrUBs4swypPMCxgJHBjQVG",
  "key3": "LJEh7nEPvj3aJrCV1ht9vCCV7sRNEbnTvdAgcHLS48vJdChJi46wQSQ4Zs7ShGabqMnVL1qRtYzP7cqpUoJioot",
  "key4": "3fpQDTEc4APLbxrgiVgfFqoA3WXGiW1u8UCLrySuPFcXhT9A42NmMdnNXzewAZwCMszo49SZZwjAAw7kyyVurzvk",
  "key5": "2PZpMXAFK9ZdWBjLPVmeTopZuikPtoj716vUXGhHNpcBxurotPzWZv4WpExLRD1S9GKaEXUMzcFqURFfdj6vhT9F",
  "key6": "XTbfRzU124qyYWky2iiJdmhRm864o8r8EvnxgMvBf5JmfHHP9oZ5AZ6J135oVNG3gg9Vyq38mqiiXsLnPfPsgYP",
  "key7": "3ZzastzzxCd8osrHYnCsE4Sz6FpsvCrWkNudrDDrWgrtoBi4m5hh7wpfkfoAHQdMcjqxK3oWqqCDZssKtwSuEqpD",
  "key8": "juTZJfoU9Q87W6uYSjaQgkSbQ22JpWLMzSs7xAkZ3DSrNJ3rCPPqsj9TqNqxneD3PU1t1zJ2iUkvZBpn7MWEMxo",
  "key9": "5kq85nBakVPMioFB7SiymFRFoggyoNqbwg4dwQqxvP7wWaTqmjqMk8YwoGHzVPjGx5G39iAhtDEYA9dKf7HWEszA",
  "key10": "32RUKLFHDB7nAXmtEuawbMesYYpcuL5xVDBKMditswF7wQ4R2hTYRdB3nk7TEMKnr6muuRFC1YikfWETVwQ3QhYJ",
  "key11": "4Y3txeXzUsLVWvRyAFmGzG6j7iDX8oyihpLb5FfpZFHxXAB7pukznx86RsQBG7tQrK9d8mU3oCkPhP3B1fS4WBJp",
  "key12": "51jmxaW5pZHnkpxBs8MwsmMdgwTj4Qn7WVKrjdbRwcdz6fs34MNVRgSKuz9ukFyG7DwwXnXHEkvCHK77RDAKx4vt",
  "key13": "ZKGviwRJaBqDdo879gPK3KmPcQZHroQA4KmYsJxXorHz3mUrr4mALUfNbXA3VCbH9FCUe7hNE8fBMjR5RiVM6GB",
  "key14": "4Xp36jhJSiNZnpsBa9uZ1KCF1WK2geF69B6CNR6qL5aRC7TbXYA62CwpVuKJ6LMF2TGAxUyJ5bUbTpzZCBtekdMs",
  "key15": "5o4RKarWrTYLQGhf6Nkma31u82oEkKKDfVx2fqCyPRdepEfkTaGaY2GsF29k9VFQHVKRzMc2herndE3g4oFKs4FY",
  "key16": "2yx5Lme2GcFMfyJsRH6tyDRxfKj3ykVbfC4sC7CEc5hBGndshiqedPKB1mauZ2yC2GACfsBHXEd48oSe2F9gMFyc",
  "key17": "CzNDebb2knZQQXcDc3wUwyDwM4UaXXQXTtMvjQfnwipmEGY36fCPfFuYX5hmYMqhF27qczW1KtY6pdo3At4EgYy",
  "key18": "2GebvfFc3WvBA81Baixzk7xXQLjrWXJ8rz8X7A5cH1kDU1xNmQRYGfppmzKx9JMew3hMkFPyj1a1bpDVW4xpz9ja",
  "key19": "4mxM7A9DBHixGzLF7fEbFfMxgCbtZdjMKxnCZNUdDxhC4XMNgaE3zGFtrjVD4LTFWoq6VUDNJYENqTDwMtqnnLnu",
  "key20": "4JNbkGM2xsPyytB3FG38s4d1t1bNaaV5ea2dUi9ZVsA4ttybR2Qqswg3bPQ6YeFUVAE1A35grTEYZXcRrxbryPHs",
  "key21": "4LAKH3sq82UTU59nYosRaNyY8B7aJw2synW6GBeie6R6Rjtedjakv748wfkCKJTja4cn1J6v37dxCZ9Y2N3vuwCB",
  "key22": "3qezok1mv2KD8uMJYndABAY8BrX2aSQjuPdZVSQFzAgBemUPWytYYJ7roYWjzrS5ziiRZwvQksLTUsjxUPJcoCqo",
  "key23": "CHfzvnGaakhnnmeiwcecpU52z7Zx3SumGiNEzT4TsTDu8SkE6mHYeQ4fQxZ2youfTsAmDbqSyFMvCq1F8g6uYFC",
  "key24": "2g6dpADfHC1ufut3ATJRREVNvAE4EJgeYgkDyABQefwo9Uzn4JuTzPEXiyGGGMNRjxGy9eetaE79gwbdEWhcU5P8",
  "key25": "5aiwLcJKAVRYT1xizcRtesCWiM3VTRVj8kFDSfrhREatbftHswf8cfLpg1G9YGtjZ1TCXeVjAe1Mk51ACyMc8Zii",
  "key26": "59dVAFd8vHhGiEfTKf3CV2WYPyeVoiFxuyWMPi7yH74S3j3qSQt5obeJAbVJrARTKkeEBaaJTGJjxLeUzV1vDz1r",
  "key27": "gwXadcYuWGQ3D99sVK7FhTGfaypceg2UvoEADJT6J7Bg3tFTkuWDGcjWUVzmPNFB3q33i67UwSqA7CQz29CeCQZ",
  "key28": "4bT5A9hm4vm3QzXg5ZR3y6KceJeoRck2L3QBWrUVHJQejoDJsfiYTTYKHvuJomyyTsFhbvyZPxii2SH6ogXEWsgc",
  "key29": "MQKoC94rP4xV1ZcAqMzFrt1Lso1VAoNoNFw8uYYsFjAWUY9TbMEhMwCNy4HTGycUfbXUwrkPLE4bGjsEjTQejkb",
  "key30": "wFhFqjKcLhZR6BSyHNEF8VwZcQwTPHLiWC1pXGc1Nk8QVgmFQj3i8QkwUWjCDjPoWsAx61Kgw4APkU2T4Xt1bt7",
  "key31": "4BfXKnS9Zvv4qSjmbmdno165CKKT7uotpARcrFHDdKKfeRKQXRi9nEfZA86FJed3t661HBNd7PD7uDsJjU6xeasG",
  "key32": "77PMsQpyReBw4twFrE2L9zTd8EHstR2LJC7czSsmS1K77GSTCKkgdbqUpk5Y8VhR46SQCaTtLD98ABNTWiegbxf",
  "key33": "2Anr43hc8XeEddXNjFT9FchAaUpMjvnQw2xeEUxiddWfxQN9v4ZdNiMN6QXpv4YzkxGeHBYQBEnzA5Yg8rj64GGy",
  "key34": "2LfZZt5TMYgVJ7jH2aFSMyugiQXqa5yHJXBf9PZyrdSmB4gJA6NqkMhkwXuJ9TV6R4B5K7FMyBgqbUKbLpCajg9i",
  "key35": "16M8TTm5scGXArH3MEYviSosnuyYvpJPm4wiij3zLXAuQv6sRJtUFaTavmzjgX2Jxqb6pPaU5XCDyfVCxjGRUGE",
  "key36": "diWsehvuEd7wkvLEDGcPkeugR7ZaKEWeqSfZF3BEvNNG4oc1Jx2Jh5fXbmcCe7H3C2EivF8MmdwuYiadRQxMUyW",
  "key37": "4MAAgPTYvCW3BrDeuGqYs9t4Mx1pLY56xzM7Mq25xZBwgZoezTLY6jAtbK4G18RDkkj2WqFnxHNeA5DahE2e4ybB",
  "key38": "4GY4UreqsKr4RajqSCaYTH3qSQyHJTGsA8PUPRkywcjMNMnLNSF7f63bU5SN44bk4vLah8Qp6d2ySe7utGcbJBAw",
  "key39": "5Zz4cEJ1tnKhTNZTazzhavp5VdfMhbtgVMuvqRBKv8brDK9aXotbFtaoqhsUDaZbmfNPEJHuHtg2LnzM4tECVoHt"
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
