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
    "46CZpomuz2Ss9mZYZsru1eZhkaMuF3upXNtHh3KV5ipB3vc1B6sX3vAjoka8MG8aNMEC7YPpu18Y2RZuUePNxTUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtqSwN7ge3zxagPWyR7n2WBWCfhHe8QLW8dFzmnBKzzTmgXFck41NEhUBNm7gVo8UJ3asWw24yq4HU4dcqV4UQi",
  "key1": "4EcVb5h3a9uMmMCEPL3Mzx8MDxoPyxPFLA35Vutd3JiXJfvNFUz6H6B7eTkyv5qBMP2ixcPWH7Y9YSn1Vu5N5iu4",
  "key2": "2DbbEFvimonDdCdQi4ejvQiSnYD1Vj61uHUT2oYgFH8uKbuVirgAi8SPWF7qoeaBkdHzqEzq1FP66FLyqaLfRR3h",
  "key3": "556qhxr2fyCy6FFgprnMDEjx2ZjHyTFVSigtnsbv4hGhLmn6oa91K5gPy7BC8RVBLmb1wKYhCY2y6bTBLhvcxC71",
  "key4": "tWijLqtPRMicSZMLTVdjqMC7V6K4SUeBg4jFcaDYJm2yQJFeGBh9vnaHUtSij4YxTJ1ngRwjAi4fAyzvi3z3XGs",
  "key5": "4BcpbbSh63Z8UKJ1RGRkXcovjjAfeHWc1igBQXRtNAaW8G2Nv23yfXsB63KnewynCGZv3Z9gGx1tz3WrWgBrG9U3",
  "key6": "2Mvv9DW1WTbvPVfpuZR57v3RKpE4SsP8GSJp2HxQ2yHrscT71ZZpaAMrNbtcpH1Ge77NzeiRZ5E9Renr6NrGa7TA",
  "key7": "quZ9AMjXvcyNmCtEzZrQ5sgnjHoJxi7LYk2zoDAfdTt6Nj3ZU7jm629STYTDeyjp2Y1btVKWpbaetttZBnXWcya",
  "key8": "5qChqiMiGFJs4QkYJQyk4G8kyF7zuweeAuDmfgKLqtvBcQFaX4Qxmn82Sjzoh93JCZsbL4WUXWCBxHQZUgrvDMsT",
  "key9": "371xj1CMxachKSHNttMy34WNjsRXaqtZyzhQJG6228Pgf7UBektHFnwdy3JbDMjAB7cg9NeggZ4Z9KRAXNSczukv",
  "key10": "5EpB8VER89dWZQrBeQ2i2D5D5tyYZpjtZmHABR94nbZLCYWqGKK8WNMrTo5Ca8tKkBEWMJ1nQZhhGq1g4yt4Xhkf",
  "key11": "3AnAxwF43yRDQqu5zupTFrK1nTnFR6XLm4qwCvy81A4Y8fc8UvEuUrbkTV85eqUR6NazKhgs4CnMxVJ5K8tWt8qe",
  "key12": "41e5TySKqShEfFxSs7EHBTkEfWJbzYtoT523WhRm3pq5bHbkDs2gd2ctptXj2322o5SxZ3Ucdv35bCogBPV9agAp",
  "key13": "DwUgW72odfqENEBR4kAs8LznDNUgN53TiXSAYyiurxmfx1ZvXCEvFD8qjp5wLDHg4g9biV9rw7pS63e4r5qEsfD",
  "key14": "5VKzh3nPwd5szwbzmNPt3UCuU97vV1fFRMV8FqUAfWZywNB2iiZuViUef9RJoL3QUME4Hr5mQtbZtP3mQwgJ3TSU",
  "key15": "4PzKwWY9v82x5Cp6fVyBpWQKdZufFtTCDaybT3xTELmHNRiwFvqwRpnEk6wmWrXAauUuZPt5xHX3BgswZ1tNwGc1",
  "key16": "SxfnsueXxC5WeZE8LsBkva9mgrtK1fSpdurNqmiS5HagMpXZ9L9WTQ6WgTQVLkyscCudeYb5uVjxHL9yb5e1cBF",
  "key17": "2CsFD42HCYbvWJFTBZUR3CDjTKkuXbUdBuV23v46eFjy6UKaQLcrdsrfqwtaPrfLVLpboVz3nKKBvKhD88yTff1K",
  "key18": "42EfqVC3CxiKHQ2YR7rJyafgXEsu8drQwh27J5KDWTeZ3k5V5ymm2DhbT9VBgaVTvhAHcSNrg2U1eKnJzxXu6G6J",
  "key19": "2oHJ9PdhVmShEwcH1qj6kmi7RMkNDi4QNAkxAepXJtKMPjeyLgE3xJbc9ritbKnrHyfg4mC7VRmzmrnBiTo7cbwM",
  "key20": "36nFdpuNmQBPza2nvHEYNp4NdbJNJqqUb3GJ636Ro9ojsm8RQLiXaHsLdKbu7vCPUQHBCt9eYyb9dBbg9SbTXs72",
  "key21": "i1CkYzAvbWcRn9dosVb2r7GHULVCXFVSHQ41GuEvdHyj7aGr9dr6NXu38bFfeb8RjqZTWE26C9wBBKXSaiBwqQx",
  "key22": "tSpd4oRVfUttgWHUo2RuwnMLpxLVzp3MdiaVN4PeJDqc7FBBnpNahskVs1Mk4u2ntDXjn93Co8PVf9yKo9swEVm",
  "key23": "2iVcuV8wt712fMYiueDDPharb56EhM9bBgsT7w1UTk6NCMQtSvFQoT7JLoqDpBsLPktjwfYty5GqkmWq6MqKDyz3",
  "key24": "5dG5UPcMAkcN5wyzTg21dGrtyMrJo4E9sCE4nLzabi3YfYAZ37QJtUe3oANEA3dF5YHg2UGjKD8dFKecG4oPgUQb",
  "key25": "5j6N5XSZ9agWnNskovtq9MVZ863dx4ammBbt4TRqwucHyncBG8z4kzAGaEjT9kkxdydHznH3QPFShFCqB7m1eLrw",
  "key26": "4SQ4UGWvDcL1Js3qurbfp21Ev7iKKkSeqwYxEq3McLf7BdSNsr3m4CnbVGfb9rXR3cmNhLkkSBqVLseKR85bmuFY",
  "key27": "2ftyakX4WdLTGR3TbVF2KbP4beD4pH5V1nqNtEFaHmJNjSHmVXo1EnT2ykyScygH29enf3qubSXRfJpVnHk6tiXT",
  "key28": "5AnXuNEp1Vprh6vNdYrPZeCL3nXxrS1BGaLcTZHFnZ5HCrKK3AXKNCWKbh2oz57CxrPwb181TocxdWSc5CCUwoDN",
  "key29": "4KDqzAt3nn5Nh8R6yuVDrpcEB35YH9ZHGQXsQyh2GydBTy2qz7jNhjSyvAKumpsjEXNoMEstsHmSyDYSVQMKxdAf",
  "key30": "4dC44mhDBnSeHiWBsraYwY7rkoGGT9Zv2iuj9kif99xYK1XSyqhJ3cpdbLirNYFa5Yk1MGpwnDcqPsKeUiE4xooQ",
  "key31": "3aNokA4nw4hZ4GafoYYvNovquj3WUoYHycpxPed1G9YDLoMbmuY7VUtY91S7fv1sXLqdkDTe3TdvYKjHBvm1UqHE",
  "key32": "2coWp1SyWcCPZKEScirQD9jh9aLoqE3bW3WrHKaS13L5RcWroxhWnavxZBiuQayugZQonM31Q89xMncBVfKmcUXh",
  "key33": "2CkUFynwhkCZMpn4hnPRaEyukXrFCzwTQiipuznw2XrzrdkBQ2dxYsgifJ9ik62SKKDQpSQy4J5C29y9R6ZBbmzU",
  "key34": "5DcnRy4N3y3L337rGY2r5Y3cEz2MvxkMqnEMbndaoQoKq59DW73KWgbsqFTbCPotY6L7YJBf8ENGaZPbTSd5tn9S",
  "key35": "2fDA6d9WkhaBkbZv7D1zw4PqJHXY5n8BEVxHajhcACZuVMa4BMbS1gBqW8kpqUmmRGT2rG4K2YwCTTWcTzLgw9ev",
  "key36": "4vqeyFYKgF34md9hmb75TcFhcDSNT97So9XmAxwqEk8YdkB8QbSHa1fTbVsXK6urqjYx4MLjKScygGNTjsWF7hQL"
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
