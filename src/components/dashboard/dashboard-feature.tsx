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
    "47z3VaoLKErtWnACSiSSRRtJgbczTEfyySYAy37HWksdRTyXGjpPGZpzTNwYc8GtRkN5j6C9mM1wJLB2tVuuo9Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nBqCLfwn2M1R8c7BWJVqHR1uAFWr5p6ky6koJZwZFZ4rmVmGqsyQn16MsnfrePjfV814cRuJeMy2pEedqU8bDG",
  "key1": "3UpPPHEnwPaqbgtwMXrfoYKpwuFz9d54Sj14F18hFVgigvrWcgUD16FQeaBmrsaRyDL1Ke8iBDGDmz7pDP2jyHE1",
  "key2": "2Fp915zxndvvGP4TkCVHZ2vrqk2FQ5foDUu3D6i9Pz4LivRvB2kFjhMQJ2AKnd9md1Piuws59XTzyxKBZ9hUAo2c",
  "key3": "2Ee8Ny8cXXgfgwbrqQuT3jQDwL8C6xQiXjXNmbsYP8oGeFY4AHENJLDbpYPfNYKmC17YY426tsDpZfqA6CzM7wpg",
  "key4": "w1ZVU3eNyPZ6cKPYL4kcnYSSxJFAJmzzQDY1CTcKeDp34UHYC4Ejk4K9iYZPhMSwKQqWUw7ezJBPLzbv8HbreCY",
  "key5": "2bXrHRJmGDbEUcbCgEx4BzixLAirpu2KhciF69FRmrX2YAXtrcNPdnh9uAm4BRCQXCii6AM9MLxueviS9C71Tc5r",
  "key6": "ftfpbZiB6j44fXmQ6c5Qr4BR1hEJJ6CYTYtNZAyP8F5t3ZZfBLtQbmMtNJ9EA9iYig5EKhtrHLduecCKK77MjVR",
  "key7": "5dPVYrVem31HUG9v29yHjEyDC96J2H2v2AFqhAdTK5jK9UoiK5S7APUeGtPDaXFFqiA8szVfpMjCZfXs51nwdJfx",
  "key8": "3SaYSwitjZ81wZpZGfkubrw5k9Qx4UiEJ6wUM5xDZF9hr6LPoXkZkrPpbzm7i1CsMNUt5ywVzT6GaxZc656oxFFH",
  "key9": "5YuUuxZfTyiafByT3jKRB98A8x4bbHAcozwm4RcecGDXMxZauDEPSvmrz6vVR1ydqnSQsxacqrstUwnJ2jybGxzT",
  "key10": "5aAUN1FMiNkrJxfB3x2ASk3nskuDnNvGEYDYzRAcnTRkcVfurNMj4zt94p69JsMZCVTrh27y5nebuTQQ29qq2XQ2",
  "key11": "5QZrr8pcmrFsomqjtPz2vKRaKLCdAb97zkbDANLmdFpHXsYJAJUSmpsi2c45Yzo3S6hwyYoKu6J5eMMvz7nfv6mL",
  "key12": "384pdeRYYxxLiye6pKATwbJRTWnaJncMpGHhZkgtUquTHqs6tZE8pfdKyphWJ2CzdJuKbpAVgLLqF6Cc4G93SQ6J",
  "key13": "9KJLjdgk9cWScqkizSkmHAdd9oi7UFsADs3N6qPJNLkNnn1A5ofdyV6rk8hpRa12gXYexrj9VE8TAhKU3GyxpRY",
  "key14": "4WiiABqhRPpaFSeZQyJAcwvn93fUxqsUaWb1C3koZnHaEnd2btMRSyEVJFcSS76j99mTHRAMBMRNXnv8sv9f7pTD",
  "key15": "24JUJLqXHgiZe1Zo9MFNL1FToTcKJhQAdjpDsyeZEFtoCPKnLsLP5CuQrR5W7C8SEekqLqtvh6BSE7Xzjy9JAkKj",
  "key16": "3sY7uTN5kc9nK1VMknBp7y7UL8S1meE65NGkaxec2nRF7m9GaLJmKqVtUmCLXhwAo1RJHcih8ynx5Eus63XdhLKw",
  "key17": "xJSCz2bgUifkoYriXnmQrnMgs6eKPcpXd94EEH9py5cz6szWavR2pk6saw8FUVLHymbemqFPrpZKSWmwhdEzB1J",
  "key18": "XJQg8wmFhkwg5Z8FDSUyaKH1qHUakn4bP5GGrqbgJJy5aP8MCY4xqshmTjt1KZHGsV21CEfZJwWXds4wpeMdWKC",
  "key19": "4NfpbBNUQRY8Ezm7aKXpSgTxNkhedSqAZaEMNau4U53oqPASnDAwvRZza4iFcLvwXm1PLzrLxn6v1aYcyaB4wpyK",
  "key20": "4LoJcP3fRssuanHzETU2BTt2SFh1v7ghZFLek1sPW5oqGaanirz3QbhQ1UZzCd6EYj3g8ofMRE6RL37PLNadzZpk",
  "key21": "5xVkyDdkwxzB4yA3iNCoqptHVPETshnP34aoW3J3uUCUtMgc7g2J5Bnr3TZVsTQiZE8uPGKUr9jCn717tMULphoc",
  "key22": "mrf7Mt3kwqSLJ7H1UN95oaqnFz6fveKKgM1bAz77c3oJKKiZS8bh7wAFqAmY5YkPTVcTcBB4ca257HUPDQvYqJb",
  "key23": "2dGdo3CC7vnjDSUtri421P8dTobA2QA4pvfp3fc66rhtyfYDihDaKjYnqsGQEB1ncMK36tt52yBKstXgCNjrYGtp",
  "key24": "qrdtEvfLK5aLFfxUbf5rvip2Z73qdu6hZtBVVgsPvcQDKATLXFTjbqCB9YYhRXgxbUr1jS4jiWmcyik3QMhjGoq",
  "key25": "4G8q5JMJX3A6Vc71mAf2428PgmU62wb3yJdmp6f3okRjpJVRJFWvqvKAvzK82dtxzAZpd7Aodah81BKzrUEe6PXv",
  "key26": "232UBLbUhuLRCyqZmZN5k8zVZc3H9kPTobHfohQ4cjKwM4FgYWABM3Cvko3xXsgqbGmmGyM6DEXG7vTa7KtnTRrn",
  "key27": "26zzhzoXLUhKwpHe5UepcqmSi5n2dD4BTi2RrNnzQTewAJPV2qTn5h1MDp6EEoC1uadZVUtFb9rudDSjBf9pBEYi",
  "key28": "4BEanK8XnNMaVVjPfdb9mDASEBxRH3MLtLnfs5mVuYtNnGjA2Tvwi7QbB8nBw9sNkzGDGS8ay2a16BWNgc3YPeS5",
  "key29": "2MBs1dy7TxXERGmqnDM6RmDdBgyV9g6MvsegxyARvbNet7sYyYUSokgb1Jo5Br7Su9PMfJehcQexsc8muc5eeDHX",
  "key30": "67kUcZ9t3QC7CGATJStztq9GYBGDRvEwzgwtvXpKHwMzWVyAs6RPpaTHkDQkxdiy4AuVzQEXhWo4NFr5Pu2hoWtG",
  "key31": "1pbFknmDz6SC3dRDRJbhSVKoyqxWLDY8PohyS6a73QNhE6tdCBSVt1Jd2zNBtFVRTPi3Vhq35sJJjWTMvASo3z8",
  "key32": "29WVE387tTj8whYtqghf1TLFbMN2mbHGDF2ej8z6v2sLgq9jXyTtXhi2UribWrsiDPDherWc7DCRd8t3qSiDckvx"
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
