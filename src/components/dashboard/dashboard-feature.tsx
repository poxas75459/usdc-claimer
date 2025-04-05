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
    "zzYuDATZXLS88SsFjg6pmGCfPAPaKqh6Vvt5Y9PnEhsi7vx1iV11tdfncYJ6gsy2j9CNY6oCuXDtvD1S7rBpsHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jg1B5nAK7mt4NQ7asmLgZ4mpyivViA9hoFatGQ5sFZMjBPvs7PdfXGhM6EEx3ZPciCDTqjVnGBMtTjFdnUjfBEK",
  "key1": "seHR8hQW8WCd5F6RYuo6TGF1uPqkVMmekrismJ1VLAxyeAhSJ3nvqEkuzQ4JEXa6PGhv8yrFDZQ8c8Wtgu2wxfJ",
  "key2": "C1ywz3L3Nh64LiNfGS7vvowuhbqxgUPq9TmBhhfN8Pt6hoMhVfSpeoNWwa3bBT5fhJ6YW5UjvnGWPkHAYmuoHL7",
  "key3": "2gp7mmnbuH3p7XKX78NgBzCykHxUWVMdBYkSBFD6akc33pJJQAidmfSvyG2vDxff5kYcE5FjoHvHnRJZ3VM4A4c3",
  "key4": "3LWigwNCkdPQzyw4t1GsFs8M2nD2QoAX9wGLC8wJgAfBY4xmSuGE9XqZUSW9SJjL3XhZTJjcuDRGPyNGfUCuR3Hs",
  "key5": "4JUZGdkHyKLQCsLT9VeTP25AKBmpGAwB89NSP8oY1MAJ9oSjdoXDFjpd5jeTREgFpH8F35aWqoNF8cL8Dmdo8s95",
  "key6": "3CmbQxVQ8hYjfAV47TZ8zfJfgb5xLU7RVUsuVMczKXZ99Ju3oSq9ZYdhnWjcUtjSt32DfrKKYXW88z9NktNmoUZH",
  "key7": "4yKnvwDejVAAhVCtbnTBBtM5V7diBVuJ7DZ7bJkMK4qebZD83gCE7x4DjNpEXbsVKPgEUYK8uCc86GCGgpfxSpPf",
  "key8": "2Nt4MdQXG5qhnz58dqoULHdQubRxn2SSpKCpY6euYf99yW1DMPwwjnuRsMDoNumgcXHyupwepvdVnXEehYJ5hifq",
  "key9": "2Tvfquam1GWcZNVX1GfniNZLH5yMAt5CyENtEWFiQdTJVpfyzyLVbvEzUxku6fJFfDrFS2f3up1Vkne1UYgPwQs",
  "key10": "2Li8gh1jLAPf2xohN4MDVX2x9CDTWta47mkcyCP9E7Hqx79MLD8SrV7G6DtBSqUTP3F7LFtJuN7UHKchkgc8giHL",
  "key11": "4rXdfYPkENF41WANVNrux1RDfvyRUServTXyWgba8noa3CZLTmr3HwDGXAxqxntryhZRjVYtaFao5Ak6zm358TuB",
  "key12": "VqMYfurqGpprHfF3V3jmtpiP4FckbX3wFoJKrkPg5bb2VNWBt1JzucqqzWB3KidaxwFpRxEbpcjrJB7wschye3z",
  "key13": "2KArTGNWsefrG6geECsw4RUNEyESoHqNXdy43qFKZ1ZP3TMNMM8n3iRzrZzf6P5T5phwyRonn5o6KD23F7byz4k",
  "key14": "2VoqMctwuaYt8NankbJPjyZxyp8heq6Gb8X5eQh4meF8436PvWkqinCgMeUbRWzF8hFxLRUFkDERR2J7HctVF81k",
  "key15": "3yt4vqQ94iMDXf5KtKNikEYvPM5fBWgbbjgGck4U38GFJzeD4kw5qnRi3HTYGYQ6D6JeLgjVKhcqCGAJK2fQdYhX",
  "key16": "3uQNmfc1sDYjjmmqA9AyeUKT7NH1hMUepQPEyrCB3fuLwuXKYWs5sW6TKiyWwbRFipjYG6F41uvbLX6zmibJo1Fn",
  "key17": "44YukA2Gvymd5th1nJfbLN76wk88T8zxQ8sbFLmCKjKGNa1kP9fHnDUZ7MscZAdNeSNs5DuaNqfM6dgAiwEct1yD",
  "key18": "g88utqiYfKrhDF7DrvL6XHq5G7jFgYUuNFN7M8m8mjjuPtKrXo4SevXZRjTDiLmM2ByNXYQuoW9DvQtzXPZZZxM",
  "key19": "wzm4AfT8iMcCnDB6G2v3CiPbgCMt9QfRaSAgX5GkR6dB4skSTtHPFUr17Ws6BczioytNPVBjsco8VZ5JoP3bFzU",
  "key20": "EqQ3xcmexxrZKu1UiX8a5ciL1R8a817P4CFtb7VgAFQewWzvzYavgPnHfwEDooLrSgWz3xqM1cZaM4aDkYP4Sdx",
  "key21": "464GjPpxzHqXa8BbN1ckcL3rGYqaQPpEGLNiMP3fXQFpY655z1QFTbLDuCNDp3zurkSU8FUMdNJ6XifTUSUdKJ6t",
  "key22": "4pCydr6kQv2b225BGJK5LfAoFVRxbBuVj6dSJNVEGHiPYcgik3bzNPhXSa84sfwyxREYJmPKnfZBJDrbhPyzFJ9D",
  "key23": "3w4cLXWM8cED6YptD7HFTndwJPERUrQUv7eB7nmG9Cqswd4npr9seahiTAiRabw25DAozJYGnDVdxNYJV9JyDaMj",
  "key24": "599gghxVMRdQQi58x6tH1pZ3ZzpUJJLfvhoaX2Ni9YqsDuUuQGnRauGZPiMLhu8TXTbo3r7ATdT7sX8SYpsrTNcp",
  "key25": "2xxanUB3saoFvGLDi1qK28Sg5oq8nwLDMR1bGNoCgDih34ZMQjHgHcn9TkiJaDSdKEitLgBV4yD6RpCJC4LTJQDE",
  "key26": "RTFE1LbHu6uGUXYwcXt129cjAhHax9pdAq9XJHcnDLkcBDijXRd7cnJnawPMfVh4QeCBiyVfmArQXwQmHra2JWq",
  "key27": "3dDXcD8t6zZu8QtnJSTgTAPRym9r5ZjXd4GWtC7JEfAuDFPxRBDHk3vhcc1euFGcjiEmrC8RhVNTRJAy3jNu2hvt",
  "key28": "2sHcBEUWgLCfSADHnu1rENYq4c2jzkr9xxJdSnN5zyTm95d4TbHLCPK6WJ8MwrwT1bXZ5d4JrwJh3ifdwYMrzC4b",
  "key29": "2GwfQhKdvym8UDLfif8zMf9wKUc8t5MURr1nffZCouE2D5wxuTXKUUnYfJecyidKYnudX6G5daLWFKiC3oNW4VMf",
  "key30": "4v9knZowjnNjXTaJfDNqCi5rgGXnJA7PphmGzK7NdDPHvSBTfDL3drzo1W1jx7TSbKQuw9TB5TpBmxraZukV7BEa",
  "key31": "2svfiHZkVDdoZ1aHBJTiuwzpAnV4LsQQgzhGf1jQoYAizEeJb1VqqYNHLjrXFFaQ6t9MfFG5kGEJv7mK338fQWi4",
  "key32": "63oHSfwFmE6uNCszJwCfa9W7d6qF7zmvdk9WYpvuxnZPXMAKZTEi2k3uvZrMW1e6GNS9ucjUVAyt7Y4ayzt3znUz",
  "key33": "5tKbqa6s6BVuVBZcYFEmApdNf1qNhvEFSqjBakQ1p9D5KyZeuvLh6MsuskYDUb1H6fceeLQrk7CD1MD2Qkp8eRfD",
  "key34": "2qyS6JZ2bTDpB8JHTZrzn9hceJKCvphDg9p3gBHgh6HGAw8aGDG3YtiYNErEeTrEE1xhBEcMH84CQqws9UN5JwGo",
  "key35": "4PhfPYxNSN4hFEEBaBynrANJqk1wWk4XuxQfnAjoEhqtCj7Y2uCrYpXBFGgGR78Fc9uFuhpbVHgtVEe3mEmCoLbD",
  "key36": "4c1wq6TCrs1teYFHeE3YjPomkLeNsimza5CYHwaLBg4RBAdMiba6tZcw3ABngXoAq8Qks3ZudPLQfeKdFLpMjRh9",
  "key37": "DE4wgfAMfmCn2WDdivRPYBPJuEioQq5QaJYqu1GifqKik7CYBttKJH3GJassKgbrcRj4xMxtVtiy32X6VnTHM6W",
  "key38": "4AM7wFt5JuTMT5xSRaiQwsjds9yjKwEcYgqCtMhTQSyP18jXg8WPUc44K5PfEorPyd63w2ZXt11ouLGyiWvR7mbr",
  "key39": "5x56ruDjhYLMp5JK6zqCxZLGZdxsdM7kX7jeb9dRN484SmN93ZaSBFvggRSfR8itkBhXGvPU8VyAnHSPpE4JiF8Y",
  "key40": "vcZxFgtnF4yujqkHKopQSahPhxCUnPFfaEwU84dxCzG6WAvkwRSwGDAxaiJZ2ExTsmrLgEffeWtdtg5SBhvquWa",
  "key41": "sqXz7c7sbK3Nrq8BVZYMeMCXpTxTRU5gYF7s84fS7M5m5KA1rRC5BZTqwwwvHodBMW2hQ7hqX1Bfw3xdfBw5sAJ",
  "key42": "2YKNm1anQDTnuqj7uyZEbDpFdEDx7yyD1Mbz5r2dFDb4gdrYM5wzxn95zi54S8yX1ytUgb5rpyoVpLF8nq5uVq9F",
  "key43": "4hXMqC8wtjzqNKroZUUFeg9udvhfTdneoW51sR2CEAUGw5hXGo4HLSHdc1aB6abF7e4V63KbKAnuGVeUE5NECSjH",
  "key44": "3rg8TeaHWTy997wsFgyrQocK7DH64hNT9CS5PsRBa6HetnsLkMkihRz927tM8SLcjgXVLvRjV7Ew2mR3hVSc76um",
  "key45": "4gDuL4kWx6jT3QmmyXbCa551fdgXEVNumDYoTmxBV9TANJDafL2S2cGmaNuApoFrrk8bG5Gh5NjZQPAnb7kdSXpx",
  "key46": "44um5wN37KH82XD2Uihr5t5RFVqzM8gALbHjMNMquTZamShH9giZwAsvF8qLLT7st1sYoRzP8mVEC2PMSh4SwaFe",
  "key47": "wgEm7ezD9rA2PRuNqHR2WB1qU8PBJiCLapRxKBZTJWWNKGAD1rqz3aBe3uR2Ae3ME6hgL5MQPgRG1QmvR8R1fpn",
  "key48": "mGedpyzCcVvKpZdaFtNMDJQXD2j2iqfAmB4bgnrr4HSEQtj9WAf4ShwfNZzQBAWPxvTdGCLqq3VKznw7qBUQq2w",
  "key49": "48vJKV1Dfoi3vF1YtYdbjZ6ZJyncnMcFtBvp1Ui3M698csDK387Z79oczgHJedFZFFA61oDTFrFrmXjeb1VauMEp"
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
