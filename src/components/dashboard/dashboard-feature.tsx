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
    "29REysCoeM6osSGcKPTgjPApsgDNSk2VCwu9A7TvnHt7Jg5WDpMd4em3vLcfu6XcaNzMFanhbvf4qGcrS8hwCAKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuEXHRfsRzBkUhwFKuF19eQhLKZt2pDfBBn9ieRkmm81fcLtnwK3pQtAeMqBJhNknigUwiFArbp5oMKxQ6UPHhF",
  "key1": "4Y6dbk3MLntiZWrtKU4R59mb3eA41twyHdFgk9xVjXKMifXiZUro5J4iyXffdnedeThF6yFRP1yQK45hq3asRDix",
  "key2": "2jfQRrGaB9uPiGQcr3oDy3yNd4YhaKbwQggcZiEVsEoxp5RTB2xYyYK8PJ2NeioogXV3JnCe446ZcFXoDTCjt86R",
  "key3": "5nUXvvcxHUj5Er6xv4gBG7RaBEfcpiDPzbE58ZnGGiaJrQn1frxU9RR89JBFpa2khD4QAvbs19vzJyxVLBTLxdsc",
  "key4": "39NSrmHjgbU11zQk4mb9KMymaPm63VSmohFqg5f2a8M4NMK8pC5jqtYnJjqyqtVWcEj6ei1Wy1JbFeLTvSu4Qkjv",
  "key5": "3wVCaKarXLg1uhS7neYc1w5J7PdzRrbwvNKfX5urnYWwhJy9H5D9Ueqe6k2uJYhvWB2BTAWSQBcnVLdTtipWYpJa",
  "key6": "2wasi99bM5tC3UoFGPs2WBMEGCb35zNtGQADL9fPYbpu9zcUNsSNjeSQHR14qGv7eYALSDYhULR1ctXKyHfddK6q",
  "key7": "3bG7zEMPez1bMHKxT7XzAiuc4NuYbb4ongg1pxVW4rqZerSBrcRaFf4vgxRRTakM1uaLr4hh3aDt8xkxAKn3hQgu",
  "key8": "38eWkQhSuCRBHk2PsVMuLF71uEQmA71a9eaSqJVpx8ENGLK8CvvUzStu2AmZVrqsf4Uwd2YTZ9iKkssGN8QgH8pi",
  "key9": "2gsjmnpJKEXa6wxCN86K271BeRgWqHd78oewTYmAAmB1i4dxsYru6KmvBiF5etZdi1EMHHYjpu8eVrXWMw8UVduC",
  "key10": "4tGiW4Qfw1morPyT8fbp9ZyGkWoSZJX8RMLSYrEzmYeT4R3pTqVhnEZ49uLpgPdcfxTdnmAtbV22nG9maK7o5jcL",
  "key11": "2nyGdrzBmAvUkWurDfH5VUZqetVzxACFfXfM6AHd4msxE59KbsFHhut7psWCe3Ee6vaXHqe7y2NqqPdTqYkra2CX",
  "key12": "4MbveRhetgwbyo1DGVSQapEiRU6U9acqLFy6nXtg4dXbaGwYWZzu33XQDufTmrZTmgKjK2xRCCGdfaczUitYDbrr",
  "key13": "CzWHoMKCgA9qbxT5EwNxjgKQ8hAH8FrXXowHiz1WqxtaM364N5jqij9ETTMSPXgzgL4oMqK8KdWQdeuGndSAFyh",
  "key14": "d834x7HbP9wVotDrD43CdnBtSvnafCJkNJXqaVVJVm9vuK6eXWnToCKxgqk8tSossNqDtLfosAtpkdzwuzZs75m",
  "key15": "2r8K5nSWQCKyHrug4v2WYmkbXogwwQWcwRhsvyAYdTFA76k1B6FWsrhtZYNbgGJJzLzxrQZ79426NbXFGWxUXsW3",
  "key16": "4ryB22ssWG4zp2pBVNVSyhNYQZ3WeaXpaF9uFCjTsanQwWT7Bo3QLGHFG7K39Uw8y2i1ayfSc72ANdVMnffoSXU2",
  "key17": "5619sDkrhARHzKPayRMZWLf3UhnmLUaqj4wnfReQBwJnQ7EkgmubbXnPLJsUrXmUkuLXGPj64kYHXKUY2DTS3Tw8",
  "key18": "5hvPGoi5vGnBgHpzXCqXcTnsdfiiBjhWLgrakptMsoajd752RfhMSttuZCCSWZoCVK5XwNqZBhss8J1f9CKiNEjt",
  "key19": "egRHpTuii7ULtrpL3XsJokshndG4TXuQCJDjiekrW7iQfw2kSayAD3q59S2otkpVZk5EVARVsjubfHVmu58jC9d",
  "key20": "5EydB3BYRXggugYHzd1Zj1zoiLuXF5h9J41TBLwfFw24zR1GxNdYRnuuywQ7vc6xBQ7wBUrp4VzrTMuKikWWXgcm",
  "key21": "3LkMGrfbi9QMaMEFyAXdu7NtaeQvwY7SzeGVMc282eVUtggj1zes2SqFYiCUYysMS25rvbnLewzUSyaLybPCKQLj",
  "key22": "4qDcDAQVC4kpWGmdQQ9zvEeY7tt5kH7K58qaUsFS6FzADbBh8KRCuwuYsxiMZGyNgcm7i4Syho7SGYahtJYWjmHq",
  "key23": "22d63Xi6khE8gRqhH6DR6jLcm4D9YNBS54DhMt7nk577ADf37eUc8iaAKPi4DKs9PvtLUrPKh2TMBpJzaYjLS5Xs",
  "key24": "3Q8hHi8NjsT8BkG4tyfa1mE4kE9WMDJQZLNtMhGkdNrX1L5JtdGq32GWBc2WqETiogpR41SjcCNhnL9p8biCGXCx",
  "key25": "DdEiUQw3mJGYNak6Ut1yk564Ddzy79zwJ3VTpTpQJLWn4ew9yhVpok2nXBqdanECDNwhmMhr61JQ31D64qeDmdL",
  "key26": "3C1E2N84WjPpi4f1Qc4mjayugSrdwcnAPCPHJh6JhwnKNnLXfmKJwsouzPAQVKdiAfmwHBzFy6i6mHDK91BYuc7x",
  "key27": "4sCrTncRoVRvaCg2kKki4eKjPpX4M8bm5armJ3ENnCUJATscbFv1U5P5RR89eYrxYHMfT9CmazM2qhPLQYRr3Bfy",
  "key28": "2N4PwDVTRNkuK6KoT38FiZDA1SGHpdePJHPKUcWCg2YLuTTN78Ac9dyAKrJc7Q2iGDx6i15qAxb1VDN4wTtNxCkw",
  "key29": "318gJxa9u9rU2VPwJBhc5kvEmdzEZ9MPG5XJ3TszqZ4mEUVVKBq91DqSF6qNFjk2JFw1MKzVP3ZWTntr8fyQLkYG",
  "key30": "3xarpi1RsMq7VhnS1zxjxuVZ4bm9BvKwq59uPAPHk4FgayYut5sq8TAcyCeYbKNWjSsX6iXL3Q4ePNCDBZi5WuNb",
  "key31": "5WZzVyz8Rum7qYAjfxzVgCcHEk2Ev5HqJUqFpjAqae9QWryctPGF8zTGUmBTLgqXzpsCLEwgS4d5B6xHQtA7bSj1",
  "key32": "3A3jdDMMDkP9qDpueejE15YbgyXKR8RK3gj4je245QWeahdpvwsSxr7MFEZ24oYE3xTAFujH9NKxNtLe1KpSdeE2",
  "key33": "3esRi8DRQRVDrjN4V65RBZhYyMFHMMBevpxsxG3QMHmPqTbUoVEqYJfmyKkxA3jZyMfmMHiWKE7XNSuGS7MV4L1d",
  "key34": "4PrEafHgFpCd4K33jmMDyXNsm4aZWFUJFqKNkEYVbgGVTZCJ27UT3TAAwstDDk7wgBKVgSLsdv3wzh8KjUCo11S4",
  "key35": "26G7oXbqR4sdc7UgyJ76a8kL8SUKwBs7P1empYsXfekQ1fPqy8SaKW32B5mCBi7PB7TqPfrrmJRNxj9rG85xZusG"
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
