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
    "4HRVMiqAv13svR35c1RUSeMs7WuHRLVhReWBjj1yj7GbB1paFgqr4ELVFfR5SxjgtsS4gbhXiDms1pE2c5acrPvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Voo19sdwX61kMzSDxSq4X6uNw5ySZqzACnXvELeKum3Dy91Lg2gVuYWARcgfT33nouPXhizXoata8oMmFR6nYJy",
  "key1": "koAZicf7Sz84Jk9GRT8RowLY9sSTYeKHHzHmmWayjncPfsQcHjWdyqJ6pbyHK7bVYV4VcrXBP72EhrsHebFrrvs",
  "key2": "2tqeaYnYsGtCxHdxg6dtx6z8cDG81n8mxyjmNWHMd5CsTSFRsQGRuSHGYzwgUEEUCd5omc4xWKJBS1zbFu1s2WNr",
  "key3": "35gEuoDbnEckFtiU99bsQRfM6HffQGmiANQmAqQFwRKd2AWX4c2KfWC5q9ykNzGeBvM6BzELjNmieER3NYJZT6hk",
  "key4": "3Qiup5bgCHzLNtAeXReBpQGCnPWYfvjhHBdESFj1Vjk4ziJWE9v7LBAaiwhzEgh9osrHBpgvdePJAtxDYPTp3D7F",
  "key5": "4gALRYgrDrkmSqA3VuCLemQ9xneJeX9ShePnLxX5anPgg4m8h3uf7HbSM84nh638quFw9KgKcvwNGG9FcXh6v56h",
  "key6": "4MDVczEjfeC76XqnPB6MbirbjfEPsG1ddZA4RViS9eGWmJSQnnv947C3ibqvv7Q1PaT61N2vd1EDHTC9wgKw7HY8",
  "key7": "65wbhR2RDcWim1do4JmYTLSSSMrDnuTawTXECZtCkWpDkSud3enW8i5e8i5BvjZcFEHfhncVd1dCQAGbmsMFSkvE",
  "key8": "3xe8PS4MZS5pVoViPp5WF5ZjdLpXkwa5L8zL5fVswyeRnPygDVrfQimRgeJmPxS9XQUZhhksETaVwGGERSdwfeYb",
  "key9": "2B2thNsWRbF3rLGPi8VNzhUXCb7VkKZxYucLVULeHaggVp6wZ2DQJF5aVR5764fF5Gj1BVixRGJDjbaVTXBfDQYw",
  "key10": "4MXx1CeM7i6JKigBoZoMcuVVHysGBCyUiZ8xJ5SpeosYqVem7TwH6xDjGauwpQCkERNffSnSnabYr6BJnkggnBkd",
  "key11": "4Dqnci11xhQyicHiuWB52hxoTzxSzYoGGUGrGvJ4W9bx9YMNEutYADsGoJVMheCvQGqz4jQGSgXvzQnYP39n1CC4",
  "key12": "2Mup319rvRUZmpQeBnfLGLrPMKvQRcAHAFpx8BTzBGUDijMkpwiHoQvHTXnHRLcH9RYfaPGjuyVW82zLNSPRoDPa",
  "key13": "2WqUDXdCDVXM6VsCXUijeppv6TAp6TZEGSgFqUVEBCDMfKvisP83ca41CJzHEsqhrSryz5sGuewdDEE4J7goQKz4",
  "key14": "4H7D2XvEpkoDPewAUn7Xqu339fmLrNjS8YWQy1KocumTAed2S7wZsBUcKxc5ep7M7Vngt2DBiqk4oReEahwoi8da",
  "key15": "3Pq3QrxGqrzNHnQG9PE8HvFYay7Cah6k1a3SUsUtmUyfyHEHejKi6Hj7zqZcY8zEado2RBYY5HwGzxwtJBNXG47N",
  "key16": "5MBKWWBaHnSDEEdvVMZRhDpX8ZCRV3jpDyC692d86BK5oweKMxgnhPrB31DUdp634DwqpivAjQhQwGTwE5JFnqv6",
  "key17": "3pbRfoVSnekqjaP1Sv3TKbWZ6LiPCf9VQr9asQzGLkwjnKwYw5q322bRk8ketPetbWwZgubuX5G7EM3KKr1vzVEe",
  "key18": "5XXKWDpgwWmYugmdzDStQZ67xKNxasJg7FxsXEiLWkdAsjg9o8nXPMY5dHLYUfi449CFFAbYiU1iJam8EFrHkd2Z",
  "key19": "3z7Mdte1AhpTYdiFFFHGrkoBZACNjz6JPiko95ZxU5oNY6xGWGQD1jfegR6yQzdcGYEHdJxptPvLEFVbJSAwusTJ",
  "key20": "3QRoVvnL7F1KcdsFNVkGEristDtqHjmhw3AyPzkLDPr77i9EvSJpMARyVN4yTpwGr8uUS5xCAV92NNVEFH8geLU4",
  "key21": "3EemGpHCX9t3gV41sztgvSYNQFAND2a819roNdHM6fRZWBz7s1e2N15DEaiLCGr31F68jXEerUQ2NqPw3fQJgq35",
  "key22": "3Qr1xqsWVzwjcs2x5oXt6C6MzqSTN5bNJhqEuziJ6V9HBw3dEzGVWK4uRm4eK52rgWqpiENAsiZL24XphR3V1LKF",
  "key23": "25ZuEoALgTvoePKmfvhsrR8hxjJqcAsqiddDkLEUPA1bBzPienJH7vMvgJfdr3z8GAKjB3z9jAbDWzywRzn1keHw",
  "key24": "39kYHP2aCLSLSe5AfjVLD7XVeqTvEwtnoY8B6Vyv88jrWVFJuN481qBWunKKRyHLQxefQBkLregmutZt8FKmXgRf",
  "key25": "2myeQ4moqAAE15XtfuFiY99rvYgFGfa1o4E4SSFjjdykuW7nMrf3wacoBTe3Cp3zWHkdmydSBmvQ7i25x1irj67K",
  "key26": "4W6JJqz2NGR3JCHBMNjMBZtd5NxQrbWkkYDPepCoKcSkV4VxQErV7mEdBcZtBpeuY5ctGjMM8VcJSkZix1ko2rRd",
  "key27": "3YvX1BWGK2VC84Kgy9869UjKojnshQWLoLAM3auwutNUCXrjRE8ZuXMa37mdCq6CyN84BNFdM5YKq87b5mkSEkrK",
  "key28": "3GaJXq7KT7n5nKAgNqxQyoZ6LTuuprYwpwmRrBSZTLkvZzLpkaeBBurAhwcnjJ92NTqmdQVApj2QktD7MM8Xo5d3",
  "key29": "2pCQtTQGMHbiK24eNm2XjUuEpZLAwjQH28XgRPQ7G4Jeiw7CVg6Tu4nDyx1G5ru8BSXuCwFhyKdkpctEyumbU2i9",
  "key30": "4JEzQBn4cPHYzuNVyCJc49MdxpocVyUYpphMj9HXc68F6Z2Eo3QNpTn1BEiMPGpWMv7njSgar5J6MVa4RXrJVsTu",
  "key31": "3A2Dwj5ghcbACt5p73KyWLeUxzySoTNMKo6WwB3vY3w34Sw8zNUHwvqfXwcDQfYXinpCPU95Em8B91V6GMr2NBhT",
  "key32": "35RMdYgj7j3CnbiHJvU1ZdL1jAmdmFDdXSvXySVxosPDVP7MXSXENk3CyA7akWjLzH4GKwWqJEutQA8UAQDBB941"
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
