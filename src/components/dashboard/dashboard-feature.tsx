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
    "2cV9SfQKjGpxPjwJmsH6rdFqQaQ6JLEm2q8Xi2LD9wCob7fuzCVekKKBGRPtM97dvfa3jwXtW132LAX4h25ECjJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z6h6aPyR568yLWF9MpXZeXQtQ47g4vk3cAzfnkA9dPxqZ5a1j8NCSMrcjv4V5qCnTB2RDA81zHytDFkq9ECCvH8",
  "key1": "4fY6UGfQJsBtFjT6KCEw9jsYHvqieZdJheZVwBXyph5nyr45a3y3Y5RkXQnTsbnUxrTHNug1ch6ngrobkcA6BoRC",
  "key2": "5DMFwbn3PStyZrcmah1J9teoaUuUywg4uZaANiVBFsL9MBCTWqtCM79TwTDns9rXAWZr6FUHEYYDxvp9YHpzxq5S",
  "key3": "3pAgM2ofpzaRunXNZps7JU7wnJ9nzicQ2redUSFZbvuuK8cutPTnfSRWZLPphY3zoRFCmoA3BQVyisgEs4NJUXEH",
  "key4": "2LJhiSyjesvakL26ZboTDHUJoYeKjPD3DG5TVjA1arDQonbAU3g5ZLNvRqyeEEpEMwWQdbo8bVjSrpQgQ9jqkYLg",
  "key5": "2QmTGdhCkWF145BtonCKLi96TTjW1o98w7QsHgepztNmx5eEN1oggYGCTpLjy7LfNvXhUJPKesHyHjEVDr4GrEk3",
  "key6": "3mD1rinEnMvGhaJNhA6m3wQ9wSDiLBJzkJVPRdJokjRRWfAjiJ52GKoLrdFCQpm99L7cnKuVpYY6pLrxApWiq5L7",
  "key7": "Jxt18V57eKG9qoNsiZgYKJAJ1V1iGGBE6ecexg8xwTatDnKdrRxYmQdogu1qCB6AEZjTRDetvRh9rv3cRafs6he",
  "key8": "5CryAt4wC9TBCtnGeZDYFAkhLEpMgSicuTL42wzCukb468CBSQqXyEgM7uVsAQkNwUzsFnMyDnEEJe53wZKyRT4F",
  "key9": "5gqG1qFKaT2ELiiHriEMxd7tD6JXDrLte558ntTB4TCucENftGKYFL9QjhBAtz3NxrCAr834BGebxwctbtFwQHaj",
  "key10": "4Y31TULMExW1Ngm21SXSWXAq9SQPXPis22eDY2fNjbPqKbjCJkP4wgEDC9gWtV9kgXuTJZ7dKLYATYsKFeZF8obn",
  "key11": "3kqKLpkqR2ZfDQpyfemZtttsamqMeXkchK5QPBL5tQz8w4AjHN584SWBLpbCrE82vDhMCPSECLrxthHwsBKXMhs6",
  "key12": "228fydrrNdZ1txTxqEJiWQC37oLSgZKskq5d9XbV6MswL6F6B33iXoLrymKS26JwHjF38LqxzmNYixQCW7wdmsVN",
  "key13": "TWvrtY6EcSjar1XS7GSC6Dz6v4NgDike7tQoU5HkHh3GXgLkQc7SQ7prn1nymaS8WrH78QpCsYbVQvAUSmKr5Pp",
  "key14": "268nj7TzHtFxb7XXKU4ARiy6eKpy4vNLwZWEMSCxBPb4nVizj7sgcrBFtWS3W72ZgcwMiqJbKFQuHNVaqhuUpxxx",
  "key15": "2PeRxJccxz7dSpSkhtVVADsYRjYGFMzvXUtyTeHe8FezA3tnZ9EgCuUZ5AzH2ddJDgwGXGaeXqXgeE1b5o7NB6iH",
  "key16": "2PWdGcZPtZNcA8pVuqdF4ms3iMWf2WeWk5kfbB2zAJhWtFD4aNyAhPFxswKYvraTTou9Xdj2ynvALEZdWo9Z3zwe",
  "key17": "2CgWtn3s6BaFXiqEvWSpmnWjdwRUXNUqFACKYbe4fWZaWRds41fQca6Q76XAwE1RRNkxBUL5yEmPByEnKHS5weLF",
  "key18": "63VPEp9WVioZbZHM4w8Vqon4v9tmqz7y4KbxGEz5nbYzjxaBKH2SrHtuCRLrRKFFKTshYser2eoiCTX9HWZKYo54",
  "key19": "2P3pjvVV62aWuvdEMB9keZotJrJ4Eud44vtyGB935yLg9JD52Nuya6eBZuv3crmBKt9mLfiUc2cU5JovAJV77VVH",
  "key20": "3ANFLdBMaqmYsLKVXXU464c2WKipLhz1EkKgUKEdJSwRvgb2oNSGJ3UWmMccHR7rfDyRsLPnxQEVoQAx4AQKGEkB",
  "key21": "6vFUzCTy16NzAf6VqMuVuCaTau3NNTLCm6oiHVJqV142vDE9HRcKnQ8zx2nuCcShgMevF3YyrR9KUVMeLFhuEky",
  "key22": "EoccHVSxhbH1Yab3zPfaLAUA5Zp77eqyptkNEe1aT7sxErf6DuE17kXk3Lmi3MxE6mgcWNLHRRiYqBjdTNHknJo",
  "key23": "2HcYieNTk2DfVYreZyLBGtVHMvUw7Y2NaxyVxXR2tJoqfNaWUfg5n9BMYCmJwH2owRBQZdgz3P6mkbyUcuEPpZoY",
  "key24": "5Nnypd1e3NPERWdN8aKEk37tZHohCnxC7y9zXwcJ9PYqQS15Sq1tTa7YBWJsmaABJSixwzVceKjpG22oNybPVThP",
  "key25": "5KaXf68UPSvzcxeJ6migK6ksRSCYxkhXJtKehyj2aCzjQezkZNGthE2UzGSJrgxGkKw3s7Jo8BAH3VnP4W1txyaE",
  "key26": "3tUA27fdsF5FzzjJ66aTpkgN7i2jNU6CuobCk86nn6ZS91FnDaHN4XyiaAfLHTsKLUSgjkGrSFoACshzVXaHDaKV",
  "key27": "jMT6rrfiTKVZNESSKVnBoEgkwMst8KaNiYcJbQCQuffLYshFUNJnZJyE6JPTgQMHyGYsV31mnh52NzH7wGPULWn",
  "key28": "3WK6GK1vKggFxpqzstA3YbR3MD81spCh5CNG1H38PTWRYTMDFufsU4nZAM19nCdEeSTCrMggBjoUn5Ue4VyrtE7Q",
  "key29": "4M3fuZfiozQMjpkS12wpYAjqtoJN7WANK6Z6KwQKAE91iVMKA7vjigf6GhqFBTSai7kr1TpisHvzenz65G7m7kwS",
  "key30": "5VuoeJ1BsLXRnw8j1GRNUH8p81uKouxmSwusCrxQTKYFdHyzvomy8kuC2j5TfiuZYHuFEJnEpNzhmEfZJiu684ph",
  "key31": "5JUiWLmUs5WRZUof5kDmrWBLxVHfApqUBaZRzMeJisBFSWwJno52FNRCjR766qZczh55qaCmHRzpAQXN6cahHec5",
  "key32": "3W6b5Z4DFm3hdEJS6uvaPZ87hU8kBMx3du8vWL8vepxmLuR3PTNz5iZ95qukNrW1dm3W8xRhvyX1PC8JQinfVEA",
  "key33": "38rY2h7Nr6KdcxuvYQut6DhAcEymG2fYmtqrgV4kNea4ZmVDuFjA7y3BxkeaSxwMk2vYJyH26dy1k9dVB4zNLxAr"
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
