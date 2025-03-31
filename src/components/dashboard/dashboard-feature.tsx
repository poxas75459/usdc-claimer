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
    "3wCTHN2jm6HwHjaPQNTFPLDk25V1pPk6V1whPfU9DTW5fbqFR24QbaCpj58FTXHDhipwmJToovVcCrtZZvuDN5nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8dVarCyyzjXv6LWoLoWd8Wo26tdSjBfMpYyLcAJVLSQKDTTnFvAjjBXmw5LeqVG9frt9qFcYyDvzTZ28Mm2xopL",
  "key1": "43dHhZebp5vKBKkbBUUsrPj2jbULxFNHW2QrdhtAmTaN91dEwznMeR9yaSiyZGrW9RhVSPLD7d5XUcb8PMJPGo1H",
  "key2": "2V1ZFG7dobdR4iTn7hdAqnbQgfydoDHviNEynZaBMET3Ce5CR1sydSkUn8Ycfyt2ERQc51hHmvQ3KDQWciPoUtMf",
  "key3": "3yn3L7Z3iCDk4uUbDxGQKH6wjReoYfnKLkTVdYzkka2KtxNx7wyvQ5JiQ9LRjLeynuPmYUYcAhAvqzh1pNgruEDe",
  "key4": "2hqTJ4ZwaHxudvNyR9nYtQ4VrECYVh3KU8vDVaKtrszmm8NSEqTHzW2wdqsXoB2ejNezff1K1XX4VqUv1b3FJW7g",
  "key5": "5aZrvzF6ciCApAi6KY5NCT8h3mECdZ8KrBbUAbA5LmtPto7XPNkqQVtir8UL7oXRHAbeWXYLj8rSNgRig8eKGd6Y",
  "key6": "4WrtYvR1SmUmjwnJcHK9gD41ixjNoqrNmk5fL23iGstfqG5MfzCrYu5A5XP7ycDXMjWoYBuAkC8K4P7KGuWHdrnv",
  "key7": "5mHPcz8ftogaBSzfVk8wCARjsBKkAqF1Te612UfHRt5NtkRzpAivtHuKnxpK6FPEZamt5QKbjTHWWnsecD7hnDkv",
  "key8": "2D9dteu2x7FhiJFjpj4exDg1C71PAxJKZWDJ7Mzq371LuSxcakyzqgFA1CYgNscADQQQffY2PN9iuuk8ivePCUTX",
  "key9": "3rWQ7uazmvP61jx7yFnfbbKzpoMqU4TrZjoU8eSpLHUxUXzm5BtSLPJjMgHaAikVJ2ay9pyfnHvLJunjF5HMDeEs",
  "key10": "gBktwG2oLWQ2BHuMseSTKVUUUEQB7gDCC2748tuyb7WeuWgxATfGbu7HHPRbWzy6pGet67m4WTtwh8PgjKFV83U",
  "key11": "eXSgmm2vm8mq7DMddzMuMMxTXts3yh9QaCAc13bsnRXrgLWDNUQSLteYQd8D1ESuGAxF5zZo6RyJzxq3ERKeE8e",
  "key12": "2dCigaEQnnwRuYtpXB8ePK8Yy5Nss1LNTbXnbQPdT8MdqyapQXW4jSSrivvbEtAswGoHnm9b9zNnNgKC6VVtqLxA",
  "key13": "5g3n21bENHpKZP4zh4r7hiWG8W6c6PwJnBp2CoE4sew7AMKfnMps44yWsHquqJ5anjFTW5ytWJ6uebE9Fr5hqbBn",
  "key14": "2xFJF2GN92JYxgGTseVUY9dH2XMht6wtzDW4ibnZKwJoynHSrvNY19j9Tcd9Sy9FZ9DDV6gqYXMDSb3wUR1f7SrX",
  "key15": "52xj7jHGsNo2xUzDL6ua2iB7w59razg6cGDeaVkHVgusb1DqpNQYrurYLYUY75VjfdfQ6CTMh3KRPhpu8vGZCthY",
  "key16": "4WvjCcoprNwumJ89qyUzvyJQ2V9pyKDZjxdswWAH4ePsXMVm6rHMSK7Pv8JCvAiPZ3SBtTshRsohNAdvQURTyskM",
  "key17": "3uiw1ma1mjFTJQcB7cTn1hs13P2ukQHvaGvaYXW6v5X6u3t4ySgwUWF1nY4go3whmjvYkHTbBjSShqy8i8GP3L84",
  "key18": "88ZFLrNEbh2FpDN7t946eYh5Y8ks5HYUecuVXcvQVTcJHV1Dnh5cr5M3eoX1FNo6MQ7o36aQbnPm4NT2oam2bb1",
  "key19": "25shAmr49sbEUounoVoeEM9d5LeGcvqPF5AdZGGP12qhHwbFo9d4KFK1ngddJssJb9Ceucg5KgxaqrGNasB9JEiE",
  "key20": "wYCRT7jjU2P8w3ZAqKuYdRsHwA9U2f7pN27rA6vRVWAaX2F6F6y3wjzNBNcdHNgYvGrZnibL5pJ51hqUDCCqe3D",
  "key21": "3TKsMQiDJKUktshZj9N5gsXJzsQDsHVuXufVyuKpUiLTSYzJsDZ4bx4gNebmqXip6mojFyJRcgms3j2gMugXQc6f",
  "key22": "4XgBbHM2ghXbLYNfEV8cgrHaCYDvg1r15gMws84EEPerM8Eq5PMKaTQEcBRAqbCMvtrS25zFGaiq2Hf6EmXnLwyy",
  "key23": "5q4RLzn2pcdVRPPVRMdKz8yTsQ1H9V9VxrrCe8PuD6GaPDK29y15pt6miUheSVpVRJwGFhZwxppea4PvVseNbiVY",
  "key24": "2ZTGf78t6kYQd7H8JicU5DAVKuUZxQ1jXh1wYbxSASVacyvKq3zHdjV2UHBfLtrnXsVuhJ4Z3hp9PcFe9TNw5JVa",
  "key25": "3mSK9uh7VcPcRhximxnAcGMn2MPsPK1zpvYCAPTRfKXZsCJKhQnt85cVionFhxDDyJnYGBz6LkUpndZcCXPs1qMN",
  "key26": "48EXkgfLqLFZfYA6RpTC2uCwuS3zZhjbpMm18UQ2pfpiN6q9wYzpQXma4kNkM6FCmUBer7y8ZFpQDTrrijVkYtK9",
  "key27": "TRzqk9RguYaZsD6dvYdeawmqUREsikhainXnJdnYRHYPany5YF12PRrJFGYkqMvuMuoYn6XWtBpzzdhoMiQUtXt",
  "key28": "3dVwxecSXKVgpct8R6Y1FBX4aVqghjHUxm7SKZCUSvKN8A5nadxKuFKeN8M2bbrvj7t2936PukuXCPwsyZwix5fL",
  "key29": "5hzhm4ndPTA4jQ5gNK37TtRgrWupRvB8jkMpGZG7CkMrEgs6W2qvWN1AaB831ndRqhFKze4tsKePfGSGjUtcbdy",
  "key30": "2ckVTvr23qA78Szew5niNdJ8yKgWPGgKZL9SNFrwSaE1H323GrGN3V3bHgrprdxQ8cs2B8KPgjCQrDvZy7UY7XfL",
  "key31": "5VK7C6UdzquPZB4q1sK7p6GLuEkHF83DeC4kFsvZhZDoqJcrz5DvA87p9bNXCvbjRNTb5n3ZeeAJYRU5FyNU3VBW",
  "key32": "2q8SiyU9LDQWZYN4f86drKHDNDECV2qQA5FhWMnsjeEt2ExuGVSx1FRzuLdC35seCcckcW1ySMSoXXbJyVX4WiEh",
  "key33": "5ybzxeqUKbqD7vRYp1KctAAdQ6T7X5F4edW5VhnhW4zaKjW91gPHZjHYDdvL9EeTmhNPpZeVPGJt16dzMyqRV8wd",
  "key34": "5pPRyzGN6CvbSAmSnRmptu4Tsh1rPFmzcy5FKbgDYqu7xU41fVNpsyvEZcgdWuCh2Pjm2BUayftjWFLuq3hwXtqi",
  "key35": "iwtpHHrKPJkCYjH31KguttvQ2wehgGaS4SMf7K6SNLzwyQTDGcK4W2d5GRstDiVqsNpaogZbKK8TkdH5U4tC7Ma",
  "key36": "23zuV2wS1NdoxgBBocVwKkVJdQDf74Uzxn9R9R4BKCStXyxQRgbEASRf8G82zVTnEi8aMQBypRmi3QLfcUjU8ksM",
  "key37": "3b7Rx3vgfaew8ZQXXPQV7qr6d7B3KpRFt2gRwmthxj4f3He8hW95okZhiiUmxU8Reg8j3yMtxVt4m7jRoSWj2aWj",
  "key38": "2oYSLfr5MPPXyBDcNYpSxpMBDsUKNxhueZzikMUWATNhsnuKtpXbgDATGSQcG8zYTgEeBJEcsERtUxuSe4JXUXhJ",
  "key39": "238Bw5cSuwSMmhmPAF5WqTgS1LJrpCE5ZreE324Es1bo2vok2mtj5ETqzxqTTorMmCo6PXLxUCNbwiWdYXPFcSzr",
  "key40": "5gKfaNqWBQzGtQx7AxQtZMzL9vgH84EXi62HnJktG1tZMzgR3BroqCMPsu5bKXsdgSQVsufhc4ArAXFf2HzpCd85",
  "key41": "2458t13jiCdPBPPAowHbKjnoHAJxBW6u8MRS6paZwwqHxad3hpP2r77rnPRT3tvmza6tdRJ2RemQ3MfrhpxU1xu9",
  "key42": "x38Gj4JDyGEU4oZJF4AnftKsf9QWDzYmNCKELWQTGswU5hX96Zq6bDWwfTj9YWVkdhSdfWngjX3KFHoM36mkRAB",
  "key43": "SjJDSaKD4ePase511aeETqCNG4nJKDYBBCSsLmQaHfUBC2ATdXQKMSDW1TXtrEELC1GKTypPuAKzoM4bGMtuckm",
  "key44": "4FTTjeZoAXqZrap5vRpGfip9wkWumZnhHkPNnA6dsfXw6kjhzFKq868RLzRUkdqPogzxk2ZkV9y5oce3QmQdnNM9",
  "key45": "3qku277AMhjtmGWC8Jf9gyMptfmfuhLJwLXVqWysZfaLC79SnCcQmB19EFeFuNUUCPMMcjR1McmLQyM4aXmJYLpz"
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
