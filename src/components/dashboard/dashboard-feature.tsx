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
    "5Dif6o79bcQKqi5yFeuBoAeiwrqxLkvVm5b5V7sUvkZWvdKTuRNZhfjtuJd7ubiCsrcwadYqYHhwn7WZhpj3AdmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jwA3RUJ5oKjoUHdfHhazQXXGXXRqwigJ52qb6d8HLMmNL3HRTyp7x1uHcoSdpxY2LEiKNnQhR74Bx6JqoAxJAHt",
  "key1": "3BzCxFhGWtfD6Aek7XM2SkEsmKcNoKUfkrhMyQ2DBpahvcyCrkQGgXrYp3VxJtfmwgdzTqf64gD3mYVEphGBceuD",
  "key2": "2ZVwLcr9cNFfmWxZ9zPDr5Vi4NQL6dG2jNZPJamaZ8qGcTCLDPkMffcrk6iFFoTSQkiPnDe4u2RL5DRb6x1r31dw",
  "key3": "31mtzWEzU5oE6MePWJcK2PBKaCJYcVs1jK8fFUdnbduPkrSV3czZTyczsyk37sEtF3SBJrYcq2ncUFZkzYoeR3gm",
  "key4": "4ooykGBHMqBUAWRzCHzsxEfGRrUETUuprtQFWtLBgvKHfcTfTTfBDFQLxK2EAL3F7JhLAuZ4dC1C7GATZV6yFhW8",
  "key5": "2EUN2kcBRdd5NCvCaY9CBnH2tVoGf8Gvgw2tgdbCPwgyQGfQJ8gL52NidvcBE6i4GhgJj1jGMMXGYvcfa2Nvfx7T",
  "key6": "ELmx7qCbsJ2w2vGHGiBDXFsFhzBQTzxWwT3EJ3vgYVNmBaRJzEGcKpLGfLC6AF68PGkL9s2fYvoG8Ne5MkuRRsa",
  "key7": "2b2WkovdLHFe8J8iUkmPRrjqbBNJCvadKVSJJvn8mQiFxSjY8EdVH1CmhNpZZdi9Eg4P8A4tSAp6nsBVvqeCcvTn",
  "key8": "1hmEZsn4tnh7GTwu6HM6d6NwTRUxDQzd2GinTFfe1kXY21XqaZt2L15h6M9TLAW53HVn2AjwcJ4NPYEN8DDece1",
  "key9": "3PgJVhDB1t9E6seFGYnbnCSteXXurH7SYjJTBbgmDGuGpepGDp2Qam4ND6L8ubKX8zJSdiA13fiLBmwr1KQ5vcr7",
  "key10": "3zxbh3QVhLJf7b5Fd6f2MhX2KfxrSRvFRnCEZHwDEqtiqTwYpr9urRdBSj1o495BZb2c5EaHU4cB6bZZUb2hUmti",
  "key11": "2KngxQ9BaZ8hUfkgU6VFWy5DBT5eY7ZFoopX1YMjrCKwygUR1Lfb2ic3LfB8NAGScqvqPUXPYWJ1L7iWZ1FavPe2",
  "key12": "48aoURep5GSH8AKoFPgRsZ6WqhnZv8EtcyNAjuvR9C8HmsbqNhBKxtvSM4wvwfbDutg2tY1ge3vXCqw9RwhtWTUb",
  "key13": "rfQyoKwL9UMhnM6xuerZLreG5pTL2rXXUR6sNLoRD2YXDwshbLBDYo9Xd1niXfqHtvxGef1YToJxz5VWfSKiYTh",
  "key14": "4cXumT41YTMvVQE1AjkCnPMp5GwgesqiBWJgzUpdTf9LiLJhTXTpLfJ1HzwPT9EYbr1iFqc2W6FyE6bQrR1UPZ99",
  "key15": "2Gh1ha9dz7WbNbNRGLFS4wzPRyRrAQmzE3UEYE69D2JZuNyBZQrxYjq8peExzKUYWLk3sTGfP98wesC6cgjrqBbv",
  "key16": "58KzogMUp1Gpq6V5e4VozBpK2omZxNk3CycQQiejD5Lz4pS7qtH57emhgbi7NzovaKsknameY5a3sR5KYWNm9d1h",
  "key17": "wYZmUSWLEz4j8DEWCA8yV1qYeA2EhcSgB7SXaN2cRGETbvAZubtCbUNhSiPsUcYRQytbRyTLEWMPiLFyJMA4Tap",
  "key18": "4ahSub1coqmKdqubhZ1AATenBjKaKryeAtVZ6eCN28jy1XGvWuVT3g1jWupAZUHW7EofFy4ZsdD7kcNuyXH7q66K",
  "key19": "3zzXUNwabi7XSDxdniFXffccVTPx1dPRrwq5uRybzyUZra5qheMbsEWgTvLEqPzJegVmhbJB5fmb8D3dS81Bkm95",
  "key20": "4k5FDiXZojd2vSMAk3Ltcc8rgLjz5czcNX3m9rsnG1WbbaJfp4gZpf7JewP77TsoHkmU7HtSNJ5uP5kDspitjbeQ",
  "key21": "5mEUJVJDTUrmw9LmrLk3CU5esABzZvC5ePWQbB5UmKazqXttxJSN8Mdnu6SPuAPBhtA1D6jVYn5bTgT9HuRccYez",
  "key22": "3Ju315cYpVmeHNX1qMeS27JMaMzPFigGnx3FHoXEiYcENE92cnn5X6ybfbR9UjVeZAVo84AvTwgFZRxMZcm5Laty",
  "key23": "4m1KSZ3Yit86tcwG98NSLhuMLKNFPVfAJiMxq5bhGwQqyZUW2uFu6pZWQV7ggfJTkRCguGazmeKbvg6dQpAh6mhk",
  "key24": "53J7MXhFQNhdCsmiikUc9E5fesYpMHCdHJknXCeptFSRHNgYeq6MRMZDUw72NFnckaArdeVGsexCUgnsjkcTRxRr",
  "key25": "5v6ZeuUkJX7h1WxCYs2uasg4NsgiW75MovEgSkcMGrXC5Y2xKPf79uZbXx9EwsPtbZdfcZ6s6i29xDCUGXyUBucx",
  "key26": "KZfNmQG9CVaXqRkLDPKvvFTmsv2QycvMUQ4GS2763o8kMEbVZKspFPMtubs6yRitdmGj64qAm94TtRBMdEUtmEw",
  "key27": "53enirhEeiSos3msUqVRjXuUvzRpeQwXnUC1oKsNNvkcqKHdXfENZoPwU7N5M1tbX96MbdTW569C6bJRttdH3BPf",
  "key28": "2ffPASZpz9sR21SWtAT23DZUeobJA1b1U2UtfiHgNmwbz6GVTNUt9Gc2eYdR11aqPv25LU26ZmbhFs7VthcUtn1H",
  "key29": "5MoummiC863sTkJRDBq9rYMdPks1ZUiWt6BnkFsP5esSZhxLQ9LmwWQD1TyTMZ1qhu14tPBCYbQcKWNEm24bBMva",
  "key30": "2XZiL8iCBW4QC4jcrs7Gm7j8g28PqHuHNj1tZBQrJQEMY5ZjPYnywiEbK4N4dmC7qwSFUXdAf3ukfeXhkHuSmC1J",
  "key31": "3Zy36T7zo8vbNtTxn8i71DnLp5okJVDCgBumvbUrCmisG1vtDh8kzM69PyoJ4HSKeiYsp9dfS7zDB2vjvEJvm29y",
  "key32": "2rwF9bxBdnC9q3jQ4MYtAHvpY5TD5Wni283Hdn5KcEzVVwYXhEu7DVGzxs1YooDSDkjJaDZvC6b5esF1LDbfDdrw",
  "key33": "2X9bRkXxRRtYzSTkPNGAY6mBx9nYzgf9ai5wQKRP1kCBPmLJaboMFcPRg3cc6e81gC5PXbfCC9nfvLkCRKnAfnuq",
  "key34": "uS4qQh3t1aXeaUZcMonCTbauuv93kKAEPjAkg1oswRVMtVwqLATA7DKxXptRJk7NF64Vss6yXoadw1p4n1DrcHA",
  "key35": "485DXbEC73YkB3eycq3NSiieonzHNR9GweJc4yZKdFM5Re549Vm7EeZ4jLtAyQWgECvvjvViUdBQtEBurk9CppSn",
  "key36": "AJLKs9vnAvv6sZhPPZWTjU7WU7aySd7WVQNU17AHP9KP6KZMz7qUjtRAa2LRiFfETbtFjYjUWXzWGSoVR1PRkvH",
  "key37": "59aUePY5aSWef3fwHKxSJaQiGPSwn3R1runb5ii1jbVhLFEJwJdwtLB71VcQxmfsKojwTxVYdGCqwbxYzeyDJZee",
  "key38": "2E783Bf6LE2YcufC6RxRhXU6mSTuVvhWNSYNkUU82x3CZtjP51ABPfaWYHz7yzaJf57DK7JTFXz93urpt1yQSnhi"
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
