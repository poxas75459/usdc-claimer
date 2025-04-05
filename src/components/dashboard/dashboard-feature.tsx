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
    "5792yZhhZ4Y8K6SYCvfXNLHHRdryXAmDufuuedzYxsSvKYppDjY6Y4NWjB9SGyiVcRF2EFGpgi2VW7VAPrn6tp7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCJ6VwWoTwmdxsFi8XtzGjcoL24xtZQ8mXzfSaKu9hd7KXXLUyVU1R6Agjxw5GhpYbz6fzK4dQnH6k1s2SRjyVL",
  "key1": "2Q87ACvt3F7fVvR2EDJXxf4WKDeNtcgAZwcQf3tc8oTHWnCwiwHeqZ7Y2SZkJcW6ENeAVtCB8rHY461cQqgFZ5sZ",
  "key2": "5r9uZGpdwLgtSeK5VuMAvmW3joiBhZyQaJ5BPaMuYHGYE7ZWDN7ihgbFXdRjVFXRS4mwe2JPLy6Z5VcVpkp2TVwg",
  "key3": "5hkpTVBvn3YEYJuqGmmmmteeyrhFCaZHpG427LyNiyr1HKYSLPbB6LmDbKjuZEpjacwdDmRgHVTw8aqXruYJHdv1",
  "key4": "2R1vMshoUpoTT9P8nHozrPKtnnPzxhyCYy5FoiPYLe94myofDySSRHVLhU96BdZxHBxyDSjzeYqb9u7rXqBLNgqo",
  "key5": "HWdi72q7bQqf3h3j9vT5AFAp59FLZzyC1aBvk3DXMHxzmwZ9Qd87X4UfQ9Xvft5kKs1BFnW98YY66d5wG2GCZSs",
  "key6": "3Jz6NQtwh57eQmUw5743sJU3hK82oNcHhn3kfM2zJVTgT8yYbeZEjHQt5GNyxq9SZyj37MpPCbta1RzxXhjYMvCc",
  "key7": "4pqycYchqAFfiGcbDwFS7sf8xjUB6L3oexME6BYcNJJdbZvWbrKYB6pxVG8tbf8GnRgoy6Uk3yKHBkQKKfp3gGLV",
  "key8": "2BxFJ1rE5D8mTjSu8rSGBuQmssLXsFVFrKuBCrW4xDYJaxN3o4KbSqjNjZRHfTnpYa2qdeJ1d8ZmSZ8Jgd196N8w",
  "key9": "bwC2vM9X1hnJGiYTqUtnyvD2WCCfm6XwNvC3NUbrPSi3DCq2gGgTAhVLqHZHdqUUCd3jYjJ6HBY9dNQTfw3Tmyy",
  "key10": "tm86EikYbvKrHMSy1zxUqAE5icjWPykore2Uichd519idVYww4TNJf8RQRnvRMXndDt8eUk77tXHeDQyGgNLCZc",
  "key11": "LpEWXrsbzZHUYtg27FH7dASx2pDu9TxxbE8XFQffhmMqhNmhAWRCvatkWvWg5XBhAezmjkXRc52uhwaSjB6rimN",
  "key12": "5ajgyn7upPSdtaf3F1SWEEYmkzCJwj39uHtUgpH5VwkpUyyi7XKJm8La98r4SxkqpQsbZ73KfJk7n734vZNdQUQL",
  "key13": "3gtNnXAFpjcsWmPmu5kMUFyVVm2CwonQSrQUWh2mz2nZok8i5gLCJ1vnGkaDctPtoxYundoaGqfhisDa5VyuqDSn",
  "key14": "BkdgWMT1GcZiqmhQ4vdeBQEwLFMukH6nPQQ84CkaStGQUGMc3N7Kn3ZCjRHGjm5TugQaAHoDqhPQdA6ifNhgtSd",
  "key15": "7vJJXmZcErgjQh3MC5hkMYhZnfw949wo6bBCSjKtXxHPgzrRJhqkQ8X6Gk1SAjZdrFxfvSvEKRENVCWoamySfDK",
  "key16": "23srmftjKsxjKS8DNYvZAFqhb2hXjybD3PeREDLUbiL9wt4XtHB7Bb8rnpWEV6PNwfT5DzEeTXHiXombmNba5oMn",
  "key17": "2Lv3qx9n6pp77JRgPPdTsUGxhWSGMjVVAY5MhS4vqgnT5r1knLwCwVAujUU9nhunyCxtSFGf31fUPnqUZGoExayV",
  "key18": "5u7cZScqdhUzcUc9Uz7nwLRJi8kb26N8uPHXdd5YxAVGkQYbXzpPtZEBb7G7ukU3ZcYF3Lt7vLwNuvahDfHZBs5V",
  "key19": "5JYJdbKySJqk9AM7Wd8wvfHigBshYPPqfAJcNfWV73YtpdqTD9jPydyfyKZkGWBLF8Sf4AKpe44jT3MGExCXdS88",
  "key20": "5v6ENYzGcxm3TYStj16yYWsqyNTViBFtfDEczsg6X4kdrkKnPUrDKH1HaasHGYcfNbzHpimpLe71Uct6HULrJy8f",
  "key21": "Vrucef2r5m6iuKDosZsccQ6zc6NvnzmEypCHCdysZaG6Y394m6g2JeBqSyDxPBpoADDfdUshkBxPbaAmKjHr3sW",
  "key22": "4v3mWBg5NvcDyuuUkfpbbyrP2kjYgbbezeDQbJ31gMKzAPWsFjnjMGcch8EnP9sv324QCxQp1wwrdm7oJ69WKYjM",
  "key23": "4EEE2UadWHaKmaAJf8htrNL7ca1mYWEcth54vqa38M8crwx8zaeR4TD9TcCHWVm4ggG4Pj6bBU9oTJ6YDzrxVp94",
  "key24": "2kKU9Scu2RtQMzydnvGnamT8k8czY8fpigtsw9UrqzvZwLu5tzUbcnST8uVy47DxgZ7nvWADi6cEDLRL3NiDFFwJ",
  "key25": "2N9gNzCZcApTAPvWuQ4X9k4WBwuxrQmgexHpVyUrqQ3Lp4JzvACLAVa6sJigWZwdJUGGk2JqAjTVxMY1pjDPDXG2",
  "key26": "tsN6qZsuKbDyfAhkWXmtMtqWrGpm1K4Aey8GXkrUYYguxufsKcVEmNgZdajzxBjgjgVegSz6vXc2ixn7XmZZof3",
  "key27": "p2wRr6guWupFxdYBRtB9Mck58mAgvbPH5HHSskvTiQ68EFwLKrcNfFoYGegqu28HskMkdcYYmTCXUu2Yp31yyQP",
  "key28": "2ATnAVffsBzTCtQE8aFPuBf8T3abCaT6MnxDpu65x6hamZz3qWSYBAqPiaa8BeGNPYeZAqcAUxeuqBfAFnpZFQSS",
  "key29": "3ERGhGR35wVUGLQV5QvDPJej5JQDkssGfu86rS8XKNTN7pga6eVTBdYgLzZesR13zmRSF3fkaA87QSjS11NLFxgk",
  "key30": "ooj3adk4wM66yuvss8TnYM6aVSLCSwv37NB6CQNdW4hLnMSrkWhx3dBFCUpbVk4YqLbuwCPkdXQwmJfk4dg4Cii",
  "key31": "27EaJXDZHigrPprijrD85eCLpfL4MxCAuvWjDuKRV6yuF9PspSahCT7Y79ZGaugPPJXpjiY15YjShsJfr3PfM5Fx",
  "key32": "4CuLJsuVFticeQbAxEinYchpM2k2GdJKVWv6tELDqrGZkQnBg6zwQbX9tYRVHxzzAeMemL9iSRkrCAiaAm6VhiCu",
  "key33": "GVgzRWjkNUJUtJ8bWDa76THzKsmoLSmbsjtkGNGyK64uoG2z4wc4bgGuzCgDuyoDJrjUyqL6nxrnFvzooCam8DK",
  "key34": "ezMCAPt7N4UhjXSXJWqUkVmFEEHV3YMztUr7KgoDvvS4xsoaLPRtMgGqafNKfbGRcPL2exGU5PXxX5BxbPxA42X",
  "key35": "43qvG6KL2e3QKZ7Ac3CRfzodCDGKhvQBWv1usjJ5yAi9kWSq1K82sf5ESqCaejNbL4jjgcf8QPHpCHNiqvP4rZjK",
  "key36": "43Nkp3BK7bEpSW2z3VdH6kuJjSRVYxMzym3QKYKpt2cnhYa9bR9FgK5VugRHevrDmUYL7S87p21T8Kn2bXCHoWhw",
  "key37": "3Z3cGsJnLNvV6Cn1SmXg7nyyrHA5rmkUBDAcTxcwun8uUBBfFYH1Pr4QtkPEA4wnZSAoXi4nmYfd3ksw3ztG4sZ5",
  "key38": "57YWuxWT1oEZveJZq2nNHypDEWgiMteRRKiq8D1Bw3pxpVcvcYHKCswSWr2x8J735sw8FP9xbxqDXWD9A4Hsnb9X",
  "key39": "5FSLdYD9kboiLoj1mRQDvLbm9phToowGoVH4Ps5PKXQcvPR3pWXFN55xuG4fnMGrKAgeq4gN1k8WH1uHQSfiJW65",
  "key40": "5X3Hr8N2ANhEfmvMbUqxXB6ADidDKFWhw7VPmyzz2xuqEtvtSDNtPWLQp8ekYF9psZZL2BtEAQf2uMaA6ztcBLWN",
  "key41": "67GWxAdcMyyuF57FBJU31QP9QU93GAUVDmEy9pdG7jQrPQR7fwo2QkLqCoT3iHWi55YXue6efbW3Rv5usAmsr961"
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
