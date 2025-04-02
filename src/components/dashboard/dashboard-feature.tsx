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
    "3Sw48xDDczgbJ1beeDdirJyr6rbk33Pt2YrU7RsYU19wS6Vv3wgwj61g173x5SyDLp6yNn7ysA9RBtNCJq1e9fQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LcTCPx6SEE2BQUA4a199i1rc4MmE3yKoG7Szo8yXVyAkr2jDJcGAdaEuQ3AWQo1dpcEbG4SyhPjKGhrmKQWAP4C",
  "key1": "62bWZFyjZRoHVLHDd1NmgncLsyLiDiwUVKe7xHyspAYosnVLbCU8xkbNGt1d61q4bEbKqTs8YCvWHsfDzRGu4c4x",
  "key2": "2gDRftpXh4K7Lsv7nYdxPXeB5atSM62Cm64x9LtJ7mKc4qLisi5kb8ZCy9pUdipgHAnYsv3YFy1F1UoogXMAgCRo",
  "key3": "5pt4JmUoMgf6JURzo1x7cUDa2HZGb9CUBsc7Rgg5naPkypxh6E4BdgSewCx5rhRtmkjWrWtSM3ofGMHEh1go5YJY",
  "key4": "mMHoPoqDzyodNRBrTsFWzmUjkpv6X1SRNHYmEKb4Yqt3R74U12WSrkw7fLuxDM9GBTgRV9sMtYZ431uouSKqDxy",
  "key5": "4Q9UpgMoJAk4DYQHiTiX8WyjzY8JoEF2PEG65wTdWi7wfVVXoG7Pa8jwhKrH7i46y6gtozXyowLDG9T6UjRA7iPs",
  "key6": "ETVHMcmAamp3H6fVpWoFAeDQoV6HBkeqHJJAgsB1rg5We3TCUGpJoCXCADMdisQZZBjgH2BLgEzJE8AcHDuNkik",
  "key7": "23Yi7SizxFYj1FwSwX7jmykWYi3fHftWzJjvZFX2e4GKf6w5hu7UN5CdokcboaESKUhUWf9VByhwrWaaG7GnQvT8",
  "key8": "63hvcW58hJtUmjwWnkEycnmZEnnxs6Ned36R1CLcwQapYBRkTzXCAvCQAkzmEuJtmSPvjar3uXiFyCgrXQmd9CBk",
  "key9": "2X2EEb8NTnM7AgtAeXcbhBCG7FjxiHxxY3wmRvkatinsAGC3weydL4WQF4bo5r6xzj5AE9uBr6zPSXfTgeEdBxXm",
  "key10": "2AynghZh4zuKoWFLoPBWPuQLLSAzLPcLrzwF2eumbCTSaWyxJuMjQorgeufuHX4NPGUnA2mL2G1n8vArJ4PDVwX4",
  "key11": "3fvZPGTf6gf7w9ovxuo7wUxDw5K6YST2t4c1b4Mcdiq5uCWT3oXMMqLeSE1kLDpBjkqSdZ4BMirKZrGCMnRCUEGX",
  "key12": "5obbjAALoLobk4cRi3JpaDQZzfy9bHsKN9PS53w348RVpqvq2Z7Zg46eVnNVKPJZxwX6jfYn24LLqabVYQFk3M1",
  "key13": "4tYehKRdzVXHjwzejKnS4DJvLKbBjGkW7ewTaTrSEEwV4wkcRjxiAm4ZB86mKRrbrDugsG3RBRipcEdiaYr2tK3e",
  "key14": "VBW89yrv48jFTKduUey2ashsbQwHNcxM9SJciHk5cKEb2zy3TMQiFoLKVb2TCZPGn2RHVFHv3pgqQRbNKjrWB9t",
  "key15": "31nKhiDf3rKniu9DoUDDBBgpy9XKYmcav2ejfVbWfvHWageD8K29j4hXHanZevRRAxTosGYqwxsGSciBdjstRTna",
  "key16": "uC8GEv63oMDkVaaTismZGjK2g3ihbVHQCnksaamxSfDopRYdMbm3HG5Z9ZDxhC8MVCzN1DoadBnzGxkRrG59VT6",
  "key17": "3WCPNp3Yq3hUefFXkUPCfGXT6HCXwaNf8A2mgTcSco59xeuXs2denVz6JndUZx2BzCqCCYaJif8oVkDscaZYsoBS",
  "key18": "4rjaUEkxpzoXJe7Gdn6rwZn1GVLLq7eEZMmRc9PY4v3Tr9RA1ME94RT5DFkjp8HcYHhLadnVGGeJmzFsDYis3BBa",
  "key19": "347buY7oocaPYhvM7Uk4EYueeHJs2QXW4mtZj5sVcx8YCW2sPdiQckajSWUQaGcjeB8aPhXmg7Gj6azQY3NJDHJf",
  "key20": "Je2UU5ytiyazFZcqrpJdNCFYKYgvQrLrKmFxgyYbt9RwoiyMdSQHETccGUG9yVu1ozR8JtTVUibE3iJvpoigFiv",
  "key21": "5u4kKCMLNd6xXmDtThp2nL1xwWDmRGEu5AXKxmCJY23FCEhGkTYsQ2nsAW1RaG4uk1b6AVt7ukNs6SkiHCVpztYi",
  "key22": "2AbbJh6VvJHSG9NGUg27SdxfXXvicxk2PciN5sVxdmBKU2KsgSz1WtHXJsqPWk7ZFJ4AJ3yhWz8bDQiqXHNoPbcF",
  "key23": "2qXE47fK2nMb3EUHvR8ePv9i6uXCheQrpTEumkBertS8YMmJGmLVigg4wH5UtyrB12ucvQLo7BTfMYub52C9Kb3E",
  "key24": "5HYrf9CtzACTLM6s5HrY8hHXaTaESYQZ15TyQDjo46jJCi771A8HqFpar1hCtmqkyR6bXiAWSCE938DGucxpGYNb",
  "key25": "bRKxENgN2Jz1V3rFpkbc8B4suStFfYKKfDLi6yr3cuG2qpKrJsJ5zxqsCdti1S9Rq8eR8SgjWJJ5hDbL8s2LEhL",
  "key26": "5nvKh7YYsUd9doPukn3G2tjfmmX87VxajCVMkRbLzhSjLZRpAXutHfDvn8wJFxJsz6rDBqNh1hwXBsaMXiTjBrCH",
  "key27": "N3wYxMQCjoXUsAuPEFWqJau7dRZLuCGGwjM8hSAezussjKU7nEZohxE4KVL5HDUHCj4eZEHgvSU6dwcKVh7oHwd",
  "key28": "3b99Fzk8bRbceTMZCYdcGFJ71YhWFgGKhnjJ46khVV4r6gAix45opPJn5Jubv9nMDvshhUryzPN1AkTG1cNVev53",
  "key29": "2wSaK8qWkroMywHzyo9Qy1iBUVba4scRhFebbHiBdUZv9H1ayA9vnGuMJM2ARZ5h9e5Rg2PkbdoNMfsSH4oGLFCo",
  "key30": "nkyap6sbbsHq9WLNkL3L1KcLusbgWBVKd6cXB6efp2TETh6gSoWAFFxaae7U6bsaUKCEWqcBfwT576hdd7rSTC4"
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
