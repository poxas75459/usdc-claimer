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
    "3GTGxmCoTVbizSCKZATjEAcUmwCPq666LNDKhLeQKwH2yu7V4XDTbesmrPLz8dFqfa7Dv4S8uGXA3h3gCVasaF1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVmsS4H5NhmkafkHhoBw4fdMdDz4RqEe7TnKJM5S5n8vjocCEPoMTbX3e7tFHDYhtGMuhc4uMCJTGp9QqEbzERj",
  "key1": "3aAy1kHQATPCE2Xeuz26e7qmmtPyZAuTc2tC6Ju8HCaN8tFfu2pid2nXKf9Z7xQjkPrSB52CN8jXY94TcJprovEY",
  "key2": "26necKKdnmUuhTL835CPTeEZq4MufRZ5juuFJnfpK12zsotsj1CX5T9in7bgJNs9WZpYoGmu7r4Fq4yeey37WuSz",
  "key3": "5wymcMYxGb6KDPQB6z3u159edcJgiZBfaKd1M8AKMb8v2W8tZqMqEYaYRdTeDH3GvznFy5QHJmHcRBLnziZ86itG",
  "key4": "3mfGZo3oqdSvE8KNX4gAZVnNBydwbzfwT9N1HTPvpyrDvo43Pj8tAzzBidD315mChW1xF5aCb6n4CNmJjjnXYaYH",
  "key5": "4p9zhQYACwMXRVgn11dLXdpw7jJfXqsiewHxg3CKySKUhYh4pqP76AMALCuc6Bz3nWwsnaGhZ7HZquz6pPJStceZ",
  "key6": "36jJYL9HApVQx33wVpt8b2p8cusAHAafjx2ijpEzis78SPjmfz8Za8aZcwQ73MpQnyojYxrAyRFbRvNf5W9AetRu",
  "key7": "4vCJwBqqX928XCf4DX8rbP27JEvY3PfetPKkiM1yoAo56ByGCyeQPPJjHRAcQAvVNA6AruhbvETa18ZTu4anwysm",
  "key8": "345pYxTNMpDRxWVUXfaxEN2D4gjjEjhNG3zEKigL9z1ixDahdxdeKdXjP4j3gBvEeMoZFrDJNpZU8h2dnGnh7Ena",
  "key9": "21g9sSbqLR2dhbfgyT4svNQmvYEzQoMNs8SJvtjEhnSr3qCudfrVJUjvcH257stz5g5peLQ1G2GvzSrNuGd439d8",
  "key10": "4oVWtxPtzJ1furMpjJ8mpuQ794k1G9qs4GKpbVSq5NMfYPgGDeRRYYmejjkHgjf7nknAA4aXu5MqCWzUceasPpit",
  "key11": "5dF73CxkkYJnqhtVgdRRjCzY5radLo4fU8swYhKAcimoTXFRDcrFGoxSYL4wJhpjnBWBV9eiv5hUVMiJJ5xxUgq1",
  "key12": "nE1N3AP3o47CnQtq14zv4etJvAHwnwPVpqXnbDEFm3VWEiuNd1da6SPU5eSJVcrn1majxwGT5Xmxa6gG1r7WfkJ",
  "key13": "8Z2H5EsosQojg6xHomwA6LYC8tPAYkSMMYQnZhtaGprDBNBUotuzkaGzt3VjzZGjdPDcMrYBkv9AaRj8HJiHkAn",
  "key14": "2e5omBGyHKt2Y7yA6Azr8ypncML4Go2oTaqJaWsP8DpLxPLhxBaVPoa3Bx5AAJdEwQfJWRo1hJcbi6GmdaLFdnc7",
  "key15": "4y416ppeyi8Dx467Y92xCxCmfZpuJRpKk6HvPtSknp4Z8fMQNwgSDE3ZegJjsQNfyarwBV1vdSkcoiqFcrb93Vc8",
  "key16": "F5JNAom5qUwqN4kGpxWd4t6DH5VXHbk5ajtzRc6ThHXrHU2QGw3wUAjvNQAFe15TCWrH1FXNSJcVomibAaGFGjx",
  "key17": "5SL6xTBATphDPUWravK9ykNkWEWj43pD6WxXGyHQ7Zo1kwQybBuDRKdes2Web4cCH4xc4kuMcgsL5oxoHpgK5eMP",
  "key18": "28XjxvhKuxS9WwszBGJtK6EX4nvR2oX12ehKnGk5BvPwGWKn7hUngEWAHbc3Rtc2GTCBpbvcTpAJFpHP5c6J26Ps",
  "key19": "4LxUeHz3kJrLCHL7qC4Y4uf8ZoypR8wacta7eYHcEZhhURNJsFSGLpy8LMu18yuBMpTup9Eh1oCJ1sXwPUVGVx5p",
  "key20": "2wx8eKnnsGfuRG8WiWdASNN9zTGDPHkUgxCHkrW7KbpUZBBNPckPtLpe1jCBVEDwzKpYS7UPyooD9pXeHwJVxwHh",
  "key21": "4QLy2gUp1VsHns57EubveVS9iL4fcggi197Wm2KadM9ZVxMnZxsfPpymqkLufcZEPy4cPQy1koe3azumgAXYb1xr",
  "key22": "5LnoehLbhDU3GwV6D9BbGVc9qCFoJZkEfV4gDTHax9Qm8cPbt7NYu1gbhUxFsReFRCfe9RFw35Q4hRGdvprXtHnS",
  "key23": "58ZNS2VyWU33SPCA4wvRVwdzFJnehcr63uybNWFXHZ9QXysuNtHTdeZqgaD7Czh9uTNyNbSqy71gGtnSnLVENKRg",
  "key24": "4349JNfsakECXcKvMCd6Go4sTE7GcHf9hdf2fgSJ5tPJ3tGSGC2tiniEwErSa7AMTBG3MPTFrGkqCp69dDDkMf8N",
  "key25": "3veb1viJsaFjmkSzAhJq8z6abuNYovZhUVSCxGDin2aWKjMizVAkJ5q7CFobmwkbGpv37QNn3nKZomWGPSaS7YVz",
  "key26": "2Byb7vzTBe3s97Ftv3bnLrdEuyYpP4F2YxxDt6sM25eX6T1CYrkWMhZWMFdwXbDiLKsLzpK3cwY8pmSfn58LjgCU",
  "key27": "4SP8dDpzWSidtb9UDhUXs7kdNqcoNHyq9Uxzt2Au7kurXmvSL5rsRtt7y7ENPFBnnh9E4iRQUkUBjp1eS5xw9j4u",
  "key28": "DtLaDNa1QPvtRuXE2xjrcjZxwitUTKVH4sjmfBPTCmogpC8cUFPD4yo5j4uvxcXHzyW1yF33TwrdVmF3kGsy3Qy",
  "key29": "5Qac4t3gNZ2AG6cTCRoCQekBaxg5YCUPv3xCyYigtsssVAoyBz5atSCsKfbHAWZmL6pZWLCUZXwNQFu1UjfZ1ZqL"
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
