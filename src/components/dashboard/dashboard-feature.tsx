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
    "3E95adNehsSczaTpXp21zjEmrg5VHfLPDaFP61pkjABCppUrGhcRWAyzipWZ3qBusyH9hvPsX6kHUKn6BvJ7FoUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMjVsc3vLkxBZwuEm3VBMzSSxdY1XiNxwCY9DkMXUj8oBMjZgxEFxc8PXCDbVUZzM8qFw6wjAZcyBn2MfMxbmcP",
  "key1": "4kyuXyKJ2QwHLrBPFagS8iAhUhskhJ4QxmV5rHBX2icB7H4pnFG5LEttaYkn9ouqTLFEBdboBGPhWwzp69C85HV",
  "key2": "62wLWzq3hWrGiPS1faWF614Y6eXoFHEkXEvXbJe3enBmmJWbpF8n1Xai9NcASUvdBtxQm3VdhEgwZScK9uqPoZy3",
  "key3": "2cUMnAZXZKTki1Zyu5RDTt79sNgLvcHRA9jNGtb9aoRnWjkDQgAf2Bjua98fGbanHTVHoTvmnTRrW8T1E63CWTGK",
  "key4": "36hRcsTod3u4yFxuqe8uZ1xgQwbNsDQci4qmxx7J9n2EYBW337jNqNq6ASNTAb2EWRLMkdD39xzX4aduSSMJzZhY",
  "key5": "2rSVNg8TikMhthDCPjeyX3uVPHSX9LAFbNR5DswUKHheadfgQoxw5nPvaPdsqcLmsxudQqe6rESihiECedZh7Vgv",
  "key6": "4F8vULHDkkcq63S9xdqksc3f36zVSy72R4PCSoXTQJTtuyticxjSFZ9VKLCtNLDt1AHhNxgksza33cjx2zkX7QYY",
  "key7": "4cPJny7mLs8fK7gSKrSi8aaPnv6K1ffBvGznEHbaY37ARMMFR2AyXtbfJM6ELD6TLaM5ftZrmL2N6cGrU3hXKWsu",
  "key8": "ijrV3yBuzusUcvxnep3WJts1NHQJy6nwG2iC2XNo7Eg6Ygd3ic1pw1ZPcBfuWkGwGyx8vktdvbfTF8mUg5dRuVD",
  "key9": "2BTqMSixdFcb7YrpN1Hacpu4aQyPcm6BZKukg8MR4Tc4ij7XJQhxt4BeAgVtZ4WV1iV6xiiTfZUyH2h8e44cdj1y",
  "key10": "XWNnnaCMvkk6ptM1V4S5o1kqZQKXQVe53tXxgESkEWUivqqAvGXVVVeusMHR2BGrnHK2mxEoN1tvEKEvTdaFFBJ",
  "key11": "2Vn292qzGMLtZ5ssaD1vyKL9uXLQ7ejDDDWeT5aoUgREoTX5m1yDk2ecmWJLjxY4bMT9Qs1a8iYovcV6NXxV7YWQ",
  "key12": "4cc47vLzJwLJUxyRcrUKzS77zNPyLnboJih3rnLs7UBPCdBPMxV67WmQxkUPnH7K18GsQyUq1YVBfrED3odx1E5T",
  "key13": "DeEKZxGnfCFKso2LEeB7kA8R3yahV3Ux7BA7KWkwx7z1f2ouD4BPvaBPh9uxD7atq2n3X6E9uT6Eg9zF5GQqoKi",
  "key14": "5BrocGqTMMjprUnKsx2ZH6b18Kb5MkmrxqAnREn9pd3GiLgU8xrr8g1qL1GPxHmiqYXeHkpmne1C9tnL8KrjTbnU",
  "key15": "3QP4HjCCt7JqCmotu6ta77ixCwnUcokDe54c4N9ufCCh3CHLzfe2h2AznFXmaZwnHGMVpUp5Ruz1qdCGsP13a89N",
  "key16": "4Gjpgwqkf3i6413YtcnjKEiSusSqjX3kNuurDGm9RgBTQBQwF13CFJGrUf9ga1cEgQFDtetAzB8npwp7ZDHoUQNG",
  "key17": "3DAQqNA2fotCXjUjfCRmiXZqfP7eJn2NoVaEwX5d3UKhrmApuEAjpGyKqGodvmXZ86MyxdTCEjtbdYcMkXeJGNDT",
  "key18": "4NiwDu8qv3B8Z94BuG6pXsK5QjhqzskRJsR6cm2ERAPrSh2WePq5UKdsV5cndx85E1ax2LNy8QMy4RHWLscX17Qy",
  "key19": "3ni1tbgFuHoG5U8Z81rUybe6RU8RqECtjKygPAAENzgDYQCSeGJuZKC6GzwAxskj84ejpFAUYH99zpeydgqzSmAA",
  "key20": "23vhFVEysStzdFzqqUuiKkEuja1NR8WZTD3MoR3AxLESudsiUxoZgYXsYXm5kLefW51ZN78z8DjavtMqKBciDQ3s",
  "key21": "52dMxqyfJ3WffnTcpSRpz7aZ8yvhhiFdZ3JLJTjYgdwfuy9YxyFjk8EgsrLcFBgCChTqE44tUuLrURgG4ogVntc4",
  "key22": "21UhZbMkpxoZY8PtNjBUGSPgoj5TozDdBjAZDHjhoq27XZv7dSkEhLULek44mq5qcybazZnaFescSN9SQqXbZqb7",
  "key23": "3vff3krHKyg8SwJ2xCnqioZrvN9jaGFpFEgAhBXkQip1hYePnkwuikwaKA6KqubHsYSoQyuDCmEe3n37mcWSFes2",
  "key24": "XCFLwYFceSSBydXzeVrG3FKRWMS2BiH4h7dvRQqeGtm837rVWjTbUPBRuuuTKAfc2RmR8VmStBiAr5E2aQMGPj1",
  "key25": "3568wqGC1QsZuAYQD286uBYyak2Bar1x2vApWoe845f1TDkUcugp6nEvFRhvBz8j1WpJy9ZRgwjQL6hhGDzPXSMt",
  "key26": "5f6gBCZWhDKMoJpgNwydxtY3Wq1mpMq9wENYoPWJauArq2DwkdhWp494apwzowZtaQZfQmH2MhfyANUomV2BcZKH",
  "key27": "5vR9DfyHSBpsqj6Jd3LGU2tWvKXpgAbaoVZqmvnnS7tvnMFuTsWxd4EPhXcBKxH5a7mQRvxDHmnhRvb7YqGKnMW3",
  "key28": "49chs3GWYWjvah1C46Vfw2K9Z5vE8hJxTtDpW8YyNBuX46UzMWy4JK9qCNQP7XfNGTKviFUCj88eDNNWk48YQoH3"
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
