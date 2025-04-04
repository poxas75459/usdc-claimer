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
    "3X34pfLcdfUFNCvSosmAAQ1XtVP6oSEwGE27oXYhP3MJmCJbCA6MfWMxJEdv7nN9xhKjJJDmD5zP9D811RDzsD35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEnrfXitBkq5Fz1CGcYq3WfZF25oW2zhdYVsvax7jnkgd8pY6afagLwiuReYBD8tiY254KYgvx6jsHXP7d3nQ1j",
  "key1": "38aQWJvEsWS3Qeidmbitp7kVNSzARdukV5SxpZyCazrk9CPUxLevGxWUz371XpQYc235JRVce8Rt1byQPySNeb3J",
  "key2": "3qi8ZhFsPAcctwUuWeqvCEcmfs2Jwwk6H4sBXu2BXzg7jcv2SHJ12XWKJWQHbyTEYbf1rhup4fgEahsh6Sf7qgnj",
  "key3": "3EvXqWuxKf9iqXsf4rxWgybk43NBUYeX3sNnLctnHwVRNZ62ku2ge8Bvkb5gLANAVp2fnjDw4EBgty5j5o3MFd1v",
  "key4": "66S82tJXZEhPiaTo39GMZvmnni55kkFrKgRHzCceZRoukEzZjM5MDN1XyEwQiqZvpn6K62JYRJHBc4Tq8wx5Fkob",
  "key5": "UA1veZUEDHCM3eTaU7Nx6UAVKeZKCiqCiCvRMRTJvQeSSaUHYMqimQgqipHuYeQ2V1KDmZh1Mur6Ua5yHqBctS8",
  "key6": "28vCZs9kkKXtwgx1oALR1GJJr9V2LfzGWWcoX3xbRbbN3YCHSCjBv9NxRBtzvaGLEzcLkXci1KftZR8PKrqUPJNz",
  "key7": "5dLNyczgUvyCLURJUCbWSChiF8J5htJcoB5RWEMzxiE9Jd8v2X37FJFndYWtfBw6BuY6Ays87XUngF7UUdwKNPdj",
  "key8": "4PSaoLZWKFPi2cxvGba1QhKv2dNieyw2A4Vs41ds8yMBnYiibKLyReP3LwZS6sCEaziEKvBDHwkEXqFYyNLZtYww",
  "key9": "RpQMDTTET1KTojXxVRV5LHaXb5xjoLGSusie8u6ugNKtgETQSis1V1tMAeqRng3UtLcBHGnBdcFzQp7AR4L4AVq",
  "key10": "67ezcghodjj1tGn8QyTZ79BD9XhvFf4U22Ni6SRL4kycpiJtMy3TnyqF3i9r2f5TUNBarWyZPHoWVQgyagSaXxvF",
  "key11": "4YRdakWU3NiJ6QeiFgxMm5QtpSLfNQVkV65UeVVji7Ai4TE7vKpY1oETgsjbMWioaH21NwLxXndRZR54sJh3Rykk",
  "key12": "2fLvnWPieJkRP9iv2zr1obDuqA1tgqcNjYDXpWgZQe6Rcc715QyJZ6zG7otiu4eb5oHeQL2S2gSmk4ugpPyxaJ4g",
  "key13": "tscnv3QuNLcqxGVa3TYaJbutYZqSKf7R3gnfTXtaRDge4M58bws7qeT5HsUYFkV9KhYTbXiiCddkea41AuM4q25",
  "key14": "2wSAss3AhRqyGrptwfzrFVr3nQ1eBjo8MPrCPBP3yJ1H77uyMQ4uxUh1sooRDP8eJys9hgmqWLirJzbxVS4nAsPD",
  "key15": "UcpiaPvioH2y5S4s7HDukzVQXsv1t4Guqzxxzp6enYeLLyXrcMMKGpBkKXPEAaSLuay36fABcyRdP5KKzPtmX6C",
  "key16": "2agk7PBW7erybAV5DMFXw4EQfFEHZd4sVpciq8v5TWYBwfVJt64pgdauSeZFSrfPfqwPrUnTscdb7RxCSjfdfD47",
  "key17": "3ghrkckYocUKPHcCTDXK4hqHu1FQuTnzgZM1yMJ16rKTDQrShi1PYV5HzkKS8jbQMft3hjhCJwaQBLpL8bAxDN8g",
  "key18": "2TTG6nk99V9YvTx9xbzBbpeHvZyeNotNXh2yzXfZbD5SKbsrkxV3LaXZpP2Wxqhu27FLJWXCzaV9PFniCJfZyDZm",
  "key19": "3tGTxTiEU61CLGjmfGxdFFa17HrLHR6YuwL1kQezNgmL1hPUNEb7YCXSs7y53gUgX2nuSYen93M9Xc1paWTUBDoA",
  "key20": "iRr5o71WT7XLi9tAqzetPKHLzvmqepMf26HVCF63JCvK2oa5nG8QYJGp56Mm9yGv84j7gAm4GuXf8yHdWyKU8cP",
  "key21": "2bRaMj1qTJmhGZ814tjqs4M8bxPkiZdG8jnCdQjdvcKWhAVmNdeRniupTAmWuDFBUntg6BQJxrSwMAPZEiZT7tpv",
  "key22": "2k2xt3KivdHmMBPHrHMUDy3ixWzYnkFXi7R5bHdJ72cAf42tN9WpLuTAnNXR9ZJpkKtL2AZkKCF87nYHb7xcKvom",
  "key23": "3EAXVc3UoxPRykBkX2D6tgy3sKUaPSpkCWbtk9kqYD7zm4s8HbJKYMBWicVgHqLPqKg65nXgyxghQHHievCXvzRi",
  "key24": "5xJzzSYxzEZGNDaTZyvrPb8GYUiN3UYP8kgojNmDhPBNS2QBisGsunccVxWyWeuMx4F8bvR4afFu9xhTmejYGijc",
  "key25": "37wxNxRhQXvBEKFV9evDinqCKN7zC7wJ5FEc1nofXyG9n961DLReBz4NzyWSWdBsVwzJdoxXW1QgR4YemfM8f5dk",
  "key26": "5XRtsVCXjZT6gRJzhi2tcjLf6GPdcSdmxLPXkiefqbqjBjF4Ukgj6DsQWE3yFW5cWs8WykSPYqbops7grdD9rG8M",
  "key27": "3K91SiZy39Nfdpieoj5cB7MEBA3KQvuN6cjuLTvwL2vToPHwQGeVuFjvwtb2hU68xaqMNa2Wm1RL7aWxpfbf8f9A"
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
