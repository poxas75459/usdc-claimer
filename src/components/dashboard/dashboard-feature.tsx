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
    "5h2EC8aQnuEgFCnUCSRjiweFLyjVKeKMhr8V9dVJixms5ugMRYg6jDPfSxxGZuodyn1pqxZGZXRLy3UDuyfuqdnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FGwLQnFAvM8eoj3ftiXjs8x7CpWo55uRfXEuYtwc8sV9wXuvment6FRfdEDyd8Cf689cBi9CP8PLF61KXshreY",
  "key1": "3mq7m9FEECxK9eKpurVxKu1Y6ggDNbPJpw4tLaVCagnhVi8341EdF7R5Lmpoi9dEJuk4L27qjrm7xnTUg9mHcUWD",
  "key2": "3EoXr5FMDtnGqc8Lp4CtLb8zDJe7j7yzzCL4ZZgsW5wtu5hoccCzpvV8xeZDquoUGjuGBdri83qCrUqmoXboxdwR",
  "key3": "5WtcN8wXbNfXfjhm9NqkUbGPu5DaCnnxmduEUgpfRMdXwCmVo7QomB1gWYDhYE9uWKkbE34PnqHNYTTUKHXcjQVJ",
  "key4": "2PUqQMqyHDDWonSGmPNVbUqxT7ypxzFuZFmHVeU9ucrE2yUT9KEg5ABMQjK7h1yu6Yt3MecnJzfdmM9PjZHNRJnH",
  "key5": "5AyW4HYAAxNFnzhqNazq9gpd3iA2J31b14nxJW9VdHkULuuD29fXu8LSGrHRAJeJMD3SrLEPxg51fYXVgVHWw1hL",
  "key6": "35xMEDSvJXAAsEcNhyuqZs2pccbSyZpYjqzKCMq24SwgzGiFKUGbJCvGjCeZea1RscwiUtU5MXg98grJiVNyakUX",
  "key7": "4jCGAiufP2qfWqebLWxBkdAsN3VDpkK8v6CFwfFCGxdo5VBJ9uBHM4V8P4VJzQ3hdNzkgstfCmHtyZwqNxooCwup",
  "key8": "2kaytgVW5XQH6AD7tR733xCfDFMccbsHgxBWtr6KZEFbkjsUTmDGbYtJX64F8JcwDM4J8aWh3N2o2mZJzByzgG5E",
  "key9": "2acFXhpngZeejT5xFtvsSZ4SK8U3DgUaf3HKyakwmZ6Ws1iF8rnpPyuPBGamz1hEKzNRFZHn5Q7zWSbPf7pQSpzj",
  "key10": "hR3Yan7YuzmeMQRTkicoL7MqTLmBTDhHFYXPHZCK2nSG6KeYqL4MHSsAvUhBXLiacTkWs54pqG5tw8pyMD9WvDZ",
  "key11": "kKLuAjh7GwfHwbDMw6Q79qdLMVCnEM8CVbnQLL4SdVNSULhtpdMJQx1BvQCXzbKzoHpuE7U58miknA2xWv4Fr1s",
  "key12": "2WGGh3wfveJeXUkMVge8ucCN5LaVGiq2sBcMsuc3YnfZiULsnEafAdJhE15vT3ZGzcFeEdggjREMTVtbHQxSs9eC",
  "key13": "eLhLA7AjFNZp8gMa8UMixFH8vhGHFQuRbTJoCrdtDAnZiuzdaAwTn6kx9r6CGAf6dfMMY4FntC8cGZJjBaVm9Kk",
  "key14": "4N7x6KeBLbc7eeAV3W9bP5dVG15R1Hp98p5nLTnLKWsDUH8xr1azzmnZrBgGE5gjKj1ujoqx29UUYkEzi2pqJQVs",
  "key15": "5CgNyBF9MfrLzDJXAdaPV6MYxepcrJV7VehJ7APMUKLNxDqu7vxqMzLz2X7uc9PaBHSyPYawz68w4PxSF8wES18X",
  "key16": "63tz1if3nF3zYcZVuShRBS6oJsrB2bmBVZpcuNs5oaGE4q86JJEHWSjqVtobdqGyCh2Px1NfpNbJ2ZjrN5AakoR9",
  "key17": "LBxeiHLnLE2tPtvZ925qEFVUeMD2fNA8DD7eZSepCJRmKTHrNxz9vJZpmqUiBdDhECTmmitpDh7fSLjZtRrzxas",
  "key18": "KGtWGtog1tXDoU6crRevegZpoZk1XwMkCsViUUa3x97WMEEwrub8NTSu6HutUobwWi2fzhgira2yv6EHAQnFEf6",
  "key19": "3o2jKSmJMRFJ6p5apTx4VDvsr4fjCkHJ4Nmz4Uz2hJhJt6pBScEQfF6tgJTPV24iLMPN6nKkMjX3JwqxpqZbgdC7",
  "key20": "296Gx8zBYDs7uwoj4jn2LVYHp5vgunj1MGD5jQ1rK6YtypeEPvJMRpKveGhcQUbjPCndqKZPFiJoeZTavJQnmGJH",
  "key21": "3n5yE69BECDseynavHS3tGPSChrMmnCxn4nq3Zqi5TVcn32ofTPxZu6UxNB2Jdntti1V2Zaz1CXDJWpzncSvJpGF",
  "key22": "4EjuANiA9HxsuMFtFXJrx1hT9Hf5bzWQ5PNRcLW2WPbDD1DZirgs3C6fessfD4Am5vfY5JLEauDXLBkt4rkkBwnF",
  "key23": "4Ap4uW2RyVGaxVqdppeYCDkxyq1n3QRYPePKbCZ9wptiUsKbV3rFGHhbo4pEfEcjMTtPD5qT42XCKDoETkkTgeJS",
  "key24": "FSFxRs2Q3sHDx6UbnxyDyZ69HiYZ7sMksweSJP7CeSRdLmnmuSY5FE7qYQwuiJ9zz1D5Qp9sjnPnh3dfqvjVqSj",
  "key25": "4x7HAeaDThgoFY666y6eDQqetvdHe3oyrJ74BySzUVpCKxtV4WycsbAtBUbZaSnCanYDoa1Th989nvStzBTvmYa2",
  "key26": "cNeAvSeStN3DnKCp5XpurTQZ3hvYY4UUXqpTJKaAp23oZvPYcJiGA7CziV6yXkYhcLs6d64SsS1R3r62R3RXBJs",
  "key27": "4peA1Xs2PCPguXVsj9F5CG1YWBLBq18ZEfQNE7iGbVgzxHf6Hu3LdeMWgEHqLrpfnyGqweHZJcfDQWCWaqeHwLsp",
  "key28": "4dfZxU8EaexeopSZS5oPzReCy5jtVPwJuepLnNQnsM4GBSSxiJbd6oJsmCNU8njyavvJhJ8hmbP9B65HP9EmCFxD",
  "key29": "2hN8D5kKKtJ9skxJdKwzaa3ccWhkspuji8L8sm9sWiAAvXbMLkqSBdP6xbqLsDsB394yc3fBTV7h3X6ekuhz2PTq",
  "key30": "4KRHQAnrTxPz2xzX18ScFfNEYTy9WiToRSgDTcCjJZ8wgYznrPkfzHW5ENtfbZ3YJfBtXzVUMve9Lj8JQrhmSTHw",
  "key31": "GxCRmsS4VDfJNE3F8e6o9HZt9hwnELM4xXwC5a8Kf9oRB3vKdybVpdDFExq2q8X52gS1p77kXzxDmHzukni3Bmr",
  "key32": "2tCAXKgM4TAx7wbPwGMUt3LCJbEHhDiHbAL4b9A3Z1SW9pWw8RjuNtjmKGfq2yDKY13nw6vVc3eo8V5VvXaQ2sCG",
  "key33": "5PwuEkXKn4DpbNkLWezDvaRZYP4FkVuBB4BeK6EKDB8TRSLzkJiX6WyHQnhJ8JxQFcpPSPECSykAwbwjsTGdKi8D",
  "key34": "5MHXGpSWCJWvub5bo5rr6RFKAdk9Q3LMVhS9oLetk95SsDFLpcUmxWcC73W3adudNHAFqf5Sk9xVyqjEEi2ZdMPC",
  "key35": "f269pVxsP7GyCYKZqpZZjvjQvcweo56YoZ9S6Edh22MAaukXCPmgnJTw9KY4Xde1V6PVDgbympShg9Ejf1YBS73",
  "key36": "5j6zAU1FiKWHsnH5S5Lj1zzs8UmmiT6nfrnGFsW3ZrVnsP81U3cib7r35tB6GoJ7Mz5WrzYZgCENn3AbNZPwgy3d",
  "key37": "633yhMY243V8Euf4nGw5GockxRzsFTEUz31S8dA22akrY7KgBCv8bMvXhXkf9HKudwATXKFnYiYFSx9F1Pjzo3YW",
  "key38": "2aQA7XaiWqaGkKywGaQzqM29yQ8U67uMjbEqZPpfaQ69hCAhUkS4Zt6N2N33e5fWPpGstEeefKzbhrNKt2KYWAoM",
  "key39": "4NXZCLKSUsrZA94Pp2E16RhQGWFEphNQHcQC3pJ6p6zYMc8fSGTfnyAdcCxnqKYx3YVZirgfw69fj2PHaUmojdmH",
  "key40": "3rTmmEM3mZ9Kyo7pMV25KkvD25F95GKtqcFBJAwBUQ5BnM1hHYruYLWPNASXFa2usVZQHNKFjsYW1pVcX1mm3W2R",
  "key41": "3fXskxfaSDipgSFnceCACxnyJfXhjxDemdongHcAvKFATib8DH1rwoB2kCe9GH79cWqLVjus8tTdCh6uv2H4Q4q2",
  "key42": "hDVM6AR9izxiWii2r4whNrLVgjnTV3iboBM8Y1ryC4hsEXeJgfuK9rtzZeaQNX4UdMxHUdwpYsysvJVKyokyoGt"
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
