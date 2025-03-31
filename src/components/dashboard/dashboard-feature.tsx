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
    "2GNMjJ13Wao5xE8EnaiHzs1b71zWdGykgKHQwMdbAYA3unRm1E28bpzkU8LhF6quVhUGo4cDGycXLCVpdyvhowZB"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3Eh4pZ7eW8XAf7UhYW1oqX4dk2Nxtwke8YWxEtkyAH7QJVaPQ1tbAE1ECL9jMqGBDNZpUXmTsMxv46tymfoJipfD",
  "decoyKey1": "4hz7zgfTZEhYGxHqNMuHwGnRRi8L5tKegkzV6FvhmDJW5YqgSgM2AaaDiPmKenYq5iCNCEoUzZnrLrbeWZb2pCYj",
  "decoyKey2": "2w1oToeGBAFrxv9akXY5TYdUqVJrXEBF7MvWGmCYJeDsRHGUeRWHEixHFHzzJMV3tnKPg5qvwi6ki5VkQ5e2zvjb",
  "decoyKey3": "2u6T4MUckNqjaooy3HzaywUX9AbPX2HhfqX1bH5xLmefRx1MnRZWLR4V5SCWBCGrUYt53QPvkxncSZBXR7nD55NW",
  "decoyKey4": "3W8R9xGuuMHnrekmdnv2bqrCLrbVFvDXf7Nfg2f4BppyXBcg6SDx5E5gPwqLvtQdLLQVUq6yhAHpLuXpRooDWkQN",
  "decoyKey5": "JYa1fokVV2nw8HWicRddo1Jc5q1MByvKySetiRBSdbaCcPj9DKQR4LnDXa9MKqfnfApiYnR9NJ3esUeNNWsJMSU",
  "decoyKey6": "2occZbatkNfHKLc2GdzSwWZsj3K8xuWFkCoHY9e4dYBE45Gb8dkfYsnePAvBjE73FSr2JEPzf484hYpfbWdRoXHV",
  "decoyKey7": "2epD5mpcoKi4Xph3pREQe6Hwoe1uqijwexLVWiJewQnkXmujz6C2FrY6qGqWK668apMT5hy4NESn5fdvGhzjxsmq",
  "decoyKey8": "5PtoVPsazDQ6tb276qb3MSauShTqmyXhWTmBAszzkBMvLHofnfUFkFFfYmZhnac3suEfsTgxvdkL8X4HmmF3YnVw",
  "decoyKey9": "3y8K1wAW5mUXvGjbLib5XgTCLHmBSZsjCHe5TqJQPzvq7BEFs3Y83KMQ3swvkNkHfhQM47d1zEn4wwSQ61DvaiqV",
  "decoyKey10": "5xRAUxaR93aNx1xxtnPrTK7fgeapEjp21RDJ1h1h6MuUR2aFLaWB1vKitDCmqFVNvLMa8i5xp27iFDemm3a66Zhr",
  "decoyKey11": "2d4YbTkGNvVDJszv2jGX3r8Nw16mWkqqpmPksA8ECxuAjjc98THzaCb1C7dVKq7dsoeauB887U8983SsQ9YjmACF",
  "decoyKey12": "3iQAPLCdAczREQPDECugdDW9aReXRVnf3zLXgsgyJRzF2Gpcd5uje631WkxiUectPD3XM5uALo2597TT6qNMHChJ",
  "decoyKey13": "2DC38yC685Pa26v1WQncQYeBuGTqAkkMt42z9FtzczC6R5hPGMvEs6rqsMZ16WjSFZD56M4T9vVMzKWzUWrN9VrP",
  "decoyKey14": "4ZrqTSfMjaNTJjnRRnQhhy3D3V1sxRVaCTfZ7sa2yYoNhhoZW5JoKStFNUftnQnzmXMxbDmKYjqVDeA33X5CUQF4",
  "decoyKey15": "2pxsMw5RbLXK66DRjbVzshKRPjRgeqV95cqcqpsUysH8rj2zuP8dcK8DDtKSwgbc4DEutSfwY9oYmaQ6SZRdwfjB",
  "decoyKey16": "4kXivuLY7sti4GhChWUNN7zW6G9X6qWRWYDwfZGNvjGW9MQq7mBSMwhiQuEQiLTKLgN2QAm29ns6zPLQQ6H7UyXm",
  "decoyKey17": "32wAhaXuDoaGRBTParqSKdbSMUDhsHHXSqpM4F9SJag5LgCC6CoWDsd5HzWGPS8WQMXttBaStiGhsLqFxjXbavDD",
  "decoyKey18": "3EKMe9PnJqquwoAWCu9AdjFAWWix2fWkNvHYZuYoQw3RxFEtNea14hrxJyoUbapd77UjGNP7q17Cko66rjgf3821",
  "decoyKey19": "64TD7rh5GV7V2AgKQgudZRq6mp6JEiX3GQvAa54NXhtvn57AAmVnWNnxxHB5C3PXJ9GgKq18ZPEaJWdq8dLtAR8g",
  "decoyKey20": "2tDmLbqH1nzpVcEeDxYRFnSiZggmQADajYUfLXGASfBVU8hcRi4JWNYThhKxKjZ6Zg6Z7R2dnUV2Lzc2vfiNvijC",
  "decoyKey21": "HEh6LLE7xih58NNdx76G6iRp8QdJR9AxPGKCU3z4zUzwzhNtJb1yqFsXcdYYk3kPANEiCafdb9eSZRttdsbWKVz",
  "decoyKey22": "5bjSeRS1i9Wv26gsexbjJeCAA99yaZ951sSpeSdfFMmQAePjTEHtQ82tnbXdxMWpphEfe8rhJsEFyZx6fuAf3Uoo",
  "decoyKey23": "Ntsj4JbM5wx88f8gStTYADhopfdnB6gvWFMf2E9peCN1q5co7QcsAYS8DShMZ7KYMk1DtGgrTgyDFwnePRTXZbV",
  "decoyKey24": "EmZx8xN67egoAoPLi7to1e3FhAsJMhsovwXCK9C2AThMtgAgz6o8xd8agzkxrYFAqYLhkocfsyy37voUZcuruer",
  "decoyKey25": "38TZMajuneukA6BksBW7zVjVLz3g6rai7gd2chFRd3dpp6rZ22gu25JEtz7H32aK5tcu4aXr6QKbtPmPGpDFzpni",
  "decoyKey26": "wtneA2EA5iafDDJ9GU3ssHdYpTs4BN3CC5QGyiiSXUVMfse2VU2bKhtywnssdWZQRt95ZN8PuPpR2vTDyvT4Yhy",
  "decoyKey27": "4rGNV4Cj8c4U3mVtLYhFTKAVAo76dNqCTtmfsCaa8rA1nwt7sYZSHKUWgzcqwmfdShRDE5APJ3qXxVZpPtwKDk5q",
  "decoyKey28": "Q32YptKDayoeRhFfZubArhQdq82uRETAUxt7kFFNeBV9khZY6SXnEnuGbHjtZP5ULgf6FgRKwwTJVaSKNstriP5",
  "decoyKey29": "4j5U96ZqPdnbrdwkn8tE3BATYFZQnFFt7dqefodFzaDbgKnyCUS7GkVBFcxv1525gGFx1xyyQ8LSG4a6ywcNsSDA",
  "decoyKey30": "2he4nziSjkxwc2b9S3YyPcFp43KgTPKn4erWSMP3tQ9BHNQPvx7yJ157bT8QkkqjfUN52piaEBQfNKXdAEaZQ19Y",
  "decoyKey31": "5JkkgtkfJPhHP2QVJ89hzC3FR646qM667jnG18ScpkSuwsw5uTMVnDMKfFYpa7d7gacVR3opEC3gD2AKzDoxZERo",
  "decoyKey32": "5W17dRiacm1CqCy3axBnBp5myVJ6qJB7YpsXhhEUzyio1G6hN4trKCWM5BhgqKSPBsTEvTqF5avoLCifseqck9v2",
  "decoyKey33": "4WAPjg7eJp35F7EgTo1YNiJcTCSpAV5RWn3FSugwhEq5Ri1hzSXhF6eCEKGVX3nHMMtBXNbuSTzVaRPFm8K2btt6"
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