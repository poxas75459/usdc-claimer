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
    "2xUbwfzHTRmW1JdSj1AaZkZfp9BKX4qnsa2WsWhV1A5kWbJhba5tndTvbzG5tNShYT8gX4WURUir4Byi3bs9iqzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7h6Zt3Tdm5N1ZEoEpoXDecqhrHP7mpKk4rUfC9vdvsYuTgDXbqN4sSgotMKjEoiXgdkteZu2Yxw6hrDoKuzaGw",
  "key1": "C9G5zntHyCg5VQcQj26LumyxRFwS1Wb6Ck3kMhwUwxnQBbpFb2zRB9TpEbFgGraaHVUi9JoHcmv4N7vKuRnPYq2",
  "key2": "44AxX7zjee7MFAajdJdrPYvxFAax5dbApgMHfxuFcJCZJtbo1nsKu1wfb5AeR7j8BJfCfsSkSdJAj5e9jnp8tag2",
  "key3": "2wDQVygYKbhCrLcq9qm2zKNMLhdc2DDLfU6FELJFnCpJHvQfUD8EjU5e387Gzj5PYpBr8zP5hyctrAgt8mDoYrxd",
  "key4": "2fEyummm4nx7dyQipciUq8DEGYtCEVB16s9N2goYgWaF98VrrvhrcCdBzRKTmhLwqnmbPcF2Cet2APjpzAUVzEeV",
  "key5": "3Qh9fgExMiw1ZARWQRgPbJ5Pd1Err6JAEdp71QFWGbnHGebMPArzDZixkEToNcg1kc1H9HQEzKBjfdvTYmvZwnCp",
  "key6": "4bkKJPhJsSNbizPQsujzJkNfXA7W2tnV88MMTMfSRCDSC9x9nswv4ZxNFpDoUXeF3FzvSewAj6sCRabaTTGyp1Kg",
  "key7": "5qxfuNWpv4dh1FD5ywt8reihfWnSkpXX4EZHgaLpDr4sofjf2RWDEQNjQ6s3wSxmeCeKf9AbYc4sNYnw38otoWDs",
  "key8": "216kbSwT74ac9sXf9jMQARMhiecoG5LUVZ3EJ5qmVkUj4aBSJyDUQZ1YGjUJB3UnYRWeKoJZa1yQ5XwvacVWBnVF",
  "key9": "gR354FJ1H191SEmed9bGedj19CFuFkgmLgkuJUFJhr3KUmydLmSWKY9GkhwSqohARJSzCujufSkXnoi1xAo4A9X",
  "key10": "2UcaadpBzxthTjZfz1MZkX63jC8MoudZPw9GBm3fbnNKm3XcKjHYiwSptNjLR858YvPLbq8edy6qytc67NNzw8Tr",
  "key11": "4BQojDgMBcmRbAadY5rpXaTd57dwVhFgKuFLoTRSACWM9Ea9YFuXKnBt6uo6p8CAXHEEX2JnpqZmZdUoCc6AauHg",
  "key12": "fJ8tBEU54dfTMkdhaWN7AJLu2BCv1eWjzvbv8pUSDqsK42QePzBXEwBz6XH2Jj2UXf8WoBDbVMHx2YBaS5dwhZc",
  "key13": "573iaZBdYwq1DphEEFS1uK9p5fsYJ5B5vqJeVUZcs6iF51J7XfQkqrWz62W3mHr4sTry2nEGAof69g4ssJCQYAfV",
  "key14": "sf5W6PeWUhp6cp3KzEBNs149YL8Cth6gfYHN2pXQiERmMRKVM3XhcqhMNh3fLHQuvXgvkT9odVAh5TiVkom1xQo",
  "key15": "3YtLj6hHF3BvphqD6s9SzUBJ8RT7uoFjUtnk9hd6A9LzQZb2X7bgDJ8igVxxeNmnzFEaFrPrPCBpYuMbZMNYcoVs",
  "key16": "2mybfUNmJGskxTKEn7VC4QLo1b6QVXtipt4HgNgHvb6ezzowhXfG1RPy6GJxcncZcgF2Up9hcZZqR1vV2GTUxvTR",
  "key17": "TDKFCR4BR6buTu3sXmxNsfHHp5D1VdNNKY3FhdDGM6gKczV7Xv2xNrA5Leb1SSc2XKaQHrkMbNFHwf9CnsFJ762",
  "key18": "4kDve6D5FLuWPBNRZ9hadC7ijLDHhzP6psEUGTx41vdAbr4APoGgMT7MgSB8f3ub2jD9FVTW8DsEP3ptNNpv1qPL",
  "key19": "4LcAk6vrpKbzn7BoFr3z4aW13aXS1t4iDUaf3kFa1pDrj5Fvn5zAVPadxYxiZKV2oTvARpmfYzQDqk3vLSUVFGCP",
  "key20": "3BJdfgxtePUfhRPQWRiXEEK7jMJmRCj2ZAXGtRNN3GVqixsvBNtAsRu5ZYJvMkBPqEaf9o4x64oRpjhWqg4ziC1L",
  "key21": "2fUXrXg2NxtEktvhmXJ3QCqXpEvvS1oH8yqmfRPMXAhBpPfbqLGM3ieFZYjuzjnY1UDuChQ9v98mzwHJ4EiW8cLU",
  "key22": "3G3jtWZ6AD33w2bAiUN7AEMmx1oHpDAEszY4WZBEcZHdjp49szwNEx2QSYE7cXTSECoqQPfv92bdtBK62NRfTdNA",
  "key23": "3n8oGWe3jW2mJSXaaLbwKmvcmjKYjaAsCEgi7ZMfTtFwY65bYXda7rfjfe7rgVZaMA33dgNahcwhZUigT3EX86Qi",
  "key24": "5GXiDVSh6CGcRKoFjtpfNnfmDCyMiCSNXGXyHYuMTFYFBWzxFhvdnvmXLWus2Pz81EUffqnLAgnBwyNfazSRgqsQ",
  "key25": "4u53REei83ergG47HLtLTTQ7ErY4b57wXrwxf41mZR5XAbPsV1yEXYrZHaeCEtK7AKVPdjvTiHwfkmAmmUKwSze4",
  "key26": "4396PnKYXCHorZjMzhJo7SykziocMJDE9S5LSazVotCwjAD2B6oVb9HhoaEhXUFvvuwo1nyANWVTG4xe3rGEbv2a",
  "key27": "5pJHPHdZWaZZ9USWSBXykr9rzffF7MFVSR8cdd1HGsdY5qsXvyFM3w25gpS98CGUQZaKwjC3SKXbqKS9ZwwQsrnf",
  "key28": "48AtJEUP66eN9mHDa8DVBuMG5tTnPcTausLs2f3i3tWAV8XdjgSjgpRs39BoG319kqoG1D3EDo6SMiCSRujqNS6o",
  "key29": "x2y6hU4FsWKygctXgZLVm9c2CT7wwrCrz2a8wkdN6dqxgPAwrgvWSXQwye6mEWk3WysMTzS8ijFFPrEcxfwKFNU",
  "key30": "2E1u7qBuKtwjEN1Q1AsSYdwJRTkCRdQGZFG2WQ7qrUUHG5yMysF9suP6fti5wXATyHjdLZEb68mraB8AzBs41zb9",
  "key31": "37ePX7GkAqubuBnoVHf2JffUCVn9jgt8QyFz3RyHcfh48xuRXkyHLi1PKN3dxhKZTa7HuohGTrFkGaJGmU7Nz3T5",
  "key32": "ofEcaHr68UWXZpAfkDEK5MZR9PjAwMqVdAM8DS3QwBtno85Zwf58ugTnVFfSwMgnTjK3cMtAXnr5bj7tTCEk6N9",
  "key33": "5FVYqHQCQfAYhbweZHVqCVKuNnzdbEk2Luh8DebkCQnbvzQop3gFXkjBxKya9h9W6kheBqd96wAt9ki9b2LQW4Yh",
  "key34": "4n5JYcMQiitVP8XGRTvDEqqnPLdFFLnQfnUYG2EoMQpzhQFnnJjHQX1F4PXq9uMzL4dsgKwmVK6GsWEgSc1MS277",
  "key35": "u4Zco6fdbQwaqUW7Abe8dxp1pYccSh9bLwPnFwLS5JW65mT13pxt4PPz6aHRnr63maKFofT8LVUTPoeVKvi5561",
  "key36": "2VvX6mK8gNWSL6MSqAPzo8vvUqKY6BA8Lf4bgumKfjzJE4N6CeTrHxygjxhnHf7HpDbpyMbbRfUZifePncgohSmD",
  "key37": "iEbWycHsS29LPzfhQ83XRuSsFrW9bk7L5Hwwp26cg2b4tmdeWUBSEk8GQ3P45bZbm7V8Uwr5FMdBioUqS3rDZuf",
  "key38": "NWdu9Wo2ZFs47HyRERq1SH5BJ7AW6Cej1jRq62JGJMLb94xqQavGxsPEwvmm74ETZqRpc14Y2E9U6uUK6x9Y9qW"
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
