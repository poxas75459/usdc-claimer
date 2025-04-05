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
    "5orpwZtLVoNCrc6Dw4hDRDRARq8FN7hPEsPfXSaKvj57GKJbNmVJfPBGsoZ2y6LyZSFod6Erh4nR4WBAr9MRGQPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FE4J661gVGgCYKm757J5itgFAmk5hG9mV1cpRwmn52Fw8UJmkYgdK4THNqrrR3Kn5hWVNwT1t1T5t1KCsyMeikE",
  "key1": "5ZbYaKxUMX2HynYMz4HJbG4AP26GC6DBwRsJzkpCy6LrJi3VWJ2xpoVztveCAzRJAN9cHMUYujZMim8Ej18yc8Av",
  "key2": "4hwpQz7ArJKVNhcMbzrsoAxCfr3NojBtY2jBLacyWpDpt5BuR4Fj2AeBUHZoKmshAuDsexgdH4TnFvGoxgyKgoW3",
  "key3": "5cW3forvE4yh9CGDgLNCXY8cepuJ4JiEfMu9foNq28h1oNyVA5wqj9Nc6z8Dt1j7iVdRuxYyM8K7DRiSYHFk12KL",
  "key4": "26LyjJ53Ptf3i5znxGwV5kNGPXvQBN63cPPmiY4mDCG2KpHfxQB8eLuyCz6MvM41KTG9JRxc4Dv444ke4LTJHadR",
  "key5": "2L83NMUSLpgZoEJBeuUyCsEqCJwXza4aryqArbwdu44n7xBizn7HGmCNcb2unwYKEBcTzMWxL2pDSadX57gHj3RV",
  "key6": "2gELM7eUHvoADSMNFMG3L4Db7uPBmDrNu9TetDSrRSANZunURRkorLSQQWEKpkrhrcC5DjEZQA5tQVgcoTynu5EA",
  "key7": "5csK435PspiQ24WbdEJKPLKAEjtPxe5TktQRPsPYPzBgtNB8TrqqZz22fcBqoHoiD4uYhFKALYQszqYPtyHWXqAR",
  "key8": "5n8qxxxPfTroNEAQ1g8g7P9fJcWrwbhc3oRd5qh1KJJaQBaLCZ6PCTv6XnL6LJzB9yqLHWyChtLNEoXHSFiWB7Zt",
  "key9": "4mY59HiQYws77H6xj9LHrW2svmpJDu8Yrs8UZQDUhEBSoCXJd5YjcHjkruRqNCSro1sioo4czAk7Xj2XnFkyFmeN",
  "key10": "2izCmsUBTSFP4PxM42HUrFL8uqXk8s77t94UgNqBU6HGEBdCoJwzycLQdtjb2EdCf7gffNQhPu6gKTGieAgBnM4d",
  "key11": "3EtE8qZSyaeY45Hsdgn9naGSuDUcbiRzEtJhGpBp9U25GmYT84WP96EEXTBiKTpwHSno5RZ8C2cTCsL1Rq3dGwV2",
  "key12": "3pyhVvamMbEWDw77Jg51khkjuZaEsbc4ZZLwvxHzqpDV1tL2tsszt1jjdx6ZcvJyCjMmGwnRXkbJSMefDQgMkA2q",
  "key13": "3ZczgnxfzG74DTGzhzwQWTQZM1q1hCpFPEfRvbrFPpLSVDX5DjKkyKyMrD5bck8BZM46tPDpf632wJKSfoYAArhK",
  "key14": "QFCLHUtGuacxV1VH2xwdTNzcHJzdbF5LigVtDrNoS2ZqruiSRkvdkzggcFqmgGxMXGdyPKW6xH8t399pcojASUM",
  "key15": "uqGEAacQ7ukM1dJc2eH37WtaXcbJsyePPoqRaFobVHRHs8W47TcsBoTReGkLhpoNprJtcrwpf3YJCEeDxJxTQAh",
  "key16": "5r6jRXSZLDjdcwkZXuCwomuWkU42NdwCoyPJCBAkf3jpmp76LjVTWiyFy8NdtXj9abU5reSursVDjwULb5e8RFYK",
  "key17": "2RE9goYwePCJrcv9FfZJNWkgRj9EJXNiv9JDG6361boHukukSBEzKHyJofwNefLsraHoTzEsncJjgwVcSMLwYvdJ",
  "key18": "5juPFmV67pVLnRC1TWJymsvmY6P2xYJVSZczZZkWW2whdt4fT36whdWkdLpjw2eZ1xAA2iZx34EpBFnHNiJbF9sy",
  "key19": "4qJ2o8VDDKUgFtdq98AFEtb3iaU4LhEn3ivGinWQfDLfYkUufveqBf3cnnu8FNDtj42ZkLdt6wkFDymjCxX3g6B2",
  "key20": "5i14EK9b14KyiM5EiQekNGjW3vQSJDZPnmwr24a1546ppYVK1DSxiD3WEAVf1SPhNx6b7z8SgFkzPsvbikgF6wTL",
  "key21": "2kFzDvA7ahJAcDBgAdiAiFRi7m1h1aqpAZDhRyKbyXDSgRcePbRAAmNUUM1dDn4QT5m9s67Kzp9Zwigtj1xS7L66",
  "key22": "3X9HpS3QxxDJbeUoiqKSGexgjtz8f1P9kEaCTWaWtU7AhCRnN4g5D8K4Ca9yUuqUQH4x3oLvnhrPzRHJWB1AWxSE",
  "key23": "SjBzPbe6VWYLNxVD2PwjHCZL8EuwjuR5gzcM5GhxU1ViGAY79TJT2XioMpy3MgkFWbAxeUvAuuSiGwAyiZnsPq5",
  "key24": "3asUYXX8mvVqxcLnNgj2SvEwdC8nw156QFi9JQAdrjibVoN7WNdW5HoMpJoHz3KjD7ewtEc2e7sHTaNg2sVswkkf"
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
