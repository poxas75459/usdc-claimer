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
    "5xmjCcFQCz86b2DnzGKfkYkB79p6UPiL3KAk3AuL5yj9ANmrCiToizdqV74N8dZJzAaFr1CMhyfDuwPNnsHTRSUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBBD2rjmJ7BH1BvUPTDY6559angg4waMtjck55t3vRL3Tdgq3uVzShw4Z8pNmMJcFBbf4wJxQic6TSRgPzLEwkd",
  "key1": "6QjPyQhJiim1kWi9Yij7VrtqYjNhQC3ZJMsKfV7kkRd94o5nvVDEQXkfKWyCxFJdEnm17aq8BpSgUVwGc6m9kXV",
  "key2": "4iuJRfdapJeFRaYMYtnkPmrRU2DkPyvGaJwdhNrMFdHhz8bfj2FBNftW5YBAum5GibaGNd34Y9ZqynPWRzzvJpRd",
  "key3": "335pxQeHBfWNbeVSc1UiW344LvFDLLg6JPULkTub6cEN5vA4T6xtgDxK3H4G3cV3FXGgLkpVKfQwMmyPcU4oQ38L",
  "key4": "3bjCZ4zmd2BQtV5mEH2SDB2dqHBYpZzHsdBG7ArC6ozozBYV6gnYP8bBwU3cNhBPC3xMFAMkeu87TUUV7dLjuVhY",
  "key5": "Q7eG8Y4Ls9udyiUoiKxDMMvBgEMRA3MUKey661CrDArWd37sH91UPmo8PMtd4NKdDqqvVGsvqzMBxcvPGm9TBSR",
  "key6": "5tEefnAcymKFNXBZegTKkrrFQNXUs2wVahxjEMJ8tHJXsqKCyGftARRszNi4R5NpQpTsfbdX9ron2CPBhQXKqWSE",
  "key7": "3tZvzp6NsCTJCQJjKebQwUs72rkG42RNrizGQMCpHXrc1fRyWcVgjXpRJgZ7aEhAmCmbfMz3yDLmVCVmE1cNgjUK",
  "key8": "3GdozmTjVuNzfmChYdL17R9xqvxbVt4BvjDJQaip1AmJ1b5FTX7ZodDrc5d1aZkiS4XJD6fU8tvjvx84o7weKYB7",
  "key9": "42V1Hw8bdsXXmYpPqdLW1SFbhCZMwd3KWbcf5WNFpKXMv1TjV1sCCs4YMAMRhHX74DJ5uGv9PN9vG895X57WDTMP",
  "key10": "3AK1hQqUsxBcPd4iRacxhkm6X8c8RA2QfvhAobVHfXbCVGCE3dB9Pcza7A4dasV59zHkR13W3ffaTrvyNbJ9D8tP",
  "key11": "2LwYW2ZbQYGtZffBCRXm11NqBjJRapsx34nZhfo1QZrJRdpoVk9VbJr1VBnpn8anwb2yWJXSj3mn9bQA2U7XPtrT",
  "key12": "TF1Hu3S4rcFz88rHxW2QPrCYwibSTbQ8KPpsYnhyx8erBt2DXDVuKsWC27kQXBKeZSddxqmvxVstwTp37PWbguN",
  "key13": "9kDmfQahtwoXKRcyjm5RswKkGn78t7hUj14AoxcJpb9x2fdUdF3JzLR6G3L97oQaMhAQmjrog42Eb3uUW87qE35",
  "key14": "5bkbavzofcEdq26D2QgXd3MbNNbU7osLfrKeyrb4GCWquVKSAJD9tt47jqbE1saEaAk7rQFgq46rvAU1wHpSMuVC",
  "key15": "3XiouMC6hDrM5H3ameJG8FqRLs6sjajrm6dbZozLYDzbEdRg7GG1WnS1psCzZEw5kdC63q9Yoj9d93JVEkohJyR3",
  "key16": "5kKY5fDJbJzBCcmdVCUcivQbqkgsPzpstswYCeqdUbbBTj67bzRk7RAPxWS27KUVYT7RmQY45e6StT62WKx99U2T",
  "key17": "4bkZGhjiLZi4A5DGeUhGrPzNZoz68vXj9PPpezYr9GiYoKoQo8aNQnNEURFZgKaKRSuxF2BSGs6NCytvZAs1aU2G",
  "key18": "gk8vAuF3fLhKhNgUVMNRy9u3xqSRwkM6kJBakcNjKHLHcuL32Pzgq4x81XfWvquB9UFynJegrxixsRDcxDakmHu",
  "key19": "uoEsFSY82zWPrFaVbh95dNSYBgPGiQRFCQBTbb2hTY3FqKH5aiqGX3ajdpun8YZkYBubj5cSwokZY9djj2mqZJb",
  "key20": "2MxGnLKVuFgJ5bmhYHzjDfWEY4HLWMaxan9rSevCea4GG8hLgTcQVPQgV1p7zRL9bVgb6TZV7NBBkwL1tWVLSRJe",
  "key21": "2pz3V4ATovbEMfghCzstxgWhNCSi4d9VshDEz3r5SDk9TSHt6Xn43vkE1mGSRnS5qnBaYpHZaTjYJZMhxbo3VroU",
  "key22": "2KUg26ds5jUuGCuwfWmr3DoK8Tccxw3ftunKRswFfJHVK7g12uDbMceC9xBex6wgoHAF2ErD7T8jKZ1YAUBmq6jV",
  "key23": "5jewtVyoE5toSyVSijKnYN3mVvBLjJwshNNcKyxbGaVSPTS9uJYXBsbnY6LXoiQCgK5Meh3f37dQvkNk7LcD3jD1",
  "key24": "445WZXnWscg9ybkz9JFoQK1xf1X28z19vX8G1evT7qwLK1cgg7p73s54sdDE9VVViYLedC25ihA3W84vqkmiHXgA",
  "key25": "55iv1zgFHFxnvcgL2s3Uv6L4Qt4LcyiRdqyNUwiLqmtJtohQnfRFtbEvR7BZpPBSwtJrv49Vb56MZzhA3PXN6t5Q",
  "key26": "362jdsBZv4yZ4uMEpXqgcVzf7e8KmCwbNPsHekpQYA2TeRi9UvbhKrRXxyi66griSyXq5GggrX64xEdpecPSmaT",
  "key27": "26NSYVTsYTjwfyQQ5iZLpXzY4Ngp5oiBrbzNCGptQGoAZegjxgVxyg18MwK7G6EvuzacGbSJw5moVJVGoCA2yLCK",
  "key28": "4hJnTaoahAJk6LDDVsRcmN7VW7AjcCGwk6w6STsi3xayXcRw6De5UWDpdVBp7ws6wotTzNzi22QHBPBJ94QhV8QL",
  "key29": "3VNkN84f6qvDJeJwoincZ8oW2XLw3YNSi6VYqYSA79E44qfQ2qAY5wazpiiGf7bDXLBgCuUW1GTzBs1xVomhBKea",
  "key30": "25t8o3Fq2fRsyQBo6ySph7Y4ZZLZQSt99oCbG36YJxfb93gVwGuyJKZ5Hw1bhVQNzmriLfRPE1PqvMvtuLCGuGxs",
  "key31": "2qi7stoaJZvaJ8DeL4C9R2HFH1rLs2M7wZfxr9ET5FsuVx2Vuq9H5XW7MYJxSvTrG4oNBSY33sQpTcX8pZe1UYHX",
  "key32": "5yN9ViB322fhpj6JwGakdzf6nNRA8ZTG44h4bYxCVHA1YanW8CR3VceRmEDZg7Lq4WPNhQGiktw3pBqAsv55GnfA"
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
