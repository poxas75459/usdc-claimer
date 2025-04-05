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
    "3NzANxSKTm51r8B9vSoyZ5jAWRVcHSiNssv3AZvHh6q8z6Y3AMU1w8qsR9oLMb2dYpErRNQzdf2WbNCuz8W9ETxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZChPkvdpYo8JXt4cXgM8txc3uDLLs5w1HjHuE6XXinkNCYaoyYH57XGdFfCpPxS5spau1nfTmTDWYDVVXbjud2",
  "key1": "5KW8xptgV68LnJz4cV6pMi6x25uZgm5621iFU677D9oMJoCmSR4sGXgR8y8dXEdQeaQNz7969LMX56FYzV2gvtHR",
  "key2": "5PM8TC1PD8ZPQGvdHKH1VhChw9dsnwvfrb6r1vd7oanqcGeLjCGDrpEwmKKpYmzsYzbxixjscWfbdUcv2jWtffwK",
  "key3": "GBd2jUgiWArEsLD5izfx4AZFZQUH4swSQRxnAtJnR3E6A32oT98CbG8BHz5983HdMXPgGLGryNUqZzC3CSWSj4Z",
  "key4": "NQ7J9Lg7BjDZMyhYKV72KHaXrHUtRSAYGVyRE1sEU5Gw7R54DXQTauymCrLhNsedrT9yWGKsvgnHSyWF9iNy3F5",
  "key5": "5Zdb3geNs2r1kW1CQ438cQV3rezqfoaY3inGZhxJvmiUbYwZPDqGM6tAfc2AQAG5k6MPVAsHV3FH71GWRR55ovX4",
  "key6": "52SaZpm5hL6qz9eALg4vuoZFxYKCm1pugaJpWgy9x9PS6JL9Qgyh3iNJTDjFEBpLTNRJWVk98obvYtLm9KEW4pyx",
  "key7": "2NjQ4ZsoBTnx4p742b2eXny4HDeceNGYJNV4dCJvjpMVp9Cj1iDnLCDVrXDv1Ne5rZuqi9bofYKcVLWCy4KUYsYi",
  "key8": "QhXzUnjBNrPkeDfb9VDGgtCZ22QcvSXU2yPe5KtZagLqwZvbTQnW5fmGamH3HNQRWQs8YoiKN1cCN2TmuhxAKbF",
  "key9": "3fXCz2M4GidptcGCsEqfa62i8aoUwwA7ZhKU7tRArY8AbZtFKuXZFWg2ZLWGqXnG1bk5yiWjHrdqdkoGbFE1UH3q",
  "key10": "5DYNTj6sTNsxEeLo1xBa2vy5Nn7wRfC5FadqsXea7tS38ia635iC84c6Zi2caDkreYZdJqHUVMYoE7Z7LteyPwPF",
  "key11": "26v7GKbXxFALBVSPu5MVzRQdDNEHpbztosjyjkSbYVpDnC3Vgd3qobCXVBzV7judJW9959dfFrmMA9Lp5xGyg943",
  "key12": "c13ZMTYdhTDeEFZjEPHkDodAFnzyzE2oQuh5ZJeWNtoUN3PrwtVbZ9RJLXRSZo3SLzudTCUBdKWgT3XP2BsbNCy",
  "key13": "3iemMYC5zb1KFXjMdin8crTC1JSvmDiHsdd5SN1guAZbhoHCaksffP46D2RtrdkXq7FRiUFTJNFpJC9ukmcmzgVb",
  "key14": "2B1pJ4NuUcWzA4jVEFNUixWnH9DANYpxnLjezycsnoyiAXUkPJtv8oBWfhyXjkkWq6oP8JCiXmBDJQ71miwT4xmh",
  "key15": "36DtBVndvLyScas1xuVKvZdUnVML6Lf6fxmzWyd9eRcvvAgT2CcrMTySurGBWxawZm1VS5jYWvSj5Tdd2AkuherN",
  "key16": "3FYd32bi5TJ69UzzWDAXyn6Z1uWfZknhFyTs2foH2NBfbP3R5dXGFF3cETw9ZZ3i8R9cHGSGmSP88HahB3GuGhNW",
  "key17": "4p2G9AF1uSHSXBL99j4q7nrBL62NTbhosN7juBEd2bNRD8J8ZNoWfkGkKzetBNRUm5j3pw7qFMRP9EfnsEbHarbS",
  "key18": "5uFFDy7CFJpp7xoPNXDyhMgQLkBhGnakTguajAhPcXxd33hvCTiFhPYsGbpXYW1PBLL6n2bcbhqqCJyL9RN4yRST",
  "key19": "4GroaKjFHjLMetQKAFAwwRd9wTf6W1u6Thc9RXpBc4QteqGrA6ZXMadUM1XaHabUqzSZ1fPWoEjzPEomyqt7Ggy1",
  "key20": "5Ajdyb43epR72hy6NcUEAJKHQ12XPoAUchbV8wN6tUrhcwURbPMdrczKg5bA5bcXDBVAq92u5aUKtXrMCjJ8ivhA",
  "key21": "4KEtK6CpsVXbWo4UiZGgoePCuNLgQLBjkzAvobDw77fNgHNBj17Qr71CzNdK72xrgTzxN8tmsmn9FJonPqGQBzEB",
  "key22": "jJ3sV4GxGxw3vY34rTbouQJmaTpk4sD745LnQ89i4RdTu2eG16sG18egYXWQBDUZmZ16zRhqZytmVmLs17znT4Q",
  "key23": "48pSoyxKFynRC7AwFdt42V3QfmEDBv37uHEuJZYLtoUSC2AGYN8HNxHYvi8RpHQXh78TFEvDXCQbxFooWK9uvSLD",
  "key24": "2rwvyqNnF9FaACZ9YB1j4EXmZSbs3mLLMxtSTD7xbAjvip1NSCjzb7gvva98tALNeED2dVTvJ5fgnHNbTvNDMh4C",
  "key25": "3sgqvYky2UcKa8xeipCaz9Wr9NvBv36bAz6ZrJMNSHCcj1fmkg2Nf1Fs68YAYzZDcRzGh615gSbwXTQg4YTCvpKu",
  "key26": "4UGW7AxFcSeJo8kvnHK3mzHq3xgxw6sB2N4aUjq4eM7VCuxsrtHXEkuDBT6GWoezZ2r1GLgMLTcmnZ4CLaQ3kV2u",
  "key27": "2ixyKsbZzhHgdLU2UTqgWmXJexbSRpCaNygdXvBkuMbzdvYvWj6L36iV8j8MG1EvU9Wh68bNRfFeM2HPd9gTWvgE",
  "key28": "39A1PHZLBin8LZfoRBHsxy1zvqFCd1bxUT1CvJakadZpzbaKWzR5cUXzFAQ2aoWW33jFphuWw5MeNLb5167gopB6",
  "key29": "2sF16t4rzSnhSQ5JpYPWs4jrGuFFzrN8CRovNGQWqzzTqbYcxXZWV3hBvvPDEcBfBUmQVFUUeWhzc5ibRiP6ZstL",
  "key30": "gsVwWo4K7xacNubJsAqMt2beEj2YERL6qbHA2DAox8mC3ZprWWy2f3P1hPaHCJxf1np1dTJwTJ4sxbG2Nr3XqYg",
  "key31": "2xeL3dZUWT9kyY2HHzjBCnUbZBEYHB4fuZgXpQzykABCR4TuACjtQHdSXKechv3Wb9BRyx1QoGzP5dTaV63Zo6rq",
  "key32": "5MnPAzqmUq7UMPfWpibtHUSNZqhY86h4mZeQmpevXFPg511GDMN5GBdEB3EJnunZS2e4tCrjcBA2gbY8kuSSGZVU",
  "key33": "5nY7TZwt3N6DKrTdYqA1RshTXDQSGs7HELEBrjHnGRRPCG7BrApSei88MZbuULiqT5UFevZxzXGNqozj99jwAWro",
  "key34": "5Qzs3QyAf3Mp975Sx6YqpeRAy9HZMKsAYegtXu7J8hnVgkGozFLFxHNhKnb4k9ZhSBY3wN5RoNw2Dc1pVKXnDByf",
  "key35": "5mDksDkjvj9FXnSjLfZkBk9PKo2meRCsAHBqtjqevtqQU8vCdq6fErL7vojkg5FC5k9htazbs73YgQwZxbKHLkUS",
  "key36": "4jkxhQ144N91Wu6Rwboo9J4sgvXNX8qeY5k5chRPfxw51aamR4swTPg21Qyt7wDuYLZSgRmFkcJgpuDQ7byvYFMa",
  "key37": "4Ltbzq5K32JMykxxLR8oSberNYe8kKpaqU7uUtT8DZpyLDaEexnfMDni9jpLeJSkPL5aYye9oExMQZr3sDpeNGDo",
  "key38": "4SpvzauZn1HXQH8LLtGSLZCpZSyjutiaN6j8ZW67eFQyQw66cRpWFSF3fYzKcxtunaqcdtm29dhFV2ud56n4Lu7g",
  "key39": "22ERkG8KqgUnG4rkpDyhavZgVqsgzqRbd2kuWjmLUyTxd1z3uwykwN35Yv2DmHFWta1tP3NuE5Y16UQgzJ1ht8PL",
  "key40": "nPxAWpSZurak2NZpxxPGMHy9NdPBvN2icC3AUC7FRp2Pc8gNGFEuEopupw2UmaFq8Ykj4qqTLavzhKi1qwjtFHc",
  "key41": "zzph1BCL7x7DEemhk2vhsMd2A4RmhiC8QgG1UqhDhSLpLzRa1dDCXHrbmJRJMd9zQULZs7pNEACc7aRJ4cgMggK",
  "key42": "4MBo9HKLhZ8pkGDZ6AnCDK45Ec1vUC9YJvvbZ7GWWkcVcVR326rUqAMrb7xe7HrTyXiR7FB2K9XHYNXjTBsKhEeP",
  "key43": "QgdPLEwk5i88TBZUuSyLfZhG936SmuBiU2LKNmh3TWyh2P6ohFb1iSSxbV2gymFuRNQ2WCMorfs4fiqgP2w71cm",
  "key44": "4mNmRKB5g8qD4V1uWtM6g2s3Mt24qghSzLBbcYnCGYjHTDmJMhDeiu9jjapadPBPFoFuM5nFoBopiE6uRxDdD3TV",
  "key45": "4hL27nAqPjQ1rLJwgN7CYjVy4mt5eabSYGQr7YkkYmdmQF7SWWekAgTS1gC1RCVpsh7TrwvbCvuYogkEE5AmXqrL",
  "key46": "5dMTR1hg5ARbjG3i1H9opRD71snFkhrqG8FozosRm7BHmFrGpss7Sf4GFna5hKitZdTTUH863H7CqybjpSPX5Mt2"
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
