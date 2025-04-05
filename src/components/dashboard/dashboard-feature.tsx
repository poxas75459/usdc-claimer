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
    "4v6V8VfKqwxvuQ92GuzGKJWwyXuUY6jq5A66ogNJvVuBm5j8AC8x8Kie1ai2yxxMCnHPy7JXq4srRC2U11SfdC1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYtEVHuhr7eZxQaraYgKU85eyX7QduBT8R2CmoVyMC3fYphR2UUyJhcEVkXyrPib5NQVg6pwNHRuXc7yQ6q81HP",
  "key1": "5u5ZZqM6xFex4NxC2giERVGUFKX4wnQH3MwZZ2EdiV7Rrk8HfmifrxNwjMxGFNbHUekyudoXhrxz2yGSadbzj5Br",
  "key2": "2efJ7j9oCe6p7vMGrhNPqued8zJvjFLKsoYSzzJ9Gmn3BXBt2v28JxqhvuGcv4N3moSc1e3cutk6WdzztQxpZcAH",
  "key3": "5vm1LDN6RU5YM2N1Q747LQKMeXoqUK3HArPjEwWvGB3y6oSpxBihKJQni7KAgWxFm3xfs4eUAXdFKk6Eh87kkiPc",
  "key4": "5eRs8ja8SzAm1ZLcSfh17qG2YhDpihRDihVWbs357nDdBBKYGcLhtkZF7Y5ZmWAQHmZZ8bmSSCwkqBz14hEtxcgs",
  "key5": "4j53D1JbEq7g3tUKHGFzG4hWwY6H4TrtwE2YeBakdNF7aM9eaytJ6awaRXNsAC26HkqmXThQX7z4oHRxJ9XVtag5",
  "key6": "2qh8VMBxdWt9MNsA14MyBb5wJHR69c5gaFVh1mDhmb1JHV2s3xFBvJbDANERoFNQxARWf5eqfAH6CKR7mvWELFp3",
  "key7": "4no2uJKmMSQKcus7wH8pMZH6XkgioJnAyqeGJfXu19yoAJkLTQYzq8BtXjhuGuwexXxQ3Xw3VpDNEEbA28HD4tAf",
  "key8": "2t5Zd8XLBqFq9xxJ7zr2ZZgUzfhHmN9zZDSuUxh7dZRZ6um4ngACgbysSAQcZsTDhBb5dvqVuURMy2C7ZwLXQ2Gh",
  "key9": "3GREbXcEr3DDyXcVGAeMbxaa1RdYkzoMo6rSAuXP7cKjcZxfZa12atMPj5cNZELf2XBaodkeUSV6MQtmBZoM3uMP",
  "key10": "4xjD4fbXXQsQkq86ZjCTJe2VZCUCwcSVjmv2TGiWndLZjrPULx6k81PmFqoc6BcRBnpMBMhhTRPu6B5xoXoSivWd",
  "key11": "5a1ifbWXM4LRPjumL9LozAdavDU19sL3oM2RHybNu622CgNzKBuQcGK4ixhPfG1z9CZQNRLoqoZisPd8b4Ztb5kj",
  "key12": "24jDbgRdBPfi6vkkhsfGVQs3numqV9jPSodK4eiJFB3R2tAcCizLsKx6aXTehHz7Wgc3udY6zFAeJw7Z2hq6RBFL",
  "key13": "5TuD7n6sgwD9oEQRT76mHiu2g4uadKwuMmr4Qx1PfgBp81GyPU9XLqyUsbmZGsLZHmt12WhA3saeHtExajGPD5Pi",
  "key14": "5ZY1Edt1rVrZPG99HZtrizTFko3V8FxTj8pbLENZrRi3rpSqfhBVcvJSbJJgoFiYoXZFRp7W7Yze38uiXpL25wAg",
  "key15": "5V7Ld35fKrWMzNg3xcw3J5Fdo8UtvvtrV3DREXmGjgckUHvit9qUaiPrEJ91ngHotehyamZH7p7qKpKpwzook3Ds",
  "key16": "3dnm6NKb7Xk4A46k42N1Qzz7uY6ZoHtjgxnbEzhoFd4nmmymEpUwb8qVnJimiax3EXTCM5swvbyJ3e4MbsB6P36K",
  "key17": "3LCEWXXaKuDxxiSPB5VC6Zgc23yqydbbMySnsaQ2r3KDQzctDCbQ81QRPEYUbX3GvM1ySn9QmkkK2zFLQ3amwVG8",
  "key18": "vZYB4GrWgV6ijvq3zUkRPT5nSGAuLRytvRHzMZUjKqA67R9XYigQu1sGq96XEZnMnahULkukCykkgbL5CyrjL1E",
  "key19": "5S6ZFbjEAMHomo6zNdaXoM29NmYrRuREbV2CMi31a3DH68rSKUKjrgYx4x2VShNNwLoQRTNxVS18XdqnUk5igS9U",
  "key20": "PTG3N2qiLz2eKy78vBMeaz1zZrnKdtoPbcS3hpURQ5pxLBz4NMLjQt19S77he2YDeVpC5WgCa5y3h4r5E7Y2uqT",
  "key21": "2sin9MkWLKtcsGKvZ6dbRVnbpP7bX6vAofs1gdnaTqadypuHiJ1ErfxVCEeRFScUZ2WiBB4damcKbZcQdtab89Sn",
  "key22": "46F75jam8RxW5GvdBCj9W49zPJgi1PFawF5iBZqoBTyciau3uFrNaKbZHJKQhjyduxg3YpoDE9hLfJCmrqtd6CxK",
  "key23": "5Yvc5set4R5M38yqwwPtwkg15ftM4wDm7rGWDRuG7K7BpAczpZy2uuone85ATDu8sMApVTToDmEYzqUHvDCKw6Jj",
  "key24": "5fgxKC3VkrN8RojmnbccMLtdpfEsMtwvRTp4G7XA4LhE9fiXMTUxi6d6PzYiEE9DkfeKDvch4DYcnHqrcrn7V21p",
  "key25": "5QTRmC9qfD7wEChFJu58ph8yfHegokSkmvc98a6qJA6GZCFdcmCdNX91VBSK3arPJ8LpLQqzLNgCY8BU153Gk7wt",
  "key26": "5HEPfo8wGZaT7Y165aknU89jPcNnh7UaVmUfmaAyEXJBn69CT4vn45Q2W4BGLp5f1Ss36kwm2cSvUNY3GNDyVnz8",
  "key27": "5dh11YuKk9XcgmEZfjFraXCWVZ4QVmp9p9WpJBoYArzXe5Cjk8hPUYqUwNANakCvFXD1A7kGHPg9r3KhQBtWvymp",
  "key28": "4ueAUsS7HyeP4CAeQ5pzz84Wu72FRF1gcKzcfzKQmPUS8LgE5b45SzHXLDXageBgPJ9K6XF2XDQ9W3ety3s1cDQ7",
  "key29": "3wkUymvnQxupRFU4QGkdavrcSehx5xEhoR5f7DS1guGLt5oxf9tbrmpbrqNiqaea5f1rj2AnwxgD1U1UyqXBiami",
  "key30": "3ULP91Mudwd726tGURCTBXHNXcCkRYnfyn8oDMboAbvRKoSj2EuZNnECGPNoodzULH68ekLAQjPaw5eCCdFL7SDb",
  "key31": "uGLJ3s58vzCWqCa5r4tHkDPGeHp7x45h5yA81pPFjiFh9e7UuGt61ZQwye8ibjdSRRH1kWgBA9Bm2a4qLmrae4o"
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
