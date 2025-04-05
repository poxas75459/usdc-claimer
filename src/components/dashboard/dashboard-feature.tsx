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
    "EQnkp1zY9ByxDLKWLVicoG3ydVZdroEYm5zo6PgUGi8pJA4ZbJed6UjgndB37aMFgqtakGbeLXENj2J71RQWeAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REHLyZb2p7bft5d5siBeoKF2VaabfMmuGuAcgHNDLWEzHXB8uKVAXzyk8LeJbJjjTQbARWVj6FYVNnwUppY4HSv",
  "key1": "4shGK5nCLRxoBQw1zS86vSifSyiiTU3D5sL8RkMGpm8G1SXFRgFnEFdRMm2qVn4PJh9yhoeB5xRqj8D7cnwLQNcZ",
  "key2": "5W1jXgjcvKzL61QG6zPfqo2udobwR3QUWQrpXVUvrtEZyTpPQm2mbgAMS2xzqeDG1PU1zKy8ym6tugRSKp1WsTeG",
  "key3": "5T2GKy4iVYn7HTvn9GKbiyPbgrAAjfGNr7KotJNc3ktUKnCNngMph5GoRa7XAzDcr8vSsABW76Ubs3vURMHpf5Pv",
  "key4": "3EXAgC3RzXxkYCrb3pMUZqStd32LMMkEjUUn97M9aCZCXMQTyk3TN125paJRvyA5mnMPkwjM5h4JSqpMQYgFzHJ8",
  "key5": "2CDQVCdYFiFN8X6AY8KNhHaRN4KzeaSoL2p8FVroWB53t4RSX623o4GjgukRoAXYK86FR926AEexQ68eAxbJ46ry",
  "key6": "323uymSYVqseib1xgu7Rms58BEeD2E3GjptnaSnRC9mwmsgSEJmWqP3FkdUUa8zX7rfHUmgM4soDyQj9WFhvYr56",
  "key7": "3NfERvfRrVYaWthNcZNVHvB9hRjDK8ZFQXmwQSwc5JY8pCRNrdDCtPsAWzmEuxfGR9SzNx1a1GiApKXkvvWZQnT6",
  "key8": "3uttpi3nGgFpQxTvbSUL1sxroREpY9CA4UNcWVu46gggYZQYrGGVDnAoAFqqcgXdwsUWqzRSkTWie5arjdiMuNnr",
  "key9": "5a4D7wY5k49YZHV2G6yXpsaXZfaef9GYQtejbw6Mjqrbo5sj7pgAdnJSRW1e4m3rQ2eVgPQAPPX6urhLZgKeRwp",
  "key10": "2HXEsu94adTc3SE7g98y1v87LfZTHfQ7fCY9QmLgbReqRhjnMAQA7NM42MTp6a4S1eYDpSMChdqqf2PU1q5shEr5",
  "key11": "Wxo3uDsS6r4p1CKiKAhCPwa1m5Zubz5Z2JGRtPs2DrQuhyquqfEW9bSVodt1KVyWEs8vsdicvfZD1fYskv9WMKq",
  "key12": "Ldhpx5YYtyemSuddz7XDtjTurP8WmJCGsrWm8ZK8KcGoDmV7rioMjo7XBivuyZ46vqkEUrn4864MoNkVcAfoq7J",
  "key13": "3nApiQuXK8NZREM7Ccw8meTcGNkcaSrSCUznKrQjkEGLNnzJfKucoghFR49dxEAN2WJHhjwgLCbJGxmKX96Pn3sJ",
  "key14": "3vDPEtfpCjKV9Q9wNQ7iowCKbdY2dmmXjXNqwA3pVzh3HcVBCDdBY55zXuvNcF2nSHUjFCb6L4EX4Nf4VSaNGi2D",
  "key15": "2JSohvzvRVBDEmkmUDm16QbQXEQdFhfFFBGrF6GeC9inBKFpBpDacEpqrXrHGA4jEvPovkNuY5arZEHaTXToCuWB",
  "key16": "CaC8UjbXdEKX2H39kuNdTdWSbvsAs9wcXgkCmUToZDF66EEw2ecrnuhkzdbXkBSf51fniw5vsB7zFqeyyji4xoT",
  "key17": "31J1DDHSDRpS2MxU1gFiZNfFJ1zjUnTpwBCfMiPhPRQJwYSiKajnSaHBjwJn924X8Kc7e4bUT9SuaTGu5e8xJNHn",
  "key18": "T7gxQ6xBMmjR2yBzQsKT117ho1tsHto4VyJKyaSvirqmRQ7pC86rxyQb6acsvqtPGgB5vSCz8cuX26Lv3CDhYEu",
  "key19": "3JQ9irXExjogA5wkUTDXLKC8m52PSfXUHBepgtocfR4dxwmDQAVr6e1n2k9M6D7enFW4EREitBRoqNHK4UwSxW4Y",
  "key20": "5JbQpidtUtejYQhRfCdjHtpDSpUaA7SJnXDeTjbw2izCTo9hmtT1mmagGxwVmcMJd5585BgXTHuu977C6iodGPtB",
  "key21": "29QY6umwmVV6iBC66Locx2Vinnnt9e7QS53S1g7pubfTM1474PdDZM26491Qg6Svt9inn6m4xbWzEU8asjeSXUdY",
  "key22": "2kuW4S3S6tnbJBaMqjqVdtM2eJDuFxo8nCh123BzYQtnVt4F6BCzWxXSTu5SmUWNUnudkkN25oiHrQaLuoCg5BAR",
  "key23": "5r2ksmMEjYJ5RhAtT6HDRX4ajsNsQRZhNG13EH3EZ5kXhokQSXSZf9Adx9ts3VdAALgLRvDqWy7EdvpkTuvHpKhg",
  "key24": "3i1sbMZwdNQkQDVzf1ab8dztXSQn3KaLou1AjuidpaRtHL7LiS7VXdMauHxb7cPULKYHioQNq6TPYAu2RHyUVLDM",
  "key25": "5LBLHXyKKtvpPP4ETgWg3r25243iRHgL4tt6pGE23AMRutdQ9UwVeF6wCcycavEavpwo6LRJaa8QsZSRvw9u2pZ6",
  "key26": "3hQm8AbcmQWNR9C1wXJfgXYVAhureoJPYAorYZAjrRJFt8tXJUqVhWoeqhGxpNL4C1mkkacY8FmRtuyX12P8j6f2"
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
