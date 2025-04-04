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
    "3aFjHm9ZnQ2ir6Mf7w1drrDr2JnGff4E59QoTVnN4ctJ8fGaT1oh4EuhdxkjC4QQTmmyMTKuhXbVZ9Aq7fwE6wpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XdRLDLEWMTFN3xLKhfMLm4hfFnrjkj2otaXdWSpWebWjc5u9fRRe5EntKZVogeb6K4JmapEEQCcmjnEhMnMQtL4",
  "key1": "5Nn94dt2dbBxx6rgfvx1t7nkNvx9ygigcnpAc4RST7ccSESVTyUouosKqeo8H5JQHyN8Cw3kzbafPJh5iPzfDWMx",
  "key2": "4mAVZ17rCCCDjJsRSFLhe5hX7LvWk18SJnr22R1LEGcYJndieYqCP3grgGVWne7hSRkz3o9ia4Bea2kz3Z3gHvkz",
  "key3": "5EeKHy5CEbuU64rQPkBimU39XUAppcELzj9TtFwQMokqoLmJhEjDhW3DTvXGsS4akr4e8u1YB6YCKChexbUU7MZJ",
  "key4": "DDumJ2Bpu5dASA5sZcBP9kUqLJByaTQMr4fgRryN3Rii6xGxZsCZN4uAKyz89V8X9YqR4Jpo1Fieh7YkSU2Panr",
  "key5": "4fMCRQ28tNKcshF8KSxC5k4YBwittEWbNG5WhkDht7qsaHBvKeiDxZFm85edsMCP4YjRXEiLZxQ8h8Q4DzUqDWKQ",
  "key6": "382cZ57oRpvyQ7DJG16E91xXXM5Rpu1eTd6vDZcdQU9XfwmmfbY75a4sT1BZrKQMjD7eJQLpkFW7Y3p394Fo7ZZe",
  "key7": "46hdqJSgWvS2xMMHHybKfTzJnt4QPsH5YXZpGqvdR78TQiuPLPUg73jfg4a81baWpubKxzfCYzcoADghDDmCBWNF",
  "key8": "3Xi91HhnWk39mjGTQvB5awkrJK9xCExKekuDivJ7zS8PWB1VvMkebNMDXg4SPyGVjwJ5qx4ZHhsmQivzZeLnRZr5",
  "key9": "4AynsD6kt3oF63vfcA8RGQew8VCfUe34ZVizdavT3SrNXSNFs9BbkfvyFmKn6SeNNSr2RiexHwgb3ifxvfNgqKjE",
  "key10": "2HSiwCXpb5c6buGVbHmoEiNrCkavXbKNZfb6BNxu9qdjpzBBFkMPX1pQ2kddtDDcw2uRqbpS9qgcS2Hc793hjtvw",
  "key11": "3Gkfgx6WWqAUSoLqGGRyuRFu9jGpzLWmjMSdkgGVL1oPENf35crnU8YTEqxaCBtdEMNetP2nPuTHRJb9j8v7oaUT",
  "key12": "5cJaShGtcXeReMSsnk2qDrFCqMbBrH8DyeUgKitihY8JGrxCXsDuwxFk4CHUTishGGmsCwJcaq8zNUAznPesirzo",
  "key13": "rQR5P8LZ8xwpfSEtbpjz1XKYJR8BAkZd9e3dyEj6yFYgnngPQkzUcuoBWMMj6wFnjD5LYMtH5z5cWYvKBtmZ4dW",
  "key14": "4m6k3EM7h3neoj8pdgvo9TcqdSxipfZd9pFqfaSgaVMizM6XPx4VTJuNTkUTKPAAazxgBFRmwKJd9K3C52y9p8jf",
  "key15": "31bn3miviFhTChCvzNQHKiq9XM1qcyXUd2g14ikqJbnJsV681PS2NFmv9YwZndyiy1wtZM3DQarENzazSNSkSgJX",
  "key16": "sdtukYRAGCXQBmPfz1V1X9uBsmhM5MLvQpmmXfeLfAab8xLaU6hgwFMwuX9wncHMfX3EHVmkXaHakKRBRsoZEZ2",
  "key17": "3Mm1mUbP9hkgkm63u9R8rSiNqjW9wvvUakWgzEUY2Hh3UdR4z9h5XpVLLrYAkrxoU2yy23mx5fNJEMRRwwiDoHdq",
  "key18": "mz17JTddu5JSM5A56sncn4WDdo4SuA1WaLetYmKNHkQbQhN5ZBxq5pKcYjcG7pSyreheKsVdKfosyJv51hSzpm8",
  "key19": "5mcPPo6afqzUfeW7mb24AgwDDaZfNZ7hH9ydaWnzp8M8tE4ZAC8kQWceT45emBNmECD8NpgSJnSaW2C4Wx81Fi8X",
  "key20": "3iQT92X7SR3THSMXB21JYUJ133c7vauDe7bdek5cff4RwTemU6TJrtjB2Pa2s7e6fGBsWVYjFKNQK4harS9BNXy5",
  "key21": "5SKxQHSQcP3BM2ujTSXVJaCHZATkx3WAvs3Rgxb114Cfebk1R6v1SNqX3hdLsSSKfjympMXamVKLa6X2p5eQY6h3",
  "key22": "3FfxPZW2eisSs9jEbcFkR3mZ1NhozsE4vJbpdgxfoum9jWHFj1TEFusP62mgqJVpBQB2WSANsJP99dGd7SdomTp9",
  "key23": "4N9Qoztx1RRojZrvv5AM5wUqxAsVcN2mMJn6zazku4MaT6AaDgTVpiwex8MBryjjHnz3BKWYw1shZyF8PrBsj9Jg",
  "key24": "4UsKk1Bo4eMZGE4hDHaxaaQ8Ayuin1aJCtANEy9HQjJt6HXQHPMjYMZzQWgppVAr62JSzA8dwimpmV2J8WeJF2Fw",
  "key25": "2mBFgyW7DRUsUR6htewp8yvHQ56LoFWaiejNFnqERkdr7bKFSVuQegAPVDGCmmP9sxQJHhr8ENjDHoC3aSWX7KYt",
  "key26": "4wjokARvxzDuhhWe3EcS9rWGR9hFStovBJu2CLfYrfSjSc37rdsVmP5C3E4go4Nt39m8CYqUcd8mQzyLA3vsdfar",
  "key27": "EQCw7M7dzYK6i8kXknkBzBY8ZJydxJU1CWPsAJu27JFcKeFSj2YDDZ7b884DThMFR6YaSc4oW4veSUB6mVxhzQ2",
  "key28": "3PTE2AiRjpAmZ3NYBnLpQreg1VQmPVdaKj4PtY5Ewq7C6PLtRRc1KaAay1JZegkaKMhmEF3LK84g969Km73MJ4Xe",
  "key29": "3BXiuAiaGRUJkT2dDxqDWXUaHYGp92PbafADNsPw8Pz9o7vYmba4x4thHHC2nPMwoPhKCvE5jVKDSZzWxLAUJx7S",
  "key30": "rjRcyDejymUTnVxdFFzH4R1gAoMoymtPisc6Lf1ST9PcZf3q2ntvCfL8PcJ13LhBKuoNS1J68SDHLGZEKNVhHRq",
  "key31": "4HWCQZb9st9MxereRiNh6aKk886UjenhGUaEVhvCyB1KGngt3NukXyBb7B93VUx2QXMAJe2gKVuFJFJBzKDfvJwS",
  "key32": "h2N41LdbtPiLX8W67ARmynXVCbCUdos6BQRBgDSst25jdUUJuMUcuRPTvpAE1skMnGgCGoitdFWa9MLi1mKKoTy",
  "key33": "5Ya377pBb3HC6LMA5n85oC42Qap2jpZvfzTwvoTe6PyFGqrvJi6vRuNUY3jQbTbhyTvFZTFDyrXkXVwuGfGX1f7V",
  "key34": "66vmxqvi6GP6SLw4keGqVs8AKRavaPzwsBTKKwWr2TDRuF71Y6JffFNScNVoCL35BBgTVwpEm4VJKPRPymnGCSRA",
  "key35": "2rLxBdtzwizw9G4oXwhYbcGtRfhjBQCVGdfss6qiGZAytAcnJm5mTvSGCctRjaTFjH1aHxj7f71qQwhcbp5ZP1uG",
  "key36": "5KibTrbE8xiUZEo7Exh5ZACGQNzxHtQUaVbAk6u1wdE5xAWnCtEG5FyVbQmcxiMh7GtfPkuiJcZs4oi813vNSYZg",
  "key37": "3QBitTYoyYkucuYCVYRHbxDnEZ4pVxd65etP9fcZ1ZJf7V4Pr9VyvgMHcoXFyvsKqx44zUuTTd8R4ijwvfTYVQGy",
  "key38": "5MHdQ6dfQhdDrCQ7v9pDccMs77o7545XsvL7C2wYSkUFiDfKKgRMhBidBBDDm9yx9RjP9DkSjbr2Sjc75LNcBUAi",
  "key39": "3bk3zSBFxHgE6VeDp6MENe5MUrKjL2sAFzUApN8Rnrgrm7Jf7egQ2G7UCUN19SAsheXETdGoYYPNfSuUVvhYFvo7",
  "key40": "43tmY1xR5RETfR3zjEETs9FwssowFNF7jzVpGikdXZgjE7AKUaGJGYQZG6cHcyunVr2q4sbFoSmAp1Uqpy7dg5XW",
  "key41": "1CfzhwqLtbRi96VdaRVuNV6QwV5o7wwgCEPM24VWbpw96CZaCFzPnp2SMZE3aijj2KEGgb6VDAk7ALs5fo2T7fA"
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
