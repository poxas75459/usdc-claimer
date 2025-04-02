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
    "5aCUwvqonkoXTA8Y2cXEAZ8V3GtMVhaoc5TL5p6GPPQ7KsKVZ7xxvJkJ98CnDw8opqfwSpFWpMx5VA8yVLFF14U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TdpBiUCqkMTj7PDqjjnBQAXiHQkVKAdDUHNnhbuoRmcZNCz4v6n8oD5KJ5ehMYV2NaWAaHunHJbDPpioeBUDjUy",
  "key1": "4CPihSk5uTwhNAVw9cvnDo51KJguJH3iHD45Dm2qDYHah3EDr8eZBxN6uwMoWzbekwvjxtXNZ3wA8oGyhpnJi58a",
  "key2": "4GYj4TRsi6aHPLNvw6kh2ysCYY1GwVVinrhjYviUAZdys17hUdnLVz1dn4opaMfH4pWfGA5VK5uGU1SbGbqnKKmj",
  "key3": "5i17ZidWgp8NUYcPvrr1yyLQjxcV4b5hc6x6q5g5SyhP6DtzRgRTnw5RkZaL1VtHSG9VmHWSoRiHQsXMLFPQnEcC",
  "key4": "XSMEjuCaYuTsStXcRC9MVUcmNpdsNqSXxPnddan6RJTJt7WhvyYDNNu8bzx15yGS6qqEjEMA9swDCTDjbG3vcza",
  "key5": "MbyTh3WFe1yrF1VMpgfDB4WQrWjiNxi8aJF9SHaZqoFNffAWc4zP59ZDaKDStnb3tCHcrrbiHLHH1DWr5z4P9Ec",
  "key6": "2bAoFCR8NH7Swk8M9r15GA3BPezPaEXRdvXcF7wQ6k3b9MTkeWFgBBU4Kv5X9hyf21yo7QQt2387srCtfWBTomX9",
  "key7": "2zuzmtq5PvS8YLNPUjrubjoYTD6Tt3q91r8gXw9je7DmtuwRH6kqVrBNrFVtqbFdDGgMghij1Ds69y5mgQvUsDVm",
  "key8": "3ypbitLvF68pzGhyjT6BfZfgBHVvryS3B29siFrxZZgUQWMfhmkRrMn41BwDRCFWqkDZw47aKo3Fg3qK7UFyWBGm",
  "key9": "4hP4AyRfARK4MqRyj1DEbsLpY4omUWZFFkuBPMSCVVthApmAaGcyfWFYc5RwYnLfjYA6QUEyDr6DgMDRw4V72xpd",
  "key10": "2JY6aPbcEYhDkfW3pzUogQYdgocDYc1pRyVXzGn8MxJJoctbvmKjEHMfZ1koBvkPzVY5UgAV6eGo356UxGY1MFtm",
  "key11": "2HGvkdtCBp35aUzkaWBxBthZaQsbjR24ahA97KMwtrLsx8gzh5Gw5pykE9vauJxiP5HXqZ4U2QDk999e3jEPRXAq",
  "key12": "3JmDZHgs59gRDYcdcGdPg2qjLoJyQV9Rxc9hihAFn9gsFMpYFBjsCDAoLR9TduxNnELXmRwZgi82v7shKQor4eai",
  "key13": "3rfh29wFMV4HhehAbzYyXAJKUmCnGmvHe5SyvYe8g5buwpT1j1UufsL6XvxXgFA4aTNZn498hn9AoVhxtLyCuYvF",
  "key14": "5XHkXXgWqgzLYqTetootcZQo5CG4aDUG12j1vunMpJ6fWSMtiDohnz1ifyET1wqbp7MaQbVFJfcnLhrLhDUD45rt",
  "key15": "5wJXTr4DKhDkES4z29jxyeXnaFBS3DzeRqDQnxmawJpvvPpbQaEGkmf6T6drZDt3gtAXAUAnq8hRav6RebM9ATo8",
  "key16": "2fKaaT75So9yYDsGm9MAmcjWWbgmdfaPdpvMBQD5XRhFocNvQ7C6DzVhPqLY2rLuPkujySKjeFeamvcoyRVYmq4Y",
  "key17": "2SnywUs4ka2k8BUnNBEqsjWY8PDzVqcKQ4wUj5UihNt817QHTzDkw8PWrx5vFsQg3RUwSWb72EwGNMvPBq6wMcKT",
  "key18": "4VuQADQg4YZtrhbtcy389KdpWwtHgxDShQsmag83wkmMwE33TNMMKiKfsNAiJovh6mBMJQJUJ3VAvtdjg7iePKWc",
  "key19": "37qXFME9yyjmwR28TfJmcUn7pKDvBvdyfqmsfyCNuTKvUCU6ZqdhjTY4HCPCJRMjQ1nx5KwZwuAueqbnPs6JdibC",
  "key20": "5yiAqTLN8kpctDgkkc6oUydC7Kqhgkddq5UXx5K1ucwyKT2am7T87JnYTjSnPPRWKvofEb5hozUDZizPZ4LCMnDr",
  "key21": "Tvq8DTymZZvkvtRJK8TbVHusUygfUmGCzekYniJLHFy4xjQUxW6YHW5VX8YY9DPQRL4pUxwqCzY5dW3NHPAxDFj",
  "key22": "44rjetjRzFKK9aF7v9hJ9y7MRD2U8n1FMTHDFnP4pAdo48tb4iiiriDkyuwoLzV5o3KC5dY6MhRJgUJKpYCYUL1y",
  "key23": "3e7c1Z1BHFdGd2QPwqsv2duNres2QZYUPwezZk5w8Nnr5Dar39m6sW4iN9YEYnbgHSbrHDF1Sa6ZmCn29MA61XHm",
  "key24": "2RCCLFYDZEovvNxb1UjEx2yU1pHiDLLbT4z8AjTCG4fLbHXoJgG3iZC4fEcBQtFjjSdNd2E5AfKttsYMDa97aUBF",
  "key25": "zhfmNGr7cezqrp7hqQg63pD8DxFzvMvmXe3ZEkz1UU1GkygcXiYBt3FrbwuocJfo7L5gqAbTeU4UgxsVkjBYJjY",
  "key26": "EFYzG2cJHvsVY7f6SrToeQt1XbguecWPjZv2oryppDSFm9fdVk5vgTszTfYNU7aNqCPdoA9anrcqvQQbVhAbJhr",
  "key27": "4QkXJMXL8Bs45wMcCHk9JE21wgetJoQ7CnpaRkdGpPZAYqc5XbhqLFNZ1UKmEJenHBHWndjg5xb2yBSTKTx94geX",
  "key28": "4XhRvDSJGrR3VVVnNBWnhGCGKHsVNyWiyrjv3aULxqziQzQB75nfvLncvm1xmvxHAG9CXRE4Lg9mvSaBJbJRFzA8",
  "key29": "5J6egX2C25jJuTZNSNRHTCyEZapfeTwr3ZSJ6u3E6HQDn4t8r8hMK31JRnmsLo6F2BA6aGskkfeLBXBXxALe3fZN",
  "key30": "5obmUq44XLboiuiQJTK5Saz4aEk4W2iD6iWSnzQcuVYDkzgNpAGjLxPzH2BjdScVB5SyFBunQeEHzD6UgtFJBbqM",
  "key31": "xFy5PKhhmkV9KuMyHUtEvQvciWUaf2SdGK1KRHwiXcc8JhPRVMFLFJnKpnJa3Bky1DQ86qTVhJsZWmdcXnQoLZD",
  "key32": "31bbDSrbqSCZeL1XHxbLngDLpCw2DTFDNbYCCP5befj2rMkaBFDTymbaDZ3o8neH1fHpyM81xP62mXev7bxZ6waT",
  "key33": "4ehsjpu6dWzjY3GWeg38cFArrE9PYgSuRFYq3eWdTLVxjLY5vuM2HBjT3tf5sCueSx2cfU2x1vwYukkT6hg5ENws",
  "key34": "5EfLsFgdneR1ginFAUrpmTtPsKnh69QhJWQqD8UXj7XEnyxxTa2L4vGBE9k9j5imCtZ7DbhgjSrmFXoiTpFkCvJW"
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
