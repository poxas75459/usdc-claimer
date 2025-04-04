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
    "5rYXhRMkE9hhXeu6rxK1jLJfEBCqiumy7LMw9aahwkP4PdNL3aNXcXsbJVF67qPj86KCsKutFKccewcmYgMMGUcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JV5XLHQrsH5SpH5NkmHQwm11RgJQbuNAMx6GpY8t3BeeGz8YUBjg3jDC8oid8uCbC9KgJKEMGukiLfTNvM839jK",
  "key1": "4Lf21G8ZH1fdxJU2EcyKyoDth2ktutLe1QWJbLbxxnJ2QrPNUMvNdHRgeFaEzvN5wiroQTqopa8cNa4iwh4yHHGV",
  "key2": "jGtZXK5bt8VkwRzXUwMTRmF15k563geUg641AVN5dNjjvFSj2wmKrGsNfWp2bbKQMBEn4TJYZJ9JTCrXu4PohhW",
  "key3": "n5CiEobKtGHtZ3WRKKf3FktuZbagPDa1ypRDGvMDkrPgue1TeamoauUREvRYDBn6Uz2BfM5MfjgQ7FXAmLEnrS3",
  "key4": "5HkSNhLRS2Vknh8d37Scffehho15A7oSaeNLapmmhEWxbZVaWm4Vi5xmzTdbam5pGrjvNeMJvjc2EqVtyusJU5dw",
  "key5": "5fsZChf23MyoLsZETTJXfyk8vXvHAsiJwHkjjv3jZZUwvTGtG1qvikDq2BQehAPjzXeFuotvt8igEE3dJu37D4rL",
  "key6": "3riNFKCLnZRWqNgYZc6nBNywcvaAACLH8XRXBdebmuQvBbLcKkH8pPkwbNZgKkKfLXe97x7a1zGPBbkK9fREuYXA",
  "key7": "5zN9GjE8VtUYJ4jTx486TgWSnSSoM8wu5pVVKT9zyz6wstqG9ZpKxNw5mbPVR1Swdn5LAHPJRzZxn6UncGmG9omN",
  "key8": "5i6S3AsLs2A4BX5sU9PhBSBNwyTXKGPTydDrPTphnSPUZgWZ5aWoRfUHVXDbRAwDD1DdrQEmVRBmxuEtqRYszQRM",
  "key9": "4zT96FXL6kyuE8WZY2aUf1RXs4aH1i1dk7rrtCwkZ1byYhQTrBjPsTKHSYqkage9YTX2csgmz28GDPtQQuinFmk7",
  "key10": "3cUYAEFhSmhs9dKdu31rxztQD5tP1gnyNqABFHrT7iQqQfiaTBpM7HNuu7cMCUNbi2VdSZ7qewwsgTJ89ACzNLux",
  "key11": "4ix3UTnbm2v24pkbehP7H3WJGFyWhDanYjDHb2XXE3FhSXDLevFN1wMJcnynyMshe5JxcztWE7QU1J5wm21oHkST",
  "key12": "4xvpN2J2rbA5LXyte31DQgTxd971XhH64dRM4SYmSuCHH7TpYXESAn5RQ314rYSanZs6nxXfeJQrAqYvUX9vkE4f",
  "key13": "2abvWesNh1U63pTNwkXzt7rb9MfNpRvRYXcXU2B8rkqzv1VEWwbaGaN2WWe7fuCXyTW8KAgkxa1h8ttFZJbEQF1W",
  "key14": "fkB5nHbdjCRziuhcAZDMVpWvzUHFVusKg28zHVf2ZQ9MK39AP8SSFEZo1DHsaEAMCoFyZ1GCTzwp2Dpxswv8ji1",
  "key15": "4E9zomt3WAcGmZ2e6Jd4kN6jTAZ9CAEnUDA6Grdu48pUw6Hbjmw6xaFZUuABCuAykgbaMPPGawYdyWLPpR8iyDap",
  "key16": "63P3YK8DLd1Cx3zgcLHefD4zAVBTM89vL6uz4PvERCAfLLxdHwBxMj9VqtJs97N2THuohuoPt1tqdPdNMGF3YcUh",
  "key17": "85W2cB1L5ASU5kp6gmECRsZx4sQ68RaxTbydqWvNvEHWyFGFCxaB2svrQTNGrSpHRGwTQL4ZepV2UgHufc1h4v4",
  "key18": "2E6b9mzczJNj7cHXcisZyMzr29eJy9gyrQES5m9R38zQkwxMSsHVgLtGsaUYEv9jKAXBaADreAjfQL2qYydx1PZG",
  "key19": "4B9mz9ncN48h3WiNgUzYiW4Z5DsNuXEK2YnXbEaLBS96MR79iKExztQaHksr8Pf9HM3rLrwCXHf6gB7DvaqgBipU",
  "key20": "2zg5PNHkLZneL6HuMhqtofQrqHN6CKrGjDn7AykMsn4iftKa93rx4FtSRbp7tPaHfuucJZYMT16qzL2rBes1mLc6",
  "key21": "RgEjCE23btaJ1KfbTrYzhGLaDwFpc8SPZtJrNjFFY6ZGNJJ2ZbkzFPsAkKH2UaUb3RmkTEamsDVqeEb8yQTmwus",
  "key22": "2W839fJFXC8wKZ3mvWbgQh5Y7qymdKvQ8Uopywbo3vCZoLwRfjX1vgiigCYmxsoqjHacQpv8TvCGGxeXsT3J84iT",
  "key23": "r3jUPAR6DdbrZBoBNaSLqgn8VBGTCeUfquBACgF3eZ76d2hnKnaut1XX44zwjknJkp4eeizA53xv2ip8h9KF1vn",
  "key24": "5kyLYxi9yf28VXiEFYKaN3VhwaSrpx2d8j1TjSex71bMCTnNJLCnNv5L1RwatxjEmjfahfCSFCJDuoKJHCDJZibg",
  "key25": "Xvpbc2iaPN3cs2rRHTTQBxDCmk4Wam7fEACKD4L5aDJFgy1qjkwuXFCb7iSfjDRkfJG4KQ2xcV1iQtD76NbWeAX",
  "key26": "3e2CjMCuTeLZsh5HQCEfQyrE7CZvDWTef4jZm2PWfsdXby2WQCt5DwQWk69YvKYce29PS4LynDB6egKdJcSwUfwg",
  "key27": "2Q4Y3K61B56SgFXq4bYac44q2fNkCihvkdZ2gA7hacSoqhgfiprHN16yXPkjjTvDdKdyTbHJrMp8mnz512WMTZuQ",
  "key28": "5XHABwrd3DVFpxodHEy47HWofEs1MtuzSmE7ZgFgB41df8wnrNRfDxYuf3xcrpSYg5j8x1cpEFsbfAZKoPGmN352",
  "key29": "5XLFMTUbzx1ptuhuSzX8JizEDkjG2R8Bqp5YMkDhVpui7L1UabF9i5dmorG3DRi7o8taEPDLdq84yQaziU5MTsCt",
  "key30": "4EtfGrtCkoQSVtJrnfDJZS48rNWtukrfHEFtwF5BHWtqSYXDQcZG1thmhAefPhBgGHyvJkzDEgg3aPYAJhnegWyf",
  "key31": "3H3sgM7B6cetnra5dxUQR1qwDeY5629eJ4vFayy8XcDypFoVjhANVuTXBnVYcaUZQb6NswuJ3tbMQycqNtBKA5hh",
  "key32": "4aVo2iexfgkR8Z4ub5o2nJtMxaZc7HasPWMYZL3DEWqs6XZceetRmmbVUaaTruPjesHDQb2FMZc5hj2GpGEBpG1b",
  "key33": "3tctkQCPpBwvxc5GLQn8sQ39689dA2f5sDeWAb3nTDSU2SkNWE4fDjM1HYUG2Wietvjw72uUZE5mv3yEVcR9MQWs",
  "key34": "36UM2dJxgwVr8NSaZT6gBZuQ34Kyc9pLSMu1p6Sz5u7afSwav3q11qHVJHWfRWcJtci5hPKwGLHjuzBVhRVzJhPt",
  "key35": "rsgbWHupn5eTwqRxq1qkrmtQTJ4JsK7XxqoU2QDFmqnvv2Zr7CYZJu2gS3msyvsM31xZ6jjsmXsuuTM8NVaZFGk",
  "key36": "3dVGEiCv6xMcwAgMiEdiDdL4pVnc2mJCRvVkA28GXgKgn8pFTbyy96JLkeyJBumtfe1j5qZKoaMVtFeKRQz3Ss3u",
  "key37": "3fLmBHFkRGow6S63RPFDEuPMaR56A2u3oyPzBMDFsHQcsphc8XqYeiW9XjUMXCy9fgXUziBe1t9zkjCBEh6TysaE"
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
