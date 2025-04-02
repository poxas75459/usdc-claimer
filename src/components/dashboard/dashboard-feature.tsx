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
    "4T3jDEeGUcYPAiP8a3vb2QmxiBb4PkZzRnkPtZ92uhJyPGcHqia7Ksx3Z6KQisBoW8gGTtsjT8FCCzaXSntziQdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHx3NqDC1FfzasYwQVcVmNnHx8d1MhW8df2m2pTvtBB3qZteNtTqxibomSLmL8CURqxDunn5JK6ymCnQZ1rHHHs",
  "key1": "39Wut96yQFSP1DGnGTDYSyD2AcJHLTBE1BxNeGwm1NXCxyfe8g18S1rMGYn7qVyKBgDjMkihfPQbskkQp78HZymm",
  "key2": "2moWNVbH92aTcVaV5NupgAZz56dd1mHoCpRWn52pbWnuKQffWay7rGdWPzQPDFYgsp9gqrHde56MyD9LH15fWSMA",
  "key3": "4rEK7kTXAQoYSqxXEFXvHGp5WHoTsKVWSWcWhFTGipsc4P3iYjHxp8ZsWuPxHGb5WFeSVEP7skQK5NNShyn1CLqR",
  "key4": "v9c3MPpua7kVMZr73dUjj2HGY6nwcxuomcZ2qsjfmeCAMk9UCB8aktUypD31VkqW86QwsnyPpwyzhHr9Czh6Dfd",
  "key5": "4XY1Xkn5unfiFHDMYiprMWFaAk2zBCZHdb8rGU4k78q2vu2shK8MfhGy4gU1s6YN5qQfFYDthboz2SudMbLQLdM8",
  "key6": "28VpnsHNe8CtP18z1ek6LcQKvRNjsnUCSzGPaLt64o7dysWHzjfjoxQpUxWZgBaP7krbD8HwS4aJbsbL2tykyMYA",
  "key7": "4cnjEmLNm5J8czLUp4ofJVddv3QtYG8QsbkD6HqGajnpDC2zkFJrAw5AqaGDmpLByuWfxBP8j8XpZz4N144CaiQT",
  "key8": "3gL1p2bnyragWxAzDvQ6oFEmHmo4joqrjLWcjjtnC4BhXupabg5rT6bQ9XhrSwJe7bJt4rvsZu6LarV7bGmbDmSv",
  "key9": "4Pmct4TuGqhLHoU9tx7qi3p3XY19c15n9sN9Hfe3pvQTFZCunhbkXoweQAww4V2GgLPyRmPm6yHQ4RbqjKsGP7p5",
  "key10": "47x1tuMHqRdx1G3quFdkiXUjzJ9iG6qHg14PJuxqVQsvXd171X4s1yRFU1xXa4pgW35dQ9iqR55W7MoevWoa96P5",
  "key11": "287Mb8Q4X76uYGwZdBjvDNm9JiiV5PtRByy6iiURfeT728KYwQz1Dh8819BrJ49wSPFMQSCz3mUgKo2Nx9bPFSi3",
  "key12": "42LUgEx3BnLd1sjZUUGxWV87ZCKRRWbqSNVvbGfpqEiriagHfpfHCwUssoSfwgUueDZnMtZ72ETzQ5rmD52rzYvP",
  "key13": "3JCf1S8uNjji4ckAUpzvj4JfhWTeiGnbU9ShmvkwANoBittrkyeLfQfwibaoPF28CbK6QZ5o36UCEQiKwYzKWrJ8",
  "key14": "56o6DhX9rRyDwHqxBgDzY2obmUXTPEWPiHmg1GqiKJDTetNeaMDUfR4DzVNQLE1p1uwrcDnfMtfux4ZceNZAKrFR",
  "key15": "2qjhCLj43LQKoggHWhXooBDwhZvuoCyaJzRv1ahmC9bhc9KHv6ge2P61DMqLGyoQAazbq3t9ca9uDobwC8qA8xz4",
  "key16": "4trx5UCHNQuv6HEXCLZAAYpF4itkQJaQadcJX88pqXMj1y2ToZWWG85h8pCPv4Kw7gEqvcCTJx7oM3EDcpdnqmrA",
  "key17": "2cHN6bhGDQWr36D57kTP7Qg4E9z62SQgKSft1pvs1ZCNxu3vPGoeFE6NevfCVqXtYLrcB7grh4g1PR8iYeCrP48T",
  "key18": "2muFXQFKc4mPMNU2fYrHmq1ocVpNhuMRViiWokdYzUrkMbaU9HUUmoSmjxyeLNEywrCw51o4GvZxWvDQE8kav8dm",
  "key19": "3SdbTH5XN7e6khbHA5J9rTu7KyG5YssfEDtZWc7qkskLAM8r3mQ1HWsjyFgNdL2wdbfYBUZaKHtctGw6KZpnujns",
  "key20": "zoMKCajDpzB5KWHoHwUnYWi2azJ2pJzEHQ1GjzTDDq5gnf1k3WeyU5kLruM6ftMDkiMCGFtMDpLQ3Sc6tb7c6P6",
  "key21": "5yierqDJDHGi1jQWYZdXAdRuXDWPPCgkzSrXQJrEu2GuW7VwszBMgKh4SwD5XGxAVL7agXXmvJWUSxx7hupaBFdM",
  "key22": "4UhBwL7jGJTmsho9EcvGqAXtPeVigphUDgas1wWVbzSk4T2LuVdWTbx5ZdmfB94i2Mkwqv95dxrCCVKdV9rriTMb",
  "key23": "5JhDG7QubvF633ayQnJiSgoZRaDC98MsbEmAQvtxWJd4G4Pw9vCi3fmyCC1HmLpTZRSVgVA1wzdY5mZShC1rRUjd",
  "key24": "4Q68KATTueVyGMSJJZLXcFaPbj3XRKYEgPuJJfJrEg9mzQm3pgkBgZyr5eTG6ndDdAFpb27Y2yonHwC4e35YAd1Z",
  "key25": "2aj8tDjhrgsELn4FbSnqLcYfoNp5Zmda5kX7mWCCbz2wfrJtsqAdcXLEQMRKUuE4LVXsXa4CYujnFhh2HAPqxNTo",
  "key26": "67LooYyWGNfW39vDmPhKt5FC4S688BNeKEd6v6w8QtFdMAfBKpQFSqfDu774img8LCS9aHfuARQuN64vev1rob1m",
  "key27": "31ymqX8ujK4beexNXmL1S5wGx6nmfPLizYR65ML9xVrxQpvwVq1SwdjVvfRpKJPSnyuApUipKZtZ99mTsJ5pJWBi",
  "key28": "PBPtFYzyUbcJnfk73vjf9ELyZYu3T8pvjBRcAQXxfs7DGJDvTPt6qmGxtFWSzM3Q9CQLrdvncbFpar9SPXryfpY",
  "key29": "WcEdGzPdR5oyuzpM7KuPUMxH3nt3CpxCXJsjKJechP3EoNxU7h94pWHCeamC5SGT5suH2ZCec3joXUL1MfXec49",
  "key30": "ECAn26zugz9ZTMJXzKEK9M44aqUsHxNAre5qFzA1WurMrXdBKcWvAZ8tXWS9t3qWGbqnA5BeGcHifeA7gS2SjRa"
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
