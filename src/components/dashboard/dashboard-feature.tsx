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
    "27RHStjvpvXwkEhdrwvjvcMy9Ku3Xm5pgSjj2WkcxoN5KP6P326sRsqUXzep4BQg8yGZbn5tubP4u3k8A2Dkry5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZNPn47vfXJUx4yef4K6jfXwHmmsjzjdjZLRZ5hdvzxpqkCvftMfzxBXTt2vLSzDGjsjw1NfDm46NNhyD7s3XSC",
  "key1": "zpDghF4qNAESEVDZfAirduWEkFCcsSwX3nccjMEaXRJZQVBdMwENE7y5iAjpScycvLaaEB5RcBWg1ginrWZ3nru",
  "key2": "oWxQTMu5qJd7ThLwxSNU5H97keuEvd5BNoryE79UiaxDXpP989ggRva8CcYxnj8eq1jUtgPVUR9SEmNscTcbSa8",
  "key3": "TiUZBbwGC8764bCQKVPi1TSMzdPtnDV8dgPkopuiwv6FmatKEffAGXitxo9qDBw42SC7iMWkktEwBW5dsLNvTWv",
  "key4": "G3FtpBTiMhx8LQ9Yb4b8H3KSBNQ14TxRY5ejL5uFyRGwMUKUmSAfwU5NWcaUw7rjqyrzN94Hcuk5MF8MsXr9VDd",
  "key5": "2PXj2UDLuC3jVhwLys3qGCBTzD9XrGFfoe38i1XT3WiscWSCBdydKBcvvUhyCLyTDZWGgvQ1KyVDhEkjUrHVtM1x",
  "key6": "4MzaQMexDG9UQfw9gobmw5fL4VcwZfHBjAToLuKE2RC2AFKhF2wKpP4RrEzhHjitueV4bYBGsxq6DLM66F1cqDF2",
  "key7": "32UzogzB2tn2SbSVkU8YLAF3WqvzEFhT1zcGYuuV18yDYrYvv2V6CegMq4et2CWkYunuidf3TJQwQX9w8evLaayj",
  "key8": "5TUa9uKd8z7jcCC6k6aWApcBahbA9dP1D8h9yPN5ktHG2zwBv651XvdDpyfuDaDhtXJi2h3nuH2qHzqyCuVqWCu5",
  "key9": "qLZxmrXJrWfgFSridoifhW6g2CD9Xi7cbnhdRpmoNASEEBS5CiSthMj5U2ScuXYgcptCheGq6s4pQoZuGirnzXC",
  "key10": "2MdiuDL5trrXMXSrfiCvzRiATuwBFNaSXyDUFr39MU5q66Ao1rrAMwwnVJ1dnLVPyEwzo6syWXewmRNNao2v8FmR",
  "key11": "3kR2fW5SG3nNKi1MawwYPn7WiRJdVJz79Fhe4cb1v4fZR3pqUBkpR1LkPFCpc9eQBLtwtTCTQ6s6gVsTBKeRBVHf",
  "key12": "37wjwqgLBCmHrfMi7GDDAaSAgZe1mUXTvC5DSjhap55gB6wV5UYixDEfFG6yfs38SjNACGdWhE6FUFmdMAYVsJHt",
  "key13": "363xMARH8W67iMr4d7TrfDexudf5Rpe8Nf33RHGhUW9JwKHs2YZts2jBTgYxHzbs9hXTyP4rNcPjXGaJrva3HV91",
  "key14": "w8rzEvqjCpdw97QVDkv2SRghXrDefB1o1UoeTc7gNEb465YGWct1d6hZYdkcdNY9pq3BduzYPbkkUveXPJ6Dx9Z",
  "key15": "74KnqiDnYKVWbWw1Sivp4rr11hhEVVFWHQw44XjmZvFR75Aa6EhPZunrHKwmb4RFdoPndxZK22ACa2Yg11fVjnd",
  "key16": "65VgbKYzjP5uajCztWnmVAoVHdcr6B4bGRacMcvUPgFTvtwgGvdeCiZcxqb2RodPSjFWeVMAU5AvUXu4bDvp1ziZ",
  "key17": "2rLF7FzaAhT4FDn7mCK8MT3NLZqsW1LdXtVQrdQoKU2BUrexDEn6YiGNGPS8bfGcik9k7xVmftwKcv1vzMsMvNGZ",
  "key18": "2cPwHvtNZBhzQ6dfFAFz42AYcjnXa5apJiL4JkkW7YnRe3fCoF58mta4BBea49Vp4iky411FwB5fBWmzjANFJFdg",
  "key19": "5EjiugaJpt2eNvR2sPa3rGF7ihhrSLpRGiPwQXeipAnKzXy8HYC4nuUk3QhzCh1A4cm4cnnKfCn8wHoTzMLWpfcx",
  "key20": "4ZrNCwGrdaA3oa6PeL6Gir6xd9awQEce2Vpre1K8Le3z7ju5KJSP1BxXDG99GCSaVQZmhZ6vp4TnDam3Chc33FC2",
  "key21": "4ENqDa5BKFPxFXtGAHqymYQ2QthAkkxP1ycimcaGQT45vbytXTa17FKNVx89wqi5ghJHzwmBVV3GiFttsG5ZvZxP",
  "key22": "2BqLB7ayZ4AnW2EoimPY8w7avW2eo8pcHjpGXVDstLNHPo7jGorM8f6H9HZYbNysR4yh3SdD53gieScJ2ePMSShy",
  "key23": "53b5naRQfmnPNDvDL1bMFkrPiDwPLYNQjzGAHEvA4ShQ6EGdrxkg5btw4XPMQpkZhfqMEiXo5JZzCX37sKw6ipru",
  "key24": "4FMuVuNWaeEDZ4eo28Y2N6RKnrcJAvjwsFxmhC86gcEWcFt7mo2Zurej4H8BaAxzh6g2FgDyw2mvoEbXDfh8SnkK",
  "key25": "2HKqdD1iJLqP4C5BrnUssU2PNUDBYC7ENLrSgvsYniustky6gXAwfXNEeZUPp1uLVornaXbPVUXc2mn3bhs343qm",
  "key26": "qJJZEHgUjggJnDbpE2oYf8VQStPU1Da5NoMUGJW2MkFBK31JUy5VauPfyS1DFhEUTcR95zhcgXpfyGc6nnGLR4W",
  "key27": "tZ7gZQpCm9zQUb6Y3SscvePngH2fvUf26VhLVdq45XRsvcP143Sr2uiZtdRw82bJWPpWS8pQnGJRwKekqw6SzzP",
  "key28": "5vxYoaF7CL3vT4aqu7sKw2j9sGp9sGCKEc3dzuXocNQCd8o2cCXGatFWTBXtvAugs1tG8yYFCFaN9xPYA7kFUPgm",
  "key29": "5qytaQSbcaqT4JKqZVq7VWrj5oHSujxZbELLzF7G3phUq7L8BgR7pM9h61xdgP6ip2RwxngGCNY3v1ocPCLaT4Rk",
  "key30": "5k2G9y7Rg7Q6WGCaaxU1drmSDDpmNh9YAs8btgVaoYniY2jq7i1Ai7TGwnJ8aPffGzKniamNvjwWqjGQ3xy6aBAr",
  "key31": "3rfnsXTxGqQpiM1okxwS89XaMCwLDoMaJg9rhBvmYXP7p2pyYmcp1go2xas7FeNSUZDjUqkk8q3oCnMEMYizLwzq",
  "key32": "3WBi4DtH2g3vLqVFEADsTdBBXFYFgivgMDqekQCyFtJpbD9ngu469VsHhrAaP3bM8AwtpJN8BDKWi4dSDaB4X1ab"
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
