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
    "4nc5gtJ3S2vQvhzMkX7XUb95NcEAtRrq9KaqdxXgXfw77eVs4QdC28X2M2u1vTMGvpoEwaf2gpE4zx7MwGzfUPSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ndbA11KkW3aZFaTr1icq8RiZqctSziA7WacP2pZCCEckAgvP6EdweKHNTn3TRLakMoNpttLxfKNuP2sqPVDjrH",
  "key1": "4YBy5YgSrP9U3QRX8tFoL5ngtDimMkEtDCtgpWYv5kBL6UgBPVoU3wnvEephfx99EyEQ6Y31yh7oR6YopnXVnnjN",
  "key2": "4iQytWerUAmsD1wRV8DU9QUgRDDNjkMHUBPxq1Diwrxq8hKq72UW3bRBqFHMG8jaDHX1SbYxqQhSMoHKo7iSSRSX",
  "key3": "66tD1JgczEso1YyFPx8CCVC21n3zuiftuyow9c372RLqJw23myojnBKR8nd3WSR6ryjr1fnPJpQCFg7saXVL1AvN",
  "key4": "5hhPZuobrxLTgKQQTQxWfHerZ2XNyzmKYYGcf3Q3yAniF6x5RVFYgb2Rxw2PmwnYR3jo8EmscQCHLshLQrz6pKRi",
  "key5": "5ZnAcPCEzWqab8Zv1czks3hS5ngZmXxqPiTnnKLGs5oNgqjWakcQjPVkepA4TrvEJYF647naRi1DM6tHzVYAUYA1",
  "key6": "3Vg6nmSAFa2wgeQV8V3aE57TvpCJJSLrLKW89yjzY94zNgKRBecVaPi7NbYja6DPWVyv5vxjjK5XpdFrk1BiCZxJ",
  "key7": "3F5HHuMz1PhwwzVNAsEdyx7QVF2TEQ6nV79yZahcoYeowXKqSRFaRXGCqziAC3bdbNgRfNfX5kDJSBCkZudYAhQE",
  "key8": "5gmPPEukXzjTDDH7C1WQwsz7JyW3K87wWdC8r4teKK5VtisTkZkh7DErHT7Z3pu9qqzLp4E64ewzG9DzsATXPfnV",
  "key9": "4HSmbxv26pjniC2NuxkBbSfzJyrJMbYZQZUkV85U97bNUtMCpL4wVevbXJTs2S2AU3tHx5CG8WzYg3C5VZQaSFb",
  "key10": "23EqLCNbxw7CT1z4QBW79VXk4CvNBCBPT1ZmwJUvkb4W5w6Keug18opUd71Wtm2xbFT4KAT1JnwX4Q3yGvrPpZbv",
  "key11": "QwwtevX7sLFPip1TadtXCZYrErc2YanFG45RT6LfzpwXLjeGvqpqqPzkUeAc7m2hoA6shBh4zBLcLGvbNKZJi7y",
  "key12": "4mhLDErQb1bBC8RdbgfMuFsDnSgz1rgdMRWaGqsKYdipD7SasiuUpkgB1mfQM5kwhYZiTmPrsUkjWH2gvhJC5Eu6",
  "key13": "4i29pJ3xgv2sbQXJE13u3WRa4rzee9hZ4goKgefEo4LrEujYXzFhq58bDbaSwDJtUfcdV6kqabh4yzuPmzriC4BZ",
  "key14": "g91EtHpX7UkWbLNy4HxaxYEPb8oQdEUyr4Kzuywfpe63eUmTJzyzafgrP4D8Lgc2zMW8yx3mLRj6CxBzWfdQbV7",
  "key15": "3esNybjnr2V9AsDQgM93uRVbzMwX7ZDkyjVwC6vRKzGgZRoStR1pvQEwaG6ohktMR3a1C2qaLGLsS6Q4vG7aZJTz",
  "key16": "gSKRRYvGWQV8ZYmUnNkkM4TJ1vKYrucbC3BCTTWFhv7FRQ5U8e9EFEr2PMQ7fGanJxXKqVNKmBARobdy33kgmDo",
  "key17": "5dmdHaYeF6a5uXsJapEdgxGx251Wxb3v5gonEt3eJSaQTT5rXbJxbFjTRmhLGewSwxeECcCZ3ucfWgv5mBBHCRKw",
  "key18": "4A3kQRCGLEhM7PaFXDfGEtHAHrNxBz54YcjuUKyMKLsxKscNACRhqNAvsMhqP7drhJaoCPprDagdGRn7wfK7tr2Z",
  "key19": "44abkP19n1icLxNW6bfEuUA8tRrWSib8t794mPVmCfhdSwx9VkcG4RV3RQGPJZUh5LuQucse3NvJtJrBU23xTkko",
  "key20": "5FbnnrNfqqxbjnRPKxVMUMPyZpeHG2s1VeiD1jZd2Dt4fKseARkoA9zrkjo1CVsfcHtsa3KcEuxQYtBEevGwk6mB",
  "key21": "2r4hdW5p4gtJeLb8DWf8L3HXC6SVGEmYVHs5fZmWK8Y9nAm6p26cnHph3gnd6pJTkZuuhyUwTxhKfZNRrw4BTdQZ",
  "key22": "4DYW6ce4iLJERiMUPYBY3yfR38gLhGeifbimtnK1ZiYbZaqcUWQvZgXBM2PDzgGuu4QX2WVGsKFFYrT3yYa8hN2g",
  "key23": "4Zq1nCajRr8znrLxSc7zoPUeHBfd8o7BmYwyJVxgXmePu72BWQmg6x4UyvNT5dRM64LFyDmcaoAnWxS2nZjKuz8B",
  "key24": "BDaC7scx4zTV5hYeZoBD5En9SYMZcUTrE3zGcEtcchagA6eCx5UcQmQR9XRjJ5ycChxRHWA3ygMjc9xMmEAJB7f",
  "key25": "389C6aabLHj6mPGYZmNScwsxstPCwpKJPp5cqiLmMdVqyXMAbwaTmQjfKC3ZG7sc37U14Xmbp5vpoGyvHzmJt8WL",
  "key26": "E2LXfpcKrvXGxqHeYBC67YUdQG5fFnNrq1tBvFd5bttrwFdxYdrAhPGDpVwwMwNK3HPtUrUnzXpGVyoddvrs8BG",
  "key27": "65DxfGAeDV7qy49bFP2Y5scAPajoy5hCXn2GspHDMQiKRperfaKnYc6V9VNW2heHwBnMfDyPxPpUdU9TdjsqwhZk",
  "key28": "2Hsq6JNmqmmfnxpqxEkeJx3cqkSqikszrhaBH1KbF4ZC26XkqrqN29WnEbGaUvK18RTMzqSUJ2jUCCdTSpSrmGTY",
  "key29": "4uZJcAR1PcHgPxQXSy1kJNrEP85P2GK4mJhx9NdBX4Ca5oSvBDAPwX1X3QqiQonS6huuwGko5Vuvat4ErHKNSjzx",
  "key30": "53U93BSBwidshVTJvWgmgXm7F9maoiza5jZv27eSiG9wcN5s3VfaEHf8HcPf3rbfWWQHSWYe5h6M5dvSx22u7375",
  "key31": "3bqsaisGnCy5oJaY4Czb9Z6eDhzufYW4qoJVU6KiFr9idT3brUBFUiQXjExr4zR9zELW29n4Pju3WQLe7KMG2wVg",
  "key32": "2mvCS8SBdHNKZZ9XqR6c2EQfe286oKtQgUurrDWgn8MLkHht7fib756hVoCEizhBV2ZoivrsjnkaVCpJMQN8sgvT",
  "key33": "5PFY67p9GfuUiqq3vPwcYAZY5xxav1c6GfUtGh3pHqfBtjCqkvxNuD1cSR1Di6FJdKjV1n1RjpeMmVYLSezxCivp",
  "key34": "rrVL9cRa316DqTJVtvJmVqtYeoFsbJ7tnU7x1ZJ95jdSbJ6qyXVR4J9o3pDbuw4NGiU2QD3mSjkVczqxPdhZ4kK",
  "key35": "2Pc9wWrDbb66bixtTNYhuq9GgMT6qZNCp54jtf2YWfmA4uTTpV8DDPMfgDyCva4z42USUiAsr9AX3FhWR7otFLbS",
  "key36": "3WBHExxnLfW6VNsmy1pYHgDJFJNrQR91HkbRTUkN9w3V7zSH9wMa9BrpKSpbKbK9uBFAyEbRG39G2Le7kjC64G8j",
  "key37": "27zjCCnp1mNrwX89inExeLcn4N5LZVda7wDkGXJTWCHkHoCM1nyZyBa65J7i9vEc8kwN3CNsMiXo86mpFWDax29S",
  "key38": "6Zqam4AiiwvVZBFEGAuCiYofZFbGNcVd6Fy9bT2UzL6S7QrD59AX3YVR1K6QFDddqd5p5kqnYxHP4FbtLCY1eua",
  "key39": "319HQ5qpa69D8HyHbor4oUAfQqPS3tt9VmYSKpBcAxrPvwJkku9FbGTx4SfyQWA7PwmSdF2NTZ7iGJMkyWJqFPbZ"
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
