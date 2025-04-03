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
    "3sa19EStmsGxsWHSk5TS8BEpKmsYBSEpMzijXQeBFAqGM4yNGspNKvpsWBrBS6fw5RYEBAjpAE7EteN6wv8pz5Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCueA3XCDUS6qs9dCR483WuWNgMsBPmGGBvLb7D5tVC1VfbaYt5vdzgUQJRNX4nMcSHBT4tmk835GXf1xceTwUb",
  "key1": "5dV6SQ3C4jBNF4XBALD1nWVL7WiTpxXkCdjMvWjCc2m3HL3RUt14UpJWDA1fGbHtKvGQR5evSAbbzRGr25NqeLRu",
  "key2": "TqW4SdrMP15y2ovXzHWckAZBBrwCYjZ2MNow9eyW74Zn4LpVQEGkUCJqVZGf2wQzFgkEmQ4otipdff13YhA9Ss8",
  "key3": "3czy4XBRLGMSMV6hQrH3GP3FagihQDLWqVmMqBL22D7QvwjNFVx1MxRAX8ye5L8VW6troiUK3TXStWHWTjevXP3Z",
  "key4": "3fp7dTzWCjJktZwA98TiWV8a7nFHwaVXJEwkRnW5Wq1hFeJT2kv2qhZ9X1QM8DCvFGazCte4WNrmAJQtogjMzhWT",
  "key5": "3XUBi63mtYCDrGeZFNxERsj4ypEBtzrWtdFomBqa5bJM8sUKb6ayna9DfFsLUAykNbWaztzAoTqqj44juJd4G8BH",
  "key6": "2D76XBr2NkPtAqMVF8DFYeybWFm1cm6eshyxyveD6ufWtJVqdcr2RdupXb9HyvvbpFNzGrJSuFVueMZHwDYg3mt9",
  "key7": "PXxT2TiWM2oW2aAE5CSz3YASdCN4h7aBSSYfvE1APrFazVfcc5pCh4AvkuaJY6Rh1okJgz9HPMLSUCbjsj4iCTW",
  "key8": "65DJ7XaeVbFpejebeFrSbRy4H77hfeKxEvPhjYhy2fgZ33kbSSn3L9S2KeUzxSSq3xfHFVaWUrq3ucuUNq9DsyRG",
  "key9": "jRWAxpdyixCtJn64xEftAFyPRALoob5x3nNroJ2HWbjiNxufYtr8pzjXXsk5bEDpazqrTgti36dBrACNSwFazNB",
  "key10": "sWvR9ApZ2bfMTdqXhJdCGqZ3J6C4279MwfqJMM29TY5HsCbB5PdijmGzFi4dKjyHhp45CD8y48fgpMNRaE3WAmJ",
  "key11": "3A8VGgpxRzM67TzN6XgnZ7TJVQVxzaWcxr1czpZZ8PTAcjxiJk5xMZcbYrQkf7AXu3i2Ke1vkMHRExSnKDDFPmKK",
  "key12": "5VS4ZizFQHFV11Xw2V7qa5XLbAgmhro3UUqQhw27pxbt9BZYsgdmsZxeczaT4hbQDXstY6k67zteRMhaKeBkAsxC",
  "key13": "oGwVd7pcnPM8JH152STyHpexovig95vHoqo4LCGWhdP6rF63AeFvPW5Cu8C3f6qmk9ZRSCrPV3PPs1jgq718p4y",
  "key14": "4o8bqGkhNnCev4VWkLi4fM9UMN1gVLqNsd9sK5WQrKgutd1Y7YmZ2AfCHL52BxpdQBdZMQvt74sHzbSSTKPzc6DJ",
  "key15": "3qApCFXioHZfmfT8tJ758x9XHErENbB49M5o8L3JWj3KtzQ2RxVrTmRHQA2sK1MPcn7P3RPu7PaA7RVwHz298ks5",
  "key16": "2JEGstZgDUNxUQSKs6DNawS4mvwqnCMi5BEzDQCnPsD8NXM3GKsz6xpZg9LDuc7YWC1zpdY371zSN5XbM2wbhmgo",
  "key17": "2XfCYtv9nM8fiUn5P11fBWGyegwecEjCY2EbhNwiC5wXYiG2hJ3n71Txp3bKBb45wpfEcCSTw71oTkDbd9RY2MkW",
  "key18": "3fGKEaTELnpJjvBjSTSCLyniv2F3x7VkCsxrKWNSBqisE6zW1FrD1UFh76R4H5TA3V83XHB5ByT7LuvKTNN5XmKK",
  "key19": "2i8CZ42VjAGx2m7EFMJVgtW8N6YBQkYGNMgKCFDczvs1Vq5teh2kYfhxgrd382PSHmzWjuJMkgWU8HztooCQdkLp",
  "key20": "4K4LT5b7ePyuG1C8b5BYomzZiYfPKHUVEHWj5sqmjNV8ionFygd9n5jS2uz1dEbS72yjEcGZXJdpsvKognBxgbp2",
  "key21": "Mjktr8A74RUKiSuYKpy9aT8FsFyDQWrLudm7BKeMF8esbsDWNBTKqzeZkpCcTCzDPWGtcLssH1jGsKdp2MKMfvx",
  "key22": "6612t7JGgP3AiSECXgMpnVrofYcRhx9KHyEGoE8YeWFhjQPceNhzTMPiYsf8dKg4cpD3YkkCSyBcH4eptrH1wyND",
  "key23": "peH46TeDQ9dBr2vw7ashwK76us4afpb3CnaJq5fsoZzCv2LoMcxokHuqdcKNQzfx3xQNeaEPcgcwwKnyoWpgtqE",
  "key24": "3D9ki79X2UB22VZLcjVxByec5xXMrncXXREJHLFxvGbMwf96J8QXPxLF7ZT8YA5FHcbPXdQhCBZPN1bVhdthjdq8",
  "key25": "2nc6VrP2u9Ma53XukxcfG762gz3YME8PF77tBnzCuzrrAJUn3q3gRULShdPnUKZiNnKJfkzhr6aB6pzz4AjfBagb",
  "key26": "4pEwyn1u3NDJ3m9GPeD96bH79DL1Vu4w3Th9X79RU2gmefimN6n6oA7bxV3x9wSepje3K3zvZgTxvgbqdEuvoEgw",
  "key27": "5ctsXDVwzGuwqV4poPh2ftnMuLc9Qkz1ptFcT1cFtR6HzaYrgwGrqPFWyz3VizjhPTHnhp28VKDxAYfpxPcBYA8q",
  "key28": "4aVniBr1nJHNDezshF5Yzoa2B5DYcb5SKVeDZqLwZVwWSu8ajYgphW62X8cV5PD444Tsxaev35BidviJb64hwgPu",
  "key29": "212RrkQd3P84rwshwdE8mvdbCYJEdcU8u5J5dTeMkc5YhF67CGjHJSpdS7YUfEWrer5WVqFMsS7E8FQwNo3e9ZyS",
  "key30": "4dwkVRdC5HkSo9nEBghH2DseH6reU2ZEPptBXrWfY4sEQtpGarcGaBRPRFgfKfNdjaDkfThzJpKCgGpxJ8Bsb4Ta",
  "key31": "5bgX971ydsYNRDGJkjpiYq7xqYnufMget9EFwVrZuui121tgcbUX9Cr5RojNnAjHKCt9RsheZt95NFETJx4n6yf8",
  "key32": "jhgz7CCTcTGTvUQpzYkjZq2ojSTozpQKuaBx2GC3cbyLQUm3rWrc6Co4RwLVDf77ixt5bNqq8CeoBEo1koHbrqY",
  "key33": "Dzw8SB9CV5oRJmZS3ywVWnytBUo8vGcWUcsrziT77H86nZSQa7LVxE2MtxqDH5L1rJyggwGfMgStUenHSS8XASU",
  "key34": "4sDbxn7BsDAStzvzaX5Aw8cmHGu97KTCzJVyFFQ36WjRv9LQY3Kihh4zBAoZZrNm8qb4ZFYgERfnnXvy4Anv2K3y",
  "key35": "XBGPiCPQ8y3Vcha5JyQEozB5nd1M6t4cid2pkBmN7BNYxV4A1ZWeSKRrFWBXvo6ij1jQMT5K78UgPQacUUxQeVK",
  "key36": "2MzJyarHLsW1bRiUbGHib4FMB3KBzdpdUsmFgrM94n35jEUNSMFGfAgk2AKnRvJhQd1KY7s4vLamdHVnrgkogqfw",
  "key37": "4FMEhQChMXBbsh8QnytGkcZmsx9TsF8QtQ1EZDQt58Gyy9K9U8QAg5YPUkWrerRZhstXbtTzMfuzCCccdjLQsQUN",
  "key38": "41mEmjpJyNV5fB85fsQghYGY1WyhUST7YWrBDqf5s8GzQ7Z4Pgfpn6J2qMNKjTNquQUdsSY1okUo8rYtBBAim5HS",
  "key39": "3TdE7V8Pge392eKM1xpy8mVj2fXQ6qkpF7UmudswJ39ouWWa46b9DqD7FJZCmbNcvDoCBvebPR1HUJKSukcGuxjv",
  "key40": "592dcifj1rXd76Rdcx3VvW6bH6yJeiSf8UXkFf6WPNUQUNMyXqs4hT68QTHnQ3t5F447KF86X85UgkyuzinDRZo4",
  "key41": "3UA48v4qK29MhYvscipheG8hKZ8rw2PUYPfAcQKybggwkztnGYQYM8ENPV5UzkckUbKwy2QFKdXStEULmYwSeLeA",
  "key42": "2Wr9uwoftLZpEnfUam7skugR74gw2VSzhonkrQke5tvA8Vio3iN6uH7GWRyRgoWY4JU4ce4Gj7kYBih7isAAnGsJ",
  "key43": "3qg2jQm5MzZ2Aspwb2pDzHYMKaQtNrSW9rwZfmQwxAFHnVka5L3Xnj9ajQgRFe9B666eX5YQhN5h9G4x2Ra6FaAM",
  "key44": "4YjfnWjZAwXaq5hxtuYiLMscdzvxgjNQ67vvracg27Asi1aJ8BBB1f2ikdxBa18EhBoTjzGBTCECkWzy2kajyPmd",
  "key45": "4NaLNcQ81jEe5Y27U3gwQhcTHqKsGjCvxxP7t4utnWhXU5w9B8tmWsMK7o4EcKzs4A6WCzJVHr7EgAK9NprGyhe9",
  "key46": "3BAdbPazwtMzQaUj1nDMdoqKw9Tz8Bwy4q2TRM2AA4UukyZV69mrNQ5XbCgKNZKtRuMUPR3Gg4Q62bV6JgEBRRMT"
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
