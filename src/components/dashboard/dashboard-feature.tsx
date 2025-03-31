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
    "5Tjndw3s882fac4e4afRSuBMufb26qGS7rqZ6Bx6JcHsBagBKnoh4wsQjfiABwT2SvxSCDTbGq98t87LvMJBmJkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3qmYBvGqiAbgme2gQLSrkpykszgGg9JNMXDKnYRatoF4rnKd8JEeY7iP6NbTcg7m3Wm2eFid4AvEamEuMfzftH",
  "key1": "62se6vdoRZuFkKPzPsdAzgyZRvvvhRo8c9pyzTkkUPEWZTZR9zdFKpCEuK5xk5yLw2mMYP4tDFBttZeE8YrS46F9",
  "key2": "5AwP1qWUXS39s9vCEcJEYRUnPZ1RL26nZjaTLK8qnCQg917fShp1TyoMQAUq9fwD1cyKWxhJZeDcKqXRAeNtM7P6",
  "key3": "5vKU8Rrj7xiXtEFGpow4LF6qbhejiVHshCi629MG6qhHsSu6UoUe7dB6LcsMX6Cv4e7JgG8uCjH8PZyYD9ZZUAY5",
  "key4": "46oQdYqUfcCVg4m5mrrVZJVXigyn8jYznnnabvdFN31ySWqytHLLYffYTqGA1B2D6ajLpeVWpMHqMCc9ki2SQ6yp",
  "key5": "5WKLZgZNeX8rQhAJnaaQwXxpQmCEc1bfFqnswqi1oNxb3KD29D78YkWynFvT3TqPFBHv1n991B1Aaqr6HZ2Tn3oS",
  "key6": "667Hs8SKoJS8uerW6srHB1aewGL1UiEkaU8A5HXR2oHF6k1CRgeWfr4zrn7zEoy4t6KNnKxHtgKHJjdPAqx5zziG",
  "key7": "3kXn5tWvdFMEgs8sV2ue1ZQvNu92RSbdq56ZQfkMAw5vAGybdamDBRR4DwnMKBq3SYfvXdzRHHP4aqKUsp5SF7jb",
  "key8": "4fDc1eLcmsLJ1oE4EUXSRkaCe9x6jhqEQctduGEvZQ6zoDQZcBNS8LFAugLTxLezw4eXD99YSuMfX2pXQjaSfzkv",
  "key9": "5UuxPjqj911kcF7ESd4KuPMnMKMKUyUq32tvnpof4vgQb3431MjXQKzriRSsxu8G17UxJdcUZkKJ3fZWhQcWxDDr",
  "key10": "5tCGAHsEQsPdrYezK9adzKC6rhAnTyU12BNUSTYUMw5UbxrgaTJEV2zUZ9TQRTjV4nkAv4W2kXJSsjfrMxC4CZwT",
  "key11": "3egdHSXGmxeYot5JLPDLtb6iAxev78Hj5MPRiMqt46oTzuCa6ayTLzM9KUz9KbZ2symi356RG7e7p1A6R7EPosAM",
  "key12": "4Kx9eFpAUYa6sncuXCemAGkcozkpWp71cTfNmmmjVCUJANpkE6ZYUL9CtEHWwVqp3jnEEVgUQGxy4YgWVFB464UR",
  "key13": "2oC29pJb3d41SaTbYjY8JFKNxZTcB6peGNZ9Yzcu7wZJhY8YYzjKapbAniwVHzC9io1RjKQVGKtnantBDMQo8wiM",
  "key14": "4Y3s21CXGCRe3ZoRwRGZ5FpUUKuLcTkcPcbeWnvtwa89XZKaXcuyik2DCERf9Kd7iBB9dYYstQGnpAvYWm2AWjZb",
  "key15": "3yVbzZaA8XTkkEXAAWaa1mYcEc1NApX99dipgvS6ZptawWw1sNh1cWu7SQ2CFtsmomYPLTkHe5bvUXHAk7wD2wXj",
  "key16": "4X9Ri3ZZoi7P8pqES63WTR2bEgmGmSqcuamv47j74Fm6qZf1HQzBeDC9MePxnGhzZWtMqYaYJim7x9V6Yv8CxQiE",
  "key17": "4CyaQsmrbnSLuP2Xe4X4BDbWvBQ5fiwFEbe35q8uUVMFdpoEJadarmB3HBhRERBTAugx3EomHDyMTYdN9QmkdoiX",
  "key18": "HNfWDtcrJefYXTEssw2kGsRWkPRa2Psqs4YtPFaoPCN1RxQ3KnDNEA2CJ4ov1n8pVvuJnV1mAKN9JwsWESyceZt",
  "key19": "65CybhAr36dPcJCpPSyi7RSCHKCazvtmP3cwXLbLWZB2489n1ARgcBrjLwEadCGLtRMdVc63TrFbJnBaupbu6L9",
  "key20": "2yA1phAQTA73bNitkc5Vy1MfanoxDsk2YmCBVvShh8dwm4cfdVniHkJKgZZ6r98hyVtyLZDJ1RAf4bET4LqQ5so5",
  "key21": "2Bcc6dyf7zQZDZhuxRyWAJ13x4TeDcPiRsWBst6FgY8fDEYx7mgnj6cA9YdRgWWqqo5D7m9CkMDEJsqbadthLjjX",
  "key22": "5G2BzE8qhPU8zU9TUaH8dGkux3mEoHA5D9Jd8hbAVWeKz4AbNRiycihCJo2LHS5nvjhq5MX68tWhdkB6HQfs7EVT",
  "key23": "3Gg4pew4gZy2h9bzMhY9eDaqrPqxb1UkYdvgCzAMchfiGpAqbC9WTYvPj8vhSCfvDFgSaYkaW38ZSss6yTXLmZ2o",
  "key24": "4rzoq1atKWrEBMmDT1hpmkZvxXNypXGFWvYTTtzrBHRdRyqsUUEdFLCpGPgBXrxPkntdt3GP6ZbnhNCFFDZN6av5",
  "key25": "5toFvfCDWnnWNx86AF5HZnfRAM7PrZzgn94EZfyxiXAxHFLNgzJk4pZcHXLAkag8yF92yqsqdDc4eBn1D7V2ybeh",
  "key26": "3auXbaiZsauSCfYhCTjpZsomC5jB1SANcetXvH1yswD65vntdbELKitfxRAD1wGhjmpbocXvPYUyKSe9NKZic46A",
  "key27": "xH7oq5XBpFugxvvqozpGa31EsdxeUo7JqPPHddmS3uedtTEujFg9uAzrA1FQKS7GY1p5zVB62J4ddgK68woCMwM",
  "key28": "3SnXXCZsCGmQKQkXNQSvsSneBkQhfyUM33i15iY9qGKqYscL6QgdefwX5u4ZsMJCNorqPNXVQ7ChhU7ZFGxNnfBT",
  "key29": "4aySejoqbfeJSs7WWuFFVc9it9ctW8GD6JVCiRxwGEZaPhCRsqpSeY1abYAS6D6LDWj2LuMNKS44RgedNaQ5ZVkV",
  "key30": "4dXe4yEyiHsgjjUN1JnaKoxK5bCUhwCoodSSMUpLz7MfUyqpiiVVpiJ2FWXyjwx32DmN25XoLwMHgU3aUZzDijMp",
  "key31": "33YkF6BxjXkzH1MTDnURMtKPe3ndkEf1sH8wvz2PPdoibyDFiLodBU88QeFSJ6j2GgSjWMLXfLLsjBgTCqgbgDev",
  "key32": "3A8ewVfKD5DV5ox5aJB6FYYj92SAXhpiTeWJFi2uipHBbMm8A93KrWYHkqxsgZy41enBTtKbPhJC8A8rpvRHL9rN",
  "key33": "5aDXCEYLHSq8VLSnjEAgMwWDvRsW6K8ToFRVEuJNwTH4z1BLvpUcd3GuHudiUQSffttMtnyhkDYwPscJZiieAoym",
  "key34": "5pjVGgZkhzGZafeCCHnMpmqVojtxRWzd8HVQK866KpgZLGk5juRVabJxgZwYEizLRy2cDMgySoqCVjbaVWjaN7Hu",
  "key35": "4J59wSPhpA2AcXDn3MJcpfdnKNjMDMV1xA8jdKRGy9SWirRbMEfZ7Mkpj2xp6QjYNJx57GoVGHSvEv5HWgjHuNjA",
  "key36": "469vV3guTwSi3GPdTsp9dK5MkG7yJQXvDq3uQX5WTAPyESuT5HQJT6P9V7yKCBZrwDcn2MmSFJDNLVPEZPu8KF7a"
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
