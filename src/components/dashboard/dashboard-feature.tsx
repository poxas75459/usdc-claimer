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
    "3MGrRh5NHx2AVFjWgsACKwKYWKZNrxuvhaLFXv8P7PYDwRGFA8t44i8e4zXEocAZVyHeAKpmxkUfLm31DGgnzEj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfikwVv72wEtf5awvAMEXe2knSLBDMJeHXhmX8eUago2cELVSwPbQpHYvuF6DotoEJU9cjjybtXFP5Bp74WYPJD",
  "key1": "59rrRg61YZcBcqtcUendSQu7eW1NN7qZ2EmntcsyvsXF6CckBjkkU8PnU9nKV8if3jrWxTqKkguQEeVzuwqf4rKU",
  "key2": "5CA3wtjF93RnXfdSyo8ZkBj48kiUjKATwxXs5B8kWMz73eFNwaWFWHV6Bx2deNMGozNDvc6uChNnJ3NHxM6Fch89",
  "key3": "3hNa7V8M69aDcn5oNwoUmnXMrDqMENCT3zbHjjTd7ckD9C45Z7WDZUSbrZgudVEbvW5wbYxXKKccwEbeEaiqcAzo",
  "key4": "3eLHTAK1gZo4YCPiD7j4s4MTrdeSi4dpXwSkgxUu523czrLjzxS8CnYZShrvqqistCnDh1BQ4Mfi4jxY1NTVF51T",
  "key5": "XirMV376nDsp8qVwdwBJoCAJKbWPNCbQfWcs3YaZn4dwZfW4wNXbasM8FHugtNGLVdt7YgzFZwTHLKbPaP7eKAh",
  "key6": "5PoVZehPmwKSKf1ESA8nryz9HsLVwKHzKJzD1GszrHgrAjUJMTUzsFdpxjZar4285yVvN7TjFEfnurGtaZTCVZKe",
  "key7": "58zuzYSMrbFkG2TQ4K8DXBDkvwpvzUnJBzUwiobrqGE8CGwuv94TdTzPj9jKKzXnnxeeav71zNeWnVnRxxfaBkza",
  "key8": "5jKZ218Gxp4ZCp9zo3KwNZY6NdAiammzYw82yq7RQk8Xak1Pb3j8QY1DYsL3u6hm1Vm74mJz5EP5QaFL2XNq1B4n",
  "key9": "35fEWTbmo7Mq8WbdGTkCuQwFtkZFiBeTVXzJuWgGW5XSVzkWkDGzYU8pdQ3jVmBPoWG53YHFu9TRGBCqQoSEXt5P",
  "key10": "5FaMeZz5CcRmMXM1f4q3uJKM4mzyyJtebZsXi3h8gMzZo4LescmMMfPVFpEf5RnSZQirCctfYYc9ebWizz6WvJBF",
  "key11": "5N6n15AhFuFifkuNFPG8SyZE4A4cjgJk8gwTP2EXD4zkJmhgtJtnRxWprAJjKwSrmYYABbJKTEoY2H7iEwP1T2Sd",
  "key12": "5dcEoY5M2chYsTKGocauRCBvEjNWLdT7ErCbPqbbBoKgWisEBseHM7nJQszN6h5kWc9DnxamrxPLDQj1AsDiD5kA",
  "key13": "46r4i4jdD4pfNs5KMgf6HJeQSnZfZeNKdQfbqsYheEPJwipi6oj6RNqJU5abYB4kqeqy5cYk8uoCYS7N3LJL1UvZ",
  "key14": "NZqs3MtYWpiNLiU2VPh3Pdsn5ZWgssmULXhLmHogijGKMmhu8uXviiPJbJvSnEhecqfqwnEC7XFqytJzdQw5V7m",
  "key15": "5JLAg3gTw64JcHUZ3z2jvdpxwi4j3CzdwgauJ93tBXAwnSs8mWYzFTUY5PeD8fwJB9pwkquhz6T7QcJVtUR8Sqgt",
  "key16": "sUFpYUD4J3BGPcACZL1Ly1cpgtWMAUAii544okXpD8BybAADGXiNsFYtfdukDV8UcfLnUAjZEveNrtNnwbrr9bJ",
  "key17": "38csJwXsSqfFmDUDmJVb9RENCMLNidUqaEQJDt1UQemNbmtDkYb8FJuoWATBuBPgKXzw2hMSu6ZYnESYaDy1Eiey",
  "key18": "FT55xQxhmoqTsxdP4n7paeLFLDgdGQNw9GRgYVej3ywa7RXCrSpcUVjPw28hBK14gVknVhm2pXdnhYxZT9uTtr8",
  "key19": "4Nh1T8xUftYXkDwi6PbPwNSogejH6SxnxNUkaqB7E2Pf7FFVKCuEDXqpiPFyjg5rVymfVgHrEDheC4yEPKY1S8qc",
  "key20": "3gjVR6oRxQd1iWxSNWrRmfBznUNGyWDMCmokiFnf7cVBPnQ8qGMCKLWz5ifVtCPHRBtKNcYpcELjErtBwrQgaTH4",
  "key21": "wuQVNbDHZTdhjRW9FQpZy1W2iTDFx25rPUtudwveBCpRgxHApup14x39QkkGWLEdE7VJoZnZEg9nYm68HLKdYYt",
  "key22": "2gv3yeEqQWbB3X6PrS7pggkXYkqtHYku4yCiGTTagjozRadzq3CkuJFraCTonMM4EEdXqpPggYxazpdVcWfdKF2F",
  "key23": "4BTacGm3KVf8KXyDUpYsn1c19Drs95v8m535gtnFfmy1ZKn7kZiFMNcjUQrc2Lt9xquE55kFwy61ZoT6b8YzwnjG",
  "key24": "2Fwq7ArqTmaJKnkNj87ezdkKMh1RW3D1SPTKd3ZQqwsKFjdheq9YxFV4eUTWLDee1P1WHxhjDegom2YRkdcqthTa",
  "key25": "5Nw71GSoZ78gryje8q9NaRGjQWYcZrtPKQpotNuVVt9ijzqMZyCYJcby1AGcZTi4GMxMwjJgAi3JavHwAkuzu7EM"
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
