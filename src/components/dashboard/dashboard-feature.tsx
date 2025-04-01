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
    "3sJhQKTx3XajxFMoZspYvgNrvohHxtdS8JDxXjouEQCiCjqnjxVGZN1ouF5YMYf32Ppd33XXxPF8tLVvhPD8McL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjaSFk1mFTemVY8jB9yYcdB6mMmo4iGmnYZ6NVb3SkQJMWHiyqyrUwCmzXAJ4rXhgQv3Tdg4Xi9GtT21jfz2Z21",
  "key1": "4TGkcTRfdk4zR2gXb1nNWFHdXiJkFdaP36AnYVpT72KUAZ9CpMqvETHY3nAoDzRN82u15TUvSbNWmjd5T4Adn7RB",
  "key2": "5VyRbqUmH4YYSMuVbRCjpUgDSdHwAA4Muc4CFJfcXTEJ7Qb5khMRUfPP9HFbrus8W3hPaqERNsTzX9wd3soZDBRG",
  "key3": "3zWADFroUcvVEDWPLcYvwWdPjhE5XqDqJqAaoJBBtrYaqXwJ4qg3ozcMnCpjQAAhZ1A7N4KSY1vk58gTKj55WzuZ",
  "key4": "4T4CUZJrwr6VuCdx7AkrVz7bnwNgywos7s5RZD2Hi5fGtjwwvt2iAggA969ENaDXVmwXiDA9mjZntA76DuLoGbjt",
  "key5": "2T9KH96KuaZAiNisccZUmtXbxgeGJggf922SySWJjecd4SFDAvMPmLGuToVLyGiYhGf4McGLqNrQwW8VQvrDDugh",
  "key6": "3ZtauT2PYssSrmHeKU9hdVWigrdxmXRLLKejwiEPkVf3vEpEv2emz4uMCJ1NBFH2197wbhdTd2aYUtebQ54g1j5u",
  "key7": "3QDzcwjKUEBhKMh4DyzreqEhJaQTkrJQhwoosSciZmGXEk1RTankmecJxciZ9f4j7E3VQvHSM1i27HZ6q2zv5c82",
  "key8": "4yFwNEUnY6nrk51FiUV4xEc3yxuvJa2b7xGr8uK5KunjthdPoqHGf7CHXjXJBJ8w1NwJZC31FZUqcswg5hRDxeGX",
  "key9": "4FYFGFBwT7iNTeBJFnv1T5CCAE9PUCqB9jVRnAAmCGG8UGF9GkP6DLb3PuboTfipEikfkQeVbjbScSe3PZhER5zL",
  "key10": "5ejd8wYHTxTq2HcafJ36aVLo7YKJhQN1aHaWGoixSGC1d7EAAozkyPQ64f7ttsyr6JuBwsoKCAZjv6MupYsNwb1j",
  "key11": "4gPCYsJAwVcLb7yRdzMGZqn1iXwtGmG6TcLspRedSYyWcE48z6zmYvPMfTrLe1b74zrmrJxy8gvvAFemzzxhfaaU",
  "key12": "24VoncjJokRdSkmbAupQuSgUQx66fLKKBGhdodaz3sgmdafVbgwoDVYf5Tfqej9am5H3rdhAYFcX7iKswCWmyZQY",
  "key13": "45sbahC3yW4dpw1d7kBAvARBw4fnxnxDBnnho77JtKGaW8CoRz7Xu3xAQo45DQjou5CjusDc52mBD4hJe5mw4XZq",
  "key14": "2hhRFumfjkweSmNrwNaD47quVfEaaVMjr9f9wze5CpvkUnBgDDfHdJ85NNteQRX1iJ3SCesLdCgWxUQQzmyXKhDR",
  "key15": "3754SZPYtSZ8ujxQwp5R7fTf3HYDsCe1kAgtFAre75pK9GciCTh5eiWESbpeva6mqTEGfQngqFXv7S19ZvhUEGEx",
  "key16": "3NSYzgMT3KeSmWf55Vda3M9MQqotuuXXW5Y3ZJ8WGPandWgvZmjDFxRfvpyxgNqwFEvr1iCVdPBrQJ7dudpG3Y37",
  "key17": "5rsQHZzFJcv8ZJxFXUcqqZJ7XNhftndL7Sxvhjn5YwXn7pdeZn3k9NEfByuCK5Sb2TYDN5Cymkf8r35bgPDrYej1",
  "key18": "61t351PxE5xX7Fk2S8PeFMfxhYW7Kj2qw7QM7FBCr3Rnnb5zpRLHqAuEstddo8xkBA2BWqhecNEwYUFmh34niE6f",
  "key19": "2WBRZK2QSiLv63NgynwVrYJnF3QWRyHb16kf8DCZcWKAiM8xuupyR83wvM4pF7oRFcynNRUGTYL1kfkSzxNKfVD6",
  "key20": "4jp66J3iLBUpUUaAQGwEPzCKxYrvz9goa5gqi1CWT9krhhL6U7qhopULYiQtgbQ45xuZxbdLDLir54sWBKr5tuXV",
  "key21": "49rCTPqt2WBqoX6GM8Nq4uoNwNkvB1ERPqvzWZKxJTDaUuAVivbK9Y3BmcMgeDqfeeKvsMbf1zDrF8Xo5VVdR9PU",
  "key22": "51iBCBzBe7rW3No4Keb7Pd6j6ukxusM6p9ysLi9TRtrXwPvCEgDwzc2mshPfqqi2PaE4seUHC9z6g8wz1xdWqsn3",
  "key23": "4Gdaq4p1U7enrM2Xzv37Vfk2D2MTG5EGXLyBhcdH4Yvxp6mh83ufXKCmUVBYNkNie78w3PTjwp9vV3n45QU3k7hM",
  "key24": "652rCymi5n8RrWGk9AxX62Hgj3NUTb44mTZs3DEQhA2SFCdbijinCkeMdrZtsxYGJbeRw2aT6C324Ua2TKDKpPK",
  "key25": "28FnKEsDi5sNAJza67xZke34wx8Ftq3Rui4ZmVL2BzQMdUWoNAGBmAXeHczbTFuTkU7iu1vTJwXNdorN5tvz96rD",
  "key26": "29v2phG12xovFA7dtBRLGcwDoTk5VDCgWQa6d74aWTA5n81LFUirya6jdTFXJ7J2raugBhaTuGeKKrpDVvM1etC3",
  "key27": "5QAWnqRXXk3mihv1rwDP5Cd3R8C7dvhTjk9SzAmjBiveGFheHPyqq8npCfEQ43KZ2C1HTd1CMFznNoqmCQRBgK1J",
  "key28": "36wosZcitkSCfEo77NR5jV3ZY5eJLvye1ARjArUEH8jVYiAdf1eoZkR3q6FKWQXYhKXp2LXhRLLsanoTXiKXzG3h",
  "key29": "2HSg6GUhz5ZRyvL3yjY7tqJNhkaxTGPntjgzixExsnCKHprw5RjjxtNFxkfABvZU2XgrFZoXut85RTEFPkG4ctai",
  "key30": "44BRGfNezkebMdz5d7ikaREtTGqqwLrbyXyK9KQqUY8ZYe6mAw8oojVmLdA5esU32D9MYwPkhxEr7LEudyBYZA48",
  "key31": "5HxpmdV2LUSoHeMU5f5SpCqbuLUjsDGr6vQDosVMX5kMWAtnJauDzNNaB2mTDhkMtkL8pGBjcPeVPo5YNpQeqWrr",
  "key32": "fd28DewDMxZSShiDvXYKssfLLE2cfS7eUU2jqJzByeDBoxNfuMBsgkLS6nTsaVd7yiPNVuLDyhtkGN9gWioLhPa",
  "key33": "3BwmU9HyJUn3pYxLELWndd3pL8qWqt9UpNyxPjvQ2iYj9cXUbCCzfJFin3MXbwekbk9kriThpZfVaebiS8zZRPSM",
  "key34": "2tA8mhrXi4HCGmhmQNZ3x4hPFegR1RvLmjybnkhYgWcBrrgkwDMAFVz3V8DaSS1aQ8B7FaRosiyswShh2ZgfWB3Z",
  "key35": "4CKH6WGBeBYtX14HzfFic62yysPnP1nnnXPjdLcRfGa3o7kJoYXpTSpn6bLiSTaxTBXVHeXFwcnpDM5sGKykpTHp",
  "key36": "59XFbgsoQvsC2XCcWVSBRZfhieCZYNQ63n6d1czzDiDNS6hSG42y9o3RgP2syvxwAncSsVqw1xbsfWVgKThG6pgW",
  "key37": "3UJFs4Quan7CvW88Y2v8snWBbofdZcHvEEoFDhfFKT6YBjqk6T1dDnVJe28oTf8rmSU11pi4dNBw3wS2QAfEsajq"
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
