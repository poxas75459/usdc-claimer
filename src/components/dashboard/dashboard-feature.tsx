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
    "5UV6jNZCnbTepjYvbBatfBMJvvT1G9Tp1MMCA3F6gk1o8XRYjXr5Bbv3yD65Sy114i6vh71JNN2RSob8syJ2Fbue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QnWxSGmfuRshUZcTwnpndn6ys5UqVQjnZeP5beCkCpBPaGQuhWRo3YRn9X3YqtwgXKgohjLRnss5mYmmjXmCKH6",
  "key1": "52DFSE4GXvg6ww9y7uEZ9ooaASkdJSCAVJPqSdpSP3oUpgH3jzYcpBRbeSpxwoDNvAFuwF6EaCAyN7zwfcmuyBGQ",
  "key2": "Uo6dLTcAyJgForScUtLGWZtSGTpWWPQYLNMAnGKitawxxGZ9EFh8jXvUtFGSWho7yJa5CG6MNH4aX8g3eZr8S8S",
  "key3": "fv5F6ndLUASHATSgnNQB3qGSfrhQXEkXV93jhfKtD3GHvsdE75deZrZBAuDnYCoPDGRCi66M9cCJHS6qtDZJxd8",
  "key4": "3o5PXPqsMphgW1RhkrPGRLxSVd2hD3RJtwp3TnsoftTtUcjMd6KuTfNwm2MB6UjXmyeHCv3n9ioYiBPs6MMN7RXH",
  "key5": "3bjvHDrhHqkzrKZAtGj3qumperk28AEA73n9tSiUtJ94zZjjxpYB8dXPGcp1xDJXym6W1uQQKCbyh1Qr5xaDrFDV",
  "key6": "2CPnwfGBnzk7tGxBpLvE2sBCTe4m2cc8muoUdp9sTHgnGC6gDoFC5B98WtscpLGR1Y9ujXh4sPhaRaR1PKXJw3zW",
  "key7": "4jDLYNJfnChytHUovN96a5JYALpvoBhQr8C9fC5ZHq22byUkhgD9zKa8dqhxivAVGGFEGUYsp7DXypWojZFZdVuv",
  "key8": "5LPYLMvpgubhsdhL2WnpmQzNM34HccEjXVwRsEYs2a1XzToKYA7v2kNCwo6zPLTAkhHm4GXdhP58tsn97S7ikEKf",
  "key9": "1262nrZPdDXv5UWPgxE55jMbtCmMogJggBrLKNYu6aHdRh2CcLQt72LrjrY4x4QF5pHUXtyf4iWci6FNtcan2qd1",
  "key10": "4KxqzQM4EzvCeNbnyN4oWbBJFTeMbtNGav1VFeAUAHKNzoyweeQBM7VjxrimfFBfKGhT9pLRMzNiRVaj2dFtFM5T",
  "key11": "22Ye9UwVfQx1GqUFthyeEs5BrhXxuGhcGKAFbq4YvYmoK1J6rovwftYtqUVxVoXULfFAzQ747GgUrXeXPYDWwXSs",
  "key12": "3Z8926CKXX7CJV4MKhcK7MQJRJAtAEECNyQ9xrJbpuqDpusqreXxVFkrsdgxoN1NCdL5176gyHHcrz8z1SA4pS2Z",
  "key13": "2SY8egyAvEHoFtKTSnbxqXRAv6vDLEc1QuGRWyQQmocgmGLYJEzMi1SYTks2y7AdQuwpiwR4GbeLhZSYgtDSKtTs",
  "key14": "3b6hULTaVRV3Km8GqFY6iXyk4gijecuc7tTKL5gi1f42pnkew3xwy5d8cDEhN72CqtUvEygLEtxLy2BVB5J5fHpD",
  "key15": "5i9RjEBk7DTYrMwxSDSfSp4byTeEsPCKntwerYewHj7iefefsX4opCxmbEYFAnPz1bHHXCC2cuB7e8f5ckUkMbHj",
  "key16": "dRBSRrkJvWysm88YpALkeYPi2U9HRCUUKeBYUQmStaLFzfg1M4yLznp3q8FXAuBVQAdGtoYTsrm684QzyoY1eDG",
  "key17": "5ubEAuMb2nq6iAKABEGSP8xjNQsYhLsSN4MzkMCkYxbmdHPZ55AxyzJ1cHZib9EkHdRALute3DvDBFsEXzQeqnmg",
  "key18": "4ihexz2jqoqLyCzmJgjtyNFwdDov8vmPt6u6c123aL7YPggYcTuA7buZj8Dzu6Kczv9QgUZ3iag1nsunZY1VmpWv",
  "key19": "5GP66VLqRfqAH1w6YYuD6YMmVCyyGqJdQTPyZNQi1GMfF5XikuBBh4WudAw9iTAT7YJfFDTb8q19857YzvMhwGus",
  "key20": "Haxkc9LqgmnWaHbCQic2Szan2Usg4cGjvELZtenK1zzrL8t948XD91hUSM8v8MX9z8Sfw2aUzrsa2m7rJRYeuVf",
  "key21": "5btALy4nUYzd7YbGNuVDedqwYvbbbKpJ3hH9Qk1hPXq7V7GKy17pjZJBLA8Jerq59df7V39EpW2BFPMbDMJrjt6E",
  "key22": "42ZCVA9EwZ4mnqTkFCLkKh9NGH6FkkfzE3HVVhwjtCWtYbLppETuLEmg2WY8rLHSJyD9BzCoM8BREQ9iujvBupCo",
  "key23": "4Gqavq1hJMj5Wq6ARBucVSTbAs1qDynbUyGhKAvkCvcuUrFKk88Vrx79FzeFkrm8DpjPYV89PH2mtNXtmJR3qWZg",
  "key24": "2GRwBckLxZLoKJRtkZDDgevDURPAdFczP7Dt39SCZX1YP4KGsK3rLbh8QSfMrxmLusznVdJHo7EWzjTTvv9BAnJD",
  "key25": "587sX5SoRgWdQ6qCRQ5eFUbYyTBDhu72RHNN2c4esZUKGfiDu3radhK383CR8QtUFjEfm26c2oyDtrkEtuWvFke6",
  "key26": "WU1r3iVJvBBYTwo9o5ybGgJ4xNVdESExHV4jCPxcymgMKxhQdLgTmp2LumAT3Ad5FNdgdmPqupoEFPVRFvWcLMv",
  "key27": "yeVVtDXydbGarBUcxrM3P79D7YxhkxTBTSRMbjKhMrwjNopQUpQLdiwzmNitQRRTTcgGRnWv8rbSpyvtgjrWauJ"
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
