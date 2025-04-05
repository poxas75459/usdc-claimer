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
    "3enkmPsTRQNfUJLopEYdQKw7RRsU23iyj78rfUaRA1Qn6q5uk3XhzUTkZJTrxPB2jTsDC5gQX1bTJRi94qG4tupo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5ikkzP5JP2JVGpzC4WtAjjzj4dWviLbPWfjtWXXCpT2yw6z1L7XcfK5uPD2p1GZBkwhBvr4VjEAtEBc7pMqSyy",
  "key1": "58ybNcUwdbExEDMNMuVucYMW5dSDB9R6JXACfHcuVRhEm9SM9b67W93PV1HeNNT9DVgfBtNAZyeomB2huAF5gsYK",
  "key2": "4jc398hRANG9AdgKjFz8xiGj5VDR9SzXHXESzonEh7PyF2vgyBJ7soMan5DZaWmohfcUDg6aj73TELSeG6APjoPP",
  "key3": "cAQda7Qd3YKfBqeEPK5anCgxAUGAL5L43ja8Lhay3rC6wwuEjDBWZypaBXX6oRFtAiknF1C5pzLa56K6LivyUHx",
  "key4": "bmaSyJxMyh8fuRSSXkpmQwea4Tq3Z58eCMye5pcQh5oYHqgsYJTrgGVcie5UwDs568QHEzKaLxsoPs5GQAtyuH1",
  "key5": "NuBkt6RbwDDv2qB7A7ki6WEQX14okR6rzSyxRTy8wqmpkXW78bgJPkun2qSqWzpFrANcF2pyxFzfHr8WMRzubJZ",
  "key6": "4WRrW3yjjPxuiNcoWKGpN1pXpchWNRpudzBBD5yGUZ8CZEVfuDUZBYboBBmm7QyWnjKzxuvzVgemmcjM4fC5CmWQ",
  "key7": "3dGauoKuPbAESRSPjUKYyYf2qi1Xmt8k16iG6E2BjhTn8SkWfnKQY95WLggPkMhBfDYrgLHr5YDbbzH1QZEasHGA",
  "key8": "2pS3rdvLGCmdXeapQDhYZ86Y4itz5bXAhC3HGwpn2qVJia1HC753hBz2bmHFdk1XsUSSvCkGjSpQEbq8DxqdN1xT",
  "key9": "Eqi31PtHq5X6uhVgo1ceV8Z5qE3UW1snoWi6aUzkKY7PaT7LLosz9nZrVbQgnnCAAAnVSx76MV1L3okBTmSAFjk",
  "key10": "3pPi56H4ndJVYapY1sxamASpf93FZpMYTiChsMLDn1vtobMfUtPcoc5pG5D9MoCZ1YzHEeonkVKBhWkjNYrC5v5Y",
  "key11": "27MtPABZeUCMidbZTWiWQVjfcPmhZoRSnEFKgC4spdBUTGPLVc7YxAALBHNWaPHP12PqokCq2nKnSiQiEwKCVysW",
  "key12": "63uJjh1J6GGKrDDm9dTuWcL1KSUPWYjVJVHRDM6rkmYzmm7W9Dzz5CgcC61UWXZZ6QmX1zae5WKi7EZXckBfxpLM",
  "key13": "3YuZTBnGsW2GN5CnxskajVrLGFAqa4nbFFytd545dUS82cHeoHnRHQd5CZU9YFqQjnoFdXp2YRxfNciapMCNJccK",
  "key14": "3yb7HFoncnFnruHt64urdBK192nvRGeBK8HubbDVw794wwaRu2JhPGvcSXEWoQqC31KqeMRaKPESpiK1WcLKwTao",
  "key15": "5T2tosdJa34kUXYXvGWTNcSUBXnQQ9D1JZhyee7QjgAbmLS1teChwsiExsMJp9FLESC6VxZL5rJG19wzqyVKKEJZ",
  "key16": "D42mkrWgAeiXtgpQaSBnj4DNQ8udjGEBCCxn39Dmo85Smed3NzVAFcP1K4QBhV6VWgYtGnpy1kr7D42ZbGmWgfA",
  "key17": "3dHVsCxZyezumkiS3wKZUcF6iF4Bm9dgVyQvuEaWVPsiAc38YynciyCA9zkLh98EgbWcLx5TopvJXEzh6deKhWzb",
  "key18": "5ByTrCKW5e5oVMzx7bJLJY7dHo8BfF8UqfCjY7fawyjYWX9ZtutaeGJfmpaRZoq7XCXicAzTrReMeHPibZfQa7i6",
  "key19": "FkmWNXKWgXyVUjGKMyUudRpQC1UT18xfCxp5BESJSXWfKEtk9tigjB9MZdc4HyUg1epkBMRSJrCGUwo35WXPdLV",
  "key20": "huSVdaSdpoUtspRkjaH66ix4g8KhUs6DBowXhMRUnYeXLfm3bDwmYBWLDmZR7vPqHApx5d2SDyLReSfNKaLu3kL",
  "key21": "2crBgpegdgHmvQca89qQj9MmmV7o2scEJsGTjHtrPZcEqmz9vNCMz924Zvv5gi17tyHXCURSMTpDYcXKN8ZLB38E",
  "key22": "4q8nTSzfyc921xRUXPkLC1VDWSXcR7NyAt9PXgXmdkxGKkb6rAE5XK4fHTFJgXs3oGVgkWF9svUGN1r2xuHoJe7C",
  "key23": "2n3MyPddu2w1TBuqQgiMXmc7Ng2AbNGcf6QQCNNXBqKCJ6RpfLV4waB1qJSepcwV8UF1NAa62xWKW8GreogRc4wY",
  "key24": "49osAy3ieKXkvgK7gvR9mgSf3kTZXyWs5mmCPihd23zF2URrp6NwfjdJNwRfdbWsJAbJPsA5s8vBrUg6jtvt1bt6",
  "key25": "4hN7Moh91Hobue3TUW3L24NSWYmDvkqK6jaN9Kun7Gb6ZuW9myC3zCZEzz3tqN9nvUt7Y7pCxs3K14yntVX6Q4gC",
  "key26": "4UXVFN1ee7Gz9LUhr3a4a2czeWM3D1L5NxNySvCt5FxViYPQLe4F7dX6Dppad8QowGJGiWjRHkcbAiGFwKGMLxmp",
  "key27": "23mxaD5Y78j8HBwTRqrSTgsr8n8Usg9ZG2nEDugLm7ExucjRQ2GivEs4Wbp5KKXduDfbpJYPKdGdbX9rR4GFEz97",
  "key28": "4Hbyk3sxpUisw6SgLm1rmBjbefHQg6RnpFEWrrbNyhsuX6a7ydM9LEFA4tTeSkkwfyUucBm2kXiDWTQkSNA5ahwa",
  "key29": "5fe8cbnJC6wxShhJ8bsmcfa3Sw79buroB5duZuRY1EzaP9xHv1eNf6FssmqFp9zWyDRo34D9Fz5H5KMEFQ9UjE6m",
  "key30": "2m14Szuks543cUB3fpcxuqtZzjC8PRfbU7r1UgpbbwYG4WxT7MrtdEUYmnGyxrMJMqkLHVn9wqvR3cK62hmggrjF",
  "key31": "kkncaN84m6qknatWsqKb8CzrusZHR9sRWMsfnpudPraEDkdgpnwn66UoXB6hzTbPN8DSLA7vPER2ZLv4c6fKU9w",
  "key32": "3UvTJGrqypH3re7Yky939oq3sSKDf2QxfGEFmXR6ByLetiiY7pEeMC8saRyaPTQMrkZvSMMYgQkVn8GTf5CPJor6"
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
