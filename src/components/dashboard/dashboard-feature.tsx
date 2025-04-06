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
    "2Rz19q5inrFCKfoc1Bv6AxKQvrLVHk5LymMwcNVix75rJoR7xj9XTj59TcqQseSGwKLTc5c6tHEgShCF1aDyyiDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NEnmGoJcbVmwTo4basoHsdtpPQjh56qu3km4jkorUhMVD6uGm6F9RiD9mUFWiFgh9h6LfTKAuD6sRrNXtJVF7f",
  "key1": "nJsVpCpeR3ZB6nW6cRChgg6mURea2AdRT95to4q7VF4pkB6uSzpRVhqe6S45RHqGke6TjMgaeAjfuwgjZkJp1rY",
  "key2": "2zbLj18Nte1uP4LfB8kHq53xm3cUb8G3SCLuRasEihTgb3aKmLzcqWzKpahvF5Bg8B2zS5F3QWqvWg6tCFjkF3BA",
  "key3": "2eQTQxF7YEP5vZeFS4XSwx4zhW5BTtfqQCPozho3KaYqEzmKkomB4zwyi9p5ydWi1ZyNGCNLVV1ZQLbTVuczfhUB",
  "key4": "2xJZ5ARqCMjhpAEFxvYm8R6mmdtWeeWyw2USFRPsfhoNgNrzUohA2CwnkdsEQUHgV38B6GyhkSASvBsEhaDyhGE1",
  "key5": "5gZgpK9TWg8hbBtgnBeKGXKWfvHZJ8BVkytHEoWN84kHTJEanphEfy8o6P8pbKEsBjwaUp4n8Zz5TXv3tzki4dTz",
  "key6": "5uQpWi4xRmcZ3o67kbjndu3juXNFo9EKfoWHvZfkpQbakR9V6GYxy6tT57SdU3QCLYHy81ZmdGf5zjPJnT7FXkvR",
  "key7": "4H1BqckqJRjBVKKAJwjZuPzfecDxKCC4QHV8nz5hqn49D8Uhi2ais2PtJNuQgyqphCzRU8AaypXFS49bq78eUXc",
  "key8": "4SV34pyJsAEiDN6xUsXvR5a6EzV61SJG2xJdEq3A3PTNqtSQ7ow7f4UAvaz5QpwZrJTEHwbNDMMoCJMKi7TGqYKT",
  "key9": "Bp1om1e4Ebeixh8ET2XtgdYytnVWbcPFFortnbRfDBnzFx9jksRMtvsZYxcMnwon7depEF2H3oX7i6GAALaKScx",
  "key10": "22FmtWJTKEnNmXo4tJe3c1Szx7pFPBw5XtL7BV9T65mob15zf6QdKc7wJuiQ9B8dGE4oAKSDs914MgXQNWCYCqpA",
  "key11": "zed6gk6bJftKjtLkYc4xkmQQxW2opKV9hJSQZVEgY68qdHCzPuaa4AVfLrHW2H4VNZqaBR5N1PKe9NrdxtV2TSh",
  "key12": "5dEuWPXdjH8rcS7J1GXS8Y5snYFRKcFCktNFsa28q51qJ24Q1fi1i11grMaXTPmVNLVVubPe7vLKb6rAQkDptAoP",
  "key13": "bNqSsxHuYFeFgG9JsVuwgohW1w8KG3hzXyPcCTivgmgti2Urdb3yQMRKdW5kbTjneuivpmkrDas9XMyAkfEMj2w",
  "key14": "2X8abh1icGCsSx8yk3QGLasRGa2uNkcamSV4Rru4ejKt8eL241mU1BSQ9M2xfAab6sKU7BYr1AVR89TVrkWu6adn",
  "key15": "4vAM7H8RyNUeBCjgtN4BxhJirwZBiXYQbjt7RuNQGfBewQhPAo6p4Usf9ECZDvrKtHsdV66JDdgy6EAx3voY3WJT",
  "key16": "2E3RGp5T5JhkdafPT9tWL8XMm4y9tTPe37BsZQBDYt9mCd4v5u6HLFoNfSExr1h1PyVaBo5vxn3PMnzYsBHxnndL",
  "key17": "3dbSDqCowWWQsfesVP4cZUeCtvAvVWDayvsucNdvVkSyDBCTu8NSpGA5FTpz4Pg1vvQLsfggzeD5iX53rzrBvJ74",
  "key18": "5Ss8QzMiiGrpLK1KiM7sz8ecaZxRVArmenUTncRLexvv9qBwPxy8vLvHYQj13DYuRWhNorF4mUm1xuSRUjNAKqyN",
  "key19": "35EeD8GKhEdS9drQh9sh9g9tMQDaRxM1uuCJsHwNaZtxuPCyTWKcy8BtNnqi6q42UwzhB3vJnYUnwNtp4GSpQsQw",
  "key20": "4FZi9684EVbuc8cj3CMCLPo5Pvzr4sRTMJtqUMADimPg6QTCFQrjUuHsWKGZKRdpj94DVkS4dbX4aWNSe2vSE1VG",
  "key21": "4FenGPHvsVqxGzW1vQNTu3pAC6EWcUmq2KSyPWxwRAytqybAJYNLKvnjQYog9aqkpXGnWECzJqZtdQdAiTNn3B8Q",
  "key22": "4isYWbn9gB8SGs79fTeJxTD1UF2ddsB7N6kCfjwjh2uH5hZM5XNfUkRq4FhsTxhNLgN59AW8tdNGX5DiL6HNYePJ",
  "key23": "yk4FcuooArpZru81uav4KJxT2mv45vBfQ9cgQMz7MasoTU4CA4gQ5kaCySxdqbqVw261EZEahVNZNJCfevcw9bG",
  "key24": "29mvk5MdLaS1AYBR6SX9cR96RfnAm1WtJXK42eEMe3EGvafd44C33qZiWPCvXR2JmhP2693dLzyp2ErW7vXJFgsX"
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
