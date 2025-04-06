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
    "6FXgZLu155ckXzGZppdfqMs36FfkgnRrpzuijptvF5GDtFHdfqcKeCKPB5trVMz7Ep33n6FufHC1p93ThdzFteS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMh2GEwNDABByZnd6eteQUSAmkqRSmzjEdiAv6Z15TtsWLLfa4DnQJ4uDRfYkwnqvdVa4hR3gYZku5uRG7vhMnC",
  "key1": "5htMRCBu8NobVFDAUgwdhq3puRGZxCooBB83xadgRM3hZLGWPxCykyHhh1dyY3ij4ZDUDUpjGoR6E7iUuKcYPiet",
  "key2": "2x8aM6m6w2twAZwR7yCjKjza8dvAHwLvDhBWen3vdiHDihHm7YAWBwdtdiEBrcPw6c4nBMjGaR4sKhuMfqgXS3Kb",
  "key3": "2XzgX3PFV1cWDXKDCmE31dMxmbofB53zBixvaVBm3g9KuZGHps3yWiTnTjNC3yRahLEkv5rG6GPHWjwbTzFVmu4a",
  "key4": "LEztyWxdoNnfteANZHApKxZjoy5hLVt7dy61pF5RdisGquJGJkyQJoPLcDbpubd5Dhzy1K3gMRH9gzwGbbaUMjG",
  "key5": "LLKDmP3hSnDDLkVHSVPY2hNBDgmofZopqP4AxwQnTH3TMZ6Dxa98i3SFNUNxiFMo6dB4jYWKrc7M26ycVmuemaW",
  "key6": "rmqxeyGT2jHxiXUPirNKGBvp4ARrhoNj1WKfriyuVhaB67s2Meb26WKGesAi3ZnczHotmTKh62e2oFpHPaiBsD4",
  "key7": "2vN4hVe6HuYTgpJvqNe8rMPRP1zg3sBFztPQBptHysmzxEGA1FkPJX4kPRsB4U6MXAor5MbLSL3BYfuF3DrW1Be8",
  "key8": "5sR31aRLBiK8fWrPHhzDQAaUmFuye3KDYq8aUGnQweu3Dvrg5NRfxVjftoPXPk8mh4N3w4sC65dkpbjpcJMcGZW4",
  "key9": "s1cx8YutL2uoBQu8K3BskSHtHuqxrwDk7jAuGkPU3iQ3FZYCcahe7y7uJw2AEFHL1TgAm3tM8paFtCjwntUWxqH",
  "key10": "4T3T2jBVsFE2SC3zUcEQJ3HatW1bQyZT3WdCbSr18aQjTVdhwcrUAbDVxLw3Zmpj9TtXLm2eB1rhopK9Z9rXhYS7",
  "key11": "5sPA7qNWYUZ44L2ZkHFouQiCTkAyr1iDFmtQDpsThMDonDSwwRQfJUDvwZopaYXz8Ry4ha6eLKVVDTZ7o7X7mg9h",
  "key12": "2p2h99dXiffLdAyNih6kKtXXHZ8PMeY17jxzVLwrcFMNXFWAGZPeN7JEZca2645irkhZ5LbzgJUmaRz3KSDPk9WS",
  "key13": "5vH3tR7ZSDwX6n1doNL7JiYmBGerirwkiP2toMcBci9wWosifHME51z6dwxgMyvKQRjNdtmMymGYYcP7YxrX6cGQ",
  "key14": "2VWS1fmpmkb4HaRAm4bQ2c6739JSv79e1JXapU7ZBZ4MEdJNKpMKicMH5RzA2pRL2erdRnQhcXYgJW7uNSoP8dF2",
  "key15": "43wAe21NGrbYY5RrwqoG5nA7mHb2pdQM7MTrFFpoZX9zWTkV3m1juduRjwi2DxaBHhZfrXHssz9abtuN8cHrPggu",
  "key16": "4fxVUufK7T5RZB5T1de2QY56H2z7khv5bUA7UXTzYGAtDFUw8bDUj6tvUmpZeszRtZuoMfk1t8uuU9Wn7QhHa2Mv",
  "key17": "4SAXjiiU17m5GJ3RvGnVnpCmJQpjk4jHTh4qwdN4sCvM3XjQy56RFQwHEQX8hvBWmpckZDA7mk1DE7BynFD52sAD",
  "key18": "59CcwXyqitvL9x33xCgr4qEhHkFkkmxTT5ZAcqgXv4kL3wji98xUoueqwtkcTtBgQq7j4WFWSn6g24MTgWos7GMu",
  "key19": "SuDwiKpxyAE1zPqZUgQvPpvGauKiAQWjBkymDMijuJwyTKPkaM63TbFkpeVNfc5d9VKjmRQ4ZmFj9q1u6DPTY1i",
  "key20": "jojR7qvmN5mVMkZDLQNwXKXeKDTFkkcyz2PjeRucesot9hKWwt5oJceAtF6YLWVc4CM8ZYJAKsRm7o8t4ETrkk8",
  "key21": "3aoc1449CAWgbaQpuonTX2LvNvPCjN1C8sT9nMv8PEsH1nXsXq7TgDJYsu8L6mkHkqhnqZz1PCB9XddEj2bRgE3L",
  "key22": "3byPF2MFYZaCRAxV3ewb2KaPoxEjPShXeZ4C5b7paMSXDEvJaAQ6tSc8ofF2LCK3DPV5h4dKqYMMQz96yQASnzBE",
  "key23": "3CXP5CGL1iHfJ49iT8E3m3JBPFK7oAKP54vH6kEQupKnpxLRzs5QusQ7mfT78U8oFHQrctxhbsbeNuzGWhbP9Qoz",
  "key24": "5fBnkT1YynugU36btG6pXzNxz8c34t9qfsiAjK5zFvt8Y2r93F6Jo392YhyEr8MmubWP9Lhk7zfy3fuqtnUzoYTZ",
  "key25": "2Ur4gbvnsGHfgAj8KxPdEQ2CN4WV3AsBGP8ZzFkfzdC83eQh2ecv2N2o4hDoqYhwh2TBz58kQPsTcRr8nPdcxVjn",
  "key26": "2BVe219fxZC6ne9MfoKYv4B7om3gTqdGa9L7jR14SE1in6vjJPeWNsMJgSP76LDQkL8hy5HtxRX36LcyNQUDd61o"
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
