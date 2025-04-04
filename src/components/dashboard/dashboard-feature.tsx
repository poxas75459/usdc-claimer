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
    "jKLMZAu5UNRoeTeNozZzh1ZEjStoDw3nDoGhPEgefpDdBsHu3JVrDhKRUBS3BnJQU1oXLUatoCnEMNg8DczPTbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fxTtdUS7JRXgf8UoESN4R8a9u6u4jJ2joSKzDQF5r5hqhdwp1Ph2wCoDecaUV85EgCbVzgrV7pdg52Y4SoE11B",
  "key1": "37LnS5QupCDFvtprFMuHNQH44rv8Ytu2e64wsxeKvrxvhXyMdpSNNAkonatCo9gmbYbUAVNSxpTCMLdaUc1Rkh28",
  "key2": "3UTRjAAB6wLzHtCkXcAALnYNND1b3rviRjomy2HuKTwx8zq4MXSNosXaBnL2XdKx1GuVekCgfY6iEJjcSBfLaqEn",
  "key3": "3b4kapdBM5eVMxSrUJ99ZPa5NPMwFg1bSFMvqCyiybKrFu5A6n59vHiK2vTWrZWGSUKR4o9dRLJPTruwFNZN9Fbh",
  "key4": "43tZDQXKPiDTLxpUbKL6Qog6j8TzE1g4Y9PUcp4cvHYP9cTaDVqPGYSETeqYz8NwZmgNPHxaeU828iB23G58PE5D",
  "key5": "4nAM2PQDSaRwDHRmW5zDHr8mtFCVirByW1kSk3a8xR4HjRZHzYRZku7uNYKifKAn43nU6pUMaY9odHVcxetBMU7m",
  "key6": "55SaasxfANMCn5DRwnznRrmrPt6tYuR4X3oYocNEEMyQFH5xyKo1F79LJtE3WkNV6PyjkGZgieEcfTMPT2MC2gUH",
  "key7": "4csTUy74oqANtRK8aFAXW8tA4gD2RryDsTHzj6uwJXUBJL5afMxh8C5An4uguchaoUp4XoptGtK8oCAeXQm1UCcK",
  "key8": "5QWX8hq4EajEad6n4uzdszzUsZXHvzoeK55iUa1iXbjrNrLyRMFsDFj52simtA6xrYKH5XfboMEPhAS28qx6YA3K",
  "key9": "WB2UTAejj7v8GowNWXye1LCsp4o97JjpSxDXMKtu6DR8TqfTy4vGcW2QwR3QyvHT7juziqJLzpLfbA28p7mevy2",
  "key10": "3tFaqPqDErr2p8str99cgVzv9aev4zpoab53YpYsZewZt6fm6gbWAvVSeDqQjZtzoLEnBXusdRy2R65RFf4DPB8C",
  "key11": "5KVWWc1S8bPgfx4B3fkJkyEYa2VwDJ9BQ1JRUngK3k7VK3qDy53Yod9nL4wSLQ3ZXEyHWVnpzV3bNU4UZNtKfZHG",
  "key12": "E2rzksayupzKhgb2sWdcTFJUufZ2eiEt5mhcyxBUn3fuBeqjPZEj9bmdwCUfqtCsYXkqgEmpA932QQGEp6A21A9",
  "key13": "5pfxgsGSRvzF3bRgJ8G5kTRwMUGbATvrvkEfYB6sSKWAttgRXjSUGYJhMPLQmYjXvgc1zwSLiFwc8XeqURdCJYcu",
  "key14": "5FzGDxrgm9ZatZjzxA6yew6MeS83dQ8jbAk8rUp6o7A3Me5cZMJnEaYkNQnWzY8wGGq4753VkSo3Viq1tGwTxsun",
  "key15": "3QUxLs6qYbmgwyMhJsWz9TCJ7FbHeHgsdDPqDqSNfb1T82MZ93sZgBkdaDMha8cWtdccxhMiyRJZxTY6RRj8cPHz",
  "key16": "5YxzuyY64KVP6da62xmAoVMAVRs9ZoChXnPBuuG4ypRcaDX4hvatiJUGdQM22ZPRT1HWeQ9QC9qjEbJPfJSotK6t",
  "key17": "2Rq7sAgd6rMPSKyTBRUEDodqz2rRTRCr55Rd2pqVLG7e8TNb6mVr2FjianccYeATQiHFqzRGmsXcztwWeGo6ekVc",
  "key18": "61hJjkfQzkAhUwc3wFnya6WUBUJ5kXGakcaUfGj9XS7o1gXLLCgtairDTjmrajG3a8SBwzydAUy1EBPMyhHqvJmk",
  "key19": "4kX6EBxmosp9VK1tcLEhNWZ3C2GMHsRDgjsc2PJfxVawMkxsdiFXtEComJ3ykZiuw9q2mZ4F61Lm2yhbHvGjn4pH",
  "key20": "3zL9jxQmxfnrLwY9oci7u6gL7dr2qstmU5ao1bLrA25AK1cvUeF53dBbjwGT9xFSUa6tfo7WgTBeGRkot3ydLXqr",
  "key21": "3dc8Zj6V3tcBVDNkkUDDnPuV2YWFS4CSwUrYCiNToTnRvu6h16y4gFVTQhJvZjWV37vrZrTrbGjUtrNG4siHHvn9",
  "key22": "4JhAkpzuJ6tt1mvZcNsBJUjup5p1AmJAGR3Kr7E5KXTnyzPV2BitXaBBJMsJzGK9VqcwExTgTt691kJ5LZyWGNoi",
  "key23": "361XqwpMFT7bLag4wAuTYCfrXtjkBj4PnQbTf7xfM3nHnUi35VVAuzd2R6RYdRYcVxHGRy3w8EP2U2Jxae21wmEg",
  "key24": "5HL6qszsMEFbvzxc6bsbVYNee43pVZCdFoCEUZNVhxZsc14VaoJ6RS7Vt9Q1nKGhf3uDLAvEtmfwGaFgSnbQkyBN",
  "key25": "2AxB3v28pk44j6N1JCeXHwQMrUddYJE1pVb63jnvxiPjjgrxSVhgCYpngwJ7ynk4nkNFKEtZDHSNpvxGF4cp58tn",
  "key26": "2BndLRHCcuyWg9vrFpnokTrW1SjavA2MmS9gXA9mEofnz5jtjbuhmVj4iVntn5kXvcK3fD86qQLe64BjLv5KrHGn",
  "key27": "58bcegx29AJstV4t3LgF6Yn32g85EBwpAQA5798aeMdexMbFFTchCdMEMiRzN1vZawQzyEvw38rnzfqN35QXwtNy",
  "key28": "37PLeUM5en7xhZfgopBpfcvqwnyEgtPJvUtKxS86dkGTEZ5yJSCQakUPXudnK3Si4kANhXC54jQd1xDmVmzL6MWD",
  "key29": "M1DDkwnZmKaF9PbHp68tt6fX4RHDZtvq23NvQ3pBBbft76vbNy7ASXjLwYcjiR8jgS5b4o4p5BPHsZeT3cHphZN",
  "key30": "5DpZFpFhXpBiWXN7PXJWEjjcvc3XKm7WuA541Fd7E65wCjqszNjmZvp6iC6wZTASoCFJTRBEazPo6icrQAkG8V4R",
  "key31": "3AtUvvdYoELhvp4vG6kLmzAc8jopVyqmR4zpx6dZiH5t6jFPe3BKG3HFYwAy6sDQ9n1HQGw6HAje6t6PVFmGvS8f",
  "key32": "2aa4cJSgaEphV1FZoeXq2ixhR4937pENYLd82eFL1qRfNcwonrbWszQPEuv89YQpXCRUj6wufniK91mXVaiSuvFT",
  "key33": "2eYJumferCwNiZ3RYFLaYN5h7zs4XPraERa4GukDbML7ijKyEGTdmrDC9rADed8bWNE7vxcJhRdEehWMQwGjuZuA",
  "key34": "4rfkeV8rfSE5FMLynDEiv21qZ994Zgxg9cgW4xxMqst9iehS9fSgLBpvCfZpJvazDA2iRJWBY3WGmBhqZeEAdR1K",
  "key35": "4ixuvoV5RNaDeHbbjNjV52ZdCquYYmVvUWaBM5AwAoojmewziNPrqFcCJkGY8TG6J7G1BYB5AcCMe3W3sims8pKs",
  "key36": "3rsCJTs3vDtPduXGkrvuYbRSFRUDDH2GtyvfbVWRp33zUJJ8GJaz8ZTgXdQVC4aatngwGMzVH5Xu2NKRUDKyc3CF",
  "key37": "5VzQWPu5wabJZmAwkQKWpAPbGtix4eb8usQ19mssw6HaoS41jWquq6hj1wyzaSNrnivFiNMeCp7tJUqhbRp25hTt",
  "key38": "3CN9ebxMnWoBrbfCC8CtEkCU66adPEBEs7xiEEKbM7BdCmemYAVSfumCTmQU4ghexpZxV6Qq7EMZzjpa8qNK8kia",
  "key39": "29dbvyPMNtzbTxcpqk5scLPpbfb8cPEGwwTaNCP9fziqXpYcLaSKkwyJZA67EPkoVoeiXgE3mXaYJjnD7xgk3obA",
  "key40": "9oBv3sfFLFfqTjLwA39PDaqt2hK65HiMP7Ci9JU6hQchC1rLesJkVH7BogMQJ8Pza9PAHVdDKDRxUF5eC85hFpM",
  "key41": "AcJkzNVEciWHoYFPazW85Unx46J9VNk7ZzDc9FdnriDhW3bDVYErxojEtRL9tEJMQVyPhppaUPd49g4Q6DoPYJQ",
  "key42": "5TD5Rq6dUkFXXy2tSJ4EjJA5zQooH6WrNaxV6dmSMPk4QSYZLVkiEaFJzyq1bVDSasf37BAgzjUnYhgQhCDJ2aTB",
  "key43": "2T2gNQ4USrMznLmSuTeMjrSKHzo751yp3BNu66Wi6aWRieSiuYSXwZf9vHEmNH1bkUJrERN1hZz2F5xkATSoP53j",
  "key44": "2zGhwF8BuKSCcZaJB7eeQmLg8P9RSNuag5zLBpE23G8UCrtVWY7aF6TGkc5bJFmv3hU9ffbCpoxDCSE8Gz1vjTSj"
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
