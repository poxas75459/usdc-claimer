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
    "5gXhusATyqdScJdtf8pSZbTGXS3yxb4wjfBsh2FNTex77cHmntJXpo7cgATLTswhZ1BpnnQPcLCbYrXXe5CfPATv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tp99DkVrQj25tfc4ARS2UEXbhL7XJyU5q6tR3uo2dBXfWfRdNPv6NGPrCmStLfbCzVw2ciKe1znVbwM6hEszqH3",
  "key1": "mLj6XNScg592dzKbtoYnxqergj4psRtMQb2ZFnbPMrGEU7KybVfHxynMz1ThgvsxKHtC3zej3XyxbU97C7PxiWF",
  "key2": "NCB4b8rBJ9AoToYJJnD9JQLEUCdbiNNZev6yR7z4fuqKRBw3L1KW5xidCY2fogjqHhYpKDKxdytEZj9wQLfshhH",
  "key3": "5gSRS6pKaG8zHGbF1BM6JoVRnKxaHgME1qTL5wN59BX9P9EEDZF23iG6WyzRPSg9Z82j51ioHjLtBbqh2JLtREEt",
  "key4": "5eNy7WAFMHCLkqWp4uwQMNWbtcbL7qWhg13quQX3L4VEttVTd4pn5rXiZuPmDagjqiZkCNbG784hnxjHZ5HfHWND",
  "key5": "6vstyZpbgNcivsQkqaUzKey45jUyo5ZZcefc2uL6rThiVabhEYaprmsn4cquZjBu1asSjLMz6y8DN1YxHnEbQ3u",
  "key6": "5gvezMG2zqFHaoS3m26VjiSQa3mXdz6xDkATbHVeeC5RXgdHrJWAZrjH45Us3a8h7UfV1EskNSoduZJSVVTy9kJt",
  "key7": "5R78X5YX1Pg5vqmfcr4uFLdVqdH8HcgqiKNHWSkvQj6NHhpdo5uAvVhQ8t9PgNiE9naLQXBduPXj5TpizTuqr7wF",
  "key8": "35YpxrrgxoySBg6mbFcuZqBhiizVBPXJsGJ2rPRTWFaNLVcmgDAMXusKXWfAYLW8ZhyWen3LfiDPRHCKSKLdpzBX",
  "key9": "27xmM2L32x45MgYYatQfdS7Ar62gTnJZ2Rx5fRvLAoJgY2Rdy2Q21Rs5SGBar4n3U4a6rDABGMHLUw9hbDDnJePs",
  "key10": "4mRD8dQFzpgLwBAR4Q9F7KGzBdpGAYKzLgVGWEcTyz5gwczwYA3S1wdmZebnU3zCx4bQvv9NKaLofsxYtK9DXUXe",
  "key11": "34HBzB9KncBf3UZU3vkbHiPauUYHNkhtByHaqVNZriwxrwDLEnXUc7kBZGiRK2qKE8w2ZoiEbPUNHeorf625Fgtq",
  "key12": "TJs9DRE86sypMiYqNcJDJbLNXtXhuP8e5Zq2dfM6gvHHdk7XPk5aHMbDTEfWvtaHyTQs35D46d4L1Sy4fYhUfg6",
  "key13": "4k7k4daM2RdNNQTQh3un8tpYR1N7E7rhqqwipwtvua2YjCB5xiK2FqcZaaJ4P9m8SPTsCf4g5u3QpTU2aSGn2cpC",
  "key14": "4HXcgZtMT5zWUzZmachYhfJDZKrZKHrhDuzqo78DZ4Ro2HcxUWRFBg2SVy77q3aFBDhUdB6bUQcrbwE1xb2twdS9",
  "key15": "nVzh2aa6NrH7192p9KZdeSrQMCanmoFa6reJbkH29uzH9kQ8EmWA3EjhnhB6SXNfswv6ueR2pG6yG4d4FfFbMb7",
  "key16": "47nhmxkEEXBaxV4XwyDS5kASUUFvPxxzYvDxdqw13JEfoPDK5hnaiSgTvm4jsLossuXMZFzngjT9dZXZRVSMuWiR",
  "key17": "2jRctLWoe51dgEZZc6UmXWjYR4Y7YeJnXvhSJ3Sry4gTzecP7tCfbiwmAPyXoSd7evYpPKWiDodxiyruTJMdwqtP",
  "key18": "JKmWdraNfTpDiyrZi1mEVWwdGu8XEPy48K55ztomxf3dgR91bYmUq1gzi5kr7usFPGSGNr8ZSZEcd8gyXkSZVM8",
  "key19": "fR4Hb9UzhYbJrz8vuDSY3Lmkf52cAttAo8nB82CVaVSu8fUuFgFE9hhuERBDPEwo6v2AN9awhaGconZidupj4SF",
  "key20": "2Dgr2ejw2zKdNxf3Zd8G81KzQtaXewtNrB1h88ZLeNiNkL5YfQpuc7PM8TXL2dutGbM5ahMW3rpf3YeFDumEPdqC",
  "key21": "RgHn5ERYUyxqGfC9EPHjKXcVBkoJSz6xL6RzWeVRGbTEnWUBDdEettuL8KennUfVjfcc7zMBBAKr3FwR7RkCD1z",
  "key22": "5buAGTswSvbBcK2XNzLjV78U2FYSJ4RcJbbzL8PU2CzWKgnap6d9fSXWKyQZEhHXo4Hso7a8QBsaShQj2czja32a",
  "key23": "5MfKgnPVXXhdPw8Tnok35rHV9AbBNA14m8mFSTNsAsLjJwJAgHaufQAQqcHSUkNvJXFTG5jagpC4GYnjFQeFkRQ2",
  "key24": "4oWLgMjyip3mfSG3VYdidY3HMqu4pVPfcWYmxBFKd9KbuqiJaUAteB9kovX18ZDkKGb9TnE5UdaujCQ8zGxt9UBY",
  "key25": "3WzPyZUT2PhieYBgTzBuzct48wXQV5WVzAmhLntvsTxTw5mQqP9XsuEboRuCiEHHaj7CZjhkGNJ2V2k7NVUrnbRd",
  "key26": "zJFi7cLyBUottd6kMQfZuANXdxNoa19gRU2nTWBiwyaFiJwn6Vrbc5LP8g3C4UC6CD3p1PduEMy127aeNoyxDck",
  "key27": "gnVUEP1wYEzRKXQnE2vqq5CQLZ6K2eNpuTdpQAV8R5nB2cdfA81XAKr8o1keEBontJZ8DseL1TSuh2f1i89zMqN",
  "key28": "gYrkKqQXBJsVe9jgTZaNzvbmaxBKy3WRDxAmKhiCf5P4CPXk2CNg9rwHZESN7tiLwDKWMAwzvKoWpiGU5y8sWog",
  "key29": "2vRWB1nk72qnR56Eu4U85emGdqcSoMXttYzxQYnsZzVxq6usofrtLoEwCTAfcbuWbHVfvJKYqdZ4d2bkMEQUx77T",
  "key30": "XtUg39jzvsj7CFHJQBmG59jCxZJWuqfC7fUiSaXiaob7VT4CoyCYsA4eGNhsjofopwgZ9x9ZMCrsmtbm1FHQY95",
  "key31": "5dFY1WKxYxxRdLkffrS76RKo9U7x4M4efkayrtKkczyoAgMVWwqY4ku77T1KbXTfAukHxoAq3JhAmbaKgMfb5qoo"
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
