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
    "3XQWKFrf7B7W7CjBAkUsTfTVW1YeZ5YibN3qZMH7vNtc1ceucQwv2z6ZrXrPaCJGhwrzzhj7GSmXeHLLwtM3cKve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4hvRSV9AjF5AfSpfzcNZdQJNX8pJPr9dnva1SM7WgFzvZeAna5vtz2KqPhLfCvvf5k3YaQHngrvJf9soVF4hc1",
  "key1": "4ZYY6AXX5A9PBggf9yyDTvSeTJfJ3KqEBaeQujiJF2bRjCrAFVgmYpapGtzqvvbhmFoeTwUu5mbTGB2GMYcLmXs7",
  "key2": "538v1TiFw5zuhH3sqsVRkThXqtZ3Fg59sPw8AAVYgkadhudV8LRkAumNdmEEGVVLYRpZM2m8FdKJVB8MrmRn43cm",
  "key3": "2GgYfC9aUuJ4dREa25mYgvRb3B8exrRZByaXi8MBCb5DPp9bVKcLbopTqAkv9TRin1SFbYB3B6j41iRiEZ1CdfpB",
  "key4": "4e5UKbwtC19qf3og42bESTxejXpkPTJbVekCT1ESg4XzzRRFxqdpq9QzYtbY85ccDLt1q4XXkZyD5MLrFSis7QrX",
  "key5": "34x31ac1CYg4nV85cfgp7Kguy8YAydrHN4j4A5a1aXcgGSGgqSXNisXY2gjvqLvEgngvMxMTJXBYcfDVg6wMoRiE",
  "key6": "5tQeTBgZ6DkjRgs1doonVXbXiBMSXXeFhqFZGUM1evNE8HKAmDWAnahanzfRiWu7Sv8uFiBwJJZvbLXh7fekrJo1",
  "key7": "3EgWQms1HkR2ffuQ5EBJHmeRKf6bMLePpeS5VLp1te81noXovoMYF3nDCUk47kLLNPXni1WfrMjhLpvAYPD9YghQ",
  "key8": "5epggbcknR8T28y1NcrLjNpvDUrKwXKWYa9pSBokXhtgPHqoxC8edAQ5hDkdFfVbbjivEPEQYpAx1nuMZExZwuCz",
  "key9": "5xmKcx13RWG9WjEVbipzdzcNaE8MieXkoWAsvZXzMszcbkbFEBRxsh4NYffsYGYnibu4MtB5nxZ1uuLv5e77PghS",
  "key10": "66RcYnQ5oKF8seRU7GqYqrsjpXiW3QsZEW7zaVsvxd1Kh9oXrJwG9AuLrq1rzRFDtN4DWAK3295oqEXRPEshU1J5",
  "key11": "3mnYzdZhA9c9iHpr9vHPGv3MpqcD6WFhZ7RJ7FjT7fbX2eZ5MQLuzLqwWW6Kmwwki7hXKfpaJT7nagrN3DUBFduX",
  "key12": "QWFDEPsHHS4eF5LDwV4SwhbgTdowRxeBCZKiAr5vAHxfaBoEnNwDohZoFfAKkoLzw41upK1NonZqQNUGHC1Hxbc",
  "key13": "2cpAjSmp3ZUEhCc2FWvLvogpfm2PQKoCQjjHvyAHVeD9kfSzgqX744oYtKhWbMEXWVe8Xysb2hUbNZjRmsW242vD",
  "key14": "2wQBjTRUoXoShay9xSKtFkqFTRuBWyuYYMQz9dFLf4HJ5MGbXHER5hunfBkbQxg5inLfsg8KvDisgHTqTejMqSN1",
  "key15": "2J7DaY5aeqFX1PixtYM692qWGoGuQPSZohFrgiaK6qub2AjYucw9CMDNyu8jbsnMqFwgWD125xnfED4KmcSMd2aL",
  "key16": "2HcFq7hmkKWYWwBT7ZqMSCURDwmZPeCc1QJyMPs7UnGzAuALVXHNZXtD43n6GCZJbfKovxgQRoLJjobbUNiQ46L9",
  "key17": "kemNy34g2tpXweNz56Yh7VN5Awmq99hmRuDn92vLTCZkku5cGyCSJcH5ARfa8KfNa6nRN67iQL1uury5V6qbQ6S",
  "key18": "DWEzrArb45xhLn1Lfwpga8dCnpDmizXcAJgvqXFVQJ3o64N7PUhdLSWrXWxjVdS4bR75xLZHr39K3v2vXF8LCaL",
  "key19": "3YS7Bv2CPM74RTX1ZGNunyQqfpVPm7Qy1gfuY1PB4jj4xHTegNAc6SHNEKpj88NtwYqDaGrMquM7VrPdkt3wPseW",
  "key20": "36aZaQ6DCy65tCWJcBeUBzJVB9Hq7SPbPragx9nsJ6xjDmvxSt9PmwQrXLqvYqbpcvL9Yog9Dbb3iKGMB6qW3h7H",
  "key21": "5CUPfD8mdx8974N9SP7HoDSDwRkbpmL2XPtpm7FxJH1m173BocPusgKUJLAwdRNx1giLpghXNrSDQet6JfUYkibk",
  "key22": "F3pVy9dd4GP13nMxZC255yDdDtu7apCNxLfGqCnLCkJxWxPdfNaHGr3dZkLNaayYKyYnEirSDcwY5hghi6CFSip",
  "key23": "3yz2eTM3dAYrnGTao3NmUdt6o5sGmc3JgBnR3JDVUjpgVae5KhwuggVcNhWaaCx9A2xBxJvftWTH2kjNA5scdoK2",
  "key24": "5LuyVv2fnhC6yGKcdS2pSejGSXZtQ8udwGsT7fMJGLSSLUmdyzWnFcuFUuGxwNZkbUXcmCkQzVKBWa1nsxsLTG2S",
  "key25": "5oXZ4RDu3exDEvyjjGMvVKLWcxHDwNJM5Y9BEshDFGDQan3bo45ds1GWH9E5wzYEfcL5RpDvhU6ABvGDdtZjubks",
  "key26": "2uAKB2rT4NkSjuYaVS6AQzCPxzgxFT93WxtmXYbDE57kMdynbogezoZCYq64iJGsBPdsmyQXtBKG6R6x3oyXhV8d",
  "key27": "48kgoq7r2c3HVW4KRmAy3LmCP7uGdg4xm99KmmkhpfqtgG6dGG8caMvGbmVNxexJoK2tKoWj7zVcwgQXD9fbGx1f",
  "key28": "4KNJRKV4NCDwLzWHegpJnmsgVTj4pbDDwAaxsDQHuGBBiNmmFCkMgKipnayUx4BougLCfMC7LLzUzDxX3MmKxduw",
  "key29": "rGhrV16FFXmcCA9UBGYn9rV6eGLERVetFcrn8jv9GAyk66tmZZgFYHG1WDoCeWbbYsCNXXF3dTPWqD6MzUj18gX",
  "key30": "tHr2CKqAoR9GcDvruN6qzN2vCbRyfZKKwD4XTvffgUC3WXbMzk8f5oR4w1hpd5Yip9ViQ1pNSu7bixb5g9RLQtM",
  "key31": "5DCMK93bCY11J34uxdYmXZDT3DW9wBknrKJgwg1didxCbjdwxpJ9SGJCM7oSgsjBj7Jav3etLf35K57S6xDM74a1",
  "key32": "q572FJerqxEDS2xg8JkfZXNQzuNryKeqs5DePZLw7ALmrWsUVS3SyQsvGmTBRYGZujf9L7kBNHfrtWY9xFjZuZE",
  "key33": "4QPpomFsTH85feaNgZFTffQrvJsje4hmHLY7KWuKUPHE7muSFBDFgYk2aWKukfHVYji9Rac74zdH3ZychW4Fp18w",
  "key34": "5gQgPgBbK3xnDCvHZWZtwKKyWDCgWFAzPvCwEsHZYEgtJfym2cG4fh3yET6NLXRgZ8a6NDbNLHFayvUTUWaXJ4G5",
  "key35": "3JZbFLJdqBWYMG5sP2Nn4Rhpf1C4AqvG9mHjq8gstjZRq8rom6CEFgLRp7THGnRxHPh8xbEBCqHvRLwRwHGU3neV",
  "key36": "4uzx8dwS1VdpAAGBok5t4WoRPZDXurkPM6ULhiFXHfVDUUahtG51txGGD4PBcE9BU8KwUctUqhMFDbqwDnzczWED",
  "key37": "37ZcDNd7Z7KWxXmDFShP7e2V5NWK4jpEEXLPxNFco8UonWkuCM5SrYgJ2GgxoBhwi48PrEFS5gLVAUJDo94ywyw7",
  "key38": "oc4r8qPj1STAt3nMVXtJ3owipZRAGrSVnsUzheCCxtKZair4PCy8kRmKY7QypwLLaAgmUCpBEykNSZVqZoAuJUN",
  "key39": "5g7BZ2oqmNJucwfxHN3YLHxde3wSrzNh3pFeN43abhdSCXPcLqRhzYPVXbKrhoYu3ctf3WddGGmQRqyetKZmdZYM"
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
