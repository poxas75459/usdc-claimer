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
    "3ubJt3qb3rvhup2BSn3s2wBDZyNzaZHe2wFewbVa7QiVoecqDdw1fb1u66ve3WSqn7ePGbeWFfbNP6xPbc8atDjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JU1kNT5fFsdx5xPv12aiGr3ofTosJveSMRz4iJGAEmyvkG9dSfDZyxFeVBZj4MKZxJMma6E28vrgWZWg1e8Aphw",
  "key1": "4vvXp9sbURuuUXSsrJscj72wAJZ1Kynbf8wsgNci991wcfvV4cjFhAPABaagsjLpTSJAxBSpQkhbteivJVefUyiJ",
  "key2": "2u4H3wtchoX1YXjLMfcLJY2JPE3JmZcUSyeYJyteNJnm4tGSbE92qXWp2Rqoi4wKTYwiogNqtUYcK1w9BuaKagE1",
  "key3": "sNJPkHnfNmQ9GvMQSn4qgQecNXZFdZ6gnmjYjkYGHQnBeYvNX4EHL4tEtkYAtHQiET7eqcwEMhGKwfitqneUACY",
  "key4": "YaVGDdCe7VXBTNv6aPFvv2wh9na5kFa7mPA78DuGDVyKFR7JWffoDohL8xdDuZzx8Ky6XNMaG9AP497VKvEheJk",
  "key5": "huqNUQzYt8cntPc4NLiiDwyA7KCNsmhX242aEDg7MTdtPAHSAeXvMZq3vwvRBshxKkTsfmBanvHTq1MeuSGbxmN",
  "key6": "5nz3nMAX62U1CErgMupXhor5VU4y9gtYMkKdMAWMXgQSgoyxVeG19ZHtJKo3NsZAcr47oWM1cHLSXhrwy5WqgHYd",
  "key7": "2KGstMCiKBEWgdRxyYQfuJG7ZtApVNpHt9Wj4epL5DtqppFhfhkuNwdQ2pDkNpg8trCvDhBCjo8MwMLbfMaS8qJU",
  "key8": "5ZCrz42v2PFRB1FWzr3iDxgNRgVtnGbh9MLPDbDQEha5DF3mzbeUZS3ZRMXpPRDj7VkYM1Ec22oePwd8AMf6zTeQ",
  "key9": "46XcKQ5k4u1EeBM3J84MC1xxvXND9puzRS9rC6gJBQeFkJGuJH3H7wSkFyCWGbM4ZsnG4FpLYEAMAn8gsErUhgup",
  "key10": "2PApmpuPeDsNuZCXtf6aAQrfeSMs7a5x1HhX6j88iHNjXH6gL1SBNDfradKW8BSLZGojnoxXsermiihW8P5b46rG",
  "key11": "zyoezTuyaZXCo8Bo6Y8TwYRRPA1ye31GEyQq7DbC7Y4vj3YwJUzPgsbAi5CsDx38mHaxvGVAc3oshZpk9tkGru7",
  "key12": "5PvKcqYTsEjJGCztitKAhcyXcpX5KNTkp9bv21CM5g6rywnziZtK9ifXuonaajnZEKW5uRopty5okXavVnqvHFbD",
  "key13": "nhzjEhp4yfQg1MYaRAY4LojpWdNdZ32jTm7qKWvzwg8jTXQ8e34NRrFsRgGE35wXphzmnWqbXbDweuD7wisyk55",
  "key14": "4dgNuADxmCAbapxb65eoT1fEAtX74DYu5pLxNFQYXDEYu8B1iiYLhVoUdZBdadYK5bqLSSDX1jc4NQmpubMBaoZH",
  "key15": "2b3cb3L2A2NnwTZf5jRznqXxeWho1w3b6LtdDEWUJqeL3ZuUwKhsYU5WYWDgeaJuEBpxsQkqT2CDR1i5SYBtuYbd",
  "key16": "3oABsnFhVYLua3w83u8ZtJLBc37V4FGJzdDBmVWnDdRkmug2RPjeWEv8M7KsZFnEuLCmFSLFMtRYWbrhmsp4r7o",
  "key17": "4CkmW8M78QVZEEkFGv9SdbVnguWKGcEaHyifRqPb4QhoqFas43L24n5o9MYyDJro8sqmzTPS5YErmnMEMAAWdFTr",
  "key18": "3w1d3yMkHVQVkf9T6FUd2TKrTBiyW3gdNt4j8avCV9FiVx1TXWDgxsjheYpgBUWiyFq7FUQLJnXMeirZMQyAwo1j",
  "key19": "4QpjFWf558LMhRFAutY4uzrLn1KBhUauEtyTo6AaAkpSQ9WrVfJi6cQ1Uidz9Wkg2tQhXPDgAtvgxnnekjiQiv5M",
  "key20": "2b3wfu39pmDXSJJZtc8zxV1zW679KkTTMZ6Q59ymEMq41giLoT2PzUJACgDCah6RaWzRHWcACQyF3vxxxZsghT8S",
  "key21": "5B6b2HYPLmcREepgvZSQ72L9cZGfXj6WQcnH34PWrBtqdqCWDGo1iiJaiU4NekwzMd7hLZjp4njAeS5pxPf7GMhF",
  "key22": "3GQq9F3iRiA8u3TQayozpaWeXAAWw5iioEnj2eVJpsuQUeGzD5hoBkioEgtPADh4zhrPb4LnxdMwZPsKWQcmKJDG",
  "key23": "2uCKLYv8FwbrgL72ihso6tGaWgLJg3esqThkg5RPqW3VUzWoCPH2ZqX5XgJd9eBobH1uGy74kM9p15NUoCBHNyNR",
  "key24": "4tBheHrigjWpgtM6BiJtBjQFEGtFn4J961ynh9P1FBV4czFUjLZAAXHw5QKmtDwfSrywn92HPhvKMSBHReyQkR4m",
  "key25": "2waCj2LaVmHavAyf2vcFzFe2HUEbwxWnPKdSQyHwbwE7F17KVdcrhZbk4gErs8gkBAaAtfDYJM4hfFHyH7zefhLg",
  "key26": "5iiUZoVihkC8ZDJHwcJqtH3oHorjjNBLuEamBZUxJx39idCWi32XDfjHp6pr7heLnJ4JMBP14EyGNwpuj5ey8hCS",
  "key27": "5xkP32zgSCALX7gJqkMfNKhyxC9KiHeb3rEQpMVkmvMdDxD9MvEo9Fs2gn2EVmMrXZuhvuwzqqQJAJiFvkkZsPuE",
  "key28": "35uTqjewc7mCvzuNPEsftUAFq4RSJNNJdvpJLA9mZoaZLSVCW1zwhN1btYKXaUGeuL1m92rKUfNSBFHLTciCafBf",
  "key29": "2utTTxzSaKZGjpZa96BXsjVwnNdgaWsnBsDDB3isir6nsjyZMx4jBe8fsDr33vtw1F9EmGvyV3sSohey3RMVs6K5",
  "key30": "3WKmegifr8wMMa6TA1EUBAhcrfTEAwwCzZYhUjQ873buhinC82WkFZXaSBkRks853KE57xDJktP3MZqb749DWtTW",
  "key31": "27zGML5NTRtHKyVzBkCqLTk1aHnqTe2AzVd3dstN7M87GmDUSKFDDfdRVaqHRp8dQazSJz7whsSP39VdSdghJRXE",
  "key32": "HbQCYcj6hWjCAFmZGip48v8Va1puBzoV8zDv1ocPUQxdaE7mNrQpdDaxaNGnAiXkwEme6SWZF1oGQasUJTHkDG6",
  "key33": "3bsmVwgpUSHu8sjwL5MxTmqtpj4gN5VPQqdnAjXDqJFjbjVinr3ALgVQh9CmT8daHEf8GoJ8v2Vqvwb855xy4o4A",
  "key34": "Ly5ZrV8FzFmEZ3S1Ei3T6B9U7FF4fgKaA5kK31nBbGESKXiXfpPkFb4NR7Hv3hr2AXu4BdVGJ2j2oxfEVbf2GBf",
  "key35": "5a3CiwVh3u5JcQjJTy84vSmkfQUAdrE9gRhBCxfxpCgusZCa9PtjoJ99kAFV9e49GFjTNbUC3xrrLnnD6nxdy4Bt"
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
