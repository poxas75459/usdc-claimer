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
    "3xngAwWBdhy4xUZHr3cvSjm1jMEBQiuPZGAZQTNmjwHyhbwtFfHhJVSgmgT9vEtb2gEq4Pa5DHtk9yjzx2sTJBve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iSkphUcDfMATpzQE5xD3eUPWu3xtA9GAymHkm9ANJDCWgxmZUseWoTN2JY4XRZ8dmJqd9wmBnEB5pGbuCsJW1K8",
  "key1": "5bBEwLF7shymTJtRYuA1VNzqpJuFYAHJVgRMbkdGYXrXrYqyp5jcCoSQsR2P3he5STRTX68TTGGvgXGNHNnW1M6",
  "key2": "2kmShqWsnVkypCCfH2dRzAS477LjRvR1zXtaPMgdWbKGxMen2VDY3ahapjPFbTZWjDHZmkEyroMh1LChwDrGRJiJ",
  "key3": "AWy94v9p5iGgTqt8RiK8PGGiUFeCff8cVDgSrP5fNVEScqaj5PCsw8FNzBNBcHTamWf7MamNogQhNHYvoRP8mFr",
  "key4": "3SBApV2nAT8tmyzXoS9ssDTpYf9kXG2EX1qUCu69R74KrND12CPEFtCa5oE7pQFbQLWn8ncvRaWwHaqoiR4pm96e",
  "key5": "58rNRwf6sSdKNngEidwJgAKqJ3M153dP8egmevD6kzsXQcRVnzmB4XJYB85izwmajUEPjReRc4p5JWP1neKytJK2",
  "key6": "Wwv86goi9SMW2JzrwXqBXzK7ytnLc4TAukUatC77fSxxeFhE3SxDXebDjYiJq2bU6oMNzvsv58b3xXQCud9qrQY",
  "key7": "3G58296wW4V7gmqDBnSq95UQ4LDAsYVy7bAjJeq5FdxjYi28Exh1uw4Lcjj9Dvn7t6t5CTxWp2mYorisQmg3sf49",
  "key8": "3gdDbRHyjeUm8AoJvCSs7ywDwg6rCAsg2mmQ2GhTR4aDo1ATW4npBncS68DqPBSqEMkcHk4TvgqgPfk7cdR9Cgau",
  "key9": "aphsFZHNFtkydvdZpXxwtEg7owT8AE1uabY1yHKVXFE6vePckQukzTPNLUHjhbqsS8HGQ2MxCCENkeZq2zNkBES",
  "key10": "qwAqpia7Ksm5AZwWA6AsL1heiCUL2ZsSVWaGYW8w3cD99kaAw4BxwiYtnW6iq2rxfu8LdevhNkQZgCHKmYTheMC",
  "key11": "3aVBMF5sRDesf2KABPYFKnNa6qhHCx1KLuGz6eS5fbct9gtS6dvGeuGFVJVXWtZjVWW3uLKyAfMfKWr1dcYSnXBu",
  "key12": "czmtG9L6bHNWfox5WiTKWVXoFWgomi1SM7gLMiGoHtkLBKcxW8dy4bQhv3aVnsUVYinKCdYLL3u7LzJ4M7UdSdm",
  "key13": "DDcQJzCJo2pcjUgL4xLBjGSMBrppn2dyUv2thVd7jJ8QqTqXNy7CCJ5Up43jGGb3LunMU5qrUZDBjVNYY6fU5ZC",
  "key14": "2HLFQdWav6NhsPmrUsk7Asu9qdRGG7evPxNCBHSpnFBxFhMcYb1VvUALPJrKTrmVp8dYiwUXK1dEJw4GfLSkuPKG",
  "key15": "ohJqnuStj41XJ8y7myP7Jga8ek1WuiiQAasF652UR4uZSjjjvVygqvBgUkAg9xQcr8ASFNCYBRULDQpPT1VriJZ",
  "key16": "2uHFR2inEPCrnby1vNJ2mTSoHoG2qHDzvRxM6zJBYZJNq1EotUt7WC781wxMmtxfQzN5nwrKA8ESXfcBrnRYgDEN",
  "key17": "CDjCSKrm2U7XzPDTJ13TntyLeYs57GsAJywtQAKWBcf5q6Fyvt9mK4rbb791ttRcnKyuczNHpbU3x6nyK5ZQxZG",
  "key18": "3j8twZ5BqE1Z7LLikMYAhVT8a1TGUpkoowWtrFBeLS4XwYzyzGWHx9pjmBcSSsVam6gLa4HCQ1eaJBjHos67tz96",
  "key19": "52CK4MjoYS5HBnbTkWAfxjg6Q4CbKAmqakT72cGerCiaQ6kJhZ7C6SapHYt3vt6XTwtGuMNbPMFyZbZWpFM4vw8L",
  "key20": "3gSvyiZFeEPEsFP11X1GCQYrCpPqzUmUSYa3Yxf628AKcUomkbD2dUYzigtwrfiVkxW9memvVaBz9kFkMitswsq",
  "key21": "25RQgA7EWUDBBdrs3yMogVSuLJeSQM9z9tBgEnbs2SqiyBBwzREfTdBojV24ZiNobGLTM8FRR96Vi1oqYC1eigWa",
  "key22": "3wHmzYLoLDwufuxY9k4rtLCQAvYK4QbY9Tkds1N2nhfizb3p312v1zq2Kve9FN8PBb2vhbbCq3hnaSkXm9gevE2n",
  "key23": "21Gj2jgtrSqEmU16Uty3RbgWWJb43Nand9anM3tnm2oBwfLzyy4ToQCeTUjMLgL85jwmFvoxRYcUHJsZnVLboa3d",
  "key24": "5AoLoAzinWZeGbbtkamuKXZr4edL6fQH9oXWibe92dd4CUdoFXvP8rHkdaGkAteMgtY4Lc27Hcwbr6wmYG7ijFdj",
  "key25": "368yq4B9SMbALngV1baqUAwkf5z5MjLCPSPvXuDH2GR3Kdj1EDkhYNmRpzsYm4XDwKrWbupUTr8ueY9MUjH23Yfw",
  "key26": "561cZmorGCmBJAZerBWQ1EBm6YBVX2kRKTF9KEGphBNr1jpqZiF7tJ5Vkgn2H6uib8p9fRtr8sn41GEd2ahH3Gu3",
  "key27": "61igxsbGzXihzHWwxvivqi5SQpKr1SCkVnLNHJYUN7ruurSVtJAftqRikzVJbmUz6UGRBzZPvA77MFKb9gUcV5V6",
  "key28": "3bHQnmWudct74w4FGiCFnaVtqq3e4dohS2kMakWjJAzzseCcqLsf7ZBHPToM8MQs4G5CvGAimBJkcv5dR5xeMw6",
  "key29": "2SSUnNq5rRAuQsuQjuZ8tnay9CAHJPLBddK8BFRv5VvXF6KUMCgTCJVtHgkECF52KgL79uWc3K3VcNXqCLX8edv4",
  "key30": "Gj67AiRG9bdCqJPkgiXzXvreNANnyeWL6pDvnbHKBDHzEym7gR9GTdp9AKM8xpresVHTfv3TiHKufV1eiYPck7Y",
  "key31": "5AANLuy1X9chQ64xfejAnQ67CBfpTDv8tv11FynXmmgvnu5hZezZUzv6gv859Lq3Dfu6QE6XXDHUrKByw1rkbqx4",
  "key32": "3oggCF74p1QMWbWgdE3XfxsU29VxjvPq9okNJbnqZzFdZPrBUS9SachgiC9hN5n5d2e6WiME9kg5s2Mz4g4dDVeQ"
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
