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
    "4qjj8TCXdAdtPUMm4oKb4ZTBruHtnjsggR7GEU89j5SLd2rzzSRU6x8DFHHwyehudXiUXvpPp2agcTgyo4j8kXwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jquKh1ajkrB9BeYDH8oqhhMYAVMAg173V1ud6QeziovkbP4JrYrCJPK3PzRSq318NZG2Aywk3ru1oYAk3i7o43S",
  "key1": "5DLXAY2kyvpDUP13zDCroyb5G3L6iLnH6hW8W9ZvwrgNpUYu8dkx33C6Wkz8huwrBL9Vee468mBTDLLmQUCckRWh",
  "key2": "2ADtDiVFNGPhvvyEWkqqfQAPNi7uSHLESonQPR89GVXEWsb57TkvuB29QH314TRFSF9FZ9tvJJWGUFjEeYMeRJc5",
  "key3": "2kHgDPNzMYksXT3u7w3oq2hBkUCWb7XYmCKgmXAouT7aVNxrMdDvVR84AKoNxVL2Xd96SfXL6qFzDdGgWmx6PLFx",
  "key4": "5Gdqx8HRAw1TSHsXRcRz7iw3ZXkHd45wsGBkgRvT6YTrCm8GKEfqU6YxMmC3v4RetxdRQt5xhfnidCiacEbTnjqT",
  "key5": "4K3HtXDYu27RdKYoEfYZAVTXaJJA4zwG6QNEpjmMEriHgaJEPL67Lho2paXtMTjjvw7phsuacDemu26D2zV6zHLS",
  "key6": "55yVJHU4TkogGRCsN79Wso6tGsncZ2KNQApx5g6C3sZFcyLayvUDiGZrgaRW4WhvCegszeyA6yY9XVFBy4QURHUy",
  "key7": "65W4UUrnKUsfRdNhBwYKq5aLWCDZaXN5R4REETCsAZJyGPGHH4KRhYb6jBhrQrBLQhQ7SwyzYpgE8ka74uxd3N3F",
  "key8": "4wodSMky51upZnXK2t1rYBk1B2jDPqxdvqQ39W1p4FvERkYbWUxigpFBuPHhJoRYutwoFfzKUpnjZhzMB9zWt9P5",
  "key9": "4KMNPBKdaiXFGra8K6oze8yqbqx3XovDH3tnWGvbaqgw3UL14q9LNva8BSGGFdTw739J6ZmNYgN8iK7D5gfWiXH1",
  "key10": "p5FQQPrMftFEQZwpnQaQDPNU9ndNwMcbTT2qVyWMyXcNFqdB7mPTtZ1a69EFGdh6wd2VZqVtEpZgwwoLfPq6kWT",
  "key11": "4YgFL3e88o9mfKsNvYJJnzznrH8YWgJEfip6ocjon4rmhXhGynEbuhM61RoDUgPA9Wv9aucuAMa3PJBEouTP5bEh",
  "key12": "mA9b22CbEtK37UBmGLbzvDErQ4tgQ5foaKmGWcfSng9pjRu7AaGJXWciCJdJTcpUNbigMVdGvhpT1wh8CBip2od",
  "key13": "3xSt97RpauBcxddcZ521weHA4PdiSVGG4XU2ijw9Z1tVKWctcvf9gxQncDH3EytuHMc6QPzHn5HUh3Mdd886b1Eg",
  "key14": "EDu4tMa2BNkWh7uq6CCAyapusaY848yR5oEbjtEmDZ5oFd2vpn27MtfShfo8LsnTeFLfcoZhUnXJgzpJ1A3kQkx",
  "key15": "2L6X1CbLrBBmrTtSSgJFsTwaRw11y17kPb2EhGT8H6GQ354QXFj4ufpVE4XXUwgJg33ddXyFNM14fhPsyB7GNTgX",
  "key16": "RWkaxjs9o6uBL5NpwBAvcQm6gDtVsEttAZtunJeUBxb2rHoTTH7LGcLtyb63WrDXZEQkbCki3Wthp6HAYSAQbRz",
  "key17": "3ScDp6pxBf5WJCuEkzyirj41aoxgYqd6gBNZ44mHmFxfjXFVdSYKacRXzCKVo938C8oEeLgsBS993YvALW3mfVkG",
  "key18": "5CmUSKLspmLWDHzZJsuZ69kLYrbRs3Zq85N8rRjbwG19hfaCHXbNSSeFRUo9isVjvfxWnwPbNPmc2VnDgt8r353E",
  "key19": "dBEXW1mgyisxnKNqQmP87YMuqWjnfMKPSGP9ecfDkHL9C6iDMaUBriawni7AMWYFzZiUtwihFCzFG1Z3a54teso",
  "key20": "3bhvbjMdS1wSQPpeaFqSQA1TjgsVNA85UP8sNCQ3S5MBm5gcDkSLqT2sNQNczmq4HnUN7ktqxmbpVZe9ANXC1ZVY",
  "key21": "HpZNfPQoV3oCZAMGvtLXwHcYQxNUfRuUBAeieEQrVpsKnLdro2Tp8fgNtfU48RUuJqNq8KVXYYwhSmLPAaFU7rz",
  "key22": "32FtyC22w8sw2iexw7PHo7hELeJjAukBEGrtBftjAv3urNfy7PjHMi9ph6ezyX9SPJjFDm6tt12j6EL7C1HBUtz2",
  "key23": "4ogWdSWrVtRbYnQw23rF7bcjvXgTF9c2m7q9JeizzztFnf3fX6XTQDEStWviAZzA5dABcXAymrpUpJitrPgjz7mm",
  "key24": "26vKkZhLyZ9bYiLhy8gvP9CXq68AFbrH9sNnnzBRDy4nrK4SaPJgr3QhX9SFpz8Xy9a2KWeqGs8XYBB1g3zEHYAp",
  "key25": "3kehDReVssYkxuS2aFEzJRE47PJiEq2pEQUJtcWyWZNT5LpNDLsKdcYTPU9TA1tzYsEwE6WKcvbqaFq3mNFXN5CF",
  "key26": "5oAeYHhyv8URSkhwLg7iWsWZA9CkvZhtccLvo8zuiGG2micj1NRqTPhTs5hhfts5HnD5Qay2Zt9e9uQk4DMycjm7",
  "key27": "51U8tSJwBHG2VcyVWQ1yF1bCycRbkLCsGemJhfxrqNVFRY5VyUvWnMn59KhH48kL28teamrf9LeeZm7zAEbuiXak",
  "key28": "4EmKBUD5BoK2VgzLVhHvZZBMKf55asmrwVJP8qqbAAgJ1vEon2BN5g34FgCjtXSxmWw3d9cBtEewafFEmVU23AL4",
  "key29": "5BnBq6JVGzbYTfaC7vyMKhTBT8rvMJD1QJapN5DoDcD1MqdX18Pftm5HHAEtWV2xa2YMhbaTVs4FhHzfpojLCE5S",
  "key30": "3L465HERU446V6vpvqqpVTrUzeWAUSBFUbZxYkE5y9bSVHbjnZYEZAaiLqZtNrBxXMtR8rthSoDvhLXV4WYXoL5L",
  "key31": "bzJ6eJuMmC7pvasygemwCwx3mGqD35A1rJ4KXnzUwLvjpoBXghZ1g4ZuBPykrRz6LurCcNv8DcWGD2cvT1RDSey",
  "key32": "58ok2P1ekqqVPK6oHAbXToGMZ7fgePZYGcvbbkYL2xNMhgeGxvTnX1JbYHqycPjUHCgPStdK9F3fytEDtHvAs7gL",
  "key33": "5fJtTYpx3HkjB6oM5UB5o5xYpCLA3GSYRzTaiT586ShQKXGD6qWToNVfSQ4jqgRGetiPfWGeQvVDsvG3hXazSDtM",
  "key34": "LjpL1RsQprYQWt41Qd3FnpVAYtotiVwrez1AVSqCF6sA6vcdPiXRTEsSEhD41YoEFAi4ieoTNMUpqQqmDYyF4q9",
  "key35": "GWrSiDbMPjYeLeDYQxeP1FoeCvEBUMJxB8fFPtqt9RpWYY4LUZn164jNWXbSBBUAEsZS2SgDzBz1mmk5qznTY6P",
  "key36": "5Uw7qdy7xLigzM1eKdySAoptiazf5DRsxUk1bZxiWUijuSojKT2rUX4z12cBA5kApo36Mi2yVbS4GmYAcGnDSQ7L",
  "key37": "4EkBpsbUNJ4NEWdpk9XmyoevLVTcPXvYK1k7Lv1ttebnHJJi4oiqmhLCK7zNPN8QKfnLu6iPFSiGVeJZjQvAGZ88",
  "key38": "VYE71q8S3S3JH8LUizxLaH8v8QCE7y238V5ugXp68VRw2k1mcYtXrHLQBHDTNjoeQSoNZp5TDprK2Ws2KW2E6cH",
  "key39": "45k4uJhinxXvNdcy9WYKChkMP556BLotU7fXwhMqf3dJDsSmrKKwvrTfazt5D3xHHj7471MU1ePjKpQmEWMm4Dgg",
  "key40": "4zgv1CBArGYdb6edpLRWD2j1sZv4c1LSJWNWAGHGoHfSquPr6Hsosu3NVQMU2888Vg4g1w5hvZ3wrkWMJdFAUZ3f",
  "key41": "2rbL2ojTTYi1ZGQHHQURPgdhoKRVfLaacc5p2WTDUAdbSfXRiFef5J3iM1VmhFqxtb9yLdsbAq6A1QZdRSFekk9L",
  "key42": "3q1BtXB5tZx93dZ4v4V4yt8NNhtUDmthnb2UUYwS4eh5JNUWzhCZvjGXo6MygHKDvPoHrbGLveAJ1yt2soEKfJGF",
  "key43": "3XtMR6TZzwGNL6xiTetQYJMEz51RjiuUiZoBr2pVbQ2Ry239o8yPxYAPfT45XrZ1dGCbGe6BtmNgffgvJtoaUGn8",
  "key44": "LYY67Lwitvnzu8SJ5KRsTThzfKPfPbHoG24wFb9R1HgwHECd7maCUWMytwTvZ9r98k1xdNJoH6DfkNPbBerCQvY"
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
