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
    "2tgapGmevM6jwVxcyKsvEBUruUDeiTSyrQRX1dFaJdk6QRBsiEUFUWQZryweHJ2kWkCbatmFqFNVyBMPGAXdYQ8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P48zE7P7z8shRjuxP2sNbe5g8AMFFFUidrL8HHTD426LYRBTiggC5xm5B7d5Tf7BCgWkAs6sBVf8HQb1GwDBqw8",
  "key1": "BcaPSrfPAGXGRocyBugVSjMSgw8mU7BXsHuqTqpdV9VikVJNAM1oHwyUopuu2jw3nBxPkd1TCaAzRr4VfrntJfx",
  "key2": "8P5yPTD4SntTKEnEtipBQJLSQ9GSRW5dTFUweQE5YLN9RszkGrkM1rjXSqnrefckdicAeqMgsus4euX6UCUAhEp",
  "key3": "2fcAPxmddohkZe2Z5XAUdaZEPwqkzr5xf3XMoma6LkUkdK8pmwR2NhGWzcTNix5YPR5NuBr8b8sQuNeDLH4S8VG4",
  "key4": "3Xbs793D7uKswmt815mhEgCgpSxXc356iDzRNZaegEchHWm2DCcTeXTTDuzx4DEaBCUWqzFapZGr3Uwn887ghwjz",
  "key5": "63a3FMLdVi8eGbL2mWuN9vGdGxqgz3B4yb8Q3RcH8uyExVr4J2V9iCbs7tdfw59qeP4pBwGKQTnaKXJeLhqbP1V2",
  "key6": "2oXSPKex1imzJJMPy8j9b8mr2VyHzUyxL16NcswjzC89FirGXUsfL5MhQdCxxZwf9EmnpZUXtEKZxT7ueSGYXk9M",
  "key7": "hxNFACt4iknPPzqbeN6HdkZXNEsfQ7rpiU445M478NjxxbNhdaJMLCMHsU2XRYevKS6uz2FZ8YCCHSpbeHNvX9f",
  "key8": "2zf79fmSiX3mDu77aVoyWoboAqWgCdvu9ceCLBMFrS5Rw5mKRMSvUhnifQqsH5WkUayqsRgKhw2KEhAcCMVUKiRk",
  "key9": "4YStEo7sZo35EwyuBFcgkEFjh6g34eWAUrkNko9V3zMXMkVZ8LqUxz2W9MYwqtFvYWpLaApQ1aar6qjDJgzfD7TP",
  "key10": "5uEyMazP88Cmrrd8QRoaXN2c2TgHF75MkoVHzwn7KBTkA7rbdfXH97vL2hpHuZEUuQFWTistBFcdEk9V9WJcpZQ1",
  "key11": "KBdnfAfBashsLqU54u3VBwYRVkx6tZT2wXt6jtsYCiqEMLLmyyMXQjHMtCKTfvqKCkGtmyxy5GZ7rr2k6Hr2fkg",
  "key12": "2CKmTiF5Kjb5nXMYYM3LtfHytXNV4KV5XVdktve5Tz8Yong4cebB5TAQdJHFbt3SbrteC5EsenY7xTWH3LcbsoHw",
  "key13": "58uDqPCBfxiNB6NczTxiYpCVFJ9FoCCfGiAKV8Q1HwBw8YVeiD6HUjr2z3A8j13utQdxu989vSid2xbx2oLVg6Fi",
  "key14": "3TZH7nwxtCjayNn29jwms3ztFi6atRN8CkfpPWA7cAMNMaGEfDSPJYRDUXxcaamwguZ9MK5meZ9JD3RHfZwUbMkJ",
  "key15": "2RahVYXvpF8DPoGrg1VdTMTuWMdwj5C46DiyqBm5vKVaLENTZHxH7FNgsvj6JqSsnJB5SGYasGec6rHBB9BsUaA3",
  "key16": "4TGhjkbE81s4ibmEtUp4bAgZssjKx2ecXu3LL2gKyfeNRoYi3QdWv5t5qM8D3FfgBbBH9SSGhEsbSKbee8XzarF9",
  "key17": "43a2STubunWW7EBZt5G1vC14HMGZrh4HmWZKAypwdQRWKmffEGD8SRN1hh183Hz2ypsQrBo4WtNrYRcWssmjDKrf",
  "key18": "3nfh4zJ6KimxNoy9a6qmjKvoFzXB4r8jrxjeoX6RuPM4MunUTiPVP95uqVfo3oQvTUh8jJKJNYPbxdHqUk7qHi8t",
  "key19": "2hX53fkaFoDEfXJe7EQEpMVVD5jAUQvvnPz2wwML5Rrm9Z5DWYtkmoq7bzvgkW1z4f1T57tTJShbbFqeLRWhofAd",
  "key20": "nuvZg4mLMUsz7P522Kb1C3VGLP8315FYJfB2VfAtYVMrQHJgA1x9DkpdyLE3ZwN4NTZamyqyCchKipRkgdMRnF6",
  "key21": "j6wzCNH1HNKhJ4N1AkLV33w9ruYpNLhek9Tu4wqBDHKHdj76nGdxktt3vJSSmhz8Xpv6fkEWNzg7D8HdCiVDnJm",
  "key22": "2aJ9Sin4rxpmf3zpwCJKZt6V513SumEvsgBofKftaSSr2wRqoQmFe7aMx48RxYPyHSpDR4zc5zrPm98zt2wXSFq4",
  "key23": "4VWAybw8V5LKVDp988aJyauHgSriAtARXxpMH5tbB8juXrvVLMCd9cngT2Ma2ANAKqWm7uGXFuActotZEYVj1wYK",
  "key24": "67pWDHFzPHNKLLdLnk7wTFbvCekn21ntPynNTe3q4BGnW6bjLfteazPngULsMNYdjKNGZRewTUKaR4tmBCujM4QK",
  "key25": "77oPRbxjomyKkoxhHug1dtAKsb6DkRDDDqxzW635R3uPmZwCvmm4xfw9C2mUmqmP71XKnigzWkSfqirEbp1F3uF",
  "key26": "2EoorZ4SzajiHcA4nawpJxUpN8Ry3JtFwZUQt6H64WQiDRfvbuDKxfFckKiCRGb3k5mmGt2aWQVBHdp7vgUdKwc2",
  "key27": "6xtBmmdbnpozQoWjEUvNfVvNW1KYzkHKmQcKAHaGbEysfdQ5abnGnmPHXzUWe5FQLkr9W5xUPwximsTvpHCa4fh",
  "key28": "7HSSP5pEMZjWrZPkrxAryVkqUhTjGpzd4Eyf1zWtbW2LdGDksigyG56teRZZsPEv7LBMcktwT5Y69LHqnA21V7U",
  "key29": "2BuzVzL1RgtJaJ3s2fKHErsxoirWdEUtxtTjhaZCqt1kPf9yhMEjMNcy4oNqXFsqGB71U8q24Uogfy6Tcpg93fdF",
  "key30": "4nf8PQDVveFLkMY9wymGrv2GqLmR5EiPQ5tbe89iDGYpPiqbQrmC22fvwkydEQv1A7fxtmudjA5hAM8cvo72K12q",
  "key31": "5NCTj9TCc1JFQfVanXE99dAwRPbnD7r7BFeQ1DuTjMiNkusa7ehpp4qArb5KdKNh8PAVd7iPnSj1L4Wp6uqW7AVH",
  "key32": "5VNTciX7K7RA1NeTGhJqaX6vi3M8hHR7yUrR5UWsLmNcugKmd2rkaEFwrKGUA45vW7ZsYcJ3ZY9HhZFLsL7mXfmb"
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
