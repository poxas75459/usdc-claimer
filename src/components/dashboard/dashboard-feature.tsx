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
    "3FjoZmXosXZNxK32yUSjHq2mdDFcjhgiYovFsgw1o5rGi6R2dFWAHevv3imxduFPKgp7s7iRa2GBCnVFJxYE4uaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PskFitX2LvcDZ6xv2GFwdmyUBJtCU3XYoogRADWmKSkBJ6fy2odZnY1o91ZADLZQbDPzZ1Yf4uU8XoW5ajK1VrX",
  "key1": "44UgYeNhfivU8KqYsKH9zZrt3yuL287TQrARP1VHd3nny58D1oLMSYBirmRM8cbHniq9zg5JFT41eimS4iCrBzda",
  "key2": "22n2W4qPZgToLHKAzPrMJdo9G9x5L6437ivEZFyLpuQ5iVLzqUdF5xkWYNFiV9v4R4TYfquwDTC98sAxy2KPin7J",
  "key3": "2mCk368oqm7s6xjhCHG18w49evY2nXJdejUpT8wy7CJ3bjH4SbM6yqPcCWAs2ZkAa8GdihrzepaZCPoPbZUFWRSr",
  "key4": "e3fC9zDne8498dpiTkVMvJyeNXDEpk1x5pda3me1jMore4tGa46KonJ6QWL2N3uULYHSizfb1mDQZe8PWPngZ4x",
  "key5": "SXAdP3CvGB2GupuM4i7YjLfoWFmeQfrir1RE1M1tAize4CcCJh334cFXjD9eiGYdpPwPhK9HowDuMw8Rs7pDXmW",
  "key6": "64Jfi8Y5AbtvEGQnGY2cUcifBtqp8EDa29nKSYVCR48HtpkxQzwxVjT6nSDBC1b1kkLykQnCaCjqK8vEEgv8iJqe",
  "key7": "44ujMjuEJD45jn2aQN3ZUGdfxojRzb9ibgU2eb2P6QouThJrtUnjW2hPRuUJS5jDschQv4VGXHeUMFBJpsbULdfB",
  "key8": "2DUmqf1sfiTedKpMG8eP3R9E9VxE2cfZz6DXbdxDYZfbpk6xw3u4LBt4aDnEL5Lfe1zabNNT3mxpP4zLNKWenTjn",
  "key9": "2jcLujExtQP5uXS97EQfdsDcvwhRDRjM3899jranA1gQLWWoPMpdgt4X9hEsqu9jma4WreRUeMLfv6bY5RQaNqpe",
  "key10": "ZYT49VBMJzutKWAiZNRoRweeZ5vR7V9TGow3BGyXAdWYv9Y5UbrEfDRYYQJcSxVvWaT7VMuJ84iWYmSD8HQn8Rr",
  "key11": "5mBWoD1FtesFKMq5jYcuqtQxWe8H2CcNF21qjCvwDqo3nAiwtDjJcwKirwMRBpr7oPCE6FcfJf8HAV1CGfVNfeRV",
  "key12": "3XeRVqyEkaHQNkQqrkTg1ehMMx944Rk51sniAyT9L78oVxh5udy86CrZEox6MWhdq59RgMZ95ZYSnmrSDLaWxcNy",
  "key13": "4jL3TzUU91xBNHUNyH762VoJxW2PYDnHboj49UaTWmpvEgSnQoUZHkPXD79PVCQvNegutK6BvhRDEgtanS15UBU4",
  "key14": "3uNjAEv4BYk8XUSmsAgi27J2GYbAEWetbq9UJBDspszbR6w286SfooL8kBFEGCRtfuygp9ZtAsq6MRTQjqBKiDqe",
  "key15": "2uVPKCrth4bsYD3pGxo2qhxuMKv8WvJGLJLJEj1xwEGgLxYtVoQsCeW1xHMBRkJJ6HsMRDC1w8GwBbZJazVmtb18",
  "key16": "2BD15M3Tufe3dGLcGsKXpTg9eDA7CXMfitZKNQezfVFC5ipUsgqPbLLaYmXALUpdAqH1D3HjkaGc8S6ZUipppqJK",
  "key17": "5m6EXYcwGyLBCDbSg9dmPFJ7QeErU7PznTKvv5CimG7NfmqGBHSKxe3cCZMmJ3xSkG3r7krKTJgZS5YwjR35to8m",
  "key18": "rDrX4WV3zSxjatMFJERLg4BhtVdAbRDgQVzFSzi33ZzUTgknX54rH2FYgoZxL9cYcZ9vtSv9s4fnvaAQmaAiNSd",
  "key19": "3NcwCVevZMufzpvYSdkpgwj5vZKKmpCS41fQS5kt9X6Tee9j6Vi5LeaHiEkynuk3TcF1wtt7py2tm33gppM1jYSz",
  "key20": "3B2ffFDpjpboCeTLmmb6Wzvp2WfEBB6LYYekdvMi9WjbQu98a1SZvRyFnF2teDDoVWrjAXW2JLxtqWymQHNzhq5G",
  "key21": "2UvayPmvBFU2L4Nm39NUGc3xX6sR2cTs8PsmJ1oneLfvx65W7Uym6d5NR34CAu51nayMN2ehkE8yEP3h6SX72rpz",
  "key22": "uDNWDaKJ1fFKaEHRgyCLZVEyZFV7jozBf5sf7f6otTAngtqrrtbdAv9dcwGPF3P1EsoxULwkeG5bAK6MsJTyxUv",
  "key23": "2iZ12VVRTZidfy6oVP9GYFmjsgyEGFtxciH6vsS2VgozKvhUqJHnFDSxDSHkWm892fuvZHnERQfa9rrYnybDngSi",
  "key24": "4fhoX4dsymkaiTrAYirBSVkW9WsGd78qk5UpB6kfABfWmNf7YJ3yzyJiPmtzW78ZKicGK5rs5hGFCLdH1XnWn1aF",
  "key25": "29EurgtXj7rYJFSeRCpcsX4tqFHysWENGBZhnfXvurBtEoFNEGuvbxPNCjXUwMV7GStDF84hE7YyQYDrsW8FrHmQ",
  "key26": "4gtHbXmEWsiUV48NP1yEz4MoajYjx2tvUmkBu38o7BYc63vRNAd26uaenJGt7xuPAcwBU1AYAka1vMXK1xV6P2PT",
  "key27": "2LB95smndq4imkFtYaMaAYGR2NRGjRmkoFMt5xQKmVhxzSwWwyqAxbDd6y9ozdGsxcmVKTERPyGNMHt2GqV833aq"
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
