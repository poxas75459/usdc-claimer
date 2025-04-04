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
    "269tvzsM2jP61PtVSW671LkMZRgbj48NavhkJwf2Jw1Pn3m8rF8MftJRHgErXACTG6Y85VreaKX7zn5fcSDV9Kva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBq7m9Zd8co32QyPZRzHXtmha3mvFP8buvJHS3amNgp7656DBfSDWy6b2mJMmjhqWdwbvfmYyXMboc6bqu4uq2z",
  "key1": "5dMe5VhtxeVgU9ctNiFA3vHQWrG1uFdPHtGRGFXBxRghPVeZWNArYtHNXThcK1Wk1z6AtUW4ENWcmiP28UMFxUxj",
  "key2": "5Jk7NgP3n1rw6jHDFFmcWwbH1xEQDDag5RVHSL8AnceT7GW7trhoouNE7bbWCnGLnEJPEXAu7BwjHTWfx5CLzi6J",
  "key3": "4uSCrwGaCwbobreCu3Zbz5oyCnBi8HvhNYrcbPfyC89U4vtRo2ALpRj5TVTaETM9Lviqa27egqt6ygx9PGCN9cTg",
  "key4": "5aH3spcHra8CbfmdSUUkREFkimLfirTyMVqgdh62YrDxEUyLGAErZP7RUPk43i2b6RaRQ4qLAmdx4QkndpKhSJNG",
  "key5": "4rzUxNf2KkVB2jh9zBabgvF2N2CRUK5SPHSXLi66DMjmLSWea4z3G9HqSSVprUCnY3EZo5Vd29FbV6gtnm5q7cNB",
  "key6": "Qj4CmTSp2f7RsCKVWRRRATvTaXMBT5VBZN9edxdkNZHMZb123yfEwnVAkXef8yajzPcBRfRByYguSqi277rFZHk",
  "key7": "2E4NMyxeupBig4hiy2wTuS5vv7cY1PknUZWxkToGrtX63pDwVTzd2XNDKsGr71zMUBu4BU23BDkeHMVqLrso8pr1",
  "key8": "3c6CmXfihvi3jQ6B8k99yySL32VANWkgjpxUVMz88PD6XvXWBj6Udqb1du2JYbKappG6NaTkJz5tBLdahKc5UoMh",
  "key9": "4W6zTwijCnCScaeEmQvRENbqfQEiLMKKuXTSw1DNHTZvdqZqwX1M4gKax9qbL1Pmo4HsKGBBkpZqtZshjK1vsJdD",
  "key10": "2dN6YCc5x6ppAc3vkAuvRdRJz6rvNXCf9LXaXQYHZuiuQb8Xag9aJpzhZfdGGrpf7x8Nv8KSztXruj2wfqk4WBch",
  "key11": "8qMVjnYWKtSv7N5mciYENcYEEsuG1ifHEW6GiwEV4T5XsEJ56dDwfM4j8aGfwADkJN2xQMuaGCmgN39N9bQDyyL",
  "key12": "TYrfmbVP3d6FnELbKc55EHQAnJvUQCyUU8HzxVdT7p8vah382ox1ALeaxjjUMVEgS3mULFGGBNrKftEKNHSAHKW",
  "key13": "2Q7NngUegjRFonuVF5QG9ZuSvWMgRjwSH8xj5kmn2imughwrzRri1oWRQHdm5BevTxfBFV6sKBh5c2aQkP8KAJSR",
  "key14": "i8tUKXATMGH65emYF1akX8XzA7CECXsFYjkXxTBMzA4FJsAMvjjy4WrtGFUFmDqBvKWDXvzHUujNMqvZPz1yu4v",
  "key15": "3M9SUcZYxMod3cPMMHCECj4Ro32KXXcu5ekALhQgYZQLES9cCvauqNuUrVsEsw4BdmihcJYVJsK7FLZFYDMf5PWq",
  "key16": "5imiXS8fs1uQbN4dpNM6Wx9jZ1Pkbs5GDzEycBxsTaN9PZrhWJVKgAqa4QwqkYqf15XKm9aJkLm1ML5nWF7jcChS",
  "key17": "46ATX2GC6TRh2LegDbDtkGaLaXEAishyK834fMPYDkoMmk1uKVGE2U23AKA42j5DLmz2N5eUpACYBvgMXcn4Fjaz",
  "key18": "4NP7Rp4ppScj5fsNRExtUvesjUAbhEMk3WUxEYAL5GE6H3meNge725GeQzNhjv7JWGWhUGaGAURHB4a7QbKQqKYG",
  "key19": "4uCZst1J1S3H4Z8CEc3GJ7uchC69VJG6zzov1q3sqDEaHfqdTQhhB9VipC1AAybtX3TwBjWwzShZypTzREiWs5YP",
  "key20": "2mfiGjGSysvxsrXPB7ehseXSkVwa6wgWbXwETLTxkcq22EWrAk47p8xWTjBAwDUP8pywbJC3UVSC9ozc3KmppfpT",
  "key21": "5vyhStGu4WPoD4NkJN91thhCJtkJWqZ9uGkqjwFo3hj8CDD4To2BDu7nPFkhuf5qzMHCDjM75aa3U7scgBULS8Qc",
  "key22": "HbHxZYJYcsJfjoWfg5t6NVqunAmsQEr3FyT6qjTxNK8RRkMABkVph6NfE1u1mMUdrTKKyBUMymHNjcRS6DhhiVD",
  "key23": "4SKEtzdwHjSMuVVoPvkoPqCZxWgHmBxQRt1qnXRCsDYYDKSb6FxqWXqJ1mpcxAVyfhfMsPUppsgEeVjkSf6bFEoL",
  "key24": "bMBYmT3iHdozNfYPj44NecsNvm8VwmnptNwoqsyWuQ82YEyae39pVAssQzjWAazxN4safaRcrZUFCptPj2bbNqo",
  "key25": "3ayzuXtwQdv6eoo9YXKcebo7Q4EdYCGRQRvM1Q1YkscJQV7Dq7wRuBg7Zre39qpuKvEg7RpLVHe5W3tZ7bZCHMp3",
  "key26": "2rDg1MfbsXdbjzK9ZBMfkFrAtLpokrwJG5tP2Mwnu6Wyy9KkyiEcWkMthHgsg36srFJuTmwnB4Ly8tmZsYYqQeNq",
  "key27": "5d5HgcYBwyiC2BbjF1vTaXxXpx5C8XW4471ttFzdtHQk3qbxmRfngfqHBwi4JCB186qTMfDsXevzzpq78cxAEg7b",
  "key28": "4Vh9FT5zKEEh6DbGNa468rp62bJvhnkGdDdJBNzDFZLnJdESoeQweKYjwLUamutcxNUahqsEj3SPiCJcYvAR8t1b",
  "key29": "3KprWaJTL3dmhyGwEYs3v235QTCRfjfDqpAQEo58fMqnRja3J1YT72MMbV3rNJJWoFuU34mJJ7iCvjyWd7GigofA",
  "key30": "5M8ck5dHV94zUCcaT8KZrFLypnmWCwYon7TaxBQjDyCxGoV6WryeVK6itmBXy1Un8NsJPvUgoF4njAMt6nEXoH1N",
  "key31": "3G2ar94L7LoRCxb6GWT36z8NhjowvTjiMMLB6A6zrFpVnDKC6nEfemHrUkeQBdrZ6sUfSvexaP4Lstb45JNuvZKQ",
  "key32": "414HoK7m7kBVXzZ2fdSxMctKqLHKNb6uMo89SBdPtoyABCx2hZfDSvKHzVzkRSr2BjNhbycDdjMiFicJXZjR5GkT",
  "key33": "29mV7kk7oS4T7nEdGpHiJ5iGyiwEEEPcAnyS6ewGpoUKe8rGEAhp1FGiPKqskJovki3pFxytnvf3vPkBCYTRoWjc"
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
