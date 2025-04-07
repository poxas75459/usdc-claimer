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
    "49ioYkxaCcfAbkaUvDY98i6wGJWyBD3xsG7x8X2uwwEvu3sU9YCXEighPx5WBHquoF6zjEwtFeZJzDedzDMNTnYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Rj5gd7t1HqRu4yvBFUMoXf2RsMJ8uZDUcx9efn6U4Xg6wAadbBbyv9Ye1Brn8pT3RMPpafUgYbokPp25azF7aG",
  "key1": "482KeykxZKZVQ5KTVJoAYHu7mVab7Z3rChaxxh4URNnfwC1zbnCGYqw9m3XfRMr5Vu26F3H8o9pBJ8bEvVG61xi3",
  "key2": "3mkzkE7rAraZ2ULtChMEsCAUEUjJFEYs9sqCduS5DkEKeJrKCx1ub9eWJyDy5J1h6LB6qYhAf4yqxXJKpn1kQayL",
  "key3": "3ggYzBMZpf672wruLjeD8LDSE3CE8VzrzHs9wzB3ogwrjXEHWYzdPmxYz8VKLqZ4JNmAAurpzuQUFvK1cF5ktyo6",
  "key4": "2hw17Uce52kNDDqvXdFT5XLkWY8LWEYC7ZapjcZVQxWggkarDd9uijkwVNwBeRahTYbedj7Brtbgyg9xDz8HRqyo",
  "key5": "4XHEFSaSD4z865NM7sAfzK3mEv2ZAsKr64Tq5QMy988zMtmxB9YzuF8o7mSFtwJMMJTPRsc9ffAf3SNqLm1qZKp8",
  "key6": "3YFPxxxkFK63wkF3WGEv6uyman7W9bbHMp2S5oAHKHmbvFysQDJoiqUeDNjtg3S3pKNLHxwfaJLGzhmBrrsGoZmS",
  "key7": "5E9SysWxAUcsp3heeBqVWHTFAmwuyW1bzVb2jACsF1CTiFqwcaNdDPGSsc1NcvNqXaq6krp9MKxfsYxpfSoNxy2v",
  "key8": "xtakXGhHo9Ksu6U7j7zdbWii7f5Cy7tGnr8Ke7oQHA5Gk6hNpQ6XVfSFhKHXhUKaFRB9WyHdhGMtrLexAjrgrkc",
  "key9": "4hmex86oNTQAb3cUyyeBpzN9Pzxev8xjPtqceg66pVwgTSkgMugyWEjfGvPjtbEprKaXzYDW1fPQBWh3zXwmihuK",
  "key10": "5q6Kx1N7AZ5xujCPec1ddtezKFuKkbpzVz4yKPBSSY8poUnJGhbT9xn5NHQgKSziLoqhpc38dCkPpUN6XT96F5Hv",
  "key11": "2ygw6ZAAFAw1YMTcZouYk1jCsDsmtmXTWNLKm6scSeNpCvBes8tnsW8Xyg6fmT2ZYQnuyXsQMjueZoPoWwrBfRcD",
  "key12": "4sEqcMANxzMBDGa9zFnhLWTYDsfPihd4jRersNPExA3msMS1fxPLadv5wS32i9UbELJwZunGDDcTG6JkjYDAX5Jk",
  "key13": "5pxeW9UQYHpNUtyrD23nusFWMy9EAMbtwTtzNQ7KQWqgwmUepR7K2mzo2ujqaavJ4XRRMGMZ4JKAbSwkpWPF5Udn",
  "key14": "jhWL9L3f2VBnmSt4BhnzqFic1VWeqBjknWe99hhK8g729Q4nmJMsE9TWK6K3xGBvGNsRUsbPzRATC5ZLd7Yma1J",
  "key15": "23PM6RDg6R2owp6vbjxHNK6A55VMpwW21xPTEd8UaVeBGFwo39A8UgG7ZS96N286wnENEBTHpuna8hpK2WGXARsk",
  "key16": "33Gdkg7hNJ5ocCb9E3i2ezq72aMBmo6GmhSGBFd1m7g7H1QTAGfpz23CBjQtFgaNYZrvFbJc7HsqGia7a9tWezwf",
  "key17": "24TmLjTXbkTszgRszQQ9vBvRiCYgmYidGj6LnjMZURrW28wTK8zG7WPjxDWrNYyHdv7Qt14F6z2q6ZosTy6ggc8z",
  "key18": "bX3Foc7uHJQEHzYWa8389h6jhEkJGexts71r9EH5v6w4JJcEqPYAj72zTaWkhLkXiVqwhWzsuMBBFLE3VYMzL5D",
  "key19": "5XG3Y9QEqkUESJ9MAQ6PihRtrFEXojy5MZHEXBPP4sKw9ZX2kyPyqGEvBiPiNnSXu3A49t2tyfVUM17MPPH5iGKR",
  "key20": "2LtpfKyirVB8qXLoZ186ia1hE2prG6tnwYr8qDxxBfWqixgeeAjEkEZVD35eTFSfs46z56nNZgcJy9z4K4yEorMJ",
  "key21": "4cpx1TQXTxMPYKxJaEe2EYTEPtKftt3jYzpqZkAHi6shccJQUFqnULiqyP78jnWBT5jcM4LzyYDJtAKN8fGjy9k9",
  "key22": "341c6WEXp2zctAAwf7EBiwrAWJhgw4mEVcjpoC9ipsVas1czZkiTW4kkgFCQz3uTnQuzekxz46MuEmDBC2NjeNub",
  "key23": "62k1nDF8eQBVa2iyDvknQ9g6L9grFprFnFH9jVqjjuZBo1K2bZcrRQzjW9wADr73SC63wDaUUPYva4BgE8tw3Mkf",
  "key24": "e1MKyTKFTpERubLUZS9g7JY5s6f8uq3NvbZdt2RSGarjBBoJDMJuUL4cSuMGSaYRaZLXX1uJLnbcit8jtRJevGd",
  "key25": "5rCTyT1zFMsujRYXJcVu3YX56ZuiQBPRYRx1e8hrHjQwLMEJpqwuCzcuExmdr5hXbp776YDUpBKUDEkQwycpHGP1",
  "key26": "3FsUk6DjrXvAiWLv1A8LGzzrgAFmqWiXryYAzXU6ZvpKgEdaTdCZbHK3chMnZquaaRFkYRtfMPE87CKfnAR3FpFo",
  "key27": "5YyJJAx7ST8VkAu75hhV6gQEHNmraHiyzSb3Tqesi7S4FHkw27e3Csw5kYDNpytLEnHFVnXtwHNSUTYhjjJMn4Dm",
  "key28": "5hH31c77xjAQc7GFvMBK2mUAtA4P7LNNkJqo6jtHXVnKERGJXa7BTWRHDjLop6ZVwzHEkvLwKCsZGVjryHBjMn8E",
  "key29": "qVrXRi9AgViedG3wbT1QstJqcBtj8Lu1T3yqDMvXaTwBz2yhovH2oWXa2VDtFo4RWXeTe9ShYjyhzhziKF3rdXT",
  "key30": "dndqPSceCMs64HCYicyupFY1uD1Ga6YW1W9K13QHUMaKsmpxciUCn7is6m7WMNfPBTHPJotmjtUTcDLF3GcZYAx",
  "key31": "5n9r9jdKnpdcWChDHNSwiHLiFqpogYMWSD5XfZiDuZLzrXsY9H1Tu3V62hbXQH9T3BJNLY8DevJT14YaGzsFc8bG",
  "key32": "kJC7iUdshZEzjym69FRGsypEeFWhq7CcNSiMnt6FdgfCZXibMt7saQu4uKeR3PHcjP3gpPgBPTLHDRgc56URKBX",
  "key33": "UiGXnMxyNJ5wtikbuX6DB5LZ7UXrGkNKeVnJJSStvv9EFPTT5vwir9TUCdsjmi8aQQdrjuAygCCaGAgt7FYYt4a",
  "key34": "2JTJZkYaJ5y3KeMU6ykGktjrffkdnoXDH8HRHNBDSSPYvHHqngUgUTie4Mj2Eja2gy5gZRir4e3yj1KTR1pbgRxX"
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
