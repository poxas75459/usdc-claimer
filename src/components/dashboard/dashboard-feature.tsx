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
    "36pNDw321vQZrtk9vqpN5WsQ7kf38Sd7gdum3b16BxQmufYKufLTF8Y5fgKe2n1j6HnvGWKX81uw3ZKsC982yW1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDXrK2xnKjEVD54g6eLj94sFGiCLYfckY3agbrpii1fpb5cD8f5pWrAWwcD4ZP9ram5Y1Wksbf8dG6SHR7i1DPz",
  "key1": "SDh6EEU54vejxHfFCktQFzWpRyWz4G53bGsnBtTAmFTjbg2fYAAynks5mDyzhoWqUwqdJX24EkP3U4Gp8t8pqGR",
  "key2": "3G3dWNoTmwPLdSL1n3SmGMHgy1d1k2vFHty4QMtCqg1z6ug9FmmLyv95iSLKfiS43s2zYXJieRnniob65UAH7Jmz",
  "key3": "rj37MN3zFm32m7JEgtViJ6jtwhF3BeKMAr9VW1B4u2cgpmSRiH4FoZWh2zDjRMrBzmfnMfVeXwAxgZy4GbdpRTY",
  "key4": "5mxyxMcGc5GSapprMLWNeRt5B1zvuoHizF5sp5rsUZKdhKnyKHSA5xCtBGJkXrS2mKWLRi8oHULLcyXdWNA2zaZd",
  "key5": "4eneuU3Hv6LD7nxjxC3wQPkpjuZ7XG6aEd6krPcYMrufVJLb4HUnFv2vmx9yajkLe8yiuNNwWkj5k7NMxZDoQC4g",
  "key6": "m3uzjbJVVL5Ft1CMMbwM4Tw1M9jPZLSP6NY43xxNhviMt9e7XTcodbTAzuRzJ4NEvMmgijmCtuh8CxLH2jn7W3X",
  "key7": "2c3VvUsZCXxxLXC1cvghowUt2XC2tLnaAwZUDusnYKuRhavXjsuxRy39qSNhkhYXr8ZjCGUG8vaD6JWuMshHepN8",
  "key8": "5UU2evzvkNvM6Qucdks8LZeNYxTEA8JBFpQr75KCsPPkpd4hG8VFwsSEULNZRe4C58QNCb4Ng2cQzKHzyLQ9ddvs",
  "key9": "3raGg95bQoz38c8Fz5526sTMieEVdV1uChXyrGfwTyCqJsqj2GR6KfkifnrAqUbKNhXTzX1bFd9t153Au8U7KmcE",
  "key10": "3HAZy5TTQUZ3VDenCiuxwxo7ChtSrSFs6oqCBYHQntKah17i7mEP7raXGVB3q46LfPnVKh8eqqNw1DJP73BLav7V",
  "key11": "4oH6KQrgEjnRnVsdpn3sNAuVmAkz7dPNxcqLSmMbe47kdLAupUnZRXt9hQAgkcJXiWnRHMA2du1ujiW1zULAmwmS",
  "key12": "66PNxrgWvRa8N5ooEadb6oBNNUQDB4ibsv6oigU5ahwpCwijhQNztXXEgGkMVHfR6w4LZFfgE5Eu8imXy4D1WBbx",
  "key13": "B9rRibAzrWGk5uhqu6JgoovpxnVApR8DTVvzmAFnqftYdAS7BmQXxZTAFixTk4arWeDzPREwsLShuJRG5QvxXzE",
  "key14": "4aHVkMrH2U2sQexqByvERhDSkAktwjZB8gP2yotpxoh9js61A811Qr92nVQ8rZoSLtR6ahv58xdTKLxADqYYnDa",
  "key15": "47ifuyh4T27jWpUfAAHD94JD4vahLNB24tVK6rYWjw32R9Get6iMsazzUzPeQX3mowHQXLDXFXkwVtCH6FSb1HPL",
  "key16": "29gqeojoHiGLDDND5br4u8sPTAQMq71VS5gu1QFkJeUFhr2MXgMnu8pCJYVNm3YCQQZsCBYsZKk4cfe8tg1TyoL7",
  "key17": "5V2v8BiBcjSpdJqcpaDk6umWTy2q9MKT2S8wJh8fd9cutNFpCUfpaLTvifjH6XnqbnrxmJ9rp6GKSg6cFK3VDEgD",
  "key18": "TCyjDVivCyXc3WiPFpBQmZHZn2gDGVdWTckQ23ndnG4R5yZZjXBrQUzEYH9t6pYQDBWyCLtmTYRUXjrZYBfwB51",
  "key19": "2ZXYogKdgN5erLM6ENWbyb8uErUFkJFC5S6mRbrE45S5bW6zzbz94Qn7LcZRMPDMNDgUVpVDpAKDVJ6Fe1BC3Ctg",
  "key20": "4s8sbrtCiEKhR2wkgbWgWLxk5ETU1DZMN7ZoDtsLwdPKo8EVAbVszzPJHCoY45qTy9DGhY6FCGULYLMyUHX9YYYb",
  "key21": "5e2zqQPPzrbWng1T3ZtDmnFsba1yhP1GRMxMEBafHmZs8BZnJNJNa8nhShPaPCoDUk3p6iBEW6k8ym78c7HGDFdv",
  "key22": "43EYtnKL3XLt8VfeewZ8A1yZoeVw3p53z3vFJb5ithYFrnW9byReHm5y1APaUJQqVhArmSc9uD4Bv7uZXTwtHMKG",
  "key23": "5J454eVAWYSQ5irmZdPS5RGwx7XgqmoL6uiaJc3WJWWiDzKH3T6fZ8E5RBWywGFpqRQtSmD96RUxHGxqAK44V6UY",
  "key24": "4fK5SDDVvYuCHyYfcaLBhYKkvSHgT2ePEMJK2xVDWBV2NadXp9Dmr1ksh21SaQBHrMsFRmU1bJgR6tyZAXZNGQ3r"
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
