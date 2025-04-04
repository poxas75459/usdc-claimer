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
    "Uo8wjzpjNnbPRFtzQkpVnJvpwQgQnW3n3DXL37TgZTjk86nG297FQQ2kQsBqMDadpx8wnBqAtW63z89AJTR2dZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVowGtFPYoxuYeoQ2EebsoQ6hZuhZ1H8KjeqKvQ9HweLdjMBiBZULZkCSW9QAtkdzQnrTK4NDs2ZaQnP4xf8xTR",
  "key1": "3RmmMr5QAp5s7MBstLkZSxRrLrFn7AFraYFmLiHTPn3avakTZxi1qrjKhvv5MGD3XFXDWugFBteyz3pXfk1rZw45",
  "key2": "5PcLHVXag5iZSktiw7KJXZbhtoyvHYyQB8HfrbxV3mw6DyWZYWBSCaejxGmSGRbhLPGXD96wpJjeKLj4KCyCPnx9",
  "key3": "3hQFxipDjNx34oM2qxi7NocXJSyQ7GZqNTCCRPjhfBYmCTk9DZLUZpdouurfJ2GMcvUiiz8t96fpdHEVFe2TFjuD",
  "key4": "4hQjGL8ZNKE6oRVAiVnw92YQgWHEuzXpRaVc8wxepuRMehzwB219piESSmY1imS6cJvjyEa9oaQuy5ajjnw7Pxwg",
  "key5": "eDsWuZeCnFMWe2Ypp3kKED2fGYwnT1eCCkazksbWhYKKbCDwW8nxT6NY37PcLfGGRiRPV6HuskgvNBcHCoveNGt",
  "key6": "3qzwvceu68g91CnUqSpN5FiNsqxofbJFJ8nEzX1ikZGaKRh9MgMrysYj2fGuaiYo5y68xgnuVmyuvTHJHDbqdxp8",
  "key7": "5Y2Y2dE8URNGsWyyNFTBCnnogMSe37ZYUnpoUAyHF2PFpVAGaRjGySRGbdGuTYcpZrEpFkFdQpoGAqujbrPVLQ5B",
  "key8": "4jBzmNw3CkMJwwKcuMkcnHJ73hvEUcZN2gEHmWoDfFy6rbYZEVqjTntAoFKaj8uf488zZSvMb7w9ezKwGBihQG3s",
  "key9": "4HdNxrw4LA7qQgYFhm5heGWS6auVDB5UK8St5TrMqfdaJtFLpn5sDn21K1ggDM3De3QdynQYgwivySW8GFrovGB5",
  "key10": "2A7TmbuehJc6ce7RJVBH678RFDGJYg1TkRi5VYhGow5Nx6Q4NCtBSrLuxMYASEMYD5ScUiK3iaewuLysQLCjjx5Z",
  "key11": "2589NJPfVVCWJ27ZV1t7YBVjsHce58oujL8WVVG5ojPBpYJQPP7Q9C8yGtCURVntjvXyz83vf461ir2cAaAvqang",
  "key12": "2y8LUbVMtM37G7bZhC9jhUju1zJxEWfY1K8meeX81SV8iL2XZHB7gQZQxmf2PjywnSgYzYRgnVkh1KwcXXMWEpg3",
  "key13": "4MydRGyGYDmHT9iNH96NJ6Vh73i36WGakhvZpiGP9QTKk5intiQR1nAHSwFXYGQLGaqpUUUBQGjitiMyzFwxTzTY",
  "key14": "2A4rYAShJshwK2fnYxti1TLHaL4GMsRPze4piEJHQgeyPF91drvkKycN7yt3t5inr4fSb91JC7QtwSUmb5TUvMwG",
  "key15": "C8dFJbVesqsqWX2wwY8zM1mSPLpkoA6vMpNY7xUxB7YiHarNBD7XyszU64Lxm1gTraNRJfqbLY71cbKjQiBfP21",
  "key16": "67XVmrfnG4TXwPdVdNm6xF9FLsUes2uwnPEY6crSDQECiWkkeiumMvg8mnuBBFQa7oMYGeogitDWSTGx37hdUjRY",
  "key17": "45Yj1j7C1k9XLrR4tQgtw3cbGpiCsVL8hWpPkDEH6Qs8uKwUWKHrKxtaZCvkpHeGwardEupCHZJbTwhDxpUXpXdB",
  "key18": "5X7ExAEATzEw7x73yVvfaPSWJLuaLqxu8ui1iPVoxPde4aXfhCqQMSZmudhS3ud5RTzRcEhgQZCZKwzMjciXKpXM",
  "key19": "62vjq6zsgJwq8ibusSMfaZnzRACiBetZ8gMqE53jLZGuAG6SS4YWCiERxGbXDtf8qWQ3KYpoPooBN4bmBpvHmPrt",
  "key20": "66g4aiRMBzz86Yvj6owyJFP7yb2N7Evk8XiYpAbq2RLmFgDs26Mah8ZX88uJsDCYfCYTeiJocwfeLXGS45T1eF52",
  "key21": "4weBEow2ZZi29qC2eAMNKEFCBr636rJq5AD8isZmPwNqUQh4y9CvAApBigvLjBtHNVQswuKVQ8oeFxAnuSfP9bnp",
  "key22": "6XcoYugHPgtJv5oi6PJyQSodtQ16Ha5V3KwxqqPyQHdmyDPgcN53Spys7UiQbFGkGBzFJCDNXLjYU6V9hTwDvkX",
  "key23": "3DxXh1xAj1CrWYSFfy6nhpNoUczByQk5Bhu19LnsuuUdL8F1vQqvByyxNL3TjUs57XtqJz4Z3k8FQRsownpytfaZ",
  "key24": "3vwr3UV7B9NVxHwRkrcHigvfo7cx7ouQnrFWdmo5SnLw5WzEKiJtgaYjohsEiScpStD9TDD2JKPMASDy5xvHrGfJ",
  "key25": "5rSu74NKSWSyqLB8sRt9wyEgfJWjCWkQ34N2ybGHAbQ78FpQnKNRS2U6jCAJhwXEpzrKKUGUGzfjkWSdV7Apv2AS",
  "key26": "2KvepYB83zAbWwVPp8mQPdK3gscRiNxN78uSpWkBVLYmnGtjgvDhn8RskaqqcfwQr3b2pX4XpgJdQG74gADs3aDJ",
  "key27": "4gXK9yZsCY21MuSqijYP6pLMfhBkGikd5DSBFVvaPG4fUbLN8afw8KL1tZh3S3SQheER5jDH9vikF17D5qrhZwKm",
  "key28": "4vS7bdq2Fuf2NymQUVMtwTdxoxLCaDQUTg3ogk776UFNthZwxcjFatzS2QgkW3QpHwfD7TG1EVs8ChKb3CRCCRBX",
  "key29": "UqwXwT8BFUvNNHJHgV5cFKx1HLemxv6RcqAzFdfix3oF1LauB3CucqxGEz6W2ttwWJ9627kbiAFsibVz3KG7uGX",
  "key30": "Vj8G7FgRr96PiCo1e2NdzLuyqHwTNLgybopjyDhogPie2windHCU1DZYQoxJV5at7gxrNhbK8dGrcptgTMfmqFu",
  "key31": "3XAw7hQYPQGZxNDLPBJgShmSyXT32dwM3sTMzdkVAe8HvPz57aunMmcrprSP8fV4fUV2Lq1ixiraKU5wTwtgZE4g",
  "key32": "zo6vMswrAVSBChUvC93JuYPcfdE4ATEfg5n8YLgZRMgA8ngmxGfZmtrfUh8orDXhXTP5Atnns7AjzuJ6484xv6t",
  "key33": "2ui241XmcDfeFmt52QPSS7BzPC4WbHbvdN7ULjFy9wipRoBBRtu71GJZWcDLuzUokEffk6hv8ZtW6R1e2aka29w7",
  "key34": "5mdAhpf2Vmi4yRJmB93hTyFYJvUSe4sZyMxpnvzuLi87Y7DHbAZWba8rg2jyqFGxs5Sqb6qwPH2KQuaoV7NX4kp7",
  "key35": "5kQySfhhzwxSFAbvF7Pds4FpD33DAnLxb6scdusu7qRfbHSXDDK2bR9Ae4FeCDdh3gCv193XxHhKxsbNMZJTnf6E",
  "key36": "5foZo3tXnAG7U8bjeLMjyeAsPXhWxDjKaR6jorvRvRdu454iNeaYPDZPxGwsim6TCNDtMA2FKmaUvY6dR9eJvnc",
  "key37": "54b41YRLySm4RXSVSmytkfrkpZgcDq7TAteZ4XFkCJsZySCJDKHdvRsyRsEpv4qv7xinBaHysYhTb7wBoBtrHwbR"
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
