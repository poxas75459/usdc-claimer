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
    "E5XRJeqXRNqppXdomhxmqD4Fm9iY378yTYxoDSjYt62BmcJMqW3feo1M4sUYrb3nQX3UKSt1F6V9834555UzdA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZ5NCMpi1vQ6VGqY82jfQz9yhffwQAN7DywUcYR5ujMJdeMwqYKaBYxZzSbuxCTH19BPucLahjxPpcgUxP6HyMB",
  "key1": "3gXvaCSNDxZrtErHS71khPJ8RDnxkjJJsxNvrVrvsoPUo5uh6bVhsMjjkBuSxLbopTpFqMYoimuRHCB5vGqqBCED",
  "key2": "2vMoCendJMQY4acajvgYM6Qt33CC5zzYWRQBu3wWop6mCPLUYu5cnGZGnFMtyRZgnZPm3jX4VZ3XEFL1NcaYHKft",
  "key3": "4jRhozigeRV63MYoUC9qATsbYPurebrUu1WqdC58hWKtYjfSce2b3JYzUygiuvDv51uJvopoMSPe9zbL5PhUxLtT",
  "key4": "m935FiT5CWPXVW4TEZe8gb1LjRwTp1DjjjfQNUt9YE9Kqc7eeTARpDPuAstEi8gKUFhWEogmgYzrXvh25v1t96q",
  "key5": "5HD77jSAzmabqsdkS9uhvxoeGYGfu2TTXrJzXshWTUGi5GBCEouwW4cLLxm8qbgoSZFgzAUZE4artmz5aVHnmFtF",
  "key6": "5ERmpy3gtezjszuC1478cbibrguzErQ6kJbAoCnNTCPbK7ME2aJCUbwFfc9gpSC2tPueQJ6KLFFmTYSU4vaKh4bq",
  "key7": "5kwfj4vdpq8hXmEzwc9x3XK6TyNGaMqV4WvxTEuH26e2RtqjnjE4kyHdfWqqSTWBBk8aVCpyx2yxy3MXLi1yjDKH",
  "key8": "3o3Pkh2dAcjPxSB6H6ekczxL12rBtsZcrwgPZoV4sJzkYP4S2tAXEoD5cNCXzghzdcMEoutbxmuqfuuo1QyKCTH8",
  "key9": "5D8otyv5okwUH6BxVevnWCS9LSNwkxtwF8wCm6yTcDXu9r8qviLKhsWrUCTM9dZhd4FGc976K3YDGHVMu2ttKwHc",
  "key10": "4ZXSc8VLUobxFztVnb8kXTcKYPExGRB6AVRrE9c2kvefKpB81shhU6UA4Mtv8BN5sFbhG9aRqc7qCCEPtGDqwsRT",
  "key11": "3ohEEkk7gr1PWRsmcHAigzuroMxFSGBEeA3uttjBWwaoKNvakfP1Tn2e7gcJ1mqNziZ3Pqu5qNUReM5njHbcFtwo",
  "key12": "3uAAKTghZzcci1cUNbmeBtWiKk1ygzbTNi9oSiex7c2fpLEviLexyVQqyM5XDcodaCEgE6bkXMoj6ZTAe6Va7JE1",
  "key13": "3NfatWRugbnvA5sxS7d2fuytrTsmjVovAv4CFBGkpMMnsF58e3FTX1vJKwneXdmVJv6te5xdA6hy2HJdW4CZSjzK",
  "key14": "34ftpLWVz2XhLCqWfUZ5FK3oR3uLyusf4dXt3cxR6Q7NXpeFVNKAACBkRGF9uX2AVzCNjb5TR3skoY9BhWH8jTc",
  "key15": "64gzT1t7LGQzxp53DTbWXtA4wLJFVNfMeaWpn9Tbtg5Ryz3yHc9TDYPB1jFEoyQRSDM7Q9GEauzMEYRtsLpafD5y",
  "key16": "5esHpjtrgzK7Jm1zu1hiAU5Zq25mDnVEeAcggdjLur2hcv5qjuT91Y8zXvkqWHoaFDcM3dbxXAF7Rrr5B9vwUzrY",
  "key17": "4KcSQmy4TBTSvJY94SeopBF1v72eC6MZYxNBqzV34Y7mCFVv75EC6MzmpsPTgGZ237pewMNQQAcRdphqDjGkAPcf",
  "key18": "2ZdAFiPv767Des18gvRmsfny1SNAV3Q6GGsQXaT1R88aMWqMsDR3MdBKUcKvSjpwh5XU4wrPK8XQXwB9xexVbVSW",
  "key19": "3vifEzmYUd641ivS4ix2U3StmjA2NBdU72VHTUyzYVchYw4B6WdkSktxXRhApzrHmTps83DPJTqe2rrvcogVy4WD",
  "key20": "65nQR9QSz7cvq5jWrsS4BsCzTQq8Yg3MhahnmHeqFE323Eypr5Gt9qmRuEA98bANmM2WAQBDGBWrQoCraXdHEdCA",
  "key21": "3BcLrbzdoGzxeJkyaJikYhVRBabRd9XaszaWPxRM3UBFGG1e36s7qHgYDuJU9n6JYFowiajdCSkosbj31krTGZ9p",
  "key22": "3SjkY9czGrECqEtDZQ5TnxnnAGTmR4A4rTZCwJM5aMZtsQy1P5NPPt57dPZxJ59tkDS2vxRpejeg4vMKLovB2HfX",
  "key23": "2wYfUEXSf93f97zAUakgdjdki7MKWHegEce79H5BtFGdRh1T3NZh3T6Q6QU32aLKoYWFEhVVTGyCom1z3ZZpVtTr",
  "key24": "UqhheGVKZnwiFsbBka7YzcNcmAoqEwcJgoz3Z8So3rhhSsxSUSJmSGRZLohhc3vvYBxUc6XiPTzjRK74XzPEKBG",
  "key25": "C1K7omoH2sM4LdGHpdbe1Wcnp3mcG7Wm48X336MCXHTWpGbiTWweKk4Zw4gnF7xkmAWFPUXLqNvgewfHiCHC1fi",
  "key26": "5RAqog9BNK68aHHrgAXLiN9YjC6pXfYV6fXGMoxDw2KneCjixVLPxEpFbd9oNKTnHktFtm9LnTWJwqWpnB9Uc5po",
  "key27": "4vVUhUvFKTLSF2Q2z39iB4mRWUAGZSug3sfbys78mMv558KBVaxvyUvEiAW4UUAfCEctXvzQih3ofr4HTqSW3mAA",
  "key28": "25JADyiK3wqvBT5G9Ex9WhajSuztDCqTYmcRB3L7Yw6gwkuuiAzVuZQNaVCm68MVmPkF656efWXHC97TFKQLP3SG",
  "key29": "2bqtudPhmY2rdXgfhyBAxRG7hGMYtpwjormpjTyL6g4cyQzp1dSje4zDVFjkms57qisjVeRiUZWkYesMK2hmVKnA",
  "key30": "41Y45e75H6u6zCNevZ9rbsEcHPCDwmutrVcucT48exspT6SmMs4koVyLRV4C9keQ4jmfAP4JnF5aia4BrpF7tBHo",
  "key31": "5wj79WBovgkZdobKvxEec9yYKkVJFiYd8hgPrgjbtqk7J2KhfkFcWQ2zbuWz6QjUNCK84xeqL1DxUjT2rAxJTnvc",
  "key32": "4ZyB73R4uDSK9gfkysSKExfaW6fxMX5VGkAeX3BFAyc2pTHXvexsnN5chcV87fPBtykVwmbKoYJ2197JL6SBxaDB",
  "key33": "3irkNW3AgeShkE83WyTRYJoztDvUhh9McFucTWG3tLPGhwc8mAqyvo2unUSke96iMTVyXASLFqdHZLVgPC5sMYJx",
  "key34": "469mUdazStDLUyZCxCRVVnBp3aPtdBVobXayuSDYZ98MYLULiSZEenEEBof75p3qfnZkBT47YoMsPUS5Di5RTi7w",
  "key35": "jaHNq4ykSDU9g8EXghMaQNyPCHGeJRPHzjQtuCg9ePkaw82H1fsNyTEdc37f5iWhjsVD1NkQoma55tWqvWVbrLF",
  "key36": "5M5cXjCFWP9N2NwLjKvBCC1QbHzAAoUm3CN6i9GyKYY7jNnXugXum5fwbMb5BFUxh7MSkLwDd9kWwc5rzaRxHBy2",
  "key37": "CzgAy7e2Z8Un5yWP3cTnRwQA1G4FaFJXQGgfSM7iY759ZJhJpR5bfC9itP7MyVm6NVVgEhkztUgSYA7cL9KkMGu",
  "key38": "32n3ghM2HsmPgtDQYQQ5PG2Bx16riTWCUC1QR7AkXMFCUfudbsZc4rfEE9wkd56PEaAuizWpohSrrE6186jPDkWf",
  "key39": "2b8StPQhySmwGGWcDkYyuWCrMXAe2V51Tfcv3WFSFxQnyzSVsMKwJoSTU3fyu2V3ffBcdDkT6hybtYeTSLf835eM",
  "key40": "3mXDSmwdtCbE2mgB3uo36VSZqhk5RwpwLAWzKXNLDvcQPm7kW8f4Txd87CeWQuuuwofGZLXXAW7SUK9Tw5KkbAyf",
  "key41": "9poMZzZBDqaqXNLEU9aQ1gzKgCPbDRvqwrWNMPxYrA9Bs7WCkJ8ZdtZarShLsMCpTWasPU324WehJniX9HZxMaA",
  "key42": "4BSRr4gbE1NueG37gwYzg4nzztAmGkRSbdGmBLQr55hAqMLeYLKbDdkzKeVnhpiesyqJ4oRJN9QbjjyCMwcixtEJ",
  "key43": "G4Vq5aCtEPZDxGTvorTrD8dAcRMET4xivMQfhgrDm8kDXbvHLrSaqqkgXaDjv9CYBuxCEttSW89QEpc6sHZDhbt",
  "key44": "3ju3AosDTk387nHKR8dgFReqYkubAqWU456TPFxhqPU3jCMVknmABFRsmZpANivLj77DDwd4KN2p9ZUtthqv96Do",
  "key45": "396XRRPqUmyaV7o5yHEPG5bKApBWS9vKBxvf119QzhAavCttMqUjc1u5FonwqdbJKyvygZCLvmjgzsMKPU3r9QNz",
  "key46": "35cCCBQ5JGdk6kmQBx2ChLtxSRGYcLmC5AvHbCcSd9hTtXWVJLvkoMYUBm8xpyq1gkvBkiXqJEvY1RN1KAu2taw3"
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
