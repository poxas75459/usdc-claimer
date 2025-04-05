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
    "2FxDQU35YE83xiKbJmrTgAfKH7anJTx5HXJyYjFY5whUbagSHqDK9vJohC6iKaF7eaZLLZHYfdNzcsxqgQbB7Et3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FCpcU7bXBHvnpodZrNfoFECcNFx4dyR3KKuDbSAHkXcTYnDC3pXKXRayDYmrPKWQxUFtbduH6qbdZSY7rjCaX2",
  "key1": "27PoLW65gMiY1int7UaGr4iC2MveDEK1diD6fXyThDUZ1hKkxztCv4otibMQgfJ9zYjMLUizSjK1sV3QmVE6FqhJ",
  "key2": "5C2iUzjnGdgHMFxFUUHF9awbcYhK1SxtmP3MdhB8rJ2zNtpogrKHosbqTtSTy6QzPf6RSRJJGqd7UXBf5a9gDsJW",
  "key3": "4kS5eX7R4Nc3rEFuE2sfknSjm11JaMhXKrHJvsqmDQ2D3MqTVp6RDLsnYcjHo9HHCixGs7ThrVDrtkM1dJzJyMud",
  "key4": "2y45hB5rGV2KjE4g1aFMrK2pRQ5U2LzvcsNNcHJYYLbwQV8CcpjnqYCWuC4eqkYy6vPAGpL14RnoHJHfWnUc5tVX",
  "key5": "3vxJJf98Waywvcgn2n4U92CTVoHewHFqLCcFgBwSPpMXmjDg19Y4B19jDUuzeXAzuEeT1xbqehFLhS4Z4LPYSqFA",
  "key6": "2fv75f6AJXVfvUhtKL9nDGGHjXjJ5jEKFAASQrxfeU2p5zQZVniDxUFuPwa6SsXUqGbMA2Vy1W155PL3MEKHesPY",
  "key7": "2FHoc8anZGCUyJ3kNgMg5PRwGGwVxpJuB7toUJ6xdPtmmRjXpVCjwUbdhXtX8ndremBb4j69Fh3qMcvAD2bVBEae",
  "key8": "Vt9wgkysXSzWuzgHzVthUiNHSeBBnLrKtiKCCGT9QQ8aMaD8BUV5dKdWfU27ZchUAt9WnmS8cuF9XrRmoFUDuD4",
  "key9": "47edwwmUeB1rPWSoCon8zc8pqT6SHwb3DY2ThhaDT8Fc3onD1R5aJvvnZRQeTVBHky66CTB14sukFgYUvV2cWatZ",
  "key10": "3Y3C7MFEkGg95EcgRkRK2RXrDGJvPdPRS9qhBNeVN4VN1GTEKRV5nj8vvHqSK7tPZCa1AimPSJqtokriCmXFoH2e",
  "key11": "5zapKKCHKq3wKZxRNKWBDydcgb1wC56u2Nm5TQty7KGqnqwaS2FXcjviDu29dMRa4SLMGtCT4pLt31bx2yRasvYb",
  "key12": "2mp2B2Y3e57TupKhuGkZZWcEeBxie8V9SLxSCjQjPFxej1xHkJ9yz8JyfVQduRZR5TKHrqrHUEgtFGe6Wrsqf7yb",
  "key13": "4y3UHRPBhq7MS7eQzB2G8PLLRQLzL3YjFR5Yvr42GAraJpEwmGo6izMA48sNGA5PtLKHy1MVtTNhHB1wdajToWUA",
  "key14": "2T7JiazeFjHzVHqkqwth3QEcBkipFgei24A52q54Y2HJySJYwngYzXF1ttfGKvW18zzcDkEFG7vrpvWqKPPmK929",
  "key15": "qNDyfM7VaW1tEfQ7A3B9qj9XVyALkzfgRytRUa8stTBdgSd2BDd3Lii9Qc1CuxNeSxszR97vxS4TacpkXnYWodA",
  "key16": "2tjCGDXrg1jK5ZDikXhnd4We4dvTde24CMA98iEsSogzWpe4vi1d4yvHMTu2LoejsudwTv6VkVskBHmtaP8qnS8p",
  "key17": "2hfpKUUAqeTkDChvxptqaXVVia4zAeD92bfTor7bwqnZNCwREgUpxvChDUhn4REfV6d8g8DLkRw6sJ8bkSj7Qu2f",
  "key18": "3AsoXZeMvFhNEZyhCcgkuCwTZjYouTwyW1MXEGrPmmviHDqjiMb6bQN1r67YH3eQsQwUZ9g8h9NMg4YWpZhXiCbZ",
  "key19": "4M8VPscd7Nh2kRVWCUKDtwGPLjHYUak3xSqRqUgHhzimpvResXLPmJtmPJg6zFaL43ESoP6dD2TMrUiHCwf6kRX2",
  "key20": "39hwx8aRHKzmEmnSss5LnVFVXkEFduz4WYtk8UQNyD2GNCoojuYitWZNiKkVngWM9uEtHo4NnFbzoMJTVm8RQQcq",
  "key21": "47EdXR6C4JvoBTGjqL71vc2XgDJCy8FGrsJtRKsgNdaEnKAudveq6e3bcnvUEyohcFUbRBhpQ7kKdjY91d8519nw",
  "key22": "FfbP8FmkGxRF1gMonW9tvLk8vh1aYZghJAUpv7wYKCPXAeG2VJUH778hkJ6EpLo2Xc3tRnxPgP7N6L7LCU6hpM8",
  "key23": "5XiQYuqWgraFQJgCsUVEHUxJf7SBxYnqDWh3e7GjSgAoASPQ3e8FoUkBmGjxskKSxgmhPQXURwVKUUHbhiuAbqnM",
  "key24": "5ZS4S5uevJALHgQFtaN3gCoDjA5AFWoquJjzAZomtMBvFtHgWDNrkUNKJ4nH1W8DH4FnkeVGCGKiQqQNGFMKyha6",
  "key25": "3zxR2PLSrpz4bufe15S6NTemPJqvPPCzAUYrsfSSoXjFsdVvhyFmgZanGQZPewNQpNgPpxkLEfuFEGL9iNXXfhrA",
  "key26": "3DtUkLXTuCsMKLuJKasMsP29ppRPWYb36DQHCByWp6XkX7K7rs9Y8LoVQxvi1qHXwJeAatBXztUqWcUYzr5y6MuP",
  "key27": "2YP3QNo6dRLjvjixufQzftFUGbxtDJ1ZeMQ5P8cqVT8gNi4Ta6M91drBLDTm7ZBiowr8hHxGPQcLBL667yVw8nLz",
  "key28": "5UhyUFuxHrmDbZ7K5PKpHbfnb48LSdPDQ3HY7mUTPEMkNEt1MUodcmPFn6nPqDFptDnHANAFoFkoj5NUFDZqt8Nd",
  "key29": "43cD7TMRAYbnNgtLc1EqazpKpp65MdYK22qa5qh8DXF98jmmCyfvuuByip1JYePyHhhCHBp2hGV7UDQKEXxLU4gv",
  "key30": "5fPeXMuG6reERPxNdZtdUMxR7mwByGauoB6oXszmxYFT1QBw9HiaW339VkfRes9zAKtCZACkwTprfUcKyw7VALP9",
  "key31": "2Ku61Yi6DZgLssmNqUkpuvrB5kuvxMFUpVgjgzHt9jpiMjwYySqYb9apWT6oBUQwMW66MZg43vfqaR54ZTQoRevv",
  "key32": "55KyTKxc7bSmUR7zaCzHNZChuTRtnaHxTWEwGxVu3Qv1LEPsSovvzVeLxBsi3us45fRKRkAf1UGrnosepFwxbWvM",
  "key33": "2s6KmaSKJC38yJ4afEyJAU1dajkF5SVZsWbQRghmfBHTXQa2MSeyDKH5CWvmKMGSPVVTZUNPHQDLZMg4f22TSRbn",
  "key34": "8m6ZCRokUzw8pZbuXHUEdAwjVAAY3wFcAvgEr1aiYd7vrHLj6KcjP2i2K8ZS2fDoaCDYgPSWk66FFpCv5mrrJSi",
  "key35": "5opZqntQcPjYJ5vku2KfoZLRZBmT2evnuVrW9fJ6tPPrcbyJeqJfs9GEhGCa7tqWSv95Ptav8hWSn9eiFKuVPdgd",
  "key36": "5t1HvRCHdXV3Y78AayKHNWAkujykFyJCxSGrJUoFnMDYEhDBS389oLmdf5gP5LKbSSZfF4T8muEGn99ubPArocNd",
  "key37": "45gFugiDoeGq8BVkC2ttDkdFUcSuTy5xPsFHZbi2ijgkVx8vFh3sXKHH2shwKZ9tg6gcJ5yvcyetEPZQuVSMn58e",
  "key38": "AxQDLeKrK7Lv4vdFiAJ1iWYvkKMWLto4mh2Y322aGn1swQ2w7q47g2gH2cqJns1bnspThHiFfKy9eQVfcxfTaST",
  "key39": "2edJ3JbhBS5sW42tTbuYcNyzZeMde3VrZwYYAbSG3bRwbokihN2ha44oKLziwt8iFGFNCUduwrV3YbEADAih18p",
  "key40": "5rMoyoScnWcM1kYVtmC18HLgXkcRimzc6DgJLwsuwQC4cWd7NqaAoJrDpwQwb439CaZzLGjWVWm1AzBHs8ko4dsk",
  "key41": "4BXpcDndrzLw1u9eQNRB8WyED39x2UFypAxyCMVmtqz7bB396Sj1fbXGFmovqp9xoKeokiKYcoiVr8E884YzxTVH"
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
