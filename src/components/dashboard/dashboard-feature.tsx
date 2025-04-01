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
    "2NeCCrTdkxgZK4J9GjLhWDR3U7XMB7yeP54AHBd5gmL13A1KQJK5nwyCqqoDmTsX4mPezTXqgiq1yjqkWvjJdttL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VJY6ikwt2hR1DUXN9G4jPYmw93WdZJknCLuT29NQBPQGr9YFGK3oXdTozH3utV4JuNj8Ks8hBAwaMSq12ejSPE",
  "key1": "xPGtQ9oFbSqnVBMkLcJobVs272Su8fxTZeSDsykKohswBrV4CQvrpCRoMiJRm6swRQXM7Fs1NSKgfRpMXYkyJ9T",
  "key2": "23p1SauwCgm69Uk15PpnY8pzyN99HfrRUsLcWgkfXA71x2PC4e3iAPABKCfWmvRzsvM63s2De1Rod8UcKASsRGdj",
  "key3": "2X9PWXvw7HGVxMc7D7wWKbgns26cGpWvMeKzxyCvYdFzdZ5x1s7rZvgE3LtQnArHnJ2Rc54pyVbrUwBj7ttZBJKM",
  "key4": "5Zzggmaak9gdfijesXCGnoR8VwuQg458ySpGKfPdYSoRzVN75QiHVncvvKr6zb9jpJvRx4m4KEidRyfff2nfSv37",
  "key5": "bhz9GbTrzGpGywjnnWStWbDfxwYnWjEDQh5HNDAFw6ZuiBmbwe92SsSf4GpR4A5zmjdrFSfutXmFXUtcFLakE4T",
  "key6": "5mgW2R4twHqBU6kMbQrhVPfUeEivpw3UtqK9EVjRgYkZeDGPfn9p62uCu6WrGycKFdtNsR42wutRXbL6otqS8kzT",
  "key7": "4w4DaqGxfHsSMtUdH5KVyZ5bSGmqcFkdKfyMGgxpk32BsUKm1qtPkHmDjLmAg5pPaXF2Z4t6nvdtMUKC85CU72Ci",
  "key8": "54AnhNwyNhTrquKmN7FcPqaJu7sQYYWkBEGtKbkEEdAmmDyZMbz682Dexpy4y4dqLw4paghNKJ5durf2c1bFzybq",
  "key9": "41FZxEVk8tGT9tQMtXr3msXuSrC4DBxM9bEY3J5FQCoBLTACdj8CfTtnzk75BySNRiX6MngdfyVhsDU9uNSQufW2",
  "key10": "5Kygk4cTZ4PcYcKvhp5YQtdqWmuFxz2EZWQHqm4AMRn77yudaqZt6ZfiSakZ49hnhtaEQeYRtHZ11mn9VKRd4fBy",
  "key11": "HdzbTot75iib3g9UZAkpSVecWAcsUKXA99D6ECoWHLrVoX1PSPsktTvUehBaFzy7exPuZV3VFasXuRTSMGi7M9N",
  "key12": "23VcDdMDz2AYcqhJBLsFZbueLra5eF1EGXkY9urR2ffxF6JZ13vPx7Yop4LwVuQ41g4cjitTodwACwCr9xEoLATD",
  "key13": "5R3S4fQ6GBEobNqqLdKaJbVNzqGPaif2RzDpPMuUhDsJ5vmS5ByoXt8mNsjZbEXdWMic3ZhdtU6wPBVjpgLfkH8K",
  "key14": "46BohX9WWDCRf5xQM1xXo6riMPNqnLz4S6pQ3EqqjDoRV12tYJSgw8C45wQhBM2bpujGAYAwaEkChvUb4MykWoAA",
  "key15": "2XQ22gsmEAgWPiFQggaz6KgL3o5dYVGU9UpxEPbbxpgJJQnKzq3KxPn2HF8fyEMAU6uCcJAQgjN4rAFTMZWxWnga",
  "key16": "3UtDbS2T4rkptw3cKuMFuoHcBK6ex5zYduCsoCt3wzdtsukGkSwh8nYubs8nKBbPWL1ZWyvPR6SQ2J3vLUS5jvua",
  "key17": "3Qjs2QBVt646jUL3nBwCpucB5gH29mJu8x3ySj8mhUDFze2UVfWRarAU4Ta3ZevUHNehAN5EzETA4eqEpcvUpgq8",
  "key18": "G6Tv7R2hWivvgtnWRyhFKmLERJGry1hmj3XGFdnwzPZmMHjRLc6Sgy4Loc11ZpaG2vKMhJYCdT1wDnazbpWrjhc",
  "key19": "3f3KsKmHhcMbXb7wM2FXaeiwhQaBYLGGmS5P1e7JMqfxWqUFJyjx7N7hhCptuZF5q9KvKu99QeNPTAK6iU9AU6Sq",
  "key20": "3kLmp6uoEzicE7sKssaGsKpNqSKKVRsn8A1p15qpZfW1sFzYTiRT7axFNW1NWBydjHNmVXuyGBhyqGtc5JDjvNz8",
  "key21": "Phm8mPLhW4zddnYyrhpMNNyCoJPq2ZHMf9WqE7vFarrg7gY6DmEGXCrErinTMHrzC3hV4mNTFWWYFCdQpGyTcku",
  "key22": "2oxn3W4pr7tJsh2b7kcyCXNpiM537YH9K3bzS2kotTo7rg2YfeRrAR85vfkzSM1kNxmMzhmPZ4EH27M1TD1sy6gu",
  "key23": "2FTRVweihewi14281wu7P83CxCAjj8S17RFuBBXbVCo4nmQSJXyWj8PNwLNX1DLijUZsW81tna3ydag9wFf555d1",
  "key24": "wFcmQT3XcFWq9P2xTjEjtRvLB2Tf11RjjX8mNEv7kjuBEvXmFSt1dLSi6cJUTS6jFwCeYpXLPVDvrCD3RF6NgAK",
  "key25": "n1UtGtta8pbZbkqWnc3owoB4hmvQXFEy2LjC8anQrx5wJ8u3aYVjaoTFGKDuN5dg71fmH8sbUYmGA7zJC8DRaAS",
  "key26": "5EGuqs4kTBPBrjj82MpfhubRNcnSKQGNX4k8SWWijVbioAgX3iUajgpbH63iKAn789KSgdtVpK1Z1x34GNpFeBGM",
  "key27": "dTnYWTNmMnvVh4HrMwjb1tjFzaUuHqh5K3vDza2jrQXB36suT8rcNijqMuaZ4FfDRS8ebwbYNYynvkuYLHoJ4sx",
  "key28": "YLnzuEGGymoB7s9wXiiRYBzMeWhp5Frs9UGSEhE3vsAf8gsPDkxyqAJKqha4vQZb5ruBsJqiquVMDfhDJeyzgAt",
  "key29": "5RFnNRVVVv6gpZui4K5adB2sAPj52g11xfq7xbuCFpM4oacg11o9wzpqjVoiVp6mXUjrmCCgfxkFv8xjp2AMDEei",
  "key30": "3hkijEYmpusQF8z5Lq5TtFF4Q25ipFCqHFELah9EM75JGi7Wa44vhmQ3aH18DuwyXcTWWERTJaptyupSCJHWiSEP",
  "key31": "4nGVJVyEoPESXyfZP1Qt8MudoHV5dYRD4kz3rS39mTwDAqKnRg6AoZYWib4wGvEk4uhiiegrv23oSRWC6ymTiWBv"
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
