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
    "5iZvEFCHgV4KNxJzJ89D2BqF5weTnhCrYuN78gxEkxEASdXY4WPw9ui4hqg9yMREFuCNgmZuHW7Fy6y3iTsWApDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3tCRZKyDeZeLahnNceWSjEbUZe65JEMPe2QVQK5RUAXVghr6CdxqHfVRKanarsQQbRhRupGvi2mxWYL5Mg4NZV",
  "key1": "3UUUCqEPe2DiYBtsQsaLMEKdYuAsK7ZxGPebnprS6Z5ijvAGyrLEcedqu12QW2nghScu4uZ2m55SZ53nF1L81nDr",
  "key2": "PnZNdCQBc22DHHpGcoJhSq9MAXg2RThhjTKuwu2QRdMBDgbt1BXuAwjZsAhKSXYctaWWQHe98KtZ9Ry8Z8gM3AN",
  "key3": "iECY38kVimDvvRzAe6F45QNj8YoDLrydN6RtGMeK7ziFz2CxqsPbKeYzFgYRaRwktp1tqQKCBm5Sk8HLRx9ksCb",
  "key4": "3zqQg2hzcsP5TJ2wyDf2UZrgcw1wLHwsqr2k4WBXrYVoJEfKAV4NBs2mBtxyA1eSt4XE4VJzUe8TZWzwKodxa9dU",
  "key5": "2TWa3jdUsHJY3ffftnbFZLcpTqNBda6fFt8sLNYy9qWGQtN7xopW4eSEmzJCapYXJpiwhqivn9JbamSPUteFQECb",
  "key6": "277fnH6aUVuRSYdognc1gDmPiEaS9SZnLh22N968bQkws7PsD22TDBcTzWtbdZiHcT9brfv98RU5wVTSFMfg4PZv",
  "key7": "eTg7xTgDe48TRX7EQuTG8BbU5KW2V6unqC4rJoJNJsQ59sHDrUmMv46EjQHGAEAbes7WieiNuXuWM8KMpoHjW9q",
  "key8": "nnovS1GcvgNAMeW2fNThDgPyF9gJsEXiHAP5w92epmkfx2pvTAvmNHZ14Afx8fuS1SRXtcNoFcqYGVQNHkPNAFD",
  "key9": "5M4BZQnj7X9iP8vY52WTydAPF16xsFPS1K9JNYuEeozqzgjuuVqzNf6rykwnJWGi5hEakTybjeMoDC6HpRpxErCq",
  "key10": "3NkgfH7xKCyo1JZDTEUFbJNbR2LDzUPhFYJjYtPsuHdQZxjvVCbgGEm96aS534wnLPrGH8FbCVZhoByrajKtUShV",
  "key11": "5hH1Mfd7dqtoSj6peqHjq9AjExvzKgg1MoU7SP6Ed8VTCoQYJo683WxwkTTw86QqmE7VmxKETNXqYGt5ZB74mpWW",
  "key12": "5KiN8puWesoZLmwJHPLmdAKBikSxF78faBnakd3ic4gXw4nkpRYgFJqtK18na2jPpw1Xfj4MQmRCgg1CAZQvEUZp",
  "key13": "2RZ1HEofxkqXJcfDeEPhJHPSg4i1pCGKJwHc5DdopG1dro1yZ2ir4gL78o3DLk8fN2J4h471CUbsMiF5ToLmFQeU",
  "key14": "67SYwMcBrXRU9c4d51AvUX5oBLz3yibZb2gKJsDLxbFMekq9PT5v2jyPuBcLmJQLYeY4jkcwQaSo41ZGt89nURxG",
  "key15": "3vxaQWVa6puqJYrS4TcLCEA23c6mWRTM7WGUXqFN4CUuxd6oFFAWQrTniRVVSVQM2d2fNfo1StKtY94nKANaJ9TA",
  "key16": "2Q6LniQm9XiyTVxH7oEZEFu9afSfwiDNzDsb2G3urjRCgPmFHXG3sVGiQCChVkQ7GhVooXExSoYVK4oZJtKp1hzP",
  "key17": "53GJTGrDk8XzNCjMMfiz8SH6Nj4gMxXzybmtHNTWByVewEzSirc4MtN8TRqCf1t21PCPtgLTprC8Fvdf27HVFh6N",
  "key18": "5hzhZArGkQybrkifZ5XCVg7UdgmBcKiQ6seMyqvvca9GBviqruhzWceqbF29rdPapz3fs5Qc2t2cMZfKRaXhGH57",
  "key19": "4FqHdsYEKRYEipaR9QSLmfEgXUVcyt9Xbfca2xdjW1Q7uf4UkpeDf3aAAgqQzDZZmuh2kQYR1ME8ykfEeWGebHQr",
  "key20": "nU1FkpcautDXXgxgb1A6nUEXD8QnjXdCAEcrKgR7A3bC3Yt22bkzinCdVXvrc9qKsYWCJauFEMuFAuyLGbYdMPn",
  "key21": "34hEfnYfesCuWPw7VhC62i1ej2aqk87LnghAqJY9pFDHXm6irfUyoJCg3VDKJMd845UKkAZ6uV5TPpk2jcHoQqL3",
  "key22": "32pVsLdybxnbd5zzUt6AtDfmgqvoZzjgdnwq5JbndyCeSgoZJ9ToJFmJ8VswGjhttFfxWFgwuNHwRzJYLbSprNwj",
  "key23": "5Fp2Rd7cZbh941XiqUgJxMstjAF2gGQZcrSweKFD5zJt33qexnZkmRnKBnSQxxuZCSwCD6ohnajn6MPSjoa43RTw",
  "key24": "mbvyXU3PncK2aVfR33JDxoFynRQqaZQhyUHoeTK282wt8H4qtyutL1jDQCMy5jtA7CWnk8tsS7LAMEgiGa7ckRp"
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
