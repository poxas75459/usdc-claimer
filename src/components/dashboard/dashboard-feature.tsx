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
    "2ayHHY7bgFgcFDPpAbm1SRJhReVcRAuPyJhjLGxpKnkgDYrEDrft9iVUuGsyrE2MWMntBrUfjfQvo8G9ZGPqLhUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "huk25jWkp3sAqynwX9ZLbkSVpZoo3vqoTaypsRPNE6NVZ5smdbWmfyMCCZ1oP8hdsbv9nbNW3jicb4XxP4FUZeF",
  "key1": "2YkAigh9vNvYRWxeNLkdCNCNJFS2JrKjThpioSwDgorbGBdEstXLj5iZTTHj7tc4Amw4EyCUqJBM48FxLcgHUz2Y",
  "key2": "5LY5thZ7gNP3ZmGZWkLn4Yeao92z2JczELiozptZjRHenppofdywKHiLxYgrvV8shVBoGFUdyjiWUJ3RYcNR5zmz",
  "key3": "4tVUhDGuZkc1LMVWpfRbGprXD2CccGCk1QWUnnGz1FyNE3RJotouUWn9gqYaNMJgWRL1EP63QXpy6FALNPjx4ZBq",
  "key4": "46odsUfCfcKd5mKuvUd3hukig9ifPqzfJtcZWUnzftFm24XApyQ7HiHuumsrDppamFREj2iCn5Kr6XWDC9G2D5KW",
  "key5": "35BEY4Vt8VSpkWSY55RTtsjKq7yXY2HQwKFK5c4VtdhVADTR3xbgViNGxxdVTe8Wu4Nx3RZzEiiyAEVFXW91qz4x",
  "key6": "2wJELyfNuuyAKgEW6qqLyHhBnfRYVt8PN6KH3YHrFKycLGbzaqb6RgYD313AjptDi4o2j7PxH38Wj6xNzzpPPXzZ",
  "key7": "4cDvLoRBEmF9fu4ionWUFd4G5rXiWmEFEg2n5kzBuGhnLQTntdJ8Di7GvdaZyHqQLuhZeVjzxiShmARJ8ToSohe1",
  "key8": "4dRZyR957oU6R116Pi7F6aYsVxNgCT6qqm7zFc1y6DnqzAE2j9boH9qeXK89A3awwDCLdC4T4yY56hBtLzeUSPTj",
  "key9": "3ExbWttgJAm8dqriKregNQzmuHrEzBaDM4wNfkCUaN6z3EG1rtwrhiZtNrqVsFH2qj2FHSiG4vwvTeqR1mQjsk3f",
  "key10": "54mB4mp6swyCZhyJJvrjjnu6z7aT4EWBuw1e9azvfAhpL9JAJvBKBxqMcXfpFWPgeT16SsyHVtpbBw4pY8xcUY4t",
  "key11": "4G4HauxfoNPHXqyTcEeFt1n4rZYt8kyfhz48Wj58WXfPBEQxFwi9BZQKJQ8kCczyDReTivkBL6oBQ9b6R7maz9mD",
  "key12": "dxU9DySC7pqP5o9ZDTc5NgqhtfhDGQ1syDVFfviJJzMEvYoWFRhgJPJhHhbNG16Xb6spBqyMozUYP7noCsYRGSD",
  "key13": "3ibHiNLeqC9Zueg2P6y5pQHvhjuoqwnbB17LUYdb9CjQGYTd6YTcR7QCpJRrBmDAybfAnSHKKid2usYRAUxESy7W",
  "key14": "KuKgusHQjqyf4amxNkst4Cpe1MQ1HBfY9jq6HbSHHT6m37gWKFtsNjfysQtNn6WLWBHCbkMDb7x3fpLzc4CUkBM",
  "key15": "2J3cPcWy56bvPXAwXqTTximT3Zqx1ahcLtZqb7jqdyEhDB4i9seNUWFRYB3i6rpkEDHxKc7v92HYqM4akPV7Jv76",
  "key16": "VGbKFpy6qcGxJtKvLLUPpfzEaxk1KfeDgLpiV2DgQcMJnygmKoonoguhXuDPHpyMrrpg2J1JHsqwPYtZBRoCMNg",
  "key17": "3M5V7PpkZ3SpZeuhmNepEWdqmzcLzmw8FpRRfGcdaL2H6FusA2xXD4cLcd4PkiH6TiraQoCu3ChhV3fhnBAsaAb2",
  "key18": "3B3PhPq1gtwRetHy7QPzVnaRkd5it5xVzV3g4RPSJfx3std4fY3uZRdY6twgrrzAZFzi4tuxcLgmKwbFgNCd1JXu",
  "key19": "5zMro6ddn2ZRBTHcsbLTKXi18L6RaX9QGFv4AjDngwmawSQPnGHqPYcPnARZGyeKBcBwE8ccnqTzpHZM2jtRojkV",
  "key20": "iDdxs43DSn9KcMuHoTMUJpULuJjEGogQ9PrCCskbZpsZMSDys9QbizafSnnjj9shGV51DK7qnoSVVqRy8WuNGL8",
  "key21": "KrVm9rr2TTd7ipTvJvtJecBraMu9CjkRZ6Df9r1c2QCg5G3Qjy9yMdiMteHtqypfoLwRASpmD81HK2niGURaha1",
  "key22": "3t4zwerRE4CbEN8HqG9oFGmBXQ4WDaUhpePB54vs2hJVofJHugWnrSX9iti6FRZdFghweoFhDD1pLcPBqobS4uYW",
  "key23": "5UBH43eAwRZPWTCzjYJNMqM589yP6MwQgQyawcQnGv4wmmep1fJXD5izfaYK6xpTKEY2vzKS4Gk4ntGDqPHGq2gf",
  "key24": "2S4C9Kq9sEVJD2mqRQixPEPAqC1uLcW8NrfrJiKtcTKrwGaD8UZPp6ZVFEAKHayXULUcRDFfVhDJddCMVYwky9Pc",
  "key25": "28r22Sq2cT4Twc1tGrVJi6rn6ZyPuUizBWGpawCdDiPDGW1sBkXcDADniCaAvxd7kJhSo6JcNdhz3X6Y7zau9Bcg",
  "key26": "2M5KfePpYGBkrufC1dimoLyPruA7NPdFanbWawSavRUH6QuLbw5uTfKMJR2kM3bJvSNeFfoYNnY7fjTPwQy8kTh7",
  "key27": "WerfnJryw9pzQP9bGvsX9au7TKpHjek82H5L4jnvZ1kB6xLwQVFLCpX3HjPq8wYkXpknTyE3Vhe81cX2CdoDY28",
  "key28": "5ecbX7RFFXCddaQ6i5CEqcGVaKnAWX5ZaNuKfSQpTDfvnZTkEtqqRwaiiuf153Hr48KfmuuTXnZYEFoCtXRHYg53",
  "key29": "eqYxwGHogp6AptPxQRf9KpL6otPrdm77zHbe9LuTFa1hzGvWw9JPyDdvW7eo8NiFyeHXjKEp1EikQ56VXpBkt2A"
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
