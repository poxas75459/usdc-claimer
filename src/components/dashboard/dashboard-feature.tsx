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
    "22onE3Ceqs4ueYbfaypVkhbrnCxfPytQLkdrsK1wnZMnrFJCF8JTmV45quUYpseKyvav6W763YWBAY5cYqezZWfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDVHxrZSed8xGVCT71FJ8LCBHiAxzB7hMSP32umkA3WwwTZN74VdyZdaGZJ41LbvScCotfYhPNiGqWZvCvKQWq9",
  "key1": "2132PMQFW1aFssdNn8YqnL7vjD8SWNUM6Sjjyv35EN4srVnzG74fwT7NHHrvUAUNpb1aWmomd2UkpcQDrw967Ufn",
  "key2": "3MMHusVJpi5LHZdjBZtDbo5LTPzWVqRYiE83zRMj7JyvD1AXo9B766WGcyiJkw3pbFkBnnZBME4H6PqJ24C6dokx",
  "key3": "3BfZfqvcwSDcSKfKF38GC7XZa3nePBcZVtWLXUvRNS5WQsSwQXqEHCZN9eott9Z55RGAgWRY8Sue3zFma8XQYinS",
  "key4": "3QEJ7vHiz1BgaEAceiUp8URzM9apwnJueEUU6xDADpiMfrtg18R8Un1jaNy5TtfojbPNtR5X23fS1pvoFP7ByRL5",
  "key5": "4FkmJj98ZggjNpWMJNpovReonsiDkmtyAbVTVj7wZn5Qg6i9Xeg3C4eNQ6KekLqRit5Ccx5kyNorwZC5y3hjhzTC",
  "key6": "5mTo59rYcZgL8EGMRt6Mx2CcMjYseGHqgdKTWZRa4VQ4PGGU7QDxZYfTxGSoAkWL6ba99JsgPkJ5CxhpYE1LK68Y",
  "key7": "43rM5aWTAF6FHSLJKqZivDKwVhT72sik7DRRu9tt8xjxQhW5XZavb6s1J8CNSfmbtzGnGzMb3ZYcDSLhhHioinZR",
  "key8": "29XzqAmhBHFMC7rKSWmoYrXH3jLWvDSCmnN11zXWY5Z4N5iKU3AtW1umNZ9shjT8Ys8TM3nhCFjzD7JKugrbtJWa",
  "key9": "3EwW58Av7BzpZXtS46VoiTo7twpd8smbrS9ueN3wr93JwZr7NBZMi3qrkH4aZEECAef2zp7aq5Q8MnzncNFY28au",
  "key10": "1rqrh576WUvnYRZ7zCPqxUDqhK3pXRYoZJbdhYVUp2k8vjw1P73B3dkEsPtu6sDW71S7P9WbWyeoRidUEDvDdfT",
  "key11": "4b8xsRLPL7wejh8yuKMgrLgvNnG6PR4k1BnC2KAYEtFghDpcbt45aYRnZiD8ZcYJyhGiBuMns8VzBhtX1Ar4Ri1",
  "key12": "2nK8fB7BJX2EeKyHF7J3JWHSSKag49GpohBbDeKzuxknMC1XozueCPPpGTPu7Wi3As7iJYo6fRsVBigNgtnPzYrE",
  "key13": "5ZUuBtkVBrMZKvKjA6nqCDx3sT4EuUE76HMDVHWUkxQoitqbhsKyPgoig2NVDwq8HAzxbCtGUC9gXGpwwkz9aYv",
  "key14": "2XDvh4XfSMkEWZDfUBkaqs6WRC5aX4ASyDn9SnWKW1oE1T3SWFB6nNkxtVvKVmFCvGXMC1AYZCBStQdVMjn1uGDV",
  "key15": "226EfxmGFjpRZjwFTjtF4rubgGxE4ixkCDToUBBxZhzbDrDnuyBXgMqBGBC6nPM9AkevjqESu1NGposHtrmuDUPG",
  "key16": "3nPJEq3TuHMsE6Zs8KRa7ban5XKZtZ2b5MYyc3cvwWt7MWT5Ny9vdxzzjXLunw286Fi8UF3WXDfuDU5W5cSKGtx8",
  "key17": "59ZW8gsjdsCGQz2QQiKHoWzWbrPKawTHRTJ8AshVnBFjpvt24qHy7knd767SiyTsTn2GYEJ2wvLyguqcrjpYHW3v",
  "key18": "5yjciS5AEsRpsSLhTHoeAt3nXAhXMFaVd4PJjmp5gSbXXxPrwx9D43fEJLRWQxTFT6zK2Q5rUe9hEUehsnqXawda",
  "key19": "Kt3gKkjLJ2yfrcUFmxq5ABMyQEXJBZHAv68owGqnAmYXLdd4beeCG6UwP1QXDY5P876wSFUsU3GqNJ9nCaWW6kG",
  "key20": "5hDPaiLgL869tjLnhjwpVH4rDe5JLuPw2fVZ8uq5dCiuE29rTNWauJLsochXxe6FX5sAEyJDqapq4mx3gFaVcXJ6",
  "key21": "61ebLFVtFp7PLFS9u7XGbZPuYjkmVKY3mtNkKyyPppT3xQ54UVVhFLb2PdxAHcCMuuHBufUzvvjA6fcZEpyxGMCD",
  "key22": "3efPH3XsoTRkodR8xNtCDDsNroLhWBmocGov2Mxs2QwZN9ZJTKHYTC6RgWW9PLN7xd8FbQJmL1JL2KgZ1KR6oxui",
  "key23": "mEqcorMzRVU9Arrxx1jLJiPG1VtCwRwYdGoRvnCdSrZ7NwsFRQyZCQ1cSw9DiDiVgZ4jhEkp4AJLAbNroJLJXTU",
  "key24": "FyGQYESY3iXQdxw2vigGhMv6ZT1w3RgNA3xn9Rp5NfVWyJQqvV9iVyPLPdazEGxJKvpv6EfdY8ZRxseyQ4mUAa6",
  "key25": "3BEPsvMJ29TfyAE2SLpxoT9PNGNE8EwWLvL9wq6ruDydBvokURF1Mke5Bps8tyJVASh6rRZYR7BKwYdzg6RdYXrQ",
  "key26": "9xVpLxcT9ac2dyyDDEE1VpKMWEFtk3yyDRBbySGtgMY5Yvg9GtcgZUBmeDdK2QzhNCaC7tR4J82fcomEjW2WrJT",
  "key27": "3Jyp8kaZvjVJtpJZnEusSgiii7KFvzoRDM254VTNiMNnr6WkUPo4MZvfduyfMzsAJv23oN5XjucghTyLEMVU8vri",
  "key28": "kcFFD3gWt7XBe956McpJvYLgUyLu8dmhSRwx3HyWryfHx5pBQVPv8udhLsjGKHsELs5TYqFkvRM3HfA15A6SCVW",
  "key29": "3fAWcP8pAqE9jugiJeRjFZueHhcvuVCseJABqfpx5LLdPhKNqRzFnrhp77bPprtnTz41N5noawwy5qXw5raV8Mib",
  "key30": "481V6hVXq5wB4nLVLLj2g5d2qUukcfTDANyUjMF7gSXoKGz66nd1B2BT5LPjqkyc9fNuMnqNWNCKX7AK85A2HZBw"
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
