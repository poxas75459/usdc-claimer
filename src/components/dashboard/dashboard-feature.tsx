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
    "4QC9N16RyFtxxrR8navBTeZyuWGCuakvM8iRCt7YKjRFq5D1WmBjb1javgJ6K3UsrSK8wWSqZdRQ272aYmzjbPtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZZ6odyVQXFqDM9pf9GFc2DMebHhRFFy5RArhdeJdovjnEuFwuTaxzuWFko65WGPTRX8X4aUFNAVge46CXF1zYM",
  "key1": "4TeN4UJcDCqWSxTAGTBCxnDnMNWq5vQbqoznd95D9mbGcUcmSG873ByBnqyEmfEqq5Hbv9Lukqu6KFsgPCaJ5vMx",
  "key2": "2dZshaeXMGNDKEiHZNrmNVd1VF33VNfCHK7QNWiLRYmfvyDaXsEJpHKz3HdrqRtRqNnUqGMT5z79iSR6reMyTp37",
  "key3": "2j2bvfoEtfsEdi8NTVVCJWMZFKEmSbHWXzi8dZ941XF1Wn5FggPUuFhVKSEvhL61ZaD31nJrM1tT5nJuAqurc6vm",
  "key4": "25qPKJ8JeERLnByKBjwMzycvFxNoYzUc7NgZ4xPLJvEhaWqmf4iSJQ1BYgehG8UZpQmbc6Wvo4ZkUhYMKNqKLyT9",
  "key5": "3EpGmRjtwPTbzAmFdX4gXn7ZuayJsLvRXqgm112XgHNAUyTpjk2gbQp35hv579PYGtUg6PELX5pWpGfjSxrFSmyp",
  "key6": "4S44vJodmBLAGK5jBHPFrjhaPeHoz26QBk2cAiKj2goi2DUh6i9sywzA9xPwnzzmFtimEFWSQAsYaDXdcpKCrp1M",
  "key7": "P13wGWuP8CQEGPvxxQhjwytKpdjHSrk8JeuJrCcR6X3rBzmvhU3TEVr3k1fCsG2jMQPDrMBeo5wYDq1cB4YZmSR",
  "key8": "3bii22VhuSbzPinjsiW6rw8FnT72fahvkfqYBMXsexYkXC7XdjpoAHqFwDmBDFp6BpHqVdrTtMZ4Fwk6153doq5J",
  "key9": "62mdNfsTQdGaATwZikhZ7u5NvSFGrRKWxa61a2jfv8Si3bwzmVyZXGaKCD3mbb1aNkxteaLirNpkktZtBeQAFQee",
  "key10": "3xzgYXvqzhWDZaTCGQvJCUXuPB3obUk1PiC4e8h8cYzBUZuTFicqCBWmajwGEK3SptUG1eC1RmoUavAoiGvrJTmC",
  "key11": "5uMNLK1wLthPgSrQTjbNmJ7EUPY4mhVVieR99H9jeCrrzW8rzuAKLjPVbn4j1m5VCrgvsyUxqSiCNpnkwYqnqWCZ",
  "key12": "ehqGWjnFfeppJs8LXRojPnkLkwviRp23RYA8Q9UMzmnozvB31pS3DLTv1fkDrb28Jjcunc2jURPcigMs5LkZEuS",
  "key13": "g8wT6qLnjPSPvsA7Vxs1cgsNvBQVUSXfM4G1s91T8abHZ51JbHk1hws1iNWW3vTMZENVPByos7iHFLYSNZs56i5",
  "key14": "34aDsSydVuVefELy7pp77vsAhbqVm4oK4q6mbfGyCR285uPj3GZP9YhuNVvPTV5XKZuhTUXSLMyuzN8Eu1SsJmfv",
  "key15": "5xCxL8RjHyyFXQxSqgJAvtskoKRGdSqkCaunTcdAptHbZmnXz6REpJGYcovWgkNhu94ZD1v4iA78oNGXrWuyPuYr",
  "key16": "4g1np9Q5WANKLp5p5ux1GnkHeqJY1n65ztRc9NSTqJB1vF5DyaKszD3UY75UabGrJmkowUwPybjBGgcj9NCxoMKW",
  "key17": "3ZfBNjbD59tfczvTnAoHkZRxzw4kp7wvoAwoAxrPbGAZqj5sHF6YYHr6PuNNRCkjCH4xQyjzaCgnEXqZVzJyJPFz",
  "key18": "284nYoJeogjiTjhXMnGsaPA6JWA4upHGGqurJc4x6iyoTs3nSAwGkPptgDh2rBCHYuZNuUrsLNjJeYKpGAqjLk6x",
  "key19": "kXjKh7vBRgz8WnqPjifLPatSFQrWA8QDjRrofNB7ZkN7iAJqg27H4zrTK2RTkPAaHoFjW8pKVKgyhadfkq94uG4",
  "key20": "2rhRm98czKazJHGy2JRB33WJyfFwqC66fP66jF2NHM4QEXNn5YoCSMFJyEstugqcn9TULobNdzqDQiSvvgEfFqyu",
  "key21": "t7Wqd9YjyKGvH6AW3aQ8mFXdeBWEuCRJot2zTNSWYyjnfNVHU1h5BVpXNoAJkS53wPpwzQWMsTue9N2cMDKLJKP",
  "key22": "NLNRHMz2sCFsUFEf6gCx3qe2wJo9FFZNj2jP41KF3oQcYjf3D2aLdDSKry4DUAJqkSPdzbSzBUtFwrn931fbtSR",
  "key23": "2cHLKML7ij3t4Xxcp8ntZCjuH849p6rNaBEt5QNHWt7Q6ZWfkHFT5CaVGRRVj9i9CCrwBouKvX75yHGbJDLxRJ5S",
  "key24": "t3GrVQ7rcMXjQUMTeH3S6ParuNgNqit2YGuKztu8PzosC9HtZPZCofidfeuSoaxC1xiuJdoRc5KJdApcXqYhFci",
  "key25": "4cuLboJg7r1f4Hdrru6hCMumuP184EU2puCDFMwCmTciV2MsDtqWuD81XcFmW5MQuvDPgmRo5SiyrpiEfsPkUL7e",
  "key26": "4m7EoPgjRLo74Rwq22mptwmjnnszjQRBhiQ4EY9pX8J9aWtuC6MX89fqmCLGFbzdyw9UyEW7NcpzKZHFzUfwcPGa"
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
