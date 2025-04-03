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
    "2nHL9Qwvusog8fP76csgcUM4Dey98bY5xw2mzT2et74PCJsMhJ7sXtg74zzeCJncUisEdrsVHYKWXsHLag1YvBoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3caLw9jEdhEj9KYK97Cx5HPUrS2TX4wxoAXW5mojKwJ2M2Hi8fD15e3Qq193q7nqbseeEvCtaZg1U6E2uhWkhN7Y",
  "key1": "5LJtSdrqNJ2qmcs7yjsCS6axfkqiR1mqVnsUhehYDPeCWS9rxS7XeSZQtwsDqf3HyenU1RegX4S6kzFYs1EtbZg8",
  "key2": "5Y9fjm6a1w2QfdrRkfUPL4eHKz9DPTG666geHfERYVAxUwzp7hVV8CFNW6XYDRaUutN4V98PBD8XKkXPHU4R8agj",
  "key3": "3d7zyFG66Z5VFwE1Luy5uiC6x9KBsD48y36gEdV3G1qZxWJpMtxj54jRgMBmaegTr7u2odYJ1gLm54NSBjeZBYto",
  "key4": "3WVihw7zVNrBhcg2nobaTJaNxATa5TDFJKWn2JEf9DSFx23V7w67x7FurmPrgbYZJ69RgydJKNKxe94AYeLj7q5n",
  "key5": "2Eorn21vmNQhXgp8wTCK2zHjp8BUeCaiM7gJB6okwhPEbqWoDDBuPErzR5DjMaX2gRpioSJXjvWXvL837PYDTJL2",
  "key6": "3we3H6gVDK1Buj85fYtxHkx23qgznUKQLmFh3YfvMhfQnVaGi48vx1vyPtJUS2RvbdAHkxmdXyKkxFM7S4LygRQH",
  "key7": "5kYdmWXcqcjSN3BATi4ZdymdgLZBy88BU95Hhbtj4EPrCEe1hVSar78EPxcmpEYQp8EduqwFiJyHj6NR8wHXkzDM",
  "key8": "4UcGFozzVmDbGKDYmytzUzt6egLPePLQxMXXQFqe1DKUmZmoGvNB6WbiYLrvaUobnGGDdn1obkJuBM2HCJ2W5byZ",
  "key9": "8ugXP2aJGzviyBSUMFFjPahnEVVB5rQVV2ebzgPNZENrHuzZ4RQPnNWVNgneHABs89Yi9EmaNsKYqePGt2yvTht",
  "key10": "3pL3rsHZtSDzTBDn8obCTGqRuHNXKth7Lk4q5iihXw5XPN23NEYBBP9zTM1EEhpBgnodPALEAVxe2MsEKjjtXo9h",
  "key11": "4ddrpkMJ3o514qUpKm4Fhf13rvUyuzhMsU3xzqzL24gdpwxVDTYXYHUmhdRybC42KvdgXu4jfCTkj3wc2cVQCQ27",
  "key12": "5FpbGwcGfX4wPBfZvSodEVizSUjN94eUbB33G3AnTqstEF11QoYmuQr5LXCDgaKXnisqWSegYegvfyJ5VnJ4HfPT",
  "key13": "Gh7G69nDerPfL6e2AUgXSqAkTHsBtYWXoSX9bAKPT23jwrc2YueYj5AVf66LT1nY8SGuBk5SbELxYY9KDqog2G1",
  "key14": "3TWsCaJjy7owz1YjPrmTa3RHXbnhQCyAJSk59GTvVBgSogFZuZYTWhe1CWfGMu4ceaAkYy3zAuqCfbtXtRJftAN5",
  "key15": "5R6n4Hni5JpCYxos579N6HBJURj51vGKSdKzB5VxjLpFrzkCwziPriwEuGxDJfHb5Cj9aHhtNxQXLoxLqp2LEB8e",
  "key16": "BajpCFphRdpn4rF7ftQ3Fp1jLGvoegCyZEvA6n9kWqUbPbBs2wW6NiZ2MRfS4jDXg47B1LcmY8484QtMJRpVZjH",
  "key17": "2kAD9Ek9dhfXWMPfEBwfZqgtriMPLN5chqtKgVQM2HP7CHEsMrerDmumYox3QHgTKTgsTprKnQN4V9a1BUmh66ku",
  "key18": "uWs9RFjpfxS3ZEsmG9fF8i7MSUxhpXktJzxomHBUFt4TjtN85pyaPZeJwHNJaNLRUg3yhySBLZ38z1aeUujGGoJ",
  "key19": "4SdUm8Hw86z73E9waCH1czfeRSTjb2UzXMvsZud2hwouzseTR1bRoJbEh3ukPoRJbXSnDKdXkyy13yxLj4ETj1Dn",
  "key20": "3oB6KqYBuiXiniHJZpn3Kvd7LAWm41UHdYmckYXwzGQyuz2nZkxXXBDJhMsxgNuXdj1Kt9kQnwEH6vLfbe3Ghvzc",
  "key21": "4nnpLpZcWF5tRiEqGCcqJFpUsVWTUhF237KDQHN4r9Sgj9KF9QQfwhncAqu7nJxc65N5HY19jmNLgobor9xpxMnB",
  "key22": "4bJkqsRrwc4ns32PL7jM4DwgDurH8bULED5bjqKe5gzj888ZnfDH6YKE93cwUe8zobuVpUDywZhav3kvBdCyckFK",
  "key23": "2KHoYoNWG3R9QX23dpJhtadkhFj3T81rN84fm2w3uhC1H5Z55iGdPKnie852mMUqANdcixCqm5PqcmPGfwJyp6PM",
  "key24": "67N8RiTc1csCdMEsGSaikDLqQy1CSxkg4iUCbpP69MWSPjz7c347tPStQfusWVE8DSxakUc5PdHwuPB47j6t7Z5u",
  "key25": "5UTJaz5sTmk3YpZuyuiu6tU7wi76kgzsjufsuQtwNMf6nT4N4LvPRwh4zGhmEgNrLkGTAWzBy99HKq2hQ22oEUaK"
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
