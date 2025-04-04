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
    "2TXjiWNwQzaz6D794Zh65u6817f31RozchWboEynJ7Tfu2rxSBR7msXyig7vMVVo5r1CiNgMQTyTn7Mu4CQ3Mgsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWEizMNm4SLLx3n6UUfuU4VLMfXcDF5z9QGidonaA9tPut4ifcBTDWbPSe26zznnwUoQ8bE3NNxhcDADDRWb3ex",
  "key1": "5DF5Y8g1cen6kH5CG9CRy25Epj7UCxxso8LgFGYqrz6XuX2KcQorWnuUkXYSaWXhoUc5Lj8cmRSsZQ3uxu8owHLR",
  "key2": "36pyDpBzuoPAqwN9jbVNkdAd3ps8PU5dFbZ7Z3UbNhYN6wkVkJXoJrJtH3LfgWUoPKFCkRgVFTGpsqJ42SVi3AnL",
  "key3": "47bFM6BHGDi6AJMdSdHrDLw6BTN8D2MDG9X23qH4SJsFTo3odseGR3t8awQtKFgq3QnC29APDoVCQi4nSGwrJ5GE",
  "key4": "5x1T9MJ7u2vK5XBUqcQern6ZMhy8Fex5UXbqNQ5Scc4v5Lf118z7JzrHMzbvBGmbXvHTCXUkYtV5K59pyLRvSyq5",
  "key5": "4Tf3xmpPfwPcfkxGCoeyW3yf5Dz8QWQ2rJJWMRpoP53rCyA8uvPPKT73JvM7QHerRQhAcE2CVnsiAk5vsG8JXMeA",
  "key6": "2YkKsJ62JRaRzmiF6B151tFR335hf8m2bQtCJhhWyqHKzoQ5tjzBcHk5RqVBjAYGqqdBfKr6utPVxsLXFBoVPf8i",
  "key7": "2NAdxG59PJC43ez9i7Go3RmhF8s2ZpRtcTocaHnwXVpWKiZ9m7DXx6yvRVMa3ru6uGe8nkEQekiMez55TzafEXuk",
  "key8": "4hnAXKQSFSexwfXy2ucX1W5XaZmieQHWsS6bWfEzGdA3R3kf6JGpB6vqem6jkg8gaHL1K3Lt17bFgukojqFnGxc8",
  "key9": "insTHfM9S5uJCteHjdCiRJkECcQfCbwYfu4PrLXBtKy5Ntd57KqfrxvU194h3fEkqSJnTa4GBi16ZchGCHSttai",
  "key10": "2TVYTbVyCJ4kdV5SjXpkXDuJVm9BqkD9r5WmZHnrrBrLuuVbbMFmTeixTcVV1HQRBLnr75QKbYGibau4Gt1rNhdH",
  "key11": "2my6PACX57vFj5WKC15nJUJPvwXBC5JqbecLpZNdUKd8vcgmCry8SCRrMdeGxPg7a9RV7hB1Cyz1YMcvZ3hAw79X",
  "key12": "V8jRDL5FGNYV7eetZPe4sg79fj6V3LKLYQeLCRwxbZpcogXHAyVLnGXnoSTaM633nV1T3bqN4Czvsuz9GQ9nqLK",
  "key13": "4WNzJLzfY2h2JHYbWfiiRY631C8VtwbJRqMezX8LtkAFQWXXERr89GG9osUffw7GzgNHnKFBSo9QMs4LGwD25P2o",
  "key14": "5E3BTP6DTCf6Uz88hUXgmFFdCT71AR8RtVCUWRELefPWKVZzL1BZQAuvoUTy4UGc1ZDYkvEBYGQx4fSuoyeUfv8D",
  "key15": "2R1X3DC269E2qTHUaBaipgHBVdnQnPbcasmY4z1sg95mCtaxAL9rZX6neVMLHrFXnYfT4vk2t8eN5anRawb8A1mi",
  "key16": "29bFTLamwW5jeF3AUH9u5BuxaBF8zM8dGmmgNCXxp3eXdYWRC5EutZizyv6dnKZTdCRrca6NS3Wy3MacmuaKHxUo",
  "key17": "3zdGS79pRrFn7Qh6Xa4JrNtB87N5E9cc27K9ABRTQ9zmo3aDSthJruC5Mn1uJhmruuX2bHZPjKroNacE3sXX5Veq",
  "key18": "2rhyJfEXaAhr66KhXXuccdcHWFhnVtZZ8YM2KfbNKNdzjEZTQvDTwTeMC1vj46rRu7YscVtSUr2fQuHApjgJ1XWn",
  "key19": "4NisME7ip9HFdCVTS5FJLyCThMpEftS5eALHs9uEtpqTd6ERFWEDXC4TG7fAQXaoPyNVMdkYFx4cjb4t8f5pKxDk",
  "key20": "39qV7yyZkheBkfhjarYfUbNVEA8MK1y3x69CpGf7ZGhuhDGHTEkWhnrAryTHb6drUjz2dkbYWXZGwLXDwEdXrhsS",
  "key21": "46UJeksgaWQkya5goR7NJuovKiG8EqHmc6ou96sCZMaNUCDYh332CeTXDsEW5nEUkmMAwMN12s2F5LP7bXgjvPfN",
  "key22": "5jCw9Q3UmpuXyQZEdEDfGURZ2pZntCABc6TJXJxX9byfa4U1ju6qwuqLfqt356jZnkBsbMiRcgqVPCYLjiiY6FjB",
  "key23": "3mVu87KmbT4DsdUyDcqYdYEideZQjBQW5SAYF9Trbyw49zG4mLvUvgYCFCJy3boAV3W8ViGeZa33eTvJjqcmZJK5",
  "key24": "4qFycA7CykYWQ41qerhekmrpVZ9qVQF9HYQG5B8xpog4mLmJDZhHDiyScqk5XJro8tCEhBiEyYn3iwcHmDQvLmvx",
  "key25": "Zb7JNPdZqPqE2d9K6Hr4XQSN3tDbGuhNG6tGAX77DwJvnyME5GkStF7BtcxpiERRcTUbxcpkJNdXBRHyzFtMuzV"
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
