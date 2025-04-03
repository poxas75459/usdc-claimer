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
    "Dfh63HiwJRvA8QVQUH1wWGXLNqU3z5XaJYomN3jy4T22hbxWQRh24soH1NPgavgu7QAkjiRf9jxrBiJXgvapxkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkZXJDWDUz5SU7daCNYq5QfW1sVdfU9S6nhrx8Qx9b1TEssTi7UDoU1Yi6gcPh3xovRbfSNjtK2Bh94HMK8rpQL",
  "key1": "4Yx9bvXJFBW2EYeZivE6ebJL5g6gsyzk2GAZP9vkeY5nzWFrVPzLEZqJ9FPeShaqU36vpoyAC6ymU8bJPHaVk3vB",
  "key2": "ZTexAZptUeNDHpXZErDKkepfP346YJVx18XRrfdtxUTTSz1vGmA4zihEARoXRbPbZFVeTVpTtM7zFwt2Jh5AFTm",
  "key3": "a9HuJWoHsV2re89GosUqskF6GWWBmffUoFH9GeVn8yD2MXTHr5vwqEm1eznsm7NS5Qxv9nPoM1dp3eZodn6yNW9",
  "key4": "GNYfYsaYuevg1hyZn4Xibni3DGDMWQLv7L4YiRDFMSbYJo22EHPax2owMuPeEEmsxqSYzTEZDkgvQpfDoQNENVT",
  "key5": "53yuHvw9XhHziDVN2L6HfrNUGCNPf7zeu9kPXVg2MgrFxMWr7o53kHnMc7FHCKiWiRkZqTnmvy7v7d8gExS44yeL",
  "key6": "2hPW4VPH5aGfKN6e7bo23JtJpF8bWRxZaC6S4AcvijihHcQKFu82mCX4viXup1odaHET16MXYFa8xymJi3Mp88pH",
  "key7": "4bf8Pam5jBCNirm2orWf7GEeDjSRPyJNZ4yd4kxwmHragDWuVtKSgEUVKzKUBtN689BWoqVp3dhH1HYrMt3e7vt4",
  "key8": "5hp7K2fusbKBnnADiF5hdNaEBbDagTNSMFK3ttwpxst7yJX9wCWmdz4C2M2GrhzTzKwtDrZj7eXhQrHidF9Sg4YA",
  "key9": "59oZE94Fmyi1LSuUFtWX3DhJY2FZFQvVvJpp7wQgJkJyFt7YpUFDGSG74BGVbPc2pg33Kyg8LsPX2zRbYzSiTNfW",
  "key10": "JfkHJ1Eyxmxthk1KRU2J1iQtca6PZATq78hez9BhkKTy6y7pWjuwHhiF1BmwALjBtaDcGUa5q3myTZ4LEzs52f1",
  "key11": "5sz2WiTiPQxyrEYLa6h7aKvy4RzqPHrdiPMVo43B6a5QLJE3QZJTu8VH3qpeCVu2RFibJK1FioXeti6BetiN6tmT",
  "key12": "414HdcoK2wVEt6k2JfLSoq62dc31KKB9CQZNE3ti8hz3ETixyq1S9FdhzwE2TBSyZKXx1e1VMqPucJJ647FLcREb",
  "key13": "5jx42JpNDbyZmHfroW4S8wPFTGGxLV6GSGc7h7z4sJNo6YAPdgFDEnmK8UimjdvQha1T6pF1AEUtzLisSPtj9vCB",
  "key14": "3V5SJuDuLduSjNu2pCq311fB574MnjJ2nGouotin5rbGQdxGndHjpJa85Jz2UBZrNDEbhHxV6YaPw5B4854cyzE8",
  "key15": "2EH8xkJaTegdqoUT6xpC3DaB8WBec1sBU7Uefx1yvuQsdb8k2RbEJ8RGZWq1i3phcuMUVNyqg3QpbcfL28rtPc6w",
  "key16": "4XRih7bZoDFDs5soL3GJqLDxSjfvURCamst3tM2faWbqmy2qspEDvJrY2njpLp5qH4WmyfeydHXXF8FCPw69TfB4",
  "key17": "5cmCPCipFrhS1z88dkAfeV1GAdKvBUFvM9eNv1azRo3itY49d6A7fsZetWv3pcChMwR2dzRiS4TsgnSNkoc55RHM",
  "key18": "3kgFvvriLkwghzyAZPbunKZTxqZ3VZDh8APTHSXVryMoV3hNC2Us65WesQBuZ4TcDYj9U1tvD758bwYf8jTETyFW",
  "key19": "3JZ8TUrh1xne3XjJJ6HmWSRYceAgpAd8DTX2YSKZ3mdw2jkyneWQkKzjXzotnntgqaVqJkiNuNS1XUqUuCHovfGK",
  "key20": "3Y1m6esvNiCpXkdgnf4ccH6MdbbyE1Mc7b84Kaw5dgHGRsbhaLFQc9LJ5FvCjUw7nHXN8nNQeGmjNVPFps4XkXP4",
  "key21": "3nmgg9JiZ3wg6Xua2Ln7CyQMJ1ddQAqS8997jwkbdcqHL1RpzMCaHdVVP5PNNmFhpkGhC73ZDLuHHhQq1UmSW15w",
  "key22": "HHMa26NHrAZj4AyUp5kPwEkU3T4pguysfmr5r7nhc2QZ1RTbXrShcKzTifxvLGuLStQBL11wv85zMkAcCSeXJ7R",
  "key23": "5XKHcMX1aRmJxaZidP1qh2N6sYKzVziLEMkRY4ixeq96uea8BqarAVN6CzSBYqcoo46fKhFv18gRWPTFxuW1z74E",
  "key24": "5DvuXbdoJ2PsXVwMqSPJVYBgcp3iQ3wCcStcTycH42zmf7vNnyCydMTwN4y5XKKR5f3P631tQTD7ACQz6sLRU4Mx",
  "key25": "5KuDRgGEtmEQd36AoePWMKF7D5fJxUbbuo7dTuLyg429f7N5bx5s5gyNqZzwodcdArt1ojwKohCUWQ5uqS22M3ts",
  "key26": "3tyugGmuwLbhtPmAo9sGtcuYCFTQ14LK8v7fLUT1T9BRUvs3pcz5Ng8ad2YHsSdkQZGjNCfpoDd84U6AaevUmsvc",
  "key27": "3RBRxdi8YCjtans52VYxctx1VKbpU61MeRejCv8Hnv3GVx3W3W7r1ooP4Qu87AgJEar8KFAnQFGM8cRYbJ8pQfwj",
  "key28": "211uz7yPxo6sGdXo6rR1EoYYe5YtjECV4cx6c1Q4VCjE4FuD8qJFNMJSCNYagqm9ofX19KLs7r4pWLtmcgqDLUJ3",
  "key29": "3ckHeDRJysHTfhHsGMp9e8oeqmmt3MuV2YyTgiaLbaqSbdnNV8TrP8WdS7icU6WjLo2gUwb2CBku2aEXn57SWuXY",
  "key30": "639UoBJ8eiaPcUbrd8PUo6ZHaqmSj9a5Xtu46XJseVUjqVMBUU1xN3gJamqF1We1YuHzir9Qd6QxPXSgd4ppj1JH"
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
