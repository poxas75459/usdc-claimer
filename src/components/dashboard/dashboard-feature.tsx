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
    "bCUUBptzM4wGvA4No7URvJ64EZtK4EGNsZJamx5Wz5Dz1jWacDsfFomVCjAapumeH2aDeoaPvmYiV9zLbXCWH1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtt24rPzxepXbmgZEoHMDP5F9kuiwtCKwNDxUUsu6Z7wTa72BETJVKSLvemXeisbPD6DzAeKd4qeUVFiGoi4Wtc",
  "key1": "2kMh9NgYRsoFY1CQD6zBon2cUprit54NzSYHoH9rUVq2zVzRpjqm3WxRD9LCquTRfDVWibAKEvWxWf3SFQ9YXRZJ",
  "key2": "567sGGJJHaKsTfwg1e6at2JDBpcKsyL7oG87AmkmVpfGe3Fa8xef46bst3rhtgNhHjfqpDYpQC34MzTNHLQPkxZJ",
  "key3": "4Mh5dKzo69NHmeuJYmTBVaYXen9kMu1jLddEofHyijc9LEVzZgUDxH9eSPgehMk1hNhi4BcVPX6XpXE7nyW8VkHV",
  "key4": "21QaDMkTL2RrjfDucQ3M7RzUf36KiHxTUBuCfqYcuUm9gcCXuueCwyeLbZXhodF39cicr5skKaGxsYKhqKmoDFRD",
  "key5": "2A2x1mMRTQUQQKn73y7k1isXFLD5cBvpVi1kWNVZKcVz3TVJB8b4caYC7dmeMmwVNu3HqDCNjMEF8C7Vbb3qTkMo",
  "key6": "f2xZFoR2zm3yp4vsrqEPLJ35CrACo7eoqBg8KzkVMZZvQQPJuVdf2aPuaYUa1XoVVFoKucaS9qoRKpZpkTvmZeY",
  "key7": "2WL1tyXusee591HfXyTLQ6uJnYQswRki2XWgrD8NpSp1q9dQmjrwkwu8ZxHkL9TFhLbr5pnnmshPXG2GrBq9csoL",
  "key8": "4sP5MhayFzySWd8qayughDiqpKgsev9o9TkHEwo1zNHzpsLqXUtfvpSCkpUKhoDRRtm8QU87ZumRorTQo5mC8bKW",
  "key9": "2Tg4SMbBqMz53oCghGjVdovz3vPxzuJmvxkMaCaTbk5GRBa9HLX7iuNSy827ckFy6j4qcFg5yHovATc2DN4b72WN",
  "key10": "2L3YYe4NGvdHZa6C4Y4HkXWHHW4MsjT9tSxe9DREJRUpW3t3FDQLbcHfHkyuE5UUNqEYQyjtR8F7RMBZaNZK8Vyp",
  "key11": "5r86CVG51feD2rrzhJC8NPQ3PRRhDqRAtea81DQ6AaFBy4wfMjBwkUWu28TD6TrYDjDds645wy54Y8ek6pu54LZ1",
  "key12": "4vgu8iBT8Vxkk5yg13k8jfLHrDQwgUPTZ6kogKzq2NHWMnPuLwTJ3L2RrLYT7gDSnwcexM68LRtbbiBLwmzxhSeQ",
  "key13": "5kcdRk6k8KuKRihC1XSXKDRiESdgvyGLUCQZ2toR9fdHUq2Lfw3W7zHJ9B9a2pS8pkWhCxxFWfqhVJjvycajDM75",
  "key14": "2gRGCxNKo8bpAPah9e3fh4yF5fetRZbKfdPdCf21vob5yRGZzQnzy4ZqJsKAA1CCE2qGfn438RrnjXETLq9Nw4H",
  "key15": "2nPRCAjGpkmSMUewswERdcXjgYEvsxHrg774zQVCYvGTqSHD4WH4WgAzckGi2WaygDVnZVg1RHckCAuruELehogd",
  "key16": "2yaMkfd92a8jcE6Tbn7RXyR2m25B2sLXYonVWePHJzraEe5PDGiLWc2Bi9LCb2SsbxThLvgWHRSD9q6Da56aWbZY",
  "key17": "5V3sPQc9QeRXjxkuWnxcQ8ymic3KE5qSmR9HP29UsHAhSt2kAUi7deKrZaWS1U1QAUQ8hqCuUXGRZogqaEocJ75U",
  "key18": "3MGq7f4DDwCVM7unDo9WYcJcXppgsShSkM2AyrWMw3hdqxUJMAXNU2XpYvmsXt4Zi1AYQq83DfWWhBFc4jSeKMAY",
  "key19": "4216toqyfSBrdYFyBSNJHus2EauNwHTVgv37gCDdwjquv2ozHmmuRnX9qM4Yuxp5p2dY4zBxh1hHQjQU9wE4pfqg",
  "key20": "3WhRSr4D1AJtDhLW4YrMNdcqQcEMyE9J78Hv3fBWvxWcRzK2NgQ77T4jVgMZD5bULFR1EfuvmwKySdkh7nRqeGLS",
  "key21": "5UqzYY6vFZ4fgRGnVAqHwa1cCr1C9ZGP6HVa4YoZ51KZ87PjwH3CAmvaXsAPNYeFhgVD9SRL9H84vkytyo5rCrpn",
  "key22": "672nvGLo98rKXj5Nrym7rJA3rSDEiZdkWws8YPnrBFMaGKGYqcKVm9QqXr7VPbUwzdJSC6ATHd5k5yHK1TbX7Jkz",
  "key23": "3LgG9enzLRRaNqqnURsmYALFi66AJDCsLE7LFCVTJeCZVRVMSoEGDokeNMEwA44R8NuYj1dYBs68rSiCFpg6KFHV",
  "key24": "4SYzu5sD7Q14LzXP5bukg7weTYByxRq4Pk3MuQrmaRELRFwfqCu1X825jhzXq27JWu6a8mugeSrZ2s7smGenAtee",
  "key25": "2t4rsWZn5381RfoQ53gzeF98HgJbZgfnFudRtJ845WnT1iUTg4teEykTEyhdDMYFVfTxzbj3L6ptMDANEigg4h9Y",
  "key26": "2V3HDr8zhYX1NrnuDK8AYWTqxW3FcZ7z3ba88YnyhWjs6ogfcnmScpZcfTDhkqaL8MeDVgVb2KRvpS5UittLB4WX",
  "key27": "5xVGjbnmDThGHC1r64dRXGWNUoFuRV2GXHjH8CKdAXi7EemMoaXoDjKWzC4GUdMAncYodEX36gLHZp9g86qBeDiK",
  "key28": "5jNUHHRZwaXcRsbVSW7kmubefMEDaUoSdB9Tz5YedDJxtP7Yo1AuGKz4Edbd5WmVGfy92wWbYKMFLjHTESAXpHmK",
  "key29": "47NyHinTQUuM9RBbxBLxuEq76qyJB5w23q15FfoGxXxRHzJH1q2sEb5jMZD4bQZ4CiYv4fYx1iVEb2aw6zb1mdp2",
  "key30": "2r75eQwhyKnTU14778ao96WoEccorT8nGuNdSWT6zpK6QqqpgHCLHsxvQe5AawPFE8aa8vsNqenG8xa5wuwSRSF2",
  "key31": "LYSoXh3oYM4LVYBNDMzFakWPRERimbnm4NypyZJjW56CfMEB6NysxvT7ptCYnvZaSKUdyVGmy3SkvXSJdUZHTQt",
  "key32": "5HywuhucQsXu1SKYbGP57ZJRZnn1Zn3f2iZdRXR9EpDinxvXP41Bwzfaa3im2U86tLp3zcJsHTDsMRxaXgUJrJwn",
  "key33": "3SLJDPXJHkBTqfcTBBWpE5bz23ZGAcBuN7tVig9z28fiTAf127NEmHpg7iSJvnCKrcvDAvYGrTjcwzwufUjb1MFt",
  "key34": "5zoeNUuy4My1fWigEmbZze3uMcjpZdMQar8jbdMLZGNQka6NnDmRgzU3K7Wo1ySX7FXie9apX3JZeesgGGE4DRxG",
  "key35": "5x5Nbt4gNfom1MjJBvm34tKSBtxdrM5mCM9jNTqVDvJRTwFJB4QRiei3ePYif2ZSUnkLb1KrrNhVciE7g87ur2Yh",
  "key36": "4U1VXLPJAuA7ciHct6mXbe7EGVqR3BCUz2dxoMBKFeDZWBevNpvrVWwDXkiWqTBWEYAj2sPhxhPsqAwBRZZkTwcY",
  "key37": "33UEHpUuJHa2ZUnKCFV3APkxQgCPJYrfnqf649YnpPjwxknoYE66TzA2pC2HS4BQaKJygbtu2YrJs4h7cXw4DbkB",
  "key38": "27D8xbwKEWxRj4u86oNBNEU4ohqNK3TjUiyasdQH9od1w5ZqSigt4ehjHjca8qWTo76oNWCj2gZEkVtQs8VjCuK8",
  "key39": "2e4FYnCxN1PH9AcLvacbi7AiS63VLVrX6HjRfCp5SRch9XpGUaQMjNG7eqsPDLmtExZ9EaJKxh1XRkquH924MKyc",
  "key40": "4e8GpPjjCdegVGBXjNv4y88Ptjy7UgUkzGcbgPq8B4MAqZrJ4aiKPpAu922ipoknVq4PqaQu9tvmBNinR8qikyF9",
  "key41": "pNGMzieqHExyDy3qWVrLjsMwYCaSSRS5uZSLdHMbCSqpeU5GoqW3a8eaBXKmmxJJFbBQTdm9AU6JYvrYazGdMPg",
  "key42": "4Mx89zNEEpAs3peCeTw5Pq7dpJRJtRjQR29HaYL3wixLMMCjEd54ye65y7NsHEmy7UtUparCTjZLNDUnWQjETWqL",
  "key43": "66c6RuZ89JmTEZNnesrFVDj3srYSh1y6DxMRyQo7E7XTs5otLx4VXznKGXiVT7pUBQgGMx3bFJZTDn89kx2bvGuo",
  "key44": "Sd8CkYDGGazTMg8VU1WT3mjUpeNrpp5FniqzxN5GQpR2PPQVNxYDTVuXV7yjHBkDghXxE6UQvX3WfcJHCPFXaXd",
  "key45": "2b41JJnB442j5PMbSeFuzQDxyJc8HvbqUK2CtxiaTb84rMfLm97KAfnNYJvjGDoRtjKn3TMTuJqYqhPF5MNu6qLg"
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
