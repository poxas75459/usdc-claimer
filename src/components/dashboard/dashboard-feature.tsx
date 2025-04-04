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
    "5xSDCgLkKkpN6xaUteKhkUpSJoXnHBiAnJMVRMhTTB6ZjA6CfGb3A3ksG3UyQMzGG8NFSH9xKNYxJom25W414bK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSXQrjm1f5P52Dy6jC65qUM7jKi31gR9fb9b9GTSJhdiBxYEMDKiKeqrh3Y8C9K4zUe8qoKRwWosS9bsUBt1bTK",
  "key1": "h1cGhcKWYeMCcZJuEkmXKM5nrdgCocrhveSELF9nWyrzoY2C3Uuizdo3BupbLBkQnrWTgUonWBJonpVfeYy2oRP",
  "key2": "2fPH2dqoNMuvjvwKpVfyUY8bz2hqCQrs3qJmvdfR7KvnaU5ruZ774YP6RKR2MqmYbazCDnHBZKEJhZdptxmC1AJj",
  "key3": "3ZRwWbeY4bVW1sGoJmUr1cE84QmyJtk7x94N1gzamegixHU38HTaYaY9qcfBksSWKP5h2rH8KRvkPM9SZvRAiiUW",
  "key4": "5UmYiAQXbeS8vHCeytSKvDVjZwKXv8y2tJ9wDVdfCb4ZNa6FUojibGzjxUGwJw119wRVL2UAz9kPVwDtjBpW2SnW",
  "key5": "2xtWuk2LvtT4R3RKk7ZJ1Ne5ZteMyKRZifjeJX31uDvnH2118XACKBWBd3jqX4ZAeJFx3YR4JRamHATLEGYkHavF",
  "key6": "47pD6AXhNnLWLZmqZYfEJysmh7QmguPVYKNAuDPajbsrtVhTDMoQXa35Q8RdECHmLX7iRg5znspti8D7JTfU5BPc",
  "key7": "5MzhDdJpjqDude88BA6og9ZtYQuH2Ka5YbTLByEHTVoBNjU3DDHDCHNHCSJUdd3e7aJizTqkkoikfpxnADSJuWtt",
  "key8": "5X4oTaMr34grKzSrGrswfqL2rXH63KcP5kwUwAz1W7PPUozMrmqeXvmadXY7TJappjeqfQFxeXKNpWc6PFQpME9E",
  "key9": "3HtVeyFn4iS5VYYjKdyjXS6LRTW6jadBYUUpCbEHUzDkiQ9UpsrwJfiLbkxxatLyuP58dzpD29MfADCGDMfpEEX7",
  "key10": "5K2BL6ZHhu1y1utjKN8GnXGveedhBemUr89tsntqK8qSfFWgHhztoPGai9y5UKtZDQ84K4igwtt8uRZWCVHfn49H",
  "key11": "2HUSLFjmEURBQFLDWgoErvc9KH1zrtDX9zqjzXu8svYiJH3HjVqL7xTpPWGwDvyhHKMwJ8bn9xcboVaActnsuDXm",
  "key12": "4QEiS5csWg2XoM1yuF2Qob7ztjExXR9FECTwZgLqtBvwtJ3W3on6uRjWewDeZKBaoLVMcQZeehk86Qihq3GwmwMR",
  "key13": "2FDnF1W3XxSbzHTipMxQJHwfUEUtZhSUzosAaLXRdjubfyyKnor7SjfymqaQ2jqgsX7PFoFXjqtfPZFjacoM4tKy",
  "key14": "2iY341X5N7utVgTkuJLnQhopeLPiMzKz1BkcGXnG9HjTw6UU2pKEusEoYsXMfngFw3ZWS5PoBj4YZ9aQpNPpUtNn",
  "key15": "3Wnmkp3Vy9UFgqDqvC9rZ5rdGLCYXgvhQkeyJXXsvkDJzmECcgiz8itQFV7hztQKMhww8PmTztiocXFC65S1Vj5C",
  "key16": "5PsVxHwR8CQRX8U4uV19sHRhdhMJy7pLhWv7fBH5mrhwsKqKMFbf9XjTboWdteDpbDJsNzTe6bQqw8GWaFd4uz99",
  "key17": "2roNzVCMEhyQwnczXY3C9TDdhjYheHjvDWjyhEiQUsMDQNcuu8JrrwUijzhxpk7YarDnJK9PdWZzXzZ2cvznRkQf",
  "key18": "4UX25rkNcWPmHQebHaxh78NRgzps5G77UpGvGYj5yfTdKESyrwDwRkqy9K9ecHwsfRq5ffJdvyu4im9Lf4FjeQM4",
  "key19": "3WMvvQV5uz68tF4mS8ySgp81syBMpwAX1JFY4zetZ4cpSdwktGGEAu6yQ7RRwTnFNnLgW9WxzxhdjQjN22Ze9WYH",
  "key20": "45y9TuhMoWcoE8tQuVfyGjnYEFDeH1KvJi8Eq1BEZ3nm44ozDVrJDvrPYQRRdMTyyyEDud2HbN9FcWsfpreJG5zu",
  "key21": "3Gb5ZQ6KUNFjCRdpaiWfXMywpM3HDWZFGHCCYZMuL7Pqybe8DaV96MXAc97Hpe4MbJsg1xDLvoe9FiRyJEZdtbKg",
  "key22": "24N1AKLEhWXJc9CmJE5So7XmM32J12pHf7iF26wczL9wuXEegLUbEea4bUyEkgfvwr6ekiTfW3z5EpJ2khNSeasD",
  "key23": "448AzYrZqrkJtBV9CvP2iwJjhkHtwrYzq1kQHAPWvy3yjRAdoCUmW3TCemRATtENq7YBEHXGr8iyDG7fffGaT7Rc",
  "key24": "3SkFj6quDYe13QMrijAqZqgQBndWGTpxXCtAiRdSVUvMw2QByAEcnDwTTj4LmoQdGL73ZPwAnz4oMGAkuNL1kgHq",
  "key25": "3EtC4Y4qJ8Q4QycvmLLu2s616MzRFQc4nVuLwv4DB7FwjFBMLNNXJtTQwfPJrbMywEzwBgRPyv64S2mRk4X8WhRY"
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
