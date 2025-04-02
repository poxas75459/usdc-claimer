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
    "5d9HdX2o8Raf84Se5yJQ3yfwUzirZF9RhxBLdhFiLbgHpz75tZBZuTfz8tmzL5t3bLepQ4vfbU2yNy44WWP9xTUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KPoKHhhLKyaQdCfa3oc4FvSZMH8EKipMXBPjx22G3j3YnmVznZeWdDzuc2cz3aztYYdfw94Ecqfb6XGVFduynf",
  "key1": "4W74inehpqYdrHunM4VP5D7SSRp6ffmfsj93RksLvDgUHY9GKvBekRUjXs7LAYjubKxPcPtNhCDJP9TvqmjZwm48",
  "key2": "5wgJfQg671oFtSmhPz5d9kzq3sZDSYb3CURZcXGoSkBqnnnoe8mQm9Fuxziu1tbwZjxiV9tDVf5HyJAzuAnYwYbJ",
  "key3": "3UAui61L8TPcELVkfwM8QJGEff8P9NgArQ9SWUDTyJe8i9Wv8PVcVcniKwrbknT2B4pTKUJ5uAeaj4AfCUwyYHmr",
  "key4": "62pUgY8aWhvBvoudQPUALrxAfKsj5vLtnBoRQWuVtHnyQbeqeLmD3sBEGHsRNVRqtGaALJwB7XJ1pSozCwAd7DHb",
  "key5": "4Rg56JyhQMmRcwFba3KUoCUb1DN7ZeJ45bGvECJBpzTgwzz3N7HHcCT9KFKY1wHnBf8HMa4w6iFKwgpzF5zpuqxk",
  "key6": "4y39s4QFrSMdEiQZrBuUwMYBDdZ14yrBvom1DZ4r8EyC3mHnhPBMsQS4wMiTkMw3ymQBGLcm1PHU7Ltqp5Ucr7c8",
  "key7": "5w9StVra5pFVA4AMEMUHFzva9UvfnbPAibdUzjzhmf7o4WUMhCLBT45MeScppnLHAYbsdTapYhSKkGkdJKaJTsVp",
  "key8": "63LGFMNtCbtovBT5zrx4PAP22jSbyYaE4BtGEb6rJfCi3xxxcMwdcBUPZ3Wh3vcG1BK6WftsGNAztPyWdNJEjHpK",
  "key9": "a4RNy9NG92rNA6CyUNyAqA8CpXKftqdVFZP2f4XnL9TTNTjKTbs3yrdxNjacChGwHF7XUG1vSx62eEseqLs4UM2",
  "key10": "wfwywY8MUwbhqrbDdgLrWUMAJmPsnWmKcU3bLoB5nz11tPJtuoct4r4Nq3jposgc1Mt5ErjLVCbsbJs7rktXJCi",
  "key11": "27Hg9hVYAnSjuUQstUHANvCHxvmL96ajDWaCFB7usUempisotV5knxZdWHdggEGZ9GE4VEFScu6wyrAGyVjUhopS",
  "key12": "4yKUQmnFxpapx2h9gp41bTCGJsxyYrDGEnzQrjfFRZFnerkCTYP7AvzAzeXwe6rhNr59Et2X5GQfoXTeYm1ZuVMh",
  "key13": "2Um33Dm8Q5GVPpEATR3wVtuhkCV8G7CdupfRFs18YDuy9T99Db2tgXbZhaXXRrebSUwCt6beXjs2wjxNrnZ4CN5T",
  "key14": "61JFgR2y1cNc7v5ZqmgWuVpDyHA6hVNhhwaJTBwcCdfLjyJXiwUM1ZLEGAM9eGVnidS2Mzzjk9TgfGiF3fMSHW8B",
  "key15": "23Jfj1t7gpoVVVt8srsz7KPmQ5Nhua2TBczUaZR7NfsuEEPxyamGyrpYwih7W1BgU8F6kiP4Z7PRSX1K1YjUWiFM",
  "key16": "4nFZVa5ydsgji6r6XSzCni98pkbxoitD5Pef9TtwTjwDerxyp7djoUPFrojDZXbJ5ajDrH86BEv6FNjogbVtahfL",
  "key17": "2MPynHBSMu6LAPaphdCxLgD5H6QfGaFyFNubM7R1caKVUwU3i6Xuj8nr8xSFCNMRDCXdCUNaSwiuDsmHAeRZuKMX",
  "key18": "4fUySpWnAkP9CsubyTPo6ubuiKJmU4WdAEibQYMCjNCHuo4utAm9dwYjLKUjwgQihgUwi3AAKcooQH9nBAyaDvyv",
  "key19": "1PNoCzbNg6M54HMnQhy51jFX8fZqRxrV9bwNiKatonwAKZQjNogGfiy3zdFreMburuAaB2Nb5dDcf2XMZVzDfuU",
  "key20": "2deFmVeHma1ZqyhPhBUhTfyD9MHxiPcW2AfomLfiPHqXvSyG9LbWCCZBLjYBYmEtEiGvzDnezVpFW4AcFCDZvtK8",
  "key21": "42hrM14d6cPswim54mALDtc76UUK3f1phmsShD2r477GLF693p31Wr998QJcX7d3zaRnsmfsf3GTrWNzKdKKEnwT",
  "key22": "mMdCcsehLVLpFbLVSismQbMGrndgMDRaiQ7gq3k7mRYoSuEX7jeSxLn6fxAP3MYqTecdaz2zwGeD6qz72m7pTfB",
  "key23": "42QDLLSMniXfQTobwsucLePWB1hAYqC4brfH6qbVxqMMQCL8kC2LpXFXzvnMitwM8f6DP8VQnDKw24CvHy1FcjDd",
  "key24": "6jysJ5mpsF3VGhHyiTacX7y1naUir2RVsNWwXfDAER9MzMrTzBr16JF7ZzDKa7DdTPXDq7kNW7JGwsrANGXWTPF",
  "key25": "3uWPFbeSVubPnZGr2hD4Tvj4hobqQzChuUhdisXrcYkbjY7DfAPc97A8TeSxiFen72vjkSAppPRz5Z2cHCuqrBrd",
  "key26": "5dBHNbTmWN7ZkbKZunSVJeHTAmuFVhzsUtyLiDBA11VkrJBEAcMczubYcpzFwn8qmeftKY18KZXqJRTLNc1KDEXL",
  "key27": "3Qsm5FeBNGj8eLKYpXsswAaaGu6zRqmTiubrRMjGnn9F18d62ermZKjKYN18ZxhYJYQ5qcA3qc8p8BcSFyJGXQbJ",
  "key28": "5SHb5ZFTL7eYunZTZgcKXRf3QhCEouXhK75H2rA4xVUaxHeYf6pHneZjfkbqX9aSARVgK891DAN7F8EsB6ETE5mr",
  "key29": "5zECD4w1pGgbyeY5DuRQ8e4HsxDbrhh7BgAEozCgubuKX5s89H3zdERN2SAX4yJ1SX1deSBUmoeZeZ745bjtcWjr",
  "key30": "4x5AsZpQn7FDGmV1mGLhb5CY2wLdbtnN5WD9xkLZrKHSx7qujVS79SabMycWHv1M8GFQf2i3GUXXXxhhwQAdmbUh",
  "key31": "5EV6fv2V6zavRQtsECYnJaBQHg6W8WfFuVFyaCFgERPWd6BNrkwoUn1ywFKbzvmYq5REZrZ8gwaxAjFgDRwtZrEW",
  "key32": "2aksQbdAmpBxcnAeSP2GTHzT5aLFqrUZCRiCiBb2m7Q5t9gD8XgG4eM37MhhnQkgnv839XYA7MHdDHQgDGBg6dsY",
  "key33": "3zmsbosmp4bXhrQjZ3PKJGs2t25opjaBXEYKMhYYwVUto4B6MQsSez8w4PZTHioembzNyCjitaDXEZ2X8zTs1LMb",
  "key34": "4LW6wvvM9EZGrB62K1Xyq6DHu7CjF3S87QHbm3pZMFXSFtCENetUfuiLNrxY1GrLa4gUJ67xn8esPMnJDZS2H5yJ",
  "key35": "q7ghjSjEPN3T3RsaCeDUUBWpHJYrhz7T1qKuPAbL61kaCM5KecKJNx3QdTWy2cs1hD8SxAabm8e5SsDBay7rgmU",
  "key36": "3pjCQue2BCADjtGtVZftx84di1w7hP1BkmyUnYoypwZDYZXLUXDD7JdEJaq7gX5G8KJdbTKfaBnhbx5yUhS2Wvzt",
  "key37": "5wGzn72Lz4QqE73WVMToRUmcFX9KDyuXo85gAR4T3jB2FsjpCTz3ykSd7MzMcwMLJZLUk7CVuLU2MD1P78XwdoDg",
  "key38": "66QUSgr6kxGtKu6WtQ3ePTHw98bUU2LTYWsiFwutHHe4TvbELCCoDgYd9hSh6ds8gY5UUrCRGVy9yNr7uDUT5xJ6",
  "key39": "5VHVyqcWR13k2WVWZMhLiuRMktnzn3Whk14xBG6HMstsBdEQdHEt1zoxFm6qmDiHQyY5p1E8Zy1axws4ixtJsdEU",
  "key40": "25QbfXLaZS2iqrmxNiTVeCScD4gRQp3hu4o5RZPak7ZePs8EUttoAZhjHqu1cHffY7qx9sGqapquyuPvgUAXNC5z",
  "key41": "5riMpU9vCEb5BgbZhYDWq6i3kebiHQAwbvH7v5SoPwzUF28374NP36zfea4iXxRWnQPr6iw9ZvcWBnDL9yjHBETg",
  "key42": "53SfvDaVfnTYdPhaYBYXM75wNGGFgFRnPkyUVdMEVCegpuWaKvR26oxDfeFBadqeQATFiQYNL4QGW95XuvcCGWn9",
  "key43": "5Ao62HpZVsViaBdNJ9XQYPnhLr9MNmQnvgeJTK3nvkHttbB2ySvYdbdxzW1nKQw5GGNp1oxpJ2Fgx1kMV5qjWLrA",
  "key44": "2zi2nJDcXdT4NrXzFbB7pNhKUqnpws788iHbLKmKpwkpXnzQqk5JtzxjxA1vTTm7uc5q3uZQGb6SV6LaEdTKWB77",
  "key45": "2hwMAysZWTRrvKTGydc29xV6Sw36ki2scvdj19bnFX2yrjRki98H3How7WsJf433HYd4gQXKMfTjuqddsyHeLjFN",
  "key46": "7WVA274qrzkwd8ZZSiZs63BFhSthYFrFdN2XmoYCg2eHq81CFVcBd4yQUrfkv2cjTp4yMcMqGnAjKZnJ2om2CY6",
  "key47": "66veHftbgvBfS3XBYSewAHd2BA4P17smdb4KT3ZpBhZYwWAByGGUwAJm8pfeqcdKxYumnisvwm8RMXsmqy6L5raG"
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
