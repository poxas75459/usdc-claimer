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
    "4FeRrURv4Wn6dV5WVnf8PkTEsiSCb6pb8vM3ivBc7ZkbcQkovkX8uAvRYn6wt9nuz9ysgjHM9vcJmi1ZNeTqc2gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkBJRKCcLAoe6QmsgJnexYPmNp4rNE5kctgw6nnbRvWNr7FAgJYCSiYwpYHZXJZsUBt8z1cTRutU9A1kcR3jhUA",
  "key1": "2ZQrf9dPnRY6teT2qqBzG58xuUmWV2AD6pJoDGFJVt8CXf1n9fReuyy43kEgSe4YpaDsG1ojedAMeVwQVWcPTBoK",
  "key2": "6CkicHBctk54DHL35NLVzFjZuMUh62Y9CrKmwCLKen6yuvWfgFg2Nhr5Jgeja3Dy5iRxmZRY7LkV8w94vsH5e6v",
  "key3": "2SmZ6nmfmPB7RCRemF8N1MYyfaKtYS9Kys1q5NMfXHH6BzHpfX1NTWrtDXUHXmojpG6JgygdgMQXwo7F7hPGrVcR",
  "key4": "2SCi9vUyYHfF8RKLAczs764iwbSfgLACabHkPik2Q2SSjaCMJMJoCXNcm6HaD1SMgJ2rbMYLzWEV7oVawRXSWyre",
  "key5": "5krLoKTyakURBb1g9T8hAHSW2zesxmnbR4ebRZD2K5WJ3YSY6ZATbkLm4Bwa1LHEMrqXJicupBeEunuW4oAsTN8w",
  "key6": "pc4XBWLbncMsroue6qq3VNsnijVMAFBcUAkydeDNZc82RQQcb8Hk73T6yPGixWEXoEZ1KNnUWkdi2S35dPVLH3k",
  "key7": "4MghHCi8cJmUvNXHzspxKwE6bTVtbJzYhH7MRLQEAWEXNsvTgFsQLr2SBmoLDMgjs5yrwjZsBXLmQXhcB3eDew4L",
  "key8": "3CRhftk65HZxgCSeYbjXUxXjeJK5YzyZ6cHuViDGQDmSqWaHQpAYWzuP9tMzmsUho7HdoRkxNZkfMMB69Z4hH4fb",
  "key9": "29SRK5nAyJKiU1UPqchyNW1aKSyEqWKd4dor6NEX7HNXzpRbrf4vtAxmZ8j8TNkUuQuCSJBwuAuN15cydgZWRSr8",
  "key10": "41uRSZV5jhay2fjGW6Py83Lu6Y7FraebDF6ghoQ9SLijVDwEmcvauNmyc95YATj6ngh7wJH1wDSUwKR3kVNYvVv",
  "key11": "5REbSkoimhuKxX4Mi5MxZLHNXaaLHCPp9GTTAXzokXN8WMPsmKmaRTbD3CR2auMyD62mDUH8KwUiBy8HVfHD6mjv",
  "key12": "35fEFcwMxcxxZgXVzkSvGK5AHLJwP8gNoz883bXDkTZhHbckHoYFFkSAZPvFiupTZLfNbrsJKNtR9dSzQqG2EUeZ",
  "key13": "AUbQK4qn3DmGFpMRN7p9SujKx2cmzCJ3HiC4YpjsATignd4sK7B3PXfk7EHs4KzyJGYtqg4eq1avvuDhQ429e83",
  "key14": "2R3XCb8zEzDUqucLGgL92zCa2YsY8bgBnET8Xeu2c4cQbKfuCpb8YViHEDkcpPLosoMwDDUYa5sTqg1D6uSKxWPa",
  "key15": "2zcbhgjroH2gJbi9w3hrxAWPkzXitvEoBsoiB3Zu5PSa5mnPDz3aCcQhsaFgTEYYedCRf3xSr5oyDMsHPNS4c6Uc",
  "key16": "2v3oBcmLQ6ci4SQF6ZtBUeswSNb7VwiUoKNnF42q8wmkftMCa4xMNAXHvFfaWmMmiGF3m4P8hm6UD9mwCDmsNYri",
  "key17": "4BqdR6KYwp8VdRWmT3kwwUmJoxyqQMUk72nUsjtMaiwQET8ob7LfpSWMxA2x913FwqotnCc9VpX7yEKsypMhXTBa",
  "key18": "36dp62kdkxnz5oJr2VA38PUCSowcuTpyBkQxDGqxumPoYXEfwnqUceyKG5mEaUsojd7njSa1qboD2mCMwLr5gQqa",
  "key19": "2K4rSwmDpyh8QV6cHBQAfdCXS1ubj7ghCuAJEkzPWs2qerrkDonA4buR6BNoQJ927xDPrPuavN2XNU88Dh892VUa",
  "key20": "5fGFqcxsi5UycW3PqFYsH2DdXwyMnhnmT1nASf4nFTGovHMNdJT5gpXFqNW7d48pbnq6URu5Ajmq7qXes2sga5DH",
  "key21": "csdw93Pxnz5rRrNbfJfQUWkUK11cuvSLNGTphfJKsbvAteHbPKSVcoCjofmNFhYWmnb3XLNrBNXRkttvw8TcFhC",
  "key22": "5131m48xeRckDvSdAXbJKpwkHCyk4iVpgdf4A6fgoZnjcTwkupwBYxC36VWyqWU3oDLUEFiFXkygG4wuB38tQRe2",
  "key23": "5ZPSTRmxbd7NHvcnXbMSQjwSp5CwZZ15oqe6Vn15Q7UNkNFjCR1FiX9Uv4o7fbFfeBD6y828xEAL8GZd3vzHiQpG",
  "key24": "4AQyWLJWVov3z4iEqoA4bpfuh1WQmZ3QcwPETirByENy3G5rv2FQDZtDKzKprmeqprg8C39TCew1iXZxkyyRUZt4"
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
