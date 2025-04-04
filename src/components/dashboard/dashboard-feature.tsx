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
    "3cU4eLvaJacCaPgos9BdoDjHnPNxrBK1SdkXsFBZFEzdoye8ErtYK5kA8iBNSvKBhiRuYSre3EXSqTzSVyXQyTfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e65bwU4EL4ucXDpmvUyezx8fkJJpcfGEb1KeM1fcs4Mr75QAYBogWZewP9pUcJmz25H26GUXjUM1ANz1XodgjxC",
  "key1": "4zPdA9rjaqKGRwz2Be4QpnpgfpTNGvNXwpjgbWjidBogbUrrPekiZfzRSYxrcsCJknveQyX2hDfYnyfCoVXXsp4T",
  "key2": "5JkskPHXiiSwnZ4qksimGGDuSkmZNENTksbkduY3wUxGMYdJN7qqYuvX86mDTF8dbjqyghKpL9e8pfjuoddT8wnv",
  "key3": "27sCiJQEeLmgVbmoZ3VpSawcJCcPHoq6ocikfVDi4yuuZu8tNB3YnFhFzKFoSz5oP8Cz9Kvi8Xd96f3DXZnLSpkp",
  "key4": "2t6EbJNYKwQtWxYT2b6e8wgHZEcdRs9zB8aKJWSgmtgrjShV9jxArsgzp7B7W3d4k8SgRoWc5d11ZbQgqmGLeuvF",
  "key5": "5Dr2TY4SCsgXnN2SRUeGMjqqq2spXVsfGnSubyqS5dMNb78P2ipQeTY4Zn44jQnHPDU9s2qTVvwhakfBCPfZfMjB",
  "key6": "2fPQTnqnRagVcprXbCCt4BpyNHu5NewECUeu5mXaj8KrBgqrXF8FXn7MqTe4ba6nMiDLTiBJNUGmMtfCyvPWfgj4",
  "key7": "5cmVJDnLkuoXnHXdKnk7SnbJ9wW3qUiy9ESfG7boSvz2jqFAtbgkMxRJjjhktbgmjNxfarTvd2za8c9N6SSdJ3wV",
  "key8": "65WKwXdkQWMCvDyrXvSYwsY1KzuNtByKwAtTXB6utaeKVLhJi4zcDgymJ1xaozrR9HoFK5jC9uuivmo3NF3iw17G",
  "key9": "5x4WtBmHfAgY31xf93Nr6q26Df4iMBh2DyUR1V2ww6qY5DRQrWytCf7a5VnEcbmXGkz3myr6FUfPYQg4zpEFhstc",
  "key10": "2RMtsWYSDiR8JHikpP4qk8nGYdjHTnfinR19ZYprqH3bzaH9pMsVXXADuR235oeQ3bnkaeUJpgEM719JJzVKVzi5",
  "key11": "4A7xgK1biiNXYNvWfnDVoi4VMqiJfavqJSiWdGjLvWwqxx3x3p3q6PpMmmiLs4D3kc6oiwCaiawvJtDCM8R8xFu7",
  "key12": "H1RuN4kFt3DjvqzmWKkzVCaPfNdwHrUYb4rdYPxBe2vES79YDJBX4UwKURvmacd2m9M3UuP6b27523eA1bRzZfv",
  "key13": "5MQbDLqA3BFZmBTGevXVMjgmptHQKNYcuDDh7wqCTjaVgbGMYrjzwYicTRXtKFSDbiH5AfXkSKfm7Ck8pYfJQ9jT",
  "key14": "3evtyE8c9XoPdA3swcN3uwM362beTbZhemkgPciH7d2n8v4QZ3Rq3fWdMTo5dbXtQU9Ccbvn5pb4HnXGLKrHih3D",
  "key15": "58siKuRWeDNndHw83FffPUycqcrFXPTrjDpANbTNAgkgwYiVL1ZQrSvy2X3fYSdsA3Sy6bBSKjDC34jfmRHsx41e",
  "key16": "2jCByq4gQybJkcHG7pMWepj8uh4M8Zdhp6nnXWjRKrf884vRoKoc6keQgGnHKydY2XdTL7Z3uys4Bm7DYDu7GnzL",
  "key17": "4UCu9vidBZcXmfNSsZruwyJZoagJ81RRdFHSpUnJeBDPch9sVmveUh2weYKdScUe3szJbKiR2v5VZDGfWhSrCino",
  "key18": "4UpuLB7X87c9REQDCEoTQhp6fjgsTqahpzeTTxcMdzVXTALDcZSSmV6qQYrGhBJqoYTeUisRdeT2g6vxDvjzA9ii",
  "key19": "aVhTipg19ET4n7UYoCKUPbexThfLLqj7CBvaPuDG3sB1ojXXQD4Vw4VtemZzxbaRtcgwUF29K5NUffuYMjSeYBA",
  "key20": "58G2SnVFaaTEVZiAY36ELGHuwefNsy6ZZEJ7Ne7RSMx9jsVVYsyhFxHQkqwqzDKnS2tmQh13x38S3SJZhHKFuLRr",
  "key21": "2PJ6DWr6pj2U6haHKXQULFjcjwSXrKtMAkee3xu8F1UawQCNQyXe63tkWGVvSZxCjMy9WTT2T7yoiLdDTujJMbPv",
  "key22": "56YeR5Kzv5FrqLJ62DkauFteCmUHT3gEKGoGmWXeT1kUhMHUXSWbja8bZ9zKFuCtqGmVvB1ooBwzRJXfdcodJRU",
  "key23": "2Era88nxU7Uv96bCwBKmKFqtLvqAp5NSgo5M1xwoneMeLtZS1rehYoWpWsJ8V663K4dSRz6qY8BakFmNemXYEkBk",
  "key24": "jMh9kmP8keSfZHzzfGMtCTKjZMi7ciSeVRcAnp2QaKAgukkMmJa5aoKzw7PUyd64Xe8eV6Y388sEbiKCCEtjzwd",
  "key25": "44gLnWwiBMzWBH4H2Xb48uvZyvEhzE287rvvSKNqRjFLWVfoiNHP35rJRexwN5QKteNT8EMUeGJPzmX1zEsQotVQ",
  "key26": "54MjdMnFyk9qjPRvkrVNUaRkrBPFyzX8WhNzVdhTkRJH1DHHBvYdk2o1a4NTFarqHnsX9hu6TmR14P6Xozw8o9kX",
  "key27": "4Ln8qjJjXNovtWFzosSftLWLS8Kx7BmyVfFw9VhjZEUdZZCDXkE8cT6FFUHidwEQqLaaK83cUTub1NsQwETzDUEM",
  "key28": "3GvLkywqEkm6qAZaqptR7CtoMBAxvmTTnaKPqpnGpPoGh1qrd4zaiMx9QVLRCzLYN2ZSUsoqMRgbftCDDyFtiQ2r"
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
