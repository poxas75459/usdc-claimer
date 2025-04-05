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
    "4YENbiKhy4aD2wk6dL2xEhuPSkdvfgR9GrStB9YMvA7kmg2SjxZSDTcEKCNRF4nUjWRyYnjzBtJy5VfJpZU7UnpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGnbiEPBYPsDbAxmXBAtTfvfjZ9tpCCLqaLEuqkMgN4oN3fTZ29RdCr2TFkhyyw5sPRmXuchqRczF8L93dXwjUG",
  "key1": "aoGng6jTauFhDyTVmzxVi8sjKgJfVaXSdiNddbqCRz1YkukgXsA5k6TydniSEnMK7XA7PFLBpiRDtRPyKMLpuBG",
  "key2": "2PEarAVPx9vqPG1tRZiXdMFQW9HhVGaa4Zbe72Q6YupjyMWKm6RgZXBgjRQznAXqGk24RQqkNHggAHf6JNBnHXiV",
  "key3": "2HFiAGgM8kH3Pckvdz1XwyV1bErNMUbfgcLV8gVJ2Dx3zyEoyWbf1p5FxfoCwktzXi1FTMhznVgKuoxAKCRqarvf",
  "key4": "5vwG3Y86FUyvmJrNuBV1nsbjz3q69TEjzU2Gec5DFXc1xp542KfAXihnTeWjxj3dzGqTuZxYyjEXca23gs4zwnur",
  "key5": "2yRN4eyXKWcVeLwHxrWW32qoBsRGqFuVkR3XoEc1rubrWrKcQZ4F6uB3P7VQX3pvqxT17wsgRngzCFt8sbE9vk1Q",
  "key6": "4cV5Pmbevbk4H3vP8a4FpE1t2rtWTHhgA9sLo2dfckNsUwRxiKBJivMC3ZWQWzQpfGB7Mq5XRfyMEicRBRNixFgE",
  "key7": "4jnUZgRuMeRi6kmh3EDamMDps2FFjG42V2X8GznzsLb3A4Fe6HTCbLpTUNKKPQcS69qHXxr6Uxqr9XGgTgVbgCTx",
  "key8": "czrkEfP6qk3X4jYrW7zTKWeU2kBtMbyNXFqXScjRTz9tGvSGVydWNpFvUGucs4wo75CLwq1vBdbRnD4wBT57mVa",
  "key9": "4qWHkDqzwiAoG5tUx1GJJV1hT5fDCJQPQZ5txnSnhnm1hcFMK6R9roewYG9t9dTJVE8cQyRaKhhaECen8yfSBs8h",
  "key10": "5x83FHsyCVqA7cuK7HeJaEfAE7Fvuw3K4n1d8dJHMUXsdiRTj7M1H35AcSVq8nwvUQKxDcB1bugb9WSNR2rwusDg",
  "key11": "3GR97WmovYdNCjDeJTUajk65cEoo89PYRv2T8Di4SY7smbxu9ZeNCmT7gLj1e6ZjanFpPhg9bg8VEPLnz3GeM6NT",
  "key12": "3A1PqHArr7mPC2HHV6dRvACYiAQCbhPd541w8SPdtwWZxGtz9B9RmLnNLvzLJHhWyfDSionw9uXA9jp77VfVzbVj",
  "key13": "51UPR6MLh92EMsDHEbaZ5yBk6MWEE9v9xGWUNnZvuN4e6pb67QSvf3wPJ1yrgceEKxPUJNckgd67rx3SyMURFNyu",
  "key14": "65HuqQruiiznbtcYQcuGXHMsdXXkQ6Za4Jo3psm5mY81cUEPBcgmnhs6pmxktAD6dPEFELYAK1F79RPhadCeH3Mz",
  "key15": "5PxgDBrvX9RD822kWwRk1Ppxfph3nGq7dXrwc8eNarTMrZEyQw2cKesQ7bdazJSSfCYgxmbxeTRBRtasY1QxLRgq",
  "key16": "9CYxy4bZPCKbsFcPbj3uqnxgqfezxvq4eMDUsikL9JtRBbFFMfBVp4GFSU2kzPkB1qfLvvyCdtMddZdAzhBpUEs",
  "key17": "4Aqq8aC5Hw83o7mPbGMQAqNjWDeF96rFWSJvKuG1gns2fmf8zCgf6kSx26rTzdw4zciB4MatfcUQxEBz61y51D3K",
  "key18": "3oF7iVGx6Z3SWCZbCTAiqWsnEUXjDH7pomADZdm9ijfgSWNQjePxhJHsq6emCSB6cjJMye7rQ2j1dMs83JgK3u5N",
  "key19": "3B6xmvBSjMk6hBMeJwBLTXaWujGTqaiDaNR1geyXVRCUmsCekehHVj2sKSpDWDA7Mt6Q96nsTMMs36Z79Fv1Y1cB",
  "key20": "4E5RS5vKmLV5onbcpkJZm9mk5cpSrqJ8iaPYXST54GisGnLdkTVqFjhdZwXfALDbWBzQpFC2xZXd9HBjafydp2Gq",
  "key21": "2UsoeEmXZE7bzQrqqRgosBBFwg9EMYq3VbVHn4Sy9L3wMYXpcRvBZCYL45pf8Z85SDVXdvUZjy3BD6hjEtHUesq4",
  "key22": "4sLCGLSmYW2HAH5nbRjcZrsVp5PMfGxYKKmzp8WePNugFcHpitcvqzgVAGoMSmpoDPJJBjfS9Pj3HYd5FxS4YYC5",
  "key23": "5ixBWdpaiowPWiomz9edVLTEMeMzNS2u6PmDWfijjPWM648CFxBp8QQCSkx11dKw8ccxvMUqUaSTFbnn82RibfNv",
  "key24": "5bMF1Waf7ge9Ey9paVLRzusEXLyEYKPUXzosgp5WPWYerMJp2aWScT1BDMAwcFRym9YmiY2dNs6RAw3W553Fmxqs",
  "key25": "32euKPX2bwi4j6MsU5tioFosTe9XJKV1T7ECViSaqfYwiL4EYKvBRPieU9vRmWpWTZwBRFbeZKRsvYnPkje9z3o6",
  "key26": "4Ds7AkoD9bV7N1XAZAUGcMWTpzEA73SsSW2PFabfYhjrwFhiWWyWmo3xvZHzv7vJMB1WWNyTsF4w5qAcT2U49Sqx",
  "key27": "2RkbwmReKqkc3i2fQNft92s9xw52gzB9otFH5muk9buPVDLug8bQrpz9pnsZHekui7BRKCrzjAb2kb4PwkgMj8Yv",
  "key28": "4QjAPHKbXXcgXHEnGeGbJSQqZ8BD7EgTDqFq7VpzEWtg9FbV5spxESnmBVPQQknWagfDWMLGHGscwgyUD4XgsUaH",
  "key29": "2K85H4sECftXNNDvQsqaFYaEkY8oLcksbXmJj7MiHnkHiAWBM6WBGfjd3YHAwcoNTzhZ8g2GBZ1SBwAqA1WAiBQp",
  "key30": "5pJFhDH8665snjq2sWGZDAuHJgC7RBBBXZiycWCHcHytqBXUxmKu1MAqRMhHNcRE6mRDsGf8BV9nooY2b8XbDQEg",
  "key31": "E4iDDtR5NWLJoRzs5kN8qicKcFg8ReEzRdckNzQ3M5KmiP8KamCE2owBMosqTNiDVS3LiMYDXBjwP9pNTGYFwcA",
  "key32": "4HywgnzovGr4Tskcbvhj4Ar9RymEqrxHDzVxtTuyFUiAXCPKhbKDxx4QjbG7bdK6nguYaMqzrmXrNXfktUkeoS8u",
  "key33": "5xQxfiMW9d2JHkRV4G7YMt8UHsMxQGiUVnxkSPv48C3wAqmJwHVUdbYuymP6sa2S9ghXUP6A1eMGka2Y2br3GBEM",
  "key34": "4kjLvjLvhf5AZ7qAj3Aa6BNA7eQkJoBzSeXmenMXcV8DrwVEQ95R1T37wRqVnoGkzLZt98DrQyirpD1gzTH7b6eN",
  "key35": "4n4KemcPL9sYE4sk91aRByXNFDaJpdyvnyZthwm3r9VSZH2qapVpxLqMeYs3XNJCWRuUEZMLCXJk2bBwuzCfnSna",
  "key36": "2jeZuYZNvcJoECcJUtzomhK785NhY26Z6CLi5HMXf9J5nbULPNZDfc8RiGhMj9zKrEWe7EzDcfz5meez25qH5wDK",
  "key37": "P7P1djQiNBeFNH3ChN6ViTdkVg3Pvm1vc2hDP4kqxAJDeJZK5aaqx2xcSd9yMvzrbxPUzEvFZTAJ83XW9cP61Ty",
  "key38": "FrGxmwG1yqKjZZtkYxx4eRs5hJUSCiY7P1wQdybkqp4WoPUc2QXLLkCxAACuW8j9971BkW5bDKPhfxaJhRLsggc",
  "key39": "3BFbygQ44rZ7rHhjV4eu2rW3viZ284uuJzGMf1FnkkP4sqTLz8qqHNzQq7dZGK5E72nGzya6yAXdAraRGFMNBevc",
  "key40": "4oUUWpMm6GvVzQHfSh5dmzrySd4RyahRj9oMHYt4NaM4SVtsUYb6A1VzmtpiQjjsmh9e552NojH3geECsVVDHup4",
  "key41": "2wVfQn1EPBYnDbVPkcpE8LyMm8UCSg41G2SMV4vHBcnVdi2r9VB1Eh5NWGEZorjVqCRgMvbvbcaTBGrTniqCRNQs",
  "key42": "84YLTqmGbvxRhjCEi9FEFRKC47EGN8UV6aWmxzv9QGNK379STMHCff27udQjK1iBUtMRsCC2E7x8ef3YR3o7zMT",
  "key43": "5FXASqBG8mPNhZY2SEFZqVJbNqq6gYfcoLswgBQmoivYxYofaYaGefyUjX2XjkFW8kSrQTWd9MQb4eeAHpBtcem6",
  "key44": "4BffQikv2BbuzApqP9C54Ts7o1pcbtHePDPA4mtAjw64BzCRfxY5Xn9VZhfuZRsQbd5hxh6c6mmatft6bikvyEfw",
  "key45": "Y5BY8pTNyg79YUtTcu4d3Z7eveK3LJSBnZKy9CkAAu7Cz8mKwxkn2dm59W2k7yCpKGp6ykD5WTMUVEfrMgJmvgt",
  "key46": "4AwWrPo7xA3XvvLQBt8NF9mWFNhsCCT2B8x9YKa2C1RqNzeQpCSyMzDKru8n7iRwLDENUgxvy3Drd5SM88xW3BF5"
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
