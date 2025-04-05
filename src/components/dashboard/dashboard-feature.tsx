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
    "23Bssz1AZebVnig4LYTMGHJAUT1MnsDfzCKJSGLamzvD6U1ZJ1KKj46VEJvkode85LmiCDvtwrtFJgAoLr2oFUnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3QGLoYhbEwMzFup5KUJ86tdC8zspTtb52hNhbvrS7PwanVsn1fZcKHSkwcNvXFAcJixBoGiuihTJknxp9Jt7wY",
  "key1": "3meoHYYAQWsR2Cyo1ircsFkLnDGcamKzckbrnVXxK1VPnkNBzxu9G98BqKJtisyAxCLeMiuoZmfVX37SueHhq4Wk",
  "key2": "4MAzSLzbyPZf65kMxAExrkKqg1SgqZZEGtKRt8EV68SJcFPDQv6HVBviuq7VpwV7kNGVy9hoNYbgSkuheUG9WsPo",
  "key3": "2FE49VSGFhchPF5W22BsvtxU5Y7itdUxGPGN9ehKb3htBKs9836mFAYNMdh6e7ihnM4AygB6c2pXS31vEahiE3n3",
  "key4": "3hBF8KJwx3oLifV5X4HVZLpvPM5pcG4CX3aq3bkwJWswfDoEPV9PgXtz3yjre56LUmwLPJ2dQriBTswtcbaL9YoW",
  "key5": "2UYKL89YMVtgw3ZYEArTsPKKCuPzTiDAqDGW93NtsjYBBGwr8Wbg9WzvJNJdxwFKkLJ7fLgpkjpRuqQvG9twatJJ",
  "key6": "w1d6bmqBdJsZC7rAxW2kZ41Ugyb74taKf3A7GGJc7768ymeWxyCnCGRoiNizpj1aCJoJ2EUUryNwA6MKCSY9zUf",
  "key7": "3SxtpvKnyzgqsFtBmKBSbLNtsDrzWkf1dBxttND8GRHYSciXf1cajfUPFDeGJ33XjFvAmuib2YPeuJ28sL2Udv2o",
  "key8": "35M8S4q3iXpL5VfBgJma1vSScuMCxWNdXKs4pj7XK7bJmt3doZ7A3pCDJ9D2AX5b4ABbZGpro3UAiK7En6EL6GEL",
  "key9": "T6krB8g4dmAvAjcrzfDcRaMMTtPzTVFLJUBzMAEEJQaB9ZgEpwJDSguo4JRCpsWaWxVHWFUscuUc3Wgjy4HxywE",
  "key10": "3wGYiioXpuk8P9hZQhHHTkDBvgjR4uUsHbqfjfMm19pGAqeJd5uKH5LsVEqAuNwCEN5rhyvgW5tvTp5BFus1ZMw6",
  "key11": "5xzddkGbmcdRbiXsype4CS9rXr9sXZUAPrXFm5mKCL7bG9FmSL5osrg6BXtLfeVZNDxV9VzQqC89Xn6EaeT1PgTH",
  "key12": "5FPWk4czjLfL79L2RfY9dBzFrqtJTGDgY5xyvrm56VP9V9CBNTAKjKRyxWAz99wnFm15jLMyQoVeTECE71VjcvEr",
  "key13": "3sNP4aUthmFS4TuJVaEJp9soiWVjhXZNa5Ra4ZWSqcwciz19a9WeyfWYrYpNYWFfSajhSxHxngFJVzxgdF1Evmkb",
  "key14": "5wjtngdxHudtRczCPY7WnP2xdgL4Uh7Tx7GHrwNtYXFcrGA7PLXgD7Dz9DcF9nyqR2jLxdGhGP7LHRGjXVtE42yf",
  "key15": "3k94gZxEKd5LEtJmHf3P4k1BBtn3BimrPxxfPdr4LbX8KG4RU6P31Y5EDndrToAbaii2s9CuR2UvzcCQ9mbWY4eU",
  "key16": "5dWkLHpN4NKYrVEGeoxmtpyx9Zo1krJjUGcTCsq85C4Nnfw2gCTT6599kbm2d153SZzvHtm9gUis7Yj17TygkjK8",
  "key17": "2LrT66ZF3SJ1hso3andFvmKKoPyzsN3vsJKiiunTAakgfhJcH6eCwfgRht4SU67xnWe3CSte8xRXXZz2xJtLUu4d",
  "key18": "5s2tGuKvpKJiykSBwyDGijLRt311qvscUiMC7mhrXBqxMbtf5rP4LYihhcxmWXYs2LWVYS8hN9GSwTgKE9Pf8ucQ",
  "key19": "3BRy8CyfuZRDUgopRWYzc8Zpjk65d5DsQVYd1UYqqZFxgiW4NsLrviz8JqwEQ2oWdumKfJZJXVvVny1FK3o8FDrA",
  "key20": "3reQnoUjZs4mvGVZs6u4vcVW7A3KQpiKGuAT52g42RKkv79YXWCVvFCigxEfT716ApBkUUvNqhKXZJiW3UVeiaUn",
  "key21": "3Xe2Yw8NGH4gQop13Hp93VyhToS6qgiUTFS6PKBa4DuKCvCsUjECzUpp4XUvXvU1B4cu4QeCZKKq1F3MxmNFUZqw",
  "key22": "55GJNDAvSra72mBG7abqpRcm2XK53Dov372uLkV4h3H5oDC7Znu3wfDFB9Y8MkkpepHL9dtmUqt2Tcd12e9cq2Nk",
  "key23": "4KLaPVVWxRK6bdsBGDFysnGgHmneYJBar2pUN2fCvtkyy9EHeJWSdVyNkxr6iaMFd911MV6vdV7H96QUax6Rb9Jy",
  "key24": "3QjovQCqDW7LBptrzwQkPZhvZ3NEmQ6Ck2sVS4WU2cvJQTyar4GHL81DaeRhkVqo3SqGm3aD2kJaCEUrJRQnY2Tc",
  "key25": "5QkTpiPKRn31Jx1TCVqgaLiSrLuguwfyQfQCfU6kwrjwDQ56TpFSEEGgiXxWFY8PFCBLMCA9WJtesmbRTDTFxKjs",
  "key26": "vdMXRL1keJjY5rmuTB8X4tGQ9CuZqN1VUFwTKD3QiG3pZCagzmRBMwqRGYX9LeY2GfJQYtFqECntMviYow8bSiU",
  "key27": "xN28Xm5EHD5SErxeXYKQpR53AMbFgy4xWmPmqEBEVwneFY4h96hzDYx79DP9bfdvaJwMsN8cXwcjJChBZYALLyi"
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
