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
    "5wXMptHsdgo2pCuggHukK1GnnFJrmP1nr3WNrdifxTVkRCjjTg9zbGofDfbTMrstPGfaR5sypzx6jEZaqXskzvNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5oRQtiLobgsBUw3qN73BaPfsGoJtP5EzP7LQa2gDwaQc1VopN5NmYcqqhyCxeigVzKB7Rqqeom4K6H33yyRh5d",
  "key1": "5TRR2QLmNbiAyq6ttbGCDGoAcZYT8hhBnzvhVsQPjDJMHoXk6UNB6xJtvcTq2sMumVDg9XK7P3716wsfWvQqBcqz",
  "key2": "65khPamUjFSsoyz3Tqd689PrLvUshFegFqLvF27e9FNneHkS5YdHHUJ9ktRQD32oWSHXokfSKVB9UHoooa3QaU44",
  "key3": "34tY1Ffe7fXchVzJoEUBLT9gmguAhLrHtpzW8VG1HFL96CLozojHGABSfmknX1x16Jm8nqdh74KWHvVB1dBbAEJa",
  "key4": "5SNz8tTrRkKSSmEim7D1REJzwGX3K4njqadvt2bAtR5SwqTQcrS9E8B99SGtyKXVkGtAnJKtcCcmHpYnHMPFXVBw",
  "key5": "3k29neGvLFoWBt9Qndjr6dJnmpVfvng48QPQ8qnxM1zQTmU27wZDEkuXigBzPFk4Pdifsr7VgJY9o2rvFCRMmR8U",
  "key6": "2r6sMc7L8e92GACZ13iDARjGoMhxak8PDuLF3ktvvVZvy6wSNMGoETSA8r1YkYyLCu1ULXZwjXiaTMnQb8NiAGFx",
  "key7": "3uPbSZBPwgkNrGeyFrwXWyz9JPDwgsUMazaRe5DCsk9gfYW9eEqqTxFHzeGJ9GtCGDnHnSRYaRVUpJgKLjkrvjRj",
  "key8": "3wNyXxun1rGgbFgKxCcFZo2iqYNBkxXWuUAfW7kVZVxhzuN3UjAUGqwDsxzfMN4nYKaKxzJRdeYgtgrN7WfCJsrY",
  "key9": "2qMdq2SMS7M4k9GusRswp2tqoRg5ZEL2X42pa78FJpD9wiegpvDMgkrzHFFHMHBFowLkQ2kon2rB6orDGNumX3KB",
  "key10": "4qYgBhkHJpjSsSQgCuxUdigaV1NEhyS3GHs2DWZ8N1JcCGfD5D8D6WLD3uTvC4JjgdmK2pyx3cWRWWdtjPc5tBRj",
  "key11": "59Yyh4D9jg2GecvbMs1G6g5qDmr1oAr4cRLAmiH2iNDxchMxDLA8RggvJ8mESK9RShjLHwRxC3FsW5C6qjun19Sg",
  "key12": "2Sv1AF1mQhK3uGQJmcTEvbr5XHFfNabQS8CrTmXo59jpmye9BVqEAyoJYaD3HhDyZy1JUuHtxZQqNi3JHaUqigPQ",
  "key13": "oNAriJCyBjFMCwuhBg4Z49mBeeapzBXyqVjh4vhYJCuFVCZMiE2VfPLFAT7QNvxj5Lgit9Bbsyy7tQCPuSzj4P4",
  "key14": "SALKPCjB7X57qBvXzvwev6GW9yn1Sktf8fvw9DUmq4p9LRvVtJkuYjrr9PAQTEZKtqZemLSasqK4Uqcm4p6pPYn",
  "key15": "2GuEBdLMgM6nTEnveWDRBiJZXbWCFBNMgwRAq8M3kMqzd2FpDuhqynHxNBfUM2Xeo4Y54zgbpTLLQscPnQTPSxXF",
  "key16": "4ehGrHhaUGJjwYks9jphMVPre5TSdfuYLC9znMCdUVn5achrLqmQ7J1ZsbqveLti94zJ8icbhNPnA3UrGG9f6AZ4",
  "key17": "4Ltqd8eX34gKZDNVoridYhAMb33ZffVAHzMXErbZCDYE5ht5P35ebpD5aMmUuZXXg1W95rUZZpoM6HLLPMQK5XJj",
  "key18": "58jBSgwUKFKi1qXTeLPW1x1jm3TDCZRMTL65Pq8G2FFGsmAQe74NTUjtqWCYKKgk7hE5rBG146a5Jotx1kL4Per2",
  "key19": "56p2W6mmCPafHRW3JhHEEBMrz8aPbTxGR47j5KTyAcah9eKcQHy7sdL91KVKDAhsYnGeiFwn1XMCNo8i84oHZHKF",
  "key20": "5mkqr3x6Kh4Y4ZUcgRa84HxTkYpfuHQCoDKQuxdCpmQWMvvj5bsh5mmBy2sKgvLNKTshwNmGXdMwKuWnXqhDkvSf",
  "key21": "4eS6tmS9gGPVEQ73spKnG9aa9XHFdvJUxzDiXRCmznx6um3RB4GL2dsD5Ne65mXp5QzytjEQsycnLgjUKFV8JUFT",
  "key22": "5yf8rGiCpW63WEJowygrX86Mqg5A1jwFciLGsGi5LXZJE2zmVgYBDXXssdVwTYaPRupwMVgYV1Q81ncVKKZuTMgw",
  "key23": "JqGqYoWEJgQ84ta2pHNusS7GJ1W2UiEKa78qPuVFNMXTwpgLracr9PNimWdnRFY2ZNx4u6NC7ALDPaHGsTuNdZh",
  "key24": "3iB1J8gRLPdxFc6xf3Rxe1hoDXxwnqHF8qDU1mEkj9kVGTLRxwC7BEJX6MR4ve8eTNKcFsg48qdfhv5eW1sPShoh",
  "key25": "3hQ25YTvJjCeLfCmkVzCV7MMxbpMtcegzdE8wweykhrDXHhhrTDCkpLW9qyPiVx31CeddRU3hQEeUwZhuP5tT7J7",
  "key26": "4JvZ3McmBsiBNC917bi6EtW1uHBSy91B3JTkB6xj2W1u7KaRaWCn2NuZBesHSHE5ziB91wXM5FYzY5ZgBfEqfKMk",
  "key27": "4c2pydjnvmVywhVYCmkXKSpyQ1woYPcH2H9W14PNJQM6VQss21F7ZpEyoZz2HXnHCXxWw7EZx3pe9Q1Ncc7P11oe",
  "key28": "3uyGRPHJeDNtMCyc9JiWYQQsUrt3mHxpaaRbf3qFDQAE4XSgmZnReJpbrWDr3NWV36mRjC496oJFQo8cyrj7W82X",
  "key29": "5YsjvGG8VAyaFMjKc1Lthn3sH54ZjD6qsQcCuedJMmp4GHuvk2Mw7k66CsJCPocEQdevWZtCeQMwMAxjVfzjWaCG",
  "key30": "3Kx7nYYVS3Z4jbmqaHW31wgUuHUNeFAWi8MmqvwSGXQvchJuJK4bFuqE8Gu4mgPL1iqvjkYHV6hs6EwtSaUdBcuR",
  "key31": "63RpKKmThePo2oDwpacXLyEmdRyy1UKqxxS4NVpRqpkbZe2UHe92wX9kjwUYQivFa11Jg41Hb1Bx3h9RUzyDZGYC",
  "key32": "2YKMgF5JLLXmb2xsmMojrpHBgTvh9hzjNB1U1tPWzr7TMprafUSXhsv6Uo5ovYvRPP9eRf5GYtRnA37uyFCxEoE1",
  "key33": "t4FgAzFRkVmFgRnyAkZ3HAijysxDXpwqJn7AUUkkRMEAXxsTwNGf7wJ9xWREHdqKUqjszbQRnU9P9dUmmMqmkeD",
  "key34": "womu5GREb9CmVpVtmGv8YpwE3mQTNELAzqtronKwefLibXrhFLxfyZsYHbpgcAGySxcYFadZgsWeM9hdbAzsmVQ",
  "key35": "5hQ88p88HSK2wANPWnA67VNwbZXsRh9EAS4LC3nF9nebRUBuN9vgS4iF8eKDo5YwyJj4EatiX5m1RqKkQM49aYHe",
  "key36": "3QTuguXUFCXAPNactb5rmZWPt9MsReGs6oz8F679UpnZWh8p2Pbh4N2PKzYha95thjzTTc3QTgnabnSnUxhHxaKW",
  "key37": "kNEd14YPVGUSeyyCLw4sCAPwKXrKNanVZtnT56QxaBJ613k52NPhiappJgYner25R48SQuzdSEFYuFqpGNwkxZ3",
  "key38": "4aWVuFkS8FAxMNCQZcStccw9Vm2VFaiUVrEJUw6koie17nFdnFLqFQwAyumCEomCcNFajXHix4Hym2PXkgMtXsiu",
  "key39": "3nUBWHNbbQPYJxHGEWntdEayxkmLxy2mgPJtdRZSU5NWTZuvwKw4e7oqJTC51D1BZUnqWVgFNQULiMnehqWF9qWw",
  "key40": "NudaWL8RWzWdz9RUaccmSKL3jXFKfty4NbAB9st13mpfsyAG5bRVok81BVs8eTJwjTudPpYk5HymLNUDcP76eZF",
  "key41": "31zARv1GKfCXudbBTHkQ45os4597av7r19r9bUp5NtVempCTVP32oYFYCLnXK2uz546sJEavdPFsjiHm6fE8WgU8",
  "key42": "3tY1ygrbfxDrpQN3DNHFaDiuwkVdYrwWbcAapCh3CUpXtWPeyqcg9B58Mci9bqFMJHUy6tvdysLMao8twER7eKw5",
  "key43": "4kKgXZk6ddwYnj3Fy3NW19xWUGVkLrEZZWLpitwd4MLW4k18RbBJo72wTVZtfnSvpvS21vdCLxJQ6evxLmV58uJ4",
  "key44": "3uwyLxXvkwCdHRkmVenc3RD1XUntAiWQSfTCsGJZpBaF2f7Gy9ubc6wJxhDHwpJrKyo9mENhZBnoeMy985rEssUx",
  "key45": "4Hzcx1gfbuTAKBZ5QuJZhAqaz5iPkvv1RjuoKguXRxW7yRn2D8e1zebLA4nADzeSPCJpDfpNiES1qLCRT5hdBp2T"
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
