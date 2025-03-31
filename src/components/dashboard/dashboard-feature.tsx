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
    "mcXeMrP2uoViYvTPa2uU5HtndLBh1dieVBswuEny4s7pSpPY6zPVfXpYLTW1EQQycmouCS5aniBubfSzmDUwQ7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pjtyc4GjuyJF5o9xexbKU8bxMeFjWAq4TUdozmg6P5enV6bUv92dcWHCtEyzBjUJwUBspycVmg4QPrPJZY2gCJW",
  "key1": "2ZdLcAWdkLq1jG2vYecvQQFAfr2t1Hy8RX9Pqhxmq1HrczQoYi94bry5xxbuS1U8Uzyb3dvFTP5Q7kNeYn9yWd2c",
  "key2": "4MaRPnHhHQgjngbwVY79GkM9Gsz5DSTPPPpqjMJ3vRWUUQ9vd2xJJkcAfsqMxZvKN4SSFhMSH4pWkKfQKtmJH7x6",
  "key3": "sLkeVBTM4tVYvsp4QADE1rfMjj2mKcmDBJQgaRdSbv57eVtmGe46mK6naWboF6dX5rQdDVJ6bksgcJyyKCYL7UR",
  "key4": "4VgqLi4HmMQQdyS39CFPcrLJTDPWeMWB9NXM1bfnigQSgo42ZeGSszarQHFTfAT4BjMhvDcEiqAqbB2AzhYqmmug",
  "key5": "3nVRP1igVkRdUGikmmqMvDcTHyumXknhSmHirD2gR1AyQw9NqJb6k3EgecHdduopnXnNqEqjMukzt82eqv25tdRj",
  "key6": "2ouwBbi1WfYM3XbLmAyR4xQCMUWVHrjkjCDHJQWKdQ3XBgwAh7cF5MmyXbf2NWyPMiaE1dtM7rbC851ziHrbqKmc",
  "key7": "41whLLrYykwr5XBQEkDtr7YtiZzQ1ghXWn32H9Ur6iNHsS9D4rS28cuP959jhqCsrLHmFRyNCbNtn9ZE5e92XuRz",
  "key8": "32zNgydGwTCc2ipMKSfYDdFt8rBwCe5AmThQaKFNHcwhMCCHvxyt7LiKJzF4So8Wdwd2zjFw8ERZ4J9BxtDqaXBb",
  "key9": "3t7qj3cPFoAr9AsLXrmihRttst41kZSy3Uu6Hf2124Q2y9G2bTce4NpsgeRCBD72pghikziewTZigPxoNkuPSVpL",
  "key10": "2BYGyXywJNyAkMGtVxxFnJeQnJemozmEchW41CfNiMd2Fiv7RGRQXUanWjz3X6Cmh7WCHjmYeNuGoZfpRY3mLZjr",
  "key11": "2aPQveNqkaji7yrZQToVGxcmk98nDd9AaE8KJTV7WatU4FMGxhJFuYPrPbmpCAafhw9kKmDVmNmc9jCbDpz7sqFc",
  "key12": "3G9izBkWMFzheHFbEvAyMZAwyoe4cp9S8oCBVqetaTNLsjzzUwyWKvfXXnGdRc5gmWLBH7Quz6CCnf47dYWXxeMD",
  "key13": "4WUoYaEL7E1UV1rxk5gri54jH2hukC3KXMVu781pWc1kz45xHqyfUMgXgckx67QfcizxT4yzmdFaK2BnUbJtod9T",
  "key14": "4G4mnvcjeHxbtKx2MJcehxxe1kJ43hZhY2zkCX7LS6DP12J7RCM1HVponPkZeiSDiY9YYwRGU7SPUCKo82L953x5",
  "key15": "nJR2JWapgdQENHREqF8p3iWZBw3qzQZWBjoDx4W5AX37CJ37CSFmwbKZBb2Vzv7ceTbujix1CaknwNm7fuyrF1c",
  "key16": "3JFgm5kjLe9GJj7yMmA4i9YXBWzg8rXi3pwkFWdfUAM2vHJgcZwFnP9468gQ7YyFDJgZ4WZZgxVMAWpcw8dERVXv",
  "key17": "44feGzsLndNsKW6yZZ2Ej6hfzq8tXvnpQMUbEPtPNvnHjG3Gk5cs17GZmM8udQhREte2eCQVxFvFK4H5DkpynAjP",
  "key18": "494BfdvsaAVvBbSnGvoih657dXcskLntYCFhmGKEhqqKfttR8McMVQuLtpSQSAEK2qXhCE9AD95AaZDf2VmMNyYU",
  "key19": "4eGAh5FLxrSckpXz9WyXDGggTtLYD6bJrVhd1272hbgwjRZxqyWyGt3X6XGGCV5V82WJCcSNevWGNzbsUZbVQ5pV",
  "key20": "2DPsnfGaQ41Rq5XypBEuCdoWpDV7UVkDAFaYzzcJe9xQoQk3nSZ2peosx9vVJatmH3H13Fnex6x6ScX4A4t1K5AV",
  "key21": "o92HPczLJiHLiWDgJAVGYrEAVjziaYjYVBwPwwqzjXk15mS9vgMG6cQLvu6ypP1B9QUVogE8QTNNax2ZRuE3EiL",
  "key22": "P3VBfftJ2CJp11ex1WM6GrTFktZg8SAcTtYqBa189n8qYfwXydCmWoqfv39EMLsAWazPoHN9HVgcYxTCMv9AtXk",
  "key23": "4xcydNTXb2DsWn6fxjVEFXoZpNVhaEmwR63nVSSUKmnGGrEYuge2A9tkqWUfQom88qvhYWW5Bj3JpmddQeCWN79C",
  "key24": "4FNEmizPbhdM9jJf9iEVxBuhnMF9cGsR3jvHSWPchM3A7D1Gc4A9SMVKgRta1Hf5TTeptG3DXY8KWfYhtDnVYfzF",
  "key25": "5mxUXweaoiBXzWt2UQ6b68KfTZCUFkHY9v7zLCwkgVwvi5aWnqi9fvyTLASEHGYaV4HRNgD8oJNbUFNn2JWJvkUB",
  "key26": "5rVK958sFKUwpSHBzrUhRFRr664b3qk7qtxG3igHYfacnKMzoxCi6CseE6j72X85aiwV5YdTfuD8FPCwb2AwZvTX",
  "key27": "33Ek6QnZPCA1Eem8X28xSvmAYLoDuKsjWhaNUxE5e9YXA2uadJrUbTNhLTv4BVCFnypX6oN4aA7snw2uKsMnWtLZ",
  "key28": "2iv4wdx3oz9hoFouAE9naNa9cpjfw62oPEdx8CCagmxgGNgaU5rZmQycoeGKykCqPEuwqaVk3J5xPwphciw2wJYv",
  "key29": "2J6ZDwhLSG6nyxc2rM4y7t8KDVdz8gVUXe4byU3UXnamcvXJf12NL9UMz2TrgYdE3dzKYkNYhvKwwhihntwh4PQW",
  "key30": "4oH8RrbrSJw4QfhVDY1EtxQNRKNmwLK2dnFXEtyFMzAQyi3g2nBCnTY5KQg2Zur1uH5rfMAzo4SCb3AkA3SRjgsG",
  "key31": "3sehEkfsHtNJqvMnoTdytB3aDkUtYeqgGaRFV8zraU3WaTCm6QJyrovTwWhpscnRL4nK32XFsL89jza6eoU2F4re",
  "key32": "3yG6KhqWnPBTaSGXiLgg3uRd9dMyekKdRfy82CJ2EAJ3eNE1ZB1iUVje3hSgpoatfq6mYKe9hNxwL2yfbMtjPzWg",
  "key33": "3rLfNo7dgN3sbNaWiPPksjgENRg7Mcsdco4BtuWRpF7RP5WfFo8JbKVgCRR5jYCgJbDQms4Lb4oviSinULvqMmXe",
  "key34": "2aAtcLvqaVgNraZXCVmCgxhF14ReWeJ4wDS9BbQ5Vuj3gtB3q97PLJxaZmDuRCkmJCpim3gzXTpHMGUyBMPXxRoK"
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
