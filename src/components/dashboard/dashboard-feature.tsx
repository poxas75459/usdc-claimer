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
    "X1224N2uZdr3W1dxABKppgzUNSoX3U8mZw75uBwtpMtJQp44SFESN3VDYW3Rn3AHipaE57A6Ghe7W2GEpVdxqdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqHQAgeoWtTCTzhLPrDgeH6kRZouVuyd5bFaaxxLTeULvhfHQ6J1qbV7Po5tdxZrPTMNqGtA7b4Kv4yyY3nmAWj",
  "key1": "5uSdXUWZ1RiHBAvjyuxEALNrA1J15sFoQDhHpuryNLmzEpYgHJcrnrdezaomyL8LMekoSxVmghfxzjNEeFUBuWty",
  "key2": "4jTq5CkLXUnVBPHa3gYEBzAig2ZYDsP4zS7WtMPFFG5bsyJNctYiwVjSdzxPdfmkuyqH5SR7fZcUsiBCBY8S4yNr",
  "key3": "3T2jWrKqSSSNvQUY8yVw3C7TJNo1qwB1ZsJMcFSF7rxi355THXL4nNPs6KhZojk1Vofsyn41USQRQaq681goXn8J",
  "key4": "4G2vwSff8tK1oMxK3ghW3gUKjfB3Ew1SKg18GPEv4Fa3uhVewGcFjQcVoM7JAXtRy5hZskYRzJLZ6wvzqgVvSdZw",
  "key5": "3yBoa5Ax94nrezK1kQqZ2mR22Ti5rfwzUfKaRNLvKJ49ZciNPnNwdAKHF4agNyzjKZkd54xnEYm7tzibDY8nWqoD",
  "key6": "4W9aK9MdwcricZqVu6EyCCrwUMmYKenUTBdmNZfE7G4KYGVjRiMDDP7MC9TFccAw3ESWZv7sPrWRSgbLVoFUfMmc",
  "key7": "66WhPvERPDLex1qaKNyk98N7A9aLAwW643iaahidAzbDVCpcbSWDiriz8CkFakbhuuSdJoDHEhUAfAksiufvf3RD",
  "key8": "5WrxgMwcE7dUfRqquFJJ3LgcwZa9dstUf8zLXsYWS81REHuuujJu83wnSWa6Ai7H9KJv6nQeqoBHbectJPGzpK1T",
  "key9": "5J1jarwu5L5DaJ5UfbWabnVzgPrsuq49LU2HJ45cRA1dKiaNosgugYt8b5iQ7ycyc4Dnop9QynfRVeQ2TRz2uXJ5",
  "key10": "xGaUyEhFgqgzP5irHDn9eQ4V9gFm37NJgBvXTJsbAcBeFBCbwQNw7oGb58qaBCgyYDeYwXZgPwYavKgeGQgYMH8",
  "key11": "2vEMBhU9VhcrRFaHy6n7esdFfq1CULKG1K1Qq4qtgxukFZ58ryATQRRWL1cgf5zFA31ki4KLXtcq6FNcz5coPTvZ",
  "key12": "2kXpLmwdKqrH5U5MxqX1KzzAWpEwUyyaPQyxSw1wwFzcRQLfhoFAdjepeDEtoACQ4Uk6g5Z7v9hUi5GVkzLxdRYw",
  "key13": "3VXkaY7s4jz4pnJx2jYoYFsQBamAdeW3513NS8wHJCCskTktdZNLtTrJ2SGb921CANrifhH3tvs5QmMMTr47RaQb",
  "key14": "5oFHuQWFyLRtxpzomnRcvviTep4YMWrqhvfBtTcwNMFsmSKY6nUipaTxq2aYdBWsEcjKLS6mQyq8i9X7cykYHiAp",
  "key15": "4osD7HVLHo6yXDvgo3VCR8g22HkhP9573n9DToBM3ZgvHhuu2FYyWGFyJSRHHp1V4g5qK7vjbJpNPs2tr53hKL6d",
  "key16": "47rkfUZoZZmLt1hq1NGDpCzA5n1T15ieqbjNncwAUgbYRkKcPyLrFStRTkEJDwpgWubmhapk9Y4XJ58ij4qXxdLb",
  "key17": "3gQ9AVKcetPuh7oFgdvjUPEuuv5S5f5e9bvakoVa3vSiBCaTJ1s8dnSg73N6Y7wggsVKdevVWRUsosbtbAQNBcZi",
  "key18": "3cuEM74wp3PXdVXpBc95eHVrHsS6SmTVZqazWkaNZaAP5zc9h1YnrYk5cPi3ksANsjazqg1RxJCaisudurrnURt7",
  "key19": "2FZNa4MH32px3nZCxitWB93ZX1MohKTrDPYXmzExzqA5Bqw9YY4NpMjN5btccAPHPoVV5RUBUU5LeemifguWuPEm",
  "key20": "3aNUczHF53Y4PTbDGjyjuTCZznz5ie4HaCG4GMcAW8UXP64pzUdzznhicCgXqXQi8LGhStgErdFzgNFDHeXEvN6Q",
  "key21": "465eGbyHtUoK3Nr4Y1qUy7KYYdCHXk9FSdkBqy8UodhhDmP9R1ue2VDBJjyVgW3xLka85QFHuaq3CUvwaYeQ2kx5",
  "key22": "5afqJEdFXjScvcgDZgKXbJBDJ6Hg7qxvgiHPf8e62W1Zw2GUwSGhK952tZk49n1fC4GNWoJfKfyeMLV6e8iJBohu",
  "key23": "DJssm5qDCqu1oGkMbTnNPnawJQVeVxMLYuLpvhKFBLGb2YpSYWQvVVdM1NSP5qfotYRKKRXfFRZperZVjm2oqzF",
  "key24": "MW7NJ8zViYKc7rnaFKJ9DorYTJUdy2fD1CfsuMEEkCNc5rTZyN5nvCFtCznDg7udeNpdwJZk9qvTr3N3H4wQpLR",
  "key25": "3sH9VJRT6eJXhpmKxZcbtRjoB39x1EXnScSZRnXuzc56rCt6Ncxmci4EcPRr24qgm5ytDrH3A8oT7V2NE9MbKTvL",
  "key26": "4q8jbLLEkKbvTWRqLZQnmHgKGa29yw7xJrBf27tWzf4EXzm4Jk1XeJgTEVDeA13T9rfZmR5kHPKBxiLkXH6LHHFZ",
  "key27": "3rwryW7knJdvha3aFAjhcw8WTYhR8wendaMi9xrYn4BtRdEjZ8WD7DweoGhgbSDedCvJH3i3SMYsbVsVkwpozAkk",
  "key28": "64Z9m8gvY6JSC17WrNHJxU2182AtZQvN7uGadupQFhffS37XxRAaFdbXozmRmLYh2VdNwAvKNifmAkdTV2Wac4jm",
  "key29": "EiyDWNhqfSaD43kkXQvCSaDFW6XakEMzKjg3ebDfzsdpLJCWfZAjBrGsmCavkwHB2rxVjQZVycZi8TaY2JEMGhR",
  "key30": "2Hq6KEowGQCZwJAU3swXMoxXg8cZKPq4gmJgzVvzpvuRBYtkQJ7PTyknzWhFHmQzhh3p5RznnV6ZC5tBR8oK2eu4",
  "key31": "618qxRUiYC2tNGMhqbMGCJQcCURHFbC9fAr5uVtoGBqkkeFapU88hpY6F62TmPu3ARCany3PUJ4jsByi147D7bMG",
  "key32": "N6bJVwiyKEdBHukbp7bipzXL5fzvsuUmqCyGEwf2391xaGYR4BSpWm6jM8MTWPQJzGJxy6ZjhK3qWLe5DdsJoxs",
  "key33": "3zTqQ5CDzesnUAHWyfe9r2EipywrjgxoefCkjAwyuJvXgNv5h4XoCggmrh9Rr6bMAKwbWR6VXDmLvgHft54sQfRK",
  "key34": "62hJBD7m9bydQ8Ph96WX46VkYraomWjYURJctyKSkDA54h8KUfwFcJHD3R2ktYh1tPkK37Ukzvc6F27p1TmtQRHQ",
  "key35": "rw59A38TMgMpYHFQEyfLTFdsPGnqJqatY5FncyMogepBo6xSr8BKMvYWaD54etproiam2PwkGEHaGpihC1ytJq8",
  "key36": "5kBcUS6iZCfDE6HPgpiqCfcrhGJcUabhy1mvx9UZmX8tKVU9BZBX76kz2jwtXM11fmm623B1RSmiTE3UMsPBzkVF",
  "key37": "2xUFgD5oJrWszNd9Rv1MJthaHsoiMDeh52B6v8vcojzKh9WzVRRwKA84iyxE169wQzZvGegpkSa5atQ3jzD2GRBU",
  "key38": "4fgDgAKgQsfXM7BoZLT2oY94C1eQEjiTj9M4MwzrhHvVVwZNcG84pXDW5rroxcBgpi3cdke1D8i8swL8hkmVj8sZ"
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
