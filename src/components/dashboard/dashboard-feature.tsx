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
    "4MAGNZffDE1fKx46GgPCTy8jz3NZhjvwLZAwYaUKs4pp7fsAV2EA7DMQjDiNmwFK1NyECG3EGL7TJ7Ng2AnhEqA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WSzPKcZ7T3zg2sLM2X4KCSi8FAWpnmnmBRJQPBeWDNovshe7VZ3ZDwCjicsKfjf5P8aFZTLW79SjhhNCdeJT3z9",
  "key1": "d97Kn54X7nKiwh75ogZ9YRi2McSnP5Sg7jGf6kt43RhiWMDRevg9y9FV86RLnkgpyxQVX2cEaPfqRFsjYjT6WLK",
  "key2": "Paz1XFGB6UF6snPMpuFjVWnLpUsayZAeSzmqwkmoQzep2yC8tJM4echCWsLmGGP6XrrKUAG3KhQTqQnvBStizNQ",
  "key3": "5aYRF3Fg4524muDwbCqu8iBEbehsb7u9x8g6onFwb6n5XvfY3tCTMk3wzizE3TFQfK3LBbbsmm37mMQJjTKKHbXs",
  "key4": "5GtqtiBUwDD5aFmajpgnoJzpcuuoYxDtL5CwZzxBdKygxc1sUU48AUcUfh4st9r52XuGBtwyTsYJDZeuZkAmQ1mQ",
  "key5": "5rHb1jsG1MkfQfchsWSoUsa8oLxM1CRpfoB4ZLcBxB8bxoDW6VcvaLiMdKrb9bRMFeug5rKCecVDhAK1mCHHNhwD",
  "key6": "4prhJrzUWVApdZZ8891EgmHmdCPGoeu6o8tFt986fdyFFRGVcyXTAQ5EeBHT3ajph9m4PRtARqyRezJo4qQA5ZGU",
  "key7": "2bWDwoWpV4YyrTyKhxcQurEWBkGDcqpFKEZfHT5V3uvCmt35CmQpoPBZqupP3Ni25QibpC6hbFowhNDGVt2JmB15",
  "key8": "3QNXwaV9FcYa4QXxJB6vqxfRbRkpXxeuTok3RfAz91HEzkhX2WR2kQsYzGF6XGLE7FL1qwgt744Rx3MKj4KW3jiL",
  "key9": "4LbZydDJrKaFDhgdpNXro6GkViGFPabMd3TWBN5WDU35mrUU7otdwaexbdTe9M7JN7ikinrNSESutxP1LQw8USiL",
  "key10": "2MsoshNGY5YGL2PbJYK2BoNDzB1iahSSBBQ28J7oCihfWHekxzKZRHR9EioH7eTXWgLQiepfUQZXghnDXe3KggoW",
  "key11": "5Eidr6fobABnVmmSTwiDj4LK492BJeVXvry4CGuCRhHgDZS7E4HcaAGqV6PibY2rLJKDwpZrsy9sdbutExnP9SuN",
  "key12": "2LM8P79iUw71tiEMma78zJY2G9nD516Zzhk1XcBNrkweEuExp3jgdBY4cPzdB3RsZYqmn4ifwmmzhvTNe1DYLo16",
  "key13": "XHgTvvHzmhtHt3BY32JSzwypFYjrdwM1mrYRScGXSKi19Gw3v3KVXdcoK1D6FMirL88XUpf9zqCNyWzbiwTJpEy",
  "key14": "2C2ozxEGoVUEL1NM3bkwJvsED4Hh2jP76vxqfPxDKGxB3nLAa3X6hJK8AZ6uPtq9WKQCaxG916XFdyKnsnzBvwpG",
  "key15": "3zLQ6VFf9GE7jsJBChLCVxhU3KXRBr5WE6jt3DnNWbMVWRGiXPmJpq7inzj3w27Jd8tbRhkUXpVan6c9N15vuhaH",
  "key16": "3av7b4K51DzaKm9Ed6o65BXE1A8Y2DWPTJurYtZtgV4wbXoYEzUVDhenXbVyv49vJF5RJjdi7BZqckCP9zmXTAzx",
  "key17": "5BguwYA4LBdnHwicZFkZdboZgqex7p1JK5ZYA5GmtgKZ2KPkBW7b3D3K2VqKVK1MVRdj9LQ1EZCa1ydT8VY7W9Qg",
  "key18": "5Q2uZU1PoVZBCFWpe7BbagtEn9ubwNkGc23zWVoSKKCoDcdugEjJq9xwaxKtDPkzRusDksDAzWk6EGqGjMey2ccf",
  "key19": "5igeZTpdZ5WKLWtvjqjqYRuAchURs6ZU2jXQePNfoHjSi6SMN9uUZ2VDVCyVCJ2FjdaHbGqJCKj2V7SDQxxgPd4V",
  "key20": "5Cgw7Lcj9pKKmHVmnbM6hpLe2VwdVtMpbq8qia7S7HZuPkQZRWyZkCdmXQJEZ7rbJ5FigxfjympD3zdAoD9HGFe8",
  "key21": "qVMo6RE5vnWfvLeBKLSTjTDMnQtgKqerzZMyyWoK88Zf6RdkHWghz8dnPcRBLqoCeP6KcFe1Stdw7QXcrazGcmd",
  "key22": "5xw4aiFLDceDvTSp1BJnVaJgNRW8aQCopNMvPdzGkbu6RLuvwGqHcjdT137FAVRVBsPnsLPmMgppJouJWd15Vbdy",
  "key23": "2nVPQ89QdekiVJLpxv7UtmLd4zeurExPhmDhhjh8oEEpbgqfL2SzKwsKsP98C8UwqB9cpyQKBfEkijfhft8CVna7",
  "key24": "2CbvZL6KNATKPw4MnmpUD8qNRXM89MLwgtpwb3QGcQYoWWdafWLN1Mikc53FWupyj1brKj2AkimtABLfT4YXn9sS",
  "key25": "2nVpo3HkFua88dcx9swv9PxZY263ZNfNtWg7yiwcxAdJBP8iE55zxsHnqNNptEXDvUKAEsmTQLBrkUFSHVkKb7G5",
  "key26": "5B4SM9AAhYQqFGPtQC4raZq5L6rJ5BDCRXaVMbauoFLE7PK3tS16BeYqjijLvgzNbGm6R4gmQMS7gfTx2P6cMVLf",
  "key27": "qR7fLPAmMhzgYcTXRLsVSpMKGpQUuDTC6LrkRHtD2MJmqJes5H9nSH1MncA1FQqdjBqxHMWPTnYnVX6qgDtKWnm",
  "key28": "65kG6PEdaBYaFNn1DjBDAU7kAJQaNZmGi6Fs7gFHP5YQ7fUsUT5c6YZarPFSDHBx3y4mAEThMSkeQCXxfYZbubJA",
  "key29": "4P8bU1dwJpcSJjbz9Km8eWQZSRs2T2eTnirn9NkpXqoCyCzcScazdjDZTiTmacNpW1LYozhBpx6YcLyNA6FsueGF",
  "key30": "5YhpGBLY2zbtcafxSZQKeyAHA8YZVA2L9yZJ2dvLemPU7kvjR3ed4UCS4QGjvVcizrmQXVBhx4okQDUWeHxYAftQ",
  "key31": "4kd52cCyN5YsnwhLAxehEvqPSGneoWPLiHq1yu9qzmeZqiEFFFKSwcS4bkJyPYsBqgfRjUSw6ZxarLjvxmduGLHE",
  "key32": "2XzuUEh9AxJafMYMYgaqT1KkWjcDJ3Gr4niwwW7PivwYgPmjiKQ1iTNgeVyyPnckU7PcnJycmwxDLUMjNRdMAe7W",
  "key33": "kys5bqYXDmsABbyFHGbQe7YDWZv2gxVWWPKL7EoEJNLwQjhoW7mdb68RUifB9qC1FvHtgT2wmxMJ4o6ZMJD8SVa",
  "key34": "3ibpgCkBuQmUBbbjYyoFDwkiEPgicGq2nrRN6c1qzUVqnCG8K3atidNkd7zD8pwRq7KHZYThY2u1Nd4WrnyAbGv4",
  "key35": "6oELmrYPbKGsT83pnPsz32LnxsTDEsa3dnKGHubRCJzQ1Nxwr1T3pKxUKxFcxuWv7TB2c9BA6AEVabeHxNG6N5j",
  "key36": "2QhcgDdkjFCf1MQtGnkocD4hR4tQPCQUQ8hDniA6a3Yvufah1QZPL8R7LgrVm44N12SFGHkGNs68YgbMUt8cMf4t",
  "key37": "5DiAAxRPTxLvaAhw5G2mcBMXSsVATsP7XwJWqTKDHBEDdmC2ArcEPAY17DuX8EmeA79QqdUi4PpH4iprjjQPfG4z",
  "key38": "2BgbYtL5GDqjzk7KkwkAbgARmqKQcEJ56RkubV7fjyEyAmTeAxzChWFbETJKLyQ3G2rcYZgDVt1KjFAGkPcJTUp2",
  "key39": "CTcZe16Akbxgnv1po2SZLB31WosNyt9ezFwMZULTt7Nr72QiURu11Sri12HoXFnu8ijqhjVwxavJjj9wukYSrsk",
  "key40": "o7n4PHBC64Noobn6KBbudRoTAt8i6MPoqdchU5cQSAd3hkQGgps7gGinbFw7tYEHU7HrNa4reVwudne1nUxcfxh",
  "key41": "2gNYKsK2AG8ZMfFLYFiNmETq9wfcfWf1QP2L5uwMRQqQurMkY72N3GSxmNNJoLZerD5PNbBpxJSyuhu1SgL5mUsS",
  "key42": "5f71zd23Z1fAwsjhdkWctHhGS5m9YAY5DBFNec36tzMsh4s5qksNm8YDPHTJQwQcYcaAPG1mT9LPUKAq4jwh5RaT",
  "key43": "523i37rH3A5xfLe34qiNjX1QhsNabZdWtkHcsFVeobQbsdeRmuY9tkwP8VCPUineZt5vpjHaXLCHjmiSiQSESnDy",
  "key44": "5UTAhZyp7AaB9TMDera9Ec2JyUhPsPnaLLGmcu1Fw8ZhREAqZJ2vzqFtAoQ65ys2jJuJpbneJZ25wVbycmgbseD1",
  "key45": "52pfjpu5yBRFaQgrkveTm95cP5i9rTcGV7R5JN4KBcyzTJnh6RfXca5BBZrmqGYcktuUuFpibAuXxq5YEFPHUV7M",
  "key46": "5Srnj5DazS9p5pXZftEAe9qSHxBumLSNLewGzbjgF15sfy4HbVhupnNQ6dwjCG8kUhreKLyz8kVC9F5a1RuWwDh1",
  "key47": "bPkYDKzLmnkr2YEEt1PaBBeZBSuhzKZK6bz3ueG15iSrK8CuVwxYLjKPb6X6DXRbgW8h6h9DjmYRF3YvnotSjNw",
  "key48": "5c6iKJ8CQbj6FvjncMZi99sQPMBCAW7gjjU5piAmAMxPXSPXzwzYfG3ymAPfXoXKPQaF4iNbTFvdN9HuYXBxgB3Y"
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
