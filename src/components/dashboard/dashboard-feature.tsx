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
    "48BJhEUNBeNy1YUTXbkCSbp3PArssyE6M1ydFKMrnp8UVeWiUzXko3pP5Wj513C2fCijEoxMfCYhXuWt4QQsJnSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekbYRjg5t1WBqd8jVz7Zg7BSAQxRnme28k73Fot3EovpQEUFsr5DG636tFK4pbEBN26s311VoECtHy7teUSxDj4",
  "key1": "36c9HRDgg6D6ffqRNfaQY9S6PhxN4w22kKDgdBwnFbxSGmeVNk3kn3aVvDZZCR1AdV6cejZbSKNnPRLcK1qhfxvt",
  "key2": "2cdaYLg7sVdfD1ee9WnbzEjU9NYDax2vuuN9Tptk5GjXroj9qFSg5tT1Gj5nPBAuE6dietnkCfcMQ5gong9wssuz",
  "key3": "38ond2qZMZUz6JSjMQ4dpEh3NETmyzGJQvCVdgdfG95gXt6eDcf5eDm9TD4c1gNSfgbSDmwFYGFGDEHqDM4aQaf9",
  "key4": "2XJnq7msL6aDthreLgfmiWrhhhUgDkaJybjjJdC6VTsm9LSXWMtmZpG2D3huFSs7UGEdrYS87serJ3zAnJUJuwtu",
  "key5": "47uJcrNS25NGrvicZtpHqatJGzQ6MdfYDw8Fx5cSHmrGX87DtL2RNe18QxzABFUQzRvxwjrzWZoS2ZvAEfVeyWoM",
  "key6": "3Ywr8TAZgbT1r1E7M3ganfAyuY7HBYTqd5MhznA9SbdFh7KcgGwj66bGpSfJkKn4AWGU4nZKCm8BGPSghFdJQcDu",
  "key7": "4cnZf8LhJwnGrrBrEcCyd7eHZHQN2HqvvNDqwCsfnJn5dqq1URw4EMKSJ8ra287PBACwFbwRoRrYBpfti7T9PGTV",
  "key8": "4fg8odYgMD7RMCnGkuSmVsCHzuVMuPF3R7dcDHgjxJhsbagiJFhmjoJqDiGtFBWFh1dZYYyA613f5H1ybh8rQpqC",
  "key9": "3SwcrRQJ1k2dKo9LZjEKG2f4KcjUWEcFrmvtQojjstegZAsF9n5PnfX4V1QWCcqEDNGKkadYAFE3f8qJYBtpAttV",
  "key10": "5cgghHDiLeZ4oE2W3rQWN6ipx3Li6yazErTTSmn6X2x1zsrqojQFwM7d5BdxNBehCf5TdGzRwUzmSNFc7nNL8A9c",
  "key11": "4SnsiPQ719SEQzi7smRjbS2e8LKXSKqDoqrpd3m6nxjAouFJdwYBgVSsZggJcHaiDeuiqBGgm82oNj5E6Asy9Bh2",
  "key12": "3X8j4HEefZDvggoNrpSruYJnZDeKNBcwy2eR2ynpwpWE63DRcVCeLgMJ4peXWSDpnG55Q4ee3LbnZAJJbeRthyNw",
  "key13": "2g3znLGaCg5kLUGemj34cB7fnHQdTFAvdacg9A8NncBu4ZJTY4anJ4zot6Y23cHyK2EpRZgripp1Loptz3Qi1mpR",
  "key14": "25DnN4wUiuwDU7gapvh1hkE1CUVrzQnv4kdt4waPs4aF4wxNSHiQeM5giFe6puzAJUHPnySPFMkTQ6dzVdeqEEpg",
  "key15": "3XhyfaMrsoMxcW6NBBwweMvMP4k1nawtcFik5nXsgcp6UAhoBFNoGzxcFt7U7PW3i1dG6piRHonWvUHqiqUhAUjY",
  "key16": "tUyaRgQX4MVoFcm66pkDUvzSAdHQJUFVqBThnB8p2mjguzkUbJBArdEay3UUqkTchGETMfG6QYRNFsxfPTj3AY1",
  "key17": "4qPJm2MbicxLF8uxH75UzFBs4a6bx5nE9tun613rE7tKeHhuHVyJtgYTqmzDMk2JxxFr7TDjaedf7T6f7WT8V7Jh",
  "key18": "WfBgJfJBe3DPt3HXtvDqdCifDqxachd4SZvYJgRjkj7g4wZbRq4yY1C4mdAEEu3oTFRpDtWr9HPCAuozuPcbiPS",
  "key19": "zDqvWPFWUmXqyeoMTBmkd4Byv5rC4tYoU5gcCpyvurHMFn1kKVGgEnLfK7Mp5ngpBZvd5fsYQBdpsSir2XECQPE",
  "key20": "3FnTwk5BxPfSNQDY5Z81cXYa4bAbXq8CBCJ6NWroUY225VYqp1GfLzTTiKQcrVdnZRKi9Y6LJAcSoH3A4hX5PWxq",
  "key21": "3D5k1tJUb9UdKz8nefeLuXkNQ4Q4QNwKc5buuAnsUW7Rvrt5b6qWrzXE4KrMkH5BYLf9A6miuz4zgpbVXS7BC6sq",
  "key22": "57gip4rnc98aa7FM1r8V5SU2EawV7aYnFrHd5tnMTrwUouM6jDFUBPyf3xXpDXfCZdraDrAUb12UYf5oMQo6HCeQ",
  "key23": "34szb1kboTBbb1Ae5skswqD8rqjVj4Lp9t7BAmYdw4pAC2K916ziC34yNsBGsSprQuiXpXxeJDonP1uoVy2uiKSs",
  "key24": "664xRAkbnmc6UeowqHXQkuoMJzDyw4RjWVUKMoyt7vevLgEkTMF8Z3fyhk8D95YmnQdCF9XEMiqdn1Ed4Qo6vyA2",
  "key25": "65sBsu1HY7n6YMyBTJewgqP7Sk4VUFUGcBomz9kbrLcnRtBJCtWbnHVsrpcUj96ioMQF2wcV1Z3kn4jyn83zAXFj",
  "key26": "5PnRVwrovhVLMCrwpkKg3azLKr2v7Zia71PF9XQtAoDQYccbhmt2yq4i3cbXjfc9eMppN2Vwgd6CQipS3j1CDRjP",
  "key27": "4u9ufks3GDgxe2PeZRwZaYEj6GP6kLaVf61298Hw7KEVEFRDDrM9Vjg4d3Lv3Z16zNEWqSZPZ8XCuf93o8QNi3Y9"
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
