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
    "3gLmQCQs5ALuiwThprtgnP61BsjFKAzvEdss2M1BQg7UXmWkcAp9SB27y3Mi9xQ2saisTTuK1oKtyEkF5bXthXzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DcxX8r7UTVvTxZQJb4qUs753PTmnbMjk1Sv7NQCjUbMWrfuVuM1VFCKjhm31ho2KYtm89sz334c9ULKAMyo2yG6",
  "key1": "4cHqfmcjaMQkCwqfzbxGD6RjJEUkX8BdAwNEYpYc9ZQ2mtSyKSXKrV6GuogM2SHDG6m4EQtx5pzVzYsAgmmcDBB9",
  "key2": "5szERXebd3Pcwp2jQWydKtcMw6Eif4eWhUvpsDJwNZrikmPSJ4PVNiLhw24mBFhiBW3TPdCPPMdGTiq2cSVV6iwX",
  "key3": "3hrzwBrT8RkrgNSEF8PqXtR5msfpa5rjePQgGPwEJT6BkJnw6PUEshDoZvX5HM4XGhntFr91gjK96UY9Ggo6RcqZ",
  "key4": "5vv4h4XF1nBtucydCKeaZSJw8GQbsnKcFCu2FTXQFrAiF338QaAV1gLwiq3sdLW2eJx26CRfW1e1rK5cQwikXis2",
  "key5": "22NxLRjqRb2BGd3X18jFkonsDFDexftc5xetr7ubsjQBAVbVhaotaV2UcDPLtwG4x7zEqMvSqaxikNf9FJJPyPCn",
  "key6": "ubto5HGi1zaW15bDPrgrMCf89GjNRMogBssHv4ss4Nfgf68HYmjZozLHu4P6QhFuxL5TapK6wxurWgeA1uTNPLS",
  "key7": "4WPDLtdUFD2uph3MMm1yFqCKX7yXo34vEtwsneZPykeCDDBVBHSjNf4r4ZEBPSvQhNRczU8MdLaC7LsP85RWj1vJ",
  "key8": "2BrPi5Yi4NBwvovdL8Ub7Chzu2kT3eua1VU9HBEELQdJVag6wbpp1vguRB98XpEZJcS2G4xDu1W1CyQfDpD1GQx9",
  "key9": "HCUSnC9d989nK9TadtVNtjAf8tnZxpV66eMdnPc1aW1KSk6UGQL83iYfgSP9JT22exVUgE4r1mnmReYH1wenrGS",
  "key10": "61tLpR2vupLFGYu57k33m4Dzu4kHW4BuieueX6opDqpovBRmNh4Ln9LHYQwv5QPh4nvB17UnANwkRZDxGJ8JQ5Hz",
  "key11": "4g44v1ek1Ua8ZE4qRNkbk7ovK6L45fwPyp7sDkCs7W3rsvxWUkVvve7SEL1Z63FZo9JJ5uBSd6sayx2vXHeZ9hHn",
  "key12": "6UwAbkJDxAVJojUCSD4jrhG6KeoCyxieQSPRS5RS3V7tkHvL4HMxgQAZubNidDeWngz22GqKbURGUJ1tGwTySfM",
  "key13": "4yP7THxbxn9MgXV5ucbm6NotoKH13dZRsUKSkjXrSrhrKmUK4urQE6KS5BDvsYYGLRJcjbaEm1prhkSvoiuaJir1",
  "key14": "RQqXKLYF6GfsQhGor8hhcB7MXpxcxavpuodzvJp2TafHTBj4HN42F8ikrKhHAYyG2RfwbHFtxKFJZJtafbXW3eS",
  "key15": "3snsbGZz3nmKmnMbhA2Y5XVBWUEPi2ZVAdnFWnaXtqgLfCnjAgHWjDT416FWpKnSMntS9hrPkMKAcjLQoVSvziQC",
  "key16": "5KUdoSfhg95TS5VmwiNhCDYuE3MZQT9TFHguqrR2tbX1MXM11ZXhCuAxATj86XRnybw2gsgRw51fgpDue5HEEXqE",
  "key17": "5NS4TsN5f5Qkb37oq1zKN3mKoRGvD5Ga5zkZNJDYRWqPMoHuXPH3orCn7fY6WWqeyAYwdUkQozDueDZs8o4w96zr",
  "key18": "2nNs5SJQxX7Fe1F7oQ79tXSJ9ri64UshGGywH5a6aJ5rpK9wXbTq8wee9ZQnF84ShtNWrNYb66cxvSMddYDnTNpM",
  "key19": "46dXsjdbfjBUNQvRyxVvXCJKj8XacU9UGPH7CikGQY74xaXEELNeyzWfReha5UQodJjVtBQPuVo2YU8U4vY2zVmm",
  "key20": "2Pox5W83BMb5zcMauvBGwmBvNa869vg66uaTERG9nMyfYhibgPH5FdRsApVRituEkp8h4QkyS4NWGsJRqVUXoy5U",
  "key21": "5MyZ3PvVZGRN5aLzRn9Crrcx8t2V2LAkfQjGmyajmRKRha87Mib15zQEijKuGJfoVVoMGjUEF3dvMTcSjQMbqnYw",
  "key22": "58EhTjx8qJVHTv8wa7MnHWNp7jSA2aUzPRVXrL7eEuU9KWTL8AcAjju5fHxmvHdj82h7qmyZX8fPpXXsByK5X89M",
  "key23": "2FrkzrVFi7Lg1cawiwh8KFKBKsLRU8XM39Z1anLKqvMsoC5nNpM14wQtt1r2YELPA2UjYrhnKN9AXNMQMX22Ltnx",
  "key24": "3tHgXEaHof7byNb47xQdk1DJ2vQFdqwgNJQorgTLJmtMnhutpKoqiu3v6mgm9pQNWwngofqxka3zup7dyW5C6syM",
  "key25": "27Y6LR8Lp7hyHZ9YNDgRDnBqeYE3vVrbtrB9RsFhnh7uafiMvESQPWjtLxarXEwoHG29pgwGMyrG7GmgnqyDrJLA",
  "key26": "2j9wmDTrKUSfnq5rrwQtXMXjfsE1ceYnerPavRNAzgZ56m1UV8HS2YQW7U5NwoXGEgQPgintj61wRChQmazBT89H",
  "key27": "5WSygmByGauKizcjS3en3YHnHCFSF9evDu9XJ1AAhmHiZaTWLx8sAYAX3cEWCqUmiZxC8bQU1zf4JhkRKW37t8LD",
  "key28": "2Rgiqeuwk9Upan66zVpePFehUdahM1syo4dF9bX5MAFtWLcxNu5ZW4ZVZLUZ4YaGzTAPwoerswCWNVWkwmxxTr9k",
  "key29": "5sPsQjPva51vZgvVCsE8SzWHk5ECk9Er5Cv5XwC6WR5ZVG8cJ7Df4rKnqoaXmCfBeDSoGUuVnrnLQiMieVwb4DUP",
  "key30": "3rSAha1s3ZchMAxL45HY23vzjjK51p6YsaRV7RFYK4muwkqSjjBsvoWbHMBPNFvAwsvcAKhkqpCVtyHjsZasQAMj"
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
