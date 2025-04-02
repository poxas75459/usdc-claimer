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
    "RXJwBGe39oR8AZ7vnQhvNFsyyCtf23fcPbRAAkj8AobfCjs5m5S66o6pfy2RmGesqHbbLdSFjhgbAxaNEDo5rEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1YmCrxTuGwX1t3QZrBg3Ck98oXN2JVzQeoWAdC4fU1CVV7YMcLcMnowN8gaimJifiw2Bv1qoficxCWL1McduHk",
  "key1": "2gAbEwjxMW2uwT7yuYzSj8jXhkcJfSKZPDvPkWLbGqFxkKsgrsow47HUdWcWAJwDVH1HL8GJJf2JSKvfmxiHzLTQ",
  "key2": "5989zZdtSvZkvcnTbBmzLF2KGjxe2JVonFLqgNVCLDEcu8Yx6woUd3u9fjJqzqBRmLTU1coEB91WXZVcEuB3yKZs",
  "key3": "2Xzr5172xcenGSBjq8ekPhwjwDjT4Pi6jPqbm5vK9bkzQ4g7csUDXp7BGKDVfUL2XMY1c5MC6fb9cm3YbCKmjPv9",
  "key4": "5ATLJHfKBwrbmhJ2UFck73mQq3FB5iLrRz89HpkdddUzEjCQGxgZ4cP1hLwJuPMZXPvsjcxbukPKqFCqZpsz3H4j",
  "key5": "4kXmxa3hbT3mPhMRTpc1SbwzZ5KigYcLXphNDizuubXGKz3z6X6XBXjPxDMEacGB9UWKQoqXFjqEvKWcWT1tCESi",
  "key6": "2kupP7yA3C2WmHXFSdcCK1y6k36Vn1ZfXRYzn9g3sDDT36Gp1Ve6mok3QAEShMMGjYRoSsNFZs6763UfqmosTd9e",
  "key7": "gV3HcqM9XcXgEJWcYpihGyMvJSWhtC44oFdujGihtK7dL6KGehwvc6mBamxNcoh9TMmL57obgy4pHmSckw9gYYS",
  "key8": "3XcB7ZHPmmmtgHHcHKqo1R1Jkqa27yDG2EWuoD8q6cyxHTdcBaGVNq2zZ3BjdtfW7w8J6FC8Fb3Z9X6Jo3Nfibzg",
  "key9": "Da5XyjfyFrE4um5rfNQ6VvbaADfD96mti5Yq7G8JxVsq8skJzQ9qK36daa4D4FsEQrF4yrKStQ7ob3mG4uyFhHt",
  "key10": "4wR3Vt51sDZRsj7acsbHint3eUiuKTKTStjtAVBT4w14BGbh1NJ1WxcoNSqQFVXL9X22Hpa7GUaVayhxYBEetZNJ",
  "key11": "5fVwz8mrsMLM6HeaFcY2S89knxJYSpHtYmVTp5xzyfwjNjNmcNgZjovnKtUsvYwPNfEf8TT5o63ThY6abG9fF3wH",
  "key12": "3g1spurVS3wdcxfNvMYr1dJGJ6zLLMjTckSWoVQbkWnsVk5MmjVDWd6d62eiEx6o5mGAN5hk5eDZJrXMsRqHAS9B",
  "key13": "5FpWzjAgCKeZAMEWsCZEKGoxAAhyC74hYw2oDvbv4RwCTjGX2MzyY8rGmdNUeTNgR8cnonh4KobP636eU6hkdkWN",
  "key14": "3RA3Qsrp7TyHMgF2bgZsgggAztB1wkBmsLTnZK3sfxEQNDb9tBt3Z6nGLuZ26opUXV5ePA18h1JCY2b26JLgdEaU",
  "key15": "66jDLotU8iokNiX49QocJs6mUZQtoD4oaL6w7SP8t9aaBJBtBvG9GYbQUj2VTXyffU5SzzxLzogVnVUNWGGPoxiA",
  "key16": "5RZJSQ4rWi3aTaPd2n3AgWFbzSTvc6ja43ZtviVKvBPmoqdJCNk55ihWgyRESBQyTQJhJNEtFpAiAuNVCiTUWVS8",
  "key17": "3UN3PW6gBRBcoi4SFw9nyT5E3by5yMXGyKCa9CTjLVofCCSRNKTLESdnfh5rR62R3feWgTD3KK7M7Lc1eHMkZ1VD",
  "key18": "5tQaBa4zwJKwYoGwXvxV2vWRVzYtWCj6tbBc5QkrD8SoF6Yds29u8APsAfZHBPXenvgieQ92KfMpbmp96u3jrEq2",
  "key19": "4pmgzrnaFZ5UWc6GHWrqoryePnjRN1mxvgjEKuubS426Z7tBHPRtzk9cS9EA5XucwHayTngV9Tnqvpqf3f7hG8cp",
  "key20": "s6TYFZeVGKR8YjGd7cr7a8PzrgwaZsGSvRHVnHJoxZFSx2vMSH54FfSbb1ZxVLnHvTr6VxqgAK5FJCuF7CYP7NP",
  "key21": "3b1F8Nc48MUqY1DXRRBpbD319BPtPUtubbVNDbHLRBcDfsRryF5varToQopsup3h9BtGFbAoKZU6RXQgg1Sv5d5Z",
  "key22": "48Cxk2kYR6j4ZJSmoBxuJFiMVsQjXeho63sxFhBgwKK35SqTdTueDojTrMvAU9GsqmHLWJZPfjo3TihTJu1HQf83",
  "key23": "4YV9cy3V6DBidD5TSDrCoAHNd2rEKf3juwxrGWcA6rxNBFJLH3d8AwiC7Z9DEHQAidnq7K2SxPQ9EbsBThegSnyT",
  "key24": "2DZ9txw9PPFQvy5VVtgLkZDSdDRLyHDAXnxCj6ebWSNMu51GkkoVd23K9YJZjPNBmvpcNqcNogYN63zZfNeQ6oXG",
  "key25": "2UiHQYtSFLpgsF2aeNUwJpEK6TcX6P8exp9pQAqUdi6RnLA8NT93HxFSV73irmRh5ZyjLBLhPuwE7BxzFMkV1FYV",
  "key26": "3cqNpSJCLEymcaTysBcBPPzeSQTEAWrCJBrBfpkmLh4hwMtSJ5Mw8zYT5hprFat2Td1kG4bMMQGFgL5kjNj8sF6j",
  "key27": "4h7XqQzKN1FtDNudf7PNbocxJcp3viHPymbNTMuZMB863R9RmeLt85hTJtxhw6Mwbu4wkDi91CypN9u3VKx3Kjf6",
  "key28": "Sckxb4RYpc6fPZk9cZFYAbtuiC5Z2d2i6RrxvrrgM3yhaSN9T43LDn1NXYA2E6ALUaFB7RHDkxdMc9astSV5B8x",
  "key29": "cPSE3CzVhDgNHe63tK6wm5ZANYep2G6iKEj1PCwUAaXxSafsjURDhFv89JeFV7pB5i5mwWWojsU9pojWG8ZKANs",
  "key30": "4GWUkY7S3SYpC1KGDXTWk1xb2yW5HnCFSUM8S4QbTLpvqPb3Si2DNGHQYtm6y83Ajc3XUNV8dBzzf76yZvad36R",
  "key31": "qfptT3A7MZRNRt88q1teJadALCt3FSswsjEKtpVxuZSgRweMeSfsXonuX23jgkqjbwh5Zw6Cn7LAWqPXYeKVTv4",
  "key32": "21dehB2nm2nX9Nw8Yb4W1YRCoTTddkjkfNVCrmYyjGUroJJEFrd2NXyxUqXdiNMLBVSb5k37po7S1HbEwAjkUbjd",
  "key33": "25kwFv6ghLLLL1KUzj5B9s3HmMdDH91U7uyLeenbazBEVMmk5XcDsQAFrk6YRUaKNQZ236pt3V3h4mgHGaYqMTVp",
  "key34": "2ZEHbUDdJ3RW6H58z2WAA8Ggj9kJBUXYN5igbUccBCCCm3cdgPFoMJZF6NDxafW32efT5nz7L99mgiJE8khyigi2",
  "key35": "XLnoNCJGFhFYtqFrPTrgQ1kqntv4dwr6dRL8q5cUPw2QMss6Y51AJKEdajAcopxxnWk8ZdvtRgQ8bvgMFoeDAEY",
  "key36": "5FSFVHj9rd4627rFWMT2A3PV1svsNnBP9qmvJtMZZufjLxvatMstAgjpgaKuBg7WgBrWo5ssqs46Xy1ukZN5JBie",
  "key37": "3i2xqeno3QzdahZkRnz9xkWiNeyTw5Yr9HwBs2WWoiQKR9qB4mpKjVFk72KSFpcdfviWkgn5RX4x2YP8Vi3qgWc",
  "key38": "5fY4JyEPhd9gqMZ2rQ9D97qpXMTaHA7sFhid1cL4iHdNBfx87hEEQzjfhxDmXj5kRrfLDUq4JuVaxkVSCK5HtvB4",
  "key39": "swYSddcbvu69PEuoTCRzJYexK1MQXRXue6BCWjrKbZCcwZii7nze4QkuBcd1xbyHAKqS1Rwa8vgP65Ge3dmVRbb"
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
