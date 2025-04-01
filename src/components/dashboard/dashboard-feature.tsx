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
    "btBisTUWAXnAkKS67zP98REa6MoLu1Zr6d1wUjPHpNpPeh9dHPadriDCrNnUX5Kv6ySw94fzMRyoUs2vGb684oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CuP4Tu8Lfnhpa4HQaf7Qn6LdTAvLen2NJFaHKfs5iYg4rRdXFrqcAurFs77KENb7SBUV4dbFESkpCB6sVFwZQYt",
  "key1": "2LmidDTKy4Bev4pdXnLDU8PGAtmaAn2JFJf7ksg7D8buUDxzBGU6u8crQ5H52P4ADDBBX5LNKJkgGuNekJDz4teG",
  "key2": "2mz9LB4jCboK2q1X83grvqnmMqyPe53v5ikANJYqQ5hS1Ji4z7WQ1NwYxZeDRgPeuJQMHPoT2gNRd9sZobGYfSFh",
  "key3": "21E3525WkN4jqJ6CxTDiaijvDWYt1gwcihcGD1wVyKYtUrVYpm3TzKPRjudtMG8PHqJaUtkqCDXBZFYWWr2B1BGt",
  "key4": "679uok4A5K8FwtYhWnky7it14QhqwJ89koeqHMQHxR9XHpqH87tTFUM8bS2UFb9uCFj95ttER9WZu7QVyzRiqeQa",
  "key5": "4c4yoRD66hbineFURNxwZ8fxhRhyATMynS1Q2rEmeXCMU7YouYukEnaaJmri3uiT16f83WAVjW9yWpGjNngf4afM",
  "key6": "3Nt8HS5GKiWGGqLF2p3AKa2rr2b4h2YREXfPLJPN32nDFkMNjaMkzft8fenD84irAJgrSUqtr7moEeXMHC5s9nCP",
  "key7": "3DWaRup5CtTVeZthLq7Cr7Zp6vNHcuxxBzD7wYCbwGG2HtDuVdMnEK9Pk13XR4hkE6ue98aUxsgyAbVXPNo6KXtE",
  "key8": "3fNiV1cVXZpk41nR9Z2yfm4UN8VVNGM1V1GZS1hYSLUU71FZuermshXSL8aS9D8NyLvKSNfQwS1cT2j74xu2MX93",
  "key9": "RReJRmdatUF32bAoHdk4Z7afjpRz8dhWZcQfY8eEsjwkPCLNzSN5mpsRtLoQGUF92Xx7dzTzJqMyMXYozyX3J43",
  "key10": "4RPj9Q7u7MZhqkvWjwddcHvbQQau7CwBnJTmyn5xm6mGkZJv1XAhMsDg2FUHCuRtPF6pqgA9YBaoPcvGwfsCUq8s",
  "key11": "2DJk9FSnG2i6WWkQsEiYsYkwwdFz8Zo5tQvxfbWaN9V8h731AgCtHG3cXZkWwuNT8kjsDU6JcYkauk4LygYa22wE",
  "key12": "PC8sqqtoBNTGR6qSxFwPVVFT41b6VWGKsyTFTDhv18A23PK5F8tENvSU8jtE3s7MAGgXEVEgv61avpN7FzBK8bD",
  "key13": "3EB6HZH1pAA1ANP6vim7DJMmuC3jmGx7EmZdAWMSnauiNdBrJXA9oZPFWeUDykd11QsVjt3zqHUrjoA31n7Z2pK9",
  "key14": "2LV1MZheUARcKsZk6dY4HnPTQLcUqz9sYGsd7B6zkCCTXNPy7YSTBzui451ZQEScWWj9GGpWehqACckwXdk5uQhh",
  "key15": "42GBWh8DCLgNXPwsHmR3dmAXAW2gUNChJ3MCqYXrBG1FZoJjeKHNo3davvZF1Xkx4Rq17sWSRackXWrehh6yGPmi",
  "key16": "347yH9wjLPEFLqy8He4UH4C92tkWPAFLc1HeurwG2o2oZKMajfhCvXiG9JFWctYtBo1GudQBPgHiAcyZQCapTFBf",
  "key17": "4MNrnmTGHLPkWZ6RQDb1MKEtfq2d1WChKBaoRUQ25cvf3x9NdD6m5qAvbEkouCMME8KMT1nPcbE6E1KbqojrSBG2",
  "key18": "4fxChS6UfC4SsKkAtwiqifGYcrH2gZsNcBJg5ePufoEEPHLFJqnYmEzxH4LPQxkHzPK8nKDBkqqTP6Y4wtAn6noP",
  "key19": "3FHSVuEMPssCFRCDuTRcjSUVYwc2h43nJdNsUmrtv3j4ABniKNXQ8ocCURo1ddJH2rxg6sv9Jb3k1CP6qtLx54r7",
  "key20": "25tV86LjaoaNeF6mk6bGuBVnhFGf48KuArpbKY8e7DpjXKq3q9qbphBxjnrPp6JBf5hxheDRQNuNB56kDQfDcK8M",
  "key21": "3psmLMECt6iWq96vCCdxHgjTUXE7DsCVTA3LApeyDKMuUHeZtkMDn2pAp6g9XJWRcyzr7tZH1R6zs1crcXvwns34",
  "key22": "3KUR919zvLdfidGXsjuJoMzNHVM8aojGdQamFm32SHXMJZjyUEyXovpAtTs3N6jqKbThNKYjkbsaE4ctcsKWAFbv",
  "key23": "5ePJESzSV8gZT82cXyMcdCP1gdXmwzdt8gH8CECi2nSFbDkpARFQn1fC5KfBxddg4yKepxXdioHSMmuC4BCJa7ek",
  "key24": "3cp9cGpZrMMv1kVaVab479FoCUS9DPLE3Si4hnDgLv64R7D11Fs8Gceuvsji4DWE4sqDoyRcKF7C7r64s9FmxTaQ",
  "key25": "X76YcHoojyXkkNrE3LZtqfh7yFbV7hdEWqUY9fBFQrk9nK7tnLip8wAm6F93wBVoFz4PpSCafxiQ6D9jMhtv1hw",
  "key26": "4C8UeMc7omgHWBPxeEPEGPrydtc9kPCD4yf7kHZsA2sXjjDod9C45z3juJn9gu1fRfjjpTqrPQkVBX259nncmGWt",
  "key27": "3mT4QLeWWW4xq8zqdV8xSkVW53gMzf5M6HTJT5tmvt8n1ZByGt5wcdEuiM7gxBzLDGvB5mcp1bdH3cEuc1uz4hFy",
  "key28": "4rJd4AAu1Q9ZK643CECmT7kXx96u7kXXaBHLk9YMYt4ogJaFePqpGJ4vVQzQr7tFrwdoXSLgD6nAXzdwxyEqB1ds",
  "key29": "2vznnCkE3EBK4Bcr3Lv61cLdajbqphpbgkMGnvhdT9oxStufXppcEtrP7T7oUVqG8bPM7zzP6R18phdVZaNfJ4tG",
  "key30": "2ngd9h5WGN3uyV1v7JpQTjdFadSZVkvM4c6c9jmRLeKWuLqxangnrtjzw2gNBnrkhuMhWEhqcZr29h7zdgFvWHSt",
  "key31": "RKkWQ1nfxtmJRmgn3x7poNAogzdHsdnTtVjkpuW2cZBe9J22Uf3jKBeYuMXjtaqGduaTihu1P7UxExPJKTiBhRS",
  "key32": "1GJ1w5N7DGpfevNnvnfsww4R6nLa3jEpBKDPeVr4pbQk9jyxyP9GAH42uPcrVD3rSU8VpnAi79puZQPqMtp1woZ",
  "key33": "3dcZ8A1hwQj6cm7iDAUWYc5kyU4VcVKUSHoxiS7nTgrdQdKe63MZMBste4p6PJj7vWxwnhbAhx2M1h8Am79g5bZc"
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
