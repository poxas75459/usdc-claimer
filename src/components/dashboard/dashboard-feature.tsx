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
    "2vbZKzKZVm7xUoX51GRMbPBzNX1M7CqckfUgVDKspNY52jQxchtcdnGCs9rQAFZNoF2EqAFCCJiaw4FjwVpyR9iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLh6pNLs6XvX9CWicqA4x3r1MztxxkgdY3qJ9nfsBLNi6CxAogrH5e8NawCEsPSES5eJFhkjT4bpe8L2AsqxTnH",
  "key1": "55MiXbGjTDVmjwTDqQYRibafT7nKGA6ixABdh1K7gh4ncgiysbCGiVsFxgViQfxmxBf3n2GJLvyh1pvHvoxDkyHS",
  "key2": "5Ep2UZfxNP5Yqa5EwxiGEWxLzoi9b1GsgooZdN8tJUj22in5Xdmx8hFFFJGzH9JkjQ5JgVYgAkTxzuicyD6ARYXz",
  "key3": "4RTzFqXCZXB58bLaAR7qczxjf9hFrV674xaJSPneJnpv7Tu2wTmGEei8cM3sMMNkY2iyTGLhsAnMdKkuEJcv4vTU",
  "key4": "H7tWLSJn6SxP8H7pEoAeEzH1dxXsz25Py25Cf4ohaxPcrR4xqAi8N8BgfVdxnkER6ts3i1iKHwTNDcvjBLGxSV6",
  "key5": "2KRzhL1g83APUqnAsUZioJMAyShcfrfQXwj4ThxaW7q5BkZgZ76DYTWo4XZkA4sXBiLHESz9acC2aAVURhr1kwoj",
  "key6": "3YzU5Wdsu3NHSRnhvDcRF8NVXwiiFhxcZmGMzjL43mDd1GRnxMRoU9T6XyKjtgDYCFYvM2qeX2C7oCfb9KZ64wcr",
  "key7": "XSbDnjSmGGkiPKKWT5C1cG1FWoYW8ZXAaDpaJCn1EQEQ2gzpLP2Fwg6DVqiBwVTBZvgKphR1ku53fwTQ89anu6Q",
  "key8": "5BAM4jSs7QwGCgyRFZHmb3sMvwkAjkhRd9Va947WYRai5VnnBezW7u81jjaZ9TSDeYvkJJ5wGwgvy7BBLamrDhrC",
  "key9": "21SdNBTYyxkVpC25j2dspb9bLyBTZRLHPQx5LFXozWVawRwrEzoBLCpQX7Hteh2V53DZThrazaGQKvfkmKSEhPkS",
  "key10": "5LRj1Vygj1DvhJUTwCcb1hES9ShiW3HVnZr3mK9uPMRNMfzquEQ3QamH1NgsvEQZaKdrNLmNXRB6BrPkqac1brk7",
  "key11": "58sVSyupYBbcn9ZgMRvtxeGGNMqiLetzy5kjk8VfLUWD5MFfjZP4yRic3xr8XUgRKPFCUHJARvdFEG9r5rxHkUJh",
  "key12": "4qkxMnkZXYwaqSgB5uq3GsZUXUoxkfQPVDbKcB7McKfBuYCZfcsNPdeS5Qyokpwt6cbtMEduMbVYXrREuaxrqeQK",
  "key13": "2Mx9gi2NYdYGJZ2bhcTWSjJwL3eHHFDJye2cicLQ9m5uznHyDwkJQ1Ad86MD2qdn79WS5JMvXdb1aayA8Fk36a33",
  "key14": "5GSbUwfYv99faKM6GLDN6ctHJmiyzkPNKFz6z2YzJuLpz4ZiDQig4jefjyKDQHgdx5RBrPssM6fLtXR7YcRh9xxC",
  "key15": "2aJuKyRoavM3etGk3NqzLDUoC9GPTyGCJbpA5aknWrtvA3FNXWxY7ogfUCAoXDoW7mcULZQLPpCKYWDXuYgcoopb",
  "key16": "3zHo4UsgJ3djiywnHSkYjRybZU7AkhQXDx94YbQB431VXMuWLjuQfsRqc2Voj1eis1xcYTHuTRZLdALMgjFgvquh",
  "key17": "ZWR9MzrznpdmanYtyWSzQf1CGrJSNsU4HBhmGFFs4AKdEnyi3g4yGobTefi62m97xijjA4USZ4z8WKRJ81xvnRr",
  "key18": "5AR2L2KCPYgbSrtpXDgMS1KrPxxYRNpbNpBvXQcXvNf31tvxU2vYm1STyM8kN8XtmURDF7Nk1uhAujnnNRPVmNUs",
  "key19": "5VjRXJh52XC9xuazV89PUvshyXJC1qqbER3mNQUpRuYL73QKYC9jy8MzDaUc5mYV2X4GQRaBF4q5yMa8MQXAVteb",
  "key20": "5SrAqSVcpTG8hujaCULKGQ7P2wRgFjYb1epu362tpEEGRyVrg71cWKTSrv4DxByv839SAHMeT1kpDVRuPN91XYuC",
  "key21": "4PqEtsBp9rZkc34mUb7ZQyQ2vbJQR7m4bvHdvUbS9DZ6uQbRSM4KHDLhz2KnyG97N8BH97fudzUFgf3cuMBL6RYv",
  "key22": "3TMw6GiGGDs2QLsf7AndQmCTDMvihkQAXepr87X5kHoBqSAyR9vZF88nSojDdZcMNjrrEQJxuweSWfwfcr3kwEZW",
  "key23": "5SduMJvRVseywfzhD9GLrGM9X9RMQfXepGSjJjZWcQ8wg55cTiWMzBGRzhdQRNkmrfEkJaHCXdpWAF7qwCGr3oRi",
  "key24": "8jBVvJKSY1xKQafctmgpSpczLyzmRsoWgjb3Bm6ZsLb3r2D4mPP15iB1Y3vQHLG9wMqQJuxmPdCqNDBcAHy3Ev4",
  "key25": "4j4G5WYdTBCVR6Czshi4UKkQgBXLzN9xg5QCMFm7G2DdCbjjNm9QWfy42kKaXe9Be9DiEeAT6KyKvLSfxhqnGqzk",
  "key26": "39sC3RiShJWBGJP8hDoDxhmzc2oZsPXhqtFFo8y8yg5oBg4TLXUF7tfmUaZA2fCF9SoJDr1WqnatmGw91LvGJt6u",
  "key27": "5paaJzrGURbCr2heJTo9atxntj1kBpvLGXWYzVutB2yQUugoSVwdVaJoEaxWM1JLA9DVghk3DwSPsfUmBY9zmQWo",
  "key28": "jXuPiKHPEdZzd2B4NN3xvN9texWgqxepG1WrQtQB2zbm2x6QfZUybdoY5JbJrUHCjzmLshkaQArxPKUk6nHujxU",
  "key29": "2H1xf6mJHVoAezhFMbJuw3vHumWMDgRxsxndBEavqUY4b5FZcUbQ4stpnPmx68kcZo3w9RWFSjZJgSKpf75VN7ig",
  "key30": "SKGZ6T6enyMsJd9oD9m65hYEEaUEK3yPM2teGMtmJv5ig951vgq6b8bvu95xWoNZDTD33zrZjtCUNaVZKiRvnHj",
  "key31": "4fsqVbFe4WFH6PrKZnbnHxkA1HfQxbbUjype99Kjfua4GoaqJ8GevtjweTrWcUm6xkwQWo2hHM5reKcR1hmFuMZu",
  "key32": "3YLeU3cZozUuK1U9YZdKF1NSu5kmBipaeVuQicJBRxETvqs9hFtd9LxrEKpQsfNUVs6poFaVrRFVGPAmdRVqdVSc",
  "key33": "45LVZPQyp5FJbkgQP5unjUgPTeNpXVi74FTVJC5LzCPy9F3vwB312ViNhjhymMKcVYYLGDMumgaLzavm2FvmHigv",
  "key34": "UCori8r66TPAH8ZxadTV9iz2GucxCGdgDprU58ympTPedpahQY8pPZMUR36nKrLNw3ycqqaKqPBWmYNv5bUirfD",
  "key35": "3Qgfte9NE5aK24fe49gzMo2B6ZKuM1znsiepR8nMa1tcTS9aCEpLGxjQdAadnTC7nHZcrby9JXYiCynzsyWKFXLG",
  "key36": "3kZHPsuFBy9fa2BYveZJCFv7UksX5uJFq7RbsinUyq7ZhGEH9BMD8xF4wvmQrHzPeJ3cky999A8Q7q85gaCDQBzd",
  "key37": "38pTBapo4QxrhEBsqEPJCp3qYWCQEJvfrxdYHhrnPhqJvX9nakMgWaxUZhQySBEYjU9M2Rho9YSaDAmmGixAn2fX"
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
