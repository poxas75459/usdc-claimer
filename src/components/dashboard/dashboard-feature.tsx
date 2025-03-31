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
    "2vMbZFd4bNoQgCcAS5X2KQa367NyqA2NnaoUPwNJEKH2gVZSWjWeBWHT4ntvLa8RFW5uy37bLo2ftD9yB6FPpxJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYbbGkj34o3h3hQydhraP4mngf94Dm9QG9bz3Nd787iXw7wQYu5hc1LoCieYrf3QqpBHQAhsjdAwnH5fkv4Qm5g",
  "key1": "4DXuqJdHyAuXKuCNwaxDa4X7AGrefsjMQj4kMkdyZbdrsWveKVrbA7kZEf1VvvJ2wXhBoy2s3NsvhVjM26CHUcgR",
  "key2": "36ouCGfQgdH5jRWHE8ZKdXw8gUrfUSenDfNRFs2DpVm6znQBMis2ygpQJY6MBGfkRweiWojeVQqpYSLEesA456qC",
  "key3": "331Jyuv1n45Ek6TzMMyAeinPLCAmBgpN6kEGfjW1fP1wmXfVCdQN67cUiA3FoKgCsiHvnannG1pxSzxEZbVDmYEo",
  "key4": "4qdBGgft1ZnzZTE8Uor5EM4wyEFezjLstPKbHN2cPLqV29Sxa8Kh9tRBwLLAJwyHEhuUk36MZv1zGEvrbQWeCXUW",
  "key5": "5qzkAwdstW6au3akpYQWUfRRHk7Wu9jqdVKQAbYbRnA4zeAAx9wbpLHEY21iU2YHkQLesmzhkNEXh79ZAYWxSfEm",
  "key6": "2Cz8uViM6iAR4gQfSuJ8rzCk8MstEoWSFPHge1xWjzUHnjrpVFEujih8KuwnuKQWFfv5ozRdnrxBDP79wiysTgf9",
  "key7": "5Prgmn5YFVzX7Uj7uRoZBJE3kaTzQfVzHvp96jBnEMu8Ycy321LAb6VUa87fyKihbUckGHLVgXbdHetPUpvKhaLk",
  "key8": "2oJupvdrdDsBXK5vAMuHFHXkNVmFkWYMMybo55vHjivw8ccVegiMFATtCdqq1CdjW6RSM1VcSpXxzN55T34MBqm3",
  "key9": "2AVxJTatXJZGcrPPxbCLMGGjhsJJ8FztFBW46fjb9bBuXNmtQtCEkrzskwseMu4ivzmNepR3DYMW9fXiKKfYNiRu",
  "key10": "2aPXWU7hPn1WRLHLpKScJwr9LgFCPeXWedy9e4RYa8pTMgiiensN7rY99zT4PMk62Jpbzrrrp7utajG2n3e6SuBS",
  "key11": "3KMXmzqLJzvFePcMDMg4Q2Qnt7U3TzxqmjDYHyimD4P1GzV9PMrmz3JGQJfdayjU2NAbLudwKSprha9oggNy8Rrj",
  "key12": "3XXbQNpavVegmkCjznifdGB2CszGvGbQamBUXVGWNZYXQ9QR1kUZ4LcFizLZ9uYtT3ie3nrBXUvLtCNyXjvGhuTJ",
  "key13": "5zdgLRwxHswfjfHCBLfsp1YgvNh6633hx9M4wr3CKdzSr8iGWu3naUm8FcBNHtrG24deru8XBw4ugYhxJg9PirZx",
  "key14": "4W3f5MfsVWpRc6qL5ZE84Xj2XdUAkqxY5aUkNUXg6f7NfRyPLGkxtAPvpEgvZDuU8fDH4QjFuPcp67ijHDSWLC31",
  "key15": "5exjVj18kHZ1acqNePcG84oUWgHLF2hystccES5t9YpWd96bJ6dwTSfB7CJkmUXSGjSNHDM3VLmmgC4WrtpZZtYg",
  "key16": "2HntYJxHCE9jaJV5rE6ViNfSmp5WLsLVbS6Gi68ZD1no7pxxiUXQZ2UtSzgUosvapZyaWintKzbYxULpJeXaryJE",
  "key17": "5GWDrfeu5BVxq6nRKXrJ53QGGhMvm5SKFimse3hG2GpU19d1z4toaCZa1KE9ZhWYQm5cQk5s3gbcQp2NRp9WjDLq",
  "key18": "HwtSZKqQQfWB3jzsJgcLBwhv5XMsUwyErdjWLEhwKEsit3pp2sVSidEAQ2a82cRB6G2bGQ41hNSVL2oMCJsTr1g",
  "key19": "49du3N7gtMw3twqNQMk7xh1Wz1VaVTvppVXmYZ7Jhmrve192o3y4rMF3MvBdFCjn93M64haYTSqWqV2dMyqS1xri",
  "key20": "3PEvShdocGWU5vTfZTtF4HtQEjTir1RWTZ1miprggvnKQPdDEaiupnq1KHdEGKdAiKKazixGLtxPRCWYGhEWijvv",
  "key21": "4y8DTi3eyTytZTmxcwwpYdsgKcjDaszL7kgsY3AAdV8jhdGfRecGhL4Z7uprCYiSEo1DM5o1qHi8MopXp2vq6EqE",
  "key22": "sbucRXThabDZQa4M1MriqGg9YdLRqPC8kXxCDPHHSkZqjCTHJAVd8Lcfug69aUJktrTFNVADSwr1eLg8cTVU57q",
  "key23": "5n3fPqz6pA7uxgFmiJRWotRyXDoqKsypR1dX2frE9eYcR2GnrYGDe3ZDiY3eybU1ssxEUw71XZE9GfSzTsEijhmb",
  "key24": "2dYyFB6aRi1gEqkjj85Rm7Q79Err6PrYJtAAGbnt4phDoWfTS1MEU3vrVjqvoUx8YaHSBm2hDk9biSBWL7Tg7icc",
  "key25": "DnaGy1ojMLiuk5xNgcDZVr1b7zxjeQQC4SadoMJ5LVPNYMrgahZt2ms7Q3LSeWVPSm32M3bdTNDvvJepDWbBJLC"
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
