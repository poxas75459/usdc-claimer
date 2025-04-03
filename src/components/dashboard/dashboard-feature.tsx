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
    "2hDi6LkzVv5BUGELCPMPGWwLZDuTF1AtpGL4Lk6tS2umKZAxMmVEpZRFWyojrn9c1MgcSW6kJ86SWoLSt6nTCdKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGw6JrdBib3PZRbp5wGXYgyYmaojLmDCghTiFf1gwBztKHTAACbhUVYSKgWwGpt1oaJkYewmBLR4YrPZYZPhThM",
  "key1": "5wofmjJcB1UkZzZ2t1vzMGxC1BnLvmRSsJdHgojt9esPBgs8A6PLNs7rtjRcGBFzB4i9XpdT4kapgbmzz5aK2KGC",
  "key2": "Jw3mj8YuWFSWnjvA3S8LoC649JzEu4N8sgMPCE97mWWanGs1aTRuaXYqcWWojwBmWTkv9bM8TUhSG8vzdnrmoxr",
  "key3": "4zxf88jq5mRMCVM7kkcfkKKWCB1u2Hpt8R3J7RaLWUFu7m6cDNE7YvMequPH5pd8TbJqCfXF7KtqMxtcoDwnbfx3",
  "key4": "33qMj7rKtYrhYjairnVtEYwsTnehLwRYxUSqkv9D8HsiLp8U89JmYYnREipm39pDhcqF81cjj1PVywh2FJUfAMuV",
  "key5": "2xHHPcdEk3vLVQ9MXzNFgNhUb3M8ZoQiZbLTKvR4VsvpwzPurrLFn88rcJdwgxR3JSWQaVQCYV369UpPfXMBt8TN",
  "key6": "2F2i5UvpDi5jkydeiufMGjiDTVCnYpvXkQAwsgWjEqsn1AW8UAaQH9wkxCwp3L2BnesBZ56EPurCwtyNKZCeSh1z",
  "key7": "2rxsRXVkKvvG1EUpWidwxrP1rpLrQToLNjkCc5pPXBWQyTDEhacKASS368w4JcKiRMMUbW2hdwibmTvmvbFf3faz",
  "key8": "2kLo5r3GTcfroNDUEnXbZy8efTFWgRXA8L8FCCfMUPCRzHxPWTQkPPGZRJmmbqRnx27kLeoGU4NjN35dTWii2Uv9",
  "key9": "5aLAYgyvmZEnVAYuwnmb6yJsQy935x6HtsEzrp1XcrH5wuBdyoG2U5YcvGz9jD9BGWnUU15R7VTRETJh1eD2PzxC",
  "key10": "3i3GQE1FcfkFknN68NUihFBoLTJXaAioK2WpxRA5BfJgUQWQXAoz6NzjyoQEorTNucSBDPHBJZdkuox8ipNudsMg",
  "key11": "4Ek8sPHDE6ij8iPdS8gT7oDgv9PhX2D3rCvD9eoctqXN9M3LZ6KRwdnACLpg6qvrnTk5xZxPomMq9mVZACW25wEp",
  "key12": "5wSy7Sa5uGWxMVpEHK72Wr5wNoUPBcFG7Z8V9g4eQ1ToJCp7bf5SL6eJXSNw1ViznpcQHz8bMKvvjs4qRd7NLMbW",
  "key13": "4oCiovQo8QZo3GUEwm9GD3KxDyy64srYjVHNYnWZGfkZjod8p8XF3vhdzo8P7FtmzcL7bnCVkfPMh7My63ESryEE",
  "key14": "4yo3YKRS3eCD6afRZPrifpb8WuFzjs84CDLRiz8HRmJu6DHPHEWH38LKywUaYBciva2yqSPFJrdrPNqLGDRdz9vW",
  "key15": "3LmqqE4XWvLTxua2j8G7xQkg1AR3hnMMyGH4R8UigHEWSG2ofWqP5awe8eFd5kPk4iy3cMHUx4UZWHye9HCws2Ap",
  "key16": "2fZcNYS89pv6UcGyPRkV6jH4zmcxwdPZpsCvpNnwxrPzdkCkyJSDWv7HLB9bzm6zfeiJLhfpEkquTqm231uFoeFH",
  "key17": "3uPyjZJ11sUCZuu7MbfxDbH6fcxNiCGvWREmPTRJ3UTaUFaQZfFqxPNF81QePwSbBLWg64cVr5qZJoWXrKNuTvGe",
  "key18": "3EXefCEWv3AfBfJpqLxjvQGhyjQuGSvLhkiV4RZJVWrrqp3fDHuctKJWF6ufkMB3DYUi3ad2Eg1MWyHoMS1VkXU6",
  "key19": "SWKAmnSvrTdA7Amys6WxwFXEb47TrBoin3LVGZ2KkFPhYgSGUdGBzehjigt76BjgW3hQorxxfQ81iiAjbixnjaS",
  "key20": "32MqsEq8BrRtxs4Xugu6eM74b541ijFMzVXADzhsAa8pjTCavtEN8SvkGkDiLNebgYLsTKgrvVww7DJeFvVCEYhf",
  "key21": "i3SGAu1v1h6b91877gTvA1jB4VuqYKBc7esTc1kDM2gxNPtGMxopQjAeSN7FEeV9EzKWp7Zm4x1bitCopWkreRL",
  "key22": "3hFyCSkFAvYSVHBJRZM5RiHt4AeYTAobrgrWQ6Mt3F3DXF9rhhYBuyPVVfkKfCstepe2yo2CQ3j5Fwxzxi6tdwUU",
  "key23": "2johNe74k9jFt22ec7zqYxU5xUCMsKoHVtjrjEt2cZzbrdfAuunD33q2t2nfZWjbLXvFDMDCq2ByWEawjQFEMeFZ",
  "key24": "UJB6v5kaaGM7fNSC4wcnwjkaoneVUkeJAZFCBZ5ns7tc3BqZXLhvpJ3tsfsKR3gDgLgNnsBdrqnpskLkjG8ZJ9a",
  "key25": "3J2o3DTENQYuwgaBz5bnQM3Ef3532bHjLe16gLb2HAut2SK6QbBPV2uCDmQ47MUaGmc8GM8KaHAJ8YRrXiErRnxK",
  "key26": "2ufK6kFihxsCRfhwuDfQ595dZTWN8S83dQJykrrn8bGgi5obUqycDgPYgurwirdRubjveaNFvK6eLDEtFYqLKThD",
  "key27": "2R7XuogpArK6TeZTfHkEPhbQNBpemSwuPoQzGwCen4zaoVnwxJs8n4e9CtYpcs8UrhZpy9BuD9363eMoTCGUjuJM",
  "key28": "4kXrgMTJxxGYPG7ywUiiTdsZLeTZuWmRSsehCFMbMZH6FP1A7URTbyHRnvLpLTj2haBX5eAgeSKTEZ6TkftWwe9Z",
  "key29": "5kTeqU4PGWEU9cSyFUMd9ZzazvavWU2eooJ8FmF6958VL5YGaQnRDrUgCgEcKDgZcqipyrq6CT75e3Sau1YYb3ja",
  "key30": "ZGN3AXpHeiD9Ut4nWZABh3DVpkjveoP9GGnvHRVj1PyAnWurwkqUMXTdNKQvDRvtUCvohSi74CMCqDSSpgJK8fp",
  "key31": "2VfUejSwcDJ6Sx9H4Yqpg8A6eEuDpjbFQP83diCkzc6EorDVMZdxfFcpXfziFhZ86c4KSpZvrrF2CT3dvHgeqt6K",
  "key32": "4fe6rZ9ghVdJSVHTP2F6zoEwstVZXKsELRW5FLsLjnLGeTUQvr2wZY7n8eYUazwDVbeHzpdjWkfEFhSAxnaQ7Eu7",
  "key33": "3Z11BSPfJX7GJrCGN5a4KKtWJSHBQwW2ALP8cu6QQ2DYQGQGGoRso2AEvihGMsS2Y5Z1iznxvifNADXJmZcn67Cj"
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
