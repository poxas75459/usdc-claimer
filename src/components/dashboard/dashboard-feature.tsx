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
    "5QKfT2jMPzpTv9FcfFkzYK6Dw3vA3HcPQhHqyL2dh3TRa8AtVEEBuB6sT52XmYR6Qpz3S2JUvvPHPfzUzojvvtfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9GfMpbyFk3CwgAhEUHirJrmh8V4ZBRx5ELro15qrRErUcu5LDW55cAF9MRxHtwcD8AF9QDJuugjgJkpidacbeU",
  "key1": "3vPX4vibmjiYN2ezSnxXP9FWKWohacH1gnHnBB2bkwWmnHueYmyrfn4LjCjqHXD1MW6Wcak99gvyULpcCB7aVnjh",
  "key2": "4Vdgfboxk8ZYEhQhsFMNZNb9P9khqPwp2nYURUeDJhjaWNmZufPZkCLsmLLvRSzGDj3J3wuHU3yxQGgvohwztSFi",
  "key3": "5EaoGxTgU3Hx5bbfjv3awGgYGi7vqoXTAo2HcFuehEPPBHd1KJHuYMtuE1pKSazmHWk6jEiPcAyTaYz2ZaVduHyq",
  "key4": "2Gpbhd7s4DPcabW2Vq4wn8Z9HN13myrBP5nBPigm1NkowDFeTZyKtx5oXQJpcSCx86m1a2BaeDmaLBjJAU6R4aru",
  "key5": "3HBr6oaWsASxVzSnaYcUPPHEuH43GPEen3BcwTyUaUbVfEfwvvtM3WjtGAFuaX5gutEznHmenJGXTX7Yxdc5oqi6",
  "key6": "3A6b9ACQ1tVnQwPX56mttDMPM42BfPU55KHWeUphJS2uW4dBhWngLUWJQ3U5py387dX3D3K34fji1hbx6L4SFe6Q",
  "key7": "35FQMDRbJWVmbotZs2jS2mVwKwTkcCa8bJuyxJvNNSQGwtxjJHx28hbEaNNRAuvMbFXRL71VW7d63KA1UCTDMRMM",
  "key8": "2kVV8nuE9ewt5DRci4e3Hc8o4tjvBXTV1A2A55C5V8LxLgpirx2csT6j1iXvtr629XFzYwJueQX6EZmdTbXeWXVj",
  "key9": "c4cqRvvdRJXjh87CcTArofHbzkJc8MFGNvogM7mKfBnJPcPE6VEG6tt6YtKeLpWNb4Ch6RwrqQpTfgJkjhwWNdG",
  "key10": "61vQGTFqATvSpr2EvVt9L1fP95jasWkS3tK35wCdDh4hjSm24N7umW77iDRr2Xm9JGTZx4psmyQmi5T45gVMC398",
  "key11": "5xNTwEdXWsFKfm6q1RzBNwcNHoVfKNm6qEcxAp6bTJESUzYUeb4vNCpb5z7h6bvL7fX6Guwut1B7kBvYBMLKPVKU",
  "key12": "5vspSVGoYcxmoMR3Yzry6bcaUWpWYXqvh4n7JbUuB3HskPsE7FHXbgXdvqG8HLqpTxSKQcWW3XikxLFm3Qh6WjEp",
  "key13": "2cYyUFayTLyW4531vXAW89mjEWqWbzDQkSFWMw6b7VyLHL1U65cbXChkS1v4GgvQdEEeGju1tehP5i1kd4KomnvK",
  "key14": "5185Cc2Hnp7tjGwi7xmz731WgKkTgH5HHg8JhTGetbo8Xfviu9xDF2SafQuNKn5cXVA5cY78cJdAoeKFTyYkdrT5",
  "key15": "4sTtn1eiaRTeM6zA7TpUySL1dKfurTWHJh994dJoLMRXXf3whomqCHzfLyajWskRHx2WpWoWb49iFRVqpu29YfgZ",
  "key16": "3q9pP3GuvhJx7PTHmnymReywJcfY4AAT3DMCxkK9VGYBwkuZ8qwuGcofmMHpQdSW198B1P3TivZBuhr1h6UqSk71",
  "key17": "31eBdX3j4US6gsETArnQqbZKKXwQaEkbjAfPuBkqx5GTatqPwMeao6ArQXRncKytDZ9JZ3rjVUcsxy6pDSRt5jHK",
  "key18": "3a16H7ZHRFfCP9RyiX3NJhYmjYiiMZRMaJejZwHfcAPdCep5Qy7p5wr1fXLsxckqZnvGYYG97NzG3jpfCMKB2q4Z",
  "key19": "PafSpXjbwvtX5qYCiwafph4CyQghkg4NiE59PbMEiikCvPpCVkjSjtLLyaZGFzZcpFPy5Kb1mUAZcs94JGotqxg",
  "key20": "3ZCpVs4M7Qe7oUL4A9nyjbjcsbRkJX2kgFzk6b1dxQCAvFMaTqjMKMvWV9j4i3wb7vKYbrCjVhWhQKf3uyxATxrS",
  "key21": "2NJkiTnZDG7Vf7AJVVSB6HWEAhexNA9pZf13ePvM6naQtdivFbfycxudfF3DwfRDAfezj6atzAvnKmAGYHffgxTF",
  "key22": "39bmgnKziBde171bkkRR9kUkstYeyJM4AGxC3Q36a1EKVkLA9b535SM1GFNZ3a9qHGsGaJcbDg2pJMKXu1ghdcmt",
  "key23": "5Nqhwcy3SzfuFgMutdHp6U4gsqbiCPqbrQtRh7Kv5ihMgd3pnavP18mX44f2YPcPuA7obYAGm2KBBKx6ykX7xmNC",
  "key24": "2CQs2bM2iazycyykvhXeMvbJ552r8uBh8Lh52ngNwqaq7wMm1zw4tMeydszDZsKxG36kn74Vcn5DyGnpxNZVi93i",
  "key25": "3sf69Eocox47VfKHxXe7Hz9oDqPfe785kcDveP4MjpPrgq5XC3tnAsYQ3PvmYAUUMW7eMLETNj4LZTL7aACB1AKP",
  "key26": "5YhbWgFnPS6s1Sqvd2BEC8BotjVRvk1cKP41v4R15Dju7hTxid6kK1Z5PYbUy5Ento4YjY2tw1n6McBFxEJx6onX",
  "key27": "DyLz2Nz33bBcJpiZWpokGmeQwFiTCHy4Sy1CCHxFEBAG2sqjoCbYoNombZxqsffwDYiDWuNNrcYtyP1gwfZo3aM",
  "key28": "4zGqwQkqJ7hWYBja8fSBKZwzWYXNMm7GVNRmcMP284Forx4ZgsBdq2KEx338xKqf28a4UZPnZBGosTBoQz3J8z28",
  "key29": "5Af8xS4MrYYYAHLJsuYK8FLyviavBvRCxJQeJpDHU9RmdDBR49CnR442BWPLBKYmpaNjmLEbe8EkuRfvJTQJytz1",
  "key30": "xW73wcohVHu8Rk7KLZnjpPcBpnmpSfW7GRNmWpizstRU3ARJm6rj4RGzGsvSJQh7GHXDrTjQMRP8my5ewG27ynF",
  "key31": "DLZMXcmjpzSAXBuJoZ4nqHTWZroZ45pzm3J3t9LcgHbVtqEQEYdXpfVfE916eBesLdsna9DxiNjgG3fXyX29b6J",
  "key32": "3NZwkYxM38QZ9hEYEGqFxmU6NZkSw28wg9e9jzirzkB9RJ7MqtjBMffemx6RcpfHLuTU4znuFYh4NW18bcy6MDz3",
  "key33": "2U2bFduwJH4y6QUnEemP7vMTrh8RLt7srtGNxcqTHqU3Z3Bh2U52GQEthKGMW98GLaLSS6LQca8abYf8rKwXLzwb",
  "key34": "3u8761DKa6tifYHw5hmxQES2GbDaaep7EVn2XtUUWsWCFWSqfV3B3cnLzg7W8nSWt1TDYao6fPhqG5A8ViGLoEUN",
  "key35": "2MGJPeMaDxCj1TkEW725ZA6jq3HHsELCway8sW9sGnNueKkNAE99G8fxDgiUytYzmBCYniqp6QYFH8v5a9FWFdW6",
  "key36": "2ukTbNo5d14aCUCPNEdYpUDqrWVmLwLDDNwruU4aQcFMUigEUsp1xRSAkSgUwHV94PqzwH6WcYTyyUTYfSAEusuq",
  "key37": "5wcJwiG7sURSzNDb3GLSxEpa4ESpvEgiTcxqDywLJitSEweBCyFxu6oHXQ8N1AmQP2z4thjtuyNat3WHfVT2a8Ey",
  "key38": "4Jc6jA5y995WaHuatAWH3CAQ4C6ihucAGzmFV9Uv932bPFipE3mPjogyS5rWAM9D8YpmMhT1oPmU86HPmQTECzce",
  "key39": "Gacgd2idrQ5LL2dRq5Eu5Q3EBcnSEosibbKnW7SUdFGEb5uRQrcEsWK3DiyAMCXgZRvzmLodAF4K6twezFHPbbw",
  "key40": "N2mfnT7QqAiQP8tA4eCV2SiV9vWbE7ytyzm3ikW7hkFSVhfBRumsL24ZxYBkCXEsUQi1AsaSs5JG4uD94e7qtAp"
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
