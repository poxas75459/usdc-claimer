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
    "4MAuCDXtPdJH586gWB2TQzXVCdtnEp2mMNdevemZ2hCY9xjBzE8zRtKK9Hm5gM1kcJQmHHSsj2xDECz5WDeFUXfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RA2cm4znwc9S8eddEgMyDxwCsoepp2HyA7iwTKBouuhFHLn8bKyTTBbWoHzfZMt3ygFJ8RCcGKoLg2fbCyr8nY5",
  "key1": "579njC3wXf2gsUX8g5NrY4VWfUnb6DLCsWT6LuoNyqWAL9m8rgrhN1mbcCpWaFKzxm5u2EHCd7Bd8bozbyxmZQyo",
  "key2": "44xC5ibQ6tFx8jtMgf9xGknhsGK95Td9xGsPWfMTWPpFJtKn7NmymnVZXx4BQkhFE8BCDjrwpArPW3mpCqJs4nmG",
  "key3": "3YQWyiVXBe8VkcxGqD5Hjzw9ZLLMxeSDr4YVakyu5tNmfzcv6jyFGJgxLKnKGMtB8B6e7UMKBRoWgwtCmgKrbPDr",
  "key4": "4TU43iADzo63RRvPiHxSq4z8muTonXjxGgfhCTqZsSMB3PWFJApHfUBinfusvNNF8ESaz3bybuChtZcgKwV3agd7",
  "key5": "5gLYhJSW8QDw3JgzKufyBWhrC8Ehrf5rpyyGZx5vYQzF3Ye2W7z6K7KehUEaTzrrEeQwuh7s2ophk69Dx4e9zeHZ",
  "key6": "3rF14rveSQhiEYiu7jsp4V11z4t4TwmqAfb4eFEC4Df2whamxjUQ1AEHWawUiNPuNStn1cU5UdYd2sHfX17vwLho",
  "key7": "5J7ZD3MobRsicDhj6DHUxZtypghf4vUr3QwsZCaVDWMg5wWvyp93dqpgwLbi8KBfGNuhn5QcHVUEZPXH5mfrNKct",
  "key8": "5WkUu3g3vQqJm42D94b2e6ZsAa1539xj3hq8YEHXRXkmYR73x88J8NQSMZfVTzLTBe4bLdDf1vK7vhpco61uwBPx",
  "key9": "2x57eqfVB9BYmD9u75QtK4S3QoaJBkb9fRQsxNuNUVW85mJH2kEAapTzdvxTQchYYEkfmqcD2R4VPyLe96LB3mz7",
  "key10": "4RywRdV98bWExC6vAjQi1E2wEUzckEvYqUtRWhY9zqUTwGFMJQrfRW9fnTyrX4TrS81JdHpPAAnABBcKme9RpzQ2",
  "key11": "22Hs16FSStjRKC8hnLcrkZzPsxnNw5wBQ2ErSzL4yy7tSXnQvjoZ3so5RMaRK7rGctJVsciiUutdhsTQTXuTJFiy",
  "key12": "ahSbN2Te5AN36LP6ZeGiddXpeEDJsuBhfpPXPnpZPVsMwALSTwszQn5DrCEcNEvdKUasUyP1pC5CkM9Q7qKZGNE",
  "key13": "3yapzareUkMDd3MQAtJJQP8UUb1wzbgEhnuwpaysvWqBiGdvntCRNRs9vQBsDW7Kq5Qr8Qu3C7RVMdeCznBD3Dyo",
  "key14": "t8jEVTDtpwS51fikvtagiKLugwTze3rFxWPWgUDHoLXs4UybYh4LZc4jLrVp5nz4AfApqXoi2u5TRziA1Na83dV",
  "key15": "42Bkoo8QPcTm3X4PVL89KT2qDsaXgJzoyRatH52fNAhiic7TkmLvnYSnQboP6a51kR2DuMa9TekVTVD9KwHUL9Zw",
  "key16": "ZybXzGFRVBXsex5xnW3LZcRiZUWLm2jXaqjpbGb9W4ALXMK6hu7UfjVSneA6xE5udnGHWHGC3CjuPXbVDMHJKTF",
  "key17": "5REfHZYw1rXKXhZn3EcyytH1vSBEiho881Q4TQTQGcE1dwnWh8ZbSrGQNsLR9FHMSNGwW8K1fdbSNiGGYcP9DUpn",
  "key18": "5u3DXsNT7ky1bx4jmpMCM6vWtc9XAjHg7tkP1ZTvDxkcoX23VZNZajzaCB4qKMTtgcRyEQriim9Ychhvb45vCHW6",
  "key19": "5MjyDR2TuQC61nw82QrLPgP3c17QWpU7f8EjhPNaAtqL9KLMCEDoecJpH9zLuTYL5SfP6CQB2KgXWvxGWQhFdse6",
  "key20": "3sGMk6KML6taEhyyiHPwkxUEUPcEyyC5GGzNMNksp1zbDsVHYQ3CmkanLyVJSyGPaE3dqehBDA8juBafp9eqMLNv",
  "key21": "57qwzyTathgsQzetARxqxFNHwWrQ1epUbM25PoRKGR1TNKoeVmsyaApkJ3V4w4tDursEtAFUf7E7e43kmoFZFmnK",
  "key22": "4Mz3RG2upXikKB2AkhpMLuhBEMHXwzSZSa2xADsDDhfyBa9sG3Uqz2g3mTKVPe77dmPrvYo16P2rRda1Kv4B7qMw",
  "key23": "pSgJaaDUiGoPHRNjphqF17466ksKwjXHNh8woyhN8Bv5kazGeg8yYPBN5JH5gqrU3dngnwRVCPQHYPwRU1PGCdn",
  "key24": "5RMZW2TB7vYBH5CbdERiLZ4yjCBGqzGdKXDFvMAm1aVWyd1Mmb9UERy5QvnL8piKRmmSxAKWpY1k9HoRnrXCEf5w",
  "key25": "3LwFLivHGMYa4f6SAenV735HJhBvguAhpc7a3w3pSD41dJujzQWpUsWE4Kza4RrriG1Qy1eAdKTo7WSbWbC9SQXu"
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
