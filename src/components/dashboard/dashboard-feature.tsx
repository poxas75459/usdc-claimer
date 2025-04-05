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
    "cHeEh3khDqB7LwZQvtuEfpy3sNCv3mQfJexKUqTrzrrxZvwjCaTa2DpXRvghq8AiqcvhLypzrfc7BcaGkqEuLCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25e7TdHuodSGmogA2PNWaHnydWr2XuJEzieqbMyVz976FxrYUSFt7pFFyRLUhLGkwNpiAxw9ZL7HTrL4eKz56gTU",
  "key1": "2se8Q6DKwUrUfB6D7RCGAdcBQRwJd6omcWxmfFwZYeq6bSMd64YaJ2pyqVR7nzbTYVy7mdUDmD7CmYVDtfdJZUT",
  "key2": "2atqNpRGG18xC2XiePQB2XZmpMjPQSpSrNKWpGbNxds6vkkVfRFoYz41tLtW4VWTw2fvtLu9K2oHzrWDGNizjRaw",
  "key3": "wfXwzGfcbeFu6ckTsmyvAHjD49wXLitv7PxMYECM53bBvePar6ewxrqJKr3q6w897w4jwXsZiRXRkEb9ZZQUY3Y",
  "key4": "5jimNHdm1jsaUS7PsT82UHJo8EgJ1euSADG2oy79WLM1DQ8jQADTQzq7mFMBiN7iEXxfr63dsM1y5osyv752bi8c",
  "key5": "5uGpZuDa1bWqHJaUv22im2tLnL6qzujP69NfA7dpQvGvn96x2MHqAEjKqqMmg2hh4b7nvGtEqyovDeKsANyMREFW",
  "key6": "4ozBX7GD7yZrjts86ALXhzQhkyEZXYYcMCV4qJzqWoFi3vR6BzuuVepZg56wfsesCiFbHri5bjQ85Fzp6T7sE7S9",
  "key7": "48qKMg9PE6UNd6w7gHTEJMNf2xNiNXvUsWXDFG4DiCSUEF1VHSZEry8EQa1ffv3iXJFJDvC9RRNnE8MMMqWPeQTh",
  "key8": "41fNQszBmLwW3Nw89QX3ivSASHhWvdsZYck1D2W8C7s4wnfWGBEjXwqV12HWqjni3Z2ZNGTXFz5N1TdUW2oornLe",
  "key9": "4GDWzaWCcPACGhiyau5UP1ATZJYJpiWLukqFxNsEjTjyEBqUJ1QMENUj1ZeAeYArSMNynDBUkNhzyQ6RTQgkQAJK",
  "key10": "54cFeSDV9bpmP75ANZqkkyrefajCTopFWjTrHC99bvuiHJmk9A87AnuMKRZi9myswxmKmkD8eAK893QRLZREgWPe",
  "key11": "SrSzCCr8KXttfjHfbeZJ4yqvoUAWqPbjWNFY1DMjKsswx6m4Qod2wAAcfJ3AEpR9SbMen34CZDQLx17LFyWpgoX",
  "key12": "4Cw8mcbGojhwhg3phE8sTKbn5bfrGMVSr1Dv59fBM3Ju8aUoGiHV2d9m967JZZTPKQedCMWxBf67JEF9PNMmyx5k",
  "key13": "5J5hnb3pGuzYMHXhFxAdkeWH6mFbBMteakw8px2qTZtw6ZyVMQZKH2o3bjyQJYe3s3xeTT6u9sZLUZUNQ9KQt3zF",
  "key14": "5J7UMztQGWw3aYdZAVk43wybKM7d3nuJxhNezsNB15mV1gmet2i7zA2qJ4NTd8nV25tHCkfjpPGFcH4WC5e61xvb",
  "key15": "5NhiBR8EfWbWQGCcxJTn2WuB6QeQa8Y1ZrNFVgNz3smCT8DwyL9CYnn2r7jJ8JRYFnhqporLoLvW5e6UJHhCPTvj",
  "key16": "rh6iKmHHexrQ3sC4u8pTZUESpYsN6nRHNFbUgbaY9fgjmiDyAeYTduHfkeGU9z4pzXG3Kj2Ag1NRUVp46GV7qpu",
  "key17": "3JCtpN1LLSH2jSmZnwG9yFECahHEu3f76JfKWgwxEfDGybYhEHpjitT6f1oFgbFpY37hLDcJgyZWYJJ1gveDHK9E",
  "key18": "4AsmstddZZZKr7MsQWKxxNiAca9NBR3dnJ9skFi5qfqnvF7Cz2M7i2wj5yaxAkgfQiuLfKhmH4PCpzqMRXXHN4NA",
  "key19": "5rTCv8rdmTcBEnwzSt9Hc5P8cpMfTpbbTNCv7JGiks4xZgzgePxBr9VuJEx2jDKTfGsUD7fmiUDGXDgaDPjKTgA4",
  "key20": "2UCFYmpGXpKq52r4xMPdNnSb1RbJRgDuCT61Xfer4hXGjvqKFcTv4sUdzA9CHv7DNjRaYb8opmiu29mbRvRnCceJ",
  "key21": "3zyr96b74PDKkH5TLzRaa2ibBSC8tKbQ9nDMUJEJV5PHQr3VmB1LvkRGjgS1Bs4CxJ36TqAoMT9Lqu4Gpn4Jf4Fu",
  "key22": "K7ZhSYXwwatpr3CAu5grCCi5KqgfBw1gwMyziQRpbQH6CCBb4Kwkg48bngXBpmsJuSnmH5c61sjx7oya8PvrJSy",
  "key23": "4X3DGucCHEWMuEVmVmZX9dgd4uKwR2ajwFMd729BS2yCVTm2xUyjNANYBMBYkBvRPSAse3St9WXp5fgnkGT49v8h",
  "key24": "4z5i1bMSTMgvHNXKRPSFzTuvet2cyw3mggZYA5fJhba98ZNwX6KJ8te7W2t1zKpJtKmphExe9S67e81PvAm5A2yw",
  "key25": "HrtQQEdjp5emSmX5iXb9MkizhTTeFudnviPdHD5ip7jhgLwrgkECLNb3sqvZRfkRxAknqmcGf65N6yuQ4f21a1v",
  "key26": "4SdGTzow16kSYNY29jwkXE473NudUsNNA6PfWFEvBehHncuhxABTingSxm1kKcJfcF8FySkFZfMokSZumC4WZDXw",
  "key27": "5YyohgfoEUWG4AtPeALvnwYmFqJ5WqXNF16LX4iAgy186gjFQTvdLeWpcBQRLvL28Y59A5tNszQaAz2id4gNjgaY"
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
