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
    "5gypfwcSgnyETCraVfhWPmtQ4bvtQnGKYjD2nvMKpN6GTuMFTPcHUqa9UNwqz1No5Z57C3z9k9SK6VdW5PLRwFRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srWBKETUApEAix12BAndm7Kx96ohq3tfF2idJzY4bUsoQkz1jQrDurQb5Ueo3FmsiFCZMPfgKxAmZHyDWY8e4KJ",
  "key1": "5Zv4pqcm6QR8eNkp5iWSgkW4eDrhXAhvLRDLiFxCBmqgL29qnpgY2QLpDPiHXAUEKbwqvuoT3UgNNkvnHGixrRuZ",
  "key2": "Ypajwb4G7EiY2CRuJANiQaDPWcyLcrjVih2hDLhyp446dng8nAd5XUvC8QucWRwrnwg1WDYwAxCKybStjckPfn4",
  "key3": "4wMKGQgkpC4tWsHV1nDoz5GdXbZtm8VsEkBYXuzLya9Kxwg6iDeUxi7p9ANz97JpvnRen9K9niAkEkhWNQBrYfrz",
  "key4": "4bUH2WpBdspTvQReXgz7t7iucvDGh3LMxz4P8ZkqRMfondSU1i9GosKEX51UJtEM3qDDpbyWFViUDkyZ5CCxvG2W",
  "key5": "64ZoxbqykUMqtUtwashMVbxdaJRHJQirjBoa6j4T27HYVHoMZPd7jmCXFyWtRDNmpsjCaRPoVAjSzaXxVouigsmV",
  "key6": "2m4zxLmy28DAr9n31d5ohXumH71ffBjsRj5YqjkYbARbUodFVrs6gX5h2gxPBDdpdjh6KVMWG2429TZXoTGt5wJW",
  "key7": "3Srsm2uAsJK6wA5G4bWBxqvJEHropaXDPvvnnNvmkJPhuR4VhoxHam5QKfJsYbh4B2YthHFoGraek7aZViEsfVqj",
  "key8": "4xeyUeqvX7HpaLBHebmppoGPX5qoJTNJwCHjhkmPT5o6e4oTLXigQdX2abSDeSmZXWJyUB2shJMyeYKnAjNw1P87",
  "key9": "5f2nCF1FUkseF3yHG6JEXtM5G8HzxGzoM5FtErbq8bMGUjgvkkrRsYwtKQu46CVHVHC8ENyYjEcDKS73MtFVk25K",
  "key10": "5pYt4XHAStjrWCCrXbiC5JodotJD4EkniLH4QdekyuiDq1cg1tbspk5shYgPRjJN3biShDhEeDSxxsnK25MRqYtJ",
  "key11": "6jhjV6Knz7Tp6RBSJXeW7vQrDYKgUCeQ1tsuSDEBLtZUeqTah2L5Lz5qVqmm2gEKJ4yUAwvk5z2nrBi8ytHW9UK",
  "key12": "61BhReBe78wsPXomrZGSLodFvrPhgL1uVHToPuXqK4dkoVSJpFEyBbpCouNAm3D2q19dRHzofreDxaTMJU44F7Yo",
  "key13": "9uoWRS1ukvwYEaLeHgjbZd74N2J9Qwud7vS1wgJkYK9isgcAV9i3DZsXK8jQcn6nFMT7RZzXjGrEEgmfXgCZMNs",
  "key14": "54Lp78SY6Sx5qA1RTaaJH3sb7rG9nVoe6rvArK6pkeGJYNTH4SUC8R6cNGUqSmxMKwGWUM9ck3nrUteoKiLSpbN8",
  "key15": "r5SCHkTQeezXJXuWhysXtm2Q4KhWh9ArCcpSqHnVfS1dHPudewmiUF8JukamhbftRT6gbijkitRLzRG1XXpMQ2c",
  "key16": "T5UbUNMyXhRsG3CZGn66PJt21rHvyHYde9ux8pE1VUUS5fmbLhEAMrdCwrPWhYqdgJFCrHggfTUhdsvHsEJg8FZ",
  "key17": "2xJK3vgMdGeGY8zcbStX4dn2QQva1ZkpGJ99f2jksdSGibeTBNLv9AjwwyyeoyAq9Ut6nQ9Ka9uj4bSfsCQxahjs",
  "key18": "2XaDZ3Z4S8J6bciEKKs1YEyrKk2ynGsDz6m3teXpuPZdgK4onRgJgJToNab9iM9j5tk1maio5ip6TwjwdBaGgFVu",
  "key19": "41eVw9C6MaxH13UUY3c4NECrscWGDJVpBXapHdu5yCHhY7ohuRKUGksnPgqNHhbn8UHvFuAE5KAaAUitLvicFiEC",
  "key20": "aHVeK4wG7ZuPeiKpT3mKCLodYQ9rW6BxJQWsFXady6GFkerMmW5a2AyDenBTvy58qPVDDeKuWrAAoUG4EwMnjq2",
  "key21": "5mHmzmmfgbnadCWPqjeDvn4HF6GRfzSuPYpZudLcDLEjGcww5M5yhQuerNyZ4bHCXw5cy1VPcZUkNjSHvjnBmGpd",
  "key22": "2pupb8TVZSBwjbFupiw4FVBw4LdZdPCGoayr4n4RofYFoxHPh1zBCSTr3afJoFZhYPA3JLdDHvd5MzPDRD6xP8pN",
  "key23": "384BWDDtqPcHPRhLFTR3QcuYyPUd845fdReNEtUYap445q6UqWHsYePLYUyCGvoTboKdN2uE4voFujkbjNtd1ya2",
  "key24": "3jZLuaJAoyzDNaDabLWipH2vVCzzfyx9CVZLNaTU9nCYyX2DnprWb3WtYWSZhyNWhdcNnyfrjYZ7dcT18Ud8UT2z",
  "key25": "3RPxEvgfzXFgwqBL2RHWs2UDq2hCckRX5XuKDKW9Jg48eBfCuFunYNfNbHpsNTNWgwMaSDc23Mj8AaSGoaSHSAHc",
  "key26": "3eSZ2QEToJuJV1FBJmLCM9ha34JZtq5kbmjbGaNTzSd1L1WJr6KztL4i8m6KCqCjwnuW2juUCykRneALwSUuKZKY",
  "key27": "QzZeYPkhGhzumcCZWhnmVMHTY7tJtg7PCBAZpueqCFip8Nn9C5eoW5pdeFa9HcNbK5MMot6fByWGxb7PofyZfqP"
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
