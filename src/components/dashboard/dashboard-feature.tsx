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
    "4bnKXratPrFtfxmFQpUTURZa5y8Vj2oFRkJKSm5XTFZWABtqNSnVmbYRL4aMeYPDhwvghno15Mi4sbeLqNh8VFkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279ssAtrMNgq3QXaFdgLh7SQarvNUMMwphCLzaq3GBtfB3nAt6YH3KBPcWtTU3ypXy2aFRCfquFFPcUVvW8Tyb43",
  "key1": "5MCKHNq4GSctsgpPHxLZZVuVYMXzQbbHQfHccEed5XXgSikYqtdu5xUVvGboS9XYoEq3j7Vi5mnZsfST2M5D3kM6",
  "key2": "3eTCwiMnNwwdRgtQgyz2LsYwKbMpHaCADjJWMtBtmV3xZPUjA13EPM8ViH7XzeSdnqNanSaEJgVC3HZoA7JxGnpd",
  "key3": "13LhtAz1ozCdaaXuFV2WmGgjjn34fPYLhTE1LJbLVtUPhAnhvxoREeHnDNbgcxjFL1XTpTbTCBFcYRaYJfjcck9",
  "key4": "27Esc9xiV2qkiWscbvRc735nCwpBwPmttJnqPtkSdKvApCDAR8ZyRZFdEVpYUPuRbaX6dQU3T5FokzxdRoBugxdw",
  "key5": "3uPFScNNpP5DfD2qaBwUwsuySxjP2KtepTBRhxr1KenrzxvH1QpxNoE8UBmVKSb44iQhwMSnsifKuf9VBqXPJ2Bh",
  "key6": "Tr6ut2PnUz3uTAmGVVEj8dLuvUD37ffcbJqaaFdDXzcjv32ZrSvYvpkd792abh1an7A7eep8EDPkAS2vNUxbLs4",
  "key7": "5dshsxFEQm9cQYsKKyzcg7vsQpPuBwbSFxqnrcZBTCZjReppNRcutMVNZJgPjh7tvifXSajnWWYF76BQYvWxZWu1",
  "key8": "4sXiMZy5UhSFu25R94gvqkm66khd5FiPxinvMoQoB3M1aeRRn5JccB1b4LABiDNvazm93FRaw4WhXFNMuWLxn4rN",
  "key9": "32fDq29D77dAALEjdEdBV5gMRXeAs77ED9SRZSB16JyQh9g7nHVD4oNCCANcm5vMHNoNTQuwfL67i6oLzEsXARjP",
  "key10": "3QwHAcwFUcHNh8zDRK4gecLYtoGhKipVXAg39CqhXCgGRHJF1VvvhLwTaiFvdteNpMsMmFyr23hvav5v3jpxa4oP",
  "key11": "3BWVHJ2BTQtNfHZicfoa1GdWjPHmpgoqPWbtd76gF2t573DfWhWA4LXjaAX2ZR6HoiQuruYEfftensA56oMef6UF",
  "key12": "42MkFjAFoZv8gW8dJ2137fzPQuv98VBWCSovWCMQnCxRTRNoCfbxjMsZJEE8m4hMQCEhaD118F42N2r9SkF4fErD",
  "key13": "3qiYnSoV8J8HXm1fMpZAq6ywu4hVUe6zKvkSMy3W3HsiLxgsAJYHqhVH7BDD7qJ92XmYZbPJVGwrxqVURzLFKSHE",
  "key14": "27kn8c3HbSLtkXjjW3eJFYtqwonBEkFS3ToXQPcFDAT5gqEzqpycfYy4uvrbPZ9QrKVS5fTF6eZGkKmjbs2eLm32",
  "key15": "2cq5Whr7EG4C368CVnBhxMgbqQ4ASR8gcNfhg5tp3htfCFxgmbj2VREKQewGVYSFdzApNmgQTggvRHFct6E8kL5k",
  "key16": "3xAxu4xF2AG7qXhEM3Soqr5uKekLjbnGgCpF2LF8AN65Ax5XeiZ8Veh7e4oEZq7A5XZF4kR2iABvFD3qJCR7yH4c",
  "key17": "4DixfftPsRp12q8ysVbsj9hnpdaoG4L4vPRacosZkdGLoAoBmQUaizD1qgqVtvtpbR32njSvneCeLfifEY3KRPFE",
  "key18": "2dUnLygwdtio7Rvb3zy6U3jC58kRF6DtRhUDoMcsPjUpSDqezsQXEmykCquPHA3y4RnFLqBkceqtfVFThpoaVyh2",
  "key19": "RXCL5ZWF2h8GpgPi5VSEDnB6hiu62zvNYDtzkiBA9txZ4YrkR3rJbhRMApahrZMgswn1U22Uo2rvRuAyfseVM2o",
  "key20": "4yMgGkMUgDrHdfyCTTim77P4LGNJYzVKfcz2AztfHe3mq8vkhDsbGtLDcihe6L5Rk7MNcBagb7Tcxbnb6hLPof1z",
  "key21": "nsnzTPh1mGdsx6Daafsxdx93FYSmQWaUUwqKhkh1wpu7qTMF4wRdbgUJJqeWo9gPX1Yv55MkRGCt3Cu6FzAXwqa",
  "key22": "35fJfrP8qoSFpd4MxG2sGJFyZ2SgFR9hd7aU34Fq4J9us6YZD3hwDzPYW3xUxawohy3dteqWLYi5VTfGPS7qrKpR",
  "key23": "5ZJsSid1JMJqGrAbQvRCBQp3MBLk42vrDKmEabEeAYLWVzbayBV1KnztAXLzuw12Xa8UVua4XMWrfmGNDJeQZKeQ",
  "key24": "4WhBBmXGSaxt5euTcVHig6iU8itCEb1m3BEag13dJmVKc95vJJZxRuSPLMq3igzkDqEbvkm3Mb4YCofhLzASjfYv",
  "key25": "2h4sHvcoGMM7Z1YRAaynnHaB8X4BTMpqgwppcBgnhv52MjqcyDADhVPFF6uH4BoXYUbPdH93BrGF1P4fFaLJNyfr",
  "key26": "4b1uvLc3fE4tkVtLsSRbiz9LUPi9n3ZcSqPfNe4XTnYRdvML45Duytvoukhm7PsMhpQzn1P6PmDgnt7fKArTVdKS",
  "key27": "4eHvSjV31X8sjwfd8M2zZHWvS23vFYJLgS5HA97UieQCY96jDe7BBMHfWT2JtwkUxenWwYyd3qVrAxygZkeKBCH4",
  "key28": "4viQViy5gfbL3Wv8wupqR33yYFTZaMiEjyTaMaKnrYer8JkFGbYZng5sD1Evp136EREfFQpWrqtawZMJtDKYc3C6",
  "key29": "3QMpQfEGhP89zQz8fXXLGvYTGiCmHNXZVVejyZcCq5TK7UPwapZrYYUpFQY47J6oD8Tgyqwt4nWo2Kcxe8wuabzH",
  "key30": "5E4ky31rcTusujL5tVY5wU9TGM7xcZPZQRReKm8kubb2uopBNYaKkV8kq4aUuRAtgS4bQmwswXMizZrWSqiX7C2X",
  "key31": "9AihGkGFPymYHineq4czLru2HL7hYvcTEPHiZwtqoMBPUaeTkw6NFnPqPoWpads1JK95D1Wse4js4kc1gkhydXX",
  "key32": "Xtyh3ryjLxYRkhnAnq1mowRwhdrJs7Hvcon1fjdkwFRRRZUPnGgBLRqLipjwJvhDTEzVgmL36F5DdDkaQKV3bZS",
  "key33": "2Mfv5CwLMChnPhRb3uZBSRmwMFFY6scscR94ybKB93eMokoxcseXC3rSLrSh2WiFqByvgp4kHh68Wv7tNaVNgtqe",
  "key34": "5H7ee4Jhe2mBXfF7zCb7te6bM7oTM7v2EiferCDStjvdMZZ6Y4kRBUUUaJax38r5oJ4KhqDmKU1SYM85eX9SHuJs",
  "key35": "5yQumjFYawRQnvL61LeNUveAi2yJQmv8qqYNB8UakXoLSmtdzpeBg9uDrvkx2NNPkayBxDKAbu2zRYmALBHczZxD",
  "key36": "3UYJm15kPp6E36YrwXBkiyNkCUSshbCtDwF2KLU8D8JVgefBsSHmXmFeyDkuc5gFYdiXGdLdJkJFUtHiWGSuzann",
  "key37": "3Ac6Z7HQr3BdFFyi7Jx6i6setBEMbLbSmtEsRsUUQCBjYwcmy2Vy9q1EVWqeqhj55KsxmTnfmMKg3AjH9Hb2MhF6",
  "key38": "KJU11DnxUe3oYjpZna8sGgy791BVZaJJxxKfsoD6PpJpCyQTyeqMxRqwUq5MjJRid2GsT2xo6M81kihabgFumxi",
  "key39": "55jiTrYKnbXU5Fd6tnUh61Sczoq5H7TT28dGGevpxJs59NRJmj9AQJgL13BKKRHNeHfmUDPmMiCBqg1AY9JwtrcP",
  "key40": "3bUgXcqRW9SCEDZZpeA859BMzJdnYbfXY15ycP5Zrhq9KRABj1VHYrYcyr6i8rrHtEcm8outfmwoQbiZsWVTVCvc",
  "key41": "5FjpQFCNJkMjPwCruWs9vX6RpFuWrqKkQXGPr8fZSu393TEhUHG1p3zpJW2Zy6dwu4MUJ2P4tZacowPLq91pgDRd",
  "key42": "2tUG2h3XbHnhzpJxH6QLuLdRJLFNBgs3U1idoG48jeLH2LPD8h7RACWDPWee8Qt1FZhDK3QXfxFGEFGx2uDbWMYs",
  "key43": "RVWJHL7UFcVjeiw3P5vpQwDZ9YWfDApHafHiCzogd57qY3AiGmMeGj4YmTioihf8mUWgexYvohnoaZxJUXxPSLt",
  "key44": "4uTkdKkrVbqPTeryGaR2eWD16uEFHrasJiqTo5NWPUaYbnoHEnr41HUZQjSW3xpGGSgTvkrRs6nihxHzYo9gnxaM",
  "key45": "4ZQDW9C1mKuzjt8XJomUnmWiN4Nzcb9bT7VdfLCoqhKdsMkUAmhark4jqZWzRA5hhxuTfsRhd4Fc5QdK8QSqLkiB",
  "key46": "3RVKtT1V9otdWawvHzagBjF4UxqbVgNY76ZmKneK8EyXDHAsKtP7XemKvgtfGBuhSntLh3o3bMnEvjUQXE7q4Ty7"
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
