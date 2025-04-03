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
    "DGHZJhp5vPWc6Qo7MkM27DnNoL2tL6oyweDh9xJ4ycoLo7xJKfRVfqWdTXAW2s2TiWiQfavBtXYCrq66pSH2Fsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLy847HgzXzUSbdcyj6Gwfm1hkqDi7FePvVPXMcqTqENp788SNxhoCF3uYHH8TyQtggpU7QVhGDay6VbqK3SsZP",
  "key1": "2Zr5fGwL3Rr9KXWon6eQpEC6EQF7SRE8AzFEMcbJv6MUmFBQAJV6Axj8Bzzjwp2LP6FahAy2JEunv8yRq1UkKtKg",
  "key2": "4j2QEhbnD9MShThFyQTweXeLEnLAC6oxo25CZnJzmXDNVU1bWFB3oavTwSUiC97hbyATFcTHBunyoSJPdsbPvDKC",
  "key3": "4WNjpxbe11JcvuguLAAJEbkTpPDyFVdAVVNU5ukfBJthVF4gu8NTYqxwbsZCTjhBRiL5WPZ2PjhjgCn3s9fmnwav",
  "key4": "8b6hDBngpqknYfJXrUfEBThc97dsH5BEY52J1MpkdJWrNkdZNYyRvRkNjHYAEHFcpgKs2K8E74Dh7SfQL4jPGCv",
  "key5": "4PsdwHvUzBQpPnuoqPhE8GuHHNfmKtXpVavLwwcL1y66LXyiMdzGcGX1PTWWY2Z521YAybDuiYGEmcnqqgNbrgne",
  "key6": "54Y8t1m2rKqynjTUPqM3pu6WnKg1UGgVi5MSTAEpXwGeztNPgNR8PTdLK8h3n2TpcD54fh2PShtUV6b1nACmiPK2",
  "key7": "dfqVnwRaQapQpcovVDmnfaqdaswmrKFjQUSHMpA9zLnCCXT5ekt3sgivbD4SwunU6nnbizMSuzhqnPxeA5kuxy4",
  "key8": "2A56Vz9PYSvnUha9MAa8yDeUBXnLRmibBeTk1dvjHJMbcsv7DckLYMiXKm2Z6k5PmerCojpx6e7oobzUY4YmrrPs",
  "key9": "2V8J86fri1CtHBXauA3S7xhsArhFdzVFJSbD7AiWiDutCyoJyXDvx1tQgicKCWKKFmxShGdLxVWEJSCTNJYF7y7E",
  "key10": "4tofe5uxBCxdLkQypJSFGztrSQ7RuTbGyGL1RBF1ysWe2h5gPqPT1yQmcA52cP8NyQ1xecpVEWMjJfX7ZyVVLJJE",
  "key11": "NtAJUMnDxSufhEo8EAnLekm5DC1eK9ZyiJe6rPnjFChpEw5vtkCcEw5LSKMCegDTGrr3Ds6PBKb9aYtrRSfqALW",
  "key12": "37GznJYho6nLbZnyEe4zyGCAtkGBq1wVXMJWezYK6dQGVXvcijzKreL1mb5Z9WUouYssEdHmbFRcChBBVUsdNu4d",
  "key13": "3nDcnLsAxjJxXV7WJWgcP6NgKMEay3Ghnf4fSePoLSb7WW9JygQsbYZwiGc8CSjhogBDQbdMV32DZGemjbrCynqm",
  "key14": "4ABzZkJ13ouqRBHXgPWUPU7vFm15oiViv8zFkhcVurC3CkMb5ZgsVRmg7bnaTvgvDWmuZuwjQ1J7qwcEDwfD6ju3",
  "key15": "4pk5KW8AT4M1xvZ1CFJTasXbPXTW4m83YpqiefqoSQNW3hHw9MzLiwRB4wgfUA89grsHuTDhNzzLZiUpPRzUzVmk",
  "key16": "215vERymTJ89owifUWeDrY1PXd71LvpKBHcbs2TY5CPokXenzSiQxspVG2wgHg6CMfvjrZT1Vobw1PYjcUJDkoKf",
  "key17": "7ejBR6ZCjTgR7hoRZ4q9pbgEwWkABQDF2Y6rnJ9ajkpib7RzfKYccdHK7CyxShxLn5sLVNit4J1bX5QPAs6UfrQ",
  "key18": "3f46jAymdX3baw854AtkDq38YRrmHFz5NBwfrY41hdZAuaNHgzZjvekz7i6szwZP61HtoNQ8e8GA124A5WAjmbXt",
  "key19": "tLttAgD2YR6VtipCQ3urDL7DrDsnay2FnJPeMftzDC92WprC2FVe3Cx9vZWqGdYG4HCvJLYz2LzMXUng7F1xpqi",
  "key20": "gQBDXZX1b4CT71myeSViWvRDtxmecqhiL1pW1p5Gt6RSquabufRDdiFNYgAPELpj4CAWn3Z4B8wRzeHK1iTAPfR",
  "key21": "2QSMjDmJ9LEZDFXAYqDDjFgTcK4eFMe7NTKAvj5SvyFbGTEv5gxPjHqAV6RNuPMNLBUZd2Jn7NR8wEKp1wpdy4A6",
  "key22": "EjD2osmvCAzr7DgoxcnoTkFNfi5dxvbm87y9hq8CiVWvEaBRoQKUbQ4ao7pL48i2oDb15Syc9PYXvEyDzRXrGYb",
  "key23": "5rkw5N4F2EBaoBQsPTBJpjZz3ZtD27ned5zQ5cSvwTSfBsn9AYYrQudLXC9uUoEAdK3svw2faCZbox4SHs2Cp5rK",
  "key24": "43rY8bJoXhfXqt3eEXbHBeCu7GwgbYwDvA4JfCsLzbddRYCjSkQJvhqnbxoFDGrEnC6g8nEQ5bhCsH7SfaUp7VDv",
  "key25": "PveNofQCs23oj6yNvvdiXu7XQx61iGQPoEgqQ9aFcSF3Qx6oXpxJoDPCpwwpVdMB8kEQtxchGXPidLLBHXTDCAC",
  "key26": "4hDCufxJ9ViQe8pes6YSV9b6Z7HMBpE6XfV8UYgFBAJ7pL7Tshsr9An7sDEJetesUqmfLzstXvMrwobQB5GwvTNV",
  "key27": "2AdtixmDreAzNoUFmSrALryi3VEZx3jedLHRq5xZqSWVUuRjfSFCCUKA3ebHSkEXfb4BnfMnimz9SfvV4QGscrQ4",
  "key28": "24a1W3tniGmsA61r3cH831xEcfuKpevdBrRGcksnuurrtN9Ftzh2wGBt9rMaoFdEhrF94ppH6g1hUuYY1bvZ45BL",
  "key29": "4emvz4KTvMA8jzDKpcEriNw24BZfBqAtJpoC1KAPn4eWDP3wxdhfsz2Qtji8GQeQaBsxyMji5Xbw37JKwQhmTwbF",
  "key30": "3uZsAxj5k5xEyNLuZ5GeVAJZPvwVZx6CKRtxXAbsf5nVtAF5Hy6dnmCNbWrNqWWMQ277833H8SZRbWQwpsGjHgwS",
  "key31": "5kKSutB7eFYre8V21EhetnoNVhhrAAp4CnBSZakK8Rgn6MXpkKsfQF3js4Vp3eU6qwibXLtPE2Cmus9Lx4pu3mYF",
  "key32": "5Gmhv6cAB6XVPmR7yxHfaVLwmE9Bp61pbYt1rK9xwf7VjMtSth9qR5mgK45q7CqDWeJBKsSVwVycqKaYbVoHpiNd",
  "key33": "5ibjBSDmBtydsBg71kmbpMfBNdnfAr4dGRB64QpJbX7B6o2uEpzSeid1gSVwexiwgCZ886cBynJXdnvYZXe3tGdD",
  "key34": "3MSR37hYsqK1vhijnFDYd1P7RPY1FAjBvtrVUUVHDec72M9q5dymW9sq5X37sxHKbaWV4NL55GULxFR4M3WdFjih",
  "key35": "pFK7pMVMCmXWUKXT9nUWvA9C58J6iAicff6z1pNdZ3VDThXB3G2Ny8yQzf4GkXdLLT3gxrSS1BakMUx6S8rRdmQ",
  "key36": "2dD9AqJsFEs8o14k2hUXuadjVSst8oiYHoNEefFXNCnyo5wqXhv2CGr8v7PH7jZUohGfXojcnvEwmQujTyLvKK1V",
  "key37": "24aexoC2fo2WT9RZ7VNtirhY9NL8F2r476r5AEDcZKgrNn3F7hL9jmEpMegneSR7LJWJ6BPkgkSYoLMkqAEd2VLz",
  "key38": "2KzbB2eNGZzqdGufmbCVyLKkcZd6SLq84mgo8EQ9KcWzVcxnrMd6qc9zNrTqcM2BEf3E9RkHme8PRxMm5bNEHx9v",
  "key39": "5v4ZKReC5AfJtwRqWoUzYBMBSZoq8DFnwRLwgxK6W6tJA3uzXifKBYGXr3wk7KUqnHdXX45XJyzBycpmn9YGmbJP",
  "key40": "27R5a6g6QwVsHSbZg1JbSTZtcTyr6GF1SVwFd6k7LkPBx89Z8HphtkjBuWGyHvgKgZHKoESUjUYAHauCja8ChKBS",
  "key41": "5FS5tBUVwhmvVnvuWMrg9t28nezxQKHzUF79HcjcUkQ718w3BXNQPJnTu6Ga5zjS91SNooFF8HAuAaHZbZ1Kt4FL",
  "key42": "63vMs8eDGUupJEWaYWWf9Pe2uPVS6TZdLff2TYXCG89sa7MzFUMcS1zimt7UneKNRD3ya7jn4v5Fkj6AkD92Kxb8",
  "key43": "5zP8ZJcnyYZn93pDfizZhi4qXejaccBqVWjPRhRFu4KrusRnb3r3HefDkPwDC8QMkNRZC7aXDSjwbzRH3JH2nzdx",
  "key44": "3ractLVaYyLbipY3z2WB4jvZZTXaXiNJ8szrgqRT3r9L8ptEDUyhTEVqUfyhrXUywiDfpM1MXhVtMsvMUEy5rj9j",
  "key45": "2mmDE51upWyB1q6jbFNCfo9QsLdAAWsoffiybi1KXarwtp9xDsoHJ9qBY6YbTArQ53L6ozJoBYTnwziiwwrDAH2N",
  "key46": "47Hmm9mqDMytr8zDjYb3gdXYAR16uMwGCCYmYZ5oT9jdhUztPMm6XsBC3RxveypTJUQNvNWAGenfxAhjJ6uapAKC",
  "key47": "NgdgtLo1orUG3Hia19KRBB1fHR4CTuRyKUHLAzfADMzFbsnArGmbK6kgmQvXDZZf6z9YoDWTucYWzbDkJBC7NqB",
  "key48": "52f7WFCBgTudrfncJ5p6dS27Bvq5X7RdySvddYkm1YLfDh31SSuM76X5ckE1KKpHE3kDaAfLbBT78haMdmth8zeu"
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
