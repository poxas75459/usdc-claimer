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
    "2rMmkogATBFG5kYXKfYCsP7YNVhFqjvhdAfeFx6WC7xu1fFeE8Kg446jXMUza6xhnbRWJQ6YNS2mdCJnxt2pEKux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25TS5ZvvQuThVEc58SLdxGerh2LFHoDBcWbTEnLuyMkUBKPpDtrAXRkFRZafX1NtRz7ircPB7XvfrhKfRwuV42BL",
  "key1": "4p5RyXDTY8uCPWgx9qVV3YTmWZhE3zx4ffmdbVT9acuHME1JhKYWtXoH2Wwwn8PT7eSvWXpoEzFU3iNmTnnXyy57",
  "key2": "jJLsR9GN3PvdRxkhmjTnMWKefQ7JYdUi7C7kDjU3VzeqHtqrE7NViVHqE4uTPYueJtrzCLZf6W2ZUYy8AsprtFh",
  "key3": "4kpdC5942XWEKJrLMA5soW683MvC1yyghWFwLuX4YScaDyuC167RmWh1cNv9Csz5dt8nJ3NgkFTwFV2CTp6py5ir",
  "key4": "2SKzrWQANGCJUp13DpFWkA9QZyVtuKWC7U2vBWLTCHFSzsrxU3a3S8MLkGscUQ6CPM25EcHPoo3Ma9oDaTHTNUFX",
  "key5": "PXW1xddNtmWdLuAwBWjLtyXSu7kfTqbztsyXH6JpYq5JjEZwsKU9gLnLCsEG2bVF8udQHTqCcXAvvjZWR4Wfh4B",
  "key6": "5B8yj5dYccE9uA1S8G7W89ZTDsMtLwdt85LGK5u9u9uznpw8DVqkihXToP3w2mpaiy6RF98ojNBLkzzM5kURE6zW",
  "key7": "53C87U8nHXqFfUFXpaQvPUzHG8j53oFUJH3i3yojycCSVQ8wBa9yjd6NgSyYQKtTpiBd7nR7CW2KvFbZQxGz6YGQ",
  "key8": "2mTZEpNGgGXwY7zBcgT9jd2Ytc3tiiEZHm31CvovcbUraU7qhF9mLtASCnMiEd1i8uhqFoYrmciyMAyZcactLcd5",
  "key9": "4JMBCodT3k173Lw4FrM9fNTorsK7DfHbc6pxzodYd6PypM4CGEC4Cfesw4urSnPazKeAhEnDFL7JiAA6PyQAfJop",
  "key10": "4PHvUXAAKfZJUNcQmhmFmm25uvwEfN8euaLtyJWyncrHcQAryTbbGxLuXYgUMds5KLsXii7oZoYStPiNQW5oxEAW",
  "key11": "9pmcNeQ3fsRwuXWckftyFtqSJc4Z3e8jnGYAa5wBApZqaj3PHdjNk1xL47aA9LA5Yjya5C1eaanZSJLUNnD14bp",
  "key12": "5dgndCcMJamvudrqXtZyrHiMSh58wUCs8tYJPJqoZB3LqF9nCLpUMdWqcsGZSPMiHT6WddicKNNgXrtmpcGLJUcg",
  "key13": "2cCVqZ7HPkcwbXK3cNtE9Dx5JoWGvM41TesL9Z1JnNoNoRnp7aVaAtNR7LTo7AjFoVEbfUZsuG8DzV2m8PhgxJBF",
  "key14": "2zFMWxjK5c1R4jiRz55PgVNTVm8tiKbwVynBaYPYhtABibTzMSQuVnP53woktt6SQ7me6DHCRgi7D2pNNypcohWN",
  "key15": "5EbHcCcnaSkEtQvbimqXBJGUSz5MMHWEvmG7oehNs8P8aFKi28iq978X4pH14DveTS3GuJY7L21TSSdFmhntUrtw",
  "key16": "5x6S3GwwYD8uuMxEachQDZ13K8evomhPcsus4dM4bTPeLwozmm9dCC1ij2Mw4p4yVisy1y3rrKapEFAfdfkZnZgd",
  "key17": "PTpNhLA6Yg8PFgss3T7xNcVM83cgqkMFrmDKbP77zXq1zgGuMMokPUTcq3QJwUAsN4i7VcuVediF6k2bkPmiy2S",
  "key18": "ug2rNsYLTnKC1GutbnBk4tdALfWcX5gMp62z8iiQUzcMZLJqrBqJ2GdDkdM75LvZbTLHEXAzUTNgnKy1WWNQJeh",
  "key19": "2ZTjrpGXL2NBjcLTJ9whQknXmbJMej41opLY82RjJufYf4WbDF8WSywjFnP3hsNkF5xc5rm8WtH88xamcXV8vmAM",
  "key20": "EWFzqv8JiTaW8nPXNjvQAzd8XeYM9WwjFkzeXFrk7W1Vshf7JpmWGagZYGAJYNctdRWXxAAK85auRdAj76VXS31",
  "key21": "5Dat3sFZBtMZvjVjPwQ22ErgxbvGPtTDoQpaW88dfQ6T3JUCMk1834fbFXHu2L3ppiYpAfJqLuCNRv2N6aKKMzF3",
  "key22": "5L14p2R43HixNzVccdZbwvhBVTwmkNMchG9ZEycXPo5ALG6pRMUGUygTduRjVgrWNSRdE1RWjPoPKsz1aCSCTvao",
  "key23": "VLbB1hBqseEeYufKqq16Nxd5CytYWe2fD9ogzZqmuSm2oU13FZKsRJSUBPpshJZgLn6qPgY31TCDExqJ4TPgdi7",
  "key24": "2WCCQq6mtqiwvR8u4ACbvKxdTh61HvgLsbnC9JynRQXYpCE8tJD73BgDQjikbgiALmmpCj32r3S5Jp43MiooimoX",
  "key25": "5oScHroN2fdYYhfpSB8CEiYmUw4q6NhziJGNyN2hYUYs5E2DHPKJuLTZRwVzipzQzUQyDjfvee9Fvfe1bmPZX88M"
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
