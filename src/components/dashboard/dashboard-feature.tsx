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
    "52iXqqYGYq4WnkNQJLBKWLoMyA8jrc9KjFFkYuyLFFhMn6TzvFafouyc3C4J7ZtSzzwi5j6E3pMo3RP5BNDsPzg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBerJWma4oAPRerq4zzUqyCN3xVRaHQJxHn1fXvLjXka6zP52uXoAoj8VG3pL83kAXJgvWUpDvCAravBw5uYnYq",
  "key1": "468EQ2BRZZEmaAFJDn6aXSKhXx2kPJ86RyQ7eSA3MLZn8H4Xb9hHdYir6rH8qEc9Ja4Rahqdqi89dnrNWhukBqzR",
  "key2": "2iqJEK7EYtavTdmKgyAGfijo3H7jno2HE6oufxhyRaEdDnE1esgBvzhKkGhbuck52qmp8pHEVvXt6tbWxAgK86kd",
  "key3": "2yNdJso5UTXQCpAxfuQhrk5bWhqmpq7ziGgvS1xUduumgJivmDvJn6HKiGMrEdGDaXf44GwG425pKm2gtkjAyGbq",
  "key4": "61Qh5HKA8btDEptKAvbHdZL4bhaG7dEze9LtwkNCFJhEfdqW55JBeRhNq8Y1x9KnaDpkUSSRPLXRfSYh5h1PtFea",
  "key5": "4TRRZna5DZekx2hrKxMJxojo8Q14zpDGFrJy6Pb4KCUPJ1uut8D6hr86YwxYAb79fu9tFRZpauCvQpj6ZR8gS9Bx",
  "key6": "2CSbirro4d8JwSy3EkHjWzc8onuXQft7yfx8fY2RY7PJ1Ct67DsCY4WLgJVG45MiVNTvgVUyGd5cAm8YvCS842Y2",
  "key7": "jhMUXFSvkpA7c8kQA3hP4fbwg1BDgDeKRX9NEGrQ1pPFZjPsqxMj3D3VXc5vVA3KZCXjP8zjd61jqDcpxaYPEMn",
  "key8": "3MCwDKorQ8K7w6P32uwdkTYsHDXtMZzEmDos97KFb4TvpzZmH1uiKyaeDjzge1x23wxQtw6ZvnMJh5CwB3y5iHEV",
  "key9": "4yCPV1S4R3pyMjL6yVi8S6hMbkUJRy58AcvRGvyiFcmgTVXSVSZ8n3VjkLUgGw5miV13ujUGkTaj8mLo8GYNeY5E",
  "key10": "NKdLSWujTT4eSEoNjun1tfNABYsDPJVJSoWtC524HDJHFtbYyU1USrjWeWooEp1DPz78dacWWGEJHwv3wp6LK65",
  "key11": "2oEeEfX7V5Y1e6VQMMDSRRqpx48WRJW6RyikgkDvVTvvdZRCvBw9EwdVUBchxA4UAntskiymA3s4PhcAFyzo6eFX",
  "key12": "4pyF42BR5HhLQVCmYk2TnGg32yCAcTcLdSVxwzTY7CyhVwDuYhc9ZQpo3K4KqaMtmksYGBWANebanNh1pQP4Dgad",
  "key13": "49LaqSfbBBWbXFC81dnpo2e5BLE7ZxSN7a9eohj8Ri8m4JM5SriHyfZYfEC4dG9wDTQVvQ5b6F3iFiv7WPoCzWFB",
  "key14": "4ZXGesHaqhuM1Q8MCPDJPwHkTZGV6iaGkZwn3ekU55cwpogSV9nuTeiAoYsNxFtdwogxH2yUwuG1oFhfKkZJn73W",
  "key15": "5sJpFvbGRKRtb4RGa8ofhDJmZNFtSvaPUy26nFTfk13yMBYTBs3FHdEZmZWAxous6FJAWRWUQYdnkobg3PyhE32A",
  "key16": "4g28ny4G9Z7psWbJu6TAXNHgHfxnW8tuZUci7Y6r5ZdLDu6pWnedWkuWVTnJKVEW7kKEyKVCGe5fdVTq2GBo8ta",
  "key17": "yUBfJ4uEAgm6hvEq8vcPqHLBwBL4kDLkpyQk8zDoWsBXaNmFGZxnSdWCcbvhHS23tFRiXCT7521LhPTcjfWxhjg",
  "key18": "5NwDsvhYW6VvXzBZ6922i4uT2CecBa66otce5vnemAzajfsYCqMnut1KphF3ri9Rzwdums3NUt4eFSR6vUsQcKc",
  "key19": "3x5DhzknwdC9ZhUEivZvdwmDGiJoBmkG5N9UsjtNKn5KhZPxgE6Sj4dRQ3B4adqz7CNMwzGdKv15upjK3aiC9umn",
  "key20": "419aF9rhZTZ5e9cj5a4eGwsEL296Uco2qsucbgP2EU5C6jJYfxExr1dShpsyVieHQCu3JZingUtaH2AvfD3VM7ro",
  "key21": "4imHhtWiniJRAxLjWwQty9ArVrMKdkx8xwvB7ft6tGD8AmahQfb9i1UTkgtu8WSk8oUasEGd5NVTWvsqB45hFt9S",
  "key22": "4ZrqnUFsHiA7qKUx772ZgFfPdzc969Cgw9ZpQhpFfCyGvyAcUW5Zn3VfiUApSfUu53mRhPH8MitEwFyyH8TPJz6a",
  "key23": "5w8HibEyouh22Tzf4ixDGvUCiM3QQEjVAg6VFfXyvoWpHs6LmKkUP7W13zQHHKexZZxjMoXzUUNGaDZBxuznxY1a",
  "key24": "kqDk3kP8xAtXRyaPJ6qHxXHFbWJUDqT1TF4GCqa1cgtaEn89jC8FY9pQLoNPuHvYMctyC3hM7qyEYdF1u2dC3LZ",
  "key25": "4H3Zcawa1i9UFNoT84WhnmymobCP6aSyNqnfgEGPhwCgGg1FEDUYrrGeNtBHTskQdesKQxzbrmuN4YDp3StocAT7",
  "key26": "3DabTQBDm8a5nwRc9zRmQbuVc1BETex3RsDXapU6k1FfsdX5JftjRNXzSaogiT6ohCnyrfwF6z9ZuXiQEsHT6HrT",
  "key27": "641HPLhghDsbU8S7PhtVRv4D8erhZbdXPHBxLdc2Q2XsNXJiYcoQYgFUvicac9wJS1c1XPHe4oMvjiuXXxyK6f4M",
  "key28": "3JqS93wu3oc8AN9vvPz6dtECqAQ1iiJgCgoJaPJ1BZVejGrWdzqxSrDGa97wTtAf678X2ejUrLtsUScPuZgrLXwG",
  "key29": "Hy95R1dVpQc8RUkjeA3rd4SwVbP714rk4G1EDgttsMV851gQ9Jd8kdcnKktj3Svk6p6agxCkMrSFu8oZa3y2dGg",
  "key30": "UHi2MaV1vAERyzkbQ2KbedHKq8uYQiypGvsuTPX5gSKJmRi4sZXLYekf7JDSYj8aVfU29hpcH5t4mmD772bRe5T",
  "key31": "xh1noSq3XynhHjkjUERmL6pHJWs3FmddcMRX7318JMUdjtvrw4dXiP7RLLVwKiTwkWYFfp2174wPZzPc2Q21KvH",
  "key32": "4ndNrLip5KpHT87QsqoBjwoPRMakTvN6eeQfVHLvSkeWtFGpcGM7jWkLH8awpqzLhWhoBLcfV3Nj1rwdESnEE59t",
  "key33": "25o3MyDYUitiijrSfYoHFZ51Bk9pLXiQWYooSaCaww2AX4Hqe2Mpwn1ff5fY2XFN22MFqMVMVa7gdJ78MpVFAjXF"
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
