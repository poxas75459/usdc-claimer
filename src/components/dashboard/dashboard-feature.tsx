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
    "2ik9svkTMQCK3KxLDnTZQgHD7HNA41DBfcpTew276gH3LjU4ckqXHDG585H4naW5yUfP8yf1rhm4NVEh2AWwfC9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdR5rQZLbavTFTJERRxRzyG9eB2GTHJ4uKUPpPEo32twh3fQMKJ1RJCSycF8WW297V1UutiKZAMQdDuNHpSmtbC",
  "key1": "27BrNLFBrX8dxMJQ9t2rzdr1oRraKiFK48DdWHotMkvHZPwoumuR5oaDhFTJMRaiQy4xBxKz2L8EvviJDhfDZpKq",
  "key2": "4AoxuwT2QWkAkHq4DsZYh6ge1yMS2WUajp6PWGDRi1SsvGqBHR5NbMB85eSh45icdJgyWr1hi3CSNaCbJahTDpq6",
  "key3": "4ryiJE4WdX6BfhFjiuXj7sUos1A9ipPx8D6gZKd2wEyX38cbCKq4Ed4uMSBBiwTzvj1TmYkTcHUCvhQmtbSo8PQH",
  "key4": "2GJdRanKBi13NUN4U9iNiabTUGwVnkvMgdJStAqgty8Gvv89mZnRtWEKhWEwNgAj4fkhSkKqPfaeDkvzz3a4g53x",
  "key5": "4vfRQ82XMQctRAaUqWAK2PMzCM8LnPgapNH1cKWawTZSWa5HAuLfj9TQorF9RvnvgkKYwosbUySwncXxyiAiYfds",
  "key6": "5FC4KWyUuYRpQvg7jespjBfW275tQgdWh2F3ssj46kzE5oP1exTtdaAx6UMYup2W7jv1iiN7g7iV8ocuDVyFmfgi",
  "key7": "2ntanXzjVCru8yUpcQmsp8jA6s3sSeFBWM6LvvZotYuAVVoiUVCas8maNVKLveuYpm1tiKxDw4QoqS8PH7LQNeA5",
  "key8": "8udLETKfgH5FwYiDEWQ24xVkFGmWDKcL7jESEGJLYU56ah1wgZaPR4x4ZsQSYA8CD3kmCLtM4fynVktYNwb1yaL",
  "key9": "j2q7q4gXELnbEgrRMp9qBrgSaDbw6xHRCXBy53JGMo6xqJjLjFUauoTcKXywcDttTiCC86w7HDcTsUYbgFeyvDt",
  "key10": "2HynaeDLgjeGLnAPtiaz7LuauNBautSnVTYYBiVSe5mhKu9ErUac8TzXwRPU9J9fUSZKZZTF9vL5qoBxMXo7QaHE",
  "key11": "35K4VmytysASqPiBM8S7x29y4nYESQfDzyWyj2YAWQQa66RYbWyVyVEm6EqUp6QAXeB7FBTWURkSv9WaQT4LXrWF",
  "key12": "rnF2fakWPUiWyTWYRuPHpSGZzm3g4DKw48sAvQgd1rquQzyhB59CB7X5PNUfqYz4naF6krr65svkGSVp9NKDbGK",
  "key13": "R7jUWCAdrhT3NiYd8LxrbGerZn1zCb32w9kDXBu7wtfacqcP2rHZpECuyQXTC96ohskuAazd5F5D1d9weFBncS4",
  "key14": "qH6Fwirbg82qVYrYN5cxHnHrx1hpoEj1LhY4Qbg9LPQBXzJjsdWnSXjDH5UTw5t2mQH9u2woUVeZ8hdKib7JAuc",
  "key15": "3EGg9jv1rykWTFVhqenVmvVYzdzTL84pe7pRf9gTmZ9Yg8TAA8bU4KSEodFz5Nv8jieuGK9tvJsw2uTFQdX24DwD",
  "key16": "3QzW3CnyPfKg4JELFT2AXAu2nf1EzqD63eSXwD8zrVMYzyFjZW83owHxUk79iNYJMi8PeWiQzKHKoSfMXAkh11dG",
  "key17": "WeBy1MUTA1X6BVkK7Cfkrn43Har13QrvGKpJqbbHE4N7SjrsmmAjZEL4gKbX39XYAQsTyB8D4NUQDA5xuSS1xNQ",
  "key18": "4zF2jYxUEHS1xuvT5Ufpuzx5eZFgb1x6iQgCRqdoJfXbtoFNYgL9o3qjGGL7LpzCR3UMztPa2URQPbuAVgSrEKYu",
  "key19": "4KH1WyAwciK97BBXqNuqx5ZuhHWguukD4VXnfVj58LGecSKkQ83tSwPU4c6oSMvJj3a8b9UWzgLmgdskbqiaqEr8",
  "key20": "tHHzhp1Nbo4Qp3Uop81dFCJYdHTVkcTPHnsZFMRhPLm9pWf2CaHFYmf3XymUYyAoV5CLWMso8oDmvsbppTTu51L",
  "key21": "3BFjgfpbUG9spHjWGLQvE2xjKCqLjBgJyQSrnGCqjhYRgz95WuaCf4wSD8n57Gus1pYbrGShHWai3HG1grRzagHh",
  "key22": "4oavc4o2kxWBdpf4gunT39bsPM1m7T1L8h9PAESsokSojTk1APfcX6vUYy1duPNhEtFe9jYXJwXgL6CB7aM6ujAs",
  "key23": "4LiQAWxy8Nk6HDrPKhwM4ViauvhQvGzMHgDYz1gsKSEqrCuD8TMduChTNriF6TocYfjoHjiBVdenads2mCwVJkky",
  "key24": "teyQurabN8bGZMnbW4GgtBYz3d15zCkTFFDWatwdBMhCxUeWd3ku3mtV1U7j2UvntCtxwefThvZ2rtVRbewdg6q",
  "key25": "4sjgYdxCUDrhhqLMeVsnRYHLuQJHfqMot2twNVFbMVWeX61mDUghQkJy8wn2Ye5edqS63oo5RDGXBWywNbPjkHof",
  "key26": "35LfKJkfzPMxFZpfyJLP17SXumQj1PUoBjfv67hN4NzMPiUFdvgzwvxteMpvqbQq3jXhS1JSHYkRkeuJMh65B7tf",
  "key27": "4Pr5ZUSdjEjGdm6CPRCVb3wyV3FQMa9X3SstLPcK4sHCN29N2toe9S6A6jVEjzesNmyfPCr8EXEp14bDmM1H29db",
  "key28": "33e7HZfVye76rwViyBPTiqJjsEGoUbJxcbrX3jeYNrvkw1gTu2b3Nu9sMEMEgqzCNsJPjErji86GdC9DdF8Aeikf",
  "key29": "4jPHRpDUaSpUq5yqcyQ1iRAEZgRfmRAh1YcRFzpBtjxWGQ42FUUmq3urUPfTEYiAKbcdJ1qH8Bp993hSPtgCszn9",
  "key30": "2a4tkd3sRwHNGEzK6drftPw4X2hxehcfpU62pCMpGmxE9ieG16tkAFfRrTZDVZRiYrDSAsWiYgHEvgZYVzJpjig8",
  "key31": "fJvkjzByzeTotfhdaDtcMq3TkNcCVRRrCUsdaVjruJkMX3kmvLApETJhSE3dkJnMjdiRWTCyu29kMJyYoB1bHUg"
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
