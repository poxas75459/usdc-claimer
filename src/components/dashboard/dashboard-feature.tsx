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
    "5okk2kZVoF2T4AwvBTZQQHYyBDYdz6y5wXwyRNsjEDnJqz3mxfTnhd6vJrfpC2muyzxRRiX84gF6LYq9SwrJdDg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4sWTzYo2fiNt2Ca7y8vmL5DbLWcF66hhzPGkCqBmKJ9MjGErh78TMdobJKx6BQxetYferFx7E46n5gN1TNJgYA",
  "key1": "48szBPf6RYmJj3JKZnY1HtLpTRLx74b14841QJscAiUkqgCKsguid9WwU2TJgZoedyDvLHn8NcDrz5X3CdUCPB5G",
  "key2": "5sPaJWigs1z3NVLsLmx95rFkK4RBXnQNvvESf8pXhVtyYm3XxivwVowU7c5oq9XyEQYkkohRhdx9uUdWmASG3J3p",
  "key3": "5a8wSwsDUAmk2PGc8EbcxAkK4p3LyECTW1Q9kySvFvsFWFbTjDQGhKb13TRj2xhHcJWSN6vn7JLJFzpzwTViX6vB",
  "key4": "358wTEzxTwq3fx631Uq1Rn9cUTXc4hsCwekpjGaXDFmL3ma9JDJdvAUntf3XBehrz7L9HMnE1Y16wdomEyyyapYR",
  "key5": "4ArkQhNWwU89kigdMoa4Ey9GPW8yHLsmJqEkwLexUzyaN9rMrYSiKrmrSG9vYkuKyB6NzjD8S5RdrJp2DrGzeJtJ",
  "key6": "2HkUB2mAtR1a953fhpMtfzg4xr5vuRmGSaMt64QiuuwSBcWEd18pp5ZNu7vqmbZQvAKh2qTVJkZ3LACVcdYZEExi",
  "key7": "5Cb5dnPFHLAVubKB4zomow1bVbqYaj9Aa9bXPdd3WEV6S1R51SBBrqmzyyi4B2eEigRbfvEe9BmPeN65JfQxfsGd",
  "key8": "2oEgSTwqLTFYKXzW2sMNEUXaF7nYy1dUX2AZmxugexqpEEPRgupWPyvZKvtngf7Z8HNYvmbKjZTzUuj6PN7x3fEb",
  "key9": "2JaNmDrM1m2zLVm5Deeu1CKAcHPsqNzkZrUXp6HYk3Hx3woFSC9fumNvcfzS6NkrvoRKwPyzG8Y3mYbBT1vJS66k",
  "key10": "5HJQ5zpxjTcujT27dw45k5ZWkYCDW2o4Cpg3GvH5wakZP7f7PAGVZMgwX7hwXVNFHYTWJNhLZ8zMuTuFSDu2PwS",
  "key11": "5oz3Htr3BtPUmrrMLgC3gyCmdCAc1mxSbPqxfgJ8MiG5th1gtDVTRbS5CVDtw18UjjqkQgL1yerZii9B5Jg93gLC",
  "key12": "HEDk6524jypxMCqCte2dqtG32WEaZtVeVm1v9brSysuVyw7Ady8kGa9u758kUiPmxfSeD5VVWN1TTj5XP2gbcre",
  "key13": "2xDGR8rQ2RZ55r2LgQ5wtxbCbZg1zQekPDCBUmM6SFYR25bUVk6MEjrSoijneAgKBCnBV6QBeVWSYCwYH9u14WQf",
  "key14": "4iQNsVgUZyYX8sRCwCDEDeACTkxy8stHRyK5okU5CrLUoh2uKxFhwsxbwT78n7srjP1MMZ7MWaSWfR6yCyCRQsPR",
  "key15": "m9gvr5CQcaR4UGL9Hggf21zeKLaHCSiZoiQu6pF8MC1ywwLzgb8HBnwYxhx9KCBLRsqfJ1rVjin5PW5FEqAPdky",
  "key16": "4CrPUu9PiTHvXyYmEwu9nmLAZcd78GhmRtvARQu2DXgMqpPTkp3CuJez5eZfxNUBMh8DBEKQx1MDL12xXbkcncTT",
  "key17": "5KTg26Bo9gy1jyykNYH37YVcsc7YyEDmMHiWHoCC8LR6ZZ1Yj1PoXyCjtsNX5zB9TgsvzyhVsM2VFRZj7BUhM5s8",
  "key18": "4bFo1BLM351dFKfkGLdCbTFmd9WUhBBTD8Q4HpQ5JLomiwSYyoyNxqvufzm3UPGk6eF9WbWFVpRtsQkAPDusCVaq",
  "key19": "3mYZvvUqJejyRfnudPpLNxQCbdLdUBV2v8cBoGm5qTauTee6djZt6Nf7JUQU4ZR9Dd6qpthLY2j17EoakSYH3iPS",
  "key20": "397fp8UvHWLcHKgSpRg98VFHSN49ZtLRtpvCnDEAqK5nBRnBA9CMqMi1sYW5gsVVfpcm1nawN1WkRzGEnzHiEzy",
  "key21": "zouagTnNtkEpKZ28TubebvRwHTW7qFyAt8fgwb5eSjxpkbSCG3EXqdajrStSDaQ83uh6KdEHd6Y6PwpFBcbHQXR",
  "key22": "5FN1DtxMgfGQHRuB2wFJW2mcEWSb97sEGzbvmyVjUnAuyDqJYKyg1EbEXjCR3sB7bct7a1M84dVKmAP1baVmKAdp",
  "key23": "4LBT1kQ7mmZV46KLyq576eRtifwEW8wXax5HkqAeGyggAo5UH91Qe9oE5dANMSeZ5iNQ6FyCP1FNE6pqEGuoYyKz",
  "key24": "4fsfh8oRCrUkuoWDEGpvoPq5QuFvu1GtuvBEXR39vW798tLQ36BsSTtfAa3bXKzJNCp9VGB3GWEwdQouvBkBB6Kp",
  "key25": "4XMDssBqaPEV4Nwn3hJqPqS32cKAcqVWZGydaXtppnebKKZ4yeG76GF77j1xb243jR3zy2t1efRaKNjRgsatQSWC",
  "key26": "UYpDztiPFvtQ1HVdA1mRP23saTvZkfi1z7TfjzJ7Ds5oaTxiwiXcDH448oQ1wEgsV4oEP4qjddrv1UpbDDRLxGU",
  "key27": "2xNhxy8hrCAWqvMhWe3BnyiaXKuWifdR7HRQDGgntMcNrAQyKquzJmXVZVCDmeTx4c6dqzWk7yyanDe6wamRQktH",
  "key28": "5ZTNUdZZdbx2naSVphBvuxPawjtEvjVCQuVFypaU3H82EorJjkR91PAsH49h43ehNEYoK4wkMzy5xZpBir5P9Ygr",
  "key29": "5itAwTKc6hAWKULduLdLC8aZjoG5nGpUfKwKbfcstkVw6sxXR3PybyDeVihuRiLT4bfv5GswzjHKNjek6nb2skXj",
  "key30": "5CVoY4NtW8BghVQbHFs4x76e7C43E5MBCePP8isJsLZvLrfoYdexUHozE3hVJkKb8CU7F9Z8YVXXwEkWQYcBL46F",
  "key31": "45rP1fjutG6XQgA9rNdq5PjbwSMtQ13ZC7y9p9VtoNrcsM6WSbTnojX1ND4eXUewZjaBZRKpjcrQFXDmxLaHbTS",
  "key32": "3oyLSWtmANAyH5jhsyaEK63thRMr9DMUEyCpGFKdVa9orXhDAPNv9rNhMXWwfxwdaMnexabqyQwCYwvnBmkbqouf",
  "key33": "4iMbX6DKM3wF76MJxs76j7PTTmdcKWGU2tPg2vzeUciJinUmJgbQmyd2qgEqjTjhxDNqGeGUa89LYVGmTmKJEqKN",
  "key34": "2j45cHSemJJ2eYWRZRC11M2DSK1RMboygYP3BybK3LRfNGwaX2oFXrkf9xvXSiFDpvzvwihb4fWtcSbfbzM6HAsQ",
  "key35": "CNf5Y2g8KGpyFHjcGjFLYsYUQEoPKVcYZS9YwNwoof7cWByQNANaXHfer7ypqqRAW7hGFaySBemH9KnX43WC8om",
  "key36": "3PKtUV3w62mqoeYacJKiZk9Fauct17fyAXJkmnUANw2CtZfza6tog7Dzg638Am1pUSqXHrvet8eLpR5KWPbQAaBn",
  "key37": "2N2wQsK8GAWPN9RfWVwJUDQjvBypTgLXmvzBe3TVQso8qTwkpDX7XQEJKkWQ9yTkymAMKDMmWKuPaamxQJ8Z4o3r",
  "key38": "46xp2E59UdA1E2Rg1yoLNnL6iekmuP8VkQUVKwbAywef7LxFpDcvyNbnz9okKTDWk86YbZ9ZdPnRbuzzQhuDSvxP",
  "key39": "5YHvtVarCchNCRen1x1fWNV2KTaHjaSXvEYAWmtrrtGZsn6L7p4RELoNtSwKpF6Mt5kUyHCmqqm642nZWw5oKKZr",
  "key40": "3SJtr8PLwBKsPPPr1NNW1MCuSn7F9u9NnAQ6d8ptS4vH9ttbozpNTfBS2ca1FfnEzgPWrrFzJZhYmHGk7CgsjEAp",
  "key41": "2HfRXFG7U1maayz3QgVGXkfprtbrytM9YDzNPyG9ucwfasyKwq3EVVrbJhenEbLVdzmwXKQzfWY9usVFUtcBd6P6",
  "key42": "5hwxcsJPsojRBmL8bVvCqzJECkvdRhGBuQrMz5F4aAnAxcbZdLhRN2n4B3bwPCUaNrBHmMfpNQDisaBnYMuQiv8h",
  "key43": "5VxrpHaj9PUXPWwueXc8Xst5et9Q8SQkea8JuYyur61oW7HqCjKUDnQhFgkbHZ8LsPevJD38n1aTDS1VnWEEHkwG",
  "key44": "5zbb712vXRWq9g3AY2BY6bq9xjePuLP9WawzguyZd7HFrMi2316AHvCcck5gJni1TyEp7vvcMP2rqHgaZGX9uUxp",
  "key45": "4SreJYknAFtEW8G6PQDH47A5acAoMGfhqNNtdx57HnrdDPXHkKmjrqmsjZTwFUrcBqD1bKZkBLmtfucUzvNjsrHi",
  "key46": "3g8zPJabEHGkxkaJANDmMBb6tMCyxYHkXWeScjtZGi6PXxgWCoHSdfqgeu3L77oQv7FNU2BkZgzYiX7QjwMyaHqV",
  "key47": "4PxyweDEdSnVXmHmjGVeJvEKbu4TeqcWqi8txMcZbvjAU7iGCSGsDs5nrbK9cuHBx8D18x5KxCgg7LEtuyS7E9v9"
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
