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
    "4p9B4BshSQjcJWMpReTbksodgnejSyAs1acacsPg55197CWA11A7D1HPEesU4qNhgaL6LUbrVh3bJvg7EcLjUSjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAiQwUwMWBQfDqbhF6G7aWzHWitJUaTUZYQmuqbwJcGA9Dh4Wwzp4yK5Jmo1URfwgFQ1Ken3hk4mXz3DQs1wMmm",
  "key1": "rgCmGamHyPupL8Vb2PxBhQaZMhgzbKAnZxsSbGARtN784nrL8okaBwDdBRjLNfTHBGc2iX4R3Z7hbDWJLDtcYZZ",
  "key2": "9w3K6nKBNnBbYwrPuHuWt1LP59oBqbiNskXSPJRrnkrWeJdpeuKi8cURH9xahSyR319WRGof78Qnxei78Rc9VUK",
  "key3": "4jMiqoZyffwnNv8EuqaaMxXvvmk5qvxXmH44VXZFEFYgx4Lw3xiNahqmi6EwFFVTnPrqsQa47Lzs9QcwVecnWTqD",
  "key4": "4xXA7pATxwWtNgcu4HVqQ7tpaLwDtc5rg2fuUk8ULyH1j8poicsS3oUKezqMzZ4z1SQLyAXFQnsMKgznPHXVG7tw",
  "key5": "3djbQgy8T6BWgi3Z4oyzb6U8wWPfW25smvzsptrRSQiP9C3oNzVaRKeYKBzHK3PqUmDd4Hb4HMJpxWZ7SfY4bwrr",
  "key6": "Tj9R6Y86xotLBEWTfNDD7shC85cR1kDTw9ukzJJ79ymkiRxqPPqLrSZkK7BX4SUceTHDdANGT3LKwFY4xD8ekU5",
  "key7": "2hJDZi74v6JHUzR2MaRPXXYAriKfS1BfbyWNZFqzpdhwe8T77nngL3gVGCHgpJnhAzAEv16UfpgAQiyjzNbRx3Q8",
  "key8": "2R2bhVKCj79Uxqkfhnx3F8awpF8b7wqGr1TrNkP5sJEcvTStVR2LqUgGmHZE9mUoLJCCYy8u6eVV2r6H12gXC96D",
  "key9": "4sfiW7s2Ba3tf5WojQi6XMBLso84MnUxZJeAsmuAdkGYvPLVLvyeufdCL3p4A69oCR1BiN8BmMUzhpZH7t9Hb65z",
  "key10": "3BxfKWHtpMZtxRNepiJ2NeaRKvSwT9pzWYV3Xy93zrJTRgkoVxXHqUbkdr9QQEB9rcAPszZ734CpRjVp45ktCdUr",
  "key11": "3Cn4JCEfLpV5MWqCDa1E3M9U5u4PF5XPMfpMB65cMxMijv238i89hFL46cGQV3tMTwbYP8rZJRPh9go57vdPPNDW",
  "key12": "3bxAAiwWq7nxALoWGS212vd6V6YKpvNU8QShhcAHWGovjUZiqET3kRS7zoE5AP5bprYH4NAqYva6gRPyf6z48m7",
  "key13": "EZ5tbVg3Xx3ujudG7CL16AXZoDqK6EawjcvLuDkPkV2StG2qM43Gr98t1hocsLuLisFX7hzX4MqXeR6zrxCUKnR",
  "key14": "4eP4Gun76mdP8p11MSegzk3JSyjMivEEkfB3AC9MSsf1eS76V2GLBKuwhEaCeTXgQB2wC32UqXxDmYuMhyHwFGNb",
  "key15": "3BVH4QLHxJ6H83qn7KauQaHyfsS25uqVK64WSoPcVon5UHKjm2qUE4gY5qcXyvWVgqvi43y4k3KRhi1ceT9sLdFc",
  "key16": "4ovjjBfGzYc6yruN8D9Ks4HAbLDdovTpKPJ5xu557eE3fhrcGj5DWLh4DhnNZYiTErP2zpohtTpg6gq3oWrpg6ky",
  "key17": "4AkGFh3b68oA3dmN7m2hcAuH29rRrN7azt2xfDGDwZbeFPMUWEBNKnJqTs292GqgYBDkG4R66eagCuwiafodwzrx",
  "key18": "4eMa8Qq6R6swa1yJ2Vhsx9wTD12wFbDDth9t3btCUk96JsFyGgMu3i1BhBiVB4DzmMpugTV8JZmnLMEWTwRGkAJ2",
  "key19": "5oLfzXrmfAukCTVbMgp1Ee6pyn1MBGeHCc1NwkXMyYfWUXt1eqtwZfkPPGT4qJAmHfGX7kH4kC3dMC6bJUDXdubv",
  "key20": "5BxUPgU8TRe5FsCM9Dw7g9SquDvi6DkkSPD7HGBPDcM6Bouos1kvDWBQyQPdQVhkp3Mnj5GKxcUa5fPPDb84iCNw",
  "key21": "5W7EzB5iBMPePH5nnioC3QJ5Ut7SqmVY2smGGmdCEJQ9fVENqJRF9hsLE56hq6Y6rqciBCaGVrFRsk3NiawXJqxQ",
  "key22": "5zxUzBvQDLzoWUk1sFxKD1B4M5KTdEdPKsLSHExqFPrQNvqRouQrWUEu1bdmuD19Fjf5MHBqaNnTQxdo39LYksd9",
  "key23": "2PhCX2KoJAc1vDZRQjL5PLcH73YkjWb8QGozb9KZAxMJRsKyukiqSg5gbzNP4vgZ5ZRWSRhXmwuL7T2bQxCC3pRF",
  "key24": "2C6HJTCtWqz6N8fv1XYCacPjPAkE24mzRNfh1pKy5vb116J4zPU7PFXwb9JPcd9RU6nRm6gufakMWP2YZYMqdAXt",
  "key25": "5sVbyQGVHCX4saCow4nsRRTugq9KjrDQ872BRp3hMwE12AgJBYaS6uj9yD7UWra7gmon8o3QYaTbxV9edvcg6MCd",
  "key26": "23LvMHbjD7oGWD9dLCEnqJstco253AV5agqvi3CrMueuQFXsksgFDJNUZDd6Me8rSV9L3BNv22PLXXmUreeEAbs7",
  "key27": "2jQgc4L1yp7RLGEzFkKPYMTRZHSNUYySH5fs4LThTj81iFL1sYEXpKTTydR4P8DCiChB6Tf3odCTCACm412KacnH",
  "key28": "5dMUyiA8kwjd319Ku5zemU56RvceGpYLZAXcaB1VarB6F21NvNHc4AyGhATYaEe5BVrTnYfrerCW6EcQiHYLXAb6",
  "key29": "svpCTizH6Y3VYhkTy1ss6o2tS37BYpM9jJdNPz2mXSem15kMV43HxLMWvT4vCoyraEnuM95CYSiodRAQevwjKec",
  "key30": "2TvW2Wq25RY2t5KFdEBwnQjfwJskFfeSwwQ8gapUQ2Q8GrGa2XsZqds2LPSRRgVjSV8Nu62dCoGmZ6y4hJsX1U7B",
  "key31": "4HRJU2jhQBrids7nUT9QXT99JP3PGx5eUPKBpsqZ2P7XMhrS8rkJNxtgzbcoHjuDiSJX6A9jG6XVe4wkGEDQBdq3",
  "key32": "4an6LTiRFkd5kCSA7mx5hn92SNpbBGTZHMNZShBYGrMC5PDF9rMDABvxDfwCGEH7jSvJqWAiTbQPiMeWTWmoMcZj",
  "key33": "4dLyCi1LoNNzgktYrVFKiWdJdNztCZfhq5ssH7J1FtqbHsMNU8c7J71c5M1K4Zy5UGXcXdRHBANPFz99EE4XHwES",
  "key34": "2YqguLENeGhg9pnKAFY52tYAzVunWGuaoA5YNgZudV93QkSWg6tuq51M66FcWDNSCDoWAhn3z4Bekk9keej4DWws"
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
