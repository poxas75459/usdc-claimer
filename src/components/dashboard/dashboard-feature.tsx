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
    "3zZQHRTZtVLMSxZJitczwswP9jKFytq22KAyA7YnmASCgUqgtfc7rYxruvnRtUsMGXGUybjhz4zaNeycTxtzi36e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqFah1qUfZq52ahGYwyLoKoJ5RiRTypzpF7z1fQgnL6PVG32kyGZNPn6zCV6EaWKRQhCJd6ZcopsS5ZZ7PEK473",
  "key1": "4mKQsqdX9scShrSFPPmT93BQoY594U8ZrJ3wS8p1oFCCs5e9AtjpSY2u3jtNWgKPg9BpgFidR38ht1kgz8Eko8rh",
  "key2": "4dAXHR1oybNf5SAZTUK862wrgUwZ9FZnrYZgxWeUTpqHM8KnadrfxvP1p7VSVgonNopqDR43Rvy6A9bXyqbUvANU",
  "key3": "w8vkeAyfRZUNkArmpZEHJfHHcSyddkFfPX5ZqwHKVqdSi3j27ku3b1SoAQ3NVrLmB2JfZPvrExzScArAEzj2ykN",
  "key4": "39cmhjcKUQfRfrgZENvdn1yNUYrreaTCu5a9gPuG8EhXwkyeFcgBvDSHQ55wB9w6PHYiNR9c4BJYU4gkggjh4e61",
  "key5": "5An2ukBNxFyayX24Dzc9dRRjc9ZNHwKnW4SPPs4YSTNjZ5vybq3gWRiJvNv4iRNyctevRKYcQmqB9MWy2RGRgMNr",
  "key6": "4BsEzrtFdK9RVkfzUiQtx4bp4gG5yYzu7dNpvn1zdmaG9kk3JtCQMisD1ijbYBGzRwtWdxNeHcTNm3KRMkif7y3Y",
  "key7": "2mBZ3Zz9brn7JxBr2ht76kYbY1CAHUR3UUSxjixqxVZKy4nGGTqi1hka7b9zcC3TtcKm1xSPv7YQwqAWLEpqBEP3",
  "key8": "4qNpTrnkmz3YTyj2ncPuWh6kBnyCAtQC9bzTGGAdru7Je7TfdHCRkeYsigZuW4ERMm5MvA5PxUAfMLMbJesyD8QS",
  "key9": "49CJ8XRf4Z93SsVwjida769fsyNggy7YixU3PCtPR3qDBkqabK8GcUTaEfRmBwnibVqd98qnx8H1e5tgjPFkdEJ4",
  "key10": "5n6iYYPHq42izTxQ5Scj3Hha8tQTFucMM9jXxnejUkoTCHcW6FjHxHZhF8qL5w3WU577ZKn66zggCQq5Vt8Wy3Gq",
  "key11": "pozf22yvcpL43cTzDHVmqNAhrzDVxRgNK45Fry8Ns2XYhtAqECnmwyW4JQgeEkzU8PwkQBRWSj95zJfB51niqgF",
  "key12": "22Y1xzn6jxhcySfsdctA8Hg5M1geFSushFEeLS5xasCTG5b7etFeTe7aoXnTXrQUNvVjNBbLEDV7t4qLUmvEhXPX",
  "key13": "5MjtrrsMALKFrXnSTYEeoTLtcnTUW5hjWBvCSJsbNppxX3gjQdBakJq4Lk7te21sM6BSR4ykoDnkGGpveUsjYAfg",
  "key14": "2bDbkrSpGte8A4fwGA9XEftcRE8jMdCMpLzLBYTRetbNcPub6k8TxqXQU3CAetzsEAxNGt76E3FxRrUk8WjuFxey",
  "key15": "59sMu3j7dHMzMY6Pi4zPYLSGpfnpekb6aBfFg7ks1cgxcTyqpJDBT5i5oqsXroxSVbKcR5tftticQwqNjTs7KkdA",
  "key16": "2V2py1icDtFF5BA7JWz3AaLNMuVzPbNS4tFGezzjwuGnGfBuEoGTx9vJhnWjFefbZP6fnaF6KPby5FkLqvCDEpWY",
  "key17": "2dur4uPjubv5cyXAL8YuyNbx5namKQ6RSSvXCkSWxDdSzFdM8LLvCkUhtGeQ1aXXpCD5cx3BPsy8iqmUsBTLkv5r",
  "key18": "3aEXDyLSqAM6ATBPcEdjd3HxHoU4b2obSk3BoTHdUHTQhApe3DY6eRePASTix3LJjC8TPpzyvUhp7bfojLZCZwYa",
  "key19": "22fX1HCY3S8FeUP9CYpGhiA5oawTjkLW6JyekzfvAYayHr45Zyd5ttVxXXHP5YcFfSSoDN5PPxmt939xBGcDHzz1",
  "key20": "3cZk2bPVZzBmL2Jhmuhz7K6snQj9dDfYfZz5Yuxv2pXv68Mh6phTX2BtwamSYSs5vBQEBK5bcqCf1jgyF3HXo69E",
  "key21": "8aWfYMsDfXXmsYPEF5PDmjpr2SRp82CQpLrBNFU8NbD1zHiuMmxzmTs1s5BqG1mvoxRQKPjRi1HEWrhzHgFEmtk",
  "key22": "2EbgecH8zuuFxMnvvceNgM9sL8a9tzE16kpLYU4Sc1kQ5azBomr5PtYSwousJWK1HBTPYW5FJUigBokyVnTsFS1U",
  "key23": "4gfwANktye8YsDQmAcT7SCw6xR78FNriuFDFQcSgYXD9MsUBXkgV8wEVrd9UmCmMpphcH1jTFdyBaafg5PmWw3Xs",
  "key24": "37EwEor5GC8rbXgwMFt5X3eqefLX9wfMs8PFZ9qbc8XVBDUEbrPqdUyMkPr2BE4AzwRFPYTp7y4QYHtYRDQcdHod",
  "key25": "64xdwzczbtewKPuRGSHDyVojQtQE3akGragi3a9pSYbEGTpcXiz59KxA1FfYLKyx7MMk1hfAWk3ZGnXE8iYkXDmF",
  "key26": "hzHLJKYnM9vTB2jZ1SFtJ7QYoT6gXNM8aJobtBqXn6Dp6yRCs2as5cC383wV5ipRf3Kic62MLvYi3jBTdQZwF7B",
  "key27": "2AyLHMXZnKZDGv7ixLXUbTYttxKuDuyTnrkEDspDTvoReWrjjLNXyA2UJLSWTqkaS8KNrDDXCyhBua8ANwbWfhuv",
  "key28": "5b5uCDZgmdKuiBFjfGv4pPKd6MF954YomLU8u4QMBhLznRa8Vind74noViLW1PiAX2KuTJssbfVopj9ULurmNcy2",
  "key29": "jN7EKzLV3RuUoPHiJSY4TBXnZtPyyWR42hAsmzEXX93UvQAHgSgmPy5N2k9zGgCaLeSyfVmSgCrsV8pMVLk9SGo",
  "key30": "5FC4LviaGGz4zchFUr1HoJewJnVXNEMsDyhxdVcw5Hyo2uWJiHK3NAUyKuGqmSMakVdifqBK9o1F4tFq4LHQU5xS"
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
