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
    "3XEVoDzGGkadm6n3q8AKu44qHd7nFq1owSADZZvwpCADgwE2tCHp7WfeENzNE73vqDorMks9oNjfhZEGTxTqU1So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmNVLVCKPvRHZez9z4mJ1xgy55kVvgGSezZkPDcytiMPykPPwgUDquFajhLcFkKBagx4i276T9rM61XucopyBGq",
  "key1": "5pS4ZNLmEGXU2dhgyHdoYown3nj6Cy8ddiuR6fC4esGaFEtw9ZnFYdi3Sdr9KzRSL6DrQ3U5yfXFqyDUREepLe4z",
  "key2": "4LkNTpkpsKPNacSHkqkURpi9McxvrB5ojfenfcshFaH4PZd27R3hiY7DqXDA9g4mWpP8PAYxWHfnFqi1YkmLwZQV",
  "key3": "2aCeFzNQ8EzbQQ9rUdYiQssLrSiXvkjCV1c8XbusYr2tJUsJPTBnGM67o8wCD34vZKdvyFhFKaVWjMQQ9N1XZVG5",
  "key4": "XfazZZBJ2sRScGwHebMDWWoZSu3m5jpB3VraEopJpiC3m5ST9JEsr1oCegNr3tc9ZwYX6FZziGmXcbmFsHC8xzL",
  "key5": "4dKUPL6G5NySAPuH6vjqUWScRDZcCrzYtLDoNV61WDjyHLsK1WXEnsb4i3U8N4bdoPozn89kUkDbnPnyk8ZozSao",
  "key6": "4QfGfUcRuHekTbuj5ms9s8ebETyVnmSugJPbAKXWMRkqoM1fmzM1bGQGj1dJ6QNrwkXSHBx9QvGdASgaizLT2TNw",
  "key7": "3D6p5LW88XwUvPj6oisAYqms4GnNCDhUsCw8htZYev5n7PwUe63aQgUPB8u92yoQab3WzzP5LRPSYroNT4b8ha1q",
  "key8": "3JbmGfS2mpmYZCtcZxUgPcmVN9Vrp615dvi3i4iKxwB7Y1cQAfTXUWCta63YZKVutmKVRefiThAxd4p4kK4ZjjgP",
  "key9": "3b8RtEw77PyFXkXUjJscBH98VRvyACar4BfdKbH6UNWyJGoTMNwSL7VgY1zzHFTviZBuhsZBLGMPoPJa7uAmmvgi",
  "key10": "2bJZDXucbcdZKoeXKNobWZvHFzFQrxxq84yH5FG3DVMCrJpzcVrxPAytKE5ZFG9qkSdbQooHKJ9Vi4WeZ3DdGtnz",
  "key11": "4qBYihYAASRWeWLT6trwW5bwAxvJbF9cdBQhgYtvnVfNhDjgZhYeLduRgdp2DxQU612viTwwLnWkLLqM67CMy8d",
  "key12": "5E5SMdzBvxonoJyJEFu9r94y9YMjEt3Tr5Kim6yZHkx2dmVv8pZJfPawagovFE9JzvntTbcTTEGC1p2aRvsg6Fe4",
  "key13": "4a3M8TiG2wQGtha4KDk8FgrYGwt2qfru35bUGkQzRs1w371XQhLhg5mLobNF8hUFAgzCPFAutqzJzPC9J8maLcyv",
  "key14": "5jrt5TAu24K7sozxZRpemuBq7Jt7YhExAnsZR4g6Dej6dMC9HSJykqcmCFdqLSDCPtfGH9MfKhFcJLBeuQSyDiZT",
  "key15": "58MCyowVzgi7cm1dE1MMifWGqFPaV7xrFaeGCCRUbqK5KwY8LyBz49KLKTC4DViaXBkRsBztcPj7mHg13i1ZxiYn",
  "key16": "3Uc2DAVrKqNrY83A6NnuYafF4iymDSdgwN7viqTP6MkG4NBQFn6muspxAXMymhWcyCRqJzV4pD5adRUSxiKiVbwW",
  "key17": "4ZusyoKNiDXfsSPCzaxjXFRYNwK1ht8pF6rDbkoqmd72vZa1wbkcYQz85JUL7REiFv1CLaj78BUytNgE3MF33rL5",
  "key18": "2Ys65PpNAdF1yimxicbAdXDvucF6fsZw8LeeNM1DYDEkrUYQDseCJaJ4kyBkecXpe8nR4rTA7PpzXcpqbct8UG68",
  "key19": "4AHubScRAcV6QEqnJTbMwa93hGWr3ZLtxi2zb21zVZEeVD7UcYjmKU6CEPzzNLJvaEV2L2cujQ4aSK9cgd1NvtxM",
  "key20": "5x9RQRiqzfiwrZSgbKHnACY4xsS4dFtGeh9QWxLTeu3Gz8gNoBepojir3Q1jRqBJKhZuftgmHFoxWA69zN32YJ9A",
  "key21": "5sA7uuBTSVm3KF1RS3ES9Ans75vAXcmw9dLAVqRCbm7zjXxgatHDFUuxWLoyoKj6T6zv5LaXJGbgkwp2T8xEVByv",
  "key22": "4u49dScji9gEgnTsYTGKxkN7TpM9m9fDxx29ag3aSrkBHURXB3xipztSpGGrHkxicJmNf2XvJXPRGR4MjnGrwuaf",
  "key23": "5aNJMo1pysFcoHfnNPoxcXbNy6nzNpUaPVf5K4L6ZPBxuA6DRzKK1jxmFkoLtre1L7hQXDVAbt16zMNxPqDNgLe5",
  "key24": "5xyycekiAHkPn6ns1yUHubkGRsTWVacMz6c4vJ4Tvi2goPfr5RvQWhQQC989YD14XTwSoTtSUGH3mSpo597T41zc",
  "key25": "4GUeufUjagQ9wQQdyZ4udCN9FzM2taiFhyJ8gZS2fRzYgaXBkWWv7hPfbAXmYP76d4jTK5G7YCdaLMKHke2SYk1L",
  "key26": "y4F7zUKHumqNAavmLigEcnYDRvetfXrpz9hf6bDKJLDkWeySbPxEXrJw6RpDpoc9naaToD839NQsBKMVCKEKA3o",
  "key27": "3RpNbm3A8oMjKsZCquz8S9JJW13xbuNZvZracXTjhvEBLqWshwvpEy4kBUtcx5Gentt3bNffEWyHSgSDPGZozpUH",
  "key28": "4oPAoM3Vg31KXs7CXTciNBHpvq4h3Toa1GCQRc9zrtb9FGaT8Kj86bEZfq1yV8m4noLp6g1c3r8zcSMuC5BbDHU6",
  "key29": "56MXoH5mRCDpG3sqCXNP2Bgbf8XPWbivoX9VUW1nQYuUqXhBPFvSyDdW2XDBZSTxbUFtBRdoXxWUZQW1qThNouDu",
  "key30": "5kb2YYxN88V4riXNumpTPBesKzjPSbu9o26478LwzFh3ph3Rb3kdUfgj5h31ApneD8sGCzUXD5PnyNpACLRukqxn",
  "key31": "23eQaAhK7vbteo7m98HA8ighGExupMTu3Rh6gXpEpTewWaETKyArtE47MN1aqTGJU7qMHyQJ2J7sXrAB34eRpzEj",
  "key32": "3a8evAUvYbnuimXNS1Eh6JizgoLGwam6BBrU7GtjUGBQ1nxjZLgJh1LaFaowAf7hp89MxrMETiM7yH6ppF8RFvLp",
  "key33": "4utAg9XeSucUfrKurgGMUtbjjZir1HbkpuioQbghAThVPdTzxLQEnuGUf2h626QrccHLUZK4yVu6LprYmZkKrwvU",
  "key34": "4kWqbs1MwCuiwBcCaRRPi7Uxn22ww77DkFubpykybGFf2H3pgD4spDhKuieRcogPtPisZBofqNpXFzjcd1JkTyFA",
  "key35": "25dEQp6aSpxScnNS57CmMU1eG8nWyK4uSw2a2zbYxsWuxtBTKPLx9at4De9ELJoXiFS3BGqGM1Y2L9EfazTXiPso",
  "key36": "2hDuxFnFCVPrNJtHNfPy1z639NnKEo13mxZJbLrLXY2tQzsZ7eKnERftfH1WDdy38mQZ1je5i64U4wmRxSUocZzP",
  "key37": "556cegyfxZqHidWLTSJ48aR4oviQAd9VdVKPCLXj5ogbKD3HJM8r3tz5fvcNUFZ38fa86tL6TffoZP3ToJzdyMwt"
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
