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
    "XeU446YYV14vvD3HhwqcfA2XGfdnAJ7mMEzm8bYX4MUHXYJf78pbcJGf2wuqaMn6gCjj5r1TQL2rkCpubuV4Yr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NU5WXiAo16hv8kQMxPn1CxNNtzdTwJV6MMhKUteVnFNTukAFiMMXZRPx2bJCPA6ukMaGrtDrxpVLAQ9X6n3ggpG",
  "key1": "3Cx77jLJEVEmyzXVoGaQvZMyrVpEeaqzb8viCBaaMYbxJxhZAVTBUSUEPprKauYmoSyF6XRz92UruU297F9zxMQg",
  "key2": "3ovJqqBgK2KsVXV1dwXtwUpfyY2EyzeFniCd1ZFi2DCASkuXWdfGAoFcKJCzsaPukmhrx9bRgeexuEC7GraUuKHD",
  "key3": "GKif23Jx7ZDRLrs1NdScSFePg2SLHXogeFgnLHe3R3nashbMUputVjatRf1GjES1JriovQSfyPo19nbJWA6hHuS",
  "key4": "2ASqAgohbivjgS46b4fMUqb9gknYskYrMKm1uCb22FasSXV5zfGBtYvQkGLRy3fnBjZn4XLiqtuUQgiQZQeE6ysb",
  "key5": "5YxMXgkfCnNeQiQSweaVNbdHQ3Jm9boL4h53SNeTBEwfs8zz8xT5mKr9eJbaWVK1KqxVcPTdsXNLJunhiKp7HePb",
  "key6": "ehf7YEyc42uJpCHLCbtsGicmTwsXwMfjaKgHhk6XfLKpRwT1o44NDJQwPXbM1sLgcdm9A3NQVJVSKyeF6kbxkDm",
  "key7": "uBRutQH5SwNDWu47ZswH28HyA7KQ2rnvpQ98dVduWk1zeh2KBsg9HEkcd14BHARtBw9Z8UXZ23QME7Wxp814hFE",
  "key8": "3aszXutbp32gtuUfxK1xeWASeMawyGSntrxigHT6HJyUZVbqZawjme9c5wSXvWjzN62J35Zz1i4N8avNt3URNgA",
  "key9": "txuYzC8Xvkm8GiM7BSBzSLgmSwkRwMg6qqPyTV8CUk8Xa315QPGDN6SmRczaEtHY6CBfdCuxX3Q4sbXhcxCKSV9",
  "key10": "3a73gRW8121EdrYAGhA9MhHKQZtbuf2bWDSMG9Bjf1ij2mA9BHEMGSrk9awtbycin9uuNrVKVuzsBP3mP6pUaSEC",
  "key11": "4AxMbAFJK1Kjjd3m64QeiDQmCQFh2mbNfqkeeNmHo2VUqnZ6Yi3opBToP2HQNBF3KDPMTm9EESjBePxBLCifNxFG",
  "key12": "4cDzbTQf3HsziZNcGDJMBpFnVi5DAP1MTiezj7BsTypu6RHF5DY3fSAKNNyPsUYzjxbeKswXsK6k4PyLtPyYusBb",
  "key13": "5aAY2mB9JSKzEB5qMdy8pHqySbJ1souX54ERd7SUx8EufcW8ze141K7CGPqhPJLVWgsBD1NUn6cSpeH5eWWb9bKW",
  "key14": "4iVNVta5nza3GRxsUj3xuFSWeFLyV5KcJpYjQTSi5aMdZQeeyfQ6EfnoxGhRvamH1r1qn2wWC9Uza7UBAS4MEZty",
  "key15": "648PtBjSrp8hJZfMDVRLpVWFYj9CnaF91z4RtzW2ho4dzNFG3TVxT5hbr36a54BweHxaVRbApgPNDxtuDMqZWAx",
  "key16": "5ABQDeA7doxMeQGsVWNxVuH35Gh4f43mViM4HLmvsPA6NeZTzWM6WnBG9pE8L8i8nRLXR856VTQbrWRKFVMGmwC7",
  "key17": "32FVjbW8QW6JumqksR7cD66FWpnGMPETSu2d44gRg7Z9MxtKR6cGsVZ6SRk2HUmD5L8pPoG8qouqe6TbeHz6PGpM",
  "key18": "2V2KxYYaTM5LKXatVcACnSfH9yujQZ7AnNbrvWapvTR2AHTLmhAS7is4nonGgutfCUzhXkpKD9xoDjUaQD8d9R8a",
  "key19": "2NEycVeo6gaGopcR651CnVjgpfofyotkRG186TYHB44aJzV89sWtg4PCyHkJZ88rhB9si7rNf1G6KkQpjwMhP7t5",
  "key20": "4tMqSZEmWwCsNANwpyNJJohSQ29endjWqcVBWJHerPjsyHWw8MCMPDMhCNdEFQum1qv5xPmhPcmCLbDbFoCnbASk",
  "key21": "2utL4Eh5fdcaX2aJeipwVNsZLvwTLUThkKLXYNRjeL3bMByeSfEC8E2xynx7E7bKELuGRR3yS3dUu7qUuq3h7f3Z",
  "key22": "5iowMXq6JvPS7xV9myfFnE6PwgbB1zJXQBmV8ebLZkNpdTrvVa362AqNry2hhcfjaKhvQZ2x2ppdeLVwmS7TGP2i",
  "key23": "3ypCTSnRcg12P7K8aJ1jAsKQqgkkE4XbNHKejR5xnjCAY7mbobZYy5BHGPRU4ESUTuN5MscdThLg23x19A8f5pGE",
  "key24": "2aZ7H8zw94xitx97QbFbpBvuCA28dhqMhzhFGwH3ujseArBarULb833tVvGUBiEmZxkXRCNgFTLJ5DpsyMECzWx6",
  "key25": "C9dtY1tqURjyi4xxhDghK2BzE3HhBJn7hVeZQkjPVsLNw9hZZ6GCJ8gJConZwE63FwZSk4mXFgSS5kX6GNeXcvZ",
  "key26": "4BfacyNfLDYajvaeakUNBwXK2ZyAKwBpsbYa9ok8mwr7vEtYdQQH43b26dBUYHbF8HnHQkbJfFSzo3h3hkmdqK4J",
  "key27": "3skCtKjRHjuzsFEUJtpxtM6PNTYAuiFvdTsye3y196SENygJbuunh288TYMXVNwizAU5t65bHbbX9rosFUH9Psop",
  "key28": "fUL4xxdTxiGYXNg9VciixREqv5BoQq6cE9ir6Q4GtKkayFEbSbvZyBbhmnGJswbsXBKcUJLCvfPXDaXyhK5jYHW"
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
