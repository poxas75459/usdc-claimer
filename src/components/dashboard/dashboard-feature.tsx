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
    "4tB7nAQvHpR8KWRHeih7SwkWMS5jqEfak3sear9XDdMTAdpPDJ929HHS4bZcZHYPupwA7uxmLUPqsuBH4iLCpjsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKAkp4wURLEn7egxpB9wWdbA8c2Cap2xj6zPGpsKdsqLbGWwyn3juf1ZnpftQrNu16GDZxzF2z42btC8VRH3UF3",
  "key1": "hcEGfQKQodCcmX41hjXCbxQkvEWF8TUYqwktY4fS4foLJccp4gRsna7Bq5mVs1AYtMdmyWw76pkJJHbzq4JAUAb",
  "key2": "3isjFdi5VNwVEuwy88ddC5QmQkvZCTh5QZ7c3L7cq7xzWrB82kwQPT4Ksn2QAaE77dsCoUi8CDzUFQwWquLZAmjZ",
  "key3": "51eYtX4DdEFLBamsfJtAsDSuPYk4DcsFQa2iujhmNuSm5uu5hCodAw3D8BhvDxGQVV8qKhLYy2i2gKuZtwcKShmu",
  "key4": "2Rbhm4CK1fTd41Gu7rDrqtqjr5NWwv3SUo15qFEFNxg5WG6yybqhEFaeiT8F8L12v6QymPGaC3W8AY2PJUVMNmFx",
  "key5": "2pZVnAW6R6sPdiVVC9kKwpNCDGF9CLT2pZWvN8YMAkbTJofqBzuq4S9XWbqCg4qGUPFNHxo96gcbQf5HzQYtGvtt",
  "key6": "5Gvga29v9xZsHY8hZQDBDQ4XYdFn54n2wi1H9aCxj3zVR1a2JvFpBBT7fvzzhpdEVwJgZhdw3e5RYzxbtRw5tsCr",
  "key7": "2EJtJvGNDoouMsQwvywxfcQ4fjgVQH63sRpDnfbVatJ1JtZ3Z6A1NQ4cWSaHPRjxHXfrS4muB8WG9xyBSVAeTxhP",
  "key8": "re5B7GJFam1LcZMdTo6rRvfDqSNREaPBUxCvQgNw7RwPErAtC3DkfyfyaxL4V2jQypzxQYA7PauCpqzuxAYUyRS",
  "key9": "22Q1Y9EhqC2zV1jDfSDpfDSjy1FWjCzhtM7AcvHATXDquoXqbtKVDFKxdP2Lcx7id7qXg762xZre8FqPrk4j2NUq",
  "key10": "67guTyouzCNEMgmmHhQnAuRExX8UaaHmhFeRxbVVtsAQLo621YUvYi2RMaw6KfocQ7GyB5qC2ci3mBC6HsBXgrN1",
  "key11": "4MesF9AFsPnpm3y1M3uHyFnQLm3CeySQ3yi2ji64XeEGZ9WrPeALUga8rZpfF7LVXizU7hHemYfLq4X2sG3JxwZs",
  "key12": "5XC7d4qSm1QFiWzLpfNrQ9FBWtkX7JKjKR9XWebUnp62VXGBKTegs2pXopU9DTW1zCrNxhjYYjMAMGsU1rGUG7XP",
  "key13": "HJQqErdB6Cj9UxAJnzpaSJKrp2J1fCSyn4pH8nwjh1qY9UXz1ECDTamPXTdyhEu2chfonYXzmVotCtQgd37PCeS",
  "key14": "51r57TYSAe8bwrQkfQAdM8wamdETXXsXauJHQr3rCszpQQ23mix8XLWsDAuTHCYBueET3BN1hFQkRQAPUS3Cx1eH",
  "key15": "5iPQiMLoCTAwxDKR7LP99CEaC1Jh4vbh1xxhGs7Kcf8CaGDd4wCdX6oCLHPtVCMkGt1N9yBN3a97f75WkrvM8tcC",
  "key16": "ETbapfjDNuzcZigPzLFoZ2qCuh5sWRToSdoT6dMWuFM3kJhutkWNLDTWNRmbGG2kDfCsb8JGNYKtHhhHsossh1q",
  "key17": "3gXA49XyzzhuxD3tFNKCC19KCWU2o3rNd7njQXJzJAsgmdJ9M1z7zFgnBCZXRNhRTYMkGeYQfM48NQvaHB2smZ6h",
  "key18": "2gW656esgyhTev7DnYfC2hc2a9jWqnNbVEdwczw8U26SEgnDZPzQj3s7YTbqezoSv4Hjoy8obYKnJNRHYKvAg8bh",
  "key19": "NxuLzmifkaWmUCiMCz9mpiXHuG92JEsaaFzKKLf71ft1QNFzKhMWXdV2i8VGAvELX19NKEAasC6RHQkdCTAwe9r",
  "key20": "ovmxH8GdbZsHXbgheZGvChCALzStzLG7CN7awrjufVocXu72kw9uyeu8rJRb8UXpbDnVVcS9MV5B2pNmbvtDqot",
  "key21": "Tx9F1Fd1EL6DJuRpNPnW3gPxintGKWmdDauV1RTD8wbKv1ziaiHYVUi2SbLcsmVh2L7aL6Xts4drD8zaWhJFpxM",
  "key22": "5UgCTjcqUvUrDWPQkevCt4JqVvVqUsYET4rP6sEL1Ru67rE9zjyMZPf5UzTbtRRYp8YaJuRP3kBsb76AKc8e2KSy",
  "key23": "xhRgsiuzbKjhbmXBnjLvwsmuKcUrNkngbimdTikD98UkWhA9egVLJzTWxChYJMWZkeFY6FWpDL99nqBnwb2XXJ2",
  "key24": "4kq3Pxou3hbRP7EjACtEaQvCkn1UQwCbi639jiN9ALKsgQyXJvhJm75Sy4P2RyGnjfxqW5Vx7CXKrAWEJRqVQUBy",
  "key25": "5mAEUoxWGLTiguXLjYszad2sayTYKzfXXtWK7c99S1mmsVqXh1jy5qEjimAs9n2CLPE5kVMApE7JyJyekG1idXXF",
  "key26": "4DtQqCJ5iq8GSYFqzyfRMnAVHtQcokja9NL9MR4CFWGhwK8jhg29zdbJoHYjq3YQZCAALkxY93CDgGpKWu3xypUh",
  "key27": "3uJNDdn87PL7N1ipTeFqVUB2HM4d2oJ2zT8Yjtvwdk5Gz2YSjWbrQRWCGQZanxyjtxALdSvTrZRSMydV86s5KTkN",
  "key28": "3UY5uhjsNC6depXG2BVb6uTu9PkYPnHQtMsDG99a9VMGnkBa4Vg9Ux6d23GLArgEtK1J1waXXtxfd9cnmv72hDUw",
  "key29": "reFeBBowDMwFyCVNaZyKCKAPnPQCf46P7phJJJj5uhF4YFkbrV28mpfhgRwHeLUKnv3RezeKw5nZfktgGXiJMqk",
  "key30": "3f3t1gscacCDLbVs7v8KVopNWJ39ZT4HChZJAWdYqtGZoUGfNf9YNj4ADMFf9mUjoUQAbVFCDG3p2tUd8gjZLGnj",
  "key31": "4KqaCepRrubfJiAM4KxFxhEK4qJ3CSPi4VkCRCTFnsZP9doqhRiaxNwtuNY1isv4PNraakMRU8iczsJmVSEjkRfK"
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
