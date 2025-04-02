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
    "2Ct6aiwrryYypLE1fmDNNzjroEmvpNriVpex57zjB4ekJWF73tXXkaFqWPTScjSGJqqU4z9RrsRYMNyu68Dh61Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PYTR3Bx4SNK5QY2Numo9ciXXoh4ujk8tiar2m4cojkUQzDaA5YEQ7jN8xBSiUWokEJdL7e6rk8iuoVBCC3wLhiF",
  "key1": "2zJbgBXBqeeEc667xKTXbsCwm6g6t4q2rRaVzBdGo5HAYS93tnqa72FujrMAoDmMr5jdDyNA6yhn4JgakDwkujbG",
  "key2": "5vmv4to7C6ZUwQTtzjKfLYiAvm8g1AhZFHJd1ZsUVX5ArroRvg23YVbQuMkdX1kny5d8K8qkbJ2hK7kjhkYqNu18",
  "key3": "4vUf5ESUir1LPi1UwLhyVsXjhkb5XXSFN5KCLrYFoMfSiwGE9hEzMpf7Jd75M3GcwBYv9JWpC3XjCF4YisZMdDii",
  "key4": "2u3DyQrCrUeP4RNC9ZH23MBvpbsMj5vma1f2njCqdiWxS3RkgPrWdmB3qPwtoXLHTs38r6J4s1GRXzjaWj8aSKif",
  "key5": "RA9uMNpT7ThCCTB5wnGGWgMUt8C2sWpTvb1ZaADvoSPeheioUrkUV1AndbZw8RNUivzP1LS5CK2WdnvP5EtmqBb",
  "key6": "42Vcaj3ykAzt4FRzJpkEMaDSsZaLdHKMV2DnopHoTubew5T6rRuoXKuZzUAu5yZr3M394b85yjup4dEEP4zQ67gx",
  "key7": "4v6EQeGXUMPGfK8XxoHusnRd3m1Fd8eL41vw5C9kpjUUwaC1jZ2D6JwpWwSQfaWeBvjTJufN6nrocpXuULjYxDzV",
  "key8": "3f7uiGYMQSbfRVx3qsXLMSmEc4x1QT6YpA9Wz9wcHuYiVjBANADspfMRpB6Lu8jCZSJ1YxJWV35WK622Zn9yV64F",
  "key9": "CCV3om4SRqCjbv7MXes3fchKzCn1sAFzUSYie9nbF4RKYLMotdFvkAdzLBPE5fUbzHwYS1X2o8aZbbxjTGuzfXL",
  "key10": "2DpMXPcy1wnw8TSN785j5Vur1pD69xddn8Sf6HYYkohVVPuU1ipynbufCzRZiN9cdPc5pXFFYJWaYfeeb1woJz3d",
  "key11": "xULXh8WdospJPvJujqFQ74dsrk7gzjA3bWSyVshnb8DJ3Uh35wT7bJqipZcysvM8awVAuRA34D45NVbmVd5iwJ8",
  "key12": "2EPkE5W1gkLecAdcanmojDgqj2Eth4XadrPBQqsS4faLKXccqY2cPaviMXJ5yUMUq5qZevdspiwgZKLS7gFjhAMK",
  "key13": "4ytWURrGq6a9tqUGekYFfNn7mAb3pj7JQKw5pKzPyiLAJkpiKBpLbYtVY5R5aXSTkYSwZQhL3XRqXEFhhJbqtRwf",
  "key14": "5Jf9gFzNRjg3umLnRhfAevc1KKq8a5BEuuTVf88FiCdZ1mA9eA3xXPydgjcPkB3anbYRoyQfPYVTNRm2PddHwbjP",
  "key15": "4cdYw6ozeKTirnHEwGjN7YbLWyoguRfEUkvmwHgVkfxstH71AfqxrydhvhYiJ4Hfwgye96fduLLiqpwdy8sAHANE",
  "key16": "34LL7u4T96Nbzjkjbn6XdHwkQU7psJ8Cwe5ND6pRALFbta2NcWL3pTcmDxhkJpxVKfJmWRSbHqkEGZfCMqfjedbx",
  "key17": "49tkY1EmvMk3DAkP91uVaskYYXsTpAnCoBHizjGwT5XQ6TKHnpRU5GeUEwPVrrA6tgrotbGWFSNnRRs14iL5LQnc",
  "key18": "5qaKGvsyk1rSZmCt617XRgqicZKbL2toj4poY9Tgsyz4HcRmSutcf6bz1WFMEEi1TwxV5JZ5nhhXzpaXD7SvVBsh",
  "key19": "4MtNpq89HaDDRqKMkFpiYsANgJACbKFtmkdYCKpX9qvacosfyKYQFDfRBJt5gLmNptJsons7LDf7K1RxGKEEegWB",
  "key20": "g6VaUkpjKqqttadsZk2k3r5tuBZznzHhTuPEWxrJLY2MjfcomrJKs6TJxXx8RQveoYCmxEvrVVcANRnTYVcwNUR",
  "key21": "4KeMh3QRwFDADNm3mw3GEoATHzZ41cP1C9gCaifHv2aTYdNWFWjB3nCNkGYtSBJuks4KLnnsCT1HvKVWqc2roBgx",
  "key22": "5szqX5zAHLsSF8XWENGLYJow88CrxP9R8ryEQyvD5UYyCDCiEPoe8reZVSUKqHmC5wZcXQZTiuS7cNtK7YkTqB8v",
  "key23": "5EowYYrWQUNM1MxjUXYz2TKzV2oR4UVGmnyheP1cJGCVHWmLMrjR4R5K1m8xj7bJBJeNSzVFh6d4s74hxMe4H8xd",
  "key24": "3uwNuaDTei1KEDrbbQVFjB4LiC41xxiHMfLvKV8fad28grK3XruaTCeCAx2EMb2HZxKcCBSqSpYSyTKw8QHXYgUo",
  "key25": "5KVH1fbATarGLxQjvbTtQYkiTJTv3AK8drvfCxUumWF8kkXkuYe277RBzumFrmHbCYx6FPKy893uZMXS4SHWk8Lv",
  "key26": "42mHkzmwYnLSb1bqMYpcU4FE65FPkBLbcgdZVVi6tjBas1kSmtB4yg3Bzod9FsL4g5RPm7p5ddtFCixmwG4xAgnN",
  "key27": "2DM6dwXYXKfjFMjR2JYGhFfWKQTRjxpi4nntXvha1SXjUhLMPzpGWteCh1YXuPyEqtnu5ZAN62a16QfT3pphC1uA",
  "key28": "4G6yWu9LRo6arxpYHAcpvAJSPwR8TY1UCCQVFR2hiYG7keYhywUnVV166fzHGFYreCqXsM32PjrSxb9CSJUcYjiW",
  "key29": "kEMud49SxYAaCUGuQDQg9w8rFTA3a7wJiFoBkpAWYehna2GTPrWRo7LZnxtsyNqXfx6Uk1xxus3edcwd6WFvgsy",
  "key30": "5SKyvsYX9NmMNh41CmmEsBfTubHpXgbdjQG1DfcVM414MYLNj5zA31XhuJzXJGiX9J8KAWYfQd3HWxeyhcPsZRJv",
  "key31": "4Q4rGYgvtmTeQS8SkG8suydbuqqyYCwqXo89xsGFHjeZRHWbJgiqn6trrB1cs7Yrt2eVVNmrKxi6p4Cqv8ByBwRY",
  "key32": "41dyodKAEEbr2AonVppT7cEErg8Jk1KTYgD8GCmSKiFR7T7b52YnXbYEvpEjE2aWzwTD32vWRLLaNqD3ZMyzPwEa",
  "key33": "Q7jvL5Mjua6ge511XFNSZswM1T8W5AJRgdee1miYnziUgBBfhH3C6XmFx7sbGG6qitXfYaLvQitc3XbzwR347q5",
  "key34": "29Qvxi6oCyLzKEXtAySu4Uw8PA9mXndL4Et3rCAKREfVG7s5h5VtezifeKyavFB7inDoeVzyv5rdn3EXHCpCDhCB",
  "key35": "1GtizwEqvEwqYHebymkAib1HiVQ6HaChTsukUb4kjJmxomoqZqC8fok73KApnpHcfA5WHFFoPd3LdCiGjbTvjc3",
  "key36": "5FFkQkri4W9NreRZqPfS5HakryRTpsyqJAVBzWUxtsxEvj3nHfyBPKFMDLK81ao7vj3Ya1B2KRRGgcVVh6NYRGu2",
  "key37": "2VneKqXcHHXPUwQ62KKMmDJtTKWssVYws1MQYYXdcLyP4QhhXL8qE2CwcvcbnRbKLF6BUv1JPM4kWTQwgyCf8PC7",
  "key38": "5BLwgcCCUAwZJfAZ19UBYbrp4h8qAm8SMyYLBveD2SffkoKwYnqvFUvADfTbJBsmWQnTJyRBxTbmRS5MoVKyAWpB",
  "key39": "42x4Xh4TqGhKNuUnSSVYdVfwh3LK8cei2jDrz3b7yEjBJ8yawZmP68DSM9LC5DHbpZDHyDQfwRtUvLhMdADC2NV8",
  "key40": "2dWMrY8MET7usvXXGaGGwLVDqmTS4TMQvfDLvNQUnPUvUFLFSHN59ps8zLGVvRBfr2kVzAWK2MynrM7XMwGDBE64",
  "key41": "2Q3dFWu2ywPXtK3kc6WzBLUjPAWaiGsFc1BLRMJVMkS7UNZGAdrUwT5WUixZXgLo9gWFD8sAsWLBZPgQcyp9nmi7",
  "key42": "2VogFqeqB73Nh8GSi3Ua7V3ByNE8ioCXo14KN6YNc313hQFeLsVqzYC3LkbFh38L7NNPgMCsocKpRwpYgq1wT1Jy",
  "key43": "5x9AgJZ1Xt9tdM1uHe8tyBzGk1gZwuptue2QeNwAxoXndyB7YaXRfJ5iLUe3oHbXfqVxWK47eEv1RWRzYRd5CnCi",
  "key44": "5CcJRU93wxgnh78TB4eWTVeC4vQE97Z8s4vkEZEeeEb72ph6D7cZZEmkvphq87Dgjg2oj4o2LmEkVq4DcUNpEg3k",
  "key45": "3uYZiuXcmts8zhTZjKcgCXD8uSVPH5igxoE19zQH57fuvDGJjkFfoWHX1MUKM6SdpyneZ6ct3EsRhXcMy5PRQfen"
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
