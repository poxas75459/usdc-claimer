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
    "2XuWYSwWdvXTbqGbgjpWrk1VC46UErPXbdjXh7CVkKzTW6ep6WiLSvuckDfAAX2F2z9VmL7gQqYNpmyiC2WCymzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKffoX2aDDo9oPATa8Sfjm1yYF24AAqsj4H3uKQbsx5tCxvpzJLJb1ymWmmrJuSKaHCNidnKZn9u566kCdRgFy",
  "key1": "2cqwiMCg8Cq5cEtEdKfUnWu6GofexP1CgJMBs2nPSQRULRf3byyuYEdX1NCVsqoUXRfvTegVtssGuSks1nosCv8N",
  "key2": "4TkisLjoSpdY9XP4hXrxKoLcx1Cyef6emu7KVNLU9tu69sApH7UsB6UpKrMdz1sFgtG2pHTHpvbU9mwfd1JuiJBB",
  "key3": "4e6xHJWaZMt3XCj1XQr4KyMmTa753tv2XEHS3NDhNTd3JRRCmpS3XQT61ckhjTr4e7Z83VcNnpRAkhJzBPGRVjh8",
  "key4": "4KqZFyGYrLPD7QZGAymvmpUPYm4obFpPYizLuy6gqUWiE6roPUEcvqWQBwKQ2rgkorSqFS8asG5skJCL8Eu2rzyM",
  "key5": "5EqodGJ79NzNiosJSnHXKfZmzJo1KfdKpHShgmMUPZJnKiPDrZNGm9KC2vwMfbxhUo3dXxLDjQX9B67SNZvqaTda",
  "key6": "2VNcTirMbTGzoCjF5JmY1iUW3YNQU7iXfSWaCPviv1dEsWwbdzFRLwFhwTuZNuwhfnokqfkw78FbgsyrXbHQFm53",
  "key7": "2Ytct5GaKpvYhucgQ7y3GtFs4SMuwJWmDwFGZqb66rT9eNKiQ3kM9jSU9t8egr7QB8svjwEmGEG4zbrqP2s5NGbY",
  "key8": "2G9RD7Fo2RcmbWJKHpzq6GxrhmHHMt74e4awk8em6trC7C7pvEnRRxfhMjhqGp2EPX7Ta2KHxZ6zv9iCTC9UusKS",
  "key9": "2j9kT8zSroKiZoUU6eEkZhKi12jp3dnidQFQHDUCqgmGqZGv1unRZXyRBJXG4sMaB25frzwiVNFqqot5QVJwU7Sw",
  "key10": "3Updnuwwj768UoF3A3pWeC45WGTYzv1So7L3i3urNo72AwmdLuHTymKJaUEorGN7Ttoa1HBHFn6jSFLVhFyX94rn",
  "key11": "3WK1UKQQdiD31JtRJT1aEtxcfRsRNqb3s3DCXe8ziWdwhoPMnDtXEkFFR1s7DLEXspKwJU9Ckn1TXDovJ1nzSAGx",
  "key12": "3zgZfdSNyv8CnKb12ZosRV1vGh2bAGJwnnV2VE8BzGDtQ1FzFzuFoCEYr1gTffSKFoFAinxMdebGJVAQEoPMyChT",
  "key13": "2P7dxfbxcUkxVcNnSP3czDt71yuL8FZKq7Bm4bbouCbd5x8wgG9DJeE1UavupqPg8VxWqC8ZuK43cQ3oAAjrMfoV",
  "key14": "CxApjWtHVeVcbd4ppKFpVZLykGdrdf79DLhNK5RvhbvFC3thx9sySwHd7W8dKy7nGpdB4ThBqiNa9jKcKSaUhac",
  "key15": "qtdgWpA69tSKxhytUf7Sj3s5iLmZXK6n5Vn1Aa4bYN3hd2XyUZ8nrdHXpDLi3Xjb3fCDw7BaNE3WM3Gju9YPm1s",
  "key16": "2WuzJMrz9KmKhFrsrshKdrQq6M95cbKodoWLki1trX5mUQDKjAWQPF51Je6DPkKLP64ECkJWSQKbqecipSu4joFP",
  "key17": "2UMDXKabpGYpwA5r6ULZx4FpTSZ7VkwQAohikrMRHKy9XjGZSXtHkf3Kg5QxVJbhU4b5bAP4L7PsSTjZ4tsjWws9",
  "key18": "afjwES5hzBjzysf3HdfpRedbNaQirwEy51tDxgX87hpA95tL8nx33qP5CSsonbEFhVoycUWAgrCfS8KvE4Zfj7q",
  "key19": "5rh7qz7Xx9wPiHJH21JfABUSw8dBD44pwgZHrdzrRFeihDV4tpzSbmMXagBXm2KqfTGJmFBYNCur5xbvzED5uHZv",
  "key20": "61zf8NLoVfHZebiHgqbmLuGmDYnhFoWdj1g3dndirMn9jN7kktzSJBN7gcnviNH64oyo5P8F5GgNsNuvnpWCJYqU",
  "key21": "2qWrndVzoyebmJX5tbNzcwSiB8B4dvb6PiKDXU7nZD1SykYuZzC12kvn4uBXeeckhttMEWakdFXa7AuxnuPdWUnx",
  "key22": "mAZ7Rq72EWqDz8cyUP7otsPQoXqNChZ2wne4gx9TZFiEW3GpaTvaS15c5p6qRztYm431kEYYLNtE7VqxnjZrJdS",
  "key23": "4qR67ZYcbUzy6bBnYrwKVhMhbqTg1NEvGHhfwfscb833FpQqwQpWwnWxqVECiBsdzajAoeuBo5rMmFt6ohqeA8gc",
  "key24": "4Zyb63JHSPsXVE82MxupfTGyP3ykAjfxhmjBkfED3TYKX2NFTuyH6PiaQFmTzxBqkvW4Lqa48j55knNMpNSUKDNA",
  "key25": "2uN2wWE1ruWezG9VwqSB6Na7VxRu3f1Pt5KcUtmsMz1vAz75eMk5xp4csfTBdckKdFTuNDBubzyanYD8r1vtXCVo",
  "key26": "4crSTjZfsU8HeAipHUVcwq98zk4t46Ban5b3PkbAeaHeerordmQDvB71MjXTx3wPxX81KLagG5m7cEy1YN8VAfBm",
  "key27": "39EEqMgQr9h22tTQGRxZjMUfR5kwZWVa4gkpc6NZf19C1icpe3CtdmgrUfA7Vt1jJXBv76KTbtwTBvWbgC5H6rqB",
  "key28": "5rNgNeFaV3V9rbipdLE12bjgxD1WbFuxrsHfYhPtEKmPH3YuH3VinpD1ChcC9Y623dCvbtdci8BBNYFH4X9UkXCA",
  "key29": "3ED3fKAE7mXh8vkCa1cdbvHi2h6YQkqe8AtCzheWyAtBVJ6ka4ARNQvCPTaNFXWRZLaUM5sj1CAkWyhHip9a9EsV",
  "key30": "2cCWnSXiPTb7c2z81Xkbb1d13dtvCNrVyruhJGcfUKzAYmC4SLEkydaf58aG66ZxV16HxMeKzfoZqP2AgMGVdvbu",
  "key31": "a6KxHsJ42ybUs3tM9ThHYry4xwJhmmeDk7Tfds5KLutYkjvuTPTS9eu6c1THCFo8QcaAGVgW4U3GpusqTPMwwD5",
  "key32": "LffmsSRgRpkkdaHgH7KTZxytTNA8GWFNfkE9bY46mi66n9kGQo1hkyzAFDq5qZTs4yuRWwKAxiPczBetrPDZgmv",
  "key33": "171fjE4JRvL1NHhvhmBbfoPP6qRt7j5GGUt6rTaNUFAULat9yw611ya76qizJqQE8CQmSFd4fUNGZq3pypRVMaz",
  "key34": "4ZxUsCrBjHVrkVVpRhSg7trv3XcNNyYxthpaw1sMyvzV9yiW8BVohvvoYUBRLU4rjW2CobBQeZkvgNkTc1Gr3M99",
  "key35": "5XSqnvJPzEPAwaHcsYnWfgvFqDMPf7YDFgmWpfLRurMFKB1hvmaFqD3ZKXMgZ8KRwGJQfskEyeBcYaPLZptS1J1i",
  "key36": "43SzLm7DgveZLaHixRfjZwDFWr7dyZqS7rt3JHfbKuijP4UcwWyeDwvsQTgmm637Rsjy48dRVeWD76pzXDukP2JW",
  "key37": "89Wwf3Lcgbo6abUUnpFJbrn4GZstTVeCwPfTE6FufTNH7VTu62FvV3PyLvY4TTB3iJRbYmy4gvyNRNfH9AavMqg",
  "key38": "rfZqykJXuAxo9BsQadhfBfXVdUApAB2Ratwsuz4S5ibMWCnRXixLPz6c89vcfQ249jZpWtxSzSJ47Z6njHPYkRA",
  "key39": "2NkcZ7XjfJMMAVCgov63bUNrTCCeXKC6aVQMdtHnkz6pexNdV9kozGPeD6nKJxyvTc3paejXZDhUmBUigS3sGF5W",
  "key40": "3XLH4wYWtfXpTnDW3DiuvQocDLmeqafoq4asdzuoSK7W89zwyPki7HAua4rDKyqTZFjLtJ2Kytm4UCug9Wg7BZ9e"
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
