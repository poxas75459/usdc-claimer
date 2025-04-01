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
    "4nwP9zBLVaSxJWXCsxX3oJnrvSHLYzu6BqVnxYNoVh8XJZ9KfkAedE2Yp8uqWqv7Nz6g3QFsPZ7cjKpp88RsC1tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RsHaa66eWgom9MpsMaheKcyjVe3Kx9VqiHkqcJRmuR1Nk7YTkckZm1uogYQx9BHUDP2CxJmcZfnCTrEn4t5QmLn",
  "key1": "RQ7in9G37ePpwRtLicsNu2NHfyvmSJZAxBc711Ke1WAUjmbi3ryyHppwLa6kTBqHdxzDEnEmNvhbcYT3VLKASae",
  "key2": "3SAvsN2aYy6wk5WPQEyiChqVZ2J7hyejCWjK4abhPLNyuwhc6pg6ReZYCdcFvNuaQfvzHMJZMdTR1aRXXjJZPpJt",
  "key3": "4TjJiGgLXQw7cgY4SxCpxWwCwdwzWmHBYecUUmviNwpq35Bb1r5S7he1G9CeXJ4UgvjpzWQDdqATkYGaYGmUJx71",
  "key4": "iQSMnUHnx1quYdngDZWH5FU2TRFu7ZQgdhSJm3ZeLWJw4JdSw13ANruzoP9V4WLW8Vr4GLuRkLooEkNf5qC23GG",
  "key5": "4WgSaQEBsyVP9URLidqhtuV3o6eDgXNZq53qiapquMmY3aMY5XC5NJUf3L2FQKHmNaCSvbDpQgXadnFYCkabV43R",
  "key6": "3zbm8rJGq2YQig2uWGQvEyFyFasMfsNzz7CnGyWbYLqy7DG2hM7h4cqYwsQ4TBciXqym6qeQBD3HQAxoLhyLMJ1L",
  "key7": "GzHYg6zhJYgraekuPwuru3y65JWXi2QSrVfiGk7gKFAPxn9ak5aWT4gJjtifKoirNdJoRQfEcZoWc9c1wXtbgcS",
  "key8": "geSKGPzsWJHCryTDyNkJ8ndAtWJjymU5oBtg1AFbL2jYrM8dzLtcpPduyScYHoxw76PuqWDSenU72WMuzp9K7Ko",
  "key9": "2oDG6zhXDFrkGmib4NLWWZfDF5XfWwCfwgj5vacyXg7Y9VwD5Wqxng7udqLjRt2C2wHDrCXnK8YhosJFdgQTav1",
  "key10": "3LqbxAQK7DKLSdN9zvLr9YvfoNaWxT6CPatfDS5GNe14YTrjAU5SkuSSiS1Dpfhgv3KNwrzf5B3rvG5YWwynZwst",
  "key11": "3NxquVUxZnFeiEQ8koAT1DSZUWRQQJTzj1wH9d5jY2TALQ5TNPRhhmAC1FQYtGws8bpqe6pYjcHoT4V2X9ciS6dH",
  "key12": "iNdJC9V8hwnAnhQoZy3SSFRURz1bMCMiFpDD9NKmA2yUPyQjurTeuT2ypNZ74qTu6Y2vAnDap2kGAjFhgPWZjBF",
  "key13": "54cVs8Y7Xb6pYmtQPmiBq9uGfhbWkvLXLrYZfHBRYFeCCuxPCCuUDgVvwSY4ZK5u9Z2tDD6VxsaLvg66Na28ywhB",
  "key14": "4gj5NPU8GZDmbd7opf7jiXkErzYi4zReuXDFzUPENqjiuwmjUHydX4UZongvimdhTAWHT1fNzfsWrLjqc5EcPek2",
  "key15": "5vJK8vjUa1k1SFPsSYpDUS3eXiu1hSn2sJsoazxH6k1b7FjvevWnrsQ9zTQ9A581Vh5mLgTbNp4bcW6vaZmA3Wx2",
  "key16": "3cwqMe5vjW6HbLu9JUkyFLDpEno7kbC2eeKT6M6icLpFnvcYKjxVb8tukWQ83i9cbTTHTTBs3CsTvpmq1Wf2sTi9",
  "key17": "4vA4a638QxCvPaM49LwGTTsY6cr7s7yFT8dADcvAHtKneXySmm7M8jDbwLwzAJKMSA6A6tpPAeqCpGJ1CJNChBCU",
  "key18": "2NNHMDj2SeX7FF79nXmZHvBktwZxULFX3spAHkfT3tzyKjFEZVjRws2Kzv6NU75VVB5dyfdmyvjsnsNpajzryT3L",
  "key19": "4q8o41qkkM7cVnMdnkLgwEKJr9txJAGF3P5k8WNsZ3XkLXNoPv2pdaD1Dm7fyUJSD1YAjoUZtiG9vu4BxSgFGbqR",
  "key20": "4FrHncx5uehdhA4VY4RuuUCWwpB4pkXCRujaq1uhttYwgJZJLR2eEyeu98najwCiGRx8g7pr1s6saJiREEPqEzzF",
  "key21": "3g3EnLyyMwf68kNnDsFcHEiZ3odZnQtu2HJqeCGRkSf3yRtAvK6vzbDNVSLhmxdLsAHS8HvMCk2MgW7hAKSHNAHX",
  "key22": "4rnkTmyD21cSPQzvVVBgmeb8djXHeQHNrS6e76tpLc1Zx196tPLPrwBc7beYh3fMurDgWvi2MYY2esTToKtBuh3L",
  "key23": "tuSAdhhR5yYpV8GYGHgpJKFhM1dSdcU3v4Ke5SRQRDTyqiCYyeGVYFukTH8xeyHRaboAXMVCTJtZi3AjBHZNZkZ",
  "key24": "rWReaGm6cDvJWGNznLAq8Amzmh3erCauoJByZSbbjsQjRknP6NDrRG35jiTCA5KhraWqYDpLHmUxaGUGt1xFvCM",
  "key25": "3LvBzvd4tnbHV3g9KbR1snpbuCfrgrJbL8PooDXRvkzBncue6rrnTSWpkrdo4nDvfPg1cAX4qzwhvQQxGQ2aQeU9",
  "key26": "3sRZhtJQKtt6KgHDzpYM14TBhcoGn4wFaCrp5cUxbP3C42JxLxTzKnqei3Kmw7dxrhQQV7pdsCHKevf38YxW7xND",
  "key27": "4wHoah265kfhAnU18m22stTjpQReKmui9BxbuxbHZKjZnUvckiegVRjaHNRSGZnQf1Z7BuDdaU3anXxfqhaKAAMt",
  "key28": "3XYwvPgLiSKvsMUejHDgc2EScVe1nzwxnFcvQjoatzrTM76ShmFK68JPVcun47ApbbvRUYaoaAyyYMB6Rrb6cuTB",
  "key29": "2VKzoLUgSuyQwWKbuUTsqcWfCAWmNa5CWwkagBKpmYY9G95VL25wc2MzfYUbRrwZwdrMdMyi3ELxt5mLWnsMgWeY",
  "key30": "4s4FatUK4bqZk3159HnFePBdTFWxNPNZcKgPvA2vSF3Q4gLidswMbrvrWkezp9oatNvx7ipFJnenWNm9So8MDoBn",
  "key31": "3UrGQrtXUYjhPgd5quN4VeKAMu5s14EsLdtNbouCrzufukBa99DvNRUFt5ikoi71SwUwj7JSXeF8Y17XbtejdFsN"
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
