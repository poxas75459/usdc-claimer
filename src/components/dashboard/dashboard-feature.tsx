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
    "3fXEkxcs31Tro1PZozzHe9DDxuMiFCPgA4HK84UANr9g3KrHCDGJvNxW9EX828TnkqeqZPfgGs7uraUbz17DVT2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5md6LKsEqik9G11uDeAG3NKzedpoCCs3Vi6Q9ka7gUyihZivnWC9p16PzukemjrJDQiEPRHf4kzNPf7B6uofxcyz",
  "key1": "2dj3Wnzdz38kDJXBtzcDQbxbQw35kLw3JST8DcxCLN2ybiMW9N5a3icrVmeP8AUHKuUDxWTgBcutK2SFy1PGEEvP",
  "key2": "3AbtLKymET2WfmTJpV59153Ynu5NxfJkFYQ7zeayR1BwGgQoqJ6SxCpq4PvvJ2bxF1dx62hv4yX6iehpyCbNdLBu",
  "key3": "5RdWtrSUA8PiJmbRbXXkGPTm9sg6bqzredfYmgcijjKXXRXhwLmFyRw6nGG2nrd6jCWqR5Ttcqnxoc6KX23viGrA",
  "key4": "3WcSbosiPBR5MW87fmRZSCxgB1q9Sxk4ogCYue8SnzqJyr6NbUHF8CERqEXD1UMERVtKuvQDXvbfGVhxDjyKLWxU",
  "key5": "2JCgFWaqv6nzNLd2rJF7Nfoun2sV18hMJUwU7ebasRmoXuQJczUoCjaSXSVk7x6D1YxqY5wfmEGzUjevAQkkhYg1",
  "key6": "3G389Tg8MCM4BMC2gDyewLwpeuLi2F17Z1HKXbWhAcZVzSdKiBRFrMBWxM89xZtJyCxRhLxNybgWWzgmLhFaiuSW",
  "key7": "2phESYQRVaSd1LFxxHHGob9W15DR5y414A9z5HEB1P8VZNDsXgoBqQb1jHjYvFaizFiHjN2xxJiijjmC9PigvY1b",
  "key8": "ki56UZPqn8DgXc27cF6xNa92XXZQio8q3mazbZ4wS3GLzHQvLGHqWcZ8gmA5wYpN3T24NRtEybkjePwECxoEHMR",
  "key9": "HHQSkNaWwuwSN22VRG3DBDAGDriXwBoZcdSrzRYkQV2aBgPJ79jVfvqqxQQM7C8RzM7j7LBAH237grX9Mi58X7F",
  "key10": "3MrzYo6n31GBwyzfYaoNdYwaxWqx5EzJb3cWREBNy7J1keMcdFzHaFLFG6doQdnqsXpGwvoGmYkswNXmamA5WJc6",
  "key11": "E9yGpJpQq8XTwt9g8k9BepjHax2RvEVkA6GfZrxpKZo1EeFEtykqmchNL5R3fk3THFJVxTrDVqTGESwofh88x5F",
  "key12": "iPBE1QLPFFq22H7LvupzWPSvgQr5XNHwoUT5EeLcQM9HcCWa84J2ymEJeXtixYwPbYUJh69dNVbr8fbEFJXD1KR",
  "key13": "5Zqfmrf9x8RY6QgDZaZSiKZZn1YcpWS6miFEeqTea9ebzp85fnaajW4TDonYDu9Aze7a54giJ5SUn7x2NSdtFTiV",
  "key14": "4R2Qy4hrnvZgHYN1BHgeuvCvYZFTzw7iHzQRgQL91x284az3tScAzMUhEVKenEF1GGKudtET7pZ3EVciiKcH3dZ6",
  "key15": "bXCbpNTtVJHfSxE2uuAXBq5Fhvwvudjyn1oNoWqNqPV5mBWwyzZ3ym9NWdXz4Te9YAronuPAbbeaBagDeFzgQ7D",
  "key16": "gyYSjiyJmB36qDH3gnvuikNxRWzsEEeDRyeXRp7CQy3NeirF6xtPep7bBBH2SnNKfjMLZVAUPwAuy95AG31W3et",
  "key17": "2dY1bMtUYD4SV9QFd6qQuMWkK13BvPjrRF6sJ2iqa8pGnkv4cYFFcDZeWtb9mw8aVGmbHqZX5WcCoRzTYp8Yuj6e",
  "key18": "273n9tNTSYikDAsLtW6s1bDn4HTVVReC5npQBigQ5uLq1dvp2pMXK431PzYTikpwPL4w9QrTwaYG4rKiJS8GdMsz",
  "key19": "35P3h2M2mFPDFLZxZja2jMX2LjZbY9XzgujbJKDy4XwGbytXErWc1wtyiDb1vmbFhMMc8ooEncSShSMdFKDXvksL",
  "key20": "CBAHzAvMJ454TWESkRPHEkKWhDsBPaCHQp7Vp1bqfhfV6ZVyUV86DDpiUsFkR9jK1xxC5dkPuY4jkpWms7U6H2o",
  "key21": "3gqqGC2JXWMb7GhbPuHfrv3EgWdj2ygz4R9fVxxTmb7dRHUGhpjkbyA2HHrG4ukmQA56WP5uSVuyWdQaUmAn7iNX",
  "key22": "3eYFR8PVteufuRSJLU5HXp8Mt8c8RssyurX1ubUgQyw1NEtqS8fbHr1fBcUmtZhEsGhGM7seamp4gS4LDTTzVq43",
  "key23": "3xAot2SZhxFk28NfLaudbtyXnJ7FRk7K3bPoyD1RPkXemdinKoamYkx9BmNpMDqc3YvdcwThjaKEe5GiGWCa21w5",
  "key24": "4Na8Bty3ev2aqLwHqpAW3MSi1vEuogecwLQRxe3UsiMsmKZRDm6GdJJfobYabVgWnRkFZ5Uf62hN6psHCJ1gGXm2",
  "key25": "2kcyqVQUhZJGEqXEbqkDw98weqqK2rgmg5PQ5UALR4kfkeFM9EURWMypMFgpendXEiCDrCcW6CHRgfXLxF5h1stz",
  "key26": "66Qip9QK584GzBhQ6sfctiUa4XfQ9LF6bcWYTUQpGUtXuayv8Topas7V4R9g32mGZ1y2M3iQ8GvvNvGjqvkWDQGw",
  "key27": "3piPaoGZsdepZZMa4RLzrt79GvCaN9cJZzVQj5xvEjW3pLY6uXaSyNspX6WphFR5BrWYBZgNeXWNWGPq9rgMXthR",
  "key28": "4KEiM5kcafvd2hYP9BU6Apn3mYcEPWsHKU9XSsG1cyamoAty8f1qoJLtbWFXxWfSpsTggpMXLqc7dYFjaMwQQdRq",
  "key29": "67jxb32zDvWJa4EiVx7bMGbHX1NatRywyzuccXPhQ9ypzRVCkyLYCpYF2NwqmfSZR44dQxTiKLk6aC8M5hf8aKk4",
  "key30": "4q1yL1oGxmKBHADCLeFxbCgfWmQGQ1f5N6iKNJRvdvHNaBE9GUwsyCVCyinrCHtzeYhvL9C8ofyNQS9aAZ1C63hC",
  "key31": "JKVrp1jG9FtLgoe4x91DEEPpHrRqWewV3A6XGFLEZUi8LkJU6CzrxsGNBn93MsPvijtMQfUBaoVMexQVtjp2icf",
  "key32": "5y3LSqpN3iXE7rDoe21La88927VhRsitAB8rwLJyyb5RT6m9RkEucA2fBy2wHxH7ScVcN45Ewq88Swhd9cXVVnoB",
  "key33": "42fARhDq2TfuK6Z7MCYVGoLcpQxybnhKksHFxYurNXePTiSc3baUerWpbJYyRuTykaUmdoiH6kMdmAVgmBgSc9fZ",
  "key34": "2QpuJQRXErWSq42ausuoSKKRoWmZS54orHidokcwzxYbEL6sBpU1GcxhAFS6wkXimquNMEYmgJnioPrdzZd1q9T3",
  "key35": "29n4K4AMC5Nu1XVpe1vM5j79PcncZXmNkVXJpkaJ5ejNn1MiHrVSxnxjCgKkUop9FbCuzarTdyBx4oL2SWmpeTpX",
  "key36": "27ZnLep5UJTRDBEyUqW7MmYa4fPhWKtRnJQwU3Vf46nXj258qb7cky9ai5bQrzhBvFeWJjnQ8bsjMas4S3imDYvX",
  "key37": "3ZrZsm2pcFeDkHsXs2ErrGyBhTsLMLZN4hS9fzVu4KxUsbEAhWDTfk2JemkHWvCd1QZvnbZjW3TX2Z78HsGv5LWY",
  "key38": "2Yd4AKDySYKxERFBxRrZ2tWagxsbnJTwqZvCXJsr1BLYmZc9D3cSR1TU22PCHhRWTZKDbzMULv5JFiJS8PN4ZM1q",
  "key39": "5zQHegnhS2h5WDL4wnwtD5DGpHAdLoJRVAZ2cT7fAbazzmLqg2iQ6RBDsD57o2HeeF2TGC1uRFrpZhjPLemWFxBc",
  "key40": "5xuDy4bmLdjwnxrdwMqcjYH3Vihcsy5qzTRwLzKud8yA8V986NTaee4XoZghQWZwSn5ybpCyxRxWTaH9L1PeKFbC",
  "key41": "4PofmyiHen8ugVev7uR9TKYtMLCx1fmCTxeBBdPdte7HBLRb3t1CvpvJ3Hc6ejACWnoug3e9sve96UBEH4ZtdQZX",
  "key42": "36M7RNRBvsne3naTUoMyiuqeacHM3HZCGvcCrJC1H9DXgebrJhvd9Se5wmtGevPNyDcLKgARPLdMqWNcdfMDa57i",
  "key43": "3yNrhU4snBs3YWqATwRsFajD3JCYvq9Z2a8h19jTQoEspzWtkP2zgdW2ZMpe2day1JxTJWAas7mQAU3qXmoGNs1y",
  "key44": "3RYexZZYnhudM1ahCL9gtZTxNFL8xJfRxVTRiZ2R3xrskL8aPyQ9we286jJnGopvEeEZgTAxPF4dxpcFoVWiqUnG",
  "key45": "3mfnGXeianNmQyz2eFhx7RhkHFDSe6xJ6mw1tH9w7vjpVEpjCRFAJaHJefpWM8eiSrJzqjjyeoK6vXV6N9Gg7WDa",
  "key46": "5GnczLSeFUGbamLnpuV73SAdj89HTmAHdoUN2YSQoWrBcrS1Ti8J8Y6FQcgCicnL1TSfX69ES8wQCGTmxFvH1PwP",
  "key47": "2YkudwSSx6ig1WJxGZGozP4EmzJ8hUh6ZNbabVDByZEmraxak5ViuJ7p4P6UjCtVCcz2dVrQjGXBzNJ3HJNihcj5"
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
