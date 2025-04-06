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
    "rELPSDE9ngiW18mxvnDA87HwgSLTMbv2aGbcV2Xrus3eTvu4w4oS4ZU8Xzp6z19KBNaeRSdLNfmUuznFip6XC5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxcjyc4Z936Mg1GaoR9f5H5p6VL11LFJ7YUbzbzXAfaCktaED7VPPvCFPerrzasqxQomWXdr4GfDS7JiWNaXk9F",
  "key1": "3VG4DyzLZjgJyj3emy3eLoT7A1nQ28Dpc2FR7ZYJQq3Rjcegv4k7FWPnzuuH6e8htJKLrwZU1BNLN2uudCzoi5wg",
  "key2": "4X6mLws9HbqaN5N8MaJ8xZA2ZePBACfEkuUrvsfkU3THUtjjxH6xCLPvAreh7F2SBAFUu3qWJzCYvdsfAUnVJfEX",
  "key3": "5aMG81XeUUWvvttRq9TvgvVTso1X5MKwTKkW3p9CnJDDhw8fcyue4QWp4sKZXZCyybARrUfViMkj11a6pB1JTwr4",
  "key4": "52xy1Crmw2Vsxu29DmUXD6QcXJw3UouWysxcSo7WiXoLErrvMFV5b18e9wHpEWUX4ZVU6JJoQyZZhhWP1J2z9xkP",
  "key5": "FQnbiqPLnYoENWpNhyMreK3XU1ey1YTJKsNdt6jV15v8kD4X5kbtSTa327EvX61SdMbWeFXixCzFMNCNaxojcva",
  "key6": "2bK8mYNkssMnxEvCN1WzDhLAMHjf4F8fJAmEVaq3s2ybdAwNrSs9Y42PuTzJ4u2WrTDc8dAnDtHuAxi4xuLBanSd",
  "key7": "3MRN8HgCSHq7rzGRo1wyePtn4UofKc8KVhqsd1za4PvXoqP7cnKYBCtQ7qG5K3oh9Uc4LUCtW1duP7yDQPTKqckh",
  "key8": "5Na8GtxepvWRXZuW1DdLDcAKDe5KgrBQKkpNbCr6i6GALfZLLCU5QbrnQ76UjDaNcRD1FSWLMBDHyQWHqpHxZxmH",
  "key9": "5ABy8bax8HNgZZonmBA23TzaB14ekxtTZynLCSCP1NPQkFrCUTQk1j9KLEouWvaAR9oiyrmTXKG9fSr4LVacAhpa",
  "key10": "5MUjZS3mh5RsnxuatH6f8cDXpooqhCbiqEKDQkEzKtSEFJB2b6yCkGYvueRLx2nAUPUM5qihu4P2ZYt3gryZS6Tv",
  "key11": "56mBW87EP3BWvBDbBRnwFdvP6k9kwAvYjkaf8nmwSpk3PKtRwp4DWZKBKHKg3HQJkkaTNCyzhNFtxxTeuYJ6di3o",
  "key12": "3uszuep5YE23YBPYvyH8MHwYTx2fKZNLX7Hs9ZsHfYeYhej1oKaxnpRiefQzgvNsScvBi6nsWSfhNiRxvKVLfuuf",
  "key13": "2JLaM6S7jtgFz79nBjU2KbPpsHK3DfGJHJBpEqvmsvfcH3qwWnXcTJpQ4pUR46q5JLWC38C8u6uQCBk8uqeDv6TK",
  "key14": "2SsEaezUhnp5zZZUdgfQxMs1ySqvXrHtznqaEEt8TJLtQTox1GJYgxFrFqyZcrwceNwKWCRF2yg8p2TbrusqWE5X",
  "key15": "4mDS7HKR1b9ZuQecEx3PYsx63Zu7whPJNAFRzS3XxrvQFEaj9Ne23pwf4KFWybWNNJNg5DvjtHZdZGzC3Fpcwado",
  "key16": "3hBNTEmJg5FFMfEexMH7YjR5eLyXYKx7wdq1pAtyDWskaENVPX7AExXcw2dSUe6LcRcubcp3gbLc5ZA2hVEkMrBN",
  "key17": "2FWh53aURtcSq3P7ofs1Du38Wfgrpncy7Uwpgh3EK45pbdbRagfNug9vLfJdgtoneUuC2pM2FZ7C9nnimFkrpX4",
  "key18": "4m7HxskfEmFjUiU69CsA4ct2f4sfHqzVib2udfwcNfR16JmHmMqQ9m4n8swPTREXxbiijwHV5vjGVdB8u4oyQRPy",
  "key19": "eahiMWWmPxR2J4maXxiTZjqqS2UfAWgiBHTGAY2xLuensJmTiAAeENWyBBLwKC2cHmXRcNLyb2S9BuH4oXpPb4A",
  "key20": "4FYLpKHYqwpQ8rWNdMZXBuGUHRmtfJf753s9Fbszt1Ezn2AT4Kow7BcW8rFRM8aqN8xgq9BCwh28HL3nXsU2yDCj",
  "key21": "4hg7qWLaVcdh3bidPhV6fFsu8MVZ4NkwCUDvwEj2LM1qT9kvpv2uvgV88hsioP8RDpetXmGXhRHyNv3F49DrPz7h",
  "key22": "YfYpxqx8m4Kunx9h5Cohf2EMC7jCbeT3YPwQPPK9gCo62CwMtb5Rf72A2iX9pTUj8tpu9sP637BtNQvtUsFRpUp",
  "key23": "62u9y11n3EwLSsvZ3RmNHC74TVUMbvc8Nkpcd2C7MMSEFfSEL7hsmJJjrhreU2S3KS5tx9q1fqmGKw81Vbxtq1Ye",
  "key24": "5od3pfadMpoJFz98QAMn8hYZ3eazKLcZCJ58WG61PdaM3n2mQkTLUtVkQqAzAAefi4T6Y3cfaSPsBQHYya2r7iiT",
  "key25": "31dvDpqtD7AUkH615ubN6R3MKptRtTYS1BhiXh1D9FPSJSyZDea9TaAFmBmeWbD4uiGty4a1qWCjdPgcwkP8PFSH",
  "key26": "tKwoNZJQpmvHCaAgF9SGtucbzDhR9RpWHHBwu2QHfRrJjvTKRTwHy63VicC2qCouUgFohs8PTwGcKkNWBPrXpF6",
  "key27": "3UaFtjbf5dVRNAKoTZfN64JckP2MbhmhfrDcuSrXKpfdPa82WUuqWFMyCuvEoRfLg7cvmQhnCsMiT4qCzFMiSGVz",
  "key28": "5qLMq6PSF6WYojC1iRVueCA2gDgA2THDwMsaLXsaVqWMLrUCePknJb2pEFaU93pa4oNBprNqrSAJpKkqNT7cjkCY",
  "key29": "4ns8dV85gJqb69Wro1wf8zN7Ao9VKdiCDv9FFMKqrYjuEqiXxNeGGb2oz3CKTmYNYq7q5XjQT3KGxwx8NK2fBBYu",
  "key30": "45RLusBEu5kiE8mefEbKoLkSu1otUJ8dQ3ELvvrvd34ueZaCZnAJ2WZnS4DNbwvUHaPNXxrwQEm4yfRTyY13xaBg",
  "key31": "28twagf77aELohD44hiYrQrg3PxExQ8ze7ZoE1E1VkDymoTtux8j8BQErLWAnJ32fFFyikCfmEbSA5gQiz9N88nc",
  "key32": "2qfvuBEdGAFSKyeayZjEk9aVu8XW2Q8KAj6WzfkDYxTHYMdcYfERPk3MWBkZ1LsdWUoTypHQ4Uz4fDt6fKizQ3gY",
  "key33": "3MrDYJLjX16hKEB3oS81uyk23VFRhHKDdjC16HXbqwJgfYpkCV7JjMQVCUZ6iR7MGChFzzzG47SZJDP2ZmuiedCV",
  "key34": "2NkX5JHKktg9CGWSbG1KQ2cMhMPPMhaBVXa7eFLr1UmG4kKFnuxLtTytYL9cbh9by9WqSmVAnMAi4zG8WCwe1T5p",
  "key35": "qZCDScPo63bicjM2NaoLpJPxLqzzyVrkgGjxnos2GujKq8aZqojxrDB2ohZEVRSZvcvMovSXtLspUfguTB5VXee",
  "key36": "jnh4wGbqwfPhKxgiUqt2C6MJDA6tezwdyzfLbsG4Z6urjVNxNH7oSUHFNsYFNg4u1ZaK9T6p4oKQbUW9jUzyJ3k",
  "key37": "2RphwpMJKyx1yGC1gdmz8NrpCXpdPKdHaPkEZSTgUiVn6vXrDeRRzmenNRDh2Q6wb5ZfQ4qvTiEvo8sTintdHe3k",
  "key38": "2EGKV62QeMue2d6DqbJhCGFJSdLdRwdFaS1ijLmVCoLVmGshi9vSeZ96mde5vW9Nk99ufUTF6Ze3vtmRyXaAJ95T",
  "key39": "2GNP2eHAoiCnvAAcwXqNrnE4s4Y35rttt9pHE9KHpDAmvkXyUWvSu2TMebEdQR5CFGj5oZFzgJ8zZXJwS3wUNR9d"
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
