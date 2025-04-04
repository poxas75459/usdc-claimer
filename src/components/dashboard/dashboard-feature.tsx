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
    "5HTbaoR3guZx156uMGZd3xBTEqWW5HsvC5vhYhVTEUgZLLSoYKZcDzX32Sbu92q5yU6tZhqShZxqbCR82SXgpPUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CuvCyv492qULfX1KX1eS2F3fFHzAyKYoc6xxmZaVAJseHcQXsJWLMeyR2v34CGsKV2WS7EVFwaiZLkZLWdbgeK3",
  "key1": "31nVqcewpV4SrGkHrytCbtERYR5osTYCHMGPWFbyxxCemRr7y2oBaNijqX4YMMwVsUV1rhgarf7Vw4Ax1Diq9vS5",
  "key2": "2EMx7NbYk6twNYbNJ8V5STBS5rAUw816HphZuKtzzNyMz4NHJtUasqeewHBdqEZ6z5XG7HkPKq65V9FAHcJpd5po",
  "key3": "oXdijq18tEcp5Lvs1SwJVaDcpjQLsxu2WomHdsc7dk9JYtYD5ppE3ZKPdHBUCi851A2vb45QCTmYZFPcadC9oV5",
  "key4": "3eVb1juYJ16n2uxx4zP6tpERoaoubqintJszc8qTefLGVquqjDVhu2x2rZkeXF2nv8T7JNNavN3wDA8Wy1Vcyudo",
  "key5": "GvB5vj8RU5qvXdvHxjhe7CgXwiNeHJJFVsQUzjiX27djgLuNnob8F1rAkgm8yW3nJx9VMrkRwGLq5QWHWu4MJkA",
  "key6": "2DNG6WbNBgkSCrgUZgqZsZE44vr1hFS3E34hKF4BgPKqFCzrLEcsKh6xkv1FiGTbcdfT4THKjK3YroRXkFuuvx1v",
  "key7": "3iAm2X5xSZStKvVR8FQWwfxP1d949j3tequLidFHccUg5JDejZKB3xBsjp6vzxTeUYaksakRUqKUy7HVSTFacBFN",
  "key8": "4ZCwsWTPC61Pv33WssA7m1S6JsQRgoLSedDBpLHn1P3BSkXJTJKF8mtJSuQHL5U76cBoUCuA6X5TSNzeiUDXq2TL",
  "key9": "3YYNqpXhneTF1PBJxcGYrfATzQMDmfJEBPxQL6NMaYauaYv89cbD73p18czFx1g3RPv5wtGG6g7BmprdBvEyxQR",
  "key10": "2fi4c4bkDyuE6Xq4tUUQpuemuFGDqPuLU5xNnQd86rxiFmLUqxPYciA5wLRDzn3wJWksw8nwNFR3k6BwZB4e1UQ5",
  "key11": "teBFWpuyZNFmMcZMTa3sJUTTTp7rKmAMJUizaMMqycsMYaNHWEt5QkUWkF48ra6dFWjBH2JhJYn2Y1oMq4cWoQ1",
  "key12": "5spdF4WCn1wATGZzNGC2sEPZUd5b6tMXj3XGQ676miypPvX1mXXk2sxVX4ehTAAvhLuLtumkTb1szsw3XzGBBKag",
  "key13": "4bsQmdjxtesbcVAaweidvvgz8huSqRZCY4W1sNseFvkndmygBnGXZzXSSDwzpt5oQJRWhCPqjS9usranpQ3DHDPw",
  "key14": "4XfMFntMboe8T3sk11ydvMxmdxZShwAkfZqgmT2dzqjXMiAjZNQVUzdFEMyycMuQM8N5xHa4N87MB3YD3ADYsDJn",
  "key15": "4Q2ZpVM5XawEs2aGX5pTtKMoHTq6G8AyuXTtsaoKbezmDyNezG2PbSBKjpbdyCx9cu9scpiXv8WWRcjkN9tMJQQi",
  "key16": "Pm6rXG7PJ2WssDdBap6GUDjnyKAVdtZRenhMMCHcZvC2nfAD396WCSfQfZ1c9a1gw1ncvx7ofTn1Aje8JkEpGXA",
  "key17": "DevuMqwMSV7V8Cq1HKYycgyXdvSencjxoCcaCy7KUqctjS1rZW9U2aLBE9bjfkohNkUmydDvWNB5kEL7vvQgrt9",
  "key18": "54WR15Pk693c9utHJEBh4Hi8Ks99J1TLuUAMiXXxbA8inwh9d3HxoPZuJb7HS4BRsPCNzxdEdpdg9TZcZwU9Mywb",
  "key19": "4gfC1EvqkMaU1Qpc4qYZKZzUmxufnESCn6HDkeMDhfaJ5jbz3tAtaPnHpcNYtwQaAAzYZKayLnQDyWvc27HL5Qp1",
  "key20": "4HjfRMfaBoknGkCeRrzzqh6SMKi4c8MJPM3zMNskvu2VBGK1tBNFPB6gdX4MgEP39RsrYhSceFkZRnynzBaCHc3v",
  "key21": "3Z2ajdeiURnW2ad2vo2QitgM3JhNkcziBKePsoxq8Tx6QQwno3C2FGMtJLenu42LL5bSHBjFn8H91w8mvpwi6CV7",
  "key22": "2AgUZpLsfcMcM7Va8jKkitWYSaCnyjgWf3qxq6N1W2wdwiF6dQWMkqLsSDQA914Zxc4q5647VkisSHrqCJC53Bsf",
  "key23": "4gw9sM56zYddsQEiAssZ3kvnwQ9vn5iQjfexmirm6xVnksGZ5jYxWQvA2Cac5b5pUfWSSnaaHgp5W91DsQCrKMft",
  "key24": "UeiCePiF6BcoN5qB3QCMjxyrnybJQ3EUjiG9EYGL5BZgMSNM5aU3SqYzySB42kFJXRMCXqqtuYTdC6y9sq3RLXL",
  "key25": "8WK8F1sfwqMHkXaLFCSygymEkJeRzVJKgHV6jpoBduXo7eYHQg67CcXwFeZrSKuNYBLFZBDorSbKqsLnH9vt3Rj",
  "key26": "2bkecqnxn8ytcKxbVgv2Y7LzB4GwRZU283xJAwHvjyqoqw83RFLkXCW4Kwu9kQ56VCoJuKWuhDgQS3n1cbdhsozj"
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
