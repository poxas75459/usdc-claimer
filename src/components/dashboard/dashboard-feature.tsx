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
    "4LPQZxKQTz35bgXdJGPB4dvv4uoTGXJx8osCm379EAWZtiZfY3xKTf47nbeCEEe3LTPAhcSGRe8XVzgdcUtuEBsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tk6NKxmAEmRtHxDNv7JkxN6nSWhoi3mhu9dE5acz47U4aF7TUFGzcv8PEMJQWDoWiHGa33SZzkz319Z5cqrAwvm",
  "key1": "4cnYaaDXgM6LkJEd69ebPh7M3HRmJvsCJ2uPg14MGcdShx9rKNBcp36nVuWjMaFqRyGKREKMWCQ8MZnPJ3aJYKsz",
  "key2": "62nigW4YLtXY4ufQH3hRTvcfV4xun7B91n8R6zMsix4sgQ3JJiWq5DvPLb3khAVEgRiA8JrGpA26br2L9MY8m4y5",
  "key3": "2Kq5vvkVcNXzArSmCa6YJohG63zF9SqJLcQ3vsZ1jESCbyWyNjuZydcoGhFqqMUW7H2iu6xtk8rTVpVKixmeqnbW",
  "key4": "2YM8FryN1dgohpWoAskuEKRXrHF2BccXNLE8ozmnagGhHtahJG5FAhzAHtjGtdXjSDdyAMza7zZcXYhFpAMMo1LF",
  "key5": "4oEgHeEw1Zof6vUYDwv6uvYnj2RQYq7euzsg7qgvVEuZn75mHcGegF9u9T3Khjx5FE4ncdM4fqQ7T2hW5nqRZNKw",
  "key6": "gV1ryxqzFr8GQkTofxPqVZuPXiRnw2eNCKiPS4UvGiu2yndHvrcPC7382B5CUXduxht2UxUgA7B6Bp8UsGa3Pbr",
  "key7": "LMSKxLCfnn5RTmQs5bDJmDxnwLtQusSy572C7BrYYPdEMRtqoZoZd6sM8bsxAuNZLHgT5Yg41k5sBzKemMRYxue",
  "key8": "36NDSkbcrwBmoLp5RXw19XAeuBWiuX6gTLmvAkwU2yNwD6qVUnEDGqftRrm8wLkKxrJn5FUdR7tYj1c66xePv7rU",
  "key9": "4z5SZ1f3CUSRcY53ihPz3R1QDXesZ2vp8C2nZZJoYSK49joUWtTFR2tA3Re7EJGWLhbXmJicEu45zBkTL8dzNHVo",
  "key10": "qpRUGnYwbKCWqy8Ddewg8CqyFoGqao8WDA86yxP2VbQYsamqtjFMmpMxuPUTKKc4VU1dpUpAD6T5BrYSfYXd3HX",
  "key11": "5QhRHM3h5N7cBYYhi8xaksQg71Khp2vxTsP8dvEEajmm5bYLLtmVb113hwB8JfGWJgk4mgrYLp39Ag9Wsd45GtQ1",
  "key12": "4fmd3vgRdDYZvcFnSsVhdV6AQPnXXgP5GW9Xmb2GuXFhNco45HtE8MXZRReJrX1Spno7X91HwxwhhywPuUVdFRaH",
  "key13": "2RgMD47RCmzyuo3D6esCt4M5YDjz3iyHkMz5h4EH6XXzb7ue7KHE5SEGTXm8ZGgvXqjjCCDz1A1FPxz6NvsG5aXi",
  "key14": "3dahAJYFBJRQVXaGnx9Cd6F2vVkMjHJCMYbVAjebFNJrjZWDZWprrc6FkajxNsQ6hvqgF2wqDuZJb1oyjzZetfpp",
  "key15": "2HXHWUtRvLjELJexMadD6buWEAhCreFY2EHQg9d75xKD87MZoaRikeTVPxEWVUVL8GtGibUmt9PnHUZEp54VBwfg",
  "key16": "EUBmigVjnuse21VHzXhrNFxvQc7j24GJgUtgSUYUaJPmKSvFRfijncioexv4yxJb3CZAV6zTLYjXfES55A8DfLy",
  "key17": "61rN1akb29UcyCc1s9GwhC91XwpyPmw4yJuU4TUEDxxhHz61Say7zCLGtCVxKUd8NxiNwHRN3wvH22TYJsL6XqVL",
  "key18": "4fd4YU9nwa2dttszC1UbaocH7C6uBQb1Ue2qxVpeMPKj95DVECLiY7Do2sRoUkHZ3Lgpvr8AxobuQSgZBmXUdneV",
  "key19": "GEZvitFNYdJGMEosEYn9DG44BLdihS5G6cUM7itt8GK1TMVkaLHRgWkHJfsqiY2wsfEXvMinejJte5QwSg7N5rn",
  "key20": "3qh5dteSTnTUJXR8wVxdusjoUev1mhqh8Ekq9b3RhrUdzSVWAFZ81VKsuxmyEdC8F72spQFJJrNi2gMZax1oNa5V",
  "key21": "2xsrZPM9XA4r9BmjEYCPWnRDBWxZoquTLEFhsdBquQ7N1bpXmzF2XvxBZQodPhcEouBBEhDyunrmj5zsJgQbmUYg",
  "key22": "4sKMpWZ1DHuWb3aRcsJAKm19LafriryA6cZYzSMHQ18czRMX9etgmD6KiPu4zATyWLCBdaxniSctf5YiyVBrndkf",
  "key23": "2R91uDbqFuTaAEKf4yG7eMz5BsEP6gWS3XLH5dYSCgLbG5AMmfd3rN2NbKR16yeNWEqGXTkXU7eiwB8BtxC3LbXs",
  "key24": "4S2zno5ugkPwT31LXiVgJpjWXPt58bZWawXn8WHXr23ZPgsjFfSha7fLchAADu64hNXtZMrujC13E9A2M93kiEu9",
  "key25": "2hsC5Magf8n9oWJ1MLXFoLCTmqJCvCoJknxD9osTHmy9L1Pz43jfpEzVwDnEE6fg9dwkA4LLHpA3uNJ5CqAh8Nu8",
  "key26": "2X1AqT2vmwynn5ptbXdMym3WRLQNDbT1qM2s6MgBuP83Z3CEuGgWehTCY7rNyxEoXH7FC2CmVTwhfbPkbf83ajYV",
  "key27": "Ug9Auvkw36a1mnS6AbPZqCMCEkcrtPsHH7pqEpY1s2PjTc5gmpM1dBg75Ys3hsTrWiSX9nKSPHUdLTXtSomYZof",
  "key28": "tjUCiqdxyPgrHf6PgZPiHkiGnC6zYnshMot9kPXgTZhvNfwyTgqJhsNVF6hqWCub1F1UCLKQ6rtoAbHsthUT8vT",
  "key29": "ZDCdEk6vWeb1mVhHMXFpPrbAhWUfjkwnF2GB7JPS3XDHxJXExqGWRpukiS417pK4WReW17a1jp689LYoVse5dxD",
  "key30": "3BdcTmnZGtpx4XjBHtYN4Z4zQZfgYN8mFLwya2Sqz2SJSi4bMhma9GxPUJhXehZCM5MQGwmYhSxt2oYBt1Za3qKH",
  "key31": "5pJih3GoQkegcDmFZFPWznfyT6AG21WELp5PrTA8c7k4TWLg2b9heEqbVPMaERGR2NfdcPVWNFF93ezpvomHZY2K",
  "key32": "5A8AJV2R5M1mfnAhGdPWFppXi85DR2perVSBZbxAxs6KRuoDhGcfXELUvupHJL9Wx2nFefzkN7pEJzE5nicDTTyj",
  "key33": "nTKrNKekofmSz57CmdeFRdUptc3HnLc1BW7hTkrfnqFLzPsgW36KMhkzwu8tcJwVBGc7qgxvzKdEub6W8moyA58",
  "key34": "4LxzZ7gnVZGpoWXJ9DXeZTbT7PKL81jMthsA8a6uJRZPgHYJaweZ49Pc2HWaZdZDZJPLEeiXbm6fhvYG4g7bw7Yv",
  "key35": "5coAdc3iAJZsKc91WHf8j4PAKP848CvEoHqx3yM5vidqozbst3rK1D6C45BbHZC7KZ8QPox6rphScscXR5FyL5ns",
  "key36": "5ntRjeuGfiCTnk5BBtDnkq4WCV1iUB8i7ZExEZeQjHFu4x6nuSBmMcbY136z7gJGQfYQzkNRRXYpsdytsGQVkXCC",
  "key37": "5YSaDgGNkUDXgQ26a1ywRDDvgez9Q9fMzNexvrQXNYHyQAV2FbRHaVXtc2YnVy8BQJTE9pUYVLMBxZEBqjq9wpwo",
  "key38": "4x8RDsQjVAyr92cT92qnHq18iUJnMK8BHCaiFnfpzsKVSpcPkki3L4RcPisqkU3AvWjkVQgUgkFJ5LhLVvzU8pog",
  "key39": "3bzM73xXS76hF7BKKRXoXaoZ1Gc6wRr6Bnm4Bu5RFcSKhCA24XAuAmPVYvPSA255LggKCjQHbrK1foBijoLQY3Lv"
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
