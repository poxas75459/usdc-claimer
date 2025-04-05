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
    "2uNMT68dBt51WoVoecWrxRYx4Uicixuo2RZ5kKXy1sgDEqHeLLqXH1HnvLytPM1qr77fiRq7BGXP6HZebniJukh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xomjy7o4AAzxNuLcTz5RBoFFQqqYCgDcm9LVLu1jFJACXXfGKR5yHqzBCGNAoyfzPP8Yc7HaRGFHNEvAVjqvZp6",
  "key1": "46X7hkxDn7peZvNWj5xrGoNd5cj5AAwvn2HW3hSRf4ZPt27tG3jE36ULecAFQrhxTbfMkxuGYrhoq2bXeTzDN2kP",
  "key2": "5LNdifrA6uudiDVH5VsX2N6He3S55xJQT5QD9PtUVkwbg6hjXdLixwk4sAYpgiCPpG7RYgdzgmfJzyCNKHuEj1mg",
  "key3": "4pHAfuasytpNbHq9Cho9q62yd8V5RvPKcz9CgGjoE3N63HrfURiMRVZkCw8ejg4mrLjaT6oZzvhKQF6a4FXQXz5p",
  "key4": "481okC71iod3X4rNYRg5xC6DgfjYcWbbHsASGJf4SEiNgZgBwmFoyPL3pCN9mQhYTBoy9oCfT87TLwuNQGDfzykm",
  "key5": "4yzMknbibN7Qe2rms3PnCexmj2cWUQSdVcSEvnXHueZ38xASiP1qCqoh5HG9VMEYHhJYRqz3vsKUHKMuVRJqnHde",
  "key6": "5tUgwmw2z7X5CkBKt66qicAxgcrkPqWmFnPpgwVmRFjCUWE4EK3feaTGF5coFhrfQqR9gbFWyBSrpaqehW2GrTj4",
  "key7": "5jCiovcCnsdiXMN2kJBFY1Dj6PNo8XoSSGT8W5nVEbcdXxgvhrJiQqBRDnBophZ4nmNfxqwtSChXSQQ6JXsdr2m4",
  "key8": "3tDhoBCCBTsDh257EWDcfQeoyTovTwyLnnDuwdMdkfnJFfWYrQJx6zpCCd3QgJJm5V88pR9vpsXAZ9CkMx3QRdec",
  "key9": "5DCzMAdRJE9bSb7Dr7tvd4iVhwuVdEKvTTt3AH8mB5vptKEFAGsyctZVsbezmkuqyYaJ4YjCVx1TwkzyztpWHZVj",
  "key10": "5WFAwFtYRRkD1PoDGt9wmVP3toNMVFdFNFiR6LBBWWoYbsRZFhRqxDk5yYKPgwdRVUJXgHK6hoLYxzbNXuj7GWi8",
  "key11": "x8qX3r4mcCupnc6EhCy4NQWWkUjVAPmdqKLY75gcHPo3xuaeTEeZiUQGsSHxqDTd7aauarWG2DfUtyYnfFJ8QNT",
  "key12": "5kLgmAz7XW8pCrNqj4W2o9wetyhQDaqfS39Y999MjdSPLjT1755JTW6E3ta5Tg8mPhCCyeSqxWBrE7HcGEv6o1Za",
  "key13": "Nz56GrgSV8u7p1We4NxxMcfDBMGaJFP9EirVnQtqS1t4wQkXPfd7EEjCaKn9u29vCsP9jK51a1y3QiP8qgS9f3t",
  "key14": "2AamBzXA85dECU3bjjeyaSkH8pJ7aqGZevtFEiQVQ7sniQdE12KyU6rK4ehUKndp9sgVBj7Ao7EM7VjEjT7wWrVt",
  "key15": "3gNP7J27JYLAAqdeVs6H3yaJis3D3N84aiM6srfao5Ken2DZERFmKPyY3VZ1yG53RE2jVutisWrQdLzPXucvVPgC",
  "key16": "2CATQWwaW9XBVmh7MdLJh4N77ei6uj9W5RSyrA387mzVJKFrZ4GFFYk8ttP6HswDNZy77mzaDZ3jyWPjQL9AG7qx",
  "key17": "4bS7yazcVdP9vnZhbJFjxu4n4H7h8dNDN7LPwBKNiF8XqzRekWTfvAWnWWLjPcbkhVEA2Ky8PPALugkzcytRqm7",
  "key18": "4crPQbSuwdst6JvU3kzwL9hdjhYVxBmLBbjAroPrtyVXHpA9GwJeiq1wmdE6g3fwy9MrzDXnHPQXaWSmcPuFWgcu",
  "key19": "mJeHGvViuo9w9pxuYujtjTV6GpCXJntUd8FT3HyD6vVFthVuseyk9mMCJHp3oPLfGndRU5dgmpdLLb1ZPpj5pEV",
  "key20": "3LjdkuHiYgB9P3pLmq9LCyCgfvkmHE49ueQB8kyLEFLvwaJGPUcEQ8FwHwzknMPbsKXKt1iVYyywiF3c2R56znHa",
  "key21": "2Fxc7R5gmMj9B246yJwDyCdrFnJ6GAX12xsEXnAhYCxcErwVf1TvG9LnouXG7KirvdV5riGefRmYrVrSkBXYytVW",
  "key22": "3bYfgKDRMZDm2LDeNReA5jCecnTKdUFaUfWDxLScq3qe4zfAQPYKFG1xsWDXa1szFB2PDNfHSY2pfXCvaEJ1Ytnf",
  "key23": "43reXh7LKZUjH59oo6kXwdqRMEDPBWDZt4jifytCuMPBqxoq1xjXXv2jxAjQoPx8rozfVg5cbZ9rQZ4MNUfCMrFK",
  "key24": "3tfPBb1n3TjoVQMF8ihuXcySHWAdrz164PkHVRvZqrsxj3rQxt9RPois2ExL3b5M59n62bGwGJwhFj9YjzFZ1HL8",
  "key25": "2m5LuZrL6mgFvxf7JMCmDJZwch5HmG3kSp2Rh2MkoxsPakfYAvBee2dCncsJPqWsy12sFNDodticUyrAGNoubn65",
  "key26": "2M1MgfRd3axfndmGZbPDuAmcHCRAo6SukyrC6DSjWho6f8pFBVr1DMQpQQjvJJccNL5dXpZr2RHma2gvJFteZaEf",
  "key27": "2k6eDttj7AyHKdTJcWKGCg5g4frhHez7VK3qFsxeBe6uhtwNBVdmJopzP2G6dXMafrXctkkA85M6psCP5i8vH9ni",
  "key28": "4JDXoHHVJaaajhXWkiiRRM2VJZSY4FVf9S3kgpHCcoVAvpqt1KeVjeMTLfCe5DuBvPgYmi59MXvPFqvKDuMQNgVJ",
  "key29": "4gUobnBBcei2t8nViAv669WK3FNTmUNNpdtQoRZyquacnmaHGxWX2NLCsg5jHcJUEgYV1KKZivNa1A9NrDto4mGX",
  "key30": "35PTk6dbcAatK94YZXF5BP7EDEJLarjL32bSTeB7Cp41YPQHR5ZWsGv1MoJpzzyBjbnSx1adjcEh3KAhSRdP4MZE",
  "key31": "5CGcB8AgpRvBQFoHCZyQJqeVWqpNR2zkXXaZKeq67jYr6G8mxzV3DUGTe76gh7rvjkUcYav7w4azBvFHoRNkxec",
  "key32": "2CTWZAu376bQd3jPhGryXULteU2kRH3MDMVMxdx2ibCRx58oL7DYF44EUZDFiwYsPaR6qqpsEitXChDPHkAJXFP2",
  "key33": "drkjoBMLdAPuoBNQYgKR5k2wiGV9Hn6AJQc1UQPaLVHtyKHrMWKTqiLicRA2er7YBpeFM4kiUdAaPeqx7uvDNSN",
  "key34": "3sPstyYf9CqAiSPFPhd551eiL49wgYUy8RVhYcjgixrHYJVs2kTf8x5oM5XRtZrJ6rZ3CUjfPqEkYU1nqTFmH3KW",
  "key35": "SeGito5R2PAtGx7n6yy4KybhjpsoDFjXuQCsz6GE6KgXN8NunCbhDiskbYFcymBZ3rD1GhdnhRDn1DuPXNaZjcR",
  "key36": "5F3K5dL8U6dX3Mzyw3sGkGbPwpU4mgNmu9V6gfo6cYU6zw1PPApN1yz6waxVUv7cbvWUS8kmbFEPA7PrrgKTqRw4",
  "key37": "5rVWMkKF3vjLgPYhiksZsgoiXPM7NPBMS9UA4a34qPBMyJNKc4nyNv2BXWK3YB8LjZhvBHqoPqs5yDQcdbL49ruc",
  "key38": "2VdzEUTTQMLLXjCkkchWp6vFkP4r95WPVFoFB41P7D6qG2vskgEESq783PrVooFtCwF1DARNbamyJYyZ16RXvSnr"
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
