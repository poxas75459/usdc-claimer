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
    "64WrxMftgTtFUSj9JRqhDr9Ay8iVRqmMLAaJBV9JBWfRUw6bqHVmf2vp3WzSzp8DLt5q66HxEnSedE46RGLZTxYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDc4RxRUVz6d1hjFkspGzZy5kbjRkA8fS9UNrfwJAFKzUK72oWveyxQMiA1NHXeNpn8Y8iBpNzivkC3f8Sc1Dky",
  "key1": "5sM4tiMByL24vZSwRYY9a3qeak9VFL6sg7FUPpJQx7ndkkHGa7GF4VEZ49N2hBHuqHhXhme8uvStWVsD624iHuLY",
  "key2": "65BkXjTKxrK2bAwK5BFPBvpj2vJP1PSUHhLGSnb1Zn6Gz8y6KmcgzH7xoZSbXuRMznRgue74h1nmFxrpArBPjJMz",
  "key3": "2JukuP7PuUU9rAJTBtknYAudn4UoGw4rmabGfjgArb871kAZ8bGhf93xdqYKLWS2ZURGPed4Bs2PFoYDfGdsJUSh",
  "key4": "4tyxnnvGAa1zFcp79YiUPkrU8B5DqwPHjtt61KufrHiucusqrXyrY2zsVNSBoLuaWTZM2D5coYiXkF7yzPfobJwN",
  "key5": "2hmw5px35g5nm51j5YePoziRiiJi1VHHea2VDWD9i3xo1oaQUnNDiik7vr6hLRgzf7HTGSuNvuQoRboQnUwwVQCR",
  "key6": "3ReqnK9CSPWru8g62G4Up9ct1MYtMdAbFpdYK95JzQc8M7Wq5vpU4Tvu2GvTS6b6JZmjfrMUzkJWQXYSywBrygCh",
  "key7": "2vgjUEtWVDu4JSo9NAZPm85YngCRxmWXyK5ecpvbFRwzuRZPt6BbNVy1PgFb6C3JyKoU8uc7ghBmUZMnHkKzzrLi",
  "key8": "55Uqc5fZk5xBLHbhqU7Lrpq8FV1kppMXypxAewrnDFxLV8b6saaZCKBGUZ1SqugaPMccPxopzNobLhE7LYSSp6BD",
  "key9": "3ALp6eqo28n2EJZoGMWFrqo2rwRarPqX31xJ2WHW1q7xnvWLAnA7uyovgTht2KWTxworz7gjW5rrW2gMWXjSmTaK",
  "key10": "4gzwafUgMK7t1wjZaKxfvMbYiHEoWZZbaH55LrEK4PNTDHbe3WJQUJQdTDK5eZ411vJ4sfRG2GBqwy4cvotbH1rD",
  "key11": "5GMmNhhHsGd763jbUCmAN3YRzRAsZVLJqmN2fJsWMgehCm1g95goR5En1q4vW4qADmXbVTixjt8enKSCMekJRD6f",
  "key12": "KpXAxWQH2vf3dFaVsJGTBdbmDSw6NNm3as9ZisbMrF2JXQ7QQjrwaY3ofcEg4CDNpwJoBe7q9q44dLshWkACnk2",
  "key13": "HegHN2LYGuoBVVagsA3S5DMusxWzJTno3Uk1qPZPTqwUZXjAVfHFyk7wGP6pKYqXrqJknqUo9AvvNWPv5GhfMwZ",
  "key14": "28H1uWtsT7XJcqtQmCN3eLKHnB5cQUf7jrxgfZtvFwGsQr6SYb3Jx9vUc3sdpagqUMNg2Tejqgej2q8dyd6zS5fk",
  "key15": "5h3gBPZQWLk4AQLVPG37qGNG8M4RLnfmBE27PFt5myVTAdi9dDocQi6Wb8F8UnkrCfzrhWQMumcNqAYnWA7FfWKy",
  "key16": "66MzDShd83j2A1wGybyrkDv3MZLwDsYtLt3A2LCW1xk4DY16rqazA7uXH8GwC4AUy35ci3JK2BtrBUT8TbDEkLGC",
  "key17": "44i4UhZS8UZaftqToj3jM83ghKB8eV3km3EuUFK7V86jgDgqY1eWC3CDWBsnq6yr2zxeTKe8625GMERyfJ8mjZqo",
  "key18": "648yAi7rdc1wuboQq3F4NeCXMRaTYsx8n2FY24row7K1Hx7Vojz193Ufp8NhcKbwC621Btzpvei1NFAub3TkVt8Y",
  "key19": "5FBRfYPjyh2WrruVntWDfyqjr2xCVpuUkkYKDcZjQurUgcZtWVA592jYZ1MuEVwPwAdV8kgmw2WE4Srsmi9qTy5m",
  "key20": "2tLJwRRLcAqjetcoaB8tK5qxhoJqy5N3WaAQUkAg16gGjqpuYwtoCpZjwxkybpbnC1Ai7DvwfMuocCgTLEeKDW1h",
  "key21": "2wLJbZ4zBH1dkeBa1MnxWA8ip9btXH3BwMcMch9n4x2Ca6LgDynn3UUFCNWmnLCsf9QMzRiFoKbra6u7JfYB8nUS",
  "key22": "51ig6TDQUfWtVvwQZfDvwSPQjLygmkYE8zaQd6gDZEW1ajGr2S1LjY8QKiRJy9RUiDmFcpfK1k4VwXZG2vuK3HHk",
  "key23": "c8hMCDRXTcvawK6yy3NV1XXm3QSppqZeGHz5x1Yi3A72ckE5Nk2PcxGRp7a7qScwKs1yiEBo9f9eLCNtuqbg2s9",
  "key24": "51qbhGmYD78owSU3TMpgx3qgKh4CC4Rj1XjHPt2F6T4x6CCJ4gdFXYrvB6oHdZAsT5NR9QFNziQwDhfUm9iNDgXm",
  "key25": "3FPsw57FVdbHtj8Yc9Jm9rcCzJjEsPSkSCsGraYetDvXdruPPeN2zEbP9i5GzD7nnEnDpxEupJH2eMnVv9vpj1E9",
  "key26": "5A36YL8xfJBpNGRid54nus5aGw88ezYhKqhoEzmakjX1boVFG6aAUyJ8bUXHQaH4jVjAUUfzFaaA7KWiVu1nYcTV",
  "key27": "FF9uMe1EPoUHBEuURe2JrBpNhyDC8XtE6xUw6XU5CXaykbyiNyxAj3bA2kkekbBrJpTe1yZr8nF3m1HwngBQnpF",
  "key28": "4RCk1BhT3m8jPR2AmE88jTckMgDpWPSArMAUbDgN6opZdtfgqGmkcWSpkGCfQRdCYpUf32yAuukCaFmKJhLEGMpJ",
  "key29": "2Pxfa4ky1y71KVVw5GGgtoXqUB4wkA1i92VN9XEW8EUvZxD85euUH9f2b7EcKRkEWhBT9b5GXhchDnFiDTTLfkMq",
  "key30": "66nFE76oGomuYdTD41Qm5oSRCP3HCR3WLZzSmUef67imUWxjfpby2YBpWKtLHzShtHpBWPvq7xHPQ9y77vS8eAUq",
  "key31": "BzDdnH2R2Dh2A21C6TzQQFpPciBS1booSi39rChBsPAk4ZLSysuV7eeVVSNDBrtVEbfBURV3HHAcwmMEVcZLyLF",
  "key32": "29mJ8ND34Jwc67CwnQu5qa7qG1QfQpxuj8iJX7m4Zi6kAhDSsHvTAFDDsh7HdimEbKWMiFf3mh2cXn5bx4nLsXwc",
  "key33": "4amtx93Nn42P4Csd9cxbuCKrhxtdMbt7wyTpfrYn84kCQdiTvoeXUiNASx1zwPFfuC2nnzXLsC8hXS2Mx6afZUV1",
  "key34": "4X3qbSh3TbChCpHZbp2mSEFi8CrQGZQpgsDpTPhLBSWw2FUfSQUxhXUpSVuJSfAjnPaaRjPb315dWisvZcgLguMX"
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
