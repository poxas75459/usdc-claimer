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
    "2tnyL4ArXJh2HxMmAPxeGm1Mc2wkpJMdupDvmomgajKV5qHTnyfXG3UdUCRXQgSfUC65KL2cCScM73JBtAdP9fKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cvkc3gA81UDSg9jjGs4Gqz8nBJcWeA13n4GLZBrKCZUy73djdL1FgAv8K72nXgF8hKkMz5fSenBrkZw1Eqga2Qw",
  "key1": "Az8xEKbLX4fJxFvUvMerKSgBNoWuEZYum8eLDMuKC3gaMvUz5RxJmJuMDHABTH8TdUsCeHEZHZySJDqz5cCLPc1",
  "key2": "nmmQgLjAGt2XvBNvPHCijWKh7PPPjTC7vcRhbmyPE7A8U1QnxkRa4QuhgywMFmerPGruJU19GZfG4vodoX6p7W6",
  "key3": "2cyhKQ2MKc63VDdomXtbsyQX15fZKYrY6pMTqBxpnTG4TpymshjzJYoDnGW89n59UoF5E23YQfiKqcjyAEzGUNBy",
  "key4": "2rgR8GmYDygmMxuos9uytMfKKHUFx5nJEQ7eKQe2AP5E5LvLhNoWpJvmkU8QPD9FxosDxeEyFiPkeYuet2gMkAPc",
  "key5": "34rJmwtQWvZW8mcHAJsLFbY7F93hN6KX3QBFYPMARpLUq7o5CUVLi4a1HNvXKB6fKyojSUWwAdepbZ7gNtNnJb8U",
  "key6": "57GLgmzpsa5H9gk5mRgjHbg4SJedEo5AunLxAeiKZDnSsCPAycXPZ8zjbjr2djxP8iYg9dMyKWVYVtFr8rUHUb4J",
  "key7": "5BAaSzThwnwP7Nmmf7GTftwnFbKq5d2Mhd2SE3kZtf8cwHhWUnCh4nxpiMW9JzXvpjWnKMf2M7HZT1wGqfdEgDEX",
  "key8": "2TQdkbMFRWHdfuvMQHuAZKjGmkhGVrDom1bSTJW3AzVEDKeM6znSbkUokiTjqaCUHX355jJPWXJn6sLViSoRTykw",
  "key9": "4Xa4mpiq7uduuAz8PexSsrbqTGmmFzoLWXPppDJjqZ8YxRe3NGR37k2FWuLLsfnh6zxxJBNV8GBE9FtWkavD8VAW",
  "key10": "5sH5A9p7M8wNZT8c3vsPTXeLRVRSLCxzTC5tuDVB9dkaqitpXkTMHapy8FN72uLSDCzJRaHugGVFSKrxuNV356bu",
  "key11": "3wqLWePkV2LXwE6vo9v5AicryegRtkx1HQpg4WoNRXK3XSR188FxFkWQwT4HMEBvNc6HN77w1yHFDrELFmjtajDN",
  "key12": "5n6Bxsd7kh4wk4VgtCGrqXHQf724MGEaTZx6x2FET5DkrE6oXhRYoibb7PywNrvusRLeAbmWFBLhPt7TvN6N1F65",
  "key13": "nY2Q88bifrAv3wtH8MuMuRaw5Gc3UrrSec4Q9ca5KwagNqzbVBau3iEaFdVT5FEaYqijFjAWyRkiTKUqNj2qfQN",
  "key14": "25z9eiVpYqkgnr56HGJtGAYfJBeUDwA9PDQuTi5KEy9U8iMi5TkcrqhpkrFdY9ahirZFyonp2c4UMNk5Ps5rxTtW",
  "key15": "57FeQReuhpRyHZfKmAdbExe2mwSVpxPPss3oywYHQscWiXbXcokWsNkrsRNtRsUYTg4SXpMkGMv9xjXcz5gffscF",
  "key16": "LEoCzsrTxZFxvGwzAXcuFyw5nyBDmbKWWiT2vxXhVMS8kv89edwzeDQNxR9fKZ2Hzqfd5mqboY7YAznRbw2V23W",
  "key17": "27yX788qvquzDLvhqaMzPMmVXkh37tqfGHhcRYKU99eUTCoJmspnqTNyWS12VV2m4nDuBHNaTQWwU4NbS8xvHHkk",
  "key18": "5cXn5F3rYr3xAPDHkFb5qfiQqj51zc6CgZjeNtBiEui6iPquasiQSqB7FHZzx27rFdYBBRpyjWWv6CtKPiokH1YA",
  "key19": "3i7bJ6sXoiLzBiYFG7mNxeMkRM4jSfhH72R4mBNjqB4NNUWugFAGxdGnC83m6XZAzHZi82fUZYJM8mnW1ZBTRpgk",
  "key20": "5FT2ma9cTSPjfYtcWCKGKUdgGCd3pPkA48Hr8XsvY4vTEsmubFMFrmfcAwVaKvrN66RnEa3yMNtNs7JqNyzHTqtk",
  "key21": "3MPuPo5ZHbygGdCALXkrDAUztHRsPnXu6DT6TCwMy6TfW1XhCEss2BJYXp3KbHCHBDsbaqXK3wyQEvaChEeY2Nh4",
  "key22": "57jTc36DDn8CDsJdY3WhfdiMYZof7QdZhHk7YATE6s18tQJmJ8nhXQ7SseYjeMUqUq3dvooXSXm14T1yjMRXfxRx",
  "key23": "5f7DfYxBFEpf3gutiNiAUtecmLJe3iRe1E8tuoUg3McCUrQBZM9GHDRyhA4GrZEkx4FeE36UcihhoWemQ1QjW4Et",
  "key24": "5tdm46PdRv8HEb8ZNgDFYqPMrtVGDBQLG6XP6k16aacPDaogKDsWJxggxqiQw9fV1Nwjn2ZnVpwmYRAVyNWpCU5P",
  "key25": "4PmBfBhnQoKAKcvawyjyhFV3W5cUTfQnXd7FDyHQ4HPEZsrkstLKEoc9h5PskUGFfDSEFvFzYx4LSRS2WMPsRf2T",
  "key26": "4oAEfu4zMnN1uq6B1M6N6di7qa6AdnHpbwjW8ifMVjvfD6NwMxQv8u97dvNp5fcNq3vsR6nMpDWspdpqfhWmS5iJ",
  "key27": "41nFBaHaRuWZ8nTXErB7vhKSQVWhEkwdF5FkKRDvBzkXfNbC91CmCawfyT3jPFTFeR8kgDCgxnqEcUjtZMgMtb1j",
  "key28": "rYxrkJ3ZaZAdbuWWzLJ8G4WK7DVSkccHBnyS9Ajh27CYTJ83BQqXnhBQPyrKQwWoG8GqdZgpnB4sYJhWbF7LGrH",
  "key29": "331BBQFDgEaxNkNi8rkzzzQYHK8DPhnD2ggTng1L25n7WJ3yziof9735ThRGUo4p3hiY2FjJ2MN9gyfUgHg6JyDF",
  "key30": "5xP3RrSXgjkkRekDHQXZoLetrBTAiurJz3AjGycDCX4AH4QtEUKF14Nd7M2bd9KkqgJpc3VKURxC4jpzTJ4Y38Km",
  "key31": "3ATKt5pEgZtqHqDpq9N5vVXitjjoP8xdsxfLQrfRRposiE67BARyLqLDbh4oTtScEg2xTNMMbEs9kVdEPNoLSjY4"
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
