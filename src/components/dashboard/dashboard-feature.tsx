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
    "35oZtcZXeWYnX8cnPYDLLhptovHxh18BDGqZMWbeufbhJqnv7N8pZ3Q3YpesPJ7GqwVXoGhnpFZsBiRD3HSxGtTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fDjqR4Psjbh5XGU4F4reBZkWwBVHGGDTn3E95hTMspsdw1tPzagVD6AGRqCpcgyDBMBjvMi662t6DAD9bsNGuj",
  "key1": "39TvLEJA3mExPpRdG7EiVYSMMrwmc5tdRQ779t3yXPgX64Rs3Nf4aPiDEZMwdAwF1uBvzu4ptke4sAJmR6nuSYAK",
  "key2": "2Z1Wia4yApzvvnwuVY6Ku5y1jwSu9y6Afa9DbSpJtmhuWnMu1Dv11hEnpTxhELDT48XcErkEtHf4oMqxHfU8Auqs",
  "key3": "AJGnmoz4AcRqr4kg9pdJ3b4EU5TPZwU7NeSeAVszk24f5Q7K86dRDYz28VNfcfuRNMnYXNFgM5bEStXLtpYYaDr",
  "key4": "3188GR7xtWPBXDJEBMBVRDJhpKDKpi7SoXDQJiwxmFUTCjpJukoHq3HWh7pW1A6eRu1TmNghPcoEjnQy6x24GkxB",
  "key5": "2idarBYHyBoCAueGCmC2pNsatn6LmYjkdZk7eTiK7ctFMuJjhUedL4fvujGXeUaAdnxnN4KAgYDna21oGDRnb7XT",
  "key6": "4LN7BdXiHiBQwgYi9Fd4qPne1rvYgX7P2mtUZWssMPHDe94yJjq9VwTHfuzTTFL9oaAe2V6jme7pKTzFZydCkUJz",
  "key7": "5X558CeoGGaNXEZQcgDZBnFNDS3R9Hki8jB7RsH3VNK4kPWph4Zhx24DEgwWx99LzycV4RaTrBtBWocJkH1vJEyR",
  "key8": "4jEcBuDQhe7ynpF2uAL4Gst9XRGnddCRknmAoxXyw7KFqRwYcBQhzM3SJHVrqL8t493ke75zDaWAKLeLo3tB66Ad",
  "key9": "3ed1cKEgxubQv3EmpQdCEsGREZXbYsFUzzxqRuAyn4MJV5ipoDk4vfr1w4D68QWD4Uqv5yqGVs7jSXnLbuHiHuxE",
  "key10": "1tJV2ocKZyHr9pRyZXKDJHgdtNXZz8utJw8JiCp7hv4LeGJqEPNJZuyLUjQSH7mft15whqxNFSfN5vYRhAUf2k4",
  "key11": "4NBjTGNjkKWEZSEy3vrJfTS2PkfkLcpJ4Y1qtYWPqtmyx9hYKYVspy79LvSL32gtARsVT31PnRuADnvCgcFZRQ9X",
  "key12": "2rCssuranqQU2BsELjHEK2nqDhNWcHZ7J8W4hrHNYHru1VpZ3994EemHK2n3DzpYSHWpvoqCYS79Rgk9TLZwCmLH",
  "key13": "48YsTH7bTCcvcuszX3XTN4TdSHmDtkoU9aa5DGSCGdKZFpuzimPRxVTXrNTNdeyKwmWrWGwA93ngjqEYPYk2nnUf",
  "key14": "2B6WYFTxZdSs48xufS8MiQXnXQb5PmtHjXMWANDJAs1HxxjDonuReTN5tVCKYfGtjip4WJDMKv2E8cECD6XWc9A1",
  "key15": "2b7RfzWJyso3sWBAypaUs36ptd9CfBEBm9sP7ftkMdMPsKRxWtGeDsWZ3C3acV3txhduZJSTyXPF1Xte6XKJinrt",
  "key16": "4QsW1Hir2J6x3PbrJYPfBhehfv5MyaxNYmbrGCj9MKeKdHEX4QoJjicaQEcvvbm8y23Xrq12XWVzywLoCYC4sR1H",
  "key17": "46RSjMz5feD2ioeh7eBTKZNE2b1tMwT7RRbUQgELdvTuHcLe6VK8dPm88vTmYTwQzkpaZA817R9H92SWHdEm6ukW",
  "key18": "57hQgMXJ1oH2P3a2v6tJZ9ggRziZ99d5kTznRCUvNswxbG3ysxZosckDr3NjfmJgR6pvF9EHhRPVo3qPMUTw7RVv",
  "key19": "5cS1q6v6BCevibR1riaRcX9XSX1cypiat8FEnktnJogcvRi1YqVZykDeUDSRUn44S5zYtnbDGBiXDGG7WMu7fQxK",
  "key20": "2NecMGsLFNpEV55ZsMSyvyESi7ruzr6xUDRKc4tL3TWABXhzTCYpdowTVk2KNmUB4koQLxBEaV2JXrv6cWF1sH7U",
  "key21": "5JAh6tjvnbUx4t54tocPDBbn2APzmCsvvTWmkSCRoVRdwWkZ4Hk1AYZn1be56CYyvd7sqJXkr1Ak5x2ugZDBfM9Z",
  "key22": "31oSTWButfhh1f5wwaDLNFtjCHSZA2u8gsZbKSwvaDjVgkgxbvSSy4amr3SdbVX23wHo5W22KUm2LdxmWtK1oWdX",
  "key23": "5VxR5BRdrcHjWQKGuyhvzU1c2KwCLyg4omoZ4SWDbpL4x429455cf1ibBS3qPtqcqZ3gdgzWJRbAmY6qEmcgX8rF",
  "key24": "5NDqdR4ZREjQgTbdrt1gYbCGnLi7hwJxKZNXKdcEunTSGB1FE8ZR8wu1eCVPfMgFBsmot9W5EcMhoXhfaZRbXS6s",
  "key25": "rrVTMosdrBEAcJxhUnXorgRiTtZ2PW6aorkycKQM8Us72xEta8wcQEiJdbRnGDB9azo2nGDNz6n9J2boY8AWrub",
  "key26": "5RZE7Bk8hVMsqfiNE9n8PZgwVpjQFdQVGPeNehbm4kYL7FKkksycwbu8FETaxtb5Nb3mzvbeAUnY1P1iapLYch17",
  "key27": "2QaGHKNUFYePCFFREAu9yyFcWgGrTqfCDr686jUo7YHQEoXxHEFFcXrR3JyS7NENiXVoLQqUTjWd7vJzUtATsyPN",
  "key28": "3uNucsBxRHCdQcHiw5Jk1bRPYdUfvHzsoJWnJMkphMe1XZWsPuEsD3fr4fRYCMUVTGV6iH1643F8FZ4sgr5tQ6xG",
  "key29": "5uFX21UTze9KXYAhwkSQo5qEUmwaycnZmUP2zcSCNNq5VuXdcArHegWwbQuoLW8ScLe1aAt1kknEbjTzhF93s7DB"
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
