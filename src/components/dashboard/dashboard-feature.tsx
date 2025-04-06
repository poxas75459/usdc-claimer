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
    "4kr7MHwGYHKsHfZyqSWqjKVL3fUahEscsmo4PKGAhZUjCgTmiMN38MixZey6LDg9i3Wi8DCCjfsJVAJPEyYUxWNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q8aMBYKsADTTA3Zhs4rNZeQthMKviwvAprBNTFmJmFAZ3QBCurFkxAv5dmGyEx8xG42fjkL5VPYPNgzFeLBEGrU",
  "key1": "2d8uEPKnYXW5j4cZ6NitZAUaw8yMD32X5bN3gtHqvmkMo7scprSWUhQuxSjUxPhgE5TqDhuNRr3saGgPxC8zYCDH",
  "key2": "4AJmEsz6ktkxjYeuTdJPAApuxbK1DEEp5JseWkEXeikuwhagxadkWqp9JKKJBYJvcEh5wAR7JzESsPzY39JUiHDG",
  "key3": "2dNueJ4PMFLgqCBuwuxUrGhG1ADrurvwzcURZ3KGBmGL3FmEqnEEGUxxaVSJEFatxrroS8avMWbRS7ZoVuvuSueA",
  "key4": "VoGY9EkRthXpAZPQQiV26kGRPAqVBESCWZNdrgmcK7octi3FbpkFYd4W7bHh6QyLnxTPNeJdS45nsLFfCV7FVeb",
  "key5": "4qa9TnmSNgwhjuxMn4diqSBJArfx2wQyjEQTEcVTY4iUVjJgML1jYxyg6f5rGcGfbKnHcxjKCmyhGNEVVyTwZivf",
  "key6": "4cmDUoBTnC6hTGsYPnsVLPqSuFRBeY1cnSj2i8bDRwjiu23CQiMHUNjNHHueLXrW8WCgM2Cy8tM3eu9kBhqKiace",
  "key7": "2hMwA8xAnrQbuYVqaF6jj7nd3awD9gNPodHTnugs9huBUDCEQLc41orSh4k1ok1soC3qoPyti1aPi3HS4X4eigiu",
  "key8": "2LL5WLKvtecujC489edkTSWCHiSgimk49sapRA56meXZorDLXX8bkCX92G3vHWrvvMgCa6M6wafwiqouz3BdFkDy",
  "key9": "44PfFwaQ5YmfnP1UNQmhz43gSuFVsiiKMpVKeVeAQvP937A17a2H4Vqx3cvzpW57SEfoHoFhssK4fPaxDGQCLJnW",
  "key10": "iFLFAfwXBHHQyFrKeMuycYtrQfmBUMGNiBFRf9KP4uABBgmh5wmSq83zvAUGBNxuw6dAgDo4NahbCHfUpxMMBE1",
  "key11": "2RV38CNghQPFq2ADG55KfpKNWrFLWM57DEGGRTSs5QvLiovieRZcBehfnQU5LCTV2FyfCPXbVZVpCFa91G1rwL2y",
  "key12": "4GqjWtY94iKWYqG8sekc7M7Gvz7Xz6Hz33VRqxXoXe1MhkLGAzLvQ2hQrJje9EYPMhiowRpY8Jp8XUxWXVZ7t2A1",
  "key13": "3M4Ez3zRCTowfNaRbP62Bn6Zk8co7UXqQHfM7w96f25icbBk33xRkAXDbPghEpU91RBV7ugqZQCq2m7UPKrnydwR",
  "key14": "41Erm9fkdRVh4t6xJkPVB7cq6fsuCGW84Uhushz43N2WetJs3dn9pkx8ihPNimeubTekjHUW93L3ve3krGLYfEyK",
  "key15": "4oTy1JKwZkkPAXXyGnN6tgfcJPFqf3QQze1k8detsSVGdLfos98xoSAqLSZYV3A4cRFoCRqijpH8qegRXJiDCLKL",
  "key16": "32g1ANRNmZSnFdPs9AoKMHifkm12WBk96B9jxLTZDrYsJtBcJnnceFxJFd84idaZx2CKjJj9RPK6kHnPoDi415Kc",
  "key17": "NRMJhMtddGgX8EHENTRJ71Z4CKwvYxhd7n1SQ86oqJaXwBPuUKeTkjvRWswWjPYXXG2Y1hJDE1FafoAcLQJXaHZ",
  "key18": "49S5GS4yz1rBgZQgRvsZqvheZqbEE6Trazd4GNpWicZLu5DDexpXfPxH6cHu3g9SDUqzUP7HcV7Mpd3QiE5S6tck",
  "key19": "267NWqKHzF8L4krkZ4xhkNmEJzFF9GLT1qwbWHFnVmMhAkekyzg1kmtu1JFXiwR2R5hWJi5uhgAGtaakAZ1seLT1",
  "key20": "UvPiqxikP7u3CLwkRqtNQUy8Be3onwLgQKVvYghZdGKruXvdEg2JBosH999RbjwzrqgR3fQYjs1LFjfnRG9wc8U",
  "key21": "3567y8qkPybGbChnd1Sd7HP5fsG419NZPJPS7MFQfi8Gj3cc5nGWJijduG4CMWTs5YQWxSiWCkMyPSHH1CneNYiP",
  "key22": "3EwMgzzVJG3thEVJg5rGnxmc9yJaBAuyXm4EeeF94QwWeUPeNJaPkGv5ptcrUjKcrx8zXd9SchjjCnuBhtr6rg1q",
  "key23": "L1HKgPZ8Ktn9iyvhENqtBPKpWn6W4CahPfTo7UaerYXh4UMncaEC6ZCMJECHRcwCY1MuknV3b1kTk6BbJh9WcNz",
  "key24": "3AyVCXpc7wxuFoimbBRxqXjN85ta51o2wTpGQkUWW1q4DT3ZcPaQoJnp5uNPJZUuCmxm6Et3S6mmEuguqeT3beuF",
  "key25": "qdRDuf21kRn6iKTv9Z2bKro8A763v1qJkjBfR4PKhLzrwz3gQtT68Pu42S5uBp15pRJSkUcRouww7GuMXNzhr1t",
  "key26": "5VWjGqo8it4oPhNyXXPpovAyAVUJp5DsoPiKVLZJD6kUsB55RL4vUmY89VLnvhxpAqS3iz7d8rFPbMnZhPL3zCd5",
  "key27": "5zPZtXK1p5icYrzfwtBXAPNuv9fRNWE2PB8ySjmXqzukvwA8ZP6dqYNcdmjrSSfH4Mf66R59abxUtDu619k4oLii",
  "key28": "4TonvJxLRDT7HfuVgtnnzNEmbEm3vmCRo4x7tUtFdgKPaSvN2xMx7XBFkozmvhNVZWQVMobxgDi7SfQiqbSM33U4",
  "key29": "5xAEnFwWvwyi5DbqotgEL6RBjxfzRmqijBKqUZmUVd32FPjdfLzx4rF23BDtSy1rW7y7ajhDXGpJkjzkXJ1mGUNm",
  "key30": "CyxfN4kYuh19s2kbV56MTwUU91PNvaeJV9tT8eTKQWS6d65VSqnMvAk3t61eCLYnAbEmbErEZNRN1HKADVJzCwC",
  "key31": "4gnDb1L274JogzcTEHFBVv491EJc6QwSh3aFEnmJCptGe8QztQEkJuLKSCCVNfdUXiTKJrt4ePpD3aQRNgH4DDyP",
  "key32": "G3D9QbACCZhiUncxqqcV2TuyBgtbPPGdHejVNdkais7sGub7EvxGmjEKz7MC7bgdz7UGTmWhAgvR5kmNUeJ9nRV",
  "key33": "3zpY4wRzHHwmwmQmZEUnfu7fQuFmiuotm4eGNgAGar5CiZPUwR2T2etAZPAujLKECtzL6CRK2KHkYbVgtNxsD2Zs",
  "key34": "3GRiQsJw11jQuMCKrEdRUpxfQAf3ATa7xwcvPb13KmJQXJPSRAsne68j1Gqg7GrF6rYBDuNa39rdFCbiiPz7mgHe",
  "key35": "5MKLqa1SfRkj8HLqpW3QgoYgxFrPjLwXu9HvVhdA1cR3mWMU4wzX5GGa6F7uQwdwJKrs1FdWb3Jpon2TkUFXsFHS",
  "key36": "34NEzaggVePX4WdAAQjdv1gU1DAkYW2AnYZx1NpnupADEkzFcWycYCvJ7ujKUZg9DLwxhZV1zpJ2NsPBHEVCbEAc",
  "key37": "3ixXVdGWPXSuJeqwjBZFjhPgWxHkHVtN2K19NVBSd9FySq7w8dELx4HZbEQN5eKRajUdx1SRUXXiSMGdXYouSYYD",
  "key38": "3hC9kS5jdYSpJSUztJMTtr9MEgSdBAZYFkNTKytRNZBJnnmLNYQKjge7AWaS3goHurgZPBuS9nwdxBmWcWFhmMco",
  "key39": "2PutD8BNbkAfnXpM7ZnvcT41JkF7dWPCQ22xHDDbL2PGD6HQCPqFV8Ww4oGGMDoGuphnGifFoGXPhqqtS7mx4EWZ",
  "key40": "2rtNRWNSMLmMprUwCHu16oQG8T2Rea7TiEUEq8MrjEdh5xAceNV8563VZ6fR6ACyYTwW9L5X9L1iqnHjmnHefYd3",
  "key41": "4GYuHKZK3scyLpkEzA1KAarZpjwDWcegSy4ADZswzmxGNqKygcLLZKXNbyJe5thVMg3gTnZY8BaFKSXBpuESVXXe"
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
