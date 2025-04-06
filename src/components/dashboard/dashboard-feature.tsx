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
    "5N1QmZU7XGGZUp85vURG2F89jiNwqFufm8rmfnLURqaDCGfgCsjBAGAe2oVimqYjmPRuadUQgjN13pDUhpfeAGBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBdrrVeTS8tij1R2xwYWFq41BvnGKiFx2u4jEkf3LDxnA8CVz9H85vzAGHqXPhaxsNbeh9euXAew56WRkGMBwwj",
  "key1": "3Y8oxD9QZdJr13jNdHYFkx1dRHyG3ftXZjkgKhJeNBdP9ez5djcZAHcipv6zVC7eWVboqgze74KkQj4HfhbPkGrc",
  "key2": "3Ars9xWfCmNWzYVqxty6n7x6VMqWdYWzodMBd61CHYEcxjUViimAwugN9yqsKN4Qju3khptWZYoC2QgEQkeXsfXw",
  "key3": "3bw5URfK6REXPtyaxjAnd2bSxq1NR1VtDhfHKc6DNg5B9RSNF6HDhg4Hj2Lv6wMnvV3tvX2WtBsf9RsDoRcqXvw4",
  "key4": "5WywQ2MuD8msYVKEwv1y5JL2NjVSLUFwpy2dGYrHzAn2vKQV65UovCZDDmsvnZoBLVBur9DHT5gDXDNfouhakaWY",
  "key5": "5Azvxbrmwe7UUj1XFLK1UW3MM7dGA2S5JFC78aMxfkV1b7U91SEhXxotSKzAuuUJ9cQFqELph1m4iZUFRM786sAk",
  "key6": "7nkmmsqNtzED2M1VM547sDygF6Ddj9APvyM1QuEteJndrewaFE44ZCgLwzQHAEGYGmnPT4HTdLZgrT3sqfX9xL6",
  "key7": "4NBgoQxzVFBUp8btL7yA7aKsFy1A7VYeNRz3Vm6BLZhPYmf4trs9RVYcx5sJdbRHMimUgYYoTCiaVq7G2BmiKaBe",
  "key8": "3phPh9Wuyu4mhqkgatKb1UavEELZHcSgwjsqabv1aZYMD9YEmHAU9LZfMPKQN732n9457zHBhfqchLDnqxWxdm78",
  "key9": "26WiyizL1ZJ1ezheBtf6GemwkXkWxYn9rzHRhRADsNJeMoiue9NaiperkaEMcnT6T8z9eDAWEuGexkQMd5FdpscS",
  "key10": "4pJcrp8AmnmPyncEqfTaDvcWt84shVufyfN7F8W3DV9WXWdp5mTP7K9nhGGDR4tDcAFoZx4Xa3hsYFjDFvFZaM68",
  "key11": "4LdX3eXEKDzS9NbLFM5TXUWp6KZD3KJtrDU2nBbKLyJ6sHojYzCcdq744cw6fqmWSU7DZzajcgxhVY1vgVePZNJb",
  "key12": "45guGc7yGJRFYC8CR7VJfKxQ5JZ4NGr37zRPWv9FraZmX6euKG6mu5zBp3BchGpSi4hLKSLiQX8Wf7C3CrqGox5p",
  "key13": "apfQ6RVWMn3Q1cW26W6PZsnmUvSDHvSCgGhcghVqApg21ESGA74De1a4AshRm6MMLg8PEa2EzVNRNRG7F2tTnrd",
  "key14": "3dY64NgVcoXkdzWuMoJrgd8u6peXdNSKg6DjZ2UytR74ZkdKTnYS5311KdLHVMwJbsangvnwX1MtrL4apsJ9c2r",
  "key15": "5d3aiwM5vQB3sjYQi4frfvZXkXKFjUuHChTV2P1PaAwYT8gyYgpcnGnSFnjumHVRLsnJ2dpDGosG7TggsdEQRinz",
  "key16": "2CdTH3AZFZ81B5jSyF6Svxbaxue18ryRTo5fj2YEKSFvyyVaHoBT1mZTy55vxAhZG2g8Z9wZjwurLy3DvTYrQ8pH",
  "key17": "BDxgMeAqscmHa9sPZvfDrKiBNqYp8QUNrDpjFv7nmq8kSVSX2RJhnTXUgw9na6xHzsSJMwPSYVEanwsb1fhmVbM",
  "key18": "3nm5Cr2rpixmB4NXRrjcF87hp5Xy5CA7cAM4omP5SLPqqTZF5YSX2F5ULGifnaBJaqkSd55b6Fi7XZxHZJYCyiSp",
  "key19": "25Q7hQ2JhpB2CDqJSg4iLWgnnLv4MTXBrJ8ajmhSbHnK2v6pgRW2yNP7hXBtFwMXY4gH2Egx9YDf6orh8LGVw4J3",
  "key20": "39pPS9UhppM5PZzCGeGtq2sZsRh99muHeWVYbmKdUbenhzZDCmn9k2C9qRMhF9CMa7twFTgXjeH1LEjq7WeMvcCH",
  "key21": "2zFwbhQaPqeZSZiHRSmDisKoF6E32zeCPXe9dowfFFAtpGuHGnkwPACDh4QpJJELrgaLb2iKcJ1HoVGHSAhc3Ec8",
  "key22": "3PxLTLUYGTZzWfJ6Qp4SJt82FtZ9LZca2ekvnZw3FuqpL1uSghPS2QPBZdKtYgXdAm9shDMJBnRWMummUYC6KP1n",
  "key23": "3hDCb6UFqBZdqqsAQm1YLpvhFuTdJxdgNvE6TxpuJtN7M69q4aPXxLzXSXDc1t7vTa4zZnJhyQ2hpiaaum4p4pud",
  "key24": "ySYmaRJcNYftyqjaqsmrLdT1uVqxHUm9W7hvZp3rg4xY8qNLuWeWszmkM4w57spjWm9QzEKpFyGW9gfoQ1fpGoB",
  "key25": "3CWNtbfqroQEe2bifqZKmxmSNGnNZDbvqYR2BUdrDH35ZTnRWorndtDTJ9KJgWEf3sb29rUD1SV86n1AVbCDuHKH",
  "key26": "t9cL9vhWLCfpMKLGycUhoFEZoAmiT8FnoUMXkyE6LPz46wKZpsiVRv3PKQ9yZCBqZaeYsLbqVoaHnNHgSqy9jok",
  "key27": "5BmPzpQpDgwdtY3pX4mgN2fZp3LrAKJ9zfbAkmwYQa9y8Dnbat9YmbpveqfwKDmwSSENn7jzSgXfuuRsphQS9PxF",
  "key28": "2Xp9uvApEcjivGnz664VhSsR62iRJ2ai6eberEoTPhvCjruAwre9RnocKvg9DKBib1VCues3QhKLEz5TRF3sYQV2",
  "key29": "2dvqNp6Z94NJd6KqL4PgSJjQQFvmCH4VuFzL1w6zXYdmGquGYRgcahr91c1sLgYkFpJgUGfU2F8mh9D86GJdkgaq",
  "key30": "2bHUAxcrHSiJtshMJmicFELhVLknZy5tA3qxeLXXpzerjirneZGXGcffhkSE1ad4CviGRxfZL7U885obAgJHNyPx",
  "key31": "2TRYD43J6Uk4rvhBxP6wbckkD8XtaEJKJpTaiJbpW7WbF5NoVh72hC1oV4hCYxpF15RLkjLKjCNpQtqLivf4daxw",
  "key32": "57RJ7y462SWAouTzbdobN4154CdZEDKagw9GgsCxMGoGhvk9ENyPYK2Ff67s9cTN5LYzsGmtxHbqcGDkbW53ompC",
  "key33": "5uMU4uh7QzDRsPBH8eF9rgTzW9mt6s1HQoUrt6dPpHfpM7mXhps7vuEsUSDzpdwxL1rNGE8nj5tRUb4qmfB9N7fs",
  "key34": "58Rsf3uN19pdaUVSM2DrF17E68giDYSWk1L2p6KD5MN61x85TjPRMysL44AsZnpwX4Uk22YMDu4NscC1RLmanYE4",
  "key35": "37mnoVz5Ewfb2WSHrJLDtkTxqavdKMy2gj2Dv49a7p7JNvGBNXUXjKEFgStx6hZDK3LEX19oFPy2aSQoxsiWqbEb",
  "key36": "2KQRTPvLYML1xfHXduFz8E7jaEMhtxZ3zBrq3EsgQfppvLEvE3RKFfhHc2ZDZULwWGzB2MbnYva2vWVgqPPtrrMu",
  "key37": "5P9Crc8JgSET48rAGnwg9Mo7KBonUrd4zcSbRurub1fE9QpM6JRMMDS4RLcNZ9VQazK8GQk8ArAANDv92YXbCe3h",
  "key38": "3dKf5Hif7Ufn3G16DdWKfYraSqayWtUiHnhGUZeujWEwcfKRvXwcgSrRvXbrC4zhXuFytAdfVccSRnJB4QmvFN9E"
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
