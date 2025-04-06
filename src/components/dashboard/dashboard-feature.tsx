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
    "31tVqVsZ9QfR1HMbPosmyCCy89yLLJE7Dgaju4c5KFd9kJXH9xQb8FnPGapAh2tWfqA27e5RmwHYb6WR1UqwN6Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vtf119hkYSME1UBHLyfDQ3F3iR5mTbELAmkdT7M7a9LTPSRYVoFvNqr6sNSmWCfNPVAxvBj7jnWfLNrJyVEwqDT",
  "key1": "qVLh5B7yqUvR9utHkm7UAXRkzi5qG5Dfb4PYStX35UarAN9pMEziwset4AuEPNVAW5na5xdRHBtTwecAH6C7oU8",
  "key2": "6gnJwLnJ8Mg9cX7NrsmDLUSNQPM26od3UN16ReaoEdqV7sGRW5HWYaKx8dJks2zdr9A1aRxuPGA8HE1ey83C9DY",
  "key3": "5jnaPqNZuxt2FmMm6WT4WW6NPZdqvT4nEX3d24SHurjDwD1U3EaYRkVQR8TrqnZxFsD1wheJFkcQevKFgYgcehG6",
  "key4": "4sJzyvrrP3n4XQAxuPsRmUhzVo5py5ZJdVzWGEWkxaDjQpbum9M5b1dfs4RtLa8paMHMEHyJmA2Z5fNQa1QYHGZx",
  "key5": "5HRrL7YirHZE5GvZ21zpCSctvMqQcwW1z5ZmHacYsSoLCUd6WFPFJ4Vt5BNuQnCGmN2ctBskzPZfQqWaAihxKF7V",
  "key6": "5A7M8c2juRGFfBa6vrHnRZR6RgZBX6vbMjhRwY6oGAjwmYZnTmJkenVeFxLv7K1LfV9kNQ34snMphaaBoUd923JC",
  "key7": "3mJ7ixu9kh7zSjgH4ccm14ev8yas4CMsq19eMMKza79eWXEPFji3jATGFd9xJuLfET6qkT3D4YCXapHo9dDvGUPi",
  "key8": "5rvmhoSNjd3x2CCwkSj1Z8wmj2VMuUoLqTXdPXA4nKXofXqKJpMAA2Xgdi4WJkuGkc7Th26ZxujNrnyzw3BfQDz2",
  "key9": "4EA46Qu3waVc47nc3jtQaufCruLwC3C77CZRecmBnCvv1t769yWZm9bWwzfQkR4WQ5nuTDXUWk6NtHH6uqWo2HKn",
  "key10": "3vb6mW1p95jqki3VqpJLPA6k455k7kVAjtfbdnvV3agMTnqLoQnZ6f7BtaiaTDZV2LBDVaVEFKFrroJGAnaosxMK",
  "key11": "2iCzDV7zR3nG6CQVtUfVu89CizecVrkuRHXCzvxvSDmC4SwgQZxvxY8qyRU4SDYMyuTifiLnW5PnowLuQukQs6Si",
  "key12": "2zkdRf2HvRp1GLZ9GXthC6YDtE3YKvzQtJqocaodhBEYYNNV8HpBDJxfJxPyPN3nE3VWz8nE7GUWpCdL5VmBhED8",
  "key13": "3knTWP5fFXx4XqcZZnsE9za2s3TkXYZPRJUGVYJboBRhgEyJRwUf2GUCFHPmXaMHNET684XdtYHu7ENgFimHXfrp",
  "key14": "5KKqsnnTdE9YqSiSaoVed3DD7vZNrJjs2xKc3DzQntkMS9tz21mQgvQ8X8wAFthqYercperoqKcgamRZ7UGktrhn",
  "key15": "9ajGzbePwXcJywZnLn5AvMXYLQAA6upKAF3Aszp7Cauud7QHvadwi7M7esQXgauZzx1MaAMWVEHGb2rZfMzLB7i",
  "key16": "4Pm8Mdykxd8Uton6WCDod9n919xc8NFy1oGCvAD12Hopt1vwndDZRKQLuNccAFuKivovn4zfWQgV2yJkeCvUn1aH",
  "key17": "5tN4rs4UshuEv77n2WDmoKCfm6xmHqE8vYaWG92bTNHoq3Scg9C9Gm3SVW6i5WzGD37AoSdoJmdqpQMDygbwK9PZ",
  "key18": "3vgGaouzHRcu5MtgHsmzEeR7Pk4FAKWE4E7avfddSduc37GKhf6CjkEK7dRQ8bRidPeD1tB2GoMo5Yqf5NcDfczB",
  "key19": "3E9HkBWuVv3711ttrgDY5V5vzxQMbgfJrWCtgw5F3FU43nDcmwbqdJttNwFzCGxNqQBfKY5Fos6Q6RQQ5FKxEqMA",
  "key20": "3UpodXbpZWwqgKRTgXRCNaMBciFnb9hQN8YYW8qXhzDeNy4tR7FYEdGs3bp8PiByoXCez2vbzcvUf9x7C8J5PqpL",
  "key21": "65FLGZFBuPDda1JPvb6YE68CQnZaafFJaYHQoMcdpNNjQyXv2NEJmWXdd7BM8RdubJsDdmdxwewGuh3Mbb8ycBq1",
  "key22": "Prk9KW9vXSMteoydmnx9vJv4UP2bpBrmyfmAFKgHpL5iqM3C2bqvrHdzG5mBnMewHB2Lb9224EZA53fshSr4HAc",
  "key23": "4kqhJfpMvpaFvv9BHJ77Jfjh5CRCAao6wrkeu2MRUse4aETrMzJ6hjcR7s43DowYpK57Kj7p8qj1SgcJepSHEQNJ",
  "key24": "5Xe5Cn1sFC5565XTncwKBwemr5knoLfBF7YQs4WYJMc2Wb6AWjtenmGviX4KiUTvtA8ZtVZtzcvjEZM2kY9ZjAtj",
  "key25": "4vb45mpxCBGA24nZeH3M7G4v8XPv9dG246mioeku3PU6wbmLqRfA2Yb7kNMS7LT1eo7fPcwpBFWtU95eTVQqnqAk",
  "key26": "3tmvQZeMzKAyxy9go9htj2AiLj1zwZoZHWLHhYb3oAyGd8H2rr3YGTB2YyepUXLb5hbHJZoK1Tq5NUAGhEs3wHb1",
  "key27": "51jL6Cre4xLHY2W7k8m4SRxZvm5wiA4xNyXsT2nBrgXCFrAH1ctkNgyFkhWp5f6ESEFVistKFPdCZtVYXpjxincN",
  "key28": "55q5X1LW8LH7Le8GGQj7mH3ik7uu6aYjKn5S429bmkGjWUCC1toLuMFK9g9Fv41fM7Ga45noumVVvzXHv1a8GNy5",
  "key29": "2sjesdUjcDtYqWYecMACTc1sc4LDZ4mHfvmdyjiY4Js6ouHX5KTaDk6kWj265ENfJ5RCsHi67v2qQR5Pb3fnifk7",
  "key30": "Sqdk3kphXc61h4qXTGqVwd6sR3vrFyd7hc5t99TP9HMxYR4ci9m8r5H1R6WHXih1JU8HUY6ZFKbBr925icARsC5",
  "key31": "5xjvXsdcgF75kzERm5TjgRh1fAKuuAEYVki23zAyiN9VZaeUNoG1mzZvEvD3vFni4pbMssZ9XPqdRA2qiLSNFNSY",
  "key32": "4LwFYQ91YpCqauTVqvw4gvFixZUUbvpBF2Tb7Hq7JFC9C1ZQUK77hCYDM5BnbNARSqv7jnjtGMEpwaEJtcsL8osv",
  "key33": "5GvzKZP5b5gbA8S45mWuS4ZNBwJxz4TmtcFRiKCJPvoFR7QzpRrxsshb1zBr1t34t9kfju3TPUBQ7q6JwXfDxkqv",
  "key34": "QGwizSmqK6bdrt8sVhLqDPtP9KwB1uAY3PBn23EtKNNshZGkrbDhB4wpznXrBnYEdPn64mAhXkk2Sg1wPNnyYz7",
  "key35": "LerQgZXGbdVUFury6VQHkd5eUYZEwqhSBDfAeyNMUEcfVkD32x5YKmsHDvhRWDzKY2BmAB2yiekzBtgEugQJLpJ",
  "key36": "58wAt9f3bDgP4rLWFhpiM5stXRGpU3UPwRprPKNpUGECqACP27KwQ9VhQiLL9v8FfhpN98H6BCraoARmZkN7EpXX",
  "key37": "9JQMgCB7Fez1UbM6v8sTrL7Y6gGxNZZTWRSQfX8bCn4sw1mkJWkULyk2SVJuj67oFuraTtMRxM5rXMf2PWTSMQU",
  "key38": "2tFApMkAr7su6vDnzvXKhRdegmUKZ7WfbR7L2N6FzLVah1czn14GC8QupBkuGnzT5cvHKYmyqXL6eBxTxhLpBV7k",
  "key39": "4USwiqqgoAx4Cux15i5HFVRT5BkCCFYriZgThEVPWJJ6B7SsksKevo64CXAFbamDKkSv89yPZqUjuTJAzficxJcx",
  "key40": "3oDKQxVutXZjHZSmtQ4nnfav1VpWZukeXiTJezZ3HbAs8KZrCT3w5P5Cum7C47mWCRULvQYofojwtA8ympDmyZPW",
  "key41": "ogev1JcXkLkYdk8om3MUH4WWH1PghGABEXHiWUWJ6t33oqSx12g97quScDHTtnt7Jty5Y5qD28E7K7RdwZw9ABE",
  "key42": "23r7PsGd8zhNdpKNds9jHb3cBAcqAeTNipdzz8fNLthB9AvuZ8yKAPtLz46tKxpBivgT8mcogKe9j9jLYvEeDKYz",
  "key43": "4tmh8pLBwE1hQtBvbEB1kjuzsvNuo9QEfz2TfDvacoJMUJJHwEWUZ2udQ7SX1mod6woaMfkxcRD3MqoP8qY9LmiT",
  "key44": "31YHPuTB45jMsiJyDoqLdqpZNoampFestiWAYvNjLtdmbFDts9Yj5ZyrQymirX7hk1or9hrpy9Ci97wzpdq9LLkV",
  "key45": "3MfBSiG819oZbvGSCXLY7fqgQRrDYVp6cfcdfx2ReYP9QZAXjhWNxBGjVxYmDAF6x688CE8zV65rg48J4T4J5mBo",
  "key46": "5CJbkGJAZhRvMZMXrb6DhBRFph8Wpej3fobFd84jHttED6hL4RGKp7mKemh39Ybzi1g1L9p62xepCN3eR8hi4zsr",
  "key47": "5DP7YiRpYWcwUfNarKHdT82LkDc6MA8mnLw3opbpXtv1985qLHWLUxw6XyhoPiVw5Uk9zekDrab93wRaB3eMXRBk"
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
