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
    "3iHxf6ojQQ9aorHm5mZ1X93n8aQQYLoNkdUkxGGPbaGPoffVfpuw115gPcM55G5D9TnAXpGoeD8HoELS5xdDa7G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RtrthJRk6mTtpXP1rACt5jSbUHxiCh4ZHb6nbM2PLLoqHyKzmXEZmYeXGhG8tGS4vUCeqFkpDQerueBCxkpMfm",
  "key1": "4e1Ct2vHDkFFXR9wnZ3xbgbYwkomsEeRdBYmRJxAFSks8ZWwcPR43fsojb7y7BLyKkqyf3LFLsDavxQbYD5wNoG7",
  "key2": "43ZGAghdqzrjAyNBhc32wbPtmntr2q3yZn4d63UqS8f8JFTqBG8GmfVdh1PT7CemDr75ehS2RBBiqR3Mq99NJKLk",
  "key3": "46ZtCSV5GpxTFim1Dafi6b613detvY5kBSR2843qHEJvtp3LmcsgQTk4MY53oF92Zys4YCoDwi6XcjrRgVSekRzc",
  "key4": "4BwjVCJp7VZHjHWsca4rjyohPu6LcZmZAc6vYVnJAzSsaii16FzySpwt9J4x56WEoJAhVcenmwfHjgQY7oCTfMrk",
  "key5": "dHpazs9fMya64pXpGm8xwR8Zj16UJia42WLtD7rp8f31h8PUj4jxi3KnsajqDYMoWqJCgBAVBcEFmojLwZgU9TY",
  "key6": "J7Ka9jBYxbStChHBZ9jgJMe8DropcUpvArFsiuxuLNSuxieUzqiuVExWCTUZXk22QWJMsuaB46XqULFffYwVwcD",
  "key7": "3f1Vve6sKCye6rM9Azrxy8CDe3B7ZhczZMKYzX6npNrCVkgvaAmYjHpJ2A8mE67cSGX7SbxS325fAfx3ERp5MuG6",
  "key8": "5tdVX4m3zecPBHNJ3WCS89JpNuHQvJsaDjEdntd76s4eE8pA4LsDyaEfuKb58DvDmMZYYjwyoTs4BjHppoA5gzb5",
  "key9": "tMJZM6Byuwdbs1JzhU5pSi6cPuqHfKrvQzJpJEpnNo5yE4DtWp39JsDpL8EzuG4NRm41E6D6K2zmp3AaN1a6bdY",
  "key10": "3dmYub3PBbKqHYZ9j9USzZEBDTX5V3MkLGA4nXXutDbCujSBrcLf3LYZdH2hy3xee7SynVodWJ1EshJr2q1xRKP4",
  "key11": "2Xg83G1ZwsMiHoerHm1eVWeYpzELKwpTZ9WMsLYbbJKmRuFmCiRuLCzhcrXStiQYJZVKnnHhX61WS75mwR64jB5J",
  "key12": "51phxVstCvwfEtpFw6MQSMvsZP1gRMLLjewSoNoGNNDjeDGFsWSffxorobX5zPPoFwMZpShN3Rx1WsSv2eHRApik",
  "key13": "36inGqHEpQam7SAMToc6JfL6fx2ZNYAGfY3tmr7U135iwN7ihRKAbB1jBv9mT5aQscAfxhtibo2V4k9jQoRHbCgi",
  "key14": "3y2Bj2rDDxMU6iFvuyn2u72GTQkrk17kyubXQc5bUmvvqv8z2hsN8aTFhLycUDMnHdp1evxA4NRYG5wFRK8R3Vnt",
  "key15": "aMCzLmNPyzwh4YY1PGdX7RLvCrffZsS3Xnadap8MaqU25fGr4ZLeqHD9knvR85VXGipnDno4WTh6fQVewTW1WpV",
  "key16": "5rGiZqcSJatvJ75eiPYcWmvdG2Tt3NoxPM9a6q8R96BCGwFLfXmtTd3thMieEGQvNbYa8vauhjLhkUkqogUtEgAT",
  "key17": "GeyTZz2fHfaXa4gdtdXy13KiN72MixK9fQd3g18t5Bp5v7PjrTEs34wM2YcyLvkPx5xAgtdQwxNCoYaB6W6Dxnj",
  "key18": "5JikBYKedyAaWxGAoQjUXrcCcZV7expnRJTsJQzTgREz4HwfzwvhGqRZyTnv3C72pbwFAH1mPymbs9tCwbFCuKYL",
  "key19": "UXsgpx3663SGCYs8vGiyLCgvkuBYeoznX2aPaYJZbagm7BrDiCcJ6LVYiMQf8afqqskW6fc6FFqMCqWRqvkpbVj",
  "key20": "rJKVBGQbBqYym5xCUJZ6K2xAYuPGU1NYpEANKCfYWtJmPEtLVNUEtiMAMfkTu1q44n4DYbrHj8KkAUg47iqgEYu",
  "key21": "5F9XFAghUUhB4GCtCrjMF3pvdzK1BQYEWeqtBadHpQVDvUgi6apumFw3YbBgLRyc7jq96n5HsPjRHkDrfQJCdk3o",
  "key22": "3eC6uAhWn1f3RbpQq8X6zmXHtVvjXJcFhRhhqSu9JN8d4zKU493hctS5wfshtaSSmAD1D2Ya9e29VMdqV8KpJc3H",
  "key23": "3EVsEWhju9FpnbNUcmvH4LTDk8pbv9JtgPsz5wNMXb1jykXHqvtsKAeV8vmVJdQQ8QYQshh45HgXA2DTrSHHRxhX",
  "key24": "3spSy9ApAJrsTfZE4st4yb9DfutdnGuRr9ifpMLyFYLMdjBCDopcCRHKk6vKp3CwvBUV7q3f5NDBAgZgpb3cCWfj",
  "key25": "2cL2P7Eh5fUByWNTzRQyaxdLKngQwmVdaWASRB3QKCgahsbvmZXwm1KHBMwPmaf2ipPNcKhHA9FmMutmFrRCBW81",
  "key26": "2rfuqgXWCKu4iBZMwKnvPxmUdQ1ZN2VET8oKC2o3JcjN3NpfsY5zCaA39zmpro2g6EF3L7Cx5sdFZBnLkYTPHQuF",
  "key27": "2XZ67yKUhHGAnfy3c8FcMQbPS5csYy6xA1YxFunRZBDURx88SheKES8Skx8LD7MPRUVFMqiiYX9P4PCB1HP63hj7",
  "key28": "4W9aMh2kUpZJusSKSzyCcNseXWEcStzaDvSJm567vh4sX3mZ68SkauMDoxXZawsp2Pb5RKwS73vq5Z83e2VRkmAD",
  "key29": "4r7D1TWcqZTPhkGxAG92DdvHxKAmmXudacot5nZzWEC17aA8CMUyzQGbjspDAV964N82YybLX4ZhaQizg5TMWeGL",
  "key30": "4VqvXrdAbSuX9qBP4aLnKwV6VVDDv9JzuQ4cTekTgQsmDPVWzNwe6FrN7i1KrricJaY7o4jQQr4pfWvr9NehjNvr",
  "key31": "2p1KrgwdyebD5MXbTKkqW9xcSBLFMsbDCkPhZybfoWNfRat5gACxToNpPjQwk7VF35PkKGwxY8TBTgorKs7cJhti"
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
