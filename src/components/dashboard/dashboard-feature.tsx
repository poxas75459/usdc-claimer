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
    "48HHKwN4r53crsohTaNpec4qc2d8i9bpEEfqhH9FBDpAhRmVXACfZyuMuu5rLC1cV8g2T2a7ZRELp2VcgWr66xCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uf3ViHkUbxU9W1Fd5GKsY729bmTWUr4LaAfuNb4jgaYiAVjAk1t7JBENGHAvRh6acdZzxPM1kCcmv5JzVBnm1Lp",
  "key1": "3NjqvCZ5dHQMrAnaKRNtcLeCY8sq886n3MtJxSeFdsndd9vGw4xy9wz8ay3kkK7URihyQN4NTxd8uHXz4Fno5QzW",
  "key2": "56CkEuyNckuTzMFCKEps8g7BgpLML1Ss1kEAUYKyXLeQnFfy6gTerGikhkKPk1Ayo9BhfSCqZzYsKZRLWS9YXvF1",
  "key3": "2KjfzUUVyywYjKzd8fT8wTdEvWCmnrTDHTCWjjAfFG74MirH1VrfG5KthYsTNVeqPJKirgkK6QwrJrkVjyQL8VBf",
  "key4": "67f8kjssdjL2NXNiJmqTxTyQvXcS5FP8LP7KAtiybpXWGJ6YfcDsXLG3QT98gsRAPrXAU6ayhSwoKdC73UwtqWAX",
  "key5": "4KXz9Gq9E9PWUxJhtga1eczXa1X7R9y8bQdHvKnrdrnuBsZdJtcEbbA5UZcqDjGbi9WMiVas8M1syT6jdNAmPACN",
  "key6": "4QAvDhLN9RcmLgGNxfgN7tP7UtnFzzU18yhRPv26NKAPWKtzaRnMuWJNNeosizkTMELPEAtmpVtM11Gwo5brTnZZ",
  "key7": "R8vEEgjc2c631VHi1Rzi3gfQZSviJsCWNJ3QuGbGXdunXCUdX82jEGXZgSSKTEnq8fHLhUsZ1dcsWojQxCQeak6",
  "key8": "46aXMeF3y7yjuTesB3JbuiSHpqc7SvrApNP9YH1xK2jpUaRBS1yhwu61wqysTHgMNspTHSMpKvzzsDePVXb1G4Aw",
  "key9": "2QmbMXzb4zWPBSAB2vhoEHQbjvi2aXyq6hFiHrUtDqT32bZzMYgWy22iZeLsgKyc9UQJ3fkYusqMpdK2632Vwhep",
  "key10": "fcBYhXUToC3ZhcgyqGchkQioXxHb2WA9PW7AXk13Hi6nMXikg3tKqjiu4u8dDPjh7c7f9CzXhvBLy6JBVQoUm4z",
  "key11": "4tUz86a8zPF3h7RpNtDzt47RY1HVhBpXrXHj2qtEKt98yXSyux9VTv3HxSSThf5BJdGpCxXB6U5oLDrZaeDYa1kC",
  "key12": "5mSp1UnnZWu4CgE7XQ3F6ThV4sLQKQCzMxzsw5UtEWtECXbbhs8CDxGdYwHcUJ9gnvVLvgrvXo3pngTiXpMTAQXz",
  "key13": "XWU27havCMwP3556X6dqKLZjebVEnYPAqf2k8uyUpXSTZYV9LrW1TDWhW1BkaavYBmtqyMAixxphjiqKSwMDyzK",
  "key14": "4vXARKiWARoHAFANo3sMGXMyaNj9Ux1unWBRgqTmQxchnrZ73Cf9kTUEB9g1TJe9XiqC5NYKG1iCBRPf2NjtQGJ6",
  "key15": "56zkY7uPMmD26or14BTs6VL1ZZABjpaCjzVssJUNm91N6BMMbs5sGBg3NRiAbaQWA1yGokjzUnhVQWLF3jZ313xq",
  "key16": "5Jnutark587hGfRt2ZfsmvsU3md5QLFBozm7iAyoMr5Qfoph1W7SGv8snSYKiWWAGFwfokDns2wmdMzc2PB1Hbno",
  "key17": "2puUrPWcYcxz4bYijjjXuQKE86avFJVShuQZ5YK41RStbY6k8fHk6e4cXMjgS2geNFwSZPtTpsoGgx29ziYoykgu",
  "key18": "3X9Jr9xxjjH1vUnpNMhAxABBPwsFSEas71y2N5x5fMyE9kGqqR1oiD41KsKY3dAdLjd7rtHqAfNmrVn84cSrnuCU",
  "key19": "3AT8ywH5tHgqc3oxZxh8CcTaKLd95mvdajzfcFavbz1xKLkidHPt3Zdw65ps9NRJHuBukruaTY9PcxgM6hY8KoY4",
  "key20": "5JWNdbNBy2tHyPeRhE6hg6wSHNmzpudgCAqvA27xzJqZJsA629rEhbm8YTiYFsmVPkZW5rK1sG6uPH66fNqiev9i",
  "key21": "QsQQ2BxgYhj3J33VLwGY3PQvRZB8KLn62JpVYb4MHE7s4APVAdK41UyHmqSc8hvN3Q1FKWFQs1j81f9bYGKU5My",
  "key22": "3NQ5K19ANqmR3E4N3Z7cPug1nPLwsBT5afLDeagpUvh942Wq4Vtrh6XBJUsY6ifLeTAAo8vgK8QHEicK3r6ryoKH",
  "key23": "57CSdqHcQ2uKHjFq2coyvsvM9S1ZBe9mmE6EJrqvSBQcRtqyx1SofAUXKp3UdMmZg8prpH5sBBWeA5ivjKFUkiQ6",
  "key24": "5wvmwRJDAdXuYHfq6br45FM3oAQehWSBKYpz3uNhZeyd81UjnZFHxu8jDWHsErRyMHGEySzQ5BRyQFDdr3LhN23E",
  "key25": "hfwHFnw3mTpV1jcXCLciibz9RiP21rhUcKHPn2JyVCHwzxK2y6kmnEwzfDcDxxG2hVUPYzY6iCFdK3QQx5ksdGT",
  "key26": "2VvdQ5d5KLfcTSgMhWHd7aB9J5wbFTYaHk9YeqM2msiU8hUMbuXHDbQsvUdcChkmH5dVAVyHjnXNrTBDR7mXZuus",
  "key27": "29CCMiJ4jfzUcJ6qKVdiTcw5kKJamgk3j6xZ7BFmZhemQjJc5pqukxMwxorfrvQMcdyYGHbAGQQPqm7b7qbFFvqd",
  "key28": "4FyTPY2XqfNmEt3AGc9Mmz3Y4GRnMRPLzobke7n2gqjHE5RYdsLSALc8HVzwm2vi8Vwyr4B6SDQcUnbeyhJcPrMv",
  "key29": "3DRGtwdgHES2XQeKpxCv7ELmiWjN1kEQZ74VP767rCmpF633zmBjxXBo8xvBrc3M4MJbVH3YVfWCj6fuo4bmFx2N",
  "key30": "2PU9GoU2vma1DLWSvHP2BSp8hutzqDwmXWn29cNdmhQbPwL6QibeJkEM892dhRAhK3X1cptwG7cqTiqG2sHdeAqb",
  "key31": "5JFrmJe4ub6c7hHzvs9aWYdXp6EWZEPV1qADGrUp4xkCG8vDs5MmJo8gwZqdksqFPVVmgyWY9jdZq5WB2neyM7xm",
  "key32": "VAU4dNyaAhDb29rEhaSXEBhr3sXb5NsiG7g3sGqkNAWP4bm217ryzQ6YZFiYcDk73vFRMexVpdXDkwx6i6fPjr2",
  "key33": "3a8eo3i5PF7d3HsFcypMrc9dbo2rDbCaYkhEnqgkPE1ozLZCJ9621PmF14aNfYRYbJxcZ2tN5i8BnExp47Bd6AKV",
  "key34": "2zPdCMQRwN2pj37ERtUKeFTaz2wnaXjCqTifJexbUinVFSCBMVuD4wtFHHu1aCQit9nnAs8YcQsTvRsEejZC6yDV",
  "key35": "3xoTZmnVhRTiSUc325HozSRZfGxCcqWX7ASrwAEvT97Xk6PdZgrqY65qCFZMzxJJhRipUFyhLerJfqj9hwSV8ZP4"
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
