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
    "4tFJXmZbaWJiwNSjwQZBiiQQ9mYjipkhB6XSicLHtQLSiQXuYF1x82bx5jVXdtwHfgQJsFF8q1Q7xv597XyP6neQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jmuPCUcRTks4HjcNEsc1UEEbhViTQccMDcKyJfuUe3VkCtACVbjACwEjYF6v2HDyg35xmbWDGCFzpyb3i7yswG",
  "key1": "52VyxjTmymHh2cCQExQn253XCLpRrVHiYay97mPVYy6rdiWDh2iyaSrdVCjnrmfcEc2J8KtWteLMKgw9Nsgt6GNp",
  "key2": "tiXvkAatMnRdzmPzTbcL37BnVPLVc8peZXFmqUMTmzSKhW6jpZ7AudRYQxnWdo6PMhTDddd8xonuxSPPH8xvDVe",
  "key3": "E5FRLRKVn3v8mrqYX49EoHjnAVdmEnszGL3SofQD9to5hYq5vgR7RBdS5SCHELioNqzi5BPr4qMngrSXtQ4MZTs",
  "key4": "QMyzJdwPGR979oMn4rT1ciDqtehwR8jK7syb1hUk8r45VyhqcMpURGAXVfksjYSjR9L4kXTFbyhReAbwYS94QCa",
  "key5": "2cvfCZjth5rVPqoPDdM4sfH73kJxhDBvwn7NSAhHsPghw7ttQtQNgri3Yi5taHLjxNzE98iAHwQUxgVtzpu6JtnP",
  "key6": "3WsKRh147FkMNC59HRcJPVHfZg3PeJQqVqFiGLhFcou7noW8Ndu5tM31unU2EkfR5f58i72Kuk5FFrAfxZRpwMUU",
  "key7": "5nqxbD5gj76VARCX371j6ZrkGNYHG8pEtMM64qRDR5p7ZB3MCQjZ6EQqBE88iJwFPf15katEmMSUHq246A2pvtTE",
  "key8": "3761BLsceoWvjZDBjg7hatWHBpm6UE1sEKsHcfCwU9g8MCyApKDiF4eCqw51x1eAvAfBAr7ouKJVxkEkpdUYsGx5",
  "key9": "5zxegwtx5a8CeqmbFurbsWNfw3qcqEPzuCKQpNcDEsE8kXvQUeBeWMJPRrRYvbhD4WnxtDDLBKmAonFhu9vPgbA3",
  "key10": "3M79kLUEuSqtNhzH359jFLhFJXRUFdXTrioGuxNHTABwjVHD8TigCvWuk9MBBU5yi4ofuUofipqYakr1zCv6xoxt",
  "key11": "4x2qqayXaG7BGBqynWmodxBSb3fACEYGmjErFxPaSFAuh1PwnV2F8CeNWt6752Xd4pn7npuc8iiUfsokRrxkocoa",
  "key12": "5jQT3BBabHE9jiiN2FZ4Jv7teaJXP84AaV9zd7GLBwwTViNrC434eGvpPUPfM4vsWVpDavKJyRK8hu1MicsQwmd6",
  "key13": "3TMxHJoz18Zvn9PTZ3F52U372kPa67UobmtdcnpUdAdFnQj8UA7TYRxAfi3oadZGegxABacYAHokKHfovdMCaBXZ",
  "key14": "2N9qYGnqnA8BmWAN4Tm2K1SNyMmWVP9L1jJZfMi4gc5reLWyvEViVTo443JEu6sXtnxxJaRSsEwu5itYyb4rGh8W",
  "key15": "3hcb2yHWgQg37ug93QZniShAqnfY7zLf5RYb3ESrEGFj3AkAmuhJPquuv5anHwBDd1tWcpDQdx9KMKdufxJfV8of",
  "key16": "5rLbRzF2UQVmPvJyQBVn7TMvf3NLTa5zcRvExdpDUL4oFjEgcJ5GwUJ5butowCPgSQHByHCySXjZtn81B8Xmhuro",
  "key17": "4WCQhjNqdZjERjv4ymaiTRPXcRDLeRxzT2pzwPvpHo3xAnpfeA5RDf76juoFbSE8R3hqGJEe9EMdFDuRtW3EHqCX",
  "key18": "22o5C211yZukciebdjpW2pQnNVewyjSXELh5Nbxq8kahhVtZtybPjdp5RWcpDQLoHt68tze7v862utxSqj3vCt76",
  "key19": "64J1y6vvj2vpbMxA8qrpbmPnLSDfBhaMv7MtcMwjuuNLQhDAnh5MdWvVeDJkKPeJkGSPaQFkGhJBJKh63BZYMuC5",
  "key20": "4B85EDdbHs2qVZZ5BU85t8Me9Y2TevvC4WVaQBegjwwPj3fW2viy4gHFGRP7Genr8J9ir1UQ9cUrJHV2LP7QHJa6",
  "key21": "3LsXETKchkCKXjvZSzFkLpqXbe7ftzq5G8zH5heJajR4GeZWZHUPAEp1SRgDHDhd7edKSff2oa8tJ7hfrNkPBj8g",
  "key22": "2q5Td7qR5EPxhB2Pbcyu6F6jaQEA2jrZad4TNhzx7iUHLTDntP5nwgMykQxeeWhyZyrL6Z3wzomriYa5MFqjwY6Y",
  "key23": "5RhvAFK93nJP2xfTVaJ8GG4gFRmkUzoKHwoDaCvn1aVbhHJd2jHEpJ3qw8uHqRtRevYxqueqXzq6S6grq5YZpHNj",
  "key24": "4wSuc3zgiPcaHuPkdYxtuMcWiLhBbP5ijreqs4NUaWG3TFBNDscYAxs7M6Dj4Wqaz7J9ApHuWcFyzfjDFmecKdTE",
  "key25": "5bWSDd8m6A71qmsSstq95HHiNxtXgv7gSCXEC4MXRfpMsb5AEJi5BYHuyKnwyVmc7Ra2CByr81npj9w3K2BTbwWQ",
  "key26": "2XRrqUJNP1fyayJTSQrNCSTvpa7wejU36KJkAMgjfbW1sted6WhcF99ysx92DtkECo9oqsmmJegSee7SLRz2LkWX",
  "key27": "3DdwDktQ2ZaM6dE53mZEhKJNxNziKJ51XGDzh7mML5X2swTrBsUverFtsfHhZoJN5GTkWaFqyrHgLsvVqkSEqtQQ",
  "key28": "51G2XDPwg7FW1sdCxYn7aFZDmRYH3Kf9LkgcQ9qoCoU3hxMnd1MaHav9Wk96ybi6X1e7tasiDk5etcU2GLhwfp3i",
  "key29": "5s5eH8DKL2NbZReQPxRsfnkPT9du6mdgMmSKJxoVFfVmuTzJMRvoHLHMRubJDQDoVhKTZQyQmoajWdYjGwGRLgyM",
  "key30": "2J1BducTsRSB9X5rdqLnzC2LxbnANwxjjMGen28c5K6r4af36M6eEWE7PViqYuX8X4YKuziPSAaSokMvR3XE42u4",
  "key31": "3U82kDa9tue9ohmyXixunZUuHfYSkVkGcVmQicWoY4KfQyb5iotSNNPAx7jB6LS6Zo51eSnkeugZ6SfLqbtwS3C6",
  "key32": "2tYuoRkiuoeX53vnyNV6Fh24r6w16717a4Dv8VzQqNEksUjG5sTZb5tAWPPFRACzKtVdkrUv5Ce9yKpUoN5TFEAf",
  "key33": "5uMs4CRCUxwMQsm4jTRFSwhAS2q7LSkZLtHUJpVp63JMsmzF5okNvGX1xcJEP2qRRy25qM53XAf3KjaWK27SefVz"
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
