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
    "4ngwBqK1tG3mwdhnPcx9gwqU8NrfT2GhBZCvKTVuVTAqaNuAH5UaPq5TzFBib13pqLM3hK816mQXVkvL7qiyTdDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAerS87MVDpCyeetwesuFrcbNnjLnG2XNpxyQNwemiNao9u9RxVvpJWoo1Swcj4sQ1fTPq8qGoKHphA4cPVGHmM",
  "key1": "5Dxpk28JTXQEDnx3mAVT4YxPKWpcwTdNb7NfiUxQmHya8pLuZB7cvauw2SHt7zt5AZD51SCpfaf1TkYsSySHZW6i",
  "key2": "4fdgPW9vGRCGmF2hC3g3qoaXCpPT2WHpdSLaEMH48eCQZ6E4Dmn7zSTd4oSmMtQLimC6utf6ErjmfJo6TSm5JmiF",
  "key3": "6iNScLKjpyFiSdC4FGiHPDGBv3rtfXVy3WAbg3Vux5b8Eiu81LEh3dPuoii9LmeqAXRTixB7ktGQ1HadFdvmtyc",
  "key4": "4ndd8n478aDYLwyG3FhjZ5aZtgEdgauT3FKj9eB5Eq1kUiYsRPLUF1EdTtACsTxHmJp3Hvt521fM4SgZ8eVajjKV",
  "key5": "3ZYPec7jjRY6WkSF7wsXhqbV2e5Rf55VhBT8baZUWzAFumMn3viQcvoxFFfkMH8k4axZ3gX1v5Z274fcniJctYru",
  "key6": "mDfc5A3eBNd2c5uidNkau2wBRjZdmPZrNtFQe8JQHJjiHVfYQMgh3FZBr2GAMr2DsGz5y68rGujDT88ydNzZzrr",
  "key7": "afy4yWNi3zmRFX4fuKSdkZufRG94E5GRM9DAuk8MLs6pwTzT5YEju2r8AUkFyjoBPabgnVhCygUMPvMXNLobHsC",
  "key8": "6bmHdYdGqfRS8nvb4GnUMYfs66k975rbA9MGKf2pddRwrd5tPKKJ3odM3Db7ejv9cmHMcHnL3Jf893FHXVrKLZp",
  "key9": "2TdXeJdmfRButgPHeKUGSwcLpYL47Zs6AUS4tcAL3CaSxh1KY5EUyoB5FYxN6jd8mZRKrHveCS8Yw1KBmBHJHcNS",
  "key10": "MMsnxtHkgXCirAwh6DVhatPwagsp4Bb3GCPE2MFUAoqjg2vk6enARtJ42VhE1F8ACR4noD22Q8weY2Zub86GMCH",
  "key11": "2cdWqBAjPLMAKSoyLwj9ZANJFtvTeSvt7a7erYRvRTTQzCjQAopjTiUNoF7955UGtimZFN2CPjFfrzzpS2JHBRKC",
  "key12": "67kNXkafQVXjvu4YiWdbMPLTmN2fvgq3grZnXoRwkskQrBBiL5LQXhAaa1pyXDDgH39wBiu4r7wYfK5cwQFYqR25",
  "key13": "2iJjtNgvKbZ22LkaFWbLrcB5YhKyJd1pcdm9JS8u5aZHWPGGKbqo4ZjoYdaqeuhetbtHEn8euFp8PqwoT7TPg2GZ",
  "key14": "kQLqAeXenTTu6KGDwfBVNeRZuEzedokbXF3Hni9NAYFvrK4HEPE2nV2R6QKbBV78fJLNsYP1gdgwCC263LYSu9g",
  "key15": "4XMtPnxYoe12YRYgqdDu1ED7TbLHetDrmDDqev6CvSzmf79MVyMr3HMLBupE2QAFXsPUSGcYEpfKk5Yu4UfN3kUH",
  "key16": "53YKCem51BrZtTzmfb9VFDAb343edcv5v739sztGBATLSD4TS11q1BkeQkGrVRMoje9GyFLr6Bymn1qEn7sFBBFz",
  "key17": "66iFPgpNdhyDALuBrF8UjDyM85RpBHPeX2X4ZnD8XysT6fjauE84Kpv5nPWxixCc57G7XGy2em3xGn8At8nTFiMj",
  "key18": "5yf2Fp99ADYtQxUneVqtDYgsdXBZmztrZeRGPUqjcJVQF7c3aeQHyen5u9HeVrJvsALXXRRAsX9oWMNumA82uYvW",
  "key19": "517poxjDm4wN93XHDFz5Jy9LoeQEfe82ecdFCqWB4XceyDvaDqz7FoEEM8ioeiTLayTPFjiDF9yZvZVX53BwU2Za",
  "key20": "28PYXvagvbcLHYkjPqWhk1kuuc1Vc2usXdWU5Yghm54QEnbf2hRVibFUWMohtG2xJgosU9i1foxfwpfz68hKhvB7",
  "key21": "4mxJ8EiG3RFYEriNhJTvXish3Jhhh8Y5DBz4WZ91v3DK4ajYUsKmBwQwVSmDNatr27d6sUPN12kj7Pew1YMwE14c",
  "key22": "4jzzzys4JV4u7yy1SuW2ha5EhyPJ4MpC2yP4u9tPEY2nVg2EzEABJNBJsuA4wA1obR619Xwr3uVCwE31e4asew1c",
  "key23": "Vbhw7isbhczPQJVD2pgi1j1YMaS5Na7fFQVN9XSUc5JZxsB1G25Ria9HEhmEfzSLoKR4ddJFgmjyFthpBdqMnHE",
  "key24": "4rhyBLm6tgR5KdEZoTc5pvoQbLHoak8VWiz7evcn1mhC27c4c6xoQMwLrLYXRLFSE44pb8Q5UWxuMaPd1Roj7ZRV",
  "key25": "38TBEXuMa4BvpBf6hJzpmbVfbouZk4MZQKuGKBUrKd1sScxxVpKQAEPShnWU5nvYxvhjnBNwee8ZH5U3i3b88Bf8",
  "key26": "45MzryTUqNsxovE8z1Rh499xapM2FAxuXeq1G5zWV2C6sqPw98meJkwufknqH4pFosinsfqY9A1c9Pas7x1bW9ZH",
  "key27": "3bu9MnjphWMKwrm2zvU6hJ8ed8zFqYTYR9QsxadDQ2ifQHznK15FzA9YSbadVQkugjteaX3zjYgJbThNUgyr4aVL",
  "key28": "3bHurUXapPRqmoRRzVYp2xhAKutEMh6hiBkiqB4Eqai5SkxVxmCi2XsPGS7qzbnuPpfNEteSm876tdg2yF4QQjzK",
  "key29": "4h6rHuc6Nvv1B9mzr5WSc5tpQZPU6QMFFTs8FE8osE6x1smVS6Hdb488Tu24Ve1PNG2z8AHPPr4yP89nyuVhsZFX",
  "key30": "4CmtSHtyuTLus2CpAspfz2P49CuRyhWzrJ3XU2rrS1XGtsZLRyUxQNr9hnvKvioVvPtgnn1XFqUEF39rFq2bXqWo",
  "key31": "4YPHCAhBeHi7z9ssAows5J5ay7fXvnV1qfwpx82eH7sNy7VTLy5Q3xrC8UD6PnroAYRHhV4bxp8F6a5EUWtucH1L",
  "key32": "4HaUokcdCV5HSTb1dYUwGLqDtqxuhL48f7xD6wxGqNPitdBc8xSpAS3RPCb5hAW9gKeEb8PMX68Qo87NbnsDrDnF"
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
