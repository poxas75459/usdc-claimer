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
    "4hKV2aW6WEhC2yQcREXvViPAXKU56NuGDBLCd96i3yvBWpsRJ6QM9yXSfgCPykwJY16nVvUV2QYCwMHx4eadaBxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PckVYG3BCQ6oFTgbqf4AmbhGdsADXYBx5YxK718oXm7ZtcJjseCK9BHzCM17rXu9Mm6cJt4V9Zh14r3jkVCrXi",
  "key1": "41FtgtXLncfbFe6npeqMWRK3Mwih9dZzdQrD1h4BQsAHLAv5YtEcLH3rq3vN4kGZk7JgoosUxKeX1PP6UcHK6CDd",
  "key2": "jKGM7UEe4Gob9JLVuU9xdZoc7uRHKrGMK2WrotKKkkvs3fWevoARvKehDzmBL9nSTtyCmy6G2Erd692bB6A4mjP",
  "key3": "4cW1nRjQsmTtNJWcHS7M13vtfY4QJx5AAE7iWEkLcm6nMgzpgEbypXGgYcyd8BZafJNV9rs4YzQa2Sx5Vkozfswe",
  "key4": "4vQoadeuqj732cJWFgbRbEtZuoXCuaMSa8YFNVMFDE24zJvS63vpGTRCi4zBPzb33DL8Kw453Zi7axrfKVHFEx4K",
  "key5": "28S8kMPoJGrim33Nmz7E7DVf7PpNA2kHbh9PXikfUvHxGTrKVUT6LZvb8P5pEdSrQh8FkdZosoBYkKrcanGV1kXZ",
  "key6": "3P5vPD4Y1sHAdz6KK8x4q5H8psEzr8n8rBVfKkoj3L4FYcJGwoUps2JanBeQ6Gn2YAbGViKheqdriJq98phhmAn7",
  "key7": "38qBhCyr8HSbT46H1Yuy9jrxuC8aQFJTT1Un42HpcaJuUBwBgJQ6q2RuzEqs9iofMuKXaiFEiDaGajiTXyNMDtNi",
  "key8": "ojWSrXAi29RmgVcEzi25mm7gurfrX21Qwvb6MP2sKbJdJVLiZHR5rGDYU3z1ZyVJLRoK6VW34fH6VqozGgKxYY6",
  "key9": "4UCCxTp1VrdRAUqCUPFhGhM6vXWcPocmaCuV5gwiz9cDSe7q8FWQbeBvsjfAub93M7nWBUuz1gscM6qg7ht9Mjwh",
  "key10": "3nqtETpb25YYSwCRWAWk1W9g9FbfAdfevxmRTamqKM2ZhCUwtnc4tiCby9XAbn3ZeF6x8VGZT3NXs7CMqbSRC5MS",
  "key11": "3WvYfTATGm4pDCYrZmhkZsgmFxb7eCB4TeyPPBNFEq8uPhA4SLtPmVfcQcUiGeLspQDmGgBJ9v14PDcCNGNbuH37",
  "key12": "3XEUvEFBVypRvE7nntEymcjVXbP3Q9RHRnea3tbk81zXzSJD25i8v3VQEkAkmHS2wkd77kMmeHEsgNiUjADX3dq4",
  "key13": "48SenUwcuPfk5TLNa28zgGnVepw3nE96bFS3FJpXz66tLHUCiVderTvEERyqnBJGkwuj7MY2TV6Xz8H4FgcdTm69",
  "key14": "ySowaorJph2y4PqqHBtmGCPkKH3FZdZcR7LQt7qnQX9yJW6et77kRtkQAohGBoPaZEL3rvcAKSW4m88MjidQVoe",
  "key15": "x4vSHAfMwvWHf7rpFNbCBrXVF5tNPnLaW7Q17Dnz44vm6bDcfaG7aDvVoyE3u85ytvcfBwsiH2BaKovA7mpJTBh",
  "key16": "2ZoUZxXca6sLmjP115HK5QhdvMBuMgdXamuyMFMwFYoxcU13N2s7Nycfjt5nWxUAjQwNUikn51cAGY1i9FSUBzDP",
  "key17": "B8Bj4xDwiuMnaHUE4Giuf5DQ5HNU9mE7koM65V16aKXfytbBaqphbGYLSbkBGNxwSy4izmeHPtjxZA2p6sK7jJs",
  "key18": "5QdELGiLQqergXe15BvFHiFUHjFoDj4QLVVMxedfu8BLJQC9YefsQUY8N8bAMkdAUJr27KCsq5x5WE13AZBzoX6d",
  "key19": "4NDFoZER25L4uqjAWjKjwiWKqXBNy5ed4pPrGLFWWW9WDJdduZq8WEhv7Bc94u7W1gqYMzLYCMMLEi6MjTzAX7dp",
  "key20": "4SU2yYPY11dsU3oG9sXMpC5ygzjgERHLpUXk8YUnNHcY3zZY5dsmgAJKDjdkyAABPZZoM5LVT4m3bfyAE5QD2FDD",
  "key21": "3bq8dc9ozLkdBZGdELEF5rGYRnKcN2sheXZm58JEbzrgktUEVCPMwWbfgYFG7BoT5AT4X6m4T6dE74Jjuk25pYkN",
  "key22": "48JEEYVEBtHpsvY3adLFLPpN22rd8id4RH6pbZyy6J51Zd2SWknEkAbYncwPjiHjALkfG7DbvJiwXsAVMSL8ko9Z",
  "key23": "aFnz3teaCmnTCXcT1aR9WEzu6XgKb9gkgyRi6oz9GmzKsruHUJqefFNKZMzHUjkvmGcCKs33FQYeqLv3wJTd44d",
  "key24": "5x8DGf7edUVsqVsk3S4BNDbND5es9XUA2STpkBvn21NZ5i8Rc3GvKoXrvn2489pvDLzFQmw6qrQYRwwUhMoNY9HQ",
  "key25": "FByKyhyMoyxM83VMpWzqBzgPdrQM11KjZ94YwT7kPJGuR5NEuWM1NpVFhrkufkgirv73R8GPjfER5LpFcWbBpjM",
  "key26": "4A2WXsrozcREyNmwko4gTXkdQHt3iV197D7ed6DdSgBaqgJ9cYDtRnznSBRXBFQLoqB41pdbsBzRV3poig6ztCto",
  "key27": "3YupEvx15xWbGspPXNf6uTMA3p6UaN8jEG4uoUtHdRFb1d9W6DJWsMZD9ux7mphXXwtoqx3yR8v61dqmdP1qUzxE",
  "key28": "4CH2RD3rTbs9FZKStaZQMnRDRZPGqxNLtKBzFneDsM2G16vxZELrorSNV1wfTtGXNPXQ44TazwibrdNdcwheUPUD",
  "key29": "2zXbrFUUQ59frbwv2QS7CL2KHLwyReko2BDYNvddrddxt5688jnZp2uVEG1TwujMLM1GYoqrEXAvDxUMU2bMwKQF",
  "key30": "XNGxFfP3ohmuwT1DAVihQSY6C9BkHHhx5yPfBDMTEcxKguBxnhSpdPXMbbhd5kZniVXswpEMsgZEFQJqyDLupmY",
  "key31": "4DPMydoBpXae5t6Hrc8U3BtKaW6qnyaC1urZH5ieQG1S1ZpQKzx1NAf7QZ7zefb1fumqYcJVF8m6Rw3YzFPfsgfN"
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
