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
    "2Kew7Vx4hFtouzFWUjKDUTP9yiBHsyb6SUZpMiqDtCynw8Gf8n7kzVuWcqgjhD3B5ZP49HisfTVAofFvtJ8tnH95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozdJMoUfYTpghxX9yM2PNsLQZ9nWRbCBygaDyrUNuyvDTpdJubVzjqG1Pobxa3QPSGjwPY6aW7qMB2UbCfQ5qKk",
  "key1": "4nL1r33UFDMejXh5GhALxGzBNdkncVru3FjUL8fKtEZUHmQ1J8SrkANnjJcuQVsywxJLwAhF9vsAt7Mp1FQzKcV8",
  "key2": "5roxQ2VsRXdX7WicFo9ysihxVmrx6nmZqjrfcB4eXNYmcfumHKBSy9iEFzJk2Ph2ji2HNUGJB4rd3TWtJzeZVo6",
  "key3": "5HGSbU7PkB3RddC5UvPX5HW8HZ1CyAxyVkVPkBK2D7qkJgpnnNEDFzHq5sR992AMwp4jLaK6DXt9UxSZ4MsPessH",
  "key4": "3qFm4unr3vka7jNKF3G8JUNmXyjGcbBjNULVJJGs6XhzSHPHeJ1u8BuwGdgKLWSsyL6eZu9QrRxBhRsNgLYkwMfg",
  "key5": "2DCA94wfDGSbTVyw2Nx6a4wnPxwDbRMtEpMfqQsH5BjsuZuBzDkksCJ9aQKB4oQmmM6gQr3gS9baAD36cJtFEH5Y",
  "key6": "5ZwoC8dLFPqyL8yEDk7gGPokd8cHgFRkiPcXGDd8r9SLwvg8j4H9NpWiueoxGQbzB1BM9UZZkBPxN9jfieMnV1PM",
  "key7": "3NKr6ZDkgsycM7bZSJQGGPWgFSRQ2kmqRigDMTmB1Kn2r99P7Yp1DFJCVnZiEMkrjauGjmgppiGSkwmtG23yVdpD",
  "key8": "di7uPmQ27BfjQ1CatefCCKdhDPZh98P2bkMfbFksZ38tfKxwYL5Ms93vSozzeHcU4niD9G2Nf1gUxZ2TeSP6VKY",
  "key9": "2rzwx9vmjevchsJa1ZkdAT82GFUmwE1KBPV4pH9TecFXibAE3f8FfdH8X1Rq4Gx3yPK1FmpnmowjqptavWfzo91j",
  "key10": "3SqGyNbd6U28TnN6gQG6EHZyeqiybF5xcvZuvstszTjkdckJct7JH6ssFLTgmpXxyGGPDuF4o8YKBHp6myn7uYuw",
  "key11": "2UQeYLjUwE1bXcLoUpqcw1rskGy6EQ2R3uXV1DmzY9x5T7uy3vyAb9rE9RDcCP3FdqQ1hUoDuHMSuvYziuLUVBVe",
  "key12": "3vJdUXV1NZEpWLa7p4y4ozaUdf3hU6wX9bznPJ81x3gMEq2fnS6gnbLHjfnmxWZCdNBSSejsFM9UsUeMxW75qzBm",
  "key13": "4k6XykHEQ48cyjBukvUyUac2EizxbxnMb23zYTrrqugPbmf9XHAPx9qNUrJxU5pgCbZsJ1vufstJuPNhcxD2ia1X",
  "key14": "TzjX1WoAT5KPJkdgxwo4uaaSn5mk5FSWuF6vfNxCZQM3Jc8AmBBynYb636G5K2vF7GuD3EdqTq9GsUjwpbSq4dZ",
  "key15": "4dUSW3Y4NSQUuNSyRW2BfzoKmQGP5p4h6u8hCvx19LivkZBU2YtQqMKRjMX85K7sG53PYLQ9CZhJwiAM5GeAgpi4",
  "key16": "2DPYWH9JaDqTK9mAjxibk5N8DPG2FYaQojzxmbxKXG9DspyHy2ev3LvTgR9hdGxVBkUBBDMRzrX2TSHfsPoeXkkR",
  "key17": "2r6kUsinBdYz4KsJ5CUJHkeUkrhvR8yw8wLHn4WmU8mSGvftBCG5KiMmN9y5uDguLY8KorEz2hfJhf1QQ7W8bCps",
  "key18": "48k1Nd4ZNpeeYznbTXgocTo9EA6KpyiXpKRRNB1gptQHP2U1cTgutoi9ikeXQQuCjZZkvZaMDJHTJ3fKTD3My8EV",
  "key19": "46JmJ6jmSqbNpoqbde35hFL2viKmwPEPPgwpnSXLJyuGSyTvrtxyo7aaU8rtBzi4GQ2BJFseCR65Mve3A6FFyxeR",
  "key20": "2QYnJrLUy4sZSssxgMuEXrAek2xR9YnT1S5guUjzQHUR3uhwfEpTKEArpYAsC6Tr8RJw3WoAP99qnmETNEtsHuk5",
  "key21": "2gE9kQL4hGkF1ou6mhzSNbdUw8AGbBRh2pnhYsJRtu9rRvLmojNMJ33KKtAJnAekNcjctyyPugvoxXWrtCv9VyNn",
  "key22": "3CXMSV4uUAJFPhkvye8EpYmsEXf89GYYGN3YwRV3g9GVhivLw5huiSfRLUwA86uaW2MLuUuaeN8TBkAj885H3DwT",
  "key23": "SLKupJJkEx6QRxaZk9K2C9bWGtDe49NDFJzt8VG3VvS7r8DeaBV7YtiBfgE9bJK8ocp23vw8ogH3hc1hrKvbBLh",
  "key24": "5RFJoG6VHFW1D99536nTNoSW1H3bUy5vmcWMHnzySzaxC3RKGx72sxqPCc3oUN5ranwC6USQM1gZL34a722Bma7N",
  "key25": "3bXsN9eACNvzVcuXCysRafERg18uQRMj6JHVpzecdk16NwufDKDLdKE5ZD71vcnb2s4B3eusFcGqPSJW28bhFCpa",
  "key26": "5T4pwbLazpGsFJsJDAhxHUJ9rDZkMzXpv6EGfFonRPKADithzcmdKwDtmC27VwT4sb5UDexLLTxDGUyanT8L5uMi",
  "key27": "2hMzB6VkLhamociB24aQFUWAmS4JCW6qBPpEL5vGArVXcEnwpRVxPWDF9R3VcjHU3SqNuB79jHYezWMvCq3Dg1Zb",
  "key28": "52QfRJF2KHswPvyj8TMy6reHrVppQB9EtCsAnwLiu3BAea9nvx3kqMUuLAzZiRxoVhu9qnfNaWb5YL7cwqVmusmw",
  "key29": "2Y367d3EjdHFL3FvTSSYzb2y2NqSoCYwSVUZKZKPkUiiNjfojWBYJDMjD6jop9LxZPKrLL7TBga8g8yYVohqMHXR",
  "key30": "2QvtVxT2FStovh3FZ3b1YZ8NJGWFN6YZc7aSdbjhEdGrDtyriGCuouQmJBeyhKS1oZpgi38HdGWseQeg3ZPsfW8g",
  "key31": "3puaTYMMcJWHMXQ4oyLHW6wbMMz3YDktm5cFutGDNnhyho5MfwwwUrfhHRRrzQpEbxzhTUTS2wvA4hb2LSUQcPdf",
  "key32": "3JkuBBqwexWaU5eoqSMyPuhCtacLg6rBDEBiw5GicWy66hyiKRHYnux3C1RdevLHBwo3PvwoDH3GwYtXRT6HWy4u",
  "key33": "5jAJrXGzSi7ti6Zewsnn425ZmqJ2Fq9LUqpfTuXt8etBs7zg62aQ5HWWogZ3hpaNKujb79kB47anKrEXL294d9P9",
  "key34": "2e8cG2XdaHAatjp8NQePdbprCbLDwi44pSwjP5W6JDenzjUGLKY7nwUDdKZBje1QKCsFQPhV8VL5PpzWnhTbA9Ye",
  "key35": "414bUKmEmbEcMJM53HDXgNLF29Mph2evxhyM2CiA1HjWiBgRYW9WdCAbfxJ7sw2XwEwjGv1oBKvvhKSQ56v4ZCSA",
  "key36": "63p2uYMfxcf4yMFhm5PaFqxHDgBcXUC2pU7CsFwd3QCtymTQuJcS6YDQnsqqrEuJ3c7L8gTsdvqVpvBPBnKZg5WM",
  "key37": "22rkcAwpNt6eZs1BUmZq9Eg7XyFHnMeEvm5H6RqZLMqgRYtFLL2BFxf14Q8tqA41qSGSxotAkhqQwBPGU1hzfgLw",
  "key38": "tUJx7YqZvqRerwqKc7pi1CtAcKMZK9KYf728CtqnMX5NvTcQ3Sgo1rYu6mnEQNSHLQzpdHTUgtwmXZ8wQfpitHK",
  "key39": "4JTDDS6hZpJh8G8wCkuJ5HXrSyXYc5eLycqZWrxgw6PLmWEZbR6VJDkWZhNReND5HinJ75bcr2qfWGTcvDBEKZ9C",
  "key40": "5QphUYwjMZrCBzQ1igTpp9c4bztQgGTRLnA5QjsHKh1cevVD7on9sUZsVXNbNWATtUPjwZvCjauPPj72jVG5cRaJ"
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
