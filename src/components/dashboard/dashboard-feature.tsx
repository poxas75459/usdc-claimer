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
    "5E3KujMwTMTCLieammCEZ36ZebFKqd9JYozyJht3k3WC4NW7Xmogk6U6y5WUvKdGDSxJJrFP8Uq1dudxQFYbp8ZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dxhLDcKaGLA6zvj6TwvDqWvhLXRfuRPUnTTrc8N6jkrUk7pih2doSLgxUd6hY6kgto9zskfMWT4APRzEpz1cVQC",
  "key1": "5YGsWYyRZc5JPNurmaPTYcUpqJSwUBWdAMcoSPVwep7dAqR8WSXtUVE7tK9tcEArQRyYhWNhaN9Kx2p9a5GsGDZh",
  "key2": "iXF5ddwSL3E68vvqPyzAJyvsq21vTj5FTVrkErQ2vsoAiswC52NrJh36WTr2RoFUiZDGnnDyWwXcwf4EVd4BPsF",
  "key3": "3uxqLKvF96U73om8K2MJ9Xxe2UMX3GLfFgCTwb6YxLxRAsRiEJntmBd26jEC127QBECTARZRXT7TwubCcmqMR174",
  "key4": "rDUNBJnED4tSSKXYQKPjkNVk9n88oKcoFyjszJMvp26KpUKTRPiEAYEFhHZNJYNniDcrQTzyY9PFxrGh344f6Qb",
  "key5": "2KoynfZqFxZmTSRgdEbXNeRWfdRyFeXx5Ef2j4f5kDKCrkFmGkCDcviXhV3cYdPezNEzXvK8u19Eza5uhstQQjKZ",
  "key6": "5iuJ1douH2hYygD932s6wEWUAPCGiuNGcRpfYi6mEofersYKrif4G7dQ2xUsekvdNHiTaX31nibeieutqYhf5S6g",
  "key7": "27G8QoS2XiN2hciQCtht4PvukqBnyTrP5VzoZurHfAqB2chBHAqD5e35y6kjfWgESHe14MqM2CwTz7VEjGc1UCe1",
  "key8": "5uj8sFyrgnRPNNpLpm8S1oqAJs3VyPSmy6RigjhQCWGUikE6rtnb2DZ8f5TcZGdQJEAQvTjcEsdkGFTptcjRd4qn",
  "key9": "3kiHsgoxdNXeN6ddBg7oEt34ULQSQkpXR5arM4uECnZzx9WCLtcsivevppxDH8NHqjmkfJg4HtvXBA9GRF4DoY1S",
  "key10": "4eyPo4cBs5zk4mSMc4xdGJBFzBfXRDsvy8PPeEBxZqYKDXSuHTYZNLfwajAe1Ds7XKhAhhMumB5DqSQFHP1yoLr1",
  "key11": "4kcXXYjnBPcN2ebVSLnAuRXzzEi2P3wB8AvTdYta2d8BYEqjegYhnvZC1ujf45Wsorb2KSSRSEuoDecCbf9igLNN",
  "key12": "5MNsBfCuxPtuCTxBaVtEjFD4mxSZAySjrnRBvw2E1XVHE7AqK2ADnvRdZBN9Mk3TbMkScCQ5twG15PTbKQfjx6cS",
  "key13": "2y7LPzb2JNk1tixoMhTB22QTo27i61J6YVsiCv4U7XWXrPbQ8DeqrnWbvTUYXygSbxA5DXPGLVLiKoy5rhzziu5N",
  "key14": "3Km4ZofxhakBEh89j542z7m5EA6zsfPK9htk4ERNbuhe2ijoAwP5Mrg4kuUbanYD8qG3TghWb7zxLj9phow9h21w",
  "key15": "yWwYNWQhjUkrBP6vUeFGA3sJJCdC75kVjhJrbJtppeExBR8QckupEKq88BbHwW3VsktqNrjdLLqYpoc7xcXdLL6",
  "key16": "5VLA4gt1Dhr6BBZaP5K4WgwWSYfhruK6RDJ1XezKAe3yxeXm8UkCsjMhqZ6utnXKxGUrjQJjJVypq5egb3WQexp5",
  "key17": "js2pEp8u692GTiaDMKDtMFXa3HCPk3H2HQWyHufcyMTNCyaUXt4xFMJqSC4P5nnuqeare3dLou8QM8q37XmVpJ4",
  "key18": "yn376hAwTK8REoJQ9ujogQNXf8cr8CzCYiCtjGZADG1JwTsmmAJD32pa9psgQ8jt3EnyVcDM6nZxD9tU91LCQV9",
  "key19": "2usJqc41GrSL4yYuog2kPC6Ji8qtLtXZP3fwmsFmd2EVY1tZZWHdczUHhgRAeMjU6JnoaAyH3Uiu2M7oSfMgTnWP",
  "key20": "AJh2m99AAgRjgKNn6x5gGR21dATb2bkAYCYGtAZw5T996BsXzhS3zKhaYjjafc1zoJbDVdcWkgmvKh6LDXtWtHS",
  "key21": "4wrihLG3NtjAcBHDr4efKkbg1rt6FWTEJnknQH5u28JaPDGHBDdydWRkYHEqi9C8p59Efv3KTbd51rmrvxaVVkNY",
  "key22": "7mtbWiTv7UhDM8VyRQoouP4Bsb8ENPLiwgjtSRyN293MkujAhC9ibV6KRaELZuxpweukkVZa6m1c4UasGwPm6wN",
  "key23": "kP2toxoYKNJi5ZPdRo1a1WS2YxrKR2ZbnZvgouaH5H7tLH8oNoWVECuqU19RmugbQBGQDszCAkQKP12konavEkX",
  "key24": "5ZTCjC4WuNy4z8Um26NDoRC2NPAH5dLecLgFpEvFrUszQMkBGFiTfzPk9CQE9zYyYMBPqYX7WjLutVtmzM7eHTF6"
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
