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
    "6398Gz4pyFHT33h6H1MSgUKN8nBJsMgQ4VKgq57Pn1ZMy8tRQQ7RS1tDWNV6jeJMnsFD5YCjmMB4FjuLv3UeQNKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q19rbLB9uxHC2PoHjuzsSfpLLx4kWWmrjgTjx3S7NrQqx9AoYayuoLewzZUmiRJHkPCsnvDZ8idgDpHn1agKgad",
  "key1": "4ngVPb8MEbhRiDw3dzEd3HT5YkTNtXGXHhekskG18J6VJpmGKdtXshU3eKopWoYnaiLdtSsrBX1yWTSNnfqjGYqx",
  "key2": "3xaxe5s6nc26M1J8TaxbW4UkyvGP72BLCTgnFu4NM7cwtgbUagrEqhXBRkTonymHXLww8iEGGzxKCwW5ajwM8cUe",
  "key3": "5J9KY7JWdbXSmkHWiWMuJVJKmccBVyyAqoZTvjgWsy66ksD78zPorwEt4Ubupt6Vt5yaoBNw2vdSFR8WdWkezahR",
  "key4": "2G6pT3AGc32YconY8TZZ8P2E83RN94gm7GXGrrESqBav1o5oVYwTo6H5DT9Zu3m7HBLf1XmQDqpY4HT9HcnxxGP9",
  "key5": "5dtF4maCUEZdsKZDnbHP6Ddt1cBfCqo1qA8thtuxzmvD5JMbQ7h4cgQH8UBgeErKwshiQPxezsdPV4XVZyw6cSD7",
  "key6": "5eN6JqwW9m357GwM9VUrxvQePgCJS7umMDPVTSYhi5MqZUfLE6AdaG6ME6tHicNDoyMFvngGtFEfMF2ARz8hr6cv",
  "key7": "4BUZGLq72yarn5fAYaaFF4Dn4jQzRr8h8QUywXDVEGo1esZ8cg3vW3WoEBhxRHmAtJAvGoNZv8qLEUJ5TKJaPBrg",
  "key8": "5jhZRbSHScYR9aeUqjjRKawiaP75Jt3opsknBvaRqyd4bKDPCzLba9vBwNtBM6FKfCm1pxKpNVkAnYhrTtPW42ic",
  "key9": "5jBCZsmXYSB6Zq8dD3EhSRXjQJ7Xu2gqC2AeyXZ52Vhifh8xtDYKJdE2jZ2WiD9b41q2VJc2vW9iqBzZb3N1ZPAr",
  "key10": "237qefX7KyG96XXgEfuaktCHKaW3Bv4Gdxxi3NTEfeLY5Giqgt5cevFhg83EiVNqvGFKrN3eRbWdEPMUZMnPXm5g",
  "key11": "5A5X9BqgiKXKaM7sz26Vtn69TyPit12ribito4eSqgTdqBpHQPAa8YWPsQvA6yaf1JLSAMaxnL5xVnc7RritJw9m",
  "key12": "2Z4Yu1xiqFdBBnScKMXpeZT352pZyZUNzv3daXHBzpEAX4s9hGDXBHmdmE3aM953cvYNUv219Gmn53nHveR2zKRH",
  "key13": "5avTd72tZ1wLmcY7VBWmHVKvUHgDb42vXdtbsd27DFYZE5ra7Kiy1z4xkGTiPYDme66W851M37HW8cuEYWuX7hKx",
  "key14": "57jAXmEibHEdQpMPQLpzm2XBfCfFgxP6f1DH34azvQ33Br5xjCeZTYykLJmn2h6mSWccGCabKwpTEGVKwQqz7Tkk",
  "key15": "2Zmij4XHVj9o9JTMX21mxat6Pgf5BetjXCH5sKtnhD9LVjtBTZQm6QWMEBZFzFQaTk9ou3jjX2ubuqLCSo2rAnGy",
  "key16": "22Z1eASeDSFgw6s7A91RvfbkjfdRdCncjVUV4iNB2bDmtvPNPBfiPmmTwxupXFb2zoSfeWCuNG7ubW9noQFrFpUQ",
  "key17": "zkrkpYmYjMMb9vCro3phKhogTBsFWrKjPs2Hax6uoTuSVXearEsRicVc2g8wauZMqMKANpXazjr1BD9oCKqxHXo",
  "key18": "3P7ZRS3c9RgbC4Jh9b3nEW5fwNbH6g3aB4Wx6C9cTnyybfa3S6RwZMZ316ZfrcBrWMNyBaCTM4YxiBXZ8qA4LGf2",
  "key19": "5F4d1seWdZv1rzz3cyy6bqX9mSxzftmJ8BqUaaJDQTyEzc4B5tprg55zfnkD79ZphQxdzgCHWZhJBDCehNfoCMKs",
  "key20": "2ncSqrtsv9CkgeavasVPsdL46radHk34XNkTryn3pqttdJWZHDXGw8heehBFgXDijKd8aXnfWyuFYjkeKU2xz9NS",
  "key21": "QMVdaiiCrEHeRmLQMvKsJBUVkLBfS1uKjLmLCMjoFqt8885fMGUN4zvnVYtbqaBGwGrt1oLtT2SNTZjannZzgzK",
  "key22": "3YGkfuTR97pLG7EB9jUhSNnwWw1iC8dJA8ezqPEyT26s2SqhnUA46UYuhzq24NjZ2DgZ6QueDzdkZKFLaME2adpP",
  "key23": "CdmzX8wZyRGLzfJQ5athzyrzkdS9XrKhqWxSdf3k8E95LYNQQykBSdEM9mFJeNnJb6LSitcFoUcdByVoFs17t4K",
  "key24": "4Aok3uWJqFsmAmJ9YWSEzhTQvVemmbRKPzr5JTpvbjfAsq3nxL7u2GH86VFCwzGWr933YQawuHhUxAyRgoHmkiZa",
  "key25": "GpbV7RKBttWcTxfeop8K7xYgMjZ9jB4z1cXM2py4rbHipHxEgG4xLffCzH4EpJLLxt6cMRkcQC6Ezd3qrmPBeo2",
  "key26": "qYV4HXzSdzZNr7V9eAuoaVshuF1vtgU8wYW7J7BLyzFzASYxdVojqQSSQ3635VhE5PaJmLhtbADYWo4mvcre6jE",
  "key27": "4pXLREo9X3n1mAvQkzZKi7fXxMzr5mzCrkbBZpuS6kAdGKiNeU4X2eZw88zm7CgHrLar6fUw78nHbP1G4bRqbP7A"
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
