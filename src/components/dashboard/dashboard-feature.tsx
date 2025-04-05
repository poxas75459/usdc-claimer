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
    "YPtsqPZMigsnBzZGCsiVY3sjAsyK37dhBuiujdCufsXt6h1FQW6Uf9pNUy6ydpgAJ83Kw9XKY9fTp7NKpjXMMXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rt67gce2ujZNFhmUwicS2fX54DSfRW2ZPtt6vApoYo8mL6dFmedHWui5JaZ68iehNxUfMaFstCrrfRPACi6vHzA",
  "key1": "yAbypMoP4nZFhqc2WvTyXEXCs4SRjP9ByeUVbaJ94cwMi2rBZ8YBRv2uoSo6gBjoyLVwE2e4n3c4BZ5B1UqJTca",
  "key2": "5aReU9YweLWeErn42YmnWfvtWRBvDpJQCyDHDSsT5fLSe3yQZwzAymAhTF7Wyu8qCkb5k3fsm7myjA5Jcnsg2XRG",
  "key3": "2yM4Lg2FgtncBTa1Rd7JT3WrRE1TwgMw5Fv9JS9ZzpRpvCk6rjmKYzcBZbqBpw4FYhnh7G1vY6pTkMiMVrUv9LNU",
  "key4": "3QbXxUAvBJJj7H2WvckGeb2LexQ4p99thLo5tvJJsHXyERBVTZnzznvvFqzNqKcMHpxFqfv5y39cBfAcRnRhG1Rd",
  "key5": "4jd4iZGMqHVGPysUjmJoe7t4WiJRfwjrwLMdQgdcsjmankdhZQTCsU1mc4EbsWYNKbqGER4Q7dzQtaFfTPDR8K13",
  "key6": "3DHcyMhgind2YkF3nnSrTxBphmzDkxUX5Z9iX6xgwbZFX8WrhmzEjKhUK9yuSTpdGtEuFZuJwCy9BrBLa5w5BLdD",
  "key7": "4J1UP358pZRZekavXRjJ1QXJY3hMM5RNKQ5pEXkTwVvgwVom1AtVAEZKgMr9n7Yi3SFdps8jeTMR8qdgtYHeFR7B",
  "key8": "49q3LmbAPUpnMQ1rkjnnWifLSTWKTyrHTzbW8YMqdTAak3KJvNMEWfXwTrGuq8Rpvekvi94fJ7C9VJkqE9WG3J9P",
  "key9": "3eQdqRXBQ3gKz69q8AXZYQbcF7m2sjxwmjNC18tTT5tUMAtbHnjmTxzQ5zp4AeNBeb9zhWuTvZGikKgP7af4N5S",
  "key10": "5D512uhr5DzDrLP2bQHQfdDSZZwJccTWx43U4xQcqQZswm1StoeN9MB9Bp6ySypakxuTFzbB2TuuQvhhNKmBLpRV",
  "key11": "UYGrjCgFKJeTVFLG7jaaAuhSiEMcYANJr8fKH7dTNK4iUXDc4nLVUjyWmbcHWcU5gJLCJ8Pmasrb4RZ3UEfQGYh",
  "key12": "2eJz2QXmXsj3mxpBNRpiyFvKGVeRfcvpi3Reg9feKCAqZK5buYiYYxVTseKqwatce2aGXVJoe8DykwqbaUUxACig",
  "key13": "3Lc2qarSW9SfUjNUM4s6YooDk7xUS57RCKpm1kkroxHBWNXs5NwQS7RUWXYiKBMGsVyxDV1EwWGkhzJUHGSpCtea",
  "key14": "386EFUCh3q7uprnfCq9SthguaV4WoEnJXJ8VB3PhiQtMRofrCQuqYRPvo3t2HxNFgipY5g7Jd7UFj5fpVASM5k7W",
  "key15": "4Pm6DZ292NTW1YYZNjQjfREBtDsYGrpDMjWpDSEhVdbL4M6BdFHrb8tehMwdi8astDgF8bKeM2eWf4p2i7XfqabC",
  "key16": "4CTT6rHPjZBjjER8duBLS8enoPcBdvGEA36fEjSgwbntnBeZkYFah2nn8ngUgbNArqorgJEvjbsav7qz8Vekyq8q",
  "key17": "4EteGYUiW1ZGdNCRojqZ9g9EF66LgAQ1GZuYzpuZWJcKcahkpWc15nV5LpfAnkgzPrtugytKMHZkZFnRFhgd42Kb",
  "key18": "XSRmkiRituHcuZZpbkpTYmpvqwZosrTBHAs4FBamBbMYrSponMHSeHPUrT34s58XuQe2pdFS19M9g37EZ9rq86c",
  "key19": "5kjk4cB8Tw4qvnuDTbXwmm5iCwU4BENvgX84n3HJUq4kQuAHuDpEasCuaqmpY9m4pWAS37EGZwPpfRHkVbeQ9iQf",
  "key20": "VehjvmRKRcqUvzQKzFjasqiSUcqMKTE6FGCMu1BeciwJ5NsQjcd7RuR6VAvJdvb7CGvPAUnQXQ5NDsm5S2eWT4N",
  "key21": "355CL2XDqmFG1KTtojvNVRMdjQwdAc9bQbJrcg4A2Hv9p8ARhZxPbZpHPrXG1bQ3H5aaxhUjtNNo9qMMMEBrBRFq",
  "key22": "E1po2oXJ8uwE7CMBQ1zSChf2MVm7THrA2EUGQQGPHBPS3HL8kTygQvTx4Bgg3jikmf1HEFt1MHibazBLaechkE7",
  "key23": "3y8FtJ2afJG232nhAaUkZUpJyfCpnno5aShypLFNUfmCvq4HdGjkUT6sFNkrfR5mUzvwXuGhrF7CPXc3RDD6mDeg",
  "key24": "5XJ5o2GbbCb7zJmzd4Qi7xsjqkpPUwPx26MY6nLeyFqtRL7kg6hV1JMqpvRJpJnKZnmjCResnUicGnHZUqrNWYWh",
  "key25": "MK1gVxR6vMQqK3tk59HAi2qApb5jSjKjaD8Qpg3ZjtTvMDRrnw2H6ySFBGqThEYWtjaQNapuTMM7BHWhQhCq4vx",
  "key26": "5QwFGLsYFc4FnAQ7DS7ttDCgp8J6Lk9n8Zz6Gi4TJuz2ccxJT157k67HT9bX7MiximWPurVgphR15gzNstHGUKLj",
  "key27": "56AVEJFojpAVC5hr3zGu1MFnbP6c6FvK9CX4ftcGc5rYaCuWUdVM8XdGq1AGPxtHYoUWd47mo2iTgzCeZxg4zZ7f",
  "key28": "3BZu1Eq5eM1sQNvdKfg5xfGj8w16gkyUngC3wMP2muLSKRzzcLmsfTJjqcEoXuyjEJJJ9ywjgUd7eczpKWQxeEkZ",
  "key29": "2e85Z1sAWH9VPFA1pVBY4kKatN8SP4LgKrrQm2MDJbtVHvo4ujBAPg8XAKanewxdvcTQ41tkHhyHHuQcrG37DS2V",
  "key30": "CWSML5ASbSNk1yQupHnSP3SSposbzHxejAk6kmqaciQc8Y6ox1ZtSNv6EqYR7SVRwNd6JRBA74JPF2FFUGYiKH1",
  "key31": "t1ohLDFBxhiFk9vV1MA8spJE2M3SPxWKbLaNBoLv9NQte7kAtwsY3WwNHVbHcSdZkSVKCHVzKFN5x2hhUYvEtGx",
  "key32": "2mPP4GtxSBtz5hfrrbbbQEv27SR23iju9WcSi1ckxvNmXm7LWrRWXtcw5DTMbRTA5uavLhPFx8fWUSNN1Zpvb9sR",
  "key33": "5pc7HRFeVS5ChRU5BQVMqLccDNML29doJG3gViSaZnfEHZV3CbEVR1N7mMzPWMHGCkXb1gp25kEkTgFAZWVYw5n1",
  "key34": "5WF3kb8VtgUDF9wSkgaXvbG6fCHEe7JhwzLZCp3wtYLs4CwfFsBZng5GqbgLNQjGEkwcwHfq8SoVDkAZ2fQrvoM7",
  "key35": "3Yr9hhRKuroPi1YfSkXdpkf6tJJaexK7kfgEag1s9GsD46ihTLKv6Vigr1iNdUGtsZX5fdcVKnd4ANxbhPoW7rzk",
  "key36": "3PxAM4WM1R46DDxc3WRDymReQuWsmVNJcyj8WPEimQ2NmPDWt1AXW7Wgp3SK6YCevMT2gHNeizP82U2b13okCjdn",
  "key37": "2eyAuhfM11C96QcWSkKGK9CMnPA96pVypB5hYhcxiTkDdkBwTUVi4Nf3N4ufTkxQoX43RhbqtbCWdo6pUz32enBc",
  "key38": "2Kne7LDExyLctgSce8GE2nCVhgSV1ytmjXVLb34ZVoptdgrwb9PTZSt1gLMy9xVCRHNawJ8T3GwQUqhy66SLwzqy",
  "key39": "38yGMjWe8VVmKgQJdZ7KPiscC5EYbw32JhnZ5hpKk6ickVdWhZrKGx8dQixv2oWTd4Zpqo9FXvtT6hHjdNKzAo8n",
  "key40": "5J1LUCx1oHkGoV5fHRofbwFjD8aKnExcxaTeoNY3yDKUMB4DSpD8eE46as1g12CbXZoVe4whNcqtyKhWQmXGn7eK",
  "key41": "3EBuNjFCkPtcD93ch2bnuRCxf77FXhsA51a3U9bAfkKPdtkessoTmUGr9R4Ls1JjrheK4dZJwC4Kkm53KeCf3qJf",
  "key42": "XoizREQFurHC2tAgZ5BGqvDs3zoa6wMcydfSkoaQcGjnPdFSvNAqa2QyoXaTAGoUdxQNehVWGqRUqam9hAm39fK"
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
