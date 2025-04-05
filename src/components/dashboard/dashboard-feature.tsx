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
    "2sYYn1K28V1Ponou9rssdPvER8vBCUWB1He8WZDUPMTgDWtkNjz5KeRQNRrJ28Xxhx6oMsNp21z8P4eFGQDrVVLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dgxh1c68uaSo3pSxbagfp12nqXfhLTd7eKnL9QvrzeanpsgSdTb6QNfA2XaU5CbEVZgsPqZVe7sVrschCTqMg4r",
  "key1": "5GMNtAdYMHjnhP5yEPppQrtnWxXKGWu2dKjvfEfrSwEBYrBcbNSp7EsAqbH49ydhfqMaShbtBZWShh5ineqXA3D9",
  "key2": "2wVUCAJWKHwhZReNT7yEYtuj9uTqThwKsVxVmA6BmEvJ4GtFFdN2YqXVbwKHdMFGZgknNWQtqbrfdKMUNxco87C1",
  "key3": "2jxfp26fNTVBYn5pXyfZReR2ic8FX8uzeuMw6RjvxDVhzy6JaPV2zFFxMCwBC8wnBxTV8MrVcqdGAj1Tt25PjAAc",
  "key4": "5HEH23fGmobfDAYPfgDbptAACayVEaQtGKRbw16XjYvG5w9swSF4wWYZbp8HFEKGvdNJ8JGU3GRihCQEDyauvWt",
  "key5": "4D5anrkgq2jxt5h94W1rd78Y4kBTZdiMMFEbmq1pJLwAgdxMcy7N6sQG3cKr7hsV7NvN5bqcAxCGwsNgXnSXfR8Q",
  "key6": "2QjexW3joX65Frf3hQsupCUuJwatsHkv14T31LXezQ1Ga3gnm1pTbGyqgdUpsjUP9Ax6yh8fcJpW192aKEqzLTB8",
  "key7": "Bnx1KXaP9wT9WDm1SFuxqAFjppiz7PeNUsFXGkRRyyDy8cRhzH1PBRBiDnxUnkikxTHdvZb7SMiEDsBeA8NF7i9",
  "key8": "2Rvh3Rb183tcjZDfysNe4DZxpHmjnogGYmG3A5gexc2EFKMptosd9gGugXTKezLXxLVTY2SZ8CrUV65FmHhhtFts",
  "key9": "3787jM7GxYijB1E75kvcY5JzeazPVDFRAE614tTfpxn8zfVNAtBQeVcxSGNzgtmujyzAvpH5qUj3ddHyQo71Pcya",
  "key10": "3B7x1GDy1KfCcXu7scRZ5qzc6rrGm2wwhokfEbvBm2YUBsEGZTzNrVW8kKhFovAnUxhdwZFmjB7exuADsJPMgBLM",
  "key11": "2StJbAdHkVK7FDptT7zTHLQvfan3ecbBcX7fckjiQeWabSFVVuYwCGawVYzKk5BTUGG65SjkbrfKjPFjJ3owbMLD",
  "key12": "5dNgphXChvwCZ8Dupkq2ba8ScrNds2n3pz1r3hM3tfrZxMeg9bgGWWZqfsjUYGmFg6jyN1htye9SmVWb2m7yA9io",
  "key13": "3ZTTez2zdxLvYfhfT2J3S5GJMnWAv9pnkm843UFSvaJRLnSxMcx81YtU9zXHxcui6HAn7A5LVp7f9euQx2dfY28V",
  "key14": "2RKRNaryudnGfCZYSYG6gUtVCSGRvVFNVe9A1RfysshJFzdzbUa2ryJgRxK6s1U7g4JFisTiHErFpAGb4fHax1no",
  "key15": "3PPmjTDjrGXJQFrxRiudBFovALFoPf8tm1o89AbgDyrqZWkbcKEd8Y2ov2UyH7DJbzVcW16SMJ2rXP9teazB9vZb",
  "key16": "4EfCHCGUG6aurZQV7Qw2w9a45AkbyJKaqsYCLimZdJNzpJMDCNVMsbWDA7cAmtgeud6kZmGjg7DrLZsXryTyRMYU",
  "key17": "4FTnUntHydQExvnqPWhMsnotbU45UN6Q82LTbXijUDGL2G6W2tB4NRcsQNE8HMudTtfVvAKbP3Qxpe3wJmRQZktv",
  "key18": "hnZTnNiMzqEivroNL7RffHDZ23qxWA9pHzUW3d61QYfS24eEJTx2HbBUwXrAg7XMJWM9xw4rRn5Xp2t6HodhWYa",
  "key19": "2GhLMiS3BBcFqE8qabDgdZrMv5zLpXRjNd7dmWp4Q6UbkibTFSKHUwDVP3FZTexf6M2HLFTCXFLXZCHtzF4b9zxL",
  "key20": "Am5wWbvTa1HLyVpFMHRbpjguxWv7A9UCsxQqPKvLmPCixQ2tuBM1E7FSdJLRjsDNDxHmaduPdBZvvUke6P1sbBb",
  "key21": "HzwPnH8xbD3avRkLWWnUcoQRg4fvb5NtBf1FqR3MCT9jXrSCHsFtKcEcaz3NWVf8tFLiT2HLMDf27ohbFM2m3ht",
  "key22": "28AuiJzha1aZArBCo3YzgKDaEprEMYMJDYY6VaoCKmqBSJGNNbT3sEZyg8axrvv6C2JxAMyAduSZyv2uG47nPBea",
  "key23": "4MqwYzWfKV58XiioZErvUxYn5vrxyERART9z87rhuvod5hYBa2knztWmm9R83N2ui6BWALWT7WG3hh5si5geZ2Eu",
  "key24": "4pKnMEvL8UVxK9ctLQt4A1KvKiWspy6Eib38uLiNKxwXCkW4voPoPUpbA4N8LLzj9jE973CSpkz8iyKVk964GUth",
  "key25": "3xeBVH1QvDXUFgH76WNvcjkYi1zzSBdjEKJj2CS4eWe2SyBLKafQuAqnUhhWQdv6h78nizWN7ie5n2BYV3Yankor",
  "key26": "eZmvBwKVSApjpfudRnJcGCQErEYFiYem2W3rWn6SDQ1WZJmtQBLiyfPZ9cr3CDrFS9KWXdSqm3dTtVZQyqLLvX8",
  "key27": "3e7AexSDBg3t7QWR7n3UdpeM7BY38aaW3gRwqnxwgfSfBLN47kZxLrJdjhthJHBdZNLN8sYuSqeReks9SYgK49ke",
  "key28": "5pGtYXiJVYMpxsSC2NfB5wvUgMyYVfr3C2KTkj8Tu12LZEAQ3G9uVxBdv6PUoNHft6oRA2Wigr759dGPpWVGJv6c",
  "key29": "4z3s4dcBxzYuJrrozMyrJeGky24H8PaWwi76xSdqtQaF1zSyqUgiEoevmoFcj9phB4rGLiT9AXHGVkUF973uCLqs",
  "key30": "2zQf8BbvV6YwJW1xgkZXdYMYqHRrrKmomksn99WrMNiVKtk4a3nrhWHEHur7UF2YtUTbsh9gkN2G2DCWmgqSoB77",
  "key31": "4AD3ZuSdfkkhmjintp2wjjCkHKQyEpe42t3huAMq2mCvPXJAQk4qFzAdsHhEhKF9UzkKU2uJmZ7Kom7b8rapmggr",
  "key32": "3tMNwcYAySBKmqjfBaRcieu4HBPgYDrRxwQ5rjKF5GygGy9xyYAwMAa6wXHJRooUQpSuRzRSXxJK7h7TrmLiQRF2",
  "key33": "jjDs6mgg6S1jYMPVjG8Ns9EsZ9S5V4G3eJ1hHN5ZSGGo8eL4ZzcVcj4NGM7gr388b647G6j8Dp7TfvyzBjK56G7",
  "key34": "3hHHxovpaqwpUowbK6fMNH5KtRxFVCX6ZxztB7xFX1yp6iWK5d8rfvzdT4xsENcppSCrbb9YHa9Vr7j6J1xh8Xjt",
  "key35": "pVf4jgdrFCc92RW82fXajxmhxYaoPNmqGA7Jqee4av8ZPmKjoc7micMX2u9T7QMtQCwGn3TpdYfq1jk86H3Hpwz",
  "key36": "3Hzk2fMCY981WTNViR6xobFzNu4VuFb4F7EctYRXwmL3CKC2wvQtkXTMbTbFoi69gPuwg7f6htt82V8Hfwe5HSAS"
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
