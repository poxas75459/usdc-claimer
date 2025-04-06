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
    "2no8V4XUQNfFeBWFedwxUBfuvLYqdTx7aJhp7ckeA9Lf5DmzFPnjexJ4yXFkGHrJ2eCFeG8YiVuBUq9gqVEmmgmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AeYsqQmketyRKpn3jAeVzhUm9ht2htWZi9Zcrdf8VPpW1yD1ZLToKfXxmYQbMV21HZaXjehKNLEWxEsfv1gDng",
  "key1": "4g2TdHkvrbu8kcEGf8HZUbNz7GAnyjkHbEjCtCjjGycgNdPX4oPxqHpnRLwxgyotkC7kZz4fDd1qPQrZovjAEXYD",
  "key2": "4Pd8mXgbWXHpbx7U8DnQBkBnuDEw9AEsfSeypR3Go6GWLn8ktP7GgKDd6NWfP22iZyyXLCRaCkT2v1iVwjdmV5ok",
  "key3": "5YwAz48FzB4Kn3NWtXUmNytgSrudJfwd1R1s634pMgT7oSrDwmVMtJQs9RXVtPjjKzEkVg9nZr6JWuvBJ4W8aG4s",
  "key4": "5wRoNPyhs2P38pPbK4mn2w787C9qnEwssoZAvLTGMyBjGAYshQj4u8kFMMC2rKnc5WLbditCugr5z5Q3mPWQr4RW",
  "key5": "3FryAyz2NaBNryizgC5Xr4dLxrv6T8m5uVruYH8uLUxfBZakoin9okSy6U2nRz5p1hDpj7KsTQNVL5RjxnuRATP8",
  "key6": "2VmkFaDG98Tt9sapGRdYahaGwitsfLQc4WGt3G1fQ3wkFa9Y1wWVFY5HKbUSabWRPTmFknBBv9z8Kr5kN4UMdfHf",
  "key7": "67muFBx2S5XRQcMGQnwFqfivi1NP7dS5HNgB7ab8VrvTipaLKYvfowtJNs5N5Nm6jyp5zPfvXCsWfXfgXS5Rh498",
  "key8": "69yy7CXV9Erw55ygitUoNefhv8Z8EmQRRRr4YjVULU5WUzhnAgk6KcqogYrsX9AFoHw1nUQusToeG4g8Dv4eFLP",
  "key9": "543TD44eSnE1xk9vqcuoEpvGBnTxfFbHazPZERWWbyHVPTGnXis5vrR7MEWLC3YDjejnr1VF4ZMk2iEuD28BwVaA",
  "key10": "33WVCCUKdwXgB3pMDHAQrnbLMsaVCWV76TMBmkjbFCZds3QykNuD1LkhAWMURNEEzyPRqAir6MUnguTn4JuuAc62",
  "key11": "4JCRfrJDpkroBXHnvzcgd75ppP8SkRvytYCzJWVt9J5LfgJfiCoXhEgnc5E6yPEbDzckU5HTRZ4EFAH12xckyAoH",
  "key12": "2uFZE4KgS2oiKghHe7TB5ueoQ1zo5RWwPcV2khCcRhvVqmbNq5HJ39mWpegHDEau3QcnBFGbF7Cywc1UEfPkMNpT",
  "key13": "r3bSNdYmXviNU5oyZXfBRPdEtHgfnVSoBCEvK3ssGzrTXHgah8btSBnttikirxBmm9JCpBXjpuyocbj96WZAqMg",
  "key14": "3QYSuJJHxzK3MQZ17TQmNP4WGWjqySnenEQxLD47oE8tPQdQmw7FQ2TmPA98jLY1wE2Fbgq7JQSz45gQcMiEMFZN",
  "key15": "5C2L5F8xqsrs52JB6CcfM1f1ovf157f8ckhW19q5fFa3p2fZZfe6SnsjTsRLVvD15zVPhM65KdGSzUS6dejD1dDC",
  "key16": "4g4nmEZZRHEiZy9z6MDZqo1octiB8oSiSdFQ6Qsg34dh7WXNo7j6UFz9D3ocPtenH3y1Gyg4x34ZzgTd793C25sp",
  "key17": "4eKKi96TRTUcUXFam4FUoKKApuipB9YwYYcc4BH6e5XSceknziwBZH3XKfKSKS9uCuv8GY9vMon5TEsy78vh4eyt",
  "key18": "25Zumsrs55uQCNqbmVPn3KCu1W4VtGB1623WScfwXTvwVBXQd3wSxF8MqDaXVQxrtQhdYG3vimHbCpvGRy3jzp37",
  "key19": "vPcWT9uN2zVLXZyRsE1E22SHo9499p3b4ankN9kdSsCgjMU67dJUEKMiRMZwB4qEcay7eHj1TprfsrDbrPujkyc",
  "key20": "2CZyySAQda574UpxzCbML7EnTjGHVSuPG5v3KLM1VunVLf279qJckfBar1SFYsDqJ6SLcGdoVrShEukJHzSYawWn",
  "key21": "5VKkzWKqaLu6tBifiCVBGe5r4iFVyp7g1nG4Vq8kNLYjB513EySyRfHtjKTMHtyejw1LaY95XozLmP9ADuo78KRw",
  "key22": "mneg8fWFFUA6UD6tKScqeaftezKAhoSzdCD8uCuWjNprUeCu4G9BZkQtYXy9uiggmnLfiaBjF3Cd4R6BcSu8hUo",
  "key23": "ZXgY4nnaupec7RoSSV1DgXbVEQ7nUJohvS8p3QL6G4agF8Sux5bN4NNeCaiCozuuBuh4oz8u8Q66RyWMDWTtPEP",
  "key24": "vRkxq3tJJYcuXc3z4ryp2LGAqyq3cvASNsM7vdgkJa8MNoE3KK1LhEUXoirhHnnoXDK2YzJy31axCeziA9CY1Gv",
  "key25": "kmFgJLmtCcJw4ryAsUDubiqu5VNNT3uPwuSfso3xzyBbhUjQPPpe7mTeQPthdrr7LGzTN3MhzKzpzQUgfZXeyv4",
  "key26": "EMgJ8DUUbhBVPcpYtHXioB39SYStr5RwXsv5JNMsA6qFXufFkMr8bU9t63uJ8jDg1buJg8jEZshKQXoTKMFhLZc",
  "key27": "5yp39K31APAXZfGrFxpCxmwxVyTrTXmQDJgPHQx9upsML8oNCnMWEzwpKsJfZwo52kP4fyAgqFKoDoKNY92zS6m1",
  "key28": "2tYJ4ebhDYTWRzM3FJZ3xJ7vZ1vy27752U2Gv244fPLXjovuMfFyVyF5321VvhMNcT9Lcc6eHxA2XSqXQDrtZ2Xn",
  "key29": "2fdmNvUtmnnEtHQ4Zzv9CnzbHL2MzVh4AwuTCjKw1Z6WLgPWe9ZY8eXhxZitEowURWe1F13rXSXFmwfcwArVvJre",
  "key30": "2R5XHtHCxFQbtFxs17mEw3ToUrLbbysWVoyHGGm2EvYw4BKY7QrnfhSkaQqAU9zgcLUCTATXdRDrqU1xgFTwmMKu",
  "key31": "4hP9bCr5aY6fSnPbmDAwhhy49qCZUVwvsixrKmtMBcHnyvKRwQ9ycwJ7eJiJDjMyGNy7WUbbCngRyD1cLrrbycHw",
  "key32": "2S8rRTNfLj9G1ExY4Qyn9kZmkivGb97PaxD85X2BqXimg61yekSgW73esXVE2MyEqtM6wBrwSEYppALNwgBYF3hT"
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
