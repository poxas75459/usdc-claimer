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
    "3ivfp2vvE7Y49BZndeecgd7uH1WRgMu4cbumDfNxqyWmX4uUs8X1hArKoGJVffKjgcQFssdwcU4HoQwkZpq8P3vV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TaZgXqZaJrkeJwJdPD8Z2hBGMtFeisNNBXKJzvdbaEc7twyMKKPHLiPP8SFgXutUDCAB9Q9T5Wt6ntZSzNnmXuk",
  "key1": "KYDaEWBmQ5svQJvBLNKQgEULhmeiktU2o2hX94Dbjxs2aoPeviBvx16mDYFVARvs4BvkCuB7fPKRr7QxC6jawuW",
  "key2": "9n5VSsRJTWB5fnBt2SN3ojYKRm9iNNzDF9aupL1u5ukDJwEWJv2uy9NMY2WiNfMxFyTUFhSXL9UotuBWQFHSHH6",
  "key3": "65wsqkdtSgiowEYMkFuSSteUXR4mb9jVvr2TTFJZyteWqdaV4FqbFpohmm9TFN55koU5zir9AsYTnLmFahbcdegS",
  "key4": "2NX4Tpd5V9t6wBCEstTZMtsPboanT3mgxHRLD9cLDXTyzF9ESr2GAyYbGdUKgLLqNGGExKgTmB5R2X8dBn3mX3yu",
  "key5": "3tBnRHemeYs4bEAWuKhLiPjhhS8nWSG1YrPUeKmqPnd4deUWKSfRYnhqgezFAq5Nhzhg2BDXx14YvwmafaHAZ81L",
  "key6": "39vbsPC9tjwvnNUq5zxAuyopB6Ewr2Dmwh4BJuny86NT1SnDWgd8SesegnEWrFi4VV6mdVUGvibFECYuwQFCRXdv",
  "key7": "Kiq2BAhbYja5P8y5YP7EURVKNCAbJHyHh4Dv96zAAxhu54vL4csDxX5UCuMZZkqMTL2g6d2oGQM5mpk91CMfw8b",
  "key8": "461cum6NgiG5S2MZxEZnzF1DU7PpFUY9B1fuDgG5aAHZ33BdaMNdc7k1sGUJPCXNQ2TXesUxB59QauotFpgAyQfE",
  "key9": "3KL7RgpDRtzVweduuUHrMkFb4j3FDWXtkRML5RAyAK6r8wptsdXnFcEABLntuaeHAHoCE1FnFUtVH71dX1WRXe9A",
  "key10": "2uvNniphzqftEDfViqkS6XjSmjJuKwjfWDhYuPW69TTWbKPPDZpqZxLmkm3bND4Yt9ieEPd8muy8HZhaQ29juXUq",
  "key11": "5u8bUXjdYydp1xmgmB4tUpQiZzuFWtyR5bAsekD1WUGmv4SuieZaUyVLirBZ78jaksYiy58W9RG33ZaBh3WCLpcg",
  "key12": "57gjLfrkwy4vp3nmigNFkuMpSH6KSpHezo2ZUHxZEKhe8DbnjBzURQduhHWQ2eKTAy3STjMYec1v7PfHtpr6mjRV",
  "key13": "44uP7XJZuLRGCucTxyGNL59UWmzY2scio46UpD5VBQSKMMVaFgS4kMHENhav3NgkQVMWvjqHLaqKkgRdbs57RKE3",
  "key14": "4E3oPwVaZF6S8qL6XBrMUxggqRbLVZoQSNxZ5Fbwrfcha12tRpsXLxmQvgGXqDbfdZZ5ricVDPFq99idPw7hE3GN",
  "key15": "3y13zSio3mYBA9LE19gFKd1VEF6DWhALKuD1BmPih1XLXAeKDR3wqSCFDkgWFmyGHmXUofV5pHSJLMmCPAGKh9Af",
  "key16": "3HzxzEtJuiBjd5F4g5cwbAitvrj3iKvgCauCtosSQpFLfxUeozoFjTDJBurUu5wpDvjMS8skZhaP6eGcDob6FKqA",
  "key17": "3mX7QiK98yf4f8TcNCjg8kHWFcy9KEkxGL2Njz6ztd3VWKDnUJFUF1oKv4M7MwJdkWicWTTSdDdFTxUwREG6SGsS",
  "key18": "2hRb1YfDEhznr7VvgcsQ7kHVMJkTScNdf9naWPcTKEatGQUTc589QMvnDuJ5P1ibDL8aATq4N49CBKffoGJJm6y9",
  "key19": "4a91Zhtqnym6ZnijXXLMS1Ka58sJjmfCwjn4cwsbEZ47T2GQZb8wwhD2uM5kHETBsrmG7U4zDdnCYTggyYtyjTzj",
  "key20": "QbcKPD8twq9S5mA6CP5hV7SfskioymPAvYNgE3a7ZxTiKnrdFckoEXVDFWvdaNuE2S2b5Ug6P683Ga3kP1TSuFr",
  "key21": "3tYNUX2HgxsUEJ4nDpuErWhUvd8N2PpezEreafoZ1USx5pFNtnSNKFncNXMeay92i8R7MSNwGvH8bmy2DvnPFy3P",
  "key22": "ZUBa7EQWitLBd2wh5QxzyUDE2pgrSLProGbzfCy5Z4yuaDsTBm7EcBfdDJpW7h2mhjNk9nxHgEh4WL6sjzRgQCS",
  "key23": "2jA1x48HYyiuUtmuQhWfbeVtHy3t6NoyqzPu2tu831QLQuJEBEuRFRZCtLWk1EemqTqYCqj1USohXsNPorybV1Y7",
  "key24": "27ZJdT2LGP97WJiPFVSqcKGzhWaoeKTKtKsLxKd6bbqp9QtqXKpoJAbEgAP3XWUoRDHd1hcroMNDJpfeDVV2hU5M",
  "key25": "5hfZAVhAszjSu9AxGt61gYAL3NcL4qWVHSMAHnK9kMiCgvRiuZP6c9VT4TqfTaR8S5jCiTSmQWcWSdHjt5PayccU",
  "key26": "27L7MbabbNZy3ap9ij2G9AjGtAUinycgyUQ8gqQRKbZbXyDDCrKeqMHFtVSpEea7nCFvxEgwiojKzL7P7KPWvxkx",
  "key27": "4HucyPSoswY3PRh8kXgDUJLppdGFoqYLrCHJeZ2b6o4okNW9LtSsXok9vbrBkQJk8Fj3aKodur9TShvZZCbYVd6m",
  "key28": "z9dkpm8zSAF9WEkHweckQBw5oLjRH2aY5mMX1n6uHM2oV3yobLReUWfdRFMPJLZUmeqrbSzCYjzWFo8NMhgUCfv",
  "key29": "4aU7n3siezyGXPrZ92ZQSFyDm3a6NAtMeyhNKH4f1QecdSqxxpQroMxNMUMiFsUeRvFL2q2zN8PtjxG1gLZDsKsF"
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
