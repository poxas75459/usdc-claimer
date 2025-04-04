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
    "61XgQWYpj4rWPwV6rnePcEX41fdP2GfVG7oDVrxBaoyzQ5hVN7mKSSUEVYzdsRRZytKjgSiCqM2vRif2s65Xt4WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i85TCyu9RGL2dSyig1KPMaNdXiR4iedxQ8fR42LyPLbbkesMNvHNPtQepk6UXZ7YYPWPSjeM9LziwPJbFn8twQM",
  "key1": "27qCGsoL3mpkiwVn2raZvbxAJaWdVW64mXar3bXn12mpmp3hYzbv27iCH7c4W88BR1szwtuTdEA2g4PeZQhGiejf",
  "key2": "62xVjKWLmiBsigeJZZ8H69ywYQVKUVgW7RDx5harEcPNghh7q7Ez1szNqtP2cz8XEfvB3ACUhWnU1ok2cC4BjQ1P",
  "key3": "GjWryi3peMwKFgaqbqCP4dpUWrnX7T9rAaMVnXYLPA2SaUBiXDouxrijpYQMHr7VNptwUuaMYBpbQkGZybpdRBf",
  "key4": "dgVWrpx4ZnSA5bcfUJVm9LvboGPoKks7voUnRwNctSnkPKMmFvL7gzpHY9aPdZuo2fqn3LybS4PTVhoPZVMRtce",
  "key5": "5Sonm4JRWpR2PfTR14hu7KzYwPeuYvLh1tgQtgjxHBiUEDmCEC3EoPmCanAi1Ter9EQmUQi2f9fFLSL4jvKar6Eu",
  "key6": "5pWR73uitm1eEFzbSjCnmyKoHbTJdcpm9UTGLV5RmBJfwBnNtKVBUgdN3vFLHYmKX7eKFdC2Z9Aqsow3uRXd7suW",
  "key7": "29hzZQX2StXetHqi54ypx4LgBmQruPmSpEFDsRpGM55s7q4vKsQXapCadTwaARm3XFW6T8p7rPT6EbiahTE4JYuR",
  "key8": "vXkwAEGRBBgSxSy3TWbDtTwjo2FeHp3raUv73NLQTs3KKqkUYkiqKQs7UaUeCHx5XnBpyZSWPGEUzQCxRjuJugi",
  "key9": "wJytwcvgBEbuFrTGaqyoh6ZSAb99mvxNcQSpbJJLzFVXRuLWaxTGtWqBEgci8gGRxPmCixYBybi2CsLbbTnJWVj",
  "key10": "3hhMjapLR6gKnQX71ja4aXzYFJ5TK9PFYmENw11YyJgDixr95GEoENG7LtjMy79zMU6dZjwjMf7MmLEbLR4JYryB",
  "key11": "356FshA2faxz6anguuAha2SzMkcexNYW9Tt1DaXXfdkvwakoQQJtivr1fLTUKoDvDX63VWPN8FNGr1T8JmM31SmP",
  "key12": "4uRCaTUSgFrn5fdaw5UhGfCcagTJ2Jm4fXRaVfmNSiqEuAzH9q11ozUofv2zwaZuFPwfC4QcKZq4qADc8pXAZGNr",
  "key13": "67qV8Ajf2gtKevQwtrhtJhSBwTVf9ReXQrgKvCiXb7zLYMbdPwmaTC5hpYzKuDKXYUSrLWbATsdJu11SbByrUHvA",
  "key14": "5jsbTuu12ukkWBdBqBM2pia2MxGnK1Lp9EooREtQ6zdpmbhs1cuLZBzwBs8RrbX759scZSSnTa7cr2RMWicgkzRF",
  "key15": "2xLjokiV6Hq2bAb46Lwg8A5bSV8Zd4LuDTcH3oAmNGcMS7ypoBx5MDXukhtDxtaxMVQrFWfME2cqRzcZT8atGB8Z",
  "key16": "5awAqCpHro9DMh3bWkMr9aovQrBbMfSqDixfzSmZ2xZd9CdWc2B8VWuPmNkjMU3Xw3Z6dNP4vtHjyeSJ2xKLGcZf",
  "key17": "Aea7Hnh96ztneawxfXMpr8k48XerWWF51RijX24camoXrr9VUussQYTUMKiD55j8F7f9evrBHTRpipzxgU6Yq1v",
  "key18": "8J76FnPpfTqsGGQdNqV6mZaxRD8sGaZdRhX5Uv8zdPw3NAsGMudsNj8oyTpuZKMmJMFqRiTjC2JdwvkPycXENeA",
  "key19": "5fpef1rqhoxtsSpj8Ri4rhBhYcDkV1b9tixrPEBRV2KxojDAH62SiFNhBjZapwDvMmz1KTyiweNL6g56Tjvme7tU",
  "key20": "5Zmpg3qcRNV3ubpr2v6ZfVuEG6kaQTKN9RJwXL8SUEPjWmbxUPyQUr9JATEAzqXnbgiRQYzXkqTt65VoDTmJky2a",
  "key21": "4Vsj99GfDmUXVDq2SwN5mZB6hrXodRpwKPKpofUkfCxB8cBKhFnBK2UZCpU8Dw2mCXXDEMV2EGAHkGLaicEdhP6m",
  "key22": "5P8tZyHMBrP1kpY7S7TpT61e6GEYQ7cd4eafL84wodjSiJmGgY8nyGF1Xp15HwNTCb8XjmFpH2xtJSKD95fHxoSC",
  "key23": "39HmqssuG9LJm4dB4HV6LDLque1voJkEBbZHKcMuEV8NMQ2gUX1n8ZuhNcp3ZCDvsoJygN3NNNJmndTtEVXGRf8k",
  "key24": "jDDEBtqkxixSp6s9HQD5CnFdfKq4vcYn6GCfDMfMFDbPPuPa4DD1pXc6KByAX4bjquPhnw2x23EJuj6Y3kQvWZs",
  "key25": "2znAqRt1B7UkttWqn1J3yiQZi3XoGgcLVsdJuRY51Mv3EYne8SmXo1dy8shxNKWX5myWFuT2Xq4SPREcpMspBBeo",
  "key26": "4dVhV8MCoStgAQdhC8xhwcYtrEXRbzvZjuH7yZX7Hi6BZzZioAaL5U53NL26MUgwnTyb3oDpWhpQaS57xpDHzrwo",
  "key27": "4nhb5cZKAUbMiEtm4rEMjHgeu6MUuvn6gx2wUtJAZXMk9fCyFddbgJGKxrpSMNVsec6Lgqc4LdCfdVf2FCQF5xSr"
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
