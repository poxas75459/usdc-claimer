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
    "3r65NgLwLFiqRQF6KZDxNGTswVyuenuKcD7DTjxBhWmekbQwvukYYpAktSGpcjmFk5jJpiJzQHnvoRpPZx3pKXvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "koZtnPdCJMwXKJBZN1p6SB6rimhgJkHqqbJzKGJa6psSXNMR4D2TLzCvnzT5SAaUU5fyzxcBB7zDk62KcS5K8AU",
  "key1": "2wrYA6kXXbnGEBun2R2GNdMFQ2rrVojJBQueTizK6Tq6sUiXTxyfpVBWqWAgEfXn3kqPbCp4xp5fUbFua5KwSYF2",
  "key2": "8MyqyC1xb5hj96Ju4hxdbirjL1ZQexWV7H61TqoZLiH8Z4aAm6e8QaeAYedfuhDj5VDYcKPp6H97kZnS7SUqrWt",
  "key3": "4kNV9a11QBpRJLhQEvykndM5Tox2TpBUdKVnJrRi1G8cksTvre42qi1VQVfMEr54hSmJs9YyjAuqxVKGBRzhNkhb",
  "key4": "5Z4grvNAE6TBhQn5Pfi7fi9NWd7qPhSijPro7c14cXqsQib5Qqb1gVfi68UX4TWxJX9dmxV2ePL9ZBLyTXf7ersh",
  "key5": "5GNyHxH6UZHY6tqD3rFZxR7phqS26fkFQs1zLWhFkwarafrDHDmP58kcTnEZbayFz6BmTkrM63uKG13UAYqoYPF3",
  "key6": "4oVrPw6KmnzGNad6fpxSsHHEM51rQMuB13z5MoVrby3PJXEsFemwjgkkoqkT15kjG1fsNkf3uKKTYwZ9cGkbeUWP",
  "key7": "44ojco72n9QRAgsJDniZ2ndMTCN2ikChdQ7Fa7B2Rcg7KW9r2UtCi7EN6iSvKZJTZq4X1j2bv63oTVmL3vCBvAHa",
  "key8": "2MLgc9bSe2rWMpuXTB1KJoNSdDEJyUQLduTYcB4nk2szQAn3AeKP4yEas6KVKgNGrRwGLY69v5WQLqFU25sfVWam",
  "key9": "uv9TDn3DfKL1wmngxYqAbaoNUrNNxQZWBoVZ87h7KEn1Bq64Q5XymfXMetDtGBBHe6Mxpziqj1LoHQCwMHUgLSG",
  "key10": "ggBrB9A6APqsS75tUnwCaFyC9eeb5gKPZ94TsBLU2N76M8DxMEf4758bk4xs2s9xxtDnawad65UuH62QJ8bTbMN",
  "key11": "es9S8yGraYfHXeqqhvW2cx9c6HfRT5gqcemDYSqf5NBs1S2wNon7jTMzTZk2NxfwUwpgrRgqptaoP5fzCUxbUQk",
  "key12": "238fZGbfZKkF4pwjfNJFRyXWdQx57MkCYz16KSWp9HeNkvFtsCWWT9Bm9Hkj1RfNgANMSq34Lz54wtQ1uDcertDJ",
  "key13": "32bN5Pmin7R7dYCKrr4SpfE2BxGFen2mNu25nXsXq6FqQtyHxWJiCW2cua9da9aPhSAQaEWaousq5fVSQ8LgrPg8",
  "key14": "4MWmkfrGn5uugEKFtMcC7VGaizT3QBizNA6ap6J8E7vE4Fqj2k3Peq1hEtGfLSRee5Hzhcfae8jjiPDHtwsbGD3j",
  "key15": "3sjgqC96K7niL8NrQuZhzG3144iUsfS7Jm2PY3e44ZfQQ12LmZwt3BJMuV4f6jiiXcTdoAoSPR9VczGSiBvGiRbg",
  "key16": "4tn5RTf4baGhC6UJPnjtAv7YrFKTE56z9kGquZNCDfCcUamdTBQjqgTqXUgLvZgbPPc8N2CNZL3pBxomwVxC5MhF",
  "key17": "2GEDn4ffwwZkVyvqzEWzV5FGsiXmozzbEjQafpgrZ5ZBLZAtbyh74HndtrMf5Jmc8PC53eeo4CJ878BwdqvvD2gT",
  "key18": "SE2s4RKmVrfuE18tgAigMyuo1DKYYxgXfryuar6zT2Y8N25StwcEfxQbEX8ZUYbkgnpcPFHFf8uXDqoBbZsAkd3",
  "key19": "5ZAoqmEWvoYVAA4u83tEyg94mqUfDyN9p5exdLEeSTMKUeWSr52517nX6XR4tUsQxE97aNezZCvCUG8Q7fNXbwdY",
  "key20": "3dM4kYbqj4GmZANiN8dV3c4yv7vEZRdyBt7MitQ9teWzKkagNCBo1RjRHJ1uFcwx1MMKdvo3RfgMBpxDq9oewUPx",
  "key21": "8KmQJSB4xpiBWwMx2KFYhu3vSqgtNDwdPFiVbYrhFr5PQRSTRm7kSZVsBSp9i7Vr1b7RxoHGBD8rUpWTjNB4W2J",
  "key22": "5MwtdWWJ4e4KRmG87JnfFi3624WoCsQTv6bgPojWm7jtZdQAHEzGNnf2dXGMjuTGoMRuPrYXDc9fC24CSg1majzf",
  "key23": "2bqMXX2KMhvZR3j17JYY5k8LD64U7nuUpPtRwELaW3Bo1HjnYRFUhhQEtVFp31vvJ2f23DB75NSCxuWWtxrZWSXs",
  "key24": "jn27UoQf3Uec2YV7RU1or7PmTnxWmmccwZDsLeNq1MfdHTBYdQSz5x2JjqGxiVsBTiyutEcrH7kLKgGn6TswEZ1",
  "key25": "5fAGNt61qEeRzN9FwVMLvSgpFCE9KPmuAJi6jRo2QF3zHop9Mjxk7hXkkvaiGEM4tsAziF3eiGYKWHovjDGvhqit",
  "key26": "ZmfcyDi3hofdM6PaASfaharQP8NWpMPQkPccVH3r5Kg6cUz983J5jD6vSePgXH6aZuFC7br5UN4g9YpiqrNWFeA",
  "key27": "4jSn7opi4cVsa4hJ2fBZzxUQACb5PpatXGvKw34qgHP198pqzrP1S9oBFy6LcvP3ypurMdxy2H1Qf4tWiMQn27ye",
  "key28": "2bLPbjRQPEWPWNYB5SYLQ235C7Kmnsm6GhyoXz7Y7JVrM3cQnzoJZrXU8hsxr8i3vNqBJ1RYWPXvpFo7FvEHostm",
  "key29": "2gbYE3kUcsBCNhtsPYzpjKjh4jJYsQNeMWA5rKWbQrB8vBNB6GXAsG8rJUP9mewV8jjkHHEGUhCT7v98etbTx3vx",
  "key30": "4vWKFJPmi6mwchdNK5WFxW2h58oYHvqoandgqb2feHuVr7mj4wiZgE1fuVzdaq8CYWCYSGCHP7K81YEdLvMRvkAt",
  "key31": "3PnkBTzjembihTZmFacvJWg363SNe5G4KiNqE2TSbNSyVyRhtRwvUwGohVk37r3Q4iUJk5boMd1h6Kr5QU4Mmydj",
  "key32": "4CUKAAcAmBNxNreM2X4bFqHT2XL9nfwtcyYtdTk2zS7nSfQs8FZKYVN5ZtC7hrk42npuphWUBxdo3d3CRNFeLcDB",
  "key33": "2u4BYTC1YGeUyui9NTjHefGQjjCRwwSGbt7ektyjPS8nL8kBasEFTRGbDNXB4KscYT5ej3K7CXmMWWk1fr4BYHtd",
  "key34": "2xBguA8SRdhDY3bap7GP8UDm9ttih1hNeBKxcR1J7nKzvkSoDdoUddmZQeXqxdQfoAjipsTDVhMhjt87JXUVeA6p",
  "key35": "5stBg8h4Hk5hNyN6tmi888ZFDuqoCotiPyqeJD7EpZ2Gtjv15AZFBoWMoN9HPLRFJ44q5d9Xiu9XpvLuBesvBZps",
  "key36": "5kVufxceUsb255wMAhTPfp9u1afpSkaa9WBzMxSejnfXpiRZRHNsL3qzH8cL4HzsyWJmJ6JdyXfEZgzKL9YWX4dr",
  "key37": "4qTRezF6dtmXgyyRNMH4kzufAeJ2V7MCs1oRNLgCh7KJt6FCG5Kf127ZE74KHFaiyqxumvUhmteTRwjD4rkjKUJP",
  "key38": "5akAQi17opxXp9mMruKiv37fZ2Mgg3pAo4KoohzctzshJzA5f6w9SdLot1W3FemyuTkPnTEoax2EhLJPZJcxcdUA",
  "key39": "357Le3sMqm54XS8j2nRoL77AMNYj8JTbChB7UwAXK3dETm4QAxxGsNg2S1CVH8Ek66f5hRE5Q1ytiZTgJWhPdK3K",
  "key40": "4yDL4DuyTgd1MQZrN9xBLzJQadAt62bGou5PJPgTtpM5FFpHAWZDQmotB4wAqMM3KbJVtct5ne2P1Arkg7BFZBo2",
  "key41": "3EpPy9MveVDvxPf8i3mL1FsNcwpjdr7aNRnm1YxnVTQJtuwuuqqK1xMbcMnuHQGZ2SeyWMj6ZFs1Ncm9v39b4D6R",
  "key42": "4Wo73Lj6fLfGMfXe5PWbCNwfGHdpqLjKLMjuji5GvLjvtrf7rZXnS3GtVpdzA6ZE2q7v2pJcPpS55sBGbVGWEJJm",
  "key43": "45AvcG7J99FrBL2cv6Goy3JByky8T4WCXgM55vzFUEzPEn7qwJ4FrvyTvetHnjmLPYv4HqAjnuYDyqyTc1KZ6JH6"
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
