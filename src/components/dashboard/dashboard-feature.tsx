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
    "3grgQPsE3CwsFr7s26HKdzaGFkQMot1Ua9tcFEEtHkXvewUmNej6QWVWY2wuBDjrd3bUxpBaoGNt6hhpf2gxBEjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62sZEkJXcexeu6mmhsTQHStTcxXTuRVv7hLfPSLN1ZbYmuTMBMyCjdGwWRLyitFMaPCN5x6ZVWjt69NtGJZrWTGz",
  "key1": "5dTAiNjn47dqFrdnNvAdf5396pBrvMPWdr93frew6bP1YpvGJSdqaxzz625pVsbY8pjNRL3cq9XM59quvbkEU68A",
  "key2": "49JEShJeP9c4qwXkMQ8HsDA7MZXQRjuubyAWdCE5mJF9LLotwPFavnQSy2wkhAhqttynkKrrLJPDUjWPxCwwRzR2",
  "key3": "5w2RWmTMn3G6SUr6QCPRcTuNksPgoLYXs526BUm2KdnW9uTKCxDoFCjCVBtzCy3LFhHrf3uesWdu7RBaeLMbecK7",
  "key4": "2DJ3stbjRo2jM2poHGxdpDptBMfQgHj9kwsqomT2NHoQZvnMHEvfTAcQxq9cjXCYVMCKsjgxrL535RwycAQjs2T",
  "key5": "43BW8hR6i5T16W6YdNmW7Spxs4LfojSsgcvJ1aE4mutLDi3QAmZevGqfrqtm2jr3eoVtG8cvkp8LJBSuZLjQnSPg",
  "key6": "3FRqG7cyBmUj14Ywsg1kF1vkasC7EmGoXQcNeU3zgv9X5uMLWEgaLeLN8zYReRZYaViCyLwVQfhh4wRUF4qfGsXv",
  "key7": "21QMB4YU3Vq6o4WMmMhUnJ6Mu431Hj9h5cUeLeL995Hz3cGBDgwYg5WmdSXSck7ikMzBYTK2x9yvzovv93ZaFrrW",
  "key8": "67Bo9XTEdyZnSV8qG6Ka6VuhjPpWbr9ho51debuSTtwEwBqgadK8DWY3gzDqT4CCm7ikV58RUijxFddQL5QAkQYW",
  "key9": "2CnsZR2Pet3rvBJk69VHkvfxZCnYHK46A36zsZfzGizEVMLxwBFMNYJAFFhGLyxvnBM1RXHTFPst1SbZ184bncbi",
  "key10": "3jcPehgKiye7xkiECvBUsjN8SL1uM4oxYqQLpmiMzsHiKHW6kTyVBUd55SFhN9SddPEKLZLPmsUYzfJ5Ro1EJW2t",
  "key11": "4Z3hCCay6J5WGB8Gp2z1cq8yCwFBpgt9miZiozYcNtVRcCAU1ShViQb5Wdw4TXcFzSABGcfMXrir3QsSntf2JBum",
  "key12": "382fiumKer9sfcD7UjbEGBx9KeciKKEjNWcJ9NFDQD3CsroFf4sK3UkeUoAoYxZLDc57Bsy5Y93nBHdtYTCKWJ67",
  "key13": "41mGD4tBzMPgQADGU4CfpaYvBu5wsjkv6r6smnJ1s4NAmeypE1yHa3HCm3hsBSjpPBBmtrazAMrGM9JSojC9FTVU",
  "key14": "QPTQCsoQHt39iRs36qQ59QgEtxJEfUM1zENvBAMhQ5Q8hSkYAJyJnogY6NF44SueYPRb7dRyrTSSKUsTAyFj35T",
  "key15": "w1gjHitts9TtXvpS7WZejGLiPwdKXKwrDRq4nzJ29bxBaeJ1UQf7Myr7YZJowaFXxtwEjdBStCVnfMxeX3VcPvx",
  "key16": "3x8GTx4t7UWstDtrvPacNiiuftDrpxE5WnjEougqB8ZSPM7gWk6VuSMDpUJnntYr5gaKxMQP7qQSMcL2FsJtsFzW",
  "key17": "58wU4carm1qsVAG8Vx43JhJsMr6PQstFHGAUkvUWPfYEMxBjhAiSo4q9ytSfohxVtTv34GzP2NLjvMMSweEZXndL",
  "key18": "49pWyyTQ8ytD7XaDkz681y3Ru9zr2xJVmA49Tv2cBh5kuHfQz23zW8ZKs4BxvdoooZMn4XQKdQs3rWux4vueBzQF",
  "key19": "5RehPUEiZuZ1fqWJYYJybuaBLBdmvXwDcA6qSAmPhETWNPx1uDkmLetepR89cu1CRFaNjDsJ7yq5ZoaoqhAoFkAg",
  "key20": "2mwvhxdLen6rALGvAqZCbDF4RCdiAvUAUyMFMJewbv1t4ZrzGHaqoEe6Ttp811DbaJyE3Vz6HPam6tvXRcGFmWWJ",
  "key21": "2mKRvMDNvoij549SUuriXnN9Zf5JgTD1jsxtmJgN5meFLZJf46VYRnUdDXgVfSSTcKQj1dFWN57we2bU7ZPgPyBs",
  "key22": "5HYT1UMZ2tbWPWDYmvpMKZZQp76aFk7nMVGNJdaTr1hVCZ7wsnpN5jFGJaH98jjXaX4xmk3BQpkbaNqCrTJTqk5R",
  "key23": "5edCwjYWin5gs1DroihkRTD7NMhScg1CpP2fazesp7dKCubHaKLFGF9irT95ee15xEdV4gAByaCyD68VAd1a3pu6",
  "key24": "4vZkRZUYjxe6izR7BT6XQmquNXSQ29cJuz5dFXSJXNK4e8BihjQHgXu2tod4UBxsyiDTihGgU34hTMC2ihcxD2iX",
  "key25": "5x9DVB1UDtAD5NJo1UPxEo2J8nH2JPwXe66o1Ai9nW9mZr4fzD4xcZ8GW2wEQR2kZDPQdoWJntnUCf39dYXKP12s",
  "key26": "xqQUQkbgbLx22fmRPmPgkkvZjCKZtrwLjKAM39EspfPWPg6mXFc6NvFBw8o6meNLXH9Kxv6iHWQ1rQUbdsVPCD2"
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
