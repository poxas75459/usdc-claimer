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
    "421EPZiK1hs4FCvLayFhPEPVoqgBF3qeEhWz9Pwq6o6HAtLX1crMPwFSbSZ8RKCFXCk2L4djhXQGXwpaXYCJDWHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2seocPQAFr76W1qFsdKrJ5ra6xBgH7w6U4YiiQJcX9rG64h7EaekeU4zpCtUgwD679e9XBdj8Dt3oQwuMKkhiygP",
  "key1": "2sH1PDu6KqS6sjkXnK2m1aLbXmnnnWLR4FePejL4BGpWnGVg9AoGkZDYW86qT3ST8U1Cy1eCmxYwfhbPnMBTSqbN",
  "key2": "5tLoddoSiK9L1997FQBo9qwnyfEciLiUY5jbNA1eVxK5w3U5Nn1Aw6ojq9TrWGRt7B98mB3eKD7wTUfHRmo68W5j",
  "key3": "37mKkpWRoYXQ849LqJ5q2KypHytNetRydM8uxa8aXdaTpMkoA8BeyKUQoGeZbpntDW1A37rMQZNfrNzhuM1b2ozt",
  "key4": "wjmAW5dAF6hRnEGr7CHixwxzATjxSbhgUCY9rbL43m1kQ5c2kYrAh7uPuPcK3fAaGes3qEzefRmtkgPqpCiDKao",
  "key5": "3ho6cCkCSPTxuugWu1HyQcRr7XTmChHTzjkayCm37EwVgB7VpVGky2omBuqmHJKLMFWhq6HqoG4rycAANAafDvxH",
  "key6": "3em1i7vnNfMyyq7NUEuMjde1uaiDnddWNkox21AkiwPxoT1CtF6xVyN1fEc9oSmTSCX9FvH2sv5ySNEia7X5Ve4b",
  "key7": "42v1g1Vr1qXDBWBHt15P6gYv4WbGBVv75GbAPaf4pEtuvdFoBiSuKmFtQ9NZhWAaSormqDZsWPZWjwzGHRa3wo7j",
  "key8": "2TTxbt4txNa783BaojLcJz2uWd8LzXvhGNTbom8BpRF5Ru9m9SDwYyYk3wspz7gZGzjyWzqmSXJkH3o2L2r5neJ4",
  "key9": "2D1QvmsU7Nib94GKLsw4Kb9zgApsrp8QYNyniwSs3pA2psUT4CkaYtrKmxNF2sRVmLshaGRX68Fjc2sd5rEQ1SwA",
  "key10": "3FxFAKtzdD4SpqpRFsHxnh8yhfjwfAsLJiwUEE3LZFFGrxc4kEf77enmVfAgik95XX4pobzBeKivCJhJfBGC8Zv3",
  "key11": "5hBf1ukgrEsuho63tuMjMsUXvqSwWCapzXAJFa2NThGoe5muULLGADgKVvTRdv3H1NLyGFnPBBNz5LGvWzWBt1aw",
  "key12": "2K6ZePGhcPAfNreM1YLKSBgWGU4KstR3XNHetvHsUywPF1nK9BqX1DPdSQRVdpUCzfqmdC6SVE8ykAZRJeet4KwT",
  "key13": "4D98tqgbCEbcfoaLqzbPuxUgLhneGJmFz9kiwQSsafcr7YUq18apVCKAAdc8CHfWaE9qF2VhymJW6r3LDYdcAdJf",
  "key14": "p9i1JvnKcXoNbLYzxyEuHTb2CwzvrC8dyVs3j28wEKyQhPcjPgoQGGb5pNiTSRSbp4v3tfRLQPzG4einYAaKseC",
  "key15": "LZsMfazQQoYvmi9z49JSREyBDDuZydmoqz1ypYR8xva69S1Bx4yBCPAzt84BjgcVeJzzY1GaaXDy88KWUqqPyuQ",
  "key16": "5kUhyBdwc1WAJpKLFnDcYCN7BJRoo4ZRTMtMepCYDg5dDnyne3zKyrgDAPjaHebs1d79Vz6JHqkmKDCqz7azvh7L",
  "key17": "RjdGHCFV1cZkvzMPcGNNpLoWvLc24Sxqt71R4bYVLnpWT4NZqjVFffJCSBqH4Lo7SHUvV7VRfFj68YFp5fXJGVq",
  "key18": "5FK1cUYAfYwiWDar8SKcVmzz4DwsWgbVxUadF22gfMThyXhbMi8pWYbUaAhPuJ6wwzYjdQ13SrqFvVoKc5tC5dqj",
  "key19": "QQSoKxz7dbjJgnvdyeNXVq8vMmtyinUAzqeXUJ8rZLoYyXCvL656iJKiVLLsS1FYVkkTorPeDQDKVG5E2Kaz1Sk",
  "key20": "5oPn8asVAVyi4ACyDwraHTRuDME9nhFqS2dpfsvtdg5aw8FkDuMSWLPgw4t6JnLoKqtEexvAs8m2TKkAZoXRAvsp",
  "key21": "4i2TPfvobV9q6F28rmuK7WfJ3R15Li5m9AhN5SKh2XaLNr4KzEjGGcYc6VUQNw4s31pxKGNy6sd4TVWiGFdTbyfn",
  "key22": "2Tj5CKX54YThb86sNKpXQroEjmV8oi5EL12WyHEicURi9waEte8w3EkUi26yywuHP3iREBNMpjE7QHA9yLAw7834",
  "key23": "Yq3WvB56uKc1c5YNUpENqF4iU8DrnDgP9gJcBGfBNWLrNhBo2SyoEBkbdurfcD2M5DaeFwjceB1ZNwXWPdUcHtY",
  "key24": "4zJbjSBaZwdC7iUufc9WTBpHoGeABtCgUuoLSXM6rJNFCGGhKKyxTkaSsv8tQiKkdW6R1PSgDrTmt69U6unMxyoF",
  "key25": "63sS6hFMsapv4n62tSjYbBXve42tECPJAqqCQk2WeuoyphC1Br4dCPKPJvbTcETGR19aLfoKXiC74hyneNiHS8tq",
  "key26": "25vXpjWAKawampSMsvieVDpAXV7egWQoBKxE9bRcgBqa1m947QJV6qjoiZSMJQntbvJUHCj3JyJcQ7NoPhqG2tED",
  "key27": "4A9F8wCntsBjxLkKW9QJAqRJHpfYBegVNpJvbGgXLUGCqgrzME9tC89g2jEBYeqawUG8WAzVmqJpeGthtwV9G8JB",
  "key28": "eLRWrUg3qJuDwtDzHpqmfBpEz8uifgqVPLcto76NbiyEqJ6okA9C1guwFoEpjZed42bURXpjVs6diJcHQ6dCSvi",
  "key29": "4m5zewvHSTYmeC36voSfB2E9xvDp7NjSFMmSR4jG8zf4THZh82cnWA4Z2rpHUV6PNjHSLwvmtYhz2FuW4G8i3KfX",
  "key30": "3vqJ55t5vyRHV6yTftknSCrSfQ9L5i55ntPzu2f5CJbzHXafu5s8CujnV21vrVaiAgVzDmwMBdqDAfHgUssEMieR",
  "key31": "2LsUrVTfv9HpXu2N6qcWSfP2WssgL3jajdzeSohV3yFeDRfTUPxN27ovx9TixDq3F2kLYLsaBdzYaHfD6CW1Dzdm",
  "key32": "VDbEjNL97MmjLnhrd6XmPRz9hf3owDn2hAVFzRM2a5hCAaSvvJECXUrJ761ZhGVuj58RBvsSkQ4n48NTsShkazm",
  "key33": "5HW2ZKU4RAkiY2VVmU7YLPUbwu5ENwtfwMk8k6ViPMsptXfTuMeVv1Ki2ccTWMPjS2D8uhEN2Q7rG5FqbseQtfQw",
  "key34": "2piDcHNPjYvis58v9ZsjNDEFLadzMTSA9e7NAUgNaeG65ZYo9UZnS4mk4S7eMYbmWM7zxkSQWUtsZpnfy3c5XUz5",
  "key35": "3HXDF4arDU2brs6uVsrYQu7TpnSCv3gN65iVtL4PVnTHBDEfoU3UiaEhGS2qfi3v4wGFGW25GLoJAZHTiEY51vwn"
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
