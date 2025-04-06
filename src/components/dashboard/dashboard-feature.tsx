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
    "4Q8QiJSiGJnt8Z5VVAFY3ypPjP75hjhWVoW7VAaJcWJkBxTXYVcd1jHhXeeRt6qLRrR5h1q7td1gT4pFv4avM817"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vHYcZzMPvPmdB7QtopxPthjYsg5WfGaV2zCKHzyKSGczEb6poofqUwJA1TfvJX7PPxNCMKKRvkks3RkBBpwYrEQ",
  "key1": "3KmPcEeQbLNTEajbgcGjErM6CU6Q1z5HqmWbRwZ67SstVbgbwZLvKaoWTGd7YdXi6pKutLNrFju9nsn6z8wGR43P",
  "key2": "5xfW7wEf3Wt6hgFZnsyysGRwx3ubmfA2b8B37LZs1YtSd4daVjF9dNm1Wzms1UgDjo8p8TfB3gWTcY9FHmrydJC7",
  "key3": "3umwskkiHaH7Ug4hPVP9DJ4goaSCdmYksoyDUQed1g1iE4mc3CQ7tXRuiazyLXJB3qZuM7p5uSbrgmNgwUPVrPYF",
  "key4": "2oHLrxFoXp273zt3TNFtECUhNLR3rXZJnzsMYefQYyEJktgKPQ1bubDwLreMB4tMUeeqQNyjfeLkqcaUHeLi6cnu",
  "key5": "4HH3WtMZRWCEnj3rRZwgqJG4NcrzaBx8cP4tD1zBAt11oZftdiayQ28daGU64o6J6cnAB8HNjM8AbHhjHhdfhRw2",
  "key6": "4tDhu818niSyCcrm9R87wWHeBaL1xqTGXdfuaDHN4czUAeXfxhuUqwkxFf82YuKqjkvGUx7JJ5ya8Nq9ZCtf4iSh",
  "key7": "5MjaAQGNCFGQjbjs78dzsVaDiEyxshmhjbWzPSkva1JSPjtDjQFuM7DTdoi6vWgu7FkW4c5XtBAJhXqi5qiqfvRt",
  "key8": "5mpn9Pk9ZpUc2PEgVBZBjYgLgeZsFMT3UDCHLm6wseqVbaMH6BE2JTAKbKJnyK3zCyiViqjbwK4qXQuB4eLYxQMh",
  "key9": "4FJyhZAKn97ANBYfRYYtXQRK1VoGzjdvNkmMp5oTkSTbN4kk1URzaxvp76XTGEBHAgro7TpiDsd5jh6geCe4sSCN",
  "key10": "3dFxvE12JJ6o7PXNfy5wNYoLYwVtRNmYeFsxrdQKFg1okMkKF9wSND7SUau41deaEg55kjfL3deRKWitVjhs6PKZ",
  "key11": "47VTde3QK8h14VdqtcoDTW7TgDp86FZdmKGuuTLawttq1qcLkPfXQXURj145RhvEBQFLgQCs756LrAqF8gXEyjpQ",
  "key12": "4StAyQRBqco8c5zCphGocMTRUptyrotvtFmEdXSuwxbhzpkVeiExjwqurgVvzFz84meeGoS7wn2NGhRM9dnGdiZZ",
  "key13": "2zKQwh89H6MGEea2pkbjyANbR5BpB3X5vvfqX1iBxHcJLq8YKbzeZJUUnbfbjUykXrUR7jzbnxBUGQDCoUUBieCT",
  "key14": "3LpooMvB82aGKmbchRqxyemj3oaLwjrMnD3PF6rvuU39L17fTNgAuc9AyYctLxsBaWJx2cM7XcrWztSZWXuujzq3",
  "key15": "2TXxw6cFvoCJLoXyTP6MXqP1L6XecKpfrm9GTDZkwvTKVxLYojbWc5AHoTXEVKZiUd8kpwrvuMq1BngffvTRUamt",
  "key16": "5QNmFdVBEEK8amCijNmHoLSVy6ADz9kNh45MqudxzNnwUXzh6DyDdVEaGvFkFcbmrztk9DYAd4oYT4tYt9FiXhMJ",
  "key17": "em3hVbbkGtMYqJonycW7sUGyYyF4Jshf6RV5rdkNqtTWux1sLKZXk2LgJrxgHVzJStyn6rE2c1SVEjdV6GewKMM",
  "key18": "2t5vK2A2fLNXiYake41c6H7McRsgt3VhpbQbJ7dguPEK7HXDyFxu3eC7dq4JXVi5Zn2FKaawnCeNXJRb7p55NUPP",
  "key19": "4eah7z2wy8DgpcgjUpwwL8nZyeiF6VfnK5UTi4hcQgkFSSwV2HPkL4kxq5dkxcMxhC7ncw7UMsYzi4EMLvNMoaAw",
  "key20": "3foRHkgksP6k7tvzNDPfCqXpQEHkV8fziHXJoEYWdnq5NvuYuTErDjWLbSSZCK7b9ckWhaXgrZVEz8WvkUsUyws1",
  "key21": "xaitxTTouQhnahM6bvcwFs5JcUKuxx7avRiibxH2zLKcD8tpjLUQHFEpxDP9etzuNMhjf6HKk984f7Ss4cxLe2e",
  "key22": "3gQZWx4AVR9eq5DXAEQNQY7EDhgu5TUVmJmYnMXgPToW9UpNJjHEyqV6kVQ9GpSz6DfDDo2EvyLsPPUtFcgfoaN6",
  "key23": "4t4LqpUQT8pebVTBKuNS9z8DCGF43851C8jxu8kKLPbLf5xiZtNKYipzWJuW1suTqjDQTdnPsuLJPKbZRjTe8w1f",
  "key24": "3KHkZQnsAa31ASU4rQnKMY8uQ5MG6upDkQh4oFCFmF8hVeXpg9BKhjx2hiy7hsyghBdrSeKTe5BQAxogjpmca2nM",
  "key25": "3eD1B3uwJT3BWDGvxme3PLvG2XzVxfHGYGyzNjAgWBvtJiaSBwTKZjpVSqQi2fMsknZvXahfy6vkjm3APh5GwuPH",
  "key26": "5FMDZWn25DQ29atTGnDXjMacfw7yAJctfTExpe49rNf4M7PCtzHp28CbMBZjFRNS9cRNRiEVDrurDoRdp2mbbV2u",
  "key27": "5gq5K34kHr3QKCHMphkqJ5hsDn7AE3qLdxMWfdgXVd5ZQBE3y3VxZZXXDpoGj3cp85Poh1kQWFeddjdzzhQad3Lc",
  "key28": "3m1KEfCWiZvqA3p6xwh1XiVWKAivmtWtBrVgKVJKn4uSSGNk1eW5JbghdxxUxqPGxJhgYgghWMsiS7D25BBC3qKW",
  "key29": "4v6p8BEsNF7WCWKcwFVA8RxTsimDo8QPHHEmcRhW7xRNDCGWLCJx8ixtm72yL5G3jTEW41Y8jay8pqM1T9YnwPGb",
  "key30": "4762mWGHwLbLPG8FsM9n7YRBKRGGVMioHEHkUszePohZxD7Kb8fXN8ftXwU4UpLUeZPcEcj1ySDGhbeJwxydnHgT",
  "key31": "5JUsA76Dp6uSvMHGnbirDSK8W48fWsvD5b95amHmzvjTfavviwn4ADpzcQVUkjQM17DiutLh5qMnoPsDoTKMBUjw",
  "key32": "3RVnhfkPFgtPJSHLsHFsjrsD4jdsri2WrUCosTqeGYidEzHHqewQUZzuMnTPBozyhxMcqre3xTbTiUKnXCXaHQNb",
  "key33": "3rWbdxMHUjPDrdGfdQfKKRJ8gDicQKUABCfJcyCLMb7AYwqVcY99PutAPa4KN439hWJFthb9nkW3efHhBN8o2vN2",
  "key34": "61H8WcbZm4Wn6XiPMQo6r1pkrqqhj9TwhKNFgtpDfCknLU8NprkbHmGXturgQyUUcrLMJbpsf5EEt7gGgctxkKcN",
  "key35": "2ko4JbRFkkfbrxHYgPmPKQaZmkwj3uhkvcyb935ufkt5HPcyLSxNj2G3WaryADMxPb4oZjwizcby2bcKbrmd32ha",
  "key36": "5uQ5sAnsGGKtbLbivGKEckQmsSmhjwqUfRSdtsgo4Ho4JfSt7apR7w4yVy9vE3RLapjyKjh9wmCRG6wyrSyawcfn",
  "key37": "2TPJpQm2FJaNdznW3Xz76cUA7YPka4tNRdk2YN9Sd2HrRsZCEE5TXvhwuytdHQFtk5uUTB4LmBLsm7FBBvtAZXbo",
  "key38": "2kF4juDDKr5zm4YYQppHcvb1X7e3Lo5fbXvv2k7xM1HqpCbeK1gcHtxADTPsJaepAJpzoDNNMkBGMR61zFHFobut",
  "key39": "66caViAMZUeVeP2BNFGRg1sJUfchz8BbeQEGz3SY5T5pFLRT8gGm4tVdTZMUXEBsN9AfX7hGaMQTU2itmYN65x11",
  "key40": "274wb56JEA5cTratQj8XtEoLeicSUjWfsBa3xtJ2hGQ7vAh6iERrgaFKmZkSX3oRRnxVrUZBtbKdjRMLvBhJPbML",
  "key41": "2XBFAGMNXFe55J2sDDqBBiQxKXSCeTFF7MC36mkMXe3zM7YvqmXC1kfNgum8zVKN6Vcr87DUi3m7JbWksW5Ufekg",
  "key42": "5ScL8k8KpzhbHjVqTZ3UjADfX7uytu12TrREyJxf83zDTSvZKGQt4XS4Pagy54omvvAaLrEiFooiX3CoFWQ3pHeA",
  "key43": "2eJ6LyjYTLZDQ6u6vx1P5Lpo4M2DGyLQZaS3x2GpyQEzpbPuJf4A9xPhpDudwkrymWhN55KM7VACyqdxG7zYi8vB",
  "key44": "3gEd89ggD7cQUcNZETPZ63w4eaZ5qJfS38CukUEejk7GS9MTkjXxcHRLfPavkchHvydJZEbprJj6bny1P7KHTP3B",
  "key45": "2tS96C2zbciNe8CzaQDe39AgUZRVA7asAcYvCyNf2bW1hzbCKSvrAgXxjkSuAz7MhKcbXbqfYbKBeDdc4fZXRyB",
  "key46": "2uzEpgiz5Q8hnJMiCxvwfeuX7NCkjWyzXgcmTvfxVwVLrLN6ohE4b9N9A91ytehw6TC1eqjwJqieeBtxqCbWKJwR",
  "key47": "w49R68k1vjFv7MQyCsoeMUUGafMyeMw1wFMbdiKmLnFo2PiWFf2JhqxzcUBUT2fSfP9n1qCXH1HxuGEEyt7hKDi"
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
