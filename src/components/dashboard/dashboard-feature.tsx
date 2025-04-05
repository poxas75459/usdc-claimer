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
    "5SByk4FNKUhjeeUtdw5nZVn7gKSXHYhjaEP4V86Xz38u4KLdrqmECT4FSnLcgeJi7J5ApRhEJ2YySrhPUFwUJUE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXCXB3XBRB7jvNaMzCa46kvCNuxEkndJ2QQSf4fYy5MZ9Lzo9wpFNzqrWXmPCmPhs8v3eoyb2yLyXFrpckjosW6",
  "key1": "3JciB91aXG35DATFHNbATCVyEVGSXKWecQajZJEcAj9QECFP4gafT8CjrkyDB9cXLvKPAetxQcYhe5LhzrCXb5DH",
  "key2": "4sGj2WLmr9X8236f1ywuwBkh6s4d5hLFLTWVhs4275At8oGV1WeM313FNLpWCkK3vPDHPeEbGt755q21hFXwy16g",
  "key3": "4e8AGDNdzVzBFccfTNSoiSYAFYBSgersoR3B8XXiqmG7y1vsvWER8HHPNsiauuDmAiD8XvQb5SGziSqzooz7QuRZ",
  "key4": "3TZQwi4tDFETPJtsDMBXs9c3Th61oR8cjVKrNfk3zb2FNkaLuo7yQ5F8BFvs5MjcfTnJdAAwc5D9Bn67Tu6ZM4aW",
  "key5": "WUnF8XdV3L9SusyfbtsYbzqKwHVrxZwvpYgUHNZji83d9NxiAmkehfvZhhL47XAHU1WdMnD3uQNvH7SVY9wnGJi",
  "key6": "3i6cCRM41v2araWoZxXx2zvSmvURrgYm6MSLwGt4tqcvAkHNsx5UcLeR1Aj4eoVZEXQnTND8PX615W2NQZ15vKtp",
  "key7": "3HE97ZpLPn2H8LBN7Y5Q22YVP8dgYS1x3bWAr5zNNQdpKHqnjCXgdzoWSfTM8DsNKKr4zQDk5FCLXHfnRFGogN2h",
  "key8": "5yyAPFDrh7irmcdKwAEKcnTVVmWQL9jN3TWUDpiPRTapGbFWNxPdAQLrzpVHd3xremrBswaswpnVbF3wYpdEiPTa",
  "key9": "2XmsBgdf1n3KDbikPeVNwTb7CiqCbzfP6Ej9Gd4pporRmZV1dGUJPHgDG2LqQsFV8a4JARZdKjbVP1rUKejga7c1",
  "key10": "5yhdShUirkuqD3yUuoChvP5XBhWa1XA9JzyRVcWpMCAUFRrysih8KMQ3QRyXAWTDZnqY67WdottUzkMS7CXKRgXb",
  "key11": "2AWujFye3FXpkesUWoPjFkTwLR9vssPi11TdNTtDacWhKuc1Fcm2JVFdDDABcSjQwUZsbZR2LfZ7YDsxCyjMxp8j",
  "key12": "5N4Mevsg2w8m6Wn3DQNMuwXdwghUrJTvmksi86y6qSkpSuhfHjDz5uL53MGirM1NCzrYfAS2wXKtJvgmewBvu9UR",
  "key13": "xNd3kFVyXNmDz4vvxqnnAioYJLZLYjYkRhyoqvtinY8NT3DMiZtwYqLVJJqesrB1WzJZoRQ6sU1a1x7R5yuBuuu",
  "key14": "4yjrz6shGLRf4UL5M9ALk1YLR9435xhtLLBUyUViSnNLa6XvcHQjjGZuRYW2SMgyAysLmQwuHuAqdQEq8jFrUf5N",
  "key15": "2jcuSFCsHBP3dtnWaC7KiaLL5bD8aWnXSKDvMrt2LXDrJkZ6L76gHA9xFRSb2AhhpEVJ1C621hs7X1QkDMkgAiGe",
  "key16": "47rzsaK7eJe6P16p6fuGpSfhwqT48Pbidw3He8udoSD9G3RYXfirYSzdbnfSHNQgrW8jtjSk3anR5i5HLRiMag9u",
  "key17": "qUV9Z7KuLvjTsQBzR3P5gVJUWdjwtRtGjSgGiCfQRC14gRextbGFthqouiuwqoRHRfZ8Emy6ikkaQcywn3h11Zs",
  "key18": "4KSN3nKFYAn2TLNSDeZad2AYUX3YsryA9Nr5jKhpn7fAP3MKMWd8i5PQAgRmZ2RaVDPhj1LvhJJQ8zT5MXAhpZN1",
  "key19": "5jeeMdHqKfAQtN4FB9dBU2GCnsejzeY4vt5rG4nNLUthswetucBRr23pfEWZpiZwN9h5D8Aw5UZqRX2wXSGCmyY3",
  "key20": "VLajEpLBusGY2t5FQ5YuAboWKiRMWNPzfu1N1x36T4iaR6eKML7bGTqNuNx5uvRR53WLZe6GQMeWVKDi1UZUk4b",
  "key21": "P8sSZzEVEqdvSRcGfW4o1FoYKuiyAEBQsLRLWD5AqXWVNL7E6SxXRZ4uR5SaKyT12AayEgw4ow7XFeAH6Vj2Rj2",
  "key22": "519KD69LNQC5rWZkNrzNX2R9GaYTokGky8dzFQ5ncJgFhDZ9BRnbBYznKtkUZ8qMxDrJ1jWbW5ugvitanmQ1Fn6r",
  "key23": "634A3HddS2DuiXskaiBHyph9zBG5tm73JNvdFkyRAhT6QBffzzrcBbE4a5See62tedoGRA9CNoQWCGPcw2oe3xet",
  "key24": "RBMMRMTeEjZ8vz2BEZSQSFUQ6AjbGb9EsF9jvCzuJ34X8fCU39KEbYgPtLj8XNkhp27HekDor3S2cnaQusjMK2K",
  "key25": "3spvo5S47dfC5YzvoziWtPfBLCW4B3ZNZmKhoe3KW1zRYPPtxQRx3Ta8g22LZaorwSF7Fk8CA7uvBciR9GGiA5Lk"
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
