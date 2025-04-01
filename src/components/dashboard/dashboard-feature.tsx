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
    "4CECExdXhyyM6QNJzDadpdpxa9qkptCQCgdyKBqfxeeLA8oBrXcod3ZDyYJU7CsvoXCaJR6RHwaCdJRw5BDpikPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t24DmxMSNNKroXTPTCJDz2hWkDHyuAdoWgrCxEe5jVmbxazSGihB5kiba4XnQWfMpFNg8bmgRUd6ZHyFRn9oisc",
  "key1": "4ZBjEUefJz8nN5ib8BGkk697NBVtKDjRPGBpgpGbfjJa6JuzUtbCAgvQcFQ9aUaKWPvSsE5sdDz9x2SxbaTeCeBW",
  "key2": "2UDUnWwJmQhzJCSjMWrVbWzDvbCSDFQXL4NeqLH9YLZwJEVvEfsibaUwbg9YX7kqBDqP5yR8BW5CCi4km1PutnsL",
  "key3": "5x3wmu5fg2CbbS9onuN5MM6AD6cCjDCESeDysA5tMZyrh7BJbEbHdzsn4Dqpf7faPyZ76P6mafQBMq3DnJTCFvfV",
  "key4": "5hFPEMNEsETvL1jytUNyhyRHYP6QwttwvYhAGprxr7gEXzeB8LUsVKe7odA5gnvsCFZ19NYZPWHZ7VGrdo5xhkew",
  "key5": "5gQPLd1qpcyu6qZePePyKNTgYFGQXtjv5G7Eymj6pXadbJHB5RYexoNMNk3RYEP9j6NXL5muXxzYcDRBSrnWBpdj",
  "key6": "BVdBQmHGXfTy74fyZxBE6UWFm9DDguRpx49BHrM4FpxoJZcFujbsBsTeJriXohJV269hQkinR2MRfVihaLgifPV",
  "key7": "5V1QJuuqpzGKgR8AsJYWs8kAcyyi18TbtgDgs2yPasX3BKGGd5DYtTwQb5sGEGjVE4RaNFnoiwkgZaRGSuuSuEKG",
  "key8": "ZmPzHR57ajGqqbyt52m2GWDp5CSkF1ZJEA3qaBV9RBK7uZ6393nFaL8q3xL1nVc6t5CZhxupu2PYGXmWaRcv5TM",
  "key9": "4PdnskwoQJDsbsUQF22tYhDy1QKTHn4CPDQg3p1o11kXvSHEmAFE6VyW7wy26eHCWx75Y51TGBFdmiUdYazzguyw",
  "key10": "5PrioRjnzXD1pTkjA6KE4chGvZccJSSohA8xhJg5HJSuuULTHamsXuzCeaMNzWX9rYoFGdMSrJxtoBzaZKb8jasU",
  "key11": "647gGTTKy89FKJ9hAR1dDNpg1p3jhcudDFcv5gSr8w6pyrA7jCRXHgLjHZ154XrQFTGFoZLNqJP4pmuoNZcvNxjS",
  "key12": "4zEMS5tk1Cuqit4fsHhKUSXnj47ohKjyD5C4Yo496NmzzGfj4Tx9n1AuEnix6EfWXiWdHU7vKaZSHrJoJu6zifnC",
  "key13": "3q6LYdwcej2o82pK65h35V4vmMLvag8ivuDNKVs8bMfDSfGmb6KbvUDAwzr7zjSUeW83Ze2usWUB6u3ikvEQMgxj",
  "key14": "5hLujvDNA8gV5b3N6iHEsXq4rzWHLiKuCEjbfdPnWRUxZYdmXF9pmXHABNVn6WiduJHVYRUsJkU8hxnt81cnXca9",
  "key15": "vohi6C9LUy9M5e9uaLcqUbwrAA68WN3EpLuARbxGDU5Tn1ZDYd9dPDrUAHwCGQfnFhxoEkZTZFho7s4UMenbeJb",
  "key16": "3MbbPQqckDM4oiLVNK6HJXHPboeEeg4XLSakSVg4A3KHm7F71L7JEoXMybXa2gVBNe7PLKRfwm2NsuMoVa3KzacR",
  "key17": "4UiGJeAux5nZuryk7fuen98Y7x1JqS2e18kCugBaHJtasS4H8byYVX6F3aQfWiJpSVFCxb9279qkeQbaqCQsELt7",
  "key18": "5idmhZkLPcKsBoitqpWVCngTyL7SYoRFB5jwS8f7Zq92dvpoVoXxvxb9hP5CAEySSwXDJ7XyvESTDsh6vy1gWna6",
  "key19": "2gEmQyiwYtAiqSo7vXD3xxvmkoJPwivtnWPKjz9LwtPUbYYTRURsDpF45yD67yMoTxS8naNJDGdxGq4c1wdxxPKw",
  "key20": "3EknySY9dEGNEeMevSwz41fdyu8HxGXQcg25q1ELYjpHURkDCgGtakhnagg8c16ZzZ6NWh4my1NCCLfx1wLYQxuB",
  "key21": "4mEdNdUQhxg9kT3PSvgJgbdFve4LEzmcex2x7meSmf6XVV2uNa3yRN27UXv51SKRyN1P5M9XQzAZDnQRGt4DTjTX",
  "key22": "4hCNsioTqf56KPUo5sRGyguyGaLiM1uZtbUYS2fuUmcq5yb34iqA6qb7watgzAs1Jrc9jyr5p7UnTdpWzFW1uPCR",
  "key23": "2tNtFi5Ln99Q8wbcpj15t3eythSCqMatXoKCf58E5jdtUHbZZcjoxzLL2nZKBqUGgBYUDadVYzvk7D1W5nUSVQJ7",
  "key24": "2enbPzy7LeHLcx3cRt3Bq6JvkZyoMLYyv5SzKiwHLNsPz7C25gHDtJ9UYhFcckxG6cxNFdzNfAxJAxfA63xZjr6C",
  "key25": "5RuyuokSvRQH1nZyJWVBENYQrPyd99vVPCYW3AMYzjkTygn24dNSsUJRzn1vmvUvugeT1tg19LGdUo3xAgbMdRe9",
  "key26": "5jFQ943guJP9DvYcwJHZkyjgkEtWgr6V1H8taXU9qJttDa7jDuSd56884HPYCDh9mrAy763Bk7Rp2DYd6eog3jdH",
  "key27": "25VERKtSGD84LoQVKYR2empjZRP9NKTQGYHSxXidsqeMcuP99kFbxLB5vk8JBfVQbTYt9WCEY3zqStGiXLZBnvq5",
  "key28": "3dv2B71wYcK72tdhGuDywnSMGryRz88dVFQ3eHkVihTq31q3w21jUCKivda5cVJ2nBARBCVaMD5LbG4dW4MUrZ3u",
  "key29": "5wJKSsMsqC8j8BB9kPAtqs7YPs9XokNZwvo5CxYNHijjP8xXwR3KagNTTM7gQfK896xGmMKq7DwtjprjzwWV1zn1",
  "key30": "2q6XGq59etQdy5Nq4sxj4hzUNP55Ks6VUYcJCbWmjpywwyPFGG1jh4AR7AUywxvnFQ2naqmH7H6Sq97YCmUvbRvZ",
  "key31": "4VEKykNobeFiZj44pDcEe23ARmVRPA9AfTqqPejqSaij8XczRxYxGgP7MPBM7ihXwvuRWNmnJYxexBHybZ9HHYM8",
  "key32": "3Sch3rGCKe2p3bk2Tn9hvg8Hqjk2t38BQauXFRty8D589WDC8153LceRxDm3Jhiu6cLN74KWGLF61CjuAMABRcW3",
  "key33": "S2RPZ1F6Ctzgw6gAi7B5LJk67FFQmWKt3qDa55YNactPUZSVKkv2nPXyvxdenVpDQHT9354xozoF48XZeGjzid9",
  "key34": "5TaqXCMe1pXDbPDxSb5Ur5kTxJZuwEubvp3x439maY1UdkaHRskguHDN4kQczoVHAyZDPeruVXQCuKCK4hW9VUj2",
  "key35": "3BpRpQ67SkTEUpZzrpJ7qFijkKufczHNZJSVqzBXNt1dtcNoJPyBR2WS8Mt5BDX2bLWLMrCWNacPm5GBSmdu7Fd1",
  "key36": "U5Q2CLWNq6hb2g75o5aj5dTQAS71JHtRhtnSWZmDVtw9EgBF9Gb7TrPZH6qnGoCcYuMGdP4W7eqJEm5R3cGL4kj",
  "key37": "5mudNKTLgBRTm1dbKbJWUm3mnPPniE7KTQHcj3jib24SLT8beVt1WLZ1rWoVKy4GjtJJEaMbyB34o5a49i5HJqxA",
  "key38": "4DUmrebUnSCD3miUf1k5XKs79J6aPHL8uWvbLKyCt8NQgt6tfKZtyus5m9r6aiTqpZeoj9kRybCEkD3M7GCg5Qp",
  "key39": "3KzBjB7KCkbLcxzmaPrnv3b23yJZLjcw9xzca86SsERkXMBCJVH6xvGWDtFRYYFfWkRFqF3k1Soa8rZzi1pPnuMR"
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
