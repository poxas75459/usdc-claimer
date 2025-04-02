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
    "2wmGtvitEgoE582EcUT5wC4tBn6J9eDPBvha4DeXvopMJisuqgv8g3dcp2R9Rvb7etjLyUsCGzVTt6QdzM7udupX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bu2XqKBsEMZRMbrYs21k9kDskSdXoCCvzy4PoBPCywRNyWpGRciZrX2zdyqokAcb22Y1MsizKY8K6GxhtAoJ8r8",
  "key1": "35YXUF6b6KCGvyngn5f3XkQWGHf7NFRMW2LikcQaMX4ZZtsY6XBr2bvCbty5EtGTtSwTvtdD7SHTRdv9pafT8WEw",
  "key2": "iKcx8ibKgrXrEZ21jM6pMrMQdDNEP9wrvAwmwACM5jvFVgr6cvLu9Qpk98A3bhHewpNmGKP5Eb8rYtaLa1vGXGd",
  "key3": "59DGrokTSCeqevA6GWEXLB3QJw3yz1txNbsNZ6jkCnDF4Dr54851cn2WEjdee4hG25LuCE2nyHy2cz2gvhRr9aZT",
  "key4": "3oPQdpHGhfzK46fSu58zQoiaWFPgADzLNStGuZ8hEG291yyfkgbsBXe23EBAPvWuez59xZnuot2UMmjdTVhfCjrM",
  "key5": "5wheZKhrtUbSA22b9tNtqb9kjxEXsEWoTPBt2y3g5ph1pioGuu2s9LH2LzwyEF3vYA16bBHcSA9PXePC8P8EjDFJ",
  "key6": "4trBgpj3TnEvas6wPH4LbR4qXC1nWQbVmrDhEAc7EHe9fAN35aBBEtxQpC7a6MSeWTa1aVzqBb29vW5Rk9a5MXw4",
  "key7": "43FJy2RUxZW1F3yy8jabdXS7Frr2tMdyabHFZn4WZq7AWxVJ6ZsbXHKz6NjnPAJ2KE4R56g8yLTzSbY9dpjLh93V",
  "key8": "3SXghp9AbXNM2f4YN6ycp4CsgSiFscSEdPQxJVvB5ayhsxdAVa66RF9uq2Fxbo8KiH7wfSCEP6xbEzbsGXqsx9vG",
  "key9": "5A1hnFDxXBVrcE262P8PJpvEJ23S229XHh8TNsvQLV5SBunRaPSC14msKKJndBMPc2oKnD9DTy3nKCAaEMBsbxpm",
  "key10": "3nY9vwpfqJUqrLvhDZreLvdzSdi2BNc69YePEc5v9UDnsNvB3FzU7iiJDdyag4cnTYQuACSWxgL5aPV76oFZodLP",
  "key11": "2R3dgCjWqi7njGKnngwVSe8fAPPSVos6x9RrMkrFPHW87Z6gKfkYvE47LsMYzMzez3aUEDyh5BU7kA2uyLdwqK6Z",
  "key12": "5AET8LUJQeSyDkiSZSfM5CJEDEk3mL6UvJ3X6qpgYZdLosbzRktwhufX4u2UMAi7wHdwsrdsrFkJ6Hq2s25Mps86",
  "key13": "24wKxr8WLy1ryqhY8fo1xay4Xwo3P54rYA1SSrNjrJSEirCz6Gd1fYziHX7E5JXpPMPoXyfnX3AkWB5x6AjPqoLa",
  "key14": "VBtAC2fbhZyPqEaqJzWfjCYcC8FTvstvAygAatNmskUxmWfa6g8PsNTpnRWTqUgLD6gdbAca7fp8LUpH6ygPoj7",
  "key15": "32ARKnw4FyH1jFFSY8pf1uf62UsnSuCdwTo9wS4vR1PSgTYqP5G9UQV336igDf4hX864RD3yr1u2D9znUPQpAy6z",
  "key16": "6116rms3zcnKDy53ox6xKdekFaZUZAasYnPQ3XjxMBEzSsKRG4oGHBmm2qzQNTgCD42mukBLWUyeNJaBLRC4f3MP",
  "key17": "46zvwGrAHJoV1wt9UAFJxWRZeRPmLm8T1ksCx8rk72yjiS9sGdQuj7bTi6Qze33oJX1yMdjxuzhNNrRibWCXGfeq",
  "key18": "2BnWUCgfcs6eQV5m18GesdH9pLXnRQr4HbcXnYFwMqy8Ti2fgWCF1Hvk3zizaLbQk2mtqNXrPag3FDMTFT4ySG1D",
  "key19": "5enMvkoSMi8WgGYNznzs5JAte9U6YU858YbKFMiss5hucvvoH9rKPmgH9bkuxeja8RZdgD6pj1i4hXNcmVY87dzB",
  "key20": "5B6mjDE5AdBGcYSgj1MnurbZPkWPtY6dKK8oxwxNabpHEi2zDSkoBTnXC8VM1n7Fx4rTi1yCskoTFH5enksKJKoB",
  "key21": "5EWXz1VWQaLFBAJPVB5gVWspAFWtURXphkrGov2nCo1ZBauzqjfQJ1HKEGsDptx5DPNgzmoBpVmewZKozSj4UZmC",
  "key22": "4TcEsR2uf1aibMBrZ2SSDb4MUMLhgTaShcLYQ8LWYcqnmzzcYSNPUVNGEmebFv3cY1S7FSEpVNuUKLNx8j6AKHVa",
  "key23": "4VGaPELFhxpDtRPG3dDNqeXh2FaWKfAMw5q38WB3yLgoLgXfgkA7UWDbCWNcrVfRJQeEHxPqE2zCucGjRdrkokxa",
  "key24": "3EQHsfsfLaid4fnSdrvigirE37GVcNsjbQ8tBAzhyMNkTUc6BzTYPNdJyyb8jtBobztwekR47MRW6dZjvRNiPQCn",
  "key25": "23oWHNaK8UrcB1iA4R4NQJVZTE45sa1cyvWADVoeD8JvW7DK1eFuQf4VWcKj5jCah4ypVzm3poBFtVwuMPvDhTEb",
  "key26": "2yZSbmPLdT981DxiB4Y4RzJWHdRLcBeTu8AipH2cqm6B6LziCxShhwnpRYTT5vJzLHcsSd7aM2vaVpKk5rQrZSP5",
  "key27": "3BemKgNQ3WY72qBo6Nqp4oSgEnaDv3eZQj5KBWWUL3WEv1JzWYAHXEJ78miTp6iMuaDhXViKkMQXUceet4MnH59Q",
  "key28": "4ULgN2Yisnb2p4QcU9kHpXK2vPYuXjcYPjnxZPLU45CespEiQqDz2tr5wBH9XWV41m89jxyci99bhjuA415mPLDV",
  "key29": "43hrjHkf15pQ6TPpMDr675xGS3i3tRS1swkjmE2UcrLZY8THNg33bVWoYUD1YAQzKMcBKyEUZqBhspFRVnGXJDUk",
  "key30": "65ksVjGyADs5U7NenY2K3R1Tx7R214PSjUbiNgpxMeVKNXD4aChuFjuAAe7h9wJJeAo9V388nV6RRjVZVLzVxFPe",
  "key31": "4wHUgEbBAdXbc7C29Q2yFrc2NC6NaPGR4V9Bvibskbmiznjg7bzS9hn4z5A4SBUxmvKUt37Ewx7Suqc6m3iJrzS1",
  "key32": "616jD3VkuPTc9oBMek2wjcCx8v746gLeSNgnmEurgA3Rob59HkHWXtfkm5eSidPcuctSc6ZbjdCvLaxcqvPVQKjH",
  "key33": "4eLWvLBg4WkPJjtQrvtgLF9uy7J3dqQxKjQ3yp9QsFBzpZpYTYcMEyUPJPvAsW3rs8Ju7kAJMnCuVf5cSoZRxZwp",
  "key34": "4c9gAbFnK2UbyysU4pbibgRHPTeayHY5YALrJYJM52M7G3j2V3yTS89PoHVwo7LQXLjPbusV6n2C9ewKunQPrBh5",
  "key35": "2Tb3XSvNbNQxDsUVouf45VrkUMTtxNfg7pZJCTsEKKVJrkxrNTmRedr95Hspx35rsYH4YsHV7cECGrVGqq4jfDV8"
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
