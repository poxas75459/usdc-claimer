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
    "2PQ42kCfVbjSTRygs8QF3H52yT72XmvjfuWax9DNPynCp5McH3Edp8xfhrY3Hk5MgDuAPXUEycUhGWbvbguPorJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZPFUVqrrtZh4o9NXsVMiAj6qkKjZ8T6F9DfGymzNP3X47a4hbqsfQzb9WNJr313w8JZknRwJM32bXf1tkGnoZw",
  "key1": "4kV1yspFXbs5vYoMLsgUvfeW2mjQL7WepEK6TyPKTVhrRc2cUwGJT6NTnixttkN3hxyotxZ5dngjNmzyRYKDXxyn",
  "key2": "4cbDT5mNaV2zCt2dx8VBHUchHTqicxpJk6yZhSWUDBUoB2xo4estvg92tKWBPdxAy5RzH9bz3iPkNdvqqMk4tpgL",
  "key3": "4i3jk1fDYH4ujzfrjm8twjiApN9mp9jyQeWacov3Tvf2fo2WiJnd3dmG2JfFCBPjCWchkvHRDcmVPaRrdHTf1wy9",
  "key4": "4vvxqT6fgkkxxGq5Sa2k69XsYhv5vYaqMU88QYjKJC9Jg8GePeCWx7pNDtCDJZKgADT31iDNDEC3DapCXeKKP7nk",
  "key5": "23HMbXxbi8ZGATvp2r6yasWLmbpTsViiALVivLGm2ZVH7eBtMVokTgEykNy3h3PHSpF8rPLDnorUHNwoN943dKdH",
  "key6": "5wEPr2yAccArZErSmSZgP6SyzRcprrzMWVbbpWE5NAkNeMtdgRCLfpsg8ZNJBjHRXdNckNzR6F1VdDnw4PZrQRJC",
  "key7": "2htEcUsQRRpsMuPouA1BBfdVr64oPNLEqhZb4U2JBhsK2oAu4P1LrFmha2EvTMJxJh4CxPfMFWT8HdPKp2vpgcqo",
  "key8": "3f1yR5tHfmeLABoYwTDtyqHUFe3rDfLn1D41qucwaPthPiFyhWW6khVHeHhAXZbhpdgG8YZFsVsC7eqgtqUqkABE",
  "key9": "22F4nP9ocaPZJbhBFN94MiDKbqmW4iEUHdAbreCLThu9PfWvUkd5KcrJFRYsXgGhM5yCUr5KoqAzB5C1XxJEyXUW",
  "key10": "5FSPLnhRPrSiU5D2ks8c4RrfyJf9DKDdUKsLgdyaLTicgRWjb6bEYLyYobBVU1fK4i2WVimp5JwTjUtecp6CUup1",
  "key11": "3UFpqBMSuUg5yZecwqXGbxBhpjGb1CzzLWYMQRxqqJvVoZSbwKF4f8czWGp9ixxeJVjz69oqgEAm5GGZjwe96XJy",
  "key12": "5ouLq7rakUabbvxDXZ6bv6bNqsQco86JBifB9v4MSgRfmXVTHh3eHY3pp2a8q5QqPoZV8f1nYCek9zKdw9Zj46zi",
  "key13": "Z1z7Cc4ZY89diw3TF82kCJNUAFH7q6Qkuzq3LgeqgBJ6pfMkyMYuY1gJDxK6kKF5QxQRgorTxLAs7wiFGQjN84n",
  "key14": "muN3A2azuzDAeXGtd4v3jPnZAbLtc8Jp8m1Z8xctrFouXLp6GNTZ7FzL33WRzJVdkXsZ7d1xoT38NuuUa19rE7Z",
  "key15": "2ndsGtkRckbjgPSioVzTPf23jjoUXrw6d4TezgWBSN9DfaJna6fvqVRYDeoNoAQR99GB3SSMjvMEYFmH3MzpFUXw",
  "key16": "3hXRsrL9g2a16v1meWA4d6y5jqAcVSC13oZj84yRsFpDne8MsnVbzhZcWApRhnD4M47PkLm8eHEp1d3YciJ7zUuP",
  "key17": "35tm8DtaufL8dB1bJo9KU5vkuqV3K4N4UrKkn8QqyyowbXv2LaUSoJPfnDgg8KhsWyEKrP22DEDRPzbYVmBNnke7",
  "key18": "5EfSw1h4bF5MZbDBoyG3CMu474AzciQrdvWjNGyicCxqQy7xDtizhF4K4JuD4Wo6H1AYs1cuLnx8Hnaa7s7oqaYM",
  "key19": "3fv4Fb8b8hKaNXp6vTn8DZrj63NWqMnMPvKyGphg3oeNMqqiTZj4cuZEbMitUUDNkAodKSe9FyG1jZ65RxVsiTwR",
  "key20": "4q1seiLPmtqUmTCSBsFVht4CgpemYJjWT11o6K6eJjaTV46FJWmo5ZnRMegPNh9ZNyawtFjGqHjkqRRDLJUE5PdA",
  "key21": "6WkUWxhH1ch1zSuCkVXx5G26UCVw8SqEZzmSHBchpGZy7f3EjZ4LPTHyDUsF7KR9YQkBt8r1dih2xWfoT6KZj8r",
  "key22": "VpddHTESPjA86xAynBwQQs82U44P1pJcytaXGyTUVGfE9MMRS3CUP4BfTyraU3MzmiafEiVyQky5My9gQ6zcksD",
  "key23": "5c2KCvBqcCDjdXrdNKwZPbGTH1zwpFnZsfVvacCohDWSZZExRSvQtme3kPjSi1V7RNe771TaYYHYqLSC3y4yazEp",
  "key24": "66DjsVV7qCvrprWobuwWFke8JYVRmDmbtYiwHCN9huaqBncHrZ7zptJQAvapcFJJHju4rB1p8xCkigU1rpZX9NBR",
  "key25": "iAEviY3AK1DkspKAqrTm5GvEMqPuNacBUcHa137q8dFUYoTnmo8EWYQ2M8xPpaCvURnRErE5YWhS3nfPEV7Dua1",
  "key26": "VH3MQQSazcGuVdPf6o2wUgdUUbcMADVuutHLRUaXvdfV3LMRTF6mok6z1gtkaBCstuU5rQtdypgKcoot2HtxNgo",
  "key27": "2PNUmm89GZYAuNjDc6UWx6i9KocGMXRE29BnifnroGqTUDFhp1SnCDWsEsRAdBAgy5pAMADKiAegGV6iCv3J4Qrg",
  "key28": "5mJKZj4XeNRKPsSa43u8z6Cr6JPmKxwfdXbg9eJXdTirmtM3ZxDWiTDUifWbgt3m3s7Qtyti6AfaBctqLFRwc6zu",
  "key29": "2HtvNZ7njkv8tsgSFJZ14W1oA9BHujydZ3jTrcHbH8q9faqu9YqeNUdj17JWWSc2QnvJZGSu8rwXnwpUNwFb24Qe",
  "key30": "3LqQUvCZVDNUBpG9Efpjce2PaPY9sMpkQPaZNG84wKgoq4r2a5LBnNakFCUqUk1QvXPhPu2ogLFLZek57mTv53Gk",
  "key31": "5iegPSgRv79HE81kxvrrLEpx8dwvRVtQgBK7iA75K7mqQvEc3r3eJ3UTFjdJpNspDDmvnS6Wq4P1HJwg8U2kZMR1",
  "key32": "5yyv9hk8KtQrsh8TxDmYaq8Xf1e8tiMyhbBkjQtoonKVU51XF4h1KZYkdwEJuQvSfRN7c6Bc2MzRjNoTwsLKjutQ",
  "key33": "DMZw7iYeMtLHXzcy7b8nmD93NbcGQuw4hmsMHgDrQrffAbyKTepuBU3DFEoveK3M2YKYAc7AzghdjjR5PmaSSjR",
  "key34": "3qvVoNdNfzZ8AHXVgA1XmVqc6ucsCfJAa3wS4xWznTUPjmkM8NFWdgsv7dtRZD9tsyDvCrZcX4ThTrarWNq8bDip",
  "key35": "3axtxxdo8bKkYeKqqSJ86vnD7k384tyQGhxN1xU3YtH3BCfjkuGjmJymsWb5jdBy3KpVehmkHNTapcKDrSo5LV3T"
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
