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
    "2tRo3qixNj25YGNbruMrPaga5j5fHmzcqZST78z6HW3HgCcLt3PoYVN6T51TFPxwfi8v8FmomH65d2uHkC3FGqzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8QXE7k4nDFZHcKGuL2eEHSWpEZPHyXnrukf9rkfbdpXgZeGDTbo883J8KU6Ugd7sC1AreduxiUyB2SZzunadqwG",
  "key1": "67eiyJx78fnzz374f1kbM38SeW5BTz17a1ubnZ18qjrP3Ff6iRbZxMFKZaLJxgVAkCEB6RFG3reqsF1Bbg3LZdgc",
  "key2": "3iwLZ1kWS7C7tY3CKKS5uPCQhAgHJhTjVifiinH3RYimjVgYFvGU3U7pvdkeKz1ufbFVnBDi18Y2zK7Nc2Tpk6sC",
  "key3": "2Dpj876T3CUt4ADcDF5T3sMdkQsBe2FMdp9BNUX2eV4T6gubCxSzmH2jLrVy1UxKvzfAsU8Byxz5nJzQvUBD9Vwu",
  "key4": "5rKamfc9W7mKq33NmNgxXSCuXEuw3h4BK2RCFwgae1DZsZ5rxK9mRHCgk1KB2K9GKtsSqesw3BZ1fBeL6NMvvavy",
  "key5": "3WPkDd14AHWDTVANkdd7SmT8Bzcctpb9qthroaWefFLiHXGzAdP6RU4sfwq1dncnrzYwzRDpKJnySqrf4w8yssBd",
  "key6": "gQfQNFxqWV11GD2eYVc3fAAXyQWEiAqLvbBQYunjDoAZyvzHDpELsh8UzieHdFLS7oAAGEMdxKAi18emkYX3byi",
  "key7": "5xMEjz554oe89HgGnJ9s74RcDAimK4MQcBLkKNqWmkaF89EbzRpkvkYvNTcWTZy4zJ8GP8sA5V1VPwP9BBW44M5H",
  "key8": "26PREwxfJU784KzPGqCFG3vBSyJ5kbvqtgGC5JBgVtJdHJTFdL9g479MHdpudHp8m8Gy1Ra4uv44hhh1UcAo5P91",
  "key9": "kq1pxfB6XfFRvqE63iJzaaMw7fDmHA2CpYMv38HX1tamnZ8A6CzKoZpHn87oamZ19Fb6zKibGjKaf5pj2ynUscx",
  "key10": "RtdXpG3wwdqg6qCocvcjfJmSaR9LMDBCDTRSwjtgJtXzQ212tBN6h97MU34z2DPNAsMsYoLSjna27D5aSrFEZeA",
  "key11": "4fRnMhczYUUXBPvDiKKUzzESM7pi7NvaeszzHTCTBwUM4iHLFWe16GYFiN1YZePxEkYHM3wHcpzurkbjSCC1RTev",
  "key12": "353kh2bV4Mi2EbKChZenNdaPKBVJCgHJbhjHqFqpNV396KiM9Jg3EhC11PcanJAb2LfT418GJsr9kUJzsSGcmRRC",
  "key13": "5ytyTq9pxDyWX62t6qz8yibydBYtf5RhcvN1Hdj96Fzx3jWjz77t25z8HQoGmgLL1tZ7FCeeE3NbD2qxJNfwBq5Z",
  "key14": "3QhAPtZoorLeTmu64ErRpZqXZuPHzN4TALWfxfnFB6cbPMrB7VRpiHNiDCtrVR4XxhvoumqvdqFMtNizJkPfnKeN",
  "key15": "7gP5ByA1H4jSWRhkbUyaqHHNGgzJ8dxVUpE4sgmEvrbGDurnvuqSSepvHu7t89QT12CJ4UebsYTfXSg16Lo5qhC",
  "key16": "A14CbsysNsEV9Up3oAFXdJ5s349J4u3CFX69kutoxJB2RCh1BMXVkFKQFRHc1TLnXqvmgwiZcFP3mMqraY6YW2f",
  "key17": "4vZQKvmKtMQh9kNpu9G2dwS9LWZUpdNbfHjiXwSmz8j3m9Bg2TCHYQ1dmE7HYRVUQxKbAukBYzL9VMvAtDjut3Ad",
  "key18": "127CE5fnNtmHcEicHsodSsSv28d9943TCYpby8kAmfu6jYQcEHfVC1SJCDvdd6Ja2CbU4YiGhxFJaeiQWmpmoab6",
  "key19": "4k9tMHEYzVvh5KSfd76QsdmkcVmxgwPJBCjUPE1A6Kb8wp4VNwjmh9PGTP9aysxUa9FxKgRV4trb4GpYt8C7T19X",
  "key20": "4N5Q3odPKDJKcgbPdyJchreaNafVU11efF1beobaT5y4HwVESptV37CLhVwxjkEh5CcqPu9xGqemApctmb8H3LnM",
  "key21": "23D2FwewiyyNQv9ZDjz5kNWN542JamrybCPLrdU8Nnq3LAb2amuYgVEv8T8oop4AX8uka5jfrkCXnqhuvM6kPBFk",
  "key22": "2L97tRuznGjd8iHUEC6uQV3E4zGJFwGwUU9AqBdBJBAH1vG4ijqoAJLkCvDPGc8Sp6AQxkiTtpssrGTcRFgjNxhD",
  "key23": "eWf4LR721xuLmLYQqZtavKFFPh4GVDyTUA6pAgpKgaPA7tos5d53frfye48GoCjufzzqT8v1dD39PYFKdspv4wq",
  "key24": "EvALBtYcu7XBhJHRTSRnFNoBhiWs8F2VCEq7pZd9QSauYE4ynPzae8on9v2CyNNHPwQvXQKEFnJfRDUE5PVbDq7",
  "key25": "3SPPvbAcbg4sSFLJKGr8XEV432qTZD2LMX2z6DLKEx2zt7kxgZbf7z5wGFGjqvy44EXfuayVjttvGTi7tb72huwm",
  "key26": "2YHLE9fwDies8qUQRUTULuxwBaSmi34Xo4sod33kDWz4FDRmQz11QsmWK9YxUhZAsSqCKD9oEyjkSjTUpWouNfk8",
  "key27": "4Xr6VZU8ymADP62oFnGUi6xUoyWZfSZv6CFrStQmp4ykxvrw6KqCuDEK6YJWZYgQ5GfEqvoCv26G62WyEsffiMMX",
  "key28": "2YQNkPV1BmuuYwBHv7qF39TdmD35yi7FchDT1r69aBrj4pRCYeYr5J9cUcp6jB3Tmyiz9DLiW63BhckcK8FtZFWF",
  "key29": "2tz6urZQiyMSF8d3QMdKK6Uikd6t9VZAq56wCKL1B8JradMKtSTR7KagBCC3GYiKEHySgvFuofyGEBSGwpnXYMiZ",
  "key30": "4doFgV2QnMhVG2zfGCCUhg7tVvwPtckVuyVm46RwyJr7z3Rd6wfiMnC3qEA9nocU1xCRMzoTQx2U1WmdgByB3ogm",
  "key31": "3wfFp2GC7sJJkWBUoM7J9CLnjtTzHM3yexZFY7RShs82aTt6LCQ8hwwV14A9SjkEbecXwi45h9UGW37kjs1FKRNy",
  "key32": "5mcP8jsG1KXMfU7Ly9VdPVb1gH8CCsacxkyReNLqngP8KKJjXqCB4bxHf3z3pcN3dCxWayZgSjqNgLPjVQpZobsu",
  "key33": "f6aWbGBQdsm1fTQeGjnvKqbtLu4LXt4RwS8UjAZgAR6kj45WApVpqaunhSgVMM77y3qo1GkJohuvQDjiPAfyJPn",
  "key34": "5VG4wrhCXE843JJwVT3dYHYu7GbdsCiSEppNcfYC7SikfsFX2VTBf5H7nQYKPkWbfrcmWbMD2T22xVmTELB65sAS"
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
