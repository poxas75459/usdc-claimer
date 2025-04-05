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
    "wsGBxt48kqmxYQd15bADYTK4UMqCaHt3ttG97rp3P3jb7RpHjHWtURYSNzrGXsCRJDHcwt1oo9qXzw37mnZ5VRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W3FPyDdwtmXRJnT264kKz2AHRdZgQEcENbh6Po5vxp6bnNdWfUJdu8rmnRPFzA4TNBPtmeXX2Uu2C8EzwePFH5s",
  "key1": "yJ8H7HpaKmaw6mosBG6shW1taT38sWVpAhw15DsHcKTf9roT3Q58tUy3v5eDJi7iN5TTFGoHveKUuUBr5RAbWvG",
  "key2": "5FYiJWc88naAX5VCUMheyx45AEH2Deaf7rK9pwj5X3k2XofEhEPPSqco5p5K8EFcV6vYxG8n5Gs4HQ7AbuX37egp",
  "key3": "2hYzih5UcKgMzPeQPFZWAE5FUpukTmw2xRKoKXLveXpzoPj3ateDcgtTZcNTHYH8B3vbSmaQtbejHsAGcsL9CxBc",
  "key4": "4j9voPbm4jVPNzwTdC4Css5ksoBioP4LF33myhoHgEZmKec8LsPLzGWxwPHC4o9CSsiaEWMRyYY2fkGtjXVmZNK1",
  "key5": "25W1xew475unfDCYbZjiYXcnYC25XPFCX4Z6rr1Wk4eecskF7mQuPb5Fo8EamTH8EbpnVKZDJVDC7T6Z6HBxm7n5",
  "key6": "F9kB8adfpYL6Mo4PqH1uHiNddarsmyEcy4icZspSDFDFtyrf9Yr65nubeRUdc9XQXzvDvbnWiY3kineV8uKgAX4",
  "key7": "3CPdNgmf7WHVAELNzea5S8pktUuiwud3EAnmNZDRoKt2kVwPKiRiYyE143K7FLG54buemnqUcrWED2uSubhf2veb",
  "key8": "2Vy7QkfQiq6kxUC84vF7qzkUPiUS1HSjDXF7xvev5i5bWmenUHyZZ86k6Ya1ik1ya3SxmhtpMvXh2gmUtM6XhZ2a",
  "key9": "2JRdkUEBkzTydkCcP1DhfWcNaUM7WHNbsFLrQdc75uYhuKcYPSrgJSDXg3ZJsG4Afy5NGynvH4Pb1jRZ1LEvazU1",
  "key10": "8R4e1YdX6yr4Mz6pKAvXRxLd9GuC3NaTTMzGvrw1UUtV6CtLkDXfHxEtic9i9rXH7zP7Y9bcH55quCJPxvDQvbE",
  "key11": "3UCajrCBFjnE5N5FErzoUrk1rXcXEDJcNazGXKHhnH6HoVQ8z5VH9QDkLJhiwzop5saEpHHexHUVJsifaJBEYCs7",
  "key12": "2rc9vkFhLbSv8CxezSuUApiWBrSML9tRprXkQgVA9W3d8tBJibg5tMSHbrRmHHvW7V9NFNVJyT1weQrWy17JuV5B",
  "key13": "UisQQc35VVmBXziBUSMDAPcHkWbBxC63dNDX9fvuTrQ15XGcVnrKvQhs68msDE65xrWimGws6CDfLDnPVzp9fWg",
  "key14": "2cWy6RwVZ3A95GsSozwdQj6N955FE6TGM8K1ZMi2YASXVjuLYv2vttDc9s27yNoTkqGktZZ13HAatdUxWqw9zZRq",
  "key15": "2vM54EJ1AzRGA45Bx6cg7FXGUBY5ULkREJprrGuSfphGsyKqX65s3REvEKtUnyCJvMd78gLvXUazSUBE6vgnjL57",
  "key16": "4mHZQkDhowYtQ7q2nHGtcP4r5e65rX1E8kDTKfdETPBQsu39RR7SWU1pkFU272jPePF8mqY4aQsGLcR6SCWHqVq",
  "key17": "61Bimq8MW7SCuS9hHdbUDuwnYZ2aZVhnMEfjnAMjjJv9PoSV8QG3xMEFs2ddtpHPtTfmsZtoLs6FHyY1mW3AKpQa",
  "key18": "2qJQLnYP3asNDtjEY544VCvgi9Fb1X5gpNddXSiaBDq9HbseisuAKdfj9uSYoNE2dbBXXSCCVXS8X5TjFCtgzPyw",
  "key19": "629ZZa6sZVKLemgX1SHLVgfbmtZQB3iPk8KABRUZnhERs7CpZMd7q4hSvfzrtbRkwTxz9WJymxy6qSzjsw93AWFR",
  "key20": "55GrVwB35YPwGoDobCr1DfjZBeop58YYj6NdQdpQvNZsNBnni6uQ6seFvLmg3VLzVAE1H1nzBhK5Y2syTNHgNXbd",
  "key21": "BjBrVU5T2xTSmaCvwv7mJKVvaqcX7LzpZgs49hXetcdtDpyoiPWCtqa1SE4p2Z2o5ai6ZEE8YC3c3wWSJR1XC5R",
  "key22": "4WRj1pidoBEYTHtFm6Ty89ET31qjoZ6nEcS9FzrXLqZ8du8bqUyfp217y1R7Js7CkyrNCYuPeyUuahzZQn7Ex4Tr",
  "key23": "29zmsqQphGmcfziw1CrMuEB5BsCTCy7kSnraJR4xU45BreJvRbJZJhvB5KncqYvLBAffx5shbFwx7n2L6bxbDNop",
  "key24": "4u8rzKTd6WMi2SgfKMy8pg5daehk4PEaAesMQsb7mSEppDgTNFbaoumjvhvMdCoeerFssdJ92u4AJSMnRGQW18ei",
  "key25": "aK3YLAMCTGEJgpfTjWdmNYifgiNjn4JptPYZETpvBCKHKGFb2ZvWknrhgkJbkcBXiAUAmdJLuoAY7wG4cX3nSKd",
  "key26": "66SwNDfLFWBe7VQJRz3t1LdoNrdeazLAvtqTGsMqQzFs3HgXCjamr7UcEYgTC13bZYp1b4XJPjvPa2AhFpz8vf3L",
  "key27": "2Xy6K9gMzxBK9deoUQCwmPZne5RxkXjP9WZ4LyvgZodRdu3Z6CMCFYAWXLiV69wSRJttksz4JBk58RDGPLm2kgu9",
  "key28": "HRFAvPNAT1vS8G6nEC6PNXWEvZaNQXjGsatfQSghkuUzzhxg9a8oJSpW2JrkiBMAYBLqm78B6RGbEzX3DP7rJKf",
  "key29": "5CRbbEDGNLGTSk7NvK8Q2fncySimZ4s8FmR6DvHv3NkzHm2CM8ei93MAcUJLKdZ4DJdgK9fzayaEsAUFtg6xV5tG",
  "key30": "4cMp8uH3meUJRfSfA8DuP6HsDnhEpEFVqwFUFLZzk3ah9iD2sUKujjh3h98s8fKFKxpFDKyEtDeC2t9LTeB6ksmJ",
  "key31": "3uFPyCfP8Kd9tNQYjmejxC9BjPnhb2orNmHdoVcqXdcGaFnq7pCSNrmkG1wwTd6DmWzmuvxvsXmwHdj4HGT8JRyJ",
  "key32": "4u9DkmuMVsYUWbzuRV6oBGQC7MMsgP5utmCYab72Q2CKWoSkqJ6s1Ku1vFVjZgjXQ8AY7ssstVfdwDFwQpQhdbaR",
  "key33": "2MNq1JHhQ3oezaY751gnTu788NJnv74jCcZmrMU3qbcpxqfeqeKf72GSVDjmDuTxooYQyn2zbqTuWhrrgMP7o6t4",
  "key34": "gWA2vBTaQbJC72LfNEwnqAEmpjBx8CTTcFwdCWz5ke2Sg3iM24tDHmqr9zSKorBeM1f1cDsj4t9n2XvDYnaSabc",
  "key35": "41XigBMxWauty29YE74zhpVWz9CzLuHw4e3PGPVgZztv5qqXhQT1qUXKUuWdrfsBT82yEwKnTb1kphHvSwPW6NRo",
  "key36": "267JhjWZGF6ufmWZjpo77bSn9ZR63ZX5kZZDRYQKJuTjuWVsvJffaBU4XnCFp1YKZ8kWwB4GThyhY48JJ1Bd6szF",
  "key37": "5gQWEFGFRVFjeHAVVBo9XuqFs3WUfVM9At2Um8qrRUMKhxZJBYzuG5s9DzHmosNnQSDvkyeir2GPN1RWqiCMU7BJ"
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
