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
    "5m7XMYw52cPJKhQcTgSs5Dg2gmzYYoY8k9LJgS38tcYdzQ7bWgaSSDZT8Kxq4wvGZQBbSQ15bTLy5GUy3oafMdNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrMc8xNq38iFzzveadGY5s5T4wJXzLA9JU1GT8JV8rK5LW271Ui6fCoFdgh5LmPN8AqgcyNy5nMv4tXuEpDF8jH",
  "key1": "5j8RTF2AHh9ZFudfY3Ac5PvxP2GYNNRN4YHwcCGik9ciZKEjN1QdnzZ7bjiY55drRgoAQeJ7bFa8ySWHYMTVhK2",
  "key2": "5UFN1vLqECVde2HT3Q5NA5LDkus7kYPFkuGfU17MyD5HbFZhfhiJ48o231wxZDrtJ1yuMMdbuuP8wkxzBUjFAUrj",
  "key3": "3dtHepWXrUXieuHXzmLMYjCgycs5BZQgmCgevMSTHnBXqeyPF2cVS1bGPBz68LWcVjaTfGNXkgZympenDZG3RT13",
  "key4": "55TUym1UvAGA8gHxY5hCrEz1RE3vdZunE4A2GqAGi8UxRqXyrEWTdPM241Pj9deZWo9xAXUJiHsYqUwSUUyat7Zk",
  "key5": "3xPiaC9AJCygPYfoPomVs8WGh78XR66JHQGwGdmDoUvKV13gq8R72SUUfzpTVTsMzXWPprkusgYsC8crbQRuFpwr",
  "key6": "5SEREnxszBduxqK1eDv9yXvQVgYkumvUcgUN4AuFrxKrw1rnjGzm1LaCN3G1wXZb7BSRKxAHpXsrmEm1pijyaFg1",
  "key7": "3YCnaD5fFbMELNABepXNeABsyEYFjw9UxufSjTCJw1YbbefqYhoZi7w3cw7NnYk1ZZNpo1iJLauZ82jeh8iJjJM6",
  "key8": "5vWnjiiwE2NkFfpKqa2Tt8SeyMTLmZn783jA6GCbMos1gD7XrKUNjPYbLvPBUfk13QhxKhNUGyqKqx1rR3nksxXf",
  "key9": "4TCfRwE8AvYYPf7PxJ6N6Qkn5pGsRDDzNQ6D7YyvCfPSWNFUXcqHgP4VuCHA8Qz98XFhm4sQ8Fu2HG48w2ad4uLN",
  "key10": "3e7qnSbexK7c6ZthuQoWNjHDK583GcQT99BsRJntMC2M3Kt5X78D3n3kSjnKUtEmRrLh9kuJr3zhMonLafV1DNwU",
  "key11": "3BcJjEEvwWFpSAhaJ73JieaN4J62qBWCUqLxeLq2jp9M6mb4qQtRdv19gB7TA4SVfEbY8xaBgKuZjtUTK95F6uZm",
  "key12": "3eCFiZ7SSXrfx2nu8rne88Vkhw8byn3zazLvvg2KJrhQ5uYRKDCu2dfKm9LAm1uecdwpv4xTvCrMT1ZMqCnc3FWr",
  "key13": "44heHn4mNbE3eEXE4f4aHErBUNc2t5Sm1uaYX8XpWJe7cr6bkWvoK9Ac5cWpC4t7xBKZV62CE29Bj4tvMpoSHkLo",
  "key14": "3eagW99oCn87ibvkw8MEvQw2gceQWZV1ntXXF6RdSue6S5dH47fCHNWRwZmLg351UBt4Zqz3sNKXWXPWV428uMv5",
  "key15": "YiiZpHwrwxdZfgya4gJxpPgSSxzB5vXc2QHHf39dEkAnRWri6Ci6v9iYtbWLujeeaYYjFXrV4zAbZRJ1HSJtr6D",
  "key16": "4DA7mH4jZ9TCSRHUFAz1DUKD6CwyCcHiy26kyspjzREFu3vNjkBfST61mkHdEVPyPywvZVLFY352YJKuHvFcXp39",
  "key17": "rdhhUANwJRTFymTXfYtuW9n9rTrhxNdFFZi3j2ihwgYzrg1rvkxYKu41eDheqBJnBYT2i5D3emRk1TsY9TRbRPU",
  "key18": "SUsJy7WavEtDd5AZAcyj2mLwqfyQsHx85sqPaD5XUWLRCcR6WEBzrSyzqWxnFCDJEh9kQJV7uh9cSS8xfeiU3Vv",
  "key19": "2atwYtJTvDj4PKQAAfCjZgKqEBRUka6Gw8W9WsEYR7Gh76FbU5N9FDjwNyBKMhqut3zJJEYmaEmm6ruCFdWHwpDs",
  "key20": "4sQHdheJn6L5hdqXus7cZCYLU6LTMUjWaxTRCtCsDumk1N8AHXLJGWEiWUZN4nABwb2LZJt27kDRdsA2s6SazfTT",
  "key21": "4HmGvckz63tbRzHDhfMmLoXoYnznkXZFuAYpzrRQjcJSrWjHPNe2ay19NYgc6R9igCMrNNSk7EH5X9WMzSpidgdn",
  "key22": "2tEd8P1HQyAfj3nkxsR9poDvgjb1YJAnEdH2CP94oCi9jjXzmZK4gCqGQ1uGY4FHMCpZQ2hSVTKmL2bWxiUoGg6Y",
  "key23": "3zFb2W21rwuKuhDxZcU5kaw3e8Qg4zH1NKeQHzffv3f5tx1vQUZjgUfSmtZHLC9QBQuCGkNvshb3HzwPCqWJLsef",
  "key24": "5mfgQwBJbWVpBcrqQeViY72ELDA3f57Czsc6KR2XgyfibeK9R853FmQXBTgnB5UpV53jqCLJsfjcR2k2dJztZNB9",
  "key25": "24uZuNTDqBoRTi8HAn6AdT16cJMDmPqaGo3G1vFPbRLCwsovpLwxVR6cgh8osuu3THcu1WHGhWUfJx4vHCyjv2gs",
  "key26": "3Dv3xp5uTtmU3QduALAvkJTgpTtqApxN6J4ub2bSsykEJK9poKFqmMJzLjT5XzR8nunMkjWPvKSF6QMashcDTr6s",
  "key27": "2NHJSKQ77N6y1MDEzLszWu5K3NPUn27X14yAK3NMXUfJHTfKXLRQFdT6fLcnoh1snBnRWzPLLKSonYBJEKf6gXec",
  "key28": "2gcuZmcp8d8oEita6H4oqLh1qZPuqXEik97qC2qo19FU6PA2Jq7Jb9jASkavUc5TusPe7EH6vcW63SFvF333JnZx",
  "key29": "2ihRaP5HUqi6XGHXPhucAnRSMRhUm3iTZVT4MWsuFj4aHjiVfEo1n3dCxLD2ei3m2RyNtQEL12V2YEqKb9J9Wqn8",
  "key30": "5H1ZQHXr9hKghjWn2kUM2bQXnpKLQc9LUBpVVp3nacazCVTqD5nSrqCF9qL2N33sihjNK2A5tyDBMv2er1oLJune",
  "key31": "2GnWaXMZFGWqGNmYZqxk1x6MLFCvD8uWRcXoin7wRAWKniYwJa9vr2L9LY5n2yzZSrqvXkLroYQZKhBJxg1idqjb",
  "key32": "3H6gs4PFShn5bbEN83MdDaWxt5uFt4Nxw9opKBy7vhawWnX81CJfMVqLthQVo76pccwNbS56u7DUQsGFaXXMYU7Y",
  "key33": "4HEu7WyhuoTiU3s7ikZq9kHerrXsvJB13LYJPsKx7w6RozvpgMxBMXDPtexjKqyqZxmL98TGcCLoeVAnztHFDgiS",
  "key34": "512eVYFE2cLGAmh2sNtZAoxxBapxBtmAVEAZ3RLFYPN74NkD4R6EZe4K8mLR2zQU6FdU57dwz7M68mfpEAm1M73f",
  "key35": "3BQmnC9srbBDtzVDUnX2buxgz8BJezhABAsUtQigLAs1hw9Pj5yKC4BwpiEgyXf5j9ge4LJrxaFxp8QX2Kj9WHEf",
  "key36": "7z9xERVQNwRRpdKZyoTuLd4syXvjWvQW5SWEjw1AhgwQZ4ZjgKSvQXw3agwUmdujEi7MoG6NLZmkBwzQ1mGw1iX"
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
