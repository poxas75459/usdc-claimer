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
    "4TZdRdi44dze9oxYxLqchLvY6QwoBwSTgsCP4yatU4MzKg6vRM4cxhwpFqtHJvrae1zB4KF2Hp3qXn7B8kcpFwMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejJpWJGdnwFJdmQeEqCXU1MEiT86pRCmbJbzY7wbg7dyss4NeNbfnyWvxHzB48CyeY8S2t55gcB4mGgq1uYLoCX",
  "key1": "41fAZTYytyg4tohtMRPztn9GDXSbDwymUDs8ExfjkxXFBqHtfYdfqrYejyyRJsh93vHhvg8n6tVRGAhiqCCVzH4N",
  "key2": "5cRfasadQWTrdXYragpigyGshLUv649kEcoQHQGmRvjTZ6vpKpYjveVUYccxUjRMAawZpSgWuL8ULn4c9zLGjQY",
  "key3": "4X6NXUB2aifMGL7XzrhQPEe3RXM4rmMXLkkButojKd4LwBgf9GWNuFBi9kuuWb8bULcRmoGyDqymQGotnPPHQUqv",
  "key4": "3dFUz6sNqcXGJ49G6wwvSb5CJxjFFVY5crTAZ1DQhD2zWADgGsTYevW7UizjnfNPNtLoGfYRN99vBhJHPpUuzeez",
  "key5": "2tLzjUf4og5UuJgxJUFaWZvaVqrM2DNfRX7NcS79ymUXkpXQNN5zfEQNQoVjjQJQdNf94oTCasjBvHuXsnnKpsag",
  "key6": "49jGzXPJUiFHKU2Aqxm8axXRoXSNNC8Soa1a7Uje8zVtetAzNnEt1pyYzCbFV44E6Fgk3c4m2McEinqqWBs8esZQ",
  "key7": "1YvHDkbE3sG457NybZoiBk98nWGk8spbLmBtBDMe1aYVFD364r4BzheTaQk6kfEndtw6qqc3YB5TmHrMw48pVs",
  "key8": "5wNcASiiR2fv95hKdgTnFfcMhdBcRNhWGK7pBBPiQ5c9jPLEcnumgJ4p2iWphdZXzo8XhFoAKXy3vDNeJRMrEt1M",
  "key9": "NjsPTipe1PiKWZJrFJH1apoUKyEhZe7mUCVbucdq86W4GgSS6CfWHHNTHEtuJxanbQJVQyWHacoe5oL5BbT9bxA",
  "key10": "5MgDYT1mu1XGsuzz9P8FApaXokRkRN5WxAS95owaUhpSHSrMHmN6xLVYfDxvY5FGRQbmiHCuSEw75zVB2Z1xp81C",
  "key11": "61h1fTNmQf5Mt9hVpNTUxRCLWvTEDaWH5TTrQLKi3ydjHNDrfABucqDAfFeQkkURJEhph3SgMXdfQ5ofoVghXjfZ",
  "key12": "29fEoqN9eMSDvxxVXUMiSvE293tMJex6DEK6CotqqaF6wuNxLBYSRK1HCeCFQK468EfwPpdk7fz69q1WRiywopqj",
  "key13": "2PTwtck4n4k6ytewBnirrhu7hnyCqFXgn39kYAL2x2hrURs9vR1PHGx9cgxHmQgr9D1YiHhkhDJa47QuoRwsGZts",
  "key14": "2sP5LMe3XRrEeCbzPrNY21ALSw8HMj3aFxEEEiVwQSuutJjvmuVSu68g1LDMuxWgrnZB73a3T8WRtRpf6zi7TGk7",
  "key15": "stBezchV2aiC3kM5os6EeKUbS8dLQmhaP9SZ7pXvc5pPZfteZHMnKAuna6iyaQgWh2XPYg4TFMPFzTZ6A8R5rjg",
  "key16": "5PN6YYVWweqDaFfF2by8nDqQx9uZe6jQiDsVibzb2vE9pbtrWA7pzJ9a5wJq3AgLB92QTG2Zk5ks6Z8yiKGi6nwz",
  "key17": "2gVafELkxYAqrKxMUHPtaFVubgq3UXUet867brg4c5471vkyYtvUWzzCCvKhZt6cvTGghbnZwcsVeeN6MwdKo7aW",
  "key18": "5mFphYkRs2YsHJrQbxiCKPBNDmR9ZdeDwfJUu6U8FbpFAxch4GZ8y6mrj7HE1erwjaFrhM48LQu6JxqkRfUjAu6F",
  "key19": "2oFEAkAqfSNMmw5MC7tYc5rRERiYxx4VKUoWabAbhw5Fqh8m5o6YHT9VNESKAxJ1E9zvFd9PgZc5eRs6UhHB2AXn",
  "key20": "3LC24aSuJkL8ytXhCBjj55SG2ztedXdrBpASciX8VJX9HUKMummyvpC6KkPBwD2fmxxLFe11kNR8ggbpRgnq4Nks",
  "key21": "DuBCT1WDHwBjfsnxm3UJYgkshbfHXfBEDobYmGjuuDC7dTtu24AjTMfrfXs4ZrrKfG1J1WStDu7LPG7Sj2L6UQc",
  "key22": "49n9NWcvq76GCkF4TdHu25ZMsq77eFSuQFaixNGRz7EdXhc9niSuFpJzMtRYxy9BkYNhbDZFUxBv2Zj4rTMA3Up4",
  "key23": "4nz9rqGVbiyho1z7HXcneSVKstQRmy87AqBhCksyZC4tevYgKQp1zRLpYu2TzzhP1a7voyfS6EYNeeZvk8fZeSen",
  "key24": "2AwRxHrE9QrrckR3EGF3zCYaZJoLRB1xsh4fCzLoQyfqymwCJvyAmkRA8gVzZLenRuc3PRCyGQFXRcKM9JhFwSCT",
  "key25": "4mximsVYDpGY4brcJfnHY68SNvqCu2xWEVJQeA4hPEpW4HFc2MU3DeavvAgwHmMVbD6gqXpfTDBrpTAmMmMnMK3r",
  "key26": "3SJ3fHYz5eoKASdWSkFCUqMBSPGZyEaAT7cXck41v1KFr744safcsJ7EnA6MbkZn47rbsxisaNaSX1VbgKQJgWqp",
  "key27": "DML41KxygayekBCouAKHSfbCHVn4aAm2fvfsU1QwdzZPGkfTfnUbWQQsT6xN6dtovZZ4Jrkyp5Ap5mqYoGjDZxJ",
  "key28": "2KCn6HunZWPUdbDopsbEZhpYF52rXKc2AzATaBwqYya57UxyFohZyDdzZ1b19dYPJMBCXTXwn5mDMndey2VPtgLP",
  "key29": "3zEdit7rMTcFrbKnhfDMpsxkEZkzyRAXuSJm87pTBDJDovJuRhNbLfTcdLX8sh3ttGEutpdPhrfG9ragzoGvEBti",
  "key30": "2vrcyzVVPQn2JHsDkEuEj3xeguDX6kJeDPxXqqWQiaGoa2Q3bpC4Gz6sqiVfYFhWYnStnuvjeHB1cmDGSCPzkHZB",
  "key31": "5pVUVq7CR36FW4Km1pA2ymRUtumN97hzwZ2JvB7nd3hxptywLjw4CgztEP9tHVGGrDB7KhRbiJYYzgmPhMeQ2c2X",
  "key32": "4Xaa1y1BexqNcbXnTE7Jnyh9GUFFgqUXxuTZJ15mcp4eBssLykMkHebSoJS5V2hZH2FEeB8obJAFVpU2DvxBihiu",
  "key33": "4zdMYHbjkoW84ZubDoMPtc97jmxjNj64oTjLkcHW4B78kxbA2X3RNUvtEBx3KpMwRRUkKqS7L9SpoDNjnU6Cen3w",
  "key34": "3mQ2CCiSLfBN6i56cMS9nF6Tp2CB2P2rBeV7YQX6i9ypTcRddCZ25s7cMd5PAMWYfbJ6YQeXimiLx5KLFb34x54p",
  "key35": "5yoawKGZnnEED5m2gyTurhfGwFDQWCc9wWq8MJDaqWUXi21tF7iAG5UMKhLdsJjbN5QS5Ywq4s1YeMJTgEp42qkf",
  "key36": "2T73yU4pgkRPKkzCb838eyaHNn4tto4cdHe9UhpLATxNpdk5vMkjPfRssgWDn2biEn3iFJwk4fuCkoxApz66ggCE",
  "key37": "4mRWjPXnJ5tbFmfFKhCUvgp2QDHdkTP9aM31JPhX3R3y7J4QUFSS2egBPMTnYApxBzfSwuqDse8pNVMKQcMa3xR7",
  "key38": "8g29LewJpKPaWoZGyjieMcGCegTDy4asietng9woakPUdq2entpcbMxi5yumWFNMWMFPgbXvCNHK7KGJwvN3MRi",
  "key39": "3ZJPKfCGwsGdvgpgFJYgkNh4XGaEXgHqGjVBzzQnh8gnwswYLgz76t4BqLtq3M6fWWF38ptn83z1GLKTCnZtp5eU",
  "key40": "4rzJM8iYFsZY468VDaXSP5AxXHNZQ29eNY9LxmryUfNVqaDkdtj9jZ8p3gPqv8ttJUNHSP4M65ATqsio9UyDjwfv",
  "key41": "k6QfUTr87ZyTWHxXB6PpU93XtUZ64bdUS274B86Xkj6RMjGA7zm5CHQ5uCq2REqMME61RmcRjUpV6bTziQgcg3f",
  "key42": "4UaWAp2yyCDKhpmPPcjP7q2W57W9yQFZAsvXGyi3m9xcnJ7fyHwXoWfZsRBcFVkfWupvMn5YgkVL7Q3aSmnXQdRD",
  "key43": "4GoWwDNd93YcQzSMcLB2hB3MEEXCk1EJEqTYzwHTMhN11WWy5W6qYwE1bpVhXn95Wxht7qfYGqiQrfvyN7Svj7hg"
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
