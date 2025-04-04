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
    "3mhUggN66mqqP4tABCJYmBTfYZBsou9zVxyteWpZS1KDv5nBufDXMgmTTVpNRGKd6yUp4Si6tbAFzGodn55VBXRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkUcRmhvW5zw5FNG7dUZzZTRfeb1DXGUeFnwvaHU4B9BuWMPBBSXiMZsj4p38jjJbCPyxGaiGbkU5A4oHMjHKGH",
  "key1": "51wtRVc3ewnmeG6guwDKaqBScHxTCQEBuv8XpjJajxqBvp4SkR56Y6xtR2oP5u2ubjSrhJxziF2X4JsXP2Y3LDhf",
  "key2": "6xUxQxyqwj3gourQvaiCThtFbY6p1SuFDwK2Xv6pF8XkktdqmBgtwECwBUPAtjERGXwG9tG2JgWC1gyFdoAqMWh",
  "key3": "2BeSznjr2CyEgjFbmzhhW3SEwzqfk6n6GNRbppvLSyYUYNW7WirZKv7ad1r9uVHoTTtLzrqKjFD7ap97PkURtiNC",
  "key4": "29sSCEefvXSLQGAqQaoXVtSvid4AMik4wTPAqqfVWZn88v5wDFcEWGoo5ZoXmM7pgqQvLn25SQSfrHKxUESq5QGT",
  "key5": "4GExBfKjhbhCqaTDAD51hWrUJxHv2uvpGj7z6NMnY8hJjJA3S1zEoR5MWMW6ayzz53YynuEPYePuG5TmZ1u7Vaoz",
  "key6": "4iQQjRbdtXoq2GmWr3RaS4nY29QSb4qsz3w6B2r5DYDA6SWdecjWcMSBj6vbfSZC3V3t8WXpKrjmp59NoaGJMj19",
  "key7": "aYr2W1u2ie6Ne7EHnMvBXDMCX4h2B7u3hg6pEEVetVtafbbUMAWrPLUKdn5Lrxxpozh1R39X5YPqFCGupDykTiJ",
  "key8": "3KRgzHnK4np5k34h3byJ9ZbnvDyaM5sWuZGbp8MCdtRV8SqvVatwTxoVFYbiQ1M1nBQQhsNNqjF3SQknUJPKYrQ5",
  "key9": "5EbEC8ippLdwYWPyd97BgwhnSEoSQojMwphCuvLMgJVmsnFypSJvs5hFWTxC8UCHrsiaEzNGUDAydS4bCgmPp99B",
  "key10": "4K8KvkTASn8xnuASZb1wYXYpreDgniVAY2JLuEFjZ38XgoRptSxNwAZKVh3PDpD5mPXEgkWuuVXhDVmwFjWxa4Eh",
  "key11": "2SxVptVbJiDziLy44ZkmnRjJdefkJ4Hj5c9xngJuEHVVgW4waurTiagGufoaDDERTMYHxznTGW6cpP1ro6HNcz68",
  "key12": "QRqkXzJ88fS7zzbHNma4J4dyDFRVtT1X3DtcnUz1kc6pTMzH69PpF77MwQDNLLBZhM7rY4bn4FtgC4HbzpojKf2",
  "key13": "twnkbkXUzqCKYMGFPxSzdn8DasDugbUa2YZ49twENkTKyWDZEmFCpbvdX5Zc3f2S8p674cBnPcNTrKj3P4ohw9k",
  "key14": "3mwcU5MKQmtiMrW9qw7KpdvQNW5LtUSAXiNY88QeJcSDfdokpEv5W5g5KAQYnY8J39AepHPav3ohUDRUMb4F4CsM",
  "key15": "2qzF5Df4A1BQMyQwBgCNwqemAdprp5VfhXpMyr7WaRZBJ7vBCXzjC5zVfMxA8dju8vbX4qryRwFSpKiZPS6Xgp4X",
  "key16": "61xHm1s4GUDtC4omtJqQcoRcZVd8TxJxkz5g1BMK2JafadP6LRuxsAQKVPtuoq6UJoewX2s6PSEFFmdoWhYjgFbA",
  "key17": "1pg51QeBKc2AhToKDuLSz6PSqbUSFQqcYAXLaf2sGgeqQTkTnJdpshyxj4p2U8vYcu5N2k8sS7BBXm43muUt9uK",
  "key18": "62qhUCXqH8JvTBLy11WUHcVR631ifjiBUd97prcNubTQRwGH4HqydwWdgxM2b2onnm9PMjsSKAm23HGHWhPaegmT",
  "key19": "1vG75H5DW3Tm1y7Vzhq1SjXavipwzt3eK2iPD5BAfbFjX1PjEWYF4v6uzjRgZRUAtJFjhVUwnu4XVzEwdHPMw7M",
  "key20": "4EBA2iGCQGagSGzfgFhZxrrXXLCqf47hR6A5UxYpoNtQGAVmoG4YLJq4fCHGWZDKd7tBpnyiK1bwK55fqQSn6hhR",
  "key21": "kSBHackre2z6ZjKg2ZSZcGpSa9y8UtAeVSntKfGfLvP2AWkMQvAze8XWYEgNyc5v26RXAx3Naa6iD9z3SHsCwrw",
  "key22": "5KVnFKZSpZverqisxpQyb3Vy4Z2DUbwumBdbx62ehNR8CNvnhg9LMsRseg6h3N3FSE4dQUopi6c3ivuTMo9u2pX4",
  "key23": "292fmcJxLMYxZBAKfm3ZWXjzSkJsSk4SvQeHE5SwbXWiqTQr88DqPyipgPKd4Ksv1dEmj4Lw9QaBp7nZVidi9MU5",
  "key24": "3UYaLeyTAxk1q5wJ6tTQEqGG9qPNHn63p9hksw5LLmYNfdcexhHVawDfHTUYn7sEm9uJd4CtnLdWQkwb349hkVXu",
  "key25": "2daUssYXamFdfvQrd6e4J2qB4J7YpeusMVkVGF4r1Xj3BsJiHasJuAzoQ7tokpket7t4Kk2XTquWcKoL4MZWktRd"
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
