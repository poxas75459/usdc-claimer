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
    "5maFF8cBnyUHtQrpmkduPsCie7MFS6v7jWiEm2ynB1aAAuDPGMzgHrJyG8HFduMtiehMSHywbAX6w4ZYvtNhTpjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ttzXNw4LqEEXvTumhmZkJkFwecqvJbZj6mB4bWZXaErTcv13a5z83e5XVuBB4wE5h2WmGsbuz3ghrJ1zV1X3Wgj",
  "key1": "Lcj1onQcaqwTZb9XvTWMZ5LMH5AdLKD1TEMUsH86wu9k2idHnBjHQyCC5hhbZyt9kyDKNBb1xho8dHGWLgXQoau",
  "key2": "4mfSQTg5YiwBo35cR9AbWiGJtE5CGEEpCSvmNxRW7ekr2MG1DxAwjrk8UCN2TPJ1Lz9QeLwG89ozV1U5rftYC8iu",
  "key3": "D87sWybG9d2BjBUzBvsXAmcHdwLhpL6GVnkZXbiq2gYQJqxb3NbC5PGGqieKJNXHNAVYEDHdWygsDcvWZ1bjL5J",
  "key4": "5zKKLX4L8gvGRwJhyy6KHUHKpLVegKDGUDrukdMQG62c6r6LjfMFH1Tea6hqyFFSMX1a5qV9xFwN7GSacakqTupK",
  "key5": "xAJKYVZKCDbZjPJtjCFusAVHRemMKCaECXmR11GNqwDQeptsZPUgEKgZsjrL9tsgZYjUCVoNCFUNuZydB7aeEcn",
  "key6": "SWoc8GJxJ2dFKoghFbd2G6rbK1jpaYVqRLt9K1T7eefYaSMVHU3EEB1vUKfQDkuxDw7NF3TQXvBpRhePA3re97S",
  "key7": "2FjK6X1WjysLkXzPyFEETAtr6oFF7Gjho61PDXzpvqiLAgj2cyiSQJ1yskD5WtvT98Knx5jfVrUWtCcWFHRwb8De",
  "key8": "3EfKvwVpqKG88mLdzEAV7SE3PTFbYvqAN6ZvquPqURwwkDSrFKHC96oY3YdHYaGoT29JuyeyHMsTxbHxC4q4JDXu",
  "key9": "4CWeYA1nQ2FLmxpsAPgkYCKidysHkhsgLRWDP1MrfbGQW8mrCmbCXhnXE8qqGqYbhsV2YJJogfsVwwosfjcEbqka",
  "key10": "pAYm19VLD4BH2jKbQwaPUy2pFArr2d7NEn7q8kfefvSkivq11sXpCc9gm82wxD5a81yUmQfsxMtg2TJkroFMCVS",
  "key11": "AwHyoJM8NCwC6Fm5KhC6C9dxbkPv1ifvB1MBoKbQZ2pKn7P9UfBVptzexsmEgfJQtqM8Qs4peywneGhQReV2aSu",
  "key12": "3mquyCQA9B3q9jgNC47uFyftv1R9A7Za4ac9UiaTPSaPSYSBDUpLnNsZMVxeFXj9we9KkZyLngLznPTRbHBfm9T7",
  "key13": "PRqB1oeHmg3RDjjbQeBmw4HGeUP9aFTpH5K1emu2k2EAsN5bmbrJuvWTDJW69zU4L24k5gTJ6tENPxXNbycJ7cV",
  "key14": "cd9sJDaD4SCLnNAroH9Hck1Bk7TKMqYyegSUqNuAxAJJrfNn9vBmFQUpaXwGv5UjuwwGCW2q7bMUAkdcoMfUtAs",
  "key15": "3DfbiwLP1kHGykECELQUqoj742tBNYXXjDDWn4GMTBDst5absBvUTEo5vU2yYVWkum13ezpQRk8iSUtuXWxj8867",
  "key16": "3A6WBpVGMCm3MazV6yY8Qr4Ssa6TaJfDNkv8fhZ4AYkXzDNKk7v5XJGqgdmHDv42zPDrZYbh98geoQYaR7xYZrjY",
  "key17": "2FGRBZYvdt9TB2pDnLFXgJXgyJ3bfGqNNtP9N8PtE2G1UpDKJ5c7tb34JHRkdGeKdTCY7Xzryxp9L5BhHSLmRh7D",
  "key18": "2C3DC3tuLvP4A17mYUpwCdXB7H9C72jk47cKZgeMzpoRHntbjwLRxiYz4cuSgWDPnrmT4DooWnPs5Gs9qKosaEQQ",
  "key19": "4JtBB5wjPCP7EkzvptuxrGT1SydWize3aMXH7yxKiVy7T185RxKKoycZrHFisp26FPGjrTDWtBxQJAExBd5QkeZk",
  "key20": "2seGgoAPJbvxPC5ksKsH2XGwjJMJiFrb5eE2kcQHvrnmPUEoKkBzbpKrGin5TNLCAPU9zn8AkHn9KYKHLWzxg3n",
  "key21": "3HT11xFvpxFmzLfufioNH4wTxEEuFXSqjzvEd59uyU2ReqAiR99ph24tEJVeYXicWU2pn35pnfVpTyn1MaLXv3qy",
  "key22": "2dcrQA8dLvPEzLK5noWGYHn1BMVd4QxwvQr3L1jZqbS1dR7CE28cLEbhQcqiiqkRhKzAPDDL3Zb37FHEwDjRLsY4",
  "key23": "4eWHujtCnZdturtFQo9bakY5dVT8Ks8oqKfXaRextecoVHzDVrprd4iJTXZ2wAdPxXNPwJKHUAvjCrC8JcZQX7tX",
  "key24": "T6R2HzDr7DpRxXLnE2xCFcJDBwqg96E5o8qaAbzQcEskvR5nKN6ACiTFJySwyCtYdnrtgnWP7BU51QgwY3Yn5kq",
  "key25": "WMMPKJqQWKdYDJH6zEFFQgGjFRwLHNerc5tDHu27fiDj3Dbyqcy63VUinb3yXbPS19zQWz1L3XGoorokyXFn2Hq",
  "key26": "4RQGEKrN3zV19sMHDGyTvBMLCy32X9A1Yhr3Ap8yMJuUeFc3nq7VpBN7j5HRPTq665hCzeiBF1hTcvCqdXQSXzxe",
  "key27": "5ndYzTZ9i4vYUm2w5FTshcG7kp4CCfRfCZHWDfnxCodRBsSqPyG93TbJAw7mg3z3zPmGWYhrrAMzNWJkhSJLCriL",
  "key28": "3hthpDNpFSWjfpQRXUWyF7qfREcGw4d3EuJ4JeExnBuQa3kvJKYhfQ6mpRGGdD65d6vq21ZhEyZphdHV6QEwzjYS",
  "key29": "3LvLZ8ocsTQKhczRrrm3rfpvUqxoGJEBxgE8KbA3c6GovYbj1Mk2M7vVmRe6bkX1AhYDBjsmmTatPZir9XALZWb9",
  "key30": "w19HvxUEmhxwZQTGJbSAPbjistAVkquL14CT5jKsoXdx5CLiBv3x9jsYaizoj5KY7zhqcC6FKhSXA5Q9cr131qV",
  "key31": "8sf7kNv4HqtxHDarTB17j7PTapkKaXQu4vbSSDZt4QR8CpwAdiKQP6dyZX2M9h3cRYGYRFfa9jREMbqaui8Ty8V",
  "key32": "Y1R5F5Vkn6eSV3uQPjAJwmES2PaxtajKihAMCnUYAS2sbyJFDbwiv6e5kUFRx8vs3MDUQAnpz4B1fd5EJGe9pAM",
  "key33": "2wF9ANon8sRu1qfkYJqk1HxPfum6bevpakWBnk9vxyfLtfTaXRptfMiCtrxUJPYCkARgKpmtNXWpAg9WBFK5zZzB",
  "key34": "2WMqg55scZZbSi27pCygtbvt3SKoMrGP1ovbL7B2LH2n25cd62BgvTkXHkLVZPjECAzxpUqNUqdhmTuVq9ESfXjC",
  "key35": "tsHs8SwB4kqTqLoT7aBk2WHNuusEiXXQhPapYDbd1cRTDocFfEeVkF4Vi4cvBtJBR8iwvf6Xcfy1SGohexKM64j",
  "key36": "2hk39oSgkGNy2UpRwf5GAoG2mWFRhtBefgKx3Q3Rgr9SBCkwncYNhgp3ATd86p76ZSegXx3RHDEY4EXpsrRozDco",
  "key37": "42gQwjgfohXPbRhS8y8LjDNbc4kaymYwQRr7fGMh4PK4rG5TDQCuXtZohAfSUVXNj71GZBpHt6PsDfzwnqKuPguN",
  "key38": "5YxzMEcxYwYhaKbPcmno5nDUKZqpD4xoCvB4oLoxJarLTsM2GBbVusDYgAtZYsVN1JW3zF9mJjENiHHRbyZ9i2cj",
  "key39": "39QDiwfk71YFQbyrijrifzvQoJ3LpaaXTscTJ7AwYoZXqLzYyBrPtY5Vij4G93JjdZjaP9yfTuEssjY75FwU4qkL",
  "key40": "24cRkuWj2PeKifRQWc5yeEZrAnPj51noTQYBRVCSAgfQ9auSNDfcuxBvEo9LEDXVi1Vg9SjwxBHcnM6bF7dGVu8G",
  "key41": "2bCq41qrdiVEQnwb9n88g63bN3a2kgMpeEuCefXqhKmmZYgxyCtoy2mFPZHcpRFgJ3skJzsYgjBA7jUf1Wq8taRn",
  "key42": "3PfRnCEGstEaikNrFHR5c6PkBkfFy9JeoUFBdw1QKmDZJaqER9hRf4oZ7YfoJ5juhxpvaJK8GHZhvccYMCb5CwPM",
  "key43": "qJxcAm84V47qjvqgZJaTCjTU1sN2iefvWwqaxGnnsRuiWZyDpacf6ZG3hHsAA7PgcCKecNrnVHK1Jwfz7deA27U",
  "key44": "4NvD7sGQL8JEFqsaAmZxqeE1LTWcb1MJ6ZwT4WL7VNprT2iV6qJymkhSPxYZeRgYWtAswAZzLGFPyUZd4sFXae9D",
  "key45": "2wW22PFtLYHeXYxZJvFEsWKue6uNXsph1NRa5uhQS8HNcwBTQ9rwToEqdRzhxAPwqVsChva619Y11gryBi2yRsJw"
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
