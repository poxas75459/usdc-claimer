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
    "2EALhCRrukJeQmE4AGqFncnYN94WJncXGUroZSQRiic3AmodcJMX8LhbGiwVGqMpgyo2EPFWh5ww5U1xnLh1DXNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xL3Bh1o5KBHmNC5WKddEQXCzHfvDBxREmbH6tASJb4puG55MYLQsNg2whQQojTiSPXEu25QUtAYxyJDkA7XFtyX",
  "key1": "5eWT618hNnUBYtQLapnAHG5sZ9PuWRrSX5iApi1vunPLQoDyC8DvmiXjZHy3pk8BtxmcgG3MVtXSsLwgqmMEUhBH",
  "key2": "4qbfY14iSHhGLzUxEBW49LPNc7DSj1MwGsK5YSckBVSWe5mMcLfttmTb32XsVD9oQMRgi41pBxwoZv5imeFoRNS4",
  "key3": "dRULWBTjE64XRRbPoTAGqsLan4pvc9QqDkwAHpPktSxx6K39Y2g5Qg46UpGriFmUMGmca4k1MCGCrzdtbGLWd1u",
  "key4": "2Sa81vnPbK7rwSQanJ7zdKSx5MTooa1UqkhVSM3nK7n2fYatK3WQKApFJXF1St4QPQVo69GsCaPe6mKKn1DBdKG3",
  "key5": "5Do4XwDx6kSyLVDwjqzqwy3n3ZoHHuHfF399jtMpQfGGgJGasnN1oRWmamUbZZiLcJLRcZY8ihPEohhuBYYmocAz",
  "key6": "4LzciBFLi4DEDsXn5zGeFSqnVhHMdKHnQDtwBntqBZ4TKduYZq7n5wZZyQwKgLgZs3GYrJTD52anVUqxJAcTtCpB",
  "key7": "5FRij57YTP7gP2hKjEyKovLtuuQaMHDZQiuSp96xhytY1fJsvepq9DHbkSE21Cojdp2Ay3CyfCYbqJ97vav1miFi",
  "key8": "2J4Ak7zWBZANdAvuAJLhWuGyRT26fCvsgSAMVze4SKDvksv8sLSaCJXvqRVLgxTKNHXqW5MCZsiysWHEYEMrrxSX",
  "key9": "4bAPwgxHe2xvyVGAkDEsCKxducu2R1UgX8h1yFacbiExmhzeGBJhvreizz6nYFmeEP2ToijKopXhKKUUZhJTt9j9",
  "key10": "5d36aR9gvASNaSVR7rU9S6CBxwAUFgHdQrWr7BfocMNwE1isx1ChabxL28fwhTUATg7nQ89Kf2sMTaJGMW2Aj8Nq",
  "key11": "3wWWC7dvkLVowmFBBqFyxft3q9iZeeZMC1fBA5D5Zdn5bAWiX15941BypkYRVqh1NJwASqp4kgZ6HUgQZH7So2kd",
  "key12": "4cLqJHZ9c36BLjdfgAkXxNnE4e85DUxcwB4QgRz8wUEnS2LC1XLk1oLV2zDsS7g1KiRv5Th7BinYsbbt6qjoaHwQ",
  "key13": "4oZVc5EzirY5R8ULM3UzGDYG7iwqjkJaUXHm5VTE2vU38oJk7y3aLMytiBq5viwX525Kc4gCvNPMW4h6HfqV3XaQ",
  "key14": "4fgquTfbo4vEMK8RtK195zY4m6SPGks1VFdCfPZboRjak7WeJy9hW4MmDBd1LjdkmE4VJp5Sbcoc9Jv2h6JcaPkh",
  "key15": "4sh7UwY561AyrcoEsUqM1MqbodQRirDEBoFLrUmjxCSF4eoqLWNTS4Hd6vA6yEDN6huY1LsD64ZcDQcb91T38o5S",
  "key16": "3MhAoM5WH4tujkxn6D1u3ZCnZkpfPVPBAwMf5BZ24F9ZySRncGeFS1a8LYLsVyk8o9mxnF7UNEjc9Ta2nMZamo1",
  "key17": "E7HiGeSKZwzdxe16sUc8Ryxkv3zdbVm1Za75X5SpzW3svRuC79x3DYuvcvYGP3dQgQKpAvWZ2AXXLcbxveC96AT",
  "key18": "4qVTkNjpDMJLAGRNxXt9Qsm7CMBDkuB8Ue5Pjm35xHnwqN2Q3RVRcTgerbeZh4jyakM2QpLtaP7nqoKKjo7bYP2e",
  "key19": "gayumBvibN8tGct1L6J7cGQWbfkRimpPXJf5FMp9kMH7MLn3caLZo1hSa7XpnVdLjHsrxQ89ai6ay9SjaKY391E",
  "key20": "aN1P7rkb66H9xaW5sdJYLZMR8sAW2UoKPZnShQKXnkaHbCjGhgZ3rg3FfNR4bsYLMCbMEtK7bUrQkhbaxjbfszU",
  "key21": "3M358CyPkDRCGyDc1nnVwfZbs85VndiwMZyDmdXLXtYX9MuPEoGFiJV3cncnyzBygFkeWaNiGzJKohEMSJWV18iw",
  "key22": "nzyASE3Aegq1WoRAtmbLKapvkDq1TBG4k5tAk6m44AMfBj1yDyb6xEztAUcYX2dTyP3EMeZjki6vzCWZ6uXWPwK",
  "key23": "iubcyPTqkd8MubHgw7eQMrpRqTXFPZVicC52WCugtBjGjnNQNJV8nS2cgEBt8WQ4RWQoeabEbwrjsNuAtWu1h7H",
  "key24": "3MnPWkPjY8RCzcgNgqvhZUyJuTMrmvTs6UMRfj6KUNkWT46CQPnMyNAAoupK3pgp1oNioowqk2mdk4ZtfyieRSgj",
  "key25": "zbnb6avhbFRabi57UvD5MWg4vEEFymRAMbf3w3j8KVGga7uJeByvrETWZEVcrUpmNsemR6Rodnrm3zWkV451fxP",
  "key26": "hFQLSThqGN9K3VCBAWa9oAKryvvHRvPNHh74MyMMBoxCthTBKEa8xcKtreNh9PvQF4UThgT218hrMLU32iPdnrE",
  "key27": "LMZMsb9Ymy6UqpZ9SpzFMxSwJeSpGeLAoXbJAAsXvgarsDbu8poDkKUz1Xdhfx2wzBFYvf7esgkDqsuokeEf8ao",
  "key28": "3Dq5y9DnGp8tHB32o38wGyjMq7aMAAaCjf4G7TAbaHUtwBqyo3qC8snxn7KqKDRk1TEQMTYQWe4zWUr7rrDqgwhi",
  "key29": "5BxCMpNbz6FpZP1r5k3LHLAsJ9yFUH3KA5uRinepQn8S5dgHhwHcNzoX7atpKk4Hp2ukhZXyRmmf93FAaYSXLssf",
  "key30": "4ZGqAZqZ9bavUsJej8hFC6tW6wWkQfyZVAiXPj6ANVkxHYbvciEDsn69hEW8rA3VkR1rrCz2sxW8FLHBuvEYxiuk",
  "key31": "61ccRuep6vDVS4ZfLCs63mCRDuuNTgdK91eDqkP75VBiomT9adhJ7JXFmwPrrsDajrgYvShVtceV8fbyXLJCWLxy",
  "key32": "XqTZ3DauwAz6n7xoKL4GvNa9uXSTgnZBvB4JNTi6mzaKFdX7jEn6g98ZeH9x7EuMuxZ8yxyoe6p2eTXZ6HRNsaD",
  "key33": "3WJiJVeZDyaLXYUP5e7ZHjz7YrW4DcF4ExNNPUgTRAGXQh1pikcKfvxKibu1dkb24ZVaM6QHdgiZkYNV4ZdX28Jz",
  "key34": "2JNEMzv7ihYJVs2xWYvNiBe4uiUSwzYaDwc9w9warSEC8brmYCZAqiZemUEfxUUCzdQJxkbPsNgQanmNEQ8J8j3q",
  "key35": "w56BzaMipcproQ3gArJ1y3uVSwJUc9jHMkp1hrSGxPdypqqkJ97qYrmGbS5gYnZjrYuMVCZbXoEJoTzHEkprkaQ",
  "key36": "5XKMZFzpGA7FgoqBm6sWbM4eZyVtp6AhvZmcCqGaLcsank9Loeh21uKskFzbfUJpFQSfM6T81y6kr6WtSKkPZudo",
  "key37": "36P9XW7YBxhGHCht5ZdQ8z9amPeKn8skPQdyDBoSG1VYHyEKt4brrNP2YekZntxJJwbPErGJrusr85nKKwSw7dF7",
  "key38": "3qJezpASKGA8xdy7VEnTMtKxpuCDbCHJM3C78x7JWb2fAr4LmGHsAzPbNyqgp1xUoR6Jit2uKdbemDQ9BE69yaTy",
  "key39": "Dy6Bzde1V8GjWVd7PsNWiennoMsf5HTPT6x8kFaoHYA5JiqwVrHzEsjYefTrkBn9KfXvHuQx1TcdnAkbKbnBqsj",
  "key40": "25Q699rGGZ3zkMzE4Coi8t4gWduU3N64phXsgEAVkq8jXYpGdNGPPUgMmS3vYhyYbf8UCrWH4AeDLLMmm23MHzXP",
  "key41": "5eYnTR6pBh41YUtbN51BcLz6Snjks2fiYEPpnQ5Vse8gSKjRBLzLGJ88xP8R4JgiX9q42ShYb19cRCiQfRvQJaws"
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
