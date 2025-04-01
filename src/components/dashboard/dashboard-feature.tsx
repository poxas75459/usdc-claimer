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
    "5mTNyXoRvZs7AVB69pQpcnLEsoe3NURzp1AU5BAx75KwLDmeLP4g8JZzt2rySUPxoLkmkXptwzeGg5pH7H2JHvAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rx6KcWMmST5qny6eVbpTW1W4X1tFvPEwJcxWWuNtFgt28fZJ8Z8U4a2XmF3ZBkSx1XFcHXEYM4Qp8GnYq9mqUn2",
  "key1": "3YChPL4GS8ikoLCytVhwUDBawr9bn3yKJMz9R7FvXeseZFZQNqPQbEM6R4VHhZG1dANhtAWw6zQdok5uJGNGotXk",
  "key2": "4HNzcJPjXAn24jZWoUUZUpYPyWswnfzLoKpqpctcpea7Vz2iMwhK5YKRaYjbbvPPHs6ioDa94DYVsTKfyTefW4vc",
  "key3": "4QmjQV2YMHDtEgHSLJWdeWzqGz86Sk6vosV3aaQSTbC5JB6VqK4TdGKEe5QzkT76akwvBSgBWTNvKyiXAjRsvmu7",
  "key4": "2frXY185fwHCG9yRgFoJSvzBenkjJbZxhmyZdWCqi8FpTyNCbiV1fv5wbWwAV6nu99EpaiKm5iHVb7aYTJ5JmL6T",
  "key5": "438PaUwQN81pBrKM5QCCo4Rpy3QyWztu97wuyRharm9P8heGWjeBsgb2U8Jci7tAsbicm15iotmELPiMQvLj2XHg",
  "key6": "4fmRWbnf2WvSpv9m7Hbkc52Qia8KYBnC7dLCZRd7tajBgA2ZPMt8qcaoLmd7gbjc6vFK5oktrEHcALQy8kDnL3RP",
  "key7": "3PiFJk2Na6x1yLrhzQfWXTantRXxp9qWgzzTi263eUL7DHTLWy95ogJTgC2kd5wjBz6yMN6afovrJe3779wLTXPT",
  "key8": "2F1uFJhV8rddAp6wNhsuGNsaPgd5rFnRMQbr6EGzQg1bKmGYAq7jcQ7i7uQGPjdhKUajN7znDCP5pT1AWCMeu6Fe",
  "key9": "5mtb7GDYPbqzDZ9z3aLiLsZURc1my1exD6few5cSFZ9SiMjCX4Ub6Bn7AeXzomEvtacvkbLQvd1VxWFr3hD7d5t7",
  "key10": "rKhntykxqbSNoPeuYyYGWyArqhW8p8BayhmiKghimsi4Mg1q9KdoPHn5psBaawvuRE1q8wXvQdgqUBsxLJ1jTwn",
  "key11": "43xtbyZnuvZHnCctQhj8LNyC7w3kAPhrksBj7FtyV7KQFkAq5ZDaCj19aWLYc7am2pc31jnWrHXGQQG1KDkr7UPh",
  "key12": "3MNoNWBGc9Y5QveSVYxwZkd6brS4oZLJNQ8iQxtfXR7vcw4djQDkeq2oQd925cy7vAjaBkmcu2JQRvtxpkhCF2ix",
  "key13": "4iBSr4bgmtnBSoYBe2FcKMzC6mG1WZ7Zg2Ej9Lm6p9WdUsDxkmHBNGN3EpSwxytowiZCsmAjrrTQUWEoqwWTHHWF",
  "key14": "4MKGBaCHKS92oGT2qnXm82Vjme4x2zLRFbP3bNdVeeWaj5nkDWxpTurhQi8Jw3RfPP1UWoqiRUmzTwPsujFiAP2n",
  "key15": "5eVvdk9ys5LWJkoo9C5UKfauxm2tkM1aYUv5a898HLN1KFbEE5d2wXcuHxN2nCwkFgCGMSAq5MuKeYd9Wwk1v9pQ",
  "key16": "4UgEJXG5dbRRvHXsBHkH7MGY6MeqsbEsbHDNgzHnwAy2FJZJ4tSD3eH94XQJjMdwNJLrPpwTM3DwzcV9xoFcFwSQ",
  "key17": "7u7EGHTsE6iRSi9f2DtjVPL4ehSFUnMMbzzvoFaXLX926uW4zr3cdRafsgwEpgB4N3d4xeshT31NsRjGGGYpnna",
  "key18": "4QdzioFP2egoFFrrHvbgJEgLKocLucPZiShDQ8yHTE4MpvnwrkRUc49PgmvsSHN1yRAiHzTenvUjn3VjgCvYqea6",
  "key19": "3njgBbfbZsa518TkH979PJ4cpgrPKyLRFPNiacPAU1Gpppyj6NrvStNiRX6us5HejXMEN7RHoHKc6RnKSLtRx2HC",
  "key20": "r87ksAsVNjNjj9bZQgtBHCvB5pK8Skx33dUQBk64mzhojhQfDx3acZB2NcrNeNdAv1WTWVZ1wzxuXyXzohPEsny",
  "key21": "4kiYjNKssKNyqZeUT4ASnfuNrzw4TMfibQJ4Qc5etsTjaaVvEyLjCmDan5wykkJu24AdMCKQ7wd5HFeMzkrCuMS1",
  "key22": "NAGMSW8JnostrvEth6xwXw7dAy3PohmyqAvVCkDGgir6EDziPg6paNXqYKKTxWpKKtVcimhxTgrjY47FYh7dori",
  "key23": "4vDq8vAWzxWobtuQtcXSpQBrDShcp6nddCSwt9uNQYuYyR1qFyiirX6q9iSN3x23R8XSA85ne87UDFLzqxdptiEH",
  "key24": "4xig5u8Y34FucFuQ9ozbren3a6jonsdD2JDbRfhcUAm6aLpuAM5CRSPLbWyi7WGXA1Pmprw6TiZWQ7hNir9BJ8U4",
  "key25": "2nCKE4aD6NAba1yuE8bxQeXFagoM2dQZgfZmEnBQWcPirEjnmgacDArcmS6R4CdYFikFvdaRLEvYMuQ358LcvY57",
  "key26": "2RMQV39YMYC6XspeJ4iA4K8M1uXJRAPJnNAdMyt2j8T5vDatA8AdKgd9FSThfPvkFiUTw7gHNY6KaG3cMEsB3pLr",
  "key27": "4Yaxe4VNiD9TxwbbDhJaP5ab8qefYi4uFpFU3qgTBBLncAYjLWJabnxED1eN6qAFz2TFsNWwT9Wq2s3ZBpYgTyrL",
  "key28": "47AXyWVnAKJ1PhRwqyjH1tTMykXEh3WFeMfKVyQW88SydcgyadaG8Tztu4KgZ25tieVuXV2ej6JkPgg2NPt3QoVJ",
  "key29": "5NxirLSxpagSBVsRQJ4pi5ov3DUkKq42gX9XobprbU4gbiJZPoLr7pFeAxFqfrLAKxHfZM51hETgzAo9z3tAS2CT",
  "key30": "5myF1vUyoehgwzpaoqkP7UP2mKumrDCR85JowbfEBHj5Q7c4gShyy8XGnZ9xY3UqAS5pfdQALwtkFvSBsDhkcphy",
  "key31": "51Twy3RgAzai53ZwbL3MJ1uWEmBQggSB4S7msCHRnj3RFGGqd7nh98FTsjiDpsHEq7RM2XTjWaVuhqd83Yw16xK2",
  "key32": "5hCD2SCQSbjitGd5et1Z22bt6NP2HzPbzSU2tjKpDByAcKYbbRYuteavVSaWFCr7PgBk18MXaxyxEQLYBtvVjpg3",
  "key33": "3tYT8BowtTf6ZcQSRvUtDjLva3cHiZkto1DD6w1FYEMCuhDU8BftbVSnqHhQC4SsAogxyVoAGPuAsRWANSWJwF2a",
  "key34": "2LZq8Qq2DqY6tz5x9PQ8T6nupjLHDV32DxjU312epUAhz1ccHg8jWTEMkQfo1bzubgaZ2EjWHyCQauBuTyeY8E2j",
  "key35": "59vWrtwkTT4jjsSNJ9XoVR2CJYckoYjGS9NHTUEK62P4LJ3katkSx2mY4UGT3tmqMKxyf4eq3vgrUAyT5tT4pTZY",
  "key36": "dhQjzLbEXh7pwxauQ81w1AYp9vujFLRpDTzoPxRBb1Lt2qQNuim1Z7rCRDFGsikyKQJA4iwEiWmMsGonRxvCvbR",
  "key37": "65UxMn2G8pTetPNPvNdx1kudUp4M5kU4cECubozxrMm6dvFp8vNdTtddwYLfjSNdfawdnPsMopysNJ5BVnsAchQo",
  "key38": "4SFdYZ6ZDnqzbeWa848mXbGjT71Pua3o9w7UpTEp1fsWyjQkECCzMy4X2CSHtrTN2uJiEdZjCfzUmfZvi7tzNZh9",
  "key39": "3fYJ5w9XTavHpdYx7ygduQkfBYmsQzVrYpNAeKoaogDDPQZg5sm7XqPNVuvaJAjQxk2x7saU9jigYpjym7R3TBfW",
  "key40": "4d6ZeQfMDBEsWDGHaJEieL8pZM4W6wLv6X8CB2HUHepP2nyGuJqz5r9ij9DaPx9dULnSYAoPJg7K2WVHx2R4bPRr",
  "key41": "4NkXVRsip99aeTh5TAniwyffJDiBVAbTyTkTFhpKGNrrvkRt7E6sPjDN9SSfvk9p4xhMW4tT5w9a5kCSuoYHJaHa",
  "key42": "5A5AfFCHyAVCrjFapZXT3taWqbity1UaVAbxrNa6dE4xFtDXsCzk1unXe51qGTSjTSX8z8aAtBJ59ZyGvdfPHWsB"
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
