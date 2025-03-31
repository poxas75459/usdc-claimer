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
    "3azXkiErrwXq7EGP8EmpV3DAM26rvXQHon5R7o3Z3tpkVsn9bKwVZxyvQd4CAbi8GETtGMRSMYEAPxeWXQdRm73y"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5BqQeYqmKcJWMXS3uKaGQMwotgVE7MPs8P6iy8TA6PxGCCHwLfBrjr9F3guLk19vSJYQMLRe2yLJeKhavLaaYqJ6",
  "decoyKey1": "25impmJGNPt5YD3XcGUTfgizt8pMZ3z5pzBrEkrrC9RZXr4zWCsbvwZYTf6BMu7rLEFq8oxZVZ92H5rsQQXF8Ybc",
  "decoyKey2": "5ZNKEcknNa6dreGJexD4i2ioMNnYc7nhbk5yG9apDtJtLebeEr9Nky4KY7r5HsT9Q1A9BnzXbie5FgGo5LXf8YuV",
  "decoyKey3": "2fTnWPhnhHgtYbaoUMeRBbrSw6JvVikngfRex5XZS4uMauCjRiCuXpsAVj9CqxHavdRk37P1Y3wFCKdP4DHEhmf1",
  "decoyKey4": "5EKnuihQZK9xx8cSi4FDj6BVFh2NFsZ98CK19CUEgcbBNKYGum3kHR7c3Pz1M9usM5cM95nx6RAgf6mt6Ld7SsTe",
  "decoyKey5": "uLX8Q6b7oPFiHKwonBWLjEMz75zAFuTovH3AyaMraPHRcjge5571iwjfUXoPfA5nkSUwqCGhvZuPVLsjqDuPjDN",
  "decoyKey6": "2daiGVH9sKEHRuPvodL22uHuUEg6DdeZMFFEFBTucRTt1MBZpSckvnxp9xEQ7KGkTNchdjWZCNHgdp7z97myUZkh",
  "decoyKey7": "4ZAKasfhARQ7ineK1mXPLxyAZkjiBjGHeXESkZj3fTKixhWBZvijLedQ2opZXHHCEPAHoNd7hVzwVQHCVPi8g7Bi",
  "decoyKey8": "4L6MTHxXT2mpFWW1GYwzaSs6FRxeS8NHxuPzNmsohrYxenGmr8aNRrc4C7xLVCTgQFQ4bAxqoia85YwmPYqQURTD",
  "decoyKey9": "S684F1PtTiBtNfwzLhFHLNf39A8QYbjaS5tox7SNcomYgM2xLBL6izetf4Yvo24j9pDWtbMFgPq2kShizbJeJW7",
  "decoyKey10": "C2VrN3nRJfjqGj5ewQCwbVTLWi77U132ZCAFujBBbed33ASv8h9D3qjPoMWD7we6Hjq4MZgcGZThyMXBJE7bZr6",
  "decoyKey11": "2SqsQ3a42TYozoZQr6yUUee1D5vZY5CKoZcPu4f8TSUE1V1g6dZA45UGnkPfVkePZB2ptrYKEAFAK5sciuJBYPhQ",
  "decoyKey12": "2SnyKrRFJFHrVfnVyEGA9KZ8HdE98jtjCdQTJc9ZBYV9kEF1ddki6Wa5V8kcxpecpR7x7WpWwW1ZVx3B9YiY13Dn",
  "decoyKey13": "4gqVTZafn6jVKtGwLZ3vg482sLFE4Kq4FarXywmJobLtn6GGeFCXaVcrHHHCc4c3NmgPqSA6EDxwgcmeaJqkmL9U",
  "decoyKey14": "hgKFKgZ9CzmBi44dqAqbeKaC9tnZnYWkFWch9ou1aWvB3aFvzYVZ6w7yxKaXK8ij4CKj3FcDZrs74PmQG9Uw2XS",
  "decoyKey15": "4wHhLXPbEhn4vjiK9kktT5LcHoRkroPEPdKxNdv5gX7rxzhjTEynNxVkuyRPPiDd71EDcY7BCo42bgbbmoedisDd",
  "decoyKey16": "MKEEV6sjzfWN5tg1qfYuYtCGb3vRe9LqYsZqZ5LYJrqEbe4BAkfhZvFqt41Xj51dx7T6yDCnCDHUdXxusuhyTnU",
  "decoyKey17": "3s45tgL45KNy5vVaavmPFaRuWwveKzJgMWpL349uBUZmk3UHcpT78vR3qV9vQUtkDaSm8QprEPFNubPterz5GnK5",
  "decoyKey18": "2jKRVhFmogCW66fgHtUoBD6at6qbCvqXB9fkzN9QRX6JFVifTAgeDDwZ4LYujzDzpnqxvhjpNrLrZ4QLfAxawnRf",
  "decoyKey19": "2gc3Cq214PDhKWymLVJ5JNz4CkXteozsv1DKxSxy1A9GSqPnboDPye4oGVBnowK6yMJ5PcxeDrGhkMGJ85jJchoM",
  "decoyKey20": "3LBJMb9zMZLE9MYUTTtunwWgtz3TqnaRSm3wmwD1Vviu4Uf9wSegaMHByZm3uiyreChf1Qv81FLAr7sdpKCSZ7Uh",
  "decoyKey21": "67rCB5s7eC5G3hppJJM44LiAnRM8w1Uph261YVhakwouS4r7zHCUXz2Tvitc5GidL5qjAfJAbmbZx8sF2qpYSQs7",
  "decoyKey22": "3hUjN9CdUE6QrTWg6TpPQSZUS2BJbTuD3hvUdUpgr5cNZ8JUy6eKp4u7HTL7xxEcyi7ouH3QvS4XzRy6RooVTEfm",
  "decoyKey23": "2h47w3C8xtXWnBroth2BJBAJaKphhPZFywVLMZHSi89A4qBw3vRMioQSX8Xe7VHmPhETXrjS4BAxvpVTHDL7ZNQX",
  "decoyKey24": "hzi1wqXvgc3ceM1k6bcrjDLUZ1vfZgTRvTt1Boafk7ttu1gnLc8JvgPK4UWQhBzN5D9mn2vzFQsig11mnUYErpj",
  "decoyKey25": "3J6vuGbebCqAKzC31kRQgQAWC8HMoinEr9G6WhRrVmHh3S7FfrvHgsBRQspahYCj7xSEi68SNuGJMr1Cha9x1Gun",
  "decoyKey26": "H4WvLvSzHY7c9wxWRuTtXwL5YPstiNTkWRzHnM8p2DEGUyPXoTkVvnGsR46R2GepPNhBwoMHtNkMpjdD8yiFBXh",
  "decoyKey27": "4Yan2ge1fxY6kNGViJRxtDXk9sT2WC8a4TcPBWrniqS2dNDGh9GX3B8ZtfjwCHwNAiAzTwoNx5duXke5kxWet4V3",
  "decoyKey28": "42R7V9k7c16oy2pbQkQJmzU9frnUopUvZP17HJ8NmnBtZnt4qBG4ukuSi5wakUsZ66tD6kAphx18dvaJYmagwduP",
  "decoyKey29": "5MRMk3hQwTSpEDjMustfwdK8yiAqiepwKUUr2x8jMTfPL5rGaQYCR8FoXsN4373mvigRLq4FuVD67JBko5JfYk4d",
  "decoyKey30": "4mHRcriLU9SHBXJZKtfj4rXySTDFpWqocxjv5932k3LK7TcNQmQusKVWXnNUsgu1thA9JdtJyX6WNTatkGJMrbhS",
  "decoyKey31": "2Q4tE2hbTxL3ZGuDnbbqBkWgRedkfffawSRpECo4eNTjdigJzj9wkc4ASWMLjwGDkZDMu64Cogfyvbwyo7aatJR5",
  "decoyKey32": "4gp6PwGnHdw6FziiuwWZVi7ERrGhUoU3Bw5xrqYNpLftRua25WWy6usTpY6ekgEACUm9dpyh9pF5xWRBo8CYCnkF",
  "decoyKey33": "5uxnRrPfiJJFZWAibNfTvuesSrNy9umERCGmnqvqYm5xFCW1VDbnyKyNfrVUFPEjwcR8jQkEidvFES97se6PUPRD",
  "decoyKey34": "Qox1aVhiNYp3h186HaRNhbDHoBgL1Rze9vpW7teVYx9XfQzRkEh3raZnp9gP49tfvZX52KAMMSEYs1ZMS1fgyvU",
  "decoyKey35": "2Qm3xUzTFsGtL1qdhWe7TeUxCqdf3gmmf4q1AE5hvnv4kGndEK2bTviiU1SQCmtwYmGW6b1267f7Gc79t7AHDt8G",
  "decoyKey36": "5jLPehzWwgAaLTS51WyatuxUyCWtyGMaUXRAq3dmTiJquufSTmidofeNFu6EcuPjNMymN3wMod9D5APaiRJgbFBW",
  "decoyKey37": "hMGZ8VxG9QFZv1eJHH3ku5PH5kvPBGKLGeT1rXTM92YgdpNzMF7LiJtbuMCfnwr4E6af5z295pD7sXrr68b6U7r",
  "decoyKey38": "5ZxMYambp4aaoTfwrnPD8dXM9JzqJMs74n8YuGBKZF6xfYB3zHWjWAguZZVeGG7EvWBQJ6LVdfoBWcXHzHPb5Fc4",
  "decoyKey39": "5UFGgFtjr2F7aWSmYtcm1RPybPZUNmXjVrD3GgysHDSNNNYVQ9H5vDKYiRwSxp5c4nb1nsMJUpDqjKWfR3TyRe8d",
  "decoyKey40": "44eQAnCuhuDqYiZ7zK9gpty6DXZcZdyWt6Tn2t2te1ApdYmN2TUjjfb52XzNbmQc4BgZ3k73ftu84XqkrTe6xRJ6",
  "decoyKey41": "2Ucg73M5DGDX92hbuWnyvdZCPJ9EMQT3NH1PndtMoY5XyT62NU7MZ5FsDFqje8Ah7GqmxQmFoVNVw5wfR4zm9YK3",
  "decoyKey42": "5qtdQMnAPmdEZ1tLcpPoiiMzmY3n8bpT8Cbrn2XH9PjjarkAoQhJrVZKoVzd68VskNJN2Mo3mF1FQhMsd153gj4a",
  "decoyKey43": "3UJ6viwtmZ28e4EA1tJKxjC3ECDR14kkC67A9i87uoahpde56t8wnW8SU1UCczrkMfxigqwNc9tk8HwVyXsS2APE",
  "decoyKey44": "EYakBSyqtAacVxwbjJbjuEpRUs4ZYomHaSzuCYpmKFdQopMj8v5NBCR1GVeZZ3Sz4F1U3arbum73WsS8xtSf2DU",
  "decoyKey45": "Cs1uC95khs8Hi2SrRXeXCfbnyF4CSXZEbBi1wZYRp4dKK8bjVUWdSi8wnCsE6pDFHnKvcWfeVjdhzJvMjhLERDd",
  "decoyKey46": "4MXUDaXXJFKWxrTt3jqKihH5RRsPJU3qopGt5tzkGVmezaAZekoc1nwfRada2wF5BEGjdsGHxD7sGPT71s4g7dZ3",
  "decoyKey47": "LGtcs33T33ypzwVcYUTCHycPLaT1YFc7s6mhn7uqwKLSj3xWkN7XXjFBmznKn1sspKdMvG9CMb2Hbd1zSpQFYfs",
  "decoyKey48": "4ZnMWB8e5g6Dioyus82UxT8g7ZNZazSzazkk8ffafPrKEvto4DeRSPi34qcMxqB8UCMq8PVAvgiy3DRTmCQA1B71",
  "decoyKey49": "5bE4j7PbcZ718iNQyfcdc9z3oKy6xCcisvQ34J7pePGqAp7SeMrkYfawxvCaMeTSXzZktKYArxsjV6d1dNGnxGqN"
};
// DECOY_KEYS_END
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