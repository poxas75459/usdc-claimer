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
    "4hHFVj3RT3LcJPRJBppvgJdhFvt2cTe7Hzcg87Hjp5pSwqCc5ND11cPz5tZmHPnNLkXBioWcQbgEtfEVPdTJeZXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7PH4DNENEGDZBn9eWAsTdmcDryjAYEWWFUjANYLqvJRnBDmDXuybWewgoMCm8tQjD81BFMY8mN1abfuKnoCQ3j",
  "key1": "66zHx2EECFmAgjJ4h5KbZJbfwMKixfoxvqgHzMsMUd8Q21ccXJ8v2VVBB6cNxEAsRvTtzx1x8LRhHqXYviBDcdJD",
  "key2": "2dDkbXmi8qfxnPakApYUUMDZkMGzrUZQBtCtDSyHjLrCMwW9fFAkJDjYWfiaMKNFJQsUtj9EjxTK8WRHYhf8nCUf",
  "key3": "32P7Q1U5vAe6iPJqDwQwraYEZCgPJ8MtJn3NobyCMEKEDUeWT6ABEE2igioVdnAq2u6HppcpYsCMS86YxUfyWNA9",
  "key4": "52RPfdnHCwrwHJEeJFGt7crgYkiTGA5n3YuQMVPpC2CoCA3k3BTT5dSdLUQBLXhNzAj1KyBm5i2QFK7jhBfQECDW",
  "key5": "2Kpgwkdz8QNrAiypU6DH2DN1h4xJihxLyY4cfvcipPBQTZUUr9XHE6PkobmedbDrugDTqaTsWJPhZhNxm69WAvKX",
  "key6": "3Ri6mUDye1brTe2YshZyEsTQmWVQVmTrBXkF26sW7E2wznwd1fuHZWibdiUivE262Q5ZH43RBSY5dLGBC56GzHcy",
  "key7": "3PDyXMZpfNfZ6tepB87acETedrkV5tG3PbYnwfjiZT2NYALK95rhLcdMsfRg8kiWwKVSmREGq7batkGXEeN9WnM",
  "key8": "2ffXtz5rnFACsTfiVEW6ghYKq6U2hBA5PjjKRJPUP7bnZfkUka66GFDNyBKWz9gtyxFFDrqE29JsEJ1Vw7TF2e5G",
  "key9": "j7h5y3iLv77mrMjB9XaYAqr1QhWeTh76a7Z9vB1FqWBjZ1192AcZ3NkuAXZAd7oejRwPQ2T1mF36aQUVAEybHU6",
  "key10": "4DWiF9nZL3VQ6DaSbehtnvqnG5niEqojKfNDMb3eHrRT2FfbE3xeSAi53hXwXyAvoWw2Jp5jdUdtHALRkAuBYqW2",
  "key11": "4LnbyC4Jknp1jWztxBt45mhJraKd9TJWdkXigXx6zVGH4nxPsrzESn3vvjZEGbua74wxSF6yNny8jpq76bwg1vW1",
  "key12": "LauXJ6wX9hNQoAGjCNU8HT7baW7snr7QW2YJcTZM9vNTEjyPSi6Mp8JU8j6xwJXgLEYdVTA7ZXzaCyTwCuNU3UK",
  "key13": "4HGhaqdB3EUvbbbgwFLk18tUgLwJiaDSVsvSKZ6SXHTy5Ey2SJ1cDM3Xo15oHyTzAnctuoJgNrohVKC6HARsoAYb",
  "key14": "5BhE9nza4X6kCSxnYsKNr91q4rBsakJHMmfZHvBWBh7afHYUaWThe2U2ZbGXTRqRj3BtxxGGLja2NxKsLGPK5G5y",
  "key15": "268zduvAD7JySMxfyFDTtesQNU9dLdux5xzNRCGd6ttWVDCvfUZqGCNM9Mskf7Jk6Q6HhjeSuYbESPaZhrgcE8V8",
  "key16": "4uLEdxkE2rVRotYkAtjmkByonjN29wdUqoyt5ncvDwkcCQra8cMovt1T2X8v2mWa8St777XWjg9nSDXTmyKujEHm",
  "key17": "5GWyQRKTQZ2JotBSJArP7ibFFdM1vECfAVDknPY47eSVHSPf7iBKwW9K9Y3xy2E1xFsVWD8Eua1mDByUJ9U9pT9z",
  "key18": "4NKVHQuN5KYUWedrLBpT3uL4M8wPSimosrZVeXDHnbv1kXA4csZjS67L8p6L4zaKW7TnFrWUVS87ZdWBTcPKrCDK",
  "key19": "5UiHGU1LgwDwPrZddMJf8sLh2rSommrfwmnCWm1TGC1Lc6cCYr5jk4HTTzRJME5xTB74bDXaT1scspZcgfTHA1Aa",
  "key20": "5HC5BFrvyho5TmJbcU3FCsn1wztr56affiWQDPfmoYYULaLfR1JARn4BqnbBu9QRqZMk72WBtAjdei5DhQzGRan4",
  "key21": "4ggL5sDXjzhigmxFGC58RxQhHcoiocXaRBbMcwNekbUEbaA5jWsD9Fr1fVo79ZzECqBo7J8xEGnjBHDJTQ193YET",
  "key22": "3xbEqaUocwvDzqPaMd7pbUzzqJo7r6rkUMg1VdCk2iYih1QywrJraByhS44GdWKRmeMZv7bvMo9j9W7823TmnoVc",
  "key23": "cAMiQ9QCdcE1s2Z5W32mT2ju33L9ym8MTjeewcHk81MGzhi43SHrdJRNgvPB8s6QoZXPqof3yda85uqjdbmYhtS",
  "key24": "3iDQY278XTYRfR5dvVSfR5i8bgnQQR63Fk2Epqs6mT1qfUV6vnRxnJPc7ZNgjHGpY7eq6zZPn7WFmLdb4whxNmgD",
  "key25": "62ptfHhxbVQw8PdmasiTCsygMea2sAjigrgfL19jyinSGVQKGBbBMwVLgm3C3PsQhT1rBYwYfW45mZizFdTTKN2R",
  "key26": "5x32QvxbxCSbqA66ioY4FgAnarm7JgyFNyLPT9tkyMUCrqDuf1HPezhwJijpckrbaFc3jFDUzo7fWQBXkA4xJQk2",
  "key27": "3VTPX1jnqvhyaw8mbvp3H7xfG5Spz3JE9cjdVQ79aHzRYWqksCCDv7cndhthSKQGsaKx92Aagn9Z5AyTDiRhXREc",
  "key28": "ZbkyPcN5R4HDHKJw7yQ12J6sPu7TH9qTZvLJ2MSwmTZ6e4ankzdMrYAz4fSUdH2cgHAMREGCMzSyW7jnDHGZ7G4",
  "key29": "mU4P8Lmp1o9ycuz2169zZxM7rJ2rP8kcyPbTcAhbZBqgmttmUyGWtHQy5nDmYobWDH6GrMqFdgrQ6pJeQFXzYL3",
  "key30": "2ARCR24yXhnj5TqJhoxEexHeBxjiKXyforBmMmCvvU7dWK1US493FEBoAwZVUJpgWwRph6wWkcPPZH9wx6ZqkQ6r",
  "key31": "3bsFUxKCHLQihfPU3jCrWf4hTgz4QTZ1UWjvMf9EmqTTLhvgDHtTrMZEXw2C5MQPYGJMcUTC7pLr2gGX8WFXcUr2",
  "key32": "5J7xuyKK5r5C24f2fs9uqfwkqjvzp9EJPj2oTZKxPBX1L2Kb8z92hjr7FYf2mgEDqQrCrVW3i6T37ukuGW2QTYya",
  "key33": "2fyEzg7QWi8UWrTK3d44s5cpaQ1iBTuw9igVPesQQ3bgBRaAZXfzUEaEtSrZMWfuo5rfXUNZHGaFGmVH1edsGHuS",
  "key34": "3D6CjaTejaytSRXk3tVMxTXYiV2HUi6d85i19ksdtyzUU9Z7FWJA66kujc4R1D3JDbwjaRtoY65kETJFvRCqwtSf",
  "key35": "2xVU8BHYXihHapXNTLLEe7eftTuNXirJ21XHHU2M5g4oxPrzS7Wckrs7QDYTSTWkMTYAuztQcs7uqq4vQj9h35jT",
  "key36": "3uYPUek1nTkzeQVNB2QbsSLLRU8fpxJBwcXZVFGYMVxeGmA8ngM9V7KTUkrBGdmCGGyYPmn3JXSvLR951QeScmJa",
  "key37": "4sp3D6KdntyhfUN2tnZ3wdEQYgEJYuGfSSyAjctmzDiq3sU1FkKqSkXEHWw1mmvh86FqtS7f1aShx7Fs8AFPaAzE",
  "key38": "ckfbetpuy4rR5M6MxDhDKicaP9PTdgFmqsXA7oJ9LT5RrnZovUkA1xkZ2UBozAnG21Zs15oXWBkzzo3aZSDk9pb",
  "key39": "5t8VMLtxb8AfQXBgFmrDrNJGJ6X5DX9EZwJrHERY7HahV4Dm8eAqtHGKaBzBK1yNVvSKudWxvAK7uunp3d7kz6P4",
  "key40": "3cWgvzob7nRYeUw8Z6zB7AtcUrNLhepwfM32U9dAZUZRtV7sHisbWqKM59ikhu7A2sNmYNCHuKL114QRjuHZEdw3",
  "key41": "5uRPJLq8ApxQxkzohaQA1WQ4itjfkHKRuEds29Ucu2jcDLbdQUQbtxXTdmSPNXQX861rm2pfDrUgmdvSC4T4LYPA",
  "key42": "2htU4pKVQ1hYsXZ56HVoBdk92PxtNurH2KcQiyYMn3ZfKKjKHxdn6T5Ubo1wtZDC19bui3HE1MwUkm9QbJufHHeK",
  "key43": "2f1h7mYS6bcqvYKjFzEK4JkRUZ26YaWKWk6KHsDuGPm6W3GLQFueTwxqFJqfaAc4Am5PawgP7EUuQYNoRj27Q8Qb",
  "key44": "2LUykwYU5DVgyXkmGdEa5DexkuPKwdgqHiAhUVScPFvUk1XjxWYNd1vHV8T1uxXcMjrLv3R9vxqKt2STYMPDjYkn",
  "key45": "S4xYazfu6xwNhW2vmhGXYryX4iemLyPTM4U8Jjcm6qW9rRE58Cc3UGn6MTRAJioCAgs33hE46ygk2se1jP7B3YC",
  "key46": "61aDZmE3sbW3HgzrwUAvTXTLfSsyC75JcGN5EfqJPnvsdjGgg4iCCdqYNEDrFVxURwhdPRhPgMMNjYhgSQWXWoff",
  "key47": "51bhmaY6oCjeqdiJQGcqaH5JX7uXmb4bpLyc2GkU1pb3eRb4KVDqRpzxT1fdAPEd1WEKmo2R3moFeQdgcrrpoa5A"
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
