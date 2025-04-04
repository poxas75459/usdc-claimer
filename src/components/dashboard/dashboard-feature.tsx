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
    "GZcxqWeKM9s59xdG9xf3HC3AWSKUT5RcboT3sux9YfiWfM4bEPmPy8PDxPiuLamPT717szjNcCA8XTggCdiBJ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uha7d2nKWAhzikMujA8EzySJyDrr17GmpeQt5knEKQMstyd2V8wr5iJzZjz55bNXsZinzxuQB39sn4Ge7uxs3Y7",
  "key1": "4HN5Bfi1FnXGGzrUHydjYhvE9qjDFYkS1GXuwM1P28cnm5HMetM35XUtxe2EMoUf9ALrQWM76cKVV7P4dXpNF9yb",
  "key2": "35W8oWryDRBdXk6NB55CTM4zHNTKv3Vj8FkscbTyyRpEZCtXsbP4mkLh9Ahmzx7tBrGnCu4ymRFeng1Vtq5b961C",
  "key3": "2ZxAuHsxUWKjK6fCdHMasVRH8BrBNKkPxK2bCRmsd1MkqpUQL7pTr4CNnuHCNU2FiMZ3a4rPhfRU6V9of8CJWwrq",
  "key4": "3C9rhc7BkAyWazx7284Nhy3A6Rux4fuKTsDThN5krfCLw7UGARoNaAeUCDXTJmRukgFgj7WVPZNGAicbGz2tUdtk",
  "key5": "3Z8roivYLrFvvoHFTujGRYimYbQGA7HSE4QB9L3vZfC7QfxLDfCMZMKTbv53yZnwBWX5XK1BUKe4VogPVgpqBz57",
  "key6": "37S5EyQ56YC71uCwiYEnSHNAVEYih4sf4xgTZbGr7dbFaA1tj9hf7gEf2zNYiR8D1G8ma5AA5L42APmsi1XrtNGb",
  "key7": "5RVR3osC8wUJFhPpabqX4WD7e5JfRSNfRUicNqU9zXXjkfH1XL16johisS72YMr2qxm7psryZG7mLoCQVDYXmyfX",
  "key8": "FDsGEym61ZXyf4wqUwtiAyyMxQiPiTUmVLXRPrmCteVwxNRmbQ6mBeSckJRERk8FbedxPi4GHLhDquuseuDLJAG",
  "key9": "55hbUdcrcEp9sqkRPLoC8jTLvKosPuzMQQVqwq22bBsTdiZTeqajFkJvXb1vGLY9o6qFTTRXUQENWMpLetdev4AV",
  "key10": "22SYMDFH3SdD6Z7prV5a618voAqfQDjXsdbqLrMsvFnVx4xuar49bDCpUbRP5xQnC8MbG4R2NBskrK6xUS7jQkVq",
  "key11": "3QwezSUKvBLj2c2L6bt8CiihJ5oX6e6P2b2gJtPGtnH2vKPdyfNhn5ZL44TswW8hSDFnSicZ88FrgsPDuGbvFBk5",
  "key12": "4BgMAi7FhmwaFj1SFgnHHpnX7toT6jbxzWrHyWpP9oBrzBtutujwfgtdawB1AoesBsE3YvxTFA7icv4mL1XhXF7o",
  "key13": "28aW9wfY7U1iat1iPzCJba3jGbvNXxdoygmECFYdxjLCNR9Xakxto3c2wzkXubv7ARHCmgdPsnUqcP2Mh5uuefyo",
  "key14": "2ScUUTWWGXyZgavFN5VsZ6ZX2cakyyFFRM8CVuw7VkzfHJxJzdqc6fv8CfyzNk1f1668cUKFRGdcT4EwmAtWYfEh",
  "key15": "23CFAmqFyvntKFJANsQdYmetfGA2wenAuA9LUPNe9arcFToo5CLQyXQckUquLdQ9NTv9nZw7dHotTAYjoNs171X6",
  "key16": "5KtUHFPvXP9ThRAN6MbSoUmRYd1Qkamzk9rcEUTh8veUBbi7Vjf9Wb9w3jBGY8tqdVdVXKpbPyiHy1APwNKbKTkQ",
  "key17": "3Wi9aznFjAJkREfvrFHaJ8RoHVdF8oKq7Ww6bzBAiySVMSPTtsARjMakZAAXqQ448ui3JwSbG48XcL3VFJwu7HCh",
  "key18": "qx5Nqp32cEtMC7XQtR195MPoLBuzXFCFFq4cQHHXvmQKat4xFtQsLwuywoiywSYLZS4EfdnLKpzrHqCCrzmrQ6D",
  "key19": "3a2ERrK5B9PJAE2tPXm4U5ZTgYS2ygp4Fjqenna2xvKMDYLUkdXokHKuvGX8wVBipVwnWf1zvpvvytWwWK34whFm",
  "key20": "2JsrEVjxuTb8W8gQYchRVFubStD6nEK42FEEE7hSyQqDNWvxCFoUVpKyM7rbYWWLbtsTq5KvyckwP4rbx8pQPw8j",
  "key21": "5GcFP5zReW61kAG1rAbzLXRmgcDgP7Y8wfjyScop5svUSMMh9QCc2o1c3zLms8TEpsnVansEwuHmz7wm3sYVCTRr",
  "key22": "5yx7XLc8XosRXGGCLuZCXDAwHPb9NkF85nWeYPjpZHggfy52o9sE8MfwvvLBXhr7zRN1dn7kyYvvdLZaUaRhh6RW",
  "key23": "4BuqwaCGkCJvCFtTZob1RT7vKdB3zA9rGQdy3KaimqXzFv148MqUtFmUcdfuWYqNYWZeEj9UYfcRrL2zFAP79thy",
  "key24": "3dwXtPGddgZydK9oYbvS6GVAuvddaed7yKk2ha4x8RkD9W5ykodzqLaw7VdBPjxJZUeqzA96xVEToUdWr1h183F4",
  "key25": "5KywFywb5nGkp2tbc1EokJB33oGd8JTPU7FdZCSLLpbQsJdQVSuAxHuTuzSqoC8ZjkAFmh47GpDgab2uNbDAX1Ub",
  "key26": "4AwX22uworayN4m4DUArMXhda5BoQ7Cey1Y2KEY3LKYiKNsf4YsomVwAKKSLBJaoSsB9Gr6HymcvJ46nwor4x8La",
  "key27": "8yNCcQFcUrQXPmUHALigPyJfDP8i4cfQGjpi81B6Bxp4sExLW55b9ZXJZvLzbTU1YdiqsjsSar274MQgS8Znpgd",
  "key28": "5bNDSEbULQUrYCUAtzVrxC77vZYCHSTAzwfRzPYjxCy3jeEsMGh7Wz22pNwBSA9sYqBwk1GHLnqn7MCKnAFUpBM5",
  "key29": "4G3QroPqELMhmJHq78bJUfPaSWZd8p8iuKq42HDKSgoUZYNfUnGgdBu1aMzyLUVL244yuR6QUGf2uQDywmPJnbsy",
  "key30": "pQLzyZHTum8MYbyT5AouLCNthdeBvtrob9s2GMmb4agkJBJLQcNTs5Tnctzuo6di1ZzDKQ4VEu5cocRsyJYbxsq",
  "key31": "3dvMSLCvxBGFTnQvbKkatwjpGXuekYQA4tq5hcosZT9dJUY4c7UJTfGXzcrL2XEiNpWiUkecG7Nsre14C3JbjHMP",
  "key32": "2mAkZvRWuXsZ6kWQP9JGkBjkMqadGEimDknaJwJ6HzuQdxBQqhVNZCsscgAehwMVdeaBdfbtKpYAjiLU8nZccGfz",
  "key33": "2vK71Pbcvm1pwgGzyUried2x5Egsg5imLBc6hdJr3pAo4RkKSMos6GEgkYnVdtsGBnnBfWTJpBSzKE3aeGWocH6T",
  "key34": "4K1mfkmqi3dBSKptEuChg4u9hUuTbVta1pjM9kToavufZEj3hjvCDFD8YztkSF55b9dUQvumCrWDag6oHQuWMPUM",
  "key35": "3BPes8f2LvQzd6ZHqbSGnnGy9PDiVaka9dtnAUK5asbAbC783rSpR9cmH9uTqg8EpVmcoA7YiybtGoRBE2TSCHPP",
  "key36": "epmt5JWmwKTHyKAYaK9roVCDsN4WjU2nhJDKEFuCfMrcKcD1ACPDwX1LZDYqGFx7wUxePRvLk14GNdQxBAtdest",
  "key37": "3rNGGQdmhF1DJ7Cpk8Pe4AedaCzYfspidwsxiqKRmFGsVmQP8hhZ8Y3CMgHr9A9vzhCnXKnKF74yuR6adtNWgK3L",
  "key38": "2sXvKsz6REBtfJtdUq9CtnAdfBp8Hh43c7mt1ZFnk21cGwpnFBe8PAXQ3JPq3tVtRci7maWENSbtABwwFmxVFt7H",
  "key39": "2H4TniXskyoD7zBhHE3ZH7ERkTN7274d9kRhggfbs4Bdw5xTZzWhruFPgiGBoMUh7BYBWTKsCcbygTDc3dt6VFVu",
  "key40": "4sQivitCJV1Rzzpi5F58mZnaVVkPGrjUdyPHHq4RskHhspUU2dGwxEz3BFBR5L8FGrLRXW3HiSYie8h4PzNxrsWu",
  "key41": "48mg4kiSSN9VDkqQUwGkyv8V3zCFK85eyeS36zYGLzdiyPKNmA2uPervK1z6a5gnvmkNuE79fctojasceiT7HVAP",
  "key42": "cnXE42Bmbv2vVVq7dc48Ak8DAfRwrYiXLfnZfxb9YDWvxEPPsgPoMCY4F2Y5MHGXbzfreehPCssLQW2qvjkV1iw",
  "key43": "X8kmYJUjQGptXRAX41GdEAmSCB94p8x4pvEpUGYUfvyVbm4gTPJ7V5te1ijCZuMTmEzKPNAMEARqhE6EdWKUJGZ",
  "key44": "5RH1YjzPJ8kCN8a546PJENMPNgYpU1YE35vBm8Ffc8dTopBFEFMhZssN45WixFbGvrV9NhPVH5LQcd17VrypBMY5",
  "key45": "4g3gg6ncBuTApenxDeBUJZv2ATyVxB7qJfEnW5kM6SmwfiLQjBdLmKKr7GHoYTxAF1phfGv7aCfJvST7uEg41BbY",
  "key46": "35d19FqC5DGGzcfYpMjtQqDodrfapgvXrboMdTd2HGNaccpHiA6URDh2CTQW3KdtRnHKoizAau1c61QWVzV3Yu35",
  "key47": "5yxoak8q982WVhjT9PTYWviubqc112LHs9iCJER1bkfHXXK97dVoLvAbWMdESxdFUviTeHWJCiQotEQuzsTnTBiA"
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
