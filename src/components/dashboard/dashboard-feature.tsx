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
    "GpGSUDvogZVBNFy2ove3CqAsM5GS8qwtVCMFrewBd7g2Kd3gdfwSNRtcyDpyY4ydUAFrmpXwSpvJwUknFBHuptX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKwnVPqZEuHKH8KHLfE1W3rqP88fr9KnXP3PrtrzJiJG9TWYpSkD9oVPyD778zJSkfcFJqRFCYRGSJGoFaDZ2sd",
  "key1": "2aMwWrJemWcPpDpPXqS6zEPAnGPXoH1gZe8EnQYPapiE3VhcKAyrn5kTPkED5RbBk1urQt8LCJPTkCjP5SDhXSWa",
  "key2": "yiw7EQLPYnrw2CrcRQNxQNHkTitNTDgcJNLwuKSTM2ogCAxVMF8d9MtX9zjnn1UscvYJKm8B2QKzw8HX7DSRQej",
  "key3": "22w1MY9yu5397MQQ7x3i7yzMWoH1pDfKcbB5fv3NaAu8HCqbi2Tp4XQYn9LhsAohucTc3hxPCY734Qz74HzrvW6t",
  "key4": "2oAmNN5eNKVTB3PK4pPrj3A5yKAQn91wT8KDpjZ6XwVeoS8M5p2MVGrEj9r1LhBCx6L7jgbgH8We2xZLjkz7DP2X",
  "key5": "qjScefeDmg99RuZvmv2i4ETF2rjbpVKE5ci7NuzHa6e9u8ZDZcjxGZQDJ9NvY13Sq1VXaFnb4GC1p7DTuBQ76qn",
  "key6": "2ywD2Z2BuzMQgwTPWStksToosUobrXxjPRDnBX9rqZJhUxuGJF8B659fFqAPxPxHgbJ7RnYFrttL2omEKBJwdU8w",
  "key7": "4gG5f3uy2923UEUHRPRExMZpjFappni9Fj5UweFf48x5WkAPbirndCwjYWuhKBAK98ER1oJAuyK7SEpcLn1j7wPW",
  "key8": "2S18kFseq7gReymyNF2UFrPwxdgjBQEw6pV1f1fJMtYzeYztgRhQwPQrS1FLToVX7jyM8rkJDSy3kLg9T3NygvKp",
  "key9": "z7SapVvUziEk6F9tBZksPTBx4fSg5PecqLN9z83jTXoTff88oLMqPML4onBREio6ikb9Lz5ycNzoK2kZS17YXdp",
  "key10": "47gYZvuTqxSxUrXq8gbAW1fnpppawHQDnrSwYHMJd3cHttVNLycLNJ2ZPswHNcKzdedAT3VccQBgx4AKLYFuncg7",
  "key11": "4v4sZLuSuuThnT6tSh7qBQ5pgnRv3dHktCAWDoSwU9mK5K9xcd9GzLy5QErrk1bJkivxVuJNzv57BduGXXxz1M2N",
  "key12": "3qi31bDecp62CXCFdMLwxfRFAY88Rb5H38Ce849zggHtDo7fLsiCEJeH54bBALyqWrztZHFgiBmfaVsUxrVtPahw",
  "key13": "3BuLfdugvUTsTBKWGZXo87BP2JJkeodYSBtSy5DVmS1oMX1FYYjYuZhFdxdjmbiEfzGKGqw7DsWnxD1yo8C9g4gG",
  "key14": "qETe3cwZqh6R6P6sKiPkx1CkpQvSZ13pC2JrrzTs5bLMLSRkzB3n62v8yMfXQMRc8N8YWwcDRi68RLiZgMpppP9",
  "key15": "wvL12EFfjG4UKXvkrxrCywkkazi749uCumCgMBfi8Mp7AMzsZdiY7BeA8vwfocydDrjKaN2ai75MS5KuQajfU7d",
  "key16": "jyWAeqscdQJ9T5Vvvut6mRbif8WHAEtzQJDC8zhSg23Un9KHCtHWFTVb1kmipeGSLEqTnzQV8cGHGXLjmhYW9CT",
  "key17": "3afVhrW6ncqxBEBKiaK896MjnHoSSmpEz57ArWNmTL9NjUAQcp796ggE9MoggHqa8hzu7LoAM77mmwfBVHXF4jGi",
  "key18": "3snhHHkqJXANydHA4reu9CnUpxU2uATCnLec4zVa78m34xE32y3nG6JsKahGdpnBcA4Guq2JhpPLtWWtRjnTgBq4",
  "key19": "5wRGdFfZZauBxdKmMH9kbFdE4ho8j2dcXENmJfoTPKAVWyzZbe2DnJAWWUzEk3vV2aWtpovfuAfNB3r3ynaFD17A",
  "key20": "5YdkgFyMznS7AqmfZjBi85eZ96cNAeZb27wLKGCoGbKhiRZ5JGQ5EdCMgfVRG183kgRytay588HFpcZ4mYHWGyua",
  "key21": "4T1B5Y2BM9bBhXtaeRGtDCobSbk7zv1vLV9iJyBC1g94r7vkaP8Fsij6QjRsaMDFdgwYZFD6DCXbP56mHZLQJjsF",
  "key22": "5TkoTVpu3vwWErVsxDtMfrSWi8Du5V2pvcpWYYJqx4MqKNBf14SPPhSnyZnTqTWzqxETG5KBKWgQxp8GTfDNFGP6",
  "key23": "34ceGnRd4yhsMK1kZ1XGMrrZM86n8dRrCv3ibqrzAPBxUsAm8hrapuovi53t58G97xTk88MPz61CtWYAW2vxtJbT",
  "key24": "3AWFAK3qh7JzE1XraKiZn2P2fHJxaKDwZt7WiyUtUSCVWqt1SLadbGe8szYuQ8H8CwbEa6xXK7YACKA2AwfgTMxF",
  "key25": "3RxN6fgin7RCjeHUAyLbKDBPzVutP3oVFA89QCa4v8APtqQWDPfGEejCS2huBhodMpxYKXPow8pLmgRKwvYGrwL9",
  "key26": "2GB7VwxM24EifA2KrDo3EnhUt3x2YxQoeRHgibRB78dtVz6yEzXBxGLpdQtSvQiUVSkuVYkrVNsDnohknsbRkcry",
  "key27": "w7z67adQNdcX9Sbpbqq53tyXRMcgiXkx5FsohfHwRWvTWPRmvxnU6UG6Wj1Ww4FTfohZVdiKf1cxzRbo1mgY6Yr",
  "key28": "3GH3Ks2G8EyDzHJY38ajCKnFU6B4kccdEty7TJDCMu2z5B7oU6mnjUejYzXNr1KA2bXfiq1uorUnCbEqHgL47XZM",
  "key29": "3aE7gZizQR6T639ZXwSWJDKPZu2r11C1r3qHBRnCLT9GghkUzSA9jerzkZGq9y94Gtj5P4cQmVUgmLP3ykZ397SP",
  "key30": "5PkshNUY3MZfg5JHL58KiivorgGkhZK6Z1nNoCocmuTWN2MZ9d32mryAKK9HqFQRysKDRBxjFkWQXG97ugDuoW21",
  "key31": "45aLQBRX5MZx2nbC1ABw4Ddttu7wFJdTcckpCcWMgi3UxfmQKoJ6gymhC57iJWqdtJKRfJGdyGrbExaZraiZUmod",
  "key32": "48GybHZr4GSRUm4WFnvJm9WoRc6694d7xTo7f5CQ5XgiCsjXpvs8yU8sBD6dMW9Pxvx4jM86MnRm2P7G5DhJQ28p",
  "key33": "CbocikWNFswUYrtgJxBTJJ3mdhAaK7rEWoHBKWE4geauBeQD31aExayrRCoee7vjTLQ7krPCiriuXCSJnowiD2T",
  "key34": "39QJHdDfJJNwShnGcBwqmwjSjK6qQGwp79GDgfs6AJ6iz6isxAvNSYw3ay24GYcaRDSi3VaiUPNiHwxKLRgNm2g",
  "key35": "3X38wVK96rG1Pv491LRJpmfubaXWPDZCj5mhnvJZy6Pttns12xwwQJqfoiaxrMtkz8QNTUxH2CmiJqkveP2hnRbF",
  "key36": "QjBpmfjLYV3QquETrxz14vzGXBtzy2HuH34LLJZPjHVGJGMoN17ZQ6RjNVztUeebYDX7YS5eD166awB32QtUKUj",
  "key37": "MopfEQKrxrLT8XegsUCup8C9dXdGATHGzB5Dc6x97nEtS5i5Fj2eZ6uoaLpbcCFUwej7CaHH6bk5MCg7dYLDitE",
  "key38": "3NZuKuyrM8Qx2dKTePMzhdL9a8thDvDS7tBT8vQsLkcNiMwwio3vCNs3mLragy9rrqgEPMGmTNMAexBVk5PBEgxA",
  "key39": "vYNHuFsdMPsqy1kMxucqUebGgutsLjqt7uAfEq1pquPJyhiLnUGzVgyCLp64p67eo9KBpZ4zTHxJvkoJhu9Jwzv",
  "key40": "5JyzwNMs21KvpnEacpqVW1p1rNPrTFsdydPh73QKuXBZDp527RLySziqa5LZtkkRVGsJRfAEAJ5Gd4HgNNkVHKMU",
  "key41": "2zeBX8CvoM7gnhzizq1qdA7DBzYRxEdXYhLwF6Emu635vPKo6mHaJgVButfjnxELznCxvxD17B6PBVBKjXUSB5N",
  "key42": "3z7WQBWEQ78TwRB8GZvuaYi1cegtnjjQipQuCkhePg3aV9pwSNAGPLptat45hErdJ89tqQs9B8vKKmXRkBSF1LjY",
  "key43": "4XkLDBVpFJJaadQ3aJ91KTZDg8X3aRCrB6Vj5sD53tTkGtfjrZW3apv2XMdTVJjao3Wi3kswjfnkCsUmXrAVpzKe"
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
