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
    "47ViYufM67wg16RStWv39tWDUysgAnzHFa8DEPHbkgPybKcAmRUAnPWdhd5imfZGb91xa6VJ75xYuTFK7b3RHFBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnUi7WkRgqG9cSu8En3LzDXrc3A4k5Pk9R68tTCgCn6j9wEzASZ5zbDu4UtyfcsDaL99ftxNmed9JaV4jzm5N2g",
  "key1": "4EWPhdchosobF5FwPQfRUbGkH84hmeXRj4kKRSkmqiUCL6S48xtpzgFNrFczw3BB5fck7bHQrAJPJUHvvdjYehv",
  "key2": "2iJR3rtbrSMC2JtwXLTLjQbLkcx7cssVJGbPHJvGpKBrVemoj8cBuEj95NvdBup9DFkPk4vqHktVnWFn7ijh8gK7",
  "key3": "5erJu3sfTwHbe8UU7zkZsBEc1WhUtqkkVTjBjsLMEVJqo9rMhGBrt485kWs6R182quXzx7QLFhreBBpWj1kdd97K",
  "key4": "4xsXKsuqzWaYiLo9LQmiTQ8VLCnZY13uT1iJEZisk64GwDBuvyoSkoGGKXbK6nvm3QmabSe7pFGGZr6qVba4hqFM",
  "key5": "5spSa4fjkyB1ePFsJ5LTNQEkABJVpBMWfkJ4CJ4F7KCXpU7bWuJBr2F4Y26XN6z5d6YcE9gDUajjGwXzEDbS8ow9",
  "key6": "4ZfEdsR5BzWQ4uUa7cUCEsDxZXtr1Sg9PcjA9pCmtg8VE2x1mJuPTbZbo2gwMdFhdc3gk3YRkDsePf7wTjv3CGA2",
  "key7": "5dWXQ9bkhSuZvTSTbh9hD1DyH7KTXDjmcKL57raGn8KaMCf3MmSiiTuKvahGZyj5HTwwd2x6jTRC78agn7GgsAvn",
  "key8": "25XoTaqw9zUmkwQ8J1BekpSRYyxYokP6rBLZrVou9rkCYGwb3h7bmKDrLJyhDg9rCpZ7jsdZaJetk4soGQEyfoYH",
  "key9": "2fnhzrR4AbuuFm9E6M2nDTWky6yZ5ZpbHFQ5MsUeoxoiVCwNHmVzNgieEtjfPAjvnrsWr5AhGpfXM55jPLaLAjV5",
  "key10": "4ssrtoPuE7Ugre5dh2TpwdUCgSMSiXbN5aTCWWt4dnhkBmvHFAmHfQW6t79nqzbRFHjNN2wsCT9ZGw6pjzXSUUgh",
  "key11": "3iZmFXGUDyWa6TcdsLfZuiXTzxYmd5fErfsqagae5QFDRdYijZmPU9rjsC12qF1DnRbpNXoTjHoDS2scBJGzJwjD",
  "key12": "5Wy3Yo2naz4N24e1zvjEMeqyBv2p3PERHCvFcnRhFYjBvY34x2P1SJ1ya5DTDmmWLXLG85AFArQNFz4rbJNEsAgF",
  "key13": "2G2bHifnDXQVSM3Yrdvmqq8L9Tt6pjaCXjmred2CwTrNdwmQjsB6tUWcarZLeqHaqXL2gtPfeirfbAmJCTAVmifJ",
  "key14": "28TsrxcZgvEfGugxyH2DzsXbtYPS7Qa7uNYWzipRJ41GwFQdjgG51Sxd5QWkFYnoYkAJeoBU8NNoYaA7qNg9h16p",
  "key15": "3WCBewC1J4LFNFMwBSwpefYbZ3UPbAuGNa1gbsAyLcbT8xiVauPaVDocAWNMGG7tHZe9YsPQDAh4NruEDNLDodpS",
  "key16": "VsG1BtYkPWa2NMnA4MWCZQjE2PJW7JGZXiCCUubi2VUrE9xzpbXjsymQjh7W23NTkvFo31G5CAFKYXb957Eamx7",
  "key17": "3xHQq5Zo1r6JNgUES5LK9ZtmPBPCNPJgDM1pJtjuLrv4fUmUnqw9zgkKLgvo44XxmPMTjPTJjuwdknQ3jH9egGsS",
  "key18": "3UmeMAgV7VEoTpYPaVxSTPfF1kGbjUWTYpoxLuFbH3FvUkd6pvMo8tJdkrWPcg3JTCnUpnjRySi3fp5eLsCprjGg",
  "key19": "2tmJvZimJcPEkVCniZEFQc9yUQ2pk3uYCSdBupzPLRitpkZxBrkdRrSaaEkSW4pQJVkXK8qCN4tXfPAfPoPoQ7zv",
  "key20": "4tqCVpgzNAfKnHbK94KBpEFQDhnBYkkL2KZg5pwhS5h9H5QH5wvwLJakqqPNsfJ5MFvd9pikBDnd18LtMeu9AMz5",
  "key21": "3QoV1YbG7yRDkmfT34Jpha5Fs1W4HUBngFBPsAMu4AxjvwffgTdp3oKE2F7EYyWFYoWBWjr5p1Nm6kpYP8y5ECxq",
  "key22": "2emqxsMyVg2PEBwZVq8iYPbcSpT1sgyR9ByjUVQQkw6rxtbpZyWTN4kP95Q9JNvn2Qs8ywK3hTDCvEMW1tKERUvT",
  "key23": "5J6yj9PDZDrvjSs1ckUBaNaPtXsXAAeoFVae8jk7BiuskhYxDrQsDmuTf3YUPNbLtmGQfE8ejdydhGnbi6YPyQxc",
  "key24": "3JwdQnqWjhi1bjbNduY3adFTd9d8GAkEooAMXwZvLrX2ku1m9maZeTRPVd3U13uxCnPhYXY6d66QPB5QLNkaZED3",
  "key25": "57YzWQh5do8QLeXWNnjYV2YYh6fA7inGywWFVmG6U2Eg9JVMUWFRk2gYtEpmsYBYyzavBkxYWAzNF8LDSWzfGYGC",
  "key26": "3dY1MLKyCFpg6rFtn5zQigCXTUe2dL8TZQsfzyqnfzCWxE6EUB4jNPgc1UxvWPXmpoXcctw1WuuHyVPEewEC3RYK",
  "key27": "2XjaRiazS4Y74yFJvPUiU5ENhw6jpmgHNgdv9hjUsWmjDETosc6AgbxCPk3Kyz67sYG5JiNDVL1mo8J6fAfqAdzY"
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
