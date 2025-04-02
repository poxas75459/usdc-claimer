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
    "2nqS8WGYamSyeGaxhubaY9JTVTUxKSYafVmB3Zr8uKZFmFXUapiWdCa6Grcj3RA2b6miG19EzMyZyw6FCcsG5iYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YBfbyz3vrw2oVx2gVGc7BhdcEskB6qCngVN5Xx6pEyhnMJ1fZqp5yWsj8mh4fsvkQ3ixvLY72p9bsvAebcYpreN",
  "key1": "3YA2WyWXSmJ2Ugk1bHG4t798eFtgcQKXwRZNWdqzFSxWUFfztuGLgrkyWXx62PjBLrhRYKmoMhLAY1GrAJm63Mby",
  "key2": "2C3qsqcx4PDW1rWZwWtPMGzgNZMSXBbUkXv4noyWrJiua2gxCCRmADs9B68VbzFNfDsneNrT6hXZozCoZC55Ljp4",
  "key3": "35BCTnSxB9RiqJjwK7Gc4xfMEfePD2UHJQ8o3kfCEHsSDq27SmYtqmzFwt99pV4bt8L5nkGUC9Fpgb4nXsApQLYM",
  "key4": "5G5AUujXPCkZdNH38F92GEh5H2bUTdUNmCmV4Czmu8Loj9tZrYMyeXjw3owvTqdUTZDikEDaCCPA1xYuSPAdyqpP",
  "key5": "5AP4HHSF1eWz3wgbsff9Snyn1PPLDDvh5dFboY5BhmWwSRMMH6seN7N6QssAroTENaV1YUnSmt4fxQTbTPU9Vn9L",
  "key6": "5uBSDXhfdWjctiTNvs5Kfsqx18tEMoUqtgCYowaLRHQUGy9VLexAvMvUcAhXB5FU8tt6L2LbR95SCNjBGXkwGQcr",
  "key7": "5RxchYNY1ru7qLvr51chjfcdiKrFDNj6sKgMjYmGouXD2WeWzSSubAaasFWgLwZKt2bHJNDrLHJKjksYZWqrxNwE",
  "key8": "5aBc4gR6ZoX7pLutatxcjKgD2dH9ooxWu3TkodiJ82zWQNrm8VJ6fmpPYUwQMnA7JvYyMB4av5UUAF4nXhEh2Rg1",
  "key9": "5sFsEv2VmNVeXYhuwDG8HWFcmhZMShXW8KFLpbBqWnUKcJz65YgSPXyp6fmnqSJ81rBeFNQxD98693Z57pjneeLG",
  "key10": "58UVEkLpk1h2m2GfbbdjjuC9zNbCVU5YMH2xwjmhbtzizqS7dU2SDX47etJB66KhSBbswjiYExphiPRpEr1pSDr9",
  "key11": "4j2ubdmtCkA292zcaB5z512DQZZ823XsYt2wYwf4FFcVUG541HpNnnbC7L3Lnapjq6H7CDzFjJZiopFiw1MmbzN1",
  "key12": "3tjG4xqQv5GWLLoddRsyoCnoKJFLRL6UcmFx2Ysi2U1cpCAVG3U3MBAcawrH67oYjgnZ1wcMq3czQJxihnBArQWC",
  "key13": "3mxppCT1pWWZy86GbSNHQpsrjFw4j9w1VEq1pbjkFYqi7odaesQP6xegWEcDxaNgTfBAeFaLnDE6kKAP6W7HoNMz",
  "key14": "2V4nK53aav9cuyAgUsF5hCLTPMMH6J64baDNhX2pLsaA5tWvt6ed7A5DB4B4Aw58n6vTmqqNsv9YEU997pmcvkdY",
  "key15": "csT73XkWYknuoJ8QD8FBB7N3UwuY9QWGaF695ZYNemq2D2i5Xt2R6s6Sh17967vMaWuVR72MwStLH6ewufboTTC",
  "key16": "2fBSawL2F3KKoypfqxvkXo4hkF9seyJf2Q2oRWnBJaDkKSPd4guYoiVGMVTSwLS3VwFkbiQX8fEy7DyG1aaxpgbK",
  "key17": "5WDj5RkHedyMn6rBVeNVMXZJUHoH6RgB6o7brEahbQMx4RtNdYZzQ2TLTci3qnoXNPbFzKtgvP9Ac1puAWnaBbKh",
  "key18": "2N92uhP4YMHZVBifsNUTVWjTEDXzHK1Mg54fyG4ayLfkMoSst8BjTRRPdDp6RNrNGzcsZRzsnzbBfSC4KvZwkPqR",
  "key19": "5apBVMmL8Hz7BvksKppUrAXZZnNstMTygdE5sWJxcUBZgb44HR77bzU6omATy2syTEnTUDs7DRqPwdkZ5FDeebmi",
  "key20": "4948HVjd93eydNmjny4Kmy1CMNhHMg9amRKzLdzgRorEo1j2QwYhYz3vNa3izkf7wiy1XhVkVDite4xT9SYfujjY",
  "key21": "2KPmZapsk2Zop6KjUeVw99YRwGmGVdNjpUP1vb6882ADR5vHoG44Be2Y5nsy1PeUpmgWb7CBwGwfcihRBBqnDvLU",
  "key22": "5coK3ZHXDnz7QY9HHZfz63nhH7bUVUrHEcNTTLhzVxueXTiahrLAdwzyDtsZW8F8HR5QLycvytKayxR41Ek4z9LE",
  "key23": "3PxwBhMfCLUYUJgj3afaoz1LWnc7S9YWYvDRr8LEwpUw2k81oNZ4nwVwUbRLnNCd8hoAe1WSMyhPzpchMdah8s22",
  "key24": "4oxTdjnBEFTDR9p7ZYr1JofDR1K2V6wBgMjhoBgpBBPhxAvkc8Ek82N4KbBrn5Dmenr5RjiBtGQbJZREMuYHewx3",
  "key25": "2J2CWD1HMx8GC2sPrDxv4UJFDBCkbYx6jpASf25BgJqxFC48jraJWHk3NnrTivcsjoW7iyumfgmVp6eS7hjRihQV",
  "key26": "2Q6eZKW35AVPiK2h8xwZURVh28yvf7iSgRh8sKFus9oYMb1DPfx6BMARg5snDKiTLH2MeC26UhATvGtjHP5c6xFh",
  "key27": "4bKKsSs613fFKwJoQndp7xNfvN4c1BiVwz6DmCdiA6Z9Tr4Pv6hDvzDaemSFpRaE845N9VmE7fPttMa7nVyKvAta"
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
