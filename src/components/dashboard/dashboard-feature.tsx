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
    "2brc9NVJmF6WZwV8Mvvzjs2DHDfqyv6GUG5Q5C2Kj2ANLXqtt6kNhxhGVaTmiHhZjiNcehsEXBu1LMrxzXaNeQF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yh6jTsWe6aS1gFL6wGBLBZAXk9znTo3kUeSEQFMj4Y8U7HriN5FsC515ocqc5ne7q1Gyy7xK5dVySWLk9BPqvJR",
  "key1": "2dEdXYgdiTMA6ayGA2eDeuueTBTH5s1RvsuVF6Mkbhn464hTJai2jTS4WuBVB3QYtGBQ8pmEchDQC6YWJ1UA8VV",
  "key2": "2TDWPLk4qV7Xo8erMcrmFjBosdJFWMDUKhbKoeh2wujdYLHqAdJ1GTMBw3BPQw9AZbaWEt3U8Ez2e7Q9RMtQFnFU",
  "key3": "5c1fpkJQmmDxQetXuRmBmXqBNBiPktBMLKScd7s6UWrTK9Jvz8D4xohuJQ89shXeHS66NjRThgJMZA2DYG8HjQzJ",
  "key4": "2ZeMC8eGUihXZ99HBqwm1g9decdT1ngjfVz6Ncb6NEJ1trm4fg7W7Fd2erhn7BkSpcNJ5zxcvXpBJRmpXBt8U79k",
  "key5": "3MH59xK6KipELqZQUy19fhmSKbYjXdeShcdJatKtFKSXgqGbL2Qhsm3EpRTy9tAESxLA9JcoTBn6gHYq8sxSbHvN",
  "key6": "h14UjSJyBs1fcpR9KA2Peni8oVs9DmhGBggnP1ghMSjzUT6Bjak7Vmp26J5SQLG7ktqsLeojyNb9mcJeWBuP6pc",
  "key7": "5qDaNGpbkv8vbfg5LHjsDFn4QcuMHays7pdXvxw63HqKXvW3sHFas4NnKEsrkAKEARYsZrANBdijjVM4D6PWeHiB",
  "key8": "27AHeEjJABgFtEg5MwRHqUDKJm4yBXDBr47AMUtCbEMv4ix33kmqcJqa3htMTLA7wHEVRsuG1GSeCpWESe6aPcmx",
  "key9": "4fCWVRzwcVVTXhrwytMLPBPz1sn1zyQxcFoiYoZBBSnMukQbQEUjfWyiVAV3875HP5BPQHnRVUQUE1jVtJFJTXCm",
  "key10": "4ooTKyRce9irxVosa4Mkom2pxGzhUFHD9snPPfhxr1kfTRbF73xDkcZC6JSKG11JnM9qxtKjvUrMc1FpvppoKgMd",
  "key11": "51yqAav9pVtFV3jJ4UjdoGzmmFukY9Fbg4CaGX7ozAWo2jW6pLtgrw6SNZynLLkR8XquwjsEocKwFsHhjK6CvQeF",
  "key12": "4jK8yMmVoYvDR39RpFGpgbEcrDSnyoNip25ZPYi8ugeaPnntAeVpTx44Z4S9kABJvGov7qr4UcKTC6LB7pEXwKU8",
  "key13": "3NeaFCpYUgtaW1N8hYkXzFHS3s3x7o9PeGH2BF1D4Rick7TRm4QhosDgwj1W4hhSPV8yieiv6dKnavko9bNuw6Uh",
  "key14": "43YJ31CiUQ8bVBPE3dDdmhKwmhTCMVwjv4pPFoPZwPykJcH88Nn3i7Kq3X9AtXobriEwn8JHoGdsXUDTomD1kCeZ",
  "key15": "2Y7VU6XeX2gpvoLqkwLGvhuGgNgKCQQtEEvuyXxVxgRAaW3KXFbqScYELVS2FEsJSFrfW9Tt4gqsZk5ZaJPdToP1",
  "key16": "4RsY58P5Bnc9hmKTou6KB8V55qBxHnWB5ZxygS1ehCZsPNZ7TsWTYBQ1VLtmxZAit1APwPQehyryYTtxkhgForWA",
  "key17": "XsjMarsHhCitZKgWED7R3C5bz5RwZ8SWBB1VNmQSaXLwHvFAdtinahMZUivUDGHKb2JKRU54LMK5HhePU7keCqX",
  "key18": "rQpMWRk3eHrCQR9X1SfmarLrxJ8hkTL78nt2pQ5GD1z9GhAdyTUZMnXmdePbt7fv1uq7vN1BBFGbGJCEGqkXQEz",
  "key19": "CFrjMPxx731r4jTgVz6LPKMzavL6666tRAtg7xuUg94GRxKAF2EysKK7i4jc6Pk6qh6TmqECkunB1Be6yHGspWV",
  "key20": "5j1rHqKc87NUrNyRhv4ZkG37gxKsrTrqtVHhRfvr8Ky97eEa8ENwbAJMLeGEtpETRvVwKYZQtNDEuLTmeuWYFmLb",
  "key21": "3ohPqubtDtCaWGX3Je9aFN3QW6zQCJhMw2bmqaZxBeqRn824BUDZSVPunkUukeCg6KG4iQgG4SCWEECE3nbrofw9",
  "key22": "5R3TpMXbfbx2Gx5d3pma8SEt7vyx2F2SEFwbcLmpaxHAJLPUgzPoebLiXuiWR3sLsAub1F8JSa9337JcXUDh1Wj5",
  "key23": "2SJ7KkohMuFx5XnzP4KVrsFXyvWW71pvP3kVBpt7drKHekBgVj6DK75nfRbC4kU4xYqRtyApa3JdYadgtiCZuuD5",
  "key24": "5ZxsvjdHEeKLa9RJX3MZCYi6tdjwp5zopgzjegB6kY1T4EzDjEyEx1AJJMp2xbQqbTvzA5Ad4kCVh2z3aWpuNgCG",
  "key25": "2Wry8cgFHB2DprVY86HbZ9cqezjDpW7bYziznsEQ4khNm941emsJpdLEhKkiT2VN69uwqwEFDkCrnYhARd99LMUs",
  "key26": "2xPpxtnxv3aMCjKSdSUPpKaVviUqLPotCQERZQRmwieqCS4Eu5Lwp4MgyWL3gDx4ui12qZ4SnMrBVe79XVKkYnEU",
  "key27": "5RMvAkkUuCcKkfMq2uWL41GLEYthF2Lhu81PetdvNh79gG4LSUKUX6Mab5asFKDMa39tmaM6yfz4NsB2jeNcN5kE",
  "key28": "2f33yX3eKuTd7Zj7JxgWD9nnciJf6ZvN8dHkp7FdRYw8ZNcTermqwayBfw7wAWuQoMz8xSNLcumxQ7tR1BvJuZeh",
  "key29": "2Ggs2DQo4o4q7gaCzxMmfsjPK4zxejsBGT3prRAwyjpBWmN7JHgZJuLnA3vsxiKV1rf99PyuH8SEtmiSoqMBYiDC",
  "key30": "3rWqhF8FS59N8mDhrjA4LVTRHtMDz8cbdLm2ryZBC41qoG718j2oQiGj2zQLhWarpWzeALqgDLF8m71XvUwuyXEz",
  "key31": "55q9gSRHzJdLNEN6foUCrRv43m9RP3rjojWW83aW4CuBMZcFASdNqXHiJmgMfNaBHkR3xwztbQeev9vfNRCdJVw7",
  "key32": "QSe7GEXvth2zdTcotCrvMbxmdMXn7RoVc8XpCiRqradsahmsLQyZhY95tFPUgcRsyh6d78pGj4ncyxjnHzkBdHq",
  "key33": "3urrnMABfD3mg7VRfmKjYQrrbFdKekY3HETpMpfuTnRHqBbXdfmRhnwnUx8svzrMiRMK4sDqMYaYxvLmQD1MXjC9"
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
