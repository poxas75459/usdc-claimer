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
    "5JYgdXezjmmmMQ3p1d1HfMRjX2czMNf8ixzx7ADghwoGiMFrVcamZfEGvDbUVrZnZGrv5sVBktnCdMvmhTTyTBGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XucUqP5TT8KJELXEWiHDaVU6xonvWW6YBoMkjbUBv5ZxgSRDZ26C4EhvZcVSBaVsLCWPreNvihZCFHF4dtR25dm",
  "key1": "2W7JPzegJKQKaCALYzhGxDEdUDVjQpb2tACheJib3PDfzKRcRZSdiSYgassA4y99FZVpPSvWVQDWzAhVLs2QYQyt",
  "key2": "4x44koR5UzgsmNzVvz6XnXeL8Ztf7e7pkFeWoRTzjhn7T3rw41XXoeyNejQAg5gLFe9veMAdKejGMzxC9uokfH5Y",
  "key3": "gfhbhiKHAZsrwQp98ryYSuiEpLwfUZJxEYVBAoFS2NPJPhpe5ZEBxwnNPuTnPa7AsWNvXZTemZrMXR5qcV2j1BG",
  "key4": "122HcgkJGLMxZnNWNGzHs4svP8DceTPFPbMBhy5SbBAB9gH3qywGEJEL89RaXkfeWCSXUkXTZcgDx5HPzszXhA8i",
  "key5": "CYWGzUpp86SArVTxTWmNidk8C8rNz3P4AJHZegtXrpjmhVcw98AN4cDuRjC5gY775zbSdXtPPLYTJTnS3BpbVsH",
  "key6": "ZyfhZs5QtE58RURZoZqHyDuuXTT5kzNCmpGFjwQTMq1twSSgcCdDsH9gphR7t91Na8dYHNcZ4JPtKJdeyTAammc",
  "key7": "QncFFArQtYpQyDHtGBDDa3C4sgQ4NJyVNW9PQV1SA2LjrHUMw6VTnQuux2P4tQoBHrCKN3YrK1WhAAQi6ydvTJW",
  "key8": "3Xb4xwb1GXkccqTJU66DCTsDhbceVpw1ujN4DKJoieybKeaGakfxvsuBFhFCwsmqkZwWVtvbjp7zhrjuDw26uhkD",
  "key9": "2PAV3hkYJ47c7ktKUzbKHsiPpAvr1p7xoYZEcVgBZfKaCveXSSZrRmG8CW2PsekyrAoKR4Jcd15PeXDEyFQsgSAj",
  "key10": "2zAMnYAaupja3RbNWeCBx5vdtwHDkHWvBJHV3x94ju8gtp57q5hFZ7RtDV53bwPtHcboo92AFsFVQiM8bHCzat81",
  "key11": "4F7dzRjKmy1cRJS6URsqtggztWTMCSfCbE5EeJNenKPsaGXEUK6WrNakQDzhmXw4RMCtDpvC7HSBKCDeJCJwqHoU",
  "key12": "3AuYYq5mxv4fsjXhanB5bCvAUWH3ZZHqEMdEKnfFUwvq4WaRuWA865EvSDy8ndc9VjbwDXZ8cMXPBmSrX5njHUL7",
  "key13": "2xCDVUYMG6PuG9SdgEE74mBEzYXpdSUfADLC3AcPEKtkTwEnNJw7CS1pEwWgcJAHTALwtAJ7nB7fpvUMoJLRohyY",
  "key14": "25fPhQDCWKdvqwgqbS2MTQYEsmH5BRimiiYNhKgHpzgsChtxtvmP2ytXnPD464xVo99huyaNtJLgGCjxgitrKD5y",
  "key15": "3HEQr4j9pJfBUkaDnVH5DL4JgmU1xzZbVQLMFE7MdtVqGuNJkvs4FfkpGo2MvSec2S4U4khEs6b4PZLSYBe6sVmX",
  "key16": "3JzoaxkeLXqjEw9F976pR5KvnSBeV3hau7W3dLCHUJCtgX4aFEFETwP7xQbXkhn1psddVJrf9tGuVjgPQUBYAujk",
  "key17": "4gTjSTpwar8UjtwBPwi7xhYU9KAj93siXynYTcqj8rpfDjpWipj8WUD1VR4bTB9weqx1DLEpwqu7UN6FAWPYM9v5",
  "key18": "4SVHQ6rJ6anFQ7fPRPHUoC6DBXX4ivdoXUznvetsi86hGWeARceu2A6sJLDQQDymAxLwQT79Qw9nq4tdf4ZhdtCM",
  "key19": "3HcVUTGwTgDXkrWTKfxMw1vAem5S8sZ9m3scZbLMAeYyJRVw37DJrjM42eHJyHBoaNwT1Dp7pz7UnqfzetGwxuPo",
  "key20": "4ENFzbsH86P6b87RmCohinqCoRyxAa45RAJGxdnTJF322XyLV6ZjcdPbMZL23Ygrf2DuCyJNqQ8mK6NXaKLdScxH",
  "key21": "3nxuw7EznipXD2S71qfzVKF7LCo5YhPKjVYndyUbUp1sdG5pcZ8eZQEuLD9HX7tEkRuNNHRok8atkcFcCsMfXMzt",
  "key22": "3Hny1PoJHE6XFZsiLii6NBaxgvyjrENLPmCZP6a1cvaVPPgSysi7Skqjj7MooZVKiXdLwtquLWfocNStBSUpvpaM",
  "key23": "4jM17YhENLUkSdaQwcPeH7eQKe626GDziEE5UmnyH1nMjgEQfYfkurA3TehgFRrrewTPp2hc844AgLhHBm2UVLRM",
  "key24": "2vm4BhQkMVm4UgYLRTX7eguNdjZg9DZGWSMmJ6TXGMixoKJ7KsR9MeLsuxuRLJ8CHhZAwjnknukzQiM25yeXpPLr",
  "key25": "r7HyoTyvDTMzuSzHgHd3RC7AXHekughE4D4WJ5KhuY3LHZxj7v9Ye5UVqRVmjYm516jpk5QsDx3BDaf5DUVYCQP",
  "key26": "UHkhvdzF8XdmbphRZXh5qDx9zWJLFd3fTKRMNwvMAv5FCJqz25snjga1LzJoxFxFq98JJUr3rKUCp8qByAHeFd9",
  "key27": "5kd1vb4PpU3YYutW74r29RtzU3uk2TFfv6Q8vRPjTkoFwwZUa7LH1ZDfob9kfdwUS7bdaCCpjVo5xsyeVjJv9m4B",
  "key28": "4Wfqr4NfZscoiEnmrbGxMVMQGRV886uu3dXFw8BuLQ6sr8MCxGTWiuXFsNQNe2aVWiSd7NFZhQt8uM4LNv3VQusK",
  "key29": "596GvqhFnfoxaC97s6C9dtyGXXQx2C9KaaJQCeb3qAD7U4ACVyHFZ9fqCEruEuMmCUqguXAT9BeB9MNdjVgmzAyk",
  "key30": "2BRCdPYHX8xkywh7iUjgVv4wztPouwnDKMQdSEZXmCGyREcgGXJxEyp73MaUW3efPAVaHAyBnJ2ApWfK6VqGXTs5",
  "key31": "2XeY1wEGQtfDArfUeivYDhyqEnJVbLmhpCSV5ji8aQwGkfi83wsTuwn4AwYeKGcivFWpUv3oDbzZcv4GUpVKWirr",
  "key32": "4Jd3P5y7RDbsmafa7Am6fx6Xx5vtnDN5pwPjGXRwdPkWmQdbUchjShenuMyeZsCWC8J4QiJbbDUBa8m4j1UvKTfX",
  "key33": "3PKxAayAtUhNidS4X6X7eDV4eUbr28GrX2w5JzR8psi5UKgtYTcw3xiWC5zV1mRjndD4374qcb1vywAjjzVehfZn"
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
