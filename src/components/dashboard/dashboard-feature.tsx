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
    "3bnn7aVfjFYhe5ou74PZqKcq1HT85fdJesLCtLW8hNZkdWA7BdAjsATyv12KggBvezb2fx16hnpXqSQcULeEy2Re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsgDkzNgUUibqqvfUoZGzE22dSDGCegH2fMKhpsKu4m7r1TW8SdaGp79uwAHvebqG63aAFtKwJknQHCYE1jj3e8",
  "key1": "4EQAVt2tSJ5Emp3yyq7U62ratesKCiPdZBtdByMeiPBUaBzJU6PveZ9GQ564kCLdiwjW1uQV8bgsCsFgrctgELNN",
  "key2": "2V5P5ayDs67CS4wrK3nCTsrLa8ccuYrk1TrEVg48dHmKXAGvkmCipxrN5rMm9ftzPeUVu7xyrQawoDu4zACFVJW2",
  "key3": "5aybfbRgUsmCcCH9meQ3Jvfpfxd8sy1QkrJbudhm4tAqtrat7LBZpdXqyQ4fWDjFg5oRBXEcy9zWpygRmotrx8U5",
  "key4": "4J1v7BTX6rtmXSk91cnvf7sz6vSSUiou8wBQ8nSvQjXWoZ82JSr1tpMXskm1joDumgE276PCRrDYs5PkT3hAnTmT",
  "key5": "qU5ABwJouH8ZJAKQANS1F5Y1Q5Gftf7UEqLzBRh6F7ALQM5SwoT4s4strtPKMCE7xynfAyDM67MWM3vHNuFoZ1U",
  "key6": "4NnPsZ8ds33QiSiPMxMZ8UjF5VaDBsrJRKN6qYsVKcv3UB1W16KshM53BWSm2RcYfBykJYNuypfsbFjvH6gnjrni",
  "key7": "3EiPyEx7oXKXT6jJspWCZV1GSQnC28Z3LrwgazKGYC3hhTFAZPHVSgmGhqqWQMtZbfnWUaNQM3pKeqP8aRNvwEoK",
  "key8": "3zsSAJAHjojxGX16rNL2h5WikiQiaRL6W8Yq5WpzdXpyfuYWnU9Qtwro4ezdCaFfeR4LAtmqtNy8EhmagCNxqLmD",
  "key9": "2BMR4ciSVr92BD8KVrmj4kmw61MtRkfJtiamXSGA697ZofKvyTXocmRCfQbX8MUyx6DtECbGadNgsbijt5NvzAmL",
  "key10": "581vz6jcngcxNP3911ZyE75X4y6qHL4ApW1HmYbis43Y1xFYnwy16LYvjTmSN71VGow4FVdMbwPR6qdsEHMD4Zop",
  "key11": "5SiSBGnafKDgrRHv6t2nboXsKNEG5wZpUaE4x53afD4ZnQeJeA7DQgb94eZamgEkiYmPYB3ECSFDCr2NXc4zdgPR",
  "key12": "3H68i2yHX8gp4HfwE5Y9NzVWq8v5JhhkSom7jcKsTKdFvo5QYUHNhPf8SFMcFn4dp6EGBHmT9o21oCdFwwSdBc6t",
  "key13": "5HEPpkrgJtJhupyhMHg9dMEe5P7kuTggHaZrn4ACDaJneNRjurvnaGfK6zASdk6NQKFaAuhC6wcCBKuUczDBLb5w",
  "key14": "3rc7L2WZUadgsmEV9jKQwUAyX9MW58Y3K8wATw9prMdRChoAEzbj54skBWXf4c7h3n9AQxDCAtyEfrkzHtgdgGTM",
  "key15": "5f8eujZHBUmXKQzLkMzas9QVycRqy8tBokvCn54zdMwCkSrap6T7utU2siMKWtjH3LYNL54ERmNoQ6MEZTYa5U4s",
  "key16": "2gzSi7U3KQBAM4RuMYAoMJ6kHGdBbnyXC8cq4hcsGwWxhvgkKJpXfTUKPW2q9fqBpC52G3AavC4MWETJna5hxo58",
  "key17": "2u1LqW3oCce7ijm19LJ9R8r6rt4gH8PSqWygj68keQyVSZ31sAEBdQXWh8ykY7eRxhkKtLXCp7AugzM4cDLwbwGi",
  "key18": "5AtFHcjLhzjXBQSy2mnFPPAngVujKTa1msqjA2qVdpab1fXVU65q7KzrEeUVMbYvBDnYH9XS3ntA6Y6ey32jCNdz",
  "key19": "KewZTx6s9mTgFuSagFs6BxopTuKWcKmUT69gsaXmixGPEs5cjWPqrGhK5DC5r2PUvcRqbsPr1qYZncuDJa1CPBB",
  "key20": "581YYs7hWQHyyR5RxqQ5EnEmzj1CyM6D8JEkJ8RURQPciffSFMibKsQwRHnNxpsirkZQhCmtPDDJKetcdoWQ3Zso",
  "key21": "2WUDZ1PBaVaMZvUg7y9siiX2VdQtwbDECH7WkaAENpoTfSvSFKq4FmMaZyM1hKTh79YRfejhjCamqRpnfc4tfMMV",
  "key22": "jAR71feqaPzB4rPSQ7Qe9wT1aaEHYmdZaFWjPJQm4UE5b33oWVwaynqPdTXmZcJq1E9ZozyPHiWL7tAeX9FWm7J",
  "key23": "51sttYiH92h8d3tASehxQzMcKypVUKq2cgB5WUfQSNzEr2idFGDPTZGbfavtGoKXjYChW4fJ12aJwY65B8E1d88J",
  "key24": "5jJHxMjXNVgq46p1imK7TTCyVokWUwi6EBXHHwKVEy9ZkwK5YwTjRwDBsiDRfNazJoH8Rij53kU2PWQA7B5pt9EU",
  "key25": "kMXmz4NBLyQqDtRbNHdPj5tbF8GM5FweEJ2jHYyGNrdHaERqxQ4tYRKiv3r2zpMCPTSfWwgDm7khiA8tHGrJcf9",
  "key26": "4oDTgpbVfDSKh4Mkhaf6gAA9wVjWxjKUEquZ8ff2FMExebMW6V7HuE55TQXA6HUrwSCHQCHUDMv6F2P7X1o3DuQq",
  "key27": "5rp5esnNACFyhtZ1VovVeycEJVZ5FBA79YENTN11HLqGPVwbj3NtzZA9LGBFzNQjNCaFBF2UDdrSSHCQeeConQC4",
  "key28": "3mbSc9AE15hY8xUMKeZCbizuPu67YHRmP77T3rSX46U86x99bWqp14RSKedSwxo3H6VbTVv7Z15K6SewBUnTqeM7"
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
