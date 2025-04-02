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
    "4XWmJkmZM5mdAF5RVgesnb5fFRKWVxJHawUJpS7XzqChmXtYE3a96ahDt5cR5M4aAiyKcVV1MjysuzTFPw1XAVgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUEoA7Akk4gnzceqb8Kt34s9HY1LJaPWW2WBL3hVTPYs2CWfYESwryRUG9GahPR6tcEiGmY89rmzUzs6AiU2ybY",
  "key1": "5ccUzpfdPejBkCQ7B1MDCzUxL81ReCMDJiXGGxboW7NKGPqLCS4aBQk5wykXWYm6wis5n1UmHgBGjhCuWhR2Jvh6",
  "key2": "3mDT7Vqdk9kYZX8mjZgKLiVWznge7kBCbNK2Q6xo19sZNoGYVNLkVttLdja7rCavsvfGT83wfrAdCYwJJzGQyZDL",
  "key3": "4m6xo14tEsxkBR2TBPuepc6yPMYfHUdXcZ7tmenJRTNuQd4xjsFfxTy6aZDPrP5jeF3JGSzmPin1iHsDWbtyKsUR",
  "key4": "2JEj3vsd5kWUryCH3fe7EDcN5SVzqC5vQY7ynPAQGJSBjXamX62PXSiZBSsxSdASxDJPv3D2EvP6r5zdFnRne4FC",
  "key5": "4sq9J6FcuokhSXBimFXwJcv1U4zdCQYG2ctUxRxsfxpr89HnifFR4Lo1QochXBHfSXddfox3hVhfuS6fS69QdfBL",
  "key6": "5SHqHSocviDEPpNouQRikbCtvKhUWegbNDWVGUuY2zpa4v2TQEFY4VAVsLgEYNsPsgJBxwQiyAwYwWyRnaLiU5W4",
  "key7": "25xUgJcrScUQquNVDrcuV8sTHGF2wt4qy2QxxkVmEN9ZwetAeQkTgZcc8TBuBtWYswRf2W3A38iWUNda1K1adzPm",
  "key8": "3vjp2zUw5wsySAcLaFPfjDgpUvTcUHeAjjFGMdHza5rdrj3ftn3HtGUGRmbsYpdqbU74d5p3Jof7uNyc2QGCLfED",
  "key9": "3SgsAwy77ADVJesUwbXP7ZaMc17eMgCijiJMcPV7FzN1hVW9cW4i7KQy721RBAE3epRv34RhWQLCzXByrjkr9wwA",
  "key10": "4NVYzGhAnFZF22Zca7TqpSYTrUo7aJA4CszcUt6sU675WBAQCFCaBEU5BDHudLczpZfjV51ozfh1WfRTuMx6KejV",
  "key11": "3dCxPNqCgBypvMEL4yzDWKSSD6yfXg2g5MxxXBUVCJZuNUsUkFGc6tA2MnMurriLEiDMVs1gtx9UTEfr87zHKEXX",
  "key12": "5ARVGG7VVLPTYhyL1fuAVcwJ4ZLmsnfugX9sa48JQULrkLuQaDzFWM8m2Vr4K12DcrG4HimxNwTi1xJM5Dkragmw",
  "key13": "5cYSCT5nZAZLD3XdZGULnDxq9xCAAAWTGZEpMYQuViszQLjyNtS8gHkE6T4Bz3bs2yjNHLWcLsFsNcNtJ16DwF4n",
  "key14": "5DhkmSCJDKJxrkS2kKroK3zZhT6YqUv9HvhKd6B8KrGFQ9T211UBbcGd52XwDTFS8sJrnVeofZWn2Mv1xBawCE6c",
  "key15": "4ogbMKVqPkjZtDEYZMdQ6b43Vxbd3y8TpcTXyR8gBGqD4S3HRRcCneECTQoyKynR3m76mFwGm41vsK29sJZkdYch",
  "key16": "3uJTbPBf5cxcwiB7UZ5fdkBzFT1dqmNhLQqrXKwNNHkmZ6584RVcjsZRahVhoGZudwkLXi71ugNxLUzHjdSVhubD",
  "key17": "2EM3nkjin5NjCzmM436T7BSDpyngdNHtugVp4agDsoysf2p5NM2FgbYxs8heF7Gvuiwco8Jim7GNKoyBCqXP1fzq",
  "key18": "39PVyP2J7Er7Jzpxn8YEtecsbxJ4MQzEjdUwJavfc4rUNmdKKgnU9Sxa6b5cfdLe1dgmAXPBFfS1z1Q6AVJTn8TJ",
  "key19": "4m7j2TfEaQLsPpHAZq3BcfXzfFUp4B4UNcnWWkxpfgHrXdZAvUNTbSjonDQ2nMHFKs1L4KN4Gg5o1P9KXCc12XoL",
  "key20": "2zByCy3g7QpRWvuy9yQ2ujq3VoUxznnGt6ejJUXvxT7YPa6y49WosKMeWYiiDKyoJz7v3VY6wbqiyEcDMdHfP8z8",
  "key21": "3RGet8MVxK78KjnDgFqmytDY6KRCHKZwDHo2A3iRjQh4Pqiay3d2LdCYqzDAkw7uZRb4eaefV9CVbdEQ5McVwc9R",
  "key22": "5ywb1T3aUhrHWBvPHhSLhxjAwa5F5hKBJCmAmyacTZCE4ns5FrN58XBc96tZDUsouFkUYWf96jbfCDFW61omdKy1",
  "key23": "256DgNfqeE5NMgniwos1a12bQwUQL7pSemdZ5GVvoJyhRNAU37sgoScr4TbDp6hcwUYbipJipa2mAcfQCktBhJWG",
  "key24": "4Lk2tM9nia25XSjWPSAK81AtSca2dtCzaS7w2EX6E7GXVCaFN1GSfNXQBXxHn2ANH9XpiwZUHgp5aHvSuxkTiSmT",
  "key25": "3qH1oHoYFjkKb37faaS1Cq9uUvuiUR325jPWQRvbA3jzdNjG3RKhB7E1Q4XP2GQw34cKTKsRt4yEqoh36TCgavNq",
  "key26": "2eZ2Ena7AhBXj9Sx3hDwknNRUzdPLUXbjTCHT9NZLxCgtx2W6kRFFK2yywtyBxnmWmbDzHL3uNEr16SWRAcVEGGr",
  "key27": "2WbDYFebv8ZWcRTuvw5stKfDG13M5Bxef9vJ5HCWBEAFbXFKocCrLkoUgrZ9aeV6W5kqhU6MCYPoG684XKa9eR9Y",
  "key28": "3JHwaxZ29KsfbJ8TfzNNTC3ZKgRFrqpi6xEAQXcZ3cxtwfoS4DYTXVgmPBTx1FqBG2q9gYqYtoWqfVkVvtyy4xt1",
  "key29": "58FZWyRQ9bGkowJurBwgrDg4DLVRMzvPWGTDLzbcbYHipAvjUwyXhLhmTRk6a2YTjM8MT7Ekr6wZQXW5gQzxg9rR",
  "key30": "dzanBbjG1thQDyrKdYD3tabmDa79VngFPVAmbsHtiuLF3dULRCt7F2gn4v4Eg4HeGu1qHRHGX4pHNCHdnsuS8Z4",
  "key31": "jemaD3wfVifE8QZqRQxPsudMmE3TgTZpmqmmwKXRXuKxxddJrZ2qbf4Ms3gC6BKoKxgGFmKLCefPnbwvnBEMQX7",
  "key32": "3XR9rvAthCsevAspei9ZtVRXCuTqc7EdsDeBFqtwoNf3PDKoyVYR5Uxah3keEn76rWAGvjfcXv5pMAkgQaE8AYw4",
  "key33": "TAeSgz9MBi5GVaDzBmv6V7UXKw6jQPKNYmeXAnvB4jdeqPzbcggh1QKkPFdzdTepboWtcLAexraQHukPCEFgXpU",
  "key34": "3MBEg8puCUMtHtyTeGRpX5ZDe7n9aaEbmeC3oy3mNNqo6zC3DEqPqnxzgqJxQ5M8eJgWiy4HvgKn8D2wyCgiohyc",
  "key35": "2GiWY5MJs4YqVeDxruwUViMjHnS5Z9JuWZaqPZJX3keTMu6kCSG5cCkQC7u2PZTQzTXATKeZLe7jXEETiNyrU6Er",
  "key36": "44mhPnYA2TGxgB6DDrVE6cUosqFBWViyeHSzSgbFke1kKnXoSLCdSpD2qfhWLecbzQTGQKwzDVLF6er8zsxYZDqV",
  "key37": "5rAzHBa1GgLfdaqoKVq5wgrUaRkUsdtKE1hwRw8iZ3qmETgaJzf1uhFsVxmRJQUg5JB9ww1hHqvCKA5Em9Ax4QJ7",
  "key38": "4XPFxkAHMaSXzBsG3szgYjce9eExsR7r9fJZ4kw4rg5sBMt9rJmWbkwwzCLfqhomhzJ6D2aQszaCurPTfAq2FLrz",
  "key39": "55QJhwp4wuTaQd1C3LZV2HjFgB4T57fHRr6J8nC1pYz5BXL6d92kbPFX9SoCToZk6dzQdHVPdSPPW6NnzG5kqTvL",
  "key40": "2ZpoLSRMJ5ZBQjshR4E1Y8nmvsDh9cB1jbxx3LGVJcw6Lgb9SDaa1yNpsEcAn4dJsDDrrQarEL7UyEdC7LcFpwbK",
  "key41": "34PYKvTCLwn4h6iqveCkutVypzravB19iUbgJeFqneYzMZtbkCJeFz8dPRyBiUckZqFAGEWpHL6VtU2DQjz1LU5V",
  "key42": "5DYFhiWoNXy6uYJUo74VtfXhL4yxXwScnagTdf7X8PNnKowWukeTWaDCGG5S16jXBXWmoamegHkrgC7AihafoV8t",
  "key43": "3meHb6S33iRwaMskKmbgqkaWo35MYJtRwwAA4nZ5ffwVcdEsSVxsLcXyVYpDi1wo3RX1cS1EcqGKkEPv9BEumPEX"
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
