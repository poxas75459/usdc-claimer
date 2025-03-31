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
    "2hejG8Nkkv8K3LEYAemYfZaGFPcffVDi7QVnuudnT1gBqtsaxfURj3DmxXtCLpU2AgzM91zFtB3zNopQoBkt5pQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6112y9TocLjeh6MRzrFCcmbCukjekvSNWirWVMyA53cfERbSDNqjngbXCdvracCxU4adKgQngDF9KKhNmkQUR7Ho",
  "key1": "cm9TC8Rn3LNVBZqUGjpP36biwwV56WtSdNod3Kx3HkostTbD6qvCRkAVDQYaPwHvdN54fGjEN5kr7PjBXqTSqvM",
  "key2": "2xk2Pj3Lox7eqRiQw3SBiByu6y8YRDHmEDAbCrcuvagAN1ejZ7mF7XipyLE4ouTuNhA2hehsTqRjhD6xKMV1o77C",
  "key3": "GSTpL3Veph6aRpmsAwYP2cavHgtFJN9yg2MZiqBSXoEgm7D274CsM92vrGRT1zMvsx6PKggcBeV9xVuT7Xyo3co",
  "key4": "vLueePDZSsqUh1ALWRgjX5WDLj9fCLXTpuU1FNVNzGeKQBuribdbBBooYJXKNtr9v9QMxwyQetticpLGmjD59pu",
  "key5": "5PM3UBMBt6jAjgZ9aqJdzqAZchH3kboyb2KBrAiutcFDDumi1adNFfBjFo16YZdebEzEyQP7tr9CqQjcPs1YdYYH",
  "key6": "W3Y6YRvvHeEoBLegBLVjtciC48B2DEVzKqTyXZ6b95snRXtKxxWznJpvvZffjyjPf5CZDG3sUDrpd24rvJZS5n1",
  "key7": "saK1pdUqYuzs1XMZ4KQQY6BdMsvBTbhA26aYJ58L2MSMWyLz7KMGdKE9H8xtCm9BKjJMJ3tNmSBdY7xWy79jvoA",
  "key8": "3wu3cim6QtHHxoZfefZppXWMB7zJnt3UFZbv8eMkNGotKoCpskxSmtYnkDHugKa6LniXYDjiJavdMUByZee18GuH",
  "key9": "5oQUr2Q2EsNSeiiSYD345FbHoHwWxAAbz5ucq2FkZZcKWEVNERSnSBy58nzkjaiWMpswqfeQ4se9iSiRKG9C9tgK",
  "key10": "3L2m6V3DWJbAf9ntfBWzqFRD6G8sqqouQ99tyGBmm6MJdza8UDrK2L5MzivG6jmrpRAd7SW1A27D15217dQ3pCnp",
  "key11": "3Bg1ycagm9ypfhn6WwqBBEE63aBnE7fVrYYqRtoVhGACSkNTCEjJkdn8VzEkiuJCfR9p5gebGVAYSYN9ZHnT43im",
  "key12": "EHYV8zwWYVzBby384LnwkxbysYXEXBBhynf69CYTLHYgAh3aQcNcmwJdTbVvZdZ26DspT4HSRD7mpyBeNbYmGFd",
  "key13": "42h5eLKTsYowctKqYGFVkn9VAFKHECwyn3ow3Utyf9qnsbLyzdc1fLWHHuoa5NSwp1tPMT7wjnFtLrvahdtbsMD6",
  "key14": "4oEE5WeHbEkU89Ld61H9nCSLnS74vRSxjDnCY44saev232ayuspquLK4QfEs3CuY9gYRxgS5nXpNGYtM3AZWJe2C",
  "key15": "3tYqBrUrubq7bcYPtDZ6pRC9MPNwaAewvvNLyc4W83ivnt26XGdDzB8qsPcHQEsaFoRPQxAaYKDfvpJEfZQJrxiM",
  "key16": "5gmTb1ym3yNgpSkkyx8eSRA7jKHTy6eTekcy59aFnMcJaUH97z2YGqvqSZLsh8KkuoUy2F3LCubBKxxFHpByyP35",
  "key17": "4SqzhYy4Jqebgn6NuhGVm9hqmGi5ddfvCcWmnTtdg5kcrKemgoujCQ4z2mVCePtsCzCCorecpP7XEdiU9FEHS2ux",
  "key18": "5Eo5TYTuSmRaiifczpDC5byaSseXNV6RuSrGyQLsYK9cNfY8zU5dmSLxn8zMEv6EksG5uoTvBUR7qC5LcdWibqXS",
  "key19": "4i31E4dJKKCE1qznAKPoULNzBsbQvkoUMjqs8PLPSaiDMCbcU1KVgQXB2iuehyL5PBAbPWrobwDZ8GFcG5zAqpKE",
  "key20": "jLyotWyUwcS8XzmGifSiRKcojxuieaQUz2XuoZXZn9rmqbVxmSpofLs4PwTJ52sW7dUGAoPYwtFA1we6A8yyyjo",
  "key21": "3xXzg77oFsj6RteRfYPfziUkVMFVoJkkXHGuzJYjHkYsiXLGxJE1K2XRpyJfcSG75LDaiWW8XC9ghhFUdLgdTVG1",
  "key22": "XpH4VGsUksoqKmhSBCSVn19Bb6B8Bq4gD7hAd1eiGLEPFXymyGV2y94UM23EyLKh1SUaSUpSisi2EGjaBtcn1Q9",
  "key23": "3wn5YZiL6RokmhVfXor35BZWGaiRoHhafUcWdQzy8PggdsZGL9URSGJPtZ1PwkdmBZujhtyhLmdjCAEWUXsrKUK3",
  "key24": "3LK7rcsKqcqgJRa6oL3JwPnHpHvExF3cBgEomgGkGo3QWuRzeF3hwnSMeQ7ZhBpfamio4PnuLXELS3aTRXSNwUqP"
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
