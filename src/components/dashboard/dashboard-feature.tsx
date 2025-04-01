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
    "2niA44aDeCThHmM7FX2Kd1gNeYV1aunyCVhSerFjkYyDApsknrLSrBrgAv738eSc3r65m4Rqkp2ogqPi9ATxSVmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXxfAwfCvyxC6Yk9Rv5S1afK29L3czE2g2rN33EroFGyHUnMpeCD11wUjo13HMS8bRZpaTZN6WH81mho8VLAany",
  "key1": "tiox5hZuUdgW6xoQjjNCtT6avxaECi6sVNRG8kMuCX5MbGRAfcJiPZTL3LNzZJU9pKQSHPXkLUdDFTDhG2uyp3t",
  "key2": "UsLTkdhMEvVHM9aGQYQkeWmq2gnPYbzuQc2xat1kpRqohGkPAYaSE22dzCQZPhaSm3hu2fk5PDUr3U5jcBHE6Hp",
  "key3": "5YAcBw2UVQyVRhETfbJCwaExoMGHuFpPrepJiHrm99nxVX8eHotpVeLJ4GQCbzqJMZNZPZ9uoJv8HBHg2XPgYvzd",
  "key4": "2v7PV6h1U5vdNb6cdAb9J3X1XAjktQ7og5qUc83tHA2cBZUqM75HZhSaSpySvqoH1q6H43a32pPpfzdzgijp8B2t",
  "key5": "5GGcC1wFeHh1wsmoYtbXzZ5Hccxm8QhrWzHX9rK56iyVouN5Y6gpm6dB8BNnWRs7KsuqgWsKvozDGonfTyV35EsK",
  "key6": "4JaHGLqi8XETyfDckPNTR34cJ8sgJzDUiMUgrDtSA2dnSXcT3QVUAqqQpXUY5w3qQZ8N5g4k2yqAx1YpRhBGi61j",
  "key7": "55YhnpuKdKyGY1nfwZAfWBYrWmw8t6vEdhq9g4ks7ZGRT4WGfihhGueSHf8Nc1varHkeoZAqf2S3nPEdkjxFaeYf",
  "key8": "Ewuh9TZmUBMAxy8eqM4dnK866pr2oeZ16pZXYN4zfDY58vEcKfVe2C68HgeogRvJBrqLApPNXaemxhi9EDBPXXL",
  "key9": "39CqkSMB67oRykWZYZh2swMF7hCdGDUJTogqtcbv65zTjgMBWMtKXW5EZcoTswKdpjvdQgA7Ntiag2UfDoNjyqPY",
  "key10": "3AxT6aKfaxtXPdtdBFvFMjGyzd1d91ZpKcvrjpPykKbpYhci4d7652sNa8VjnKUtnsFyFNh2PqFvrWq8SwjooKtP",
  "key11": "3j4FkfzoVaeJGLun2mW4XL6s3Bok9gNoQQ9YdVcnmbpfvdpBM9VPxUNtx3eT33ykgs8DaFMbUBGoR84stm69E6eY",
  "key12": "4rcZCy2v8Xn5jFyYbbPK4Bxy5HazYtpQvkktCYsAfXDzarimHkunrQ6ijb7UwqMw94who2xK6y5fhS1venyGgyyM",
  "key13": "5AQX7Z7C4z7rJtcvRhoSqPwfUkeXMudtu1ip5LuigtAJvzbY2b9BAY8c22fRKkShhzw7SnhqZiSWevyzXndLCWAe",
  "key14": "2jzfbUJXzykTsAUHPLUiMpw9MCmLj8Bb36GBMr8CkR48LucE3c8qKcyWD5R4mxA9dYpsoXtzuaWkTB8nzvMMJMW",
  "key15": "2h3JBSzrEAMTP7z1sarsMWZX4NuLGMKURFuNuuz52Rsypyg8W5Vvymr1Qsur5ay2tKdbAqfeFfwxvUTTyHJe7gyV",
  "key16": "5ztefJxecGkRT3ubNTSfxi89cZ4GSDGKhJP3pZwtATvZWmt4Vuwa3ND2n82GBnWZbw954QBfHxNpRCunhpwCATGF",
  "key17": "ukgcFUXKKobsCxeTFdtbfK24oY5ManbJxoq1XfnAkmPW9toEjHLK1iPkYM1N4L7J8zEoWJpSZouHLadegUPkBZy",
  "key18": "4GT312w4EtwuaN9VQRPLUQQTRzqmfSUoV6Zhhjzo5jW6uHkHg78wr7p4KeLamWe75AepyvpwGtYp2ZCBPc1HcubK",
  "key19": "P2HyhAeenaZaDmYirPn5vhtMF5JFTpd2vYztRsTDbZ57Pnvr89FYJApfsmakGnHtrS9db4JCSbUjujek5j4VVN3",
  "key20": "3wPPh9m6LDocqfdSPbmrSbh2QfoPEpCjwEewtDU2581RJ2SWQyz256G7Gd7QjAyfv2N5ChZj5H93sX32yzoF4iVZ",
  "key21": "5bdssJKYBu8yiJpj6LXttKtykX78vaHEZdCU8nMooz64VUT1qis92LVFgDyhR2aq9oweo563quW5umq7d3yWaW8V",
  "key22": "3dTmhTjhUtVNUSQcVTk3sRo47zYP5YQRPpWfVBgsrR4Kusf1bymoogXiv5dKeoMwqcezBJbEfWu5w9zRfc9sDFKr",
  "key23": "5pD5q3NdzkJXbReKss4QzysCZyRSqonPRUjRNMN7XJYQAoFmhuQRJKUYgFZmtt3ayFNSxEZWs8dz8bpMCQvApwUn",
  "key24": "Gu3jjXfpf3bThRzdUnjzwMFtFoufjSC3ZLFURdxdMapExkjPGmeZ7puxnHQ2k2s8hgQEkzurimRQAqWNhmPjuJD",
  "key25": "2PjHS7fxc6DkqxEXX1afN6Fvg8bjU5AjKDs2zGaU6J3Kx3ZypWeKdaUXQQFc5vnCnDmeQ86gMA4a8FjrNfi31Y3w",
  "key26": "2usGG1PHwEuj6niXNdDNs9hAkz22uqb9cZqkDsaRS3u8iaGsYHh1UmVf9fs7LbYHpV8yrxTQgkU5Pf6Gg5hRiYPZ"
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
