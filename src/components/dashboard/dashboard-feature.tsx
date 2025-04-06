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
    "65qsxuih3MgjVFiGCb18qQNPPsV3o1kBwUkYBwTmksEDcKQLuZ5ZuxFP4qUHUXqX9ppmFmaJnbFk1nciXCngjcBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BccwrGMch2ba6ssvqdJvrDV7Jwk6L44whAFuydxuzvgYmBCi2SrmzCr9Vy8Kg5d4vSvJQNo5bKPKw8HK16iVdfx",
  "key1": "33rAzbjgForoVMDVCx3bXHojFsoKWkWDkXGinYLNsK7JS8L9aMNTrJi4F937T7KBKrZcdTXnkdivw6EYMTdtJxed",
  "key2": "5PLPL5iyd1ozr8Znt8z8n991isXMaNRgZhZjhmrFaLCfYtrh3jXYzEggDvXuqxMTKnmPiTuHDg5Eym9Gm95HfYYC",
  "key3": "2xxpfQ8v32qTYvopp2gmQfgPM18XJ5YTJYtD7eTZndQYXZg3N9s9coXaC2SDzLnzcGNqwehDrApssr4t93XvwAmY",
  "key4": "2w65zFyjocp5EvhG3XkYa2LwL82UH5hKpwYgmjwT7jBEW2idG4x49VmAjeYh7PjAXuyxHGRT7pWUPiFBJha44Dzg",
  "key5": "3jmJoMMoT9mLngzEbCHYTrVvVeYQajotBe1BwxTUPQB5zfaGSbvPnEkMMtXCRXKkN3Kk78Q5tBNEV7Sb1mNPxKhg",
  "key6": "5MDfuJfFtUBtyXBXx8Fz5Purfidkw8Pa9xp5yjHiD4Mz7m3TJSfxeqn6vd4WM8GvkkGbDUCoN8oXoEPjguXKdkkx",
  "key7": "3cT4KWznppkgVeaTLGEvuU6wwdELJu4jPTZfJ8LDTwdtrH9q8H7iWAJoKWScrE8UqfsJb3Y6GfZMAd27ExydSCHZ",
  "key8": "4ZecvPF3zFpuNjwwrdW9DqmD9vUYZwQDpssGCqtAvoz7hYggfUNLBAgqDJvEYgiSuUt8JnYkfmswA6ChznBcb7AD",
  "key9": "4f9YgkPq5HuYeCiAqp53YxX1iswdvhFe6heuSQ4YzYCkXAw9rWn3Le1bv3cLqcnNatUZtZrdUym1WLrKumBqv1YD",
  "key10": "5MeUyPJ419794HdLk3LQxzGNpP3tgmgEmf2Zh6AnJSBBqcqiGJDqJrJd9Uwqwz46WJyaK1vuSM6iMcQGbteCLkX4",
  "key11": "2UzGMDqbUXQ6zYRiPXU4GPKoad1VyfSjrtEKAk6UA8FfUYoL6DuWaxJ39JGonz39FdN5NjyN5X3aKYJu1qKrZUSa",
  "key12": "4apHK3Pf8dQ6UKpTyZHJmU2gqFJxRtyX6MkZfg1f7epN6T3u5ZtafGAMZp5PfG9WuzLe65nkfd3y3GkSSVhfapPw",
  "key13": "2GLdPr7hcT8Mm3w3LeEXpBwL7e4aJwf3b9Vitao5Jy5uMjHt3qdSGRzRnAjjhiU7zPEkfreufv8aKnV6HKD1iZbB",
  "key14": "4hk15twMS7A2fDiDcnam8QXu5CPVuecKfRQcSnUSt7ecPpytTJKTc8KRqRCsJQSgbAf3DE8ncANuzyaYXn9fMxMB",
  "key15": "2igiEpyCSn75EBazVhBV1pdu8gdt7RfZ2pKYALNsQM9jU9WDPHbHuKbnaTHNBu79GRpzE1ci9FtUFELFJiF4L68r",
  "key16": "3mE5wxaN2cSiJuaUpdHYy26Rf7YuszhbvA1QhkEtRy5yxB2bRCGjfF2uyFTqzT4DPMWEGRGJoYJtrcGfhCPhnQ3a",
  "key17": "3FTSukt68LB2Rwc46mvsHM2oFvZ8nmWz3M3TeAbZbMH3g5PJkSqwVP2cSHjX6v1B4H4FTWjsD3LTTRmLkCUTpTjz",
  "key18": "3yApEfq3Utr3PUjb85SBKJvHDmhbPcHu1VvPNZyVPymyYXkrcG9J9QfULfVmtKbSiGJQaHzo9QDw5S7k631mcTaG",
  "key19": "2rgD2HnK6nhLMmr1mMM1DXVHt8wTnLDJAE2oTdpscmfBD6YFsrk7BkwFKrfjdJut6HCVd2vPxSWQhrJfgnwnTNuL",
  "key20": "48GChm9GLEPoJ7k8rmiS1npbi2bMxNPmRwEGSph8Zro4pBDtvDYnbXj6HzvjBa5RmfcTYBsFh8epfnLV2F7jvCgY",
  "key21": "54BV5ok9Jg8YML3DCJ1Sxy5RiYZGZLnaPJwevGMmccTSVwPVaxmdBJX6uFAwGYrCAEU4RLSGdHZQMoV9BTZiCH5m",
  "key22": "WPaxRqBZqhJzT4b5xpKsErmSq4rnJHsGtj9MrtaXzs9JHwuPYv39WKCtoQp8kmwmmyDV3M8qiUUg7MGyQzBXqUy",
  "key23": "4UNh45rjKv3vdoy15u1EQbzzknW1nJx67TErWN1Yc78UgRuwnJpJErTqRDDm6FecCTBEjxewetJVy5vGQ1d5Tsk2",
  "key24": "5QEoUzJweDAyCx7f83pSFKd293tkwpuW56TAkUk9iLWCseL94JZ9PqANRPnwak1ibqC8y4ZrxRuydAHakTrM1A4h",
  "key25": "36oWKXsP5Qwc6rU5JGtAJX8KSQKw6E3UVPdBFr23WuZ7snn7tv3NiHNXKP2JLb2EUm2gykj4XSVCgc68egFMVSR2",
  "key26": "U9N1PEJjnSyYtnRe19dYgwy61wa3jc7yVRD6RxVisCeL99hKdh6wQx5sMSF2AwS8iKs5yTCmAA1bEHszpMHfkVp",
  "key27": "5KLbFK5uPv7C2SHbvRfnZDEGyDVBQHDbtM2AFstUygCzQRCAwR144HqZuE7sGjVXJDnybezGnaMN6auinAcujYEc",
  "key28": "27jD1todWjZuuLRa41t5bkmfWBHhVdWoporcyudjxFh5fxxgeWqJuLEWhVBmZ77xMgAc3NBKeB5dARfis796vuCu",
  "key29": "iqftSenkTFX9DwKx6a3jQZ73TJiyQc8G782PYcZK18Fn5am87Qq4TzSZ5AkFmYUuNdiLoPjb3mgw5h6kDbuS443",
  "key30": "3pi4T5inECcrttKk2FQirSP4rj2x8Xc6TCmfKkc1AsEkMeYDAoeh6ynf9kEHknByQQK8BTmav4oNeEMmeq4TLxLz",
  "key31": "3MZGd9YzhRqt6JktDHjXpaLRb6UvDx2BiS7hNBuQvhXoPQnbLC9EB5DbpHPkgZx1H5nhtxAia7PTKVGdiHLMC45E",
  "key32": "zihD1Rei6ed6cjefhWicSA64t7R1RuQ2tqD2BoZHVUnegpynjtxWCuPdz9pvddMj3MqgStw1HWnGpHd1V461SzR",
  "key33": "2aVjeGzK39mW3nyREUw8MooBdKd1RV5McGnmgoZFnqXTicF1yqhmut1emLzcAy3FjENnc79iuSwE1vZnFpPbG4vE",
  "key34": "63H88frsVJUgoectLvcFnDegVYYVDJeWXXp1iRDYkeNSFbXNg68EymY5V2wQaEMjFFdDtqsQzBqdgFfTEgLg2qFp",
  "key35": "3EpPSZnqRqmBbJeHXcbk7maBFk5tRK3fZY94fKhN65aHDLu1yxY36x9orstAt2YBZGtvLYn6scfKiJrqoWfHyttG",
  "key36": "4Cy6esBhxJfYsx5iyMZ9jYSRgBqJXXGyk3y7mL9ihEMiCqVxBUdjJpSbvCaHWQsVyStyATPTo6LAtpwbNVWwLAkn",
  "key37": "4sp6P2SN4pjYUnbREY1rD6zajT8HBQdECoS8A2DH5ct5PWFPouooyJKKEa87osBh8YqfifxCTWJKS2nm8rBWsLRJ",
  "key38": "52PBKdcER1kfL5XqR53wQvEvSa9k5Aeh8g4qZd5DkkDjWqEbRxTmtxss1takAm66VevgoSoZMZq3kNfv9i2K5nm5",
  "key39": "uVix98jBvt3GLVQxnf2wLooTnTBz3Cuw5qtoUzKSTJJZPqvLnBUUt2TT54Qwdy8rmTosM6XzyStmh3GWGmLF3j1"
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
