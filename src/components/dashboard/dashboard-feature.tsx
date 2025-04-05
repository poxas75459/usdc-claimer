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
    "mfm9P6fqy2s6YxjxeAM6QPUbjjXr5AwdVjHj3mgjMamPbm3wnLMT14MbSo6yyN8F991s6mwhkc8XeP3VPEjHgNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mxcMbn9dzzWzZUdJwtYdfFTavoeAbM8aDM894FcNH2oNQyMcYvXJD7uDhKJH7uzJYkPAMpD6fK1KgBo23Hc4WTB",
  "key1": "5mcoKiS3qyj2PPGmUiu1NZJfHztyA6q566K7o93atRgvSwEVpMLVxhV7hvHFW4vq9rNtPUPUAo8P1QqfKJw8j8mL",
  "key2": "5NMQCTsown1FDXhFEoNFPywa7mw39kjuxx3crKBfoXUh1LwKvXCawi7kv8tSHNALZXNtrbHSuZosabuYS2HxSsB5",
  "key3": "3qXLCQWczs2cASPg5k8NCkvQLiwaxZDCU47uZXB2kxhJUCLiVbQY1zbSb4szCmTSGR7CuZr9E7jSeNLrDyAEqdKF",
  "key4": "2wwyD4tKoymktpuXd3MpDckryUm4bLXGzMJLeF8Cgcyx2Y3LL5Etj6pujjz6FfETfTrF299feEKcYn9KXJWPiqeh",
  "key5": "MqJQ4nUWniZBxSzgAeWuNFzjSM4xrR6wtMpEDQ63n8cxgZ8BRZxipHbzFVHKZBvNnjnbZNCrKVWWa5PSNR498CZ",
  "key6": "55XvUuHSzoNyKtdc6MRYfAWX6n8G2Z6evEFBv9v7qkcCsChDPNJU4yEAo63d4zLrT47fvSRUvGy7DyLw8vZ3Yq3C",
  "key7": "2T6sL8iiZJhCRxiM8HLcGB1ZS94FGaMA84aWhninT94kAmXRb2L6oXLUPQCWd9GY3dpjiUgH9PNa7uWKMC4rnEPw",
  "key8": "2hVf7WM9iRCyw7P7sfv97QyFfYSZiMibP58rkWQRtd7zyweqvJib1N1gWANM41EJZ7P2dD8ijVMvGLZUbrhJUcaH",
  "key9": "2SjB3bUE5nGiLTw4kNCJDjqiCemd5baYis9pFw5hzKjLLAk3Jsm53pWEZwSSXJBgFA2J1kDzvJx7Xam6QwZzETSu",
  "key10": "3utPNV2Skho5aYcJcprAUezUHohBdxZ6boY3J74Ljt2eqL3jQzzevGPZNgiKF2QbtWiwoU641gDQfW9mwLuA4Ur2",
  "key11": "3t2h6b92XDb5hm6nJRH8AByy7XTP1FVH21DXQKQ6Que1ACV21BcoJXybs2z6w3aYdvLRdrBe5ckeDyMe2UXot9vD",
  "key12": "2qvVMt2eZg1C4WkXxYS9LEoBkHMXjVuvfAnZ7KZi1Q5N7qgthEbq4qtZQehWuSX7p175nLAgoyeqNZYe8m1utiMF",
  "key13": "4v71Wwujzmyt2iTWHd756GuQz5Xzu5yiVjAccLyokWvymp3F8KPcVkx1wT31RUF6ks1dykvFgmAFEttJzR5PRMU7",
  "key14": "2kttPUVAQRpDvoVCryNPMhz5K2bh2yjNCng6mnrehZkPqKTQeV5tDeLiF5cgsCtnZHYB7yTWQ6Aa15DA1zG19s6x",
  "key15": "49eyyP9Tqjg3qNHrryoQzuHeXw9bihq44EYz8vnBJDuwSGhqATAYSKs95gzcDi8qZFojGz4rHYbS2eLQD2TXVzXr",
  "key16": "GneFsmQCBfy9tzpm4dfzfUEZ45mVaCpCLT4MKyWEuQ3VhHWstAb7jfN745coUbRab3NucBpyfXY7YXdQrSgTVyB",
  "key17": "2upJATNNoya7Tzs2iSGRP7uY3Pz2akVJ6sSdnP1ceoQunZYdDsTSn724CitXWdbRxo6nwdPRFZMqmbt56bbYvyrP",
  "key18": "2yDk9WtosD5KYC16e6xRw7vatPnWVLVspry3waefFiAsiqj98VGXJRbW1NBgoxv4vQBXbC9JcdfoJ61YXpZyHdoo",
  "key19": "6unesDuzEp4LezNG5A6M83FMzkUgEWTkND5bsDZyzGRvzQHGPZ4D3gERRZ6LwAuAy81iKWjGwHXoeYrvYRbrxTp",
  "key20": "5akF2WjfQuEuyQCUpwfh4FPpt4LwhfwngX62FAq8HUt4Bv2NWWayrKXZS4SoNUNV1GFT1VHRZXBRk3oXHYWf5kNu",
  "key21": "5mGDzzi48z62WzKsgem7qJvpe7vDX1apVaBZ8pkyMCJoE3vaRxiQVqa33eRShGvpRoYAsiEQadLRnc3KEQGC8hsU",
  "key22": "67U6pSeQQfNjcujw15jvAonkbJxZ6yXbKaWKbJRmicJd8mMpRYKgL1YVdMzVXEXmpViBTQAseLhgpFuNgjXQo2AM",
  "key23": "4P8TDeVTZPANbmczwUPQDb2G8rK1ee4NzfkGLAawipVsAJGq2pNaDMHDMugPDipcrBc3khWgBG26aL9sXsHE3vpZ",
  "key24": "2djPPPe8JyxwP4Ja1g89wuiVuCESVeyeeFj1US6zDpwMVuHCB4VF1KNqq2GwNcXttWAVLARU6bEvDVz88QgSAkC2",
  "key25": "2sHXPZxJtavFDjdNiZiwbYvqdW9SCnv2KdCu8mC4iMkmPCs49fqRgN1vaoafmyaD5ypJH45AVBhgZX1oTBP1suGq",
  "key26": "2AcX5M8wPSTXSt3Gb8haai2AQtsvyrSAvGqXwTEYebFLZKzD9x8FQSfPjHRWMDuYrJRvYPszJQ4xtAiPP4YdHtHF",
  "key27": "2JfwHsxW6UEdtpqbGgSfHSndiJRVZq29FiMbVxq7kVtkAVmkuxfmkva5bNVGBN2tqBciy95QZRedoo3hfwjXpZ1A",
  "key28": "2dbJggurnsSKNbDwaQqKcbdgv2vuiL4e9nMviHy6c9wFtdnLp4KVG1mqKQPJYKF2ePRaAWJaqF3wK6jb4kiSHsgd",
  "key29": "N98QsMYdHHPirVbTMsXjD3qMkYHepgkgSXWTGcMhTaZF2gsuFuQUFWDmxNKrRNjKHoftTxGy9786bo9z7ndBYiW",
  "key30": "4cYKzMH2Jdh3PECunWyb6LCLnC9foEog1edH8grcEX8ogshbpFeM5yCxrnnuwGHMqZJyoH5tgyRbgqiYWeCbEcLy"
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
