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
    "4M3FvGtyZpn2oKGV1snPwtNTsJddeMZk9UREYqhub2FoEs5ohyhkB4VWzMnHjRzxEzbXuEgKNXKPKsNwFwzuQMrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfStQ6bbF43ePRtxgD9wekzVDjKvtgz9EB9iDrtHPegXTV5mhnVEHe5tHqnJRRh6rgUpRq5z2t4izBejwsLP8mf",
  "key1": "23SKKDn5Fz2BsjiQiN8HhTgfTnqx3WmfitDVuf8JVjbmCr6aR7XR9fYs1fnHLpV1tLrWk8b5it7gJjNkgU4iTwuA",
  "key2": "4DsEzWnWakBrr3BffnP1DQKavogXt4yqXhWmasxFPMqiK1PXs89MSLzexWaVpRSfX9EWUZ8CB9c5Bd3pm4Be188b",
  "key3": "2GiD59Vb9niAjDVBYaV8KunWSr4MC4cups9vRGUzxGhtqHLBqPSrkZkyTh7oqx959sq9GBke9st7opTbS5Ltfufb",
  "key4": "2XDHdaGKwSe9vDmnTA2Pf1Xa6iRorj7GAjUoEm7HjvyapGuCoazZ739pabX6QGK6fGy7Xsh6ih7odrkKb8U8EGwN",
  "key5": "2sbLT7hDFFxmobu4e4zB8hoPUJSsF35oeDK9URjVFgXfa1cYjJKLBsCaNyr4HPFam6HYWdd7QxyP6kiD8J1tVUxh",
  "key6": "41nbQfPWQq9pub7gGQJ1ALrdS5suTr7f4SDJuMriXzZnJb8896YnH5zyfVDMAoC1J6vYtLXm199DBwMZMFAheQag",
  "key7": "5a4un4pRgpMKdYC7GvFEjAtdR6xm4ct7hB6HWeZe4qSigDbh281hBj6sjeAnGtKtV8ibZ5U4KncYBrYnZ5Huhsab",
  "key8": "2A4FHnehYMb63wXsqSCcD2sLZNMz4Raz3wWkzugdnbcQPHoGYapHymQP5UBmSLXbeWfCcH2UvEJyZCNnNtoo8eyX",
  "key9": "t9bJqCx1Ru6pufjsCDHxc1BA415zfrc69PJKysMT1S8BAZitsLUUABmE12TsXCYieSds6rh8xbTt3HrwpZfG8ay",
  "key10": "3BkmFihZiEjiHarRY1G7n6MHTGNnF56SQ3bEofY1aPHJ7LnpnP3sWysGoN1NwUTK4RUQhYXRVPGAnTpMAcJNTKp8",
  "key11": "4Mpx8Yjx6LaaXEadcofKnHwFmDRs6tgQvVqe7H7xsMCXiZHtmyhqTdLUrKuPHpZSFyphmCfJzZC2uUcuGDUxmRHY",
  "key12": "4bgNkkBioh75nhzJTwfcsXKR4b4RzHEWthX96JDiV32t4n5kcuP9ujF7UNQ4V3SHkN4EkJphunPfHRPEngt8F998",
  "key13": "5hVvZrrd4ti8DPzWruib3Hejd75JA7QRvDfk42MT1PStaWuN6SyBhEg7TTMY1BTQynrNuvsBR1NyCwTWDrrhtMu5",
  "key14": "3JyJxbAVFsPuZ1Mgn4fTNo56JD7cGryrqJ11m13YZWxsaUSPzHTtVBZnPVX4JxZtKF5yrCoT6zoErQwM9gNQvF9",
  "key15": "3Tqvi5HQNJvqxkpsFEvdVoNYbSYnkytgaUYDGHfX36KiExHt8yET3tHGANCJPAFZFq5STnZ6ZBDrdQ7DQm5hqtvd",
  "key16": "2xz4wxosu2nKmTGKohwHjupHmoSjUk1Qxsrm9sv7pYr7SH8LKPUmmr2JM8hegwng8KUkMwhojbZDp5SAaShSomam",
  "key17": "3AfsuJG9XSuNgBdnf9kGcpRvvpRfPDTuEgDTeKJowvENCUqsxADjC7s4Xcxsx2WjvLLM3RDMAZABj2Fis18pU8XJ",
  "key18": "3JGUHNbxjBcTn9oS3HFzqa4uKVTMkyrMn2u7LFmqXvD4H2U4cQG1ihLNjj3onYRocdzzcnidK1wDWRD7gkAUMRvu",
  "key19": "3F8QJCYy3Fz97NedUzpjtCEHCm2h6EgQduRpgbQFmEMJrkAi9RfvcpQcmsuEVei1bfJyPMz8EMnT2h2141gMgV36",
  "key20": "EcVy6XHWxhHuvVpTuJL9ZdvXHaihTSKg5Wos4FREQBNReQur4KqsWDjCDevVEic8UsaUBaEncDg1LCPa8xMyq7m",
  "key21": "5NrHQvSZyHn2j7HrZcejvNrigbAwXgZM87Lm4cuo4VHEgwzCK3CwKSeoNnvz6NMqDbjT2wu23ku9FKtTddqRcn6W",
  "key22": "XPdYhqdkrArorbWG7ZmQwn5JwW4cPEKRdT5X5cjLBUAjMXi8GqKe7SF48BkzX7rVH95WG2K74mpQA6o1QbS97KZ",
  "key23": "B5KdgTgWsPD2Rv7LEgjzLZf2sEYNM57FAJBBMmz2Px26YmBn6ycjnhMGy6bCvpSZWFRJHsL9KY8EvY9QJ97fhXK",
  "key24": "3CGrFhimQg8V2cThKSR7ctEdoihzz3tRmbT74sCzucwFjbQp1QhY9M3aTr3bxmWnWs8K88yE69nDcZ3SKnf5h1ti",
  "key25": "i5omEp9Yo6qfbXYWvppcshXuQ2HEsD4Anqn6rRH7v8tgw2oYKRYbKtqEWgxfoFDRhNdJJ18irHodfup4bBcU9S7",
  "key26": "4QviKSV1QeubH8XUEBJYfw2XLXdU12gtJT65jTVohPUvspQwbKan9gB8t1WMNVtZXtFVww7dZxAPpWqucKGBNsse",
  "key27": "2RcWx1zNtSVpvLsAArWkEv1JXpTskXA6mv7hhJH5VPGjPMyqEjS6MXGjqfpeKQeFkKttgD76rJYRu7bmCfhA8okZ",
  "key28": "3QU4ZECxLvQ1S9g5eTP35QJRDUmGx19EwhFnne1eFCfsCk3QAWWoWg2ipBQmC4gyJhm7nTnJ1NxgfMp12KtT7eA8",
  "key29": "tasVbAdijkqPg3mYtDG7fWTrLYwyAhoC9ppkwCBR1popBjvUy3LqPNdASmKXouAPeBLExZ9SGrabg9K4XTr3ue2",
  "key30": "3Fagvd9xdZ3NtZtWNreoo4rLAoVN7NoiYkmbCq5tgiW1vqam6QeYWxAm4J45JgUVUDiKk37REkyNKLRSTEgYKdYV"
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
