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
    "4K8t4YCXgrNTyaVN1u6mj7pFiEENV5DxchGPatfgUQQiwYFGQGLATM5NtpjsdW74FGaH5DfLgDstBZc9bR2iqFLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ak211xSA8Ax5hRwJQrh6u9zrGZbL2Gx6aoRSDgmoRJgnyBVdCFCNQuuRkpns8qk3VKcmefpYtEP33zHRXAbvNYM",
  "key1": "4ngvK3z7P68JyifE9kreJJ9HvyGFHUToVLeks2pzQM5E1ZupfnVUq9rEeLStzszjUTEfC6ivQHXxmPJ5rrCSrBud",
  "key2": "3qMaw2gSSt89K4s6SNiRHb8cCjWo5ERc1fYUK9rE41veD4533NUTofdhN7pNuztdLk1rHu4yk6LFdHYM1HQ6rU5",
  "key3": "4Bkq6EmHenGLGJqLbA3V9zgskNtywpxmMbkCvqNoezpBvYPszXz7TAzsUjp4PbZxpLrhmJxmDecZimnR43DU3Vde",
  "key4": "5WYmxG9Wk9RgqY1hnx6nFYqdaRHbfeyDPTjhnpxzQW71ZdKcAvepLPm9Uezkmy5HFvXsrKGE1S9WwtJLixNA4pmX",
  "key5": "yFJy9RY8ENZYqW8EDKdFZbnkFBhhesXpUn5P5yy9qLdfuP9baKahi37yrmnimZ1pvF7G38zV2ErvozR9BAF1k26",
  "key6": "4hcN2ZR1WJpWG1UPfEvc8TUTzHQCDxdSpBekrH1wuYu9i3dDqU8bfuSMpXyrDKqBXNmQEtZiPNsMgTYTMyGqY4GE",
  "key7": "3qQxksSprd1Zwpwji7ELJLnHsHZpVTuNFydPQWH4SodR44Wo87RsrAWJBgzD1CeoaXAVPKyAUsHXcQYsPxE7kD1X",
  "key8": "5CPNS9ZTiZu4tcy73r9pHcEHdHTyXiBY8czcWAFEoqqjWv7Tv5mCijX9Sj9jXpuVTwzaNmX8FmwHHH2DmQQEkd5Q",
  "key9": "X7BCQbrJbKhpPK3DWXXgofPYZNSTvB9Jw7C1mV1aJYLDaBdhfjEwNPQg1otAMf6tfsNij8EuHofxuBpH19zV9ci",
  "key10": "3o2i1HY5VLufhJYv6D1RbKsP6BZDnJW7YYQy2GRUjfXao75YjWyssckxGnWxoK9Q3Y5j8vYLr8gAqzyU5AP7aQXP",
  "key11": "fGVhoF86Dwq2C7DugrH7YVhXmKRuDiGk1uGpmauaGNn64kiQ6EM55QF2BiihvYHxPShkMDCotuvrdAV255CAh25",
  "key12": "3HDTgWgMyzRYpaVZ8rFaPZf48JhiyMY8ynNKksjDd1b7dCU5XjJz9EJhBd4BwVRj9X5L7zzVVgKL5GUNyH7TQ8ku",
  "key13": "2wGyVBjT3mKLy2AVMHeuwSrupUnfDncSVY8EA8UYzUqD3YHZFqkaa9WoVmretSBMCpfpmjbtP2AxL9DruyGrFjHv",
  "key14": "8aZxkAgTXqSUYPBRBg8bxZ3WZCrXdL5kGRU2bNqFoDG2KCSBnktMmGTtzM1duKz6GuG2WptVdakRaJfMWbPp7Mm",
  "key15": "4qzjiu5mw33qf5QhGLtSGRAW8rvQBwzV7zGTBXwfDHJA3yo8u5PYQTvtS7BCiv9YexMSouKKumSHvA6hCjYwNqQ2",
  "key16": "4q9oo7pY7btwiHVevr9TLP9u5uhY1S5emUn5rpp1eA6Y7BBfrTNeAxkTedYPKQjmgtCcupt14CvCRnAJBTQYVwy7",
  "key17": "347JQ68gri9QbUHZUx3Ai8CDafQThdB7ah12Q2e6TqJjMZ52H4XJcCWdSugzVKcqzsaz26MQ5Nd1Rfh5qpCrgdGn",
  "key18": "VHHE5zq1rJ9ezX2V39VdQNHghGk9kibGeL3Bm5eKXnTqwr75kdNbRaUECQ9iQHYCAK9JMprPcdasXHoAQYBHD22",
  "key19": "2Pbh8LFHUNmwGD2vp51ogru1MiAZZ977eBHPdR4uzTcteavGRak3z4B13jPMYTD5Lkw9ser6WaA7995WabDe7hhk",
  "key20": "3yU8Y9V1EBz2CgHQ6xH4Z253hrKGz1vd6YNwqqqmXb5gu7UfUdS1gCMJtNhzuTtFPGMbxHcWngiXkTbiniY9yMin",
  "key21": "1dFE7oNBL1JefSsqFCcVhCvSWG9Sw1uNt3A7zm7YvK33tNf9ZPiRGcSpupxFjQhQX3bpmroeeXZZ58jM1q3g4zS",
  "key22": "58fGDGxueY7FuBzNxR7RB493i6RDTV93ZDSSdmFf91FDLKRUdSc8Vi2E66noQNTK92hkaY1MQi5sgZ8zkEWu8TTt",
  "key23": "25waWke79avSTEkmbbKwK9haWN4P3mo5U55Pw15DMfeoj1ggTq8ixbQ6j1ekPppRQ6HV9vGAcryFt3ytpe2gHNJR",
  "key24": "5eSgeeX9T9W1FxYWXVzDao25HL5vGazvqypSSDTGY2A6deNxXnt7ricCWxujfrJKuiz4DDsnU1Mx3yVXwG4twN4p",
  "key25": "2Z5vw345k6PB9RS1f1ewPUcdRDVt8QAr5D5EP215QjFG67BFz571wq2jDCL1BWu1ohbuJDSJvftp3tBaL4t7VeWQ",
  "key26": "3XX4CnsMJ96qQ5u8pQW7oQ9NZFvBVjdGqjPuhWyJJzW97KMkeymgEAP7vsWmwG88K1VhEU3AZb1R45cK8GyGdQ4r",
  "key27": "67Fit6EHaPNmDGsNwhex6TEcG84QEJB73KYorn4pLBiTQLr1231TuuuH5ToEL1U9zuidFxsTq9GZmyonyec4RVtU",
  "key28": "4KgS2jsa2LkKpnDpcyPCHF3fRaThTFfLNDrUimPXzAumixtwNeHqF6BdoBR9xnT4VHhs8yuDEKcGiGP7F59YQy8J",
  "key29": "3ztf1Fp7r1J3EQLxSjP9kwXCHvKBE666d92667wzSRXVEdbQgWyAc7cVhVaS6RtDxHXEfG386eK5djzfcfxKjZaU",
  "key30": "4RvF3JkVvvLsF5cBLQ7D6eRrbzGoPvxfat8dN7xqgu3r2AW914Mu5fBPSmzcFXEgsu5z8vcckopMvy5kw98sWseo",
  "key31": "2JJQZbA9XjKkfSchMAHkkUxoPPvfCJ4wEKoyoux27X1foFP1Pqggtby28xdbTMB3v7q4PZQd2updBFYUeVrWuzV1",
  "key32": "5AsSui1fGSMH3sqwPLEAdMAyfJoRgdKfBbibLurJ86nJmDo7R192sfUGPSXnqiZaQwTfoumHY3fR3ETKz7VEz5D2",
  "key33": "4iC724HFfzKg85hKEHhX2eEX5obTyuMrQcNZxifb1Qu2p7ZUstPKLps8SqdLf7vWU1VJfnDAsgnjxHrfKSMbvV7V",
  "key34": "2Lj5mzJAGYhFT4A11G2yq5QBHH1gXTNLxxXGfAbYgvGuao7eHsEy2HvCyZebnb8akYicUaj7Bu69iFZe9GfRTgYk",
  "key35": "Nr5ynksDhGCtgZDSekCQcxM6Wy1TpAvPX76U7Sd3MNUxu8dyqJcJUY3jMBeFMtQZA8nj1scBQA33PawLEsbppa3",
  "key36": "4cMHh8zxB3btKA5i7dpedfW599KoH26pNBBJKY3YtGVrgNpyc7YgtkMA4J35xjWjDFBrWkaCgBhvzxeMKiQU2uN3",
  "key37": "2mxGJyNfPwV9x2KgzrCS3AMr8wcvV8dHYv2xWdDP2LgGK6Cf18CnCEzSj1KbwFuTVNxD2iPWjcFaZ37tnB4FU6c6",
  "key38": "3MgHjPcy7AqAG6c4E1fGe6YRAgeiSTdgf9XgWUbMhPjdV8u5GhkWuRdxWCweYgictTiBvQefv1TyaVLTCASDMkd3",
  "key39": "3cqpPNhMkTCKECvuU26zwe8SRiZo3ofmpZBNscqz8YyWHU2bq5vtLTJz7QcdBYfW9mfRknnqqzH5osZNZUk1TsZR",
  "key40": "2gGBbRLTtxDT86o23FZw7NebkTYdV7MdRF1RpBUFaa4A98wrULGe8pyiHor4LE5kC9jKaan5oDHfjKEhxYqKKTXn",
  "key41": "apA5CA2h4grsPce7r3aY5kGqmHwdZ47iQcVskTfCoRK8vZaj1mC3XBTEA4fDmBgv4EhZqEPbVuVbVpAAxmbN7ny",
  "key42": "PqUo8N8yXPrbEdbVV9eVjDmoqmsWLb48kFip3DtTRDHLPVcz6REPJUnk2eKpTYV3aRQb9r3unfmrkhSd9ZosqTV",
  "key43": "MDYuYdJMkDZTZp6DothLdDs9cFYLzvY2BbxWe5XR15ex1wTxqqrmtjNyXdnCtGEuCrMbUzZxsbEUP34d91EYNgJ",
  "key44": "43Ebr738pJaVFmYdATCU7pc3x7yMtJTmdkCNbrs7xGVmEWoF3524FJ7u9ifUddQFt23wKa28vfc1S5umzgg43AP6",
  "key45": "5nS8HYP7DaVfEejdsSkfZ6RvNLF5W3Gj69vMGcEhppHDx3o3bMAPkhScntFCeanEzGCR5JMVvhTXG8Fti8bTFMm5",
  "key46": "2VMGFcX1eoVbMTbXAn7ZUhM8Azd1xWtZRVJ2v3o34WUATBu8h6P7rtL7dPmZbFXsPTMyXmFB5fB6vCDb5ULyp6jQ",
  "key47": "2aAwTK4egnTJLpPZjnq4sboP1MzqzDuFehahfgNARmH4dAymAGhvQPVXGu5xBFEu5YmPicSCkVcnG5cHejL1AGYG",
  "key48": "2LUDgDxyG5zZVR6SWWoTdGuHpEcWq4WLwEz1FcwSCLuZbBtWejiFiamijRpBZdwExeUqtnZ8DDHEA4pwiXdXQJjz"
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
