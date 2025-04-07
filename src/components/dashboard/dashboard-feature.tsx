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
    "2fPgnyDTwxzrzJ3ts9xm2MrCJzBsuwymSQtJzB52eCRDUogmS6WY9RE2Z1itsCQ4HmpLEAVbk5UXxs9Ff7zUGkdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vU1GborTBNzHAaMr93L4WTbCA29kAru7o6zjEYE9T3w5ATkiiH1beRW5cWhMwnEKVmSqPDCymY8VwR477Hon9hM",
  "key1": "5UzAiwHgzqPXcUpk8peFDGXDrhwvYKYqGym6pxQsdMYcFbbMzxds5c5Chnw21iXGzByjWQyAM7H32arRhRde6PrZ",
  "key2": "5iDs5Y2HabgpwQazP4TU7oW1cS8hmdkKJerQ9Kxu7dxM2fLyrWskq8jB3hrFLneK1jjFcZm5F7gtttLaX2xeW8fG",
  "key3": "5c9i3ZZYgPtP1iGAJwf3d5G8n8JKZEddiRdbCVg27jMRKUC9P7X5xcj31Mq7Fi94F5tsh7KyoBEkrqc9GQuabvo",
  "key4": "2X5oSFHFAe6qkY8rb29BGzkrTpygcsKDZmQseaPUzG3eEy2gotMui3SzK5AxPEbPDPH5ZZPt7YNst5MwuW54G7ba",
  "key5": "8FWeVLDW8ZmWx4VsAQRgZZNsVmfRZZx6fAYvkLsj87MemFK2m134XTZ7bhruJyxNnrZrqUpLbCF8VQE1y1irkjt",
  "key6": "txygw1oCer2E8UfX6B1dxC7aNLzcdW4jaAsTvyWbYgf66RvUz5shcKxRVYuiRaUpwakMPsdJcWjfWx6L3iaE8ik",
  "key7": "HgBxGBME4FpbipHCScsyrgxabg2PnGbC7KciCUnBi29nnZUFVPbBJkuBQBj9Dnka2kKEw6Mme8ZhtJyiJQzYizB",
  "key8": "5MFNoGYcGqSCxYiTvBLPWCqTQ46GPf3sCJD3m2yTx9Z5TzWvDoErm5sn6f3i7vASAATzJYaxRsXZ7TdyA3nBtnTj",
  "key9": "24xs3EiYEc56ccmJvZdA2sz5tTHiLeFfznD6heRM8UsZgoSevkMb4qYyZj2VWNZJipy2xmdBXh6uVZxUFiSXpGZe",
  "key10": "4evmsLLLB3BRs5cnrJESbotH9jBX4ZnkvGzBk59x7XsBq3G4kFDojYZQVb6UECzvFhpx8q888NV3ynXMLoZtJ45r",
  "key11": "wrMY2LZGuKMoSUZ7YU1B1faSZifo6Y4iYfMCcmqc6Ff4tGweq78SRBtJDhmzTH3ZPUhHCBVeL4EFna64LtqKA25",
  "key12": "4dHXpVTr938AqSZnBCu68b6bBSMTNQp1fSVSm8S6a2xggWo4AE9QbJTEvMR7NYVBfbZ9iVwT96X4y4xvsYQJVd8D",
  "key13": "2dM2wH8aq3YwqyNLT4EFcEBg7AgCmzrfnpn8FocfKXNzPcx6pnfnoXWpy3cE9o12hM8WzgB6YMoJd8JefKgsm673",
  "key14": "2c6Q6K1SPrQaTcrM6NDTVieHK2AW54p3heEeHQRPjt7tUkztKVfDFGqJNQnz1yQYzMaW5gQyEJJLdXstWQPdkERu",
  "key15": "2p3NLmQizsDEmuGaJa3FiLikNzw7koGRLoWhvXNdQ1Dtpxw17N3F5Lo7BtKDFcr8try2BwpcpNvCyxf75rHhpnJg",
  "key16": "5Yqr5YGA9fXuqigzG41P9V1JCnucfpBZ5v4y9WASRoVUpg8taJrcCMggtBd3Hhqt9H3sGu4HhvCB1czbrbCSj8Zh",
  "key17": "2VQWSQGfUNSDmw3twENWNStgVq4ZrbX5qcoaCRVN9bwencQPA3NkSf5nKGnWzscDAvMbvtWCR7TeWgS4H257nBEu",
  "key18": "2JpgwpRFS2QZTxUXMSLvejXtk8D2XpQ3LG8UXcZbpdF82ZbMLAJSbdMRSQgCxVZJGfeYtei4tDQdqUQo7CA6pKsa",
  "key19": "384kvMWGyZLBE4yRNcszC1976cotJg499Q79UvdYmzdXcR9ygUMKTbjjkkedmj9RbhQQaUa1eMVuT3VkBiMyguRo",
  "key20": "4f97awvJycitFmtjcg2FxbBEb4eRoCBHEwQBrnoczGmjTxSfBhuHK28RkaRfqEEcCt55xXwkFErcYKktV8YAzefj",
  "key21": "5bmuYAVYMcWLZw53vqrB9D5AxgPTuuTQ4tkwrTaKsvNdyHyDyqFn9Yyxw2MSSKNV7ngk5rM9TrDYT4iPU1weMLbR",
  "key22": "41bLKWwLcfvdyD9ZtodZnrTBC7nDYK83YN25a5cnyRe64YW5Jirm8ucaZi7mNga8wdpqHUcdSHhVaFLaWLWSg4cQ",
  "key23": "2GLQBcbNoR6zCdZ9vSFZeQGPvNLzqtpMRBdUeGw1jEFWAk889x75TEM86qd8R9nGvTswxDTVfJf9T52Zf47ZJHm8",
  "key24": "5mFgYCo22SH8iD6kyGkMPqXtxHMu33NWXg2p7Njn9RXDWjZq99DD54vQtBU9CRqq4sxKVbLopascBPqWiV5kNVr9",
  "key25": "2R5TSTAQ3h1TC4Dtgd6fq4LeSzVkuCMpBGwHYTdwCZXdA7bfnT4CM3KKGa4YXwi7XKnqjSdp8TawaMApPW94YBMB",
  "key26": "5oetmZUuFEP5niCHXUeigf5S61o7EevBmjYjAyS2uYB4HapcexxpqzMGDgwv2b5mNiVsUteD15JLiETptj3GYzSg",
  "key27": "4qWk8Vg8mhf3GCKi2uPZMT5pMsrr1PtEVfEVKRQa8suhQGiR6kv2H2RshNGmjEWXuDsW5xfbHoPesHx8r45bHrM9",
  "key28": "2sVt53aex7rXPFnLqAeF7juinYyo8HDBFnukKWFob2Z1Ydj6ysxzXuCu5FrNJ1278Ah2hr9gZJwHFTzSgWEjnEVY",
  "key29": "5FwYWMxqdozaw5MXrbyQEzY6mMUMg6m5ssWiRsnd9EMXVvXYAfoqBjhXqT9WBpbknnjAe9KmxMsdnxhk4EVKWegX"
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
