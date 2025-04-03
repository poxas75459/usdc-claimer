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
    "2QFn1cNpqVj5DDtEZvdXNZFA85JfJohhVqngoAqKNsbLsF9D6b65AgM3rMmUE5gHqRoXgeh8rKRsf9ouMVsUjofc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdDokgBQy7aJQbJvRoUhru9kLuiFe4555XtqxiTq1muRwGGRnSoEtUv5ozB7S5Ppsyi6SAVyHm6pT5DmzwkVhKC",
  "key1": "5nH9f7qJ99CdCFBM7FKUozKyy2zRqMMrCAQbQgnLvsRv1fPUjKGFrVrHmdg35A8ajwQXCiXM8U7cHA7uJg8SLSGR",
  "key2": "5MS3NRwyaybXk4QijHD9eS6hKpfeRhfNyddvkdmk4aukKyXMUfCtT4Tj2bZYa9yX3TSfQF7pVMwjpJpBH97aUKCN",
  "key3": "3LFXjviZCwr1Ek2uwEc3p5fAM5aCMQDp1CyTnJRAJGJ3i4P5XM7GeWXauwJsnDnPU522YLgd5UWfLMMv59LNyRve",
  "key4": "ey35339ocS6g8Mtk5xuoXqYZKgHAHDE8PpFE6XLCFWbS8ocMuSopWUW3ZeyPaGj1dgwkPPBHRa666SKyBnLrzN3",
  "key5": "4Kt47UsUVqDJMAJR9xhxxMvxheWVkgvBfAKzqCxiZRJiAoxjoGWT538ArgPT5yWSxCW2haQfpep8rZiHSaVeU9SK",
  "key6": "2ycbFKLUk9KbmExfPakBUL8q35DyJyUBSpLLRvUPPoeq8YNkagXXCCEixcTnq8eXcDwaNgtjmpbsqU1cjkCooToV",
  "key7": "2WSuDUsmXSP2yteZqaGKmXrW3Q3RvYwwoWGNtKnm5aDr1MX5HGPMsVfx5vpu2tkvnTtg3cHXxmC7cwAaA6UZ4jUT",
  "key8": "2fkg6YzKzPvYoALnDsBHh7mV1XjbaBKpkRRUp11ptV7quKn1rdP2QQiERfKWryETSJsC2okrzq4Y2Z4z4zntRikT",
  "key9": "2EVNHbf9ZPDKYtLShU3xwZ52gkAfoTJsFqcBEqHv9fgm5HZZBqHWVmqj83KTa1N4kJ522HBtAzPWTxLm366adsvV",
  "key10": "2b3irxpp1V3Vawc5kEqK8GJ7zDuWyN1UBb78YWnhKWf48FXp41nYUv6YBvseDZLrHzJB5Eu35v2qDs9w5PDzb2Lg",
  "key11": "2qDaMJbVqdbKCaLMjyo1H5W1NKoVwHkcpGfKajN9awqo4WEHjD9WzQa8dcJdRQ7j9VrfT7mx4ribhvnKycz35WoF",
  "key12": "2Kif8WvQV5sm2KKZWkc4VAPwjZGueK7qCpaQceSeaR2UoMc8vKpoX2pC9N7WwJHE7iCn5ojoVLLnZ6fefRvXTqVd",
  "key13": "3skR3y37F2SezKyWbQqb9wVdYeoiJHwFaDLirHFvGcuhWtgG1JC7YkzYEcGHQwJKoq1V3Yq6UCVmaxpgPPCbmFW5",
  "key14": "3d91dSpgWAkAApQrgxDcnf1YM1BJLBAWo8cQd5BkKznSoHpaH5Df1EdtjPt2opzh1EcS4uhuz8BS9gXYStjzBLZK",
  "key15": "h5yA7tVAZYmvyYRS3PUPe1SRUtiBeMpP5UvEn7zcxAQ1FtJ26WnjSFjTsfC9o5zWfrCXa1hAzXgQQUcxwgLMstH",
  "key16": "2brTUVJt3CcF7fL8khu6pTmRpbR3ZS63vNRfdAGREAs4KCCSatyhWMv1wtKWsVwjRpK3ixG1XSJKZMMXjgsEDyWi",
  "key17": "5scd2qc49zAfGCb38Q7pTkTYD3F7G5qZFsrRVpqTWG2CkXbuedWC4dXFdAxVcrMCpXx5f2bvmeBQVrEMhHLrjviE",
  "key18": "5yHPaJiBciSjnXPVFy417TAeb8saFfgksTt5NBEijmVrq8hvogUGtCeEBW8naHuK8n94mTLQ1LDUQCu9xetFhcsb",
  "key19": "34oaqnaVNDYoeRKFv3maS9w9F2CtZU2gdgMWAqLK7N91L2BJFb6TmcrNjZnKogDzzw1pTAZWAc3coKt2pSj7jBhX",
  "key20": "5a8tHG3fvDcP3rzwGzRGBTZV5vtCfbLroALXjhBRqyMwbgyPYWQbKmMpZQnheBTCZVqT6VyvmE5ywVnP6fLVRSr",
  "key21": "4ka8noVJd94iBT42SLArDrd4zxhT5AtnLRcz7QC76me1W29UPUBD8kcnQdvQFaAP1yLUptjezoUhcx32QxPjWoWV",
  "key22": "eE7Vvx5cFzKhfs4UiwDnJNxEiUjt5HpmiAYK6yvhY5j6bTgNDuqq41n4z5T8JPkBGWwHkzwKZsn2BorbLDzwVJX",
  "key23": "3XHiyKGJri68jfJ3bqNDcqEZuYx7hUpbT91d5nKAu6mGAC5fwp5Vhys21cMmqQU5YkDmgQtE3w76s5b6nANSCBmj",
  "key24": "R6eQQxA31B6q4zVbvN7bemxSaCGCsuwqpqgciG5DBuxywQ1TYP9QEL3wG6TLrmqiWZk3FDmQGViKuCeTb3Lsh4q",
  "key25": "2u4WhNtfM6VEu7T1N7oeK41LxgnRbDu81TC5if6a6gMWV31EKVzdNUfaFTSzQ7hxuUTzRuSZ21VvucmcMsfCGJNx",
  "key26": "3Hx1xHxFuWfhwyV8LXeepe1u5jm6Yd2j1yCFb9dy1A7RJNG3LZuPaHD9Ds481PyFCDqXFfeEwBpoMFBhS4XkQcFZ",
  "key27": "5Bh1AwFZezx5dHagGdSdN1MLoGtumYm8Fgx2BbH52Ehcnkoa4vfEHJPau8Cb16yTqRtx72ma2k3YytsrNr47tYr3",
  "key28": "4wHfXqj7hzqgVX4ZRoBFcxV78ZSWhHR6SbN9x8RCF442ik8C1sjaeoqTTkueTR1McYGtNE5ntjPbbvit2tZXu5RZ",
  "key29": "qcKQLjxtm6hKPrmyeorUq4Src5HEHYuE7YjzzLMS83HZrRBFFhCb21FWpzWQQXDNLmG6iAksWzfvPYPN2FiNaQh",
  "key30": "4aLKTmG6nyJ1GyMgovYdZVi1tfgV4Df6cyLwg1BY1QekoUwAHDQKCTVPyXBJVvADMaT84LTSw6MhY2jY54nu6H7d",
  "key31": "3aioSQUkXzr2X15ZCkKR62fpSFJJyz6KMrQrJL2TCWTqVayJMpXFnATa39fJpk4gT4yTd43FT3GY6NsQY3uxte4u",
  "key32": "2BVkSFdJxa3b718LoCUPXVUgaQQBvkD6Tfcbx3PyNw5NnZs5zE3gMXeJcUUkr9aFEmZuEMopzy5ouBALzJwU16Jj",
  "key33": "2QYyP4fQHbgMgt7n8i53Wunho7o94iTDTuikT7QCAaWfXDWqWqzsAbTJ8FGHiDACSBioeixQtSE7dp6Q4uUGYwpN",
  "key34": "65xUN7kJdGCPsNeCobUpUatTgWKSw8xZdJ7uyftnZ2iU1e9vtaAYuyhAJWHZsqRyhZPDWHaHrLepnFQSqDmrf6tL",
  "key35": "WC4SPiJH1xqU3y7roHDq3y6jmyG2nARwXGDzXrgyJ9JENp7yVA75jKvBirX2brzQqZSUFbGoTzJ87Yc8VXxca93",
  "key36": "62hu8SQv4yF2yXDPwU4KRtKpZHPq2M39FfZoyXgBL2RSn96npLoKLVJNDbcFG23ccTUHMqSAwkipMnDQJ4NrRFcd",
  "key37": "4uC881x3qRVzWRsrLPoYRwfWbNUqLpXQnRz5ya2Hsej73KXCqU4fr1YyYmoJQdrVWFaUAfxSvyK1EKhiNWtMvgzF",
  "key38": "5ccm54jj1GsHZEPMcCs57XddCwopywWFMDdmPseXh9TKNspqGRTRmcu5ZXFmiY9veandc9nJvrxWKSLqjqgoPgfe",
  "key39": "L9DjLt13NmxcQh6rku66c5GjXmZfqeMBvFuUDNF4WVL1oaamuXugkABicvUp8VqsyUMD2YXhxYA3Wbr8WFDJp1w",
  "key40": "5wFq5dG6x7VrJteo2tA8WogN852w7pBEQ3nhrZMZR7HyGS1z4PMK3dKnsntyBBc7gT8WsJJuUtR93iUBVnG2evKB",
  "key41": "2BUWeVPx73dLEruVP2w45rziGWwJQGagQzi2HHkTfEHUKLAUcQr12k3DWBX1hic7C5ozNddhuQ68EyDXuymGnpNv"
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
