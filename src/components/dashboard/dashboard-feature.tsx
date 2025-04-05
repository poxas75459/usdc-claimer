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
    "2MFck9wnExfo291LcfKHmdqggi9grN8Lemr3FJk6nt3DFu37PfFsL6w8nkzZU7Q9GSy6TbXv6DVSoYf312y9nzUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qAmKcVASxZXKeua2yU9631tuNHcUoyA42c61fHjahWxEHdnwVvgUcA2L27yY7T1HoRjwcDztWVACZN5CbHc3KHu",
  "key1": "3kcMMLvqPrEPF5wP3XQo5sHbn76pniUAZaoWS1Qa9b6MdqkHkyErsoobDMfYx8TDzBp5388hWWVstxzaCNsJdqCe",
  "key2": "3XxY2nojq3DhxdakbHBKDFRK2F4bXBSF4NAdFwQ5Se2bHhVmMqkLK5SRkjj9UzGck92jM7zkT8oEWTB3jhFBQ8iG",
  "key3": "2EtWpVqHzv6o6x435kShzT2NnxhZ9YoAEDjUZ5RUVA9X58imaHineEob8xNHaiXEjqGPz5ek8MqPt88isndzhwMR",
  "key4": "53W4zM1Fhiz4pnMhsyebrspFJqGmP2p6iNzGhegpiWAHUzrzQgAxYa45tonjfgh2mt97aRWSievDxRqjeDD3aU2p",
  "key5": "4HH1RCbHzcJEbhYaAVLGK1V5UEccG23tUFm6MMpvzC9tmw6QVkokAHUFiAE35BKpbnhqckYjd3XDnYTNaxYGRUez",
  "key6": "652bhNJ24CxV116GccyZmzgr7G6hYedjcnYSu44gkGzZ9AmUEfDUJVzft3B3g8HXBB3vUqNRBsJbi9R2LZwKHPrh",
  "key7": "2xp5fERx6X1zWUHWeAxWfPB1Y6Ha2rab4AXsXmBmCrDn14JsgfbvB955zQCtpC1EfnU9WeYNH1rxVFZgp4HCgTnF",
  "key8": "4vphCZw5tpNy2Ps4QZFaQSYqtN8dFxo3zUkGHgZPyXuzXHN27murvPEGDyVQtCHDwcmb895etn2aEH7EdMHWc1nk",
  "key9": "N3iCXY2fdmH4VrHfKHD7q4a87HSy1KaivpgDK8RLicv7zgWigckmWhx1fEsNp8d2re9WvD3sYa7hu8rw81tGhPo",
  "key10": "2AtRkecjpB4wcGGyYkaNdUWvS8DFcZHY8TSoYyusAxk2Kim8e7ugkbaCMTtnxBUw8svjYbaZjxcavMj6wQ76KJ2P",
  "key11": "P7nbWpDatMVwpPDoxCeZCjxL9Gwb6QQLSzBABEqvxMbVk2Kcgv3yWsCybm4c8YUCv4nny9nrmzX69aph88CPASv",
  "key12": "4PrqWLJSLoKdNHC7XwFpfQi6pmYPEjdcM56HSWAxmogm2JU7KFShtmvxjqZF8P49XThnXEmTSv6Euke49GAvosue",
  "key13": "5Mwsd27iiru45iiLbV7ijzpFU2zJpdD72kC9UAoBX5N8yff1kafSYMpSVQuXp5qRtiBhgKxrfmoe4qBvfRawMYAQ",
  "key14": "Jyy54a7bovfkSu4CameYLenPYU9yWkQSs8MBdBqnhTzPPe28nnk3FbkUhEBPfsENYPScPpjzR2nyehanQphoGJK",
  "key15": "3AiTvdK8AoKL3Xu11UMMrxaXWBKUwoKqmbr8T9kxt1AHUDJnoosZW3CXbprKHQmvD7WLsR9fS7chQuPC381xuTpE",
  "key16": "31TeEih1b4qBD3zUpByCaYZmp34NKQTSVkt1NR4FsQccP1xLHjoQQBfJ8ebzEW1goxdwu92BYgY7QbhiBCZv17Rp",
  "key17": "3YTB4qqPmv2ibj2RKJ96EB8LCQAb6g53QVLf3bTteRW3k8ySRJfjbuTRv5L45i3VNmw1iQifbh2tUwLjY7Ep9G5i",
  "key18": "5feWJWcJy7v5YAbc2gmuWe5LDvpDgtHa5y9KFcuuSy6E4RrX7ujhf4HKRp2sWQGzDruQoSPnGm69JaFSrWJMBz15",
  "key19": "4Bf38zJUfPUcZ2BvVjfoSsPEHmHBfmyfoUff1VaDw7dnV8JdjeXGqpgZdGczhYreRADX2VeWTAGWHTpybwUyHAmm",
  "key20": "EG9Hf6Sq4LJ7Fqe78amaCQMqaJZLLu93GL1f18U86uoHtbDGULH8rvfxnJbiBnDA2ip7Qo8AYnUL2yirRSTdNhW",
  "key21": "5kC8rjr5DCfKucJ9sJFtEjFRWt8irYeHhrLMaWHrTwXx2Ud6cPmb4TJgUiXCagyYZTyvze1TsJbbq6z1ti2vU6mU",
  "key22": "5MJpouzDYToymk1qhjzU928dc4PU67i6ufMnGYjm39f3snXyCqRYQhj5TuGH2bYLmC5fuQw2QfHfBHHXpMvXPt2K",
  "key23": "5VcAHYaUjcJSZvi7jGUt9y39SRbxNrs3EaUoL3gimFchAjZNZqYoSa8Xgrz1PJdaVeJgAsBMni2fVSat79385td6",
  "key24": "54WvVeCBaaNYL52YAtpSKvVHmtJYf7tAoCuepcc92xdsSiCf5SWnyG4ZumX4AH1A9ay55h1AAURYSaXocqCXX6kQ",
  "key25": "3Yg5wpZwBH96sSxq2NNM662Aook3YpryGZV8vn63hG8J4CASWP91e2kK5ovY6jkuQe7aoDzyNs5DY4oco3W9aGL2",
  "key26": "5waoVXwNkpnc1bU3hXiFzzwmubHkwqfWooLKMGF3dEDzb7RSyLmuJFNLiP7R4vQPFXM5xryW2ugatx1wYqnwv5GD",
  "key27": "XeCu73gtL7UpbNqVCytNig7dJizhPEfc75ASeGbbPqKZkP8ceUhP8D7LDXRoois3yTW5tQEA2os7JsmHowcyf2t",
  "key28": "3TxAfzrXvTTkn8hDXWdVpASe13F5i5NRNjFEuLPn2NWEkWHN7XP7EsNAu2NqMJ9SiVkbXeqxAq1EXakH8LF2Zga9",
  "key29": "53r89BxYnfQizXdNJAbTK27kUwArLKsQoLvYvNe1kakzC7455ypfUGXZAvZRMxHwAbdrdYuKULMfyraiy2Laquyj",
  "key30": "3pMNACARxXpTdxKdAAUGPYiQNxCuJoFPf9vyDLsHCipbsbWfUzvVoEr8om4xn6KUnLcQKem9924eupXDWxcAyypp",
  "key31": "48yAJinrv3dbt8SQpu8jH7XkStkjgDHxqA5ucidL5Dj76piXLQf5tomRwymKfe5rw5VYghyB993rcdKSbAZcrpwP",
  "key32": "2rx8g3CZiP5tqXZVKWHdab2sxGSmPvAodTrNwvFgQ1GdfLTG4r78DDKN6xekT4B6oryFzodeM4Qr7fu4voVW1mpj",
  "key33": "4irwiDptRZfXWteojg7S9o7U8LoShwpofgiLevXSxraoG7dyQx9wnYt5F6eenVximTFmWtCnaax7wuJxJVfhFqyf",
  "key34": "2GJmsNUJg15nBcDqX8kZqk1AAJqdA9HmS9hsvFEDPA57MPxgMUWoxAWuDYf6ceaNPXoGHtb22uxXZFRC6EPiQ1L2",
  "key35": "5aBcgtcF4LZXjHiUtFmxpkS4ZERgmBQMaFjtVBYa63otHpkhTQA6rAbF6jgDbMwmnn9gB7Boos6hTjL7ZiA31YGj",
  "key36": "66Nx6AV75JYyUsqFVfiwowmtzHuNPMKoUCXPpkgk26cFoh22Gg6zvVs8xyt1zthJ7wkejkABSmvsZiarvbbVCxtU",
  "key37": "52JTNJ7eVb9BvwmY11STfZWCCz352z9MtRt83Fnvm4mQi2AdB6nkzStt8Lcaqaai8AFUgCo2ARwpD1avPyipE7Bv",
  "key38": "4aypKhnVAeeQyPSTaFHtBV4inBce5EPvGfXrdjE9aT54AaXUqccS1BEKrmzHsCVqngQANpuPtRkyfjTb4771jQZw",
  "key39": "2mRBarBCU4DF3UmmqA3itcSHbBGy2P4deoW5c5fWm8oJ54HNtNpgPuic4b86xcfKL23VMJQ1UzeZ6FAjHFUdZLk1",
  "key40": "5XeVrKZaMqnxjp8fXHSGJb9UdJtjKafeAvVyix3BFBK1hNLYTZHFcYf2CQiJ25po49gRUcxYfx7vgEs7vgyyy6oy",
  "key41": "5HmexnFAk24LZrz6KFaz7hoAjcXkm7W1LGh2P3F5sikwq7Nw6zNZY2kHbkwpscFNmoyLfXNkBqzMPurKAhhgeqFx",
  "key42": "23gjUawnyPVnvijMVJxLaSaH98SGBzpuDmAzYZ5iHKVMnDyExnjCJYof6XN3dRuCmfjqYGxcVwZmXiwu3xXL2C2e",
  "key43": "4Ao7JdZgUyuDLyhVoEEpBoQMKxoqQrWtpMrNWqaGdQ4oYjb8dShPsK82QeiuvVX1ycSNvjs9QCmUaWV1LLq49Czm",
  "key44": "4wPaoyDkn6un2cXKXtgia6QComosuALGgzcdm86puUJ33tJQ7pxkc2VGBdb6yLo6fqtbMBCezmNxssok5YuKmjcY"
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
