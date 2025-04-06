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
    "t1yRi9e42msB692sNLKif77PHsdG2HPWptdsKSVsd7DCHgJ3EGTaCTs7Dno5yiTjyaXLR3MS4pbv3c6DkUeVooD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hSY9TnbNc5jGH2XcqwMUxmcF9dWVBgAzNk75cmrFKQMD6sQDZEB6AbgSLpQHWoSyMVMm6YXaeNcbhDxnv49pavs",
  "key1": "bP6ny1i7VWV9mABE4FPp3JUamDwTq8E6Ymd3WXH1P6Z5MipaMwYqX9htb8YXY4fBKGW7sHS12GHRU7eM5xteUs4",
  "key2": "3nPMSf1yyP2DdgtrgLxvVXEYfs7qXo1k2wwUC4KqPzEf1Pc2qGmhmChwRK3k3JjjJKyqZDgDBthrfass313moeFQ",
  "key3": "4djwayMuz32dTHAWBu7G5Z1uDWFJcYg497b4yXhMBBt3vjzUcdN3WRGQNVHsnwGCUZ3jqJKzFLJNP8QZnshDuBdj",
  "key4": "5a7DkY7XaQXMthYEsab2wYDd1NnBfitaPdXV9X2EqzdCsHhgZSEb1p1wTJjuhURi4Bx8izSiZkk1Q2yYsGwdy2hd",
  "key5": "t2KUWADyHDHymV9fp9CeQS1wkPmWSFHgS3k3BaJXtrScZmXpsyqYAzEoTa552LFaaksvawZFYDHmN73hkWdWdni",
  "key6": "2ipv3XDxNU3mVPs3hJXq3jDvQeK3KrGhNNd8k2jhyTveDdbax2fW4H3xeVi8fmhmyANEAYs6G14J7LAecjZx2wph",
  "key7": "56ZAgXRd12EjNhQQhftW9GwdrW2ubtRow1xAogp1mWds4oAtKqPL17i3F1m98vKKmFbRdn9wiMfUTwjo5N8hXPhq",
  "key8": "dDXUKQYDZfXtMbGJveBQigRitGW9dqFZFnnixbn3vsEDNFVHPBJmff8VqtG8tZwmP8yHtKFi9TM941E1V5M5NGQ",
  "key9": "4ictBCFe9jijcNHLUbrxsgUVz5TARuhr82Rs1uvN85RLRTfJMHSZFdejQsfyqZVCgi328WfZNpkbcXeeCYxFHJtB",
  "key10": "5WaAb44Mss3ANBA2Np9AD4sQ4UfysrJqzx6b6RgB8GF4Sdx8TuQTo7BgANfxV9hVTWtbkMqQr8ECsAvoJQ1VqxCB",
  "key11": "2Ho3aXzjoTA77vKKUwAfXCkpedjBp8y7Zt7Q3JY2QrgJVa9Zgs1ihKikMZQvhbvQYUmnsmGGZyc1Sx4sBNF1RyMb",
  "key12": "46eGmVzw4EDcnJoGEBtGJQkM9Xf3auzvGGnQ7uzcyHkmie8pYBJ5FKcLPHuGp7ddDZqYXPGeS5jXwhWvThSENzr4",
  "key13": "3RxrBXN5aien1TounKxScYFhuj7PbiWFPZ8XaHxLnT2BmQ2P49nLpzXmiMgZH1baQzsimmHGMnXxwx1kBhZrWJpz",
  "key14": "5CCGYcv583uCGQoCfhnprfXhwdd9DRDA6yW1YM8gAiC9BtEVD8s3BrtRJ93XLo1wXknd2oCT6B6jiwXycnSpWopK",
  "key15": "2XmTCnExkUzHin676GPYWPXLtF2CGt8aaFbwU17gowLa66zVnHDq4wB9uJ99n8vy79mEqvmD1qLLxQa4e4uiKpBa",
  "key16": "5MoidsVm7EcoL8pNfMUM8rGYGjnoMXoSGumcQhurieGuwvyP36XmPDvon3CNSEyCa6ZBUuGdfdfQ38LJXbmYu3oY",
  "key17": "3YPgaZPxn8ibSLxRFZBSN7D4EbsneZDHT4KWYBsH55A1PXdewAvEK6AgjYeB5MwQXQnHvsrhMouDL6J8h5RN14Ca",
  "key18": "5z385ygLaU1UyT5ZpETSekQPZj7QPT5KuMg9iymdzT4nCkJmzvmiSSJrK4fuAd6b5nLHdfzrwcLggQaFS3dNvnzV",
  "key19": "4MyBnBXNZ91TP3BoHFoMeMXrug6sTxyBhsz8pED6ZV9C4Ph6XejX2z68ZkpWXjiE2zgJJdKM7oVA3BPusxebzviE",
  "key20": "vSWPVSvBLNXKVAcxu3cbpPNQsaKjVXHWR1xBmazDWSvH1DjA5rNnSZEn9dJ12jiou3mrVcHd3cCcPqFZWVeTXnu",
  "key21": "5eE7PwWCYEmhS3y4YG8feyKKCek16kDne5z5Td9ne6jHFC97VN51AS2oQspNGn4B7DcpnQ5s1aAhXVKoHJ8Te7SX",
  "key22": "2HM6QRmVDZ92h9UnQRWPSYPg9RPxrwe7X8hreKK1RcbsU5G66a22yFL7XxGc7WEE6dw6V9oWrszt4rvTUEqskGxz",
  "key23": "35ChviQC2YEckBY7DWp8QKy9MpeLeDsS4KnWQGGMsXitGSbBZjhVCshdG16GNYUgQnVk88HGezkk7cXFrh3hizWY",
  "key24": "AXonQ8Ak5hLBvHuNu5DU3QyK1G7SNbK6VGRQUVpRQs5xThZoC5NJMKPJpaA6TYw3Y6E2emm5tWwcXFbnkYRnEnv",
  "key25": "2hBVtL4He2Lh4XSQ7899YGkC3cWz6BkJkkHUgCeWj2RLzhqwWSV3LGcgRbHKH27UsTr3uRzZBYApW8CfEWje8cfi",
  "key26": "62jUSEyr5NALJygBZ2M5JY7BcSDajohj2qy3iVy3uK6Y1KtDPmycuHw74T2diibLrtLVKKKkx4b1xjKg4QxX4Dxe",
  "key27": "z8DA6poDLoB9jz9u431eXVqFMZf3XmDWyyZqHwJpANpMPotPqRhn5e3y4sS7Jjz67SfXcRqLTWBAhBDTGxaGS5u",
  "key28": "2HydFm5kADxTTjfsWk5iErgXMjYrocUoK8BppriuAuiqGzAh38XNoSFTE9iaHN7rLZBn4qqeprfPkmtcZq8eFFqb",
  "key29": "2EXcMLaHaue8idZfn9mwJD98LXcVskQiU4X8c9CicGBbi3LpjJroVBrtDvbmkqJgdUgfxbymgCvo2bNVyNpCbatB",
  "key30": "3iSKY9QBRTKL2eR7qz4aAmAQj1FTEQZr8oznMBUPek7yDY6YdF9BpEoNJeA9suRTaL1kua1pv4FFShn3Qt9Si64Z",
  "key31": "5Z5jHFVMpaBFpPojsoZXMFKEMvxq2rVU6As4McLD7EPQF6K1nwTt1mcEBCQRTJqM12wVu7EGAFgasgGcYnBXRmxY",
  "key32": "4kWRdsgJaQcFaQKNqD5AYaXzSFSwNRzPyjgUuBWqgmzuANPu2mTNmVwKbLaWwe7rLaF24yyybperBnZUmgpetE5f",
  "key33": "4WXQ9zjMoHz6pjHwgnDXfAWFDnwRQyhmz2sMdFBEWQhpmyB953ryWunYk59CLREGZXPnZMZatrYuTVdGcYeeaDKa",
  "key34": "oQd9nq8SMQ3cBHRMfLv2iF3dfP8QF9PFT6MUxui1HT8KNExGAJJCmYzAEfGaTveYpMLXJgkoZuad4p2qQ8Dqsr2"
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
