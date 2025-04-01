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
    "4YNmsK2rMou2WKQgL79MkSxqRU2NZomRHHciKsVXsvQC19tkCzBhJhB2jb4gXwHRVRH854Fiygwh1LAqxCwqf4yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpLDqZW8srF5DY3j18jQTeNzJtomjkUXuVVX5XFoTCu6U64m3CxiyjJ735LnLS5QcCBzYgtYZ7DdM6pB4tpBQUC",
  "key1": "4bQ12uHdxkz5d4gwRvxvfnaCifrMBGPgfVr8tcj2B8yYcNvXdxnCfhmbuku4uuTHP1J3FmA2yZkGZshMRwsGrHfJ",
  "key2": "5gy4AMx1n1sqHqrtR8dwmi4zB7XtvninXbEsBq5d1tDpsFGsGf6FWeN8bRDx23SZSifeKUZbrNJC6ubQWSjTL6oi",
  "key3": "5MUZw5rPgxbvUrUv6p1ddrr7wuG2LsakDNiX65FMNmKj3zycMJ3Awg74JjBFkYpk7nAW4VBdwrYMYCqLMx17GVn1",
  "key4": "33RqS4dFPh4PHUnvjhV9PwLmb7UXG6PqgqFt8yeDGDPdkELCEj3fwwCcJson2FXjV6oacAXVtGtY16N52AtShdXy",
  "key5": "5F9nS5SVQAxnSkPnyrFDUqsJKhVxHC3syoeSAe8MLTjUVNWUfHFhWSWV5tYJq5MyKa1PHD17XXkREpkiyqCt9AuG",
  "key6": "4rJ91mpVEHdnWf8RNestuC4EFswEwcXQ9efqanTaGS4Caeg3JKc4gNZ7poohyzNcHZDPPZfuFJCYiqGPMCgxHoTn",
  "key7": "4ybaVDnNedLtSCoSD5nE2waMts3Xe3BtRg4dJ58nayUHjTAe1kgeZ64ocuisem1u21ETdB6V2T7o24iCdybnw1et",
  "key8": "X48EcRCTWWSxJ5H6je7iZ5Qa15NKnmuLTa1TKQiWt21LSAVMq3VKjyaMom6PmXX5E4qqmzBn4huDS52pEkTGvNa",
  "key9": "yUW81LzJVu9Q1t3k6sRRAtHji4hfYyBhu6h5ioMRpBib1Zbp3rWWzCmCEU7zvSUTWD3mRgQrcxPYGA47VLhGLS3",
  "key10": "3H4VbovL7wSXuVS1CE7gRmhBKR5XJCMvAgaiXpaFPSfqXCPdeBUEzWENUKowBs8XKn4B7sZgNhaSwdn8jeRgVHdJ",
  "key11": "3xC4VEETFS2zKAj9SoAC4jzParzW7ESRi1FPE9p8LsxeDDhJdJG8rHVAbASDBdGwqsAwp4sDtcchhFoJ6uMrpAvF",
  "key12": "5TYJy7137p4GcVHg9bSsGTEwDGHjQoZiuNUDfQVAGA7agDBeP9w9kCSyTapacv2j47k9qitsbGyL9BQZzWp9DCd5",
  "key13": "8w48Nngvdj5VoFnYZ9sQ4PQdWjJCAz1D3VqbvCSjw41Vz5qWN5ggsw5uVHaXjmukviJ5Q9KziV8g9FeZzgxPsq4",
  "key14": "PPMumXmN2KkB1XAxqBXy1mzdtZze9eru9DMGZ1CHdCQ7Ya6ejCJY1kU95n77emtbRzK3cxN92qc8GsUrC9TV2x9",
  "key15": "3TNzxoQJCbtGSqyrWGZCGSoMzBUrr6gJvba7wQj4rhmL4RiMLVt4wP5KcvuwCt7txBdudvkyuPAKhmPXy6JdENA4",
  "key16": "62FAB5wx6sLrD27yqNgdXugDLYWBxpfe5y7J96toc6yuFkkAEeTP5uWf6ww7JiiYRUhEvzDxZ94inj6G3FqB6YoD",
  "key17": "47iLPmzh8rX4KSVNWw4dK3Y2X27Nti6r3iqyP1isPftSMjiMMJcXDEKFUjLdAShf3svuHs6pGvj1C5LeYDT5ELAF",
  "key18": "2dhHpFRthuNNeNR9j83RaHYnXZ6acoZ3n24uYEqJ67FNimm6VccBB5hA1oZyYB2gRGMWR7Xzd9JtDMq7uZ8SmRFN",
  "key19": "3oqbTUsbEaj1NsT8gr4MPecaXMVQiNgfhwxiX4GLjKew8rQdonThsiiRVDm461ERhGCXL9NSg6Y6y5U44pskbQQH",
  "key20": "gnuUUV87PkBpa1U3783AyX3bomXHEZpSCDwCHxcDGDR52o31JeS1xzaioZtBiaZ9XwWHe9aYB3oPUnthSkCQW5s",
  "key21": "9H8SfGDrgVVvC72MFBuY6FFbsFgu35bNiW8aDF5fMSFz9TeNi7yL9DK6u8j4VbFQk8ZvXe4nJU13Nd8u9Q6Erna",
  "key22": "3aD6DKw6LhDZZeRivgzV88FEscCK8SPP4c3WxRAbGPnk9vUYJMofp5JCyLa7aAqL9Yg7DWaQRru1hTnCk56vaKny",
  "key23": "2fkA6n6fUHh8ZaLXtGCNJ3pfEcopt61PR3pY2qv7WEZdRy7mzUzusa6GTVT9zwYxCuKAdRZ63G4HMeDzTiEcmrqc",
  "key24": "2QcNs3AT3KjnCPw6JwdDm5JP7NMFEGTabzF2HoDRzHkQUoPjM2xThsMydt4YifqdHB12C7gMLwng1jHykZ9XA4RK",
  "key25": "2ocZpnhQTtsFwmiMrRofar76DaZ7LKcyK3m1TqoWsDBxByuUaQ6NyaWLLXTmyBdTjCqmX1vCUsVStxdpDisfeNHs",
  "key26": "25RD38aQT92ELR7wobMSEcA9bC7q137staDYHYkhri3HzK5BFXXth8xvnAWYVww4McKQACCuqrEycdMCPUT2W7Vo",
  "key27": "5jZnkZkih2GVuosB5msmKNE7TdDWbU5NR8MP7UcKTLerYb8mK5d3AWG9pf42GXP3ReMBYAUMekuZXdADE8w2TmLR",
  "key28": "3QBDKauPYbrKBiWKSnMzrLDQEbgreWrgyprdz2QFqRBBH5GaZWLpWKHJYSfLtWTPsRxyY2cDvg6prVUHXknwMhq5",
  "key29": "61XKB73t8t1pwfhMzJfP2GvRbj2gCt8WeahtmvWsqesQQt8iZYj6JVXWQdEYj6uxZGiaZkBehMjKzdh3c6E6jUS1",
  "key30": "RcZBmtypacob5VeKvsQTMeFHvKbyy65k86P8Kodh6dMTTCMeVLGU2GEs9uZKVwCGywXPDrwtLq8oQt7VHTSwAtj"
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
