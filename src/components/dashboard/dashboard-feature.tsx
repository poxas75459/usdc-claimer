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
    "2KADD8XpzaerrbCCRZCG9yQypLXpZ1xaZRrcQ6y9qMVU2DuRoZF6b9M4vaEn5HgnBGK1fPHLyNfSt798PQRgZoZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nT5bowNFXUAS687cnKA3rTMwHCNeCW3Hb9edZpQRjKpH7V2GFB479nQdnCJWCquuVjrkaXJBcnjc2wVNaXF72mB",
  "key1": "57RjysATaV8A35Wau5KsLn45GH1poM6hHqUvFD4g48cndXkbDunqYpPqBbq2PEgMkkQCiHUSDGwUVQsAkwAbeCrS",
  "key2": "5S1dYiayocXFr56V66i1ciyKBWXCqSkaqCcYmcSF2Rq3UDVMheTyWVw1rGH9Ui8Tpvko1g69cZ3XsS1xARXqAC6M",
  "key3": "emgeXf5Q5yHsp9rGxwriwxRdLASdFChUkCjyvXAKA2HzMFR2NcebhRbUU5Xto16rtGJDN6mccc4iZd7zUaxPY9D",
  "key4": "4reLVP5fGJrDs3hBA4nGbF8wdwSuECUocwdzMYtXVewpLxqqENCKLt4yUfx6Wnp3pcSzEdKyTvSqPBKJA8fQ17Ly",
  "key5": "45vS3VYuNXyL5wFaVc7yESGCU4sNaMwM56JfvxF8x12xyspGAXmQgeghtAEwHaVWit38Tmgt1QCtioevJr7SyxPG",
  "key6": "8sYmBtxXmumpDhf8kQbmQ1Y76nfgmSh6oGJQ872PDCvMSiLW1tdknjPM1ucbFnktk3mzeemMDXpUFuBDo2i83FD",
  "key7": "2NfGbyc7Rw2Qvg7QUbLgvWQ2DmwtJXe7EDsXxdPHQyT4Ljgu2tPDSc1EDEahymTFLgXKo5KwJiXr63eqDo1c5iGp",
  "key8": "SfiBpQUYdLVFkwnDncATDgpz1NtWeVBm1xFAgiu4zHKUkbJfBNjgm63Qq4bQnBzdQ8D8oHJD5tmxQo6iBAMHJqP",
  "key9": "4UuidZDboT9rVx5f4HvTxUN3whUJXQGUWLcZHBYP644ikWSNjACXDU76GyNpBvhnJRG2ijkFLfMWoa3rkBbE8mHh",
  "key10": "s933y6biJQTnNRX9GfezbmHCGdpYkSZyxietUhtV5CMTLkknkzhboEUaJGGHE1qywWXrLbcd9T9ioEP3PvxvCQp",
  "key11": "4FQDNkjktHqCCKhRPG8iRXyL8yuFYNxjCGBWziwAudKHPkfnskttR7EfaY6NsP5oqhtsJKG5q9fKrFSP6hwdqNiZ",
  "key12": "ysUUS84QWBBHkHYkE1Z5GwapGC5DRghGeF5mofjY54hiDLZH8VZi3eVE2bFEBw7p4vB3Uqib4UWjRCEfs6swubx",
  "key13": "tKkEPS5afME4aUGhwTUrHKcPSgZLkYYtScAjk4UUVTri3BtEPmyaeAoCMM9Hfdiqqu2FsV5dkQwb8DnjdQojCBS",
  "key14": "2gEWd4tz2eUUTVZBd7C5kexu9i23ALuxA58FXcbeV4dr8YWNMqGm2uPkVbkYCYHqAGZwLpkYAZFzT2HhuEytWosT",
  "key15": "JvYDPhBFiEnTRbnR2z7iBeNMHoGcYiGbaf6E7nYKhV3Ayb8BzrtkTvA1NyLdtpPJi3te2beJR6Y4sBraqVZaG8y",
  "key16": "3cajHgyMmfQVzJrfSpbeYtjbtSmNTPjBd5Td5MSWeafpHctnmHUqFz6UMNxAKAVy7JXDURaVY3aanXRBvoBVx95y",
  "key17": "2EWEVFiKoj2vcTXdukwqfUptpz415KZXXUFabTTK7YMYbHP42Bvw5evNhcqxvNxmGhnspTzAE4h5GD7vUvdCPzv4",
  "key18": "wrGroiXRtWJTJHdmUVDn9ZD5vYnR56vaDTci3Uja23DibgB1ffLfqRHPxrygastZ2F4YKG1cw6ckyCidGnR5vY3",
  "key19": "3nkVPrEy8dbicWjkt7YWs1sEnmKprJ75Yt7b9ML5mFtugUqyjYyF4GSJoH1e8YcZYEUKAaHusjx7Zb3LufzkovCz",
  "key20": "4X8x1WTcq2ZP1Q7crZoEa7uStQKMs7PjKBNu2DYWhzEv2jDosUdCo5pEBHguBzfZeG2RxRYZvU56ytcKkmfEpk3w",
  "key21": "3D4aSxeA7n1CBYv4XGQd31Zh67bcUqDj1xMXz8xgKSPQgoPVxJhjHpJeLpxxu3oWLg7NKwwu3THjW3egSh8efpz8",
  "key22": "mJt4Atga76ZvP6qvBk7mbmnv4dG7D4EK95pSHuVsLjwAJ9kSP2mrzKbdyAJV9Ay1qP951HJr4nLqw4buAmuqy4B",
  "key23": "4bKZNs12qLzdsks9rXk5k9dQ9anctMD2X5yot3Fs3UyYTx38eqaEnsk7Nqc8AZt27DfftSGZsQqRBmpbdF7Ygzc7",
  "key24": "2givuQTcSU1dXj4r9fh64RTMhRgy59eS4QjvPf2fmBsyJD8YUB5QqP4HfxUccNjPa53wzSbDqKDwsc13H3s84BV9",
  "key25": "2p7zCsvGXF1LBQa8YBPcFqW5aXdG4ciyCiDvcGFJiqxFYyQ8b4ZUbfy4T6oMt7tCmnfBgLMdgp8HKnKXjaZAz6wc",
  "key26": "2C3PCS6hFZzh9Rt479qRJPRhA2fkdyVmPFJBU8stvadGKrak6nm3kFpi7sAfeLsGfVJjPCuCXVYvsQhNRrDEhvbp",
  "key27": "64LcX7oNgj8rH87WVpddgioJgaTwcitcX1GKVubwVRbmVQB7BYt2Tt8HdthjU9ABsaq8ea6NP1a5xhg5Z2SqHDzE",
  "key28": "3fVYoomaEU5BhvwBtZXtgUmgecPi1W7MwQNWZvnKUxCB7xvuSkmwjBfGYA7WDRrG4LhDyjK1TY2FNFEXnhsPGk3P",
  "key29": "5b4ywheXy1Xvb8HPgUoRB7Dp5QSM1BBcQf4Eiuph2EHdAEvauuWiv7HbeTFXAXBW61rneAdh4cNvHnrmv1N2QsHA",
  "key30": "XUZBoCHhyTNfquWUmwLyjtoUtKto9439EbKZP45T4tNAvSQmD4FvP6jJnYuiN9MJKM713fyx7P3xc6jTpQD3ZUZ",
  "key31": "21ctXjBDbJESQVVgHwUR9M426Ks9nB3NpQpN9gYZXR5L7HCG2hBZtoN9S1tum3xpyoJfuxeiVtmLLdoAfTVvHkb1",
  "key32": "648fWkGu8AZ4xHdbhtJx5LPpsiMS6T4cix3qDvAgiK85kkdpH72TrT6MCoyYmRNNLx72UteHRwxp1QV6vNL1sgAp",
  "key33": "5hY9mMPkFiNye5L4vr4Mr2ZZZbq9srGJxqqem4ywnYU8RVp7yb4f261G3TWQvX6pPjF2gf8BxDPycM973Yr6vbsa"
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
