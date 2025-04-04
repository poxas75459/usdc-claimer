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
    "568p8No1Ebfh2VsnqubRC7LDp81DKR4M3EpfMnh66fAQiNas7NgUADTQTeMQBRVHWq6BeHXzmvPzux9UZskd4WcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sV78Lf7U7SPCNcVNXsmvt8DBD9dWNemVY33t6En6JWAbksQzZEVG5VaLuJxzp7buxxUQtA8urQyKYSWuz1VLicZ",
  "key1": "5RnyCJP7oP3KopBMT7txAz36tweUyqTcAbQBs3JmESPttariscUss7ArVrn5wSPNjaQEzTHzyJCcZNVkGbPDPets",
  "key2": "3Szt6Lahi2n4fRz7RTggwPY1YuusQTBp7ehjcFDvPbkNqPrvkoW9qhC29hg9oFPR6sAWSeNbsCiwSwUysNbsz4Ka",
  "key3": "58pW7syNErTbWhvR4WZUp5WuQyFuL15ZDyd13bn7ewVkho8zHEYWEFnnucgLTfc7jPMRx7UXL9NAfHP7E2NNoyxj",
  "key4": "2RK4CaiuVbbfhAMKsv9uyu3Y5Rzkm3HNW5JcEZ3BQZvjxxuQ3FBAZyBpSPo1o2M7s5A83FxwXUWd6ECinGArsb8R",
  "key5": "DCFYttizWjvoLLPCkUPQzSYGX5JCcNQyZ4dC6SRUojHKjQhE44s7VAz5kyChzKt6NeBtr7eihQxXpiG9Jbv6WyL",
  "key6": "ftM7HJtM3orvc536wFRUieVyyE8woeyZNY2doyitF5cKS6xbfyiDqHNHQ1bmXixEfPkm8x6onaRNumKkNftm7ac",
  "key7": "zseShEt6R57z6t7fF1jsoynWbx1xHoxAStwfav6uVvLiXpp4QtjbE684WCviJhgSzhczHZwxqkjRDKFKofA4teJ",
  "key8": "4UoDRz2Tgz96DpqxRda18Mur1MkhR38eiAyUmDmVYKBrrtUdRDuaBgT1oTdSseV6pniUBic24T1B3E9Kph3ZFsg5",
  "key9": "5qKLXEAzjXEbjPP2xae9FgSgjLTepVPZLLjrHXBb7WhowUp1NqhJAzTtiewuEijiZbi2KdQqNA99SAahNFtM3Euq",
  "key10": "mnb23rna86j9ii3E3UuQD7xP8xqP4MBRbiSnFzyrUHj8CDMq6uYbyRGfwgzQMtMjLnPVwxox6JcfwL8ZGh63bdG",
  "key11": "56Nh4zJvNz7vTWeQXYkGiNvL4LgGGXZu97UQC66HntEYMsHsijSkzSRsxpf8MFHK5FW1eqN5Yktkmy1E1ZPRW77n",
  "key12": "2wDBttAQtbQpaRiqow91Kw2HUAkWB9yfMQphZ1wf79RwTLeRZEwLytaz5wHywr5XuTW74vWPVJFUtNWus8JUnmpc",
  "key13": "57MBwGx3dJqvZMWVxxK4WYHMyXt9FvUi8sQdBmbydvH2QvcWNh7yGDMMLHtfYT2C55TuXBaLZdGVLUUCgFTzn17f",
  "key14": "59s5AE66oMG6zENZEyjyUYt8RneZp5G2VVaRVUS3JUfZU5n6xN9oLcwKHXjJcc9reQHn54u2qJeGr15UhB3dNPc9",
  "key15": "xxLPTgTjbMywxALhZBDDkVpJ1G5MUgptAfsEsanyHGau9ZbdrUef6JGAwDcK6Lyq3eByKZHS3wu4cJ86HbfVZtA",
  "key16": "4VDpMU5wSFfG2bdAxx6wTn3oTwLDfjrQA6WRxEoQGAzMRNeAa61K8Lpt2rJ7xso1fQkZkXE4k7jaxD79Zw3z1ho6",
  "key17": "4oVaaDQDkfUavchFxUcjP3QRMur1ZmA7egCgocujVdpUbbkt26G2NpFXqg56ih5psBQcuALL89jRwckwhT1ze1a8",
  "key18": "3CN68Ut68mRXAE9CAd5CCTyBzh4JKxWse28txqZTXKkm5aPpWMG3xzK3tLYQrsTBx4XqU8zKyoVg7Fd48Mw3mbLg",
  "key19": "33yb1TMhYadsiXQC9ydk3d1MJWs4iFyLiBGAw9xjzupF3jkeRdRPDZP8aQQHYMVkJYQ8kmg5jc74Ds2MxQCtnmJo",
  "key20": "55iDCyM9pCbt24MFLnPE6cTjMapAWKjoo59jfY2ZyeGQiifNXVRoTa9LprMEBYMBZBEYAuLpoU6fTcWDP2DMnpUB",
  "key21": "EgdkV9oFujrekxq29W4HEZAGaNhNtpeqRtnmDv5V6neiGGBvfSmkY1tupehhRmVK6tp8xS3BxCi285awt7qccG7",
  "key22": "9kEPciZ66hTfbm9hJvbJ2CeoefYBrG3NvTtMeZoNoL9tEtR4aWm4yGETfkATCCCUJ2GLZM6wi1LY7892HLJq6Ck",
  "key23": "5xSBJLAjkSQKEAKK9DURhWQkdcm1UXbKppZKwPq4Yj1PCyEN5ax87wFyhcJjrw9ktXkK2XzVvwRHcZXAuqpiVCtR",
  "key24": "2LaBAigdnpcrPvmTMLKdWUhN7QvXRC3zKRxpKNX8x9RPmniZFzx3ghN7VZk3LamzWdJwEZdE9QN8HLiVb4bQ4E4j",
  "key25": "2yAdPvpceaNUtMa524xKA5K2s4budVTZVH58FyXu226RLTVqMRAryPzBeoVgoZMxTUQe3BaU98CnBi2MTFZKwZev",
  "key26": "46axL6atR81y6KYm7QHcFtzcUnEDmN96Fhbx7bVAggVDLkZ9NpJCxfvFN8YiHCHtcihBC13rdf8W2YZy4Qahh4DQ",
  "key27": "63A4zqjU24P1ugdC9os1PUDfbW5FLfTvDR2DcLv75CUnpvbRAHCeRA4tHRX8crwuveiA4PtbAKVmf4TJHNjc4QSP",
  "key28": "2qPmwH487rKaQ8FPf599mRB4BHqn66C5TqYavti5qepqVwQBAVZsYVSeeaWC1mZhVUEv96gvVjiqpxW6YFqcv2XW",
  "key29": "4JCGrfxT48E5RwnhjrfyshotBekco1LdPjjpSTEdoSCxqVYvJq1iPeem4zHvE6HF6f4PT1KzAwP7P4J7G6DGmS1K"
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
