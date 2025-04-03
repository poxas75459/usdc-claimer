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
    "j4LoHVNsS5EcMni4vPck1BSGpkHCahqUsHRB8ZGBMYgoNRM8x8Vgz24FCWoE1mEHBXDLvDpJrjS3DPsVX71KkYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zkeJCqkLQkXihpaYkVS6SVbz34GXc9Nq3BxQWWsQLUgShMc68BY2dW6X98JmWeyPP5drYCYvTPXzDeiUYq2QJ4C",
  "key1": "3VKm4ydZephKqyqYcrhwFLKXeQ5wA3rFtESc3VvS38AZwSLeB5B6yDGrT1HCQnC8FZTtZLjK8G83Q7fhorAWWnS5",
  "key2": "5kxJ7E3SeCFZRgea3Derfh6nesP5zNJ4yEK2buv5WLYmN3pdrb1XihRDJ1ra8ybp73HxX97E52g5bB7khZj3xsMb",
  "key3": "2EFCfsmAd4VScaFLSGJ1uVbUxSKTHC3zw8yuDTepSiP1fRxYmq5impArhYmviAAhMM53a7X8QJgFRn2Hng5mctd1",
  "key4": "5wvjvFGKnSqX2RQqSWA61cgb6ah8a68x3eJ2WNr6drkKrcZDyVuAw8WxXzcP3Babn2YEvNq12kwe4jHVMvze7MdG",
  "key5": "4VbQSmbLuRUrgMfHgnFbvQRYGUgHcwYxtrNQcYQPo6uc1HTELP6oT9UqFcXg5iufeEXZN6TbeyT1wLTdor4jf52r",
  "key6": "5RxkorcYDvd3SAvCdxVxdCxLAD6jUf1gCcD3onRSK7qtyUPCDdtanh6XesuPSa2Rv8dyEHCt1qK5cSdE4eXgmoYi",
  "key7": "poZV24Ro16KXz8jx8bcHhgGJXwb6qQmBE6PTTNUHLomeHKMrPSkkzmhbmq3bMMeEtgPcKbxFtACmBvU4XHGssnV",
  "key8": "53igjdRLs94g3qCZUhmNUXwqyb16id27Zds5wGzAvuNj3Bk69ovQK8JrAE8mruHPiEVr5wdicSQXWyt3eu6npHSf",
  "key9": "5q8et33BuaDTpyTYhtuzWU3FRbBg1pSAXdkG2ZfLdD9dHwvQ8dpfAsK8KpTRD1nYQ6JCQgLnKRAGpUSk7qV2SZ1g",
  "key10": "4yssQEN8jrgcvCRU18A2ntKFsDzS2EE8YcxSBJXgD5LFmZeC1F3PsDj7orzbsSHtpTDHX6nYcd88vYKLnpViJaEC",
  "key11": "39dNEC2YELfVZR5smKR75VEq3bpcacy2AxQLQdQTaK3FXf2s5hdFStnjZV82Vq62m3NHA6CPUjTyujYoV8pCTWk",
  "key12": "3hx4WkJp2dsqYFB1Jy1QVQ5iKsK6dzNnDMoVMMXAwqEHupDywzjfmi1ryU24xZJZeQT4uBqH1QA91Vt18cBMpG8E",
  "key13": "5p78KBwHQSBPZVReTCs2stpao9MctGaPFWgQCERiEjN7hYpG5mwAUWa7ZAshkhKypHefYWsXNkd2Xzu6ficjQCi7",
  "key14": "4dnvE2rDhvtdYfWkutHg1EviEbkESKzohi18CGUXBJGepct3Zf6HGFs9VrhoNVkxYDUkfUrAJhRsCECCiGM2MM4k",
  "key15": "3nEVwzR3645tpjGrkhzA1TNfceZPa8TLgvne3Eac8HQuDeiYETXFZhV59kJMacQj8KDemJcSRbz1JJ3yfVcv2g26",
  "key16": "3SZa1kT5zNYdatNz1w7w8pz9SP2t8A7PfRdc1tzRhxAoqSroUxXPRtBY3P5gYvYHRKJ2cDze7QDfoWdLWRUZ6Zx3",
  "key17": "3ipP1NzN7XzVkxHFhJjPcyoSYyc3F7xC4vWBh9yHndHKd2iS6KRXrXdbA8bfz6Ya5veA647CRRYDu8h8TqcJqmKT",
  "key18": "WaQxHjkvAm9HRwV3jZHbHuLmoEN6ekFC1Kw5bDDys5Cb67WcuTTeavcef1Lsau6SPQ4Ausn3LvaMMmRwzqgLHM3",
  "key19": "RNy5TV5dmftbPdafWrQE6XRJoAXJXVuTA81zDUVMXh8y74EMzYroS3pH9AKy2sDVRxxe1ANZdXE1GdgfRJkMNQz",
  "key20": "2wVemjWMAoMRGJqAVqPnsGrybPWbPmNr26VYKe2rR4TASieyHte8fdVgH3YgZTUe2iXYQR6tGc4Se9DzpPPmbZnp",
  "key21": "2FyngLxq2FcwuiBcb1sFfXWVRdtJUDr8GJfoJwncYFEquDUcF4NiNXjNMHs9HJwxwQG9XPjbAdUjMiKuZseYoavx",
  "key22": "47bLJLRNqTguFEW58TWk87uRW7k7GWLEZHbaKfuznm275BBVX5G7A7qja7gRAmDgd74kq7CpDZLwdHFnrcL1zB93",
  "key23": "4H9QBQXWgknuPoLiCxNGMiexY1J9GPVzUMNV6xFMfezMuVYfzF5Vu4fiL47cmwdpJ346P2eMcte2yyBouADSNtme",
  "key24": "38nyDaDkLustiZRWfPDJwC4rJDxgSQHYMYaPW96nHuZtq6N6s1JDSbQeBG7ZPJgRW9wen5tyP4aM5poVRBLqBHkT",
  "key25": "5GhYMgycaDgX6Vj8uXSGkSD2ucWn37XbB1o28KuLikSem1NUgrRxAEq1YggkZTjza8wMQ4izinTv343XLeq9g7A1",
  "key26": "4xtngwCgBwT51uyQYfUom6YBhrBBc6qpUu1JHSX1k5dUcMpP84jHy2dXZam9n5kf8QdsKDBYkZTcbpwx1K2jTgSx",
  "key27": "47NL8rT3fxrsvdqiDWUMRwWqsoLLbppu8ARwoubaE6L4wsFhCDaT8gPpUMTyhBXLsJsBSw26rtAph25cXEhFBdU5"
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
