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
    "4Togk6zhuEdeWUpf6eQE5sLAApMxvDmwjEWPQz3Mxt1zDJtVRyYFhPiHJXw4KppqAo5bq83ZKqEyGMVb5DDHvdEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AEdpsUy8gVWgvypLCKc7vz8Eo5BkTgjrWjJmLC8tVBcvPAEmu5zhDGgTb2HuXJEdvD2gy8tz3yTJzJS7CSsxfSD",
  "key1": "5YEvNHVcX2TSiw4hy8VQ5BYFDkyXALHgGzskx3jaGq2wZmS16EcfThxXLUWDbbo3bvVUqkKUjXxtZYZS8L6S9zm3",
  "key2": "5eSzDJ7A9B7kprX7dbcbrY3XRoop1dK7MB6JbCenYKqFcaHHYfBmBT5q397Wd793cmBQxYzbDBQHQjDM9Kb2hpo8",
  "key3": "32gTcFMLnVuoTFAr3FTWSkwfcEyxy3MCKYDeiZMzLKpV3ZPmjMqyUngYwHAowTtNFvv3hf7SLako2RnP8NRZiBMa",
  "key4": "4tDNZKnaorGFfnW5q82z4wGgV4C4dPbQMCXBTED6M6U4qTSfYpk6myw3W6MMtHFtKSo3AkiNNJUgGAhqurTeMxy9",
  "key5": "ix7rwND2rnTWZop5BiTH1TDVHAN52Q6ntEPcWwsszzhZqudv9j2a9QPuuf9TDDeefGoMqcys1P8NRE83UbGrSWQ",
  "key6": "UGwTTVgsatr6TEKjsZhdUaUZbXcFpJ5xgaJcJ89oU31fy3nEDcrzh63YPqSpi7t25KM5UjY3wwyU2mraf5Hjy5H",
  "key7": "2SH652R4omeu3QjEvtaHyonjbQuBLK2K7a2N9xZyw2ZPczio7DSwrVinfyDt9xXzMMiGf55Wbii7BNTNfkbtL5NK",
  "key8": "3ZzGG82iJxFLzDvXTQumG8ZJabztogMqVeF5SaDT1tcYYtW754UeGVxK37FtwjCFvQ6MFpyG7dnPjH5HkZTH9AvW",
  "key9": "5nzACtkQhCqLzea345w6SJDNXynxYwsipNcLaci8QTFZmnc17o3XXajEPp9aEePbAghTUYhPC7Da5VCfH7fQ5j4g",
  "key10": "2ZdYGVHpQhbhzuDf6n48pMwRtg4HZUQaRMUEyVAohkW5PV3szcXcjrnqfgXTxjyjQRaDL2HhVbf7RmJ5hNGCYBPe",
  "key11": "4f2A3aLMy6ApwXw8ximaKJuhnN2FF3BnCzjxxXcTRE1zJu8sxrYm1qctRenHZhihNWzDqcEyBoQ8bwTSpzf1pR98",
  "key12": "4oicHELsRzNxPBHs4zEMjMS9Xq7ZzwsKahWz7oL66pWsVdVX8PfbC5SRJDQyZ6J85MqmkXT1QCzftXcgYMKymMFj",
  "key13": "351WQpQXqsVZ2c58gpNHnranEuN3Qp5iwX3VjFbfixmFnwTDL1v8DRMuL4My6Bnoz1YKuV3sEU4xtRdhrE7aZHaD",
  "key14": "5BKWUohZwUgyLwxnMhYmXeYLJTx51RkJV2S3K8P8qxvKNMh93KjPZ2ohjbChecBqZE33YZQTTgMghL21PxRUCu4N",
  "key15": "2E6LmnLvCksuqt89yDwSLZrmkf2QrJUB3oqX74sSLsaQChVcY3cHKtV8bvhpi24pFqi5z5AysiHuvfVkAwwSBMx3",
  "key16": "2jDNBmwYUnnAQQTVeCA6piy5dEkEQzEr82ojQMWJYAReSpsvLXMBQJnZrxgeg6majYU1U3xCAMk1nkXRT189ZA68",
  "key17": "4ffditBDPwhYbjMb6dNoxF8W29A7HQMdg7KS7gFk4vRtKZLkxUWmK7vtjtpoMYy6fG8rQPYPgXMSQeY9SFoYevfJ",
  "key18": "2ZSR3zVkLuYBtcSC8dZvAx8opa4UXmyEkMFgR5NXg1roMWRnzXmubvmXnA3CZciXfJEgL7W6PdUTowjfnfHLqPGE",
  "key19": "29KSMdHtnhHQJFFDjL2EsWmNbsDjcDZMvKwnfCxjfjSrqAz9Jz2k29qgYG6u95ysNe2YUuWh2KJMnp1tMdRZ6ZnF",
  "key20": "3p2c36TC2WBqCoQvF6BPnrTX15Dz7P7bswHyEBepn1WrEeXYaRSTgSb23bkan3FCuAs2dT7vP9Bfm8sRQKjyqCfU",
  "key21": "5MHjV9QubBz8QXtUGCSE4EFRiEk9WnnSFzS4qNkZhunasuSDa2X3m4RuN8iRMQ76xdAnrpbMfXANH3KhjNWGHpAS",
  "key22": "4rNEJuM2ZccHXgXYuEKB3ju7YkbgTri34NrHjQ9qptjteLdrfp64huFHHyc6TUPbARE9wFHwb4AaZPo1r8CP1JN",
  "key23": "4HdAHqFdcy4HwWeoSPkuQsedeLjQw7GFpLPZQkHwFNqTPEWrFBj2XH6wiuqskoV9YE6QWMWSzzdhTtLDMQiRPe4W",
  "key24": "qPq5TjeeACK9BzW2pxwGJP2jdAwS15MWCkzZg37i7NWeBQf5vjeEfpkSp1bV2CQdfNswqoCsqJw2zTAxkJECvYB",
  "key25": "dM2BzuKAogKQ3DG75j8A4dG65inQN3msk5SNoKU3YV192fN2up8oJYLbQM9cbNhF1cWgK46VR5CiabDhRuuLdov"
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
