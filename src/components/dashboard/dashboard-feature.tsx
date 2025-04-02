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
    "3WwBsCBcF6LRspPs3kor6Ws4uiuZbHusWkdez8Q3MEBcTZHrx27WCCCWXqFnR1BnNzLNrbMY9mBPTyo14GAqx2LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHcSgzAcc4NfzSRvXs8yLpQ4spnkKDUUQMZFjFjnYeS9phLR6MVhJdrUg9XcTiGNr76nngpWnKMAxSt11fcaNeX",
  "key1": "36kczNVErjuafCif6EPNeLCLUszUpVFH8Vx6M8T9CUdC5QFTUMHKko3RE96TtmVtZKsmMym8NG3BQcbfmQL47t8V",
  "key2": "5gDguwuJCKx961cor67w1T9z8ccjsDUnwVLBe13sw8ZKBjhg1BJ4HrF14fxeV8cVPQmRCT9vEVbkgX8VjgR1kMQw",
  "key3": "4KVQH8SmsBc5VCtTP3iNof2BSa24NKhVuxrJ6XcEEsjw9Rni1rG6j4Hzpk9aMLkkP6tpaR2PR8aeFNNaQbqACNY",
  "key4": "3EcQsPka6TsaEd1v8ktjDcjM9FNe27AWwuSPkdrE4D9FCgPpjPSGK3YQz1NHVv7iDTsqKXw5ZaB4uXzF6Mj8sbx5",
  "key5": "2QrMQa8JqrUe9g4v5i1xxPjEd7mwV7etzbYCGoTaLLLWaFquppbkwcequZWodz9o6ujahNsb5XLBLkE6Xrv6JSYs",
  "key6": "i79hfg1coRpDNtr3RHdXD5MpWUqYQpoNuuJ81oj9mnKPx9Z6axbBmgxNAP16ADnfN19iwKRkoF1aZaVJ5wLz6N8",
  "key7": "2Fp9fPfDLyWYibnKtyLdJUnqnCyAkH5kBzdvdjNLLLNMpEiLyh17Lo93jpXdTAohLCtq8egbcFKNe7B4yva6M651",
  "key8": "4Q96sAQzkbkPjMiVWguoNADio2ojwV41KEdW9ew9PDpTzUHbY4nb1ktKFbyEautJ1zkYJeWkC9KQfWNqbUmv2YkT",
  "key9": "63GySG3Vh1WH4iUSvNJuiq9X4BHifbQrjsUgBVDtMxXakmxCwroo1GD6TRtp8BjYTnK6jTC3r9XaM9hhYBZwiHxS",
  "key10": "rnH6ucXTroeenhX3GAR2UFyf37nAJHqniqttmfjGifM3UtBsMHZvicJoSneZza11EXRCdy93bVp8eK5qY3WmzUq",
  "key11": "4n8BEWas96fNZyEgyio1tYe38xHTS611yuNUj2EPyorw3UT3AU2P5HkaFgdCgdyqoszEWiFrTer7BnWgMMDbPkiL",
  "key12": "tyeF7CE93vaAZjfF6xtNGSrjuXpsBkvwLKFVLp9TotAw37ZLRP869ssrWCPqTYigxyoQwNNzoncaw3SbBRJvVP8",
  "key13": "4h5ZYUD1QuimhBgT27T11q3G5ayYQKn4fdNKL3mW27UNTxZQbgPV6HpNxQghcctVSKNstcJxzXF99cDs8dR6fVwp",
  "key14": "5KzKpgAXWRNN8f6yyYD7tpyV1byfcMoisM4XzBiD4jFvCS3YqzSG8uSX2dU5h73HbSN6Hda5EhT2CBiQ144Ec2JS",
  "key15": "DqYoyfjyewep1CCUWq4UmRSUcAZwNpTSJBBbrSL6kRBDvqJD2hZbsY129chUyMGL7M1bgLQNyKixAVbkztziqgz",
  "key16": "25Zg3dGfnRaCYwSSFxrUjgBdnUiC5Ct9ngn1mmP8KHYFEmh7BnKWutuB8tth7GpBvtiQf7EeJvFdYDrBDQ37TV3F",
  "key17": "222C634ECpWNVTfUGfYUR9uBfVugaKcjtWBr8Z9t48WLT3PcUDfWAR5TaqhugwXvU9nz9YrS6eXoFdBEwokpkXu5",
  "key18": "5mHTXFHx3puL4Zw711hbKEc43RWXqgpGzftRTxqUDF9yKyqUYVDh3yorru7dxNdtZZFDdaQ8D3B53hfmZ6hvrcsD",
  "key19": "61GFCEabeUQa68mT2LBHQuN72dobtAkKforchiWqtqZrsBnUKMN36QgpH2dexcKJA1GpX8BxzhK8fNeaG184NgPA",
  "key20": "5DfuQMPLnMKx7KXWLZYwEp6bbjxM76z9uuEqMa9ZZDWhbThkW9rirsYKjdaYLsuYWnRq9ZwAYKWpBAszxzUyQk7F",
  "key21": "4WGZEv7wnKhSiutGUX6xQu4kDAnka4WZx661yMJfKK1Hn11DXW7u3YZNCv7o6rMHsRCaBDyvKxsmfr8AXnF8KYt5",
  "key22": "KrCm8kbZ2sn4cpbe7ffyiFbLfzR9pYpWo342QeS7Kc1kDka7xSVVJkoMAMyDCBjbwnE7GX8T2A4DkiU6zsVcqeV",
  "key23": "4MwtgnMosvLoTMmxXMwQmK1oa4c2KW2sfFGhHEKcAtvTCQKEcDDZ3q1GdyeKnp5N8Q9cLbrADhMAuyFNNv7AW8CJ",
  "key24": "4sNR5DmFKq2SMJ33LMFzrr5VzqmKW9Wu95PgnXhNhG7anxZSoe2bXEotasxDsg1vQzf5GGUFESShXr1ZuFy9i8r8",
  "key25": "cCbfcRj2Y4dxVnPKEzQCpWK8CwVayBjtU4JyuSo5Jg7Bmo4vd1An1UWZY3qJxR3KzAD4EupFeFybKys5xEDkCAq",
  "key26": "5H3kyLqj6ZGQa2jxroxPnKtoS7vGmrXi9Cgzq4fotcMC2U2sKFzn2sKy8eGjHcmawYRbHaNd2X45U6P2gED4GVtE",
  "key27": "2HTZP7cwE7eoTK17GXC7n8VBtfop7hrnEbL4kbyexEdZWDZ5X7svxtkE57nNheB6cqzThcnK1mo9qhrs9vpox77A",
  "key28": "2VQrLtcvoWPJEKo2jAhmgarXjqaNEi3gPFJvuQFm6ig2BYGTtY2DQkjVzDSUB8GxGpnx1zCDShEgjER6F8T8HuUq",
  "key29": "3MNAWUoNdQFMTqBhmQQs3e1YkmtMc61npjBhKey8yvmFPB2xJxDinE9WrJxzXvA1cmcGG1Wd5svatjRCMPtiQwHB",
  "key30": "5JYgTre1nypuy6cpmacA7LK4Qdss4R3N81EZ8rgGBAANGCTSSsitTbBff27kHgZS9TcoCGy44ssLDZ3byTFAstao",
  "key31": "2sij7PxfJNJCbqEyCTzFrpaz8sRoKmvmfVVg3pUQ9iqsbeztwgiaXCbrY5p628A6Dcky35CHmrwtnHyQZUFAASLs",
  "key32": "5eCVPhfAzMkXKxVZHdHxUABokSqCDrHhsBWU7Qc6HEbr5kks4mLqw4sqTseq9GhZo7qBnb1q3yzGg68xkMpqnpNW",
  "key33": "3HLPbWeNc8tTKQFHwTXyqHC4MYjdVeC6KXcjFPVh5z9RNWT9pfNimkBdAYNaBMrveMexsrn6CdU1WiXbGFP6rkbY",
  "key34": "gDEbNuwrkrVn38gmXBxvQiqD4PohKSyvqWGga1JpY313wC8yNhEuB6PUGEMKLWCEdwTFKMfqVMzyZg5WCN38KuJ",
  "key35": "4tWWxBEYZDhc9ePB4TvfJp5eS3HX6YM2T85xghy2UPwGrNtMmn5m9qMqMQxMU6KAxQ94AKRDuh6ZABz2FFMbDLSN",
  "key36": "2k7e8S7MENB4kNTUS4hceVzZg7tEq1Uoy8mkMybKv773GqSpziw6rJ4tZagaCP8Hh5W7tzYhKjKiRyfuAG2zex12",
  "key37": "4ipomGEkrP9XbeUjR41sSopoqieJkeXpbVSkgTiiaQt3vaEyVBBdGZyQSRFFgKtM26WaXt35AGAQCPRb1wTmk7R1",
  "key38": "2GsyAp2Yhih4SpiJf2WoD5KD56Fev7os94XGKQWG8vgEv9VWV2CVgTPRDU7PXqyLoJTA88mwWeEsL6uCfcg4wRu9",
  "key39": "uTLzFRyK7qhATcGDcYdqeixm427zZsXTDYzwAeDMYxKBUJcANJnwaPjZqTjdJ6oeyN9SyLj6vNwiPkuvqLzarju",
  "key40": "5hLTtTgbqM5Wi1JaxAjddYyyYrDiQK1WaZeD8z9cB6mPa36Zr5Ro2vcBxMkSkGa6AhqvupMJUGuxD5JS25eDG876",
  "key41": "29AGK1iz4HrpSGBp8bjguiKeeo3aiwyiCSE4ajP8Rssqh3R5vVsvxrXRLSPiMfeLxwmzp8hjUtf1KJMLUWRiYNKN",
  "key42": "2JeCbbLuxqQ7dauAKHECRcYg8xPdryHmnJwikQuBseN7PFDKtJY9eZmXeep7RTHfghWSiKB75zH5Rqvc1TLSHEk4",
  "key43": "5Aunaqi7siycvFLhSQW2piPErHpPHqWAWWH2zQfj9PBcQXhFz6J37KC7oY2t7LZ7DZJBfBmHMeTX9EuVDLpBav4y"
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
