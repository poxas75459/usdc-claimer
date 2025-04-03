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
    "2XmCY8AEvjh2wSkjbrzPq9M8oLZC3zLvWuRQSAnQdMQmKZQ31F8q9ExPNmDWm1n9j6RrFQ3dAPdbHzBn61HoF2hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhA1ANhsey9dSqpxMVWxo2aQf9rYf1Lh3AkzFRkCLjVR5pLa5poS4FoRqPzCtWL17v9zs26EBwQb3Jzd1aksZjB",
  "key1": "3exHCpwoy7ZLKKv8e3rTFk84DuKbWbAUov53XFsVoegMuRCmzGGSsTYrFSZcKJz4kxZnp3efPLNUt2k39JVayHCq",
  "key2": "598r476xS5wKzKoC9Kguem1ncBjMKYKtNcDgHwvUGWpwsa9WB78i4SBkXCnftckqxdyyD6y1HXNGhc1ZcpeVbCMx",
  "key3": "35cJEE5gxsBQQ99Ju6H1gYRPT4hNqr8rAsFjiLBrg351QQUeRhHWWbRc6EZAtLe45KVNsVwDxVx9Cng7NaWGV31A",
  "key4": "R9Kv6TaEHbh1kvgrYqgFZY448Q3SHZeXdADc8hR2gJnbtn7XiJaU1N5pH1Awa79S4CQ5QrHh9GC9JGQCRKtUtNz",
  "key5": "FBC4N7guthSVyRVUVWt21ja5QPR1YuDeEo8wrdAiudGXb91wC8xEjjnpcPjFCMriQ3NfvSUWvC84ay3jQqS1m8L",
  "key6": "LVF78FAQfRTxGuCVAgVoexqkeDmE8WTz6mCAe5DmnV3fWrmzSaEkj92kzB4wgUcBvx5F8xFsmqjcYPsbHUZ9vhU",
  "key7": "61gBuJeEtj6riCBiiEKkPc1ceiaqsaW8eLabe4Vrejqwt88f4UfKn3yCvtWgFQMNHWJvpGMHLR56prnfwmgQbqwc",
  "key8": "5qCR5Kas2i7tFpGTBdvP1Cn4WUUfoUNCUpYoHoqFQXKSDqp9gGfKp6qku7HHhHdaFndKdrfF4Q8ZFQ31u65Tbk9p",
  "key9": "2K884XC8XGR8Uh1P7tBxsAxMMLvuySk19Gz9Lu9scWyXJKGHQZANmiR4Ymn6LirmLRdZHrNiaZdp9c3E1MpCpdvJ",
  "key10": "3ipKATHAfDwZzrgbUJxUdqXxE1o1Vb1Zrv6Be2rE5CK3BtxLpKZ1ySJJjnRzBP2YuLeoEqRkWmV3yeCShP9AjCBJ",
  "key11": "3xVeF7zRDnMjo3xgdeYd43GHNLpULTqbuzGvVJxbXf8Y9G6YJRDuwWZzU5UD3y8erYD3Lqwra6qx3REWYvJW1eV9",
  "key12": "Hx2Ms8HpBVKuDcJBteanCFeY1yht6sUB1MetRFzo8cfCEbWPP3mYuZJ8h5q6y82feJAR8AeqE2LSWmVNxVS9NF5",
  "key13": "48L1wxGkLGcUfhKXQefVM6dtFu9mASx9Cj78B5nGPhjejdrb9cVrtBDjoTjNyYFmjXTq3Mruz5hjgUn38n8d3rbC",
  "key14": "2YbWYJrpYeHwZPzvttnT7Q3gaVwmq5NNDLamzVCrnLLsgcmVATdR1mKkKPafrttCFHHW3BakZJnhdfJRAhqyJKCG",
  "key15": "3AuZpkRZoHKFQeFeVAGxnN1NKLGLBGdaaxjYQKtT3QCSjpSHFsaFwLQSX5WzevzJP1KoZ1WdAh7Z2hoBdQQ2P9NK",
  "key16": "5Hp99azWkJnGPPDJ5vJnML19AnjefKhECi1uyF52Cur6J7oLjfwLFdhioU6xd2mr5bNhipBQzxXosAq3F4xzJ4nU",
  "key17": "2pJoRQMfAkfq717XdeVK26CP9pbxRo4Fv6pkzfUhjShRjirjggfsRZzD1Dd7V183vYpYD1GkF3nKZCq63jWLFPAF",
  "key18": "SiWW3ZtYqjdmVn7wU83N1dPBV898HHK6vrgG4yf3Z3giB7Q28BuemkMZBeudhuK6egXJ3LCvZZgGNa2XouYAZEg",
  "key19": "2x1CD98wshJTH9d1KiQG915ssBAzKc8pMW1fApZ3pKxsbojqSmU3r1PZPHyFwQgNQMw4ZvdDDjddR3E6HyYUihEy",
  "key20": "4djtYZZve6a34nZ5JMoNSc2Y5mTRW4QnszHTdt9rbhZ7eiKUQBmcB2fht3QjDRQbNndiZiKHHq1p6BySYxJBAXXX",
  "key21": "4USMRbVoWGMtrnYbXaQLgs7xh4nRJriAZgZsKS55LSr3HA8BxDEjaf9AfFuNXYCCvndfLjBxWMXBqvwNqLdEYQ2L",
  "key22": "5Q1tyPPLDg7cLHqsMMkpYEYhKWJono9fRQk9uQ7prXvHBzoiTLxjyMcEc23Tjt9exTxP1UVSZmFHBi43qdWYJZBL",
  "key23": "4edDrnzN8asfEdpbE6SDbS1mhe7kUKqvasi6MVTetomsQKMcbcsQMMwhN9b89o1SrL5nBQdGtA35CSgU71oQ98LY",
  "key24": "2BDq8EGFsFprKp867e8ruaWLkUi3WqKDJTBajHGTz4rzeXiwVxRg8i5cxfdLjeYNBJKSNwabxfBPRG1aRJRfM8kL",
  "key25": "3nmAvEWX6NzkuNXa8JWtaECEQWQVE7FuFTtM9rg9bsqV1tUPs6M2zcM78f8WRdduwA5pSUbh5bh37wGw5XEFyLXZ",
  "key26": "3m7Heg29tewhsDYi6rAD3neyy4uQe5UkqLYQpfKc8Teia42knPSCNNkArUz7QADZ49x8jCMxELuTBH2hp9uvhQot",
  "key27": "WXx6xCAB5gSaqYZvp5YesSrxht2fDuVGQHHNyopGG3MznTJnqi6wdykT5f2jhUdj5sCnB1VTcgX4USTn9Bx4hbB",
  "key28": "67kiMti8sow45GNJRjEgNcDFepu7k9BySXhAihtp9DUsPkwXsgkQEvHh2MowLNJymR4Ad3PKkv3gmwAqA866jGor",
  "key29": "34i6CVSdVLwew5ujqgdq6UC4GNu6wiJp9RjTLWpJqbSbBa2V2ofVDGp29yJUf5jkR3QkrtpTceEYRTm6WaFJK2De",
  "key30": "3c8Tiat2XRjBDw5sHfyS1zeNS1kBiTPagPWLC12wzjo6USErr6znyNVp2red2DjNqLJGN6aRZe9MNgC8eX1bTmYc",
  "key31": "3PLuGadVqC7zzSJ4e3dwFYA9jm24YmerN8hBgKBuEHMQWjLHXsPdbzdGZxSaCDR57yTsFLTCnUjjJ5F5tzBnRssh",
  "key32": "2vB7QykPJjt4trosTvmUDfbtM31ifkj45z6JDKspiyN7ath6pxUi7rtZFQqZcwr1ScQBp5t6Yx7LGbHxX6jhsXpM",
  "key33": "3VaWb7h8qvEwL5r1BiefurxWtYPNfjLkJdhkDmmkseEf1nhADN8BNWd2vM71Ak5j9Q2JTuqTBqwiW9rcxZQq87cq",
  "key34": "2xGyQEXU4oxmcH2Rzsvg5uqZvcmvZnspLbhfAX58LScQ7skiVZbFnPF8UJBN8aMohwafGnLvYTuGt8R1tviSxt19",
  "key35": "2JsdWf5rDbsX4PHFYKDfzK9StUJVJX1czqjw1gSjB7b1ie9ScWdC3zc9b7bEydNHgFZTK1tc21EPN1UDJytHPogX",
  "key36": "imiQYcVzCkszrgb4C7c5CMcpgqkciPB9aHrPci9gzjeMCcDRDVstszeMBkrgAgrCBk6y5qjt9z1cuXv7gjx8mNG",
  "key37": "3oZ5HFfDREtY2j1DyjPhtTbPFG2q6X5ggE7zRTkbWnVrP9nM6rFUL2aZV7yHpHga2orpixVT2aopDC53Fj5zkaqY",
  "key38": "4bec5erehzcuF5FgupYnMYUL1eGSv9zfMryHP44R5tfoP732ghSACTM5ts5z2fAYrv1LeeBVydYxGHYBvpMuddxh",
  "key39": "5mg3JDC9QucCPLKEhGRS7J8Mx4CnHKUaEnhUrapTWoz81JuFUcvDtUndPQsRM7ujLN4z3XFEWGFzXGieR4MJXg6g",
  "key40": "3AMkytX39PngTuD1ipfGkZwS2SMhdwKLKsQqDekxWGpY9bviDvnRgtJK247oz72Bcvofopw2xvd8RfkEhySnvfhc"
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
