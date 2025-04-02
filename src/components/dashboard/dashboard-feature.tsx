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
    "SuWABjVrX7FNgCqYTo7CGmn7m7cGXugyfopWaL4LFc3Vmm6fd1FjyyZVh9LZ7kCqKveChPXXX5SR4Hdhrodgdfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uSLs3t8BnVsCGFTZyR4QyQKRJcK9JVQWbVQ9wjpXhWb46GranWEZB9RWxyzkwRGxufR2Mwq5UmfocHWYwgbjv6r",
  "key1": "2xr1R6Cy9n6aAt97196pZfQ46sQgWE3VShCvUwN8y4gCgwpdWPvh4VWibhqexuUcXYj7QEQFGUfEW2cctavQNDFL",
  "key2": "3LdAHSjUuyaYWMLy7kFeNE1hdiBg2ecFx1N5pT8eiUsAzch6gYKaZpKHpUhmKNavJz2LHC2WFnXEPJ9YRCZZJG7S",
  "key3": "5LgyA3vqQMQHYECMVZ1kAbaxAx8MkgB1z1BRxGmi9Ln3GWcQvxgkq3s3Ku2aL6yakWiABP9YJns67bKqDV1Z2Ux3",
  "key4": "TKkiFA3MR372ky7mkA13M98PqTxfJHQXhDKePefLLiHhmx4WXN624QGXLSn9AGPxXRzMtpXh4Kn36o8bGZMrmoi",
  "key5": "Gw1E52qkwX1f2rqd2FJWXpvB6nzNVaTqTL9Vb5d9q9EXPUCt1HmrRMKCsDEzsnEzxiCAgCvaVPMosUzv1C2TKDK",
  "key6": "277WUz8x5gjRr2hH3smwf349zqfSETJG8gyh4hReXFyxc5jNt3Mc7A8sZrusXTPuGtpwCh1sTd1GS7Pijk1KypUg",
  "key7": "5zXMzrKoz3ggEqG7w34h1oAqR8PqebGJmPNuGvaAWrvoSLoqxben6mtEKKkp5jv9a8jdMU1gSrhCuHAh5jNmNfYd",
  "key8": "4vgMnjnCNmDMuKbLJetKazz4DhKAqD6WocbrwahhpaDeWaUibkUEY3N2CRcj1YWMhDuqbqKHLUUuPGScVrjyQJUm",
  "key9": "K1d4S69aTsPNzvtBWEdMhwXmbZ8j5WLnnmypqPdjmRboZGXt2UCsutbMEgqyDiXCA9qi4J8g44AFL5YxPAXmSjg",
  "key10": "27rnpUESRzhU2tCAU38t3HopnxyrkHjzSXEYH9729chtsVzSyu4AyyaB8xJfugvNcyFnnT4PzfTN3JqfGrcZZCPv",
  "key11": "4xj3WQ9PKxvogGxEEFm1y16UAd42zGtRBkXZPpWoat9MDToAVa5BNancN64PZdrqMPEnEwJLJBHgxG4n2GiK9wns",
  "key12": "3db5LcHUqTy9SKQhQBvLRHCXUgPF6y72sL3cEmNqFgwd9pkZxtkbHLVxkMTrzaX9aB8knY1yvJ2XkKenhEA8GWKi",
  "key13": "4cJE17ViPUPuuys5NMMXK5X2ZQrmRD5VyEETnqAzxr2fZPKA1pgq3f4KmSBYc6K4KHt6T5MHg3vHSGVF2Z5S7RDa",
  "key14": "4GHrLGh66fHpU2TRn8ebFhvp5ub4TLQmErsbXL5eRgtUvPSAJMqYVA6j8X3mdLgsWN1R8oumhwmjgjhbb7u98ovH",
  "key15": "Wc9tQ3ZXLyVPfhDhuhcor6uZYrtnDocpEzNf67kUFfgj9cMVXa8nt4h6AWQKoKucBGck8uB8KAnhiCFpoikbqz2",
  "key16": "4zdMAJ5SuXw1AKrQb3SYUh8tka9fB11H83KHXtaPqY8aoTKYSsWwW1n2M7dwYLJ35b55wsrMEciL62EAVSTm3kvG",
  "key17": "33Jxx7hNGCvYRMU9WAVX9ae1WkKY2qJPATiGDWwxZPQuHNrotof7SpSXA4kFpu43MaQpj6hmRBteK1yuaKvhWeBM",
  "key18": "375cHx4SAVCPtrQ5yXMri6jdV1xmLRgXUi2XFaE6tY4Ec2mWFq9skS3kJ4H17d43fjdiPQSFUazZcs2KYbLj6Ab5",
  "key19": "65TpAVnyCfmXa8RNeuQJbvjGthaeEuLwn5Nkkf1vKRWrkNCW1AMrPKXAY1xmVBmhejt1iBXM6S8rc1PcKHWBPPJk",
  "key20": "2EzPq8MovvUXuY3Ykq3jHqCwJ1HWq8EKPpat4iSMT6RhmcvcEHEx56pt3vhpdx8UqX3VhsHdcVUiKUd5nauKqx7X",
  "key21": "5LmSEE4gmwfqwKQM6vQUq5jYSaJjV5SBH5RFWQvnH2XBK7UPeu1k8F65wWKYEifNstxUhqwB7MoMJuyXsM7cGYE8",
  "key22": "7S6saWPruNdLyfJwtgEwr58biJXAePsCzquoy1PFatr71VPQD174HJ1Uo8WtFyYQEzVsFRQf2X2iUmg4BptQtJC",
  "key23": "ASp14au76jE4HVLk5zPgWDuJ8JQRgrexE4feYq63EoZzXVwg7SP9DorHy1i3X6aTGqrAPBkfCciNVexLte252UM",
  "key24": "2vqJpeQowQ87SZ2vfYcU51m8Rd4gJzESKhFiDAEFC3ouDkHe2MPVJfLLsK7hNAFjLJcA7QWWZjiVVPMLwajyvyB",
  "key25": "5TiuGCJP691fNkWAZqUX9bJ9HaUg3YBdy195dW4EgBbNdozCTfkJcdZqn229aR6BAajufXCX5pUBg6z4dzahp73S",
  "key26": "3zDra7m8Td9u9ccTbQjc3qCbL9oWgkkwap9TsfZjWEwDGFAy5JsAoanVedynAEf43QzRFBMV8MGgcV46MxHc1GVB",
  "key27": "48suT9Ar4aPkUA4b3mKWGkmpiVcU5BgSRcdjDrrM7itWM2hwfL8Jc3fhBHKkfcsM622Db2vn1wuXMZG9TsmxQMqC",
  "key28": "3Kv6XBsJqjvBjoauskqh6uNJGd1524bRZ919MCULBtuFNoJivdpaRQnE3yupLUj6E2wDV1EZHcYspCLSc9PB5n3u",
  "key29": "2yVtVWsJdNDvcpbFG3J99nsm2uygf9oF2VjgkpJ9sjMgUs8FGr4TZsE3GQrexiGjESNnYuFoFnc55Ei1oUdJLND3",
  "key30": "612834s2UvPQWr8w83YMkFw4hmjiwfFQrfbHu3YbajHZ4dGqrtsdhVdkLfNmRguKg54cLUCPw3wSrFzYjQ1FpKrL",
  "key31": "YEVfE9gBWRRYRUs1WBgzS5Gy2uuWHFAyCv4NcMbsKqUvvA9c5ET3VX5ioGF9TB7x397uFknN15DNvsVgLs48kHX",
  "key32": "2YWMA48kmBRrecGrGRtrsis23BbKiBh2rswL9Ly1SBi6upxUw7gjo8GpzH7PEAtWoyDg8ZjisV3EXsJLxUZ7Wofq",
  "key33": "yD6Hr3cnJyzkrijXM6N4dKqHCRMGBJbXqg6UPjMCCGEKdZi2RRwUqrdqdstJPt8Kes7PSxKiioRveP1vbD2MAgZ",
  "key34": "9u7uqnTG9HW2xVoahcvKNYvRUxEe38xSKEZHeVmBYM3avm18R6FVneWKGembz3sv6sCbW2EJ97KJiTkWred5NLf",
  "key35": "35gGucqip5E4ZP8N6iRV5YxAdi5dNm4fGn1QW2DZ7PENTvVzay6XMauhEpdLuuX38Au4DmbtgkXtWVybVjLM388C",
  "key36": "4ge51mcyRs5scDk7BK2PyNZ86cE6mdBEpX2G882cmp8AHTdxGHS4wtRqGm8EUBiqfsTHLQxz83oG4S3Y9DSktgxG",
  "key37": "btbXtQBCm6AXTtyqbjgyWEa55uqrpyg9e5cUYZJgF2HLwqmmamDDWHivjHYdp1x8qyxyUTmrHMNw8hRBXKfjdFP",
  "key38": "4v7LY9d15pT9Npzkn1v2EKDaJnhfs4j7RCTTbhYB3zkaSUveR9mbZEwbpLWYKrFTViSqrmF5th4EBRrany2L6rvL",
  "key39": "4pn69uWt2BkAs6ghWkXjnTNTF2EboY7zeDus9UceE2iq46149zVF6PGWjmnnrYt8DnbJgaXCf1BT3Kmh1N4iZqdh",
  "key40": "39Z6twZezTEETgimGfgL6ZeT88aD8pKbKcj3ErZHjQg2TStMrNNoDc6LADZxF7Kb5T4GGZpbJsiuRuNqaX3oZtiN",
  "key41": "4XLVQdP2Yucp29dP7T7fA6eLNyWHuSfFsk7mr9uyMMcFTGGecdDrB7QT3BDxmUj66CQCoc3UatSujmK5bq669foR",
  "key42": "4pGnaV2GfMv9nobzSQyAo65oLPCKfGm8J2RNSNTrtT9rWzqZxAahNwKCBX5RaFEkiXdtScrNGjm3fuvUoZyCALcA"
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
