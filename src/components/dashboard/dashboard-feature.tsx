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
    "63EGr6Lc7BNrFd6jX5up9FAYvUSKDxSdcSQUufUAQwkN4wkeLfmDg7CN4ha8Mxr4Qabnk7boJwSYhGf4EQp6mbTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uV4CZFU7aqsBaq1DL99bYPkpVVSAYh1q3Jbah8opQ1Qr8LXF8FHntEH1rV1bRS7aGaFC1anr8THcqLhTj8aysVP",
  "key1": "65oZZScDMi68ct1WbBTmEyMFWJAbZVdMJTEL8x1iyTCoT1Ece6JQCwN5dYRxh6fHxKnftmQMPLuxCajfMSQuQvPY",
  "key2": "4sxzjsQdozrKjKBPGoaux6rr7e6gYJASp4Tq8EkoPQsFv36DfgYnPe8oQSkewNsPbUqNuVrBW46Z1CgSaDWn5iLG",
  "key3": "49aTAmg4ShkY5P2iKrheYwQ1TLBqf6wyYRyEco2gR7xZjnkf6jkzgfjSfDUSp8pjdUTzq45dhyusLcnVDoV8ybx9",
  "key4": "5Q5PgK6K6Z3LczXSvxxLcefbY455fPTrJeYe8zzmi6RRS4jpky3pN2ktQBZ2DEqu4KVCivzodHEz21kFQiFios4n",
  "key5": "33nqHBbiRpoNofsMsYbUt4StzfTX7YWxWPjG9GszZKhtDLdYzqEWfaj9uTg71mb4mHQX1RoCC3Xi17xwxggk6UrF",
  "key6": "xrhYNAv27PzQhHTVBNooHtYHvNuaoDGKNPqFghtWSeWHBJLH6UG8sTQMmqYBe1u15UhCgQjK5e8zJ8Dg21mEhf8",
  "key7": "5FLJxaw7dogMxQzBu5gDsQEwySu1vrFdvHxpFP65giQFSZGGsT6p1Uj8n3GX6jdyTPPiCWfDHFheVQcMJQsPTqye",
  "key8": "ndcE4BWqKmABP1NwjkhHckGAcN1moa9aTTq1vUMVK4NwQBXdgSJvhoYHi2RsMRMcvahQLH4WAjWTnsUE32jtkUW",
  "key9": "3yxf9oSqeBmfaUYNbfg6TX3ohKavDshm8vcZcErj826Z1P1nZwDK7vR4ngwETaUkRh3jBqcNf3ZCJQ1L4hEk6unW",
  "key10": "5UGX78tKj2PYugbVm93zr7oN4ht9euBkQwNGCGgtyVmFxDGT4ojz25jrbrLMBLbbDzGKiGmznvS2moXv9khoULS4",
  "key11": "22vtb6noRXBL3FexNVeVEcYi6Wmfqj1D5zdcmZLKAAK7b8qtQMh3D74LPFkLtuk1HfhH6fVqcWPKVApzvQGNujeN",
  "key12": "2w5YMznf1742CiLiZEvev9ap4GPT2cHheWHYA3V4NfPU5uam1K7YEeXq6DyDcJWufYqweAZuvqCGfyK771wmZvqf",
  "key13": "26Wrse6E7mvgCXkqBGoPEkVHPSXtJ981dc8HVYCW8CsjEov4hJGiuCJ8NbXXQ83MXTRdYeQit4zGt577jbV7eCES",
  "key14": "j1sfd8d88d4XxMpteineKWyA3PHpTc9FyHBdSTPWijvcTXocwuevnyqS8ESTM4TS6CJ1a3CtDeh9KbofngghnbQ",
  "key15": "5siAkSC7rvCxDJBuftQN2r8fBFhuaQvBYsg7WUU68WjSuKVPpCj9wUbMAQgsMrPTwjp6PcvsqEnokaYjhJ2RyF11",
  "key16": "22t7dEFSBSPMGHbbR4dBcBeBrcTSCS66XUnm1jauCCMjxNX48YniJsLd4uVfLYGcCFFLCEu5YMwnZqwxRXxceF84",
  "key17": "48eCC6wsQjGvTCohuXJhCfvVjtR7AaTqCyi2CeQGNW7FvBHrrUnrmCzLr4izC356KaDh8ukn2jeRdqZkhfmyREbd",
  "key18": "3qXPQESbAbJCYbb3GU1AX6S6JpUq3AT6X464RfcqSL1rfwTDLEXDc46FnRKNJDFYD2DdMG2GiHgvyNiaXbH8UiaD",
  "key19": "3wApsrip4ZtGGxLTnNYVsfEyRqdqwDEnbFi6gKzHyg9yNuB83s9nfqiUfCJ1qW6rDyaQW1ftguYer18nb6JwQtZ3",
  "key20": "392iEwVuEgDbqJHwXoLDuWu69NHD7YUXzEoHj7cqRo6tS8LRPe9JtiWRyBBa3X9UUDmuv6KSQ78ugUcG5VEZr8n5",
  "key21": "P7ArcohpFT5ptG6LA6zUamm6gmfmxnpTx2bN6y3KcaHpkYmE2BJUZxuwTM28ygyJgzn88VvwcMeYeYs51FPEQKp",
  "key22": "2DcgmD3pnEiPs6wWxX58CXnW9CYp8bgahrb8EeQSeTXq5CTYgFK2zMvfAphRVfLDggrnemy4FxFPUMiPb7wXfTRv",
  "key23": "2LYGi437zoP5cAnYwHZWnMrgPwPjwjpxy48winymYiUotmKEoYQRGR78ec4EVFL8P3uUEDGCNvzv9KLi2n2o2gUA",
  "key24": "3BTBboNnTu6mcaoKHt4fAwtoxq1MPn4dC1fDkewPCuPHymqvWSfzD1fK48vgGprb5bks4hv3hhwSPSVmewXNJEYN"
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
