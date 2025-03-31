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
    "2CkWrpd9bwdo7nWN3Y2brTGZ3VosURi7dqb1Pfc7Typ1orc8dRWefgNZPxTRrGNwF8TjFfcALzYFpwk5B3j1794A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7c6bU6HVmKGRn8QQHL5kWjGES8AhwcGf2YUF2sGN2uSEKd1p9VFak9uR4WiDagHtTn6x6H1rJB8RY8wBw4fjxo",
  "key1": "oeE4GqfGCKFF2gpzdc9fwryDikbiR5FdyNJUxDrz5ud3hP2CCZDhHbvmbgq2FDQe1UKKazUxPvKLHFZ4ZyHMmfs",
  "key2": "FsLGmokw4v8gGFSJzEu6X3prCnVeh6irac4iqPCqr8x48SJD2H9uZyvZtcCMs8Cu6q8YrYZ7BZTXKNWXEyxA5bm",
  "key3": "4hw7SKzxWYo4VN1ixkDcmguMqGyRfcCvC4iMtM2mhp2g825Tn4332181K2a7mM57j8bcCZBTnEW2rqCkPJ3KUXTf",
  "key4": "kV4KbuzKXoVDmyHPmF66HCDrh4UPwuCcE526k8PvrcfdW93Rz322vqcH34Ldnhs4FB5c9cc2hvnKZp2CSKtC1C4",
  "key5": "3Htg9DZtyXDqqxbPSqDbUHJMABMwuzdSFErTxcMYnWDNs2GRUPNTE6nh86JSWe3R7K7tP87QQ8nxMJ1TCi9zPUWk",
  "key6": "3NbPmCKypZCvtPTer1xamk9uAwoi25ykfoupumFC18RV6N2N9XGYmttubXERvTGVK8WRF81eGZYSiT9NpMzrPGiM",
  "key7": "4Gq7KexMVvjLu3Qazwb25QT7XoGzdPJyjPiVuCaxG6Qbok6uccgcYkYHcTM4CpmB5cyxxHkiuRUPwg5UUdn1AV5T",
  "key8": "4q94DvAtXmpNubbETgyqNHiVWeaUcMT8Mu5Cn2HoiBQz9nxbjkxzwYKqtmZATs9td13io9B7KU3YqhSup77znLVF",
  "key9": "3974Y3DnKbSq9xkfFiom8ujT8dUu3XR2aGWN7muaBURNCQ1BVDudnBDJ3xNRmcD6THpdFDr59sbZXFDjB33rvqdj",
  "key10": "8h26G8sshLkEt3J18mugJJ89CVYRz6FyJNT4cSSTm5dB8TC1gd8iTaGVE91n6MzdN3ibGpVH17dDX8pYwqrpBP4",
  "key11": "5M6orKijB3hawkF7YdtzPVj2XCk1KvB54cxC4HXRV9B2UgxpfosLidJpWkUzpvLwy9h5qBaD57PZmbP9b7gr7mA3",
  "key12": "43aYtcXT5ytZQgXw2Vk4zBm1PZZZWJzzxUfvZnLGNyoyKtHhNRuXfXJXjgGJM7qRZ3JubUFynmSkiHnVV9bZMz9X",
  "key13": "4ZYf3TFi1UvEVegq8KNw8VX156K8ErhmfftHhRG54b17E75SoGW6UZZK7pcNmZnJEYaTkuNh5UYVyj21th6j47Py",
  "key14": "2gmxcrnR2FrbXB68xSiP1vYQ1Xy4VwQ7igmN9TVE86Ds1gAJegGpzAv77d6rm9NmQr8a9MjSCph4cn3BkhozLUgw",
  "key15": "5sMT8PmWmA2DbbvvMPbSB7drxRHuKoYBP98SCDcWGReE2u65UWjj8UN9cXu4vSCdB142AdQ5FMZ2LWFTF38SJBr6",
  "key16": "4XC6SX7ZkoXUFx3Rqx3tgiNgRwqm6fCsyRgWwkzuGpu3k3Sso8izUgHK6skDKSMogCtWFAbR9PKoHgdXSL9RLvxM",
  "key17": "3tpRyc3zQHGJupjw2dC3Bt97BMK9oCobCmiVFQfqyhwfmJDhmuDM9t3ZmDuaXPAFfWQJQdYE8Bsj2enj7UfAUQGo",
  "key18": "5xENnQ1gXjYZNiZyRzb5bAFkoEjjUVzZM8g6qdcRxmPBJpyJ2X5WRuUVPjymZTxgPgi3MD6FNp4GiYuEazLGpEP6",
  "key19": "3iSo2boA2dZog1mEXQSDcsfALfknmdEs6FmEeKvM2osb7rYrNGWQPuMcsibFqXXcGLU9q2P9HD82vLs2odWFwXof",
  "key20": "3RmeD3yaetavTpMqyL1TZ2RjxgavGnJG7Rd58s3qkTJVtk8CVDGNUBi87Y4Euhqg32aHEDAdkSc7BYAmGCaeW22j",
  "key21": "2mV3Q9L4MgufeYLHjtiMD99kXTDywvFCU1CYtiNpcoPczZXZcebBSEHTJBRS1NSQywEY1pG1e8Jq7qMkPozJzjqy",
  "key22": "2V1JWVECBRskByetHFeDqmLtG8mDcqYxakgqFFGZPLdsi7KfFrtj1qHJKvFoT6qRLX8Zigu6m8DWmdfQ7wiPoSEP",
  "key23": "SqYUxMwQqvNdvV2tzFp54vmtbG6puaRozQFppTAoSKnQf3jbTZ5Ajmn8QvF4kAHhiPmr8SJGY1t41Ffd3Daew3E",
  "key24": "6vhSD3rkkP441f3UbDfBUHXgwxa6DByz9Nz8Naci6prkeSNuQnRuSGgXwuEKQgcJsVhi9YQ7fjEdMyKzXQazjCK",
  "key25": "3SYsocuawLJ8Kr6mda871jctskmWJqMeGSuYa1oYTxKv54XtEHvYeswUPzfqedDx7dq3Jr7DRGFLw1tS4etWSB13",
  "key26": "5XVLNWQpX4668C9wMTj43nMRR78Y1KxSWgie3hxLcMxWdYMvPMXgqSSyhq1zYsiNDc2yAenv54yjjC9GPXjPncER",
  "key27": "2M69naCqmYzc4RbcucvwcRP26TeiiidQ1T2dFXkcX4ZK4MB1jBqY3rCp4GcuRdvhfNTNr1gRKLb1hbDffd1Sz8JR",
  "key28": "5M5HPsk2XZQ5jSJsN8v4wVLDL1YQcdm6563sfj2zP9616io8QnZhuNJcaMqYuNkiofqrn3yzRhQCNfycn41tUpbZ",
  "key29": "5RmY33JZcGJr4MAcYhJsmu5QmNjZHBjb4kH419ucQW5kr2VnhA7ipoVUMeou2WL6jqJbZuQVyrHSjbB6b8LWnym5",
  "key30": "2jHcuohT3guFyzRh5t3dzFg9hHVU67t3Cg71vv4y3x9WxptqdF7BB6U8xSFyXh3JWX95vdjWkzr2HHAVJ8SYqBxe",
  "key31": "3u4nF6KHvaSXBEbXSDf2EvFNkMHQDUrPRUML1KahneWnnm2FAUo4Cp8rwruA9vmuZCJfGN5Cpwr8cF1Z9T2Kh7rE",
  "key32": "TeWQAVCKHgdgmRKN9VWCGfAgs527jAg5LcLwFf7zRZhezymzBCbigmHjYp9wbvPSBZqj1h7qcCymBEajxvXw313",
  "key33": "49sR7PEtu7dCmoSKpEobTinXpuDna91XuNzY5kSCsF1uqpkx33UdBRw5Ha2fUgMKPDrnW7ssc85ChDDU9kayhSTb",
  "key34": "3txSR4rGMYKa1kCoWcGgBUw2QNpzAdD4FpikGuWNMHSCAc8RWJsxvAX1qKK5J2L4u2PdfZTpHehfL44x9pZNp2U6",
  "key35": "5ypexygkWD3v4TtEQaSd7gy6SpEnSQADpcC5pXECBciPPREi2ZEhnbqfUMR264hHNPcnHdN6of46igVUGCEgGLDG",
  "key36": "4bxVexo3mB3R1C8ogn7YybtZ2h5PPaf8qnokuTspP73AXwQkxEQe7JooUkiCRB3LXydCdaEqbnsuPhF2wqEb9txC",
  "key37": "2MqUw3yaqvqenEToceSWT9FfLPXuVJTgAygBGcdpJc5r38i7DXbmqNw41vb7LM4mo7Twr92DCchiRtEJgsT59Vw7",
  "key38": "3aGjLjzBEmCkCN2XxykoGRfqKj72EtGUQLitLCj8MdjGXYD6E5ZD3KstqVi1gMHTeVfTEZynbwxgnbCH4pPJuRST",
  "key39": "5TZAZPHJDQUju27qWBZqwmemxPPscNwLisyP2ora71DC8zudm7oxqQVhZUEJxhXssi2ULYW2yA4KoKajy6ehty9k",
  "key40": "4dvkJQddfJ3qJZhj2Rku9ThLJgZYCwKMevZSNjJi1Akd4mq6HFvEyTmEmK6knCtZueWyf1kusTosNP3UXGhbHAcy",
  "key41": "3F3xbMuP95icR9euePfz6JXV9VfRkZqAywXYHFbHxtcuq33PjVDUWx4WY4iT6oTszjbtQvENxxwbDJkr3emsRydi"
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
