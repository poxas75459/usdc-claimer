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
    "3kCaqHCMpErGTiri2dj4aS4eUrFhVDzdBACnEUmVdQuEikTbbJpDH8cM1khrYmgAYG4XeyS6EAGWBHVASL11GavC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JGfeaGpBrVXho8pdStx71RDMFPLTdboLUjBgpywhjsjvyCvEMJ2K1dBKPg9fUEddXnMxccm7oNd96rmpVJH4Ek",
  "key1": "3ecfLmkgc5Xnc9XPkD3Qf6xc9KiX9suETdb813x7FqwrC6wkTBVhzuptTN2gaPyTyg2geJmVb6ddBbJ6ffZtAutZ",
  "key2": "2M3m1cQ2xGzKW3dGP5MsCpoZXGai1TqvBQdez7H7r6y7FXaWnvT27n7Nrii9nKFpB8ZrxRdTEbGxsniTukrwbgEs",
  "key3": "444o8ZPZEwfpSSbVHyHkFz99DuAJwheLNkjSAENyotpCimnR5fCir6Es9gASifsn3Kp9F9VEPK1EAWdKUkvEuwCh",
  "key4": "2bY6qCkwzmjW6EyoGVkHwevZdCY9KTudRT1RiSk7oErkAKpTS9mGtssySMtqABJLfLwFcQJ79KEqqxmUETtKP4S4",
  "key5": "56GUgfbjRzvtJABjqMgGYT47gHrwNLR7kRzBCL66YHhQiz7Fb4umLpkEsGxDHmBgFeyUVZUzVHCk92v2ZCxKtnt",
  "key6": "5dQ4J9PBA2iJDdhy8dbWWFv8UVNFxcCC7Gwc4jhR4EphZj4VmjVTawzYbbSzkrLCvE5aKQdM2PC4VtfGJWUVUjcx",
  "key7": "3H6GkcwWjNZMy3QQRPQCxb8UJ7NtTKkBzjTNzLYyrDwUCYz5S3BPWMQRaJUZ88BcaBY3tcyjAKvds5HhrLoHde7V",
  "key8": "3yn9zVr2kQpVukX43tissDaDaVW6KNzh9LbNHziNSrE8JoQ8NK7Tkgm4jGvzZYxod1NRS3g8VsZVKjHDF945hHSN",
  "key9": "51pVEoxoKhX5rxdrHoGPh3nHCbVCJzmFxrHmpnyZqNtgDUmx65m1Hymz4ph97cv5s7yqVVPFeepgsdi2fmQ5Dd2M",
  "key10": "5FwwcabQdLp3wZJMZkKHdP3pJB2EXZRyCY5DRdq6a9iSskoWCLkgTmSApzU8pKLrzbvn4YYtuAsvQuH2cNALMVEP",
  "key11": "9AY6XoEuvBfAUEJ22LX6Yap2a7tn3QPRCeNSPVDzujh8CBUHKZTLmCZD7yr74XkQtBSTERb3sUGdVxaQtxZ7Jzi",
  "key12": "2FVHZN7thXfg55Kf8WeEgpPRaonXxUDJC7ipxLhmPyyLyMdPFUbTi2MHxSZFA3QSxX7Fb2zGUTLSy31bB1JWsswJ",
  "key13": "5nCfb7wXtaAXciHtUNhe93JgrT5ZVcFnkcjvW5mL5MFk4ucmHKKVqSnFsPFMuigyqJi4CKtTTeS8MTNasTv5GcU8",
  "key14": "4r6S44uQ4PUQaHXaYp53MXgGnfwGhQfLcf6BfbLyAV18UDg71ZTmYYLnYSJbYbcYytp8ZhNeAQ5qXaUi9Mid6qhy",
  "key15": "8B2UfDCsuYYDrVDfAHFs22cgTQUAzcjMhTu99zWy6ihSzZJ6QgznB8peisHujhFsxXvhnXy6z5BwSx8bkCNk7eg",
  "key16": "5fCreGF64x4GcSvy83RyGfCcF7GbnGzyGwXsSBS5JXC1HLXfqcanx8PBYWLcisV17Jug3eFHrCKVLRYULDmxAowP",
  "key17": "2XvsMY6GCNWn2pN8kzmwJfL7cLyC2r3SXnuBzRNnopttEtNSGSq3pnRvNkytjpQkZz3vuJ66geBjMgz3CtygWYmt",
  "key18": "3L1McdVhieArRajxk9xigCzReRTuWUjzfseADA4eNAwume439MngnjNfNAzhgKrbxTcNKQU4evy4EnkncBYK3XJc",
  "key19": "3cvpP4e3rUVmepF6veSKtGQtxMuDUtLBh32V3XuQs2KxHK7HvcicpGoBLFysuYUrE12Kvp9yFHaedNwmZRCVv2fR",
  "key20": "3189dF3wiWyzCH4P51F7EjFotAM4UiBUmNv4mmQ2AzJiBuybBdMAw4HM5SPJUM1gSq6dmvzN44pQqAyeaHw4k4tw",
  "key21": "edaTkm4FGPovmEQEF1oPhmrGt8uZc1hrGdC4yymEYXWWrbMXUMc3RoqcsXNq3oJ4Bx5K29tT4JjDW6ddiPs1MpZ",
  "key22": "4za7D2y1xS1xAzhKn9pSgdVVK6M88rvh7da9EmFQSiV9xeBkhvCHXZ8bgHo1sCHbSqKQhaoLAcLUH3HAbieaBeRQ",
  "key23": "5ytg9ya6zzdePnz8ABaPfNqpzDvvBBsNP59cRQcbiPsK9x3XLrvEBjoycJ1epzoGf3Vu7PXBeEUCiP7CQcU27NgD",
  "key24": "V8TFoeqEwRqg86qrxdjNKv5nThCvCcnH2eng1kVBeEN4EQkmdeDg1LT1G8DCZtoMjo1CW5QiWgcYyAntnRiA9bQ",
  "key25": "4BTERSJMZGUQp3NUXPXoBUV8H4JNWt2VB6ui4RXNdaVMyE8PFhUJDSpPLzpgzRjuA62J8QKDy7oLZaoQMQAY8Uz8",
  "key26": "2g2JzNaum9u3UhZHzurUwhPWSBF6F2vMhg1mp4m5jMaet5SDyUGCetXGzBadesUivBSg5PAxVfpEiovbukgQhxu"
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
