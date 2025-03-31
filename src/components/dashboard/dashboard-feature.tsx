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
    "oJ47oPgZoYBHWggMcDddjnBvDyB1tCvf2CDxyJM1RPoYeZ9uTMeDAkLJdfQdMTXD3DAEPD3qC17mtexiV9L19Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7ixfbz6mdVQERxF2kaBM6VUtSSfavmYDJA1vfnYX4rVvnmLe2BTxi69TMRwjGCMSJ8RcWHiwf7b1EEuxuss8Cz",
  "key1": "4gpsJoEmicqDnpLqhcKBJviNu3mox79TSEMaiSqwWZ7YHVMTKoQaUjFyTCdbFz5eozeMG5k3VvrNadvLymoumyGK",
  "key2": "4AxNJyzLQti4JTNLaZdBioUu2Txv5tiTjW8g6Lt3odF6yUdhhfXHwo3sPmVMZJXrvDdf7huSr4RwgRe7rq5iiU58",
  "key3": "2Q6wPLRjtxRwwqV8qaA6LUnjmBmu4DaTCfG9m1r213fNUHNo5PcRX4e1zKryNffBzSbtM9W73fT1uAYgEewKMdyn",
  "key4": "5cpFW6mwz4ACpqzP3kzzFAS6fF48Dp4VK9firpkqQxXgB2aBoujGu2ELAuqWdq5PsmbNgGiU2VPkcNAnYdVXjdH",
  "key5": "uyS8kf2byemMwwFoH2Vh49f4qKndNVzHhpc2KXiUDWAHCoMHPAA9gAp2wagHouMdjFXFhK4rmmrfc7BrUQvvuAE",
  "key6": "DBcMddcW3jjSRNdFuz5HA35RdpsdAxjNVN7RKAqRP2tsmhPsqRqjZDaTqLDJQa1fEDxqSCrJnkrYhPxufSUduZw",
  "key7": "v2FAAhBTgtWrXpj8q1NBvMP1gYusMA1MHyySQFm6SEFhUNkqX2eRy8p348kXbAuENQ1R2YKxJXM1mcCCpHv6H75",
  "key8": "4WP53hXmBEw8RyaEPih4FxKXb5BFJBNNsyWcuHz9oV1Xg5TZmZWXvmLfgDwXNgroMd5dP6SUG7uCnbeKbQ73AgbV",
  "key9": "4zGbZPjMVNAtn5ZERtBVd8uxAi4MLdaiHoNkKcsB54SM4bn2Z1v3Q3tuCumnBKbkEcxzmaA92fkSMA9jgjZfFULa",
  "key10": "rqFkFuGGaUNymdru1Lk7VP6baX4jKBbkwJgmFj14fcBT2BRXL84rQGzM4GnUTDt5cfZnThkKukLBKkrLnCPNAXq",
  "key11": "31Rwg9he2rGaoVhUMLduNj2Qn8eLJVSm4WG4V6jzaR5EfYq4u8yyJiJSn9LSa35Dnxu1oxsWwVBa3r8Bym1ctjdL",
  "key12": "4xsP7WN814JRy2E5QeC3RxVcYpxBE6tW4GYfTL9hW2khTzd7bcmv346Zpf5FfL3cVwPKMPDeLRyigWSE922VcA9z",
  "key13": "2Gau9YkzaYzhaXbhUDLjK9QLKVZpqTGnHfhhdRq2jGo3Y8tS4xyNsYbQnzowBAusATjMwqRKHWVEhpZPe3v8pQpf",
  "key14": "3Bf2Qi9sbL4GqBAtC4C6Rd58PgAuyKpnFp4km8UwH1aTLDYSzp7Q6qozw72RDsm5PZP4kpgnYgmsociym4goBmS9",
  "key15": "3dkGH9749qrHWTMqkVrt6uxhRsToG9Wm6E3Ujg1Rt2Z6sLASHgGbRhv3wEn7wGb7nQaKjG2TnDDuVYon5dCgrKyQ",
  "key16": "3JLiLoj1U5HHBQRprorgNuxdg5m7wmJiSuH3jKmA3kUJcbNuoR7QWZLudHuyK6Lq37247YrSB1tJGWFCWqBNNu8H",
  "key17": "2engwesVDgtsp7Z66b52pEQLfrZrT71Xh815HVr4e3ft2z3ph2pSBoYvpktWVKatGemYeNrv8g4u23bH4hJVKqmR",
  "key18": "2pADVziXJHewjWQXFTawcMJSe6hDTDMH2aWyuiCzrDD764FruTqxuCUWv82w3BdBwNaKqhkxqkuxJTWtTHiaA4xo",
  "key19": "5XK48P6SLKfRGCde62BSL2Tqx5suLeBmho5uAiKjJRiKRuEHU35Ur11zVAxQEW82tw858gth6FRrzotf5rNNGJH9",
  "key20": "2wh6y8dZaTi1zqKGUt3V2Xsy4LRhFAzJrvfSQ6Q2tKrf84EDHGMWApCXt7aRJ8ML1UxSokvYrvkDdKPQbqHQzPok",
  "key21": "4zGviJdVgwJKJVdXa3cE4v4QVtqVMB9ZzRVCZ7gNhh4CZinQVpT57bZyHtQ7yqcvCe3ggM8B6wGz4cCaEB1Nve5F",
  "key22": "2vM9qwCoiPirqiwv7fHWJa7s2UiU5Bg9H8bwiU5wTgo2zvP52g5sD2wbAgJJPMA2ESa8tw2yJ2nf5bGNH9npZ6tM",
  "key23": "4EkijJ5AzReeVfUhwHsxvtUmaGJ2i5BJqwrJ5JainpsyUsqE2s7gSzFtCUviLqvrury4VSdnobwePSEcRRsdHPXW",
  "key24": "3owKphJ1zEMjapvR6EHzAheVWSRgSrD5rVT6Djh9VVUjo3NAKM1PMigNWdPkTAX1PeaCBdC4oBs8JWvYFFUYvZmT",
  "key25": "48Z3ot86kycGvBcLLxwjQSAqMF34HsPPYSumj3UCeBYfCVc87RoiB4az9dgVQQqLtBkNtdbSqfZeZaWSfq3NFSep"
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
