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
    "4CabTkjtF7Sp6iE5gTbZKMp6s5PbPwzjTZNJQxaQkDrWVH9yvTMZsn369qAw2X1Qxnm6vzDKtmoCZjwLX4Zu3jsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQCTVGKsp7uYYQzyHQbmHcLkQJA57j7VhLUAC8mQpyL5f1iuGedQr5inSK7dbe2uquV4wdipaDjUX5ncLv9ZgWP",
  "key1": "2bK7uzedSZ9acQhs7XkqTY4fUZaFUxYMusLxpfLnDbzqNssHAts9x5TianKyF6Pb1s215WbMkD6q78cEKxou79pf",
  "key2": "MNWPQRcPqKdFZoXN8f8CVAm2ReF8wrUVuNVgv5bBPsgSkcYpgzYtvGfYaACi1sX4cAc9mw2sPq9JKkHxt6NsYfV",
  "key3": "2N1UKK1u1H63nsST6uMXRR9dYAaVDsUr6GyJryYKWLbFMh8GA4Ug9YEbfa3Gyh55b6a5BEsk3BJhxeWBDa3XNovZ",
  "key4": "5kt6D3LHzP6Hk8aD2eGpbtyUt2JFnbchS9Wk5woGFq16uHwyipashhoXUiugkYvr1eFsSwPsCH1FQHoVbnL6J71B",
  "key5": "3LUtC4MyMJEp1ZdVMu7UpA7PjptSTRTCSuGm6PFocj2qDCHP5reTupqALHtqNgric8xN5YX15p23eYDVmNPbmRTN",
  "key6": "2RWTN9AtqFrNezYqQkXnBPxpfuhpSJFaXEhaJp1wtmu9vGAi6EZo9eP37fGdu3gUD3ATCFtrEbQNVw4iUwvbowgo",
  "key7": "2ye21Ug7pG6apghXVHWSgjsFZ5LHoFaWqmUA6VFfLmPZJneYDohYUEjoRf8DrLR4b1qxKXaUbJBAfg9NB3m6fFhp",
  "key8": "4DtaeiqqZqh8tZPBH1ymryMco4ZVNRG8TC9pFVFPW1nJ1yHfpWnpaMeJJWbPvYk8y5NnG4pmbztMQtZqzJa74rxD",
  "key9": "5Hfvdsox49fg1jSCFL8bVyrUVZjEkZqkrrMtkEpY1FjTLtdzayasTX32jSEWMTFwM5TWXYhZsBeB1D9vZ8YovbUx",
  "key10": "31m3UUW8Gorwf1DFQV2qr419MmACuBusjrQLFWYVJE5afzvrvVHGG8dtHe2J13JggtEBSqeP8ayfx6FPBj47cqZF",
  "key11": "2EL3u8HBYY8NVa5kTBo8KrusgfdtvBgMH44nRwEbNxypLrB9M5p7gcDeP8gcPP5KRqs7a8WBKCYCCMCSb2yYCypJ",
  "key12": "4sVbK5j7xZ1W1PP8nhU1FS72aJcrgztUHQQFDKi1CtHrhodFHH5A3AkxAtDYQE3aZmBy6rbDooyZ7QQbK8Gn4yEV",
  "key13": "ifM7Q4WZQugF96visc3NFqVG8tQ9QGwpRGPXz3K7kGiknB7bxTvz1BUFagsfnKePF9WLFzFFDpJMCDRMgWJ5ge6",
  "key14": "3DwLuAtFFNLm73Tw1CGzStnjLYBDty9XNfC6XN1FWXwtu7niCV7iccWKLpGcKnNtofoZFzKgp69nKLca2t9uKdrm",
  "key15": "scq5RsHBeQjTbrf1MxcaAUkeJbTAtPLEvgwd4MS3t4hoK7mogSDxcavPsakgFS1aL2z6dvsu3YCBHj7BMvH3E2T",
  "key16": "5nf68Kx89QnwKCn8fsvgfjqq38QHH29jDQ2k5RUWyKbAAHYWi2eKN8HvxWBmNAJABmBppmyRxEaQc8QdbHbqe2Hx",
  "key17": "962BTDXzhdc7dNP1uiJtHrajefjAeR4pD3LmzbxeQ2AkjtzAPzBrd73iSLtwGcVEK44PKfaCVe5Kvpxf7swMQT6",
  "key18": "32xLbLU1d7adn43jygXqJk55g7ErV3CgFDTJhBQXtg7WPDbzgAdpwiqvPWQ8k5zzx6Duj4g1VNVXe3rFmBSJx6r6",
  "key19": "3Dh4WheDHp9ah4EApMYerEZSPGVVDaFzrTABPyL5iT75wF4d4nP1eb6vCHCCGFkWgFmbqgFQ7dRD6TR5uwrjjSiy",
  "key20": "8YGp4FNorDkjkmfnGm6hkMbJXAtpuFq7rHZBUtJTUWatR3aGRasbLvManLzAVJoxYUUL6qUkZAX1CZSJAZa4Vk1",
  "key21": "4bjujwDVA7mcQ6vnXifr7b8B8oJwykR9pdbD89HGn8rbu3bpWpYGWwsA89o2rz7B6vzdZH4AbhJ7yS1e1z6dXMjo",
  "key22": "RMYfnmm85GWAxYFpb3dWqLcFEW1bHHmHWX61AjSi3CemM5UtV39HV9C6zVVERg124fm8D7AKfq4YdoXcaKUbNXW",
  "key23": "zMcYuvpE42aSa8Mow1ZHqaNZAqm5wREn2wacCDNTGZeZ91uJfuHtBHAD19xLd8p3U6YuiNonZSbMXHF1EDkcfFv",
  "key24": "5MyP9h8cwRDGugw2YKpWPgvVxjALb8bc52mAmwfuvKKKmBrUviRrccGCbC6eiHJ6fnoXT7gddxHtQTtLwa9KwbbN",
  "key25": "3ds77eXkpdmoRaM5RgTACcr2B3KBqCpb3wGWoijZnCyoEf8PkjrhbghjYVL6B6yaXKGQnMc1Ztif3CtZFd5EoPrY",
  "key26": "4XWoXeoABBC6qRe2j8ZnxVa3RSaH59Vbf5WNvnrRAMTmvLmgFdziH1rJTLPLTkMvtH1o8kqkR8xE3brg1GS1c87y",
  "key27": "4unmzKaqEmmk1ezuwXeHF8FkrcWzsqspoYMhfhvH4GwaU6FJVVCfA7jUBMx2JBbAaeZTaJYJnMx7tvtz8AEX6ZqK",
  "key28": "3n8JaAc9huTYhEiNtBjMEqoGyFdrc5YGDyorRHzs3R1hT27tpNub3ikJBNZPBBqzkFLQNKT6Emdon7i3pSo6zX4n"
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
