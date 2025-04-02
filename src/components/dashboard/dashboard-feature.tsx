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
    "4mzBVxTnenp2p9k4MDHRTuh4zfgpmEwLpnDYXUBp3WQoYEhscn8cdg46taRivCdNRmCJVJPYHVte2oP6yUHETveG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gKLKCsB1LfxMuucQdgJSYMPzdrJ8G9PP2PRgon5Uh9WK1V7pLw5D6YBnxrNRw56dKDaErhcJabuGmyVx3G89ME",
  "key1": "3siegfJQBuU1icH4RZjq2ZgArgCkTnmkP6kQUYTucU2aW5kSXHbEG8w9By8XXAWitNH3HSFBrYhcQZhLvNZTmpyq",
  "key2": "2TLcJYbj3EAheqGBxgtrPC9WabVmxLcbeXHtnjKzcvxUCLQeL2nVYGxesBWxjJH1cmM417aQKGPNcAhy1r3XatBB",
  "key3": "26YcNyRL9vhdkmsQztyaEHE6gvcjoZXAf9qgMnV1aPYADdey6Pj1V4RYxmyR35WRao4fq5DmEtanvwopcMJk6bdF",
  "key4": "4EGH2cM2G4QEcyuHp7i1QDnB4WV5uGTfhJsGAwwYEJ9LDaXDEHCz1fBqYCDorAeytjNM4ig97FTS2stSB1kHQ3mn",
  "key5": "4r3fSkC9RTaizJ2oa1HpUd8LXKgp6LfuzEgrbCRHhV3BNJWYMFnu1YiEaubawuv63FqmZjYprxVe96hUhoEhTDLj",
  "key6": "57DRB5XRF7f4NgZbjWNTQUXbn82PQo4uvP4K6MPPuuoQADnoYHhwUpVDh8JAoen7nKNpZns3rt49YEgyKjvnRowm",
  "key7": "5d228dJXmr2aiAKQwaTzbiDJkkJRDVXunpmXaw46AR56BgNQmhHUBpNLwVZUcxmKt9fXRG7LhxFGpVXhsb3QGsnA",
  "key8": "5jQD6uaonA2f7Jn1wWDBNpsPTi8wvnrZrTgda8xDxRbrpfHV9U4aZPDJePtkqDiJ5UbWnyKC4vHbycV5E7HjtG12",
  "key9": "5ihrgRLNAYkCZ27iugmQq4NLfAzK3FGQrq4nJ2jvfkszdZGxFAaoCfhcB491gSAKKmWhrU2GXBRfaHhUwPWqfFDb",
  "key10": "6X3ySzixTdtWyvHW6sEYGo9nPDVjJT1k5aYtF9PnexenQpmLD298PsanisN3cTvy9TkK2yRG9U2pWBfZAeJFPtp",
  "key11": "623G8AjcLTxNE6s7sQggTzgf1GBRszgwDLfbzcZzJmigKdVUKRuUU4TfKz1teajRi396HLrFH4iz819Ugfv6uxin",
  "key12": "yZQcuwMC3Zj5CCJQA163UhazYENgqNAjmcUobVCv9xMLL9N5Eut9RDvBpFpfoZmxh2HXV6E8e49f4c2sjJ4TSV7",
  "key13": "4Ao5M2ZMghTSyVqee3pWtLtAmVLLMcocqeY28B8zfiuPBdz4ebhLYG6KfAkLg7pAiAKMDSLsVzxv6Y61ZQZWTx5r",
  "key14": "5gZDh6MaLzZbadXaqifxLxF8gfyozhAN4M2GSJYKGkjHikVd3bB1v9G97feXshkgYV1a2KDZZWM1mQ8fmtgweqeH",
  "key15": "LcSRXWVwooudveFvGsVqsxgsmAmuZEQ5LShN4KQpYVWMxac6Y6o6oTp14bQQio8qisxgwZHzToW7MvzaTHh4jry",
  "key16": "2wMbTMmnYKAZZ1h9mPFrgeA6srBmZLSrMxZzNeoLfWgRF9TKCvfR9ZpvBLpKiXxptQFPW2pcgfJF73TmY9Vt41vB",
  "key17": "3UBsfuYwQLD3oqBzSmhSNUsr8oyTkGuJQDWUrPuTLJ78b52iki9AxKsXtzwwnPm472W17nYYs8ENznR62mhLhGRH",
  "key18": "2QzwPe1ih5RjHeF3CKdhAd1vbTH9ciHGLgnCqtYNsi2f9gvGuiPUbrEL9KqRRmvKpUw2BaxuXXVe4KQbfrbrLHhb",
  "key19": "3nyarEQLRPjj4Kdquz9hpWcoKBjhCnoQXV5yqLnTXRU3uZVpFQ4J4HyW6E9okzSk9UhbgQKQHyi1donAo1iPfs3b",
  "key20": "49cjTn8F9TA2ov5gL1KU7JKfEhBKSGqWVUj6yuXDDCQzU4SRCjSV7kf75nZU89EKfuucgiHSAKCujPMP7z6UeEeB",
  "key21": "5TxeJkdraaJMeRTVbqAHz2E28RdRnBT4xEQw1VrKbxYCKFdJ4dJtUfYk4DrbCmQgcqiTjrjHEDyXh48pfxFhqEod",
  "key22": "3oRVRMugDE8Jy5X87N55cWV88BHBt9kNSVKMLyBoYUMCGqQgCF6F1whvLuzHxSKf2Q9tvKeh6Yf8pztA5XHuvweC",
  "key23": "4PqKMNrRDFt8WNYfFrwroEon4j9VmEXauHCGfEpQafZgB5CV3YfsagYmPAUSAg2za9rZ9vgqyvXqdxMqRhzy6upd",
  "key24": "owkbUVDMLq8dsWCNbvjvx1mEbm1cTd28ya3QcFVg1dgwKA3VV82xgnNvAL8aiR2QcL5mf3tUvJCgHbFnR1WZpmK",
  "key25": "JXpm7BksiuxYDc1nNM4WbNnQ6Ldb7aYqQGr4CTuVj2HNhy1RqsQMwNKyNysw9e9nQiPyo4Yd7hBNgNQZEpZoSA2",
  "key26": "42Av1m1KzBb8cFL59JMH2NzM9CdwnAXJnKBsup3GbGMTSjg9E2A2PNxiXW9TZiXTy3oKkZjLZVzYbgzG7WUt7FDS",
  "key27": "2UNHLAjYBJPm92LQv33FiYJHW1fXrbbwPDJEZNPfwnWDpxy5AGrErrmGUi7tHQeBvDwLZGazQut5Gm1wtJU2jHgr",
  "key28": "379yswXkqKYwq2D8tZw6dzFVvgM5tnYBN6jZK5Z5zJfbhPc2vZAzeBcseEoWtX8WesCUki35fFTRsiWKBX2Yrqzi",
  "key29": "dhE6zsopqRCymgbTZfutgtaNvCnrzHbJH7t9wXp6F9qCTwpcJvdoENBb4Ead7rEMwKbeZzBf4wfKbgQsjkuT4mm",
  "key30": "5ZjhvzYZMFAWhs3efJnd2VcDV8413BDWVAArygKA6HV8ZxCQwwmLRQgJczTX4wftrvxxYJroERwMaWJitAx1FTSv",
  "key31": "5VM1opUgKonz9y7F3yWyGmVkVHiHgAFb8G7jCipHHxoC5xW5KhYruNr8g4BZCXJ3cxBtkQVPSyFwVC1MuLq8mLXc",
  "key32": "56sZGPQjY9YKgvAKfVoJYb9JGzBvw7Cth1JTgBza9yrUcLBumYLurLPPpqkgxiVc6X6X2PwTpazheZUU372NxyXm"
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
