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
    "32jGZpX91Ag7q3G3PL4qE3DfN1mzKiiaqATY6HCmtCSoVLofDpVCRzR4SqBhkax5jvj1JfTrsgEQ3eCdLeghzTjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GHUR68CpokA1Lk1dsBaNibs6b7fZRsPXMPwr7BAtnRBYb7ykkojAg6YApXa7XGXFhAbw3zAAPktF8eExv9ow6t",
  "key1": "2dwKStbwW2rUpsnfARLRoVfQxQFNJ4Aeb52qnrCpGRw3yyxJge1DRoxTKGeUT2pdnYRD8DYgZwSL9ZPybnVR9G6q",
  "key2": "25aCHGSCepsZRrJfJa2LhQsjwkGeGqLYrkUzURQNk899uMbynsajgUreQpfn1EzGu3s1y9CfetLoWnkTG3uYDyhz",
  "key3": "3qeVhoTgCC63XzVP8MYP6aV9K2hnT5KUbE9Cj2xdQ6UhxKRg68ZxuGHAV2DdmMtvHPNm1NwJrpTKYwQYAMfToab2",
  "key4": "5zcsieEX1QpzmrVdj7ijWPNcVpKzZmYamxd3pMq56axUYXruTD6ni2U5AsBEbrESiVZ8uE397wuEpKcg2RnWRD8a",
  "key5": "5sEe7LBQ3SyQ6whjUXSedHKWExVUVxYwVaBhz6iPh5RDP79aE7AzmPjZCnYdCaTstRwzEEPRWVye9Uxx39TYPLm2",
  "key6": "5nsdGjEqiF8ic2zjy3sbs5STdtxkjV3jviMs2WHnSczRtG3JvQjsZdYSUT5fDn8denkxVWwmAQvdunYdVMWMkiMk",
  "key7": "2cohc1CrF4P5DZryhG8VmEywb4LXRzfxeSSbVSY4Udb6zuvPM1wd3knPU6VovDqWK5VupEDT8opg9p5GpGS1Nq8s",
  "key8": "3XnNoA3GaMzhJCifsXJ2TaXQiStpA6iSaBDkoiAqPe3q277SY5j3HhB4AXjT79nLaMKBMoeiw8kh8dsXoAseChjN",
  "key9": "Q5KuPCubaqtSGDatGEXRzb26VQZkyqncN4GGfT99p5Ew1yVduibauynH96CiVRPz6qQWEDg9oD3iyZnHucSGwE7",
  "key10": "Q2QucH9i8A3iRPQ6a7iALZMYMXDqE9ffHXdpNiaAow8UAozNHirKY1ZZumvJnvyFQSi1cq6RgdixbTNCbBuUhVH",
  "key11": "47XJJeDAAZMseeFEfZV8EcunhTDfjPSHQLFXeqZ1SjSexZjXhnCHny2JyjoUNYvZBHsE1urmGBKnGawigLSfw5hw",
  "key12": "27JBi1yYyBn5ciHeomSg1CVtbg4pvHjvL3j6zTPDinaTzy9tNzyh6synRxEtaDDcjm8aQwKT8mjo373NyRSSCSNT",
  "key13": "3enaUVVeVvKXXtfqNX9ayrGcmwDv9nhazFPokn7ciKNsF3tPiDqcYHn6ircnffEzCdjHqH6rb4vKXr9KQHWhKxnf",
  "key14": "3BEe4WTN8N7NRn8qKxviqzeRLXV9J2qfBAXojo3SX3gvpLNWj1ysDJejZDB4vt5K8ui9zXGp7cJMUZsGfPZWAXZ5",
  "key15": "3Rysv8yYqGc5m7QgH66JPXNpPwPEe3GK8YLZPVG6bPJDBapiAMbE2eJXNTsHcVMNiK5j1YNnaV5AqvwqtXNt3ka8",
  "key16": "2e4GpdJPzD5MJsdPZCYPhknt8k2wrHqkvLbtf5q6HNR9cs3mC7HV8uLcA5qFj1Kt9RSxUE6QPmZntNzrVQtJkqN3",
  "key17": "4knvgouq5uBX63RUteQ53koh7kVRZWW4eQp5YnG4zwb2dqeEfecFndoQQix6MZCJgBNKxMnmBNocDr7BUEWhqUVi",
  "key18": "XJmRS42XdAZMj6WfKVVUQkvBpc6WM5eAgAbvauKV3yqfi8Bci2s87aMf62VsaENPup35qnTTeJt2oME4NrQc1MF",
  "key19": "5YFe2xJCE4EaJchZh7oPtUctXpJyQWofrGQm6wKcxf6nNtinoqfuT2QTQh8wf23AL8EbGksvjX3ezp8iyx8JKmnb",
  "key20": "4T7VUHyugpY7ZYcCdjgUsUUfDymX3M3fFv3CtCujkynuHPg9jSECXqBDrC9sw2myzaDKsyx3Sa79atV4v5vWebaQ",
  "key21": "5DixW8sbAtTJpZURye5sDf4AiKtmfDUD8Z7nnbqq36dQh6QhP9mqCevmyTmhEX4AeX2MSmeoLdb7QBBaSvoe9gRF",
  "key22": "5AwGaRZLkZ34GWvm1GhFgsh1CpfUfpw3Y5oPjB14qiCP8EJebHctsD5h26sBAcDL5LBWZB7ANLh1amZVenWDB8Ww",
  "key23": "3Uco1u8SmbDLg4WqeMSVrnYZBG3e23bdquyez5ZZsTba52bhmQQLCF4Rk57F9CWG1gbh7dZPN6ihNoQe4MsypnYY",
  "key24": "Q6UAxAsBwyW9FyqvtVE2qBm6eCbske2MQ724oiDkVrADdxKTXaCFD6eRaztCTN6H8agVXB1hSMfCp24GdziBCRq",
  "key25": "52nxnsazzskGYruRK4esXe5u7iVcMbPtsBLsJd9aUqT8BYpQXcysLkaTrPrjqb59r6G3CGnmdDanZa94hf63riqt",
  "key26": "2mNDPDD7BY2xteEd6weGN6XBaRHqrwHbuRcjYEUR3D6P8DJCXDTGkAwrWATSMbDF36ByEu5NmWmDBv8EcavxUKux",
  "key27": "4NEWfFC5QmUnLuKEs5HjyqcAV7kxwBuxETwTuQ5uxckEjyYhfdrttipn49NprdD37pzsPjRyPhTw4TfSNwNJLuEr",
  "key28": "iKZ3sA8ZSaTCQ6jQqzLdsFSpdqK6mrwq6STaNMcy37Tu6Rx4Q4Qq7obujSxDm6k2pFpxALMFyYaLuRjJ6ioUVNM",
  "key29": "2C2YsW4YpmigeA45WoypBCTQ1u1TSCwp7ZbrycAzsuSbu789mofUwp3PhEQ8cZF9Jv6ibcYFL9GVEUdcPwq51YHq",
  "key30": "2TLSdBH8oRecd5P42WwSjwqmGTe6GSjR1k8P4jcBVDizkMWBPDDagSMzeBty2xfdnKfewB42o9neZF3WXjeS3Bgb",
  "key31": "sP4seeGwn65Duw6TCJs9uxX4ByofyUKPpqPbMJW2tgu68pRkzxckc2kLC5ZY9mbiXvznvecagaVjTRUktXscJdH",
  "key32": "Z3styBZqPnnNDRxav2TjAu7FZ31UWVzwy64TkgdiVjShmKxfq7iQPf4BmskU8mFHzEnWw6Qd6dk6fP5GkqcEwSW",
  "key33": "4Cxfhun9XG2Kztt6QrBZori2ggkd9fxntJTd9QGf5s8a4SirMpZs8ffg39Tcj2Ecw3LGqjtCQ9qqk9xqZ9eGVwEc",
  "key34": "2yzdK68WCfHFxfKgZUtgsF18fU2qoPDpwwbhNFv61NqvKvghJADYgZeHh7Ne77ktyQ9W8huByfvN1Bz3MvTLijc8",
  "key35": "64cdUThszd1eJARdR6CdXHkiipCuVcoxAfDPyvUq973UNMyPHa4NttYQZD7tfqg5cG4x3BhiZnXsRYNKrB1yMdpL"
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
