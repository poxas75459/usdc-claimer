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
    "5xhvhqqsCunsG6gfTUTKZHWbzha3kNajkR5tezi3iFPAzQuXJV1NK36JtEwMkdusb37s39WbVmBFNqJHqakh8aWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZA785JGokutk19oTKPrGiyP7zG2Z5HgiNwxN9Wn2NqmFFqAcKWTzNujSq2RzUhmpSu4AResBam39GVQizH9h1gZ",
  "key1": "PJwqRpsopsBPRiKQAkqLbb7PqvhsBU4vC3S5PLeo7oJs9ZgjTurkXZhVwCM5Z4gztS9ni7kmVhhi6RfN6mkHjaR",
  "key2": "292CzpDyPJyBGKSi4jfTGesBUK5m8n3hGHV3KqpX7GXBwHwdT3oWjcTYbxrE1RBtbcMsxi2iMreWwdcVhdnL6cMc",
  "key3": "2CCucJJc9mkxGHdn5hPysvgKUx4iU7eLY2YyV9q23LEG6QWDQLDpWngBFEV8PhNzy9ZNgwzTSn1wUKD1xcXWcSsN",
  "key4": "5vTc3J9Ecc685yxTcKQujgf8KLkqoPw3pPXfQ2imk8gSj7VNNk3yYC3nMA2pGwQgjXL6oPB1ziDshN8vg1KuGUGt",
  "key5": "3Z4JK2sZean9YMDcC4EucnNS9mHN4noAfaT6wPD184HEWhY2zzEDwMdoq8qBDyakrPYnbDXcESy9vNNFWigZvMoB",
  "key6": "23QYgbpB5osVhLHCTmccTuUCbtiXDvjEVQbwARhcHgZNd3W6zRJqcMt2PUxJwXhEoWWcXcq3oAhqsYJ1Vbh9eABp",
  "key7": "5dABxjL2P1cT9aTyUxofRWTrVaViathDZCPbrU6zuQbgpRnHbjcBqKtNU3H1h1ZwtRkFzSduNi6CURJzCrMsUM9z",
  "key8": "3d8YowfFpHrqP5Ye3qBNJyJ5GpKA4WkLMJNZFJgTN2U46pr518YbG6TaHAzMSVcU2Zgv2F1sacichYsgzyrKywkW",
  "key9": "4VMM26WHsgjNuifkVFbEqhpaeCjkHfaxFAHXBzGxMZ8ZD269St9nXhu2hhcJGEeeWo2UX4nP9K3YvfV3ZFWAPgC2",
  "key10": "6KmoAas5NVeGFKPjKE8DoVQWZhWkRCLXjFvCkE3p9QoozYT2BNUbafrjf6dJzxHK8TsyEtATi4xTJuAsR3UyDdL",
  "key11": "3qGz4q65xsKyBjKh8D9xpzpuUwshG7WYzQnjdtLw6dxYXQ3CzCCyUkRMTyyQNkYjjBcRw8qzha3fvuEWs8M8GxD6",
  "key12": "EaX2wjc8iRU8AgvoxxKQtZXmDW8cnJpq5mBQiGEb82CgZhe8eTPDtjtuhQaeyd6DdZUrA8o4pGCxniPxePt9ubs",
  "key13": "gQmM4kyRYoxyd5mG7mJ4iAnhCtKXjZvPCVxPbZC2Kq4VnQTjGGBp5Efcug1zaW7YSLF8xG3FvLMHt9cmWFZciRj",
  "key14": "4fmT3nXY5S3PkaWxrxFc5tRnA3zBDL3gyBZ966Any6LwMtfx8k2pjx1aTgqqmbMvbn54rg1YmD3ZoAzdLLa2JhK9",
  "key15": "62KFAVKpwhCZDduAtM1miX4aDKZ47d5SYTyKFp82LQ5KbvAjziNXamgvYfQciFpS9wtVV6DrT7QTFJGR7pg9t8ij",
  "key16": "4y1mSecjZSLQm1cvL12aCAkE5QHTDKGajWJz3nHMS8rHtTwhktey1WVfb6WfNHgKWqdchhr63jYYddAHGFzTMTef",
  "key17": "3coBhXiSMX3N4gye7XQMpSpRntRs59ndPe72KCfX8V9jEBzcWEkuCStqT1CQiUkjPoh8TEtZ13WBDqewGLnr2y7t",
  "key18": "4qNS4sHN7pw3GhfKi5DLjghfYy8PwQH4hMcbN45cnUTHaXvUu79r2D4i9miFcecYh5xewMqtL5jALkwCXEo9Da6g",
  "key19": "3mvyRh3UCE2s9Pn2UgDmTc2VaC9VbXhephVrLiZ7eFrREEqRs812M24FXXnZJeCxRWeHFDLoqYRg3hxtCzhWoqer",
  "key20": "iHCGMkMpgwWo1EWLpV3ZdxXTopZiarV3F6NJGSaH5Rjfbi5mciPMGWLvLpsNccB3ZjqbkNEpEeLMo9KWvnjgbrZ",
  "key21": "2JVqJrXmSDDFdonmh6ra3tDTbXiXTHpLEpxPZrKrZGCshWXMmpbmd3Cfhp2RCbwvd8pGEuE6gxMMr4GYfcz2QzFH",
  "key22": "x8q4Bu9nrnrRZY7rqeB7c9KX4Ac3tbK2cQfxqi5grCFmnRap4X2AnzrDA8LLg9GNWDGi7B3dgk3sQH8aQaBs6jL",
  "key23": "5umxDQxhhrobu6jXz8J2M5MBisnKfTfv6NdZuCogtU188T434LL5Tk9nZKY97BbZooL8cvxCEsWN97VvEQdNZEb7",
  "key24": "4b46mz9chkZGHhEUP9vJFppVnPBqnzy4nW27AbqZC3CoCdbJeFJ9QQ5vRUK9KLr2A3XzonA3hnty5Nn6oRnJeZbh",
  "key25": "2ufJsEiKzWHACipNqyMejUKraAsPK7iztdCL7LgQFMwi7SzrFYqJCo8Su25pn4p8SjoW13buZLPfnfsQsEXUYwey",
  "key26": "5tcSS648Zw8hUTc5iZ5B42QwevsiaJTgdpr67FV4Hm2uZjjahrFLhmX8ZzLDNMKNYL5aBqdZq4FT2JvnsUJxfZWH",
  "key27": "4cx2u3ec8YYQgbzr6mesbE5RPD9bB32GXKovfivFWge4nexP2mwJAQmjPzkGXK2B8tCCxiCyNuxq3YEk5NTRktaG",
  "key28": "4pqZKdAyLz7YrBicajZpQ694sKuqyGs4arE5yDnCiKmQWnp5ZVi6YFy2yEhxYecbKHXsTc7DaBabFiMNYWDQ3RXo",
  "key29": "41yrixRUBeSL3RHerj6eosyTZ5qR3NBF4j9U2CT6CwD2j7yfL7hJhmJWeHo5VA3jGAvWAU6E89teQ6H2NPBAZYK5"
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
