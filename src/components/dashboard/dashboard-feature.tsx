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
    "38uHUZr9e2iWeoSqCZpCPrYYPGJh7dCbBR231tmhK819xWfqcZV3ac4fUwxM7ZwacPhRkxuPCrxQ9hziH2jNRpv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjvjM4ePMvQohp3QGLxCwPJuzrogxLSasnurYtMgZsnCCFjrYyBKaYoJ7iESwaPHfKKMvq7wgE5qRmok89KQpjv",
  "key1": "2hE9DziTaqZ2hVnxHeAHi6F7oTqx8r7veSWMDibieeYK5xi5vJV2H51KAVrfZrzCKzZVCNugVFBgm3M4rLw36CmJ",
  "key2": "47s1vTa582KmQ5REvzcHZddPnGsi3hwXyG7az8QADHBp1jhewQ1zFGXW8fkiZD6ofbk3wP3YWeogbgTYNbVy2DwM",
  "key3": "5Q9x3thQk5eSw4TxH6xn3LBHWEfqMNC2ZKypZdkuez5dhCxz3ug3rg5zMZjc4V83etBErp1bRzFWGYezk3NrXbPm",
  "key4": "4txViPiVmjK8cQQf22pmy66xEM3KJzATbzAFBP3o71Thpgcp79dudqn8ct8h14XTdfU9zTnjq5XwmqngPU1PYXb1",
  "key5": "LaqPnfCYXb4nfkt4khjXSR4DqpCAZzZN4zRCaRty6BjpeRPfmsVxHHG978W4gKHYf9krXz2m2dMah7yua7Yaq3j",
  "key6": "2sgFBV9Qo22KvEz4z3aRxpt3WMdaec2STQdrsBXx8UioyuBb97CzP4QqxCGyYqvowEMAAwoqcyidVVANUZxm1YZr",
  "key7": "3ybvxg6Bc2SXjfYymQhcePSzqMh5CnrhihgpsMVkP6VPeQzrWnkzdzkwARVkF2tL81NCjVtg7Uotmq8pzWmD3Hy2",
  "key8": "2uwL8Yz1HQGUbqNVegxeyfMwxShxjxApxSFbYmfLpYAKYTWudutvMTbeZA3DZkQe8p6xNFjCPmhoPbh7eguonecX",
  "key9": "5pMCy81ayyx7nrFY1dTniD7r8JsJPXxF5B8Vy4Wok83vx69UWuQjrhy1yHJigA1wPZ7Ncns66zh9srwqnyvBfzwK",
  "key10": "4UgxTseoLCVWuSWCaq3sxWWEFqzuVUDMrmjrpnvWZqmnFsD5YjCUAKGuDMU26TMreaNhruYgEvZqPS4YhjLcqBsb",
  "key11": "F7YZoWEtKH5KgwYDnFD77Tsu2QUUsEDpj8MdShsum29UEigX9WNUTASV3nWAoGjpjq93x1nmCHNTyri81tiUBju",
  "key12": "5bimWjjHk27NmMwvom8ZnUbKEnUzGqZLQWZHXbXtcwvFdbaG8TN4ktQCChzet9LUt5vLFY2KKQbRJhBUGAAopLeX",
  "key13": "G61zos52YcDKjkc15QQBJSXgYUP84GJ7uAV2PcCnLixY91nRUbUYJMZhBY7Wv8rn2RoC2on7QqN7R7B1eqefAor",
  "key14": "2T6hPbvZZxFe3oHPcxYH637vgNRwf2UQ9osgeBUxqSmJoqdiFoJKzL8xdD9AEL1KAH9VMWfGyipQWKvChNrDnnpe",
  "key15": "3ZK9jmwrxaVh8HDtagu5JFbuCtxC94Xasr1E4KHUkUmQHf99L9LBSXJqZ3E11HQBDYx8ZmXAMBPQor8URKno5UMC",
  "key16": "2iEzNP2kMppbzGvWbBTa41T6W1y9uVSBYgih3qx4UYrWYx84Zx75ESrJSmM1vDmjtRpRoXXdA5N3B7tecea3op5J",
  "key17": "3TUDMg73sRLtkaq3AvvxGueeU1iFosTYUxT2PSJ14dhyvjV6edKcDWqqCdXb6XX3UKaMtdK8q9dTvyAu51wpM6hd",
  "key18": "63Z15R4LxFTXNffnwNArNfooH94Xkb4G2KLv3YzkPLhhsJeCn81HLV8xjxoLRnrp2eqCjaGDoV3gWS9crBjhCcaZ",
  "key19": "5q4Y3vx3LKrm2xd9JLe3hZKki8QKL1HNzfvXJinNgVkapxRe9xzhMDyvU2VJ1wviyGzWraboXQLe8Ag8AXEaASei",
  "key20": "ztBE2b7cFqq4Df56guXKbvTqqgmJgXjUCpFdcVLPDxe3emyGknt3uNcBhcBJ4yWmyJmv2BwNzGqSjjiLYFHWX6L",
  "key21": "3McbJndZmQdrdZcLp9prMxcvKhESUGi6ZgAT3PbMDGTiSt9LZeahioetPSL4ruZh9cvmjjtRVTee7Arkxh1bd1QG",
  "key22": "3cC8QvHjZMUxWi4f6xoftUGf2kri7yCStKEobn4R8SL94CXmLHdTgHK2YuZPiQWYFKWkbh5F6pDFZdj2ZUYaCLiK",
  "key23": "5o9PGHC38xA1vR2S1LUJRgPBP8dFFEGZj9bMxkWkdgrSc5ZpfYhLRGDa3JLfoRKQ1ikZmVTjoLHb7iPk3fSYH84b",
  "key24": "4UwAmMXJv9mm7ZsaezoyEL7ZRTQTqgea7fLrv5fiBqorhc1rRHKsEpG8gq5AN725Yg9YBbCoPPWYuqWijV9UARnj",
  "key25": "26qb8HCFdwdGtqoEvRp5fqNTq2TPYWn65bvjb7p2bqk7Cq7udXxfrbuq6HrKuprx4rTu8nWB3ybx5XEyzc4J2rk5",
  "key26": "3cXU58PP2ZUQL3wRnBs3UZCQ6TQW2WjMhxHJKD3zUkn5rjKyzFHXzQ1GJcus7gKFX5N3SgJyRMfsdsgbq9bkVMCF",
  "key27": "64PtsLVRC4LSiXX3xfaEeHoFzCrHuuxMusToUA94z9qDjWyPUkXDCedjLBXQXvTQPWaP8n3MsdoH6vihMquBHRHa",
  "key28": "37Yk2nzp2V9DzMCZvWwJkHFfjvjdjCGMVX9R7V9RsFoJDw1SsDGMMdvA59JEfJ9s5uMXXF3Qs6Y4khzswUr7ion5",
  "key29": "WiGWhWgoM6igM6u99h26rUkMxm4AHadH5uXzmavNUQQirFk6kVCiYJAHnhbQ2wZKo4v4BWdPKPFuFbWsrhGbVX9",
  "key30": "5wXiiNgTcqYgQSemdak1Wn3Vr5zDbs6QdbFcJWPNKPQKW4WvbGdBx7qoTL14Z9Wqn4z23anhBB2hdHA5278KAnUJ",
  "key31": "s5MekKPk7yxBfJK8vVwP83SgcuqCpRfyVXEr41E8kYXh1mSuV7L78uADPCZQKgfWRUhjbDmHrfBuBq3yABx3Ug3",
  "key32": "5GcyGT2smSwFY5CJaefAeW5LPJs4Tznv2upcvK1BJw9GgJxejTLBBoe1nZXZFqycUh3ApZxYuTKZhCL3VopBe2vU",
  "key33": "2oxTwfHYrRDAsMcSQKAHkTJ9qeg6TLA6ybkSoqndmhkrxt3u8uJsyPQCRG2e5CB8YtXUqTtZPZUzzN7yjnK1M26M"
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
