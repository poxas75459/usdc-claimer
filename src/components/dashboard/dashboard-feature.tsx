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
    "4GaYe66Zk9QHzUFt9WsZSoBYiMXjYGzy3Rr3i8VANwVtU8FsngQEbZen7uPkrqXtuMHR4RXviiZZpd8uyJtX99zQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itjr3f5o9rQSKQkqj2NbNXEWyjwXFEqyxe7yyQ4o4YgTvjYA3tqHUUStYzdf7Bxxveudyus4qmWRC4zdD5kHejS",
  "key1": "36Mtzv86VhFGp9KvNXyv67eEywYvKjBh5MrWwyLz8zisMF88mj57KtCksHSLqnqUTLyZ1Gx3VB8FT48ej3ibMmmi",
  "key2": "Can33vsUNLtWnNC3HpxCbcLY8EQbHTksdoo1CGyD5z6RebBoEsVdT3skAc9ZjBBzqzznRXeVFPFWKwvYqxFisJ6",
  "key3": "DqqmR1GhHW5Wr1DabroJudn8WrsEEijS1jw8VGArppyrr34iFPCX7HTSqNAq1SNixByVzs4VjjNcrq6SqB66Mqo",
  "key4": "4Wc2xAXchTUmyVs73TemRNmZcKa3BV8V9DCVJmf9fjuGEgeu2h2oRJj444jG6dkNEzh7pv2yddQzJZ4BKMS4kaMq",
  "key5": "2NokTR41fzZMSimPFVhgV7cHPE2JpBwbZSkrqaw9J1XfbwvxpfWZwrkcaqMSJJzvp2QGSeZA28zyz9akp2WGoRS1",
  "key6": "4xeHuwwknKrDdCKPEokUB62JTZnTPtXA9KgickPfRYKu3pqP23uHp1TXEQDAdWnFuqKTCcEPEjd32wW53YrGPwKq",
  "key7": "5LQRjpeDLdciHD6i6Wo1x5PEY645TdDxHu4e4ZjmpVBzMTKHqqUDPw9z468tjBNYotDbkbiRBJjfvJaDasKtjzty",
  "key8": "26hGxAMxfzaraHZFB6TuTdqQRuVP5eP63PQz6UN7SeeLsMXzs7DjNJWgzguv5rbHZVNpRtHmzTJbFHn9PhDz7MSD",
  "key9": "3r8zEitHhNCXJ7rm6F94fhc5S3VX58i1adbCwBnC92krpif9doL1kPrRw1Gn2byECbKgxDPggpsoVAbtHj1JV6iJ",
  "key10": "5TncCFDEknjUHqWTtTD2Yfkd8GCfW1nK9kuHeub7c9LREpbjJzwMXv3MmA38h3rmLpdgs7kk41NvgV9ifczjgXk9",
  "key11": "2Q9bCHrrJ9X1UUZ9RVXqzmucXnzfQ7JYjJUtwWGhWFeD47SW8v3fAQcmNpGPoYVE17FTxYRiiwRKn1qDPkawZVLq",
  "key12": "32EZd1cmym9YfVNB2getDJ3yonJeVwBodFZczCxqa3EmDFA3KyHuPGtWJREdh1bHt6CuaqyVPhCLspikHqUc1dYh",
  "key13": "66gwRrQKtzmU27FPUC37vmpMvEKMzs6v7Nrn3L2aVAVNgVT63FBu3dosatUKeoBrGGZA2n8ZLEUTczAXuwFEibMk",
  "key14": "Pv7j46Db1X3RmhamsZu7aaJXbeL8vBjATNtTFvem8Dvb7sV1i1XjGdFZFBpV1Wm8viUe6bmfUoQtcoCt7Gbizh9",
  "key15": "64Fz66w75vsBLhyenGu4A3er976rDNQmZgiAjjnWLEYNZhoNzo3BMZC7RdjdVpPzdjNSHkBkHCs6Cqrvsine87NE",
  "key16": "4DvSTHuuP5cad91oFzKGVaAgbdXeeMp2x5aRBepBD9CvWgjbg9v56VnxSCv9nLYDkRZdBQXH7GTaiGCh8HFGGqwz",
  "key17": "21JWSRt1pwaSxvfQkUHfJkT1gtnyFqYQvcQy4Ff9TYJKej4m2DMJTYj4JJJJtZUzw6SicNVCAfmAASrVKuaMvdf8",
  "key18": "3kJW6wdk9wTimrcroqSA9AVAtN8TqkkVa8CZj5yFntaGM4pvXD2GZbmh8V19759YodrxEAnXjyGgFCMiqKwtXKu4",
  "key19": "61WddsTL8b8cGV7hAoGiYh1kGGzQNUn7U39Nts4tPCcRhVuSfTvqxqdprQD5saMTxYK9ytZZzPWN6L8iZkozEVPW",
  "key20": "qBTMP6VNdw4hXc9oBaDSjnaW6nJDfAc7PVzvMHYBK5s9yW99A6C7z8FWFrfvA1PMhshuZFp9CYYuCCs4mEuoZWL",
  "key21": "37h1hMEBoowAKNmS7u92ozJyWBnfXftxr3u9Qdi1SKTcQJzuWJM6GWz6qyQcAR7RRrJvUyEN7Hggj8zQAof9FRmK",
  "key22": "4jsXqsJpnnLe89jeh3spc5FniaAFX5hdCuEu6tqNeLCTtA8yu7dRCKJutisbKueoPuC2316mf24zxqYvJneRwUVQ",
  "key23": "4JzcUcsGbaFkDf3kDp4aRwxPnz5o8NCD677W9vCoeYTaBdj6mFQfxkW1qBVNddnjMf38YSSPA47qnDce6jM8sCsr",
  "key24": "3xYuqHSznooBAcP9TeaEdWnuCGco1BHTfykG55ztUNmfD1zsWV6yiVbT14aLx3gpmvxLGqDtsWkX9SMXThx27MQA",
  "key25": "3c7mtjHV4N1n78cEPohszRj1YSqo8nQeHJeagMMuKMmjMibRsu9eCj2pLXgzW6NNPvy8agrnWqZqPugWHmiwQVaE",
  "key26": "5L7RhVtJf95EEpL3HTSJActVRtEsvmiBKtz7tLV1hJghGn4KZ53QfMxKy2jNWu2DgvNUzJN8xVao5XWEmdm2QFBL",
  "key27": "3hyksbWSmDrFTqTKTB7W5Nidk95gKihL9tho3McGJxoBiBBu9y8cwKGTcEweC1R8xDxyphQeuNHShgaeWUVkjYTf",
  "key28": "4j21M4PE3jeav8EEa1Sz8MFhGSmTwuUVEehHSjQWEVJvhyDyPdYadN6sSgVAyuaRiBS7Lu2we9XcA3YfNXYLGZXL",
  "key29": "36BxXfNeYezHNPMM3zeao3TiUojdyKY4DkSTW5VmvMcgTYPkAc6ppShEryg5K6tqHPDBAeTUL5cXDe6AnX6dLqzX",
  "key30": "51fAL364NfFKkFyQHh62Vp1cBogukgwhFiciT62bceijaUvFy22h8XSz3qGf1zriy918b2Tw3H8NLairrX71pa2R"
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
