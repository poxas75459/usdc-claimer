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
    "4YWQ8G4e136UgVUFdWtPNke391ydNDU8JVPFWWkiGTM6XLayb6sXmqXtC6HToTdo2rSgvckWKfiL2dLfwJEVcgDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GURtHhUSixEzwEmU8tdzZCLnmuDHjMXiz6yt6p5wUqFNK75iLqoQWkrab4N3Tzqju3KXuYhqDPD7oS5DYMiVwUj",
  "key1": "2B4HrKhAP8md9BzumMRfUYfNCAYMd9jetnoeNhfknXkPosfdPjDRVf2KNXb8HmZ6Ba5Gj4bWDnYg7ePnDxq2rf48",
  "key2": "4NEQ1dspjvS4aEHk9Ka14eEK1DJKBdGsyZTMKqtHEfoPJDobDjqoBcWqcddwXEmf25fWSWJj7fhiS7kLUWuXrxck",
  "key3": "53M7YdGYwgHUq59Lxu5rJqsxxPj5thdaKm5RSwHxjNQksR1qTnUHdkpa8BxSB4pXVmHu9BGsENhTTHCWrC6RGVpj",
  "key4": "479iHtKN3gDrf4FjnGc9iPjNWzVVEcDfzzT8d3TZwHsFwHuH8jEUbC9hfXDcvn98Cj949zrUP8ERq9pGQrqBPEYz",
  "key5": "2WEi6XJhe7QtQLSqapHtJ6f1yanZaqitqytxLNp1VU5nGzrVWgpWGYZZEMQVgPyTFbfod1Fk9Brp4szxYxv5DApz",
  "key6": "4jaoVRJPsjU3MjTCjyFFiX3SJ1W1UcePxYzNSyxUhFHNXGKkn9uggfu1zH32yXdpD4mxUVfMMNGTnsdhRgq3mhtu",
  "key7": "27u871sd7Qz5Tucc75isQ6pv8yHSLFmoaZBYtDEikejkwsodVbFaTvYxrKRboFe1h8WKZQCrc1fy3j87jkqGpCpB",
  "key8": "3F5csrHjj8nEHYQPeYC9iq4SsGgbaBzTykHsy8nvfRrLufKEmgSTnQM4Y7EwSQxdpnaQTdodipLxAYpyhNGKuuzT",
  "key9": "4Mogj4kyuZfDeDurZiENPj5RZSNJgKH1c6o3rW4EdfEeaLpkh8LsytjEe92eMwCHYBe1DfDZw2DQPP8LssEyR8iz",
  "key10": "5mJEL7WfgvnUjQtus72Areq4n4SpovMWRxPTthvdsSvGpVVjz4C4GYPqjKVNnGXs96iZ7ozAXFEWyzErVqvPh7B6",
  "key11": "4oQziXFj48fy5Dit9vxiC92WhF6CHBwwgmGwkAoepTbw7nVgZkEv1osBtWyaefzpcDk6t3eZbGdMVLDbNEsD7FvD",
  "key12": "5iZGLhu2FGCERfWcvs8dCmnUQYqikpb1KnS38PiV9gaZKeHtt4DuWTvkbp1yZyddEEHHuEKXpnBLYZTpxNCQGaP4",
  "key13": "2uRjc38EKEG9KHecc7dhpws4AtJG1hsUL1m61xV2YYVdjTJWJbUeKh16c79xUsqaZ9r3BxRy3fB9aEW7749VC1Hg",
  "key14": "zs1GBWgsFZazxNSEFMyBSgxngWhJxnMHVUXQZiPzjKNMgrVGUrWEKMLzXrD2wLghXPqJwkAAESkBNrEBBGHLojA",
  "key15": "4tCHX7iNuqv2sRaVUKahbvUk9eczmYvxCJ9XhsFYtiQmd4ShNvBbJCPFuGFCWMCa9BFJZddnAfi1PZRH9pUG8EW3",
  "key16": "4jjJ3RMrT1CEPezWwskP2Bn3GUKimQNhszY6pSwQNPq8dwouyTWgWTo4yg2Qm5JGnxyAPtuGUpJbaVriScQJzH4P",
  "key17": "22RrjYeoU5iXSUg8TapUUfG73AsWymwBmP8rjZzjZipEX2YH4f9qVeSK7YfPsKd5pqAjzoQNNFHcmPoZ6baorEe3",
  "key18": "3LNvSkLJ1Nx6zNRQEtMFkZS4iQ2fkhqxuUfwSgNyYzWxEt9gut2VY9VbStG1qZFaR8WKiZ4HC2JdkCUaTqqFXPsV",
  "key19": "2FaW62zGTstXM81NiYYPSJxCjxW35MhuCS3tXv6BaNSZ9b9hcRcHdfnbykqdeXmzCZTRHZ5By688CXNMAmD88eaL",
  "key20": "5zSJWtCSUwcuWMPMCNSJFqrVHzcuHtAJgWFR2EGonntR54fZkFjyjxUn1Gb6CBmqZazFK8DrH5yucGdqFYyYx9Ws",
  "key21": "3nPabSk3ALF99RAMRN5nJUhS3uJURkqs8exMa3ohdKmeS6UZEc8j1EHwfNeU2unc6sWYarLKx5Ak9PxDg1dPGayL",
  "key22": "SxGgRj5dBNY4sXrPUrPv9fQsAtzKPnDpssoeMXzo5py19iTjBZkpTcSG9P123aXJBVBT8AZKAGrNS3BzdTAfZW4",
  "key23": "7DmQr4sECB3w84aeT4gHVmnMZEnmrfESo1zerAcRTMMt7kccsk4PiivnVfnBEpAyZG2PriF1eotuosXaazNTS8D",
  "key24": "2SX3Sjv88B2w5QJ8YeKwb2mJiVFSVRC5FhdHpAMXBzH6FhQk8vgWhfHRQVg5o2jnif178myw8qRMQiA3wNxJPxxZ",
  "key25": "4uuw8rro5Ww5FqNar4F9F85qZhhingqBES4imPMErqpXHB98P1gGuPKsGoH2q4np9SQESUiez2pfEaWyyTQEJSc5",
  "key26": "35STfgC6MK2VXtDzpt7f2emNDgvhzakYSB5kpSdT1hnSoTTFGTpDrdajzsUTZrtad7CvRii3CipcsHfw9sN5av1D",
  "key27": "5pQtb2WGXCno16xNxMd1EXAZLzuDw2p6tYRr4ZQNMpyVjXfGE1UJ9cxY1a9oNPSWTvo4JgSXPT8W9m19MNHMWugB",
  "key28": "3bAyztKCBZvmrbvRBvCMJdD86diH2R44bmKheWStRHZ3ABk4SbobmUCJ7edyksMENC9Xuf2oVc1VE9TTvh875hLj",
  "key29": "5JUYG6UWwHQJhCYoUjyeS9VeqiJdBJdTDdtSmhFcaDkiCbReVftcTJVqa5cdHayQqF8CfPonJuUbdFnFZoKVTE8r",
  "key30": "5oMMTsuNwiUagFbhCAuPEeTnnGMowDgb6ncTexcs1qpw7JqCGrDdpYxrcFZZDA8QL7yXNbet4wsiwdQcBHFq5LEU",
  "key31": "43DFUSZ7tni322kHRgHMvohD4wMRNnceeEA7rJUfLCkYFQ7qULyRhAvqCZdPiHTor1u2GKWkFNR5cbipZE8vLekB",
  "key32": "2ccCQC1wGmLAa4EvstU7RXcyTVLeyofajLnVsDUrxwKXCbSRbxjdmMkn7Sr7oPK7eGjekivk6fyFRjKmYUHjz3SE",
  "key33": "5ZBkybwU5dCcKepzjmYjp3XL7rBtZfNZtt94ptG5Zx3ULRsbt5vfFmt6AAQgJYD4vvFo1NFBPPeCnrDcxTpLkxSp",
  "key34": "5ZELzBxZRH2fTxzHHqPN6B5UiuLJXcgocjpZSZH6g1QYXmWoVA8xDrCkkWRpVu1SWZgkNQcBtrfjgT9DXscFavzJ",
  "key35": "4cnvMVxeaGzD6ZA8cwmJozFPH6gDg8dwt1GjgszGwm5ULfLSg3UiwrWs6Uf7Fh9jgnq8tAnXt2X35P7reYdvn4sn",
  "key36": "z5KJhHi19VN31vpPkitiMm1xVNe93DanBLvBp7XW9a5dBh2T5MmRvZCT9oz16AT92XANaXcjMGRLZErdmXHwuJs",
  "key37": "3iB7Zs5iZ8sG8q1rpBfvYnmMxuKNAYzNWCaRgUCxapEVeWYxdRzjZn3cy1LjvtLzLciohHByUrmSHqRkvxrVZxRi",
  "key38": "dgzTiczrqteaLXgWMpxMg7dTH8JzeyewhUJVkp73gmD6Tsry81ccoowRKXzsLGbpX4DUx9KF1tcaQbu6sBmSR1C",
  "key39": "2kQ2dp9WqMSYPUjNV6VjH5qS6dSQSS3ALFpTWkNnot6YWmCqU8CTybeqXvtQqPgwBi5XHwAtsCyKeNwZBsGc49Sg",
  "key40": "qs2ygvPHEqc173g2VuAaLnY5dm1AC2rcAgmwStY7YkYhoK3NjDLKVRamH3SiU7CM1rpYmnb6Y49GDksniGzSpK5",
  "key41": "t6aCAZD6py5AbG1GZhX8uDmNdv2PpEw69veq74VAuo2VrhQuyDcDthEFmZpCtXTLopJCkVhbQp4dH99QaDVMekr",
  "key42": "igKbW3wqDp5Bx2b7GM5xvWRLXPuqPqvbpgsrccg3b8Mpf4uwBpE9QutehRFiaiJ2L5kri9SyP7TQnqZNHmKSGLu",
  "key43": "3CkMejz3kJCbfhwnH3SDACr7W6MRPsxQPBUJfTfaF4FG2rm2fTpv9Vq26xvGRvaiKsXEmYp8omPy1rJvodmXwdeG",
  "key44": "3BxerAGVSwS6rQNWebuDXnVyBay62n9oG7iwvPDsRfz2iqKUzNstjM7gYxrR7CnWQr8L8L1bsdDEnfy9egDHKa7D",
  "key45": "5xv3ckoQxXQe6q9VR97qEMMmbq2QitZdrt1QT1Tnj1GKVr8u52kMrFy5GdyvG1qvManUjkhnBPzGHT12Nof7HsT",
  "key46": "UeSSNQSb62oHQusSRHHNkuqaCdAXfzbK6gxsAJjBo1uq5eLuNu7HMSGWmdBxhiEjuwJxTqFRZaVmYLVfpHV7Yq2",
  "key47": "122Prdz1WbMpamqNDCe42aD4e5mvmB64syTMQD4h26EFXKnSMPMFUYXvBU8wdujWdcTWSdFKiCahG3hAutDvFXi2"
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
