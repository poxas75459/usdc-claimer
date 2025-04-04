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
    "DdJDbUCmA7kH9dL78xKMVvAX8pfrYP7GRD5jDFyZ6fZr3WLQCcS3DpLQjbHUiURb9dUjJJRsYKZcis4gan1TLUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLYrytNddP5BZKo3XWDWjDPzMCukzD4EwxLPb9UTEaqeQxjqLSX7qozCQKo7ZL2kVEf5Dm3UPyULKWobTnqapHL",
  "key1": "5ZayXg47s6eK9HrvcdvWgyx96QJiRCAoG634mxkXdPiEtSZceX8Y6GajMbtXXrmVASnApME1MLLB8dWsVMe7peH",
  "key2": "2jwYu7jDJdi8pVQso1N8299XTjgvbWxnDXccGBdcCeqBcmRtZBhxh6Q2w5EFGdgqJKGkUxjMn16RSxQsNSQbRQ1q",
  "key3": "624Ri2FDRfjcnAb1ChCnaR7rQcviKqjbGRaSyPem1wr4oCq7rSVZd4aGCnkau5k5DWHknDkLgmrkv6pnfN1WFkDr",
  "key4": "4sAs7Aqau1o2BXMzmM9FJ84JCmaL75Rmv6eqpbaJnJN8YzkJwfuxy3x5yZx6522df446squ2eoTcfy8wxnHLyQLw",
  "key5": "bSbfJMnH9iYEPJUivKa8sQJ3h8ufQE8uJ7E4x3C19WyRCEokppstBf8rpWPG8V9FwUknfr7ZvqCGtNshTn7vEFw",
  "key6": "4SuasREx7TiFeLM5qJhWBPtnxmgH1QZXAdRgPPcpNmitHKDxshU1hwBvANooGNDGNfSdwLbdomwZQRraRYUDmmpi",
  "key7": "mhVBv7Bk7DFAMzwQBZJB5JsmZWHEeWrZhSVRTwpUTqdb3aLuXU7HsjqeWHcWmPFqUwWEPKhauRbYjY67JPELAzC",
  "key8": "2Sqpj3KRpvgcNFzpCvasd5fMhSViFpThVsp6GwYLtSUYiZzsrCq6W3MfnSFrdV5HFeFHsc6fofJW2hsMhn3w97PD",
  "key9": "4XCjK2mr4XveDHSXPePFkXgxmZZciU3TB2BUfx6zKVcRUnrzXyarkBuJbgEeiZKS6Mm89CZ9kmcs4HUSZPDLrP7i",
  "key10": "4CQH8ShySPsZWB6Hbu7UyDbwWUtQHUzAnRd5kViV3KXBAT9XonZtVpVht4oc89oTvp7MuGsufQQayRR16vY55Fr6",
  "key11": "5suW5mtnv65dzAVJUYw8yXBMkS9YyM7iDhaby3fYUFGVky5oNdMx8rafeFkNq15aGnS2R5KoDUe3sqiCR2hAoeFd",
  "key12": "3dpcxboV3yTjBgfUpB6a7egY6KCtoMScmQSEKFpoM85Jzqrhfgs6ygbvB1LQngr66hMX1LBbukKfUEwq9eg5h8HF",
  "key13": "29y9yBgn5DwYqey9hkXhKriP9xHcJWoP5osivj8fkb4vsosuJX2Fe5nBQ2NiT7Ep16aj5urEJdxTv74DnenTYbUs",
  "key14": "29jjFvE5wJJiMvXMX3oHURYo9zDdjwhWgqPEiqVEadfjmiWZJcXPZfbCqF5rza93VcxmdW395QeEAnrZUP1JtNHy",
  "key15": "QqWd1gsr3oPQ6vCSc9fzYifQGVrAtoJzrPa5FBCdnHAYeszniy6k9zBh4QYrCbjpEJE4r2sidm4Sn3jEongcoMj",
  "key16": "61qsHaCcVoioc2D81VoWfh4T1D4dDf6ZoxsDShZKuspBLYJosDAj9N7421uc665Nv37Q4zSGZxvrvuPhv7GdzotR",
  "key17": "2bhy6KUfqhYHUmN9sunSok8Td7WfKcw8kJef4jH1Sa9YrXDB1FsFH1ZyAtZ1qkb92geLfXngDFe2wNksZqCWHt9w",
  "key18": "5fysb3XXaBMEmG7Fnu2jDCxTFF4Pm9zMy2BMccHCFHWAZf5cFFP117msgz15gkmnv3XrDJR58yPwdE2oexHLdaTu",
  "key19": "5xYWgB1G3Xq4BzGj5MZcvBhTThwa2u1jCNucbzm2qeNGYBXYuScx4Ncg7sZTzyKLW37SD14GD8ghNk4GSiSTRaDx",
  "key20": "24LHWf96CRCjabedXhieS5HvXRB8qM5i4EzU1TCymL6EQT77Af2SL8zxKq8N8a1Xp3PtVVBfG6TKXsYzfFruS7ca",
  "key21": "tNuHr36sxR5wBSTbiHV2o4wfN9K8zrW2i86fDHDackZsqFYnP1A9FHX8L25MxB6nsDXPT571iZdtbbz9Ct228ro",
  "key22": "5UBkV16hX2QykDdDMTdp2KWfMWBP58VBnqf89kaxjndznkFPD7HeQoaF4Qxwo4LqAg8jvgLUuoMeMCoC1cNTgeAf",
  "key23": "2AFghiT77RZ4qdTgbzB8WWSQLHrDxXMWBXCvFtqm98v4mRwRKJfxHQpqjxLzDYJigDGnRXfkGsNMWmvHy87CyvFm",
  "key24": "4Nmn3QXkF8Zb3feHcGzLKWMhDojNMRPXukzb685JqDYaCgM3TyZiH6LGjkxuUUhpgK1rWX6LqGhTHHqp1JkjiaNp",
  "key25": "3ouisGCANyKeiud4NvgLwUF32RXvkjbMzAGLMXYZiRM9paCW1fJqmBtnpxEXi9DoHQyNCM9Sm8PpCwdHCXMAPgg6",
  "key26": "5yZvCyEmemYScvbgh9VsPD6ufSGq1Re8a5WFDm2ULh5zZ8hjQzgTarGpswo8RsWvtE8Zwbmmujv8t2BZzvftaoz3",
  "key27": "5Nrsru1HgUgKnunTPAchUH68xj6BL5m6rBN7c9N5wDJVz1vFTf2WvuiiVFndGB4SpV42B52GsViKTRUE4MjfV3WU",
  "key28": "5MWqcewDkh9sc2VhaTWYD8dJkmeRv4TLKRGTyytz4LDz35FCy4rxpaS6MU6yAXDxK3UurC6nuTLhirZRWSkTNyFR",
  "key29": "21s5QbP4j3bpLQUgGAr5hBsQBF5qrKLcJ8BtvBjFRCdpYJmb85iiDDJmXfP46TYJyCvyow3vCQJyT493fSs5ewvv",
  "key30": "4u9e5XZCjHYKz5EXrPPmFiPSsShmZp2Xc4EXLmMoR4vsdtNTJRkw7QgJy9gaipLZe2W1Mhnd5nwSxyRA3gYqwTYu",
  "key31": "5EnDAfQNyjsy318V96F9MqSMo2Mev76uVqsvLxECugNWx4Z5MmNdhLWoChegcGi5xTz7YjzHt5YzwbgD18E7BBWe",
  "key32": "23i9rd98yj859FYCMg1bNg2zDEyKip2Y6g8BP4uNw1rCJ7qcj1VQPVnwDndi7E541XPawgkBJQhdvSZUWABHgygk",
  "key33": "MDxx7EfFKyCpmmydEYNsHDufSQzqbXhJ9vJnFesJviLB2KbyjfebsdECuxjbRVYvbgpX8iey8NvhxUua3E1HU7f",
  "key34": "3P8CwRMmNX1rMZuettdAf23idX1BCDbtsKG27KRhvQGUdZH9zDvr5H7sX1eFmkzaUZi179foW7f9pNmGpukvP4zt",
  "key35": "2MVk1YYizfW7amPKbyb24tTvqKXL5EMw5BgVQEzvdAcX793cmytCiqgGrAor7AmPZdQPe6KyEFvDFQAa7dBMJiZP",
  "key36": "65CHCLJ365bUFvKR5nGfxHBKM3Bmmf8WbGyAUk9pWjnDxar5yEp8AKNXmx8FBGDWDaUp5Jopue2mDsNWRKt2vNWF",
  "key37": "xhWbgMmSB78oDeTpfULpRZjySAZWWAyLP8YqpuDWx1kGAJSu8hrKbnmjbhcU4NDHDbNTY29nY7ibSvAqpA5adxs",
  "key38": "46RWXK7JdEHjhwB2C1pHQoLQLV8TLBBwUxTUJwyQGKPoAbumTELrHJifMfHjReoBnAsJcz7YooKnbfEUuS1kS9pP",
  "key39": "2BFZUTS3MG9NZmTFnyyLQ9FPiBw9YuDBft2bfKq6Y9V2bii9LKNyXd1SWQ6nUMBoiSb8cjkRgJsZcQCJTHWJJGgk",
  "key40": "49Xwe7WyHr8eU8tPC5pLGqJbtYHqkY8uP9vZ664dnCdxEZLGPUzqQJMrP8aTHu72eH9JFzEJcw3gcx5nKkxKTEtV",
  "key41": "5tfH8W68D7DgVJHszYer3BTnGwJfnMm2Z3a9BNvda5y7BN5H2YbyMAubMjjfL7inR34iQqHU8Gh4Ko9RRVURfByT",
  "key42": "265SbfopdDBbwK9NF7w7GL3X8YBXrv7hZkYMxDvibywC24s8xaBeNtVV5fvQdgNR83Asw9wpSVJiqUbry2bzaBgG"
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
