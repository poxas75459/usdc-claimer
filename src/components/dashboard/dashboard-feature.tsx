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
    "f7zjFnWjF84RQgeapGN4fqTV8VWeLGM8nomsgHt7PMNi299WDTJcdb2gKHizCsoNpCnbG1NifH6Z4nBeyspSRb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeM4FgQtKJgHjPQMZT5quUtuzpyxJ7reMboEQWLod7NP9BY6ME3gwA65AgFEA3EPRg1N5xJkXLJk3G5sUP3kFca",
  "key1": "QAfKM5k57DMaPy64fYUakaU5FXDgYuoPbvETmXiC4imcisCmkA5E9GfQfbCFjhBBrjxPq9pV3Sm4HntCCYgv3dc",
  "key2": "SC4VzVJV3eZYSSPCZRLoTeH2LPBhgKCbfpEFj2CqqGtihyhNHpu4mnaQK4AqRec7jtjCvJYuotMdoZ7it9GpVKb",
  "key3": "4KvEjPjx6TNTRkS8G813Y7TkgXEB59qLT6TGg7gBYS9k3TPQUK44NhUJH6oQ9Udwrhjgo5RDecgVx64qKXJbEU64",
  "key4": "2gYH3HcWwWi3gJqCQ2ik5i8JRbj7w43shPvgiipHb64EPdqBCecUL5tmKTR9iMp92HXR1NVZ6UxRagR2Q8QxuVAx",
  "key5": "5q7rZrTv9zJj5PkwMbWzpKJGs1RyMBZ53KATtwdd1xkkny1N65KiuwfXa3AbFFMjfzryRF9WWcoWFP4X2dNHcsnG",
  "key6": "2FrW3pSD8HboLaeMEmzTFxpE6KyNN74Umv8uQZAYAsbaGSpwFjD5sdo6vWDUemNsfSdQTEN6MNLPusLSSjcGai3b",
  "key7": "2WeNxpMoq7jjbdX7SRukJy1v1ZTCuUKmpnAR1yE3fXQodfDA8xYpT2aHVD5PypwYqJY2wwzyLnm72vFLTNovDd6a",
  "key8": "UpRfhLDDYYKafCQ5QXs6uhdg9ZoLKJfCvuWPnSzbbpDk8Na2yuBwBWH9DWm48aLpW7XEiLNvySfbvXtwue7ncQ5",
  "key9": "a8otXfQpdPVq4gfJ6b8fMJx2kEU9MUysV11bZDEB5ZMBFFvVo1rvjCFS3MZgjrTxspbu3hjHSZiPoUMAC1E4Wnh",
  "key10": "5XPNS7VfY5axMbMga8t5reZkCNL62mZeEmEkpMe3AUEu2ccZw7W7fKN5cpQywWrak2BGWmFpEJQQEywx9mhDBUW6",
  "key11": "28v3YKryd5fYcnuyQLzQ8fLbYZnhAj6QxtYAUTWdeu2LRXoYxvn16TnUbeEZiKXzeaMj8w5Nrm2wC8Kjdd3ZjhtV",
  "key12": "31BXe6FEgMA8U94Z647nDkjRTpp9jgGBw3jtX1XKrx3pqV4crGivTidjW1FDSa9yWMkW3Q7LFSx5nxkVeseNLSYh",
  "key13": "54wwZ1Wmexs3tCQtV6aR4YRHa2XzyuN6jGJbTE15jSEuveyV7L3BTTSYfKQcSDk5y5QW7HwDYeC8hLheF2DJwNSg",
  "key14": "3JoZB1jmkYU5QNTAeXNoMoxFvfHcEovRDjgBhdoVqjFYsveXx6ez27nS93CsXzHVinC3ewvSfTM5p1UFHiEPnZ3Z",
  "key15": "4YpvpsaxHHEsttKJSXb16a2WLRbvjpVUKVibnmsyBMha2fKieKCaU7SfxYF8HGr4z4DCsW6GBU2naKVseNQ5TEii",
  "key16": "26dRHKjpnVhCYRfxzTiu23YBNdF9AUgf81JgzvqwnC5mpCJbc5XgxoAsXFt7kNW7KoQTn78NHWxjd5Qb51AD9yyD",
  "key17": "3XLNYwn5UoWqjxH8VRox4GWJ3JPV9moYKTwofG9dm2FNiAu5FkS6ggxn1SfAjofMeZJrQhoTEqXBdQ4vFAmbDsRC",
  "key18": "67SGL7fTuCpdVigHV8eSHgESxvYQDQNN4DZrXZ1zZJBzzZEWCcswtLJ6aRPTy3kwjscMPgB6T4ogYDTe7fuGBoTE",
  "key19": "4XDEfxc535jE9yhwvq6Jd8W5kxt76svPuZyUM5KffmRmSEfxDDKc13ECAaTg9mE89ZvuyWKu5rNyFLMdaoAwdHKQ",
  "key20": "5Qyi3SPBo6hAi9SW6nc5YFqKxrdrkUM7Rjdzbn18N2YgSrtZtBu4gQy6j8jZZ8fWq5epH5y6Sm9kFtfaCkyXn4Yn",
  "key21": "iYj2cZUXC7UY3zBnoFi28aZVYpR63uXdKwyhaZj4MUF34Zv4FLsgKFYFhN4i4FAfwuKSkjRFeVAKaof6R3h6Sq6",
  "key22": "youWh59DJrKuWRqUeBgaPet85p4Qdt3XKwQKNuPtVV6epRECMqSxcK7D3GV8SnkzN1qNDGNQKqfnTL3rCsmixJ8",
  "key23": "4hdTD67vHjj5m11WLryd7aYNr5WS7gHDMpsryPNUiVm8nxg5toconxhe4qDuqAqPMjKTZxGJyBUkVjhFzyZ95zR1",
  "key24": "31o4hwwXC5HAPThdZh8ewUDD1ozTGmzUFtCaDosxVjkBbt4KHESG8cJcZ3HQ2wNMBsePHjjXBt2onY4cToNoCh2L",
  "key25": "GChfALD1sYCfsNQ2QcH2JyXiZ6c6cdw7ZU2uYM1uuiTMg1raevREEjqXQJzvtzab6d1yVptJRXHjEbAhaKDtEKD",
  "key26": "3ntmFd6f53XqJVyziUqZj4TuXsZEXmgTCgnfSEeUcdC4vYGRN5Wh7e3feC4wpu5WXDAXWEQGqNHs1iMUeZfvjFm7",
  "key27": "3sxwacPMYFF444URe67ag7csE7j5c6qXx57xDgu1E7tjxWdVhPiFzvThKEYUx9noexewth7bDSQcevphHoTk8wEi",
  "key28": "rrLgMQmh19jwhgyQmQDp6Sy5XTe9HTLV9sJJokegwNgZtuFMWdcXL31nkWXnTBzWK1d1AHUf4VoRDiuTN2rJknc",
  "key29": "3VaEmK3apWrzhaXM3iPx2yN6o8ck6XBXr9Gdv9qv7afjZKbPTT8XnLUtfrjZ7u84yBv3UrEoW4rCaUYwxjzsFZaT",
  "key30": "3HVcW1kM8G6KsiNBsxzJRBAaPNe9NnqbxYavJJcAtLSfwg6q7KAgYWNfC1tZyvZ4tx2jCkJFrBEvCYKPi7rPopgP",
  "key31": "55LNebcSNWn4GkaBHH2uyrBVZrDDa7rvg3ujYNPcoa9Uno4AUKrAKfR1Cv6EPbkrBpDi7rLPwrabVPZQEX82pHjK",
  "key32": "3RFmAdwSDaFtDBDjAe4W9SyktuDjc6cMD3u6nKVEb8r3jt6BPX7Dop6mXyrHFkKghGoqSCNszvEpFGsk3DPFcPKQ",
  "key33": "2ND7fRqpcM9u3fzgZZpCY9nKssqZNQRv9hzJRxmR6tBTjarjpg8SD4ZaJH6zoMLTRNWymTy4oNUirVKpjXE5KtMk",
  "key34": "4DNesJV26ASmXtnJeGktLSQu9zmm8S1bHTL6JacWNVxy7HJWM2mdCsYB8oJes7rVHHhCyYcZwiinkDSrpjBtXKvx",
  "key35": "4uRhdR4ujgLLHYRKo1bc5CR2a6TAMnwKG9iVYRtWdkpmmmn5gqSBLFkB7WLvy9gMdhg6p4QsiuwYwS4oiH6eDiin",
  "key36": "jYw1pEnvCTrBvz9uY1WekY7vppVxdTFUwK9gv51rV2h3wt8vFu9i389XWvuM3gXxX3qktNdKV5WoXQY9FzFNrhy",
  "key37": "729xNw2fuxypdnKWUNuQ8CVdZsckL9kTN1Buv23jeqqUqDXZt819PvNw338iktP2Yw6FhnXFXQSziB78jXa9VHz",
  "key38": "WU5bEhPmpUUevHXNkAHMqQonw1eNTF1cKrsjqz8KjRC5vxhyDg8EzyZWxU5ZrTz2WP9ryNqAHKCsrQ7QzuZTGnd",
  "key39": "3A4XSFRXDRYHfxZScSKUGszs5z23CZfdikbAKtN1HVDwwHJyPnzVb43Sbf8E3YZQLrDTBjPSQupNKVzC4ELQpeK9",
  "key40": "3EBc3sq5TSNu7zvHrF3qT5UtNoyvSpDYSH9pmcMMuJCmH5u1pc47j1z4QXyLsCcttQd8mjyR4JXYegkRT4PAWja9",
  "key41": "5qv7d6RSDnhEhoseNLego9j8KCoUM5seYAV8nn1hbuCpvJHLQmmQA2fs1mV2NaaxQAGGaFFNYmhcAjzwftiYk86K",
  "key42": "3JVyCh6cY3rMPf4cgeFqZyeRoc3abF6iwEgp3PSLZcDnTKVFjYpQBPFDnfTpznR18VRyhdcLz8wK11SAAKA8oHn5",
  "key43": "5h95G4Ahiu7LpQDQbE4thRWvBXYLK5v89rdCzQ5S1ReeKWgvGcSub2EKkxAB1tDSG7gfZX7ZDPre2vHzWrqRWKHt"
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
