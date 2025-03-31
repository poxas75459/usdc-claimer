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
    "5xXEsSqavcC7HSd7Yxk3Upua7pyrpRUwURxvBX58iu1PYt9bsQTVy4uknJkSyMcCpuABwxMpmHb9RuVwWswwYqur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z3DV5JUzxGwuGX2FzZZhpaCUzyL3YULS2KZQLhHFWWrTfyfbxtAJ6DqSuZr1ZA1Ebjby2NvjMMfyoc2LvZTu3Uv",
  "key1": "3yDgbVUrTdKaBPSdr3GW2wu7aFViquFnJHyoutcW8Can5eHwCojDU2zf8teZchv4tLJL4wqPacgXrc2Rhek95UpW",
  "key2": "4MmpMBkbMHJp58mq8qBBWrwcpQZGRyxKGvge6XkfSETMXNKx2ymP7SYdBcuCcU65fxmfCFYJgzZj9JAMQbV1qtcM",
  "key3": "2QFzBTRagEtBnAw5xgv7qhRn5ohcv5gwC6WVHycMu5rVwNk47RiswxvtaYmdr3hV4eemGs1NRZ3Ss8U9Lr743eqn",
  "key4": "27T1tbQShvGp1K2JMLNv3qtEzYcAJKckrHRCY2K5NgVsocaLLrcnNmGEJjkYGMpASb5AyresagMkrnGZjEQdpM71",
  "key5": "pp8bC2C3EHpHBqUBaUzvUkoFdE9zPKTf73mzLmCgVJQziQ6en3AmcQyposynoRrZjGAaoHdcmYbHCyHYwoRs9ZW",
  "key6": "oRea49VpR6mCXaCQMpsbtDyRBjcT9dGJGs4ATpxmTGXNGPJoy9aiaMwr7xb9xhdCzAyWehToq6NFEjxJNhWuALZ",
  "key7": "4PSqihiUxKxvDUArm1aY22naXsng5UR128aXGu2mMoNFLTFPLFhdBfLr3uM4nEDoTz737vapnXQck5C9VSawad4b",
  "key8": "4C5oZqwJsH1SJxFyeEX2BfJYkSBRMYswKH9WS1thXui2U2spHAjSppRqzUryXt2hinhvtvTghEvSGDoiEQvoPNEm",
  "key9": "awp8Dbg26k9qFHLaymquso4CLnPut879P9BCw4GQZBh5Ym1ZdSGgVh5F9UguWJ8kVMkipm7QdnPt4gAZF7fu7MN",
  "key10": "C25fJATqk6YVfo1ZiCkTqyVP5HBKSX7mcxfWBMAPbG7Y9UcxoEd3g2T5Afp8jPUGaxw863EXR5mynPncSwXFjoZ",
  "key11": "2BMbC6iNJX6qvQSRVo2EaoCeSxx9GGsf3rujDeWKYySewGTkjc5VPurBConK45rR2jC3RWdiBkjnbi1MYbFSVHnd",
  "key12": "qmJ3FwPvoSgYHGbewZcBwZ5FJBme3sp1u7o2dvB9d6xdC4qFdvx2GsQLoWRQ9dKjTz1gNS5qmWpnUJtcXTTC6aE",
  "key13": "LECkeUFWS7U8MRMvE6Hz153xU4rkQGFfwjDWsWwVKN92ZtgkuCxwDguzy7UyasEip9T64jzD9nj3HBRky5M1WvG",
  "key14": "4zMvZFPdraddrv5oZXQwTRduyqjCncHbXQiNjUj7q1rhRH5r3EVtmhLQYKU7hR9xHSEmPymzBJQWrUsmxV9gUTpe",
  "key15": "3p7FFxP3arT5iGe4P62BNAje27hY5uegZ7VZNMKtyLYpfdHz5EewNnx8zg8vXTTq2m81j2wQqPgUg8A9c8PgQrd",
  "key16": "SxDHBfxFbw1niF5Rmw52QcqE2H6kgxzCch6GxhWWG37kF4TCPvvv7bM9wj7dDB77m2NtxmG5wZDXMyQS1Q4pUdZ",
  "key17": "fzDotvqLkuAhKdHg8ngr5Fwkmth6o2SXGoBu1vA1HijmEEfGS6UK3ezgoWEYNK4nsk82m16bPKZm9rwjh345WxY",
  "key18": "2nUaZWTyRdfakNF8x67PD9tVjZFJY1AFr9NQE7yET9GLi5FvUxHmec5NtPRHNm7hGbzB24eDDXev2K32cgtkdWd2",
  "key19": "64wuRz7DVu8c17qKjmxqXATBkaMNpjsdVF5yWPSGWzp4bSS91KcSsiiDA4uqoseBA7UePe8HMhebaFh62W5R5cP8",
  "key20": "2Y72xxH9qjqgSQfc7RasnobhNJM3LDyWCuGZN1ZmBLMBFvhCSepawTYmisX2Udqzt7YKDNn5hd2xsTwPioHdCuZk",
  "key21": "4SXhFj67EsPv9P9QNqA5QCoHtNLCoszzCGnUzf4qAiaM3PBvomRNruMDtG4ToUkR2NmrDkKaB9Vayxc1cAn1JtEd",
  "key22": "3wTy1GD6YybTzdStSt9fJwaGxhkt8C6YhjxKLrSPCi68sc1k8uzc6HQAJM1Jg2gw785oBxb5fcVPRGRp4yZTVtsX",
  "key23": "EkStUHMDNvwmUsBW5uHWkUr3HfCvFB6F6mwCbBHLoxngw1QgQBwfrm3YvASb7DakGJrUpUXe2DfJcASQ3m8kuFh",
  "key24": "5oXGELZsk9ZLHgvhXp8uZXvq2hc9uHtgMWGRP6LJYiBsauc9oFuWnDFgte7koFzYMT6WdvEJNVNzSaPXp9doDH4c",
  "key25": "4D9oXazrvatawMQaihfdTuj76TYoVeTGNeAo6DBy7YhWaUnmtdu2NBwH3F7xTZpKzdXNyb6uAunVsaDTRVxyukv2",
  "key26": "248kX5ZkpTVnbQgnoXMyxWAfn7wKizaPVaAfuQmKQcGj7mGUefDzAsemoJK5UuscRkJ8h4ZuaReCmvpu9BBvmHPU",
  "key27": "2RfAHfZme7kzrMXXUTvPSNSdqW6bqDqSZsLMX9yw1uZAs4wHJisKBFFQw62S2E7TWGJW9EBf34GpddJZGXCRxV2S",
  "key28": "8ZmwuzW5vmWeLijRo8Gg9aXXCPYs2uZYLVqYacRZgw29555rAk43Tk1w8jcUiikshwbV46SfuG7a2GXcHyHio8W"
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
