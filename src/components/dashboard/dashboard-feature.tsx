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
    "2qWcAzpWETLrCt2HRkmg5qmVipStgMWiq8ssX777JnY4QLzjr4DS2Q4rSyviuZzNeV73fMDt2vRAB6xz5ekCS7at"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCPuyuXu8nvKh3zqDsZgfqhDMbHL9kig9tAGXYt87uVkZxfc1BYwkb5n5zoxEP86VSXL72CD45CpJW3s92suSHk",
  "key1": "6256MwFxjfc2u2STYrqaVSw8NYV5FP133LtJQ5tffFrKVhgJGQ4u9UBkt8TXkZYuvFBRARYkNgysBqJDyMmGDWP3",
  "key2": "4WrXoKUC31m6VjZ6LN57SXJsLsTBNckcQLC92yVTDZVKvM6MLvRSMYubMGasmFAYn2x2yU8444i3Cve3NzMz8ZP1",
  "key3": "qMwCsHjJWgb7m6o7WmpaoocQLFTyvXtawu1yRCHvn4Ee245hjGfKqZSS9Ft3ZzRDyEiotP9Sj5p48i8DGqRn5Bm",
  "key4": "4DsLCjs4vVe3DQbVXDxJu5Th1LXsfygBZaDouAAcCTAP3e8DWySwK9twRNhggaYLTNHz2W4P9G8qG7wTuq8yGs4R",
  "key5": "399AWqzyrwHL2wLXnsFj6aFnTx89yHWgtZFChKWaASnoDDN3stAvv2szyJd4RbLBcv1c6QWN2ZqARe2KeuaiwWWc",
  "key6": "2FdathynkEAESHDBQWDUTZofX2NN6JuhDmJRgV7KaDLzbidVwjS7aWLLyBnDFhghS3g9W5p3YP4UKXRUtENqBoMy",
  "key7": "5VFPREd2Ly8tL92p9MgSaCLYEb6SNc8sq26583QD5PeQNoFddjGNy7RhM3aZzkPscrzKMkUDyhxDPFwotWWy79DQ",
  "key8": "4oUgzRsVix5PaUxLEFAjMgaMcgWkGZoGu5PRy4cXJwDVeb5Vb363YMub7C1E9xbr11KPsvURvTvzf3yDfwBPczf8",
  "key9": "2iRy2HnXbEzYGoKWZU1PqEewwESWngExwMT14yMyvyvTKuSfC9HnAXxqcVobRher1EjAajpdhKy4NsM379uxP7Hw",
  "key10": "2vVGMCCw8pDrAFRMGDfBd3zF8NdgyCUVm6WJLfD6uMG8JFRokxYFirxme9UWCrnNBf87W12Eu8EWKi5ivUjuzvV6",
  "key11": "2D3nfG4GDX47cyn8eDPCvdKVzJ14mbqFTpJa1Via1wh4E2cPAgMJcS3ZJ1qN2qUf6NW62GaFeRT8gj6Tg2BELHs",
  "key12": "dTBsPtu8YVbCeDmxJwEjzoHFVE1r44EPFR7kBKChecV7r96Btkz4xbfdTqcMgtweAWz5NaQr6Gi7E7RtaHCzcdu",
  "key13": "4jAGJRQoiHn25PZa4vyPLNyUwVXxdhHhVGGgwAJGSHCukUYRi2sNWfHpvdYywhrF1EonEuLrephwdie2No4GkkKP",
  "key14": "Usad9M24tZbDUyKPQL1QRG37Phkw1qxL8nv7p8dG68upnyB8tmA1719tH11X3LQWgGjHqQkJu7uRKjEfrpyRDm6",
  "key15": "4zCK97u1zi29fMMZem9kUmr3AmY5fL3kpTHHDFxpKhBCsnHUyFNsS2xNyZrp3FMRLN4EKWbsZYkHpcPXh3GX6NeC",
  "key16": "4Dvo8KJuAhVUtRqKjMPTgzddtayBjo9ViNRNz8RppccGjm5Hv26BXP4VLuKTA21fwchdakiVorTzstC6ornfSQj9",
  "key17": "2gMKMXiBjqMDmwkysWxXEBNu1DuhdTSCw92hr6KaAHQVaE5A98e9U92sQJs7Jzq6L6ZCSordeLMPDzRF3pstLhWS",
  "key18": "4zvKa4c46GsCXWuuP4KigDugX4KfELjQaGtNdu1Mm89UmHiX215XSzhcPDHgQYsrPfxvTp5JHtzDm2vcrK6Ymija",
  "key19": "BvuZNQNkZErWFkWpm6r5vEdtdzfmBYeRop3ptQZ3XDtuh22yppbqsbuV6VPYMSoHTHHRbeSBk7UK5QYgpx4UT5y",
  "key20": "LXMz3DzvQYyNnKxN124ypXD1AW1yxGwtwd457MHZQ7BVpX8upzyJHHAWQdeaQN1TRDmhQHxWSeTJRAiHpcb2Ra5",
  "key21": "673ob7Ki8PwEnDM9xHmokmt61MWixD16crGC7Q7fuaSu7BgDMohWHb6j1873VHZPS8e6rMe2rpfU5sXbZ1MLCuMX",
  "key22": "4cpAxfVcyk9FBaYsjPW8tHyrGF4stCdop8idHT1RCRnuNmxCjkG3k4fk7ZEqisXJsAfZ4yVEPMGwaiF4dW81PwW2",
  "key23": "tHgGZrhmqRNFNg3iii6Qj4oz1jAqYT61hxhnsfev8hp2xA7Gry73zejNP3irDexV65VvEtQ7826NyVT258Emp9T",
  "key24": "5dvbtV4yx6B2Fw54iPwt8Zc1kdLPNLrgHRsSKmq4PN78urT7hBQcMXCTm4HfG13mEJF8GAxVPWdY4nDYeoZ6qrAb",
  "key25": "3koQgtVQekXcvKfecx2QHo696QH4jqeJEypPMyNta6JWqEd2UQ2rLJ1aMNPpepSeNmgux4MvLmTKJSMNMMX4s1RQ",
  "key26": "4uEaqBAWaeU8gYKm8hUstRb6A55fPo3B1pJ8haATfqxqCwkv2MwsuyMNCq8s1h2jQQRDKJKNyUmapWY52vAmqtvD",
  "key27": "LM6SjriCxEXkq8vAugQ5Z8z8oDF9zHJUEhZjQRYkqwJQ6NgjYd2Zfjs9ZgN5LrxjjRrSR7WeGH7SbqpYssyy3vt",
  "key28": "3V6bF3AxD6fUQgvAtPXtD22rRD15H5U6GoXsUhTawzRrd4cS7tgwrWqyLqWG54Ybx42rVZ5LJN52owHeA9dK3Wsv",
  "key29": "3cwedTg2LdbVR4U8DoNbV9BGJJzux5pnV3NUWJbPmtqYEChzds6XBhS8dz9qDmNYfgjRECdn2v49QFcrMpyhcohv",
  "key30": "62o7Mbs1vcFdBGCRfC6sRyYDLCqyh4TPovT5qrHst3NZrLvUJHfeyTcanRR1tZEHT98MeSiwu6mb3bHTeAZHsWT6",
  "key31": "5kmQ7bsL9kkkMoHuAtgGBXYUX1ThHGKmYp9e2NvRZSZLj7nhbxXrYv2KwQ1qYBt5DGZYfTPREdJLciTGmtiqzTEL",
  "key32": "4DCAG8vCUNKreFHWoEfN7GeJJSGHCYHgU5A2iD9ZCV5eJAHKq55uaX9oQ5GNanWWA1CsdegTwmrLzNneHENNRb7d",
  "key33": "525C4WzXw2rxDnCTwo8dRYeQVzW3FvhHLYN3Cwq3KKbvUBZuETtjYMLi5T7unzDZb3g8jQ3GVorXEwLqGnND2tm6",
  "key34": "xnPtdXJE87kvAt8qEE4oS2cHS1MkbgJcE4aN8ZLfjqNwVNckLtHRdG7ZGLKDsqHKVTewZNPUsDQNdtDUek123Wh",
  "key35": "T3Qeqx52aB7a9k2fSqETeJ1rvZAXyYzfxBYVUbwJYvKw12hudYTWgete8g8PFX1CfDqE2BfvZ1NgNNYse1gTUsR",
  "key36": "62KruhZhWEpk8AjZaDMictkxoAQ8mmh9xmYiVs54D7tReAA6EfWwfvkTFCYVbNKqggmBJYdt7csy3D82ZebR4KMG",
  "key37": "4Ey5FSGe14JzVSQxYCmuGFM5GXTPNBva8Lq4MyyN5mnWzA4G8iqA4uKTejwm1WdUn84nd5JfQWWksdQU4iikuk4z",
  "key38": "62x7MWQBc1DT8Ppv2oP76f48SMfdHZSEvFourDuwoPCCcegGiK3S3etsttv5niQ4zom4sTcQ52rFePYirRn5Ear2",
  "key39": "5bCMwhK7bE5AAFs5brHt79pgiYyKUUx3D8FeBQJD531RijeLtcfqrzbYWQDx9RuBr5Cp2scW1Nd1h9Xyz6JfQZ4j",
  "key40": "4YDDFuFRRY8ns7eZvvzrVzj3ciFYu5yvX1QE9NrXmEDtdwDMPCSL2efJgs3A4cKZRFHeYvApUsignquXt8RDCx9R",
  "key41": "4jGrDbQ4gHerEGT8EqFmT6krUVoQAmNvQXvw9utEyPihSekyDtvUhtepNV6AKBVNzhDqFWZe23wjDKtXcixtzM8c",
  "key42": "8ZXEPfU9Ygofwfyu2UE5eANBxUwQPLRKUCKXqgjj7oeytZQ6e8EgPxsrHySMtnwQuXkT4dQsrrqieBS5u8X65Pw",
  "key43": "yMtPNq4wcfZdUj39RbJgaS2mTKVxa4z3npQXhp6Xf5VKTc5NxPKnQKZ4HAGCjA3rz8vjB45c4v4dXnt2W8dkECg",
  "key44": "4VcmEmhsywsQ2LY56SfGpdBaMsUMD6aQCDiBcQ12TQD4yCcce8tiPZaJGYPWfZ89kVjgnJVpYHAXocCad9ZvKE7Z",
  "key45": "5dr1guQadT7e6fEsorQXJqPPLk58ykaF5T6dqm1SGS6Job1DcP7d4g8JBBg2i8bBseaBRM4iTyg5bZa7jxQU3oJh",
  "key46": "V514my8pCD2TWVwJn8cMs9aP8QDkJkspeDfQfCV1BfNNTfjV8dmBHNJcroeKMEsmzGLt9F66akqi3bfn1hi1xyU",
  "key47": "2wWJpK3FLHx3hENCxCiohy5u4bnaDCEqtAcaukkvzYqFZgVgQFqWF71r5pvPUVZe3B6SqAjGBTSF72JYZ8pGs3jx",
  "key48": "hRaoKhct2rBkn2sra27ELXKGdqNNKQChCTMxDWNNMYDsJkEdUsbwULfAVTv2EVgrSjojzeHXN6HwuJCJjoBJ8UQ"
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
