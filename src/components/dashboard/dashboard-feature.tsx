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
    "3c7y5tqtLhsaWN6E5z26tfLyzf4ng7Mx9cnMX12xERDE7hGYJMQY6yG2Ycc1vKYV46YMMXC2SmXmLAscoxEnzhpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2UN3TmQvZMvqCZELmdWTNVydhxBKdfHRym5G33wFmrRe8m76mV5arpWsnEtpwXoz1mm3zxxhp9GfgdtrwQJ2Xr",
  "key1": "3aUrhoUiixzH3fczawofZvi1wbM5dspsdB6hGrAc3JXZYYFFvYH542Vy8dJjRziMFVWp8AeuniFG1Tui238ukKLG",
  "key2": "5StzkxvfhWD5CpL9uJAbnj1ciwAmn8WdWc47MFWvRgdBRAi78SXobbqTarUby2C2iEBupsKas94TFp3vsbS4RJgV",
  "key3": "51rvRFLQSUMr79dF7VEHxQz5wAtKGVAU5j6i4RGVcV1hpffTgcJSmQ4FZpdEvKKZFUg6U4SxHqLomSd9eBxhMmoF",
  "key4": "5sjKyERTKspb75G1eX8HzB1iGTntLXUhUXfQJuv1FzwV6t4EfBfgDUf3FY1oAY5Jod3Ahe3FJ1GQiqDt7FnNdpx5",
  "key5": "58otT5KE8bUDoKKVoCnFof3U316MXAvRSVkLJvK48X81ucrysBzcGVA2HmZo8A3ZW7UKmfbg2HYw18htUAXXpiCT",
  "key6": "3uQfHZRpZps1KGdfRkXiqPguEjkyMmW8eL6Z31utAoiSMKZioRjM1HbW8yfe9dQEqRMuvQ2a94D7V24nx7UMNriy",
  "key7": "2o2gRTLq7skBVnEPEvd1fVz8cMSfsNptVb792GUUZDjvbNy4mvAB3xYYWZBncNKhhVbB7NfGB3ieHD761SpDLjbs",
  "key8": "3AteRZ3jacjmhrYJRP2pJa4NB1qZ7VVKhSYpEtZmHETKofgsmCUpBieAkWuSZtM4bJbVDX3UYca1SLZaYLEdMWZP",
  "key9": "2R6jAvh7xnqTjWiDDj1CPZdNk3M7gWf7sVRkE36peXanSdzDYenj14ort3MJNzF56n9roKt9uJYvDuvdKM3k1CXV",
  "key10": "58KYFw8mRiqBN9Lov9v9jCRxEUMQWpfjv7oPXpCYaHMfUsXKnjdpAG2H2UKpFFowKUHSB9hLCubk6PYV5yN1sqSc",
  "key11": "21GfYzPBtA6bgbU79Ypn9k3qeQZ5DmGN8XsEQLGipKHiQ2tcH2WiYakd83BxFfsQitMDMzuikt7szvdJ5mUK8xNb",
  "key12": "56tDj7X1QqAHhzL2sy3XsQuKczqKvcVtGv9ujwqwM3VTZ3fhQjqkkRBAHamJpFMP3MfKRqxNA1adWY8MuNcmus6S",
  "key13": "2YUDDaBTtFNWdrJRiK4katQc9wkVcYRgux8wvVXetmejwRxavhL9Zmy6QXwgawZmk3iqCsBdWAYk7pWDEKSGkqAi",
  "key14": "5V2hwSyvx2fA1B8195gpd8ME6GKi7azN9jwUSt2YQfxiwFfbDtPsTNH4c4ipvXN8WVkQ1MSAz95XKnygZnEZTYgJ",
  "key15": "5K3VYgTZh9yk6v3eMgY3saad1L92W3y611Phv6xB9XK1RoUzJXg28AUyimzfnL3rSxUM5LKeYvCxRYzBLvKfh7Nz",
  "key16": "GaXzipHqcHt1a75aEsXxe2qc9MRXH1TJu5dPoC2xdQtWzRC8QWVGUVyuY8uwCN9exyeeREzAMspWqfp1HTYX3P8",
  "key17": "4ZmfccAaQvf1XQstNkH5ArtzDeDyBg7KBTdbThVa5Bi9M9ntWffvNKnUcyFtnSpcn7FnmTNwgUrvhxN3bSeVNqK7",
  "key18": "4C8HjK6xwyG2ZABh8izJtCxccsZfw3fqwbvFaryDjcyfCpcD7yPn9CQhETD2bCkowxQXCGo3ZxFDpmsbh91YLEjQ",
  "key19": "45E9mejVU5SmDvimSUuYQNm4n8AGQvURgAZDgjMAWnCWCfauJt6vDvt1KTHRqJiFsvXYr2Eg1vK4FeqopD7M1LHP",
  "key20": "Y5CCmijJsDTo22o4P6WvKkskw6rJr9Q54JALTUmtTUP37KCBb3S2QLiDsCsAUxwtAriQNr1svABWPSV1HThnEbd",
  "key21": "4SzTEXjrcKFcXoF285Arc4PoZqWuMhsH622LZTrhAubypGseR86fGLrtM2fMCKnxNN1PKxsKcCqHkZFfiiZyp1EC",
  "key22": "4Ww1nAx2F73GbtN123zMm8K6p3s947NE25dijjLos6Z7DnqQxQGZiVNNV1tKq2QnXkCAzvKAWBLvB9EzNSpQ8nAa",
  "key23": "4D2Z7sz3EekZtfUtyE9m1oc5sEGsnx6NhqztEPzfYuwDoQUgaDevDSNYKowEFJctodaX7L5L78sK2fALpCZ7Ezgo",
  "key24": "4VHP1p145cobhnrkstKxKPv8LqJ5FRo56QrHikzxMSKPpmjziMs1JK7Ex2CJBVB5LjmXqVPzkwVsQajpuCCz6kcR",
  "key25": "4ZWK5BKGgfMsqYjVw79buRxQcgZPVj5fyY7LMvUAjPc23K6GesnHcecw5UoDCMHkoqYCoNCtujTH6Nq4YZ6z29vn",
  "key26": "8wxy7Pmw8rr5DGTx2MnVZPwAmke4VKeehW8UYQb8bocsTsakhz8WEaUZC9USDGcJwoJZweJpoj9EYYREVFZcg44",
  "key27": "2KkkNF8wbL9wYKjGpQLm55XMHSUPv3akfVwXgx6Q4JEoUJQrpCLKc3rYQqpS6tc3eD23qa9tR4JntYC7w5VuKA8T",
  "key28": "2vZnx6pBKtjJXeFrhMdex7EA3YPUTrZ4M89J3TrrC2AMaPCBcSXrdkGQ518M6U3jaYQp1MmgeD94J1m5T9SCBTWp",
  "key29": "qDmrwBcnFpXcVSYEfJoeYRmhvWCHjEcJ7uzQPngAjHZN7kpzvqjZzY5NCaZFaXEMqBwKP5mw3cZq2Fk26ZbGWJa",
  "key30": "3m1n1vq57by53B5eNCqZmknT4GEqsRQ6hXthWyLvYPVJPHMHoNnionLtwoGJQYvQtts26rCa8gDD5Uyj32KnCSn1",
  "key31": "2Dat2n2DWc8DsCNkbxYxdtRKj94ZEnC8AQ2fbbcUUjrzu8KJEF1a6WdPbQCWiLHUbsibUR2tQEyfJWMHTSnXARGA",
  "key32": "3azk4LPMxHeMmtT8XLWNd598HuTDe6sUvtmAsAUTM1PKxB9AtFzrvzrWwzGLeHWFRTSf5rUcnaeYmHfX1ogtiQg9",
  "key33": "5GpNmw4qH3KxuFhERzBiUsngfB3YedK1omeRi8LnF2mPfCa3VD9WDD6BDvFy1B8FDgxDxFzr2EPXuCFnbVsD9i66",
  "key34": "2os8qMtnGbSn6Mz5vyhWseLh7wqQTRWsGAKF7WvsPk6KeMAW5H7uPEsNKHmagkmohpbY8HY2URzyTDq4DtT8r716",
  "key35": "2pmF8QmwkGjnVy6aQgqBdEsUWToLAGYXWpoeki6jm8BZnWy7H5TM3uQDS14QAxtEUev2gq3LCUAx3F5JPeDnRcuD"
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
