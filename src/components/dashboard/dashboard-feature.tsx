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
    "2yg8DKWcUw2R5CpBqqXAnnEsjTXUH1xGAtdu5et4nCF13CjTMpsv2gMjK5G8XvuPRaozZuaXH4k1XziUijnfjZzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wPzD2FDjJUQ4ogn41ZVZ1pgevtwCvVR36z7X5tbUyqafQ835qKuFYFiXiXvYXbD5KBQje4DQ5bYpjkq73YiuLzG",
  "key1": "idWwZue55c4Wra8hvvBTErYhERTB95YNXLZ4ShPMveK6CtJSFGP39EENZnh2D7LVTHAqDEaSKi8XvXoyM3aFxHV",
  "key2": "2wU4rVQste5y2K1YYyxVh713S7Mi8UQ1L7Xs2JaGbfzqtp8S5Ygs7sP3DQSJdQAG8EKZCaPrxc7mP98kQz1AHEMA",
  "key3": "65hxH12bqYNe7t5Cv8w7W7zgUdsW3qvAVPR85oc9572UYeHXiAdtwd3BBAES7xBpHexd56QYp82vq6ij8saFwxaS",
  "key4": "SV7ovPxwBkXKFbDtm57v14LScrM4v23QN3abYVJ6PtJihW9eMrZdtoEEjGM8smqdv8BbhXe7hmpUa2TE7JdyhjB",
  "key5": "5ikbS2nyieU6pfPkmDWnKgdHWRtopL6hSBbVKDewhN2TAKiQ449S6Vj3kwJ5gpnHjrZ6UUcfXADHGkBBc3UE5CPy",
  "key6": "5NBobHV9XWjBqTG1m5EsBneYEu6NCQx5mjMcHbBH1LKTHuCSYuYYs3StVZ18ipCkXnnnJdYTzHqdn7AWm3tPD8x2",
  "key7": "268VgS4U4wtMtUQuJku4zogSYUhkuVVJCo7Lgof88pXgbBzeiY2iTbk16RpFfLegPcV5qZRYwzvvvdQ3fa4SJrp6",
  "key8": "iAyvxShXdVFeEyg7nW9DkAGSHZetLKZ3eHAjGML1sjhktThPMHPKkxt9TFwpzSy4wLa2mpMyPgzC1mq2d7s18D3",
  "key9": "J1zTNdPEHvq85nQyjBVMNe7Vjkg1n8NGgybH1ZPVnWCr5sb7foDPXfPdG1RjLHoriHKgnZzW645N4fkCuDcCopa",
  "key10": "3tY3BWXfF3iqXjkT5vKtPhREBrUkiPmHJtyqtmPXFRDhuk4EyaTSkUzrLATDHNytc2ZYCQzSCjio4jYahq3ZQRq",
  "key11": "2FJsvkGtVtGahzE3ULEgrdCxZ2KuwzuLAVpUJRZhrficgvkfoKbEEvL6nFXvAqrHsJoXpWeQuc6L7coEWTkTZGSe",
  "key12": "5RydChxykVDVFnhYGFHtibcbTDRGVsM96LwcutroUofKzxf77btGL9t9iX86ssXxRzeR22o8i66QshCqKEb7pi7p",
  "key13": "4HtPicfEswTv9aRG5szCfQ5RYgfQpkkvruAsCTD7vZfCMutndwZDryGiMCvJM2LVSHrCqP8oh5FLu8yRFhUT2KSZ",
  "key14": "5M2bjfv5gB2b67L6kobL6H6aGUeJ55TnPmZBq24t1SSxQ6gWhW6eHNTW7Fd1eieogEQnhsybePVXaHhqY1LvEsv",
  "key15": "31woe7FUwq4TrNCW7YzvbUhZXcfUmc2gtbk8VPywWrF4MnJz1zpyut9AkFyzLsBrpzELMspnLqwFSrje3WM2YbUs",
  "key16": "2AShtdH8BCfo4dkgRBEzFRVFGLHUZbcjReXgg9mNxVhH1G95JB9aEQAGaDR5BVQkbTmNa2TFgYbhLmcBFaBJAW7m",
  "key17": "2VrTfzeuoshZnJ1Qz62SHXyUb8Gdj5JHpEJYvS7gC7fnrVxaMks7KbAuNmvA8a1gbJhWazXwHwa9dj7rY9B9rg3u",
  "key18": "4x9iTK8ow5iW4hgriAihwzCHAcSD5DaYTWe6TzEsWBJxUkcn1jmqajdmkHgg67UB9JZeeZXMu6rwZv8aKVH1VorW",
  "key19": "47Cb1W6w7fcJuVMfbgo815Ta9wpDg6xpTSWyRdgewP8ThFmhV78kCjcjRo5AywzPcLDuFMB94AjgNZDecxZaKv6b",
  "key20": "4b2iRFMm9XhJkvP5uTFwRK3NVZj2vTH1js4Qi1LB3NDnoAWLWX7D3crAVb1Fnqpg8Z4zEzAZ5nD3mEkChc5FrQGu",
  "key21": "3uYkozrcZokh2LfvHvK2yadfe41TRaaBxP9tpk1trC1cNsYWhmiwAwt4KsnTUVvxTXAWGfcuK1mQ83MeVjHi7EdX",
  "key22": "2GrHtgYftqvkUWWNcCyuExRYeXsKArXiHYRDd15nNN2P7XtiF1NokjjVBhRec6nagu6exj1LbQ1enq5GA2yrtW9d",
  "key23": "64EFvnZkQJzTKNgcpBh8cgYbvC5CoJdiCdJtfp91PMYNGSdePoQ6YP1SGBEKgKvzuuyJrbbomkfvuFinr5oB3UzS",
  "key24": "58ZMa5e36pxAvwRtSM63rM8H3Fr46cPL6xe2kQLbtnqAv1z6Mw6NiQCZWu1eGX1HN8Wti7bqhXqbaeY8tsKuF5Fy",
  "key25": "4xL7hhUVXxFj6oEh1QR1X7FyJwXNTNxgU49HXG44oiw5jEZvDX4Tt8iwZcmbcSFJkgXVk92Crf7bXDQXYcpPxsZx",
  "key26": "43fPRyBW6Qdj1U8xSiKrqofNpfXub5CemC6aR6e8yHgXipXpzgW4PAEGMAowxFfmC7uLAMUDSi6GCvWXrrfDXovA",
  "key27": "8pVCLw1QayvSYb3PAd7Q8uUZuHVRRtuTpxu52kxFk7RvRvkQfzqngwrkNLuERP33H1WYhz8N2KjTuvcbK7Lc7GU",
  "key28": "KQuMW9WBKypjMohXGGMcDAjvdXZPSgUy893zRzk7REFbXtHGuyHNapoKxXmu3vdJK1jvgA2jqfVPjMSVT6PMr3m",
  "key29": "4bsJVWRkdDUDEkgfpcf8dxJ6kWBK37GZGgsG5tNssBNK7kJNrNcvmReh85PFW5kkEVdMX2UoBghP5JpcDqjL9Zjn",
  "key30": "CbCKX7CcU6CkjhRr1GDs1Q2BLfMX5VdkDonWHDbwZrDua2dcUtUp2mbnQb1mbehAKd73drLLeR6zixyvH8LB3gk",
  "key31": "vf2s2Nx3K1aVUF4RsBE2kjdneHrTz91j7NcX5Kt9S3orygqzpd2Vc9BWVusFS3o7rkWe4HDSN9rySty4KtwLiFo",
  "key32": "5wfCeKfSeoDeCTaTaGdmfNwcg9A1WcScmHhnJCEnYD28kzjPpGsuGhXLF6pvNfAWDcoozjKpmhKfnWDpDFDh1ojB",
  "key33": "45o43fMRwAV1tntmuaNtLyN7eaAvXQB5ixpsov169Mvh3eK7Lj5NrjhJwT2FsAARrB9ETiLmg82vQkJ8XaqxUHe5",
  "key34": "2A23BaQ7zkyS89W8wgskYTseWJnB6NHEzvEhRu8N3kxre6CreUwdn1DV3RNDjUqNVfwE1SbR7fuBDbaQayUvEVpB",
  "key35": "4ZqUKoGEaBnGWDsRvtX8S5zwafHyrmnuSAwCSbp9MS7Ef3ZfbVQHGyJFtPUgZ6e8CErDEGNDGEXLut6zDfpkH3xF",
  "key36": "Xea8m8F3e4fEaHHAwrrZRnzeCwC9e9KgvDo7893iK784bLBw4uXJQTR8QjRPLQ6jLYZpSdEhRgMAvjVza6duMqj",
  "key37": "4oeycQ9AxpqxrFTDGtHfHi18sD2weBrgbtRKajkQru9QhbD5YnbDuLjM35YHdTcSE8L2ddk2eKNBdvJWo2hnpnyg",
  "key38": "2SpsXX5NFYJksavwFQEjSGENjZd8bRsjr4ct1Pkdap8T8jqAcYrsRrqaxsV7Nwqd8upSNaJtP9ds6s28xiZpH584",
  "key39": "29meHV7E5SyS6RzFS4Exx8AdWp6pRNVFnpHj5beR92FGz722dQhhBABFy1j5cBdvwYyjqkXSWC7KbmtTRrPXHuN9",
  "key40": "4BKLTS949jhon5GzvqaQXH64qn75cN5r6fTAwm8aZUEG5BaN75x7cJGrocnmdVZRgRSMDU4NUdq3MF4cmdLYkzBx",
  "key41": "5aLUeKPJBLhseJUeRgUzogAbuDbNn4WS2Kga1GZ6v3xtLEPB5rQYsHQbPyeziRpBKKdPxneL2Y5VPVcQr5YpzQ4q",
  "key42": "LVrXTzwvJqcoMCzHCGubav8sQmXx1cFi72tBveenKjLdKNCM5K5Gc4WeqnJqys1TQszHb8ozYcQcTXcLiAnWRec",
  "key43": "5hH2Cj5EVkCsDPiPBn3DqiV3Lm1hJQixW3yb53o4DKabG2vwxChBVkikkQGKGN6jrAqiQLVhG2gFwDBU5xib25S4",
  "key44": "3TjvWyjnAnZkT7z4Hjgq3ZAfETUZw7VtSHhmgZYsTQgzcSDfgBhwvVSQ6jw7fhdveu1zL8dCTxXAeHVhgyC8fiW8",
  "key45": "63xRKKHCwh64uWtDQwAe9WQhqwFGn6cjZ6yTnRLbx9bjPNQnTEttzW4n8bMA4apPkECCyXnt7f9XcVfrtW39gSnk",
  "key46": "3ghKX8Whag78RMUXEvkgPJJFsyMt3iJ3ydNAXypXE9iwey7FvNyCiDLdDCax9tByRCFebvDKWL8my16Ns7Lw1neP",
  "key47": "2imrq2dNgPneUzpkFb65pKaEmK2PyFGdg8AbBeyV5sJRHwnmMAs9PxtfmvEyLYfHJZMsR1YvFDCfcNj2fmH7hWvj"
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
