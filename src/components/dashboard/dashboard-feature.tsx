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
    "5tWWR8UJGCmbhUqEKuWue1ctYc6bHHox8CTHYGZSBhfeAWujm4D1KGrXrGKHTLG3fYpnAhASwGuxXwhnkpCWUXPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZpTxcb9rXqt65ck6NvoHEJ4uuNKw7o5nxSyXPBRKQsVo7cfj2dJ1X9Ms931MyARfzngmHptmftQvJSSqvsbRN6u",
  "key1": "2D7RAKXzKiaKS4QE3BgKNEFCBF9eNyef9NPGJyeALpg4B7kgq5ABc5qFguwTmgtgYpRgEtWR8jvBZXJqh9vc7kCw",
  "key2": "2MhbcgTY7y3obYEDNTj67TTxbiXpiMpJ4S1oDW5csNdgHXht6SpJsmRnYDFbk3KcEpkqEPU4Td4i35coW96UjjBF",
  "key3": "5YDN4oECPupiVoFTvStUg1GFxXHDLWZiL9UeRi7msacyMTKkfpD3qa9gwdhmFPbDGHXWiWvgdbBAdfBVG4kELBLL",
  "key4": "5iAVQLdWumE8QyW7xQ8eJG6hyKqn8oDaGzqKWVoCJQrURMX1VtKL2vVdtV77jjgWLUKU3osFXePSvVUBnG7c5syf",
  "key5": "4aetFFMwRQswe51qmsU6AsoEWnkiUuCukiAtRMERdukFGJiDynsEPFJYpVyfCmbCVE4sFa2ubzp99NGTyuqjLWfz",
  "key6": "4cz8Shfh3hAVr2iNUsrVFzsRFrwR7JPQ82P8h8Rr5Wt4aD6fk2UtBtd5kk589iuHCQ6W2ZpBpu4s8ocRct62EYbz",
  "key7": "5wmqR4jJxMPBrJhMYvWQxt3ANAbN4Nw4QvEuh9VRiutzmGjPj9tHgHeSgRUHzqvUwynjbRA6pKVuuwp3PzHBc936",
  "key8": "3UkC31dEBCCZdtpa5unJQSw4GgmDFpnZZTrnY7npLcd6kedzXYmwLBeybS8EnFBLqL3xuGwoPnGcWkjeuvKdt8T1",
  "key9": "5FqJ6HHcNuy8Wi8rp1o1MFr7gk284krggoK53ZvMzMV7aunhn4i1yWFqmucxf4vb8shXNnfisTfDAsV8oV5D7MZG",
  "key10": "58QrcwJqt67A9iJGN2AXPKZMV1H7jWeRtyy265XBSHNZu9LA9kpRJvdmDrpdbKangJ9xbGgHa9KmY9itWtKsfMa3",
  "key11": "tvydcBKSnPmkV69Z7X6Ko9KVzkZabGsAYnjx8eQQi83JfZt7MGQgK89pmT1kRzLyVLha1sQynTkUCwEedzixbiw",
  "key12": "3cQZc7TNAsqsqvvLm9CVgxRVBAhhbSg87fZtrkTJJ3LMWAK8tPr1Dmnr1App9uYUw3WavRTQrm5g6HU47PYv9BgH",
  "key13": "24Nk4m7XQgzA8yYJqa29ujN3UdwY1g8qnca9Z6SAMUa6hphN76jjQbFHe3ACzUwQHnaGdgLSw1CiWnECf7znk9MW",
  "key14": "penBUaxZo6gosuYRKo2kgmuxCqksPnP8xrAHWzwvZnsmuHNbkRgBj9JBtet9QNwADaPJRp9fpJSRYX2rCqVJ6wf",
  "key15": "ZxakWioNaqtv6DsdvhXEXqYafh44hfMwM2uRZaRySmVMBk1kDPLng6Pp2bT4gJU17xjYDmZK4zMYrj3BB9RQGM2",
  "key16": "57bE9CoFELSznSasg2DEtFzMqH5JcyDVriUMAF5NQMg769wQGdUV2rmEtVUktAsaW2oFXJEUnVnwjGPYTRjsP38c",
  "key17": "2VJatPhXMpe8bgD9uRKJ4wwxedDfwbUQS6TgXDSXehBtPkN6afGZsp5PdgL2LzE9GrooWSyX4D8N8v6YL37aJ33j",
  "key18": "jfvjDwCVwTQxMLpqytTqkTLvfMrvgveJTAuDB1HuJVipW7Ah2UcYVowzXtgZHa5i53aWMF1tueQXxV4HAX6y8kS",
  "key19": "oSqmgyshnCMS8g8AyJaeWiHhVDKq4Zfk2qvbj39z6f7hm8QVyjmHY2Q78XoEtKF8H6YBuHQrmbhkEc6TAWTVMqZ",
  "key20": "3nV7pVXpfZ9hvf7J1bpKgPXcjYrnPoo5kYZvebjmihwR3oAQYtDVwvdigcqHg22FBQPoVHq9stCTcpEvfgVEnnjz",
  "key21": "3tEaaJsUkz6hT3Mz2vnfw5FfRsZSFuCPGUzcs6cKNjuTqb53o1Q69t4HwjEwfZgWo12wzUWZPbjCh62ivHkoNz2o",
  "key22": "3ue5xcY9V1PcjXAJi6ZPFRc8MavYtVw5oQqF8fNCp6U4PSPab8yXLwLv3N2whsPavNkS3noSgkrBMsLCNKCygZwE",
  "key23": "5dmaGNdjU8m2UpwHJwYq4pukeekuGwgxa3nHYVX6rAY3kkkkbS7nuyJsnyk7cSoiR2DpbWTsMXnmjU5Z7fzrTnii",
  "key24": "3mXkPL7C68eoyBYmWnib1NAmq8evgVb3kJXVaJDjBeNWnaK52rVy6WcWo1P8CttQH6sUycrDxgjoq2xumXaKB885",
  "key25": "2RFNcuHPVttpcQy6k1c4QPKnbtZ3chLDifKY142CE6fzv59SwD9sqDbFQjKeqdqB335prmSDBhdcze6fuj3vVnDy",
  "key26": "5wziNL9CDXbps1iMKrd1cRtXWSyrb7wWExUed4n8PEKfpMDdoo3d47BrP7zPXAQ5L1LhW6wqpA839My898CLsThS",
  "key27": "2PnCVT5ihL6A6aH8qeNhDBuDrH8inRX32EpRY1e8Xfg7YhRXQpHpA8uGNf4ESFZk7Eg8C5gwNzs9NkYhPgw77rHB",
  "key28": "3wVJ3y7qFa1eVCMDqrL8MLTuTQPNEEHEirzQrnuuvuqfuB1pmyzXeNydyTTwGxbuV39HFgYTzPTniKyCBq3AEegM",
  "key29": "4kG3dGvH12Qr64yYCEpTCrCNAhyi2LinzGSAWTPMBD9MQ5SnG9gAm2m8HTW9ePGXSX9QzoXXE46AKseM8Uvm8hE6"
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
