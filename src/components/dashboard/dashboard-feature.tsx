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
    "271wRNVguJh8Leh2uZrapcDieHDpjvFVb6SazgVPcoRUCZYNiWidYe8khg2HdsJYQdXw1krriTRsuMp1CHV35Wye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cz7brj1dinvdu6WChzrfWouhEPcPDDyWHmDGzGFFTQvDEdzJ3ftmytG6PpiA7Z7QPund3uszg6BMUXHbpq8EYme",
  "key1": "3GWvkpJT4BTL6SqU8UhLhPCk4gZsxD7bZipVXh3eeSKhusBgxJLmqdAeF2vv3UiJajnJvoxTD9KReXYQwDJ1j6Mq",
  "key2": "5UhN65kvhAbUGenYq1bJ3Xp3QKSRpd9vThSQJUqPcY6fNhz4LWuA95cbWa8nAPRDgrVLv5Mn8za9gimDBmz2e6o6",
  "key3": "2ZHvq9XAfqFTbbTTy4xqTtGAwW9mMx2SGmTSM7pJ4sLi3t3xs3F1KBLCVgweNWYogB6gMHwMDZzspFk7SgkJ5YsZ",
  "key4": "28z1DyoMmpCAiU5cPQzfwdvW37dARzphc4fN2nsEvQBWmQRCvy74MhUe8u4DAy4kZtPGAmSc2Je191VBQxynKfgx",
  "key5": "5ZzZkp6iBT5j5sCYMgVw2tFgh8NmcnBG3ZwDiWZA8D5RL8iDUwuZY2eqtAW681LA14aFbG8Zsnu62Togp4b9NixJ",
  "key6": "5ziG9QcUXemCXGWBrMNMK3vPaWWcYwvhZqYCmigztXPbuDMMmBCgqy5SsWrxorTPqd5SHanpkGnxPS1AaNeFC7vL",
  "key7": "TQQBRU4H2YbQoezcQezEcxMtLYJ4yDfGQZrig7qB63KG4FJw27XwSWshD7vuNLULLRrGnGW3a48fPsVVAiTuohi",
  "key8": "4QdhRpWvoMBtnEY7rLcLvLQKS45Hr5s29hAV9pm9wAuFt5uUimwDE6wLYU7ido4AbJPsH9tYNozLi16Xj1NTu8rZ",
  "key9": "2LbdWoHZSrBf8MPAhWQDCKuVcE66kVicMEX3gtjNmNNNMUAi89p1icRHL6ZcFDikacifqpESggiyPWQJxp2yBuk8",
  "key10": "4QWojfm4xVpY4dXJbnD2o7kcumEhxwJpbwFTJj5PEYMxovj8d4CkD3wZzpenMDpwtV1AB8p22JPxhWfcRw2aEEqX",
  "key11": "2TJb1UySds3fUruqcy6TiRmFH46rP8gnrZCP5pUxMQqnE7SYQgU88uWXrBV2AdTVmUz6maJG7bneR3ZBuYiSrF2s",
  "key12": "3N97umcm3paVnXh7QPvwMEbUeChu3Q11AFw7rDh4v1FjNbqWZaiNQALjYXSdkY51DgvQTR6ZPmuSs3EWpFXDE4Ci",
  "key13": "526ZfBfor4UkAwGQp5EGbZg4P2uRxqbuzYQJPz4p8JzNSTcKdpki6wG1DMC62KFBunQW7c5RWhRFoQdcBT1XeALh",
  "key14": "PwGqNoVHmNSfXzFCehgoquE8TNDEQ53B3GR4mGp3whUXxnrfzVosbRQqjd3V9ekozJEMkpPpKFP1Ps4WLsHnomd",
  "key15": "5HWnDHyUpt1jdNWegRPDmiHpdC6M5cr9jQre8s1URX9gReoa9s6o7iqZ3SKqB8fkBqTteLfKnwYkkaB6jrrdw9Uo",
  "key16": "5XLver6AkLReZxPzn9BWHbuTLfgnwWRRnxzzLhZNLKQ2LbECa5Yc38qmHANwhaxhboNYVdkVVKhrX1m3kMYaAZCA",
  "key17": "2TYrL6dwug5PPVnephYLhbL8fAgg4C5s8HqsoJPbK3sHeYeC32doLGHthorBEt9B6JMAguNCXt3VAMFoWeKTEnk8",
  "key18": "2wRWVn3eHQ9zmQ2ZdNLrs3526EA17W56HxtCdqcAfZ4Hqdr1P7WRSMumGpwcUozGCNVRfvaPEcacjDNqowewxNMt",
  "key19": "4wa2szmGF39iZQFArxoTtwwxsvu4aLmmbaA4nS2BppkfS2qLLZ3cvLPuDCDBHENXVvFD8qopr2hj8CpKSZNskmPt",
  "key20": "5ULu9QZUpDYXMx6c8Zzih9fjmPZEVxkEWjTZP7DkZz1R8QcWBcXwaYFgpZ2MNq7oK2TrBQBXswJr3nxBL4kyEK2V",
  "key21": "2ggqYGiVkkxBrxFHSRFEVwsJDLwzVqwLgALfBabYhWeBNxX5HowbryeZadmarmSieswCvrz8MUXejwkaQRcTJ67n",
  "key22": "5QoLayDcDtKKrakpk5Zgous9J3amYPUxYkpSGzqzT8Ve1mp7ciArMhtt6pADw1qxsCzseEeUCtPLHm5GY5FuvxSv",
  "key23": "63HC56fT9NwMDkkBXqeLYZVT3ukV2v9BzwYpE3EaJ1uYBCRQENba4DrFeNyP9xnVwevMRj2y6exz3EtutWRak1cT",
  "key24": "4kJ7J5xJ5uN6RE3T2t7o97UahW6x2L3x5RjBei2hVn9L1jiYyMvAkLNAprsWwAhc4zVfGaim4cv7vBonSB168mnw",
  "key25": "5ao1URQX42d3fdZfcqn38YRBjMTgadamSZJL3m1wHt5LRGhb2v7merk1aTVThVnfTkaeerzaQFXYPg5Fz7RAx7ch",
  "key26": "5sN2RnDBdGWWzprA2ebzhE7RYfvYiXrQpuBSGdhPneNBBxgJa8GYKhG7fDNCCyWGS64PebyVXFqDkNTpHtuGjDLs",
  "key27": "3KNNbGrwSBhnEBaZY6gYNyb5MicSi3vnm8mX6tAGmfBZRyv2TsD3hYruSSq5muZgRwSzcZYsijmmsNaRfyrWMaMU",
  "key28": "45xQK6hkt8BfZmQJgUDdKYK9Fb5fhRQdm2HrEBAkmDRyWw1fKLAiJFPypqYHRw87Gr3p21fBnPyRJJxjv46kYvrm",
  "key29": "2DVr2AG9Nf5LJ3q6s7PxbMrHVXPowxjw4ywfMXvTHwWvGurp3TfM2NMCQCU7nakyuKhXFCYSudjLykwvaMUJL3Kx",
  "key30": "5Jk1yXbzz2VqCLivqzjm95eS8zJCG3A6iwPz2fGkiS29YsZSTPXhDShyWZEKPTZreQ66SEwMNYkP1zU9rLQkTb1N",
  "key31": "5sSiLdi8shrAdbo6PjNkuuJVZyjuebMMyqRQWfHxCCDZDKqHKjYExqUCWHXF1n9m4khARmv4eZC1RJpzAXCxNxES",
  "key32": "2fx3VDStHscGmLYTNTt2QvDFCDGHbm5ydzc7jTEnLeedDaUXrCMnRqq5ARcyVGUddmhYSJKzELn4ca2JcU9j24tp",
  "key33": "3UdbgiTizC19i7WUBatiaJ3nfugDjHy7uRSibbqqqiaPV9uvrx1DdtmW3BQBHZPmyAhpmD2kXWvVZ9PF7MBy3tRD",
  "key34": "2Vt6HiXAWiv1gWgsQ62K3rRfLLUkTbeTstAuWrdr4egcQY1pYS2mQWykohdw6TEehxvuvdgbUj67dvuwGmDnc6Yy",
  "key35": "2Xi4ksZDoWF2xnKvymePrBwRvsmtQM3gWv5KLF4U6S2ZCsjF7NEixcNTtb7zAH9fSfszwKoh5Az9iXHKNqimZ2bq",
  "key36": "WL4nucYqYh51fZBbyncD6xJ86SSCHeMhXgK9krA31cdxSc2aacKLLBoGX4HkMX4BmrHA5GCUmLyJLHBAt1Xwtbm",
  "key37": "4SP465gbzFrcXgroFGYTPcwEJmobE32PcFgWGtBCnndHSnUSYAXCdZA6746NjEA5FiwkH31nyY4Z1pciQUsukJjL",
  "key38": "TQtuzWoxweQgonJ6VvaGNmLYBaKXzYDTY53afnvMsRQjS5dBXijY7p1sGLhiq8o81BnY3H6uMGB3kZbiu3ijKDc",
  "key39": "5u4evTqYDTT9PXJE7AKsUc6YNKa6UrF3XRXzFVPRhSp2y9D6aJjH6awGkn1Zk8XvRD31VSxmfaKtZrL6txr3svfY",
  "key40": "61LMqrv7jwk9j9FJLoYEAUEhVaauBmwUUJdsybWxwVXpuGt1y8DYEvz8ssXFQphqxWz58AUxRJfMuNWy5ZPMcHRJ"
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
