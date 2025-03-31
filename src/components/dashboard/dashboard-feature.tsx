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
    "4KNcMhqAQAUUjbwSrKp9MVKB9VXUHexSz5c8DX3VYBmHV1pLfqbBaJRqkj65FHv1fBy9wy3umK1vAtXRc5c7ADcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmdm4B2XbL3fU96soLgaeQTQWTzgbBA8SmUEjgxBMkXTtb1QRkj7pbFMbXpnC7mhn2aUF7RgpMNPUNjGX66Wfah",
  "key1": "4SGyz5CUUo7tkUEcCUVqxFEExK1CoGYZP2zxACoHePo47tcfkyu4j2z3qrX8uRvi663GBRBSYckMcpyeWHX9g9ji",
  "key2": "3wo7AMPGCAN4oPVcaEunsTX9pfqjb6wUa1NBjUWZtgtHzNhkABDUqKwXpWfTC6FFSb4D1byQ7u5z3RiucAF5ogNV",
  "key3": "5XJHtLVmQLx2ZY9FsaowjgXcL2vxKvJhDWrVYecwJL1iNKz8pRw6ReWeNZEVr5gPdAZwxRKbUoWnp99XJ77maTK1",
  "key4": "4CNFn5z9kEsomGzYfC1FksCK4JboB1zn4Li57MTBYCXL9ooeHb8YCdEJXQisebwsDCnkptGyogiDQkZmiz7wwAvw",
  "key5": "36jTaGjVfQQ8gbfhfNAWz5yaWLWwznVgE9ZJCmN4WKnRTioJp1CMqiQ6XwQCXcxhVD4Qx9jKmgXPXAoh6azM6jvi",
  "key6": "2U5fFWLswDaqSSNqvfKwNYtqYoQLW5x4Y8i4hCRnTnSnERRTyEZqWPvgQmdiCKNXtDGTT9R2GUMQB6C11GcwjpeQ",
  "key7": "4BqemmDuFLhV1LXSHnqNggQxxEVaFttdmMvWakDRExWSSNxCD8EShYsLGpFX8qF5qRiYGppJhgiiZFRQ9J7nCpmd",
  "key8": "242fXwr2WcvDb5ZmiA3VTUDTaG5RWEgPDTrA16HfvfTYsv5dAxB1VNroM66efXbpjk384ZwMzhs74XZjRMsFxBUQ",
  "key9": "63qvBbSsqBAVXhWcYAecaPAks9FncUFqWtLXkkGf8N3YEB23KRrt6jvwZWnmP15mbbiUVGA4tQZBBPmgtwrwxckp",
  "key10": "3C6Toktr5w4YZrtka2cFfg6zZscCnXdwzUP4WmZF4Xot3DSyUuDMPXujhqYr71NuKPnicvLFVYxoXkF5b8EWCHe",
  "key11": "4Pz3178PVnJGyezL8Hy8PdbpEsmPkSr4qGQnHgQdfaKsaK1ZE5nncTXmknyU3VotA8MVo7owxqjCpFWTvn8qP8F2",
  "key12": "3u711AFc9TzGQvircAhW9W7dgPei1pUu4W1JpW8dk2uT6kWceL7w52BtzgA3mMHfynMHsEALEU3sLo7kUQEFhk1t",
  "key13": "5RVW3CfT1PirkuwP5TGCdw6am3t381GArKNYwrVcdxNmwwNCaiLdqZuCeaDzTyNtyrTow2BxpZSSBjqJ4MExqmNR",
  "key14": "mMS43BVS3ZbJwKysJ188nbE5zX3CrY5iL1SYeyxRejxFws8Vt3CKswU4DGJEof2gCPufgCfVsiqdLyYK5c9eCMH",
  "key15": "61yWGihvQ7XWfHqtcoRd1qWGcu64B8e8nhxkGjwCSXA8Je4qohRjPPcEQ6d3cSawqsJmb1aSWC6gJtNDwefoyG9b",
  "key16": "5DjQUEWr7t5WRbVrSdA8n42f281bm5FAygDpp3oe9ZLuVMEtV9dg6bNsqfvZj7xAsWVgiXdS9eaY9M6GK83h9K3b",
  "key17": "3ij4WK97PzXiZLGCjpDJ3JmdsazqXGEH6SB199aJRF73eU6WpbnA1sDM1Bq5P29R6xFXx1J2tThPQMJfNQoPVBWH",
  "key18": "2aTgjEQV6LTGVXkSqnA3RYskaKdkdgtX9QVSGW3eatgGFt4N63GKYkA6JE2GFgznTsvFfnun8W8YHjMHk85SYifj",
  "key19": "26G7WHgAauiMdEiy8fkSTQtGkNH72zaNjkQVTdd6GViK7Ku2KAoVuvptBUsiM87Bcc2dNPterTGUcuVfTjnXz6ja",
  "key20": "4MK8cBq1Rh2VMJ2ceeqgC6bmypNXfqVM2iVkQNwifUwqNvwzgWjMYQTxP5Zi62fnj2Z5i6pLHavJZxCu75yrzgNh",
  "key21": "3dH2iidyF5YvrHp8PsY6d88F3oMt4oCT6Wc76v2aFntoxqvn2sgUaz3f2ro43kuv8AaX9tRnaW5FZPczQEbqYzqn",
  "key22": "5MbCUc2uD8qTKns848XsZAmLjcYGapCqkwgUJ89yXrinVbtaJmMASiLvN3fiRFWwjHYSAwYxAdE5S8JWuPVQDQEY",
  "key23": "P6vb5stLjSkXm29LUXZCaNHpWkgSWEEgabL6nsrQ8HkawT5KQ6nMgKG1ebLfP7PWcMEagL99xW1LgTpttTsxZg8",
  "key24": "4RLqawW3DLu2kXypiTirQuxKE6Ewci3t3cbqYzxcs1ZjKmsyZrj3fSZmAHKegYU5vw4xo15pUxHHMqNNm7MZcVEb",
  "key25": "2c9QYrGSd6aTDqJ36pc4TPqnnYBn2xc14BAymC2oer7TaoWM2NwsHmcGWKpRa6bRKDGTyAcMzVYrhuJVWp499pTG",
  "key26": "3bD6W5rqf9sEAT5t8VR2DBLq45LiBTbMuScB4C94tckATYjh7uJfPXczTYCHNdzAM5ur2G7qzwh43KFGwUvvBVA",
  "key27": "26wnEbgwnARgQ9PubaxSAtHTUv7GaeHwv2xEAUHAtHwNFyJ39dNi887t7dyQhJPTC7CgW1Zh8jbGoZKnSpVBV8fB",
  "key28": "2TnhiNfHBQfY6WWGu2iYa4UaoigD2muKC7wCq1AGGgXnzyTvCNDZoJMuggHevxRL8brHJJckQgShANaQDBJKBhSC",
  "key29": "2MpRrBHY3Tiwn18qjnd51RagTySwHRkVW1kGGPANtLGiHW7yh2cWbHhVgryQi89XcyW4dkXFExmbSmD9gbVUD8XG",
  "key30": "SPCz6KH25J3P8aiGi3CL27LEatQKLZtMJjCN3kcrcMmx3rjfjq4GBh2LHtbRM1JsJ7EYYg6WXiqjCxqu94x9GSn",
  "key31": "4CxjD8nitUY66T8F3wop416Q52sb6AA8wwnqrxuPLAnJM8BBdW6Ti59CiCB91R7bcE8VoaKtpn4DJTMxbzYwvk8B",
  "key32": "2toDK4nChPHdrnNz3tfJm4S72XGsguiPMjdRVRmk1nm9F4GCCkRA2V93EcWaATgSXknq8foeGkGY1aFCd1pHymi6",
  "key33": "QmsgNER7U1wgVy7i2i9zLncsGBdnfiU5NvTtCmFRYXwjue5JpGYrGUk4QrCRUgRcwaSTSHLiBrkk8tBggEUkBeR",
  "key34": "5pT1K23e1qnrdJXCjEQEE4jrf7rd51nbxmi98YjhiAYwRTy2dezc2U18Saj9e99NJDegiAQVnGenMtcf7t2BocS3",
  "key35": "2drdjyxnCy9JcKENVxEoS7Ji1vpAwTGLKEwyPGF32dgVtMMH3VkGiHNdfNc9g5EUmjSmLjUcZM4vshdjoMj2JSoD",
  "key36": "5bTGxRkYM5ijK5PtCRNNChrtQ6dRB2ckJYDvHj2ewykrSjgxhuWKUGLNu1HZXuhcNZ3RjNHNAh3pYg4yqzkQiC59",
  "key37": "3jdCf5jQ36jVBebUSBCfxM9krd3aEpDQxPhCUAfFxuhFM8Bk8eY2Fr2EYytBy4DQUwpwhkgG6sC7YywGseyjZdyP",
  "key38": "481tPeNbVb6J2CY4zebL21LPc9tJhU1jU7RC8ut6jPSjE1YoLsxeZWv5p5dfYk8n3c2QNuoektWi1VYFzGPv6wTn",
  "key39": "2An3NtCdoRRyRyDYRnKPDFM2it835H2B5bkBZbFHi5BjMNedcB3DFnPvw4YEhF3bkKKmMrdTc5y6VRfMxc4pR3oQ",
  "key40": "4Ys1P55SWDDueLruSZ9QgWp4rTF31xv4MthjNrnPfEkR6EYfJDMY7jGj1DKjLzJ6UUTQAGWXFwSPeUWYkHcVKEMY",
  "key41": "52p9fLVFwAgqrfVvxjbgcCKfzbgka8CKNzQ8bxpcNv6sX539qR98cJ6A3b9exvQiwJqRJyExjbU62aWy274mhrwk",
  "key42": "618J3MEGLv3CoT9G2uuV1mYTX8ibkgKWurfLhZ4RveUP2WbThGay9Uk8pKVXVxVctUUDHUnZMmqk1utbBSkj1Ywc",
  "key43": "5RXZnnmqYgEsSPMgTVn9UmSnN6bRN9NHuUBDgXWKHT9SkYdzUqdVupatpHbUbhzV2vMYN7CrPJU3ck7yoz4DtxUZ",
  "key44": "5JJ2CK1ZfYpXHDj6WWvXV2QrHXwVEcNjfanCu8p6FXWYPrwyrEi54MYKqozvurRY7ph36bgNqxwKnURdZiEHdnDC",
  "key45": "2tE3qqoituE1m11bmSkMsifethhzExJQf2Zdro8Xrgs4yCGfuscAwk1cekydiv4gSi3BzXqYS2uJDQzHGGqrrps3",
  "key46": "3uwTPvDt8uTFEfUfZo9mA5L1AyNU5QYNzAT3Y8X4ruP6njPmGKrwQucMnxdt2Uos1ek5UK46AzSwHNHyrcNThsen"
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
