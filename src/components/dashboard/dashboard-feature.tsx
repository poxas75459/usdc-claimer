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
    "5uGn4QpfJDeHwxmCjsXy3TfBUgB4FvPJzE7BqpWKXasKm8zjW8FL7qj5WJwCnzhh171mM74ZxrLJh7NPkL8prCQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c39Um8YS946K4XEaTQCwTbSsuFCJ7wUZw1yserG3UpgQopdFbHHqMHn4b792X2veFTgao3buU8zDaDqKSRrZ9bh",
  "key1": "38XZE4wYptNmL27yhsfhUikHNwA159BG7nepHU4fzV1ybK3DDWY7igCtiXcXrMbM79LrFQnMGpA8sNLbjrunfE5Z",
  "key2": "38nqNo7YkVVxV2C7a8NFXuihx6E1UjKcu1dofuSfAqYN83kNwgbLduR6UP7Wvq8qoLCuvRrfo5Ew329fWoknLNMY",
  "key3": "4yQ3CRwXJHf8LGfqYoxJMSeptGDG4W6q7keu9XAnRC2spKPSMpK5LbTTxhDJ5pHcWbJfchDUfPEwqR2bBJG99N74",
  "key4": "2jarpGaNpRXotw1qDq1Rnp6smhbXCcUSeNFcwBoKBkjW3RjxKwWEzYmxsPYbGCuKjPXLmZoHmuBoZ818t1M4wnee",
  "key5": "2mQJMxqZW55JXnYC8Jo7yQUAT2hqJJfUrKDTMcKEADo1o1L5JzpW4SYNnk1J96GmvmRiZyiYHRgXQygu597dQChs",
  "key6": "i32LbG7gw7MGW4GG1v94SHua8kY8uwazQFJkxf6byzJurNTYbCGA9JTQYrAZYvpfUqtACq2QHTD4V1x81xLtG1F",
  "key7": "4c7kpeWYPUmqKzfdapivZpYdNJ4VjLH1XwqyxMehdcvGYLs37ZRCwSfq9KjmfTSwBJK28FmxvuXEW2JHXbcwPp9K",
  "key8": "3qx59qPciqP4gDpCENvY9LxjVnnt15M9ZUEXkWnrxDiP14qimMUfpqbnmp4fuPtmaEizPtZGaHztK2achhq7J79X",
  "key9": "yNDmYvSCpog9MLAtUhRfV6aqGFQoxLfXZD8wSywZiW8wGSyRiJ5rxrEzYSoMErKx36e45EecTPDZjQ9PGi275Y7",
  "key10": "62GR3mTgtg33rZXs3CCET2Lyb82JRbpUmg8MxNWjDGMuMfG93vWjMMbMwM1GkxbJCZFYmmzmFRwMvW6nbi45VEPd",
  "key11": "4pXoL93Pfvy29rYYXPiFq7JhK7LVXR5c4QxziTp2tE2rk7zV9wtp8hMqQqBzKKz29eN6rwZa8tdiMLPJp9Ln5vPh",
  "key12": "5TKqyM6qWvG7YadwyYnK3UbHWhRtrenWmbMtQYCNF2TT7r28PG9dhir7M8YX3G97XtHVEACfKjtL6faNBhcGBEES",
  "key13": "4Qici54eQiJuoiot2sihqNAjRDZ1GrDudDaMxVthxPEQ4arYnEmEycqDQCfKixJNF1e5ZAVjn6PPJ8Lzhdk9oT18",
  "key14": "27SK19giPdDujrxhpTSm7wBUzB12FjwRdAPgU7WwAj13WnenV9BrmHs6w1hDE81yWWLnua4C9obWpA6MKbb839eX",
  "key15": "jQ34v3EySLkjXiav6CXTwCmVquubum243z2dHG7X9HbvGLcmWB5YSUX2hp7BAxepJzPcRLNLmzaUCfb8MdcJSqP",
  "key16": "hLq5uD25yxxDc6QcwSHPU1qPW9dJjy8sj2jKZKUU7LiMTKPRuRDCa3LjHCo1i5D13yj6MwqP2My8Y1oBtgiBok7",
  "key17": "WH9ynqRGuUknToWeE8HWv246hn8zXfrSYBFZf1ue22NZdMt24KJq6qwbvvV4JaJvhJHAFVEK9je9oG2LXwhpZvv",
  "key18": "WLnVAD3o9fzX2EaD2cHpjGGogT3H1GYvyR6XPmsenz6HAoLPCwoFrz9CgzaN3tsLqiRD2zQx9B3hnCwDdJqjFBD",
  "key19": "5Ams8WNcNZpKQQmx4y2KPDzMoJKagjYdr3j1gKXpuFSBCzZizAjDGy4NTBu9ikfWXqJ1YXpdcEKPawaCJj1tMetE",
  "key20": "4QHhpkdVahZnfBP1hsmPX3bA24e6XpNjh4X5SmYczKjQMJopzLVz54tg33y8J4vwjqzxrnFeXHLccb8a1mgVmLLw",
  "key21": "2G3ASsLs6v5L9VpU4PbvJx8gAr8c6KQMHDPJE4yHnUu5VHejKrcAAVt9ha8rLTiTmfRMwDDsSTtJYP8oQbHVdvz8",
  "key22": "Jf7y8kcABzrMwGWK1HRBFNoqXBgh8wXhSgS5Uc74WgEj3ismUkHes4fpjFoM8R7TiJWoHuLL6i3f1YrYzqwUcUE",
  "key23": "4rmE398TA4QLA59SDAqcBJs5EHUt4AA5FtpJVyuGyGZ4avLdFk4gNvbyEH3svvzfDpKRiZKhVU3o2KDcHiAn3Xzn",
  "key24": "hrgxpXN4mbxYirT8mKhtBEVAdajpK6xoHVbvWpCq6qua35j8UiRZyQ58TP23DsynnnhQfBc3aFRjYuL7GC6pWBX",
  "key25": "hYwD6PanY21eq7BgWJK6LkhNwK1oRnJGXiLsoEvZwXQY9SBDTpHPVPiMMTTS8YcxTKnywpdxkJtefYgL8FgqekF",
  "key26": "24vhT3HwkUYcUCn8rTqkg9fJwxD5MECXebQBzmuc54MXDFNSBtzqDNYiaRzh4tmnsvFVgi3hgHRT3hh58i2M43Es"
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
