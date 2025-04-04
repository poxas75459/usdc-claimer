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
    "4Bf1HnjYTZi9Q67sCRS4wpAY69pymre1az4TBPJASJf1hSLZa8kWASz5Dqvuw8vCpT87zsUuHakA9TVQNFcKukaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tc7Xyof6SJ7UvhjJBQuPmeYu4iJ852K7dSS7Y3Utj1dLKoFgxP7VAfPW6SyR1CWX9aEYmsRt7btqz9MzsdbPD2e",
  "key1": "7H2FXAxvzYdfEfsLCBaoUku22M71JLPKsxFeRyKFfw49e4iibdxdgLp11gmKRiZHmqqwdd2b6XCqsyi6yV9mu4C",
  "key2": "2CtdPhECxNByoMAUdxH18ehpTpk6ap5jQg31P547Ap1AEpiWDRgBMhRFgu5R3mhowz6cWHYF9VQwUaZs6ftjxHKE",
  "key3": "3jn852axnrnCguo2h3ZLUhoVCXFzFXH9h7tnZ8xekXAeTEjS6nPUMWtg8cpLbtZGahwtDXoBoTsL8C7cTyL7fBsr",
  "key4": "3YKHtSap3PKbKwT1drEcE72EVofbqzNK3tCED2byMWwr8LDCRDhXusfEZq8xHsgiegpgWPLk7WqdNFFo89PCp6Gk",
  "key5": "F2qXiH85gX7UCDgNKpEev4bbESymRnUnr6ptbUGfhQCEz8aaLiUTxiJiN3t61yUHnfPFQqireBtL1BayBL66s7W",
  "key6": "5aE9SsMt1yD5JKY219d1Liy6G2edDgmwpHJGVcJ86hQE6vSU74J3QPpXCPxeCXSqzKC4MPzrZmFbJ42aPqjrobfo",
  "key7": "2t9CM27oxctHSgmB8m3pjMofUgdNTaLKaJgLAs3TwEVyowZHeCcf4SMYoqPiMcRpNE4yo7oiK2cRdoU4HMVEP8oh",
  "key8": "2b1mbqFa27qQc213LLXveFut9urYE5zUdEqvsdCmyoVbyFLfV2bUKcGhDq1JXBAoBZqTjzgLM1ZzUqYBYQD7fotP",
  "key9": "3NvqttABdTmtgscTeYadVcBkZepArTnafojgsQi3SrVaB8NgkFbifqjcr1irS9w7uj7Es28uEVRzfXPMvMpQxo65",
  "key10": "2m3MsftntFmPdKn64qdKcF5Sf3asmxa5QREJ8PcvFczMGxdNc4xQZffn2WsHanB1meCtHYH13Hhjgbo9tvACFeRv",
  "key11": "2HLNGDt6KvbEJ58JvjqbWdX4f24aLME8wsNtMojiKPwtUzuDsbxSx5y7vDVz8WTR3DsHSgUJdqeYaeTqUfDiyBqB",
  "key12": "2BHxSwX4Z1QTTZnoYqVwVFy7RwrsiLFLp3BajDTLKW6VAFdiC4wcBxxnaoG8Y3SxgPazG6m4A6DXvr2kTyA7bpe8",
  "key13": "2cJY7GsUyWSmQGzkYC7vYTFQPC2aN4UivKwRjF8bzVP3eTS8PcQheoCtVFKTikd5iuXQ4GehkSWEisvSvEXPp8DN",
  "key14": "5xHcNRyb9567Ld7PjzAaGQqXGneEEmxMicQvegbJhNeVctpHeufkj8aMpxVdbRENi3ABFJZmWYV3ahaxNQCEQ89K",
  "key15": "2jSafooJc68ncK3HPrz5wCuLJsxSKtdZr65cwvRdZnuPyj2EKGZcPHd24SRDwkLLXFR6aMazzL4s92m4giEsjWS3",
  "key16": "2K238S2JBkakMEkmFg6wWMGhB497Qaz7LqDQDTemy3kbPu6wmpq5qGaJWWSHAJvRrDFbwtALPbwJV6Y7gpWurGNP",
  "key17": "z8tMjDqJ5z7UxvujxHEqPqSNtHMkvqSZVTjdztoJBwN4gbXj6dF3mZ9vy2EodtwDvwgJS5RB2tD4rRFQcQtB95u",
  "key18": "3c62k3mEzsrxEjhLRomHyVS7XE81EzthQyFma58RnH3qi35vXfkMYwzqAXo9uJN418qxMgzp8WJrGPBaGZRJnTNe",
  "key19": "WCZUkxErdXp2uZaQmHmTXbYrUCMg2316qKZNLgYo7tgqDRgZ4R1zg6CKyXRAxgf9gaPvkKmpQhLCxC4vKZFfovV",
  "key20": "4jTB1W8WT8gHYjQJpieExjYQ3DdvrF1fYF71YTjAvEL8sB7PCgqgsCPw7YeBPT99b6bhD42Z7Cwjc7sFaK85LiA5",
  "key21": "3oSVzaqPwitUxvba1fBPvKZGtFJ4LN25N1eCNuKvFLtDqE3opn2HM7YW3VCQeZwHuxCFoPGmR2FjMtiLCM1RD8Fh",
  "key22": "5adwQb8hNSPCCe9QEtVEyWXr89UK7rppgYJpsrk5Jmg7B7srbiGmtSjUSQE6emto1gUApNNPqXFv9ymvZ82sDxUk",
  "key23": "5eyu35aXwLwDN7kKdCYqeXeg294ESjxdfcTYx5vjEC1hbhn9YrW5i7P4kzie7rcy2DzZg1spjrB3XoxCoCNekFNF",
  "key24": "31xYDsx6mLG5pc5QQNBm5fBoSqwdtnBc38UbqKwo21ma8MVryVs7pjyqoX8WDNJ2eCnKgLgmh4wqyRSvs6RLxxqT",
  "key25": "3GSDf85N1GvmQSvXUMx7G5ZBN5kkYw5sFTnSppLijxDMEPT5oBitPzx6izqW9yixYcSUbp23CufcND52kiEoMLnu",
  "key26": "ir8X1GDRrfNejK46yR2HqtHPGV8kiaXWhG2vtzfFwwnPCNB1QQi1kaWbM7ubwu9z9TSiPdPCf6sKkD3b8eZ6tUK",
  "key27": "5Ax1wHN8gHonAt5Zs2jt47bGpcKUekQRWUQepudgHzXPpWhjvjBoVJN8i8upgL9Bc4Qti1HXLhjvUG3K6exnDtPq",
  "key28": "GFPBNkcLUxv2BHNUHcSFeUKdstujTVH722XhbsVd724Kv3Hy43hTtcT1vhgd6LCWvY4ki9j6Fx4fZewVQGcjxww",
  "key29": "3eQpVZsThX7EbaAushBETne3v8b1TQf2e8rCeMswQeCc9XHjpqxBUpe2uZCXgv4CqXAdscYJz6KNREcmgjX7s1eL",
  "key30": "4BsDCGKmL2mXHKHEvcnfQqioMwvmogohEGR9Mcw3D9XNUu47Nxi8Vh36NxMjdMQpdCFEjPTVqRhSfd7ZrPxXjD97",
  "key31": "4Yj1YYBTw7qWV1Fn4xy6ihvSSc45tsSC8ZVptHYzB1W35GzQzqrXsKDxSzokybjLDFWf72E8FEiiUuQ2HqAsVrpo",
  "key32": "5RQJXvJeRTBTMiaKqpu4k5hkKupShwuGrjNbE9PW9yEgyiq3BF76FjmCaGPfN1mdxxhShxoP3vdJRoWrYXXoUgiL",
  "key33": "2RESctXTytSYGQvLYhti7oeHsJfALYCgzpvn2wr8janHhSuBwq2SeGh43jzoMLJ9DnJySty45NsfBZJQt5dsCrT8",
  "key34": "4Zftnw9zYhNSRDHZAiQEGe6mZmGZocu39LMV3cwtgLUDnZc4sEQVdGMTfHvBMDsKjoWZmA3KmKVfG3E1LhkhWoEd",
  "key35": "4C2U6PB97a2KcbFMPTqrAeu9WNYw227BDpV6w1968uTTkkysTX2Gpm3yPwD561nzFr9fzcZWLDoTvVGwobLaTFVk"
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
