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
    "5QRnqRUMevGzcfbeq2EkQLkbjC34DQX4aqvh8ZqYZpb1KXWhvV2wBXoxde596gikwQQop5XsPRBSFKYcGbtc1EoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aih1mj3aZ8vLymDXggBPBh8htrwnUniErDAi76HstevtMayvFALXYJoVgtUHfdqh2fL8ZkAcdZMdhs6ZdhM4Zo4",
  "key1": "46FR2QtMnDbSS7pVTEZcxwoTBNYVwhbbicSrwihpyYvD6vcSkgsf42gY1vanKTWUmnyjyhG97YccVMfvpsGNhLsN",
  "key2": "2CiD1dr6HtPrumviFsUrrZK87prxMCTsTcZFe6Dt62yRBaPpLRBwhTn3o2qdo1FnYxyhxhpj54Wh1eNKtNhcXo14",
  "key3": "253JwMDaQaEP3yBUKfE9zm7NkxUjF9HyxgkitsVb6ao9f7NUQ9cXQnKdDtkjz6tzf43gh7y9DgVTwvasu4GoAFjg",
  "key4": "YSrp24ASgbUYsEGtgTLpo5YsiGBw25AUn9RdGW2DCga5U48SB1A99jgS6tm7zYd8F9anyLaMWb37KDWLNPsBszY",
  "key5": "5UAhrdstBzTk7umK5S4Pka1sv5HhDKHZtD7Upx757GzURXe4i2utYeDFH3L3X3pGqomCArSyjRcXNvwhi4ejAygf",
  "key6": "Ub9D9Axvejkj9rZGGU6UAUG9ws8zb75cNz42vrSRDRaPW885e2ippqDmM6xeyixbsmp3YckHcc7HM3ryYUMPGJS",
  "key7": "2j7pBM5zzbrVkAZL7xWV1mqrSz3s4rFpMZP7w2GhTVmqzLTkhMq5t5uFeSxDfDycPYW7Ngc5rJr1PriGqkJvZz7N",
  "key8": "2877g7GzZ2qtt5Bivv2sK9vz3pJCnqb4WcEruUuDFSbjhUvLktjYWtqd9wYkryj9JncWjveyi9qx7PspCXBscx1q",
  "key9": "4fFqpvkGmshr8sxcUZdUsw75wvJskPPDuyvygehtpVTNDw4hfx2xnMPy4QhydasQfTishCZSN3S2fZnysBihZbnK",
  "key10": "3Y7oa2HAp58G1mCvzAvv3XXa2nRLXcYMokW8SndZYApcxBhA8fc55jWdRgWpaa2dqdvWjzCzVBU7prZDNCr7sRNw",
  "key11": "66rPQ3QVrisyg2vxkjD6xPgWGYGiPg6CLBgC7yujVKyB6kvgJmF9oZ7rZsVeRnbAhPehNRazpXDPR4b4ASwVnej4",
  "key12": "56vfe2beoJaMU3M6FWJAr9EiKmWT9htuRj6ycWYw82gfXds114uJm486ygJSnmu7MbC6KM5jPQa2EijL3eppQp23",
  "key13": "bHFBXDTAH5pBtAC27CwYqftbuNjJhGRFKqVeyai88tQYSuAnTTrWoF62Fatx24Pf2LSncEgBwjRngsLdfT87HWK",
  "key14": "3RV2F5gVSkJTfrNkSu1NGdRyFji9M1mQ6y6GSsGnnXoreM1c2KCVMwmTmSrjGc5Bds2dLiyVDmNDRcqA26YGfXa1",
  "key15": "2rhzgQy1i9GP9c5WdVgmeFhkV5wrbE2C34BwuzPvXbkxzUGubGJi3PB81DFR2cDyoW7gAPxD3DcpLX9LvXkBBTx8",
  "key16": "4DXKdjR4N28dcYiHjSxr9GGhU3zHBdTKcUn4YxHCf8u7CzbiUiNVE9ic6TFe5GLBDML6LcyatiQrZuZsmfcsBG86",
  "key17": "5Cis1dPFo2thaP39y8vRJcTACsF3FZunmyezLnXtK31XvVxkyWYGpi3kEyxNfskuD1E3xzzmP6XvZQDrUpHe2yqh",
  "key18": "2DsirwHm7VZCKx1UuPyk316uSwB6MbQNiZhVCcp6p9ALSvG1Njf5kPFNQpJgBoWiR1yc4ZNW32MzV9VWbigQHzML",
  "key19": "25U2V4S7dt4SG4ZqrhFFENsyaQVEyRjtEDZYimRDdJcwd9fmaF7uia91h6QZQqn7bLZgxENpxd8wYvA3yhsprmDn",
  "key20": "3AP5hcpHwcj6TYeerg9VYiTurqKRCA9gHRwioQpub9zXUR5MjKo4iBFt6eqSLp3cx6bdU2j4zofbyAM4wfGJ9pZR",
  "key21": "4WrpErFuqSc1nwhYBCnB1syoxky4uBWhkWbpRPN2sN2jnN4ED7CUSaJ8TYMjKS2yRB6BhYiNc2bAgL4JCKzzb78h",
  "key22": "5JiPm1LbnHiPkmgpWj2SzZZ5tKcdFBuBh7zmT7SsRkvpxggmC6JjgX4JmUvdjxTQcqG7Lht1nnpqzFY27DKKncrU",
  "key23": "58QH6FLyfiah3NcdCPSnJrBfcmTNE7fJnJSDihQeSYZTDhFL7U7fmf2Vx3XgyufxxoC9J4ovA8YH1QMDqo2kvbRp",
  "key24": "5GzpPtkGVHf77AaaZFRudeMinGdvbJekQcdivzcV8b5W82E34P1GMNZPn97VMA4vyjFidRJdjEtv5kowcHHkf3vM",
  "key25": "2YjiQTC5Pn2PdH7gkz2Z3CqhjLZWTBERHK81FduoQtQzxyKjMtR3pLkwViGb1QgUbWFpth4nVYkKdFMDcwyQFc9s",
  "key26": "4wYWsY9EPzypaJeC3i5wCgwz9vvc5jmcDBHTnxLGb7vPa8FzqLQjTbiC9S9aHM4TuuQyAfh8v1Kud4dR5Xa6uZpA",
  "key27": "2U5JidNFUL8i3z6N8XpNZwNqt6Vd7PMmvujfgbhntnQy85PbscztQMQCMFNHYPTp4vpmiHBi8Yp8nP5eojxSBeAZ",
  "key28": "2uMHwFJHRTgzK6yjWJPr1DvUP9Z1LD7eeWTRfSsRqMXNGYvNSnBRF8zyMidT7uZhz3uEpBurpJLYKWsRzf5yJk1D",
  "key29": "45T8zbH93pryZpFVburk5SRJuy6nqqx36dAKmocsUaw4S5F2pN6p3GwMWnNwhbZYUKbDEb3qSCvDbnPihgFtonA1",
  "key30": "KrYZjBnacxbNUFwXRwMZXCQnb9cufbTbgBUubXh7SiLBiJAmKUw218jEzPAYRNvtSbxHkrax4HfckduHfUezxpG"
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
