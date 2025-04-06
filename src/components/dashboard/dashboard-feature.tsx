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
    "66SYSK3CwV62WdnZT8VC6i1sDa82ygVrfMjdBLMdpCxzM1pM5sUzMhnQasSHpiseygYQYnFa5DeX4Hq3nEaGL6r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVMpaX1ZKAtWGh3gSPuhj19B9EKzPWW9onXBvfzbis1mugoSj8eaKREtn4bUYoY4TgKYbNBE8aC6sKuFLGNaLxU",
  "key1": "9gZEPDNn1muaCEH1kMBpwm8aFHhomhaQMrq4ZHPQYAMPgQwTzxAy2ZPjqbLbtQZJwh9tUhYpqCYhXZqSsv5awST",
  "key2": "3zHyEHzyjbtQXoTJjWfLFLPXwWRaDP29WkUXLk7WzeNb82XiMehG1N7umvQm9tfT91YF1TSVvKoXDMZ6PDYgDXPF",
  "key3": "dMUTrVUic45KEGQ51Y3Zcgzxe1SZBuxhhceZz7VUMcW1ADgj1AyyKsUXeYEKbTHDqG55v95aNNw7hgeaXMUZiLn",
  "key4": "3vkLSvMRR24cZhM77k965RYWj69Der7BcaxUztNYDp74ZsBHdCtgWzMrBHj8JdvYsuPDfmck7XbGGCMvxWyJ7S8A",
  "key5": "T2dxNvJ7CDucFp7XTvZc9LTW6r3SEWTd8De3CH3Z3576QWnRKnVaeeiaNGXFctqnvdofgjbEu883Snu7GgGuHGH",
  "key6": "5ymbQeUZLrk3iBjMVogseqxZURGhythjF7rizyvwvDn2NwUmVyXoV9jE1wknCk7ctgQ7A3m4uckwtfZmodcSJFkD",
  "key7": "3Rxekz49enh8sNN8ne8XF5JpVFDHH2XsmisSzpQbjavBzKmKkaPnUfDh2zf1eZZ3RgqbYECyTciXxT3tursGGzeC",
  "key8": "sSkQ3dgZAim93m5hXJR2LRqMtUm3tFezF2Z8CRoMobzjAHjXMHwERzPdxHtnUo9KnPxpZ5CLHETiReUs9aSVypv",
  "key9": "21NDnYJBEfCuLpYfyF699Zm7vCJvrYSu9K56ts8F7pMadxrhRB8Chv88R1TZNt1gvWxEh4rxJDngR1MkY1kYgmYg",
  "key10": "35R6qjkTi2oaGRKUwg7n8erZHoo1BFNLpt8AdrVGQkfCpSoTXxtqPdv39BdK4vKiMCcmi4M9oF8qWLk1H9gsgfT2",
  "key11": "3fpd2RPJCMKykNND7vqm2mPozmp2FAD3B2iZV5UxyxeqWQTvF9wE7DoMFYrGqppjep2R7B6WAW2mU3xrNniEdyzQ",
  "key12": "2M5UKLURrK4RYLyi9bR9XJrMGp5ZBpBPPCxUra8geG9dGiD4tGzWRt7mWNoQytoLAWzkxiSTwbjSMiUKjXjADLAk",
  "key13": "kMeVeC8rZPDrec6LmEJeoGG11FdKyh1jmA5XsFgRcdv7Rd2DESQNRpT9qwXv1L4gQiiKsFQ6U92DYnk1x1Uf1qS",
  "key14": "21hmiqEUwdpvMLju1H6VTkTKVRaRgQRb9gjdgKFTvZyvyDwZkKiTAxamf5byUZ1QVuTtb3vCMzCRYUu4AFs6TeEu",
  "key15": "CuqigUSkidA9dr3CWGDVhEoTMjpeNcNCEuBeSAhpHVdgaFRzMuJKabiTJNC1PKbUMSNtW443tsEaGYiEdbh2Hwb",
  "key16": "3GfQDuxeUHob8CRmXTLr2QSMArNVU7y8WXxfbBwvjb2td2zgziqMc3XamimjapSgPUBZ1Kq8d2SrB2ofnd42T1Hv",
  "key17": "3z3oMzFaspzxt5EtKQgvwhSw5639697AkKYmhEnvdJrVi4KU7fr1QhnuJ4AXRMVmafQQGVCVZ5WH3jLn7KHxJqXG",
  "key18": "oDKGvPsrfaHff1bQEBRZLSQ52Nm58XKbJqoHrEwhLtcX6ijdH9qP9gDZvzRQsuBAXakuzVP2EfbNGadUNRc6xGm",
  "key19": "5BnwHKkSbNpeVEs2BpaVcQG2ncB7UanzXaCi1oSMWEmq2pckefT76iUJ6SBjjXUqXoVne4CzxCrjB6bkK5v1CCcv",
  "key20": "2azJrJiYR8Axe9JatBYvFS4uw127Eg18XkKQfGWcRKUbhoQPKUprhegPMzCKmqMCxCjcaML9TtC5oyjwHpFZp66w",
  "key21": "3YjtQen7ZQF7u8DAiBjEeBGnT1phAYcWQuNAmxeDVsVgXSryh3JKjA7PNYbdRkt44xpHaECiq66poUp1YGA89ppT",
  "key22": "25LHij2uhSrPsRpdgXs6zFpcaM4YxnSwxCULkAuJ6gAY7uAWz2GcLVfBTScXP5vPQ2owwmoehgFv8ZPXnN3gDkmz",
  "key23": "4uML3VGEwLcUSyNPZTbWQBhpF8H4FgY7r2GxwrSERjteQPxVa59xA1Qv5gdd7mpX72r34a3ak7RjPZ3ABSzHLKx6",
  "key24": "2aMWDkAycYJJHT4UnEGQjjE65joaj8RZ6ioA5sbXYhoJdDfCEoRRKXgDBtmaYp5yqM2v2AnN1U2jjgo239wMwGwo",
  "key25": "4soUKt3f2bg6tZcdSLN5xCcd8JhjDiMVnxeu1CKDRPofib3fuR6ocZDs7n62crPDSCtcwJfMyKZpQZhVxx6jCvsL",
  "key26": "676AuwNzkKKm2gFhYSmT1ftdYSKRv3VpaGmJVF744G7o6kTcpX4tdKBcchAhNj5ehuivQ9JKcRtZNeaC7NYa9tQj"
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
