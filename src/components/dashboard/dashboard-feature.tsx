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
    "2gMuKYRUqJ3xuzmUghWfhPCvcYJ9C6Uis1p3RgwdsRG5XNmjRBVcbyzQ2hTx7FQhhsmjkTsft7e1PYQKW8CiWpPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jT3mJqXZuu6No2CT4pqZWKc8HYr1fXps7qbWW2LDd6mmrRWvCWLzxNhbnZWePMxNKgfnGRXHHTrTXuXBa1xbDqo",
  "key1": "5VNsivhnmmwbbuj9e5D7Fa56MEcoxNr7kw4UqvJLaMSATyP99bzgUVqbeB8VVo2bd7V7ZsQJHbGaFWMQNsgGfKFt",
  "key2": "4cCb52o5soVh8uLXCsKYZiVv3XEXrYurFAtzFCo3TmyhcH8HmndAC51Wh1UdqrDSNAZ6KLPQ6Dtu54XgsoEPfHPm",
  "key3": "4yLenG8KPV9cys6BbXeKcGoWUe4kA1QkHMSfExbB4JZUZ3qjmYdrbV3GozyEdwistjv8vqRiWti2rjApy5GDxd6d",
  "key4": "4itq5vzxykJoEsj6bfMN9Se53cNuroN7juXFH29TRUm7tLPUo2yVLw3Sum78ZUrQrCBf8kfKcA9tiVBTavagmdTa",
  "key5": "1mq7qsFsnni3A6DnfZs4KNsfgKde9M71cBVNUPHwKWCrtiRT349FuRwunZhb88uXcmVfxbnLMQNMDS1ycys3SdW",
  "key6": "2dNU1VRWzvqPRz83FigMtov4ZBtzrmNswKqAobh7g2DG2yjuUF5z6cwEJWhdnmbmMhp4JWRKdqttuqg7sRMdDu5Z",
  "key7": "62Lz3wnWVt41tKUWtFJhQ9fqT1QaiHe34XpR4HF3E5VMMjEmJvYebJzufPQz13aVGaEaivoJTMyZdjvCSVmcNeHk",
  "key8": "2x6Fw4xaYMAFyu7MkqzCaM6SnoUnfPuYE8mEfuagWZEozyAMczS5GMWTvVQwSuHxHrJMSVvvSmrR9FEzMtHTJ592",
  "key9": "4aDUjrCy2RRJG89oTF4zkW24dLjnzAmRvj6oR2k67y7rtyLY1NLcutB2SoRKLVW3NLY4qCNHjXg4tt2cSebMC2rh",
  "key10": "43Mjqx76exL3whyrnQquXMh1sibMJP1qhimBqRvEQkKGLb4Tho36XkStPb8rYQAJ7ud5EAbjk79aJyXPsHHrP1tx",
  "key11": "2u85wxh2eC1Rz3FMHmsbSxMu2oGFGCcStifzMQ9ggizxz3sJ43E9bEkYcV3EvN5kriRN5cfnTp3GUvxc3LBLWX3q",
  "key12": "31WeBUpwrDumg6SH6iL5Vqkdzw8fqpquiivz4yquRa5y3YVWzu8CXW9kfg6wEeCcfUk4ZfxpYHTFLkRegH1egJJ4",
  "key13": "2DYD1z6TCh6KzSQMsXLywsz5otBNU8eavU1mpB5kYmXzzWxhYiDyStZDCnipKUkcUa17Rvn7m11KVyz4TD9yYrmJ",
  "key14": "4DTaafgzazjjnMrt7s9b7djPaQHcqxK62Atav1FgNY7ZxqBf8qvTC3PeS1iYrwSc3C5g7Ye4j3QeMe6o6z1J5CeY",
  "key15": "5H1qVRv9g2u31qcFyjGDL6zdTkDjPpRCx9eyu1aCHm7cKjoBekgEkuQ53zEHgFwGCvhtug3SbdzLD5gncogtUER6",
  "key16": "hSrTCGZ6cGKbvEGdf2B6R6kNHJDFho32TDoXceg8h8aMU41VixvvXx5gT26KZYx87nHNXUhuvS5exqsMxdYmMG8",
  "key17": "MP1VL3ECPFQZ1SPdfGLUm9gzMTc57eywNuktNmFnBj7AwPtU2BW4qfyCj5BWrgq3hkpbChZCWQBd2FDKJJ9cpED",
  "key18": "2ZNA2MgzeEopmVDqtyHF3v252Rrs8wt26dEyFBFvMcY2zCgZFULmP7fLthCqrmtsJ3zuueD4KP8e9WibSSzKhUxy",
  "key19": "44FuiWfptNgw76kGHK4UPRfdLQNZij8A3E3TMFsMfdYzmjKXa8PPCTSU1XPQLDpWiSXFYz3Jxm1sb7xEyTYUX6RU",
  "key20": "5GSCjRTsRLVHKoCH9AEcrUmCpcWsfuA5HhLLuhzWbuBDEqBnEBephZ6Pykb9urdZyeGS8dhYHdeVhonKxree2A6D",
  "key21": "SsXKJY6xU8VvDhVhRu4sJACXBrWVDYZSRytNEqCXVxhAbw1j4VRFHuj6UQi7qExwo1AozqTUUD5C1GraubJYM7J",
  "key22": "SKDJkXDNEXjCXSJKxX5q2zWqzegdfeNqk1nueTtB7oBhmSQARs1TrbJ2jN2RKvAFTgCVqM7cAcSQ5MgQ85zWgQT",
  "key23": "5C6tzqbivpgEczhX4xNgEwk6uXnmRxb5ZJWczFRLu8ogm8fA7NchWXYM1U9fVrA2vCaE8f4GHtaAZnxEicAWPtQo",
  "key24": "4KoGMiEzYFDAcqXVvDLwcpKj4dCs6cNmM9xYr9SdYoKsNMHr7dpHPDnvn37ydXMqqmVGFdRVaQxRM2HSWntkKXH6",
  "key25": "5i8fUDLZrAihjpcCQyZuMrDjSuZ1WLgvSsx19qr8MfnKPZxE72HC6F6AfQUi9hQ4MqGTGoQG1TL13w2bkZuCBPwp",
  "key26": "4eMgjGQR6sSVbZEtebQRJiaJrruL6yucjvMrve9QSCTrZR5W7NfkkACkqXoSQSGpwt7QvFiHiy23vBoWv8V8Ch6e",
  "key27": "2msnCvvkGdyRABPZKjxoNNqDW8HFxQVxaasZiCDGSGWVNFEf7BfX42KEeFWUnCgSgfkeDSyWGgjRoqjfRzybfZeC",
  "key28": "cuca47d8h8XTdQWdYSNUpcYNMiHRRTRgVjbZDgybgqqXC2kJac5WsjUgwYUBW1352X5wnEQzmY4fXazadofJXnf",
  "key29": "3eN5iBbM6qmMZ471uPAPu24EBG9dEikEotE25WimRpMeqMEKNQadGnD65ShUtQyHTx3nXEaAgW3CjZYJ4btDfzTj",
  "key30": "3TcE1DEdSPmuFtr56Ddw5LVjjaq6gvgQUqXsbSccZa2Q2xmoBueTPMT8FZ3rThNgv2SNL5Nzih9G1ztvuo9o1nwa",
  "key31": "5nJukEdSwN1nRwqdSbp72h327tgUx3UbiWxGXB9jq8spZyifP6iGcdJFSf6SvzbBWPrHwA7BiauQ7KmbXkgMptc8",
  "key32": "FLiWUZsSSUNaLozrVKvGfxgwPPe4MiNN4WX2YnoG1MTS8QHnHP4R8AGdmi3cG9d8SYgPetLxaoNYHu9HVgSaQ2R",
  "key33": "3iu6ddjGc4KiruSwWXzMpio3Y82Kum6FLx7STakurEEWdMq1hUmUainSEdbyCWPXFza4fsw48u5P9nba2jiCu5M7",
  "key34": "48XPyUxom8Pnbv45NVjPNB9w3BsoxSjNb7hsp1z4ubXKARhVkd1ZcUzy3Mgb6Qh1VDan1BTVtPofNP7RKf9YjRGF",
  "key35": "2nuu38yDM5bk2SqZ2bhYPQWC1rrR3TghmB65UWsXCrsryVfMwetZG5dBVmX4NVRJZGbxkyFfrA91irg3HLqf4YMm",
  "key36": "3ujHmtpGV2DXCon5s59FvALv58S7DVx1uZY5TPiWvxNqQT74LSFvj3kvgXawKJrM49fcpZRBy9jtuSrqWmB1HYo3",
  "key37": "2zJ52rbckHLBomTFk6eMkbNGuyCpSQ9LgffP2dUuoKpSFzMFeit7L6YDFhUdSDcVRfN1XuEXQva3Qq2Xrtzhqx9V",
  "key38": "2phb5AZQDnQtYKQptBRD9sW7n3241AW9P1YKSyoejAUFwBFdHB8ZjsvHiGMhfLDyUKN1EvGUVfHmjQXvRF7fnM6R",
  "key39": "3nTYm2oibpv8MmbW2LN28bQLWjZZuJX8Gm6GRtr7RSxQiJFuiHkn6RNFsfpwVGRZJzAAuLBRfuU73azFrxFV7qUz",
  "key40": "3vQqrXGiNVYfNdUMrCuVaFaLfZWczvwXvhzvcb7CAUyvwe2tMj12Tbyj5kHzdDK9bFhkMEe4cEULMpoZyanqJ1eP",
  "key41": "3jzxj22QtTNLheBpuVnWt3EPfaitu4H3PbWnmdSuaU6uLXtK8PEyYMaS4fzt53CxcsMY24wvnJFcLjmC4z3b6U6A",
  "key42": "YjyWVZPgyVccxodbvjx238a4GmH2U1DdoDGRrHeUsLoyR8aENPMHPMnscWPJThYTq6c2gAPRfvH8i2nwnd5qz5h",
  "key43": "5yFVUDUmXqKEpowEP2WHVXD3T5St79q8EY5bxbmLxTiM2DvDkz4oXEeaai12VLBTAPdB2XBdxne536iz7MwvLeww",
  "key44": "34bKoNASJPfn5XQXazDRCLa7qyg8acTmAvdFpYedtePeBwSWzQteNh41ZhRHiWoL8d2RbzG2Z5c4uRrgFHmxakNx",
  "key45": "42qrV6inKzLvJLdiTgcetU7jwwxXPexm7oTrEpQHrGhPUuaBNT1ahhnpxzrLoAe5C7X8theffzMxjRcrAQpsZxFo"
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
