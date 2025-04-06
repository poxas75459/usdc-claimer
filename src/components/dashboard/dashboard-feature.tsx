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
    "5t4gYzyZe2HZqmYEEw27HGiGeMPiaGP1b7wDpDpjkCemJ8uxF9xGS4kNhguu36bbGsB5DD5D3iN4RhbegbFjef8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4jv9vhfqum3H1Cy6pEiZoLECv3bJCKg9Ho4mgH11envbN3hRSMwpxdn8JyawXb4hZHPrXLDamPhkwbAZyPjqV2",
  "key1": "4QBA88vfYZmUWoF1KeAbQkA3VArR5Kzc2RfWZYjF9xfXHWjEB7T47cPDJwWzDc2EEDzgHBE6QSfkQULVPmAZo2LN",
  "key2": "5dS1UR4nK8HoZsR2MH92tzsPrt89o2r1wjCcepYuzhhhsucXpyi9kQR4YqGimu3M77EeAagAhVXRjKaBuyFzqw9c",
  "key3": "2BUau332v4iVQuXidktxykdpjK3Y655KYjyZsAuBJvzekS8rLKAGZtzjLa3AScgs13xZ43kmqhQywsU2hLg9rkS8",
  "key4": "5XgXDVXRPTeLKes6p5HYPujeJ9eKFNXbFraf7gUq6tbdNVMV2XbkucQEt71ZqGqZMZp7ySY88T4c6BkoJy4i6jbL",
  "key5": "51XdjZWyfGxVMeaxBPQq7sjQv2QPavHdRfEUrsFLUHkQdmEjjDffZADzjZBcecGsAhk8kdbqQqCTdMwMkrxFcrbK",
  "key6": "5CnPos9tQfYw7BpYYVo3DdR6LhJ57j3Uh7Dc9d6bhPRHokN1nS56iYps39mNTiJoYXhQUjcYi18otATNFuEVYmRs",
  "key7": "3ywuskaNKbqhkiS3qkzQuCriLFc16zgsNmpowoQt7CNvFSe7p6sb31hci5KY9ngRGkjwuXMwASxJeeoQFC5WL4tM",
  "key8": "5QhMaMrukKgAcnG3mDRwkrtnfEmdDPyvZ8DuFnJX8q5CPvib3NUs2N5dH8Vpak8TqLKAVg6wHEdiqfz9BKo7j6zf",
  "key9": "bHZgFDPXR87Gw7agJV4nv5EFqMGoUYSxTePcqftp4TG1wQptS1ue54LHs1VgqZRJTTiVwhfcrbQWgu5GLVAg33z",
  "key10": "UJ6K4w8keCw1rAY8bnSKGhQTJVnCDVj16WA6uZa1TpzF6E5r4Au14CndPtSXTrLnZCqtJc3NVbRTiVVwqtxSWVW",
  "key11": "61Q62Z2LsHtY5FtWmtC5eiHTXUBA8ViFBDid7ADhq3X5Rr6aYgVKHJgTyKf1MEo1fBhQjQ8f6KiUxcJAGAxy9Zs7",
  "key12": "CT2NAzAVjuVY5VCrri8nap1kJBSc3X29W4pakfWQ7jN7XSfLCFcjghWHCDfBSD3V438KEqaVzKr9nbagTe2YL1Y",
  "key13": "3Xe7xb8sSNGdGDx99LuSzwgNoKPZyzop5gztz3r3YAfWUq4UjVNcVL33riDminS26qwhewDQZLMCWi9XzCxBRdnR",
  "key14": "UGG86zXFHE7XYoKJUWnf1at2uwufXscNHJjArJp1Rf4t8dk6rSkwGxAXor7d1mzgvLitQ62XrEqd4UF3E28K5k8",
  "key15": "hneM3fDe8CQd1zCWN46MEMwPGwE4PTU2nu94feRzMCexkDC6B9M5SaurhmED3JKVWFU1buiFFfbNiiyNGYXuu3E",
  "key16": "3QP4ixSc11NkpcytdsT1nq7hqGeL36TPJPrau5Xp4WQc7ARiqEpt5LE7VrumA6jJa9WakmRK6sWhQDUyhaLB9dDY",
  "key17": "PCmqqZMe6XRqD65zpWsgZnCfPAP77LkQz55hYnTS4wkTZ6wJabg81bvwyDHEH6TrGpEQqwtGka6oaEkvbnTWUQU",
  "key18": "4XmPXE7UsP5cY4MyNBfZrFGVQeXRWr8ww7T8Bis3hK4rCQoGvNTtGuTxZoKDk6XTsXcDX38ZpWYk8UEYKe8miLrf",
  "key19": "5rhymQ1Xb3PfHcprD6BKg9vetyXbhieTF7iupq5E66dYs9Z6eEyXLwP1i5Pfzqfj5CXM9WUFZeNc6Lva2H2CxFwW",
  "key20": "5rnfGhY8PT7LbNRBFtp1AcUMCAGNjJpgjjZVs5KYkWk9icF4M1XpEqWxBJwUhxpCEebrwUdTMnj46jzhmZ1MzNjy",
  "key21": "fuGhC1NFoGUdosuBgmVQgHVWSk4ssBRrwJCx4ruDgCZSkpCdHr1cveTrfq8FAXvEcVHq8wgZ4z5YHjGYD5BQ1K5",
  "key22": "DU1sz1DkNv3bKJLQKFi5XcJKSYeDyDavoQ3zG5auAX27YFv4GQPECAv5RYNnb1VZeeitd9jQspPCDVQ8ZmfqExe",
  "key23": "2okxQq62jLUGwpN2KYcwEMzAz5Y21HcMM9B2zYRXQSu5dgQEaw6r3oGgMPbxhWtinXmxSKA3yBCyPiyAs1yuYJxX",
  "key24": "4gLPFpSQxUvFx9cWVECi3iGQU8YbH8efsW16EZgjWsNutm5uDhKPoydfNSVQihDSBbLVx5C7o9WcPXbehqCjDYWT",
  "key25": "byHAwUjZVA84RU5Rf7X4pyeLXBmd9GAqWmvXY5mk9LK3SBaDPJsQh9TZcjr3Udibostq7eg2SUDjx9ft1REQwLd",
  "key26": "4A3bhdDEWXtTWMvsuC5PigQHZ6GRgbkVweDAvW8UNASeLo66HQzXURew9yz6eMmmrtFZfbTZkKPFnWVWoGefsRqq",
  "key27": "vpthVbEJEDM8oHr5ng3doHfHTE7PGvnq8XRoQiUVkaB2xiC2rDvYjQVfUMWsWjpgZzE8LNqVNu2XWZakDuq5mG8",
  "key28": "4ZptgeDk9umhSVMRdWXPeLkVxYxewdUy8KbMw7LQJwZ2GxEkzwZmbHu2KGeKppA6taXPstt9RLWoCUyj4jzRJXNS",
  "key29": "3rbUGf8m2UhnKSRi71PKt1jzDM8LMwxNxN36hnSrFAhCYgomfM3Cw8bks2eL47g42yAwKacVyYmCZeVi91LgagDU",
  "key30": "3fDFnWrWKGWRz8hYdqbTgWh1mfF5LhHHLV7J6DPjA37y2gaanPYnzvunWgPYXvPoQP89RnvZSeRhN2MZKAZmXMyL",
  "key31": "5W4oFx7Cs4sbjYKhYeVVxmdjXt4mHGofrP5uRWFGyWACbKYn8yM9Y5HXwmqgFPYA5EJ1wzX8FsrQKepNxWPWMRzB",
  "key32": "42FGunHZWwwbnJiaLCRFBf824ZFqjhv2wqjMwbYygNr9qhHDqzswW8PHsVKF8A7JzcbiHUHgVKAZ5hZVfmjZZCg5",
  "key33": "4qrdFxtuyEm6gNRthY4gsdQqGWFEeoScxNdGoPwpjB6jHYKnoC4FQubxBf98WVLsjbCrWkFRGQSE6vwVihBizXy8",
  "key34": "yE4emAHgSVV3R2mofwV9D6vL1PJ4tBm5XEpC7Z4MwYjYZUkm83ViCxFoHqEQFHxrpRM8neesCW7CB4RNRaS8UaA",
  "key35": "3syS2B3H4gBkivEDHjUEu2izbMg85riCXeeHid2WCYBro54FsmDWp9hQh5f7yGyVNBwNQCJBhScXJyN4GZuWKrW7",
  "key36": "EqPrEfQcBTK7Yp6Eh38TYNkLTzCejp7ngdtYYGhMCdFFAeacgoH88cbZtgtdoQ5WpNSaNdQNYxLZHcjNmzD3Gn9",
  "key37": "3FC88EvymvpXN2yMJFTrFEnH83FYeA3Zhyd1kzwS9Axifdso2pbaZaBLcm5GP6PN7pvYBEttEQ4SaBeDKt2tmVX1",
  "key38": "ykAHgZVc6pd3tweZqU5Wf2W5Xd35wxgmgU1mbVeZcrKkEZjVigaEMy6Fwj1wHSeuNpJTLaH4NKoZ5TWTsmcpere",
  "key39": "4LBZXad9BzEU2fniJzZuHoaZGiqq9SrsJeMSxvY7Dq34RmF3z7khVLSZ4Ki3HodJAqUKTTtavajyJkKu8fzpZ6ef",
  "key40": "5mhtxhfqnpoDhcdfTxjhGpyMvpyVCVqdHNUZ7KXxagmh4U68N7qu68dw5NhRs5chV2yYFgWb5ZjNxhBsv9ju6AvL",
  "key41": "2LcPfLiWYBJmLYH8rrivwag5X6kKBwhkREzN6VJD4tSXTXxubNE8DLREX72uiH8adfuyLYpczC8Z1g3oA6o5fxJy",
  "key42": "3nGzDAcHjogBtj2gHmeVZZPg9f2ywuPeuGLpMKDrup4pR4ws1NoDr4K5AtEsQQhpmhAfwCrFwFgq9i6iUoSYyYic",
  "key43": "44iB3xfCb66eCGr3L669nErEsxRmGr9w4t1WFEBM1b4Wwe3RMMATfryrkL4RPvFWc7XmUobv7neC7PFfjWtWBiDX",
  "key44": "3UzjJqWZt1ftHKbLC8jrv9ubN7p2CCB1i8mpy3zJFNGNTWf5jS2ZSNXsaap7CE689FmhWzfaCnDPCUYy5qeJKYiF",
  "key45": "2xh8WobA3fLsehVXj1cufbqHraAWfxJ9y9zp7v2Sr57VJVf3n5gAVZvsts5nuKUQqGoBvj1quqQTdYpSGYBNuFDx",
  "key46": "3otnJ9FueQCqnUXXdMz9UyW3ffvVnDJtiXwWjjHUm1XkSoJrwGLwoPyvJzDbpW9oc8v1zoSkwGsX2p3zHTHFfUGc",
  "key47": "5MSb3R3MPH2o8QuJSyrn1J1Vx5rA8cKMifgvfKzrxzxKS8RHWm8edV1hzS1nw4MeN4v3B7UVUaHg5EBZZ4s2BU5S"
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
