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
    "2SduT9dkSK3Wrkm9wjsX5MenHCXhfbVUn8af74aB6RvnatDQQtuWEGxJjGvVfC62k5EVXtUaxMXmNj6r9GLStVfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfCh4BVbBQ1A8zFyt9Spp1b4cCeaCXSdgQ57orhPTDnP6LZ1kTFRteuPrh6bYihFDpZ5NfB2EpE5aenAH2P8e7g",
  "key1": "kvtqStHo9GwHnNJzcrw4VcJwpwgTYk8WQAB15Uq7Dk3u3bqQaej97e7vLqEniLS1it3v2LXTpAx9jSyhk4Z7GSH",
  "key2": "5Y3Rq7xsWjJRYRHNbsfPmGeQfAt9YkvFLjwJ2HJqSma9YUN5vTmdVbE59erpHXijWh1jDQmYy3gbLt4rC3sAmTxL",
  "key3": "368FvUKBkuGbYJBLYeyyGXu3iSS3KmkJdoLdnmCSfAE4QYvz8i8sMBWyac19sYxhJ3w7y42EJsuYcjSqrH5iG6Mi",
  "key4": "6MomgCFBUibaj43xcusz7KWmrHrQKgkwm4k5YMpABE8WCcYHY629N1JCsX1AnKf97Dx7Jqm7ACncwB2jEkB8eXu",
  "key5": "5ZVPMQNtL8mTDufEJ2Wrv3JLfEcvP9NpYMp7noW5sMJLsU4PPp5oUpFkVQQ2aMRcbRWzWWkp5HVgjzQ88qQdwT7K",
  "key6": "4rR5aRkwMufoL7C4MHjQeYcxSSSUmiJhBsidUHcsVfT7FUk5QL5e8jQvPeRE6TDxP2sqMEQR8s37fsqrm84UG3Ee",
  "key7": "4ebtpEihj6iLfPSoo9yKBxCGHbYQ2VcSk1WBmhQez5zoC5cDTcxiXzTutoVCTduHjhZyufcwHrAbZ81Nmb7VEmoQ",
  "key8": "fXtGsVyrxtqv48C5pQnVjJfpDKAauWCrRj25Vtn21MeN68BZ2kyw8ZSteMGhFeXjGXXjqqitoUa2xTZk6eFXpRN",
  "key9": "2gKoNcrCz6THpWmLwCMhYA1BPb19XgfAzeuamLdpd9sHXV8LT1k93TjDrftKjQHZ5BL8eZ4nY27XaA6HugFNVWsb",
  "key10": "53hLjbMgAfzVkKez26no5jQ6xUJjxGRvWGhhXJpbys9qeAPLZuwMPsVfDQ731gPsrXkEkRKjfFgYvTNRVZU1U9YC",
  "key11": "5CzSEUUGresnCwecaFyB2GvfXDKstNbqUA1iRJCFgqutQBoaxRBP8ioWsHcsn75tSGfqdUUoR2azo5ukt6mQbxSv",
  "key12": "67VtEeDL9CzRESUYqewsSw27q4CCNjHoR3kFYJWPk53j69Cjidt9gghWjJHn79tvkeD6vqAzN7bz4ivgCQ2M3fLk",
  "key13": "5hM2kmwB53MM9q6iXh1QQEi11uAPSNBiDZU92f6NBNo8S1yFFRLev7wqYLrGkEPx5JRb9WDC9z8J9szCdcv24Xe3",
  "key14": "GNRMbqnoGxNBfAvCWmVc91pf1utfCsorhfKr6ixk6oBpGcWKoHjVswQWBmVFLCJ2YL2YH9HrmrNh78FpMxdEdnC",
  "key15": "5LYnha4RmN1yFx2JmPz8AAkoDoLyLB3EJrt8txte7BT2Dm92XyKX3cMbisVUDKKuQGZntWSgtdYq4g9WvX5ZUomH",
  "key16": "3mPXuE5Ti9qVS5yNP9ynBMPZGPNYo3NvkKrLpnUTRHV2QNPrLWrQyuJEZrnEMyaYJrmabfs1wEmwqUbZaknLjLoy",
  "key17": "2bBbXSJfEhafLjVTm4vP17LVAapheviNTmNXp7s8U3xHHntkcznuVqEFUEayUA7nhPCCq5xkz4uYYWNKgbt2ve81",
  "key18": "4KnfRPYrtkoucMNzguXMXUjDi7ZTZziCb1gjTJU56Rtq8LCpZm7ZkehECq6Zt3sJSQ9TVpRWrJpfAbRSfbFHvzHE",
  "key19": "4P1TWHEGgNxAFhnUi8FfRtyUiNDyicr7fL8tH87d2fdNHzh7UEcqd4r413PcEjjYhNarKaFZRUWYf1deNWd3sJYa",
  "key20": "4VFPBPvHLu51hW2beJTNSyTN637JZXe79supYimTSuP1cPA973Pv5D9jeGawnKAnWfvrRu8MjPggnkGPzSuCwd5j",
  "key21": "4WthBTPX2gKfV7RAG3pvTsbVcMjG6SPqiaa9pk8dTGwmjigKVxDEKkzRe36vqvpVMqS7m3M8XGDDbLhvW5kW6t9X",
  "key22": "5cysJSpuBVzc2gZDM9mLqebqC3uh8wLsN1YTTzcgMWCeZDJVrQWUpRsWCaCccz2ZNGg4e3rxNK5PGGJwTywARcJM",
  "key23": "4DhDYJ76fEXLUMNbAXPVFFDdY5hJuRqe6nTevWgNFNtr73hahe6jtxyJiqCGxjAvEEPrZJ3zVX8JTDEZWZxArioj",
  "key24": "29VGDXBQ7CuPkoeKnnv1He9yd6MWShmxopTUXdfMRcPhrSHr4xD3EbiZ6gS75FR3FfSU23YH2KE938r19rSeQ4kJ",
  "key25": "3F1oWp5SCbdMUCsL46XP1RbvTzK5aKEb67Zm4DEuedFUDUiSfvYaJoNDNbHip5jL3TfqB2ugLDniVkRzmRnYRmEZ",
  "key26": "52RjuXRhC3jqHn9x5kNts8KSTHRDDsb6NvL1av3DvaUaMxcgt9eRsiT4NurRkUn4FKMX2E8qhmQ7eDCdHt3anHCP",
  "key27": "5PsFtzxqjfSWc6FLqXsE5YsEqGawcMRqH1dY6inY2epQ6xh1z8AUbva6ze11CXoVgyrbj8rXwaDTLzjPnrKtNeyA"
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
