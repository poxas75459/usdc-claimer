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
    "dT5usDRgafdsUvogiuEnn9gRs3cSzcfQMvS877j5eUZVxc5sMChGQDgPNj7FuJXdf67EYm1hvBZJ3SEs5kXD41y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jFGqbDre6T3Nt2FvPaUK4s937GX4w74JgsVMUjrWexXYvbpGS1oekXUPfo1aQWVXnvPLhXvTuQiTTu4kwVT3wKT",
  "key1": "2c5GX2Tv7YPPMEiGnANSjMneTa9viw2r5qwV6tp2LBz4QGMnyucX7BNbBchP3J2cW5KSDSVbuATt9tCS5GZQEpUR",
  "key2": "2GEEQfggL1A6RR9YnNuEzKTmPBnXw2JXm5CJBfjJeriiVD4ZXyHmDsZxwdXak2nZ3ZTLsSoW3ejJvngfRaP8nXv8",
  "key3": "5MkBaqZKMMfwu8ZWeeZpLEaNTGRoL1Ka3PGYpysD9DRF3o5DcurrYB7w7BQ9XpzyMsaW798FUh44Cay5Nxb3nn9J",
  "key4": "4Dd78p17kHe3bpq2vY6FHTABvu1GNafCCqdQxiDcDmUPZVcFBKcE118Sx1uQ38DVwMsP5MMp7Y5zYtdofAcuPwMN",
  "key5": "BbxjVweNvUYCN9MNuXwx8YqHfPbkvPiwvMWKgVwjsMc1nyydrHCX1D1nrsvXsTGeE1BCZc9a55AxSAjy2oCgvBn",
  "key6": "5rEkEeF1gftsEoCBSzPinfnLDxV2kwdVdPqC78Rg3hnJYQxvDHLAy95iUmHhF3ixa1KBiJ7PNtLL5gvDZF4TfcUd",
  "key7": "66fF7CsP7LHVABY7EHLhCJf7QRJtXxTUKGQyzWYDB5JpaL2PGQJRK6miKXuHXXXUNqQgGxCNjBoMyUV2c2L2zFWn",
  "key8": "4mDuj9vtSNazSWBFr614XWhTJTqw89fV2gphprQsP3bL9oFFUEEaK79MnwLwScyv69YckJz9eC9WyBtJTR42X9P8",
  "key9": "3umHNpgQyvtEuevTowwamKJTagz14biKYXxeFFGNtU9tcsGKbQzYDrgZAetXdtgWDcPqe4e3mhHJKoGnfaf8g2pv",
  "key10": "4G7UMesAvx6hiWkW2HPn8ahkjZTcLWbdzHDH3hXEiR3DqgpvQj9cN7DZuyX2vXj8KdQj2hzmAgXaZwKCbzWppALq",
  "key11": "mr1zYhvWCJrcqSYEwSdaadYoWiei5nGoXxgcnUhwUKTxEAhat8pkEf681cxag3QbYxfGjkL5mfjvgBG9Guu51TP",
  "key12": "2DQaYCGwpuLtadhAeBdmMDvtsZ8nGE1eTmt4m9AhHrueM9AvWT5PCKuYLwZt1TYA48KTMMdpiXufDeMRcdLDxNr7",
  "key13": "32rn1tTa3Z7Kbebpbcz8gs9aWE7i31ZHuEe2NAPR7CBveqjDHdDYxXwP95tWGRrkc2hZzf43j1xyzzAzABA7aNDz",
  "key14": "7Cv5Y7m5YFCY8EXsaZcMBBQC3uCP5bnbzzN7fU8eTzqtGNKDcM5SzdX3eFkE6ysUrpQwJggGHiev1QaUmQD6vAC",
  "key15": "2xVWzVrALakoEQUkGJ5TruEsjpcpeacjSuyaq9vj28rTJ53kSE6zo8GZbmpPj9ntS5eaN5Cgo9vYJFveGK7dRQPS",
  "key16": "2YfFVPqKNXqfrsABg95vFMpiNvcdv1WqKofro85T2crMQSdyLZsEg6NrAibcgQsbqdCW48oc747wNw6XbDoPzNdr",
  "key17": "48uNoR4qAFUYEByY6QRFF48XSY9CC5pt47j2D1bd5i1YDdTUd622nsLef4BSLLTyK7binb8UZn5fZb1RX8Loeuup",
  "key18": "4nttS9RFBzkpZip7H6LvWieSVzm5uDhSCsjeGsDCYN9k9tS3tropcomwpQDJ7qNxLohPckwSEQSJgvnKr1Rxbiiu",
  "key19": "2YjP8ggKqodtAkZNDQf4YK14qitZUzchW465bedBVJMuhqYB8eJYGYwGh8zbE7tDmYoZPsWS35wAXk6WhWwuRqmB",
  "key20": "23gjgR3bzN5YFzsVxznbTGVp8nXaHHvR45FxntKDU5Y6b9j769Mhf9vEZ4EPrKPAsVnHCgxJdWPVf7hpNnZCpsLg",
  "key21": "3aoTWmGY3vKCTZgd7N4hABqY8CK3eJHdXLvBvmkASMCu8tXYQAgGnnNfC7BCA5PdFZHeDUAxjKwViqp6ryx87NTW",
  "key22": "2hTjNw2XAZsMqV9sgcjNu9j1d17qGoFMRhPCegLHVndmK4sRnNggwrogsrKEFpFD1SAdxrGBo7Zc1u88bVKxG1dA",
  "key23": "5YwPbWrbXx6GizYZz5X9RgJQ3Bb823ZTrzsceAc1h3wr7vVTNaLaKwkbF1rH36sG2RH1mpJLMt6LbWUq4yu5N2kc",
  "key24": "3ZKfYHrScinpcGc4CBA58hn27dBoRT5icRaTmoM3FRcNwxigasMDs9dDBEz76GfFAoFyPrus2Tp4uksW7kLKTzUH",
  "key25": "XVrtR3QWpRkuBm6A2LiMLWG97c5tcuwtUowF3UNfmbfXdfoZE8ZogzKBvfDa9pYW9XjFURA3Wqi6oZ3Babaw7PQ",
  "key26": "3Z76Fj8bqouAS1HYXvAfYz6rgv8vzc6W5oghsL5LmZhutWQ1Mwh5niwbjJ7GCjAdSUgEnT9jdjgaf1pwnPNPrswU",
  "key27": "5dnF84tVxF6FYFvHjXmRJdLrq3RdufB3hTKFw8o12gWDtMtmAJjwxAh2rwJzSVAxGhdhVSv6qq3d8sPS8YK4qd3q",
  "key28": "2SdBHTxssikhecR1GYE8thLrVZbDNexBAmmESPJ67NwCbBWZ7BKXWLuDWxTCgQ5KPAKk2TktiZpsdMeV7fdhGXF",
  "key29": "m8DxQSdGY852bQ5q3LcaSBZr9wddP15RnMBSv78HNnQsuSbvgDZ69x2TYinbLTzJuUBZ2jugjG9BCzg2oEEBLrt",
  "key30": "5ujnqJdZ4dPAr885tZcfHi8gBw3nAg1FPTKW3jdxpfGmNybbHuFEeTXRFtSVk5YumyyiDN355FWvtvTJGm9R7HXh",
  "key31": "4LhQrtBh267fLVm9ytUKrGFz6DUgpiaLhACkwchf5XTix1cm8MLvWh2rMZpnjWjCVT8uap31CBVBaAicGMieVTQp",
  "key32": "2uzd4KoDPkFuyX6pQiue7RiKYB7b7J9TjNxaHp6v3wn3NWFSNJGPyXRNYzuRW2KihkuYkgZx6aKeLr73em2xZpL7",
  "key33": "23E9PjUarCdLqDtvziS5yGavYrB4YnMhka9Zug7SjQdSRMdqxTYuCogWbZCESyVM9M6J9YJVjKFhH86fnhwwoZq5",
  "key34": "3rrY8aEfojC2XLg1N3HviEbsBNC8M4gJiBAVnhYXxAbbXJmdQ7JqQ9LJjGzLvU5Gxgq9hqWL1cCRmhT6jciBKFom"
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
