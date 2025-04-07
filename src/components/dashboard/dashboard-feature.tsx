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
    "4Xo1FDXUt3bBpcDZi4QQWGCrCY5K92PfjF8RHRUmLJ1MrXeD1kAm5uMXEfKY5QDTHRJzkBuMNYYnEyRidy8p4RRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26etoUFWy9YKK5jciF6gT9Gq2VstyMPbqxMGiZrxEEqnem6oV6P1Jjp2v5jrQvRRxsktWvhTPhFZnAbmfexLfHkL",
  "key1": "jNh4a41TxQh3AWbEALeuobvxwgsnXgvS4J6z3fBKYKs6sifCDwLU7TfLWMTBpecevxBKLD3LhqTSssr8d6CZAKK",
  "key2": "XXz91YnBrGnmayPt6zz4AbHZwYksGu9rG5NYwzGLNagx7iXWVo1WVeDfphQppXcSoRfxD29nZM9XdbB2ifLtfK9",
  "key3": "zGwUbiKUTDqPrRNvAVJd9BjGLgLfXMQ8Za5sq7QKrKYfjgndpGZemLSCEZGeiRUh9iQA7qLqDsPyF7pLaBy1eBW",
  "key4": "5EsUFW9hjpbgL1d1tT3PDjtHduWCophCcVvp4jUUV9XWLqfeVSoh1BFc2PEZp3m6T2g3yxdstXiJ6V8RQCDfNAFE",
  "key5": "5TgLukdzo6aJNFKzRBm6K9rVuVNnQo6d95tVT1MnB6Ui661LruZipTqdZSSF7Sp84rZTBXTdQZ1qPdKD585cCS3p",
  "key6": "35fEdAZXg8oNWLnxAtQMo7vMTTcLK41voqqAKaeQh4VdyPNfAd8fj26f52a9weFbVCtBUtNssT852YyuSdoMz3Ze",
  "key7": "5R4EtPt4SWywPEYySCdP5Jz1LWynivkZ9iq31v2drNaVp85vDfbxQTeJSTSjZU8zKoegUi36LrWshBrKWrmuEGDj",
  "key8": "4eS8WRSousaj5s8hCPzB5RXr7bn52e1ENFYmmYohL3SqsRbjeM2fHzs2RbziYQqPsJYvS77bvjRUhKNkbYpSWy8V",
  "key9": "5G3XVADAjqcRSDEvNAGXvY617cQ8GR6HpbxgEq3JUTZfuimdHjp4LiL4m9eV9dBFG5gvH2Xe7SYspW9toRQCHF6S",
  "key10": "3qyBckuELPoi2RnqbjFtJjEkw8HNByzuA5ozdJVkFrkxddubDrGDkXBEzRFCBiThA3gaaQwfRpfUpggE9wLJW8DU",
  "key11": "4APWzACN1PkySLTQrYp2UtFgkMZeYtPMzKo1TjYugDFjp5WQhnGcSaGsKd6ogh7Cb1awjbY7PWStijMU56dYthrJ",
  "key12": "4HWEvaShd4SmTtGdBKraKZWFu726NFqTSYBQAWmvEShcTRVjhM32swdYdpNt6XKvzW2Fo5CA7Wy9pbh535CXACV3",
  "key13": "49ncu7m4sL28RJ6rLfFvQ8XEVq1EzkghLpU492KhocwtipkyzXFncVzGevKqamA9Sbde5nFrzQyQCR4RnvQTYCqY",
  "key14": "3cQEJZWEnFfPUdgmZuzjb55oybdqewZtzwcFoRVYgcmUQUAQhudVoXC9coAYxqY8hq7pTvvxuonJzLSsR3xNucb2",
  "key15": "55xHvpyajNot6ZrGwFEprHotv7EFLPHp6voAhnJ153zADJ8QsJF1pKf6X48JFN762ie1P7MXafFwfR3n3EhX75tx",
  "key16": "uGw5Hkmb5sRGDqiDkkaSmqczFNAtGBFjFpL12yDpwoRu9mpppNDhdjphuoUSRzKy8hEDnUGdZLYsgX3rR2bLzqY",
  "key17": "55nPS7ExhfWd6hZ9ySvaHL5n5JHdENUvDayj2LRSSYiBr37VUn4zjdNo4Pqhje7jX1LfkqWwnQqMFzGUsKjPnTrs",
  "key18": "3f18BADycFDz9B1wqCo8JimiwP86NFpUgwpC2bwCdNhFeHF4LhqQq37tg27MSQHJgny7ajLnqDPeTB8j9HjbVhLm",
  "key19": "4eucVfvWUcuhWY1BSWyhiqegp92JvZ6ASJ9XVw8vSrV9YRxeQzo4qg1W12cPeiw7sLMDEFGncagMnNHfCdgvoQhL",
  "key20": "5hVyF7h62w3ZHamJ5P6r9rBPn6gJXPkNhs7M2PVynoVdCf3jp1zrTpY9QJTjrmjLoB12sZ4jvzHCdqBns4gLTrHs",
  "key21": "4t7PxqnQcVZY913ZHspGsESvSQZimBJUL78mEPWfQfaFVw1PHj6rJQDcd3rCQEmDx34SdEGnefVRKCARZ2UzC273",
  "key22": "4b94h3vfTSWNSS2BkP35zBs8cx6zLNLvCTqRb4qmkpK29Vr16qjgnvp5SdWuP3zLtvtFuj8ZFWhY1e7StijuzQT2",
  "key23": "3gaWrEB275S3XybzXkGnBRh8fcNJ3izTgrdaX4zFmfnxiKgYEussttTSHqPgrd1dum1CYuS4o2qMvXdEXub2zqQ",
  "key24": "4kAHXbktvXZC3Qv8bdtYBAKgixQQ4m2fVETZ3f2EKym9hbaKbXgaKto5hF9Qhe62eHa6tboKZVaCNf2YEVDUENaP",
  "key25": "4p65XsvmSkrSeRTLyXKbD6CZANxgC9Wbj2U7ogBjR9mMikB2YqMvi24Pcmw2rVhabvEPh2Agoq5be7t7Pe6p97VK",
  "key26": "YzNvM8Ffxk1EbXGBREkPdnhpAZx4Tn9EVrohkHoHF6uzQVARPLSvQUNogpJa3H96Z1D6nw1GbkJtYJ1SYEowy64",
  "key27": "5zSb2WKZ1LMjfusKjs667waXd79yEe1qMaDna2GgpxR1bd4ybmWDq35fW6wKbdWDTC24Y7WZopiMJTWCJtoJ6HeS",
  "key28": "WXYEmUbYVi1SgxyoS5uDEt8rBM5h88JBNQ9C72pkG5NXh2ogz75Fd8fJ9Tr34jbQcBrM7hzgGzbN7GiSqxj2Lj8",
  "key29": "24U9wfnytg8iqEgg2dxdPZKTVKiTS32ydodTPNCRBbur345oEaGmV1t2gJYQvpycFSa2Ei7vzsrPPAuEX6Uj8D2C",
  "key30": "PykvzWTknzpeW8tagiuBei7jVk6YawotKQ5NehvQBswQ5Kb3pdvBb7QkZi2wftuo7kVSgok4gq7y1oTWJi7yGLq",
  "key31": "457KWqYGTcqMQp1z7NLsgXGFb4z13JCpb12ULtrjNKrpqjHK2gASTeYikfJZN5LRcLDUSj2RzTuyqLvDCiwoipdx",
  "key32": "vyo9aas3XFCTFSvoQdMyRGcmSVKErmgVPGwq2ycuhkYGKrdhuXY3WjdsCJSpJ1WSrwAaRz76UnNdbw718ov6fU6",
  "key33": "KBXUa9AtHZLqKo5XjmmwNzHDJN5HE7Y9N8u3k6yLzHPbhTg64v8w6V7N837gQWLXeZ7rptFA5W3C2svwtkTn1tD",
  "key34": "4Yxy9vAdAmZdy1RTjw4cfTa3NSJHmujxm3Yedt8a8646a9FGhQ42GUbib2WJD4qZdv3D34RXmC2GGyQ6Nx24e3GJ",
  "key35": "4sVb2xYhUbSWuDss9xGdr9FhHKR4EE9nfrGsDayzU77GBJX4ASiqw66Y24mA7qfYsuuPVfenpHnuQFpw8JFdri19",
  "key36": "4df6etmXsTBPbMycMjD9U7tQXHYtk2MJPjytLP3bP8Y9Nm6aw45xsKQyBjw9yMjximdvaBZF9pjBQixVNJVwfnvq",
  "key37": "4HGeriWnTTmqXZBdFGtcoBdW2sVcoAMsuEqzRPjs9QkTeKywBs3rV3HJBwb5QJvzYZ8iXwiXCBgdrqTtRCnJBvz4",
  "key38": "3YVsRfM19w7XnL2yDmU6B3r6F1JiQo3Z7PfaejMhDQPnXnMa75adjgowCKdVgL2MhtepaJeqBdXXZX7T573KVb28",
  "key39": "YowW4WVbxVaSAfXfL53CaV32cpbCyKqZPTDkN5tA66zBfcvE5YvRmnb95k5jQpgLSvyiRCNZNX4ofFnnxXSwrvM",
  "key40": "ZwtkupG8DaoGWzDax5BWCJ67hQNMJ4RC7kRZG4KyFiigVzB7dTY9T6NNQVKbC5JbvkVyQMu5M1G4tgxhyBhVikc",
  "key41": "58hyW33gcn8Vt9SB4aEXAm2TS2GQp4wPrNYV2tFPksXjzqyZvwSrAHUbstKXo4WH7a3aSgBmufWNv2786RNBXQRC",
  "key42": "2Dz2rEZdaB4ukRZK5qRpL5aH6bmz8pMQR6YRbTUjxkUGP8xNGQFh8A8TaD9hKLVco4qZHYnRq3pGjYdktGnpdc2g",
  "key43": "4MzBdXeQYQcUyAdeT3Jyp5WFWVfoXgirCACAFXUEkwQHSy6Ut1bZR7qBDjSXkPRRtYU1TGbaMnktA1etTqoKgXcM",
  "key44": "2AHSCkJopLbsySwaPR7Hz4q3QG857gy4H6nkyaRbkakUKPTZ6PzMmaWZmqeaZ4jvr1uSApAsxX4p8BtMCguXKuzX",
  "key45": "3TUNKCT4B988o2DJvX1MUwdZBku89N1sknutqjjaNw1ftUB3cBuRRRuWNNiruh1RAiXCc19Hm7GNwR35PTZ2hsXh",
  "key46": "5Ga3SujHvzFjRxpz3DpaU1QjrufLj8aKgtYJ87gb3X9FatSNaCYXiwrqbMxAu44qv6jNWAREAtJaZoiAg618o7Q9",
  "key47": "4JBj325BLTN5aUA8e71Q2cZv4JPcBh6TiqXvRA35pNr3zeHGhGBLAfCakZbHnPWC4EkeEoeBA9n3VFnxECb9pfRH",
  "key48": "4Dh6A9zCrAtDXjwua4CELceCPm35SdmhUCS1zXezoHm2RHsQ1DmRVCs4LJ3m5v7SgPraYiDtf3EtvVB14YRY3PnY"
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
