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
    "eVbKoAQAncPJVmNoAMWLyKX5g9TxX5Hc9WLupQv7oEKmnfbRspFqqDRCcfdcYtbnfpyXsusW3XPtK1a3UYY8Dsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLGhcdobACQL9LcJZJWdRA4rHpN1bNJuuzcUZ3rjug9juyEcFiynj8Eamuy4oKQ3j6pg9oDaCdY2TnRAkquEmC3",
  "key1": "2RK4BcCDkpjRB6XHKiHovhjx9HsNjFMMBZvu1vNHs5GWTtAHDxGm2h2QzgoGp52pAmbkPQpYAUKPNdPpRqyQLmeF",
  "key2": "4V7oW8C8mZJcmZqw8ir3h5VuuLFm8qaMs4aaAetM6tdCt6Ja8B9RpdjEz3zxLDzzTsZdqfBuKfgS5nhkEP2gW74R",
  "key3": "5cMYa5Hq2G231aXynMwsQJE8vxBMZFdAMtxgJWT4TX9zBQ5RzEHDrBHY86GVrdEVMsZtuCr1TbPy7JC1dd5LCz1Z",
  "key4": "3PC1am5XEeP1AigCb7mH7PUmiy8nh6AsRuN5g3o3kjpBuWB3CBtijQLckcGWuTtSJQ2LucCuG9CeUgBDmcsk62i6",
  "key5": "4BTxhfzvSyGT8hyMgFipy8ADAbX2VJsXKVS4R8jjgGcDrxcDRX1PLRAjD2YCNN39dqWNGLtBgzEmSJXFfUtfu9XD",
  "key6": "3z1erSyzhD4AjyWSeoFjfPSuyPqfZVFTGGYFmjKoPS1q2LXR4zziTqEzvs7dsZHpj24xCZ1pVpvGZDntsLjFec9K",
  "key7": "2XH62XjxbP5BoHuw1YQ7tY3ZJWcjBAYKyLNKN3dX8kTXf9WriXBFiapEHb1ztQtonJCx1sEMzZmm7FSJHGPniMvb",
  "key8": "5AuZHfCNHznz56hvuNc7xH3pairaQa8BVbU3a3364YXaZCcu9jdezN1raRCkCsJEu2DMFfp7K4a9Qa5aduay7kzw",
  "key9": "jXptoEiZyRygQmwExpidTNT1cZ6EKzmmB7bEptE2txG52okNzhYiKgwYKukvMSR59RZmFYceJ7RgsL2CVomfgyy",
  "key10": "21KBVs7YKdmQK6DwjQNbVfGkmDSdk6bL4FYJWatJ35dmFb4KKKFnv599sPyf74StrQCPj3jf4jneWsiWYkvQs5rR",
  "key11": "3HZyUQYW84f7584cyuM5vmh8VQP7VfrdHKnJ9NrvWqqhfZikxxtzPMQi7sSt9w7668cv4tH983DTJBwUEbqPvsWJ",
  "key12": "3ztKYRzYRv7zJnCC5kPQugqNdxteKev8o4JEjANdQ7EkWB7yezoUv5xofoX5NuqDxdyWa5m4fKWJvVeLbLvPnacn",
  "key13": "546fCXejNGbKxdmLsqkFS4kcRJ8tHQUiCcPk788byDJyLYLuxhmDGqgUdyMGjmWunHzfg4MbdkJinGQa1uUiTs3B",
  "key14": "43SzhA1co7f7ARPRpqYZYXiBwSdr8jRFxaVdbA34pfTWheULx13v1hu4AVcBMWEXZ6E27STW9CuiN75LM9EXtTR2",
  "key15": "3dGWFuN5DnSofSSuBwY8nQW57AdH3PVmx6fKTZVHroE1cAQ4LcU6gc4w93Ypbm4RNtqSroMjRuPeQyshMxgXD5km",
  "key16": "3a361NBywHb5bUCnJVJeTh6JcbnXXsoDq6oqUy4PaGneZTB6YtJcpkFnA2HgbA5rGpmTfsapqCBqiFCGsCEGohZK",
  "key17": "3HrEh2tGUT8Sxg8wZ6tWW6X5jAoZd84gYXy6DSqfjxAZ9ubp4KbqrERw9thLPPHoox1YvmKyzjQnMFoqJyyziBHE",
  "key18": "5YD1UdFCSezWTwhZsevzjfPYGeYRgkFt4FAaKqaCT5z5xqkK6Rv2xMmh2PZf4qz7ks5jmKH5EsaDT9t3guaPFZzj",
  "key19": "6nykhgyC5EBShcjdbZBGF9TpMVebuHhehXzc5AfGYPfAaFQEhZRMWMQoXWkL6TLWMvJeiaKAgMdokaPpe63Ye81",
  "key20": "32LSHAMkWCuXcQcX3gxbxxKh5focHAUxfWZeV22Wes1wEu6L7pLtQm6Gw83Uafa8ZzXtfUjDT4wH9uc8DGJgqs1f",
  "key21": "47qQtkMrLyUUCvHaUwycq8FaC3KX6LnfeKsmx9VesQNdSGLqgUsqcFj7N9bmPbkuJMDQi1mMxTvLeC4qqEBAAWcw",
  "key22": "rCgXrsAFDs9jAoa6xSjvZSFe5iHYuYEBPioceGW3orG4iYyDbD48iGkJFTK6QGTeuxi2RYPpBhV4q8dwXtbC4FA",
  "key23": "49rwzXoZNXPu3ZRewPB8PCywLxyoD2P5HZcQEjrSYxmDGGHXMVSg7quH7V317rtjws6XiLAU8q1PgRgKFAX7JNBf",
  "key24": "CQgBWMvEbVwvhubRMPPwmBUYxrC783aYgdA7YcZZysuXit1GXveQEcTfLSKZvqU5yMkR41dX6ur6aE7ZhWN1kWS",
  "key25": "22y6FERRFYMmgSZV7Mp8L81CdwbvwPED4nFdwY3BEC5b2gkd88iv8Y1rWU9gp5XccXbjGqTWNGpLxds1WueP3yXT",
  "key26": "4RNdtuyyeFFtJzSmWQd5cpE6tbrFr1tm51ErZFNz7QU9gNb9cUorGFd2sWQ1FVLQXikHSDFtBKC2akTvfi2MZvPY",
  "key27": "4NfWWyF6rN4FctRFgmHBWU75G4T6ogTWGCcnLKyYoMyVCZbimA6vbZMjcsXt55zH2gre99XA1uiTzn1AfAipUGb6",
  "key28": "2ey2c5SrLqFU8q6sogeuRjR7zaNB1gdLATU63i55g6JVG3waYafZckwnB3sNq9sN33i8tuvRThA5UpRuVp2ExBHb",
  "key29": "2MHfi3ogxs3KRkjEFG4U3995vnWVXWvSFX1eotdktNRq5pk6EfeSAXNKNSpBTBG8VWSGe5khmksvNa76S7vdsNCJ",
  "key30": "5szdzNqAQEDXBfZqoPDQAekQnSyB7TSsCFRidScMc9Zw8XbXyQexeTRnyF2U6PSxrAoTsj29nDbWWaEmwMBu7gMx",
  "key31": "3cUAZFcb4uao6K4sB8ozNoaVbF3aFsyispq3BGKoGMARXZg57UssMwTHgBR8D8TcX4gryCcPAQ7LGPWSb6Hq85t4",
  "key32": "3ih64PnKkrEgeHPDVaPqa4b7DM6yGUs67ZxXyeTmpmBPMCYWrSpu3RAbFexqU8j8cY4cv43BXhPgTwgepFCNWbKy"
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
