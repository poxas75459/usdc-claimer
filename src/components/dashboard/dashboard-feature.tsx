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
    "2CUCMjkyX4ZYB9QWcKgsvtMthxXdxWs5jzNf2MyhHKqpEYPx8Uzk4hS4bSZiZoh2ir1HQ6G8acKfAmBeXQqGoBaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QU2TkPhDn4k4uTxx2NBvggWwJQSLbTAm3U29L3qPjFMHVbQW1CoKChEGzhiSYA9KC3MpgC4F1PHtkyxSRxkSE4w",
  "key1": "3Hmhk9HNBEFczic2VE43r3sDb2FeKabZ4wfi9WExAk5b5Fz4xqD26RMNnTUtpBFXpuiVWTX8pkmPFz2WVqqZqUgy",
  "key2": "g4d2qbSABmWk2VC7WLepqn1s7vTtbopi7mDWpgL8mfznFXczgNTFW16suAdFYvSskfkXAM5GxdZnwvJGCimy2Kp",
  "key3": "5AdvYHqeSmX2XoYWnmo2KRK58LMstrW5NjDhoiroYHpCrSSeFP8QrCpcbLuR4YB4nuv5N4veg7H3cTmB2bo5fMD5",
  "key4": "27R1fypbGgUyaiykAy9H94AHs2EiQzJKFDAn3eEbkpMxYacUNeSa8xgKc9LwPyL2R8ThKhnVGow51tUTpFQwPHHS",
  "key5": "iJmTQC8jvAr8p6nAyQMzHJpuBjfRQdBkJBpdMMDMfgfYLKhwYdgzJJWrPBpfFaszuVoNeAjp9esPABiSBXrrARq",
  "key6": "58QU84f9249XP9x9eSMJsmeWRyTUt6SJNmpe4HsWZpnMknVDt5hapfzu4BX4JR8NnhoYkEvawQvtrpQUSj5MusYH",
  "key7": "21dmQwU1APUfysFEGrw9T3Rj5uouqKthfcaQtYT7UDjdSJXe3aJH1wdYzTnyzyjxEbjug9Q5Z6TpnueBdBwzogbL",
  "key8": "XeDCk3R9RX4Rc95QG8ZoXy9KoxxoQwhVi1RxjcRKyKEye4wJJYomB4TKbRjirNDGRa3bVrDLANNdz6pd7amLUE5",
  "key9": "3VWP4yZ4d1U7t1Q4vHKLUdtP2EWtp92THnhEDw9AzdL88auQNbx8XLPptEtzj99DKw7h927LiwAh17Y5wc7MxAtG",
  "key10": "3naxgZJoyAyiSXS5uVZC8rzdFzwHfufQLeohWWbj9PnCpK3oXnumSP3zi1hf1dqsevsgGxraWRmnHEQ2vkFdkjBt",
  "key11": "KRoMUoESdeRhepxqNUrNBPsZb27Pj2Jjr3dJd8rW1CYHGFQNbGzGymCTihB2hXxcakoqN2WwkJMsdW9YCKJXD1t",
  "key12": "5oRnzR5VxN16HzFKpFmJMyz8ofhdVafj1WBDqVj6XBVGPPdPvC6hAzWoxzg3njspQZnA2wNGSoTMfR3GAAkJCqSq",
  "key13": "669C91sSzwvXwyqQ9ruKoHKW3P6asqspVXDPLBgq7xVhYapyj6oDg6pr7y44tJP6qAbWBAsk4Lhn6DKxPonGzsGE",
  "key14": "TXz1WvgeHtWa4Z7Htj6u9bgbFTuwfrW8Em5PbSe9yW12dSAXuZtWeciodkmqqBUnoUM5YP43NK5CkoCcqdrWHie",
  "key15": "5Mn8TMuK4zdJo6q55bxKkeMjLbpk6Tvce7sKdPmbMJqP3cyMKAjqF5VSCnhojsby8Z7GvgNitCd7Ji9J54qPWeWe",
  "key16": "4rcFTTLf3b5qumcnUxzzbobG8dTHj7AtvDFdj1fS37pB5V53mNF3oXygt5z9vR1fkFRYtLiyrsLjimA2vvFbVX6A",
  "key17": "3gSaZ3KrPehKRx22DZG5v7jJfqtLmKksBeAU1KwxmNUJyEzJsQzZf9LiFVC6QgSfKEqyFb8ZBUYh6o18bgSbhMPu",
  "key18": "49GgmnceuxXYvvCdNAkaYGvgZpbn2cVDkQDZyJ7yKDwMKTVy7mLkpMsyivpeEtQ8dVShdCAgDVKfoa3jQGp3VrKW",
  "key19": "EWjHbY6HvRboNoXBgrG1oo4ajeEefjjtvVYV71kfBW3onhu3LeyMDL9Hs6z7JADrUQFaeXFZdDC7BsVhbrTaw9s",
  "key20": "2LNVoMpg8g7VontZJt7vuZBGEjHJUXZtEhtgvKWBSkwUbPpWev8oX88G6aNBgpunaLJg53Sf3CRRVmsWsYCJ1chS",
  "key21": "31kw6kqW9QSEdLV9u5sHx63S2bCRPWjarpumCTuAWSaMf6SDoRGk4TCec1T8J8EtCUCB1MT1FuNrktLSdaKSsH78",
  "key22": "4VdTzMf98uptyhg9vWUFxFTRg1dV1S2eCpaReJ9NkNFScDJ3YMjWBps8pkrM7v9Fppt44fsopgqCxnkqbZFLFFhd",
  "key23": "N2wp6VQY9VMiYacVTRsZXoeu3XqNb6TG3DBoL44GmPSosturGhCCfzXD4bjRjDf8RCSnTxAcHqvhiv8PBPSfSgP",
  "key24": "2bz7RENWJsgXdDJ2VcJ3wNagkRpYvsNPWuxZqkjxsZoSWhkyiVSKkkYL7qX24TFPdeUL1pSdPCDZuu4L6HgFPPwJ",
  "key25": "5QuYZV9EzwCDR14Crh6TVM2qzeTvx4GNDgXa5qV1bjngJeumbsvAJyzG7jznr2uxYFHJBtHdoK14zVoHPNCnUwd7",
  "key26": "3BYWC2wUP1fQDf2RSnet45ohWNenN3oBXpGjKRHEWcQ3dxt4atSxyPd2uAdzGaet585kZsVBp3D8DGom7QXoVz3g",
  "key27": "28MZPdWautCBeP3avG4rBrFyKE3BxgnV9Xdmifuet5gWJRFgSqE1hfGdPH1QR75VEMrQRhnVsqqGC6jNSwhKhnGo",
  "key28": "sWVDPRYFm3oV7QEdcNuV1u9mjqk6bKqXFZ7Jm6SfyGayPXsNvp1XFjqhTmbLJxpjYdx2D2zz2J5YTXjyJwc3p8V",
  "key29": "4eURs4gLp25RREsxPTuYzZaaJao8caFkS7uxG4Kwfg5Me6XbVMfvYs5SbtY7RZ1fif7FfbQvSevu9XZ6nzmzaSYn",
  "key30": "qY4fT6geuZD9avvitUnyFWGFgn8f11hEc2RVprMqRpW7ZdAkHHoAtqvqJ9Qbm6Xv72vzvntG9k4VqLvW9sGArJj",
  "key31": "2oPuCmNMjN3tafdP14N6YriHmx3WET8zZAitFs7p3oyM1rx8ToHVYs8JdpSDpXQNE9ry5zod9H8sBRm9RaTM9x4v",
  "key32": "3VdHDtTYqU8EeRcGDrsUWzPR7VGH44Rp5jSGq2EgANjaFvCLfc52jGMUFDQLmfqK8RMetKH8HEAi3wqQV9XKJvjo",
  "key33": "4osiNDVJoS4JU3jjTnUShFThWLNgysBhUb5CvEvZabeu8bCLvEW9Ec7rhm37pApVYtMkuRozha5hDN7psMFSuVCf",
  "key34": "2BCZ3XQP2g4tuQ4w4M4M6gzTC4spSGZwdSPAz3or2vmWrggWthjSeKcEcpBXDesKepFEgBJ4BHx4ftip2ayhDYz"
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
