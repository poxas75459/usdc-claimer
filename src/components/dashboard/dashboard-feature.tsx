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
    "56cXcfpH7ACKo56atZkM9Vy7Ge9Qwq7icYuoG22Xmi6JZbtgq4dVj83M1rtxT1c8wz59dndbt6UPtN8UCiw98UxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLoGGWdvJ7yeRkYR42btMdBBE7YcxCNxYGTgNzsBXbMmcdwYTkYHGT6kSPYQ3xBe55B2ZWfrz7bzAwtoVAJov6W",
  "key1": "8c6m9D9umyEff1uFsex27zAVQKfVv8KuYzarV1JQQNBWJXxeB4GQtyyQdgvhgMwJ9wbW73jNGqpMdiC5jqwq5rN",
  "key2": "4k2SEDoatvZXgX4PzeFwq4wMmooaBFCk7ei9nuzWnQtAFDceBeFvyQHcj6EmgW5hoUxTavQWkBBmy2jfy6eZK45s",
  "key3": "3wPDDWmMg1UpXk5y98UfpkjxtPwq3zZ8oVK4EYi8xiYE9h3NZufaRoCUNvRsbDCtcjYKKe8i3wQ1sPD97Uju4erK",
  "key4": "5chrDPPatvXnmZMTvJbted33Vn2bNsNUZXhDdgWWuZAptM2KtabSEEyijnyTLqqSLX69fvWBZ3NB7CrBJRRA1ysp",
  "key5": "3ZR37JEirvtiNNtKQcBZrRdf3odGo1CLQcxP2jcEGNrPArZhPJQks7WAhHE481YZ45uGjrhK6E92Wiqk1AoNpzti",
  "key6": "381g2BktCXrMVUco14HBHuanZDYhxkTRkxZT3nFBxw4ktXeDKoeCPUuuXzMsfAtXkCJ8qTMJHT4U1ykQPjAxj6KJ",
  "key7": "3rL2Qy69y9KH6d15z8g3Ah5MxYSHJMmTrauGN8s7MUSPRo9w2k22FkwBTSEWKnAEuSFg1yZyd8RyiAAsmi7QLHZ5",
  "key8": "5Zu83i1k38fgcYXVBad4J26MyCvWhHmEsbRuZUj7AqD6UopD5h1wNmnQqHr9tHo3m5WaXxzTeWR3FNCuXuax5tGH",
  "key9": "4JTmFmGyKuP9m3Y8mZzznDiFsmnJAjzEucpDV72qANxQKswwg7YKPVjXYWHWGmw21AFVporJMQdakUjD58jwmALC",
  "key10": "2LwsU5jToNixUSFunkcq2JEVmhAy7R4VS8DiVFH9VSSLrzp77Uvt9YNAVHfzLLnVGKKWi4SucpdDRYqqcSHGNsGs",
  "key11": "ZPHkSkgXz9aoUUJZ7hH2sCgk9rsLKx1MF8xZv3TSsTtRe8jpkvaa1ZX6kgZP3fDiMUJa925hLnrQBKhvg5wxaUj",
  "key12": "4ZZmUDiL3HwBcuLz29qbLTfyqA6CwYKfheU7pd8yms4bmzwK6NohxNiCssZmKiBGEuTLF51eR5SASqSaCKbJ5E7A",
  "key13": "63y5kemhsEcKkSntKb6HjNaY45X9hfbK6zT5HNhvZKFNdeixaq5BEy2ZFZp8S9Y2YoiCornyfNaFEi28qoGCHd4S",
  "key14": "fHTAZrueCSE5RDRjxcKPt7GitFpYkvGeox31LnNjLdpwZAF7dUEff4fkBnrfy5v79jUPQCKt2WuGPMJBzzcXy8m",
  "key15": "3A1R1MLgztX7oMobsTBe6jQY6V3WvZFMaBiSDPZ78rL3JEs9kjoR6XeY6qic1vQdwXARvgKVPDkZGsTu3gVdqjv8",
  "key16": "1bKSghPZisARWXgSEk6NNQGgSA7JmFAFzegSddbVpa9yFSbkF54y7U7PncogB5RyRLW3BCLwPFbgfhm7QXJWfs1",
  "key17": "3hbcEK3mgzmDiKhVXiepHESJZt5qUikTqj538zCD6BTcMSPAGznaojQjLxT5cump3AfKXAUKhsvAaHRukykSjLqj",
  "key18": "487YcNsWVGVSusF75cEgrQFeGP2kffoB2yLNYVySHg3SNKQT6zp9JUNqg7wGQiYUtaCPZcwTkXU1ZHRAXhi1mFcy",
  "key19": "aAHjjZCLeXQqPa6Mkd8sy6ZL7UPSKp4eDgUxxnePVZ8UgNHbbocXuKYuUZyazPsRBL4wZMMkf6e463pYayaRNnn",
  "key20": "Cqfgcu6yPZVV4xJhR1etABCNJTLxfmTa4wWtoKTw9rGjQHgZwmPyLWptodZPBwfwz8Q3FandMkAvCHcEqqBmkNB",
  "key21": "35EeNzRZWKyofuaNnuCqsZBLJYgtnZNgannwN4ro8PFB3SG6XeBfbQzULrk5bc4tdjGkWk2DzEXQw2miJdizgjah",
  "key22": "3n2a8ocTj1P36Riygy3vfUkex3cGKvWqE6CekZWd4E1b2dabp6KfjazyrK44MGqGxYreqSXUx8tVTg1mydqnxECb",
  "key23": "3Mxt9ULHTK5cACU8wusCT5Zrd3vh2Wj4utHABsHENwsic1pSUwfq3N1FK6mgQFMpGzWbsUHu6Fr1aX759rkXBuUQ",
  "key24": "4YNkJQuErPWEGizvBxU5nwhvC15xdK7E6yProU7KCSNhN85JDiBnhAk9L5vXecmezEpNQWs1zL7VLugbzfwx3Raa",
  "key25": "3i3Kt5KxbbeTGZC8JJt9xvmbGhALqLneRewwJmUjLrVm6eUFuZ4DJ98MXsF9vgH4YjscsviU9UdsPy2ExrdRijhd",
  "key26": "2h7HPmyRCKMz5mTXGpRpat7xxtiodAGHwgppCrrP5Mo3Y3LSTB9cdowHYBaDQdeFCc1RKE3NurEpGTvvNeuttWLg",
  "key27": "4M6ZM2VEP4wPHgEaiEsK9gLHp2BudxsDZgR3av34r9hYrCJgSojjLD4mKZUs9r74BEz3FqDhCahS7Lc2Z1tuw6UN",
  "key28": "53hwRvevbwHs9AefSyHrmBns6jD5Je2gDArdzVSkS54a2z6htEBiZKSBadgr5HVeGpEgSZbLskK6e7xcmQzDHzk3"
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
