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
    "34UTQtkQ6ULjzF84n63GLuPdnFfqBy8YTFsi7n25hJ5okmyhXUcQZgaSnBX39Z2nfjHVj8S3eJ9ZXYLVrF5y2peY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTUy4RDQeY3sDmx9uhsTuSdhihVXyu5qsAA27URupCJ8J4MF5QnB7hBfsDHXsdYevNy3PCFB3tuuVbRN3sKMFNm",
  "key1": "5WYLMZ5y3FBS8mnfWVeN6A5Ps9w1p2dBbhUHVZUXjXnBN9Ka73LV8L31Zp15Vgn41tTqW2m8fS8E4E2K1c3LuKVa",
  "key2": "5x4xvAJH6A6T8yuWZoc4nKCpU9urDgXenyiPFGbjfKfo41skAqjkc2EWBxgaFs2yjc4S3QESNEoq8a2oAp9vHx98",
  "key3": "x7PGKCdcG5sW3fSx4dXb1Db7RLgdmwRenbzPYkbFwzzvCc2Z1ZeZmLsEFPzk4xJs65SsssPQqGoxTDe5kecQtAt",
  "key4": "QhypFeWhnnoRejDHfc7uZPBgkRhTpSyjhPzn9T5h1vZbNjSUeq9v5bp22DygwxMfcMft6vK7gRyvQgPmG8J2qAN",
  "key5": "33DP38ognjWCkCZXnWnv29UpfDUX2MqLA2EUx4Vp9aX4jrA8vsqytHSW7g1vnB7nfgQGfAi1wBWp8x8R29WaBpBL",
  "key6": "5HRDZR5mS5UTcD1BGdpKqTkHrjpwoMJxgLLBy6f4VtRb9zBoH6zDkDEvDTgd4pkJDoree4LUeK8mUNBkGHckQ23K",
  "key7": "24fEqjHseTMS3PM7WNGxHETPKaS4K6HDiuE6Pk8jkB2LBXhp6Hd3s2PK54iiYfvDsU7h4SuEV72wZRR3e84eHCjs",
  "key8": "4VPTpQUCXftt7okbqtAsyyi3U4LfFHoawnSmRp1LwD1GTjuDnyEk3ZXNGcQBYg3dRP3Nvn2kgehbHUQKoDeirBPz",
  "key9": "3A3Dm22rWDXjibwCHw92Ck6pTKfKsuzvtEqrbLqhyLAbFrBVuzcBdJJpwZpNTMQFyEXquUQVMkFkovPSnG77PF1R",
  "key10": "55q9Kd3w9LSpRn7iMc5keyHEzB82vZ4husJmhYZAhaWRj3eS64k7kfX6J6EdoMgPN7C4S4V9Zjb3PuMow3sYnPDP",
  "key11": "47Y2Szo7EUxCHFe1zpWphonSiXkXWfTUpRL39h6fzYaefKB9wibeJWn8tqBYgskxLXqbzUHBTuuX1WbTidvWHzUa",
  "key12": "3ESKQ992ZQsgEN2etnbycmaFYpBSCBJEjX8Y9bomFE1JBwnYYYCzLNFpbftDQ644xHuvoBw3W9EqBQKfLWrPSc9n",
  "key13": "2Yjkw4tpVbukRiAwghdXNBmwnajL77DGjynwo3pyaCTJvXVy7KJSDUPaBJVV7rvVYy1dMfzYVHRwxHCRkVvXdcBb",
  "key14": "3vFXGEXZrDREqW4Nc5xEEDVonnrs9v5SvhqpDMk3q7EWYgV76DzMup22e4T8J6W6ohgQ7sbeNvf4d18YBPw9ud8e",
  "key15": "2Lyf4MyKAorc5fPHg5fNwExfqrXD98kzeb8VtcoqvUBbxmjf3cjTufanhT3RhtYLbvmPfGd7bGuQHAN1ADtKbezG",
  "key16": "5BiTVMx861LZ9wa1j37qQDwgMdGTAZbGKhVJLQ1tw4maHwfe4kMmKBFfnEndkyZ1XoitPpM7LMhJB3zohbGevyUa",
  "key17": "5gVCK8oT9hUV2vfunhBsEUfBMLPwGkPgVhNFkea4zcXkhLM7mAXQucpTx9SGZzLSruWKHh4Pmg7AxN1UYb5LwNx2",
  "key18": "2rCoi9snfVE4CbQ4CMKXrTroDxL5cKhNH8RxZVEdX5YBmkdEV1vcsireaBmyXwCf6dmv7H4xbkwhfbedewC7eKtN",
  "key19": "56LUNYBSKot414wU5LBLBThhoSP7UiE3EPESWtkq1Bmw8KzTSTUYzuTmc4SSzv47ERXezb8bi3BkH8eXtqvYvpVi",
  "key20": "5PbKYfj3M7tEwySSrH2L1iEJDUx5Sc383kHP4xsxwwJA4ZcDDqQv1dHhnBdr2ms2qUV8PL43fDRgNCdMioo9RXhJ",
  "key21": "jM3HSzEPBEXpKZjhJPg7LPYDLn21Wi3zdywo1iW7XHSf9JagmBR8oSAhMMhrFXsiC7hudzR9M1eT188Bh9N6qCb",
  "key22": "2HVYWvHkecXYGJgRkGVodqc3q17bZCKpfDHqbogfFxYEYMNwNiCuM8a6AcnkgfGoupLXE9gxqBMLa2TMriVMHprN",
  "key23": "4sstjaZDbPZ3vi3PQB4E5MJuhz1D3XupapWR6s8TMhvr7uGbfuEMEFk2qXQzZv4LQb8kqxWB9X2kbmx4U93HXLND",
  "key24": "5BgP1kcjeLKWPupDbuEL67MeDGRAyr8nj6zrejpQekM8tn9DqswTcqQHYzs5P57o6YCNKKYzhwyCQt7X9xQzMirA",
  "key25": "4EvskAHyRKHqcpKCaJDkeosxWE9zsBKRZzez7VWwASjM1dsfq8KjDrDptHbPDJj5vT46d2Dk1rt8U4GzjJ8Fogh1",
  "key26": "3qRh5xXH5YWHjanqZk9QcDzrqk5AttdnQQXVT31u7upkhhh87khPYwBaysJQq7A9c6RyA3tKspcTBmyiwsTR7MMT",
  "key27": "2sJJDffg5jwrw23VG8h8S8nGy6Ze6MQxTyKqcsLpKJjgdsq2ALmFAQd3rdpSddJBqWxbeGdsUYznyBjNMMahYUJk",
  "key28": "2LZ6aKY4dG5qJK1juyiqQ2phQBE9ucE59RE4ZX6eSfCCgQngz5MAmkWAHHhVuaUMwob1YqfAkQcKLqbebRvt1ubB",
  "key29": "3BUJaQoJ9B3zgeYyByxkAurYQ7o1DbkKPuxa4PKnsiradbmY5beFKoHiRka35vLRvTtCFiYCWz4S5cQkXfooXK8T",
  "key30": "2dxdyfEWgSkPo3WoTcN7tkconBStnHTWSDNGVVWwaVuLz6nGGEW7BZAxQY8Q5gTbf1wUMxwzs6jXo87z8G2zFnFM",
  "key31": "4x2Exp9V89LEQzYspQJ1DT8FhGfxZBRGHpMGnJ9sHVFdyML3Qe7CDKBFJdXYGJGzFQSe2K1zsuzWZyGtJ34SX2pG",
  "key32": "2T7UrJwCE9n24ZQtHBnhcbB8ANoh1s8CXx3U8dnU7hjYKJULfAjhdJZBimpxWdFEzQS7ZHA9opnLoC99rR9S9d3e",
  "key33": "4nPpxnb4q86v9Qa9nDmWPg5YduR2qvdNnuyngHAe4zLuxUvCLm8yFhCamDGEs7mTXJVaZrUaaJXkfMiEK2qhG8jo",
  "key34": "4SUqv4yiK6PQ7DudwrpHpdHtTmjsJDsGPDFa17YoyAgpKmJeSsjjqkbRHXEv5Hmm7fRV9qH94Vu822EviJfE4JLc",
  "key35": "9SPFCnAmXdmuj6f9d3M6yR7HwuTbedeuWMG3DxdKhvYUz1NEYJj9NgjBWCyohDQK3XbhNtsiWJj3W9kVZD7Nah7",
  "key36": "e5SdWxcYXJa1iGp8Y9aui3kV4XBDUoo45JbEePSXiHExSkqTcvXBAHFkBvrTfQPKXJPoZSNqWb9o67EZRNJGRsY",
  "key37": "2BDCYAhrbkzmXWDLquwktwmyVBFwxVH27CXtYuuerAVKW2NG38NZA6zUPSpNB7RwTyGpFY6NCuKLKxm1NHRHq4v7",
  "key38": "3NWAcj23hTsopMtoUFa5Po5Y6fv1DoZ6tDaANR7tUZTxRvrXQFDJNBcatgGiiZPMBrcLYEX686mKwfRVM8tXKLts",
  "key39": "3adii16HuMQHaShZtf5TJJWk58b7G8sibcj9BWifsHAgJUdoH56ykHh2Hkx25BL8skAHpbLUFvszVEVoi8GseywK",
  "key40": "3ZucTMa4nT9cSpwLZd7tJAZZg3eSJHTKahoG5grtUwphhNNUHWsg5VChB8KZS39LokKcjcjUQjPNkSuwzuE9eDEE",
  "key41": "3mdCC2VuQCCBRphEiqFwYt2C5iA6QX18cnQ9M7RasXs23irYzTwW4gLbngYPQCVutZZ5SSyXsuZToBdbqMbmg5aY"
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
