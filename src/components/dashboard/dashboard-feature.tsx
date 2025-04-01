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
    "2oSrePGcga9gJuoAVqisfzx8dtHqbTFadwy1BUeiix4CdsSF3SokNBaXDEPuBAV6tBnMM9DgiphU7u8uD1x1s2K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "crtCzLsAkk1y7SEVcqWjPNJn5c3SvFYRRAD2WzFpSDLjsrneCxA9qjUiVNGVhaV1U6K6SQwfTCjkjJhMHfoYhyq",
  "key1": "43Nooi7oPmiEayA8NMVGBj4cG2xvUf78i3MH2YJnSnWnZt9XgCT22KBBXDKVbayrTUVQjTHJFrQGyppYH19B4kzS",
  "key2": "Pw2EyhWaYarxsdCjDxkVyXP8hLMUQggwXP1dGL9dcZ3MybHWTZCWogaJdw2fcVNctwzxkUFVZhic6h9HJVdZP9z",
  "key3": "5YgMmmA433HEEvCwkemG6aTkFDiRbrCKYnoRLbX1DXB1ZUeiUHrN6hJ1cLuAECYUEBEn4wyzkh1C1W6F334DCJ4g",
  "key4": "5pzL1HdecLrMhPQbvxavnW2NXuThU6W5vuVDsRi4dmto89E4rhEtW7YPxRowsxpq4wv8ViViPs2BZJKXdmuvQW8a",
  "key5": "5CoCnji9aE9jwdpT7trTUguZENniaNWJyjXj9fGq16FTxmvWAZ8mEQAEfToyYE7np3RbuViUE2HCpJ9HfuhaxeMD",
  "key6": "5YM38vocBZyEXnxnxr7xbz8dnD25j9rkGqrPqTDHe4PJsrLLZGPuuAJF4ai9cpHosgHgxbtTqfLjLD9iTKcW7EWQ",
  "key7": "48jh4GbXhmrRy7p9gHG5MFWe8CRZPZJB7ocyqX15ZJD5bSnku8JDx4Sp1N8oqhieeJhXgFFnC9eXb2W6EFm8CCtw",
  "key8": "S8dJPteEYxdmNzYrE5VTVqxd2Kbcwpa4yzEyFz54ixSf8Zu2FwaZTq3rUY34MjYxo2HDZE4U6bkT465fLf97YzU",
  "key9": "5RbcCLH6oCVxXxkEMtG4C5xv6KdbjvqDsQDf7rzkHAwe1GRr2gJqJWjRaLW9hQZ8xGhkaofbmtVMs6XJVP3iA7Xn",
  "key10": "5oQhwKoW4G7ChULtjwT4vyRJGM4XLvRouXp3SuNXfzAZxBT8cw3TrP9y5TjNhqDgFYu24VwEGXLsGCZ12asFwKXo",
  "key11": "31rTT9gAScx71hmR1j5C5gC3bMTehAMTogXJ6LMSKFzKDLZEaUDiYDBs3hTbKDgDvBdxswa5cQA3f735KCPwpyvK",
  "key12": "yZ7fryhhQGhNRPHTMeDfmt68pFuWUNeNEBNwGv6yVn18vwS9YYkKkpsSmRB9xcyyzS1o9NZEN3VF8EjrPgeSMu1",
  "key13": "28bA7FnKQmBnaeiruw788TiZRgfBBXnbhCFAZhpk2t9imSrawsxNacwp42Dz3G3LgTVpS1AcnYPddDBahhp9j1Rt",
  "key14": "2WGAnBjiKeJMhZQheqMKfRBtbMmoHLfssxjs9LmqoGV9vnzuRkbwTLbxMZty5Q8p25yGXTFb6kiL3YYtjobVvr2L",
  "key15": "5apUmDQrY5dKSeCgHUN7LBAKSPQtSyYyLqYKzFjYttca55KNmvsnZo6aGnhPWa17eLT8o7G69Eo5PFDgxYbLYdFE",
  "key16": "35jxs5EzctsTpLQFJ3LdYvEt9sDSGgQZTTpodFTfKgpJSBMPEU13nZnRVgMq6War9Lmyr2CJtxqYP7FGe3gEjdPe",
  "key17": "2Awhbmp5N6UsbMR7FWvzW43qUvRjvvn4sa15XFwUbwQqsqjdnqtd9rtHTuERfctt9PrTGhMAD9PRerGSs7cXTHzs",
  "key18": "s4A38x6nd9FVgvD1aAjk91KXBQiZaz4hZLt2GbL3JZFtA5o8nqdPxJtVPaxRQuxirgW6fUxQ6neo1fLnXxLRh1R",
  "key19": "dyMW9Xd41MivEkz4KjiPAtQofBKqhG2XALCDaW6Affa18vkeoqDQqo9QUXVBrigaBG2VgtikGNn2vXgMxp3cFhj",
  "key20": "wxv7W2sptnJkQxr556TRW8bWXvkocs4rFHrWAqFPq3zGGVzvXbPTM66kqehfABeTkm1dug8CrMtpHAyZXW3jqsk",
  "key21": "66159EtWvtee5hB8UsVP2zYDgtuV5k4cbR5trCGJz1P42S7qkx44mCsh8ULJ1aZ5tebj5n84MzUWHkdcuDL4Nt5a",
  "key22": "2EVuKaFFVHXx6Tp737s7EyAJtixZwj6Jnuj9wsv2XXaA42rdyX1GP7wzZH2doMFzzVCUDFENEeGty2bNyxAjTwXX",
  "key23": "KkVkvr7E5y9ckxM12DvMaHeYcAB3tXMux3si2R2PEtGkoQFBjMLbqrqeUXeKe7HGTy16BtVi6Mvu6zreXWAJHGK",
  "key24": "38SMZohfZKfhgoecUz6xVniLLvfzzqRLrnkbkDAV5c2e5oP883uZ9t5NigBKtNyESQdoTf66ncwi1fgjqgwyB8E8",
  "key25": "3orQGxGcMTtoM3WxGW66BoCZLk8Kva26vsAmBCLEmr9j2sqS7NH6WjUVux33SheoyxteNbZAM5WxrJcZeM2aPj8k",
  "key26": "3ARc3SN3H7Zk7ecF3KYDtyUjtwcHJnMcM8LY6NMhKQNVV5mxC7S49EQiyKckpn7Fn2caADjwGRcjdn4fdVEAJWFA",
  "key27": "C33aN3PJvjMCYtXBpK5Yo5vves8G8WR5fZVXEcEmh5jn6Ej39rEVQuy8CwfgVCFXFdSD9jsK4fqmJ5heMUKS94m",
  "key28": "4GpaJGgjw9KCQWAMvg6twapXD28gGouEJR1Ewz6CdksqJKb58Din5uwL8awuAqwY1e5NMow4r5E62R1KMhgBm7Nf",
  "key29": "55cLAi72MU1XbroHVeetuaYAvzowSd1biB3SjsJiDeepcWzBDuEpNRCtUCPX7uakXXPZBbNgaohrFXxdfhH2boQ",
  "key30": "UQ3Hqvwc1vp9JwoL4WiGfRNjoAFCszreDghdQCFps3KKA6KhDuo3b67rMGDRWwob4CQ7inFJ2oYXs3nnp4PE1Do"
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
