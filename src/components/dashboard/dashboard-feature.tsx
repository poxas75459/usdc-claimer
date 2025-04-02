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
    "XbM3NcLJA4Yb7FjkcEA9LebPSDUrV3GFenQjNs5eVhCRpwLrkJmz8uRpA2DJ5T8A7VKQ8WP9V2CoTn7HCrygzyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bzZfNzpPLi9Ckgx3WS3aQrswhwaXpJR8711rY4h5aEZ8A6eEQxvwkDpwVjA3RhJuDUaF9DFYXTKcquazieaWiU",
  "key1": "645CfiGn73jDcjQT7oL9ZNUfv86EsUg8gA86Vrum7VncSrcfcXam5mnrFVS9cpArLETtj6vcPSbr1UjqqZUsLkvj",
  "key2": "2CAA4z8jrtpVLErGM7ok4VMPgkEaNyoEBvdxgSkAVcJzGDE6PkPgCFfjWfC2gRNUbSmTeFvBJsCDAe3fkLF13kPH",
  "key3": "3frofTdAU7HSsGqm55xErGeUHHkc2j2UjyYcp1XyYzkhLuaegf7gfpy8tCP4Fhkjj7Ro9p44q51MMA3hejNBrdJV",
  "key4": "vMnC5R2Tuy2m9iQ8Nz2QwgoABRqtteJmrEZFZxD3XHo1Bu75UzjHgyYgC267u17RPTiPrJUjGxZCPfgAHEXJmVT",
  "key5": "5SUS3s6QWVNvtVkD26mTed3mSA9ndby1uw5M8ktGPvdEeEmWGcbnsc9VK1qDvd1AUYHh2wcRF1hNQPa5hBEwusxJ",
  "key6": "2TWRc6UpvVMFR4BZjuTY9eD4oBGkvqC4b9FAwMvghAyREPCDzmRhC8UR8FsQgUvysGpkVWuSJfWRxiZMiDstiroD",
  "key7": "2M4X6wB7At3adxai4qVXVTH6AZ48boH75AM86qSkajfKyMnsxtz7qFKBCiTszYm5bmbsbpXUSgFN19isNEtpA78W",
  "key8": "25BoTHYzW5nDCYo8WvPMJanP6zJcWq3fh723Q8dbk9rto6LFnQQXiKXazujusQNNEnGP3rS9KDjZ6ij1nkiyHUNj",
  "key9": "5y3NmTN66ZUWMHekyW1HQu8fE1BuRJLPuYMB3My72VRcKr7AcMViiEp5ssQ1X2mwubbWdJuy9iQXXJp5DCRPUNWx",
  "key10": "3Zu4yzQ9DEMcbjMt1Zdt4TMfza948w9SkWmAmvXVQ6uUTWN9nTgbiysU4eCTWDeiLdz1jzkazrBNSR8BUKWkV9BK",
  "key11": "2yJS8GRHRt9jp4Wbus96ZV6NdiDL8TCVYWvifnmUFRc54hwFK1hk7HKdxCptKwTjApPT5wpUaDrhWNQUNJSUV3Ux",
  "key12": "3tx2i4uR6VS4AELd4XayPJcQJtL5GXU4iocHgpk4HVH3DfyvP7navfV1QmfWL5QdV369rwQRoGutk8dTLgNnxawn",
  "key13": "5CvFmhqhgKJ5yitzPHFnGNGq6r3pU2SiYpfeR9cUFQQsbpf6W5h6uq2YiW3jCeRjbsSVJKmrmpHBxbFDankiDCPQ",
  "key14": "4JBVKt4amXoQUSnoqrJqRLgByaEGXDrphNKFMN3jBaSZBoMtHVz8jch7x7YfyXDRYAQtf27L3J3aYTWuMeBH5VUL",
  "key15": "29dKRfy2oKvQKbyJaRspyD5wUpV8hM4Pbx9BJRDSLZmHDtBaq5nwNkX1yzaT3FqR2RaiRA2Fj1FykdwRpyQK9fuv",
  "key16": "YitmYXd7W3KN1RHQyNnpGDmDScPtE1F6ZedseLS5qzpRppwVNCyrRVGbXCDyGTVBP8X1GUL6qmSaHX2fzws2LFK",
  "key17": "4LhYZiy9X1AL7vDs9DQeGLRHA1hjp7Z49eYyQgXnxfRNUFcH6REWFYaeCRQLLeCSCVjwbzAPt5BBhN5MWrEM4k1k",
  "key18": "46qL4Mpqugthm7QUVNkAFFDdMvjMJk7bSGvusiLbtK8UbtM5ejmT77Pe4DBK4FW7D5aGzm1ePiJTtp2CodLidbT3",
  "key19": "2uB2brw4oMDcUHxL42v8yQA4Y2ShcGgi3bkcPnRpB1WBuEyD2r6S5LXDgD3sSkWowo6hWC64avYBuayW1fFyUvFx",
  "key20": "4aoSwhxNPcRjo5WNfzT1bp4a3jDpdwu1wAj6KbkqGUvCBFzArwh2oifDauR3cLiGvJH3PYeWzRKrXBUDet6PK3QV",
  "key21": "2e4Ww9kFH5JcVVcHwi68CgkZYYfabhAHGvGkSE9h91YiHT32FbuKR13ffP3b7KKf3S1SkYBe4FimKjpjWnEDW77U",
  "key22": "4biwdj8y8T4SY7YfMMttH5kejGiKYffxra1wkdUjv6sRgiEaGvC8TYTuUMgAXMimiSKHRX17yuN9EjdeobvULHc",
  "key23": "3sM9KAL78XzD8EDKEcm78P1MgwTvRdNaMMkfcntthFivAR2iiWKXrHfv64C97k1bLL1aqwzfVcuYZnrPE37sim1i",
  "key24": "31iq8vwy8iB7pSV458wWPQJ2Q5C8cqDvpVu4LuT9dsA1vXBmTdkxtVSSDEvZfewyuG37SUAZVesDKgd4AGfRrdJp",
  "key25": "cSf9aCvJNFYUCXKgEM4YAjF6bmyjawjqoGVSHvdHmECRdfsRyyFWUhjG634VjFL4BxTcgEz8BgtJe6PoHmQ9jsM",
  "key26": "ctkPB5j8e5JjcyAzSLTCwge1T5mmyCWsv8GxnF9wiUufUxk1GFe5cnkJM6JLi7apEDHook7Sf3s4jznRyfiyoCE",
  "key27": "5NKnk3g3B1oPcpknJvUmh9VYzYDLjCQLc1L7nVsGmsgJYpPq8C6GNU4m2acwVKBX9TmwneZcDKYdqdVh752NTf6R",
  "key28": "RWypFWnjwbC1ekL5QbykcjKG5Ei3E6RbU19qnPTSU4yNgK76BL2caGM4CmGTyhaSuKk5TtikK4QSuAm5FNyjGyQ",
  "key29": "2peN8kS7GBpdvqK3q8qTwppfiT6aCEer4EKRPHV8Q2Cuxf8FyNU59GRWxS3vXKUnt7eTJto9yPjtrtNULyX2rbpz",
  "key30": "42FXsdbPB2kiGX7XU2PcPft576nhAhmwwnYmbFWS5wYHBjKjkiVVPtpQvUQRigttTCt2ekonvAPmgPJMWsFjf6s8",
  "key31": "5gLLBmHs8y8saV7a63MMsDTvPXRyD4yfpPZpsxMBdbM8GJ9SD4hyvZ35xs5azZ9Nr3kzwyzCPEwosfGd3wo6WJ1G",
  "key32": "4bp774mt8zd8HKRKe4wCnBhbdGkXmw4kkqrBCydro3qdTxo71mTDVwtNpDRNuzAseXZzuED1yYr37EqvYYjdQ2nN",
  "key33": "5gwLFCfdAuLUzPBoGx7qUq6Y1jiqiZQ8Ca4pDtCCy9q7cz44cvgabvVBaJJ2NSRhC35S6L1eLL6ndiT5saZwTrY",
  "key34": "2aaBeLCG4UvcKkKv2v7kn1AvGZRgZNzxK76dRcqpYNvhEGL74D2L824RA4n9eSBMpC8B3oePP8kNF7EZS4H8w61M",
  "key35": "437jXdkaaJu9JzLRrgaZgFaDm9GWVurJaZMfuMUHWwwxNSrm91mug2ECR9XEMSUj9nK2fh8nT3tyeKudXE85XTWL",
  "key36": "2TjZY2NKzKiob2rDFjcotCyA83E2yqc3t86jaPLFEoxwaxVEKGSSDRVtRu9VdVp6dLtozTZqH9awJPy9byMZ1Mme",
  "key37": "2oNP6RRgDqSP3BtE2XTCjNeW1Zac6bbbi5eXEvEdiuqEhbHBS1ZdWz39TvzBjoTdqmkdZBSKdX4LiwPfNVCoW8hy",
  "key38": "4PtHwoMLySGkZZhve17DWz9xGpKBGpMBE9DEMsXECQhLWmRJUhtCatACjeKPkpWC9Ezv3nQD8RbLoi7KQD18KjAw"
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
