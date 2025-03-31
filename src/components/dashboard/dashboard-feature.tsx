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
    "CJ6VrgjATU3RpwXsFAS3H8cVLKwvNcZgxi26PrMtA7x8QnAjnPE7pkuPCsgosCpmwbNdahdQzbtGkdLyS7LUJXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2SJx1xxu2L7PwbQg1NuomnX5ZyWp4nbjXX1Zmd2tyM9fJKj36x3B3j9JvnUYZL9t33ZCAU4QQhRNjiSL2pJD8z",
  "key1": "3DhoXW6BaE6S2s4tkhJw1gBT6ScUBaC8kzAzAEMbaeRtABpvrbjTguauNLxzUSAgaS8MDAVnEa2hebWdoehhwjmA",
  "key2": "s1vxvMD9LALDoPmugPkwKd45bXEoLvV6DQHAp8o1tU48qvAziQeeXQYJYxXFrYfinin9BZa7BcbfRbc3mttzXHf",
  "key3": "3HPGL3rET8AdoBsaeYGLKAXcfk5m6cnFhGYerB57h682eT3X9kNJQJPzG2hEPNvqpu2c6XDBQJG4MeSzd7j1Yvmw",
  "key4": "47swBcqwmFvHZoxA11nGEtNQbKSyNR5CQSZmNgJ6P6qjFWJsjzXbpY6dwzbaoUYhcJq5pDhmAfWJAJxRdi1QXVQJ",
  "key5": "2nRHKg9DR2if7nFnUE54nN5X4pSPEcBwgRQ8BSHyCRQCJLA9Yf4qV53XKskUVCmVGKPWXQm5Mt1VJPACZ8LUdSr8",
  "key6": "5kHCaUzDPUBDS7UjFNkube4VhZWnJYYzoXG7FjeseAGDajMpAJZpbn5oBXpUo6uh74xe3HzETd2AivjjHCMm3zkh",
  "key7": "3mUDYSsCoEAcXZhpEqVYWjCeHu1bq7nMBaviu3CvCYtUM9fTctE7JABRUCySuworXCjxedHLE3UY5rJbvyo1z2MJ",
  "key8": "41Pm6E66Z3zBSy6RSKKNjZJbe5WEqwC7r2UWMm4qBC86Apig4zqHo9VZ4Bd41fkryqQnpD2nEWatdjqpRLzULLyw",
  "key9": "4ybdTBTT3oQTyQFqGp5vkvK6pCT4Smzp1ke8AAUSByWvhM6AMTNfYn9e9kStNwWJgBmL1qvTmTNRpDaRq5N9VsrT",
  "key10": "3LngGizwjfajFZXtXUYxMKdg9qssLdeWt8PqT5BQAzinjqBJZ3n41G5doKuSWazHq8vSj7famMccWDRdmQspuoA8",
  "key11": "DNjUYTyeX9oxjdMv4D8Pb18SzM8zusUKdpND6MFWdxEdQNYbQsiLKiB4WiptoEMhjWfAXuazygXzojdt8cVLL8E",
  "key12": "oYrUj1t4pcncM1mqwpakEEvFiC9NLPoSmhR536eMV26kuipXwt519ebgNovjQbHtfaKGLKpYMJcfGVPnaSahgwh",
  "key13": "6qFcF76gLFZRMW8mb32vYwRSsuTXZxnNxDHZ98bkVYEV3ny2Y4FGN9rsUUnyi87nEL7Dhbaz1sVYYfa31L6yHWV",
  "key14": "3zfG61jRndeUg1NMmYSGjCzU4Pp26wmHGBhv9pWEZDponCinYMMHwoXJzUyAZEkq1cyTK3xCpYgS3o6eDPQyy9PU",
  "key15": "4zZfBcKubss3tq1aTjsTKS3zdznf53K9eicaAgQ7mMwV9kaffNia5ffBr7Nmc8u98nznABzpLcMSfKBM3xEejfbi",
  "key16": "31iCqvitpnMcSv2JgPB4YYtd4BVzD66FrTcuuvcJh15iAADBJjbXfQWJx5zCqF9yyPoV7pHuqM8hpUoCHNPYrv8h",
  "key17": "5hsUxGbTESsDdbFYL5QQbJgPXFr2rhXpH5WrAZHhYJPF81obDUpHvvy1uHBP4o72aXE6Gzwvu5TgqiMAwz2zKaL9",
  "key18": "4fEcnhmFenvq6NG5y2qEPZ3NbhTmfD8Z4tLVCYkvK3e46o3HNj7rG5DLx6ULGpQPH2cvD1zt38RmF5KCmdyzt6yR",
  "key19": "jR3K6N8ACGuWR2v93o79sdbd5xUYKyx7YRy2HX7JNhu8swLTR4fkWjrGFLjB3UFjrG8mUYpGYRMHE1L1SPnCGzq",
  "key20": "GrHyqQDR8rZMUvXcurovLGL11Yv1NwseV9EMxMBw3jsVYmE3bH2cFJ42YGE6BWbYv9zkqqJCSSHMPbcfDCoYqUA",
  "key21": "3WtLkuxUN3UKyhxCjTYhP9WVL43aKfacNZVcxUrzg7aobvhTFcd55rjMxD5cD42EMcFWSP1PAVw5YgdjkLsfCwD7",
  "key22": "4SKb3F3eCL2uCj76DvDVGqrR34UK8n2RgWgyqiSYSq1Xw2eXXg17ubAZR4VmE7XznW1duCg2ybhLKJ4MKNhPx5vj",
  "key23": "3281Rkr3BiAEPvrhctQVMo27XXsp4Tw9PXJ2UXXpu4azeXJTE1hMQNrhV6CmXzTnXdGGhTeRsux41zinqMT2hc44",
  "key24": "5KG8PmNKm2V4W4DejYEP7c1C3Lm2jD6jqRhUBsPMcFhFkkFwceCA26QwJHeU9UuUQ7E95xHTPqGX8z5k6d4Nqvfz",
  "key25": "4j4hi3iXKgCCQBR5nAFy38TTp9vdVrXU6sJ6YAeRQpqKuVspx4mnz63KRXcpm2BvL1PVLzL3SzaM6QZbhio2SuGH",
  "key26": "SXDAXp1DS3Aq89BVmkEATvTvyKiK4ULj512nNYihxtwdcBiVtpi6CL6hXYpnvG9cmJQF7s3r6moAXm1T3NArbiE",
  "key27": "2bW6UKnQbKTv7EWfSwyFo3GyH2DjdY9R81zfLfWdFYYshYRUt8F5ATifPw5esrZdV2bU9rK8qY5TSzX6EWk6xg6z",
  "key28": "3sr7myBvpU46TtqPEn5EpBkawAEGDnHef4AyvMC7dV72fM2XFBPysjTNF88MhSotREiuESJNdRKaC387cei33gaT",
  "key29": "3YActAY8yETZM7BsfszrTDWJaD4vseceqgq3XFdsaEbFmtspUTb25E6bbWcFyzaEj731mHJVw3Kh3T4WYj79TndE",
  "key30": "4FEosfGca4eYEy7TxXsJn12ajuyDxR7DL5d7HXAHXAqwJgT4mrkwuWCHzpZHijEfvC2dJGRGVMjXkMwxM6jHFw7g",
  "key31": "51ZpXpvgZCTL75hDCxUmhUpDB8pmAkX7GoA5Rrug8fLMDhkLw1GzXgt1ci2s6eXMNhVj9u6aRNnugdQNZUGsVZZP",
  "key32": "2yRc99zBkMgt7XmwH8eCirzHGC3RS3yCoLyfeysgjtrzm2whS9aGyLGmQANfBF1iweoyUKMNeygfXCcsPdUQurgi",
  "key33": "3Jj9dNQaDPhZXjvbXSXKJ1TZoF1T9BSVvxehNp5yNPFqpYXFRdHmMSyGVzqZBjcYXhmWLyQmdyGRxoQBcCHcFsYt"
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
