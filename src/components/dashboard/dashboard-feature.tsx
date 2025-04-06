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
    "42Z55xbwk4u9Ek3vyaPtkPStt5Z4c8aAiVr1Z6ETC2eC6WJTd5rNufcRvdNkiqVNSYDiiCwSvVTkzRfaHqjSYNXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AF9EcZohtazP6F2KsvHF8Qr4RtrDB1RfCTMwcqRc8MPRfwkENGNwGQkeRsveJrv55CfwMGn3pnwy2JeWdGphMbZ",
  "key1": "4C1JD8jNCW4TfUg6Hva6PT56wt9CjH4kGheQAxL73aYHoeNdDiggdpRK1xcZ5e9c7inFQYmjFi5kN8nKxGqxtmy5",
  "key2": "3kTVfN28UDv9SRYBMhcxBENa4Sd54JncwpjfhLncHm1QfKHwdu3ULqbAZDUqAfaWeBSguuVCMtiP4RVRRe6TuUyJ",
  "key3": "yq4WeHoTQBQzaR4D25JXNCeuwmJxv3ZmxeRcAA35Mq4sshwsV3WRbvjFQQuwE3xmN6n6EBDcyPuVWdeFyYjfCPG",
  "key4": "2C6sq1oyNMtMp6KMcEiaJtLN2aKt7iQVjz3kBJ7SAsTXE9rCh4SEkzjjw2rwLT28rJUXYEXx4XPQbiEmbtM168KJ",
  "key5": "3BfzQaNBMZqFK3ngEfQBeGMCUQFVmeRa4iDcYoukeifp798wBNJUSikQxAVPjJKbjkb7ngMvokH147RTgVccUvw3",
  "key6": "oGZYyEJAC2VoQD9woYyg2eUF4h3DToQfMokdpHHUzqPH7w58D1CjmhEf28r1JiVKkDSF4LaEKNcK44uxaQBEtgd",
  "key7": "65pv6Rnf7NVQdjcVy8opsaicqjCu3eZrJFWJE7gYNcSHuzwHfC2m78sR7Hme6RrBiwNVKAHKZXouHriDy3FfU24t",
  "key8": "3P4AJzHPa5gFq8tJgFSPLwGXCx9PgQJKC8z3ZstUf2fdgHRZnbGmsjeEaYJTTAwBNqhSJkNZ9VQ48Hn5dakzuqJE",
  "key9": "Lh3uaiCs2v8STa9wP162MDQegvjqoaeyGmL2RBMJVA7JQN8euTVSkutudJmiPUZ1WVznNGaAfAGqi3EPuxDN8NC",
  "key10": "5RaNBz31wKnuPQXsNzK4wdsLPpYtDcpjuCbkCtABHsoE1J5HZscXaFqAXDy6CUZF6PCnAjNzqrEtgboS4b7P6pHj",
  "key11": "2pcTzwKPaJkMCiKEH16G8VdzrAEPgiaDWDJ9uPNJwuWK1zrZTg5tQnZjRbAfjPWGwGgW7uqKYMfa648w4KVGrg7w",
  "key12": "3BUwDdUDU6xaQSkDAwyCYegqoWVg3BSHEiTQij1UoS2SFgv6KusrBSsMRJHNCuba7oqpyNwaeCyTW85eDU4aJvPd",
  "key13": "3xnXkMvAY754DkewqRXyrX8QJTumEfdou9sX8YMHvUBUFR46seF6DRaJfRt5emb5xH5NEmFvfVZLEmeznWyUtrK1",
  "key14": "4piR8ct9PR64tnLY49ZHQDBnBj1ssYhZ6BxjE8ERM94PzMLzXCx9E7jwAbgBvLeYxfbeG4pU2T6HswaeAf217bCM",
  "key15": "3LKNKbuKwsnXv8Ez6en2Ay3UBLkiPhyu9XJUHyVRPSxE27dpqpP3j58gQr45WanqK7PUz3QQzNZ1Rko2HMn9MtFd",
  "key16": "zdd4aG928entkXr3uDkXfHvyY9i7wwq7c6T3AzxdM2b6yPyDUPnq1nKYVqWU1kwPQGzmpbbTGQvhadaJQz3Ugrw",
  "key17": "4DcVpaQVNhMXKHAWMMnrTusvEmqdR58UuusLcTWa7wErpAUQ5gYarEJEhaAv8F3LqmJ3g3Dz4f15Zad8ekQmBabP",
  "key18": "4vQFAaTxeWdbPipmAuV94c2w2QwWvzFjzGjpSasEisJn5BSYinSdrx8XCSzfZfXSK2sYFMxLfdD3p7rk6czip6j3",
  "key19": "4BoMFFNesU1f2sDYwSShULUqDAms92popxBxYRrkYa7rvxr3Xqw3Q4HQ7viWqDW3C82G4JUyb2CJrf2BVkdCtXCw",
  "key20": "2Qwi9XaeYhY4atFXusbBwCeqhZhV255UX9bEcbGTbv929nkR7gZ24jSTw42fJuc5vL7tsZKa1qCxUB8bmhZqtCNZ",
  "key21": "5p5hxRW3H1tszzaiDdtQvFEiBqEtggxotWp3ThhFnKgfx8kYi4PqtH5RBbPZfpEm823ViFxHTPZCcLzrXWgp6Dyg",
  "key22": "3MUaxwpG9AJoPf3oRxGpYoiXjWTHEAoQmYwD3rt7iV4oKfvzuVcrv3NUh7ENAe2QPZYzSKyNctRup48Ta9B6v5Fu",
  "key23": "5qAuq4z4SWNbkrDNJfDLLBDiMcNMcwfeAbXbWp8knC6s5SGQRg8gMekLp9YUTLZG1erczXMX87BbXzvxFKYSj845",
  "key24": "3vafWvJETKYpFv4K1eeLDu2Kjk323B1fHptzCEn3wmUxyHvzM8WxKF6TAk8VZAnPkf51JGKkXRm48sY68LHN2RQG",
  "key25": "4qk9z9vcYfCQVkvBbJfMKisSMcwGKLVBsMTaQkdPEYzwCGqc8LKoDhwhJqk16mqCFezfZCAG9HSbvzNMLg9E5hzf",
  "key26": "5cEpsMcPwWTbkrmpcZAnzz24f3YU4vXHWqso7paG5gbWDa3hwrDUhTk72p4BBHmyyBSq7VrLNmXT23BwqgENtfLa",
  "key27": "4Hpb6GjvoXeatXw8tpbUQcSZrbQVHdRTQmEHmeGv7giQHRQKS4XnSRFXuh2b2Tefsk9uqy5hz98hv8VeqdhRcjpv",
  "key28": "2Ucbg2J45deAzcCvEKja7gt1WV99egq4jBDQBnqFGVk5y8RJoyp6Fw3ZaWmRmwKhDrsZ4K5eVcadHoWgwumj4zwS",
  "key29": "5xy98CQ72VqypJKGsMwDrioX5BMCjE2AFyvRRYMm6ToQ46SoaPmmy8gjZdPgyqN1iGAuQbuw3HbphHwrxHmX4vXL",
  "key30": "1gCemRdyuw5WtF7cWxF7kxbgKB4UMgL99z9VwgW1dFkDr8eNUNcZ4e4EqqKgcbpT2BuLdTSizJLnxbAWpARjBAP",
  "key31": "5PBEtKqHkgL9DsYbWtaqcaa1y1cFSq2ntfq7JJh9J4xDqjqMotZQH3NHptEELjLZswweST5LMm11hi9oZ7kJXeJ7",
  "key32": "3J1JY5MdaY9rMoqBwa7fpetQG1wWFTi5Xpu6jJ3M7T4d9ouL3cMknzmnQAmy4k3f96152DYuz8DAq1ahPDpkporT",
  "key33": "4JCfHSu5qPMh84XYnrcWEu8wqJ2T4NrhULa4FSUgm9rDfCeyTiWWS5uVNNewxiUnCiLDEzTJKtffc5gHQQStjqYH",
  "key34": "4JP4a6mqzHpHpWwfwVV3J3JttcVKNKbfKbcpah4gZALe7zKCBYfT6M93JLbHjvYFzieQoE2GMuA21fy5eYpYxfUG",
  "key35": "5rj9HGXnfGYzrv469vHGmNcFAepneVa398adPkdK3D7rc5XGxaTFmhsXqTpDWfjc7evpy1omBdCroUdGhL8Gahhc",
  "key36": "2VN3htKnEUfddvF7aXUCcnxDEUD97yfzGLWL5PPMuKDycUDxxAYx97Rr4Fg8Vv9eCYnnS2SyKqyyzD3gAhBZwm6v",
  "key37": "648cQcd6VjLantJ7BY3Rr3i44bSHNwcRUmpi7cZK8PLAA1nLv5qhqBxqw4anQsmNAoavxpfFwun5QzPrCgXv7s1v",
  "key38": "3TcGYuDAGrofqF68VYMx84BpaRpdAEFnMgPsL7HMemD2GLrGeksyHgoF4jjfsQVLHDSyYcmT4FP9nXXV1K7gSJu7",
  "key39": "3BQyKoyxwuu5xF83cxgk4eoVXDSXSK4zEK1wnPmpN1yAAhp8BMbHo9zSGjvJZhZUTRJy6hqpgpDDaFH7AugUuxXE",
  "key40": "4M24JdWVcmJgzm9JQwnD4VQhzcgQEDpppuYUG5WBPYDRB3M15uBu2S4t5Kv8LEz1NAnGY37ophvuUXpniWsop6xE",
  "key41": "VSDpFXAMpu4HFXPaeUJV4QL1fATGFf7evnUZobXR4BAf2DxibwZT6q81JSHZqG3vJApjMBXeGHB59iB7Kku7sRm",
  "key42": "2ikvbChoGzYSy4BoZZuPHnJdB4DUjiqUPAgJrQkcUBSUZ8FhhT1Z6UCchHKtjHrY9evzgucg9UXegtm8wLZ9ZcCn",
  "key43": "44LidtMnWds5XzRwSGbLF9EUrEFuvgHJ4o6FwVHefPkMgj7eRHendVke11YDfYwdPM8VomWevSyc5bjYiN8cys2r",
  "key44": "5b1LCsiZdVNFzNKCropiiQsXwHPnQ5acqnn9tcKS1ZtdxuowmJFtzyV5Aq5fg9qk9RX59BoTcPkj9vddwPxoA6cn",
  "key45": "5xsV94y5ocy5Y8w1ytPhfScKDya1EqD1anjisFTqkQg1FE694Rq1DPpmQgS1Dq2GLW56xdw9gxMkdU4E5QnxkNyA",
  "key46": "2HWwAg5Ke3Y1kQ8HzrZdcqCuG54RTZthWkGzdwisdydgBQTXqXbqfwhQxtWZte7H1JM8GHVkUGbuku6Cm84cE5WC",
  "key47": "64rdCacVf3mHYXLtevoDBttheFnFZPyqNs7h7y9eXW1taWPgTcorN881ZjLUU3AkpA8DUYCWS4Vmuiy6WibzJpiS"
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
