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
    "igwvvj143113KsfdRNrGwUjTZ25fNjqkoEMGL6gQJNZ5U2vyK2jLwiY4va8e1GiTCxuTp1Q8DLEeXq5baZiLpKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkQM7acWZoLVgj6CxzzihfgCexSinVdo5NzRpX2KLvL7QvMVEnp9KPXf7YNzqoc35B3Z6c4AsyjMGaJFaWLZHuG",
  "key1": "2WyU9QYcmU8dUCZjfEQaXMEDb58HwEzwxkzJvAVih6idD1FiR1N7LBHCLs8Vkc1GLuAau3JL2uFP2bMY1dsUPbiB",
  "key2": "4uEd257fQMFQqBHJ138MLb9BWj71Br3tj7JbUf7qy1j5eojbf73owemkRBWbKeApPKNEH1MaGqRLGR9A2b7pzukH",
  "key3": "4enoyna23TjvWyBi7sHxoemWr1B4t8q1MWaXmKUaUNBeMrsta2nFfoWezHaiwjNDk8BRJy8LMtpH2UwJgTcxBqDp",
  "key4": "5zXSCxFfekES9CVFf7tJTCHjs8JiFyST1i3hxKHMdYbpzwUHky7JAkZSWgHNVLDTd4jSjAiEqgpBHS4PVxLUh2VN",
  "key5": "2uuBEfKaC18HPYXrBbDBn6DeX99zUimjPnpnH959adB2xfBiRcPmKsbsoV9kPUWknEzN2dCW6SYGxpwz4zfDjD96",
  "key6": "5wvpskGCgRmczdB8k3usoxCwhqe2RDtevyGDM2fQsXGbc2sHWo2kSs4ABPBDoU912XcwkvzppfNNdLFZaEcoTxjR",
  "key7": "678GFATJxnh5h62Tcya1eGg1gdWgt717AKbGgXEQYhs1YDHa7x6cbwQAkhBF6nBSnRSC1i2pojeCWdxR1SSKL2CX",
  "key8": "4Tp2aa8K445WYwWARdQffXeKznF4THRKwe5TBq8kErP4nwHdaaGBLHMqRSzYZydZL8atoBW5QJZcfemyF6JuGodT",
  "key9": "3W6UG79ef5fSEcdkMhqRv9qupTdJRJyohd86DSyVUYLyCans3KN4xrGkS1u8yTJAKtUXshPLgcQ5r6aamxAXvbZH",
  "key10": "3JfTA24z8imGx4EjvqffYaiB5XZL1ontVSFCR2hWnWJBdtPW68LFaZ4sfUpBkG5xDRuMqe6AyotgxsHECk9jHnnK",
  "key11": "3K6aTJkUdWgExNbos3ZtsKtvFFRDQzqbFKqAFTG6FwcKsP9u74bnqTayWJxzxM6CuJGKYxCwhvzixSoWusF6mdPL",
  "key12": "4XfdWeAvF8d9nxTVeSBNEfJpogGnUbQWujuJLYxKNXrkVxxp4DdzEqkfBVyWW9XC1ckZ8mmVjio1sNgs8tkb7E4C",
  "key13": "466GXQyKZ2kAbTDmBwspCfaPMykKyDmXEYhdsT2vLEag1KgwMHTVvKc8v3Y2b76qDcvph7pvxC5MLjcqX6UaHcrp",
  "key14": "4LQjDHDQiqzGzfVMXR6BYVD76xiP9tRnDqg62B5PbTGnZQKp7bCFkuMQjcm5kbYEYZUeTaDWjt4tJA2snKC8pKMS",
  "key15": "4TPusjvFFdWc2haTsndzGQtfbntkjoYad9QQ3VdsQ3xgvNULSA3L6AMavtKm42BbTQ6RoTH36BhaEYe4xdVF8PcL",
  "key16": "k8CA8iBmzXwiP9wm7TEuUVvvgfSAPdSUFmqwvRfpV9iMaGi23hgXUAXwGmCk1rzxNB61kySiBHLHg7VTi8PkUYV",
  "key17": "2eVA4qs2fbSzZpNCbfVbxcYnrC4G9km4ePuZeeLTriS78kZ4JCnkLL9QJp6wrMhWuL3DrHKNq2cAddn2ezkKRci3",
  "key18": "5SRfs8rYCAYjMJXkYUi2jCK1RNDdzg5Cx6mS1ajqHSYRXkYZ8sDhrRtKGJw6s1K2yxNzTuCQXvBE9ADTPh6LWrXC",
  "key19": "4YYUhSG1T7fkewjhYeuWGJYCzntQz2YSDdN9SqU62BbnGWRLjzT2awRzE3NdN4gM3tDmziww1rBCe5sWHe673tvu",
  "key20": "3QTNJRLBAPwwVxaqWxKCwgwBJrtz3w4r4cgr151cfnxLFiTNoqjv1iV42FtgLvPUQMEqkx6odGttFoNZWAcFmego",
  "key21": "jsHKYGU7rZURQp9gtuQjaCkyVerzoTCAL9Dz98EHFZ5bptRBy1jtd3V17xx5TfPUTwJ5CgtEgQupaXQEc1nr6tF",
  "key22": "2EpGzDsxBrDUF1bNTTS97UYmLzharby8hMXmzxLssTxjhn7M6nvhoovdgLZyKyTpUcPzZoAj4ZX8PPkGz5CxQ8ua",
  "key23": "2GcJnfAbqPxqBFfo7RB2YsoM9EiwsjJc85YJZEAdvkynvqRHmXFc85V9HexkkH9Qm9jGUHdqSLiYkJ87nH6W4puD",
  "key24": "5R7APDvg2yBiTwaf4io2kCpxnxmnHuY1cQGLTCzHTWzZnSBZdiCke7yPCyqykUionPbkiiHDTHx9HDBHBRtf55Wr",
  "key25": "TXeZ6XfZLmXrwvgPhnH1PvJCgGJB8J51Uz32VStjY8xF3725oAndCkfMqVhfG49Axcjv6CgyfUPzbKdWdbdStBJ",
  "key26": "3YcS4hKBdWH7NE7x7jWbqtPYmSSvH7btqQrDRtxq7Ee1bKAFzxHQD2mK2mZFRMxm9obA5JDsD8roaun71cDZatjX",
  "key27": "f7tPnpJqFGTJqTC2nBLUzoQX7af9prxGQLh1YfWFtpkifLJDfeBrkKYvJpfAmczQ73TS1zfCN7LMCArwcD7KxXN",
  "key28": "gdFFbEavJXkhkq78cfKPEPqhKJ6V8URbZbsuMVwkEodCZPqu3jTr19v72duDVzkfU5UyYprn84WzY1N7m87w3uZ",
  "key29": "5Nqetqak5jkBEWBhjMSDWUbQbvCTjMWA4xHD9gkyFHFHZArYjbZ14Grwvbssvy9jVtJz4sNBcMQ3XfVo62JupwP5"
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
