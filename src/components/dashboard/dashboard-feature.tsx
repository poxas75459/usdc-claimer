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
    "4iVw7umGG3XPmbSoZpUntTRuDqXW9YCuFz6Hvr8EiaooxJoi8aj65VFdSNJacoWe8T7zhvFRzYZk5cEird7kMf85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBHE2L3LSnvuY5pUvWnrLJ5ERxpFWq8oNJB3pDnBxt5ELivAFPLL5SfdDkTYfGhU6jPLidt5p6wGu1F9U2cV9RP",
  "key1": "VBrM2Kb2UD3nKaRYWBdKon4bcP8wRsiBd7M5ECVx3kmdU75AW7PVxEQMD8GpW4CV75VFj3mLHA5n68aYaiJ7YW7",
  "key2": "4vM1di7xqFHokkUT1ANNL9vdTh4x6rx16GTndvFsJFy3FdmRKrB3FjP8yX8NnpdfYdx7LbYAjKnwpgutjRnaqF9v",
  "key3": "3ufTywCkJMQWcz1iPnScZGjwgWJ3KU6Y6U78PnJdtMnDvAjq92xSHpjW9kCNFMYDqfpo6hgrWvaG4rP9HARXwDvB",
  "key4": "Eejvi2jh1uQb2RznUndHaDphG1cM37mjssYCysMKJWZtnPuWBdctra6XRWVtGoUQ2YxXMony1KDhhR2jkcFA8Yc",
  "key5": "WJsCzVJTvHgvvfUJhreeJ5VLE5pqQCsEa4DqN7MD5GCAjjs4g5qDHDq8SmMPbAyMGo9J4NcrMmGLDSB8tdr6eWf",
  "key6": "43XCU1Eq1eHKmzxpfKVXaeJt6pKBHDcVKSm7NyWFeD52evwu8RjWYsgTs8pcTmA674e4UK6hUXgQntvR9esmyPp9",
  "key7": "37phNRJuV9GEBcza4iuiLLWwkgFctzThnZTFhLrcyPdrU72dMhu6DxGuYjSztTWH7vMctNqFmrBZABKbQWMSXKL",
  "key8": "5CPDT3scL9P645BgKw9SY5e957WMeCrV5MP5GtrVYwbgDvn9Q3V2F1urXtx68uhxpedKcxbhHfHWCqVtSZzNfJ3",
  "key9": "5B9JCL38WMZC1zvxta3xAWKiGd1TBVuRLP37S65Ja53dxKJSdFo1wGrUwWemHDnf3R6em5H4KWvUH2xNNWJ7VQQQ",
  "key10": "2G39dcLZnkdjvKacffA7yLWDFHE1kN3VL423zZLv2TN6CxSwmjKXBgbVKpEociykLcAbr6Ko5Uesni9VRXoFuhfD",
  "key11": "rLZFqagREtiX8Zm7g6g8ZCub91JRu9NuhXRsuTv9thiKYcEvNeEVbinCMdJdr9piBsjtJ2S5hCzz869C2XGG5GQ",
  "key12": "5NAnQHgrHbcxMzgsqR6i1xDUxtXjsYeXX742N7qcyx9UTresiisuf8P7qnwXJK88co4Bgqa62wNavPMtndk4xKUz",
  "key13": "FggWbjgHP5ovpvvDRmd2kN6me8Qzev1ZjaTYpKgZzkVdPDpvjzFxCGFjH7L3NFUktTzekk9MH2RbYateBUHbTxn",
  "key14": "5txx8LbAM9QNP6MFPXs7xDFVrEvV12er379ZdW2CFACK882c1qYd5GvT5jyyk1sHXZeQCvBvvyZYmtKuHuqeyrUL",
  "key15": "6Zw1tSEuXpATEWCmGiR7nt7r76oThxCvbzgQtEdhHJnrZoFKzvtVRi2nBLd9E1X8GXhf3QLfCX7tRLgPNxyGaC5",
  "key16": "3tHvf9TYtqiDVoTeTQnizo6JUrimuUzMTPDDnXTjodNcgpHeMFuASdtfBUug7jcameTFGhgDrrNGHQzNWpRKpBep",
  "key17": "2nsWWBSeRNQ7EbgenopvP3uwX31fdtrTgGu5ubQykAwEAenBqzzdDLU11TM5LvjqdCWqbAMJtfY261mg3mqXLrez",
  "key18": "Snq42RxTEnKmGNVuvXhtdhu9o8UHAFUxvBteKUFdq6zdYckRYPi49S3VkoejvpRBHcnoJv3tZFtXVSDrFnhDb56",
  "key19": "yhAkWwSprrAsPKNhRhxaTtwS7UFwXdNXGiqYZJDagpGuQdQH2EkyfV12uDv7jmAMLgUtL2ccMF7YADfQGL1YgWa",
  "key20": "2x6i31PBz3mk9jNN8KWffaMVPrQpdStBTeipDwEirzGnPrmCHXNp5vbh85979kiJKFBqs2rWtD1CjTru1Sk2YUHj",
  "key21": "2mH6ikSAeCGaDgadTSeh7vPC7PcYbJQJN4bzvVehpwET2feDp1oG1K1DnnRoYWTmcASeWGMqLfbEdPUmc63C4Hns",
  "key22": "5mzPXVNXcvDy8VRBircMzhUUKnmZ3qfG6ZZLgP16dZWEwCBDiM9ggZ5b3Fcmhaz5RQMgEGe3PE4EhHQwzgERwW5u",
  "key23": "5d5HZiRsnXBjCvAKmrvyDTraL2swm2F6yzHcaCSz65zy71JGUcYzWZVKLsaefm7h6TcYzMoEM1GSaCSACmgTKGkN",
  "key24": "TVYS3wUsa8Xcd3DZun6uosgkH5auKHfX91fMP7BF5gz6CytqbDofLuAFBjq96R5bGs6SqSQUyFoqdq2Xvkkd6xy",
  "key25": "2FdKDrWskCVzHMKJqt5BgzykWGqWdmeH9ge8wELNBWZAMTRq51BqeCLbEnQjaKj2oAM4XNgWcEGXQjY3gHpMK5st"
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
