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
    "3R1hgd9AZgJGkSrbtFixdMrSnRS6G9bN5raz8dz7SqVhws1w2zxZPrhnVgMMeNCgqkSMg4J2EGAin8NkLqtg7QUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oATKdLu1vBJHheZfgRZmdrJY1yFbyFPyUsVhVSaRunVNdnEHEoLAk2J6iD3tsZAXudK2mKTS2NZrE14CQxefUz1",
  "key1": "4bo36GYpohzdggjr9trV9WLqnR3UKK2ziCihFXqo9mPx3ETcQdFGXqr8mD1tnFaRuqEjmuhmSdgmitLWQAr2wnY",
  "key2": "4ykSyaVDVT3xRfbgXJ6d7hJqePocZXNhEiQzxfKD6oWwRzrXyV1eRNcD3CEoEURocnxK2LLUTvGUyNB9wujdDC7P",
  "key3": "2E2hxQkeYXxT7ix4k22wNm3Y6ij4TziAPmtFyPsjyjExr8Z5moxAjtkcfD1QxVuaiKTc1UeYEsbBHfYYN7iLhXjr",
  "key4": "4j16J8YFEZftawMkJWmLzjMqkBXwS1naB1skQePDe9B8RWyEvdtaiKMTRd41AoAMBAEQHTVgVjRhDtaJZ4845SAf",
  "key5": "2pRZyFmiSXU6ZEorVKrvGVqotuUhH7ZnApZXRxmPhvgBmhp5ibpCLzJ7vSwFMrJVY8TtfKz6hHgKZadhUJvpWu9o",
  "key6": "36soPiYLRkwR5HabgzfAYFUeV2KT7RAv7xbCg3pxVesC4sw8CKxVzSUBpSs2Zo2yfhCgwDxyr83tNFn1dn9BDvfZ",
  "key7": "4XGakEaQiTraX7WEB1JpACCieautfa6r24FyBxacHv2ZDRwvuS16b2sfJZi8eencwmbz9BhN1aCFdvK3ChB47SKs",
  "key8": "2EmhLpmaGKZNJve2MFTD31X7kWmtbnrXj8jQx25qEtUjyEwYrXFJarqPxSrwY6bpQu5f2SGErX4LjaU5fdJjrZqA",
  "key9": "5x2Dwnoyp4cHvHPt5dyd3VgEnyWDcj1p4kHMxxZ6B8Wtau7x1BSrTm9AfD6yuURDsgLyjhDHVCYc3pXfqMcW34L5",
  "key10": "RtY1X2qLeKCkHvt551MsGSo3sdSJopbvfvSXD1m4E32rSHv3kxQYH8T5azGDgrMYcptmHigzKqvgeu4DajumbH4",
  "key11": "2CfA6EDNqkeqXeR98Jph2VnjYfDiHfTCkvDUdfwGXEC3VcnsjxxDpsrhfgGLorx6Xf77wqMit5VewfH6HD5nqTc9",
  "key12": "61QqA3MGsBSEkCqGXDE6kGaiL3kAWcnaMCL9x7Ty5GjwXcg8MtRToMEXUfPqPtTm8M1m4rUEtBk7gtfzaS7MFchx",
  "key13": "4nqK53f7WToH9uZT32ZDH5vy5pYVjJohGDKL3g58yXjbN4vDoH4d2Vob4JtuR4pDqjFW2qAANeW7xJY6pGfyk6mq",
  "key14": "GSnA8owosUok8rCe4PUeS3bmXBMHE4utg8AmjmAvgw7HHgzzUuBdbzajvo7KrzAAUgBy9rke7BvScfR5wcPkdwS",
  "key15": "3NXHU8c2t1PVgCNAhQbDzpAacREfCvSHjemvnuj7Tz5Zyvxwv7oPHX8aMzag2zthAheBbuScqLwxoRWUznDGtP2n",
  "key16": "37ySvFihFbje9BDUffm9K7ah7ZBABtG4KTkQSJgNzmyDk4Cd3abYyCdsCtHoF2eB7U12GbCwJqGBvTEHtofkkk5u",
  "key17": "56uhCjvxMYLYTYFm8XbJsabBZ2h5gSstVjSr2PvnKGWDu7aPtCkqf4dSCXf8WpMLHYAEBSN94ALjaeZXqdfLc5si",
  "key18": "5Qx4GpvXgbnAJvxZ2KFnHKhXXCepxsr6LUtmMQQpELr5E4PQpqvEMhneGvQifhoJ6rc7WUiWjXtUui7nS8MiTxSN",
  "key19": "4BE45txHbi5pQbbJnFFgbEdxuyeWiuvL9PMwgb4EDuKbn8Gk4jmoUGUgas7aiGtyj1Ypnp8nDTL8sgfX2XKRftbC",
  "key20": "4agYbyfpR77aba2RpHw3RkRr6qvTDcnkrM6H4PWCGMeGaiJE3pEv4eLUwBqhTee3dV3uTsh1aqK7fCMNLaGXcWGk",
  "key21": "5QXD2PVMSNoTNatB5mVHp37aSa9P6XankJt8k6D2r12ETgCFG9T8BLJKvDvQNEpUBBkoDWWw6pbAP5XZxZ4axscJ",
  "key22": "2swCAdRsASwVRmmAM4b7v5avi6HNFgxtx3RwdUuK3cziJ36XrEZc8EU86YVjpTaZQKErNG3JXkoLpdgJcRYWosv6",
  "key23": "4sovPaDrhw9E1RNghhhJ6X7NL2KVtf5isZhhb9ZKRU8R2DckXtKLiQCwwuH5cyMzJoFj9QyTnyCutmeWwXk6n2XY",
  "key24": "4Ugkmi8dmzRuKi28PEPKCT35rQ95xuJAhLNg1NVqrKAoNEE5vHdFRgsioRJPBowEctTLRBwV75woTd96aoud8JM2",
  "key25": "2qjyxtp9jWyexuvSfmCjSQr23UFGDTF8LH3Pp9xoqsR3QbKN3vFCNP3LwACXerBQGHRzAtoGRf19WiHsTXfVwRQx",
  "key26": "66frpC2DBYMp1pPxmaWGgCKUWKYEsB1Bqh5qw1abWyU1AjgeuhtV3wSBUPJWAGPVs9ivxw5kQFD6awNDBdan7gcc",
  "key27": "5oLE4x4rMqtS5EtEYwBxzNFeeqLdPPHxvKgi4HcYNa1Ei697aDybM44YAsu5RYmVQBw4PzQXZZsVGTtyxsLpDPJK",
  "key28": "4Ax4QpGW94Bc18MNoH4Sg9KSSqsGWpPv3EiDZHneAdDy3V7x7KK9GQUrNsEPydzoN1JKq7nBFJpKvSWc6x2cSsVJ",
  "key29": "5tx49Z4n4qCAHPkzSRKxTkfdMLTRsa8Au7vW1RhVG1oWNQNJduWuBN7rCYZLZEuBj5dtwxmzxvH5DwdyFWpS7Kb4",
  "key30": "5eTsitsk4oVTuXkQLuVKeRFrwj7BLZVxr9aKP22SZoZiHf5eE9MXs3MtJnKEHpwtQM9bAh1FJ3oycMiakQ7JFFBQ",
  "key31": "3t89S2ySnC48BjxuBmNj3yTdyCwAAYpnPzztxPk5AfmZmfbAhUrj3i13pBgfjiFq3XK1UB8q3iWnoFiFufqJjNh3",
  "key32": "3BNKjshDGKuBbfyzA7B2R2FKGjFnPtRncpA4nAyjQyVTHjqiTxrUGW6arcdQRa5SR8qtAbyJ9xct4RcArjtfujdr",
  "key33": "27ikWqqucZX7rSCZWFMeihNiawRsdD3EpawCdeLnTA1e7Rcda3ghkyEwtVtmYyuJuRN8fE8E4WMgxZdxJP4N6C7i",
  "key34": "2u6pbziVqRsahxVWerCJoPou5Drj4KutaYN3QZrdeVZSwvDs8LYXnx5dofrsXXjwpzb5vK3Jkdi5odGB6fRHWbUT",
  "key35": "2e8HUxcPihVseHRHgQ8APhgSUaEXLKghEGw6u4ymwtifT6uw5zbgBo6yBxiwRK7pjgQQJG6G1YsiCj1f9MfjH1DL",
  "key36": "3upUmg24SYqAvj1DyrDwxjPtNfwxrmD4HGA2NppaxKr2awe523wM1SxETq618BJkzRNSCkmtH9LZMDeEBAC7Qz4e",
  "key37": "2nAhQXoGaV9gVYuLsuc6YsAGmeEyXF4unG4JycPAw1tCNcxqpAURDipKaajMDorekGQTEJyhaLLcQ4PiZ1d5Kk4n",
  "key38": "31hsUZpmftLdbCRmEskbWNq3rqFEppttGHXybMRZAVQLH44FJ4g3JhuBDcbMEBufo9ehbMCmjffUmaDX3vrtEvC",
  "key39": "5Kz6UKWuz6vWAty69S9DcRpfx2KYU2HXhyJyx7BHBqXc7nJx9veezdRXe7Uf16FdXQueFzmty9AqQzhLdAEWepPG",
  "key40": "5E4QxbwTnV4CaGLxistSgYCYXZZ4GsgquBkGvxKByMzuj11A6pNLswXjWebdQ5Dw4nH4RHPCreMmMoYSk8LMtpKQ",
  "key41": "2ndSy3VHvHWSc6ubyie6w7JMcU5eNM3XV4F6S4BpckTWTANLpfWDMkTDnLLE8P5XTDv4Mp5zssF5wuv1ABdkARSe",
  "key42": "dnQoSyZg6sDUzzAcA3tAx6e11aBhHRciMZLE8jFmag8vcpBZHR6YR5A5jLYssNERZVuZRvA7PpJifJZnMw5T6n2",
  "key43": "4JGZBVQr5BNpVuvKuYrjU1DxwNaEiaTRuvvDobRG53kbtqg9QeD69JUNoD73sbkbXThdtpAgYn5ageD6xQLXUcvd",
  "key44": "32WPNPZJRm5Kar3gPdx2yQtmR5SQF9g7yiTwagUSieqaoGGzdYTi2qUz7aeN2NH2CF599nTRERfM9h8JqVV2etha"
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
