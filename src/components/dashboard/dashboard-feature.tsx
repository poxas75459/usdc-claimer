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
    "5fv1u7yzebyErJfdCWNF2LjXWuXUiKDWMdwxNJ7hAdhRbo5AjzW2wweYy3WRX26Aa3WStAditrjKaW5DdrdDdMDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481buCgkWPwjBGN8fdjBVnQeE5WkD6vqXPpyBHodFRufYVcTA1kMfBZwSb1jsQpgFjfB3wrNp2wsq394VxpTVyeB",
  "key1": "3PtWp14QLrsDrChF9YpDYmnY2YJWEwo6WwPHxqsbL39CurWsG8sbd7n6oU5GueCxnQXFz7Vh2nRX2V5JjYvhh15w",
  "key2": "2hXNFE7nur1x4cQyM8u86c35vNtkFq3EMES2929tpvKG8neRDNsnim6G1HP5WGjfPF3NTUmgeq11YB6Y5Mc92vWm",
  "key3": "3ahDNH4w68KdF5bwQSXd4mJTQk6572CyGjqWeDModrcf1fNaf7Gu8R2CJWxu49FUp35q3vmW4mmRaa9gfpWZ8Z4g",
  "key4": "4f5HKc5CZiKFUx8dMQKhG9kDcE4f6ZSx1EEtW38qxZENzPZfNrWu6mJpJ4FzcjFFHDZHFVQvE77QZqARNLcuVH6B",
  "key5": "6hydxRGQ1EC1yGxE15M4bViEgRJUEG566HqpqC49PKCRDdWH6UXmDemVuvT4UrfBUwyokhbF7j4GFNyb5XGMAGP",
  "key6": "5tGL6qf2PkzXAeakitEzs7MssHQnnLkjsZuRQ39krh5hQd8CkovHi7tjAiSvkJ3WgYxXHXgsNVmZLuqaXx8Bgzy5",
  "key7": "FzytTE63kEkjHmptg4sKxEiuZMyQv56Vcq9Pas82kK6pcfeXiUQr982HdXLL51G6L91kVfyoKHiGxW8wKWXi3cw",
  "key8": "5iwDSFVGtsPxkhYsmF57Kn8ayWXuSJgrBgFLmJmhHjt5VQrZLGYkYzDg3cPwhPoVmnJz3iGybBRp2wQq2HPdkwSg",
  "key9": "47vatseYDHjaPxXcNusoCojzZ7kUy1HMYjh9X4Sqp9vqPsrXMtQGMokUMbkScDsdxuFeX8MuppfL2cGFdFS2MMQg",
  "key10": "5cJrwPejhqXsu54oPtqoS6FRonwvcY14UkeqKZbuHKTn4Q3MepTHLZmfVwAW6dbMdrfVhzHVDqggKApENc5sAfa",
  "key11": "5L7XftmT7ae9Wxn7TkMcTMwRapAHNSAbatqWyQmLPbJVM8gfSCvvvB6mM8vTc1VFmMZvZDRLyjM7ZVMSZgreZ5wL",
  "key12": "f56DpnQWTRFnxeW7bki7LAqqU1WsPjtE95ZaPpfJLE9bQxmkNgwhEbWfwTkvqdCFeto5AigtHyPEqCq9FwqWrYP",
  "key13": "2eW7r5W4VGvzb3zDe9Gr2xSCpy4EmZ6rARBF4xa68KpiV6UirPkrBFc8jGhJQkSxGdTy7rdh7PGHLr4ABHvDjhwq",
  "key14": "2u7wXd6KgyzzF1NamFUTvqWJ4A5AJJ3mVvVcKqB3rzpjzsj7ZeYnPECpPMTcossZ2y7Tud8fzNJhAtxihytqDZAH",
  "key15": "4391B77CJbQ675vmydEuxK8ELsagAnCqK6Cn9kNy6bBUH2zqu56d4WHmEV87wPt6BFqpWX2pgz7Do7Ryy9FoaCbF",
  "key16": "2qPrE1Gkdw5PtByx1rFk28TeT7cVJKvbEcpE24t4b4Lo5DwBYRtHSNgQm7Pz8rWic79ST9pFPdjbyBKkhNS2mhyW",
  "key17": "5mpxVGBVRW5Sjqf42F1bxMtMoWmE2qoFB9ZfbKEpqQuLZs1rau3xaKfGBmhRuBsSSEoAoB2mAe1QtfmCd7QdHit2",
  "key18": "4t4JNEAxkFPukBEJT3g39GjpouFPumoNfR5Htbx4iznzBZ9HbHGeAKRvTDfHu9ZHTohEYKRPtNNA7Yqse3sz1SmR",
  "key19": "3Xdjeb9jCXVhW6n2XAinoJPQ8Pp6Jv175LvhUnzn96jELMQCkcpZxkDUxn6euTK3LYZahxGD27V3Mi8CxwY2W7ew",
  "key20": "4ZKbdjFt2VUWUYwCVAQ64GL5VavmBc6n98K4JQp4frBRhr917divAe64DdRsx5uwHG2WY6Cf51RnnfG9e8BCNkcz",
  "key21": "2f9swyPLCo4YsWHS7RyRsRw1rkj7Kpqhy61yLrgytXutTkucmQx4Fd2u1DNpYtKDWo4m2XmDiR9SoSHmfps8oprJ",
  "key22": "2nxuzdFqezZtv2eFXvpNCoRYtxoytk6A6yJbtJGjrFiZbz5d2fqBrnvryKNKWnJh4kw1Pm87aRSNmGHYadzLdEvT",
  "key23": "4Yd8FKMrfRaSrAceu8rWcmK8b8ZtrVnrip2cHgXoKh32nUj2PsynV74xJqAvz7bZD1VUY2b1TwKbSChP5qZZmGdk",
  "key24": "5KTFNWimUN2ugP2m5sgD4QfS5nmnjw1ny9QsuFJ6gDezk6ALmX2CEbPLGbenfsZRTdXgmFpjGJdPYJv5b9uSSL9x",
  "key25": "3s5W2DkwvM5bXYCrdU6hSWJzgWeUosfGLzbtKSigwStXXbqfKsyvFsp65ay663FVcg96JJuAmbdaqZE6WVtErdPL",
  "key26": "3TmcFerkdWqmgBXMjshfqqUbUKA4YP7ZZEahLDpzx6P5xGiFc1VvdJ4YBWX2nyWZ4Mpb4jsxfB4VC1jf5PRgMARp",
  "key27": "434xJjdbgC3xcQczkXXEHzgb42oabKrHYMuPW2b77GEQ7kJpJcDYycRXSsw3Rfb63YtvREie6t6m7ew5XfpJJwEP",
  "key28": "621Bw8P9btJjAH25DfBUEPZncPZnX8ceRGa5i6rAG3jaz2g36mVBsCmBtvAprgnchTLszd7PHC9KEJ5M1eP8kcxo",
  "key29": "GMBqgu93fxdVUUjrAofX8Krd2SvtgorDswkF86PSsih5yonVyj51WGNF5PcAK4npFXb9JK8zXxdcPa7Pki8m4WK",
  "key30": "ZTaNE17JUc8VXR2sUtPtQTgAWgWw7gms8xXhrj6aTRmUy5aHfh8SQRNjkEWuf1Q8hFWQDb2gd2XSeELrnHjGT2S",
  "key31": "4Ye6F7JYPyWTuWFN8B771xbfM8ooQWcXc6zYTtFXNw3BeFJgSD5rmtUpjakzgDMksAFZ8PWX2PETeMWYpPCAKNih",
  "key32": "5gAjDjKcuUJZkayxXYGB1bza8mbUzvoxCyE8UMSvQUM4tVmxWyrAGDNeDYpqYkUxhhD4thWjpL8WLZu6hJ8GE2Xb",
  "key33": "ZxsGwHofyGfdmDB9KtNJZ7Td2wBRgVQqEC3eNqZKuGDJkdFx3JqdtH4hx12ihWVm7P5NJc1wqzb28kCT1m9P975",
  "key34": "ErpB2xyMnMqD1aQZgfiv4ggt9Ni2NBqGtoXEfsnnBqtUuvPhrguzYcCZtdnYV2TnA8tASqRf87xivBB3gxBjYYJ",
  "key35": "3vN5xZxfLnuaxNpn4LNRSgN6nHnd6WpiCw2xH7ekNFx1A4QjJxCmSuqUhLKQdqwdgVh5wmMqEon85XLwKMemtw8p",
  "key36": "34x2DzJ2dARGfPmFXHCbT5u1STz6sNPcbfxdpexYabYqw8f1ykovM9Bh84Yn16ssmxuPRajJNoh9weBcsXovT9Pa",
  "key37": "wju6syCUYjNZPJvcK2f61LD9EUHztSt9kzKVx4WgNk1wrjzYXCjcahCBFTzAEQiWcBgL88ELApNnRUPZe8ciUZP",
  "key38": "3UAaZmJcwXrMfWBDGBdbZEKoCmpsHVk1omEANAWH7aYCaJw4LEmepUXMx141DeVjMuhzJhNAziE87uofSmfVNmhK",
  "key39": "5tsCPN91YcFNemAPrnaR86wjNVS9wEpRs1yCr4hrRe1g3uuag7viddU3bynp1sTTkePKqzBUebeyNWMpquH7A21J",
  "key40": "5AadrvSZRXHAj21y91tJ2hngk3tCQ1wdPPKvPJFUsLYw1dKyMaFouFdi6dqPMtjHU5T5CSup94Z3eDnMxARAtvsw",
  "key41": "26p1YTxWncUMLkt2qwKmPewceVajKWAnVCkAZtJxDzbPgSQBDua3K2NAf8Nu1a4sH3wwAEtrXpdEhkBaDv5qCkLK",
  "key42": "5Nwrh4oViPz1ePiDwrfuEZDeVV7f5LwjWrw1FKB7XuMcde9XE8SEHhiF1DbawWR53JZt3fanAP7WUVrxA9X9W58E",
  "key43": "FwpTHHJhVDyUaZttwhWjr1xgBbzAmU96FMiuLVFxpTiXsRVedAw1m9noWbQmUttqm4fjGu2KFc9Wh7YecsbRJPr",
  "key44": "5XMqj6fgLmk5NtTsn3E7WtK9t3C6rme6MscXk9g9YCNDum1LDZwMHNZTd6sMuhLPNcoqbcqhC5GEScDs45kW3rw7",
  "key45": "4MTWoiRWFSQd8E4wsWMsp7E4fpPmBw9fGyqX6QVs8A92N5CtfrcbHgC3aGhkDrzuxVvDD9vaFvFvXo4Yb7XPy1bu",
  "key46": "24qb1gDshB8GsoSDVJW94ge7VHRfm5mj937BLNJta6dLeZfwVGKBxfEwHWwaUvWonFB6NNwsaoXkXNM7294YgGvC"
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
