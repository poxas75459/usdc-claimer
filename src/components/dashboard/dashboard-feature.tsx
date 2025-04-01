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
    "2xYtFo3uyTkLtgVim1QT8XoRa82VHvbqRcxaytspe61AGYM7VsaVrjDoWD9K7eu88HNNo1YDNhf1pYVxAQFohXsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpYsEnvN3xoGao2jd7mkSCZwS5tR9xYmdJqVFcL9bEQDTKiJ5BfYpAPv4y5zB98CaL25HKzpe5ihTZkd2VWc8GK",
  "key1": "2XaLv7ZYSVNkjrKVx6PuKmZNmYxy6rf8ijPbJsohPvBiTf9qpJd4v7Auwq4UD3Pm1Vc5amQjnv9LRHVo2MwdZBuH",
  "key2": "Q2Y6GXfPuX5GzpQYQQF5A9ppgiU3pS5Mn4JhexAn8wr74qPF2qvNs9131cEm5H6WGDEuJ2pG28mK4Hc8uGPu33f",
  "key3": "RBuyctA3Vo8zqBBE3WXyZ4BrWnZnWVu83MSAkEabaEsnNtetG7nacpW5y3gmXmKMRCPm2BaYT7Ubit262hn2rUj",
  "key4": "26o6SaX1DREhubgroPe9RUtYhCYV7QA3rFJyazJDvmTkGPQNzxR5Biy6BWoL4LtP8NMLTUJBijauYtnDBi4LWtuz",
  "key5": "3qMG2t2z6byth6gjL3W5RkZfSGWbpS58DD7hiBGJy7h8M5exZW314sg9mxmfP13Kzrzr136dGDNGGnyyA6ZLsHLq",
  "key6": "Ki6GK8byoirmga5ZsgMFpDPokWSKhjxFo598moyWC44nhJLeJ7BbzWUgx2jPKdvZiRUkFmEs6JJgTTSw7Z2NPuB",
  "key7": "4dutqkLNp6gLoPzuJsAJcb8exvFPnJchu9wYUbwESF9A5uAdGJCLSeutM3k4DdLp1oo1RgvaaVnVoDgR25dCjzWM",
  "key8": "3NhugoZszoaSCwAhak2ct6MNrABwYjLtxxoLyizDkDv9yQcXyC9crexdjzdMcqtMe8E7EzK7o7KJqWG3UzefmfHf",
  "key9": "2mRrva1WGfhetSdQKMQ2wtpyXnjBANjxuMwFUX8upXFrfxwb4Nci1TkVFJXjakRyS8yPp1MbYto617o8JpRqTkyJ",
  "key10": "3NLMC6AuAjGNaTW5YhYzJ4evYU8EWpe6Jbbr6bNiHf7pdpA6dmeiw4Jbi8GzPb8WQtbxV5TyPk98KEL2ReLCQgDo",
  "key11": "34W7HpatM5feY6VttLMH5KzVzXzzLA8SnbgVeVAyrhms1tSQRtBJcqDk8cDAjQsmvVu2VPBERNGJAngR6ygNmdhQ",
  "key12": "4HV4fVEkrSjLEHp9TPwnaFELqC1qhFS3V6pLqjuwHYqXxVsRrLuYY2vuNwVgs7dDDsqZo9ansckhDMkHsjF452Vc",
  "key13": "5SVe5xdNjL588xFihwTRotzg6g1S4xGM4e6LnXKaSXKNNAxxdkMxNdkGHdxZcGoaXVWP6jiEtgmx1QC7d9kt7h8v",
  "key14": "5oej4BsHiuSbUhnw9wKSkrXo9ofnpBMpHQEwUPijoZf8Dr8VR8sBcJCKpr7zVV13e2nDT56vbFojfWUr26Jbicbo",
  "key15": "3gPv5jyBrtLCWvG6ejUV9hu1XQ4qNtFmXCXYd7iDYQ6w5bhgox3JyZsHBEdSdQLgjhgbAPGEUU3gfKHhNhY83m15",
  "key16": "4M3doWFYurEWEmQMAEyYbzBUuQyQDk4RUUGg891LvpDPcLDFLZhSLSSADYTQxcz8Un1t9zezvaDQRfvimCh6sWMu",
  "key17": "23Urhy1WUXQwjaJ6Z4F9XwQpSowyFEAVhkSDQQH57hwKavZdpf2gm1PowMjRL3P4gqWFXiot2HooUA1Y7vxTbeKc",
  "key18": "5hcpewbvo4HqDomy2XqKeFKfxTLWkwfntxyw8UkDpnPgzctPm9jgnqoJrtVwuxdxaTJMynHXi25VpDe67Jfxtix9",
  "key19": "54hMYYeBYX1dukquZpNoBhREmx1GFbbepDLQqJh7ybhEyWHienwSGTta5ErEPYqyeoDpsRECmKq6hJ4sDdrMVcf6",
  "key20": "5EQVArt3aTD6niYZ4LmqvPGwx3FPtRRZLZ8YBRhCDoAWGJN6fcdoUzkLPeV62fTcHGEVrBwEQEQ4K2LGhNFsHkfX",
  "key21": "4qzHsjQwkVT6unnCp7sRfF8LZLAo8SwVeKKxRMUXmJoq771A8hj7YCuSRxFfEX98jZ7dUQdZCENx5DJk8Sgd1aJy",
  "key22": "2ro3b2FRkdnxuJdZBuvz9PXdtG4LJyMqqFGVPEnQ1DiF1J6gNybyJPcD2Nii4Hcq8wTWYMSmizkVedBVL7KDPJqh",
  "key23": "ps3hqef4nX1mSM8oME3dz29xYwF67qdctHH6Wn83nH5htEsL8b9nPAmQXD1uf7SiX1hu3JNDhPTgjE6c3yGtxd7",
  "key24": "66ct2eTQQjuMaGaZNPSqHravuvjP8dMdCVXGBXzPNKLCabQrvArF3TJAc68CR1f7WeRA5NYrSweFZyS7CfFo7Fuk",
  "key25": "2KiYdhDdW1UPiELr3BtZGnkze9rkM8gicejQ4DjrFuUuJLvyNJg6EXU7FyLRGk5nBFMq3QuCrdNFCvTbm9TaAKmh",
  "key26": "1SBqKYqdWXSRtEKkiwGi732WRuBEmFmHNFUK5JJ36w66wqmZQ3UPk7GXSsMczdjkQcazqDKyHuo9j7WLbD37EH5",
  "key27": "2RZMUXET8JowreGWB5zhqx2vRNvy6Sj39KGzNyPwa79fYGL8BRFu9zwSXABKg2QdHZdjhuCtowCA3SsMz8FdVNao",
  "key28": "22BUvQugRavx9D3s4uJkMz1t6XrvGnXdkZvSmieo3Yeg1Tb683xRfDgyBxTv8G5tguXwx1TvmB59Kv9wnXPgoKNM",
  "key29": "45328cKJGKtm18fLAD6U7NgNE1P1VgyP6XbTwAGsJKyqX84jHdxQJTcKA279GKCF7pLUcn5Q5ndxTvx7BBotQKkX",
  "key30": "5e7t3pZ4JKZLz9A3KUjz5eCLu44aT8iXMzBCPScbSfaByYHMMg5SVRTD5QcJqXRB8viDtUhDd4Y4HxfwjMwTVNSa",
  "key31": "z6yodmoFVK84bovoTySZhMkYy31fVUPZiScFYGpR8KzzkD3Ye92rPgC4eo8LmZGjZyvX8xt8W2kUSaygckJXWiR",
  "key32": "4pJHtqZey55AniE5dbynLUaEoc5rm6ZFad5Sa78uZ2GTje8GWVngWHP4CYJaZmPBXDXnFeq6kfRDWiPAZRgRMWUQ",
  "key33": "3zGk9eZA9zTTnrJMktLC7JyMFd6ZmsrzP9the1iHMauj2cQjPN7ph7sWyq5Pe2F8HT3Zh9t7xQx2HHtKthBNp9AD",
  "key34": "5pC46394cyHc4QrG3EaDwjrNkznU7PXHaAdAuaG3kN18qRCBzZ5rudYDQzy562uSecfEf3qwkiWnzZLvTS6fu4pU",
  "key35": "pgjQx29ihT12NcM73rrDB1mku3dZMXTN4hGRxWboALYi21tRYK65vd7J4UXreARPYTk76ugqcE7mqn9F8i7mSAt",
  "key36": "3e1yxh2p6bHoXFt3rNfgxag8a7uRdkP8Qp3YyhKcYq6rn6Z3bptUdPdAUzQivuv2UEuVjjur3KdwDy3f1zdDeErE",
  "key37": "3sEjCzWnxtDcTNu6bCMJhMjjog3AFQjxSeykozA1F5P1QfdS4rVNXaGtcWSqeJsV1zzBcfyzZMNg64kbPQ32AE1f",
  "key38": "3jnwbQ2eJGutg6ZsqLmGzeZLw2FjD8YDLXYjrDFn8Qci19heC9mZmqTbWKDMukCwvxuiva3TD2fEnnCH476FmJUx",
  "key39": "3jYkc4dt5jspALpxErSKCgZmQrGDsAyxVRrriNa1Ce1ZSNeBM3hukk4qWmhZkURgkiiaLctwbAqgEMU5Vk8vVVtF",
  "key40": "57Qroh7JUcLy1utuKjMbVubDLWe2hc28WcqU3waUGVBth3xG61MnTFMvaXcFuca6iuELzUWfxuPPY8KfJsvsbfNk",
  "key41": "hsdjoQH9umcyjVtsF3fpAVgdZSAKryVLWcZKZ3jQXUqT4bLT6eheM3L1Pyn5EZYHjCRSaZDgsRxpdswBaaFe4hu"
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
