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
    "2h871bv3DUgq3vKPfw1HKtkexhVG4UVKANcBNYjNtNEwh8YAKsYmWfARnj5LSjZLD6XfGhtRYV6H1JDVnvsmS5Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRUDy5mxCnRSDLEGvZYBtMshUX3prB5X78caJz9j85RuGDYQyoXDU8zzsoicxwBVYRMXnXaoxQS7zyu8V6KKprc",
  "key1": "KEv2uZuUr6CNj6ZVN4Vwb98a9AsiMey8gYSpaZ6dr5TfPgq1tw37fyEEhAvRj18M2Ck2RK6ZoBWcvrGVWsdfJ59",
  "key2": "3f2z6xG9ckGTJpj76VYQsTm1mWKsk4La259MNy6h4uxtco6PnRgwtd5ci6dXTxbi6THfEfTjUZiQaWyrQgcH2y5L",
  "key3": "4L8TweiEPXRXFNVEQCFPoo9S5znKLBQSGwmZ817HycXUHKwcR7UdiYHf7jRftu9WNFRPQdCBDZWtwFiHKnBEJj23",
  "key4": "4HLpiSYmog4s6pUcy2jgpCfNfJSc2uaaoB8hzZaEc4NgYfcd4EDpnfJkdsH27pGzSQTB13jWR1o5BX9MRiD7R9io",
  "key5": "3ribvX3ZtmXLrfyUVeyR6Gust8XYjkVGCvejEPmzwZiZ55hJaCioc6AiJfJdyc6ZyrUKfHP1dP5ScwMqtAPEc6y5",
  "key6": "5eS5gdy6dVRw1xVFcPtmzpFH9FdKjr6MjqndM8bL6pq5zJRsMdUT5o74QsRLMNm2eLJMRUQmiX5meS3iCxFT4iJy",
  "key7": "42GAoKKCrA8s5mpmVCbGgibjwGxvp7MkckzyG1bwnfKb8QDx7R6JhnW4vDyddaapDnffCFPTqh1ubDNbg7vJZAoy",
  "key8": "26ektuSrwVnAc8PFbf8PdK38iyNEpjBMSNy7eu7Qr9yUKFTwdAu388vMi71jWE4m6HjwDq9d644bT4gq5fiZKmPf",
  "key9": "5UcAtGkXGLZN4Zzo7TDFbFZCyXhtGkoYFuGyBRzwBJ3Q1pwDXC8KCDgzCgBGdwjaSCWQ7PLxqVMPxP7VSMbYHRKs",
  "key10": "2NqyYmkwcxDdctmMxrtX6WfDVdoiLbi7BxWLxkKbPSnpaaPuWi1fmjsRBiRYuWs4212MFnhWTCAb8wasUxoNdcbK",
  "key11": "WvTHM2UcAaXAbsCgtwEE4vP4cuCGyJTeczmke9D5B6jdXjySKNeGnjDhWnA3CMZVZggvZ5vtMMJFmv1rMFsoHck",
  "key12": "3zXXfuxGKHoFumbXvWtyetrnTLfjmmMoJQRpcRcBWYtNBuzmBuQZcCDHpL4i7fzntxN5xLiYEtCiNYEdsred1Dhs",
  "key13": "3F6fthZ7AnNAWQFjjCp4pWSNLmww1baqaRFyojTvoaChJVkX4PqxJv4KpXVH8CDZ53RwEoBHwUA4uQx5BB2Exihn",
  "key14": "2JXetaDmyTovqSQxCCibJQL8YGBQywuVs2Mo6r8y41ec7FgivTLLKBafXVZpmZZkQb4n38Xbwi3Er7YZVBVrrev2",
  "key15": "2RRvwjvqWRT2ttFMAshGsFgAaNVhKhpbKfQALCk4nbFRNbV8i4pUFHfPG6U3LHbRsJEEnzs1Eny23TcZHea2LTr5",
  "key16": "3ZAfvPstYsmqjXCVBUwq7e6nWf9Z4jBHj3s1TMbNiZNW5zWAnZsnyWrGvAtFu53RbkpNiXveQCX699xnZykrHGBU",
  "key17": "38FwTJSZbuCHJ3z131dsQjcJa6fFNpgA9q2QzQbDhPzQw89XZVEf4XP33uXtGrxsMb65NHfreL8XKiNGeRRgT3aX",
  "key18": "4XUykYG4KjVzFFPsFKKN3ffy16iSPDHL364kajXEvmBWBGLk8hTbvAsrV87JaQCcToxdnb2oqUzFgNvLKcJvEm8N",
  "key19": "574zmr7SETcJ7kf38dtKZXC4LzBS163eF33iiBP3CC1DmMMYJ6fv4XtTLCS2AvGV8bmhkqnBsYiUWj7fnhN1wFUL",
  "key20": "3VmjgAyMScY3sqnj8k7NT5dkVSjAsLqa6dVxjqf1kKgGb8g5YQLAKHX1d7mRK6FZXyRtSALwWV4iJumM9W9HGzoi",
  "key21": "48xckFCnzZemByz5tUmgJkspCgPMV7A6vRmpmJbGzR1iwLVatYyBuYvqBRFfdduAZc4EzuBA3i8GL1UBHMYbdSYq",
  "key22": "2mDxN8bGxTtEBNKxH4p42GAkdns3oHWiPLhfxqHhJqk6sgCxhKdykUJ2riSPqAvCjKDdAjsuUMJ4Z5XKteEEmjKL",
  "key23": "2MPw5qFRq41PxH5djKeuPB4ZLoZShEXWf52aTqTngrJzdQLFP7FLckjYMaMHcvZ3APgiCSHjK19wunKgbz2WUyJx",
  "key24": "2bebmQqL3K9d3mpYCQVXaBL3YSramUoasENR8rnEH41xECvAdsrSEWMf9wf3TrWZMgNw78jf9Sjgnzgm4RzoRkNS",
  "key25": "3d5v6Vu6xd6miHSpcpDegffA51PSdKB5Y49eEyPUUSscBveDoNY5Jzo8qqgvFhKGaCyMmt1Pnppe7JUs9yuhRPaf",
  "key26": "4HUCd5KGANuEsFGKv52gLoUBt8SQPyajmUtVLrmspLvK7y3byVCYMFuSGJ5d5Cy5EdRwwNav8x3PvGe9SbMEcVEF",
  "key27": "4aSgGjEjwVSRwAxfCKkLRWeUffuC5fjAp9AKXie2jcJUPrWKQcF3CjGjV2x5Nv7EEGmDYEi6ePPcXuBvdnw6bkW9",
  "key28": "29a9GUfQAVyvUqw11uMmqPFk2rsUgw8gQq3V1URfDVuzF5Hw3SvVG4QFgk5yZmkCVvudqBAXmb1fdUSsRkFUZ5fv",
  "key29": "5FW95Xhz23i2ZWZCo8zHX1XTFKyFkqh6Jzb2mWnDxny12se5y1iSf4z7gCwDPnzVijW6eayp7nWYzwDWKzwbGa1m",
  "key30": "7cxQRycvJdVWcA125S9aLJqhiMyqLJThQPjtALPghzoVF3ZA38GauBJkWhFKEomxUAzZgfoNiDptBYtgXNeZcji",
  "key31": "4GW9K8r3fKppFFf5X7WhRm8MokVtBKSTNaJE3E9N8NYWyTvpRsa49fXifL2jy9JWpMEQYRpBvZvADzutuDbrpLM9"
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
