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
    "4VWgKyGnmVF4PK8sGgbKf2h3QhZQ78zv59HY5WV9CKQnXLEFuAwZrq9ogY8fYHtDFfM6mtSQZSaosDaChi9vviQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27xtiqNeERFSFq6aC5Zjne7wAyVBh5usAj1pgBKLyNSynT6mvtKuXc9apFzMjYdSnGTg7yiZn6Bf9mrW2N95Yqe7",
  "key1": "49o12urwKgpymkBeZQHzubvZgLycXfGtVtHUQnpSjqGBpUsMU38KwWrMwFDcGjBRxabQZqoRbu4kgBsQEwAxtfn1",
  "key2": "T6hWoXKqdYzBngLArfRHnP6Bd23VYrVYmJLNLzQT8nSu9CaXNPMB3UbMUYEB1ud7iMZvA6JShnyvTzHiQyuNMBH",
  "key3": "3hCwx7JcSidVkUNtxQnpGtBBXvY9DHk91J16i3kJMkfkdSq1CCNLyaxtzoGnY6wDq5kme5ZgJ5Yi9PUVV919S7SN",
  "key4": "RhdcMB5tbMmnHxEQMFhwK1LnZfX6eYYWABeHDnQd1T3cjj2JuUwoMtSi7FSuVHNzS55jZEegqoPDRKUxBoUTy3R",
  "key5": "53bG1GuSP1foAA62qT5ReyFSgJTc1PtBnWBy3nGY3ngNtYpUJKErpQn2MCoRwSXDSQcip9sRFoBF1K9PCTa23Qzf",
  "key6": "2EBbAPBHsidn2QcKpruEjx2YV9nmQpgwbdiWGsoYeNmzsmtzZA3zyzaLKsKzxk4UUbmAYH972jYgL2zdGAvp5RcA",
  "key7": "rG2jzrY7dHsizpMZuBP4jRCPWzj5EvA8BTmCczk1iyXk2K1Uchj47HvejfbJmdMMAe5XiKXnSdRrh7MFKcuvdCk",
  "key8": "vMVuXoVy5zKrdzCTRf3BKyMsF4guNLgoUsdXpicutUd1DJUg2dgvVs1hXvyNVjJLAoLSWHnYkMEwK3Y8xQ21LRp",
  "key9": "37gcKdydLpyZzJBhbJ6nEvBYAi2w4QZEQ5Afbava2E3CyVF6rnFJaGpsNXf56B3UgQ2tMiJ1s4zUtxxNnvdk71eP",
  "key10": "62d2CMyLPiNc3hNgvL797ofktiTW81CDoQZ6adP62HmYG25At5pHAjYdJ2QyZKaHu2uNUpxhVXNu6K111GJBZpoY",
  "key11": "HwMafQEKBJT66LsZa7iTbvAyaZ1SMvP6CW7oKw3EHMHtUD2Kn4gpzng6K6qgedAmBFhhocYz3qYoHFcqSiwRpoX",
  "key12": "3uUN8BxA3HFTZhPQZC6iYxjYxvF1iQeP1bqmpAcgo8WQAmksW51mhmVjS7TzhHYqXVFtHwkvh3GD9CSvWXYFzPAr",
  "key13": "5JZQ199E7u9qseejS6JE1VEQNPp5U7187hQb1Urm1J5Pttn8NoHpzNsLwgagk9zBXLL5fh9cLDHfFfsAH9kFvBas",
  "key14": "3LL8wGhn7TV14zcXCEv7orZtkkXN1LBmq7FKdSVJTNUALsuWPBbV4Y4oJ4aj3rofK6rNYo7afgyU4FYSMv222Q9P",
  "key15": "uWMENhQhQp2dzNfiENiUwfK4FW2gPGURC7FeZL3Fg7JmpaobprQPz1ZQkBLw8qhFbqXSaRtFyqrdUq8EobPZqZz",
  "key16": "3ZArknzHBUdZhyM3F1kFDPG4Y2m4Mv9d2XKnjRtLfJ7mC2qa4Gc4FnP6qZ2pEDFoZumzCfyfPAaw1kogpeeqJXwt",
  "key17": "5zYGGe6YCL7nPzQ2aeL9JYRZ1juLrZTm2tpNmN2NwKDP9cVVGdQk625nCGdbUWZmqA8UMfKmARKnEp7z8ehfZRU4",
  "key18": "5MPDmb2QUYLy4Mk2yXhTjogpcg1XHytMFRgGTStpG1J7MdrbqkfV2HHpNQgTUv9TnTncNspWZqr3RTgwQ93tuVyE",
  "key19": "2Pa5y9rh9LAwzCzNMfxo2kGhB7zzjUAKu6d7rLBGpreHNACpDVN7BzM2nKHafE6xqvX3R6emRifZQsoL58u8uX3z",
  "key20": "29SauS3peQNLxhoqChnPQg6Nfbi8urgGQx739SPEMtYJEvVs8Qp7NDYvmUYGyHcFtTrEyxuGJF5LaFStYUwL7tgx",
  "key21": "4pZ23jkBULwZUvRAuoe8nKcf3KuCSw9QCNRpfrbWhvtrybeKz2sJpX3CUpBe9mHe76oNYLzaVP8dFH4dMSiSq9r1",
  "key22": "4ocYrXR8M3byFXRoYocnyxSnD7qaPZF8sB6rA1k4n8wJna7cNkoUyGAqd1ZwRFJssfNFgGUoAcg332okAV2ps4SM",
  "key23": "37GN3CE5jfqnYchMJbx6hiek34t982yCztZsf8pWLeuRJN2JW53hDTnHRT6zVF3PW2idmJxCeat9Y55fYGo5wuGV",
  "key24": "551DMEhKAfHU7TF799wyxmrtTMer1DRJHPnYv7WZDwprYcEocX3sK2YRsugo24MqFQgmN1iSJSJSCVqSLsYqmHhD",
  "key25": "3VqJJxJ7pS7VFyBHBmvTBRRM3GAsmgj6YZBrEZia5rFFnRepbURYYwDhf55rAKoWPajEuyyQ3Z1bgD4QhqSFfZGF",
  "key26": "5iX7fS3qagTnqMCXjk3FUFWcfo6LQYJTXGRW6VUeFsHnABizAVMAY9WZR6VQZAdfQPPQa3t4vMGTHddx2FDG58Gz",
  "key27": "5HpEf6KWuRfNNdvB1TKYFBadmgkGqqyAL8NBV12imbYNh7xDqRiq4BKyZqxeVhXGQ3fXQNn83xppE5yaAt7ogUPA",
  "key28": "3UZGPKaNUyibw3upmYu6XNjyQECX9JBCedHV7eyH5LdgHMeQrcZX6YWV3CF66ECkV6yuwqAmf34GY2tXJaq6E5F6",
  "key29": "5eLTmLwGF4q73JqznzBhCSBV1qaeNeSG4GAEry8Mn5RJbcWrk6q9jyXP3XdFcGQxQ2hkXUr1QjazjUwb325zkuRb",
  "key30": "5cXWCkow7cFRSpr782A2aV1ketmpA1HuFSp2RQRgayL7dZH87t4HscPnwKSiCwGjabrau2hrx9uzYAbyZL5MPQWT",
  "key31": "2GLU43qTDKT91mH3VgT1j4AT6D6fvWejKRh8YJ3gs2dAR4EAQu3avzdP7bwCSsTxwxrWmjCMPbLcr9ptigWVFgq8",
  "key32": "5SZmVLmmUodyZKKwz3UAvy4BF4xsj1oeYtiS5qQsdkh5k3uDrKHPUfMgAJWRFyHPLp2PvuSeL23YEtWTNYaY9ire"
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
