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
    "QaCTVTXHuj7omXg3BQSg6WGfGPbA7be9qpCFD7VzauTfhRLhMiN2jYXgyMSmi7AKjLLXV4o3BB9Q8roD1NNAjdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5xUiwqckS3FDB2ssrUXGWv4vQQb3BN6bGnKfQZqbmZnHwLgTpFbAN288CEqNo21RmQJXC1brTZV4acKhYPgGKw",
  "key1": "4b6LvGMKvrHVnMAmoXF7fsAkPKXRsAvUBD92Yho9RQwzXr2QYoQysEQnUeMEAJVVxBhunXDJtwg1L3sbtnUARGf3",
  "key2": "xmJmCApwTkUNfGkKZ868vdDtQ7pRs9sMQjBmSuXiJs6s953Bo4nMboeSC8hjahsagMMpC559HSLC9QtwygMHTgM",
  "key3": "xwUnEpJJnEWYZZyLik7x3GXYqaUvoNQMZ42FbE14fsyF2uw636RJRppZYvFrhhtTjoiYPc7roUjMZyduFyr8Zza",
  "key4": "2BsMpkwXToMd6YcxCAVWvvxh3Wks2DdXdAgsCBCKWd6EeffxqgZSDp7j7NKUHem3RxPHHBGDU4misFKkW76Rcko4",
  "key5": "4AsKHnoDoiJiGf7m1EjFn82adf8ShVeotMMMJNym1kFWcFdJzxcNEDFMWQgTXUMfZyGx18SThTjAKpjCunWkR3hB",
  "key6": "47NGhx9U18pkia1tEbyzz4qqL56maQ1WQHyM2bBXjjsW6yHZ3EHoxVP4kHDFh2wDrX6cFB8vuZMachK45AguZG1V",
  "key7": "3rCBPCipi2FWyJPqttRMbmTt2fugePYjaQPGujy7HThFFJAY6kkS2j7S2K8Vd6XDDSs2NfKvqLPPrELbwfbK9qFn",
  "key8": "2ZxySdnbi74AazDBCuRV6b9M72nPKGhzn4uDfdy4hGdyvYbU6ywFPHud7feX86wgu7wwwajshMaHAHrkuTMYneG1",
  "key9": "2d6vrraUey3taP8gA7eWSesVYTekn9P94N65aFe816St2bvY16vjrBHJcdri8o9nv9WhvAuKQ6f5VccnnvjS9p9H",
  "key10": "Pv61gCBPzWNKCV94rtD7p4XMAkCcm9JZ6xLGkR9eDqaK3gLNB2VXvnpoGCS6JEGURfb962R69hLknERCbgtFkP6",
  "key11": "2NEgkW6oRLwmDZw7cNU4wi1qgmZtnpedrpJfBJdZrE6QnQvkspwi1Pe7p7cmU5dayQ4Mzzxcp8uaK3miqh4a78Wk",
  "key12": "1YCt9ijJTPuN15zCUW4hvpHPbpp3qaAXCEyXVZLjhaRgFzqmB6AtPf6Jf9JvsyMySrxx8tyqVPEV3MSFJjXCf4N",
  "key13": "24gwmLdbQbYiE683HJ2XzVK7MD5a3ZfopCRXmE64ApWj4Atw7wXqApdD6AJaKcKpU6kkNMNf1JNrhnL9V8SyRDAX",
  "key14": "3w73x1xKeSRAzFUsC8cWVx93fAxC1J1nZk8stqCzBvWeLQwDQKNr2E5LwzPFxBXSXNnt4Ls49rqf2GzLxA57wdvn",
  "key15": "tHPmuao2mWrynVDVaxYsQQU1vC7tW7cKHXHauPYPTZVp81mCNDWrrg4atqP6UgF6pRpBU7DA3NMzqqE6g9AFF3H",
  "key16": "2rTwsdr11tEjVh9atb3LhfVk88YL4z4MFCDFQg4d3UgPFN5q15bK9f6Ns3UMfEhJE1Mr7ioMrZxbw9TiAkmwtBd2",
  "key17": "21GcQnVs4M7UBE62tCpzQfW9gMGhTm7zwMqW8GGAMLgBw9ACkk4dbr8ASddEyQHva7eZSoVrbVYoXrNnuKsA67jZ",
  "key18": "4yARNvCqtydS3qLrnUqCVN1DXFFaw8beRKpjcLVpvn676HSNrNgg3ZmsxavoXbrt3FbRLPWtQx6pDMmPpoBmLjra",
  "key19": "4PoRCLmidvGe51PDwwatRZqVhrUX2GN7YtDeu6s7pBFexYP3SREGb3Yz1mHF9vFXLkAU1spW8RMky52yChCyuH6c",
  "key20": "AAQzFsmCPrx9mhBC6Yguab4jTksdjTTtVWrNizjkNemTbaquMoxcVj9NTGfSwcGd3enixkk7s5qUWqNEC6ANzoL",
  "key21": "zF1PRYGoxqmxKFkAMwx4sMeHStHmasBKfCWdxqSrWGkef1T3Vt7vQ5Ua5cJXKbadQTU25SsuaaCFpFBM8k3RRJp",
  "key22": "375pdaZu2nDZeXsLujiEbPgZDLieY9uXSrMhAWwfaybXxeXz9WAKgE3V35tr8EhuDn6EHE28s8qWUFodhie1BpjJ",
  "key23": "3mtkQSBtCx91iBVPUPY9N6jcdtgZcp8M1k91bQk7zYmgKtvihmjyeaxQBqcbtskHyHd4mApPV475yMTuEg6ZRJwg",
  "key24": "62Ga5vo3GBouE9LtEtHtjkDrDFjhGbYz1dExYSNwkEU5qNbxHoRxMELhD5ifL47kfn1iWDyPbYRhMxaMqEkLqfgM",
  "key25": "ZgEJEkkv2ytCMaWYoEhdrQqPZgi8JwE2rahpqtcY3srkmY9vG8fEmWrGeKrysMFoJs5LXJD4kKih7rmK9KTfcsY",
  "key26": "3qBtPuA9upL4Wys2P2m59dHpyGb6f8xkMcbFJhfrLKZEGrNseyjjpNQk9g6wUM8XX5Ubmva3mUZyAt3q7pwEVFXh"
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
