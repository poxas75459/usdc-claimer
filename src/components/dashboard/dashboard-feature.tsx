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
    "29UVqvb7NHZDD6FZzvh63kvaP5yKwnu8pr4Q2BchE37JLMxz2y1oEz9THErp4pAL2bsvbaSk7pujK1yae6XFimZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQJkp5eYFo7PZ4QFvcq8DRyxjLQpyGDYjimmG4Gf8xfTSJRhgqhX551n5mxdVviUwFAnA2zuENaoW9PNEJzFxXN",
  "key1": "xuwyiDGgV79PZCbFkDJ8T9Pek1wASMDUEVqhoFNvTNtWtosVr46jvZxPEbhXxsopD3W251CQzkg1tPKPo1rZ6Lp",
  "key2": "5UHhp1XiwVJhonywoQBGLSfSugcWDnyqQFm2grgbXEjx2LousXqFBNfg5CiJgpawaSuiMyzKitkR3UY4BaQvuikz",
  "key3": "46L5GrGKqFj2c33eV3b9k14nQQ9uM9JbQS2R78rEuL6dxFLZMrvXxLDmrSqAXcHjqXPZtTEfwUcwgVs3eELkZ32R",
  "key4": "4U82fm9QdEkFZJhb16xVTUxEN3Dco6EdX46cfYESCr4RDHWsnMsgEVnbveEHDXE6zqhBpwaRzFAPY7HraudPsRXB",
  "key5": "2qWLcLgry5g4S1eLAjCR19cFL26oyFUeo3YqiTcrii4jZhtHU4kSpSzn5DY1bSpFhar1WGMirA7meytYY22V2tgC",
  "key6": "YA9yJdENhrEceBis8jxsCmf1ba92bL49Xvt8xre5pNsqcyRxyZ97rQuneb2YN5q9ASH1fb4rdDrqDR77hgGduzH",
  "key7": "5gGbk4LVyYYAZcjaQErBKfvFaHcg6S6rFK4LbxcMS7FDnPEHniBDACWALYUdLNXTmJZbuqtUosTG7SnsDa5LowGW",
  "key8": "5ktuZDdK3Ze9MokL2p3ZMLZvXWweNXD29SUhH8jm4DhsjohzNPcvhsSUALnEWKikSZB7WpU1r2eMXX8tknd54P1B",
  "key9": "4cQzhwA8L1ignyjDpQ433oFyP91Q29e9Pgac6Bo2Wr9n4m3c9UtkCj4XbzMukvFzn4L5GPspxsu9bEj6bN4MzUgZ",
  "key10": "26zdcFbS4qbzR2YtL1eW2zznZSmJxt4HC2bc23VwxGd5G3SSHw1g5uare49boDk3B8XhBWvjq8GDCPbixX7XAZvB",
  "key11": "44Kec67yRzzcufCCSgHQuoxjNCPhvtozLGTK5NdxpJzMcbA3PNQKspDsbRPc1qUKr95eiWwQUH8zN7jrABYbqABk",
  "key12": "3nhYJ9vAgUrCYzGyRRvyrb2sT4vPK81KVy6QhJnLy9fnPjPFPHid7k2mcMThjkyAVjMrRtRhHzsMaWJpegaAQ45F",
  "key13": "67FkJp7DvuEqS3N94fmyctGTRsGpMPu2Lf5gVB6hhXxwd5MZeKTsfrxucTrn5cFp7qEanBto1FbmrN7eWdXKc57X",
  "key14": "35fheLHd85YMXpfuRcgNUmqkLERXSVxrhPtDZZiKtk4vEzs5Y4pZ55je6B7MFGzf2uTPSCdxdhS5mTKjFrvDXVwX",
  "key15": "4yD32441qDGs78nrgofvNoQRegjR3AMsVUGLTmU7KYk2Cy2HDg4tHUuUmktbaay21SF6ZoBPrUpCZA5kx21g2Fae",
  "key16": "sYzMXhBLHYMvzP53TUjmU38kvzgkexpQCytHb9FRPbMrfYLKqCY55gb3dg5UXfd6k9zqB9rs9k1oTQcRQUKXoBq",
  "key17": "3DNomCE3nzLNT2ZPnhtBmjJgcDRiVoys9AcG5kqfoXw5DS4urJFjTH7yp1HWLEfmAh5XxEHHDHihqiPzXU1dc1oL",
  "key18": "4JVSCfTg8wYiGqzHp9r5YXM5Qg8CdQDLWrN8iEQtW2vHqA2L3H2YvaZeDNJdhZNdPHjezMKRMgtpRiNfbtQNStHr",
  "key19": "2vVGkRwcVgU52i7yKh3jd1xSPkoj5kpQNxYRPAqMwRzVc3of59Yk9Q38Nqr9TmD8yQSLzxYj6Xvnm1g3A2cQsdhh",
  "key20": "4gDcaLVUYEbTFEDxBbK2DuHk7QspZzreTX3Bh7QLDZ624BgNQfVuwSrAiPPrBG6dEpSa3Pibc9hsHFgy4StFB5e9",
  "key21": "4tRFrkz56DXgFRfyQP8a1Cbd6poeYyPwymB4B5xMNCvd9uAHWmoPcXee9EfXV8nmg8XwVM1za2BfWWwmCT73tbi7",
  "key22": "wYvwyShj1kkb3vKv3KqjuVijPXjNqrnm5kTWQeEvZMKWhzkzG4v6MPyYs1zY5VEzq35VnM8JqgYX1i2TkK8HB6o",
  "key23": "3bf8mhCeiyjjCjJdBHqDbaBUHYeocFD4MpFhNvAEEHauZ5d5nJ6xzB1z25tecGYsPme4T2dovu7ejihANcnoro63",
  "key24": "3weNzvFh31AfwXonyjFoZqk8Gt3kEedmcxwf9Ax59FUt4CFbfPPGDw9GqfaXnt8hSkS7ZLo31m5bBeas86ckRT7y",
  "key25": "2HcKSo6hAnFwo9ZP64TZpW5twceKEuHaXvtLx6tb9cr6H3JPsF7JCZaG1MkQxHkRgg129J4Mp93MD29mYevv8D3H",
  "key26": "2knwLBku7KKoi8kGKAz6wVomfULo4DWodKgm2uR9qbGqGRRwBHQ3zj54PevJDAGQPTwECQb3R8o5gLvmu8DRRDWb",
  "key27": "4935DJ7CzpNdar3axDGZzcsYkNKoS8og5T86Nz7cKSCNTSabaE7N1C9fUy7oqZGHT6enfgjJJ4T7S6nZ2CQtsk11",
  "key28": "3PnSHaJsodBGbz1DLdx1UcHU9Zufg4Qta8vwDcyT2Sq7yizPNfCcKcsuStXG8AboA6b8WTz4pEjrHGG6BMSXWv7N",
  "key29": "3cVys5A6cnB4S7ccjUVEHxAyeAmyV8bUKyiQKaPzK3fCQ1eBVKLRorcctPDBT7RwwJabYuFHrTwDTNm9HfrwPL3u",
  "key30": "22i26XAbeEXDcxLdcTUchWBcnUHxUFsQWrE1j8dQjQStdJ8t39cKFoKDMsbYJ85CSjGSFsRDrzE2jaK8ojWteTyX",
  "key31": "66tQMQrBfrEbaPsNJAXPbeZwi54nVoXoTnad6A6FSVmx6qwXSeZeqav6B4aCUdmw3wKagGp5YsWZLqAMeWZeBQho",
  "key32": "3pBtyNmg15sLbzyr45FKZR5Gy8HTTYZmfiKmMs3vLDraL2WLX1Gq8yx4Dcov2oVYrUjCKe5acBZnhXNFLWw684U",
  "key33": "3r6GXBSUXRtULscW8F4wiW4itQfiNUiob1WHY5tvfygqjLzkdo6DjkjSJrw9gvfVHyA1Nvq7tT97yyPEwXQJhzVX"
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
