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
    "57gev5mbyfEcGX7Q8ZSbGdqSPhyMLJAaweM8eTqcZWmCFgypgBT1kL1UEapMc7zKLNGZ87x9FXkXrBBPnQToGVFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6N6udWk18nzwkCx52gLS11jumD9cU3obtmFgnANvEQgtGndBt1HLrzQkc33fjh8399ASE7kc5quprSBr93kBx2Z",
  "key1": "2d838oP6xfs4mg15GSx2xQq5AofWY82sW5fF1bcATThMRtoJyGpGL1exRRDqELtWDLnMg7eZFJWEopMcGvyArmB",
  "key2": "52XwXE4Dz5eaReZZ9GVCSGJvHxXTti77royxcyZkBoSj9Cne7KFc49DjN91QX8TEvGBbNVx2ERNre9K3BpFp7yXA",
  "key3": "3o72fLiJeo7rBv9nFuC9cbCVZBayxNuQaxbVnJFdtAgouEhDRwZmusGeFXQ3FvZWG5mg8gMNhHHCZa9vcehR8UHQ",
  "key4": "5D6CiZAuRaUNFG98Q8zwXjyutJg7TBNKfW4npUk993zSvnu7vwDQ2wXiNGBWgRTje9gUMX4xCfxibLZsx9QBsm22",
  "key5": "2QBAtuFCjVKivLaQK4QnV9pW8gABqXwXBJeViDaJp8Pmfm8AkbFBN7ahy6H6NHzMkt6ULpQnFohZSPnkDQS8a4nC",
  "key6": "3q2qwZcsAPzcRMGNc3EYh2x9w6ANF7VirbtuKjbnX54ztWcNwdFz7irQ74uuqDznGL3u2JxathN8w7ybX259oFVi",
  "key7": "2rTgvNz6mwrtvZnjhdpzjjV9yoZmFug1r5Kdmy56JZS1mJRT5P8j6T3QKEeTHR9LysyvPwLk1iFSEkXawkwvysca",
  "key8": "5cCM8nXKAHhwX6qJVKBi1ruAK4oh6mwRae8yYXgSkuuMr3Vr8PWPnSpt6p8yN2wpAG1HLKGYBWAN4AnE1BYTCyJt",
  "key9": "4faf6c3rrmsS5HSaXDKDi2TT1kN6bghMkd228iX9N3tW4wsikMHph2XRwPSKfU7W7uCGWAMoCAsSvr8xRmNtuVQ2",
  "key10": "rjbQiWKzu6XmhVSA8uHMLbZsPkZaR99ePTV2v1Qmrp1YT57kT7wjMmV45eNfybpqA914nejZFhApQokQRNmAPTU",
  "key11": "4FZVkTEtd89os1qwyuFQTwukWHfjNzZQ4j7Q8w2jSQQxM7UqGcjUhHXuTqJdgYXvqo62XtQkWSTN4XVRW7W8a4iA",
  "key12": "3M34hYNj85nhq15XsceKshjXAk4gcG1MmpMPYR1afBv19BSdMDhga7SN1zwRUbFBJKw8TZoLcErgTbJPXVdTXysZ",
  "key13": "3n5roTUoj8wR8EGumZff2cgSfJAmUvbLCoy8sNHCAFZQ8DKQSQFE7hjYgAWqKZ4Dy9JLVfWmbmTBYwjwYvPhYaXm",
  "key14": "wYLueESd5vT7xZ7dPpg3Z5afULRbhnRA8bnbPgm9hD3BpECgt1N9L7iufk9pWLv6XnL9wWMWvyMsuLGQBX3kumw",
  "key15": "2xk4xM13iDEK3yyUG7VmQSCYLrS3Xrzj6wqiTi8wH5WdudWZb8KAE4yDupkPLcmEyvvyGRcQHuDFw5nBYJvaSSBP",
  "key16": "3KYPvgKwtG9qyrBPSxCRiebQLL1epZXNHV84rJYYffatqJADHJYvDQdqFXoGHKYHPGQ28fFNuveocsEmcV1paV4V",
  "key17": "5spo5aj97zxa8xLnGD2SgLgvVo3WEsvXyK3MABKf2zwJHryi5Bpz2pZuhhwQ2PRthuSg1dzhvSfx3vvxNHFhf3Jg",
  "key18": "332JK4xeFHozx2DTjwB337qGaxayMiF58BGhuoNHJtYo6XqTWpbwZ43rp3cLwK9mS7tzn819j2e8XoPsZEBsJTUM",
  "key19": "RnvEi1cVwNWZon4soXSf9NhvppZYhApHAmVVcxijXiB1UmnsGoTt689URdfMA6U2u3VjRDk31XUR7Y9jPKcTFip",
  "key20": "4fq96iDXVfjAjPbq6hyatC5QSPEm2KfUC2YxL42QULSdEjqE5vbSjcswa1YLYKWnRE6fmRZqB1SMwfxo5CMkwgQr",
  "key21": "3hTm7AMKN1smDMt6t88ytXcf4VuKjah1SZVSDG37ZHanuFv5TeBkYsLpwv6LTtXpjpCgVrfAt8kPZwMebfbs4xfd",
  "key22": "5ZUtojjPxuyTViWFKbWfGiSCsia5XNsPhgE81va5cS8JxukisVVvPJm2i482T2ddpPvqdvAduLbNuie3SDaqWsC2",
  "key23": "KvdsMhzBTRS1R3UqbNfpF76bvXF9q3ZrApdTPubkGYp6QcKf4QWEvTKjVzJokfpjXzNRJP8Pjc72Ub4z4rmVRsQ",
  "key24": "2pE3GaFwLpoYz3snmCpGtKG76bwuQgRJzC3tZeH5iGPEqVRmm3yNUZ7JAmiX3nqcFRwK6sNqP4JtANceZHd3jyyC",
  "key25": "aWURH4mhqyhtSb4Uf4pyvwgeZpFVsr6SZJMYbuDi3tz5xPT8LWu3qobv7djKRi9Z2auDooQDwUWg79GFoGm3Wwz",
  "key26": "Vwz2i8tdmB63m1UoyfZeU8xfbxfaNzJVzyUJVsxKNJsp37LsfTHLB1aLHFA9nMK3EnUAD5W5XRFZqMGyYRuikxs",
  "key27": "eKwGAGQmqZTSbfmGNibfxEYoDYHdaaZMTs6CRcU4Zm7sfM5SUU7T3aHcTRVJZ2LN7uUwTYBz86VDvuPsiMEEXha",
  "key28": "4qEb3wA2PSzk33WRm5eEuvV9U1uTmjg2f4euR84rV4w8SgjKQysgVs1Q8TjdBboGWkqdLA92K62yUJAv8un3j54n",
  "key29": "5W4aRUfWihz8292HPCigKHEd1FzhcnzSmd8E4JsNnEcJXaYzeVQS9aaQZKTuum1bGdbcGvwEvNwTafsUbysJHttf",
  "key30": "46PTKaTgcgmaiZaEoNo4sUppcsbzNhZk65TcXuedGRJVZakJHkkVY2V9dMpCThC2sLzkonoV1DvL8ZJ3cQCohBm4",
  "key31": "5fu4YEnpKY7sU4YLWjMyfNrHWUkTjbsswKndWi9z6Q1x2ysk8pWZ8ui2yDfnvW1U6tQp8g3cga1eatWwZ14oTcfv",
  "key32": "3hF1RqRETp6GQRXFLgiWkh9EES1GZaMMGP1GvEKbbhFkTrERZDoMMzh98EHB8Chc556XY1FUZZGEj4kHZ6Z8poX6",
  "key33": "47DNFaKfvUckPpoVCbZWS6QNSYEfj7S2waPfVDbZW46kW4J4d19tGvZCCoxm1SApEhKPWVUHrjoBRyoPbHMKxw73",
  "key34": "2ymRT8U76ZKJuj6bEkshahjD2FDTzJ1i6JcoMV1ea47eBrmGa5Nkjc7LewS7YpxckaqBG13QoF8RsxyyRcsrSpZy",
  "key35": "3gh812RS7QLgWZYEW1C5UMgYfmwYtzZRHMKfTMRQnqGt2vGxVPnSesvGmHuEEX4pbF2ES8w1wPDF71e2XvefvzLs",
  "key36": "4PQA7nNknB7FefH21JRCpVGHY14HSQkP3zUre71H8Ytuhsbn5fCrharn9R7AU6aJ8z1j54QCUHQTnEaEvC61jDhn",
  "key37": "LQPHqM8DCvYoqKu2FVuieK97RSGFbXqrWYtw9EytNpSHMJPFWBgXZF5z5bXgG9rGmL5XECmsbT7KUHSfNE8m3Zw",
  "key38": "4MGR66XDWULdCJ8H4db4EPmnVXNAsazjgHbCVMd6GtNWSZfChzuK5Su6PBRY68hSmztvuWaN9kZNaLuvysYZZ4g8",
  "key39": "42mSHzRycvzpDGNZY5AF2BQJXQNVojKaCfg43C262Cr7yy4uPvQgRbK6EvqdGdFwbbnQnNXjkpSokatWtJbjoNWw",
  "key40": "9zWv2JFC1aT7UGfCHWhC9zDPypyjKA53dgCrNKxnw4Fx99TA1zaANDj712McfaLHqiVaQph3TkocijnLc7H6ENK",
  "key41": "3HLHRwznqTxcgiNWMUh7HdAFuJM41S7Q3acGymQCKtqrfQncLdjTENj6p2osN5aoHFy2aEfbJ9kMKbzbPYWcXGC3",
  "key42": "4cePRLNY1jGQZdvWKMfWuRXBFkQcpCwHC2b2RjAZpMzF1aq8FF5n8ZaEtnnBdr6MBUXbUt4qQZRoQvQxsG4EduET"
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
