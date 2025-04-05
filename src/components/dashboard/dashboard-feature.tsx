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
    "5GhRDZwPYrQ6Bpkrci4nBiHa9nGShmgGGGXPRRhfXv27EBKQanPWptwLczmAqVpyv6iu3jETYn3VPE9KZdrT9gcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cP6cwsWzkkvSo8ZJZykXNkyX5jceGt2rUx75g8tSTsYSdJ5GMaJDqVE8T8iocF47WbBey7iH3o7CBEaFNohGjeJ",
  "key1": "TQ64gqqUb3fRLPWQdFLaMZKhArHJ4LCZV1FxoQiqE2iiYvxFT9k7bEesRfueFgUaGwX5rsGF3UYY4VJuQzR2VbR",
  "key2": "5SnX9MeGFbJJ51HY7HGUSgT4ASe4EyZG6rSyQSPqpq6h5zKN39h7T1BxTtSPtksJqRVRpDiHomcwezWxkbLG7FN6",
  "key3": "5QRN8T5hNTrugrbKydmShD9N9NrhbiL3Lx33id16oqxgrrZoG8a33DJLy7BxRbjyy9cCnhepD3ELugDffamwu1V8",
  "key4": "2tkyTNhG2MtWXbDgVTKQRNMUgLYqu5Z8KXWRa7nobJTRrSkkc3dTH2L6i8TB7Qyjpe6XG1bbB8xbZmnFJRBZ7Vc1",
  "key5": "2dGN6BzKLSNn2vWw5TP5t5gMtg5YuF4enMpUvRSZQmzGKNJRRYhJHkQRJvRQqypQU93AyTWpBKVLdW3u1jPYHErt",
  "key6": "4JqdggR3rVCzuHjaSVonfHzqJsTfnyQxHonhR22uJ4T69JdzaqrUpMQNAmJoHhBYRpES5buBkvbicwN9ypD8ZtaK",
  "key7": "3RufrmASV281BfVNSQAVxFVCxpMcoPQbwHdcGWyQCCghPSuYyVUvh8mJUkxEqkYm6iJTJBPhfJppy9cfZ7ipjirF",
  "key8": "5LywFiEv7Ep7izEcUzimSnwHs8sGDLpPnG6RPwAyxzCXLVrjjPzMHCwbcAbeUYyPYNtSoNtFdsG5yPUFTophykPc",
  "key9": "4kk8PTwyySXeKroxMEtmAUzzRys3u89BPDjF8rbGb2Ne24vUVxgrDT4YjkV5yAHkxvqNsoDtWBbPHqEbUc1Ez8kd",
  "key10": "58F3JQaJf3fH7poWuL2MmEGVdEA1RtXHUtbZBV1UfcvxWnx32wg6Q4396snJgbzC8pNgZs5mMoZ5LGYu8dyQTCS1",
  "key11": "5PKMUrNg9ER9in7P81F2fWtidZY2VA9JGLYDyxNaed7Juiu9NWDQ86KqvbVtjxv92kSZ2EkGY3aeSdLWwgssTL9z",
  "key12": "5AR8d1KepsUprz7VUTtLhQNHwAVHf6rtvRTW3Q5okR7ayju29b3Cxfp2EoycpC2PMZLkk5K2MLQRJoxGTfkWXZxJ",
  "key13": "5CzinV7rkJwBxikhtDGUpne7CSiZhGfkM2ua1xSRhyxPAysREQZmWPqJhiKLCxYuB6b7tmL8d8XriQUD4Y8S4Q7W",
  "key14": "2PsdHJD6mGw7qyQSAAuCB2VmpE8eTPHg2bvDkvdzGWVmcq4JgTyGpmYNEwVjGVxAhhVYUMYHBKaiXyfAZMdgZrb9",
  "key15": "4EjZFa1X9ZGCW3PP4PNXq7p6aMPDsaeeDCVeyEuArgRH12Zgh2cqbNYbKjUcphwDeynPZ1VTZsMsM8HDrrxYD5oG",
  "key16": "2B73KnA7kPQLspSXAnmiiLcrDPRnnFXegd69M7S1WB7ksDMUAA3D6uSJxHeG5SJ1NKoMR8HgLn92xaxoA2Mob5h8",
  "key17": "cDMxrT8ubgXCXWBnBVmnJMWdMiWcXL5JGBkBT4j4jSChwEYdFZczpb6VyJqRSwMDP3ydnPBu1aG1fQLfLu25gD8",
  "key18": "mh9FZcg4YgmCDdbd4Tgt93sCc2Kcf46BFnmLmRD55fNWfJHxGSMXm28SzYEi5vwT6VScjHW6syozvXUkNQ7wBEY",
  "key19": "4mpR5GpPM9XEFqgAdASUqydbxqSfoSCGUHXDmgUwvnceH7Prv3YSuR7gJFzXYCqJ1MPhVA9doJPcENEegkjyT1rA",
  "key20": "TwwMhGDDbceQiV2bbnMXsd73g6yepsYV4ubhPwNw3ycuupxs2EyQ6LFoK5PcjkToEW3gR4XxpFSsQiMd8BdZotZ",
  "key21": "3Q2yoVgHyP6zhwswtDbERfTxca171DwkpE1zYerd4TJkXP4AGYSSEtrLjytWhXnZSDqGxG5VdHesdiCvviPVuhE6",
  "key22": "2qZ1HkjASCzy67WPY1JEQB89ioWJXqPqFsWa5DXQDf67F2nq68rnTVufUeYKwatTu1bZmJyyXK8YeDw5zMM9BqZz",
  "key23": "2fXsVyhQnKoGQehZgTeuXw1HBxxXq4uAn7HuWnd77W4do3LiNoNE3WPd1atVYhnz5kf8txGhYrKnWdVNR6YZn9tW",
  "key24": "EdiG2k5L6r1heuroYWkw6GrjgrMgLbXRGzFSgUh2UzeN4ZaPojqNu66gaM9gfKcQtiXWEF3PB1JP3os7wELnzmW",
  "key25": "3rbWBUAfC51srHZxebsTkRThS8XzuLdEscp51S5fSHo3gfkkokRjgAPTkGfusteDfWg3sUD6hLGrLxGuWUf2Hk7g",
  "key26": "2Dh6PMJWyqGdJXJYqA3EnmEHTsgRTM8jgiUU5BBHhoNHvHG4G4H8776ZizaG1QAYXPzQg3otCYo5HjFrqBk8d56o",
  "key27": "iDyB7Qc5CQqeXH53KPJCSdSQMPaKxCggN2ZJTUnqxfjF9KtQ26kkNejAvcJP3WV2uvMPzWTvRWardPfvv4aKncK",
  "key28": "3EXCCbvk6AmjKYqdJ8Y8YgQC9prQzEz6vHdhFeMo8zXbJHHZvuP3Cdk2xY1QxHE41hRSgd5YRUsEfhSwgwwM369G",
  "key29": "ZM2zfQnYvvg5V5nmqwoRY5rbpngxyEKhAZg3VcEJaWVmbDvBhNx8Z4cEj9ugmF34GwdfFoH5yjoGMRTmENVvpnt",
  "key30": "4Rh1o44GnQGQeKAbD6Ln29yQpNFg1B47CwV8PBXHHNZiUL91jT4XdBgj6jT9gsZiHBgbFgw5K8KEbAKqtqAEXxxy",
  "key31": "2G9dTvwMPwunW3Mean7JSzMxV1xNTMAiHd3EtbEBEPCsAVfKC4ancuK7T6YeMj12Fm7EpiyEMivbMV92fBfLDD7V",
  "key32": "5736t6NJAxRVdGN5hgznzUokCKZ4khf3DPbfNperg1pZs3TCRBTnLqyaQ2DMyCCKpMpkBYM2Wnafkip3QGFCCfED",
  "key33": "3f7CNLdxAfX3mkAz3x42irVEJZWuLaEHCVqwEsxGgtC3TPhbDyNJTW9xFjSTtVGVLCrrAqYUw1MM3AxxaqktU59G",
  "key34": "2687x94cZUjkG4htAY5Zz8TBc6PA8Vhjvx6vwAGo3BoJqnTc7uCC2YBAsRU59phPymCeyLsfX5aLjaJsABDzuZ5m",
  "key35": "2G4U5VkYmKYpM1B2JsyM7nunvt7XkFrSsfQnmimik8Fq2QgNBaocAqSEDc3jYNwmoSgmEjhNeQ9fcxTs9VMrNoLM",
  "key36": "2k7xvJ5fAwwBM7FKcWD3RY4JEA5f1x2b4y7ZKNyjRWCsWNFNCow2pKrijwEN7bSpQeM6EcRfRostnVp6Xm2PpjL",
  "key37": "4TQV8f9VtfEBkDLoTCuwvb6qkcSyfyvCNgQ2Fjw1fpfJEp96NE1ydZgWxeC1NcSSmdDdSVHYy2zr2UM1EJ7kyRNs",
  "key38": "2U1bPqBzR4W8UxDvq21hfdZLwdpzoJoLPrendwh4TiY8L2QqNPy9Kr38S3xFEWeV8RiPbv2ZPQtCRhPq3W5MAykd",
  "key39": "5qksS73yWADi7kNkZANiuZcKv1Td2TzVMJCok5fFYss6qdN32hrRdqZZkgofDJcuq52KSZR8sQGVAPkzGPZR5zD7",
  "key40": "3siA9uJGWY6UqrzewGVC3o4wFSqPtPBFjwkvkmrmTuUvUY1ZhRkymocu52GmX3PH3CjjQmxjStoB19Qiid1Sz2k3",
  "key41": "4sNLEzQ6DYMSba7zc4W1eDspJLRQ8FdEHPVeMfShivAyBuAqea8NZ97j2M73sda9ZZqfvcRtKKpa1yxouUfESV83",
  "key42": "4ZZp6vxDcGy1DmxJXpAfDKYGQrzQ71M5Hc6XynL6u6n9TTToXtQrfx7326CjatYDzMhodnTMEU8H3xupoDPsHACp",
  "key43": "4yU2aygMsXPN9FysvfR2aVycNSYLnEmxCV73DS2XdTe47HLcBD8S2YEQGh6jsTgvrD6KCk9oyx23ydTpxDARL784",
  "key44": "2G8MU3z8d5GxnKniBh6vAsy9cq76dZRrHr3DgP2vDKx2mCtUSYtQ2A2aKP7P4SntRQiTT8Ap2cW4KbaTP5yfRWuk",
  "key45": "4HN1Z7tatYu2RDjoZ7QMnGBkyKExZf7Rd4F8Y4C7JU45SxmBsD9SqettcZW3FjbFhsJ7szrzZz4AsnEnGnYCvdu2"
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
