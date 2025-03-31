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
    "2z8zcHFnWK7frSWGp5uY4joJj6aqiKR7Fh2deRM9MKvoNaf1Gmoi3U2pQ4myZxLPV4FU3Bs1LC2uM2jzcnaucjfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFSAtbu3SVoq3iUxJsbp9vDRaU3SJGcCt8FCbyjjW3KHAotFaEonSNvCFLZqPuQFCB6ri9SRvNRd9Nacfq2fR3W",
  "key1": "3XaJmwAXPPCmUTh68JKTNT1HPGnZonMbQt4PnPmDWjDCD3by4oozgBKGz6TreJWuNxN7UnZGT6MtugQ1DHiEMh5V",
  "key2": "58eVXgp8fUKoQXnofjWBS7RkZgn8GHuyHbASnXcE9ismRhD8thRzSxD1rs7g8AQoq4Pd5mVnyE2YajEbUhycCB5p",
  "key3": "4soS3xSbvfU6M51dC728Cfwagxr6MrAmMCR8oaaQ17G8oMdoecddzxbFKegtS3ixS3c362AHtE1y979C4NGH2MAx",
  "key4": "2YAdCiQFRERXTR8A4FtvMatEpgmjTZdGcV2rsBF7DgZxop6r7B1exQVpsZc6HLFDGj6NdKDT34C7hcCJSn6sXcDU",
  "key5": "85KuD2GrnieQubhteBEiR5huZGof9Zv35CBeEJPKyDVEPf5vjQUBECJ3RWDFNjhSKsJFaJkSw1GmTkGtDbZN31Y",
  "key6": "3JW365xUtdFCJSULUQEUhbiRbsoKHrHw8w3NvHJjfNqh3ntLMXJjmn76wQjQJZgEXWhBVp7WPaH6XzmUtzj17bry",
  "key7": "UMfLGug3ZuxxgfY3HXvA45NvDdSdq5pydn8FVsZaKb6UjmQFuTiJJYG12JLdZgNifCEM2fdHS1p7rpZHP9FkRhQ",
  "key8": "5vXh1UpBspkVATiRyj225aZvLnHAJV9hvqMqFkzNtGFWZ9i9rLvAgr7fZW8sXuo9Cjb3hirnX9nzXRafkCLLrxYw",
  "key9": "5581odZbj7AuxZY7Rew4SXA2KsPCNXXA91Ctpk17hXjXH5uV6vWk8nGaBVB1gPTrQX8BYdEMR1g7zbfyM6KUWjnw",
  "key10": "57PCitpbsEDT3uES2sY5qxcMKZX7LGJfRttyuCmGGHJXaKfN4gUQWK5aui6Z8kXBNGKmtkJUE8hhoQmZE6bP4hjm",
  "key11": "5fBapKUuYNy7UFs8qjaUh1Uc7GWnxuEp4MXnpVMmt9aGJhMpRgSxKWgxmGv8ECHJZ6TmNig6dLLwjHkxTvRNpCd",
  "key12": "4gMhA42qeZoZYKho729NCGu4MKDzCHhSAyV4RfB9jNGMvg8oxAm3QVHxmz18EX8ZfHJJ2BeNj5V3Lnb5FC7R8q66",
  "key13": "2GF1Wt5MBdgibPRtosC419bFTe5HrsEprig85AquR896eqszJFyTGGUDFC4qhm3cVrXPr1UWuTMtTMK4R28YPiZU",
  "key14": "4eGiQV1aSoxgyLM1wfidchjGKLxnKV85od4grNKTdozHE3H5NPQymAxtDkf753hcnU2WSwTeLgrav87jzLU2U3fu",
  "key15": "28UogKxaDtjb5hfc4TGrzWNoVBArgsPGiPQiEcvZvSrNfK8ngvgWGSyn5gi1bC293jJu9kk2tr27m6iaVtM3HfuC",
  "key16": "4oBj14bkY1AH6RW9bNc64EyNiNrsS5wmMesmh1TgJBYWNz5GfUaJQmEWEovYR13797uTVW6L1LFnNTZoZQguHpaB",
  "key17": "3yGLXRMMncLMXJYdg8epDn5rR6L258wh44UhHYnEY9SxFyXcqov6M5Df6U6vTqm1QP7Zf1gomEAmbHzgei2iv5WB",
  "key18": "674QLyjFLKRvvcaPvn214SvhAFThugRMcHqaEZZbHPkakUNpgUnuSjhJbgJ6r1EBdF3WrVdP2MWCpF3K89WeoEfq",
  "key19": "2ig3z1pL47EouoBFhnBuGKMKDDnvRHRKiLXRhrsLmKqCap48HoU46qVKSHUqqx4nj5C8KcyjsgndjGPsff65JvYW",
  "key20": "nn7z68Ke1BW3RSbZRDkc5Q64aw3ifCpN1J98an4Cq3iK8LJ2AFofrCHERa3DPcsXtMLXttxG1toWQ8UsWE5NU2u",
  "key21": "3sGjoTxthKF1M75BTEroAzPcrvRHt4F2e6RrYXFarvF8AFUZqS17cZS4cC6ci1y9nC7FZMPfC7KU6v9UGhcLVaSP",
  "key22": "fGmpoLhWYS6WzFAB1CMfhsp1ww2nHQrAEdnUXHDnosncrsJJ3hjJeppjNZc6kNymEL4Fwp9b2qyhBkpCssxUnYQ",
  "key23": "3qbpTmQFAmphvyPNJdCzTxZzqK6VaCfJcDhQgtuDs2yELDVuDep12PRrvKdPL9cuT1xvAFtRQyx4ihMgSNFvt3Ux",
  "key24": "4Je9BDTvzNddRv6zy69wXAwefQ4uugSpFrcaMNpCujj43ycAG8sqS4YNzDcuKqqURjdY8sYoGX4wZboHdRt77SbP",
  "key25": "3mCdbs6vNB53V1wtdQDebrGnoMsB83tkfR9VtSuorAKMAtFzbwpxiAvX9akSg3S1ukYgk9SZHNT26wiEKxXTj8gT",
  "key26": "4L29JxyuU6XaqH5pDn9dANw8YJXtxpdbtNdzspAdwxyWzC8Hby4KBAiZJazu2R83moWxCWz1dr3T68EyLXT3pPLm",
  "key27": "4AHqbHWw5k6vFhWgN88mZAzBCYsDxkeeqXt9CZs9BomDn2FwAzgbUj6faLuFJec6LLFWP62DKrkPZYye7YihBDwn",
  "key28": "2TKJHwVS82dawUwvvSU89MQETf2HpKxGMnkQ9xjzm7ZHUkBxTJuAEsBEQUtNDzPpzWfmG6ZuQJ12M7n7yuYHzXW3",
  "key29": "4JP4CjApo462FfVEafMVUVmGmzN4kyY24TqGHbGKUarW7vfgicLEDYNPfiE78pm9ueBFpMJjPCAJ9FoPZWgFWxNX",
  "key30": "4KxEVdzdZWjwdgqHzbjzfn8JmbJtsaLWqQviGHkQEKuKHxMSXHQ1o2YpbCQ3TiPozPzFWL1hoEzWApMGPFHyEEVc",
  "key31": "4RvAFmets9gJFySuM8eQTd31Ho9JgndcLLGdbvNtHd1T5ABDvwaRp81JbPmq5qLvKeuudqfejqJ6jiB1AYA2FtRY",
  "key32": "TUVef9sTmSsxa3VftyRW7BuZ1bm12Va1ZyaKwwSHKm1W6LZxqWek9osskB3ATvh5uhXkqiSkdaekQwcq3ego6ej",
  "key33": "4J96oC3SjpCRXPCENFjQJnJnSq9TfTawn2V6Hj8orqtTJMBXej1iBhgZJmG9UJt89HThw3mWgirN8s1EX1zhRiEc",
  "key34": "3Qehmz9taBzFnMjxpw5DcYLSL2Hgz3zyHqdUrZ328GXhTaFpKiYRbJHCt7jv9vok8PpqW9XAA7vPzAhjn4aaogms",
  "key35": "4gtwrVCiMh5Grk7eMCV3KSoh9yQQRWSK2ay6MmwPgKzWvYgWAAdP9CWr7w2cZfXPvURieyeF9SMZt4zQWFudsU9u",
  "key36": "9Y4YCr3kn5uzW4wGcUt8DLJ2iJfTBzMou8tNmv6TtGcbjH9o8Da6ic7iivSmRzvEqR5EZJiepQfaM6HdKYvSTP9",
  "key37": "5kR4ZNcgSjNXvntpjF6QPJW3TbxJaaUHsVadUo7R3MJ3FGqSvsviRuEjZHYTwNYExd2DeajGkhUiDM8SXU5wAhE8",
  "key38": "2vFn4YBsrQHwoCJVx3AzbDDcTirJQrhhJd5ZjG5AXXLYo4uAuWwvYnWCi6YX5kEx7HMiX5qEJ2SXfddTdCZisJBk",
  "key39": "2xLhGbVnA8UqmgtU77ajem5cARvhpnqPF3pizDooHrvvmMKrvrfkiLfubku4yUCdSeGpKeVwvPTvwgzBc9rnaxMv",
  "key40": "4mXEgnNDPMknPKrDBsWQGBu9xcEfvpZtXuTuFsVGAoUe6q8QLQvkcFnm8PPs6xFmT9zNTzPzLe8cfmHQKxykbSEw",
  "key41": "2wjKE28J5QfQbqXvGVKthDeybYDErLTQRBPGJULrpfakAAQjmn1viW3KDZAertxV9haHMDQXWAbYKNZQXedNp8xj",
  "key42": "2L2DnRzqxUcbs1H2BY4P2mFocLqr1VCQr3GnuYpdeG61rN3ir1xmM1PiKrbWhpPeQsYtCxFAZomiLeg5EejQc1yR"
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
