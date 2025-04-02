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
    "26ecNvnnNvU5TCAuZLGJFQ1uMvE9R3r5w3ygQzzqiPAdEExsX9EHTU9TPndcftFacaZhiU4ka38TfmzpSSyTx9Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386BJKGYcNtZkwYnaMKMaVqF7sjF4nbsjoZXE3NWeoaUT1xNmjLNgRbdH2g8SmYm6NS3hV8HHXSHYLcZonEJGVBM",
  "key1": "95brL2cEorbt3TQrfPwBsR6ZeHHoX5MEVmqaDQwymr4TWz2aDNob1Tg3JLb9caN8dBwkmcXaT2CHnrhqSeJWmFE",
  "key2": "4ysXG2EN1oUGGq4em9PqM5txGfFM5QetLe8RkAzSwpLD1yNAUZvQPPUP7p52PaSNADaFYnCKiSLporWnwd2gLvQt",
  "key3": "5mEmCB57y2znGWhpn2woisRrpGaUPMnn65MG6XmzGcasANTMkYpZXQCtCpcYAwwx1RoKDVe3w3tKDBP7vSpJvUE6",
  "key4": "3imaDGnh15bFSfULKr4mHxM1yRfp5buFT84DyxXJHiBqWHymeXW35VGhPRycBH2oQD5ahBV3mZfrC5BzcAAx1ot8",
  "key5": "5cyyPCv3TJrvCc6G5ugNQnxWJX3dSPSpEbxdzBxvc1Uj4HYUbtBErGbbqkmsZZmannwRAfpwYMjePmBBA1pibFr",
  "key6": "2PsDuFAAP1rZQG5sgsP7BicuUSwXsbvwwRmkGtKNzVT8eySb6D1bYUqL3Jmy6vJEKEtgM81XrZe73avKeptNuC1S",
  "key7": "5iK9kZc2DTgqcbVTDqrnmNuccoSSJp77PtApgHL8jdRGNZ4iGU5Z38o8CZUDE6tdJKApowUU1cWV8T6gCwu5T3i6",
  "key8": "26QX4YkhNo5jwuB6ZvrDCSntKLHyFGFaGdhCeiLBMrpbqLZpqpR6fvUriddCsyyKksDAgaoM38jqHWZYT88HzXx2",
  "key9": "27po7phuoTYQGdJno19Fi9kpjx1ihZpgSevA4R9rTkuJoSFq8gNbxVCqpwxogbLQxBSBT3dbq4VHrZ5gpN5FiQoM",
  "key10": "4kaAXa53hCtRTtB2Lfd2XV8X8tBtqu5D1yhcLZMGuB5DKBxtmocBj1yiV64TgkcX36MrbxyAKLgwFKPApWtwj2Eg",
  "key11": "rPWwVbBz634MztvZSwvKY71YgPBCP4tAjNVvvydCPxjn5MDhkGG8i3wipXiTWVQh833eFrfMVkJXbtgxGsYznYx",
  "key12": "4N7wFWRXeCg6GLkWxw8HSezoS4YMjp5zfTvwGZrbbyT5M5W9GRysQK1kK7ivNKZGKKJJ8cRHFXGEGVsrusH7PduK",
  "key13": "5H1BnpHAt9CrnBHiodkRDatopnFvEyquQS7H1K7kBimW7UDzFMzpEAXQEizPXWaLPrWemJzoMJcvPDAKXjtLkVjW",
  "key14": "3NkpnzexSqBcdr52epKzgLrKFpk4vCExFuRFUdpVvSDYjPtr8o4hSnJn1ikqhqb3e533Kzjpre7hUmBoVcHYwvnT",
  "key15": "49veCD9wEfNrQEydjm9mEguq4Y8S5ssYbTYxAY9m9pDUyFToj7rojDnv6QaVNniVHTmsJnqibmjvrXj3CfsxXY4b",
  "key16": "5gc8rB2rnTPyVQsxyxNVaKmUoYLbmzgVW1Edw2FPCuhvzYHYiZmkxse7eE21awuNuy9HXTUZYJZMSYPxNbonTLHu",
  "key17": "5Jing2D4i9n5cd85rcwKuDQJbUbzPPw1tgnrtrL1NLB8eBa5B6rTBm26RryN1hnnBGHRdLK1RnGFhGwiia8CgkW3",
  "key18": "56GiTM1yVjujh7RgfaYi6zHk5tRdHsmDYNRiDbfNcxZ38sizWXYhV5L6gd4oBVpScwbx32o31Dj3M5tNqL115xBV",
  "key19": "4pTKaX2sme2UutW9a16BKSmWYGv1rypoCj4qtX1UtzZSGpognkvwybVq4s75EhJWicHW5nWXtqiK263oVpHDpasS",
  "key20": "777MPHaXqNqBikwwV4oxY3CUrMCE9k6AXaLHQ3hqXawkhSWSLbZVo8aAYGrrjhH9qApCRLmUVukfJzMoQuQ6gCs",
  "key21": "4BWCLpGBWyDgwvda15WxeRz6Az2VuCsK3UL8ysUf5Fh62MR7PMuh91BGePLoFmqK3GKuhAZpnQMFRL9QiAsm6wx",
  "key22": "nQWUje1R8JD4fKXZVq9M9AHVBjkZKrDy6xYJhhnLnkmpPAjASK5RWVb67EjpVaLL5rupJThb98bpYUfF1D5YTgv",
  "key23": "4Fbb3suF4Gv3XAj1ja9obdHKaozf4CTY91VAptsj8PAUKo6xuiRByu64p4nGPrM39qARpsMusBTvErnD4kdL8cL8",
  "key24": "yawWqRyzryuCauqFcawAEkzneNwtRUHJmwPmo3Sygkb9pggK3bNnd4yoGFDULBzuQx5EmxgFuqnMVpJQYubnHRB",
  "key25": "46WihXq9xTMgv32pE5pzSY3Zk8FhoszQq96B3eBoqP5nQxQAKwJ7m1TGYegzrXZMeaRoC7JAvogKisNK8NMr1aEw",
  "key26": "3Pe6CiebouyBvU8E53UpAMyWENH5SbRuXHpB1EA7x8gHJhLaAj7DNwaw9VTxnnbbneKkcmcKefAoHRLMkzMsWvXh",
  "key27": "rhuCziTyGc8C13bG7NxqbCG1bwQyudaxVbXrboWvZ5tNaC9JnRFjiTtYcFnqUr7A6tx4KL4fy8WJtmKXr56ELoi",
  "key28": "39sWzJPggGceDqKj5z1B1vD8ZCGAjTnoiPTCmvxB8wpQLFpZeGSVM92cMmG85KQu8miv7pHagYvaPpdRmP11yTg9",
  "key29": "M8rD7rtiKA8kE2X9S2k1pmgpBUp9rymsiCqYX7DweZbHk3BbVEM54eDaTsUKRW5umaKoxHyEFacuPAJEcLTo7Aq",
  "key30": "3U6Ewhn6UrUgKWwxbk4FEpZzBEh7zethM6AV8unEgwq2P8heS4m4mrhmKyvoLWU5WXtEp7ASvbyDGPKYvwHRznRv",
  "key31": "4E8XGDqyDrbvFZq7NDfUnR1jexqNgHBkib6M3LQtTVcwnnjXNxT4gxWVW4TrA7iTkphjxFTC4DuQJ6vBornh3DzV",
  "key32": "rZVLRmNxFiU4qL2mtXu1fHVpWoYVPhCF9TwsEqVK9i2XdfmuAAyFXrPqAp7TurE2dC25DZMYcys8Dxy9SvW2Cq4",
  "key33": "NjXSjDQYaPxrdUaHjcRheZ9UtknE2QV1o4oLeDSh3UNWv8DAoxhr3u9DWzdE5GiEcSwr1USxg2dcT1mQyt5eEoP",
  "key34": "3wvtHhx87gmUMugd2gyDsVcSj1EWJwJwzdsmq4vBfgY1PsQmfDwYGN1sNHbE1oDLCvs8k87X7Tu3SYzr4pwKNwJj"
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
