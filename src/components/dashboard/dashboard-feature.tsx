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
    "3mYbSaVSAG9WQHrqNUq7uBJXr9kqhdkLJKcmxQTqWZpxjEYTaL9YmX9AaNVdocxcg2KSSw2s6N1DvFc6j82w5WS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iskafm4t23C7i2q7tZSBAmG4uabPA3Smg2V19gZKspkKwgarb5Bisi6Jz9r6mTqzgSGRTVfLrFuqdNbYviErdCu",
  "key1": "2wBX3DRk3SZWk2JuyHVP5hD3r4KUrcaRgmsMR1ckV4GgHXpUgm5AAvwDXFxyVJ7ARaoGnAfyG52WXU1DM8XQt8vg",
  "key2": "4oWy8XFpqz3WhW2v1MYmJwbs9u8a5HicBAihVWppxktDVbUARihQBA5UAKDmTZfYMzADPnGxjqfAH1Pc8h6HcNYo",
  "key3": "46dFeReQCLXvRQT821vF4x7sSiSYSGTEE33sdBkED36jxPQiznU8xDLSSPT6wPGZKEjEaknWPxoogrmUXtFSCFWY",
  "key4": "4AYrLa42GiwBMSo3qvAEFwaULxW9c6ds31QX7qRZZZqShvz7ahHGQVURyr32PkuK4qD7Crh4TtGu32TNagj6LBSh",
  "key5": "7XYWtz7gTu31ZwwDhqqrcgESRxEW9mYCtpFZ6t6TaPvRjz8FvXdAE9FGaWnBj3UMTA5jDJ8Hn7D3rvQfznBz4LM",
  "key6": "3eGpER3SBu27in9L2T2hF3g54JjGDidjBtxpG8ib6Vb3yUjHHDXJs6rRnACMQJT3uU8RbLtKNz2vNymdJGfmEtu3",
  "key7": "5HkbxFq8VeWFj2Yw2FBMA9TeJabF7yxMSuoKruHPiRUycLN6w3CYRBSWLUDav3ok9yEaz4U1Kux9aGSYNFX1DbMX",
  "key8": "3VhpJekqun7PvvaRX21UfQCokPzUsie86qTkTqaNdGLVowFvSonSFaXCevX8yEA6jGxeecPDGaG8JVVeoHC8fXxn",
  "key9": "3o1riL5aW78D1PfieKvVCaWQaeUb3F3tehCJpF51BBnnsVUri5i1BYEkbNs2KHqpq1m1trab3MA1iwKSXeSkqyJq",
  "key10": "4HFVUDA1t2StUWKxWcJxnXUgJaVbeYpP1xfaatcDYE8iDcEnaxXookVkZxHGRSkYiJypAM2aXmTqWLLHSKkKBahZ",
  "key11": "3XZCtzFKrAcxxbzLv5ScYjw6HEDRLV8ZAYaxAeLm622hkSR8EdgQXwyaG2wgTN2VHs3yT5chaXMwjqeNgoAeiHyY",
  "key12": "3sXf6c4CMCJCJXFdCr6zgdT7YBwsXT7Z8LFuKPNYUrFEwRxYmvR38NrA8GiEF2kv2qLkiWaEmzJtxhVFHAXynn3i",
  "key13": "521VwRxVBVcWW2zonbLkhAJw8P4XnA3TruWYgAPjko9oWtgyxvQ3x3Sc5T2thDxKLjB2Cfz67Tj19qSpcVG8c2RK",
  "key14": "N7pahYweqx4ydwhz75TCiQoCCcL3nDPiiKRwivLqePkxcXipN84Xk1R2AxSNP9oJ6Euek9ymHiLm7fiW4wSGtNX",
  "key15": "63LwmEQYMDQ6ufZsgTGuyxKoKnr1pykwzCbo2dg7iKVng6TWZuMsRJN1mU1bJmHAacSaTkJy1R9KMkbmY4VozMe1",
  "key16": "5eBbRtVDDxAA6wmseStYTwikgDnT8jALUV6WiSsJP9cC2hgphRqhNmCPXNfTPWjfQkc9K6nEmEm3Wjgsrfu2RoJm",
  "key17": "4Hq26VQ13BK1Y9oYP7sWCSdyH7YZ5LF4xMS1dsBtJw9cCgWVFkAD2btzPGFJsFrKvyjRzG4LjefTnnGvjasKcMPn",
  "key18": "4udhyn7YU5GQATCVj9Dccm3B4Nqj5xZnouDMT98LELZiTwE7tPFyE3PAqDJBioDJrkpsVXrERfe7A3egZkfBKXv3",
  "key19": "2W9q7oCRCWcTAQ7qauHFhET3mqxCLjFyrpjxtZKVBC1ft79Q9hJy8BqrWzpebMTt54JAgqaeNks5rew1Bhjb22YP",
  "key20": "5VXdJgQJ94s1d6XPHxBeb75ds8CE2z9HBaH1rw5B373KH9GvrcR59Q5aHGutR8FbtDbNDSsVUfwio6WsfiBMzDMz",
  "key21": "64APHPsLQULHxX44yAmEDzQJSYdVVNYtDDHRMrk6qysspnpzSZzJMFLyp6WREwfvq2fACc5b5C3sRGwQxTLsPhRw",
  "key22": "43oigikGG5MvS6TeyNXvs3L8sHjdUgGTCUWbp7i7pyCoME7EaLL5B88zbxzJq446LbrS1mEd6LZmg7rh83eJTva",
  "key23": "xzESSVYPb6AdS1FkNmPv8GuzQDpeggb3Lm9GqN8NwsYTSiD64dJisYZBTeRES8gvscQjY2JZJRep5b5DdrByUv6",
  "key24": "5P2Ez3p64oYZ2bLFxmLV4hXfbnN21WCNSmYdsie3DHucJFeSkJEgwc3ocEYsbNTF87nZprS2j2h6Q5mePoVTcrdY",
  "key25": "4hL341ELshEefxuwvK8i7xHjPHRG51xWC1Javd9jQSrQ5timNFqjyjRQKjJ9yehgTt2etswHb6caP1JSWVXZPHch",
  "key26": "3mEgLAMP3ZakPXs3WXKGFgz64UunLvDqqmZKmgjmP7pYwA5JCiyVjsvtgGUh1XJq7QmeDUjXDWDtVAZwuhrskdsW",
  "key27": "wmzDQRjiMs7yxv7TzH3NTSndfoiLUFXHTPBNU8LqfSPPqze5jWhG48F2iR77Mtj4Z5AhCjbrm8jBpJkFsTo3PR9",
  "key28": "5oXmPoj2kKBq72RzqCJRXXyMT3iWvFF2ymygUMrLgo4rJytNjrmGp9ZcTsnds8SJPWHGXSW8eTtWZhXYUwWR4yLY",
  "key29": "yzZGTdr2xmkzgMCtCohL7NpwD4sH2ygn8yLpPKDn7BiAGaCdj2WxXzai6FD6GCgAN9w4mgV9qCg3qY7kjf6dxC5",
  "key30": "4bGfFeQBkevetTj3wj9J9goLZNBzUPDFrGvFnoZGQapzBmjGtL8UtNHF1qT4jRbhEfz2M7Gu3FSVhPRdmTEA38R9",
  "key31": "5hgdU9AFKMULb5JAHEs2yoL5oaebWhkPq5yNi9DD4hg1RRxdme4s2aRqd8ep7MSAdKTES73KMWTDDaVAspsm3jwX",
  "key32": "25vzBPmNbLLtu116EqEzMcJNFPjh3s91M2Y5JJVDYFaCUAytxCBBheBbdBcASQP8c3rTZbs8uZPpAokU3kN9iDm5"
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
