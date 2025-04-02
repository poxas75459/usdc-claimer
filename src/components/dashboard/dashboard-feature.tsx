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
    "FoKFQ5KUEyRdwEH97nvVgG4fKQePy1VmmyE7rs8Juhe9sHb4zYsbSS6YxHUZAqFfxBTeQiCot4KrB7Q3fJyfrPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SN22t4SNRcwSBiBSGVPg1dT2DFDDtr5DMKQFM3BXjVhx8HbNkR8TWc3iDVfVZayW1PHFsskDz764dqXZQY8ngiQ",
  "key1": "5Y6mCVk4CKWqXeokMjwn3srS62Phsimkf55yWJ63aLQdVWQP1PYbmKc1HpftYQ2jWsV38REqZYs9GpnzMhHB3sqp",
  "key2": "5eDrEn8VBZ8saYMcq9YXXbeZqy71C3rJxXqza22hbDMb9WoKKp9TwPbjwWy8e3sJMEAQZ1ynroHBv3yEckYhsRDK",
  "key3": "J9gSk5aC1UA86q5XpeLN4ckMQa7jv2ZapjPsVwdY1SdYzUfzCrhfXEg9WhJtTq7AjWFn7oNiHTEdeoTXjw1iV2U",
  "key4": "3aeSrowCivhCK2ufen9optXAQjr5wVmVaWdgSqDxtGRBRLnsoWvfesmVZdHfiuojYGafXZpExtUk8wg1vrmUXqQL",
  "key5": "4bvuza7xqisVeXBSRC1UP4cLFPjChhxBqSCiNZvH5JV8yDPktCVo76XkKEVYbwaoCxHbzwve6riHyMvHXz4RSrNm",
  "key6": "6deDKq6cfgW8rFBmSfxHNBj7GfnDKoLL5T7nhM3NRUTV6TTysLHS99dVhMmgWisp82bHthr9DEcM9aStep4qm2V",
  "key7": "34sYxWohaPRBbLgazTdh6yy3qw5mijZuMfmgCvb8A1nJN7wULibafghykjDmNbZB2gTidN2JaDENdWek4td862CN",
  "key8": "66vY7yQatk3qX88Qctw6S94RELbeCoVHDQi1PJMjZKR4qVy5u4VDhq3faYxHxMX2CnefcTthDSEKvdAEtHBxMuKT",
  "key9": "5SwRyWVUY5HQLVGuMWCyDEFPFGtq8nKEd1kqy3VLhrKCNvBm3V8V7FFPneR9vvRDSRBb6PEHWSumXTBuXoPdwPB6",
  "key10": "2e7wG49Y78bU8BEMxUBbZaQTEHhmfgDZo5EWnwscqKnvBNcwwVuaPmpiunw1reEZ4SE2uq6b1HKKWq7VJLmCizSh",
  "key11": "3kYCvjwmZPS3mLS5QK9RFwhodkpdzEfCnAPWj2UBaaYpmR43NyrRPumqm3Ttg2aVUoKC3K3ZhwDWytLuXtsj4WiK",
  "key12": "2Pv9cDTVAPrewpxREoKpCv3eXp4zXhZRyoqv6AM9fiwrkCmFypqTBg2PW1Vknu88joMvGFfoAZwo3Z5jGkmsrTAb",
  "key13": "4LS8hQ4zkuDiqFn4g1rDnimj7xiqqvGuajenm2QUNwWGvJiGBiWK3CYx2ovfcbeUEkd7bSufcqZrjFbpMncVk9Ad",
  "key14": "3h56QLaDsPCzSQwJGhyVFnVMeyMyaCrxCLiwP46Eq3abs4dQaA4zMcQM3dpCQcVvMtT8QfrBSC9Gk6AYD2A5HTyC",
  "key15": "pxtN99L43bVWHsG51CdgPLf79TKu7qxcWunFKgqabc2KYcTQPyp1NvRjvEpPe7XK4SFXrfHc2t5jLr5JMBaYdVk",
  "key16": "3FptumHxfzi2gjzLjG5jNV1u8x6XpyR5BaimjyM6LpUCUKcGsT74TY55TrdAyNS79XJ8r1zSfN1kMh2uzQpYPjKa",
  "key17": "UfT3B2aAk1fbeVicQ2nJmF9i3SQdUFwTgxNqKKFBhzeFUuPkRwfbPRtBQgnjXbf9Pzn7ZoTVyYvqPHBYKNXYHrw",
  "key18": "FrSXfuEPRZWfrWBNXb68Hwko36CZcSuGdqgmxK7XeQsXLRmPkGDNs6EaPhkwtLhJ6A89JijA9mbWRbBzY578gaR",
  "key19": "43bV1i9ATvy1gix2qQw1dE3veEaTXJajtgsGh9emoEEPfQh8MdF5e8EKW4J9ZwnqkEevpUusRhhZbXjo8AWc329j",
  "key20": "3M41a43U9XDAiyNQZvR9q8Yw4MXS5axwqGhSMoJzQ3LR2d74QKJ85Sv9dhXgzwX3iDgCtuoEJBPS52LfpGQ6azuz",
  "key21": "4BhRgxmr7kFLePVPQhmJb99hiE8H3mt1mSaozdfQTer55MGvdrRbVDqBrLoXVSfrbixmot8ZD2z9DFydmWsAdNgH",
  "key22": "5jvLN8oqCNA2LMNtytV63t4Z1GVkMfJ5TXxZWrZC1tWJrGRQ7AjvEzc7M3vDaYfw9R4K8RA8R2shpuW2gYRUkApU",
  "key23": "3VVc79SdLHMVtpzLzs3mxbnt2YoC9AcKDq9GHm9ysp91hx9dgAynGzyfc4tRCksdSCCQB6UyaS3EFHfsdgWq7Z7E",
  "key24": "gaXXCcPXCrFJ4pAM7vC2EP48txpik8npdQ6rfRhqutX2qXAuBurWgDNKYoEVskaummK7UaBPPU6Bq7HpM5CRjvQ",
  "key25": "j3irYr4xctUwemQGD3Fi6BptTD41Y63vcRnRw4vgLMXVQ7G7UX68degnVvsF7Vvhq5L55hqNhH6FvJ73o4jhQC2",
  "key26": "4NenyKRFvMxFEPrqGFaiHvfBaHLmDcX948q2YVKCrmRRLQXey8yfBDYiud3k78UhRZiiYqFDNhLmFjMLkLmzzPzr",
  "key27": "5B8NehqXTFxDZDbh5Sd6rHsLpbndKuqxvPjiPU8pSHvZKGdXq2UACCDRmimToxpFtrpv6r8WirctiEedeKgeLivs",
  "key28": "4JMt8XKeKA5c2CzHWqhNUZhj6BD34BBhQPeGhrWyA9xybWJDxvySYh9EPBpcnFkaUAdCXEFqV5uoAP7p4ZW5DX3p"
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
