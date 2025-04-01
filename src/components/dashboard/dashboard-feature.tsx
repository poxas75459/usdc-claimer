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
    "5vLvfveJZVinKyzaGEza45GipNYeARgYKTWdQT63HzdtrGpqoabG7pe6USQFfPcTQJNpvYySx3ey9QRApQ8z1bh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPf6EE3t3Wvc8QcCr5azV15YfF39VoUa9JBSBHN6MGwZC2FTEX2EgG7DPCrFQd3DEZrsL5mxtUzzTAFSDzfvNa2",
  "key1": "2Y3UCz93tLEw6dSQPPqcSkQbsDDJeuaQtSZa2dfH56cpXNk87ZBaqisGbSNzso5Zo5TddUJTyMJCzPQwsVPE2nSo",
  "key2": "4zZYgRBLbTCNPSD79gwBZuo7JcbYpCKnctweQL5oTBD6AaTeyXZjtKBNwbZRvq8ha4pet4nAdHTq1TPqs7TRqzMH",
  "key3": "2AbXLcG8yFqKRDeFSHxjmCnrDH2qaFdMWCDiyJPHZv4nwNxbMVbCdxhCbGq51wtqaVvFQbtFE5RE3KgkbmL13rkr",
  "key4": "39psCb6AcrCadTf6CiUd2eApwtCmTNGhywHuSyq6TM3RPbt2cYqNxopRiRGv4GQCcmvbiHyF5krZhYCPhWVU18xY",
  "key5": "4H7WHyTe8e3kKFTBhbJbbJNAiJ8QATF7QyaXMhBjei3NfgfDJUcMDaWNhajdUFQ6iZGR8TwiGRA2f2QQ19Vtbjaq",
  "key6": "2Nu3qet6TTFjjApbLc95xqHUdJikDdtZSxdUG1sXpy3Jwy1wbvZoHcUkuZPevB6PrwqqRwDzqUWt6huqVoC1yph1",
  "key7": "2v4QjiWnKBfaoAaacLTK5997WBrWrwt7YibiniM4QNiqj7Zda8oJXz16vt11v15MReugh3rm3AN73uRr87Zu3ahQ",
  "key8": "2vb5kcQq23h2HPLNSuYwFQ8PeRJ4Uar38of4K5zHir9KjCm9qJnsLLY46LqANk9y8XMZNEVg6FrAfxWXmjkhgYF4",
  "key9": "21hxMYzUQFfyGmYvtbW5zPXE2nywgx28B8ExRWbhhzkhbzq4iVgA7zzCHca6paXzSm3fxxsy9AJv4C9CEN1pdS5s",
  "key10": "4ahARjpB6V72xZqF5JwRZyM1QFgZfJq4PdPXTrACBhJzjzGvkHsEyrNFwASXFHUEHVrqwrhLREXUsj47svzE9iH9",
  "key11": "2bjTJsMQnZnGgD2o4k43HtEvwH9VWHm2eAXkg5RjA7NcjDqycB45jfbYnwsTB4qsA539kka4nWHNKiFunEQKzNjD",
  "key12": "2MwEKcJXuXRVpy4PHoh8WaBruf3qGxQev9XKmzHQ3dFa4pKf5GymuBSkRsWDpyFZFJ9c9W4mHv1bRa8i2qbzzbdZ",
  "key13": "A5bos7oiSbVCzpbYxrkeJq8qMwtzP8wR3tfrz1UvpXCESDNof5ELXcjdfFHY9xV8dQ8BEMi4oBFjgqfvsFuvQ9S",
  "key14": "3qw2DJo7tQthGup8GBaA9xLvFmYHkquJ6TJfEP8NZLXP8hDHtJbVvA4YSd7Z9PkVeS3Bsg9KpPNqn4Y64N1Y5UHJ",
  "key15": "25hLvA3BQprTs2sRU7jZAEgy5q2gPxF1t3hfhQEEZv9JZMGz729YNQrPbLdebcBCgpiubPLHSPmq89eGyBjaxFRb",
  "key16": "22xyEzV8ZwTATAuCTqZA17ZhzQcmfJEbhqbcrJD7yBKSBgeoFeczxoG6R6keMvY6HodW57xja65A6kr2njB6gdJ8",
  "key17": "52xpcgzaq5AcpCbQtzYeEqA1qEzqEoT6hcBEtxzF1c8RzY2EBS2hMH6VasaocXQmSEQo7aMzDezW4w8FAGwNWcqj",
  "key18": "3My8R5NRrXd9NR8xwRPY7uPqgtNuGkt438rsAEPhbow261wt3siqPBtNhqpoEwTMix4y3E3uNKtbdrTKaxfpFPLn",
  "key19": "2VMjyDLWKc7DXoAg64cF8UuwhEGzxFjPcAWZhf7xm5tu4SssKwGdhsjUqAJ187GmqHBgDfXSwbiEzZRAezE7niNb",
  "key20": "5iCppyhEceBdYAJS4sBJVaaa6SJ9MpFcNBbV9rL95gFjsjBPGLurASpe3M8TenJhpv2LeKxHgAmB8Lra9CtPuY4d",
  "key21": "62GPEFZHuEHFj1vxkCFLCqzQu4F1JRMCN9YxexbAmRhMG5jD6Zo7tzthR3qyRx7isi4Rx1aSj2ijHAYWCA1YjJi3",
  "key22": "48vFyaoe7Zd4rRKVyaoxsaamGXgkj6RDyBn6FPdiqg3Q2G3YStxAQe8Afrxf9pUH7s6Kf8ZcG8gnrQizySAVMyY6",
  "key23": "XbuSs7Ak1iAe9wU6iSTcDWdVkmavJsy2amNzb7c5TWhquzsZSQqjkUyrbUPaopCmQMPiFsxWBNhV2CouYCyFDxw",
  "key24": "HBVXrKje6H58etAV7beYTbsUyXNhMTggrwcmCbVccbsoJtLMecoaA7LwQjNca6Jww3QdhbiDcHz7wmoXiPyx73c",
  "key25": "2zHfP7SGdYCdWYovkWvipDBfbpNuyTUYBg6Rv4ehC5Mzo1ku3aAKEYwr1FW8pe8K4s1jcs496qEoaYVPu4R13zse",
  "key26": "59oJ3MQzQH8EN7iSV8CRk9iPwNgLcprHtnGnHgzbFsBU1UywK16PbMznwjgSYdEBsrWpRinYFsDTnDWpKw5h7aRC",
  "key27": "46Z6EXjoy9TdJLDoQN2gsH5X1e5LzaSCg8MYny225G6Doq5KnXRkYnUmbKCvKMbSspupz2JQDs7CBkvQAmq6Ahjh",
  "key28": "3fQmHxhR1HbaVuTMLsZxVkxjNN9KyTDH8kxpr1PfGTSUDeV7G97wqax7MCUpdw2pba78hfcYDRqH8nP3jt2hP4AV",
  "key29": "v4HTkZnDskLo3UAvpUvEireh4zAtqYRdZKM6Z8sgcq5TmtFQk7rwtGKJt3LgDbYN32Uhe3FGBf4MWJP33RA6f6G",
  "key30": "3jjTAB5mELTMQ8wSn7K14HNc7GpcvFkuY8VjCn3CBUAmhYTjDx1DVEWq8Dj5gmr6dtCDsSx3XnfkDo1vmwTF1jZ8",
  "key31": "2BHMx7361ciT8oqfoBqfymW8YFayMr7siM4d9nJXecR8hf6sGKPTLfG4vbefjas7vyiW87jsf4VakNNAJRtFS99T",
  "key32": "v9A96sgXeLvZaZvFGrQoGwwR6TM2CTGfnsfsXwZ1jk65ujy2ZqCr7mNzwTPBsuroKVMiDSBAqeXyfVD2srC7bcv",
  "key33": "5CY5cRBidJYjZhNBbj1uyeoPbeZuaxUX5LdwEZvVmWtPRD6SYkUmc1LmbmEjfvJ97of5uLbwWi8QVZxw1pckodj4",
  "key34": "5qTn43dw3G4RZu7DRBzrZjyAuY43Xh9tKrT7biFxCYYsKMuVBj6XWCAaKsUNVYxTaVjyqoiQZtNFt54SFuNUHbUj",
  "key35": "5MehWsFyJcgaZSBZ4fmNPb6aeLEBz3xjyEbDAwBUE36MCm7Vs6EgRmvRyiCVzBDSxzBx2mpcjW1XYYV9gXaz3Vyr",
  "key36": "5Ax2PBMryNmqMzm8jfTFjgohuXvhftPscQGa66T6ubSFrATQdJ2gxGSXu3Jw72z3iwFrUwnVAuy8yV2U4HhP1JTo",
  "key37": "4n6cAgAXT5MrooafwRG2bBdgRzKi9sr5FZSi9YtwDJsLkeG5a9YWP3osCcVkqFSpprLTHTmx49ZqZtnnhJSwRY3z",
  "key38": "3qMqY8vh97ctfdkMicNWZgHaW7AqxuWoZyAn8en2WuUpmz6onF9aiSVvrbTfFF5wKLSY15QKBADFt8ZJTZJTHBC",
  "key39": "2Dg79BWH9VgxjYC523TLCzX6e9eEEVUfXkUgKbX1pJYBmHWrBB3p8mirYBjasxpRE3JG8XFcgiKnHz8t1hxhVmKP"
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
