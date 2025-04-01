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
    "4YnxZkxhmybQ6VTxrr25abPACTH4XWmWbp9Nk6y7xTaTdbEHxyqoijViZsQbvDVHJQYzePzEWUSCJfXxVozReUuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uLgtd7cfj542amgqnqj2gKJP8yRf3FyujqQMgjYuqCevU4Ly2Fp413NX5q8hUGna9mumgyrwjV8vPHQyRpRvw46",
  "key1": "5jNaVm7nnKNuhh82okRAk4eMRcf4qYMqnP94K8zvZwmbXdJPAf47RyVNQCEt8kxWq8UWfZEVGGp8wwBy75FUrbqH",
  "key2": "4HAAEFV3A59AqtKztD4vWBuFChaQPfCxMN9LzEb2Zue8rq7zXgD1oKZhAyx7g7fHni9bbDKVTsQyJ1oLZ5XgpqnT",
  "key3": "2qMow1x4q7oufyeusZ6UTabhPyChTwMFtGx3vthKo3N98GK4G9W5irgeSEKuKp7GcNVeVYeYbm1ZrtP3TmEvGkrL",
  "key4": "56nmP2BiPnvTP56LWNKRyj4mPJbVXFbBCcgt5PgHY6yjGpDrSbAUFoPo1QHoa9CXLBY8N9NbDnn6SXtu1NmuuCjb",
  "key5": "4GbFggQfaSUQ2ybqeu2h5uFf5itpXoQNAeX7aCDYfVYQNfU6QJ7BhPz6vBAGYNyGqH5FKoy77iTF8j5o5fDe6ny4",
  "key6": "25iKu4QtR7oAN8TBBEPNoikyw9CGZ5fcABfnN9MfbufTmcBATqNRNtpF3UqhWKQg43ugR8jZdXtmUZT5px5rMhAL",
  "key7": "3AJaNewoMpWm1DGp4ZX5jWwMVThFD2szAc1SAWAty7NsNZK9Wzw81WLb4zaMhA8AWjmUMUjUcC2AQA8AX9WvzGf7",
  "key8": "4xZcQvuUoRwEG91VSnTHEynTXMPMpcyUBjueHEdC7gyBnDH2FJc5vby49pT5myBeNHSgwUnwnSJayTxpJuyLwo76",
  "key9": "3yVsVAJ6RqmTB2gdfcer6kiMFnB5K99CK5sG6mTuzbyymaXTMEoTkKaQkTwqXs5ErhkUXbP6uwCrwczT637chd6U",
  "key10": "3uvghJRHGLQLPxE2DkDSnTDRfxiwf892tEBe9Vqgh2cPMRTzm9PC2zExSUFUWTmqfNcfnmTCG4dVW35wwCiYenmL",
  "key11": "3Pe4cvbGhZnNRd97dZc17BkRo6xdJC1gZ4nMMihkTvisKP4p2Gt4JgQc3D62CrpH22sHDRjfdAXMeiuFjfZ4X19s",
  "key12": "56TSVeuWF2yFXDFnVFtPFdwWwmRWSpgEg6qjQchZuBSJJmTWXp5akFWrdMZsfJ1VfNbaxHzMSJvm1EhfYbbC8XtS",
  "key13": "ifHt5Y3Aq9E9f6BbeNT8Va6rUybe3CX2VCJ8tJn5aGR9Fp7o1Y83JYPDk92Ne7sN1aLu6yRPJYrMcrh4RKjWron",
  "key14": "4CzQ8LmxvXMYTSmkjABECxxx3pe9uCicYPbkD5mZhet8PEqv12VjRphvx9c45shA8CVtvW7HoZJ3JyrKEg7Bko98",
  "key15": "NqhqjbvoLz3fwZQvwLpw2ZmaYBWRDxSi3T6swaSu93WeTrH99TNEH4QuphEEzqdLBcVaY5swB1PyqEE7W5L7VsS",
  "key16": "5mpc85oGVjuQ1DebRtTZixhMakYLuEXK1qNu934d74x92995H6HZH6o56Vi1ZbNfsF7QbCzGWCbcX4rDgPK3ksaM",
  "key17": "44pjLcAqcVkkLGMByGSqRD9PVzoBhbPNstDdsmcMkFiYvf6fmodXXYPtFuSFp3YousssnSoSroYsRhEQ33NpwaGr",
  "key18": "3DM19d3wVcs1fGXJr6rs4zqpC18KX4JMd8xEqutHZnuD4WkEscqKGvDb1dTdugWWg23pfj3CbPvwnK9EF5D6mSxX",
  "key19": "41DszuScqSnSLJV8mEfGGN3B91iHeDXuuuZdSKY2Ch62MG7z22hRkrukphJ7b5ojVRpLxL1uGwQUAENmAz2e5Ctz",
  "key20": "5rJwowzQMRsgEsbHdRJSnp6M113jDxVoEardFVNuy35jzmP32kVV6J1yeujgzHGxvXrqARjMP6wDD1DkdSDYs7L6",
  "key21": "3vBRhPhecDgiiU6MQeftsnV28VzfV4BbQ2oqSswpkHBaDKy2gYpHjqueY9zuGhYYgTqQTpiAysT1UHL3AXKuUJpk",
  "key22": "4D5KrcKgtajEDV14sJ1jTDEDxMzaYR1n6BervxydNvtPWrVGkd4mP6z8o9jyVGEV2JyKxEpQPz3wwQ9Jrc2JXruJ",
  "key23": "36ps7XZryoX6McoV1T7ZPKhsNL7wGdbKx6yHTQPtmfkZMt7SkbtXBPSDLYWcgz9Mg6wTGqtBHKKqBwocfYbsVvmV",
  "key24": "AWGnxZQxE7MZZ4zc1UiqEvGptgM3r1TNkeDf3Ak8mYHmVCF1z8FPZdYK3KExLGmQtW8qfFbFeJqPGCnGqxQqZtA"
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
