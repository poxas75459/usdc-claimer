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
    "4JGnrAV6BHS2Q9K3fHohW4E47b4nEjpv5tRUWsz1NKGFzQsBXCNFuyQ74KETAo7jm1sdg2hw6dTkM4U3xYanJ5AW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQpeSz8ANupd5ro68zFmkpayaxtDVoAsfJMvdN4HaUp7hRGcL1NsgtxgN9s5PrtP4baXc6imcVKHF87GPKQLPN1",
  "key1": "42DWnZQzSE7kxVXFRadKBCCsE5BhG1dhbX6EgKTD6kvqEwb1KaYV4ZdV6Kf1tH8SYaUeVyL43bmeG12wbEt5tHpE",
  "key2": "5G8ExNGquez94PdKS7TnQJPsktKPSFpauQW5gRL1ZXexv5heXea3WZiznkmuqVmyC9rApfJpZdLhvNhbdbVoP3VV",
  "key3": "651SFwV2Smzqs8guDEmY8Yipwzi9o5gdLRNEQxFGQfavkA2XsNcKxaS3YhvENBEr3GZrSTtrGJScPUhQJB1hB7jk",
  "key4": "5DDj3ckAdVYnBNKH5bQEwsbgvT1rj7bTTc9fDyah8UG9rDrEjs2jR6kXbJsbgQiVaQyfpMksXaSn79ESaSDdTAdx",
  "key5": "2F8scJdnpYh4Knj4EE2Qef2vUunn8yU4NBT4yiQCuf7vWgAPWVcUAwDqLmFhC1Gd5GC4uQU9mLCQcKZU7tpBFnBH",
  "key6": "s9ANMtgPnozF3Pd6VpMJFXXqT4xRatfqCnoqgofB8aCY9dq9nnMb7VWiZeTfiF9nVuY347gnkF3PZN53CwRvFFN",
  "key7": "2Fe6VM38hZC1C3GaeiQga2N5YfUDyjwqo9w7uDD26e1qSRu3sMUoCxmHUi8x2q6UQtaxpDXWdJBX9TpPB1px4f7Q",
  "key8": "ZhZ8iRSgjqXaqLv2utXTRj9LpYbdRYwFgHPeWakcDmRrrFekWXdR1fmZgtstYdQgqUK2SqBGjRmdrfQwmavQ9XK",
  "key9": "3jo3JCtD5v2qSpddckdz88GmdQCd8CDpK3xecEgJZXaYzTDwdnG29eA5CjctvDTUoCDqbxq9zMT7aNiAMPwiGc6Z",
  "key10": "3GfPNTzQ1cGJLVswUVBgNTWgirXnoUVMEn2tuXiRTVSWRLNzSJuVcvxDdKrhxtWxjXRUvvwCpyAxEgEVPVcNHeYF",
  "key11": "4qvYBkcXeNRaRUBNLF6BKJjwdMmMkSJxn2ktj3dAvFwwsiH4WKXsVwMRayTkCnCapgorpB7SWDDQDjE4gL8rAPUz",
  "key12": "3CV9gTKbJdDCUxXgpJstQaup2TjcULYN4ZwFXtsfGXUfhiYB4wjDzp7EUNuJiqo5Sdfz9Z2WutYDLLRo5t8J5QRP",
  "key13": "JWA3bGc7nVD4vrcRdEa29fiqNia2x8jjWo6b4LEjCGV8GU7toNVRNCf1XWF466fkFThsms6ygjYsE6wCZi2GzBv",
  "key14": "4rUx4y4Kmdx9P26Fzeog73jpy6FNBFszA1c6KChPxZNMfmKtXiKnG55AfpLSvD5zfyMHdYgxBcbZzv6Adk6QwTPK",
  "key15": "2jNR26gJQ4SpHp4yghVCuUtL1ETAqqk1H7BMedFmXXSUrBwHCHk1gTXRshnSNvvHWSEneaEwpPZMh5hKGC1eFXPK",
  "key16": "2Bz5VFCCrMtaefdSsPfUTKwiRt7mZUV1rQSQXmk4EanEgXV4uLa6MnrgNbuZUhBuqffrJmfB3hAndhQN7PUnYsSq",
  "key17": "57SZs2GSoWrnLXB8gPwwjTU8XKk9T6GPUfnvXfh253dXL9gLgxcv6aqS8YeopP5D9D1Ph2ZqEhBL5uUdT2SauBdM",
  "key18": "3kQZ2NhFHTb88FYvQ4jfxrSKeo2XkuKW5BYMehsAWxZq2Jif7vMo2cavSp2FTjHQuKP8hsZxbWagNfMhea95Mu9M",
  "key19": "FeLtKQ83zk57ucHrwx1yVUfDgeaobKXRcfeMUpM8eC6fJEnauUKZhJy1ibSwGPYxmrZdfDX8LR8a33iU4A81c8M",
  "key20": "4jK589sQ2XYkdcVdpUy1gfRXDwWqVmQ7JEEMAPvb5aDbohtChwRsaic4onLMM6wn3uqmgMxqz5vYMqjeck3vwxFd",
  "key21": "32v7J9DAMr3xGwJxooNHAkGJMDJrEDz64sCWKinZZEs4QDvv2NMHcueBW7mie9cRSMpnEsbFpwaqaeNCm3hArNTR",
  "key22": "45QhyPcxkWLU6rpvPPZRHoH9EvAdXe2kpvmmHQWi5zPCti7AjnZW6TJepPRfNd1DgMkJgB4hApCEbmZQGWQPxGEY",
  "key23": "eHukoowxgk2MQwV21egNe8c3pdu4o4MJULAiVka31dXrX5gxniqdzkKC27AAfLbsH8P9pQ5FPPpEbrLkkWMBwDb",
  "key24": "Q6AmSPjdp3sTx3vN4StZbgvBLJWC5jCdU4SPQw9ic8cjDBPU3WyKs78f8JJQKFSBmRWYGaRG5VGQLPfMoPofQXC"
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
