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
    "634dMxuCbxPSpg1gS9dqBprvdinFXRmiAZ3j6JkLPMoPp5VKbgDTXAZjd5trTbKdB3BeJRhJSyTyikeaRJFUQB8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZH5mcHujCMptLBHNPo25REp2SmpK7RK3pBzjk27TJGjzmaPpvXUsDY7fGkjDvA5GBPmMJLRRTEDNZRsPG1xizeX",
  "key1": "3865sEcA71dqyGFBfQDJJieMcp5Pv595XqThjheXM3uBfA72yJt4NXDj2yyTqYG8ikTToxvwuMNXxjqAh3yjqTQA",
  "key2": "31Dp8Gww78cdEE5xbvPZGXWT2R3X2bc3xeCdeiKHWKhCe1yCgs1HGj9piKRir7occzmTBXoSw8oraZd4M7BQghCf",
  "key3": "up1ZufYp6d6bntjBmwyBYsupbc4qmiwKSLqkbEqEDguJbx2LiREvCwrdCM82kwLd4FCxfRUXkT8cGWCDZjn2CA7",
  "key4": "5fpfyvh8nopK4ckBfF1iYhcCzsv8ysHvUU91A7D5FPRpfWALiHwc6SFuwmL1CXhJ3AwXZd1UvBsiX5ShnKUrszqw",
  "key5": "9BMRGq7teCoZYfexoVCwAj2QN23Z7ugwqcfxMSns84ycN14dj5PTAGJCabK4xt9kVUZGCodg3DwowKFkaPbhME1",
  "key6": "3a5suPEoNqCS6ZQtGUXupTkgeo615KSNTmiWB7v8uCjgqK5yKK6MaGiC3kCeE1Y9UkF13sCuZ561RgwQG6UVuY4S",
  "key7": "3vDjhmFLKnTyVzqSwhCbrSPTiWo1UPjxeG3w8gXXPKG6MNrPRRqMkKdXAWdWMCfBZpCQWMBMk7WErkTast6Vdkj9",
  "key8": "4meY6BXSppsYHGSTUaQERj1t2rdiM1xApT7aCUhRxUmwWxzB2w31BjY44Em4FxaCfoNRRYXUmZzxen1pnTh4o8Gq",
  "key9": "26C7t4V9x5iNx8Khcm9ivCA5as1Wo8uSBwaKCnFsnuHZoBQTpQaijSHuZcQWsCiRgd6keihrrjLv3BfmsoDB2chr",
  "key10": "4YrqJY9871GqDCEMdP33MAP9W1QEQLTqaXgDkmYhuqJY8ENJjP4FSLfP5pTNsFHwdzUxZg6ZvbSHfhCE1F5RnU2p",
  "key11": "2p6f1DKsAnatV78Js4fFH4vjFLpbsa8hJzM9WwNtSH6QHt8zoub1KKiPinMr9K4UWxo523Xq8F7ycsRUfXCnvR6e",
  "key12": "NwwQimeCjZXNAHhN5iMTidp4PJu4mauywJZHnMyiRhgBjS83qqKMfoVG8PC4U4htY2ZRMPN5yt2ooRv6krX9PHn",
  "key13": "3a9Ug7G5gZHZbrhPK97LSi4mVZo8AkLFu1NgvDt78wkDqS1ZT9VSzDKAMm47nEcJ4oXuRtPA7gtcLkvECpqMSL2M",
  "key14": "3ts1WN2B4M8b7gTiHR3PwB6WopjvW5qn1GJiphPEm6xHZ1vz8z8fcKsGHhad5Pxc5PsNjbtRvVBohXqSpYpKpamc",
  "key15": "6Z5nTn7pDGi1SjLwCUj8WrHnT5VPExxNjTKACzpHYeHtQHruYctY4QkJpi8UEL5Wsdao8X6t3BCN3HPcAMSvspz",
  "key16": "x2NYqPfn4eT2ifs4SmPxHGaVJJy3AH3wqpZbBAGDbVaWMZpVWWdQhNeCjWPFXJb61RNK4UjfLfSJvhywoEdjpfC",
  "key17": "2cZ8iL2mvKBKUHK85JB63yGG7x46oQRF487jEeLCQyUtN58Z39HttkXn7BAyEnS6Wvj7yozaUk2wtAHgxojCbXV2",
  "key18": "4HzaafoP5fyqUkfZx4cxwuQ8bCWGizduYg5R1Q6HCHZFLNHiNuqrJNGjPCJf551LfPGb611NJLkr51XPkkd21ewK",
  "key19": "kEqAyRh5iinPC5CAFcnMxMbyKfXZvf9m8hjG3rnBpL5L87apTeMNRPH6poDoH8xePEbrJDjr857RKGH4c5ibECF",
  "key20": "3TS8QbPQtoMTyDDG1hAvTbJJXNLTNGyq1zsyTdwbn1si7NXFuPPw9To5wfN2Dws7Av6omaH6ZwD1nGRh2Xw5jGUq",
  "key21": "zCsPSb6VXE32uJho4SYuBCYxMPvRwME2y9FBPrdU1VmrXzXycZEfsJix4oCZe4T7yq71aeJdxNEVQmpjmWAkHq9",
  "key22": "25Z7GtkUp34Vs2vfta5BWh1mVqvf7TdcxLZcTuFCapGxTLrHDA4msu3Hp39D4vUgwU6g7Jdvhne6BPFdX1pWbWyy",
  "key23": "DEHorqLotKHPGjHe1aWJwfAXg4yYgNUSz2yfmXmBSTs7MZR4qQqkL3PnaR73Ji6zDU9pdL443xm26fTMiwBt1TG",
  "key24": "sVwH9ggm3dKDmBhpiqsFqf94UeCXGjhoQeASipNAmiUqpQzzanQwzX5U1nngs2DTSkJvDn9rY9My9ESiphis3aE",
  "key25": "2c5KKMhWEUmwqkrzV9Aa3GTKXMPW4Xrjto6gGhYiVyfbSRBCrFDJhaePzMYNC75ATWs3YZf6dmUYg7K5VMmY8iNs",
  "key26": "NyZhULWChXXVKg2gP6NmaEoRuGUJUL2sSYTFGeZcZvzHn8D3sVzo749dhkmDMhmpkB3rJGhm6LpSHS1FmX1ued9",
  "key27": "5Y1yuM6JkHdCzUGMZRRz9zSz1LdZqcmKfYqSH9ogjKLct4ZEU3LHNsJoTvqChxgVNzwp7LMTq8dSN5P388ib7ug8",
  "key28": "4sfR9aDqZeAT8DqzSH1i6NEUst841Nqojwt99RGP6o3HQE8XQrKtbWZ2ArTjewqxPWHB4E1D3HaYw3deQDpHBr5g",
  "key29": "51EnkqroFtq1WcseZGCJe71aXkBmQxTzshk5SnW4xe9TVpdmfC3MF98ZiBJW1iXQgzbGq1EanhLKgD1XsAjVnzQQ",
  "key30": "43bpB1zLX7PSdAudL6FibupZ9xTMTvTZYoRPZNSnLEKLt2Z1osLmCFuMyTuRRoNVtjq3vdnoTuLv8LudLzVTraWw",
  "key31": "2YFWKb6cY2cdFRaJL4wLUuWu6BmeTFHxQrVZpnicLAKHTG8zgSNPYQrE65Gz4TGMyNPpaqMfp9tNg49HyJ6Lmpjq",
  "key32": "2oEhBxc685rpkGZvYytYD7CLb8Ko6rJJzda3b6d5jMfvGXWjfsRCaXETbWf9Q4vZVGwTQ3fY98sJovyD9sS7EPcY"
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
