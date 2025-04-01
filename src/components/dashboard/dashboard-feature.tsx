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
    "K9zF7wFJCwoM2waoS6x8VJfCW7AP1Xwek4z8y6Z7JDmtws7BpcWF4LfyPmEFk63Xr6AhwHtcjFC5kVXsRb3p1qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3myAQ9618eRvdw5b3dQCME9Vb79F9tz8qAdTKoSW1aEcRVaFZ1FcEYkk2xyopr1d5oivVnXeG1QtwAv6Un32BBMX",
  "key1": "5NjZDsgmRkFaqzi2T54Mqy1NSFV6mK1dmgmzPScKFda6qBbrPMLXSFFirRzNdoygewK8DXZZWc53ek144WJuNjia",
  "key2": "rG9ZXwTrXa3XRXmXdR1dcbWXSqfN4bsoXJ2Bsvb73X84VUF3WkR6uepbqTU8ZAUWfraZQFF7FQRsh1nkRoHgxiZ",
  "key3": "3oyo9ehg43vnxoNpmWq61aFpDC355WYM1FdmaCcYZVQisArpVdE4bSL4yEahAM8DdD3tS5NE6Mn2SSwBkn1TU7hX",
  "key4": "5dbmvoWKXYLheAS1HeUHNW3pkcrxeqefccSzfWFpd11yGZ3G9TnTNR5B5CbzpBKJSBpsdQFyp7sYeHHK9FQYFAxh",
  "key5": "3MyEa779csM8ToT5LfMiwTzSkBUUmueRN8CDTkLJmKvqDooVJomhENP4RUwf5btCJzvuwHmt89U6xhX8sDvtYo9h",
  "key6": "2RkWPLmGYShvPY2PpCmqd6P1jGNf1Vt5ByC21ziDWPmQnVZtPc8sb6o66d3gDJp9ZjkoB4QtEYx3RLoF9SyGQ56H",
  "key7": "3L2VCvbvMnENbapZo62CJa1jJXEvpP2SsL3azV1JnCSYgPsh4x3qJcAu7UVoqADp2Lsz34NkUpFEw2wcQ4LDeStG",
  "key8": "RgmqZEURdKf7CWHMppHQMPKHjiNCxtY87JEAAXqf8tCTL4iVcShjgPQpAniifbjro8dowFLTyiG2B43Pcqo94eC",
  "key9": "5tM1YR3q8iHrvWyKfrE97XNksgJqo3isM46XbAeTCLLDxKQ4qXXertsmbxQErpf1MtJXqhNXC8fzZXyCJh9tFUQQ",
  "key10": "4ivkJvks7btCzdxFNG9soD5hiPyb3L7LL6f24WjLa4fifYSuVPYc7216aVugqV2PXaykrfL4Z9XbAL1TtiWDJySQ",
  "key11": "4xV3G8fJbDfgCRMrFTgCrBqyRNZzhRMVxreoyw4AR25M6vfcEkSXzJnNnG89QGQfM81gxcs2YLaq12zni9AvzM43",
  "key12": "5aw5svU9xoFqpfhYot8yFirdAB4qrRYqeCTgBYu4y521TZtYtXvu5HopAaLKEWZFsoqX1Y72bSRqLK5T7ZrVMU4V",
  "key13": "4wpm8XrvHu2dBQ46z7T6qF3GSQ2r8sksqsC9EQ6YcRUB8eCH3Un7jDc64BmhAjoLieqKFtU1SVW7VQXrGvgDVmvK",
  "key14": "3qwtAfzyrXdjqJ4xSKjPgybaRv6qXboqh7nXwM8JiPvt1RuovZbtKvMUp21SRwmGA8n33ZHuSaYeQ3nR7Cc7sNq2",
  "key15": "AAU4nXBbviG39YCasjhj8qNsfTzviiDT1xnEAsbnXBukg5Qir2nurweXbAoqFRLMwPEEeLkJND5FTLwJy6wJ71p",
  "key16": "2UoKxMrAZiTvmr5tk6SDF6xPFZV7bEE6uqEBm31TRPYYUkpCDvSufnc2KrL2s9pgHC9xV4H51rrZutBvUT4wZdTn",
  "key17": "4fZfJ5SDSKgbGKmAbAogwH13nBk6kHxY1jm7QzajMEP85ZYXUUiRVD91vDbbE8nWDmwvaGW7uGAELm4SSevY2ikc",
  "key18": "2PqYi7w9TcVZ1GR4fGLPh1eP2YgdecsHvWw34ewadR87WYKq3Usbpp5xc3U4BAB79ZbWnzdv5VRBL5uXawwTT4ee",
  "key19": "499vUUghX7hSaKLB89g34ATQzRWqHcz4ry3SwJae9KVmhsJfd858BbyYVL5Sf24rguLaFEwygHPx7ASEwUzSzXRV",
  "key20": "3YoNZkuMF6obXLyuribPDG7SiYVAu1M9KsK1atenTtkX5e1rpm6i2vEUGFREFWKycDttrXCbRiEUJuBbLwg4HmB6",
  "key21": "LD1mEjz2Nwf2uutjTsaL1fBsaG7iCLQeRb7YWD9Xfr5v9fuFB4uZTt3vre8JnuPYEs4813CkHQyAsTBQ5uAARUv",
  "key22": "4rS7DYvfgzoXWE4BDRELsHgR4nVodKXjFgc44pnJVozoJjYsTYD1bBns3djeWrSdoMTwTuG2W3hSivjtM7ju2STN",
  "key23": "3RSu4rRdieE6jLko99XZQ9km179omrPFKxw5jsd8GRUcH9zrAhnPEPneqzuah71LT47QrEjiRoeGvGYNmnjoyknp",
  "key24": "4UpvF3jkTHeHUb8VEUf1UNxS8BQ5kus2bcFiqQ6LTXxXZ7PWS7aZ2YGEezgN4Stdwvg1egNtVcMYtWTfo9BBwp8e",
  "key25": "23e3B5ZfQCDZyUkx2DLP9oBir1L8UnGjDYjz5Qetj1gCXpoKZoV68B5NwgUM9q65edVKAUaVsBxJ4n2K6JLmXpvy",
  "key26": "28VVdy7kZBr9WpgPf69SCNu7QPd8mcXKZS17NTvuiEPuaN2kPPboWw3QQWKV9P1CqDSRE3oufZNYweWsimYaYbDV",
  "key27": "wJfA1WbhNC3bCiqW2TDkgVVh4xutYPtpuNoVzYB1qV2eX3UGbhm7fF7qHPDPhqGVw7tsw3kwR2AcD1FCvEiA4xn",
  "key28": "56JDmQ31UexTTfZupb6MTqkh3uwB6qs81okwnToTFNATQ1xCYhQvuoju4L8yRaZmhxfQuw7wXkuAzwNDh1HhAhFe",
  "key29": "3HgT3gyFJCxFJSgGHsBttALQ27vzqAAZG7Bic9gTR74AuJNKGQXSMEGRf6J5JRnNiXa4QqPfj2JcdnthtcmarnhP",
  "key30": "t4surYpj9oij62GV5b55HGLxgwTvS36VhTBXvr3ByAsnMv4dq62ovUsqtV3XK68RbkCduinkPwhiMiojeXSg6cr",
  "key31": "61FEDcS8wKPHnKPAPEKfWzU4Lk9AfBoaTteG3VC73mx4bMbFNyZXSgK6TngQazQNsVzYJM7PLLhS9TJsMGgpDL9e",
  "key32": "TAjaMxqDJWCfEFDH8kixxqyYrmFqpzgnXmZnCd2qJHC3g4guVVvjhBfQmewnSQeaXSCsQAWzhsB1XfhnKbzS6zt",
  "key33": "4Lg8TN8iXqGtBpdFnrheyxc9VstzURMcWmACovCHSKTXMq59QQ17kMvzbLPBiBVGUk9eyk1Cr8w5u1QGaXX28orT",
  "key34": "YvTaSazZUiismL9w62RR1ZsY8JoP5jdSVXhzE5o1uviaer1VnPckc9UpaYo5R8edaeaGSXY8zX1ypKAMqNLQdxx",
  "key35": "3jvr5oQfpmRAqnnUS4kREyi8yfGzfMfoD3exvGvFW6SLWThQKXD1uMy6FvEx7bikD86RvbpYkrtvDGgACE3oEY6i",
  "key36": "kmbgKDCptpMV8ZKZ9wgMkZnnSKeNGqmg8NJcXRj4JVdhYTY7pW7pFx4fXeuM2N8ACUYNjMZi2XyJ9txuashf8dv",
  "key37": "21A5TNtfdL4B4uJ5PZXFmdHo5LC1R3DTuReLNT8KTQRtADV7iJHPMyAcLsFR4qDfRyZiV9FAUeNUaEGjGUyS7Fjd",
  "key38": "aaxvJEJ3w3ZqsyvrBb5xsohUJfHhsFgsioHqBErjG512Rju5s2e4xf5L3M9NgEyWeYMV5QwysXNWbZEMxXrYNZv",
  "key39": "4iDLyVNEPaKmARo3wtSu2rek5YXv4mhgUHjacspgTpesqFPPADAEyRkZeegQy91PsL5dyYewxLyPQoo46w1iyGMF",
  "key40": "3GvGu4tcca684bn77GbBK5zu5Sj3UQQDgKDojUKyAexTben1A4jjeuivYRJHavEw698iFzth5tUmRGVWugmFWDwi",
  "key41": "65FDNqcX5XE4ykYuw9WEkGERJyAuhqdGAPzNw6sTt8MELgZ6NKZQjYdz6aYsLZMNbyf7Ugs4kG57Yyu9L78cDutV"
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
