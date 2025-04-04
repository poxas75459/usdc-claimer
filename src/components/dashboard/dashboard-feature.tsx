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
    "3bH5BMQp31Z357B8bJcBVHEeBibXF41WZPfZjwQmJn3sDK6e1C6mgxQdPxCJYmxkpg5sFfCo6JX2nTYEWdBnhjtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M63Vmjq611vFRHnfYfiQQ5wZ5gRLGrQzw8sRn7FupaaXVZkA51UDxGgpyP2pfbJtsbGcYt4xf3Kf1LSBjaDSr8e",
  "key1": "mkqzwjtZwPc2Ji6obXQydJp1pTqtRHLCJ8m8CkEFb8WUBoBvcLRybWwi9fwFouAraqNGi8UxdMWbjW7Mm5pi4oc",
  "key2": "3AbBudcERennGgFMoYLmPQRMm1kcBx2SVLUoJBHQtKWcQtoQg2VhqnoSsDj8oYLgXSUck5yBFAwJ1EbeMiFvKLCB",
  "key3": "NsBEtMA2URhDrLxJ2ADNC6c4uRVpG36aYehKn9zZfkoF4VsMBFKDR25zP1Sj7Sdxy3YWVa41RNjKnbyJeHKqbsM",
  "key4": "5LtuWDqGeWLj7j41LQt8zBsxSF63Bg1LvG5rRkKY2V989brom7K7riXRg5B85ngzbQYmYsKo5CRBqm2iTTgKSvis",
  "key5": "4k1o18uLe3LcveXFWnU3kETkgQB4NpWSN9pTGJUBjsoXK1P4gGzC9RRnFpwD5nqu1bYPdAmbntqDiSNiZznMjQHS",
  "key6": "SrQErAWzdwtV3efAojjvZNbTAYgiAewQm1LX6s1Fha3pZjMAmGor6nRvrvsgsf55fc8VAbjjbjtEWK4JqMA9RSh",
  "key7": "m1vwThNeFgfM4MvxV9fwK1T7jdowdAQ7Lc9RNoLeFZRNFqx4Kzd1HR3SGahhbJnx69bhB4kowDPkh3dZtVzZXhe",
  "key8": "5NpRbz8riXth3pBnAgodS4QyiUnMHKAzdPssrJwdG7oRfCUpdLM4nubPP5uL5g7Nyi3yguZAbvR83U7G5HVKe6tu",
  "key9": "T2H8Tt6bsXh21dDVu5Vnznu3BgujhGd2RccfGiSC3eGgL4ugPCiGxex1WMJnxC9D1jDLn8TNRJT81P8SyaHPSdJ",
  "key10": "58ndzRatokaSJcfzYf3qk81GDuE44c8xBBPFXBG22XUZYuByLtHDtRsfj59saRihqMRYUFLYtdASdrFardRZvA5z",
  "key11": "3zvgQKWRzvjqKQaWGDPfqPtAk9wAL1MadkysJyx1hiamFXpympb4qTqmeH9AN2pC9Ub4LTfcCeoQBbBtdVKSK8Mq",
  "key12": "p9wjomhDmT8FU5PgpnUhsGwNWvu2gZpW7kR2amuTCUfpW58j8L629aYkcpuTsdWSp4r3wyAj4b1kFy2VSL7iJsB",
  "key13": "59QhPtcPLhBw7yrrAKS6194DxvU92BxQN2CpGZcaTixpyQFQmkA1XASpNp2xkmrNSYwp8JMzmrVPstzZ3gPGhhxx",
  "key14": "5EMPuc5gqLFqSeBnH1Qi2VTkR3h7gQPYVKDiAWgxc7fTpZMWZGxpA6SdyJovXvGtzJrggdN1MMijQ1nobayk6Yfm",
  "key15": "3Fve2czGUW34FxkfQesf5JihJQJoPioDXdGgrf9JU96q2cg5vbwMiz5NACbQnkK36EEtnMjE2QziPRzaTN99qr8V",
  "key16": "AR6KbwdXWuaEvmeLY3GMwGwE6YPMCFSzBYUTzXJGoRHosk6jt6ZEqDDmqsRBt7LxZmRhQdZZj2pkgjvdNrWU635",
  "key17": "XzWAwrtqdUD8AHZ1yf8eQvPTqN7hsvxhC1zp82uxsEiXFUNvgmaJCBnedmYgEm9CfSMMEHh3xJnZkBVv9fSTCz7",
  "key18": "4sGRV7k9W2JRbh72rsaEyHT34nrtzrP96qEjiUN7FwyWQN4nNLiqQvujcKwSTmke9mT1KVbsK3rTMDwLXFTgYPP8",
  "key19": "2watV1cqsXLC4yPC1FStCtwjpqkwJM8KaENXhfaSTrMDVhAJii8hPY2QVmXpJNYJ3iR2b2NB4YNSjHyfpc8A7Yhh",
  "key20": "65PrBJoFYx1mEPVzHSJDuSEtMjg9KM8uCzwj6g1U34E7iiv6T5ZsedTiRRcJNDAUn8bNFABEyzUcajEXjoZpujaG",
  "key21": "4dURDtuBrdsp62XGVPurZu1w2SP81BCqZwhTHKBmCF5gNUHAH8oaAEMYQ8w7s4TUWC7nXmSVMpWbjMmZoCz4YCiF",
  "key22": "3AcDkcqZdkRM2Rav8qpxHSPE8RkDWRyb5oKDcH2zPoTCPiPN2YQpEBLs2TPtxfTHE51Ux4D5vPLjSgmw4YbJo5mR",
  "key23": "27tyfoxG3uERm6ajE7sZZZ7KEnaf5NztWBSD62z8AijcbAE7DJSQRyRatMLE6YFfYvGgvobnKut4XmayCfdtAZde",
  "key24": "DK7wxN6qQBHhNcurifiJYWg4uXfAeTDhEABET15juAX8dLL6mqzuxHWcSXvikTZyscf7ChqHbEmLNDWkhtLYXCn",
  "key25": "5NLKxWUfMntXwSaDuMx58QpPnu927xQ8Z7nrumA5SvujhQPPZ7V7szHZnsiYHPRvfCSwbLRiNLqjc8n4QSuvFSsm",
  "key26": "4viRKquyMex2Tgre5wCE7DGx4YJB8MDWk2NpSt3ZnUtXXaXLq8A8iNp99KmE5rbtR8fQtdczD7fcCUDCL2eStPgV",
  "key27": "4de9YY2SQKhR8xF9rDV4hNb2NHask4LgjtYkv67MwcUU2jgXuq9VZujF2jmZ3dYCiMPg1mhL2HLHRU9t8ZE8C15z",
  "key28": "4FB5Nmb9WbSxRHDTNyJAZiE8BgT4xCE6Y7EutqfNakPTo5NQtsKgdot7yeuWTkYabdoGCcwdhcjPD6p7UDXk3uUa",
  "key29": "5y3Z7aGb8MH9ptVQKhUbdPQeCaEzK7W5ChXUUDfcYcaCjMXW6175kx7vcVKudLzwjycCj6GfZZxDW37wFFr6Kb85",
  "key30": "4HdDjSnGp3KeQ117gDUA5hN7zriooVtW77GHACRsBifahy1p4qVPLhEWCUfri5qxxgCrfiuDsuaDc4LE9wmaL3Yw",
  "key31": "5k6wRw3MtAcLWo7ywV854ijSi1Fc3ECEWv8nctXFtHuTEojsZvDUw3Xiqw3YKGrQJvDbmXymkCN1Tbityven5Uz",
  "key32": "2kia9VNQVrfxpkMN2ucydCwxhPmwCoLxpUKL7iXSjhpaJQdipfvdJwYp1zpMpuFiQCqp9RyoscvasYcM1SXz2RAy"
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
