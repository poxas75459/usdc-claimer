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
    "2p4psM4prVhwtPVeNa6NarZ7kmZA6DgutVFQ3sszbshQTequNtp1i3PRXWEmBpfq2R5C9ipPHih91VohtG5xw73P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYnNpggbChMbERKnBQ3qyfquU87qReiGjPuKctmbVKmPckRvDAf6JY9GjdxedHTp3AMEsx9Mga95mhLUzMq9XDR",
  "key1": "2m163FoQTa19GEmxp228iq4YyakaH5cgLtLXKVn3a2YYQxFfZx3XWywt14sdazTJMeoeJBUkkuNcsZPMJsNMzfaf",
  "key2": "3tGi4T3ikkN8HggPodELFbB8AHJKdTKRjDeXCMQyZjMWHy1kUFpwccP5bQTxpkAfqVoSfkt7EBidVgQ59WZY2KYE",
  "key3": "qDcZHQ1cBUhhUQmiCJdy7iAydaUeVAs9EHUQtTtqe43rSu3BrpnQDde8w8CedgvKv4wdEEeu9SbP1PwANepShKL",
  "key4": "FvfcNzyc3jH2iUbtcg8FMjHt2ULV6Dbc376XCVexarRKNAGrRqoDStsfSFXdvDsBnwuH716SvVFbEUMXiGzTJex",
  "key5": "Cw3QFN9qVD1UbxKGNKSMPqojkGV9Hy18AVuXxzjKz9hmTD8XuYHZpTN2MMf2iXu9gcupzNtkaFPejGYgoeygvU2",
  "key6": "2eVUwDH1VK8zRBtYaJBqTWZGxvPVfDq1PmsVx9ZY4BTNx8qaRzCvzvfwSi17krg3DKgaLdR3Y4WUt7WWwH7LarRt",
  "key7": "AUwmjexRfu2ZNH9eoEGddvVLBr7fK1z2RUGKyibNTnNvarhinwFu5FqNNFe3QwmTmd98eMxDEdEng5CaczEk3ix",
  "key8": "5KwktcVtJ7k7cg3nU3ZHqUuWbcB2ic2aTtNyagT9HFYefUtgmMy6dd85joM6rDUzjKpYPzazLjTTHtTEeDmS19wU",
  "key9": "4wdjwbvY1niAzxUv41uxVkw97zQCgkB9AaDgSpuFd4YvVimgdxRHb2C5RBRbSdszACZYRo6HiRtDYu2vNB36t7Sy",
  "key10": "5R4MtzBdeD8KmNMvC6rjvAU2dpXk5gmpzzvFEbKwXDHjkne6N2PRb3adHr47PBKxxyexVpjHehqrv8Js3WMYM2dr",
  "key11": "3fQQN4bCY1hCDxo7n8ZkG24uXeepH5VzPRaJ8aUzHf3XQY5xXCGZTjSSNYJZCsb1XZQWUyWJ5uv9gzAK5kcYRpWE",
  "key12": "47YqzyBZ2H5cJMYNuxK61FVb4WNaLGjNLfNfWiUDXxohgW26yNENg1e8qT2GB88uzUBS1AqEKdtUioGfxkDVMSEt",
  "key13": "GDhp43idXKmNeXzFqwQv2AC8YEAwTtfq335XihEDb1jEXZm4sQf9KjsVPf9xpeK7vqfuqm1UNEgKkNMfP7xjzjN",
  "key14": "2iwBxojWqmu8Su4i1Uh6beJy2zzVhWJbwFBaVqHVujbUqn58UAftwFJz1xki9whsmLDNYAPu8S3aYzAee2JLvEog",
  "key15": "eVHYLb7PjWxqSyaUJUNqJET4gg7XaoT5BKjNaRen49YfccAT1wnafUvHVZj1uE8D59SoBGCVa5kjErupSPRCMBn",
  "key16": "5C68oiDR8Y3qTZhSkTtdcPKKYuND85RH1nnNhsxguts15nv5o6q3XpCQLSWMPaPHcW1RRMkJtEyFM5SXAbziMjLy",
  "key17": "imbZj8CBcrJi6TNqTw4eAUfnyk2r66dAew6PayDTTsi9ZLumFNwUNjZK8JjkcHvf72fSvEZ3pq2QHKXaFoqcSqA",
  "key18": "5B8whTpSbpGehCUa63xYwLEqRtcR4pH3xhoUEDUzoVhkiwtm733yAft8tLWtumCkUn8yRfXzTZNKiir5bZEaEnkp",
  "key19": "59HD4rWaqtmsFGLtiRTtwrN57qRTesu3vDUCsvrGdgJQboTssY44MSDhm1zA1V4MJ2Cj3zghsxHMdJpfja5W321c",
  "key20": "5BMmPugm9xFCNMngL7SZBBskxNXVzjas8ByLwCgsD4hgpaTNAD9uX6ZF8bWBx9nGasMHoVsackkSrJxntJoFqALW",
  "key21": "2gJZXCVCu28jn4bZQkNMV85SSb1ZDSdHniVhwDb73LDDTT88PdrGcvdb7b5fc6QKJfCXFyaNNgrHVPcSeKS3PP6z",
  "key22": "4gEFXMfabfF5GR7nh5PGNxdrPaFYUrwr48pE5mpWYsXSSDx2jxxoGPEPe6acaQYE2BDZNKTPt4UeUdcA4dFzfnkR",
  "key23": "SZkwG9k75pR72YhHs8HmRqs1cpBbVPL9uvmEPVZvessJM5DCNdsCUywJxtCsmQ6NBmUX3BCAoiQb5jiGmsV5NFt",
  "key24": "5cvqT9L5K1RanyPS1n3t8Sbg6ag7Drro7EF2rqDUL8wPjrpq6xeBCkvu56n7JxGwU6Arksg7jubLkhBkKH2Uzeu7",
  "key25": "4v9Ee3pqkmAP6uFUbSZuCv7ot3oJCBqFse8FtDrCgMxvReRDuVkLjckmie5VMjMwB3N1MBbDizrbU1KVM42Qz4TQ",
  "key26": "2k8c7R7UkMFGtBjtD85faXSyrNd2UXvV85pmmzScgM1t8TtjVHxq3YNs6Po5fFWDLK51f2vixE8HWcFHzAY2GYeS",
  "key27": "23mJG4jeSEUCCX22WewrKWrPLPeWWPMDm2kfyKTKsXLQXp8neT9MuLKBeRav7BU4KMRi3mt6D3EkYhVfjGHw4LoV",
  "key28": "39EdQJb8GxGMAE8Lgrbo5dMXAmk2PqPMu8mMUipTP1u3K3forMnpzf7zpg1Uqo7JRVQHuQgRtYGipFkUUZCi417v",
  "key29": "yUAJwPnC3io3oG4pTQynuFiUpCAaArMsCKEPLfP4rrRsRqZXExhgMLT1hAZxgxmcPrq57PTVzVH2oswnBUrxM93"
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
