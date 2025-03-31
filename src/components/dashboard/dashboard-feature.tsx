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
    "2JdWfyCPdN7pi3dHqsnSQRmzwgbXEqdUoYTSw3uN3J3W65TyRT2Ve4wNDPJqCxk2qHifhGAFkcaMkykJJE17jhNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLxWCwmkNbcrVKtzd47gAmifKSbgM5onPFvbswjAwpwkq4UHfmfw8qtZaV9eBpNamxNDF8kvFq2uYrBS9rjACvq",
  "key1": "3dThYwUY6cbLTk7NeVZdUkm3GqUUJJCrEfMyZKVo8YeiDVUmSBBe18pqxEpVw9kRvu6FLQx2ZyrZ4ktZqwNwmuAL",
  "key2": "3k9WSjQyiCcGMbzPjTFiof4ksXAydY888VW7SUbCL1qotaHUeYRNdw5KYrovW1Y855y2qnaDops8sJxoyeQN5uyf",
  "key3": "4tTsQ6ABKvjK2JNqN2JrikQT79iGqPzLPWHHSjfUiTx4QEiEEf7ZW8FeumkZdKsEdch1SHcjysf8XUU4rAuxUSQA",
  "key4": "5ozZDYPNaNcsZN6hWdFum5VxufirzPEuBK72kfi2Ad688VBx5RA225VDTbN1sxDRSUUSWKCEvpwdjineV9dv349E",
  "key5": "4UDVfZ4D1d5UHQ5Vnrcb79UJhJ8SXeU4ePFZMCFpavP37P6hc1bwqQeZvEW7pXWiCwshcK7TPM1ExroeHCUvS1QV",
  "key6": "4QLVKhTd2WT3tNbgjcHUAqjRAUJ1NEx7y6Sw1s4Mch3g39fbYgd69pa9Xvv5rCH5Vyf9hAq7Xm5Hu6jYzT5eVAuQ",
  "key7": "4njoDrD55Ftmk2Swbvuonq6Aj4zb1FR17tYJm7ETzRxEzMuE3fi4k7dxndvx6Xiq4gbgumq3xf3qBd6vq38SnbSf",
  "key8": "44KBJXwTkXDcMEg8wJGQwzu75qkFvrD2KqGhTL8B8wgTr3QLicNyH3U6ZK4dAUsuP5MK1D2bX5C9y582WnrsCxH9",
  "key9": "3mDwkSCCG6mLSFKQYr2eHg2HNFgdQGB5RPx2LKhuedThaZtnNbhNoZudJcEWctrgEFEJ8dYzXcP4wASA6SjjN1FE",
  "key10": "446yJ9uETu6v27KgK5eE14cPwLM9LRDSuS8tr8gJXw6tdak9fSb4cmXtDTPtksgk4P46v6qJMguVhX4HwVy1KVkQ",
  "key11": "3oEBY8Avhc2sthnyASuJDisjbxyjQ3fzPQAjD1J8UMPU9fCecuBhVAzaB7DyVQzBEoBEuJ2u73EqrjGeVUhqjZkj",
  "key12": "59uDND37sFN2URWfttQYyxmVdxxPoVkudCXEND2EqABnkuncjHBYp2mcwWkcREhAJWUUwAXLpPfqmiZgPRV1CVsy",
  "key13": "3pFgtWGABV3Jnx6pnijKxoXyg7dwkYA74q1kg6oa31RhazsjR8HM1N5n1qHzWVcB95EVYnsCKMxGypoBzinN328R",
  "key14": "V9CwpG9XvKMZ7R9SX55fevXqkFBC7JwzVL32YPNQuBvZ7r8gzCgmtP7yuhzN32HcT4LrrU3479JerghqG97ftNq",
  "key15": "4YJG2HhMc8hXEbcmLPmYKuEf1jmVDNwrmKjHK9LGw5wNELXeACw5QWNtgQPfqxYU3wTBmCLWTfPnUJUtjQnQYEkY",
  "key16": "rfDqeAJrEtAATag9WAprXgWRuEyP24etug8mkcGuYrf4ovj1WmRin6nUr3cJhv3cWf9i8YrhUVb9iRK5LPqbkao",
  "key17": "UE42Lex43wUK4zSwJLsi9KeD2Fs7LEGnL6iLgZFXDmAq1dofDotrnm3mRFmRtSoptTSe3CkrjBMqBR4XS1q3WSi",
  "key18": "5Dontqb2nwYuCUTN9oRSvC3kQN7z4VmgMN8FJQNAvuw6chT1rnnfBm7hgkvYAP6u1pPkxxsHDXR7FSfYJ3DFuvBy",
  "key19": "3HqbgiUoP8HTKSdWLmAZjkEe5bvfqXv73yDK9qwm7zqARSnubTuwLHhnfyB6tQuWPiJL9GrzLA5BEAXqbeNBv3xp",
  "key20": "34FHcBLkswdcokZTXcAXFQrPSRCKJR8vExi1vRpmUvxFroYrMimXrfHyLnmTGt9Hc2arXvFBdFeZZYaHrFdWzbVn",
  "key21": "A1TqVJ2SCcAsT368VUaKqihshEKVsWYfUnvDQkuxMF2WkcSCS6n5gkkHePbNDiNwGJBV9LhPL36MgqaguAWR1Aa",
  "key22": "2Stg18nj9fAV4HAfRQU5ujCiZDHXrjfbFwN3e9C8XtwjEswBCQwrJw833cJNH2hoTXQoGdsieBbUEyxjb7DyBdBD",
  "key23": "5miAutmnc7mDtpxDvPThPhnN7TwcWaVYTz6N5r8NaoVSfrXkP75RoFcXg5eJPoU1FxXzfcUL8Hv71iV49drt3A9G",
  "key24": "41Jc5qoGzAqvG7CZSVV7UigCB3ztX4rVVn2Nh2mib8dDrTEcw7ShNJSP6v9Kw6HWiBHBwYWhdYi2QTJe4vbx5jwE",
  "key25": "3ppJdMF1HRuXGJDxhkSZ3MnGSwG8CpzrBmP8GCxuHTpHAwdkBGri7jpXCuH19MJGzYV6iu8wHr1FharW8z9o6xwM",
  "key26": "46RBTseacaCAJuEtE75Ht7uFbrio3ybBWwhVEAdQ8DzdKSuP8vCU3nFebssJro2ZYeKTUahbZWRi7hk8VFKZfSFj",
  "key27": "QhbdMiwBeX5Mok67e71Wwcbj9wyaR9HxYP3xrV6M11vvpoEUXTZu8iCm6aUuSGVQctwm5APCWsMrZovcfx97XoT",
  "key28": "4LmCiCSCa3afwAJGwydUnijeK5N7vF9E7pSZphb2JEqeo4sUpsjyZ1rCf7o3CCFfcYUzVtH6xt6kxXpTYK3mzYon",
  "key29": "3gYjMH3w6hvAwQc132xpGaDcJ2QjNgpRfvXfhg48Gw3eXFcxER5oXY123XhCFtGvxXuV1xT4sVs28WHAX5JWLVtE",
  "key30": "25Y6S5fawairruYUTumLduzm2cLeXFAVZtvW5EVhw41eFZro13fM24Bdhq8XULRZj83QDx3bregf94q4gc8PHMiN",
  "key31": "b548taKU2VbAjj6KdGTNYCQTiEjDsoLfurrCxBTWcEjSwbkcJ3zL7FX3zF3z3yUB569cuNBBEGsainyC3TPXpDE",
  "key32": "4Z99T9cz56PMJqt5yhL2wik8js7LNLFKXcotu2y3ruPiVPhnfh4z23NvdXjegXQv21KX7RLW4woNA7ffabaGidhi",
  "key33": "4oteW1eKoRqZcEa3pWZgte36fG2s2RJfxtUtr68UcQHYwVsmSsG6s96derjbaw4DkkvgLpyieCnASUoW4zxpbh6Q",
  "key34": "2HSdTi7ERj2A4cX5W2jA3odhemdW9ojL1SZvds7uzKmKcUwfXGJnr7zqrbi4B8DwjfeSo8GA3tPKf5mk8JShWfvD",
  "key35": "5e79SgchM2gM89RdjUqebrfvKhRFMBxVk9EouUetfcdv7nY4zkX1fkLSJAnKijRJTbRy1sjoEdH1878YyoAKzjja",
  "key36": "2KLx9vDQ5PuSCKcZibZGQraNk8QNV3HqqBFF1YFj1dXzujzB9uo2jhYfBe3pEfJrwUwERTB9bay4SzTBCArBspPC",
  "key37": "3z4joQ5mf1zrRBtwTXGHxR6KGUP1WkmzedQDshomPazBbcrExoDzwmaD9sqHWhCnrfxYka5EvgcYA2raH6Rpto7w",
  "key38": "2iLcBPBPWo1y9jRdK52eNtnQykhHt5AMdQgxbC5ZcBstSe3EsD7bQa2q7Q1eQGoCYogCPidRN1CZ2J8SwaifP5db",
  "key39": "5rJa86igJfEPqahaaZVn6fxCfaQtuTPMrg1fFebZGqZjcsG9P44X7Bqguw7UXe4dB25xDtA2UedSvWRKTTQWJvee",
  "key40": "23WKUk4Y4phH7MM1Ne1Beispp4mnu9GuoxgpW3WhckVhBQa6Ks6yc6b7sY5f2mTBRogjgKTJrCUbUQ4DRLzBueNW",
  "key41": "2CfMc163jKqvdvMZpDSR9nfyZHvbPyUf8XxP8jVd6T1x1NTEKLQUUzT4gjmE52rLw8LoVCXkna7zJPKgg6c6AsAE"
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
