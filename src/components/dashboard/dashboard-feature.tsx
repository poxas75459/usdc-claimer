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
    "4QTR6C9i75LbgKWNidfjVjXbT4p5WgCrb29PKN1H1p9mzkRHbgor23r7MwXzr9PULfJ2K9Rd9hkGuxepgqin1KgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7ojwuH1MMR89YhDpLabmBBTQV5XSRtEydKxXVTdQPqFjKFfrssgTFU4Qr8ZYpD3KghgBNGdEJFoH4sU245TCEt",
  "key1": "5jAaiEN4JmaWbcDc3GA8zeMSqqrDLykC6xd16yVJkXm7YxkgXUUm64K3KAJ3Q6qsD41oaQbiR8FQq68sBDQW1oeG",
  "key2": "5hTduHth5kxnz8ymrGZdpqSmfZTAnh1ADFab8vBjbMfFXNtZngNyBu1phBZg8YDXK4gjaYQD1B3czrpNERz2atLR",
  "key3": "3Rv3JbkJBFxtpdWBQfPNUXXg3j1czndV2k5EtdWbxmc9j15q3Yd9nqgHNpu1FpMZTUNXqGanyJF4bMnquVZaVXBq",
  "key4": "29rzEHGPbGtcMeKh3DWjptmsJyw3NCsr3SSo77B3kG4qDwbVnwQ1p5RkFetmw7E3DW5hkU5rGQsnNBZ38Uy4ohK4",
  "key5": "2rqXiuhLQNmJ2eQ6iV7RrPYsnn4Uz3p9bEEXzdpb7zp3MBy7DvqtYHjA4Q3wPT5oq29kuvFQNskX3pB4aY2YUqUK",
  "key6": "3nVcJdWnx6d2dkLaxuS8Q6weydrZfP2C6sgACQkqZtdZ7iKkPDWJHg4mfhiGtfrWDa5XwkgUaik9ToySUxZ99enp",
  "key7": "W1rRv6xfZMkXpvVPcoPtJPSsdUnejZGN6BgGJUVNaBsQKLCfCcJwc2YSNDxsGRdYsnLbsemvpcEcCAext3JecRG",
  "key8": "2UbCpe4Gc2HjN2ad9u7EmqE49CyDuTS5EbCzwHkf81cgM2NeEyr1w7qkJdYT9V4uU5WEv6M2rvPeKZJRpSzcKzqz",
  "key9": "N8xWShbYABBMpP24MQy7vm8EV59cUteGHPEbzXs5R9evYZP5tr4HjDEZyEFNk4WeWAvcMTbW5Sw9hd8h3vZ1Ejy",
  "key10": "3wKaXhrk98UZUmUpib56gAi94R9pw32E68RhW4kHY97mf4nVL5wqFXeGRVn7SVkfUCVFagzTgoKSCBswbQEBkkn4",
  "key11": "34Y2HmtCxo3YWsYgnQiyoTsYv9gKhTUvyFY9Y5ZwDBgvCeqFjCjbXuxkM7uae8zcp32VoU9h1iFtt5573JmFPVph",
  "key12": "4jjq11HSmRqvDSptoDeGS3PyP8sDFmBfw2B7ht8hoWp4S6fZ62LJft4yxxZGW2emeQMrvAAabQ1bkgucVFb3r8Nb",
  "key13": "4Tj46SRQ8Cnhyw4x8ZMFtc9Co6dZxqABffcoEN7zYMDGNPQ9JZoZR7iZd22VFbhKKPNzEAggyj7PNoKnETg4rga1",
  "key14": "4g9SgvnGFBdvGAxTtyFsYMonYX3grZrbiJdcnenCMBmbgFGQywSV6dXXAoa8UVaRB4Hot6X3JhN3FuhRHd7i22yz",
  "key15": "5bADfMwNohKWxbZbkAjQVCU9vLMvFR8bNtLfcApgsdgTLgxGjiCD2Kt6hDoemuEQLeRMhhcT5i4PBpgpFXdp4sHy",
  "key16": "4oa9psGZmrYQBp824miLXBeqTmWNeMwg8T4jCfAtJbKcpjk2K7jftNnD8RqMNMKt2kGcYdni85EhhtD6DtgzQbrM",
  "key17": "43LjEZmaEd2KbjaKJkZivvDib47oBFpwA7qN2kkJ6Mn9AmuMrR7KpgDLyDaUhas7vogxkurdyDswShEdAN7UFR8Q",
  "key18": "2sVoDfPWCnZgsFpjjbhqeu4YBFpAyfufDXmMReFkAUgZjHYGk2uCSRvri19Y9EKvWhkDnLTwXMZnE9hUn8N97QQA",
  "key19": "29aT5fVbVM15n6dss12EUVbtPfViymF8sLD8uHV2MK1XHCWv17MpyfsscSUSW8jey7uGmzh42yXRpaAcpwvHZ64G",
  "key20": "3XJuEhdbQt9vz6H3CmTrpQVZRTeFee7kuEoFMZyxCigHWB36pUtepxJpL94ufejVNCaWv2uZk33DYN3Y2Ce8Sk5D",
  "key21": "3rfWXkvXKkXQApdzrXvcsnBV6VGYgGRpH4KsQioDtnTXGz13ADsUzhybQPxC6vKSccrxAeWp5fNeFPCdrSqXXtTB",
  "key22": "64jfsbzVV65qLbwqkVqTLCHHhKtumrsv1FXo3QAbib6KAwG8HcyBLNjBDsrYoP4XsQhwP8e53S8Sd5S1ffpQMus2",
  "key23": "5yArHjdezimBAfVqUnVctNe8uUy554656hz5aStFHq5Pc5QDVWcnPeUt84zcWjZeWsdgc1VqFfvZFz3rWCekXhz7",
  "key24": "4JQJDPCYEqqpDt5b66KjMBEoYZdfiJffDU967HEwGgdroZoFXuzunDk7yNBTw7kSwNaqD9xnaCAodaNebCKkZkzc",
  "key25": "GuB1QVqAP1i5RHSUjaYEV8uheXUJvvDUXyrjdf2Lw7tMHsYZf6TFs3DMdyYeaeXxBg8BR3vdfboKyf2ZJpa1Dfg",
  "key26": "9m7zyxgCiJLci2dmxzdLy5ifnw7LKioxDb8h66HXVL68KZtqCfFcTcpP2juskF3LgvibtCsoBynq2n9sW7KUVQx",
  "key27": "3uLtJck9EJstMYLfeVuJDHm9EjzDrTJrPU9vxou2WXWy9HJ6VFcQkMgjNhoYLXNXBE1doDzNG57mLM99mw3bQZMo",
  "key28": "34Sr2SyNcNosCtkdM8JWDzFPha5v5pVBvVdBJqE9joZaaHFqD1JA1yNwvU17jtuN9vLufY1bvSg2rkXcguKmrpfX",
  "key29": "2msGUh5RFBom1ngmYyXDbwdC2DWQAv8MEGkyV2dsMCoYBMQvD1c1jEQZnsJo5NyRnmXAA9qqxggpuYeoWCR4s8Zq",
  "key30": "3JJ8sV6V1KVTULKtPMJK6aZuAQPTxJhLLDjQZJ18KivMNnoSDmqwTp8esJEmjCA8PrhoKi7m6JCsQCW4ySafh3Yh",
  "key31": "YcpBoS8gbxgyVAdFAQDZY73khbG4sLeUWeBqN9QvS36RWXjUVoZgjPtez8UeSwCR52di8xrWPhRxwcePHeGwsgz",
  "key32": "2fAmWgb5zhh5zNpx22PwH7NXknAG28BLAV33XqTTN6mjvBUVq9tBmWK4nWER9qtWMVDduNrJaJuRyZu9z5Xeq4hS",
  "key33": "tKJzbJ7vWVNvUg7i9fpcKJaMoJNFsepHdffWHy6JxTzZsFMqazdGh6A4e7L9KiLd6iDCVPNwAg8Sh9fWs8vUPdm",
  "key34": "TF4iGAYycCQWZH7CBfncmYBDcxugmiUqkCVwKtsPTF3K2CKrn6U74WjvpF1wTjGccLZkY6iNapCpNUjnD5MZMqW",
  "key35": "AdFsEA9xneDzBAL5iKSgrUpMXoirEdQegNZXBsFH4bpT7MAbwi89WsvFCuBvMFmBmmdfjfQKWn8BSvyup8hU8rg",
  "key36": "5JokPm185zjtsPQ2NcPAkmYVv313N5P1LTV26EbUCqiBUBceJ7xuXAdzNjTL52WLRy6XChMSvWL19m2EuLLqgLek",
  "key37": "35Ze4xHbXFxSJDcnJoKcvKkxT1Hu5CiVyeNurFrKPkEhyQ3SdMpDoqXLKvkxtZEARXYkkftQbR7sVRYTP8GURyMS",
  "key38": "pZeGUtZb3Fb9emsuY84od9DYtEttQDxLuiiLPnE3KAtykWMnDQxag6UY5YonEY65Qj6UjNg35bf4z6tJUV26ZKi",
  "key39": "3ktjLsedDboQ3zpjJTNNy1onbBMxF41eHnKS69Qs1mCNqA4vye4mmoPL7deVZMjpeo9QKpeY7A6HC8qBYTYaucWA",
  "key40": "36VmDwUYrQPmhHeDNkbnTcpv9dvcQkfJqDzZK2F9ng7nAur43GbV49CAJga7Cy4bgqVE633f7VV7bsGNQ9J1r6Dw",
  "key41": "3BXdzFJwWn9jaGkLwYHxo2zp16hmwdGarX3LqqLp12SS8UiLt6GQYuyHhckxfHRT6LkeL38XrdNQWeJc32VCKpf8",
  "key42": "o3g6W9dB3trXB5A6De1VHjN8bhHrJdktTKnX22NmeFbocYDidmvg4xFE61h92NmDhUSEb9DWiZzuHhePWrEU197",
  "key43": "nYBZ1X72bvx1N2nVc5TMxv7Jba8cAhU73KJWJVxwBfHfTNhpwrpT5NagxbRxPW19tX7HsZMJg9tAfNcAr6bHS2n",
  "key44": "2LdcmgXxU4YHyqwnQYRDH9vHSWPdjJtG3GeE2Wymcehw6Ub4VYd69ixGXTkktVkDHmRqzaWsBYywivhWwj2id7JU",
  "key45": "c4RHTrJt5yFQyYHSnmAUAcWphofEC7W8vdKw1xGERT8ZUYcDwZ4DCFocpjYdzhmfaYJ95Zgc9gct1nJPvva57Gv"
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
