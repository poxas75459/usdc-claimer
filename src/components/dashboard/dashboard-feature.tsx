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
    "55zGEB2ZLsKkih4xFjuTb3i5mm3NrpVB7H5Zh3TLnf8toaRNF8PuRSBCpLakBkGwqrwH3W1g4PA6m2KAkG1XmLNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dycw3dYuTjpB14aGJJrBRo3QgjsZw6ATqsnVaHHgT6vv6PmRBixuDmzjC55GTA4n6qPNSsCmdsQFuyi3u37r14t",
  "key1": "5qo1SKTvV9GRChDJ7Apnq5s8mstFQMBMiRgpZXLCNRfd6Q6CKY1aEgKn6LkfKeEAtvjchvE5dauPGrSkQSy9Zb5p",
  "key2": "42fFuqWoFncTm7mQqZYtdvHsF7fzQVwY3xS4gqGZg4DKxUzp8SgHZh66MCXfXL1nNAWRq9c4amh7Z2r74hU3EjZb",
  "key3": "2X5pNacm7g6u48mwjCQWQSm8jaHsyHYL3Gh5UArJD3BsMamq32n5Vp5n7Jpz5gqT2xcr11aMxzNXsi5qvVaPt6W1",
  "key4": "46ScyHSbhhx6QVBHFqDTW9HF5QuiBFZAKiTTwDozXH1aKK3oKs8N7RbiJFz8otu3eRRAj35SLwpU4bBfmhfctaRP",
  "key5": "2kQwN6QJMxia1nvAqsoQ6kv7DZJpx4seWVBBnPD5xVjq6nUakMQspE3SshEQ1odeowrvD9NaVo15RPBYLWJzxqee",
  "key6": "5KWu7ejrtuVqiVURC2RASrGKFZTqcXCNapjQser3D63GLNT3kTjLXPt96mTue5mBjSKdfLX1wEaXSq47zfyat9Ek",
  "key7": "3QKZGfC3gFtsgzQfBeDb4wedvkL8ZVvuyF4pGru8ZARRXwRCHw18Us8A2bx9yqwDVz9Sz8fuGrNr5JjQhDfQkpGq",
  "key8": "5RyZLnqu8xCu1N96FY2HcNL43Wa4gd4jhYcwjb5ztPYTfRyTZT9UVfLFkBcxhRdEabAKENxogZeGgUMFfi4xfmmD",
  "key9": "3GNqD5B2UPni6sRrEMdihBUvdBFesu1d2Pi3DQPWunveuRKr6WaS69ApWyF9YvZWN52TGqche7y3KKvvvA5rcfUj",
  "key10": "3ptUrDrUJQx3hRqHoBc5LtSmhMTTqbUd8hzmQCtp99sphzkR8SENdPzXzADZojv8GvQH5Tr39QyhakVfRB9kmmyL",
  "key11": "4z6AXqGH3B4cDWFt2D5M1VVGMTpWAh7zQPn6cGqjpKNtb7L5GNnRighsBnZ3rPfFgdJWTFmmAQAejuz5pGYRtTQX",
  "key12": "3t1XkFEE6C71iAabtXU9deA92aQ4q7Tnij66SRV6zCgQErUCwEMsSMNMPuueV2nEpWmzGJmts7TfL9nKJ6h6YDtz",
  "key13": "4nVDn2vRcmMFEd6GRuTQKihhTVqztEKSJcS3Kn3fU3jf5UvP2Ffmh68QcnbdQ2WP4NHrfqzMPhW5mZwTrUTr7kcx",
  "key14": "3G5veFxru1SGjGHdjj7Agt8F5o8VRRieByeTuVjY1KsDo36cZDsQTdx9ZoPXogFwiKMiVcPC1UY4rtsUvTjU4i4T",
  "key15": "4YaS1uCfMcLzdNyYxUyG3MWHmGWH6kM4rbbUjGhQL4VRRNMwVyhqGV2fmpR3mVPBYinPyhcPFBzt8S732NuGAVEX",
  "key16": "owSaJYQX6GJJfUzeKQLi2ees3uhUpNyvFsB85pyz1V383mq1XU6mGbi5mcBBa5ZGqQQF4dh4CEL4Vq7dTxVS2Y2",
  "key17": "4GXixKkYVGJEQaFsWJ7UmQJQHMkUq9mGWoqZ2WWrLvUYPJSbUDYfVHgr31aymmn5cfeLZZTt6k2h5NfcJzYSaMTd",
  "key18": "3hGAXXrFhLKBDKfduaA1YLVTH5aLUsgngXjNuFRjts8or75aVXquUZESEJVtEg2QBnuqpiUfwVBxAmEzGVSnzTAr",
  "key19": "2SPGqKCNmym1u5cEpgWmpw4sYgctx1YzJJvf8v4TtB1pGAiTTeN3xE27VymB16MRkVkH4pGvokq189z9f4puaKYh",
  "key20": "2eaMntDtSdjhd32n61cXee3Re5u6oJY6TbMJYx3PHjB7PQ9EXh4SMSTDZVdj6r2bJqxAvBbwD5oYDynKECyhUPa5",
  "key21": "5zhoJhFC1cTLS86CK32aXyvxERf53u2pxaDqzfHR4yDDsLrVYvYkJqL13MR1yGDLzx2PdDuvzCpDm16MaoaAewpB",
  "key22": "2wNfcH9ZUUX86sezZeKv6hBwLvWK8vFSdAYjLEVUW634jLgx47RzZtZtfze7mfHnSyeF9ahiZigrXf9XrUXZS6ky",
  "key23": "631nWKukSqN1aLfzn2S7zqtiV6uZJmb8s8Z5ggW2pEcxJz1nKHXzH5A9nDCx2D8BYSzr3PRZwVojTMFKuSZ29BNm",
  "key24": "2BfAbFaLvh7ywPnQPu8A6wsHoAGoqcxFg76yn6y8kvWDb6QMLyLRUPavpQGTFdyuHaEuGhArHAUPyUzHoekHqcC3",
  "key25": "2maR3JfTPpdMN4Lp8NzVnw75aADp8nKvfzmJNw4qJUiLEG41dRcyNWwyfRPGEGLophcjJs167VTK2yLSUas7SsHG",
  "key26": "akg6xNxXtPFtZVjbS24iN5DpLNUgB8M6DcmXMjC9NwU5AZQ55hcvTDx8iMCgiZUeNUPF5EmJQte97b6cqxZ48rV",
  "key27": "5LPRadpfiLp8Xj9m4DdE85pBBCYKG7cbEozFD9ttUreBDc4UEw8ZuPMgEqkr6Ag8bw3PsH5UsaQoQDwgK9YjZ2at",
  "key28": "4XzMMFwDgV6FTPcYBTXJ1LxfvekpxH8yeWcH6ckUjyq3ykhZYKuiHZAiyvZezR1BxSq47JaL58n7mWj4GYvRi8AN",
  "key29": "9pSvc52K5pmvJTe4kpjKsYBb2TZKWpjrTsYRAgMMwM2bEeUqehYH6oBRhFwSqxy1R4jDbpBzdbALce3ZwWeur1i",
  "key30": "4hyWgSePU3GwbN6hDy5VwMhzQLo9kvqhsofvc3vA2PKjwkoDDSWCfr2UrgYDVSVbsyRut9mXs1pdttcc7Z7nesap",
  "key31": "2ADE4kAmMJjT1xL8AsCsTnagGQRM5RZsKDTdRFGuN8HjAVsE3E4JR2CKWivMvZi8fiuWLoEHfTUcoEp2JkuMrYRM",
  "key32": "4QEF6GLNgHwCmoVWoUVBTVfpgpgrbjDDuqyrqNkpeUJo59NP6X2foHQLKVcMKje5yzXWdCtxDHdnMwCXnTrFfDbk",
  "key33": "2UTLwxUuLGg32T9v4uhHaMxgLWU524pGPwiR2AVv2UhcG2JU8hhm5u2pqXNNL3gMMUh4vAisKcfSttEUUs5yH6iJ",
  "key34": "2rMEmEUSWG3JtQpqtR8vCTjgsNKGELzE94pLDxArtG23sxeRuYDsc9ttaF76i4soug8SAKWJrbBHjSmCwEhsn19E",
  "key35": "4HkoF6YWJk5pD7zozrovkxEpQAmvUmWNg8hGmTNuL41F3qMVFVotPZ9dFyXjwyYftzWBZvGuRvfchS2MfM7V9BXE",
  "key36": "3cT4uXmiDcLxsdfwdDMBF4ZqbbdNSyLKSej4DHH6ofnsijm7vNyFCSQeErnu9WnomNfwPz6f9UkYrSEexLkja8S3",
  "key37": "5taMt23DJ4y5ow3WbU2jvD4kyaQuEL1ih4KFTgfzJrBwEB2PHQZAkPykiL3eJS39Lc4bSXqER9YGLKesiqkZzb4u",
  "key38": "3vM4UmniD8TSP9SK5TnKmVJ3bkZffoCeBXPn2uqpBiyW1kDVFdFHEyVm5FvWczTt2n3uKE6BYq1U68DXxoEZNwFK",
  "key39": "2FSoiFSV2E4xrHHdGV5KzHdTxwTwmFZVWYHgiL1iJ6FPmwhXjcTGawcrpLm6nHkfRnKy8WVbodZ3HruGBqtcYaEe",
  "key40": "3Vu1thPnFsAafAvZRfQdHkhDhLywYEbZX8r9ybmX6VCQu8WrqFdNznFhFibhtgTJ1NwHyuzxfvHPAY4fmuJht4X5",
  "key41": "Cy65tEbAUU1yPeCFnqaWrzEjTBEk79BhgNATDQdo5LXE8dnL8jy2Nnsx2qnuGQyFKuRXLaSxR4tEUTKRdbVGGGH",
  "key42": "5BhCyM7NwG1BhRA1mqEcQsHJQkYqwdQE18ycucvJkKEGuTDQ1vR3ukks3C9G2H8JLp2tejkJdv28BCxAkiiwKjYj",
  "key43": "VtvGWMDsax4Trg5QENcxXcKFgpJnfKMHV3aRwJomARRMtHZCnZFcMux86mQrcXknj5fESkrTCq2U5xLb1cpMPHe",
  "key44": "XBztTBRmAbrjDPHSrGHrPsVCULHrkMkwu2PA2FZwsifPUmjVj8Y7ykF5XXHd8wQTFTW2uAEg2Q3dkBdsKgxyHk8",
  "key45": "33tSU2sNhz27L8E5cSEwDKhTpi5U2VpWSTnFPimzfFaupDxt6ejeNsfAvnKbaZaEmYLnJngDrJtpjdyodHA1hUVn",
  "key46": "29W2dMzHGh8RCCoaunywGwCa5MfijTuVkM5zkt22w5Ja3HzHrD4V6yBxw3YAejxq7kEUu725UyrFEqct6uesXKV5"
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
