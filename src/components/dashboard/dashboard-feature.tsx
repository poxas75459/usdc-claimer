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
    "RWwSV6Hz8jd9jENmVWvjTbt1FdJckn3BSXqd3e13DGtkBnh9EkvsgwWidvkaKbaLamQUXNiVdkiJNatAG197HeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DvXTbgdcS8SqHmU4HoYY5hS1iCGQJgjLc9gM7hUWrMrzuzuzpYApQGdrpycMrYe6zZH8UHqcoNgnKxzZhy9jpej",
  "key1": "3o5zfT9eC8PefXyyR1JGAnSoxQeW5z5Z2fq78rksdxuKMpeoKLTDWvcS4cqcwi8KGSbhwJ4QktkJcmVYrqsNe7nN",
  "key2": "BSbdxfwzXckPAPKjpL5R4GGFqaZzHNQzCQkDTNbB7TwN5TfkKPaK4pjLtawkAnXo2EUDMLUQnzUDFpzinv9AeHn",
  "key3": "Fqnr1DPoEMJpw7sH85UHjRqGKVWNUHvFda241UPs7rQXVzsMhDQ8x6fewYuwpgrJ83fwgLCyT3Nk8mqfydsiXYH",
  "key4": "2HbW55NTowEDujaa7yQ58GjEPmiBFhrL8hkoYeEwcKHzw9BuACZCBtRqSz3spGt4oKVkKexuodad54Lpz6TjB9QR",
  "key5": "4pGBiyePvxosMgj94fDTqcunUfd4STvby9fzYmMnoHr6CcNB3Js4SGTH5CKuzMQSXfyWwg33PJxBq8jcwg39CQMF",
  "key6": "4Ve8mb95EHUarc52kWyAst45mgavCW8DMrvwMHASj4HESwfR85UzELGWe8KKConRHdbmBKbtSv5BAjDs3GL8LSUm",
  "key7": "3BwDeTfWh5gteGGAC3hC8a6b41D7Taxuf7b9HYMdnngDYM7SzKf82VxcxArqbmBzZjFGiVkQ8DLP1mqA3dK3odwD",
  "key8": "v7yxpTqi5vTvS9WycXZCkg77wC9sEm8LRorLthQF2A7po8JrYMsrimwNFMRNqd2qcBVqFrce5Lyh6rn7VN7cDwD",
  "key9": "26ys33frGcHkK2kg3JwRvBP68X4hQt42gF1CuP4hZAoE5crVGsr7N2oSnnaSXXosQhXknDZECisFiLuHsKfauuV8",
  "key10": "53e7EYaZ3YXkTsYKax1X4dL6E1PcyKqG5t5AokBVDXSMmiDRgsm71Gg1PTvzMgmFMahu38K4QvG2iTVve6rL8E8Z",
  "key11": "UypMT8oMNQBDmA29qe45RQiJzB8KfjRfKtubsQqFvZafoJhQgFseNHqZzXTZsgakWVqxYKWRWhgqUE99cDgKtDi",
  "key12": "2UfZKpMTSnMvDBAZ1P7nZWkXBTAzMqmsYWTpdCYf1Hx2cmFkizp6tPhHX9HWqfnbuniWVUTzxzaTBLJbMn9VErcb",
  "key13": "5MqC5k3GJqSDmthKwE1kWUbwoBCGMuCCGjDfyZmug3kRDg7oPTouMonNvsuddGuDgWp6SkFzEUT3Ku8tFi371L4w",
  "key14": "2LWGiHfXMUjwSZUtJfAb4shtpJv5arsK2y1GvGtwYukWTq7YaJU5xSV67U8DEtZfsm1sXBQRYYCvwYJtLz5sf9H6",
  "key15": "rnGUHL1eHCpq9fhE4xmSRGwBfd53KUHHvWThy9YzSgKnsm8y41kqh1niuScEnnC8o67YU8PUdWYHfrXgpK3ssMj",
  "key16": "2Yt1vf8fjJEwJ5QCPNqYz37Brpn5yu9tZbuQg8q4GesgoEQEbHZVsWYwmsRmBwxFsuAu27UZyv5yxdUkoudMt1x6",
  "key17": "3SoVobkCxQt7cGt45rjnSwKqCEHwtdYM1F6pBdmQ25cDDKKppVuat4wPTKifrkKRGHeExddnAdj3gCkgfoqqMFXc",
  "key18": "2oz935CDuAe5PkjimFVHM6hxwor7Yrmng6ZwdaCi3o4DvKE544grjR8ptNoH9mfZH4FCZj5TrxedzEJubowcLw51",
  "key19": "27cCmVAYhcR6kBhGMNKygscJ4oQKmnSbBd1HCvADtPct6UB7tRbSBd5GQCouFcct6k7AFDconcZHSxH9x7VDVcAs",
  "key20": "5TpCbzStWRf1PhAwfpQhZg8W1njTzXM3E2fd9arkH5dEXHes4QQSJWfxYbSARiBKNQiSGf2g6mRj86cio8QZLxjF",
  "key21": "66ViHe9SSuKutGsD4mvavFE7zcD3FmEbjnfnHo2ZS95uTcpq2jtUkydBwbAarjjR7Yy61YRHiSioZHk7MNC1XQdZ",
  "key22": "39uyB4ZTEi1A86WbvUordsP8K1z3Auz7CBmsLQ1Xw4GHg61KNXrXBTyQ5BMfesepZaMn7UAkKRiAMpyJVVT3Bfe5",
  "key23": "nmPEjM18WLsb9qvmWxA6h2zHYetT25sQAuTGHFDxzu9fZpagTobsWuZ7ihq1exS6UchozXobamhpYXKQyJ8XVFG",
  "key24": "53AczsgTe98gHNvacTYQ7sPCLTjEayHTzXjvaQDe7hWkdh9CR3nJsZbCQ63kBp2E7E7Kp2uoKJcd5evkaVasiRRz",
  "key25": "47D3efpfX39Zh9bbTMXRkYMnsAw1QdbHC66fL2VgGXpfyt7tMHkY6DXFnNkH2H9ZckcdEKz8VTMoi4T9Moyvg3at",
  "key26": "hfsea9E1K2BezzL35R8eKgkQ3rTp5ESc5VTcmdeBdkLN2mA2XU2BbB32A1RQSaMELjqBxwJA9ftMKvydC9F3oLp",
  "key27": "4yfkB9UbKPdS9T9Kq3u5uCkdmt836D2pkFGgvua98VT8bTDJx1To4UiECm2zm54AUhZAstTeRFqhppnw75sb39yB",
  "key28": "5YTRgW5dQSVEDtsFeG4UMrKNosfmNc15M2VmcedGcseX1hXsNwNq8h2RUT68o4qKPG8vbiLfdvnRwy6dvygz1vo2",
  "key29": "4mUdMsAXFQKuma3vHgJpj73ZxxV2BpHQTZ9TzURg3uxUfvYeVYPoM7LR3NRmNJ3zZX3qn9N1eiDAX3kgbTKgGLsu",
  "key30": "2Mbtnf2Vepg66orWWMog1xHt2joCyR8hRRbJtELcN8Nd2zQ7ZPCazAfGkD6QTAmR6iWyVyuqcXx4M5VYui8BKLy3",
  "key31": "3rGeZmomFZEoHfVKtiCfJGeMK9u4eHotXCnQYwDmo9yH3hU5ygJ3uZhkgphMoNSm7NZYwDJvmNxwr5uApLsAhg58",
  "key32": "mmQzmt3d6D67r46YdCh7BKjYJhPZtCJDXKA79TuB1jtNuNM8vzZ7YdRuXbL3J8WbZjsdM72q7KZMH6jTFjFrtdE",
  "key33": "Ccj9o6Y9x32jD2ChdEk4vV3JU9t3y7pgmKhVzsA8utgnsmiYRMztkwYFMWn5J7Se1hCsE8ZJJot7KeUxKooB2tW",
  "key34": "3vn9qpRvH4vDLagCUkGVA4qnfK2PD9BahU3D5DFaSVi8DvLGn1c9d8cibwcnPq7qz2tMSi7Eintukksgd9PzaTMm",
  "key35": "4MNLgTL81b5npFB5CwJoy8Pzx1tzTGFJNdJXMXFXGV7Nv7SG8XWH2erkcA9ecEteRin8SKjg1RqBSVRXamxMYchf",
  "key36": "4j3QyziaiBf4py7yHS9F3WLsEGvrJuh4AGffgSjJCez2746B5BguYey7LvDykppRoTBE4xvYRhBe9BYTcWE2hBad",
  "key37": "65buAzdhTHZHUr22rMVYQ67xnaRUcMwQ6SWSDiohtgq9HPEvekpqrQ7NWDXm5uptXcgnYt6ZneJGVBKcTVh9NaQ4"
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
