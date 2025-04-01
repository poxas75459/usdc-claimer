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
    "26pP1JVp3Umcv9GTZxSfuQU24WwgHXqChxdnfYTSVEMoHbzqnr67XzFbknbaUaVsTMNJauuKu9bagqGsuiUo5Dfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unubogngD6FXmJA2KNMGqZYqhmqErvk7Va6LHkfYG7V1CKJj7Efhpn5K3A3wU6uwBtgDAoXQk8evxksdrMVT8Cz",
  "key1": "GCKvP5XZYTELR2rxtDUDGGc6C9b5D3UiUSAJvNCcEDyYHHjzgy1ARa1DHdg1zJCh25FqADaborix7BbVVeHMEWd",
  "key2": "397etgU1kff7qS3eQqcZTTfCtweQtRh7Avf8ySokRmiPLNVZdEyKmM7BvwD27M5nRjrk5tqXyTkCy6vaEB5TRb95",
  "key3": "5GAgucZRNDHYXQmdPyo9FvpkZhBmLW4tL1JzoKQM6ZuVdGn2sahTLfR3hH6F9aRvBsbkFf2PnAw8RfdtoLMtARLQ",
  "key4": "4N31hKHUUMKJ4RMhXtkW3aLPcntR4Jwp7vzMAhyoWu8rKpoERNBBRPrzTv7jmj4j2jeThp215uK4NkVXPpcxn2di",
  "key5": "57aNLXBHAXbGutCeXbSEyh5bQN63rZvUkWcXDHdpEjXVfdmg9TsHpyhJ6oPvHMc72S9UA339Qy3BDSbiNZzjNqhm",
  "key6": "2P7Xu6MzHk69ra91miScFHHUxPM1vUKzNnL4L1hxc36Ycw9eJYywrnVNkSddQrXT69agB6F8vkGkVPz32iXbUwPr",
  "key7": "SNK19HD8ejC2Gdo4LhuhrBuWaK7S9L4uUdhXAksNjJQrpF8W2bpuFifJXGmTEF4Nhcm14S7UAka3vskstwJTSQL",
  "key8": "5U7ZfeH7PYdQi7cspwQnD9vVTr2AfhjZr5HhcPRuu66zm1tazPjseGqkJpRcFnCP1MZ94vg938fzKzs4GgdiKLrC",
  "key9": "4xf3c5m9WSG74qRA3RqZZXpepjuu2vK3CbyGLLYSkKAjzMog7g5BigPWkwnL1KJi86Y1jrcGZhkna22pVUxyDaXi",
  "key10": "2Fin2t6k4tuiJM782zg5Z7dRAMKw8eBbEuAY46Ypac5KKd9UNg49GYKpZYHNoNtNRMqmg68sJe6bJj5ZBuDCJEFB",
  "key11": "oZgrVvVvVNQv7Vd69tHLwi6o7qtB6rc44aVhhM1wdxXzwCygHDLdinQK2zDaPQibLRsxi6HE5TAcY16NpuHmi7R",
  "key12": "3d8mXLeqNdJXkM7dm9FEeAZQK7kaEa7JgS48N2uBjZ28eL1U33q6HEFmSGbuGeNFFXAbNrEJV5YuqRcWBrXvymch",
  "key13": "4BC2SNYRX95mngHwbJ6ksQcdEyCWwG4pTMJpvs26VLcNdpkKm5wAFRhKrTBfzTeM53GW4tffYGwhM8mjBr1PnGHh",
  "key14": "2vEANtBxezdGv2hCFUp4AU8cKni4odaeEy9qC83VeNY1z7C3Q4Y6PXm3ZPj5nb9HRCNKqmYktdgs3vg5yLBDiijf",
  "key15": "3dZdr2qbd4f1W13qZtue9zmzY5s2zQWjP2nSUjsQY7WUVFSs7dZ44gMY3Z2QcWNrMuudYKReewXueEpPomEV9L3H",
  "key16": "4sKFatdaNFNMRc1o8n3VMxiYbrKdHJxo6wXVRQt52Seam3zxFZQ3BhDe8asK4iuJwSxHdpvWTJzpkJEK4NWjPoah",
  "key17": "yiW5EgRCH3wYS3sWbPVNB3gb4QguTmRgwRN8kcubPmVxg73PSSB1zVFsUpQjhSvKqr94p7oYxP5wEtjjpkSfLqd",
  "key18": "2Mkyo7CTT4HLM4WVqqzH3NXs8hY1dCvuRGHvShQZwCQ8PVkNmRWBeFUxuAUBq8gUgWyYCLiwFfsEL1zft1y9mo4j",
  "key19": "4DGLvPX5cx31MyfSxZPkm1EqzeEsAowv7Z2FM1S9ppqvtBkRGKNdfBCXtksn3Hoo3QrESzjXceVfpaa2E9HSNWTX",
  "key20": "3TpL6Fy43ifwB2nkChN1bVMkGzZ8owesXbxGv6dAbhUTr78Z3UU8PfMhpD5o5NpBShk7tyTcVwRWrNA55bfy5wrF",
  "key21": "3nkQmJmpzJ361Y9a6ij9fT5txu4Jev5yDvGaKP8GLBG3h255uDDnefAVECQhg1VX7ES7Vu1Fy33cUHumJzXipn8J",
  "key22": "2BU7EJmGRN36qmbd8P5v2U3JVEvdWZapRXpVLtt1GwPEwrsjFF4qoFFW4SWvAQ4ekQ4fpr3V7QzfqZDiv7mMGqHf",
  "key23": "3HF9h33L99tyQjBMNBdeKYX6zmFyskmKUw6XKAjFRciU5EiU2XvA5V2qwug4UDHuFvgKwoWY9TP4L7u7qNqufUnE",
  "key24": "3Dm5r72CKe4hHYNhk6bvgLLNBuBrMW3PeQpRMtA6jYdjsUavPA57ZKTkC2kQV11FKLjSLzPkzncBTxzNMxQM8RBh",
  "key25": "4gnr3ivBKJKQSf1GNEBSty2KwJZ1XHx4VnyfryjN3WYBqraQW9xS7WtcGH7zV5pJv3bsq489fGGYPHEFw9pNApz4",
  "key26": "5swrvP8CgMX8GgV6quLqjx44E8ebF8whDkGU9D6FeKKdsQh281A7u1Brj4AYhLDhcoCuBypTQ5vXxE3iQiCNXvfd",
  "key27": "67ZKxVA1LUFz7BtnYgSYtx2cn85WzaxsMoE9ktdohMpX3T49ehYVj1qxAij7V7m8kGDrFV6eWsdMX5SAEFT7UN85",
  "key28": "2R16skKWLgMC53XL6CTvnzQxA6KwkrU7wa4vGtQzFybZf1XMgjb74BwYUvNQ4qcZnvpb71etq8xVh7geDAHy9cHc",
  "key29": "KwxrK1M7LpuQguE4bBZPPdhSoV5xPK8ofL1eTiKCeT8JTmmwb3bh6kiEwd3TWVfNWygPvU7ubbiyCvG2sHvYoMG",
  "key30": "57xTUC21F9WZLFTSdrpMJjTiH4GNZmhRyGAVHrDpgMS7Ei4HSLfFH24HezyqcoF1yyXEC5xwYo5eAkUmEy28X11s",
  "key31": "5FmJieJ2dBk4FxEW4AmLKCXFd3K3zYaJAAUedKPQQ6AfsS9kmZS3PAsmH76aKLnuxNrK3mCZdHiPUZ3rrR5urdeW",
  "key32": "4JqRK5KkFfwWTk38DgZJuJ2uvj6TPCbp7ZhU2zu13VS1yA7q6fnxqZD4sAmMNmsxR56QhfKTW7gZG71GYqdPMeQA",
  "key33": "3qDG3JdeLZEEdNSRXFx9hJJFvsvLmeaNyr24EvXQmuw78VCUpxSjZFieqTKXbKp1LBWWckxFjQKNyXGWUR5jSjNm",
  "key34": "4Z659PxVFUSjsZnUQamKyiSEr2HZEmDPZYb5GpvaJA7qEHZUZHYDx6aHjE5EVJzAe7waGQP4TRxFX3fcXV3Pzm9U",
  "key35": "27ziME4xEM7AyMDQGpfGHWetripBBkZK3q9LfChtXgQnvUetcNrKSxrDuPUB3F8tw8EX62dWjriJcYzU8VZQ469J",
  "key36": "61yu9HU2fCC19368GagAyqdxpGNvSQKTJDgtfXWzVykf2KA8M6GqpYMrLkPHvUD1Mvhtd77icQMVTvW6a71eyC2q",
  "key37": "4tZYkXXiSmVomfw7t1o2ynXcpQ7LLRmQEd8QFuQqRk4SnJXugAKK2HcvrEftKuG487w4euR4qGG5ti8t8JJPxppT",
  "key38": "5KiogTCAAmLPSktqkwcP8AAktHg4tmhvK7DyGqCnxVcwi2xHkL4wVpj8Li181HEphkoVeRKyDC8Ka5RjwYERfATM",
  "key39": "251qqnYkTHZ6YRaZeTvAtMysdXPzvxWGWRHTeagV7qr6eqLst51ZncLB7fGwF4Ve6XTTuQdNgZLDQudvqK141KBB"
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
