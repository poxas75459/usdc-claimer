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
    "4yd1eFrwdZovfeB6KzrZfjoCES8NgYf9ekGBL9LkY6bScxJzMPMAfJkrcLLYF41ESBo9cVDrMrGgvYjpZZDHNnWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjPg4rjSa6tGhRxmFMT862qsMHxQiVFXv4TdMgNfsdgZyRX2srnoZo1WetMa9fqrH5g59rgad6j2jDiHBZsALHQ",
  "key1": "643SSQx4ZBBv57jjt69VioA4SVvox8pMiBUAA5SDwZqMjKZNYvjFt7V2YQ1sJ6NePyP5WvS5kRBRo88dLYGUUjcL",
  "key2": "3MePZBj8adAV8DFG8WkS28QwcSjtW11hoGaghP3iqr4xZZ6xeNZfaQmLP9bmaPQoPRV1MocsaUyAX27YsBFNAYw2",
  "key3": "Ur8vdibLbKcZJmrrf7Bxa3ftzhJ8KorJtJJuShEpDNtq9kLxaL1tycj8e18bzehJx9wJhbbSeKf7eonf9DfUQk8",
  "key4": "4uZxhQ9MdRQq8QNQdr35DxMzTg23UvuzEuxDPrcN5MGBWYKw64oFJRY2ukTx5Kq7LcjdAJTXKrd8mVnbgTWZMRg",
  "key5": "5zcPUgZh6sCyvAnD9HvmwxTfYh2cWb8xFyDFQtb83Lrjro4daKdPmLYmXPzshaH4StoFjbfSFCrT53rf74ecJScY",
  "key6": "3oC5z9om9MFQW6nMidoCsg4bQhmXvCanqKCRHUNPejhDRkvGjsVWA54pCWNQ4aasLZ6ciDuSVsAxzCVXdEdW3rNg",
  "key7": "5RxNcefYRMoZwGKJgg6nHSEZhTXz7sWAV6Z79yEBKayFJULKMgZMdvsRizezjhWSPpBdxh7QEaCn2eNgs9mqYSei",
  "key8": "bdk68gMTVFfr1LgRrDEDUrjmPKPWFtcXrnLdwZHJmLYo7L4ayT8iwVHDQ3nwyrxrigjWiVRN46mekNZeiGajdfa",
  "key9": "F8qPhn5Y5u2JdMP4wWcdkdiPM454yyQtQZEagFsXegBhXD4CqR7H6cXfreHoqUPgt1bwQdXSEc3NCcwG6CoeGvq",
  "key10": "hrHAN6sNEvYsWEGbo1B94CwfABPpyMiENxqZZckgXs3TPsfEDQjgSRRbVrQ6jKsiU2oj3SGKQ9Kg1Dn3jVyRxjc",
  "key11": "27EoADUuGCocqEmDtTPupSPeFVwzt9iaQWrZ5WFdk5CthEuQRfoFkXiniJJbqFXjfWnfFLmUshqEC7HnMwVdt6Lw",
  "key12": "4cedryVpSxdSPM6xsD4VpLxsKR9P95UAypVmN7zeMLmVyukD7J1nfDXG8JyHkqFgfziyQRS1wNL4kKMqRrfHMkDu",
  "key13": "31aP2CSHndztbSsWnLXvGUx78K26S5y5d7BRMbyWoaMPMJ4qUhzaqn5hKNqjea2r8TKadQiBUSoMtJn175Npm4P6",
  "key14": "4kLYgWLunocgkb4uKNKLHZ7K2Pqzka78nh7Y4Lr7PkmdYq14DqEQuv5Cgdo1NbmGgZMwTbJ99qnZTyE2TnmVMQCW",
  "key15": "2cH8rivLUrBbAjbY7QYXJPnSCC1zd4iHis5zKTdDJQdibTt2ZxnM9FJtiKycBmDXsCvorPA7m1yJG69c2BYizmJN",
  "key16": "3GMZndZfXern3EDLCEGEuju2HyZAgLABm6WkgEgs8D494VV41YGRA1k3SJkGToUWUYWPgmq9tvdq5UGhiEBVfybq",
  "key17": "51BSPbErnHxZ6czMjiaREUFXB7efprTPEUg5rfMnPyPWy6PvaXEesDyN12CcZqD3swLrWQtcD63C6aSPPmiLvKR5",
  "key18": "5UWKbC6SH5zq3yNRVMyDo1tpteB7PpMeUVbNNRdwg6rpDHfQ7Q3KtTp3ByERvUfPM1uw4xT22gyXZgJwRT4MqxYd",
  "key19": "5mzd6Xi2tt6erjMAnWD36X9C1fxqYSgUoRK67KgAFrcMNT4ur7sry1pXwJN6P4FodpAmSG59zbhYotZrMfDM4iPp",
  "key20": "4hdj46EmfoGeAiHNaTrZrw9oiuY32bG5dK66UJ4ZnvjHZNT1SL8uUiAZp2GZHGQoQHUDtaLid3WsGkEERHgzTLiL",
  "key21": "4yhcytfsFcwxMinw3VLnqBkbSRHb7LXLibYZ6Pd7Sq2dWfnfvRMkqzsq9Rm8DYCwiUS23gM5umF1TeNKbbdribkC",
  "key22": "3mKDFZrLjxjrnjujSzXTtVKCQtPwvV24G5TW1EQzvytZ6EznoiGYsMBhGZ1DzxTFiLEMTb1uTm9wa8qGJC8jNJRE",
  "key23": "2TkNtN4bv2kuGSK5TzB8FNyr8hPGMCEHesyjK3ccygnYi8o6hm7gMXakqnZnM9981JDFqmELnLARx8AyL3CbWkMg",
  "key24": "vDLT5kNtJjjxcpVAWz6EDH9SEassFDZdXwtdaPcDYPB2Krv64URsdue2h6vZRndVitqc96tRyFnLfUwqZDvWNgR",
  "key25": "3zjZ1PyG8VcVjbsgJMNV3aDvCCM9LDScdCzQAJzKpUZaT5uHNu2PeQCEbDMdtHor5j3Qhke3Jo8Ddd5pA4475vAf",
  "key26": "5xBugzD1zkRjtdB7KjqGy2UHRRapYUvMfziLfZWAG6p6aPr8TPzBx43BsZunmAZwKdouiAhnNt6ZLs5FfxSF2TRG",
  "key27": "tC71kXhnDfNgZp8UZRZTbfptvY1VcfA1qGrZwX78om8ohxoZ1tQWP5aDJ7DLVbjreTAD1wzDbjXHa4aTeP6MrUx",
  "key28": "2BbFGEYwxvuUevHiEz1KGRozKfHLD3a8ExZKnsxydQsDiwriZKZ8q5JgfrqwryCQU7JS69URfxmLNV6fKkBGyJKT",
  "key29": "2F6gsvuXc2issUp3PX6HL8GjvueKyMS9oUYPWQhLUvavPdBpT7qgYZjzLM4ozCezhV4QeWNttMNXhYVE9vJLkNYm",
  "key30": "61FvVMqRFWAvTSfUmWxxwsWQBSvy3GrZ1e6acFmUDycMDCGxQDSFobLDCF9JFagPjaWpHFViygLYShZ9WdKJqNjv",
  "key31": "3Ruazocj6Dn3yvWXm73mMKa5w2qi5vVqWJDiph8afuHfv8XeEzm8pi3JHsCVh7PrS8NxfCRnCahcyFDTtayStiYi",
  "key32": "ef7vpohZcTubiSBTb8gSBaNySRm2F7MLzFjEkTbgEu34BJZVMaYRvJkwCiFgW6iVtkH8TzHAtsUPp2ZzkYBsyEF",
  "key33": "uuYu7q2tDR8cg4RLcUJgfDpEFtCLnWFX5uTiQodykPcjmwGYojkanqaM7fL2fG7Z4eUexsM7nCi4gmca4LgWNim",
  "key34": "32waBMrCFSPpYviSsPryJNm9AGhdKaCXYUA4pyrdS4Qi2XScrrDptLGVfCVCghSda6fAjaJ7L3exYKToHRHMgzjt",
  "key35": "3KGcXXttwoHrHhj6sUxbyzsegRKecSGFt5qgSjAP4Utn3LVNwrCsoh8JrKCVBJj4Fo5Xu4RKwwSg4PpgS2rwzV4G",
  "key36": "3G3eQfYJ9QLwWSaNgwoQ4Jnk5RcTbrX8M4g9mMwF2rR4YF9EkxBYTyjxihSuvHjo5ACWQdZ3TyLZUibFP9edQncm",
  "key37": "29ZCm5XXKxNpCJELyeKmgeLKCrGpFDCKyWULbbgMesW8HyE9BBp57Ki9W2H7eAh8agLhKye32txwkkPvdP36XDKA",
  "key38": "47fuHEMNvLKcV1pbY5krC7K6UZ3qU7EN2ZY8YBwtLo4ooYS1fiPQ3hES4HKF7m2aeFqMi7t6XHY4K6tQvTXBnh7C",
  "key39": "3EETxzmodJ592fWnfGWwoXYWRLHr6roKFzFugrhJ1fLFewzs9nVGAequ3YFw99xEwHdJe1WMBEYbwsSx5126Ds3g",
  "key40": "326ojxZWrngjr9LpAC2uk1W2CFAVABwcRNq3UJZG1ysAacHsNveoYX8SyH1BkSkFhPPQh4fYGZscSuXhoScpaTu5",
  "key41": "55RZdBKNvrHHd8XcrAYwzLas8NRZi2wzU5aVkbRHV9aKHE3USA3AqRGscXUXsF56DEnQAqmZ7DPVhVam7BLPCqYD"
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
