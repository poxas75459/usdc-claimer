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
    "5jfo64Fiw2VAvRSzczMTqrBEPsk1GopPW2CPBEXEZ2tTLuP2n4GUs9EWQFxJPbea9XTDZjF9xYV3puaP2qxFNXxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FVSNQKyFadLPDMu1vo2rH69cbxH4u4mzserZgNb4PAwd7aEcK2tSnwFMr6N5Ferz3qfxXHCu5HWxH5idQj9uP78",
  "key1": "2admh6MJmMfU7GLHNdv4GR2NgfpU33NYh5JsBnYm4s8ELBtufFfeQ3rdtRYM8wA3Qyae7KLdJ9MPA8zeuGz4nwt8",
  "key2": "4QxjgSbxJWZx68E9QRHV41mbzK2bKcTNkBjvFE7Zyzqy7hNDzbqTQr4oW9mpg7hn17CnrSbApxEwgLZ77J2qnJWE",
  "key3": "3TfMq5bPAs5y88URWZ6xpR2qkcJQxrLm8Lbt9n1fWmTcmJeD3e2ANDsRbrpU5EQ35aAnNTEdasZuwNuyP7WUEvvn",
  "key4": "2i3tHn6mGn7C1dN7MJSr1qWNjgG6QtRkg7XCve2jgSwA1XTpgbfYMXuY9nMAquxLSKehbqNFTJe592YP13Dpqn7Z",
  "key5": "2rbFr2j8CpEGWVex1deJF8BfVdXJieaDEMyxrfuose8vZncc26Txe8B8tyLZWyeKcgkpRuLHYQrsqg9EK5KvDoQ8",
  "key6": "551L3F7KWZiC6i6FryxrffcJFYcF4CSHGcgsFGYBK2ZvEQZdSyfEFzx8a4j2geCgCmswHHsJLLjL98zHfgJKDXhC",
  "key7": "5WAVetk1YsukLdjssmK8syX1LaWwYBmYdoxzXRksKN5dca9EgeWtKmX1Y4ZeHgEsViraBfAEW7kAS7scptKX2tuJ",
  "key8": "4mvQGaUWv4LeEVAiLYPCm76HqhhmxJB7DJBi2LNZtGtSVcivn4Pe8sUvamTESCtedYuMiZtqKJ3rpf1LuU8Gw3nq",
  "key9": "u6gYZUSdoQXweabkQwu9TfFwgcqUtMY9rvARqTq6m3pdMtjq2hWEeWTrR2J2faxx8yAieWRTgfLguLrBn4DshtD",
  "key10": "2upxP1Q6djbk7ipMrNaD7zZszLr87v5G7F3W8drKZ8Au1wco4GK6swGSmhhWD8egFhgc3Mq1MmX1DjjSesx4s7fV",
  "key11": "36aFghq1hvGiZavfavydnh1eDi3Q43rRV8MoxTMymwq9U26vcozdCADyacGZGKWrMaJm4fEWukQKZVPMZoABfzx6",
  "key12": "5mKHdBBdZF8HjC3Nq4FjeeDawk1pGLJr3FZNm8rUjr5gWHRVsiAMVcYwiHX9wvtVNYC29zM4efqRMRv3uDibx3cH",
  "key13": "2NvSYfDbU2wRqcVvDxFkvn5s9Hm4ABTYNpCHprsvhAM94W1QSoTEteYRBd6e2j1EFJKC5SEDDXuv6qZHTYk9Bbpq",
  "key14": "35vuXawsZQzBwFrpLaz7zt3QrMRcT3F2LQmcJFcYubw4Cgo4GnBrxGLYWdwNwLiHHdJ5DEzGC2vKyfyAg5F4j6UF",
  "key15": "322fVm99FLYpQ2yv9E4F7cE2bNKTD44M2aSpiNaLSNdiCgjn3hdPciVw5z49ZLFVreey2YKYbCDZBJiiZPDkE1oH",
  "key16": "3sdmHHpWvdFywsgpuW3VahxDgMhwCcf6GrvZ54akSiyBgj4Fqwmfv3AhAJD1GunNRLPC3LZtZS3X7N5jcR5Gg2uR",
  "key17": "5gXRhmUTvmFCpVeBz4wc26UfLfEd2CmGuktJ2QTqb2vzQGfAkAX2ZeoyqdeDc8mBDeroxMQoyRisS2eZaNwT9G3k",
  "key18": "3CUY3H3RYFAYXKCs6g5KjN1F4VRGycuE51pak7aAWKdXgBkxKb1gYuKXPYRP6kryMq6z3g153ukqhrsgXczvtj2V",
  "key19": "2zftE7HyGMBBvZBBVxz2UpcUU5GzPtfkNLEGALRpjTxWPKbhEUyGF5Y3Et6JXzYgHK3YpPzGsNKki4ubqMjNLP6X",
  "key20": "4Q73ypCJnqLQVS54mdvCNsjChbhcmwxFNM1EdkuZrmwa9ve3hawARXh8Edm4avgDt9zNzELCJ1SPR1XNwxMSVn8f",
  "key21": "4nFUxwaQz6XDiqwLJFxsgTykjc2qdBQkvGgCDJJEUC9KhmmJxPLQ8Jizb7U2UsjSsBomfDGwutQKUuZL7DJrgXjc",
  "key22": "ZzLktX8u6A7JCbwdpTejdqWBSVVk6RpDZshvkPdkWFDXhTQpha5AZJuTt2Vwn9cywcMx9caEw5YGdBYx7XoC1xu",
  "key23": "56XgFFHT47WvL1rwCLVkc9QvRnq7cm7fKggAkvUE6A52pJLZ8mkkgpjmcpDoWomtUvCXxRaJoNgCCARUwZJR4uwt",
  "key24": "43yqDCaYnUkbxLmUnfiNZprEWXFXqpeD8K56ycvUXNcWff7Qr9NuGiWX5QhvhJf1SK2cy1wrzXSr33Kt5jX3xzix",
  "key25": "T2E8E4XKRzUTfcwRfpFPhfqh2aJCARYcXb92j51CfHPMN4qgoV1wyRCqyABz7ii8f9p5K6BZS5KV2TDZpxRMXW6",
  "key26": "56H747yXspdaxQf2Z7VYo7cSfwzqfPkEEBtj5cK5qqEWgDrYD9qbmvpG1sXBjpezu11y93pagj9mvjWTUk7LJu1y",
  "key27": "65N24N6C8SxDAp8ASGCM7TVgTTU14HZ6PSBt3TueKEALbU9kU55qS7iRnkzicLyFvmNKrkNiBKhKyRvnAH9Y4DEQ",
  "key28": "47MecQ272Vd7XRdkJJYk3JZQQH3dPa5WSnFAEHaTXSf7PrP3rpJBPWdC6BAPW1c4skF2jcNhs6WNqvi4t1UxNmrA",
  "key29": "4hn4vdVEZuCCz2bYFT4jPWch4tkScEqstFQNZNr3tHMpgftgQwaVZY9ViHNNNbBF6vqiH2CcnYHdj6o37t9J2Ldd",
  "key30": "2G1aSqaknkAWP853Q5F38vTFijkjrQizeB6G1B3VmaDdMsf9Sjspf54gCPE2P1ML52HhgbSQx3omUXdTewhNic8Z",
  "key31": "B8hRpGCP5JEfr7bL9NHjHF7RHAncuppRyuw8YGp14gsr5ofmtTm8SA1tP5pExU11zWefpfr5nXUW45hkwdRJwQg",
  "key32": "65VBeEgwVLTrDAt6XBk1AqUvQMZNxNQC4dFznqoQy4EZ939qFXPhU8Rvd7w5r6cFk17QhnAJMCvBEeuPFMg2wFAD",
  "key33": "2F7ivyNSJ2Zu61v5qbddoX7HVLC8Ry4N2kw6bPCxFkRmHWQEBXQKa8rZUWJunBEPQz2LpH6roZLa18Xdhfh8uuvc",
  "key34": "4aJxa57aXKJBFLSJW5tBzHgHZAsWmBj7QSvMTHeZvUNsGFtEBiCZor8KzMYedLuomf6xbGsh2yj3sQv71MuU5cg3",
  "key35": "65YXWmY2XaehPxK6JpodabdhCvk9xv2W3Ey2xcYJkbR4CecWC3bK8F3zzPNuorpNLqtGtKCiny2cqfPyFLuhtjd6",
  "key36": "5Ds5jQnhobdkv3mwUT5mnYY3Diw3CTBH7eAFr9y8uYkvqL1kE9L11ReULVD4kckaLqASxLFpucWExRUW5XiGPRVq",
  "key37": "2qVkbufjSKmiMTRMz7k8XwVRGZ7MDg94oig29bypyco5TVKTYyV5RvqVBJwwy3W2fqEpqeuBLXZfJdDD7LK6Eb2h",
  "key38": "3H56hTbihaDBtTWEDV9eL4SKhdpHemcMtdUkXBZ3gcVGbAdKCjPLCBHSu7uJq6LkmqtA1CnkC5tNmksuP4PqMCoJ",
  "key39": "4cujXUGJxwUvhHPCGAQC7Em2pqCi6rE8HobkU4qRbfXKm7ULjoobJ55mwcyLa3XtXLDDr8VnVUS2GM8odEbUtXGV",
  "key40": "5ASPBm8oVoWHDX4Mv1ZaJYkfVNNk8kGVRcAeRhZzMb47U5MejDuufEMsd67d3MeFXzVYxHdXkHLw1pPwCXKD5t3z",
  "key41": "2EmtApHcNxy4t4HEEw7cUbcCtPkgKMi51JpY4DbXaev5zr2rpRiJD8WyQKFjFe5fohYkCwK3BUrg8M1vqus9zVx1",
  "key42": "sF5ckwMaQAaAiaNNWcnB93KiaGxbxdwAbnVVFDiuhY2A8hFm1GniLhKBX36xpAifFdDGcxHNGJeP6LmQKR31oD3",
  "key43": "57nAC9YzccYUYNwtoNBX1qdQAivc7qxkb5C5kJDQyBE6h582yvAPSamG1NecgBXEvv55j859wRBfvxQNdU1xQTqm",
  "key44": "5uY51XjLu2Z2du9ob8hsaCen4fFqixrJtZGGa2Hv6X17TvMVykR94VxzB1PsXEE8h5Xk1w5eQDEck7oHCKD9Jgcw",
  "key45": "5dg2anD6zhziYn11eEXVgo91NuNZtYuh8DexMuhtvh4EV2DyE8m7KFW2VNotbUZ81kypmSWJuYYv9fN2oGAc3Gc5",
  "key46": "GwY6xL3ZtaDL6ueNMj54fx5SdLwNSnesxk1qYdk8iuzcnnderdcWasAFtfJ4iFERYXsfXFbVLYmGM1UtHECHA9d",
  "key47": "4bmZ3tPraVBh8Hmv8RArJQRNy9pNJn9exnY76qdw39CHKN3EDe5NapfQzC5uwLKBBEQb3QPB8VLba56S6oYK32X9",
  "key48": "U1SnTSFmUGzQzm8f1Y3HXy6gcrFedt47QLwA8QwRhfNddS2d9AN35mH1YCGnj7L8t48BwMP1rGh69aAv4HUrkau",
  "key49": "5VqtKbc5bUWGH4nuyhiUwQ3eybGdxDDoLMafR1BdTbraUWAvPZAsALf8zgB8Y31rBwMNcDEP7mBC5Vipv5vkVT68"
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
