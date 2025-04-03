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
    "362T8V3gM8z9M9xmtFXuSNcTs2ZZW46JVyk8C5qeFaZvoyd1D4Q2uVdpeNfK5RNUSSjJci6P7YEK9vtUVkpezuFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4124JKpwtJX5n4W8vsekq7zYURsc17q9TWCCyCnCm1WTqivaLGz5r66yyhWEmXHfAhBAXUbztAKSs9NvWv5iE7hk",
  "key1": "2UKQty1AhcKuFM2PSDV62Q8MmvdVVTcSSw2YRkADRdCMWtVrwicNPfVrFaNQBZoWk6F7Qz9MDaZuyfQTVKLANH1y",
  "key2": "9ZCqP1GMx7ESxh7zE4AA2K6QFMuYXL6kKZBS6z4mTiQ7zC4u8sMvKLVxAZupvmjZ6LJbzQ8CMTkKzo92yiMzjpq",
  "key3": "5L8vaKSZhkogSvyZgdo3MfcEbn8CZvskFfaZmWFHrZP2vKAQ6jbCkqbLUqsuuUKyz2bjdto86wPmD112Et4LRCSf",
  "key4": "25KQwecH1NrywWmBKVX4p4JKmupE9AKqXfv8cg4UBMf6R3JdSnRn3sAR1ArvY27ciyypjTVBTKAe3q2zBYzYe9UK",
  "key5": "3LmFrD5mgQh55ZN5KkMg8guYTnYzfUPWgtSu1qWCkaA6iUCU62n6w7Y1XpqAb7Y3c8ALaqtqECdjjqxKLSLQpqhw",
  "key6": "2MtJ2NP7nHZjTX1uFNzyqYGZFEi247CQrZi9Wtn5nWvbuf73EvrRR84YRuACyo88mJDeSfDTV8KZG9r2QBDGeBr9",
  "key7": "55P477NMCUXjLfvfQZrXfU4N3MLiN7zYUFTCcEAHyCPpQB5YPRkhSfeLvA1TSbdiU6A8Ejmvx9RXdjcwxF7Vgizo",
  "key8": "5gHp7ZAdqwZ1vpegWR6T4VqbmwCVZtapmRDLNexjCx7veg7vmsR38d4z9FCtoE41VNGpa265SZczE74cV79cSovF",
  "key9": "4aydd946FXKtDznJriXwATdFnHdsvnKR7mhfYTkKPsujYu3W5BkCFemUXUYXQ6omR7tnhBHhBZxGFDyd1eD7GZHT",
  "key10": "2a3hb4y9r5AAwQXw5dxs3jfei9NnJ1tUJP15pbmvQRFkMHFAV1uPrmGhX8wR3kgh6EzGiinubCeJSpn5PFiGreRt",
  "key11": "4mSdAKB49uaqp46Pz79zHXzWWRM8gPjsGuyChntPn1kEVarEn1rpxAewNtvkw71scV8WN4wKXHNRJGHyhjc2nfXd",
  "key12": "3CfPZJtssjNj9efLcJSoA3vQuJuHFEVeduiWdnoDdKwDWn84dSafuDuJSoixaSy5ekhniF2srfZFMyC9nBRWRJSN",
  "key13": "2TNHkjmX6xe25E4tybgpoh5u2aCsfKjXsyG6fhs3gSC2aM5KjtLgMuLFYpamDzkP29TcS2REFM4x1AgMaVHQ5G5S",
  "key14": "43YcyQxqPobWFvNSxwxTX5uQXD57ZgE3Bmc3rqcTwh6EEznMfSky96nYZ81C3WpBJ1yzVbEV6jGrXqr11wyiSsCx",
  "key15": "2vbojzu2uU7cFmapMz1ijN176WH3joVidb2RZYHihp9T458UHSxL28MtPYKQnofTMXQMTLisTsWWnFnr8bXUPVUx",
  "key16": "1nw5UuzoNv8Y2GD8sNi2gP2s4R5kvDxmHZgd1HBNePPMrxpRL7SshxxZAsWqhoafqt36CzNr7owFzFJVGjwEgBy",
  "key17": "2DNwKC22oqjBRygGRpCM6Pp5zuXBzTgFQvPji6y7GwdyZAzTt2X9FNtwwN7f3A3VwH7S9HEYv4GqrrAv4ZGNqqYA",
  "key18": "5KSxeTkrFCTTEEMdmh6GWXBLsj4zDQGVrTUsLUZxvbNGZTDvF4sFJp8nPM9QtSTYRuc6nNsNKZctEQd9YogdNSvP",
  "key19": "34S3zhcQeTQgBYpzMYBya9XiJVvGUUVQNhLhayyHjzKWBMG72BxqJEWmWbKMcaaNwAD9Gs7DHMBCeSuziq2nQN1T",
  "key20": "3sGgtNi5pmHha51kX7PL4ewVetWkNDuMW2qyuy4WCMJErfTc99Pcpp3NtNKChMNZ1772VYdyZNXKnrzn9a6HWgNQ",
  "key21": "5mqH6ZykZRLC7acZmXGsEEy78VCEr1dhHZAmmGAFYXXSUSCZvkLJAxvbtDgoTwMdCGD74d3qdjHGb3AuGE2nZZQF",
  "key22": "5HSy5LecrqAnytQgmhDHtraxoWp6Syn7ibdj5EBVgfsKXJsec79ThpEstmEUwJV81tmxmYb5L4apJuQmt1F4eXDM",
  "key23": "2jXW17yaSfqaR6JKzE9M1jyRmrb7LGVfjbPoXZD63aVa8xfWvEpW9jvW9UW8YEdbYhHceUMP1RKQRWupXXqmLBda",
  "key24": "43UMh2Hz7sufeF6Ku1tmppG2gnKL2E8MTtCiXMTgiCHb5KnPoSt9gTZXKtutLN2M12YE9cqbzf6qiio73vbAAiGG",
  "key25": "5MVkPWZkmVgZrHo6diD7JwRYykGko7ovwPSpM4DYWsbmXhQxE1FXkMHcg9JYcz1Qety8FBCvKD6kTXPrqjgrSprn",
  "key26": "5fGmAvkvLpFvdVoT4jgqKypQCJcoxJstGLANcmgpoDENQLYGyQxFyzwcwm6eH42V89SGHE58MnVEgA9MHYnMFjXn",
  "key27": "bm9dQe1xSGDVhRKJKyeaLXz6gLzTryypGj9osphZsHq7xfXK13zStYvFaKRk8HH5eP6DH12pdMp9544dZPcZFGQ",
  "key28": "674Zt7Zkzkdif9oV4uKFKxRMf95GHLaHSToST5HUihzfYxx6VKEtnA8JPXxrknhzjYZ7UTi8NjjX6w9pnpU4L5GN",
  "key29": "2iddV8Mft9MUAdFgTo4ma2xTjV2Hg9ZDYiMZzoS3hCFJ9UimS9cDPxLWf6AVMMPBhCJZZjTB2UsPLRAkvSn5t6bp",
  "key30": "5LtLk9eG7pF3n1e5wKVUfXqyhvvQG9mYAC1ur1BArFtTwsCF9seTZFU5YKuEafxdSKDrKJwiY74zwtGuGdhWBBff",
  "key31": "2Lyg6tZRA9Xk39JYX8PZt31mNPtSk8kzU41gniXwC87GTY3s5jyG2puSkVX6udTwpxVY6xB4qLB6noYuWTX4jj5r",
  "key32": "5PbPbLxJa5YTRsdLSq6tCgodqzJZN8QrY8qeY8Fo8TjqJrBfocW8JaMetPfNkqUF4BzUiMWR2fvkFGMZoe9GBamN",
  "key33": "3P23WSwmp9KKVaEzSYXefpAL14Teby9pyHYqZoKu1DiBn8SHUh95YZ4tb89HBSG92tBrdSsGg26EwKJoPktTUYRe",
  "key34": "3BxT4rLfhPtmcGjB5genHEyPfELrAhNVz3a7puvF7tzEGtLyCp5CbiMHAirdbWgJd4JRxRvehCfnoHiJ7cKep7Jz",
  "key35": "XppejYj2JujLSowG5ZPz97P38qSyZv4HdpVMWCxze5uscqXwXoZtSdPpwjyP2ovvZYokcK1GGsiWvuod4D8jrgd",
  "key36": "ttMzVBZ5SNDS1JHRZ8nbMh7BPasYpFRrAWvzp1252mHjZBr13GhSBWGGGiG5bXLp1VeuER5QiXYLm7GtEvMp6Ph",
  "key37": "4B9JpqTybwKGax33XW7pmtt5mW5sfWXjMZ6qcMCsW6JDBGkd6xxjFFvN6SWuhHFoYTxYUghhLR3gsGZSChYHmrws",
  "key38": "H8wFYDPn7HxZtrFtuCRmtWV1boTTM1DGM56Tjdir8erFHtFtfh41eDqsPwPPZTBBzThZPW1yV2wMbymcXNWdaBF",
  "key39": "41M1vJ4YvfqxG7m4kM55EV2mLx2oR4Hp9AD7LKF7CzgURw3MMEnzkTcL61NN2fUiDLv8bYwmHSsZA5s6TiUNi2i3",
  "key40": "2hAoaBB4voUhHgHCRm2AB2rQi9yKzVt8XstZP9C27uDj21sTxkwL9WYWcUVpUnAmz9KQrq9waDjepMTavEfJCj9y",
  "key41": "4yNp3dPHSX3HZVXUqLb6a49jYbp8ZsSq7iH4hniQfg2knMxjuGtcigy6NbxmF5Umqv69SjaEGDj8qfWQoMnUP2Q8",
  "key42": "6sQyCvNGna9SDjfGcvuHSwUuX9UP219rBS4b5Uo2ttMiBTGdiiXqdAYE3wMgbA3Cwz1DrTnJ9YfjCzVyju7f6JC",
  "key43": "BVndSL8CbCutZ1JyKg2JbzowxCrZxmNfM5A7w9DHc8jVUiptEgJvw25X4QEz6H4HnGW9K6iNuZDwQ3qU2qe3deX",
  "key44": "pGoVjPtv8VUf1cwWErx41GUAqr8nyd2HmqQit6Kqq6bxS1DV24LU7K3X9XspAGuWpvEDmFRDoKPC8wAcp8DTygW",
  "key45": "5bUq5u24vhSH8nF5ytXP74wsKejfTEESG7pUqxJC3pmf2twM6da89CEGiwViqyhQcT4UJqBjBm6yy4vZtiS4P7nG",
  "key46": "RfTw7nEtASuxxzoLsmde3TfTRNhm5hDozMqamx8attx4zpp7fDg8MWjQJiUe8NTWy84D8bV1ZfY7oxMkDg2uQ8N",
  "key47": "2odRX4LF11a8eoxWCqoymwx5a61g2puTUeJAxis4nYbz7p9u7amjLKDKRecLqfqiRm4K2p5y25zkLhzuPTctnh93",
  "key48": "GikS9bbW6gJbuAfjaCpYpfJAr8endnU3zHqCeadTjyP92MZkr9EiJ3nY6sG6GBuEHAEmC2HsoPX6qAs4WAHf5X2",
  "key49": "61iE2knNoPPGRWhp4UqevhPxKUMCyb1k6p6seKCmiekYvH8GiH2oa2TCQmuM5hjsMFKN5DB2vK9YqcdL8zkyws9"
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
