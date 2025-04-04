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
    "23JKC7fV5cR5ELSM8U9pQW7RC4qvDfk6wPwizVjC9ez8N5xcxbUDLD194G47fHFchb9T15zuahLQjZeUd4WsMM2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmUziSsphquyuQUHx9LWo9LTGy7wuKAyJAgz4hxprY4pLzCZdn4Es6Tkb8odHAd32xxbLnSeQrjRaC3g6KQtPvc",
  "key1": "SHqGevcrUxrQwQJojf1t4CsmGLYMyftnSBdJahhJJn25CD7q9XRPepiNUZXEVyCjmEJjETdWgNNbFDSKkdFZYPN",
  "key2": "38vdhNSgFGqkUt4u5D6yNGN3JycDLTLg7TF1L3rUfnHLEt22RGQC9wp4fqWn3yUtU695hBkqFMzoBA9cd2CHKvdJ",
  "key3": "3TpYqJdQVkTKy6nJQv56mUHH2uRv8gaqqRsj2tFwbzrXesYSu3Ndkin1aUqxRg4wVcKTQYp3ouV1tZCzJvhvhfDA",
  "key4": "3aCRr1Y2vA7UUGQY1PJUL851v9FCwA2UNgyv8rw496y4FEtqnHAqPbPm34Brqa5tkhSD9ryXk2Q9dYGMYQHRprvv",
  "key5": "5aJGxHPmXQeCvSG1oGJbVJaDhYWEUgjc7E9LGoWnTMGtbMSoJbU1FP2qc9sNTjfPs9FwPZHMnkfvYXaiRqe9WwUJ",
  "key6": "483AicSFrsJ2YNzqzPevkg9J2C5FKKUX6J1vcz4G6CJLVeJjRbznJUJRAWHRadNKeUs8W57Htx5gxSymapSdsAxQ",
  "key7": "5bJe3jEqNdd1N8GaXNztjcmH2eoSGqUmccmLSnf41NDAUgGDHEFE6q22Lwckc7ik82dRSHaevPf66QcqXBjGEecn",
  "key8": "HwyRGxSPMfL1b61omhD4Vhy7FtznVpV9pjG76nqVQHiywtGwBncRKyH2vU3XAL6MEdRDkuxVkPYNrL5NYra2nyh",
  "key9": "4AAs5Ttnm76Gr7tHqEvPzU8ifLzj8Gjo7SiHZmC9eK6HnpXtkaazFSjm2btp26qCqwvCST2UQQP8MwCZg9tzcS2G",
  "key10": "oCUA6EvZyFzen3b26pvWhRBHJf1dfByZ7ma5DFC9bmbEFFbMW3TykpHE48rPRoVCn5LETYCHXqo8jL4XNJHCE1a",
  "key11": "2BvpqwQ43aSp9UAcMvJE2ft7Rsd6MBW1nBmSZL3qCxJoB2v4JDQzmKetTFFFqY8rBwvmsdY6cpCV5eg3ExNo9XCW",
  "key12": "2hZHvksvnQYL2b6B4c2pyTPsH9PBrBmfAPWKVHUGwVQU67fTrb3FgeQUJBTWBTF7W3RBNuRCaMCXSrv7enVxZhaZ",
  "key13": "5i8HBUkriqbCsF2NHD5RqQPEU3Y8EobJ7VBGibnejgCE4Qtpwg6DzvGYgqwpEX8EzqFJnkVFUv573mHSWE6PNRoe",
  "key14": "35LKJC8TRF2SwfxLSbxBEFvA9PzadsyA25BxAK1N22aFWM2sPxZ2BgH8R4SbSjzFzXUaGWHUM6KLD7JBBVAcnHAa",
  "key15": "5L6ZwRrheYJChj78hamY7krpvMm38ZTHfMbk1mNuUcoNxp1QdMiGGGkTr591tggmzPwCSKTaJjYaFfBV72HAtTaJ",
  "key16": "5WV455BmTYZbyQypWkoYMSz6bKxNZibMXH9jFoPWyu9KgsNYNFjKKBtxvUZcByMRwx4Xfd1FWj7coMu9oFoLSDmS",
  "key17": "5JN8CpeHj1K1G91ESzE3aPnej2WYoj5P9irGRnwer4e3Wh8Ru4Pxzck7KLRhWABHMifEa1a4j8BZ9rXYEY9qdgkC",
  "key18": "4ZnVnSZooiPrEzwdZ8iQ9vChYj7AtTmHCx7ZPH3RcKKE6X5t1Etvf5K2tF4p4ARVAGfEAxkw4o7rNZqWa6UGVbh1",
  "key19": "3qDwJaAxHYBXczwqty9kX18ME5hNGH8x6DV8gU6NE8Rw1rbw14gikBLVdgxBEqseDZ5JDSoFFik4RcQ9B8UCTF8U",
  "key20": "57B86nUbAUA5V8m7K4byjAyy8i4iJTzBX41S3M6jtJhcXHbCR2JYPWSqrP2rbTSNP85xe2fPeHUfJQNpYR4LdapW",
  "key21": "uSnpHouZhddzC6QASm4cQRLDcovaByS6a7pzuVBLjX2tjdrQiCfJj1Sipzr5cAJjbDU9xdtKgyHrbnQ1Er1L1Cg",
  "key22": "5ba2PmsoYccZ9CKkr49nJb2pD1y89BsNniETSvU6okpWhiRk1RefjeN4pvNbFhp1ogWzYy87J7verK5EwKW2J5T8",
  "key23": "56ok6jg7SeBXmogny5oQ3DvpBAYNWN12DtPT6jeDCjLRqKsoYMS4AjzxLcfNL1Q46qrcDkGL1sTtgtmhfPRGycee",
  "key24": "4tnqi3sga3zfqHMXixvDHYaJXzt17SZFHBBZZ7428kuEoxzL2tFsPwkavzt2ccMRQiQ5Qo6uGcqmQiVFSucU1CR4",
  "key25": "2Vy2ZixcUr1Z7yHcfEYNXo8N79GJS8fi8gsixWtFz6buHiJJAfDpGkvKyNb2EdA4WDLFa271p33vMaRrEKnEyzCs",
  "key26": "Utbz3xaZu2Fx5WpuY9GP1U7vEVLB332PF9yL5wCoasvkAMo9tScsPxhbauBn4QTic8PHC7WQBTZgYub2kyBraWS",
  "key27": "5i8szcWRPxWruAhbC6fN1GrNHrqpxYDrgT66jXb1TeSmQZeFTS7853gn6KXPUQvcSTNBgcHRJa7t7a1wTs4Y2sjf",
  "key28": "5vfvSQvbpRMaodNDKgAJ7YFF8NRXrc2UNo6SrTwxftUmyk1s5gpgoXVXkC9ey18nFzkELVhYejfS4iWgV5C3K37d",
  "key29": "2AvzsZNNR4gTKyL1rw3egpt4wLzFfqbV57yvuAoB6EkJ7PBe2v1Nb8j9ZnfELybizinP3xr6kzthWL59sAiCThp5",
  "key30": "4N9vQk8YvNv8BU9b6F9RhgN5JtBCDUxZe4oAVcZh3t7pCivbhZLHrdRLuTRLXhzxPusjhmwQebsVuxEtdUv8A9p",
  "key31": "3DTYLidTMcpJsvWvHT99BSKFP6kBseS9mUuTMVb6iJmevGrCke5gC1nf5B8BZAzsrF2SGWoTvYrsfi3uPydiQy7b",
  "key32": "7X9XWPTsM94uHpeh1JeMd4dkjixHcHLdCri1dkvUjNK52C2tmYrvyaQKvvDBNi45QRasLCyqi14PfTDhhDNf8XF",
  "key33": "3GzucDwT8HCHVeHrM2yEBFJb54aGUAgPEvG3SjXhJdTrnRBAubaECCbY3rULSfZ62eTpyeT2iYk4NE45FrhJuMjP",
  "key34": "65BXMBkQq1ytvFQRqAKNqvUnwxsovdLBwA8FKiF1ZoGoX8EmhszCHQBPWfmbQmfwKSoPVKz8N5cjov5NtWdMFP7n",
  "key35": "5HYuHkFD5gxQwp5iWqxP8M4DiTJRywbw7ZRNpbY1VTkE98GrCsEeNeVrpygqSAQf4nbBqnyGg1BK1fqC477vy9xa",
  "key36": "3RU9NqxwZoFERkQST9k1Ff8W8EQF7TYdaag48G91EK6Q5kTft22gpVoHnmgHJ3K9pEVbUbu5yXngh9vZuLnMe8n5",
  "key37": "4jv5suX47dqHQzdbxo41aeCJz9ixU3io8oC6QXhFZLdhVaTisozGpXXrFoAEHLeeZ4F8PSR5NHKoRRGsqLvkDaJz",
  "key38": "3F66RGrp3KePZ2yMosecW3ooS7w7MV9NfJJtMbkh3Vso7Hkea6x7UYSSCvhrH54MMbAsPrkA5hkSvDCLtYH3Dcsy",
  "key39": "5abw76DozFy496yKJvhRHodu5eF2UQ326uyv59DSiDAi8eQ5uNYK3F6wmY3r6UeFifZZ4EgQ5HicdH5vPtpxEJa1",
  "key40": "2cwHr6PZm164iosoqj68iWxttFECfuhUN8Tv4jth5bLZ5tPDgCsFB77ZPHzrrhhuqGc6AHMYxwE46fngTUdAgRsE"
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
