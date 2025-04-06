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
    "52ruhAih4dD3G5eiuVDzWE3ecccDmCp15nAq1LUKUWFEhUPUhFExDSKNJ2rDzMK5reP4RWw7C5ExZtpLtmvK81gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8SduXMu58qxgtWkSyTZvK4DHoT6bRR4vzY5Ux1QaseSLUzPjSj1V1N9oubJZmFVNUXat4tGLzBKqoVoTfGNhwm",
  "key1": "adGgTn4kf3UuqgQhbobP56GoLf1TDQQyBitui7XPw2Bd2rLdR2sCF2sQqJY47T1zafAE2sVrsnnu7NhdfTg6jrn",
  "key2": "2phAtMriaVWC4czPAUiPXGmzF7gCBp3ynn8o7VnVEea4pqDsYks7n22GcEempa3cVyGcVbEcDgsxsgApff9tk7iv",
  "key3": "4tpLL4ZrnWJUSLsMRJN7g9cTHqHET8yBpRo6aFDTxxADtX1omQxhAeXK3QBTZoqmPDwdoTdQRvdoVnnuyLTQjFJo",
  "key4": "4wHBYhkoFBjWvPCsGqu81xSkyS679SF257RZXK73hAgojLbtFF6CikQGQBp6CPv1298m4JfsRoSS3fCeYfXgHitf",
  "key5": "5LkTiF8keksFd48HnSvRpXynhTf4snozdZ2njXzpUpNbDHHm2Bj5uc85KH9Tmbdyd9sLkmGGozjMG6AiPPdrbZwK",
  "key6": "3vM4MxvsRp8bXWxvWYbVh2Y1wFog4LVdpfnf3uPEKWY8q7KLMLzAeWmt4wwJVnq1KQVzcBdcd9QwUoQ7iS76Sg79",
  "key7": "W1rEqhDSdaEpmdcocqwBiQ3bXMdhJZWw8jEFA2sz1P3PM2Dx7o3xF4XKN1R7ius8ZxahcEUh11U5mWktoMmsVJD",
  "key8": "2R3P9pNikFnmB3u6nfzM8E6fzAsBQGuMSKWPWf6Hm1TGoehapFFjUooKm4X3J7FFSeQK8oL8BAThPLL2F8tpPks3",
  "key9": "4bUqWeBh3Cm6jdcunqL8Zj8dhgGLrtycuN5KY25oxA2Pwg7HaoDSK8Rkpz2uctn7QSvnex9XBpka7JA9VU5BhjPz",
  "key10": "4YGQihk7ncJEE3FF7HP7U4WBjeWGuPXsdYtiqZ21Cb7Qb9hbd4STig9z67cWy2Ej4zy9E4X6VNajfzqttGZv5Uje",
  "key11": "4yhSBFos1K37S8BKmBcZfDvrFmTkN2tVj219jYxWvGKbAFATbgyfKvfQJPWYGki3MWdbapAQniZVqmmF6RaFbGGb",
  "key12": "2S5LW4q9ToaUVXNZwiBFUooYGuEvo5ojKYzwEaxNdmqLrAN9iD6LCZZxzBZL174LtbuCao45aEJzQdcRHz1PdMRW",
  "key13": "4V6dS1zNVrjffMed3YuqqoQo87TXxeKWg4w6aW6wpBCYq2shymxkvynMQuPJP2Lcf1tkifbWztfPfcCJgXWahg9H",
  "key14": "53AyW5Qi7GHxw3TzAMxjaZYqM4ppEXv6SbTqqco79PRL1SK33a5C6Hn2ekSFBLe1oo42fkk6BPFZeProFC6ejc6q",
  "key15": "45dzv2tuGtzAFgicFnbtRaiFVwArJDR9pfz5hRpJpt5w4dFeHvULJrQydKudocu5BY6mSw1QhcmSYJP7LAx3aB98",
  "key16": "2nZ5MMyXBYBvJzPqdgDp6C4tr67ccSbRc4zm4M28TR3Y7FeetYDStjsv6usSKp9HN7R8JB81dXSwbjEKVK4QJt4h",
  "key17": "2vh6iW7aCZ1i3QBJnQNndWpXBFwC3oEeJkRdJby7CpxG35M136YzD76ynM2duuZaiV3kkDdh3z9X16U8nJxMgsAB",
  "key18": "34gZksAwvJVUTr5EdtJ3deMsxkoWXtgJvPMCMDyb7utrGyuEMX7aKpr4CypU58P4dVVXhr6SdJidh3UP2fc5pYXf",
  "key19": "4PRwbCX4BwGSTW8Y5eNQCzWYs6gTbpJy1q7tthRJ3Jvg3C92mbXh1qb5jePEmVV6gPGFg7ScpGZMHaBqb6btmF4q",
  "key20": "3mPaRXUBie2gS5tHpSj6qP35S475Ut5XC5tDWUGTPNhA3fusxPB6LmZXebfYkLa4qrVx4HwesixaLfh1zpfh8YX6",
  "key21": "2kewA5q2yTCk3PW6kJnDxSisrRH81f6SrATzhUEVpSkMfBSvyTsGw6hdVmWGeN8xKWB3g2eXs4DLErc5S6wAkXs",
  "key22": "4xiBsX6Xc9vF7W5c6fwNMnS25xY5597tThqRYgmjYSeKpq9vJqkDowQgodopJE8n7xYRs1iFzxP4asAiRe9w2CNX",
  "key23": "H5PfiQWPdyJ8yLVJRo3zfYnqcM1tdXGufTR27Pq8bH8hYY6Xw4sbsrCndVtph9GDctorS5giLruvAKoQhnFhRxm",
  "key24": "5RJo2PQ3djRAc7WDkiGGkLfDafTzcKGf76v4UhSrdmHQEwruhAWN7ByctNxZGGrg41B9m1RhLEAq75a9Tqevx6Zn",
  "key25": "5gEgtQFEy8nMcVVRYMTt3Vi5j9SGy7WxhMpKc5P525RaMfm5iUPZuFoJ2DHZbaz2p4s7FsonKoaBbCtudRX7BejE"
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
