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
    "5admhL6S2rKPub8wYmCqyXSGkGGUu3YQ3RtiYLLcNDBXPeucqGPvcykVqi5FgoGbcbH9J3pu1kzDDBkXEqW8kVzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jp3miA1cScVwJU8N2B3ThuWodYrdhiPdCFwRDGQPFGgmFqbPU2W3vmWyjymGe3NwjGraVWHruWom9joNVv6TEHh",
  "key1": "4hb5YbpwC1RcxbF1kXdfB8jdaMqovKKscm4L2Cys7qAaNpsFVEbFUVaTfWe1f6XZ9xwdYSbHBGGjLSQEpRkw2Bpn",
  "key2": "2V779gdm9jVJboM8qznodeQLafma5sLcPZJGuzepSzsLPNfvAvACHhXstERDxqr2orESyGgdWDYjUUYUTDqGg9mQ",
  "key3": "4dbEAyZ14M8Kg7fQbjsnp3MaTW4hdbFRmxxKHdQhzGRaxPZcrXUeUvYyuicCDpFHNCxVkm9Biyu2B724RoQc6MMM",
  "key4": "4XqGJkZFgyZ1KGVcoJ7i1yn4UVLbVmvtUcBockdFu8dtBP5h2FnjyPxFN28M6Vxy8q7A9i9nxbpSTRmVXJU3vy4x",
  "key5": "4aKJxUBpSaqBfpmsCm1MhusX5XuP1Gend17r2igt8ZR2Q3fAPAkhkrtwuc8wk5yUucoJQ1PYeTcjhjDvbptDNvmp",
  "key6": "3S22xLYtCN3BX6Aq5hzFDoxgTY22EQ5jp2kZR3HHzkAG2RYP5DMHoMqMVf4MEx7up7ZAaQtCuNaexkMwH4uGFK8i",
  "key7": "2wEmzZttptfwQCU9VpDa6xEWGQkqPXVcskYNvXCK3vy6PQYF2D9wxR3ANKnvjvWsjU5BYjQoXqkpuygxoqHizUnk",
  "key8": "4iafV4TAhz9SXoNSwCT72hoZJ7L8r7y7KwFHxuyoHDoGEnVkDf59UsBGBo7qb74wfm8q1SUipFS7zPTGKr4pArCY",
  "key9": "8ZWds4QjGnoCaJzHmojeRCMtmRXHbYeehF5QPewSt9VKenAnKvAfxEnBJLAEkQJ7e4yeQRRDEqVHLmNsPcFndqe",
  "key10": "5f1dEpVEUaMpUQHjB9QVNJifYSp6XHeRwSVX33hh63tmAigJ9UHaBrH9GnhpqdnDXW84mNVdNYDbjYWyivQhEdMT",
  "key11": "2759AojNp4m3BFkSXoBr8Ce1WhQ2zyzq2f8XactFUSUb9bQfixyjSyZU5xBR6Zhjk7Prn1hjhytAW9eeMSZU7RUk",
  "key12": "dR4L7AYDhQo17uoA39YjfR3VSQaoEVHAKsQHiw6kY8w19uDKyCoGYkEkFNxHGsWNxfazN1CcsSoRvPcED6T41w5",
  "key13": "EzofYsEq3BpL5jvCDgxPrfvtsGa9DkanK2n5gYDjzn9XMzzJhxT6Yu3r5DoYrekXGNU9nJieePeJx9cnzNGzBLc",
  "key14": "2XwqgX7Lqvhby5VmKkS1czZkQvJqd1SatTbrKhdnr1L5bw5gFVUVdLYrMLSMpYJ8B48iRmd8yr2sdeBhYDD6A2t6",
  "key15": "3u8C1WeLWo4aFVo4g8cGhz1a1NZBFQqsSuVQkgwjUh3YkXYdXhf4W8MBijFLVWWy6SDjahVdPyBX64tcA36bumZr",
  "key16": "51qXCCc5eTsTvDajfwX7mTwoCQA8BRCBsPeCiSX6sEDRnynVvc7U8FJuaGdWtt4a529L4gCX6wJxyKhLPFgpU8Ck",
  "key17": "45NjKGLBhxBX3JKSK666uAV13rgog8JuasVC8kJVBghPNqJYb2S48B532jG6fjwTmfqyGoTDD4zjdfPEMfU6CAD",
  "key18": "2DEEySW5d7ANxbomdjyGvYV4LVQpDovPyJacPx4TexcP4G3LYJw1G3hq4rzP5DcZ4r1siZfovJtDFPfbizxUvUQt",
  "key19": "YZk9eE6diHY6dFRq94m7hC1vmR5EVpDg6dwefc9R1MJHWb2xFBWUcn3tYb27TCjYH59NT37uzprSCg5Vzrs19RW",
  "key20": "2WAKahNoJtyYts2oZ9tDoTbjq2tPwdY7R1itqJwZghMUXFJxvjdpfCRYPcWAUDi4EYxQEsu8dffrpdHF12D33RGm",
  "key21": "2xjrQNPELypy55Ci3ipyRoPv6FGjVLzC2gmVMLNyyWPKoVXviKEFcGQMYWZWftwhR2zqs6kQSE8CD8vU2xAHWg42",
  "key22": "2r31x9ufZmtpMGTxeiWNURnRhrqbduAKaM9XvL4bs1kKWgb16uqeVPz2m4yMsdPiDAZue9nncVkURFU3yd4YRdnp",
  "key23": "4TMZigPiD8Hd4xYoRopFSRNqqUSeLnEpBchU64Y5VTUayUhzqXLKfEb9izJfhoSiGQGHTN9aXJaLDvckiWuz4hEu",
  "key24": "PniawSHEYey28Se1D6rgWXRQr8Lvbfb8jmDPzTZ92eeRfazewcErSTzHfh1ru3mNg71SQtpLHEA714nd7b3N8qD",
  "key25": "2uo5vQDt4H95mjJ7w4nvLAuoEwdi7XrMpeTjQjJeGjCHEZVsWWsaGsHuxicWNUjALUu1KPcTR7yUUTVWfLXSsL3N",
  "key26": "5UdUwX3NRQXak7ngg94jPWE4sEMhAkrtJc9X3TpogNW8qcWfTQUjisVkNn5nBWYczgRSozAhmTa9KPjmbZgEAUtU",
  "key27": "5QzNbRUdSsCKMkiJvMgWix9dAPvNQrCZj3Jp3QHTnhjUeNN1UtnwKy6jgWnM5LSa6RVZou1d5K6GtYibF1LThUkq",
  "key28": "3V32C7KjxxSEtiLcb46oM9jYW397kKV7chMGmEfybC9fqC7o48yv4RrY3ovm3kY4JW7oWUmXVPapVCCv8ZhpWpZw"
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
