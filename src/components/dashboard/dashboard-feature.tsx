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
    "4unXJrUJJQRLpYs7ufJpgEQqWKUhfqRGxxqrPxc2d1BSYGWRoQG4BdvfVJsTFKxCL66mmUpKtpWHY4DVASNip82f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nn17dkLWUFRBNMPZNFuMyaDy97Ec5nELQtmNahoQboGEzYELAwZ9qLiqV9Dj4E23e63BAkLhN7hPCEL7TbGQCLN",
  "key1": "5HMpb8QthAQchdSkXfG6QXkrTeQpHppKKaJvEbGaJXpEhCTKBxqx693duLxBhyvQfnGbNdD1DS1f1aNADjx1sZzQ",
  "key2": "5sGdczMfYdXzeacqk9t8tEw5YYEAtZfkDwkh5o23DN4mWyshEaKsYQqFWRi4mSQUAvam17BUxgVxfkEXGJ9rX9yi",
  "key3": "9GmUzLFnXxnf3uUybsbsLNByhhFizXyhD9JgYadA1Ltopte7QgpjuSmMpdhRXB53VEigLqsMsDLZ3u8FSoF2vPo",
  "key4": "4qV6Wc9MCTU8oQaV4PtLepqLqsd2sMotCnfK6NU112PCF5bqscaYZ8uHbGUTa3dtVNqgnZDnuT7GzaUjStGz3TwU",
  "key5": "66zrKRYgAYQHunBzDsvfwBmqznteBqb46nUES91ZyCxoaD8B3xq7mVwAfoyELrNp81ndTG4CBCkK94vowrtRSDyL",
  "key6": "48ucqieC8cAKZJEBtP8wWk3Me1yh369C6ygEBrmbaDQcB45AX9BCHhzdFhQnETLzyZDBKnonpcgYKvmWqaYAVmpM",
  "key7": "UDiizCQu6JceLxGoy2oshtTirN36Hi91yY6xF3ums6KEnK349UD7S1suNyJghxEgytqLqShEhApgkN2BcwkiNQb",
  "key8": "4wSPRHxgviXC3q5TYoeCDGAytjpeYXxgnvsPWVr28VFi6uB93RFfj8eNzHesq7FmDA3fe5uxj3c85QhbEA5N5qeq",
  "key9": "4gbRdCnbaANo5jsh5RHpDihW1ZiHzJuegMTRMETFxN871WDxtofwNB8ccBBLwDJWJfeCRPoL6dx865cZKxGm8gcG",
  "key10": "bZdhxAPMNsA3s3jbyZHDhVPfcAuyu6UogYA73JaTms7X54XpkN6dptit2zr6MsuTg678MZMVujVNMDjcat7raGs",
  "key11": "NE1QocPSNpzoMLJEEGdfAawgw2LevX8DtqAnpuSqmNXvXBn89xVLmaccTiLKXqDcRQ563ceJg2i6jSVjweV6ccH",
  "key12": "4z1KoVGD2QR5f8dCZj3UCk21tphLAQXbdKcRE6y4xY7Yk6QK3NC6YLkHpXSi6AuDtaqsYrXuzTDKRHJ23wKfzyU4",
  "key13": "2LRvrY4EoV1BCjmqWihLYTPRMkn4MLMEC1aLXkS4PtoxJgXi92WDdzubhH6HMU3rm6Y1mPYZKkYbFCPV38A9GpM5",
  "key14": "5rdLoZFYnkdHfBrsRPWzrhTMpYQ6XLhtj5k7NPA3hxyYC83NDxwj4FU6mdATdpYctb7pZVvmMkzboWueiqNvGDQC",
  "key15": "3QQxEfowBFhDGxA6joY1W4yJdM5aBG1B2Q9RdXUK6pMxAZjEK9rYFAWs2199HGWGNQM5zbRFuL54BAjDgRFViE2t",
  "key16": "3jraernJ97sZaPbf11WcenZmxKtTiQCmHVwYHvhkNBuPY5KgF1VhzNNncWnaV4uJMcrK5hJgbQtzJJ2rD7rs95Jv",
  "key17": "ZRXsWGgNuYBcgpnAg7Sou4j8GbaSfes6ckBdtSTYB79xYQYj1UPZLFfVtRf85dXb9k86dL18rKG97gmqYud8paF",
  "key18": "39aoQ6N6JEVJcYQLRWg8wMdjPWqG63FMoCtd8FuFdvcEXjSqe4a1y6jh7TCDXaefoj2toWNTUSLRTyFbSnKkysCX",
  "key19": "WkjHGhWUtvRTt63TK4cAqhHgykRUUkhAPpYqGAHH5PC58hRtBwYRGDDvgPZE9hUjPrfrDqchMNRqFpZmRXZ4Euj",
  "key20": "3oqpn3PTFHqoFhZriS92ZhQSuwKbxvYe7EkWBz14RP9VwRbEen3zZAGkaGCkPhv8MGuxJfpomVj9RWn6keC7mN23",
  "key21": "5B21U8iCv9EWQCYutDJH3caR3PkKiPerUaBhCg2EVSwpVV2k6Nsx1pHfkzLAr2au37nZUeDW96RUdHQQ9Fxtk6h4",
  "key22": "qRCU2LA5ZWa8aoJjt4zAfDTyEev1mFf3rGgWj7kPfk32UdaAseefLpAWaFtHwHzUx2vpmXmQy4hCgadjS4M1nap",
  "key23": "5HKTfCrizvH3s4rgKneZKsMPPt135kVUPVuwNz5Yr8Pqzf6ANuu8nkUSU65d6HQ4nP18cax2PukRipSpfVWneZqi",
  "key24": "5LddzZVPSpqQEJUzAbv9EZaLmQtgr93PdUyH93PzJftKCae8MyYr3eq5QNMGbHXNYKF5P4LfRkdbUFYYs4aLvq6Y",
  "key25": "abR499at9f5m7AXEyqgMs8wMDc85CQsVrp6SBTsTgz8SbK6jRLACiF1o3K7pQZ8uHcrmRtD6rUEKa6GQo1ZyqAh",
  "key26": "BSDguAfmr2bCAdJ6xuW7Z6KK19NqoQCtJxxmjknn7qD842qRCMNBAC1KjStKLK4aR7cgKxfS36sDbSEbvJts928",
  "key27": "4WDm72jhvuVLxihe2fqoxoQFtV5pDHn1wQsgohqVyB31NKbBWjvXZL7totUxKL2dDM4ivMw1tgzL9m3Kkt4Au1Kt"
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
