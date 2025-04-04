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
    "5jDKWq3FKrNWvXq7h5Nq95J94U2Gx8ChNoR6ErZGWhW1TEDrkFaN9jXu3sov6HuCbosxYeSBdiBqkDfEz9NUvpFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aRn7K4rr8YXVLfZg4ioWWZRRXTiDD7fnaZxkoEKerjpNKCbAvh2SM1f5TosoExR3CMLww3PPaUQrtr4GyiWJo2",
  "key1": "KsCZCVQnE5WRqzht9auXrgMFLVzrNyBYsrNnTgn8J3LA5vxuqDqfHDGAxUiv9QyrsSs9h1HCtXMHwCbBMUeWgEY",
  "key2": "4qDUpSiFnHzEP2f6dV7rZsHWuQr5DVL5VYhpYbobjQdtZLpgjc6VNDRS1EWvFQRM4t9WMniP2pGrpW938GmqmsaQ",
  "key3": "2HEfgJZcqkFHpgFfSGH6hB5F1LujyjGVk24SdcpH5QpMev7P8pA4VHdnonkCKAa8jNSQaUizcxW9EDuPscsCPezu",
  "key4": "AMik7U3gNRDe7Zg6YJAgWvW3id5hDeVL9vaXaVmdNDKSPAwkGWpaFUcHr72Hs3E6zJBHXN8sdaWUbHjwZZPTMDP",
  "key5": "j1sj6emgWFXDvUABBpsL5JkzuxGtfbxgw9XxrNzkpTSJReaefxVqn5AWGbtkPbujFbxq5EPcGo1Vj7bHTjWwtZc",
  "key6": "2RxqWeDhmaiSVCVx9mX3igcycTX5ijs5NnYAewuXUQAz8ccyDNdjdDb9n4iiSN4dpj9LpYMd9jpAcA58ezeXbP87",
  "key7": "5W6DktfZTKfmYJfs1zjTABWngmAbahLorahMfM5HErV9La594uipQs5aBpaNdUQ8ftM3ufjHfNDVQs3BkErdw9nD",
  "key8": "4cVaat4pKXZdCEyXAFvPJKdneRjsUtCh2ELyATRnTKnMLTfnBRgzPAeRckzPyTpvfSffpUbRcRRMrfHHjym3kR4R",
  "key9": "4EUBQurjM4ZMLxCbPGmnRn4KZ1Y82erd6tWG9ztpwR6apz7aswp5uRjQPiD2FJeNLXtv4hf3qwJ9jkmEkepBwfoK",
  "key10": "5k86deDET49DXG4nTpYYJj8sWBGzuQT4vmFnjNtZZ7EHXXm3sxzqeMCMPvY7hqxTjvXXGh62p4SiUaESyTD9JvSg",
  "key11": "2uadg7W6dw3hXNEfCUMjJD71nA2zb5jW4k2svLaBBZD2HGKmgWLdWS5wDfEbCQyPv98XcpRKDwVQs9p7gkH4ZSMz",
  "key12": "5m6C4Cb7635hDd8acKRxwsiVgrJzJ2tcW6S4zN62WthRf8Vebf8YcVohdsLc3z4kbQ8BR8pUdpXySk3a9ovMrrth",
  "key13": "5vCRfzJzWw5KWWbHqJmJQs2pFLojinNPmHZiVAAuTteZhw32VAC3KUdzKmn55A4TohFYN5bpLVWwG8p4TEZTKoun",
  "key14": "61tXrJ2Rc119xg1k9fh5Np6hZXhZLRxexVioSRXuMYWNB9u9NRG6tEkp8TqLGoMVnKXeyqm9ZXJQjBY4yQdxYcZZ",
  "key15": "4ErnQLK3qcpRM7xCez9tfWqZLCxqc7umiwDSNEaXunCfYizS3kAS878d1SYYGhuk2amXTnPA2f6oJdJ9U1uJdV61",
  "key16": "3Kw8RVaDQiem1ZCj6ePeNZYq9FRdx5bfoeeNMYXhJMovegdFQYZfopkVafJ5MKNHeyMo2C4tqER6ntPt6d2NRv5e",
  "key17": "2W3vfoY7JEyRUZeBwwnNZjTzP2ZhVFwmMdimXgKqnab5dtHkMWy66aH9b5ugYhrMh1nxtTAfWZFggzhwMqqQmSHm",
  "key18": "5oXVWi8gpUWta2ZzevuDYWdYTsebvHV59hoSyPV6JZaF1kecASA1zyb8odHBRm9NW4c4zYwSuRpYfNjxbjmVoJpg",
  "key19": "3UGFmrniUL45aC6Wd7Ex8PT32LhDAFwNVpxuMrW2446MW9hSAkrDMWwrpTh3KRLnQkcy1oFMKrwWgagoS7DpMFiu",
  "key20": "3tznmR1aX6R8CkitifVNGHvGiUMpxoJRgWQTz3ihM4jD1dLwVgLPxZVRrp5texDqg4TTWSpFxcn5SZ3NjjCRKxt9",
  "key21": "37i5U8Nu2UxMf5ZmPeRrHyxc7x7MQueeKUffs6EaaQFc4SaSbw8uiJpB3RHYHuqkdETd1TRRuF2SC1Xk7SjmHRX2",
  "key22": "2GuQsozZAzX1PJyzCsen3cuK3M6TrbZPfVYvo3poSz8KrgumXBvanTfZhHCFtsTyydogAg1TsLqxTgofWRuYGuro",
  "key23": "Y2GnMVocFbnuYQkqJ6YtT364GAeARCCfZnqW5zPbEfuTM7881XmDVU5K5We4H9qv6sJzMLE96yXThKzJYa4rENe",
  "key24": "3a9NhcFcaPtkrqqMDzPje38xnFmWmnCEFDr7SvMJzrDWXpK8T6vqZDg6aK7WcQxn1xJ3BanBFfwhW3azyTWaw98W",
  "key25": "2vEMPBKM6ZGudhfDza83TaEDqZ27G7TmKorhNtoGCHWaaMvZjZTmik5iB4A7VBjwxfqijP2S574KFcVP8RmbnQ1H",
  "key26": "5vQHoJjTYRwDz6Tsknp18boTjnQNvgzQfwSMqjjmkeKFbeBGnnWs5CKAS9Fb51sVbU1VSEQsAcZWawDBXhXtvYqz"
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
