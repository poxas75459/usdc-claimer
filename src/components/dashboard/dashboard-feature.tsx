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
    "mrpAmxsK85XnwjxDpcjA1hznAaQtpBQocDxGYS1iynUEZbBdZBcH2rdwrDdjSaqWKRE1f68oK467r3pNibpzTdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8c7J7xvTUXcEUMuSdcMuSguSdiLZaEvLoFgwvXKXD3DPtiZn2YLRPEjzQjZ34VkVHaGgc5JQytePBbLKBgKiWh",
  "key1": "3StHsRXWqrF4Y5sUBh38MUXqJWwM3hMsNiHoEaxt818uWyfa4VnVgqRsK78bxKEAwimSuP8dqmWexyvxuJuf7QHH",
  "key2": "2VAvJ8irNTNjFUcZyN8T5WhPZhaSNHqWyykqY9WDgY6Ubd7n9TNHbb3tWSKUL9dG2ZK4qaRSLDk9p7c9nQNgczYG",
  "key3": "2fbmskKXkCHRLDAEhtCsB8ZuNyLRCVEHfGua4RT3ayxJmjyRpSRLkjo1UrZsoZw4XAREmbmptn4KLqFnZXox2YdN",
  "key4": "shKRW4BxjRLxCrYvr4FHgxy7FZTATMCCQMLB8ZvxrGLzacf5TwWTW99mVQWFaXCX6kqVP5E2Cmb8uSWtvnK1gYf",
  "key5": "43syL2rEuVtVKf8oR6No4DwwHjdWqG7bc6Qko8mDhXwzWYX3YF27ebxgUY9Er1vmhDnimjZamFz63LtaY2N6DGqE",
  "key6": "48ctV2HMv7tpt9DbuZPXzaFsKoBUrrTnVrdgCiFwU9eSeGVDgFxFLGZ1SKPE5c6g7HgHNexmsqYdwEfQabA3TzAr",
  "key7": "2i956CWhKZjrAcHkKhqaFC9MC2NNP5c3dh1fzhStSeKmcJWiuVjFDP32TnbNb2cYhzVEmeGZD9DoYK2sQfEz24BY",
  "key8": "2UsFWe1yLSy7yPXoVwT2oGTq73mi3SkgSgHGCSmRjREUCnfKJdBZqdkbiWpPMuFiWo1rYNMMh1kABHc6J6f9n8FY",
  "key9": "42vR3AAA4NDAEN6arf6DMvsvbPc4YstmrXtEG3Vyg3BJt65v9wKgat72XhE2WkgwAhJa7dLp8j5Dvz4w6h8gx7c9",
  "key10": "2KNVTb4BU8y5XoChEfj7bFETtjXQw2NHfJPYkak76WFTk5NqtoxCGRjEshxQKGq3vNxd8Bmi3fmJ7WuecYq7ivgG",
  "key11": "6YvfrRhFaj1i2wNAEEH4udwcsFzQcYL1xr3GSqS9RndEsQjkKnEsbCSve55t8rsG2qrsggT8nDW5LpwkxoRFSvZ",
  "key12": "3A8vNsG7yBvscrcuLAEGYd2wqDMrKA4Js2HRCJ2jTB7LLcN3iL3euc1DsCMcJ4KJximrqjHKY6C9pJVjfikdUGsa",
  "key13": "4uNvwGe9rZw5ZUCE2HeVupq6k3ptHo4J3NPFKqhA8eZX2boKEZP1TqKvsxwieRBtNFU3Tw216384CuGAeriBHPY7",
  "key14": "6jam5yTVsKzrcaY8PZGVQMQ85tcf98kcRpRgXLxJi1YnA3L7x17Enh8r2MKtQ7p2a4xAMMJb8AbwqTjLfo9gpbW",
  "key15": "64KzQKrNHjEAhuW4tvoCUJxfKuK5izc6oRpv4ySgfGvL8K6uruVzPLUcSPc1E39Pgz2xUqw6taUMCaRs5PPcwJ3B",
  "key16": "4kaJuH3wcjqd6S8Cav17gM2CXp14K56SiZYvwbkcJAxzhvc48w9e34Lkqgfs7Po5ZWmyDdXD5HMCkdQ7R4PFKv4D",
  "key17": "5meYVGfR2oFXKGpPrAc1uESAFUavpAVs32vR9MC47CYK9Kii5jqZ51ZKmJRhSwqGo5uZJdi1KvNcMHffCG1GzFGo",
  "key18": "3LmbbuexpDgCfRPamD92Ju9QPymr13uwps8GQn5ZEa8RpmfSWSpQshFLctofsj3hKBNnsNmj2wX2NQQkmENmV1pc",
  "key19": "hrPYamQG35BF14WfyinAvn1zSJssrEDdf99896LSgqqtJ58FMYGexa1r24VSiWF74HQMwiWVUZGmZD3jD9J4ESw",
  "key20": "24WvWKaBFjdmxApNvTrUxC2d5FG1NmVHCMSy54EsYPzA4moEMJ4wknzx1jPBw6FSDRTRhFqxcomNVCQywzukHx1K",
  "key21": "5CpXTCzXjC3u9T4tzhGphuF48qRMDJekXPCKWTBMrwVuxJTNn3SNzhRtevG1EzHjNrWBYQfADmbC6XLT5i8k1Cua",
  "key22": "4UH7M2XrP5fnehUm5aZpsMdarDq3ptvaG6xuwZf4CxtXKYuq9kcnaTj9MaNLeoHh7fmrJXbp6ZmyT3qtjFrdhzzW",
  "key23": "2NNEFXtdsptouiJK1yjQRtt3Fw71kwMgf4BsZthkhYedSLyNBfk66AVUMCSfVQ4yvg79ZQW2CoPdToRbxzmyzfcm",
  "key24": "5urSp2DE84GBJewVauk9EGsWo4M3PACtRRvvngEF52CoyxSkbqqoZMgmBEJjT5f4prj8zcY8HcPuAgfujnQNNcY5",
  "key25": "4fW6YJfPLJQkvzHcu3LLHogUmPsrcSjZPi69HjqwJC2sj2iWnEkgid9HRX4CWcsumHgvoSQL644bEJQZRMf9BPfZ",
  "key26": "xJeAJFgbcPsCnapH3cBmpmA937non8SkEvtpBvaFMPvioJp8sRJWiamfeut9ZV4mWqZ7s3XtBd7YkzgEEMqB6R7",
  "key27": "aqTH9XoMmjcBcnEwb3pkEsJdvFWqhhDZYTb1Wgx74dto747wWfadetAG5P3kmF3PysFYRnT8VcW8HR1AA9PesWW",
  "key28": "3UofJ34xAxygCe7AbZyaxWjAY2qKT43uxYioEXLzpWD4LHWX8jQsukHucH8f3cr2dH47AAbm6T62KxsvPVYsNfbQ",
  "key29": "2dzMnzLSc9GqPDnxahh44pYK93a8G19aaGhcDh4QUtd4WJQojojRsMUtAbEhk7vcFVJrSphFjNRfkyGFB3QJndJT",
  "key30": "1zSKoNDm4LTBLEnXwQpUav3izx79oEZAqoK6wajkJbAMLi1jmvGK1fgbLzLu6NkEgh5htFnzNzwvJy2S3RoWKj6",
  "key31": "3xPkUFNYvZpB8zTsTepG8iEMWqugSmtGnHFahwYeMdekJRsWQ84afmyDHNRRDmZXsX8UDHS5AChct9yXjkJcXiPi",
  "key32": "34B4qUMMyxqW7hmkZ9xRzouqw9twnLi37VQBaynfroNUJAbx4qmiBJiiS42LWNxtSMojZCTiD6S3qi5m36XTbsQL",
  "key33": "4rVLkBtBJGxUv5trgUKqvufem3bhdrqbr6KVFwikcQHEYStzUn5nPqqnLy3xwEM7XgJyzG1SpeSxUuDhiktAGTcR",
  "key34": "NpcCamQfHqtrjkBPntsXnYB5nus2FxD9TuTPZE4kfpQ5DnpfWYXk7xuUvvuNpz8RwFEhHCafpfqQWUUZGvSYaqm"
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
