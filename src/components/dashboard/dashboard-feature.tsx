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
    "1uZeCczpZQCKqpEgef7h5Wm8JhxaazFx4fiKetYa9ULTPxcbGjewGnNES8W5mHXzY3K8Gc8tRRLx6smQSEAfsZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4XwgNGNH9cFZcTkmaU19uyPWmXX4b2u5U59kwWGvqqGku5FmfaWAT7xWLfykNboN4vQKySN7QXx8ZENW8J2nh4",
  "key1": "3AkRWcjzcy9gaAkEcGpM5MaaAPDmKWyHPhZVTseiKtHhfS7ctitddjitdbKJXuteHm89zh9MGGXKWieHCsYndNvY",
  "key2": "u3MjxJo4RvBZuDnxewhEY8kmerGxqJu8KNKYKsqX74X9fQexvtB82jUvKVG2adUxyKwQwFQJdNHcVJ9uCnnUTGt",
  "key3": "3gnpuP5p3u9YTPPQ6N9m9utSHoyesz5M7VVJpBp6Sc51sg1oiYAdJPJ3BxtjEUxidfq7SToSytD6tedK18EnX4wM",
  "key4": "3VUGx2STfEGZ948nHTyrfdTbyyRRjbmP4K5Vh4hNbcGWoqDacaJLfdfrNsUvHKbQb99yCKCmFnfNtSbudedXJsD3",
  "key5": "3uAzuEuNkBEY37N5p3LhcRKkbvdboo69ZfjPrG1Kd9x8ku8rDuCohs1ADP81qL54DztoXZtmpqV5mVcZcJ3WfAxc",
  "key6": "2nrTy1A43PbkP7kBipvrFfvwWTTHVw6fw2WDa3cvtQ46rQy4esLmV7takqWqrTPNAfkoudLXp98gMR4RH5TmP418",
  "key7": "5obESiWSunXyrgBZi2PGw8fH84BVBWKnM9mYKNauBbhfGgkwMMhPUFHN2Uu4xDbpLDD8LscRvLdizzMfkEvbc3v2",
  "key8": "mGg7GKptk744hCW6sDJen5FH3tmfStVcDnobpUsKyGEUvTbB1HvwLCnn1fn6RftWuwkjkbSRHH5keJstGpZyGFG",
  "key9": "4o9mheCPQP1RrmXvv5BfuxWXpaWYs4xBmBCWqWHvaZafDE6GDPKrxPK6KaBorHJD8MAUeQzeooMhMc3ecPCPXxug",
  "key10": "4tzLX9csN5iT2LZ6ukNyowVTqnB7ApbbGFmmJ7RJby1GvRfjL6LBwyMdFKNKezSYsemPxYRWhXj52yQ1EU1T2cAL",
  "key11": "3mVeR62fDaqphSZrz585k8bzLb1rk4JQfW7Q1zWvDxKzmzL9Xv6DoFpg6kMvw6c9UhUSb11L98qBA9Jdeso1NTHn",
  "key12": "4kXEQ6XiCFbyoTdXJwdmAuUTcvRsvW9JCSXtGBhyuLH7apHaY62GFwHXxRbLNs4e3FnbC9CpHvW5CABJjtFRLR47",
  "key13": "t5CdLSbnpPQubESzSjigjxh9YJgiBKmH3BMqY48kZHWP5GStRMqZTTUjuVaRSsqSNtV5GZ5s8WMYns2cWZwDmcH",
  "key14": "449ibPeqPds3fnXwdXrQfoV5v1DVqgsrD8yM73F7ACCvMjKWkDTEYwY2prP5EK2Lh3KGr4FmCXRNMqUNGSsCa9c4",
  "key15": "4tZKn7tJKWYRXDHFVY2XYwfXg4EAeDLYHCXnLY8E9s6jHxaiJHmwnGPyMGiGGQxqatkL2kiu9XofUjcEu4QwhEzG",
  "key16": "3HsqYJ2tr4cmhubsSgMCmLAgi72wW3cRSYzyp2atfm4EYeNqQbFdCQWqrnxYYJ9t6vRPk4NyhyF7RABbHMdayGhT",
  "key17": "2VEDpRbQJR1DMvbTqj1mHh4Bp7VAiDx516ceW6EJprk55jmDKxtU5M4cog7HwZ2hCLG46TSEWr9hWV3c2DaEKj3d",
  "key18": "2WQAbRRg5HqPGYGFmA6EBksF9vWWYnGDgc67Zz98PaSCmyuS83Te6MZcdC8tLS6TEN7oXhA2ErxfbU9QsgkVvdWt",
  "key19": "4kzyts6JHBpp3KUp8FvcUP7eFCT7Tg4WDgS4qoA5Qp2kWL18jLKAcjYxsXoVYYgwe4LQnW37URRBJNRnpit8Mktz",
  "key20": "54GK7fZwZ55mVCgNMvhnLWEZDY3CqGL5fQvBagQV3VRFC9UStxReE6Lb1qF1Z8LQCyHseHcR2HG3dALHrXwiX4WX",
  "key21": "5Ajy2v12e9r8U8VrAnxPwhU8jtc2pA78aPQdKVC6XxLZyMWKgfVdJvXHsG5bGu5v27PPbi53xrZPdi1zEEmwkmnt",
  "key22": "4zxW1NNvamyy7Zes3uBvmEFGFW33Dyht4LcDr9NrAo2TkqWfkDF9mfdsfrboKgbYmkysWrr4MpfXdiZPGhWqaMN9",
  "key23": "ctrSmhAvNfodPRGT1gT4YCKgaSxD6fZ2w3c9ruaWa8ievQYfJmxxXa8BMUPGgRY3tfgaX8kzhSCxzdH2y1U7osx",
  "key24": "2BkP3BxAtGe31shkzn7R9dYALy1YavAbkpS7hpdLHZ2cNoysgfSiLanqMQiboBYYMES9ne12Niyn6Ak3VnPFuSMd",
  "key25": "h7MkSYHiLC688SeziZWSckdrN2FVbEG73PMkuWdBVuwAcLKz65PLeqVGjo3XErWyLbsgihhBBPvDUPq9YTRdxMZ",
  "key26": "2eucWZkCJQHbkEArGSxSDR9jWZaoLZ38WvfUe2ZZY373H1Kjt1FT2iRGouSDjMg3TfDmZjygnLB3jd42LX9qnUWX",
  "key27": "34qssvA9dbxcHRKaX3bPrFf3nLn9UTZM7qTC6armukB9hNvFJf28WWzEqerrC8JZN3wBfQcBJPBdwJUtePpm14QK",
  "key28": "5b2LXsfupdtfB5Eg2BFRSJyvhzr9vje9ucxdybu7krwW95rEUR64PqB77ZC2Q1r7XDXjhPFqow3b7i3rJuMYub7T"
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
