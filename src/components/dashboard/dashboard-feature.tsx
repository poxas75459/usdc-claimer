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
    "HybZZdL8ZJEEpLquqVV7y8fGvc86v4arwihrctdtEw33crf6E7dZFCSJn8gCHhdspB7NamPoGk4JZs2iZaZfkqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twRXEMj5SskWKW1GayLjJCWDXExwsYPw2EARn9FCQp7ynvxgn2oHZ4SqYCU5ZV9Q9xaH4JFcZp7bzQoJf2Lft17",
  "key1": "R7Ffa2572ddMjEffRnHgruFFoRoUokbGqANwsLGpXuGdSK4rQf3Z2oUtQdjBfxD5FAiMKX77PRG2dnqnUMGjsfz",
  "key2": "3fsnUvyA8pqbUxCUAqhRLfs5ZZDU9oP3gArQcrsAs3VBbE5Er8rXpadt7c4dNK8Zy9e9Fkg97hLppiUm6WWrGBSu",
  "key3": "66bxAGqENoVLkGHMVLEKjk7JY7e9ru4xAtKLbH1bW9qD6FzefmYor8EHuEmywo4v6Zjzkp9HbcsoAyDtfAHzf3Sb",
  "key4": "dChioEAsaa9DWZKFnRunmuGXVz5S3PhY2rfAR19qgxj2ffFxVFquviDmUMzxuozgBTFpf7g183TXoSWqGbHtFHc",
  "key5": "3aCu5MBLjY2vZTxfHpm7EwyMVjScP666bbpLfHSgD5wuMGiXk523JTptgvp4RJ8th3ayhNfCov5ibxQC4eH8Z9mB",
  "key6": "vzFsozjNEwrVto3URxC7J3nMDrcbZiywpu28v8rGEp1EjvTEB6PVM7XMiQ4nb7JoRQg9S9FePE9szuzECHw4BjM",
  "key7": "s89xMagyaHSJEUghFcgv7QYgmnWse8sDV8bhWGXqZnMgtGzEWCjoYJd8bHgC2iho7dXCNPmi4L5n7dUJ4cZcVDe",
  "key8": "3jAwS8okFuhX63nCbhijAs3Xo3isJD85NdP7hAAgJ3dt7Pxtv3a1QCg9oA9E5Dpi6k8syN2ZPmTHFkHFTKw3bvG8",
  "key9": "t2UxgDF53QYk3FQoBZbCBDG2J4BNJiAmLaTpQJLS9BArThS4LuedPN2sG7nTPh1rBM5cDP9A9zVNraTVspyPKie",
  "key10": "4TgoyBCyQgDaSzE7421MqAeUvTz17jMsyShsXEp9Rf5HxdRjZMm4oZfb389Wd11NDPy6kKNGGSQpB9PY1XwhJRU2",
  "key11": "3rsAQ5VKHzDWRE5kMiJTt8kkW7BuwVqr8fa4DYL5yyuQCHYjee49QcHZqRiehGWrXCVWBVYjjBMD4YPEUETk4CJq",
  "key12": "XRfrL3C4rPS9pRNGueDXqUvbXNwdFdufnmX3o6wNLhqcwo98y8WReaQHLDW4n93K3Xj7e6wwAh6UeXyy9JRNfyb",
  "key13": "3tDGjLMPWF66T4e3twMcgVRcBEuQxw4fNs6zSy7TnTAdB9UGU8G1fFrrFFk5eE7KN4hBk2Xtfay4CJKe4FDiWbQK",
  "key14": "5QGgrgtrVBhMmY7BhZJmbW7vivqfNCdEGBDM4okJjUk64Fbk9bx7wbsiP81uhtaXz6y2ymYW7UMPtCN4dYDPLsMa",
  "key15": "3XTjp7LXmfVa5jY7cpgC2pgWYrgdGuopTmF8L4S3BWaEwvKgUwxZ6BWFhESmANENo6oyNZ7jyXZ2ovWm4bocLttB",
  "key16": "61ePRodCMPtp3goXDPRxLbg32wCJKfX76sAQcm7Gft5Nznf6EoiZVFz6zDQQkfrkA2X1Jd3TAesoKUdMBXHoeJGX",
  "key17": "5WvzqW89hSRgGcf7HNNAJtkyhXsUhHhnjqdmddtwCtreAeZ7JjC7v32baVPo1pCZktz2PDX89cuc45k2b75CPLsA",
  "key18": "5jUvtM3qfTy8VW4P4mTRoY8riG8GuadK2F5otZJiq8fB6dCzU9ZELxQ74yHKsQ8hm5bGHUKtZDXACYEM9xtCjcYW",
  "key19": "5jChnKCntxkXHZC7w1jzsPwBGeyoc7kwvaSuUfF7CsyD56iJDBBDT9aBj4V7MCfnKBePHoAE9S4LGiomor1Yes6D",
  "key20": "3mxi3s4NTijKf2JBTTnpq9itWrW2XFxxGkYVitaYcUumWoSdmXcwyTTB4x9CSFxN1y3iWdBjiUiqKn1xGM71y7E8",
  "key21": "3vVUy5Y4cBb2bpQgFjDB9YybgyWbLWxnXxEtLUmxoJkEZtqMckvAdzcmM4vtQ22HaGrP7jM6frb6sabGXwzaiiBL",
  "key22": "D6ESdMACtG4Tv6CjmkD5LvN6Svie14xUyP4wLnDifMEATwjkZ1F7KXsK16f1Pfz7KjodgM8EbTsNqGEE5CthqzM",
  "key23": "5SyK8GMx2jcsShdyabuxyCxP9wLD3EZDJ2oLiaDTgQ4eXwoWbdRbZeWrufNKANwKoCb2hNM8pPUZtFQ7AjMjHPXQ",
  "key24": "YH6nmbudLPM9wSgEzSEyUvRvdZLpFdGLmusVTHAL9wKyMLK8hFWVsiEazGX89FR3Cws6iQvvvqVfMhT2o8Bpvvw",
  "key25": "Cnp3TckewnEP69nyPvHytUc4Khk5zuCSPZuFXSCCYXGxL7MG3i3hntaUEeczaPpRPXLzW55HUFMC18cJc6wTi9c",
  "key26": "3Y4EvMh8otZefBUWs38uCop6AuuGwA6nVUbuNZEqagQZmrTqf33XDjBsCYCJE6bjf9eoKqssb3DuzTEpT26HaeWQ",
  "key27": "5eBXuU7BcCDGzYQd1HPF5nMiKKCMxny6YQj4gi8VR1MKSZYjXrTBeoDWAJEAx1U8FSquySx2VTW7Rc6Z5W777mnA",
  "key28": "2udgg52Eu97DB8ihASowLawGFSDrtJ5kjwtp8pSWPAnjWAWSchN2vtZpXkAwKmviof5hv1rUR8Xk8QGMsfYttTff",
  "key29": "3pizSunqcW9AphqfP8phQTDCd2VBKKxFFod1rfiXw7WEvsGAzZLZXCNRH1yDruVmgaeJaHBuqSCAazRojjxmiESD",
  "key30": "5VpqHPYb6pDCTQN6An7s5Qg3GZYJAbtAaXcE9G4HjJFSGc5D2LXTbqaAN2LdaKZMTNrsrUbUZ9Cz1kReuqXj2nY5",
  "key31": "3A7LPFiV1QgJUM3PPTmqn88cJ245YusTmjV9St3NZDDKoXonMo8DfMMR5XF66tqCkXdNfxb3J3ut4MJGhUZV2pGd",
  "key32": "4h13F74xzXf659wWYbq68ngwAEMsYgru1AAyV2T3bJ9f1RqnoiiVWAf9McLRQLG5Qte1eoNdSSaEfhCbyozigppL"
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
