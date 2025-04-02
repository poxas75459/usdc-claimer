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
    "2eaWwGzSw7mgQkmyNEkVpgansR2bWmkUX1jQ1fK3Ldyg7rtw5VCrZbHfBi8j8aH9gpaoQAF46aoQuvSxRCqFqExq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEx2bYHm4t9nZgtouXvj5ieZMpw7FP2XaHPByi9zRkFMZ464T9M2xDdKAXCY5DqYWb13o54Ki4qJ9BhjigNepQV",
  "key1": "3d84mUN7DDGc1JNNKHSPi7Ji5zGRRkbsT5cDDsvxg5ZavaJ6gsqHUKmkgWVMiWEzY5N16VGNJE51dK7TGdxz2ALP",
  "key2": "54hnJ2dooVjyRbwfrjLL8FwsDk1Cxf5wXQjPqfiAZXpBBWkkFYGbrUpw6eWHHzcdk8S93fqjZMUhVwxfny8KL95s",
  "key3": "6DtKXzbqpkTNfc7kq1HidsSU2ojMx1RBZbQpWER4r6PDq4GSrZr2hEnixmkWPhsGkBm2wBssoDrf64bho6gbDb7",
  "key4": "3WPGaXaVMeegpNcjLRQU78BxUVXT9tZhdbeBRefPhK4nsFGJsdUgRGYANVFvoxS73KejSKG61ZmjKDJAWRJUyNdx",
  "key5": "2wddzd5T6JfyJ7M7PSbuTKaAfxSXt2AJDvBojDfihgzSZmzG7osURB3yggS9NYM6HkanA7mV3kPnjZwdfcWkadcY",
  "key6": "zJT7VaCHsbRN2JDLsuoRH2do32WFN1Ro2bbXzsQNdEsgjSVBmCyNDSZCUAsHodvqAGcRrytAvaeYnVXJqBrPxb5",
  "key7": "5VtmTnsmWcAFryHpDRuSumqRCh4aJE5cEEuWY7g7xCs9QMWxA9PyY31JQhucVSEreHa7iAPMSqunwLbxGkYKN15a",
  "key8": "iq4BrERutPLR7Bjh1YfaL1sK7fsNWJ3L81tpZxd1D3SLNTEuWRKPojA73SoY4BM2vX4V3M3AyYFJuTtTGabujaA",
  "key9": "67cBUftmHZeCBXQdNsuhx1hfyYLcnb2JJ7LQM1xk7DCYKVvNTxSmuj6jATRJjychUdMCjATtuWx2z6EwQDG1v52f",
  "key10": "5g6sN6tQSMSNQ3ZkHJiL9Fa1kuoBXYMeQkGgquALjdiZxNoRiMJJ4hgCdyZE3a6C2zVtRUq6bTtJwDVW8MmCPoyd",
  "key11": "DA3KACpxjjR74S6xhGtgrSCVgTDb86KGUMbF631VHTxSAQNZ43an6egnqXP89cYF5XciaaiVGtCdRZgdpzZEKpM",
  "key12": "2UirfksiHTtitnVuoMc5hMQKoEVP8N1rV2ARSnikaVjMnVWfYc91vDz5A5xePozy7Noc4NaEsS6DhUZNuyhuw2Q6",
  "key13": "2Mw95zmqdtbyYuw4C57HKoKUjNSvoxSnLDXgEuk39uHME2uquQiqoukmxSsywqbzTnxuEpqFhjt9ieevL348JYZX",
  "key14": "2y5a7oA7EsoEmGMGq9GFPZoAxU9PZHRifwCGoGjXLVevf2SpRfy4tn8aCMzFUfzFeRMVwiHi6SK2UdpeJ8oea3CA",
  "key15": "2ed9hD6AdbUCzvzeVd2XvXvqRyWtR6qmWFa5vUCFjoTQBAYpwZb1DeZ9VpRM8iNnHmeLKGkzRNejK4usTjVXJNrU",
  "key16": "Ru9dZ5dPWnkREWR5q7VY6JeyCtXCCCpzfaJtVQhbikEEZGPAAmEmDoxNNCXad29YwFwt9Stg1cQhiop9bYLNDqS",
  "key17": "4cC9gpZmD3iMhv4nXwA2i7BkpZMETToAf7368xGhFkEXi7i7byrGQSsbBdGA3LsxK9oCMQihWCyyKnZ1tr6Yoj4T",
  "key18": "2k6RygTNhUznH5DPoMvQNdR2x9xMaanytWurXSQsDUHtVK13p7jxuyPKxQue9URw8co6Zg9TB19fec6omo1NGwBe",
  "key19": "2CtcWvsBq4ni7XPh86pdTdTRVVKEvkfA1VhscHQCFFifQ15jJ2pAE86zVXoa8uxmdXUQn9eDnYzMDpGjBU2hTnF3",
  "key20": "s6Zb86SFbnCv9QhfoAtrxNrpdFKVuaCmJZfWRgER2j4sbzkDb7giB6D7RcwtHK11k9xbWoWcnwLNgnXenzJHADk",
  "key21": "4NMThi3VMjVtUmpXDaQaBwkSE51J3xCWkgkxhxmnmG5Ebb57dK7gvudHNFvcZYjLomauybzaqMaepAqFCGP8aQK8",
  "key22": "4vXypDJSGzq3DqYHhAjK4CB6z44rYVGqjXDBh8DF16fN5QrWTm33ievVAmUc3hirpdEH8ycPchbzYEew3UKctdw6",
  "key23": "3gggC7TUEuwVsKgtugQLjpY5LM2XAWbjVjDobP7bFktGwUm2RoV1JLCaTP573Cd3BAaYupgDFAtMSBrseSHbKKuV",
  "key24": "5mhuH9Cz6wCGkcYzkMafhbm3tzXFNXtmQKN3akX22XwZBz5EPnXWBArpHNmjqmfQXh4XpqBM4AYAMkFJstDJhoni",
  "key25": "4X2qitS65EvPpB4DEeTZYYhSUdakDqNWcuKYWmmkED6aXUPj5cbUfA1zfNyqfzgwa2vm5sVvdJU5hnvwsfihHLmK",
  "key26": "4Rz8VLpUXyhbUcDHcV8WU56mFV4WN1AqnLtYH1bbxtGYbVidiT4PYKZXALpsx91F95DFvJ23MHoFGLSmV2VrWcVP",
  "key27": "3g9XhPBbypDuFGqMN6AW91biuwgSMMJLNgyJUTRJiYJgDakcrAzvZBcNFvqbkMzP2VWsnn98i4ekMztqESKmBkHi",
  "key28": "3M7eRRDx2uEL998Mr6JvdFPUG75qkxz3yXbQA7gKy9Xjbmyw6HKbKfo9NtVcyHRyXrwqTimGjqCaDTqSPiTzaYiA",
  "key29": "231ntJgZjCJzFik5YrCEgKxWNmjQgjDopKtNCoQjer9Ca2niaGtpqkFpCJvPMzFzYsDG5dTtkE3NMwjw74QvFrPe",
  "key30": "67Jngyed57AVA51AjsdiMJyS1MztGBiUxXWyLX9RS9JsQrw1UcNB9tZkCAKVnHqDfBAeLPK5nLUbL2fEcUU9SVTq",
  "key31": "5RM4R2bRKKvDoyXfU5xRAb9xwgRoPVox4NZ8eswxAFsgkmVz8ttLYoRFgXeZU14L3h8PDwDMdCZaAWAKHdW364P8",
  "key32": "2g4sCYyfVm4tg2KWyr9MJskGJL5y4Z4FvTYF6HWiupVqvNnUHAY2wATHADAvgKVBRcDEsoR8rxaZgLEs5VyNxGud",
  "key33": "bakbwpDna2ZwV2RYhTcJYsNsf8MjbD6yL8u9jC7JRzPNBYxwXw91zZzPEd6KkdHCdtYQ9quU2TUdbqpuEWxvzaQ"
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
