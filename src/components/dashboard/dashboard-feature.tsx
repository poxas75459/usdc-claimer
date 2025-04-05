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
    "4sHqnhYTawYWmpitg7hrEperQc8vtrwjif1jTWhGzt175e4iPSavYXCg6EP55P2BKWZG6cyLB3NuFrLNhNhB2boC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uh3va2YTmf59b1L2UQ2Qk7G5uF33jGc52UMTisZqotzeSzpjo9TqY8gSNZUKjNhxBSU595RXqAKczCNWpWU9iLu",
  "key1": "5MW1stdDYRkGPnFWVJgzJfqAukXdXP346urzDLmjQRGnSZS1q9mPpDS5FKG3thq4UgRHkEHB2JyT219ue5FAnonr",
  "key2": "y5cpAxLHk4R2ApATshbuFBMHrux42DXZBRfUUoqCJR5s4nRoV2nVoPWErYhw8DLnZLNT7qT25bg52HoLEZmjcCX",
  "key3": "22AxSsZ7eeT4x7iP8D2LWdSVoYHC4Sed4BaXGLWoE8fVyACCE833ZXZDn539wbbpWKCxcDNfaFWh2tG2eZSAMWbr",
  "key4": "3Be8tA83wtmHoGU3sJVKrbPQ4LsySrDWMVdzCQsAim2UbUaUFoG21NNDy3soBK92LZ9Txtt6uegZYadXGoYdrDQt",
  "key5": "4x3AZR2Mxoz3FC3jQVwZE81XsawVufemB2DQ5eXztrPxnKYFWud4BFqWCbASFa9DH3LMLcXrPAh9ZgSsfbzdArYv",
  "key6": "5Ff3N7juwXHShQtjezYAKhSjBphKBZifYi5WwqSxXpPjLabxbxdfvR6P8pF82orJkw5bjJHvoRyxrLdh3dJDAePU",
  "key7": "3yd8gk1KU923qHpNYtikAHeXtgZcL7K4jbSzw11RjmWxCaiaPFNNubj7KTZDPNDAQDPnv4H7KogwFeBzyseCsBG7",
  "key8": "36YY4HD5CY1ELDvGefD7QAn9yAfKJAiDdPbMA6mgAYXBGNgN4YuJmncdWSNMiFGsMC5FSGroqSwLUXPrziQG2ddU",
  "key9": "5L3aGqyjrkJSrbKot2hkeh2gzLkwweNcQgPekcQ9xxWTH96auFarbvAy95x2R4xpT2977DGJkjWBxwf4XPue5ik4",
  "key10": "72dq8RaspMifmXti6nJLBip5TBMb58iaRHHWbrRYGFSez3ZRY1DJQ6QTSkpiu8D7PzvRm96WS6gtroLQ4dFBu9U",
  "key11": "gwNmt9Da13hJqVKbYFZ2DxYJts9Bke6qb9VhvESwuZ2VWv99agxCWJvWFxqYs3tBRo6RyCVQFpiSj3bz5wDhQSn",
  "key12": "5Pf3boUdhdjNtomDQhdJ3kxVoXDGPkbTimhPYWqY3fqYxNeFTdDxEjCisEDqqtn6yKuZUhkaKSK8kMfjKmWEViGa",
  "key13": "q2mF8qfkWpUzTQPciYAqBnh6TFZfL45SykPuWnY3RRLPgd2gSjddMGafAWCxu8CJExTqZ6C12QU1JFHSgDxipuJ",
  "key14": "67mnqXqKpWWASWDbMJpRrRTJyB6HYiwcG4cQbbHhkvNK6f9EgtWezjxDSFHBhx7XbztpdVXK2d3CbjSQAfRmTDF",
  "key15": "3t5oUxmV6X1SZVLxUjt2XPHfbDKY5G52jPb2bnvMqiozUiCmwb4R3Y7as6xq7k3smT6s2FaSNvVQc6w68vneqrfD",
  "key16": "4E8xReQMSJPAexb1TQ6uq5MqLF2Qua7E5Zfv9BMDFidxYnBaYrAx8tqgzqwGF5hGuF84MyutuTh1G6jixXNEAcSL",
  "key17": "3izK5giA3btTkcxNGmWpZSxY7dCYYwE8RqVBCnytszvAJCM8bc3e1AKJ2GzPdFeW3bgcPLev3fsXY48TJbnmSWj5",
  "key18": "3wUCSh5f62rLAJJa355nGL9uwNVJ6fCZRrXgiSiDashQAxqPbw16T6YcEmjjmRHJpnu2vyokPYaE6rf4GKfASYSY",
  "key19": "fK5VaP2w3jLkxe7wSZhGKfVA3b3KxyLgfLXzy7wMMSRH87CCyUyeuDt5dyqwmxujY9mjUwEMYmZARUHoUrZL5nA",
  "key20": "56YhAqg23wV7E9dzYgufjJFuzB6thmgigZGeBwyC6Gjh4eyeNFbLqNaqjiiDHmJPrKnGjped3KeiN4riMHwbLuiv",
  "key21": "21eiECCucBedzFtBUVtSeGfptsbV3ABuCSZMj4ijsT3HSSKkW23fL3M4GMGMZ77oKRRnGmaAwvA4v8qfzksfCqWy",
  "key22": "3fWaCraja4pVZEKZwaQZgQsHDHyqxuVowqpar7wX3jUXRxkTDeX9ttgP1hfPr2TphNjbtD6wawHtVzPNRUsNRtFn",
  "key23": "3nqAXB1yZ5E1x5ck4aLbAmzjqo1sEhwWF3MsmcaL2kyxeZ4U8e7C34Rm26BJCcJEdT1m9iH8Ror1Jqg91Fupc7Yd",
  "key24": "3wH3BtDYDvAS8pyyNYC2PfseTwssjWt8ngxKomfvguXZFeuiakyt8qpg99oom82ZX6otp2E6iwykVw8Yp5tHLjkR",
  "key25": "esZA43HHycUfdzged2SFNY3xzCPczeaDYPmrp7yV1PvdPAq31UBFCPeuRdZ9pGqNymWBeXgtraW2ybw4tET8pKh",
  "key26": "WY4P2dYvRDwFP6YPYMVqpeAwmZo4Dh8kHYKPw5vtzAXxXUjNSk8SrCsT4zBxwnqiENTdVJGLt7aFgYbQqyks5iP",
  "key27": "2uW5DheqMr92Ax4XTisFhd53MnPuzPd6pZuTvqVREEn7WP3s6KEBut4FpcsEd8duCQLX48B76YvXnWtwHra7D7cx",
  "key28": "5ihfmMkWLJt24qWZibiH7uArMaYpkPHvALZSKZJNXo7nDuR7nhz8GuAGD49RK2fq34MQCkXcqDikmqrkYLKm14uu",
  "key29": "4UBfA4MKv8y8BeipxyLHcAA3qburVbnBPSGE9kon9EqgNDsmiCb9D8SZ3nUt9VLx3wXxauDKMa3j6Xo9TgxYfjnY",
  "key30": "46Sdd2QVNaEzrqH5SjP7VPLZyLekXxYm66yQoQcQYHEVeL9pCJ7eKoBHYZEUWu23eVctdg21ujQCU8qxTM7TxkF8",
  "key31": "3kmXHAQkkTGKaVUMh2tNHLgCrYbCSLweQKBUoqGTVumg5BeX8H4dkrLfNoSvM2ryicHUrs32FXPnRwBfpzbFzmji",
  "key32": "3uM5WBDcGQjjCPRw6qBR2df7vaVHZX8hSGyLeAaVvybzyFuGb86ouqakTKRGQFmHzDYUKfwYwjzPVt2VgxTBQc7S"
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
