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
    "3NwXJ9r7cnxjbkpCSUin2H7XTsucE7KSjRrXhYfndNxGFwWAhVAWMNs7ByK1Xb2qG6J6NxStYr9RBBwHpKpJVRv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oCHMAENqQjG9t3avL2MH1SVYWDh5WRmM1mSrg1b8s5kCYsXTakbsHSrHCL6FNKCafCdnn4UKu1X9HzWvfJMQuP",
  "key1": "483baxKu2osV24qrZzi1fZo89WyHbvJzNEEQd1jmEy61SZJpgowW8YSNC6CjyXTq2bof5DkmFj6dchvmEivaWgF2",
  "key2": "5nFxWVFo2AxhCrgtxuu7vRsj7t64jkVF2gftfeMJK7H6KMbLAeD2L4VGmnmPzx1m3Vo9bYhCJyMZKz2XWFvbqgy4",
  "key3": "3nR7KVKS4rjX11KbYem9ED4HCgHLbPpvRus2RBExtNBuUr54qAYVmHzMqE4FFBkJBfQXH9qtE1d9JAWdKJA48DnW",
  "key4": "25gb7GubsajfeH5WVQRFcCrW2ugPQSjbbPDfswkpmvXnYQDuwEnCbvxSRrgvyrC2GmCxC8vaPy5edESSE4L1TizN",
  "key5": "3fKobSg7aiy6VC1KUKYjHdXkkeL6rBkSpzszUgK8sMdEUds5j7JxJ1vGXX4mkRFqTYisjp4mJreKgeC9j6SM167o",
  "key6": "2NFZS5hngBq75pWM45Vqf6tDAJ1rGgR7dyCZqZZww7Hz26vj9KYhs1TDwYWSJPeTKaLTsgCvFDjbt7W5MoofWGxv",
  "key7": "33yy53W986cg7yu1jT1ZLkmzVSBgokj6xGRLvrn3TSRfkefadXGk3KAR5RYomSJaBjCpSmLqDW3dooUaBPQ7NEUR",
  "key8": "JJRrzd5KJ3yqqFe2V5eJcfcoX9rVcjkqxFzJGdFgyhbCnr6fjo7HqkHRuVTB5MAC1xCniCwXsKGMFbxwxV3FNeU",
  "key9": "5ok7fFPYuWSuQ5ruXfxWzp78wcAFEAYDG67bvmp4q2NNCxAdTv8TQsSoS8x7jRevFBRXME7cg6eMjqbAkjR6kCfr",
  "key10": "jdC1KfYuF7GRwNeiS1yuT1JgBT8ndEgTrUpyU6UDqqiswSJcc1aYmNQ2nHVF6D48pTx7VBns4cThKMfK9tq3H5d",
  "key11": "5YzmJkcvSo5PqincxhQ3EEcMpRZjhWyTEM413xm3YmQ1LJyJnpovPs4fczQ8NwNxVHoo4S7z8J1WwXkeYmbqtVoi",
  "key12": "3nd7hNAAcqaEPy4GeECH6zbx65oaLYCDL9msrDTW8s4sTZJv6TAFBTrwgQgFsSv2piLKuhDMT4HYoqzbNJW3DV7b",
  "key13": "5AdLrnohAXp9EJmBLPuB9aeWaoLd9SKEqQb2wN3HjCoPWvcQcAAbXaQZZ8eiVY6M1SKrsmyL12HLhfwCYWGSB1wW",
  "key14": "8n9CQWjXTtrBjNyKwCZnx7YobqMfh7qfMS5E2XVWXZSpRBCwvTY7cnYcxhu8e9VqRkitqSPqamwMabffLd63GYE",
  "key15": "58PBuR78a8vAitStfBC5thSki5Liou7tj8qVsAqeeRiTiAQ9if7KrVvxGCeQd3mktSWrSFiqkrQTfMUib6jkyE6R",
  "key16": "4ctNNJzJ1hYWHPDFe1wT43FVRTrHmXMg7CSLSptdrs8YUbo2DXmE8Jr1moSngdBURkHkWEqXxsV43G2eG4gkdBCA",
  "key17": "e7qJoPcrzHd347gj14HncTVFzGees9HLangvw4K2a1ow3FrK4iYEA1X1oeitNHPfMdPQGT2MYprDK1X7ne1Ka5v",
  "key18": "3z9RTe4vekm2uZ7XT8UynArXhY6qcFpquzUGQcecUS2HoGKETuH36MtURafsMy6zg5pm2VB9DDswVBeoWHnvV13Q",
  "key19": "2uGbRC5mNkabTH6tqWRPtwGVVKj1KW573brRoVR5MY2EG2YMq8W7mzRJe9Bcv3k5Bp4Mo6JfSSFovR31m7AaR5qu",
  "key20": "49RF4cEgWFTWn7NgeUHvyKs5r2U9brdxz9s7F7fyfrM5gk8h5S8CsQDzsesxjM2oN9AG2WUvocHcAZKur3gB294k",
  "key21": "3TZVarbfUwHZ1qCozeH33mwnCUSEcVBUDhqdNfMCsNT89YP65HXeUeVk3aZRVqzBa4WwxjwD8BGanaqxhH42Gmnn",
  "key22": "21cNT8azKm2iefsCWJvYUPg3hUCHcnMNCYLRzZgjAWPXC7fthpjycVCKcLsPAmdGnftwWR8LxqBUAPwj4Vdnssya",
  "key23": "51CU3ssmP5k2PmqrXUYSaV3Eoujc1uh7FggPp1We8sbmGprX3wpANNQjMFJVSqgs2MaCgRZeSNv1TJVdgNeneC2y",
  "key24": "5auMEQ6gDFtRY4wcWbubUgRgHzRyH1NtgSRagvnbBmwSQN7MPAtpGcqkHTRUWMWHTueB6cuDtswGBvNY8jgqPbQ8",
  "key25": "5KX8qrxkzh3Z1rGhEJuycdjDdPesRWYec1vRacoTU4PwuJkrXZp5cxDZ172EYSjZ8pQx4SsG6mvgLiaqQuHxw1W3",
  "key26": "wXTx9NCspZJe3H2B7mE6rsyc3yi3c2AfHzjT7FH8B8AR61KCH9q9X6uHHkhqdTTEMyKUdPb63818xsXEM72kNrh",
  "key27": "31W6BvMeyGGrp6JWrK3Zhw9kzUw43QuJoGx5sm6TbEwcRmtBeXrHSxBPjrjDFm4kRJjEUvXaRHwzoqwQk7NviKQT",
  "key28": "2TCDygX8UezhprQMgRwRQd8EeGXKiGqpUFawhgFMfq28L1NFFrxYt7ndspNNGPBn68NRkrv3W5hYKXMYVfwmdeqG",
  "key29": "21M9uBv8UB8sVetj3aSN6zH5EcEAUWQEppjYuweARET4ejHjjkPkaD3RRh44bVA2Jhz45nod8JKBV2QTPSSTPyda",
  "key30": "3oh2djrc2UsbHdASwc8cyZqpkqgCUZVr7KnrqJKrPXWb5himXBjTBvCTyXMdJ4p3f7k2JHoRZTFF6Vtm21KaZ19d",
  "key31": "5wNtrjr43V13oUKFAWeg6jAj91mCBNpeP78dV6x7JmwPC3q4n61NLLZJfxK4Ft5nQ3Fatd7AqomXERtC8efaAa84",
  "key32": "5PkXBj8qA7hF2k2dg3wAwvUQ6F4BvvpSyVZtHnG4uzomft1xE4mbMHCGpJmSmapZwiRyZvmTM3NDEcc6NioCMwhu",
  "key33": "3utHrYdnm31DoypojJrEbAJC3T2RFGDDkpe65iEgC7DyvhPk8vpB5DehbcmNkqyrc4Pbp9uD2RA61BoBrHFTfRCG",
  "key34": "zvHBS9tQJVQQbfMxjc4iPcP2nHx3osoo4JXmgMiLAHpnDmqV6DeH7zWzWVz37yiw7b7jePGvvebpccP11QK3ien",
  "key35": "5q31h513gjYPUhnVBzirza2b1TDVyknJTAYbg18fScLiqXoPYoM4xfuGndYSCSwUT4dMZCbNE2n1TWgfR7CyuRY9",
  "key36": "frWJM8eTozMbo3pU3yCW8NnwTCy1UWEissGa4UvPmMhVsHq8w7sL52Ep4LwqTtKPX9R9UjSonCecLu2aAMey1dE",
  "key37": "2oqRkrV7J3LiESYSzb3qLZYgAmzKMzxS5SwUScrg7MJGBToD4dBkLbjKCptFFLT5GyfRyXoGvPPVRcWVBWZNVc13",
  "key38": "5zGwyndKf4E9vuJ7N6Xc2Ni95JnTLEgCjQiinaHJiBVPAMpfDuowY64yx96FdqYMAEw9JUATPYNEHNFa4npd4DcJ",
  "key39": "CfjFYMLTP5GX4pikFauQYR7AhMjc9E2cqCJDzsfm1kiZUFr65K8fw7dgSSQsnyz7n54Bmb5YZ18UJKQmkJpQnrk",
  "key40": "3BL2HiPygGRULuDkK3ncy36jgJcNLCv7zN89UCY6XKDqT5fm6NP3vpCtmeJSvr68F79JzxxSfDcjsUULbzVgWTNh",
  "key41": "Aj6U7z7t3Acna1CwF3wtJP6C2Df1TRN93BU9ekUmuFKUDHusFypQLJfbxkmQvynSnLcfduEM8GqzxRwEH876RPF",
  "key42": "5HXvDmYVg4qsKk69jNGCSFxjGHRQr9PjQtQW2Qxk2X46hRdbQrtznyAEPUR6GN8w9KXNBvTUFaptUaiwZb4trEc",
  "key43": "5V4HTtv3UHXdAmyFawJgV6s2ovUVRgbu5RwLqWfvNRmgYhxg1iLosxYFnuw4qYzuiNjdB5mCpM1BTh7fjTU27RVM"
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
