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
    "4LJo4D9kiGDf3FqxVLvTrzemno4chD8r881cThpsUD8vmisSKoz5oAugVGztZfGAWUUCsNrcAtMG4pq1kSJB2Ksk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2zupw1pk4kqVTh5vmJNAqM4EHCvnWp9qNHTw1jxLdTzpjjx3gd91gDXCenS6niVmzPW3epYwKjs1cUoBZ491j8",
  "key1": "317RoLkvBtuV7VStShedqYNGis9uhukX98iajRdp3YvHEHCD6hmHKFTBQ1XBTZAVgY7Vz3rNSyVEwGD6ZkwhSgAm",
  "key2": "58YKJnyU4qXWu8mPhrfWScU6HFxvNFrTd1QxNTCo3VVQrcBJJbFrBdzyEZmDtECJ7vyqWJHLdu82tNNb4AoPHtYJ",
  "key3": "4GubYA2FisghudzTGjVcbLU1ZvcTaaVAGfmu4V57Ps1TFhSqdzXjebfMwMDvdZZoS7334u7qY32VR3n3mcucgCyQ",
  "key4": "C93MZDHuWWS7attVHwrTHXtw3Myrd2JLoFwKyVZ56qLQ7tFKYbsnbFV1GAqBhh2rKzcqit4ZqRrvk4kc5YbMaNF",
  "key5": "5g69wHnmxd1BhjC5fxERpMMjSLavY3hgP5T8QKQrnvq4scnaBf1kTZhS1NqhUwozQyMkqHeWtoukXKF1K4Cp9TRK",
  "key6": "3c7G4Q9CyTyfAGJLiLr8h7EYFtSEg9g75bTUfYQ9udrmNHKLJD5ucLRctjXJfd8BBKrA5WnrWbviJLM5GoBEDnzz",
  "key7": "ChQACtZfHXBePFE5f9Q22k9xQXneTPM8GKJrdBxB6dRMqCigpPxLr9PAo74DRpPGKDb6qzb329cBwq5Dv6syhu4",
  "key8": "3P54iKWoLxYHiECKBtjBiLCWoeZpmx4aDmLCxSZL6oggU9mJiLbrJj7d34kVYRqV2Eu6bJp99pQ7f9JytAXPG6FJ",
  "key9": "4ebVsdDtB3wKQJ3SV4L2Q513zevVTCzWsiuR4dGdroXTm8qNFY1m56rEtKzXD582KzCuC7DZwcBQHKAU9voUS1gz",
  "key10": "2CUoqqx5Ruk6GS9EUQswztCTeT4EUuC3RTmE2ZqePyuwnWhLgcDU12PhP6H7pewJNue65TVcLbw1gqgJKrrEtuNw",
  "key11": "2Hk8tDqT6No9oFec26VWBdq5vW7jcW7JzKsy9iiYJbRULTFWi4v6rm1jDvk7VMyjw5HTk7FAwJdTb186hRuxFbPz",
  "key12": "4h7aNHMGir7vYKQydUiNhyC7hTxxqxLUw56X3NoUmDDiQ63xN6YYXSfPU2MfDFwqmrLqj3uSA1T2TFvwaA9UV8ep",
  "key13": "5W7Vb6EFynjXAWFvtSZHWrG7geHSh3bjviLzJRNv1i9eoHvYGFggZeESxFpa7HkfftsfLYNYruC3qQkzRBKgB6GM",
  "key14": "2PFs46d1XWHpMsF53gePHzJ7cjoRoYkjxX4173yCueBsroemPu9Sqr16yEuWLrPPrCZDDxshmLH9mV3oxjmEuzPY",
  "key15": "VA3RAY2NJ4xHwbieFM6haRcYCwaAs4LSKVSMpUrGEn7VfPzJv2ddgS8BEyMsbGvgQoxxHNR6GWnBy6YZCMQwEjo",
  "key16": "2nL7NEyPAr7wxNb9Fsb3D3xwufZfi96trFdAhoDHamB8m7y1T1AoP2SGcxZ87VvJpFwDkFtBXd7KRqQ7CaPWwiym",
  "key17": "45oXe9ANXGBgPHDC9ey9rcnPH2wNK9G6ZA8cZYcvHd9Q4ArhVuoKfhNCUfbcAdd8kYNAUAtqwVuKpLHxGY1iQCJD",
  "key18": "3MVreD16k4cqpCYM2QWANzQdeY9ch8AaLQV8j6dGHAF15Xu16siCWnWf146At8FVL7nKotgyX5tWAhCDqGT4Jj5x",
  "key19": "4HCpzPwwiN5JV6FseZcpsic42LyzU51Phrsf1QDtCfWZKrCiR1gTKuQvRiMtJLWhhb1o6XxgNVk9nJpvvnZ9VhtS",
  "key20": "5E366pJpJ6nQ5joGgokVMPuAeLd8kABQkeJi8NLTtp67ywLcmCmWYGX6BetYGyWnX4w6cCChva2qFsbixHtL7dr3",
  "key21": "59KviucFAZYsCrw6udeWE3SeGjC1sZToRa3XhNXaqu7wQiNn761YPRJaJVhJ68jRH7ALgudB8REhQ1uT5MAH6toW",
  "key22": "5Yt62Z9reCjZCxWhy2dYSC6vSm9k5ggtUngXceZdgDRZQK8nWikLWmpjVipPRSVu5qBeomJRbDS3d8tfbaJtEFfY",
  "key23": "VdrAETgFm2f7knbpt8A9rCx674wtchZMp8M8nAz3XYmq1wxUzUB5PhD9u4MRavRJm3RKKmeAwyx89eL4WmezhJS",
  "key24": "5RjYQzWcFbdn7AsUNFmmDqXZnegBGVVBNX3zV2GDbm9zav9RX9WexDfC3eRETUCt4MsYSZfonSvRjDaJwVekaokX",
  "key25": "2AtTdBYFETzjNgB8DCaqQwrJkA2DnQjg23yekVGRCWv4fZjZQu94Der6Lvr4RabNw4qQNRts4AZKQj6R1JUrNn9y",
  "key26": "VcehouuxMQUkCX1zM42AfouSWut7MMu7MYU5ZvURra7q6M7DcFAmUnCyquANtJbrhhujTF6tm7zKm7q4H3gNVBQ",
  "key27": "2Ev5JKSiS1e5pGSxWdAYaNhcf3pbSrk3VPKRYk58Wsxgbu6Q7wnGyCiVFfRAB7g7nAsQv2EmmYbZeWayKyZtex4Y",
  "key28": "5W6hV1dEvZ1qTg5b4k6ySYXJ2AzhXErMSuv7mdsNMZSP1aWSh7VZtZMswBiTPfMoHUZDYKmH3Zk8hnuZTruDnsTp",
  "key29": "5MGG9yz9X8fyvPRPqjXcWaAE1KpNS3qmK9DB5XxXvcZeBDXaMiH5aqnGim4nVeLWs7kb7EDSa3kTtD5KRhEZAKfy",
  "key30": "Jm8c3bc4iZHbQiUrBK3LSgZQeg97oRB1NG38RYCeV59wPPVGGMer4DEAbX6DSvwTdcB37xhqcwz9WgizJxstpLL",
  "key31": "45CJX835621CNDExaJWtekKmwds8fhRuTeQ32Y6dBR2Ek8HBmR8EHHHtPysbQ9JY2cFQnHbi9AQtVXDbbrPhic5n",
  "key32": "t1GJPK6uajtL3CHoun3D3iCnsijLdhDSk8S9sUzuPsaYsoggahVoKakAtpjgWhzyqhb9U7okXjzK13RQn5qL9Ej",
  "key33": "4cnQ3hgbMNcVb7nXEAR4wf7MEgcf6sbECPcexZYhP2qaNsLRTenDzAKoTK5jRF9BnqiZSKTPo5scp1WdR5HjB4Hz",
  "key34": "qmxbfCAUjj2c72KW38KCh4YY81QMFwpJNM4JdE1b4qU7ogfD5mEz2s6ExqX1ugjgBWsyvSkpPMgZ51vb4Lpn88Q"
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
