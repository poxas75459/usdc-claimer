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
    "5v2bcLGpvMRHwGAG5HPwqYvMuzqgbVmoPJytGPftkhH97tTRuPY7A6QLTyQZ2fhRZva8FjpYJSVP1deYewVQqoM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yw7LEUpgWckyhzHD7JKsECJZeiYAEey3cW8ptZ45rrsr7YXUDCKhNaSVaR6VkYhgXc9kAE3vcVfVrwfvqwr8QwX",
  "key1": "u9JNFtdbS6yNtrPDbd43tj5ZRbzozrXmgKotu3NhoodbiKyiazXu91KDfs2uQfvDRVs3pAcebGyYVefj4J58gcn",
  "key2": "pmyj9yG248snjxs4Tq7GvjZHBF16jz5SXfDJbs3ptEWVNYg2EdNKAuuftbXWfiBG5FewGkBeu1YV6PWWLTCQniT",
  "key3": "WEH7tmnuRXAHsjkXbbpE9kdZryd9RFT56YFwEHg6TKTFZ3tmo4YNKHcsW5MqFSiTLyRiejBAuBNcPKRwcTt545L",
  "key4": "32APPmRMVgLYxzPEcbPZiMVK8sQ46VC2ShhNfAadPueMzR7kNCdsZo7hc1x1AmhDmFGWBYAudZ4o784tnK4gMZ8j",
  "key5": "kMhupX4d4YUT72u3xkvfUv8X5YojjBX5FeXikz8jzatHJMRRKMRHkh4cpbkxtEg8qe1Gbz1LTwtnL5UPkyiGbj5",
  "key6": "3HrT1pAvx7jfFqedy3RqyKcQrhNCiy1YPrbkXeXYGjD7FXSTiqNqv6F4LZpEcaz91wuciUx7DGhMhtexD4HmmAT1",
  "key7": "64oV6v5grD5hup7PHYpcr1v3ow85Ppmg8kwx4y7DzpBYBpW7HF7sKc3dfo8MHdaQyaS5S5aPHmxGD1FWPwAHU3YF",
  "key8": "3nU4H2rCzCNnmxucJaYesrf2FktmuPeTjHKcqS93yRPSPVN7N4tLdBWKiwZEzeMv8TXF3xW4p8XsWKK3BKWMU8px",
  "key9": "21y39mydXMyYzZfd5W44UPqcmG8X9xJJD6FJFckxSGNZzmiV3NYvpiaQ1UYJKES3w7tVXk3TN19GNYWFZ8YFqT7U",
  "key10": "2VgK3modtBTyzim7nJJ3aVkkEEyZKxddD4p68zEK1yhJasFfyiWrWp3sAgsRZRL4jqUMfupiW99ehdHuP4f44CMJ",
  "key11": "5c4UPZY2vFY2quchH24YSaTzwpB2nChdX3pEMtZ6AYSsCqW4qLcPobbGbQBuLG3eX7Pvq31Pf3XLc4ajZaehkD9J",
  "key12": "5antSryNERdnTuAVDUuzrYD7YFjbUce1zTWdWvyd4d4EpNA9SjQG5KWsGvER1znAaqeL5xRtgrUYCzaszBYNRZzn",
  "key13": "3vp9tQ75YtVGV4xqGDx2tkhoC3QDf1ZHKV2LfnfNSZuQuHRKgDyk7ZpdbdNRL2YGRi89N7f7jU2XJaJJHcSszuq2",
  "key14": "27fmmnEJLzS8sWeRYdtPNXn2DqxG4A3kcscquKohL5w7TyaHQEFawqC8PP1EaUqZNzbf7cZii2Y4yuCAVfocJc1P",
  "key15": "2bRqVF7o4oAkVptsgosGsdaWNUufjK2zXCrS6aciUBCQ5sLNFtZxGKBBbnnarAX522CwJ55WzZd2EfyHfoA8QSvC",
  "key16": "56ob6BVDFcChGqpJnv4WBCdvWxUu3Xpts5axpP85axhdaCaknACvvnVTu1u9dXNfdZmQq1fTEDE7JAm21Hx295vM",
  "key17": "23YH9T6SEAsun47bUvxzGryzvKibZ3hrKX5SVojpPsBeCh9jY9furj5nT4onurk8E99LkGdiYWLcPMuPvRH31VFR",
  "key18": "7aEesMNggjXQjYd7vmxjUunzVxuxQpbkQ8r55ErBMcyu8AiU1MbcnUf8X1dEuyjKn2psXpqz4aVqgm9JaQ2oHsU",
  "key19": "2KEC6JPt9R67sX4sCiTmBw9oh3bwufU9kWjA3gBo1WFmL3aHQc5nwfi4iDmSBE2QihEqR5wJfQ8s7iFRRPtrQFeX",
  "key20": "4U9sMkasaNyQuBngdUP7H1o3UDf3vxppS8GM4Dhfo9e97g2JsFEsmTtiSBBs2m7bKDURBCYUGg3Do1qbfd12jZtx",
  "key21": "3LRT1jQttyVZyZdm3oNfHz7WKBW4xMCp3jmw4yssiPCLaEBkay2HhzwNTYuCtu8Vt2eXh48JHqofbF7XvaUjdJjB",
  "key22": "27tEeYCQj6XRwZU7HmR8pjh3kV3rtrdLMB8jzj2pCkntqCUFtYzbwnkjAcidjNFTEq27qJfvd3oU1QeZWqnS5rug",
  "key23": "5s4mV8UqiJ8G2UmwNLoo9KTL67HcDCUp1WzWRHcwVjt5r6sgQuJbHRELNF9Jxwx6xsqAWbh8t4ggqWtXEg7BRc2C",
  "key24": "5sQJUeppnsweVUZUMBABfUC2Z8gQKietFXva1oKPEyaKKCBTbWponGbuYD2qizqajn128yN7THhCQ2rN4VNrwQPA",
  "key25": "2cXN2psyhNZb1pFtBrA6xPpp8jm42YE3W6ofCf4PynP8ppTLEw9Vy5BGDvsKE5867KAziPatvefmkBws2XcA33bn",
  "key26": "3RwoMLExLvmafG9VL8FWXhyscnkFhF7m9zcNMyvwTc5zQSrLBsBTomwgejrrvbKXcGxtPwpqbmC8SpJYdXCx12BD",
  "key27": "35ypk3iJwEL29RFoAoRCgPDybzeDoAsJTeHBygBkaqSvCFPrtFCE6nH2u96AYbu5FatwhHo3KK4xU3J6Sj4XBYqt",
  "key28": "63vQu5NWxBz6cwrXoxg935LQ3hd5jnb12eWwPGaDs31sivu3pWXJuvR5RwFedvfMgdjwPstjgv8ErqasvZeBgg6P",
  "key29": "3Yig8cUrqpuTZFgYUvfWY7TkgpNpanXb9rcEaQCC3e3EsQ7GTuC8iEMUnRVqafuWQUS8ZKdie5vrSw7j5TmNPiNy",
  "key30": "3h5LUJLJwr5XSQfDPZfYcZGZFxHa9WfLaBh36Cuq1cpRkQcXxQoGBAv8cDySD7UakY2HvyMBRkoemyvvYYNJKUEQ",
  "key31": "39TGk2gXbaToBPTUnkZqttag6iZxw9cQAJ4rohr5UBzZ1yqD2ozkpfuL9pwCsDA6vibQWH17PgXiVDScY1QRuwQ4",
  "key32": "3VbtqqpGZM1Bfmyxra3m5bxDA6bwYjGq2L2SwFfrfxANemseBu6ddbDg1eWs3JqFvF3gfk1azvZdRvDURksQDtx6",
  "key33": "ReifcmjrujUNgzx6GYoxDqntesoV7tZfCsXQcfgYEGVH2xGs2w2hffapnrinDA7Um6jkWXVc3kLW4hapgycG4f7",
  "key34": "4kTMTyKipN8nBJn4qwcCVHVJCuozthmveAiqqsvnbPoPyWdYi7D1m4bE7GqmthG69tkrUjc7YWsN31k39wdH16RN",
  "key35": "5AJciVBin1gJp2yj7orXRN1dTW2kAMAFvvEHYZgGnfMTJGJkczzbRXbHHs5qkGX3gr57onAW6TFiS6mg9RiSmaHD",
  "key36": "pAv2kryZojgPNznib4w1rzXgXj7pxZLz25BFbkbiSzwkcFzKudjxkwP1SRyABrYVktwdP3MFJKggFH96LQ9GtLT"
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
