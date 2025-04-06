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
    "2SUKsxD9aac4bpL9nRVoDdw78gttx2sDomwrmNrjQgJt1wqMuD7FzqVRRwjDZXWLgpJzEAEydoGU69u89zcUYKWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyCRmKuQENnmAewFTkSieNMR36s9JCXnsKs57gwW8xzFiNhSe1uGpYJf1tohHJ7nPYxK8ssLL4W5MtPq67shHv1",
  "key1": "647zPVuhYq5zWejsYhnJgp53BHvZZX9mKwg87kiZvsmUGxChi5CT3U3oQQf5yYaNhNcfzWFy2TCbhazTY1fLqzev",
  "key2": "4YzL2k4e3zyJnnJEUYgeq82N4VKZcMoicb8cwexUqJGwxNzwJ3jziZMSDdpdJn4Cu7vLhuNji8GgmE9aJD7ksPnU",
  "key3": "d4zmptJJa9cYBy8HaQmEDTXujFAz1KRTqAmGd2LExTX2oCgepmkjupbyBLY7GMtpKg1Y9qcfM4wyaarLNCeNmmc",
  "key4": "4N7jdTZT3uMS8kbS3379wgYx8CE2J76ffbTtiDEKEZAZEXotid5yrnoAGgMEmVNB23jb8FHkzi4WZLryncYACzN8",
  "key5": "3nzyiYsCPjCon15an3DKFAe6MVohhY43MFNc48QB5egcFd8PGDK6k1SDUrAdH7SphjQFEh6v7wQ6hut8KJAVd4eq",
  "key6": "2i74DYsyxTr3ojAXp1LEjpmjVSuSwpDRwrtgfuNYJq4jKeeb53p3fLxpo2o7w1NLhgZ2dvE1BnHupHv1wiYCxTb7",
  "key7": "5MzTjWnJagNMAMK9XYhFm55PypZr7u2yFCdb89WBsthRuYnVYoSDEtAY7bsZBYTMj3QUir7bU7du6qCpmE5uYZYf",
  "key8": "4YdTecJU38NWhHtJ6Ga8qVMvFFZuTHNAai9sCyWW1uT2QJ7wFe8QtPi29Yg8tWRB492rQANTQanK4MEfkmpZqefM",
  "key9": "dBbrX7utzg7YbntizCp2UHk9raydqiie4ioUoPh1XNNoSnCEdLMq26SnfFcJBn93SucX5DUKaRrtXnZcNst2FLz",
  "key10": "4iqyG6Mgwpcxgx9SrC1dex55DCzPyWBpZChSwJSfjPyXyzBdraLBxKp21f19936GPVzGwDvkhxDSC7C3MPxPHqD4",
  "key11": "4PMajSmogr4UThK6Tmy2FNhygzeHXYzA8F5xwr3Qw4xnLRq4gWrdokconsaN1seynfHzGxQdKbJgwsTEZS6RhHL9",
  "key12": "5YCJ5QgWEF47kCkk8KnBneXM6KJ9mJUm5gGYSw6Z4dVo54UKAabRBBUrV2GAnC6RLQspa1DRdcxVMNub88Nukaop",
  "key13": "5kNth48gssjYLhmHPhWeEoaMefjAwnoCQwMNuLjZdW59QQXmF9GuztpUPNA9wmcCamLaQEthkSnoSbG1rNBmFYzw",
  "key14": "5Y1p3Kxv5tJSKUUHN5oUMHpLwaRaVUpfN8ZuygcK9JWBjcHAz8BQAe1QsriRQbqPUC2q4suA14WEH4dutnjXdurp",
  "key15": "3o5BPw8U9tP9E5L9MzWU31VpQ8D5PtKgapdMyXDsookgtWMckwGqAHmeKdTq2zcSiVMHGj16JbS9expWvQYP3x85",
  "key16": "47QXeD8W9huMnngWGxS5bVbFjBPjCXWBb9S5cz5EeFAv1RD4YYhZiRBHEXARCpivCaMnLMeHmJoqUwMFq5R9zm7r",
  "key17": "5BM5vyvGHMnko8puiTakXEwRE3yNQgZTzPBCRab9XXdgJMePXbhNcx3PUu1EZXDDnJYRePVqnD6whNAAbGRY59JV",
  "key18": "3Dj2DN1anL95s4UEpnTwdEgZhCLSgUL6idjqW5obs6a91DEXPhjFJgbF8wzC67CrHya1VipqZRft8AVABQadzVjY",
  "key19": "2XDuW9sNPfRsHjiwNwBjCemaWrsfoaXVJLFtwmFD93wApMfhuLHxWfsqh51jMGToE49BHpGqX9n1N9hcwfBEVV85",
  "key20": "3o6G2B5j7QsLNE5Hqjnzh6ajHaB7dwm9CFBh78kykbTAna42aNmUCq2H7rxjtd3nSRsceHXyPeuAy2zJZ6s1nbQA",
  "key21": "doico54VhxL49uXXKmst6cUuXvnE33cBB2t5mrCynjVqMJTUmYV4qxLJsURinQpPJCM1eCkzuRRQwUSRs9rFdvw",
  "key22": "4xHXjJPmHdmgPBgXbJQNPpvxcnk85s8eVCmXGP1nXB6PYHZAafy7XimAUgSMtc9ByHkaWjiRmkDxwVu7Xd6iNDLn",
  "key23": "4zuhqwD2K3GtapRfZz2fseeSsKi5QWnDrmyYFtGWUUQimnjsuRcGK3Et7baVZMyeeN3DrQDPwZazc46L2CCZbYS8",
  "key24": "b6pUvCe4kz2MhevtcsTffG73xnKcVVp3wQefFRyRcHkqwjugS5pYkrZ9j9r95fc5CTxCZFByHwrQEsecv938ro7",
  "key25": "5sWAsh7ubTzs6ZCWpsrxsPRGxi81B8q8DPnFvnrvsHyfztkyfd7MMzy9heKKQrrxc7EFV4fL8BDNbQRVLqCnzSk5",
  "key26": "3QxzfLaiL9BYQKLasfyVsjWccQuR3yRLzxAhYg1iWrNM7JWiMbCHYKp7rmZvDX7PaDwPa8zu32kxoFakBdyypizQ",
  "key27": "5qP152G2CJDrgvhtHw4y5eLC5wsSLdSVs4A2E2ciymuVi3v1mKpMphi5YBnC5M4vUs44kiaMeRCEjZ2vCS3Fftvi",
  "key28": "4nXHsukfVHURrgQK3YjKT1YhxGmEgqzicYPMzYa7p68Xc3pSGoTAteTkU8bpmtk6aFarkRPZ2U5naJLfujfQP1zh",
  "key29": "5vCNRZ9agmn4weDRwEdfgDTspGYxq1VyLGXBj697bdNcGvuPzdRQgYeNbZU43wwC6RSeM5cpctgpf4r8gs3MnTG6",
  "key30": "wBp9ceawqqsKu1izLiH6PtnuJt2eCjgjgJxHYUpeFQPN8tuNo4VFAGkuQpdi4qcye7f2dPXZDbQEDh4H1EEYM5w",
  "key31": "5Fr1EiuUvbenZpGKz3e83rQh6yrYxqSDVWXQBDGgVN9V1mYvUsK4vaE9VEbSL45nPc8aZL7Upfms9sfcA7jzws9A",
  "key32": "5qa8ZvPMdCLMWBFmE5VZP7C37c4GcHVxQexJKvtebNijwhbHx8WBzidvsjJQX5FL7XXGLHD9qqfP2zrJkLqpekvh",
  "key33": "5fgjrQVnCE4n1eso3iwMyPKksV2DCwUBAA8P2R87rAFeodc3j7utUjU6iuVBj3xKbDxzcPNpZHSeb5tpDA4GdmXT",
  "key34": "52d3r4ADuaeVynR4rtpAASkGrMT52EHgEDz4Q9MeLgKKuwBHj4uFf2MtHSuNACvoeean7M7owDSUYLHquPHmTGWX",
  "key35": "GdKhEYf7YQfxuLD9dP16dUS7ywJsp7pryphHpv5SNh8TuBRvGJZn8vxG6Q5W2pZvffsJE63AHu8KhEUneDktZD8",
  "key36": "4wj8cj82tKpNHqMKGu1EtUe22AEZc3CcnvswhMcVd7K7apZA8aW2JmwkJ3anmY9Pnh5b3aAMjxqBWe7m7KhYhamY",
  "key37": "2TJvW8eFJ8y4M4yTUGKHjZ1eCfpjfm3VnNug6duSMZtgEwxLbUuJ1J1B7UiWYsXbZ3YMyFALRMLXpKkq5AJNZ7KY",
  "key38": "2PJqd92eVZUKJVz5g84cfcVZWkqAMpoFnhbBvDiz1oqvcYdXzxhMWDvjVsa1RorewWmWhAqGBEjpFN1JFtx82KKh",
  "key39": "3eBePj1mznBYH7L3aGK3GGPJKuS6E6YsYmDbpxz4Ck3BLVuRVQkxFZZceRovig3iqhaSf9ShJiQixajkxRXZDFLD",
  "key40": "2PXoBMTE8pTTASGpUG8LRriwpzynjQVb9bEdngYPZU8sTs9rmrNcom1LtfEaT5EQL9SDZ3RrEf5QZrFeTbop9PNP",
  "key41": "xDC78kW1zWZarzyoH9tfbhzic8NKh3wEgSWJ6DcfzuNtKtdCBtY9jnoxsKZJJQem4DteVeDcrdkep2Uf7Su89Dy",
  "key42": "62wkAqiAVTyST8y21wdyTNpvFzt1Cf4bkL8gik4epro5k5hRFUka465wUp7NSjYgdZ9gGfeJ1tCG8okUs9W1qT43",
  "key43": "2JBkUFAKni12C9ipayhimM2wnTJ6qGVZKoy56DNX41oYshx2UmR5ub6f2hjxtXh29w9NoBe6zT77UJnxZMnbfuck",
  "key44": "5rHHFL3QWxQhfsZRzovvNVJV7uJqUxN3URhP9dtrm48o8QGBrfkZKXQASKSi9zcwQV2b6PZwFccZcaGTRcCGzA3r",
  "key45": "3ebuqtH9dKeGnN3enRdP5cbv3iFKBqCoktBpUubVsG1QMz2SCE69FzwBLRdFqsSShTyPsxvXkuzoW1qxew1Pz7Q",
  "key46": "2ww4GoLSPKioy191j1tt1XBPxC6tXp8jP8WtyaUa5VuwsyuPkRMsF9GqfVnPTEbyzT1rULtNo33f11b4MhNzE8cS",
  "key47": "5bDhqpkaNDHDN8QZJFzLvQVN8uV3HWxrV4eb8WzNvEUdcCJYc6FwiM2etcDXoCvbt5P92agYC9CGer3aVBjMTUw5",
  "key48": "3PsrtYZbPUSXPGbvGCh29YrJPUCaYhcAfEsC41LuzkhofCLCcug4ErK71NY5CH4DBAKJYnLsYi927eocc2tYpPpX",
  "key49": "4fWug6UBbj3NKPDerK2JpWDhdr5XTHd7TsGwZAaR7p3kAPwuUfVg1cAFPRcNZr3sQuLaG8kdb6iCbbSLCcdwhDnx"
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
