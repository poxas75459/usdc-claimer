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
    "Qp7da5SSxvmhZQwE715TfRP1s3Ccdq15561nmm7GKHK21kWGXX1eU5wrvC5MzP4qQoseFzFyLpihU7Z1hFM3oKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ftnogd3kUWxF5Eyo6iVRbzExdu5SoqhiZuF5xAEm215p4sjS3HCJUeP6CaDTQVKAN9DLRUyXyNbksXh3Sx42MQX",
  "key1": "3QTAwKmwUWhKb3EEes37vcheZBo1QjNMNhQcbVRHXQC7jJBGN7nhHSN53T7nRjKzbk6WzTt67xnuUcvh1ivH9ADY",
  "key2": "3PVanvkkek16sfWDrSNCDdRgqCun29TZqSjNrobx8Ld4MvCG8KTtLhNV3r2ekRRmH9BRrHwF2WXx1eDbUBLxpeGo",
  "key3": "3xU7crrsDaTLV3bdKami1Fv8NHCNV6EMswnQRQmV3Hg45hyxkXn6LZcnJrPAbEYjUaSLEpRkjSQi5fR663Tnp8Kr",
  "key4": "5YdzVMJuHWk3AaYuQwmr3t5za3GRGEZNkUGYVQEQGGM7tup2vnYPrCDAGH4wcUAmGxSy4rTPU2f6kRJEqyXbqbrW",
  "key5": "tE9QEQ4D3LqKMpacjHYdoDHF6pVi6RDpBoHzURWkfcfAJE4UZ5JrjyXi7cqevXC6THkJrLdZoWw83rBUYkT8fVa",
  "key6": "2bCnKSyDzZUi1T2KhsjitwBCwwLtQqtGxcQHLgoemwxTwMoDyndnF4rGF5LbRZMNq79GnPpyoNxpaqb9dj6Adu8o",
  "key7": "2RNk1od7B6QWXS2BrtdAXCqP2afjGCr2kDJUSD3GtULR8rUc65Mkayzy4zQGGrbYSe2bwsDepWnFxBoZaS11bn28",
  "key8": "hCYX19DQ48pTYKZ9PiE4yc9p3KjcSicCqhqCoAT1JVHw44z95TfNk9tpW5rYkSywPqkmrpqzR5nfPgG1kB4LDwV",
  "key9": "4g6JSv4i76o5rJJ1LupfkrGzn7X6TjpUwXCKUH4U8BSNF5WStyKiuukXNFs74uHkFdKqq5Guy96xoDCqgVJdsGH1",
  "key10": "5PfKv68k7AWKuf4eWdZR3XDGEKJTngd4QVT5tYZw9vzB2tSd2Us1fwnvg51nHwEBijCkf1Txgtrq2dxmbSN4LQQz",
  "key11": "589kdSTPk1tVFH2CvSDoeboijWDz4cjbKNiNStf3tF6q3stmDzr5xKLrh3twAKhk1KaPFuF4dkVaiTSqyPJK1Mcy",
  "key12": "2cpXg4eWvQHCPMHru985bgEY9AUo63Hpp7kkFxCTHfx9Eqcxs6xx2T6z8rRA5nHKj96Lcsf3me6byBBkdv85BrgS",
  "key13": "C18Whzzybibvv3ux1dD1kmj8B6aC37Xd24HyNXCTHP1AW7mt8RXR6pm9AJ6zS46XQuGosJHBSHcEkggVP95bSoH",
  "key14": "5T4Avm2Nx6CYudNYaci38yRgxgp6EhfjHa1M1CWE5cjd8hJ8EDkcxXgrZkNB9P4uQpkcjDrcx88mihztP2GUqShs",
  "key15": "3RViMTMkpMPCU5WyK7sEDCg4mWzjZw2pgB5EJqXx32guPxqdJp3GZgLfedHK96jgmWjDELPZEmerJvsLd32NAFWA",
  "key16": "4v6bLaCDUK57LzPDx5291mnBgwVLDz1vjewNyhLXcf8v1PKkwSwqs5avLWvbuXrhhMEuA3EzHXAB9P1ocKDEtCww",
  "key17": "3pHsrQMyiS1TonMQ9wEyAM4nEHKHtdPJVciRVYZVjeVqzHAWmuJLhVzvhr98yS1UuTXo9o4CSM6118qjp3fvGnSm",
  "key18": "5WuwKxqWbebRiZHWVxBK52nfAr5kKXdNeyhZxoMPxRpMByFRuXuE8s946VvfuZ8BprNUvqERigBj6vwHAraQ4kyB",
  "key19": "3jRNFfMzjzhSbub9aEAvUdxwcVVT5mSM1t27AmPSvjs4ew8m6YqfK8nmw2GSQ4crLXrXxEi3jTUfkQUZTDKpSuQc",
  "key20": "3E2Z5GesHyhEZ6XsLATAFTdVE28Xb3xSCPgDKYWrZF5Htf3ypvEBQLmuVA4D5k1EoRDi8Bp4n664dSsTBTkUWD3Y",
  "key21": "3aiGyDZyARMVh7z6NeaYyD9jLUoqLatmmw3Npb5gLv5vUby3gfVTuDzywe9edGqTqd7ArNJxqn2ErjF9NWkFiQBB",
  "key22": "3YqR3Ukp6PoUy46nXc31duvijYswXShWLpv1JHfRs7tJfirirN3hwnaWWhJcJUMeheLfBNTymzRbRTD1ijxpTcgW",
  "key23": "2qmjGeZHqU3ngbzzgE6guyLXi81ceacbo25FjJGL6yWkHyN6k2QYKhAKsdrxhRXiuTFubzKK6xpUatsiAo3yh3TW",
  "key24": "2E7FUR9LXXQCGjfk1W9DLfbKqks2UTjrXHC812raSBnmDc2iATzBwyfbocMRixrxUi3jV5svPuetcWf71bkGNQUW",
  "key25": "59HNTHHe8qCpZveJchJDDggeTvpHwCqu6sGowYh3dGm9FYnmpLzdaYRWNLkFQTDs4j9tMhqZimE1a4aun6krCVxY",
  "key26": "2PFVi4cAtWyNuhesM2yRcsuAFX4f9NcQyUZXZKcDe3dEKe2YFyZPE6ua7YVxj5m7m8UuVF3PXAdk7nZz2emqkvA5",
  "key27": "2PmejYHRh4A7S7t2DcMTZka3UPzDJCKuCPcNVcfx3jM6aR3VFi5pkCVYFomAZoBFL1gTQs7sB3DuHp3KH5hkQbZK",
  "key28": "6YXPXw9uLSTWhXSfSeMvCyAdbRLtvnYbqEYNcUnepbgo3Ce2VZuqGc4fnGiBQhE36bNvJp7p7ipLkAqcZdzB2r4",
  "key29": "5ayfi254K2UmEMocyGpr2voU9CHAKoQw7WHMZKFSD68WPCEzMYQRBDsnEpzSSKWprgVvUFWUnT7TQPZ3sChiWVL5",
  "key30": "2C53tdVGGqoME44JipxundBmhDX9eA9zP35dr5kjGnXG5UgJeh8tgS8cYZr17nfGJY7PP8NXXNbECfrmScHz4YSi",
  "key31": "5VnpBj74xtdPjcv2ojFuomM2Z8mZJYduAMpV2DeMcyb3WM5hDbz6fbSsQFTesWqRvxLrSSEvM8BuoShivN9sFE2t",
  "key32": "3QxWtjdiXip39J7HC3H5sr8UQheG8f1V7WTw7v57mhL84HeRJQTG1uStBqVYKZpdkbWSLNBze8cHzFHxj9p7YzjL",
  "key33": "2VteC21tXZyw2ss3WQrxFLkJtt5xjMXCBGyuyXYbCnkPBvPPfVwJ9VxSADEaKxy3QeNE6NUpNSLoKBhRZ1GowPS3",
  "key34": "6LKaKnsSe1uG6c8Zgry5KXTdPcEXtPmip1aRwbv6gqhVLtH2gYj7gfLmKMvZzrTFHhqdUqAhGFSJzBDpnx9nVWe",
  "key35": "2PEYzPkQSBJn1b6rUoyPNrh48RMzGprL6dExYHNejrbYVsGUyXd2rdkuT28rK61tcn2ifKDK7GFu49MjbfUy5DLh",
  "key36": "5mhpG8Tr8sGuUL8TzeAXo3u1Md7wwWTzgTxjwqUu1fJSv37BCCXo5hRa7ULBXuix5U8pbfFbjp7cYPk1eKdinuSw",
  "key37": "2Up8RsfzARraaY71A9AMVdCkachMv9sduiGYY925VqRaPWicz6cad2uHTsxeSGLJ5WayfhYyux2vNP4bhvaLxPGV",
  "key38": "3HqvZ9LtQdRAob3PXPjdcnGuLAfnybACbEkMwhkroMuPQDYLsgLUohGaZbHADh2S1oVNPsbN6gA9RG8dNuGsYEde",
  "key39": "5ns1643rzcu2WoLSzxjVBdLRKJ6yCHUVTTXw3tMyEEtB6kYYSMBe2VF13q8j5BK7yfbw2NfF6vGXUmd6KMa972EY",
  "key40": "525bv8gtoP5hWKqcePTRU4JWJRrkZiaHnyattr4Nx9TBR3QAbhhWAreX95bXs3g7tjrQdHqc1vUFtfiR7qaW8DdU",
  "key41": "2Po3t5EAsKTYYtjgm6XyKmZMHfrDYTLyJTrT5ewaRhncSroLsbBKn2r8nNNEikJ4mmHhayX3MmSARYrjYbLbvF3q",
  "key42": "3cK79oG53XpDA7GLL6gwhRjkZi6RwXR9rXG3Av2QqHq9WBV2gw8trwVJaZbE7K3R4BQGsuqkT9dNMgu64VzCgujC",
  "key43": "2FvSkFjctcmARC1tvSJ8K1iYUNTzzWqrDHf7mJpBmWVevcNgTBk74WSEn9KuU9PsvJJmRjUXLf5qhpk2BpjRJjSw",
  "key44": "B6VzyUUFuZnVqzG9J4y8fSrZFAcZnioypWbgJkvihQ7XsJzCj1UPYKYre2641NXbRjqzMyEitHZPfYwb6UpGKw3",
  "key45": "3SuSntSgxKPEPs35FtM74di6fmJKWwKEfdX9oZLchW8tP7MC2h5NWYgTc4uVs4xhpRAvLWdnEXaP38BANwCoMeZG",
  "key46": "5pREUC8tvWW3mqNL79So1wBcUPEoDtBuXqjLRo4aTj4tNWKySZE4FGd48DR7We3VP61LxqFmK433ZNNB6YGDdw6b"
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
