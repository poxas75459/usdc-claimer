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
    "5f5PsbBkfxu1iSEVa2LnNQJVhegcRCm52FPD9dpLfz8nGnerAJ66FoST7yHKfgDwYEA6bni9TxjtKn7h1A3YzbMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQKp3J1LjapPWq7xNcPzsWv3ETyRXb41fR4Fmmdjn9XHa5KJhPstSoxD82dn2Ca6E3XbDuEfxjKDSDVdzRpCDxc",
  "key1": "5HXidtkTbgecShJmgYsjAbDonJmTUG7ZgrEVKhSKX3aqZqog2h2MRWPWrwKVDwb2pjpDJVUzoh1pRHj6CJoqvN6e",
  "key2": "3Ni4G3BZ91xCpTzfAEMMHXyiBrpGztMZujFzbTuk5HwHxqYwZUkyghViS5afSPgLP3vWbQHhRu6styokLPB1uypv",
  "key3": "2DKyQDS5uK46oTKedZWNndRGJnHhvFn96QzjHzAcMJShkVWUWr9XbH1jGiUecsUPyvMpxHvMJ6cfA788snnPA5u1",
  "key4": "2AWPdGHqN1D5vU35nMikcDRZt7gS3bRtvK4Fd9H4n2LZUjnwgXapti2gXEuyqtYWYsR2VcFvzpXGsf9HCT4ty9GD",
  "key5": "654s9scmWrWzJVFZrPifY5JTU9zPnPUJRg6L7KEmxUdzXCV1r47nD9MkE7NefFkYZEzqw7yBH1Gf7QAJZTCRQNZY",
  "key6": "234AFj4MLip6ZYrYqHF3MGhAbrmrpEA9H8V3JirXEVMF4Zdsd4jitiiMcMT2X2gbDLM5uPw33sdX5fnuQbgecQzg",
  "key7": "4k31RWgc5f4P3tx6UqJphGQXXDmQzE9twhiG7phpxwvxSn7nkuTxB4ht4QrrrEBEHHfE153Wk8WroEqwWKneQihd",
  "key8": "xVN5ZCsBzDrVGhZ6iLn46RxGb1Df2yDFRFKKcdjMm3UUTno4S4eeT21KXUwT4DYSFk2VxjQU2ad9GQcyq5wV8qP",
  "key9": "QSRCbwSnG75EyxDQiteLawedDm8C9yRrJsSuLjRdYtBurihBdzWEtCphi6BwPRAAum9TvBbsyAvGBtVnzNSp3E8",
  "key10": "3CsZsBCMiKzevwnChfpQNsDj9RkmxdCxo5Vq48zJuHp3gTRzKYDKqzThs6187c64CyVGNMrwk2b3HoFPs4VVrpJB",
  "key11": "5zR5FesKwSrnm18zsYPfzX1vZZb5HW22f99JhZWKuGQFst7oWMQAN1i7YoW2zASPLMc1YJPs5oheX2neL4q4TBvw",
  "key12": "3NAZvqKsuXtYJCDEpyg1PkUs5T5USa9KSsHHyZrV75Meedi97tkkDr9SaTX8NaGJ1YdKtMEbxppyxoRD2TmPo4UC",
  "key13": "2PsWthGRhx7VjPsWSZ95QPDX3yzVMC4t8tfrrKUabjLCB9zTUYaJjD6qauNUxD7K7YvC6gjH263Seo9RZbCs6yVT",
  "key14": "2GkmbJzxiBTKrX6Cjkp4VL2eM5dY2849ZR5hbm5MrYqgq6YhWzfZZqWPoFskwMRW8U1VNKtywBcHvyTMYFjrW5rS",
  "key15": "L6y9u2qKJ92vBwyZ1cMJ9MPReqEXGMoBkzui1k2Js5Yp4p6kZFJS943E6Jd6HVwWnXumuPkxzPQ41VZZFEBhpe7",
  "key16": "5iPpeDPgKnsJ38HcgbX8wkCLvRDEvJcRFCkQQFe6QptZb1uWkkEAwQMADh2Yna6TGUdR1LF8T711iAGwnfnRE5Vw",
  "key17": "X63PLQvW18Xhb5DjGJoP31NUxpsdfMQZBn7qrfiMSFeG5HzGXQrxz2PFtUj7R3zgvFsQASeJRwGYXmZRVK8w38t",
  "key18": "42jGtg7VWonyhd73WEypXbneXaVCWnigLAA8m3n37wf5oqFzVkAdiqsjzvZJMVUCeQv22yuLU6Q4gqXTqA5EoGYC",
  "key19": "63Wr56E9XYRfVBrgEGLrhmY9GvH94KuABd979XGnD4snkfQNP3CvuH8AHYS2A7wUvqetRFcbx7NuebaWfckYYWSM",
  "key20": "3CZhjfnzZPabjQzZWMWvYrk59hBjAHXzfNgRdk1S7jSxpudkf4PVwLVt7uzD77s74pNqSsDHJoNoxKHhUr63vi7T",
  "key21": "5HhcLaeHgNYNQBZeWCJADXJCMuxT8gGg1vnUhhFKpn6a85yWiqCTQFgG2U7K2n74XV7Xrk7NxtdxGcr8gpADKYut",
  "key22": "5RtK92C5YRGYGzzyvsZ4tXMEpf1CUYjWZBxvQewT83gREXThKreXH7R3kTV9vtECGmZ2dWtNPMZ7tatkcpzT5TMi",
  "key23": "7PbS82cJYYeQd6yhjGcHDUsJgq9ag1sYwX4SXjnJaJHSRrnPUQnMeSs1xKrsgUngWvSYZsy57mRpTtwwK8N1X5i",
  "key24": "2LLmkjTE51baNwYo2FuFbiqDPxCdWKUTYgYARTd2REckCHjusLoTUqnfTSsU4U7qzXv3vxPcoyNEQiV5GBrfKcuS",
  "key25": "3rccSSX8YV3SwF9QFbYYDoCViHqrphVhGdmCSptkYMaY78iynXBoJZVtDRbaQdeGzHMsz3juz8GSKHVi7rCdJq8C",
  "key26": "3EsXAZ6PDuFadwGWRC1VYcREN2k18VUdLZMFEN2Zd8w3dvXTpujbvgxcPb2J7g6n2VkiqwjPHq9Drtg7K8mhdC8C",
  "key27": "2cDcCydhxcJGaDiEVPvQgW1P1jpKqxFt2HAmWn74emH5grSNozxwUPCW3L2LNAcW2UBfftuHgk4uriUUx29Anwu8",
  "key28": "3CeoxJABBX6HVDp1E5wRTNf6wwizybt767huFAgAxwSW8a3W1aM3eDEDRPpgmkYNcxLYwa7eLUdBuaXuDVRr5Cid",
  "key29": "4m8erbZ778ZgnrP4sPxx6purZAEtHMYDJSrD2QNpeReZgmNkMG1ZtCeWtyBAba2SWBtt2U61gvukkj9XqEiv6B5r",
  "key30": "brUNsFRVD9bV9HN2r2dYmFmwipJpi4n3XAbAbVKwp2osYVipoXPKSQKdb5njQT1H73iWM7Ku27pXtdCS4SQq7G9",
  "key31": "5E8zeFBodgioaeFkLZQaTZgkHgxzuCH32n3h2K9ftKeDdrcJaQzYknVK3n9inyxdPCRjLKfxhoDkVoMaBgqbgQjP",
  "key32": "Gbb2cGpEHbW3fmcYQU55EwX4bJTEdA1qsJReUWfgSPsvdkN5PLEnrazTTATpA68bWQrmoEpAQTtzKbd9GedsXCA",
  "key33": "27AUTvDXC57hA7TPf4M91Fz5mhbq591Z2FSis9GoneFFPGPnYprymz3BmBxSYc9r2UMqyT2eR9wCPnzME2TaWHok",
  "key34": "5nEJUHM1E8qbKY2yR2Upt7ZBFG9doNN2Mcxy6mnc4M4oPpWjvhbcbG9FSXjQjG5f2MzHxFiCjQfFqKwTptF9qTDB",
  "key35": "5dmvaMcKG7uzBBi2VueCKyBBaAFWLCDdrxkV1G6FCFGbJw2aynGVev2SwZrL3rmmp7DfBP2YgTHKNVyXrEbfDVP2",
  "key36": "2rBWvw3W28YmmpDnaATaYGEDhrDyUbwuPgjzMveaEzCRdup5o2186q37KoV5mC3UPd6qs5BqebtcHsm3iVM6szcg",
  "key37": "2Dw5hL2GDZiWS7XcrnpNRq2jWqtZyonaDJNdMcTZyGqjharBsUUEocYYzZQoKEXzzcnV2sRZXUcg87EUmAgjCfrb",
  "key38": "3ydBAHEvj6rtvkSB2mqFzf4Mmx8mPSCtSCi71beqVfdpqyd492PTs42qkae2nJsqxEUrNXrTVst44MczPiWPu2dr",
  "key39": "4uXeaep2DRM8q99aszdmrpsZFDechodMucxaBzEMA84XWKrbo9FZQxdPjP4H3CkE83PdVK6mmPDPDAWukfb6M9EZ",
  "key40": "3TBQ9VvGT2y4gPgDeoaeSofRY5r96GyC7gQpcmG3gJWVfA2cq3KS4nyxpR6H3S1LMqyXafcJozndwXrG6USBFpa5",
  "key41": "3HrsoCNraJRKLTZJFf2SRkNJYAptSBUPrWfqDqQfpU5mFk3KW7LwTU6oYLngSaN6VYyzweaUJ9PB5w5VYScLigQm",
  "key42": "aWridavsoxvAEt5pjD4VB2rk42utcnQwdvMmXnTo18hQauidafRQ92vFxHANoDKo6Lemu7cfzTAM8PyCMLfxUfR",
  "key43": "4XBth3R2uQKFtFWR8dY5UmePgRbpn3H9mDMLp9fhB4G5nEPs5MGimckUoY3tN1LQ3UZHQVNF7jqSVTGetFHbZviK",
  "key44": "2mZSZdTQLCKj86p8TMHugKdzXpmaLAAzPCygk3MMKP6d24htNdKvNrqzKMQev3MxtF66FqVbvZeba5srhw9a9xzE",
  "key45": "4yAtCuEjdP1vBvnKKd67fnjTz4XKNBjZNoK2ns6ML8PCJy5CYZ97aHiFBnqZnu8xgiFPhCNb9zi98CGy72hvbydi",
  "key46": "5uTPENbAqCdWbvKgFquCqPyygZZ2yqB9E2K5dcqeEohtzehhiWRtQWZ3YM9QkUDXnNRN6vPx9invuLvQsRVghWaH",
  "key47": "pDYiPnqQzvTV81mDpZSQ7Pnu7zuWymi6BiRdigokjTXcUak8Xtt82pXqzFXCYceAef9qfm3dsc4LL3uWKwSUXhT"
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
