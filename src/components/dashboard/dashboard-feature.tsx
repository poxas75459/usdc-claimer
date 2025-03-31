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
    "KWA7fyP4VukLPXp3Jc9uxkzzxazb2w7N5D3eDjhwyxp5eM1Ru92nxTz7PSHJJm3N3azE3iRw9GzKEtxUaTQ96CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Spg4NB8HDuuo95C6ZhKEC8VdREUpVJMRjkyhjU8zR5TbfXm51b9CC1P1oyGHQNPB7LFfk7f5bYdxVe149H5CbFA",
  "key1": "2Vdmu1MZYo9ExaRLaxLL9LDTBTk4zHZXZsKYDLQzB2oXXTegLt3CqYCmMNEzyGSBbtQaDnfUFjjtRhD1XP9fRe56",
  "key2": "4P1xecGxQ4KQyw35tLgopfERjj2izRL44qHmvPj4vEMHvai99Hd3ij8NAjPvsmY1T1jbsaHJffYTviDv5XxDredR",
  "key3": "4uqfvnfYKFjDAKHsRsVvmgZSBfwECtuohYReFDCknYCJDNo9wys2yRvx4Q45PG1Y4tGnzUnV6LmuVT994tJ8sw2T",
  "key4": "3rxPQkyteNuyVVf2ZbTVwahotztQHtPUjTnwLY7VC7DB4zGDdBgBhmFppqYQKZLKbbn1xACTgv9nVsexWWUyzY3Q",
  "key5": "4deo1hXJ83HjGiaXkVfeG9eUZzLih2srDrcyz4kLf6KkYNmda19YqF3T6bQRf3hUBwpoM2H1pNHx8aLje19vUfR6",
  "key6": "3ehT5G5Fq8cEHaxCD2C9oc7beHUFBSmJ4UEiQ2UBv9jLqEpHhGjP6fmy1QkBbhyPiwzhVvFpmCsoqcxupLwDjVj7",
  "key7": "ZvGz1cHmkPk2t4nm8fAijrevQ3UdmLzXjJEPd3TWUdz6sy61XAVTvKXd1Qdy4rXjejkUspZawamgYuyx1njXUYW",
  "key8": "DqAFxEfy91fbDdSksAuz2E8mdDJdZBQjeQEmN7NvxwNRzxRLJfdCxadEMbTCacGH6ZALcP4qxe3VpZEJNrAEsJB",
  "key9": "ipTSEVtff4kS46LFU8WrVmVfchJDmFjH81crGuZU6udZ8mxQVHPimNbbNsEhA4jzhD1DKfvYvnBZwfhJqjzXSYP",
  "key10": "37LJN7NgWKuZmysQzugCPn1tXgwiuy4u2r5fphnUNkj87MLRKCDZKTidPkeLa3Kv1D7E2sFSEdErYZhDN4muFbR3",
  "key11": "2m5qS9hRew2CxQNKtsrGxf6zHCc9r4SN2EfHjW8WDDgJjEk7PdnJGkQWR3cHc5jR4cQmyCNtwgRTP95hLkhX2mnS",
  "key12": "5a4XGPx4tL8FnumXgYHRvE2TFVkYmn9jzb1owN6gwuhdUB3SD59cFJD79H2xSXXL8afybScWTac9NYSqgkFwFfJA",
  "key13": "5wqorXuFtH8vBGVtS8ntixVPfXJUucmo7sKM95NbmR4cUdk2qskD9Jk3E21Xg5uWf3br7f7ZPVn2ouzU1EfWhkZK",
  "key14": "65uQmE3Bv8DkS8APKGhxbmbnkccrKJKLhW6TcPj4xsrq5xs8ZTKykjZ5WznGPKgg1oGFop2aiD3jPwU5CRAJbvUy",
  "key15": "2HpvTXuEwFZ6adoDH7Wz19ab4pNkTHjNndEa7P4qQ3vNetdWw6nSf7tWfiQCwBRuYEPPJF7o2rP1HKnTRmrWfAZw",
  "key16": "2nM9sxP2469L8AnS95ocdPJamYotwrSKzHtASp8ikz3AgRLLpHjRobxktE6ux4PyKdHDVn4RHKsMmWaguEzA1MfF",
  "key17": "4VNv712zTqUGJaWdQAzE7UZoFL5QUbdq2Ep27A5VpHRQDJ9cFTLMR5snsJaCSdA6MR86VzDUBHYXD4fCzn6P2mxh",
  "key18": "59957MvUncwJcLhH12S346y9FMFJRoqxoMfKDwAwXKZsheVg6MB5X7x3qJnz2Q3yMnk2GPncYWHaYyPHqnXRfHcp",
  "key19": "26J3JG12CX1AvSLj1QgEauZKU3r5c5TA6GAmqYiqK6NqREAro9LmbZwfuy1Bp3yXFZmJzoksgNEQK7pExaQgK7Gc",
  "key20": "3nbptBsVJLdosTJVeu3PdQZEjkAucptcQqg3rTHxAzsKqEMyfgvdpjW5UcWAf5iLCQ7yacxS1NJGQwNJqrJwYvVc",
  "key21": "2R1Pz6Lkn9N2uVaqgkXWKurn5XxGS7qetk26hUdvSYP5DzVJXbdu3ztXC3BrXfjJAb8bJ9E13YhBsnP1w63yJGva",
  "key22": "4q2PRWgV5XoTniekw7dmRyiK3avLpSLTbRZ3Z8k2HmWTETJaSEx1Ubz5ksSDZ9fBjXWufFw9W1HojGAfq2ztitri",
  "key23": "4XRj9TLEnPBrjueKKgqCCNjQYbBew9BnqXcpaK3vVBmuwA3Yy1ZMtFsygYdh3dNi15hS144fpJa6moYue5muG52B",
  "key24": "2iHcjaMSUhwFoat9urLDHpSW59QPKkGKpCJXiL6ZXWuRYMudkW6P3citvmAfAznEf5NDY2KeDFCLLAMBNpZenJb8",
  "key25": "5REo1S1zF33pyz793gDhccedQhGAU7nh7EhbXkjqKEcmEeT2u8PabmUKNiXc92X9QfvWAiZH2g4ory7TAqFepNkF",
  "key26": "2f4JnRfqFFVGeACKj8azCEYXDorAeanyi5fFV2ELykiHd4pPNR42qDgisdXwz6wiSr28gzA3FJ84nj7Kw5zMM1n9",
  "key27": "4wtFaaNe2C166jxhWjMazHYHGqr6wAAURVoXe8D3wWzZzEhV7CVQRD2HNGBg4Rbq1VjHiqjU4aqKcSYJk4QjEAKz",
  "key28": "4f2GYg45GL74zKkKxXxDmoNaC3cixsz6RoeYKitvQsqCAaPysZ428mSFKTvSTK5U6qQ4krc3FQJPvpAGGr8dvTa3",
  "key29": "4FGtpGpb2UgXGEHEt1N8KYgAuxaqAeRgvSAngfjq8T45bUiQDHG6XiufYkm3295jaQVg9V8pKbiZFXV8dAmvicYp",
  "key30": "4PHXXJTD5tecg1qKzFxkF8641svRUDuWGRM4hYvkYSiWTE8am8LvykzBHrpHZ81jSKiyBfVe2jSmvmtirAQKV7Nh",
  "key31": "rRAQBJ9PNmkB7wvQgzH9cQ25qtDFaUsqBMGLqnzNZMvFYa3duKSVaCgtTWByECM3difB4VvpePwaZ2BGETbYSZA",
  "key32": "2KYHmgPSb44GmGoYZAhJSw3SWVg3ZcDKGtL2jF4AMq5Sd2i4CG7iio4Uum6Na4FrvuQbpQQRjftk7fLDVgAT191i",
  "key33": "32KU7pG5TkmiQeU43rhiV17rmWVPjwpMCRzacv7b7nXpkE97rvVmtfLW2B3gkvtjmDU5zcqcu2nYjGCRyZ1hKtNf",
  "key34": "7ACaT34VyywKPRhTrfJVRL7ctgJB9V6pdsn9Cih3CaEkUjeia4yFMwAovdeU86ZD75gvzG5968CoYC4MPay5HaH",
  "key35": "rh7A8dZ55bAQmPEPBYr1BTrVaDe3PbF4Gbm3KydNBma8Lt9rBSPwC8LHoLsC9xX8hkcGfeZZWcFgk9YFsJLbdXp",
  "key36": "5v8K9ih17c1szmfsK52uSYd9SUvhitdX6vCEuQSWDVSRKBr9UGprR3AZZKdi3vjS1wSST7eiRuEXyf3qpGiE7mmi",
  "key37": "2fLXa5sr8Cbh5u6FZbLcNq4MNSTmrgdqaWdtSyoLESFrv483Rq5r695NXgALmVM3iQFeeFaWgCcCi93kBn9P43oQ",
  "key38": "471QeQ8NC4UJui6A3mE4WYLr9tm8woaWjywT8sGD2oKjcNafwAK3HwMHwgU2HdDEYC2f97XaR6irrK8K9E51BhX7",
  "key39": "2znD9g5Q6pVvP7tp7CtVqv1VgTqpRRw8QGJ66aoj7as8QkJLzXDRW9XqiUeQCvSGh2cAoTWtFJaNK2gvg2iyqiDm",
  "key40": "9uNGRSXpYK2mJAsZwkdmAWwHA5jNeJnyogKiGNX2gEEdADNQHSbLSuzc4baft8ucCF4JSZZAcetgsGuz9sfhGZ9",
  "key41": "6E3neh87D4J2rREHcxbTBDeYYmY4yF8gt5um8tqXV4HbrSPWbovASDrusm54XzhWCMkCWffjrkERabcTnxKAYur",
  "key42": "hC2Wh8CR2TBQ5cDTTnLyMcmRQZrULQVJMYhGF5zTVfxQwoC1UP6Nrd2uocEmzTkvFY6YYWRGeg6rMoLh7jsLMaK",
  "key43": "37vmfcrqpFtsnYWaL8aA7U4aBHz48cpzpfxMTHaiDAKQ7uqT5V89k7wqvkgatftMXNP6k3yeSZt4vuYmLbo67a6r",
  "key44": "2HY4VC3vSkdRX7BmQsfVjRwVp5KrB311RtXtPfaeCSfkS7k7JGyiBeY1TaiKv2aC3hmbyGopRuf76FLGRnD1ywKH",
  "key45": "9wA6RzsXhgJLHFwzrwtAH4kQXpuVD7JrUbgm1i7V4kVRmirpxNaY2wEcPhEEPgYBkxbwZwDt3phxXSyjArX4SxD",
  "key46": "2T44EEhhvJ8qPgeKt8JvRU7rxZoNZQWKVFEDNj3VG7XRzN3jk2Ct2qtc3txHKte4AHrxNddMi1i4QeiZ9qxXpGiD",
  "key47": "2AXhDokWXxsmpk75bwc5WVXQTQZBZG7dgCkamBCPkrZ4ntz7EJwJVXeL8aLrB1bzbwSXg6KfDQHtZXX6WGdXpbo7"
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
