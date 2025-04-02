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
    "pNtEMR7mfaFkk4n8afwHS6AuZqGaJXMzvp5bv9Y8q36Mb97fJTsXgv2GL7Er8pCNTARv13JZgJrsVUPEWV21z4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wj6p57iJyHxLr3KMPEJE1zwYCpJNGXfnzxtWD41Wk9YrTjbJyMDWyt8RYfHju8vFyzoC3ybJA5E5YjT4GjkeYyD",
  "key1": "2Evu63cctRvrNi23KwPMkr76e8ARV94TCVEJoipB8G2Ny2B9eDfrqYrrncLgjn9GjquX4Mg4yhb4yYQX37TM99B",
  "key2": "2bf1qmcKtq21RfxmgQ3cBEbaPhjsEmZpnnCk88bKnbfKgrHASR5q5JeqRZz4jgpPB69CYbFW5ig3BhgbX3i5aS7k",
  "key3": "2EuCTyawmqkiX5M8caoKsjTSAtfXbguJb2h3yqyuHhfE1cdL3ihdJAth9wdiV2VhA2iwMYfazUYZ4WYRW2LBVLyv",
  "key4": "TVvsmuei3kN73GU5xugWXQAoobUuMzoZ4j3RoZ6FkYwDWuiPm42eKpntfDExAh6hDVLmBpFPE2iwWFT1BUQsRRW",
  "key5": "rtzM151GcG8gBErXR6vWUDnbgPUixo8iFhbj1agxyF1mWfgYmYmm74sVgvQTFopBe4hW124rgavZ3cmRF9KBNZt",
  "key6": "4rvcjC2nmibaUELLN6Cr5reUXc76zdkUHT4VbWAX1j4BYM4keyj8CymPgzpPDQXmSYhkwvfoo7ywSngVwtN7149r",
  "key7": "4PqXVhwWiLFezd81EUdhHnWKLXDsRGocNkPw7GP8zfjbpHvERcGhfpSWqv8onT1tujLXUeyybTh9fxko2XLbaVPp",
  "key8": "VHqXPp6KYkq9FZsyvQCYRpgm1Aqwveh9Fp26fuUCqqmkPNzH5ezz6WeXJCKJBYb7fSRqUxqLYfEFG2TrnYwCLvN",
  "key9": "3NR7qk55ykprq2F9DCSfwBhJJLxJszHL65GMaa3uuwga9PxQ1fHhk5Vj8amXubEHvv41jm3xtCzAJjQB3C38LkFi",
  "key10": "2x5MNFvyU91S7jgMRvJt3GcfbgiQMtTo9WVG683ukhT7XpNn83jkQDsfffZNcBL9YpKkLTLCrAzDoS9XRer5ZW8b",
  "key11": "57bD14VkyAnUaJRCV74oqYAeNYQZxVfcc2yWSM7ZjkswnVKAszgzkUtCWXxfESCqNS8s7VzZrFA2GkVXsXchT8fw",
  "key12": "2875uhV47GTyHyGiZmJHK4Yh3hfFqhpYLqr52ZfkV8S3ZqPxuGZQJVbGZzoDgdHXHNYbLFzDVyHJDC7VsDMs6ShZ",
  "key13": "4W6fugDyqJhrGNwkY9moBjZWExo2N2tnMJsAJ8fSYG83qQJWU5LLk2zcg11VsKQteMyvEKj38aBxCDHq3KwGX5dk",
  "key14": "neb4dQ7k2PBA1rTA9RaxdyhwvB8cn4rDbKSGyziKmJEqxoZfypStJFXnsG6Qivp8tbpbjjenpdoEpiM7gh3KNq5",
  "key15": "4MrTj2QZUmnPKVew3fdjTG6HfZbwV5o6CJ244kEdXnRHrKzvpm4dNsA6ibnpHhpvZQykbrZ4Q7pvqKiA9RCHEoeD",
  "key16": "3JMG5jHZufTAx7ErdNbvfqyDqBQ9DQ3tgNnZZ1LKZWCavAPP9WKczTnAKhTdaRLYVT3nUjkMZCiqAb416w2jmF5n",
  "key17": "2ZmVea6SzGQsp3KapcHYvcUsu64UZFr4G3skNBXQ7MfDp2K9sNmeL7MCR3hKVSyA7nnHdoX6MinAfubjrBSzdDbf",
  "key18": "4oXyPk9CsJYN6csmAnSD2iF6PWWSPk2U9jvTZz88Lv3vFH5mS86PLmB3yw5x9eWfUnuZGsAz68eUXYjTCUdenYRG",
  "key19": "3rccRT6ywxbiAaVSkFGywvQ7sayRsDh6Lt6axTV3fjJa5G11x4jqYZ2gRW8Fmk4cUPq7xsLeNJGKk9phc6JhLXnw",
  "key20": "Eqvsd84AgXHCMroVj3HpN5Au2BKTFGdemmrsKCk9H9x6jdx57AhyEP9wktx23vmUSrpkJRiaZvo7XSrf6LQjLJ8",
  "key21": "Lvy5DXtPGUEQERRTtc4X4Rdabz3ksED35vCiM5WzGF2DNDUJ5LWxxWdfrBGfWnHz8LwxkFg7DzbufYjmgApkmkC",
  "key22": "5VufXinYbSfiJCHWugqaX2oa4RGL1CangmfWxqcaSEG7Zvvbw9Apm41TSvGn6aX5BMESWiVZjf1rrGvUt8bxHrBb",
  "key23": "2d7wFHogM6KrK5kbeSNfzQmcEX6PD6F5FKSgoZREjj7QFLsb3qTpe7AdV4dDRCfBmNhLwg8dbfUYG36hC3pGv2s3",
  "key24": "2kCzfXyYLDJMsftNHWdbT7NCGipiGSf8wMmpJTnD8SY59KPJFfU774LrZ87Wnnop3ZiDefzBJC2NVv1E1jQJFGRE",
  "key25": "13KpitxcbswZ98hekGUtm2n58zAo4ytE752EXCBxuTfytTMzs6dB4RLTE4y9izvLRq4Lt1ojVQE15mFvZcXAftK",
  "key26": "3riLcFaHLVKDwKpLwScSdBko89Xn5btuTnkUAySqUvdZVGU88kGmgAXdiYovG7hAG9hRCjzPc4eX3vGJfRUxmAUt",
  "key27": "5GFTaJCGZnNgcXSRArTmy6RLETDUuNvqJqDU65m3dU2XAnk5GBdE7aaBuh8L4pFxpHeaLiomPJc8xTQxcJEEhHDe",
  "key28": "Km36HtWUWK8upR5Mg8XUun6cSB6Y9AeGxiox1grurw2TZZqTcC3czah9r7pseNbT1kR9UrJ1835SHDaa2EJVs2j",
  "key29": "5e9UvRg1SkHgF8PrH3uTmWzkJCBXoARgqwektpyEhiy4WWgzubkdWPeuLJaV2XVsS3Neb7acDDM5pJKYve68M8wd",
  "key30": "4iH5ssNHKGceH4TCo5To6jBgjp97DUp9v3LezFvVCUbrZYWFF1g3eDM5oV4iqDwgZJerjrswAx875pxdXjSwMtjZ",
  "key31": "eeQFBSQnTFjYMmZzB2kPUxUNguWwURmNHTJKpUSfzXmQLxri7vma4gPVwMfudtWKhTu86xPqfdxWLd1neENy93Z",
  "key32": "5bo3kzU2QneJJpYwFeLaiJYfgT2xBf9J2KJo867mgxi48EYC1Jg4yCaffMkyVKvPV1oeszmd1dQENsDs1N9DNHyS",
  "key33": "ZtEHGBpYKCRjyf7Q1PsMDhfDA9EEieSUDGKZPVQAfkuNH4t2nmPMkQNDoGEf7oddLR8m7CSxvWqbr5Vf5t92jUR",
  "key34": "2mWtHSN7ZG82QPYJnuKfbz2qQ7DQk8d2VZAJUHyQMHEUkRGqRqycd1oLna43cQK8RG4nMzRXwzEApmiH6AkgWdkr",
  "key35": "4mHJqa2VviEkU9R3nyucdU2pR1DvcFFHiqAw1FMUV4EWqRCUkyZsPCnjQr6ynxHMx2RLgsXHpub8ZrKK1rQVZEWA",
  "key36": "5eAFeA4CxZnaFZA2NLNwGPWWjrdE2Sw8skKjTkdNYTQTLbQufgCVoXCoywydMXEVyiuqTH613Ay9fYRerUmmqijb",
  "key37": "5QeLbSSaeJEnt8rhY1UpmxFiWmLLUiY3NQs83uXEiknXbLc2Zv5DQxKDiy14H8cN5FVsMPQ1kBSP6MZJiVdF49XT",
  "key38": "2UuJickd677NQE3PXQDPtPebaaHdXKao1EfPRaVv4zGzGphXeJBYgqwhwXzhbx8MjihUZqEreKc8A1FjPBGMdEpp",
  "key39": "5JyUhSMb3HW9oX9uJU82vS6DwrrEVa7nShYCzjGfjtSAk6UV2iLL1SCdRkmfS1yxFZAJHBTvXd4TbpyzmMoQDpGm",
  "key40": "64JsBVjvFf1g9wZPUkvN6wKxHv33aSGeXv27N5Am9BxUeAvVWfQSzn5YtbS2VrncBHrwxKBtmtuYHt3F8e6hdzxF"
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
