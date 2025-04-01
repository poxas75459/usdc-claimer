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
    "3i1CBnXtT2aEdFpeKBxuRx1YxzARXwJf7EMTKidw7rSDCZteoqJdtDDs7HaAWqLgYvykPBeACERxExy6gtoUmSuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPM3fTseQ532iFEkMThJo6edcDofHUPpm4q7XmShLVjA5VSP9xU8aEQHFDP5R5Qf95HriVkchdnDPH1DV8kw1UC",
  "key1": "5y6fHcZX2XHRd8AZtcVfHPjTKHYtDqdP1kdvkqQb5wjpa2WGi1k7MsXE4vaT6UDhXUbqVLGhp1biXmYuAvxmypC9",
  "key2": "1Esot63LDdGnSNfta81zankYz6atSA23n3rgFB6Mu2mEKb2EU2CSjWHLjU4XoBFKZq3jy6qqBvowyDUq3uwokkg",
  "key3": "3mQifqbrTy6Tw93UMTyqNbrLgysvsP2jTuDSiGHA7PqtCHXiz1v3c8V1foybYqRdg6vFvYGA7iaRCbnYxwQ1nbJx",
  "key4": "4fiCvTprB32cyZUT8axgm8qhhrYmixjkP3RkWSFeFEbJw7v9s7kcT1bJ5ocvGNFNt9R7wECdg61xf99DwtMrKiwi",
  "key5": "5YZhxeWjS71jM747J9oXpauDbnkEwytcCT5TxwZK2MebVz7KbEXvkamBBmJYsk7EJuor2gNrmDxRkvMv48GghppZ",
  "key6": "31CSEPHJy31ShcVQMRZ1CRUFnBiVdbm1Kq6gk2WoedS2jijQZ9uhv2ckoLyxAK3NuxfmVTCchocYkLntUz8Y71vg",
  "key7": "8i3QXXF98k4es4WrzQhWqT2MqRpBDMn8wSXnKgDadg75xhQJTBmNnrPfcQiCsmwffEEjpFTsZYu7wh4zpSEpiCQ",
  "key8": "59unBhhKVYbDbBz9nRDC9wxaUSJ9NguLBupgFZ6psaAgd9QhpYqdZEZMEgMeJd1tEBFFuLuUUZ5ET5mdent3QnMT",
  "key9": "F8RUYH8NM3aHeGskmZs1ijndPPevy5af3y3cKGr2xsZbyGXdYh2iLsYNgY47V7Xe1MySVdoK9PAHtjubGmHJeEe",
  "key10": "2A949nV11oYgcawG2hHctLcGLStakhvfPSBkRoNaaFi6oyqTZ5cSsCZ97uVuGnwV1xMvuCaFcW4Ru4ytNLLthsVr",
  "key11": "5L6Mqi7kndBB7ipSRq416brnC7o5BeKT3aX9uqK63w44VHthY3PLQnD8jV3RzTgMfBG4t8tPofJcnexgy2enns8L",
  "key12": "5kVvg8RhF3ddMJtiZPAC8evLAuPekqoj5Dt9GKfbqmjogwd57Kej2qGXDPJKmS9iwdUVb4cFqshwUhWJJ14U4n1i",
  "key13": "3sisczB1XeBagjiSFGEUSwzVWkYERcyF5x9MwmU39v5USP6cJJTZvtUY76AyQF1JLPxFNykaRsZXMGsgVFhkKWCc",
  "key14": "FPga7DPsFNBjiEQDvNDb91Lv1cdVh5kReKk5yLdswxqcmz6pBKREA7YfHXAMwGzqGYpJViHnLLnuLWtXuHxznar",
  "key15": "3LYJXMtChHXdCF7W2NArzw2ia92XDv4GsaBp6XojXdHEfwQmuN6yKkp7EXrvyEohW6gNt8Tbm8zr3VHUyZM2nZNN",
  "key16": "2ZFtWLSRFT6gz625hCFT5D173zytxeEDaHnkvJdmct9Dq2gtCaUQp295ozuyLajEfZ415W5MbECf8TqbrUeAdU4i",
  "key17": "3YPPH5Qu5TVR76ZEhbzqC9kzjLs3mqLKz4zya9rpG7z6QejuGfmtmsgDGENHXG43DRpCjVNhDQn6UvVZwQRRukzu",
  "key18": "32RXtpDvFE4J7WnMKHeWmmfaBqAn6z2QW8DnCoJ4DLMg4yJbD9Q3KWwVjoH5ZnsnSQZhLtvTFwmj6RfqnBCxDpRH",
  "key19": "3GHS2AQt3xp4mbAGUfsasKTy73KeF5dmZx86eVnk1UeLU5JxHqAQFceJU37SPRFpEiDQaRRHxmgGfPKJjCWtY8t1",
  "key20": "tg6rJugAw7iLyKuPTKsVA2xhmwEbfm5ApxjhWBvbfLD4vxw3QBSdkhsgQ8T5TjChCjgXUT6TMKEPPyh77uwFzAx",
  "key21": "2gFVxeSQdewLeajtySe562vxRn2JThXeRwJkkQwWDX2bSPub8USJbmJx1W7t6qsjUzdV7o7XrQJoVs38oigTWPRq",
  "key22": "axpNiL3FWFo3JCUUeiG6UyU3rx6wQnSVUd1HLyH2ufnQ1fnQtRBeDR9jfRaWtWeFTTM2J6zaVo6WKBKwtqLLDvQ",
  "key23": "2GfEyQ2G1zKNhVBCETx32Eqd2TWFCw5zUNfvviz8gTKCKyLsa3rygKigCJzpjMKAs51iJnTKqjoxUnYw6gYezfRT",
  "key24": "2NeiExB66aSrMmtCjJF6RQoZMcnrFdYSjzEUWNJCRU4msydTWvGFE64zNPUkhMxz7MXW6iD7E6BkE53bRcdBBGxZ",
  "key25": "5vSqVWNb9jSgbffeYmJmquDPxAa7BWbSszi9SzdWjYm8vJjfNruSdDwGNyGhzrb74jzLCS4H4FHptPsdJNwThBni",
  "key26": "47sSU7FTfmmrn8ZZEBz11fT2C9fWbQVnUW7o5VLASJXSzb4ZRBsEafMFCKHdzTWNoAsy6KV7vRUZKfib8eAgi2aU",
  "key27": "48GTo1ZN7swJTmfDqvDdRPB2HDp8RrFz5rFtpvmd79BFxETSAUkM58TNQeKwPkAkeaWjsp3Gmr1fGoENB8Yj4Vcc",
  "key28": "3Z1Rs65xEsGPcsoYQq3NaR1QqBmtrZYHntmHvjwGAcqWYur5pyfbVkjGUY279tVMeCfdZ2PiRauWgkLdRt3jZLge",
  "key29": "2ADToPHpV6d6n3ngMSgGYBkcGhBGrNR4zazJbgYPkxEENbJ7GNgVCP4rhKvHNbjMuLaGham9wy24bxPd8CmiuvEe",
  "key30": "uFGY8EDLFhudyMr4fE2VMe1QQ5PPgLmZL133r3MgpEWm6GmXitFVcpBkxEQWitXPYgbo3ZJ3Tfq7FXoUyn8yMUa",
  "key31": "43V1kWEAYQFq2W66rKjdh4BLYiPNn33irCn4N8LwVGp5anqCjsZYin1m4Arneu2UCNPKZMR4RfPQtuLRBZaFX6Es",
  "key32": "4ca4S4YZVbXoL4GwHoe1o98G5FrTuym2BRRXbsLDNEaLzouhYnM88cbBrAGyTvW6pntwyq1SW5ALs67V6fAAwuEq",
  "key33": "E1mLeSZkJizk3tDhYLLtJv6NWrGy44ocyzuWXuK8dszg3DNwerYSyZDnyH4hApUoXwBnu8wPZ8qXcpqSdNf7dn2",
  "key34": "443hxQkuAGKjRwSmicmYX8e1SRTWgShUF2Pm6ADebYxBTiGWcMbqotrAptqLAUsgZwbjsWcEB2xSc8LPQsYhtLqA",
  "key35": "bQSSioA3s5XsxAUxAKDcX4tGKBzYBQ8j7kRg1aDG7UmKCPyAfSZwZxS1xyAbUYijcXcz7PEBysCgDsuoRn8uvBL",
  "key36": "UuoxHqJg3kpPmN1C6RPBWHkpGyNoN6QAYbzgcL88eKfxjFX2rJrtVTQDXfCgzvkj3tHmfCvLysYuWSrAEBdvSaE",
  "key37": "25FLLGyE5SpB2Vg9kJ3RBUhVor8GUN7FiiYm2kjdndQEjTycJyJHEW2ayEnfG3wMGthSZSzPw76g8LQykfEyv7ux",
  "key38": "4FZVauT3qjRhinMu3XUCcvzGBvWbujGmKB9HPZtZXLVTJCNeG5PPDxoCjcZd5pH2HQ9Bgj8i2uEmV2F18PhgkTr9",
  "key39": "5oHQBMuYBPEj6HgLZsVVCW5Q9rh7Mufxtgw1f5B55D4nHZNoMRdb1evqqRP5Vrz7uFcaWXHHZ34tSwkEisYWtXkA",
  "key40": "4cnNtfd3ZL684jm1zxTUgHxTRHg4AM9pmVpReBbPQDZDpXvsmyZAHQG77tcXHWnHXry8vsADLEbUi9err2z1WBs2",
  "key41": "3th191DdnrnTbteZ7EF88H7MJdtMKraaMBdcUnABq4edRjHkL2sAP3ag2LrBkiaz6BFAhnVsvcB3NqdbYegnX3nx",
  "key42": "9SXSc8D5h9kmyDctD97isxAJQuVtGMNwHgqPrfvhfSbbpMuqD9QiuR8PNHgCCSyKGFXMsJskT28sNnLvnUGj5FG"
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
