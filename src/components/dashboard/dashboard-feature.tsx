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
    "42WA5YAjwEMBfAFsiSti2FUuTyNEcfLufoRWwEntPwuKe3CFThFUxri6SApgvsAwnTFuRk6fT9ESH8FAZfw128zS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tsDgdhyKhqDmn2b14jStxPBiDcTvaPdmEvwTRBbXZBdKDFb8Z3kbmFNawFGqugxu5sXn3buEyKvrJykVcEVPpH",
  "key1": "2pvg6jMNhsRZRtjCJVZHqsDgChQMF3SD1L3ZPNdYCaeA5CWhTo8KjBXfZMwmQrDLYEcFQnkg7veNs6t3PJMpi3Jd",
  "key2": "54xgjn8phA5wwPjeAaaq7vjeD5LcKmuQJuoN3ArrVk2oaZXbMa43J2e4FfJnMAyJvgaViKnjuvnVzahq3Tc3HDoD",
  "key3": "2GCcjtpTQ73ZMM8oPvd5vYJfQb5cq22eDs3USx1vweR3gMvuDKzj8Wzwx2Fi87Bh4pn3cdbt6BARmvCjTpEgiYNK",
  "key4": "4jiojiFRKYjcWuT8FTd7EFPvGt32XZbarxsnoTUi1NPnRwgSqVJMfDEJGjYV28gdhaTzTu2cq1bxkuUZYtgoXRWn",
  "key5": "2vUkUXL7B9WQPJ1vd2YEZDxm7zLxhwmYJX31p1yHvgMgTrMeUMzHLwpdvYfBoTQQ472BN51pss64wj8deDsPNRqu",
  "key6": "2hNpnqTUHcmsehBwMREdBrEurvfGupcDWTxNsn8iBukEwSfGWyrviYRLbwG2xvS1dVGtKvpVocpMKr3sWNPbpy3d",
  "key7": "41HNVWNPLUfaEHDTNbNjdqCorsacrYTAp5seZSav3o9tWpPjyyFsNqg48y2Q5rbWP7JCtnRgDJn6fFnFcEMDr8gG",
  "key8": "4Mbts61heED9asB5u6HQiE76Gp7mYq9tWenqWnqz8Ny5tnD7PFiXR1yCsDz7eD1g5WEizcx9wQxHoQkb2LoNou2q",
  "key9": "EJevRQCKGnApMptUgMgVeupsENJBEX2Sa3WCFLXoRmsvq5QdKb5myrDb5pHJtAnEToom5wyQBNg7FiranADBrKD",
  "key10": "2quxxNhM4QUxQ3peewAU7TY8GWp53Xp6C2nk6EWZ5Fg6aJCJ7nr7qBcDuC6DxPEGpGhDo3BfGVNDdh6UBM9sgu9m",
  "key11": "HDZZa2rk7HRHQrPgSPbcrfRbYfG24bvDR8s3i8MkSr59yNojUdpHTkXBY2tt5zFivVVVb2c3bXALU7ZZqUNpR2P",
  "key12": "aDhGEmd3hNgZQjLnhsjpfTCZmyFFEPP8wwfJxnvBsp4tPYbfTihttNzUkkfsn73vmZj9sQYa1tYV9VAAY9B1X45",
  "key13": "TbZgDiqmTHJAsnqMMfF1tCWBQ3hXbXkWdNsHeRmCW3xP55Z5ozLmXqTaqv4pVCsP9AYZc12EMrdyaLnLQq3YnF6",
  "key14": "Wb5r3bKVMrCw9tMUpWAFrCAHBgcCecoSUDCyUJUL4D7At2ug7WjDQgWRUSYb6qjiSHH3sAQ9XoZZoWMCxZUdjzD",
  "key15": "2RbVNzchkQ3tqAoiFV4hMXYU2MGh21GkcussZJYnFmCSKazPrjxUdMixe8FhGFVziLSSGG6YCv9xXVfMzmbJooyb",
  "key16": "8wvUwAbsGD9RitBPbwjAWBarqWsKkpH8d52PrXh25TwpDwoz2JTzp89Qj6W2Pxvc89YS7pPEawE2vtFYrAvfJ3z",
  "key17": "436xJX9K9k5WzbAqMCAHceX9TVt9pNjv5aG2MW7APbgnxeVmHFteSvekd8pHaxTDx5dYqqzNR6i7n3iYdLsB8req",
  "key18": "4XbmEgvVrFYhWWNETP4bsR8eYegwtoQ6dozpa4QkC8w5ZTT3XGpXJEpJtG4UVbPD3hw47Ynx8ocV9HmRWJummJs8",
  "key19": "fPSZkFzVAGAs84w7Mn8UdWu3PaYGW5FhCZ5Un6CwozS5PLXbnqkpAzKPhXJecqA5GfL3XjtPiEvi4U7xjk4GeDP",
  "key20": "3YpJjFg2jUxhqrZU2A8MdwoaKYCZ81v7LpEm6KWFX1eDo5uqLj8f2NWDqrcnUq9B3XutoSCfsJN2ZDdNNZaTcFjk",
  "key21": "DtuN1ttEW6sF3QvhVYcRgz6tgSoYwosoXvk9rfX7RcffNz5G9hJ6EYBvo5vm17zS668xPLT2eRdEdAndYdzFcFC",
  "key22": "35wCDj6cfczqMeHwjJY2322SpkSREUX2Q2XNMMoknYNy5ux5r81YpDVuBcMsavdG23VWqj6zACSuS6BfU8jnaG4X",
  "key23": "5MoBSBMvfepHqPtpPMe6uGhxutwaVwjhhyWKGXr5sj1zThSFBU29nKaXDifC9jFt5YkAQyCba36CQvFP2Revb8Zx",
  "key24": "qaLQBQUKEdwHgSHzjaK7PZCZ6A5CJV8rVsNaLbFU5vxxkubSE7XSh4Js2t2rpL5VzQTBBCdpJtxoUh5Kj9N3M7S",
  "key25": "3LfmZMjCNcTWqS13KQRk4gg7dmWWBEvbs578bYjCTo5zBYaeDMQjFY8LC3pvTrEtLNap7phx62Tyubq9zbJhB1nr",
  "key26": "ZKkKSeBDNPpQkosdmfbtJixtcLPQKk3hcbh6CBSqwAKGTY55FiNeKKnnEoc2p2UZmKELX5m8Yd7PE7QCaQPDQYw",
  "key27": "4irXUu8y8q7dY3mAjsbksPwoSpYmhukm33JbqG4CbH9eBvgDteh7uNTw8BdL11HgKcucEJHdNDbguS68UL3KXdkX",
  "key28": "4BhnGWx4uZYTbJZ4J3vkVjoi7Do2iGPGojugH7gLAT9Mp6jMFzuPwaA692bWGfyRpHJ2xQMKGZsVLerMCfdbs54z",
  "key29": "5wkrEiFc7QPLfCiVdodpK7NrtLvbb4Dw8dSam7z6THHWnk3Ayze1yRpBWB2y7LckHnrovtDpmgAtzFTzFvTmgsuu",
  "key30": "2WozgHhj73oa5Gp9cnPFp8BKCeGT2DHABBBZZCYsGWcjrvxbtuA1rFKatTBLLxPXUEuiw1vxrwfA92kvVARj3at",
  "key31": "3sgPangefFjqqNdAsrsd1SMmuUmX1iB6pL2RJBVNR2MjeLd9iCn9G55bCPTDQnNwMGn4eukTMyWXrbTsVtvuMgZM",
  "key32": "3bV6hA2ohcue5ymGpiKDkTgjtfRMtMjCec7Np57bUmcHF6dtL5R683axwwoCWic2rdqxNiPfRj8U8x5J6k4T4aak",
  "key33": "274vMCgJW2bAu8ZmDv7ng2LDCBNvNvEuF1Ac2eBWUVQ7cp9bmkkZv9AidDYhsmVF2zAaWkDZhZYxCCaZb72tN7Di"
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
