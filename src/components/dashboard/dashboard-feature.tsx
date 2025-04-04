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
    "2t9kfBFcQkHPsKhBXDrLrAjoNFpcz7FNYdgaNMgBVbhqGFrctqXVA4ptztjmap3qBgwMWpbzJQnaaDDosMfKsQCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5AABurDPW8fzGM9zKLJXPBud3XTmEM2TT7Nd2pcesSWXb8Lfu32CkWz6nm5gTCPHtU61mrf3coi2ERw6e2hq5d",
  "key1": "21NgtcN1gRtvn1id9qgUuNxL8Dikn6RXuBAJib9W7ART5vgJoi7gP4sKcnyY4z5NguXsGi6N2q7dN5qD1VPGrsnZ",
  "key2": "kLav7sJLsieeFCdfeUvwNXXbqqa6cc98jX4jhMsJPwgdhiBmgG14rHLUpp2bhprwUC9gSgozvHk4pcNFKsLr7fq",
  "key3": "36uA16a8KeE1cimwPZ2Hk1bW9xiwPXhHWJ23tjLMiUPjQX5PsMjgZKM42gaYTqcLHeojLvRaK8EA1DaF6tpHDY79",
  "key4": "5QZ5SRzaXZZvh8ptJBpwZL9Rp15vhFg37t8WHVHB6Pa9q7Sriic3ecxCqYP8tXvdnCA2F87JTXE5Qbph78xhdmT",
  "key5": "4gDSwLJLmPKoYbYdErVbBQhsSKTBgKtxsbZuhEURCPZgRLrPbvCk7UsaWiv6pRsU5WZ3zg5sM4NCwvbcqNUTWhya",
  "key6": "5fzrKcXt4FQbnwcqgpGwS3gbiGafFVfNFuGuJgdt2jyts5YhFP92bUYYaBAiA4P4BijApWmDk725vW43Ms7JFdoN",
  "key7": "3zLzQpi61Ai68UC7m7ceByrWibXMZVAWP8Zjrk9xHoyMov9mkwEmD8cf6E7spKJjc52tFh52NyqGHqtNbFhrCuqd",
  "key8": "4PsjUimQmJqMGf2KySJpZSjiaJx1oBbAvfv7QVCFUXoK8TzHbPEB7rqdZDEJXo2VpBy1iR7AjH3d6hPdC4aTwQLh",
  "key9": "4QncBMrwPKzhMnswmLtzYvWDbppzfrk6dUASxwxGfy7Zc5N3owJG9pGb51Y1sEHGJsLn3DQQJxbMcNFSmyoAG3Wp",
  "key10": "2Z19hCF1i3HSrBVzVMdkQg7rk51djeAmnZT2Tour2VLrqmaRz4E9iAGsuLmApyz9RSvRmGydqTcUTsJQ8c8nQ6Lo",
  "key11": "2ErDfaCPZANCrCAVZmFmYj7WrJ8dSFJRfGhqAf322FcDPNZzmRjGzPqp7FyrPE5DeC1JnGvLbwH2Q5UVBekQSd7a",
  "key12": "35aSabCx1UQ7KMWG6Fd2tjXp1Hreisn47gbYYenUUNXxqfvuXF6RDsAPpadoJEhqA5FxQiznk1385ucsJLjkGo5y",
  "key13": "Xw4gTeQtfykQokeiQkkh26qGNeTgKo6mu5qEKad6RhZzsJBMVhKnEwAVKC525dVUUz5GWaEd6ifyzZ3iPncArQf",
  "key14": "5S8tYwErjYB3dBciDy48PyxC5JWR4FN5FcdnCkGMDeUJGiEUHjnYgUHTpwuHXRm9Dp2t8ehJ6E6GZecNqW7ScJdL",
  "key15": "5RxDicMB62FAJSReqtavXnURNypjBmX8fm54VN11zNtz8FmHqF5X3ZzaKkCvzLbUiXFv6zLmXjx8FmS7yyysDtma",
  "key16": "5xWEEgTyRuPCAZ8rrescMF9m9DEEFB6NfMdvWUK6KtkT4sNT7HoW4pw1zBvnHePhEwWdwk8Q2J295P9iXHeSByDp",
  "key17": "3ki62KkdHazSYc144NvaPMMYG485YLxNGvg9a9zQT7NfJZguoSSxcaKgCAAmFKLyjHPeFRMAEZ8YZPD3Quaqbfp9",
  "key18": "wX1vxYCgmv1cTM8pnypCLyr2DAauYUSmsF3mydXb4WtkTDS4E51PGLWaFQmcur8ic3uFo9ZHcUdxTBKcxmYuvR8",
  "key19": "39rqTgTPSMBqstecJvGXz7NEQ4VtywnMu5iLdgkGbCEm7aWdWLN1AKub5VQSfYtc89Cp8Gq6XCCLgibJNDLX5hnH",
  "key20": "57F1os855cmJDjseyRn5BmifjkrRTupGiHEDJSeeP1b7wG6TZEu2aqDqrkvXhvhWNagkha4kEtc9VsPQY8DRz9KY",
  "key21": "wPJnBKBkcXXfm9oeYYaGVDe3vTgyu1rtGJJKKFCLaNaeqPfzNbUQnmgxf858UpDHxmNEdHkpy71EGvDvhXVnY6w",
  "key22": "33FmwZ9dnehtN4z5FcPUXaKfLL64ApztMk43JWrJGTTLsnK9Ek1VQQQbzYridiXKzEfVweUPFaVejAa988K7TsEf",
  "key23": "2sWPy9k2ABr1Ys5ttXuF3D4iPKRihL2eW9KAS3iFUcuq4vEcqzGuhoyHCzbBL9cdyyzqdEXg5y9ov6nRUqq72XwZ",
  "key24": "bugDgtRqn1d3CD8d4mMrvgBDbp6YZS6DpKcXaruJB4Bg8yCJ7rmpvVFectcHTNPzDJSyYWqgUGWiSak5nhnUV3V",
  "key25": "4k2VF5LZHpjvKbGcaSffd7cMJY69TeWGpWoN5MouuK8AV3abBGA1UUJVpZ2GqkPzSyWzSHAfVt52pDJYN16t6WUb",
  "key26": "24FizwbT2TzmZ899NRBneQL8JhUMyXu3vSEeaytu9TiudRqk8KuDEy6jbbj5M8qc2PGt8DD3gMFxqb8sfygjDEhJ",
  "key27": "WCQtP8YfWBciXeEkKbxx57ZeZt2kxebxBr3NBifMF2hsHCJkeNZYcrghGDuQSV7kaAfFNyhzggNEMqXDJEkNJ5i",
  "key28": "3P7avHPnAGXgZz4R8wAtybLGMwb2N6wkJuBrwAY4s7dBdKiTgyvWQpWoH3xw6GK28LUNEDN4tpyf3ecgHjLZCBvN"
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
