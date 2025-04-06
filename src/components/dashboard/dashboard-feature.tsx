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
    "3bxMUQ3eZBcqFBSPur8RD5AZQhwb7NbxUR4nNrzd7N81nm3JRh9WyLfnzj9AJXAkGyubCuT7BpvNZGV14vdDnua6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dscVATQc2UVX2xQ2gZZk9rvdwEfr9zj7MHzpQSR3qM4QfSYdee5Vikete7Sxubm9WqWw9T7qzacGK2U8uzWSJod",
  "key1": "4UDerogidcBh7DMJb2mQ9n3X1BNcJZEoM78GX9fTEBTB47w5GjQfM4b4NXmyoAuUKrkhfELJxUTuRFRnPp85GQs",
  "key2": "3ac9UDqsWLZ1wrTsxgYi6MB4faC9oyCUBuyAynsJRvxCnyoWMAYhuC6s6CKcidbriEVc2iGZkfhWfNhDn5qUV1eZ",
  "key3": "3Beoj2mZ57NtdBzT9mfq8J6G2WgaTenvMTih8FDxTtxJ5bp6NF2Zvcq4Ch9Y7AXXWnWFPHTLtwc7Aah6FmGLLE1x",
  "key4": "2Mo6bFMAKunYrreXSWAq9XpYb4KmAnR5FMYNVFxgPmuYm4z52FkAoUu3U9jfC8DB3DPjTL253UgY2KpbKPHhNSJC",
  "key5": "674TJYUU2LNYgVsosWjU4CUBBpxwSkk4HMPASMQyaXKaJvwmt3RGxnFuKR97U6uPS8q3duEYTiMee2yZTv8o28QX",
  "key6": "4RKrQXYbiXD6CHLLduXVtKuEUBgDorEHSMZcLkBMqttmSXtLjLdGY9GmVigMZZAdt6XtLsPi3YKcXUhUdcL1D67u",
  "key7": "23KbkBMxbF45sCdj2w5f9iN1Biq8NocXzd2sTS66cb2U4uAZTAk45AccJmDrzVkZjY8XXVdoEAQWzDm8qm6nWon8",
  "key8": "PLz86QGKQN6PZWfam2xpuZE8JS76RRQbLVmizCxfya5WG8BewY8FQzGST41DfqP7ZSVLP12ykE7b9WWsvi5MTWB",
  "key9": "ezZSNgg5keVaQnM9BVeMVnAeDHYrgBjXdiXJtdBpZ5EpTpSq5rHzVkuYJ7Afe3vnAE1hSFRPe6ys4CfCshVeqnV",
  "key10": "u6Grh5fCj2EsdKdEuzbuHkUs2MieZgw9MyFNemTcwsqgSYkwBipHEghM1U3p3wAP7y6Y5bxedRVnRGve2XyAMZK",
  "key11": "5UGXCPT3ZiYGSWyaRG4fNnrstYW1ZY4Li1PMRZn48ukrZPNC5rqrVx79NXjP1r4sAXJoNvGHiuBDPcdcBG3q7aEM",
  "key12": "4stsPTmq2rWEpJnjEJ3QgQ1UZaooVrpWSgrjokimGwMzYuCNsTRMFYeMDpgBMYXg329QjrMea2cWsSDQRy3hLnjZ",
  "key13": "4M4c2y71ykcfXGqpMSrQU5viZDS8a8oSFzGVWeYk6AkN8QCgYSJxFqhXnpbsoJ2L5jL33yaF8gYYGrPfE3gEaBLg",
  "key14": "57SeGaAsEpeYbBfmc445BeamMh8ZmKmKcSEtJMt3QFEUXzJGm4ik5RAiWkfnWr9UXgmsJnxT7eFXxcD3mxPCNffb",
  "key15": "2VEMBc9oNMh8tjBcH72XHi9pLW23CRgRZaMNiKUTn2kstMBVdG5Vh4kZthspuhp6DtDtN8wcVmwxUNxmBKnjrheq",
  "key16": "5Q6fEXC8eqAmMPo996JSroDRWjmDLfJT6DRRSUrpBVtLcxEVenHbZxjHpPt6BH1mfegH5KEbXrwNeD6vAbvDX8WZ",
  "key17": "59dM9RowQkmwWnh2DjtXLtbCmz3QzX1EKiqBvMzwosFJDuGej9B1Woh1kaJzZ9XwnEodt8eeXY4k35jSyRsEBD2V",
  "key18": "2f3kpSVokYE1DVhVBdfkdv48bjPLwGxfSX4fGnK4Wkoe4iMf6wYrRW5MxJGe6oerg7zgaxLJqRe8AC9zkcvFAK23",
  "key19": "2zfh1jx9jwqrmGGQzH7pmNMvp84UhQffhu6dERoEyKZ6vJx5PUVV2VTAFd4gjMAzUrhkj5L6Mpos9nS9VtjHexKh",
  "key20": "5JxdWP3WinCJCcWM4LYvgYqD9JwYiVFeKvWSp7tk8W6tJn8Fp2WHDF7cwNmW47pVsJyvqVQHkgjPnV2nscJ72rU1",
  "key21": "SfnSJyYwTP17hMUsoUYU82iQK2LcGXXoG2ZhYFTMWpJnBTbzXrbG9WDQ2aCXm7eUPJBz8Kyp1WJhaHgCqg6esFi",
  "key22": "4BXCBePXTuQcqrubmdGqkpK4tB18UytAP85DKf3F5Yi2E4Cst7FRRNsABWkykvCVem1LmJ23qcL2Q9CVnAdF3AXw",
  "key23": "39USrgihYW8b5zMyQdrC5B9cdMkRB1Xz8qxJJ9vZnkKGnuGdzR8yPwdCTzx7PPKsZpieVSx3hAukS5NLLTDWdKZz",
  "key24": "2NqTBkBSKjLMhq6nVyyMoH4qU77UeLabmB6mbLJ7k2qJqdMAR6hnQ8Yvx7PbbWNf4SFsNEjLo83M4GrY37cdFkS1",
  "key25": "4xQdv7BU1ZAjLvuiFGmsu2dKjA48q448pEiLNBArDadJqBjKVMP23kXewmRWMwwk2oyekkxSWe7pqHHiPw3sGJ6f",
  "key26": "5FUDCUUTQMeJLuz5msFcKGxnR12Y3aGRPXLKAndcPdBKGCy6FzeGAfhjA7bYmDfCGbDJRp62qnMAoDmTMZV9WgA",
  "key27": "3EuUspQP9JA2A71MiPS2kRZQuffYY8zPoNHXzrPXvLpo5JH8daXgD3rMSpanryW16XztQTxnzbNN8gKLVNGbKr7i",
  "key28": "32fTbKqMxTCS2PDtvUGu6AWfWBkgsfCyjMH97sq1KQsbQGYFnCoFibCUpcQyf4hmpA9MFCDAdYLFpR4ov7DmhZyy",
  "key29": "2PBftTHgGBq1qrHdStJJZf9tskc4s1VFido4ss52E6Sz477P8JeuT3rRw36t4zkJAJQ61aCemRn1y6L3F3gKUrov",
  "key30": "238LArnumi2hAqk6vZjNVTZqvGD1HPuuhGFu4UQ3XgyfvcqrPiMDSJ9uYv7MLmxBgDu9VPkgvfKg2E53v6B68rZP",
  "key31": "z2c3p8isb7Q2DoXEmnU3D6pLs9Tp9hZJ2eBZj7ejusuAfRvGdDq8ACPVXyzwCR23xQBKPn2EEKGH7rCHfCvjmGr",
  "key32": "5yu59W4f9HnBgXsojBDrbz9esUqihRfT6ffQAws5mKR87X3EvRHTS4JeysdzQVyxcnrDcCZ7o7mqYPnp5LRLdfAg",
  "key33": "3bDwE9zki8TS3vmjBC54uj4ZuLMoG4b2d6VxJxkMeZA6GD48HX3Enn9E1kb8DBKiXegFBtTxKvds2PKFh2TRB1A3",
  "key34": "4E71qiJzZNF7FBuznGiWdCnWPDXi3tbQjHdMV2USabHHgCyj89pgtdNAxB1RNhvE3FjjBN1xmNUoL5JWXb8BjeZo",
  "key35": "64GcybRF9goarpumUWNWRdrwmJs6fbNW6bZFRsrskTAtvYD1BpDHEmB397FAZrj5kNUBB5z7RrxhALfA5jXttV7p",
  "key36": "yEnC2ZurJ58bYh59QGUgNTEc87yfC2BgfhPGsVZfiaZNSH6mJBcqnQYJX9qYdQeSqARwkLJiu2isexA2ipJUk1F",
  "key37": "QRWY1yrUTKGVvvhHdSAXe49owxREwnyDKx1XYJNsdD8CsXkDiaAehGXNxPXFz56sVTnheYAbwyHttjxQP61c2mc",
  "key38": "4YYvqzFMGV8knhTdjG7Bs3WajXVmnLLC1N1jY6Mu9PbrzarVnUBZTcHkuJ4nPjyavX9uGHkDPRYZFsqxZcC1TUyf",
  "key39": "gV2MiK7fyU6erPN7LiRayL7QdvVDqdFFjb7UQk4HNMwKp4XAJc6gcm9Jgmr8jDVpMyCmTXvrug79KXpznQHSq6o",
  "key40": "2M4Dp1P1ARkeuSMLXmoUVvXSd5k3F3BWULDQWHZURD8tWHUxEKV67HmhMc2gmsZVsmxb4Pkci6fKk2BVq7UVYLYR",
  "key41": "xT9YMddxgwfXVfP4dAfgFLq1LN6WKpu9vPR5M75vn7JzDLNwc3K7yYi1nxuwkkkvwWLWoJdQH2PREWfd2B5zJsp",
  "key42": "2HwQQpRTC1nCbc49zDekKZJ5rp59zLQGfz6tdd42HhaUw8f3LbRxCdjwM7cEo535gMKqxsnFyu4mLooTcUzWYs6X",
  "key43": "GJkv9yfGbE5XpophhtE4hfpS5RzoQFuU9LtwPfs7pqSA1FnuhBziWSkmJ8LFag1M8o4XQPQ5evWekpcicWPE4Lu",
  "key44": "53GfBCUHtdHJGSc7NXp9VJ1crXTXboxcG9rP7GB5aqZMGun3Jqk9xVdQdkVaCggN7dELYybEh3Qmqec2cZfxiNLG",
  "key45": "2MVcZTxfbyKX3uym2sXr9jmJEqHYaxLeiw6NtKMBZ3coExTbZpS3E4NtgZrTbYPt2cfYp2YyPvYY2gZrs8AdVKPX",
  "key46": "4tUJM8j3YzHVesNhj3sei3tY8gmzrfnSNEahaqkt9Fq2CvqksF2Z6ezMh7yqCniZQ4i5TWHLYPFm2QKCRjZ51u6B"
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
