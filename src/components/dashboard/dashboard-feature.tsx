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
    "2NmMxg3PiWNoLpr1iSkC7WFFsUyhn6gNz2xrzv1domxkKHCyXnBjpgeM5aKshWodHn4aWPzN92PxGa9JNWxTb2Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heWjauhKadoxVXAmEiNDKRG8e85o6M5o3TyaiHT6BsSvPT4duBW63Kd8X4NBLpgBuN1DqxmwAz6opsnsioqp6Mx",
  "key1": "i8MBgpZaMQYDuMtp6pY5VC4EJLhcvnV48ggC9FCuHUzgnSboBgmzEWJGoTXPyucQewyyzW2TqfknK5T2ecrHVgk",
  "key2": "4kp5DKYT7GrxUCJwy4SXVfk8XhABg8i3uVFPjy4fviooBQ4QHPKgMsn9U7y784ADoDkJqbox1TU7CxSfxPbkbcas",
  "key3": "2RrbnQb6WsaB6U3u4WisAevFFcGZxELosFQtjjWVzdKppjY3fUHxuYRDYYs8NUaUyMbxfEFbMHU8or963GvCmBCR",
  "key4": "3q5GJD3ogEuuunCcHCuXpa7JrpFkyq78ksn5yypvKAaHKmkQ2djZq67JYfgRQmVqsUTKLeqkToavdJNWsh9aXY2L",
  "key5": "2XkooJKbgNVjAzWQMDc8E3CfSF3nnj7KEwh1aXDvonqcWBY6vrhP7A7PcpTyTqeXcpXBMiokE7nB4SmjYodLM9H8",
  "key6": "5sVU2dA4U97R7RX4dPCZQsg4buvWoQKEeoiqQSJSxMdMQ6ejmL7b4b9EzSwG2tKmaDnLLWp7y3vPTmEpzes43WMV",
  "key7": "3GvdV9RVsYP2FrQ5fEU9jr5UyJAdzDpZxV3kk8AVAMikKinXLZzyo7uoMnb4e4dP5WsCzKTtePQot9Xj9115oJmv",
  "key8": "2dKsQSEZAaDyMmSR1xsu9dsmjhnUHVYAcQpXj6Wf6JpuiWH7Nz5ufU21kNfPenFDpPcajEpBnH73ShhxVWanYSLH",
  "key9": "4LAGbnpxDRUNwRQT8LsJpCaqbbxbRVWWwCxmGesWGTAnZHqWEwxDEdskd2oTKXbBicXe4NWHTCaoCe3V6jxo5cx1",
  "key10": "3ky4q36YV5nY8sDM9ZuoBFmWtCa8qqK6XJoNHM4UiA2BhrhVWj4N2DhPEic1eoaW848Jq8mb3hoTMKy6So7yyTXy",
  "key11": "33oiYzyn9eiG9DMhD3AbB8NiefFyX4A9aCHNJfXb71JqQZBk8rwwQSFd46iMdbprZncryPUuYnD5ACTbnreNczNJ",
  "key12": "122CVEzHu5r1kii1umLjQjLgRLfHQ9Ks4ndECiETTNTrhxYUaNvpJ3US9EPCSg3enjYPmfQ6Exh3UvaZUH5xpKwT",
  "key13": "4CpcN4oQChWxdRNETVqUNQmyccnHU7NHjSWQJYG4RM3suLtBc1jj9hvWVHiwA5FGP9WeuZmqkJ5pkiAmBNTXEtt7",
  "key14": "3GgMZScm3b1sH1DChcU82kNDVcMU9f116e2v16VgMQYsLYPjF1ZJEkysE5K7De1bM1S8ZRex66iQNTs7kDCHKJqu",
  "key15": "54xNcax9Wo9Ck8sNg7T5DHd6j8X3r2ekvdgxJ6ZheBZofZrjG2BNr4zfpxATBdutFWdKvunyayvRGhbL3FG3Z6f1",
  "key16": "zR2U9h96LmanumKrMr6ZRDdvSdSGZYTb8bkQdjf4EEcjA5tB78etqkhGRiy7NZADCXrg5zSA1tjPJoMFFENCkax",
  "key17": "AwKyuL9gnszoByZHdKBtUn3Hxon2jRvXdpVRfXQC6YKdp2ViEaE8heG6WAPQZ2muLk8jWBduYpUdGA49PJBnoVf",
  "key18": "5AAQp1S9R2NXEaB8hdHPMsTjqgYUiZwY4cvWbUyxggkXFKxr7symgqxUUQZasHBYsbueS8SXELpE88zkchgDuaUZ",
  "key19": "3c7wNrEypGGrreP22265siqBs2rzKs5LQQT9SeJ9dt8UCefoD6ZuhUwVhbnrhCXhWRqExshaY2PrTmsb5uhjZicD",
  "key20": "4eEETkPrP1ehhL9o2NwFPt8q9ggDRduQqzRm5VpagabGXkvZpUmYyZLfXEZqYBiAeA8zDZNSytXU7pu2kDB9YWbR",
  "key21": "4US1vjyzMf4QmJnWhSoXxBrURhZr4trcY6MH5GUvZqtAfHkWYJo7j17oWrx9QrDjkWB4UjDoG4deR7RTFj11osf1",
  "key22": "4KekRGpb4LEw6LirbazSFLAY6bAdLAybpiHrH9Myh1DcdRuw7DH2BRwujtiCCgh6WsqGzDrVBce2rb9XcmtDzqm3",
  "key23": "SxtFoKNsqFpi4rneXioJPPxgB6YkrX9TNH4s8UAHrQuCNoJ6LmYrQQvpyu73TjsbkDF6Sr5pm1vxoWrwZEJBFfM",
  "key24": "3JtexUbvGtZpJJeqzTR7dfLPuPMzdJA8GiMWtnn31MNQoVcfAFWY3hWmfY5nE6R9cSbLME5xWW53CyL9s6wGLftN",
  "key25": "rd37LBYMhz2z7uhjocwPxgRubM5ahe7R2ab1r2jsNbeWMaT6ijjWVpcqEyWC7PwHfsz2RVCtmYjqDTFQKzGaQXb",
  "key26": "MsPTARRq37z1GpJJysJueCorh4fwq4zMRJ5WEGU5kpCU7A75mbkuEXjnmhyimu2xSqmxrPwa1TJTARZvrJ29AnL",
  "key27": "rkRrFBgSrR6rffNDK6QSBnHK2R4U9R1x7aeghpgo4Dqx9PUWUGKZ7WUH1gK2EgP2JThb9hcvndnAuh7iRocR7eM",
  "key28": "3LdFWwNN6GtMxoHonDrMk64tkRQE7RXLc83cW8hCGo7BUq8S9wexnee7k96voY2xoHoMTVGaJcmJ2izC7Kw2UpKs",
  "key29": "SaeH7TpCizcwbEdXBxQig4rhMqFn2hNdbRFPHdN1vPM7eVtzGKbZexzKz3BgCwaJnGXivzPATX2baemLLBMJdVM",
  "key30": "5YFV3DDwD6dhfjym4Q7Up3yunYWZDkGfgfUveF92c8qpeZETqYUtxzcMQrAhSU4QwWKEgqdGdJzYw6fx5JWNS3db",
  "key31": "5HhVm511912XfwnQ5cYaxXs2THFcPQQkZvkdiQtE3KmHVUeTRaKrxY12M9xyra6ZxrsB1NVBw2TzNBTB3VugYHjW",
  "key32": "5cLTa4j4jBn28BTmuRrVGXn6N12WWvsVep3HXULc3HJGr7QLcDNh8niip5etrCHHcaXzo9CezaCTq8p4b9kcJB6x",
  "key33": "4HtYYVEGUCmNEoT1c9oJarhzoMegxaXdDxw5J3Zy67AwSEB727eNMB7QFLnDMZp58rgLKqaGjuRtNh5QGF3ZJeu",
  "key34": "hzfGj7UhwA3Z8fxhmRE1Zze4cz9ZS9oJPShqvPhDikMrBRw4PpA8dH4PYnDhUfKLcgsTat43tDadmGrLh2GKPv8",
  "key35": "5zTbdLepmRz1X2MKnzAbr1j6QCcXsFJXUG9XnKrv45HV3V6zWRBCsZRpAEQN4AF6CwHH5pPzkp3DfrbQrcyTpMgE"
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
