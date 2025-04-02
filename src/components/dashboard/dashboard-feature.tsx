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
    "2dYSrVQBe82372ocZH8pNU9o7QkEB3aE9hzAHBvg4wMYVd83Hvuet8sBZY5BXWqkxFpRfUzpARQGoZ7o2HNFdbM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66d7Kh5DPrKPufbRqDnn5YDiSPZtq4nDNDJ3c3LQHDjFKXkquYDN4en3KgFr1MJhNszuXGmYNsedAScaeJjCvy4Y",
  "key1": "5CPGWLfnAWuFV7DA4XhYqBF5PnR5xVGEPT5s7nc7bdg1GVrdBc43tQJsfbFGG61KinRPrhfQA7CQK29pgSfgtr6B",
  "key2": "EQqk2gMC8oUP5NvWxLQXYaCVRXxkjvXEfQUhFG6nF9XAxF4W34zajyw58v9oDPCEEb57gHdGNk6M54TiqamAwmB",
  "key3": "PfGH7sMHQMDeTb96JTdsU89ArCpFbv5NCgxNoyMhxyfZWo5pNZtUUwvuiMiWrUpEXRrEc6GvyFPsU3gwiX54GWg",
  "key4": "2SGDYobBwhAVc6LavaEViuxAptpCSxp9cYN9r9dwHzbSd2gxkb9gowVmjVnFST7zE8TzsTiaMiqadSUAxYeB5TjF",
  "key5": "3iwqgg4Foys2d9jYcqhqDgYQew3XmKkXZn83R49rEkMgWtHnaPmV2mjxdoJKLAWGoW3ZL3JC8HDXKyF8EtgWoB6p",
  "key6": "1MaPe1TN8vURAXVFApyuDAxUzH1VhAW8yb1adcQPhroVHJRJjtsvq5oiZyMkoJ4YJ2ArnhBKSkdMNWEE12svVXG",
  "key7": "4rT4eEtQ5ANtXqpgEQ2q2mRtSutHuecLLrkhEByzrZ9ngXoYxKuxUwBPGzhD5aYhDpUE8smmKMqSsxm1D2Jj8hCS",
  "key8": "63ZHRx9f9Nbd93d4oVSVLjsu7mHC48uya7CFX2kWCrF27djdTpGgpwUFup6JFMxqiENMGpPX9JJAPdcQihL36DVN",
  "key9": "44htGW26XU6XbsoB1NNxU6rHnVrecBk3VGXk27MZuVnQEueq4PCpgJMrmyE3jUexkEGaMQ6crPM49CM2H5vzpFMp",
  "key10": "fNm9HiQVEmGLnv1aQqMzN2zbnEk3NhrrLKN9smkjEAbHCA9RhMdStK1bMmeirYwQ94VWCjgUHCy4hazc13fssaV",
  "key11": "5JfTEiwSbjZ9WrJHKTqLF4UTirR5F6feFmvfoi1fXPXEXEjCLy5k1H876B11XkorfQfi6XdNbW3SxEyRvTwVkw31",
  "key12": "Ubz4Wxo4ELpYbFPM5qPYJswRh4HMAu3rjQXG74w1qnmC3dHG5r3efQ5vmQAFWjUPHkz1b5P9h2pp1fkKJubXNzo",
  "key13": "2MztjJ4GjYSv6cy1vJyhX29kcfHdLxkkAgcerLgjaWxgH7oUmUA88DzDbmRMbpPCyrjhZgX6ZM5qJouwRLSh3wo7",
  "key14": "3goudG521wtEyUnyHiWfLUoH9ZYhjmvatjTisNUaLyEtFsCuAwQ4B3LD8QUcrEyxwo32giWM3BNg3syfreRn1hkj",
  "key15": "2ianKnfzofW1kWZJ3vdBKLBoBrfEco6t6iH2KpSVMPAQBGwB5L9c9Vnt1B28RcsxZoyEDNmf7pDPYVWCsfkoqLVK",
  "key16": "3Kmh1LiXpUdUw2PEW2RN1ZDhCkiS5dmpm7abxwy14ruh8XGRkoa7y6Ycvy543u1DPXr2bxR5S6vR6bZsi9vWC2JV",
  "key17": "3TcFUSVtU4M3v7HoXQ5YjzsWWocoBFAQozAph7ozrpvtapCmXyh3Lnw9ASCCBC998zXtZUgGHWQYGnvpdG6go13o",
  "key18": "4JxrKXFNnMPQCncwuEBTc634PJ7i4mUhitTaMUMfezQ9ZM1d4q53yqaFRBeh9J2dDwryqj56JcVv3Exx5nWFe8e4",
  "key19": "ydtoupsokrVRf1hYbwsxZLnKNXgXWUWp13QagEBtGVfx5JR8nD7zhpWTPAKCmVA2HNYaN8yz5iJ9DdyFRsSa2T3",
  "key20": "4KjNN5sG7Qk1WZN1FvYtpyRoACnHBRqbp8WvQznrjwhR1Rum6sn7YTrunV9DnfY2hfjDS9c39uspvQLRqyxvguKv",
  "key21": "ZvFpwjcA3HH2EZo45FkYeTZHmJi3NJg9evowzmBqErzTDKwYKFHYMvCnBaGn5Uy1Hepdi2mTayjNmueAPNUmFU9",
  "key22": "4zDPfWuu3kHDyRYn4YgB6RGCMNtnzpZGBb8Q9YhepTruTX6GQyhHekUXAdrsSMZxAFxATScw5Hjz19sjE9KmRMww",
  "key23": "2M42EX7HHDsRzjRzL6BUY5qi2Y1wnGrbX8RCcw2b27ZyTehVTTyPUUbcBA8EcVzr23RYD7Sat8Jsink4BQbrzzMM",
  "key24": "5aKLpuzwzAHEsaf8LDHWQ3CL3HGbrf3zts51CfEZBWgvgeN7jgS14qmKEaAGniNo3pNnDXvkybHS5AJ2Q8cpyfGg",
  "key25": "2htrpRYWHiwqPZcYyq8kEf3aEwRn8pgQNmaHqCWngKzhs6nBDggSPrEXZVKznsY84bZ9t64ivUjxWnJDWamxXFZd",
  "key26": "3QEUuKWAUoEHB5KVNmM7wwpqex2N7ZxE64o11SHDHUXC1fbf32fp3AsHS8iLx1Uk7tmLRRgN7weVmo64rfxTHTs8"
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
