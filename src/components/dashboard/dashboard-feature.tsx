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
    "4mhajomX9ULHGhnepPtZax6d9J71tLR2nY216a3HHLN2htzTtgJdv9pabCDVWhfhURGu7gZBmkziHtYZ74Ks3HZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vx8fMsPREYZ63YNeFjjGV8i4p6tkhurskAeYav2Sr6vtSyCudG9tn6vQrZ23uZqFbzjCzTUwvtzAQqpFj1cA7eK",
  "key1": "5v1ZFmsaGUBDTQ128vMGn4Z2FyedMtwV1RNWd6n7kc1JGCPUH6fwBWVU3Sej5aEmckM7LNbeUPCfyTyvY1r1E4S4",
  "key2": "63Wzkafk6dvnxyYkWGk4nBGqadrVE4AcdEdGj6EtM948ddJXkw9Mw6WGeouoWR56APzPSzfXnZkY81YVUzWn3jaB",
  "key3": "2aHibW1qpubtavXEULB3pXPXB8TWzuAStDYyNCMwG8g4ZVHvhFkBGwyftvod2Hioi8SMpjeTZYmiVDLLjknoBRx8",
  "key4": "3JiqHQ4Kfs4kQhgtNHhb2WHmgqMovwkCFNMNWXkAnK7fux58GFvE1yKfrVUpi7SPPxLJaWTbRMxFTZ7XhhhVew3s",
  "key5": "xuyucmTjWfVMPoTcSG858GLpHkT6VyB1HvuPBzbwTWaozvMdNewM2QxLkkVF39zVXtHUPCTkPAm1Ck8PvYFsqSe",
  "key6": "17Zh77ZHdVmmHRSMtjAtRjRCdvVvEKiXXhfuXnjj8Hd8oPviyw5w4ZtdwWroc1MxTMhoBhZAwgfY24aJAhQt27o",
  "key7": "2HQquuqzSDndnkqEbQgZzFFFyntKghBiYsnbz5rcHgTi4DTbBBTpmJ34Gw3ZErWC73mBiokwtr1QM2auDFccHRAa",
  "key8": "4iewUDuhsAtxY3eEsbxfXKSpMpzMwey1Q3FkegREdtTDMMntNSL8zh8VySEDujgPXWXERZczrWt3yBsR7S6iXKaU",
  "key9": "5RynfLitA1k9aDukpn9qmmKt31EhXeo56fhBhfCHjfSgeuSJqQbdBchxze79Z3sDJMFLWwhy6WmZFYgfW5Va8bX1",
  "key10": "2M2msPFw3crTEUMc25DeS8MCMDLUUfh1YcUJUioy33xAJrmdn5JJrLKe7bkPVipaV8xXDeb6Y4nsJ4bjysm9a8mY",
  "key11": "5HvLTNbjcFnHqXD2dVYAWShuUfJbjy2RU4TxaoATWa3B7UHATveXjYvR7yxQUhDw55x1VhoBfz8LzBCzzh91zx2Z",
  "key12": "2CgBnUo5Fbb9FfSc5Ag8X2AS4mFsDNwyGkJtUdteXjY72e6QiE2oQ3Hzg18SNLTNjWYAr2fkgeyMGAg1sovgVksZ",
  "key13": "5FgfENWU9v5bcNjUCbTtXgjSXseXHCFijeqL1B9ijn4KJNYvMfkmrwuUF4Xo67Jyd1UkHx1PrsNiaSrFmxsjXTxa",
  "key14": "y2VUJ12y8NWGzEKthAwqWRPbFMCMCAicWMtm6xeyKyeG3d6WZGURUzz9EXQ5n7ig3NkwVxhXmdUbzWZE6Py25VE",
  "key15": "3QUkb2V4LZ7NQoePg3SuDicUxmhP1KDokUxVUcegJuDQDsQtNzvaXmNwT2pGgUoB3PxAxyUx5nkpdkUnSnGvTWQX",
  "key16": "27KGDvqEKFvNhqtMPvramqpcCf9jUDxsoCHE4wkdhTLaMjhPXxC3YujBNN4xpLxSt8LtQBkadvD6TCyTWcUFFXdh",
  "key17": "5Z4a1NRk4KHnGh7XZgqSGK4Ca1RfJKvuWHoqwvCg2YR3YeZ9pDP6LKLBMqT4AnCDGDY1vvJ2TYBVTUpgr4dgikyh",
  "key18": "5saqVBFoZFykTBFeuyQm3vdh7rL5ZkQNNBpVJ1T783sSFYLVsMx4kc85YSm99Dg2KnjpUE4it3WnLtpCRavfeqsr",
  "key19": "2JSqGkgt1Upg8yuEKPhGCRTF3KmgbHaid8rRkT6bRsGDYFuZZEUShAX7qiv2xrArWA1RMGAnsVAtf8a4vkhPukV8",
  "key20": "3mZToHkyfYBDLvkSFtJFMsBsfKSaHzjHYKzHe9doYcgTSCBC2jekSBxgE5xMfFFjGoXjNk5FwJU7pAusJtJvRJST",
  "key21": "4BS8qU83qmXnQH7nMEE16SP1EAQ7bhEmYwPiURGPePc5fCqwdwQfQGsbXeB8tXrBVFHGBQCp1ECeEuRWNmoKXx6a",
  "key22": "2ebtizzCBpB3vC9SCTrRcUxt1nzmDxDA2APvfWTYi2Rns6PSQWAf5xd6qfNNKp1sGPJvHFASYVnaoadtm2ZYKGcM",
  "key23": "Db8GH9zcbRkgAgFEFFFZ7t4Mgqt1LLR3aJ8jqguztHnyyrUjmgPE68H4VB4rq4peJYbwsHYwQaN4SwvuSnUqn4T",
  "key24": "3a8HQDt7WruT7G1abuDCps5C66hKHBVfCjLZQ1DNAqnAdspKFrWTmXNYAU6niYzgQpcw9qQiFyB4BhaBa11MToYJ",
  "key25": "47JCMtmMJNWCEHvqU42XoLb8d7fyehB7hiWGvDHnitkzxJLKZBuLV8M4Apxo9o2dQSiTojnkBN7wVqa1X4DBQHz5",
  "key26": "2hDNKQLo3f8RKcPxaCoDKEytEdQHA3gwcRHQYWbUabikERyCuLZhp4WYhdPZp24mW7XMSt5wZr8R4fw65KhdYSjS",
  "key27": "4eXYdLcUgR8cG4ERhUrXiT1FTrARx5K69nrNmJGaezVZwCCW3uoq2L2ir7f7EaVRTXiVsyELhN35Gu8YQL6q3iSr",
  "key28": "4E7Rn1NpBZLTEtVmmdEwvoPkYEEBEYCGxq23QzXyHSu79JbmCerRXz2DB5wvjvxNuS1aPqbqjvnZa2FgjWbCftNP",
  "key29": "46PuqbsL4hkG3nG5YMek7X9kGgAQS8EH5EQ1oAoXTEamDzfSHMXEzwqSxLFCge8Hbtd2uGKJymje8ib3XKVkPxft",
  "key30": "2HYFE38GxYeF9YXAs9J5rYMWcx3q2wDmo6SNE4zifeGnEvf1LhE7UZ257epYRpe9rYeC1aN18X6NzYFLE11E5E4x",
  "key31": "4cQt9guiiibTVHUuuC1ZRb7JmRVEs45UnQoLKhKYoU44qiupM3ezAjDnpaLRNpmqjNpfkmmz5jRS6SCLc7RFEsz1"
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
