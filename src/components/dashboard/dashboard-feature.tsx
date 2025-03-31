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
    "2Mt5YruGuz7JuZyVaVhi1VyGTDzcSeJtQ4Zqp5Q3GiUuVyeEhnznyKQFx6KCCBpkqd6wuXEAEjRSq7yiy712nbPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbGFVSbKWSNpPpSqVNwKfdzgzhSXuWq21BDa8UFMABhyNi2kMuEttucepe45gRABtasGjuJGiUXBdSuL3vusBy7",
  "key1": "3mitoyyBgNgvLwncxNM86dibHiP8MV6uxQBFJgTtr1HNq3byRFHFXG8tzDvbRPUwcKT9tomqF6fKZpqAbMD8JZwJ",
  "key2": "T3DTCoCFX5pa2CLQvM4e1dWnyxmAuQJQHVQQp9YftvwBoypC75cnThPr6ieY3gmwh2q3m8rt4B8vCpByLAV4AAo",
  "key3": "4emDfBE77LaxHdRSacAD3juawVuWJNDAhBsKW3GvFypQtMYjEGGfCFu1zeYo7wbkhwQyVmdhD4qnpVxEGfGzsc25",
  "key4": "2sbo1qQaZ2xHPSRTX4ZSdH1vPeey4XPJjEFCikmcB6H16S9xHUmJPqAwAjhuPbgNAaPL189Rm8XX8g89HN9Hpxsx",
  "key5": "59o6Ug9coSZMVhFDtUEyB47xkdmCPktiPTkAE7uE7iD4aWaF1MbLstuGL9eXLjorLj6dNEStUrTQuFtT3jzj5fae",
  "key6": "89X7U2y6MTxTAPCtcGZgPGJDeFt975yaNVzHTfk4RxSL6zBvJHDtCuMWPs3ZS9xXDeFZZ2ePxavhHRp6ZBoEz13",
  "key7": "2rgGZBrX9q3ytN4V7TX2AuDBT6FyWDKKVofM3Be7F4agtUad2k4Kn4va2nUCdDQJowBLQDLCgn679rmyy8PM3tCs",
  "key8": "5dYZ8CgtVfG6opQPpDKgGJwRRpk4cNJjT69qktEkgsJwihFR25wshy8jY8fGhgXrohaKqiMcsYJ91PQnbTPwBrx8",
  "key9": "2yYkhkQ6MwtxbGz4ERZNvAYTsfFkMHhxtF4JcRtcyq65gj3NR2QKDoZYMAXm9mWKZLtvXacrwRKydvjKK1abqowb",
  "key10": "3RsKaSC7cD1hv69rShBqyhdEi83FqAJqW1HQQRvA3CvrUJTMJMsT42n71SoKM7PK7pQMmBVrUL6vB2YyH6RUBq34",
  "key11": "23ACryuvGvSBcUaV8XHrStwzQqft1N6rurUd8W3KX9E7enENBSNG6draKetA1vZ5YY3VYer6oc7cA1pDhWgkLsUs",
  "key12": "he13yoQhbDVQkQQSb21kLTQTT8RkiFPNCdx7qdWhwgwr62nj42GhpMdAj5DtfSWsvVNy2ZGc4m3h8aH13UHyAs7",
  "key13": "X1R9WwCFQoHLzM49KTyou7vd8vUtTpKS8tw5FzLZgevLztEh1hhp1v22xT4F3T2SFtLRk6qBrDLcgV58T3WofRf",
  "key14": "5QmsRv2Vuc5uooSSWoQnUaf97ncK99DzNBvw3zLQzc1ZBk4PSELHR5B6XNrPDvk9wT5AMqZ2MzjcWojXVbDfHbsA",
  "key15": "5mEX22GgCpPgJpf1eiXarG3CDQEx9SxrBkeNJNA6M9WKTBLnn8gB8LBkLX8jEbcA6QdsEorUvw1sjgtoiFP1sJWj",
  "key16": "akiZSMHFvLbvFoquZRhXBzrC9NXNSgbswU6wxJkJK4vf3cNfgfs7Y1538UBXb4rdD5vCRfx63BxpbUZehgF52cR",
  "key17": "51HaHE646DCUSePrturn83D1pyGDRYuXX7YFKZcsjpsdqZgN9Eugzf2TZff3DMbUo4GcYmUZ27kY6NB6xhkTPYTv",
  "key18": "4Dm24FZKAErc7fkyzaucx6cHzSBLoGQ9527uLag15BKLUbhZGBRxeZE73km5EDsqzBofSFmpZCQ59iJydu4SHXaP",
  "key19": "gNt2JPSejjLrsmnRakD6XNHgWfKck9255iiyPhbLdozDxm92EQ9e9jJGxRiCqRGr965iHYvbdnEyiSZ2PkPMhz9",
  "key20": "4HeW1ywY6q4p6KZqgUN94wVizT5Yvz4zmZNWjkhix5QPGtEody7tRDU6VAMdyqK8Q2ogy6mLdys3tCo1f3Bznkp7",
  "key21": "1ZatueLK4MEmw5bZ1eY41woKb95LxcgkqE3zTEyZ5gGcfmK1LjLPs72NyDKwnj42gWt5FGeA9FfCyNCgXooQ867",
  "key22": "5vXswBZXZZL2AR7D4EWW7khSEH3Kddb5TJ9aRqkF2V7Kzaw4uhZQ8hS6a6F2AAqc4YKovVexMRWxrSjWsYDMecK5",
  "key23": "4jEVAqgAFpmdDYvjiA7SPx7eL7R1yPLhN1JkGovZmQzQH5BjZ21keFtE2LJUJ7CFZDtQgdrjwdV5mm2QxNDyydpd",
  "key24": "etTVo7BHiBxVgdZKQCSZ7bkW8r9XRDsUbDrpVqDjnzBg9UFUESAoyguXJj5zFyUJJRy489Sc4FVbx5FB78aeQMH",
  "key25": "3ZLQWaLqDbxjUPwxTAJSgqVP2Z27qXDP2pjrKXy48cPXgnt8nRmTZsub8cU28BdtFjya8JtuWHGCaqZVozBN3Syn",
  "key26": "2rHWMKgY8NB7jnGxybcqpfa9oTcDAzH3AQgJeEbbvm6CerftgZzJTzzAUfsJ8ZWnt6JkRZ13tPq3Urtyv3vnRcXQ",
  "key27": "fZsBc5LKTwPcuatF5nCFgLmrRW8cwzifhgWw2XqKLfERV682scezs4NEUuCxuQsdWEuvvvfU79xB23D7oN1Lmba",
  "key28": "ZEBtyf1mqbYWXfG5YtjwfLjjTBf8h3dH2wtqmN2oyH6fGR9Y7gH3nqxdyckr5udS6dCJt4DgEguH3KCXQ99F1wU",
  "key29": "5Y7jDgFWNqjxsWqqBtsDKkm2rDtEUo5k35LfYYiPBxpv2uwpa47E3kHNH5sft38xbApXGy1xAiUiGq3bgfp3HtYk",
  "key30": "55HRGgxNcCF3STwnWrZXAAEqDLKDCeYAaQ5K4iruVG74LtUKt9pKp3H5uVQAs4Y5JVm3nyVmtxZxmBox7AoC7uA4",
  "key31": "4TMh8d6WaS9VFJVFrQRiLHBqkjJFwbW4Bpdd1i7AuH7PHEjuzaY3kusUuohwBzfP5fjbVmaabueUWewu6bamdvrY",
  "key32": "23QjPgscmjTpkrnedjGuTKUMUYvXwuF9LP9PY4dd8DUYTZuETqjnR1T3cQpPq5H7q4YLnuTCWHNRhq1bwJuQmNdh",
  "key33": "2wrrw7dD9NrGRrxo1sxQEVSbKpzzHC4Ai8qRihDfWvy4yHxJoGTU7kRTE7WxqY4eD2MzkoEbCbkwCiVxkNjTHhK6",
  "key34": "3gTJJZU4rfifJL5R67GkJWtZJ8Xd6YdQPDQ1Rad5M4MHnSsEMNYRrj8eym7xwYBxCBkuJ1jiJHrgA9gZ1Sb4hPsR",
  "key35": "3hRFUdZYKXXoCA3fZ5ESvoh7mbtHZkyxiC5KP2uVW68cwuQnBqWYMRtCu4S8DumqkfB8MZ4cinjxUQFtuGnoEy8n",
  "key36": "313MmhWSFikqQ18W2Pm9KbGAfqFxEGZpEcx4aJ4VPwMgpd9no53yLvrBAGnyCaK8vkJobdEyzjSMEk9SDMPQwhAZ",
  "key37": "56VmTQXYXUkFvtvdLJrpgHMdknKpBfLRD7GDx24Uf8Ms3iKwaGg3Sj5QgceWdQs4SvTo5zkXEYxRe7cjqupZuMYv",
  "key38": "5gVpEEsYVV9MTisATtd3a46Ewwb8PLK6FPJJBE2YfY3yxBFcjJvcXVTvCaJDWDUoKxrXULvVCwDswmRdiZT6Hux1"
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
