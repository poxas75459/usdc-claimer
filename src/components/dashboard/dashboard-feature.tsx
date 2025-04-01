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
    "229z986YgMj9Zpy6DtVEnaT96QbWhtdxMF1VH3YFnwjGMmwyNGYZoBMpv45BcXtqmHb3f8NHezKaBRnfMsGzTDu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUKAyeRC1Mv5xqAGQQfGxWvxKdX4tZDCCX4dZK5t86xif97KEn7wamxLjxVttnoUxWhZZu6V4eonpkSp364C4y",
  "key1": "nPdWWA3shGdoFQRWbxPMxf2EDF3oo4wBPQvTEYJFQMux3Nwv64WpVYLn4PCaogwk5DFk2eeW9DLh1c1w7r9LLyb",
  "key2": "2fffZSQYBZi4w7ALKEK8SeMfWaQsWQya3sNhV7oshhGQd5E9aDhJXq9hwMLfnn6k11M417orTR8iQk7hdGKpG7J7",
  "key3": "4LPNUgTehW4914Fn3LiZTQNuxxaXhifzND95xzAx6qqWNLWKVVMbJdQrrMC4yELRNmgrPKcXfsq3imxwU18eyPvT",
  "key4": "4mGfVfiKergifSokDCE5nXJs92znhd5VfGQcmrRBKTb41nvVxe9PyMiMzpA5rUqp5huEyEdZT3f4NHa5qRAhmd2",
  "key5": "2Mvj4ZMd3pV1c2CDpb3ZQxgAanVMZk5wiw8ACBQPMk5vGKGF2egJ9uc2h4Cue716hQv4TeVdzfdrbokjT79ruWBg",
  "key6": "GxfjFuaoKGvs2qgEstjGXDkfqhF68pV1e9Yr9KNfTvEyzovvggQM6MDAC4RfExRZneyiJ6K82ZrabGfrfEPLN11",
  "key7": "66qLDJp87T13eUfHKBNHRc62gaB3i6Uq6SJ1BoNSiTaDifhW1yPxbmFzHkw34CG65hD6zLzPrGcjXrzq9n6JMaNh",
  "key8": "4cf9sWutW7uDrqMHwFx1ssLNdPuwuWm7opYSQtBu8aKB4mwzUhSCgYFMmZ8MH6TQair7vRsMPK2VrUAtWUy7fGVF",
  "key9": "37LkgXdfck1h4dS8csimJnSJWSqFD87C1S8zzH1d6xAmzmKiHDLvzBCN475jrrYoMoczdyr5X5N4JPScxJF33kCn",
  "key10": "4niipwRtqmc8E4SYc99vyRokNAqTkUifXbjqoDfsZSXMgHPyh7pdc63tv2XrBsYreK4wakyTmyTc5qbp7pYyTb2c",
  "key11": "4D94Wk7xgQTBqv3nhdb6nkUgf1JuvPsP1QdJdD4wziFwv4CJrk11Ju2hkpkxAJuJ5rVibmGyywu4yzxLVvsmb3AT",
  "key12": "4mpSV2Tc1sgMcvtHJMCy6dQ4wFnqDkmKnpKDgyA3xFMuMX84qH8JLqwRT3Jdm2PX4v9XGiMVfiJjqZNq3iF2fdJD",
  "key13": "2CNngxSHrfPiqmw4s3BAzeoMzry98zHT7H4YngtECXa1Jw6jL2mwbNpLuPZvh38K5UuzmwwsXGdK2QANxy7fY2NL",
  "key14": "4GnuuUt84btJz2b9HUhs3w6JA6QQaHkspfQRYUDdB8p7mx5kVDNfXdaWgJX17i1Zk8w3Q8WWbXFBhiukia7XhnaA",
  "key15": "PKcvkJ7Vimcvbf7tsqMhVr9YPasgsKwukAkpCv1zViykue7J1gg5SMBvTFmo6NdV6fvbKd55fLXSEX7VEKQMLEc",
  "key16": "tqdPm11kxPyaoDRPbKc4WGHMFYmzpz3boeZkWPn2QyFaKcgiy4WWZy3kSPokdhmDkJEkDjC4Hx1JbwUH2C6V3yQ",
  "key17": "4CbQQ5BLVLbRrBTkpkGhChdggDJwX3CmK3afaMNrdw8fEwrHqsfYdPaRRK4ZsCUhu6iW8R8CjGk4FDdbMfmAa3K6",
  "key18": "3ZhPC3wEVqH2pm3SJ57fK9fkU7mCumNYajoXak7QA4b3WdeeRSPtW54xDfe5AGQf3Fqpdr9WQQrZKqnBb2c7yEb6",
  "key19": "2bFvrS6Q5kPQBZX3xnbNVxa61Rx5dw8L5uXHSAiyNpjGKi9hMwc4kpYtuTtpkyhcHv3MrPZsiewz1qbYn7GX5Tjy",
  "key20": "4u5D8xom9mkXx6TzUsDB8fzpoTKSrzzGkY8YbXET9NHhNwrAvkpFY9SijD84Nd7cbzY2ZbfSqtT38f9a1vVfdMHY",
  "key21": "4rWyM264usZhJH86gNFTgJ1r38TYeVfTpyCHFUeek5NPV41onV2X4ULNUKMFdcmsQTuP4pBeiLH4wys1JvDfxoCX",
  "key22": "2fWMPWvX72Q73FNcJZNYzG3wjV1hfxZXUUFwihSecYde9qBQbXBnyZxdrWBR32DfBY9rJAo8fcoy5fQniVAUhdoB",
  "key23": "5him99SAB8hwRfzsq6RTsi45h8mALLa1PpkQAYmPamDiCrRDjESMzHW1XXnFtMvv93URfd1yh91w6uSFfD9QzaAT",
  "key24": "5BAf5nepkJHkuxmt6XMtxos5QqrstNBxMtxZTjY65NmDAaEktmBRBUnwrWhcfok9F2zhe5WP4wf3F91U6LjGZ9Vk"
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
