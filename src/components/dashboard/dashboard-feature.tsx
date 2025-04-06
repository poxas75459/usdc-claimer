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
    "4HBBeaZx5QhjNmyJsKSDoa5tSVhvZQ2M2t78yrz2BDH4kmhDGgFn7WjbbADkdC8mjg6xMc8XzJtyjTSRcGEXafDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LRcc57kA696H6JmKG1GdcvkASD4r6oD6zRFnJ1eGeZtDVGSRHHBQF7kEGv9s2hy6DEqQyTZMZZPtA9Efw8G7A6d",
  "key1": "2LsNjWkw19JHAGjmGuk233apELBqKN4MMbWE34orPpuwyMNtjt8Hh3rK2nj7ccNFnStLTGRQ9pWgKup2RjYwhPjh",
  "key2": "2gAZUimW6ZRMkeg3ByyQ1D2ebGbrvw6whrrT5LDcwuLg1JRV88yUxqW2D2Kv3ax951hzN5tcjVheRRvZha9bzRHj",
  "key3": "2xRKdFhHugK5zNJETMFiMtN3iG2JF61VCB1ZgmNN7USX9vJGLYNERWuy3hgYUpFwbPS8UfUdMoh3koAsCzKQaBqo",
  "key4": "BkLf7LzQAompxDqjMqiNm8rRLoPcVxizKf8syLMTcX8D7hR3kkw61Noti3g3VN2hDKavykkjv74gZU7xc4s68jG",
  "key5": "itfbx7nLgnnH9DyPwztckjcEp89QHCGaQN5iYdpz5EyCBkswtxDL7KkrCYYp4ceJGsJ8h1qPhsgvXeowmnmnnfN",
  "key6": "3NfgYcLxoZKExPtn4Q2bdv8q2RbjUySKSymD6r2Vhd3dWiP84tnVqW6pKhyQzDLJ1uiwQQ6MgTvsVVxiXymarzqD",
  "key7": "4FQt7zoS84fn6xa8rKG517qAYQfDN1YWrqW3vj6XmaKM8bX5rTS4JSWV3EELn1j58ap3c6qHmhQ9nmNuGdVricEL",
  "key8": "NEZckWpiaw1utTYURNuGsbFV3xhBiuddE6dvFBDAwgUKp56SMRKy4SZXU9JnyzgrRjgZRcs9uQvHtrXuowtxqkx",
  "key9": "HaKkjZrAi4a5sRKDxxpENHpXhEaJMyonXPP2kxJQXtsuiv4bPZ6ZNiUNJrkChuUmKK5g8htPWp48SzNNzdLo761",
  "key10": "PzWoFP1YXq1y3kN7PMbyaZgNn95wwn39y5opHJPeohEV6keZoWPv5T3aJwyoUrRqMrB6CYPAGrUgcHoPanixe96",
  "key11": "L8Efh1BxDYeGw2a8yZ4qDbaLD9b6EYeCvW16tkyfX758CVsRPCN3cAVALvd2uUQ2wS92c6FgrQLseaJDmHqntBP",
  "key12": "2eCxP6Dj8JQDykwjkA8ArUtVamEFTPvsys6YnAMBBvdwx6YzK9NhARtXVoJiDXKgNYTRnc4WiNxkvhhJxN3AbaYK",
  "key13": "3ZKRyRoMKPffgjEBqBdnF7BckpFnS6HXpoaDRfnPeiX5JPXEZU9wURTQu6eqDatkvNhtJeFw2QBeHU9d5nxABwpv",
  "key14": "2ErDWJ8ZJGx8zvsGS9SbD1Fz641YWDiJBRLsgqaFDg4m5qr2AHcUaZXYcyk5yKbkPxE9HZqDSrVAi4L4DJVJRSCp",
  "key15": "2fRfS6yocaEuF1Jvbq8XLvg3czqYitURcmsAnyiFchv8hnFch3PJMbDuTGaJZRHC5i8ADoi5JPTmbPkVqfso7rBa",
  "key16": "4vgfr4YsQ9qot72rMesD8gJFiF9pAYGwsf36fZpMg3XJve7wDSowe157YUKmLS1C6spqQbSFYXy3XastLhoZo5ci",
  "key17": "5jBDMrg5pd6fjNm1Bt2CG3Sf2Y8mzFMkrD3XR7bHKrgcXFTQjGin7QWZWMw4JiyErTYcBsiUHAocc143xaB1PYCZ",
  "key18": "5VoAYBr34jNTWrw3Ta4WXGtvaeoD7mYnvxNENRNkkaqgQ7oH45tqg3uYxW4saVDdUb2qhr2rfeso11xJhsmzf1Wz",
  "key19": "jA4tZiEVx65B6AtUmvVri7gY16TF16C33wXYYh5DTneN5u4kyUrMTnu4o65x89WTGthjcjbVH59B5rHaP7Tnor4",
  "key20": "3FfnDvrz2KmzUvZaEf7Crju6Gzpnu8cZURRzqGeiRmZbc4WeXXGzc9bDb6VP9TAhLuKawxkr231oj5nkQuzYpywe",
  "key21": "3fDWjR5NaY4FhxLA2sX6RHFSQ8iASH9j1WzQkoXQLCqZSjyrhWJL48LMpn5Gz3CaGaWw1ez6EVefQBUHEgyFYLoY",
  "key22": "38wsbgdhSqHze5xNZgTLm3NDUbfEr6tLqY2iPPQBNBhacGLXsihcMX9jzzA5HmsW7WH6mP37X9cJoDaRcwMDfddc",
  "key23": "eAqKj4NHKhsybrrSL8AHD8uA9krALt6yeswx5qEHzTUKybvDntKMHYhYeCq7fy9dWFSnzFfzszHkyyRpYKDF6qQ",
  "key24": "3GG7Ba63cu2R3To18APndmRA8MTgWHftKcdQMvoR1sXKe142WSSktVcJRkqJ4fvsdonpYKHwUavoqTDzhWU13nWf",
  "key25": "TakSvt7jmajpubeyKurBAzRX4yiXmYVvuze1Lox36surQX6hzWh2Skqehhe2VwVecKADn1eZu8XKxH7EpFGKer9",
  "key26": "2aGDB6zB8Sh2AnXWU23Zc6r5KuUKCx1XKBub1nRHbGeyyjD8Mm75sWH2mngSaCiXXX2ufNGzCNyzezZfP2QGa9Uy",
  "key27": "5ttJkeZPyoUNaGqk8VFXnRc1DTxXX1wVXdQDbXrt7zXfNAEXqm6VaQDRQo8z9TGHspi2eGoeMd5bVsGWZJda2nnP",
  "key28": "2nQVwr3Q2mJL24B6XmzbyeSNqkLSXya6VTXE39QaYp3FeF2wK8fHNG2kUw6mYRdB43xDxjp1J352Z4WE24vRsdr4",
  "key29": "653pXYmGkzRLBBF9vhVR9XYRMHD84K5Do3kpRJ7ZQw1tV2Sen5zftMdAfRwb7xFt5ET7VKAi1paUriG2hc5R7ZT8",
  "key30": "36gjX6eUejrrBCZnVCKdQEUdfdbbJ8hkJ5NwhDJz71rWoCbLj4d14LJwdbv5Jir378CcG3zFGYokcAEAM2HvQsRS",
  "key31": "3cGyWrvUP174w7MGo5QgPPCBCU7rX5GR1L4c2K6p9iaELLVzhobcLUaa4YTrMPJ49J4y7qXzUqXLycqzkA6Fx3kw",
  "key32": "2CJmopaKyJo53aEoNDAfJqT3jc36T8f5XBBcoTb1bmswvhTLHZMA3FL6EJGZ5zLKx4TGFHJxxUmbKcSN6ay6UFAW",
  "key33": "5rUhT5Gp7yUTxAtuxZS16h7FTPuw9YUUACoyJRuTWqF12tmMV2NNSp43W4PCgf5fUMXwY8S1LnAezFEhGGFBzXfq",
  "key34": "vUwHvvLiCRmz64xvuXYCfG7Ce2zYwq1gRhQjax5aG2tKE4ryp4rfRZcfPuhXCtazxNvjmQxK6qPp1JmKxkLgJxu",
  "key35": "4BZbH1pyi1Nvub2hJA6vSUDasjkc4poJhP5qwApjqj8XdMpNMzjqwfKKrdK6rn1ENFgVXFdFaBPNH5mAMPGhYVYJ",
  "key36": "5jRRT7SJAa8ujVYWZBe6avu3dDW3hfydW5iw7wJc75YEKTi882Ru4H9iJuULx79WNSowim8KTvRuqmpquCUpjV2x"
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
