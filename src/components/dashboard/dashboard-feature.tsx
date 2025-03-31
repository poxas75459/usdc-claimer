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
    "41CnZ2ZoFt5B1Po4T6FeDGvTwLauJeeawsvM34Ji3ZDZcK1m46sZYGq6iom5489iQz1tU3bvfeEqqdSjz3vV71Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ne4VVy2EFU8J1oEg9BCJ8JVc1Jz8FgNqk2hKQDzBSS31b5NvZ3Kkqxx4qS54pCtDVYrNspg9fhcVKFydEKZBSTZ",
  "key1": "bMmN8cX4zBKHA4ErtYk7emXVZtnwuikeFNYFq3wiDuAYJEB2fttBjbrWFnY6WJKZXSrNReTT2mx3kv8bdCwfPLK",
  "key2": "5sL3HoS7WjErV4HYhfpXFywh7JxLUERiwaw6zVwdQ3hsdH3XrA6kSKL5VCHvbSsyJtiaUA8ZacEdZp1g3ajmK6Nh",
  "key3": "2yCjUW2QT9ktzUf5JBhj6Uyht2ixvLcL99UpDt9GAgRWoFhibJVBsH22EXufPkTzZi3QkCLiM3EyyByLT136jhm5",
  "key4": "bx4huVcuaGWwb9Zw1svadf8SaxADbhBUkXq2iVdZ3frVFXpcLQWs8sR3moSMKWWzXrvda7asuAyyoypzRmPAYmL",
  "key5": "2eobnBvcP1ydiGSSnui1THiSNPf4fzoHDTq82CaesQSSN15kgrDdZ9SxkjuKDGKFGBtxBGRpJBXJ7QxdWaSG2Gid",
  "key6": "2Zqr4JXCaeg7BDgPnYzKaS1gp3etviD1vzZwbgXARoZYo6LKK8dahGGkAt2PQDD8JcxLVvE47YDyMDYT4RkVpJyx",
  "key7": "KiysRPwocYxKf1nhbHDY7o9dQJoxKnGBo3i1sN1eKosd7MUMbupzkReEQAfbFxW2gmuqC1361tmZ2YFFcdsZJzx",
  "key8": "4Vfk343o2Tvhhrpe9kkQMw6GRGsEyxyRCj8sgqQEUJSF9X3U5dMcGvfJjgUcS8XbYgxdsN2GU1ihs6NQXjy1f5dU",
  "key9": "3HJmdEqmosVrHsmbJRMWKbGao1pK3w7NGvPHrsXEmFvdtXiupgEJwUx9A4S9CAxELYM61qTquydczFEa9gKX6zJW",
  "key10": "59pxpBrDQJwXrWRSf91LLAB2rbvDxgmKn9qUsnRiVdGsax9KFbujU2rWrRfBC2WpeoawUdJhpGogNBYBajkxhoyc",
  "key11": "4UyNGmrpTHdH4aLR2p3NjA2m81fkxPUUj7Krw9mSodjaGz7hsxduyCcSKj6QoTyQ4g4wodzx6Xd28Xa7qsya6xtg",
  "key12": "5v5exhNCJNTrrHkbCicGP7QDZyTUfKwsZtHjX41zPd45A1XMZ8ojXbyFmJhyPHnjax7G3wM7TdQh7hgXw5om454F",
  "key13": "2eJ1C86XkpcWUs3hdBh9zDcQcrn5NGn1JM7qCKCWsBZVaxTL5f5SyZMA3fa2LS3iBqyMwFwy3kyMCRTPQDKPRG8b",
  "key14": "4JZDwGHf5pS3MTb77G3gAuRtpqN5xyoFkLHDLf47W78BNYxE4kUfrcQ3x2GEsLbSoSxcSj5byDhs5ja2z95YHq8Z",
  "key15": "4K5bJ534g2ZDbTRn5fj9w3bn5aaPWAiPA1dcewt1GjzV78Z2aXhNv3z8KLsv1La3sXasmMU89DoEunBrjzsJiGaz",
  "key16": "4Tg77u5TdHksvZDGuYTb3AXgACdQYe7GJPpk78a81uSnbqkbsvXi1EzQvLCH6Vsh8z5FRemzK5Sp75hSwdcmVesi",
  "key17": "3DYhXctPnJDHvS2LxiszCKDZqGcsahQfuMH2kfDGUb44psMBbn7iXZtcDLP4sLg7zzbcNo6QAary5FYSk6o4WM7U",
  "key18": "2QF8vkkkfCtSga275SLUFjcd6ip5ZsausYEUDt6fVqt8H35RA93iEsQDo3Db5gizVrmbAC5LxBJPyFBnE8c4Z28W",
  "key19": "5TX8d7YyjmTjUByJZrjRhb1zm3BUMQ9hE5iCYrvCmdFGxki4RL3XC38TLi9XYsSdweioDEFuk2TyLNutSespGoPr",
  "key20": "3cmE6gwJ4N3Q41EyDXriVyZLn1UuERDbvjCTahv3BbpwGhuyat8ftg3CmDGYoxS8VQX74k5tnBezVuh4nt7Cah9r",
  "key21": "3Dh1cVsyUFrd9QyYDZRDXLjZty3kM1bNA3QTGvPjFhr8k5YAwXJwcqUWdm7tpySEAid7NLyF3i2BAaCCSJjxGiqg",
  "key22": "3cfnC5bSopRM1LiFqDcezLfR8ewzyoXP5uXsEQtW7cb7BBBChNbcMNKmNEQgxHXJUdXkMhNhB61Z43XgpxbLaERw",
  "key23": "2tqpcwUG84tDCmSoRZ63nUaFHuEVc2RgVVMDBBdDBoMJh7mt2aToeRLxr59GgKDTbkSQS8ru2EmWyXa6tWFJcPP9",
  "key24": "4sJPE2kp7BPsBHwtGiKXqo96rZayH8oy43jVGXkBQxHcoLDhY38Y9DBYiFewRW1P3589XhmH9uVahEFXaygavsr",
  "key25": "4wsmR4Vn96R2QycVkLhWkpC62kpGbM5iDtd9MmGbcSMPyZqWPj7VgW8vq88Zx5WmGStQZdakeaQbhoX1EwFpd8ZY",
  "key26": "2bWENgdHeiT1cqhyhZacMs9JFaFsRRa8Q9S3ZcMge8rXYGkV8Bs9TQsRp4dWMx788V112P9kfTEBgV1mF9V1DroH",
  "key27": "668no4vz8xhoA4pmkGnFsZbNTS7p1RJYrKg3CoKg6FhLVjU5oFbJKrx6Qnj7juFK7x9BmnmwLdRKhS2xgDtt4rYn",
  "key28": "4z6p1N7c6kJWokj4gUeyBRJCetLFLAjRRzjdtBJfvWXp1YFcja5ppwCSE3kzMhGm4GPw1EtXMBeQvWpEM9Y7cF2e",
  "key29": "65eFFEM4AWW9G957q67RptKU5HGgxbYqTkGVgYtyYSW7BcCa2BvrBqyU7ckf1dCy9g8iTb2pSMEkyV9ht3Wh4r6a"
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
