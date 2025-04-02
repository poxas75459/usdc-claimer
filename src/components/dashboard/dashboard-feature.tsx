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
    "3a81xvNqpYrLfoPcCs9rp5h5LLhbXTpAuVUU1avbeHQECNvwBZMeVik1RZR8GSTQ2WmcbwMXSqRWweremwNLfsTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAMad7XLSzCMYrR2eMX2DrR4UuEs1A3oNCwN6ePLhFy3PFu36AHJ6n5B51a5dhnih7vKhibMXkpYBtMNhqfi3Ej",
  "key1": "ov7pcXpEo3GhtscmgB1WpherGsshk9Z5N4JX9Ad7K1HdYmLAyV1WDbMapt1c1P8CeSvz17vD9JyXqnRfc1cpDtN",
  "key2": "fTuWyHCJDhVG1pYmoarYKwj8sAWtoBLsKwKZAqvCscW6TH6NSGNeuQ1YoAfS7Xba12U4bWKyWstYtDwxRdMYRPY",
  "key3": "6Y4bVMhq4Zuqexq4CqpX42dAXAtG2JCzizkA8dksNH8d25K59gxrAvRwPWLEhEj1Bhsr4LCVRXFwXTKAVv8CoKW",
  "key4": "49r55cShQpLTnGm4m6rmJPnaVHoWviwfkrXYJsyZjdx1Qjd1N6WUJPe992iRZUzsteetrXUiZ13Ed9gkCjeC8hFZ",
  "key5": "3Gix7phTgSkZ5EHBYvFWfmxRi4LBJDzWqmKRNa2JfMcBkLRZTAyXa52QMDCLNfuYDDaCQVtDjC77VLLoCqN3wfge",
  "key6": "tgQHkbnYsERQ1TJudtA4Wefz1bYqisfVbesfLyzZnEwDwxRMWwUxRc1yg9CCnyHshhZCVQWNhA92Md3GS4E6daR",
  "key7": "D82BwsNbobY2shexVDAiThRzw37khKzorhWtHS7eJYVJRHycMV5QxTWc9FMdBc1nDr2iunYLLDDqmVmXywZwxQv",
  "key8": "4qGYTvySPT6PJ1gN8Gxs7EygDXRr8z9S54KV6DRJKhVJeJDgkPfzBn4F1X68pAnBAbd4d2xqoQxvQo6QJax5GFFQ",
  "key9": "3v6oCBQDVWUqTeBZNC8nHhpxYNHfAWYjayAbjvLhCCtYGsJj6doXrrCfKhABTRVYhoxVHA73T79TMYwyJZ76brJH",
  "key10": "sC2yzB9riapA1vx8NuhczeE7sZ7rzKy17FzYVixfVQuQXi647Z8v6AMEf11pUgaiLUGtpJbdK9Kkzwges2EUx87",
  "key11": "Ez8j1Xwjq1rMsZBqSBvUdsWogreyN2JW9Ay6YscBMh8kFwSwRuq8f7fXqd6ggda3QZEKWDid8b2hDTCjc5oEdom",
  "key12": "S2SR8CqK16KZtMF22T2Lv1wMYRgoRkEkqMRfGQthixvK3T6ZPz5whJSwbzconmbyYGQtCi4cAuEjjsbNRnY4bte",
  "key13": "34AtDLFruHroBddrpVUWSKsS53ZfiqQyw5C8ryXvrpwdYDeBUMaxNFDFFArd4hh7TUCpvdKiTC6U99jsHkHttyU8",
  "key14": "a2ShsFnv13QRidWhZ8i4SojANe3hK2EeCoSqPWioxsHspfyo16uGkxh8idiAiBHjVAxfuGNvnxXzukEsWJgx3Zu",
  "key15": "5MxnRBNaTPWjQ843riPhy9vmLyAZW5qRVWfZTL66VAxDbUu2fbSwHWV3Ttj1iYmdqy2mjzbpFVd3URHJFNheZcwj",
  "key16": "2DDeudqfRJvJckG16m76NgrZz2Au1k4BBYJS9osPbwJQsmFRS6mpshqqqUgVKgFTDiiyKZtZa7NS4HFYbFtGk3Uo",
  "key17": "B7eugCS4sKaJU1AuPGh1vTKp7vpXdt47qnWUy4br9L9VQHHCF5obLyqWU6YvGBwxTD4gZWSNsvxEEMUFJ7JZKEc",
  "key18": "4yzDZ8pwbNjczL8WQQLD1ND9JKsdVKmQgBuLVGLTkzBf51rgNA7w8B465vBMbpLVwbJbLo5oThuDFJfGrBmuCqtw",
  "key19": "21FHS2DCg1bLoLmy3hUdu1RyEVvM9HN9ETFV3fqvjQ6SZ2jZK3NNkV254iYidkD5bwACyPYiYdVSjiWCmzFpkajx",
  "key20": "4hMQWxrutyy2gd6zZHJwYuwTpwQK8kne1DLXQmUBuaJSuBkxY9hbUpmdPXFvAu8NXQmbdQm7zY74cZoAXPvmiEYf",
  "key21": "5CaPsBzAn8sMzwB3w5Bjid5q5poZNSS4TWCSWvhfeJyu544cBEFdtYbnRqAASpFXamxZcuJozqK5osRnGC4M4aDa",
  "key22": "348iq1VZBfaTJQm46P7QThscGdwaha4gnpUEmsteganukQusfaeHfeZn8trRkkEpDd47e6jXfSFmB6nZZgF6E37y",
  "key23": "4KP5p7oeEUgJKcRBvk1kWCQ8hmxyYDoYQct2CPwagG6gydj8rP31mSEqoRFhvnUhcTosRVrahehNpN3KbzrRXaU7",
  "key24": "45ibqJJ63wykbTpAQkJrqWwZkFvjD3mtaUU52resC1LkEkdeVBEencw1jmwkhXVPppam44fEEde4M4QU3tJzibto",
  "key25": "C22u7kvYtTihqa5BdcfHfeobUaNhpr5U1wvFniPf2tUKgad32nyUPh63S4wmWA9RX4VmFfWkYHZ3PVgKCpnwoJh",
  "key26": "3LpbJNZQtJXHoUYaSXVtkgymM7wYbWXBFTi39AjZ51F5yncy3YVQPfFaFNarbmGJz3LgHi8nvExBrNztfFBwYn5B",
  "key27": "4eGutwSd1MoUhLPDFu9v5v6JgE1HoqerREHYfWTAuSRdnGZSHhLFdGeNJ5SPMSgXM8h4NfPSc9dZ7s1fREXhQeky",
  "key28": "38YaNWq9bJXpUra996rJooGQFrFrdQUAyQGuKMgjN6GS1JdCd7ZcLEya6R8itSJrnNg4mb47L6yHUjR1KF2giS2y",
  "key29": "5MRrh6S1n6YQYqu9z9RWuJKWPqEaPqrraCDUvoYZdwsqZ4ahK82QWciKbkPV7ifjDEonsaNnksfRW2V2vjjNqTjV",
  "key30": "FPMerzRuzBV5WXeCrddqXuLbRNrboPFs55kURqdBEVEpTMcZ1Mp2WJEpcDC6tJ7Xs5KCVYAEkK1ULKzH3f9Zh8n",
  "key31": "5GTr3R5tnVZRK3k6pM84EaQ6FN7YkPe4CZ8tjykHrJ1Y1SbAtKhTy1ZH3EN3ksDWqcPDHXeXHM1JXgdkt7UZ4g7E",
  "key32": "4BzpTARC2g58NaLEN1AHw5xL64oenGNunfrb2BDQGgm5nxe5kkX5vaVNAsbc6r1btdbnUTxAob4wJbHJUNoSmvqe",
  "key33": "2fpuLQaw4QHWfF1BpBgFw83mgNE1TCKSJipbh1MEfULwNobcAZDwUD8UvZ6dMi97LnY4C3vRaLsVUuXHL6dxjq5e",
  "key34": "2mgB2RCD8mHmbR6fkvmjoHcrDnnJc7sdRE2Tu2rik2wcvf5dZKeErzEZRJxgWMDn6NwTkmzkjVg6P79sybrW4CDX",
  "key35": "65UjVxMbs3589FLSUfbks1vazYpPeEak8nsfpjGqJXMmNw2x9XS34gJkxSwbbTfiXXFQkB2WNwtyFHBP1RWDRSRN",
  "key36": "SbNF9GcHo6LLnHqeZN3ME8JjC8hg35GqK4FdyGSWohvZdzmt4fkubEREXmxQsBVNJECX28sTDVmrwtTxi2DSxov",
  "key37": "2bWZLXsA7WkM2RJwuXDoS6dYD4ufoiW4RBjUFE8qzKNUdAT5veFTKptQRr6wmTAi4u3ewTuvVUppopATmq2Wp445",
  "key38": "3axGyHJghjD3GXsrFK6hF1wFvTCU2eUeUKuDNTdfvJVyrmmxvG3D38tozvpmv1ZjPtpAka6QyYF9vpAR9MtTG79F",
  "key39": "st4ydv5oSLfqULkFHPdi915ujc54k1UiW9wvvPVrkY9twTXDrL73cJqwf5ReNaKLTFEYFMowZ8Gda91GmRbjpjS",
  "key40": "uZFZCd5HnMzNtgsRQzqSZty8BBYC4Tq9ms6AApTTmuXvhzbPAUjroDSCwL6gAwjbA5swAzHX5xXccYrgpSkjSLm"
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
