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
    "YnWvV4YjPbEn94mRSmW33Zpf9MVRK6pmh3yJjq8R8honqjdJFDRWEaa623yCwdvQJcz4u7sqWNo9R9uF2pJbALt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GJg1vCHV3cZqk2BpSAsB8yqpLPBvtj6sd6AKHqwijtTt2YikgMntQ99g6Egm3a3EcJYqL72rQ54WoESBQpmsiu",
  "key1": "2zwvMEfH62nmcG5mc5cKVirW8LEQGAszfw2w2z65UjkS6kYdhU5PEJF7EeeiNwR2AoGcj5oNmzMujvn2kaicjCHm",
  "key2": "2UxmR9LxurHtZnZMU16vB3GcArpZydUizw694Weo5m1fkSPnv9HbsuSX2fGKb5Bd3W387HrSMxF83HiYoL29gbEw",
  "key3": "63oyExju8yw4W6CTRuFao4GEpriV7U4fHEZLHNbHQqLe4STcfpR35YWB1Go4m7qbybDHCaURao29hWXnaQixJeTM",
  "key4": "2cFERAApMQakb6qvwDppUrzdu1WnHDkadXtzp27wUXw9h7Ei4nv4smFhuJSwwQ4xZaWmDZeSbwVXZWh6MsYzAptq",
  "key5": "3bwfd4c4YmhAb224QeXuFCvUe5wJvfpriCNHGGh71GXr9aitE1UGZrCbwmdQJQkW9zokLrjsQR8wgzVGPeo9ZCzi",
  "key6": "2gDg2fxgDjAYJh8qqJHTLUV6N9KfqdMXxLiWVNGaHdgFokKR7Yv5ep8DyX2x35WAi2pefLa9GKpbZ9Q8bQceikWV",
  "key7": "5aYvNoFbWJPgpyac4D7j9qdNsdsEqHKWTkjN2HvjEWgyrRhVWzWxU8SJXs3dYzfRtkrXFUBjP7RXpbX4qPLnNLnt",
  "key8": "2g5tWs7P9MpZRxJFe353fSDYEjKnfnvCH2GuzAR3cmDixbwCnXqr8J7RzMQB4Tem2N3PcttNwAakCSoWs3jAnVye",
  "key9": "3toiK9dL3oxwvo3FNKYmY2xk36nWDig4YdsAFL8DeSjgbTQTtTSbx2oZzZebsMD3MydaYDdnEYKv6dvDYjfgj7nC",
  "key10": "5eLtZ39jQnTV1G5hBVwp6VnJv45peQ13cr58BA4J3ukN6JUEpaN36z2YMCQmU2Q3JiCZrbDn4hTcpUoznRF6N6bS",
  "key11": "3XHcr5kijT11WKRfrUVLsvHpi6TwRsfYASDZ6QXgHMNuydkHKcYRpwW1iJRHhGWQXxJ2TAZGb2X22aayh1aDxrNt",
  "key12": "39jJYkFMeJQhpdo78pcKY3JW4b1qU4YAVdSHvDfrwFgbK7BybXhUFMiDJFtr3k1TfjTF7fxXxxbr4Ppbdwedt3nc",
  "key13": "4G1Zs7ujrjdHNVTK5cTumbnQY6En4huetc1JyUEUVZeKncFBtXjaYxipbc7oRaZDX5uGFYtoaxbnNz8BLdfkYfvk",
  "key14": "4ihuKUMQUDuL4yPhRKkB4cqscwY3ekJV8nSKWUHZJaBMCPwL88voF2nkuR5JXqNTT8Cfox6Ak4He3JYJCQz7QD7D",
  "key15": "5RRc1Gs2tEdvvPqVrrVa9BsuMf2ySjcUvc2NUJh45C47ApJstTK1tB6aVVVLzT2FoJtFBZHvtoDH2syB2vGKJVty",
  "key16": "38owNHrWXZAuYhQxVj6wTssfsQws6s9Pd91M1tf11XisA7zKX5uoRAxmU6nR6Jg9eyRE55aFa62Ur2MscGYhjy4m",
  "key17": "2yfitfn21Bwway2L9B8BYAwYduhKLFxFnBJYGuwrfw49H1Ymo5xk2R9daSZR8rygWr8E1wKimY73zA1QXTgeNGeN",
  "key18": "2SXiMuwN8YKiBJGb9pGUpWDAufT49rat65XNUDe7CimmCk8GhAX2WvxUMkZrzngDUpR2ptE9qfeWDPyMa7JcGnn1",
  "key19": "3M1aHgRspdM95WZjre9xZFy7Fd7F48bH9Wt15SpdS4midn7zeXP6nmSxTUJ4mwtmFR9N7irwmJwajh1MNAzbr39m",
  "key20": "e2UCWLVsGooSbZQoDZ28JaecSV1wKHJcKVRNBhvoy5am42ApgnoM1ecT1CZgMXemS6ZvHNoMEaa1yJVtrPv3hQz",
  "key21": "29oUg69f4vzB4N3ha1Wq2VtmBeE5ocXn8FwXpRjCQsNpNsEYEnjpAcFkShby4gY2cZPNUqYv8EPH1DybaQHBdbsi",
  "key22": "3k6Kk4aWDsxN4VEx36VcPTCp2aS7M9JMD6TRY4V3M41cdj6bHqKhBWV26i49B9sh9iXPwBE3XnbUeDHkg2iqvLtR",
  "key23": "3DmFcsua71oWZyREkjbPYmhuTzDxgAsStAuFesZfCKbdrnpRYXu9pYzLh914kSaPeadyB3cD9ATSuWL8DPyPc22c",
  "key24": "2p2PnFcCkH5aSPzZoXs7GsPUwJvMki9YU7k1EJW72XsQUDoCCE4YYU2xggfV8LZLzogTcYaUssgGs2xJqgCtjoMq",
  "key25": "ARBMijXAYRuHQ7gx8efpkGNAFbCJRXp2V5wWpjd7RmTU15yS2WxSjztXxmQyaWdoe9i9KzzPcu79cqARFsaqmhs",
  "key26": "5P6ByuGeKfaG5XJmQtDnvW6oGj6rHvHAitoa97LCbRQSjpjCsrqQcRv3oDQH3saDzfG8szrvFp7VZKjzXiULvLuK",
  "key27": "3jpGPgK9tiHci14cabycPpGVXUFETFbfYTB7f6TxqaN6Y2EEctRdqJdjMTyvB1Kc5g4g4xFREjZ8X77rnmdgWfrE",
  "key28": "9p8LeK7WG8dA93Ls9WcUMA78ZK6uK4qf1cgMjkCSp52M8eT3Ei4e95VY7z8B31uXHQJqMGDs4A6D8rUwVk2t7jx",
  "key29": "DBrQYYEUXmuUzjw1dM14TRpdAUtQrh99bDAP4x7f21xuN98Smcf3xByXjRBDm5S2w78hivnEBMmKyunVivDDrBa",
  "key30": "59RGNzREVJcgRrPqv9GEEDuqTAKQxaCRFjYSeX7p9d8AMFn4PReaicxdveuSyH6tKabjnGrWLTmHYkMHnjhSoGZG",
  "key31": "41dTxHShRchVFEod5XevBNVr1CTq45AXi4Y5WnPFBghZUj7bsJsY2LM93jSWbU3nj5HjVeJFu1hxf2tq1UzmfBvf",
  "key32": "4TuwNNuvpFC1RrUkPpo1MYXMsFm4rrSdbj1nxiL9cmJnpTjN4G1dSasa8WAsQ9ygVeQzzXkfQQycw2ghpGupyj9G",
  "key33": "4qq8YEYV4Zh7wzDHLnKVoXbZvA7rnPYoydCZfXJhgwPKM5AzrpmWA2fByB3DKybsxWHBycdkh7UfPQTqVndFbrDj",
  "key34": "2Cp2tH39938S8Gujfg9b6DgfWH46nqweVhyrBRsnyLUp41nJVEucojyrdLWRQs3YwDw2vijip3uB1eK26xqVtbSe",
  "key35": "2aEtnJpzkpBw37kfw14PnNfJQvN1fgE2BYZkzgRrB3sGWk4fWku58p6RHbZwoJbSq4p6RphoMTwwpeUfQ5ZyZjXm",
  "key36": "2bgeELDiizq2rqM5CQ4YM59HDUvSL3Tr89AhMczysBpETdxPEzto15PZwNkp2rzNWYMnLAm7zyjXxVYtSsspAsGR",
  "key37": "8EPnX3zLSD2k18yH8ktnT55J8hjVWtAdKFJDphEEjhzM8i9wmA1E7meHq1EC3JqMiG72XCfSxR1wmF74ouASXqA",
  "key38": "4MbA758H9dHGzhN76S3EZKbs3MjwoWoQNMLZVWBsKxGdMLBXxcaZrpzqzey871FwNqhwpCEXjLCfnucrTy5uB1xP"
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
