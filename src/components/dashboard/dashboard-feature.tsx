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
    "ajTdUx6UsbHrSfANYgWxMJvc13LychvhRcHmDb99w9YcuSu8T7fS8bUd2kUJCiHZTmGX4fSidZ2kZSjmgaTjB2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SA7i5EGUiJcbb5AybYMBfpwM89rYbjEGg46dtmbhvSmfDGH35GrKW8G7jkyNNuQvFxZDpkfgezhzM9G3jqupWt",
  "key1": "2h81sn2nBj5EWXAPFhF757wkzJCELHk91Pd6dsN3FHfP3XU1C4zfUNeg3AskmckvPBrQVBiUyccz2BcrEZx9au8e",
  "key2": "Zfswd7BoQRbJUt8c2ZmvETeFX7pHsLfbEeHymhhUpQXCkp3ywDwZu1PijHoQvAtXgbxtAefxjLUkDx3M62WGF14",
  "key3": "4qevAzfym2Po6Xd9QpYA9hbCCbZWttcB2hWxahGPaxfx9WFsxxmoMgfntdYKdbk6XuvBTZ6sRkCsoAZgd4d6P2C9",
  "key4": "2yRVR7Rd9bwQuKCKBih8KrEsPfg4KPe51hP8Z85qsLDooGYj4zQhfVYJhfxgS7wk4bLYJ3tNNtHdNp5ZAWk2hf94",
  "key5": "3qWzWeCwajEQ4Lh33TPnWtzZbNqGTpF4HJg4bX1ZdhATC4LgdFsa6EmdBQcCyaEDdWMDybYo8x4ahw3BpMgJN6UY",
  "key6": "4hYbXf59QPVETB7Nuk5bCxPQLTRh6kWSxpcmcXh2USdfGdxca7YDKFVaDaU9wYZ4n83DXSD5PaLCZ6cpcMzwXGmX",
  "key7": "CAmiMuZP2Ws6qmrPMdV7ALekHtfhGgdGfHbtrAWjbt7UzStQeVyJuKG7qPwbaXT9ceMwUA5qdanxNTE4C36pdFh",
  "key8": "4KiZQHa241KLdKzDK3Ln2ejUsP9TqysWyLd7waAcnJ7ihJCuNbF15CT26P7ogmE2T7WT16wmAbpkuwnDUzVSxvbN",
  "key9": "3FhBqXwaRtRzpfGdeKPjtSy1KoqcUU9RzrRv4FmLNrh1XknSjMRBu7VXmRxUdbhmwfFZ672ky4Wi5p6VJWcpRPQR",
  "key10": "4LzAidNQXEeV58mJrgQw6k3V4KozA8MR3DZN5pJZdASdr43r6wPpzuvmV2rVoF7dfbbALCBu7Y3MeTrgLtdQyPuQ",
  "key11": "gAbZggpy7yc8wMH6j5euvSnqP8V33Ce9mVdixNdP2UuqpyKVFasixvhFLqNPDzHFho1Xe5NbnmnHjikTdJur8W2",
  "key12": "4VsTfitiTBjZ3Pk3VZzKPwJDfQzaVKzPkW5aKcXp2VFYUBGSUUK2iMGtVkthBsUz4XijiBYJhuxQwASiFakf3gAT",
  "key13": "2xMPynTKBbVizWnKsMsKAdfs3AngdtFEfL848PNGPXXoaXHvezGoQVHXLDvzffT18MxiYczRT4pWhozFy3jav3RM",
  "key14": "3mGHZfw3yX9En2R1tzuHyZkuMYvdqJMd3Mpq2MPhKdskvveprq54obktzKuwvNMUnpFDdqWpLKqGvmUnYT8Nw3Ba",
  "key15": "4PqRoHECUQNXeKuvkVrdMKarNRNQ47RRnwZPAKN54p7dGWoR19DmkCZPxpcNWYG9QHsvFz6FNtW8SWiHxtwYXzMR",
  "key16": "3u6zqkEw9qbZymBk27qENA82vMgJwMDviB6FnK8vcGfaDS6eFMv3TKoLgwr9Zx6wbaCZaJzPemfZJ8vzkYJAaeUq",
  "key17": "2m3LoaWFNAswYXtpCfVTqS85FuyaWZKvpec6e3Cjeqw3pfxz89MczQC4Yv95sbHDKX2dda8DHtCjE8XCKhjhZydp",
  "key18": "59QYRcuJpz4hWehm3qaGdK7ZN4eGHj248r7AqVqnncU7ErM3N5SBCZVRV7iV4VSgkDanSJjv6ndshgsWvTiZvVak",
  "key19": "2T4UvymMCukKCn6SY5brZhXW7mf6dtU7ypaMb8x41rn1Pdxyovv76yHm1QJV3nCuAVGebU3ijUB1w43aBh3R4HW",
  "key20": "5XeZXm63SY7z2pDiFimCWwTdBSZuGobTKX52hgkCNHdytoH3XFAww76Yb7VGDxuvxa8g4wKQtevGyCZLBWm2Lcgy",
  "key21": "3Z3H5q7Fe4oEQGjDBEkf5Voqwa6DjNNQ3EEE2cax29L8L7UWGfe3VAz5oR7pjVtpGe24WCZt8EMGhTZ5B1Vd7ZMA",
  "key22": "4LJbe7CqF8wh2LHPwMvpx9QwYwH9woUijEvWNU5XzkB9ixP4VjcMQvnxJE2y3PbS6r3AG3v89vg2QSPS9BSCossT",
  "key23": "5y2rELYAbqiYquUF3KPtctbmbmZUi8wTJyohXacCWGT3xis4qiQ5ETWb7SM49xMToq3DVwrUbzrwpinSNtysXkHE",
  "key24": "5kvN2RJWttweo5APYS4GvFa18Gc2vnUaxjcwuuxvLMoCRZ9TmYZcSxDXDGfVgKy3DpE6KAcSM2E6tagbXto64kTf",
  "key25": "43SuZbxcK5hsqEnLpha2rndEyvgyYXqhgD4b1yR2TfsYWGo68aUVBqskAncTave3YuLPpQvv3icWYiHV2vq2DcmJ",
  "key26": "3iVQz6HoBUGZFA1ubT7XpwBTe7xgkC6ZMrAeqWjxMRki3XYZ4zFP4wXZzfDryxvxkrGEXWJf4UioFksZNzq4L7TU",
  "key27": "26UEAuQ8Zi2nxxd2oS2LvtMEfJARpVtihVFYJfvAeLQSuJgYUBGKMyJHdPJ5C4Qp4ij2d4fgNdKc62TmpqKACFxa",
  "key28": "3Jr6Sc21CtxQV5VEEk9UKMBRz49Z9BT8jF29MduQhnJc6jca3uj6jWAGSeiGk5orFHZ2Gym2wxfMKvSuv5UcY3Ba",
  "key29": "4bNQ6RSqpAzuiP9hiDDkn6ybWfKJmYWbYf9n2SQSBsSvGFwwZ2ps9NvTJUNCo1EwaMGYbHD9LHpNAv2sybzXLvMQ",
  "key30": "2UKBhBq7jWieHuR9TqFrp7MsMPnUfH8zQP1vLPf1iMriFXBZXo4EkgwJk3QD4q9Ned6ZrsnW9yWhkw7B28TsqfTK",
  "key31": "2aXS2kgaoxJbwdQEuRCdVLJaCEYEEjfetE37xZQKDKWk6nr1CAPfgMN6K47qea5pUiZ6usB3XWKP2XHmJS7yC26o",
  "key32": "3C5FV8AiwFFjaATKtKNrZCNr8U3iLRfz3Cai1ysyiqZdqfpevgLBYU7Jy6233brdVGEsK36eBN9udL9jcPTSdCLb",
  "key33": "2X7CwcTEwiHsRzdCtMC1pkiWhLySWtxeXq4Njbigg62GvqX72D6iZiPBUWbZvX14mJY3Bq3uqCH254D6DMk8QKjg",
  "key34": "3ZPg3Etj61cmrbNxKu2rtoJFSc8GQ6QRDGPY4x2ZWwhpET16LGBXypN5NXbY1tLmC2wYg3ow7wJdoPt9AMTxWrEf",
  "key35": "3CHVUTrdD77TkKcA2sSDGcYbVA5PGFeZic3LnE1ksfpa1bqX9pT5o6tfgMaAzTLaBDAx1SWBoeMKB5LXrdGUZsDY"
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
