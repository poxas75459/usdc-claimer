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
    "5AMNeq8m3y57AfPTVzPACJmjwNa5Kvg4XXAuQT3GCo88BXy3ZQaVzpxq2DdV2AGLMUnP2xPBWDexQMzGmLa1SEue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJGBcpiHtk1dJ67PVpXgjCz8fPf8h1YHU6VWYLKYgFjG9VZ7HEHuQDHHth5UyS5LVe8ft9zV7YUixDgoMqjnNAw",
  "key1": "5AjPoYjLZP5gJVLpDAMyWanRZjzDyR3NSoZ9ZxCxz7yAtWS8Toey8c1DNrDi2Md8yKXBcr5ey2tGYknZkmSEVz29",
  "key2": "62pjt3oVtyqFLzPb8tqEXAdw3qD3hvuUSJs6C2XPYbDHajpRoypmH7KzSHkTx9q9BnQMxY52iKTRTGmgRvy1a1Jm",
  "key3": "3pHtczqFSo9XTvrizNoev2CPUU7x1ZGX4a9Kj8Sx7VrJecgCtwmDHcjeWswtwHYppa7o6oNxZpoP33E5gYPb2gMf",
  "key4": "2qU7hC3Z6efgzvoMsyVVDWrNqAuXnyKbi8kce8Dpfr75hkLfr8eggaaidLJko5jQjPjDMe4wuDoCy5MG68PkXVJ4",
  "key5": "5HcQSwS7VzUxXB7MwRiTg43txxQLR2gspH4EnS4VFzCfydVat8M5zc6dFQo59Tk1gNqu7hm5BMMcKihxvWe2nr4s",
  "key6": "2e6hhA82UtbphVUiRpTYXZ9EJcfE5J2ZQaMuHFHmFTDRpMPdyWrLqL37gnSUJ38fKqrgP63yVUtZSsCaXBc437P8",
  "key7": "5bSnMsKjKzWEysVenF7FRvP8oEv5zg1hFeN29zykT7B3Wbi83BGMGEhPxVY7y26WrQn4esqtU7Kk2qEjfetJRiza",
  "key8": "AvMPD27iUtKnJDxXfM3N9mDBHK6RLTXNvEEYF5jE7F3GBH2ytZg5KYgL6MGnufhLNXzpXUMfCdjrf4PG5mPp88N",
  "key9": "4UAhKMxyDVksPWwoS4vyjhQPneHnVLFVr4tp86ZB1KB6Qtx4B2apnaGHi4qcvvqG83eb2JggdaAjRDk1Ci2WP6rA",
  "key10": "4Eq6AFoHk1yLh6S1unN3BbkenxcjE3gGqzUz7e7CYGub7ZeAxbRVLAAZYzJxSNfZ9BqxdjyPBy523y2A2rBgDGbE",
  "key11": "rdwftDHhLdLxtuFNBkUC8PYrvq7zCQiXfSbFpuXVSPpEpS8bx3eWUUCm1o2ukztHCFnwksRUUeHn1Gs9xvZPaYp",
  "key12": "4mtC7WU3kFYPAAWuk6ignPkmd8TZWq8eXqo2nWidYE5japztYNiD1x12t2BnnTDmrVBK1zDw9QV2B4r1VNCmWKfc",
  "key13": "5Pb9LknbxT8iAEVtNZsxNr4NdQaELEwkrAhNc8KX4psu7oDtQf67zLDZcFzNH55t4gMeyZvpvnBHVT1iTnuWDa1M",
  "key14": "57D6VVUAkF3xEroD4CcWSbxoBTV8yHKEHoTByW1Ho6urB9fFCWvBUcCe1Y43JGzpXzFNKVWwmNUusPR22U2dFz3s",
  "key15": "3Ky1BLPCRZvXhUMtT1Lgx7whNJE1P6VCmrnTxwY33VkLKHocvkVe998rNAJMeyQfqTBBMBsuLnkv1aY7dZZn6DEU",
  "key16": "5kr7tGjwi1UUc7Z3JKT74mHUA4R8UXBW3QNMe7kZGfrwafyKrFVJfUgZC8XvfGkbQBnPZ478rZdR5GYr5qGD7vyR",
  "key17": "TvqoNzXexGeym1ssSn4BCn6BtkCwnS846f2LvZJExjXWrD8uiEr3gV2FLb3tj4vmKX9CCep7HxoxcUtwfhJmEzv",
  "key18": "2yqkkktiubmRnRsCVGs67pTAadeKnyi2jnbqmxAbFdQ4E3pafStCEjgxAEPgGaG2at9Vnf1PhqhxL2N6CZg7CFU8",
  "key19": "5Tko9fkZzXrJU5W66gcAhpfy1ZbCDW3HEkwuGdSoZzN5WBbLnQnJmUUmdQTzd5BvSL8a6penpQXsoKyp5JNDmXa",
  "key20": "dNUi9bQvygyFfCYam9Q5ZCNYo7f25VjEzwf3Tx76CYbXq9tpunL82mec3pCuGpq3F1iYWbRdpGaiQaTYknzA8Pg",
  "key21": "5NkE8H6Ricf9ybaUiZ4fMQKdcdFyP5Zzcy15Lc3ZTSEkgoQ1prVjewFmqZXXT52k9o8D4yXHzE3SXxYrtCB8oX5",
  "key22": "HAYbfZWiVbwcSkxxkVbD3wRLaz4X46fTfSiSMQVHk6zimxy7bNmoPxQsXSVUhf5Ho1xbdnGcekMjGc1GecfAZ1s",
  "key23": "5JUraWrywAUuFpoQWW88KyYiNWLApPhVCTL178phK3PNVCK4b9q7wT2Zo5orcepfpKoJDRwDw51Phi9SERLA8Mds",
  "key24": "4fPawFwyfU3wqaGs7mcW5V6ijhD91WaKm3TrTXYebuYjU7wbWQgxRMiiXMs5fTkPma5M9kKZZ5upnf8JDiMn8UvH",
  "key25": "ecbZvpNDQ8fyhVMv5MvnmWbwUYicKpWXWA4rGDNMUXyE1dKc3GuVvELy3BESKLxe2H152sjrKEhKFgDT2NDdyLF",
  "key26": "5L98ntrgrPpJ39J5xpUrL1nxUtDZtM2RAcm3MqE5QJyCJnySv1w7F355HorAUip6FhcQm1e1SYjqqvRcjBZfkSiZ",
  "key27": "5VWCngpNKSeMx7HZb52JxbeYHTn9wpjyjTHkscUAUR7vTorFbeB2UkKa9ZcofpZhFhuzgdrwDFovzx7dEeNTVM3x",
  "key28": "bv8jsfWwDuXhYHLoBH1uSueL4YzU7P3TCW4aTyiTPavPc4AhYcC5rf5xsF95wmmEoML4HkUGNdZpEmHAJMxF6FV",
  "key29": "64a8jWpoCAygsjzR7VkBm8H71EDrtAtKET2pAaeb3g4ZT5skTjaoyeGYWiSjo8LfuJPiBBpooubud3magsHw15Hp",
  "key30": "TkVo2uigWmQKacyXseAioh2Pi2Yuu7B26TTawL1ib2t4Qd7U7nczsnFu2egf5orkS3TUbtbk2p2BBQ6PtzeP8za",
  "key31": "3ubECWfv5Vr27EsL2MkTByNaYGdRokeK1RknkyYP95rwYppNuwpW2sGUUhgoh1qgo5nHmdbikwLvj6NLSKpvwMM3",
  "key32": "2dMkpdb5esg4LiLuer1hwvS4vEkKfvBzztWm9zcCMCNY6kHTah2uPt76AP1PP7SQPQDiZ58cBsTasapKM8vNhFVX"
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
