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
    "5bcF3r6GSb7eaxe2b9HbkDkiopt5wD9ux1WcYCGTVqD4i3Dc6NAwKYEGUZqKJuwVATTB4NjP1SdVhtuZR1RrvWQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "isfKzwNBU8swCckrhUVY66QrCyDZ3A7n4VGHp2oantgQLrZ3ho74qBK2kf9RCpru8Nz7fHTxbSkkfbM7TKYAKh2",
  "key1": "3obxgPPe8uxHzm4oswaBqkhmfzLEQVEmjK7s1PV2yTQs9tVr2DrAg6mbxr1HKndsN9PBSUMsgsUjGNAuoX91rU2M",
  "key2": "3SGUQodSBM7KpNgEm9N2wJf4eaFTnhkdiKS6F4iTuJarbqY9JyhmGRDiPaBT178BRNKMTvRMT7fxo9gjW7LfE5Yk",
  "key3": "675QMuDVi7KdEgQN8tqGNYhWL2x4CtpMyonRAHsjMujMjiq4W7ix8NEsEq3LM4xzCAs6XLK1oXqAsd8ZSHtDV54L",
  "key4": "isnPG9KxvTypZAyVeKJ7ntrjkE3zTDyLshWVDsmpoDMHUJUykgNrDoDTf5GuVAwqLUKmimyZArMEVzjwb7P1T1r",
  "key5": "5weWeFnkc3UCaqEJuaDHbSJJTytjLgFF8JPLe9ssAvaKuuDqs2sT8JEWi52qohdmyf5ZU9TnojsMKrsoahySxwrY",
  "key6": "4pQq6vxdhJXKdBHumJktz1WQqdsUgL4w3GPsjJEuQh4ahfEmg8dXDJ9GiCab4v9jWKvhQhhxQHvsb1wzGLZ52FpG",
  "key7": "1H3XgAX9mwUf2UY6FX5DzndoszbVj5nP7fQc3ezT2Vy1f8MG6AWBtCGer4eRSh2jbVtafD1mKEMwrofrT7XJMSx",
  "key8": "2TTg3AgSCv7z31sFGVUjDuisMhtxzKoKDLfjBi2JZeSZvmnybBLQzDMQ15FUMMRwdenNfuyLAhVZxTV6uKrzMfMc",
  "key9": "3hays8wo3FWKK6ShygF3bXV88k8RW1H6sH22ERHCWmXsxGgT1g4tj3DGj5edxpBpFYDkLrMNnMs3kb8wtWE9bdnY",
  "key10": "5EiRu5L97QY1Lj6oBsZnZHG4BnyAJBeZKu5LXjxpFps1FD5FskEFU1mJJSr6cYnppkkN5AvjZNhJW3FYEY2AKEjr",
  "key11": "3pdSuiHXq5E3R8r9bH8pk5fMu9KWCG6GnKgtPnWqCf4JLiiAiY6ubu4W1sDvfTYoY46jzR9KtTMmK2ggeWRaKzTg",
  "key12": "39Y1icqZp71nvDwaYQvyvBGAM6dzZgESbotafwSTUAyxcjASY9orp7ouckkFJAR4gWZSgvadm33DTbF41d1rV4h3",
  "key13": "iWfhkNtGQyRyEQ7pBZbrhTVrWe6hAaRvGtokpSAh7EXzm5366EdT6Nxz2rPTCvBvZUMSTJZYVCN5qrfxY2PtTe8",
  "key14": "RFaJubz2FA2f2WqQ6mKcB3NJy3hLEDnmNCeKTgH9buYWhGRVP1XsfXXTHQ5dGXFUtDzW7pebdNQomRm5TJyQivJ",
  "key15": "4coRoFbQwGeQkdqsEDQBUUk47cDYqVF7z4Am8fLPfHcjbDCRutQeuPxzY4afCdBHLs9dfUqJ62yafVEhH5Biejhg",
  "key16": "27xwCgzPGZuFUyxMMkdGnnVTa3ajLedarF7WyDTSEaUw8BgDyeLRhkeErvjpsG6mcJdk5U47UnyspXCxcdbVP7MH",
  "key17": "2hYHaq1rrF54THV3T4aZxTrvtS2XoTb2VoYYhqL5mHxuxFqVw2eYPzumk6bJRjdiLtPHyMWpd4gJNvQjYhNNF7SQ",
  "key18": "4wTWwyXL8doRZiXDaZS4R9oQTFWUFpbeqX1VREbavXgCuVNDfwuNYb9ED6RbWB7m7zwRWeqNMdEeBLN8gsR85STw",
  "key19": "2gozroyaXnGjSDeWDySFAbzNknz4cVpRELiKrSMSNgprQUzVaeQXQe7NKCrgnriraroaK5eh5VpZmkxkik8aSkry",
  "key20": "26KYukJKcHV4fyatfWLvwTP14SPpSvRPfZD65HfRPMzjhQzcaitBMUGzg4HPrhEsYMCmTt9eC1P6XR3cseHJCndW",
  "key21": "iNcY4BvDNpmaBcnRWxun8QYFDUZw3rinduA5RvcburcW2YewQHtH6pD7FBtQ6EcLK1vfozpBMN1v53bQe9U8XXP",
  "key22": "4q8eLxBC1W833MGMxm85G5nKukMfMjmGL1qhZtAVHiCgfz8Lzz6CNmU9Na9ekdN21KEbfUVYbwLFpnHKjzxJQE6b",
  "key23": "5jnNvpCu1cmdnF3VnHpbDuFTEW9d2AmyyW6GqNTGkam41Qam2jvu8EceDmYYneVGjyZZhadj7i9ynrfhySiJMnqR",
  "key24": "28zW3KGkzKKwvxhMRPaMezsSiwKeMphpsRHnsdwANNsTZdbpaa1LXJ8trZfLSwJmNDG68LfcPh3NfXE6drE5mpeN",
  "key25": "4rbZgwPJ9gYb7BLeNtx85qAzHG82KmseMErrBhqrZ98jjeuhER2htcq9euZPPTM6n8bPRKin5jBdK7DgZ7HBMZBg",
  "key26": "33TRH97wLvvV9nEq8oVyHyU6a3TVKXbaWmFEafWBVM5xPSEcH5mP2sZidsSEqntgAcgrxQiGnQMgCB9J59iZ9J7v",
  "key27": "5q7ARNG23vE7E4EKR4KWfeWSkXLH8ZiNYHExxgLTWY8oC2fyqXQffjf72ewF36DkQH3he8moskwbpZbgHRh7JnTF",
  "key28": "22S4xH3QAG4U3fiuqJa6r4tHgLD4zzq3fkc3H3jwTW5T1dxrrCghFKmMAZeTr8tx2x2KeLkxaCWcc7NxWcmzE9K7",
  "key29": "secD7DaLynWkphtjpLnmDV6N4afgA5s6V1Agsem18HNjFUvDRkaR6nxbYhaXhxL3orm6gTTCpGK3gFsZRjRugPp",
  "key30": "hMV2ti1ZEsmeHuc2Y2btFozeYKTec8Ao9SUUjhc5CXEm3NzDpgki7S8YSnDuYrhaApd62VRbd9BZRY3pBc7eMtf",
  "key31": "2R444JRfcU12yU2Syw37wuUhK8QEAscNAPBrDM1hxaUthXYhZK78VFq9c7MUmu3uMrLEcqqbwBkznKQZJAQH5cR5",
  "key32": "2WQSnkuymLJXiPVMMnF4YyjcSwrWiWs6SkQ6M9ZT5VZkyFLcK5PzcX49hcu45uJ52p2V6cva3KAPv5fzn97qcapz"
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
