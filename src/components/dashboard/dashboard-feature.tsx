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
    "3Z9ZV7sY2H175FGxT5ecef4sbkGJ7Mz9CoMhg9Rnke6Td8DXt9KgAQtqqwmMLd3G8oheT7CMrNffeJLAphMaP4KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPm3mY5yrdW86wD2WCdhVp93htMMJpbKfVy4A4M4Xg7xfmhDe4SBNqwvVsHNEwSpvikFmJRHWEK6MGGzX4HYjyC",
  "key1": "4Yi53JEkHjoc7BuRRX5hgvHhGCKCtjx4ShzBnXoLA7FhzGGk7kYEcw6pjDH85QFVshz12ypteePxf7S6xjEuXVfW",
  "key2": "2v4Autopk5MyxTWXVYUFtN9rrNVE47tseZBJXk2R8zvZAgbHcfpZfST1r4XU4Jkgiyy9ZcMKNLpNZX3QW8huDAnV",
  "key3": "2JAszSzSs4cuDwHneU2APPYjKveSZBinSBbGiRpxeGjcYDDgr9oJFndo72NtEbU5KHPMQDZTAJXshWs9iFPNxnyF",
  "key4": "ZwNJTMiQvJvymUzJYQ93S8LcTtYbgkirgkn9UAESbkJZ9FBWeqohk1ihCyZhGJ4hpMUvb52dNFRMfNWwDUABwrT",
  "key5": "3f11HBmKosjgooXXQMAwyke3DHjEnHZkvrZ5XmRDCPVJf8c4Q7CDX9dixZF79Lftj9JTTQKXpbDExhE2KK8h2LPr",
  "key6": "3hXhcaoGcB4GjDcfnAq1EPDWqE7NLuVVwyqgStDiWSmXZyTL4VUTEbwEGT8DqcCTspJS7GrQFQeTaaRcM7tKBBv3",
  "key7": "5tryFvA3SiJ4T49VH8rkWc4wrpQX2xXPjhYSFS9KG3Y3QVA5ckG3Z8RM3nPXw5WREZRz6gXRphNfFoBMBJ2ZrpbL",
  "key8": "4LEJ1Lj5YFQ1szuERt3fiPqiLxy5X39rAina4JBzGYJSRELuJ6JqMmA4CFJSM7uaiAhjHphW924ghPRCz4XVNpxx",
  "key9": "2AmfCjCDRcYLC3Dx3FrGvuKgC179gfcmxvnLLXuESoDnbDEs26t2JQQHTeZbrAKdNT3FJcGip7Ebn6THh49qRYEi",
  "key10": "63vKTfkEJfQbexBKA1dNriUzJxYSLiDS63HYuXxoKZ3pJJKkNtwsXBZaGcLJQjuWqmJsZQEQd6NduDFJgfX9LnMR",
  "key11": "VTF2qWuFhzipSPFTjCKUYwSS9LXyVmEPfo1fFrUGLPvFYxFXncCLJWLuRSoLkbbRHPFic6J7osjQ1Zip6kY5cj4",
  "key12": "4Y1RLqFrNA3yWVSfsy2tMcryQaJ942YzrGvEtPc1kw4Lq4DBT8XH6KjDUJCLot1c9nw1Dnyo7XJjHYUv4yu2vAeM",
  "key13": "677XuN3z5L6sYfqUV8225wMw3PHG1jWY1ZBy4qr4kxbuJa4RZtjuyd9tdJHPfUxDWerNRQVWbawJXebMxh3SumPk",
  "key14": "2DTrbQ1q1GaySiJzX1j522LrHPSXRox47o1A7B2bemgw6fmXWVockC4dV8R9yiwRMynUfDUACD7EE3DuVSWKUYma",
  "key15": "58DBEBPMDTVu6bxiqBTbUcS7eRxKLvkktc32bjQrvxPeoXkK8wXTBwLwc8mB4VHJfDS91TyPqrnUUKUWsRwG7jR8",
  "key16": "9kdpncPTo4vF49wyTdCTouP2sF5DCsTSEpx29PKkS2oLuNKzA8kCjwCFcjoFZ3dKi8HdqtGvmfHjVD4PrtXtMa6",
  "key17": "5eAq9tz8kxq4VDTUF2wXHqRxYGdd4nG7bfsKN4Eu3MMooXFeiri62a8VGPS8SLwcYdcLE39WgeTzL11B1ab1VfUy",
  "key18": "4MZbztgrTc1xRT75FikAayYiPpdFV6fL5K2o353ZkcP86KCAinZjeBSbQfrguih1DQ65z9ccuFsQkfbreDBDxwVD",
  "key19": "3r1GfdyGut5M6XBuqQzgAaSpMmRkK9gtvbhTqs2WsfhyYMt6BpsYpoQ44sCJZDTZ74buyFPPgsDPEadxrtowNwV2",
  "key20": "2tcKVdLda5hGAnZZ2dwWqwQhowKmvKTboBdi76Y1T4ENReUP6KnjAtvBTHHGZYeWtrDd7CTmci73PpCxVWLG4mz9",
  "key21": "5bPZbYxV43EnmnKP78paHk6RVv9srsYBz5qQsZe8HXjm4iemmqQkPZsiW8VGnpJ2VpXuTHcEZff7XSw7wWHMYT5Z",
  "key22": "24AJQw4YrQ1B4Kvj4W77FG2x2NqRYNsYB7EVyCNJPP5JuvRg35zCr3AqPso93uqbaS1QXrHHCtuZEmiY86jD6mUH",
  "key23": "BLGcSoy7eiB3mrsWKPBTyk2fWfrnm77RZ3uty9k992DsVYqMz5BPaDygYGUmmZ3Q7PytrTgsFukbMaB6rQrkQ8M",
  "key24": "5iuxQ3tEpi7ndu8SB1m2EBsfeSDRoTXDYt34u4hGxHQSmvKNnnaKpgKB7aUuSYPtVuE32ncgNwTLVgVuzRq7ks3G"
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
