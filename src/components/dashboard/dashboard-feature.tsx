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
    "2231ZaGAaqxtibu8bWsu6jGep7aEuaXJRGDVUY8inC39PP2At9G23z6FPJYc8QcGfaws7x79UdMkvimwwYTQoSdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CE9oeMDwv6u1cAwLHndUjuKdRshCwXEXX5XLb5De3kaegPabPP3isgeDVr1w512bByYsvYdQJpmwfPFD8TH8wBU",
  "key1": "4yxQV16RCVg5ZTBGqXar6jsK2Tf48pHabnkNinH2xQ46HqLnJCdevoDDnrQy3X8i3Fvfty4vXPmeaj63UbKFqLYE",
  "key2": "4jz8LsyKNzCY2fHgptrpUpGX71yHkezCzVAfgFeWHrudWLHsVR2LVR5MeDmBFsxLGAV2MwWYcwrTXfhy9uUbiMBk",
  "key3": "2YQov9oGxWnjATqQAQ8oReDBF9N1j8DkFh9QCaxi8wQqaNxzkm2p8Exwz64XuU5xfJHhEdmrvhgtJ3sBPEaEwAuw",
  "key4": "rUmFQCHfCw8gyLxe8hfxc1vk5dMSQzfC5VXHSUyurJmotAn4Lg9eA3jexbgwBrQNdaxkrJx5TrnTjaM52ogRWHm",
  "key5": "2wNBA75HvmgwXUTiWGVVnb7aMk7VubbfWe2uCtxCvv41Ty5rACpmyyrDmdqQq9XPLUU5HwsxzDbeh4Dovv53P7aS",
  "key6": "5zLD7tyh5S6ZTzkbiYSVNRn39XZwPJXCgFAHsRsn87wiAFN2pb87jUgVVWEtvWG4xtn1tFJgFjxbAJKq6ig8X6C7",
  "key7": "3VdPvfKqocaU2woBsHgDU9zPxXtnUNFkSnoBUgNstADGNm1B7fP7idYQVPuRHC2rPW9rDAbYxctcmRPEsAxZgNdh",
  "key8": "THoM8SnQxMx3w6PKevLSZoBA2gXpaGki4qE4iZhqa8a6sjKBc4mmGvjtEmyMgXmFTERKSYTmy8CeNrUVoXRRAK7",
  "key9": "479oFegvZR4pSywHGrwVUeCP8Qptw3GMdfFQNYnQNcQDcHcdBMbUbNDop8thMTQWz1pr52mrqUMXVfmpvVt5T18U",
  "key10": "2p6LwUr5rU71zHo8SXNatXYKKZYJZnb8B12V4Dgkjr8q8NRMckipps4enbotMm7J63npKN4x5HrB5Xr8NJ4am26W",
  "key11": "3JRSYay3Z4JCEeWP5qEquz52yuCey6UXqTM6KCxDQ3mUhbTjEC8b3YwozFwGEfqV4oUjALSnyw66Rtk8ezpruWWg",
  "key12": "wtR3Nwzat69wA8xhyQ8myB23DTMyAG4CDUsRCphrJS1D3a2id4HHJYmZaBtGXJxj8FHnXFUtT2fRLmaqWFuFdWS",
  "key13": "hyvhLYm7yUN8o8BMCVzYJ2Rf8qX6qoSrGausjxz1hmPPFFLp2qo9yPyNbA21BijwKj5Fhj9SonRDaXhEfiFauuf",
  "key14": "qnRFASND4jUbz52GA8pMBFgjnUbzDLgKwkZ4afXbRcimfJmv88M6Wh3iU8pUnZ43aj9tFVQGzth1R5qrPJWfaEj",
  "key15": "5fUKE6XUopMWi4nY4VseBwazt18SFTgp9FSWH7F5U5hyN8SoT3MK6QZoRk2th67AANjbBvk6hpTMvcJMqhTaLu19",
  "key16": "46sPK3PRrbqdXRgha8LThxXsWmSY7zD5TpMAGGfDyHTPW7q6DwfGjudiUJ94dBEyGqJMwqYgLaVMWFTQ3phPQHru",
  "key17": "npzByvfLiF1WVxDRxn9KTtrRa7rJu4UFEDgfqCoZCdQ7ZCG4RLTEp7CagH6qwBw3yFArsTMydSkXDX1746rJLdX",
  "key18": "WEWXLzqSE3UJRkEVpxTKuddsT53YxSLsUfvit2X6X1u9X9AfypGN11q5Ao28akn7PmdQDB27Jjct3Tbq8N9c7JH",
  "key19": "a3is1LNiDMbGHXugLFQXFV5uQQ1Upqdj5zJSV1fz9PHAMwCpwjVN4NhMKz3YDntoKo39RYPnraGVyzEKFgbud1z",
  "key20": "2wpXyGx3XQ4r9DoAaSkabkK1P53oXeMrVYuUmSP9S5dx24fbfMFbkM6aa7eZhmX1hE4D5DmGGJG1o3yT2Uf8LfvZ",
  "key21": "3cUJCqnKKpRPFJSYkcXs328eBgggkVTgoDHJAcEQZzdgBMkHxc28oPDvMe6qGdpzz6zynKLTfdq8ECpiRBj4NqLv",
  "key22": "3gx1KRoofnq6ac4hTwocwCfBVujZfjtseB2Q2KnBJWKs7FcSD99Tsa4a7Sqb1KhgtVnstgbKp9XbDbEfctdvK92D",
  "key23": "4c1tPfLXAx61Vz8DDENwiYm2yvdNvwqTbgmG2corzuvf7tUufWic729oZqWQE4zBcfDCQh7hWom87NBaTLxT3HLY",
  "key24": "xrbwEeLWh4DiS17r44ymMiojRMbmawnwM8FxDQF17EFz1XXEAqiCA87cvSWNqgnd56zwjXfoY9gBhmVWGZpGo4i",
  "key25": "d6PcR6NkTdGt4is4BobqSqpCszRsukCi2HNt3tzZobNFMNG1btNbc9gbXuJeJESmpZFJ4ykbfgz9BWhKGGMomre",
  "key26": "5qN9jfZD3M29oFKPACx1kFxePwWb7hzDzEEJ3FXyWqe5sS7HPJtugkjLzAqCyToKzuokJa77gBChZZTGdvUHKCtT",
  "key27": "5ypuzB8gXyGmpi6Pzje27L9FFDtcJePN862xF64HuTJ23h6CkWfyR1buCPfD79wV1Zb2PGk8TsRRGMXBWVPc8nFd",
  "key28": "BKGgPA4cy8XoJvtETgPJNxunFpLdyToNdbo15XuUxgrcCG8ngtUZYLMoxBGJUg4FBJAHJFmK776ppv6hsUbq72i",
  "key29": "iCxnT24t3pEyeTyxZbzNDMeiZAwAcu3PgL2dWFpRSDwLcaxGingdP8j2EaRTgwUaTDy4t1iMneY8pUJNykqpJWh",
  "key30": "MgHqX1xDLXDe69q77ApUGyMU7XzzSCAL5PB9YuocxiMquDsA3nkq3pE8K8gBTaZA2AiY4bbd11tuzdzrxwxs4dF",
  "key31": "3H56or7zzArzkkyABRuF9tJ6e7YER9jR6AWyWNZV9UaPQZj8QPk632t8KH1RefGcaAhAeADonFBr79pGGmT9hRr",
  "key32": "4sSGhDzwH6D8d8Pve9cXRRsFRuu7CPLKLvCXtr9Z4gXZaXxjqUM9FsYe53NZ2pCA9mQAWsuuGyFz3VnaQbWgCWYA",
  "key33": "LMMvYhAy71fBqVqbWuysXGxnH37ZgsRCSMgNGcXqjkkcdjdsfFo5YZpZifRP441VmtWTsBJXYt7zXxuFXywvszR"
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
