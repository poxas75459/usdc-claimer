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
    "4JQVc6Tnuv19Co28uoSzfaeRwksNBvYZRRAvYjdNa5Sy9nWKqNWeuZuHL6vqhKCgXWb71gdHkEMJrRS5qyfonumX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aN74FJwQ8UxTjWXRBbt7jQvqYDXsBHwwygWgTam2BX1ANHhkA7F15xYnFcFGeFxm1PCtMupdfSPWUJkf8m8wVsm",
  "key1": "61ouCTYK7Q1y59LKqyiw4F9jsZ6cQ7n46ZjyRq3D9dr65DEPYPG5Cex4sdE7pBXcsqoU7igmuwwiLXe2mH5Qeydz",
  "key2": "33QKLgAMqQpLJMJa6eWQBCKV8mmsNtL4nxdBRKMRyyejwqwk9HPK6R31j5DDxsXabZMpVJUc36qD7tdMsDTSC7Hg",
  "key3": "BSymT4LMBrBdYhtPKP6qBZ8KFcnNA3dkDuYvapwo5xy8WbsctTwbWhRh7QvubUXBryyRmaWjJbPZqyBd7DnumSM",
  "key4": "3G88vEDZNL3Qrd6AQ88RUXnKTrLqjUdo5LVh9PXV8wKRcs4tt5o7bZ8NT18RbP1CgpHaUcCML4HE99SY6ncfBVjL",
  "key5": "5ZJrCRf9kPHL3iyUmgfmUWmikXLm3PSgmVbYXXxKk8Y9B4LRMeUiQFuhshiUGpzRQ81yfLe1XV7SCxc9WvH6hpXu",
  "key6": "2S5dVG36LkgQ5o6sUhyjHPKTLs8FMNcdsyAX327uRy8twfMidE4PKcLZe3msP8GRPSgpYAiW4bKUHvi3puJFLCJb",
  "key7": "5skHP3wdC2qG86qhxsitBbGZnBVJxjZCMz5ghr51AZhivec9LsXa1sj6aNVXnya7DVpJbWrcouky174TFKnqjdEK",
  "key8": "4eBEKn6WZT4ct67sxpzKs1GfvUaTwEXKsMSfiobvL4Kh7m8LasRtgUxMsyiG1GRQ2KwMjKCMeewQCsZoHm5553Qn",
  "key9": "4bACtioki37mnWszw9n8ztAs26TufZRpo4o9Xoc1VpSTWsk6CmHpg7utat1EKmGwe1umLJ8zSF9AT4JF9Tvy7moQ",
  "key10": "3SQx4BLHQB495qfFa84KmFWmStVBzeCXJwkbKcB4oCD77biNf5B1egFmpkrDpDHh2tTDoa2SYhSm8w4AuhDJvdm1",
  "key11": "VH5qgZa1huttnMrCzPyuCjB3EhtzNvPTNTDTz6uCAGkQMbVZmWRTBPkByJEmKiFMHr9YB9QA2VuxsNMLCWY5n31",
  "key12": "38cQdLym7N5j7Y44Bi3JCTvFGF2i4uEVUpdgwUtHJ2tWhXtTDUJLDq5rfrhWFWfghz5cjgT476ndpby7kfj2UoyJ",
  "key13": "39W3yoc5Nq2GiZuJh7t7htCFRt6fqokKAvEfERbuocBXJv3DJkWG43P2ysKf55MXBsVFNPLums6FhNFS1GBdtMu9",
  "key14": "ANan9Xs2LEKM9GofZWoS6mUWMP5Tn5B5Y6bChmDXGDikQ4Ag3PeeUw9TCNHTDUyqPUaUxBSr7NAaDFyFzLuHyJd",
  "key15": "4XtLYF2HdmWfE9DDeUDqg8h5uHREgHABSe7bRxVJzfc3B8iEzfLNvEcEMNPEFs7AhUeZP1r7dpEw3Ba4VBXkmdbw",
  "key16": "WM5jNpNZgh2irjWZDLz5uSYGCAutzVz7ekXNKNykCLb1qTAMkbDF5UjKAPZcD62StyafXFhCmRukjSPoSZYYBSK",
  "key17": "CsvACBb128eqzeCT2PBUqydiBpM4d1V5GJzJUZSqiXih6mitrYoekYUTyuhYYz9kmW1LrXpLXWSSnMRvktrXpbx",
  "key18": "5oFytLnzactRDGkZLiDsfZb5GzbbkpfVss5mcs7zsaxHmLDM9pr2Z8KCGo7JLdivKeasQkhvHqdfMdJnkYDuJ76M",
  "key19": "2iqqaSRxSVJojjgjvdR65PrcyhajbmtJbwPVmqPD7Kq1A4AzZijiiwEW1CXa3F7LY1AqNsyemo2ovdTnvLoV9Cv6",
  "key20": "4SEkANXRtp7zC8XmJVHrgAn9B7zdPnEDKFa6XRcejPVYECZQJBZpMeunwHnbE3B9nr7oq3yneJZP3DAwMkzFgdgf",
  "key21": "3GeYcNJfvQLMDBmpTjtwd865xk2BZjNdnNoe3vPWR6NjKqkrSfvKh97d1TnjccJGFznLuXS2SN4L1TBqDwZVBDKk",
  "key22": "4RS7YHX7WPFcsMAEpEbXxzmbFQZKekLnaa5JXpVsMkpMK3fMhioCUBZSTNK17193n67FoaM7AyXeJA3eRL64SDpi",
  "key23": "Tvqou4LqwXQgubz5czbNVSUK3HHHwHpGoDQq3MgGBFJa7re63ZoYd8JB4RSbww6hvgPK94zitjuCan1ysRSUX9h",
  "key24": "5Hw6bDRNMbE78VKFZpikg9uNZA1B5piyW8F5B7XvhQBhVB739WkdrivqUUarkDaE6NTuQFNaqHmLkW1P7h9648ze",
  "key25": "397B5AKUTFy6LivGoqC2DC6TM5zC7a7AQ17BqqPvmrU1w3J5c13b6s6RKiFS3NkDV8HaLtvq3Nyjy37bU4MGVjBs",
  "key26": "67H8FeViRsWPDYXTp6QqXLPNYBs8CUbwmxf9tXpFiAuuGZa73gnvpuytzKHB6SiJUACMsyCQaw6hLsNHoKKwfe5W",
  "key27": "25jdCpqoMrn9j7VDUxuo66ttCRtoTdC7WUH2NrEVEjfuByN9yDBwje9DYSt8S4nHXgwBYUn63YD43U1ENHphzfF8",
  "key28": "rnDKTW928gmju9xDTrDJSCFNDCG3hNeN3wGh2U9ULHF3D39CM9msEAWFJvpby7MAWfFSHCHDQfyhQELcmeC7PEP",
  "key29": "2u4Ndg2PQuREGteAMymhWG9RUFNdUCGeLTPHjM5MWzig784wTGhPyWJr2qpAbu9x7AYywzhFG9NDCafo6rv7XYof",
  "key30": "5Ti9GEBJbkwpJ6e6rtMiWYcrjMr53McMsgoVuSHjiJ8SYmaYz7RS2N7aoqKwFcFdLS5JkaydjTp3wCp8ggwvrJKs",
  "key31": "fH6NmnZYa8XExMS8LZFTgHj1ipKmkA3DKvjNbbfGauVTaQanYpM4hfzfGouwDhfmCf4zE3Af5jXgMS9X9L4xzSg",
  "key32": "2qwpaSxRzxxenJBMUV7uu7QU96mYxXWdHSYqZxcLS2UZqzeVvKx8VqRSke6FziBH1BNqXhbxpwx7JAueYgBSsiig",
  "key33": "665AHP9h6AUeUPGYErccXpoxhcFPVnLvqsfF92f7j5rSEecAxESTkuhtLV62KA767177M21sNnSBiXC2jZZctAEQ",
  "key34": "468MGKYxbwhfvS6rdQdFnziER9FyaodRDrJjXThX3SJZUWKMmK2nBQLU7BQgJzt2SDzMowb8qk5TKCcJ4sqzumes",
  "key35": "5CxFH4ah4E3qeKTEEj97ZR8jyQwFPgJ7JxnVS759XDwFk7Qc5urX95WpKkgW7ti4EHZBf996sFxDHfGpp1qjyAh5",
  "key36": "2hLVixpYMTzm5nRfHehWP2UBFg3pEvtNsS3nHGhNtX1ZfpMwvWdTm2s2bEKUzjzjxonoEgMCPRfk2a2nc7Fu4D2d",
  "key37": "5fdyTCtW7TjgduXvga994KxcBJKu62cyaM6rAK1qedfJmWQMWKhXaWX5ZRkgyUTjDjFnFnZu5ta62YFyHbwPZ2WQ",
  "key38": "4k8NXXsc1RLuCNdTaHXvY6eXiuvZkKtv755mqbpDdHGrqJjTmyL1LRPWWxq3zVbrMmpfgd4RX8GGnTRJNKHBGiZV"
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
