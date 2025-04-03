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
    "2h49hMAox9uU7M9jgZzs859YRSbuaEJzatTNjT89UNYiGjMDpd39QSnRe8Xccz6qo894hhgGkizaf1fM6wo6wqsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mc9cWUvAH4AVcpw8bcpLhMutqjoLiAz5ByL7j7ZLhyPVjvskQweQHQG5iLg2FEtDMdjkap2n2MHbDuc7VPLVeYm",
  "key1": "4QqKmFEqy6Hx63qWdbUoP4VCBcDici7WyT2oxWmLX9BJWfuNCetK4Ntwe3YJjp4Rpq5suoZoZf2jmSBT4mKVzchN",
  "key2": "w6j8UFRuVhaL2RzZSLWXcr5Wdnjd2caMpbs77Z1qtryCX6XWi4i9R9QU3634Y9JrxBhVJ9DvdhGeEnHtKWCSPF8",
  "key3": "3vc4CRNJ7wwxhuE2pb1a2uChBQgwSD2CNJdoS7LXtecR4PAHCyZ5J2MFoLWbxA6AUuqTTUcsDMZN5Jr5SwXSnY54",
  "key4": "29gSon4kMynUcZrGivXA2EUFUtnQDHAfS69ZqhdzieUzihg6wy7ypTo2L1YQXWLstQnsCeFJJu96naaxz4FVDhez",
  "key5": "4NjFeR8Uazm9hY3XgRZB33cV6zctoDWk9uG9hN2FHif6UYQM1b8Kw3V7z9RZZu69ieB9Bs6nd9s4QnsEsCjiQyVm",
  "key6": "pu62U6soHxxAqh4nNnA7cTDpCzERJiDathX4mrF12JQgqngMs3thBwJgLUQbpB821Wu1JKYqG3nR4ohUEx6erwh",
  "key7": "5g6Dxf98ugcESrMeKN1Wzkc4KESZQETQ3VvDJRwU5D1bGwnNnARkCSH2WR5BtmTRT2aeYiWJFfsA24NJc7vgsg6R",
  "key8": "66Q6HLiXooaeThx6odbFohzxxZ5i5tBYvnyyr2bPMM6B7aNRaM9w2at6iNp2tcW1t25CrCrBzSheUJ1aig76hc8Y",
  "key9": "4xkk8NqY7gMFxyBFK3zxhPkDaWWtqZTVbaJPWtzDF8rwBgj8jfrMrRN8FLjuqRAu1tnhvWMGUYhARCxE3Bgtjn79",
  "key10": "PRwWL7UiYnLVXgySyFJwfaUNPb6XJK6nHVzAKVLQVAPGDH9zqbYZNA3a2fh4sViLw9WXQ6C74enDKvMctJthqDS",
  "key11": "4WaZ64DE2iktZqR92QmG5RXtHbJ8iwgSGk8JDvKhM7rv6NUTzpXKYYMkaTZ91QY78zcdVYQp2XvnaNijvzmmswn8",
  "key12": "2r55oCxbATRHDLXz7bvibJ4J2P44AAHJ11ur2mizzJXF1UzGrRDZ6ydoiLcgvWAVCpTZNByppiPhAxhsQuWBSLAh",
  "key13": "4FaoYmDq9v8CYCPk8xVrMTzV7Ac3Ha22zJ4JUw8ZGGQ3QaUWQ2VjDGjjc2XQGdBtQhqZ7ve3A22AZfD4ruTXQdoN",
  "key14": "5GE88eiLaGgUtCKk46ssQLTWSLnb8rJMccNUY39XGFhtAhNgDzYyTd14BEQv1dP7h29jxZq8Pky8dTY3dJwQghmc",
  "key15": "3uFAiefDuE151Z3fBt4Mk3NpCw9GBDUv2rrUuU8ZJee3neqHPcdmoUKJ8PR1BmdeUnzXBFABKyLCjWNV1H4WBopP",
  "key16": "4xC6c7M1DSF63kyPmRBisKBnyQB99CNFDDNRWewg1WHACZW5KZQJ9iyzZo9D6HEiS3Qy4J5sjLH7k8845f3SBvbS",
  "key17": "27Q4FK2VWpSTT5GCJbSJxQQGdiqzGARCNHncqG3qdgxWi6FgYFkpCV1JTrkTGJXJCmycwRGM89wZcTwhTNsPumSB",
  "key18": "3h47b2xkbWGbLsN1RsSeSzfE18amN5b9Aj2x7b2aDwNNmki7pDCjYhx1dRy4qbSBbT7Fv4uoDNMR5gNySyymaD9y",
  "key19": "5dDr5AyHZaioehaQgDWtdcAwgiv7gwJAT3LX6FBg231svpsfkeRCLdrPjiF8m6Y32iM7pukW2TXV7nkKkctmaGEt",
  "key20": "3a1M4xcfkVkSXW885woroUzbov8PdKMXxeMukFm66H3zuoGBs9ZPzuAVphd4JYVbZ2KqZvQdwMAeTfrLC1zbNJET",
  "key21": "567geD5uj8DZAscLdM3VHzPQ9Kt2z4s1PgNAB2h3K3H3FrbLM8wRrGoXUR2XsgJfE39gYfVuu5JxzKWFzaze5zCW",
  "key22": "3wtUkegabX5kekrj6jeQxXVwG29kAAFLznNEZrSNuFQrzrkiZuttntso9V2CGafeMgMHc5CoirQYuTxc7ZtHQRFZ",
  "key23": "F8QPknrSqwuUhCJ3C9nzAR8EqfGoqSa1ArKcPwFcxKWUaM6b7cghGygW7oDnntp6J2PYXkyB2Ea6nWWZhtyL3u6",
  "key24": "3Djpj9bgDoPrHZYjh3A9znzauqEGsjtUrhFUi5ceNEQ6X7Jidak9hsj4rMobHUNECpZaEqRgswmtBzaSrpyt5ULc",
  "key25": "2rtv12wA7Bd8XDtDfuFKvhFHsXS9y65RH8mq9dLPFdc6eqW5J8Nx2uDxP81RmQpMXAxXsD6RSueBenqEwa4wFamc",
  "key26": "22DmLo6z3bNZ2Rj8JEE9qBo8eFjZBQp6xKU17q2F3B6DwXTTHHofnir5VUjknJvZAZU9GrqPuxbyTTMKbUViU9pj",
  "key27": "38NjkgpTLaz8e8veeSGbMGbRDwRvnYqAsP3i9ZQg4mpAN2N1kXpJFjiZSZPiwgDgvwctxWufrLqDeC6WzzoaHf69",
  "key28": "E9EDYXW1GsJyFvmhi64oZ6A3FDxbwqBCSgeksRoNrG2CG6MZ7maehFJdvzgxc9k4gWbh3yFRT7gE2b8XfmqciBS",
  "key29": "4Y6eBEsDw9tMcPLgVJmmbvjBA8E2KF8aRPeL8JF7FSfGeNXRkyxsWStRx2fVwy4vxa7b1vijTeYFbmpRhhM5irbU",
  "key30": "3VFKpwzPebYrnNqAoTYzjWqLZsAs7upSSZbmHtYVAQhrDg5rwyUtJR3Zyf6uyqxEHGvGxaw5ejZFmSjds14JsPaZ",
  "key31": "Jpg5jVEbQTRc7M71keJdkMJmUAgPjAHSmQvxuF1y5kJDuncwuHsTjr9xwz5hKs99DLPhNRRWHs8CmbhtuF4ycVV",
  "key32": "5rnXbhPQd3joe5W3g1wZ115GykC5ggTn5FKDAZToVH3ZGM5z7f2VJYnskgpF1J3zWtb9duC91kvfdAMuRQCHhZSu",
  "key33": "4Z5wxRhVLSUmnJXFT551VwWoBN6PAFFVhkcXEuRac17dWUFR2yz1TyP24tNJ7JrqJkcaDGsLpttHbbunW4g2K8CP"
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
