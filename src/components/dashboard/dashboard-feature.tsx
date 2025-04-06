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
    "3QseMTbK4MLg48aCoLXLfcs6cRhwUBxWiwZk5WdLTMtbce7D68FFMceDnTQQHPisXB7GUSWetCpJrJPwTRnsi7Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWTtrj4RmgpzEHMyJFkEk8RHJj2nuEopK7RgUBr7kYQX5Ja4ZBMDk9f3P5eptyHTzu3XuXauDzcsMuMvzeAiui5",
  "key1": "2afJa71NuDLmw6imMAnHpMMF3ctv2FtyxfzGQeemVYnMxMeWhiaKR7QdRD3Jj3BLGfY9DhdaFH4kv2dHejUj3aEa",
  "key2": "295UAqM8cmn3qnzpnxpXVfbK82yLVKcj2ajkNdS33DfrfhsEpDSHNtjBzhnZATyDz9FdcWCfC1K4QcKGd6NcpmLS",
  "key3": "2BN9yLDstDg8vLumZruw4NXFW2k2KGWi5Bh5aFb7pbRQ2qAnQQa2LVGmajLeYtihjhWNuFNu2rD35PST5bM7WcwL",
  "key4": "5vZULqX7DkeH7gAKLRbr7Ab6ex2sTSurny7rEgfBnkkFjigYA4GoM9LdSKJWQWrjamJcMExw8cB4DFr4xNrEhXNE",
  "key5": "3FjTCA86BHLsgjCeGN2zx987KYvpmh9z6vLetzzYPST78GtN4bJaUrA8SgbRbAVnYXrEdfXAbHppiK9PmG7ysMuy",
  "key6": "4xfAFYoUVfnFTZkHDoGEXm9wYjn4nsBUnJhh2ioqsrSmCacNgj1ZyrwcNJrPjyczviA9gmKoJN3dkm7gouSVWxAs",
  "key7": "4NHqyK1GFpsVPggsTTU4rNKtMxQD9MUwaGJfPpUZtHDhYpBXJ8rN47gPEGNWoFgisFpr3bzmHzh9pjoxYomsBLcY",
  "key8": "3mQwpN8LPX4sEGVkiPVfV4yS5aD9xJuw4fE33GtjhxuvK6PrYhxNN4me8Rb3bxcgjRyvkKu2rmY4gTPv9qUCH7Ry",
  "key9": "3vESpFnyLvYo8wf4ZjjtiCJGJnPXwRmuH6YuwAmYHWBt1VYnK8EHMwqcspctnreqjb4o7vv3ckvqqpjiBj9h8Rnw",
  "key10": "5GTH9PeQgZKfo5DXAH44QrrZcQNRJVtUWqWREr23QRWNPriGhaL46RNfMaAVYja4VC2tgoa6J7e7oaQBCrA1zkMZ",
  "key11": "4dd1RwA7hR7W15tcaeuLbJe8gfo6jPHVrpTW1iPjpkryeJnfoBPK7XwFqVfBkXDbDNoRK3HxEY5C8bzTvayj9R6p",
  "key12": "599mLRxAmrGze852nRufWbiu2EKwvjfA4Bau5nxANFkjMKnWizJcPnKYiYDSvg4ioppNJSL6QL8GMHyzLUbFWxPP",
  "key13": "2ZoieQXQ769UdT1DzwEjY5Y11fxaFeUzrasiuyiiC6xk887HK6eS8HVwtfNxHLTUaRMUbg6KVbEPmBCPbhcxiisW",
  "key14": "64WJijUiFD5nrCgC2tXsxFynbRr5JPEi2Fp8n96BW8nMPB4ziFwjecaPjrwtdVpAvL3135P8jM3qQvgqxe1yzNFB",
  "key15": "bMJoyfSp3pMtQpYgZwU7PQqWnvJUZXaXKAPUib1tV7tnS6KDjXCfiRvHrz1zqaKGBqQGPQuC9RVtGPv8wB84mhq",
  "key16": "tK7UrbJ65GoYrx4Ar699ixuPy6zzYpkAjYnWBHJndM1x3ywTpqb8cCVGT9tWwSt8ym8iTTpbr8tGigqtPwhHa4N",
  "key17": "32uiaoWiLZjEUrDUJWPoYJddiALuC5Rp7uYgpQEY5BHx2T8KmSJghLy7YhghpLQ5MCaGKBWwdfHoSuQeUf1mhhYY",
  "key18": "2KmY8vBpytFo4HhvQnA2f3N71s2Hg5XChHfbbLdqMvLLShevLSfM3CGmw6tQQfqwadP7gZYKUe4K8ar4iXQgy8cm",
  "key19": "K1hpVLiMen7eF8Wv4JYK4ZcqwTXDbsdJB6162KC9P7xLYcVNxBX9XeqmL48hQ18aXHR2ZF7BKFKqxmFayaXZmtb",
  "key20": "3LPVotxhuF2gmqX7WVeB8qP7q9z2UqHgkNMmxirYt8WVRpqxj3JAKMGCm9J5UMsVJiZqB5DXrK9iLjj9CVz5qtSh",
  "key21": "44mjM6ZcUEg5Dr3HZhdiPWBFayA1JW4VMSkQWdBkKyraQ5Yb4Se5aMnWBrEWRR1SGLCDXSyzAq6bcioDRQ56T4qm",
  "key22": "2M6KPaTpsA8PszvEX2Wyzuz7ax6J8hKNwY6qCAQq6dvm7xHyFzvYBBgkQzP79u54nw2H6N52zu9MuVAExm8wHvA9",
  "key23": "21f2xwzzJ4fteW35wsuNTx41REYnFU6EEzHvnzJgtjMWctqhccsKTGtr9mv7aNimtkjr9ugnUoNu7K3qjJ8yend7",
  "key24": "3yjPfDL5VvfnSfBDEsqfCPT1rHeDsxe2JTqidjnVWUbmHHcmRZUt461LdZxD2aH1DFicp8wFYVidyUbxqezFgvRr",
  "key25": "5be3B74METv5D3Un3d5JouEMLLb7minDHKpqZujTDpcZT8AbMd9ULVCsbVoxD4vViVopkdNMUst4nRQ71JAXUdjU",
  "key26": "59Wmz2FpV3bCrdcHHLiNFt7qqccx9LT4ic912oHwk6Qzg83MaimfKWsi2WdXDrjZw3TXNvg44PrpSCac9NEJNHU5",
  "key27": "vUAdcj8cAZm6FhpFDzjhwg1NQLbPmYnj7jxK1o3Qpg7qsJf8pDDWQMXLXZgEkaxrWzEri3zgkDNkgNCLe8SsCzQ",
  "key28": "zczdkjd7Ye2RdYo61niDd5cd7Qji6YunjKpzH4s3tCYcPxiK9RBuWF8dxHTpuKv7YYtmUjMgWaCj3MSmPTuX63b",
  "key29": "V9R4hwpquZkyGfxVuALAYKQYfbhyafcnNTtBPBgcvzEpxWbvUW7X8xHAzrhdnUjRHjfyKxVuqKgzsdiSqoupEBf",
  "key30": "vvGVcFVSeMrueZn75KQ9d34FrdiCuFq3WDBwwKMzwis1r95HcN6vfNg1tKQin6pdNurLR2wxuSaccih1ESunbSH",
  "key31": "49FVTobtAqnGTELZWU88hXC72Dx5fMQ9H1tsyQohirycuGQPbcF6UpwesQ7hwbUcr7GpuRE1BLFBoyJ5nwn44Jgw",
  "key32": "n5FzvbaMcE2DFKB2bNWkXxZKrM9n4ceVEmttfYPHWiv1kvTawMSW8SSRumatf88FqXreJm7tXXyfewGiocoJRPX"
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
