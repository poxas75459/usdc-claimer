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
    "62iiUcEPfSKAdomo7aD42sKQWRnbnvwXGf4Qq2Vhy4ZWmpZZe97W61DBFqi5G947Jcr818mHA46apAuTeoTGzEyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4NzY9JMAy2vzUag88fuMU4hYQUo8V6J7MWhw4Pi8jMJYfmCuZH1wMbxYNDz9G1EHov73ydxy6EBcsCWJoaG8TQ",
  "key1": "4ZC5HpJ63Vf5Zthd1D2ZUpSkddjXVdaDb1AhWQGidPDr1x8CLFNp7KPc3uEY3pMW8QKEehTNL3Pyc27Foq5UJ2sR",
  "key2": "48SYcxyrpNkfpaydmNtEuqJ1f4VKK7Du9dduVgaVs4z4X7RovwcMQBo8qcLXbRnCgjgmJcJpShsfiXBXvgTmf7Sq",
  "key3": "2NgLFpWfHf48qWuhufemoAGgvg473ddQbL5Uzbk3gSiMo1LhRagHjix7ty3vqhwShaYx2WB4vqceBv58Wx3a3JyS",
  "key4": "43UZUCP2NUWt6G1d1PRJQcCA7N9onGT3j5e1kL6e8JpukUb7TBZXZzKWFhGd31Tx14hWRpTYDZ1ScJk3QjfknpmJ",
  "key5": "3yFTae1sNCJWxvyat1KRAR9dDjDtrvTKjF5PQ55UFyE6uYCFBBZMrwNpnskiLrKsw7WaG3kSGDppN7S75xa48oxu",
  "key6": "R91uQYWJ6jzJYuE8Lj83ET6jAujTzeNerShU5kEqwRb8zsWY27aPpASjuonwgjMsM6QLfhHHEVpBPE1YDe132vj",
  "key7": "4v3MekNZmwMkM3UaKZ3eqgRViNYxQLMqcr6LohfWG3RBFqe2FTLHCdmktck8ZpjRjH1RN6JPS2DcaNsUxS2NCiDG",
  "key8": "3LLPa1eV4stzb2ytujkPYAf5gWEjA5Lbj9ttyaL8eHFsLWh7M1rNh582cQzHqDGhoCDC6jzzMLFzrhPeahSu788W",
  "key9": "2kidQQGqPaYKJZFJPHTVmXfHrgc6ziYLLvCfpa3ZNQfgcaBCUAcgtrYovC3RE57wvKenS6ZaAkuxJu1RdnRVNsPN",
  "key10": "4DptP2Zmb8y7EramokX73j7zt4MXYbvCLG52sgbGrkEAp8xNYizEWcPD9DEVm5DGb97RF2VRwQ7dxAcQQSDa29K9",
  "key11": "65R3wyKNyndQUPkXF6vMNaYQDbfjMS2xBVceALw7y51WCovURpsNsxsYMkgMkcXUyTLq1TC36VDeHQVnuU9pEvQ4",
  "key12": "2nXjc2qAeBmAXRR1hnmmXBaSmVJRmLehkXLTxHJB62F6SNZzh9Fcg1Xi3DwekXQ2Reyyi7x8RhwniHvq2PuF2yhy",
  "key13": "3AX7XG8DX7h6Jej71rxEMG6zzCNJqqKuWTwD1WPGVpFjQBJ6i1KpCwBSEF6rRS2Ci12s5V1zp6nSjrvuhH64XtSd",
  "key14": "5U9KDiriGZCFC9FXNSZdSyxrJVGZQ24b7ja5ueLU2w8rUJrMEohzo1iKH1Z8L6Gdros2XGbHxFLed7fxECp2uWDT",
  "key15": "5D5Vu6wmKoWEiFw2iTNVJQH4Esdsdvg55cXgotaWXYz2anRLZ6tgwezfeFSMbnVGZB9EEnLxj73k4gpxRcwGbs73",
  "key16": "attwMxmiTegYQ6M9TuNpQxvobyMHZFbSYyybUNB19PiqMC8A8RWBPuzApd9NnmtBSXrNzVZ3wUXwm18ZhrsZMJy",
  "key17": "4qmxc1aMkuzdPLowAzBahvzBD5iMo3HMnP2vPmdxQZoWbk5ykKZaX8oG9pv2NaovZv5qbsK4RvfdFJgh8BLogBiV",
  "key18": "33gaGm8b4LCaBndmqonVjxy5GBbGK99kZn17386G87qnVvrF8JF4Ns9HiE6A1E4fEjwkessjhnGkWzhbuBLPpPsr",
  "key19": "vGbD8ydiXMzaRymSaPjeqTJ5MXAPrS7x4Nqh5k4KG7AaB3gje7RPJXVy4AiNcb6GRvjgtPPiHFDXt7sYB5Wm1fD",
  "key20": "2tpcNZ3WKTWRrKNMZCY86QzoJ6SsYKD2pQvw2KGNL9QHA2kKDieyj4wU21zFcioCujVQKYdfECaF5G8RTHDTKk3K",
  "key21": "58ViLpBVKiWuNGmZZM9FNVhRqFw7GAbenhFLozRc6zgzpy3pDPA1y1jYuXwmDLrK37DnkbLZ1DDpN8tq3nNbbNv7",
  "key22": "2V74cRysg3vE2kLJ3A5kLGiPfuV2quXazRGYNTENmAttXRPN38hi2jGrdbfm217UJ6B422xGtVGqhaqMDvDWQPnm",
  "key23": "5rDS45VgvJuqbYHyac58zKYgBVbXYww4fqzDQQYiTMHxDY5hCfz7uU7oNKhhd9H39sTz7V5KYebPnRQXjHnKmSKp",
  "key24": "5sdN5Nn1tNUfzofyuDbyoZrx5i33KbKqPfDeEspn4fojHbHvCFr12FrU6JWnM5g5evNDP52iQf26QmB6CodPMWSg",
  "key25": "2ahBKxcGpfKbPSw3vihhv7dW6HmQi6gMaFrvtfqJR6DnMoJt4uQj7brr4X7bHNfWz92b2iz1N6kivwZ2StKXAft6",
  "key26": "2WBEJT9iohKqr4ZrhaZtozYfn2ikvoWkGB6S7eotuQ1oQSAeP5UjBsgwo5sSA4fNahDBVwbSbV6P7WqUasw8Krxw",
  "key27": "2tTcW8mNkdKP2fxoErsVPzvaa5c8Rg7EXp1ZTEZnfcVDZWopo3r7PP3Z4Ko1ijpkhqvadvfoKZhCPqetJtzxF7s6",
  "key28": "2XNUcGRskKE747qYkMDjU21UgRUSjYe2NmhKHNpTtiwEmPbTdYpiokdj6PQY8GQcFmzG6ZXVdyB3wFNUwYpDHui",
  "key29": "4Br5gBXFBquBQ39e48uRyaPuibMoTABHoyNdh7EEzdFnTVvQBULZ49ig34g4H9babWbUgJYckueQbkCf44CDLNzx",
  "key30": "2iEi4J9HMvpVnyJEcko3qw6TPLTkrbpT4u4Bn5fo8W49Qm6388mHxkr7oFwM62a2D86Un6y2ArMhgGd8FdqcrgUJ",
  "key31": "65FYKM3aY7zqHeEHKDKbStbiqj6633V6bDT8gAaYD4GS8ou9T4kF23VybvAkdKYQN17vCJnkxhpb3TEUxDz9j59r",
  "key32": "pKGocnJPJDA4DJdN6Ct8c1N4TxVvA4o8MaS9yiZjy9AhtJRe6jFb3djU7wULVfqTRJ99tEnH6MbET5tt1r27Vj9",
  "key33": "24odyeC6KXhoHNZeXCQEuRC1PmpS1tjXSpyvCtsLMciFFzRdUPhmDXbBq5yZ8oBezx9kPXC9WFrhruBcgjduHYSw",
  "key34": "2JjfeGKi79K27Fgi6XtbscS8r5Hx9HKwWHe5f39S5B1zZbdurtcVKBHEFL7L7Cm8bfndPR4mTMUL6WGYva9PQYSh"
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
