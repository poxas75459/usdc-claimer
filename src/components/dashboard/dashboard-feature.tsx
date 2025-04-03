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
    "56U8tzuSgjT7YA2EzmT6smw2mdnyRGHU3FwLbqvYvvB98sPDz2FAnDUvuP8WSKq9Y3UeAk6eMG72q8iFe39YSJku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vi3TCS1wxRcZwqjdiErczwYpPwHzF8oDWr6usPwacZq9o9YuXhyxcVQJ29Lg5KWyVMXrDCRZgpyxXD6RFg9Cktb",
  "key1": "21DbqwodM2E6Jcmnha2YpCeQS9XWEy4Si8dLQrVF3MhCtgXkwP688GerZzdMUAFsWWVL7uaLx9YzUfys5q6TByfY",
  "key2": "5ab4AY6hwYCQAkYKWXe8euRV4gHcX9U1F5vD2MPKR1ENYEfrp3DztnNngaBywTroMSxqK7nXDid9gSvmNpJXRfsW",
  "key3": "uaPJ6SUXxpeKa1KrdBenRK7ynZdVyQ7fXjhQ4PbKxCSri8i9tAWChsDvdUFMPwm11N2eCotaPaHCjbqxDpYJ1LH",
  "key4": "5PaMbTWwimS7HzAZQvqbUpcvz4corrykxxtChHBuDTBKY1PTfcUnXWf5eFeyVmMhofThUvvGXdeT2sq6GoqdekdF",
  "key5": "wZLd3CJwfbFwTvTmngYxP4tZkQgZyXEYkEk8as1MVAGnV7yTQuN44U7w83ED6JCu9CoR1SFtrzmeWT9fEDwkw2y",
  "key6": "2RRE5vnypF4qC8rExGTWsobGhSeEre2QMcqebtpRssACv2QZVojnKBNdX9YGx4uGiidageJ57aznBks4JnYGqZTp",
  "key7": "25moLQmk8xnaJVZRi8TFymYXQDcTCH3W6AcN3N5azpokAv2F7bQ1TwNKsrmbNEYhPUZcDsmBZdCai1UFpcnW6SgJ",
  "key8": "Wxju1sYwoHw1Npns6XmQxxyNEwHKkpHJU5U9btkaQWi1Yj1Lw3XMHHmDgVZDLMacFGL75iJH2T4bKc2QGnQpepm",
  "key9": "4T6ohgCXo91NnsHLpVDVZxaTg2s6pJbA1jw6x7WQGGH6q5jwnHkdviHuGgZfQoGqNKjTN5BJyTw6z3BqV2VJxkN5",
  "key10": "25kg1NkyDfZLuwokNY26nKxYbvRsQ9y4NQAcfaXScZfDAv1yYzrZqiGea6J7rrFYGJqEddFAdij55wzxRCcJ6D2c",
  "key11": "53FPAe9q9nRHygBL517egTwKenVh8qVhNHSxfG7tCbQhCV42uNVzuXBrxVF1zBqdbE4R8FcmX8gzvvZzwFM5D5RH",
  "key12": "2HB1YTRoccBTuANBkivrAZNX8CwJ6emprmAJuiHaEwF5ynGJ6oP5YduT596Ld9vvY1PF9R7p3r3Euk8tKNkQGqG2",
  "key13": "25n7xq4X4mjMjv59TJDf1kx3qafTuNuP4t9uKj6P9zHfQ3Vh16qMSJyiAS5yHRDvXVUxx1ntZts1kL2GJEzZqanB",
  "key14": "4jrQ7bQwKkwnWGoYjfuX9A6e8kJd4NZqRgEbcxCJQeD6AzEcACPbKXvNS6BNkARYqq1owtFAHQ4R9vJLgj9cMRbH",
  "key15": "2ZKiP62eSxo7LooVJVu8cKcnB9WB1wTYK4ud44k5NgE3t65kLHraUaYuopcKTKY6Xg9UZM3ZbLAubjdXCB8MWrvK",
  "key16": "3KPxMs1VDPuAv3vmcvBq7nNRrPxMfSxmG4QtdfJoBs9ssUoJgFELY4F6krst6Jj2W3eFpVWWcyFVTzQ7csoriXnT",
  "key17": "4a3hYDurbW9mqijqPJExqKcwQho683APxbJRtEaRHvFBXCVgG2FuwNjNXr2aRq2zhpFfeexC9rjcfbcwSJcajsk4",
  "key18": "5kGteA8Lmyum2Tktu1zg6FQerqp3QycN26Cd7tzv2cBGjky1fpYWNhJEr1VPvxwwZ5NJUN5N6PewVH8rE4AwhmA3",
  "key19": "2omg8ypTtb32NhgZDuGTWNCmQgPAKEghHaJJ5nrZNq57YNrtTPFJHAH73x1ZcYjmA31DNdekZynwLPgkGVbErFxR",
  "key20": "28iA4LhYgStiqHRoQXVgsTHdzorNPom928ZZMXHjki3FjGGW9CM8QPX7yS6KQBHJourG5caNXK2JQ92hKXbhW1it",
  "key21": "Es9MQvRQjnPaPveMHDMrUnFdCaK7FsGru3qwUnSTnPHDLobVmrHxDLAP75hDgQznspCm3d3auBEVkyMVgdwnGXN",
  "key22": "4tL9RaDdQJesWjxsMgXQ1CcDwWY6S2hpi617PoTWmKnabqdx4UiMSMGTPgEkpUTysCd21Kd8g5qtwamWCwKwErE1",
  "key23": "2HwF2t4SVJFLhRnx166wb28682NwqJpquQVAPoKQKcnbKhDavQPJA2Ur5hwW36BbYg8E8PNbSkFusVDRPnRf4Bjy",
  "key24": "4WWzJLPLdgRfakAvVAWK8ZxeEg78ixJJs8x8m2L5adHQBPprcBMVT4DGSYBJ3wtQGZWpmhyQjFvHHywv1G27UaRn",
  "key25": "5iYX3rqF7sxzCDmUjhSdgVKYvEeTCgg8WwjjF2u7MctghGEmJieDovQMrFjzjC2fis8RxUNNb81WtgChVimcHTqi",
  "key26": "mXc6FZyT67XKaorrVtmm8LNc52Bi87UxBUy7arMC6XoTUnUaiiLDuNjKF14ge2AoGvMRvtPesPTKJY1AwZmFSVB",
  "key27": "ANXYgxBmhwfj5KhHea7BeRH7Daf7isMxYjCVzXGoEMfkGY8tHMPvHfEPF67xNLYyfptMcz2nEbGW8fTowVJCSQg"
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
