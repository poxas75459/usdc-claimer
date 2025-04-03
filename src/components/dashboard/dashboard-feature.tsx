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
    "5zaUFbUq8ScFQ4ajF4ZQYFpEJ4hCXuA8hKuA2yzWDtYqmjnZ6Sxo1bpGQkHSCPMtGNsTGnWVfvZ8UV1HQWh7SG96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H4p224UTpPed6oTysDhaPTQ2hwpm8DLCiEkZaiBhvchsV81Dtfv4N8h5TPe6tyR7MjWhZsUrwQG8WfYo2gqsbru",
  "key1": "Ke1cHMpd9wJi5MDNmuFuqL5z4HWiLzU1JJ72ZtpqXcRQ5zr3cPPumezNBgKkFWLP33ffvPkNJBA3RCiVBXL8x6P",
  "key2": "dRP5rcfJ8XziC3YPMMDYkZ1HhrmRj42qTGBkuWUuoj6sBgCxvzgEkWg38zMFs5Xrzv1mvTwqR1AuAV3CiSS6xmL",
  "key3": "4rvooiLDkP5bkKoGkz4m4tQs9EgZrYtWzAG4pLMsiFgGEbNc8XjZhihqxyjAqDsoVAFCd16NswQeh9nuoQndCBLW",
  "key4": "291RbmQHfkBgz4N6gPCeKfW7zYK8AU6dD3XNeMnFi6HpsqkeKBDgTpE75RAMFLsn8D9aXjbXt3WGJm6qG8cY7u7g",
  "key5": "41Kgg21hUUiEk42u4xRk6wj4hjcvbG8v7qiKHZjnDj23exiDDTkcCPRrFCw1xJ3prwLyDAG8WZX81zduFgjtaiSH",
  "key6": "49vR9vrKNMaL3D1fY991ZvqvQBh1MEa1RNgQ9scGDUoBbJBCriW3GYincHPtWN6hMwYwNAbYuyT3iWxTAMCe39Bd",
  "key7": "7jjdS5QYA3LMAZSJ5JZh5785fL2KLPCfMpb3uuWeqE48cJXJvbqoYcsDWWdUCj9bbmB53kTDCq81JazBkcq4nL4",
  "key8": "qfsvoTrQH4VnfvV4Y4Jbm8Gfv9bT5zaDUUdcSuEEQXhmccTWqmp8WckQEs67gYinJ8ysGQtvK26UKypGVzHU5QC",
  "key9": "44DHmUBNtYxWyWC9UV6n38jZ6CCaxMkM6s5NbQasML3fd538xhy1dV4S2goBYhTbiUA2pqrvW2wbtaM7DUDVQ9Qf",
  "key10": "5Rsoec9mL26rJZTgxThBjDoHS3ue1xb7CUoUEoVgPz6Rck4xK6WyMDVR595V3R9DLbJUmE1zYo4quqDgLuFcdvhX",
  "key11": "4i36tYJZ8p8kpHDT7w9M6GAdr4VLW7BUTe7PEqK1meNQK1vH9nGeKkseeTjVJfAsj5fCNWvxy8KpZcPJoDw7ztsW",
  "key12": "2d9bBHxqNt1ZHyHgtrZrmZSzFgTqRWv3Ce7prMxCEEHaHiNYRa4kE4r5ATWPQ4t95JYCPZvpB7SnVBbk8JH6KGGv",
  "key13": "3MqGpjNUxGFunv64wJ1v6YG3G287pwgtEEvn1BGgG2ZQ7YTXRkfGZaUtzTJiZD33cZc6sZtHRc2woJnnaC5VBn1h",
  "key14": "3LWjT1qaDGABHvTDdD5xfAeWrjdZV8LBZLfLXRNTYRTxWCF38bBjdhZmKdXRoyvWVFXzMVK2uevuRvpk8dGcZ3an",
  "key15": "3f1cuwuM4PPzDoYF77a51KZFTexwg6ez2TNkmt8mv6dtxjvm68ADCxD63JvG3DLvaHVsadYtjyGM7KXsr9U4uYMJ",
  "key16": "5CWUoiknjLsiQnVgFE9QNU499hgxXp939sBDVgMBMjQQRujb5gyXJXxA67GiT3MXxorNhd6GHiDiotV1VsyZcZr4",
  "key17": "23owshvPkSF72ytvT4jcvCqhLLPyfMui7La2DcsaFiLiMSFHko4k5QeMpbg2D8pYzvYj5BiMEXgxAy45b9tWAxqF",
  "key18": "5rNsVgjcBFGoDXMwg2Sv15z6q5FT2kjEXVhyEcGTuCLjaRHGEudyPzoCEiWPgZznmUXbiaAMvmQpsAtmZSXt9Gjn",
  "key19": "2QZut7TejV7WmZqMhWaSC9c8c43tqmBtCdzJ49R2J47m8JVhxpqF9N9YBPLcyGuJmtgEuZYz6Vw2JkU4vFXGKuvm",
  "key20": "5kXxrqZp4dMyySmW8AYkcYPTf1d4L5ZpcVLxPUiNZmCT4wkHXhvtpVa2yJJFY3N61oWbRLNvs3RJs7Tr3L9UJut1",
  "key21": "2DNLxeY7as7ACdVnEyTj4hXTPN3UTPFcnSaH5Wvfrm9y3E2sUwPgXibrkUz4jPVAaWh5NvDboA3WUsVZBx1sdVTR",
  "key22": "4JMNw9Tcg1nUGZeZSihQZRiVgkVHK9THNKNR1bbT3Fbo5ESDNJPKoedLFU3DthGMynXprpS4mAAXuwNhrhfyTSWN",
  "key23": "4VHfn8RRLunJUcCQRif9B7fxE3s2DEYyGkng7E4qPiJaQXvTSZ1B8Qr3mfnxhqZfAkp4QxK9APQxUH7wfSfS6khQ",
  "key24": "5YReYUBMCgjqL4JvMR9wuLTNxLQX16n17gvDqaMk9MDTGTaRGirKxtbE6xoc1e9czpAVivqcSk3FjwvyzhJ2KS3X",
  "key25": "36sScE7dmvjh5JW2fm3ufzaqXZsUkNSj7bu7kYYcUNZ5rhyThL2BuSEsBsF6vntsE9uLJbTfB3Z9og934acbvw4t",
  "key26": "RQdXAQmGYCnrbqaqFX2yR2tLvMgesLzSpCUgMyQXqHkbGYxvn1UNTtxqLSxmHHx8WRf7esfswk1qb5sXtFLCD87",
  "key27": "3cnDQXpgBfAiz2KbYeuYsuJYdTbojvNUDiZiiR9nuUFm48RT9QYD2oZ5JCbhGmpT8H5gggKfse5f7GwhQtZJ1qet",
  "key28": "67iQsvNFyfX5zDGhNnJs7rcarxr82Fc6kitjUzXtvx2SK1TxhYdLsK9yDmfpmtX5ndSzWHUjNnuaP5nUKys6A1DF",
  "key29": "3mVFR7akPHUriE6JccUMFfxEGrvReWeYkx5B6uU92S5LhotA6mrGyDgtdbSS3o34z7YYCuNLSjSEujfaS1iEbVpi",
  "key30": "4mJt1LDFkej2k3TaK2pRVUmjTAWoPmy4Anm6xGZCcwvEzaSGK45JEf1Heda45Dnokv6Nn8V57MigmHDCvWTtWa6M",
  "key31": "3JtTNwsF5UBV4Z5RdnUL8rjawV7LuE8UtbYaaqRXeCrgncoUEikD3MZD2xCAtKMBZhJr5VUU7DM9K4cF9qyZhKBG",
  "key32": "5ZAbXMfrQtEkjUmHbxa3LfDzzaRPfBFtesvBwVzesf7HMVHwjxsfLBdrnnPJ8Rb8MtckzX8vzeuAD7x1zZPvdmC9",
  "key33": "3rz3FifiuTzZx4191A7gfwUs1VTxYtF7c45hnY73CHkb8tvGhJtwam1LwFsrbA6EVCNTYBepQeB4LoWBqK1fJRZT",
  "key34": "4BaqyYZEWndRQWEfbiUv4NNWqnNufrZWyjzarynk8jhrFHXSYMAijXUNnKUQ5RbpqnGr8vN4jkhPuve7GL1nVQsV",
  "key35": "RvKyu8yfjMKv5GzZyLFYPZfXmeoxX3Sn5nRsAD4BJDt7Q4GasP6x1GBNbBZq7pzLGteECfUf1GTjiT4J7SbDhfx",
  "key36": "5DyMC5gVvU8ingWdzZWAXx2MNUSHqNW4Lk95hfFMztC8DqDXtWJ59FRZnpjiPguG6YW9QQc89aWvmByiTTeB8Qtr"
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
