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
    "SsU3w3pcPEYoNBEH5yw5hXyS2y7C4HnnPpdvbFjc7ZoYrM8VrzsnFhDiEmTdcX7sRTuvWh1jfsC5iSRRNrEgf1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnSKJ5Xb3tnFjahaaM1xRtfciXMfoE6dhYXTBanPAVAvSYBpzcLaFr8YHgoCmXzMWPijnRBmPYob69X29o9mY9w",
  "key1": "z2jiiJZGMRc3i89PYt7uiZG98zpqFH9ZaYcd2z3GDszLDZ7TLar9KaM9NeeFZsSmb92nEauZB9UwNgujwWqTugF",
  "key2": "2QAWEc6MF7VoATUTBeNBhtazzrSywe8yhfAoaWXNGTz9cy3qhYPfmrVFNcDLBYCkQPe7q1BZjAZJ4JfTAnwfwHgu",
  "key3": "5aMq7Aj8h2RKKroQfoxP3JhjtJ4VEMbKtT9VEpaSm17zyT4mzHDGZHNdWPkcLckKhRwgAwj35FVe6HfZPGpzsSvL",
  "key4": "3R34mitoSvt43CbwJTJvgRuAxqqWRxocdRRjdwisSqmAFczoQV4So6f1rFgFNNNyPWNzjZaB7rN9orDMKjckCUxU",
  "key5": "8tJ1fCujj7nvkup1hs4HvNwVBuHQmD8DQmGrR4AUSCEpNmLT9jGgEDc2N5VtCPpssmF8qg685PFk6hS9gPJXtqe",
  "key6": "4tqYzFdGn1N3mwL9qrCpW15V2CNnwnHBy11x2AmoiN7RSirhDq34ybKr8zW2zoRZsgZPwWdFxZaTrtPd39eq5dF2",
  "key7": "4QgYnMDQNGs2C7jsZmWbwg2S9c4sCZp5xEAz64GnU2NLRNN4aiwszFQSuN5b9pCe9VnCd7wy54a9ndbYECVWT2bm",
  "key8": "3x4Brw5boLXhrWw1e3YeomSTgG9ze3fkP1GKVgZsTcceoBmvDnHF5uPqfL592T8GvjbuLARkFFAUo2enAEhpyFxx",
  "key9": "AEmj3dB9YBNEwFA4oEkeDkcy8ZhLtWAUDvE3j7ioDadxMuN2zgaXxhaMTpwtBCq8vsfag4P3Wxru1BQwTZ28XKj",
  "key10": "ZqHqqyk8bAT5t3TcGj8EFp5M84zKQgpkWZC1tZZEKB5yBsg2rLWjnKDmwUWenUa4ToZjJya98dRVYEPNoPHcT1a",
  "key11": "KJtbpzAQuJYCUZkbi6MPTxZTQna2QqX4QY8EX4DPKcaiFVaF5NTHJLJo4Bo8CAuquBGLhqCRUBRQktQsXiaRBva",
  "key12": "5d42aG4eqT1SzQBcCULSsvBjKPJYR74i2tymctnE4p5jqo59w52hgEb1XvkhuoNkuus9Kx77421jsvVJk4q7vgcH",
  "key13": "3DGBKWrm4dpcdBkpQZXacAwQgkLoFo1vwy5BS2pBmuvbqE1GQyGG3xhELjNab7DEMXbGk87moJMX7HJbr7dDdAYE",
  "key14": "5cuDbkuDPG8EkmQU7unhcSgKAqKd6XgpFNfTRCVbHqxzSYg1e1939ArGpKeUMUXVLMaW9xGHQP9qFa86fZKPWErR",
  "key15": "M7YDHfXTeMaLxUJm9yqAoX6ynq2T3EJhED9qbdHxv7Lxd9ZPGAkk7Te28zoKC4kqRQCvxXwJJ2SRaLb5tNYn7UV",
  "key16": "44am4buS6A13VjWgrVfgg12AkWqH2jm32T5BF2Mi4aiC7csp69UpU3P4FQxNgfN1zXPyg6EZh1CywFXKvqaaGYxM",
  "key17": "3zdgSEpUYmpWPDFBU85bjxnJYEfq7zzCeGKE5ToBcFmvcugCiX8F8D64K7aqogaU7zfenXTb5YwWCu4Ua3o5jJ6H",
  "key18": "3fTBpwCVNV3SxYJmErPDBpWYyhK43Bd6YXb7vna2oqf3Ph4utfXGMXMK2ztzboSaewy5sGkyFZ8YeXYrkrVQ8e4J",
  "key19": "2VwMfXPYfyYxyPscjexeZxLDuT1A9DCz7kekxV5LzEkq78yXiX2NKSDo9VbtciEagaPLdHgzGEkW2U1Z7UubRjTC",
  "key20": "22xjthLSmq7KiA4DHxXfroUjhyXdxrteAaV4uPMBqeZEBpSrs4ot1Ac87dC75SGrJPmhogEvF2hjynBzaHuYas1J",
  "key21": "4ZfD29SuZzJZrfXLbSAbkv7UTZiMLg3a8UZqNFPwmCLX1dP1X2xpzVgnfRQwpWVxzgxSjpReCtQiyhB9SKZNu9At",
  "key22": "L719mTHyboK6pLyb1VVF2G9GAtGmKZKbSU3wPfBfjP6tr7GCkJsiFeNDqbjScV1ZrnEBAb1rfrsV5UrkbVFBUA9",
  "key23": "NbGoJUvMzE6gLrRZRgCxuUhAyyyGbC4BHFoAyanoGwcUbcDCzMY9HHPNr6DknU2qfNj38iy6ijajBqEcpn8Sdr4",
  "key24": "HT7fp7tTuwNZJaULkwpbKB4EeHWRfNPp2oNNRQhKKn4ytAGbzi78aY5kubsoAQHbasorKwrjJjanbujnybtfK7S",
  "key25": "hwz3tEuFHhkjzaLGi7CSTuwzzrPKNBgiYBv6ghpongGcX3vSLLgm3Rg8fq3Vd3qYoQ2NLUbP7dXM2zVGWJENZo5",
  "key26": "5JYFwQK5URwfEyWLLCzAwYqYZfggaBtznPJA6DGGM2tGFZRhdNa7LMB5HMNr9JdigptZ4urymif62VbegkG5boxv",
  "key27": "3MQ9gijd3bABve6kd6XqJEAREE4GBsbjXFCFJPqELragXQKfLUMwdF2iKRvUSSLrinyvcscmztKiGoxv9kJQ3q5C",
  "key28": "fCdf3dYWXgNcjK6tMFE69Yr5Vzh4y6CDE67Eqwyq6PNWV2W53wk5SgmQapfiq7QpKAHnL6bc2yyUzncyiiBiRV2",
  "key29": "2D7cdXp7Y4bYytNnPQsYJdcM9gDAEU6gqsdEwdipgtmrpwh9rV6kmEzT4iVcJoqmfjueJBSwhhecCtQ2QzbYn1sK",
  "key30": "4zRMttAn8YFRXiEqvePZz5GYKzJngXMSKtY8orQVj9krbntnsYmRqwgiFqVnRZ3GLz1W5V3S4mP5bKoBr1suRDip",
  "key31": "3iZEj4jmdMdkrTix6JSWSdMifmXLMtGTodaEmddcFqAZJ4E6BkNoToNd2W2b3NyhAqJ5qzrNQK5x3TZbVsNZV4BF",
  "key32": "52hdhrV8crHcr1dRxEFEpFxJinpA8r3DFhCtPwJU3rSwRDTkupeHDdvEhNTUKg6wunfA36PeeRGnDqLJ5Q5rofnj",
  "key33": "26Qzyi9NF682HifTrbbuKF3cQtMo2nqU3T26Q7EyrKgzi4RUXhwwciJFesU9N2sKUwnzX2KpJ4rpF1Q4V9YhkNHQ",
  "key34": "47PmKJzL4LsuXDtzp9MGEkkmxzF2LZq8JBo26ftDVrZDAk1SnsGxsSNpW1X7DhrN5S9uFeRL8Riuc5nBvwTGShbF",
  "key35": "2hUXqnaEgMoP6D24f3TT7j1Zp2PEtHRJhn2wgkDpjKa4dE89EonaQyLWB91d6Gz9cZWN3Z1Sj8u7VvkKSHthqT3C",
  "key36": "5wYY3wSYDW87ax8XuoZWjRzBdvxwqq7cgSysJaGtY5nTavnD1gYbkSKh3BhR1RRq9PfAsBSdnSGYzYoTjUZjrHwQ",
  "key37": "2J7Ns3tj5dJEX8b2WJ3BaNBxk81iiJSYupo9ymxN3mhqyFA9AspcttfR8oHZCsV7FZPNQ9WcMhwmEt8FGnxU1GZU",
  "key38": "5V8MukQbyhgUo5BpmCf26QdM6pPZtpur5KW3EQU6P82qq2NsGanVmAa8VHaGB2Rxa6nyqVppa7sWRmtrBF6vqSiS",
  "key39": "4FKgu4KMrs3ownWVqdgdFMXcWD7qc5Taxa1KJKHVmbNjXa6h5qkQC9CfFdxJqtMPdMhu9dau1XHYkYz98A4js5Kc",
  "key40": "2Qqi8rKH3FWqcpEXxduNj3fKj3w5wA8JHa2PKwi4S6fDkTT4BCDazYrcEfZeZ3G4kY1AQrSA9Q6bLauCXMYnzXqq",
  "key41": "5jo3KyaVci2LXNUbynK97xLdgjWFJKG4WvZD47Lu2L5ckXNYVUj131m4sdAmjXjkwppKFTxXETSZmhCLLnQ5mV5c",
  "key42": "5etjKCXnsBPsNCZRRReGWiAdaGKBbSy5SMPC4PcxLXQDeZqEDUuryTMqzr7AUvRuVS5A5uAQ78JnmanLoEwQPj7r"
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
