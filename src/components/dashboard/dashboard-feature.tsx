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
    "2ju6878rYsYZVbzwCiixD5t7JA4fTjtRG5Ma45GuYP5kJSJgsn4s34g5dw2LaaXHuAT8td3qm7gvffa2JTH3rG5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S6oyUoXwjycwtc9Cwn1CVQBXcT1iJJsk4tEguWkbSQLzdiWqx4uWDMk8xziCEh1YHDnSvDnK6EWDQFZxCibviMk",
  "key1": "382gKHihBeA4GFcPo7LPKa1U1XkmRvHo4JwRSieNSTi223wXefcSjZWSmMkjCvCRxEL5ECGbSb6aabMwFe4PRHSX",
  "key2": "2baCXXXSVPu9gDw3wzrbhK5bWfP3aebizEMnjfX1kPyCvP5iQnEDxx9N695t6ES67Jsb4kGcnvLtoQc8N1xHspMw",
  "key3": "3FyyfheZozPiSxKM4kUfbG1AqCaMd9KkVQHiFKtE17c68S3cWsSFzY1Uq5C3WrZwLT29BcvWpFor33TZnX83JQHr",
  "key4": "667wKtMPHnf6ykgnrpVX4NVjisW1Dpg2aNnHAaVV2C79TMaHFgbsUtpdens2ejri4FNESGvDwsBZ3mUsevmZHR9",
  "key5": "23cucFPiMKQTCddxfH7V7sGasMFX88Hy8Dz1m9xnHTpKPMeHh5pB9YfsoBQ9JEm7xtqDqMYmw4NjNjskjvh2w6er",
  "key6": "uMWth11i79XAqth2tVKwVD6BdJNyobDKpJera8i6JSot9qeiJS4Ws4x9mLv1myGtuWBbsnGDxZ8B7QhFL8s3GF3",
  "key7": "5BcxUnqyoER1PcGt7DLBmUjoL7crfc8bAwFqCGuFgZdpmh4bGPXTREEMEBz8KB7juoGWEkmjKYFHMcRaQAcbmpFb",
  "key8": "R2opG15JhZdy4NkWhFf5WxBPWchz5zn2oPKcEXUWvo8V82Qg2hPFMrdCMnydvrTma1M9cyUsab6eSq9d72TjF6V",
  "key9": "23xn7Scr831DRkfMjm6fNreSHvWwsEJFXrxudetL1MfY8k4Ui6tHSST81uj2Vo9gW7HEoCYn1iZ7xgBfLyFqCCNM",
  "key10": "jXGo6fVzxSbLzzYxeUeWFAXwLQmV1HvAx95umXPqwtsYWmqZ1NFQQwZ79dYKCK5kE6p5puv3x7GH8a7U8asNYhF",
  "key11": "66HRrsLk4G1duS6NQBagdE9yVDUGE4E81otrbn1txE7fWy2pYPvKBJ8k1yhtkKhkQap7XvNp1ZYu6gaUjtTbK4Rc",
  "key12": "4Bvti4isgqLJBVmujcLFTQyDQuGCA8DAEKxoRRh9pvoW6xyrSHP7nqiDydnZar1PDgVHLTJicZk9UKp7vTR8YbjL",
  "key13": "4i1Nb6L4qm7VXG7NGAWtSH5APn2FKYAZYSKEov1s96MDwwGDhveZCHWkRv9W7rpABVn44cWu1QTSF2tSz5pruKaC",
  "key14": "41GKDddZxfn8vsQFegqioyAQ9x7YUZwo56P7Aif5vzT8NkHqQLxWR7HSetNQh3nvHRYdBg9Kyxc3RKqB1nLF9o2Z",
  "key15": "4txKtHUd3qEL5QKbyYqU2tXD4FCCFJTVLaJSdB98j1qc15ZVRdFwhgSmsvr2PneBZCh6swZ3YWTKX32qFKu261ka",
  "key16": "hdabQqKWCaRZh6dCEhLoUJ1zyKa6g66cB9PNQw5Ew3auxF8jpaDHTrthSb8fygKgUSz2esi5efM4u5NHr777yxF",
  "key17": "4DYr26Aav5aLnMhsVWKwmLBTk2svrwiWMaxPLTm7mc5FdotCtgrnTsvPZ2DxkYPK9QaJhJw44cMVFGZK7vnFk4cC",
  "key18": "2Bn9zespS6kqrBu9TUNVS3F2uhAHQi2CvmNoQukcceYo3t5NzHtZ1k4yBLZPxuewYEcWhgFpdj5XcJ1DbiE1aw84",
  "key19": "5YUxwxao2tRJCcDaMYGptF7BirVRVrKkywc4Aj7DQxHDZ2miz4PBsTBJZJFcbSDzNmp8avYdYyeKzrCenL7KPPnt",
  "key20": "5PPwnrRMJ52Yq6netLKPR3uqCUBLxasV4N3JiHTRy3qTxAS6ReUUhWHxo1qNvtbvfwG8eTq3hBMxawND2oAmYDi5",
  "key21": "4GrnaoEMgoQug6qe6aPf46CYwN7ds2i16RNC9fQ8tKeYeDbHSh85VT7fHJ7quqRUmeU5eembdz6s6SeRN8L5939p",
  "key22": "51CYbpvgPvoNN8dRWHQ8bEBFVqxyv4mSx4ojzKGyY5uqCvoUQJQ7H5T8zgo7owJsNFU7Go8hPDdhAe4XqyPytSJb",
  "key23": "5sgUFKEBEoSAHS2QhLW8W7JSw1SksLThMwhFZ3RT9YbG8ZrBJpZjagDyc5nK5vyZexVyDmB73cuYz6QswncmY9rP",
  "key24": "Wj3HXnWtJduVyrVZXpvemGpfxSym4zLXpFw7jmv4NxXQK8U2oa5rBhVsi7B2FjxGFGZFExKs4pKDwS7HaoDqdTy",
  "key25": "642cchxFhjXqt9wXV6eZj15vWu4g36ERzbvjUQaQH2Ysq2eXHcZseKXrvTfz1EEHZSNkH3HFRBMMPYhCG9HGh63",
  "key26": "4JZQqe55j7bMcBhQ8V8bGfv1z2G7Sb4s85CVEJGfrFbehX1He3hdcTWQrzsmRhr6C6U837a1k4bjH1a95ZsQygtW",
  "key27": "GytgjpeUJwwqBmeqYoNpgyKidHwk4uup7QS9tx9NMex32i7iMEKH5UqFCoyU5SqxKWSzgD4cNks2MQF1TtZ57w1",
  "key28": "5dFwrRcWHuSPMuF7WByjTg1Amj86fdHYhT9e8ioS3DHQyyUpsW85JergDofGj3AnK5MF6XcRv5utzJtMij2nTxw6",
  "key29": "2Hx6SRbHMrPvao4daAtSEykKjS7YEHPT9iumSecvWegZr38bEH9MM1p5cFuwt1yfaGeZiBY9XdLnSwEDNgRQT7Vm",
  "key30": "iEkK75t5j1hzLejw31S9Y9sM6GXbvfnZEZrD3yt5EZTRiv9ftxjLS285SsUzVT6vtWxpYexVvYstc4gm1oxeQUH",
  "key31": "5qR5DMLDDk4nascTJLnDbJCNbkaFXY3TwJErNWUPNkKqb1btW6ht2tdxjdtZSU8cBE9DMtdcmFJvsHFpYR7DCW4h",
  "key32": "66QCGtMu42mAm6iH7cqHz7n9ZCCCx6FSAu19V3yQTJJdMR9LvWfjvPRyK6rnUxgzvZhvJuJyC8zETzxNYFZNfsxo",
  "key33": "zw6La5adE67vANKSuQkT61PpBTmzyDm5AdUFfypyjcW6YyARK4spRaB3ojGFDURMT8LnbSy4hsgcR5zJDnM439s",
  "key34": "4sDTp4HAGpS7CF8VnWFE3TunBR2WgjggU2xS8E4FY2ykQHxymdxRhdtt9nx8g6pr7xuPJKpvCquktvGcVS5crU1b",
  "key35": "4L5ByM4L7e5xPYyYGnddcoun9d2bPTssi4XgPgTc1P8xcnjo82DAS7ntHU8SjaM7FVwrPrDEHWyXGUaB7pkzinHP",
  "key36": "3y5n7MvPmDc7c2GktJiNidxsir4HMuRpS1tLzJb4spa19yQ5BA5ARTeNvSUaigj6caJBhnLMW3oiRvLCTbW32RLH",
  "key37": "2NKRaYnfXYZzXHcXGV6FSzDkpTZEKfT2aQzCmkFzfkNtdT3emEVc6BfSJQhoufrzTKV2pS95dTPvc7CZzdc2eTYB",
  "key38": "5Qi3FuPVFqgtV13Z99yRTpfwTtTQgu8nG1GV9NvPFRtXBCJRz51o65MGBzvhy31Tr6mSTowXhs8hPuSeRwiB7ifi",
  "key39": "5fc9NTBpPM8V7x8Mths64YvHuRjJGhMg5RjuYwQmjZ6HdVs8qrTkt9gioiCpMjCmhmYY5VNeQ6pTWqK6MHX9HHSq",
  "key40": "3ZRDFUXTE5afPYrWjWiAHrpUfaqCkfdUQWy1uraj5MKzHvXXASCnNDQMgec5B344tFwQvPSbzoJY8xipyF3SEvNF",
  "key41": "bNSyJdt8RAV4DfmS1a5AjfEGfGZKE1h8oeRkpppvvAgDvPRQNRKqDFFUuB9jcKQpYgHaiXoSKtktA22G71CY2Gi",
  "key42": "3AaDYuvz5VskQXyYYqkdgz6ekFhFrLzJEWKk3xERsFwHJFPzQGZk1a8zeby8BHBXbgTKep9nrffQcXd8M98Q7JS8",
  "key43": "4jMLnd1n7RRqZFB2Q8WZPysSYfKqyCcA2zgjcvcgCbAoB9BguVwpFWCXEnx2RCbnLXBa5znet9PiJQ535x8ksBTg",
  "key44": "2oxwh9ykeYbLpTtYaxxPtBCw6NHX1WKcMTUWjkCr6TA4KH6xLLHLUVKcbuNvhiJsDd7JcfeZcL1rhKoLyjNp7NhS",
  "key45": "4aQpS8ghmnhFZSCBiehw41QE8Y9VQu7NWB9Y3hzJ3w39j8hRng5ThnAHKHuRrqjs9XpZW8zK5mANK5JaGgfdv7QK",
  "key46": "6DkhxPGfTCXU2JVWsuFPVkqjgej5nRHvKqdDK1jmQpkEVmGJ9S6WKwCnFaRzp6U5Ghirnm7NPHQo1BDVv5uTGR8",
  "key47": "4MQXY8bnx5Dd23jGnfgjg5Stp7ZhmzrnZpDZZHUY3oHDFzaSUDsvSEUKQb7pxRCMN2GRu6M6rQVs9CitZf4iP17L",
  "key48": "3X5Y25iYnHvw6tK8QGAehqZqyATej6YDh4Ukr1V6bnQovuwzBeTZ3keDaUi9FXwPrsMgnUB9bGCdGanuyg578GQu",
  "key49": "5tU7gU8MMaA9bXHUcNBekPmkFTUo6PWFmEVYDgVv53Zrbjz8LHhtMhQc6ezwikXABQ91cveTEhkEkFDuWF68AW9h"
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
