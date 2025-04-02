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
    "28KoqShVsFWpfKN9jcVPTFxMGZh1QjB6VsqFNiUag8nA6H42ihPg4rWWhpueEsjLy3yEtX7ychCbxPE2oZHx3iZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cffKGEiPYUYRSZhRBjgeCEM9coSzNaegzouZBsKskb1EY6wvvb3nB3kv6PztkvhfAWQeGn8sJjjC7bsnoc9uomH",
  "key1": "5JGQzSVp5MMR2ZRvkzKATxr7QazxqaKjSU4MhbrrGFNkWFcWPGfrUK7Dh9J2LqTqgBphnhh9gPYySYmUta5WivAz",
  "key2": "5Ki6yi9KMDMyHd3K579SY3rRiwKu9hWMnFECsaLDwQeRzBvPTPQ5tmAbXTQBUqqTwec6K1u1k38Vz4iJgPSbzUYB",
  "key3": "MjP3RpTG3qrs5QDz81hVw6UY9jpMw7auUEXhb4DWZhDSQYh6FTcSsemrFPEzs9yn7VBSG3V1WsAxnwfDLKBsvAq",
  "key4": "61b9spGtVoumF3uuTLbSTG1Z9bRGSDHiwdpBD7Y9rwUDvBApSkFTP9VfzWTNFUxCjBFYdBBD3wewjM7118fpWXiL",
  "key5": "5QPmBANU8mXSQUWQP6d1LjEfoD78BbzoDb2qRzaCstM2pZ2xELokNpXs7mSHVJDJ94VqQ59xJQL5J9sV4pdFtfzk",
  "key6": "Ehp8NLC5vxGJLLvEkCpRDaeCttSyutSBG4nVUPus4xt9r3qpEVjp7ELQYhLcG8gDRWT9xBTp7YjUpgh9q4MTiec",
  "key7": "3WndDYJBsfSxrrZqpUPKRkudYihJdUjjLkeMrmjkKMLHKBDQtJUx77iDuSp5dXixaA9EeVbijaC8QKWX6GJGNZGG",
  "key8": "5n4jotUtgmM5QtPQYTXU3RAoJtMSP3yz3Xui6jiF8K2ggvYYbEE2BzzphdUnaQmKFUo7PURJqD3CVB7k1nG5BFQ3",
  "key9": "5vknKXUtU56R8j9ZdW594oF5DyudSsHvacTAut5DtbEY8SgWY9dNYa2wZsfJjnQSZe7zkP3ZgHHpxjZU86F9zoAP",
  "key10": "57Scu1TWvxdPkWN5uBGE7PGeMUKLvwUsquafxra4zS8vLBtgjCF7vnuhjDXPT7bDvxuKXEVoVbjRYksZNeNhYidQ",
  "key11": "2v1FRxw4FveDPEBScMijBCDirYcJoAVJVrtTvHBXa9WgQWAkPnN8S6JSnzXjE8jNQQfHVrAdqqu186kE5AYVYbXN",
  "key12": "5NSWaHa4Pae99h1GAggowXAr781yWoiVKtwr8KNGdegJXGBfWrgQq47bFtqa6i6cYPxN9hK8odroFB8LyT1h4Qay",
  "key13": "dPatHVMmYbto13tJVfZJn8ecGfDVoAUTftW4oviNQiwVEnhT3PLAFyiiKU5tvXAePaFcxkxdc4AtfP7qWrE9ojQ",
  "key14": "jrGnGCQ2t9NmzxHK2X2Q49Kh3N4NHdCNQ2NkfNEiapR6snbDTbakVDWmY6GavPCwDZ8ynMuCS1gaznMapjdtnq3",
  "key15": "2gi8uVJdCZdyh9uDj2BV8gCm3ANdXZ84C6ZuFZ5sEcb1PXXSNdUXaEgDWMAzYPhweoU5HZ1AS3TPHLVehgBw9oAx",
  "key16": "3uM9ZgWvTYPBi5wGLCRtsyWSUCWJdeXRkfaizchtMKZvDQQGmMZcEA1nU6oUgYBDcrQL1HQqqcY6beD6YgedA3dn",
  "key17": "5gkr6B9tpuWvckgxGKPQNnDDNvSbu2JRdhWHvWexCDXQLptRAkS5U2pSeytadXAP2vqMnW2rejpgba71jxDiF7pk",
  "key18": "2afPREZs7wZqqV7GAsKFMN1s9LteLn27MFSJC5NNtkQbYMcQbnfdThzuJ8xFX1oXVMbZSaSQfA2nsD8J2R41iZtM",
  "key19": "3w1wxkAwNRA61feVMrtJvMgkZhb9FpQRzfo2oLzZ8eu9UwrZdmjXdHRuKmwuEmHHi8uzEK5q4ZzW8iAvaoEyFWis",
  "key20": "3x9v7rxxF37oJs43c4hguyLy8sL8tAdoFxTPkubZLJMaN7xsUopswu1NygnHoLRUC33vCYaCNaNvXreryXtdeak9",
  "key21": "4VmKEUaeKZk4zYtEvo7MDLoMsY8bxkVy7ph9wXzMUDhJ2kF8mFi762fWUrQwkNsYqpetQbdXBcsPxvD52EY87iHY",
  "key22": "iwQdcdU9eYaGQTLtE3NLLvxkCU9kehdnMNSkwbdFFbbbmzECVMqR657a9Vy2hN6bciUTRWqePfXD2fnn1ujPQ1i",
  "key23": "2ob6BFEdbrHNN8FnoQVCVUNYVYJrKZyBGYNqSXjeK6SDhtTXU1XBvzpMGCq5Q53xb9mCzNRkenwaQ6WZKMu5Z1pL",
  "key24": "oL3yiaNrnce5ceCTKMeTW2tYBxAsgX8tNpm1kcEunBkU8jSpqWUTaHgS38Hn2Vxr4TypsMwzqjc3Gx5YbovYsu1",
  "key25": "3jiG3SivEHUJSfEfC8T1i2Yc83AvBvpMexGWUuK3MpJ93XdcCppDCY4a3bmaAg5SdVmr73V5EEe9rmFa7oqpXaN4",
  "key26": "3Ah1dNrWESinkczSdJQQ8LTFbuPrHyy2Zr33qS417PL4hgFFBWSVqWGNtpVF7TdYmrPE8WHbZPvsXqGk191NUvEh",
  "key27": "pq3cWF8Hi99N8s3TPpCwMj4nv9UWVqFmrSWYaM3gDsWDyz1zfisbLsf2CWg1HRinvAnAKKKLcHfLRDK721dFafm",
  "key28": "5h3Y53JyTERip5EiT1VUUo9mr3rC1hmNm2vQuneZpQh9QT4zRM2B2LBEJ4N5Cct3jw7CcqvFCJwZE9gW3HjkFg29",
  "key29": "2pvoEZVUdqQk4T9Dv5gP26VMHrGh2Vp8bC2WfWBK6UmFHHCcYtqsYaUpXcBefVPQpYyneXRhJPEWQfVMhLZPfjXt",
  "key30": "59Y1vrqs1XcGDjzDCZhVyw1jQYa1mb7jziuR6pFmmSYotdeCwJ31kLUCZnuCp4LPKhbz7Ygj32YmffwZNin8f5gT",
  "key31": "2whitDYJ9TPk8ATpShDV7B6MzArjhA638rx7BhpmzKEBvMw2ASTF5mtt1vH1a5pghG83Ki8vy7UgEfa8ND4g7Vp6",
  "key32": "88PqJJLUJ3ShYJiC3MozsnmhGyGFxgrDfewzV89ApRUAMn599LWNsLDq1UgYzSvZP1KvRN1v8mFPdnp6ebsyFKq",
  "key33": "5ADRUJJme5cJkz5BxL5X4yB88qNbEDnbTiWivVJSf9otVng89dALDcsMr8p1AmofB3XDKd9sL84y93q3SXnv3zB2"
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
