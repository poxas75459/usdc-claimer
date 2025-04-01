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
    "3aMs5rpyXiTggkQ4upfhkHLCLeuaxCTTeCC2W56BXiVfNQ4HF2eAxUeeTcEHYeVMFcsonhhndnLZ1hZFWuCDfaHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcbusJe9XYFMMCe9wu8LThEAZN2fajNZ9FVnnXp2k3VxxTSHk94qiHKZhWSfhCEF3TkPR2ACcmjK4ek9ff3pQ9",
  "key1": "gpJGMXxK4A6SoVxm4cuBcDWhDQkTvhX7k5WnUCCrRtFtgmDumDCzvqcfJzsG4crzZkguJo2Jn2otzuJwGhcKgei",
  "key2": "chex9RZcpYCxXvfCS2S478VG4txsaWfKe5qyBp2TwXbc4DxhNqZ5gzckzHgpsWDUGyLvat6GSJRDqpg9W4Unjqa",
  "key3": "2QR7CLUdrs8XaWsjD5dk16vVGGX6FUAiYoq1ffpwibR99eYDKYVSWNDo1W793MxqbktQUk9xZ47Ryz9KPvcyvpfT",
  "key4": "3EjzJb87F3kqAz4AeyVUYSTqUtrtzv7t7sMfW6fXME88yqLxCqk3QYfnw8X7E64Hk2iMaidweuG2c5dtCmXhGm8k",
  "key5": "4bNZ5PKijjvidV6PaAvtruojsnTbK4YoemRFABxGYMXDWe1hF6u5KkG9tJE3EVqzr8EDrvUpvnNX2u3icXaiJxiV",
  "key6": "5t6Qoa61xTh4PtnJrFhK91XtvYEQ7Yo2vPo6WePs7giwVB9Z6iYZ9gQavM73KhtsRK4nPbF8YjboprmqHCRU3dP1",
  "key7": "32ddN4As9CgiqwLNa6dcdK97PeWjKddpfUhPQepBivnYFtVKSLbnEgnn1awno95m7j9CVUs67JhGgqFT2tjyXbj8",
  "key8": "2PvkJ2x9AV3uXD4utCtYou8RNe6aNHRUw53WAV7JXfbKdXPggw2QMGT8n5Adz1EZv1YzpYAqjse1nXB3bQJMBJ3D",
  "key9": "2cVokC8PKjemqjHvoyttzzJrrfEzxh9dMk45P1SyNu6G3x831eX39R4PJePDAMJoNadUeDtFr68ReczKRLyh2kdz",
  "key10": "2mBjksVtcz818CkSeVakiL28my4LQ3YAoNrpxyxu3zFD4c2j82mbUqFe1U192Bmg15Smy1kcqJW12aA8YampKVzQ",
  "key11": "yJYRvXi6esQdMMBWXc71EZZwVggasBRfj6yipMFSifsQSQG3nJ7W9v19fh5QSxuH2Ck4Bxu988ttD3bTkgdng2P",
  "key12": "C7QcX6mmW5hYX4Kwp3bcDfUT8sG8LTaKV8bAbS2oLnKXHNFvoKHWMZsfQY58Lpw2V4VHcX9gsLAviQMZ5Zv6BJa",
  "key13": "4bzXYE6ksJjzxaP1SR6FeVafQVWR352A9uyySMNVNKe9kKK6kihnLSVUsywWs6Qiw5CAnFz4SH2RxQeTfK64mXpT",
  "key14": "4hVKr1WkrsUGkcxGJGVBPsVzYxVXQbKdipfMpZqW8v7bbYZ4uFDyQexxnbYUtD9AsXxbNyL9gdVGSUBPHfxRWMdU",
  "key15": "3TuoJ51c6fmGAF9gk8peUabiHTzum6cQrPmZuSAWkKXyMtL1u3iEUauWMX4CGkurXvX4hiejkVMXH4SpXBBNqoRg",
  "key16": "5gewtiQMgQdL22voMNWEpTDDu6JPsAWxHsXaJAA3TGLsEqDY4pVbrXKtmCqZPVnqZubtxjMwaaZiiSd25CxPh7Y5",
  "key17": "5wVnc83Q6ffYNdtMgXvV5eACfKbr793RtSJeRiAx4DqvhfHUbi93ku3eb7eFP286Wg4pRASwkj927ovQbQyVJa19",
  "key18": "3MFWv1HTZ8PV5yacebLs45eHLhWEoS8kq4p7frrvxpb1HHDqGXKeruzkNUZHp6jUCXei1VeEw5QA5GmpVQCkeVQE",
  "key19": "3cnQJicZgg4cuviMaRCVvHkpyozwEKPeQzB1FKHKqNfuiTCZbz8DhatoYZtnk6NSB9MyiopS1Yhrd7gZdE7tGBHz",
  "key20": "3y3YaK4uXs3zypGPeLikHDrBfGS2TpwgzmQ2sq36w8qgZsoz6PYFt2kkG3MphMbmFgp78NP1te8iBvmFT8oobQji",
  "key21": "66f8T1SWAjFAihHzAxLTpAAwwHF9hSrGrVBwGntRsoEQ8tJV5ZNvRc5tPVkior8WSm9uvGLdUHQqGPostfSLJtv",
  "key22": "F4oSYXQYjH4ZvGsWxE6CnEUFD5RwmWcZSsgseZabRKKYqjWySvJBTDwpzvF7QjQvsJjQhKKUWWCLcfF4aBzS2WG",
  "key23": "3Nqm39u2S8tc52H9ZCfLmt6RE4vGEC8S1KwTyDzhhLnC3HRBLmJWwf7i3oRvyZ5WwTVDuMc7rBWUonsJZ554cUKS",
  "key24": "3xqpEkBhQA9KT1xkfY77mqjLtBtqmbWWdqanRH7r9N4XzLzmQqND1JgF7ryJuX2mfFs8w6WhRCytdGsqSmKCNVZJ",
  "key25": "3BUvUwL1a2yNgfXk7WgWKiH6DxWexkQirDWf147okxyEBULkhWdktUsDWzGNLVRvyCkoiRKst3mZozyFAEPYvkuN",
  "key26": "4AF2FjkLgrynvKYynx22G9UQQGnMey5jHotDPUxhaZXxuqQCr8dTZjCWpk31NQ4JGQTofRUEpv7M6Ze65Nbgghj4",
  "key27": "2RMZ77NcMX1QzFTMg1QCXsW9EGXCvV7jz56rGXtNxgEePGT7WrEwbqCWTGZKvh4LD8gKhMgW7oxhLgWfLCcWRue5",
  "key28": "hRtgevPkxD8r27sZKDAky3ftmZ7QVEijt2VNRm78NDUxdyyJQjitHBpBVXJQnjxGULZoEXVHXbVAchobKwK5yoj",
  "key29": "n8gX9mjp4Lw8G9yJkTqTJqX4sNvVffi6jBvtuRQTfbuGqNX13LtxgXJguxd4D2CYdW6P8B6RNiTnZtab8WR4hQe",
  "key30": "3JdzRS2ETSCVzwdAcG8JLKThMt4eF28xfMR33d4vuYor84bx7WvKHNAak6FpmapXBDP43LVLREaKJE1LnxEnboBN",
  "key31": "5AB7MpR3QjpVoiYbt8Y4Z6wqi3VvQ193U5jchgJXnB6XuhUw3rfCKUCbf3fEMfb1tEytd7aUs8F3mHR8ZhGnQMk4",
  "key32": "xrr1Tuq1KpTij1mciW5KMHT22sgUrYV3p3VwBj52m1PpFPFo98LFmPSDFdVSCTMbE4VGbf1wEJetCj9iS5RDqKZ",
  "key33": "2UoJb85HfojfEMNBYdqRux1oLTF6NLGbDQMPzE8VFH29wG7cztCVUEBAQTA7a7HrqPdZy5BmQyZZiUYj61D5Pyso",
  "key34": "34YzMtCP5EeKZZVZiVqjWqCiv1nXjuaV6vsf26CvxgRN9aQRmMitr34g8XekQFJ2H4rxaoN3oEE2GhdpQcNm96Fy",
  "key35": "4PJWnXAJ3x5rMKBrSYr5WS9byp8SDLiA1C1kV1Yg4VJ1K859Ca4SP2mmdpbiGkpFXQRi844bT5Rkj9VbGZPQ5KJT",
  "key36": "YFRjr4SrhA3zkWSp9zGebseVdfgc8cKCHmxT6NDewUdpHVKRhoccMh6HkTT38sMNpLNA4pPwrcb5zAgbtLjcMWq",
  "key37": "peDt2DtczkYQQJ3kaYgxSytKrwRt7Uqhkq4jvjCiZRSZcTVdTZgg14ssXDfeztJrw5AgJVX25RkbRu4r3tqfPaU",
  "key38": "2tAdhpCTkM8jKDgacfDxc1P6AobLhxVfynSjUFEfTgqHhZxWEKqBEP5ccioo81M76Uz55tKRPSqtRey7bmZgPWRM",
  "key39": "mW8oMkjSn8DN7v2tRFFftmDyfeNihpCcKWkFuwXj6sCELfiUU2ZGqzwQwHNHdm9YHLpPPgjsb8fEhhCbRbHn97B",
  "key40": "5jWnqrV71YcGaQAMwzx7K2QALsMRe1xhxmq7gnrvGT8ngoWLnsZirfXCAcVRKSDXuQEM4LGSDNUEytycreef5Nvj",
  "key41": "dzYcjn5yt9dniYet7yQomnhGa8jftxX9rV8koEhyjaM1k2uHKbfwwx1g48sixx7TEG3pLiYRhqSURUhjSrCDDT4"
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
