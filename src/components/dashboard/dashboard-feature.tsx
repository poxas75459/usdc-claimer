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
    "3qwZd4jSoixeCywJxpYT9BR6ppFS4fcVnmhB9ntadnKpg9Jt9dGpRBepmZuXmDQ66PBZdv3mTTk8P9WC3QWMot2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zyq17FXQxuCnuaqqKQHqytLaNEQLqiuGN9i65gaCoajBPdJpYoZWk498fuhecuLqPvRjhNzsKF3u7PFU1eN8wfE",
  "key1": "uWHYRKrzdbDg9jhZfF77frQVcf6NCcPfdmm8JDBvyjR3An9UJnZ2X5BEiknu9JjUpDmBTCmU4XEjYcWgzfHCjsQ",
  "key2": "46PVVukqiZTqBYfhR2Jh6TV2XTrxNodzNHBxWzPKUWMt3scT5WUeqetKkHGq2pLQucGmvHddo88QAZX4UFsUDUd4",
  "key3": "3xRHHPV453z4HyK4WezhNoYh6Qg4WcK4BMoECRqpKWEtLBJE3z2ivMXSepuEchMY45zeU8a1tAewGqnkgdBLFiGF",
  "key4": "3GRTmKyw74DBXXAwxDeE8An4ZjmbrvgVa3SPswf3L1TEKGzmToG2ohcrURjwodx79dm6FvA4pUUBgN3ejUzWX3xk",
  "key5": "122D5UaoH61sKyZETCx2uhrsmEBDXvM3Jw87YBaG5kbphZ1CHH373TUhCbyvwKz73WGm5uapdjZujV2S2mmeiKyY",
  "key6": "2cTYys3yrTB5kVUtZehjHJLyh5PGaPecdyH4UKx7KkTczQRkHL5bsr1QGqE4LWh62JZkWrQ28MDfntL622PRjPar",
  "key7": "3x3y2EYssSiGipMnQiqDSSFaN2n9id6yaeahP9LQRFSDqvLKZgSMnmPwDBQhkm347tVbAtsBtkUiYsVM999h6MRa",
  "key8": "3xLumCduUnmqFS2vYsAEkk8J4gAwih6nm6eCo6SEZvzroDJVyhuniBjDgPaKonanpZN9qFFwPk1q6ReofFdu4qK1",
  "key9": "2RTQgsUrhXsfhjck9QDywipfiNGeH9PXaixNEL6kFbBg5GbBfhvYBUDAxBrqvC4feqsKJu2xguZ5jLkJPag3TMUK",
  "key10": "3HHdrfnfAU49RA2c9G5kynxspLvX8TbX5qjprjc51be9bCAW73R3vBfyPmD3RDym4MPcD9F41zoXp4LTNgAN5fJL",
  "key11": "3SGTHV3EYXTD24Wrvw3ibdy3xiAF9mFkNzFE8bTmuVKBTY9QM3nuQYHjhd3QNhUNK9jrasmcTBiLcPJbz9brjVVy",
  "key12": "5R1zmouevBF6T4gse8XYrDVrziuaaGNzqZkBatTyF284aKYaZfdW1ZAizrN4HEJrw49GoMDW1eYjXR4hNnTMCuUp",
  "key13": "5YHuvHoFhv5PWgXJLt9YpSEnMieNrmKWhJXYzUyFARuAnJteWvRsdehi6dRpCtwvxAUtFxe6fCUrzL1CUNigZwgt",
  "key14": "25XZXrXQVuTo7DXhU6GZPr1DDQTW5LJfoanXsg1cR6nhkDcBiTSofqZVUcZ2yfpUWex48ib73gjQnGtuFEooseKq",
  "key15": "2e8zNUSTJPwyvnDGUZx1DZir7FPBdt3zpfCceqAG5jpw4e5S5i5hESEv6UGf4HuhDHRQGfwJkDCzxHq1WmobyvjA",
  "key16": "F85KfRB9KJ9a5b6biHUc5scZZ1axjxu18psG5Gd9ULhFUbf2xFDTEmFmdQbuuvLxYrBxF3pPHxu5U6HjStJAwJt",
  "key17": "3xhMX6utZTdS5XTuHba3PPVdRRsuQb8NRLCoM4G6x8Q7vHDekCSybivfwbziM3vEEUxAgv3ss75sCVqMCu94k8Q3",
  "key18": "FDwbiSAf7swoqpG96kryhzUJ5tJFKkpgVk832dD166avJC3N6FfSdFBFVLaAwxkKq8AGaCQ2KoCWLeXzmqMr8bh",
  "key19": "3Lgee2JCRYz9vTEuJPMPqNsoPt5dbvKc4nDVV2FQDWjm3RH8qTwNcuPTKNwbvWAgkR6BBC6BUuQa4ptpDajTtGeY",
  "key20": "4kFVo3FRykjYYa6oh8dcmXCKQZgNn3d2pnsErJZKFeve4cAkVTV6JtR47iPGLhkuo8kTqhXwiZNnJrLYdjcBHGKd",
  "key21": "4YWgVwiKt13fQcNdHjifbnYbADwYcxAu71rhwc5ZtRbjJCnuyDv6jCnbsNH4bSyDjsN4T4NS2zo5hwF2LQBB5hEL",
  "key22": "5n8paDdBopt2qRXz4ttmbo2rUxEJFZYJXg42VpJ41X3rZeXeXiDqTqcquJZpMuUnFEKTBKnTPEJUSFva3PEPTPc9",
  "key23": "2r2WuSTZ25VTX2HzvkK37PcpC1VM9G3pnmAXGubTubZhqj12pfbZGvJeYU6QkNrDoZBxuBsRnc6AjVy2eMPji2eF",
  "key24": "4gn94tzmxnNfUr8ztiLy3zLBdw2zwAM22HFh9vBKyE9NNskHVVmY5v7Tz1JaQ9GBSBbvB5W77mkRtDtQtKAEJJ1X",
  "key25": "2FBnhgvZtJvBDRcy2nwDvKqm1f6i6MGRSX3vsg92S8naAxUoUjAJR32cxHc7z8ZEb1EtuayuwvurDFpBnfjrcVtv",
  "key26": "4v1JALb88zMMaFXHUd6EpMRzASEUVGzV3eHpP9DaPbQbxjpw832U1HmfDoFdh4xnjDWKsddEc8QyN1cYPbeUbaCb",
  "key27": "4MA53EpKTTvZf8Za7RbokT2AgutAC3bNvqxZtizt4ufgiWRB4wCtVoBMFQgkSWujBqHncD1Qued1XxeLb225Lsi4",
  "key28": "2NwvDfpjnt3VWYj7BP84yfqpZ5fHVGQQeGoDyXnpe6sQF5SM1DXdLaTPTvSxbDfPEUXfgw3CWVJJ7k75hXaaMarU"
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
