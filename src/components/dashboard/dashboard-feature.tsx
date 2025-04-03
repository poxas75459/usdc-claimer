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
    "arajfuUQG9DepG9CiqBuqtaxAcSDJ191gg2C8QCbY56Nq6Je1dHwEb4a2GiNqucdPAchcHeXEBYirTrYL5XgSUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65judAqHW4ytvvpCXSw2nybzQtRPRZ3Xsw3nhZv9Ek1MjUsYzuL5GBQwLLyrsqxNKWcWGZ7x84B5BCEF11LuThyK",
  "key1": "4ZnLqQTpKL6xLGfZVnwwrWQ2YaYkUa9WCMFtnHrwAQj4a7d7P1UatrKdUGYBnLpKgAHbdi9hVwLgtEgYCUjSCYhR",
  "key2": "35ohusngKJ4NiEhaxArevXkD11ZzjsoMCC9xnqeUr9FL5jp3vPmgzUtN2c5KayjtbFVZ1avdsNcie6TZAsUteiEQ",
  "key3": "3txX5Upj77bn7rKYFdDsJD94xcaLYvuC5y9WRFNX2FgYV65US7dsRbGRhHLDoX6bWAvuDpn82kJF16qBjX6GqL1Y",
  "key4": "2GcKtNzeDZ7FCUqu66LRThowByU4Tde39YQf2VasJPu8kG2B1e6Lt1C3B926BDXtQFPFgMPnzCKpBeMELiW6Gt7h",
  "key5": "57TyiExZNhAfSJeTRDaauu8pTCkGvuhHpSxUoRKb5Bw1e6odrzaAK8W86EHEJ5Xs29eyDn8fbqwzwtM21mCo86Rw",
  "key6": "5nZMGsfLvMaxVbyHqR4FpAgznWa3QibnFzSJquoENBuiqS7S6BLQjNYtNQnPoedbY8qAPQkwnnwapQfQ9okizgiw",
  "key7": "4mTVMXAV3oYM6vJAiewNEEEpfRcK9Gn65iLRdPqM3HfjfiydY87FVSFNG2ZrqJRdKWV6kUyCaMH4yhT6f8U2iKC3",
  "key8": "4T7CnmacSJVhRtwsVevJckAo8rmPy7rNBTC3yMuLM8S98Km2hvZV4NoNuzvocex2dVAHmZmrdJsFUYNUvwXcJ2hN",
  "key9": "67PTyLEJfcAZSLGtJQyxset63pkfvA3M8LnEnwssxRuPK6WBoCdyuoBzuWTDecGYjdLKUgymYd8KdZukXPUaFe25",
  "key10": "5q9gCtGe2ghopjSiEh2iFrVdonLRbMTZ6riZ1v4846aVHGp13GSW3db46qaPgh1jHSZE5rQnzCuiy6XCPhNT21GD",
  "key11": "38cJo7CoFgktEgiizAfFPgatxjoT2YDb7XW87yEUFN5xCwgQdARSp4Cins6DFPgJUdVYCo78Ub9rugToYRvyQW3g",
  "key12": "3ZhwyWMoRVfNeo45bmgGMTR8ssgM4vdiKiQZePkvfkVmu39g8dPqTg31HsSEAzQ26RX7P1wff7z3NYRZiPKKF1PB",
  "key13": "3KYsAUcHGfNT8EXXwfyFXUKWqiiAHKnxqzQY1YEej56Qj9G9PqGKcuSfxrcZhTqUBqRhTMry9u8kExaYynX4kacb",
  "key14": "33DP8J2FizGYJa7JUKKBJnbJ5b4yz1ir1bfJBzob8EgduA7EksbWk7ieGCfVhi8uSQTBYkhwePCFENmUU7y9R8iY",
  "key15": "57NkhdzEfC5YzmFivVdZ7vffzA2QAcDxsEYsqXjQftZEj8Dq1F4p3FhJsexT7hYf3E3mPGRP3Z7xX5yCZbRH4ccF",
  "key16": "4VrtgxsuYrgR4BHq7pqAvTW6af1io7Z5kqQyY4ibXDgvZb9WmB9qX2Ku6qCisjYtMYJVEeBmygVpSNdQLGC2Rk48",
  "key17": "2PH7gSbkrxmSfVc7D23jrsYzmmd5Rft5JW5Z5XzQ9SR6xrh251cg9WhEi2AiGn3E8EChMEPCD7JBSPqrEg5kAdch",
  "key18": "2qh5CtvofVLxDeGprRB6QkhNi7vBscFmjrzmuCvV2DGQda69jtuTAJKALTU3rL4Ntoxe63A1YDjRJeEMCAbAeGfr",
  "key19": "xEpvN2gCun8i4SJebDPP9v7yRMP6xQC13sG4BwLdxvDXj9XXLi5xEtCeudVC2TDWwWqCruKJFjPekT9bqv8kVT3",
  "key20": "3xSCAVEmkpQKZJLQhPNJGTs58Y3iLBe4Aqfypvgn2bKCaoLoek8TRyciZFGMRW5raSaTWgJoEtAKrtyyHv3VxrM6",
  "key21": "5vKppcENZ3PHPr5dLwQ9qnMiXqSZQ3t28pdjLbXS3Yt5aZqnRFYxdFbdU16TKU5pP43Tk9LSC3tsgRDQ1G2MGnW3",
  "key22": "5iTiD41krqeo7m1SzfwyGPRKLPGegTvvvgS7JMyib7MHHzzsuMGHBoSBgxL1puBVarfdsP83c7peqaWNHpkvoKJy",
  "key23": "59dQVTKU6bAGZ6Z9oKru6WZDZzLQpYwAMNUEgohpbBWkwMpA1BDHPuAQmPtfcajZeXmwV3kNuwg57xSB67pQHe1C",
  "key24": "2xf2wLc3Fz7pJYwmC3V7FDvJmbKA9ysU33p3Z1QT8AitsfgpQN1VinwBfhJcQ77z8h9ZFwtiAb8UHgRrujeMcKpo",
  "key25": "4UjaS1GTSmwAewdNmpCr9UnYqwvbAwo3eroQQBASeRYY2qydrvFeM4XUJGYwf2KH8rzjZXFV5LLmEReKgsvYuRWC",
  "key26": "X8WxmPhBu7ZEJCqw9RPMLkUrQ9D6QyQ4FhdGMgqtCFGJrwpKbBdjw13Du4gozTNLMyQZEFAZcSiGeA8AFyJi8RA",
  "key27": "5QXtsUG6dfaGEoU6agGJ29yVJB1Vx8VBCMb2ocuPzqXT1Hyj57NLXw28Gk4Au62gKTFTsQAKjERbFihxEhXcz7Tg",
  "key28": "w95kGCfE9i8NJZx9wPSuRs1qRZb7TCs2nNxciqqKfYPaSEcDRE6L1C8EYENMavh5qyjq4fFmsr2iDYsojw3KRDn",
  "key29": "3YznNU7Lb6Rk9V2hQB7WXacfUVXhmsi4uwsaFjPRRMg7zoFdXpwfWUQXu1mrnGsvJpDiY3zhnUhfcmhvm7CjeNYB",
  "key30": "4bZ4FGnQ122SyVMXZZyixueQR58S5rn2EaWoQTe9g5wui9NR6JqecAExNRTTY9aQgMvmFD7VKYqedKrzzyAwvHA4",
  "key31": "2wCxPSFuHe1pt612DbqymC6p2VgDsUEPko2BumNY3PvrXmuCSxceGwdzmuh5eh48CNcU8WjCcSRu7fwpnUHEjQgS",
  "key32": "LV79TFAZBJePi5AbfFN8D52a11GSXNGqrfrM41RiCe8B2zsAaU1HqKAouFQCkyE5xYokxRrQwWy5CR9pgsHvn5x",
  "key33": "2XdqrxofsXNe1bQHFihKKFTDsJzHFNpLjFnaxYPwVNbUyYqgpwYWo3nwnVe3uAu8b8r1ASYgcYn5V17TBjKwo2oA",
  "key34": "629hMngauJ9PrGXXXDGdvFYwWESFBkr8TTtyGyiJRBBWbBVzA6iy3xAvGei134Yky2a6CLyKh7Cr7H5aChXGrT6x",
  "key35": "2Nz2bVL7Ndw3JEV7EpRVdUBqDYxPjdRDRAJsHB4rf6zRrwdZ1dgNZtxdxfXK1Bm6H2vuEBGDLcNLfZsLkimwB27p",
  "key36": "3uSJBDiUt5N1zufZWsuTpubsBFGiq574mnbeZvb2dpJwfhxqcoVP8uRP1wbuumXuQBpHqEwh2jmEDThvc8FJYG8V",
  "key37": "3FS9XGk3pafY8HXncFAeiSzh7ugnYTE9EBkwwu9pFUMRVuqrBRedcm3xo36424djp82aoe3pJdvqDc7jYHx2cVBL",
  "key38": "2jQ6yzdpr7V9F92HRou2wh16J6X8snobsYSrwvSWTYZkFJFgFAxuJPM7jpGRh2K7xqmLvdG3HvJjAk97f9gdS8m2",
  "key39": "317bBGR3XPVYJCG1U7sUTae59gJp9YYaiPF2HrH1jSvrjJ1cnNYuy7MzekaDZjQHvnFMXvNsYHLU7F1WC1146zuc",
  "key40": "5WS7S5Twk9WA1tWgCn8eF2ienZdE2BG9rU9gYCKkVLxU7JACyfGVXv7wvWLSvyQGFBH9vwRWT41s9tJCESUcrpM8",
  "key41": "3nWKyR1C538K9jGJBoxAwrdnjrURmZiZBjBD5FtEJUTjZ5RL4YijjE1dMe44bTCdNx4Qb5qSm7NDmutpbbjp3416",
  "key42": "5vpdEcZV7F5uYRX6bJeNJDvetWUiZe9swBjUz8Pevy86ZTN9kAiXzmdYjWTMP398Q5Lusm66W4bYB28yhVfS2s1B",
  "key43": "5EkMc6VbJgVqsXgdbfoSDUcDS7XyAjjf9JN1NBmBZGzRGvrEhGE9aLorZAKHNhdKF4AeGpy3DiYXrS9YmxaNuZD8",
  "key44": "3TgqXGF2LDGQLjKMU3J5RvPo17cHL3h8aLK7ZJNZcNsZ2Hhi562Gm6wfjDhR1SEeWmKBQzotYrZtYMSveE8r3NPo",
  "key45": "5DxYnqAASyuEazXw9oNyZFyiBHkT6cqmLV9smsg7LHhdZ23msJ5gdkyJKcf9s9jf9yG5e4ifexTQowPY35TBWVwx",
  "key46": "fYhm5RbijmQu8uCkxkTmNAXjTGKtnyee6thjmDBfaTa7DundRfnD56gRCVrQ2KLRugkuxDgSx8uaMUrjgGAaHiv",
  "key47": "4d4S4rrf3JmkP2VrB8yUye8GZDffniJYbsKnvCScbHE4GcYVdMhLkTMg9bhvdcBtTD8xCG8hk3WwJRT7eu9Mprkm",
  "key48": "2AtaMA4X7NyXNAAfwgWggRGM2BCzkRXnpSEqyCvaQHjgrRYTKJybbWsj6PzNmhi8a546jVYoNhDtQxeLLo393Mbc",
  "key49": "4tHv8ic43mU9eczDHjjNWDrUghkzJFkThXVs1KteZGkUAXyin1YkHdS8oep2YNW5Dsf3kWkJYvpyJ7cxfNqSH4nm"
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
