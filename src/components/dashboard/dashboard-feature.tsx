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
    "3boLdggtg3hj7tgMSf4CryjhwQRr1EDfUUUoEWDkAym4pxhrpnCtUCMmkZWmXSEyGTf4gPkuXJjhU98Gmgv2V5KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvzNbh45tTGC3YubjavF38EKE1m3nxhoRUXRWd85pSXovkV8kWUU27YJqVxYmjxDoEvAQBwUzwc9oiXo5m7K358",
  "key1": "jEeQf6A7YDoYaFqHqQiravbWwMpUH8CcU3n2vtzRkbHhnx1V9mEhNxyLAa42qigMFYAbCd9aiUbDJuYh1LvaCtU",
  "key2": "3cUE7LoDvFHMSBXEvJ6Ydio4Lnfs85RaAV4LTCLxNJ8vmUmzZCXMSb1jnDkpCS5Hd1XTQ16vGsGpM9bkUFVL57NU",
  "key3": "27y8DrhyHfsMzSNji6F8WRvXfnj7axxhmiodj4FEk3SuGxcRB23WTu9azSA4f6tmFpAALcsGLZHbHh1d4yj3oGpJ",
  "key4": "3R3YPzViqjaeQgfhjgCGogswsFLjzW5FKMtCv4wjdWrZfVU3tqabyr44SvoPLQwiKLpsQDpHpv4588qrv7D6X5ae",
  "key5": "4aUVabejEsRCHnKCMjYiw6nQecX8dauDpLphHZszQRLBQeQopqQhZEehDK9DVgKerj6DJfHCveJNSuPQDhXVUXgy",
  "key6": "4Pv65o82d2FHv97M67wYnyE1zWToyWHZrVJZAu1UWGPpuw5LuQ8r8n27mwtPg2v772XgmqPbVbiaDdpsijNMC1LL",
  "key7": "2J9JUaUL9c26sfh2eiWVxQQksCCx3ZDb1VR2qvXuTeJWBfJSUjHn42DoPKnn1M3HqxwhwwwC8p5dSJRYZR3CTz89",
  "key8": "2BTrB3krs7A14Rz58WGipgSL8CLQpdVn1kgGcG6Box9P5qhnEkTgnCwTd1XarK5tsa36hdMQibjfczrrpp2yvjsW",
  "key9": "5Socv7RPLw9dhbLGXErbjojdSBZkzcQ5bwV4d9GQPpQ1XTgRRPC2DPpnKvjdoj3qDMzyqLVpYNLXoWtn2C6pGyUB",
  "key10": "5b6fjEKeuHsVVVdXYYsAK1AWCWnGmGBNeZuZWu4q6ZPm2VWWgt4PkWAqFwemm4jePL7T5oX1G4kPESbQyJGeRqW8",
  "key11": "2r55X4u8SovZVHA2GLSfDxPWq2tNFTsABTatHaf2quD82PD1Hx4zF6p1j4KGzQg1ky5CjtHmEcdDVnU8VWXdcsuZ",
  "key12": "3httTbKL415A2giBeKTEnWZH3MYvcMicZqvAhLM1fUmmHkvz7Mzqu2DDqufjLJ7WAqUpBZEuTsqkZcgp6dGrYeDn",
  "key13": "eQjGtur9fe6CSnzDX8T3GHKj7fCN4x59vBYFjJaGYYCvy75X1NRXJ3ECYUjCzo2GUpk7WQgMtPs7i4onh2MPPzR",
  "key14": "Mwr7x2mVmNXLZkSfRx3xHt9TsEpQMPsoe6Fwg178fcYSMzMQUpcvx43gSufM5j6Z2Qxv66N49cPkSuktCYGfNxu",
  "key15": "5pciGcuCCmaabXuZ8cZ8ZqJZNkepDrXxCHeCLPPxhG2B7kuoM6oRSYXFaWX7iqC23KPy85UJmkz3JGsGZRYqYqs7",
  "key16": "2bLdNx4gcDtktxeLKREpRLmfmg1Ppon1zMMeCUH36NVtn7Kq2tGjZiBAZVjAh5BYJBipyJB92xJnDrMokfErvQn4",
  "key17": "jPJW6gz44RGgjnyqxruc4AcKXZt8P7ideWpvQB3kWp9osh5xzBU7VXGGWxPVhzBMoeFootXyHQAv9WiPi8TuL3p",
  "key18": "4CxNFqvfRLeW817RiCEt2ek44etSD5JwaAvjBVWKAVKsLGaBtrTLPyGV2s47LETeWaHh7cey7xFZXJbfMofdUER",
  "key19": "4YmvsRfMAzQuFEFCPZZqFjj8d3AphAZKC2JPSd4qN9H4M9Sf9Aab4B2QDo8sd4qMs47hmEpF8E6cKNmjsQHaJVXz",
  "key20": "3yEbNkuT6fyzWt4jhJd7AcR6i7n36s9AN8YpkW2LCeG9EVHLJx3BudoGAAWAaPpdi175ErJURLkFNEzuU5BWHmy",
  "key21": "2K7st4XMVhYLnqFz6jYDMRrw22nRPQWoXmWPuXzxqoCmg3xNUEUAa11FDX4YdFpsbeVnXPQGxFmSqcxPJSTKNeLf",
  "key22": "5R86VmZNmLcvuoo9M6Qb63DVRLXHgJusBNMKzR76AJz8tS1A2wMEnaARKRzpip3KA1nY6FNU6MbPcLqkCRD1SSDo",
  "key23": "5BxkV2XtNcwcK5euR3k7WvdxRAmbD61ewdWhQnhw1QPdMwZ7BKGa6Eyxp39Dp2pY9KmFtAKg2J6XMR1HgZoTyEqK",
  "key24": "5PQfxEoTAELZ5Y7SNKD5aCKmQVxMLRSvrxPFYbWJboYyTLoQEie1XbxKZnXiwMrUPcbKeceHUGYx6vwZe9CcHX58",
  "key25": "iqTXKftWy5Zvec5G7rZK4KiQ7mdka5w6su59Uk66PXKk5NYeub5yGFUpsEFNoDBJVpEc3JRLXpaxXZ4vkFGNXJz",
  "key26": "64Am2Xj65jkeJUUSyQ3QjsG5J3Zwi8NRgdGckUAg657uUPyaBPZwCSwSxGAQmkYKFqNvyGG4joDKgQNU2VhTLySc",
  "key27": "3B3dsc8yDsr8yrEMnarv3ckEs7oTjih5tmNMnk3PrdP3TJVpqP7MiUQr1teQF5JiD7Dpcdfz1W4v3EJXvs4g7tUZ",
  "key28": "4afo6kAUixdUDjyqHMm1wrZrf38ddzRmYhJifVbk32oh5oTmzUaZeCTExebxNVZBwmRdRxnFrudL1eVtcL8w5nNA",
  "key29": "3kzJn3SdbL8DPksoEKtTZzPMJpBMwLinXVKwCe9SQYVjQAmiCVEFFBJ8pxqNgWjxg1wHehYQKr5LBkJnxLrvjVu6",
  "key30": "36TpPD73VT15fBwaGf8jGbc16BUUGC2dfyDNiTr2NE89mDvqBQn2HrZR326EaFycut6Mza1yejuKDmPxg4aHeAMF"
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
