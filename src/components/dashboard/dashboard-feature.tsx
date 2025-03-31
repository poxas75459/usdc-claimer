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
    "2tznTuZPWTFGHTfsnHVyihQFGpWp94zw5skLpoPu5eqxJfWZtmPAiUNoWmgJZ1MmuhdjWZVtoUjbJFjSsDg4VJV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sfGhPksnweTgxQjKiyYHYjjXiGrPZKTYZ1DfpHiP4C9Mk8MUq4TF2jsCj5qBtnPsvhghvpA6eUxLm29KpCQHXTG",
  "key1": "23hEfbipah61janrSiG8jQ75wQSFVVr4EtRFHievmDxEUBh9cT4Q5jU8WZmVVr8Pxa6Hubh89TZvPJ4MKiPxHnaN",
  "key2": "5fSy2dj7oUtisjbV5JCW8kaPVQoZ2QqisXLcoi5yBq3Aarb6ivoBxi4Tr4XroJGafgUaGYMvqzfu4wstMRby1N6s",
  "key3": "4mGmgXR3hcJG4Bq8DRS82UWvhk2NeQnWVa8wqCvfnER23hgraaoLN3mVtpLuJGamqWGj1xxzjFbJQTpnYkWNUacP",
  "key4": "5sDERWcbR6eoE2DZydoBsgDiGhfgapJSVsK9tW534htJGok3oJDdHVTkkHeuHpUHPzG8zLcyrtR1Ae7CxZi5EN3Y",
  "key5": "wbAHT7qWH3z6E8Pmw9G8uTxXHV9ReojCfV9E68xPosVCuGkPuR9V3M6hJ2zgx45bsMP2VtDje9kppgTW2vJnPP8",
  "key6": "23h4V4pG8NjJBncLZKD2ti4xVLCrG5qn29x9TM7HGqEDWenwQYPEaUTiVF5ogA4JiRqtY3zpW8Km2HU8P4Hb3wnV",
  "key7": "5UFxWgdXvAuNDUxtFV1nfgm6i6zL5CAymvA7brGoUUXpbT7ic2oPd8iJq8uq8t5DM5WwgJRTpGJEjdREeoRGSc7V",
  "key8": "CBQtJz2DKg6FZC7wahctTCgu9L1qPy2FvTLSJLaxwmNy1Vhsz8hxc4NB7ohuJ8WHhaH4HNcGRrEvUjdnWurfaCK",
  "key9": "3bCLVEgu2HeFi1xBedwcqAXQqFwdXupEJ9LQ2WKzaXhABG9nnLYZTed3JiyGseMwQWD6N4jk7jFWKHPFE3eEWMBt",
  "key10": "5JZ5KnEuYSYSBbYgpjvZtjMXmWa4ZtKuiTz3SNXPKTfVRNMcoipPTnDUFFBUMcXfMDencxFH7oHZYgKx686PDuKS",
  "key11": "4uGd4WvFwuzyiyqxiwc31gJuAqESbEWCeqD6imM165JGRKMZDx1i8Ac7pQNiL9VVmCkXK8qXUcwaZ6aHjgwh2e1o",
  "key12": "ofCbrJWBMoYVRbt9B2UdvwRxhdhMDeNcQU5jehHkBc3XXffGo5BG3Pcad3Zayu97AWLcN7YUr6KFRQxgMHYrWAU",
  "key13": "45rsrVvdMiW9KrT9tvq7CWRpQ4coKXf9EgUzyCgDKaEWnFkV4fHnoGV49aMSxzJoxGboxuwbXTe2Fa9cZCmV4y91",
  "key14": "uPLQsskyDT32hvKLrdDLczePaPDsZoFJpTVVQ9hshVNMzavb4KfZZ46QDXrd4ih21B67FtgSV2FMwkwurLMUMvH",
  "key15": "391Dsq3fauB1F8kBvojPKeGad8xvM8vCvFfwYykQrHd39K4iMLn611hBesQLi38q9YNEs85Tg8BdC24owW4gjcog",
  "key16": "2ADTpdAtEm2HfDjnF1JJzA8P8A9CQFnKqoZEu7MEfGx4Vf7v42CaJ8bDRDMtwuKuvBPzcDn6EddvWmi9UE7WWDwV",
  "key17": "3LXQ11ePr3eTh35tYcZwaQ19Q4vZxKoENv5uc1vVtk7ED5wnYwKpTRQeE71wU4EXPoEth7htZN8YtyPm1jKRW2k6",
  "key18": "5KnV9HfB3DRDth2DEPbVSfJ27rkjskdDPvzjiifX3Bmi6DRnbmLnS2hNTBfv76rn2zhpFmkNMRJiA4zJMdShnfBe",
  "key19": "4KhK6yi4t638wTfHRtQrWHtpvbeWiVZ29W7922B6qXeZrEMW6t8J64mX7Eo4mKYfTLtBp9EG6eXNggkLcMSuGTHQ",
  "key20": "bF3tPYYu3A83ymY3SNyxqaNtwnLxRDHcSf2TM4cDWiaWQbXem6kzCLbkpujEMEy1sPhndJJoU5y9kQ8K3SvKVjr",
  "key21": "4vpW3cKcfM9HzkrmAycJ8uA91jvkuRSJg4f75o4HW8YE25Sa9JMXoz2oCADuMuXaJUCP79FLLGY3X6bozV4pduDL",
  "key22": "2MEq9GqU3g7qnHTnauFR4vvatsU3ynFKxUyPsayGVdUgx9pqkTMNAEiefZ951Go4C32dE5ARPieGSPfaWn23YkVb",
  "key23": "21QDCKqSKD4X7X7FTVuhMF2EFtRo5HE7z84Kg2qUuhmJ23RBbaLkfoZzuH8y4q1dX7mFQerkrjn7ZYFfcpW2Ndho",
  "key24": "47zSLECXMhCrhnczXeDnHcyP1KJHF7uQSN2SVVB6gh6qRFE3WR1deTLe1sjcNpuGdt3ZjitSRqzWRMHVSqFArYQy",
  "key25": "EKnwKywM1YHCQmZEhBpQk9MzvpM4EBZ37dqubSYmxsERTX4sdfuSfGz2uW9RCtCosFKEUH6E4UcF1Y2AcxfnNe2",
  "key26": "wmUbnLcSrCQS8ywmNCSkJVudrrbCd7GDzicZgBxD845wJ4DmK1QpgJCRBEc5s62rei9ELVa1xSDjeMr9LmRg59w",
  "key27": "FUYNwPrinCRFQxLgcgQZHoYazBpJgeS1AFCu1Yxfu8tMUiZ6xZcu9PQRiZJpwAtAwxFzGn5LE87nPY2vuaA5wmi",
  "key28": "51EAsC64dTFywNTvXHQ1UdGEBuH2jkJm5coKERTaBwNynv4g3SsZVnfLBzwYnf6v8RJJR9BSL8iqsJ3zSe67BST1",
  "key29": "4bvAqVFJduKaaCxcreiw2e3DPXzJUPaCEqXXXoq6VkbW9Vq7VS2KefkLH3nzCLG25QUccMYrtjoGbTQpzGkrLAk3",
  "key30": "5w5PZz93DQEEfgv7fqujvNELzftkHZyAVm5kzw5ng3FSVG2gArKoEg9aV4RP3nFV527qAHLok4BCNnUwFuNqH1jz",
  "key31": "5BDFnzwFtbuArDtn9FaDygRWFobcvAkFe9qFJSMkyinY7BeVyQvxYCwSkSTYutNdPRfpv9LF9hnE9YT18DCChjob"
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
