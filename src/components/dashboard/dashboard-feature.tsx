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
    "3ThbLrJqYZfvgDNs1w2wcyr1TfCYjyYeHSMx26mWkLvx5ZyuV6qbGWDPdNdFm7HR1zm8tJjfSambn6kronvQXcMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355SKby37XBzyMQuHv3tfnPLhhXP9s92imiTCZ4VsMuyTkpp69ftT7EQtwpxM2NzdjJnBybLBz1W7PedHv6UYgnf",
  "key1": "5PXkv9B3dmnbvWDYMARnEBFUtaZgZYmg4AF7Mzi3apzZ2AusHh3ydCPb6gDtGRVnNccvDWDewcgJFM1KcfseB5SE",
  "key2": "5fDGfMFvxoqzG9Sop9aAGyvcDt62gHYxbeNpg5BuBaHaWype7erdSNJsvLEtoygd38QxspYV6VJCgcDYJ3VW79H6",
  "key3": "2tHjBJgGJrkXJhzKSuC98rrtPR3oUJPgdVf35xJFMYqMgLNj2JygJyCs5nZ58FsL6RYcZweTunqH9Ty3UgxeM6Rq",
  "key4": "4abejpBXSyPB8GoeAtBzbwscvZJu9Rk8mbHXouS1m2WedpR7WReAGUx6KZj5g3DgBVudY4zdg4T4JsDrp9A7QRk4",
  "key5": "5UWDvTH89zL8fKJoej81X6qpffpW71oyTMHuTh5u4g9EfD95QRkRk7JvZZQoa67ie3jfeksTWew6Gvyzc1CwGXGE",
  "key6": "nvuWZyTjqVW3ySK1WKexzeZW9qHWnTDxsrsWJk295uNqetYZZxVi9TUQUgEWqjEJccW7LTSJGFZ4ZDnXBbZyjDS",
  "key7": "eVMQRNeYMwwUgp5ArB5JfEv4hxk21NQxBLJiAN1W4XzUdqSyqLTLGnZgM1tznbHwdhZuNSRwDNSLieE9GDbEg29",
  "key8": "5h5zDGbptxe3aVp7GeVcFdmpLuxKCQYGjx9XxCXrHRkWfMNsMPUZS9VjCAuFt4LcW4BZ9aUGXKGDfjQDKj7sTcCL",
  "key9": "4v5xETQy5hESVnV6RBTn5PzFrZ1XJ7Zmu3nt8BzLDJeN7ddEsCPJZ8dBRyzRRGx6xx2dLHcB92w8vZpAjiQ83eXb",
  "key10": "5U1tZrrp1DXr2qYVQo9XChvUrkFCxhAo7HaKAHcWpr1wJ2xmvCj6H3KQjwAoUCZJfZHwBkDqygXBqwNQgVzDFUo8",
  "key11": "67pUuuwZB8vW29YH8yz7FXZ9FkihA4zhcrFqerVCv8TWDcJ9enbnZ7RJJHimKFXGVboo6vWWfcq1greVWB2m9vcL",
  "key12": "W77Pg7UM7kwHk75kWmzmfQeZSvp9s692t5zNdQswQK7iVWhP1xH28PDpPm32tqCgGgVUAizd6bywqCNugYyDeaU",
  "key13": "Pg2W1JqH23bDTfQdQwsXMyEkEHv2hWwZZs66kEHy2bVUP7waR6ohudJ9wWHVuPzwd1dRh38oNTnqxqeMDCDDyhj",
  "key14": "2BgeboqNrbinrnWtXhnAWfmaiKuSUaLKstoSsWKRe2NCe6G73f5dm9xeuqH7DVXT6VPkJuXZApnXZWsNaJ2gDbys",
  "key15": "4oMYjzFckDtwWEV7YvjeAGLA5JxwUt8sLTpRm8hn77ByAnbYEQ3N9JS5yf5wzDZ8ifN7zE67E6gCxgGpdYCpLkAB",
  "key16": "2RhWGnsMNKffHene7ZgysRFCE9rpMbKT938Edc5Qx9FshLDzHeSPuCtAh83F5DJ6vk5MEzvLjXbrfVisndHEyX1y",
  "key17": "4L1ifwZpiT4k4EvMZyVjRo4kvMCxdBbNu4CWTyHHomEs8ZEpeaezsAKtrBoMT6Q9ytWWtNLuci44rveXmF3Fhkk7",
  "key18": "4FsCeFgCJG9o6Q5t7fXZvptb45P3LMYmtB4PUaEj8XiZ1bsBGczHbwdL9A9QFgMyNAUoWUsGyczWgGNcCNjSvBTu",
  "key19": "2Qd9j3iurTCS1MECE8eH5DNUcPi9gCPnuT258YxJJXwiHfXiRQyG647mtWTgMdUYpvUy3tXBzi96Gkg5WQqcZJwT",
  "key20": "5BcmLLW8tV2Zja7f7fYB7uuNXPUA7Nh3q1rL5DyVpMV1RwcG1khcjCeUzvPG9b8AbtEJrA7xJTuA4wbGsRBqtd7J",
  "key21": "4apYwWYReSNUcpvFT8cWm2PLyWsinTy1p7cjKfQDiq1RpS6chcTv5aSpn9o7SEJAK13MmqAAn2dHoEVQYXfv78hu",
  "key22": "42PBGyyfMeYJhLgB8nNvmV58dsNaymEzX5jWUMDEBziJQamF9JyLprRTdjPcFt8SYgiYWyvVNqfRJNs5uKWcNqXv",
  "key23": "5HPz69zQsDbcvS4a8iaqR7VVyHueJjNyUxVKwdajzcbLf7RuRbqxB848k8uZHZ7htrLkmUkQUxzgShBnhAkp1CKf",
  "key24": "5HSnzHKW6ozsr3Vkt6EwtWY8JDa85Cmrja75bnBQAgjip3WDbfJL4wmPXPDC6C1KSrXWdXcxW9skBCBmHpQL5BXE",
  "key25": "2iJFHAXXnUBq72XCmtHvttcaSqHG2UqaFP6FPREqynGQXwMYxzczwFvt2BNPU8vGkSLH9EyyRAGeWG42Kwt5iRJp",
  "key26": "3fe6jKYRdUowYjeEBKFnWzJds4rtydCvrmmBmggVQbMUse8UATb46qbd3t3ekVNpHuJF5FJQhCY8B576EFhT67w3",
  "key27": "3nT8ikgVKqZCaoG8vVoMWLnLtdqbUFLaDqWQovVMNZuS1qiaW3Eh1bXb9Uuh8W3gWxeopwvgiC3XEESC7725Faip",
  "key28": "5PdSKc8xw6aY37gN68dhSVXoa3YGYPUx92PgNpkq987EXrhPBxJYYhiK6K6SRnt1iCt9sj2Y2KRoMw7My8aXEU9k",
  "key29": "4uG55vsshW32Wz2JYRS6MUhqk8zxckD2mF98x5BgU7Jd6JVorjNRH5Ss4fdVcqxYFaWMr2wJTd7kwJrA235qKQED",
  "key30": "Gv7np6hgo6GSLgTNNx9m1yy7b2Rmpc5NgJAoKD22BAPJHWCzrTqyMP4f7ZPpUF9Y95ZxBWiKgjV19KxYERK4tCR",
  "key31": "2qwU4pRPkLKMjS124ftxchSSfeRHJiDxpmU7WfvUR2BMNdQgVUaWuBZ8pJVWxDBw6Hc6XQ2aXPKLQTJC73WWRsQp",
  "key32": "5yMG5B6S8SjiNfuN5uoW4Q1ox6z2HcPbWqq8rBxzV4nZh8yUc3L6KetNC66aqESxckLNzSVywDMdPXgYF7g9QrYE",
  "key33": "2aV45TM4Kv2E2HGGL4tZxRixG3xRy1rLMUcWY9ewv1xp2599JHuQfgochDED2ds2kLS4VuG6VvfhnfPCFWBB8dCa",
  "key34": "4x4pYoHHQwRvLvFzwnAdMeUQfabDoYB357cS54yXu4PyxzmyFb54EPGBMDnHVr2pWUQ7TiMeFcCu68bEZG6dGmSr",
  "key35": "5YmsSCE3srbG4T2qQutNFbG8jsi2afxPyDELfSKLRG1zfCwtccxx2nCxg2j7cyBvjwZWaHWAGB2ohwePBwZccA2X",
  "key36": "2AXLACGJafcxFGRWG78yn61Dr1uq9vY4PtTyBThB3vuEg4L132TjueguGzifSR7QTzy1phrLcJFKriSPERg6BXP4",
  "key37": "2jc6J4cbCSvG9VtePtmDyeYcgDSsb95RA5u2dwnw2FKUqniJC34mjGWZUYMK7cGCp3jXAj3ZXQWu2XJcvawPQ1iB",
  "key38": "5d6X42hiAwZeYq7J216N7dHZjt7ua17hZugEQXDQS42RkPQBa8dCHdub2ZnEpv6nAGDiCeSZdoQdgwX91cRU8Pz",
  "key39": "ab8zm7VCpW5MRua7Y7vzHiJ4fPjWBcojXaje55Cy5whjgRyZtjS5krmcwVVWXmFMtvWFkYoxgo5anSxwkYd4Xtr",
  "key40": "35ubMSb2WjKWnL5cSA1n3jabffCdogFy4ZTGet34Un6uNHhdLCZSdng4W111C6Z1dejeaXAcgqd9UfWwaepwdaae",
  "key41": "4Wn6y1LB187TnxP3LBvmS53nqEpFgLnKaWjrxUqari84mzrGFUxrzkm3wNi3aDCa6NQMzVerQ5AcdyDxdpTj4CC2",
  "key42": "Gdk7WM8ht1Sh7mAKPfWPGRe5oCAsEbHb3yBqeDrooofgjm2Wng8Z3aBVRZe9tiUDebXWFQMFFu4WJ41Zam457Qa"
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
