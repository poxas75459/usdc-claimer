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
    "5Ssk1Sacg2pYszBQGEhhsT49ZfyFZzX5YBitAk7s75NyuhMkzxuw5eLGKUCoNe9bUjY9Co8gikd4EELP8DXL9Pyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCiESmB69Cd2vAM6qohNRsqagJBtwEuiXqVWKuHmFzCNteeW1eBFZEWiYuY2EYDN4Mkd3SisM9itC3C6LCbkrYo",
  "key1": "5Mbk8PPMWS4ncapavQtxZ16Tx6izyDiytXUYzAye38xFPWZrHVzkNAEVY1QgmweQns3FyY4jK68vYfGyLaYMDuZw",
  "key2": "Ep5mxct23fc6thNRfCJteQDayVeBpyKTSvkJ8yvE4wmSn9TtyHMbrYgoirkGUuo6j9czZYzwUwUoS1FejxLd9Wt",
  "key3": "4gmzYisdnqmCpS5Pzt8ZT9CD3MUpT7bZzxieF4ziNzjxWJdtkKVu7EeqsGdVzLVBmtyUjoVRncgcmyBawc1MtvrH",
  "key4": "4umnMMUvqfE6HwkXe4sjcoTxDqNUKhZAmum2TmmVmXBGY78v8enFzYbeqs4My3o5A1LRcDxWxHoTJbc5A8smhs4W",
  "key5": "5Pup5uCCBdKhhFaCaSH6s8jPe354zwGkeWSUmw6cHwYu1qsuSA6Rbq1wWzuFH9kpCeD51g3hpuBXysicPUmXPWA",
  "key6": "3japSdixr4HAYS6dEfi8VPqQsLb4Xa31RyiKVijjSgViuVVEwaqyqZ3Lhf1MBcXKuaTmb9fdaYMbNLZqRqW5b5bj",
  "key7": "2HBy2U3gdHbPohttH3AMsZbBwkBJVNLiaLsB2GCZT4npmTHe8PXhSkxDxFrTmFoiTmSqP55cgU1pMHVN7QtxTfwD",
  "key8": "55LjBrQp89cj4stkeYCnnQuTaVx2GQwx8XDrXcARX6jjwMm2ajSsxNB7m5YqPg3n4R3gq9mnqCe9ZMGpfpa4toij",
  "key9": "nFPNijMUcqntAYiRwXdcBS5NCPD9F1r1zvSHWtzyKURPPT5JfnqkMyBCDVGNqLPbHtk9f92g1eqtMHutfwTzThk",
  "key10": "3DTiUVrzUSvukPphMh21w1iRfeFr7Bzxe5TVz7wrD7uhfL3kRfHQC3xR5GMyzS3D8saj8NFMaiYcuWHivxkK4E7p",
  "key11": "44dgezicdyT3oqVV8NpbBYugmbH3wezivFL6yNwjQH3bHnXd9Wmd3VrW3PraSDEJsRkdKq13JfM9XsUFVcEF9v68",
  "key12": "5b6DwnQYk2gYmpn8wBKfYzrMBnjntefWG9SeVSq8AadqRB4Ch8Mcaj8RMPXGRGi9QG9VkChPq5sz2sWzLe2cNXSc",
  "key13": "2b2rarA8Su2R9e511cU9BLkRKhNc98DCMYTVVigc2ux9NDvL4nGY9j6MexrJbds3R77W5QdetRyA2Ea4RtiS8ns9",
  "key14": "BBLHtB2v2PLFSFd4s6UGqSn6x7Nwn3dE2qB3EwtYX4LsWnDzaasHhaA9pTgfxPeDqeAueryDWdxezKWh882LFpE",
  "key15": "3QxUXkyoucikY33JfcUASdnndmCU2SBZZ7Lu2k6kVqyz6bcV3JmxNKSSSwTzjNgGTAu5Jh6WpJ5ZtjNSztSZX7UP",
  "key16": "nQXj7h7FjgbjxGRVrgzs3cP1dQwEpZHL5p4ftjPySWjgKr8dmjZMoUGaaQ4bkKBtTnBsJczEDUv3uJ8L6jqNmvp",
  "key17": "4firik77hLSUCULYLdT1xdgi4DwFFvrWDtGfcVCtXoksYietDP4z5cFnc11tA2Zg2qVsX3ZhkspG5GKuvY54Wqa",
  "key18": "qPBZSiroZ1gaVKgiHHFLK6UQcw8vfDE1VRRMfEr2H48M8ezUsnkUqfJsaEfgJB2RwPmADyHJM3L5PSaKMehk6Ma",
  "key19": "5Ydd2LZGD1a1merT1NkxEXja6MezwTR39tzV5BqVdLUkAfgmFQJXQ5WcMe2rkPvgYKQHkMu4fqV6Uv62EqWZ8zJ5",
  "key20": "3STkM9pYuu8pFDDmm32PvLDhZDLvhzjnt7fEnKZGrfH6vP35nfoYegCzS67noFhdEPddpS4icvTHGQYDXDbYKwt",
  "key21": "4J5fSALjRkZKrfeHasmgbVCrnCo8gfTaLzTSdYp4taGo1PW8d1MgnvncvkpzJ4WrpMXjBAH3AjVanaKVcZ4UhSP9",
  "key22": "55uxsxV94YixwuRhc7YUjYZght9Bg5y3rR62Pie7BpM117zYHXKMhyvCy1mvuva4hfr6syx1Vj89Y7GNRV8oY2Bt",
  "key23": "5yDcqSwM6q9rY3sf82ZFKiGiffFhg8RieqdSNpvEXad9DsYSZ2ADBqnwC2WVKWWR1HT6xiYpFGYFJj8vDAmjMC69",
  "key24": "3udMk9WpzGWkn4w2Dxf2RfKWs82N9MAPVEu1KgMZADEyxp1QRwH19PJ1CvcHS1FueVauFSR8QREQtFzALMrQpErp",
  "key25": "bp5yiZY6Ct6uVhwUdTd5sC8TwqK8Em42ftUdUUSTiyC8s4oaoqjteUsrpRM4PbKY3cokP65oT9RBfcmZrxhDtqQ",
  "key26": "3m9dQtyri625rsqauLyon6LKLFSyzMxVbG4oe2Rf2uusymmbKtWCv9csCLyhbu5pzg2BgqYQxSS75KhGUk1j2V7M",
  "key27": "24YzNESg7USunML4Grg2RvtbkwdDe5EftbCxwBAvMNXbTr17Qy8S2Y6caFroCHHJh7B8zENnwHyoaJzwuvNnzaCa",
  "key28": "4txu5uw2uADGBduJQxFhP268uKzgzEyyNcZ62Rr3XRm6uwgLeBo9rfMxVLNTYqgPtaxo1UyQywc7fqqAMU6u5MML",
  "key29": "5Dk6194BYbwCJp7w15aC64pZUhcT1ZmQwGcVctBV4jZwrtnSYtujeZteTLrrBQtxUSaprh5g4Xo2anuxPM1XmvFk",
  "key30": "2FG6o4p1oKuFUSmTCm9tugaxycF5uoyF97sUtWd7uLmfvEBMSDeVU1RoqjGfD2dYn8pJB32WZc6ff2zy7hzj3uER",
  "key31": "jubAiN2qwNjAngnNoe5NfTU8AjRWcRAXdNYfBjBRF8VxCgjQV2q5fezcQ95P5NLk3KrP894rq3noGEUNc1MLnf3"
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
