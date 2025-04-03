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
    "1qX6C8he1MQeTCfkT1bpgfdWKhvGfVej53mUggA4z6Qqt6MxcKADxkkdFn3oUVS4Bd2rqMJP9WyyZaLqaVC1fJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CqeVfRpTtiBJu4zUS7pQF7BbsMD3mNRPGgiR2euiewwrRoamRRV8vc9Gw4cTBPCSuSZcAEcqtinPj5jdYUCi1ZE",
  "key1": "3p3wmQm8rrPkAfAGMTvoGHyk5ajY3ZM5Dvt4mpcEnKyVTwEnPBKfgD6MDwtoYDbtXFhNNnVvukYVYoZVJ5hHQDWZ",
  "key2": "4gsxx8chscuDverfhBrBecVZCeP37QE7VJg4YqmPo5SizbitoF89Y16asxFagvHmMjBLSS2tZNbvXaaNEDquduDt",
  "key3": "42YKfRqRPmjuKTtBkkfih4NLgiia68R4MVHAsa1zpqozDa8PXZF8gbBtU1hfVdgcrwq41U7cswcczvNzgRVM4ikh",
  "key4": "3FQ6YcM1U6dDXLGZJjTuAnpzzxJ18WBrz8YNNcUtNJUpsiuMDmmTw3r1eczfwiprSW2dZKtneWdW186m3fyLqi6v",
  "key5": "5bxYYTzPPLspGny2ei2r2eVJgExtneBrzV8RsHmMqHvPaPJFZAUPK2vhpMH8Mpdf6VasmQQjQu7uhCBocaiCAqgH",
  "key6": "67Y6N65PjxP4T9JoQnZNV27tZerj92UQP8AUtTSoyhhAT1Hj5Wjc1YEnE47Lvs5WPy3XE3LyX3EV2mhXmoSejSdH",
  "key7": "5K7DT9n5G6NXRGF4dpMMxHC6eK4VX5ArgaPqmaNDLeMiQG1EK4ys95ML8YaPJLj2J5g8F9uCtQs2yE5BSQMc7veu",
  "key8": "2hQJSQXFejkPjUmWTzqogCnrUWhqM48stHsGj5ioRcv8BarKRxbceEKXZNqTUUJY26KVjvJYmqPnDfYsCoa8fniF",
  "key9": "5GPKGR6ecZdDgFDUSAUrzogvUaXgdMFaLe8GfZnkymUW5C3wDLhJX4YtZRN9MsnUyHAoM7xoawQrU1GegyN8Paa5",
  "key10": "5g6jbG46zWDw4poNuGzsGHB4gBHmLp6TMKFYh8QCfjnvWkCMk9PbchkW5W5uRdygVPWVfJfyzz2kHVofv5ojAhWw",
  "key11": "2cJxYXgxboSaBrBoFrRdPfQ8dothDSAZ2R3ypxpiLSHq8pxYCB5bo459SMUMTKBk7YFkK7YsVXTC6UbwmU3FL2N9",
  "key12": "3o6VwJrqmntQTmLhArh7MhbkieijYWxi9koJnqC55ZcCX1hZJRDUSEHGRx4Y6vaLjuERo9bzhQPYVdWEkYVn959g",
  "key13": "43ho2whN5aTWPgHsZcvm6dGzPfgfSvkA1GqpJsLTg1sAWk6zSwJSRUpnkvUEdxQ7vq3VRy5Tgv88HHzyDW47a9ZG",
  "key14": "2pk9WnZmucqc2WhxHkqVE4VTU6tLyQRGaWJAaZyyH2vd58oqqPEspPsPu2zDC8AYvrJReACnBoXSuKs56MktE8Wc",
  "key15": "2hPcTAZ6MQHLA18R1UCxL3Wf4R4BcAa471TyddLcjLx55uNiEf1NmqjvsPDdsD9hoUihamRDJWtvLP1Upmq7NE8p",
  "key16": "5yXLu1XMyfruLnpzQHTUFvD7pQY17wcpp58RcESTu8gz1kcama4yHv9DjR6ZYqhgAnZnNgp669yFiUADHgdBXaFx",
  "key17": "v5xx5pJj48L1SQhcbWXmy8HNTKdLuMrcuTsTtDtJ7tNhKGaaWrkfj713yg6qT1go8Ky4NY6idyNBwjkLH1o1piT",
  "key18": "5FmhizEJvm2X1jT5pxE24B3eLNwqkSKYUzpTZwKZJ9cBFBLDc9CZJPZJGwWXJWKoyMKKUQmkP9BgYwZk2wjnfiQ5",
  "key19": "b6zd5T9hVTQ9v3RycK5mHapY5XnmGJrbXdvUwtaBQaU7sZgyvc9A5bQzRQTbv9BvxG21nLV3DXLfbcTJBJ6cDNn",
  "key20": "27RNQTNbA1WGkby71X1e8rAi3DmyJUesDWCzbnDnN2SRT2YHg8VpYdZZyN5pmTMfFsqCW3g3H2icPdeEQqrH9ZBh",
  "key21": "4xwZesj9EycixRB34sqnoihb4ArWBADRdnP2mJgmUA2L19Je5C4S6xKM862N8nGz5MkNUtjFCqpX7du3DAAFpnZi",
  "key22": "3PD3N8yr2KdvaBja97Karv6RRfTJ9fXnAosnPacLzdvabh46hqwDAPN66twyXEooXNXkS7MnxskBwUABwoXVrC1y",
  "key23": "4Hq5LR9Fzu5hV7zUrtVNN3gLGLgPCpVHX7a9Z7F2rH3NfaUf72WpPWEJSkFroXqZtTguZvAuzRKnLGrSyVv8AAk7",
  "key24": "5vm9AkLEtokEch5mAu9XAAJGEG6v27bQAiu1ruySMwVj2VVv4Tfmx4dS3Fw9tftBMU7xaCQeDCkYKqyReVRKaA1i",
  "key25": "UzHUXJmuCxCcn9Ahi2BCfSkSXP46GsydD8tSbvNYzNusWyTbs2TSzBYLLW7sZYbWmP46LS8Es4Qs1dxp5Htt96G",
  "key26": "2PgP8aaT5WZgTnsoTjgjzKvu7CdJCM7RcZLkCVG8Z3VEda6CTn6yfqsHV47EqgqW4264cKaDcPLJPpecWZyGiqfZ"
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
