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
    "5tSf1fPdthDVcP929aB4VkwbsDeVU1kcsrvZaPBxensDWd4wCvFEK2kVBaF2Urttu9yf12ge6oYjfmXmDWMTTwck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wk9eEtNYAF7XGintNpnP7mj2k3ZbxRv6E2NPb6S7wjchvLFoEPoiGenZpM1YELZC1r3qz8oo51oF5KWLVcMzGnP",
  "key1": "ruxVj6ASixMd5E5GTYFnc3LUGbfZzvcTbhbRRJX788FQ6cNPybAxRQ3gqcK73dURg5ijBu6itJH7Ly8frAXe224",
  "key2": "5LkED7BhBRBE1hAKtwcuWuiQT6ZoviZaD9FpJhhCgpRwJ1LbASorSH5NnjjMJXitfQfzdaFVXtKAVCPwNKripPLP",
  "key3": "2jusLCZz7ZXdSYx1PNi5U6FPdTNppCFXj2xs1U7FugEMf4KHPzoeiRw52YoU2XYjWvDSBk48Wo4tTmsZEcdBaTqF",
  "key4": "4TP5vcJjZdEDb7WV21GXLTd7MZH295eohfHGU4bmfs3etHrsFBNzQa2fY2jYqAb5Lm4ZQmLtJrvT5bPdbEoszbPs",
  "key5": "3ZAs2hA7Sa9xNZbF8522Re4LLchxtQ2AQmejzwQgLfQW5ho3WQEoR1TsANcR9oaxBER4hvtfLoyde6eE8S7YuUbL",
  "key6": "2EM6GWUS6c3uYW9dSjFn8pL2dMAJJJ3AMvtbDFR2hjYrsYAvgGSPku76erpzkhBBrrN2PDcpwpUsQzx6xGkwDpqk",
  "key7": "2YuLrMUD4fmZrm5wnUKbGQL3ueMvyaoKMo2iHcraUXCwnbHHgoQH7vgUrNbHMtNce2Kq9D3pLN7Wz8Guq9jxyPTx",
  "key8": "4YW28SDHyKuDxj9mFG6QSTie4PBiYvCgNeP6rdP77vEv5ExvkxReDkcLuNoWcCxEaYgELgMiwx4WfjoPsrobq41Q",
  "key9": "3Jxfz6QCHQmdxvKRqKoPjxBaoaHG7XBFPk9vsv9ah9tLyje6UT62MHGBcPJ4HPbiwnnJ5d4cwkbrjQsPWznA7KfZ",
  "key10": "5Q6dJRkFTUAdwPcQe5ETtwBmD78a9MyRfk6Kth1WAW1rU46UmEreYpxZdwJcf6QLvTUBNsMUfsYLpGGN2o53YPUw",
  "key11": "5Yk2APCv9mFuGSEzLuKUUmPTZbWr9n9Vz2NANrKVzJLZtJCCLRzLprd476vDzLBifuX7KWzfW561yk7ZHJ3vTUYg",
  "key12": "57eX5RY8cmcjsHmBFSRrpYq9GvPDsY4nLMj9Pu8XuFbk5PS43cVczc7bAgDHMFE1gsDmEukjbS2VHesVPHRioCXT",
  "key13": "54NAXEcEP5qcFbLfHSQPrcUJxDLFf4JCmMNqfiswTBgmDq59ivbmyok2PWnkXSGUzJF8G4syoQ6221qASQgzpGaB",
  "key14": "52DBDhZ6JCDqeKuJVYwYZW2mi5Rtra9LazZtEyzAuc9fP99tPt1FWRzkmLi5Pf53iJhrPKPvLB6Dd2oNPdHuGCGy",
  "key15": "412Wsh3fKm5JeVjhuJxw8fnkZ5qdAUv2ChkNPn8wUJt2RWJbuY4N8bRGuDpepaLTCPjZ7wgNQTdGEhxWr2r9sxev",
  "key16": "P3CBpH7Vg6KpM2NwrUJ1uLBvTNXLqk8HC4BSqBv6Z6zFqC2KaJDviMLm96h5xRZRJ2zwBRWBe1o2GE1CYjeN8Bt",
  "key17": "2FRBdbpHLtuo7v1sfzxvdGwQxfWNXxwKrpU79v8rn79TavyviNJZjqtmrZLawfomTAAN8bHf8BLfjGnhzyq8zn2a",
  "key18": "5CPGQt5DQF2qPEBf8hi33GbVNvVYTLsAvog48CNFNWjkzgY5Mg5JgAsez4NTDEmMsmLoFQmoZmALPGGN6JuYX2BF",
  "key19": "S8586FW6igdwweL6TWBjvEEexWUrirSCUTVRUYQHuG3aZThv5yhBFyWJMYxwSBBgRHxdvTU4NV1CUDCCzaUqr8b",
  "key20": "36ghekqsSwBQ1jUMa24Mu9YH6u5nKPJYesvrX3w7N6NDWms1EAYGRQ9CPoTpbbfbwaJ5DVrhf8p8pKW1gm8Gzfn5",
  "key21": "2vLiMdH7fsL6sR14MsrwQ4tZERoNHoL8EcaZdZLXW77ccJ8TcxQBkNVf6Xs5jnBDgN3PwbkRoKb7oTQtiD1ixXge",
  "key22": "4imiv5U8FDzM4pesueCc3bSLdRmwuvS7t9JTRdP6KUj568Vhrh5T9MhSMXK5enGhzihyStqESBRS7VsQJvmsG5iZ",
  "key23": "2kPL6jTJnEV6hteHHT42oHcF1qvaMaCFBomRS6u2AAfAzLaF7Sn7rZVgd7V3mBWDN6dQPR4F57qExkyk5oeRkEoU",
  "key24": "4BsJPUwcrZf5b1rCF1vNSvHRa1GXrWJpWHkqR34nGQL7bHAAhgvEUAK85Rhj1qkZVVQh6PPHyvvVsHhw1k1s4i5t",
  "key25": "3njEiNP1GCxLhtJaRfcJzvCkHrBZSEHeWvWKWY7kpHaNd3i4UiHZXYSwSdx4p6me11jxGTkaou4HqSWVi4vmM4D9",
  "key26": "5mpo6rFMZigBW3UMCZ2CqVt2tNd5n1k1kSX1fhZfJnos8P6o6a45ZVtMQYmM6JHTcB5NiEc77UUGmXqLEPexNbNN",
  "key27": "42xrvpb4pGF5tiTUnUoVGYbsxgWZSXwP6KrKRWdskpk8B5tPVEpeJvrXvPLnKz65EfAkL8gYH5DmaDyuaTco5voF",
  "key28": "2ifCw8tub6vFNcpqhbhXF3GLQV8ZCL1pc9KVBE5gxP1nt6FXSj1wKV2tMkgz7ijw6VBQn2vwFm5e8KtLmKfYWCqW",
  "key29": "3ZF4ZqWcXt5nZkroiJdFmtFR7MXWTRjEo2p1Dm3fa3QLsTghjssNWzc1HPcXYNNY7eEHTfRzusHbZMFJH5oSyMfS",
  "key30": "5YqkkS8mcxHvYu68uH4cr9XtVWpAYgUgGKuNJscmTuyDXBhXPTne6rRYWC7tS5nK6SiMKzafr18fJXJimvhgisHD",
  "key31": "47743zhH5K6pJSVigzAMuCZXDRJXiXHudGSaP17rofJrHPwLdaZyudF7azKBKg6LYYLCHT4zKVKYDRgY6jfQNf86",
  "key32": "5oU6fLNR9doE9cadr1yVzpJTE7UdnQ5oSC6yemyhyW4QkUD5xHXzYyCSncfHM7tDTyQoPLCaKvbwjan9bBArF9sB",
  "key33": "5i5RhnmK12KKDjC5s6q6hcoYdShGDy617YC5m6sNUBxgtAzbe6mGYCMJvsiuLVRtkhzG9GsGuU9C6aKD5j9rMGQw",
  "key34": "5PLk9WKw1AuVw2v8ZQ9sj77MwPNSGbyhYuhKR6Rd8Ecsdx6u1z2sbSC7c2eNm8jD9oqE7LB6Q6bXoiFSzc21Tu4V",
  "key35": "4dMmFijkWFRsTZU7HcaUDVf9mgNDjZAnhcB1EDCtmJcnTcpvf1tcT12icgn2sbUMqYsVKphTkLUmWYuCqgyN694",
  "key36": "5VUfq8qQ8oKbV3ZuvteWH2CJEqTjaXN7Wzopq24srgZzBeKcKj86iUDVHMVw5iUEzcJ2ERvCJrKAtUU2WweaLcZX",
  "key37": "31JXLXmTeXrFrifdpVQhJAY4t3dDo3t71qbQQkpnwJg6uM59vXKxVDHtdv5GSr1hQsmH86A8TwD9CmaSM9coVaVD",
  "key38": "4ckY2LhccgZRU8i6y6pkgdgJKFVWCx7gadus6nLvKsqigQKw8zRGssHyLraUFGDcQpfkAcJ8g9gKfT7hCizGzd7G",
  "key39": "5D5JEtt8jgVU7Nn3xCr51DX4Xon4n1FRFKe6xn5ipPnxL38BUqyKFERDeoU9aEhLVdnQTt5asZFVgJRD4x4KWdUX",
  "key40": "47vkTrSDRdGnTj4dUJuYoQ9xB9RzhidWthcGGQiPUhNFiJdf3jZq2CaojMX1fRkLTaPfQJbbHjKZWfAwExcfgcRQ"
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
