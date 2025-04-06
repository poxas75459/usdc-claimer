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
    "41tHXUF7vMJpYbjnX7VdrjvGD1kdcz9MaLDR5pR1N9cW31t7awkzEjwqCj1nhaLds1CQYqaATavwxFitGH4NJtnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdwvCh92kZ5csbshXCbvEAQXJ43W7VQ3BxWoRV7v2EHy8db2SmXNhuw7xh1HkUA9wBkZ71W93DhpaRYvL5pMh7X",
  "key1": "XqSFeSsgteASos31mW8XpUFbWNU6hBSGGFiEksDQfDpag1FnXKkNYWzvefmTTERrmAz6tEvr1kWcS2VsZn9Scvh",
  "key2": "528FysYFapafTBQmHPTGsyXxnXuwEsFBqxvc4XpTMbdYwzpD3uKSQQPY7E8x68bMbwgpR62dj5Jxq4ND6MNLdHQ7",
  "key3": "8EcPihJzw1f2bAZECeoEShMRQQFW1JGdLS6RUwJ4TNXYW7764yX3KoooSuUsQLPHDvHoZQtYJafcWff1aXPk1cJ",
  "key4": "48tb18wf8QZqdZMkugqJ8uYg2sDJSxXF3iSsuiSfYBW9JLgYY6BwvW2dsw5DoWe51fx7eRF7SoTH3rc2kVyYxGsC",
  "key5": "2c2jMFc9YULWvEP5bQ55JNuXeaWCEyM47o6JbPHy5DMjvL1GVieH2noN25ywQunNKQ9mGWb64qHMnrX9XJGphBWn",
  "key6": "643C3EWSFXQuQgj7nDAKsp4AjVkYmRUAx4W7gp6uK9YGiisRm7FhrRnN9RmB1RXq5oANqzYyqYFa9Z3nFdXfS3nW",
  "key7": "uQcCPNc7URu2sDmbcfHKHbqudSwxtTzMhF4FUvU2UyP9XJw3aybYGrJPBauGR1oKxeRC8kvgC6M9Rx2gf8SHtuP",
  "key8": "3N4TVWpLuMfNB8ehA6HdbfZNubAZ8kAn1b57zHzfr4fQ5Jch9uj1nsP1rJEP8uyq2356SYQHDEW2omKEBF5vmV1F",
  "key9": "4rckdLj1n8fNoJB9G4r5sGRvrkEapdL7MMKWQ54km7AbhZd1qzXXjdThsoYB1Q8Q7b8SGmeVbf6FjzXpQX14ESDt",
  "key10": "3TXBXf8vXGnbYnUMjn7hWo8B8vSEgVed5Wwmv6nYDmmu4bN6zWFhEx2ygBDVznLVZRahSTmUFCEuSo7ANvk4u2FV",
  "key11": "5GasKmn4d3rfBJgtWAEwbKtPwxwczRgkddpaouS1gGE7LYcviWT3HvVV4YqcJwJ28zjV2pLX31L2ZajSA38wmfmk",
  "key12": "4mjn4GFmwVUhgG2Nx6SbqPjv87qHdVdak4vZ2F5i6qWGRyDdEYWsmMNLNDvNzFzQbK8BkB8KnG4VKsuJvqh9B6uv",
  "key13": "2KtJr11vwi33wq17TedLLRoeGs4sVVKh4kUfLwcgXpdyYUKKsYMnvhUGQfYzVjzbDaAirbqD59eTqmBEnXVZKRUi",
  "key14": "5f9cd1CUVCmNW35GKDXC6w17XAiua5weF5o4AisL1hAZc3vaebwUR9Rg2E3iiNwtuz2jTLUigjCqVEr7GZCJ3kxE",
  "key15": "5QWFmVtmYwP4uVHTXw9bB9TDunJgbGfMoYzDMDS2cTcSU6ovZtj3XEEYK7g1oYiut8d3RY5Fy2UxgsL27MuVRoYh",
  "key16": "3wLExDUJrvFzXKXCedR7kRkvG9tARLAgrE9R96K3jJY2JhfXzXgtaZp5AbSpewTL78RQf8D74gjpZjNfP7q3sQiC",
  "key17": "5DUkuxVViKS8RoEEp9p7oVg36kTy3zsLbL9SetmmfsbtkRzu9g2cihbv5ZFUNYbhvpRSSd466qpAaQUzoDQbajci",
  "key18": "5MPHASKHbCRLGqiKjq5X83vL7a1hM5yV8LAw9Kxno3xe8G4XASibn1RsyDgUkYsywCEdF3KYzTfJUhJ9wyV9CScW",
  "key19": "5UXqkL99fcxAy6euuHgx99UguSuigVNVxxrutqrdGSFbqCyheCjuQRMxm7Adcokjih2gE6BY5jQQxayvkgj11Tgw",
  "key20": "4sXpC72F1kzLLGwvVRknzjQYwBPaP3qDUPLHvxcd7d77xb3bgDYdfWrPHem3yphwuzXVaP3jtsfGcMffyNcyWvuD",
  "key21": "vHbZSQFQnCYYm3HMYcsgBGHrEqQbjMQwt3DXsaWuivURpsiSCHkdZDFGN6WJQbv9noZEMMoFR5kGtPn5Hu6WfGz",
  "key22": "m3NKEsrtqeVPFUUT32kB6Mer6K6d1N4aum4iBUeJWBtfCMHrNjgA5627Mdn5SXSfP73WpXsMX5HbYxdbvuvofjF",
  "key23": "3QnCEdCSMbBy1w2q6zuXmJ45eezmy9ZFnKQLhCiPemxREH3dSjDycErX4wTLp2CTXRUgiNNamodt6HUBjHr8Ajpw",
  "key24": "2LoQ7pSkDdekqYN5DHffCseXh5toytM3cpo8EhcSqeCJUD3bvndNo3Tx6gvEFi8q8CTj81QmMyj5wdK5iMWAGttb"
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
