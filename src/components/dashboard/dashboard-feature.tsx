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
    "3KNmCMHd4o71KCeTNX4Gds1V68dsq1YvyME9a37a2K1jbGLiHw3ox8mg6NUjytNHPMi673qABpbSg4WiAgEtZueJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55A4bzRm5su3DfaLqaqsvfeHrHDV3x1ZAMtaAu7q9WpCiY2MdEKhsBfsDEpte1RNbdzFMg1aajy31TbYwvtauc7x",
  "key1": "3Er61U5gvkLEXoQxs1QxLiDuLs3hCsDaByujR7f3USQsKa898veLEae2b4YtvKVLHN8Bb9aqfn6ivDynfphhQhjx",
  "key2": "5cJz7hkmRQxVTyoNA7xiDL6BNRRwgAYarQrZz72RgxypFofWNPTXoyCAW1thswZrh8HXp3nQCkG2p7yjub8K2CUv",
  "key3": "5xh2Am81RHoadFuWGZV1AMcLLZXBGwfvHqsRDir2nV4c7jMArgiPvxpGpCH2RqZUBFKrEHj3VMqpXqCaVVxyRkxU",
  "key4": "XkkNCZrPNaHsnHv4LkfVWLEmzZnfH3Cp7B31seTyGtnd3jPeULvnTiBNoVwJg5JcjrCon1yWFXYkug26t6MHR9b",
  "key5": "aU8X7RT2MzWp8KEyotCkdAZW5PPAyLY7hUEgEL8m4Q1soVwec6MNWEq9N8TCqZar6ZTDxPGQP9KqV4ZXzy6p8AC",
  "key6": "25wusBZSPYpg5McjeN4Sts84buWrVG46Jy1MSsjAujkrHEcLUrAGFnfrKJ4aGPje9xmXqVseHHsdx8irGYrGKxJt",
  "key7": "HCBkG5JNq9tpaPKuJ8ct2691huXczhA8rJW9QVG4ogmqnXjhiNxuNzueE6oWuVcANwxKBJuAAQcvXPirWM4zTst",
  "key8": "5JjthXU3XBXTs4ye4Gz3SsjrBiFsaUaL5gmfTHD3PkQonrXCuTjextWE4wL5KKo4CRaWAiw79zXYVjVhQHzgc5br",
  "key9": "2nHjDQ8ffYD31RNwhNdvVuoE2uSnqZiPytEhK1Yc4mtEXrxTdpq8m6WvVihf9DN2Xoj2FrGnQuJSTCk5saoskVFj",
  "key10": "5kbqkrtjHyyjJYuTk76hZGdrqSAaSL3wS3RB2CYXsMfEWdVDqcadrmwBSMKHsiJ54rzshLEFQ9ub1euCPPG7mwHU",
  "key11": "2BcEDt36aH3b8AXwZhYiz6yK8obqWsZRNQkk1f5917bN3ovUGcBvgBSKaNchk3SGgnipTUR2ZXHKMgZDurHMsa51",
  "key12": "53xsj17V48QvcZnVHwoscRSfjnpvCQpMkcad2uoRNhYcViqC8ecCXSdbg3zpX33ZvZ8aGfuUG1BkCiWXaaj5MLhX",
  "key13": "2RPo5WXrfmKe7w8L4547fgXw9U1pWLvWWZ31SAL1zUx9S7Jbe9DoeYNLYoHxwMXyD2AjyZBx2eNgUdCphr5hguyp",
  "key14": "3CHZif6ANLUfSUgYU11m86gUzdM6WUhpzY54QABCPFjn49tGYKMeqxFaPrN5DekrtENYLu2F3hG9SJNYZfNJq2YC",
  "key15": "2iWzhWpurca5vPUUBhMY7WbHdLA8ToDQVVkR1pR6L8yByXb4m9TWR3QZWyzhiG7EsCfhJjBNghzaNhVYjKcFXtjc",
  "key16": "BK44Cs7AMkFYXiF5wSyFoeW3qo5xHUfYZzaxPjroVFuuy8hRacp2rpU5yN164LNJ44dsn2zSJbjoxwvBRJgisBo",
  "key17": "592zxPZ2sX3JeAHwVppenELpzonidmRNkg1ffHyr4V2JuJWNfMD5ZLv2nNoHMWfvLAjptHsACub7CpBrYMdAAT1M",
  "key18": "4oKJe5fxeuY2qGCJrQ3TMT6Bs6or3ugJC11NGrTHKKja56Zf4GJZtPhaZUVFK6gF6GoWib7Dxki8bYvpLcQbFL5C",
  "key19": "2S8qtpTUpVpLZPo56FBwcKm9j1GsnCdUNe3DLva3Vfqtj8doHMrmFoGt4hBNctFkAqzxznDwFvUmJnaZWVUy9gZc",
  "key20": "5N7ZyFgp51GGYungen5uVzy3b626i5ppg2xZ5fQamgvCUCESfFyDHCvFKqVu1xCEgueqQZnQtGpo245w2fYic1AG",
  "key21": "5yTadGfDoGgYHPZPostQLov1hXsLhDDzv3mWx8HwQfyapn6HdcD1jWyULj4iRneQDA9GfJEHjqwvQyMN4HYPn9bF",
  "key22": "3TYioGXKjaT3HxhnX7uhCgQNq2USamn1Cp4grEj2LYrHbxMhXaGm5wn7qXoq1RBTeoMqF15mVgoz2kz2Z2YVBWRk",
  "key23": "5PagucNSiZQEchLBo6QofWNoWxoJUaUvWcVSEQ7Jb8Hj22mBcaD3McFvbihZWodqLr2wBSfC381ijhtqWsYbjbhR",
  "key24": "2qWWUZsTDDTPnUZDRMj7Sw3Krk7s3kWJypxkW5DGTGBdkeAasxhNB7boSNdgyriNcW9HDUVGG7B83WWec6tNuUcz",
  "key25": "2RdubcY54LeFhmZTtgCgk36Ms2gG8euDGhGnZWhwjwRdFGpkwEUWY2N8zFKmrQRpSmcXrxynSWx2gL3RNfdTVNQR",
  "key26": "Md9r81V5kD8nwkcxC1Y624quh3EsGgw4Kr36cmTPXb5g6k6iUy8jpatAo5d5za1DzMDXCbfGgBDQFH9V2Az8KbX",
  "key27": "25Bndvyn34CwuGzLpBwmQqdVuz4BbKn49RdMhRoBxN5Yifjy3Ydk8K2zsFkzG7fJfBhRffk2Sc5CuTcv1AUMYN4K",
  "key28": "59cPpBxeYon3zQwRsYB51TzNVbRjk41bGFvSXKjXZ1c5K5bMbRZbxDBuhbLJc39FRpCGNFNQqZTjT4ugt9mJCYfr",
  "key29": "4oxyQCJFrRQX9jL3J5NNH3do6erAqfTTcpNgsuLF3t4kxw3qv9NXQ2wpuXMGSBuG2WeNFrtFk7VGomDNsc53xC9w",
  "key30": "NhiXqSSTjovgpmsEdT7yDBnRVof2DKHhiwjKUrHLA95sK8wwHfDUjXg5uL18Ta6rmDyqo9LKLHdgU9u8cUGkKWZ",
  "key31": "5FLujr3hGMN3G46yNjLbuyFT66WLHecGjupxG9zNQrhutkpv3VzwA71AsB5eMiKacZuQ9EFMxe9QcnAZ196gSjxP"
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
