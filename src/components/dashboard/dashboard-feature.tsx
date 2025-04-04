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
    "1iSNdR8d6kVahb8LabqnG8GWikFmKC74nUqgRBJTzLgkUxh7hd4yP6CPAc7ZQrt8ycFrWWyeZeRL6SWmhde2ePA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8bxSjipqBKqUiwB9KALjzcyEbQKM3cqxy386FgpmnuGoSnWsCxT9wRNB1FLk7yh4xqvYnd3R1Dm7MtjXyyPZ9q",
  "key1": "5JU8WPbA3AhT1TxR4HK8Ht8qpAdiX5cZSnFuRyF7pMysvAh2sFugrDFP4VHco1KB9BLVs272anwk8vSaT9s4v4b2",
  "key2": "2rPJ82XxTJkhforafT4saxMF2XYWfWZNcbPPSPhjVLMc3oGqboxBD1DMhRf1cdKKq5jSyPMdutcMCiq5wKvMwdHD",
  "key3": "RaiK2xYErRY6np6SWsYyAEJRn5G1vPk9zja7Ewh4s6jTasQEuBtbHdZWscyX7knstLDRXFNFx9W1zwBx6aNB4W6",
  "key4": "WLKw2KgxeoejFcHX5p2MrkPk1hBEJMronSxJ7psbLZdaDGkxDJaQpa4sL2yyjppH2PieskU4gBoSNTJA9UVLGmp",
  "key5": "4QgH428ymCh66tYTQQ9CFxvH3TVifZ2hdk5BGdFG16au1zAh4pnQXz7M7t7thLeTq7k4y3z9auPDGpJ9hCAmnvgH",
  "key6": "2ueSG3woc54eEAxewqu9eti4LQjfSiV8hRbj3K1T1toWXDXhUYFqyxvNWG6tdF3eyEat1t6AuSRFks2XoP4q54oo",
  "key7": "ZmhTNqHER8uQCSJbE5JrndqzPiXR3Ugexxa1iXgqEaRcqMj7xpy72Ur9NAszJgaNF4vBDox37gx9puvfiPGL3DZ",
  "key8": "arQ6LfuD9S4RqAU79h3A3q9LfLNZm4sGGoXSJY4gAX1qYZmTSqtFNA7XzLU5LRKBNjYRDgpJYdbbp2Kc1grLFsD",
  "key9": "NodaiM4bBT4q3X1NR2ziR7o2wjEipM7eG1QztGUSGC5v8dDaWmh6gP1tRjMwjCx7pWMxCoMrJ4SjEznC5habY5w",
  "key10": "221zNRm5NPcoyFm788sgTCsX9xL5D1Ji1CJBoKbGkoV9FoP5mjw1Xa1AyZVJ8mdc1mraKXSLUk4x6gKZ34w9REP3",
  "key11": "6gB3DGYvE4JoojwCZVH2PMHpHKyntbkqtyP2ihG1Tj53Pnvw4CEzeJ7SPuUxbzLSBV3sDLQEdCTfVUQFRuXDVGP",
  "key12": "5SuzfCY6Zi4aTa6BkpQ1FnYBCfC3jsa4p2hZZ7DYBQdm9srRKVmGKVtem2kC1Z9wSHEMf2EKY6214FE431EaS9ML",
  "key13": "4nC5ef2y1bpWcoz2XPkyDfY4woFFoQpsuf2MJHzwQCYu8hZQJmianw2BuV45g79VE6Jn3KD7XryotGREEk7ZGPAm",
  "key14": "2d7VuA51xg1tT8sdXPun7YezTMSXA55qpdaa3WjH6nTG9qe2XsURR9PXMNA9iwrG46znCvnMjtd7am84KmZMPmCy",
  "key15": "uhGzTpyTkwahPsJmYeaE8aLv95gv226uwK2H3YwaPpagW82BiUdCh3ByebqhTXZuwzSzVdASDaKtevA23MfA5rA",
  "key16": "2wLELxw7QX8XQ934gaCDxmE6r2dvEV4jZuCNjx8twKb7ZSeSh9mwiXQ2C9MSnhMmLoQLeTBj7U6rKkCiH2T4ogeJ",
  "key17": "2ASV7eYcxAvAivq7FH9ZeQTESEWvRT1wS3QFYZp9jb39sQwzGQTVjAFvbg1sZyM1Heq2qdTBgG6SHj15dx2UPjyK",
  "key18": "4H92URpRsmv5tkiKxbknPcMgTpM8zXVhg4XC3d1SVh4DWfC4AbzMYtMWsrx6wUV9Duq9k2fHCyNPjBHbMdXeGJ2s",
  "key19": "3nn2WKvAUPKXV26GH7DPhPGSR6vNJQGMFcbrGXCEvxAEhnu5n7DjkJLqH2Z4XbuYVR8tZmvd1Pvy3F2eVUznJ3oP",
  "key20": "Nhm3AYV3dqKHAMyUnPrt4pSg68JrgvuFM17heLKtfvYZNieSDwXfSwE4TWUeoUwr1RhoPbCW8HCe66ML23RzAkq",
  "key21": "2g53x4MyqSyvcdojZPAAryv2hackhv9Y6h5mxxwzctbkzYhUzChERpe7UdSChESiM1NMRuLkBRB7MM6KXYvHyoe",
  "key22": "5PHLCTmqTzFbQP4pskCVrb66E2pZUv9ecV7yBikxNgKoZeQ9jDD2nVDDRCPtVcvw2TEm5r9YTAAh5M8suW3qB3xg",
  "key23": "2Rmmkx3aFdNAEkF8BH25NZpiEf23Tc4UkM8zLJBwWLQ1oLCvZ65AsiAKjR2bjFwGE4m8LjKY337JzR9aBGKbiCZr",
  "key24": "evA2gf59VppKEX1yqzLCtbtgZkXxrN6dbhTfrj9EhLPqHvvMBiDFEZGFJ7g8w2bBvfH2D6se1kqV3yYPxq6Qhdr",
  "key25": "4WeGEhdDkZfHhuMcA5D7YmeQT6nZiCj1MvKDHXteHGYzez5i66PkWWsNh4nwr4v2C5E1oUG4rytaVt5hpyntmurM",
  "key26": "4SC4Wggwb3WFe9F9ZxmfC7YiX8MCc2XqbPQGVhh6Wyc7tRSStwiu359gPTmmDwkmnf8suPTUJxXxcLWg66fsVCYB",
  "key27": "49M9kkn9GzbiDRfX2bWAgzteFhNFGdBtu2LfHK1aY5UpYHLwTroJqRpXSEVtVmiiaeF9sreZf9nAhY6h1dexQxzB",
  "key28": "3oeTSBbZFtzfXHRneybe7XF7ZE6LLKGfs43JhLRiBY3tjvN4czcca8nd3zkWo4U6vKTg9YZVtEa1fNGzsnR65jvo",
  "key29": "4MrzptfrbGi2Knvjn9VdzdAC8rYk66XnAc1Hov5yR2b681mHcGQW1JNB5Dx9J1MkA4Vp7hrwMjaDe6V6zCmJRXKh"
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
