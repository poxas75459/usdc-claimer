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
    "4TsxiMueAAoGyBMYf7H28Luq2LULD7DWA25gKcYfNQizX1a3MTgXGxsBY28qZK9MfJsmtc8J6hnr97Cj2K9S7ZiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veQBBursYRyv8T5wfGbVjCNLkEtnrGGy1g5gqekwwPvNh91Evi4U18cv6LrVNgitSMs8rA9YXZgzFZtXMfKAAPT",
  "key1": "4F3m7rVjgZZmZsRbnYomN5kjwVdk1NQxcuEGJEcR8KwvTBHUReE8fwUbScznfZGiCoHLJzxW3qSXKVWh6MkmGkhZ",
  "key2": "45hP9PR85fawqSvwZYSkHj17LP1brB2fT7b4U9seYDcdoPGywGiYvKoy7UDfxgt7LJDiC3yKSLApcCEjaBQdzYhd",
  "key3": "5VnrM2ZG3fA8XbC1BUDZpTFsbtnuJ45acHUNv4B4zAP5o5GbkhpQ3MKnxRQDkbkCqNicnPSwPbJXLFFu7TkNVri3",
  "key4": "57UoS4yvgknnX1QgbKHfbAhLuT9Ehkhx73oDh8yuiAXhbh5DG9tPWd1DZ2WqNRBaQxJ9VdbLFjAT9bENnv9cvEBo",
  "key5": "4adahHJWvQk5gaELuXP88QtBbW3RLkUNEZdsUaCnohnfokgDzyPrJdexPSqns5fY8F4p7ohYtw6qcr4WbiCz9Ltx",
  "key6": "5GxREnK3EfEvbCs8KYHGbM11BJ7f165XKPCZHEoqpcAb4NExqPjnciK1Vg3sWC8wB5koWkrVrKjpZB31KtrCZEU2",
  "key7": "4AtXKkpj1uFf9irgvHn6Ryb393BwdgG7Qc581cYpkG8Ri8iPQVDxcAjNh8HNnD5QLJgSf2si56iTfZfsnagXrGuQ",
  "key8": "2eB2qnmBdUnwkf9232bPQQaZE42cyw3X8GYusw5KC1fUCrxJqY4j7UVELUG9hVd1j3e5mPke3Ws2euvMTadXxmFC",
  "key9": "5PV5duiuEfNHpEdE7wmNCGq9tDv5nr3fKph9iiHgN38db8nzT3vtRG7GSKFiWAaqrP7aeqFrpteZ4t3JbUgBEz1w",
  "key10": "4hGpF3ux1RYUwira2ttDhmHY8aZzFxCVCzdZQDZ1YhuZ4HPNUBQf8wHD6exUW2sT99fnSn9MdDAbiPCYKpyntdWY",
  "key11": "3dVpVgwfDC9jh5sP7gRPk1yChvq35uwKSJYtYeo3hca5ARpRDkzJzGDFrn8ZtmavD2MbTNkFLZdxvFKb5fDyebS3",
  "key12": "5Hgj9g1fFJxZT4VHh7w7ptbEc7kPXtjctpitnMqVXXZqJAvTN6WGzVXPJCrfAegoNQWES7uN7CQr97Dpf1PbcfAN",
  "key13": "FWHUt4LinSfFquHzxrQx2zr1ds9XwWbeKBQ2M71X14KLYRu2h7RJ2tAXqiTyoXQtEiuDvCWjB3QW69Y2NvRY3pJ",
  "key14": "5VxmUVSoCLYUPUeJAwgajKjfg2yLUoUS5H2NCdiAhttcghH4KLu1eRew3XUSrj2cRMPV2U4kau2nKtgfcHQG1jeE",
  "key15": "MKDyWffD2hDY27GcKbw3rvRVT2gW6n3p9t6TUagRT8X6MXefG8ZMu2jT1ABqnNXpkH7obQCtrgodnovCaNRm3fR",
  "key16": "26BA7j4VjvyUp9fTeFt8AbUnvjJnnTRrCr5xiNqSdCjhUx8NoMjU9Ft1HFFUymmXYyjwd23PTScZmGENyzBJZ3wu",
  "key17": "K2REkCtmRyo1VZwKVDga95LCJptNRii1ftJ4KnD5fzRfa3HaWJKVaSXevhSZAnVPgoNbhER8ygPGRWbQ54sVxAC",
  "key18": "3LzQWUcfjFGpjMrBGXxRVZ2iXgEHmDs2KM5H7eVmdkGvb2TyKF5H2CyLtjxGPyw1pTF3PX7fGbYFeZoMxPxSmaCU",
  "key19": "2hnSG19SqhuXukMjiqeSvTNuUQYTo3eFYKgc35ap31JeVJW1X48iqaJJ7o8wVcpWR6b4Dt2RSedunsPw8Qe9KCcZ",
  "key20": "57gFBQBj4EVfBT1j61ojCCASm6QF8KFJqq65Vv4cHrY2vUD1vCoUM9fosADGr9sMv8r52UCrjw2bnCnmjizWucAg",
  "key21": "2Ej1Ss8qvVBd1rJJye5D8hdHRu4KbQ7U2CkppKruqZiz9B1CRb5VDbZc1ohpLKMCS5FFKJmyWZcJ41fP89Lotet6",
  "key22": "255cbyazwApZ8RTequsZ8Wyn3WygmCm49ppMVf2sn9HxoTCjpGVuGBjJVWzzWRewtbzJPejA6DoKoichBuj7YbjR",
  "key23": "3ZfNYSA8a2BQhvAY7kTGF5g7EHGvxS1Gb3vfT8PVzniDudsBxee5cmFusMA9ArLaAGEtxJ6Bq2BiTMt5XtRW6WNb",
  "key24": "41S3mtfyNYsYixh8mNuScMXQBBuqCbo4u1t9xExKhW2sZn55kZPTz5vayUXQpHXpEdFgPF1EpCWFZ4cpTdGhrA6x",
  "key25": "4hjm2NeHFGQvNcByufhGzXAH1GNozypF6RAjxQ7XzoyMBgqf1gnNQsr2GxoUfdtFxeah8GD1ML5R3HqNcyo8QdB2",
  "key26": "uQoXcJ1ML4vhccgT96X75xp9h4BE3HZp7ajonoYthQBZFJrAu9FuQA8XU1MjWSTd4KnWJPSJRo6QPKXTe9tpUv3",
  "key27": "3hPTXjk5wiQkXouYUbfrNimH7C3hmvHKbUEPrWCs6X1WWgNxRDoAx31vU1qej5jSFky9DUY1aVhn56HRMF6dcmsW",
  "key28": "49pp31Le7cVph6JK8893GXMQToFToWVRFgNJxXT2kHy8Yx5yW73tFREj6rDWFMj7aFvu22aaMXh3iqvE1BNw2aje",
  "key29": "aM3T7TUva6k5CkSxaWSBXXeJD2Y1Au8UCyv2HFkEkZFYpMHGUKYe9ZctJgSNYwnkX3qC5PD6qVYQxfj9gd25MpN",
  "key30": "2KJWoMAyFTPhTQ6NE3b7C1spReFT3EP19qpS3WGknMc9cBn41xjdjyfvsBY3WwULoVvnx5pGEpr51YpoH1m5LMCt",
  "key31": "4uguyvZU2ozmims5VQMBMaDoDsvacuu9Px24WqzqYL2kYxwQX3qJxtXhKzWH45ugh1PLF7zYDqo8q7fTcr9Uk93N",
  "key32": "am8bJwwrPBbH7cMCH72dVNRd4vunjnRW19n5ReRPLqCeUfZJLFBcqf4dHLyP9xqhPw3xSrRMimpSRV6shvci2iG",
  "key33": "62HCY9w1sL9wmKgPZvnhnL8MS7kcbekrDy5MuRacKAHH19MyHZ6GcUt7y6z9PPukkTVpzAcMUFdLJmrUncJymvf1",
  "key34": "35MeBLEyUVnXL4m2nfycdSQBA4kVYmktHmwSCMPs7RtovP4SkJuFke7YiH9vFm32QoT64W5HYsyvnutHNhLeHauP",
  "key35": "39QjeJgSsPWpqkYShraiTYA29XQRKgsFh12Upqc8wKXxuBi9tXaAzoBwY2UfWo2yMDrxEKD5LPKWbfynoT1Vt2Xp",
  "key36": "Ekt87dMs8quJjh9CjFAe65zqTZDJqCakVbvT7czKZNz2UFjszG4p72WXBNEXuKR4dyx1xyQqBBSAZUFpAhngH6K",
  "key37": "3hWGUAgmj8TtC8V3RSfVbUvbWbAg8xPHuV1fWPeRzXCB8kjW8mdizT5dhipLMtC1yYJY6E8rjNTvVg8qaEUdmTkW",
  "key38": "4WwGRH22NJ8eJpLACcNc4DtFhWeHNhQxF6aCNd5MS2KMP7FUTZfAXGYDMibLbBBtxwLMcLqERji7dowEJgSrU1Ed",
  "key39": "47i32dPixXsuhj4dYQmAtjtAwE2gj1zKGR1K9tkc3TfyW8JjtLfvMb2Mvh35HtcGGcbZkp7wLveLtR2tbDbqjuqu"
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
