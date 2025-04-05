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
    "4pYy5NGnm3U6juCxghzVp7ccEasrwYPncL8RUrAFJoHNer5iY9eoN5SP3Kh5i3b4VZw8fTHALDqrAjjU82po6eV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g92pZAePqQaT3SXU4Z5AJBV8DkgEN3DcjkrFEU9kgkWTFQtp8UxqzBFzDKAQ9yZ7aA5HFScqgHKuabQ7BYNPveR",
  "key1": "4Z6ziF27WPf3E1fdNLvEnbw3TZtGUVJTXmwehyghznE3HND7r72FNbPhsQv5NYBRLEiBmvDYiYTufFt4teGMCgjn",
  "key2": "2CazM9ojidWbBQ9Zm7Fw6DUhb8enDNFgeEr61MnfvWmV41PGQ8juPZK3YhpYqX8GX9SXV2QukSxBMA23NVmA6Gze",
  "key3": "4mdU9K2s6VwmNSqpyafQHYf5EwrnhkvSN3A4s6Y7qHB3EKEiffN1VtGLHWuexD2CYjHfvcGPE8QATJDTv7o6j2Lu",
  "key4": "2Kkefwh2JpUcULfKTBM5cMDGpynz5aqE5yB8VAgKRUZGMYM7cvoT931KSL4npbXsEHo6vAVha9UM1d3fxqBWQ3MP",
  "key5": "suhtSgP1SLeuVZEUeWEBUE3n1f49VxSCB4dvS1A2pEdmvqQk9Yduvpy1adwUudBLs8bBWXRyMZ4QZSJd1ENHyRA",
  "key6": "3sShMfKxr5ag4TZyKZZ1AxaS4eetBk7Wz4Vv9ToKYWebzevJ6ApdcFz2hVGbpMGLgqhso7SYDAkiovkLBXroTF38",
  "key7": "22z4oRDEcufxLLn6o3EEVRSKso18ARBzfkXPRBnGZPsh7NWkaBsYYf1V57ynigRRVc6RS2J7u8vJQtJyQvgYpUk7",
  "key8": "XpB7fwmLDqgUNUSijvLinMJDFxLQLh7cDKBYko17F4h31GKiSdPj2uMntSwWw3ZG4yUwhEWoJQrgaNh3uJWqMww",
  "key9": "5KMSNFRSmc82SAn8aLkEXCBwBZATw6vgt6HwVtsrfRZT4Umz1Lh74ncvhvvZ6mdeb8GXPwWubFC39SN4iQ2Ydd38",
  "key10": "3k7WG2or6jyTNStG7jrDc4fbBVXnwB5TSjC51zB8jrxjXmsx9YsFfXPLLRQzLo4qSvAVaFS4dLSp1t4gH9c7w63U",
  "key11": "2ucPrwmkKXoobZYuwmnpEKgwQBeyyH8C5RuQu2xTVYQ9Ni8LKRFB92qrB6wEa3Fdp7koYzYYKzcBpmY3G9ESdE17",
  "key12": "3ewMzdhToEe5P68EcGQYLRfPTmUyjk4X9MtAQ92HaHqgALoaunv7tbyYvAzc6NrRa7k96bwpWKgckCh84HJWk1MS",
  "key13": "3pQRpPSrWzt5bqZpJ9n24nDUKWhaFJZhHGnCkMdbr2f43CmHaiiDpKf7CtuPb6kXu8gKUtAPHY8KD6G1RvkYxw1z",
  "key14": "3RPT176Pvzj2MmNbmTtBtqJCPHdhLWMkXaKnpHx3pok8nHjVE6PPfE9yazruMmuiy948mvUyQ1WRAnxb69qF2hFJ",
  "key15": "23JKYCok1dzRoQAJbFUez8hwLTv4ntvL1nF9PeRKctm2t7h8xeYRNhJChJTg9h85pehuuq91Dv4FnHNqLgkXpYhS",
  "key16": "4ZFkiL94GhdxSta9kop5G2M1GrenwPikQhmAPU5Jmj2kLspkqFzbu69hN8hBwhioxC4WKufgSAdQ5GQWe5B6Wykr",
  "key17": "2hqGPgC8gQey8zBjaXriXnoSgLs53zLuGmkYLVWv3gmugEEW2NP3gxHiJryHYpXwf3Ehxbq2VxJQMf1bzBtBHhJr",
  "key18": "54SZqPqd8wtg83z11smSsrczF8jVGbkg4tmZFpY22NNNePW6deAusiuMfx6iTkkoTTauQ9HJEY68VuMy7LJ53PzR",
  "key19": "2HaNRJSNFB6QijkYbSe4EtNTf2rXjuFtMeTBrcg89HjbZNSYGxQP2R6VfepMmksgNL6zmLroCjMm3SqKvhHMuaqC",
  "key20": "4z8bEaQUowRT7bmUZKeUoNB8cjiz3kpemw6HTbsHJCbGKa1hMF6mJQuhQxmeuniBWUrLBnnkjN5xNt93LGFXSAmF",
  "key21": "36ETi63K4xw9bTvq6wKDqEiMovVQuYiQpGqjqac2YL5CS7smNCehXSZfHGWw1CBniJBZWHHN3E8AKxEvDzpm7SNh",
  "key22": "549covHJRUsTzobtm2tC1xEgSCM21nMfPtfAWr4RDbiRKMcQ9gceo9BxBZ76XL4dpi9S2Sqmc4Dyp1Z1LVwx8fXf",
  "key23": "2GgEPoKgQQ3pgCdoF3PXxioDdYAVj2vHWSTCLGqv3jkikLHw5p43TX4PvTGvkaFPdMkWEwGFFZCTVS68AcR4tQt3",
  "key24": "4uakh5EYfq59GvMQHsFGQ1JT2YkyJn1Jx19fSX298VsuFoimnfm6RoPDPZuYJHBFZMSWoHWCDwiET3i3pXiVkVyP",
  "key25": "5pVnpz6J94JsixHbpbdQ569JDwb75qgDywdjSsdGF14e8Btv8nhekxPUpjLmX9zbjhaN7bGNDvGyTWTAcDHV9bUA",
  "key26": "5nRdrTA83cbATDHBtZVwD7httzRfohNYFx8rDzppn9VKjy9U92FmWGJ4rU1STCg4qEN7mPXwVFxexv2v6yS2gb8"
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
