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
    "2ePi2v8ZcvjtSUB1qHrcGujQhU5JJoa5c8kuD2Bo3Ba9M8eZTa5izmRvFmyVUjPVR2Vxux9efPhP9JZMY2XzR3k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zz9KfbJitrpwboeGxcbosL9iqdsFwqQtENaKQoQauLAbhAU2xcJy3aKLmYoHX2qyv7xJuJXM6xZbBdzjhCLF9si",
  "key1": "2JuFLXbnjGd8quTZxzfEPaFft5Mr7sChVu8TAFXDyDN3WuppdQxL8j5m28TaAAu24V7PT4p2332Aky4eaZpknMTn",
  "key2": "qNzUtrb1Fgp8cmQgLcFfkTBFKwxyxN2d6MurEMKr923WJ86N5pVU5cPcYFDNZG5XB4mKhyocc4W5FHXNUz8zNNb",
  "key3": "3mKQLEbbRyF7RtGg6z8mX8j1zRB9Tx9wqHsjQesyfB5mTeSvVXz2H7KhD9iXyQDUjeZtG3YgyCXk14LVudnmHfB8",
  "key4": "3DPceFsmD5Ubt68MJYcJzJx5Tmj6HDSfN8cpZ6ggaYcmbsKYGj3GXWK8ywnPeqtitxq9zqyLa4HNFgdXFViH6ecP",
  "key5": "2z7keYQUqtkb9KhSXNeMnHyKXTEEWdEBuFGRfuZPuZAFvmG8dgnAHxTBc3TRKSynrbaXRJEbh3Hxtr6c5TnCcquE",
  "key6": "2AtxSNKKMGGayQMrP9KH195a47ioMCZPUYMG9QT3dV3khxPezq9AwiYFMrbTKZfDsyD3oV3NzhbK85REMgevU6ZN",
  "key7": "Y91aNXLL7FPRuMnq7Kxv1nj6Um3qMVFtb78fnYzJJufQzMRKBxUVzA64CHTd7g2iYeBFuyZyTBiibw9WrMQMHNS",
  "key8": "3FeazX9i4Z5cWXSo3e24kRYZWfubZuyKtFS88j13vaJU5VyrJyKyxXTbQbexhekZPPNRSpXi4You9DmUzVARHHRA",
  "key9": "5YZLKhneTjGPVBBKpgLoBnuVD6v5x2vjq4FyHpXQtGTeAv9jh2wB7A2QZ4dgfuGamUASXyYaawWvyi4MVmumRxAE",
  "key10": "3XgEz7bftZFNYs1temx4sQAZxsWr3AmjDZwC59g9L3NAVcWbUzofmUEEKaSNYzjwh1bTyuNkmQUombEsmeUnt3JN",
  "key11": "3Z1YC6b24jCSP9eEXFiY9h1dMqssNjnaX1yanxEdpdhogXGWiyykSDz4cecdG6tu9wT1SxM9hrkzNxWVM35zH5f6",
  "key12": "28Y53fqqCVe1bMrmTeSTNbsWH7pG3qBgiuWvFV5Wj7UHbzZSn1WTrty282DqFArvPmVHRTa8o2L8DUqsGCjQVyGS",
  "key13": "2XBQRJx2ZC19Hdwb7aDf9YrwR8ungVsUa1regasfYKjduoeBA2KjDsBPGVmM3ZWSqkberD8xD2uVToz9dX8eaMek",
  "key14": "2QmrNkHg31mJWUoMCeVggLknnPNEvJf2xULqJ2B8bsujZB1ojeVKFZKTeiSMwspgnihHRcBAWbpx5H4i5Aw3qyab",
  "key15": "EBMGDQj6DLNxE6Hmdmu1fHQiweCwVY99MFw96DvVybi8sm8niVY7YdA5ZuRi3TuLX9cQN6qf8nEgrjLearhU1pt",
  "key16": "4EAzt9VW3FyeUyb8p8aDeNAwXPpBQRiEZxzA3TMuX5h7SB6wi2rVYpj4kfqVPy2yua4upviUZ2Xw6fxsGPvHjki7",
  "key17": "3bwSLZ78n4nmRpAh34JTEm3KTVVq1atNEAZV5WcFFQc7kBVMQmLD3vjKokPNRcePVdYdaqKtuBhtq4j8wP3sQWbb",
  "key18": "4UrVSDbjYiYWZgKEA5YPYQVzthbbXnS9T4KfMYtCLybw5QBznmJbQ7Tee1fNCfn3MZ99Di681aLteoZ46SdUGCRE",
  "key19": "3mfDxZ8Fvt5mhNkbRNytxy1CDRYyQjLTDTVW1mZnniK8KkRR9aFJ46iqv4XVVX6ok44gMUepfbeMfexW1Wktai2L",
  "key20": "5mpUQkQDukjXkxecVpeHeUzYqoi3asKkc6L4fXbNQfeqXTu9qaDeKHgLLAVt14sATCe45QiEmQGFUY5XKf49Y6fZ",
  "key21": "4gYrzPgrwrdsmzsBNG2iVGtTmUMsSavNZYkCP1GWNtDBHGezioj9aTb2V1NUTLshM7TsfTnC7M8u8aVk2duic87j",
  "key22": "3Ak6pZPCZZepDqVJmU9QVQnWnv4RDp5HWxXEkicz2JXpUtSj2kvntDYtcUG3TvmX9hjjWsFNaBV6DKFn2YZUxVGc",
  "key23": "xaFAx1BwXMsZJDJE6eKGjBftS4iNrJaKkuPZmFyd9E6Q4GhgWiPZudNgGjxVBgPwkQWDzm1GMar6sZhvWh2qSHt",
  "key24": "5v8BSawG7FLNibwrgPwbUaLLHoiKQEaw1i7o45k1J8KEVDFGxQxQpvgmtywaJqQR96niL6NLoUCxR5xeULmh6XKX",
  "key25": "2SyAQ5B6xrDiRurbUgVpUmvHSPSFJaHCkKUAqP2PErKL7uzzYYHzp7kkwWScjWzboTohAY6BRttgWwzJr8j5A4vY"
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
