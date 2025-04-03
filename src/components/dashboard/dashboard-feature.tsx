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
    "3pnv1oyjVXfLbst2L3iVAbFJHiCFhyyFqhFGzD58jpBrAcMeLo4McrCmjH8DuwVB5MsxTQ3PBYsBqDPKLD11LV7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hF2gA7gL1gBChJH8s5pUMtfForSJ145uBNhz5w2jtDcBdHeGEG4Fj4Qu3TETkH3dy4rkAD5kzqHQBtWPx9aEuRM",
  "key1": "2KF24MHVAyiyg4bEPusHJuPpzJdfsuWTFDyFuvrnDMJJ3SBoXqEb6HzQyjg499tUgdQGSsijUCFnefDQq8Xtc5VV",
  "key2": "3TrDnELn41aSmxaisZiVsF2GoETGyrWrESpuGWn9ZmWswKRudVVXJpvXr2Hfy4wdeGP7qisX1NQMjGuQAiUbkUNT",
  "key3": "27hzWhv6uQeAwZFYKuzzmdCYrzQe9FBkJeKKXfTsjQhDMKgNtdoyPv2x6xha9EHCZx5rpEeNgSecLqSK2vJkHsYo",
  "key4": "5WMtKZhyc6F89UVroiczikbVSHSmad6cM1C3K7ueHjGVCNNVh3c2nCEojCQVBfLXCh6ZPpPEDikQTrzsQL9Gffzp",
  "key5": "GZUARdCnv49sZ2FtLuMw2G8Z4ZPLmq7Cf6co4h4CMoix5fSVXna53z2W2HrRz4uh41cct6Pg3t2GVzhnzTz6Lky",
  "key6": "3ZyRRqqvvKbFyFZY3gDzYAs57HzbqLFACESBBohzg95LuVdwLs2DRMvoNNP581jGxA2cdd9PToRNCCR7qUPQM7wH",
  "key7": "5EBko1SkazDEVnARjCPTYke621XNveLHLpDb8Lv91qCnRk2Cou7wi2RJnxxRzgg7UKuCEaoWkNkCg5px5W1GWu4b",
  "key8": "thmadNT59rSWqqLthpA7Cp2ghnE8J3BkCWP9bUCuvPnKCpVnfcp62RiFXtpf6f5SxrhTX5NscSYKQevaF2ZZr4P",
  "key9": "53MNLXwUHMqRCn4ZsCNQwYhhKtXF1ihQfytnRx4JanzP4s7NFmyZyQsRet1c89dAZwwxSTcqcHuTa8FD53BfD4kd",
  "key10": "4WCkaVSwCCuEeMk5da4ip9Vz8YWH3r7cWD2XZLejzZUvqAyPndDSpgdDajfK89KXrPQSEqwF4himrnKYLczrj1LB",
  "key11": "4AyN9yvXEb3HkkRTSQUkKdLwqssRzZVTvjyfsqyj5iZZkTsBb9E4MvM3dyF51kqExQhGPtFgNKSF6VwdqiMuJJzC",
  "key12": "5qPqrRAAzN8t4DPA3J1mph33uw9b96SXZdyCTL2SokKhMGn8PhQnw1RdBcU1HvF8rJwLkqCpFrFkFVZckQaW6qi6",
  "key13": "41VWzJywyUMnJ82af2m5Lc6WzgcdYFvyuy69oxxcPqVdjCsnY6uF5HoNwVjwshZW6egcL4hy86VgTJdhv3ir6uNX",
  "key14": "2Pg57qcrZUcCKBomyFn75p8Y9Qdcb5eYhcAk4trK6ebpxuPfrzunzeDWvFWEDcHniskw3esDHEchNBGRY7QqWbNM",
  "key15": "3V4de4RCKwdk4T1qHe7nrsNuQzULpUxKVj2c16oJU2Fgv87YXcAxiFe2dgQw9Lk64kDTLKExyeKpSXGRainfgzMY",
  "key16": "eGuJTPTpaaUJhfLGHNt8S7uTTPyxSUaoWAFuABW4HnDMUPwXxHRN7ZxT5Mkr3LY1PUeP4W5YvHrZtQEQHAj7vzA",
  "key17": "5m3r87yW2VZnWkDc7FKYr9U6nKQ2F3g3zxDQuNR22Kn6RPTue1BZhew75GrTbSVgHdvdLSkBKQdnJZjg4b6DTEP2",
  "key18": "3wsXNArPJSpGHZzZsbBh6qQy1q6B4mXZdPjWKEPrhv1j8tzHATpQPnC9kYJwDNUUBtyBn8JE3ud7NAWKsBHmCadn",
  "key19": "2d1Mwm6CDLKerJfpS1Z13XjPuAJ4Naofwkrmhyo5sqT19GbJbpd2bLXAnE9D226vrFFvoZ18s2Kn9EUjH7XZQUTx",
  "key20": "2PmGMv2pNNbhSPR1QjNi4p9c54JxQ8DajcQVnP3TaKfNgqL7Bb3TV9pxXLRGessEcorGiuFsggvBr4AkxH6xSu8r",
  "key21": "49HHeRYruyB99FysYGj52H8DDKEzsC6KxzLQFseGKgKQ6QEbFWQsHKyAgkERq2pdGbLJfSmjvKWiFyYwnsygTrQw",
  "key22": "FDLLQyyWM5WVChgWXL8xR4DEukV5FG2rsDD6VivvTsJGptuHxEqki6Eecvu2qK6EkF9xrMgiySduJCZZU1nyJbU",
  "key23": "5itHHJgMS1Wfmk8twGPLX5xQQWZUoqJ4E5wHHqv4KpQQwCCCghktNPoQrRBzebXsXGYeohnJWaDSotn7ND6ugkeZ",
  "key24": "4EgdBYLs8HFFUtRJKSkTj8FqkbkWFQspMC33vY1kkFopbCJNgkkzooyvneyzCMSNpWPxTYdK8pkCkV3US4pb72eJ",
  "key25": "2o9udpSmyXziokEX8HL7w71RKetguAEkyugvuxRDwapNzhaZRi5e4hZgEzqb9Trs7prkGPnWLbJJP2Ps9cbDKFNs",
  "key26": "3syBDoK83wv7zcjLDrEkTcKWSKP361rsqPfJTNrzuGx7o8LDhG8rRdyA5KpwvE8fm5TxK3JVGRhccPhyAcZ1L2YL",
  "key27": "3yFWNQoZRzRmrJ4PKhS75n4qjvdKVZ5XGcsjDZnW4RmDWxik7vfKt1AWnSDyvwco2AVtQvp6cL6ymuNxhZF7w9gx",
  "key28": "3wbQeJmE934gqrtP5GSFPWDxCaqejgcXkoM1ygYAjzGYFjr3UZR8x5ArQnfMxSBRoySejQ3VhkDjJp5e1m6wsct1",
  "key29": "521j7TLiY6bntcyuKAVrb1gPTWVcmkmrpLuhZm6ubNfVH2NbBxkkRoRLEeCxkbjKKwcWjiPVRfHF8bfVdPGEMUNc",
  "key30": "4MqGcL8Pv2z9eHcTatQwYnfiSAvtZ55oGFwvKWh7CLAKjih2xAyYG36yqCfMrUwvQP3k72RJfRrkvjAMapzumx69",
  "key31": "44JmSzHjyA4jRX9CRHhxRJ6hXqSTaQD2QpLAz28SaZf3RJtbMm7xeXDAoyBTfmigxqZwJmAeP1UPD5suz4d1Wndx",
  "key32": "2jqDtpMPyBX8wkoDUNBygHrmpYNQF4Gij1ZVTwT7WGG8iZgjaKKrTeFbuzLR2Vr4HuW17gqdTT3Sb6Dv9pAQLWWs",
  "key33": "4RvoG9DFRD6s4i6NM5WfzHMS9KW23nBqhWeGY8b9a7u3CJjfQmfSviNCn6k8BCSDjHw8Hpyq4PwaRaJmBZ2vvNCe"
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
