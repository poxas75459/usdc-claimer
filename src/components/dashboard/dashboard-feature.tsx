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
    "27VCAWLEaCGgb3nk89VwuxtJs7sbkukJ5QfeqoibsT6yRBKoWFLW3tfVy9wQxyXHSXEBeTHxm1C1YJdA7a6cTsDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z5NgLir98ARSZkw2fC7Uq8HVn34wSC7s7PRXHaTXtEv1nxVwxoAfw8QYns8jqv7wxPDCdsTN5kgw3GJEyRL8Bqq",
  "key1": "4eCWCyWAb7y2pucomuMsyqLHwCXvzZaRnvAVF8XuBjfg6EQ8PRm6rTvokzMe9Pt4eVaiibbjRRXG4WysvGszgyLT",
  "key2": "4mVyook4xMBQFXvT5GUR4Ctx8A5Uyt3y9PK5xWPzSrE5iqgYTPSCcsXpk7fbCBvWo2gW3op1qBkfzgUJdDSWKuR7",
  "key3": "2AVdNkwGcc9PTYMXZBQcKF2Cbihp5vz5CYUERTA4e7oMbxREd6r8iEDNsHztfoDQNTXaWHWcAwWa4w8GXRKnZnp1",
  "key4": "3HGJXacyg2CWG1swh8Qz24DHguavDppnbUszhwVYeRjxM4SxvaMCjnr6A9uAwef1gLRWQjjy5UZVA39aLBqfEoAr",
  "key5": "21KfvCyAd5bzQxNeUxBB3TeSTUm14Hd8S6jSAmps8XMMcp5CQuMG9GBYDoDpugNUHPGBYAn63heuF9c1Mjjo1HyD",
  "key6": "4LBY52FXAYv1KuMzFVJuDGQ9UXroRHjzAz3TJmbiVMVNDkujdeWhNyqHFqtfUzdjio5sZZfJsbkBhPyrusWqV4qG",
  "key7": "L8ENjefRPkeXPDEp4Lw9A6Dw9Z1MZqN2hthpqcbaHLHG5JhYE31ti8GeNmFtukgaL9zngR17Ycj13LLMMZgkhZn",
  "key8": "2CWumsNsVQb586Q79MpVpMk31eyqZ6dJwjs1YLQ3jD4o5HEy39c6pyvEVz6N25bbNNMHJkDYdiUG1egMRakxxwYq",
  "key9": "2uxQs7H7ct6iiJknVHmZ8rbhiC4AzmVS7iH9G4TweoXDWeFFNy9ehd5vXpBSE9ekSKYHoVq7vMQSuRWxb2jEM6BP",
  "key10": "3DsRfoQQL34CiZvWfhKkMANE5FzsC68mpsyABovocfmqyuZXBy9mqb9JxNyLDmgQnmLGfRpcumUrH5ZLjZ9AcTtD",
  "key11": "5FuaHjLRFSzQ6yi3SL8Mpuvz2PV11Ke2H156xUBw62wwKYx9FnQunrLRdaKe8pzwKanGCUWLc56JnNZrd3TihNML",
  "key12": "3sTp3GuTUj5MCRy147rq7pvh59PrLB1sqhxYzXWtXcsohKTb7hSkPTTRFae6czLrH3J4euSLRCQtXDPmNxQaFixn",
  "key13": "28R97K5keH1G4Pwp3GEFfGg64HRoo8ztKDMGBMo1drsSv7DcgT8nkokzg447W19QFgnYsaQs3LAUTF2zjVTqGf3K",
  "key14": "53wQ2EcqWfX2wLNkqJQi83DmMXqfNaDMaegh88mfgd9nfpo2n8VLrArwycoeKfiKwBtM9cNQXt6tr1o9fprVwhu7",
  "key15": "36ECjLBEXsMcUrHdCQrURMN5azpPCpW3PoKdWx9mjbnE2nf9JhUi4MKyerEnKBVKtEEKqG8rUunfopps8sAabPk6",
  "key16": "S4GgM3fnJuRdcMSLDeSXiYskibAtx3xTKWRHcPf6obaqycJA2fEvZdz5GVH1YTi1z9kMPo5RKtaVPBeEbXSBxpM",
  "key17": "2ah5htJSY6VQR1aiT5ajez6vyWrXrT81X2nEzsQzVrD9HSxFDTbbaFRKRSRTzMZoirdo3dDtsrpcwwfBHtYkh461",
  "key18": "42Dtk2ebxc6uWVtsu4M8YssHU5eaoujGNjgSMdkT1tGHSaob3QQf7ykPEvwYzobxURmv25AxKimmn7hHvZ6dymXG",
  "key19": "3Q4kn8HMLuHFKx8WPm1aDqxgWHejDF5tntSR7okNNdbeTDjn1C4uGqs14KL3t52Ce4S3gzQZYHG1GpgAjvzMT1Kk",
  "key20": "3afjerqNKdYtwRy54wa6pfBovbJUexMM46xr3enoHwFo5YXkVTfVT7GkEp2QeZkPvHeGFiDxuMuYov78naAXMh6X",
  "key21": "5s7nYFUZQgCNe1m3umNHVYwEFnnKN1KnPGhV75G8HRdGkaUA8HSzRj9PakHryGguLaaQcmAd5X6nmVMQDwx3CuEa",
  "key22": "3rDJ6SFEpn1uZsotFahAbiucN2SCjajSwfWae8CBs2RWjXaS668R1UUGCuzfsgPEbzSKqgHKVj4Mxe5QWnDYj3r",
  "key23": "26ixaUfte41U5wCLhrZkyTEE3KyNmhrq8QVtpmzt8chobngrSt36pf3ks6rXbyfGFa5pnQ2DSPZxzZGqBH3xtZyM",
  "key24": "2NZEdAuBXoWAUeLFuv3r6qnsRCPjWkrELARqdjZGcVJ47JBuXVJoPJZfYcoyL5TNGi5iKL4wS71muhCher7RZpR5",
  "key25": "4wkJ6SYumPhPiGvqhno7n2okoqroxpJpx1hADeV3sM1DkyPPhphNtkndLAT5tFrUz6D4BnXAb9tiCYxUSypsPR9y",
  "key26": "2wfZxBpstEX2GyEuR4f2naKaBdfXxrNT4FfDHfHZSgx1FsZzrQQcabDPGT1cQfF6onJH8sTXz53ez6DoA1idqjdb",
  "key27": "3yjTDgfTsT9NrKyUUo2LPYc5TG9AGKHdfLb6ctwYjGXyZb7LqwzSwHJ8T1B37SjACnp36KfYCSNji1Nox2w195WU",
  "key28": "35kKL6GGvKo1SNxXqzpSr8hm1uEDHcnBAUHXQtrmrkEWXVFHfouMMeTw2mMbf5Dsy1XFfY566WtQAS8YVKDr2Tak",
  "key29": "mtoF8nxTuEEkozuE5npYSYhsqeVPWqVku5DKX1Qe3VxAH92sWJVPidT65jT53xvozszECxEbnQuXr9qpLjo9HuR",
  "key30": "37iQY4k6n7gfSw7jumcxefdKfu37iZ7du28CchsDAJCUfyCnr9WCPftZkd5iGTcVsXiuMJ9Hm3hNM4esgXrcRNca",
  "key31": "5zjwnKXWLuuLYzKTQkBjqTACJ3VtVnYwqZDFzJF9KeLwPEEHN95cRq1ojGGfxdu4gdsftyhZsUZxw5qBQs1BTg2K"
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
