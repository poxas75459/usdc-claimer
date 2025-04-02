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
    "2Ucfr4pz7GfYmvWdeFqyxiSJgPE3cxETRR1EgNWHknzJVxG1twYrSgRiA8A31Smh2D8iJyYNqMQhokBJdeGKHQjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQNZ72iYovji2S45AZE4XNuUegQeNYNxcJczYVAgzyWAcuR31Ut7x9iRtYwBzTUxssyTKpsGY8gXPzADrd21X4V",
  "key1": "2vvMZhKsBewCBZYAomk1PeBSToQrwRtgZfwFnZ8DKwVm2ytH2vggCfgyHb2wMTBYbDqgbRie4Yh3eBsJdU2cSboh",
  "key2": "5xRDuxV477YPpbAFxNSLjP5UDv5wUEnVFSVKz5sr5Z5Nt8vPNt5kuBJYQJZy5tZvJS4cg1ZHGeEUdgZunjWHDWCn",
  "key3": "L8unqvsMwj8Azo4gFzxuKsRHuWbWCXW2Mdyu9ci8HGwxcntVLHbEk1RwJ48qUCtXRyMGz1pZzdW71yya1o9WYYT",
  "key4": "3rvBJxMbT5fA25SsY8zah6zBugT6NkaiEkf63uwkdwMpf25NWyrDvKEJ5PcUEix9bWa8aFWtpE96J7mG2v2DQnKQ",
  "key5": "R4oBXqauXMRCaazqcp2KZCHg6wWxorCzFQBCAefjSTDzCFXi5VnY1QF5hnUW29SiKpqrnCoqJP25ZTurasx5iht",
  "key6": "5PoPegPQw5M9JsmvAstTGyyuiaizDY2LhHG5pE85G9v1sWFK6DhBPfpWVQJTweXdrHtdY4DVUADJqMrQBw7wm1aD",
  "key7": "3bLNGxfRqz5aJPgwcEms8chahSLmE2dzjLBqGDcaMKDndr5QY75KwaHYAQ2W96ZN7vDUM6oySo5Da5TLnnjS5HLa",
  "key8": "4JWrVJRkaJSyqLn7vzWm66ybuhikTSAVQxrxYYXmHpz2KmifeZDLRamDeYdYXNHDbCaLZqXyS1z3YeMwRqX9Y4Xd",
  "key9": "e2mqnwNpPz7hFx6nMqccLVqEqa6WFfbpZ8KiAReneaV6Ua4cZT2Rgyb9EesC2kUHUKcCHcgypgN1ywPUhCsW8tT",
  "key10": "25bqxXUFrpqX6AhMPGtuMeYgCEmae3GAPhbuAJAjrR2uJVPR23kogEnc5Y2q64w5zQfBcRL7iPs6QLv54zKdvJiQ",
  "key11": "5x2ptoWHckKvvXN4GaJLUAoxmMkYhcGuBrDwuARh9VrB9Abd95oBN5viQg63ecFHA432iAM9FnPJ9M1F6h4Go4XR",
  "key12": "5TsbzTWSe7LSpMrtvt3Hdh9g98qdDkC86NxjWkqqcxf22jZK16ocQBxZ2UvA4ShiByEWhyMZ5D1WKcFh169SsGe2",
  "key13": "bcXXgjGfw6An4UBemT3oMKvLC38aQdmA8hwYbB57F9GgWmtrGx3UYrM5Fw9W3pHgZFy1nxTSet3t23wQN3X82SZ",
  "key14": "2NB926u88BibVxU13w2iN5Hf4E54ZMqytB4Rm6uGKKYbUXYv5WEjptdoxbbqZ55GcpHDTvjCutczLHUq51bi63Pm",
  "key15": "4ToapwM5XYCMFxTQ98qRpfcwjAyuqN1GhJ9LkGf6Xf66RvGPEa1ywriW7YrFvooSB8rzyoVgpfTZNz6YP2pFchtU",
  "key16": "3PpY4fwe5nsSgwAHCZsSJ6eGwM8M53vqdRXcH8XMZdXZM5eimAFsAKvD284zFS2KVZRBSaNGVxmPyVUzY3gdUhVd",
  "key17": "Bqpn5BYCogFwv8keuKTU5QjuBRke3k6JhDspUeLXnxs1f9FGBrsCErzVwtsbzdGv1x3yVKjU595yRNHubZd5ab6",
  "key18": "2KKgKhKw6xpYURk9gUMcawg7i3By4c6RLTpCFuyphuBTMZZ72RChawST32xHGDyRFRvT8jiQXHAnAoZf6feC2CVP",
  "key19": "TFuHjJWYaGysCdJV7VpZWbiwXQcj6VDdybfQC6si1MhB3GTXuxNph5fp28dDJ9drRKqxguANuJi4cqcZC7PdR7Y",
  "key20": "5by6h12UJYAhcYa8XEDtq961gHD92i1J6YdXRBiuD1vW8D3o1T3Bf5jpRbuzMiHmNYykDk3NnQkJ4Rsn32YdRtt9",
  "key21": "4Boc82J8dwv6rycyhAfF7hxMmJnZCoyDtJqZ6jvPW5EV8qoffRqTgSMi412CDizx3YueENeYB4B6CkumDW3eh5Qb",
  "key22": "MncR59Pc9WgFFqPj4GJidHkT2DVQo2ESzGXe2zRzc6MdEUZRtKxKNJMxNivc4ksJNZ99EKMtCdd4efpUapt9Km4",
  "key23": "5a3iipKyEztRUsNe1QwjC4hD245e86dJKCDY3QojLYoupQGQrSjK3dwRkegYqzUqW4S2mdP9dcdz7Gj4eypiGWny",
  "key24": "2GE6QNHv8fM5daKTSp59U4kTRi79A6ssZRKxy8qFuxob9XWY1bCEnhkLAyjgdGSZr47oRdYHTHhthBcW3NzvtAz3",
  "key25": "565HxcR4Ro95AciJi7ztMaaeZ6eSJkFe9tsjztM85Dd32gvBWqYisGigYboho2S9WokMnjyTm2gv47QU1VYqS2xb",
  "key26": "3EXqG5JEHUuvmUBr11DfSkMm5vYLRfP4QHbXLyzdBbRd6in7c2QD5PnwwT89BsmSgYKxZMoYCg6ZNdWTPfgtuNZ1",
  "key27": "5tZJ6gg2vGymKv5BFNccua3D6GvCz4cppdQ7L4jE7CsGZKGe32GSuhXo81jBPXXtWkq1eG3a6trip3vuh1eG3PET",
  "key28": "57wPg8Lha3Gj7wk7evhwSgaRsPWodXzbimkRLN4Hw3ReUq7EUBdZL64nAFw8omr6vzjkDbizrkG1XJBDsVqk3eSL",
  "key29": "2iRqcxMCLK59QxYpa8eVAzrYYgw7nZpn4aZo3u6RNXhnQdsUQrhgQwWpiKR7GrTEgmEoVjMNU2wytf1ZbWrGTwqe",
  "key30": "NLFqYjt8HMykwJB5fYd92x7wURFqJuaUGtxfa7Mnv4F8KsYexKkutoCFUGf7YLTMavAkDcUPHdaBaANEoJdJTXc",
  "key31": "EHDiXXeqxZao3sEuzHySjPRgvRsW4hGu6LxLsJqP2oubmVihKthfE6UscM7d68URDa8BfHQEGJPCGyGZtMKrJvj"
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
