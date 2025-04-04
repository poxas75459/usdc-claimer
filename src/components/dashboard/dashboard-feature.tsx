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
    "i3agqQKQapWBhX6FMRoqWrUfVYz8MeSyDmRz3TeyVq35WpSEELq3hF9p5YHBTZ92pfhqDbqNMeYJFBxrdxvwmgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDzJrJnt6aJDAUVtAjVqbGiUvsBUUMiiH3XtM2hiksFX8YnPwZs1keB6KSpa2WH8RHC4x2B1oe4dHmZJX9k4F3J",
  "key1": "2WLH6GHaMRnWodNVfsYmpg7VvGvAgkuNr5qFc1wvZo6oxbotnM1E82xyF4xKrsHthGzfqBTQye1U9sp6qPsnXqFX",
  "key2": "5Ub3H7zY7544NkjqSYaaFsjFnbcsYcQuxZyZyNd1bssTSniyZzDJ3PsG6Tv4LFzFuvPR4anWDdiSog4LVp6MJqbc",
  "key3": "62kQhYDs31c2RGRwEejvAa7J67cDvH5qkEY9S4kdCkXV2kQRkUFT2AELxdo8tXWurNZ4LVLRAwA7mUAFygPjXXDS",
  "key4": "5K34RQD29Vn4RkapUfa19QPcyfXqZf6Y7zYVNQxoKPm4Qo5dGTTY2tigN8JEr3pQXoNfBpvtoc9FgDdYyqiNNz1u",
  "key5": "2RvVbAuBt1qHzCvjf6UaLN6cdBHCmu1uiSnEcHPd3p8bhx9pMtnUQSKdtovBpGsamErJzvpaWJTUJpfrhJeJSpUa",
  "key6": "5i3FMHFTczH5NVyBY7tprQWtaKqpDCFy6ba7yrxB68GgoufUxfGZqiZe4dqCob34mWbNyZWvpsCtZ4vZKmBy7d3N",
  "key7": "4BKN9UDjCXcx3BpQaUNoFnaKpDt4u2jiQwqg3wiSbQhUzGtfV1Jax3GFKVDZAME2HCALJM34JBHvjx24vMCsJ2Hw",
  "key8": "3MSZLug3yta59ee5msKAyLFepqGtfVVWkRmyQkDVbpnoR1bCMoysUk5n2Sbo5R8QG3wYEQbTJrEQ9fQLb24Rth1E",
  "key9": "5xntUp8Yh3sSBEzLPNEhkiSxpacQXqiWpuPWD6SbbRy1gdcCpf5xtPjC5qpR1KygemUR75C7YqYrGb9mfz3mmJz2",
  "key10": "3atUGUHdJ7eV8NMCK3dEYC7WHawSYTXB6hjCra1tFR75wX6DSypTTdVd2GRuAMwVXw9YM4A6eT63vLUxP7YKwq12",
  "key11": "3Svzz8wwKZYzUTBttq2f9bnLSAG4LwKyQ2rZgv3CcxgovnDTRPupViaofcojETL4DdySkPNH8w4jtGw2ELXEZjYL",
  "key12": "4Eyn1TK19bo2iUY8CysErueheMsSHBXEUftxx6RhQEmg9im3Qx6VgvQUWtrq6Vb2CkSkzR41B8TP1KhQHwPGeoJ2",
  "key13": "27CihiB4tRCKDy14bVT3D3dfUtRGAuoxsoJCjBJnWBrX3piwnxtRZTYqzcrdkzszkTfFdyfMhQxWPbY3rNHrwmtp",
  "key14": "65DcjFrZ1ygKZTeETn1NDhoevpNyr2Q8dLnXgVtTn7VJG58hE4y9wwbon2ELvKgsz8KxWHfpFjzzDWq9Pzescv6b",
  "key15": "5texSpwmzb9A1qAT3b4rB7K1SaT8Jo5WoycxnZLHLa14hq8SLT9CRYt9hJzfg8VLw7YKUMNwSywnJbg22wCYG2e6",
  "key16": "54sWwggRKWfwDqGWA2TxdUjiCPL9z7v6C84oXjVuXBC3jchC6XBhmYSnSHsi3icKCSdaXezEy9EyBK7F6etCcd7A",
  "key17": "3jF7nuytSLkPS73XsUS17wzuMASmx7hhzqyXuS6hG4uHEFfTECXWZQW5cvQWQCd1LScoDTA3tqdMTQGCtqVyBSPm",
  "key18": "56fCBx4BnvGRizc24WnZotjF14wEAX2dpnp7U2tnqSeLXeoHWPeYQoJAxVGA9atFTAHLE6yCic7jAaG7o2bPT22p",
  "key19": "3nji1MqzyLwhc1RENR1zxQQwFkAyNJ8CFf2sXGh3AxRx8XrqKuPnNZURZPN9n5DRKZmM955qJp9Hy47oxpM6dgkg",
  "key20": "2FZHTPyUHEzipR2pzpZeTYUJZ3DDDtFDktstVcNpKQ2LRvRXUmrGuKPoUujZnktseqrVofwH7ZzBdRNDkrLnhZ9M",
  "key21": "5cnvnE7NVjgmGcDGzbD6DBwgXMmNTZVP8NKjV8hh5szu7SRbmFVrMGSGQvi1dPDeyeqTomzubG3xbdKfTaxGumFW",
  "key22": "2gs9HKgQCtnvTaBiwAQ9uSNitduMmdegpKYLbhakZNLDwcLanVKxFwjyVY6P52EwsAcg8eMgMuftSzc48YmhZBaV",
  "key23": "4aA2z6TAHTtq3aD6M67ZpYGR9ofA1DenVBXsDFu85BzEWnfjBrHrsUEuGUUHS2Pen6HWVuNKgCAZPTKxCa1EV4NM",
  "key24": "2JcwqkQLgpcnrKu253NFmP2EsdJrAq8fTGGuScVbgmh9XA7xKKGUvLKxzpJf7ve1Rrfs2yMhnVyVhCox6Tr9voUe"
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
