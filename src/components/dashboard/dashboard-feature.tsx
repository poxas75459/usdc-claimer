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
    "4Vx6qCvG6HtxkekydLha5uUnCAQW71FwGkvYGp27nKVk3Dp7caVQsQtXjaLJP5KTBr1P2DPsKEP6yAZddyPFU1zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6UCfkdMEyy8crj9kpjGsMjh2eun4MeBZwcHyQAHsLaoU72grUU2fRHqCF9Bpgt1yhfzyK9BtQtjprawp7ntzut2",
  "key1": "2uBiZeSpvoxoCraqKujZ4DKwgBqfDGHEdM3bpaSGzLaLNKs478h4GYQRx1Jujx1xuq15vUyNJ4Ve2Hkd4kpo65ME",
  "key2": "m8t7TcrTAjyvCkZZRk5xpgNaTYSubyWWUDm6a2dMDprJtbWW41HVNtHm1q2mdCQfVDnX4kLBHhQNStmkfwn3MaQ",
  "key3": "23W28XPx1M1eSTnZDvEA1fbXce1W2CZQP53ztRAsnFmMC5RGgrwboiho7EJwokWbpkDeDJPE3xNtyuiqFQxJ6CCR",
  "key4": "4LksajBjLiiQg8uA2mDufBjw2vdJdXfAjt7c4WAVqPtYC8Hn6CSV4sLXPCpRujq2hHbgyaSx7Ax3zfMjuKzhkrKG",
  "key5": "4YsAMYJvK1FsjYVwW9CfGFY5zwNb868Bdv8k6pnmGvJGy16r4X2WYdDnVgNefzpEmbzZTGNx5d3JMAybcjRHN6aD",
  "key6": "5nmt39otcE7FJesoXSMiV1ATGntGZ1WZ81SPhzwkPmP48LnVfH88uhkXmvtncsXEtHYt6argYTMMTFuXz4z9ajQw",
  "key7": "39BCcmPJ1DLnssHzCbe2yZx9EoGc93cY9CVHxvcuCmcYqGGh7CMJwfocceY75GpYGat8jrnjnWiwHpLBUGTJBdyu",
  "key8": "5eJ3orgY28mZJcp8QUEF2HgjXd5RNE9KJGRD9zUvWPDZNkrp9QBxYdjo5WXSWGSeRQ6Nfnt1Eh8nyDQ4dMykLiYd",
  "key9": "Js1r7itrC2q6NEHtHNmj7eo5skhN3t724bV8L2p6Qxdv56Qd3dNjH3qBVvVeSAaEPmdPifuyzKHy5YDdpJHetDV",
  "key10": "37nJAf82LmerYNSBx46pYdAPqPZS6bGsdRx1LT2H8UE7wXwsxrm5MSSqVKBCsnm1s9DfeV7ocS6MtcbS532ikRXh",
  "key11": "4qzSDC5KqUYJkUx2VQf5HuZjjYPhjAntEWwDYs1U4kDtns4WfuT6PHGe7E1XSyZhduHTnid3dk8xVnMBCfbvqgNh",
  "key12": "3SzJxESWL4dfPFQKT73o9mH6wnSbQpRW7ddSdkkRNvCExSif6aEXc7zwGcmvbKZxdMqKyJkfpBhSQSmCcspFs3g6",
  "key13": "2TJzXn16TsG26W27LUj3k77NatQDviDku62YUKg7atRYE8DzFgNSZW9B3Z5dR9y4x8vR5V3vW2HcXmm3qUYJVT6w",
  "key14": "3HGEMKCs6ztNWX5PqrzViqvrYjNE4C4vT8nUR1GDr4oH7DTMsZh1PrrDg6cXNpQQwqg5mYjegJtE1DiQU4etrWuB",
  "key15": "5JuLjujTbCGKPWTJtKM5kNYNPncUfSKhjrGEXoMzjD9shQ8xuHhrSbRkUdW8JiYwR2iQSHNTRwNmyGU4fBAjsusu",
  "key16": "5kEA28rXNCdpBDr7coXpsJh6wZ7GRUSvSs5vY1EsbKKu4qdoumzceTgVvR6ByACSfPaAir1BsL5nYiyNiJeEQVsR",
  "key17": "3iM1yVL7SK6xkdRYysNcHy2NQNZZFXCEus5B5asYKGLkuzty31HXm43cyjtjV61SNUFcNYpoCmjda7cv1DVxSR9a",
  "key18": "2VMDceYhKReFhiFoLUJXEFW2ZvpqrcCx6sE6a2DZmdAozAEWEYkr3rndxzR5pngsLzje7V7yQkMjEaTg6AyHDMpb",
  "key19": "39wrv5UwAFPKvYJ3dbf8WP7vu1W54gouugEhb3PGedEHcVQBDSRBuVXRX1V1tfCZecB1y1C4R8ECpjTvvQetTZXB",
  "key20": "2TuQkyB5L1BsaCJ82SUAUoWH9VFxbTAV5H42pf82SRdMGWv47AczGmNkVfPhAqX7cYUGPFqNYKGw4ZupnzVR79N1",
  "key21": "4wyQsujvtmevmFSHiP8Vezgr8MoJeL3BRtPwpj2fJQD3cZYuqY4AcNAnc4MPNuXY2CqQf2Bn9ssMTT5ReR1P4x3G",
  "key22": "428q5RgduP2wPDPzb1UNzFt1jufPaL4jstkzsj4kSVbXCzmRjk97H9vbRMkkPNiErAHkb7gWchFxH9zPvS8SgR1C",
  "key23": "2xj2e3wuu3oXcNpuuZvPr3Ur8EoJCM596FrRwufTtH1i62a18jvQMDRC1sGKqjZWDcHBKqMbA1RbcgQ8cuuRUcVx",
  "key24": "4FKNee4dkv7DW5MMLiLXin8H1XAeuvinW3xkyVYfbw58Yd57cJRDzELMCdoZFitNfCTd8XVyHoBZ4tyrfm5ZFMtF",
  "key25": "oN3H56JBsop1bJzDLD2Fe9q5AN225rLBDWCa4BXBdnvSeVt5iTMgSECAsKyJnS2rmynG99pzLq6ou7VDF1vPQ49",
  "key26": "FcH3QwAmRMqJhUkqpzpQBVW63uV3UySrwkEfdtJjSJK4du61mPh5CXucVruKP1zvopxQWHVVcDZmAN9Zb8Dmn5b",
  "key27": "vfLyZ8Nk11T8y8zDbVmBtz39GuXmxG8zcLvTNqtzhDWuhEkKp8Y6FSs4zQWbMasGoHdzhGSXHNobSAzddeoXbhm",
  "key28": "qr3v2ARsjFPbZ4EfB7oDhwCGA5Jm4V843WpwpVye5PSPEaqP6ymxwGmKNXy2pNT4j2ZBfFqTF1d8W7SapjjMNbe",
  "key29": "4xj12XVmtJU6MGT7e9JP5w5EBEpyq2vDYC2tb4Wk3WhTHoT3dL8HErjh8uacPhB2DfTq9BuPhUQn7hcLqkuygf2S",
  "key30": "35Azm5RhKb8vGpwxath4ViujQxHMP4XoVzru5mgtySu26rb5is5cgNSpvkRqKzvUA759Q8zsddXqMET11SMAiJck",
  "key31": "2LMeAaSDdXmDb6RU8b43s5cF3mM2fKNZX5qiqePReiqHgH6NFRMLviuovW2eHu8t7KNvQ2XeJQVkouBcNGbnpvBc",
  "key32": "RMCwY1WhhwgFsxWwQUWV5iXgNFDXaJK2Za4B6dnuvM2MEZEMWSum84jH6Pky9oHoFTPzK5rSj5CCcULNvJQB58R",
  "key33": "idL2Ab2HFuXo6Xc4HEBbb3WQWvQTCPDRp8jY9tP43UBR76kNsgPeqEwDzx4Z2wCTkd4sGF72mLBeuad9c2JGJNK",
  "key34": "3DBdo538YqT3TpxxuCwYQUAwxci8jK1nrdyRZaqnQ3uc1SYpeeJWiRT1Bdhz9DZ22vyyDu5P63dW7apdE6NseCM2",
  "key35": "5h6DmxkpNG2yFwXvH3DM26u7Lr8mBmAwioC6svi62QKzukKEPCFMnKjKRb3JjfXdWrcCiRFJCUcQsAYe6BAXmE8f",
  "key36": "6659uD41jqWWLCEghK64BumKXEsihHBR88xyRL2ogy27VxEgFLkp1TYgwiT5Evr3xB2QRKjscYvBrHiyeiY5C49p",
  "key37": "5oNviKKqKKtvBerXCLfPoS3SkpqCPC57yAxVvP3Hk91uPSaiMqZ2b6jpy7GAan8cbMmtVqXN5V3q3uLVxJTAaw4Y"
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
