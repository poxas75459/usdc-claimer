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
    "JoaDfba4oGccnSViipDkvLD1k4xY6Qk8Z83Po5RYXwAueghkcWzdEK2LaXCP3QNz2QZjMGXTJ9AZKK3UdPJ9anr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhp6t2Pqd3HxP6UGXRvEohDmoeXYeGdmsnGv7svk779wHnsqSH17RMX6BeD2feHzgziVr8VR8ifbA9LDgkV7Tti",
  "key1": "5v5ysCBCdmxWuwEah2fAMJNhM3LbZEfSfPcgfLvDp7Grm3mAw5PVUzq7QWdnu4DNtUGjJm4xN4XCqozpyFuYjDyA",
  "key2": "5fRQauBajkJwP34ZWPnxF3hJiPL1hLvrzNBVEkFu6yRyj9qEANV6W7U11hdWv9yRX45fh2sECB21mfAAJgmfaB5m",
  "key3": "3oXVpw94nyvTHUVcEcMeLECniG8YkvFV4PPAQgx1pa5fmYayNYwoD8mtgTYVDT5T7RByvrENhaQA7dgMsgAddvo2",
  "key4": "4HJP9QfsKjutD1kd1rxvieqG8RGiqJZMxUkfFTZb6oX2NCxWfoYEHzBgS92fXcjvurfBSrsKWRU1gyaMurywRs9y",
  "key5": "56YTG279Ts7xeN2vvodyTQSBs6gXedayXSAvAJaE5g6tozCpR82LuriaD6y7yRbHUNm1okfwjSZAFWKqbMw1VyZE",
  "key6": "5mUB4izcL3vc6VdrMGGxZ99fQUSSktR9tU1QxrsEzUUq3p4BLxBBCqvVxtumVb8LkCB9eqvC6ZZNYBgipandajDG",
  "key7": "kq6S3XqBbJvabipx1qMc4VDBhXKGoVhXrbSE9LeuhTq2DhxMmsRgmQoiceqHbgzUP29Z7wzevRh2NhQfsbqRHhw",
  "key8": "3hhQAYdM7JooBRz4q6V7kWCVohY9Md3eSTLxQGWNmYKjSxNPpSQFTUnkEv3Qfijots6YPNZvVnuxqaoXDURgeFgr",
  "key9": "5u71GHPWE1sS7MExVBnKGmwddTuLSVs4gs84LNWKDuHzQ57jSRViowt6dai6VNcZZR7NRwPS9D1dgddwBRhK4pFw",
  "key10": "3Mw2rYaTgSDdAFdEtQ2iBF3oYo1uoUuYydLE42es8wWRXZMrnUJAdCx8LrgFFRi5QVZwm1tuywSoyrq3VQci4uCi",
  "key11": "hzuPrFuYEVNNYXeKi8XkLdv4G38vHh56nCzwMzPu43SRoJS7X9XGuFUMLsiqzTJHRU8K4p1aN3wVgizYCJbkCbV",
  "key12": "shn8ShTFdKo4dPLCRNw9WUVs28ZCptvQyqTStpFXXTWmCSwRmpDSSLowhqxsbnR6v954nahuoyAEvhBeein43oH",
  "key13": "36Y2KtPMcbr7YcpjwnyrnTLs11XkH6wqufLEEiByMJzLUPXj15aTf6LdpXkhDAqV9TnPeLMrzWYLbjboZDkaGkjM",
  "key14": "2FegiHwV1kKw6rt6TPpbn5L6LuQSgPwV26K1fF2JQ6mVpNx4vcbsmmcNg9rtjhyaYzm9ygGYrfsVRjpk2yTMythB",
  "key15": "3GBYVfCJ8dE9WoBLTPiDKcMBCPVKsxZxVsL5Hzc5wJreYQKQvBVmHUMnYCRsEarSCnwwYEGEJqvsTRpdpwR5D8MB",
  "key16": "5j6FpNYte8cgchtPU25vN3h2MJ5mrgw1m9ZSQctpWbj34kdZNRSoguVbHD1XNH2nfiYhcHAxQgQaTanX8stQs1aT",
  "key17": "5jt14qAE9SX6487PAfqvyD7onk3hrvoJ9zG5fRcQSbDzP7SgrunreVaDL7c5fsr49oA33DXMuTWm9WUEuXn2DrNR",
  "key18": "n5iXj8yBJQaLbNNc1CrxPqyKf95pofA5oYMU3wCNw8sKAuukL18Ju4Rdvxg45Q9STTCnRdhZ6LtVpgM7kyk7bkV",
  "key19": "3SEAxMnyxhhBsTwWNM195TH6SqoGHjADeRUhJefCMUV1CfEzNwGjNMENQQDtdJAoHt5tPvNvr3uTsXoSx6CeGD1G",
  "key20": "26rFwUaNWaVatAp75d6dzta6uVFsQzBrij71b3XHrNMrr97oZQMnKJ6sirFwmvwhRka8gBMvjVikhkk6kYhNMgQt",
  "key21": "4E9zeEGf5n5gXvQcskW1KTNof1XerbvQNhKL3kiaDfTSPAj6j984voUJE5hmwdsHArVxzki662kRocVrYpMLv1pg",
  "key22": "uYLMRBT6DE88HMmkXfJD6e9HS593ivo849LmfiMVUqTzN7BuuDPGXfREZFegXfFwJr3Cbkk1RvjkybyMXeoWS8z",
  "key23": "5M3EuPaqv5jyNiVV6kK9XJKKvnqGxdFuZn64mv7KC9WMNHV19cmZ7PmeS5LzQEpQoggKUm5JZeZtgCUyEu6NqZYF",
  "key24": "3atP95Zkk2CqfZsWiQPuoXG9DwrrAjASpt1VvEajUNHVvEEPsUUCPzELetXW6VCJuVbcmd4WPBVadgEgAwkL3u4x",
  "key25": "5cDMcR1vPPoCFEh4AEBAquxqKJGj6wQNeHxeLtcks54biiTVE62tByRX6zs4JJFwPjn8ysko8itHtSSkBWh9ufpm",
  "key26": "2aRYEMw5P8Jjh1Bk57ZReAG2vUfbSh6rinqqTd39S11CWhm45uhtdLHafaf4BBHt5Va4C5BaBiQhcr71h1kMUd5g",
  "key27": "4P6xbpQs1EGhCbaeLeMYURHJw3e4YCKDdkSJj9mLx7Z5qFKwDqx26sRJtfjYPiM6YouEy5m5KA3Mp6MfEmLHYRsz",
  "key28": "5RqzJ1RK6biJjJhtg2J8b1uB7b5kuMzm9Gf74ay6BicEGDCUWajL6bydNMHGvUpWXZRmXn2XWXBxxGFPUz1ALaxJ",
  "key29": "4XkMYsJLpPJC1B1ViVcHnSDQ3CtAdQfx3zNVmP87zxWFSpPKbNSSRUFBgyzAcs6HXWNj9mvAzcUdrGXvuaL2ztRF",
  "key30": "5FJBB4fUhDUQ1ASirsyLYA3cE9wHEaH5P61wneP8sHm64gLMRasv9rZbvHvaRtGCAP3Sm1YmcSdhoZe1oNNpuysP"
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
