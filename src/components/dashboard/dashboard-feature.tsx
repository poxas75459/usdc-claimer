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
    "5zM5saiasRocVpwqcNpaMdSuahZgSGYZCs35kkCHDPMtsf7jvwEh2E4c5UWLyWZ2B3vDmqf8vixzba4RMrv9uPs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhbazuVjXyPWBeDPPPX1zPGq6GP92631i8FX5oPJUjSuxoKoVyhyeBadcHFgTcdNUK2XCjkHhYLZMCvGJsE7ryu",
  "key1": "5fvtfhtDZi2wuXWSspqUg7RhGzwc1WL6ahZdNXo6CueyJJqfNFU5UYfeHdphVGdTB3ja48VJy5K1wirJEmYQXEH2",
  "key2": "ibCzJJNR8pQeQwt2Pg15s4YN5Ujnrww7Yctq5fZZrzRi19HhKL2opHvUR3vBSRpfPYY97mkXKfp63BCwWYAzWmc",
  "key3": "5qxTndZb1LmQR4gLMQL2t2iuEMMYS7bJM7Saiti4u3AV4rPTbdKFkmg24EgCbe9iyTdMiH8wikPyo4fLhLGAynzT",
  "key4": "5651sfbxckhmfmok9zdS8ipmV9ueAFmfYWzM6VEcLebfXzYe4KSn5bmCF1SGRv2xgJNtMhEc5zswcQdcLHy4UpBZ",
  "key5": "UxQu8E4Sd3nPDpiVeKP4q8Docrc8ZuVo2gtYnnQiAQb4jRdfqooCL7NANsZLxk8GFEWTubfKEheAcN2TuRd1XbX",
  "key6": "3qZwAMUJVP5dUD2Ai93DRzqj4Tz3PbtMaZYEQuSfJxRkHiAeAoHwbEgMFsrCk2SMEpL7XfTX7dCxaKvz8ZN3aMbh",
  "key7": "6751NzyKc6LSKvBEpVgsozAr9WQxjEcEK4E7F7uaQwF68bP9eBXUZ3dVjk8VrWufoeKAXc1ZGQ2ThAoew1GdveSG",
  "key8": "R2QA6LfZpKuasAd6MAGZA9iL3PJ2RXz5GzT522nZ3E5aVmjZDjQ7mbwrpgb6H7ezJipfAVNzbzj81S7MutzmQQ6",
  "key9": "661BQ3cHbjUqu9shudKVDQHWffW3rsLwJwccTf6W8xQidEDEeGJv2w6xd82LrqRzGBYCQTYyP6JPHVSH1r2xKXTs",
  "key10": "5YiCxH11YGbRAYTjy5pH18DtoHNAYUphfrrBxLHqS4gEJPEfnCBLM1ofy4RWLwR7jKbSRZvqGpGFXuKZAK5nJq1v",
  "key11": "3bD3nh3YJqETCm3nqYVgSfMxm7yWUKPgVU9HpCQ1n7QuoWmjUmAgZ85vsDkw5BwT7J6Hc1nK1w4uba6iSRaMEzQ6",
  "key12": "2oMhTSCTKHgx2QZnqoknFVGB7KsC1Hk9kMUTNNyFLV2QEeu49HzyTrVNngUWADp5b8Xv1RoJYwc3UfmZ1jznSh8W",
  "key13": "5h5u3bxLTQCGAFGX38pW8HsnLFFJMSvf9hpnjch5m2SwdzvqM5gPDHGE7jUfsRvDYgFP3B2XSrz7jUmbg1T6MYSn",
  "key14": "NULe5KVJtGFFbJyG2S92nFaHKbRuznJKkvsjrozXX8nDhR44146uRZUgc1y9SGyNGUoa6ruddu2DPnRs8TqRcvL",
  "key15": "28icKtZJV2Yu4TShwGjt2Puhebqrw8bqmZF5odt7eHyqaJcYXG1CwndhUkCboXiJaLzbF77PZa3kxfW5Xr3cdJdV",
  "key16": "AQ1GQVCThVnmKhbwAcGxv5e43NjM2oiu5g4gDJNFMbfHTeUy6jELEE1mmhvKV8VZsQyVKvoFEeQJtJpahKrRDRA",
  "key17": "4echaMgWj1dayktU12pfNqwR4VaXJC3SJi9ATkA2wBQzegbhCYdQ4EmVakFP8omk5oChdSzjCLJBx2w3qVaHPqYf",
  "key18": "SyvWr1LT5imoJHvnv8kfnYgfnuC1Whs6vB3etqJuSoqzArfuytTmBkMVEFjUCReMzgg3iPNCCHN3WXhZSJWJFn8",
  "key19": "4MWudpq9V2Hqg6e7UTdEY8oSUZ7WYL3rG5uq5wHAWfcU8KR1XJz4zAXX82uHiT1ivrRJHxZR84r3b7Z7HFdN1acr",
  "key20": "LhWx4pwJPssShyJn1T4aqsnUzVmcZQUgBZfT2d4jEn2ZXrQvQg2KAbxnPVYmXo7nY7Yy4iuzUpBaEBo6EpaBN2D",
  "key21": "22TdYEnvPMY9smL8vs8LooydqFEhLr3CCXRfpLDmvcRfEAy61SvdagVXnrE6wfm16joTGdB8JSk9jaJACgv99WS6",
  "key22": "2QjBLRN3mQx4EUFNHqcHp6cXAKbgQVYNrgLas5b6o9jezhycsyurSLk1kaJew1wpyvoJ7MJ8xULpT71cCmcLBN7p",
  "key23": "4XzMZ17nKPnCbXoZTxn9cCdBzseMYsKsNj5rZs8g1c9qPXCuW1CeT4VZHXHhTpP143ttLcewVKKyDjFANtLKbYt8",
  "key24": "3qLY9LBHpYLdo5hC424DUaj6Tm8G4KzeFERmBAskJ2WNYqUkzNsSDppYW34a4JmqEdhXh1ieGxiqV8c1M3d6GhKQ",
  "key25": "4fN5xnhD19gcXTnmn4AcapEmQdbRFh8Tw2h3SUTjBaEjP66fEeZ42jW4MQrkzJtHs7MYPDcpCWA2iJtWij4pBG5r",
  "key26": "4KiLtcFD77ohkrbsxGYYn5oKfJvtiMGRAktKWdUJTBZrJvoZ5qAEcjxmHDw8gsi2sNY8Xs2RhzkTFVKXDA8SKdnr",
  "key27": "5TrBEBYDzgx7uH37b93u9DKRi4NTeB9rHUYppRibChM7YD4eLMJJk6bB78o61aGUojnpeV1hJvzxREc5jr61uwNF",
  "key28": "3wNZ2PK6qUr7nqd3FQLFJ7nNiwP3MjMhG7NVGdJ5zXBjfoFQjtJevqhWeAyEFMm2VLCs47F3VhQQdoA75Wvp7VJt",
  "key29": "58hYn3ds4PWaZN6hYz9Hm2xgG8Rtn7KfoHM8UZCSoqQJ7MFicunMB7hsQAzi8W3hwxVC2V9s1LBRmqh8aTdv5aPM",
  "key30": "D38zraGNua4XScLuyqxq5n2a8825eKr7F7MgNTA8iMLeKUiDRfoBc97oAXjfjqMJYTaFAMi6wpV67AdhbanPzvT",
  "key31": "oVJMshrf4WW7TPnd2Pdq9ukNgSHTxKBraZPzK7f6S6JpVaKJmBj6HL2Psc5KttPMZJJZTGw9yHzgyBYx5636wc9",
  "key32": "3V6Warq6S1qrRxfrUC9eXfCJmCqkFsYngn1wANFrMLMxZHMw7NouGKfNxyXq5Gem87PsjaCvtEPSAfb5KQeCEai5",
  "key33": "4bqA6baKzQHhph86bEAh6rxb5XVdcM1fGU3AQnWJqcoCyfPr9GQUNYeGhX3nabJu4YsrGRbq5L7vhPzR6K3k78Wr",
  "key34": "3Yfc4HnZR2FbszCZoH15kn6PpubgSCV3uMkmtC9foWrnnFXAYJUMfCGSr1sThhxDN3d3kwsTvKa8Dccfm62qvWXc",
  "key35": "5JsZKAQCCuTcEnH3BbX292WLB9npxLnrjsS5vDFZ22KStWSUyZxR9oVNRsfDekCk9ZdjURS3oAEPLcb7QKwmFrXN",
  "key36": "4j48hoK7ThAnxJJwWKKCtubrmnzfkx7TiMkJPZjPXaRRCesJDXXkxaNZWyXPsYy21fXzYsikG9BJzgrHx1k2caNG",
  "key37": "354E3jmvD5f4gwrXTkQv8XJG8e5F9VF7iQT9Ezs7L3sEsCzCnsf4fBgNJ2FGRnL1mcRenrvQ29pCiJsgtM8LGYSX",
  "key38": "32oEDykNVP9YfGfBM2G4yLJPhJVZEFGyRqxPkLGXqpFvKLzr8AJVTWJE22jPtMw34vQhLb2bWZfF1a4j6keG6diw",
  "key39": "3Q4i2hzxumau4dByo76SDeVMKxVEbAzTcJUZyE4u5S3VGMZuVJLswpRHcA5x9DHoSUDrVRMM7HBziRhjNtfzrrw1",
  "key40": "4vPCGfmMbRHn2vLFebBgY2UG2d8FYiZAsr7FTnGYSJ7BMaEeFB6QKYBr4HjN6XcvnTLSQxYsy2B7LRBnM7G4qKCN",
  "key41": "N24iXg6wBjBpKsyHqqHUMhsmKpjTW5K2W1kZ5dPv3LVBbeb7CFj8qiBFEwTfHH5wDyfRCnM5SEnwvEvoPqvuUKf",
  "key42": "2mNLVNvrv2o5nbxFWJfZ8J74RYv9irNvW9NXnB6rMo1WrsRbJavmXS5ehn4sC1UPvBaV8L57vudYA5Ggn91qcHC9",
  "key43": "dnt1L4SiK2bshFv5ffnovKejb7nxFXKS1ZNPNtouYBoWUiaqo7rddzzkuv8tBLzY34bSkHE5pF7mpcqPUowVTbR"
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
