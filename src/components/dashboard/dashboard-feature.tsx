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
    "4bJuuEtvi31tfTdE238Zp9WYyY8AzyL1Kx8h6TwxEAcj7MuKe98AuY9bfyh1WusEN1z59Wjz4qyop3ZJzfarfFYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666quHcnL3xsKzEWq5PjdJb3YvwMC8hxnyjyapfxksCpJm4vUsLtrxoQsFMvtAk8Mf5B1ep1QM7hcjezPS1NAgHt",
  "key1": "2gupUAVbpwVFqbrYnXjk5MVxP6b6SFh97bW5zKDwoQWNTHPZMMJ29QCJdR5m6Z6RDLFQzizDuxeo7XSpy4ZMsjsN",
  "key2": "wAU86NH2GTVBfe3jgiX58zgN2t5ViV4BFd8hXnjQwp9dsS8RP5sSARxtWfY3TptoKZaAmExT33HwjaRH61wPDHn",
  "key3": "2mE4oJGTozZJjHqgWa8rZ3KDJzGnZNgPnmrHawJkbJ1paMh1BjZyC53HgUrC7Jwc6jMBCZEgZvQguaqJMXcZvKqW",
  "key4": "26skL5yhffYRkYJ3EXhv6CRZmHMmP4uBR6QWjqgbNRhHQGQma5tbXCP52e2fRTCxTzGkGQFkQtYhqLnAV75q4bTG",
  "key5": "2KHZu95RwFvmteMbL5nfh8T2y94pX1q1vUokXRucZRxJCTE9uTowcdHJ8mxunCeWw8536hvhFhdrC8AzKTKwU1Nq",
  "key6": "cqLLrta8p9Dov17KnhFT1kas8gfCWg2XRVS6Yqh6AuhdnvLq5UcrAi9mBNVmVVJcqYg8YHyetMKqrDnkmVwL17J",
  "key7": "3cyBsTfznSrJXcwo77KFwVVois4NMtSYg9tpu6zsSNy74UpTDnFpwC8c942sDpzs9WTSPhNu2NDLhRtSVCgErNCY",
  "key8": "4cwxpuhQpar3vsoRG3qhhSDSL2yuooh9RsurNgJQ94VfPA25UaJHa3fSw5euZEhuk5K6LzVXsvvhCWVQjeqLeMLp",
  "key9": "65YRXeJeudexAtHr3zQ5rHhDKaQJtHtu6iBNC2zCfp3La8AycjzhcyyGkja3z6NS4dQKvAzxWEXiiKMg8YgT5hcT",
  "key10": "28HQzTskcFEy8v81zdjQcUFWX7w7ZjRPaHjk3EHPikjz7EsXMgGXTKdznbtwZ6zDArpqr9bTzf9hMvwHRqfm1S23",
  "key11": "3GJkcpAF8giTaCX96bgCLj8gGQVTTdJywgvBicv6785MojegUAN1fAqbnL5tdsRz9gwu95kcQdHVrtevPAaj6xTA",
  "key12": "5MLdU6kFXqFZr33U7nePZJnvEFWn1uiK3vdPYsk4LwFgPVCCHpVw3FNDGKmwSpXbiAAFya6ALzyyMh4mEbabYthb",
  "key13": "5HcofsmZXo9wtFqNihcgDzVyPkHMvKstBjD6Wiz8bbnKaSb9qBh8dWU6De3D5wQs92Wzz3nHAK8dUtonMwRTk39V",
  "key14": "3QVtKxc8MN9Zt8cRUXvNHjUjTdsUbEC7wGN9c3vpituvx3Y8oSpjoRUFcq8dFUqH8WqomKtVTkHvtQxyq7UMpsYR",
  "key15": "2izeoitTrGywQzu9gsygRLrqGbEbRe2S4x2VYiR94sNQCKqRYnnsh6cRnhYPuT58FrZVjrFt61fQQZ1VxFzRajHQ",
  "key16": "3ghufHYbwUserqz5zLFcfbzipLoDmNw6XAwUrJ6DrFA66GhRThcwbn24czfVEzT4SwP2HfX4QTV8ht943b6mABMQ",
  "key17": "3Ld8crT6XHXBNmZEgUzGp2yUUU4b2dmRp2FV1oaJCEP9VLVVbnz6X2EjZNTBbGVYzs1AqXeZSZYunekB5hFJxtW6",
  "key18": "42YZwYfMJVD1duavG9vxi8tbMah5GWd9c8LFvnFhmWvhyhNsSVoRSq5sTbEerou1y1J6V2U3hLi3pxRxP7urAMWV",
  "key19": "2Te2gDmRpdjVeQy1CiAHs2Rrpm8uhc2ZNjogy4WVf2PWn9ZGT4snn9tUuiAxp4xqBTNRku6WdWmZNTujrwKRbK7C",
  "key20": "4XuiWnhrPiDDCknY4EjD9ECEt8yyyZTBrJizKuJrPM363gMVALwXmD6572b7HN8vcbPCon8jQXFtfp3y2C1umNSt",
  "key21": "633sQFpkDNgcpHzT47ufWpR7DtLb6SuCcdPmGtffwsv4jFLhnSppcworUVAhhxzLAJ9C2CE8w5XcKqxXF2hF35cE",
  "key22": "TCjT5cZCMJAjbxVYvFZqQkFWVZhNCSjg84btwY7B4Y96TAf5YwkjC3hEpCHUfHzaW47gGKUvdVWjqXeBbT32M3J",
  "key23": "2NbyiRQ1SaghK4GnvesErqYEZKbrnDhgzeoFx41H4YLfVAybDKpsQcEepPHNRaiaDk9x5ThPCm35jSU38Le3Fvy3",
  "key24": "37F9MkVxg574FmoCW2Wprf4LNYq6gA5xefR1MDzFxmWk79ZtTKejMc3xuo2MSZcZ1kBbWfoAx1UXUNz8hneJKYLT",
  "key25": "4BKFpApJwf2XU1UrNgwSS3DKfWkcZf9foVbAEFTXX7j3T4nUqK72L71rzRboDEmARNAw4HKhriet1mmr1C51VSe3",
  "key26": "2hQXKPnx3E6Df1cziXgae9WofW3QYLdGLFygfTphyL4TgRx6ukscWugvuTddkqn28uXfX8ucLrwWeBypzGSDpjFJ",
  "key27": "39MJef7zpNpFf8cbECTUEJUxxep3AQhjWganAESnGdR6WiKCyTDBo8unjnBw2eEvq9ng2vzbuQikXF3PBHLKKeaX",
  "key28": "3MX1axKLwkcs6QUBtBQbk7pSEu5eWy6w6ipnM631cjtzuieAqm5DzTNpQpBTHT65BrEjD4Y8ZjKFRSV4CSjBK8jE",
  "key29": "4CjuREKNVPvhJL9tgGQ42Npiy3va3Eh8X28LgCfnBpCggF2xCfsTqq9VGmBStFrLNsikkNmtEtK7g6iw6kHsndu8",
  "key30": "65aLpmnkveimFypNK7758Sr6PZCKTZGsZv7Q99jWBLRv7pdcZh6fZPC7hNs6R8u94pqrUVBxGa55biKRJYa6Rs2a",
  "key31": "3ou79LDkwxfCqEcUgdNUot3fRiuNmo8tXTvYRbd7S9cBbydKBPd9WJsJNkwyAzGCi4scbsXP1F85U7c3n8KxzSqX",
  "key32": "2GHTz8zSNGjnzTKWubZCDcVQM34Ljo8tPbDRdP8haykvFuxnhMdzyFLyAJ2e7PpWHReeM2KT19pDvzq4Kh9GrtWu",
  "key33": "2Bx1eS15g92Pefr2WMEEM725271H31mXau6xd5Apdn5SFJTUyuBCwkK9p9kbzDaQXdFFEmLccs8gwT4Y4BTx6AW",
  "key34": "2i1B5JVqmA9DAT8CBrc2k6mjCUB7qjeTiDKmVKUE2Bm3GaofgNywNY4ozYpHFAmkkRAQdZ3aXA6VaPjXrrz6Sc1T"
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
