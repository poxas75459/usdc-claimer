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
    "5JxJZZ6x5ggpzDCrELYLwePaVTghGz9gwP8Q3DkZfE8C1GLkotzsnMCWGniWTD85ygwngUnZ9yrLEn9mEVWcUuVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kDuvVZvKRQnxCiCNCuVf1ZcbynrLGxNXEiMZViMLZM8Qx3kRjAzfisci1AbMzbPegEzAwwwKxo1Z3hqSYsNxkH",
  "key1": "41hmv9P4f31auJwS8tUoX3vqnq3vDKsg9svn35YT1bGqFtzhB1Wz8Gow22FruN1JBSZN7f5ZWPdEtUePnDZJEEpS",
  "key2": "3oeE1Pg4wjYHfHsGG4njhhYpmWjXRPihdkctM1wbD3hVwP3vAZ2ZDQusPVoiyRCtDsKky5Mm6b3tDmtAJxMNTtGe",
  "key3": "36Vdxknpykc5M7NajyQRe5K3Z2kWr5PVvtAgQVgazGQA8Vsyinfm32opw9b3ZP5AbrR2DUtamPFVA2mMZhfzkXDV",
  "key4": "4rjcHsPXdUPha6QNgBd2nneT8i7ARLqBfdALp9xPEfJ1Y21Fo36zvL7EaZaBnGHqCzSJTZmPGVVAtbPpixX73iSR",
  "key5": "2Pq9iUaaJCiUMRWu82bBAZXGyE3uhco3H5V2SGj2XNRg83iMi12JPQmCDZSkHw7AMCktZWKgjtW6evZJEDbV7RkF",
  "key6": "4XLBgWjX6MQj1Q2JeUniKEowf4nxCdv5TcrVnbAzuMwN4GbM9GEPckfuhw4xwqupJ2PEvMPu4tzGJLiFqTEJN29V",
  "key7": "Lc5bFJJJi3D2bJg7krvXHs2oxbbJm4iya9JDjQYxTnj7LBW5f1L44kZFfrFrt9xfNrc6cAsEbvNoGTc2gYronpV",
  "key8": "8F7NaHVMUX2LiUcurSdm48mo7qrEH1yoQcfM4m6dvV9CgM4f2K7eEXKT6RGzhvRnqY6zV1ySaCsJd95t8uQgqZ2",
  "key9": "49M3smUoB6tfwhcimg4b3oGiPmQ44VGd7KNobipatd62JHhxa16bp2WeLWMSZVPqpAp55zdQNiJvngpJyCQT8DbF",
  "key10": "pnSBtpWAYoxouFn1idGY3WbaMckoCEMTwMGZAyePKomjtVN8MbQvKHxPHJUmgKgcaXP5RKPxCUaFDGoqr646DM4",
  "key11": "5o2HDt6Pf2NgD2sXNeZKo8Cahgodd67e6MuQ16gzRfUULJCNUJyRYxvi9x3Fv3pPV3kMhR8md1rSJu3g8rMXxNfH",
  "key12": "5hc61EUtk7v8CX6vUdfZExtBk2EEgEsTn5bMyicHGgZie21UPV9dmteRB28AhUwVZmeD45K8JUViZc6p2rA4bZHQ",
  "key13": "67YTsg6uT68bvyBcVayUaUguv9k6E4VnNM6CBHkHodY8t5pRwKzg2bKYyyvKY3wezekVyjsMY2P3LpNsNa5Acw89",
  "key14": "mtCSKu465aCf8sKYfA2AXRR5Y6M2taLDkEtnBqxZNHJrMV2CdPv6cJgc9wPgvJoLTnVM1cA8zsNforzgYY8Sc6F",
  "key15": "3VDELYW9fxffwjjAwLvCdjWFhS1ZMgz9MChZyveEH9u1LSXtmvCHh2zU1GDy59BpzYV7xh8qKZVJ3ym5WHGpD4c2",
  "key16": "3muxdes1RCutvCR51WfCzZBRNq2zJT2YTnAxtPvEJXhxckbJjaA6Dwkz1baZy9Jm5eprZEqVj3kNjoAddw6BuJBs",
  "key17": "3TLdFxYP1ij6yw9qyqF8nDwLy4q5RLTa8spbMkknVTs3q5M9goSX6ixhThwpeUVJEEVEdFHGb6v644ig5FmZ6Jju",
  "key18": "5CThAr9ySvP3ersRe6dddi7eTACmr48aeATbWKsbu5CpaPtUJ8U89Xhubg5gYCyP9DJwSfF8MzG8fYsguFQHSw3G",
  "key19": "2yFrNgSWSMeSuchEd1JUaRUEpHFmJYw2dCC17AWzmxccLUw4jJxxxijx76hLP17hwPu5VNCgFsxq4sZhBc1BCHRm",
  "key20": "Cqsn1Js5akentUAQbBHexhazzQ1T2ZhoW5Q7C7XZFBkSHvXxNwpzCGddmKx6jrPxHiknhfo3VrBuyc5uZ4sXaDQ",
  "key21": "ZQ8gCi41RPj2zYpyCvpHXr9zkLYbmbVabNLp9i9vkpCQ7j4kiAyTEZ5C2Y4UYYEjeNTgLcG5Agk3bv3viXDWvQx",
  "key22": "sVijeRHf3rGcq8gykRF6XwYRq1wzz2d35MpEaeHJhopoyYPqteYcH2i5pkKQeaFD7MjKuGReVkdBkYiRKct8fb2",
  "key23": "4ifA6fYjoSYFRze8ibdZo2oBznYw4Amye9bAFB922S85D7sSKPKfTeCpkndAsL5Y3QGNurStaBXRM2VdiWxfN9ty",
  "key24": "rrjwAMSvyDQeUjA7LLznEu7XHXhAr2fUQouwmZcJkdW9YL9MKXufW9s1ftAWfeYk9UsG3WFtJeAaUYdG68brQH6",
  "key25": "5b3PEqGPMGS7fjDDUdSE7FfJtBRhmwpKz16TxLYRYasL6gacCQgD87d9Uh8T9aa7HdoWF9uYHTKDRyZ62j8DqfNu",
  "key26": "2GQSeL3QBzEU4h9jLnVD4krEuYXbL2kQJRuDGxh7yTP8UZCHfJ8R36umnw12kJkrHP5okUCjPgH4mppoX3YQHjqP",
  "key27": "5jXiF6vcT8ADhABJtgnvWf2aThVBkLkwjtBaStgU4bYWN7FqmMp23fEiUgwCn3btCkE3gWScjKVRL3kKdcNq6z4N",
  "key28": "42q26o7A6Qi2dSgfqT5ekjKkaLiEvLij2T7WW9RyJLP8V9pgWavvBZ8PoNtv5Q4PdkgmryqJL5KkNgTjLN7bwyfY"
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
