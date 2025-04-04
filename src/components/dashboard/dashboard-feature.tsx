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
    "cfuCpMiByBQDUTh6iwWXQXAg1ipX6HjnAYhYgjWiGAc5cJLPwaHQKwBukDYwtcBFcEks6dNXMKQ9Djhhg5ztQLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w8rRNU6Njy1BPZmYwgkrsLqoBeRTQ9tD6UpN1jtrRB3FhZRAdz6Ga5ptjBPs2Crdpmz62HurEC5YV3RdVrt5iJa",
  "key1": "pL639zCRrTN1HMdDJxEEs9eHdf1G22BxtNJPxZ4vr1sWBvFhm9DFWiBAgRFZJtwgcBAc1WmSHVqbAz179YRXrTq",
  "key2": "Z2ZVJADd6cbpfdvf7CTu94tQEm9NxAcUxP1N3einEMcULLTugAFKXwXpbnuqbw3sYL6vz5pGb2fAPtazchaJJpw",
  "key3": "5UEkF6Sfu3LzQVbc3mUvg4u6Ux2u7LAhJFmoY1ekVpM25VLFG6A9dwCrCEbjufKRm5GCHVSHRWordtVx2mjZMy7T",
  "key4": "2yS5fcxN2fYtLEpWx5dfMzTr5YPsjuQHoRbZKDMZpWkoVAkaHDLsJEBtdX7s37vGHsix2UemHJSFCz8aMpo2qWbn",
  "key5": "2NpKx9cYBAFJFdQedwg6MCoiKdnWcdtbtFqMQWViAGRSXWQtLcXXNsogDA2FviduQz9mnPRBUMRgaZGN7JVs6ygp",
  "key6": "ufA9iutAvkunx78a2cwtiyL5VNYjPwrQCY7SB4sP7kDiWLPL6XcCUic46uvSJJbzFPTUCAK33g68dLP9c8z6int",
  "key7": "41eBNDuwuP1Y26bG38h8K2r5cVqV25jdDXGAtTMyrwfwtmJAWCUNZLugZHyLoF9aYZePNyWNXsGWb3a818uZ6P9h",
  "key8": "sv4hVGvpFZsk6c2tKWWSYnmQRhwSiGuy3GUeUSyk6Hf4PScgF8SPCbJuMU9xWphS47sQGNt4h9kkzsyPrQsKver",
  "key9": "49z7R4aVgrNKxKokzXVB6jxTZo7Ln6mwxqReFbvVeb9rcoJL7JfHPYbj4p2sYW6eb1E22iREP8kUsfCeintn3tsd",
  "key10": "39wYZBdkV2KBfrd6TGukbikGX6ywfvho9yJgBe7DfHd1nuThnE8qWnC5Gqe7DgP19hkxdgvxPtrgkYSwfZWYnKAA",
  "key11": "3nGREjem3g2pwaezMCR9omJhUVfuaEDX4PjVPvyWNUGEkAXuXWzo7KGrQPNATpUY9MGgvRwJTe1v1QLeQ9bgMFSW",
  "key12": "TuTFvD7yuRQmVCLRphfNpBi9fyD7toVbRFLYb5WsDH8J6GiyDXUzdCPwTzgqiNCZgHQqb2UytAF7nruWhkruWAq",
  "key13": "2heouobnZK3j4ULGsi86sRnCG95BiHofvCMWBhAejVYKcMd2pJ58QFRvFgW7cjU18zy4YUX8RZ4qSPznSFbUraw6",
  "key14": "4p29GZexcLvde7GRcEYMPtQM3yoAmERNPejWfUzrHEcvqhq93QFbBxaUrUfZuvBifQUqJqJ5bBr5P5s4zsmjYFsT",
  "key15": "MrXbgHFTRQBQWSNV6sz6GzJ3rkkkLRDXpv9BzGTnKqcNpFfkd43pN3fe7aM6CbFpt6AH3sSbXt6FvuagT2cYSsV",
  "key16": "NuBvWF1nLAoXYYSvTSEHvPY4Y4ovqZeAAFoxUCQH6NkqCkyaEMcu2hcLy8a2ZZs8wqTPJ92oSGrUzctpCWeQo9j",
  "key17": "4vZrLo8sb7JGy7RkH5ApzfQ4h1ZJVHVqrwEDNbLVoREvwxJkjFXjGuZ9Q1QWX5UmqfYhPaQXzYL8CVBD7Kk1YUVZ",
  "key18": "5rU7DRBCRgvSM2CLJe8r2HRPRbEBiBYnwZ1wfGyWGSWT9T1eU2AR8YTqMWrYitFz84Uq7WPQdvumfh2oLcmdxjYK",
  "key19": "NkJoAJEkD5m8NQL854qb9oZrMrdcdMiXHAGsir8JV2gwzPVCs1bT8GpZ6eRwemMEQjAJYuEsNkysuAfaEJwD8tG",
  "key20": "67EUBPvthYGX7KeAmGW4y5ngpmdkvkphFcsfLfXCqRdiCekLABu6YCo1ZmPVhfsdnfu2ctoSErgrGURsh1GfdGc9",
  "key21": "5K8YDGruvUY7pdYZMVWXECnfTPMA5PiNN4agqEp7YMvs6yZ3PskTLq4BXLQ5Aqen5TKEGyZ1x94aGw5Ki4p28kx3",
  "key22": "2LGTpXPQvpJSr98VUGcRhAxNMVzBTrsNFCHZtkn9tRinFwMENkzWnraW31p7LtWr3vYZYJfSBkK1936kYKFm84oU",
  "key23": "5t26qjN3QzxUGMxcmbr4TCLqE5GEXRqX1skf45Dfp7TS2drcBEFJ1jgghmwSdB1k7giQ9VSBahUgEtXgA8VhTtCx",
  "key24": "4yXN9yUw7XWY53BkteC7qAJvSdpMLXv8RfBHnYAZpyqeAPQrH6SeoxfU5ZdPMf3DvG7qsVBP3hqCRhqwbq9b3Aka",
  "key25": "i367zohN6ocxTKn8y7AFh1Jksd9u5EjQjzyLqUKctnG4hTftkaXGZ64DUtkKVPndhRfNvuR8r8sNh8mr57sGnhT"
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
