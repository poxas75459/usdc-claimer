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
    "5fpDA25L8tQjBEhiSwm53eB4TvSpi3vrTutpWymjRBV6f644zXjkDy5m2Tguh72SRDVoeMbVMDpNwx3t8DBYmsdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VARXTfVhH4RJsUNJPSffu5kA3gmT2hE6ctdFz7tKxmqd8dJr7V31QHQykRUt6LAkD6Rapi4UmhdnP8x9YRzhqhw",
  "key1": "5Xvav4ARe7BHAq2g9mcairGe3oSdwpgYKonBC5w5pV9N1VFhKxj95usCdJnDzudj5T7inS9yUZfveL7a8GEwJHkB",
  "key2": "5edKP2V8fi1dNbAZJryva9qV87SB6R8eacy2x7mf6W5NwLrMTKUUCaHekbUX3PeAHRvMZbmJ4NAL7ZWBAFLyz2UR",
  "key3": "k6TzHkJYAQrJa7Nh8UR2Eght8Hr6w1b2dXqgEVEptPsbeb6wbVF9TBWB4zJ51tgZWV6YUSq4LeyRVV8xCTbhCAk",
  "key4": "56RCcEH666myKp15PQrWoUGK7mYFj2jzF3BCzqBNC43xNRTbW742tLqpWH8kwTGg5NbkwLVNBfrbAcfwdpYtteKB",
  "key5": "5oeEHWnuW96y9HiDUZJgyu9EgRhoeadgTCLXAusApnfbptbS8WEqRwtEge3atEUFU8oQVPMhyBDiNpmJgkyc2QSt",
  "key6": "44tnwWsMXayNjhZqbAqudyDHKMpxumY81Gqq1eeXSKbWg3yPEFGH1x1rsQEUqzWP6PVqt9L38EfPoksN1myREx3d",
  "key7": "63buJXWcxgv94og2g14nczfP1kvzt4SQCKUGjKKm1188WNi1HstnrCoTFZJJacw3qaNjuX1x5ompHVaoTok9ZfXs",
  "key8": "yjQmcX3XEfzuXgeBj5EYgKtwPFdUB11HqDKxRrUP8zFYD2Hm9tuB4RBAqJ4Pgp3rhMetskjanWrm2oUs1PUqk69",
  "key9": "2bayeRyZhfBiCUoT8X2acK7rUNkMHAkXA7eNeTZGXe8cgW9PrKu8L2LqsiomZnXumFJqLcMYaBuRqgQSkcX7W3Do",
  "key10": "9cWbLp3uNbXnWifekMpHZ7nVfnAz89NP6i2iQAa3zYQzKaMP53b7pKqzEd2247JXdPdFrVa3QVHXebo5k7ngFDN",
  "key11": "1FYkXpgKYYW8PWdLKWeU2mFAgqWcvqRyJwdgDw45L7yN7cY1P5Q9ykQZTwwgviWrcWgs1JQrG6rsEe36Qhpcv7v",
  "key12": "4H7XCJM85UV1oeb81fHX3zcMf1bYiLdFgQ19xJbNgv6CQeZDJeKWpRS6J1xVZE5jr26HVyjq9Pm58f96pcn1AR39",
  "key13": "3rdjd8dvehs4MtQoKEWrpgbotzePxEfBnnqkzHQ6aCHCFgh3Umetj27Kos3zmotqRjRnqGpneeGxMWHo72HghYSk",
  "key14": "tDWUAQGhnzXcdHahhPQuYeKTpD7yXqH5qoCQFm56CVog4GnYu8Yv8eRDtScx56R6fX4hx4xFooAdNNs6mvxeuV2",
  "key15": "5DzJGnAf9hufSkVGSwy9T1ri3SdM8iRn5Jd7xQYt1PbDcgU7rEGTwPbsoXLChKkwNsjXbW3SF48BaodofN3C4A2a",
  "key16": "7WDooCZoUmCSQTBbnni5T9Tthj8GzECik5Mc6SxeWhtwJX1hmqtCQ21EAZSSBHEvkMhqaGb2585JMcJ82qMeKcw",
  "key17": "3x3yRPqcnRbYXsbqWhUdd8xffSqy8aDpioWTNc5dcLujQqDbuvyphPCRqodfkLbTBwn5Hya48agb8dv9h32AU12c",
  "key18": "YQZERcbHHfVUzSHFs2euCWMc47xKSugCWFtFSy7WHPAzVdyC6xDVW4x6NoYrxVCYESEeSEiBEeUZUUEgT3PNk4s",
  "key19": "qHnfKKB4FVEPaFUSSANfUUezWDfuq83vapcVn1ZSJWStVHR3UJfSAH7z6Nx44BizMYMN7N5Rqqx2qCNNm8ZpPdZ",
  "key20": "23NhKmYbd7NvE6jJQdRFwZ2u32CasJAHxtZBCf2uGyytUvH5XFiU9qGcrdQsCBHxXaCrZCxqS1iAFrD2QQS7XMK2",
  "key21": "xzNgKq8uPCzG8u5hKBXupejCkhUdcyTCfzRR1BEMANce3ZLyZzHvnTJMKrgjZg2Q91yeU419mk1p5NmoL417oFv",
  "key22": "3C4BrwNnZbsNZmonuW7UCEexWcQS3cCrfYTrBDS62oEwKGEKWANhiHrotaE7baWeCFZjopfZhciHp1AEvhMBwx1j",
  "key23": "4Hpoc3te1ERpr7Sx9vJampAHVwE5QQJkfJ6NrNWRb5dxAfoHEFj9vPJ7B6j5LbntzKKh43HUk5W37JAHh1iv2vou",
  "key24": "57wHbXNSdvEGokB7MEs5UZX5LYsgbFxKA1mdJHFBQ16nCe7LS1YtKouPLWCJXAUv4CRskWV4gxssc1WKfEXHLEnd",
  "key25": "4tGr7wmQGs2Scz9JMvhCkYgLMQNspnCvB913iqV2dmaExPaGvzMZeNWuz2C88MFbbTVwJiwCs1x4GXZhqrVpwMSv",
  "key26": "2BLfKVM1XjJr1sBdrQ2Rs1Y626nBmPbfCN4X14jDqZ8rRM3WiUbfsR2XsKUgfbb18em2Qsc1v7ejjp1qgd8Ej7Gg",
  "key27": "4MufKkaCYp7xpjYMYgLNnBoEshsTtUd7kx86s3aPxorJoRAehPeGFD5YTg4Lia5sXWKEvHfaQdMV3qRw2NFEVKXN",
  "key28": "2YES2HRKkMn9MSLYxHQ4jXKdAn5FbeoQanA7876CGQHMUBrDuytQDBXq3ceCFxc493KiQCt6gE1R9ngvEorbsMJ9",
  "key29": "45Z9fkrbNKAYj2UNPP7qvH4dmFZYBsp9KBTrugFhhYRohKimmFX1FoMNuYEnF6W8ZHDgJ9owAXg4VzfiY4UqH7zr",
  "key30": "EF3J7bJZx58niysNdjCcFAKbs9o1gTZ9z9Z311oHwtnJFx5pP1RpQTHfASLdQwJ2GCMrBMA1ciD9CVoJgv8WWK3",
  "key31": "MesQ9jTKMvCmsSuMV4Vvr9PZHbkdEnbgoTt67UxudK5mdwSaro3LSpMr91sqUX2pGBji5sej8NTMm12Mq4L9VG3",
  "key32": "2UVcRDr6AaEH7rTKbiSn7Ekg2oWnKYK9VaHMV3j3z3ZnFTvSd1NBGANdMQgkrBGvYEeXss9cLgbK8N51NbQNUWbg",
  "key33": "5zA5EcwpgTt4iM93LXG1g2qoCQbG39WAyQGmhaH9Q58nCw6vrXA93Yxa7gWXq8q7d4Luq8R47i3QMLNns5fH7KV2",
  "key34": "53XjSgfPErmuioFMyY5iD46RvnYZoZKAMJ3HDCudzw1GKAhNrrgsJzYyX2rz9xywA8ZTm23YxoFmsDwVE8fBabBA"
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
