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
    "3i1D2d8GaDxkoQ7QnWhoe5JY2978Lg4PnEp7opdpX9YMzeccWrjyAQftqyNLvXYVGm7FNUYasqASq5ysYwqd1AHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54xisGGEq1xdA5PEEDij9briFpK3CBUjGBBj2xN2AwVyxz8LShyvLaqsbPbKt1mxxMR8JR9xkrt6RJT574tzKich",
  "key1": "5sPEz53tWmsN5LvFkarSkq73j9bFfqYM1n8V2BpsbRUPeVzKPtaJeuc31S51Z9WNeFnTcr5qZNcbuwwNpj3bpUsM",
  "key2": "2miAApKM3xMK9ckguYUaAeMu2U3vHdDqwPBJbszRys46hKkTyNka1ZrdR5G6mLyXf7FE4LnheqNJVN5EPqiGE9JX",
  "key3": "3wRAQd7Uxk8kKCTteLeghQDxeMMra3FCMiBYmFxJJ7Ev9n1814HWwnbMtBNmJ3jmYBPGS8GJaPh8EPVUbzCmfh53",
  "key4": "4L16kPsae6hWBV2ykJTVLaJXhpVEUB9q7H3MEh3trZ8uxQx61NQded9HEQt4ueRbu6FoJAtTPVCLcyLzUv7Acvys",
  "key5": "5RMEbYSxTX2DjmjerjCfjXY4D42Z4kB6VVN6tFBMJNU2nVnM5grsjt8fnYCTck74GtKKYpFWjSWfAyLUMktqgnVS",
  "key6": "2totX82aXixdbgeSchrjNvrHb2X5NK3EABGK5tpHS2HE6i2gFSFd5iEW1JZSaZo9qBUdgHcSXLj8hKMX9SBHXcfW",
  "key7": "5pVc9HGXaPASwf6WaExW5jTxAYZ6zT5kybVGaiZfJFXD9m4wJSEWqGgq1xab6X8Cg3x1EMpXsraw45D7GhXTH8FK",
  "key8": "ZQG7vdiFTCErRMk2qs1Zpm8qTZvCL5PcrWfJswhz4qnLXA3DKGm7wgDvbXqNavz2DjFmfN2CxxbfRX459ioqGA9",
  "key9": "2KSDKWoL3jJTUeiQgBiPtqbJ5pgRDnpWoAumkxp3mcKDMUttn2fhDM3HoynqN5frJgQ5ED9jUMeQbjbbceKX17yp",
  "key10": "2s4jS4ovbAgDHm9zqwTch9b4CCccgTVgA8T3DbiCBRmX2hPhdxxbJXuQ3wQJaSrpRsnBwtzWufoT9KtXNFjFU385",
  "key11": "3DNy56aCdBMB2H2RP6onNVRrWkSmgE6qBB8v56mNjVZbsRmk4Pg6rqgDEqjywpi3fN5QoRKiqsVfXLBQZ6BrtEDg",
  "key12": "4kq9M9htAoTas1UQTiM7SHmxHDudK48axmJbL1N4phu5kRN7FmYGM67QS5JmEfYFTwLvkSz7efebggJihTEn8gNa",
  "key13": "3nu7dGv7zPueSA75FRZHB93UYkB99qRBNT1Nym8X7hvPyBenY757im5mHmw81g8qzkmqyz1RY1FCCczUEMWD6njw",
  "key14": "34pEEEaoRhD4mx3f3Rz9EMNyRgbyH3LQbkSwmneNF5tkqV6bmkpaauBgkQbQvDZ7odm1GEpfqZwNF8JHCHbHjcgX",
  "key15": "4wBK93e9hYyEh5uMmEJWFo1EsdzaZsExUAdyeVRKinxk5tggSgyzs7tZHGqEYZFdUSopH3Jnu48HoBN3ZrGdBCGe",
  "key16": "4nizm75KA1JNyrNLUs8e3jYnTUVnmc6c9WK3nMzm57GD7X1qhNDxW135hNG91MNWYVgKpc8sNaCMqcAEK88hAS4Y",
  "key17": "49DJp29MJwLPptD9F8dmRCzj8VPHnrcR5bivanL8edFcG9fNfVjxx1JKVoPfZukdddrVQoy81dZbr6x2oyVnKBV4",
  "key18": "4kDU425Ao2xgFdFvYRPPk4FQPrTMTzyA2PKqAbYYp6WE76oKDnoAbwC9Mf5cgVfmsxCnuUkA26RshNhTXv4k2fmS",
  "key19": "4kyhNs3vzN4SP21tCHr8XyfkEee2Cw6eya9L7JEXjMNbFcg6KSQ3Jn4RPfb8ji8QRqDsNjBSRy9n68GPH1vHeYrm",
  "key20": "35vpyv6ZBmMvSmGutqiYUdofDRkJtBNkDSYDnjK16E7dtZZsL5cdCBkgWzBEbeetJrr75BUomDBDbWDGzdNBoqRC",
  "key21": "WvdRZvML2Km1F9td9mUBpeUV6cEK4VuuJJBNF8z9YoPc7yqMtTsrBpP2cg5tjX3T4vn1RBvbta4ebA1nu9Dnw7S",
  "key22": "2tY6mSJPhAbPApPg5SY7NEwycd99KYDVfRQLa6uF7oYzeh4t1CKPq5UZfFnDUSmm1nzjxGRRry4odH1e7jEesF7D",
  "key23": "5sQmwjeKFDfiqe2G4yaT46psKRUFc94m9jytiiGXL1BEzDBLmrF9xsghZqYiU9gKnVuQaiB2be3ZNF2KJnTLYBYc",
  "key24": "5xMDmpejS4ZRdGw4zFPsE6ZoaCCGPY5QH2avQXcdwdq2CZ7qzZQphF3vMj9StNRpQuACwQ5F2SUka1WcYXV9qFyx",
  "key25": "5AWiob8LQ9PK8icYNog722xRLrNw6yfb17hrzZm2zZ7Jnb7eMV9Pba1TE7AdQ3fNtUTwYVbQLcrMdwqsPtRos5mu",
  "key26": "61g7SZW3ns7LajQj2U32UcpMQgjZqx2BrV8R6aC4RnnTUEz23eMBGkaXZzxveAz3dcQFqKDNoN8QhjdTfMV186RR",
  "key27": "63tfJLhJ8d9o9rXuKBNNBHcUc1sgbwCTwNcfaPV83Cdw5t7jtDv1ppmAvcPe6WBwW9CJaSzhz5dNt8qSWVhD4VU8",
  "key28": "3DbCGopGDghp7dnFGLPVoozp9ALwjoMADKfGWJ8KmL4nwgKfuE8aY6JovmEHk5VvV9Dzrw8CJR3aEK4A85bZbhBT",
  "key29": "cV4Tbi1moZtCWcQg9gWdaMwhBgrBVEWcDgbxzQxt1aKNMSzaaxN3kdBR16ozbihm357AxDcVeDXccJd98MRNobs",
  "key30": "5X3jeSNBAqjab5tTWCxBuK3N9EHCsZ1zbw8gqF3QRsxbDt1nKFbjUjdQ3ELUN6Axp8nCjC1FLpN6Qco4aedRZMtD",
  "key31": "3REbjbRbRdN4jRBZFrH81btm1vC79KLdYXENmQyYsxcW241TzQjeY22GSiG3JDinAY8fPzNZEnU3wsxNETLFAMPT",
  "key32": "5sombyGr6TniUQht1sSvJAsEceMKYTEw3aErfPYKAQ8yEu7ftv7jaXuBQEPm1LvbJhntwe8L2TeX7jPf2LqurUi2",
  "key33": "5hZGT2R1LjdApv3GdJjFqRWnnqHd3SHJs91Xq3VW9DWvx5xuyxLuDF1G5UbCSSiugN9LpatgwZdYcKfJMDfuu8iJ",
  "key34": "5RHLJTeH8fWarD7Hh3wfCX7fZcxQTALJAzR4Vrkd7PnFzLLdjqhVhZKbMnPwRgw4HuiZgd5Tqjz2WRF2kaowUm1z",
  "key35": "2e8evABaQ25TWwaNdVETFZ3cNyW9jdW7AFae8ck6rfrzfaMvwAsx41VaqH3GD7Q52dzSfGEKXUtaDqDBP5b8vGf5",
  "key36": "Hte2RGMsmtfwtRu6aMsoHHT5uV2BpnwxANETtf7KUV4FF29BVe63pPkGZPQa2kLWWV3bSPLpMJGjoW7VyYeBacp",
  "key37": "4124Y5uGXYfkCCyZP6fdriexjpQQ3TZYf52nDx4Pu8Ck3FHttvKap4EK7SZjCXtdAAiJmaSmCdsgS9g3jEaj8ou1",
  "key38": "5vfQnuEZrALF3CmXSJJhZrkd5Y8sq7VVvwUCbcfAQcxLAdhCjiu72y24dvgYBRq4WEMsNGXMhiA9kK5fAMaKYWKf",
  "key39": "T15V5A5zW9FmewvcLCsqQ3wAyJNj6GyJiQF2Yb3dLfu5NfBX2SHATNx8mDHDwBr8GVg8Y7YShYy7ZWr3JVquAAM",
  "key40": "2WSBi3x6xMUPUxxbtque3LfNztFhR4gM3yhmaTEjAWp43okEkkLr5vBKLjmNcbLjHHgPQweqqzgcuxYrwabVWTN8",
  "key41": "2375vissLdSKfEJ7jcfoMaHQU1qqjdFx9pGuQcHUXvWF94ALCRLY8m7eC6CTQyDYbQjwhazYtgYUnEB1Y4St1q2S",
  "key42": "215e7W2hHweCpXwGaEYfo4rZPQsE3i3a8tcYoJ1cqLFBDoVEhjrjXzp8kWqZ7MRvAgMGDn9bHwmP64SATK8tAmeV",
  "key43": "5hqFA9s5TXtLamVjwiYazcTpdGuvK8RTbzzjXPci1NfHo7RYadW3cd4FZaNnXYaP2pvoHNMXW7B9i5BB7H5Jru2q",
  "key44": "4ejCqMbmbvSsJEYnB47d4WwJe3GxNk25R5yNLpjkhCMWi16qrRXztxohYKHdWQf9gAj6tNkAuhjWW891DPUfUD7F",
  "key45": "tZu6QSURvehVkwciAeiT1WpuPC8yjp7E74VcYRhnZzPpiGzKBpPQRbjZEZckWZwZE3SqLkM7H2tvLBnL6QUG4Hh",
  "key46": "2tG1xUizjbx5mYXewj9RBwLVPnED1GgByjsg9NHVPEL9AxSqXQSbu23BCY6Bwf1LrV65JVMYV8HKcc3gmKggSkPQ",
  "key47": "5dVERgD8SEZMWYi2JSJpXE5wAeg9xaW4C8uRi9rTDnmnaozeCSsKLYDKyguvKwaVurNTrQ2BJfUignwjM63DhEu5",
  "key48": "3XryodzBBrGNgWoffNPb3QrYWiSJNCw3MoTzyfNuSwLz4B6GPKHHuG7ceTunPMrUTN59y7DdhpSGAqv8DZ5gUjER"
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
