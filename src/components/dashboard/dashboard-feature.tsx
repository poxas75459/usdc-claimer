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
    "2asgipQocLN2UYHFeKoSNeDBC8dw8YfucDJvXec3Ts9ZQM3SJtTLGvc1WtBMGMVNeiv7a78Lmkhy5T98m8nGqbem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSB6bzJwzCp2EMNNHnwhpLEDJv5Tczgw34xrxYJWp9jrPBBbgWrGdPAcSUZ4oAJxdVhvStB6c3LkCMavPiy5KiB",
  "key1": "3e7qr6T1ffpfuGT7rDiPYVZ4Dmed6X3DgdVnuHnfLExB6sYg9TEm95wZEyeq4pRcsGaauPdcTLfU7b7NNfWr3Fa3",
  "key2": "3xjZ1wC6XXS56NmQoCX3bD79XyAT5etV8mHXCcJdU6jYtz5Hz5vTmSs5QoGc3e1MLsgpYVebfvjfQ2M2DmxoUaLC",
  "key3": "2f7dG2C93XgzZU7QQBZ23rRVWG45Tfrv3BN5tKqXzSq43kBQNF8pjK1piyNadtg4BvqZERPEwncwVSnJyiggu1hU",
  "key4": "3EAcmo99neomMjWn4F2PT69qd7QDU3LaG9sTDZmkMqERL8f5tfyocRM4QWHs3DogtGHDThgZr2heXCh824vRhd7U",
  "key5": "4nUx7dkAqn9EFXNmwF4raLiFH9WY167sBHbqENtgGKNcC6rYD9VMhsr9NFJyxpLSMPQK4vtc6XyHv5qv5A85vYGL",
  "key6": "4wsH5JYXqggYomwaNcsEP2yHe2uZ5KAmmFm4ZB5DgM6bx9KMUB7PCHxVJxeiXiRDBSRVS9XoyC4wUXrSAZdowybm",
  "key7": "22k7Nv9ZsVXXS9GMUGxDcTPJ4p2okvTFspJogzK6gHAmhY5nfNWUS1NHHV3d9dMTUaHht8QcNBYb6cgGadrve1fk",
  "key8": "5yYYEBD4Saq5xYSuaZVcRft1Xew4iaTW1J3PnhqEFfFabiEBx2kKiiLw4LBubTkMfy9x551Ah6kb5kztiM4GpusP",
  "key9": "2oWSxtCB5ocy6N1NeVeaPNcy1Vv9zVC2guUncW5ZrUTnR83FmZn2PfLBCgNX7XDjnLyKH9jjSGWzU3oW83yFEuCT",
  "key10": "2Dw962gDzRuRGg2YB378uqNruQ7Ybcm4rV2oWV46riWnKiekWQpWg4v9X3EPaNVfDSr2L5DAf95pypk9Z6LJo6d",
  "key11": "5dRxoNrYsPQctEEtmwwzHNcvJnZPq4VqbhbgXiMDcqscBB9ogPKGjAY74HL4QF9FNqsaowzSPjuWqBpf6AptSnK3",
  "key12": "3bK8rUejsuvWLW4AGK8AEroo6SfcLr2QprBgHy7t1DWkGb1GAipCMyLYnw6wtzQR9oHZz6HjtGZ8hmFsHfzdENV4",
  "key13": "4gZiudHjoyDHWNgCD7255fo3xk2zdNoa9kzciANn989biHGDRDMPtrQQQMVHaEsuTUSu4yiAcmZ1jnFYbDecfkeY",
  "key14": "adVEvD49mPPks3uunrb2SKGXRMT5jTBJnDVBWMdCyZ5DjjtEigU4Q98JfHm93y85s7KKpgAzmpX6bvZE1aRjefr",
  "key15": "3PdpfQgqaEQ7gUH5hMoXmvoGjiJWRPyVPqBhx6KJqgHwHoShpWvDzmDThye9aYrD7D6Ud2QJQYS17GFKs8CB72FE",
  "key16": "JdNXnjbvS2FMy3NqKT5MMnchzrXzdUTS95j4k8tAqAx54kEXtHza7cKnpBWsdSi739rCxGw3HXX4sy6LXrnF4f7",
  "key17": "4LeVzz2GhMxpEuzu7rtHoC2sB8zYpHd1B72fytnTG3Yxi3HMm2zwbiHtKme5Jxomem7cBwMakngjnrUFWuHXW4eL",
  "key18": "5BewNzp88tXsbT4urDFr5iKf7vBCYvCNLuWwdm5yfEafgVYuKpYej8QVGHsGAH7K1GdaN3gv9LXoHD6GhFRXMJEs",
  "key19": "4StHmFXqV7fAyMyTtHtBCW3Xvax8c4shtBgJGn2F34kRkWgUSa9YdmibRXzWg349GcKZc5D7y6TSs8mzjexJzkZh",
  "key20": "VkH8pSpBhB1H7YPL9adPX6EQhhAj7YaPyPgc3sddhaoHBZjNdJLDnTA1EiaJGF3CfqUoJ6MoRZVvhWzsWSPbome",
  "key21": "mJJNuxdYMmzPf1tjXFDw7DAgXa3VZicNzJs9XABsZwoUQ9bCyVWEPn6QHU8aKrK41XZbVruC3ipcaTnQLX9iBUW",
  "key22": "4Yu2jtD1ikGRsH5f6p75xBygJKfPQx2BsyboDEXHWACzHPpMsTZo4DSiUtYMTeahipNWPxFvmAfpMdbDe4xvoB4D",
  "key23": "3Sd9JbAL7EjLNL7p2EDLB7ThFviALmiaF1MaKKX6V7KttYTwrxtaRHDandNw2DJV5qaogaYoZqvKRepkDHHYqW6p",
  "key24": "5BgtTZkqcoUuuTmb2H9MFAn52S76LWZZkbCp2CuC1otdizkAyt9N1tmMxajuCqPPAVUpcn8v7437F18AG7cLxLB6",
  "key25": "KQjsfc6j5t6wmgGH7aFXn559UtLRia1GuVeLGrUpD3KbXq4jFomED1KWLQLvDgKU4cQB9zJyn9zpSb7AsSUVTvL",
  "key26": "3CU9nfbZduvYHtBBzTZPb81KDCgJUX3n11iLm9fXAggCXDsoMroEKhAHuKbMrB7tMjUETUGMb7CkdBUHcSLpfXTi",
  "key27": "4ucK56cciyZHDsuAb1fRzBYU9Jv8wbMhSpd7fumZuQkMLXKFADEAtfR16iE2FXbbSMLi1TEGjg4pju7fjyqhi6Vk",
  "key28": "3sEFA5g5mGEAVouFXve8uMWD3tw1EKZz5GLyJUaT3QDLfLsxuVyi7YyWE9BUZWZVWrXVZbLgx1YRFWZ3wXYuEnKy",
  "key29": "4eUdU4xcKpaZR28H64bJ2NN9PH76Fz6vAtRbVndgAwEBogjP4JFApRbtCXQrGV5BxFJJbgvSFayqQpi9YbuWdNe",
  "key30": "oM7bu6Mb3D2PpuFkT4a52rjtLioJqSKzDhb4pF6XnCGqpRM7r4tZw4WvmeNbeM5objezou54wtsAuZMDFN9i1pC",
  "key31": "3BP7LGCEvdPDcwh95wub91MihAv1fvb79BtJi4KFDrttGbta5b23edMb9gMCukBYbyWdcLqnN3Em8HyYSrbvEcuC",
  "key32": "23Ema2xdvSKpxVSD9n9BHRGpduHsLwTG4jCrjs98mSA9M6yumVoGSYo8YSqADD2pKJtc3MmauPrWZaU1uxAkw8ED",
  "key33": "5h6nLAywaEEsFvUsvssLsxHPyxpFo6QJnwKLRxyHjhvZURbvCn5bbFujkPVmcgk6YkFiH7riZ6vphHqm2yMnKwP1",
  "key34": "2kXY8YKZpxY4ZthcfrcqEbS2quWPkDYFo2W6n5VYMXAoEA2Upc7aTNNfzdc2DqMVEf7on5S5wdgwMhsYrhu9u4JE",
  "key35": "5wD1iKXDK4zN8J4zpEHB8YfaVdKYfGgsRCSZcNekiihHGfHhoYCjfpveR3HErVFvog5Xto67yCfhvbATErdXYTqY",
  "key36": "5ZzfHCGtibz3TCm6H4Exux2xn3bWHMDjHDoU37pvmWAMbnidy5JoucPGdCSuv9uQemTk8Py1YbWL6EoR5671wMg8",
  "key37": "2R81Q5rS1JXZmCbxaEMnnfgGo9o9VVkder3rkssem2DGD1wAdLNFshpdAfDq6Wh8r8Kzynkscf5gLpfndMpBRW4H",
  "key38": "SUMSvGgjTL2XayzhkWAQrz8JtLVpTjELvnnsrbczZx7qdwPqvxifBJZEM9g6ZZBjgmSnmykEuc4UvpKhq9Kqzxn",
  "key39": "2UujfWXfLcgAd6HzpbViKE9WqTborBz9nNprvLkPt5xzZzzjoRDHHU5ThvHrNaEeAeBiqH8pnKbiy9BDHDiKyNgx",
  "key40": "5Fb3FhaumQLJDABzWgcERrurHUadve5YFVNkE9c5He8i19JJV6MqMeCz43hzAWVx6FDZumaLUDoQpJkuXi3vT3Za",
  "key41": "2SkPSrTbzYSt1KbQR1F7Cb6R3sEnvneJHeuiLLAGM4UocYB9EC4XzMQecZfazECr9EDBtwM4MdsAMVmCDFxrHazw",
  "key42": "5KQn23etfSRxPWH9MfUEppkqBS7whikjw98fy7T5h4LUygWVTja8H3sxcxb6bZk5aeiJ9jcaNw3RCAeG8hL7ZV2V",
  "key43": "2HCh9F5VL2tvJDzytsi4iNkcMGYMv6J9arm4ENxUSVbC3AMHKMhFhqCYU3w19Tsuo6Zc8aoGdDcE3hjojyxQSuBQ",
  "key44": "5gTsL7TAb8BAvfc4c1XPH4ByifPgbJ27DVBxcw5Ms2tpZdT2Lyv3WNg48jQdutr6PaKcLDvaJpSgs599NYSFeaxH",
  "key45": "4KBBGPSqbtAmQ6obZNJ9aNKnKJaG3EtpDNKiRpesUkH9XuG8Z5C1nMHfegZJcHuRzjE4qEoHbawzAfqhmk6pXTya",
  "key46": "66d4oEAh7492uNmmPzbv7JKJfNNxbcyXbaYsqW7DgCFnZ8CqmcfP6cNdZwuiGD4w1u5rXXP9BEf8ZWC5xqsuWvKp",
  "key47": "56qTrngqYm5g9ShQibCDQSSU6BAHuBMd86gbxe59wzCwdd8HpQpudxNQpVi8do6W5JiPLjJKFUuwuv9MudramDAh"
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
