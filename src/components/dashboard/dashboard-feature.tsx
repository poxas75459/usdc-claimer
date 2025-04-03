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
    "5uqQ1N1KMsker5NXBdZJrw87MYNVLris341QzXct5Jm88USH5paby3Bg6GPgbTatrEPxbmNjor1ibrCyzeczuhXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3sXTytExmr2bMnYunhwCxG1cKWpSR2V2SYJhdLHJtjtBsA1JRdQymRT9nYxUprpK8eWFJJS1CoKDPLkUh8Vr2j",
  "key1": "3ayZMncSqp8XUziXwbrL5WozhuhVx5XQ7X6drTs12RY3Uo9cApqV3aCfrdtf6THkcfoCeXNHWcF3idh6kWNZiXmf",
  "key2": "2R8GrUDPSRPG3LJ3AsXySxokaYrfttVqQkSBPV6MiKoLG5GzA56DuwyWtKmDXbmoRT8F17efM2CAy5LgH2X5K6GH",
  "key3": "j7CFp9adJqaS5VY76J66aju6UYi2AJ5eWqoRsR1mm2hdvup5M3k9y7ybGtmtWshGMM2Zua3ZJ1oHZwH5KZruwtH",
  "key4": "3dqfmXzyrGC7WMhfzjZ3Ayhw4ZYkzNd3XZDcAEaGWe8sY7WtKKFMiF6QXJjuKtcfbvCkG8wDs6VKyYaXNTWFzqL5",
  "key5": "5QYjD8E988vBVhZmx2KBgguCmW5NE5sSgnvch7FMoHRyi4EDW3UtDs8uhuZomRMhpnmsJbb5CmRFdsDQKRrduUTF",
  "key6": "RnW2wduoedjo2kdoHVRPPk3o2Xch14bCAQCVWjihq9FaunT8kXyTa68LWEpoZvzerKtrWgbGjoXv2BPddZmAFba",
  "key7": "4TZ86JEYGn5VwAKZWEVMcAG9CagM5Nwb1UtKxtLXh6bf9mYHjF9jtWUAz6Jo7irSyKdcZLMhyUnqzz6q3jNaKTYg",
  "key8": "2hz8ipCdx6rpsHMtA1npREFNeFCHao9P7Z9S6qmWuTZ33aAwkkUpWNMXQmHohwCjfDg2PeR2wGsvvgS4RM9ZFPcp",
  "key9": "21oXLTYcWoivbW3LoJHo36uPbdgfRoDbPK8aHguKeDVTtvEx3gxCpF3kaML94LvFuNhSCACKGLPfmUR6eTBHqGrP",
  "key10": "5UEV8WZ39w7xKgP32eN4B86ZDKrofftTe1k3VcYzaB5dakeJCvtgWWypCTEFvki4AHokAuSmWU41jvvwftjFGdPu",
  "key11": "4CTeiUbxJGi9MA12HMXCRKP1tCfrbgcwbYAbGZ7LKV4H2dZZQsdvdPwJ43mgQWH2cgersCC5mcFm8fxArodbF2Qd",
  "key12": "4DQ5yqYj7MA7VoiS6fmWuof42Tdz27YtU8Vr13NUZK513zK7birS6fexQg2BHhreZDAhs1B9HMwtoDmMoEDhKqQj",
  "key13": "35vH89CuDRbqkwmLPjzdyf13RDwCejptqgtj8VoWMr8kEHUvy1XLUVXCG5jhAtKFKsRU4ehgKGCWNZzMQuBiwBk8",
  "key14": "4Ty5cjX9oJ6X2r2Z39tiNjznjGAp2ERjUSV2vaCKtp3c5fhNf7o9J9EnDwaxZZq1f7MziRUoVsFkB48tgZjSk5yQ",
  "key15": "48RpFX768vH4YFix5UrPC8vaCQCjWhQfrPoqzpiHMxJ7rhqtyimPW6FAyMeDE6Ae1zoQo3qQB53yoGsUMMJenRTd",
  "key16": "zUmUtMFa4WLESaxrb2BbgVsK4TW7xX2o2iVDuejWNn95ccsbMDRk1a5ini5pCibZsA7QrxtVamqWbHRanNLfNJi",
  "key17": "3J4itnuQbCNjKGod3xybc2WT3mBszwDqPSHnt1wrFEAzkQd57mFVRsJc52SU27dFdYr4NcsyUvf5eMJCoc5LmX3w",
  "key18": "2FkEtvTEDcW9Grt8TPFHBcTJJR3z3jipiibhD6vTVdfmKmho1c9vZ9H7E9yGKypPzKMbnD4EExMA4gQWSZq4A4jG",
  "key19": "2aoAwfRBvKVZPSUCyS6dzD3tg98mPtg6MngAFJcmDheX1moWbE8iieBhJWyJJJxHHXdENRuwSCBoGeaMCfCKdeQD",
  "key20": "4XcRunzYeYQEDP9pCZXPPGEQxpF7CazMETJroC1EwhBPr1P6Fn66J4kKZhWELKHPAh2EoP4byBTHJv9ZkT1sxDvy",
  "key21": "2cJAjfbb269bGhz9Yun6pCHjXmsPWiTNb2dE9S4LhVUUShEHJwuJZPu8drmD6ZvdRJiee6vemmNentLaCu9vvvsu",
  "key22": "SUnke1Dc8mLNFEefQU5qdTcso68RLhvfEvtuJgrHTcB475eubvaJBVaHzhTPy6pHZPuE1v2AnY8kDBkwxZ4UE6Q",
  "key23": "66TwcqRQCBLNgJTZFNs6VFCkTwjNs2ckUf9SADBgaUiBbUJR8JF8bLj6UG9VfjG9dA8sugMeYpSeJYLyzUnUhv9h",
  "key24": "2BjuYb4QZmYKgjiebifFW3dYd3xDLFdYUirFfaWmcHBmyDipRZHHT54LP2cWsktwEVG2exPgwcUnURjmyktW5tpe",
  "key25": "5ZPAjwgKePFdZfyfNmdqCSQ5R9kkPDFXiukT2VSxey6CKVz2UdedbiH4XS1F8j8oRLtDYEV6XzAPdueYmAvf7wja",
  "key26": "5MVeL4frdTskz3rsNQ8rRDNkmbGe19uX45hZp9gR15xoByo2cACwriNwwZRYJKeK54H7GCFe2P8YV4TcPwbePCu2",
  "key27": "5LkHg9MoNPArCBcmdG3HWm5zR1dUXyRr8vDf4wCKBZ9f4frvSxnbAMzQ6Qz2ZVGuCtnwLSU33cNiktpYBuqjzX3S",
  "key28": "4MRSdrhfBVfYV3bx3qgSW7di2Ls5D7pPwydB2Dp6ZkYR9HY6EU3nyPJkif31C6CBNnAnEY8ctQad449a5ikhJ7u5",
  "key29": "QPmV456RFV3YBDGYjsdNhzDaTN8wqQ59MbtHSkPZrLGGnqNHw5FBQ1bafTSqn2pV7LGUULVS8L6wZghBY7g8yRm",
  "key30": "563QJajWfFtJBc16G1c6dauYkiE89GW7xqDy8qfiDAGkicFwRpGLFpHn7CUWAFF8Coj9soZYsDxfhPeFqbCV9k73",
  "key31": "2fDZwqDUtAejWE7ryQ12qN8JjSNxLU5TSmBSu2mBaJystTPagTJZZanVr2DpgkJbpExjgmwSy325ohXe7WeqgcxR",
  "key32": "3HckWjkbjuBSPKfmK9wZpFiPEnhn267Fx8VPsSmvwRmBwBZNozWhR9oTbdvDh3kSk28kBzoU1TLjPDcZeGs8Nqsf",
  "key33": "38Sxrhdky1ifn8tnaVpELMNiktCw7abYLAScEmuSMF73YE6mbimAREk8b8MxZmBY5dkuBWD1kw1zqkYRFXVSA5kD",
  "key34": "4BRGnbWojruPqKQZXeNKc85oB8UoSZWTwo4gHnRwNLSZtB3ZLcvgiXeGMDtYbVtJE9Mkwum2ArhLUyrnA5SuBDd3",
  "key35": "47mzYskiuq6tygxXwDRzmSuYXqmpFs7MPLszc4wxttmD1HTSpboZGmRcS25rf7YyZBXxDaxPYGKFaYtpgYmekzvK"
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
