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
    "25okqc5pTCB9iKdMF1Dbq3DVmqy7ysJrPj1hTmJktSCM1kGow5QKMPAXP3bnM7JS4ULogGQVoCL4JzJXHThknMQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKR4M22cJz8CYidAVbqh9CD1usxNwr3TQMi2CRzcrjuN7ZwVXuLw4RxyP64ttE8gCGKKS2W1NPR8C3rLciHyuso",
  "key1": "uYiwwH2ViRUi2c4BeLfghhPFGx7Gh7ysbU16GtUMWdUSiChbrTnXNYgWkGYmyA2wVGXr7JcCJ5WKWYV6pdpFhFS",
  "key2": "3WRFfzYfHXVgmW6nfdh9bHJNajRwL3pC836paFoSWBnPWAHi7hmx9229F7xsr6jKD3JkmxmJtPE6jJHPDjab6E57",
  "key3": "2XJ7Lq5JrdauDTi2LWaLXnHRsfa6oLvat5otZDwKBpUhCxYUNiogR3AB7qLPXWAtwQ8UkJyMUyYxQfv9ZWzFT79B",
  "key4": "4jqP2J2UGc4fRWQr4MGdb7QirbHhqQiMzUAk6nRmkDU51z3dFjpCb4rhjxUYqANcmut98FpdKjmea3h8zcf9adKe",
  "key5": "3JRTYQFaSHFBdS7dVi2MD81JZyTV1uzEjRAM6zWoEbPbYAyB161t2VLxLUh2S84z4DAAActw6qCqgMYDw6EcXNRK",
  "key6": "2xymxk5E3UUnPq1D8vwuK5X9GpwNZoyXQWfBqZa3Yzo1zZqytMpxgq37M4x7qVj1tMTBAgmMCvr1eNBkzEmWMnPQ",
  "key7": "JNf6vXRBN5aRDgiDw7BQy7TKEhjQGhZyNCrxHH1TSX4CrpkbkV2JoPrhcrVPuRPw3pmMkUUfvqtPKgX9dkuo2a8",
  "key8": "2ZrTkwCBbR6jAVxkePYVMCwjHpiBC9C47cJ5XbDX3ZUsW2dtATZ3PKwd7wCYptFTVGH9epBsSZ5w7hd1uTwho3bH",
  "key9": "4dezDWaikwL4Xuxs5Wvg3uPicZZ9bdUdrF29DjK6CkVfbKSWwBFieZiaonqZkqZ6AvrPvfxgZBGj4c8aTLJ2jKV6",
  "key10": "2X4n5d8BeUDLAbWHVaV4sUZk6urjv1qwfzGTtovNFyEmKEVR1548o1djHyZs14kQRp2c1SfkWV5LW3E6t8R1BYVU",
  "key11": "wSfGntfU9xHRLq6n9MAvJCjufJ6oWYarz5sgxejtFRmjkEj1YAct3NvFBqXjJNoj23VPD2W7DGnsvt2DUmcW3zJ",
  "key12": "3Gmf5VpyDroz2P4AUPMBJqCHQq4hgJ2FHBc7fG4a7uHV5PboTEvJpiZsosofwcxDNfjMi4nNdzFiDVfs8LmdRmfK",
  "key13": "5EECbghp4gr8gMi1KZjAYafxKQqwBwk7euBtkA2n5AKDfuwUnndmeNhUdXgAbN3kuJs5ToDtfWocHGVikdpHk2V3",
  "key14": "3pNtnjkasiut9gKNwyV6KMrSEEjEYiMnrfkroHbq8gBBi7KqCShBJ7AKArFNmdk8fivVPzUKoUAxZCXLQd4JHEG6",
  "key15": "3UhokdPfMVVEXF2Ghx8NY288wKzRDUM4dQhKU66ADBUPwmbBdfKKaStrMNEZW3uuJ38pCBRkijNjwGb1G1H5rx94",
  "key16": "3Utgdy8hUdzVxkrMxXEC2dwBw7ALRnMLMnX23khBeWv3JZiHDqxn3fVmtQ6uNjv5xxg4StpJ2bzkiXumprf22Br1",
  "key17": "5kzjs4BCjz2wxejxzHjprFCuPqzNUJ4YN8npqULqGpiRvaFrEq1jdpF1WR6Pb8onTtjf7xvEeVFfY3ezEZZm3LEs",
  "key18": "2JhDVjPq72UityfG9gANkJHedcaEcH6ay9rP1sQvxXb3tQBqp4hGPHhu4aQ33wR8EgfES17y8PnWhmspAigVa3Mg",
  "key19": "3tz4xFkbobHhryxMQUtgJxWzBtq87pCpmYAbPiYmbJ7ycfhkBmUhPNmJNSCt9voXcHkCtHVqDpREoN1mWKBC3kKQ",
  "key20": "5MNV45W9Yp2nmwp2gwWqe3zXSr96phhRBMVatfvtonDTJakTSo8GkY4aEmDSAHdyA2iQCXwZHghBHs6VmCpHZvKc",
  "key21": "3kbBhKmV5mJrJEeekoWdCmJFBHdzooJNDzTRMZeMzkYW69jaGeKVExZNiMDgK2KGZjpjNhUg9R5xz6uca6WsHZaB",
  "key22": "V3J5mY5k2JxbUV2dQDBYA5WPvGdwa1cYsMtmft2BiYT6qPAY944qwvavdsPBNe3okN1KiMuhMJpoPkA2FCHNd6o",
  "key23": "TDThNog9Zd5yDUgwzHQiKhvETMws69w2C3xtrLY384U3ru5HwtUQHPYpvMWbFeC6HjzvKcXvXzWMs9hSJR62kUw",
  "key24": "2ujyufFn1dGyRrrUTwggS1zVPS3hHeyWFVZpnmpXBZieeANQkJ8UzFc6kUxXemo3WWAz3dmDcc6FwNXoMr37jSJu",
  "key25": "jWeu3ioRfQnKTN9MxN2i7Me4QZ9asoVgxYda3MAQgKXmfLV7Ved4q3eo42D45TjQ7G3NmSA4TQ7DFKrat7mkmMh",
  "key26": "3N3AjNkeDkf7VmVddwZBBVWXmK7WPVLLihmN9ZKdJpPwduS7vA5cbusFfNuoKRM5KfxSer4NmT1J3dqfAsVXrsDL",
  "key27": "4HtHW2PR8tcp5x5B7CqwSL6X9ZMXdmnxF9BMqZ5aEUKqCY6PnDszk5SWDnu6tLgn3jU7xt5Ty2EGQebbP8ei5AMF",
  "key28": "qR5ij43Q5QW5uhXumbtcwszSXgaStUfTKyGg9AKa6T9jzRhe1H32v44Ty1iVHy69ST2ydH9cdUP3VuYh1iagK5H",
  "key29": "67Lk7hNGTVkb4k7kWnErCtYyYGGSf1CdaDjEHTJ45oNW8AhaaEqPi1NTs6iMK8v29y6gU3uZaMwksfB2P62ZWEu9",
  "key30": "2iYpLhDYMG5xVsPSCsHFu3GcbGZYHM6Wu4w4FS5xFRBguzq9M63hrgovmXz2fahcApEAux3a7n5scQDPiHuBBUWk",
  "key31": "4NGzjdzV61WLzthJ639aLxLiTWP7vuC6xF7WTdH3MJzSm3Mf1ax4WF6xFhRZ2739SboDBV2aWStHDzMVfKfgLswi"
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
