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
    "5csTc7WtntrVUR7XWkm1avgiVEoZTDdRFKaiqhSaBx9AEY7m4P8ATPRxVmj2wX6CRExm2TUmCr3pAsJkVNBXcDSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ff4Fjhgt4dcvSnVLEdZqHdR9XHcJv8e4GxiiyMZUBZQywLwRbisuQ9sb8gLDL9qskJk9tVCzZ1T5HUHjtdjf1ud",
  "key1": "3A7k2wrnn4jibE1AarHCDDhNr5t19wQwKTW96PrrGTXwFK87BRcYoiAJtM1StcXj5Ba3c7B1USdk1jpr6rz2mF6M",
  "key2": "4WUzgxQdu9iRM5cmNcrxEDAP93Ai88nq84xGtAPNa86emJQ82wvKVYDs5aqMDyBHCZ31trWLQP8fJrUazkJjT15Z",
  "key3": "4JjDVQY5468vd5nrr7A4xo4iNwbksR4oZR5AcRAohH1dHhmJf9okFVyBu8rL7nUAQcNQVc684e7fF29SDgSsRo23",
  "key4": "4hJ74zCsYAawQkLRZYYqHoFAWyqEXW2hsQwLnkrrSq8phj4yRqcvFGm7zpWCahScQEGDTvXP16h4oBzdAXZ3tdiw",
  "key5": "4kq29NhSzps1621Wj3JzTXsbPnmHSJEgRgWKwhzxmSjuqpqyNcmyr8fjj2iju3Nt2dASwTzRm42KTwMGCz53ntpi",
  "key6": "5Pe8RWGuNchGhF9A77NhcMTBtXRgUBFwax7Koquxb4uKhj84LguF1Uwq83xB8sAFHmjCjv2AVS7CiT35UYoeAdXz",
  "key7": "eLQ8h4uP6jfKWMCUuswDWxUfqk1mGULTSULnQoUawz9LvPnAftR3d8Z3xM9iExLQ3irxsejkK4vfrMSG7c39srz",
  "key8": "4pduT86kxBPsC93Yqm3NwKbjJjBzJ9nbebee5orUghhWzjPaXm62U7UkXK9MGyZdUSkbZxnqn5Pqq6aopvWzbvpc",
  "key9": "2qSkv6WNQUGur9UChgEzWD6WJxc2AkdkCV3oZakX8toeiNam15ZuAtebThysrsi8ht6YccqPM1YnYBsomLyC4poM",
  "key10": "PKvXV5m8o282vyZ5da3UT8YJWwKHgKcFXHZ1Nv9fWGqF8W8P8xC5tyYsDW7pu337BaZn8Sqzarp7rqADJ6DHpNc",
  "key11": "j4vEaq19Zj4ekUEmxGrpLgLL2tM85ytszGgRnSvS14oqVUkjRvWoartQ651EAuzAy5rSjPD61MtuWwGYxjeLUBM",
  "key12": "RBQ9dPS67nc71ai5dezRAra4rot7K5SC6kcDWYqaAWxDjXZFRWyCJ6dpuNw1AAHspHLvcgEDRrjWPn9TzcQJgt1",
  "key13": "3pNcRBJxrMkff1LvjhfrothTH1FgPoU65pQRcMZFYCo2XbX5TijdVCGJG31Qh3g9cM7yGyHHMtiu4tAcnk3yhb32",
  "key14": "5ZJ4w8rFcRKeHxsCvmUHrnTuD4fYLwwkcNPUz55UaQWrAEcqBqK3WKhnxAJAnjiwGcLUo32vFTfWojxMDoPv96kB",
  "key15": "53Uombb1DthQhaCzo8Jj6asWbXHZHeDzUpHPrAkNds2CPAUK2wZjuF2gYFANHLh3nXcHWNM15eKAubophGEQZd9u",
  "key16": "5xisfxq7o4hqvt7aZT9oyWWisJBTXdCmZ6aJv36dXZ8bTcAMpWUgGjJy5Y15fJ5xYkY4ERJibxffvASkzgRqmwup",
  "key17": "CTr3oUoASUX1viC78aseAjb8UpanBaWgKxk1KwqtJed2CuLChpdeujuBxdJfRNVDjWbbRReyjwsnwdq414MSnDn",
  "key18": "4TWZa9D2fcKjD7PwCLSQAe9EURvriPcCVVtSpVSEZzoHq3s9119rA79HxebTxK3qmJy929BBe8Baq1wwGM7V6s1g",
  "key19": "3FYhC7d9VEBANeb9yN5KKWpsCqYvd4mLy8JmiPj4ZJiShsQGWvvUKhrhepCXtkEKrNjveqTdgx3z8ALFTi2Kn1he",
  "key20": "zbTe54n5ADxEmyg6VYFxDcXwwhVDhUg2rw8Xwv3p4eur8mQZ9kSgRhvTJ7QwRX3q4tNegM97rpbXMRNEPwEgh8h",
  "key21": "41Drah6rTdRiYsPv5QAxxNAAtWy9Vks9HX9Rc7tb6TxV3PVsH81GEEs9kVUEmvXMZ6b84FU32g4S1F8ePxVYqbkX",
  "key22": "sUgyXFPTdZpYr2AMAgdMZFrrYvyQvxZrJ14VaUCNArrn5y2UFeQPHptKMNm8ASm8Co9NTxuUXxpPkWtjiKvhLCz",
  "key23": "4ZiybkpSTpQVZRdzBP2DEY4o8GEanD84meHvnL9fVD3dr7BkkTTu5je5ZyDzbRPZ6tuTeApctMX7bf4S6wximQiS",
  "key24": "21CyjhC2Vv81XWGgRoUcvbhgvZvPazYJhBS4mW37SAEWY4EEt2hE3Ggai3CUMXmhrZzQGta7cMnEuBiE82eYu53y",
  "key25": "4j4NsBunTAnCJdWECEkTwiFDtSmn86BYKxGGttU2ipSCxFZGpR5D2XiyPS77xE76zm6FpTwE5YqtbkzmEjAF4orV",
  "key26": "66cajPn33kNTwCxqGfzJ4629CY46kB1fP2zTh1r74DkFsy6z1Cp7RNVjVR8sCZTeQgqdTzZaaZ1MzHxfaoj8kSrB",
  "key27": "2XAdkBmi6iBDqnR9fKoFuypQqfWQJR4wmdhcBiWAQh1n3C5zpbkcShhMbU6yxmUFHbEcKuqMdqdk2fxQ7gaFA6Jt",
  "key28": "2hf2LyXvUvxzf1CdXqteFNwzZTG2n36iED1aAP88vsBFFEcoHK4onP9bwmxj3mH4AkcZdFSXZbkbTC224F9hRH1P",
  "key29": "U542RiV3WHMFnZc1dDLSbVn5BcRcJwwFckD1k8gt96AkFwqvu36asoWieyMT4ErYmxBfcKzU3ya55Wy43tJXTpJ"
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
