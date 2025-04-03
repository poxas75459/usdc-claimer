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
    "2xpYqKADEXQ37J52RarEqfAHbpEYRXRMBzt23AbewRNbKdhHZKAmdDinSTaY9ZDefgeVUyxA6cxtw2BWdYentRcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RGvFbJUPr6WjyFdEsojWg5b4J46H3LduGiEyeuAhbggAZZCMzHDZfSyev5MSPhnDpEsLiXogwqv9q5dCDQ8G4G",
  "key1": "8K3Xzu69iPmB6gcVnHWpGKvZ27JLwxxEga7cFPCMQKWmSgxHZpPAMSL2EnfC8SfhePSePtiaptuWLanMBPSfwCr",
  "key2": "4WtKhZY6kW5TBTRmdPr7useu6r1hWF4L3KUdWefYkRMcYmQAWz3vBGdxCtBs5uyZ9VLoKQpkKALpzERnJBwoXAzR",
  "key3": "3wg2yjGxiHHYCFsAChYPTYP7dJhWyXPqe8gzQ8ArxvTpUZVs6YeH2zZd5crcbWg346cEKjn8k72qshc8GgoLDBx7",
  "key4": "fmKTpP9wSQ5sccjnqCqF1XTWUsA55xjK8udwQDnqjyqmB57JFskfDTSxoALBWSD2nGMxu1kHQJq7n6N1BzpvK1H",
  "key5": "3K1snNMSerJ1WJxhnKMBMiUpZ5iREX7rENfWzBdKs35RNRPF85CFx65NSHhDakT57pts6a7b1RRRyx3W4bor91rM",
  "key6": "wqDDjcyGKVY5eEBWF7tksYq5R9qkfbNcUqgMbBYmaX1qvjGodNukgG2hAEHYNdxnqgj7jR1xf8er6oPPhPtyDPa",
  "key7": "2RJFxufD9SfSzjyrEPAGdNF7Pnx8xRuL7zWejzwxaairArPABMB8Gs7KChxvpwqWbwJZEPsFXiX1vGSq7L7NJpbp",
  "key8": "2n4NYsxyD4sGzBedbKuB2m71Hc9qGuDVCpT1in13FKANfM2ev3S7HavhsDez5NNZ2UHxbHxUMm3pguUqRd2TMnXo",
  "key9": "32pnebDVX4u53z5ajd7tDSXNXS3ZA7XNxFWqxHvFamv6QYR9TFTomDo6yThUyAxwLtK8jVjiLSePq57j5fFuv4nY",
  "key10": "4ckCk5cfhC2tmB3pP1ttSX7eQT1zwawkn5pF78dNcDFYQzbDR9WxrnyFHRJCnsxdRoZmC2hZXVJ1Av68yXNgnKi2",
  "key11": "5iqJdgwaccM6iVyeUG5rKVCuiNgrFEVDXRF5y5LPV8zD8KCsPVXpbZFGtMMshAdZoskkJUw4ipHpjG1mGEauP2cJ",
  "key12": "5vyEg86TtVuQ2gGsMprRFiL1anhVaeWE7aoGNU3sChxekovcw1ydUxWWehHb2yr9K3Vp8qhcLde56dpR1oBLK2iq",
  "key13": "3Qhaa6n77gAEjx4Vm9N2DaaTkV5KW8R8HFibDv29jyqRDFpMn31Rx145c3Fe2peWCZoDAEB7ESWCZrjVsqTcLFun",
  "key14": "5AhoL8tp5q17vKT94grwYbzm2HTHkBZoBgzsF4KC5PQ141izN6FtJfRvETXVZWVTMf5hrsDGpm2PVifBdMiGgpWt",
  "key15": "3ybJNGSXjAVm4BWg8fYa5MfTxFu8uAeWYC4hnwxdU7ZC5bzu4b6EPkmkDgdeBdgVuGNuy4dpWvFLTYC9YkE5ixji",
  "key16": "3DcsYLzwMQ6HiMC1xAECSbRrQWepJ8gsYMm34fkESsSKJciWnoooGr5PWfGek3bNdkaQ8rE3ohAUW647uqVXcw39",
  "key17": "5LxE4Zr9rtBSX6m6XDYrpqpfCDd53zUm4fC5u73BD35XD3x5F4NDgQcPPZAgQTUr3T42yY2bd8E4ne8gkkcHpha3",
  "key18": "uP1NX2icEYbbaA2RMx4qsF8sP24hcdFiBXrWBviwiuBQ4iDNTyNkdoATfYyqYtWGD4TdkWPKwU4xuXu3R3DV8aY",
  "key19": "cG4fupBrK2VAJupMx8FYwAKxbsrcRaApvcB3axfFJxQMeiMYVhQBHutp3wHXmtfSC4JeDibce2TLDwUG59JWXoE",
  "key20": "34uBpJpnbsbSBaVHesf1fRRpiHE2nRpV4nGqHRtX1SEWCevDywWXWnHan8FCmAd6MDCt2wjqKvSy9GPkCb9J7xq5",
  "key21": "327Byi5XyJ1JrpthGhraSmaWjQaoJMipcifiY29zUeHH7eNLJzY6CRjJ7ADcpb5DUSHUSxzY1moUYrvguPHE77BW",
  "key22": "53R1jmscXTdBHau79in1LDSYfs7QGgQakHYeqGQJu6Yb7FGiydZ9snXBSJTLyrb3hs8GdoREuH6xMPP3phy5gjkQ",
  "key23": "3i6F4AmWFKwh9y7Kb8wM11GH7K8c9VMnCghZZ23KFakN2SvJ7GM3jnXbDhRbnqg7thTSZsSzXCgeX8j4VofCZiMF",
  "key24": "4Wu3oLJZH5GiSVCDGuc5zPLsbtMUrQTsWYJWDc9QQnowyeBH7dsnGupB6iSxcfLJiL2xJfQCLHk5Q6oTYY6cPtub",
  "key25": "5KH7WoAeNrYKShf6NWwLHca7EBJvUmFqAJRW4zay35kSVW6jpGXnNgAGUm8XqkfAnzstKHhFYfRCu3amNpKX2HQu",
  "key26": "21QjB4vyQfBkK9RyxfTfLdiEn3VS16QzzfqryAbt4QJ5NCCxMzAsGYCgzmwSBjSfkF3N7ma7qGtk9ds7gRgZaTet"
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
