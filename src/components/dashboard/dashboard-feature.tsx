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
    "nnqspUTiLW5kg2BhftrWdnpUdbfinSELMU97XhBwNuVkoBGkxB9mBXY66dpPGTcnGsychZNE8cE2yEGJGZ8G5pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ywg8gk2xK3AZgx46Hd237dxXus3fN3z3c1A83pgMhpi5vJvtNi4mu9vRRZDdhPq4RAaW2wv2USWkgc6g1jkx1VT",
  "key1": "3jKXZC2hQekUZfTodts7gJmVhJUC8LqpkqAWHwBHDhJ7buW7xP5BkUfdRy8mcp5F6Woog3dSTGP2169Hb3xqgxii",
  "key2": "21JbSL7i4SfWht6Jzp5ZL9FaqRLc1KfuB91ZPeFXRErtXiMetB6NgQzuRxjvHEMxMzLfMqFxTb63M8PBDnaauNJo",
  "key3": "5rjMqA3EiaTDBABsu2rst5hijwxBTsvfU2pspnrP98y4xzrcBxNRGtu8JV74FXb3QPjuMf6EuQQNCQ1ZVfV1gyH9",
  "key4": "4Vz78oBsBoRtz7Q2XXCPgJ8C9gq6hgs6BH22RAukHMWJaDqNbBfPxVSgwAby71APnb5U3jC1cdtuyapQwey6BCfP",
  "key5": "5HzRacigUVkhngvuBCLra4ZqL5vxyYkhojN27QM4382kxGsNUhEhTXq38zfbveAVRALDEZQHFyLJHsfwJydDq2Zc",
  "key6": "gXFScAKSmcEzj5wQ89U1qRZSKnKbJ5Pw1Kr7KVXPAqPgEkPjtt4nQn6yiM9z5PWdcj7ENuXvZqS2g6EyPepzwWr",
  "key7": "3JU7hLoVqbQYgBgKpTPh4FUsfZYYCUkjop6XyFpPbiWvVtWbJWpYfuuhw7q61Fr68ehr82nRL1XLPaRL6VjcNFpY",
  "key8": "2Zy2tqU8yZQfCAMeBGYprBzT4SrHq9zLtH8ALvf8mh5K56To5nbgQ2rWNkvd5spGpv6Qi23poDMb8SPvuPT2VgD3",
  "key9": "33W8fuTCpz8SFBfFG678QLscMeS28kH8yp4s1bRcSydF3Cry3bDoNrqzVoP4iUG35JhWhLRpUeZ4iYTC98XcbFvC",
  "key10": "3yqz9M5eHMvQP1mik8BBSgq9GnmdkKwM2bGEg7QWoq12a7vvMwp44eBbxhYpKr3ztrQiarcvBcxBzGVtDUXdD1Uk",
  "key11": "4Aaey57hrWo5RBYLJbVRGpag9v8Wugzp5zKydHfAArWbV7geXMQqf38NzwHRr1QuxPg5Tm1QZ4JwyFrT25pJgNLD",
  "key12": "78UoaXaC9GQvKVDCCWruadLU8zX1TE6oSZgXnPrvEwgpU591pqtQjaVqVBf2xksTZ9HY6Wa7p9fatPDAVeGGsfw",
  "key13": "djLxx769XLrbwySEAGba77TCLA8yoCBaBwQYrof4XpREAtZ6sxbrdcgLgTaMjWPpMrMA2zCTk5QryyYoA3PJCqf",
  "key14": "YwM3CG7XXfRs2AF9WKtM9KiMFCewZhaN1mbYsaNQ58ctMdYgJfz45Fb5EcUGf55jPwv1chmzVYEyLBx7aYiydvR",
  "key15": "2xPyvat82FWfyUBmo7DngvkZbjSGdoquGEpJsD1vRi6rfUckgBTzpAU7HeJgUgtKfD3wgXGz7xvNmLbbXbEcKipd",
  "key16": "3oXEXckR1q9y8HGBHoLTBdFWDvEQV6EoTUNPvhw6H1z3mMYNusHAubVSTo16jVXLSypGYtzpFb4Ct5oFTQxAws6G",
  "key17": "qcrExVaXFkNiNiUz7TqwKtDd4eQx19U339okAVYPQseDBfYyj5KB6yzdFQkue57zcchPnRrucFmUTPhQpCy78bf",
  "key18": "rPCAgTNpXK1owj2g2tGADhnMRdxEdZbVivViK7wNSrYebYsVvCouvu98iAfjCAAazuRShJXbA54ZD6sCi6iMDYx",
  "key19": "46DzABCEhf9qpozgrHiYzVBXUCUmUvexNcAcxqhAHTVB6Qr8X2CGKUpLS567FEv6SCzDsmepnjUS4wYYKdfnqaSD",
  "key20": "2yYidrKNJRrLL84o5VKedMHNmWpv1p1dG6qNizbSAtMQkRBMtSqFHxXyZMPtJr6Cjm68pLmXMACyRPGu7J5wVzxf",
  "key21": "2x33DXnBkuFXgkMiA1hGdaTCU5kNXjcr5dUTDrsmZ3ye1ccSqpDKRHsEtmz4BDLXgHFLML2LKo2tUUbg8h42t6Vs",
  "key22": "PAfasuA24CTCc9UU1sjfLfBZ6vRQKZJgigCsm7Et5DCiLRmwDRyf6Ui2ydKJbbvEPpxAN11rctbS4PzmCJB7EaZ",
  "key23": "JPW6CiKP3EM49XUTH65tzkRTyDqiei5wwdXX8nSTVd43xinJr1kB4F9HhHjhykMZCkQAmGhN65d2xqUDWspgtqm",
  "key24": "Lr4JwtZ2Whd7gm6gEeTHMrfGR9ik8FH7Yvg91XF2yyciYFriifDmjkuecakc4tNgtP7LAY9kwEbsF5nki7FnmDX",
  "key25": "KKKAqb4bsFkpQX4L6jxmoq82PQaezhVi2ukrnt1Po1drc8kD2aeofEzqs4FDuGjQX5f21emGf6tZF8AKuUJ4hVc",
  "key26": "5sEWSFyKH6ABnZAbKzqnQqtvfZfTCuuGPHTmUEwMy1cjddSe3jfHfo7LvvLEiRneC6mYb9wrJJ5d769WvS1LaHpe",
  "key27": "548RsYLE8LYDrUypTZJkPsrFFjc6SdedgRbJ1uGrX69fi1Rhsf2XVPiDCpLCkQngLSWvxKAQWfh1YgQys6nzSZjE",
  "key28": "EdBeZv27AfF6RTNXAbeig9M2nd6j7G1hXC5uYfjXN2Q7RT2HBtT6Y2p6eQh5bCBf9uJqKDrBUqywjrRLCy61fCa",
  "key29": "2K2VBSzZbpVjHSWddKWjKzmobU5bWzeLeWvjaiJmmAqF6jzxaGJMUgvF1SmARgwG6vjLins6DSnovVoAAF3c7Gc7",
  "key30": "5r9dTJDvRGNqUmzR4vuUU8kb9SgBkjRkBHyfSNynGpUHE7GpAfJVHYpBz1m4oLJQz2Q9Gyvw3ZEm9MxzmVAF9UQz"
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
