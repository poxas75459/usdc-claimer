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
    "4Rho4UfS4znPyHMsrUthtejgCPK7fNgpj5o36DHLz9DZg4KUcToYFxaquptUb3zVgkPHBVp95yYDBGCB4VZcLTZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBQwwuo4V5bjpbVh8kCdE1TcHESbYVngAJimnPxxwVH4gejSBQ4pDU7x2WgCrwpkSXqeMvVBfMcPbeJ1mAMRpQ9",
  "key1": "2YNdUQ2RqW8UTijXzkHBrmBfE2uhBoiigb8TWpfTWoSWjDi5qgb5WTSjopm62feonKe3qk3R9d5G44GuH49tJ1YD",
  "key2": "Xxditn9Rbx8w6FgNJthaEq7V59xYjKNQDBNTJakFFAFno7ADJWe52mcF7kPT3XPYvQLxuugwRaWhAASxAk9dkYq",
  "key3": "2X3Q6n9LJaCWDd18v8UemdEJjtcNi2GsPkfm868XaEPN9oRyNmESZXjnFpe4VLS4n97SDSHjQL4i2Bv6Mdae4m9f",
  "key4": "2zuGAUpiHYWGgtf5ykyxcDxmehe4E2ETsnvfJVun9PMe21ib6a85enj1Ho4hCrxq1JbYP8yRt1TbTgK62nbeupWv",
  "key5": "cpbyJRU2bThuscyxgmdbppp9SLZoWeZ8VQKgqdjYGFLrdpG4h7FRTycoR74zdzMVG5mW5Y23XLoV85ezuTWqJQu",
  "key6": "2JiDwDWicxgYftiLXMYSDKBGydip8FP6LAHXwj83ezSnP8hGLejnz92SxP31xsKGtu3Lq2vxSBL5zd3JScrS4TfS",
  "key7": "wAFt31GxjZFPyqrfDEPjc6AwmXucMY8hxPTWcFktfqrfTbaRuQAQp2egzhbCPtTgpfe1674iWwMRw71CzfbsfSy",
  "key8": "husuf71bCy4SfF2BixCDSJkRghRH68UKieoYhATY98s5BkBqL1TLzBnhzTYQbhbSD8yrwTD2kMS5GyUiY29eKVR",
  "key9": "2oh9zmg95ibj5e935FG66VxJyBJLoyjW8QoZ38uKFujW5Hhw7wwqDHstnnrmkkAWPqoz5145pdUQeZNJuraWxbQy",
  "key10": "4sp4nJgzWuQ2XNbktBhcHHp5bhBdGNDFQxeCASEJA9u3FZyVY4T52XWMRAWnn5Z8HoGGQ7QJHVENXMphsVmbsbuv",
  "key11": "4P2PyWieq7H87DBsjcWSVHs9E7KW4bYBkGdF4LPrd4wnFRSg7YWP52wGLMFTcayBckdB4Jn3jgsfVnc7Nwv4tqDq",
  "key12": "3WnjH1WnFKNxVYmy8CPFpar7HdwvuVFFihBr8paiUBjrJjF79dr8YUaJKLrFdZzmEEJCspBvh8j6h8t1Bc6m4W1d",
  "key13": "3mQrP3QwQTg9DGuXMgDKnTG3X6Yhcyojg2bPhaw2PxExnanVUe2fcfkBZsQyNinafQsaKfhD17Nyp1n7Xeaiq3sg",
  "key14": "5FJUu5FphCAuwZn5ytSUQY1h6B3gxSYsJakpcsjMV3UsRhwLWzsZ2f1QBgRtTyZA9SANu5AdBEKyHABBVSw4Pono",
  "key15": "8t9oCtnADHjrCcB9obomDxB5YzQ1wniTyCWXfWJFMzqWnfxjcXVUJafhMkQpek7tgZxJopvHnFf43Yr7G2G2woG",
  "key16": "4RQUDpQZzABxgVPqBdmBKLUoAAvvSmV28neP16bzAnxn1R4wXydacZCS614RoeT1AzZHB2ksRb2qY1CvTbToNHXX",
  "key17": "5ATg6TGGiXsAP2U62262xowxJiwRdebRDN3uubDr4jsf9zNUwSSBqjdc3pfQEGAb2uW5xTWfZrbfDqeCPr2qrH6Z",
  "key18": "263rCfH1SY6o3yFtnZhfqoCkvaevc2ghfjYX2Z45k5wXmzKK3jQWAFLRYc9d4dq9DfDhUVubduFbBS7kqJTcXdgW",
  "key19": "3snrvzQyiDhNrcG4xJ7CNYE7Bc89apEkLLJfiJPKydf9VUEwg7PQU5rkAPqkZHq48bQQDbU5LdhscExDUB8C9May",
  "key20": "2hhawsvAZe7gVrFQq4SUzRqszWYpG8aJBT98DbDFkjNXkFsV48rr393fBJ7rVP5hRnPR6Nuz4tLp7TsiFPTjeAWJ",
  "key21": "62cSm6SevPjHyB9qz6A3smJQ3GzVfpVGC5WQoZJ9gcPdAcbgmo8beAoczBkF21S7pqBBg2qkY5BNAi3cuLZSC1hP",
  "key22": "51V3Pau2GLWXctrggqgtnyEmetVbRexKJJ8EhM9gbzgfPYuEquEK7UhiuCsYhKY5fJGxaoPKFbrispKUu3pYRCN",
  "key23": "6LQRgfm5f5cRVLmziTnBWhxVZ13zkVjPj3SPBX9H1siiL2okQ9hTWc2A6cv8woeWcBiEYbM2nZMCPnDEhjBjihR",
  "key24": "2urG66CfanPWMzsKw9UnxjFPPKbMuDJVSormykey6xEkCAmNCQMt2vAhTFpZy3EPxkakKyxjQW5wthAKCYqNWhZ9",
  "key25": "2ZW73rYVLhPTyXgdNSm9QUvSU5LmLwsW54CGuhhbp7yWcHNs2cNonHNAh2jkYvMukvDuwjYMPAgJUUtLcDAMGBUV",
  "key26": "2Y85WyF1rrwqpTCLeR1UhkudAQLmajSuX5TLCbJ4CSDnLtPUEFnY6jUhy76cbVyjcywhHbZYBUjebKwKeniMcizV",
  "key27": "7NV1RGKRXbXfUZ8zqqCajwQprAqLdjAikFAKwxJKd5HUqT1Hco1ZV8gXPPRLAEa1B4myHAecptRE9n4qqnPC1cF",
  "key28": "4CwT4TxTKs4X8EE2w3EkMR6vH3EuEs2iiXriiCiMvMXk4ewBmMf1HeWaXg1DSQZgVZRX1f7Av4MTKTJJJq23We7e",
  "key29": "5reT4x3QNLCbSmpp773FH2q6hWTxcNMkeNCh8UmneKSss6Qs27GDmPnMUSNXvnzeVJBjFjrUmnVhgMae3XLFyoMo",
  "key30": "cse2GkJqUJVfVmDrqSP6nJz7PjtY7tXk4QDzAi97PkejUTv8qkTRhQsNwehH3stqiaquer6F4zP5H7jgc6FL6Ph",
  "key31": "3LWKxzPNukBuKXMnbnc2yDyp342JdDNyBeXBMAuQ86pPUBCVaogCMpGcAhuvd77EkyK8uMNjupBZD7fewUUVNpXU",
  "key32": "2374K2bXmeJFoHPBY9cojzx1pVkKadUgQ1T7hQAFao5sp62X6WWSJEwgmd8DGNZ36Ao1CEj76c5i7aUg15zNDPo6",
  "key33": "47GfYkpLWdLHin22xkBCdwWwZyTTdg4AUYo6mhek4JaLSEBLZxYn2iJgLRBxEAH7wQUSpmPeRpNryaYBwjGLU5JG",
  "key34": "RpsZa7muKhEsUEvrPzM3GvYY4ZxDLapsrN6o6io4aS7Gn8Ey557XX9fBH2FtwYFRshrV1VGHq5HiuuTXCNAJVvr",
  "key35": "2PCJ4rbepQ1FpxVBuas1qTYnCp9y6JCkesrvHQtu99VtQVHfYzncPBCFetL82yGsbBNfDSCjnokfJF7vaii4CJUr",
  "key36": "3ejydBreVUMZr7CH1ogeWFCiB4GDX9q7VijN1wYGY5D2cNzYUkMUYQoYMafqg2b8FJ223NStsYZEyVxtMo4ZYqZg",
  "key37": "58h9thd2uWLofCSaD5nefJn2Tp6yw32fmXmmrd6euJtSQkuj9tBJZNL3AtDubvdfMs6fsLFqi8XNeGpUKEBeNz8P",
  "key38": "XNDXi2jcKpFQVxtju9oVogbPnUduD3ob7gTCTjGwoq6idb2iuQjVWf4izgAQe6mp3AuWq3pj9boZvDG7Lo8Me3w",
  "key39": "66ZggHPg9vdwyGPYc83UC9N3KbpLCPVZLMBKqYreUMgGzik67qGWCSCa4canEC7hcNyGxFbdz7TWRXGymFRXhLQy",
  "key40": "3MqHzg9admoz8GiEg6QACeDHBn6V89o2CaBE3SJn8sd97S6pge1CFauvgNKFpLArT3ndXZqwLaTENZAYdpjpRXVH",
  "key41": "4uWphLDWFRyxjE6FSdZC4WjBXyqdYaGbT8LR62SRQ5Rw2rz7nvL8rnjktNMT85e2rRNZfDY2cCZkjdMBB8i23mTQ",
  "key42": "3grV6ceGorYS6oHQ76uEuFFxpRup4PYLkDNQjkPsG1h2Yw36H5CCQr3LkpumdjHEqHrRTghxZgBGA7X5i97PpLiZ",
  "key43": "4Lm4cEg1hdEUaPffT7jYWqB3f2Jtmynxj2CAdh2ZDLum6uMePcx39LKoFBSFH43CTesYQ2n8MVtiYz32Fru7exRN",
  "key44": "3CGJVmRbKGXqNV44KkrvFBHo8soVeVHjEZ6U1skZeX5fwh8cjrwuUwS4r9gFpTptWuFWPEiaFUxLvDjtbpcFvoi8",
  "key45": "3BGDMNQr1qvjSCVNLAvBoGtfLq3hG93u4bhkMUdMNQPjtCLxWBKcrWQXMNsqrMqx8uHE4kVnVLQsGv2ZNtbcH5gH",
  "key46": "22k1uyxgHs1LvrZDB3iXR7YmEyUW9NThzeYHW9hjJp8mJma7M6ga8iKMV24j7wgctVT8YnGxm1EFNeaABURNNFsk",
  "key47": "474cC3NBsiSRUUX9e2sPZxLNJL5eEFv9KQVp9wyBjtyw6KL1aXJV1AtVFbVhjUnXNn6s8wcdawpuHc13V11q2Gnq"
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
