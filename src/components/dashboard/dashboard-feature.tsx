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
    "5NvxS3eY6iRhBM6oWVu1VwrqpMpQaPAGSnExoGNdGj77dazVJMPfKPrtTHNFgF1F1pjXWyRCrbxvZGRKn9zCGG9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjW7avrHWEofsQ3JaDDy5jwdb9pj7rq44T41rd4U8VZRYMxiqxkZAaDc8RZR9g2p6nE7qmJszS79KWDFZcjiwHt",
  "key1": "2GREnETyiWwfKbgWXWhpsEmJuJRKBwYb8iswS6i9ymAouPwpvnMG2efuz7cGnyK8nZ9vFb4TQjNYqwZTGDEAjk7x",
  "key2": "4R8fdnVxRymzX3kNydUG5bUFoEHPECusvHgB3pbxCdcv4rrbWMzu8V3H8CMtNxbcM2ATt5333JdfT777gc72kn1k",
  "key3": "5T8s7vCn9koePtWKsFCXDm3M11UfcRwcgt9pEbRgDARWA9XUS47AFaKdmdAVDZ8KkSxhtitFe8EaCUhpQ5QkKCea",
  "key4": "TYCr5Gkhycze4rNquY6s2Vsu12KRa5TLgw5y2byMAgYw3xFY2DB8QkiXwcRZbVVyc4rDBKKCuY9qLLsb7VeRQbK",
  "key5": "5yy6drYNJf774R1R2Hv5RFAoaueU4S1bkwgGCRga5W7RbVtGE1AiAeBmrXnhFmhpz4262HTsSwWxSxxk4YFqGVhq",
  "key6": "4t7o26MnfKMK2ePP4gSRW1sXLr9poqeEXkMuqAKjUiygDaUm4piqJUWWqgLJy5HAKKUdAYWHzey9NzmTEypznW23",
  "key7": "4SuEX1NuwQyq8FC7mndcLH4aiWJs6fsmkSvQSsLaPdQBgmRMbnWjMdFZPcPPMwWUKTJXHXbGboQra6URT1tYfAwB",
  "key8": "38e5yUubqZWotDcQL9bRCfSNNDkhWNn5QSvg6qx1dpkn8FP1fVxNVeCv7sxZWRFWS9LqBhJREvRbpyWq8CeLP6vJ",
  "key9": "4ehJfR9M5a7e4Wa9rPVTVVwTGCh65YANxPmetkBuyiyXAqQU78EyEpd54tFx62gUxxi3Uz3L9AjJrmG42nU9RHfh",
  "key10": "yPCg1RvrfdkqB2pcPu4EjAeDMUceb53VWxcpqkEyXGBHbxFFbUiudGqeuaudcR3c6yitxrAkfEMJ4HceAuFFhgG",
  "key11": "3vsvauUxTXHRN6WXmymYQciBpHbA7u6AxTYsgCTzjbyvesWYm89FVYXQ6ww9hp9LgaqLZPb8ztbwHpVPkCvD6DPf",
  "key12": "4TURhS4uuYdfoTJmHYksKArQXVtNdTj8bUraDGbvJDNDJLc2anQHEL18RgGXAjzzLryay9foGtakdLpcy2Ch2pXB",
  "key13": "4JgCyQLc1tYW1ZZWdZX9QvJKXCc6ADj2EHG4dBpwjHmtjhrnPdjHA2gisXEz44a4wqFiGUstGT6jp2wFdaEcVNrw",
  "key14": "5kGBxeDT2Q6381iqc2hrm64jS86qxdhW8BXXHfyG7MH7yZwNGZZX3VpaZCESBTBMXfBnphQvRNEmA3TjLqyBmiQF",
  "key15": "4GBHyKFNGzuCQahXR24rYtnZGh5tRxTseHruTYMTv3b16jARYsXs35iCs6mqfuhcFpGEW9E2gZFxLvkYwvMhD1uV",
  "key16": "4WVVJdqgBiwNqnVwuBLKQXF5qVwK4m3vEv961cnFF2Y5MiLykmwREyLZz6gXQiHCFo1MXvx9D1HGw1LRSZSXdssK",
  "key17": "5GD4m8DmUMKdHUp5yzPmJ4K48FZuFWxtL7LTS5FiNQXPUcDELJQy5rGvo2hjXehSNjB2WPi4NXV7Zv2JSJP7EWtG",
  "key18": "4hXNzo4UsxQEf11f3DeTSy6sEpwUtVsEBV3KFRaLJuLgvHYM3QPmpW5JVzxQHsYoQC3zDxT4rKbKpcieYNTgCM6z",
  "key19": "66Pn8X2QPoiuCPaSsCFcGHA3jEqi9Hy83HmeNVhAZRP7a8uwpnqsag9q8SSt8dDYsCANu1XZArgr3BGY1NX3kp9P",
  "key20": "2h8coxeLAU9wKf6b85hJWKYGBuZx2WPRTtoL3Z5Pb9DTaauMavK4hRWU2EhPD2tb4eTb27qF96oGEbGU7hHa9UFo",
  "key21": "VGeaQRpPaQyr2yhzsKuoUrJKJ8Njt7tFeLnqUVnoxA9ij9PhQdQKUFCQAEHumfyjp2sKS8qzEbSP1PjB3k1zDT7",
  "key22": "DynbAPmXzSC5istV5tqapFP9DNLyeyTa5DazbM3HBxmLUsbosCj3HkQAE8E6Ztfky2qL6GH5N6i9qr9gKaM7Lgz",
  "key23": "3RBJNnFdz3SzDNR7o4KaTrMyihAL6M9EYhUGiXxXoT6WyktF7Hz8gcDKCfHYQmjuEB7ofKeHQ5UtzLoUp2irHody",
  "key24": "5CAqLCFPqvpXYHinUmWXWsLqUjNjLmV5W3NGV77A3GMs9CtuyNbsFwk1EGgnDVhmBXmC6iA3uV5QpiB6zkWbUfSz",
  "key25": "3dgSowPuNmm6nmk7JtZ4uoUcjBVjVPhYZGJiNkwKwQn7eQAE2zbZ3K9wMEXk8whaM6uBbExuniqvntW15tyJhh9J",
  "key26": "4Qc3dzqy8D8SvvVdT4kst5EPMJStjo8Xq5DFABAknkLRGv6VFzFb64MU1DxRn7h9Az4rXqpEY8ZESyh381VBXKox",
  "key27": "2yDWESbsWh5QgsyNHc5UrN6mjmQJjsUM2E33rfT1RDgZpdkdE5JYF61e2ZYfjgbMW6AJ3BmBZwBjmtk9VLaZSwxj",
  "key28": "62enumXzDbVKV7TXr1R6bNVCuduEsompHqAoKGMtPqABqDztLWFGVXoSQwuYaHULH82qL6f4J1STwarWf2pbbCGo",
  "key29": "3pPBz8UPFEH9J1dTEvQTzWJwCeY9tK7Xe5gdMoDog5uBKUwCcAbYzi2k17U3jkWEQE2CcgBTiAZHhCtBR24Qf2Bj",
  "key30": "4bGb47Av3MJ2v71SPDxm77KbqqPaQRLEnXvwVSLmMigsuo9vH22AstA7WqthiUhjgTTndzBzzNT1BJYSTDdt1xfy",
  "key31": "3tSjtZpVr1Z5JXRJhYtRv8F2wkB5duMiTr3pn6PtLCsJTmYAM5s6noUjbYEJiX5URygM1E5fyidWqq47T95DAkmX",
  "key32": "2QGhRW1RZYyYLNkyGs2PwppgTQCWVB3oQCfGr2b9e9EPvZUNCpxZ2CBaUAUwkbusjXSsj1k2aMeLmzNXNxbvpECJ",
  "key33": "XFjMk9UPA6L51UJtF4wmmrFMD1QG3fGn18YwHcMCf8WxkbfYFUSSVXBJ4fvHx2xEpyvMJ39Y4JVmvbvGiR5pKxL",
  "key34": "z2yxsJR36ZzhP6b5SePzrY4gRsPd3P6KzmskZcydxbCzFAm13BufLRZ4KajgSeUHRgyYwwUQ3W5WMrDoL8f5jsX",
  "key35": "2fFwhGkzd18hMa3tg8nmLTu8hmkZbLZVDe1MTRZAMsDnB95gV3fvkzgPhuqpKEjpEYqbXuVQxeckkPu3Kri9zyjB",
  "key36": "B52hMUZvWBZegw91vvhVG4JBxxaYZyqR9Lz4DHaKnDahv1cnv8WM12K7f6Y9tQnNm5EqZatgLAPYQjmREDxVxep",
  "key37": "4nLihZ9rk9bkdPMiNdG9UYxDMp2A2DnSGjzsb8uqRnuR6hioUMzYQCriUyey4mqhbM3VZoRsG5gQoRrBMQJi6E2K",
  "key38": "5SpxV4gVb8eGog3hxxthvAcpnUpYhjhiDNdBRyzHrmLQEr7WmZKtJzzjuJomNm6YL6ig2ZzMFmhLc1vS4ASErynE",
  "key39": "4sczDoGPQqX895fnj6fYLLJjD1f2TGFFQM1TfEYoA6a8wbt23EaxLnWr5wKjpLtgs5Bz6A9r9bV9dkikrMGvg4TF",
  "key40": "3RuV5kvAkwEW5Js4M7KhMT1L1LJ7jYbmbL3tvg6jc5sgkWqxS6L9xABigBSE7dU34NGh4u7LKHhufkWSv28ENERz",
  "key41": "3PTUrvJZxwHXZUCt2UgiUZWATPtia72ERrWArkdFrzwZZzqEYJWtzMM6YpajQd8cnQ3umUfEVv76yhKUEfq8z52w",
  "key42": "GjTMntxABvK7twnHUzsZ2b1od6gnhUPsBzLZdrDVoqbUZBmMP8QKEAvboTK6GKYNiwmSPrPbVve6Yy1PuNfW8qg",
  "key43": "3NahqkgbcpTxpbRdTsePC9PkYhQEacvqqAFu6BPzwYUNwWbgwTzHN3uN9ah1Y9tcWGbUVXapL211X5H5zkrpjGon",
  "key44": "ieHon7Nfp3Tw5DdBC3yMyZxcmKhmn51HyEXcMfdkVcQ36PCAyk7E6FfgApsWLaD2rmnmD6VHuWhjiSMpXnNRLEn",
  "key45": "3PbF1diKS4kDc8mkw2QSMo6Yf4RBk86VVGTKHsnwaiMokcX88v1TsHx188u8bTB6TRjvqARnqCfCFP4Emisdv6ui"
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
