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
    "2cFCVqRebysWKrLDq4bBg3RS5xQEznjuYH4gq9gz3acTTzx4Wvgih1T5qU6dTsErSF5knerKcbAVDZBjpNEWAhkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCED8vVteJgRq9w4xKyKojY6HDFxXuD4AMjSgJ5Cuz5jEWxo6AQFtVt2oxmHJdkKujQWvnBEE5kaN39GJsx1EQU",
  "key1": "2PaoedpWyMfeT32vFD33nqhpshFioU2b4jkB58gWCt9pgQE4fNtmMisU1cEPK2Txi6xJzUNvHrUPV4K4XQ3L47V",
  "key2": "2cjptp3AP4FxoxofKjNU5bhedQpkMzsxxSx8cD7fANQoJ3HBJ2NjXkN9fAiXsrwars5jaXRN9U2qLDCx4Wucw3AM",
  "key3": "2f4zSi85j3d5xtk6Qkd4XD1kK2EvTy8YL1h8tVA9u1BL137UNsEPgsE9zvz2UrpSQYyY2E8fN6iVqYbhAE1CEQ3j",
  "key4": "4TntVd7aCp8f7JsRKn4hhFqcETZhu7AdKXU5KorCDPvpYuUrjfLgJtH2R4uzsP3mT9FXBTCMiwyNDLZrBSWwUr6w",
  "key5": "QVj2YyGhPJBMnaFRHurAxaTxeFGGkD2vaBSDyR1h5HkdWTEUzKSZzfmTRG8ww7UFENv4yrEyFzooFiD8Sh7vDjK",
  "key6": "33pDprzRXxSMW1KwaiTrGa2j1eA2fABXep4QnaVzmdiJPe8HP2ghUwnShHL4DsW8a1jve6iV8MZG1B7wv2KSkEzZ",
  "key7": "kuzKP4eP8VCb6pS5vxmzL6FoXoCQ79gRryeQWXJzwYZmewb718xiesf7pkmP5Whb6AmZsTr746UZAL8aGEz8UFW",
  "key8": "2EudAyeYP385wSU94mpTHC216kH9EqqVXj2AQXpSpapY762pMhhrkj9YCTvkmbYzPTpSPxQkTqUx63QNpbGAJyT8",
  "key9": "22Xebo7sZ6Ee7YzUdpULuVzrgwMfXL45Vh5kkrA4pb5VFdCb3E2rosqaZKzQoeoWKXMttt1ti22KWV4gHBCr6NyR",
  "key10": "myapCDUzRkcvD3oMvuT2BarpdnjC113Kxe7RPGvYthfDWqcEf51zoUpdgnix9Mf33ihLmb79vSARPCktonwyqM6",
  "key11": "28deRiav7r5EqHi9xioDZmkLpkEixYYA2N4VUZR7KPTostd8wHEBMKpDAunEMq2UdvcTvAEgUkZxojCnVpuCMFB1",
  "key12": "3PQvSgR8Ysj78EXgMCg7ERpGXYCMD2ShaLrFJpCQegUXqeyGRmjaAVPVGt3mpVmkZuckCs6eHbbFQteaR2L9vc7h",
  "key13": "2KFs2wkc3XsPSRoXrxgmwpwfv6YUB3z2PxUNEJBL2iQKdxQuFasVRk2Ktk37dwFnv4DkARb7LoDYtuwtpxk4a4YH",
  "key14": "4RNeH6ZiqH5LQ9BAhX4dCis6T9zo9EFJZDRaxSzAEp9wGe2ea61R3uUAgUAAGwtoY9tsAo4XLeCBcN1VUT6rdDsk",
  "key15": "2PzPUXRTpuLGMxj4GsVYXVTDmFY1Gu7wmcCMzEvmigFR9PVji2GaQTVmLneP43dj6Kynz7TE36Novx5XqjLht2ud",
  "key16": "4SF6KQJk663Xz3dPhf9vDfBARXSLRK1ZCTkFQNFR6dmzZ7rfLZc1FswQr8Uo9hM3iVetFFwdnrhMcTgqCwemaURQ",
  "key17": "5xGDDwyhuRah2e4QEbLMfSStY6kwA1jJTKgRtmWDFr2PRVn19A8Aom8opxz8FYU3fhNjcGyWr3MJcD58ZSAz8z9W",
  "key18": "2KHZqZCnwWG6hbcGHhSiTMRBYdtVc1DzH5jU58p6v2ThBDhzStHsVH4UgRrNCkMD78QHUj2QxZUCQX1fnQ1etRbF",
  "key19": "2x42Ug24et5RFVTLKSJtSd5WSziBBp4SPJPMRpbZcnJy8s6HfeFWaLcPY9bUCvRNTYCrAw6vSpFwhCP1qHpKmT2L",
  "key20": "5Z7i3ShqbX4qZEuJnsgVY7nGX3C8RDLhJghy7Jv363VZxPv5Bwaqq1MkMSP1wo7FLiJxAjzDxrmNZCztCckMSqZD",
  "key21": "4iXUbu4aGkb8ABbdvXna9oeiR3LLhZmacZvYgDmw5E7wjRinDzKFSr86P4DLta2t6fynph28EJVg3z4SNrsKGg7",
  "key22": "4Wqo6q2X2YQqiB4tEmZTofVuo2SfA4HFvv2XUECQipkiWFwHnBFWnxe2jacuV3NJBprHhmsFFbUc92mohQbudYgF",
  "key23": "2E9KFvQ69shaAAa34HV3obUEJeYvUJzMkmeK84hqq6zEwC2izctgAazQdUwQ6kentbzCW11LG2VhxkwpFuG8nS34",
  "key24": "67J85bfGt1KbEskjzAPeGQg6tJmAdesWKFU5NEUWKk7sAP87yAdgxQhmdJa1LWqVuZn6bcNryhNgNpBGUPJp2yGX",
  "key25": "4tNgpKcrfoCb7eG7s3avF1483sWwZ5R1bHgkKbCq6niySbVBCVfXvGzGBNdq3H2Nt5yppprpueQKvtaf3rZKhNvB",
  "key26": "43bYcQHkyXYJp5yctERK6jdRVFWX9XTwLouRBjwGGAVEnNBAwNPo9Nmy2pYChS57bWpMo57T7tGEHoPdQwS7KpZ9",
  "key27": "5VauunLjPjLQwhSQpGaMxUQjJ8SAUvHCHpRzBiiQhrAD9j1RCWjxpJ2KLF4TqH4hgcM6EZfh5dtiiiqwfC4Qrdgb",
  "key28": "36CvKXDGhZ5vReWqxVQHpEi7RsDKsQfLscNGe7TC8wzmRZMFB5UnY2VFeZdkThBet36tgQmezRByYfVsLN6N43QA",
  "key29": "5raryZkDzfc1hn3uMKest7KG1CucdWyhwaPwK3JxdokgNjzjt2FN9Wgpj4z6ZsBk3BjuhQLii1QBj3KGY6zSVERh",
  "key30": "4fkeoMckBYedXB6G4sFdd9RMFH3nvpxH8KgTVQTNtAg5rCe31CsPTQL5G9fPD2A6w8qE4wLScnRpnPgEeCqtfo8N",
  "key31": "4BZPzJudYRu1iGpA9RxJr8PthNBGTy3dcfMX4UREjVS5hEHHhLiQ9GYaa3wQVg8KkpmYLaGnkV2A7cRGhMAcLtQX",
  "key32": "2CZeBQn3TfaA7DqAstE7B9ptHpzDCh5Z9vMm94XrTxeRhtz5XWbyXptGfMV37Y8q4RRbdmkgZ7ERpaS96NTmgmpq",
  "key33": "3MkjYzCFpPHKBGvmsRTbzmsLz5A5tFCAhkozxqPPVGPprcNpXyQhF8EXWUJv1F9Dca9sTDCP9HqgG28LKWGzQ52z",
  "key34": "5g2m89tqpjTCiyKGokFXDcbcNSj9tejZZdztefHswhM7F6JnFkf2u1eNRHiXTx1VHJVnUi51CrzgsaNBdnN32QMy"
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
