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
    "4PJHH6Jj9VNQECGuqvmW2tgfkMkVBvfVm2jp6F38M5zmakKGP2QUbhJrmWY9Fz8kpw5FoWYEiMG36Bc9k6vMAa5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hX1c2AxCtxpD3ZUXFiRSLKG6tyfvnQsPDRqfvvva43JgHkFFoWqEfNWHoqNVtXAX5srnuyGXuYbFEH9RCyvPche",
  "key1": "2s746QXB8VHERFvjAMiYmYUijXKrmSXRCTCiYMi3FWkMWAL2yrnUGSUsdKzhyBACdwknVXEUdrBfLtYNLC22GG46",
  "key2": "va5FLx1J5CgfJDPeDVK4eDDrEZTQyEaL7xBGUnCrz2mfqmt8F2ZEW7xpQyfEGG3LjdHtk7F1Vj4vhjmqWYBM1Vt",
  "key3": "3norqc9je1jokAYs1riXi6W1tP2raGBP69aazXrqdm35TnFBkpr5g4HytGMv9dTmTMFj86dQGZW3XrpiYzopVtTo",
  "key4": "4JP2xPSNxoJ3YekBDiAbtLsCt5Xp1WGNZ54cM4eL77EJ5JGzxBK1tYLFk6d7H7meAPxM7crz891m3qjfGTxQnuVk",
  "key5": "2uWTZvK3JGD149EuyCFce3FvXFSpNtg5zHwVDRGkzvSWArVZLSb1FCJJr6GHB1hTSkg7HhS3cqUpvvWXy55eTWKp",
  "key6": "5Pi6a5a2ENLQU5aT6bjjfvFDUuri4b17PnzQ8nqtfYZrwjtGDaV5CdsLmmgdNS9eksy3BfyTkbRRdXVajdeowpfk",
  "key7": "3GWBx1qZ3nf54xMHGKqCf7KjcdJqRGXQ7rRfHsrfnTdZWmSGGFKftfZ67Y4WtDrAGzvm9rSVhp3QyumpNaRi61yj",
  "key8": "3L45BuqD4v2PTX9KBYv2xHetdCKaBRVExuqKK7JxjoCjYkYZjMGYZbWTiqXBRLbyT5XtSDMxCmbYbUAqGYbirTYa",
  "key9": "47ah77d22GwyLzdwFpstauCXW8UcA9HM8ugLtbhJyj3sd99xLDzbBsasEbEUV7RaG21KjPuFhzTpjneDX9AtT4JF",
  "key10": "EoALELaZi1Mm9sDi8XDKYxJnPnUXvaw5y6NQ1MgWXJT3NC2GdJFjqNJMkWkcFNzkUtyCeXUuGUHchbBPpBVNnXo",
  "key11": "44m4BMsScqPnhXfWFoEGy7TDxsfoLLi12JL7cfZYSHhhsnpmegMdG6yHZH3UWymAt1gX5pF3Ao3jogKBTWthCddR",
  "key12": "C3D4SPz9LbVN2VvZYaczKcQvhqQ67UCWhFprb8UvsYAVvYkoH43Yhc7RGWr9bqP23tEPn4jkWCWeEY1RcLX8UZb",
  "key13": "Lum7f3bBQd2pJAKLk8PnV388djbxMktT6bN3kFRqEc4HRzBcAuBpVisuW7EjnBNMDRhwBv2cBsgUAWhSzMNsvRC",
  "key14": "QUC6C9vn7E6spmmGFgT5ktYeBQXGmA575LxhxNYiG1WFBoKAqm1X4T9jZxgLj727tXJ24GNz6yvZxEPwo2ci5Bk",
  "key15": "41Q5jkmVB4o7UND1QY3TcvQwqFACBL5U7QcSV8Rro8dce8p5NEbvGt4po8bfYdPxDH6sENtbSXVKAQYcLjNg1t1T",
  "key16": "5Dg7qpHsVkwLwM1paCe3zP2HUKXkFdakV3ZrPAsYLA5kfRKj8gS8jzQz3P5y8TtLTxw537iYnPdL4ZwAJDuVivc1",
  "key17": "26mHnbCXTHjM9B6cWVeBsLsYpmCm4pwJad4cpuD2XUmxMh2RdrSrX4w3eakAUAf5eNrCf5C8Lvteob6gqube9jwN",
  "key18": "4VWV9N3bfcFDN2Mm82iKr5n4Pjz9Mz4dJj2y9XJFdHTL7KQK5Ka3kVGqGTppN1QmCqsHRDjjrUpXMDPzUPi9AUvV",
  "key19": "EBeNL8GA5wj45hDgv3i2bvWmAX5MYKDwK1hJdZBQXfM56LK89RuyvzA1j9P8UHgTy9jEftX5D5PLdXzXsggQ679",
  "key20": "2w7Dagm94x61nTmtzH4aQSb3gX8GK6azdSzMcFNUzZz8MRfwDiuw8K5AGiPL7QjTGph6AP5qBBzVXbNwWQZVS5yo",
  "key21": "4DD4P3PR1U3X48akjvhegdXo9hdJ4BaCZ1PVshpNBYm3YUAbPLqDQ6wWn7vGXn1DYpMEwmHeJMfMkFgr3nQuYgjA",
  "key22": "2iym2MPsQxhggLFFMRLKdK5TVSLv3ZbnFtvuow88ZT5xhD6kSG4t5nJyW4RGg6M1dRqfdXG3oYwE7WeT3ua1cSqU",
  "key23": "2TwXFvmCPsyNu5mhJr2uCUTAnNxhzcDG4D2QRW8KckESXqjpYi9HpYVa5azYjuKu7QorptxJq6M2VGtUWLam7R7y",
  "key24": "4LXnftsBKaNePGFG9FwbF35vMyr49tYuwh1ZDBG485hJCw3XEQYm49d2RkKH2fWq2rZ4xigx7U64QbDyEhQJMECH",
  "key25": "FYjvpKFPDrw9nFznpmNkXns1u9YXwTQjyFhyMiuHnBmaFSAi4Niku69AgnDkqucudFAJKhJmdXSVmtUr8VEbxKn",
  "key26": "MFrLbxJAGarbXHUbmC8fEvkpkBPcLM7BoKpfRFkTEDHgqV2LdECfank3VjK9qaMovzRCjyN7vSmsJKR41Ugd1VE",
  "key27": "uYHjbvwx8uSMzXYxkythK1ehgzLVdxttQeMchj3B9sHKfDP1WiGhc6rZzGSYK4gagrtnYwEnk8Uq4SU2t4e3aF2",
  "key28": "5H6PzFjomJa9x1kKqEHTibZsctoM56pSvy8MwMHG2ktoL7EEaheaCGagiEbqvodd5xHgDpfzqBJi8VL8MtQtZceP",
  "key29": "7kmARX4s7kvo7XaFjRHgkhx8UhAkLm1WEHLqX6B4mrMzEok7txYx2ybAXLrXUzwuVcMzBZjn2eX5vJAF3rtpBGD",
  "key30": "2s7JdhmMwBURqebxTuXKB5GmFPkgGNHn5rVpLrXoLBwvgz34cbHm3X2oF9fXzjoJeY4Fy6FL9pTRNbXGqhMh1zTL",
  "key31": "3A6jPQwg1u64b25qv75M8tG6d2mQtYAjWaoAGdx1oudoFoBdRBeqYk2ZBYphbZ7YznjYm9t5Ar5gndUhA84dFK7c",
  "key32": "3jxD5XTUfqPdRk95JrifvCQ8ei8hAPvQ8AgLmSH7skrPrvtgyxSyZHjLmq2cryNpqchSSXAg7HSs7PBkJvZ2rsMj",
  "key33": "PHE51t2MfDRaQQHyi2Dri6tCPae2LJ8Fme3XsUvdATvQTdFiGuY9tFNjmW2hY8oYEJJLajFkdvLnjF5nuHch3XA",
  "key34": "57L3pRAEpbUpdwcnKFzu83SxJs3nioPPe3zmusry9gQjWQDVRPE3bMTZBF3oCBEaJNa1UtXC9WJHeV6WZ87DfSgU",
  "key35": "3c8XBcqmqHYr2rKANhbDoCYHrugEwzStj5BWnsyYPLwFmfn6eYJNi9z1NMYUWdjfB4NCzegBFfT76dbvrFkXja9c",
  "key36": "35qF6ZLUt2GDjeMYi9sGmKAPEmgveK2s9inbjE1ERvsfRJGjawpfSvw68pi2oaKKKzu9o5Xm7Fec5eKv6YyLYr6C",
  "key37": "5uY88KR9eLRzZi2YBhb2s9Fe49thMpWvFEV13gLjo9XtctqfwohzwAqS6WHDNz8njDrDsUkyDRYg6UFMgjg9T7mu",
  "key38": "4QTGf6i8MnAbMquAvG2eVjSxttARKyLo7WHRBmX1UPs5RmJy6Yi4NakuWPacyXLTqrTVqm18UybhwHAh128uYrrG",
  "key39": "2sZnfciAg62nL6jDMetemTf2fj31RmKXHkfjpabserfMHDFXZwzPBAjLjktnXcuQHthnKkbRMZpUK3EMQzZvQfGK",
  "key40": "585DrkUMaYgahAAbu5nTkgisT2NmjW6QYTBj52pB86DVQUAZhJh61cqLpCjaRqVaen27t89jDPFUWzym1cxhLeSU",
  "key41": "3MWCGLbaPSg9Um6NusuzBggsQb3WH3uZuFq7eVTMjSsWST1edcgGNUnEsPAbfNzJZaeCAxyHyaztfywBNogHJvec",
  "key42": "5BmfjCRzsepvRsrqWWk9gTMEs6eBYnVysxCKBkLDDHe11UExKZvUDEqb42AQqYTDtj5KfV8gd1AZ9TpFpJfoYrLa",
  "key43": "LR6Y8y36x7NGTUgmz7VbXvPiPF3z2eWATUfq4SgcbxBBGD1wwypW3yApyuzm8ijqyJn7ciSohdbzxN23sooAyyE",
  "key44": "5cYanQ5FL4XKaF5MgC7Pek3wAiCath8CWL6oKskxapWjhdihAPZJ14SSLR6Rk549AteUAFVxbq4bZuVnqboDWzrs",
  "key45": "4cadw2odnMBDKJDX2tYeANEsqxX1wgj69cdL6TdcxgEWzpSEYAVmS8SGwZn1DLxPMVewQq3cHop9oKusei1ZBMqi"
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
