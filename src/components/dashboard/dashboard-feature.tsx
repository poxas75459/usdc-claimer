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
    "3YmCwrJ9B4yvY3pNZQ5tGuwLrzAzZRkFA2QfywkT7E6Aaj7XJBeX3KKEEh8vGyrraz1c4A1BT2NJAR1aSDJmCRmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3av8MpbqccmEXJxSv8CxeNkZGJHL44X4PatfnwdrLnpPsARzac2ubQJqRWf7Xy5PG7nXqRk92edaaFhAVjjLa1jf",
  "key1": "5PQytQdT6yQNwBxhDcAf4KyC3dvxxcTJaoDJFnrMmf3LGMHsA3ViqR9dmyJ7MRDWWEiRykqvj4PJaUC1ZQET67Qn",
  "key2": "Fj5s9w4SHFpQ35NsnmK2AzvXszmhUGidnqMbtAjYLSz8fj4iEbaEbC2mFZMFL8xxGj4DRybtuxZfjbmyQxmvqYf",
  "key3": "2PsQa6hPdHXXURqVCMESGPYxub9DditLZScK6FHaeBRLrfgPv14JncgpZ5ndVDRP59tT1qkkuCEUB2Bct3uJK137",
  "key4": "3n91ZNns1TFiu13LwxzCM7hHCsfdp4daz4XkbJiqYd5MrKtVM2ezqEhPhcJFcDvQ81cERU89LdgXQRbGaYHSfAbG",
  "key5": "5AcUJR7jq5nk7zx8NuNqcfmujTYrFzXHs5bTeiKurY8caKnhr7V8wD8Bq9zYXzjACYVU2GMufpDf326MzqbdhdqS",
  "key6": "5QieuCCdZ7FP1tRVSLwTG5Wq6ybqNayoKeHDgyxHE4BmSvnWLJ7kZXBEGA2VHJCQFqraEMh8zE9EkKAD6uChZwG4",
  "key7": "595LhyALCc1p7c7LgyDVKgiaTGh1ingj97cVgpdFVurDB27ZPh9DsG33St58uoaWrZ6U68jvtMDPHQHrm9iMmyTQ",
  "key8": "3Rw4yjtJC1iLCMXgeQDfcriXR5bMPmFTPnwVecG5GaByhKFMiaVHSDQe4eyn845N3RMmQLJ9xpLHakN8dgB5u2jD",
  "key9": "4xybMnhaX7cTvDTUAWAEGMKMutucE8xx348foaUNz72TAo3PFdKsj5wvnB4zunRj42mbdVwpD2XLxrAY9ygmaN8y",
  "key10": "2cu6Fsoh55VktV65TpBVWuN8rAELsxr7VDSMZXxTPWd4c3qPoEhCgh876Xcii2yD6phs2gYK7vYeWKn26yoY2ASX",
  "key11": "3TqkRtSamDGLMMBYr1WCTfBW1cCJdDDFdyFSSBQNmcpmRx7yGUR4kRLSgz1CEXMLLQWQGkoD84DdZwLtRkhuiaWo",
  "key12": "Cpvc3Ck65sF8rqd71w91zjQefEDwg4PyKE3NTAun6hzvzX75Bc5WPuJCKuRXzErXesSXuG4xcGPhtKY3NsRJbhK",
  "key13": "3ahrpofipAC5mtg8fBcECyckpkYM9xBozyTthijZhDmS8UXrAKU3DuoVLmHE6KcqBvAEPy2EFWeVCDiJNCdgb6o4",
  "key14": "5Wkkyheg9BR3fy4913FcCQXkJCv135CNjiJP14xFDRWFLwkhvP9rm1GPGajxGviKkywSFP4rv6PNK4cUU4NaziHG",
  "key15": "2Xo8PBykiqVo2hXBvRNYufY7kEALCUhcTXj7ceqtJWyQJkdSiNtssL3m2jDh33iP9cNuETeLVnsfsfuT3vqaCbYF",
  "key16": "5mpMWtS1xQxLMBWdwtC4hirVbwZ8a96pSCorae1cadWkmh1tLv69TX5SZ1f32c5qWvAfLk1ZK6L6mSYhYT18jczG",
  "key17": "49HAMgG2BFJb17cJZQSYsBZJ19ho9ZcF2SEpDTMvkYZTtFpQcXa27FS3iUYoRUUyWj8MaGqzcsfv162GTC5B858a",
  "key18": "5Bg73PUi9CxMsZo7nEFXhFF1rP4pR9hqUDfz8J2B5ywYhJUQQNn4REiaa8S97xdLF8fVsPnWdyMA3g9msPVRzpv6",
  "key19": "56D5bskpb6FA6RC5aCXLtrD3CP8N5NkqYX6HMaYGqq4gEiEjAfk5JX6yVKsyjV5dpgpSFjEQ3tcyS7jPQYuyUTzY",
  "key20": "2Zje71qeuzVprWN3deuzgnd4zK1Y8cmEKUCzA6dHDPGxQM96JdKMBhTdnvjNm89pwFNmPtvk6gXEUWk2Fehv1Br1",
  "key21": "3jdzZ2bNJQwkZbgdy3G1nYEBtsGxWAT5knPLbc8stPgGyhJ9jMjzQgsbRkRvjX5yqWbN1z1BVuQEAWKeCZfmwCcL",
  "key22": "5ccJa6rtXZmJx5rvKmqhM6iNZfDPNtPcPJ1vLUcGysGrPmfYxAANjKPakcYsm1WyGwxkfzZhGNnL79nF7UjiFATD",
  "key23": "84r4AbFj5RZteBWbEzJshDb39Dcznf2KW8GQCtRTxe2adSKuY1Vn8d2TrE6eFYKak3WJ8eeCrRYCDFCYkTNf5CF",
  "key24": "54hMw1phZRMUx4PWy4MnRohMB5U7SQoLcoZnxBBiTBicTraR5NEMA5NxyuPkajgNUa8Gqka9ZDxK2vbgefN1sQb",
  "key25": "SaGJq94Yc23wecXSkWYWzgtKyLP66twHF7QPW3HfXbgPveB7ZXd8rDbe12hdd22rWojqzedMtFcMoUFS2AxesrG",
  "key26": "5wDJ8gkYfLHjYQQjoNqJgS3Vv18CqPCJAeZSHDuB165oHLFUDpEXfXjub1Das2r3FoZstt6HGm5g2X7E6S6HKMpL"
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
