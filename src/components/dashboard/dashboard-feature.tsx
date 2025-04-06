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
    "25S6HppPTaff5txgoePd1NkhSLWWyhs2UggifHfTDzFVxqKwCxHompuaq3hyXrCQ4z1YPaxGFkr9tsPzmFvLLeEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28rut3GmUvkryHUFmA5GNBMw24Q89Vik7FZV6oXMb3ugKjzoQ3qu65nAp6k8zhFDRyTRDEU7AUHQVQiArR1JDZzB",
  "key1": "2Wnv7iGCiyw9kArH6ZKe3HZL5igGwv9wYyfKRe4KssAb73i2hFqn2o2piV6kT6jeF3BCnEBKyWQGAs99hAdSmBZa",
  "key2": "YRMvU5MqyPvzhHEhLppwv5rzdgeY5K9sxypL8KB5QeKv6pTUoPcB7xNKzRRv2AJyNZHAwtFXGKJwrgkQdQTGV2p",
  "key3": "4SoSvYJzYjEDhWAD1pN6uJrC1LpKiW6RiqnZWLYxvSZ8EPDTyjSRWfi7wCovfs1WJaTAsKyEhdsPVGFGNRBnA7vj",
  "key4": "249cGeXFYWc2B2JzRmNPu3JqVqbevnnhsc917igV9mpf11PDXfiWp1w6aNZo5NhxQuKez2L9fySaF3GWPvmNGBfJ",
  "key5": "zfDv7JwdYHqybjnKhRZnEomFzut4NREUT2ay2iATjJDt7T7xFEcnDy3j2A7n2RoqtvJXxENzML3vBMGL5EQsfJ3",
  "key6": "2hhfJsRqV6HoyTAhHbNoWnNLxgeLDYi69Svj4YDft7MNaPNxXQgLeQMvRmzXvAxD3pZEJ8Feir7s5vwKUBysLpu9",
  "key7": "5FCfu1gAK5bsy926qpo793GbV7XHXmQ7nRq8cuTvrntacGGJDMCos9GiVuK3WQrKmKR6AYkDrXFGLnnqkiZVp4ke",
  "key8": "3fmvE1yezbtoSHm9RqKoGVoaAonBi3DKP4JA7tJt27vGXiNZoJDsexKr34HUXarFhdfJhg9YJsFCVDnfrK4RStWR",
  "key9": "3pdHqktSG18aFrD66BjmAwyv31pDTBdwGAyjoByaXVPtFvm5rATkPbsM2TmBeofcMqBsjJqga7ALWydUmko2E5Dd",
  "key10": "v7q59WS4bJbzcYmqLPsFrt7bBxaxShNiyXvVmgoGey18a7WqfC3UGrcsWmWjRFMoofFGnk3NmBfXqTspcLRFJ3G",
  "key11": "3NKprkLfUCfrrbuG7BiEQQUzwTbS2cRjjGPHuDNWX6qFTNFk7cz7LsyZVX8vYhcEjXreihcwKtzHR49YAjNvKbvE",
  "key12": "4d91UrB9oQPJmeodMHgnoHLZx594gSce5mYtUswJmZ21VGzLVL5zsDcY1WcwCjGZQEZAsdRbgDQPM3ooXME6y7A",
  "key13": "4XKkdPfhdqJydGomGnq5Qky8NoLmwZV3VN3wt3fYujhbUnLwi9BEWGKPFGKux7rVcxPah64xZ3fQmTwoiTJbF1Fa",
  "key14": "3VYdKC5WQanokM2g8Z7CqpuXPGdjMsRs8oRnVjdZhS1amtFRacnLYNyrDYK69GE21cxmsK9q5zQzop44EcEHZxcf",
  "key15": "4Avw2Sc2k418hoLrFQTbpUoL3QPznZwRK8CjTsd2UH4frDPys8vv6TPYmbnPet3tn3BRFJHXi4nicskcTPDnSTxF",
  "key16": "61r2hGPTAALBdsLcHWPNAvw3C1WH2PMACcc2MiYkWcSUkeqbQeDttMHCWw4HjgNZNnbYssXCDmGVhYJYKUfPzg9b",
  "key17": "2D1ChXWuscKvyQoGjdmdpJy3xrHCU3xPf6XkJYS7d4Wwb6UkJg4LjJwuq54GtU5cBRQgFvzFbuWiDJAGbFAUJzE",
  "key18": "3VB3Z7DLqADY963jCiTu4qLi7e1Tc5rFtxBpQUR8S6ZDoP4n6SS1cD1opM8Upz8uj4dgwdzoHeSsfZJekBUMcPXs",
  "key19": "4f8E2kxxVM2k4sqL5GEcNcdydD45CpsgG7Ba4X43mpqZpv4d3ifUo7a5GYUMeBGgkQUDjmT6kzqHBCn8nyyMyzXV",
  "key20": "CkbUkFRTdHVw3KNEvamkfZFLi3Qg9YoVBqweRcXMnL5Ly1QK3tFQq2QDi4yisR1f7HJWMZxhGXn8EEj9Vu67SS4",
  "key21": "2Sp2hvhzbpXAHDQty7tfBAwPwRzE4UpPsvBH4hmJGU4BqxnDJYSg5nTAXVx6CstZr1QUcLn7XY9j4kpUkvjySP9h",
  "key22": "51mE7WpBv1dL2dAJ1sBTS84PnY3ym2AEdkPfyTagU5738URmZxj6EPVvJBiYNyfPTQitvQoETfMtLjDCeRdyi3xM",
  "key23": "4DiNodD8HcGxJDE7N8HStwWc8JyYgobKMd9Au16NmbgYbvuAsaZNRiB8whgVrdgsoQTzSxhMT8oe9QPCKeFUmx1d",
  "key24": "3adRw8gUSKDXeox9dhxRhWPvT6G7TQ2mtB9mJfG2zkHgU7kVZKhUuUsXnJQZxyAtprqCRvrMZsJNRWGHzJ5HpjMg",
  "key25": "25CheT1TrpMvVDiNgSAdH5mvkvVEBZaadNPFT2Fw1AuqTFHUHbidQkQXn58UcpfMpjA7CwsdRWoLk3FFmgSzUuyu",
  "key26": "2cEwidPVwJBqJjsoQUCJudotZQVxYwjLwMx3wHwXAtRD19JDoNoHWweKgz85kg19b8xnJhgxWWj1yvM3g7StgbRw",
  "key27": "4aE6AhCV6tLFxiN8m4771i84xvC4xHkReoCs44xdmiehYcgMCSZTE6D4FfhVW72VfSCbBMg32Y5r9XCRYKrDmgV3",
  "key28": "4JwKdZUPq1BTTAjnXC9eUELFgDgPCgZ1zzG2jXdVkbAQzUeyH5HdAB53ZS3GR7oybWASf28N2RMjyrzfg81tVE8G",
  "key29": "5y6PJze6CF4to4JpxXF7TuktYoRtdeNNGip7JY7iRCkkkDPzxxbdt5aUXg7ezmPvpjVugKaaUqpDGFxcGQzxb9S9",
  "key30": "2CAVpFmtzZHkFaV9t4q5REQRmaGn1UwgLyD5rvEw1rxeLPgneXCYijpqHN3GMiBeDKo3tYRL1EFts8TFnSSszhYC",
  "key31": "4H8eU61EdFYrKCxWeYVNKARAS3paCy7WkMY9tbr3NDovGVZWpH7FGipfPso1Xmhjsi87Jo1LzLhnxoaa7NUq2kck",
  "key32": "5adLgbYMTBupuNAzfpWyG2TV9573JGtbwBcuZshbXpZGu7t6n9JsmH6gUV2yBNngSgJRdVCmfpdhxVD9R1RpsMmr",
  "key33": "3gxbrGym9fbXFQEj3ii27ioaT1Y1VmuKHzJYSgJuSK1xP63DHDoUAReRKmVpYS9WCnYQXCdAhttLSuhjSjxawZy2"
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
