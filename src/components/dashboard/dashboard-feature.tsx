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
    "vJeSfxwtUE7LZmbHy1eiTuCQ7S8pihKBHq6Tog8XkgnUQb9hmQFiZ3ZagTjC7Pp5H9Dg8XohmfszfV3g2U3urUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhCvh9tapPpCGcqobYZB3Gj6ifCpGX7w6qKjK5hUkD1j9fX7ESTa5t6oedxvYbfKoLMi6RmgDynF9vY89zAt5aS",
  "key1": "4rUpomtKtEhhkEA4tjoybB66kiQeopfkRUgmC3QvcjvpqgS7B5UMfWwHBhMrG3aAatHtigxgVWZJv5rbgn4LGLpf",
  "key2": "31UyUjsBgxGjBDz9N34tucYjU8TzvNqMFS81xwRydyWUiYFxKzKGshRVnP5nmPtSHkYbxREmW6KSa1tCYh3BtB1g",
  "key3": "4VAwUp1NYTQjuAFeHx7PcMJJkgeqk3nme9bArkw4dcg94j7xvdy8ZDo7A8AowaqvaYx9VTyKqEXPrArEtmf6ZfNQ",
  "key4": "36amZsVfqFRxP1pajKvifSxzPU6QRkfuqYoE6Wah1enctuv6iZQrpkus9D5hY8T8u81jbZy7EaSSMMyXRXYT4ji8",
  "key5": "48uRDeyDssusxC2j7KpiRVVVZnn1tVUDyMx8ScHfqTEy6khzHjZpNL9ynA6SbQgHyjHLyPqdw41FatBdzeVzQAvp",
  "key6": "2rXvmn7DRhKxGYhHaEnuuGyMJRFPzM8i6Qs2FLLZPfPMYjwszPTNFwv21NoyA63cnHYGPpo6mmJewx7LN294Xj9V",
  "key7": "3BwMsTS65r3SYj2yggW4DS2wUq1usSg9DTbGcYpwHDg4GyGfs9rcXV8kiYfksKNA3TTC6zZnWTYM2WJPV5rLMFhe",
  "key8": "2NG23ES8njXpqZCCkdeWKRDk4UsqQARj4M8s3wB87TNQfjDVUUkDptAstDQxfH3hm8N7fnXwuSVnzaBTWasS1JZq",
  "key9": "3NkwEfzekASnPFVF8u9G9HZ8JmzxpnWPDEye6UkfLfoTJEYjtoa5XUV1BCihZfANjFu9B5Gei94EKpT2pzmJBvgm",
  "key10": "2YvibLRCG2YpU3ZpREfndYTN79f57EbQHzu4GcjV3Yk7EeRqtG99KR96SbYk2hCtvsh1TwhY8GNDJGWJK8QFrWW3",
  "key11": "4BSfEhHL9MJ8cWEuzpxzaDFZm5X6WWasF7CHRpGLxLSQcXStM4SAapq94iaC3HwbXd5cnhQ77AifQiUPajE9H3eA",
  "key12": "37AwkxS5QAQAo36bttWrbStNVPxog4rofyvvrcSyPViCAA2Tmp3EyvSSGdmyFzHLKZmHWgwBNQK9oLYX2zyfZwKp",
  "key13": "3iD3TYtUVK66i5ZJMxtkJnVJ5iR55SDL3eyft1C6TRkx4bxxHtyBrX2nqsAbQyZw3DfyzuqXC5XtJtrfT21fY9Vc",
  "key14": "4CqMn9TqUunMoG6GLPni1Xd2upA1UaAo1gA44H2CHfFGAT2w7bhhGiG5NCJuuAuyN93GQSydwHKzyDuxfQ22hTAG",
  "key15": "2ctUv1h7TjrUj4m8iMpxv9KQRqxRmUgvoi5Q7Q4Nuxv9hWE7GFKaH4qb7pZxNqRnzKmCpvZW5ixNmjgHzPHaaBCg",
  "key16": "2HmxH3kQwn9qrRKm8jWYq7UCNuJ8iXms2j3RS9w1Ua9mBAz3qU8XTVNqhiSeqmP88hYFgrDrrPq89RRaBy5fxfMG",
  "key17": "37oDDRqyoHjWVBPJbXozEEMyoq7QD5z3SCwbEazW9VBECiaKL4ffVPRRsXrY12fVDEqMaNvehyKeow1X7Cp3xwT8",
  "key18": "3V8TsdPAcAwZodXuw3awFRBhfxgscfrDq7s7x7xfboVBYP1hSwSTKSfbfHzPmbjqKSqmtobtCTCnW5eVy74n5EYi",
  "key19": "22CFsrYZSH8wkViJk2V3mvYon3ktuiK5NvSJcZ4eQ2WUGWuZnrmcnHo8UYNhq6JrhEhHDxezLaJMbJNBWok72qBW",
  "key20": "2m9nxrgw2siYBQkfeiuCjAATLZkmRcoBv37hBupkaDjJpmjP32thf7Gr5KVpA1bH21PtSAzpugXHWgL6gDzNu51r",
  "key21": "4AHGrpiB6kVVFW5gB1uunaKifDWEQpMwrFpZ1rSkcXXbmkUPcpRvBhf931TQD8M4CsgT7QLK3aiReM3QAvbtXnPp",
  "key22": "2q9qnB4LccL7E1aWGGTBFetinqsjm5nqD3c4TCLxAD2jeAEDn741ubNpbCzUbxcih6xKXGjH1FsN2STfCr7sa34a",
  "key23": "3cyy7FYNaGfk1MarvFUG3fdCE9jAskreFnpKKr26Ek5866Q1VVtAJXdUx3WizHnAhZbiBizrNgWRrQyLQH5LmXgy",
  "key24": "52A6Mvc16sew3NAHfR4TxXeZiTmEEbP9ytdxjSrqjoZ4qgWmBtnkbP36VZNSPiPRb7vahxAzSsHg1NBnzQL3c4HD",
  "key25": "2hJCDqPFWqKjYiTCcHFx4KYjXNXc1ixmthXhaPRRt5rj5p6AFwii12kg6jxfCWxcMe17ropLQJS77yMZ4y8N8Ph5",
  "key26": "4a4ksWALNcx6mbDiieRgEQFiMPFHxZgX5uWKkr59DzYPDM5CVNq2vwiRcb6Hqdzv7MqE8kgTZTozxK8AfGzJ6JmD",
  "key27": "3VKCTCmQx7yaMhjbsS5ciae6aa6nGMELJQe1ffvSPr4BQQqmTe1LidV4ByC2gHzapajS79EbcWYvSmoBv6ht5gEa",
  "key28": "3pJ3dxC32B67qLXkapcNPCEFGo27vBMYdSAevPzTyKEMhGh2kaFsm61LwKD5TsF4USCjyN7eC5rmWdgSHfAcstd1",
  "key29": "wM9oqBiC8FmZAJB9k6uVMGEzAkE7oDXZJQrDF3c3UgAJ5sNU2UrQp1ks4V8ZoD6s42FBvEfS3M6k4JJS4LkDvBg",
  "key30": "55MkxK1x4bESDrDWWHYzjyUFzvcpiJpTaasdBufsBqV5MYBADosPhWQc4xFQqhSxCbi7oP9T5XWBMGGs9VPryPBe",
  "key31": "5u3d8Qe4mmHMNb7gPdaFgMCW5Dc4k3bPPivEW1BjN299rc4xWEmTAb48SieWk1qd9CNfnsr9Noi77RS3Zu6kTUzJ",
  "key32": "5DcqSKxTGvRfVSDqoRGjiUfPE3QAxXsQxs6NJNvxR8vdUPiCmsogBMvg1ogfEDscw98Sh9EdyubyT78uLZxJcQ7B",
  "key33": "37Y7RFfL5wjpoj8hB5aZtESR32dCfovY9HrWfUXHGa1N7Yt4GQFfahYC77MWdNozb5yLkdhCiPirMfRMVyDcuWrz",
  "key34": "5jk2RoCL2NcLmxsNq9FePdWhgYWCyk1a2RpmAc7KxtxzYoVKJxKXaTvfD3FzXRXN4bU4zmtVKqJwHZSGFvbWLpGj",
  "key35": "4we4y3Z2KPS2aArRW7E3PjdZRF1gtd6DeQA6crQYPdMDKqEMvUXW3ePpseoAk98J46Waw9QRTdfS2hD7Fun9ijAN"
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
