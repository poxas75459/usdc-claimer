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
    "3a2L4X9Lem4wz4Cj3rH4bmxngonuHr7m7QZNG7QtckEHkt3XLq1nS5vWdz8i4dh26cuLJF5W9W2oyaGTPF2Kamks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tVXzLqZuV6eyU19FuPzEPiMVqKD7RtrG9DXWLo7qjg9tRf19W2U5wdp9MUwRBi5wAizK8yi1P1obpzomUPtU985",
  "key1": "61onqZS4oUwQqN8wPCU4EqPW5pbpGSZrqfQSit3YDFBZ8j5sE3iWTsyNe4FQeTpwtWEnymrx768Q6pPYmJU5tcAA",
  "key2": "2pwTvFqy3wYJM9ANoyvLgbJ8sVUNyjzUUn9h8iCr4bwG2K9aQiq5fBrFP3YXf7949i3FiDc5Ke7nkejHxtK5z7Sy",
  "key3": "3pnL57JJtNa1afQcmBwBVYA2JAsveYBDEPuejrG78QcREWPp23qTNWPJJDgugRfy3Mt8c4F493WLGxf2k5XBjpz8",
  "key4": "4p1Wnk6r69U8Ngik88QYUpmyfCvQKQayqLbTisGDQgSJ2LisTonX5XRy4y4Rfde68r6k2MbW8s7hxhXbaMVqDWmk",
  "key5": "2A3b1gVGdvmFEzvFNHMW3XGqXdTnCkCYAWpqYHsA6rRXFsyvWfzLvBLXyvA5bPbQEogRVURMRVBPGKJHfT2FDSym",
  "key6": "4mUA6niyfeubRvTqJCwwTTzGxN4aqq6FyYZx4Nvc1JZpmoojh5bAzQ377QUoS9PDpVSbawUugFLGoXbbQeUjXHbB",
  "key7": "CT4qw2F8HeWqwiUSSQKyRoMXHuoFDdVwwQY56dbemGurRUpVHhNKEkiRG6oxy2ETgQW1sPQJSPpWDe9Dm5KECas",
  "key8": "3Aq2U8LqPCzTXGVkJSHJ8CW5E547qZgvssRkC1m3Th17jsWEbuDggPi1hwBoZtyM6jNy9tH86mdhFkcfShqVQXqU",
  "key9": "5nSeTRuwAHtkdtHfT4hRZvths96AV3aDPZmckTQEi7B29xfFfvkuQ1difXdgNBrydoWP8To4AfXYmP3t8N4pEhB7",
  "key10": "3bcjk9KbFuKHDzr7rj2eMqFFaegvfQargtKCrKTRXtPvpJWSgHshYfSp7bKEohX4EM3zYgoF2qtCtt4yeL1u3GDo",
  "key11": "3DcwhVh6ei221AAnFW6qLvsxZNUfbw1KufByMpR4b7a43KUR7DcvkXxSxBopMUA5pm3CKtdRgakQmCdE2pD7gPVp",
  "key12": "2rkVdWuewgHrXhUxU8vckGe5DCGgCEVyLGBJPWSkqpgWWW32PsaeDsWkNC6uVyCV1BmpvceKwXhiD5PEMEDiZhz8",
  "key13": "3UcEDwt8z7f9p5cNHMTAuP8ri5CXjCmnhTCpzAiGUjv39kz4SM9k7Gz8CtTG8nCKT4KDR1owQahmAqFDksZWjerZ",
  "key14": "wAWhgcQZnNMY1xu99wfM2CPnPChgygaSFQtEnboZwuDTd5VhpW6r8HcYf57wXzqtdmJENuxvCLJPmxbGTPpjqqm",
  "key15": "1iGwikzAeFJCKCnuDQKdP2KBZ5aLHWkLy9tN7QaJXgbt8d69Q8Mnn3nsm2P34bHpJmrgxVKtsjHja9rcRuo5X4X",
  "key16": "2uFfooATuBCa545yAKS8Giu6pmUtT59myBVdCBGtadBQyEFHm7RXcyfwwfhuV5gtWdQPv9cG99uSJ6WjrkAsXVqK",
  "key17": "4TngGBfBMoGb4PeC5szn3kCtnC7XCa9D4j2vmiVYYJqDZgixi8HZyQQ7CpnXUSvmxSRUqaz486iFregyVtnQhNW9",
  "key18": "4Jzpgq64rU9iujGiNCuW1emwud7G4hbUR437P6DpwJd1PpcNFGY8biuR3tC5fDeqA1pVFPs81Z6nTHcAZSNHnDFv",
  "key19": "kLf2p7BN6EYp1htBKGe3862pSc1cyLHVsXEsf84zfptqqWcrtwkK5ic6gD2hPC4fYJxMZgepy8gbuvBq2X5XdHA",
  "key20": "3QVMmXnSyWvf1Puv83AGxs8qSrRa6qTPaETDAzWNJEhckbsqyMnV2PzNn55JXjMN9xFZKa4xRez1ePTZwBvhvHVK",
  "key21": "ZdkXUYVHvRoRthwjGf5E2MzmBXKCvbe9CvidrcHWodctv8RyxiCan7MefYaUpLpHpnvqe55xZ9e1QCsieXGBpeu",
  "key22": "4CBhVQgc1hjuJzUGrk6C7dd59gi5Y2RdChmYw1Jikk4EMmmHaXmJdoCqBhokNmKo15rw7HjeRnz2NdXXX9q3PW2x",
  "key23": "QhqTGSDzGHwvBrzEHhmMR4XVamq3PrdLRDk72VYGgRYjsDJR9Mnv5SmpJUgEyZEZgNbWRkRXJgX1FQRCS4y1gAt",
  "key24": "HWkKMJp56x5HkvbHTrQk7t8ZZdQNPSYJmjKXDP6KWAv1tqS3csJcnATz1YPix3ioGPP94kjDCK4JWbSPLnYr7jX",
  "key25": "5cSF8Hyo7BN8Hy1NHoSSWba8uYqc5bb98cjMbZCV4SiATzPKek7JSfjCuChjN1ELz5PsS6uWGegTA3JPhEZjWhga",
  "key26": "4Gn9Qz5GjEeXBhcupu3hKXH2ypib4FMaVAgyin5rBbsLBxJqQaKu6TU5TXLE4S55KmrhbhDnfEU4f5SbEiJtt3ax",
  "key27": "3cQRuj1RXDcW4exxLYddHUrtyovYk1haWstWbAY8346cKwd1NwrivxEkWsPGrWWW9bVC2ySKSzykEe3egvdWuZSa"
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
